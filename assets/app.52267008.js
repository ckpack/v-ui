import{l as c,a3 as i,A as s,a4 as l,a5 as f,a6 as d,a7 as m,a8 as h,a9 as g,aa as A,ab as _,ac as v,ad as P,d as y,u as V,j as b,x as C,ae as R,af as w,ag as E,ah as T}from"./chunks/framework.1d956362.js";import{t as O}from"./chunks/theme.235e72c8.js";import{u as j,d as S,a as D,V as I,b as x,c as F,e as L,f as M,g as $,h as B,i as W,t as z}from"./chunks/index.a94174c8.js";function G({components:e,themes:a}){return(t,n)=>{const o=c(j(S({themes:a},n),t,!0));D(o.themes,t),e&&(Array.isArray(e)?e:Object.values(e)).forEach(u=>{t.use(u,o)})}}const H=Object.freeze(Object.defineProperty({__proto__:null,VButton:I,VConfigProvider:x,VForm:F,VFormItem:L,VIcon:M,VInput:$,VSpace:B,VThemeProvider:W},Symbol.toStringTag,{value:"Module"})),N=G({components:H,themes:z});const U={...O,async enhanceApp({app:e}){e.use(N);{const a=(await i(()=>import("./chunks/repl-wrapper.5d3cd73b.js"),["assets/chunks/repl-wrapper.5d3cd73b.js","assets/chunks/vue-repl.688b3afc.js","assets/chunks/framework.1d956362.js"])).default;e.component("ReplWrapper",a)}}};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const r=p(U),k=y({name:"VitePressApp",setup(){const{site:e}=V();return b(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),R(),w(),E(),r.setup&&r.setup(),()=>T(r.Layout)}});async function q(){const e=K(),a=J();a.provide(f,e);const t=d(e.route);return a.provide(m,t),a.component("Content",h),a.component("ClientOnly",g),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),r.enhanceApp&&await r.enhanceApp({app:a,router:e,siteData:A}),{app:a,router:e,data:t}}function J(){return _(k)}function K(){let e=s,a;return v(t=>{let n=P(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),i(()=>import(n),[])):null},r.NotFound)}s&&q().then(({app:e,router:a,data:t})=>{a.go().then(()=>{l(a.route,t.site),e.mount("#app")})});export{q as createApp};