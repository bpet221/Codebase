---
title: "productDelete"
description: "Shopify GraphQL Admin API documentation for productdelete"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productDelete - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete

Markdown Content:
productDelete - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete#main-content)

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

[Anchor to productDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete#top)
product Delete
==============

mutation

Requires `write_products` access scope. Also: The user must have a permission to delete products.

Permanently deletes a product and all its associated data, including variants, media, publications, and inventory items.

Use the `productDelete` mutation to programmatically remove products from your store when they need to be permanently deleted from your catalog, such as when removing discontinued items, cleaning up test data, or synchronizing with external inventory management systems.

The `productDelete` mutation removes the product from all associated collections, and removes all associated data for the product, including:

*   All product variants and their inventory items
*   Product media (images, videos) that are not referenced by other products
*   [Product options](https://shopify.dev/api/admin-graphql/latest/objects/ProductOption) and [option values](https://shopify.dev/api/admin-graphql/latest/objects/ProductOptionValue)
*   Product publications across all sales channels
*   Product tags and metadata associations

The `productDelete` mutation also has the following effects on existing orders and transactions:

*   **Draft orders**: Existing draft orders that reference this product will retain the product information as stored data, but the product reference will be removed. Draft orders can still be completed with the stored product details.
*   **Completed orders and refunds**: Previously completed orders that included this product aren't affected. The product information in completed orders is preserved for record-keeping, and existing refunds for this product remain valid and processable.

* * *

Caution

Product deletion is irreversible. After a product is deleted, it can't be recovered. Consider archiving or unpublishing products instead if you might need to restore them later.

* * *

If you need to delete a large product, such as one that has many [variants](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant) that are active at several [locations](https://shopify.dev/api/admin-graphql/latest/objects/Location), you might encounter timeout errors. To avoid these timeout errors, you can set the [`synchronous`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDelete#arguments-synchronous) parameter to `false` to run the deletion asynchronously, which returns a [`ProductDeleteOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation) that you can monitor for completion status.

If you need more granular control over product cleanup, consider using these alternative mutations:

*   [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Update the product status to archived or unpublished instead of deleting.
*   [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete): Delete specific variants while keeping the product.
*   [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete): Delete the choices available for a product, such as size, color, or material.

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete#arguments)
Arguments
---------

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete#arguments-input)input

•[Product Delete Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductDeleteInput)

required

Specifies the product to delete by its ID.

Show input fields

[Anchor to synchronous](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete#arguments-synchronous)synchronous

•[Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

Default:true

Specifies whether or not to run the mutation synchronously.

* * *

Was this section helpful?

Yes No

[Anchor to ProductDeletePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete#returns)Product Delete Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to deletedProductId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete#returns-deletedProductId)deleted Product Id

•[ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

The ID of the deleted product.

[Anchor to productDeleteOperation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete#returns-productDeleteOperation)product Delete Operation

•[Product Delete Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductDeleteOperation)

The product delete operation, returned when run in asynchronous mode.

Show fields

[Anchor to shop](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete#returns-shop)shop

•[Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

non-null

The shop associated with the product.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productdelete#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Delete a non-existent product

#### Description

Trying to delete a non-existent product returns `null`.

#### Query

```graphql
mutation {
  productDelete(input: {id: "gid://shopify/Product/-1"}) {
    deletedProductId
    userErrors {
      field
      message
    }
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation { productDelete(input: {id: \"gid://shopify/Product/-1\"}) { deletedProductId userErrors { field message } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    productDelete(input: {id: "gid://shopify/Product/-1"}) {
      deletedProductId
      userErrors {
        field
        message
      }
    }
  }`,
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
  mutation {
    productDelete(input: {id: "gid://shopify/Product/-1"}) {
      deletedProductId
      userErrors {
        field
        message
      }
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation {
    productDelete(input: {id: "gid://shopify/Product/-1"}) {
      deletedProductId
      userErrors {
        field
        message
      }
    }
  }`,
});
``` #### Response

```json
{
  "productDelete": {
    "deletedProductId": null,
    "userErrors": [
      {
        "field": [
          "id"
        ],
        "message": "Product does not exist"
      }
    ]
  }
}
``` 
*   ### Delete a product

#### Query

```graphql
mutation {
  productDelete(input: {id: "gid://shopify/Product/108828309"}) {
    deletedProductId
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation { productDelete(input: {id: \"gid://shopify/Product/108828309\"}) { deletedProductId } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    productDelete(input: {id: "gid://shopify/Product/108828309"}) {
      deletedProductId
    }
  }`,
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
  mutation {
    productDelete(input: {id: "gid://shopify/Product/108828309"}) {
      deletedProductId
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation {
    productDelete(input: {id: "gid://shopify/Product/108828309"}) {
      deletedProductId
    }
  }`,
});
``` #### Response

```json
{
  "productDelete": {
    "deletedProductId": "gid://shopify/Product/108828309"
  }
}
``` 
*   ### Delete a product asynchronously and return a product delete operation

#### Query

```graphql
mutation productDelete($input: ProductDeleteInput!, $synchronous: Boolean!) {
  productDelete(synchronous: $synchronous, input: $input) {
    deletedProductId
    productDeleteOperation {
      id
      status
      deletedProductId
    }
  }
}
``` #### Variables

```json
{
  "synchronous": false,
  "input": {
    "id": "gid://shopify/Product/108828309"
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation productDelete($input: ProductDeleteInput!, $synchronous: Boolean!) { productDelete(synchronous: $synchronous, input: $input) { deletedProductId productDeleteOperation { id status deletedProductId } } }",
 "variables": {
    "synchronous": false,
    "input": {
      "id": "gid://shopify/Product/108828309"
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation productDelete($input: ProductDeleteInput!, $synchronous: Boolean!) {
    productDelete(synchronous: $synchronous, input: $input) {
      deletedProductId
      productDeleteOperation {
        id
        status
        deletedProductId
      }
    }
  }`,
  {
    variables: {
        "synchronous": false,
        "input": {
            "id": "gid://shopify/Product/108828309"
        }
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
  mutation productDelete($input: ProductDeleteInput!, $synchronous: Boolean!) {
    productDelete(synchronous: $synchronous, input: $input) {
      deletedProductId
      productDeleteOperation {
        id
        status
        deletedProductId
      }
    }
  }
QUERY

variables = {
  "synchronous": false,
  "input": {
    "id": "gid://shopify/Product/108828309"
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation productDelete($input: ProductDeleteInput!, $synchronous: Boolean!) {
      productDelete(synchronous: $synchronous, input: $input) {
        deletedProductId
        productDeleteOperation {
          id
          status
          deletedProductId
        }
      }
    }`,
    "variables": {
        "synchronous": false,
        "input": {
            "id": "gid://shopify/Product/108828309"
        }
    },
  },
});
``` #### Response

```json
{
  "productDelete": {
    "deletedProductId": null,
    "productDeleteOperation": {
      "id": "gid://shopify/ProductDeleteOperation/1010603706",
      "status": "CREATED",
      "deletedProductId": null
    }
  }
}
``` 
*   ### productDelete reference

Examples
--------

Delete a non-existent product

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20%7B%0A%20%20productDelete(input%3A%20%7Bid%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F-1%22%7D)%20%7B%0A%20%20%20%20deletedProductId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation {

 productDelete(input: {id: "gid://shopify/Product/-1"}) {

 deletedProductId

 userErrors {

 field

 message

 }

 }

 }`,

);

const data=await response.json();

```
mutation {
  productDelete(input: {id: "gid://shopify/Product/-1"}) {
    deletedProductId
    userErrors {
      field
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
"query": "mutation { productDelete(input: {id: \"gid://shopify/Product/-1\"}) { deletedProductId userErrors { field message } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    productDelete(input: {id: "gid://shopify/Product/-1"}) {
      deletedProductId
      userErrors {
        field
        message
      }
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `mutation {
    productDelete(input: {id: "gid://shopify/Product/-1"}) {
      deletedProductId
      userErrors {
        field
        message
      }
    }
  }`,
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
  mutation {
    productDelete(input: {id: "gid://shopify/Product/-1"}) {
      deletedProductId
      userErrors {
        field
        message
      }
    }
  }
QUERY

response = client.query(query: query)
```

Hide content

Response
--------

JSON

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

›

⌄

⌄

⌄

⌄

⌄

{

"productDelete": {

"deletedProductId": null,

"userErrors": [

{

"field": [

"id"

],

"message": "Product does not exist"

}

]

}

}


---
*Content truncated at "Updates" section*