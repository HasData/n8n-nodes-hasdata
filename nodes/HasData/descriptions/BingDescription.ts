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

export const bingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bing'],
			},
		},
		options: [
			{
				name: 'Get Bing Search Results',
				value: 'serp',
				description: 'Retrieves structured Bing search results for specified search terms and parameters.',
				action: 'Get Bing Search Results',
			},
		],
		default: 'serp',
	},
];

export const bingFields: INodeProperties[] = [
	{
		displayName: 'Search Query',
		name: 'q',
		type: 'string',
		default: '',
		description: 'Specify the search term for which you want to scrape the SERP.',
		displayOptions: {
			show: {
				resource: [
					'bing',
				],
				operation: [
					'serp',
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
					'bing',
				],
				operation: [
					'serp',
				],
			},
		},
		options: [
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				description: 'Defines the search’s origin location. For realistic results, set location at the city level. If omitted, the proxy’s location may be used.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
			},
			{
				displayName: 'Latitude',
				name: 'lat',
				type: 'string',
				default: '',
				description: 'GPS latitude for the search origin.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
			},
			{
				displayName: 'Longitude',
				name: 'lon',
				type: 'string',
				default: '',
				description: 'GPS longitude for the search origin.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
			},
			{
				displayName: 'Market Code',
				name: 'mkt',
				type: 'options',
				default: '',
				description: 'The two-letter country code for the country to search from.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
				options: [
					{
						name: 'da-dk - Denmark',
						value: 'da-dk',
					},
					{
						name: 'de-at - Austria',
						value: 'de-at',
					},
					{
						name: 'de-ch - Switzerland',
						value: 'de-ch',
					},
					{
						name: 'de-de - Germany',
						value: 'de-de',
					},
					{
						name: 'en-au - Australia',
						value: 'en-au',
					},
					{
						name: 'en-ca - Canada',
						value: 'en-ca',
					},
					{
						name: 'en-gb - United Kingdom',
						value: 'en-gb',
					},
					{
						name: 'en-id - Indonesia',
						value: 'en-id',
					},
					{
						name: 'en-in - India',
						value: 'en-in',
					},
					{
						name: 'en-my - Malaysia',
						value: 'en-my',
					},
					{
						name: 'en-nz - New Zealand',
						value: 'en-nz',
					},
					{
						name: 'en-ph - Republic of the Philippines',
						value: 'en-ph',
					},
					{
						name: 'en-us - United States',
						value: 'en-us',
					},
					{
						name: 'en-za - South Africa',
						value: 'en-za',
					},
					{
						name: 'es-ar - Argentina',
						value: 'es-ar',
					},
					{
						name: 'es-cl - Chile',
						value: 'es-cl',
					},
					{
						name: 'es-es - Spain',
						value: 'es-es',
					},
					{
						name: 'es-mx - Mexico',
						value: 'es-mx',
					},
					{
						name: 'es-us - United States',
						value: 'es-us',
					},
					{
						name: 'fi-fi - Finland',
						value: 'fi-fi',
					},
					{
						name: 'fr-be - Belgium',
						value: 'fr-be',
					},
					{
						name: 'fr-ca - Canada',
						value: 'fr-ca',
					},
					{
						name: 'fr-ch - Switzerland',
						value: 'fr-ch',
					},
					{
						name: 'fr-fr - France',
						value: 'fr-fr',
					},
					{
						name: 'it-it - Italy',
						value: 'it-it',
					},
					{
						name: 'ja-jp - Japan',
						value: 'ja-jp',
					},
					{
						name: 'ko-kr - Korea',
						value: 'ko-kr',
					},
					{
						name: 'nl-be - Belgium',
						value: 'nl-be',
					},
					{
						name: 'nl-nl - Netherlands',
						value: 'nl-nl',
					},
					{
						name: 'no-no - Norway',
						value: 'no-no',
					},
					{
						name: 'pl-pl - Poland',
						value: 'pl-pl',
					},
					{
						name: 'pt-br - Brazil',
						value: 'pt-br',
					},
					{
						name: 'ru-ru - Russia',
						value: 'ru-ru',
					},
					{
						name: 'sv-se - Sweden',
						value: 'sv-se',
					},
					{
						name: 'tr-tr - Türkiye',
						value: 'tr-tr',
					},
					{
						name: 'zh-cn - People\'s republic of China',
						value: 'zh-cn',
					},
					{
						name: 'zh-hk - Hong Kong SAR',
						value: 'zh-hk',
					},
					{
						name: 'zh-tw - Taiwan',
						value: 'zh-tw',
					},
				],
			},
			{
				displayName: 'Country',
				name: 'cc',
				type: 'options',
				default: '',
				description: 'The two-letter country code for the country to search from.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
				options: [
					{
						name: 'ar - Argentina',
						value: 'ar',
					},
					{
						name: 'at - Austria',
						value: 'at',
					},
					{
						name: 'au - Australia',
						value: 'au',
					},
					{
						name: 'be - Belgium',
						value: 'be',
					},
					{
						name: 'br - Brazil',
						value: 'br',
					},
					{
						name: 'ca - Canada',
						value: 'ca',
					},
					{
						name: 'ch - Switzerland',
						value: 'ch',
					},
					{
						name: 'cl - Chile',
						value: 'cl',
					},
					{
						name: 'cn - People\'s Republic of China',
						value: 'cn',
					},
					{
						name: 'de - Germany',
						value: 'de',
					},
					{
						name: 'dk - Denmark',
						value: 'dk',
					},
					{
						name: 'es - Spain',
						value: 'es',
					},
					{
						name: 'fi - Finland',
						value: 'fi',
					},
					{
						name: 'fr - France',
						value: 'fr',
					},
					{
						name: 'gb - United Kingdom',
						value: 'gb',
					},
					{
						name: 'hk - Hong Kong SAR',
						value: 'hk',
					},
					{
						name: 'id - Indonesia',
						value: 'id',
					},
					{
						name: 'in - India',
						value: 'in',
					},
					{
						name: 'it - Italy',
						value: 'it',
					},
					{
						name: 'jp - Japan',
						value: 'jp',
					},
					{
						name: 'kr - Korea',
						value: 'kr',
					},
					{
						name: 'mx - Mexico',
						value: 'mx',
					},
					{
						name: 'my - Malaysia',
						value: 'my',
					},
					{
						name: 'nl - Netherlands',
						value: 'nl',
					},
					{
						name: 'no - Norway',
						value: 'no',
					},
					{
						name: 'nz - New Zealand',
						value: 'nz',
					},
					{
						name: 'ph - Republic of the Philippines',
						value: 'ph',
					},
					{
						name: 'pl - Poland',
						value: 'pl',
					},
					{
						name: 'pt - Portugal',
						value: 'pt',
					},
					{
						name: 'ru - Russia',
						value: 'ru',
					},
					{
						name: 'sa - Saudi Arabia',
						value: 'sa',
					},
					{
						name: 'se - Sweden',
						value: 'se',
					},
					{
						name: 'tr - Türkiye',
						value: 'tr',
					},
					{
						name: 'tw - Taiwan',
						value: 'tw',
					},
					{
						name: 'us - United States',
						value: 'us',
					},
					{
						name: 'za - South Africa',
						value: 'za',
					},
				],
			},
			{
				displayName: 'Adult Content Filtering',
				name: 'safe',
				type: 'options',
				default: '',
				description: 'Adult Content Filtering option.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
				options: [
					{
						name: 'moderate',
						value: 'moderate',
					},
					{
						name: 'off',
						value: 'off',
					},
					{
						name: 'strict',
						value: 'strict',
					},
				],
			},
			{
				displayName: 'Additional Filtering',
				name: 'filters',
				type: 'string',
				default: '',
				description: 'Allows applying various filters to narrow search results, including date-based options:\n\n  - `ex1:"ez1"` – past 24 hours\n  - `ex1:"ez2"` – past week\n  - `ex1:"ez3"` – past month\n\nFor complex filters, run a Bing search and copy the filters parameter from the URL.\n',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
			},
			{
				displayName: 'Result Offset',
				name: 'first',
				type: 'number',
				default: '',
				description: 'This parameter specifies the number of search results to skip and is used for implementing pagination. For example, a value of 1 (default) indicates the first page of results, 11 refers to the second page, and 21 to the third page.\n',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
			},
			{
				displayName: 'Number of Results',
				name: 'count',
				type: 'number',
				default: '',
				description: 'Number of results per page, ranging from 1 to 50.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
			},
			{
				displayName: 'Device',
				name: 'deviceType',
				type: 'options',
				default: '',
				description: 'Specify the device type for the search.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
				options: [
					{
						name: 'desktop',
						value: 'desktop',
					},
					{
						name: 'mobile',
						value: 'mobile',
					},
					{
						name: 'tablet',
						value: 'tablet',
					},
				],
			},
		],
	},
];
