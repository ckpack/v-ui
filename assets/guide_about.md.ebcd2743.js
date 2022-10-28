import{_ as s,c as n,o as a,a as e}from"./app.e079ba9b.js";const h=JSON.parse('{"title":"v-ui","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u529F\u80FD\u7279\u70B9","slug":"\u529F\u80FD\u7279\u70B9","link":"#\u529F\u80FD\u7279\u70B9","children":[]},{"level":2,"title":"\u76F8\u5173\u94FE\u63A5","slug":"\u76F8\u5173\u94FE\u63A5","link":"#\u76F8\u5173\u94FE\u63A5","children":[]},{"level":2,"title":"\u811A\u672C\u547D\u4EE4","slug":"\u811A\u672C\u547D\u4EE4","link":"#\u811A\u672C\u547D\u4EE4","children":[]},{"level":2,"title":"\u76EE\u5F55\u7ED3\u6784","slug":"\u76EE\u5F55\u7ED3\u6784","link":"#\u76EE\u5F55\u7ED3\u6784","children":[]},{"level":2,"title":"\u4F9D\u8D56\u5E93","slug":"\u4F9D\u8D56\u5E93","link":"#\u4F9D\u8D56\u5E93","children":[]}],"relativePath":"guide/about.md","lastUpdated":1666952189000}'),l={name:"guide/about.md"},p=e(`<h1 id="v-ui" tabindex="-1">v-ui <a class="header-anchor" href="#v-ui" aria-hidden="true">#</a></h1><p><code>@ckpack/v-ui</code>\u662F\u4E00\u4E2AVue3.x\u7684\u7EC4\u4EF6\u5E93</p><h2 id="\u529F\u80FD\u7279\u70B9" tabindex="-1">\u529F\u80FD\u7279\u70B9 <a class="header-anchor" href="#\u529F\u80FD\u7279\u70B9" aria-hidden="true">#</a></h2><ul><li>\u57FA\u4E8E<code>Vite</code>\u3001<code>Vue3.x</code>\u3001<code>TypeScript</code> \u7B49\u73B0\u4EE3\u5316\u5DE5\u5177\u5F00\u53D1</li><li>\u6240\u6709\u7EC4\u4EF6\u9ED8\u8BA4\u5373\u652F\u6301\u6309\u9700\u52A0\u8F7D</li><li>\u901A\u8FC7<code>SCSS</code>\u3001<code>CSS Variable</code> \u4E3B\u9898\u5207\u6362\u5982\u6B64\u65B9\u4FBF</li><li>\u63D0\u4F9B\u4E30\u5BCC\u7684\u6587\u6863\u548C\u7EC4\u4EF6\u793A\u4F8B</li><li>\u53EF\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\u7F00\u3001CSS \u53EF\u4EE5\u524D\u7F00\u907F\u514D\u6F5C\u5728\u7684\u7EC4\u4EF6\u540D\u79F0\u6216\u8005\u6837\u5F0F\u51B2\u7A81</li></ul><h2 id="\u76F8\u5173\u94FE\u63A5" tabindex="-1">\u76F8\u5173\u94FE\u63A5 <a class="header-anchor" href="#\u76F8\u5173\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li>\u5B98\u7F51: <a href="https://ckpack.github.io/v-ui/" target="_blank" rel="noreferrer">https://ckpack.github.io/v-ui/</a></li><li>GitHub \u4ED3\u5E93: <a href="https://github.com/ckpack/v-ui" target="_blank" rel="noreferrer">https://github.com/ckpack/v-ui</a></li><li>npm: <a href="https://www.npmjs.com/package/@ckpack/v-ui" target="_blank" rel="noreferrer">https://www.npmjs.com/package/@ckpack/v-ui</a></li><li>CDN: <a href="https://cdn.jsdelivr.net/npm/@ckpack/v-ui@latest/" target="_blank" rel="noreferrer">https://cdn.jsdelivr.net/npm/@ckpack/v-ui@latest/</a></li></ul><h2 id="\u811A\u672C\u547D\u4EE4" tabindex="-1">\u811A\u672C\u547D\u4EE4 <a class="header-anchor" href="#\u811A\u672C\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u5B89\u88C5\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"><span style="color:#676E95;"># \u68C0\u67E5\u4EE3\u7801\u89C4\u8303</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run lint</span></span>
<span class="line"><span style="color:#676E95;"># \u751F\u6210\u65E5\u5FD7\u6587\u4EF6\u53D1\u5E03\u65B0\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run release</span></span>
<span class="line"><span style="color:#676E95;"># \u6DFB\u52A0\u65B0\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run gen component-name</span></span>
<span class="line"><span style="color:#676E95;"># \u6253\u5305\u4F60\u7684\u7EC4\u4EF6\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build:es</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build:dist</span></span>
<span class="line"><span style="color:#676E95;"># \u9884\u89C8\u6587\u6863</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run docs:dev</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run docs:serve</span></span>
<span class="line"></span></code></pre></div><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h2><p>\u4E3B\u8981\u76EE\u5F55\u6587\u4EF6<a href="https://github.com/ckpack/v-ui" target="_blank" rel="noreferrer">\u7EBF\u4E0A\u663E\u793A</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">.github</span></span>
<span class="line"><span style="color:#A6ACCD;">.husky</span></span>
<span class="line"><span style="color:#A6ACCD;">dev \u9884\u89C8\u7EC4\u5EFA\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">docs \u6587\u6863\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">  .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">  demo</span></span>
<span class="line"><span style="color:#A6ACCD;">  demo</span></span>
<span class="line"><span style="color:#A6ACCD;">  docs</span></span>
<span class="line"><span style="color:#A6ACCD;">  en</span></span>
<span class="line"><span style="color:#A6ACCD;">  about.md</span></span>
<span class="line"><span style="color:#A6ACCD;">  index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">scripts</span></span>
<span class="line"><span style="color:#A6ACCD;">src \u7EC4\u5EFA\u6E90\u7801\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">  components</span></span>
<span class="line"><span style="color:#A6ACCD;">  hooks</span></span>
<span class="line"><span style="color:#A6ACCD;">  styles</span></span>
<span class="line"><span style="color:#A6ACCD;">  types</span></span>
<span class="line"><span style="color:#A6ACCD;">  utils</span></span>
<span class="line"><span style="color:#A6ACCD;">  components.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  create.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  defaultConfig.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  preset.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">.eslintrc.cjs</span></span>
<span class="line"><span style="color:#A6ACCD;">.npmrc</span></span>
<span class="line"><span style="color:#A6ACCD;">.versionrc.json</span></span>
<span class="line"><span style="color:#A6ACCD;">CHANGELOG.md</span></span>
<span class="line"><span style="color:#A6ACCD;">commitlint.config.cjs</span></span>
<span class="line"><span style="color:#A6ACCD;">global.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">tsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4F9D\u8D56\u5E93" tabindex="-1">\u4F9D\u8D56\u5E93 <a class="header-anchor" href="#\u4F9D\u8D56\u5E93" aria-hidden="true">#</a></h2><p><code>@antfu/eslint-config</code>\u3001 <code>@commitlint/cli</code>\u3001 <code>@commitlint/config-conventional</code>\u3001 <code>@vitejs/plugin-vue</code>\u3001 <code>@vue/tsconfig</code>\u3001 <code>eslint</code>\u3001 <code>fast-glob</code>\u3001 <code>husky</code>\u3001 <code>lint-staged</code>\u3001 <code>sass</code>\u3001 <code>standard-version</code>\u3001 <code>typescript</code>\u3001 <code>unplugin-vue-define-options</code>\u3001 <code>vite</code>\u3001 <code>vite-node</code>\u3001 <code>vite-plugin-dts</code>\u3001 <code>vitepress</code>\u3001 <code>vue</code></p>`,13),c=[p];function o(t,i,r,d,C,A){return a(),n("div",null,c)}const y=s(l,[["render",o]]);export{h as __pageData,y as default};
