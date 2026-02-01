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

export const googleTravelOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['google_travel'],
			},
		},
		options: [
			{
				name: 'Get Google Flights Results',
				value: 'flights',
				description: 'Retrieves structured flight results from Google\'s flight search based on the provided parameters. Supports multiple flight types, advanced filters, and localization settings.\n',
				action: 'Get Google Flights Results',
			},
		],
		default: 'flights',
	},
];

export const googleTravelFields: INodeProperties[] = [
	{
		displayName: 'Departure airport code / location kgmid',
		name: 'departureId',
		type: 'string',
		default: '',
		description: 'Specifies the departure airport code (IATA) or location kgmid.\n\n  - **IATA Code**: A 3-letter uppercase code (e.g., SFO for San Francisco, LHR for London Heathrow). Search on [IATA](https://www.iata.org/en/publications/directories/code-search).\n  - **Location kgmid**: A string starting with `/m/`, found in Wikidata under "Freebase ID" (e.g., `/m/02_286` for New York, NY).\n\nMultiple values can be separated by commas (e.g., `JFK,LGA,/m/0hptm`).\n',
		displayOptions: {
			show: {
				resource: [
					'google_travel',
				],
				operation: [
					'flights',
				],
			},
		},
	},
	{
		displayName: 'Arrival airport code / location kgmid',
		name: 'arrivalId',
		type: 'string',
		default: '',
		description: 'Specifies the arrival airport code (IATA) or location kgmid.\n\n  - **IATA Code**: A 3-letter uppercase code (e.g., `SFO` for San Francisco, `LHR` for London Heathrow). Search on [IATA](https://www.iata.org/en/publications/directories/code-search).\n  - **Location kgmid**: A string starting with `/m/`, found in Wikidata under "Freebase ID" (e.g., `/m/02_286` for New York, NY).\n\nMultiple values can be separated by commas (e.g., `JFK,LGA,/m/0hptm`).\n',
		displayOptions: {
			show: {
				resource: [
					'google_travel',
				],
				operation: [
					'flights',
				],
			},
		},
	},
	{
		displayName: 'Outbound Date',
		name: 'outboundDate',
		type: 'string',
		default: '',
		description: 'The outbound travel date in \'yyyy-MM-dd\' format.\n',
		displayOptions: {
			show: {
				resource: [
					'google_travel',
				],
				operation: [
					'flights',
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
					'google_travel',
				],
				operation: [
					'flights',
				],
			},
		},
		options: [
			{
				displayName: 'Return Date',
				name: 'returnDate',
				type: 'string',
				default: '',
				description: 'The return travel date in \'yyyy-MM-dd\' format. Required when **type** is `roundTrip`.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Flight Type',
				name: 'type',
				type: 'options',
				default: '',
				description: 'Specifies the type of flight. Options:\n\n  - `roundTrip` (default)\n  - `oneWay`\n  - `multiCity` (requires `multiCityJson` for flight details)\n\nFor round trips, retrieve return flight details with a separate request using `departureToken`.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
				options: [
					{
						name: 'roundTrip',
						value: 'roundTrip',
					},
					{
						name: 'oneWay',
						value: 'oneWay',
					},
					{
						name: 'multiCity',
						value: 'multiCity',
					},
				],
			},
			{
				displayName: 'Multi-city JSON',
				name: 'multiCityJson',
				type: 'string',
				default: '',
				description: 'This parameter specifies flight details for multi-city trips. It is a JSON string containing multiple flight objects. Each object must include the following fields:\n\n- **departureId** – The departure airport code or location KGMID. Uses the same format as the main `departureId` parameter.\n- **arrivalId** – The arrival airport code or location KGMID. Uses the same format as the main `arrivalId` parameter.\n- **date** – The flight date. Uses the same format as the `outboundDate` parameter.\n- **times** *(optional)* – The time range for the flight. Uses the same format as the `outboundTimes` parameter.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
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
							'flights',
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
				displayName: 'Language',
				name: 'hl',
				type: 'options',
				default: 'en',
				description: 'The two-letter language code for the language you want to use for the search.',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
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
				displayName: 'Currency',
				name: 'currency',
				type: 'options',
				default: 'USD',
				description: 'Parameter defines the currency of the returned prices',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
				options: [
					{
						name: 'ALL - Albanian Lek',
						value: 'ALL',
					},
					{
						name: 'DZD - Algerian Dinar',
						value: 'DZD',
					},
					{
						name: 'ARS - Argentine Peso',
						value: 'ARS',
					},
					{
						name: 'AMD - Armenian Dram',
						value: 'AMD',
					},
					{
						name: 'AWG - Aruban Florin',
						value: 'AWG',
					},
					{
						name: 'AUD - Australian Dollar',
						value: 'AUD',
					},
					{
						name: 'AZN - Azerbaijani Manat',
						value: 'AZN',
					},
					{
						name: 'BSD - Bahamian Dollar',
						value: 'BSD',
					},
					{
						name: 'BHD - Bahraini Dinar',
						value: 'BHD',
					},
					{
						name: 'BYN - Belarusian Ruble',
						value: 'BYN',
					},
					{
						name: 'BMD - Bermudan Dollar',
						value: 'BMD',
					},
					{
						name: 'BAM - Bosnia-Herzegovina Convertible Mark',
						value: 'BAM',
					},
					{
						name: 'BRL - Brazilian Real',
						value: 'BRL',
					},
					{
						name: 'GBP - British Pound',
						value: 'GBP',
					},
					{
						name: 'BGN - Bulgarian Lev',
						value: 'BGN',
					},
					{
						name: 'XPF - CFP Franc',
						value: 'XPF',
					},
					{
						name: 'CAD - Canadian Dollar',
						value: 'CAD',
					},
					{
						name: 'CLP - Chilean Peso',
						value: 'CLP',
					},
					{
						name: 'CNY - Chinese Yuan',
						value: 'CNY',
					},
					{
						name: 'COP - Colombian Peso',
						value: 'COP',
					},
					{
						name: 'CRC - Costa Rican Colón',
						value: 'CRC',
					},
					{
						name: 'CUP - Cuban Peso',
						value: 'CUP',
					},
					{
						name: 'CZK - Czech Koruna',
						value: 'CZK',
					},
					{
						name: 'DKK - Danish Krone',
						value: 'DKK',
					},
					{
						name: 'DOP - Dominican Peso',
						value: 'DOP',
					},
					{
						name: 'EGP - Egyptian Pound',
						value: 'EGP',
					},
					{
						name: 'EUR - Euro',
						value: 'EUR',
					},
					{
						name: 'GEL - Georgian Lari',
						value: 'GEL',
					},
					{
						name: 'HKD - Hong Kong Dollar',
						value: 'HKD',
					},
					{
						name: 'HUF - Hungarian Forint',
						value: 'HUF',
					},
					{
						name: 'ISK - Icelandic Króna',
						value: 'ISK',
					},
					{
						name: 'INR - Indian Rupee',
						value: 'INR',
					},
					{
						name: 'IDR - Indonesian Rupiah',
						value: 'IDR',
					},
					{
						name: 'IRR - Iranian Rial',
						value: 'IRR',
					},
					{
						name: 'ILS - Israeli New Shekel',
						value: 'ILS',
					},
					{
						name: 'JMD - Jamaican Dollar',
						value: 'JMD',
					},
					{
						name: 'JPY - Japanese Yen',
						value: 'JPY',
					},
					{
						name: 'JOD - Jordanian Dinar',
						value: 'JOD',
					},
					{
						name: 'KZT - Kazakhstani Tenge',
						value: 'KZT',
					},
					{
						name: 'KWD - Kuwaiti Dinar',
						value: 'KWD',
					},
					{
						name: 'LBP - Lebanese Pound',
						value: 'LBP',
					},
					{
						name: 'MKD - Macedonian Denar',
						value: 'MKD',
					},
					{
						name: 'MYR - Malaysian Ringgit',
						value: 'MYR',
					},
					{
						name: 'MXN - Mexican Peso',
						value: 'MXN',
					},
					{
						name: 'MDL - Moldovan Leu',
						value: 'MDL',
					},
					{
						name: 'MAD - Moroccan Dirham',
						value: 'MAD',
					},
					{
						name: 'TWD - New Taiwan Dollar',
						value: 'TWD',
					},
					{
						name: 'NZD - New Zealand Dollar',
						value: 'NZD',
					},
					{
						name: 'NOK - Norwegian Krone',
						value: 'NOK',
					},
					{
						name: 'OMR - Omani Rial',
						value: 'OMR',
					},
					{
						name: 'PKR - Pakistani Rupee',
						value: 'PKR',
					},
					{
						name: 'PAB - Panamanian Balboa',
						value: 'PAB',
					},
					{
						name: 'PEN - Peruvian Sol',
						value: 'PEN',
					},
					{
						name: 'PHP - Philippine Peso',
						value: 'PHP',
					},
					{
						name: 'PLN - Polish Zloty',
						value: 'PLN',
					},
					{
						name: 'QAR - Qatari Riyal',
						value: 'QAR',
					},
					{
						name: 'RON - Romanian Leu',
						value: 'RON',
					},
					{
						name: 'RUB - Russian Ruble',
						value: 'RUB',
					},
					{
						name: 'SAR - Saudi Riyal',
						value: 'SAR',
					},
					{
						name: 'RSD - Serbian Dinar',
						value: 'RSD',
					},
					{
						name: 'SGD - Singapore Dollar',
						value: 'SGD',
					},
					{
						name: 'ZAR - South African Rand',
						value: 'ZAR',
					},
					{
						name: 'KRW - South Korean Won',
						value: 'KRW',
					},
					{
						name: 'SEK - Swedish Krona',
						value: 'SEK',
					},
					{
						name: 'CHF - Swiss Franc',
						value: 'CHF',
					},
					{
						name: 'THB - Thai Baht',
						value: 'THB',
					},
					{
						name: 'TRY - Turkish Lira',
						value: 'TRY',
					},
					{
						name: 'USD - US Dollar',
						value: 'USD',
					},
					{
						name: 'UAH - Ukrainian Hryvnia',
						value: 'UAH',
					},
					{
						name: 'VND - Vietnamese Dong',
						value: 'VND',
					},
					{
						name: 'AED - United Arab Emirates Dirham',
						value: 'AED',
					},
				],
			},
			{
				displayName: 'Travel Class',
				name: 'travelClass',
				type: 'options',
				default: '',
				description: 'The travel class for the flight (Economy, Premium Economy, Business, or First).\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
				options: [
					{
						name: 'economy',
						value: 'economy',
					},
					{
						name: 'premiumEconomy',
						value: 'premiumEconomy',
					},
					{
						name: 'business',
						value: 'business',
					},
					{
						name: 'first',
						value: 'first',
					},
				],
			},
			{
				displayName: 'Show Hidden Fares',
				name: 'showHidden',
				type: 'boolean',
				default: false,
				description: 'Indicates whether to include hidden options in the results.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Adults',
				name: 'adults',
				type: 'number',
				default: '',
				description: 'Number of adult passengers (>= 1 if specified).\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Children',
				name: 'children',
				type: 'number',
				default: '',
				description: 'Number of child passengers.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Infants in Seat',
				name: 'infantsInSeat',
				type: 'number',
				default: '',
				description: 'Number of infants occupying seats.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Infants on Lap',
				name: 'infantsOnLap',
				type: 'number',
				default: '',
				description: 'Number of infants sitting on an adult\'s lap.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				type: 'options',
				default: '',
				description: 'Sort the flight results based on price, departure time, arrival time, etc.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
				options: [
					{
						name: 'topFlights',
						value: 'topFlights',
					},
					{
						name: 'price',
						value: 'price',
					},
					{
						name: 'departureTime',
						value: 'departureTime',
					},
					{
						name: 'arrivalTime',
						value: 'arrivalTime',
					},
					{
						name: 'duration',
						value: 'duration',
					},
					{
						name: 'emissions',
						value: 'emissions',
					},
				],
			},
			{
				displayName: 'Stops',
				name: 'stops',
				type: 'options',
				default: '',
				description: 'Restrict the number of stops (layovers) in the flight itinerary.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
				options: [
					{
						name: 'nonStop',
						value: 'nonStop',
					},
					{
						name: 'oneStopOrFewer',
						value: 'oneStopOrFewer',
					},
					{
						name: 'twoStopsOrFewer',
						value: 'twoStopsOrFewer',
					},
				],
			},
			{
				displayName: 'Exclude Airlines',
				name: 'excludeAirlines',
				type: 'string',
				default: '',
				description: 'A comma separated list of airline codes to exclude from results. You can search for airline codes on [IATA](https://www.iata.org/en/publications/directories/code-search). For example, `UA` is United Airlines.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Include Airlines',
				name: 'includeAirlines',
				type: 'string',
				default: '',
				description: 'A comma separated list of airline codes to exclusively include in results. You can search for airline codes on [IATA](https://www.iata.org/en/publications/directories/code-search). For example, `UA` is United Airlines.\n\n`excludeAirlines` and `includeAirlines` parameters can\'t be used together.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Number of Bags',
				name: 'bags',
				type: 'number',
				default: '',
				description: 'Number of carry-on bags per passenger.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Maximum Price',
				name: 'maxPrice',
				type: 'number',
				default: '',
				description: 'Maximum price limit for the flight search, in the selected currency.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Outbound Times',
				name: 'outboundTimes',
				type: 'string',
				default: '',
				description: 'Set up to 4 time boundaries (2 for departure, 2 for arrival) to filter flights. Each number represents the start of an hour.\n\nExamples:\n  - `6,20` → 6:00 AM - 9:00 PM departure\n  - `1,15` → 1:00 AM - 4:00 PM departure\n  - `7,18,2,21` → 7:00 AM - 9:00 PM departure, 2:00 AM - 10:00 PM arrival\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Return Times',
				name: 'returnTimes',
				type: 'string',
				default: '',
				description: 'Set up to 4 time boundaries (2 for departure, 2 for arrival) to filter return flights. Each number represents the start of an hour.\n\nExamples:\n  - `6,20` → 6:00 AM - 9:00 PM departure\n  - `1,15` → 1:00 AM - 4:00 PM departure\n  - `7,18,2,21` → 7:00 AM - 9:00 PM departure, 2:00 AM - 10:00 PM arrival\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Fewer Emissions',
				name: 'lessEmissions',
				type: 'boolean',
				default: false,
				description: 'Prefer flight options with lower carbon emissions.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Maximum Layover Duration',
				name: 'layoverDuration',
				type: 'string',
				default: '',
				description: 'Set the maximum layover duration in minutes to filter flights. For example, `120, 360` filters layovers between 2 hours and 6 hours, while `45, 180` allows layovers from 45 minutes to 3 hours.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Include Connections',
				name: 'includeConnections',
				type: 'string',
				default: '',
				description: 'A comma separated list of specific airports to allow as connections.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Exclude Connections',
				name: 'excludeConnections',
				type: 'string',
				default: '',
				description: 'A comma separated list of specific airports to exclude as connections.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Maximum Flight Duration',
				name: 'maxDuration',
				type: 'number',
				default: '',
				description: 'The maximum total flight duration in minutes.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Deep Search',
				name: 'deepSearch',
				type: 'boolean',
				default: false,
				description: 'Enable deep search. Returns the same results as Google Flights in a browser, but takes longer to respond. Default is `false`.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Departure Token',
				name: 'departureToken',
				type: 'string',
				default: '',
				description: 'Used to select a flight and retrieve return flights for a round trip or the next leg of the itinerary for a multi-city trip.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
			{
				displayName: 'Booking Token',
				name: 'bookingToken',
				type: 'string',
				default: '',
				description: 'Used to request booking options for selected flights. This token is found in the flight results and cannot be used with `departureToken`.\n',
				displayOptions: {
					show: {
						"/operation": [
							'flights',
						],
					},
				},
			},
		],
	},
];
