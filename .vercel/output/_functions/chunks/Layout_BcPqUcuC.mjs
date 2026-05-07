import { c as createComponent } from './astro-component_DfT2BnYK.mjs';
import 'piccolore';
import { r as renderTemplate, n as renderSlot, o as renderHead, h as addAttribute } from './entrypoint_CzXS2ogM.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "LuciRMe Ai", description = "Conectar tecnología y personas para desbloquear el potencial y ganar velocidad." } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"', "><title>", `</title><!-- Enlace al Favicon para que se vea en la pestaña del navegador --><link rel="icon" type="image/png" href="/favicon.svg"><!-- ... otros tags del head ... --><!-- MailerLite Universal --><script>
  (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
  .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
  n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
  (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
  ml('account', '2041884');
<\/script><!-- End MailerLite Universal --><!-- ... tus otros meta tags y scripts ... --><script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wlu26c7jsf");
<\/script><!-- End Microsoft Clarity -->`, '</head> <body class="bg-white text-gray-900 font-sans antialiased"> ', " </body></html>"])), addAttribute(description, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
