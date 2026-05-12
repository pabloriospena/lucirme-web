import 'piccolore';
import { o as decodeKey } from './chunks/astro/server_BWwh5RvR.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CFOdAMAi.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/","cacheDir":"file:///C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/node_modules/.astro/","outDir":"file:///C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/dist/","srcDir":"file:///C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/","publicDir":"file:///C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/public/","buildClientDir":"file:///C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/dist/client/","buildServerDir":"file:///C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"api/checktomate-access","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/checktomate-access","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/checktomate-access\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"checktomate-access","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/checktomate-access.js","pathname":"/api/checktomate-access","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"bitacora/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/bitacora","isIndex":true,"type":"page","pattern":"^\\/bitacora\\/?$","segments":[[{"content":"bitacora","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bitacora/index.astro","pathname":"/bitacora","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"checktomate/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/checktomate","isIndex":false,"type":"page","pattern":"^\\/checktomate\\/?$","segments":[[{"content":"checktomate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/checktomate.astro","pathname":"/checktomate","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"checktomate2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/checktomate2","isIndex":false,"type":"page","pattern":"^\\/checktomate2\\/?$","segments":[[{"content":"checktomate2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/checktomate2.astro","pathname":"/checktomate2","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"recursos/backlog-detox/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/recursos/backlog-detox","isIndex":false,"type":"page","pattern":"^\\/recursos\\/backlog-detox\\/?$","segments":[[{"content":"recursos","dynamic":false,"spread":false}],[{"content":"backlog-detox","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recursos/backlog-detox.astro","pathname":"/recursos/backlog-detox","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"recursos/guia-notebooklm/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/recursos/guia-notebooklm","isIndex":false,"type":"page","pattern":"^\\/recursos\\/guia-notebooklm\\/?$","segments":[[{"content":"recursos","dynamic":false,"spread":false}],[{"content":"guia-notebooklm","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recursos/guia-notebooklm.astro","pathname":"/recursos/guia-notebooklm","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"recursos/guias/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/recursos/guias","isIndex":false,"type":"page","pattern":"^\\/recursos\\/guias\\/?$","segments":[[{"content":"recursos","dynamic":false,"spread":false}],[{"content":"guias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recursos/guias.astro","pathname":"/recursos/guias","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"recursos/propuesta-empresas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/recursos/propuesta-empresas","isIndex":false,"type":"page","pattern":"^\\/recursos\\/propuesta-empresas\\/?$","segments":[[{"content":"recursos","dynamic":false,"spread":false}],[{"content":"propuesta-empresas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recursos/propuesta-empresas.astro","pathname":"/recursos/propuesta-empresas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"saluddrive/pitch-builder/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/saluddrive/pitch-builder","isIndex":false,"type":"page","pattern":"^\\/saluddrive\\/pitch-builder\\/?$","segments":[[{"content":"saluddrive","dynamic":false,"spread":false}],[{"content":"pitch-builder","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/saluddrive/pitch-builder.astro","pathname":"/saluddrive/pitch-builder","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"saluddrive/shapeup-salud-drive/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/saluddrive/shapeup-salud-drive","isIndex":false,"type":"page","pattern":"^\\/saluddrive\\/shapeup-salud-drive\\/?$","segments":[[{"content":"saluddrive","dynamic":false,"spread":false}],[{"content":"shapeup-salud-drive","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/saluddrive/shapeup-salud-drive.astro","pathname":"/saluddrive/shapeup-salud-drive","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"sobre-mi/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sobre-mi","isIndex":false,"type":"page","pattern":"^\\/sobre-mi\\/?$","segments":[[{"content":"sobre-mi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobre-mi.astro","pathname":"/sobre-mi","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"soluciones/empresas-no-tech/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/soluciones/empresas-no-tech","isIndex":false,"type":"page","pattern":"^\\/soluciones\\/empresas-no-tech\\/?$","segments":[[{"content":"soluciones","dynamic":false,"spread":false}],[{"content":"empresas-no-tech","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/soluciones/empresas-no-tech.astro","pathname":"/soluciones/empresas-no-tech","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"soluciones/profesionales/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/soluciones/profesionales","isIndex":false,"type":"page","pattern":"^\\/soluciones\\/profesionales\\/?$","segments":[[{"content":"soluciones","dynamic":false,"spread":false}],[{"content":"profesionales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/soluciones/profesionales.astro","pathname":"/soluciones/profesionales","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"soluciones/startups/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/soluciones/startups","isIndex":false,"type":"page","pattern":"^\\/soluciones\\/startups\\/?$","segments":[[{"content":"soluciones","dynamic":false,"spread":false}],[{"content":"startups","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/soluciones/startups.astro","pathname":"/soluciones/startups","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/leadmagnet-access","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/leadmagnet-access\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"leadmagnet-access","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/leadmagnet-access.js","pathname":"/api/leadmagnet-access","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://lucirme-web.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/bitacora/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/bitacora/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/checktomate.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/checktomate2.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/recursos/backlog-detox.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/recursos/guia-notebooklm.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/recursos/guias.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/recursos/propuesta-empresas.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/saluddrive/pitch-builder.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/saluddrive/shapeup-salud-drive.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/sobre-mi.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/soluciones/empresas-no-tech.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/soluciones/profesionales.astro",{"propagation":"none","containsHead":true}],["C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/src/pages/soluciones/startups.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/checktomate-access@_@js":"pages/api/checktomate-access.astro.mjs","\u0000@astro-page:src/pages/api/leadmagnet-access@_@js":"pages/api/leadmagnet-access.astro.mjs","\u0000@astro-page:src/pages/bitacora/[slug]@_@astro":"pages/bitacora/_slug_.astro.mjs","\u0000@astro-page:src/pages/bitacora/index@_@astro":"pages/bitacora.astro.mjs","\u0000@astro-page:src/pages/checktomate@_@astro":"pages/checktomate.astro.mjs","\u0000@astro-page:src/pages/checktomate2@_@astro":"pages/checktomate2.astro.mjs","\u0000@astro-page:src/pages/recursos/backlog-detox@_@astro":"pages/recursos/backlog-detox.astro.mjs","\u0000@astro-page:src/pages/recursos/guia-notebooklm@_@astro":"pages/recursos/guia-notebooklm.astro.mjs","\u0000@astro-page:src/pages/recursos/guias@_@astro":"pages/recursos/guias.astro.mjs","\u0000@astro-page:src/pages/recursos/propuesta-empresas@_@astro":"pages/recursos/propuesta-empresas.astro.mjs","\u0000@astro-page:src/pages/saluddrive/pitch-builder@_@astro":"pages/saluddrive/pitch-builder.astro.mjs","\u0000@astro-page:src/pages/saluddrive/shapeup-salud-drive@_@astro":"pages/saluddrive/shapeup-salud-drive.astro.mjs","\u0000@astro-page:src/pages/sobre-mi@_@astro":"pages/sobre-mi.astro.mjs","\u0000@astro-page:src/pages/soluciones/empresas-no-tech@_@astro":"pages/soluciones/empresas-no-tech.astro.mjs","\u0000@astro-page:src/pages/soluciones/profesionales@_@astro":"pages/soluciones/profesionales.astro.mjs","\u0000@astro-page:src/pages/soluciones/startups@_@astro":"pages/soluciones/startups.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_GTO2OZU7.mjs","C:/Users/pablo/OneDrive/Desktop/LuciRMe_Web/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp__UHH7Q77.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.DugkzoUc.css","/_astro/checktomate.DkmYiZtG.css","/_astro/checktomate2.VeXINFOQ.css","/checktomate-demo.mp4","/checktomate-logo.png","/checktomate-logo40x40.png","/favicon.ico","/favicon.svg","/logo-lucirme-ai.png","/logo-lucirme.png","/pablo-rios.jpeg","/propuesta-empresas.pdf","/images/portada-libro.jpg","/404.html","/api/checktomate-access","/bitacora/index.html","/checktomate/index.html","/checktomate2/index.html","/recursos/backlog-detox/index.html","/recursos/guia-notebooklm/index.html","/recursos/guias/index.html","/recursos/propuesta-empresas/index.html","/saluddrive/pitch-builder/index.html","/saluddrive/shapeup-salud-drive/index.html","/sobre-mi/index.html","/soluciones/empresas-no-tech/index.html","/soluciones/profesionales/index.html","/soluciones/startups/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"kymHJp51jPcZ9zOCvTbHAm/DHIiDiTpvDIcEJLZMSpk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
