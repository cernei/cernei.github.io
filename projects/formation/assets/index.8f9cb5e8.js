import{r as j,a as H,o as a,c as i,b as C,F as w,n as K,d as r,t as x,e as U,w as $,v as A,f as k,g as L,h as M,u as _,i as R,j as G,k as I,V as q,l as W,p as X,m as Y,q as Z,s as Q,x as N}from"./vendor.e3f023c8.js";const ee=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const p of l)if(p.type==="childList")for(const s of p.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function u(l){const p={};return l.integrity&&(p.integrity=l.integrity),l.referrerpolicy&&(p.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?p.credentials="include":l.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(l){if(l.ep)return;l.ep=!0;const p=u(l);fetch(l.href,p)}};ee();function B(t){const o=t.replace(/([A-Z])/g," $1").toLowerCase();return o[0].toUpperCase()+o.slice(1)}function D(t,o=["required","min","max"]){function u(n){return n.split(/\n/).map(y=>y.split(",").map(h=>h.trim()))}function c(n){function f(h,S){let b,d;return h.indexOf("=")!==-1?([b,d]=h.split("="),d=d.replace(/"/g,""),b==="form"&&v[d]&&(d=D(v[d].join(`

`)))):S===0?(b="component",d=h):(b=h,d=!0),[b,d]}const y={};return n&&n.split(/\n/).forEach(S=>{const b=S.match(/^([a-z\d]+)\s+-\s+([^\n]+)/i),d={};b[2].match(/([a-z\d=]+".*?"|[^",\s]+)(?=\s*,|\s*$)/ig).map((V,z)=>{const[J,T]=f(V.trim(),z);d[J]=T}),d.label||(d.label=B(b[1])),d.validation={},o.forEach(V=>{d[V]&&(d.validation[V]=d[V],delete d[V])}),y[b[1]]=d}),y}function l(n){return n?n.split(/\s+/):[]}function p(n){let f="main";const y={[f]:[]};return n.map(h=>{const S=h.trim().match(/^#([^\n]+)\n/);S&&(f=S[1].trim(),y[f]=[],h=h.substring(h.indexOf(`
`)).trim()),y[f].push(h)}),y}if(!t)return{};const s=t.trim().split(/[\n\s]{2,}/g),v=p(s),g=u(v.main[0]),m=c(v.main[1]),e=l(v.main[2]);return g.flat().forEach(n=>{m[n]||(m[n]={component:"text",label:B(n),validation:{}})}),{layout:g,config:m,validation:e}}function te(t){const o=t.layout.flat(),u={};return o.forEach(c=>{["list","checkbox-group"].includes(t.config[c].component)?u[c]=[]:t.config[c].component==="select"&&t.config[c].multiple?u[c]=[]:t.config[c].component==="checkbox"?u[c]=!1:u[c]=""}),u}var E={parse:D,createState:te};const F={categories:[{id:1,value:"Person"},{id:2,value:"Company"}],roles:[{id:1,value:"Admin"},{id:2,value:"Head of Data Entry"},{id:3,value:"Data Entry Operator"},{id:4,value:"Head of Sales"},{id:5,value:"Sales Manager"}],permissions:[{id:1,value:"Read"},{id:2,value:"Write"},{id:3,value:"Delete"}],users:[{id:1,value:"Isaac Lowery"},{id:2,value:"Morgan Allison"},{id:3,value:"Serina Kane"},{id:4,value:"Hector Martinez"},{id:5,value:"Dane Kemp"},{id:6,value:"Lenore Stein"}]};var P=(t,o)=>{const u=t.__vccOpts||t;for(const[c,l]of o)u[c]=l;return u};const ne={class:"row"},oe={key:0},se={class:"list-label"},ae=["onClick"],ie={class:"list-container"},le={key:0},re={class:"list-item"},ce=["onClick"],ue={key:1,class:"empty"},de={key:1},pe=["onUpdate:modelValue","onInput"],ve=["onUpdate:modelValue","onInput"],me={key:2,class:"checkbox"},fe=["onUpdate:modelValue","value"],he={key:3},ge={class:"checkbox"},_e=["onUpdate:modelValue","value"],ye={key:4},be={class:"radio"},xe=["onUpdate:modelValue","value"],ke=["multiple","onUpdate:modelValue"],we=["value"],Se={class:"message"},Ve={props:["state","layout","config"],setup(t){const o=t,u={required:(s,v)=>s?null:"Required",min:(s,v)=>{const g="Minimum "+v;return typeof s=="string"||Array.isArray(s)?s.length<v?g:null:s<v?g:null}};let c=j({});function l(s){c[s]="";const v=o.config[s].validation;Object.keys(v).find(g=>{const m=u[g](o.state[s],v[g]);if(m)return c[s]=m,!0})}function p(s){o.state[s].push(E.createState(o.config[s].form))}return(s,v)=>{const g=H("FormBuilder",!0);return a(!0),i(w,null,C(t.layout,m=>(a(),i("div",ne,[(a(!0),i(w,null,C(m,e=>(a(),i("div",{class:"field",style:K({flex:t.config[e].width?t.config[e].width:1})},[t.config[e].component==="list"?(a(),i("div",oe,[r("div",se,x(t.config[e].label),1),r("button",{class:"btn btn-success btn-sm pull-right",onClick:n=>p(e)},"+",8,ae),r("div",ie,[o.state[e].length?(a(),i("div",le,[(a(!0),i(w,null,C(o.state[e],(n,f)=>(a(),i("div",re,[r("div",null,[U(g,{layout:t.config[e].form.layout,config:t.config[e].form.config,state:n},null,8,["layout","config","state"])]),r("div",null,[r("button",{class:"btn btn-sm btn-danger",onClick:y=>o.state[e].splice(f,1)},"X",8,ce)])]))),256))])):(a(),i("div",ue," Empty list "))])])):(a(),i("div",de,[r("label",null,x(t.config[e].label),1),t.config[e].component==="text"?$((a(),i("input",{key:0,type:"text","onUpdate:modelValue":n=>o.state[e]=n,class:"form-control",onInput:n=>l(e)},null,40,pe)),[[A,o.state[e]]]):k("",!0),t.config[e].component==="password"?$((a(),i("input",{key:1,type:"password","onUpdate:modelValue":n=>o.state[e]=n,class:"form-control",onInput:n=>l(e)},null,40,ve)),[[A,o.state[e]]]):k("",!0),t.config[e].component==="checkbox"?(a(),i("div",me,[r("label",null,[$(r("input",{type:"checkbox","onUpdate:modelValue":n=>o.state[e]=n,value:t.config[e].id},null,8,fe),[[L,o.state[e]]]),M(x(t.config[e].value),1)])])):k("",!0),t.config[e].component==="checkbox-group"?(a(),i("div",he,[(a(!0),i(w,null,C(_(F)[t.config[e].options],n=>(a(),i("div",ge,[r("label",null,[$(r("input",{type:"checkbox","onUpdate:modelValue":f=>o.state[e]=f,value:n.id},null,8,_e),[[L,o.state[e]]]),M(x(n.value),1)])]))),256))])):k("",!0),t.config[e].component==="radio"?(a(),i("div",ye,[(a(!0),i(w,null,C(_(F)[t.config[e].options],n=>(a(),i("div",be,[r("label",null,[$(r("input",{type:"radio","onUpdate:modelValue":f=>o.state[e]=f,value:n.id},null,8,xe),[[R,o.state[e]]]),M(x(n.value),1)])]))),256))])):k("",!0),t.config[e].component==="select"?$((a(),i("select",{key:5,multiple:t.config[e].multiple,"onUpdate:modelValue":n=>o.state[e]=n,class:"form-control"},[(a(!0),i(w,null,C(_(F)[t.config[e].options],n=>(a(),i("option",{value:n.id},x(n.value),9,we))),256))],8,ke)),[[G,o.state[e]]]):k("",!0)])),r("div",Se,x(_(c)[e]),1)],4))),256))]))),256)}}};var Ce=P(Ve,[["__scopeId","data-v-8e3e107a"]]);const $e=`
firstName, lastName
password, password2
partners, competitors
permissions
isPublic

firstName - text, required, min=3
lastName - text, required, min=3
password - password, required, min=6
password2 - password, required, min=6, label="Repeat password"
permissions - checkbox-group, options=permissions
partners - list, form=company
competitors - list, form=company
isPublic - checkbox, label="Make my profile public", value="Yes"

password == password

#company
name, type

type - select, options=categories
`;const O=t=>(X("data-v-a7fc6214"),t=t(),Y(),t),Ie={class:"row"},Ue={class:"col-md-5"},Me=O(()=>r("div",null,[r("h3",null,"Generated JSON schema:")],-1)),Fe={class:"col-md-7"},Ee={key:0},Oe=O(()=>r("h3",null,"Form Data:",-1)),Ae={key:1},Le=O(()=>r("h3",null,"oops... check syntax",-1)),qe=[Le],Be={setup(t){const o=I(`
firstName, lastName
`.trim());let u=I({});const c=I("");let l=I([]),p=I({}),s=I(!1);function v(){o.value=$e.trim()}function g(){try{const m=E.parse(o.value);l.value=m.layout,p.value=m.config,u.value=E.createState(m),c.value=JSON.stringify(m,null,4),s.value=!1}catch(m){s.value=!0,console.log(m)}}return(m,e)=>(a(),i("div",Ie,[r("div",Ue,[r("div",{style:{width:"650px"}},[r("button",{class:"btn btn-xs btn-success m-3 pull-right",onClick:v},"Insert advanced example")]),U(_(q),{value:o.value,"onUpdate:value":e[0]||(e[0]=n=>o.value=n),onInput:g,class:"editor",theme:"eclipse"},null,8,["value"]),Me,U(_(q),{value:c.value,"onUpdate:value":e[1]||(e[1]=n=>c.value=n),class:"editor",theme:"eclipse"},null,8,["value"])]),r("div",Fe,[_(s)?k("",!0):(a(),i("div",Ee,[r("form",{class:"form",onSubmit:e[2]||(e[2]=W(()=>{},["prevent"]))},[U(Ce,{state:_(u),layout:_(l),config:_(p)},null,8,["state","layout","config"])],32),Oe,r("pre",null,x(_(u)),1)])),_(s)?(a(),i("div",Ae,qe)):k("",!0)])]))}};var De=P(Be,[["__scopeId","data-v-a7fc6214"]]);const Pe=Q('<div class="github"><a href="https://github.com/cernei/formation">github.com/cernei/formation</a></div><div class="header"><div class="title-container"><div class="title">Formation.JS</div><div class="description">Easiest way to create and manage forms for CRMs</div></div></div>',2),ze=Z({setup(t){return(o,u)=>(a(),i(w,null,[Pe,U(De)],64))}});N(ze).mount("#app");
