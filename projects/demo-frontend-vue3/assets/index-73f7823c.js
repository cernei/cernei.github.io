import{r as p,o as r,c as m,a as f,F as y,b as le,d as te,e as U,f as d,t as k,n as q,g as S,h as V,u as L,i as g,j as W,k as H,s as ue,l as K,w as C,m as B,p as oe,q as me,v as de,x as pe,y as fe,z as _e,A as ge,B as be,C as he,D as ye,E as ve,G as xe,H as $e,I as we,J as Ce,K as ke,L as Se,P as Te,T as Pe,M as Oe}from"./vendor-a3e84f03.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const G=(e,t)=>{const o=e.__vccOpts||e;for(const[c,n]of t)o[c]=n;return o},Be={};function je(e,t){const o=p("Toast"),c=p("router-view");return r(),m(y,null,[f(o),f(c)],64)}const Ve=G(Be,[["render",je]]);const O=le.create({baseURL:"http://cernei.md",withCredentials:!0}),Fe=[["email"],["password"]],Ue={email:{component:"text",label:"Email",validation:{required:!0,pattern:"email",max:128}},password:{component:"text",label:"Password",validation:{required:!0,max:64,min:6}}},Ee={email:"",password:""},Ie={class:"p-component"},De={class:"flex gap-3"},qe={class:"flex-1 mb-3"},Le=["for"],Re={class:"p-error ml-1"},Me={class:"p-error ml-1"},ze={class:"p-error ml-1"},Ae={class:"flex flex-column gap-3 ml-3"},Ke=["for"],We={class:"p-error ml-1"},R={__name:"FormBuilderGrid",props:["form","layout"],setup(e){const t=e;function o(s){return t.form.submitted||t.form.errors[s]?t.form.errors[s]:""}const c=Object.keys(t.form.config),n=te({});return c.forEach(s=>{const a=t.form.config[s];a.dictionary?O.post("api/dictionaries/"+a.dictionary).then(_=>{n[s]=_.data.data}):a.options&&(n[s]=a.options)}),(s,a)=>{const _=p("InputText"),u=p("Textarea"),l=p("Dropdown"),$=p("Checkbox");return r(),m("div",Ie,[(r(!0),m(y,null,U(e.layout,w=>(r(),m("div",De,[(r(!0),m(y,null,U(w,i=>(r(),m("div",qe,[d("label",{for:i,class:"block text-900 font-medium mb-2"},k(e.form.config[i].label),9,Le),e.form.config[i].component==="text"?(r(),m(y,{key:0},[f(_,{id:i,type:"text",class:q(["w-full",{"p-invalid":e.form.errors[i]}]),modelValue:e.form.state[i],"onUpdate:modelValue":h=>e.form.state[i]=h,disabled:e.form.config[i].disabled,onInput:h=>e.form.validate(i)},null,8,["id","class","modelValue","onUpdate:modelValue","disabled","onInput"]),d("small",Re,k(o(i)),1)],64)):S("",!0),e.form.config[i].component==="textarea"?(r(),m(y,{key:1},[f(u,{class:q(["w-full",{"p-invalid":e.form.errors[i]}]),modelValue:e.form.state[i],"onUpdate:modelValue":h=>e.form.state[i]=h,onInput:h=>e.form.validate(i),rows:"5",cols:"30"},null,8,["class","modelValue","onUpdate:modelValue","onInput"]),d("small",Me,k(o(i)),1)],64)):S("",!0),e.form.config[i].component==="select"?(r(),m(y,{key:2},[f(l,{modelValue:e.form.state[i],"onUpdate:modelValue":h=>e.form.state[i]=h,class:q([{"p-invalid":e.form.errors[i]},"w-full"]),onChange:h=>e.form.validate(i),options:n[i],optionLabel:"name",placeholder:"Select a value",optionValue:"id"},null,8,["modelValue","onUpdate:modelValue","class","onChange","options"]),d("small",ze,k(o(i)),1)],64)):S("",!0),e.form.config[i].component==="checkbox-group"?(r(),m(y,{key:3},[d("div",Ae,[(r(!0),m(y,null,U(n[i],h=>(r(),m("div",{key:h.id,class:"flex align-items-center gap-1"},[f($,{modelValue:e.form.state[i],"onUpdate:modelValue":M=>e.form.state[i]=M,inputId:h.id,name:i,value:h.id},null,8,["modelValue","onUpdate:modelValue","inputId","name","value"]),d("label",{for:h.id,class:"text-800 text-sm"},k(h.name),9,Ke)]))),128))]),d("small",We,k(o(i)),1)],64)):S("",!0)]))),256))]))),256))])}}};function J(e,t){const o={};Object.keys(e).forEach(u=>{o[u]=""});const c={...o},n=te({state:{...t},config:e,errors:c,validate:_,submit:a,submitted:!1}),s={required:u=>{const l="Required";return Array.isArray(u)?u.length?"":l:u?"":l},max:(u,l)=>u&&u.length>l?"Should be no longer than "+l:"",min:(u,l)=>u&&u.length<l?"Should be longer than "+l:"",pattern:(u,l)=>{if(l==="email")return u.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)?null:"Must be a valid email"}};function a(){return Object.keys(e).forEach(u=>{_(u)}),n.submitted=!0,Object.values(c).every(u=>!u)}function _(u){const l=e[u].validation;if(l&&Object.keys(l).length){let $="";Object.keys(l).find(w=>{const i=l[w];if(i)return $=s[w](n.state[u],i),$}),c[u]=$}}return{form:n}}const T=V({permissions:[]});async function ne(){return O.get("api/user").then(e=>{T.value=e.data.data}).catch(e=>{j.push({name:"login"})})}const He={class:"flex justify-content-center mt-5"},Ge={class:"surface-card p-4 shadow-2 border-round w-full lg:w-6"},Je=d("div",{class:"text-center mb-5"},[d("div",{class:"text-900 text-3xl font-medium mb-3"},"Admin Panel")],-1),Qe={__name:"Login",setup(e){const t=L(),{form:o}=J(Ue,Ee);async function c(){const s=new FormData;s.append("email",o.state.email),s.append("password",o.state.password);try{await O.get("sanctum/csrf-cookie"),await O.post("login",s),await ne(),await j.push({name:"dashboard"})}catch(a){t.add({severity:"error",summary:"Error",detail:a.response.data.message,life:5e3})}}function n(){o.submit()&&c()}return(s,a)=>{const _=p("Button");return r(),m("div",He,[d("div",Ge,[Je,d("div",null,[f(R,{form:g(o),layout:g(Fe)},null,8,["form","layout"]),f(_,{label:"Sign In",icon:"pi pi-user",class:"w-full mt-4",onClick:n})])])])}}},Xe={class:"flex align-items-center justify-content-between p-2"},Ye={class:"flex"},Ze={class:"text-xl"},Ne={style:{color:"#555"},class:"ml-2"},et={class:"flex align-items-center gap-4"},tt=d("i",{class:"pi pi-sign-in text-xl"},null,-1),ot={},nt=Object.assign(ot,{__name:"AppTopBar",setup(e){const t=W(),o=H(()=>t.name);async function c(){try{await O.get("api/logout"),await j.push({name:"login"})}catch{}}return(n,s)=>{const a=p("Button");return r(),m("div",Xe,[d("div",Ye,[d("div",Ze,[f(g(ue),{icon:"pi pi-user",class:"m-1",style:{"background-color":"#dee2e6",color:"#ffffff"},shape:"circle"}),d("span",Ne,k(g(T).name),1),K(" "+k(o.value),1)])]),d("div",et,[f(a,{rounded:"",text:"",class:"p-2",onClick:c},{default:C(()=>[tt]),_:1})])])}}}),st={class:"layout-wrapper"},at={class:"flex"},rt={class:"p-2 flex gap-2 flex-column"},it={class:"flex-grow-1 p-2"},ct={__name:"AdminPanel",setup(e){const t=[{path:"/posts",permission:"posts.view",label:"Posts",icon:"pi-comments"},{path:"/categories",permission:"categories.view",label:"Categories",icon:"pi-tags"},{path:"/users",permission:"users.view",label:"Users",icon:"pi-users"},{path:"/roles",permission:"roles.view",label:"Roles",icon:"pi-cog"}];return(o,c)=>{const n=p("router-link"),s=p("router-view");return r(),m("div",st,[f(nt),d("div",at,[d("div",rt,[(r(),m(y,null,U(t,a=>(r(),m(y,null,[g(T).permissions.includes(a.permission)?(r(),B(n,{key:0,to:a.path},{default:C(()=>[f(g(oe),{plain:"",text:"",rounded:"",class:"block p-2",title:a.label},{default:C(()=>[d("i",{class:q(`pi ${a.icon} text-xl`)},null,2)]),_:2},1032,["title"])]),_:2},1032,["to"])):S("",!0)],64))),64))]),d("div",it,[f(s)])])])}}},lt={class:"flex justify-content-between mb-3"},ut=d("div",{class:"text-5xl"},"Users",-1),mt={__name:"Users",setup(e){const o={entity:"users",columns:{id:{label:"ID"},name:{label:"Name"},email:{label:"Email"},created_at:{label:"Created at"}}};return(c,n)=>{const s=p("Button"),a=p("router-link"),_=p("CrudTable");return r(),m(y,null,[d("div",lt,[ut,g(T).permissions.includes("users.create")?(r(),B(a,{key:0,to:{name:"users.create"}},{default:C(()=>[f(s,{label:"Create",severity:"success",class:"mr-5"})]),_:1},8,["to"])):S("",!0)]),f(_,{config:o})],64)}}},dt={class:"flex justify-content-between mb-3"},pt=d("div",{class:"text-5xl"},"Categories",-1),ft={__name:"Categories",setup(e){const o={entity:"categories",columns:{id:{label:"ID"},name:{label:"Name",search:!0}}};return(c,n)=>{const s=p("Button"),a=p("router-link"),_=p("CrudTable");return r(),m(y,null,[d("div",dt,[pt,g(T).permissions.includes("categories.create")?(r(),B(a,{key:0,to:{name:"categories.create"}},{default:C(()=>[f(s,{label:"Create",severity:"success",class:"mr-5"})]),_:1},8,["to"])):S("",!0)]),f(_,{config:o})],64)}}},_t={class:"flex justify-content-between mb-3"},gt=d("div",{class:"text-5xl"},"Posts",-1),bt={__name:"Posts",setup(e){const o={entity:"posts",columns:{id:{label:"ID"},content:{label:"Content",search:!0},category:{label:"Category"},user:{label:"User"},created_at:{label:"Created at"}}};return(c,n)=>{const s=p("Button"),a=p("router-link"),_=p("CrudTable");return r(),m(y,null,[d("div",_t,[gt,g(T).permissions.includes("posts.create")?(r(),B(a,{key:0,to:{name:"posts.create"}},{default:C(()=>[f(s,{label:"Create",severity:"success",class:"mr-5"})]),_:1},8,["to"])):S("",!0)]),f(_,{config:o})],64)}}},ht={class:"flex justify-content-between mb-3"},yt=d("div",{class:"text-5xl"},"Roles",-1),vt={__name:"Roles",setup(e){const o={entity:"roles",columns:{id:{label:"ID"},name:{label:"Name"},user:{label:"Created by"}}};return(c,n)=>{const s=p("Button"),a=p("router-link"),_=p("CrudTable");return r(),m(y,null,[d("div",ht,[yt,g(T).permissions.includes("roles.create")?(r(),B(a,{key:0,to:{name:"roles.create"}},{default:C(()=>[f(s,{label:"Create",severity:"success",class:"mr-5"})]),_:1},8,["to"])):S("",!0)]),f(_,{config:o})],64)}}};function xt(e,t){const o=L();function c(){O.post("api/"+e,t.state).then(()=>{j.push({name:e})}).catch(s=>{o.add({severity:"error",summary:"Error",detail:s.response.data.message,life:5e3})})}function n(){t.submit()&&c()}return{submit:n}}const $t=[["content"],["category_id"]],wt={content:{component:"textarea",label:"Content",validation:{required:!0,max:2e3}},category_id:{component:"select",label:"Category",dictionary:"categories",validation:{required:!0}}},Ct={name:""},Y=Object.freeze(Object.defineProperty({__proto__:null,config:wt,initialState:Ct,layout:$t},Symbol.toStringTag,{value:"Module"})),kt=[["name"]],St={name:{component:"text",label:"Name",validation:{required:!0,max:128}}},Tt={name:""},Z=Object.freeze(Object.defineProperty({__proto__:null,config:St,initialState:Tt,layout:kt},Symbol.toStringTag,{value:"Module"})),Pt=[["name"],["email"],["role_id"],["password"]],Ot={name:{component:"text",label:"Name",validation:{required:!0,max:128}},email:{component:"text",label:"Email",validation:{required:!0,pattern:"email",max:128}},role_id:{component:"select",label:"Role",dictionary:"roles",validation:{required:!0}},password:{component:"text",label:"Password",validation:{required:!0,max:64,min:6}}},Bt={name:"",email:"",password:""},jt=Object.freeze(Object.defineProperty({__proto__:null,config:Ot,initialState:Bt,layout:Pt},Symbol.toStringTag,{value:"Module"})),Vt=[["name"],["email"],["role_id"],["password"]],Ft={name:{component:"text",label:"Name",validation:{required:!0,max:128}},email:{component:"text",label:"Email",disabled:!0},role_id:{component:"select",label:"Role",dictionary:"roles",validation:{required:!0}},password:{component:"text",label:"Password",validation:{max:64,min:6}}},Ut={name:"",email:"",password:""},Et=Object.freeze(Object.defineProperty({__proto__:null,config:Ft,initialState:Ut,layout:Vt},Symbol.toStringTag,{value:"Module"})),It=[["name"],["permissions"]],Dt={name:{component:"text",label:"Name",validation:{required:!0,max:128}},permissions:{component:"checkbox-group",label:"Permissions",dictionary:"permissions",validation:{required:!0,max:128}}},qt={name:""},N=Object.freeze(Object.defineProperty({__proto__:null,config:Dt,initialState:qt,layout:It},Symbol.toStringTag,{value:"Module"})),Lt={"posts.create":{module:Y},"posts.edit":{module:Y},"categories.create":{module:Z},"categories.edit":{module:Z},"users.create":{module:jt},"users.edit":{module:Et},"roles.create":{module:N},"roles.edit":{module:N}};function Rt(e){return e.endsWith("ies")?e.slice(0,-3)+"y":e.endsWith("s")?e.slice(0,-1):e}function se(e){const t=Lt[e].module,o=e.split(".")[0];return t?{layout:t.layout,config:t.config,initialState:t.initialState,url:o,entityName:Rt(o)}:null}const Mt={class:"bg-gray-100 p-3 w-5 p-component"},zt={class:"text-3xl mb-3"},I={__name:"Create",setup(e){const t=W(),o=H(()=>t.name),{layout:c,config:n,initialState:s,url:a,entityName:_}=se(o.value),{form:u}=J(n,s),{submit:l}=xt(a,u);return($,w)=>{const i=p("Button");return r(),m("div",Mt,[d("div",zt,"Create "+k(g(_)),1),f(R,{form:g(u),layout:g(c)},null,8,["form","layout"]),f(i,{class:"m-2",severity:"success",label:"Submit",onClick:g(l)},null,8,["onClick"])])}}};function At(e,t,o){const c=L();function n(){O.put("api/"+e+"/"+t,o.state).then(()=>{j.push({name:e})}).catch(a=>{c.add({severity:"error",summary:"Error",detail:a.response.data.message,life:5e3})})}function s(){o.submit()&&n()}return{submit:s}}const Kt={class:"bg-gray-100 p-3 w-5 p-component"},Wt={class:"text-3xl mb-3"},D={__name:"Edit",setup(e){const t=W(),o=H(()=>t.name),c=L(),{layout:n,config:s,initialState:a,url:_,entityName:u}=se(o.value),{form:l}=J(s,a),{submit:$}=At(_,t.params.id,l);return O.get(`api/${_}/${t.params.id}/edit`).then(w=>{l.state=w.data.data}).catch(w=>{c.add({severity:"error",summary:"Error",detail:w.response.data.message,life:5e3})}),(w,i)=>{const h=p("Button");return r(),m("div",Kt,[d("div",Wt,"Update "+k(g(u)),1),f(R,{form:g(l),layout:g(n)},null,8,["form","layout"]),f(h,{class:"m-2",severity:"success",label:"Submit",onClick:g($)},null,8,["onClick"])])}}},Ht={},Gt={class:"text-5xl"};function Jt(e,t){return r(),m("div",Gt,"Forbidden")}const Qt=G(Ht,[["render",Jt]]),Xt={},Yt={class:"text-5xl"};function Zt(e,t){return r(),m("div",Yt,"Welcome to dashboard!")}const Nt=G(Xt,[["render",Zt]]),eo=[{name:"login",path:"/login",component:Qe},{path:"",component:ct,children:[{path:"/forbidden",name:"forbidden",component:Qt,meta:{permission:"authorized"}},{path:"/dashboard",name:"dashboard",component:Nt,meta:{permission:"authorized"}},{path:"/users",name:"users",component:mt,meta:{permission:"users.view"}},{path:"/users/create",name:"users.create",component:I,meta:{permission:"users.create"}},{path:"/users/:id/edit",name:"users.edit",component:D,meta:{permission:"users.edit"}},{path:"/posts",name:"posts",component:bt,meta:{permission:"posts.view"}},{path:"/posts/create",name:"posts.create",component:I,meta:{permission:"posts.create"}},{path:"/posts/:id/edit",name:"posts.edit",component:D,meta:{permission:"posts.edit"}},{path:"/categories",name:"categories",component:ft,meta:{permission:"categories.view"}},{path:"/categories/create",name:"categories.create",component:I,meta:{permission:"categories.create"}},{path:"/categories/:id/edit",name:"categories.edit",component:D,meta:{permission:"categories.edit"}},{path:"/roles",name:"roles",component:vt,meta:{permission:"roles.view"}},{path:"/roles/create",name:"roles.create",component:I,meta:{permission:"roles.create"}},{path:"/roles/:id/edit",name:"roles.edit",component:D,meta:{permission:"roles.edit"}}]}],j=me({history:de(),routes:eo}),ee=function(e,t,o){T.value.permissions.includes(e.meta.permission)?o():o({name:"forbidden"})};j.beforeEach(async(e,t,o)=>{if(e.meta.permission)if(T.value.permissions.length)ee(e,t,o);else return ne().then(()=>{ee(e,t,o)}).catch(()=>{o({name:"login"})});else o()});const to={key:1,class:"text-3xl flex justify-content-center"},oo={__name:"CrudTable",props:["config"],setup(e){const t=e,o=pe(),c=V(!1),n=V(0),s=V(""),a=V({});Object.keys(t.config.columns).forEach(b=>{t.config.columns[b].search&&(c.value=!0,a.value[b]={value:null,matchMode:fe.STARTS_WITH})});function _(b){o.require({message:"Are you sure you want to delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{O.delete(`api/${t.config.entity}/${b.id}`).then(()=>{$(0)})}})}function u(b){j.push({name:t.config.entity+".edit",params:{id:b.id}})}const l=V({});_e(async()=>{await $()});async function $(b=0,P=1){n.value=b;const z=(await O.post("api/query",{entity:t.config.entity,filters:a.value,sort:{field:s.value,order:P},page:b+1})).data;l.value=z.data}function w(b){n.value=b.page,$(b.page)}function i(b){$()}function h(b){s.value=b}function M(b){$(0,b)}return(b,P)=>{const Q=p("ConfirmDialog"),z=p("InputText"),A=p("Column"),X=p("Button"),ae=p("DataTable"),re=p("Paginator");return r(),m(y,null,[f(Q),l.value.data&&l.value.data.length?(r(),m(y,{key:0},[f(ae,{value:l.value.data,lazy:"",tableStyle:"min-width: 50rem",filterDisplay:c.value?"row":"",onFilter:P[0]||(P[0]=x=>i()),"onUpdate:sortField":P[1]||(P[1]=x=>h(x)),"onUpdate:sortOrder":P[2]||(P[2]=x=>M(x)),filters:a.value,"onUpdate:filters":P[3]||(P[3]=x=>a.value=x)},{loading:C(()=>[K(" Loading customers data. Please wait. ")]),default:C(()=>[(r(!0),m(y,null,U(e.config.columns,(x,F)=>(r(),m(y,null,[x.search?(r(),B(A,{key:0,field:F,header:x.label,sortable:x.sortable,"show-filter-menu":!1},{body:C(({data:E})=>[K(k(b.$filters.truncate(E[F],100)),1)]),filter:C(({filterModel:E,filterCallback:ie})=>[f(z,{modelValue:E.value,"onUpdate:modelValue":ce=>E.value=ce,type:"text",onKeydown:ge(ie,["enter"]),class:"p-column-filter",placeholder:"Search"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:2},1032,["field","header","sortable"])):(r(),B(A,{key:1,field:F,header:x.label,sortable:x.sortable},null,8,["field","header","sortable"]))],64))),256)),f(A,{header:"Actions"},{body:C(x=>[g(T).permissions.includes(e.config.entity+".edit")?(r(),B(X,{key:0,onClick:F=>u(x.data),severity:"warning",size:"small",icon:"pi pi-pencil"},null,8,["onClick"])):S("",!0),g(T).permissions.includes(e.config.entity+".delete")?(r(),B(X,{key:1,onClick:F=>_(x.data),severity:"danger",size:"small",icon:"pi pi-trash",class:"ml-2"},null,8,["onClick"])):S("",!0)]),_:1})]),_:1},8,["value","filterDisplay","filters"]),f(re,{rows:l.value.per_page,first:n.value*l.value.per_page,totalRecords:l.value.total,template:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport",rowsPerPageOptions:[20,50,100],onPage:w},null,8,["rows","first","totalRecords"])],64)):(r(),m("div",to,"No data"))],64)}}},v=be(Ve);v.component("Button",oe);v.component("InputText",he);v.component("Textarea",ye);v.component("Column",ve);v.component("DataTable",xe);v.component("Paginator",$e);v.component("CrudTable",oo);v.component("FormBuilderGrid",R);v.component("Dropdown",we);v.component("Toast",Ce);v.component("ConfirmDialog",ke);v.component("Checkbox",Se);v.use(j);v.use(Te);v.use(Pe);v.use(Oe);v.mount("#app");v.config.globalProperties.$filters={truncate(e,t,o){return e.slice(0,t)+(t<e.length?o||"...":"")}};
