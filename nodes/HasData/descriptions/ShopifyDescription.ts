/* eslint-disable n8n-nodes-base/node-param-description-excess-final-period */
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

export const shopifyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['shopify'],
			},
		},
		options: [
			{
				name: 'Get Shopify Store Collections',
				value: 'collections',
				description: 'Retrieves a list of collections along with their details from a Shopify store.',
				action: 'Get Shopify Store Collections',
			},
			{
				name: 'Get Shopify Store Products',
				value: 'products',
				description: 'Retrieves product information from a Shopify store with optional limits and collection filtering.',
				action: 'Get Shopify Store Products',
			},
		],
		default: 'collections',
	},
];

export const shopifyFields: INodeProperties[] = [
	{
		displayName: 'Store URL',
		name: 'url',
		type: 'string',
		default: '',
		description: 'The URL of the Shopify store. For example, \'https://b2bdemoexperience.myshopify.com\'.',
		displayOptions: {
			show: {
				resource: [
					'shopify',
				],
				operation: [
					'collections',
					'products',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'shopify',
				],
				operation: [
					'collections',
					'products',
				],
			},
		},
		options: [
			{
				displayName: 'Results Limit',
				name: 'limit',
				type: 'number',
				default: '',
				description: 'The maximum number of collections to retrieve. Must be between 1 and 250.',
				displayOptions: {
					show: {
						"/operation": [
							'collections',
						],
					},
				},
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				description: 'The page number of the results to retrieve. Must be a positive integer.',
				displayOptions: {
					show: {
						"/operation": [
							'collections',
							'products',
						],
					},
				},
			},
			{
				displayName: 'Results Limit',
				name: 'limit',
				type: 'number',
				default: '',
				description: 'The maximum number of products to retrieve. Must be between 1 and 250.',
				displayOptions: {
					show: {
						"/operation": [
							'products',
						],
					},
				},
			},
			{
				displayName: 'Collection',
				name: 'collection',
				type: 'string',
				default: '',
				description: 'The handle of the collection to filter the products. Provide the collection handle as a string.',
				displayOptions: {
					show: {
						"/operation": [
							'products',
						],
					},
				},
			},
		],
	},
];
