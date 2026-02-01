
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import { generateDescriptionFile } from './templates/description.template';

const API_DOCS_PATH = path.resolve('../scrapeit-api-gateway-2/api-docs');
const OUTPUT_PATH = path.resolve('../nodes/HasData/descriptions');
const CONFIG_PATH = path.join(__dirname, 'generator-config.json');

interface GeneratorConfig {
    excludeOperations?: Record<string, string[]>;
    operationOrder?: Record<string, string[]>;
}

// Load configuration
let config: GeneratorConfig = {};
if (fs.existsSync(CONFIG_PATH)) {
    const configContent = fs.readFileSync(CONFIG_PATH, 'utf8');
    config = JSON.parse(configContent);
    console.log('Loaded generator configuration');
}

console.log(`Reading API docs from: ${API_DOCS_PATH}`);
console.log(`Writing output to: ${OUTPUT_PATH}`);

if (!fs.existsSync(OUTPUT_PATH)) {
    fs.mkdirSync(OUTPUT_PATH, { recursive: true });
}

interface OpenApiParameter {
    name: string;
    in: string;
    description?: string;
    required?: boolean;
    schema?: {
        type: string;
        default?: any;
        enum?: string[];
        minimum?: number;
        maximum?: number;
        items?: {
            type: string;
            enum?: string[];
        }
    };
    'x-title'?: string;
    'x-group'?: {
        title: string;
        order: number;
    };
    'x-values-mapping'?: Record<string, string>;
}

interface OpenApiOperation {
    summary?: string;
    description?: string;
    operationId?: string;
    parameters?: (OpenApiParameter | { $ref: string })[];
    requestBody?: {
        required?: boolean;
        content?: {
            'application/json'?: {
                schema?: {
                    type: string;
                    properties?: Record<string, any>;
                };
            };
        };
    };
}

interface OpenApiSpec {
    paths: Record<string, Record<string, OpenApiOperation>>;
    servers?: { url: string }[];
}

// Helper to resolve $ref
function resolveRef(ref: string, currentFile: string): OpenApiParameter {
    // ref: ./params/domains.yaml#/components/parameters/GoogleDomainParam
    // absolute ref logic needed
    const [filePath, refPath] = ref.split('#');
    const absoluteFilePath = path.resolve(path.dirname(currentFile), filePath);

    // Cache or read file
    const fileContent = fs.readFileSync(absoluteFilePath, 'utf8');
    const doc = yaml.load(fileContent) as any;

    // Traverse refPath: /components/parameters/GoogleDomainParam
    const parts = refPath.split('/').filter(p => p);
    let current = doc;
    for (const part of parts) {
        current = current[part];
    }

    if (!current) {
        throw new Error(`Could not resolve ref: ${ref} in ${currentFile}`);
    }
    return current as OpenApiParameter;
}

function mapType(schemaType: string): string {
    switch (schemaType) {
        case 'string': return 'string';
        case 'integer':
        case 'number': return 'number';
        case 'boolean': return 'boolean';
        case 'array': return 'string'; // n8n multi-options often treated as string or collection, but simplified to string/options for now or string array?
        // simple n8n parameters usually expect string/number/boolean/json
        default: return 'string';
    }
}

function processResource(resourceName: string, resourcePath: string) {
    const files = fs.readdirSync(resourcePath).filter(f => f.endsWith('.yaml') || f.endsWith('.yml'));

    const operations: any[] = [];
    const fields: any[] = [];
    const seenFields = new Set<string>();

    // Capitalize resource name for display
    const resourceDisplayName = resourceName.charAt(0).toUpperCase() + resourceName.slice(1).replace(/_/g, ' ');

    // Store operations
    const opOptions: any[] = [];

    files.forEach(file => {
        const filePath = path.join(resourcePath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        try {
            const doc = yaml.load(fileContent) as OpenApiSpec;
            if (!doc.paths) return;

            const pathKeys = Object.keys(doc.paths);
            if (pathKeys.length === 0) return;
            const pathKey = pathKeys[0]; // Assuming one path per file usually
            const method = Object.keys(doc.paths[pathKey])[0];
            const op = doc.paths[pathKey][method];

            // Determine operation value/name
            const opValue = path.basename(file, path.extname(file));

            const opName = op.summary || opValue;
            const opDescription = op.description || '';
            // Use opName directly as it already contains the full description
            const actionDescription = opName;

            // Check if this operation should be excluded
            const excludedOps = config.excludeOperations?.[resourceName] || [];
            if (excludedOps.includes(opValue)) {
                console.log(`  Excluding operation: ${opValue} (${resourceName})`);
                return;
            }

            opOptions.push({
                name: opName,
                value: opValue,
                description: opDescription,
                action: actionDescription
            });

            // Process Parameters
            if (op.parameters) {
                op.parameters.forEach(paramOrRef => {
                    let param: OpenApiParameter;
                    if ('$ref' in paramOrRef) {
                        param = resolveRef(paramOrRef.$ref, filePath);
                    } else {
                        param = paramOrRef;
                    }

                    // Unique key for field to avoid duplicates if multiple ops use same param?
                    // But we want to show fields ONLY for specific ops usually.
                    // The n8n architecture I used: top-level properties list with displayOptions.
                    // So we add every field, but with displayOptions.

                    const fieldName = param.name;
                    const fieldKey = `${resourceName}_${fieldName}`; // Unique-ish? No, fields are shared across ops in the same resource file usually.

                    // Actually, if 'q' is used in 'serp' and 'images', we can define it once and show for both.
                    // BUT my previous manual separation had separate files per resource.
                    // Here we are generating ONE file per resource: e.g. GoogleDescription.ts containing googleOperations and all googleFields.
                    // So we need to merge fields.

                    // We need a map of FieldName -> { definition, operations: [] }
                });
            }

        } catch (e) {
            console.error(`Error parsing ${file}:`, e);
        }
    });

    // Sort operations according to config if provided
    const operationOrder = config.operationOrder?.[resourceName];
    if (operationOrder && operationOrder.length > 0) {
        opOptions.sort((a, b) => {
            const indexA = operationOrder.indexOf(a.value);
            const indexB = operationOrder.indexOf(b.value);

            // If both are in the order config, sort by their index
            if (indexA !== -1 && indexB !== -1) {
                return indexA - indexB;
            }
            // If only A is in config, it comes first
            if (indexA !== -1) return -1;
            // If only B is in config, it comes first
            if (indexB !== -1) return 1;
            // If neither is in config, maintain original order
            return 0;
        });
        console.log(`  Sorted operations for ${resourceName} according to config`);
    }

    // Second pass: Process fields properly aggregating displayOptions
    const fieldMap = new Map<string, { param: OpenApiParameter, ops: string[] }>();

    files.forEach(file => {
        const filePath = path.join(resourcePath, file);
        const opValue = path.basename(file, path.extname(file));

        // Check if this operation was excluded
        const excludedOps = config.excludeOperations?.[resourceName] || [];
        if (excludedOps.includes(opValue)) {
            return;
        }

        try {
            const doc = yaml.load(fs.readFileSync(filePath, 'utf8')) as OpenApiSpec;
            if (!doc.paths) return;
            const pathKey = Object.keys(doc.paths)[0];
            const method = Object.keys(doc.paths[pathKey])[0];
            const op = doc.paths[pathKey][method];

            // Process parameters
            if (op.parameters) {
                op.parameters.forEach(paramOrRef => {
                    let param: OpenApiParameter;
                    if ('$ref' in paramOrRef) {
                        param = resolveRef(paramOrRef.$ref, filePath);
                    } else {
                        param = paramOrRef;
                    }

                    const key = param.name;
                    if (!fieldMap.has(key)) {
                        fieldMap.set(key, { param, ops: [] });
                    }
                    fieldMap.get(key)!.ops.push(opValue);
                });
            }

            // Process requestBody (for web scraping API)
            if (op.requestBody?.content?.['application/json']?.schema?.properties) {
                const properties = op.requestBody.content['application/json'].schema.properties;

                Object.entries(properties).forEach(([propName, propSchema]: [string, any]) => {
                    // Convert requestBody property to OpenApiParameter format
                    const param: OpenApiParameter = {
                        name: propName,
                        in: 'body',
                        description: propSchema.description,
                        required: propSchema.required || false,
                        schema: {
                            type: propSchema.type,
                            default: propSchema.default,
                            enum: propSchema.enum,
                            minimum: propSchema.minimum,
                            maximum: propSchema.maximum,
                            items: propSchema.items
                        },
                        'x-title': propSchema['x-title'],
                        'x-group': propSchema['x-group'],
                        'x-values-mapping': propSchema['x-values-mapping']
                    };

                    if (!fieldMap.has(propName)) {
                        fieldMap.set(propName, { param, ops: [] });
                    }
                    fieldMap.get(propName)!.ops.push(opValue);
                });
            }
        } catch (e) { }
    });

    // Convert fieldMap to n8n properties
    const n8nFields: any[] = [];

    // Sort fields: Required first, then by 'x-group' order?
    // Map entries to array
    const sortedFields = Array.from(fieldMap.entries()).sort((a, b) => {
        const paramA = a[1].param;
        const paramB = b[1].param;

        // Priority 1: Required
        if (paramA.required && !paramB.required) return -1;
        if (!paramA.required && paramB.required) return 1;

        // Priority 2: x-group order
        const orderA = paramA['x-group']?.order ?? 99;
        const orderB = paramB['x-group']?.order ?? 99;
        return orderA - orderB;
    });

    // Determine "Advanced" fields to group into a collection?
    // Strategy: 
    // - required fields -> Top level
    // - "Common" fields (url, q, location, limit, page, sort, checkIn, checkOut) -> Top level
    // - Everything else -> "Additional Options" collection?
    // OR: Just follow x-group.
    // If x-group title is 'Advanced Parameters' or 'Advanced Filters' -> put in collection.

    const topLevelFields: any[] = [];
    const collectionOptions: any[] = [];

    // We need one collection per Resource if we group them.
    // But different operations have different advanced fields.
    // Simpler: Keep everything top-level for now unless we can smartly group.
    // The user manually grouped 'Advanced Parameters' for Google SERP.
    // Let's try to replicate: If x-group.title contains "Advanced", put in collection named `${resourceName}Options`.

    // NOTE: n8n collections are complex when specific options show for specific operations.
    // It's easier to verify everything top level first, OR:
    // Create one collection "options" and put all non-required / non-common fields there.
    // But we need to handle displayOptions strictly.

    // Let's stick to flat list for simplicity in this generated version, UNLESS x-group says "Advanced".
    // If multiple operations share a collection, the collection options need displayOptions too.

    // Let's try to generate a Flat list but respect `x-title` as Display Name.

    // Determine "Advanced" fields to group into a collection?
    const requiredFields: any[] = [];
    const optionalFields: any[] = [];

    // 1. Collect required fields for top level
    for (const [name, { param, ops }] of sortedFields) {
        if (param.required) {
            requiredFields.push({
                displayName: param['x-title'] || name,
                name: name,
                type: mapType(param.schema?.type || 'string'),
                default: param.schema?.default !== undefined ? param.schema?.default : (param.schema?.type === 'boolean' ? false : ''),
                description: param.description,
                displayOptions: {
                    show: {
                        resource: [resourceName],
                        operation: ops
                    }
                },
                // Enum handling
                ...((param.schema?.enum || param['x-values-mapping']) ? {
                    type: 'options',
                    options: param['x-values-mapping']
                        ? Object.entries(param['x-values-mapping']).map(([key, val]) => ({ name: val, value: key }))
                        : param.schema?.enum?.map(v => ({ name: v, value: v }))
                } : {})
            });
        } else {
            // Optional field for the collection
            optionalFields.push({
                displayName: param['x-title'] || name,
                name: name,
                type: mapType(param.schema?.type || 'string'),
                default: param.schema?.default !== undefined ? param.schema?.default : (param.schema?.type === 'boolean' ? false : ''),
                description: param.description,
                displayOptions: {
                    show: {
                        '/operation': ops
                    }
                },
                // Enum handling
                ...((param.schema?.enum || param['x-values-mapping']) ? {
                    type: 'options',
                    options: param['x-values-mapping']
                        ? Object.entries(param['x-values-mapping']).map(([key, val]) => ({ name: val, value: key }))
                        : param.schema?.enum?.map(v => ({ name: v, value: v }))
                } : {})
            });
        }
    }

    // Add required fields at top level
    fields.push(...requiredFields);

    // 2. Create ONE "Additional Fields" collection if there are optional fields
    if (optionalFields.length > 0) {
        // Collect all operations that have at least one optional field
        const opsWithOptional = new Set<string>();
        for (const [_, { param, ops }] of sortedFields) {
            if (!param.required) {
                ops.forEach(op => opsWithOptional.add(op));
            }
        }

        fields.push({
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    resource: [resourceName],
                    operation: Array.from(opsWithOptional)
                }
            },
            options: optionalFields
        });
    }

    // Generate File Content using template
    const camelResource = resourceName.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    const pascalResource = camelResource.charAt(0).toUpperCase() + camelResource.slice(1);

    const finalContent = generateDescriptionFile(resourceName, opOptions, fields);

    fs.writeFileSync(path.join(OUTPUT_PATH, `${pascalResource}Description.ts`), finalContent);
    console.log(`Generated ${pascalResource}Description.ts`);

    return { name: pascalResource, snake: resourceName };
}

// Main Loop
const resources = fs.readdirSync(API_DOCS_PATH, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => !name.startsWith('.')); // skip hidden

const generatedResources: { name: string, snake: string }[] = [];

resources.forEach(resource => {
    // skip params dir if it shows up at top level? No, params is inside google_serp.
    if (resource === 'node_modules') return;
    const res = processResource(resource, path.join(API_DOCS_PATH, resource));
    if (res) generatedResources.push(res);
});

// Generate or Log instructions for HasData.node.ts?
// Use a simple template to verify what was generated.
console.log('Done generating description files.');
