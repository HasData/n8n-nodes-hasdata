import { INodeProperties } from 'n8n-workflow';

export const webScrapingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['web_scraping'],
			},
		},
		options: [
    {
        "name": "Scrape Web Page",
        "value": "web_scraping",
        "description": "Send a web page URL to scrape along with various optional parameters to customize the scraping process.\n",
        "action": "Scrape Web Page"
    }
],
		default: undefined,
	},
];

export const webScrapingFields: INodeProperties[] = [
    {
        "displayName": "URL",
        "name": "url",
        "type": "string",
        "default": "",
        "description": "The URL of the web page to scrape.",
        "displayOptions": {
            "show": {
                "resource": [
                    "web_scraping"
                ],
                "operation": [
                    "web_scraping"
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
                    "web_scraping"
                ],
                "operation": [
                    "web_scraping"
                ]
            }
        },
        "options": [
            {
                "displayName": "Proxy Type",
                "name": "proxyType",
                "type": "options",
                "default": "",
                "description": "Type of proxy to use.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "datacenter",
                        "value": "datacenter"
                    },
                    {
                        "name": "residential",
                        "value": "residential"
                    }
                ]
            },
            {
                "displayName": "Proxy Country",
                "name": "proxyCountry",
                "type": "options",
                "default": "",
                "description": "Optional proxy country code.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "US",
                        "value": "US"
                    },
                    {
                        "name": "UK",
                        "value": "UK"
                    },
                    {
                        "name": "DE",
                        "value": "DE"
                    },
                    {
                        "name": "IE",
                        "value": "IE"
                    },
                    {
                        "name": "FR",
                        "value": "FR"
                    },
                    {
                        "name": "IT",
                        "value": "IT"
                    },
                    {
                        "name": "SE",
                        "value": "SE"
                    },
                    {
                        "name": "BR",
                        "value": "BR"
                    },
                    {
                        "name": "CA",
                        "value": "CA"
                    },
                    {
                        "name": "JP",
                        "value": "JP"
                    },
                    {
                        "name": "SG",
                        "value": "SG"
                    },
                    {
                        "name": "IN",
                        "value": "IN"
                    },
                    {
                        "name": "ID",
                        "value": "ID"
                    }
                ]
            },
            {
                "displayName": "Extraction Rules",
                "name": "extractRules",
                "type": "string",
                "default": "",
                "description": "Rules for extracting specific data from the page. For example: `{ \"title\": \"h1\", \"link_href\": \"a#link @href\", \"page_text\": \"body\" }`\n",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "Screenshot",
                "name": "screenshot",
                "type": "boolean",
                "default": false,
                "description": "Whether to take a screenshot of the page.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "Extract Emails",
                "name": "extractEmails",
                "type": "boolean",
                "default": false,
                "description": "Extract emails from the page.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "Extract Links",
                "name": "extractLinks",
                "type": "boolean",
                "default": false,
                "description": "Extract links from the page.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "Include Only Tags",
                "name": "includeOnlyTags",
                "type": "string",
                "default": "",
                "description": "The `includeOnlyTags` parameter accepts an array of valid CSS selectors.\nWhen specified, only the elements matching these selectors will be included in the response content.\nEach value must be a valid `querySelectorAll` selector. Useful for extracting specific parts of the document.\n",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "Exclude Tags",
                "name": "excludeTags",
                "type": "string",
                "default": "",
                "description": "The `excludeTags` parameter accepts an array of valid CSS selectors.\nElements matching these selectors will be removed from the final output.\nEach value must be a valid `querySelectorAll` selector. This can be used to remove ads, scripts, or\nother unwanted sections.\n",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "Remove Base64 Images",
                "name": "removeBase64Images",
                "type": "string",
                "default": "",
                "description": "If set to `true`, any images embedded as base64-encoded strings will be removed from the output.\nUseful for reducing response size or when base64 images are not needed.\n",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "AI Extraction Rules",
                "name": "aiExtractRules",
                "type": "string",
                "default": "",
                "description": "Defines custom rules for AI-based data extraction using LLMs. This enables the system to extract structured data directly from the HTML of the page. Each key in the object represents a desired output field name, and the value specifies its type and optional description to guide the AI.\n\nSupported types:\n- `string`: plain text value\n- `number`: numeric value\n- `boolean`: true/false\n- `list`: an array of values\n- `item`: a nested object with its own structure defined under `output`\n",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "Wait For A Time",
                "name": "wait",
                "type": "number",
                "default": "",
                "description": "Time in milliseconds to wait after the page load.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "Wait For CSS Selector",
                "name": "waitFor",
                "type": "string",
                "default": "",
                "description": "CSS selector to wait for before scraping.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "Block Images And CSS",
                "name": "blockResources",
                "type": "boolean",
                "default": false,
                "description": "Whether to block loading of resources like images and stylesheets.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "Block ADS",
                "name": "blockAds",
                "type": "boolean",
                "default": false,
                "description": "Whether to block ads.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "Block URLs",
                "name": "blockUrls",
                "type": "string",
                "default": "",
                "description": "List of URLs to block.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "JavaScript Execution",
                "name": "jsScenario",
                "type": "string",
                "default": "",
                "description": "Enables custom JavaScript interactions on the target webpage during scraping. It's an array where each object defines a specific action or step. These actions can include clicking elements, waiting for elements, executing custom scripts, and more. Key actions within this field include:\n\n- `evaluate`: Run custom JavaScript code on the page.\n- `click`: Click on an element specified by a CSS selector.\n- `wait`: Pause for a set duration (in milliseconds).\n- `waitFor`: Delay until a specific element appears.\n- `waitForAndClick`: Combine waiting for an element and then clicking it.\n- `scrollX`, `scrollY`: Scroll to specified positions on the page.\n- `fill`: Enter values into input fields identified by CSS selectors.\n\nActions are executed sequentially.\n",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "JS Rendering",
                "name": "jsRendering",
                "type": "boolean",
                "default": false,
                "description": "Enable JavaScript rendering.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "Headers",
                "name": "headers",
                "type": "string",
                "default": "",
                "description": "Optional custom headers to send with the request.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            },
            {
                "displayName": "Output Format",
                "name": "outputFormat",
                "type": "string",
                "default": "",
                "description": "The outputFormat parameter specifies the desired response format: `html`, `text`, `markdown`, or `json`. If only one of `html`, `text`, or `markdown` is provided, the API returns the response in that format. If multiple formats are specified, the API returns a JSON response with keys for each requested format. If `json` is included with any other format, the API returns a JSON response with keys for the other specified formats.\n",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "web_scraping"
                        ]
                    }
                }
            }
        ]
    }
];
