import{_ as s,o as a,c as n,a as e}from"./app.6a7a83ba.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0B\u8F7D","slug":"\u4E0B\u8F7D","link":"#\u4E0B\u8F7D","children":[]},{"level":2,"title":"\u5168\u5C40\u66FF\u6362\u53D8\u91CF","slug":"\u5168\u5C40\u66FF\u6362\u53D8\u91CF","link":"#\u5168\u5C40\u66FF\u6362\u53D8\u91CF","children":[]},{"level":2,"title":"\u4FEE\u6539\u7EC4\u4EF6\u524D\u7F00","slug":"\u4FEE\u6539\u7EC4\u4EF6\u524D\u7F00","link":"#\u4FEE\u6539\u7EC4\u4EF6\u524D\u7F00","children":[]},{"level":2,"title":"\u5220\u9664\u7EC4\u4EF6","slug":"\u5220\u9664\u7EC4\u4EF6","link":"#\u5220\u9664\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u6DFB\u52A0\u7EC4\u4EF6","slug":"\u6DFB\u52A0\u7EC4\u4EF6","link":"#\u6DFB\u52A0\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u9884\u89C8\u7EC4\u4EF6","slug":"\u9884\u89C8\u7EC4\u4EF6","link":"#\u9884\u89C8\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u6DFB\u52A0\u7EC4\u4EF6\u6587\u6863","slug":"\u6DFB\u52A0\u7EC4\u4EF6\u6587\u6863","link":"#\u6DFB\u52A0\u7EC4\u4EF6\u6587\u6863","children":[]}],"relativePath":"guide/custom-develop.md","lastUpdated":1664626782000}'),l={name:"guide/custom-develop.md"},o=e(`<p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u8BE5\u9879\u76EE\u5FEB\u901F\u521B\u5EFA\u81EA\u5DF1\u7684\u7EC4\u4EF6\u5E93</p><h2 id="\u4E0B\u8F7D" tabindex="-1">\u4E0B\u8F7D <a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># git clone</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone https://github.com/ckpack/v-ui.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># download zip</span></span>
<span class="line"><span style="color:#A6ACCD;">https://github.com/ckpack/v-ui/archive/refs/heads/main.zip</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5168\u5C40\u66FF\u6362\u53D8\u91CF" tabindex="-1">\u5168\u5C40\u66FF\u6362\u53D8\u91CF <a class="header-anchor" href="#\u5168\u5C40\u66FF\u6362\u53D8\u91CF" aria-hidden="true">#</a></h2><ul><li>\u66FF\u6362<code>v-ui</code>\u4E3A\u4F60\u7684\u7EC4\u4EF6\u5E93\u540D\u79F0 \u5982 <code>t-ui</code></li><li>\u66FF\u6362<code>ckpack</code>\u4E3A\u4F60\u7684Github\u540D\u79F0 \u5982 <code>my-github-username</code></li></ul><h2 id="\u4FEE\u6539\u7EC4\u4EF6\u524D\u7F00" tabindex="-1">\u4FEE\u6539\u7EC4\u4EF6\u524D\u7F00 <a class="header-anchor" href="#\u4FEE\u6539\u7EC4\u4EF6\u524D\u7F00" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u7EC4\u4EF6\u524D\u7F00\u662F<code>V</code>,\u4F60\u53EF\u4EE5\u9009\u62E9\u4FEE\u6539\u7EC4\u4EF6\u524D\u7F00<br> \u4FEE\u6539\u6587\u4EF6<code>src/defaultConfig.js</code></p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u4FEE\u6539iife\u683C\u5F0F\u65F6\u7684ouput, \u5982\`TUI\`</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> NAME </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TUI</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u4FEE\u6539\u9ED8\u8BA4\u7EC4\u4EF6\u524D\u7F00\uFF0C \u5982\`B\`</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> COMPONENT_PREFIX </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">T</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6B64\u65F6\u9ED8\u8BA4\u7EC4\u4EF6CSS\u7C7B\u524D\u7F00\u4ECD\u662F<code>v</code>,\u4F60\u53EF\u4EE5\u9009\u62E9\u4FEE\u6539SCSS\u914D\u7F6E\u6587\u4EF6<code>src/styles/config.scss</code></p><div class="language-scss"><button class="copy"></button><span class="lang">scss</span><pre><code><span class="line"><span style="color:#676E95;">// \u4FEE\u6539\u9ED8\u8BA4\u7EC4\u4EF6\u7C7B\u524D\u7F00\u5982\`t\`</span></span>
<span class="line"><span style="color:#A6ACCD;">$namespace</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> t </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5220\u9664\u7EC4\u4EF6" tabindex="-1">\u5220\u9664\u7EC4\u4EF6 <a class="header-anchor" href="#\u5220\u9664\u7EC4\u4EF6" aria-hidden="true">#</a></h2><h2 id="\u6DFB\u52A0\u7EC4\u4EF6" tabindex="-1">\u6DFB\u52A0\u7EC4\u4EF6 <a class="header-anchor" href="#\u6DFB\u52A0\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <code>npm run gen component-name</code>\u6DFB\u52A0\u65B0\u7EC4\u4EF6\uFF0C\u5982\u6267\u884C<code>npm run gen select</code>\u547D\u4EE4\uFF0C\u8BE5\u547D\u4EE4\u4F1A\u5728<code>src/components/</code>\u76EE\u5F55\u4E0B\u751F\u6210<code>select</code>\u6587\u4EF6\u76EE\u5F55\uFF0C\u7F16\u8F91\u6587\u4EF6\u5939\u4E0B\u7684<code>select.vue</code>\u6587\u4EF6\u4EE5\u53CA<code>index.scss</code>\u6587\u4EF6</p><h2 id="\u9884\u89C8\u7EC4\u4EF6" tabindex="-1">\u9884\u89C8\u7EC4\u4EF6 <a class="header-anchor" href="#\u9884\u89C8\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u5728\u6587\u4EF6<code>dev/components</code>\u4E2D\u6DFB\u52A0\u65B0\u7EC4\u4EF6\u7684\u7528\u4F8B, \u6267\u884C<code>npm run dev</code>\u5373\u53EF\u9884\u89C8\u65B0\u7EC4\u4EF6</p><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">theme</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Primary</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6DFB\u52A0\u7EC4\u4EF6\u6587\u6863" tabindex="-1">\u6DFB\u52A0\u7EC4\u4EF6\u6587\u6863 <a class="header-anchor" href="#\u6DFB\u52A0\u7EC4\u4EF6\u6587\u6863" aria-hidden="true">#</a></h2><p>\u5728<code>docs/guide/compoents</code>\u6587\u4EF6\u5939\u4E0B\u6DFB\u52A0\u5BF9\u5E94\u7EC4\u4EF6\u540D\u7684\u6587\u6863\uFF0C\u6267\u884C<code>npm run docs:dev</code>\u9884\u89C8\u6587\u6863</p><div class="language-md"><button class="copy"></button><span class="lang">md</span><pre><code><span class="line"><span style="color:#676E95;">&lt;!-- docs/guide/compoents/button.md --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">Button</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;&lt;&lt; @/demo/button/theme.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">--demo theme \u6309\u94AE</span></span>
<span class="line"></span></code></pre></div>`,19),p=[o];function c(t,r,d,i,u,D){return a(),n("div",null,p)}const F=s(l,[["render",c]]);export{y as __pageData,F as default};