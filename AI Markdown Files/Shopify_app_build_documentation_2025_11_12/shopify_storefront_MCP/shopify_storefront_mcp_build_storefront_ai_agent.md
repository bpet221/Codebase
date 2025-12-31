---
title: Build a Storefront AI agent
description: >-
  Create an AI-powered shopping assistant that helps customers find products and
  complete purchases.
source_url:
  html: >-
    https://shopify.dev/docs/apps/build/storefront-mcp/build-storefront-ai-agent?framework=reactRouter
  md: >-
    https://shopify.dev/docs/apps/build/storefront-mcp/build-storefront-ai-agent.md?framework=reactRouter
---

# Build a Storefront AI agent

Build an AI chat agent that helps shoppers find products faster and complete purchases through natural conversation. The agent can answer questions about products, shipping policies, and manage shopping carts using the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) to connect with Shopify's commerce features.

Use natural language to search for products, get recommendations, ask questions about store policies, and complete checkout—all within a chat window.

## Requirements

[Node.js v18.20 or higher](https://nodejs.org/)

Download from nodejs.org and install.

[Shopify Partner account](https://www.shopify.com/partners)

Sign up at shopify.com/partners.

[Shopify dev store with sample products](https://shopify.dev/docs/apps/build/dev-dashboard/development-stores)

Create a dev store for testing - see the dev stores guide. Make sure to add some sample products.

[Claude API Key](https://docs.anthropic.com/en/api/admin-api/apikeys/get-api-key)

Generate a key in the Claude Console and store it securely. This template uses Claude, but you can swap in any LLM by updating the code.

[Latest version of Shopify CLI](https://shopify.dev/docs/api/shopify-cli)

Install the [latest version of Shopify CLI](https://shopify.dev/docs/api/shopify-cli#upgrade). You'll need this before starting the tutorial.

## Project

React Router

[View on GitHub](https://github.com/Shopify/shop-chat-agent)

## Installation

### Clone the repository

## Terminal

```bash
git clone https://github.com/Shopify/shop-chat-agent.git
cd shop-chat-agent
```

### Install dependencies

## Terminal

```terminal
npm install
```

### Set up environment variables

Rename the `.env.example` file to `.env` and make sure it has your Claude API key:

## .env

```bash
CLAUDE_API_KEY=your_claude_api_key
```

Note

See the [Change the AI provider](#change-the-ai-provider) section if you want to use a different LLM.

## Create your app

[]()

### Install the latest Shopify CLI

## Terminal

```bash
npm install -g @shopify/cli@latest
```

### Start the development server

1. Run the following command to start the development server:

## Terminal

```bash
shopify app dev --use-localhost --reset
```

### Select your organization

```text
?  Which organization is this work for?
>  Organization name
```

### Select Yes to create this project as a new app

```text
?  Create this project as a new app on Shopify?
>  (y) Yes, create it as a new app
```

### Accept the default app name

Hit enter to accept the default name `shop-chat-agent`. All references in the code use this name.

```text
?  App name:
>  shop-chat-agent
```

### Keep the configuration file name blank

```text
?  Configuration file name:
✔  (empty)
```

### Overwrite existing configuration file

Select **no** and overwrite your existing configuration file:

```text
?  Configuration file shopify.app.toml already exists. Do you want to choose a different configuration name?
✔  No, overwrite my existing configuration file
```

### Select your dev store

Choose the dev store you would like to use:

```text
?  Which store would you like to use to view your project?
✔  your-store
```

### Enter your store password

You can get your store password from the URL that is in your terminal:

```text
? Incorrect store password (
  https://your-store.myshopify.com/admin/online_store/preferences ). Please
   try again:
>  *****█________
```

Note

At this stage, you will see `Preview URL: https://your-store.myshopify.com/...` in your terminal. You can now proceed to the next step. If you get an error, restart from the [Shopify CLI installation step](#install-shopify-cli).

### Generate a certificate for localhost

```text
?  --use-localhost requires a certificate for `localhost`. Generate it now?
>  Yes, use mkcert to generate it
```

### Allow automatic URL updates

Select yes to automatically update your app's URL:

```text
Have Shopify automatically update your app's URL in order to create a preview experience?
> Yes, automatically update
```

## Run your app

### Access your store

Follow the `Preview URL: https://your-store.myshopify.com/...` in your terminal to open your store in your browser.

### Enable the theme extension

In your Shopify admin, navigate to Online Store > Themes

* Click the **Customize** button
* Click the **App embeds** icon in the sidebar
* Enable the toggle
* Click **Save**

Congratulations!

Your AI shopping assistant is now fully functional for product search, cart management, and store policy questions.

You can start [testing and customizing your app](https://shopify.dev/docs/apps/build/storefront-mcp/testing-and-examples), or continue to the next section to enhance it with the [customer accounts MCP server](https://shopify.dev/docs/apps/build/storefront-mcp/servers/customer-account).

## (Optional) Configure customer accounts authentication

Add order history and account management features to your AI assistant:

You'll need Level 2 protected customer data permissions to use the Customer accounts MCP server. See [Shopify's guidelines](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Verify Next-Gen Dev Platform access

Verify that you have access to the [Next-Gen dev platform](https://shopify.dev/docs/beta/next-gen-dev-platform). This is required for the customer accounts authentication features.

### Create your app on the Next-Gen Dev Platform

Follow the steps on the Next-Gen dev platform page to create a [Storefront AI agent app](https://shopify.dev/docs/beta/next-gen-dev-platform/apps) using a partner organization. You can use the code from the [reference app repo](https://github.com/Shopify/shop-chat-agent).

### Set up your dev store

Create a [dev store](https://shopify.dev/docs/beta/next-gen-dev-platform/development-stores) on the Next-Gen Dev Platform. Make sure to add some sample products to test the AI agent functionality.

### Log in to Shopify Partners

Log in to your [Shopify Partners dashboard](https://partners.shopify.com/).

### Navigate to your app

Navigate to Apps and select your app under the Dev Dashboard apps tab.

### Access API requests

Click API access requests.

### Request protected data access

Click **Request access** under the Protected customer data section.

### Provide a reason for accessing protected data

Click **select** on **protected customer data**. Provide a clear reason for requesting this data.

### Provide a reason for accessing specific data fields

Click **select** for each data field: `name`, `email`, `phone`, and `address`. Provide a clear reason for requesting each field.

### Update your app's TOML file

## shopify.app.toml

```toml
# Add customer accounts MCP configurations


[customer_authentication]
redirect_uris = [
  "https://your-app-domain.com/callback"
]
```

Replace `your-app-domain.com` with your actual app domain.

Start `app dev` again if it's not already running:

## Terminal

```bash
shopify app dev --use-localhost
```

## /package.json

```json
{
  "name": "shop-chat-agent",
  "private": true,
  "scripts": {
    "build": "react-router build",
    "dev": "shopify app dev",
    "config:link": "shopify app config link",
    "generate": "shopify app generate",
    "deploy": "shopify app deploy",
    "config:use": "shopify app config use",
    "env": "shopify app env",
    "start": "react-router-serve ./build/server/index.js",
    "docker-start": "npm run setup && npm run start",
    "setup": "prisma generate && prisma migrate deploy",
    "lint": "eslint --ignore-path .gitignore --cache --cache-location ./node_modules/.cache/eslint .",
    "shopify": "shopify",
    "prisma": "prisma",
    "graphql-codegen": "graphql-codegen",
    "vite": "vite",
    "typecheck": "react-router typegen && tsc --noEmit"
  },
  "type": "module",
  "engines": {
    "node": ">=20.10"
  },
  "dependencies": {
    "@prisma/client": "^6.2.1",
    "@react-router/dev": "^7.9.1",
    "@react-router/fs-routes": "^7.9.1",
    "@react-router/node": "^7.9.1",
    "@react-router/serve": "^7.9.1",
    "@shopify/app-bridge-react": "^4.1.6",
    "@shopify/shopify-app-react-router": "^1.0.0",
    "@shopify/shopify-app-session-storage-prisma": "^7.0.0",
    "isbot": "^5.1.0",
    "prisma": "^6.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router": "^7.9.1",
    "vite-tsconfig-paths": "^5.0.1",
    "@anthropic-ai/sdk": "^0.40.0",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "@shopify/api-codegen-preset": "^1.1.1",
    "@shopify/polaris-types": "^1.0.0",
    "@types/eslint": "^9.6.1",
    "@types/node": "^22.2.0",
    "@types/react": "^18.2.31",
    "@types/react-dom": "^18.2.14",
    "@typescript-eslint/eslint-plugin": "^6.7.4",
    "@typescript-eslint/parser": "^6.7.4",
    "eslint": "^8.38.0",
    "eslint-import-resolver-typescript": "^3.6.1",
    "eslint-plugin-import": "^2.28.1",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^3.2.4",
    "typescript": "^5.2.2",
    "vite": "^6.2.2"
  },
  "workspaces": [
    "extensions/*"
  ],
  "trustedDependencies": [
    "@shopify/plugin-cloudflare"
  ],
  "resolutions": {
    "@graphql-tools/url-loader": "8.0.16",
    "@graphql-codegen/client-preset": "4.7.0",
    "@graphql-codegen/typescript-operations": "4.5.0",
    "minimatch": "9.0.5"
  },
  "overrides": {
    "@graphql-tools/url-loader": "8.0.16",
    "@graphql-codegen/client-preset": "4.7.0",
    "@graphql-codegen/typescript-operations": "4.5.0",
    "minimatch": "9.0.5"
  },
  "author": "siddhantbajaj"
}
```

## /app/services/claude.server.js

```javascript
/**
 * Claude Service
 * Manages interactions with the Claude API
 */
import { Anthropic } from "@anthropic-ai/sdk";
import AppConfig from "./config.server";
import systemPrompts from "../prompts/prompts.json";


/**
 * Creates a Claude service instance
 * @param {string} apiKey - Claude API key
 * @returns {Object} Claude service with methods for interacting with Claude API
 */
export function createClaudeService(apiKey = process.env.CLAUDE_API_KEY) {
  // Initialize Claude client
  const anthropic = new Anthropic({ apiKey });


  /**
   * Streams a conversation with Claude
   * @param {Object} params - Stream parameters
   * @param {Array} params.messages - Conversation history
   * @param {string} params.promptType - The type of system prompt to use
   * @param {Array} params.tools - Available tools for Claude
   * @param {Object} streamHandlers - Stream event handlers
   * @param {Function} streamHandlers.onText - Handles text chunks
   * @param {Function} streamHandlers.onMessage - Handles complete messages
   * @param {Function} streamHandlers.onToolUse - Handles tool use requests
   * @returns {Promise<Object>} The final message
   */
  const streamConversation = async ({
    messages,
    promptType = AppConfig.api.defaultPromptType,
    tools
  }, streamHandlers) => {
    // Get system prompt from configuration or use default
    const systemInstruction = getSystemPrompt(promptType);


    // Create stream
    const stream = await anthropic.messages.stream({
      model: AppConfig.api.defaultModel,
      max_tokens: AppConfig.api.maxTokens,
      system: systemInstruction,
      messages,
      tools: tools && tools.length > 0 ? tools : undefined
    });


    // Set up event handlers
    if (streamHandlers.onText) {
      stream.on('text', streamHandlers.onText);
    }


    if (streamHandlers.onMessage) {
      stream.on('message', streamHandlers.onMessage);
    }


    if (streamHandlers.onContentBlock) {
      stream.on('contentBlock', streamHandlers.onContentBlock);
    }


    // Wait for final message
    const finalMessage = await stream.finalMessage();


    // Process tool use requests
    if (streamHandlers.onToolUse && finalMessage.content) {
      for (const content of finalMessage.content) {
        if (content.type === "tool_use") {
          await streamHandlers.onToolUse(content);
        }
      }
    }


    return finalMessage;
  };


  /**
   * Gets the system prompt content for a given prompt type
   * @param {string} promptType - The prompt type to retrieve
   * @returns {string} The system prompt content
   */
  const getSystemPrompt = (promptType) => {
    return systemPrompts.systemPrompts[promptType]?.content ||
      systemPrompts.systemPrompts[AppConfig.api.defaultPromptType].content;
  };


  return {
    streamConversation,
    getSystemPrompt
  };
}


export default {
  createClaudeService
};
```

## /shopify.app.toml

```toml
# Learn more about configuring your app at https://shopify.dev/docs/apps/tools/cli/configuration


client_id = "YOUR_CLIENT_ID"
name = "shop-chat-agent"
handle = "shop-chat-agent"
application_url = "https://shop-chat-agent.com"
embedded = true


[build]
include_config_on_deploy = true


[webhooks]
api_version = "2025-04"


[access_scopes]
# Learn more at https://shopify.dev/docs/apps/tools/cli/configuration#access_scopes
scopes = "customer_read_customers,customer_read_orders,customer_read_store_credit_account_transactions,customer_read_store_credit_accounts,unauthenticated_read_product_listings"


[auth]
redirect_urls = [ "https://shop-chat-agent.com/api/auth" ]


[pos]
embedded = false


[customer_authentication]
redirect_uris = [
  "https://shop-chat-agent.com/callback"
]
```

## /app/routes/chat.jsx

```jsx
/**
 * Chat API Route
 * Handles chat interactions with Claude API and tools
 */
import MCPClient from "../mcp-client";
import { saveMessage, getConversationHistory, storeCustomerAccountUrls, getCustomerAccountUrls as getCustomerAccountUrlsFromDb } from "../db.server";
import AppConfig from "../services/config.server";
import { createSseStream } from "../services/streaming.server";
import { createClaudeService } from "../services/claude.server";
import { createToolService } from "../services/tool.server";




/**
 * Rract Router loader function for handling GET requests
 */
export async function loader({ request }) {
  // Handle OPTIONS requests (CORS preflight)
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: getCorsHeaders(request)
    });
  }


  const url = new URL(request.url);


  // Handle history fetch requests - matches /chat?history=true&conversation_id=XYZ
  if (url.searchParams.has('history') && url.searchParams.has('conversation_id')) {
    return handleHistoryRequest(request, url.searchParams.get('conversation_id'));
  }


  // Handle SSE requests
  if (!url.searchParams.has('history') && request.headers.get("Accept") === "text/event-stream") {
    return handleChatRequest(request);
  }
```

## /extensions/chat-bubble/blocks/chat-interface.liquid

```liquid
{{ 'chat.css' | asset_url | stylesheet_tag }}
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">


<div class="shop-ai-chat-container">
  <div class="shop-ai-chat-bubble" style="background-color: {{ block.settings.chat_bubble_color }}">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  </div>


  <div class="shop-ai-chat-window">
    <div class="shop-ai-chat-header">
      <div>{{ 'chat.title' | t }}</div>
      <button class="shop-ai-chat-close">✕</button>
    </div>


    <div class="shop-ai-chat-messages">
      <!-- Messages will be added here by JavaScript -->
    </div>


    <div class="shop-ai-chat-input">
      <input type="text" placeholder="{{ 'chat.inputPlaceholder' | t }}">
      <button class="shop-ai-chat-send">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </div>
  </div>
</div>


<script src="{{ 'chat.js' | asset_url }}" defer></script>
<script>
  window.shopChatConfig = {
    promptType: {{ block.settings.system_prompt | json }},
    welcomeMessage: {{ block.settings.welcome_message | json }}
  };
  window.shopId = {{ shop.id }};
</script>


{% schema %}
{
  "name": "AI Chat Assistant",
  "target": "body",
  "settings": [
    {
      "type": "color",
      "id": "chat_bubble_color",
      "label": "Chat Bubble Color",
      "default": "#5046e4"
    },
    {
      "type": "text",
      "id": "welcome_message",
      "label": "Welcome Message",
      "default": "👋 Hi there! How can I help you today?"
    },
    {
      "type": "select",
      "id": "system_prompt",
      "label": "System Prompt",
      "options": [
        {
          "value": "standardAssistant",
          "label": "Standard Assistant"
        },
        {
          "value": "enthusiasticAssistant",
          "label": "Enthusiastic Assistant"
        }
      ],
      "default": "standardAssistant"
    }
  ]
}
{% endschema %}
```

## Next steps

Now that you've built your AI shopping assistant, you can:

[Test and customize your agent\
\
](https://shopify.dev/docs/apps/build/storefront-mcp/testing-and-examples)

[Learn how to test your AI agent with example workflows and customize it to match your brand.](https://shopify.dev/docs/apps/build/storefront-mcp/testing-and-examples)

[Customer accounts MCP server\
\
](https://shopify.dev/docs/apps/build/storefront-mcp/servers/customer-account)

[Enable personalized experiences with order lookup, reordering, and account information.](https://shopify.dev/docs/apps/build/storefront-mcp/servers/customer-account)