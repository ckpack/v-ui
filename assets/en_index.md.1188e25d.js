import{_ as e,c as n,o as a,b as s}from"./app.62e3dfa4.js";const f='{"title":"v-ui","description":"","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Script commands","slug":"script-commands"},{"level":2,"title":"download","slug":"download"},{"level":2,"title":"Global replacement variables","slug":"global-replacement-variables"},{"level":2,"title":"Modify component prefix","slug":"modify-component-prefix"},{"level":2,"title":"Start creating components","slug":"start-creating-components"}],"relativePath":"en/index.md","lastUpdated":1641984389883}',t={},o=s(`<h1 id="v-ui" tabindex="-1">v-ui <a class="header-anchor" href="#v-ui" aria-hidden="true">#</a></h1><p>You can use this project to quickly create a component library based on vue 3.0. This is a super fast and super simple way to generate vue component library!</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><ul><li>Quickly add new components via commands</li><li>All components support on-demand loading by default</li><li>Customizable component prefix to avoid component name and style conflicts</li><li>Support component library document generation</li></ul><h2 id="script-commands" tabindex="-1">Script commands <a class="header-anchor" href="#script-commands" aria-hidden="true">#</a></h2><p>For detailed commands, refer to the <code>scripts</code> part of <code>package.json</code></p><div class="language-bash"><pre><code><span class="token comment"># Installation dependencies</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># Add new component</span>
<span class="token function">npm</span> run gen component-name

<span class="token comment"># Package your component library</span>
<span class="token function">npm</span> run build

<span class="token comment"># Check the code specification</span>
<span class="token function">npm</span> run lint

<span class="token comment"># Generate log file to release new version</span>
<span class="token function">npm</span> run release

<span class="token comment"># Generate documentation related commands</span>
<span class="token function">npm</span> run docs:build
</code></pre></div><h2 id="download" tabindex="-1">download <a class="header-anchor" href="#download" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># git clone</span>
<span class="token function">git</span> clone https://github.com/ckpack/v-ui.git

<span class="token comment"># download zip</span>
https://github.com/ckpack/v-ui/archive/refs/heads/main.zip
</code></pre></div><h2 id="global-replacement-variables" tabindex="-1">Global replacement variables <a class="header-anchor" href="#global-replacement-variables" aria-hidden="true">#</a></h2><ul><li><code>v-ui</code> is <code>you-project-name</code> such as <code>b-ui</code></li><li><code>ckpack</code> is <code>you-github-username</code> such as <code>my-github-username</code></li></ul><h2 id="modify-component-prefix" tabindex="-1">Modify component prefix <a class="header-anchor" href="#modify-component-prefix" aria-hidden="true">#</a></h2><p>The default component prefix is \u200B\u200B<code>V</code>, you can choose to modify the component prefix Modify the file <code>src/defaultConfig.js</code></p><div class="language-js"><pre><code><span class="token comment">// modify the ouput when iife format, such as \`BUI\`</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">NAME</span> <span class="token operator">=</span><span class="token string">&#39;BUI&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// Modify the default component prefix, such as \`B\`</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">COMPONENT_PREFIX</span> <span class="token operator">=</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>The default component class prefix is \u200B\u200B<code>v-</code>, you can choose to modify the component class prefix Modify the file <code>src/styles/__variables.scss</code></p><div class="language-scss"><pre><code><span class="token comment">// Modify the default component class prefix such as \`b-\`</span>
<span class="token property"><span class="token variable">$cls-prefix</span></span><span class="token punctuation">:</span> b- <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="start-creating-components" tabindex="-1">Start creating components <a class="header-anchor" href="#start-creating-components" aria-hidden="true">#</a></h2><p>Use <code>npm run gen component-name</code> to add new components. For example, execute the <code>npm run gen select</code> command, which will generate the <code>select</code> file directory under the <code>src/components/</code> directory, and edit the <code>select</code> under the folder. vue<code>file and</code>index.scss\` file</p><h4 id="preview-the-newly-generated-components" tabindex="-1">Preview the newly generated components <a class="header-anchor" href="#preview-the-newly-generated-components" aria-hidden="true">#</a></h4><p>Introduce new components in the file <code>dev/app.vue</code>, execute <code>npm run dev</code> to preview the new components</p><div class="language-diff"><pre><code><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">template&gt;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;div id=&quot;app&quot;&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">   &lt;ConfigProvider&gt;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &lt;Select&gt;&lt;/Select&gt;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &lt;/ConfigProvider&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/div&gt;
</span></span><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">/template&gt;
</span><span class="token prefix deleted">&lt;</span><span class="token line">script setup&gt;
</span></span>import {
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> ConfigProvider, Select,
</span></span>} from&#39;../src&#39;;
<span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">/script&gt;
</span></span>
</code></pre></div><h4 id="add-new-component-document" tabindex="-1">Add new component document <a class="header-anchor" href="#add-new-component-document" aria-hidden="true">#</a></h4><p>Add the document corresponding to the component name in the <code>docs/guide/compoents</code> folder, execute <code>npm run docs:dev</code> to preview the document</p><div class="language-md"><pre><code><span class="token comment">&lt;!-- docs/guide/compoents/select.md --&gt;</span>
<span class="token title important"><span class="token punctuation">#</span> Select</span>

Test component

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-select</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-select</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,24),c=[o];function p(d,l,i,r,u,m){return a(),n("div",null,c)}var k=e(t,[["render",p]]);export{f as __pageData,k as default};
