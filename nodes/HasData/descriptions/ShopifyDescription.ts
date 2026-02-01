import { INodeProperties } from 'n8n-workflow';

export const shopifyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['shopify'],
			},
		},
		options: [
    {
        "name": "Get Shopify Store Collections",
        "value": "collections",
        "description": "Retrieves a list of collections along with their details from a Shopify store.",
        "action": "Get Shopify Store Collections"
    },
    {
        "name": "Get Shopify Store Products",
        "value": "products",
        "description": "Retrieves product information from a Shopify store with optional limits and collection filtering.",
        "action": "Get Shopify Store Products"
    }
],
		default: undefined,
	},
];

export const shopifyFields: INodeProperties[] = [
    {
        "displayName": "Store URL",
        "name": "url",
        "type": "string",
        "default": "",
        "description": "The URL of the Shopify store. For example, 'https://b2bdemoexperience.myshopify.com'.",
        "displayOptions": {
            "show": {
                "resource": [
                    "shopify"
                ],
                "operation": [
                    "collections",
                    "products"
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
                    "shopify"
                ],
                "operation": [
                    "collections",
                    "products"
                ]
            }
        },
        "options": [
            {
                "displayName": "Results Limit",
                "name": "limit",
                "type": "number",
                "default": "",
                "description": "The maximum number of collections to retrieve. Must be between 1 and 250.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "collections",
                            "products"
                        ]
                    }
                }
            },
            {
                "displayName": "Page",
                "name": "page",
                "type": "number",
                "default": 1,
                "description": "The page number of the results to retrieve. Must be a positive integer.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "collections",
                            "products"
                        ]
                    }
                }
            },
            {
                "displayName": "Collection",
                "name": "collection",
                "type": "string",
                "default": "",
                "description": "The handle of the collection to filter the products. Provide the collection handle as a string.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "products"
                        ]
                    }
                }
            }
        ]
    }
];
