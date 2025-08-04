---
title: "priceListUpdate"
description: "Shopify GraphQL Admin API documentation for pricelistupdate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate"
extraction_method: "jina"
sections: ['Products and collections', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: priceListUpdate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate

Markdown Content:
priceListUpdate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate#main-content)

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

[Anchor to priceListUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate#top)
price List Update
=================

mutation

Requires `write_products` access scope. Also: The user must have permission to create and edit catalogs.

Updates a price list. If you modify the currency, then any fixed prices set on the price list will be deleted.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate#arguments)
Arguments
---------

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the price list to update.

[Anchor to input](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate#arguments-input)input

•[Price List Update Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListUpdateInput)

required

The input data used to update the price list.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to PriceListUpdatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate#returns)Price List Update Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to priceList](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate#returns-priceList)price List

•[Price List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

The updated price list.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistupdate#returns-userErrors)user Errors

•[[Price List User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Update a price list

#### Description

Set the existing price list's adjustment to be an increase of 10%.

#### Query

```graphql
mutation priceListUpdate($id: ID!, $input: PriceListUpdateInput!) {
  priceListUpdate(id: $id, input: $input) {
    priceList {
      id
      parent {
        adjustment {
          type
          value
        }
      }
    }
    userErrors {
      message
      field
      code
    }
  }
}
``` #### Variables

```json
{
  "id": "gid://shopify/PriceList/734173888",
  "input": {
    "parent": {
      "adjustment": {
        "value": 10,
        "type": "PERCENTAGE_INCREASE"
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
"query": "mutation priceListUpdate($id: ID!, $input: PriceListUpdateInput!) { priceListUpdate(id: $id, input: $input) { priceList { id parent { adjustment { type value } } } userErrors { message field code } } }",
 "variables": {
    "id": "gid://shopify/PriceList/734173888",
    "input": {
      "parent": {
        "adjustment": {
          "value": 10,
          "type": "PERCENTAGE_INCREASE"
        }
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation priceListUpdate($id: ID!, $input: PriceListUpdateInput!) {
    priceListUpdate(id: $id, input: $input) {
      priceList {
        id
        parent {
          adjustment {
            type
            value
          }
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/PriceList/734173888",
        "input": {
            "parent": {
                "adjustment": {
                    "value": 10,
                    "type": "PERCENTAGE_INCREASE"
                }
            }
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
  mutation priceListUpdate($id: ID!, $input: PriceListUpdateInput!) {
    priceListUpdate(id: $id, input: $input) {
      priceList {
        id
        parent {
          adjustment {
            type
            value
          }
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/PriceList/734173888",
  "input": {
    "parent": {
      "adjustment": {
        "value": 10,
        "type": "PERCENTAGE_INCREASE"
      }
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation priceListUpdate($id: ID!, $input: PriceListUpdateInput!) {
      priceListUpdate(id: $id, input: $input) {
        priceList {
          id
          parent {
            adjustment {
              type
              value
            }
          }
        }
        userErrors {
          message
          field
          code
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/PriceList/734173888",
        "input": {
            "parent": {
                "adjustment": {
                    "value": 10,
                    "type": "PERCENTAGE_INCREASE"
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "priceListUpdate": {
    "priceList": {
      "id": "gid://shopify/PriceList/734173888",
      "parent": {
        "adjustment": {
          "type": "PERCENTAGE_INCREASE",
          "value": 10
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### priceListUpdate reference

Examples
--------

Update a price list

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20priceListUpdate(%24id%3A%20ID!%2C%20%24input%3A%20PriceListUpdateInput!)%20%7B%0A%20%20priceListUpdate(id%3A%20%24id%2C%20input%3A%20%24input)%20%7B%0A%20%20%20%20priceList%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20parent%20%7B%0A%20%20%20%20%20%20%20%20adjustment%20%7B%0A%20%20%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FPriceList%2F734173888%22%2C%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22parent%22%3A%20%7B%0A%20%20%20%20%20%20%22adjustment%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22value%22%3A%2010%2C%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22PERCENTAGE_INCREASE%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation priceListUpdate($id: ID!, $input: PriceListUpdateInput!) {

 priceListUpdate(id: $id, input: $input) {

 priceList {

 id

 parent {

 adjustment {

 type

 value

 }

 }

 }

 userErrors {

 message

 field

 code

 }

 }

 }`,

{

variables:{

"id":"gid://shopify/PriceList/734173888",

"input":{

"parent":{

"adjustment":{

"value":10,

"type":"PERCENTAGE_INCREASE"

}

}

}

},

},

);

```
mutation priceListUpdate($id: ID!, $input: PriceListUpdateInput!) {
  priceListUpdate(id: $id, input: $input) {
    priceList {
      id
      parent {
        adjustment {
          type
          value
        }
      }
    }
    userErrors {
      message
      field
      code
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
"query": "mutation priceListUpdate($id: ID!, $input: PriceListUpdateInput!) { priceListUpdate(id: $id, input: $input) { priceList { id parent { adjustment { type value } } } userErrors { message field code } } }",
 "variables": {
    "id": "gid://shopify/PriceList/734173888",
    "input": {
      "parent": {
        "adjustment": {
          "value": 10,
          "type": "PERCENTAGE_INCREASE"
        }
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation priceListUpdate($id: ID!, $input: PriceListUpdateInput!) {
    priceListUpdate(id: $id, input: $input) {
      priceList {
        id
        parent {
          adjustment {
            type
            value
          }
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/PriceList/734173888",
        "input": {
            "parent": {
                "adjustment": {
                    "value": 10,
                    "type": "PERCENTAGE_INCREASE"
                }
            }
        }
    },
  },
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation priceListUpdate($id: ID!, $input: PriceListUpdateInput!) {
      priceListUpdate(id: $id, input: $input) {
        priceList {
          id
          parent {
            adjustment {
              type
              value
            }
          }
        }
        userErrors {
          message
          field
          code
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/PriceList/734173888",
        "input": {
            "parent": {
                "adjustment": {
                    "value": 10,
                    "type": "PERCENTAGE_INCREASE"
                }
            }
        }
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
  mutation priceListUpdate($id: ID!, $input: PriceListUpdateInput!) {
    priceListUpdate(id: $id, input: $input) {
      priceList {
        id
        parent {
          adjustment {
            type
            value
          }
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/PriceList/734173888",
  "input": {
    "parent": {
      "adjustment": {
        "value": 10,
        "type": "PERCENTAGE_INCREASE"
      }
    }
  }
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

›

⌄

⌄

⌄

⌄

{

"id": "gid://shopify/PriceList/734173888",

"input": {

"parent": {

"adjustment": {

"value": 10,

"type": "PERCENTAGE_INCREASE"

}

}

}

}

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

›

⌄

⌄

⌄

⌄

⌄

{

"priceListUpdate": {

"priceList": {

"id": "gid://shopify/PriceList/734173888",

"parent": {

"adjustment": {

"type": "PERCENTAGE_INCREASE",

"value": 10

}

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*