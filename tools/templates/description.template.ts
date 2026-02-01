export function generateDescriptionFile(
    resourceName: string,
    operations: any[],
    fields: any[]
): string {
    const camelResource = resourceName.replace(/_([a-z])/g, (g) => g[1].toUpperCase());

    return `import { INodeProperties } from 'n8n-workflow';

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
		options: ${JSON.stringify(operations, null, 4)},
		default: '${operations[0]?.value || ''}',
	},
];

export const ${camelResource}Fields: INodeProperties[] = ${JSON.stringify(fields, null, 4)};
`;
}
