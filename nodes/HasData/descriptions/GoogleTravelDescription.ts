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
						name: 'multiCity',
						value: 'multiCity',
					},
					{
						name: 'oneWay',
						value: 'oneWay',
					},
					{
						name: 'roundTrip',
						value: 'roundTrip',
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
						name: 'ad - Andorra',
						value: 'ad',
					},
					{
						name: 'ae - United Arab Emirates',
						value: 'ae',
					},
					{
						name: 'af - Afghanistan',
						value: 'af',
					},
					{
						name: 'ag - Antigua and Barbuda',
						value: 'ag',
					},
					{
						name: 'ai - Anguilla',
						value: 'ai',
					},
					{
						name: 'al - Albania',
						value: 'al',
					},
					{
						name: 'am - Armenia',
						value: 'am',
					},
					{
						name: 'an - Netherlands Antilles',
						value: 'an',
					},
					{
						name: 'ao - Angola',
						value: 'ao',
					},
					{
						name: 'aq - Antarctica',
						value: 'aq',
					},
					{
						name: 'ar - Argentina',
						value: 'ar',
					},
					{
						name: 'as - American Samoa',
						value: 'as',
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
						name: 'aw - Aruba',
						value: 'aw',
					},
					{
						name: 'az - Azerbaijan',
						value: 'az',
					},
					{
						name: 'ba - Bosnia and Herzegovina',
						value: 'ba',
					},
					{
						name: 'bb - Barbados',
						value: 'bb',
					},
					{
						name: 'bd - Bangladesh',
						value: 'bd',
					},
					{
						name: 'be - Belgium',
						value: 'be',
					},
					{
						name: 'bf - Burkina Faso',
						value: 'bf',
					},
					{
						name: 'bg - Bulgaria',
						value: 'bg',
					},
					{
						name: 'bh - Bahrain',
						value: 'bh',
					},
					{
						name: 'bi - Burundi',
						value: 'bi',
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
						name: 'bn - Brunei Darussalam',
						value: 'bn',
					},
					{
						name: 'bo - Bolivia',
						value: 'bo',
					},
					{
						name: 'br - Brazil',
						value: 'br',
					},
					{
						name: 'bs - Bahamas',
						value: 'bs',
					},
					{
						name: 'bt - Bhutan',
						value: 'bt',
					},
					{
						name: 'bv - Bouvet Island',
						value: 'bv',
					},
					{
						name: 'bw - Botswana',
						value: 'bw',
					},
					{
						name: 'by - Belarus',
						value: 'by',
					},
					{
						name: 'bz - Belize',
						value: 'bz',
					},
					{
						name: 'ca - Canada',
						value: 'ca',
					},
					{
						name: 'cc - Cocos (Keeling) Islands',
						value: 'cc',
					},
					{
						name: 'cd - Congo, the Democratic Republic of the',
						value: 'cd',
					},
					{
						name: 'cf - Central African Republic',
						value: 'cf',
					},
					{
						name: 'cg - Congo',
						value: 'cg',
					},
					{
						name: 'ch - Switzerland',
						value: 'ch',
					},
					{
						name: 'ci - Cote D\'ivoire',
						value: 'ci',
					},
					{
						name: 'ck - Cook Islands',
						value: 'ck',
					},
					{
						name: 'cl - Chile',
						value: 'cl',
					},
					{
						name: 'cm - Cameroon',
						value: 'cm',
					},
					{
						name: 'cn - China',
						value: 'cn',
					},
					{
						name: 'co - Colombia',
						value: 'co',
					},
					{
						name: 'cr - Costa Rica',
						value: 'cr',
					},
					{
						name: 'cu - Cuba',
						value: 'cu',
					},
					{
						name: 'cv - Cape Verde',
						value: 'cv',
					},
					{
						name: 'cx - Christmas Island',
						value: 'cx',
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
						name: 'de - Germany',
						value: 'de',
					},
					{
						name: 'dj - Djibouti',
						value: 'dj',
					},
					{
						name: 'dk - Denmark',
						value: 'dk',
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
						name: 'dz - Algeria',
						value: 'dz',
					},
					{
						name: 'ec - Ecuador',
						value: 'ec',
					},
					{
						name: 'ee - Estonia',
						value: 'ee',
					},
					{
						name: 'eg - Egypt',
						value: 'eg',
					},
					{
						name: 'eh - Western Sahara',
						value: 'eh',
					},
					{
						name: 'er - Eritrea',
						value: 'er',
					},
					{
						name: 'es - Spain',
						value: 'es',
					},
					{
						name: 'et - Ethiopia',
						value: 'et',
					},
					{
						name: 'fi - Finland',
						value: 'fi',
					},
					{
						name: 'fj - Fiji',
						value: 'fj',
					},
					{
						name: 'fk - Falkland Islands (Malvinas)',
						value: 'fk',
					},
					{
						name: 'fm - Micronesia, Federated States of',
						value: 'fm',
					},
					{
						name: 'fo - Faroe Islands',
						value: 'fo',
					},
					{
						name: 'fr - France',
						value: 'fr',
					},
					{
						name: 'ga - Gabon',
						value: 'ga',
					},
					{
						name: 'gb - United Kingdom',
						value: 'gb',
					},
					{
						name: 'gd - Grenada',
						value: 'gd',
					},
					{
						name: 'ge - Georgia',
						value: 'ge',
					},
					{
						name: 'gf - French Guiana',
						value: 'gf',
					},
					{
						name: 'gg - Guernsey',
						value: 'gg',
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
						name: 'gl - Greenland',
						value: 'gl',
					},
					{
						name: 'gm - Gambia',
						value: 'gm',
					},
					{
						name: 'gn - Guinea',
						value: 'gn',
					},
					{
						name: 'gp - Guadeloupe',
						value: 'gp',
					},
					{
						name: 'gq - Equatorial Guinea',
						value: 'gq',
					},
					{
						name: 'gr - Greece',
						value: 'gr',
					},
					{
						name: 'gs - South Georgia and the South Sandwich Islands',
						value: 'gs',
					},
					{
						name: 'gt - Guatemala',
						value: 'gt',
					},
					{
						name: 'gu - Guam',
						value: 'gu',
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
						name: 'hk - Hong Kong',
						value: 'hk',
					},
					{
						name: 'hm - Heard Island and Mcdonald Islands',
						value: 'hm',
					},
					{
						name: 'hn - Honduras',
						value: 'hn',
					},
					{
						name: 'hr - Croatia',
						value: 'hr',
					},
					{
						name: 'ht - Haiti',
						value: 'ht',
					},
					{
						name: 'hu - Hungary',
						value: 'hu',
					},
					{
						name: 'id - Indonesia',
						value: 'id',
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
						name: 'im - Isle of Man',
						value: 'im',
					},
					{
						name: 'in - India',
						value: 'in',
					},
					{
						name: 'io - British Indian Ocean Territory',
						value: 'io',
					},
					{
						name: 'iq - Iraq',
						value: 'iq',
					},
					{
						name: 'ir - Iran, Islamic Republic of',
						value: 'ir',
					},
					{
						name: 'is - Iceland',
						value: 'is',
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
						name: 'jo - Jordan',
						value: 'jo',
					},
					{
						name: 'jp - Japan',
						value: 'jp',
					},
					{
						name: 'ke - Kenya',
						value: 'ke',
					},
					{
						name: 'kg - Kyrgyzstan',
						value: 'kg',
					},
					{
						name: 'kh - Cambodia',
						value: 'kh',
					},
					{
						name: 'ki - Kiribati',
						value: 'ki',
					},
					{
						name: 'km - Comoros',
						value: 'km',
					},
					{
						name: 'kn - Saint Kitts and Nevis',
						value: 'kn',
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
						name: 'ky - Cayman Islands',
						value: 'ky',
					},
					{
						name: 'kz - Kazakhstan',
						value: 'kz',
					},
					{
						name: 'la - Lao People\'s Democratic Republic',
						value: 'la',
					},
					{
						name: 'lb - Lebanon',
						value: 'lb',
					},
					{
						name: 'lc - Saint Lucia',
						value: 'lc',
					},
					{
						name: 'li - Liechtenstein',
						value: 'li',
					},
					{
						name: 'lk - Sri Lanka',
						value: 'lk',
					},
					{
						name: 'lr - Liberia',
						value: 'lr',
					},
					{
						name: 'ls - Lesotho',
						value: 'ls',
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
						name: 'lv - Latvia',
						value: 'lv',
					},
					{
						name: 'ly - Libyan Arab Jamahiriya',
						value: 'ly',
					},
					{
						name: 'ma - Morocco',
						value: 'ma',
					},
					{
						name: 'mc - Monaco',
						value: 'mc',
					},
					{
						name: 'md - Moldova, Republic of',
						value: 'md',
					},
					{
						name: 'me - Montenegro',
						value: 'me',
					},
					{
						name: 'mg - Madagascar',
						value: 'mg',
					},
					{
						name: 'mh - Marshall Islands',
						value: 'mh',
					},
					{
						name: 'mk - Macedonia, the Former Yugoslav Republic of',
						value: 'mk',
					},
					{
						name: 'ml - Mali',
						value: 'ml',
					},
					{
						name: 'mm - Myanmar',
						value: 'mm',
					},
					{
						name: 'mn - Mongolia',
						value: 'mn',
					},
					{
						name: 'mo - Macao',
						value: 'mo',
					},
					{
						name: 'mp - Northern Mariana Islands',
						value: 'mp',
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
						name: 'ms - Montserrat',
						value: 'ms',
					},
					{
						name: 'mt - Malta',
						value: 'mt',
					},
					{
						name: 'mu - Mauritius',
						value: 'mu',
					},
					{
						name: 'mv - Maldives',
						value: 'mv',
					},
					{
						name: 'mw - Malawi',
						value: 'mw',
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
						name: 'mz - Mozambique',
						value: 'mz',
					},
					{
						name: 'na - Namibia',
						value: 'na',
					},
					{
						name: 'nc - New Caledonia',
						value: 'nc',
					},
					{
						name: 'ne - Niger',
						value: 'ne',
					},
					{
						name: 'nf - Norfolk Island',
						value: 'nf',
					},
					{
						name: 'ng - Nigeria',
						value: 'ng',
					},
					{
						name: 'ni - Nicaragua',
						value: 'ni',
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
						name: 'np - Nepal',
						value: 'np',
					},
					{
						name: 'nr - Nauru',
						value: 'nr',
					},
					{
						name: 'nu - Niue',
						value: 'nu',
					},
					{
						name: 'nz - New Zealand',
						value: 'nz',
					},
					{
						name: 'om - Oman',
						value: 'om',
					},
					{
						name: 'pa - Panama',
						value: 'pa',
					},
					{
						name: 'pe - Peru',
						value: 'pe',
					},
					{
						name: 'pf - French Polynesia',
						value: 'pf',
					},
					{
						name: 'pg - Papua New Guinea',
						value: 'pg',
					},
					{
						name: 'ph - Philippines',
						value: 'ph',
					},
					{
						name: 'pk - Pakistan',
						value: 'pk',
					},
					{
						name: 'pl - Poland',
						value: 'pl',
					},
					{
						name: 'pm - Saint Pierre and Miquelon',
						value: 'pm',
					},
					{
						name: 'pn - Pitcairn',
						value: 'pn',
					},
					{
						name: 'pr - Puerto Rico',
						value: 'pr',
					},
					{
						name: 'ps - Palestinian Territory, Occupied',
						value: 'ps',
					},
					{
						name: 'pt - Portugal',
						value: 'pt',
					},
					{
						name: 'pw - Palau',
						value: 'pw',
					},
					{
						name: 'py - Paraguay',
						value: 'py',
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
						name: 'rs - Serbia and Montenegro',
						value: 'rs',
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
						name: 'sa - Saudi Arabia',
						value: 'sa',
					},
					{
						name: 'sb - Solomon Islands',
						value: 'sb',
					},
					{
						name: 'sc - Seychelles',
						value: 'sc',
					},
					{
						name: 'sd - Sudan',
						value: 'sd',
					},
					{
						name: 'se - Sweden',
						value: 'se',
					},
					{
						name: 'sg - Singapore',
						value: 'sg',
					},
					{
						name: 'sh - Saint Helena',
						value: 'sh',
					},
					{
						name: 'si - Slovenia',
						value: 'si',
					},
					{
						name: 'sj - Svalbard and Jan Mayen',
						value: 'sj',
					},
					{
						name: 'sk - Slovakia',
						value: 'sk',
					},
					{
						name: 'sl - Sierra Leone',
						value: 'sl',
					},
					{
						name: 'sm - San Marino',
						value: 'sm',
					},
					{
						name: 'sn - Senegal',
						value: 'sn',
					},
					{
						name: 'so - Somalia',
						value: 'so',
					},
					{
						name: 'sr - Suriname',
						value: 'sr',
					},
					{
						name: 'st - Sao Tome and Principe',
						value: 'st',
					},
					{
						name: 'sv - El Salvador',
						value: 'sv',
					},
					{
						name: 'sy - Syrian Arab Republic',
						value: 'sy',
					},
					{
						name: 'sz - Swaziland',
						value: 'sz',
					},
					{
						name: 'tc - Turks and Caicos Islands',
						value: 'tc',
					},
					{
						name: 'td - Chad',
						value: 'td',
					},
					{
						name: 'tf - French Southern Territories',
						value: 'tf',
					},
					{
						name: 'tg - Togo',
						value: 'tg',
					},
					{
						name: 'th - Thailand',
						value: 'th',
					},
					{
						name: 'tj - Tajikistan',
						value: 'tj',
					},
					{
						name: 'tk - Tokelau',
						value: 'tk',
					},
					{
						name: 'tl - Timor-Leste',
						value: 'tl',
					},
					{
						name: 'tm - Turkmenistan',
						value: 'tm',
					},
					{
						name: 'tn - Tunisia',
						value: 'tn',
					},
					{
						name: 'to - Tonga',
						value: 'to',
					},
					{
						name: 'tr - Turkey',
						value: 'tr',
					},
					{
						name: 'tt - Trinidad and Tobago',
						value: 'tt',
					},
					{
						name: 'tv - Tuvalu',
						value: 'tv',
					},
					{
						name: 'tw - Taiwan, Province of China',
						value: 'tw',
					},
					{
						name: 'tz - Tanzania, United Republic of',
						value: 'tz',
					},
					{
						name: 'ua - Ukraine',
						value: 'ua',
					},
					{
						name: 'ug - Uganda',
						value: 'ug',
					},
					{
						name: 'uk - United Kingdom',
						value: 'uk',
					},
					{
						name: 'um - United States Minor Outlying Islands',
						value: 'um',
					},
					{
						name: 'us - United States',
						value: 'us',
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
						name: 'va - Holy See (Vatican City State)',
						value: 'va',
					},
					{
						name: 'vc - Saint Vincent and the Grenadines',
						value: 'vc',
					},
					{
						name: 've - Venezuela',
						value: 've',
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
						name: 'vn - Viet Nam',
						value: 'vn',
					},
					{
						name: 'vu - Vanuatu',
						value: 'vu',
					},
					{
						name: 'wf - Wallis and Futuna',
						value: 'wf',
					},
					{
						name: 'ws - Samoa',
						value: 'ws',
					},
					{
						name: 'ye - Yemen',
						value: 'ye',
					},
					{
						name: 'yt - Mayotte',
						value: 'yt',
					},
					{
						name: 'za - South Africa',
						value: 'za',
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
						name: 'ach - Luo',
						value: 'ach',
					},
					{
						name: 'af - Afrikaans',
						value: 'af',
					},
					{
						name: 'ak - Akan',
						value: 'ak',
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
						name: 'az - Azerbaijani',
						value: 'az',
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
						name: 'bg - Bulgarian',
						value: 'bg',
					},
					{
						name: 'bh - Bihari',
						value: 'bh',
					},
					{
						name: 'bn - Bengali',
						value: 'bn',
					},
					{
						name: 'br - Breton',
						value: 'br',
					},
					{
						name: 'bs - Bosnian',
						value: 'bs',
					},
					{
						name: 'bt - Bhutanese',
						value: 'bt',
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
						name: 'ckb - Kurdish (Soranî)',
						value: 'ckb',
					},
					{
						name: 'co - Corsican',
						value: 'co',
					},
					{
						name: 'crs - Seychellois Creole',
						value: 'crs',
					},
					{
						name: 'cs - Czech',
						value: 'cs',
					},
					{
						name: 'cy - Welsh',
						value: 'cy',
					},
					{
						name: 'da - Danish',
						value: 'da',
					},
					{
						name: 'de - German',
						value: 'de',
					},
					{
						name: 'ee - Ewe',
						value: 'ee',
					},
					{
						name: 'el - Greek',
						value: 'el',
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
						name: 'es - Spanish',
						value: 'es',
					},
					{
						name: 'es-419 - Spanish (Latin American)',
						value: 'es-419',
					},
					{
						name: 'et - Estonian',
						value: 'et',
					},
					{
						name: 'eu - Basque',
						value: 'eu',
					},
					{
						name: 'fa - Persian',
						value: 'fa',
					},
					{
						name: 'fi - Finnish',
						value: 'fi',
					},
					{
						name: 'fil - Filipino',
						value: 'fil',
					},
					{
						name: 'fo - Faroese',
						value: 'fo',
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
						name: 'ga - Irish',
						value: 'ga',
					},
					{
						name: 'gaa - Ga',
						value: 'gaa',
					},
					{
						name: 'gd - Scots Gaelic',
						value: 'gd',
					},
					{
						name: 'gl - Galician',
						value: 'gl',
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
						name: 'ha - Hausa',
						value: 'ha',
					},
					{
						name: 'haw - Hawaiian',
						value: 'haw',
					},
					{
						name: 'hi - Hindi',
						value: 'hi',
					},
					{
						name: 'hr - Croatian',
						value: 'hr',
					},
					{
						name: 'ht - Haitian Creole',
						value: 'ht',
					},
					{
						name: 'hu - Hungarian',
						value: 'hu',
					},
					{
						name: 'hy - Armenian',
						value: 'hy',
					},
					{
						name: 'ia - Interlingua',
						value: 'ia',
					},
					{
						name: 'id - Indonesian',
						value: 'id',
					},
					{
						name: 'ig - Igbo',
						value: 'ig',
					},
					{
						name: 'is - Icelandic',
						value: 'is',
					},
					{
						name: 'it - Italian',
						value: 'it',
					},
					{
						name: 'iw - Hebrew',
						value: 'iw',
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
						name: 'ka - Georgian',
						value: 'ka',
					},
					{
						name: 'kg - Kongo',
						value: 'kg',
					},
					{
						name: 'kk - Kazakh',
						value: 'kk',
					},
					{
						name: 'kl - Greenlandic',
						value: 'kl',
					},
					{
						name: 'km - Cambodian',
						value: 'km',
					},
					{
						name: 'kn - Kannada',
						value: 'kn',
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
						name: 'ky - Kyrgyz',
						value: 'ky',
					},
					{
						name: 'la - Latin',
						value: 'la',
					},
					{
						name: 'lg - Luganda',
						value: 'lg',
					},
					{
						name: 'ln - Lingala',
						value: 'ln',
					},
					{
						name: 'lo - Laothian',
						value: 'lo',
					},
					{
						name: 'loz - Lozi',
						value: 'loz',
					},
					{
						name: 'lt - Lithuanian',
						value: 'lt',
					},
					{
						name: 'lua - Tshiluba',
						value: 'lua',
					},
					{
						name: 'lv - Latvian',
						value: 'lv',
					},
					{
						name: 'mfe - Mauritian Creole',
						value: 'mfe',
					},
					{
						name: 'mg - Malagasy',
						value: 'mg',
					},
					{
						name: 'mi - Maori',
						value: 'mi',
					},
					{
						name: 'mk - Macedonian',
						value: 'mk',
					},
					{
						name: 'ml - Malayalam',
						value: 'ml',
					},
					{
						name: 'mn - Mongolian',
						value: 'mn',
					},
					{
						name: 'mo - Moldavian',
						value: 'mo',
					},
					{
						name: 'mr - Marathi',
						value: 'mr',
					},
					{
						name: 'ms - Malay',
						value: 'ms',
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
						name: 'my - Myanmar',
						value: 'my',
					},
					{
						name: 'ne - Nepali',
						value: 'ne',
					},
					{
						name: 'nl - Dutch',
						value: 'nl',
					},
					{
						name: 'nn - Norwegian (Nynorsk)',
						value: 'nn',
					},
					{
						name: 'no - Norwegian',
						value: 'no',
					},
					{
						name: 'nso - Northern Sotho',
						value: 'nso',
					},
					{
						name: 'ny - Chichewa',
						value: 'ny',
					},
					{
						name: 'nyn - Runyakitara',
						value: 'nyn',
					},
					{
						name: 'oc - Occitan',
						value: 'oc',
					},
					{
						name: 'om - Oromo',
						value: 'om',
					},
					{
						name: 'or - Oriya',
						value: 'or',
					},
					{
						name: 'pa - Punjabi',
						value: 'pa',
					},
					{
						name: 'pcm - Nigerian Pidgin',
						value: 'pcm',
					},
					{
						name: 'pl - Polish',
						value: 'pl',
					},
					{
						name: 'ps - Pashto',
						value: 'ps',
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
						name: 'qu - Quechua',
						value: 'qu',
					},
					{
						name: 'rm - Romansh',
						value: 'rm',
					},
					{
						name: 'rn - Kirundi',
						value: 'rn',
					},
					{
						name: 'ro - Romanian',
						value: 'ro',
					},
					{
						name: 'ru - Russian',
						value: 'ru',
					},
					{
						name: 'rw - Kinyarwanda',
						value: 'rw',
					},
					{
						name: 'sd - Sindhi',
						value: 'sd',
					},
					{
						name: 'sh - Serbo-Croatian',
						value: 'sh',
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
						name: 'sn - Shona',
						value: 'sn',
					},
					{
						name: 'so - Somali',
						value: 'so',
					},
					{
						name: 'sq - Albanian',
						value: 'sq',
					},
					{
						name: 'sr - Serbian',
						value: 'sr',
					},
					{
						name: 'sr-me - Montenegrin',
						value: 'sr-me',
					},
					{
						name: 'st - Sesotho',
						value: 'st',
					},
					{
						name: 'su - Sundanese',
						value: 'su',
					},
					{
						name: 'sv - Swedish',
						value: 'sv',
					},
					{
						name: 'sw - Swahili',
						value: 'sw',
					},
					{
						name: 'ta - Tamil',
						value: 'ta',
					},
					{
						name: 'te - Telugu',
						value: 'te',
					},
					{
						name: 'tg - Tajik',
						value: 'tg',
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
						name: 'tk - Turkmen',
						value: 'tk',
					},
					{
						name: 'tl - Filipino',
						value: 'tl',
					},
					{
						name: 'tn - Setswana',
						value: 'tn',
					},
					{
						name: 'to - Tonga',
						value: 'to',
					},
					{
						name: 'tr - Turkish',
						value: 'tr',
					},
					{
						name: 'tt - Tatar',
						value: 'tt',
					},
					{
						name: 'tum - Tumbuka',
						value: 'tum',
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
						name: 'vi - Vietnamese',
						value: 'vi',
					},
					{
						name: 'vu - Vanuatu',
						value: 'vu',
					},
					{
						name: 'wo - Wolof',
						value: 'wo',
					},
					{
						name: 'ws - Samoa',
						value: 'ws',
					},
					{
						name: 'xh - Xhosa',
						value: 'xh',
					},
					{
						name: 'xx-bork - Bork, bork, bork!',
						value: 'xx-bork',
					},
					{
						name: 'xx-elmer - Elmer Fudd',
						value: 'xx-elmer',
					},
					{
						name: 'xx-hacker - Hacker',
						value: 'xx-hacker',
					},
					{
						name: 'xx-klingon - Klingon',
						value: 'xx-klingon',
					},
					{
						name: 'xx-pirate - Pirate',
						value: 'xx-pirate',
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
						name: 'zh-cn - Chinese (Simplified)',
						value: 'zh-cn',
					},
					{
						name: 'zh-hk - Hong Kong (Traditional)',
						value: 'zh-hk',
					},
					{
						name: 'zh-tw - Chinese (Traditional)',
						value: 'zh-tw',
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
						name: 'AED - United Arab Emirates Dirham',
						value: 'AED',
					},
					{
						name: 'ALL - Albanian Lek',
						value: 'ALL',
					},
					{
						name: 'AMD - Armenian Dram',
						value: 'AMD',
					},
					{
						name: 'ARS - Argentine Peso',
						value: 'ARS',
					},
					{
						name: 'AUD - Australian Dollar',
						value: 'AUD',
					},
					{
						name: 'AWG - Aruban Florin',
						value: 'AWG',
					},
					{
						name: 'AZN - Azerbaijani Manat',
						value: 'AZN',
					},
					{
						name: 'BAM - Bosnia-Herzegovina Convertible Mark',
						value: 'BAM',
					},
					{
						name: 'BGN - Bulgarian Lev',
						value: 'BGN',
					},
					{
						name: 'BHD - Bahraini Dinar',
						value: 'BHD',
					},
					{
						name: 'BMD - Bermudan Dollar',
						value: 'BMD',
					},
					{
						name: 'BRL - Brazilian Real',
						value: 'BRL',
					},
					{
						name: 'BSD - Bahamian Dollar',
						value: 'BSD',
					},
					{
						name: 'BYN - Belarusian Ruble',
						value: 'BYN',
					},
					{
						name: 'CAD - Canadian Dollar',
						value: 'CAD',
					},
					{
						name: 'CHF - Swiss Franc',
						value: 'CHF',
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
						name: 'DZD - Algerian Dinar',
						value: 'DZD',
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
						name: 'GBP - British Pound',
						value: 'GBP',
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
						name: 'IDR - Indonesian Rupiah',
						value: 'IDR',
					},
					{
						name: 'ILS - Israeli New Shekel',
						value: 'ILS',
					},
					{
						name: 'INR - Indian Rupee',
						value: 'INR',
					},
					{
						name: 'IRR - Iranian Rial',
						value: 'IRR',
					},
					{
						name: 'ISK - Icelandic Króna',
						value: 'ISK',
					},
					{
						name: 'JMD - Jamaican Dollar',
						value: 'JMD',
					},
					{
						name: 'JOD - Jordanian Dinar',
						value: 'JOD',
					},
					{
						name: 'JPY - Japanese Yen',
						value: 'JPY',
					},
					{
						name: 'KRW - South Korean Won',
						value: 'KRW',
					},
					{
						name: 'KWD - Kuwaiti Dinar',
						value: 'KWD',
					},
					{
						name: 'KZT - Kazakhstani Tenge',
						value: 'KZT',
					},
					{
						name: 'LBP - Lebanese Pound',
						value: 'LBP',
					},
					{
						name: 'MAD - Moroccan Dirham',
						value: 'MAD',
					},
					{
						name: 'MDL - Moldovan Leu',
						value: 'MDL',
					},
					{
						name: 'MKD - Macedonian Denar',
						value: 'MKD',
					},
					{
						name: 'MXN - Mexican Peso',
						value: 'MXN',
					},
					{
						name: 'MYR - Malaysian Ringgit',
						value: 'MYR',
					},
					{
						name: 'NOK - Norwegian Krone',
						value: 'NOK',
					},
					{
						name: 'NZD - New Zealand Dollar',
						value: 'NZD',
					},
					{
						name: 'OMR - Omani Rial',
						value: 'OMR',
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
						name: 'PKR - Pakistani Rupee',
						value: 'PKR',
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
						name: 'RSD - Serbian Dinar',
						value: 'RSD',
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
						name: 'SEK - Swedish Krona',
						value: 'SEK',
					},
					{
						name: 'SGD - Singapore Dollar',
						value: 'SGD',
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
						name: 'TWD - New Taiwan Dollar',
						value: 'TWD',
					},
					{
						name: 'UAH - Ukrainian Hryvnia',
						value: 'UAH',
					},
					{
						name: 'USD - US Dollar',
						value: 'USD',
					},
					{
						name: 'VND - Vietnamese Dong',
						value: 'VND',
					},
					{
						name: 'XPF - CFP Franc',
						value: 'XPF',
					},
					{
						name: 'ZAR - South African Rand',
						value: 'ZAR',
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
						name: 'business',
						value: 'business',
					},
					{
						name: 'economy',
						value: 'economy',
					},
					{
						name: 'first',
						value: 'first',
					},
					{
						name: 'premiumEconomy',
						value: 'premiumEconomy',
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
						name: 'arrivalTime',
						value: 'arrivalTime',
					},
					{
						name: 'departureTime',
						value: 'departureTime',
					},
					{
						name: 'duration',
						value: 'duration',
					},
					{
						name: 'emissions',
						value: 'emissions',
					},
					{
						name: 'price',
						value: 'price',
					},
					{
						name: 'topFlights',
						value: 'topFlights',
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
