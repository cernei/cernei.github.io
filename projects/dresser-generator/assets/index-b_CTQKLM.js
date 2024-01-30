(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function aa(n,e){const t=new Set(n.split(","));return e?i=>t.has(i.toLowerCase()):i=>t.has(i)}const nt={},Hi=[],Yt=()=>{},If=()=>!1,ws=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),la=n=>n.startsWith("onUpdate:"),Tt=Object.assign,ca=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Nf=Object.prototype.hasOwnProperty,$e=(n,e)=>Nf.call(n,e),Fe=Array.isArray,Gi=n=>Rs(n)==="[object Map]",Zc=n=>Rs(n)==="[object Set]",ke=n=>typeof n=="function",ft=n=>typeof n=="string",Qi=n=>typeof n=="symbol",rt=n=>n!==null&&typeof n=="object",Jc=n=>(rt(n)||ke(n))&&ke(n.then)&&ke(n.catch),Qc=Object.prototype.toString,Rs=n=>Qc.call(n),Of=n=>Rs(n).slice(8,-1),eu=n=>Rs(n)==="[object Object]",ua=n=>ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ls=aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ff=/-(\w)/g,Yi=Cs(n=>n.replace(Ff,(e,t)=>t?t.toUpperCase():"")),Bf=/\B([A-Z])/g,er=Cs(n=>n.replace(Bf,"-$1").toLowerCase()),tu=Cs(n=>n.charAt(0).toUpperCase()+n.slice(1)),js=Cs(n=>n?`on${tu(n)}`:""),ui=(n,e)=>!Object.is(n,e),cs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ms=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Bo=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ga;const nu=()=>Ga||(Ga=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fa(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ft(i)?Vf(i):fa(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ft(n)||rt(n))return n}const zf=/;(?![^(]*\))/g,Hf=/:([^]+)/,Gf=/\/\*[^]*?\*\//g;function Vf(n){const e={};return n.replace(Gf,"").split(zf).forEach(t=>{if(t){const i=t.split(Hf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ha(n){let e="";if(ft(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=ha(n[t]);i&&(e+=i+" ")}else if(rt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const kf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wf=aa(kf);function iu(n){return!!n||n===""}const Va=n=>ft(n)?n:n==null?"":Fe(n)||rt(n)&&(n.toString===Qc||!ke(n.toString))?JSON.stringify(n,ru,2):String(n),ru=(n,e)=>e&&e.__v_isRef?ru(n,e.value):Gi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ks(i,s)+" =>"]=r,t),{})}:Zc(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ks(t))}:Qi(e)?Ks(e):rt(e)&&!Fe(e)&&!eu(e)?String(e):e,Ks=(n,e="")=>{var t;return Qi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class Xf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Zt;try{return Zt=this,e()}finally{Zt=t}}}on(){Zt=this}off(){Zt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function qf(n,e=Zt){e&&e.active&&e.effects.push(n)}function Yf(){return Zt}let si;class da{constructor(e,t,i,r){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,qf(this,r)}get dirty(){if(this._dirtyLevel===1){mi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(jf(t.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),_i()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Hn,t=si;try{return Hn=!0,si=this,this._runnings++,ka(this),this.fn()}finally{Wa(this),this._runnings--,si=t,Hn=e}}stop(){var e;this.active&&(ka(this),Wa(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function jf(n){return n.value}function ka(n){n._trackId++,n._depsLength=0}function Wa(n){if(n.deps&&n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)su(n.deps[e],n);n.deps.length=n._depsLength}}function su(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let Hn=!0,zo=0;const ou=[];function mi(){ou.push(Hn),Hn=!1}function _i(){const n=ou.pop();Hn=n===void 0?!0:n}function pa(){zo++}function ma(){for(zo--;!zo&&Ho.length;)Ho.shift()()}function au(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&su(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Ho=[];function lu(n,e,t){pa();for(const i of n.keys())if(i._dirtyLevel<e&&n.get(i)===i._trackId){const r=i._dirtyLevel;i._dirtyLevel=e,r===0&&(i._shouldSchedule=!0,i.trigger())}cu(n),ma()}function cu(n){for(const e of n.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&n.get(e)===e._trackId&&(e._shouldSchedule=!1,Ho.push(e.scheduler))}const uu=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Go=new WeakMap,oi=Symbol(""),Vo=Symbol("");function Ut(n,e,t){if(Hn&&si){let i=Go.get(n);i||Go.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=uu(()=>i.delete(t))),au(si,r)}}function yn(n,e,t,i,r,s){const a=Go.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Fe(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||!Qi(u)&&u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Fe(n)?ua(t)&&o.push(a.get("length")):(o.push(a.get(oi)),Gi(n)&&o.push(a.get(Vo)));break;case"delete":Fe(n)||(o.push(a.get(oi)),Gi(n)&&o.push(a.get(Vo)));break;case"set":Gi(n)&&o.push(a.get(oi));break}pa();for(const l of o)l&&lu(l,2);ma()}const Kf=aa("__proto__,__v_isRef,__isVue"),fu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Qi)),Xa=$f();function $f(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Qe(this);for(let s=0,a=this.length;s<a;s++)Ut(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){mi(),pa();const i=Qe(this)[e].apply(this,t);return ma(),_i(),i}}),n}function Zf(n){const e=Qe(this);return Ut(e,"has",n),e.hasOwnProperty(n)}class hu{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const r=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?uh:_u:s?mu:pu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Fe(e);if(!r){if(a&&$e(Xa,t))return Reflect.get(Xa,t,i);if(t==="hasOwnProperty")return Zf}const o=Reflect.get(e,t,i);return(Qi(t)?fu.has(t):Kf(t))||(r||Ut(e,"get",t),s)?o:zt(o)?a&&ua(t)?o:o.value:rt(o)?r?gu(o):yr(o):o}}class du extends hu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._shallow){const l=_r(s);if(!ko(i)&&!_r(i)&&(s=Qe(s),i=Qe(i)),!Fe(e)&&zt(s)&&!zt(i))return l?!1:(s.value=i,!0)}const a=Fe(e)&&ua(t)?Number(t)<e.length:$e(e,t),o=Reflect.set(e,t,i,r);return e===Qe(r)&&(a?ui(i,s)&&yn(e,"set",t,i):yn(e,"add",t,i)),o}deleteProperty(e,t){const i=$e(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&yn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Qi(t)||!fu.has(t))&&Ut(e,"has",t),i}ownKeys(e){return Ut(e,"iterate",Fe(e)?"length":oi),Reflect.ownKeys(e)}}class Jf extends hu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Qf=new du,eh=new Jf,th=new du(!0),_a=n=>n,Ps=n=>Reflect.getPrototypeOf(n);function Cr(n,e,t=!1,i=!1){n=n.__v_raw;const r=Qe(n),s=Qe(e);t||(ui(e,s)&&Ut(r,"get",e),Ut(r,"get",s));const{has:a}=Ps(r),o=i?_a:t?Ma:xa;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Pr(n,e=!1){const t=this.__v_raw,i=Qe(t),r=Qe(n);return e||(ui(n,r)&&Ut(i,"has",n),Ut(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Lr(n,e=!1){return n=n.__v_raw,!e&&Ut(Qe(n),"iterate",oi),Reflect.get(n,"size",n)}function qa(n){n=Qe(n);const e=Qe(this);return Ps(e).has.call(e,n)||(e.add(n),yn(e,"add",n,n)),this}function Ya(n,e){e=Qe(e);const t=Qe(this),{has:i,get:r}=Ps(t);let s=i.call(t,n);s||(n=Qe(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?ui(e,a)&&yn(t,"set",n,e):yn(t,"add",n,e),this}function ja(n){const e=Qe(this),{has:t,get:i}=Ps(e);let r=t.call(e,n);r||(n=Qe(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&yn(e,"delete",n,void 0),s}function Ka(){const n=Qe(this),e=n.size!==0,t=n.clear();return e&&yn(n,"clear",void 0,void 0),t}function Dr(n,e){return function(i,r){const s=this,a=s.__v_raw,o=Qe(a),l=e?_a:n?Ma:xa;return!n&&Ut(o,"iterate",oi),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ur(n,e,t){return function(...i){const r=this.__v_raw,s=Qe(r),a=Gi(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?_a:e?Ma:xa;return!e&&Ut(s,"iterate",l?Vo:oi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function wn(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function nh(){const n={get(s){return Cr(this,s)},get size(){return Lr(this)},has:Pr,add:qa,set:Ya,delete:ja,clear:Ka,forEach:Dr(!1,!1)},e={get(s){return Cr(this,s,!1,!0)},get size(){return Lr(this)},has:Pr,add:qa,set:Ya,delete:ja,clear:Ka,forEach:Dr(!1,!0)},t={get(s){return Cr(this,s,!0)},get size(){return Lr(this,!0)},has(s){return Pr.call(this,s,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:Dr(!0,!1)},i={get(s){return Cr(this,s,!0,!0)},get size(){return Lr(this,!0)},has(s){return Pr.call(this,s,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:Dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ur(s,!1,!1),t[s]=Ur(s,!0,!1),e[s]=Ur(s,!1,!0),i[s]=Ur(s,!0,!0)}),[n,t,e,i]}const[ih,rh,sh,oh]=nh();function ga(n,e){const t=e?n?oh:sh:n?rh:ih;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get($e(t,r)&&r in i?t:i,r,s)}const ah={get:ga(!1,!1)},lh={get:ga(!1,!0)},ch={get:ga(!0,!1)},pu=new WeakMap,mu=new WeakMap,_u=new WeakMap,uh=new WeakMap;function fh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hh(n){return n.__v_skip||!Object.isExtensible(n)?0:fh(Of(n))}function yr(n){return _r(n)?n:va(n,!1,Qf,ah,pu)}function dh(n){return va(n,!1,th,lh,mu)}function gu(n){return va(n,!0,eh,ch,_u)}function va(n,e,t,i,r){if(!rt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=hh(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Vi(n){return _r(n)?Vi(n.__v_raw):!!(n&&n.__v_isReactive)}function _r(n){return!!(n&&n.__v_isReadonly)}function ko(n){return!!(n&&n.__v_isShallow)}function vu(n){return Vi(n)||_r(n)}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function xu(n){return ms(n,"__v_skip",!0),n}const xa=n=>rt(n)?yr(n):n,Ma=n=>rt(n)?gu(n):n;class Mu{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new da(()=>e(this._value),()=>$s(this,1),()=>this.dep&&cu(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Qe(this);return(!e._cacheable||e.effect.dirty)&&ui(e._value,e._value=e.effect.run())&&$s(e,2),mh(e),e.effect._dirtyLevel>=1&&$s(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function ph(n,e,t=!1){let i,r;const s=ke(n);return s?(i=n,r=Yt):(i=n.get,r=n.set),new Mu(i,r,s||!r,t)}function mh(n){Hn&&si&&(n=Qe(n),au(si,n.dep||(n.dep=uu(()=>n.dep=void 0,n instanceof Mu?n:void 0))))}function $s(n,e=2,t){n=Qe(n);const i=n.dep;i&&lu(i,e)}function zt(n){return!!(n&&n.__v_isRef===!0)}function us(n){return zt(n)?n.value:n}const _h={get:(n,e,t)=>us(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return zt(r)&&!zt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Su(n){return Vi(n)?n:new Proxy(n,_h)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Ls(s,e,t)}return r}function tn(n,e,t,i){if(ke(n)){const s=Gn(n,e,t,i);return s&&Jc(s)&&s.catch(a=>{Ls(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(tn(n[s],e,t,i));return r}function Ls(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Gn(l,null,10,[n,a,o]);return}}gh(n,t,r,i)}function gh(n,e,t,i=!0){console.error(n)}let gr=!1,Wo=!1;const yt=[];let ln=0;const ki=[];let Un=null,ti=0;const Eu=Promise.resolve();let Sa=null;function vh(n){const e=Sa||Eu;return n?e.then(this?n.bind(this):n):e}function xh(n){let e=ln+1,t=yt.length;for(;e<t;){const i=e+t>>>1,r=yt[i],s=vr(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function Ea(n){(!yt.length||!yt.includes(n,gr&&n.allowRecurse?ln+1:ln))&&(n.id==null?yt.push(n):yt.splice(xh(n.id),0,n),yu())}function yu(){!gr&&!Wo&&(Wo=!0,Sa=Eu.then(bu))}function Mh(n){const e=yt.indexOf(n);e>ln&&yt.splice(e,1)}function Sh(n){Fe(n)?ki.push(...n):(!Un||!Un.includes(n,n.allowRecurse?ti+1:ti))&&ki.push(n),yu()}function $a(n,e,t=gr?ln+1:0){for(;t<yt.length;t++){const i=yt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;yt.splice(t,1),t--,i()}}}function Tu(n){if(ki.length){const e=[...new Set(ki)].sort((t,i)=>vr(t)-vr(i));if(ki.length=0,Un){Un.push(...e);return}for(Un=e,ti=0;ti<Un.length;ti++)Un[ti]();Un=null,ti=0}}const vr=n=>n.id==null?1/0:n.id,Eh=(n,e)=>{const t=vr(n)-vr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function bu(n){Wo=!1,gr=!0,yt.sort(Eh);try{for(ln=0;ln<yt.length;ln++){const e=yt[ln];e&&e.active!==!1&&Gn(e,null,14)}}finally{ln=0,yt.length=0,Tu(),gr=!1,Sa=null,(yt.length||ki.length)&&bu()}}function yh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=i[u]||nt;d&&(r=t.map(m=>ft(m)?m.trim():m)),f&&(r=t.map(Bo))}let o,l=i[o=js(e)]||i[o=js(Yi(e))];!l&&s&&(l=i[o=js(er(e))]),l&&tn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,tn(c,n,6,r)}}function Au(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ke(n)){const l=c=>{const u=Au(c,e,!0);u&&(o=!0,Tt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(rt(n)&&i.set(n,null),null):(Fe(s)?s.forEach(l=>a[l]=null):Tt(a,s),rt(n)&&i.set(n,a),a)}function Ds(n,e){return!n||!ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(n,e[0].toLowerCase()+e.slice(1))||$e(n,er(e))||$e(n,e))}let Ft=null,Us=null;function _s(n){const e=Ft;return Ft=n,Us=n&&n.type.__scopeId||null,e}function Th(n){Us=n}function bh(){Us=null}function Ah(n,e=Ft,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&al(-1);const s=_s(e);let a;try{a=n(...r)}finally{_s(s),i._d&&al(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Zs(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:x,inheritAttrs:v}=n;let p,h;const b=_s(n);try{if(t.shapeFlag&4){const A=r||i,I=A;p=on(u.call(I,A,f,s,m,d,x)),h=l}else{const A=e;p=on(A.length>1?A(s,{attrs:l,slots:o,emit:c}):A(s,null)),h=e.props?l:wh(l)}}catch(A){dr.length=0,Ls(A,n,1),p=nn(fi)}let M=p;if(h&&v!==!1){const A=Object.keys(h),{shapeFlag:I}=M;A.length&&I&7&&(a&&A.some(la)&&(h=Rh(h,a)),M=ji(M,h))}return t.dirs&&(M=ji(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),p=M,_s(b),p}const wh=n=>{let e;for(const t in n)(t==="class"||t==="style"||ws(t))&&((e||(e={}))[t]=n[t]);return e},Rh=(n,e)=>{const t={};for(const i in n)(!la(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ch(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Za(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!Ds(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Za(i,a,c):!0:!!a;return!1}function Za(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Ds(t,s))return!0}return!1}function Ph({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Lh=Symbol.for("v-ndc"),Dh=n=>n.__isSuspense;function Uh(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):Sh(n)}const Ih=Symbol.for("v-scx"),Nh=()=>hs(Ih),Ir={};function Js(n,e,t){return wu(n,e,t)}function wu(n,e,{immediate:t,deep:i,flush:r,once:s,onTrack:a,onTrigger:o}=nt){if(e&&s){const C=e;e=(...P)=>{C(...P),I()}}const l=Ct,c=C=>i===!0?C:ri(C,i===!1?1:void 0);let u,f=!1,d=!1;if(zt(n)?(u=()=>n.value,f=ko(n)):Vi(n)?(u=()=>c(n),f=!0):Fe(n)?(d=!0,f=n.some(C=>Vi(C)||ko(C)),u=()=>n.map(C=>{if(zt(C))return C.value;if(Vi(C))return c(C);if(ke(C))return Gn(C,l,2)})):ke(n)?e?u=()=>Gn(n,l,2):u=()=>(m&&m(),tn(n,l,3,[x])):u=Yt,e&&i){const C=u;u=()=>ri(C())}let m,x=C=>{m=M.onStop=()=>{Gn(C,l,4),m=M.onStop=void 0}},v;if(Fs)if(x=Yt,e?t&&tn(e,l,3,[u(),d?[]:void 0,x]):u(),r==="sync"){const C=Nh();v=C.__watcherHandles||(C.__watcherHandles=[])}else return Yt;let p=d?new Array(n.length).fill(Ir):Ir;const h=()=>{if(!(!M.active||!M.dirty))if(e){const C=M.run();(i||f||(d?C.some((P,ne)=>ui(P,p[ne])):ui(C,p)))&&(m&&m(),tn(e,l,3,[C,p===Ir?void 0:d&&p[0]===Ir?[]:p,x]),p=C)}else M.run()};h.allowRecurse=!!e;let b;r==="sync"?b=h:r==="post"?b=()=>Pt(h,l&&l.suspense):(h.pre=!0,l&&(h.id=l.uid),b=()=>Ea(h));const M=new da(u,Yt,b),A=Yf(),I=()=>{M.stop(),A&&ca(A.effects,M)};return e?t?h():p=M.run():r==="post"?Pt(M.run.bind(M),l&&l.suspense):M.run(),v&&v.push(I),I}function Oh(n,e,t){const i=this.proxy,r=ft(n)?n.includes(".")?Ru(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const a=Tr(this),o=wu(r,s.bind(i),t);return a(),o}function Ru(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function ri(n,e,t=0,i){if(!rt(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(i=i||new Set,i.has(n))return n;if(i.add(n),zt(n))ri(n.value,e,t,i);else if(Fe(n))for(let r=0;r<n.length;r++)ri(n[r],e,t,i);else if(Zc(n)||Gi(n))n.forEach(r=>{ri(r,e,t,i)});else if(eu(n))for(const r in n)ri(n[r],e,t,i);return n}function Fh(n,e){if(Ft===null)return n;const t=Bs(Ft)||Ft.proxy,i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=nt]=e[r];s&&(ke(s)&&(s={mounted:s,updated:s}),s.deep&&ri(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function jn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(mi(),tn(l,t,8,[n.el,o,n,e]),_i())}}const fs=n=>!!n.type.__asyncLoader,Cu=n=>n.type.__isKeepAlive;function Bh(n,e){Pu(n,"a",e)}function zh(n,e){Pu(n,"da",e)}function Pu(n,e,t=Ct){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Is(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Cu(r.parent.vnode)&&Hh(i,e,t,r),r=r.parent}}function Hh(n,e,t,i){const r=Is(e,n,i,!0);Du(()=>{ca(i[e],r)},t)}function Is(n,e,t=Ct,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;mi();const o=Tr(t),l=tn(e,t,n,a);return o(),_i(),l});return i?r.unshift(s):r.push(s),s}}const bn=n=>(e,t=Ct)=>(!Fs||n==="sp")&&Is(n,(...i)=>e(...i),t),Gh=bn("bm"),Lu=bn("m"),Vh=bn("bu"),kh=bn("u"),Wh=bn("bum"),Du=bn("um"),Xh=bn("sp"),qh=bn("rtg"),Yh=bn("rtc");function jh(n,e=Ct){Is("ec",n,e)}function Ja(n,e,t,i){let r;const s=t&&t[i];if(Fe(n)||ft(n)){r=new Array(n.length);for(let a=0,o=n.length;a<o;a++)r[a]=e(n[a],a,void 0,s&&s[a])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(rt(n))if(n[Symbol.iterator])r=Array.from(n,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(n);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(n[c],c,o,s&&s[o])}}else r=[];return t&&(t[i]=r),r}const Xo=n=>n?Wu(n)?Bs(n)||n.proxy:Xo(n.parent):null,hr=Tt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Xo(n.parent),$root:n=>Xo(n.root),$emit:n=>n.emit,$options:n=>ya(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Ea(n.update)}),$nextTick:n=>n.n||(n.n=vh.bind(n.proxy)),$watch:n=>Oh.bind(n)}),Qs=(n,e)=>n!==nt&&!n.__isScriptSetup&&$e(n,e),Kh={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Qs(i,e))return a[e]=1,i[e];if(r!==nt&&$e(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&$e(c,e))return a[e]=3,s[e];if(t!==nt&&$e(t,e))return a[e]=4,t[e];qo&&(a[e]=0)}}const u=hr[e];let f,d;if(u)return e==="$attrs"&&Ut(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==nt&&$e(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,$e(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Qs(r,e)?(r[e]=t,!0):i!==nt&&$e(i,e)?(i[e]=t,!0):$e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==nt&&$e(n,a)||Qs(e,a)||(o=s[0])&&$e(o,a)||$e(i,a)||$e(hr,a)||$e(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:$e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Qa(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let qo=!0;function $h(n){const e=ya(n),t=n.proxy,i=n.ctx;qo=!1,e.beforeCreate&&el(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:x,activated:v,deactivated:p,beforeDestroy:h,beforeUnmount:b,destroyed:M,unmounted:A,render:I,renderTracked:C,renderTriggered:P,errorCaptured:ne,serverPrefetch:E,expose:T,inheritAttrs:Z,components:ie,directives:de,filters:N}=e;if(c&&Zh(c,i,null),a)for(const $ in a){const Y=a[$];ke(Y)&&(i[$]=Y.bind(t))}if(r){const $=r.call(t,t);rt($)&&(n.data=yr($))}if(qo=!0,s)for(const $ in s){const Y=s[$],re=ke(Y)?Y.bind(t,t):ke(Y.get)?Y.get.bind(t,t):Yt,oe=!ke(Y)&&ke(Y.set)?Y.set.bind(t):Yt,fe=qu({get:re,set:oe});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>fe.value,set:he=>fe.value=he})}if(o)for(const $ in o)Uu(o[$],i,t,$);if(l){const $=ke(l)?l.call(t):l;Reflect.ownKeys($).forEach(Y=>{id(Y,$[Y])})}u&&el(u,n,"c");function W($,Y){Fe(Y)?Y.forEach(re=>$(re.bind(t))):Y&&$(Y.bind(t))}if(W(Gh,f),W(Lu,d),W(Vh,m),W(kh,x),W(Bh,v),W(zh,p),W(jh,ne),W(Yh,C),W(qh,P),W(Wh,b),W(Du,A),W(Xh,E),Fe(T))if(T.length){const $=n.exposed||(n.exposed={});T.forEach(Y=>{Object.defineProperty($,Y,{get:()=>t[Y],set:re=>t[Y]=re})})}else n.exposed||(n.exposed={});I&&n.render===Yt&&(n.render=I),Z!=null&&(n.inheritAttrs=Z),ie&&(n.components=ie),de&&(n.directives=de)}function Zh(n,e,t=Yt){Fe(n)&&(n=Yo(n));for(const i in n){const r=n[i];let s;rt(r)?"default"in r?s=hs(r.from||i,r.default,!0):s=hs(r.from||i):s=hs(r),zt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function el(n,e,t){tn(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Uu(n,e,t,i){const r=i.includes(".")?Ru(t,i):()=>t[i];if(ft(n)){const s=e[n];ke(s)&&Js(r,s)}else if(ke(n))Js(r,n.bind(t));else if(rt(n))if(Fe(n))n.forEach(s=>Uu(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&Js(r,s,n)}}function ya(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>gs(l,c,a,!0)),gs(l,e,a)),rt(e)&&s.set(e,l),l}function gs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&gs(n,s,t,!0),r&&r.forEach(a=>gs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Jh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Jh={data:tl,props:nl,emits:nl,methods:ur,computed:ur,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:ur,directives:ur,watch:ed,provide:tl,inject:Qh};function tl(n,e){return e?n?function(){return Tt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function Qh(n,e){return ur(Yo(n),Yo(e))}function Yo(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function bt(n,e){return n?[...new Set([].concat(n,e))]:e}function ur(n,e){return n?Tt(Object.create(null),n,e):e}function nl(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:Tt(Object.create(null),Qa(n),Qa(e??{})):e}function ed(n,e){if(!n)return e;if(!e)return n;const t=Tt(Object.create(null),n);for(const i in e)t[i]=bt(n[i],e[i]);return t}function Iu(){return{app:null,config:{isNativeTag:If,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let td=0;function nd(n,e){return function(i,r=null){ke(i)||(i=Tt({},i)),r!=null&&!rt(r)&&(r=null);const s=Iu(),a=new WeakSet;let o=!1;const l=s.app={_uid:td++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Pd,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&ke(c.install)?(a.add(c),c.install(l,...u)):ke(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const d=nn(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,c):n(d,c,f),o=!0,l._container=c,c.__vue_app__=l,Bs(d.component)||d.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){vs=l;try{return c()}finally{vs=null}}};return l}}let vs=null;function id(n,e){if(Ct){let t=Ct.provides;const i=Ct.parent&&Ct.parent.provides;i===t&&(t=Ct.provides=Object.create(i)),t[n]=e}}function hs(n,e,t=!1){const i=Ct||Ft;if(i||vs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:vs._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}function rd(n,e,t,i=!1){const r={},s={};ms(s,Os,1),n.propsDefaults=Object.create(null),Nu(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:dh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function sd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Qe(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ds(n.emitsOptions,d))continue;const m=e[d];if(l)if($e(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const x=Yi(d);r[x]=jo(l,o,x,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{Nu(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!$e(e,f)&&((u=er(f))===f||!$e(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=jo(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!$e(e,f))&&(delete s[f],c=!0)}c&&yn(n,"set","$attrs")}function Nu(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ls(l))continue;const c=e[l];let u;r&&$e(r,u=Yi(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Ds(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Qe(t),c=o||nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=jo(r,l,f,c[f],n,!$e(c,f))}}return a}function jo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=$e(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ke(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Tr(r);i=c[t]=l.call(null,e),u()}}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===er(t))&&(i=!0))}return i}function Ou(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ke(n)){const u=f=>{l=!0;const[d,m]=Ou(f,e,!0);Tt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return rt(n)&&i.set(n,Hi),Hi;if(Fe(s))for(let u=0;u<s.length;u++){const f=Yi(s[u]);il(f)&&(a[f]=nt)}else if(s)for(const u in s){const f=Yi(u);if(il(f)){const d=s[u],m=a[f]=Fe(d)||ke(d)?{type:d}:Tt({},d);if(m){const x=ol(Boolean,m.type),v=ol(String,m.type);m[0]=x>-1,m[1]=v<0||x<v,(x>-1||$e(m,"default"))&&o.push(f)}}}const c=[a,o];return rt(n)&&i.set(n,c),c}function il(n){return n[0]!=="$"}function rl(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function sl(n,e){return rl(n)===rl(e)}function ol(n,e){return Fe(e)?e.findIndex(t=>sl(t,n)):ke(e)&&sl(e,n)?0:-1}const Fu=n=>n[0]==="_"||n==="$stable",Ta=n=>Fe(n)?n.map(on):[on(n)],od=(n,e,t)=>{if(e._n)return e;const i=Ah((...r)=>Ta(e(...r)),t);return i._c=!1,i},Bu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Fu(r))continue;const s=n[r];if(ke(s))e[r]=od(r,s,i);else if(s!=null){const a=Ta(s);e[r]=()=>a}}},zu=(n,e)=>{const t=Ta(e);n.slots.default=()=>t},ad=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Qe(e),ms(e,"_",t)):Bu(e,n.slots={})}else n.slots={},e&&zu(n,e);ms(n.slots,Os,1)},ld=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=nt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(Tt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Bu(e,r)),a=e}else e&&(zu(n,e),a={default:1});if(s)for(const o in r)!Fu(o)&&a[o]==null&&delete r[o]};function Ko(n,e,t,i,r=!1){if(Fe(n)){n.forEach((d,m)=>Ko(d,e&&(Fe(e)?e[m]:e),t,i,r));return}if(fs(i)&&!r)return;const s=i.shapeFlag&4?Bs(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===nt?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(ft(c)?(u[c]=null,$e(f,c)&&(f[c]=null)):zt(c)&&(c.value=null)),ke(l))Gn(l,o,12,[a,u]);else{const d=ft(l),m=zt(l),x=n.f;if(d||m){const v=()=>{if(x){const p=d?$e(f,l)?f[l]:u[l]:l.value;r?Fe(p)&&ca(p,s):Fe(p)?p.includes(s)||p.push(s):d?(u[l]=[s],$e(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=a,$e(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};r||x?v():(v.id=-1,Pt(v,t))}}}const Pt=Uh;function cd(n){return ud(n)}function ud(n,e){const t=nu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Yt,insertStaticContent:x}=n,v=(w,R,O,B=null,J=null,Q=null,g=void 0,_=null,L=!!R.dynamicChildren)=>{if(w===R)return;w&&!sr(w,R)&&(B=Te(w),he(w,J,Q,!0),w=null),R.patchFlag===-2&&(L=!1,R.dynamicChildren=null);const{type:U,ref:F,shapeFlag:V}=R;switch(U){case Ns:p(w,R,O,B);break;case fi:h(w,R,O,B);break;case to:w==null&&b(R,O,B,g);break;case Vt:ie(w,R,O,B,J,Q,g,_,L);break;default:V&1?I(w,R,O,B,J,Q,g,_,L):V&6?de(w,R,O,B,J,Q,g,_,L):(V&64||V&128)&&U.process(w,R,O,B,J,Q,g,_,L,we)}F!=null&&J&&Ko(F,w&&w.ref,Q,R||w,!R)},p=(w,R,O,B)=>{if(w==null)i(R.el=o(R.children),O,B);else{const J=R.el=w.el;R.children!==w.children&&c(J,R.children)}},h=(w,R,O,B)=>{w==null?i(R.el=l(R.children||""),O,B):R.el=w.el},b=(w,R,O,B)=>{[w.el,w.anchor]=x(w.children,R,O,B,w.el,w.anchor)},M=({el:w,anchor:R},O,B)=>{let J;for(;w&&w!==R;)J=d(w),i(w,O,B),w=J;i(R,O,B)},A=({el:w,anchor:R})=>{let O;for(;w&&w!==R;)O=d(w),r(w),w=O;r(R)},I=(w,R,O,B,J,Q,g,_,L)=>{R.type==="svg"?g="svg":R.type==="math"&&(g="mathml"),w==null?C(R,O,B,J,Q,g,_,L):E(w,R,J,Q,g,_,L)},C=(w,R,O,B,J,Q,g,_)=>{let L,U;const{props:F,shapeFlag:V,transition:se,dirs:ee}=w;if(L=w.el=a(w.type,Q,F&&F.is,F),V&8?u(L,w.children):V&16&&ne(w.children,L,null,B,J,eo(w,Q),g,_),ee&&jn(w,null,B,"created"),P(L,w,w.scopeId,g,B),F){for(const me in F)me!=="value"&&!ls(me)&&s(L,me,null,F[me],Q,w.children,B,J,Ee);"value"in F&&s(L,"value",null,F.value,Q),(U=F.onVnodeBeforeMount)&&sn(U,B,w)}ee&&jn(w,null,B,"beforeMount");const ae=fd(J,se);ae&&se.beforeEnter(L),i(L,R,O),((U=F&&F.onVnodeMounted)||ae||ee)&&Pt(()=>{U&&sn(U,B,w),ae&&se.enter(L),ee&&jn(w,null,B,"mounted")},J)},P=(w,R,O,B,J)=>{if(O&&m(w,O),B)for(let Q=0;Q<B.length;Q++)m(w,B[Q]);if(J){let Q=J.subTree;if(R===Q){const g=J.vnode;P(w,g,g.scopeId,g.slotScopeIds,J.parent)}}},ne=(w,R,O,B,J,Q,g,_,L=0)=>{for(let U=L;U<w.length;U++){const F=w[U]=_?Nn(w[U]):on(w[U]);v(null,F,R,O,B,J,Q,g,_)}},E=(w,R,O,B,J,Q,g)=>{const _=R.el=w.el;let{patchFlag:L,dynamicChildren:U,dirs:F}=R;L|=w.patchFlag&16;const V=w.props||nt,se=R.props||nt;let ee;if(O&&Kn(O,!1),(ee=se.onVnodeBeforeUpdate)&&sn(ee,O,R,w),F&&jn(R,w,O,"beforeUpdate"),O&&Kn(O,!0),U?T(w.dynamicChildren,U,_,O,B,eo(R,J),Q):g||Y(w,R,_,null,O,B,eo(R,J),Q,!1),L>0){if(L&16)Z(_,R,V,se,O,B,J);else if(L&2&&V.class!==se.class&&s(_,"class",null,se.class,J),L&4&&s(_,"style",V.style,se.style,J),L&8){const ae=R.dynamicProps;for(let me=0;me<ae.length;me++){const Se=ae[me],te=V[Se],Be=se[Se];(Be!==te||Se==="value")&&s(_,Se,te,Be,J,w.children,O,B,Ee)}}L&1&&w.children!==R.children&&u(_,R.children)}else!g&&U==null&&Z(_,R,V,se,O,B,J);((ee=se.onVnodeUpdated)||F)&&Pt(()=>{ee&&sn(ee,O,R,w),F&&jn(R,w,O,"updated")},B)},T=(w,R,O,B,J,Q,g)=>{for(let _=0;_<R.length;_++){const L=w[_],U=R[_],F=L.el&&(L.type===Vt||!sr(L,U)||L.shapeFlag&70)?f(L.el):O;v(L,U,F,null,B,J,Q,g,!0)}},Z=(w,R,O,B,J,Q,g)=>{if(O!==B){if(O!==nt)for(const _ in O)!ls(_)&&!(_ in B)&&s(w,_,O[_],null,g,R.children,J,Q,Ee);for(const _ in B){if(ls(_))continue;const L=B[_],U=O[_];L!==U&&_!=="value"&&s(w,_,U,L,g,R.children,J,Q,Ee)}"value"in B&&s(w,"value",O.value,B.value,g)}},ie=(w,R,O,B,J,Q,g,_,L)=>{const U=R.el=w?w.el:o(""),F=R.anchor=w?w.anchor:o("");let{patchFlag:V,dynamicChildren:se,slotScopeIds:ee}=R;ee&&(_=_?_.concat(ee):ee),w==null?(i(U,O,B),i(F,O,B),ne(R.children||[],O,F,J,Q,g,_,L)):V>0&&V&64&&se&&w.dynamicChildren?(T(w.dynamicChildren,se,O,J,Q,g,_),(R.key!=null||J&&R===J.subTree)&&Hu(w,R,!0)):Y(w,R,O,F,J,Q,g,_,L)},de=(w,R,O,B,J,Q,g,_,L)=>{R.slotScopeIds=_,w==null?R.shapeFlag&512?J.ctx.activate(R,O,B,g,L):N(R,O,B,J,Q,g,L):q(w,R,L)},N=(w,R,O,B,J,Q,g)=>{const _=w.component=Td(w,B,J);if(Cu(w)&&(_.ctx.renderer=we),bd(_),_.asyncDep){if(J&&J.registerDep(_,W),!w.el){const L=_.subTree=nn(fi);h(null,L,R,O)}}else W(_,w,R,O,J,Q,g)},q=(w,R,O)=>{const B=R.component=w.component;if(Ch(w,R,O))if(B.asyncDep&&!B.asyncResolved){$(B,R,O);return}else B.next=R,Mh(B.update),B.effect.dirty=!0,B.update();else R.el=w.el,B.vnode=R},W=(w,R,O,B,J,Q,g)=>{const _=()=>{if(w.isMounted){let{next:F,bu:V,u:se,parent:ee,vnode:ae}=w;{const Ne=Gu(w);if(Ne){F&&(F.el=ae.el,$(w,F,g)),Ne.asyncDep.then(()=>{w.isUnmounted||_()});return}}let me=F,Se;Kn(w,!1),F?(F.el=ae.el,$(w,F,g)):F=ae,V&&cs(V),(Se=F.props&&F.props.onVnodeBeforeUpdate)&&sn(Se,ee,F,ae),Kn(w,!0);const te=Zs(w),Be=w.subTree;w.subTree=te,v(Be,te,f(Be.el),Te(Be),w,J,Q),F.el=te.el,me===null&&Ph(w,te.el),se&&Pt(se,J),(Se=F.props&&F.props.onVnodeUpdated)&&Pt(()=>sn(Se,ee,F,ae),J)}else{let F;const{el:V,props:se}=R,{bm:ee,m:ae,parent:me}=w,Se=fs(R);if(Kn(w,!1),ee&&cs(ee),!Se&&(F=se&&se.onVnodeBeforeMount)&&sn(F,me,R),Kn(w,!0),V&&G){const te=()=>{w.subTree=Zs(w),G(V,w.subTree,w,J,null)};Se?R.type.__asyncLoader().then(()=>!w.isUnmounted&&te()):te()}else{const te=w.subTree=Zs(w);v(null,te,O,B,w,J,Q),R.el=te.el}if(ae&&Pt(ae,J),!Se&&(F=se&&se.onVnodeMounted)){const te=R;Pt(()=>sn(F,me,te),J)}(R.shapeFlag&256||me&&fs(me.vnode)&&me.vnode.shapeFlag&256)&&w.a&&Pt(w.a,J),w.isMounted=!0,R=O=B=null}},L=w.effect=new da(_,Yt,()=>Ea(U),w.scope),U=w.update=()=>{L.dirty&&L.run()};U.id=w.uid,Kn(w,!0),U()},$=(w,R,O)=>{R.component=w;const B=w.vnode.props;w.vnode=R,w.next=null,sd(w,R.props,B,O),ld(w,R.children,O),mi(),$a(w),_i()},Y=(w,R,O,B,J,Q,g,_,L=!1)=>{const U=w&&w.children,F=w?w.shapeFlag:0,V=R.children,{patchFlag:se,shapeFlag:ee}=R;if(se>0){if(se&128){oe(U,V,O,B,J,Q,g,_,L);return}else if(se&256){re(U,V,O,B,J,Q,g,_,L);return}}ee&8?(F&16&&Ee(U,J,Q),V!==U&&u(O,V)):F&16?ee&16?oe(U,V,O,B,J,Q,g,_,L):Ee(U,J,Q,!0):(F&8&&u(O,""),ee&16&&ne(V,O,B,J,Q,g,_,L))},re=(w,R,O,B,J,Q,g,_,L)=>{w=w||Hi,R=R||Hi;const U=w.length,F=R.length,V=Math.min(U,F);let se;for(se=0;se<V;se++){const ee=R[se]=L?Nn(R[se]):on(R[se]);v(w[se],ee,O,null,J,Q,g,_,L)}U>F?Ee(w,J,Q,!0,!1,V):ne(R,O,B,J,Q,g,_,L,V)},oe=(w,R,O,B,J,Q,g,_,L)=>{let U=0;const F=R.length;let V=w.length-1,se=F-1;for(;U<=V&&U<=se;){const ee=w[U],ae=R[U]=L?Nn(R[U]):on(R[U]);if(sr(ee,ae))v(ee,ae,O,null,J,Q,g,_,L);else break;U++}for(;U<=V&&U<=se;){const ee=w[V],ae=R[se]=L?Nn(R[se]):on(R[se]);if(sr(ee,ae))v(ee,ae,O,null,J,Q,g,_,L);else break;V--,se--}if(U>V){if(U<=se){const ee=se+1,ae=ee<F?R[ee].el:B;for(;U<=se;)v(null,R[U]=L?Nn(R[U]):on(R[U]),O,ae,J,Q,g,_,L),U++}}else if(U>se)for(;U<=V;)he(w[U],J,Q,!0),U++;else{const ee=U,ae=U,me=new Map;for(U=ae;U<=se;U++){const y=R[U]=L?Nn(R[U]):on(R[U]);y.key!=null&&me.set(y.key,U)}let Se,te=0;const Be=se-ae+1;let Ne=!1,Pe=0;const be=new Array(Be);for(U=0;U<Be;U++)be[U]=0;for(U=ee;U<=V;U++){const y=w[U];if(te>=Be){he(y,J,Q,!0);continue}let ce;if(y.key!=null)ce=me.get(y.key);else for(Se=ae;Se<=se;Se++)if(be[Se-ae]===0&&sr(y,R[Se])){ce=Se;break}ce===void 0?he(y,J,Q,!0):(be[ce-ae]=U+1,ce>=Pe?Pe=ce:Ne=!0,v(y,R[ce],O,null,J,Q,g,_,L),te++)}const xe=Ne?hd(be):Hi;for(Se=xe.length-1,U=Be-1;U>=0;U--){const y=ae+U,ce=R[y],Ae=y+1<F?R[y+1].el:B;be[U]===0?v(null,ce,O,Ae,J,Q,g,_,L):Ne&&(Se<0||U!==xe[Se]?fe(ce,O,Ae,2):Se--)}}},fe=(w,R,O,B,J=null)=>{const{el:Q,type:g,transition:_,children:L,shapeFlag:U}=w;if(U&6){fe(w.component.subTree,R,O,B);return}if(U&128){w.suspense.move(R,O,B);return}if(U&64){g.move(w,R,O,we);return}if(g===Vt){i(Q,R,O);for(let V=0;V<L.length;V++)fe(L[V],R,O,B);i(w.anchor,R,O);return}if(g===to){M(w,R,O);return}if(B!==2&&U&1&&_)if(B===0)_.beforeEnter(Q),i(Q,R,O),Pt(()=>_.enter(Q),J);else{const{leave:V,delayLeave:se,afterLeave:ee}=_,ae=()=>i(Q,R,O),me=()=>{V(Q,()=>{ae(),ee&&ee()})};se?se(Q,ae,me):me()}else i(Q,R,O)},he=(w,R,O,B=!1,J=!1)=>{const{type:Q,props:g,ref:_,children:L,dynamicChildren:U,shapeFlag:F,patchFlag:V,dirs:se}=w;if(_!=null&&Ko(_,null,O,w,!0),F&256){R.ctx.deactivate(w);return}const ee=F&1&&se,ae=!fs(w);let me;if(ae&&(me=g&&g.onVnodeBeforeUnmount)&&sn(me,R,w),F&6)ve(w.component,O,B);else{if(F&128){w.suspense.unmount(O,B);return}ee&&jn(w,null,R,"beforeUnmount"),F&64?w.type.remove(w,R,O,J,we,B):U&&(Q!==Vt||V>0&&V&64)?Ee(U,R,O,!1,!0):(Q===Vt&&V&384||!J&&F&16)&&Ee(L,R,O),B&&K(w)}(ae&&(me=g&&g.onVnodeUnmounted)||ee)&&Pt(()=>{me&&sn(me,R,w),ee&&jn(w,null,R,"unmounted")},O)},K=w=>{const{type:R,el:O,anchor:B,transition:J}=w;if(R===Vt){le(O,B);return}if(R===to){A(w);return}const Q=()=>{r(O),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(w.shapeFlag&1&&J&&!J.persisted){const{leave:g,delayLeave:_}=J,L=()=>g(O,Q);_?_(w.el,Q,L):L()}else Q()},le=(w,R)=>{let O;for(;w!==R;)O=d(w),r(w),w=O;r(R)},ve=(w,R,O)=>{const{bum:B,scope:J,update:Q,subTree:g,um:_}=w;B&&cs(B),J.stop(),Q&&(Q.active=!1,he(g,w,R,O)),_&&Pt(_,R),Pt(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Ee=(w,R,O,B=!1,J=!1,Q=0)=>{for(let g=Q;g<w.length;g++)he(w[g],R,O,B,J)},Te=w=>w.shapeFlag&6?Te(w.component.subTree):w.shapeFlag&128?w.suspense.next():d(w.anchor||w.el);let Ue=!1;const Ie=(w,R,O)=>{w==null?R._vnode&&he(R._vnode,null,null,!0):v(R._vnode||null,w,R,null,null,null,O),Ue||(Ue=!0,$a(),Tu(),Ue=!1),R._vnode=w},we={p:v,um:he,m:fe,r:K,mt:N,mc:ne,pc:Y,pbc:T,n:Te,o:n};let Ge,G;return e&&([Ge,G]=e(we)),{render:Ie,hydrate:Ge,createApp:nd(Ie,Ge)}}function eo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Kn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function fd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Hu(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Nn(r[s]),o.el=a.el),t||Hu(a,o)),o.type===Ns&&(o.el=a.el)}}function hd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Gu(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gu(e)}const dd=n=>n.__isTeleport,Vt=Symbol.for("v-fgt"),Ns=Symbol.for("v-txt"),fi=Symbol.for("v-cmt"),to=Symbol.for("v-stc"),dr=[];let en=null;function xn(n=!1){dr.push(en=n?null:[])}function pd(){dr.pop(),en=dr[dr.length-1]||null}let xr=1;function al(n){xr+=n}function Vu(n){return n.dynamicChildren=xr>0?en||Hi:null,pd(),xr>0&&en&&en.push(n),n}function In(n,e,t,i,r,s){return Vu(cn(n,e,t,i,r,s,!0))}function md(n,e,t,i,r){return Vu(nn(n,e,t,i,r,!0))}function _d(n){return n?n.__v_isVNode===!0:!1}function sr(n,e){return n.type===e.type&&n.key===e.key}const Os="__vInternal",ku=({key:n})=>n??null,ds=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ft(n)||zt(n)||ke(n)?{i:Ft,r:n,k:e,f:!!t}:n:null);function cn(n,e=null,t=null,i=0,r=null,s=n===Vt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ku(e),ref:e&&ds(e),scopeId:Us,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ft};return o?(ba(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ft(t)?8:16),xr>0&&!a&&en&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&en.push(l),l}const nn=gd;function gd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Lh)&&(n=fi),_d(n)){const o=ji(n,e,!0);return t&&ba(o,t),xr>0&&!s&&en&&(o.shapeFlag&6?en[en.indexOf(n)]=o:en.push(o)),o.patchFlag|=-2,o}if(Cd(n)&&(n=n.__vccOpts),e){e=vd(e);let{class:o,style:l}=e;o&&!ft(o)&&(e.class=ha(o)),rt(l)&&(vu(l)&&!Fe(l)&&(l=Tt({},l)),e.style=fa(l))}const a=ft(n)?1:Dh(n)?128:dd(n)?64:rt(n)?4:ke(n)?2:0;return cn(n,e,t,i,r,a,s,!0)}function vd(n){return n?vu(n)||Os in n?Tt({},n):n:null}function ji(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?Sd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&ku(o),ref:e&&e.ref?t&&r?Fe(r)?r.concat(ds(e)):[r,ds(e)]:ds(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Vt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ji(n.ssContent),ssFallback:n.ssFallback&&ji(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function xd(n=" ",e=0){return nn(Ns,null,n,e)}function Md(n="",e=!1){return e?(xn(),md(fi,null,n)):nn(fi,null,n)}function on(n){return n==null||typeof n=="boolean"?nn(fi):Fe(n)?nn(Vt,null,n.slice()):typeof n=="object"?Nn(n):nn(Ns,null,String(n))}function Nn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ji(n)}function ba(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ba(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Os in e)?e._ctx=Ft:r===3&&Ft&&(Ft.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:Ft},t=32):(e=String(e),i&64?(t=16,e=[xd(e)]):t=8);n.children=e,n.shapeFlag|=t}function Sd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ha([e.class,i.class]));else if(r==="style")e.style=fa([e.style,i.style]);else if(ws(r)){const s=e[r],a=i[r];a&&s!==a&&!(Fe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function sn(n,e,t,i=null){tn(n,e,7,[t,i])}const Ed=Iu();let yd=0;function Td(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Ed,s={uid:yd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ou(i,r),emitsOptions:Au(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=yh.bind(null,s),n.ce&&n.ce(s),s}let Ct=null,xs,$o;{const n=nu(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};xs=e("__VUE_INSTANCE_SETTERS__",t=>Ct=t),$o=e("__VUE_SSR_SETTERS__",t=>Fs=t)}const Tr=n=>{const e=Ct;return xs(n),n.scope.on(),()=>{n.scope.off(),xs(e)}},ll=()=>{Ct&&Ct.scope.off(),xs(null)};function Wu(n){return n.vnode.shapeFlag&4}let Fs=!1;function bd(n,e=!1){e&&$o(e);const{props:t,children:i}=n.vnode,r=Wu(n);rd(n,t,r,e),ad(n,i);const s=r?Ad(n,e):void 0;return e&&$o(!1),s}function Ad(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=xu(new Proxy(n.ctx,Kh));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Rd(n):null,s=Tr(n);mi();const a=Gn(i,n,0,[n.props,r]);if(_i(),s(),Jc(a)){if(a.then(ll,ll),e)return a.then(o=>{cl(n,o,e)}).catch(o=>{Ls(o,n,0)});n.asyncDep=a}else cl(n,a,e)}else Xu(n,e)}function cl(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:rt(e)&&(n.setupState=Su(e)),Xu(n,t)}let ul;function Xu(n,e,t){const i=n.type;if(!n.render){if(!e&&ul&&!i.render){const r=i.template||ya(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Tt(Tt({isCustomElement:s,delimiters:o},a),l);i.render=ul(r,c)}}n.render=i.render||Yt}{const r=Tr(n);mi();try{$h(n)}finally{_i(),r()}}}function wd(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Ut(n,"get","$attrs"),e[t]}}))}function Rd(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return wd(n)},slots:n.slots,emit:n.emit,expose:e}}function Bs(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Su(xu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in hr)return hr[t](n)},has(e,t){return t in e||t in hr}}))}function Cd(n){return ke(n)&&"__vccOpts"in n}const qu=(n,e)=>ph(n,e,Fs),Pd="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ld="http://www.w3.org/2000/svg",Dd="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,fl=On&&On.createElement("template"),Ud={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?On.createElementNS(Ld,n):e==="mathml"?On.createElementNS(Dd,n):On.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>On.createTextNode(n),createComment:n=>On.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>On.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{fl.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const o=fl.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Id=Symbol("_vtc");function Nd(n,e,t){const i=n[Id];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Od=Symbol("_vod"),Fd=Symbol("");function Bd(n,e,t){const i=n.style,r=i.display,s=ft(t);if(t&&!s){if(e&&!ft(e))for(const a in e)t[a]==null&&Zo(i,a,"");for(const a in t)Zo(i,a,t[a])}else if(s){if(e!==t){const a=i[Fd];a&&(t+=";"+a),i.cssText=t}}else e&&n.removeAttribute("style");Od in n&&(i.display=r)}const hl=/\s*!important$/;function Zo(n,e,t){if(Fe(t))t.forEach(i=>Zo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=zd(n,e);hl.test(t)?n.setProperty(er(i),t.replace(hl,""),"important"):n[i]=t}}const dl=["Webkit","Moz","ms"],no={};function zd(n,e){const t=no[e];if(t)return t;let i=Yi(e);if(i!=="filter"&&i in n)return no[e]=i;i=tu(i);for(let r=0;r<dl.length;r++){const s=dl[r]+i;if(s in n)return no[e]=s}return e}const pl="http://www.w3.org/1999/xlink";function Hd(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(pl,e.slice(6,e.length)):n.setAttributeNS(pl,e,t);else{const s=Wf(e);t==null||s&&!iu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Gd(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=iu(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Oi(n,e,t,i){n.addEventListener(e,t,i)}function Vd(n,e,t,i){n.removeEventListener(e,t,i)}const ml=Symbol("_vei");function kd(n,e,t,i,r=null){const s=n[ml]||(n[ml]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Wd(e);if(i){const c=s[e]=Yd(i,r);Oi(n,o,c,l)}else a&&(Vd(n,o,a,l),s[e]=void 0)}}const _l=/(?:Once|Passive|Capture)$/;function Wd(n){let e;if(_l.test(n)){e={};let i;for(;i=n.match(_l);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):er(n.slice(2)),e]}let io=0;const Xd=Promise.resolve(),qd=()=>io||(Xd.then(()=>io=0),io=Date.now());function Yd(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;tn(jd(i,t.value),e,5,[i])};return t.value=n,t.attached=qd(),t}function jd(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const gl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Kd=(n,e,t,i,r,s,a,o,l)=>{const c=r==="svg";e==="class"?Nd(n,i,c):e==="style"?Bd(n,t,i):ws(e)?la(e)||kd(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$d(n,e,i,c))?Gd(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Hd(n,e,i,c))};function $d(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&gl(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return gl(e)&&ft(t)?!1:e in n}const vl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Fe(e)?t=>cs(e,t):e};function Zd(n){n.target.composing=!0}function xl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ro=Symbol("_assign"),Jd={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[ro]=vl(r);const s=i||r.props&&r.props.type==="number";Oi(n,e?"change":"input",a=>{if(a.target.composing)return;let o=n.value;t&&(o=o.trim()),s&&(o=Bo(o)),n[ro](o)}),t&&Oi(n,"change",()=>{n.value=n.value.trim()}),e||(Oi(n,"compositionstart",Zd),Oi(n,"compositionend",xl),Oi(n,"change",xl))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:r}},s){if(n[ro]=vl(s),n.composing)return;const a=r||n.type==="number"?Bo(n.value):n.value,o=e??"";a!==o&&(document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===o)||(n.value=o))}},Qd=["ctrl","shift","alt","meta"],ep={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Qd.some(t=>n[`${t}Key`]&&!e.includes(t))},tp=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=ep[e[a]];if(o&&o(r,e))return}return n(r,...s)})},np=Tt({patchProp:Kd},Ud);let Ml;function ip(){return Ml||(Ml=cd(np))}const rp=(...n)=>{const e=ip().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=op(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,sp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function sp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function op(n){return ft(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="160",vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ap=0,Sl=1,lp=2,Yu=1,cp=2,vn=3,Xn=0,Lt=1,Mn=2,Vn=0,Wi=1,El=2,yl=3,Tl=4,up=5,ni=100,fp=101,hp=102,bl=103,Al=104,dp=200,pp=201,mp=202,_p=203,Jo=204,Qo=205,gp=206,vp=207,xp=208,Mp=209,Sp=210,Ep=211,yp=212,Tp=213,bp=214,Ap=0,wp=1,Rp=2,Ms=3,Cp=4,Pp=5,Lp=6,Dp=7,ju=0,Up=1,Ip=2,kn=0,Np=1,Op=2,Fp=3,Bp=4,zp=5,Hp=6,Ku=300,Ki=301,$i=302,ea=303,ta=304,zs=306,na=1e3,Jt=1001,ia=1002,Rt=1003,wl=1004,so=1005,kt=1006,Gp=1007,Mr=1008,Wn=1009,Vp=1010,kp=1011,wa=1012,$u=1013,Bn=1014,zn=1015,Sr=1016,Zu=1017,Ju=1018,ai=1020,Wp=1021,Qt=1023,Xp=1024,qp=1025,li=1026,Zi=1027,Yp=1028,Qu=1029,jp=1030,ef=1031,tf=1033,oo=33776,ao=33777,lo=33778,co=33779,Rl=35840,Cl=35841,Pl=35842,Ll=35843,nf=36196,Dl=37492,Ul=37496,Il=37808,Nl=37809,Ol=37810,Fl=37811,Bl=37812,zl=37813,Hl=37814,Gl=37815,Vl=37816,kl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,uo=36492,jl=36494,Kl=36495,Kp=36283,$l=36284,Zl=36285,Jl=36286,rf=3e3,ci=3001,$p=3200,Zp=3201,Jp=0,Qp=1,qt="",gt="srgb",Tn="srgb-linear",Ra="display-p3",Hs="display-p3-linear",Ss="linear",tt="srgb",Es="rec709",ys="p3",Mi=7680,Ql=519,em=512,tm=513,nm=514,sf=515,im=516,rm=517,sm=518,om=519,ec=35044,tc="300 es",ra=1035,Sn=2e3,Ts=2001;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nc=1234567;const Xi=Math.PI/180,Er=180/Math.PI;function tr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function Ca(n,e){return(n%e+e)%e}function am(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function lm(n,e,t){return n!==e?(t-n)/(e-n):0}function pr(n,e,t){return(1-t)*n+t*e}function cm(n,e,t,i){return pr(n,e,1-Math.exp(-t*i))}function um(n,e=1){return e-Math.abs(Ca(n,e*2)-e)}function fm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function hm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function dm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function pm(n,e){return n+Math.random()*(e-n)}function mm(n){return n*(.5-Math.random())}function _m(n){n!==void 0&&(nc=n);let e=nc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gm(n){return n*Xi}function vm(n){return n*Er}function sa(n){return(n&n-1)===0&&n!==0}function xm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function bs(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mm(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*x,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*x,o*c);break;case"ZYZ":n.set(l*x,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Sm={DEG2RAD:Xi,RAD2DEG:Er,generateUUID:tr,clamp:Et,euclideanModulo:Ca,mapLinear:am,inverseLerp:lm,lerp:pr,damp:cm,pingpong:um,smoothstep:fm,smootherstep:hm,randInt:dm,randFloat:pm,randFloatSpread:mm,seededRandom:_m,degToRad:gm,radToDeg:vm,isPowerOfTwo:sa,ceilPowerOfTwo:xm,floorPowerOfTwo:bs,setQuaternionFromProperEuler:Mm,normalize:At,denormalize:Fi};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],x=i[8],v=r[0],p=r[3],h=r[6],b=r[1],M=r[4],A=r[7],I=r[2],C=r[5],P=r[8];return s[0]=a*v+o*b+l*I,s[3]=a*p+o*M+l*C,s[6]=a*h+o*A+l*P,s[1]=c*v+u*b+f*I,s[4]=c*p+u*M+f*C,s[7]=c*h+u*A+f*P,s[2]=d*v+m*b+x*I,s[5]=d*p+m*M+x*C,s[8]=d*h+m*A+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=t*f+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fo.makeScale(e,t)),this}rotate(e){return this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new Ye;function of(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function As(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Em(){const n=As("canvas");return n.style.display="block",n}const ic={};function mr(n){n in ic||(ic[n]=!0,console.warn(n))}const rc=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sc=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Nr={[Tn]:{transfer:Ss,primaries:Es,toReference:n=>n,fromReference:n=>n},[gt]:{transfer:tt,primaries:Es,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Hs]:{transfer:Ss,primaries:ys,toReference:n=>n.applyMatrix3(sc),fromReference:n=>n.applyMatrix3(rc)},[Ra]:{transfer:tt,primaries:ys,toReference:n=>n.convertSRGBToLinear().applyMatrix3(sc),fromReference:n=>n.applyMatrix3(rc).convertLinearToSRGB()}},ym=new Set([Tn,Hs]),et={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ym.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Nr[e].toReference,r=Nr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Nr[n].primaries},getTransfer:function(n){return n===qt?Ss:Nr[n].transfer}};function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ho(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Si;class af{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Si===void 0&&(Si=As("canvas")),Si.width=e.width,Si.height=e.height;const i=Si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=As("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tm=0;class lf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=tr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(po(r[a].image)):s.push(po(r[a]))}else s=po(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?af.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bm=0;class Bt extends gi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=Jt,r=Jt,s=kt,a=Mr,o=Qt,l=Wn,c=Bt.DEFAULT_ANISOTROPY,u=qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=tr(),this.name="",this.source=new lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ci?gt:qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?ci:rf}set encoding(e){mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ci?gt:qt}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Ku;Bt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],x=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,A=(m+1)/2,I=(h+1)/2,C=(u+d)/4,P=(f+v)/4,ne=(x+p)/4;return M>A&&M>I?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=P/i):A>I?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=C/r,s=ne/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=P/s,r=ne/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-x)*(p-x)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-x)/b,this.y=(f-v)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Am extends gi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ci?gt:qt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Am{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cf extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wm extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(f!==v||l!==d||c!==m||u!==x){let p=1-o;const h=l*d+c*m+u*x+f*v,b=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const I=Math.sqrt(M),C=Math.atan2(I,h*b);p=Math.sin(p*C)/I,o=Math.sin(o*C)/I}const A=o*b;if(l=l*p+d*A,c=c*p+m*A,u=u*p+x*A,f=f*p+v*A,p===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*d,e[t+1]=l*x+u*d+c*f-o*m,e[t+2]=c*x+u*m+o*d-l*f,e[t+3]=u*x-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"YXZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"ZXY":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"ZYX":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"YZX":this._x=d*u*f+c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f-d*m*x;break;case"XZY":this._x=d*u*f-c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new H,oc=new di;class br{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(s,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Or.copy(i.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Fr.subVectors(this.max,or),Ei.subVectors(e.a,or),yi.subVectors(e.b,or),Ti.subVectors(e.c,or),Rn.subVectors(yi,Ei),Cn.subVectors(Ti,yi),$n.subVectors(Ei,Ti);let t=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-$n.z,$n.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,$n.z,0,-$n.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-$n.y,$n.x,0];return!_o(t,Ei,yi,Ti,Fr)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,Ei,yi,Ti,Fr))?!1:(Br.crossVectors(Rn,Cn),t=[Br.x,Br.y,Br.z],_o(t,Ei,yi,Ti,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new H,new H,new H,new H,new H,new H,new H,new H],jt=new H,Or=new br,Ei=new H,yi=new H,Ti=new H,Rn=new H,Cn=new H,$n=new H,or=new H,Fr=new H,Br=new H,Zn=new H;function _o(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Zn.fromArray(n,s);const o=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Rm=new br,ar=new H,go=new H;class Gs{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(go)),this.expandByPoint(ar.copy(e.center).sub(go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new H,vo=new H,zr=new H,Pn=new H,xo=new H,Hr=new H,Mo=new H;class Pa{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){vo.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(vo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=Pn.dot(this.direction),l=-Pn.dot(zr),c=Pn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const v=1/u;f*=v,d*=v,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(vo).addScaledVector(zr,d),m}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const i=pn.dot(this.direction),r=pn.dot(pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,i,r,s){xo.subVectors(t,e),Hr.subVectors(i,e),Mo.crossVectors(xo,Hr);let a=this.direction.dot(Mo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,e);const l=o*this.direction.dot(Hr.crossVectors(Pn,Hr));if(l<0)return null;const c=o*this.direction.dot(xo.cross(Pn));if(c<0||l+c>a)return null;const u=-o*Pn.dot(Mo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p)}set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=x,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,x=c*u,v=c*f;t[0]=d+v*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,x=c*u,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=v-d*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cm,e,Pm)}lookAt(e,t,i){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Ln.crossVectors(i,Nt),Ln.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Ln.crossVectors(i,Nt)),Ln.normalize(),Gr.crossVectors(Nt,Ln),r[0]=Ln.x,r[4]=Gr.x,r[8]=Nt.x,r[1]=Ln.y,r[5]=Gr.y,r[9]=Nt.y,r[2]=Ln.z,r[6]=Gr.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],x=i[2],v=i[6],p=i[10],h=i[14],b=i[3],M=i[7],A=i[11],I=i[15],C=r[0],P=r[4],ne=r[8],E=r[12],T=r[1],Z=r[5],ie=r[9],de=r[13],N=r[2],q=r[6],W=r[10],$=r[14],Y=r[3],re=r[7],oe=r[11],fe=r[15];return s[0]=a*C+o*T+l*N+c*Y,s[4]=a*P+o*Z+l*q+c*re,s[8]=a*ne+o*ie+l*W+c*oe,s[12]=a*E+o*de+l*$+c*fe,s[1]=u*C+f*T+d*N+m*Y,s[5]=u*P+f*Z+d*q+m*re,s[9]=u*ne+f*ie+d*W+m*oe,s[13]=u*E+f*de+d*$+m*fe,s[2]=x*C+v*T+p*N+h*Y,s[6]=x*P+v*Z+p*q+h*re,s[10]=x*ne+v*ie+p*W+h*oe,s[14]=x*E+v*de+p*$+h*fe,s[3]=b*C+M*T+A*N+I*Y,s[7]=b*P+M*Z+A*q+I*re,s[11]=b*ne+M*ie+A*W+I*oe,s[15]=b*E+M*de+A*$+I*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+v*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],h=e[15],b=f*p*c-v*d*c+v*l*m-o*p*m-f*l*h+o*d*h,M=x*d*c-u*p*c-x*l*m+a*p*m+u*l*h-a*d*h,A=u*v*c-x*f*c+x*o*m-a*v*m-u*o*h+a*f*h,I=x*f*l-u*v*l-x*o*d+a*v*d+u*o*p-a*f*p,C=t*b+i*M+r*A+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=b*P,e[1]=(v*d*s-f*p*s-v*r*m+i*p*m+f*r*h-i*d*h)*P,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*h+i*l*h)*P,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*P,e[4]=M*P,e[5]=(u*p*s-x*d*s+x*r*m-t*p*m-u*r*h+t*d*h)*P,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*h-t*l*h)*P,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*P,e[8]=A*P,e[9]=(x*f*s-u*v*s-x*i*m+t*v*m+u*i*h-t*f*h)*P,e[10]=(a*v*s-x*o*s+x*i*c-t*v*c-a*i*h+t*o*h)*P,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*P,e[12]=I*P,e[13]=(u*v*r-x*f*r+x*i*d-t*v*d-u*i*p+t*f*p)*P,e[14]=(x*o*r-a*v*r-x*i*l+t*v*l+a*i*p-t*o*p)*P,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,x=s*f,v=a*u,p=a*f,h=o*f,b=l*c,M=l*u,A=l*f,I=i.x,C=i.y,P=i.z;return r[0]=(1-(v+h))*I,r[1]=(m+A)*I,r[2]=(x-M)*I,r[3]=0,r[4]=(m-A)*C,r[5]=(1-(d+h))*C,r[6]=(p+b)*C,r[7]=0,r[8]=(x+M)*P,r[9]=(p-b)*P,r[10]=(1-(d+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=bi.set(r[0],r[1],r[2]).length();const a=bi.set(r[4],r[5],r[6]).length(),o=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kt.copy(this);const c=1/s,u=1/a,f=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=f,Kt.elements[9]*=f,Kt.elements[10]*=f,t.setFromRotationMatrix(Kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Sn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,x;if(o===Sn)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ts)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Sn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*c,m=(i+r)*u;let x,v;if(o===Sn)x=(a+s)*f,v=-2*f;else if(o===Ts)x=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const bi=new H,Kt=new _t,Cm=new H(0,0,0),Pm=new H(1,1,1),Ln=new H,Gr=new H,Nt=new H,ac=new _t,lc=new di;class Vs{constructor(e=0,t=0,i=0,r=Vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ac,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vs.DEFAULT_ORDER="XYZ";class uf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lm=0;const cc=new H,Ai=new di,mn=new _t,Vr=new H,lr=new H,Dm=new H,Um=new di,uc=new H(1,0,0),fc=new H(0,1,0),hc=new H(0,0,1),Im={type:"added"},Nm={type:"removed"};class Dt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new H,t=new Vs,i=new di,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ye}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(uc,e)}rotateY(e){return this.rotateOnAxis(fc,e)}rotateZ(e){return this.rotateOnAxis(hc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uc,e)}translateY(e){return this.translateOnAxis(fc,e)}translateZ(e){return this.translateOnAxis(hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vr.copy(e):Vr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(lr,Vr,this.up):mn.lookAt(Vr,lr,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(mn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Im)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Dm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new H(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new H,_n=new H,So=new H,gn=new H,wi=new H,Ri=new H,dc=new H,Eo=new H,yo=new H,To=new H;let kr=!1;class Wt{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$t.subVectors(e,t),r.cross($t);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$t.subVectors(r,t),_n.subVectors(i,t),So.subVectors(e,t);const a=$t.dot($t),o=$t.dot(_n),l=$t.dot(So),c=_n.dot(_n),u=_n.dot(So),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,i,r,s,a,o,l){return kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kr=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l)}static isFrontFacing(e,t,i,r){return $t.subVectors(i,t),_n.subVectors(e,t),$t.cross(_n).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),$t.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kr=!0),Wt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;wi.subVectors(r,i),Ri.subVectors(s,i),Eo.subVectors(e,i);const l=wi.dot(Eo),c=Ri.dot(Eo);if(l<=0&&c<=0)return t.copy(i);yo.subVectors(e,r);const u=wi.dot(yo),f=Ri.dot(yo);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(wi,a);To.subVectors(e,s);const m=wi.dot(To),x=Ri.dot(To);if(x>=0&&m<=x)return t.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Ri,o);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return dc.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(dc,o);const h=1/(p+v+d);return a=v*h,o=d*h,t.copy(i).addScaledVector(wi,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function bo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Ca(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=bo(a,s,e+1/3),this.g=bo(a,s,e),this.b=bo(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=gt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const i=ff[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return et.fromWorkingColorSpace(St.copy(this),e),Math.round(Et(St.r*255,0,255))*65536+Math.round(Et(St.g*255,0,255))*256+Math.round(Et(St.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(St.copy(this),t);const i=St.r,r=St.g,s=St.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=gt){et.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Wr);const i=pr(Dn.h,Wr.h,t),r=pr(Dn.s,Wr.s,t),s=pr(Dn.l,Wr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Je;Je.NAMES=ff;let Om=0;class Ar extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Wi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(i.blending=this.blending),this.side!==Xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jo&&(i.blendSrc=this.blendSrc),this.blendDst!==Qo&&(i.blendDst=this.blendDst),this.blendEquation!==ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class La extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new H,Xr=new Xe;class un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ec&&(e.usage=this.usage),e}}class hf extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class df extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fn extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fm=0;const Gt=new _t,Ao=new Dt,Ci=new H,Ot=new br,cr=new br,mt=new H;class An extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?df:hf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Ot.min,cr.min),Ot.expandByPoint(mt),mt.addVectors(Ot.max,cr.max),Ot.expandByPoint(mt)):(Ot.expandByPoint(cr.min),Ot.expandByPoint(cr.max))}Ot.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mt.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),mt.add(Ci)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new H,u[T]=new H;const f=new H,d=new H,m=new H,x=new Xe,v=new Xe,p=new Xe,h=new H,b=new H;function M(T,Z,ie){f.fromArray(r,T*3),d.fromArray(r,Z*3),m.fromArray(r,ie*3),x.fromArray(a,T*2),v.fromArray(a,Z*2),p.fromArray(a,ie*2),d.sub(f),m.sub(f),v.sub(x),p.sub(x);const de=1/(v.x*p.y-p.x*v.y);isFinite(de)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(de),b.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(de),c[T].add(h),c[Z].add(h),c[ie].add(h),u[T].add(b),u[Z].add(b),u[ie].add(b))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let T=0,Z=A.length;T<Z;++T){const ie=A[T],de=ie.start,N=ie.count;for(let q=de,W=de+N;q<W;q+=3)M(i[q+0],i[q+1],i[q+2])}const I=new H,C=new H,P=new H,ne=new H;function E(T){P.fromArray(s,T*3),ne.copy(P);const Z=c[T];I.copy(Z),I.sub(P.multiplyScalar(P.dot(Z))).normalize(),C.crossVectors(ne,Z);const de=C.dot(u[T])<0?-1:1;l[T*4]=I.x,l[T*4+1]=I.y,l[T*4+2]=I.z,l[T*4+3]=de}for(let T=0,Z=A.length;T<Z;++T){const ie=A[T],de=ie.start,N=ie.count;for(let q=de,W=de+N;q<W;q+=3)E(i[q+0]),E(i[q+1]),E(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let h=0;h<u;h++)d[x++]=c[m++]}return new un(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new An,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pc=new _t,Jn=new Pa,qr=new Gs,mc=new H,Pi=new H,Li=new H,Di=new H,wo=new H,Yr=new H,jr=new Xe,Kr=new Xe,$r=new Xe,_c=new H,gc=new H,vc=new H,Zr=new H,Jr=new H;class En extends Dt{constructor(e=new An,t=new La){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Yr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(wo.fromBufferAttribute(f,e),a?Yr.addScaledVector(wo,u):Yr.addScaledVector(wo.sub(t),u))}t.add(Yr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(s),Jn.copy(e.ray).recast(e.near),!(qr.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(qr,mc)===null||Jn.origin.distanceToSquared(mc)>(e.far-e.near)**2))&&(pc.copy(s).invert(),Jn.copy(e.ray).applyMatrix4(pc),!(i.boundingBox!==null&&Jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],h=a[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,I=M;A<I;A+=3){const C=o.getX(A),P=o.getX(A+1),ne=o.getX(A+2);r=Qr(this,h,e,i,c,u,f,C,P,ne),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=x,h=v;p<h;p+=3){const b=o.getX(p),M=o.getX(p+1),A=o.getX(p+2);r=Qr(this,a,e,i,c,u,f,b,M,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],h=a[p.materialIndex],b=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,I=M;A<I;A+=3){const C=A,P=A+1,ne=A+2;r=Qr(this,h,e,i,c,u,f,C,P,ne),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,h=v;p<h;p+=3){const b=p,M=p+1,A=p+2;r=Qr(this,a,e,i,c,u,f,b,M,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Bm(n,e,t,i,r,s,a,o){let l;if(e.side===Lt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Xn,o),l===null)return null;Jr.copy(o),Jr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Jr);return c<t.near||c>t.far?null:{distance:c,point:Jr.clone(),object:n}}function Qr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Pi),n.getVertexPosition(l,Li),n.getVertexPosition(c,Di);const u=Bm(n,e,t,i,Pi,Li,Di,Zr);if(u){r&&(jr.fromBufferAttribute(r,o),Kr.fromBufferAttribute(r,l),$r.fromBufferAttribute(r,c),u.uv=Wt.getInterpolation(Zr,Pi,Li,Di,jr,Kr,$r,new Xe)),s&&(jr.fromBufferAttribute(s,o),Kr.fromBufferAttribute(s,l),$r.fromBufferAttribute(s,c),u.uv1=Wt.getInterpolation(Zr,Pi,Li,Di,jr,Kr,$r,new Xe),u.uv2=u.uv1),a&&(_c.fromBufferAttribute(a,o),gc.fromBufferAttribute(a,l),vc.fromBufferAttribute(a,c),u.normal=Wt.getInterpolation(Zr,Pi,Li,Di,_c,gc,vc,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};Wt.getNormal(Pi,Li,Di,f.normal),u.face=f}return u}class nr extends An{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(f,2));function x(v,p,h,b,M,A,I,C,P,ne,E){const T=A/P,Z=I/ne,ie=A/2,de=I/2,N=C/2,q=P+1,W=ne+1;let $=0,Y=0;const re=new H;for(let oe=0;oe<W;oe++){const fe=oe*Z-de;for(let he=0;he<q;he++){const K=he*T-ie;re[v]=K*b,re[p]=fe*M,re[h]=N,c.push(re.x,re.y,re.z),re[v]=0,re[p]=0,re[h]=C>0?1:-1,u.push(re.x,re.y,re.z),f.push(he/P),f.push(1-oe/ne),$+=1}}for(let oe=0;oe<ne;oe++)for(let fe=0;fe<P;fe++){const he=d+fe+q*oe,K=d+fe+q*(oe+1),le=d+(fe+1)+q*(oe+1),ve=d+(fe+1)+q*oe;l.push(he,K,ve),l.push(K,le,ve),Y+=6}o.addGroup(m,Y,E),m+=Y,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function wt(n){const e={};for(let t=0;t<n.length;t++){const i=Ji(n[t]);for(const r in i)e[r]=i[r]}return e}function zm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pf(n){return n.getRenderTarget()===null?n.outputColorSpace:et.workingColorSpace}const Hm={clone:Ji,merge:wt};var Gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gm,this.fragmentShader=Vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mf extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends mf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Ii=1;class km extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt(Ui,Ii,e,t);r.layers=this.layers,this.add(r);const s=new Xt(Ui,Ii,e,t);s.layers=this.layers,this.add(s);const a=new Xt(Ui,Ii,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Ui,Ii,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Ui,Ii,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Ui,Ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Sn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ts)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class _f extends Bt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wm extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ci?gt:qt),this.texture=new _f(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new nr(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:Vn});s.uniforms.tEquirect.value=t;const a=new En(r,s),o=t.minFilter;return t.minFilter===Mr&&(t.minFilter=kt),new km(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ro=new H,Xm=new H,qm=new Ye;class Fn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ro.subVectors(i,t).cross(Xm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qm.getNormalMatrix(e),r=this.coplanarPoint(Ro).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Gs,es=new H;class gf{constructor(e=new Fn,t=new Fn,i=new Fn,r=new Fn,s=new Fn,a=new Fn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Sn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],v=r[10],p=r[11],h=r[12],b=r[13],M=r[14],A=r[15];if(i[0].setComponents(l-s,d-c,p-m,A-h).normalize(),i[1].setComponents(l+s,d+c,p+m,A+h).normalize(),i[2].setComponents(l+a,d+u,p+x,A+b).normalize(),i[3].setComponents(l-a,d-u,p-x,A-b).normalize(),i[4].setComponents(l-o,d-f,p-v,A-M).normalize(),t===Sn)i[5].setComponents(l+o,d+f,p+v,A+M).normalize();else if(t===Ts)i[5].setComponents(o,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(es.x=r.normal.x>0?e.max.x:e.min.x,es.y=r.normal.y>0?e.max.y:e.min.y,es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ym(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=f.byteLength,x=n.createBuffer();n.bindBuffer(u,x),n.bufferData(u,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,f){const d=u.array,m=u._updateRange,x=u.updateRanges;if(n.bindBuffer(f,c),m.count===-1&&x.length===0&&n.bufferSubData(f,0,d),x.length!==0){for(let v=0,p=x.length;v<p;v++){const h=x[v];t?n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class Da extends An{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],x=[],v=[],p=[];for(let h=0;h<u;h++){const b=h*d-a;for(let M=0;M<c;M++){const A=M*f-s;x.push(A,-b,0),v.push(0,0,1),p.push(M/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const M=b+c*h,A=b+c*(h+1),I=b+1+c*(h+1),C=b+1+c*h;m.push(M,A,C),m.push(A,I,C)}this.setIndex(m),this.setAttribute("position",new fn(x,3)),this.setAttribute("normal",new fn(v,3)),this.setAttribute("uv",new fn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.widthSegments,e.heightSegments)}}var jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,a_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,g_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,v_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T_="gl_FragColor = linearToOutputTexel( gl_FragColor );",b_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,A_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,L_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,F_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,G_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,V_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ev=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,av=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_v=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:jm,alphahash_pars_fragment:Km,alphamap_fragment:$m,alphamap_pars_fragment:Zm,alphatest_fragment:Jm,alphatest_pars_fragment:Qm,aomap_fragment:e_,aomap_pars_fragment:t_,batching_pars_vertex:n_,batching_vertex:i_,begin_vertex:r_,beginnormal_vertex:s_,bsdfs:o_,iridescence_fragment:a_,bumpmap_pars_fragment:l_,clipping_planes_fragment:c_,clipping_planes_pars_fragment:u_,clipping_planes_pars_vertex:f_,clipping_planes_vertex:h_,color_fragment:d_,color_pars_fragment:p_,color_pars_vertex:m_,color_vertex:__,common:g_,cube_uv_reflection_fragment:v_,defaultnormal_vertex:x_,displacementmap_pars_vertex:M_,displacementmap_vertex:S_,emissivemap_fragment:E_,emissivemap_pars_fragment:y_,colorspace_fragment:T_,colorspace_pars_fragment:b_,envmap_fragment:A_,envmap_common_pars_fragment:w_,envmap_pars_fragment:R_,envmap_pars_vertex:C_,envmap_physical_pars_fragment:G_,envmap_vertex:P_,fog_vertex:L_,fog_pars_vertex:D_,fog_fragment:U_,fog_pars_fragment:I_,gradientmap_pars_fragment:N_,lightmap_fragment:O_,lightmap_pars_fragment:F_,lights_lambert_fragment:B_,lights_lambert_pars_fragment:z_,lights_pars_begin:H_,lights_toon_fragment:V_,lights_toon_pars_fragment:k_,lights_phong_fragment:W_,lights_phong_pars_fragment:X_,lights_physical_fragment:q_,lights_physical_pars_fragment:Y_,lights_fragment_begin:j_,lights_fragment_maps:K_,lights_fragment_end:$_,logdepthbuf_fragment:Z_,logdepthbuf_pars_fragment:J_,logdepthbuf_pars_vertex:Q_,logdepthbuf_vertex:eg,map_fragment:tg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:rg,metalnessmap_fragment:sg,metalnessmap_pars_fragment:og,morphcolor_vertex:ag,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:ug,normal_fragment_begin:fg,normal_fragment_maps:hg,normal_pars_fragment:dg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:gg,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:xg,iridescence_pars_fragment:Mg,opaque_fragment:Sg,packing:Eg,premultiplied_alpha_fragment:yg,project_vertex:Tg,dithering_fragment:bg,dithering_pars_fragment:Ag,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Dg,skinbase_vertex:Ug,skinning_pars_vertex:Ig,skinning_vertex:Ng,skinnormal_vertex:Og,specularmap_fragment:Fg,specularmap_pars_fragment:Bg,tonemapping_fragment:zg,tonemapping_pars_fragment:Hg,transmission_fragment:Gg,transmission_pars_fragment:Vg,uv_pars_fragment:kg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:jg,backgroundCube_vert:Kg,backgroundCube_frag:$g,cube_vert:Zg,cube_frag:Jg,depth_vert:Qg,depth_frag:ev,distanceRGBA_vert:tv,distanceRGBA_frag:nv,equirect_vert:iv,equirect_frag:rv,linedashed_vert:sv,linedashed_frag:ov,meshbasic_vert:av,meshbasic_frag:lv,meshlambert_vert:cv,meshlambert_frag:uv,meshmatcap_vert:fv,meshmatcap_frag:hv,meshnormal_vert:dv,meshnormal_frag:pv,meshphong_vert:mv,meshphong_frag:_v,meshphysical_vert:gv,meshphysical_frag:vv,meshtoon_vert:xv,meshtoon_frag:Mv,points_vert:Sv,points_frag:Ev,shadow_vert:yv,shadow_frag:Tv,sprite_vert:bv,sprite_frag:Av},_e={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},an={basic:{uniforms:wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:wt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:wt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:wt([_e.points,_e.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:wt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:wt([_e.common,_e.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:wt([_e.sprite,_e.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:wt([_e.common,_e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:wt([_e.lights,_e.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};an.physical={uniforms:wt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ts={r:0,b:0,g:0};function wv(n,e,t,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function x(p,h){let b=!1,M=h.isScene===!0?h.background:null;M&&M.isTexture&&(M=(h.backgroundBlurriness>0?t:e).get(M)),M===null?v(o,l):M&&M.isColor&&(v(M,1),b=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===zs)?(u===void 0&&(u=new En(new nr(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Ji(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=et.getTransfer(M.colorSpace)!==tt,(f!==M||d!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new En(new Da(2,2),new pi({name:"BackgroundMaterial",uniforms:Ji(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,h){p.getRGB(ts,pf(n)),i.buffers.color.setClear(ts.r,ts.g,ts.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:x}}function Rv(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(N,q,W,$,Y){let re=!1;if(a){const oe=v($,W,q);c!==oe&&(c=oe,m(c.object)),re=h(N,$,W,Y),re&&b(N,$,W,Y)}else{const oe=q.wireframe===!0;(c.geometry!==$.id||c.program!==W.id||c.wireframe!==oe)&&(c.geometry=$.id,c.program=W.id,c.wireframe=oe,re=!0)}Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,ne(N,q,W,$),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function v(N,q,W){const $=W.wireframe===!0;let Y=o[N.id];Y===void 0&&(Y={},o[N.id]=Y);let re=Y[q.id];re===void 0&&(re={},Y[q.id]=re);let oe=re[$];return oe===void 0&&(oe=p(d()),re[$]=oe),oe}function p(N){const q=[],W=[],$=[];for(let Y=0;Y<r;Y++)q[Y]=0,W[Y]=0,$[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:W,attributeDivisors:$,object:N,attributes:{},index:null}}function h(N,q,W,$){const Y=c.attributes,re=q.attributes;let oe=0;const fe=W.getAttributes();for(const he in fe)if(fe[he].location>=0){const le=Y[he];let ve=re[he];if(ve===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor)),le===void 0||le.attribute!==ve||ve&&le.data!==ve.data)return!0;oe++}return c.attributesNum!==oe||c.index!==$}function b(N,q,W,$){const Y={},re=q.attributes;let oe=0;const fe=W.getAttributes();for(const he in fe)if(fe[he].location>=0){let le=re[he];le===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(le=N.instanceColor));const ve={};ve.attribute=le,le&&le.data&&(ve.data=le.data),Y[he]=ve,oe++}c.attributes=Y,c.attributesNum=oe,c.index=$}function M(){const N=c.newAttributes;for(let q=0,W=N.length;q<W;q++)N[q]=0}function A(N){I(N,0)}function I(N,q){const W=c.newAttributes,$=c.enabledAttributes,Y=c.attributeDivisors;W[N]=1,$[N]===0&&(n.enableVertexAttribArray(N),$[N]=1),Y[N]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,q),Y[N]=q)}function C(){const N=c.newAttributes,q=c.enabledAttributes;for(let W=0,$=q.length;W<$;W++)q[W]!==N[W]&&(n.disableVertexAttribArray(W),q[W]=0)}function P(N,q,W,$,Y,re,oe){oe===!0?n.vertexAttribIPointer(N,q,W,Y,re):n.vertexAttribPointer(N,q,W,$,Y,re)}function ne(N,q,W,$){if(i.isWebGL2===!1&&(N.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Y=$.attributes,re=W.getAttributes(),oe=q.defaultAttributeValues;for(const fe in re){const he=re[fe];if(he.location>=0){let K=Y[fe];if(K===void 0&&(fe==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),fe==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){const le=K.normalized,ve=K.itemSize,Ee=t.get(K);if(Ee===void 0)continue;const Te=Ee.buffer,Ue=Ee.type,Ie=Ee.bytesPerElement,we=i.isWebGL2===!0&&(Ue===n.INT||Ue===n.UNSIGNED_INT||K.gpuType===$u);if(K.isInterleavedBufferAttribute){const Ge=K.data,G=Ge.stride,w=K.offset;if(Ge.isInstancedInterleavedBuffer){for(let R=0;R<he.locationSize;R++)I(he.location+R,Ge.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let R=0;R<he.locationSize;R++)A(he.location+R);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let R=0;R<he.locationSize;R++)P(he.location+R,ve/he.locationSize,Ue,le,G*Ie,(w+ve/he.locationSize*R)*Ie,we)}else{if(K.isInstancedBufferAttribute){for(let Ge=0;Ge<he.locationSize;Ge++)I(he.location+Ge,K.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ge=0;Ge<he.locationSize;Ge++)A(he.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let Ge=0;Ge<he.locationSize;Ge++)P(he.location+Ge,ve/he.locationSize,Ue,le,ve*Ie,ve/he.locationSize*Ge*Ie,we)}}else if(oe!==void 0){const le=oe[fe];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(he.location,le);break;case 3:n.vertexAttrib3fv(he.location,le);break;case 4:n.vertexAttrib4fv(he.location,le);break;default:n.vertexAttrib1fv(he.location,le)}}}}C()}function E(){ie();for(const N in o){const q=o[N];for(const W in q){const $=q[W];for(const Y in $)x($[Y].object),delete $[Y];delete q[W]}delete o[N]}}function T(N){if(o[N.id]===void 0)return;const q=o[N.id];for(const W in q){const $=q[W];for(const Y in $)x($[Y].object),delete $[Y];delete q[W]}delete o[N.id]}function Z(N){for(const q in o){const W=o[q];if(W[N.id]===void 0)continue;const $=W[N.id];for(const Y in $)x($[Y].object),delete $[Y];delete W[N.id]}}function ie(){de(),u=!0,c!==l&&(c=l,m(c.object))}function de(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ie,resetDefaultState:de,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:Z,initAttributes:M,enableAttribute:A,disableUnusedAttributes:C}}function Cv(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,d){if(d===0)return;let m,x;if(r)m=n,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,u,f,d),t.update(f,s,d)}function c(u,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<d;x++)this.render(u[x],f[x]);else{m.multiDrawArraysWEBGL(s,u,0,f,0,d);let x=0;for(let v=0;v<d;v++)x+=f[v];t.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Pv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,A=a||e.has("OES_texture_float"),I=M&&A,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:A,floatVertexTextures:I,maxSamples:C}}function Lv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Fn,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,M=b*4;let A=h.clippingState||null;l.value=A,A=u(x,d,M,m);for(let I=0;I!==M;++I)A[I]=t[I];h.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,x){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const h=m+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let M=0,A=m;M!==v;++M,A+=4)a.copy(f[M]).applyMatrix4(b,o),a.normal.toArray(p,A),p[A+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Dv(n){let e=new WeakMap;function t(a,o){return o===ea?a.mapping=Ki:o===ta&&(a.mapping=$i),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ea||o===ta)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wm(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Uv extends mf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bi=4,xc=[.125,.215,.35,.446,.526,.582],ii=20,Co=new Uv,Mc=new Je;let Po=null,Lo=0,Do=0;const ei=(1+Math.sqrt(5))/2,Ni=1/ei,Sc=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,ei,Ni),new H(0,ei,-Ni),new H(Ni,0,ei),new H(-Ni,0,ei),new H(ei,Ni,0),new H(-ei,Ni,0)];class Ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Po=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Po,Lo,Do),e.scissorTest=!1,ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Po=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Sr,format:Qt,colorSpace:Tn,depthBuffer:!1},r=yc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iv(s)),this._blurMaterial=Nv(s,e,t)}return r}_compileMaterial(e){const t=new En(this._lodPlanes[0],e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,i,r){const o=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Mc),u.toneMapping=kn,u.autoClear=!1;const m=new La({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),x=new En(new nr,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Mc),v=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const M=this._cubeSize;ns(r,b*M,h>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ki||e.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new En(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ns(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Co)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sc[(r-1)%Sc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new En(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ii-1),v=s/x,p=isFinite(s)?1+Math.floor(u*v):ii;p>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ii}`);const h=[];let b=0;for(let P=0;P<ii;++P){const ne=P/v,E=Math.exp(-ne*ne/2);h.push(E),P===0?b+=E:P<p&&(b+=2*E)}for(let P=0;P<h.length;P++)h[P]=h[P]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=x,d.mipInt.value=M-i;const A=this._sizeLods[r],I=3*A*(r>M-Bi?r-M+Bi:0),C=4*(this._cubeSize-A);ns(t,I,C,3*A,2*A),l.setRenderTarget(t),l.render(f,Co)}}function Iv(n){const e=[],t=[],i=[];let r=n;const s=n-Bi+1+xc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Bi?l=xc[a-n+Bi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,v=3,p=2,h=1,b=new Float32Array(v*x*m),M=new Float32Array(p*x*m),A=new Float32Array(h*x*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,ne=C>2?0:-1,E=[P,ne,0,P+2/3,ne,0,P+2/3,ne+1,0,P,ne,0,P+2/3,ne+1,0,P,ne+1,0];b.set(E,v*x*C),M.set(d,p*x*C);const T=[C,C,C,C,C,C];A.set(T,h*x*C)}const I=new An;I.setAttribute("position",new un(b,v)),I.setAttribute("uv",new un(M,p)),I.setAttribute("faceIndex",new un(A,h)),e.push(I),r>Bi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yc(n,e,t){const i=new hi(n,e,t);return i.texture.mapping=zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ns(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Nv(n,e,t){const i=new Float32Array(ii),r=new H(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Tc(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function bc(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ov(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ea||l===ta,u=l===Ki||l===$i;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ec(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Ec(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Fv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bv(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const v=m[x];for(let p=0,h=v.length;p<h;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,x=f.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let M=0,A=b.length;M<A;M+=3){const I=b[M+0],C=b[M+1],P=b[M+2];d.push(I,C,C,P,P,I)}}else if(x!==void 0){const b=x.array;v=x.version;for(let M=0,A=b.length/3-1;M<A;M+=3){const I=M+0,C=M+1,P=M+2;d.push(I,C,C,P,P,I)}}else return;const p=new(of(d)?df:hf)(d,1);p.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function zv(n,e,t,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,x){n.drawElements(s,x,o,m*l),t.update(x,s,1)}function f(m,x,v){if(v===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,x,o,m*l,v),t.update(x,s,v)}function d(m,x,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<v;h++)this.render(m[h]/l,x[h]);else{p.multiDrawElementsWEBGL(s,x,0,o,m,0,v);let h=0;for(let b=0;b<v;b++)h+=x[b];t.update(h,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function Hv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Gv(n,e){return n[0]-e[0]}function Vv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function kv(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let q=function(){de.dispose(),s.delete(u),u.removeEventListener("dispose",q)};var m=q;p!==void 0&&p.texture.dispose();const M=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],ne=u.morphAttributes.color||[];let E=0;M===!0&&(E=1),A===!0&&(E=2),I===!0&&(E=3);let T=u.attributes.position.count*E,Z=1;T>e.maxTextureSize&&(Z=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const ie=new Float32Array(T*Z*4*v),de=new cf(ie,T,Z,v);de.type=zn,de.needsUpdate=!0;const N=E*4;for(let W=0;W<v;W++){const $=C[W],Y=P[W],re=ne[W],oe=T*Z*4*W;for(let fe=0;fe<$.count;fe++){const he=fe*N;M===!0&&(a.fromBufferAttribute($,fe),ie[oe+he+0]=a.x,ie[oe+he+1]=a.y,ie[oe+he+2]=a.z,ie[oe+he+3]=0),A===!0&&(a.fromBufferAttribute(Y,fe),ie[oe+he+4]=a.x,ie[oe+he+5]=a.y,ie[oe+he+6]=a.z,ie[oe+he+7]=0),I===!0&&(a.fromBufferAttribute(re,fe),ie[oe+he+8]=a.x,ie[oe+he+9]=a.y,ie[oe+he+10]=a.z,ie[oe+he+11]=re.itemSize===4?a.w:1)}}p={count:v,texture:de,size:new Xe(T,Z)},s.set(u,p),u.addEventListener("dispose",q)}let h=0;for(let M=0;M<d.length;M++)h+=d[M];const b=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==x){v=[];for(let A=0;A<x;A++)v[A]=[A,0];i[u.id]=v}for(let A=0;A<x;A++){const I=v[A];I[0]=A,I[1]=d[A]}v.sort(Vv);for(let A=0;A<8;A++)A<x&&v[A][1]?(o[A][0]=v[A][0],o[A][1]=v[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(Gv);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let b=0;for(let A=0;A<8;A++){const I=o[A],C=I[0],P=I[1];C!==Number.MAX_SAFE_INTEGER&&P?(p&&u.getAttribute("morphTarget"+A)!==p[C]&&u.setAttribute("morphTarget"+A,p[C]),h&&u.getAttribute("morphNormal"+A)!==h[C]&&u.setAttribute("morphNormal"+A,h[C]),r[A]=P,b+=P):(p&&u.hasAttribute("morphTarget"+A)===!0&&u.deleteAttribute("morphTarget"+A),h&&u.hasAttribute("morphNormal"+A)===!0&&u.deleteAttribute("morphNormal"+A),r[A]=0)}const M=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Wv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class xf extends Bt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:li,u!==li&&u!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===li&&(i=Bn),i===void 0&&u===Zi&&(i=ai),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mf=new Bt,Sf=new xf(1,1);Sf.compareFunction=sf;const Ef=new cf,yf=new wm,Tf=new _f,Ac=[],wc=[],Rc=new Float32Array(16),Cc=new Float32Array(9),Pc=new Float32Array(4);function ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ac[r];if(s===void 0&&(s=new Float32Array(r),Ac[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ks(n,e){let t=wc[e];t===void 0&&(t=new Int32Array(e),wc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),dt(t,e)}}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),dt(t,e)}}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),dt(t,e)}}function Kv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;Pc.set(i),n.uniformMatrix2fv(this.addr,!1,Pc),dt(t,i)}}function $v(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;Cc.set(i),n.uniformMatrix3fv(this.addr,!1,Cc),dt(t,i)}}function Zv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;Rc.set(i),n.uniformMatrix4fv(this.addr,!1,Rc),dt(t,i)}}function Jv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),dt(t,e)}}function ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),dt(t,e)}}function tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),dt(t,e)}}function nx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),dt(t,e)}}function rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),dt(t,e)}}function sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),dt(t,e)}}function ox(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Sf:Mf;t.setTexture2D(e||s,r)}function ax(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yf,r)}function lx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Tf,r)}function cx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ef,r)}function ux(n){switch(n){case 5126:return Xv;case 35664:return qv;case 35665:return Yv;case 35666:return jv;case 35674:return Kv;case 35675:return $v;case 35676:return Zv;case 5124:case 35670:return Jv;case 35667:case 35671:return Qv;case 35668:case 35672:return ex;case 35669:case 35673:return tx;case 5125:return nx;case 36294:return ix;case 36295:return rx;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}function fx(n,e){n.uniform1fv(this.addr,e)}function hx(n,e){const t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function dx(n,e){const t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function px(n,e){const t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function mx(n,e){const t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _x(n,e){const t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gx(n,e){const t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vx(n,e){n.uniform1iv(this.addr,e)}function xx(n,e){n.uniform2iv(this.addr,e)}function Mx(n,e){n.uniform3iv(this.addr,e)}function Sx(n,e){n.uniform4iv(this.addr,e)}function Ex(n,e){n.uniform1uiv(this.addr,e)}function yx(n,e){n.uniform2uiv(this.addr,e)}function Tx(n,e){n.uniform3uiv(this.addr,e)}function bx(n,e){n.uniform4uiv(this.addr,e)}function Ax(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Mf,s[a])}function wx(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||yf,s[a])}function Rx(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Tf,s[a])}function Cx(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ef,s[a])}function Px(n){switch(n){case 5126:return fx;case 35664:return hx;case 35665:return dx;case 35666:return px;case 35674:return mx;case 35675:return _x;case 35676:return gx;case 5124:case 35670:return vx;case 35667:case 35671:return xx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return Ex;case 36294:return yx;case 36295:return Tx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Cx}}class Lx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ux(t.type)}}class Dx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Px(t.type)}}class Ux{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function Lc(n,e){n.seq.push(e),n.map[e.id]=e}function Ix(n,e,t){const i=n.name,r=i.length;for(Uo.lastIndex=0;;){const s=Uo.exec(i),a=Uo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Lc(t,c===void 0?new Lx(o,n,e):new Dx(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Ux(o),Lc(t,f)),t=f}}}class ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ix(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Dc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Nx=37297;let Ox=0;function Fx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Bx(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===ys&&t===Es?i="LinearDisplayP3ToLinearSRGB":e===Es&&t===ys&&(i="LinearSRGBToLinearDisplayP3"),n){case Tn:case Hs:return[i,"LinearTransferOETF"];case gt:case Ra:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Uc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Fx(n.getShaderSource(e),a)}else return r}function zx(n,e){const t=Bx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hx(n,e){let t;switch(e){case Np:t="Linear";break;case Op:t="Reinhard";break;case Fp:t="OptimizedCineon";break;case Bp:t="ACESFilmic";break;case Hp:t="AgX";break;case zp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zi).join(`
`)}function Vx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zi).join(`
`)}function kx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Wx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function zi(n){return n!==""}function Ic(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(n){return n.replace(Xx,Yx)}const qx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yx(n,e){let t=Ve[e];if(t===void 0){const i=qx.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return oa(t)}const jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(n){return n.replace(jx,Kx)}function Kx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $x(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Zx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ki:case $i:e="ENVMAP_TYPE_CUBE";break;case zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function Qx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ju:e="ENVMAP_BLENDING_MULTIPLY";break;case Up:e="ENVMAP_BLENDING_MIX";break;case Ip:e="ENVMAP_BLENDING_ADD";break}return e}function e0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function t0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=$x(t),c=Zx(t),u=Jx(t),f=Qx(t),d=e0(t),m=t.isWebGL2?"":Gx(t),x=Vx(t),v=kx(s),p=r.createProgram();let h,b,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zi).join(`
`),h.length>0&&(h+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zi).join(`
`),b.length>0&&(b+=`
`)):(h=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),b=[m,Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==kn?Hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,zx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),a=oa(a),a=Ic(a,t),a=Nc(a,t),o=oa(o),o=Ic(o,t),o=Nc(o,t),a=Oc(a),o=Oc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const A=M+h+a,I=M+b+o,C=Dc(r,r.VERTEX_SHADER,A),P=Dc(r,r.FRAGMENT_SHADER,I);r.attachShader(p,C),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function ne(ie){if(n.debug.checkShaderErrors){const de=r.getProgramInfoLog(p).trim(),N=r.getShaderInfoLog(C).trim(),q=r.getShaderInfoLog(P).trim();let W=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,C,P);else{const Y=Uc(r,C,"vertex"),re=Uc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+de+`
`+Y+`
`+re)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(N===""||q==="")&&($=!1);$&&(ie.diagnostics={runnable:W,programLog:de,vertexShader:{log:N,prefix:h},fragmentShader:{log:q,prefix:b}})}r.deleteShader(C),r.deleteShader(P),E=new ps(r,p),T=Wx(r,p)}let E;this.getUniforms=function(){return E===void 0&&ne(this),E};let T;this.getAttributes=function(){return T===void 0&&ne(this),T};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=r.getProgramParameter(p,Nx)),Z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ox++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=P,this}let n0=0;class i0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new r0(e),t.set(e,i)),i}}class r0{constructor(e){this.id=n0++,this.code=e,this.usedTimes=0}}function s0(n,e,t,i,r,s,a){const o=new uf,l=new i0,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,T,Z,ie,de){const N=ie.fog,q=de.geometry,W=E.isMeshStandardMaterial?ie.environment:null,$=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),Y=$&&$.mapping===zs?$.image.height:null,re=x[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const oe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fe=oe!==void 0?oe.length:0;let he=0;q.morphAttributes.position!==void 0&&(he=1),q.morphAttributes.normal!==void 0&&(he=2),q.morphAttributes.color!==void 0&&(he=3);let K,le,ve,Ee;if(re){const at=an[re];K=at.vertexShader,le=at.fragmentShader}else K=E.vertexShader,le=E.fragmentShader,l.update(E),ve=l.getVertexShaderID(E),Ee=l.getFragmentShaderID(E);const Te=n.getRenderTarget(),Ue=de.isInstancedMesh===!0,Ie=de.isBatchedMesh===!0,we=!!E.map,Ge=!!E.matcap,G=!!$,w=!!E.aoMap,R=!!E.lightMap,O=!!E.bumpMap,B=!!E.normalMap,J=!!E.displacementMap,Q=!!E.emissiveMap,g=!!E.metalnessMap,_=!!E.roughnessMap,L=E.anisotropy>0,U=E.clearcoat>0,F=E.iridescence>0,V=E.sheen>0,se=E.transmission>0,ee=L&&!!E.anisotropyMap,ae=U&&!!E.clearcoatMap,me=U&&!!E.clearcoatNormalMap,Se=U&&!!E.clearcoatRoughnessMap,te=F&&!!E.iridescenceMap,Be=F&&!!E.iridescenceThicknessMap,Ne=V&&!!E.sheenColorMap,Pe=V&&!!E.sheenRoughnessMap,be=!!E.specularMap,xe=!!E.specularColorMap,y=!!E.specularIntensityMap,ce=se&&!!E.transmissionMap,Ae=se&&!!E.thicknessMap,ye=!!E.gradientMap,ue=!!E.alphaMap,D=E.alphaTest>0,pe=!!E.alphaHash,ge=!!E.extensions,Le=!!q.attributes.uv1,Ce=!!q.attributes.uv2,je=!!q.attributes.uv3;let Ke=kn;return E.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Ke=n.toneMapping),{isWebGL2:u,shaderID:re,shaderType:E.type,shaderName:E.name,vertexShader:K,fragmentShader:le,defines:E.defines,customVertexShaderID:ve,customFragmentShaderID:Ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ie,instancing:Ue,instancingColor:Ue&&de.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Te===null?n.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Tn,map:we,matcap:Ge,envMap:G,envMapMode:G&&$.mapping,envMapCubeUVHeight:Y,aoMap:w,lightMap:R,bumpMap:O,normalMap:B,displacementMap:d&&J,emissiveMap:Q,normalMapObjectSpace:B&&E.normalMapType===Qp,normalMapTangentSpace:B&&E.normalMapType===Jp,metalnessMap:g,roughnessMap:_,anisotropy:L,anisotropyMap:ee,clearcoat:U,clearcoatMap:ae,clearcoatNormalMap:me,clearcoatRoughnessMap:Se,iridescence:F,iridescenceMap:te,iridescenceThicknessMap:Be,sheen:V,sheenColorMap:Ne,sheenRoughnessMap:Pe,specularMap:be,specularColorMap:xe,specularIntensityMap:y,transmission:se,transmissionMap:ce,thicknessMap:Ae,gradientMap:ye,opaque:E.transparent===!1&&E.blending===Wi,alphaMap:ue,alphaTest:D,alphaHash:pe,combine:E.combine,mapUv:we&&v(E.map.channel),aoMapUv:w&&v(E.aoMap.channel),lightMapUv:R&&v(E.lightMap.channel),bumpMapUv:O&&v(E.bumpMap.channel),normalMapUv:B&&v(E.normalMap.channel),displacementMapUv:J&&v(E.displacementMap.channel),emissiveMapUv:Q&&v(E.emissiveMap.channel),metalnessMapUv:g&&v(E.metalnessMap.channel),roughnessMapUv:_&&v(E.roughnessMap.channel),anisotropyMapUv:ee&&v(E.anisotropyMap.channel),clearcoatMapUv:ae&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:me&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(E.sheenRoughnessMap.channel),specularMapUv:be&&v(E.specularMap.channel),specularColorMapUv:xe&&v(E.specularColorMap.channel),specularIntensityMapUv:y&&v(E.specularIntensityMap.channel),transmissionMapUv:ce&&v(E.transmissionMap.channel),thicknessMapUv:Ae&&v(E.thicknessMap.channel),alphaMapUv:ue&&v(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(B||L),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Ce,vertexUv3s:je,pointsUvs:de.isPoints===!0&&!!q.attributes.uv&&(we||ue),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:de.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:he,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Mn,flipSided:E.side===Lt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ge&&E.extensions.derivatives===!0,extensionFragDepth:ge&&E.extensions.fragDepth===!0,extensionDrawBuffers:ge&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function h(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Z in E.defines)T.push(Z),T.push(E.defines[Z]);return E.isRawShaderMaterial===!1&&(b(T,E),M(T,E),T.push(n.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function b(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function M(E,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function A(E){const T=x[E.type];let Z;if(T){const ie=an[T];Z=Hm.clone(ie.uniforms)}else Z=E.uniforms;return Z}function I(E,T){let Z;for(let ie=0,de=c.length;ie<de;ie++){const N=c[ie];if(N.cacheKey===T){Z=N,++Z.usedTimes;break}}return Z===void 0&&(Z=new t0(n,T,E,s),c.push(Z)),Z}function C(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function P(E){l.remove(E)}function ne(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:A,acquireProgram:I,releaseProgram:C,releaseShaderCache:P,programs:c,dispose:ne}}function o0(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function a0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,x,v,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:v,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=v,h.group=p),e++,h}function o(f,d,m,x,v,p){const h=a(f,d,m,x,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,x,v,p){const h=a(f,d,m,x,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||a0),i.length>1&&i.sort(d||Bc),r.length>1&&r.sort(d||Bc)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function l0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new zc,n.set(i,[a])):r>=s.length?(a=new zc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function c0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Je};break;case"SpotLight":t={position:new H,direction:new H,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function u0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let f0=0;function h0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function d0(n,e){const t=new c0,i=u0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const s=new H,a=new _t,o=new _t;function l(u,f){let d=0,m=0,x=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let v=0,p=0,h=0,b=0,M=0,A=0,I=0,C=0,P=0,ne=0,E=0;u.sort(h0);const T=f===!0?Math.PI:1;for(let ie=0,de=u.length;ie<de;ie++){const N=u[ie],q=N.color,W=N.intensity,$=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=q.r*W*T,m+=q.g*W*T,x+=q.b*W*T;else if(N.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(N.sh.coefficients[re],W);E++}else if(N.isDirectionalLight){const re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const oe=N.shadow,fe=i.get(N);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,r.directionalShadow[v]=fe,r.directionalShadowMap[v]=Y,r.directionalShadowMatrix[v]=N.shadow.matrix,A++}r.directional[v]=re,v++}else if(N.isSpotLight){const re=t.get(N);re.position.setFromMatrixPosition(N.matrixWorld),re.color.copy(q).multiplyScalar(W*T),re.distance=$,re.coneCos=Math.cos(N.angle),re.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),re.decay=N.decay,r.spot[h]=re;const oe=N.shadow;if(N.map&&(r.spotLightMap[P]=N.map,P++,oe.updateMatrices(N),N.castShadow&&ne++),r.spotLightMatrix[h]=oe.matrix,N.castShadow){const fe=i.get(N);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,r.spotShadow[h]=fe,r.spotShadowMap[h]=Y,C++}h++}else if(N.isRectAreaLight){const re=t.get(N);re.color.copy(q).multiplyScalar(W),re.halfWidth.set(N.width*.5,0,0),re.halfHeight.set(0,N.height*.5,0),r.rectArea[b]=re,b++}else if(N.isPointLight){const re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*T),re.distance=N.distance,re.decay=N.decay,N.castShadow){const oe=N.shadow,fe=i.get(N);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,fe.shadowCameraNear=oe.camera.near,fe.shadowCameraFar=oe.camera.far,r.pointShadow[p]=fe,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=N.shadow.matrix,I++}r.point[p]=re,p++}else if(N.isHemisphereLight){const re=t.get(N);re.skyColor.copy(N.color).multiplyScalar(W*T),re.groundColor.copy(N.groundColor).multiplyScalar(W*T),r.hemi[M]=re,M++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==v||Z.pointLength!==p||Z.spotLength!==h||Z.rectAreaLength!==b||Z.hemiLength!==M||Z.numDirectionalShadows!==A||Z.numPointShadows!==I||Z.numSpotShadows!==C||Z.numSpotMaps!==P||Z.numLightProbes!==E)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=b,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=C+P-ne,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=ne,r.numLightProbes=E,Z.directionalLength=v,Z.pointLength=p,Z.spotLength=h,Z.rectAreaLength=b,Z.hemiLength=M,Z.numDirectionalShadows=A,Z.numPointShadows=I,Z.numSpotShadows=C,Z.numSpotMaps=P,Z.numLightProbes=E,r.version=f0++)}function c(u,f){let d=0,m=0,x=0,v=0,p=0;const h=f.matrixWorldInverse;for(let b=0,M=u.length;b<M;b++){const A=u[b];if(A.isDirectionalLight){const I=r.directional[d];I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(h),d++}else if(A.isSpotLight){const I=r.spot[x];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(h),I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(h),x++}else if(A.isRectAreaLight){const I=r.rectArea[v];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(h),o.identity(),a.copy(A.matrixWorld),a.premultiply(h),o.extractRotation(a),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){const I=r.point[m];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(h),m++}else if(A.isHemisphereLight){const I=r.hemi[p];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function Hc(n,e){const t=new d0(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function p0(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Hc(n,e),t.set(s,[l])):a>=o.length?(l=new Hc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class m0 extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _0 extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const g0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function x0(n,e,t){let i=new gf;const r=new Xe,s=new Xe,a=new vt,o=new m0({depthPacking:Zp}),l=new _0,c={},u=t.maxTextureSize,f={[Xn]:Lt,[Lt]:Xn,[Mn]:Mn},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:g0,fragmentShader:v0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new An;x.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new En(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let h=this.type;this.render=function(C,P,ne){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),T=n.getActiveCubeFace(),Z=n.getActiveMipmapLevel(),ie=n.state;ie.setBlending(Vn),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const de=h!==vn&&this.type===vn,N=h===vn&&this.type!==vn;for(let q=0,W=C.length;q<W;q++){const $=C[q],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const re=Y.getFrameExtents();if(r.multiply(re),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,Y.mapSize.y=s.y)),Y.map===null||de===!0||N===!0){const fe=this.type!==vn?{minFilter:Rt,magFilter:Rt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new hi(r.x,r.y,fe),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const oe=Y.getViewportCount();for(let fe=0;fe<oe;fe++){const he=Y.getViewport(fe);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),ie.viewport(a),Y.updateMatrices($,fe),i=Y.getFrustum(),A(P,ne,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===vn&&b(Y,ne),Y.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(E,T,Z)};function b(C,P){const ne=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new hi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,ne,d,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,ne,m,v,null)}function M(C,P,ne,E){let T=null;const Z=ne.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(Z!==void 0)T=Z;else if(T=ne.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ie=T.uuid,de=P.uuid;let N=c[ie];N===void 0&&(N={},c[ie]=N);let q=N[de];q===void 0&&(q=T.clone(),N[de]=q,P.addEventListener("dispose",I)),T=q}if(T.visible=P.visible,T.wireframe=P.wireframe,E===vn?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:f[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,ne.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ie=n.properties.get(T);ie.light=ne}return T}function A(C,P,ne,E,T){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===vn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld);const de=e.update(C),N=C.material;if(Array.isArray(N)){const q=de.groups;for(let W=0,$=q.length;W<$;W++){const Y=q[W],re=N[Y.materialIndex];if(re&&re.visible){const oe=M(C,re,E,T);C.onBeforeShadow(n,C,P,ne,de,oe,Y),n.renderBufferDirect(ne,null,de,oe,C,Y),C.onAfterShadow(n,C,P,ne,de,oe,Y)}}}else if(N.visible){const q=M(C,N,E,T);C.onBeforeShadow(n,C,P,ne,de,q,null),n.renderBufferDirect(ne,null,de,q,C,null),C.onAfterShadow(n,C,P,ne,de,q,null)}}const ie=C.children;for(let de=0,N=ie.length;de<N;de++)A(ie[de],P,ne,E,T)}function I(C){C.target.removeEventListener("dispose",I);for(const ne in c){const E=c[ne],T=C.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function M0(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const pe=new vt;let ge=null;const Le=new vt(0,0,0,0);return{setMask:function(Ce){ge!==Ce&&!D&&(n.colorMask(Ce,Ce,Ce,Ce),ge=Ce)},setLocked:function(Ce){D=Ce},setClear:function(Ce,je,Ke,st,at){at===!0&&(Ce*=st,je*=st,Ke*=st),pe.set(Ce,je,Ke,st),Le.equals(pe)===!1&&(n.clearColor(Ce,je,Ke,st),Le.copy(pe))},reset:function(){D=!1,ge=null,Le.set(-1,0,0,0)}}}function s(){let D=!1,pe=null,ge=null,Le=null;return{setTest:function(Ce){Ce?Ie(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(Ce){pe!==Ce&&!D&&(n.depthMask(Ce),pe=Ce)},setFunc:function(Ce){if(ge!==Ce){switch(Ce){case Ap:n.depthFunc(n.NEVER);break;case wp:n.depthFunc(n.ALWAYS);break;case Rp:n.depthFunc(n.LESS);break;case Ms:n.depthFunc(n.LEQUAL);break;case Cp:n.depthFunc(n.EQUAL);break;case Pp:n.depthFunc(n.GEQUAL);break;case Lp:n.depthFunc(n.GREATER);break;case Dp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=Ce}},setLocked:function(Ce){D=Ce},setClear:function(Ce){Le!==Ce&&(n.clearDepth(Ce),Le=Ce)},reset:function(){D=!1,pe=null,ge=null,Le=null}}}function a(){let D=!1,pe=null,ge=null,Le=null,Ce=null,je=null,Ke=null,st=null,at=null;return{setTest:function(Ze){D||(Ze?Ie(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(Ze){pe!==Ze&&!D&&(n.stencilMask(Ze),pe=Ze)},setFunc:function(Ze,ct,rn){(ge!==Ze||Le!==ct||Ce!==rn)&&(n.stencilFunc(Ze,ct,rn),ge=Ze,Le=ct,Ce=rn)},setOp:function(Ze,ct,rn){(je!==Ze||Ke!==ct||st!==rn)&&(n.stencilOp(Ze,ct,rn),je=Ze,Ke=ct,st=rn)},setLocked:function(Ze){D=Ze},setClear:function(Ze){at!==Ze&&(n.clearStencil(Ze),at=Ze)},reset:function(){D=!1,pe=null,ge=null,Le=null,Ce=null,je=null,Ke=null,st=null,at=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},x=new WeakMap,v=[],p=null,h=!1,b=null,M=null,A=null,I=null,C=null,P=null,ne=null,E=new Je(0,0,0),T=0,Z=!1,ie=null,de=null,N=null,q=null,W=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,re=0;const oe=n.getParameter(n.VERSION);oe.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(oe)[1]),Y=re>=1):oe.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),Y=re>=2);let fe=null,he={};const K=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),ve=new vt().fromArray(K),Ee=new vt().fromArray(le);function Te(D,pe,ge,Le){const Ce=new Uint8Array(4),je=n.createTexture();n.bindTexture(D,je),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<ge;Ke++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(pe,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(pe+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return je}const Ue={};Ue[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(n.DEPTH_TEST),l.setFunc(Ms),Q(!1),g(Sl),Ie(n.CULL_FACE),B(Vn);function Ie(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function we(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function Ge(D,pe){return m[D]!==pe?(n.bindFramebuffer(D,pe),m[D]=pe,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=pe),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=pe)),!0):!1}function G(D,pe){let ge=v,Le=!1;if(D)if(ge=x.get(pe),ge===void 0&&(ge=[],x.set(pe,ge)),D.isWebGLMultipleRenderTargets){const Ce=D.texture;if(ge.length!==Ce.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let je=0,Ke=Ce.length;je<Ke;je++)ge[je]=n.COLOR_ATTACHMENT0+je;ge.length=Ce.length,Le=!0}}else ge[0]!==n.COLOR_ATTACHMENT0&&(ge[0]=n.COLOR_ATTACHMENT0,Le=!0);else ge[0]!==n.BACK&&(ge[0]=n.BACK,Le=!0);Le&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function w(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const R={[ni]:n.FUNC_ADD,[fp]:n.FUNC_SUBTRACT,[hp]:n.FUNC_REVERSE_SUBTRACT};if(i)R[bl]=n.MIN,R[Al]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(R[bl]=D.MIN_EXT,R[Al]=D.MAX_EXT)}const O={[dp]:n.ZERO,[pp]:n.ONE,[mp]:n.SRC_COLOR,[Jo]:n.SRC_ALPHA,[Sp]:n.SRC_ALPHA_SATURATE,[xp]:n.DST_COLOR,[gp]:n.DST_ALPHA,[_p]:n.ONE_MINUS_SRC_COLOR,[Qo]:n.ONE_MINUS_SRC_ALPHA,[Mp]:n.ONE_MINUS_DST_COLOR,[vp]:n.ONE_MINUS_DST_ALPHA,[Ep]:n.CONSTANT_COLOR,[yp]:n.ONE_MINUS_CONSTANT_COLOR,[Tp]:n.CONSTANT_ALPHA,[bp]:n.ONE_MINUS_CONSTANT_ALPHA};function B(D,pe,ge,Le,Ce,je,Ke,st,at,Ze){if(D===Vn){h===!0&&(we(n.BLEND),h=!1);return}if(h===!1&&(Ie(n.BLEND),h=!0),D!==up){if(D!==b||Ze!==Z){if((M!==ni||C!==ni)&&(n.blendEquation(n.FUNC_ADD),M=ni,C=ni),Ze)switch(D){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case El:n.blendFunc(n.ONE,n.ONE);break;case yl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case El:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,I=null,P=null,ne=null,E.set(0,0,0),T=0,b=D,Z=Ze}return}Ce=Ce||pe,je=je||ge,Ke=Ke||Le,(pe!==M||Ce!==C)&&(n.blendEquationSeparate(R[pe],R[Ce]),M=pe,C=Ce),(ge!==A||Le!==I||je!==P||Ke!==ne)&&(n.blendFuncSeparate(O[ge],O[Le],O[je],O[Ke]),A=ge,I=Le,P=je,ne=Ke),(st.equals(E)===!1||at!==T)&&(n.blendColor(st.r,st.g,st.b,at),E.copy(st),T=at),b=D,Z=!1}function J(D,pe){D.side===Mn?we(n.CULL_FACE):Ie(n.CULL_FACE);let ge=D.side===Lt;pe&&(ge=!ge),Q(ge),D.blending===Wi&&D.transparent===!1?B(Vn):B(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Le=D.stencilWrite;c.setTest(Le),Le&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),L(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(D){ie!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),ie=D)}function g(D){D!==ap?(Ie(n.CULL_FACE),D!==de&&(D===Sl?n.cullFace(n.BACK):D===lp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),de=D}function _(D){D!==N&&(Y&&n.lineWidth(D),N=D)}function L(D,pe,ge){D?(Ie(n.POLYGON_OFFSET_FILL),(q!==pe||W!==ge)&&(n.polygonOffset(pe,ge),q=pe,W=ge)):we(n.POLYGON_OFFSET_FILL)}function U(D){D?Ie(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function F(D){D===void 0&&(D=n.TEXTURE0+$-1),fe!==D&&(n.activeTexture(D),fe=D)}function V(D,pe,ge){ge===void 0&&(fe===null?ge=n.TEXTURE0+$-1:ge=fe);let Le=he[ge];Le===void 0&&(Le={type:void 0,texture:void 0},he[ge]=Le),(Le.type!==D||Le.texture!==pe)&&(fe!==ge&&(n.activeTexture(ge),fe=ge),n.bindTexture(D,pe||Ue[D]),Le.type=D,Le.texture=pe)}function se(){const D=he[fe];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function y(D){ve.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ve.copy(D))}function ce(D){Ee.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ee.copy(D))}function Ae(D,pe){let ge=f.get(pe);ge===void 0&&(ge=new WeakMap,f.set(pe,ge));let Le=ge.get(D);Le===void 0&&(Le=n.getUniformBlockIndex(pe,D.name),ge.set(D,Le))}function ye(D,pe){const Le=f.get(pe).get(D);u.get(pe)!==Le&&(n.uniformBlockBinding(pe,Le,D.__bindingPointIndex),u.set(pe,Le))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},fe=null,he={},m={},x=new WeakMap,v=[],p=null,h=!1,b=null,M=null,A=null,I=null,C=null,P=null,ne=null,E=new Je(0,0,0),T=0,Z=!1,ie=null,de=null,N=null,q=null,W=null,ve.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ie,disable:we,bindFramebuffer:Ge,drawBuffers:G,useProgram:w,setBlending:B,setMaterial:J,setFlipSided:Q,setCullFace:g,setLineWidth:_,setPolygonOffset:L,setScissorTest:U,activeTexture:F,bindTexture:V,unbindTexture:se,compressedTexImage2D:ee,compressedTexImage3D:ae,texImage2D:be,texImage3D:xe,updateUBOMapping:Ae,uniformBlockBinding:ye,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:me,texSubImage3D:Se,compressedTexSubImage2D:te,compressedTexSubImage3D:Be,scissor:y,viewport:ce,reset:ue}}function S0(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(g,_){return m?new OffscreenCanvas(g,_):As("canvas")}function v(g,_,L,U){let F=1;if((g.width>U||g.height>U)&&(F=U/Math.max(g.width,g.height)),F<1||_===!0)if(typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap){const V=_?bs:Math.floor,se=V(F*g.width),ee=V(F*g.height);f===void 0&&(f=x(se,ee));const ae=L?x(se,ee):f;return ae.width=se,ae.height=ee,ae.getContext("2d").drawImage(g,0,0,se,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+g.width+"x"+g.height+") to ("+se+"x"+ee+")."),ae}else return"data"in g&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+g.width+"x"+g.height+")."),g;return g}function p(g){return sa(g.width)&&sa(g.height)}function h(g){return o?!1:g.wrapS!==Jt||g.wrapT!==Jt||g.minFilter!==Rt&&g.minFilter!==kt}function b(g,_){return g.generateMipmaps&&_&&g.minFilter!==Rt&&g.minFilter!==kt}function M(g){n.generateMipmap(g)}function A(g,_,L,U,F=!1){if(o===!1)return _;if(g!==null){if(n[g]!==void 0)return n[g];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let V=_;if(_===n.RED&&(L===n.FLOAT&&(V=n.R32F),L===n.HALF_FLOAT&&(V=n.R16F),L===n.UNSIGNED_BYTE&&(V=n.R8)),_===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.R8UI),L===n.UNSIGNED_SHORT&&(V=n.R16UI),L===n.UNSIGNED_INT&&(V=n.R32UI),L===n.BYTE&&(V=n.R8I),L===n.SHORT&&(V=n.R16I),L===n.INT&&(V=n.R32I)),_===n.RG&&(L===n.FLOAT&&(V=n.RG32F),L===n.HALF_FLOAT&&(V=n.RG16F),L===n.UNSIGNED_BYTE&&(V=n.RG8)),_===n.RGBA){const se=F?Ss:et.getTransfer(U);L===n.FLOAT&&(V=n.RGBA32F),L===n.HALF_FLOAT&&(V=n.RGBA16F),L===n.UNSIGNED_BYTE&&(V=se===tt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function I(g,_,L){return b(g,L)===!0||g.isFramebufferTexture&&g.minFilter!==Rt&&g.minFilter!==kt?Math.log2(Math.max(_.width,_.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?_.mipmaps.length:1}function C(g){return g===Rt||g===wl||g===so?n.NEAREST:n.LINEAR}function P(g){const _=g.target;_.removeEventListener("dispose",P),E(_),_.isVideoTexture&&u.delete(_)}function ne(g){const _=g.target;_.removeEventListener("dispose",ne),Z(_)}function E(g){const _=i.get(g);if(_.__webglInit===void 0)return;const L=g.source,U=d.get(L);if(U){const F=U[_.__cacheKey];F.usedTimes--,F.usedTimes===0&&T(g),Object.keys(U).length===0&&d.delete(L)}i.remove(g)}function T(g){const _=i.get(g);n.deleteTexture(_.__webglTexture);const L=g.source,U=d.get(L);delete U[_.__cacheKey],a.memory.textures--}function Z(g){const _=g.texture,L=i.get(g),U=i.get(_);if(U.__webglTexture!==void 0&&(n.deleteTexture(U.__webglTexture),a.memory.textures--),g.depthTexture&&g.depthTexture.dispose(),g.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(L.__webglFramebuffer[F]))for(let V=0;V<L.__webglFramebuffer[F].length;V++)n.deleteFramebuffer(L.__webglFramebuffer[F][V]);else n.deleteFramebuffer(L.__webglFramebuffer[F]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[F])}else{if(Array.isArray(L.__webglFramebuffer))for(let F=0;F<L.__webglFramebuffer.length;F++)n.deleteFramebuffer(L.__webglFramebuffer[F]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let F=0;F<L.__webglColorRenderbuffer.length;F++)L.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[F]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(g.isWebGLMultipleRenderTargets)for(let F=0,V=_.length;F<V;F++){const se=i.get(_[F]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(_[F])}i.remove(_),i.remove(g)}let ie=0;function de(){ie=0}function N(){const g=ie;return g>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+r.maxTextures),ie+=1,g}function q(g){const _=[];return _.push(g.wrapS),_.push(g.wrapT),_.push(g.wrapR||0),_.push(g.magFilter),_.push(g.minFilter),_.push(g.anisotropy),_.push(g.internalFormat),_.push(g.format),_.push(g.type),_.push(g.generateMipmaps),_.push(g.premultiplyAlpha),_.push(g.flipY),_.push(g.unpackAlignment),_.push(g.colorSpace),_.join()}function W(g,_){const L=i.get(g);if(g.isVideoTexture&&J(g),g.isRenderTargetTexture===!1&&g.version>0&&L.__version!==g.version){const U=g.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(L,g,_);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+_)}function $(g,_){const L=i.get(g);if(g.version>0&&L.__version!==g.version){ve(L,g,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+_)}function Y(g,_){const L=i.get(g);if(g.version>0&&L.__version!==g.version){ve(L,g,_);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+_)}function re(g,_){const L=i.get(g);if(g.version>0&&L.__version!==g.version){Ee(L,g,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+_)}const oe={[na]:n.REPEAT,[Jt]:n.CLAMP_TO_EDGE,[ia]:n.MIRRORED_REPEAT},fe={[Rt]:n.NEAREST,[wl]:n.NEAREST_MIPMAP_NEAREST,[so]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[Gp]:n.LINEAR_MIPMAP_NEAREST,[Mr]:n.LINEAR_MIPMAP_LINEAR},he={[em]:n.NEVER,[om]:n.ALWAYS,[tm]:n.LESS,[sf]:n.LEQUAL,[nm]:n.EQUAL,[sm]:n.GEQUAL,[im]:n.GREATER,[rm]:n.NOTEQUAL};function K(g,_,L){if(L?(n.texParameteri(g,n.TEXTURE_WRAP_S,oe[_.wrapS]),n.texParameteri(g,n.TEXTURE_WRAP_T,oe[_.wrapT]),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,oe[_.wrapR]),n.texParameteri(g,n.TEXTURE_MAG_FILTER,fe[_.magFilter]),n.texParameteri(g,n.TEXTURE_MIN_FILTER,fe[_.minFilter])):(n.texParameteri(g,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(g,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==Jt||_.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(g,n.TEXTURE_MAG_FILTER,C(_.magFilter)),n.texParameteri(g,n.TEXTURE_MIN_FILTER,C(_.minFilter)),_.minFilter!==Rt&&_.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(g,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(g,n.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Rt||_.minFilter!==so&&_.minFilter!==Mr||_.type===zn&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===Sr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(g,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function le(g,_){let L=!1;g.__webglInit===void 0&&(g.__webglInit=!0,_.addEventListener("dispose",P));const U=_.source;let F=d.get(U);F===void 0&&(F={},d.set(U,F));const V=q(_);if(V!==g.__cacheKey){F[V]===void 0&&(F[V]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),F[V].usedTimes++;const se=F[g.__cacheKey];se!==void 0&&(F[g.__cacheKey].usedTimes--,se.usedTimes===0&&T(_)),g.__cacheKey=V,g.__webglTexture=F[V].texture}return L}function ve(g,_,L){let U=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(U=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(U=n.TEXTURE_3D);const F=le(g,_),V=_.source;t.bindTexture(U,g.__webglTexture,n.TEXTURE0+L);const se=i.get(V);if(V.version!==se.__version||F===!0){t.activeTexture(n.TEXTURE0+L);const ee=et.getPrimaries(et.workingColorSpace),ae=_.colorSpace===qt?null:et.getPrimaries(_.colorSpace),me=_.colorSpace===qt||ee===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Se=h(_)&&p(_.image)===!1;let te=v(_.image,Se,!1,r.maxTextureSize);te=Q(_,te);const Be=p(te)||o,Ne=s.convert(_.format,_.colorSpace);let Pe=s.convert(_.type),be=A(_.internalFormat,Ne,Pe,_.colorSpace,_.isVideoTexture);K(U,_,Be);let xe;const y=_.mipmaps,ce=o&&_.isVideoTexture!==!0&&be!==nf,Ae=se.__version===void 0||F===!0,ye=I(_,te,Be);if(_.isDepthTexture)be=n.DEPTH_COMPONENT,o?_.type===zn?be=n.DEPTH_COMPONENT32F:_.type===Bn?be=n.DEPTH_COMPONENT24:_.type===ai?be=n.DEPTH24_STENCIL8:be=n.DEPTH_COMPONENT16:_.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===li&&be===n.DEPTH_COMPONENT&&_.type!==wa&&_.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Bn,Pe=s.convert(_.type)),_.format===Zi&&be===n.DEPTH_COMPONENT&&(be=n.DEPTH_STENCIL,_.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=ai,Pe=s.convert(_.type))),Ae&&(ce?t.texStorage2D(n.TEXTURE_2D,1,be,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,be,te.width,te.height,0,Ne,Pe,null));else if(_.isDataTexture)if(y.length>0&&Be){ce&&Ae&&t.texStorage2D(n.TEXTURE_2D,ye,be,y[0].width,y[0].height);for(let ue=0,D=y.length;ue<D;ue++)xe=y[ue],ce?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,xe.width,xe.height,Ne,Pe,xe.data):t.texImage2D(n.TEXTURE_2D,ue,be,xe.width,xe.height,0,Ne,Pe,xe.data);_.generateMipmaps=!1}else ce?(Ae&&t.texStorage2D(n.TEXTURE_2D,ye,be,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,Ne,Pe,te.data)):t.texImage2D(n.TEXTURE_2D,0,be,te.width,te.height,0,Ne,Pe,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ce&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,be,y[0].width,y[0].height,te.depth);for(let ue=0,D=y.length;ue<D;ue++)xe=y[ue],_.format!==Qt?Ne!==null?ce?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,xe.width,xe.height,te.depth,Ne,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,be,xe.width,xe.height,te.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,xe.width,xe.height,te.depth,Ne,Pe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,be,xe.width,xe.height,te.depth,0,Ne,Pe,xe.data)}else{ce&&Ae&&t.texStorage2D(n.TEXTURE_2D,ye,be,y[0].width,y[0].height);for(let ue=0,D=y.length;ue<D;ue++)xe=y[ue],_.format!==Qt?Ne!==null?ce?t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,xe.width,xe.height,Ne,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,xe.width,xe.height,Ne,Pe,xe.data):t.texImage2D(n.TEXTURE_2D,ue,be,xe.width,xe.height,0,Ne,Pe,xe.data)}else if(_.isDataArrayTexture)ce?(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,be,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ne,Pe,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,te.width,te.height,te.depth,0,Ne,Pe,te.data);else if(_.isData3DTexture)ce?(Ae&&t.texStorage3D(n.TEXTURE_3D,ye,be,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ne,Pe,te.data)):t.texImage3D(n.TEXTURE_3D,0,be,te.width,te.height,te.depth,0,Ne,Pe,te.data);else if(_.isFramebufferTexture){if(Ae)if(ce)t.texStorage2D(n.TEXTURE_2D,ye,be,te.width,te.height);else{let ue=te.width,D=te.height;for(let pe=0;pe<ye;pe++)t.texImage2D(n.TEXTURE_2D,pe,be,ue,D,0,Ne,Pe,null),ue>>=1,D>>=1}}else if(y.length>0&&Be){ce&&Ae&&t.texStorage2D(n.TEXTURE_2D,ye,be,y[0].width,y[0].height);for(let ue=0,D=y.length;ue<D;ue++)xe=y[ue],ce?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Ne,Pe,xe):t.texImage2D(n.TEXTURE_2D,ue,be,Ne,Pe,xe);_.generateMipmaps=!1}else ce?(Ae&&t.texStorage2D(n.TEXTURE_2D,ye,be,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,Pe,te)):t.texImage2D(n.TEXTURE_2D,0,be,Ne,Pe,te);b(_,Be)&&M(U),se.__version=V.version,_.onUpdate&&_.onUpdate(_)}g.__version=_.version}function Ee(g,_,L){if(_.image.length!==6)return;const U=le(g,_),F=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,g.__webglTexture,n.TEXTURE0+L);const V=i.get(F);if(F.version!==V.__version||U===!0){t.activeTexture(n.TEXTURE0+L);const se=et.getPrimaries(et.workingColorSpace),ee=_.colorSpace===qt?null:et.getPrimaries(_.colorSpace),ae=_.colorSpace===qt||se===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const me=_.isCompressedTexture||_.image[0].isCompressedTexture,Se=_.image[0]&&_.image[0].isDataTexture,te=[];for(let ue=0;ue<6;ue++)!me&&!Se?te[ue]=v(_.image[ue],!1,!0,r.maxCubemapSize):te[ue]=Se?_.image[ue].image:_.image[ue],te[ue]=Q(_,te[ue]);const Be=te[0],Ne=p(Be)||o,Pe=s.convert(_.format,_.colorSpace),be=s.convert(_.type),xe=A(_.internalFormat,Pe,be,_.colorSpace),y=o&&_.isVideoTexture!==!0,ce=V.__version===void 0||U===!0;let Ae=I(_,Be,Ne);K(n.TEXTURE_CUBE_MAP,_,Ne);let ye;if(me){y&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,xe,Be.width,Be.height);for(let ue=0;ue<6;ue++){ye=te[ue].mipmaps;for(let D=0;D<ye.length;D++){const pe=ye[D];_.format!==Qt?Pe!==null?y?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,0,0,pe.width,pe.height,Pe,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):y?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,0,0,pe.width,pe.height,Pe,be,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,xe,pe.width,pe.height,0,Pe,be,pe.data)}}}else{ye=_.mipmaps,y&&ce&&(ye.length>0&&Ae++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,xe,te[0].width,te[0].height));for(let ue=0;ue<6;ue++)if(Se){y?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,te[ue].width,te[ue].height,Pe,be,te[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,xe,te[ue].width,te[ue].height,0,Pe,be,te[ue].data);for(let D=0;D<ye.length;D++){const ge=ye[D].image[ue].image;y?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,0,0,ge.width,ge.height,Pe,be,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,xe,ge.width,ge.height,0,Pe,be,ge.data)}}else{y?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Pe,be,te[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,xe,Pe,be,te[ue]);for(let D=0;D<ye.length;D++){const pe=ye[D];y?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,0,0,Pe,be,pe.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,xe,Pe,be,pe.image[ue])}}}b(_,Ne)&&M(n.TEXTURE_CUBE_MAP),V.__version=F.version,_.onUpdate&&_.onUpdate(_)}g.__version=_.version}function Te(g,_,L,U,F,V){const se=s.convert(L.format,L.colorSpace),ee=s.convert(L.type),ae=A(L.internalFormat,se,ee,L.colorSpace);if(!i.get(_).__hasExternalTextures){const Se=Math.max(1,_.width>>V),te=Math.max(1,_.height>>V);F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?t.texImage3D(F,V,ae,Se,te,_.depth,0,se,ee,null):t.texImage2D(F,V,ae,Se,te,0,se,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,g),B(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,U,F,i.get(L).__webglTexture,0,O(_)):(F===n.TEXTURE_2D||F>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,U,F,i.get(L).__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(g,_,L){if(n.bindRenderbuffer(n.RENDERBUFFER,g),_.depthBuffer&&!_.stencilBuffer){let U=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(L||B(_)){const F=_.depthTexture;F&&F.isDepthTexture&&(F.type===zn?U=n.DEPTH_COMPONENT32F:F.type===Bn&&(U=n.DEPTH_COMPONENT24));const V=O(_);B(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,U,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,V,U,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,U,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,g)}else if(_.depthBuffer&&_.stencilBuffer){const U=O(_);L&&B(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,U,n.DEPTH24_STENCIL8,_.width,_.height):B(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,g)}else{const U=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let F=0;F<U.length;F++){const V=U[F],se=s.convert(V.format,V.colorSpace),ee=s.convert(V.type),ae=A(V.internalFormat,se,ee,V.colorSpace),me=O(_);L&&B(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,ae,_.width,_.height):B(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,ae,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ae,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(g,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,g),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const U=i.get(_.depthTexture).__webglTexture,F=O(_);if(_.depthTexture.format===li)B(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,U,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,U,0);else if(_.depthTexture.format===Zi)B(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,U,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function we(g){const _=i.get(g),L=g.isWebGLCubeRenderTarget===!0;if(g.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Ie(_.__webglFramebuffer,g)}else if(L){_.__webglDepthbuffer=[];for(let U=0;U<6;U++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[U]),_.__webglDepthbuffer[U]=n.createRenderbuffer(),Ue(_.__webglDepthbuffer[U],g,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Ue(_.__webglDepthbuffer,g,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(g,_,L){const U=i.get(g);_!==void 0&&Te(U.__webglFramebuffer,g,g.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&we(g)}function G(g){const _=g.texture,L=i.get(g),U=i.get(_);g.addEventListener("dispose",ne),g.isWebGLMultipleRenderTargets!==!0&&(U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture()),U.__version=_.version,a.memory.textures++);const F=g.isWebGLCubeRenderTarget===!0,V=g.isWebGLMultipleRenderTargets===!0,se=p(g)||o;if(F){L.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(o&&_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[ee]=[];for(let ae=0;ae<_.mipmaps.length;ae++)L.__webglFramebuffer[ee][ae]=n.createFramebuffer()}else L.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)L.__webglFramebuffer[ee]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(V)if(r.drawBuffers){const ee=g.texture;for(let ae=0,me=ee.length;ae<me;ae++){const Se=i.get(ee[ae]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&g.samples>0&&B(g)===!1){const ee=V?_:[_];L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const me=ee[ae];L.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ae]);const Se=s.convert(me.format,me.colorSpace),te=s.convert(me.type),Be=A(me.internalFormat,Se,te,me.colorSpace,g.isXRRenderTarget===!0),Ne=O(g);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Be,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,L.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),g.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(L.__webglDepthRenderbuffer,g,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(F){t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture),K(n.TEXTURE_CUBE_MAP,_,se);for(let ee=0;ee<6;ee++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)Te(L.__webglFramebuffer[ee][ae],g,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae);else Te(L.__webglFramebuffer[ee],g,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);b(_,se)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(V){const ee=g.texture;for(let ae=0,me=ee.length;ae<me;ae++){const Se=ee[ae],te=i.get(Se);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),K(n.TEXTURE_2D,Se,se),Te(L.__webglFramebuffer,g,Se,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),b(Se,se)&&M(n.TEXTURE_2D)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(o?ee=g.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ee,U.__webglTexture),K(ee,_,se),o&&_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)Te(L.__webglFramebuffer[ae],g,_,n.COLOR_ATTACHMENT0,ee,ae);else Te(L.__webglFramebuffer,g,_,n.COLOR_ATTACHMENT0,ee,0);b(_,se)&&M(ee),t.unbindTexture()}g.depthBuffer&&we(g)}function w(g){const _=p(g)||o,L=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let U=0,F=L.length;U<F;U++){const V=L[U];if(b(V,_)){const se=g.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ee=i.get(V).__webglTexture;t.bindTexture(se,ee),M(se),t.unbindTexture()}}}function R(g){if(o&&g.samples>0&&B(g)===!1){const _=g.isWebGLMultipleRenderTargets?g.texture:[g.texture],L=g.width,U=g.height;let F=n.COLOR_BUFFER_BIT;const V=[],se=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=i.get(g),ae=g.isWebGLMultipleRenderTargets===!0;if(ae)for(let me=0;me<_.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let me=0;me<_.length;me++){V.push(n.COLOR_ATTACHMENT0+me),g.depthBuffer&&V.push(se);const Se=ee.__ignoreDepthValues!==void 0?ee.__ignoreDepthValues:!1;if(Se===!1&&(g.depthBuffer&&(F|=n.DEPTH_BUFFER_BIT),g.stencilBuffer&&(F|=n.STENCIL_BUFFER_BIT)),ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ee.__webglColorRenderbuffer[me]),Se===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[se]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[se])),ae){const te=i.get(_[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,L,U,0,0,L,U,F,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let me=0;me<_.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,ee.__webglColorRenderbuffer[me]);const Se=i.get(_[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}}function O(g){return Math.min(r.maxSamples,g.samples)}function B(g){const _=i.get(g);return o&&g.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function J(g){const _=a.render.frame;u.get(g)!==_&&(u.set(g,_),g.update())}function Q(g,_){const L=g.colorSpace,U=g.format,F=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||g.format===ra||L!==Tn&&L!==qt&&(et.getTransfer(L)===tt?o===!1?e.has("EXT_sRGB")===!0&&U===Qt?(g.format=ra,g.minFilter=kt,g.generateMipmaps=!1):_=af.sRGBToLinear(_):(U!==Qt||F!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}this.allocateTextureUnit=N,this.resetTextureUnits=de,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=Y,this.setTextureCube=re,this.rebindTextures=Ge,this.setupRenderTarget=G,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=B}function E0(n,e,t){const i=t.isWebGL2;function r(s,a=qt){let o;const l=et.getTransfer(a);if(s===Wn)return n.UNSIGNED_BYTE;if(s===Zu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Ju)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Vp)return n.BYTE;if(s===kp)return n.SHORT;if(s===wa)return n.UNSIGNED_SHORT;if(s===$u)return n.INT;if(s===Bn)return n.UNSIGNED_INT;if(s===zn)return n.FLOAT;if(s===Sr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Wp)return n.ALPHA;if(s===Qt)return n.RGBA;if(s===Xp)return n.LUMINANCE;if(s===qp)return n.LUMINANCE_ALPHA;if(s===li)return n.DEPTH_COMPONENT;if(s===Zi)return n.DEPTH_STENCIL;if(s===ra)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Yp)return n.RED;if(s===Qu)return n.RED_INTEGER;if(s===jp)return n.RG;if(s===ef)return n.RG_INTEGER;if(s===tf)return n.RGBA_INTEGER;if(s===oo||s===ao||s===lo||s===co)if(l===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===oo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===oo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ao)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===co)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rl||s===Cl||s===Pl||s===Ll)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Rl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ll)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Dl||s===Ul)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Dl)return l===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ul)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Il||s===Nl||s===Ol||s===Fl||s===Bl||s===zl||s===Hl||s===Gl||s===Vl||s===kl||s===Wl||s===Xl||s===ql||s===Yl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Il)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ol)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ql)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yl)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===uo||s===jl||s===Kl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===uo)return l===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Kl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kp||s===$l||s===Zl||s===Jl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===uo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===$l)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ai?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class y0 extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fr extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T0={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class b0 extends gi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,x=null;const v=t.getContextAttributes();let p=null,h=null;const b=[],M=[],A=new Xe;let I=null;const C=new Xt;C.layers.enable(1),C.viewport=new vt;const P=new Xt;P.layers.enable(2),P.viewport=new vt;const ne=[C,P],E=new y0;E.layers.enable(1),E.layers.enable(2);let T=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=b[K];return le===void 0&&(le=new Io,b[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=b[K];return le===void 0&&(le=new Io,b[K]=le),le.getGripSpace()},this.getHand=function(K){let le=b[K];return le===void 0&&(le=new Io,b[K]=le),le.getHandSpace()};function ie(K){const le=M.indexOf(K.inputSource);if(le===-1)return;const ve=b[le];ve!==void 0&&(ve.update(K.inputSource,K.frame,c||a),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function de(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",de),r.removeEventListener("inputsourceschange",N);for(let K=0;K<b.length;K++){const le=M[K];le!==null&&(M[K]=null,b[K].disconnect(le))}T=null,Z=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",de),r.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new hi(m.framebufferWidth,m.framebufferHeight,{format:Qt,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let le=null,ve=null,Ee=null;v.depth&&(Ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=v.stencil?Zi:li,ve=v.stencil?ai:Bn);const Te={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Te),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new hi(d.textureWidth,d.textureHeight,{format:Qt,type:Wn,depthTexture:new xf(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ue=e.properties.get(h);Ue.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(K){for(let le=0;le<K.removed.length;le++){const ve=K.removed[le],Ee=M.indexOf(ve);Ee>=0&&(M[Ee]=null,b[Ee].disconnect(ve))}for(let le=0;le<K.added.length;le++){const ve=K.added[le];let Ee=M.indexOf(ve);if(Ee===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=M.length){M.push(ve),Ee=Ue;break}else if(M[Ue]===null){M[Ue]=ve,Ee=Ue;break}if(Ee===-1)break}const Te=b[Ee];Te&&Te.connect(ve)}}const q=new H,W=new H;function $(K,le,ve){q.setFromMatrixPosition(le.matrixWorld),W.setFromMatrixPosition(ve.matrixWorld);const Ee=q.distanceTo(W),Te=le.projectionMatrix.elements,Ue=ve.projectionMatrix.elements,Ie=Te[14]/(Te[10]-1),we=Te[14]/(Te[10]+1),Ge=(Te[9]+1)/Te[5],G=(Te[9]-1)/Te[5],w=(Te[8]-1)/Te[0],R=(Ue[8]+1)/Ue[0],O=Ie*w,B=Ie*R,J=Ee/(-w+R),Q=J*-w;le.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Q),K.translateZ(J),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const g=Ie+J,_=we+J,L=O-Q,U=B+(Ee-Q),F=Ge*we/_*g,V=G*we/_*g;K.projectionMatrix.makePerspective(L,U,F,V,g,_),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function Y(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;E.near=P.near=C.near=K.near,E.far=P.far=C.far=K.far,(T!==E.near||Z!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,Z=E.far);const le=K.parent,ve=E.cameras;Y(E,le);for(let Ee=0;Ee<ve.length;Ee++)Y(ve[Ee],le);ve.length===2?$(E,C,P):E.projectionMatrix.copy(C.projectionMatrix),re(K,E,le)};function re(K,le,ve){ve===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Er*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)};let oe=null;function fe(K,le){if(u=le.getViewerPose(c||a),x=le,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let Ee=!1;ve.length!==E.cameras.length&&(E.cameras.length=0,Ee=!0);for(let Te=0;Te<ve.length;Te++){const Ue=ve[Te];let Ie=null;if(m!==null)Ie=m.getViewport(Ue);else{const Ge=f.getViewSubImage(d,Ue);Ie=Ge.viewport,Te===0&&(e.setRenderTargetTextures(h,Ge.colorTexture,d.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(h))}let we=ne[Te];we===void 0&&(we=new Xt,we.layers.enable(Te),we.viewport=new vt,ne[Te]=we),we.matrix.fromArray(Ue.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ue.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Te===0&&(E.matrix.copy(we.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ee===!0&&E.cameras.push(we)}}for(let ve=0;ve<b.length;ve++){const Ee=M[ve],Te=b[ve];Ee!==null&&Te!==void 0&&Te.update(Ee,le,c||a)}oe&&oe(K,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),x=null}const he=new vf;he.setAnimationLoop(fe),this.setAnimationLoop=function(K){oe=K},this.dispose=function(){}}}function A0(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,pf(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,M,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,A)):h.isMeshMatcapMaterial?(s(p,h),x(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,M):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Lt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Lt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*M,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,M){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=M*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Lt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function w0(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,M){const A=M.program;i.uniformBlockBinding(b,A)}function c(b,M){let A=r[b.id];A===void 0&&(x(b),A=u(b),r[b.id]=A,b.addEventListener("dispose",p));const I=M.program;i.updateUBOMapping(b,I);const C=e.render.frame;s[b.id]!==C&&(d(b),s[b.id]=C)}function u(b){const M=f();b.__bindingPointIndex=M;const A=n.createBuffer(),I=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,A),A}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=r[b.id],A=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,P=A.length;C<P;C++){const ne=Array.isArray(A[C])?A[C]:[A[C]];for(let E=0,T=ne.length;E<T;E++){const Z=ne[E];if(m(Z,C,E,I)===!0){const ie=Z.__offset,de=Array.isArray(Z.value)?Z.value:[Z.value];let N=0;for(let q=0;q<de.length;q++){const W=de[q],$=v(W);typeof W=="number"||typeof W=="boolean"?(Z.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,ie+N,Z.__data)):W.isMatrix3?(Z.__data[0]=W.elements[0],Z.__data[1]=W.elements[1],Z.__data[2]=W.elements[2],Z.__data[3]=0,Z.__data[4]=W.elements[3],Z.__data[5]=W.elements[4],Z.__data[6]=W.elements[5],Z.__data[7]=0,Z.__data[8]=W.elements[6],Z.__data[9]=W.elements[7],Z.__data[10]=W.elements[8],Z.__data[11]=0):(W.toArray(Z.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ie,Z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,M,A,I){const C=b.value,P=M+"_"+A;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{const ne=I[P];if(typeof C=="number"||typeof C=="boolean"){if(ne!==C)return I[P]=C,!0}else if(ne.equals(C)===!1)return ne.copy(C),!0}return!1}function x(b){const M=b.uniforms;let A=0;const I=16;for(let P=0,ne=M.length;P<ne;P++){const E=Array.isArray(M[P])?M[P]:[M[P]];for(let T=0,Z=E.length;T<Z;T++){const ie=E[T],de=Array.isArray(ie.value)?ie.value:[ie.value];for(let N=0,q=de.length;N<q;N++){const W=de[N],$=v(W),Y=A%I;Y!==0&&I-Y<$.boundary&&(A+=I-Y),ie.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=A,A+=$.storage}}}const C=A%I;return C>0&&(A+=I-C),b.__size=A,b.__cache={},this}function v(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){const M=b.target;M.removeEventListener("dispose",p);const A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class bf{constructor(e={}){const{canvas:t=Em(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;const M=this;let A=!1,I=0,C=0,P=null,ne=-1,E=null;const T=new vt,Z=new vt;let ie=null;const de=new Je(0);let N=0,q=t.width,W=t.height,$=1,Y=null,re=null;const oe=new vt(0,0,q,W),fe=new vt(0,0,q,W);let he=!1;const K=new gf;let le=!1,ve=!1,Ee=null;const Te=new _t,Ue=new Xe,Ie=new H,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return P===null?$:1}let G=i;function w(S,z){for(let X=0;X<S.length;X++){const j=S[X],k=t.getContext(j,z);if(k!==null)return k}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Aa}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",pe,!1),G===null){const z=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&z.shift(),G=w(z,S),G===null)throw w(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let R,O,B,J,Q,g,_,L,U,F,V,se,ee,ae,me,Se,te,Be,Ne,Pe,be,xe,y,ce;function Ae(){R=new Fv(G),O=new Pv(G,R,e),R.init(O),xe=new E0(G,R,O),B=new M0(G,R,O),J=new Hv(G),Q=new o0,g=new S0(G,R,B,Q,O,xe,J),_=new Dv(M),L=new Ov(M),U=new Ym(G,O),y=new Rv(G,R,U,O),F=new Bv(G,U,J,y),V=new Wv(G,F,U,J),Ne=new kv(G,O,g),Se=new Lv(Q),se=new s0(M,_,L,R,O,y,Se),ee=new A0(M,Q),ae=new l0,me=new p0(R,O),Be=new wv(M,_,L,B,V,d,l),te=new x0(M,V,O),ce=new w0(G,J,O,B),Pe=new Cv(G,R,J,O),be=new zv(G,R,J,O),J.programs=se.programs,M.capabilities=O,M.extensions=R,M.properties=Q,M.renderLists=ae,M.shadowMap=te,M.state=B,M.info=J}Ae();const ye=new b0(M,G);this.xr=ye,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const S=R.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=R.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(q,W,!1))},this.getSize=function(S){return S.set(q,W)},this.setSize=function(S,z,X=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,W=z,t.width=Math.floor(S*$),t.height=Math.floor(z*$),X===!0&&(t.style.width=S+"px",t.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(q*$,W*$).floor()},this.setDrawingBufferSize=function(S,z,X){q=S,W=z,$=X,t.width=Math.floor(S*X),t.height=Math.floor(z*X),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(oe)},this.setViewport=function(S,z,X,j){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,z,X,j),B.viewport(T.copy(oe).multiplyScalar($).floor())},this.getScissor=function(S){return S.copy(fe)},this.setScissor=function(S,z,X,j){S.isVector4?fe.set(S.x,S.y,S.z,S.w):fe.set(S,z,X,j),B.scissor(Z.copy(fe).multiplyScalar($).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(S){B.setScissorTest(he=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){re=S},this.getClearColor=function(S){return S.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(S=!0,z=!0,X=!0){let j=0;if(S){let k=!1;if(P!==null){const Me=P.texture.format;k=Me===tf||Me===ef||Me===Qu}if(k){const Me=P.texture.type,Re=Me===Wn||Me===Bn||Me===wa||Me===ai||Me===Zu||Me===Ju,De=Be.getClearColor(),Oe=Be.getClearAlpha(),We=De.r,ze=De.g,He=De.b;Re?(m[0]=We,m[1]=ze,m[2]=He,m[3]=Oe,G.clearBufferuiv(G.COLOR,0,m)):(x[0]=We,x[1]=ze,x[2]=He,x[3]=Oe,G.clearBufferiv(G.COLOR,0,x))}else j|=G.COLOR_BUFFER_BIT}z&&(j|=G.DEPTH_BUFFER_BIT),X&&(j|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ae.dispose(),me.dispose(),Q.dispose(),_.dispose(),L.dispose(),V.dispose(),y.dispose(),ce.dispose(),se.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",at),ye.removeEventListener("sessionend",Ze),Ee&&(Ee.dispose(),Ee=null),ct.stop()};function ue(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=J.autoReset,z=te.enabled,X=te.autoUpdate,j=te.needsUpdate,k=te.type;Ae(),J.autoReset=S,te.enabled=z,te.autoUpdate=X,te.needsUpdate=j,te.type=k}function pe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ge(S){const z=S.target;z.removeEventListener("dispose",ge),Le(z)}function Le(S){Ce(S),Q.remove(S)}function Ce(S){const z=Q.get(S).programs;z!==void 0&&(z.forEach(function(X){se.releaseProgram(X)}),S.isShaderMaterial&&se.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,X,j,k,Me){z===null&&(z=we);const Re=k.isMesh&&k.matrixWorld.determinant()<0,De=Pf(S,z,X,j,k);B.setMaterial(j,Re);let Oe=X.index,We=1;if(j.wireframe===!0){if(Oe=F.getWireframeAttribute(X),Oe===void 0)return;We=2}const ze=X.drawRange,He=X.attributes.position;let lt=ze.start*We,It=(ze.start+ze.count)*We;Me!==null&&(lt=Math.max(lt,Me.start*We),It=Math.min(It,(Me.start+Me.count)*We)),Oe!==null?(lt=Math.max(lt,0),It=Math.min(It,Oe.count)):He!=null&&(lt=Math.max(lt,0),It=Math.min(It,He.count));const pt=It-lt;if(pt<0||pt===1/0)return;y.setup(k,j,De,X,Oe);let hn,it=Pe;if(Oe!==null&&(hn=U.get(Oe),it=be,it.setIndex(hn)),k.isMesh)j.wireframe===!0?(B.setLineWidth(j.wireframeLinewidth*Ge()),it.setMode(G.LINES)):it.setMode(G.TRIANGLES);else if(k.isLine){let qe=j.linewidth;qe===void 0&&(qe=1),B.setLineWidth(qe*Ge()),k.isLineSegments?it.setMode(G.LINES):k.isLineLoop?it.setMode(G.LINE_LOOP):it.setMode(G.LINE_STRIP)}else k.isPoints?it.setMode(G.POINTS):k.isSprite&&it.setMode(G.TRIANGLES);if(k.isBatchedMesh)it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)it.renderInstances(lt,pt,k.count);else if(X.isInstancedBufferGeometry){const qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ws=Math.min(X.instanceCount,qe);it.renderInstances(lt,pt,Ws)}else it.render(lt,pt)};function je(S,z,X){S.transparent===!0&&S.side===Mn&&S.forceSinglePass===!1?(S.side=Lt,S.needsUpdate=!0,Rr(S,z,X),S.side=Xn,S.needsUpdate=!0,Rr(S,z,X),S.side=Mn):Rr(S,z,X)}this.compile=function(S,z,X=null){X===null&&(X=S),p=me.get(X),p.init(),b.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==X&&S.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(M._useLegacyLights);const j=new Set;return S.traverse(function(k){const Me=k.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const De=Me[Re];je(De,X,k),j.add(De)}else je(Me,X,k),j.add(Me)}),b.pop(),p=null,j},this.compileAsync=function(S,z,X=null){const j=this.compile(S,z,X);return new Promise(k=>{function Me(){if(j.forEach(function(Re){Q.get(Re).currentProgram.isReady()&&j.delete(Re)}),j.size===0){k(S);return}setTimeout(Me,10)}R.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ke=null;function st(S){Ke&&Ke(S)}function at(){ct.stop()}function Ze(){ct.start()}const ct=new vf;ct.setAnimationLoop(st),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(S){Ke=S,ye.setAnimationLoop(S),S===null?ct.stop():ct.start()},ye.addEventListener("sessionstart",at),ye.addEventListener("sessionend",Ze),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,z,P),p=me.get(S,b.length),p.init(),b.push(p),Te.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(Te),ve=this.localClippingEnabled,le=Se.init(this.clippingPlanes,ve),v=ae.get(S,h.length),v.init(),h.push(v),rn(S,z,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(Y,re),this.info.render.frame++,le===!0&&Se.beginShadows();const X=p.state.shadowsArray;if(te.render(X,S,z),le===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),Be.render(v,S),p.setupLights(M._useLegacyLights),z.isArrayCamera){const j=z.cameras;for(let k=0,Me=j.length;k<Me;k++){const Re=j[k];Na(v,S,Re,Re.viewport)}}else Na(v,S,z);P!==null&&(g.updateMultisampleRenderTarget(P),g.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(M,S,z),y.resetDefaultState(),ne=-1,E=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function rn(S,z,X,j){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){j&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Te);const Re=V.update(S),De=S.material;De.visible&&v.push(S,Re,De,X,Ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const Re=V.update(S),De=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ie.copy(Re.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Oe=Re.groups;for(let We=0,ze=Oe.length;We<ze;We++){const He=Oe[We],lt=De[He.materialIndex];lt&&lt.visible&&v.push(S,Re,lt,X,Ie.z,He)}}else De.visible&&v.push(S,Re,De,X,Ie.z,null)}}const Me=S.children;for(let Re=0,De=Me.length;Re<De;Re++)rn(Me[Re],z,X,j)}function Na(S,z,X,j){const k=S.opaque,Me=S.transmissive,Re=S.transparent;p.setupLightsView(X),le===!0&&Se.setGlobalState(M.clippingPlanes,X),Me.length>0&&Cf(k,Me,z,X),j&&B.viewport(T.copy(j)),k.length>0&&wr(k,z,X),Me.length>0&&wr(Me,z,X),Re.length>0&&wr(Re,z,X),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Cf(S,z,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Me=O.isWebGL2;Ee===null&&(Ee=new hi(1,1,{generateMipmaps:!0,type:R.has("EXT_color_buffer_half_float")?Sr:Wn,minFilter:Mr,samples:Me?4:0})),M.getDrawingBufferSize(Ue),Me?Ee.setSize(Ue.x,Ue.y):Ee.setSize(bs(Ue.x),bs(Ue.y));const Re=M.getRenderTarget();M.setRenderTarget(Ee),M.getClearColor(de),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear();const De=M.toneMapping;M.toneMapping=kn,wr(S,X,j),g.updateMultisampleRenderTarget(Ee),g.updateRenderTargetMipmap(Ee);let Oe=!1;for(let We=0,ze=z.length;We<ze;We++){const He=z[We],lt=He.object,It=He.geometry,pt=He.material,hn=He.group;if(pt.side===Mn&&lt.layers.test(j.layers)){const it=pt.side;pt.side=Lt,pt.needsUpdate=!0,Oa(lt,X,j,It,pt,hn),pt.side=it,pt.needsUpdate=!0,Oe=!0}}Oe===!0&&(g.updateMultisampleRenderTarget(Ee),g.updateRenderTargetMipmap(Ee)),M.setRenderTarget(Re),M.setClearColor(de,N),M.toneMapping=De}function wr(S,z,X){const j=z.isScene===!0?z.overrideMaterial:null;for(let k=0,Me=S.length;k<Me;k++){const Re=S[k],De=Re.object,Oe=Re.geometry,We=j===null?Re.material:j,ze=Re.group;De.layers.test(X.layers)&&Oa(De,z,X,Oe,We,ze)}}function Oa(S,z,X,j,k,Me){S.onBeforeRender(M,z,X,j,k,Me),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(M,z,X,j,S,Me),k.transparent===!0&&k.side===Mn&&k.forceSinglePass===!1?(k.side=Lt,k.needsUpdate=!0,M.renderBufferDirect(X,z,j,k,S,Me),k.side=Xn,k.needsUpdate=!0,M.renderBufferDirect(X,z,j,k,S,Me),k.side=Mn):M.renderBufferDirect(X,z,j,k,S,Me),S.onAfterRender(M,z,X,j,k,Me)}function Rr(S,z,X){z.isScene!==!0&&(z=we);const j=Q.get(S),k=p.state.lights,Me=p.state.shadowsArray,Re=k.state.version,De=se.getParameters(S,k.state,Me,z,X),Oe=se.getProgramCacheKey(De);let We=j.programs;j.environment=S.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(S.isMeshStandardMaterial?L:_).get(S.envMap||j.environment),We===void 0&&(S.addEventListener("dispose",ge),We=new Map,j.programs=We);let ze=We.get(Oe);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===Re)return Ba(S,De),ze}else De.uniforms=se.getUniforms(S),S.onBuild(X,De,M),S.onBeforeCompile(De,M),ze=se.acquireProgram(De,Oe),We.set(Oe,ze),j.uniforms=De.uniforms;const He=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=Se.uniform),Ba(S,De),j.needsLights=Df(S),j.lightsStateVersion=Re,j.needsLights&&(He.ambientLightColor.value=k.state.ambient,He.lightProbe.value=k.state.probe,He.directionalLights.value=k.state.directional,He.directionalLightShadows.value=k.state.directionalShadow,He.spotLights.value=k.state.spot,He.spotLightShadows.value=k.state.spotShadow,He.rectAreaLights.value=k.state.rectArea,He.ltc_1.value=k.state.rectAreaLTC1,He.ltc_2.value=k.state.rectAreaLTC2,He.pointLights.value=k.state.point,He.pointLightShadows.value=k.state.pointShadow,He.hemisphereLights.value=k.state.hemi,He.directionalShadowMap.value=k.state.directionalShadowMap,He.directionalShadowMatrix.value=k.state.directionalShadowMatrix,He.spotShadowMap.value=k.state.spotShadowMap,He.spotLightMatrix.value=k.state.spotLightMatrix,He.spotLightMap.value=k.state.spotLightMap,He.pointShadowMap.value=k.state.pointShadowMap,He.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function Fa(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=ps.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function Ba(S,z){const X=Q.get(S);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Pf(S,z,X,j,k){z.isScene!==!0&&(z=we),g.resetTextureUnits();const Me=z.fog,Re=j.isMeshStandardMaterial?z.environment:null,De=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Tn,Oe=(j.isMeshStandardMaterial?L:_).get(j.envMap||Re),We=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!X.morphAttributes.position,lt=!!X.morphAttributes.normal,It=!!X.morphAttributes.color;let pt=kn;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pt=M.toneMapping);const hn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,it=hn!==void 0?hn.length:0,qe=Q.get(j),Ws=p.state.lights;if(le===!0&&(ve===!0||S!==E)){const Ht=S===E&&j.id===ne;Se.setState(j,S,Ht)}let ot=!1;j.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ws.state.version||qe.outputColorSpace!==De||k.isBatchedMesh&&qe.batching===!1||!k.isBatchedMesh&&qe.batching===!0||k.isInstancedMesh&&qe.instancing===!1||!k.isInstancedMesh&&qe.instancing===!0||k.isSkinnedMesh&&qe.skinning===!1||!k.isSkinnedMesh&&qe.skinning===!0||k.isInstancedMesh&&qe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&qe.instancingColor===!1&&k.instanceColor!==null||qe.envMap!==Oe||j.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==We||qe.vertexTangents!==ze||qe.morphTargets!==He||qe.morphNormals!==lt||qe.morphColors!==It||qe.toneMapping!==pt||O.isWebGL2===!0&&qe.morphTargetsCount!==it)&&(ot=!0):(ot=!0,qe.__version=j.version);let qn=qe.currentProgram;ot===!0&&(qn=Rr(j,z,k));let za=!1,rr=!1,Xs=!1;const xt=qn.getUniforms(),Yn=qe.uniforms;if(B.useProgram(qn.program)&&(za=!0,rr=!0,Xs=!0),j.id!==ne&&(ne=j.id,rr=!0),za||E!==S){xt.setValue(G,"projectionMatrix",S.projectionMatrix),xt.setValue(G,"viewMatrix",S.matrixWorldInverse);const Ht=xt.map.cameraPosition;Ht!==void 0&&Ht.setValue(G,Ie.setFromMatrixPosition(S.matrixWorld)),O.logarithmicDepthBuffer&&xt.setValue(G,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&xt.setValue(G,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,rr=!0,Xs=!0)}if(k.isSkinnedMesh){xt.setOptional(G,k,"bindMatrix"),xt.setOptional(G,k,"bindMatrixInverse");const Ht=k.skeleton;Ht&&(O.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),xt.setValue(G,"boneTexture",Ht.boneTexture,g)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(xt.setOptional(G,k,"batchingTexture"),xt.setValue(G,"batchingTexture",k._matricesTexture,g));const qs=X.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0&&O.isWebGL2===!0)&&Ne.update(k,X,qn),(rr||qe.receiveShadow!==k.receiveShadow)&&(qe.receiveShadow=k.receiveShadow,xt.setValue(G,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Yn.envMap.value=Oe,Yn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),rr&&(xt.setValue(G,"toneMappingExposure",M.toneMappingExposure),qe.needsLights&&Lf(Yn,Xs),Me&&j.fog===!0&&ee.refreshFogUniforms(Yn,Me),ee.refreshMaterialUniforms(Yn,j,$,W,Ee),ps.upload(G,Fa(qe),Yn,g)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ps.upload(G,Fa(qe),Yn,g),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&xt.setValue(G,"center",k.center),xt.setValue(G,"modelViewMatrix",k.modelViewMatrix),xt.setValue(G,"normalMatrix",k.normalMatrix),xt.setValue(G,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ht=j.uniformsGroups;for(let Ys=0,Uf=Ht.length;Ys<Uf;Ys++)if(O.isWebGL2){const Ha=Ht[Ys];ce.update(Ha,qn),ce.bind(Ha,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function Lf(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Df(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,z,X){Q.get(S.texture).__webglTexture=z,Q.get(S.depthTexture).__webglTexture=X;const j=Q.get(S);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||R.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,z){const X=Q.get(S);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,X=0){P=S,I=z,C=X;let j=!0,k=null,Me=!1,Re=!1;if(S){const Oe=Q.get(S);Oe.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(G.FRAMEBUFFER,null),j=!1):Oe.__webglFramebuffer===void 0?g.setupRenderTarget(S):Oe.__hasExternalTextures&&g.rebindTextures(S,Q.get(S.texture).__webglTexture,Q.get(S.depthTexture).__webglTexture);const We=S.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Re=!0);const ze=Q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?k=ze[z][X]:k=ze[z],Me=!0):O.isWebGL2&&S.samples>0&&g.useMultisampledRTT(S)===!1?k=Q.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?k=ze[X]:k=ze,T.copy(S.viewport),Z.copy(S.scissor),ie=S.scissorTest}else T.copy(oe).multiplyScalar($).floor(),Z.copy(fe).multiplyScalar($).floor(),ie=he;if(B.bindFramebuffer(G.FRAMEBUFFER,k)&&O.drawBuffers&&j&&B.drawBuffers(S,k),B.viewport(T),B.scissor(Z),B.setScissorTest(ie),Me){const Oe=Q.get(S.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,Oe.__webglTexture,X)}else if(Re){const Oe=Q.get(S.texture),We=z||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Oe.__webglTexture,X||0,We)}ne=-1},this.readRenderTargetPixels=function(S,z,X,j,k,Me,Re){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){B.bindFramebuffer(G.FRAMEBUFFER,De);try{const Oe=S.texture,We=Oe.format,ze=Oe.type;if(We!==Qt&&xe.convert(We)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ze===Sr&&(R.has("EXT_color_buffer_half_float")||O.isWebGL2&&R.has("EXT_color_buffer_float"));if(ze!==Wn&&xe.convert(ze)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===zn&&(O.isWebGL2||R.has("OES_texture_float")||R.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-j&&X>=0&&X<=S.height-k&&G.readPixels(z,X,j,k,xe.convert(We),xe.convert(ze),Me)}finally{const Oe=P!==null?Q.get(P).__webglFramebuffer:null;B.bindFramebuffer(G.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(S,z,X=0){const j=Math.pow(2,-X),k=Math.floor(z.image.width*j),Me=Math.floor(z.image.height*j);g.setTexture2D(z,0),G.copyTexSubImage2D(G.TEXTURE_2D,X,0,0,S.x,S.y,k,Me),B.unbindTexture()},this.copyTextureToTexture=function(S,z,X,j=0){const k=z.image.width,Me=z.image.height,Re=xe.convert(X.format),De=xe.convert(X.type);g.setTexture2D(X,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,j,S.x,S.y,k,Me,Re,De,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,j,S.x,S.y,z.mipmaps[0].width,z.mipmaps[0].height,Re,z.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,j,S.x,S.y,Re,De,z.image),j===0&&X.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(S,z,X,j,k=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=S.max.x-S.min.x+1,Re=S.max.y-S.min.y+1,De=S.max.z-S.min.z+1,Oe=xe.convert(j.format),We=xe.convert(j.type);let ze;if(j.isData3DTexture)g.setTexture3D(j,0),ze=G.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)g.setTexture2DArray(j,0),ze=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const He=G.getParameter(G.UNPACK_ROW_LENGTH),lt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),It=G.getParameter(G.UNPACK_SKIP_PIXELS),pt=G.getParameter(G.UNPACK_SKIP_ROWS),hn=G.getParameter(G.UNPACK_SKIP_IMAGES),it=X.isCompressedTexture?X.mipmaps[k]:X.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,it.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,it.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,S.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,S.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,S.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(ze,k,z.x,z.y,z.z,Me,Re,De,Oe,We,it.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(ze,k,z.x,z.y,z.z,Me,Re,De,Oe,it.data)):G.texSubImage3D(ze,k,z.x,z.y,z.z,Me,Re,De,Oe,We,it),G.pixelStorei(G.UNPACK_ROW_LENGTH,He),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,lt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,It),G.pixelStorei(G.UNPACK_SKIP_ROWS,pt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,hn),k===0&&j.generateMipmaps&&G.generateMipmap(ze),B.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?g.setTextureCube(S,0):S.isData3DTexture?g.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?g.setTexture2DArray(S,0):g.setTexture2D(S,0),B.unbindTexture()},this.resetState=function(){I=0,C=0,P=null,B.reset(),y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ra?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Hs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?ci:rf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ci?gt:Tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class R0 extends bf{}R0.prototype.isWebGL1Renderer=!0;class C0 extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Af extends Ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gc=new H,Vc=new H,kc=new _t,No=new Pa,is=new Gs;class P0 extends Dt{constructor(e=new An,t=new Af){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Gc.fromBufferAttribute(t,r-1),Vc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Gc.distanceTo(Vc);e.setAttribute("lineDistance",new fn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(r),is.radius+=s,e.ray.intersectsSphere(is)===!1)return;kc.copy(r).invert(),No.copy(e.ray).applyMatrix4(kc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new H,u=new H,f=new H,d=new H,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const h=Math.max(0,a.start),b=Math.min(x.count,a.start+a.count);for(let M=h,A=b-1;M<A;M+=m){const I=x.getX(M),C=x.getX(M+1);if(c.fromBufferAttribute(p,I),u.fromBufferAttribute(p,C),No.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const ne=e.ray.origin.distanceTo(d);ne<e.near||ne>e.far||t.push({distance:ne,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let M=h,A=b-1;M<A;M+=m){if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,M+1),No.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Wc=new H,Xc=new H;class L0 extends P0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Wc.fromBufferAttribute(t,r),Xc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Wc.distanceTo(Xc);e.setAttribute("lineDistance",new fn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const rs=new H,ss=new H,Oo=new H,os=new Wt;class D0 extends An{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Xi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),d={},m=[];for(let x=0;x<l;x+=3){a?(c[0]=a.getX(x),c[1]=a.getX(x+1),c[2]=a.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:v,b:p,c:h}=os;if(v.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),os.getNormal(Oo),f[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,f[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,f[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){const M=(b+1)%3,A=f[b],I=f[M],C=os[u[b]],P=os[u[M]],ne=`${A}_${I}`,E=`${I}_${A}`;E in d&&d[E]?(Oo.dot(d[E].normal)<=s&&(m.push(C.x,C.y,C.z),m.push(P.x,P.y,P.z)),d[E]=null):ne in d||(d[ne]={index0:c[b],index1:c[M],normal:Oo.clone()})}}for(const x in d)if(d[x]){const{index0:v,index1:p}=d[x];rs.fromBufferAttribute(o,v),ss.fromBufferAttribute(o,p),m.push(rs.x,rs.y,rs.z),m.push(ss.x,ss.y,ss.z)}this.setAttribute("position",new fn(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class qc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);const Yc={type:"change"},Fo={type:"start"},jc={type:"end"},as=new Pa,Kc=new Fn,U0=Math.cos(70*Sm.DEG2RAD);class I0 extends gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",me),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",me),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Yc),i.update(),s=r.NONE},this.update=function(){const y=new H,ce=new di().setFromUnitVectors(e.up,new H(0,1,0)),Ae=ce.clone().invert(),ye=new H,ue=new di,D=new H,pe=2*Math.PI;return function(Le=null){const Ce=i.object.position;y.copy(Ce).sub(i.target),y.applyQuaternion(ce),o.setFromVector3(y),i.autoRotate&&s===r.NONE&&ie(T(Le)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let je=i.minAzimuthAngle,Ke=i.maxAzimuthAngle;isFinite(je)&&isFinite(Ke)&&(je<-Math.PI?je+=pe:je>Math.PI&&(je-=pe),Ke<-Math.PI?Ke+=pe:Ke>Math.PI&&(Ke-=pe),je<=Ke?o.theta=Math.max(je,Math.min(Ke,o.theta)):o.theta=o.theta>(je+Ke)/2?Math.max(je,o.theta):Math.min(Ke,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?o.radius=oe(o.radius):o.radius=oe(o.radius*c),y.setFromSpherical(o),y.applyQuaternion(Ae),Ce.copy(i.target).add(y),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let st=!1;if(i.zoomToCursor&&C){let at=null;if(i.object.isPerspectiveCamera){const Ze=y.length();at=oe(Ze*c);const ct=Ze-at;i.object.position.addScaledVector(A,ct),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ze=new H(I.x,I.y,0);Ze.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),st=!0;const ct=new H(I.x,I.y,0);ct.unproject(i.object),i.object.position.sub(ct).add(Ze),i.object.updateMatrixWorld(),at=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;at!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(at).add(i.object.position):(as.origin.copy(i.object.position),as.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(as.direction))<U0?e.lookAt(i.target):(Kc.setFromNormalAndCoplanarPoint(i.object.up,i.target),as.intersectPlane(Kc,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),st=!0);return c=1,C=!1,st||ye.distanceToSquared(i.object.position)>a||8*(1-ue.dot(i.object.quaternion))>a||D.distanceToSquared(i.target)>0?(i.dispatchEvent(Yc),ye.copy(i.object.position),ue.copy(i.object.quaternion),D.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Be),i.domElement.removeEventListener("pointerdown",g),i.domElement.removeEventListener("pointercancel",L),i.domElement.removeEventListener("wheel",V),i.domElement.removeEventListener("pointermove",_),i.domElement.removeEventListener("pointerup",L),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",me),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new qc,l=new qc;let c=1;const u=new H,f=new Xe,d=new Xe,m=new Xe,x=new Xe,v=new Xe,p=new Xe,h=new Xe,b=new Xe,M=new Xe,A=new H,I=new Xe;let C=!1;const P=[],ne={};let E=!1;function T(y){return y!==null?2*Math.PI/60*i.autoRotateSpeed*y:2*Math.PI/60/60*i.autoRotateSpeed}function Z(y){const ce=Math.abs(y*.01);return Math.pow(.95,i.zoomSpeed*ce)}function ie(y){l.theta-=y}function de(y){l.phi-=y}const N=function(){const y=new H;return function(Ae,ye){y.setFromMatrixColumn(ye,0),y.multiplyScalar(-Ae),u.add(y)}}(),q=function(){const y=new H;return function(Ae,ye){i.screenSpacePanning===!0?y.setFromMatrixColumn(ye,1):(y.setFromMatrixColumn(ye,0),y.crossVectors(i.object.up,y)),y.multiplyScalar(Ae),u.add(y)}}(),W=function(){const y=new H;return function(Ae,ye){const ue=i.domElement;if(i.object.isPerspectiveCamera){const D=i.object.position;y.copy(D).sub(i.target);let pe=y.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),N(2*Ae*pe/ue.clientHeight,i.object.matrix),q(2*ye*pe/ue.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(N(Ae*(i.object.right-i.object.left)/i.object.zoom/ue.clientWidth,i.object.matrix),q(ye*(i.object.top-i.object.bottom)/i.object.zoom/ue.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(y,ce){if(!i.zoomToCursor)return;C=!0;const Ae=i.domElement.getBoundingClientRect(),ye=y-Ae.left,ue=ce-Ae.top,D=Ae.width,pe=Ae.height;I.x=ye/D*2-1,I.y=-(ue/pe)*2+1,A.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function oe(y){return Math.max(i.minDistance,Math.min(i.maxDistance,y))}function fe(y){f.set(y.clientX,y.clientY)}function he(y){re(y.clientX,y.clientX),h.set(y.clientX,y.clientY)}function K(y){x.set(y.clientX,y.clientY)}function le(y){d.set(y.clientX,y.clientY),m.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ce=i.domElement;ie(2*Math.PI*m.x/ce.clientHeight),de(2*Math.PI*m.y/ce.clientHeight),f.copy(d),i.update()}function ve(y){b.set(y.clientX,y.clientY),M.subVectors(b,h),M.y>0?$(Z(M.y)):M.y<0&&Y(Z(M.y)),h.copy(b),i.update()}function Ee(y){v.set(y.clientX,y.clientY),p.subVectors(v,x).multiplyScalar(i.panSpeed),W(p.x,p.y),x.copy(v),i.update()}function Te(y){re(y.clientX,y.clientY),y.deltaY<0?Y(Z(y.deltaY)):y.deltaY>0&&$(Z(y.deltaY)),i.update()}function Ue(y){let ce=!1;switch(y.code){case i.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?de(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,i.keyPanSpeed),ce=!0;break;case i.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?de(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,-i.keyPanSpeed),ce=!0;break;case i.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?ie(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(i.keyPanSpeed,0),ce=!0;break;case i.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?ie(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(-i.keyPanSpeed,0),ce=!0;break}ce&&(y.preventDefault(),i.update())}function Ie(y){if(P.length===1)f.set(y.pageX,y.pageY);else{const ce=xe(y),Ae=.5*(y.pageX+ce.x),ye=.5*(y.pageY+ce.y);f.set(Ae,ye)}}function we(y){if(P.length===1)x.set(y.pageX,y.pageY);else{const ce=xe(y),Ae=.5*(y.pageX+ce.x),ye=.5*(y.pageY+ce.y);x.set(Ae,ye)}}function Ge(y){const ce=xe(y),Ae=y.pageX-ce.x,ye=y.pageY-ce.y,ue=Math.sqrt(Ae*Ae+ye*ye);h.set(0,ue)}function G(y){i.enableZoom&&Ge(y),i.enablePan&&we(y)}function w(y){i.enableZoom&&Ge(y),i.enableRotate&&Ie(y)}function R(y){if(P.length==1)d.set(y.pageX,y.pageY);else{const Ae=xe(y),ye=.5*(y.pageX+Ae.x),ue=.5*(y.pageY+Ae.y);d.set(ye,ue)}m.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ce=i.domElement;ie(2*Math.PI*m.x/ce.clientHeight),de(2*Math.PI*m.y/ce.clientHeight),f.copy(d)}function O(y){if(P.length===1)v.set(y.pageX,y.pageY);else{const ce=xe(y),Ae=.5*(y.pageX+ce.x),ye=.5*(y.pageY+ce.y);v.set(Ae,ye)}p.subVectors(v,x).multiplyScalar(i.panSpeed),W(p.x,p.y),x.copy(v)}function B(y){const ce=xe(y),Ae=y.pageX-ce.x,ye=y.pageY-ce.y,ue=Math.sqrt(Ae*Ae+ye*ye);b.set(0,ue),M.set(0,Math.pow(b.y/h.y,i.zoomSpeed)),$(M.y),h.copy(b);const D=(y.pageX+ce.x)*.5,pe=(y.pageY+ce.y)*.5;re(D,pe)}function J(y){i.enableZoom&&B(y),i.enablePan&&O(y)}function Q(y){i.enableZoom&&B(y),i.enableRotate&&R(y)}function g(y){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(y.pointerId),i.domElement.addEventListener("pointermove",_),i.domElement.addEventListener("pointerup",L)),Ne(y),y.pointerType==="touch"?Se(y):U(y))}function _(y){i.enabled!==!1&&(y.pointerType==="touch"?te(y):F(y))}function L(y){Pe(y),P.length===0&&(i.domElement.releasePointerCapture(y.pointerId),i.domElement.removeEventListener("pointermove",_),i.domElement.removeEventListener("pointerup",L)),i.dispatchEvent(jc),s=r.NONE}function U(y){let ce;switch(y.button){case 0:ce=i.mouseButtons.LEFT;break;case 1:ce=i.mouseButtons.MIDDLE;break;case 2:ce=i.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case vi.DOLLY:if(i.enableZoom===!1)return;he(y),s=r.DOLLY;break;case vi.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enablePan===!1)return;K(y),s=r.PAN}else{if(i.enableRotate===!1)return;fe(y),s=r.ROTATE}break;case vi.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enableRotate===!1)return;fe(y),s=r.ROTATE}else{if(i.enablePan===!1)return;K(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Fo)}function F(y){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;le(y);break;case r.DOLLY:if(i.enableZoom===!1)return;ve(y);break;case r.PAN:if(i.enablePan===!1)return;Ee(y);break}}function V(y){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(y.preventDefault(),i.dispatchEvent(Fo),Te(se(y)),i.dispatchEvent(jc))}function se(y){const ce=y.deltaMode,Ae={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(ce){case 1:Ae.deltaY*=16;break;case 2:Ae.deltaY*=100;break}return y.ctrlKey&&!E&&(Ae.deltaY*=10),Ae}function ee(y){y.key==="Control"&&(E=!0,document.addEventListener("keyup",ae,{passive:!0,capture:!0}))}function ae(y){y.key==="Control"&&(E=!1,document.removeEventListener("keyup",ae,{passive:!0,capture:!0}))}function me(y){i.enabled===!1||i.enablePan===!1||Ue(y)}function Se(y){switch(be(y),P.length){case 1:switch(i.touches.ONE){case xi.ROTATE:if(i.enableRotate===!1)return;Ie(y),s=r.TOUCH_ROTATE;break;case xi.PAN:if(i.enablePan===!1)return;we(y),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case xi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;G(y),s=r.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;w(y),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Fo)}function te(y){switch(be(y),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;R(y),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;O(y),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;J(y),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Q(y),i.update();break;default:s=r.NONE}}function Be(y){i.enabled!==!1&&y.preventDefault()}function Ne(y){P.push(y.pointerId)}function Pe(y){delete ne[y.pointerId];for(let ce=0;ce<P.length;ce++)if(P[ce]==y.pointerId){P.splice(ce,1);return}}function be(y){let ce=ne[y.pointerId];ce===void 0&&(ce=new Xe,ne[y.pointerId]=ce),ce.set(y.pageX,y.pageY)}function xe(y){const ce=y.pointerId===P[0]?P[1]:P[0];return ne[ce]}i.domElement.addEventListener("contextmenu",Be),i.domElement.addEventListener("pointerdown",g),i.domElement.addEventListener("pointercancel",L),i.domElement.addEventListener("wheel",V,{passive:!1}),document.addEventListener("keydown",ee,{passive:!0,capture:!0}),this.update()}}const Ia=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},N0={class:"formBuilder"},O0={class:"formRow"},F0={class:"formField"},B0=["for"],z0=["id","aria-invalid","onUpdate:modelValue","onInput"],H0={class:"formError"},G0={__name:"FormBuilderGrid",props:["form","layout"],setup(n){const e=n;function t(s){return e.form.submitted||e.form.errors[s]?e.form.errors[s]:""}const i=Object.keys(e.form.config),r=yr({});return i.forEach(s=>{const a=e.form.config[s];a.options&&(r[s]=a.options)}),(s,a)=>(xn(),In("div",N0,[(xn(!0),In(Vt,null,Ja(n.layout,o=>(xn(),In("div",O0,[(xn(!0),In(Vt,null,Ja(o,l=>(xn(),In("div",F0,[cn("div",null,[cn("label",{for:l,class:""},Va(n.form.config[l].label),9,B0),n.form.config[l].component==="number"?Fh((xn(),In("input",{key:0,id:l,type:"number",class:"w-full","aria-invalid":n.form.errors[l]?!0:null,"onUpdate:modelValue":c=>n.form.state[l]=c,onInput:c=>{n.form.validate(l)}},null,40,z0)),[[Jd,n.form.state[l]]]):Md("",!0),cn("small",H0,Va(t(l)),1)])]))),256))]))),256))]))}},V0=Ia(G0,[["__scopeId","data-v-5d6a66b4"]]);function k0(n,e){const t={};Object.keys(n).forEach(l=>{t[l]=""});let i={...t};const r=yr({state:{...e},config:n,errors:i,validate:o,submit:a,valid:!0,submitted:!1}),s={required:l=>{const c="Required";return Array.isArray(l)?l.length?"":c:l?"":c},max:(l,c)=>l&&l>c?"Should be no bigger than "+c:"",min:(l,c)=>l&&l<c?"Should be bigger than "+c:"",pattern:(l,c)=>{if(c==="email")return l.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)?null:"Must be a valid email"}};function a(){return Object.keys(n).forEach(l=>{o(l)}),r.submitted=!0,Object.values(r.errors).every(l=>!l)}function o(l){const c=n[l].validation;if(c&&Object.keys(c).length){let u="";Object.keys(c).find(f=>{const d=c[f];if(d)return u=s[f](r.state[l],d),u}),r.errors[l]=u}}return{form:r}}const W0=[["numberOfDrawers","width"],["drawerHeight","depth"]],X0={numberOfDrawers:{component:"number",label:"Number of drawers",validation:{required:!0,min:1,max:20}},drawerHeight:{component:"number",label:"Drawer height (cm)",validation:{required:!0,min:7,max:40}},width:{component:"number",label:"Dresser width",dictionary:"roles",validation:{required:!0,min:20,max:100}},depth:{component:"number",label:"Dresser depth",validation:{required:!0,min:20,max:60}}},wf={numberOfDrawers:3,drawerHeight:20,width:80,depth:40},q0={class:"paramsForm"},Y0=["disabled"],j0={__name:"ParamsForm",setup(n){const{form:e}=k0(X0,wf),t=qu(()=>Object.values(e.errors).some(i=>i));return(i,r)=>(xn(),In("div",q0,[nn(V0,{form:us(e),layout:us(W0)},null,8,["form","layout"]),cn("input",{type:"submit",value:"Generate",disabled:t.value,onClick:r[0]||(r[0]=tp(s=>i.$emit("generate",us(e).state),["prevent"]))},null,8,Y0)]))}},K0=Ia(j0,[["__scopeId","data-v-7ca21167"]]);function $0(n){const e=new bf({antialias:!0});return e.physicallyCorrectLights=!0,e.setSize(n.width,n.height),e.setClearColor(16777215),e}function $c(n){const e={...n,drawerHeight:n.drawerHeight/100,width:n.width/100,depth:n.depth/100},t=new La({color:8947848}),i=new fr,r=new nr(e.width,e.drawerHeight,e.depth),s=new D0(r),a=new Af({color:0}),o={};for(let l=0;l<e.numberOfDrawers;l++)o[l]=new En(r,t),o[l].position.y=l*e.drawerHeight,o[l].add(new L0(s,a)),i.add(o[l]);return i}const Rf=n=>(Th("data-v-1cfa8178"),n=n(),bh(),n),Z0={class:"container"},J0=Rf(()=>cn("div",{id:"threejs-container"},null,-1)),Q0={class:"form"},eM=Rf(()=>cn("h3",null,"drag to orbit, scroll to zoom",-1)),tM={__name:"App",setup(n){let e;const t=$0({width:600,height:600});e=$c({...wf});const i=new C0;i.add(e);const r=new Xt(75,600/600,.1,1e3);r.position.set(-.7,.7,.7);let s=new I0(r,t.domElement);s.enableDamping=!0,s.dampingFactor=.05,s.screenSpacePanning=!1,s.minDistance=1,s.maxDistance=3,s.maxPolarAngle=Math.PI/2;function a(){requestAnimationFrame(a),s.update(),t.render(i,r)}Lu(()=>{const l=document.getElementById("threejs-container");s.listenToKeyEvents(l),l.appendChild(t.domElement),a()});function o(l){i.remove(e),e=$c(l),i.add(e),t.render(i,r)}return(l,c)=>(xn(),In(Vt,null,[cn("div",Z0,[J0,cn("div",Q0,[nn(K0,{onGenerate:o})])]),eM],64))}},nM=Ia(tM,[["__scopeId","data-v-1cfa8178"]]);rp(nM).mount("#app");
