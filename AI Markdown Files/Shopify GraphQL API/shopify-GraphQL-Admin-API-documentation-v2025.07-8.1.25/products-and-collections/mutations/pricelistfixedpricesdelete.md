---
title: "priceListFixedPricesDelete"
description: "Shopify GraphQL Admin API documentation for pricelistfixedpricesdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: priceListFixedPricesDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete

Markdown Content:
priceListFixedPricesDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete#main-content)

[![Image 1: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

*   [Apps](https://shopify.dev/docs/apps/build)
*   [Storefronts](https://shopify.dev/docs/storefronts)
*   APIs and references

*   search + assistant

[Log in](https://partners.shopify.com/organizations?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)[Sign up](https://partners.shopify.com/signup/developer?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)

.dev Assistant

Shopify uses cookies to provide necessary site functionality and improve your experience. By using our website, you agree to our [privacy policy](https://www.shopify.com/legal/privacy) and our [cookie policy](https://www.shopify.com/legal/cookies).

OK

Opens in a new window

Expand sidebar

GraphQL Admin API

Choose a version: 

2025-07 latest

*   [Overview](https://shopify.dev/docs/api/admin-graphql/latest)
*   [Client libraries](https://shopify.dev/docs/api/admin-graphql/latest#client-libraries)
*   [Authentication](https://shopify.dev/docs/api/admin-graphql/latest#authentication)
*   [Endpoints and queries](https://shopify.dev/docs/api/admin-graphql/latest#endpoints-and-queries)
*   [Rate limits](https://shopify.dev/docs/api/admin-graphql/latest#rate-limits)
*   [Status and error codes](https://shopify.dev/docs/api/admin-graphql/latest#status-and-error-codes)

* * *

*   Access   
*   Apps   
*   B2B   
*   Billing   
*   Bulk operations   
*   Cart   
*   Checkout branding   
*   Common objects   
*   Customers   
*   Discounts and marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online store   
*   Orders   
*   Privacy   
*   
Products and collections

    *   Queries   
    *   
Mutations

        *   [catalog Context Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogcontextupdate)
        *   [catalog Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogcreate)
        *   [catalog Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogdelete)
        *   [catalog Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/catalogupdate)
        *   [collection Add Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionaddproducts)
        *   [collection Add Products V2](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionaddproductsv2)
        *   [collection Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate)
        *   [collection Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectiondelete)
        *   [collection Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionpublish)
        *   [collection Remove Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionremoveproducts)
        *   [collection Reorder Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionreorderproducts)
        *   [collection Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionunpublish)
        *   [collection Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionupdate)
        *   [combined Listing Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/combinedlistingupdate)
        *   [file Acknowledge Update Failed](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileacknowledgeupdatefailed)
        *   [file Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filecreate)
        *   [file Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/filedelete)
        *   [file Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileupdate)
        *   [price List Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistcreate)
        *   [price List Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistdelete)
        *   [price List Fixed Prices Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesadd)
        *   [price List Fixed Prices By Product Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesbyproductupdate)
        *   [price List Fixed Prices Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete)
        *   [price List Fixed Prices Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesupdate)
        *   [price List Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate)
        *   [product Bundle Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productbundlecreate)
        *   [product Bundle Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productbundleupdate)
        *   [product Change Status](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productchangestatus)
        *   [product Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate)
        *   [product Create Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreatemedia)
        *   [product Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete)
        *   [product Delete Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdeletemedia)
        *   [product Duplicate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productduplicate)
        *   [product Join Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productjoinsellingplangroups)
        *   [product Leave Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productleavesellingplangroups)
        *   [product Options Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionscreate)
        *   [product Options Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsdelete)
        *   [product Options Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionsreorder)
        *   [product Option Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productoptionupdate)
        *   [product Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productpublish)
        *   [product Reorder Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productreordermedia)
        *   [product Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productset)
        *   [product Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productunpublish)
        *   [product Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate)
        *   [product Update Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia)
        *   [product Variant Append Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia)
        *   [product Variant Detach Media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantdetachmedia)
        *   [product Variant Join Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantjoinsellingplangroups)
        *   [product Variant Leave Selling Plan Groups](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantleavesellingplangroups)
        *   [product Variant Relationship Bulk Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantrelationshipbulkupdate)
        *   [product Variants Bulk Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkcreate)
        *   [product Variants Bulk Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkdelete)
        *   [product Variants Bulk Reorder](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkreorder)
        *   [product Variants Bulk Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantsbulkupdate)
        *   [quantity Pricing By Variant Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantitypricingbyvariantupdate)
        *   [quantity Rules Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesadd)
        *   [quantity Rules Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/quantityrulesdelete)
        *   [selling Plan Group Add Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupaddproducts)
        *   [selling Plan Group Add Product Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupaddproductvariants)
        *   [selling Plan Group Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupcreate)
        *   [selling Plan Group Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupdelete)
        *   [selling Plan Group Remove Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupremoveproducts)
        *   [selling Plan Group Remove Product Variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupremoveproductvariants)
        *   [selling Plan Group Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/sellingplangroupupdate)
        *   [staged Uploads Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate)

    *   Objects   

*   Retail   
*   Shipping and fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to priceListFixedPricesDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete#top)
price List Fixed Prices Delete
==============================

mutation

Requires `write_products` access scope. Also: The user must have permission to delete catalogs.

Deletes specific fixed prices from a price list using a product variant ID. You can use the `priceListFixedPricesDelete` mutation to delete a set of fixed prices from a price list. After deleting the set of fixed prices from the price list, the price of each product variant reverts to the original price that was determined by the price list adjustment.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete#arguments)
Arguments
---------

[Anchor to priceListId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete#arguments-priceListId)price List Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the price list from which the fixed prices will be removed.

[Anchor to variantIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete#arguments-variantIds)variant Ids

•[[ID!]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

A list of product variant IDs whose fixed prices will be removed from the price list.

* * *

Was this section helpful?

Yes No

[Anchor to PriceListFixedPricesDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete#returns)Price List Fixed Prices Delete Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedFixedPriceVariantIds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete#returns-deletedFixedPriceVariantIds)deleted Fixed Price Variant Ids

•[[ID!]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

A list of product variant IDs whose fixed prices were removed from the price list.

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesdelete#returns-userErrors)user Errors

•[[Price List Price User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete multiple fixed prices from a price list

#### Description

Delete fixed prices for two product variants.

#### Query

```graphql
mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
  priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
    deletedFixedPriceVariantIds
    userErrors {
      field
      code
      message
    }
  }
}
``` #### Variables

```json
{
  "priceListId": "gid://shopify/PriceList/294167858",
  "variantIds": [
    "gid://shopify/ProductVariant/498744621",
    "gid://shopify/ProductVariant/113711323"
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) { priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) { deletedFixedPriceVariantIds userErrors { field code message } } }",
 "variables": {
    "priceListId": "gid://shopify/PriceList/294167858",
    "variantIds": [
      "gid://shopify/ProductVariant/498744621",
      "gid://shopify/ProductVariant/113711323"
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
    priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
      deletedFixedPriceVariantIds
      userErrors {
        field
        code
        message
      }
    }
  }`,
  {
    variables: {
        "priceListId": "gid://shopify/PriceList/294167858",
        "variantIds": [
            "gid://shopify/ProductVariant/498744621",
            "gid://shopify/ProductVariant/113711323"
        ]
    },
  },
);

const data = await response.json();
``` #### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
    priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
      deletedFixedPriceVariantIds
      userErrors {
        field
        code
        message
      }
    }
  }
QUERY

variables = {
  "priceListId": "gid://shopify/PriceList/294167858",
  "variantIds": [
    "gid://shopify/ProductVariant/498744621",
    "gid://shopify/ProductVariant/113711323"
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
      priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
        deletedFixedPriceVariantIds
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "priceListId": "gid://shopify/PriceList/294167858",
        "variantIds": [
            "gid://shopify/ProductVariant/498744621",
            "gid://shopify/ProductVariant/113711323"
        ]
    },
  },
});
``` #### Response

```json
{
  "priceListFixedPricesDelete": {
    "deletedFixedPriceVariantIds": [
      "gid://shopify/ProductVariant/113711323",
      "gid://shopify/ProductVariant/498744621"
    ],
    "userErrors": []
  }
}
``` 
*   ### priceListFixedPricesDelete reference

Examples
--------

Delete multiple fixed prices from a price list

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20priceListFixedPricesDelete(%24priceListId%3A%20ID!%2C%20%24variantIds%3A%20%5BID!%5D!)%20%7B%0A%20%20priceListFixedPricesDelete(priceListId%3A%20%24priceListId%2C%20variantIds%3A%20%24variantIds)%20%7B%0A%20%20%20%20deletedFixedPriceVariantIds%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22priceListId%22%3A%20%22gid%3A%2F%2Fshopify%2FPriceList%2F294167858%22%2C%0A%20%20%22variantIds%22%3A%20%5B%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F498744621%22%2C%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F113711323%22%0A%20%20%5D%0A%7D)Copy

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

›

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {

 priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {

 deletedFixedPriceVariantIds

 userErrors {

 field

 code

 message

 }

 }

 }`,

{

variables:{

"priceListId":"gid://shopify/PriceList/294167858",

"variantIds":[

"gid://shopify/ProductVariant/498744621",

"gid://shopify/ProductVariant/113711323"

]

},

},

);

const data=await response.json();

```
mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
  priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
    deletedFixedPriceVariantIds
    userErrors {
      field
      code
      message
    }
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) { priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) { deletedFixedPriceVariantIds userErrors { field code message } } }",
 "variables": {
    "priceListId": "gid://shopify/PriceList/294167858",
    "variantIds": [
      "gid://shopify/ProductVariant/498744621",
      "gid://shopify/ProductVariant/113711323"
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
    priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
      deletedFixedPriceVariantIds
      userErrors {
        field
        code
        message
      }
    }
  }`,
  {
    variables: {
        "priceListId": "gid://shopify/PriceList/294167858",
        "variantIds": [
            "gid://shopify/ProductVariant/498744621",
            "gid://shopify/ProductVariant/113711323"
        ]
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
      priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
        deletedFixedPriceVariantIds
        userErrors {
          field
          code
          message
        }
      }
    }`,
    "variables": {
        "priceListId": "gid://shopify/PriceList/294167858",
        "variantIds": [
            "gid://shopify/ProductVariant/498744621",
            "gid://shopify/ProductVariant/113711323"
        ]
    },
  },
});
```

```
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  mutation priceListFixedPricesDelete($priceListId: ID!, $variantIds: [ID!]!) {
    priceListFixedPricesDelete(priceListId: $priceListId, variantIds: $variantIds) {
      deletedFixedPriceVariantIds
      userErrors {
        field
        code
        message
      }
    }
  }
QUERY

variables = {
  "priceListId": "gid://shopify/PriceList/294167858",
  "variantIds": [
    "gid://shopify/ProductVariant/498744621",
    "gid://shopify/ProductVariant/113711323"
  ]
}

response = client.query(query: query, variables: variables)
```

Hide content

Input variables
---------------

JSON

Copy

9

1

2

3

4

5

6

7

›

⌄

⌄

{

"priceListId": "gid://shopify/PriceList/294167858",

"variantIds": [

"gid://shopify/ProductVariant/498744621",

"gid://shopify/ProductVariant/113711323"

]

}

Hide content

Response
--------

JSON

9

1

2

3

4

5

6

7

8

9

›

⌄

⌄

⌄

{

"priceListFixedPricesDelete": {

"deletedFixedPriceVariantIds": [

"gid://shopify/ProductVariant/113711323",

"gid://shopify/ProductVariant/498744621"

],

"userErrors": []

}

}


---
*Content truncated at "Updates" section*