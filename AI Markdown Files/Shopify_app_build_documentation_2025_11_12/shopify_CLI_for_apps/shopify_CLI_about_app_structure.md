

└── <App name>
    ├── shopify.app.toml
    ├── shopify.web.toml
    ├── package.json
    ├── node_modules/
    |   └── ...
    ├── app/
    |   ├── entry.server.[jsx|tsx]
    |   ├── root.[jsx|tsx]
    |   └── ...
    ├── extensions/
    |   ├── my-ui-extension
    |   |  ├── shopify.extension.toml
    |   |  ├── package.json
    |   |  └── ...
    |   ├── my-function-extension
    |   |  ├── shopify.extension.toml
    |   |  ├── package.json
    |   |  └── ...
    |   ├── my-theme-extension
    |   |  ├── shopify.extension.toml
    |   |  ├── package.json
    |   |  └── ...
    |   └── ...
    └── .env

    File/directory	Required?	Description
shopify.app.toml	Yes	A file containing metadata and configuration for your project. This file represents the root of the app.
shopify.app.{config-name}.toml	No	One or more files that contain configuration for your project. You can use TOML files to manage your apps' configuration locally and sync them with Shopify.
package.json	Yes	A file containing Node-specific metadata about your project. Includes project dependencies and scripts that let you run Shopify CLI commands using your package manager. Depending on your project structure or template, you might have additional package.json files in your project subfolders.
Web files directory	No	The recommended directory for the web files for your app. Use this directory if you want to build a web interface to display in the Shopify admin or Shopify POS using Shopify App Bridge. These components can be made up of one or more processes.
app/ directory	Yes	The directory that contains the app's entry points, routes, and webhooks. The entry.server.[jsx|tsx] file is the main application entry point. The root.[jsx|tsx] file is the root route of any React Router app. You can also use root.[jsx|tsx] to define any common UI for the app, such as a responsive layout.
extensions/ directory	No	Any app extensions that you've generated in your app. Each directory under extensions/ represents an extension, where the extension's local identifier is the name of the directory.

Each extension's directory must contain a TOML configuration file.
env	No	A file containing the UUIDs for your app and each extension in the app.
Anchor to Root configuration filesRoot configuration files
shopify.app.toml is a configuration file that contains app-level configuration and metadata. The first time you use the app dev or app config link CLI commands, the file is updated to reflect the configuration of the linked Shopify app. For more details, refer to App configuration.

Anchor to Named configuration filesNamed configuration files
You can use TOML files with names matching format shopify.app.{config-name}.toml to link your project to multiple Shopify apps. For more details, please refer to App configuration.

Anchor to Web filesWeb files
For new apps created with the React Router template, the web files are created at the root directory as a React Router app. Use this directory if you want to build a web interface to display in the Shopify admin or Shopify POS using Shopify App Bridge.

Tip
In older versions of Shopify CLI, the web files were created in a directory called /web.

The web interface can consist of one process or multiple processes. For example, you might have one process if you have a standard Rails app with an asset pipeline, or you might have multiple processes if your web app has independent frontend and backend stacks. Learn more about the conventions for single-process and multiple-process apps.

Tip
The default location for web files is the web/ subdirectory. Keeping your web files in a subdirectory like web/ helps to keep your project organized. However, Shopify CLI supports having the web file at the root of the project or any subdirectory of your choice. To use a different subdirectory or the project root for your web files, include the shopify.web.toml file in the directory.

Anchor to shopify.web.tomlshopify.web.toml
A configuration file where you can define properties for your embedded app. The location of this file identifies your web file directory to Shopify CLI.

When you scaffold an app using a template that contains an embedded app, the shopify.web.toml file is created in the root directory. If you choose to store your web files in a subdirectory, you need to include a shopify.web.toml in that directory instead.

If you need to override the build or dev command to build or preview your web app, then you can provide your own command at this level.

In projects where you want to serve the web backend and frontend through two processes, you can create a shopify.web.toml for each process. Shopify CLI can start the two processes, and expects the frontend web HTTP server to forward the traffic to the backend process. Learn more.

To explicitly specify the folders where Shopify CLI should look for shopify.web.toml files, and to avoid files being loaded twice due to symlinks, use the web_directories variable in the shopify.app.toml file.

shopify.web.toml
Copy
1
2
3
4
5
6
7
8
9
roles = ["frontend"]

auth_callback_path = ["/custom/path1", "/custom/path2"]

webhooks_path = "/api/webhooks"

[commands]
dev = "npm run dev"
build = "npm run build"
Property	Required?	Description	Values
roles	No	List of one or more roles of the process in the directory. If your project uses only one process, then you don't need to specify a value. This property replaces the deprecated type property.	["frontend", "backend", "background"]
auth_callback_path	No	Overrides the allowed redirection URLs set in the Partner Dashboard when you run your app. Use this property if your app uses a custom path to handle OAuth callbacks. You can specify a single path, or multiple paths separated by commas.	
webhooks_path	No	The root path for your app's webhook endpoints. If you run the dev command with a --reset flag, then Shopify CLI sends an UNINSTALLED webhook request for the selected store to this endpoint. If this value isn't set, then the default value of /api/webhooks is used.	
port	No	Specifies which port to use to run your frontend or backend process. If you don't specify a port, then a random one is assigned when you run dev.	
commands.build	No	The command to build the app. This command is run when you run the Shopify CLI build command. It's executed from the configuration file's directory.	
commands.dev	Yes	The command to serve the app. This command is run when you run the Shopify CLI dev command. This command is executed from the configuration file's directory.	
type (deprecated)	No	The role of the process in the directory. If your project uses only one process, then you don't need to specify a value.	frontend, backend
Anchor to Web file conventionsWeb file conventions
Shopify CLI builds and serves the various parts of your app using the following conventions, some of which use information that is defined in configuration files.

Anchor to Single process or frontend processSingle process or frontend process
The following conventions apply to apps that run on a single process, such as standard Rails apps, and to the frontend process of apps that have both a frontend and backend process.

Anchor to ConfigurationConfiguration
The CLI expects at least one shopify.web.toml configuration file, with roles including frontend, or with no type/roles specified. This file can be at the root of the project, or in a project subdirectory.

In the case of a single-process app, include backend in the list of roles as well.

To explicitly specify the folders where Shopify CLI should look for shopify.web.toml files, and to avoid files being loaded twice due to symlinks, use the web_directories variable in the shopify.app.toml file.

Anchor to Provided variablesProvided variables
The following information is provided to the process as environment variables:

SHOPIFY_API_KEY: The client ID of the app.
SHOPIFY_API_SECRET: The client secret of the app.
HOST/APP_URL: The URL that stores will load.
PORT/FRONTEND_PORT/SERVER_PORT: The port in which the process’ server should run.
SCOPES: The app's access scopes.
BACKEND_PORT: The port in which the second, or backend, process will run if the app is a two-process app. The frontend uses 'BACKEND_PORT' to proxy traffic to the backend process.
Anchor to Second process or backend processSecond process or backend process
The following conventions apply to the backend process of two-process apps, or to single-process apps.

Anchor to ConfigurationConfiguration
The CLI expects a shopify.web.toml configuration file in any subdirectory of the project, with roles including backend.

The frontend must proxy backend requests to the backend port defined in the environment variable BACKEND_PORT.

Anchor to Provided variablesProvided variables
The following information will be provided as environment variables to the process:

SHOPIFY_API_KEY: The client ID of the app.
SHOPIFY_API_SECRET: The client secret of the app.
HOST/APP_URL: The URL that stores will load.
SERVER_PORT/BACKEND_PORT/PORT: The port in which the process’s server should run.
SCOPES: The app's access scopes.
FRONTEND_PORT: The port in which the frontend process will run.
Anchor to Background processBackground process
You can also specify additional processes that will run in the background and don't require the behavior of frontend or backend processes. This can be useful for service-oriented architectures or custom file-watcher processes.

Anchor to ConfigurationConfiguration
The CLI accepts a shopify.web.toml configuration file in any subdirectory of the project, with roles = ["background"].

Anchor to Provided variablesProvided variables
The following information will be provided as environment variables to the process:

SHOPIFY_API_KEY: The client ID of the app.
SHOPIFY_API_SECRET: The client secret of the app.
HOST/APP_URL: The URL that stores will load.
SERVER_PORT/PORT: The port in which the process’s server should run, if the process includes a server.
SCOPES: The app's access scopes.
FRONTEND_PORT: The port in which the frontend process will run.
BACKEND_PORT: The port in which the second, or backend, process will run, if the app has a backend.
Anchor to ExtensionsExtensions
The extensions/ directory contains any app extensions that you've generated onto your app, or that were included in your app template. If your app doesn't contain any app extensions, then you don't need this directory. You can override the default directories using the extension_directories variable in shopify.app.toml.

Each extension is created in its own directory. The structure of the extension directory depends on the type of extension.

Shopify CLI builds and serves app extensions using information defined in a TOML file. Some extension types require specific configuration. To accommodate this, Shopify CLI groups extensions into the following types in the TOML file:

Extension	type value in the TOML file	--template flag value in the generate command
Admin action	ui_extension	admin_action
Admin block	ui_extension	admin_block
Cart and checkout validation	function	cart_checkout_validation
Cart transform	function	cart_transform
Checkout UI	ui_extension	checkout_ui
Customer Account UI	ui_extension	customer_account_ui
Delivery customization	function	delivery_customization
Discounts allocator
developer preview
function	discounts_allocator
Discount	function	discount
Editor extension collection
developer preview
editor_extension_collection	editor_extension_collection
Fulfillment constraints	function	fulfillment_constraints
Order routing location rule
beta
function	order_routing_location_rule
Payment customization	function	payment_customization
POS UI	ui_extension	pos_ui
Post-purchase UI
beta
post_purchase_ui	post_purchase_ui
Product configuration	ui_extension	product_configuration
Product subscription	subscription_ui	subscription_ui
Shopify Flow action	flow_action	flow_action
Shopify Flow template	flow_template	flow_template
Shopify Flow trigger	flow_trigger	flow_trigger
Shopify POS UI	pos_ui_extension	pos_ui
Theme app extensions	theme_app_extension	theme_app_extension
Web pixel	web_pixel	web_pixel
Anchor to Build and deploy processBuild and deploy process
The build and deploy process varies based on extension type:

Extension type	Build and deploy process
UI extensions	Shopify CLI builds UI extensions using 
ESBuild
. It expects an extension script named index.{ts,js,tsx,jsx} to exist in the extension's directory or the src/ subdirectory.
Shopify CLI build process outputs the extension in dist/index.js when running build, and inside a temporary directory when running deploy to prevent past build artifacts from leaking into the deploy bundle.
Functions	Shopify CLI runs the command specified in the build.command attribute of the configuration file. It expects the output wasm file to be at dist/index.wasm, unless a different path is set in the build.path attribute.
Themes	When building, Shopify CLI runs Theme Check against the theme app extension.
Anchor to Dependency managementDependency management
Shopify CLI uses workspaces to manage dependencies for various parts of your app project. For example, your app might contain the following:

A package.json file at the root of the app project to manage all of the app dependencies and the workspace.
A package.json file for each extension that you create.
You can change your dependency management configuration if desired.

We recommend including the lock files generated by the package manager (yarn.lock, package-lock.json, or pnpm-lock.yaml) in the repository to ensure the same version of these dependencies is used consistently across environments.

