import { _ as __vite_glob_0_0 } from './2026-04-29-inicio_CbiDEjht.mjs';
import { c as createComponent } from './astro-component_DfT2BnYK.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_CzXS2ogM.mjs';
import { $ as $$Layout } from './Layout_BcPqUcuC.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await /* #__PURE__ */ Object.assign({"../../../content/logs/2026-04-29-inicio.md": __vite_glob_0_0});
  const sortedPosts = Object.values(allPosts).map((post) => ({
    frontmatter: post.frontmatter,
    url: `/bitacora/${post.file.split("/").pop().replace(".md", "")}/`,
    excerpt: post.excerpt
  })).sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bitácora | LuciRMe Ai" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-slate-900 py-16 px-4"> <div class="container mx-auto max-w-4xl"> <!-- Header --> <div class="mb-12"> <h1 class="text-4xl font-bold text-white mb-4">LuciRMe Log</h1> <p class="text-slate-300 text-lg">
Transparencia operativa. Lo que aprendí hoy sobre Producto, IA y Automatización.
</p> </div> <!-- Lista de posts --> <div class="space-y-4"> ${sortedPosts.map((post) => renderTemplate`<article class="border border-slate-700 p-5 rounded-lg hover:border-cyan-500 transition"> <!-- Tags + Fecha --> <div class="flex flex-wrap gap-2 mb-3"> ${post.frontmatter.tags.map((tag) => renderTemplate`<span class="text-xs bg-slate-800 text-amber-400 px-2 py-1 rounded">#${tag}</span>`)} <time class="text-slate-500 text-xs ml-auto">${post.frontmatter.date}</time> </div> <!-- Título --> <h2 class="text-xl font-semibold text-white mb-2"> <a${addAttribute(post.url, "href")} class="hover:text-cyan-400 transition"> ${post.frontmatter.title} </a> </h2> <!-- Extracto --> <p class="text-slate-300 text-sm mb-3">${post.excerpt}</p> <!-- Leer más --> <a${addAttribute(post.url, "href")} class="text-cyan-400 text-sm hover:underline">
Leer entrada completa →
</a> </article>`)} </div> <!-- Si no hay posts --> ${sortedPosts.length === 0 && renderTemplate`<div class="text-center py-12 border border-slate-700 rounded-lg"> <p class="text-slate-400">Próximamente: primeras entradas de la bitácora.</p> </div>`} </div> </section> ` })}`;
}, "C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/bitacora/index.astro", void 0);

const $$file = "C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/bitacora/index.astro";
const $$url = "/bitacora";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
