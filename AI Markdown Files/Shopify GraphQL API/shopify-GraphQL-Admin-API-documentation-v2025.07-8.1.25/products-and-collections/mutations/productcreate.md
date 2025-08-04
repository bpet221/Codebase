---
title: "productCreate"
description: "Shopify GraphQL Admin API documentation for productcreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: productCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate

Markdown Content:
productCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate#main-content)

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

[Anchor to productCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate#top)
product Create
==============

mutation

Requires `write_products` access scope. Also: The user must have a permission to create products.

Creates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with attributes such as title, description, vendor, and media.

The `productCreate` mutation helps you create many products at once, avoiding the tedious or time-consuming process of adding them one by one in the Shopify admin. Common examples include creating products for a new collection, launching a new product line, or adding seasonal products.

You can define product [options](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption) and [values](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValue), allowing you to create products with different variations like sizes or colors. You can also associate media files to your products, including images and videos.

The `productCreate` mutation only supports creating a product with its initial [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). To create multiple product variants for a single product and manage prices, use the [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate) mutation.

* * *

Note

The `productCreate` mutation has a [throttle](https://shopify.dev/docs/api/usage/rate-limits#resource-based-rate-limits) that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than 1,000 new product variants can be created per day.

* * *

After you create a product, you can make subsequent edits to the product using one of the following mutations:

*   [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish): Used to publish the product and make it available to customers. The `productCreate` mutation creates products in an unpublished state by default, so you must perform a separate operation to publish the product.
*   [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate): Used to update a single product, such as changing the product's title, description, vendor, or associated media.
*   [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.

Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate#arguments)
Arguments
---------

[Anchor to media](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate#arguments-media)media

•[[Create Media Input!]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

The media to add to the product.

Show input fields

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate#arguments-product)product

•[Product Create Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput)

The attributes of the new product.

Show input fields

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate#arguments-input)input

•[Product Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput)

Deprecated

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ProductCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate#returns)Product Create Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to product](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate#returns-product)product

•[Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

The product object.

Show fields

[Anchor to shop](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate#returns-shop)shop

•[Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

non-null

The shop associated with the product.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate#returns-userErrors)user Errors

•[[User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Create a product

#### Description

Create a new product with the title "Cool socks" and two product options that have two values each: A "Color" option, with the values "Red" and "Blue", and a "Size" option, with the values "Small" and "Large". This example returns the product's ID, title, and options. Learn more about [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

#### Query

```graphql
mutation {
  productCreate(product: {title: "Cool socks", productOptions: [{name: "Color", values: [{name: "Red"}, {name: "Blue"}]}, {name: "Size", values: [{name: "Small"}, {name: "Large"}]}]}) {
    product {
      id
      title
      options {
        id
        name
        position
        optionValues {
          id
          name
          hasVariants
        }
      }
    }
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
"query": "mutation { productCreate(product: {title: \"Cool socks\", productOptions: [{name: \"Color\", values: [{name: \"Red\"}, {name: \"Blue\"}]}, {name: \"Size\", values: [{name: \"Small\"}, {name: \"Large\"}]}]}) { product { id title options { id name position optionValues { id name hasVariants } } } userErrors { field message } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    productCreate(product: {title: "Cool socks", productOptions: [{name: "Color", values: [{name: "Red"}, {name: "Blue"}]}, {name: "Size", values: [{name: "Small"}, {name: "Large"}]}]}) {
      product {
        id
        title
        options {
          id
          name
          position
          optionValues {
            id
            name
            hasVariants
          }
        }
      }
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
    productCreate(product: {title: "Cool socks", productOptions: [{name: "Color", values: [{name: "Red"}, {name: "Blue"}]}, {name: "Size", values: [{name: "Small"}, {name: "Large"}]}]}) {
      product {
        id
        title
        options {
          id
          name
          position
          optionValues {
            id
            name
            hasVariants
          }
        }
      }
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
    productCreate(product: {title: "Cool socks", productOptions: [{name: "Color", values: [{name: "Red"}, {name: "Blue"}]}, {name: "Size", values: [{name: "Small"}, {name: "Large"}]}]}) {
      product {
        id
        title
        options {
          id
          name
          position
          optionValues {
            id
            name
            hasVariants
          }
        }
      }
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
  "productCreate": {
    "product": {
      "id": "gid://shopify/Product/1072481345",
      "title": "Cool socks",
      "options": [
        {
          "id": "gid://shopify/ProductOption/1064577018",
          "name": "Color",
          "position": 1,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054673897",
              "name": "Red",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054673898",
              "name": "Blue",
              "hasVariants": false
            }
          ]
        },
        {
          "id": "gid://shopify/ProductOption/1064577019",
          "name": "Size",
          "position": 2,
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054673899",
              "name": "Small",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054673900",
              "name": "Large",
              "hasVariants": false
            }
          ]
        }
      ]
    },
    "userErrors": []
  }
}
``` 
*   ### Create a product and associate metafields

#### Description

Create a new product with [metafields](https://shopify.dev/docs/apps/build/custom-data) to store additional details about the product. In this example, a new product titled "Hiking Boots" is created with an associated metafield categorized under the namespace "my_fields." The metafield, of type ["single_line_text_field"](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-data-types#supported-types), is used to store the liner material information. This example returns the product's ID, title, and metafield.

#### Query

```graphql
mutation {
  productCreate(product: {title: "Hiking Boots", metafields: [{namespace: "my_fields", key: "liner_material", type: "single_line_text_field", value: "Synthetic Leather"}]}) {
    product {
      id
      title
      metafields(first: 1) {
        nodes {
          id
          namespace
          key
          value
        }
      }
    }
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
"query": "mutation { productCreate(product: {title: \"Hiking Boots\", metafields: [{namespace: \"my_fields\", key: \"liner_material\", type: \"single_line_text_field\", value: \"Synthetic Leather\"}]}) { product { id title metafields(first: 1) { nodes { id namespace key value } } } userErrors { field message } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    productCreate(product: {title: "Hiking Boots", metafields: [{namespace: "my_fields", key: "liner_material", type: "single_line_text_field", value: "Synthetic Leather"}]}) {
      product {
        id
        title
        metafields(first: 1) {
          nodes {
            id
            namespace
            key
            value
          }
        }
      }
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
    productCreate(product: {title: "Hiking Boots", metafields: [{namespace: "my_fields", key: "liner_material", type: "single_line_text_field", value: "Synthetic Leather"}]}) {
      product {
        id
        title
        metafields(first: 1) {
          nodes {
            id
            namespace
            key
            value
          }
        }
      }
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
    productCreate(product: {title: "Hiking Boots", metafields: [{namespace: "my_fields", key: "liner_material", type: "single_line_text_field", value: "Synthetic Leather"}]}) {
      product {
        id
        title
        metafields(first: 1) {
          nodes {
            id
            namespace
            key
            value
          }
        }
      }
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
  "productCreate": {
    "product": {
      "id": "gid://shopify/Product/1072481346",
      "title": "Hiking Boots",
      "metafields": {
        "nodes": [
          {
            "id": "gid://shopify/Metafield/1069229911",
            "namespace": "my_fields",
            "key": "liner_material",
            "value": "Synthetic Leather"
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a product with SEO settings and tags

#### Description

Create a new product with search engine optimization (SEO) settings and product tags. This example demonstrates how to create a product titled "Eco-Friendly Water Bottle" with custom SEO title and description for optimal search visibility. The product also includes descriptive tags for improved organization and discoverability. The mutation returns the product's ID, title, handle, description, product type, vendor, status, SEO settings, tags, options, and variants.

#### Query

```graphql
mutation {
  productCreate(product: {title: "Eco-Friendly Water Bottle", descriptionHtml: "<p>Stay hydrated with our premium stainless steel water bottle. Features double-wall insulation to keep drinks cold for 24 hours or hot for 12 hours.</p>", productType: "Drinkware", vendor: "EcoLifestyle", status: ACTIVE, handle: "eco-friendly-water-bottle", seo: {title: "Eco Water Bottle - 24hr Cold, 12hr Hot | EcoLifestyle", description: "Premium stainless steel water bottle with double-wall insulation. Eco-friendly, BPA-free, and perfect for active lifestyles. Free shipping available."}, tags: ["eco-friendly", "stainless-steel", "insulated", "BPA-free", "sports", "outdoors"], productOptions: [{name: "Size", values: [{name: "16oz"}, {name: "20oz"}, {name: "32oz"}]}, {name: "Color", values: [{name: "Forest Green"}, {name: "Ocean Blue"}, {name: "Sunset Orange"}]}]}) {
    product {
      id
      title
      handle
      descriptionHtml
      productType
      vendor
      status
      seo {
        title
        description
      }
      tags
      options {
        id
        name
        position
        values
        optionValues {
          id
          name
          hasVariants
        }
      }
      variants(first: 1) {
        nodes {
          id
          title
          selectedOptions {
            name
            value
          }
        }
      }
    }
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
"query": "mutation { productCreate(product: {title: \"Eco-Friendly Water Bottle\", descriptionHtml: \"<p>Stay hydrated with our premium stainless steel water bottle. Features double-wall insulation to keep drinks cold for 24 hours or hot for 12 hours.</p>\", productType: \"Drinkware\", vendor: \"EcoLifestyle\", status: ACTIVE, handle: \"eco-friendly-water-bottle\", seo: {title: \"Eco Water Bottle - 24hr Cold, 12hr Hot | EcoLifestyle\", description: \"Premium stainless steel water bottle with double-wall insulation. Eco-friendly, BPA-free, and perfect for active lifestyles. Free shipping available.\"}, tags: [\"eco-friendly\", \"stainless-steel\", \"insulated\", \"BPA-free\", \"sports\", \"outdoors\"], productOptions: [{name: \"Size\", values: [{name: \"16oz\"}, {name: \"20oz\"}, {name: \"32oz\"}]}, {name: \"Color\", values: [{name: \"Forest Green\"}, {name: \"Ocean Blue\"}, {name: \"Sunset Orange\"}]}]}) { product { id title handle descriptionHtml productType vendor status seo { title description } tags options { id name position values optionValues { id name hasVariants } } variants(first: 1) { nodes { id title selectedOptions { name value } } } } userErrors { field message } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    productCreate(product: {title: "Eco-Friendly Water Bottle", descriptionHtml: "<p>Stay hydrated with our premium stainless steel water bottle. Features double-wall insulation to keep drinks cold for 24 hours or hot for 12 hours.</p>", productType: "Drinkware", vendor: "EcoLifestyle", status: ACTIVE, handle: "eco-friendly-water-bottle", seo: {title: "Eco Water Bottle - 24hr Cold, 12hr Hot | EcoLifestyle", description: "Premium stainless steel water bottle with double-wall insulation. Eco-friendly, BPA-free, and perfect for active lifestyles. Free shipping available."}, tags: ["eco-friendly", "stainless-steel", "insulated", "BPA-free", "sports", "outdoors"], productOptions: [{name: "Size", values: [{name: "16oz"}, {name: "20oz"}, {name: "32oz"}]}, {name: "Color", values: [{name: "Forest Green"}, {name: "Ocean Blue"}, {name: "Sunset Orange"}]}]}) {
      product {
        id
        title
        handle
        descriptionHtml
        productType
        vendor
        status
        seo {
          title
          description
        }
        tags
        options {
          id
          name
          position
          values
          optionValues {
            id
            name
            hasVariants
          }
        }
        variants(first: 1) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
      }
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
    productCreate(product: {title: "Eco-Friendly Water Bottle", descriptionHtml: "<p>Stay hydrated with our premium stainless steel water bottle. Features double-wall insulation to keep drinks cold for 24 hours or hot for 12 hours.</p>", productType: "Drinkware", vendor: "EcoLifestyle", status: ACTIVE, handle: "eco-friendly-water-bottle", seo: {title: "Eco Water Bottle - 24hr Cold, 12hr Hot | EcoLifestyle", description: "Premium stainless steel water bottle with double-wall insulation. Eco-friendly, BPA-free, and perfect for active lifestyles. Free shipping available."}, tags: ["eco-friendly", "stainless-steel", "insulated", "BPA-free", "sports", "outdoors"], productOptions: [{name: "Size", values: [{name: "16oz"}, {name: "20oz"}, {name: "32oz"}]}, {name: "Color", values: [{name: "Forest Green"}, {name: "Ocean Blue"}, {name: "Sunset Orange"}]}]}) {
      product {
        id
        title
        handle
        descriptionHtml
        productType
        vendor
        status
        seo {
          title
          description
        }
        tags
        options {
          id
          name
          position
          values
          optionValues {
            id
            name
            hasVariants
          }
        }
        variants(first: 1) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
      }
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
    productCreate(product: {title: "Eco-Friendly Water Bottle", descriptionHtml: "<p>Stay hydrated with our premium stainless steel water bottle. Features double-wall insulation to keep drinks cold for 24 hours or hot for 12 hours.</p>", productType: "Drinkware", vendor: "EcoLifestyle", status: ACTIVE, handle: "eco-friendly-water-bottle", seo: {title: "Eco Water Bottle - 24hr Cold, 12hr Hot | EcoLifestyle", description: "Premium stainless steel water bottle with double-wall insulation. Eco-friendly, BPA-free, and perfect for active lifestyles. Free shipping available."}, tags: ["eco-friendly", "stainless-steel", "insulated", "BPA-free", "sports", "outdoors"], productOptions: [{name: "Size", values: [{name: "16oz"}, {name: "20oz"}, {name: "32oz"}]}, {name: "Color", values: [{name: "Forest Green"}, {name: "Ocean Blue"}, {name: "Sunset Orange"}]}]}) {
      product {
        id
        title
        handle
        descriptionHtml
        productType
        vendor
        status
        seo {
          title
          description
        }
        tags
        options {
          id
          name
          position
          values
          optionValues {
            id
            name
            hasVariants
          }
        }
        variants(first: 1) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
      }
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
  "productCreate": {
    "product": {
      "id": "gid://shopify/Product/1072481342",
      "title": "Eco-Friendly Water Bottle",
      "handle": "eco-friendly-water-bottle",
      "descriptionHtml": "<p>Stay hydrated with our premium stainless steel water bottle. Features double-wall insulation to keep drinks cold for 24 hours or hot for 12 hours.</p>",
      "productType": "Drinkware",
      "vendor": "EcoLifestyle",
      "status": "ACTIVE",
      "seo": {
        "title": "Eco Water Bottle - 24hr Cold, 12hr Hot | EcoLifestyle",
        "description": "Premium stainless steel water bottle with double-wall insulation. Eco-friendly, BPA-free, and perfect for active lifestyles. Free shipping available."
      },
      "tags": [
        "BPA-free",
        "eco-friendly",
        "insulated",
        "outdoors",
        "sports",
        "stainless-steel"
      ],
      "options": [
        {
          "id": "gid://shopify/ProductOption/1064577013",
          "name": "Size",
          "position": 1,
          "values": [
            "16oz"
          ],
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054673884",
              "name": "16oz",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054673885",
              "name": "20oz",
              "hasVariants": false
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054673886",
              "name": "32oz",
              "hasVariants": false
            }
          ]
        },
        {
          "id": "gid://shopify/ProductOption/1064577014",
          "name": "Color",
          "position": 2,
          "values": [
            "Forest Green"
          ],
          "optionValues": [
            {
              "id": "gid://shopify/ProductOptionValue/1054673887",
              "name": "Forest Green",
              "hasVariants": true
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054673888",
              "name": "Ocean Blue",
              "hasVariants": false
            },
            {
              "id": "gid://shopify/ProductOptionValue/1054673889",
              "name": "Sunset Orange",
              "hasVariants": false
            }
          ]
        }
      ],
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/1070326200",
            "title": "16oz / Forest Green",
            "selectedOptions": [
              {
                "name": "Size",
                "value": "16oz"
              },
              {
                "name": "Color",
                "value": "Forest Green"
              }
            ]
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a product with a combined listing role

#### Description

Create a new parent product with the title "Helmet Nova". The parent product is the main product that includes multiple child products, using Shopify's existing product model to create the combinations. This example returns the product's ID and combined listing role (`PARENT`). Learn more about [combined listings](https://shopify.dev/docs/apps/build/product-merchandising/combined-listings).

#### Query

```graphql
mutation {
  productCreate(product: {title: "Helmet Nova", combinedListingRole: PARENT}) {
    product {
      id
      combinedListingRole
    }
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
"query": "mutation { productCreate(product: {title: \"Helmet Nova\", combinedListingRole: PARENT}) { product { id combinedListingRole } userErrors { field message } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    productCreate(product: {title: "Helmet Nova", combinedListingRole: PARENT}) {
      product {
        id
        combinedListingRole
      }
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
    productCreate(product: {title: "Helmet Nova", combinedListingRole: PARENT}) {
      product {
        id
        combinedListingRole
      }
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
    productCreate(product: {title: "Helmet Nova", combinedListingRole: PARENT}) {
      product {
        id
        combinedListingRole
      }
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
  "productCreate": {
    "product": {
      "id": "gid://shopify/Product/1072481340",
      "combinedListingRole": "PARENT"
    },
    "userErrors": []
  }
}
``` 
*   ### Create a product with media

#### Description

Create a new product and [asynchronously associate media](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components#asynchronous-media-management) to the product. The product title is "Helmet Nova" and the media consists of a Shopify-hosted image and an externally hosted video. This example returns the product ID, title, and media for the product.

#### Query

```graphql
mutation CreateProductWithNewMedia($product: ProductCreateInput!, $media: [CreateMediaInput!]) {
  productCreate(product: $product, media: $media) {
    product {
      id
      title
      media(first: 10) {
        nodes {
          alt
          mediaContentType
          preview {
            status
          }
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "product": {
    "title": "Helmet Nova"
  },
  "media": [
    {
      "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
      "alt": "Gray helmet for bikers",
      "mediaContentType": "IMAGE"
    },
    {
      "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
      "alt": "Testing helmet resistance against impacts",
      "mediaContentType": "EXTERNAL_VIDEO"
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
"query": "mutation CreateProductWithNewMedia($product: ProductCreateInput!, $media: [CreateMediaInput!]) { productCreate(product: $product, media: $media) { product { id title media(first: 10) { nodes { alt mediaContentType preview { status } } } } userErrors { field message } } }",
 "variables": {
    "product": {
      "title": "Helmet Nova"
    },
    "media": [
      {
        "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
        "alt": "Gray helmet for bikers",
        "mediaContentType": "IMAGE"
      },
      {
        "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
        "alt": "Testing helmet resistance against impacts",
        "mediaContentType": "EXTERNAL_VIDEO"
      }
    ]
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateProductWithNewMedia($product: ProductCreateInput!, $media: [CreateMediaInput!]) {
    productCreate(product: $product, media: $media) {
      product {
        id
        title
        media(first: 10) {
          nodes {
            alt
            mediaContentType
            preview {
              status
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "product": {
            "title": "Helmet Nova"
        },
        "media": [
            {
                "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
                "alt": "Gray helmet for bikers",
                "mediaContentType": "IMAGE"
            },
            {
                "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
                "alt": "Testing helmet resistance against impacts",
                "mediaContentType": "EXTERNAL_VIDEO"
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
  mutation CreateProductWithNewMedia($product: ProductCreateInput!, $media: [CreateMediaInput!]) {
    productCreate(product: $product, media: $media) {
      product {
        id
        title
        media(first: 10) {
          nodes {
            alt
            mediaContentType
            preview {
              status
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "product": {
    "title": "Helmet Nova"
  },
  "media": [
    {
      "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
      "alt": "Gray helmet for bikers",
      "mediaContentType": "IMAGE"
    },
    {
      "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
      "alt": "Testing helmet resistance against impacts",
      "mediaContentType": "EXTERNAL_VIDEO"
    }
  ]
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateProductWithNewMedia($product: ProductCreateInput!, $media: [CreateMediaInput!]) {
      productCreate(product: $product, media: $media) {
        product {
          id
          title
          media(first: 10) {
            nodes {
              alt
              mediaContentType
              preview {
                status
              }
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "product": {
            "title": "Helmet Nova"
        },
        "media": [
            {
                "originalSource": "https://cdn.shopify.com/shopifycloud/brochure/assets/sell/image/image-@artdirection-large-1ba8d5de56c361cec6bc487b747c8774b9ec8203f392a99f53c028df8d0fb3fc.png",
                "alt": "Gray helmet for bikers",
                "mediaContentType": "IMAGE"
            },
            {
                "originalSource": "https://www.youtube.com/watch?v=4L8VbGRibj8&list=PLlMkWQ65HlcEoPyG9QayqEaAu0ftj0MMz",
                "alt": "Testing helmet resistance against impacts",
                "mediaContentType": "EXTERNAL_VIDEO"
            }
        ]
    },
  },
});
``` #### Response

```json
{
  "productCreate": {
    "product": {
      "id": "gid://shopify/Product/1072481347",
      "title": "Helmet Nova",
      "media": {
        "nodes": [
          {
            "alt": "Gray helmet for bikers",
            "mediaContentType": "IMAGE",
            "preview": {
              "status": "UPLOADED"
            }
          },
          {
            "alt": "Testing helmet resistance against impacts",
            "mediaContentType": "EXTERNAL_VIDEO",
            "preview": {
              "status": "UPLOADED"
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a product with product metadata

#### Description

Create a new product titled "Wireless Headphones" by specifying details such as `productType` and `vendor`. The mutation returns the product's ID, title, product type, vendor, status, and variants. Learn more about [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

#### Query

```graphql
mutation {
  productCreate(product: {title: "Wireless Headphones", productType: "Electronics", vendor: "AudioTech", status: ACTIVE}) {
    product {
      id
      title
      productType
      vendor
      status
      variants(first: 1) {
        nodes {
          id
          price
          inventoryItem {
            id
            tracked
          }
        }
      }
    }
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
"query": "mutation { productCreate(product: {title: \"Wireless Headphones\", productType: \"Electronics\", vendor: \"AudioTech\", status: ACTIVE}) { product { id title productType vendor status variants(first: 1) { nodes { id price inventoryItem { id tracked } } } } userErrors { field message } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    productCreate(product: {title: "Wireless Headphones", productType: "Electronics", vendor: "AudioTech", status: ACTIVE}) {
      product {
        id
        title
        productType
        vendor
        status
        variants(first: 1) {
          nodes {
            id
            price
            inventoryItem {
              id
              tracked
            }
          }
        }
      }
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
    productCreate(product: {title: "Wireless Headphones", productType: "Electronics", vendor: "AudioTech", status: ACTIVE}) {
      product {
        id
        title
        productType
        vendor
        status
        variants(first: 1) {
          nodes {
            id
            price
            inventoryItem {
              id
              tracked
            }
          }
        }
      }
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
    productCreate(product: {title: "Wireless Headphones", productType: "Electronics", vendor: "AudioTech", status: ACTIVE}) {
      product {
        id
        title
        productType
        vendor
        status
        variants(first: 1) {
          nodes {
            id
            price
            inventoryItem {
              id
              tracked
            }
          }
        }
      }
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
  "productCreate": {
    "product": {
      "id": "gid://shopify/Product/1072481341",
      "title": "Wireless Headphones",
      "productType": "Electronics",
      "vendor": "AudioTech",
      "status": "ACTIVE",
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/1070326199",
            "price": "0.00",
            "inventoryItem": {
              "id": "gid://shopify/InventoryItem/1070326058",
              "tracked": false
            }
          }
        ]
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Create a product with product options and option values

#### Description

Create a new product with product options and option values. This example creates a product titled "New product" with options for color ("Red", "Green") and size ("Small", "Medium"). It returns the product's ID and details about the product options and first five variants. Only one product variant is created and linked with the first option value specified for each option name. Learn more about [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

#### Query

```graphql
mutation {
  productCreate(product: {title: "New product", productOptions: [{name: "Color", values: [{name: "Red"}, {name: "Green"}]}, {name: "Size", values: [{name: "Small"}, {name: "Medium"}]}]}) {
    userErrors {
      field
      message
    }
    product {
      id
      options {
        id
        name
        position
        values
        optionValues {
          id
          name
          hasVariants
        }
      }
      variants(first: 5) {
        nodes {
          id
          title
          selectedOptions {
            name
            value
          }
        }
      }
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
"query": "mutation { productCreate(product: {title: \"New product\", productOptions: [{name: \"Color\", values: [{name: \"Red\"}, {name: \"Green\"}]}, {name: \"Size\", values: [{name: \"Small\"}, {name: \"Medium\"}]}]}) { userErrors { field message } product { id options { id name position values optionValues { id name hasVariants } } variants(first: 5) { nodes { id title selectedOptions { name value } } } } } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    productCreate(product: {title: "New product", productOptions: [{name: "Color", values: [{name: "Red"}, {name: "Green"}]}, {name: "Size", values: [{name: "Small"}, {name: "Medium"}]}]}) {
      userErrors {
        field
        message
      }
      product {
        id
        options {
          id
          name
          position
          values
          optionValues {
            id
            name
            hasVariants
          }
        }
        variants(first: 5) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    productCreate(product: {title: "New product", productOptions: [{name: "Color", values: [{name: "Red"}, {name: "Green"}]}, {name: "Size", values: [{name: "Small"}, {name: "Medium"}]}]}) {
      userErrors {
        field
        message
      }
      product {
        id
        options {
          id
          name
          position
          values
          optionValues {
            id
            name
            hasVariants
          }
        }
        variants(first: 5) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
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
    productCreate(product: {title: "New product", productOptions: [{name: "Color", values: [{name: "Red"}, {name: "Green"}]}, {name: "Size", values: [{name: "Small"}, {name: "Medium"}]}]}) {
      userErrors {
        field
        message
      }
      product {
        id
        options {
          id
          name
          position
          values
          optionValues {
            id
            name
            hasVariants
          }
        }
        variants(first: 5) {
          nodes {
            id
            title
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }`,
});
``` #### Response

```json
{
  "productCreate": {
    "userErrors": [],
    "product": {
      "id": "gid://shopify/Product/1072481343",
      "options": [
        {
          "id": "gid://shopify/ProductOption/1064577015",
          "name": "Color",
          "position": 1,
          "values": [
            "Red"
          ],
          "optionValues": [
            {
              "name": "Red",
              "hasVariants": true
            },
            {
              "name": "Green",
              "hasVariants": false
            }
          ]
        },
        {
          "id": "gid://shopify/ProductOption/1064577016",
          "name": "Size",
          "position": 2,
          "values": [
            "Small"
          ],
          "optionValues": [
            {
              "name": "Small",
              "hasVariants": true
            },
            {
              "name": "Medium",
              "hasVariants": false
            }
          ]
        }
      ],
      "variants": {
        "nodes": [
          {
            "id": "gid://shopify/ProductVariant/1070326201",
            "title": "Red / Small",
            "selectedOptions": [
              {
                "name": "Color",
                "value": "Red"
              },
              {
                "name": "Size",
                "value": "Small"
              }
            ]
          }
        ]
      }
    }
  }
}
``` 
*   ### productCreate reference

Examples
--------

Create a product

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20%7B%0A%20%20productCreate(product%3A%20%7Btitle%3A%20%22Cool%20socks%22%2C%20productOptions%3A%20%5B%7Bname%3A%20%22Color%22%2C%20values%3A%20%5B%7Bname%3A%20%22Red%22%7D%2C%20%7Bname%3A%20%22Blue%22%7D%5D%7D%2C%20%7Bname%3A%20%22Size%22%2C%20values%3A%20%5B%7Bname%3A%20%22Small%22%7D%2C%20%7Bname%3A%20%22Large%22%7D%5D%7D%5D%7D)%20%7B%0A%20%20%20%20product%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20options%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20position%0A%20%20%20%20%20%20%20%20optionValues%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20hasVariants%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

›

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation {

 productCreate(product: {title: "Cool socks", productOptions: [{name: "Color", values: [{name: "Red"}, {name: "Blue"}]}, {name: "Size", values: [{name: "Small"}, {name: "Large"}]}]}) {

 product {

 id

 title

 options {

 id

 name

 position

 optionValues {

 id

 name

 hasVariants

 }

 }

 }

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
  productCreate(product: {title: "Cool socks", productOptions: [{name: "Color", values: [{name: "Red"}, {name: "Blue"}]}, {name: "Size", values: [{name: "Small"}, {name: "Large"}]}]}) {
    product {
      id
      title
      options {
        id
        name
        position
        optionValues {
          id
          name
          hasVariants
        }
      }
    }
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
"query": "mutation { productCreate(product: {title: \"Cool socks\", productOptions: [{name: \"Color\", values: [{name: \"Red\"}, {name: \"Blue\"}]}, {name: \"Size\", values: [{name: \"Small\"}, {name: \"Large\"}]}]}) { product { id title options { id name position optionValues { id name hasVariants } } } userErrors { field message } } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation {
    productCreate(product: {title: "Cool socks", productOptions: [{name: "Color", values: [{name: "Red"}, {name: "Blue"}]}, {name: "Size", values: [{name: "Small"}, {name: "Large"}]}]}) {
      product {
        id
        title
        options {
          id
          name
          position
          optionValues {
            id
            name
            hasVariants
          }
        }
      }
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
    productCreate(product: {title: "Cool socks", productOptions: [{name: "Color", values: [{name: "Red"}, {name: "Blue"}]}, {name: "Size", values: [{name: "Small"}, {name: "Large"}]}]}) {
      product {
        id
        title
        options {
          id
          name
          position
          optionValues {
            id
            name
            hasVariants
          }
        }
      }
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
    productCreate(product: {title: "Cool socks", productOptions: [{name: "Color", values: [{name: "Red"}, {name: "Blue"}]}, {name: "Size", values: [{name: "Small"}, {name: "Large"}]}]}) {
      product {
        id
        title
        options {
          id
          name
          position
          optionValues {
            id
            name
            hasVariants
          }
        }
      }
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

34

35

36

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"productCreate": {

"product": {

"id": "gid://shopify/Product/1072481345",

"title": "Cool socks",

"options": [

{

"id": "gid://shopify/ProductOption/1064577018",

"name": "Color",

"position": 1,

"optionValues": [

{

"id": "gid://shopify/ProductOptionValue/1054673897",

"name": "Red",

"hasVariants": true

},

{

"id": "gid://shopify/ProductOptionValue/1054673898",

"name": "Blue",

"hasVariants": false

}

]

},

{

"id": "gid://shopify/ProductOption/1064577019",

"name": "Size",

"position": 2,

"optionValues": [

{

"id": "gid://shopify/ProductOptionValue/1054673899",

"name": "Small",

"hasVariants": true

},

{

"id": "gid://shopify/ProductOptionValue/1054673900",

"name": "Large",


---
*Content truncated at "Updates" section*