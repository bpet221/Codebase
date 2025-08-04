---
title: "availableLocales"
description: "Shopify GraphQL Admin API documentation for availablelocales"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/availablelocales"
extraction_method: "jina"
sections: ['Localizations', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: availableLocales - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/queries/availablelocales

Markdown Content:
availableLocales - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablelocales#main-content)

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
*   Common Objects   
*   Customers   
*   Discounts And Marketing   
*   Events   
*   Inventory   
*   
Localizations

    *   
Queries

        *   [available Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablelocales)
        *   [market Localizable Resource](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresource)
        *   [market Localizable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresources)
        *   [market Localizable Resources By Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketlocalizableresourcesbyids)
        *   [shop Locales](https://shopify.dev/docs/api/admin-graphql/latest/queries/shoplocales)
        *   [translatable Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresources)

    *   Mutations   
    *   Objects   

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

[Anchor to availableLocales](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablelocales#top)
available Locales
=================

query

A list of available locales.

[Anchor to Possible returns](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablelocales#possible-returns)Possible returns
-----------------------------------------------------------------------------------------------------------------------------------------

[Anchor to Locale](https://shopify.dev/docs/api/admin-graphql/latest/queries/availablelocales#returns-Locale)Locale

•[[Locale!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale)

A locale.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Retrieve a list of available locales

#### Description

The following query retrieves a list of locales that you can enable for a shop, including their ISO country code and name.

#### Query

```graphql
query {
  availableLocales {
    isoCode
    name
  }
}
``` #### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { availableLocales { isoCode name } }"
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    availableLocales {
      isoCode
      name
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
  query {
    availableLocales {
      isoCode
      name
    }
  }
QUERY

response = client.query(query: query)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    availableLocales {
      isoCode
      name
    }
  }`,
});
``` #### Response

```json
{
  "availableLocales": [
    {
      "isoCode": "af",
      "name": "Afrikaans"
    },
    {
      "isoCode": "ak",
      "name": "Akan"
    },
    {
      "isoCode": "sq",
      "name": "Albanian"
    },
    {
      "isoCode": "am",
      "name": "Amharic"
    },
    {
      "isoCode": "ar",
      "name": "Arabic"
    },
    {
      "isoCode": "hy",
      "name": "Armenian"
    },
    {
      "isoCode": "as",
      "name": "Assamese"
    },
    {
      "isoCode": "az",
      "name": "Azerbaijani"
    },
    {
      "isoCode": "bm",
      "name": "Bambara"
    },
    {
      "isoCode": "bn",
      "name": "Bangla"
    },
    {
      "isoCode": "eu",
      "name": "Basque"
    },
    {
      "isoCode": "be",
      "name": "Belarusian"
    },
    {
      "isoCode": "bs",
      "name": "Bosnian"
    },
    {
      "isoCode": "br",
      "name": "Breton"
    },
    {
      "isoCode": "bg",
      "name": "Bulgarian"
    },
    {
      "isoCode": "my",
      "name": "Burmese"
    },
    {
      "isoCode": "ca",
      "name": "Catalan"
    },
    {
      "isoCode": "ckb",
      "name": "Central Kurdish"
    },
    {
      "isoCode": "ce",
      "name": "Chechen"
    },
    {
      "isoCode": "zh-CN",
      "name": "Chinese (Simplified)"
    },
    {
      "isoCode": "zh-TW",
      "name": "Chinese (Traditional)"
    },
    {
      "isoCode": "kw",
      "name": "Cornish"
    },
    {
      "isoCode": "hr",
      "name": "Croatian"
    },
    {
      "isoCode": "cs",
      "name": "Czech"
    },
    {
      "isoCode": "da",
      "name": "Danish"
    },
    {
      "isoCode": "nl",
      "name": "Dutch"
    },
    {
      "isoCode": "dz",
      "name": "Dzongkha"
    },
    {
      "isoCode": "en",
      "name": "English"
    },
    {
      "isoCode": "eo",
      "name": "Esperanto"
    },
    {
      "isoCode": "et",
      "name": "Estonian"
    },
    {
      "isoCode": "ee",
      "name": "Ewe"
    },
    {
      "isoCode": "fo",
      "name": "Faroese"
    },
    {
      "isoCode": "fil",
      "name": "Filipino"
    },
    {
      "isoCode": "fi",
      "name": "Finnish"
    },
    {
      "isoCode": "fr",
      "name": "French"
    },
    {
      "isoCode": "ff",
      "name": "Fulah"
    },
    {
      "isoCode": "gl",
      "name": "Galician"
    },
    {
      "isoCode": "lg",
      "name": "Ganda"
    },
    {
      "isoCode": "ka",
      "name": "Georgian"
    },
    {
      "isoCode": "de",
      "name": "German"
    },
    {
      "isoCode": "el",
      "name": "Greek"
    },
    {
      "isoCode": "gu",
      "name": "Gujarati"
    },
    {
      "isoCode": "ha",
      "name": "Hausa"
    },
    {
      "isoCode": "he",
      "name": "Hebrew"
    },
    {
      "isoCode": "hi",
      "name": "Hindi"
    },
    {
      "isoCode": "hu",
      "name": "Hungarian"
    },
    {
      "isoCode": "is",
      "name": "Icelandic"
    },
    {
      "isoCode": "ig",
      "name": "Igbo"
    },
    {
      "isoCode": "id",
      "name": "Indonesian"
    },
    {
      "isoCode": "ia",
      "name": "Interlingua"
    },
    {
      "isoCode": "ga",
      "name": "Irish"
    },
    {
      "isoCode": "it",
      "name": "Italian"
    },
    {
      "isoCode": "ja",
      "name": "Japanese"
    },
    {
      "isoCode": "jv",
      "name": "Javanese"
    },
    {
      "isoCode": "kl",
      "name": "Kalaallisut"
    },
    {
      "isoCode": "kn",
      "name": "Kannada"
    },
    {
      "isoCode": "ks",
      "name": "Kashmiri"
    },
    {
      "isoCode": "kk",
      "name": "Kazakh"
    },
    {
      "isoCode": "km",
      "name": "Khmer"
    },
    {
      "isoCode": "ki",
      "name": "Kikuyu"
    },
    {
      "isoCode": "rw",
      "name": "Kinyarwanda"
    },
    {
      "isoCode": "ko",
      "name": "Korean"
    },
    {
      "isoCode": "ku",
      "name": "Kurdish"
    },
    {
      "isoCode": "ky",
      "name": "Kyrgyz"
    },
    {
      "isoCode": "lo",
      "name": "Lao"
    },
    {
      "isoCode": "lv",
      "name": "Latvian"
    },
    {
      "isoCode": "ln",
      "name": "Lingala"
    },
    {
      "isoCode": "lt",
      "name": "Lithuanian"
    },
    {
      "isoCode": "lu",
      "name": "Luba-Katanga"
    },
    {
      "isoCode": "lb",
      "name": "Luxembourgish"
    },
    {
      "isoCode": "mk",
      "name": "Macedonian"
    },
    {
      "isoCode": "mg",
      "name": "Malagasy"
    },
    {
      "isoCode": "ms",
      "name": "Malay"
    },
    {
      "isoCode": "ml",
      "name": "Malayalam"
    },
    {
      "isoCode": "mt",
      "name": "Maltese"
    },
    {
      "isoCode": "gv",
      "name": "Manx"
    },
    {
      "isoCode": "mr",
      "name": "Marathi"
    },
    {
      "isoCode": "mn",
      "name": "Mongolian"
    },
    {
      "isoCode": "mi",
      "name": "Māori"
    },
    {
      "isoCode": "ne",
      "name": "Nepali"
    },
    {
      "isoCode": "nd",
      "name": "North Ndebele"
    },
    {
      "isoCode": "se",
      "name": "Northern Sami"
    },
    {
      "isoCode": "no",
      "name": "Norwegian"
    },
    {
      "isoCode": "nb",
      "name": "Norwegian (Bokmål)"
    },
    {
      "isoCode": "nn",
      "name": "Norwegian Nynorsk"
    },
    {
      "isoCode": "or",
      "name": "Odia"
    },
    {
      "isoCode": "om",
      "name": "Oromo"
    },
    {
      "isoCode": "os",
      "name": "Ossetic"
    },
    {
      "isoCode": "ps",
      "name": "Pashto"
    },
    {
      "isoCode": "fa",
      "name": "Persian"
    },
    {
      "isoCode": "pl",
      "name": "Polish"
    },
    {
      "isoCode": "pt-BR",
      "name": "Portuguese (Brazil)"
    },
    {
      "isoCode": "pt-PT",
      "name": "Portuguese (Portugal)"
    },
    {
      "isoCode": "pa",
      "name": "Punjabi"
    },
    {
      "isoCode": "qu",
      "name": "Quechua"
    },
    {
      "isoCode": "ro",
      "name": "Romanian"
    },
    {
      "isoCode": "rm",
      "name": "Romansh"
    },
    {
      "isoCode": "rn",
      "name": "Rundi"
    },
    {
      "isoCode": "ru",
      "name": "Russian"
    },
    {
      "isoCode": "sg",
      "name": "Sango"
    },
    {
      "isoCode": "sa",
      "name": "Sanskrit"
    },
    {
      "isoCode": "sc",
      "name": "Sardinian"
    },
    {
      "isoCode": "gd",
      "name": "Scottish Gaelic"
    },
    {
      "isoCode": "sr",
      "name": "Serbian"
    },
    {
      "isoCode": "sn",
      "name": "Shona"
    },
    {
      "isoCode": "ii",
      "name": "Sichuan Yi"
    },
    {
      "isoCode": "sd",
      "name": "Sindhi"
    },
    {
      "isoCode": "si",
      "name": "Sinhala"
    },
    {
      "isoCode": "sk",
      "name": "Slovak"
    },
    {
      "isoCode": "sl",
      "name": "Slovenian"
    },
    {
      "isoCode": "so",
      "name": "Somali"
    },
    {
      "isoCode": "es",
      "name": "Spanish"
    },
    {
      "isoCode": "su",
      "name": "Sundanese"
    },
    {
      "isoCode": "sw",
      "name": "Swahili"
    },
    {
      "isoCode": "sv",
      "name": "Swedish"
    },
    {
      "isoCode": "tg",
      "name": "Tajik"
    },
    {
      "isoCode": "ta",
      "name": "Tamil"
    },
    {
      "isoCode": "tt",
      "name": "Tatar"
    },
    {
      "isoCode": "te",
      "name": "Telugu"
    },
    {
      "isoCode": "th",
      "name": "Thai"
    },
    {
      "isoCode": "bo",
      "name": "Tibetan"
    },
    {
      "isoCode": "ti",
      "name": "Tigrinya"
    },
    {
      "isoCode": "to",
      "name": "Tongan"
    },
    {
      "isoCode": "tr",
      "name": "Turkish"
    },
    {
      "isoCode": "tk",
      "name": "Turkmen"
    },
    {
      "isoCode": "uk",
      "name": "Ukrainian"
    },
    {
      "isoCode": "ur",
      "name": "Urdu"
    },
    {
      "isoCode": "ug",
      "name": "Uyghur"
    },
    {
      "isoCode": "uz",
      "name": "Uzbek"
    },
    {
      "isoCode": "vi",
      "name": "Vietnamese"
    },
    {
      "isoCode": "cy",
      "name": "Welsh"
    },
    {
      "isoCode": "fy",
      "name": "Western Frisian"
    },
    {
      "isoCode": "wo",
      "name": "Wolof"
    },
    {
      "isoCode": "xh",
      "name": "Xhosa"
    },
    {
      "isoCode": "yi",
      "name": "Yiddish"
    },
    {
      "isoCode": "yo",
      "name": "Yoruba"
    },
    {
      "isoCode": "zu",
      "name": "Zulu"
    }
  ]
}
``` 

Retrieve a list of available locales
------------------------------------

Hide content

GQL cURL Remix Node.js Ruby

Show description[Open in GraphiQL](http://localhost:3457/graphiql?query=query%20%7B%0A%20%20availableLocales%20%7B%0A%20%20%20%20isoCode%0A%20%20%20%20name%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 query {

 availableLocales {

 isoCode

 name

 }

 }`,

);

const data=await response.json();

```
query {
  availableLocales {
    isoCode
    name
  }
}
```

```
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2025-07/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "query { availableLocales { isoCode name } }"
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  query {
    availableLocales {
      isoCode
      name
    }
  }`,
);

const data = await response.json();
```

```
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: `query {
    availableLocales {
      isoCode
      name
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
  query {
    availableLocales {
      isoCode
      name
    }
  }
QUERY

response = client.query(query: query)
```

Hide content

Response
--------

JSON

999

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

{

"availableLocales": [

{

"isoCode": "af",

"name": "Afrikaans"

},

{

"isoCode": "ak",

"name": "Akan"

},

{

"isoCode": "sq",

"name": "Albanian"

},

{

"isoCode": "am",

"name": "Amharic"

},

{

"isoCode": "ar",

"name": "Arabic"

},

{

"isoCode": "hy",

"name": "Armenian"

},

{

"isoCode": "as",

"name": "Assamese"

},

{

"isoCode": "az",

"name": "Azerbaijani"

},

{

"isoCode": "bm",


---
*Content truncated at "Updates" section*