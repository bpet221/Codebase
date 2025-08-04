---
title: "checkoutBrandingUpsert"
description: "Shopify GraphQL Admin API documentation for checkoutbrandingupsert"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutbrandingupsert"
extraction_method: "jina"
sections: ['Checkout branding', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: checkoutBrandingUpsert - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutbrandingupsert

Markdown Content:
checkoutBrandingUpsert - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutbrandingupsert#main-content)

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
*   
Checkout branding

    *   Queries   
    *   
Mutations

        *   [checkout Branding Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutbrandingupsert)

    *   Objects   

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
*   Products and collections   
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

[Anchor to checkoutBrandingUpsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutbrandingupsert#top)
checkout Branding Upsert
========================

mutation

Requires access to checkout branding settings and the shop must be on a Plus plan or a Development store plan. User must have `preferences` permission to modify.

Updates the checkout branding settings for a [checkout profile](https://shopify.dev/api/admin-graphql/unstable/queries/checkoutProfile).

If the settings don't exist, then new settings are created. The checkout branding settings applied to a published checkout profile will be immediately visible within the store's checkout. The checkout branding settings applied to a draft checkout profile could be previewed within the admin checkout editor.

To learn more about updating checkout branding settings, refer to the checkout branding [tutorial](https://shopify.dev/docs/apps/checkout/styling).

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutbrandingupsert#arguments)
Arguments
---------

[Anchor to checkoutBrandingInput](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutbrandingupsert#arguments-checkoutBrandingInput)checkout Branding Input

•[Checkout Branding Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingInput)

The input fields to use to upsert the checkout branding settings (pass null to reset them to default).

Show input fields

[Anchor to checkoutProfileId](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutbrandingupsert#arguments-checkoutProfileId)checkout Profile Id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

A globally-unique identifier.

* * *

Was this section helpful?

Yes No

[Anchor to CheckoutBrandingUpsertPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutbrandingupsert#returns)Checkout Branding Upsert Payload returns
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to checkoutBranding](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutbrandingupsert#returns-checkoutBranding)checkout Branding

•[Checkout Branding](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBranding)

Returns the new checkout branding settings.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/checkoutbrandingupsert#returns-userErrors)user Errors

•[[Checkout Branding Upsert User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingUpsertUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Apply section styles to main and order summary

#### Query

```graphql
mutation ApplySectionStyles($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
  checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
    checkoutBranding {
      customizations {
        main {
          section {
            cornerRadius
            colorScheme
            shadow
            padding
          }
        }
        orderSummary {
          section {
            colorScheme
            shadow
            padding
            border
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
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "input": {
    "customizations": {
      "main": {
        "section": {
          "cornerRadius": "LARGE",
          "colorScheme": "COLOR_SCHEME2",
          "shadow": "LARGE_200",
          "padding": "LARGE_400"
        }
      },
      "orderSummary": {
        "section": {
          "colorScheme": "COLOR_SCHEME1",
          "shadow": "LARGE_200",
          "padding": "LARGE_400",
          "border": "FULL"
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
"query": "mutation ApplySectionStyles($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) { checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) { checkoutBranding { customizations { main { section { cornerRadius colorScheme shadow padding } } orderSummary { section { colorScheme shadow padding border } } } } userErrors { field message } } }",
 "variables": {
    "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
    "input": {
      "customizations": {
        "main": {
          "section": {
            "cornerRadius": "LARGE",
            "colorScheme": "COLOR_SCHEME2",
            "shadow": "LARGE_200",
            "padding": "LARGE_400"
          }
        },
        "orderSummary": {
          "section": {
            "colorScheme": "COLOR_SCHEME1",
            "shadow": "LARGE_200",
            "padding": "LARGE_400",
            "border": "FULL"
          }
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
  mutation ApplySectionStyles($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
    checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
      checkoutBranding {
        customizations {
          main {
            section {
              cornerRadius
              colorScheme
              shadow
              padding
            }
          }
          orderSummary {
            section {
              colorScheme
              shadow
              padding
              border
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
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "input": {
            "customizations": {
                "main": {
                    "section": {
                        "cornerRadius": "LARGE",
                        "colorScheme": "COLOR_SCHEME2",
                        "shadow": "LARGE_200",
                        "padding": "LARGE_400"
                    }
                },
                "orderSummary": {
                    "section": {
                        "colorScheme": "COLOR_SCHEME1",
                        "shadow": "LARGE_200",
                        "padding": "LARGE_400",
                        "border": "FULL"
                    }
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
  mutation ApplySectionStyles($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
    checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
      checkoutBranding {
        customizations {
          main {
            section {
              cornerRadius
              colorScheme
              shadow
              padding
            }
          }
          orderSummary {
            section {
              colorScheme
              shadow
              padding
              border
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
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "input": {
    "customizations": {
      "main": {
        "section": {
          "cornerRadius": "LARGE",
          "colorScheme": "COLOR_SCHEME2",
          "shadow": "LARGE_200",
          "padding": "LARGE_400"
        }
      },
      "orderSummary": {
        "section": {
          "colorScheme": "COLOR_SCHEME1",
          "shadow": "LARGE_200",
          "padding": "LARGE_400",
          "border": "FULL"
        }
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
    "query": `mutation ApplySectionStyles($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
      checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
        checkoutBranding {
          customizations {
            main {
              section {
                cornerRadius
                colorScheme
                shadow
                padding
              }
            }
            orderSummary {
              section {
                colorScheme
                shadow
                padding
                border
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
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "input": {
            "customizations": {
                "main": {
                    "section": {
                        "cornerRadius": "LARGE",
                        "colorScheme": "COLOR_SCHEME2",
                        "shadow": "LARGE_200",
                        "padding": "LARGE_400"
                    }
                },
                "orderSummary": {
                    "section": {
                        "colorScheme": "COLOR_SCHEME1",
                        "shadow": "LARGE_200",
                        "padding": "LARGE_400",
                        "border": "FULL"
                    }
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "checkoutBrandingUpsert": {
    "checkoutBranding": {
      "customizations": {
        "main": {
          "section": {
            "cornerRadius": "LARGE",
            "colorScheme": "COLOR_SCHEME2",
            "shadow": "LARGE_200",
            "padding": "LARGE_400"
          }
        },
        "orderSummary": {
          "section": {
            "colorScheme": "COLOR_SCHEME1",
            "shadow": "LARGE_200",
            "padding": "LARGE_400",
            "border": "FULL"
          }
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Modify a color scheme

#### Query

```graphql
mutation ChangeScheme2Colors($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
  checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
    checkoutBranding {
      designSystem {
        colors {
          schemes {
            scheme2 {
              base {
                background
                text
              }
            }
          }
        }
      }
    }
    userErrors {
      message
    }
  }
}
``` #### Variables

```json
{
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "input": {
    "designSystem": {
      "colors": {
        "schemes": {
          "scheme2": {
            "base": {
              "background": "#cdf7f3",
              "text": "#1f2928"
            }
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
"query": "mutation ChangeScheme2Colors($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) { checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) { checkoutBranding { designSystem { colors { schemes { scheme2 { base { background text } } } } } } userErrors { message } } }",
 "variables": {
    "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
    "input": {
      "designSystem": {
        "colors": {
          "schemes": {
            "scheme2": {
              "base": {
                "background": "#cdf7f3",
                "text": "#1f2928"
              }
            }
          }
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
  mutation ChangeScheme2Colors($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
    checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
      checkoutBranding {
        designSystem {
          colors {
            schemes {
              scheme2 {
                base {
                  background
                  text
                }
              }
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "input": {
            "designSystem": {
                "colors": {
                    "schemes": {
                        "scheme2": {
                            "base": {
                                "background": "#cdf7f3",
                                "text": "#1f2928"
                            }
                        }
                    }
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
  mutation ChangeScheme2Colors($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
    checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
      checkoutBranding {
        designSystem {
          colors {
            schemes {
              scheme2 {
                base {
                  background
                  text
                }
              }
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "input": {
    "designSystem": {
      "colors": {
        "schemes": {
          "scheme2": {
            "base": {
              "background": "#cdf7f3",
              "text": "#1f2928"
            }
          }
        }
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
    "query": `mutation ChangeScheme2Colors($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
      checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
        checkoutBranding {
          designSystem {
            colors {
              schemes {
                scheme2 {
                  base {
                    background
                    text
                  }
                }
              }
            }
          }
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "input": {
            "designSystem": {
                "colors": {
                    "schemes": {
                        "scheme2": {
                            "base": {
                                "background": "#cdf7f3",
                                "text": "#1f2928"
                            }
                        }
                    }
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "checkoutBrandingUpsert": {
    "checkoutBranding": {
      "designSystem": {
        "colors": {
          "schemes": {
            "scheme2": {
              "base": {
                "background": "#cdf7f3",
                "text": "#1f2928"
              }
            }
          }
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Modify checkout font settings

#### Query

```graphql
mutation SetShopifyFonts($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
  checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
    checkoutBranding {
      designSystem {
        typography {
          size {
            base
            ratio
          }
          primary {
            name
            base {
              weight
            }
            bold {
              weight
            }
          }
          secondary {
            name
            base {
              weight
            }
            bold {
              weight
            }
          }
        }
      }
    }
    userErrors {
      message
    }
  }
}
``` #### Variables

```json
{
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "input": {
    "designSystem": {
      "typography": {
        "primary": {
          "shopifyFontGroup": {
            "name": "Univers Next"
          }
        },
        "secondary": {
          "shopifyFontGroup": {
            "name": "Univers Next"
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
"query": "mutation SetShopifyFonts($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) { checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) { checkoutBranding { designSystem { typography { size { base ratio } primary { name base { weight } bold { weight } } secondary { name base { weight } bold { weight } } } } } userErrors { message } } }",
 "variables": {
    "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
    "input": {
      "designSystem": {
        "typography": {
          "primary": {
            "shopifyFontGroup": {
              "name": "Univers Next"
            }
          },
          "secondary": {
            "shopifyFontGroup": {
              "name": "Univers Next"
            }
          }
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
  mutation SetShopifyFonts($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
    checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
      checkoutBranding {
        designSystem {
          typography {
            size {
              base
              ratio
            }
            primary {
              name
              base {
                weight
              }
              bold {
                weight
              }
            }
            secondary {
              name
              base {
                weight
              }
              bold {
                weight
              }
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "input": {
            "designSystem": {
                "typography": {
                    "primary": {
                        "shopifyFontGroup": {
                            "name": "Univers Next"
                        }
                    },
                    "secondary": {
                        "shopifyFontGroup": {
                            "name": "Univers Next"
                        }
                    }
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
  mutation SetShopifyFonts($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
    checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
      checkoutBranding {
        designSystem {
          typography {
            size {
              base
              ratio
            }
            primary {
              name
              base {
                weight
              }
              bold {
                weight
              }
            }
            secondary {
              name
              base {
                weight
              }
              bold {
                weight
              }
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "input": {
    "designSystem": {
      "typography": {
        "primary": {
          "shopifyFontGroup": {
            "name": "Univers Next"
          }
        },
        "secondary": {
          "shopifyFontGroup": {
            "name": "Univers Next"
          }
        }
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
    "query": `mutation SetShopifyFonts($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
      checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
        checkoutBranding {
          designSystem {
            typography {
              size {
                base
                ratio
              }
              primary {
                name
                base {
                  weight
                }
                bold {
                  weight
                }
              }
              secondary {
                name
                base {
                  weight
                }
                bold {
                  weight
                }
              }
            }
          }
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "input": {
            "designSystem": {
                "typography": {
                    "primary": {
                        "shopifyFontGroup": {
                            "name": "Univers Next"
                        }
                    },
                    "secondary": {
                        "shopifyFontGroup": {
                            "name": "Univers Next"
                        }
                    }
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "checkoutBrandingUpsert": {
    "checkoutBranding": {
      "designSystem": {
        "typography": {
          "size": {
            "base": 14,
            "ratio": 1.2
          },
          "primary": {
            "name": "Univers Next",
            "base": {
              "weight": 400
            },
            "bold": {
              "weight": 700
            }
          },
          "secondary": {
            "name": "Univers Next",
            "base": {
              "weight": 400
            },
            "bold": {
              "weight": 700
            }
          }
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Modify global colors

#### Query

```graphql
mutation ChangeGlobalColors($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
  checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
    checkoutBranding {
      designSystem {
        colors {
          global {
            success
            warning
            critical
            info
            brand
            accent
            decorative
          }
        }
      }
    }
    userErrors {
      message
    }
  }
}
``` #### Variables

```json
{
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "input": {
    "designSystem": {
      "colors": {
        "global": {
          "success": "#38e004",
          "warning": "#e0e004",
          "critical": "#e00404",
          "info": "#04e0e0",
          "brand": "#e004e0",
          "accent": "#04e004",
          "decorative": "#e0e0e0"
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
"query": "mutation ChangeGlobalColors($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) { checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) { checkoutBranding { designSystem { colors { global { success warning critical info brand accent decorative } } } } userErrors { message } } }",
 "variables": {
    "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
    "input": {
      "designSystem": {
        "colors": {
          "global": {
            "success": "#38e004",
            "warning": "#e0e004",
            "critical": "#e00404",
            "info": "#04e0e0",
            "brand": "#e004e0",
            "accent": "#04e004",
            "decorative": "#e0e0e0"
          }
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
  mutation ChangeGlobalColors($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
    checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
      checkoutBranding {
        designSystem {
          colors {
            global {
              success
              warning
              critical
              info
              brand
              accent
              decorative
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "input": {
            "designSystem": {
                "colors": {
                    "global": {
                        "success": "#38e004",
                        "warning": "#e0e004",
                        "critical": "#e00404",
                        "info": "#04e0e0",
                        "brand": "#e004e0",
                        "accent": "#04e004",
                        "decorative": "#e0e0e0"
                    }
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
  mutation ChangeGlobalColors($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
    checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
      checkoutBranding {
        designSystem {
          colors {
            global {
              success
              warning
              critical
              info
              brand
              accent
              decorative
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "input": {
    "designSystem": {
      "colors": {
        "global": {
          "success": "#38e004",
          "warning": "#e0e004",
          "critical": "#e00404",
          "info": "#04e0e0",
          "brand": "#e004e0",
          "accent": "#04e004",
          "decorative": "#e0e0e0"
        }
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
    "query": `mutation ChangeGlobalColors($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
      checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
        checkoutBranding {
          designSystem {
            colors {
              global {
                success
                warning
                critical
                info
                brand
                accent
                decorative
              }
            }
          }
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "input": {
            "designSystem": {
                "colors": {
                    "global": {
                        "success": "#38e004",
                        "warning": "#e0e004",
                        "critical": "#e00404",
                        "info": "#04e0e0",
                        "brand": "#e004e0",
                        "accent": "#04e004",
                        "decorative": "#e0e0e0"
                    }
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "checkoutBrandingUpsert": {
    "checkoutBranding": {
      "designSystem": {
        "colors": {
          "global": {
            "success": "#38e004",
            "warning": "#e0e004",
            "critical": "#e00404",
            "info": "#04e0e0",
            "brand": "#e004e0",
            "accent": "#04e004",
            "decorative": "#e0e0e0"
          }
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Reset all styling to defaults

#### Description

Remove all checkout branding customizations and reset to the defaults.

#### Query

```graphql
mutation ChangeColorSchemeAndOrderSummary($checkoutBrandingInput: CheckoutBrandingInput, $checkoutProfileId: ID!) {
  checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
    checkoutBranding {
      designSystem {
        colors {
          schemes {
            scheme1 {
              base {
                background
                text
              }
            }
          }
        }
      }
      customizations {
        orderSummary {
          colorScheme
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
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "checkoutBrandingInput": null
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ChangeColorSchemeAndOrderSummary($checkoutBrandingInput: CheckoutBrandingInput, $checkoutProfileId: ID!) { checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) { checkoutBranding { designSystem { colors { schemes { scheme1 { base { background text } } } } } customizations { orderSummary { colorScheme } } } userErrors { field message } } }",
 "variables": {
    "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
    "checkoutBrandingInput": null
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation ChangeColorSchemeAndOrderSummary($checkoutBrandingInput: CheckoutBrandingInput, $checkoutProfileId: ID!) {
    checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
      checkoutBranding {
        designSystem {
          colors {
            schemes {
              scheme1 {
                base {
                  background
                  text
                }
              }
            }
          }
        }
        customizations {
          orderSummary {
            colorScheme
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
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "checkoutBrandingInput": null
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
  mutation ChangeColorSchemeAndOrderSummary($checkoutBrandingInput: CheckoutBrandingInput, $checkoutProfileId: ID!) {
    checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
      checkoutBranding {
        designSystem {
          colors {
            schemes {
              scheme1 {
                base {
                  background
                  text
                }
              }
            }
          }
        }
        customizations {
          orderSummary {
            colorScheme
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
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "checkoutBrandingInput": null
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation ChangeColorSchemeAndOrderSummary($checkoutBrandingInput: CheckoutBrandingInput, $checkoutProfileId: ID!) {
      checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
        checkoutBranding {
          designSystem {
            colors {
              schemes {
                scheme1 {
                  base {
                    background
                    text
                  }
                }
              }
            }
          }
          customizations {
            orderSummary {
              colorScheme
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
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "checkoutBrandingInput": null
    },
  },
});
``` #### Response

```json
{
  "checkoutBrandingUpsert": {
    "checkoutBranding": {
      "designSystem": null,
      "customizations": null
    },
    "userErrors": []
  }
}
``` 
*   ### Reset color schemes to the defaults

#### Description

Remove the customizations made to a color scheme and reset the scheme to the defaults.

#### Query

```graphql
mutation ChangeColorScheme1($checkoutBrandingInput: CheckoutBrandingInput!, $checkoutProfileId: ID!) {
  checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
    checkoutBranding {
      designSystem {
        colors {
          schemes {
            scheme1 {
              base {
                background
                text
              }
              control {
                background
                border
                selected {
                  background
                  border
                }
              }
              primaryButton {
                hover {
                  background
                }
              }
            }
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
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "checkoutBrandingInput": {
    "designSystem": {
      "colors": {
        "schemes": null
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
"query": "mutation ChangeColorScheme1($checkoutBrandingInput: CheckoutBrandingInput!, $checkoutProfileId: ID!) { checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) { checkoutBranding { designSystem { colors { schemes { scheme1 { base { background text } control { background border selected { background border } } primaryButton { hover { background } } } } } } } userErrors { field message } } }",
 "variables": {
    "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
    "checkoutBrandingInput": {
      "designSystem": {
        "colors": {
          "schemes": null
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
  mutation ChangeColorScheme1($checkoutBrandingInput: CheckoutBrandingInput!, $checkoutProfileId: ID!) {
    checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
      checkoutBranding {
        designSystem {
          colors {
            schemes {
              scheme1 {
                base {
                  background
                  text
                }
                control {
                  background
                  border
                  selected {
                    background
                    border
                  }
                }
                primaryButton {
                  hover {
                    background
                  }
                }
              }
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
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "checkoutBrandingInput": {
            "designSystem": {
                "colors": {
                    "schemes": null
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
  mutation ChangeColorScheme1($checkoutBrandingInput: CheckoutBrandingInput!, $checkoutProfileId: ID!) {
    checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
      checkoutBranding {
        designSystem {
          colors {
            schemes {
              scheme1 {
                base {
                  background
                  text
                }
                control {
                  background
                  border
                  selected {
                    background
                    border
                  }
                }
                primaryButton {
                  hover {
                    background
                  }
                }
              }
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
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "checkoutBrandingInput": {
    "designSystem": {
      "colors": {
        "schemes": null
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
    "query": `mutation ChangeColorScheme1($checkoutBrandingInput: CheckoutBrandingInput!, $checkoutProfileId: ID!) {
      checkoutBrandingUpsert(checkoutBrandingInput: $checkoutBrandingInput, checkoutProfileId: $checkoutProfileId) {
        checkoutBranding {
          designSystem {
            colors {
              schemes {
                scheme1 {
                  base {
                    background
                    text
                  }
                  control {
                    background
                    border
                    selected {
                      background
                      border
                    }
                  }
                  primaryButton {
                    hover {
                      background
                    }
                  }
                }
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
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "checkoutBrandingInput": {
            "designSystem": {
                "colors": {
                    "schemes": null
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "checkoutBrandingUpsert": {
    "checkoutBranding": {
      "designSystem": {
        "colors": {
          "schemes": null
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### Set a checkout logo

#### Description

Modify the logo for checkout branding settings with a file already uploaded to Shopify (must not be of SVG format). Use the [fileCreate](/api/admin-graphql/unstable/mutations/fileCreate) mutation to upload a new image to Shopify.

#### Query

```graphql
mutation SetLogo($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
  checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
    checkoutBranding {
      customizations {
        header {
          logo {
            image {
              url
            }
          }
        }
      }
    }
    userErrors {
      message
    }
  }
}
``` #### Variables

```json
{
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "input": {
    "customizations": {
      "header": {
        "logo": {
          "image": {
            "mediaImageId": null
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
"query": "mutation SetLogo($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) { checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) { checkoutBranding { customizations { header { logo { image { url } } } } } userErrors { message } } }",
 "variables": {
    "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
    "input": {
      "customizations": {
        "header": {
          "logo": {
            "image": {
              "mediaImageId": null
            }
          }
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
  mutation SetLogo($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
    checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
      checkoutBranding {
        customizations {
          header {
            logo {
              image {
                url
              }
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }`,
  {
    variables: {
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "input": {
            "customizations": {
                "header": {
                    "logo": {
                        "image": {
                            "mediaImageId": null
                        }
                    }
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
  mutation SetLogo($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
    checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
      checkoutBranding {
        customizations {
          header {
            logo {
              image {
                url
              }
            }
          }
        }
      }
      userErrors {
        message
      }
    }
  }
QUERY

variables = {
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "input": {
    "customizations": {
      "header": {
        "logo": {
          "image": {
            "mediaImageId": null
          }
        }
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
    "query": `mutation SetLogo($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
      checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
        checkoutBranding {
          customizations {
            header {
              logo {
                image {
                  url
                }
              }
            }
          }
        }
        userErrors {
          message
        }
      }
    }`,
    "variables": {
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "input": {
            "customizations": {
                "header": {
                    "logo": {
                        "image": {
                            "mediaImageId": null
                        }
                    }
                }
            }
        }
    },
  },
});
``` #### Response

```json
{
  "checkoutBrandingUpsert": {
    "checkoutBranding": {
      "customizations": {
        "header": {
          "logo": {
            "image": null
          }
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### checkoutBrandingUpsert reference

Examples
--------

Apply section styles to main and order summary

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20ApplySectionStyles(%24checkoutProfileId%3A%20ID!%2C%20%24input%3A%20CheckoutBrandingInput!)%20%7B%0A%20%20checkoutBrandingUpsert(checkoutProfileId%3A%20%24checkoutProfileId%2C%20checkoutBrandingInput%3A%20%24input)%20%7B%0A%20%20%20%20checkoutBranding%20%7B%0A%20%20%20%20%20%20customizations%20%7B%0A%20%20%20%20%20%20%20%20main%20%7B%0A%20%20%20%20%20%20%20%20%20%20section%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20cornerRadius%0A%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%0A%20%20%20%20%20%20%20%20%20%20%20%20shadow%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20orderSummary%20%7B%0A%20%20%20%20%20%20%20%20%20%20section%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20colorScheme%0A%20%20%20%20%20%20%20%20%20%20%20%20shadow%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%0A%20%20%20%20%20%20%20%20%20%20%20%20border%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22checkoutProfileId%22%3A%20%22gid%3A%2F%2Fshopify%2FCheckoutProfile%2F235093654%22%2C%0A%20%20%22input%22%3A%20%7B%0A%20%20%20%20%22customizations%22%3A%20%7B%0A%20%20%20%20%20%20%22main%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22section%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22cornerRadius%22%3A%20%22LARGE%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22colorScheme%22%3A%20%22COLOR_SCHEME2%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22shadow%22%3A%20%22LARGE_200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22padding%22%3A%20%22LARGE_400%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22orderSummary%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22section%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22colorScheme%22%3A%20%22COLOR_SCHEME1%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22shadow%22%3A%20%22LARGE_200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22padding%22%3A%20%22LARGE_400%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22border%22%3A%20%22FULL%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation ApplySectionStyles($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {

 checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {

 checkoutBranding {

 customizations {

 main {

 section {

 cornerRadius

 colorScheme

 shadow

 padding

 }

 }

 orderSummary {

 section {

 colorScheme

 shadow

 padding

 border

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

variables:{

"checkoutProfileId":"gid://shopify/CheckoutProfile/235093654",

"input":{

```
mutation ApplySectionStyles($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
  checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
    checkoutBranding {
      customizations {
        main {
          section {
            cornerRadius
            colorScheme
            shadow
            padding
          }
        }
        orderSummary {
          section {
            colorScheme
            shadow
            padding
            border
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
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation ApplySectionStyles($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) { checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) { checkoutBranding { customizations { main { section { cornerRadius colorScheme shadow padding } } orderSummary { section { colorScheme shadow padding border } } } } userErrors { field message } } }",
 "variables": {
    "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
    "input": {
      "customizations": {
        "main": {
          "section": {
            "cornerRadius": "LARGE",
            "colorScheme": "COLOR_SCHEME2",
            "shadow": "LARGE_200",
            "padding": "LARGE_400"
          }
        },
        "orderSummary": {
          "section": {
            "colorScheme": "COLOR_SCHEME1",
            "shadow": "LARGE_200",
            "padding": "LARGE_400",
            "border": "FULL"
          }
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
  mutation ApplySectionStyles($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
    checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
      checkoutBranding {
        customizations {
          main {
            section {
              cornerRadius
              colorScheme
              shadow
              padding
            }
          }
          orderSummary {
            section {
              colorScheme
              shadow
              padding
              border
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
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "input": {
            "customizations": {
                "main": {
                    "section": {
                        "cornerRadius": "LARGE",
                        "colorScheme": "COLOR_SCHEME2",
                        "shadow": "LARGE_200",
                        "padding": "LARGE_400"
                    }
                },
                "orderSummary": {
                    "section": {
                        "colorScheme": "COLOR_SCHEME1",
                        "shadow": "LARGE_200",
                        "padding": "LARGE_400",
                        "border": "FULL"
                    }
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
    "query": `mutation ApplySectionStyles($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
      checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
        checkoutBranding {
          customizations {
            main {
              section {
                cornerRadius
                colorScheme
                shadow
                padding
              }
            }
            orderSummary {
              section {
                colorScheme
                shadow
                padding
                border
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
        "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
        "input": {
            "customizations": {
                "main": {
                    "section": {
                        "cornerRadius": "LARGE",
                        "colorScheme": "COLOR_SCHEME2",
                        "shadow": "LARGE_200",
                        "padding": "LARGE_400"
                    }
                },
                "orderSummary": {
                    "section": {
                        "colorScheme": "COLOR_SCHEME1",
                        "shadow": "LARGE_200",
                        "padding": "LARGE_400",
                        "border": "FULL"
                    }
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
  mutation ApplySectionStyles($checkoutProfileId: ID!, $input: CheckoutBrandingInput!) {
    checkoutBrandingUpsert(checkoutProfileId: $checkoutProfileId, checkoutBrandingInput: $input) {
      checkoutBranding {
        customizations {
          main {
            section {
              cornerRadius
              colorScheme
              shadow
              padding
            }
          }
          orderSummary {
            section {
              colorScheme
              shadow
              padding
              border
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
  "checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",
  "input": {
    "customizations": {
      "main": {
        "section": {
          "cornerRadius": "LARGE",
          "colorScheme": "COLOR_SCHEME2",
          "shadow": "LARGE_200",
          "padding": "LARGE_400"
        }
      },
      "orderSummary": {
        "section": {
          "colorScheme": "COLOR_SCHEME1",
          "shadow": "LARGE_200",
          "padding": "LARGE_400",
          "border": "FULL"
        }
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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"checkoutProfileId": "gid://shopify/CheckoutProfile/235093654",

"input": {

"customizations": {

"main": {

"section": {

"cornerRadius": "LARGE",

"colorScheme": "COLOR_SCHEME2",

"shadow": "LARGE_200",

"padding": "LARGE_400"

}

},

"orderSummary": {

"section": {

"colorScheme": "COLOR_SCHEME1",

"shadow": "LARGE_200",

"padding": "LARGE_400",

"border": "FULL"

}

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

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"checkoutBrandingUpsert": {

"checkoutBranding": {

"customizations": {

"main": {

"section": {

"cornerRadius": "LARGE",

"colorScheme": "COLOR_SCHEME2",

"shadow": "LARGE_200",

"padding": "LARGE_400"

}

},

"orderSummary": {

"section": {

"colorScheme": "COLOR_SCHEME1",

"shadow": "LARGE_200",

"padding": "LARGE_400",

"border": "FULL"

}

}

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*