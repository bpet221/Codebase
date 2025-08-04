---
title: "Commands"
source: https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands
sections: Developer Tools > Cli > Cli 2
created: 2025-07-29 15:28:22
---

Title: Shopify CLI 2.x

URL Source: https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands

Markdown Content:
This reference lists the commands that you can use to build themes with Shopify CLI 2.x.

| Topic | Command | Description |
| --- | --- | --- |
| [theme](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#init) | [init](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#init) | Clones a Git repository to your local machine to use as the starting point for building a theme. |
| [serve](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#serve) | Uploads the current theme to a store so you can preview it. |
| [check](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#check) | Calls and runs Theme Check to analyze your theme code for errors and to ensure that it follows theme and Liquid best practices. |
| [list](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#list) | Lists the themes in your store. |
| [open](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#open) | Returns links that let you preview the specified theme. |
| [pull](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#pull) | Retrieves theme files from Shopify. |
| [push](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#push) | Uploads your local theme files to Shopify, overwriting the remote version if specified. |
| [share](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#share) | Uploads your theme as a new, unpublished theme in your theme library. |
| [publish](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#publish) | Publishes an unpublished theme from your theme library. |
| [package](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#package) | Packages your local theme files into a ZIP file that can be uploaded to Shopify. |
| [delete](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#delete) | Deletes a theme from your store. |
| [_none_](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#help) | [help](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#help) | Lists the available commands and describes what they do. |
| [login](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#login) | Authenticates and logs you into the specified store with Shopify CLI. |
| [logout](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#logout) | Logs you out of the Shopify account or Partner account and store. |
| [populate](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#populate) | Adds example data to your store for testing your app or theme’s behavior. |
| [store](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#store) | Displays the store that you're currently connected to. |
| [switch](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#switch) | Switches between stores without logging out and logging in again. |
| [version](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#version) | Displays the version of Shopify CLI that you're running. |
| [config](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#config) | Configures Shopify CLI options. There are two available options: `analytics` and `feature`. |
| [whoami](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#whoami) | Determines which Partner organization you're logged in to, or which store you're logged in to as a staff member. |

Clones a Git repository to your local machine to use as the starting point for building a theme.

If no Git repository is specified, then this command creates a copy of [Dawn](https://github.com/Shopify/dawn), Shopify's example theme, with the specified name in the current folder. If no name is provided, then you're prompted to enter one.

Terminal

Copy

| Parameter | Short version | Description |
| --- | --- | --- |
| `NAME` |  | The name that you want to give your theme. Cloned files are stored in a folder with this name. |
| `--clone-url <URL>` | `-u <URL>` | The URL of the Git repository that you want to clone. If no URL is specified, then `https://github.com/Shopify/dawn.git` is used. |

Uploads the current theme as the specified theme, or a [development theme](https://shopify.dev/docs/storefronts/themes/tools/cli#development-themes), to the store that you're connected to.

This command also returns the following information:

*   A link to your development theme at [http://127.0.0.1:9292](http://127.0.0.1:9292/). This URL can hot reload local changes to CSS and sections, or refresh the entire page when a file changes, enabling you to preview changes in real time using the store's data.

You can specify a different network interface and port using `--host` and `--port`.

*   A link to the [editor](https://shopify.dev/docs/storefronts/themes/tools/online-editor) for the theme in the Shopify admin.

*   A [preview link](https://help.shopify.com/manual/online-store/themes/adding-themes#share-a-theme-preview-with-others) that you can share with other developers.

If you already have a development theme for your current environment, then this command replaces the development theme with your local theme. You can override this using the `--theme-editor-sync` flag.

Development themes are deleted when you run `shopify logout`. If you need a preview link that can be used after you log out, then you should [`share`](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#share) your theme or [`push`](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#push) to an unpublished theme on your store.

You can run this command only in a directory that matches the [default Shopify theme folder structure](https://shopify.dev/docs/storefronts/themes/architecture#directory-structure-and-component-types).

Terminal

Copy

| Parameter | Short version | Description |
| --- | --- | --- |
| `--live-reload <MODE>` |  | The level at which content is reloaded when changes are made to the theme. Accepts the following values: * `hot-reload` - Hot reloads local changes to the CSS and sections (default) * `full-page` - Refreshes the entire page when a file is modified * `off` - Deactivates live reload |
| `--host <IP>` |  | The network interface that the web server listens on. The default value is 127.0.0.1. |
| `--port <PORT>` |  | The local port to serve the theme preview from. |
| `--poll` |  | Forces the polling adapter to watch file changes. You can try this option if live reload isn't working as expected. |
| `--theme-editor-sync` | `-e` | Enables two-way sync for theme JSON files. When this option is enabled, changes made in the [theme editor](https://shopify.dev/docs/storefronts/themes/tools/online-editor) in the Shopify admin are applied to the local copy of the theme. If you run the `serve` command with this flag and you already have a development theme for your current environment, then the local and remote themes are compared. If there are any differences between files in the local copy of the theme and remote development theme, then the differing files are listed. You're prompted to overwrite your local or remote version, or merge the files. |
| `--theme <NAME_OR_ID>` | `-t <NAME_OR_ID>` | Specify the ID or name of the theme that you want to serve. If you don't use this flag, then the theme is served using a new or existing development theme. |
| `--ignore` | `-x` | Skips hot reloading any files that match the specified pattern. Specify multiple patterns to ignore by using the flag multiple times in a single command. If a file matches both the pattern specified in `--only` and `--ignore`, then the file is ignored. If files are excluded using [.shopifyignore](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2#excluding-files-from-shopify-cli), then both the contents of `.shopifyignore` and the `--ignore` flag are respected. Accepts references to files in the following formats: * Simple file names: `templates/product.temp.json` * Wildcards: `config/*_secret.json`, `*.jpg` * Regular expressions: `/\.jpe?g$/`. If you're entering the command in a shell, then you might need to add additional escape characters. |
| `--only` | `-o` | Hot reloads only files that match the specified pattern. Specify multiple patterns by using the flag multiple times in a single command. Accepts references to files in the following formats: * Simple file names: `templates/product.temp.json` * Wildcards: `config/*_secret.json`, `*.jpg` * Regular expressions: `/\.jpe?g$/`. If you're entering the command in a shell, then you might need to add additional escape characters. |

Calls and runs [Theme Check](https://shopify.dev/docs/storefronts/themes/tools/theme-check/configuration) to analyze your theme code for errors and to ensure that it follows theme and Liquid best practices. [Learn more about the checks that Theme Check runs](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks).

Terminal

Copy

| Flag | Alias | Description | Environment variable |
| --- | --- | --- | --- |
| `--config <PATH>` | `-C <PATH>` | The path to your custom [Theme Check config](https://shopify.dev/docs/storefronts/themes/tools/theme-check/configuration). This config overrides `.theme-check.yml`, if it is present in the directory being analyzed. | `SHOPIFY_FLAG_CONFIG` |
| `--fail-level <LEVEL>` |  | The [severity level](https://shopify.dev/docs/storefronts/themes/tools/theme-check/configuration#check-severity) that causes a run of theme check to fail (exit code 1). Options include `error`, `suggestion`, and `style`. | `SHOPIFY_FLAG_FAIL_LEVEL` |
| `--auto-correct` | `-a` | Automatically fixes correctable offenses. | `SHOPIFY_FLAG_AUTO_CORRECT` |
| `--init` |  | Generates a new [Theme Check config file](https://shopify.dev/docs/storefronts/themes/tools/theme-check/configuration). | `SHOPIFY_FLAG_INIT` |
| `--output` | `-o` | Outputs the results of the check to a file. Options include `json` and `text` (default). | `SHOPIFY_FLAG_OUTPUT` |
| `--print` |  | Outputs the active config to STDOUT. | `SHOPIFY_FLAG_PRINT` |
| `--list` | `-l` | Lists the active checks. | `SHOPIFY_FLAG_LIST` |
| `--environment <ENV_NAME>` | `-e <ENV_NAME>` | The [environment](https://shopify.dev/docs/storefronts/themes/tools/cli/environments) that you want to use. | `SHOPIFY_FLAG_ENVIRONMENT` |
| `--version` | `-v` | Prints the version of Theme Check being used. | `SHOPIFY_FLAG_VERSION` |
| `--path <path>` |  | The path to your theme directory. | `SHOPIFY_FLAG_PATH` |
| `--verbose` |  | Provides more detailed output in the logs. | `SHOPIFY_FLAG_VERBOSE` |

Lists the themes in your store, along with their IDs and statuses.

Terminal

Copy

Returns links that let you preview the specified theme. The following links are returned:

*   A link to the [editor](https://shopify.dev/docs/storefronts/themes/tools/online-editor) for the theme in the Shopify admin.
*   A [preview link](https://help.shopify.com/manual/online-store/themes/adding-themes#share-a-theme-preview-with-others) that you can share with other developers.

If you don't specify a theme, then you're prompted to select the theme to open from the list of the themes in your store.

Terminal

Copy

| Parameter | Short version | Description |
| --- | --- | --- |
| `--theme <NAME_OR_ID>` | `-t <NAME_OR_ID>` | The name or [ID](https://shopify.dev/docs/api/shopify-cli/theme/theme-list) of the theme that you want to open. |
| `--live` | `-l` | Returns links for the live (published) theme. This option doesn't require `--theme`. |
| `--development` | `-d` | Returns links for your [development theme](https://shopify.dev/docs/storefronts/themes/tools/cli#development-themes). This option doesn't require `--theme`. |
| `--editor` | `-e` | Opens the [theme editor](https://shopify.dev/docs/storefronts/themes/tools/online-editor) for the specified theme in your browser. |

Retrieves theme files from Shopify.

If no theme is specified, then you're prompted to select the theme to pull from the list of the themes in your store.

Terminal

Copy

| Parameter | Short version | Description |
| --- | --- | --- |
| `--theme <NAME_OR_ID>` | `-t <NAME_OR_ID>` | The name or [ID](https://shopify.dev/docs/api/shopify-cli/theme/theme-list) of the theme that you want to pull. |
| `--live` | `-l` | Pulls the live (published) theme. This option doesn't require `--theme`. |
| `--development` | `-d` | Downloads theme files from your remote [development theme](https://shopify.dev/docs/storefronts/themes/tools/cli#development-themes). You might use this command to copy changes made to the development theme in the [theme editor](https://shopify.dev/docs/storefronts/themes/tools/online-editor) to your local copy of the theme. This option doesn't require `--theme`. |
| `--nodelete` | `-n` | Runs the pull command without deleting local files. |
| `--ignore` | `-x` | Skips downloading the specified files from Shopify. Specify multiple patterns to ignore by using the flag multiple times in a single command. If files are excluded using [.shopifyignore](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2#excluding-files-from-shopify-cli), then both the contents of `.shopifyignore` and the `--ignore` flag are respected. Accepts references to files in the following formats: * Simple file names: `templates/product.temp.json` * Wildcards: `config/*_secret.json`, `*.jpg` * Regular expressions: `/\.jpe?g$/`. If you're entering the command in a shell, then you might need to add additional escape characters. |
| `--only` | `-o` | Downloads only the specified files from Shopify. Specify multiple patterns by using the flag multiple times in a single command. Accepts references to files in the following formats: * Simple file names: `templates/product.temp.json` * Wildcards: `config/*_secret.json`, `*.jpg` * Regular expressions: `/\.jpe?g$/`. If you're entering the command in a shell, then you might need to add additional escape characters. |

Uploads your local theme files to Shopify, overwriting the remote theme if specified.

If no theme is specified, then you're prompted to select the theme to overwrite from the list of the themes in your store.

You can run this command only in a directory that matches the [default Shopify theme folder structure](https://shopify.dev/docs/storefronts/themes/architecture#directory-structure-and-component-types).

This command returns the following information:

*   A link to the [editor](https://shopify.dev/docs/storefronts/themes/tools/online-editor) for the theme in the Shopify admin.
*   A [preview link](https://help.shopify.com/manual/online-store/themes/adding-themes#share-a-theme-preview-with-others) that you can share with others.

Terminal

Copy

If you use the `--json` flag, then theme information is returned in JSON format, which can be used as a machine-readable input for scripts or continuous integration.

Terminal

Copy

Sample output:

Copy

| Parameter | Short version | Description |
| --- | --- | --- |
| `--theme <NAME_OR_ID>` | `-t <NAME_OR_ID>` | The name or [ID](https://shopify.dev/docs/api/shopify-cli/theme/theme-list) of the theme that you want to overwrite. |
| `--development` | `-d` | Pushes to your [development theme](https://shopify.dev/docs/storefronts/themes/tools/cli#development-themes). If you don't have a development theme, then one is created. This option doesn't require `--theme`. |
| `--nodelete` | `-n` | Pushes your local files without deleting remote files from Shopify. |
| `--json` | `-j` | Returns information about the pushed theme as a JSON object. |
| `--allow-live` | `-a` | Allows Shopify CLI to overwrite the live (published) theme. |
| `--live` | `-l` | Pushes to the live (published) theme. This option doesn't require `--theme` or `--allow-live`. |
| `--publish` | `-p` | After the theme is pushed, publishes the theme so it is live in the store. |
| `--unpublished` | `-u` | Uploads the theme to the theme library as a new unpublished theme. You're prompted to provide a name for the theme. Use the `--theme` flag to provide a name as a part of the command. |
| `--ignore` | `-x` | Skips uploading the specified files to Shopify. Specify multiple patterns to ignore by using the flag multiple times in a single command. If files are excluded using [.shopifyignore](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2#excluding-files-from-shopify-cli), then both the contents of `.shopifyignore` and the `--ignore` flag are respected. Accepts references to files in the following formats: * Simple file names: `templates/product.temp.json` * Wildcards: `config/*_secret.json`, `*.jpg` * Regular expressions: `/\.jpe?g$/`. If you're entering the command in a shell, then you might need to add additional escape characters. |
| `--only` | `-o` | Uploads only the specified files to Shopify. Specify multiple patterns by using the flag multiple times in a single command. Accepts references to files in the following formats: * Simple file names: `templates/product.temp.json` * Wildcards: `config/*_secret.json`, `*.jpg` * Regular expressions: `/\.jpe?g$/`. If you're entering the command in a shell, then you might need to add additional escape characters. |

Uploads your theme as a new, unpublished theme in your theme library. The theme is given a randomized name.

This command returns a [preview link](https://help.shopify.com/manual/online-store/themes/adding-themes#share-a-theme-preview-with-others) that you can share with others.

Terminal

Copy

Publishes an unpublished theme from your theme library.

If no theme ID is specified, then you're prompted to select the theme that you want to publish from the list of themes in your store.

You can run this command only in a directory that matches the [default Shopify theme folder structure](https://shopify.dev/docs/storefronts/themes/architecture#directory-structure-and-component-types).

If you want to publish your local theme, then you need to run `shopify theme push` first. You're asked to confirm that you want to publish the specified theme. You can skip this confirmation using the `--force` flag.

Terminal

Copy

| Parameter | Short version | Description |
| --- | --- | --- |
| `THEME_ID` |  | The [ID](https://shopify.dev/docs/api/shopify-cli/theme/theme-list) of the theme that you want to publish. |
| `--force` | `-f` | Publishes the theme without confirming with the user. |

Packages your local theme files into a ZIP file that can be uploaded to Shopify.

Only folders that match the [default Shopify theme folder structure](https://shopify.dev/docs/storefronts/themes/architecture#directory-structure-and-component-types) are included in the package.

The ZIP file uses the name `theme_name-theme_version.zip`, based on parameters in your [settings_schema.json](https://shopify.dev/docs/storefronts/themes/architecture/config/settings-schema-json) file.

Terminal

Copy

Deletes a theme from your store.

You can specify multiple themes by ID. If no theme is specified, then you're prompted to select the theme that you want to delete from the list of themes in your store.

You're asked to confirm that you want to delete the specified themes before they are deleted. You can skip this confirmation using the `--force` flag.

Terminal

Copy

| Parameter | Short version | Description |
| --- | --- | --- |
| `THEME_ID` |  | The [ID](https://shopify.dev/docs/api/shopify-cli/theme/theme-list) of the theme that you want to delete. You can specify multiple theme IDs separated by spaces. |
| `--development` | `-d` | Deletes your [development theme](https://shopify.dev/docs/storefronts/themes/tools/cli#development-themes). |
| `--force` | `-f` | Deletes the theme without confirming with the user. |

Lists the available commands and describes what they do.

Terminal

Copy

You can also use the `help` command or options to get more detailed information about a specific command:

Terminal

Copy

Authenticates and logs you into the specified store with Shopify CLI.

Terminal

Copy

| Parameter | Description |
| --- | --- |
| `--store <DOMAIN>` | The store that you want to log in to. |

The `--store` flag accepts the following inputs:

| Type | Example |
| --- | --- |
| The store prefix | `example` |
| The [myshopify.com URL](https://help.shopify.com/manual/domains) | `example.myshopify.com` `https://example.myshopify.com` |
| The store admin URL | `https://example.myshopify.com/admin` |
| The custom domain or custom domain admin | `https://example.com` `https://example.com/admin` |

The specified store can be a [development store](https://shopify.dev/docs/storefronts/themes/tools/development-stores) or a Shopify store. You need to have [collaborator access](https://shopify.dev/docs/storefronts/themes/tools/collaborator-accounts) to the store, or be a staff member or owner of the store.

To switch between stores that you have access to, use [`shopify switch`](https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2/commands#switch).

Logs you out of the Shopify account or Partner account and store.

The `logout` command clears credentials. You need to reauthenticate the next time that you connect to a store.

Terminal

Copy

Adds example data to your store for testing your app or theme’s behavior.

The `populate` command lets you specify which type of data you're populating, and how many to create:

Terminal

Copy

| Parameter | Description |
| --- | --- |
| `products` | Creates products in your store. Products are created with a title and a price. |
| `customers` | Creates customers in your store. Customers are created with a name only. |
| `draftorders` | Creates draft orders in your store. Draft orders are created with one custom item. |
| `--count <NUMBER>` | Creates the specified number of records. This is an optional parameter. If no count is specified, then five records are created. |

Displays the store that you're currently connected to.

Terminal

Copy

Example output:

Terminal

Copy

Switches between stores without logging out and logging in again.

Terminal

Copy

If you enter this command without a `--store` flag, then you're prompted to select a store associated with your account.

The `--store` flag accepts the following inputs:

| Type | Example |
| --- | --- |
| The store prefix | `example` |
| The [myshopify.com URL](https://help.shopify.com/manual/domains) | `example.myshopify.com` `https://example.myshopify.com` |
| The store admin URL | `https://example.myshopify.com/admin` |
| The custom domain or custom domain admin | `https://example.com` `https://example.com/admin` |

Displays the version of Shopify CLI that you're running.

Terminal

Copy

Example output:

Terminal

Copy

Configures Shopify CLI options. There are two available options: `analytics` and `feature`.

Configures anonymous usage reporting by enabling or disabling analytics.

Terminal

Copy

Configures active [feature sets](https://github.com/Shopify/shopify-cli/wiki/Feature-Sets) in the CLI.

This command is used for development and debugging work on the CLI tool itself. Unless you're developing the tool, don't alter this command. Review the [Shopify CLI development guide](https://github.com/Shopify/shopify-cli/wiki) for more information.

Terminal

Copy

Determines which Partner organization you're logged in to, or which store you're logged in to as a staff member.

Terminal

Copy

Example output:

Terminal

Copy

Terminal

Copy
