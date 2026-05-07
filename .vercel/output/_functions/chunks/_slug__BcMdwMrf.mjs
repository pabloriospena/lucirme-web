import { _ as __vite_glob_0_0 } from './2026-04-29-inicio_CbiDEjht.mjs';
import { c as createComponent } from './astro-component_DfT2BnYK.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CzXS2ogM.mjs';
import { $ as $$Layout } from './Layout_BcPqUcuC.mjs';

const getStaticPaths = async () => {
  const allPosts = await /* #__PURE__ */ Object.assign({"../../../content/logs/2026-04-29-inicio.md": __vite_glob_0_0});
  return Object.entries(allPosts).map(([path, module]) => {
    const slug = path.split("/").pop()?.replace(".md", "") || "";
    return {
      params: { slug }
    };
  });
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const allPosts = await /* #__PURE__ */ Object.assign({"../../../content/logs/2026-04-29-inicio.md": __vite_glob_0_0});
  let postEntry = null;
  for (const [filePath, module] of Object.entries(allPosts)) {
    const fileName = filePath.split("/").pop()?.replace(".md", "") || "";
    if (fileName === slug) {
      postEntry = module;
      break;
    }
  }
  if (!postEntry) {
    return Astro2.redirect("/bitacora");
  }
  const { frontmatter, Content } = postEntry;
  const { title, date, tags } = frontmatter;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} | LuciRMe Log` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="bg-slate-900 py-16 px-4"> <div class="container mx-auto max-w-3xl"> <!-- Botón volver --> <a href="/bitacora" class="text-cyan-400 hover:underline text-sm mb-6 inline-block">
← Volver a la bitácora
</a> <!-- Cabecera del post --> <header class="mb-8"> <!-- Etiquetas --> <div class="flex flex-wrap gap-2 mb-4"> ${tags.map((tag) => renderTemplate`<span class="text-xs bg-slate-800 text-amber-400 px-2 py-1 rounded">#${tag}</span>`)} </div> <!-- Título --> <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">${title}</h1> <!-- Fecha --> <time class="text-slate-500 text-sm">${date}</time> </header> <!-- Contenido renderizado --> <div class="bg-slate-800 p-6 rounded-lg prose prose-invert prose-slate max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div> <!-- Firma --> <div class="mt-8 pt-8 border-t border-slate-700"> <p class="text-slate-400 text-sm">— LuciRMe Log</p> </div> </div> </article> ` })}`;
}, "C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/bitacora/[slug].astro", void 0);

const $$file = "C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/bitacora/[slug].astro";
const $$url = "/bitacora/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
