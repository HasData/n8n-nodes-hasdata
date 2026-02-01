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
        "name": "Get GlassDoor Job Details",
        "value": "job",
        "description": "Retrieves detailed information about a specific job listing based on the provided vacancy URL.",
        "action": "Get GlassDoor Job Details"
    },
    {
        "name": "Get GlassDoor Job Listings",
        "value": "listing",
        "description": "Retrieves job listings from Glassdoor based on various search parameters.",
        "action": "Get GlassDoor Job Listings"
    }
],
		default: undefined,
	},
];

export const glassdoorFields: INodeProperties[] = [
    {
        "displayName": "Job URL",
        "name": "url",
        "type": "string",
        "default": "",
        "description": "The URL of the job vacancy to retrieve details for.",
        "displayOptions": {
            "show": {
                "resource": [
                    "glassdoor"
                ],
                "operation": [
                    "job"
                ]
            }
        }
    },
    {
        "displayName": "Search Query",
        "name": "keyword",
        "type": "string",
        "default": "",
        "description": "The keyword used to search for job listings.",
        "displayOptions": {
            "show": {
                "resource": [
                    "glassdoor"
                ],
                "operation": [
                    "listing"
                ]
            }
        }
    },
    {
        "displayName": "Location",
        "name": "location",
        "type": "string",
        "default": "",
        "description": "The location to search for job listings.",
        "displayOptions": {
            "show": {
                "resource": [
                    "glassdoor"
                ],
                "operation": [
                    "listing"
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
                    "glassdoor"
                ],
                "operation": [
                    "listing"
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
                            "listing"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "recent",
                        "value": "recent"
                    },
                    {
                        "name": "relevant",
                        "value": "relevant"
                    }
                ]
            },
            {
                "displayName": "Next Page Token",
                "name": "nextPageToken",
                "type": "string",
                "default": "",
                "description": "Token for fetching the next page of jobs.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "domain",
                "name": "domain",
                "type": "options",
                "default": "www.glassdoor.com",
                "description": "The domain of the Glassdoor site (optional).",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "www.glassdoor.com.ar",
                        "value": "www.glassdoor.com.ar"
                    },
                    {
                        "name": "www.glassdoor.com.au",
                        "value": "www.glassdoor.com.au"
                    },
                    {
                        "name": "www.glassdoor.at",
                        "value": "www.glassdoor.at"
                    },
                    {
                        "name": "nl.glassdoor.be",
                        "value": "nl.glassdoor.be"
                    },
                    {
                        "name": "fr.glassdoor.be",
                        "value": "fr.glassdoor.be"
                    },
                    {
                        "name": "www.glassdoor.com.br",
                        "value": "www.glassdoor.com.br"
                    },
                    {
                        "name": "www.glassdoor.ca",
                        "value": "www.glassdoor.ca"
                    },
                    {
                        "name": "fr.glassdoor.ca",
                        "value": "fr.glassdoor.ca"
                    },
                    {
                        "name": "www.glassdoor.fr",
                        "value": "www.glassdoor.fr"
                    },
                    {
                        "name": "www.glassdoor.de",
                        "value": "www.glassdoor.de"
                    },
                    {
                        "name": "www.glassdoor.com.hk",
                        "value": "www.glassdoor.com.hk"
                    },
                    {
                        "name": "www.glassdoor.co.in",
                        "value": "www.glassdoor.co.in"
                    },
                    {
                        "name": "www.glassdoor.ie",
                        "value": "www.glassdoor.ie"
                    },
                    {
                        "name": "www.glassdoor.it",
                        "value": "www.glassdoor.it"
                    },
                    {
                        "name": "www.glassdoor.com.mx",
                        "value": "www.glassdoor.com.mx"
                    },
                    {
                        "name": "www.glassdoor.nl",
                        "value": "www.glassdoor.nl"
                    },
                    {
                        "name": "www.glassdoor.co.nz",
                        "value": "www.glassdoor.co.nz"
                    },
                    {
                        "name": "www.glassdoor.sg",
                        "value": "www.glassdoor.sg"
                    },
                    {
                        "name": "www.glassdoor.es",
                        "value": "www.glassdoor.es"
                    },
                    {
                        "name": "de.glassdoor.ch",
                        "value": "de.glassdoor.ch"
                    },
                    {
                        "name": "fr.glassdoor.ch",
                        "value": "fr.glassdoor.ch"
                    },
                    {
                        "name": "www.glassdoor.co.uk",
                        "value": "www.glassdoor.co.uk"
                    }
                ]
            }
        ]
    }
];
