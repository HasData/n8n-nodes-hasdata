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

export const redfinOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['redfin'],
			},
		},
		options: [
			{
				name: 'Get Redfin Real Estate Listings',
				value: 'listing',
				description: 'Retrieves real estate listings from Redfin based on various search parameters.',
				action: 'Get Redfin Real Estate Listings',
			},
			{
				name: 'Get Redfin Property Details',
				value: 'property',
				description: 'Retrieves detailed information about a specific property from Redfin using the property\'s URL.',
				action: 'Get Redfin Property Details',
			},
		],
		default: 'listing',
	},
];

export const redfinFields: INodeProperties[] = [
	{
		displayName: 'Location',
		name: 'keyword',
		type: 'string',
		default: '',
		description: 'The zipcode used to search for listings.',
		displayOptions: {
			show: {
				resource: [
					'redfin',
				],
				operation: [
					'listing',
				],
			},
		},
	},
	{
		displayName: 'Listing Type',
		name: 'type',
		type: 'options',
		default: '',
		description: 'The type of listing.',
		displayOptions: {
			show: {
				resource: [
					'redfin',
				],
				operation: [
					'listing',
				],
			},
		},
		options: [
			{
				name: 'forSale',
				value: 'forSale',
			},
			{
				name: 'forRent',
				value: 'forRent',
			},
			{
				name: 'sold',
				value: 'sold',
			},
		],
	},
	{
		displayName: 'Property URL',
		name: 'url',
		type: 'string',
		default: '',
		description: 'The URL of the property on Redfin. Must be a valid Redfin property URL.',
		displayOptions: {
			show: {
				resource: [
					'redfin',
				],
				operation: [
					'property',
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
					'redfin',
				],
				operation: [
					'listing',
				],
			},
		},
		options: [
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: '',
				description: 'The page number of the results to retrieve.',
				displayOptions: {
					show: {
						"/operation": [
							'listing',
						],
					},
				},
			},
		],
	},
];
