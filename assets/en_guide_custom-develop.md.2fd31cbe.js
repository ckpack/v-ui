import{_ as s,o as e,c as n,S as o}from"./chunks/framework.1d956362.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/custom-develop.md","filePath":"en/guide/custom-develop.md","lastUpdated":1691986631000}'),a={name:"en/guide/custom-develop.md"},t=o(`<p>You can use this project to quickly create your own component library</p><h2 id="download" tabindex="-1">download <a class="header-anchor" href="#download" aria-label="Permalink to &quot;download&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># git clone</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/ckpack/v-ui.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># download zip</span></span>
<span class="line"><span style="color:#FFCB6B;">https://github.com/ckpack/v-ui/archive/refs/heads/main.zip</span></span></code></pre></div><h2 id="global-substitution-variable" tabindex="-1">Global substitution variable <a class="header-anchor" href="#global-substitution-variable" aria-label="Permalink to &quot;Global substitution variable&quot;">​</a></h2><ul><li>Replace <code>v-ui</code> with your component library name such as <code>t-ui</code></li><li>Replace <code>ckpack</code> with your Github name eg <code>my-github-username</code></li></ul><h2 id="modify-component-prefix" tabindex="-1">Modify component prefix <a class="header-anchor" href="#modify-component-prefix" aria-label="Permalink to &quot;Modify component prefix&quot;">​</a></h2><p>Modify the default configuration (<code>src/defaultConfig.js</code>), such as the default prefix of the component is <code>v</code> changed to <code>t</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ouput when modifying the iife format, such as \`TUI\`</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> NAME </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TUI</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Modify the default component class prefix, such as \`t\`</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> prefixCls </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">t</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Modify the default component prefix, such as \`t\`</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> prefixComponent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">t</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="remove-component" tabindex="-1">Remove component <a class="header-anchor" href="#remove-component" aria-label="Permalink to &quot;Remove component&quot;">​</a></h2><p>Remove unneeded components</p><h2 id="add-component" tabindex="-1">Add component <a class="header-anchor" href="#add-component" aria-label="Permalink to &quot;Add component&quot;">​</a></h2><ul><li>Use <code>npm run gen component-name</code> to add new components, such as executing the <code>npm run gen select</code> command, which will generate a <code>select</code> file directory in the <code>src/components/</code> directory,</li><li>Edit files under <code>src/components/select/select.vue</code> folder</li><li>Edit <code>src/themes/components/select.ts</code> file</li></ul><h2 id="preview-component" tabindex="-1">Preview component <a class="header-anchor" href="#preview-component" aria-label="Permalink to &quot;Preview component&quot;">​</a></h2><p>Add a use case of a new component in the file <code>docs/_demos/</code>, execute <code>npm run dev</code> to preview the new component</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- docs/_demos/button/theme.vue --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">t-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">theme</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Primary</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">t-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="add-component-documentation" tabindex="-1">Add component documentation <a class="header-anchor" href="#add-component-documentation" aria-label="Permalink to &quot;Add component documentation&quot;">​</a></h2><p>Add a document corresponding to the component name under the <code>docs/guide/components</code> folder, execute <code>npm run docs:dev</code> to preview the document</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- docs/guide/components/button.md --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">Button</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;&lt;&lt; @/_demos/button/theme.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">--demo define button theme color by </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">theme</span><span style="color:#89DDFF;">\`</span></span></code></pre></div>`,18),l=[t];function p(c,i,r,d,m,u){return e(),n("div",null,l)}const D=s(a,[["render",p]]);export{h as __pageData,D as default};