import{_ as s,b as i,a6 as a,o as n}from"./chunks/framework.D-jkwFX7.js";const k=JSON.parse('{"title":"v-ui","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/about.md","filePath":"en/guide/about.md","lastUpdated":1732758942000}'),t={name:"en/guide/about.md"};function l(p,e,d,o,c,r){return n(),i("div",null,e[0]||(e[0]=[a(`<h1 id="v-ui" tabindex="-1">v-ui <a class="header-anchor" href="#v-ui" aria-label="Permalink to &quot;v-ui&quot;">​</a></h1><p><code>@ckpack/v-ui</code> is a Vue3.x component library</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>Developed based on modern tools such as <code>Vite</code>, <code>Vue3.x</code>, <code>TypeScript</code></li><li>Separation of <code>UI, state logic</code> and <code>CSS</code> for components</li><li>Use <code>Hooks</code>, <code>CSS-IN-JS</code> with <code>CSS Variables</code> to switch theme styles</li><li>You can customize component prefixes, <code>CSS</code> variable prefixes, and <code>CSS</code> class prefixes to avoid component name or style conflicts</li><li>All components support on-demand loading by default</li><li>Provides extensive documentation and component examples</li></ul><h2 id="related-links" tabindex="-1">Related Links <a class="header-anchor" href="#related-links" aria-label="Permalink to &quot;Related Links&quot;">​</a></h2><ul><li>Official website: <a href="https://ckpack.github.io/v-ui/" target="_blank" rel="noreferrer">https://ckpack.github.io/v-ui/</a></li><li>GitHub repository: <a href="https://github.com/ckpack/v-ui" target="_blank" rel="noreferrer">https://github.com/ckpack/v-ui</a></li><li>npm: <a href="https://www.npmjs.com/package/@ckpack/v-ui" target="_blank" rel="noreferrer">https://www.npmjs.com/package/@ckpack/v-ui</a></li><li>CDN: <a href="https://cdn.jsdelivr.net/npm/@ckpack/v-ui@latest/" target="_blank" rel="noreferrer">https://cdn.jsdelivr.net/npm/@ckpack/v-ui@latest/</a></li></ul><h2 id="script-commands" tabindex="-1">Script commands <a class="header-anchor" href="#script-commands" aria-label="Permalink to &quot;Script commands&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install dependencies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Check the code specification</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lint</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Generate a log file to publish a new version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> release</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># add new components</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> component-name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Package your component library</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:es</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:dist</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># preview document</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:serve</span></span></code></pre></div><h2 id="dependent-libraries" tabindex="-1">Dependent libraries <a class="header-anchor" href="#dependent-libraries" aria-label="Permalink to &quot;Dependent libraries&quot;">​</a></h2><h3 id="dependencies" tabindex="-1">dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;dependencies&quot;">​</a></h3><p><code>@ant-design/colors</code>, <code>@emotion/css</code></p><h3 id="devdependencies" tabindex="-1">devDependencies <a class="header-anchor" href="#devdependencies" aria-label="Permalink to &quot;devDependencies&quot;">​</a></h3><p><code>@antfu/eslint-config</code>, <code>@commitlint/cli</code>, <code>@commitlint/config-conventional</code>, <code>@vitejs/plugin-vue</code>, <code>@vue/tsconfig</code>, <code>eslint</code>, <code>fast-glob</code> , <code>husky</code>, <code>lint-staged</code>, <code>standard-version</code>, <code>tsx</code>, <code>typescript</code>, <code>vite</code>, <code>vite-plugin-dts</code>, <code>vitepress</code> , <code>vue</code></p>`,13)]))}const u=s(t,[["render",l]]);export{k as __pageData,u as default};