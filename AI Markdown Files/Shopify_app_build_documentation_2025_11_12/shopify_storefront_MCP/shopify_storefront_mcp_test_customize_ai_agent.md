---
title: Test and customize your agent
description: >-
  Learn how to test your AI agent implementation with examples of common use
  cases and customize it to match your brand.
source_url:
  html: 'https://shopify.dev/docs/apps/build/storefront-mcp/testing-and-examples'
  md: 'https://shopify.dev/docs/apps/build/storefront-mcp/testing-and-examples.md'
---

ExpandOn this page

* [Requirements](https://shopify.dev/docs/apps/build/storefront-mcp/testing-and-examples.md#requirements)
* [Test your agent](https://shopify.dev/docs/apps/build/storefront-mcp/testing-and-examples.md#test-your-agent)
* [Customize your agent](https://shopify.dev/docs/apps/build/storefront-mcp/testing-and-examples.md#customize-your-agent)
* [Next steps](https://shopify.dev/docs/apps/build/storefront-mcp/testing-and-examples.md#next-steps)

# Test and customize your agent

After building your AI agent, you'll want to test it thoroughly and customize it to match your brand before deployment. This guide covers both testing processes and customization options.

***

## Requirements

* You've [built an AI agent](https://shopify.dev/docs/apps/build/storefront-mcp/build-storefront-ai-agent) using the Storefront MCP
* Your agent connects to the [Storefront](https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront) and [Customer Accounts](https://shopify.dev/docs/apps/build/storefront-mcp/servers/customer-account) MCP servers.
* You have a [development environment](https://help.shopify.com/en/partners/dashboard/managing-stores/development-stores) to interact with your agent
* You're using the [Shopify Shop Chat Agent](https://github.com/Shopify/shop-chat-agent/) template or similar implementation
* Customer account commands require completing the [customer account authentication steps](https://shopify.dev/docs/apps/build/storefront-mcp/build-storefront-ai-agent#\(optional\)-configure-customer-account-authentication).

Note

The examples in this guide use a dev store with the default sample products. If you're using a different store or custom products, adjust the example commands accordingly.

***

## Test your agent

Test all critical functions before launch to ensure your AI agent delivers a consistent customer experience.

### Run basic commands

Here are some basic commands that might invoke various MCP tools:

| Test purpose       | Example command                              | MCP tool used                   |
| ------------------ | -------------------------------------------- | ------------------------------- |
| Basic response     | `hi`                                         | None (LLM response only)        |
| Product search     | `can you search for snowboards`              | `search_shop_catalog`           |
| Cart addition      | `add The Videographer Snowboard to my cart`  | `update_cart`                   |
| Policy information | `what languages is your store available in?` | `search_shop_policies_and_faqs` |
| Order status       | `What's the status of my recent order?`      | `get_most_recent_order_status`  |
| Order details      | `When will my order #1001 be delivered?`     | `get_order_status`              |

### Product search capabilities

Product discovery is often the first interaction customers have with your AI agent. Test how well your agent handles various product queries.

1. Test the search functionality with queries that trigger the `search_shop_catalog` MCP tool:

   ```shell
   can you search for snowboards
   ```

2. Send natural language queries that include different product attributes:

   ```shell
   Do you have the complete snowboard in dawn color?
   ```

3. Verify that your agent:

* Identifies product categories from conversational queries
* Applies price and attribute filters correctly
* Returns helpful product information for purchase decisions

1. Review this example conversation for effective product search handling:

   ```text
   Customer: I'm looking for a good snowboard for beginners
   Assistant: I'd be happy to help you find a beginner-friendly snowboard! We have several options that would be great for someone just starting out.


   Here are some of our beginner-friendly snowboards:


   1. The Videographer Snowboard - $499.95
   2. The Multi Snowboard - $449.95
   3. The Baker Snowboard - $399.95


   Would you like more details about any of these?
   ```

### Cart functionality

Cart management is critical for converting interest into purchases. Test the following aspects of your cart functionality.

1. Test these essential cart operations with their corresponding MCP tools:

| Operation           | Example prompt                               | MCP tool                                                                                           |
| ------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Adding products     | `add The Videographer Snowboard to my cart`  | [`update_cart`](https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront#update_cart) |
| Updating quantities | `update my cart to make that 2 items please` | [`update_cart`](https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront#update_cart) |
| Viewing contents    | `can you tell me what is in my cart`         | [`get_cart`](https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront#get_cart)       |
| Checkout            | `I'd like to checkout`                       | generates a checkout URL                                                                           |

1. Test adding products to the cart with specific variants and quantities:

   ```shell
   Add the complete Snowboard in dawn color to my cart
   ```

2. Verify product update capabilities:

   ```shell
   Can you update that to 2 snowboards?
   ```

3. Test cart retrieval and display:

   ```shell
   What's in my cart right now?
   ```

4. Verify that your agent:

* Adds the correct products with their variants and quantities
* Updates the right items when changes are requested
* Displays accurate cart contents with pricing
* Guides customers through checkout

1. Review this example conversation for effective cart management:

   ```text
   Customer: I'd like to buy the complete Snowboard
   Assistant: Excellent choice! The complete Snowboard comes in several colors: Ice, Dawn, Powder, Electric & Sunset. Which color would you prefer?


   Customer: Dawn please
   Assistant: I've added the complete Snowboard in color dawn to your cart. Would you like to check out now or continue shopping?


   Customer: What's in my cart?
   Assistant: Your cart contains:
   - 1 Complete Snowboard (dawn) at $699.95
   Subtotal: $699.95


   Would you like to proceed to checkout or make changes?
   ```

### Conversation flow

Test the overall conversational experience to ensure it feels natural and helpful.

1. Conduct complete shopping journeys from product search through checkout.

2. Try changing topics mid-conversation:

   ```text
   Customer: Do you have the complete snowboard in dawn color?
   Assistant: [Responds with snowboard options]
   Customer: Actually, what languages is your store available in?
   ```

3. Test multi-turn conversations:

   ```text
   Customer: Show me some snowboards
   Assistant: [Shows snowboards]


   Customer: Do you have any that are good for beginners?
   Assistant: [Shows beginner-friendly snowboards]
   ```

4. Check that your agent:

* Maintains context throughout the conversation
* Handles topic changes appropriately
* Keeps a consistent tone and personality
* Guides the customer toward purchase decisions

***

## Customize your agent

Personalize your AI shopping assistant by adjusting its tone, appearance, and underlying AI model to align with your brand identity.

### Edit the prompt

Modify `app/prompts/prompts.json` to align the agent's tone and brand voice with your store's personality.

The starter template includes two prompt options:

* A standard assistant (default)
* An enthusiastic assistant

To switch between prompts:

1. Navigate to your admin portal.
2. Go to **Online Store > Themes**.
3. Click the **Customize** button.
4. Select the **App embeds** icon in the sidebar.
5. Click on your app extension.
6. Use the dropdown selector to choose between standard and enthusiastic assistant styles.

### Change the UI

Customize the chat interface by modifying files in the `extensions/chat-bubble/` directory:

* CSS styling: `extensions/chat-bubble/assets/chat.css`
* JavaScript functionality: `extensions/chat-bubble/assets/chat.js`
* Icons and visual elements: `extensions/chat-bubble/assets/*.svg`

The UI streams responses from the `/chat` endpoint and renders them on your storefront.

### Swap out the LLM

By default, this template uses Anthropic's Claude. To switch to another provider:

* OpenAI models

  * Option 1: Use OpenAI's Agent SDK which supports MCP tools. Find integration documentation [here](https://openai.github.io/openai-agents-python/mcp/).
  * Option 2: Create a bridge to translate your model calls into MCP tool invocations. This approach offers flexibility but requires custom development.

* Gemini models: Replace the Anthropic client with the Gemini SDK. Find documentation and code samples [here](https://ai.google.dev/gemini-api/docs/function-calling?example=meeting#use_model_context_protocol_mcp).

* For LLMs that don't yet support MCP, write a custom adapter to map tool calls to the MCP endpoints.

***

## Next steps

Now that you've tested and customized your AI agent, explore these resources to enhance your implementation:

[Storefront MCP server\
\
](https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront)

[Learn about store-specific catalog search and cart operations.](https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront)

[Customer accounts MCP server\
\
](https://shopify.dev/docs/apps/build/storefront-mcp/servers/customer-account)

[Enable personalized experiences with order lookup, reordering, and account information.](https://shopify.dev/docs/apps/build/storefront-mcp/servers/customer-account)

***

* [Requirements](https://shopify.dev/docs/apps/build/storefront-mcp/testing-and-examples.md#requirements)
* [Test your agent](https://shopify.dev/docs/apps/build/storefront-mcp/testing-and-examples.md#test-your-agent)
* [Customize your agent](https://shopify.dev/docs/apps/build/storefront-mcp/testing-and-examples.md#customize-your-agent)
* [Next steps](https://shopify.dev/docs/apps/build/storefront-mcp/testing-and-examples.md#next-steps)