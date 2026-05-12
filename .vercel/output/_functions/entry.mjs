import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_r_OSu84M.mjs';
import { manifest } from './manifest_GTO2OZU7.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/checktomate-access.astro.mjs');
const _page3 = () => import('./pages/api/leadmagnet-access.astro.mjs');
const _page4 = () => import('./pages/bitacora/_slug_.astro.mjs');
const _page5 = () => import('./pages/bitacora.astro.mjs');
const _page6 = () => import('./pages/checktomate.astro.mjs');
const _page7 = () => import('./pages/checktomate2.astro.mjs');
const _page8 = () => import('./pages/recursos/backlog-detox.astro.mjs');
const _page9 = () => import('./pages/recursos/guia-notebooklm.astro.mjs');
const _page10 = () => import('./pages/recursos/guias.astro.mjs');
const _page11 = () => import('./pages/recursos/propuesta-empresas.astro.mjs');
const _page12 = () => import('./pages/saluddrive/pitch-builder.astro.mjs');
const _page13 = () => import('./pages/saluddrive/shapeup-salud-drive.astro.mjs');
const _page14 = () => import('./pages/sobre-mi.astro.mjs');
const _page15 = () => import('./pages/soluciones/empresas-no-tech.astro.mjs');
const _page16 = () => import('./pages/soluciones/profesionales.astro.mjs');
const _page17 = () => import('./pages/soluciones/startups.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/checktomate-access.js", _page2],
    ["src/pages/api/leadmagnet-access.js", _page3],
    ["src/pages/bitacora/[slug].astro", _page4],
    ["src/pages/bitacora/index.astro", _page5],
    ["src/pages/checktomate.astro", _page6],
    ["src/pages/checktomate2.astro", _page7],
    ["src/pages/recursos/backlog-detox.astro", _page8],
    ["src/pages/recursos/guia-notebooklm.astro", _page9],
    ["src/pages/recursos/guias.astro", _page10],
    ["src/pages/recursos/propuesta-empresas.astro", _page11],
    ["src/pages/saluddrive/pitch-builder.astro", _page12],
    ["src/pages/saluddrive/shapeup-salud-drive.astro", _page13],
    ["src/pages/sobre-mi.astro", _page14],
    ["src/pages/soluciones/empresas-no-tech.astro", _page15],
    ["src/pages/soluciones/profesionales.astro", _page16],
    ["src/pages/soluciones/startups.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f2dad592-66c6-4647-91db-07517b4a9f6a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
