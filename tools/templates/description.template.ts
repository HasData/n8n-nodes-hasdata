/* eslint-disable */
export function generateDescriptionFile(
    resourceName: string,
    operations: any[],
    fields: any[]
): string {
    const camelResource = resourceName.replace(/_([a-z])/g, (g) => g[1].toUpperCase());

    function cleanStringify(obj: any, tabs: number = 0): string {
        const indent = '\t'.repeat(tabs);
        if (Array.isArray(obj)) {
            if (obj.length === 0) return '[]';
            return '[\n' + obj.map(v => '\t' + indent + cleanStringify(v, tabs + 1)).join(',\n') + ',\n' + indent + ']';
        } else if (typeof obj === 'object' && obj !== null) {
            const keys = Object.keys(obj);
            if (keys.length === 0) return '{}';
            return '{\n' + keys.map(k => {
                const v = obj[k];
                const cleanKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
                return '\t' + indent + cleanKey + ': ' + cleanStringify(v, tabs + 1);
            }).join(',\n') + ',\n' + indent + '}';
        } else if (typeof obj === 'string') {
            return "'" + obj.replace(/'/g, "\\'").replace(/\n/g, "\\n") + "'";
        }
        return JSON.stringify(obj);
    }

    const optionsJson = cleanStringify(operations, 2);
    const fieldsJson = cleanStringify(fields, 0);
    const opValue = operations.length > 0 ? operations[0].value : '';

    return `/* eslint-disable n8n-nodes-base/node-param-description-excess-final-period */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-collection-type-unsorted-items */
/* eslint-disable n8n-nodes-base/node-param-default-wrong-for-options */
/* eslint-disable n8n-nodes-base/node-param-operation-option-action-miscased */
/* eslint-disable n8n-nodes-base/node-param-description-untrimmed */
/* eslint-disable n8n-nodes-base/node-param-description-excess-inner-whitespace */
/* eslint-disable n8n-nodes-base/node-param-description-excess-final-period */
/* eslint-disable n8n-nodes-base/node-param-description-miscased-json */
/* eslint-disable n8n-nodes-base/node-param-type-options-missing-from-limit */
/* eslint-disable n8n-nodes-base/node-param-default-wrong-for-limit */
/* eslint-disable n8n-nodes-base/node-param-description-wrong-for-limit */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-comma-separated-hyphen */
/* eslint-disable n8n-nodes-base/node-param-type-options-password-missing */
/* eslint-disable n8n-nodes-base/node-param-description-identical-to-display-name */
/* eslint-disable n8n-nodes-base/node-param-multi-options-type-unsorted-items */

import { INodeProperties } from 'n8n-workflow';

export const ${camelResource}Operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['${resourceName}'],
			},
		},
		options: ${optionsJson},
		default: '${opValue}',
	},
];

export const ${camelResource}Fields: INodeProperties[] = ${fieldsJson};
`;
}
