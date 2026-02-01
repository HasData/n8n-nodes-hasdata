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

export const glassdoorOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['glassdoor'],
			},
		},
		options: [
			{
				name: 'Get GlassDoor Job Details',
				value: 'job',
				description: 'Retrieves detailed information about a specific job listing based on the provided vacancy URL.',
				action: 'Get GlassDoor Job Details',
			},
			{
				name: 'Get GlassDoor Job Listings',
				value: 'listing',
				description: 'Retrieves job listings from Glassdoor based on various search parameters.',
				action: 'Get GlassDoor Job Listings',
			},
		],
		default: 'job',
	},
];

export const glassdoorFields: INodeProperties[] = [
	{
		displayName: 'Job URL',
		name: 'url',
		type: 'string',
		default: '',
		description: 'The URL of the job vacancy to retrieve details for.',
		displayOptions: {
			show: {
				resource: [
					'glassdoor',
				],
				operation: [
					'job',
				],
			},
		},
	},
	{
		displayName: 'Search Query',
		name: 'keyword',
		type: 'string',
		default: '',
		description: 'The keyword used to search for job listings.',
		displayOptions: {
			show: {
				resource: [
					'glassdoor',
				],
				operation: [
					'listing',
				],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location',
		type: 'string',
		default: '',
		description: 'The location to search for job listings.',
		displayOptions: {
			show: {
				resource: [
					'glassdoor',
				],
				operation: [
					'listing',
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
					'glassdoor',
				],
				operation: [
					'listing',
				],
			},
		},
		options: [
			{
				displayName: 'Sort By',
				name: 'sort',
				type: 'options',
				default: '',
				description: 'The sorting option for the search results.',
				displayOptions: {
					show: {
						"/operation": [
							'listing',
						],
					},
				},
				options: [
					{
						name: 'recent',
						value: 'recent',
					},
					{
						name: 'relevant',
						value: 'relevant',
					},
				],
			},
			{
				displayName: 'Next Page Token',
				name: 'nextPageToken',
				type: 'string',
				default: '',
				description: 'Token for fetching the next page of jobs.',
				displayOptions: {
					show: {
						"/operation": [
							'listing',
						],
					},
				},
			},
			{
				displayName: 'domain',
				name: 'domain',
				type: 'options',
				default: 'www.glassdoor.com',
				description: 'The domain of the Glassdoor site (optional).',
				displayOptions: {
					show: {
						"/operation": [
							'listing',
						],
					},
				},
				options: [
					{
						name: 'de.glassdoor.ch',
						value: 'de.glassdoor.ch',
					},
					{
						name: 'fr.glassdoor.be',
						value: 'fr.glassdoor.be',
					},
					{
						name: 'fr.glassdoor.ca',
						value: 'fr.glassdoor.ca',
					},
					{
						name: 'fr.glassdoor.ch',
						value: 'fr.glassdoor.ch',
					},
					{
						name: 'nl.glassdoor.be',
						value: 'nl.glassdoor.be',
					},
					{
						name: 'www.glassdoor.at',
						value: 'www.glassdoor.at',
					},
					{
						name: 'www.glassdoor.ca',
						value: 'www.glassdoor.ca',
					},
					{
						name: 'www.glassdoor.co.in',
						value: 'www.glassdoor.co.in',
					},
					{
						name: 'www.glassdoor.co.nz',
						value: 'www.glassdoor.co.nz',
					},
					{
						name: 'www.glassdoor.co.uk',
						value: 'www.glassdoor.co.uk',
					},
					{
						name: 'www.glassdoor.com.ar',
						value: 'www.glassdoor.com.ar',
					},
					{
						name: 'www.glassdoor.com.au',
						value: 'www.glassdoor.com.au',
					},
					{
						name: 'www.glassdoor.com.br',
						value: 'www.glassdoor.com.br',
					},
					{
						name: 'www.glassdoor.com.hk',
						value: 'www.glassdoor.com.hk',
					},
					{
						name: 'www.glassdoor.com.mx',
						value: 'www.glassdoor.com.mx',
					},
					{
						name: 'www.glassdoor.de',
						value: 'www.glassdoor.de',
					},
					{
						name: 'www.glassdoor.es',
						value: 'www.glassdoor.es',
					},
					{
						name: 'www.glassdoor.fr',
						value: 'www.glassdoor.fr',
					},
					{
						name: 'www.glassdoor.ie',
						value: 'www.glassdoor.ie',
					},
					{
						name: 'www.glassdoor.it',
						value: 'www.glassdoor.it',
					},
					{
						name: 'www.glassdoor.nl',
						value: 'www.glassdoor.nl',
					},
					{
						name: 'www.glassdoor.sg',
						value: 'www.glassdoor.sg',
					},
				],
			},
		],
	},
];
