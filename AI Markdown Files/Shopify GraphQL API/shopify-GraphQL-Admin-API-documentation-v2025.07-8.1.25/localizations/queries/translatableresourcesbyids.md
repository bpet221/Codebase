---
title: "translatableResourcesByIds"
description: "Shopify GraphQL Admin API documentation for translatableresourcesbyids"
date: "2025-08-01"
source: "https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableresourcesbyids"
extraction_method: "alternative_service"
sections: ['Localizations', 'Queries']
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

[Anchor to translatableResourcesByIds](about:/docs/api/admin-graphql/latest/queries/translatableresourcesbyids#top)

query

Requires `read_translations` access scope.

Resources that can have localized values for different languages.

•[\[TranslatableResourceEdge!\]!](/docs/api/admin-graphql/latest/objects/TranslatableResourceEdge)

non-null

The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

•[\[TranslatableResource!\]!](/docs/api/admin-graphql/latest/objects/TranslatableResource)

non-null

A list of nodes that are contained in TranslatableResourceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* * *

Was this section helpful?