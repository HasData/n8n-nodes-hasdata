import { INodeProperties } from 'n8n-workflow';

export const zillowOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['zillow'],
			},
		},
		options: [
    {
        "name": "Get Zillow Real Estate Listings",
        "value": "listing",
        "description": "Retrieves real estate listings from Zillow based on various search parameters.",
        "action": "Get Zillow Real Estate Listings"
    },
    {
        "name": "Get Zillow Property Details",
        "value": "property",
        "description": "Retrieves detailed information about a specific property from Zillow using the property's URL.",
        "action": "Get Zillow Property Details"
    }
],
		default: 'listing',
	},
];

export const zillowFields: INodeProperties[] = [
    {
        "displayName": "Location",
        "name": "keyword",
        "type": "string",
        "default": "",
        "description": "The keyword used to search for listings.",
        "displayOptions": {
            "show": {
                "resource": [
                    "zillow"
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
                    "zillow"
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
        "description": "The URL of the property on Zillow. Must be a valid Zillow property URL.",
        "displayOptions": {
            "show": {
                "resource": [
                    "zillow"
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
                    "zillow"
                ],
                "operation": [
                    "listing",
                    "property"
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
                        "name": "verifiedSource",
                        "value": "verifiedSource"
                    },
                    {
                        "name": "homesForYou",
                        "value": "homesForYou"
                    },
                    {
                        "name": "priceHighToLow",
                        "value": "priceHighToLow"
                    },
                    {
                        "name": "priceLowToHigh",
                        "value": "priceLowToHigh"
                    },
                    {
                        "name": "paymentHighToLow",
                        "value": "paymentHighToLow"
                    },
                    {
                        "name": "paymentLowToHigh",
                        "value": "paymentLowToHigh"
                    },
                    {
                        "name": "newest",
                        "value": "newest"
                    },
                    {
                        "name": "bedrooms",
                        "value": "bedrooms"
                    },
                    {
                        "name": "bathrooms",
                        "value": "bathrooms"
                    },
                    {
                        "name": "squareFeet",
                        "value": "squareFeet"
                    },
                    {
                        "name": "lotSize",
                        "value": "lotSize"
                    }
                ]
            },
            {
                "displayName": "Extract Agent Emails",
                "name": "extractAgentEmails",
                "type": "boolean",
                "default": false,
                "description": "If enabled, attempts to extract agent email addresses from the property details. Increases the cost of the request.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "property"
                        ]
                    }
                }
            },
            {
                "displayName": "Price Min",
                "name": "price__opt__min__clt__",
                "type": "number",
                "default": "",
                "description": "The minimum price of the listing.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Price Max",
                "name": "price__opt__max__clt__",
                "type": "number",
                "default": "",
                "description": "The maximum price of the listing.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Home Types",
                "name": "homeTypes__opt____clt__",
                "type": "string",
                "default": "",
                "description": "An array of home types to filter the listings.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Beds Min",
                "name": "beds__opt__min__clt__",
                "type": "number",
                "default": "",
                "description": "The minimum number of bedrooms.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Beds Max",
                "name": "beds__opt__max__clt__",
                "type": "number",
                "default": "",
                "description": "The maximum number of bedrooms.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Baths Min",
                "name": "baths__opt__min__clt__",
                "type": "number",
                "default": "",
                "description": "The minimum number of bathrooms.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Baths Max",
                "name": "baths__opt__max__clt__",
                "type": "number",
                "default": "",
                "description": "The maximum number of bathrooms.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Year Built Min",
                "name": "yearBuilt__opt__min__clt__",
                "type": "number",
                "default": "",
                "description": "The minimum year the property was built.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Year Built Max",
                "name": "yearBuilt__opt__max__clt__",
                "type": "number",
                "default": "",
                "description": "The maximum year the property was built.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Lot Size Min",
                "name": "lotSize__opt__min__clt__",
                "type": "number",
                "default": "",
                "description": "The minimum lot size.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Lot Size Max",
                "name": "lotSize__opt__max__clt__",
                "type": "number",
                "default": "",
                "description": "The maximum lot size.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Square Feet Min",
                "name": "squareFeet__opt__min__clt__",
                "type": "number",
                "default": "",
                "description": "The minimum square footage.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Square Feet Max",
                "name": "squareFeet__opt__max__clt__",
                "type": "number",
                "default": "",
                "description": "The maximum square footage.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Listing Category",
                "name": "listingType",
                "type": "options",
                "default": "",
                "description": "The category of the listing.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                },
                "options": [
                    {
                        "name": "byAgent",
                        "value": "byAgent"
                    },
                    {
                        "name": "byOwner",
                        "value": "byOwner"
                    }
                ]
            },
            {
                "displayName": "Listing Publish Options",
                "name": "listingPublishOptions__opt____clt__",
                "type": "string",
                "default": "",
                "description": "An array of listing publish options.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Property Status",
                "name": "propertyStatus__opt____clt__",
                "type": "string",
                "default": "",
                "description": "An array of property statuses.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Tours",
                "name": "tours__opt____clt__",
                "type": "string",
                "default": "",
                "description": "An array of tour options.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Other Amenities",
                "name": "otherAmenities__opt____clt__",
                "type": "string",
                "default": "",
                "description": "An array of other amenities.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Views",
                "name": "views__opt____clt__",
                "type": "string",
                "default": "",
                "description": "An array of views.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "pets",
                "name": "pets__opt____clt__",
                "type": "string",
                "default": "",
                "description": "An array of pet options.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Basement",
                "name": "basement__opt____clt__",
                "type": "string",
                "default": "",
                "description": "An array of basement options.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Single Story Only",
                "name": "singleStoryOnly",
                "type": "boolean",
                "default": false,
                "description": "If set to true, only single-story properties will be included.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Hide 55+ Communities",
                "name": "hide55plusCommunities",
                "type": "boolean",
                "default": false,
                "description": "If set to true, 55+ communities will be excluded.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Days on Zillow",
                "name": "daysOnZillow",
                "type": "string",
                "default": "",
                "description": "The number of days a listing has been on Zillow.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Move In Date",
                "name": "moveInDate",
                "type": "string",
                "default": "",
                "description": "The desired move-in date.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "HOA",
                "name": "hoa",
                "type": "number",
                "default": "",
                "description": "The Homeowners Association (HOA) fee.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Must Have Garage",
                "name": "mustHaveGarage",
                "type": "boolean",
                "default": false,
                "description": "If set to true, only listings with a garage will be included.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Parking Spots Min",
                "name": "parkingSpotsMin",
                "type": "number",
                "default": "",
                "description": "The minimum number of parking spots.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Additional Keywords",
                "name": "keywords",
                "type": "string",
                "default": "",
                "description": "Additional keywords to refine the search.",
                "displayOptions": {
                    "show": {
                        "/operation": [
                            "listing"
                        ]
                    }
                }
            },
            {
                "displayName": "Page Number",
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
