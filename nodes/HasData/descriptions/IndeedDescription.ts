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

export const indeedOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['indeed'],
			},
		},
		options: [
			{
				name: 'Get Indeed Job Details',
				value: 'job',
				description: 'Retrieves detailed information about a specific job listing based on the provided vacancy URL.',
				action: 'Get Indeed Job Details',
			},
			{
				name: 'Get Indeed Job Listings',
				value: 'listing',
				description: 'Retrieves job listings from Indeed based on various search parameters.',
				action: 'Get Indeed Job Listings',
			},
		],
		default: 'job',
	},
];

export const indeedFields: INodeProperties[] = [
	{
		displayName: 'Job URL',
		name: 'url',
		type: 'string',
		default: '',
		description: 'The URL of the job vacancy to retrieve details for.',
		displayOptions: {
			show: {
				resource: [
					'indeed',
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
					'indeed',
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
					'indeed',
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
					'indeed',
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
						name: 'relevance',
						value: 'relevance',
					},
					{
						name: 'date',
						value: 'date',
					},
				],
			},
			{
				displayName: 'Result Offset',
				name: 'start',
				type: 'number',
				default: '',
				description: 'The starting index of the results to retrieve (optional).',
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
				default: 'www.indeed.com',
				description: 'The domain of the Indeed site (optional).',
				displayOptions: {
					show: {
						"/operation": [
							'listing',
						],
					},
				},
				options: [
					{
						name: 'ar.indeed.com',
						value: 'ar.indeed.com',
					},
					{
						name: 'au.indeed.com',
						value: 'au.indeed.com',
					},
					{
						name: 'at.indeed.com',
						value: 'at.indeed.com',
					},
					{
						name: 'bh.indeed.com',
						value: 'bh.indeed.com',
					},
					{
						name: 'be.indeed.com',
						value: 'be.indeed.com',
					},
					{
						name: 'br.indeed.com',
						value: 'br.indeed.com',
					},
					{
						name: 'ca.indeed.com',
						value: 'ca.indeed.com',
					},
					{
						name: 'cl.indeed.com',
						value: 'cl.indeed.com',
					},
					{
						name: 'cn.indeed.com',
						value: 'cn.indeed.com',
					},
					{
						name: 'co.indeed.com',
						value: 'co.indeed.com',
					},
					{
						name: 'cr.indeed.com',
						value: 'cr.indeed.com',
					},
					{
						name: 'cz.indeed.com',
						value: 'cz.indeed.com',
					},
					{
						name: 'dk.indeed.com',
						value: 'dk.indeed.com',
					},
					{
						name: 'ec.indeed.com',
						value: 'ec.indeed.com',
					},
					{
						name: 'eg.indeed.com',
						value: 'eg.indeed.com',
					},
					{
						name: 'fi.indeed.com',
						value: 'fi.indeed.com',
					},
					{
						name: 'fr.indeed.com',
						value: 'fr.indeed.com',
					},
					{
						name: 'de.indeed.com',
						value: 'de.indeed.com',
					},
					{
						name: 'gr.indeed.com',
						value: 'gr.indeed.com',
					},
					{
						name: 'hk.indeed.com',
						value: 'hk.indeed.com',
					},
					{
						name: 'hu.indeed.com',
						value: 'hu.indeed.com',
					},
					{
						name: 'in.indeed.com',
						value: 'in.indeed.com',
					},
					{
						name: 'id.indeed.com',
						value: 'id.indeed.com',
					},
					{
						name: 'ie.indeed.com',
						value: 'ie.indeed.com',
					},
					{
						name: 'il.indeed.com',
						value: 'il.indeed.com',
					},
					{
						name: 'it.indeed.com',
						value: 'it.indeed.com',
					},
					{
						name: 'jp.indeed.com',
						value: 'jp.indeed.com',
					},
					{
						name: 'kw.indeed.com',
						value: 'kw.indeed.com',
					},
					{
						name: 'lu.indeed.com',
						value: 'lu.indeed.com',
					},
					{
						name: 'malaysia.indeed.com',
						value: 'malaysia.indeed.com',
					},
					{
						name: 'mx.indeed.com',
						value: 'mx.indeed.com',
					},
					{
						name: 'ma.indeed.com',
						value: 'ma.indeed.com',
					},
					{
						name: 'nl.indeed.com',
						value: 'nl.indeed.com',
					},
					{
						name: 'nz.indeed.com',
						value: 'nz.indeed.com',
					},
					{
						name: 'ng.indeed.com',
						value: 'ng.indeed.com',
					},
					{
						name: 'no.indeed.com',
						value: 'no.indeed.com',
					},
					{
						name: 'om.indeed.com',
						value: 'om.indeed.com',
					},
					{
						name: 'pk.indeed.com',
						value: 'pk.indeed.com',
					},
					{
						name: 'pa.indeed.com',
						value: 'pa.indeed.com',
					},
					{
						name: 'pe.indeed.com',
						value: 'pe.indeed.com',
					},
					{
						name: 'ph.indeed.com',
						value: 'ph.indeed.com',
					},
					{
						name: 'pl.indeed.com',
						value: 'pl.indeed.com',
					},
					{
						name: 'pt.indeed.com',
						value: 'pt.indeed.com',
					},
					{
						name: 'qa.indeed.com',
						value: 'qa.indeed.com',
					},
					{
						name: 'ro.indeed.com',
						value: 'ro.indeed.com',
					},
					{
						name: 'sa.indeed.com',
						value: 'sa.indeed.com',
					},
					{
						name: 'sg.indeed.com',
						value: 'sg.indeed.com',
					},
					{
						name: 'za.indeed.com',
						value: 'za.indeed.com',
					},
					{
						name: 'kr.indeed.com',
						value: 'kr.indeed.com',
					},
					{
						name: 'es.indeed.com',
						value: 'es.indeed.com',
					},
					{
						name: 'se.indeed.com',
						value: 'se.indeed.com',
					},
					{
						name: 'ch.indeed.com',
						value: 'ch.indeed.com',
					},
					{
						name: 'tw.indeed.com',
						value: 'tw.indeed.com',
					},
					{
						name: 'th.indeed.com',
						value: 'th.indeed.com',
					},
					{
						name: 'tr.indeed.com',
						value: 'tr.indeed.com',
					},
					{
						name: 'ua.indeed.com',
						value: 'ua.indeed.com',
					},
					{
						name: 'ae.indeed.com',
						value: 'ae.indeed.com',
					},
					{
						name: 'uk.indeed.com',
						value: 'uk.indeed.com',
					},
					{
						name: 'www.indeed.com',
						value: 'www.indeed.com',
					},
					{
						name: 'uy.indeed.com',
						value: 'uy.indeed.com',
					},
					{
						name: 've.indeed.com',
						value: 've.indeed.com',
					},
					{
						name: 'vn.indeed.com',
						value: 'vn.indeed.com',
					},
				],
			},
		],
	},
];
