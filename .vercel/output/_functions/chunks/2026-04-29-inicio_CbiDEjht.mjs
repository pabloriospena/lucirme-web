import { c as createComponent } from './astro-component_DfT2BnYK.mjs';
import 'piccolore';
import { m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './entrypoint_CzXS2ogM.mjs';
import 'clsx';

const html = () => "<p>✅ <strong>Avance:</strong> Stack montado, dominio configurado, primer commit.</p>\n<p>🛠️ <strong>Qué funcionó:</strong> Astro + Tailwind + Ollama local. Cero coste, cero trials.</p>\n<p>💥 <strong>Fallo:</strong> El modelo de 7B tardaba 8s en responder. Cambié a 3B para velocidad.</p>\n<p>📌 <strong>Lección:</strong> Empieza ligero. Escala solo cuando el cuello de botella sea real.</p>\n<p>— LuciRMe Log</p>";

				const frontmatter = {"title":"Día 1: LuciRMe Ai arranca","date":"2026-04-29T00:00:00.000Z","tags":["inicio","build-in-public"],"excerpt":"Hoy configuré el stack completo: Astro + Tailwind v4 + Ollama local. Cero coste, cero trials."};
				const file = "C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/content/logs/2026-04-29-inicio.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n                                  \r\n                \r\n                               \r\n                                                                                                        \r\n   \r\n\r\n✅ **Avance:** Stack montado, dominio configurado, primer commit.\r\n\r\n🛠️ **Qué funcionó:** Astro + Tailwind + Ollama local. Cero coste, cero trials.\r\n\r\n💥 **Fallo:** El modelo de 7B tardaba 8s en responder. Cambié a 3B para velocidad.\r\n\r\n📌 **Lección:** Empieza ligero. Escala solo cuando el cuello de botella sea real.\r\n\r\n— LuciRMe Log";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_0 as _ };
