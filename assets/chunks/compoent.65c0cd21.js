import{_ as y,g as m,o as d,c as v,a as n,r as l,t as a,h as $,f as u,u as p,i as g,j as b,k as P}from"../app.cb611134.js";const k={class:"demo-block"},I={class:"description"},w={class:"preview"},x={class:"control"},S={key:0,class:"code"},B=u("          "),N=u(`
        `),j={__name:"DemoBlock",props:{description:String,code:String,compoent:Object},setup(o){const e=o,c=decodeURIComponent(e.description),r=decodeURIComponent(e.code),t=m(!1),s=m("Copy"),C=()=>{s.value="Copyed",navigator.clipboard.writeText(decodeURIComponent(e.code))},h=()=>{setTimeout(()=>{s.value="Copy"},250)};return(i,_)=>(d(),v("div",k,[n("div",I,[l(i.$slots,"description",{},()=>[u(a(p(c)),1)],!0)]),n("div",w,[l(i.$slots,"preview",{},()=>[(d(),g(b(o.compoent)))],!0)]),n("div",x,[n("button",{class:"control-btn",onClick:_[0]||(_[0]=M=>t.value=!t.value)},a(t.value?"Hide":"Show"),1),n("button",{class:"control-btn",onClick:C,onMouseout:h},a(s.value),33)]),t.value?(d(),v("div",S,[l(i.$slots,"code",{},()=>[n("pre",null,[B,n("code",null,a(p(r)),1),N])],!0)])):$("",!0)]))}};var U=y(j,[["__scopeId","data-v-c7a53118"]]);const f="V",E=`${f.toLowerCase()}-`,R=Symbol("configProvideInjectKey"),T=(o={})=>o.componentPrefix||f,D="is-";function V(o){const e=P(R,{});return o?e[o]:e}const F=o=>{const e=V("clsPrefix")||E,c=()=>`${p(e)}${o}`;return{namespace:e,is:(t,s)=>s?`${c()}-${D}${t}`:"",b:c}},K=(o,e=[])=>(o.install=(c,r={})=>{const t=T(r);[o,...e].forEach(s=>{c.component(`${t}${s.name}`,s)})},o);export{U as d,F as u,K as w};