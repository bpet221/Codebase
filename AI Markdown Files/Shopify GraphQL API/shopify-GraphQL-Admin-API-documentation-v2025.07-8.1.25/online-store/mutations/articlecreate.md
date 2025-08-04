---
title: "articleCreate"
description: "Shopify GraphQL Admin API documentation for articlecreate"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate"
extraction_method: "jina"
sections: ['Online store', 'Mutations']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

Title: articleCreate - GraphQL Admin

URL Source: https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate

Markdown Content:
articleCreate - GraphQL Admin

===============
[Skip to main content](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate#main-content)

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
*   
Online store

    *   Queries   
    *   
Mutations

        *   [article Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate)
        *   [article Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articledelete)
        *   [article Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleupdate)
        *   [blog Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogcreate)
        *   [blog Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogdelete)
        *   [blog Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogupdate)
        *   [comment Approve](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentapprove)
        *   [comment Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentdelete)
        *   [comment Not Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentnotspam)
        *   [comment Spam](https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentspam)
        *   [menu Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menucreate)
        *   [menu Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menudelete)
        *   [menu Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuupdate)
        *   [page Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pagecreate)
        *   [page Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pagedelete)
        *   [page Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pageupdate)
        *   [script Tag Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagcreate)
        *   [script Tag Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagdelete)
        *   [script Tag Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/scripttagupdate)
        *   [theme Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themecreate)
        *   [theme Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themedelete)
        *   [theme Files Copy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilescopy)
        *   [theme Files Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesdelete)
        *   [theme Files Upsert](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themefilesupsert)
        *   [theme Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themepublish)
        *   [theme Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeupdate)
        *   [url Redirect Bulk Delete All](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeleteall)
        *   [url Redirect Bulk Delete By Ids](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeletebyids)
        *   [url Redirect Bulk Delete By Saved Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeletebysavedsearch)
        *   [url Redirect Bulk Delete By Search](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectbulkdeletebysearch)
        *   [url Redirect Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectcreate)
        *   [url Redirect Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectdelete)
        *   [url Redirect Import Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectimportcreate)
        *   [url Redirect Import Submit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectimportsubmit)
        *   [url Redirect Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlredirectupdate)

    *   Objects   

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

[Anchor to articleCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate#top)
article Create
==============

mutation

Requires Any of `write_content`, `write_online_store_pages` access scopes.

Creates an article.

[Anchor to Arguments](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate#arguments)
Arguments
---------

[Anchor to article](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate#arguments-article)article

•[Article Create Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput)

required

The properties of the new article.

Show input fields

[Anchor to blog](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate#arguments-blog)blog

•[Article Blog Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleBlogInput)

The properties of the new blog.

Show input fields

* * *

Was this section helpful?

Yes No

[Anchor to ArticleCreatePayload returns](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate#returns)Article Create Payload returns
---------------------------------------------------------------------------------------------------------------------------------------------------------

[Anchor to article](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate#returns-article)article

•[Article](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article)

The article that was created.

Show fields

[Anchor to userErrors](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articlecreate#returns-userErrors)user Errors

•[[Article Create User Error!]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleCreateUserError)

non-null

The list of errors that occurred from executing the mutation.

Show fields

* * *

Was this section helpful?

Yes No

Examples
--------

*   ### Creates an article for a blog

#### Query

```graphql
mutation CreateArticle($article: ArticleCreateInput!) {
  articleCreate(article: $article) {
    article {
      id
      title
      author {
        name
      }
      handle
      body
      summary
      tags
      image {
        altText
        originalSrc
      }
    }
    userErrors {
      code
      field
      message
    }
  }
}
``` #### Variables

```json
{
  "article": {
    "blogId": "gid://shopify/Blog/389767568",
    "title": "New Article Title",
    "author": {
      "name": "Test User"
    },
    "handle": "new-article-title",
    "body": "This is the content of the article.",
    "summary": "This is a summary of the article.",
    "isPublished": true,
    "publishDate": "2023-01-01T12:00:00Z",
    "tags": [
      "Tag1",
      "Tag2"
    ],
    "image": {
      "altText": "Alt text for the image",
      "url": "http://example.com/fake_image.jpg"
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
"query": "mutation CreateArticle($article: ArticleCreateInput!) { articleCreate(article: $article) { article { id title author { name } handle body summary tags image { altText originalSrc } } userErrors { code field message } } }",
 "variables": {
    "article": {
      "blogId": "gid://shopify/Blog/389767568",
      "title": "New Article Title",
      "author": {
        "name": "Test User"
      },
      "handle": "new-article-title",
      "body": "This is the content of the article.",
      "summary": "This is a summary of the article.",
      "isPublished": true,
      "publishDate": "2023-01-01T12:00:00Z",
      "tags": [
        "Tag1",
        "Tag2"
      ],
      "image": {
        "altText": "Alt text for the image",
        "url": "http://example.com/fake_image.jpg"
      }
    }
  }
}'
``` #### Remix

```javascript
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateArticle($article: ArticleCreateInput!) {
    articleCreate(article: $article) {
      article {
        id
        title
        author {
          name
        }
        handle
        body
        summary
        tags
        image {
          altText
          originalSrc
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "article": {
            "blogId": "gid://shopify/Blog/389767568",
            "title": "New Article Title",
            "author": {
                "name": "Test User"
            },
            "handle": "new-article-title",
            "body": "This is the content of the article.",
            "summary": "This is a summary of the article.",
            "isPublished": true,
            "publishDate": "2023-01-01T12:00:00Z",
            "tags": [
                "Tag1",
                "Tag2"
            ],
            "image": {
                "altText": "Alt text for the image",
                "url": "http://example.com/fake_image.jpg"
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
  mutation CreateArticle($article: ArticleCreateInput!) {
    articleCreate(article: $article) {
      article {
        id
        title
        author {
          name
        }
        handle
        body
        summary
        tags
        image {
          altText
          originalSrc
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "article": {
    "blogId": "gid://shopify/Blog/389767568",
    "title": "New Article Title",
    "author": {
      "name": "Test User"
    },
    "handle": "new-article-title",
    "body": "This is the content of the article.",
    "summary": "This is a summary of the article.",
    "isPublished": true,
    "publishDate": "2023-01-01T12:00:00Z",
    "tags": [
      "Tag1",
      "Tag2"
    ],
    "image": {
      "altText": "Alt text for the image",
      "url": "http://example.com/fake_image.jpg"
    }
  }
}

response = client.query(query: query, variables: variables)
``` #### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateArticle($article: ArticleCreateInput!) {
      articleCreate(article: $article) {
        article {
          id
          title
          author {
            name
          }
          handle
          body
          summary
          tags
          image {
            altText
            originalSrc
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "article": {
            "blogId": "gid://shopify/Blog/389767568",
            "title": "New Article Title",
            "author": {
                "name": "Test User"
            },
            "handle": "new-article-title",
            "body": "This is the content of the article.",
            "summary": "This is a summary of the article.",
            "isPublished": true,
            "publishDate": "2023-01-01T12:00:00Z",
            "tags": [
                "Tag1",
                "Tag2"
            ],
            "image": {
                "altText": "Alt text for the image",
                "url": "http://example.com/fake_image.jpg"
            }
        }
    },
  },
});
``` #### Response

```json
{
  "articleCreate": {
    "article": {
      "id": "gid://shopify/Article/1051293784",
      "title": "New Article Title",
      "author": {
        "name": "Test User"
      },
      "handle": "new-article-title",
      "body": "This is the content of the article.",
      "summary": "This is a summary of the article.",
      "tags": [
        "Tag1",
        "Tag2"
      ],
      "image": {
        "altText": "Alt text for the image",
        "originalSrc": "https://cdn.shopify.com/s/files/1/2637/1970/articles/fake_image.jpg?v=1730243735"
      }
    },
    "userErrors": []
  }
}
``` 
*   ### articleCreate reference

Examples
--------

Creates an article for a blog

Hide content

GQL cURL Remix Node.js Ruby

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreateArticle(%24article%3A%20ArticleCreateInput!)%20%7B%0A%20%20articleCreate(article%3A%20%24article)%20%7B%0A%20%20%20%20article%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20author%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20body%0A%20%20%20%20%20%20summary%0A%20%20%20%20%20%20tags%0A%20%20%20%20%20%20image%20%7B%0A%20%20%20%20%20%20%20%20altText%0A%20%20%20%20%20%20%20%20originalSrc%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20%22article%22%3A%20%7B%0A%20%20%20%20%22blogId%22%3A%20%22gid%3A%2F%2Fshopify%2FBlog%2F389767568%22%2C%0A%20%20%20%20%22title%22%3A%20%22New%20Article%20Title%22%2C%0A%20%20%20%20%22author%22%3A%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22Test%20User%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22handle%22%3A%20%22new-article-title%22%2C%0A%20%20%20%20%22body%22%3A%20%22This%20is%20the%20content%20of%20the%20article.%22%2C%0A%20%20%20%20%22summary%22%3A%20%22This%20is%20a%20summary%20of%20the%20article.%22%2C%0A%20%20%20%20%22isPublished%22%3A%20true%2C%0A%20%20%20%20%22publishDate%22%3A%20%222023-01-01T12%3A00%3A00Z%22%2C%0A%20%20%20%20%22tags%22%3A%20%5B%0A%20%20%20%20%20%20%22Tag1%22%2C%0A%20%20%20%20%20%20%22Tag2%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22image%22%3A%20%7B%0A%20%20%20%20%20%20%22altText%22%3A%20%22Alt%20text%20for%20the%20image%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22http%3A%2F%2Fexample.com%2Ffake_image.jpg%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)Copy

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

const{admin}=await authenticate.admin(request);

const response=await admin.graphql(

`#graphql

 mutation CreateArticle($article: ArticleCreateInput!) {

 articleCreate(article: $article) {

 article {

 id

 title

 author {

 name

 }

 handle

 body

 summary

 tags

 image {

 altText

 originalSrc

 }

 }

 userErrors {

 code

 field

 message

 }

 }

 }`,

{

variables:{

"article":{

"blogId":"gid://shopify/Blog/389767568",

"title":"New Article Title",

"author":{

"name":"Test User"

},

```
mutation CreateArticle($article: ArticleCreateInput!) {
  articleCreate(article: $article) {
    article {
      id
      title
      author {
        name
      }
      handle
      body
      summary
      tags
      image {
        altText
        originalSrc
      }
    }
    userErrors {
      code
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
"query": "mutation CreateArticle($article: ArticleCreateInput!) { articleCreate(article: $article) { article { id title author { name } handle body summary tags image { altText originalSrc } } userErrors { code field message } } }",
 "variables": {
    "article": {
      "blogId": "gid://shopify/Blog/389767568",
      "title": "New Article Title",
      "author": {
        "name": "Test User"
      },
      "handle": "new-article-title",
      "body": "This is the content of the article.",
      "summary": "This is a summary of the article.",
      "isPublished": true,
      "publishDate": "2023-01-01T12:00:00Z",
      "tags": [
        "Tag1",
        "Tag2"
      ],
      "image": {
        "altText": "Alt text for the image",
        "url": "http://example.com/fake_image.jpg"
      }
    }
  }
}'
```

```
const { admin } = await authenticate.admin(request);

const response = await admin.graphql(
  `#graphql
  mutation CreateArticle($article: ArticleCreateInput!) {
    articleCreate(article: $article) {
      article {
        id
        title
        author {
          name
        }
        handle
        body
        summary
        tags
        image {
          altText
          originalSrc
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "article": {
            "blogId": "gid://shopify/Blog/389767568",
            "title": "New Article Title",
            "author": {
                "name": "Test User"
            },
            "handle": "new-article-title",
            "body": "This is the content of the article.",
            "summary": "This is a summary of the article.",
            "isPublished": true,
            "publishDate": "2023-01-01T12:00:00Z",
            "tags": [
                "Tag1",
                "Tag2"
            ],
            "image": {
                "altText": "Alt text for the image",
                "url": "http://example.com/fake_image.jpg"
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
    "query": `mutation CreateArticle($article: ArticleCreateInput!) {
      articleCreate(article: $article) {
        article {
          id
          title
          author {
            name
          }
          handle
          body
          summary
          tags
          image {
            altText
            originalSrc
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "article": {
            "blogId": "gid://shopify/Blog/389767568",
            "title": "New Article Title",
            "author": {
                "name": "Test User"
            },
            "handle": "new-article-title",
            "body": "This is the content of the article.",
            "summary": "This is a summary of the article.",
            "isPublished": true,
            "publishDate": "2023-01-01T12:00:00Z",
            "tags": [
                "Tag1",
                "Tag2"
            ],
            "image": {
                "altText": "Alt text for the image",
                "url": "http://example.com/fake_image.jpg"
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
  mutation CreateArticle($article: ArticleCreateInput!) {
    articleCreate(article: $article) {
      article {
        id
        title
        author {
          name
        }
        handle
        body
        summary
        tags
        image {
          altText
          originalSrc
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "article": {
    "blogId": "gid://shopify/Blog/389767568",
    "title": "New Article Title",
    "author": {
      "name": "Test User"
    },
    "handle": "new-article-title",
    "body": "This is the content of the article.",
    "summary": "This is a summary of the article.",
    "isPublished": true,
    "publishDate": "2023-01-01T12:00:00Z",
    "tags": [
      "Tag1",
      "Tag2"
    ],
    "image": {
      "altText": "Alt text for the image",
      "url": "http://example.com/fake_image.jpg"
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

›

⌄

⌄

⌄

⌄

⌄

{

"article": {

"blogId": "gid://shopify/Blog/389767568",

"title": "New Article Title",

"author": {

"name": "Test User"

},

"handle": "new-article-title",

"body": "This is the content of the article.",

"summary": "This is a summary of the article.",

"isPublished": true,

"publishDate": "2023-01-01T12:00:00Z",

"tags": [

"Tag1",

"Tag2"

],

"image": {

"altText": "Alt text for the image",

"url": "http://example.com/fake_image.jpg"

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

›

⌄

⌄

⌄

⌄

⌄

⌄

{

"articleCreate": {

"article": {

"id": "gid://shopify/Article/1051293784",

"title": "New Article Title",

"author": {

"name": "Test User"

},

"handle": "new-article-title",

"body": "This is the content of the article.",

"summary": "This is a summary of the article.",

"tags": [

"Tag1",

"Tag2"

],

"image": {

"altText": "Alt text for the image",

"originalSrc": "https://cdn.shopify.com/s/files/1/2637/1970/articles/fake_image.jpg?v=1730243735"

}

},

"userErrors": []

}

}


---
*Content truncated at "Updates" section*