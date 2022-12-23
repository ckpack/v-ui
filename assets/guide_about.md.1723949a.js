import{_ as e,c as s,o as n,a}from"./app.ff43fa72.js";const y=JSON.parse('{"title":"v-ui","description":"","frontmatter":{},"headers":[{"level":2,"title":"功能特点","slug":"功能特点","link":"#功能特点","children":[]},{"level":2,"title":"相关链接","slug":"相关链接","link":"#相关链接","children":[]},{"level":2,"title":"脚本命令","slug":"脚本命令","link":"#脚本命令","children":[]},{"level":2,"title":"依赖库","slug":"依赖库","link":"#依赖库","children":[{"level":3,"title":"dependencies","slug":"dependencies","link":"#dependencies","children":[]},{"level":3,"title":"devDependencies","slug":"devdependencies","link":"#devdependencies","children":[]}]}],"relativePath":"guide/about.md","lastUpdated":1671801689000}'),l={name:"guide/about.md"},o=a(`<h1 id="v-ui" tabindex="-1">v-ui <a class="header-anchor" href="#v-ui" aria-hidden="true">#</a></h1><p><code>@ckpack/v-ui</code> 是一个Vue3.x的组件库</p><h2 id="功能特点" tabindex="-1">功能特点 <a class="header-anchor" href="#功能特点" aria-hidden="true">#</a></h2><ul><li>基于 <code>Vite</code> 、 <code>Vue3.x</code> 、 <code>TypeScript</code> 等现代化工具开发</li><li>组件的 <code>UI、状态逻辑</code> 和 <code>CSS</code> 实现分离</li><li>通过 <code>Hooks</code>, <code>CSS-IN-JS</code> 搭配 <code>CSS变量</code> 切换主题样式</li><li>可自定义组件前缀、<code>CSS</code> 变量前缀、<code>CSS</code> 类前缀，避免组件名称或样式冲突</li><li>所有组件默认即支持按需加载</li><li>提供丰富的文档和组件示例</li></ul><h2 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-hidden="true">#</a></h2><ul><li>官网: <a href="https://ckpack.github.io/v-ui/" target="_blank" rel="noreferrer">https://ckpack.github.io/v-ui/</a></li><li>GitHub 仓库: <a href="https://github.com/ckpack/v-ui" target="_blank" rel="noreferrer">https://github.com/ckpack/v-ui</a></li><li>npm: <a href="https://www.npmjs.com/package/@ckpack/v-ui" target="_blank" rel="noreferrer">https://www.npmjs.com/package/@ckpack/v-ui</a></li><li>CDN: <a href="https://cdn.jsdelivr.net/npm/@ckpack/v-ui@latest/" target="_blank" rel="noreferrer">https://cdn.jsdelivr.net/npm/@ckpack/v-ui@latest/</a></li></ul><h2 id="脚本命令" tabindex="-1">脚本命令 <a class="header-anchor" href="#脚本命令" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检查代码规范</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lint</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 生成日志文件发布新版本</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">release</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加新组件</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">component-name</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 打包你的组件库</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build:es</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build:dist</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 预览文档</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:build</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:serve</span></span>
<span class="line"></span></code></pre></div><h2 id="依赖库" tabindex="-1">依赖库 <a class="header-anchor" href="#依赖库" aria-hidden="true">#</a></h2><h3 id="dependencies" tabindex="-1">dependencies <a class="header-anchor" href="#dependencies" aria-hidden="true">#</a></h3><p><code>@ant-design/colors</code>、 <code>@emotion/css</code></p><h3 id="devdependencies" tabindex="-1">devDependencies <a class="header-anchor" href="#devdependencies" aria-hidden="true">#</a></h3><p><code>@antfu/eslint-config</code>、 <code>@commitlint/cli</code>、 <code>@commitlint/config-conventional</code>、 <code>@vitejs/plugin-vue</code>、 <code>@vue/tsconfig</code>、 <code>eslint</code>、 <code>fast-glob</code>、 <code>husky</code>、 <code>lint-staged</code>、 <code>standard-version</code>、 <code>tsx</code>、 <code>typescript</code>、 <code>unplugin-vue-define-options</code>、 <code>vite</code>、 <code>vite-plugin-dts</code>、 <code>vitepress</code>、 <code>vue</code></p>`,13),c=[o];function p(t,i,d,r,C,h){return n(),s("div",null,c)}const D=e(l,[["render",p]]);export{y as __pageData,D as default};
