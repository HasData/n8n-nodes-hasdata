# n8n-nodes-hasdata

This is an n8n community node. It lets you use [HasData](https://hasdata.com) in your n8n workflows.

HasData is a powerful web scraping API that provides access to various search engines and website data through easy-to-use endpoints. It handles proxies, browsers, and CAPTCHAs so you can focus on the data you need.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node supports a wide range of web scraping operations across various platforms:

* **Google SERP**: Get search results, light results, shopping, news, short videos, events, AI mode, and AI overview.
* **Google Maps**: Search for places, get place details, photos, reviews, and contributor reviews.
* **Amazon**: Search products and get product details.
* **Web Scraping**: Scrape any web page with customizable parameters (JS rendering, premium proxies, etc.).
* **Social Media**: Instagram (profile).
* **Real Estate**: Zillow, Redfin.
* **Jobs**: Indeed, Glassdoor.
* **Business Directories**: Yellow Pages, Yelp.
* **E-commerce**: Shopify.
* **Other**: Google Images, Google Travel, Google Trends, Bing Search, Airbnb.

## Credentials

To use this node, you'll need a **HasData API Key**.

1.  Sign up for an account at [HasData](https://hasdata.com).
2.  Go to your [Dashboard](https://dashboard.hasdata.com) to find your API Key.
3.  In n8n, add a new credential of type **HasData API** and paste your key.

## Compatibility

- Minimum n8n version: 1.0.0
- Tested against n8n version: 1.0.0+

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [HasData API Documentation](https://docs.hasdata.com)
* [HasData Homepage](https://hasdata.com)
