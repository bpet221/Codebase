---
title: About Storefront MCP
description: >-
  Build AI shopping experiences with Storefront MCP and Model Context Protocol
  (MCP).
source_url:
  html: 'https://shopify.dev/docs/apps/build/storefront-mcp'
  md: 'https://shopify.dev/docs/apps/build/storefront-mcp.md'
---

# Storefront MCP

Connect any AI assistant to real-time commerce data from Shopify stores with Model Context Protocol (MCP) servers. Help customers search, ask, and buy in natural language.

[#### Start building now\
\
](https://shopify.dev/docs/apps/build/storefront-mcp/build-storefront-ai-agent)

[Build an AI shopping agent with MCP](https://shopify.dev/docs/apps/build/storefront-mcp/build-storefront-ai-agent)

## Model Context Protocol

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) standardizes how applications provide context to AI models. It creates a consistent way for AI systems to access Shopify's commerce data and features.

MCP uses a client-server architecture:

* **MCP client:** Your [Shopify app](https://shopify.dev/docs/apps/build/build) that connects with AI models and passes their requests to MCP servers.
* **MCP servers:** API endpoints that provide structured access to Shopify's commerce data, such as products, cart operations, and customer information.
* **Chat UI:** A [Shopify theme extension](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions/build) that shows a customer-facing chat window.

The backend works as an MCP client while the frontend (Chat UI) provides the customer experience. This approach lets you connect any AI model to Shopify without custom integration.

## Benefits of MCP

Build AI shopping experiences that convert browsers into buyers:

### MCP capabilities

* **Product discovery:** Natural-language search with product recommendations
* **Cart management:** Create carts, add or remove items, and complete checkout
* **Store information:** Answer questions about policies, shipping, returns, and FAQs
* **Order management:** Track order status and process returns

### App features

* **AI-powered chat:** Add an embedded chat bubble for real-time shopping help
* **Built-in MCP client:** Connect to Shopify's tools for search, cart, and orders
* **Persistent context:** Keep conversations coherent by remembering past messages
* **Custom chat UI:** Style your theme extension to match your store's brand
* **Streaming responses:** Create a natural chat experience with message streaming

![Illustration of a chatbot assistant with a Shopify storefront](https://shopify.dev/assets/assets/images/storefront-mcp/mcp_chatbot-BQaUQc3t.png)

## MCP servers

Connect to these MCP servers to extend your AI assistant's capabilities:

[#### Storefront MCP server\
\
](https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront)

[Connect to a store's catalog, cart, and policies to help customers shop with that merchant.](https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront)

[#### Customer accounts MCP server\
\
](https://shopify.dev/docs/apps/build/storefront-mcp/servers/customer-account)

[Help customers track orders, manage returns, and access their account information.](https://shopify.dev/docs/apps/build/storefront-mcp/servers/customer-account)

## Explore MCP

Dive deeper with these resources to accelerate development:

#### [Build a Storefront AI agent](https://shopify.dev/docs/apps/build/storefront-mcp/build-storefront-ai-agent)

Follow this tutorial to create an AI shopping assistant

#### [Shopify/dev-mcp server](https://shopify.dev/docs/apps/build/devmcp)

Use the dev-mcp server to interact with Shopify Dev docs and Admin API