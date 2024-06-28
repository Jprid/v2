
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap\" rel=\"stylesheet\">\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n\n\t<style>\n\t\t* {\n\t\t\tbox-sizing: border-box;\n\t\t\t--image-border-radius: 5%;\n\t\t\t--carolina-blue: #74b3ceff;\n\t\t\t--blue-munsell: #508991ff;\n\t\t\t--prussian-blue: #172a3aff;\n\t\t\t--midnight-green: #004346ff;\n\t\t\t--mint: #09bc8aff;\n\t\t\ttransition: all 1s;\n\t\t\tscroll-behavior: smooth;\n\t\t}\n\t\tbody {\n\t\t\theight: 100vh;\n\t\t\twidth: 100%;\n\t\t\tmargin: 0 auto;\n\t\t\tbackground-color: var(--prussian-blue);\n\t\t\tdisplay: flex;\n\t\t\tflex-flow: row nowrap;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t}\n\t\t.pointer {\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.fs-xl {\n\t\t\tfont-size: 25px;\n\t\t\tletter-spacing: 5px;\n\t\t}\n\t\t.lato {\n\t\t\tfont-family: Lato, sans-serif;\n\t\t}\n\t\t.fs-l {\n\t\t\tfont-size: 20px;\n\t\t\tletter-spacing: 2.5px;\n\t\t}\n\t\t.fs-md {\n\t\t\tfont-size: 15px;\n\t\t}\n\t\t.fs-sm {\n\t\t\tfont-size: 12px;\n\t\t\tletter-spacing: 1.5px;\n\t\t}\n\t\t.shadowed-text-midnight-green {\n\t\t\ttext-shadow: 1px 1px 1px var(--midnight-green);\n\t\t}\n\t\t.shadowed-text-prussian-blue {\n\t\t\ttext-shadow: 1px 1px 1px var(--blue-munsell);\n\t\t}\n\t\t.flexed-row-center {\n\t\t\tdisplay: flex;\n\t\t\tflex-flow: row;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t}\n\t\t.flexed-col-center {\n\t\t\tdisplay: flex;\n\t\t\tflex-flow: column;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t}\n\t\t.highlighted-text {\n\t\t\tcolor: var(--mint);\n\t\t\tletter-spacing: 0.25vw;\n\t\t}\n\n\t\t.lined-header {\n\t\t\tdisplay: flex;\n\t\t\tflex-flow: row nowrap;\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t}\n\n\t</style>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "15c4jmk"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
