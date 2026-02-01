import { INodeProperties } from 'n8n-workflow';

export const airbnbOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['airbnb'],
			},
		},
		options: [
    {
        "name": "Get Airbnb Listings",
        "value": "listing",
        "description": "Retrieves Airbnb listings based on location and check-in/check-out dates.",
        "action": "Get Airbnb Listings"
    },
    {
        "name": "Get Airbnb Property Details",
        "value": "property",
        "description": "Retrieves detailed information about a specific Airbnb listing using the listing's URL.",
        "action": "Get Airbnb Property Details"
    }
],
		default: 'listing',
	},
];

export const airbnbFields: INodeProperties[] = [
    {
        "displayName": "Location",
        "name": "location",
        "type": "string",
        "default": "",
        "description": "The location to search for listings.",
        "displayOptions": {
            "show": {
                "resource": [
                    "airbnb"
                ],
                "operation": [
                    "listing"
                ]
            }
        }
    },
    {
        "displayName": "Check-in Date",
        "name": "checkIn",
        "type": "string",
        "default": "",
        "description": "The check-in date for the listings.",
        "displayOptions": {
            "show": {
                "resource": [
                    "airbnb"
                ],
                "operation": [
                    "listing"
                ]
            }
        }
    },
    {
        "displayName": "Property URL",
        "name": "url",
        "type": "string",
        "default": "",
        "description": "The URL of the Airbnb listing. Must be a valid Airbnb listing URL.",
        "displayOptions": {
            "show": {
                "resource": [
                    "airbnb"
                ],
                "operation": [
                    "property"
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
                    "airbnb"
                ],
                "operation": [
                    "listing"
                ]
            }
        },
        "options": [
            {
                "displayName": "Check-out Date",
                "name": "checkOut",
                "type": "string",
                "default": "",
                "description": "The check-out date for the listings.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Number of Adults",
                "name": "adults",
                "type": "number",
                "default": "",
                "description": "Number of adults.\n",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Number of Children",
                "name": "children",
                "type": "number",
                "default": "",
                "description": "Number of children.\n",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Number of Infants",
                "name": "infants",
                "type": "number",
                "default": "",
                "description": "Number of infants.\n",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Number of Pets",
                "name": "pets",
                "type": "number",
                "default": "",
                "description": "Number of pets.\n",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Next Page Token",
                "name": "nextPageToken",
                "type": "string",
                "default": "",
                "description": "The token used to retrieve the next page of results.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            }
        ]
    }
];
