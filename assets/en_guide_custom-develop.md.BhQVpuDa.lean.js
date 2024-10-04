import{_ as i,b as e,a6 as a,o as n}from"./chunks/framework.DVSAeyps.js";const r=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/custom-develop.md","filePath":"en/guide/custom-develop.md","lastUpdated":1728015713000}'),t={name:"en/guide/custom-develop.md"};function o(l,s,p,h,d,c){return n(),e("div",null,s[0]||(s[0]=[a(`<p>You can use this project to quickly create your own component library</p><h2 id="download" tabindex="-1">download <a class="header-anchor" href="#download" aria-label="Permalink to &quot;download&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># git clone</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/ckpack/v-ui.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># download zip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://github.com/ckpack/v-ui/archive/refs/heads/main.zip</span></span></code></pre></div><h2 id="global-substitution-variable" tabindex="-1">Global substitution variable <a class="header-anchor" href="#global-substitution-variable" aria-label="Permalink to &quot;Global substitution variable&quot;">​</a></h2><ul><li>Replace <code>v-ui</code> with your component library name such as <code>t-ui</code></li><li>Replace <code>ckpack</code> with your Github name eg <code>my-github-username</code></li></ul><h2 id="modify-component-prefix" tabindex="-1">Modify component prefix <a class="header-anchor" href="#modify-component-prefix" aria-label="Permalink to &quot;Modify component prefix&quot;">​</a></h2><p>Modify the default configuration (<code>src/defaultConfig.js</code>), such as the default prefix of the component is <code>v</code> changed to <code>t</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ouput when modifying the iife format, such as \`TUI\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;TUI&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Modify the default component class prefix, such as \`t\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> prefixCls</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;t&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Modify the default component prefix, such as \`t\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> prefixComponent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;t&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="remove-component" tabindex="-1">Remove component <a class="header-anchor" href="#remove-component" aria-label="Permalink to &quot;Remove component&quot;">​</a></h2><p>Remove unneeded components</p><h2 id="add-component" tabindex="-1">Add component <a class="header-anchor" href="#add-component" aria-label="Permalink to &quot;Add component&quot;">​</a></h2><ul><li>Use <code>npm run gen component-name</code> to add new components, such as executing the <code>npm run gen select</code> command, which will generate a <code>select</code> file directory in the <code>src/components/</code> directory,</li><li>Edit files under <code>src/components/select/select.vue</code> folder</li><li>Edit <code>src/themes/components/select.ts</code> file</li></ul><h2 id="preview-component" tabindex="-1">Preview component <a class="header-anchor" href="#preview-component" aria-label="Permalink to &quot;Preview component&quot;">​</a></h2><p>Add a use case of a new component in the file <code>docs/_demos/</code>, execute <code>npm run dev</code> to preview the new component</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- docs/_demos/button/theme.vue --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">t-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Primary</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">t-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="add-component-documentation" tabindex="-1">Add component documentation <a class="header-anchor" href="#add-component-documentation" aria-label="Permalink to &quot;Add component documentation&quot;">​</a></h2><p>Add a document corresponding to the component name under the <code>docs/guide/components</code> folder, execute <code>npm run docs:dev</code> to preview the document</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- docs/guide/components/button.md --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># Button</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;&lt;&lt; @/_demos/button/theme.vue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--demo define button theme color by </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`theme\`</span></span></code></pre></div>`,18)]))}const u=i(t,[["render",o]]);export{r as __pageData,u as default};
