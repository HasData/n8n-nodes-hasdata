import { INodeProperties } from 'n8n-workflow';

export const googleMapsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['google_maps'],
			},
		},
		options: [
    {
        "name": "Get Google Maps Search Results",
        "value": "search",
        "description": "Allows users to search for specific locations on Google Maps using various criteria such as keyword, coordinates, and filters.",
        "action": "Get Google Maps Search Results"
    },
    {
        "name": "Get Map Reviews",
        "value": "reviews",
        "description": "Retrieves reviews from Google Maps based on specified parameters such as data ID, language, and sorting options.",
        "action": "Get Map Reviews"
    },
    {
        "name": "Get Place Details",
        "value": "place",
        "description": "Fetches detailed information about a specific place using the unique Google Maps `placeId`. Optional parameters allow setting the domain and language.",
        "action": "Get Place Details"
    },
    {
        "name": "Get Place Photos",
        "value": "photos",
        "description": "Retrieves photos from Google Maps using dataId or placeId with optional filters.",
        "action": "Get Place Photos"
    },
    {
        "name": "Get Map Contributor Reviews",
        "value": "contributor_reviews",
        "description": "Retrieves reviews from Google Maps user based on specified parameters such as contributor ID.",
        "action": "Get Map Contributor Reviews"
    }
],
		default: 'search',
	},
];

export const googleMapsFields: INodeProperties[] = [
    {
        "displayName": "Contributor ID",
        "name": "contributorId",
        "type": "string",
        "default": "",
        "description": "Google Maps Contributor ID.",
        "displayOptions": {
            "show": {
                "resource": [
                    "google_maps"
                ],
                "operation": [
                    "contributor_reviews"
                ]
            }
        }
    },
    {
        "displayName": "Search Query",
        "name": "q",
        "type": "string",
        "default": "",
        "description": "Search query term or phrase.",
        "displayOptions": {
            "show": {
                "resource": [
                    "google_maps"
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
                    "google_maps"
                ],
                "operation": [
                    "photos",
                    "reviews",
                    "place",
                    "contributor_reviews",
                    "search"
                ]
            }
        },
        "options": [
            {
                "displayName": "Data ID",
                "name": "dataId",
                "type": "string",
                "default": "",
                "description": "Google Maps data ID. Either dataId or placeId should be set.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "photos",
                            "reviews"
                        ]
                    }
                }
            },
            {
                "displayName": "Place ID",
                "name": "placeId",
                "type": "string",
                "default": "",
                "description": "Unique reference to a place on Google Maps. Either dataId or placeId should be set.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "photos",
                            "place",
                            "reviews"
                        ]
                    }
                }
            },
            {
                "displayName": "Number of Results",
                "name": "num",
                "type": "number",
                "default": "",
                "description": "Number of results per page, ranging from 10 to 200.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "contributor_reviews"
                        ]
                    }
                }
            },
            {
                "displayName": "Next Page Token",
                "name": "nextPageToken",
                "type": "string",
                "default": "",
                "description": "Defines the next page token. It is used for retrieving the next page results.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "contributor_reviews",
                            "photos",
                            "reviews"
                        ]
                    }
                }
            },
            {
                "displayName": "Result Offset",
                "name": "start",
                "type": "number",
                "default": "",
                "description": "Specifies the result offset for pagination purposes. The offset dictates the number of rows to skip from the beginning of the results. This is useful for accessing subsequent pages of search results. For example, an offset of 0 (the default value) returns the first page of results, 20 returns the second page, 40 returns the third page, and so on. This parameter is especially relevant when used in conjunction with the 'll' parameter for location-based searches.\n",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "search"
                        ]
                    }
                }
            },
            {
                "displayName": "GPS Coordinates",
                "name": "ll",
                "type": "string",
                "default": "",
                "description": "GPS coordinates of the location where the search query is to be performed. This parameter is required if the 'start' parameter is present. The format for the `ll` parameter is `@` followed by latitude, longitude, and zoom level, separated by commas. The latitude and longitude should be in decimal degrees, and the zoom level is an integer. Example: `@40.7455096,-74.0083012,14z`.\n",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "search"
                        ]
                    }
                }
            },
            {
                "displayName": "Language",
                "name": "hl",
                "type": "options",
                "default": "en",
                "description": "The two-letter language code for the language you want to use for the search.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "contributor_reviews",
                            "photos",
                            "place",
                            "reviews",
                            "search"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "af - Afrikaans",
                        "value": "af"
                    },
                    {
                        "name": "ak - Akan",
                        "value": "ak"
                    },
                    {
                        "name": "sq - Albanian",
                        "value": "sq"
                    },
                    {
                        "name": "ws - Samoa",
                        "value": "ws"
                    },
                    {
                        "name": "am - Amharic",
                        "value": "am"
                    },
                    {
                        "name": "ar - Arabic",
                        "value": "ar"
                    },
                    {
                        "name": "hy - Armenian",
                        "value": "hy"
                    },
                    {
                        "name": "az - Azerbaijani",
                        "value": "az"
                    },
                    {
                        "name": "eu - Basque",
                        "value": "eu"
                    },
                    {
                        "name": "be - Belarusian",
                        "value": "be"
                    },
                    {
                        "name": "bem - Bemba",
                        "value": "bem"
                    },
                    {
                        "name": "bn - Bengali",
                        "value": "bn"
                    },
                    {
                        "name": "bh - Bihari",
                        "value": "bh"
                    },
                    {
                        "name": "xx-bork - Bork, bork, bork!",
                        "value": "xx-bork"
                    },
                    {
                        "name": "bs - Bosnian",
                        "value": "bs"
                    },
                    {
                        "name": "br - Breton",
                        "value": "br"
                    },
                    {
                        "name": "bg - Bulgarian",
                        "value": "bg"
                    },
                    {
                        "name": "bt - Bhutanese",
                        "value": "bt"
                    },
                    {
                        "name": "km - Cambodian",
                        "value": "km"
                    },
                    {
                        "name": "ca - Catalan",
                        "value": "ca"
                    },
                    {
                        "name": "chr - Cherokee",
                        "value": "chr"
                    },
                    {
                        "name": "ny - Chichewa",
                        "value": "ny"
                    },
                    {
                        "name": "zh-cn - Chinese (Simplified)",
                        "value": "zh-cn"
                    },
                    {
                        "name": "zh-tw - Chinese (Traditional)",
                        "value": "zh-tw"
                    },
                    {
                        "name": "zh-hk - Hong Kong (Traditional)",
                        "value": "zh-hk"
                    },
                    {
                        "name": "co - Corsican",
                        "value": "co"
                    },
                    {
                        "name": "hr - Croatian",
                        "value": "hr"
                    },
                    {
                        "name": "cs - Czech",
                        "value": "cs"
                    },
                    {
                        "name": "da - Danish",
                        "value": "da"
                    },
                    {
                        "name": "nl - Dutch",
                        "value": "nl"
                    },
                    {
                        "name": "xx-elmer - Elmer Fudd",
                        "value": "xx-elmer"
                    },
                    {
                        "name": "en - English",
                        "value": "en"
                    },
                    {
                        "name": "eo - Esperanto",
                        "value": "eo"
                    },
                    {
                        "name": "et - Estonian",
                        "value": "et"
                    },
                    {
                        "name": "ee - Ewe",
                        "value": "ee"
                    },
                    {
                        "name": "fo - Faroese",
                        "value": "fo"
                    },
                    {
                        "name": "tl - Filipino",
                        "value": "tl"
                    },
                    {
                        "name": "fil - Filipino",
                        "value": "fil"
                    },
                    {
                        "name": "fi - Finnish",
                        "value": "fi"
                    },
                    {
                        "name": "fr - French",
                        "value": "fr"
                    },
                    {
                        "name": "fy - Frisian",
                        "value": "fy"
                    },
                    {
                        "name": "gaa - Ga",
                        "value": "gaa"
                    },
                    {
                        "name": "gl - Galician",
                        "value": "gl"
                    },
                    {
                        "name": "ka - Georgian",
                        "value": "ka"
                    },
                    {
                        "name": "de - German",
                        "value": "de"
                    },
                    {
                        "name": "el - Greek",
                        "value": "el"
                    },
                    {
                        "name": "kl - Greenlandic",
                        "value": "kl"
                    },
                    {
                        "name": "gn - Guarani",
                        "value": "gn"
                    },
                    {
                        "name": "gu - Gujarati",
                        "value": "gu"
                    },
                    {
                        "name": "xx-hacker - Hacker",
                        "value": "xx-hacker"
                    },
                    {
                        "name": "ht - Haitian Creole",
                        "value": "ht"
                    },
                    {
                        "name": "ha - Hausa",
                        "value": "ha"
                    },
                    {
                        "name": "haw - Hawaiian",
                        "value": "haw"
                    },
                    {
                        "name": "iw - Hebrew",
                        "value": "iw"
                    },
                    {
                        "name": "hi - Hindi",
                        "value": "hi"
                    },
                    {
                        "name": "hu - Hungarian",
                        "value": "hu"
                    },
                    {
                        "name": "is - Icelandic",
                        "value": "is"
                    },
                    {
                        "name": "ig - Igbo",
                        "value": "ig"
                    },
                    {
                        "name": "id - Indonesian",
                        "value": "id"
                    },
                    {
                        "name": "ia - Interlingua",
                        "value": "ia"
                    },
                    {
                        "name": "ga - Irish",
                        "value": "ga"
                    },
                    {
                        "name": "it - Italian",
                        "value": "it"
                    },
                    {
                        "name": "ja - Japanese",
                        "value": "ja"
                    },
                    {
                        "name": "jw - Javanese",
                        "value": "jw"
                    },
                    {
                        "name": "kn - Kannada",
                        "value": "kn"
                    },
                    {
                        "name": "kk - Kazakh",
                        "value": "kk"
                    },
                    {
                        "name": "rw - Kinyarwanda",
                        "value": "rw"
                    },
                    {
                        "name": "rn - Kirundi",
                        "value": "rn"
                    },
                    {
                        "name": "xx-klingon - Klingon",
                        "value": "xx-klingon"
                    },
                    {
                        "name": "kg - Kongo",
                        "value": "kg"
                    },
                    {
                        "name": "ko - Korean",
                        "value": "ko"
                    },
                    {
                        "name": "kri - Krio (Sierra Leone)",
                        "value": "kri"
                    },
                    {
                        "name": "ku - Kurdish",
                        "value": "ku"
                    },
                    {
                        "name": "ckb - Kurdish (Soranî)",
                        "value": "ckb"
                    },
                    {
                        "name": "ky - Kyrgyz",
                        "value": "ky"
                    },
                    {
                        "name": "lo - Laothian",
                        "value": "lo"
                    },
                    {
                        "name": "la - Latin",
                        "value": "la"
                    },
                    {
                        "name": "lv - Latvian",
                        "value": "lv"
                    },
                    {
                        "name": "ln - Lingala",
                        "value": "ln"
                    },
                    {
                        "name": "lt - Lithuanian",
                        "value": "lt"
                    },
                    {
                        "name": "loz - Lozi",
                        "value": "loz"
                    },
                    {
                        "name": "lg - Luganda",
                        "value": "lg"
                    },
                    {
                        "name": "ach - Luo",
                        "value": "ach"
                    },
                    {
                        "name": "mk - Macedonian",
                        "value": "mk"
                    },
                    {
                        "name": "mg - Malagasy",
                        "value": "mg"
                    },
                    {
                        "name": "my - Myanmar",
                        "value": "my"
                    },
                    {
                        "name": "ml - Malayalam",
                        "value": "ml"
                    },
                    {
                        "name": "mt - Maltese",
                        "value": "mt"
                    },
                    {
                        "name": "mv - Maldives",
                        "value": "mv"
                    },
                    {
                        "name": "mi - Maori",
                        "value": "mi"
                    },
                    {
                        "name": "mr - Marathi",
                        "value": "mr"
                    },
                    {
                        "name": "mfe - Mauritian Creole",
                        "value": "mfe"
                    },
                    {
                        "name": "mo - Moldavian",
                        "value": "mo"
                    },
                    {
                        "name": "mn - Mongolian",
                        "value": "mn"
                    },
                    {
                        "name": "ms - Malay",
                        "value": "ms"
                    },
                    {
                        "name": "sr-me - Montenegrin",
                        "value": "sr-me"
                    },
                    {
                        "name": "ne - Nepali",
                        "value": "ne"
                    },
                    {
                        "name": "pcm - Nigerian Pidgin",
                        "value": "pcm"
                    },
                    {
                        "name": "nso - Northern Sotho",
                        "value": "nso"
                    },
                    {
                        "name": "no - Norwegian",
                        "value": "no"
                    },
                    {
                        "name": "nn - Norwegian (Nynorsk)",
                        "value": "nn"
                    },
                    {
                        "name": "oc - Occitan",
                        "value": "oc"
                    },
                    {
                        "name": "or - Oriya",
                        "value": "or"
                    },
                    {
                        "name": "om - Oromo",
                        "value": "om"
                    },
                    {
                        "name": "ps - Pashto",
                        "value": "ps"
                    },
                    {
                        "name": "fa - Persian",
                        "value": "fa"
                    },
                    {
                        "name": "xx-pirate - Pirate",
                        "value": "xx-pirate"
                    },
                    {
                        "name": "pl - Polish",
                        "value": "pl"
                    },
                    {
                        "name": "pt - Portuguese",
                        "value": "pt"
                    },
                    {
                        "name": "pt-br - Portuguese (Brazil)",
                        "value": "pt-br"
                    },
                    {
                        "name": "pt-pt - Portuguese (Portugal)",
                        "value": "pt-pt"
                    },
                    {
                        "name": "pa - Punjabi",
                        "value": "pa"
                    },
                    {
                        "name": "qu - Quechua",
                        "value": "qu"
                    },
                    {
                        "name": "ro - Romanian",
                        "value": "ro"
                    },
                    {
                        "name": "rm - Romansh",
                        "value": "rm"
                    },
                    {
                        "name": "nyn - Runyakitara",
                        "value": "nyn"
                    },
                    {
                        "name": "ru - Russian",
                        "value": "ru"
                    },
                    {
                        "name": "gd - Scots Gaelic",
                        "value": "gd"
                    },
                    {
                        "name": "sr - Serbian",
                        "value": "sr"
                    },
                    {
                        "name": "sh - Serbo-Croatian",
                        "value": "sh"
                    },
                    {
                        "name": "st - Sesotho",
                        "value": "st"
                    },
                    {
                        "name": "tn - Setswana",
                        "value": "tn"
                    },
                    {
                        "name": "crs - Seychellois Creole",
                        "value": "crs"
                    },
                    {
                        "name": "sn - Shona",
                        "value": "sn"
                    },
                    {
                        "name": "sd - Sindhi",
                        "value": "sd"
                    },
                    {
                        "name": "si - Sinhalese",
                        "value": "si"
                    },
                    {
                        "name": "sk - Slovak",
                        "value": "sk"
                    },
                    {
                        "name": "sl - Slovenian",
                        "value": "sl"
                    },
                    {
                        "name": "so - Somali",
                        "value": "so"
                    },
                    {
                        "name": "es - Spanish",
                        "value": "es"
                    },
                    {
                        "name": "es-419 - Spanish (Latin American)",
                        "value": "es-419"
                    },
                    {
                        "name": "su - Sundanese",
                        "value": "su"
                    },
                    {
                        "name": "sw - Swahili",
                        "value": "sw"
                    },
                    {
                        "name": "sv - Swedish",
                        "value": "sv"
                    },
                    {
                        "name": "tg - Tajik",
                        "value": "tg"
                    },
                    {
                        "name": "ta - Tamil",
                        "value": "ta"
                    },
                    {
                        "name": "tt - Tatar",
                        "value": "tt"
                    },
                    {
                        "name": "te - Telugu",
                        "value": "te"
                    },
                    {
                        "name": "th - Thai",
                        "value": "th"
                    },
                    {
                        "name": "ti - Tigrinya",
                        "value": "ti"
                    },
                    {
                        "name": "to - Tonga",
                        "value": "to"
                    },
                    {
                        "name": "lua - Tshiluba",
                        "value": "lua"
                    },
                    {
                        "name": "tum - Tumbuka",
                        "value": "tum"
                    },
                    {
                        "name": "tr - Turkish",
                        "value": "tr"
                    },
                    {
                        "name": "tk - Turkmen",
                        "value": "tk"
                    },
                    {
                        "name": "tw - Twi",
                        "value": "tw"
                    },
                    {
                        "name": "ug - Uighur",
                        "value": "ug"
                    },
                    {
                        "name": "uk - Ukrainian",
                        "value": "uk"
                    },
                    {
                        "name": "ur - Urdu",
                        "value": "ur"
                    },
                    {
                        "name": "uz - Uzbek",
                        "value": "uz"
                    },
                    {
                        "name": "vu - Vanuatu",
                        "value": "vu"
                    },
                    {
                        "name": "vi - Vietnamese",
                        "value": "vi"
                    },
                    {
                        "name": "cy - Welsh",
                        "value": "cy"
                    },
                    {
                        "name": "wo - Wolof",
                        "value": "wo"
                    },
                    {
                        "name": "xh - Xhosa",
                        "value": "xh"
                    },
                    {
                        "name": "yi - Yiddish",
                        "value": "yi"
                    },
                    {
                        "name": "yo - Yoruba",
                        "value": "yo"
                    },
                    {
                        "name": "zu - Zulu",
                        "value": "zu"
                    }
                ]
            },
            {
                "displayName": "Country",
                "name": "gl",
                "type": "options",
                "default": "us",
                "description": "The two-letter country code for the country you want to limit the search to.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "contributor_reviews",
                            "search"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "ac - Ascension Island",
                        "value": "ac"
                    },
                    {
                        "name": "af - Afghanistan",
                        "value": "af"
                    },
                    {
                        "name": "al - Albania",
                        "value": "al"
                    },
                    {
                        "name": "dz - Algeria",
                        "value": "dz"
                    },
                    {
                        "name": "as - American Samoa",
                        "value": "as"
                    },
                    {
                        "name": "ad - Andorra",
                        "value": "ad"
                    },
                    {
                        "name": "ao - Angola",
                        "value": "ao"
                    },
                    {
                        "name": "ai - Anguilla",
                        "value": "ai"
                    },
                    {
                        "name": "aq - Antarctica",
                        "value": "aq"
                    },
                    {
                        "name": "ag - Antigua and Barbuda",
                        "value": "ag"
                    },
                    {
                        "name": "ar - Argentina",
                        "value": "ar"
                    },
                    {
                        "name": "am - Armenia",
                        "value": "am"
                    },
                    {
                        "name": "aw - Aruba",
                        "value": "aw"
                    },
                    {
                        "name": "au - Australia",
                        "value": "au"
                    },
                    {
                        "name": "at - Austria",
                        "value": "at"
                    },
                    {
                        "name": "az - Azerbaijan",
                        "value": "az"
                    },
                    {
                        "name": "bs - Bahamas",
                        "value": "bs"
                    },
                    {
                        "name": "bh - Bahrain",
                        "value": "bh"
                    },
                    {
                        "name": "bd - Bangladesh",
                        "value": "bd"
                    },
                    {
                        "name": "bb - Barbados",
                        "value": "bb"
                    },
                    {
                        "name": "by - Belarus",
                        "value": "by"
                    },
                    {
                        "name": "be - Belgium",
                        "value": "be"
                    },
                    {
                        "name": "bz - Belize",
                        "value": "bz"
                    },
                    {
                        "name": "bj - Benin",
                        "value": "bj"
                    },
                    {
                        "name": "bm - Bermuda",
                        "value": "bm"
                    },
                    {
                        "name": "bt - Bhutan",
                        "value": "bt"
                    },
                    {
                        "name": "bo - Bolivia",
                        "value": "bo"
                    },
                    {
                        "name": "ba - Bosnia and Herzegovina",
                        "value": "ba"
                    },
                    {
                        "name": "bw - Botswana",
                        "value": "bw"
                    },
                    {
                        "name": "bv - Bouvet Island",
                        "value": "bv"
                    },
                    {
                        "name": "br - Brazil",
                        "value": "br"
                    },
                    {
                        "name": "io - British Indian Ocean Territory",
                        "value": "io"
                    },
                    {
                        "name": "bn - Brunei Darussalam",
                        "value": "bn"
                    },
                    {
                        "name": "bg - Bulgaria",
                        "value": "bg"
                    },
                    {
                        "name": "bf - Burkina Faso",
                        "value": "bf"
                    },
                    {
                        "name": "bi - Burundi",
                        "value": "bi"
                    },
                    {
                        "name": "kh - Cambodia",
                        "value": "kh"
                    },
                    {
                        "name": "cm - Cameroon",
                        "value": "cm"
                    },
                    {
                        "name": "ca - Canada",
                        "value": "ca"
                    },
                    {
                        "name": "cv - Cape Verde",
                        "value": "cv"
                    },
                    {
                        "name": "ky - Cayman Islands",
                        "value": "ky"
                    },
                    {
                        "name": "cf - Central African Republic",
                        "value": "cf"
                    },
                    {
                        "name": "td - Chad",
                        "value": "td"
                    },
                    {
                        "name": "cl - Chile",
                        "value": "cl"
                    },
                    {
                        "name": "cn - China",
                        "value": "cn"
                    },
                    {
                        "name": "cx - Christmas Island",
                        "value": "cx"
                    },
                    {
                        "name": "cc - Cocos (Keeling) Islands",
                        "value": "cc"
                    },
                    {
                        "name": "co - Colombia",
                        "value": "co"
                    },
                    {
                        "name": "km - Comoros",
                        "value": "km"
                    },
                    {
                        "name": "cg - Congo",
                        "value": "cg"
                    },
                    {
                        "name": "cd - Congo, the Democratic Republic of the",
                        "value": "cd"
                    },
                    {
                        "name": "ck - Cook Islands",
                        "value": "ck"
                    },
                    {
                        "name": "cr - Costa Rica",
                        "value": "cr"
                    },
                    {
                        "name": "ci - Cote D'ivoire",
                        "value": "ci"
                    },
                    {
                        "name": "hr - Croatia",
                        "value": "hr"
                    },
                    {
                        "name": "cu - Cuba",
                        "value": "cu"
                    },
                    {
                        "name": "cy - Cyprus",
                        "value": "cy"
                    },
                    {
                        "name": "cz - Czech Republic",
                        "value": "cz"
                    },
                    {
                        "name": "dk - Denmark",
                        "value": "dk"
                    },
                    {
                        "name": "dj - Djibouti",
                        "value": "dj"
                    },
                    {
                        "name": "dm - Dominica",
                        "value": "dm"
                    },
                    {
                        "name": "do - Dominican Republic",
                        "value": "do"
                    },
                    {
                        "name": "ec - Ecuador",
                        "value": "ec"
                    },
                    {
                        "name": "eg - Egypt",
                        "value": "eg"
                    },
                    {
                        "name": "sv - El Salvador",
                        "value": "sv"
                    },
                    {
                        "name": "gq - Equatorial Guinea",
                        "value": "gq"
                    },
                    {
                        "name": "er - Eritrea",
                        "value": "er"
                    },
                    {
                        "name": "ee - Estonia",
                        "value": "ee"
                    },
                    {
                        "name": "et - Ethiopia",
                        "value": "et"
                    },
                    {
                        "name": "fk - Falkland Islands (Malvinas)",
                        "value": "fk"
                    },
                    {
                        "name": "fo - Faroe Islands",
                        "value": "fo"
                    },
                    {
                        "name": "fj - Fiji",
                        "value": "fj"
                    },
                    {
                        "name": "fi - Finland",
                        "value": "fi"
                    },
                    {
                        "name": "fr - France",
                        "value": "fr"
                    },
                    {
                        "name": "gf - French Guiana",
                        "value": "gf"
                    },
                    {
                        "name": "pf - French Polynesia",
                        "value": "pf"
                    },
                    {
                        "name": "tf - French Southern Territories",
                        "value": "tf"
                    },
                    {
                        "name": "ga - Gabon",
                        "value": "ga"
                    },
                    {
                        "name": "gm - Gambia",
                        "value": "gm"
                    },
                    {
                        "name": "ge - Georgia",
                        "value": "ge"
                    },
                    {
                        "name": "gg - Guernsey",
                        "value": "gg"
                    },
                    {
                        "name": "de - Germany",
                        "value": "de"
                    },
                    {
                        "name": "gh - Ghana",
                        "value": "gh"
                    },
                    {
                        "name": "gi - Gibraltar",
                        "value": "gi"
                    },
                    {
                        "name": "gr - Greece",
                        "value": "gr"
                    },
                    {
                        "name": "gl - Greenland",
                        "value": "gl"
                    },
                    {
                        "name": "gd - Grenada",
                        "value": "gd"
                    },
                    {
                        "name": "gp - Guadeloupe",
                        "value": "gp"
                    },
                    {
                        "name": "gu - Guam",
                        "value": "gu"
                    },
                    {
                        "name": "gt - Guatemala",
                        "value": "gt"
                    },
                    {
                        "name": "gn - Guinea",
                        "value": "gn"
                    },
                    {
                        "name": "gw - Guinea-Bissau",
                        "value": "gw"
                    },
                    {
                        "name": "gy - Guyana",
                        "value": "gy"
                    },
                    {
                        "name": "ht - Haiti",
                        "value": "ht"
                    },
                    {
                        "name": "hm - Heard Island and Mcdonald Islands",
                        "value": "hm"
                    },
                    {
                        "name": "va - Holy See (Vatican City State)",
                        "value": "va"
                    },
                    {
                        "name": "hn - Honduras",
                        "value": "hn"
                    },
                    {
                        "name": "hk - Hong Kong",
                        "value": "hk"
                    },
                    {
                        "name": "hu - Hungary",
                        "value": "hu"
                    },
                    {
                        "name": "im - Isle of Man",
                        "value": "im"
                    },
                    {
                        "name": "is - Iceland",
                        "value": "is"
                    },
                    {
                        "name": "in - India",
                        "value": "in"
                    },
                    {
                        "name": "id - Indonesia",
                        "value": "id"
                    },
                    {
                        "name": "ir - Iran, Islamic Republic of",
                        "value": "ir"
                    },
                    {
                        "name": "iq - Iraq",
                        "value": "iq"
                    },
                    {
                        "name": "ie - Ireland",
                        "value": "ie"
                    },
                    {
                        "name": "il - Israel",
                        "value": "il"
                    },
                    {
                        "name": "it - Italy",
                        "value": "it"
                    },
                    {
                        "name": "je - Jersey",
                        "value": "je"
                    },
                    {
                        "name": "jm - Jamaica",
                        "value": "jm"
                    },
                    {
                        "name": "jp - Japan",
                        "value": "jp"
                    },
                    {
                        "name": "jo - Jordan",
                        "value": "jo"
                    },
                    {
                        "name": "kz - Kazakhstan",
                        "value": "kz"
                    },
                    {
                        "name": "ke - Kenya",
                        "value": "ke"
                    },
                    {
                        "name": "ki - Kiribati",
                        "value": "ki"
                    },
                    {
                        "name": "kp - Korea, Democratic People's Republic of",
                        "value": "kp"
                    },
                    {
                        "name": "kr - Korea, Republic of",
                        "value": "kr"
                    },
                    {
                        "name": "kw - Kuwait",
                        "value": "kw"
                    },
                    {
                        "name": "kg - Kyrgyzstan",
                        "value": "kg"
                    },
                    {
                        "name": "la - Lao People's Democratic Republic",
                        "value": "la"
                    },
                    {
                        "name": "lv - Latvia",
                        "value": "lv"
                    },
                    {
                        "name": "lb - Lebanon",
                        "value": "lb"
                    },
                    {
                        "name": "ls - Lesotho",
                        "value": "ls"
                    },
                    {
                        "name": "lr - Liberia",
                        "value": "lr"
                    },
                    {
                        "name": "ly - Libyan Arab Jamahiriya",
                        "value": "ly"
                    },
                    {
                        "name": "li - Liechtenstein",
                        "value": "li"
                    },
                    {
                        "name": "lt - Lithuania",
                        "value": "lt"
                    },
                    {
                        "name": "lu - Luxembourg",
                        "value": "lu"
                    },
                    {
                        "name": "me - Montenegro",
                        "value": "me"
                    },
                    {
                        "name": "mo - Macao",
                        "value": "mo"
                    },
                    {
                        "name": "mk - Macedonia, the Former Yugoslav Republic of",
                        "value": "mk"
                    },
                    {
                        "name": "mg - Madagascar",
                        "value": "mg"
                    },
                    {
                        "name": "mw - Malawi",
                        "value": "mw"
                    },
                    {
                        "name": "my - Malaysia",
                        "value": "my"
                    },
                    {
                        "name": "mv - Maldives",
                        "value": "mv"
                    },
                    {
                        "name": "ml - Mali",
                        "value": "ml"
                    },
                    {
                        "name": "mt - Malta",
                        "value": "mt"
                    },
                    {
                        "name": "mh - Marshall Islands",
                        "value": "mh"
                    },
                    {
                        "name": "mq - Martinique",
                        "value": "mq"
                    },
                    {
                        "name": "mr - Mauritania",
                        "value": "mr"
                    },
                    {
                        "name": "mu - Mauritius",
                        "value": "mu"
                    },
                    {
                        "name": "yt - Mayotte",
                        "value": "yt"
                    },
                    {
                        "name": "mx - Mexico",
                        "value": "mx"
                    },
                    {
                        "name": "fm - Micronesia, Federated States of",
                        "value": "fm"
                    },
                    {
                        "name": "md - Moldova, Republic of",
                        "value": "md"
                    },
                    {
                        "name": "mc - Monaco",
                        "value": "mc"
                    },
                    {
                        "name": "mn - Mongolia",
                        "value": "mn"
                    },
                    {
                        "name": "ms - Montserrat",
                        "value": "ms"
                    },
                    {
                        "name": "ma - Morocco",
                        "value": "ma"
                    },
                    {
                        "name": "mz - Mozambique",
                        "value": "mz"
                    },
                    {
                        "name": "mm - Myanmar",
                        "value": "mm"
                    },
                    {
                        "name": "na - Namibia",
                        "value": "na"
                    },
                    {
                        "name": "nr - Nauru",
                        "value": "nr"
                    },
                    {
                        "name": "np - Nepal",
                        "value": "np"
                    },
                    {
                        "name": "nl - Netherlands",
                        "value": "nl"
                    },
                    {
                        "name": "an - Netherlands Antilles",
                        "value": "an"
                    },
                    {
                        "name": "nc - New Caledonia",
                        "value": "nc"
                    },
                    {
                        "name": "nz - New Zealand",
                        "value": "nz"
                    },
                    {
                        "name": "ni - Nicaragua",
                        "value": "ni"
                    },
                    {
                        "name": "ne - Niger",
                        "value": "ne"
                    },
                    {
                        "name": "ng - Nigeria",
                        "value": "ng"
                    },
                    {
                        "name": "nu - Niue",
                        "value": "nu"
                    },
                    {
                        "name": "nf - Norfolk Island",
                        "value": "nf"
                    },
                    {
                        "name": "mp - Northern Mariana Islands",
                        "value": "mp"
                    },
                    {
                        "name": "no - Norway",
                        "value": "no"
                    },
                    {
                        "name": "om - Oman",
                        "value": "om"
                    },
                    {
                        "name": "pk - Pakistan",
                        "value": "pk"
                    },
                    {
                        "name": "pw - Palau",
                        "value": "pw"
                    },
                    {
                        "name": "ps - Palestinian Territory, Occupied",
                        "value": "ps"
                    },
                    {
                        "name": "pa - Panama",
                        "value": "pa"
                    },
                    {
                        "name": "pg - Papua New Guinea",
                        "value": "pg"
                    },
                    {
                        "name": "py - Paraguay",
                        "value": "py"
                    },
                    {
                        "name": "pe - Peru",
                        "value": "pe"
                    },
                    {
                        "name": "ph - Philippines",
                        "value": "ph"
                    },
                    {
                        "name": "pn - Pitcairn",
                        "value": "pn"
                    },
                    {
                        "name": "pl - Poland",
                        "value": "pl"
                    },
                    {
                        "name": "pt - Portugal",
                        "value": "pt"
                    },
                    {
                        "name": "pr - Puerto Rico",
                        "value": "pr"
                    },
                    {
                        "name": "qa - Qatar",
                        "value": "qa"
                    },
                    {
                        "name": "re - Reunion",
                        "value": "re"
                    },
                    {
                        "name": "ro - Romania",
                        "value": "ro"
                    },
                    {
                        "name": "ru - Russian Federation",
                        "value": "ru"
                    },
                    {
                        "name": "rw - Rwanda",
                        "value": "rw"
                    },
                    {
                        "name": "sh - Saint Helena",
                        "value": "sh"
                    },
                    {
                        "name": "kn - Saint Kitts and Nevis",
                        "value": "kn"
                    },
                    {
                        "name": "lc - Saint Lucia",
                        "value": "lc"
                    },
                    {
                        "name": "pm - Saint Pierre and Miquelon",
                        "value": "pm"
                    },
                    {
                        "name": "vc - Saint Vincent and the Grenadines",
                        "value": "vc"
                    },
                    {
                        "name": "ws - Samoa",
                        "value": "ws"
                    },
                    {
                        "name": "sm - San Marino",
                        "value": "sm"
                    },
                    {
                        "name": "st - Sao Tome and Principe",
                        "value": "st"
                    },
                    {
                        "name": "sa - Saudi Arabia",
                        "value": "sa"
                    },
                    {
                        "name": "sn - Senegal",
                        "value": "sn"
                    },
                    {
                        "name": "rs - Serbia and Montenegro",
                        "value": "rs"
                    },
                    {
                        "name": "sc - Seychelles",
                        "value": "sc"
                    },
                    {
                        "name": "sl - Sierra Leone",
                        "value": "sl"
                    },
                    {
                        "name": "sg - Singapore",
                        "value": "sg"
                    },
                    {
                        "name": "sk - Slovakia",
                        "value": "sk"
                    },
                    {
                        "name": "si - Slovenia",
                        "value": "si"
                    },
                    {
                        "name": "sb - Solomon Islands",
                        "value": "sb"
                    },
                    {
                        "name": "so - Somalia",
                        "value": "so"
                    },
                    {
                        "name": "za - South Africa",
                        "value": "za"
                    },
                    {
                        "name": "gs - South Georgia and the South Sandwich Islands",
                        "value": "gs"
                    },
                    {
                        "name": "es - Spain",
                        "value": "es"
                    },
                    {
                        "name": "lk - Sri Lanka",
                        "value": "lk"
                    },
                    {
                        "name": "sd - Sudan",
                        "value": "sd"
                    },
                    {
                        "name": "sr - Suriname",
                        "value": "sr"
                    },
                    {
                        "name": "sj - Svalbard and Jan Mayen",
                        "value": "sj"
                    },
                    {
                        "name": "sz - Swaziland",
                        "value": "sz"
                    },
                    {
                        "name": "se - Sweden",
                        "value": "se"
                    },
                    {
                        "name": "ch - Switzerland",
                        "value": "ch"
                    },
                    {
                        "name": "sy - Syrian Arab Republic",
                        "value": "sy"
                    },
                    {
                        "name": "tw - Taiwan, Province of China",
                        "value": "tw"
                    },
                    {
                        "name": "tj - Tajikistan",
                        "value": "tj"
                    },
                    {
                        "name": "tz - Tanzania, United Republic of",
                        "value": "tz"
                    },
                    {
                        "name": "th - Thailand",
                        "value": "th"
                    },
                    {
                        "name": "tl - Timor-Leste",
                        "value": "tl"
                    },
                    {
                        "name": "tg - Togo",
                        "value": "tg"
                    },
                    {
                        "name": "tk - Tokelau",
                        "value": "tk"
                    },
                    {
                        "name": "to - Tonga",
                        "value": "to"
                    },
                    {
                        "name": "tt - Trinidad and Tobago",
                        "value": "tt"
                    },
                    {
                        "name": "tn - Tunisia",
                        "value": "tn"
                    },
                    {
                        "name": "tr - Turkey",
                        "value": "tr"
                    },
                    {
                        "name": "tm - Turkmenistan",
                        "value": "tm"
                    },
                    {
                        "name": "tc - Turks and Caicos Islands",
                        "value": "tc"
                    },
                    {
                        "name": "tv - Tuvalu",
                        "value": "tv"
                    },
                    {
                        "name": "ug - Uganda",
                        "value": "ug"
                    },
                    {
                        "name": "ua - Ukraine",
                        "value": "ua"
                    },
                    {
                        "name": "ae - United Arab Emirates",
                        "value": "ae"
                    },
                    {
                        "name": "uk - United Kingdom",
                        "value": "uk"
                    },
                    {
                        "name": "gb - United Kingdom",
                        "value": "gb"
                    },
                    {
                        "name": "us - United States",
                        "value": "us"
                    },
                    {
                        "name": "um - United States Minor Outlying Islands",
                        "value": "um"
                    },
                    {
                        "name": "uy - Uruguay",
                        "value": "uy"
                    },
                    {
                        "name": "uz - Uzbekistan",
                        "value": "uz"
                    },
                    {
                        "name": "vu - Vanuatu",
                        "value": "vu"
                    },
                    {
                        "name": "ve - Venezuela",
                        "value": "ve"
                    },
                    {
                        "name": "vn - Viet Nam",
                        "value": "vn"
                    },
                    {
                        "name": "vg - Virgin Islands, British",
                        "value": "vg"
                    },
                    {
                        "name": "vi - Virgin Islands, U.S.",
                        "value": "vi"
                    },
                    {
                        "name": "wf - Wallis and Futuna",
                        "value": "wf"
                    },
                    {
                        "name": "eh - Western Sahara",
                        "value": "eh"
                    },
                    {
                        "name": "ye - Yemen",
                        "value": "ye"
                    },
                    {
                        "name": "zm - Zambia",
                        "value": "zm"
                    },
                    {
                        "name": "zw - Zimbabwe",
                        "value": "zw"
                    }
                ]
            },
            {
                "displayName": "Domain",
                "name": "domain",
                "type": "options",
                "default": "google.com",
                "description": "Google domain to use. Default is google.com.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "place",
                            "search"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "google.ac",
                        "value": "google.ac"
                    },
                    {
                        "name": "google.ad",
                        "value": "google.ad"
                    },
                    {
                        "name": "google.ae",
                        "value": "google.ae"
                    },
                    {
                        "name": "google.al",
                        "value": "google.al"
                    },
                    {
                        "name": "google.am",
                        "value": "google.am"
                    },
                    {
                        "name": "google.as",
                        "value": "google.as"
                    },
                    {
                        "name": "google.at",
                        "value": "google.at"
                    },
                    {
                        "name": "google.az",
                        "value": "google.az"
                    },
                    {
                        "name": "google.ba",
                        "value": "google.ba"
                    },
                    {
                        "name": "google.be",
                        "value": "google.be"
                    },
                    {
                        "name": "google.bf",
                        "value": "google.bf"
                    },
                    {
                        "name": "google.bg",
                        "value": "google.bg"
                    },
                    {
                        "name": "google.bi",
                        "value": "google.bi"
                    },
                    {
                        "name": "google.bj",
                        "value": "google.bj"
                    },
                    {
                        "name": "google.bs",
                        "value": "google.bs"
                    },
                    {
                        "name": "google.bt",
                        "value": "google.bt"
                    },
                    {
                        "name": "google.by",
                        "value": "google.by"
                    },
                    {
                        "name": "google.ca",
                        "value": "google.ca"
                    },
                    {
                        "name": "google.cd",
                        "value": "google.cd"
                    },
                    {
                        "name": "google.cf",
                        "value": "google.cf"
                    },
                    {
                        "name": "google.cg",
                        "value": "google.cg"
                    },
                    {
                        "name": "google.ch",
                        "value": "google.ch"
                    },
                    {
                        "name": "google.ci",
                        "value": "google.ci"
                    },
                    {
                        "name": "google.cl",
                        "value": "google.cl"
                    },
                    {
                        "name": "google.cm",
                        "value": "google.cm"
                    },
                    {
                        "name": "google.co.ao",
                        "value": "google.co.ao"
                    },
                    {
                        "name": "google.co.bw",
                        "value": "google.co.bw"
                    },
                    {
                        "name": "google.co.ck",
                        "value": "google.co.ck"
                    },
                    {
                        "name": "google.co.cr",
                        "value": "google.co.cr"
                    },
                    {
                        "name": "google.co.id",
                        "value": "google.co.id"
                    },
                    {
                        "name": "google.co.il",
                        "value": "google.co.il"
                    },
                    {
                        "name": "google.co.in",
                        "value": "google.co.in"
                    },
                    {
                        "name": "google.co.jp",
                        "value": "google.co.jp"
                    },
                    {
                        "name": "google.co.ke",
                        "value": "google.co.ke"
                    },
                    {
                        "name": "google.co.kr",
                        "value": "google.co.kr"
                    },
                    {
                        "name": "google.co.ls",
                        "value": "google.co.ls"
                    },
                    {
                        "name": "google.co.ma",
                        "value": "google.co.ma"
                    },
                    {
                        "name": "google.co.mz",
                        "value": "google.co.mz"
                    },
                    {
                        "name": "google.co.nz",
                        "value": "google.co.nz"
                    },
                    {
                        "name": "google.co.th",
                        "value": "google.co.th"
                    },
                    {
                        "name": "google.co.tz",
                        "value": "google.co.tz"
                    },
                    {
                        "name": "google.co.ug",
                        "value": "google.co.ug"
                    },
                    {
                        "name": "google.co.uk",
                        "value": "google.co.uk"
                    },
                    {
                        "name": "google.co.uz",
                        "value": "google.co.uz"
                    },
                    {
                        "name": "google.co.ve",
                        "value": "google.co.ve"
                    },
                    {
                        "name": "google.co.vi",
                        "value": "google.co.vi"
                    },
                    {
                        "name": "google.co.za",
                        "value": "google.co.za"
                    },
                    {
                        "name": "google.co.zm",
                        "value": "google.co.zm"
                    },
                    {
                        "name": "google.co.zw",
                        "value": "google.co.zw"
                    },
                    {
                        "name": "google.com",
                        "value": "google.com"
                    },
                    {
                        "name": "google.com.af",
                        "value": "google.com.af"
                    },
                    {
                        "name": "google.com.ag",
                        "value": "google.com.ag"
                    },
                    {
                        "name": "google.com.ai",
                        "value": "google.com.ai"
                    },
                    {
                        "name": "google.com.ar",
                        "value": "google.com.ar"
                    },
                    {
                        "name": "google.com.au",
                        "value": "google.com.au"
                    },
                    {
                        "name": "google.com.bd",
                        "value": "google.com.bd"
                    },
                    {
                        "name": "google.com.bh",
                        "value": "google.com.bh"
                    },
                    {
                        "name": "google.com.bn",
                        "value": "google.com.bn"
                    },
                    {
                        "name": "google.com.bo",
                        "value": "google.com.bo"
                    },
                    {
                        "name": "google.com.br",
                        "value": "google.com.br"
                    },
                    {
                        "name": "google.com.bz",
                        "value": "google.com.bz"
                    },
                    {
                        "name": "google.com.co",
                        "value": "google.com.co"
                    },
                    {
                        "name": "google.com.cu",
                        "value": "google.com.cu"
                    },
                    {
                        "name": "google.com.cy",
                        "value": "google.com.cy"
                    },
                    {
                        "name": "google.com.do",
                        "value": "google.com.do"
                    },
                    {
                        "name": "google.com.ec",
                        "value": "google.com.ec"
                    },
                    {
                        "name": "google.com.eg",
                        "value": "google.com.eg"
                    },
                    {
                        "name": "google.com.et",
                        "value": "google.com.et"
                    },
                    {
                        "name": "google.com.fj",
                        "value": "google.com.fj"
                    },
                    {
                        "name": "google.com.gh",
                        "value": "google.com.gh"
                    },
                    {
                        "name": "google.com.gi",
                        "value": "google.com.gi"
                    },
                    {
                        "name": "google.com.gt",
                        "value": "google.com.gt"
                    },
                    {
                        "name": "google.com.hk",
                        "value": "google.com.hk"
                    },
                    {
                        "name": "google.com.jm",
                        "value": "google.com.jm"
                    },
                    {
                        "name": "google.com.kh",
                        "value": "google.com.kh"
                    },
                    {
                        "name": "google.com.kw",
                        "value": "google.com.kw"
                    },
                    {
                        "name": "google.com.lb",
                        "value": "google.com.lb"
                    },
                    {
                        "name": "google.com.ly",
                        "value": "google.com.ly"
                    },
                    {
                        "name": "google.com.mm",
                        "value": "google.com.mm"
                    },
                    {
                        "name": "google.com.mt",
                        "value": "google.com.mt"
                    },
                    {
                        "name": "google.com.mx",
                        "value": "google.com.mx"
                    },
                    {
                        "name": "google.com.my",
                        "value": "google.com.my"
                    },
                    {
                        "name": "google.com.na",
                        "value": "google.com.na"
                    },
                    {
                        "name": "google.com.ng",
                        "value": "google.com.ng"
                    },
                    {
                        "name": "google.ng",
                        "value": "google.ng"
                    },
                    {
                        "name": "google.com.nf",
                        "value": "google.com.nf"
                    },
                    {
                        "name": "google.com.ni",
                        "value": "google.com.ni"
                    },
                    {
                        "name": "google.com.np",
                        "value": "google.com.np"
                    },
                    {
                        "name": "google.com.om",
                        "value": "google.com.om"
                    },
                    {
                        "name": "google.com.pa",
                        "value": "google.com.pa"
                    },
                    {
                        "name": "google.com.pe",
                        "value": "google.com.pe"
                    },
                    {
                        "name": "google.com.pg",
                        "value": "google.com.pg"
                    },
                    {
                        "name": "google.com.ph",
                        "value": "google.com.ph"
                    },
                    {
                        "name": "google.com.pk",
                        "value": "google.com.pk"
                    },
                    {
                        "name": "google.com.pr",
                        "value": "google.com.pr"
                    },
                    {
                        "name": "google.com.py",
                        "value": "google.com.py"
                    },
                    {
                        "name": "google.com.qa",
                        "value": "google.com.qa"
                    },
                    {
                        "name": "google.com.sa",
                        "value": "google.com.sa"
                    },
                    {
                        "name": "google.com.sb",
                        "value": "google.com.sb"
                    },
                    {
                        "name": "google.com.sg",
                        "value": "google.com.sg"
                    },
                    {
                        "name": "google.com.sl",
                        "value": "google.com.sl"
                    },
                    {
                        "name": "google.com.sv",
                        "value": "google.com.sv"
                    },
                    {
                        "name": "google.com.tj",
                        "value": "google.com.tj"
                    },
                    {
                        "name": "google.com.tr",
                        "value": "google.com.tr"
                    },
                    {
                        "name": "google.com.tw",
                        "value": "google.com.tw"
                    },
                    {
                        "name": "google.com.ua",
                        "value": "google.com.ua"
                    },
                    {
                        "name": "google.com.uy",
                        "value": "google.com.uy"
                    },
                    {
                        "name": "google.com.vc",
                        "value": "google.com.vc"
                    },
                    {
                        "name": "google.com.vn",
                        "value": "google.com.vn"
                    },
                    {
                        "name": "google.cat",
                        "value": "google.cat"
                    },
                    {
                        "name": "google.cn",
                        "value": "google.cn"
                    },
                    {
                        "name": "google.cv",
                        "value": "google.cv"
                    },
                    {
                        "name": "google.cz",
                        "value": "google.cz"
                    },
                    {
                        "name": "google.de",
                        "value": "google.de"
                    },
                    {
                        "name": "google.dj",
                        "value": "google.dj"
                    },
                    {
                        "name": "google.dk",
                        "value": "google.dk"
                    },
                    {
                        "name": "google.dm",
                        "value": "google.dm"
                    },
                    {
                        "name": "google.dz",
                        "value": "google.dz"
                    },
                    {
                        "name": "google.ee",
                        "value": "google.ee"
                    },
                    {
                        "name": "google.es",
                        "value": "google.es"
                    },
                    {
                        "name": "google.fi",
                        "value": "google.fi"
                    },
                    {
                        "name": "google.fm",
                        "value": "google.fm"
                    },
                    {
                        "name": "google.fr",
                        "value": "google.fr"
                    },
                    {
                        "name": "google.ga",
                        "value": "google.ga"
                    },
                    {
                        "name": "google.ge",
                        "value": "google.ge"
                    },
                    {
                        "name": "google.gg",
                        "value": "google.gg"
                    },
                    {
                        "name": "google.gl",
                        "value": "google.gl"
                    },
                    {
                        "name": "google.gm",
                        "value": "google.gm"
                    },
                    {
                        "name": "google.gp",
                        "value": "google.gp"
                    },
                    {
                        "name": "google.gr",
                        "value": "google.gr"
                    },
                    {
                        "name": "google.gy",
                        "value": "google.gy"
                    },
                    {
                        "name": "google.hn",
                        "value": "google.hn"
                    },
                    {
                        "name": "google.hr",
                        "value": "google.hr"
                    },
                    {
                        "name": "google.ht",
                        "value": "google.ht"
                    },
                    {
                        "name": "google.hu",
                        "value": "google.hu"
                    },
                    {
                        "name": "google.ie",
                        "value": "google.ie"
                    },
                    {
                        "name": "google.im",
                        "value": "google.im"
                    },
                    {
                        "name": "google.iq",
                        "value": "google.iq"
                    },
                    {
                        "name": "google.is",
                        "value": "google.is"
                    },
                    {
                        "name": "google.it",
                        "value": "google.it"
                    },
                    {
                        "name": "google.je",
                        "value": "google.je"
                    },
                    {
                        "name": "google.jo",
                        "value": "google.jo"
                    },
                    {
                        "name": "google.kg",
                        "value": "google.kg"
                    },
                    {
                        "name": "google.ki",
                        "value": "google.ki"
                    },
                    {
                        "name": "google.kz",
                        "value": "google.kz"
                    },
                    {
                        "name": "google.la",
                        "value": "google.la"
                    },
                    {
                        "name": "google.li",
                        "value": "google.li"
                    },
                    {
                        "name": "google.lk",
                        "value": "google.lk"
                    },
                    {
                        "name": "google.lt",
                        "value": "google.lt"
                    },
                    {
                        "name": "google.lu",
                        "value": "google.lu"
                    },
                    {
                        "name": "google.lv",
                        "value": "google.lv"
                    },
                    {
                        "name": "google.md",
                        "value": "google.md"
                    },
                    {
                        "name": "google.me",
                        "value": "google.me"
                    },
                    {
                        "name": "google.mg",
                        "value": "google.mg"
                    },
                    {
                        "name": "google.mk",
                        "value": "google.mk"
                    },
                    {
                        "name": "google.ml",
                        "value": "google.ml"
                    },
                    {
                        "name": "google.mn",
                        "value": "google.mn"
                    },
                    {
                        "name": "google.ms",
                        "value": "google.ms"
                    },
                    {
                        "name": "google.mu",
                        "value": "google.mu"
                    },
                    {
                        "name": "google.mv",
                        "value": "google.mv"
                    },
                    {
                        "name": "google.mw",
                        "value": "google.mw"
                    },
                    {
                        "name": "google.ne",
                        "value": "google.ne"
                    },
                    {
                        "name": "google.nl",
                        "value": "google.nl"
                    },
                    {
                        "name": "google.no",
                        "value": "google.no"
                    },
                    {
                        "name": "google.nr",
                        "value": "google.nr"
                    },
                    {
                        "name": "google.nu",
                        "value": "google.nu"
                    },
                    {
                        "name": "google.pl",
                        "value": "google.pl"
                    },
                    {
                        "name": "google.pn",
                        "value": "google.pn"
                    },
                    {
                        "name": "google.ps",
                        "value": "google.ps"
                    },
                    {
                        "name": "google.pt",
                        "value": "google.pt"
                    },
                    {
                        "name": "google.ro",
                        "value": "google.ro"
                    },
                    {
                        "name": "google.rs",
                        "value": "google.rs"
                    },
                    {
                        "name": "google.ru",
                        "value": "google.ru"
                    },
                    {
                        "name": "google.rw",
                        "value": "google.rw"
                    },
                    {
                        "name": "google.sc",
                        "value": "google.sc"
                    },
                    {
                        "name": "google.se",
                        "value": "google.se"
                    },
                    {
                        "name": "google.sh",
                        "value": "google.sh"
                    },
                    {
                        "name": "google.si",
                        "value": "google.si"
                    },
                    {
                        "name": "google.sk",
                        "value": "google.sk"
                    },
                    {
                        "name": "google.sm",
                        "value": "google.sm"
                    },
                    {
                        "name": "google.sn",
                        "value": "google.sn"
                    },
                    {
                        "name": "google.so",
                        "value": "google.so"
                    },
                    {
                        "name": "google.sr",
                        "value": "google.sr"
                    },
                    {
                        "name": "google.st",
                        "value": "google.st"
                    },
                    {
                        "name": "google.td",
                        "value": "google.td"
                    },
                    {
                        "name": "google.tg",
                        "value": "google.tg"
                    },
                    {
                        "name": "google.tk",
                        "value": "google.tk"
                    },
                    {
                        "name": "google.tl",
                        "value": "google.tl"
                    },
                    {
                        "name": "google.tm",
                        "value": "google.tm"
                    },
                    {
                        "name": "google.tn",
                        "value": "google.tn"
                    },
                    {
                        "name": "google.to",
                        "value": "google.to"
                    },
                    {
                        "name": "google.tt",
                        "value": "google.tt"
                    },
                    {
                        "name": "google.vg",
                        "value": "google.vg"
                    },
                    {
                        "name": "google.vu",
                        "value": "google.vu"
                    },
                    {
                        "name": "google.ws",
                        "value": "google.ws"
                    }
                ]
            },
            {
                "displayName": "Category ID",
                "name": "categoryId",
                "type": "string",
                "default": "",
                "description": "Filters photos by category.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "photos"
                        ]
                    }
                }
            },
            {
                "displayName": "Sort By",
                "name": "sortBy",
                "type": "options",
                "default": "",
                "description": "Parameter used for sorting and refining results.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "reviews"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "qualityScore",
                        "value": "qualityScore"
                    },
                    {
                        "name": "newestFirst",
                        "value": "newestFirst"
                    },
                    {
                        "name": "ratingHigh",
                        "value": "ratingHigh"
                    },
                    {
                        "name": "ratingLow",
                        "value": "ratingLow"
                    }
                ]
            },
            {
                "displayName": "Topic ID",
                "name": "topicId",
                "type": "string",
                "default": "",
                "description": "Defines the ID of the topic you want to use for filtering reviews.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "reviews"
                        ]
                    }
                }
            }
        ]
    }
];
