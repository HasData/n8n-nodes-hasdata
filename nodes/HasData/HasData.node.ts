
import {
    IDataObject,
    IExecuteFunctions,
    IHttpRequestMethods,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

import { airbnbFields, airbnbOperations } from './descriptions/AirbnbDescription';
import { amazonFields, amazonOperations } from './descriptions/AmazonDescription';
import { bingFields, bingOperations } from './descriptions/BingDescription';
import { glassdoorFields, glassdoorOperations } from './descriptions/GlassdoorDescription';
import { googleImagesFields, googleImagesOperations } from './descriptions/GoogleImagesDescription';
import { googleMapsFields, googleMapsOperations } from './descriptions/GoogleMapsDescription';
import { googleSerpFields, googleSerpOperations } from './descriptions/GoogleSerpDescription';
import { googleTravelFields, googleTravelOperations } from './descriptions/GoogleTravelDescription';
import { googleTrendsFields, googleTrendsOperations } from './descriptions/GoogleTrendsDescription';
import { indeedFields, indeedOperations } from './descriptions/IndeedDescription';
import { instagramFields, instagramOperations } from './descriptions/InstagramDescription';
import { redfinFields, redfinOperations } from './descriptions/RedfinDescription';
import { shopifyFields, shopifyOperations } from './descriptions/ShopifyDescription';
import { webScrapingFields, webScrapingOperations } from './descriptions/WebScrapingDescription';
import { yellowpagesFields, yellowpagesOperations } from './descriptions/YellowpagesDescription';
import { yelpFields, yelpOperations } from './descriptions/YelpDescription';
import { zillowFields, zillowOperations } from './descriptions/ZillowDescription';

export class HasData implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'HasData',
        name: 'hasData',
        icon: 'file:hasdata.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Scrape data from various websites',
        defaults: {
            name: 'HasData',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'hasDataApi',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Google SERP',
                        value: 'google_serp',
                    },
                    {
                        name: 'Google Map',
                        value: 'google_maps',
                    },
                    {
                        name: 'Zillow',
                        value: 'zillow',
                    },
                    {
                        name: 'Amazon',
                        value: 'amazon',
                    },
                    {
                        name: 'Yellow Page',
                        value: 'yellowpages',
                    },
                    {
                        name: 'Web Scraping',
                        value: 'web_scraping',
                    },
                    {
                        name: 'Glassdoor',
                        value: 'glassdoor',
                    },
                    {
                        name: 'Indeed',
                        value: 'indeed',
                    },
                    {
                        name: 'Instagram',
                        value: 'instagram',
                    },
                    {
                        name: 'Airbnb',
                        value: 'airbnb',
                    },
                    {
                        name: 'Google Image',
                        value: 'google_images',
                    },
                    {
                        name: 'Google Travel',
                        value: 'google_travel',
                    },
                    {
                        name: 'Google Trend',
                        value: 'google_trends',
                    },
                    {
                        name: 'Shopify',
                        value: 'shopify',
                    },
                    {
                        name: 'Redfin',
                        value: 'redfin',
                    },
                    {
                        name: 'Yelp',
                        value: 'yelp',
                    },
                    {
                        name: 'Bing',
                        value: 'bing',
                    },
                ],
                default: 'google_serp',
            },

            // Operations
            ...googleSerpOperations,
            ...googleMapsOperations,
            ...zillowOperations,
            ...amazonOperations,
            ...airbnbOperations,
            ...glassdoorOperations,
            ...webScrapingOperations,
            ...yellowpagesOperations,
            ...yelpOperations,
            ...instagramOperations,
            ...googleImagesOperations,
            ...googleTravelOperations,
            ...googleTrendsOperations,
            ...indeedOperations,
            ...redfinOperations,
            ...shopifyOperations,
            ...bingOperations,

            // Fields
            ...airbnbFields,
            ...amazonFields,
            ...bingFields,
            ...glassdoorFields,
            ...googleImagesFields,
            ...googleMapsFields,
            ...googleSerpFields,
            ...googleTravelFields,
            ...googleTrendsFields,
            ...indeedFields,
            ...instagramFields,
            ...redfinFields,
            ...shopifyFields,
            ...webScrapingFields,
            ...yellowpagesFields,
            ...yelpFields,
            ...zillowFields,
        ],
        usableAsTool: true,
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: IDataObject[] = [];
        const resource = this.getNodeParameter('resource', 0) as string;
        const operation = this.getNodeParameter('operation', 0) as string;

        for (let i = 0; i < items.length; i++) {
            try {
                let endpoint = '';
                let method: IHttpRequestMethods = 'GET';
                const qs: IDataObject = {};
                const body: IDataObject = {};

                // Endpoint Logic
                const opKebab = operation.replace(/_/g, '-');
                if (resource === 'google_serp' || resource === 'google_images') {
                    endpoint = `/scrape/google/${opKebab}`;
                } else if (resource === 'google_travel') {
                    endpoint = `/scrape/google/${opKebab}`;
                } else if (resource === 'google_maps') {
                    endpoint = `/scrape/google-maps/${opKebab}`;
                } else if (resource === 'google_trends') {
                    endpoint = `/scrape/google-trends/${opKebab}`;
                } else if (resource === 'web_scraping') {
                    endpoint = '/scrape/web';
                } else {
                    // Default pattern
                    const resourceKebab = resource.replace(/_/g, '-');
                    endpoint = `/scrape/${resourceKebab}/${opKebab}`;
                }

                // Parameter Handling
                // We need to fetch parameters dynamically based on the resource fields
                let relevantFields: any[] = [];
                if (resource === 'airbnb') relevantFields = airbnbFields;
                else if (resource === 'amazon') relevantFields = amazonFields;
                else if (resource === 'bing') relevantFields = bingFields;
                else if (resource === 'glassdoor') relevantFields = glassdoorFields;
                else if (resource === 'google_images') relevantFields = googleImagesFields;
                else if (resource === 'google_maps') relevantFields = googleMapsFields;
                else if (resource === 'google_serp') relevantFields = googleSerpFields;
                else if (resource === 'google_travel') relevantFields = googleTravelFields;
                else if (resource === 'google_trends') relevantFields = googleTrendsFields;
                else if (resource === 'indeed') relevantFields = indeedFields;
                else if (resource === 'instagram') relevantFields = instagramFields;
                else if (resource === 'redfin') relevantFields = redfinFields;
                else if (resource === 'shopify') relevantFields = shopifyFields;
                else if (resource === 'web_scraping') relevantFields = webScrapingFields;
                else if (resource === 'yellowpages') relevantFields = yellowpagesFields;
                else if (resource === 'yelp') relevantFields = yelpFields;
                else if (resource === 'zillow') relevantFields = zillowFields;

                for (const field of relevantFields) {
                    const fieldName = field.name;

                    // Skip the additionalFields collection itself  
                    if (fieldName === 'additionalFields') continue;

                    try {
                        const value = this.getNodeParameter(fieldName, i);
                        if (value !== '' && value !== undefined && value !== null) {
                            const originalName = fieldName.replace(/__opt__/g, '[').replace(/__clt__/g, ']');
                            qs[originalName] = value;
                        }
                    } catch (e) {
                        // Param not displayed/found
                    }
                }

                // Handle additionalFields collection
                try {
                    const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
                    if (additionalFields && Object.keys(additionalFields).length > 0) {
                        for (const key of Object.keys(additionalFields)) {
                            const originalKey = key.replace(/__opt__/g, '[').replace(/__clt__/g, ']');
                            qs[originalKey] = additionalFields[key];
                        }
                    }
                } catch (e) {
                    // additionalFields not found
                }

                // Special handling for Web Scraping (POST)
                if (resource === 'webScraping') {
                    method = 'POST';
                    Object.assign(body, qs);
                    // Clear qs to avoid sending double params? 
                    // However, I declared qs as const (wait, I should use let if I want to clear it, or just use separate object).
                    // In this logic, I used const qs = {}. modifying content is allowed.
                    // But deleting keys?
                    for (const key in qs) {
                        delete qs[key];
                    }
                }

                const response = await this.helpers.requestWithAuthentication.call(this, 'hasDataApi', {
                    method,
                    baseURL: 'https://api.hasdata.com',
                    url: endpoint,
                    qs,
                    body: method === 'POST' ? body : undefined,
                    json: true,
                });

                const executionData = this.helpers.constructExecutionMetaData(
                    this.helpers.returnJsonArray(response as IDataObject[]),
                    { itemData: { item: i } },
                );
                returnData.push(...executionData);

            } catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ json: { error: error.message } });
                    continue;
                }
                throw error;
            }
        }

        return [returnData as INodeExecutionData[]];
    }
}
