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

export const amazonOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['amazon'],
			},
		},
		options: [
			{
				name: 'Get Amazon Product Details',
				value: 'product',
				description: 'Retrieves product details from Amazon based on the specified ASIN and domain.',
				action: 'Get Amazon Product Details',
			},
			{
				name: 'Get Amazon Search Results',
				value: 'search',
				description: 'Retrieves search results from Amazon based on the specified query and domain.',
				action: 'Get Amazon Search Results',
			},
		],
		default: 'product',
	},
];

export const amazonFields: INodeProperties[] = [
	{
		displayName: 'ASIN',
		name: 'asin',
		type: 'string',
		default: '',
		description: 'The Amazon Standard Identification Number (ASIN) of the product.',
		displayOptions: {
			show: {
				resource: [
					'amazon',
				],
				operation: [
					'product',
				],
			},
		},
	},
	{
		displayName: 'Search Query',
		name: 'q',
		type: 'string',
		default: '',
		description: 'The search term for which to get the search results.',
		displayOptions: {
			show: {
				resource: [
					'amazon',
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
					'amazon',
				],
				operation: [
					'product',
					'search',
				],
			},
		},
		options: [
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'options',
				default: 'www.amazon.com',
				description: 'Amazon domain to use. Default is www.amazon.com.',
				displayOptions: {
					show: {
						"/operation": [
							'product',
							'search',
						],
					},
				},
				options: [
					{
						name: 'www.amazon.ae',
						value: 'www.amazon.ae',
					},
					{
						name: 'www.amazon.ca',
						value: 'www.amazon.ca',
					},
					{
						name: 'www.amazon.co.jp',
						value: 'www.amazon.co.jp',
					},
					{
						name: 'www.amazon.co.uk',
						value: 'www.amazon.co.uk',
					},
					{
						name: 'www.amazon.co.za',
						value: 'www.amazon.co.za',
					},
					{
						name: 'www.amazon.com',
						value: 'www.amazon.com',
					},
					{
						name: 'www.amazon.com.au',
						value: 'www.amazon.com.au',
					},
					{
						name: 'www.amazon.com.be',
						value: 'www.amazon.com.be',
					},
					{
						name: 'www.amazon.com.br',
						value: 'www.amazon.com.br',
					},
					{
						name: 'www.amazon.com.mx',
						value: 'www.amazon.com.mx',
					},
					{
						name: 'www.amazon.com.tr',
						value: 'www.amazon.com.tr',
					},
					{
						name: 'www.amazon.de',
						value: 'www.amazon.de',
					},
					{
						name: 'www.amazon.eg',
						value: 'www.amazon.eg',
					},
					{
						name: 'www.amazon.es',
						value: 'www.amazon.es',
					},
					{
						name: 'www.amazon.fr',
						value: 'www.amazon.fr',
					},
					{
						name: 'www.amazon.ie',
						value: 'www.amazon.ie',
					},
					{
						name: 'www.amazon.in',
						value: 'www.amazon.in',
					},
					{
						name: 'www.amazon.it',
						value: 'www.amazon.it',
					},
					{
						name: 'www.amazon.nl',
						value: 'www.amazon.nl',
					},
					{
						name: 'www.amazon.pl',
						value: 'www.amazon.pl',
					},
					{
						name: 'www.amazon.sa',
						value: 'www.amazon.sa',
					},
					{
						name: 'www.amazon.se',
						value: 'www.amazon.se',
					},
					{
						name: 'www.amazon.sg',
						value: 'www.amazon.sg',
					},
				],
			},
			{
				displayName: 'Page Number',
				name: 'page',
				type: 'number',
				default: 1,
				description: 'Page number for pagination (e.g., 1 for the first page, 2 for the second page, etc.).',
				displayOptions: {
					show: {
						"/operation": [
							'search',
						],
					},
				},
			},
			{
				displayName: 'Delivery ZIP Code',
				name: 'deliveryZip',
				type: 'string',
				default: '',
				description: 'Postal code of the delivery location.',
				displayOptions: {
					show: {
						"/operation": [
							'product',
							'search',
						],
					},
				},
			},
			{
				displayName: 'Shipping Location',
				name: 'shippingLocation',
				type: 'options',
				default: 'en',
				description: 'The two-letter country code to define the country of the delivery address.',
				displayOptions: {
					show: {
						"/operation": [
							'product',
							'search',
						],
					},
				},
				options: [
					{
						name: 'AD - Andorra',
						value: 'AD',
					},
					{
						name: 'AE - United Arab Emirates',
						value: 'AE',
					},
					{
						name: 'AF - Afghanistan',
						value: 'AF',
					},
					{
						name: 'AG - Antigua and Barbuda',
						value: 'AG',
					},
					{
						name: 'AI - Anguilla',
						value: 'AI',
					},
					{
						name: 'AL - Albania',
						value: 'AL',
					},
					{
						name: 'AM - Armenia',
						value: 'AM',
					},
					{
						name: 'AN - Netherlands Antilles',
						value: 'AN',
					},
					{
						name: 'AO - Angola',
						value: 'AO',
					},
					{
						name: 'AR - Argentina',
						value: 'AR',
					},
					{
						name: 'AS - American Samoa',
						value: 'AS',
					},
					{
						name: 'AT - Austria',
						value: 'AT',
					},
					{
						name: 'AU - Australia',
						value: 'AU',
					},
					{
						name: 'AW - Aruba',
						value: 'AW',
					},
					{
						name: 'AX - Aland Islands',
						value: 'AX',
					},
					{
						name: 'AZ - Azerbaijan',
						value: 'AZ',
					},
					{
						name: 'BA - Bosnia and Herzegovina',
						value: 'BA',
					},
					{
						name: 'BB - Barbados',
						value: 'BB',
					},
					{
						name: 'BD - Bangladesh',
						value: 'BD',
					},
					{
						name: 'BE - Belgium',
						value: 'BE',
					},
					{
						name: 'BF - Burkina Faso',
						value: 'BF',
					},
					{
						name: 'BG - Bulgaria',
						value: 'BG',
					},
					{
						name: 'BH - Bahrain',
						value: 'BH',
					},
					{
						name: 'BI - Burundi',
						value: 'BI',
					},
					{
						name: 'BJ - Benin',
						value: 'BJ',
					},
					{
						name: 'BL - Saint Barthelemy',
						value: 'BL',
					},
					{
						name: 'BM - Bermuda',
						value: 'BM',
					},
					{
						name: 'BN - Brunei Darussalam',
						value: 'BN',
					},
					{
						name: 'BO - Bolivia',
						value: 'BO',
					},
					{
						name: 'BQ - Bonaire Saint Eustatius and Saba',
						value: 'BQ',
					},
					{
						name: 'BR - Brazil',
						value: 'BR',
					},
					{
						name: 'BS - Bahamas The',
						value: 'BS',
					},
					{
						name: 'BT - Bhutan',
						value: 'BT',
					},
					{
						name: 'BV - Bouvet Island',
						value: 'BV',
					},
					{
						name: 'BW - Botswana',
						value: 'BW',
					},
					{
						name: 'BY - Belarus',
						value: 'BY',
					},
					{
						name: 'BZ - Belize',
						value: 'BZ',
					},
					{
						name: 'CA - Canada',
						value: 'CA',
					},
					{
						name: 'CC - Cocos (Keeling) Islands',
						value: 'CC',
					},
					{
						name: 'CD - Congo, The Democratic Republic of',
						value: 'CD',
					},
					{
						name: 'CF - Central African Republic',
						value: 'CF',
					},
					{
						name: 'CG - Congo',
						value: 'CG',
					},
					{
						name: 'CH - Switzerland',
						value: 'CH',
					},
					{
						name: 'CI - "Cote Divoire"',
						value: 'CI',
					},
					{
						name: 'CK - Cook Islands',
						value: 'CK',
					},
					{
						name: 'CL - Chile',
						value: 'CL',
					},
					{
						name: 'CM - Cameroon',
						value: 'CM',
					},
					{
						name: 'CN - China',
						value: 'CN',
					},
					{
						name: 'CO - Colombia',
						value: 'CO',
					},
					{
						name: 'CR - Costa Rica',
						value: 'CR',
					},
					{
						name: 'CV - Cape Verde',
						value: 'CV',
					},
					{
						name: 'CW - Curaçao',
						value: 'CW',
					},
					{
						name: 'CX - Christmas Island',
						value: 'CX',
					},
					{
						name: 'CY - Cyprus',
						value: 'CY',
					},
					{
						name: 'CZ - Czech Republic',
						value: 'CZ',
					},
					{
						name: 'DE - Germany',
						value: 'DE',
					},
					{
						name: 'DJ - Djibouti',
						value: 'DJ',
					},
					{
						name: 'DK - Denmark',
						value: 'DK',
					},
					{
						name: 'DM - Dominica',
						value: 'DM',
					},
					{
						name: 'DO - Dominican Republic',
						value: 'DO',
					},
					{
						name: 'DZ - Algeria',
						value: 'DZ',
					},
					{
						name: 'EC - Ecuador',
						value: 'EC',
					},
					{
						name: 'EE - Estonia',
						value: 'EE',
					},
					{
						name: 'EG - Egypt',
						value: 'EG',
					},
					{
						name: 'EH - Western Sahara',
						value: 'EH',
					},
					{
						name: 'ER - Eritrea',
						value: 'ER',
					},
					{
						name: 'ES - Spain',
						value: 'ES',
					},
					{
						name: 'ET - Ethiopia',
						value: 'ET',
					},
					{
						name: 'FI - Finland',
						value: 'FI',
					},
					{
						name: 'FJ - Fiji',
						value: 'FJ',
					},
					{
						name: 'FK - Falkland Islands (Malvinas)',
						value: 'FK',
					},
					{
						name: 'FM - Micronesia',
						value: 'FM',
					},
					{
						name: 'FO - Faroe Islands',
						value: 'FO',
					},
					{
						name: 'FR - France',
						value: 'FR',
					},
					{
						name: 'GA - Gabon',
						value: 'GA',
					},
					{
						name: 'GB - United Kingdom',
						value: 'GB',
					},
					{
						name: 'GD - Grenada',
						value: 'GD',
					},
					{
						name: 'GE - Georgia',
						value: 'GE',
					},
					{
						name: 'GF - French Guiana',
						value: 'GF',
					},
					{
						name: 'GG - Guernsey',
						value: 'GG',
					},
					{
						name: 'GH - Ghana',
						value: 'GH',
					},
					{
						name: 'GI - Gibraltar',
						value: 'GI',
					},
					{
						name: 'GL - Greenland',
						value: 'GL',
					},
					{
						name: 'GM - Gambia The',
						value: 'GM',
					},
					{
						name: 'GN - Guinea',
						value: 'GN',
					},
					{
						name: 'GP - Guadeloupe',
						value: 'GP',
					},
					{
						name: 'GQ - Equatorial Guinea',
						value: 'GQ',
					},
					{
						name: 'GR - Greece',
						value: 'GR',
					},
					{
						name: 'GT - Guatemala',
						value: 'GT',
					},
					{
						name: 'GW - Guinea-Bissau',
						value: 'GW',
					},
					{
						name: 'GY - Guyana',
						value: 'GY',
					},
					{
						name: 'HK - Hong Kong',
						value: 'HK',
					},
					{
						name: 'HM - Heard Island and the McDonald Islands',
						value: 'HM',
					},
					{
						name: 'HN - Honduras',
						value: 'HN',
					},
					{
						name: 'HR - Croatia',
						value: 'HR',
					},
					{
						name: 'HT - Haiti',
						value: 'HT',
					},
					{
						name: 'HU - Hungary',
						value: 'HU',
					},
					{
						name: 'ID - Indonesia',
						value: 'ID',
					},
					{
						name: 'IE - Ireland',
						value: 'IE',
					},
					{
						name: 'IL - Israel',
						value: 'IL',
					},
					{
						name: 'IM - Isle of Man',
						value: 'IM',
					},
					{
						name: 'IN - India',
						value: 'IN',
					},
					{
						name: 'IO - British Indian Ocean Territory',
						value: 'IO',
					},
					{
						name: 'IQ - Iraq',
						value: 'IQ',
					},
					{
						name: 'IS - Iceland',
						value: 'IS',
					},
					{
						name: 'IT - Italy',
						value: 'IT',
					},
					{
						name: 'JE - Jersey',
						value: 'JE',
					},
					{
						name: 'JM - Jamaica',
						value: 'JM',
					},
					{
						name: 'JO - Jordan',
						value: 'JO',
					},
					{
						name: 'JP - Japan',
						value: 'JP',
					},
					{
						name: 'KE - Kenya',
						value: 'KE',
					},
					{
						name: 'KG - Kyrgyzstan',
						value: 'KG',
					},
					{
						name: 'KH - Cambodia',
						value: 'KH',
					},
					{
						name: 'KI - Kiribati',
						value: 'KI',
					},
					{
						name: 'KM - Comoros',
						value: 'KM',
					},
					{
						name: 'KN - Saint Kitts and Nevis',
						value: 'KN',
					},
					{
						name: 'KR - Republic of Korea',
						value: 'KR',
					},
					{
						name: 'KW - Kuwait',
						value: 'KW',
					},
					{
						name: 'KY - Cayman Islands',
						value: 'KY',
					},
					{
						name: 'KZ - Kazakhstan',
						value: 'KZ',
					},
					{
						name: 'LA - Lao Peoples Democratic Republic',
						value: 'LA',
					},
					{
						name: 'LB - Lebanon',
						value: 'LB',
					},
					{
						name: 'LC - Saint Lucia',
						value: 'LC',
					},
					{
						name: 'LI - Liechtenstein',
						value: 'LI',
					},
					{
						name: 'LK - Sri Lanka',
						value: 'LK',
					},
					{
						name: 'LR - Liberia',
						value: 'LR',
					},
					{
						name: 'LS - Lesotho',
						value: 'LS',
					},
					{
						name: 'LT - Lithuania',
						value: 'LT',
					},
					{
						name: 'LU - Luxembourg',
						value: 'LU',
					},
					{
						name: 'LV - Latvia',
						value: 'LV',
					},
					{
						name: 'LY - Libya',
						value: 'LY',
					},
					{
						name: 'MA - Morocco',
						value: 'MA',
					},
					{
						name: 'MC - Monaco',
						value: 'MC',
					},
					{
						name: 'MD - Moldova',
						value: 'MD',
					},
					{
						name: 'ME - Montenegro',
						value: 'ME',
					},
					{
						name: 'MF - Saint Martin',
						value: 'MF',
					},
					{
						name: 'MG - Madagascar',
						value: 'MG',
					},
					{
						name: 'MH - Marshall Islands',
						value: 'MH',
					},
					{
						name: 'MK - Macedonia',
						value: 'MK',
					},
					{
						name: 'ML - Mali',
						value: 'ML',
					},
					{
						name: 'MM - Myanmar',
						value: 'MM',
					},
					{
						name: 'MN - Mongolia',
						value: 'MN',
					},
					{
						name: 'MO - Macao',
						value: 'MO',
					},
					{
						name: 'MQ - Martinique',
						value: 'MQ',
					},
					{
						name: 'MR - Mauritania',
						value: 'MR',
					},
					{
						name: 'MS - Montserrat',
						value: 'MS',
					},
					{
						name: 'MT - Malta',
						value: 'MT',
					},
					{
						name: 'MU - Mauritius',
						value: 'MU',
					},
					{
						name: 'MV - Maldives',
						value: 'MV',
					},
					{
						name: 'MW - Malawi',
						value: 'MW',
					},
					{
						name: 'MX - Mexico',
						value: 'MX',
					},
					{
						name: 'MY - Malaysia',
						value: 'MY',
					},
					{
						name: 'MZ - Mozambique',
						value: 'MZ',
					},
					{
						name: 'NA - Namibia',
						value: 'NA',
					},
					{
						name: 'NC - New Caledonia',
						value: 'NC',
					},
					{
						name: 'NE - Niger',
						value: 'NE',
					},
					{
						name: 'NF - Norfolk Island',
						value: 'NF',
					},
					{
						name: 'NG - Nigeria',
						value: 'NG',
					},
					{
						name: 'NI - Nicaragua',
						value: 'NI',
					},
					{
						name: 'NL - Netherlands',
						value: 'NL',
					},
					{
						name: 'NO - Norway',
						value: 'NO',
					},
					{
						name: 'NP - Nepal',
						value: 'NP',
					},
					{
						name: 'NR - Nauru',
						value: 'NR',
					},
					{
						name: 'NU - Niue',
						value: 'NU',
					},
					{
						name: 'NZ - New Zealand',
						value: 'NZ',
					},
					{
						name: 'OM - Oman',
						value: 'OM',
					},
					{
						name: 'PA - Panama',
						value: 'PA',
					},
					{
						name: 'PE - Peru',
						value: 'PE',
					},
					{
						name: 'PF - French Polynesia',
						value: 'PF',
					},
					{
						name: 'PG - Papua New Guinea',
						value: 'PG',
					},
					{
						name: 'PH - Philippines',
						value: 'PH',
					},
					{
						name: 'PK - Pakistan',
						value: 'PK',
					},
					{
						name: 'PL - Poland',
						value: 'PL',
					},
					{
						name: 'PM - Saint Pierre and Miquelon',
						value: 'PM',
					},
					{
						name: 'PN - Pitcairn',
						value: 'PN',
					},
					{
						name: 'PS - Palestinian Territories',
						value: 'PS',
					},
					{
						name: 'PT - Portugal',
						value: 'PT',
					},
					{
						name: 'PW - Palau',
						value: 'PW',
					},
					{
						name: 'PY - Paraguay',
						value: 'PY',
					},
					{
						name: 'QA - Qatar',
						value: 'QA',
					},
					{
						name: 'RE - Reunion',
						value: 'RE',
					},
					{
						name: 'RO - Romania',
						value: 'RO',
					},
					{
						name: 'RS - Serbia',
						value: 'RS',
					},
					{
						name: 'RU - Russian Federation',
						value: 'RU',
					},
					{
						name: 'RW - Rwanda',
						value: 'RW',
					},
					{
						name: 'SA - Saudi Arabia',
						value: 'SA',
					},
					{
						name: 'SB - Solomon Islands',
						value: 'SB',
					},
					{
						name: 'SC - Seychelles',
						value: 'SC',
					},
					{
						name: 'SE - Sweden',
						value: 'SE',
					},
					{
						name: 'SG - Singapore',
						value: 'SG',
					},
					{
						name: 'SH - Saint Helena Ascension and Tristan da Cunha',
						value: 'SH',
					},
					{
						name: 'SI - Slovenia',
						value: 'SI',
					},
					{
						name: 'SK - Slovakia',
						value: 'SK',
					},
					{
						name: 'SL - Sierra Leone',
						value: 'SL',
					},
					{
						name: 'SM - San Marino',
						value: 'SM',
					},
					{
						name: 'SN - Senegal',
						value: 'SN',
					},
					{
						name: 'SO - Somalia',
						value: 'SO',
					},
					{
						name: 'SR - Suriname',
						value: 'SR',
					},
					{
						name: 'ST - Sao Tome and Principe',
						value: 'ST',
					},
					{
						name: 'SV - El Salvador',
						value: 'SV',
					},
					{
						name: 'SX - Sint Maarten',
						value: 'SX',
					},
					{
						name: 'SZ - Swaziland',
						value: 'SZ',
					},
					{
						name: 'TC - Turks and Caicos Islands',
						value: 'TC',
					},
					{
						name: 'TD - Chad',
						value: 'TD',
					},
					{
						name: 'TF - French Southern Territories',
						value: 'TF',
					},
					{
						name: 'TG - Togo',
						value: 'TG',
					},
					{
						name: 'TH - Thailand',
						value: 'TH',
					},
					{
						name: 'TJ - Tajikistan',
						value: 'TJ',
					},
					{
						name: 'TK - Tokelau',
						value: 'TK',
					},
					{
						name: 'TL - Timor-Leste',
						value: 'TL',
					},
					{
						name: 'TM - Turkmenistan',
						value: 'TM',
					},
					{
						name: 'TN - Tunisia',
						value: 'TN',
					},
					{
						name: 'TO - Tonga',
						value: 'TO',
					},
					{
						name: 'TR - Turkey',
						value: 'TR',
					},
					{
						name: 'TT - Trinidad and Tobago',
						value: 'TT',
					},
					{
						name: 'TV - Tuvalu',
						value: 'TV',
					},
					{
						name: 'TW - Taiwan',
						value: 'TW',
					},
					{
						name: 'TZ - Tanzania',
						value: 'TZ',
					},
					{
						name: 'UA - Ukraine',
						value: 'UA',
					},
					{
						name: 'UG - Uganda',
						value: 'UG',
					},
					{
						name: 'US - United States',
						value: 'US',
					},
					{
						name: 'UY - Uruguay',
						value: 'UY',
					},
					{
						name: 'UZ - Uzbekistan',
						value: 'UZ',
					},
					{
						name: 'VA - Holy See',
						value: 'VA',
					},
					{
						name: 'VC - Saint Vincent and the Grenadines',
						value: 'VC',
					},
					{
						name: 'VE - Venezuela',
						value: 'VE',
					},
					{
						name: 'VG - Virgin Islands British',
						value: 'VG',
					},
					{
						name: 'VI - Virgin Islands U.S.',
						value: 'VI',
					},
					{
						name: 'VN - Vietnam',
						value: 'VN',
					},
					{
						name: 'VU - Vanuatu',
						value: 'VU',
					},
					{
						name: 'WF - Wallis and Futuna',
						value: 'WF',
					},
					{
						name: 'WS - Samoa',
						value: 'WS',
					},
					{
						name: 'XK - Kosovo',
						value: 'XK',
					},
					{
						name: 'YE - Yemen',
						value: 'YE',
					},
					{
						name: 'YT - Mayotte',
						value: 'YT',
					},
					{
						name: 'ZA - South Africa',
						value: 'ZA',
					},
					{
						name: 'ZM - Zambia',
						value: 'ZM',
					},
					{
						name: 'ZW - Zimbabwe',
						value: 'ZW',
					},
				],
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				type: 'options',
				default: '',
				description: 'Parameter used for sorting results',
				displayOptions: {
					show: {
						"/operation": [
							'search',
						],
					},
				},
				options: [
					{
						name: 'avgCustomerReview',
						value: 'avgCustomerReview',
					},
					{
						name: 'bestSellers',
						value: 'bestSellers',
					},
					{
						name: 'featured',
						value: 'featured',
					},
					{
						name: 'newestArrivals',
						value: 'newestArrivals',
					},
					{
						name: 'priceHighToLow',
						value: 'priceHighToLow',
					},
					{
						name: 'priceLowToHigh',
						value: 'priceLowToHigh',
					},
				],
			},
		],
	},
];
