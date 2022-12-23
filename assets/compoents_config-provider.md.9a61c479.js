import{f as y,h as A,b as d,w as l,r as n,o as p,d as e,e as s,_ as h,c as v,a as C,g as o}from"./app.ff43fa72.js";const E=y({__name:"base",setup(D){const t=A({color:{primary:"#14C9C9"}}),r=()=>{t.color.primary=t.color.primary==="#14C9C9"?"#8b5cf6":"#14C9C9"};return(a,j)=>{const c=n("v-button"),F=n("v-config-provider"),i=n("v-space");return p(),d(i,null,{default:l(()=>[e(c,{theme:"primary"},{default:l(()=>[s(" Button ")]),_:1}),e(F,{token:t},{default:l(()=>[e(i,null,{default:l(()=>[e(c,{theme:"primary",onClick:r},{default:l(()=>[s(" Button ")]),_:1}),e(F,{token:{color:{primary:"pink"}}},{default:l(()=>[e(c,{theme:"primary"},{default:l(()=>[s(" Button ")]),_:1})]),_:1})]),_:1})]),_:1},8,["token"])]),_:1})}}}),u={};function f(D,t){const r=n("v-button"),a=n("v-config-provider");return p(),d(a,{"prefix-cls":"p"},{default:l(()=>[e(r,{theme:"primary"},{default:l(()=>[s(" Button ")]),_:1})]),_:1})}const m=h(u,[["render",f]]),_=C('<h1 id="config-provider" tabindex="-1">config-provider <a class="header-anchor" href="#config-provider" aria-hidden="true">#</a></h1><p><code>config-provider</code> 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到，<code>config-provider</code> 使用了 <a href="https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity" target="_blank" rel="noreferrer">Vue 的 provide/inject 特性</a></p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-hidden="true">#</a></h2>',3),g=o("div",{class:"language-vue"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"vue"),o("pre",{class:"shiki material-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"script"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"setup"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"lang"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"ts"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"{"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#A6ACCD"}},"reactive"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"}"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#C3E88D"}},"vue"),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#89DDFF"}},";")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#C792EA"}},"const"),o("span",{style:{color:"#A6ACCD"}}," token "),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#82AAFF"}},"reactive"),o("span",{style:{color:"#A6ACCD"}},"("),o("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#F07178"}},"color"),o("span",{style:{color:"#89DDFF"}},":"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#F07178"}},"primary"),o("span",{style:{color:"#89DDFF"}},":"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#C3E88D"}},"#14C9C9"),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#89DDFF"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"}"),o("span",{style:{color:"#A6ACCD"}},")"),o("span",{style:{color:"#89DDFF"}},";")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#C792EA"}},"const"),o("span",{style:{color:"#A6ACCD"}}," changeColor "),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"()"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"=>"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#F07178"}},"  "),o("span",{style:{color:"#A6ACCD"}},"token"),o("span",{style:{color:"#89DDFF"}},"."),o("span",{style:{color:"#A6ACCD"}},"color"),o("span",{style:{color:"#89DDFF"}},"."),o("span",{style:{color:"#A6ACCD"}},"primary"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#A6ACCD"}},"token"),o("span",{style:{color:"#89DDFF"}},"."),o("span",{style:{color:"#A6ACCD"}},"color"),o("span",{style:{color:"#89DDFF"}},"."),o("span",{style:{color:"#A6ACCD"}},"primary"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"==="),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#C3E88D"}},"#14C9C9"),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"?"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#C3E88D"}},"#8b5cf6"),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},":"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#C3E88D"}},"#14C9C9"),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#89DDFF"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"script"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"v-space"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"v-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"theme"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"primary"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      Button")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"v-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"v-config-provider"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},":token"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"token"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"v-space"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"v-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"theme"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"primary"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"@click"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"changeColor"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"          Button")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"v-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"v-config-provider")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"          "),o("span",{style:{color:"#C792EA"}},":token"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#C3E88D"}},"            color: {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#C3E88D"}},"              primary: 'pink',")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#C3E88D"}},"            },")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#C3E88D"}},"          }"),o("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"        >")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"          "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"v-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"theme"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"primary"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"            Button")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"          "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"v-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"v-config-provider"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"v-space"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"v-config-provider"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"v-space"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),B=o("p",null,null,-1),k=o("h2",{id:"组件大小",tabindex:"-1"},[s("组件大小 "),o("a",{class:"header-anchor",href:"#组件大小","aria-hidden":"true"},"#")],-1),b=o("p",null,"设置组件默认默认大小",-1),x=o("h2",{id:"组件命名空间",tabindex:"-1"},[s("组件命名空间 "),o("a",{class:"header-anchor",href:"#组件命名空间","aria-hidden":"true"},"#")],-1),S=o("div",{class:"language-vue"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"vue"),o("pre",{class:"shiki material-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"v-config-provider")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"    "),o("span",{style:{color:"#C792EA"}},"prefix-cls"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"p"),o("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"  >")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"v-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"theme"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"primary"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      Button")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"v-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"v-config-provider"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),N=C('<p></p><h2 id="组件token" tabindex="-1">组件token <a class="header-anchor" href="#组件token" aria-hidden="true">#</a></h2><p>设置组件默认<code>token</code>，通过修改 <code>token</code>，我们可以呈现出各种各样的样式（内部使用了<code>CSS</code>变量）。</p><h2 id="组件主题" tabindex="-1">组件主题 <a class="header-anchor" href="#组件主题" aria-hidden="true">#</a></h2><p>组件不负责生成样式，而是通过注入的主题，引入了各种样式。你可以按照自己的需要去修改默认的主题。</p><h2 id="设置语言环境" tabindex="-1">设置语言环境 <a class="header-anchor" href="#设置语言环境" aria-hidden="true">#</a></h2><p>设置组件默认语言环境</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="config-provider-属性" tabindex="-1">config-provider 属性 <a class="header-anchor" href="#config-provider-属性" aria-hidden="true">#</a></h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>默认大小</td><td><code>string | enum</code></td><td>medium</td></tr><tr><td>prefix-cls</td><td>组件命名空间</td><td><code>string</code></td><td>v</td></tr><tr><td>token</td><td>组件token</td><td><code>Token</code></td><td>默认token</td></tr><tr><td>themes</td><td>组件主题</td><td><code>Themes</code></td><td>-</td></tr><tr><td>locale</td><td>语言环境</td><td><code>Locale</code></td><td>-</td></tr></tbody></table><h3 id="config-provider-插槽" tabindex="-1">config-provider 插槽 <a class="header-anchor" href="#config-provider-插槽" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">插槽名</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">默认插槽</td></tr></tbody></table>',12),T=JSON.parse('{"title":"config-provider","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"组件大小","slug":"组件大小","link":"#组件大小","children":[]},{"level":2,"title":"组件命名空间","slug":"组件命名空间","link":"#组件命名空间","children":[]},{"level":2,"title":"组件token","slug":"组件token","link":"#组件token","children":[]},{"level":2,"title":"组件主题","slug":"组件主题","link":"#组件主题","children":[]},{"level":2,"title":"设置语言环境","slug":"设置语言环境","link":"#设置语言环境","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"config-provider 属性","slug":"config-provider-属性","link":"#config-provider-属性","children":[]},{"level":3,"title":"config-provider 插槽","slug":"config-provider-插槽","link":"#config-provider-插槽","children":[]}]}],"relativePath":"compoents/config-provider.md","lastUpdated":1671801689000}'),V={name:"compoents/config-provider.md"},w=y({...V,setup(D){return(t,r)=>{const a=n("Demo__");return p(),v("div",null,[_,e(a,{description:"%E9%80%9A%E8%BF%87%E8%BF%99%E4%B8%AA%E7%BB%84%E4%BB%B6%E6%9D%A5%E7%BB%99%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE",code:"%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20reactive%20%7D%20from%20'vue'%3B%0A%0Aconst%20token%20%3D%20reactive(%7B%0A%20%20color%3A%20%7B%0A%20%20%20%20primary%3A%20'%2314C9C9'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aconst%20changeColor%20%3D%20()%20%3D%3E%20%7B%0A%20%20token.color.primary%20%3D%20token.color.primary%20%3D%3D%3D%20'%2314C9C9'%20%3F%20'%238b5cf6'%20%3A%20'%2314C9C9'%3B%0A%7D%3B%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cv-space%3E%0A%20%20%20%20%3Cv-button%20theme%3D%22primary%22%3E%0A%20%20%20%20%20%20Button%0A%20%20%20%20%3C%2Fv-button%3E%0A%20%20%20%20%3Cv-config-provider%20%3Atoken%3D%22token%22%3E%0A%20%20%20%20%20%20%3Cv-space%3E%0A%20%20%20%20%20%20%20%20%3Cv-button%20theme%3D%22primary%22%20%40click%3D%22changeColor%22%3E%0A%20%20%20%20%20%20%20%20%20%20Button%0A%20%20%20%20%20%20%20%20%3C%2Fv-button%3E%0A%20%20%20%20%20%20%20%20%3Cv-config-provider%0A%20%20%20%20%20%20%20%20%20%20%3Atoken%3D%22%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20primary%3A%20'pink'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%22%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cv-button%20theme%3D%22primary%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Button%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fv-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Fv-config-provider%3E%0A%20%20%20%20%20%20%3C%2Fv-space%3E%0A%20%20%20%20%3C%2Fv-config-provider%3E%0A%20%20%3C%2Fv-space%3E%0A%3C%2Ftemplate%3E%0A",compoent:E},{code:l(()=>[g]),_:1}),B,k,b,x,e(a,{description:"%E9%80%9A%E8%BF%87%E4%BF%AE%E6%94%B9%60prefixCls%60%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%60class%60%E5%90%8D%E3%80%81%60CSS%60%E5%8F%98%E9%87%8F%E5%90%8D%E3%80%82(%E4%BD%A0%E5%8F%AF%E4%BB%A5%E6%89%93%E5%BC%80%E8%B0%83%E8%AF%95%E7%AA%97%E5%8F%A3%E6%9F%A5%E7%9C%8B%E7%BB%93%E6%9E%9C)%E3%80%82",code:"%3Ctemplate%3E%0A%20%20%3Cv-config-provider%0A%20%20%20%20prefix-cls%3D%22p%22%0A%20%20%3E%0A%20%20%20%20%3Cv-button%20theme%3D%22primary%22%3E%0A%20%20%20%20%20%20Button%0A%20%20%20%20%3C%2Fv-button%3E%0A%20%20%3C%2Fv-config-provider%3E%0A%3C%2Ftemplate%3E%0A",compoent:m},{code:l(()=>[S]),_:1}),N])}}});export{T as __pageData,w as default};
