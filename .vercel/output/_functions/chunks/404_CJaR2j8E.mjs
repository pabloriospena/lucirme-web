import { c as createComponent } from './astro-component_DfT2BnYK.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CzXS2ogM.mjs';
import { $ as $$Layout } from './Layout_BcPqUcuC.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 | No encontrado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-4"> <h1 class="text-6xl font-bold text-cyan-400 mb-4">404</h1> <p class="text-xl text-slate-300 mb-8">Oops. Esta página no existe o se movió.</p> <a href="/" class="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold transition">
Volver al Inicio
</a> </div> ` })}`;
}, "C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/404.astro", void 0);

const $$file = "C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
