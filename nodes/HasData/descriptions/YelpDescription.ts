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

export const yelpOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['yelp'],
			},
		},
		options: [
			{
				name: 'Get Yelp Place Details',
				value: 'place',
				description: 'Retrieves detailed information about a specific place from Yelp using the place\'s Yelp ID or Yelp Alias.',
				action: 'Get Yelp Place Details',
			},
			{
				name: 'Get Yelp Search Results',
				value: 'search',
				description: 'Retrieves search results from Yelp based on the specified keyword and location.',
				action: 'Get Yelp Search Results',
			},
		],
		default: 'place',
	},
];

export const yelpFields: INodeProperties[] = [
	{
		displayName: 'Place ID',
		name: 'placeId',
		type: 'string',
		default: '',
		description: 'The Yelp ID or Yelp Alias of the place. For example, \'jPIZ3FR5LNcwPuUHi2Fe4g\' or \'mcdonalds-new-york-386\'.',
		displayOptions: {
			show: {
				resource: [
					'yelp',
				],
				operation: [
					'place',
				],
			},
		},
	},
	{
		displayName: 'Search Query',
		name: 'keyword',
		type: 'string',
		default: '',
		description: 'The search term for which to get the search results.',
		displayOptions: {
			show: {
				resource: [
					'yelp',
				],
				operation: [
					'search',
				],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location',
		type: 'string',
		default: '',
		description: 'The location where to search for businesses with the given keyword.',
		displayOptions: {
			show: {
				resource: [
					'yelp',
				],
				operation: [
					'search',
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
					'yelp',
				],
				operation: [
					'search',
					'place',
				],
			},
		},
		options: [
			{
				displayName: 'Area',
				name: 'l',
				type: 'string',
				default: '',
				description: 'Parameter defines the distance or map radius for the search results. For example: `g:-95.2486,29.8496,-95.4277,29.6324`.\n',
				displayOptions: {
					show: {
						"/operation": [
							'search',
						],
					},
				},
			},
			{
				displayName: 'Result Offset',
				name: 'start',
				type: 'number',
				default: 0,
				description: 'Result offset for pagination (e.g., 0 for the first page, 10 for the 2nd page, etc.).',
				displayOptions: {
					show: {
						"/operation": [
							'search',
						],
					},
				},
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'options',
				default: 'www.yelp.com',
				description: 'Yelp domain to use. Default is `www.yelp.com`.',
				displayOptions: {
					show: {
						"/operation": [
							'place',
							'search',
						],
					},
				},
				options: [
					{
						name: 'www.yelp.com',
						value: 'www.yelp.com',
					},
					{
						name: 'www.yelp.co.uk',
						value: 'www.yelp.co.uk',
					},
					{
						name: 'www.yelp.ca',
						value: 'www.yelp.ca',
					},
					{
						name: 'www.yelp.com.au',
						value: 'www.yelp.com.au',
					},
					{
						name: 'ms.yelp.my',
						value: 'ms.yelp.my',
					},
					{
						name: 'www.yelp.cz',
						value: 'www.yelp.cz',
					},
					{
						name: 'www.yelp.dk',
						value: 'www.yelp.dk',
					},
					{
						name: 'www.yelp.de',
						value: 'www.yelp.de',
					},
					{
						name: 'www.yelp.at',
						value: 'www.yelp.at',
					},
					{
						name: 'de.yelp.ch',
						value: 'de.yelp.ch',
					},
					{
						name: 'en.yelp.be',
						value: 'en.yelp.be',
					},
					{
						name: 'en.yelp.com.hk',
						value: 'en.yelp.com.hk',
					},
					{
						name: 'en.yelp.my',
						value: 'en.yelp.my',
					},
					{
						name: 'www.yelp.co.nz',
						value: 'www.yelp.co.nz',
					},
					{
						name: 'en.yelp.com.ph',
						value: 'en.yelp.com.ph',
					},
					{
						name: 'www.yelp.ie',
						value: 'www.yelp.ie',
					},
					{
						name: 'www.yelp.com.sg',
						value: 'www.yelp.com.sg',
					},
					{
						name: 'en.yelp.ch',
						value: 'en.yelp.ch',
					},
					{
						name: 'www.yelp.com.ar',
						value: 'www.yelp.com.ar',
					},
					{
						name: 'www.yelp.cl',
						value: 'www.yelp.cl',
					},
					{
						name: 'www.yelp.es',
						value: 'www.yelp.es',
					},
					{
						name: 'www.yelp.com.mx',
						value: 'www.yelp.com.mx',
					},
					{
						name: 'fil.yelp.com.ph',
						value: 'fil.yelp.com.ph',
					},
					{
						name: 'fr.yelp.be',
						value: 'fr.yelp.be',
					},
					{
						name: 'fr.yelp.ca',
						value: 'fr.yelp.ca',
					},
					{
						name: 'www.yelp.fr',
						value: 'www.yelp.fr',
					},
					{
						name: 'fr.yelp.ch',
						value: 'fr.yelp.ch',
					},
					{
						name: 'www.yelp.it',
						value: 'www.yelp.it',
					},
					{
						name: 'it.yelp.ch',
						value: 'it.yelp.ch',
					},
					{
						name: 'nl.yelp.be',
						value: 'nl.yelp.be',
					},
					{
						name: 'www.yelp.nl',
						value: 'www.yelp.nl',
					},
					{
						name: 'www.yelp.no',
						value: 'www.yelp.no',
					},
					{
						name: 'www.yelp.pl',
						value: 'www.yelp.pl',
					},
					{
						name: 'www.yelp.com.br',
						value: 'www.yelp.com.br',
					},
					{
						name: 'www.yelp.pt',
						value: 'www.yelp.pt',
					},
					{
						name: 'fi.yelp.fi',
						value: 'fi.yelp.fi',
					},
					{
						name: 'sv.yelp.fi',
						value: 'sv.yelp.fi',
					},
					{
						name: 'www.yelp.com.tr',
						value: 'www.yelp.com.tr',
					},
					{
						name: 'www.yelp.co.jp',
						value: 'www.yelp.co.jp',
					},
					{
						name: 'zh.yelp.com.hk',
						value: 'zh.yelp.com.hk',
					},
					{
						name: 'www.yelp.com.tw',
						value: 'www.yelp.com.tw',
					},
				],
			},
		],
	},
];
