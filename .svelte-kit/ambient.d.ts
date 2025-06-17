
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const AQUA_VM_OPTIONS: string;
	export const BUNDLED_DEBUGPY_PATH: string;
	export const chocolateyinstall: string;
	export const CHROME_CRASHPAD_PIPE_NAME: string;
	export const CLION_VM_OPTIONS: string;
	export const COLOR: string;
	export const COLORTERM: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const CONDA_DEFAULT_ENV: string;
	export const CONDA_EXE: string;
	export const CONDA_PREFIX: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const CONDA_PYTHON_EXE: string;
	export const CONDA_SHLVL: string;
	export const CUDA_PATH: string;
	export const CUDA_PATH_V11_6: string;
	export const DATAGRIP_VM_OPTIONS: string;
	export const DATASPELL_VM_OPTIONS: string;
	export const DEBUGPY_ADAPTER_ENDPOINTS: string;
	export const DEVECOSTUDIO_VM_OPTIONS: string;
	export const DriverData: string;
	export const EDITOR: string;
	export const EFC_9732_1262719628: string;
	export const EFC_9732_1592913036: string;
	export const EFC_9732_2283032206: string;
	export const EFC_9732_2775293581: string;
	export const EFC_9732_3789132940: string;
	export const ELINK_INSTALL_PATH: string;
	export const FPS_BROWSER_APP_PROFILE_STRING: string;
	export const FPS_BROWSER_USER_PROFILE_STRING: string;
	export const GATEWAY_VM_OPTIONS: string;
	export const GIT_ASKPASS: string;
	export const GIT_INSTALL_ROOT: string;
	export const GOCACHE: string;
	export const GODEBUG: string;
	export const GOLAND_VM_OPTIONS: string;
	export const GOPATH: string;
	export const HOME: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const IDEA_VM_OPTIONS: string;
	export const IGCCSVC_DB: string;
	export const INIT_CWD: string;
	export const JAVA_HOME: string;
	export const JETBRAINSCLIENT_VM_OPTIONS: string;
	export const JETBRAINS_CLIENT_VM_OPTIONS: string;
	export const LANG: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const MAVEN_HOME: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const npm_command: string;
	export const npm_config_cache: string;
	export const npm_config_engine_strict: string;
	export const npm_config_globalconfig: string;
	export const npm_config_global_prefix: string;
	export const npm_config_init_module: string;
	export const npm_config_local_prefix: string;
	export const npm_config_node_gyp: string;
	export const npm_config_noproxy: string;
	export const npm_config_npm_version: string;
	export const npm_config_prefix: string;
	export const npm_config_registry: string;
	export const npm_config_userconfig: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const NVTOOLSEXT_PATH: string;
	export const OneDrive: string;
	export const OnlineServices: string;
	export const OPENAI_API_KEY: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const PHPSTORM_VM_OPTIONS: string;
	export const platformcode: string;
	export const PODMAN_DESKTOP_HOME_DIR: string;
	export const POSH_INSTALLER: string;
	export const POSH_THEMES_PATH: string;
	export const POWERSHELL_DISTRIBUTION_CHANNEL: string;
	export const POWERSHELL_UPDATECHECK: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const PYCHARM_VM_OPTIONS: string;
	export const PYDEVD_DISABLE_FILE_VALIDATION: string;
	export const RegionCode: string;
	export const RIDER_VM_OPTIONS: string;
	export const RUBYMINE_VM_OPTIONS: string;
	export const RUSTROVER_VM_OPTIONS: string;
	export const SAL_FORCE_IACCESSIBLE2: string;
	export const SESSIONNAME: string;
	export const SSL_CERT_FILE: string;
	export const STUDIO_VM_OPTIONS: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VSCODE_INJECTION: string;
	export const WEBIDE_VM_OPTIONS: string;
	export const WEBSTORM_VM_OPTIONS: string;
	export const windir: string;
	export const ZES_ENABLE_SYSMAN: string;
	export const ZXCLOUD_INSTALL_PATH: string;
	export const ZXVE_CLIENT_AGENT_UUID: string;
	export const ZXVE_IRAI: string;
	export const ZXVE_NEW_UDS: string;
	export const _CONDA_EXE: string;
	export const _CONDA_ROOT: string;
	export const __CONDA_OPENSLL_CERT_FILE_SET: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ALLUSERSPROFILE: string;
		APPDATA: string;
		AQUA_VM_OPTIONS: string;
		BUNDLED_DEBUGPY_PATH: string;
		chocolateyinstall: string;
		CHROME_CRASHPAD_PIPE_NAME: string;
		CLION_VM_OPTIONS: string;
		COLOR: string;
		COLORTERM: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		CONDA_DEFAULT_ENV: string;
		CONDA_EXE: string;
		CONDA_PREFIX: string;
		CONDA_PROMPT_MODIFIER: string;
		CONDA_PYTHON_EXE: string;
		CONDA_SHLVL: string;
		CUDA_PATH: string;
		CUDA_PATH_V11_6: string;
		DATAGRIP_VM_OPTIONS: string;
		DATASPELL_VM_OPTIONS: string;
		DEBUGPY_ADAPTER_ENDPOINTS: string;
		DEVECOSTUDIO_VM_OPTIONS: string;
		DriverData: string;
		EDITOR: string;
		EFC_9732_1262719628: string;
		EFC_9732_1592913036: string;
		EFC_9732_2283032206: string;
		EFC_9732_2775293581: string;
		EFC_9732_3789132940: string;
		ELINK_INSTALL_PATH: string;
		FPS_BROWSER_APP_PROFILE_STRING: string;
		FPS_BROWSER_USER_PROFILE_STRING: string;
		GATEWAY_VM_OPTIONS: string;
		GIT_ASKPASS: string;
		GIT_INSTALL_ROOT: string;
		GOCACHE: string;
		GODEBUG: string;
		GOLAND_VM_OPTIONS: string;
		GOPATH: string;
		HOME: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		IDEA_VM_OPTIONS: string;
		IGCCSVC_DB: string;
		INIT_CWD: string;
		JAVA_HOME: string;
		JETBRAINSCLIENT_VM_OPTIONS: string;
		JETBRAINS_CLIENT_VM_OPTIONS: string;
		LANG: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		MAVEN_HOME: string;
		NODE: string;
		NODE_ENV: string;
		npm_command: string;
		npm_config_cache: string;
		npm_config_engine_strict: string;
		npm_config_globalconfig: string;
		npm_config_global_prefix: string;
		npm_config_init_module: string;
		npm_config_local_prefix: string;
		npm_config_node_gyp: string;
		npm_config_noproxy: string;
		npm_config_npm_version: string;
		npm_config_prefix: string;
		npm_config_registry: string;
		npm_config_userconfig: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_json: string;
		npm_package_name: string;
		npm_package_version: string;
		NUMBER_OF_PROCESSORS: string;
		NVTOOLSEXT_PATH: string;
		OneDrive: string;
		OnlineServices: string;
		OPENAI_API_KEY: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		PHPSTORM_VM_OPTIONS: string;
		platformcode: string;
		PODMAN_DESKTOP_HOME_DIR: string;
		POSH_INSTALLER: string;
		POSH_THEMES_PATH: string;
		POWERSHELL_DISTRIBUTION_CHANNEL: string;
		POWERSHELL_UPDATECHECK: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		PYCHARM_VM_OPTIONS: string;
		PYDEVD_DISABLE_FILE_VALIDATION: string;
		RegionCode: string;
		RIDER_VM_OPTIONS: string;
		RUBYMINE_VM_OPTIONS: string;
		RUSTROVER_VM_OPTIONS: string;
		SAL_FORCE_IACCESSIBLE2: string;
		SESSIONNAME: string;
		SSL_CERT_FILE: string;
		STUDIO_VM_OPTIONS: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VSCODE_INJECTION: string;
		WEBIDE_VM_OPTIONS: string;
		WEBSTORM_VM_OPTIONS: string;
		windir: string;
		ZES_ENABLE_SYSMAN: string;
		ZXCLOUD_INSTALL_PATH: string;
		ZXVE_CLIENT_AGENT_UUID: string;
		ZXVE_IRAI: string;
		ZXVE_NEW_UDS: string;
		_CONDA_EXE: string;
		_CONDA_ROOT: string;
		__CONDA_OPENSLL_CERT_FILE_SET: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
