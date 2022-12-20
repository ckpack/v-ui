import{_ as s,c as n,o as a,a as e}from"./app.3b1c20cd.js";const h=JSON.parse('{"title":"v-ui","description":"","frontmatter":{},"headers":[{"level":2,"title":"功能特点","slug":"功能特点","link":"#功能特点","children":[]},{"level":2,"title":"相关链接","slug":"相关链接","link":"#相关链接","children":[]},{"level":2,"title":"脚本命令","slug":"脚本命令","link":"#脚本命令","children":[]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"依赖库","slug":"依赖库","link":"#依赖库","children":[]}],"relativePath":"guide/about.md","lastUpdated":1671533790000}'),l={name:"guide/about.md"},p=e(`<h1 id="v-ui" tabindex="-1">v-ui <a class="header-anchor" href="#v-ui" aria-hidden="true">#</a></h1><p><code>@ckpack/v-ui</code>是一个Vue3.x的组件库</p><h2 id="功能特点" tabindex="-1">功能特点 <a class="header-anchor" href="#功能特点" aria-hidden="true">#</a></h2><ul><li>基于<code>Vite</code>、<code>Vue3.x</code>、<code>TypeScript</code> 等现代化工具开发</li><li>所有组件默认即支持按需加载</li><li>通过<code>SCSS</code>、<code>CSS Variable</code> 主题切换如此方便</li><li>提供丰富的文档和组件示例</li><li>可自定义组件前缀、CSS 可以前缀避免潜在的组件名称或者样式冲突</li></ul><h2 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-hidden="true">#</a></h2><ul><li>官网: <a href="https://ckpack.github.io/v-ui/" target="_blank" rel="noreferrer">https://ckpack.github.io/v-ui/</a></li><li>GitHub 仓库: <a href="https://github.com/ckpack/v-ui" target="_blank" rel="noreferrer">https://github.com/ckpack/v-ui</a></li><li>npm: <a href="https://www.npmjs.com/package/@ckpack/v-ui" target="_blank" rel="noreferrer">https://www.npmjs.com/package/@ckpack/v-ui</a></li><li>CDN: <a href="https://cdn.jsdelivr.net/npm/@ckpack/v-ui@latest/" target="_blank" rel="noreferrer">https://cdn.jsdelivr.net/npm/@ckpack/v-ui@latest/</a></li></ul><h2 id="脚本命令" tabindex="-1">脚本命令 <a class="header-anchor" href="#脚本命令" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 安装依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"><span style="color:#676E95;"># 检查代码规范</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run lint</span></span>
<span class="line"><span style="color:#676E95;"># 生成日志文件发布新版本</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run release</span></span>
<span class="line"><span style="color:#676E95;"># 添加新组件</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run gen component-name</span></span>
<span class="line"><span style="color:#676E95;"># 打包你的组件库</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build:es</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run build:dist</span></span>
<span class="line"><span style="color:#676E95;"># 预览文档</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run docs:dev</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run docs:serve</span></span>
<span class="line"></span></code></pre></div><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-hidden="true">#</a></h2><p>主要目录文件<a href="https://github.com/ckpack/v-ui" target="_blank" rel="noreferrer">线上显示</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">.github</span></span>
<span class="line"><span style="color:#A6ACCD;">.husky</span></span>
<span class="line"><span style="color:#A6ACCD;">dev 预览组建目录</span></span>
<span class="line"><span style="color:#A6ACCD;">docs 文档目录</span></span>
<span class="line"><span style="color:#A6ACCD;">  .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">  demo</span></span>
<span class="line"><span style="color:#A6ACCD;">  demo</span></span>
<span class="line"><span style="color:#A6ACCD;">  docs</span></span>
<span class="line"><span style="color:#A6ACCD;">  en</span></span>
<span class="line"><span style="color:#A6ACCD;">  about.md</span></span>
<span class="line"><span style="color:#A6ACCD;">  index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">scripts</span></span>
<span class="line"><span style="color:#A6ACCD;">src 组建源码目录</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="依赖库" tabindex="-1">依赖库 <a class="header-anchor" href="#依赖库" aria-hidden="true">#</a></h2><p><code>@antfu/eslint-config</code>、 <code>@commitlint/cli</code>、 <code>@commitlint/config-conventional</code>、 <code>@vitejs/plugin-vue</code>、 <code>@vue/tsconfig</code>、 <code>eslint</code>、 <code>fast-glob</code>、 <code>husky</code>、 <code>lint-staged</code>、 <code>sass</code>、 <code>standard-version</code>、 <code>typescript</code>、 <code>unplugin-vue-define-options</code>、 <code>vite</code>、 <code>vite-node</code>、 <code>vite-plugin-dts</code>、 <code>vitepress</code>、 <code>vue</code></p>`,13),c=[p];function o(t,i,r,d,C,A){return a(),n("div",null,c)}const y=s(l,[["render",o]]);export{h as __pageData,y as default};
