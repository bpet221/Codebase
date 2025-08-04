---
title: "giftCardDebit"
description: "Shopify GraphQL Admin API documentation for giftcarddebit"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit"
extraction_method: "jina"
sections: ['Common objects', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: giftCardDebit - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit

Markdown Content:
giftCardDebit - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit#main-content)

[![Image 1: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-light-CrZnRVR7.svg)![Image 2: Docs page](https://cdn.shopify.com/shopifycloud/shopify-dev/production/assets/dev-docs-logo-2-dark-BhuAYNm7.svg)](https://shopify.dev/docs)

*   [Apps](https://shopify.dev/docs/apps/build)
*   [Storefronts](https://shopify.dev/docs/storefronts)
*   APIs and references

*   search + assistant

[Log in](https://partners.shopify.com/organizations?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)[Sign up](https://partners.shopify.com/signup/developer?shpxid=222dd762-CA08-48FF-E4D4-FF926B8FFCAD)

Collapse sidebar

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
*   B2b   
*   Billing   
*   Bulk Operations   
*   Cart   
*   Checkout Branding   
*   
Common Objects

    *   Queries   
    *   
Mutations

        *   [customer Payment Method Credit Card Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodcreditcardupdate)
        *   [customer Payment Method Get Update Url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodgetupdateurl)
        *   [customer Payment Method Paypal Billing Agreement Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodpaypalbillingagreementupdate)
        *   [customer Payment Method Revoke](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerpaymentmethodrevoke)
        *   [fulfillment Constraint Rule Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintruledelete)
        *   [fulfillment Constraint Rule Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentconstraintruleupdate)
        *   [gift Card Credit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardcredit)
        *   [gift Card Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddeactivate)
        *   [gift Card Debit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit)
        *   [gift Card Send Notification To Customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardsendnotificationtocustomer)
        *   [gift Card Send Notification To Recipient](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcardsendnotificationtorecipient)
        *   [market Regions Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketregionsdelete)
        *   [payment Customization Activation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationactivation)
        *   [payment Customization Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationcreate)
        *   [payment Customization Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationdelete)
        *   [payment Customization Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentcustomizationupdate)
        *   [payment Reminder Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentremindersend)
        *   [payment Terms Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsdelete)
        *   [payment Terms Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymenttermsupdate)
        *   [product Feed Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfeedcreate)
        *   [product Feed Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfeeddelete)
        *   [product Full Sync](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productfullsync)
        *   [saved Search Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedsearchcreate)
        *   [saved Search Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/savedsearchupdate)
        *   [staged Upload Target Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadtargetgenerate)
        *   [staged Upload Targets Generate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadtargetsgenerate)
        *   [tags Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd)
        *   [tags Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsremove)
        *   [validation Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationcreate)
        *   [validation Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationdelete)
        *   [validation Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationupdate)
        *   [web Presence Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webpresencedelete)

    *   Objects   

*   Customers   
*   Discounts And Marketing   
*   Events   
*   Inventory   
*   Localizations   
*   Metafields   
*   Metaobjects   
*   Online Store   
*   Orders   
*   Privacy   
*   Products And Collections   
*   Retail   
*   Shipping And Fulfillment   
*   Shopify Markets   
*   Shopify Payments   
*   Store Properties   
*   Webhooks   
*   
* * *

*   GraphQL Types   

[Full index](https://shopify.dev/docs/api/admin-graphql/latest/full-index)

Choose a version: 

2025-07 latest

[Anchor to giftCardDebit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit#top)
gift Card Debit
===============

mutation

Requires `write_gift_card_transactions` access scope.

Debit a gift card.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit#arguments)
Arguments
---------

[Anchor to debitInput](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit#arguments-debitInput)debit Input

•[Gift Card Debit Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardDebitInput)

required

The input fields to debit a gift card.

Show input fields

[Anchor to id](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit#arguments-id)id

•[ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

required

The ID of the gift card to be debited.

* * *

Was this section helpful?

Yes No

[Anchor to GiftCardDebitPayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit#returns)Gift Card Debit Payload returns
----------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to giftCardDebitTransaction](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit#returns-giftCardDebitTransaction)gift Card Debit Transaction

•[Gift Card Debit Transaction](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction)

The gift card debit transaction that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftcarddebit#returns-userErrors)user Errors

•[[Gift Card Transaction User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Debit a gift card by ID

#### Query

```graphql
mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
  giftCardDebit(id: $id, debitInput: $debitInput) {
    giftCardDebitTransaction {
      id
      amount {
        amount
        currencyCode
      }
      processedAt
      note
      giftCard {
        id
        balance {
          amount
          currencyCode
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
  "id": "gid://shopify/GiftCard/411106674",
  "debitInput": {
    "debitAmount": {
      "amount": "10",
      "currencyCode": "USD"
    },
    "processedAt": "2024-09-09T12:48:33-04:00",
    "note": "A note."
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) { giftCardDebit(id: $id, debitInput: $debitInput) { giftCardDebitTransaction { id amount { amount currencyCode } processedAt note giftCard { id balance { amount currencyCode } } } userErrors { message field code } } }",
 "variables": {
    "id": "gid://shopify/GiftCard/411106674",
    "debitInput": {
      "debitAmount": {
        "amount": "10",
        "currencyCode": "USD"
      },
      "processedAt": "2024-09-09T12:48:33-04:00",
      "note": "A note."
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
    giftCardDebit(id: $id, debitInput: $debitInput) {
      giftCardDebitTransaction {
        id
        amount {
          amount
          currencyCode
        }
        processedAt
        note
        giftCard {
          id
          balance {
            amount
            currencyCode
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
        "id": "gid://shopify/GiftCard/411106674",
        "debitInput": {
            "debitAmount": {
                "amount": "10",
                "currencyCode": "USD"
            },
            "processedAt": "2024-09-09T12:48:33-04:00",
            "note": "A note."
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
  mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
    giftCardDebit(id: $id, debitInput: $debitInput) {
      giftCardDebitTransaction {
        id
        amount {
          amount
          currencyCode
        }
        processedAt
        note
        giftCard {
          id
          balance {
            amount
            currencyCode
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
  "id": "gid://shopify/GiftCard/411106674",
  "debitInput": {
    "debitAmount": {
      "amount": "10",
      "currencyCode": "USD"
    },
    "processedAt": "2024-09-09T12:48:33-04:00",
    "note": "A note."
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
      giftCardDebit(id: $id, debitInput: $debitInput) {
        giftCardDebitTransaction {
          id
          amount {
            amount
            currencyCode
          }
          processedAt
          note
          giftCard {
            id
            balance {
              amount
              currencyCode
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
        "id": "gid://shopify/GiftCard/411106674",
        "debitInput": {
            "debitAmount": {
                "amount": "10",
                "currencyCode": "USD"
            },
            "processedAt": "2024-09-09T12:48:33-04:00",
            "note": "A note."
        }
    },
  },
});
``` #### Response

```json
{
  "giftCardDebit": {
    "giftCardDebitTransaction": {
      "id": "gid://shopify/GiftCardDebitTransaction/1064273912",
      "amount": {
        "amount": "-10.0",
        "currencyCode": "USD"
      },
      "processedAt": "2024-09-09T16:48:33Z",
      "note": "A note.",
      "giftCard": {
        "id": "gid://shopify/GiftCard/411106674",
        "balance": {
          "amount": "15.0",
          "currencyCode": "USD"
        }
      }
    },
    "userErrors": []
  }
}
``` 
*   ### giftCardDebit reference

Examples
--------

Debit a gift card by ID

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20giftCardDebit(%24id%3A%20ID!%2C%20%24debitInput%3A%20GiftCardDebitInput!)%20%7B%0A%20%20giftCardDebit(id%3A%20%24id%2C%20debitInput%3A%20%24debitInput)%20%7B%0A%20%20%20%20giftCardDebitTransaction%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20amount%20%7B%0A%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20processedAt%0A%20%20%20%20%20%20note%0A%20%20%20%20%20%20giftCard%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20balance%20%7B%0A%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20currencyCode%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20message%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20code%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FGiftCard%2F411106674%22%2C%0A%20%20%22debitInput%22%3A%20%7B%0A%20%20%20%20%22debitAmount%22%3A%20%7B%0A%20%20%20%20%20%20%22amount%22%3A%20%2210%22%2C%0A%20%20%20%20%20%20%22currencyCode%22%3A%20%22USD%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22processedAt%22%3A%20%222024-09-09T12%3A48%3A33-04%3A00%22%2C%0A%20%20%20%20%22note%22%3A%20%22A%20note.%22%0A%20%20%7D%0A%7D)Copy

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

37

38

39

40

41

42

43

44

45

›

⌄

⌄

⌄

⌄

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {

 giftCardDebit(id: $id, debitInput: $debitInput) {

 giftCardDebitTransaction {

 id

 amount {

 amount

 currencyCode

 }

 processedAt

 note

 giftCard {

 id

 balance {

 amount

 currencyCode

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

"id":"gid://shopify/GiftCard/411106674",

"debitInput":{

"debitAmount":{

"amount":"10",

"currencyCode":"USD"

},

"processedAt":"2024-09-09T12:48:33-04:00",

"note":"A note."

}

},

},

);

const data=await response.json();

```
mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
  giftCardDebit(id: $id, debitInput: $debitInput) {
    giftCardDebitTransaction {
      id
      amount {
        amount
        currencyCode
      }
      processedAt
      note
      giftCard {
        id
        balance {
          amount
          currencyCode
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
"query": "mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) { giftCardDebit(id: $id, debitInput: $debitInput) { giftCardDebitTransaction { id amount { amount currencyCode } processedAt note giftCard { id balance { amount currencyCode } } } userErrors { message field code } } }",
 "variables": {
    "id": "gid://shopify/GiftCard/411106674",
    "debitInput": {
      "debitAmount": {
        "amount": "10",
        "currencyCode": "USD"
      },
      "processedAt": "2024-09-09T12:48:33-04:00",
      "note": "A note."
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
    giftCardDebit(id: $id, debitInput: $debitInput) {
      giftCardDebitTransaction {
        id
        amount {
          amount
          currencyCode
        }
        processedAt
        note
        giftCard {
          id
          balance {
            amount
            currencyCode
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
        "id": "gid://shopify/GiftCard/411106674",
        "debitInput": {
            "debitAmount": {
                "amount": "10",
                "currencyCode": "USD"
            },
            "processedAt": "2024-09-09T12:48:33-04:00",
            "note": "A note."
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
    "query": `mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
      giftCardDebit(id: $id, debitInput: $debitInput) {
        giftCardDebitTransaction {
          id
          amount {
            amount
            currencyCode
          }
          processedAt
          note
          giftCard {
            id
            balance {
              amount
              currencyCode
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
        "id": "gid://shopify/GiftCard/411106674",
        "debitInput": {
            "debitAmount": {
                "amount": "10",
                "currencyCode": "USD"
            },
            "processedAt": "2024-09-09T12:48:33-04:00",
            "note": "A note."
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
  mutation giftCardDebit($id: ID!, $debitInput: GiftCardDebitInput!) {
    giftCardDebit(id: $id, debitInput: $debitInput) {
      giftCardDebitTransaction {
        id
        amount {
          amount
          currencyCode
        }
        processedAt
        note
        giftCard {
          id
          balance {
            amount
            currencyCode
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
  "id": "gid://shopify/GiftCard/411106674",
  "debitInput": {
    "debitAmount": {
      "amount": "10",
      "currencyCode": "USD"
    },
    "processedAt": "2024-09-09T12:48:33-04:00",
    "note": "A note."
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

{

"id": "gid://shopify/GiftCard/411106674",

"debitInput": {

"debitAmount": {

"amount": "10",

"currencyCode": "USD"

},

"processedAt": "2024-09-09T12:48:33-04:00",

"note": "A note."

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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"giftCardDebit": {

"giftCardDebitTransaction": {

"id": "gid://shopify/GiftCardDebitTransaction/1064273912",

"amount": {

"amount": "-10.0",

"currencyCode": "USD"

},

"processedAt": "2024-09-09T16:48:33Z",

"note": "A note.",

"giftCard": {

"id": "gid://shopify/GiftCard/411106674",

"balance": {

"amount": "15.0",

"currencyCode": "USD"

}

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*