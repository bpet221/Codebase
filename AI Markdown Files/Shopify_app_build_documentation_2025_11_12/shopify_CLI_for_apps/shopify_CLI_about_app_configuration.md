---
title: App configuration
description: Learn about configuring apps created using Shopify CLI.
source_url:
  html: 'https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration'
  md: 'https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration.md'
---

ExpandOn this page

* [App configuration file example](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration.md#app-configuration-file-example)
* [Reference](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration.md#reference)
* [Migrate from config push](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration.md#migrate-from-config-push)

# App configuration

You can configure your apps locally with TOML files, then [link them to apps in your Partner Dashboard](https://shopify.dev/docs/api/shopify-cli/app/app-config-link) and [deploy your changes](https://shopify.dev/docs/api/shopify-cli/app/app-deploy) using Shopify CLI. You can also configure most of this configuration through the Partner Dashboard. The configuration in the Partner Dashboard always reflects the active version of your app.

Note

Changes to the `shopify.app.toml` are applied automatically during [`app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) for your chosen developmment store. For app configuration changes to take effect for all stores in production, you need to run the [`deploy` command](https://shopify.dev/docs/api/shopify-cli/app/app-deploy).

Learn more about [managing app configuration files](https://shopify.dev/docs/apps/build/cli-for-apps/manage-app-config-files).

Caution

The `shopify app config push` Shopify CLI command is no longer supported. If you're using this command in your workflow, follow [these steps](#migrate-from-config-push) to update app configuration with the `deploy` command.

***

## App configuration file example

## shopify.app.config-name.toml

```toml
name = "Example App"
client_id = "a61950a2cbd5f32876b0b55587ec7a27"
application_url = "https://www.app.example.com/"
embedded = true
handle = "example-app"


[access_scopes]
scopes = "read_products"


[access.admin]
direct_api_mode = "online"


[auth]
redirect_urls = [
  "https://app.example.com/api/auth/callback",
  "https://app.example.com/api/auth/oauth/callback",
]


[customer_authentication]
redirect_uris = [
  "https://app.example.com/api/customer/auth/callback"
]
javascript_origins = [
  "https://app.example.com"
]
logout_urls = [
  "https://app.example.com/api/customer/logout"
]


[webhooks]
api_version = "2024-01"


[[webhooks.subscriptions]]
topics = [ "app/uninstalled" ]
compliance_topics = [ "customers/redact", "customers/data_request", "shop/redact" ]
uri = "/webhooks"


[app_proxy]
url = "https://app.example.com/api/proxy"
subpath = "store-pickup"
prefix = "apps"


[pos]
embedded = false


[app_preferences]
url = "https://www.app.example.com/preferences"


[build]
automatically_update_urls_on_dev = false
```

***

## Reference

### Global

Note

Changes to the `shopify.app.toml` are applied automatically during [`app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) for your chosen developmment store. For app configuration changes to take effect for all stores in production, you need to run the [`deploy` command](https://shopify.dev/docs/api/shopify-cli/app/app-deploy).

| Property                | Required? | Value                                      | Description                                                                                                                                                                                                                                                                                               |
| ----------------------- | --------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                  | Yes       | `string`                                   | The name of your app.                                                                                                                                                                                                                                                                                     |
| `handle`                | No        | `string`                                   | The URL slug of your app home, for example `https://admin.shopify.com/store/your-store-name/apps/your-app-handle/app`. **Warning**: Updating the handle changes the Shopify admin URL that appears when you access your app from the side menu. As a result, any embedded app admin links will be broken. |
| `client_id`             | Yes       | `string`                                   | The app's public identifier.                                                                                                                                                                                                                                                                              |
| `application_url`       | Yes       | `string` matching a valid URL              | The URL of your app. **Note:** If you're building an [extension-only app](https://shopify.dev/docs/apps/build/app-extensions/build-extension-only-app), then your `application_url` will be set to `https://shopify.dev/apps/default-app-home` by default.                                                |
| `embedded`              | Yes       | `boolean`                                  | Embedded apps let users interact with your app without leaving the context of Shopify.                                                                                                                                                                                                                    |
| `extension_directories` | No        | `array` of `string` paths or glob patterns | The paths that Shopify CLI will search for app [extensions](https://shopify.dev/docs/apps/build/cli-for-apps/app-structure#extensions). When omitted, defaults to `["extensions/"]`.                                                                                                                      |
| `web_directories`       | No        | `array` of `string` paths or glob patterns | The paths that Shopify CLI will search for the [web files](https://shopify.dev/docs/apps/build/cli-for-apps/app-structure#web-files) of your app. When omitted, defaults to the app root directory.                                                                                                       |

### access\_​scopes

Define the permissions your app requests, as well as how the permissions are requested.

Note

Changes to the `shopify.app.toml` are applied automatically during [`app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) for your chosen developmment store. For app configuration changes to take effect for all stores in production, you need to run the [`deploy` command](https://shopify.dev/docs/api/shopify-cli/app/app-deploy).

| Property                  | Required? | Value                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | --------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `scopes`                  | Yes       | `string` matching a comma-separated list of scopes | Any [access scopes](https://shopify.dev/docs/api/usage/access-scopes) that your app will request access to during the authorization process. When a merchant installs your app with [Shopify managed install](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation), they're prompted to grant permission to all the access scopes that you defined in this field. Learn how to [manage access scopes](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes) for your app.                                                                                                                                        |
| `optional_scopes`         | No        | `array` of `string` access scopes                  | Any [access scopes](https://shopify.dev/docs/api/usage/access-scopes) that your app can [request dynamically](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes#request-new-access-scopes-dynamically) after installation. Learn how to [manage access scopes](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes) for your app.                                                                                                                                                                                                                                                        |
| `use_legacy_install_flow` | No        | boolean                                            | When omitted or `false`, scopes are saved in your app's configuration, and are automatically requested when the app is installed on a store or when you update the `scopes` value. This is referred to as [Shopify managed installation](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation). When `true`, the legacy installation flow requests scopes through a URL parameter during the [OAuth flow](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/authorization-code-grant). The legacy installation flow is still supported, but isn't recommended because your app can end up with different scopes for each installation. |

### access

Settings for defining the ways that your app can access Shopify APIs.

Note

Changes to the `shopify.app.toml` are applied automatically during [`app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) for your chosen developmment store. For app configuration changes to take effect for all stores in production, you need to run the [`deploy` command](https://shopify.dev/docs/api/shopify-cli/app/app-deploy).

#### admin

| Property                         | Required? | Value                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------- | --------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `direct_api_mode`                | No        | `string` matching `online` or `offline` | The access mode that [Direct API access](https://shopify.dev/docs/api/admin-extensions#direct-api-access) will use. When `online`, Direct API access is enabled and uses an [online access token](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/online-access-tokens). When `offline`, Direct API access is enabled and uses an [offline access token](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/offline-access-tokens). When omitted, defaults to `online`. |
| `embedded_app_direct_api_access` | No        | `boolean`                               | Whether your embedded app has access to [Direct API access](https://shopify.dev/docs/api/app-home#direct-api-access) for calling types in the GraphQL Admin API. When omitted or `false`, Direct API access is disabled for embedded apps. When `true`, Direct API is enabled and uses the mode defined by `direct_api_mode`.                                                                                                                                                                                                      |

### auth

Note

Changes to the `shopify.app.toml` are applied automatically during [`app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) for your chosen developmment store. For app configuration changes to take effect for all stores in production, you need to run the [`deploy` command](https://shopify.dev/docs/api/shopify-cli/app/app-deploy).

| Property        | Required? | Value                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | --------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `redirect_urls` | Yes       | `array` of `string`s matching a valid URL | Users are redirected to these URLs as part of [authorization code grant](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/authorization-code-grant). You must include at least one redirect URL before making your app public. Learn more about [redirection URLs.](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/authorization-code-grant) |

### customer\_​authentication

Configure authentication for Customer Account API access. Your app uses these settings for OAuth 2.0 authentication flows with customers. The authentication endpoints are discovered dynamically using [discovery endpoints](https://shopify.dev/docs/api/customer#discovery-endpoints).

Note

Changes to the `shopify.app.toml` are applied automatically during [`app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) for your chosen developmment store. For app configuration changes to take effect for all stores in production, you need to run the [`deploy` command](https://shopify.dev/docs/api/shopify-cli/app/app-deploy).

| Property             | Required? | Value                                      | Description                                                                                                                                                                                                                                                                            |
| -------------------- | --------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `redirect_uris`      | Yes       | An array of strings matching a valid URL   | The URIs where customers are redirected after authentication. Supports HTTPS URLs for web applications (for example, `https://app.example.com/api/customer/auth/callback`). These URIs are used with the `authorization_endpoint` discovered from `/.well-known/openid-configuration`. |
| `javascript_origins` | No        | An array of string matching a valid origin | The allowed origins for CORS when making requests to authentication endpoints from JavaScript. Required for web applications using the authorization code flow with PKCE. Origins must include protocol and domain (for example, `https://app.example.com`).                           |
| `logout_urls`        | No        | An array of strings matching a valid URL   | The URLs where customers are redirected after logout. Used with the `end_session_endpoint` discovered from `/.well-known/openid-configuration` for OpenID Connect RP-initiated logout.                                                                                                 |

### webhooks

Note

Changes to the `shopify.app.toml` are applied automatically during [`app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) for your chosen developmment store. For app configuration changes to take effect for all stores in production, you need to run the [`deploy` command](https://shopify.dev/docs/api/shopify-cli/app/app-deploy).

| Property      | Required? | Value                                                          | Description                                                          |
| ------------- | --------- | -------------------------------------------------------------- | -------------------------------------------------------------------- |
| `api_version` | Yes       | `string` matching a valid Shopify version (example: `2022-10`) | The API version used to serialize webhooks and cloud service events. |

#### subscriptions

Subscribe your app to Shopify webhook topics so that your app is alerted when an event occurs on a merchant's store. [Learn more about webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe/get-started).

Note

Changes to the `shopify.app.toml` are applied automatically during [`app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) for your chosen developmment store. For app configuration changes to take effect for all stores in production, you need to run the [`deploy` command](https://shopify.dev/docs/api/shopify-cli/app/app-deploy).

| Property            | Required? | Value                                                  | Description                                                                                                                                                                                                                                                                                                                           |
| ------------------- | --------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `topics`            | Yes       | `array` of `string`s matching a valid topic            | The topics that your app subscribes to. Refer to a complete list of topics in the [webhooks reference](https://shopify.dev/docs/api/webhooks).                                                                                                                                                                                        |
| `compliance_topics` | No        | `array` of `string`s matching a valid compliance topic | The topics to manage the requests to view or erase customer personal information. Valid options: `customers/redact`, `customers/data_request` or `shop/redact`. These are required [topics to subscribe to for all apps distributed in the Shopify App Store](https://shopify.dev/docs/apps/build/compliance/privacy-law-compliance). |
| `uri`               | Yes       | `string` matching a valid URI                          | Your app's endpoint to handle the events. It can be a HTTPS URL, a relative path starting with a slash, a Google Pub/Sub URI or an Amazon EventBridge Amazon Resource Name (ARN).                                                                                                                                                     |
| `filter`            | No        | `string`                                               | A set of rules specified using Shopify API's Search Syntax. Ensures only webhooks that match the filter are delivered. [Learn more](https://shopify.dev/docs/apps/build/webhooks/customize/filters).                                                                                                                                  |
| `include_fields`    | No        | `array` of `string`s                                   | Specifies the fields that will be sent in a webhook's event message. If `null`, then all fields will be sent. [Learn more](https://shopify.dev/docs/apps/build/webhooks/customize/modify_payloads).                                                                                                                                   |

Info

The following is the structure of the URL you should use for the URI when working with **Google Cloud Pub/Sub**:

`pubsub://{project-id}:{topic-id}`

Where `{project-id}` is the ID of your Google Cloud Platform project, and `{topic-id}` is the ID of the topic that you set up in Google Cloud Pub/Sub.

For **Amazon EventBridge**, your URL will be similar to the following example:

`arn:aws:events:<aws_region>::event-source/aws.partner/shopify.com/<app_id>/<event_source_name>`

### app\_​proxy

Let Shopify act as a proxy when sending requests to your app. Learn more about [app proxy](https://shopify.dev/docs/apps/build/online-store/display-dynamic-data).

Note

Changes to the `shopify.app.toml` are applied automatically during [`app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) for your chosen developmment store. For app configuration changes to take effect for all stores in production, you need to run the [`deploy` command](https://shopify.dev/docs/api/shopify-cli/app/app-deploy).

| Property  | Required?                  | Value                                                                                                                                                 | Description                                                                                               |
| --------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `url`     | Yes if `app_proxy` defined | `string` matching a valid URL                                                                                                                         | URL of your app proxy server                                                                              |
| `subpath` | Yes if `app_proxy` defined | `string` containing letters, numbers, underscores, and hyphens up to 30 characters. The value may not be `admin`, `services`, `password`, or `login`. | The combination of `prefix` and `subpath` defines where the app proxy is accessed from a merchant's shop. |
| `prefix`  | Yes if `app_proxy` defined | `string` matching `a`, `apps`, `community`, or `tools`                                                                                                | The combination of `prefix` and `subpath` defines where the app proxy is accessed from a merchant's shop. |

### pos

Note

Changes to the `shopify.app.toml` are applied automatically during [`app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) for your chosen developmment store. For app configuration changes to take effect for all stores in production, you need to run the [`deploy` command](https://shopify.dev/docs/api/shopify-cli/app/app-deploy).

| Property   | Required? | Value     | Description                                                                                                                                                        |
| ---------- | --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `embedded` | No        | `boolean` | Load your [POS UI extension](https://shopify.dev/docs/api/pos-ui-extensions) or [App Bridge](https://shopify.dev/docs/api/app-bridge) embedded app in Shopify POS. |

### app\_​preferences

Note

Changes to the `shopify.app.toml` are applied automatically during [`app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) for your chosen developmment store. For app configuration changes to take effect for all stores in production, you need to run the [`deploy` command](https://shopify.dev/docs/api/shopify-cli/app/app-deploy).

| Property | Required? | Value                         | Description                         |
| -------- | --------- | ----------------------------- | ----------------------------------- |
| `url`    | No        | `string` matching a valid URL | URL for your app's preferences page |

### build

Note

Changes to the `shopify.app.toml` are applied automatically during [`app dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) for your chosen developmment store. For app configuration changes to take effect for all stores in production, you need to run the [`deploy` command](https://shopify.dev/docs/api/shopify-cli/app/app-deploy).

Settings for running your app through Shopify CLI.

| Property                           | Required? | Value                               | Description                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | --------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `automatically_update_urls_on_dev` | No        | `boolean`                           | When `true`, your app URL and redirect URLs will be automatically updated on `dev`. This is useful when using the built-in tunnel for development. When `false`, your URLs won't be updated on `dev`. Recommended for production apps. When omitted, you will be prompted to choose an option on `dev`. |
| `dev_store_url`                    | No        | `string` matching a valid store URL | The name of the dev store used to preview your app.                                                                                                                                                                                                                                                     |

***

## Migrate from config push

The `shopify app config push` Shopify CLI command is no longer supported. Instead, you can release your app configuration and extensions together with the [`deploy`](https://shopify.dev/docs/api/shopify-cli/app/app-deploy) command.

### Migrate interactively

If you use the `shopify app config push` command without the `--force` flag, then follow these steps to migrate to the `deploy` command:

1. [Upgrade Shopify CLI](https://shopify.dev/docs/api/shopify-cli#upgrade) to the latest version.
2. Remove all references to the `shopify app config push` command in any scripts or aliases.
3. When you're ready to deploy both app configuration and all extensions, run the `deploy` command.

## Terminal

```terminal
shopify app deploy
```

1. Shopify CLI will ask if you want to start including app configuration on `deploy`. Answer `Yes, always`, and your choice will be saved in your app configuration file.
2. Continue the rest of the `deploy` flow to release a new app version to users.
3. Push your app configuration file to source control, so all contributors use the same app configuration. This ensures that the app and Shopify CLI commands behave the same way in each contributor's environment.

### Update your CI/CD workflow

If you use the `shopify app config push` with the `--force` flag, follow these steps to migrate to the `deploy` command:

1. [Upgrade Shopify CLI](https://shopify.dev/docs/api/shopify-cli#upgrade) to the latest version.
2. Remove all references to the `shopify app config push` command.
3. Add the `deploy` command with the `--force` flag to your workflow, if it's not there already. Refer to the [example workflows](https://shopify.dev/docs/apps/launch/deployment/deploy-in-ci-cd-pipeline#examples) for more details.

***

* [App configuration file example](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration.md#app-configuration-file-example)
* [Reference](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration.md#reference)
* [Migrate from config push](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration.md#migrate-from-config-push)