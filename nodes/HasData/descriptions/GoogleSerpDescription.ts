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

export const googleSerpOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['google_serp'],
			},
		},
		options: [
			{
				name: 'Get Google Search Results',
				value: 'serp',
				description: 'Retrieves structured Google search results for specified search terms and parameters.',
				action: 'Get Google Search Results',
			},
			{
				name: 'Get Google Light Search Results',
				value: 'serp_light',
				description: 'Retrieves structured Google search results for specified search terms and parameters.',
				action: 'Get Google Light Search Results',
			},
			{
				name: 'Get Shopping Search Results',
				value: 'shopping',
				description: 'Retrieves structured Google Shopping results for specified search terms and parameters.',
				action: 'Get Shopping Search Results',
			},
			{
				name: 'Get Google News Results',
				value: 'news',
				description: 'Returns structured Google News results based on query, topic, publisher, or story tokens.',
				action: 'Get Google News Results',
			},
			{
				name: 'Get Short Videos Search Results',
				value: 'short_videos',
				description: 'Retrieves structured Google short videos search results based on specified search terms and advanced filters.',
				action: 'Get Short Videos Search Results',
			},
			{
				name: 'Get Google Events Results',
				value: 'events',
				description: 'Retrieves information about events from Google based on specified search terms, locations, and filters.',
				action: 'Get Google Events Results',
			},
			{
				name: 'Get AI Mode SERP Results',
				value: 'ai_mode',
				description: 'Retrieves structured Google AI Mode response for specified search terms and parameters.',
				action: 'Get AI Mode SERP Results',
			},
			{
				name: 'Get AI Overview Results',
				value: 'ai_overview',
				description: 'Retrieves AI Overview result using a pageToken from Google SERP API.',
				action: 'Get AI Overview Results',
			},
			{
				name: 'Get Immersive Product Information',
				value: 'immersive_product',
				description: 'Retrieves information about immersive product from Google based on page token.',
				action: 'Get Immersive Product Information',
			},
		],
		default: 'serp',
	},
];

export const googleSerpFields: INodeProperties[] = [
	{
		displayName: 'Search Query',
		name: 'q',
		type: 'string',
		default: '',
		description: 'Specify the search term for which you want to scrape the SERP.',
		displayOptions: {
			show: {
				resource: [
					'google_serp',
				],
				operation: [
					'ai_mode',
					'events',
					'serp',
					'serp_light',
					'shopping',
				],
			},
		},
	},
	{
		displayName: 'Page Token',
		name: 'pageToken',
		type: 'string',
		default: '',
		description: 'Token from `aiOverview` block in Google SERP API. Valid for 4 minutes.',
		displayOptions: {
			show: {
				resource: [
					'google_serp',
				],
				operation: [
					'ai_overview',
				],
			},
		},
	},
	{
		displayName: 'Page Token',
		name: 'pageToken',
		type: 'string',
		default: '',
		description: 'Token for displaying more product info in the Google immersive pop-up, available in the Google Shopping API response as the `immersiveProductPageToken` property.',
		displayOptions: {
			show: {
				resource: [
					'google_serp',
				],
				operation: [
					'immersive_product',
				],
			},
		},
	},
	{
		displayName: 'Search Query',
		name: 'q',
		type: 'string',
		default: '',
		description: 'Search query term for retrieving short videos results.',
		displayOptions: {
			show: {
				resource: [
					'google_serp',
				],
				operation: [
					'short_videos',
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
					'google_serp',
				],
				operation: [
					'news',
					'ai_mode',
					'events',
					'serp',
					'serp_light',
					'shopping',
					'short_videos',
					'immersive_product',
				],
			},
		},
		options: [
			{
				displayName: 'Search Query',
				name: 'q',
				type: 'string',
				default: '',
				description: 'Free-text query as used on news.google.com. Not allowed with `topicToken`, `storyToken`, or `publicationToken`.',
				displayOptions: {
					show: {
						"/operation": [
							'news',
						],
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				description: 'Google canonical location for the search.',
				displayOptions: {
					show: {
						"/operation": [
							'ai_mode',
							'events',
							'serp',
							'serp_light',
							'shopping',
							'short_videos',
						],
					},
				},
			},
			{
				displayName: 'Encoded Location',
				name: 'uule',
				type: 'string',
				default: '',
				description: 'The encoded location parameter.',
				displayOptions: {
					show: {
						"/operation": [
							'ai_mode',
							'events',
							'serp',
							'serp_light',
							'shopping',
							'short_videos',
						],
					},
				},
			},
			{
				displayName: 'Fetch More Stores',
				name: 'moreStores',
				type: 'boolean',
				default: false,
				description: 'Fetch additional store results in a single search. By default it returns 3–5 stores, and when true it returns up to 13 or the maximum available for the product.',
				displayOptions: {
					show: {
						"/operation": [
							'immersive_product',
						],
					},
				},
			},
			{
				displayName: 'Stores Next Page Token',
				name: 'nextPageToken',
				type: 'string',
				default: '',
				description: 'Token used to retrieve the next page of store results.',
				displayOptions: {
					show: {
						"/operation": [
							'immersive_product',
						],
					},
				},
			},
			{
				displayName: 'Country',
				name: 'gl',
				type: 'options',
				default: 'us',
				description: 'The two-letter country code for the country you want to limit the search to.',
				displayOptions: {
					show: {
						"/operation": [
							'ai_mode',
							'events',
							'news',
							'serp',
							'serp_light',
							'shopping',
							'short_videos',
						],
					},
				},
				options: [
					{
						name: 'ac - Ascension Island',
						value: 'ac',
					},
					{
						name: 'af - Afghanistan',
						value: 'af',
					},
					{
						name: 'al - Albania',
						value: 'al',
					},
					{
						name: 'dz - Algeria',
						value: 'dz',
					},
					{
						name: 'as - American Samoa',
						value: 'as',
					},
					{
						name: 'ad - Andorra',
						value: 'ad',
					},
					{
						name: 'ao - Angola',
						value: 'ao',
					},
					{
						name: 'ai - Anguilla',
						value: 'ai',
					},
					{
						name: 'aq - Antarctica',
						value: 'aq',
					},
					{
						name: 'ag - Antigua and Barbuda',
						value: 'ag',
					},
					{
						name: 'ar - Argentina',
						value: 'ar',
					},
					{
						name: 'am - Armenia',
						value: 'am',
					},
					{
						name: 'aw - Aruba',
						value: 'aw',
					},
					{
						name: 'au - Australia',
						value: 'au',
					},
					{
						name: 'at - Austria',
						value: 'at',
					},
					{
						name: 'az - Azerbaijan',
						value: 'az',
					},
					{
						name: 'bs - Bahamas',
						value: 'bs',
					},
					{
						name: 'bh - Bahrain',
						value: 'bh',
					},
					{
						name: 'bd - Bangladesh',
						value: 'bd',
					},
					{
						name: 'bb - Barbados',
						value: 'bb',
					},
					{
						name: 'by - Belarus',
						value: 'by',
					},
					{
						name: 'be - Belgium',
						value: 'be',
					},
					{
						name: 'bz - Belize',
						value: 'bz',
					},
					{
						name: 'bj - Benin',
						value: 'bj',
					},
					{
						name: 'bm - Bermuda',
						value: 'bm',
					},
					{
						name: 'bt - Bhutan',
						value: 'bt',
					},
					{
						name: 'bo - Bolivia',
						value: 'bo',
					},
					{
						name: 'ba - Bosnia and Herzegovina',
						value: 'ba',
					},
					{
						name: 'bw - Botswana',
						value: 'bw',
					},
					{
						name: 'bv - Bouvet Island',
						value: 'bv',
					},
					{
						name: 'br - Brazil',
						value: 'br',
					},
					{
						name: 'io - British Indian Ocean Territory',
						value: 'io',
					},
					{
						name: 'bn - Brunei Darussalam',
						value: 'bn',
					},
					{
						name: 'bg - Bulgaria',
						value: 'bg',
					},
					{
						name: 'bf - Burkina Faso',
						value: 'bf',
					},
					{
						name: 'bi - Burundi',
						value: 'bi',
					},
					{
						name: 'kh - Cambodia',
						value: 'kh',
					},
					{
						name: 'cm - Cameroon',
						value: 'cm',
					},
					{
						name: 'ca - Canada',
						value: 'ca',
					},
					{
						name: 'cv - Cape Verde',
						value: 'cv',
					},
					{
						name: 'ky - Cayman Islands',
						value: 'ky',
					},
					{
						name: 'cf - Central African Republic',
						value: 'cf',
					},
					{
						name: 'td - Chad',
						value: 'td',
					},
					{
						name: 'cl - Chile',
						value: 'cl',
					},
					{
						name: 'cn - China',
						value: 'cn',
					},
					{
						name: 'cx - Christmas Island',
						value: 'cx',
					},
					{
						name: 'cc - Cocos (Keeling) Islands',
						value: 'cc',
					},
					{
						name: 'co - Colombia',
						value: 'co',
					},
					{
						name: 'km - Comoros',
						value: 'km',
					},
					{
						name: 'cg - Congo',
						value: 'cg',
					},
					{
						name: 'cd - Congo, the Democratic Republic of the',
						value: 'cd',
					},
					{
						name: 'ck - Cook Islands',
						value: 'ck',
					},
					{
						name: 'cr - Costa Rica',
						value: 'cr',
					},
					{
						name: 'ci - Cote D\'ivoire',
						value: 'ci',
					},
					{
						name: 'hr - Croatia',
						value: 'hr',
					},
					{
						name: 'cu - Cuba',
						value: 'cu',
					},
					{
						name: 'cy - Cyprus',
						value: 'cy',
					},
					{
						name: 'cz - Czech Republic',
						value: 'cz',
					},
					{
						name: 'dk - Denmark',
						value: 'dk',
					},
					{
						name: 'dj - Djibouti',
						value: 'dj',
					},
					{
						name: 'dm - Dominica',
						value: 'dm',
					},
					{
						name: 'do - Dominican Republic',
						value: 'do',
					},
					{
						name: 'ec - Ecuador',
						value: 'ec',
					},
					{
						name: 'eg - Egypt',
						value: 'eg',
					},
					{
						name: 'sv - El Salvador',
						value: 'sv',
					},
					{
						name: 'gq - Equatorial Guinea',
						value: 'gq',
					},
					{
						name: 'er - Eritrea',
						value: 'er',
					},
					{
						name: 'ee - Estonia',
						value: 'ee',
					},
					{
						name: 'et - Ethiopia',
						value: 'et',
					},
					{
						name: 'fk - Falkland Islands (Malvinas)',
						value: 'fk',
					},
					{
						name: 'fo - Faroe Islands',
						value: 'fo',
					},
					{
						name: 'fj - Fiji',
						value: 'fj',
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
						name: 'gf - French Guiana',
						value: 'gf',
					},
					{
						name: 'pf - French Polynesia',
						value: 'pf',
					},
					{
						name: 'tf - French Southern Territories',
						value: 'tf',
					},
					{
						name: 'ga - Gabon',
						value: 'ga',
					},
					{
						name: 'gm - Gambia',
						value: 'gm',
					},
					{
						name: 'ge - Georgia',
						value: 'ge',
					},
					{
						name: 'gg - Guernsey',
						value: 'gg',
					},
					{
						name: 'de - Germany',
						value: 'de',
					},
					{
						name: 'gh - Ghana',
						value: 'gh',
					},
					{
						name: 'gi - Gibraltar',
						value: 'gi',
					},
					{
						name: 'gr - Greece',
						value: 'gr',
					},
					{
						name: 'gl - Greenland',
						value: 'gl',
					},
					{
						name: 'gd - Grenada',
						value: 'gd',
					},
					{
						name: 'gp - Guadeloupe',
						value: 'gp',
					},
					{
						name: 'gu - Guam',
						value: 'gu',
					},
					{
						name: 'gt - Guatemala',
						value: 'gt',
					},
					{
						name: 'gn - Guinea',
						value: 'gn',
					},
					{
						name: 'gw - Guinea-Bissau',
						value: 'gw',
					},
					{
						name: 'gy - Guyana',
						value: 'gy',
					},
					{
						name: 'ht - Haiti',
						value: 'ht',
					},
					{
						name: 'hm - Heard Island and Mcdonald Islands',
						value: 'hm',
					},
					{
						name: 'va - Holy See (Vatican City State)',
						value: 'va',
					},
					{
						name: 'hn - Honduras',
						value: 'hn',
					},
					{
						name: 'hk - Hong Kong',
						value: 'hk',
					},
					{
						name: 'hu - Hungary',
						value: 'hu',
					},
					{
						name: 'im - Isle of Man',
						value: 'im',
					},
					{
						name: 'is - Iceland',
						value: 'is',
					},
					{
						name: 'in - India',
						value: 'in',
					},
					{
						name: 'id - Indonesia',
						value: 'id',
					},
					{
						name: 'ir - Iran, Islamic Republic of',
						value: 'ir',
					},
					{
						name: 'iq - Iraq',
						value: 'iq',
					},
					{
						name: 'ie - Ireland',
						value: 'ie',
					},
					{
						name: 'il - Israel',
						value: 'il',
					},
					{
						name: 'it - Italy',
						value: 'it',
					},
					{
						name: 'je - Jersey',
						value: 'je',
					},
					{
						name: 'jm - Jamaica',
						value: 'jm',
					},
					{
						name: 'jp - Japan',
						value: 'jp',
					},
					{
						name: 'jo - Jordan',
						value: 'jo',
					},
					{
						name: 'kz - Kazakhstan',
						value: 'kz',
					},
					{
						name: 'ke - Kenya',
						value: 'ke',
					},
					{
						name: 'ki - Kiribati',
						value: 'ki',
					},
					{
						name: 'kp - Korea, Democratic People\'s Republic of',
						value: 'kp',
					},
					{
						name: 'kr - Korea, Republic of',
						value: 'kr',
					},
					{
						name: 'kw - Kuwait',
						value: 'kw',
					},
					{
						name: 'kg - Kyrgyzstan',
						value: 'kg',
					},
					{
						name: 'la - Lao People\'s Democratic Republic',
						value: 'la',
					},
					{
						name: 'lv - Latvia',
						value: 'lv',
					},
					{
						name: 'lb - Lebanon',
						value: 'lb',
					},
					{
						name: 'ls - Lesotho',
						value: 'ls',
					},
					{
						name: 'lr - Liberia',
						value: 'lr',
					},
					{
						name: 'ly - Libyan Arab Jamahiriya',
						value: 'ly',
					},
					{
						name: 'li - Liechtenstein',
						value: 'li',
					},
					{
						name: 'lt - Lithuania',
						value: 'lt',
					},
					{
						name: 'lu - Luxembourg',
						value: 'lu',
					},
					{
						name: 'me - Montenegro',
						value: 'me',
					},
					{
						name: 'mo - Macao',
						value: 'mo',
					},
					{
						name: 'mk - Macedonia, the Former Yugoslav Republic of',
						value: 'mk',
					},
					{
						name: 'mg - Madagascar',
						value: 'mg',
					},
					{
						name: 'mw - Malawi',
						value: 'mw',
					},
					{
						name: 'my - Malaysia',
						value: 'my',
					},
					{
						name: 'mv - Maldives',
						value: 'mv',
					},
					{
						name: 'ml - Mali',
						value: 'ml',
					},
					{
						name: 'mt - Malta',
						value: 'mt',
					},
					{
						name: 'mh - Marshall Islands',
						value: 'mh',
					},
					{
						name: 'mq - Martinique',
						value: 'mq',
					},
					{
						name: 'mr - Mauritania',
						value: 'mr',
					},
					{
						name: 'mu - Mauritius',
						value: 'mu',
					},
					{
						name: 'yt - Mayotte',
						value: 'yt',
					},
					{
						name: 'mx - Mexico',
						value: 'mx',
					},
					{
						name: 'fm - Micronesia, Federated States of',
						value: 'fm',
					},
					{
						name: 'md - Moldova, Republic of',
						value: 'md',
					},
					{
						name: 'mc - Monaco',
						value: 'mc',
					},
					{
						name: 'mn - Mongolia',
						value: 'mn',
					},
					{
						name: 'ms - Montserrat',
						value: 'ms',
					},
					{
						name: 'ma - Morocco',
						value: 'ma',
					},
					{
						name: 'mz - Mozambique',
						value: 'mz',
					},
					{
						name: 'mm - Myanmar',
						value: 'mm',
					},
					{
						name: 'na - Namibia',
						value: 'na',
					},
					{
						name: 'nr - Nauru',
						value: 'nr',
					},
					{
						name: 'np - Nepal',
						value: 'np',
					},
					{
						name: 'nl - Netherlands',
						value: 'nl',
					},
					{
						name: 'an - Netherlands Antilles',
						value: 'an',
					},
					{
						name: 'nc - New Caledonia',
						value: 'nc',
					},
					{
						name: 'nz - New Zealand',
						value: 'nz',
					},
					{
						name: 'ni - Nicaragua',
						value: 'ni',
					},
					{
						name: 'ne - Niger',
						value: 'ne',
					},
					{
						name: 'ng - Nigeria',
						value: 'ng',
					},
					{
						name: 'nu - Niue',
						value: 'nu',
					},
					{
						name: 'nf - Norfolk Island',
						value: 'nf',
					},
					{
						name: 'mp - Northern Mariana Islands',
						value: 'mp',
					},
					{
						name: 'no - Norway',
						value: 'no',
					},
					{
						name: 'om - Oman',
						value: 'om',
					},
					{
						name: 'pk - Pakistan',
						value: 'pk',
					},
					{
						name: 'pw - Palau',
						value: 'pw',
					},
					{
						name: 'ps - Palestinian Territory, Occupied',
						value: 'ps',
					},
					{
						name: 'pa - Panama',
						value: 'pa',
					},
					{
						name: 'pg - Papua New Guinea',
						value: 'pg',
					},
					{
						name: 'py - Paraguay',
						value: 'py',
					},
					{
						name: 'pe - Peru',
						value: 'pe',
					},
					{
						name: 'ph - Philippines',
						value: 'ph',
					},
					{
						name: 'pn - Pitcairn',
						value: 'pn',
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
						name: 'pr - Puerto Rico',
						value: 'pr',
					},
					{
						name: 'qa - Qatar',
						value: 'qa',
					},
					{
						name: 're - Reunion',
						value: 're',
					},
					{
						name: 'ro - Romania',
						value: 'ro',
					},
					{
						name: 'ru - Russian Federation',
						value: 'ru',
					},
					{
						name: 'rw - Rwanda',
						value: 'rw',
					},
					{
						name: 'sh - Saint Helena',
						value: 'sh',
					},
					{
						name: 'kn - Saint Kitts and Nevis',
						value: 'kn',
					},
					{
						name: 'lc - Saint Lucia',
						value: 'lc',
					},
					{
						name: 'pm - Saint Pierre and Miquelon',
						value: 'pm',
					},
					{
						name: 'vc - Saint Vincent and the Grenadines',
						value: 'vc',
					},
					{
						name: 'ws - Samoa',
						value: 'ws',
					},
					{
						name: 'sm - San Marino',
						value: 'sm',
					},
					{
						name: 'st - Sao Tome and Principe',
						value: 'st',
					},
					{
						name: 'sa - Saudi Arabia',
						value: 'sa',
					},
					{
						name: 'sn - Senegal',
						value: 'sn',
					},
					{
						name: 'rs - Serbia and Montenegro',
						value: 'rs',
					},
					{
						name: 'sc - Seychelles',
						value: 'sc',
					},
					{
						name: 'sl - Sierra Leone',
						value: 'sl',
					},
					{
						name: 'sg - Singapore',
						value: 'sg',
					},
					{
						name: 'sk - Slovakia',
						value: 'sk',
					},
					{
						name: 'si - Slovenia',
						value: 'si',
					},
					{
						name: 'sb - Solomon Islands',
						value: 'sb',
					},
					{
						name: 'so - Somalia',
						value: 'so',
					},
					{
						name: 'za - South Africa',
						value: 'za',
					},
					{
						name: 'gs - South Georgia and the South Sandwich Islands',
						value: 'gs',
					},
					{
						name: 'es - Spain',
						value: 'es',
					},
					{
						name: 'lk - Sri Lanka',
						value: 'lk',
					},
					{
						name: 'sd - Sudan',
						value: 'sd',
					},
					{
						name: 'sr - Suriname',
						value: 'sr',
					},
					{
						name: 'sj - Svalbard and Jan Mayen',
						value: 'sj',
					},
					{
						name: 'sz - Swaziland',
						value: 'sz',
					},
					{
						name: 'se - Sweden',
						value: 'se',
					},
					{
						name: 'ch - Switzerland',
						value: 'ch',
					},
					{
						name: 'sy - Syrian Arab Republic',
						value: 'sy',
					},
					{
						name: 'tw - Taiwan, Province of China',
						value: 'tw',
					},
					{
						name: 'tj - Tajikistan',
						value: 'tj',
					},
					{
						name: 'tz - Tanzania, United Republic of',
						value: 'tz',
					},
					{
						name: 'th - Thailand',
						value: 'th',
					},
					{
						name: 'tl - Timor-Leste',
						value: 'tl',
					},
					{
						name: 'tg - Togo',
						value: 'tg',
					},
					{
						name: 'tk - Tokelau',
						value: 'tk',
					},
					{
						name: 'to - Tonga',
						value: 'to',
					},
					{
						name: 'tt - Trinidad and Tobago',
						value: 'tt',
					},
					{
						name: 'tn - Tunisia',
						value: 'tn',
					},
					{
						name: 'tr - Turkey',
						value: 'tr',
					},
					{
						name: 'tm - Turkmenistan',
						value: 'tm',
					},
					{
						name: 'tc - Turks and Caicos Islands',
						value: 'tc',
					},
					{
						name: 'tv - Tuvalu',
						value: 'tv',
					},
					{
						name: 'ug - Uganda',
						value: 'ug',
					},
					{
						name: 'ua - Ukraine',
						value: 'ua',
					},
					{
						name: 'ae - United Arab Emirates',
						value: 'ae',
					},
					{
						name: 'uk - United Kingdom',
						value: 'uk',
					},
					{
						name: 'gb - United Kingdom',
						value: 'gb',
					},
					{
						name: 'us - United States',
						value: 'us',
					},
					{
						name: 'um - United States Minor Outlying Islands',
						value: 'um',
					},
					{
						name: 'uy - Uruguay',
						value: 'uy',
					},
					{
						name: 'uz - Uzbekistan',
						value: 'uz',
					},
					{
						name: 'vu - Vanuatu',
						value: 'vu',
					},
					{
						name: 've - Venezuela',
						value: 've',
					},
					{
						name: 'vn - Viet Nam',
						value: 'vn',
					},
					{
						name: 'vg - Virgin Islands, British',
						value: 'vg',
					},
					{
						name: 'vi - Virgin Islands, U.S.',
						value: 'vi',
					},
					{
						name: 'wf - Wallis and Futuna',
						value: 'wf',
					},
					{
						name: 'eh - Western Sahara',
						value: 'eh',
					},
					{
						name: 'ye - Yemen',
						value: 'ye',
					},
					{
						name: 'zm - Zambia',
						value: 'zm',
					},
					{
						name: 'zw - Zimbabwe',
						value: 'zw',
					},
				],
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'options',
				default: 'google.com',
				description: 'Google domain to use. Default is google.com.',
				displayOptions: {
					show: {
						"/operation": [
							'events',
							'serp',
							'serp_light',
							'shopping',
						],
					},
				},
				options: [
					{
						name: 'google.ac',
						value: 'google.ac',
					},
					{
						name: 'google.ad',
						value: 'google.ad',
					},
					{
						name: 'google.ae',
						value: 'google.ae',
					},
					{
						name: 'google.al',
						value: 'google.al',
					},
					{
						name: 'google.am',
						value: 'google.am',
					},
					{
						name: 'google.as',
						value: 'google.as',
					},
					{
						name: 'google.at',
						value: 'google.at',
					},
					{
						name: 'google.az',
						value: 'google.az',
					},
					{
						name: 'google.ba',
						value: 'google.ba',
					},
					{
						name: 'google.be',
						value: 'google.be',
					},
					{
						name: 'google.bf',
						value: 'google.bf',
					},
					{
						name: 'google.bg',
						value: 'google.bg',
					},
					{
						name: 'google.bi',
						value: 'google.bi',
					},
					{
						name: 'google.bj',
						value: 'google.bj',
					},
					{
						name: 'google.bs',
						value: 'google.bs',
					},
					{
						name: 'google.bt',
						value: 'google.bt',
					},
					{
						name: 'google.by',
						value: 'google.by',
					},
					{
						name: 'google.ca',
						value: 'google.ca',
					},
					{
						name: 'google.cd',
						value: 'google.cd',
					},
					{
						name: 'google.cf',
						value: 'google.cf',
					},
					{
						name: 'google.cg',
						value: 'google.cg',
					},
					{
						name: 'google.ch',
						value: 'google.ch',
					},
					{
						name: 'google.ci',
						value: 'google.ci',
					},
					{
						name: 'google.cl',
						value: 'google.cl',
					},
					{
						name: 'google.cm',
						value: 'google.cm',
					},
					{
						name: 'google.co.ao',
						value: 'google.co.ao',
					},
					{
						name: 'google.co.bw',
						value: 'google.co.bw',
					},
					{
						name: 'google.co.ck',
						value: 'google.co.ck',
					},
					{
						name: 'google.co.cr',
						value: 'google.co.cr',
					},
					{
						name: 'google.co.id',
						value: 'google.co.id',
					},
					{
						name: 'google.co.il',
						value: 'google.co.il',
					},
					{
						name: 'google.co.in',
						value: 'google.co.in',
					},
					{
						name: 'google.co.jp',
						value: 'google.co.jp',
					},
					{
						name: 'google.co.ke',
						value: 'google.co.ke',
					},
					{
						name: 'google.co.kr',
						value: 'google.co.kr',
					},
					{
						name: 'google.co.ls',
						value: 'google.co.ls',
					},
					{
						name: 'google.co.ma',
						value: 'google.co.ma',
					},
					{
						name: 'google.co.mz',
						value: 'google.co.mz',
					},
					{
						name: 'google.co.nz',
						value: 'google.co.nz',
					},
					{
						name: 'google.co.th',
						value: 'google.co.th',
					},
					{
						name: 'google.co.tz',
						value: 'google.co.tz',
					},
					{
						name: 'google.co.ug',
						value: 'google.co.ug',
					},
					{
						name: 'google.co.uk',
						value: 'google.co.uk',
					},
					{
						name: 'google.co.uz',
						value: 'google.co.uz',
					},
					{
						name: 'google.co.ve',
						value: 'google.co.ve',
					},
					{
						name: 'google.co.vi',
						value: 'google.co.vi',
					},
					{
						name: 'google.co.za',
						value: 'google.co.za',
					},
					{
						name: 'google.co.zm',
						value: 'google.co.zm',
					},
					{
						name: 'google.co.zw',
						value: 'google.co.zw',
					},
					{
						name: 'google.com',
						value: 'google.com',
					},
					{
						name: 'google.com.af',
						value: 'google.com.af',
					},
					{
						name: 'google.com.ag',
						value: 'google.com.ag',
					},
					{
						name: 'google.com.ai',
						value: 'google.com.ai',
					},
					{
						name: 'google.com.ar',
						value: 'google.com.ar',
					},
					{
						name: 'google.com.au',
						value: 'google.com.au',
					},
					{
						name: 'google.com.bd',
						value: 'google.com.bd',
					},
					{
						name: 'google.com.bh',
						value: 'google.com.bh',
					},
					{
						name: 'google.com.bn',
						value: 'google.com.bn',
					},
					{
						name: 'google.com.bo',
						value: 'google.com.bo',
					},
					{
						name: 'google.com.br',
						value: 'google.com.br',
					},
					{
						name: 'google.com.bz',
						value: 'google.com.bz',
					},
					{
						name: 'google.com.co',
						value: 'google.com.co',
					},
					{
						name: 'google.com.cu',
						value: 'google.com.cu',
					},
					{
						name: 'google.com.cy',
						value: 'google.com.cy',
					},
					{
						name: 'google.com.do',
						value: 'google.com.do',
					},
					{
						name: 'google.com.ec',
						value: 'google.com.ec',
					},
					{
						name: 'google.com.eg',
						value: 'google.com.eg',
					},
					{
						name: 'google.com.et',
						value: 'google.com.et',
					},
					{
						name: 'google.com.fj',
						value: 'google.com.fj',
					},
					{
						name: 'google.com.gh',
						value: 'google.com.gh',
					},
					{
						name: 'google.com.gi',
						value: 'google.com.gi',
					},
					{
						name: 'google.com.gt',
						value: 'google.com.gt',
					},
					{
						name: 'google.com.hk',
						value: 'google.com.hk',
					},
					{
						name: 'google.com.jm',
						value: 'google.com.jm',
					},
					{
						name: 'google.com.kh',
						value: 'google.com.kh',
					},
					{
						name: 'google.com.kw',
						value: 'google.com.kw',
					},
					{
						name: 'google.com.lb',
						value: 'google.com.lb',
					},
					{
						name: 'google.com.ly',
						value: 'google.com.ly',
					},
					{
						name: 'google.com.mm',
						value: 'google.com.mm',
					},
					{
						name: 'google.com.mt',
						value: 'google.com.mt',
					},
					{
						name: 'google.com.mx',
						value: 'google.com.mx',
					},
					{
						name: 'google.com.my',
						value: 'google.com.my',
					},
					{
						name: 'google.com.na',
						value: 'google.com.na',
					},
					{
						name: 'google.com.ng',
						value: 'google.com.ng',
					},
					{
						name: 'google.ng',
						value: 'google.ng',
					},
					{
						name: 'google.com.nf',
						value: 'google.com.nf',
					},
					{
						name: 'google.com.ni',
						value: 'google.com.ni',
					},
					{
						name: 'google.com.np',
						value: 'google.com.np',
					},
					{
						name: 'google.com.om',
						value: 'google.com.om',
					},
					{
						name: 'google.com.pa',
						value: 'google.com.pa',
					},
					{
						name: 'google.com.pe',
						value: 'google.com.pe',
					},
					{
						name: 'google.com.pg',
						value: 'google.com.pg',
					},
					{
						name: 'google.com.ph',
						value: 'google.com.ph',
					},
					{
						name: 'google.com.pk',
						value: 'google.com.pk',
					},
					{
						name: 'google.com.pr',
						value: 'google.com.pr',
					},
					{
						name: 'google.com.py',
						value: 'google.com.py',
					},
					{
						name: 'google.com.qa',
						value: 'google.com.qa',
					},
					{
						name: 'google.com.sa',
						value: 'google.com.sa',
					},
					{
						name: 'google.com.sb',
						value: 'google.com.sb',
					},
					{
						name: 'google.com.sg',
						value: 'google.com.sg',
					},
					{
						name: 'google.com.sl',
						value: 'google.com.sl',
					},
					{
						name: 'google.com.sv',
						value: 'google.com.sv',
					},
					{
						name: 'google.com.tj',
						value: 'google.com.tj',
					},
					{
						name: 'google.com.tr',
						value: 'google.com.tr',
					},
					{
						name: 'google.com.tw',
						value: 'google.com.tw',
					},
					{
						name: 'google.com.ua',
						value: 'google.com.ua',
					},
					{
						name: 'google.com.uy',
						value: 'google.com.uy',
					},
					{
						name: 'google.com.vc',
						value: 'google.com.vc',
					},
					{
						name: 'google.com.vn',
						value: 'google.com.vn',
					},
					{
						name: 'google.cat',
						value: 'google.cat',
					},
					{
						name: 'google.cn',
						value: 'google.cn',
					},
					{
						name: 'google.cv',
						value: 'google.cv',
					},
					{
						name: 'google.cz',
						value: 'google.cz',
					},
					{
						name: 'google.de',
						value: 'google.de',
					},
					{
						name: 'google.dj',
						value: 'google.dj',
					},
					{
						name: 'google.dk',
						value: 'google.dk',
					},
					{
						name: 'google.dm',
						value: 'google.dm',
					},
					{
						name: 'google.dz',
						value: 'google.dz',
					},
					{
						name: 'google.ee',
						value: 'google.ee',
					},
					{
						name: 'google.es',
						value: 'google.es',
					},
					{
						name: 'google.fi',
						value: 'google.fi',
					},
					{
						name: 'google.fm',
						value: 'google.fm',
					},
					{
						name: 'google.fr',
						value: 'google.fr',
					},
					{
						name: 'google.ga',
						value: 'google.ga',
					},
					{
						name: 'google.ge',
						value: 'google.ge',
					},
					{
						name: 'google.gg',
						value: 'google.gg',
					},
					{
						name: 'google.gl',
						value: 'google.gl',
					},
					{
						name: 'google.gm',
						value: 'google.gm',
					},
					{
						name: 'google.gp',
						value: 'google.gp',
					},
					{
						name: 'google.gr',
						value: 'google.gr',
					},
					{
						name: 'google.gy',
						value: 'google.gy',
					},
					{
						name: 'google.hn',
						value: 'google.hn',
					},
					{
						name: 'google.hr',
						value: 'google.hr',
					},
					{
						name: 'google.ht',
						value: 'google.ht',
					},
					{
						name: 'google.hu',
						value: 'google.hu',
					},
					{
						name: 'google.ie',
						value: 'google.ie',
					},
					{
						name: 'google.im',
						value: 'google.im',
					},
					{
						name: 'google.iq',
						value: 'google.iq',
					},
					{
						name: 'google.is',
						value: 'google.is',
					},
					{
						name: 'google.it',
						value: 'google.it',
					},
					{
						name: 'google.je',
						value: 'google.je',
					},
					{
						name: 'google.jo',
						value: 'google.jo',
					},
					{
						name: 'google.kg',
						value: 'google.kg',
					},
					{
						name: 'google.ki',
						value: 'google.ki',
					},
					{
						name: 'google.kz',
						value: 'google.kz',
					},
					{
						name: 'google.la',
						value: 'google.la',
					},
					{
						name: 'google.li',
						value: 'google.li',
					},
					{
						name: 'google.lk',
						value: 'google.lk',
					},
					{
						name: 'google.lt',
						value: 'google.lt',
					},
					{
						name: 'google.lu',
						value: 'google.lu',
					},
					{
						name: 'google.lv',
						value: 'google.lv',
					},
					{
						name: 'google.md',
						value: 'google.md',
					},
					{
						name: 'google.me',
						value: 'google.me',
					},
					{
						name: 'google.mg',
						value: 'google.mg',
					},
					{
						name: 'google.mk',
						value: 'google.mk',
					},
					{
						name: 'google.ml',
						value: 'google.ml',
					},
					{
						name: 'google.mn',
						value: 'google.mn',
					},
					{
						name: 'google.ms',
						value: 'google.ms',
					},
					{
						name: 'google.mu',
						value: 'google.mu',
					},
					{
						name: 'google.mv',
						value: 'google.mv',
					},
					{
						name: 'google.mw',
						value: 'google.mw',
					},
					{
						name: 'google.ne',
						value: 'google.ne',
					},
					{
						name: 'google.nl',
						value: 'google.nl',
					},
					{
						name: 'google.no',
						value: 'google.no',
					},
					{
						name: 'google.nr',
						value: 'google.nr',
					},
					{
						name: 'google.nu',
						value: 'google.nu',
					},
					{
						name: 'google.pl',
						value: 'google.pl',
					},
					{
						name: 'google.pn',
						value: 'google.pn',
					},
					{
						name: 'google.ps',
						value: 'google.ps',
					},
					{
						name: 'google.pt',
						value: 'google.pt',
					},
					{
						name: 'google.ro',
						value: 'google.ro',
					},
					{
						name: 'google.rs',
						value: 'google.rs',
					},
					{
						name: 'google.ru',
						value: 'google.ru',
					},
					{
						name: 'google.rw',
						value: 'google.rw',
					},
					{
						name: 'google.sc',
						value: 'google.sc',
					},
					{
						name: 'google.se',
						value: 'google.se',
					},
					{
						name: 'google.sh',
						value: 'google.sh',
					},
					{
						name: 'google.si',
						value: 'google.si',
					},
					{
						name: 'google.sk',
						value: 'google.sk',
					},
					{
						name: 'google.sm',
						value: 'google.sm',
					},
					{
						name: 'google.sn',
						value: 'google.sn',
					},
					{
						name: 'google.so',
						value: 'google.so',
					},
					{
						name: 'google.sr',
						value: 'google.sr',
					},
					{
						name: 'google.st',
						value: 'google.st',
					},
					{
						name: 'google.td',
						value: 'google.td',
					},
					{
						name: 'google.tg',
						value: 'google.tg',
					},
					{
						name: 'google.tk',
						value: 'google.tk',
					},
					{
						name: 'google.tl',
						value: 'google.tl',
					},
					{
						name: 'google.tm',
						value: 'google.tm',
					},
					{
						name: 'google.tn',
						value: 'google.tn',
					},
					{
						name: 'google.to',
						value: 'google.to',
					},
					{
						name: 'google.tt',
						value: 'google.tt',
					},
					{
						name: 'google.vg',
						value: 'google.vg',
					},
					{
						name: 'google.vu',
						value: 'google.vu',
					},
					{
						name: 'google.ws',
						value: 'google.ws',
					},
				],
			},
			{
				displayName: 'Language',
				name: 'hl',
				type: 'options',
				default: 'en',
				description: 'The two-letter language code for the language you want to use for the search.',
				displayOptions: {
					show: {
						"/operation": [
							'events',
							'news',
							'serp',
							'serp_light',
							'shopping',
							'short_videos',
						],
					},
				},
				options: [
					{
						name: 'af - Afrikaans',
						value: 'af',
					},
					{
						name: 'ak - Akan',
						value: 'ak',
					},
					{
						name: 'sq - Albanian',
						value: 'sq',
					},
					{
						name: 'ws - Samoa',
						value: 'ws',
					},
					{
						name: 'am - Amharic',
						value: 'am',
					},
					{
						name: 'ar - Arabic',
						value: 'ar',
					},
					{
						name: 'hy - Armenian',
						value: 'hy',
					},
					{
						name: 'az - Azerbaijani',
						value: 'az',
					},
					{
						name: 'eu - Basque',
						value: 'eu',
					},
					{
						name: 'be - Belarusian',
						value: 'be',
					},
					{
						name: 'bem - Bemba',
						value: 'bem',
					},
					{
						name: 'bn - Bengali',
						value: 'bn',
					},
					{
						name: 'bh - Bihari',
						value: 'bh',
					},
					{
						name: 'xx-bork - Bork, bork, bork!',
						value: 'xx-bork',
					},
					{
						name: 'bs - Bosnian',
						value: 'bs',
					},
					{
						name: 'br - Breton',
						value: 'br',
					},
					{
						name: 'bg - Bulgarian',
						value: 'bg',
					},
					{
						name: 'bt - Bhutanese',
						value: 'bt',
					},
					{
						name: 'km - Cambodian',
						value: 'km',
					},
					{
						name: 'ca - Catalan',
						value: 'ca',
					},
					{
						name: 'chr - Cherokee',
						value: 'chr',
					},
					{
						name: 'ny - Chichewa',
						value: 'ny',
					},
					{
						name: 'zh-cn - Chinese (Simplified)',
						value: 'zh-cn',
					},
					{
						name: 'zh-tw - Chinese (Traditional)',
						value: 'zh-tw',
					},
					{
						name: 'zh-hk - Hong Kong (Traditional)',
						value: 'zh-hk',
					},
					{
						name: 'co - Corsican',
						value: 'co',
					},
					{
						name: 'hr - Croatian',
						value: 'hr',
					},
					{
						name: 'cs - Czech',
						value: 'cs',
					},
					{
						name: 'da - Danish',
						value: 'da',
					},
					{
						name: 'nl - Dutch',
						value: 'nl',
					},
					{
						name: 'xx-elmer - Elmer Fudd',
						value: 'xx-elmer',
					},
					{
						name: 'en - English',
						value: 'en',
					},
					{
						name: 'eo - Esperanto',
						value: 'eo',
					},
					{
						name: 'et - Estonian',
						value: 'et',
					},
					{
						name: 'ee - Ewe',
						value: 'ee',
					},
					{
						name: 'fo - Faroese',
						value: 'fo',
					},
					{
						name: 'tl - Filipino',
						value: 'tl',
					},
					{
						name: 'fil - Filipino',
						value: 'fil',
					},
					{
						name: 'fi - Finnish',
						value: 'fi',
					},
					{
						name: 'fr - French',
						value: 'fr',
					},
					{
						name: 'fy - Frisian',
						value: 'fy',
					},
					{
						name: 'gaa - Ga',
						value: 'gaa',
					},
					{
						name: 'gl - Galician',
						value: 'gl',
					},
					{
						name: 'ka - Georgian',
						value: 'ka',
					},
					{
						name: 'de - German',
						value: 'de',
					},
					{
						name: 'el - Greek',
						value: 'el',
					},
					{
						name: 'kl - Greenlandic',
						value: 'kl',
					},
					{
						name: 'gn - Guarani',
						value: 'gn',
					},
					{
						name: 'gu - Gujarati',
						value: 'gu',
					},
					{
						name: 'xx-hacker - Hacker',
						value: 'xx-hacker',
					},
					{
						name: 'ht - Haitian Creole',
						value: 'ht',
					},
					{
						name: 'ha - Hausa',
						value: 'ha',
					},
					{
						name: 'haw - Hawaiian',
						value: 'haw',
					},
					{
						name: 'iw - Hebrew',
						value: 'iw',
					},
					{
						name: 'hi - Hindi',
						value: 'hi',
					},
					{
						name: 'hu - Hungarian',
						value: 'hu',
					},
					{
						name: 'is - Icelandic',
						value: 'is',
					},
					{
						name: 'ig - Igbo',
						value: 'ig',
					},
					{
						name: 'id - Indonesian',
						value: 'id',
					},
					{
						name: 'ia - Interlingua',
						value: 'ia',
					},
					{
						name: 'ga - Irish',
						value: 'ga',
					},
					{
						name: 'it - Italian',
						value: 'it',
					},
					{
						name: 'ja - Japanese',
						value: 'ja',
					},
					{
						name: 'jw - Javanese',
						value: 'jw',
					},
					{
						name: 'kn - Kannada',
						value: 'kn',
					},
					{
						name: 'kk - Kazakh',
						value: 'kk',
					},
					{
						name: 'rw - Kinyarwanda',
						value: 'rw',
					},
					{
						name: 'rn - Kirundi',
						value: 'rn',
					},
					{
						name: 'xx-klingon - Klingon',
						value: 'xx-klingon',
					},
					{
						name: 'kg - Kongo',
						value: 'kg',
					},
					{
						name: 'ko - Korean',
						value: 'ko',
					},
					{
						name: 'kri - Krio (Sierra Leone)',
						value: 'kri',
					},
					{
						name: 'ku - Kurdish',
						value: 'ku',
					},
					{
						name: 'ckb - Kurdish (Soranî)',
						value: 'ckb',
					},
					{
						name: 'ky - Kyrgyz',
						value: 'ky',
					},
					{
						name: 'lo - Laothian',
						value: 'lo',
					},
					{
						name: 'la - Latin',
						value: 'la',
					},
					{
						name: 'lv - Latvian',
						value: 'lv',
					},
					{
						name: 'ln - Lingala',
						value: 'ln',
					},
					{
						name: 'lt - Lithuanian',
						value: 'lt',
					},
					{
						name: 'loz - Lozi',
						value: 'loz',
					},
					{
						name: 'lg - Luganda',
						value: 'lg',
					},
					{
						name: 'ach - Luo',
						value: 'ach',
					},
					{
						name: 'mk - Macedonian',
						value: 'mk',
					},
					{
						name: 'mg - Malagasy',
						value: 'mg',
					},
					{
						name: 'my - Myanmar',
						value: 'my',
					},
					{
						name: 'ml - Malayalam',
						value: 'ml',
					},
					{
						name: 'mt - Maltese',
						value: 'mt',
					},
					{
						name: 'mv - Maldives',
						value: 'mv',
					},
					{
						name: 'mi - Maori',
						value: 'mi',
					},
					{
						name: 'mr - Marathi',
						value: 'mr',
					},
					{
						name: 'mfe - Mauritian Creole',
						value: 'mfe',
					},
					{
						name: 'mo - Moldavian',
						value: 'mo',
					},
					{
						name: 'mn - Mongolian',
						value: 'mn',
					},
					{
						name: 'ms - Malay',
						value: 'ms',
					},
					{
						name: 'sr-me - Montenegrin',
						value: 'sr-me',
					},
					{
						name: 'ne - Nepali',
						value: 'ne',
					},
					{
						name: 'pcm - Nigerian Pidgin',
						value: 'pcm',
					},
					{
						name: 'nso - Northern Sotho',
						value: 'nso',
					},
					{
						name: 'no - Norwegian',
						value: 'no',
					},
					{
						name: 'nn - Norwegian (Nynorsk)',
						value: 'nn',
					},
					{
						name: 'oc - Occitan',
						value: 'oc',
					},
					{
						name: 'or - Oriya',
						value: 'or',
					},
					{
						name: 'om - Oromo',
						value: 'om',
					},
					{
						name: 'ps - Pashto',
						value: 'ps',
					},
					{
						name: 'fa - Persian',
						value: 'fa',
					},
					{
						name: 'xx-pirate - Pirate',
						value: 'xx-pirate',
					},
					{
						name: 'pl - Polish',
						value: 'pl',
					},
					{
						name: 'pt - Portuguese',
						value: 'pt',
					},
					{
						name: 'pt-br - Portuguese (Brazil)',
						value: 'pt-br',
					},
					{
						name: 'pt-pt - Portuguese (Portugal)',
						value: 'pt-pt',
					},
					{
						name: 'pa - Punjabi',
						value: 'pa',
					},
					{
						name: 'qu - Quechua',
						value: 'qu',
					},
					{
						name: 'ro - Romanian',
						value: 'ro',
					},
					{
						name: 'rm - Romansh',
						value: 'rm',
					},
					{
						name: 'nyn - Runyakitara',
						value: 'nyn',
					},
					{
						name: 'ru - Russian',
						value: 'ru',
					},
					{
						name: 'gd - Scots Gaelic',
						value: 'gd',
					},
					{
						name: 'sr - Serbian',
						value: 'sr',
					},
					{
						name: 'sh - Serbo-Croatian',
						value: 'sh',
					},
					{
						name: 'st - Sesotho',
						value: 'st',
					},
					{
						name: 'tn - Setswana',
						value: 'tn',
					},
					{
						name: 'crs - Seychellois Creole',
						value: 'crs',
					},
					{
						name: 'sn - Shona',
						value: 'sn',
					},
					{
						name: 'sd - Sindhi',
						value: 'sd',
					},
					{
						name: 'si - Sinhalese',
						value: 'si',
					},
					{
						name: 'sk - Slovak',
						value: 'sk',
					},
					{
						name: 'sl - Slovenian',
						value: 'sl',
					},
					{
						name: 'so - Somali',
						value: 'so',
					},
					{
						name: 'es - Spanish',
						value: 'es',
					},
					{
						name: 'es-419 - Spanish (Latin American)',
						value: 'es-419',
					},
					{
						name: 'su - Sundanese',
						value: 'su',
					},
					{
						name: 'sw - Swahili',
						value: 'sw',
					},
					{
						name: 'sv - Swedish',
						value: 'sv',
					},
					{
						name: 'tg - Tajik',
						value: 'tg',
					},
					{
						name: 'ta - Tamil',
						value: 'ta',
					},
					{
						name: 'tt - Tatar',
						value: 'tt',
					},
					{
						name: 'te - Telugu',
						value: 'te',
					},
					{
						name: 'th - Thai',
						value: 'th',
					},
					{
						name: 'ti - Tigrinya',
						value: 'ti',
					},
					{
						name: 'to - Tonga',
						value: 'to',
					},
					{
						name: 'lua - Tshiluba',
						value: 'lua',
					},
					{
						name: 'tum - Tumbuka',
						value: 'tum',
					},
					{
						name: 'tr - Turkish',
						value: 'tr',
					},
					{
						name: 'tk - Turkmen',
						value: 'tk',
					},
					{
						name: 'tw - Twi',
						value: 'tw',
					},
					{
						name: 'ug - Uighur',
						value: 'ug',
					},
					{
						name: 'uk - Ukrainian',
						value: 'uk',
					},
					{
						name: 'ur - Urdu',
						value: 'ur',
					},
					{
						name: 'uz - Uzbek',
						value: 'uz',
					},
					{
						name: 'vu - Vanuatu',
						value: 'vu',
					},
					{
						name: 'vi - Vietnamese',
						value: 'vi',
					},
					{
						name: 'cy - Welsh',
						value: 'cy',
					},
					{
						name: 'wo - Wolof',
						value: 'wo',
					},
					{
						name: 'xh - Xhosa',
						value: 'xh',
					},
					{
						name: 'yi - Yiddish',
						value: 'yi',
					},
					{
						name: 'yo - Yoruba',
						value: 'yo',
					},
					{
						name: 'zu - Zulu',
						value: 'zu',
					},
				],
			},
			{
				displayName: 'Set Multiple Languages',
				name: 'lr',
				type: 'multiOptions',
				default: [],
				description: 'The \'lr\' parameter specifies the language of the websites to return results from. This parameter filters results based on the language of the web content.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
							'serp_light',
							'short_videos',
						],
					},
				},
				options: [
					{
						name: 'lang_ar',
						value: 'lang_ar',
					},
					{
						name: 'lang_hy',
						value: 'lang_hy',
					},
					{
						name: 'lang_bg',
						value: 'lang_bg',
					},
					{
						name: 'lang_ca',
						value: 'lang_ca',
					},
					{
						name: 'lang_cs',
						value: 'lang_cs',
					},
					{
						name: 'lang_da',
						value: 'lang_da',
					},
					{
						name: 'lang_de',
						value: 'lang_de',
					},
					{
						name: 'lang_el',
						value: 'lang_el',
					},
					{
						name: 'lang_en',
						value: 'lang_en',
					},
					{
						name: 'lang_es',
						value: 'lang_es',
					},
					{
						name: 'lang_et',
						value: 'lang_et',
					},
					{
						name: 'lang_tl',
						value: 'lang_tl',
					},
					{
						name: 'lang_fi',
						value: 'lang_fi',
					},
					{
						name: 'lang_fr',
						value: 'lang_fr',
					},
					{
						name: 'lang_hr',
						value: 'lang_hr',
					},
					{
						name: 'lang_hi',
						value: 'lang_hi',
					},
					{
						name: 'lang_hu',
						value: 'lang_hu',
					},
					{
						name: 'lang_id',
						value: 'lang_id',
					},
					{
						name: 'lang_is',
						value: 'lang_is',
					},
					{
						name: 'lang_it',
						value: 'lang_it',
					},
					{
						name: 'lang_iw',
						value: 'lang_iw',
					},
					{
						name: 'lang_ja',
						value: 'lang_ja',
					},
					{
						name: 'lang_ko',
						value: 'lang_ko',
					},
					{
						name: 'lang_lt',
						value: 'lang_lt',
					},
					{
						name: 'lang_lv',
						value: 'lang_lv',
					},
					{
						name: 'lang_nl',
						value: 'lang_nl',
					},
					{
						name: 'lang_no',
						value: 'lang_no',
					},
					{
						name: 'lang_fa',
						value: 'lang_fa',
					},
					{
						name: 'lang_pl',
						value: 'lang_pl',
					},
					{
						name: 'lang_pt',
						value: 'lang_pt',
					},
					{
						name: 'lang_ro',
						value: 'lang_ro',
					},
					{
						name: 'lang_ru',
						value: 'lang_ru',
					},
					{
						name: 'lang_sk',
						value: 'lang_sk',
					},
					{
						name: 'lang_sl',
						value: 'lang_sl',
					},
					{
						name: 'lang_sr',
						value: 'lang_sr',
					},
					{
						name: 'lang_sv',
						value: 'lang_sv',
					},
					{
						name: 'lang_th',
						value: 'lang_th',
					},
					{
						name: 'lang_tr',
						value: 'lang_tr',
					},
					{
						name: 'lang_uk',
						value: 'lang_uk',
					},
					{
						name: 'lang_vi',
						value: 'lang_vi',
					},
					{
						name: 'lang_zh-CN',
						value: 'lang_zh-CN',
					},
					{
						name: 'lang_zh-TW',
						value: 'lang_zh-TW',
					},
				],
			},
			{
				displayName: 'Country',
				name: 'cr',
				type: 'options',
				default: 'countryAF',
				description: 'The country code for the country you want to limit the search to.',
				displayOptions: {
					show: {
						"/operation": [
							'short_videos',
						],
					},
				},
				options: [
					{
						name: 'countryAF - Afghanistan',
						value: 'countryAF',
					},
					{
						name: 'countryAL - Albania',
						value: 'countryAL',
					},
					{
						name: 'countryDZ - Algeria',
						value: 'countryDZ',
					},
					{
						name: 'countryAS - American Samoa',
						value: 'countryAS',
					},
					{
						name: 'countryAD - Andorra',
						value: 'countryAD',
					},
					{
						name: 'countryAO - Angola',
						value: 'countryAO',
					},
					{
						name: 'countryAI - Anguilla',
						value: 'countryAI',
					},
					{
						name: 'countryAQ - Antarctica',
						value: 'countryAQ',
					},
					{
						name: 'countryAG - Antigua and Barbuda',
						value: 'countryAG',
					},
					{
						name: 'countryAR - Argentina',
						value: 'countryAR',
					},
					{
						name: 'countryAM - Armenia',
						value: 'countryAM',
					},
					{
						name: 'countryAW - Aruba',
						value: 'countryAW',
					},
					{
						name: 'countryAU - Australia',
						value: 'countryAU',
					},
					{
						name: 'countryAT - Austria',
						value: 'countryAT',
					},
					{
						name: 'countryAZ - Azerbaijan',
						value: 'countryAZ',
					},
					{
						name: 'countryBS - Bahamas',
						value: 'countryBS',
					},
					{
						name: 'countryBH - Bahrain',
						value: 'countryBH',
					},
					{
						name: 'countryBD - Bangladesh',
						value: 'countryBD',
					},
					{
						name: 'countryBB - Barbados',
						value: 'countryBB',
					},
					{
						name: 'countryBY - Belarus',
						value: 'countryBY',
					},
					{
						name: 'countryBE - Belgium',
						value: 'countryBE',
					},
					{
						name: 'countryBZ - Belize',
						value: 'countryBZ',
					},
					{
						name: 'countryBJ - Benin',
						value: 'countryBJ',
					},
					{
						name: 'countryBM - Bermuda',
						value: 'countryBM',
					},
					{
						name: 'countryBT - Bhutan',
						value: 'countryBT',
					},
					{
						name: 'countryBO - Bolivia',
						value: 'countryBO',
					},
					{
						name: 'countryBA - Bosnia and Herzegovina',
						value: 'countryBA',
					},
					{
						name: 'countryBW - Botswana',
						value: 'countryBW',
					},
					{
						name: 'countryBV - Bouvet Island',
						value: 'countryBV',
					},
					{
						name: 'countryBR - Brazil',
						value: 'countryBR',
					},
					{
						name: 'countryIO - British Indian Ocean Territory',
						value: 'countryIO',
					},
					{
						name: 'countryVG - British Virgin Islands',
						value: 'countryVG',
					},
					{
						name: 'countryBN - Brunei',
						value: 'countryBN',
					},
					{
						name: 'countryBG - Bulgaria',
						value: 'countryBG',
					},
					{
						name: 'countryBF - Burkina Faso',
						value: 'countryBF',
					},
					{
						name: 'countryBI - Burundi',
						value: 'countryBI',
					},
					{
						name: 'countryKH - Cambodia',
						value: 'countryKH',
					},
					{
						name: 'countryCM - Cameroon',
						value: 'countryCM',
					},
					{
						name: 'countryCA - Canada',
						value: 'countryCA',
					},
					{
						name: 'countryCV - Cape Verde',
						value: 'countryCV',
					},
					{
						name: 'countryKY - Cayman Islands',
						value: 'countryKY',
					},
					{
						name: 'countryCF - Central African Republic',
						value: 'countryCF',
					},
					{
						name: 'countryTD - Chad',
						value: 'countryTD',
					},
					{
						name: 'countryCL - Chile',
						value: 'countryCL',
					},
					{
						name: 'countryCN - China',
						value: 'countryCN',
					},
					{
						name: 'countryCX - Christmas Island',
						value: 'countryCX',
					},
					{
						name: 'countryCC - Cocos Islands',
						value: 'countryCC',
					},
					{
						name: 'countryCO - Colombia',
						value: 'countryCO',
					},
					{
						name: 'countryKM - Comoros',
						value: 'countryKM',
					},
					{
						name: 'countryCG - Congo - Brazzaville',
						value: 'countryCG',
					},
					{
						name: 'countryCD - Congo - Kinshasa',
						value: 'countryCD',
					},
					{
						name: 'countryCK - Cook Islands',
						value: 'countryCK',
					},
					{
						name: 'countryCR - Costa Rica',
						value: 'countryCR',
					},
					{
						name: 'countryCI - Côte d’Ivoire',
						value: 'countryCI',
					},
					{
						name: 'countryHR - Croatia',
						value: 'countryHR',
					},
					{
						name: 'countryCU - Cuba',
						value: 'countryCU',
					},
					{
						name: 'countryCY - Cyprus',
						value: 'countryCY',
					},
					{
						name: 'countryCZ - Czechia',
						value: 'countryCZ',
					},
					{
						name: 'countryDK - Denmark',
						value: 'countryDK',
					},
					{
						name: 'countryDJ - Djibouti',
						value: 'countryDJ',
					},
					{
						name: 'countryDM - Dominica',
						value: 'countryDM',
					},
					{
						name: 'countryDO - Dominican Republic',
						value: 'countryDO',
					},
					{
						name: 'countryEC - Ecuador',
						value: 'countryEC',
					},
					{
						name: 'countryEG - Egypt',
						value: 'countryEG',
					},
					{
						name: 'countrySV - El Salvador',
						value: 'countrySV',
					},
					{
						name: 'countryGQ - Equatorial Guinea',
						value: 'countryGQ',
					},
					{
						name: 'countryER - Eritrea',
						value: 'countryER',
					},
					{
						name: 'countryEE - Estonia',
						value: 'countryEE',
					},
					{
						name: 'countrySZ - Eswatini',
						value: 'countrySZ',
					},
					{
						name: 'countryET - Ethiopia',
						value: 'countryET',
					},
					{
						name: 'countryFK - Falkland Islands',
						value: 'countryFK',
					},
					{
						name: 'countryFO - Faroe Islands',
						value: 'countryFO',
					},
					{
						name: 'countryFJ - Fiji',
						value: 'countryFJ',
					},
					{
						name: 'countryFI - Finland',
						value: 'countryFI',
					},
					{
						name: 'countryFR - France',
						value: 'countryFR',
					},
					{
						name: 'countryGF - French Guiana',
						value: 'countryGF',
					},
					{
						name: 'countryPF - French Polynesia',
						value: 'countryPF',
					},
					{
						name: 'countryTF - French Southern Territories',
						value: 'countryTF',
					},
					{
						name: 'countryGA - Gabon',
						value: 'countryGA',
					},
					{
						name: 'countryGM - Gambia',
						value: 'countryGM',
					},
					{
						name: 'countryGE - Georgia',
						value: 'countryGE',
					},
					{
						name: 'countryDE - Germany',
						value: 'countryDE',
					},
					{
						name: 'countryGH - Ghana',
						value: 'countryGH',
					},
					{
						name: 'countryGI - Gibraltar',
						value: 'countryGI',
					},
					{
						name: 'countryGR - Greece',
						value: 'countryGR',
					},
					{
						name: 'countryGL - Greenland',
						value: 'countryGL',
					},
					{
						name: 'countryGD - Grenada',
						value: 'countryGD',
					},
					{
						name: 'countryGP - Guadeloupe',
						value: 'countryGP',
					},
					{
						name: 'countryGU - Guam',
						value: 'countryGU',
					},
					{
						name: 'countryGT - Guatemala',
						value: 'countryGT',
					},
					{
						name: 'countryGN - Guinea',
						value: 'countryGN',
					},
					{
						name: 'countryGW - Guinea-Bissau',
						value: 'countryGW',
					},
					{
						name: 'countryGY - Guyana',
						value: 'countryGY',
					},
					{
						name: 'countryHT - Haiti',
						value: 'countryHT',
					},
					{
						name: 'countryHM - Heard Island and McDonald Islands',
						value: 'countryHM',
					},
					{
						name: 'countryHN - Honduras',
						value: 'countryHN',
					},
					{
						name: 'countryHK - Hong Kong',
						value: 'countryHK',
					},
					{
						name: 'countryHU - Hungary',
						value: 'countryHU',
					},
					{
						name: 'countryIS - Iceland',
						value: 'countryIS',
					},
					{
						name: 'countryIN - India',
						value: 'countryIN',
					},
					{
						name: 'countryID - Indonesia',
						value: 'countryID',
					},
					{
						name: 'countryIR - Iran',
						value: 'countryIR',
					},
					{
						name: 'countryIQ - Iraq',
						value: 'countryIQ',
					},
					{
						name: 'countryIE - Ireland',
						value: 'countryIE',
					},
					{
						name: 'countryIL - Israel',
						value: 'countryIL',
					},
					{
						name: 'countryIT - Italy',
						value: 'countryIT',
					},
					{
						name: 'countryJM - Jamaica',
						value: 'countryJM',
					},
					{
						name: 'countryJP - Japan',
						value: 'countryJP',
					},
					{
						name: 'countryJO - Jordan',
						value: 'countryJO',
					},
					{
						name: 'countryKZ - Kazakhstan',
						value: 'countryKZ',
					},
					{
						name: 'countryKE - Kenya',
						value: 'countryKE',
					},
					{
						name: 'countryKI - Kiribati',
						value: 'countryKI',
					},
					{
						name: 'countryKW - Kuwait',
						value: 'countryKW',
					},
					{
						name: 'countryKG - Kyrgyzstan',
						value: 'countryKG',
					},
					{
						name: 'countryLA - Laos',
						value: 'countryLA',
					},
					{
						name: 'countryLV - Latvia',
						value: 'countryLV',
					},
					{
						name: 'countryLB - Lebanon',
						value: 'countryLB',
					},
					{
						name: 'countryLS - Lesotho',
						value: 'countryLS',
					},
					{
						name: 'countryLR - Liberia',
						value: 'countryLR',
					},
					{
						name: 'countryLY - Libya',
						value: 'countryLY',
					},
					{
						name: 'countryLI - Liechtenstein',
						value: 'countryLI',
					},
					{
						name: 'countryLT - Lithuania',
						value: 'countryLT',
					},
					{
						name: 'countryLU - Luxembourg',
						value: 'countryLU',
					},
					{
						name: 'countryMO - Macao',
						value: 'countryMO',
					},
					{
						name: 'countryMG - Madagascar',
						value: 'countryMG',
					},
					{
						name: 'countryMW - Malawi',
						value: 'countryMW',
					},
					{
						name: 'countryMY - Malaysia',
						value: 'countryMY',
					},
					{
						name: 'countryMV - Maldives',
						value: 'countryMV',
					},
					{
						name: 'countryML - Mali',
						value: 'countryML',
					},
					{
						name: 'countryMT - Malta',
						value: 'countryMT',
					},
					{
						name: 'countryMH - Marshall Islands',
						value: 'countryMH',
					},
					{
						name: 'countryMQ - Martinique',
						value: 'countryMQ',
					},
					{
						name: 'countryMR - Mauritania',
						value: 'countryMR',
					},
					{
						name: 'countryMU - Mauritius',
						value: 'countryMU',
					},
					{
						name: 'countryYT - Mayotte',
						value: 'countryYT',
					},
					{
						name: 'countryMX - Mexico',
						value: 'countryMX',
					},
					{
						name: 'countryFM - Micronesia',
						value: 'countryFM',
					},
					{
						name: 'countryMD - Moldova',
						value: 'countryMD',
					},
					{
						name: 'countryMC - Monaco',
						value: 'countryMC',
					},
					{
						name: 'countryMN - Mongolia',
						value: 'countryMN',
					},
					{
						name: 'countryMS - Montserrat',
						value: 'countryMS',
					},
					{
						name: 'countryMA - Morocco',
						value: 'countryMA',
					},
					{
						name: 'countryMZ - Mozambique',
						value: 'countryMZ',
					},
					{
						name: 'countryMM - Myanmar',
						value: 'countryMM',
					},
					{
						name: 'countryNA - Namibia',
						value: 'countryNA',
					},
					{
						name: 'countryNR - Nauru',
						value: 'countryNR',
					},
					{
						name: 'countryNP - Nepal',
						value: 'countryNP',
					},
					{
						name: 'countryNL - Netherlands',
						value: 'countryNL',
					},
					{
						name: 'countryNC - New Caledonia',
						value: 'countryNC',
					},
					{
						name: 'countryNZ - New Zealand',
						value: 'countryNZ',
					},
					{
						name: 'countryNI - Nicaragua',
						value: 'countryNI',
					},
					{
						name: 'countryNE - Niger',
						value: 'countryNE',
					},
					{
						name: 'countryNG - Nigeria',
						value: 'countryNG',
					},
					{
						name: 'countryNU - Niue',
						value: 'countryNU',
					},
					{
						name: 'countryNF - Norfolk Island',
						value: 'countryNF',
					},
					{
						name: 'countryKP - North Korea',
						value: 'countryKP',
					},
					{
						name: 'countryMK - North Macedonia',
						value: 'countryMK',
					},
					{
						name: 'countryMP - Northern Mariana Islands',
						value: 'countryMP',
					},
					{
						name: 'countryNO - Norway',
						value: 'countryNO',
					},
					{
						name: 'countryOM - Oman',
						value: 'countryOM',
					},
					{
						name: 'countryPK - Pakistan',
						value: 'countryPK',
					},
					{
						name: 'countryPW - Palau',
						value: 'countryPW',
					},
					{
						name: 'countryPS - Palestine',
						value: 'countryPS',
					},
					{
						name: 'countryPA - Panama',
						value: 'countryPA',
					},
					{
						name: 'countryPG - Papua New Guinea',
						value: 'countryPG',
					},
					{
						name: 'countryPY - Paraguay',
						value: 'countryPY',
					},
					{
						name: 'countryPE - Peru',
						value: 'countryPE',
					},
					{
						name: 'countryPH - Philippines',
						value: 'countryPH',
					},
					{
						name: 'countryPN - Pitcairn Islands',
						value: 'countryPN',
					},
					{
						name: 'countryPL - Poland',
						value: 'countryPL',
					},
					{
						name: 'countryPT - Portugal',
						value: 'countryPT',
					},
					{
						name: 'countryPR - Puerto Rico',
						value: 'countryPR',
					},
					{
						name: 'countryQA - Qatar',
						value: 'countryQA',
					},
					{
						name: 'countryRE - Réunion',
						value: 'countryRE',
					},
					{
						name: 'countryRO - Romania',
						value: 'countryRO',
					},
					{
						name: 'countryRU - Russia',
						value: 'countryRU',
					},
					{
						name: 'countryRW - Rwanda',
						value: 'countryRW',
					},
					{
						name: 'countryWS - Samoa',
						value: 'countryWS',
					},
					{
						name: 'countrySM - San Marino',
						value: 'countrySM',
					},
					{
						name: 'countryST - São Tomé and Príncipe',
						value: 'countryST',
					},
					{
						name: 'countrySA - Saudi Arabia',
						value: 'countrySA',
					},
					{
						name: 'countrySN - Senegal',
						value: 'countrySN',
					},
					{
						name: 'countryRS - Serbia',
						value: 'countryRS',
					},
					{
						name: 'countrySC - Seychelles',
						value: 'countrySC',
					},
					{
						name: 'countrySL - Sierra Leone',
						value: 'countrySL',
					},
					{
						name: 'countrySG - Singapore',
						value: 'countrySG',
					},
					{
						name: 'countrySK - Slovakia',
						value: 'countrySK',
					},
					{
						name: 'countrySI - Slovenia',
						value: 'countrySI',
					},
					{
						name: 'countrySB - Solomon Islands',
						value: 'countrySB',
					},
					{
						name: 'countrySO - Somalia',
						value: 'countrySO',
					},
					{
						name: 'countryZA - South Africa',
						value: 'countryZA',
					},
					{
						name: 'countryGS - South Georgia and the South Sandwich Islands',
						value: 'countryGS',
					},
					{
						name: 'countryKR - South Korea',
						value: 'countryKR',
					},
					{
						name: 'countryES - Spain',
						value: 'countryES',
					},
					{
						name: 'countryLK - Sri Lanka',
						value: 'countryLK',
					},
					{
						name: 'countrySH - St. Helena',
						value: 'countrySH',
					},
					{
						name: 'countryKN - St. Kitts and Nevis',
						value: 'countryKN',
					},
					{
						name: 'countryLC - St. Lucia',
						value: 'countryLC',
					},
					{
						name: 'countryPM - St. Pierre and Miquelon',
						value: 'countryPM',
					},
					{
						name: 'countryVC - St. Vincent and the Grenadines',
						value: 'countryVC',
					},
					{
						name: 'countrySD - Sudan',
						value: 'countrySD',
					},
					{
						name: 'countrySR - Suriname',
						value: 'countrySR',
					},
					{
						name: 'countrySJ - Svalbard and Jan Mayen',
						value: 'countrySJ',
					},
					{
						name: 'countrySE - Sweden',
						value: 'countrySE',
					},
					{
						name: 'countryCH - Switzerland',
						value: 'countryCH',
					},
					{
						name: 'countrySY - Syria',
						value: 'countrySY',
					},
					{
						name: 'countryTW - Taiwan',
						value: 'countryTW',
					},
					{
						name: 'countryTJ - Tajikistan',
						value: 'countryTJ',
					},
					{
						name: 'countryTZ - Tanzania',
						value: 'countryTZ',
					},
					{
						name: 'countryTH - Thailand',
						value: 'countryTH',
					},
					{
						name: 'countryTG - Togo',
						value: 'countryTG',
					},
					{
						name: 'countryTK - Tokelau',
						value: 'countryTK',
					},
					{
						name: 'countryTO - Tonga',
						value: 'countryTO',
					},
					{
						name: 'countryTT - Trinidad and Tobago',
						value: 'countryTT',
					},
					{
						name: 'countryTN - Tunisia',
						value: 'countryTN',
					},
					{
						name: 'countryTR - Turkey',
						value: 'countryTR',
					},
					{
						name: 'countryTM - Turkmenistan',
						value: 'countryTM',
					},
					{
						name: 'countryTC - Turks and Caicos Islands',
						value: 'countryTC',
					},
					{
						name: 'countryTV - Tuvalu',
						value: 'countryTV',
					},
					{
						name: 'countryUM - U.S. Outlying Islands',
						value: 'countryUM',
					},
					{
						name: 'countryVI - U.S. Virgin Islands',
						value: 'countryVI',
					},
					{
						name: 'countryUG - Uganda',
						value: 'countryUG',
					},
					{
						name: 'countryUA - Ukraine',
						value: 'countryUA',
					},
					{
						name: 'countryAE - United Arab Emirates',
						value: 'countryAE',
					},
					{
						name: 'countryGB - United Kingdom',
						value: 'countryGB',
					},
					{
						name: 'countryUS - United States',
						value: 'countryUS',
					},
					{
						name: 'countryUY - Uruguay',
						value: 'countryUY',
					},
					{
						name: 'countryUZ - Uzbekistan',
						value: 'countryUZ',
					},
					{
						name: 'countryVU - Vanuatu',
						value: 'countryVU',
					},
					{
						name: 'countryVA - Vatican City',
						value: 'countryVA',
					},
					{
						name: 'countryVE - Venezuela',
						value: 'countryVE',
					},
					{
						name: 'countryVN - Vietnam',
						value: 'countryVN',
					},
					{
						name: 'countryWF - Wallis and Futuna',
						value: 'countryWF',
					},
					{
						name: 'countryEH - Western Sahara',
						value: 'countryEH',
					},
					{
						name: 'countryYE - Yemen',
						value: 'countryYE',
					},
					{
						name: 'countryZM - Zambia',
						value: 'countryZM',
					},
					{
						name: 'countryZW - Zimbabwe',
						value: 'countryZW',
					},
				],
			},
			{
				displayName: 'Result Offset',
				name: 'start',
				type: 'number',
				default: '',
				description: 'This parameter specifies the number of search results to skip and is used for implementing pagination. For example, a value of 0 (default) indicates the first page of results, 10 refers to the second page, and 20 to the third page.\n',
				displayOptions: {
					show: {
						"/operation": [
							'events',
						],
					},
				},
			},
			{
				displayName: 'Topic Token',
				name: 'topicToken',
				type: 'string',
				default: '',
				description: 'Token for a Google News topic such as World, Business, or Technology. Not allowed with `q`, `storyToken`, or `publicationToken`.',
				displayOptions: {
					show: {
						"/operation": [
							'news',
						],
					},
				},
			},
			{
				displayName: 'Section Token',
				name: 'sectionToken',
				type: 'string',
				default: '',
				description: 'Token for a sub-section under a topic, for example Business → Economy. Use only when `topicToken` or `publicationToken` is present.',
				displayOptions: {
					show: {
						"/operation": [
							'news',
						],
					},
				},
			},
			{
				displayName: 'Publication Token',
				name: 'publicationToken',
				type: 'string',
				default: '',
				description: 'Token for a specific publisher such as CNN or BBC. Not allowed with `q`, `storyToken`, or `topicToken`.',
				displayOptions: {
					show: {
						"/operation": [
							'news',
						],
					},
				},
			},
			{
				displayName: 'Story Token',
				name: 'storyToken',
				type: 'string',
				default: '',
				description: 'Token for a single news story cluster (the “Full coverage” page).',
				displayOptions: {
					show: {
						"/operation": [
							'news',
						],
					},
				},
			},
			{
				displayName: 'Sort Order',
				name: 'so',
				type: 'options',
				default: '',
				description: 'Sort order for articles in a story. Use only with storyToken.',
				displayOptions: {
					show: {
						"/operation": [
							'news',
						],
					},
				},
				options: [
					{
						name: '\'0\' - relevance',
						value: '0',
					},
					{
						name: '\'1\' - date',
						value: '1',
					},
				],
			},
			{
				displayName: 'Advanced Search Parameters',
				name: 'tbs',
				type: 'string',
				default: '',
				description: 'This parameter supports various filters that can be combined by separating them with a comma. Here are examples of these filters:\n\n  - Specific Time Range: `cdr:1,cd_min:10/17/2018,cd_max:3/8/2021` - Filter results to show only those within the defined date range.\n  - Sort by Date: `sbd:1` - Results are sorted by date, from the most recent to the oldest.\n  - Sort by Relevance: `sbd:0` - Results are sorted by relevance to the search query.\n  - Sites with Images: `img:1` - Only show results from webpages that contain images.\n\nQuick Date Range (qdr):\n  - `qdr:h` - Show results from the past hour.\n  - `qdr:d` - Limit results to the past day.\n  - `qdr:w` - Filter results from the week.\n  - `qdr:m` - Display results from the past month.\n  - `qdr:y` - Show results from the past year.\n  - `qdr:h10`, `qdr:d10`, `qdr:w10`, `qdr:m10`, `qdr:y10` - Specify a number to show results from the last 10 hours, days, weeks, months, or years respectively.\n\nThese filters enhance the control over search results, allowing for precise retrieval of information based on specific criteria.\n',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
							'serp_light',
							'shopping',
						],
					},
				},
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
							'serp_light',
						],
					},
				},
				options: [
					{
						name: 'active',
						value: 'active',
					},
					{
						name: 'off',
						value: 'off',
					},
				],
			},
			{
				displayName: 'Results Filtering',
				name: 'filter',
				type: 'number',
				default: '',
				description: 'Defines whether to enable or disable the filters for \'Similar Results\' and \'Omitted Results\'. Set to 1 (default) to enable these filters, or 0 to disable them.\n',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
							'serp_light',
						],
					},
				},
			},
			{
				displayName: 'Auto-corrected Results',
				name: 'nfpr',
				type: 'number',
				default: '',
				description: 'Controls if auto-corrected results are shown. 0 includes them (default), 1 shows only the original query. Google may still return auto-corrected results if no others are available.\n',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
			},
			{
				displayName: 'Search Filter ID',
				name: 'shoprs',
				type: 'string',
				default: '',
				description: 'Specifies the helper ID for applying search filters. Must be used with the updated `q` parameter, which includes the selected filter (e.g., Coffee sale).\n\nTo apply filters, use the `hasdata_link` from `filters[index].options[index]` in the JSON. Apply multiple filters by following each `hasdata_link` one by one.\n\nTo remove a filter, follow its specific `hasdata_link`.\n',
				displayOptions: {
					show: {
						"/operation": [
							'shopping',
						],
					},
				},
			},
			{
				displayName: 'Page Number',
				name: 'page',
				type: 'number',
				default: '',
				description: 'Page number for paginated results, where 0 is the first page.',
				displayOptions: {
					show: {
						"/operation": [
							'short_videos',
						],
					},
				},
			},
			{
				displayName: 'Filtering',
				name: 'htichips',
				type: 'string',
				default: '',
				description: 'Filter parameter for refining event search results. Supports various filters for events. Multiple filters can be passed using a comma. The available filters are:\n\n- `date:today`: Today\'s Events\n- `date:tomorrow`: Tomorrow\'s Events\n- `date:week`: This Week\'s Events\n- `date:weekend`: This Weekend\'s Events\n- `date:next_week`: Next Week\'s Events\n- `date:month`: This Month\'s Events\n- `date:next_month`: Next Month\'s Events\n- `event_type:Virtual-Event`: Online Events\n\nFor example, to filter for today\'s online events, use: `event_type:Virtual-Event,date:today`.\n',
				displayOptions: {
					show: {
						"/operation": [
							'events',
						],
					},
				},
			},
			{
				displayName: 'Result Offset',
				name: 'start',
				type: 'number',
				default: '',
				description: 'This parameter specifies the number of search results to skip and is used for implementing pagination. For example, a value of 0 (default) indicates the first page of results, 10 refers to the second page, and 20 to the third page.\n\nFor Google Local Results, the start value must be in multiples of 20, such as 20 for the second page, 40 for the third page, etc.\n',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
							'serp_light',
						],
					},
				},
			},
			{
				displayName: 'Number of Results',
				name: 'num',
				type: 'number',
				default: '',
				description: 'Number of results per page, ranging from 10 to 100.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
							'serp_light',
						],
					},
				},
			},
			{
				displayName: 'Result Offset',
				name: 'start',
				type: 'number',
				default: '',
				description: 'This parameter specifies the number of search results to skip and is used for implementing pagination. For example, a value of 0 (default) indicates the first page of results, 40 refers to the second page, and 80 to the third page.\n',
				displayOptions: {
					show: {
						"/operation": [
							'shopping',
						],
					},
				},
			},
			{
				displayName: 'Search Type',
				name: 'tbm',
				type: 'options',
				default: '',
				description: 'Specify the type of search.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
				options: [
					{
						name: 'isch - Google Images',
						value: 'isch',
					},
					{
						name: 'vid - Google Videos',
						value: 'vid',
					},
					{
						name: 'nws - Google News',
						value: 'nws',
					},
					{
						name: 'shop - Google Shopping',
						value: 'shop',
					},
					{
						name: 'lcl - Google Local',
						value: 'lcl',
					},
				],
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
							'shopping',
							'short_videos',
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
			{
				displayName: 'Google Place ID',
				name: 'ludocid',
				type: 'string',
				default: '',
				description: 'The Google Place ID for a specific location.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
			},
			{
				displayName: 'Additional Google Place ID',
				name: 'lsig',
				type: 'string',
				default: '',
				description: 'Additional Google Place ID.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
			},
			{
				displayName: 'Google Knowledge Graph ID',
				name: 'kgmid',
				type: 'string',
				default: '',
				description: 'Google Knowledge Graph ID.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
			},
			{
				displayName: 'Google Cached Search Parameters ID',
				name: 'si',
				type: 'string',
				default: '',
				description: 'Google Cached Search Parameters ID.',
				displayOptions: {
					show: {
						"/operation": [
							'serp',
						],
					},
				},
			},
		],
	},
];
