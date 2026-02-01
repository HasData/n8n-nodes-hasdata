import { INodeProperties } from 'n8n-workflow';

export const redfinOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['redfin'],
			},
		},
		options: [
    {
        "name": "Get Redfin Real Estate Listings",
        "value": "listing",
        "description": "Retrieves real estate listings from Redfin based on various search parameters.",
        "action": "Get Redfin Real Estate Listings"
    },
    {
        "name": "Get Redfin Property Details",
        "value": "property",
        "description": "Retrieves detailed information about a specific property from Redfin using the property's URL.",
        "action": "Get Redfin Property Details"
    }
],
		default: 'listing',
	},
];

export const redfinFields: INodeProperties[] = [
    {
        "displayName": "Location",
        "name": "keyword",
        "type": "string",
        "default": "",
        "description": "The zipcode used to search for listings.",
        "displayOptions": {
            "show": {
                "resource": [
                    "redfin"
                ],
                "operation": [
                    "listing"
                ]
            }
        }
    },
    {
        "displayName": "Listing Type",
        "name": "type",
        "type": "options",
        "default": "",
        "description": "The type of listing.",
        "displayOptions": {
            "show": {
                "resource": [
                    "redfin"
                ],
                "operation": [
                    "listing"
                ]
            }
        },
        "options": [
            {
                "name": "forSale",
                "value": "forSale"
            },
            {
                "name": "forRent",
                "value": "forRent"
            },
            {
                "name": "sold",
                "value": "sold"
            }
        ]
    },
    {
        "displayName": "Property URL",
        "name": "url",
        "type": "string",
        "default": "",
        "description": "The URL of the property on Redfin. Must be a valid Redfin property URL.",
        "displayOptions": {
            "show": {
                "resource": [
                    "redfin"
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
                    "redfin"
                ],
                "operation": [
                    "listing"
                ]
            }
        },
        "options": [
            {
                "displayName": "Page",
                "name": "page",
                "type": "number",
                "default": "",
                "description": "The page number of the results to retrieve.",
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
