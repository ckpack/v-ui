import{_ as n,c as s,o as a,b as t}from"./app.62e3dfa4.js";const h='{"title":"\u5B8C\u6574\u5F15\u5165","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B8C\u6574\u5F15\u5165","slug":"\u5B8C\u6574\u5F15\u5165"},{"level":2,"title":"\u6309\u9700\u52A0\u8F7D","slug":"\u6309\u9700\u52A0\u8F7D"},{"level":2,"title":"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165","slug":"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165"},{"level":2,"title":"\u6837\u5F0F","slug":"\u6837\u5F0F"}],"relativePath":"guide/base/install.md","lastUpdated":1641984389883}',p={},o=t(`<h2 id="\u5B8C\u6574\u5F15\u5165" tabindex="-1">\u5B8C\u6574\u5F15\u5165 <a class="header-anchor" href="#\u5B8C\u6574\u5F15\u5165" aria-hidden="true">#</a></h2><p>\u5B8C\u6574\u5F15\u5165\u7EC4\u4EF6\u5E93\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;@/App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token constant">VUI</span> <span class="token keyword">from</span> <span class="token string">&#39;v-ui&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;v-ui/dist/index.scss&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">VUI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6309\u9700\u52A0\u8F7D" tabindex="-1">\u6309\u9700\u52A0\u8F7D <a class="header-anchor" href="#\u6309\u9700\u52A0\u8F7D" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u652F\u6301<code>tree shaking</code>\uFF0C\u65E0\u9700\u4EFB\u4F55\u63D2\u4EF6\uFF0C\u76F4\u63A5\u5F15\u5165 <code>import { Button } from &#39;v-ui&#39;</code> \u5C31\u4F1A\u6709\u6309\u9700\u52A0\u8F7D\u7684\u6548\u679C\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token keyword">as</span> VButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;v-ui&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      VButton<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlerClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165" tabindex="-1">\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165" aria-hidden="true">#</a></h2><p>\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u6D4F\u89C8\u5668\u7684<code>script</code>, <code>style</code>\u6807\u7B7E\u5BFC\u5165\u3002</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>VUI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/v-ui/dist/index.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue/dist/vue.global.prod.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/v-ui/dist/index.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlerClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-label</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handlerClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">VUI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u6837\u5F0F" tabindex="-1">\u6837\u5F0F <a class="header-anchor" href="#\u6837\u5F0F" aria-hidden="true">#</a></h2><h4 id="\u5168\u5C40\u5F15\u5165\u6837\u5F0F" tabindex="-1">\u5168\u5C40\u5F15\u5165\u6837\u5F0F <a class="header-anchor" href="#\u5168\u5C40\u5F15\u5165\u6837\u5F0F" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;v-ui/dist/index.css&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="\u6309\u9700\u5F15\u5165\u6837\u5F0F" tabindex="-1">\u6309\u9700\u5F15\u5165\u6837\u5F0F <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165\u6837\u5F0F" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;v-ui/es/components/button/index.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;v-ui/es/components/label/index.css&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,14),c=[o];function e(l,u,k,i,r,d){return a(),s("div",null,c)}var v=n(p,[["render",e]]);export{h as __pageData,v as default};
