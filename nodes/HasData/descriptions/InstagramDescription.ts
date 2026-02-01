import { INodeProperties } from 'n8n-workflow';

export const instagramOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['instagram'],
			},
		},
		options: [
    {
        "name": "Get Instagram Profile",
        "value": "profile",
        "description": "Retrieves public profile details for a specific Instagram account using its handle.",
        "action": "Get Instagram Profile"
    }
],
		default: 'profile',
	},
];

export const instagramFields: INodeProperties[] = [
    {
        "displayName": "Instagram Handle",
        "name": "handle",
        "type": "string",
        "default": "",
        "description": "The Instagram username of the profile you want to scrape, without the `@` symbol.",
        "displayOptions": {
            "show": {
                "resource": [
                    "instagram"
                ],
                "operation": [
                    "profile"
                ]
            }
        }
    }
];
