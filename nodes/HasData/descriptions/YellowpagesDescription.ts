import { INodeProperties } from 'n8n-workflow';

export const yellowpagesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['yellowpages'],
			},
		},
		options: [
    {
        "name": "Get Yellow Pages Place Details",
        "value": "place",
        "description": "Retrieves detailed information about a specific place from YellowPages.",
        "action": "Get Yellow Pages Place Details"
    },
    {
        "name": "Get YellowPages Search Results",
        "value": "search",
        "description": "Retrieves search results from YellowPages based on the specified keyword and location.",
        "action": "Get YellowPages Search Results"
    }
],
		default: 'place',
	},
];

export const yellowpagesFields: INodeProperties[] = [
    {
        "displayName": "URL",
        "name": "url",
        "type": "string",
        "default": "",
        "description": "The YellowPages URL of the place.",
        "displayOptions": {
            "show": {
                "resource": [
                    "yellowpages"
                ],
                "operation": [
                    "place"
                ]
            }
        }
    },
    {
        "displayName": "Search Query",
        "name": "keyword",
        "type": "string",
        "default": "",
        "description": "The search term for which to get the search results.",
        "displayOptions": {
            "show": {
                "resource": [
                    "yellowpages"
                ],
                "operation": [
                    "search"
                ]
            }
        }
    },
    {
        "displayName": "Location",
        "name": "location",
        "type": "string",
        "default": "",
        "description": "The location where to search for businesses with the given keyword.",
        "displayOptions": {
            "show": {
                "resource": [
                    "yellowpages"
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
                    "yellowpages"
                ],
                "operation": [
                    "search"
                ]
            }
        },
        "options": [
            {
                "displayName": "Sort By",
                "name": "sort",
                "type": "options",
                "default": "",
                "description": "The sorting option for the search results.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "search"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "default",
                        "value": "default"
                    },
                    {
                        "name": "distance",
                        "value": "distance"
                    },
                    {
                        "name": "averageRating",
                        "value": "averageRating"
                    },
                    {
                        "name": "name",
                        "value": "name"
                    }
                ]
            },
            {
                "displayName": "Page",
                "name": "page",
                "type": "number",
                "default": 1,
                "description": "The page number of the results to retrieve.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "search"
                        ]
                    }
                }
            },
            {
                "displayName": "Domain",
                "name": "domain",
                "type": "options",
                "default": "www.yellowpages.com",
                "description": "YellowPages domain to use. Default is `www.yellowpages.com`.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "search"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "www.yellowpages.com",
                        "value": "www.yellowpages.com"
                    },
                    {
                        "name": "www.yellowpages.ca",
                        "value": "www.yellowpages.ca"
                    }
                ]
            }
        ]
    }
];
