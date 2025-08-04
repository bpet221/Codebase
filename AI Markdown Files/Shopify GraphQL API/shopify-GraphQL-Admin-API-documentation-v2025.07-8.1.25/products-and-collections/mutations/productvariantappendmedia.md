---
title: "productVariantAppendMedia"
description: "Shopify GraphQL Admin API documentation for productvariantappendmedia"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productVariantAppendMedia - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia

Markdown Content:
productVariantAppendMedia - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia#main-content)

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

[Anchor to productVariantAppendMedia](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia#top)
product Variant Append Media
============================

mutation

Requires `write_products` access scope. Also: The user must have a permission to append media to variants.

Appends media from a product to variants of the product.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia#arguments)
Arguments
---------

[Anchor to productId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia#arguments-productId)product Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

Specifies the product associated to the media.

[Anchor to variantMedia](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia#arguments-variantMedia)variant Media

•[[Product Variant Append Media Input!]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantAppendMediaInput)

required

A list of pairs of variants and media to be attached to the variants.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ProductVariantAppendMediaPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia#returns)Product Variant Append Media Payload returns
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The product associated with the variants and media.

Show fields

[Anchor to productVariants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia#returns-productVariants)product Variants

•[[Product Variant!]](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

The product variants that were updated.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantappendmedia#returns-userErrors)user Errors

•[[Media User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Append a product's media to variants of the product

#### Description

Append media of a product to the product's variants

#### Query

```graphql
mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
  productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
    product {
      id
    }
  }
}
``` #### Variables

```json
{
  "productId": "gid://shopify/Product/1072481072",
  "variantMedia": [
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273216"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325119"
    },
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273217"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325120"
    }
  ]
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) { productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) { product { id } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481072",
    "variantMedia": [
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273216"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325119"
      },
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273217"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325120"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
    productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
      product {
        id
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481072",
        "variantMedia": [
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273216"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325119"
            },
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273217"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325120"
            }
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
  mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
    productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
      product {
        id
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481072",
  "variantMedia": [
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273216"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325119"
    },
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273217"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325120"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
      productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
        product {
          id
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481072",
        "variantMedia": [
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273216"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325119"
            },
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273217"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325120"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productVariantAppendMedia": {
    "product": {
      "id": "gid://shopify/Product/1072481072"
    }
  }
}
``` 
*   ### productVariantAppendMedia reference

Examples
--------

Append a product's media to variants of the product

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20productVariantAppendMedia(%24productId%3A%20ID!%2C%20%24variantMedia%3A%20%5BProductVariantAppendMediaInput!%5D!)%20%7B%0A%20%20productVariantAppendMedia(productId%3A%20%24productId%2C%20variantMedia%3A%20%24variantMedia)%20%7B%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22productId%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F1072481072%22%2C%0A%20%20%22variantMedia%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22mediaIds%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FMediaImage%2F1072273216%22%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F1070325119%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22mediaIds%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%22gid%3A%2F%2Fshopify%2FMediaImage%2F1072273217%22%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22variantId%22%3A%20%22gid%3A%2F%2Fshopify%2FProductVariant%2F1070325120%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)Copy

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

27

28

29

30

31

32

33

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {

 productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {

 product {

 id

 }

 }

 }`,

{

variables:{

"productId":"gid://shopify/Product/1072481072",

"variantMedia":[

{

"mediaIds":[

"gid://shopify/MediaImage/1072273216"

],

"variantId":"gid://shopify/ProductVariant/1070325119"

},

{

"mediaIds":[

"gid://shopify/MediaImage/1072273217"

],

"variantId":"gid://shopify/ProductVariant/1070325120"

}

]

},

},

);

const data=await response.json();

```
mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
  productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
    product {
      id
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
"query": "mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) { productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) { product { id } } }",
 "variables": {
    "productId": "gid://shopify/Product/1072481072",
    "variantMedia": [
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273216"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325119"
      },
      {
        "mediaIds": [
          "gid://shopify/MediaImage/1072273217"
        ],
        "variantId": "gid://shopify/ProductVariant/1070325120"
      }
    ]
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
    productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
      product {
        id
      }
    }
  }`,
  {
    variables: {
        "productId": "gid://shopify/Product/1072481072",
        "variantMedia": [
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273216"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325119"
            },
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273217"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325120"
            }
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
    "query": `mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
      productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
        product {
          id
        }
      }
    }`,
    "variables": {
        "productId": "gid://shopify/Product/1072481072",
        "variantMedia": [
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273216"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325119"
            },
            {
                "mediaIds": [
                    "gid://shopify/MediaImage/1072273217"
                ],
                "variantId": "gid://shopify/ProductVariant/1070325120"
            }
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
  mutation productVariantAppendMedia($productId: ID!, $variantMedia: [ProductVariantAppendMediaInput!]!) {
    productVariantAppendMedia(productId: $productId, variantMedia: $variantMedia) {
      product {
        id
      }
    }
  }
QUERY

variables = {
  "productId": "gid://shopify/Product/1072481072",
  "variantMedia": [
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273216"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325119"
    },
    {
      "mediaIds": [
        "gid://shopify/MediaImage/1072273217"
      ],
      "variantId": "gid://shopify/ProductVariant/1070325120"
    }
  ]
}

response = client.query(query: query, variables: variables)
```

Hide content

Input variables
---------------

JSON

Copy

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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"productId": "gid://shopify/Product/1072481072",

"variantMedia": [

{

"mediaIds": [

"gid://shopify/MediaImage/1072273216"

],

"variantId": "gid://shopify/ProductVariant/1070325119"

},

{

"mediaIds": [

"gid://shopify/MediaImage/1072273217"

],

"variantId": "gid://shopify/ProductVariant/1070325120"

}

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

›

⌄

⌄

⌄

{

"productVariantAppendMedia": {

"product": {

"id": "gid://shopify/Product/1072481072"

}

}

}


---
*Content truncated at "Updates" section*