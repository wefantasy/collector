import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.B5yQw_cE.js","_app/immutable/chunks/BAuLwB1o.js","_app/immutable/chunks/BCYs_ujV.js","_app/immutable/chunks/DF3BP7tu.js","_app/immutable/chunks/C9wi6P5u.js"];
export const stylesheets = [];
export const fonts = [];
