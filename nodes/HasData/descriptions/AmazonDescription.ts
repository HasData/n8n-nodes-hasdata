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
        "name": "Get Amazon Product Details",
        "value": "product",
        "description": "Retrieves product details from Amazon based on the specified ASIN and domain.",
        "action": "Get Amazon Product Details"
    },
    {
        "name": "Get Amazon Search Results",
        "value": "search",
        "description": "Retrieves search results from Amazon based on the specified query and domain.",
        "action": "Get Amazon Search Results"
    }
],
		default: 'product',
	},
];

export const amazonFields: INodeProperties[] = [
    {
        "displayName": "ASIN",
        "name": "asin",
        "type": "string",
        "default": "",
        "description": "The Amazon Standard Identification Number (ASIN) of the product.",
        "displayOptions": {
            "show": {
                "resource": [
                    "amazon"
                ],
                "operation": [
                    "product"
                ]
            }
        }
    },
    {
        "displayName": "Search Query",
        "name": "q",
        "type": "string",
        "default": "",
        "description": "The search term for which to get the search results.",
        "displayOptions": {
            "show": {
                "resource": [
                    "amazon"
                ],
                "operation": [
                    "search"
                ]
            }
        }
    },
    {
        "displayName": "Additional Fields",
        "name": "additionalFields",
        "type": "collection",
        "placeholder": "Add Field",
        "default": {},
        "displayOptions": {
            "show": {
                "resource": [
                    "amazon"
                ],
                "operation": [
                    "product",
                    "search"
                ]
            }
        },
        "options": [
            {
                "displayName": "Domain",
                "name": "domain",
                "type": "options",
                "default": "www.amazon.com",
                "description": "Amazon domain to use. Default is www.amazon.com.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "product",
                            "search"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "www.amazon.com",
                        "value": "www.amazon.com"
                    },
                    {
                        "name": "www.amazon.de",
                        "value": "www.amazon.de"
                    },
                    {
                        "name": "www.amazon.co.uk",
                        "value": "www.amazon.co.uk"
                    },
                    {
                        "name": "www.amazon.ae",
                        "value": "www.amazon.ae"
                    },
                    {
                        "name": "www.amazon.com.au",
                        "value": "www.amazon.com.au"
                    },
                    {
                        "name": "www.amazon.com.be",
                        "value": "www.amazon.com.be"
                    },
                    {
                        "name": "www.amazon.com.br",
                        "value": "www.amazon.com.br"
                    },
                    {
                        "name": "www.amazon.ca",
                        "value": "www.amazon.ca"
                    },
                    {
                        "name": "www.amazon.eg",
                        "value": "www.amazon.eg"
                    },
                    {
                        "name": "www.amazon.es",
                        "value": "www.amazon.es"
                    },
                    {
                        "name": "www.amazon.fr",
                        "value": "www.amazon.fr"
                    },
                    {
                        "name": "www.amazon.ie",
                        "value": "www.amazon.ie"
                    },
                    {
                        "name": "www.amazon.in",
                        "value": "www.amazon.in"
                    },
                    {
                        "name": "www.amazon.it",
                        "value": "www.amazon.it"
                    },
                    {
                        "name": "www.amazon.co.jp",
                        "value": "www.amazon.co.jp"
                    },
                    {
                        "name": "www.amazon.com.mx",
                        "value": "www.amazon.com.mx"
                    },
                    {
                        "name": "www.amazon.nl",
                        "value": "www.amazon.nl"
                    },
                    {
                        "name": "www.amazon.pl",
                        "value": "www.amazon.pl"
                    },
                    {
                        "name": "www.amazon.sa",
                        "value": "www.amazon.sa"
                    },
                    {
                        "name": "www.amazon.se",
                        "value": "www.amazon.se"
                    },
                    {
                        "name": "www.amazon.sg",
                        "value": "www.amazon.sg"
                    },
                    {
                        "name": "www.amazon.com.tr",
                        "value": "www.amazon.com.tr"
                    },
                    {
                        "name": "www.amazon.co.za",
                        "value": "www.amazon.co.za"
                    }
                ]
            },
            {
                "displayName": "Page Number",
                "name": "page",
                "type": "number",
                "default": 1,
                "description": "Page number for pagination (e.g., 1 for the first page, 2 for the second page, etc.).",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "search"
                        ]
                    }
                }
            },
            {
                "displayName": "Delivery ZIP Code",
                "name": "deliveryZip",
                "type": "string",
                "default": "",
                "description": "Postal code of the delivery location.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "product",
                            "search"
                        ]
                    }
                }
            },
            {
                "displayName": "Shipping Location",
                "name": "shippingLocation",
                "type": "options",
                "default": "en",
                "description": "The two-letter country code to define the country of the delivery address.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "product",
                            "search"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "AU - Australia",
                        "value": "AU"
                    },
                    {
                        "name": "CA - Canada",
                        "value": "CA"
                    },
                    {
                        "name": "CN - China",
                        "value": "CN"
                    },
                    {
                        "name": "JP - Japan",
                        "value": "JP"
                    },
                    {
                        "name": "MX - Mexico",
                        "value": "MX"
                    },
                    {
                        "name": "SG - Singapore",
                        "value": "SG"
                    },
                    {
                        "name": "GB - United Kingdom",
                        "value": "GB"
                    },
                    {
                        "name": "AF - Afghanistan",
                        "value": "AF"
                    },
                    {
                        "name": "AX - Aland Islands",
                        "value": "AX"
                    },
                    {
                        "name": "AL - Albania",
                        "value": "AL"
                    },
                    {
                        "name": "DZ - Algeria",
                        "value": "DZ"
                    },
                    {
                        "name": "AS - American Samoa",
                        "value": "AS"
                    },
                    {
                        "name": "AD - Andorra",
                        "value": "AD"
                    },
                    {
                        "name": "AO - Angola",
                        "value": "AO"
                    },
                    {
                        "name": "AI - Anguilla",
                        "value": "AI"
                    },
                    {
                        "name": "AG - Antigua and Barbuda",
                        "value": "AG"
                    },
                    {
                        "name": "AR - Argentina",
                        "value": "AR"
                    },
                    {
                        "name": "AM - Armenia",
                        "value": "AM"
                    },
                    {
                        "name": "AW - Aruba",
                        "value": "AW"
                    },
                    {
                        "name": "AT - Austria",
                        "value": "AT"
                    },
                    {
                        "name": "AZ - Azerbaijan",
                        "value": "AZ"
                    },
                    {
                        "name": "BS - Bahamas The",
                        "value": "BS"
                    },
                    {
                        "name": "BH - Bahrain",
                        "value": "BH"
                    },
                    {
                        "name": "BD - Bangladesh",
                        "value": "BD"
                    },
                    {
                        "name": "BB - Barbados",
                        "value": "BB"
                    },
                    {
                        "name": "BY - Belarus",
                        "value": "BY"
                    },
                    {
                        "name": "BE - Belgium",
                        "value": "BE"
                    },
                    {
                        "name": "BZ - Belize",
                        "value": "BZ"
                    },
                    {
                        "name": "BJ - Benin",
                        "value": "BJ"
                    },
                    {
                        "name": "BM - Bermuda",
                        "value": "BM"
                    },
                    {
                        "name": "BT - Bhutan",
                        "value": "BT"
                    },
                    {
                        "name": "BO - Bolivia",
                        "value": "BO"
                    },
                    {
                        "name": "BQ - Bonaire Saint Eustatius and Saba",
                        "value": "BQ"
                    },
                    {
                        "name": "BA - Bosnia and Herzegovina",
                        "value": "BA"
                    },
                    {
                        "name": "BW - Botswana",
                        "value": "BW"
                    },
                    {
                        "name": "BV - Bouvet Island",
                        "value": "BV"
                    },
                    {
                        "name": "BR - Brazil",
                        "value": "BR"
                    },
                    {
                        "name": "IO - British Indian Ocean Territory",
                        "value": "IO"
                    },
                    {
                        "name": "BN - Brunei Darussalam",
                        "value": "BN"
                    },
                    {
                        "name": "BG - Bulgaria",
                        "value": "BG"
                    },
                    {
                        "name": "BF - Burkina Faso",
                        "value": "BF"
                    },
                    {
                        "name": "BI - Burundi",
                        "value": "BI"
                    },
                    {
                        "name": "KH - Cambodia",
                        "value": "KH"
                    },
                    {
                        "name": "CM - Cameroon",
                        "value": "CM"
                    },
                    {
                        "name": "CV - Cape Verde",
                        "value": "CV"
                    },
                    {
                        "name": "KY - Cayman Islands",
                        "value": "KY"
                    },
                    {
                        "name": "CF - Central African Republic",
                        "value": "CF"
                    },
                    {
                        "name": "TD - Chad",
                        "value": "TD"
                    },
                    {
                        "name": "CL - Chile",
                        "value": "CL"
                    },
                    {
                        "name": "CX - Christmas Island",
                        "value": "CX"
                    },
                    {
                        "name": "CC - Cocos (Keeling) Islands",
                        "value": "CC"
                    },
                    {
                        "name": "CO - Colombia",
                        "value": "CO"
                    },
                    {
                        "name": "KM - Comoros",
                        "value": "KM"
                    },
                    {
                        "name": "CG - Congo",
                        "value": "CG"
                    },
                    {
                        "name": "CD - Congo, The Democratic Republic of",
                        "value": "CD"
                    },
                    {
                        "name": "CK - Cook Islands",
                        "value": "CK"
                    },
                    {
                        "name": "CR - Costa Rica",
                        "value": "CR"
                    },
                    {
                        "name": "CI - \"Cote Divoire\"",
                        "value": "CI"
                    },
                    {
                        "name": "HR - Croatia",
                        "value": "HR"
                    },
                    {
                        "name": "CW - Curaçao",
                        "value": "CW"
                    },
                    {
                        "name": "CY - Cyprus",
                        "value": "CY"
                    },
                    {
                        "name": "CZ - Czech Republic",
                        "value": "CZ"
                    },
                    {
                        "name": "DK - Denmark",
                        "value": "DK"
                    },
                    {
                        "name": "DJ - Djibouti",
                        "value": "DJ"
                    },
                    {
                        "name": "DM - Dominica",
                        "value": "DM"
                    },
                    {
                        "name": "DO - Dominican Republic",
                        "value": "DO"
                    },
                    {
                        "name": "EC - Ecuador",
                        "value": "EC"
                    },
                    {
                        "name": "EG - Egypt",
                        "value": "EG"
                    },
                    {
                        "name": "SV - El Salvador",
                        "value": "SV"
                    },
                    {
                        "name": "GQ - Equatorial Guinea",
                        "value": "GQ"
                    },
                    {
                        "name": "ER - Eritrea",
                        "value": "ER"
                    },
                    {
                        "name": "EE - Estonia",
                        "value": "EE"
                    },
                    {
                        "name": "ET - Ethiopia",
                        "value": "ET"
                    },
                    {
                        "name": "FK - Falkland Islands (Malvinas)",
                        "value": "FK"
                    },
                    {
                        "name": "FO - Faroe Islands",
                        "value": "FO"
                    },
                    {
                        "name": "FJ - Fiji",
                        "value": "FJ"
                    },
                    {
                        "name": "FI - Finland",
                        "value": "FI"
                    },
                    {
                        "name": "FR - France",
                        "value": "FR"
                    },
                    {
                        "name": "GF - French Guiana",
                        "value": "GF"
                    },
                    {
                        "name": "PF - French Polynesia",
                        "value": "PF"
                    },
                    {
                        "name": "TF - French Southern Territories",
                        "value": "TF"
                    },
                    {
                        "name": "GA - Gabon",
                        "value": "GA"
                    },
                    {
                        "name": "GM - Gambia The",
                        "value": "GM"
                    },
                    {
                        "name": "GE - Georgia",
                        "value": "GE"
                    },
                    {
                        "name": "DE - Germany",
                        "value": "DE"
                    },
                    {
                        "name": "GH - Ghana",
                        "value": "GH"
                    },
                    {
                        "name": "GI - Gibraltar",
                        "value": "GI"
                    },
                    {
                        "name": "GR - Greece",
                        "value": "GR"
                    },
                    {
                        "name": "GL - Greenland",
                        "value": "GL"
                    },
                    {
                        "name": "GD - Grenada",
                        "value": "GD"
                    },
                    {
                        "name": "GP - Guadeloupe",
                        "value": "GP"
                    },
                    {
                        "name": "GT - Guatemala",
                        "value": "GT"
                    },
                    {
                        "name": "GG - Guernsey",
                        "value": "GG"
                    },
                    {
                        "name": "GN - Guinea",
                        "value": "GN"
                    },
                    {
                        "name": "GW - Guinea-Bissau",
                        "value": "GW"
                    },
                    {
                        "name": "GY - Guyana",
                        "value": "GY"
                    },
                    {
                        "name": "HT - Haiti",
                        "value": "HT"
                    },
                    {
                        "name": "HM - Heard Island and the McDonald Islands",
                        "value": "HM"
                    },
                    {
                        "name": "VA - Holy See",
                        "value": "VA"
                    },
                    {
                        "name": "HN - Honduras",
                        "value": "HN"
                    },
                    {
                        "name": "HK - Hong Kong",
                        "value": "HK"
                    },
                    {
                        "name": "HU - Hungary",
                        "value": "HU"
                    },
                    {
                        "name": "IS - Iceland",
                        "value": "IS"
                    },
                    {
                        "name": "IN - India",
                        "value": "IN"
                    },
                    {
                        "name": "ID - Indonesia",
                        "value": "ID"
                    },
                    {
                        "name": "IQ - Iraq",
                        "value": "IQ"
                    },
                    {
                        "name": "IE - Ireland",
                        "value": "IE"
                    },
                    {
                        "name": "IM - Isle of Man",
                        "value": "IM"
                    },
                    {
                        "name": "IL - Israel",
                        "value": "IL"
                    },
                    {
                        "name": "IT - Italy",
                        "value": "IT"
                    },
                    {
                        "name": "JM - Jamaica",
                        "value": "JM"
                    },
                    {
                        "name": "JE - Jersey",
                        "value": "JE"
                    },
                    {
                        "name": "JO - Jordan",
                        "value": "JO"
                    },
                    {
                        "name": "KZ - Kazakhstan",
                        "value": "KZ"
                    },
                    {
                        "name": "KE - Kenya",
                        "value": "KE"
                    },
                    {
                        "name": "KI - Kiribati",
                        "value": "KI"
                    },
                    {
                        "name": "XK - Kosovo",
                        "value": "XK"
                    },
                    {
                        "name": "KW - Kuwait",
                        "value": "KW"
                    },
                    {
                        "name": "KG - Kyrgyzstan",
                        "value": "KG"
                    },
                    {
                        "name": "LA - Lao Peoples Democratic Republic",
                        "value": "LA"
                    },
                    {
                        "name": "LV - Latvia",
                        "value": "LV"
                    },
                    {
                        "name": "LB - Lebanon",
                        "value": "LB"
                    },
                    {
                        "name": "LS - Lesotho",
                        "value": "LS"
                    },
                    {
                        "name": "LR - Liberia",
                        "value": "LR"
                    },
                    {
                        "name": "LY - Libya",
                        "value": "LY"
                    },
                    {
                        "name": "LI - Liechtenstein",
                        "value": "LI"
                    },
                    {
                        "name": "LT - Lithuania",
                        "value": "LT"
                    },
                    {
                        "name": "LU - Luxembourg",
                        "value": "LU"
                    },
                    {
                        "name": "MO - Macao",
                        "value": "MO"
                    },
                    {
                        "name": "MK - Macedonia",
                        "value": "MK"
                    },
                    {
                        "name": "MG - Madagascar",
                        "value": "MG"
                    },
                    {
                        "name": "MW - Malawi",
                        "value": "MW"
                    },
                    {
                        "name": "MY - Malaysia",
                        "value": "MY"
                    },
                    {
                        "name": "MV - Maldives",
                        "value": "MV"
                    },
                    {
                        "name": "ML - Mali",
                        "value": "ML"
                    },
                    {
                        "name": "MT - Malta",
                        "value": "MT"
                    },
                    {
                        "name": "MH - Marshall Islands",
                        "value": "MH"
                    },
                    {
                        "name": "MQ - Martinique",
                        "value": "MQ"
                    },
                    {
                        "name": "MR - Mauritania",
                        "value": "MR"
                    },
                    {
                        "name": "MU - Mauritius",
                        "value": "MU"
                    },
                    {
                        "name": "YT - Mayotte",
                        "value": "YT"
                    },
                    {
                        "name": "FM - Micronesia",
                        "value": "FM"
                    },
                    {
                        "name": "MD - Moldova",
                        "value": "MD"
                    },
                    {
                        "name": "MC - Monaco",
                        "value": "MC"
                    },
                    {
                        "name": "MN - Mongolia",
                        "value": "MN"
                    },
                    {
                        "name": "ME - Montenegro",
                        "value": "ME"
                    },
                    {
                        "name": "MS - Montserrat",
                        "value": "MS"
                    },
                    {
                        "name": "MA - Morocco",
                        "value": "MA"
                    },
                    {
                        "name": "MZ - Mozambique",
                        "value": "MZ"
                    },
                    {
                        "name": "MM - Myanmar",
                        "value": "MM"
                    },
                    {
                        "name": "NA - Namibia",
                        "value": "NA"
                    },
                    {
                        "name": "NR - Nauru",
                        "value": "NR"
                    },
                    {
                        "name": "NP - Nepal",
                        "value": "NP"
                    },
                    {
                        "name": "NL - Netherlands",
                        "value": "NL"
                    },
                    {
                        "name": "AN - Netherlands Antilles",
                        "value": "AN"
                    },
                    {
                        "name": "NC - New Caledonia",
                        "value": "NC"
                    },
                    {
                        "name": "NZ - New Zealand",
                        "value": "NZ"
                    },
                    {
                        "name": "NI - Nicaragua",
                        "value": "NI"
                    },
                    {
                        "name": "NE - Niger",
                        "value": "NE"
                    },
                    {
                        "name": "NG - Nigeria",
                        "value": "NG"
                    },
                    {
                        "name": "NU - Niue",
                        "value": "NU"
                    },
                    {
                        "name": "NF - Norfolk Island",
                        "value": "NF"
                    },
                    {
                        "name": "NO - Norway",
                        "value": "NO"
                    },
                    {
                        "name": "OM - Oman",
                        "value": "OM"
                    },
                    {
                        "name": "PK - Pakistan",
                        "value": "PK"
                    },
                    {
                        "name": "PW - Palau",
                        "value": "PW"
                    },
                    {
                        "name": "PS - Palestinian Territories",
                        "value": "PS"
                    },
                    {
                        "name": "PA - Panama",
                        "value": "PA"
                    },
                    {
                        "name": "PG - Papua New Guinea",
                        "value": "PG"
                    },
                    {
                        "name": "PY - Paraguay",
                        "value": "PY"
                    },
                    {
                        "name": "PE - Peru",
                        "value": "PE"
                    },
                    {
                        "name": "PH - Philippines",
                        "value": "PH"
                    },
                    {
                        "name": "PN - Pitcairn",
                        "value": "PN"
                    },
                    {
                        "name": "PL - Poland",
                        "value": "PL"
                    },
                    {
                        "name": "PT - Portugal",
                        "value": "PT"
                    },
                    {
                        "name": "QA - Qatar",
                        "value": "QA"
                    },
                    {
                        "name": "KR - Republic of Korea",
                        "value": "KR"
                    },
                    {
                        "name": "RE - Reunion",
                        "value": "RE"
                    },
                    {
                        "name": "RO - Romania",
                        "value": "RO"
                    },
                    {
                        "name": "RU - Russian Federation",
                        "value": "RU"
                    },
                    {
                        "name": "RW - Rwanda",
                        "value": "RW"
                    },
                    {
                        "name": "BL - Saint Barthelemy",
                        "value": "BL"
                    },
                    {
                        "name": "SH - Saint Helena Ascension and Tristan da Cunha",
                        "value": "SH"
                    },
                    {
                        "name": "KN - Saint Kitts and Nevis",
                        "value": "KN"
                    },
                    {
                        "name": "LC - Saint Lucia",
                        "value": "LC"
                    },
                    {
                        "name": "MF - Saint Martin",
                        "value": "MF"
                    },
                    {
                        "name": "PM - Saint Pierre and Miquelon",
                        "value": "PM"
                    },
                    {
                        "name": "VC - Saint Vincent and the Grenadines",
                        "value": "VC"
                    },
                    {
                        "name": "WS - Samoa",
                        "value": "WS"
                    },
                    {
                        "name": "SM - San Marino",
                        "value": "SM"
                    },
                    {
                        "name": "ST - Sao Tome and Principe",
                        "value": "ST"
                    },
                    {
                        "name": "SA - Saudi Arabia",
                        "value": "SA"
                    },
                    {
                        "name": "SN - Senegal",
                        "value": "SN"
                    },
                    {
                        "name": "RS - Serbia",
                        "value": "RS"
                    },
                    {
                        "name": "SC - Seychelles",
                        "value": "SC"
                    },
                    {
                        "name": "SL - Sierra Leone",
                        "value": "SL"
                    },
                    {
                        "name": "SX - Sint Maarten",
                        "value": "SX"
                    },
                    {
                        "name": "SK - Slovakia",
                        "value": "SK"
                    },
                    {
                        "name": "SI - Slovenia",
                        "value": "SI"
                    },
                    {
                        "name": "SB - Solomon Islands",
                        "value": "SB"
                    },
                    {
                        "name": "SO - Somalia",
                        "value": "SO"
                    },
                    {
                        "name": "ZA - South Africa",
                        "value": "ZA"
                    },
                    {
                        "name": "ES - Spain",
                        "value": "ES"
                    },
                    {
                        "name": "LK - Sri Lanka",
                        "value": "LK"
                    },
                    {
                        "name": "SR - Suriname",
                        "value": "SR"
                    },
                    {
                        "name": "SZ - Swaziland",
                        "value": "SZ"
                    },
                    {
                        "name": "SE - Sweden",
                        "value": "SE"
                    },
                    {
                        "name": "CH - Switzerland",
                        "value": "CH"
                    },
                    {
                        "name": "TW - Taiwan",
                        "value": "TW"
                    },
                    {
                        "name": "TJ - Tajikistan",
                        "value": "TJ"
                    },
                    {
                        "name": "TZ - Tanzania",
                        "value": "TZ"
                    },
                    {
                        "name": "TH - Thailand",
                        "value": "TH"
                    },
                    {
                        "name": "TL - Timor-Leste",
                        "value": "TL"
                    },
                    {
                        "name": "TG - Togo",
                        "value": "TG"
                    },
                    {
                        "name": "TK - Tokelau",
                        "value": "TK"
                    },
                    {
                        "name": "TO - Tonga",
                        "value": "TO"
                    },
                    {
                        "name": "TT - Trinidad and Tobago",
                        "value": "TT"
                    },
                    {
                        "name": "TN - Tunisia",
                        "value": "TN"
                    },
                    {
                        "name": "TR - Turkey",
                        "value": "TR"
                    },
                    {
                        "name": "TM - Turkmenistan",
                        "value": "TM"
                    },
                    {
                        "name": "TC - Turks and Caicos Islands",
                        "value": "TC"
                    },
                    {
                        "name": "TV - Tuvalu",
                        "value": "TV"
                    },
                    {
                        "name": "UG - Uganda",
                        "value": "UG"
                    },
                    {
                        "name": "UA - Ukraine",
                        "value": "UA"
                    },
                    {
                        "name": "AE - United Arab Emirates",
                        "value": "AE"
                    },
                    {
                        "name": "US - United States",
                        "value": "US"
                    },
                    {
                        "name": "UY - Uruguay",
                        "value": "UY"
                    },
                    {
                        "name": "UZ - Uzbekistan",
                        "value": "UZ"
                    },
                    {
                        "name": "VU - Vanuatu",
                        "value": "VU"
                    },
                    {
                        "name": "VE - Venezuela",
                        "value": "VE"
                    },
                    {
                        "name": "VN - Vietnam",
                        "value": "VN"
                    },
                    {
                        "name": "VG - Virgin Islands British",
                        "value": "VG"
                    },
                    {
                        "name": "VI - Virgin Islands U.S.",
                        "value": "VI"
                    },
                    {
                        "name": "WF - Wallis and Futuna",
                        "value": "WF"
                    },
                    {
                        "name": "EH - Western Sahara",
                        "value": "EH"
                    },
                    {
                        "name": "YE - Yemen",
                        "value": "YE"
                    },
                    {
                        "name": "ZM - Zambia",
                        "value": "ZM"
                    },
                    {
                        "name": "ZW - Zimbabwe",
                        "value": "ZW"
                    }
                ]
            },
            {
                "displayName": "Sort By",
                "name": "sortBy",
                "type": "options",
                "default": "",
                "description": "Parameter used for sorting results",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "search"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "featured",
                        "value": "featured"
                    },
                    {
                        "name": "priceLowToHigh",
                        "value": "priceLowToHigh"
                    },
                    {
                        "name": "priceHighToLow",
                        "value": "priceHighToLow"
                    },
                    {
                        "name": "avgCustomerReview",
                        "value": "avgCustomerReview"
                    },
                    {
                        "name": "newestArrivals",
                        "value": "newestArrivals"
                    },
                    {
                        "name": "bestSellers",
                        "value": "bestSellers"
                    }
                ]
            }
        ]
    }
];
