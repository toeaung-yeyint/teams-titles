(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function ja(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const oe={},qn=[],dt=()=>{},mg=()=>!1,yg=/^on[^a-z]/,Si=t=>yg.test(t),qa=t=>t.startsWith("onUpdate:"),Re=Object.assign,Ha=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vg=Object.prototype.hasOwnProperty,X=(t,e)=>vg.call(t,e),B=Array.isArray,Hn=t=>xi(t)==="[object Map]",Th=t=>xi(t)==="[object Set]",W=t=>typeof t=="function",Ee=t=>typeof t=="string",za=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",bh=t=>ue(t)&&W(t.then)&&W(t.catch),Ih=Object.prototype.toString,xi=t=>Ih.call(t),wg=t=>xi(t).slice(8,-1),Ch=t=>xi(t)==="[object Object]",Ka=t=>Ee(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xr=ja(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Di=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_g=/-(\w)/g,xt=Di(t=>t.replace(_g,(e,n)=>n?n.toUpperCase():"")),Eg=/\B([A-Z])/g,fs=Di(t=>t.replace(Eg,"-$1").toLowerCase()),Ni=Di(t=>t.charAt(0).toUpperCase()+t.slice(1)),To=Di(t=>t?`on${Ni(t)}`:""),qs=(t,e)=>!Object.is(t,e),Jr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},oi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Go=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let kc;const Yo=()=>kc||(kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wa(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ee(s)?Cg(s):Wa(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ee(t))return t;if(ue(t))return t}}const Tg=/;(?![^(]*\))/g,bg=/:([^]+)/,Ig=/\/\*[^]*?\*\//g;function Cg(t){const e={};return t.replace(Ig,"").split(Tg).forEach(n=>{if(n){const s=n.split(bg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fr(t){let e="";if(Ee(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=fr(t[n]);s&&(e+=s+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ag="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sg=ja(Ag);function Ah(t){return!!t||t===""}const Qo=t=>Ee(t)?t:t==null?"":B(t)||ue(t)&&(t.toString===Ih||!W(t.toString))?JSON.stringify(t,Sh,2):String(t),Sh=(t,e)=>e&&e.__v_isRef?Sh(t,e.value):Hn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Th(e)?{[`Set(${e.size})`]:[...e.values()]}:ue(e)&&!B(e)&&!Ch(e)?String(e):e;let ut;class xg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ut,!e&&ut&&(this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ut;try{return ut=this,e()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Dg(t,e=ut){e&&e.active&&e.effects.push(t)}function Ng(){return ut}const Ga=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xh=t=>(t.w&Jt)>0,Dh=t=>(t.n&Jt)>0,kg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jt},Rg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];xh(r)&&!Dh(r)?r.delete(t):e[n++]=r,r.w&=~Jt,r.n&=~Jt}e.length=n}},Xo=new WeakMap;let xs=0,Jt=1;const Jo=30;let ht;const wn=Symbol(""),Zo=Symbol("");class Ya{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Dg(this,s)}run(){if(!this.active)return this.fn();let e=ht,n=Kt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ht,ht=this,Kt=!0,Jt=1<<++xs,xs<=Jo?kg(this):Rc(this),this.fn()}finally{xs<=Jo&&Rg(this),Jt=1<<--xs,ht=this.parent,Kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ht===this?this.deferStop=!0:this.active&&(Rc(this),this.onStop&&this.onStop(),this.active=!1)}}function Rc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Kt=!0;const Nh=[];function ds(){Nh.push(Kt),Kt=!1}function ps(){const t=Nh.pop();Kt=t===void 0?!0:t}function et(t,e,n){if(Kt&&ht){let s=Xo.get(t);s||Xo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Ga()),kh(r)}}function kh(t,e){let n=!1;xs<=Jo?Dh(t)||(t.n|=Jt,n=!xh(t)):n=!t.has(ht),n&&(t.add(ht),ht.deps.push(t))}function Pt(t,e,n,s,r,i){const o=Xo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Ka(n)&&a.push(o.get("length")):(a.push(o.get(wn)),Hn(t)&&a.push(o.get(Zo)));break;case"delete":B(t)||(a.push(o.get(wn)),Hn(t)&&a.push(o.get(Zo)));break;case"set":Hn(t)&&a.push(o.get(wn));break}if(a.length===1)a[0]&&ea(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ea(Ga(l))}}function ea(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&Oc(s);for(const s of n)s.computed||Oc(s)}function Oc(t,e){(t!==ht||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Og=ja("__proto__,__v_isRef,__isVue"),Rh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(za)),Mg=Qa(),Pg=Qa(!1,!0),Lg=Qa(!0),Mc=Fg();function Fg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let i=0,o=this.length;i<o;i++)et(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ds();const s=Z(this)[e].apply(this,n);return ps(),s}}),t}function Ug(t){const e=Z(this);return et(e,"has",t),e.hasOwnProperty(t)}function Qa(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?em:Fh:e?Lh:Ph).get(s))return s;const o=B(s);if(!t){if(o&&X(Mc,r))return Reflect.get(Mc,r,i);if(r==="hasOwnProperty")return Ug}const a=Reflect.get(s,r,i);return(za(r)?Rh.has(r):Og(r))||(t||et(s,"get",r),e)?a:Ue(a)?o&&Ka(r)?a:a.value:ue(a)?t?Uh(a):Za(a):a}}const $g=Oh(),Bg=Oh(!0);function Oh(t=!1){return function(n,s,r,i){let o=n[s];if(Jn(o)&&Ue(o)&&!Ue(r))return!1;if(!t&&(!ai(r)&&!Jn(r)&&(o=Z(o),r=Z(r)),!B(n)&&Ue(o)&&!Ue(r)))return o.value=r,!0;const a=B(n)&&Ka(s)?Number(s)<n.length:X(n,s),l=Reflect.set(n,s,r,i);return n===Z(i)&&(a?qs(r,o)&&Pt(n,"set",s,r):Pt(n,"add",s,r)),l}}function Vg(t,e){const n=X(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Pt(t,"delete",e,void 0),s}function jg(t,e){const n=Reflect.has(t,e);return(!za(e)||!Rh.has(e))&&et(t,"has",e),n}function qg(t){return et(t,"iterate",B(t)?"length":wn),Reflect.ownKeys(t)}const Mh={get:Mg,set:$g,deleteProperty:Vg,has:jg,ownKeys:qg},Hg={get:Lg,set(t,e){return!0},deleteProperty(t,e){return!0}},zg=Re({},Mh,{get:Pg,set:Bg}),Xa=t=>t,ki=t=>Reflect.getPrototypeOf(t);function Or(t,e,n=!1,s=!1){t=t.__v_raw;const r=Z(t),i=Z(e);n||(e!==i&&et(r,"get",e),et(r,"get",i));const{has:o}=ki(r),a=s?Xa:n?tl:Hs;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Mr(t,e=!1){const n=this.__v_raw,s=Z(n),r=Z(t);return e||(t!==r&&et(s,"has",t),et(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Pr(t,e=!1){return t=t.__v_raw,!e&&et(Z(t),"iterate",wn),Reflect.get(t,"size",t)}function Pc(t){t=Z(t);const e=Z(this);return ki(e).has.call(e,t)||(e.add(t),Pt(e,"add",t,t)),this}function Lc(t,e){e=Z(e);const n=Z(this),{has:s,get:r}=ki(n);let i=s.call(n,t);i||(t=Z(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?qs(e,o)&&Pt(n,"set",t,e):Pt(n,"add",t,e),this}function Fc(t){const e=Z(this),{has:n,get:s}=ki(e);let r=n.call(e,t);r||(t=Z(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Pt(e,"delete",t,void 0),i}function Uc(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&Pt(t,"clear",void 0,void 0),n}function Lr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Z(o),l=e?Xa:t?tl:Hs;return!t&&et(a,"iterate",wn),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function Fr(t,e,n){return function(...s){const r=this.__v_raw,i=Z(r),o=Hn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?Xa:e?tl:Hs;return!e&&et(i,"iterate",l?Zo:wn),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function jt(t){return function(...e){return t==="delete"?!1:this}}function Kg(){const t={get(i){return Or(this,i)},get size(){return Pr(this)},has:Mr,add:Pc,set:Lc,delete:Fc,clear:Uc,forEach:Lr(!1,!1)},e={get(i){return Or(this,i,!1,!0)},get size(){return Pr(this)},has:Mr,add:Pc,set:Lc,delete:Fc,clear:Uc,forEach:Lr(!1,!0)},n={get(i){return Or(this,i,!0)},get size(){return Pr(this,!0)},has(i){return Mr.call(this,i,!0)},add:jt("add"),set:jt("set"),delete:jt("delete"),clear:jt("clear"),forEach:Lr(!0,!1)},s={get(i){return Or(this,i,!0,!0)},get size(){return Pr(this,!0)},has(i){return Mr.call(this,i,!0)},add:jt("add"),set:jt("set"),delete:jt("delete"),clear:jt("clear"),forEach:Lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Fr(i,!1,!1),n[i]=Fr(i,!0,!1),e[i]=Fr(i,!1,!0),s[i]=Fr(i,!0,!0)}),[t,n,e,s]}const[Wg,Gg,Yg,Qg]=Kg();function Ja(t,e){const n=e?t?Qg:Yg:t?Gg:Wg;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(X(n,r)&&r in s?n:s,r,i)}const Xg={get:Ja(!1,!1)},Jg={get:Ja(!1,!0)},Zg={get:Ja(!0,!1)},Ph=new WeakMap,Lh=new WeakMap,Fh=new WeakMap,em=new WeakMap;function tm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nm(t){return t.__v_skip||!Object.isExtensible(t)?0:tm(wg(t))}function Za(t){return Jn(t)?t:el(t,!1,Mh,Xg,Ph)}function sm(t){return el(t,!1,zg,Jg,Lh)}function Uh(t){return el(t,!0,Hg,Zg,Fh)}function el(t,e,n,s,r){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=nm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function zn(t){return Jn(t)?zn(t.__v_raw):!!(t&&t.__v_isReactive)}function Jn(t){return!!(t&&t.__v_isReadonly)}function ai(t){return!!(t&&t.__v_isShallow)}function $h(t){return zn(t)||Jn(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Bh(t){return oi(t,"__v_skip",!0),t}const Hs=t=>ue(t)?Za(t):t,tl=t=>ue(t)?Uh(t):t;function Vh(t){Kt&&ht&&(t=Z(t),kh(t.dep||(t.dep=Ga())))}function jh(t,e){t=Z(t);const n=t.dep;n&&ea(n)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function rm(t){return im(t,!1)}function im(t,e){return Ue(t)?t:new om(t,e)}class om{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:Hs(e)}get value(){return Vh(this),this._value}set value(e){const n=this.__v_isShallow||ai(e)||Jn(e);e=n?e:Z(e),qs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Hs(e),jh(this))}}function am(t){return Ue(t)?t.value:t}const lm={get:(t,e,n)=>am(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ue(r)&&!Ue(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function qh(t){return zn(t)?t:new Proxy(t,lm)}class cm{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ya(e,()=>{this._dirty||(this._dirty=!0,jh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Z(this);return Vh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function um(t,e,n=!1){let s,r;const i=W(t);return i?(s=t,r=dt):(s=t.get,r=t.set),new cm(s,r,i||!r,n)}function Wt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Ri(i,e,n)}return r}function pt(t,e,n,s){if(W(t)){const i=Wt(t,e,n,s);return i&&bh(i)&&i.catch(o=>{Ri(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(pt(t[i],e,n,s));return r}function Ri(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Wt(l,null,10,[t,o,a]);return}}hm(t,n,r,s)}function hm(t,e,n,s=!0){console.error(t)}let zs=!1,ta=!1;const Le=[];let Tt=0;const Kn=[];let Rt=null,dn=0;const Hh=Promise.resolve();let nl=null;function fm(t){const e=nl||Hh;return t?e.then(this?t.bind(this):t):e}function dm(t){let e=Tt+1,n=Le.length;for(;e<n;){const s=e+n>>>1;Ks(Le[s])<t?e=s+1:n=s}return e}function sl(t){(!Le.length||!Le.includes(t,zs&&t.allowRecurse?Tt+1:Tt))&&(t.id==null?Le.push(t):Le.splice(dm(t.id),0,t),zh())}function zh(){!zs&&!ta&&(ta=!0,nl=Hh.then(Wh))}function pm(t){const e=Le.indexOf(t);e>Tt&&Le.splice(e,1)}function gm(t){B(t)?Kn.push(...t):(!Rt||!Rt.includes(t,t.allowRecurse?dn+1:dn))&&Kn.push(t),zh()}function $c(t,e=zs?Tt+1:0){for(;e<Le.length;e++){const n=Le[e];n&&n.pre&&(Le.splice(e,1),e--,n())}}function Kh(t){if(Kn.length){const e=[...new Set(Kn)];if(Kn.length=0,Rt){Rt.push(...e);return}for(Rt=e,Rt.sort((n,s)=>Ks(n)-Ks(s)),dn=0;dn<Rt.length;dn++)Rt[dn]();Rt=null,dn=0}}const Ks=t=>t.id==null?1/0:t.id,mm=(t,e)=>{const n=Ks(t)-Ks(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wh(t){ta=!1,zs=!0,Le.sort(mm);const e=dt;try{for(Tt=0;Tt<Le.length;Tt++){const n=Le[Tt];n&&n.active!==!1&&Wt(n,null,14)}}finally{Tt=0,Le.length=0,Kh(),zs=!1,nl=null,(Le.length||Kn.length)&&Wh()}}function ym(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||oe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||oe;p&&(r=n.map(g=>Ee(g)?g.trim():g)),f&&(r=n.map(Go))}let a,l=s[a=To(e)]||s[a=To(xt(e))];!l&&i&&(l=s[a=To(fs(e))]),l&&pt(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pt(c,t,6,r)}}function Gh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!W(t)){const l=c=>{const u=Gh(c,e,!0);u&&(a=!0,Re(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ue(t)&&s.set(t,null),null):(B(i)?i.forEach(l=>o[l]=null):Re(o,i),ue(t)&&s.set(t,o),o)}function Oi(t,e){return!t||!Si(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,fs(e))||X(t,e))}let $e=null,Mi=null;function li(t){const e=$e;return $e=t,Mi=t&&t.type.__scopeId||null,e}function Yh(t){Mi=t}function Qh(){Mi=null}function Zr(t,e=$e,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Qc(-1);const i=li(e);let o;try{o=t(...r)}finally{li(i),s._d&&Qc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function bo(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:g,ctx:I,inheritAttrs:T}=t;let A,H;const q=li(t);try{if(n.shapeFlag&4){const k=r||s;A=Et(u.call(k,k,f,i,g,p,I)),H=l}else{const k=e;A=Et(k.length>1?k(i,{attrs:l,slots:a,emit:c}):k(i,null)),H=e.props?l:vm(l)}}catch(k){Fs.length=0,Ri(k,t,1),A=ie(Zt)}let z=A;if(H&&T!==!1){const k=Object.keys(H),{shapeFlag:Te}=z;k.length&&Te&7&&(o&&k.some(qa)&&(H=wm(H,o)),z=es(z,H))}return n.dirs&&(z=es(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),A=z,li(q),A}const vm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Si(n))&&((e||(e={}))[n]=t[n]);return e},wm=(t,e)=>{const n={};for(const s in t)(!qa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function _m(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Bc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!Oi(c,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Bc(s,o,c):!0:!!o;return!1}function Bc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Oi(n,i))return!0}return!1}function Em({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Tm=t=>t.__isSuspense;function bm(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):gm(t)}const Ur={};function Io(t,e,n){return Xh(t,e,n)}function Xh(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=oe){var a;const l=Ng()===((a=De)==null?void 0:a.scope)?De:null;let c,u=!1,f=!1;if(Ue(t)?(c=()=>t.value,u=ai(t)):zn(t)?(c=()=>t,s=!0):B(t)?(f=!0,u=t.some(k=>zn(k)||ai(k)),c=()=>t.map(k=>{if(Ue(k))return k.value;if(zn(k))return gn(k);if(W(k))return Wt(k,l,2)})):W(t)?e?c=()=>Wt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),pt(t,l,3,[g])}:c=dt,e&&s){const k=c;c=()=>gn(k())}let p,g=k=>{p=q.onStop=()=>{Wt(k,l,4)}},I;if(Gs)if(g=dt,e?n&&pt(e,l,3,[c(),f?[]:void 0,g]):c(),r==="sync"){const k=_y();I=k.__watcherHandles||(k.__watcherHandles=[])}else return dt;let T=f?new Array(t.length).fill(Ur):Ur;const A=()=>{if(q.active)if(e){const k=q.run();(s||u||(f?k.some((Te,tt)=>qs(Te,T[tt])):qs(k,T)))&&(p&&p(),pt(e,l,3,[k,T===Ur?void 0:f&&T[0]===Ur?[]:T,g]),T=k)}else q.run()};A.allowRecurse=!!e;let H;r==="sync"?H=A:r==="post"?H=()=>Qe(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),H=()=>sl(A));const q=new Ya(c,H);e?n?A():T=q.run():r==="post"?Qe(q.run.bind(q),l&&l.suspense):q.run();const z=()=>{q.stop(),l&&l.scope&&Ha(l.scope.effects,q)};return I&&I.push(z),z}function Im(t,e,n){const s=this.proxy,r=Ee(t)?t.includes(".")?Jh(s,t):()=>s[t]:t.bind(s,s);let i;W(e)?i=e:(i=e.handler,n=e);const o=De;ts(this);const a=Xh(r,i.bind(s),n);return o?ts(o):_n(),a}function Jh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function gn(t,e){if(!ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))gn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)gn(t[n],e);else if(Th(t)||Hn(t))t.forEach(n=>{gn(n,e)});else if(Ch(t))for(const n in t)gn(t[n],e);return t}function Zn(t,e){const n=$e;if(n===null)return t;const s=Ui(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=oe]=e[i];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&gn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function un(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(ds(),pt(l,n,8,[t.el,a,t,e]),ps())}}const Ps=t=>!!t.type.__asyncLoader,Zh=t=>t.type.__isKeepAlive;function Cm(t,e){ef(t,"a",e)}function Am(t,e){ef(t,"da",e)}function ef(t,e,n=De){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Pi(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Zh(r.parent.vnode)&&Sm(s,e,n,r),r=r.parent}}function Sm(t,e,n,s){const r=Pi(e,t,s,!0);tf(()=>{Ha(s[e],r)},n)}function Pi(t,e,n=De,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ds(),ts(n);const a=pt(e,n,t,o);return _n(),ps(),a});return s?r.unshift(i):r.push(i),i}}const Bt=t=>(e,n=De)=>(!Gs||t==="sp")&&Pi(t,(...s)=>e(...s),n),xm=Bt("bm"),Dm=Bt("m"),Nm=Bt("bu"),km=Bt("u"),Rm=Bt("bum"),tf=Bt("um"),Om=Bt("sp"),Mm=Bt("rtg"),Pm=Bt("rtc");function Lm(t,e=De){Pi("ec",t,e)}const nf="components";function at(t,e){return Um(nf,t,!0,e)||t}const Fm=Symbol.for("v-ndc");function Um(t,e,n=!0,s=!1){const r=$e||De;if(r){const i=r.type;if(t===nf){const a=my(i,!1);if(a&&(a===e||a===xt(e)||a===Ni(xt(e))))return i}const o=Vc(r[t]||i[t],e)||Vc(r.appContext[t],e);return!o&&s?i:o}}function Vc(t,e){return t&&(t[e]||t[xt(e)]||t[Ni(xt(e))])}function sf(t,e,n,s){let r;const i=n&&n[s];if(B(t)||Ee(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ue(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function $m(t,e,n={},s,r){if($e.isCE||$e.parent&&Ps($e.parent)&&$e.parent.isCE)return e!=="default"&&(n.name=e),ie("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Ne();const o=i&&rf(i(n)),a=ol(Xe,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function rf(t){return t.some(e=>gf(e)?!(e.type===Zt||e.type===Xe&&!rf(e.children)):!0)?t:null}const na=t=>t?vf(t)?Ui(t)||t.proxy:na(t.parent):null,Ls=Re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>na(t.parent),$root:t=>na(t.root),$emit:t=>t.emit,$options:t=>rl(t),$forceUpdate:t=>t.f||(t.f=()=>sl(t.update)),$nextTick:t=>t.n||(t.n=fm.bind(t.proxy)),$watch:t=>Im.bind(t)}),Co=(t,e)=>t!==oe&&!t.__isScriptSetup&&X(t,e),Bm={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Co(s,e))return o[e]=1,s[e];if(r!==oe&&X(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,i[e];if(n!==oe&&X(n,e))return o[e]=4,n[e];sa&&(o[e]=0)}}const u=Ls[e];let f,p;if(u)return e==="$attrs"&&et(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==oe&&X(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,X(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Co(r,e)?(r[e]=n,!0):s!==oe&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==oe&&X(t,o)||Co(e,o)||(a=i[0])&&X(a,o)||X(s,o)||X(Ls,o)||X(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jc(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let sa=!0;function Vm(t){const e=rl(t),n=t.proxy,s=t.ctx;sa=!1,e.beforeCreate&&qc(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:I,activated:T,deactivated:A,beforeDestroy:H,beforeUnmount:q,destroyed:z,unmounted:k,render:Te,renderTracked:tt,renderTriggered:Nt,errorCaptured:nt,serverPrefetch:Mn,expose:an,inheritAttrs:Es,components:Dr,directives:Nr,filters:wo}=e;if(c&&jm(c,s,null),o)for(const fe in o){const se=o[fe];W(se)&&(s[fe]=se.bind(n))}if(r){const fe=r.call(n,n);ue(fe)&&(t.data=Za(fe))}if(sa=!0,i)for(const fe in i){const se=i[fe],ln=W(se)?se.bind(n,n):W(se.get)?se.get.bind(n,n):dt,kr=!W(se)&&W(se.set)?se.set.bind(n):dt,cn=vy({get:ln,set:kr});Object.defineProperty(s,fe,{enumerable:!0,configurable:!0,get:()=>cn.value,set:vt=>cn.value=vt})}if(a)for(const fe in a)of(a[fe],s,n,fe);if(l){const fe=W(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(se=>{Gm(se,fe[se])})}u&&qc(u,t,"c");function He(fe,se){B(se)?se.forEach(ln=>fe(ln.bind(n))):se&&fe(se.bind(n))}if(He(xm,f),He(Dm,p),He(Nm,g),He(km,I),He(Cm,T),He(Am,A),He(Lm,nt),He(Pm,tt),He(Mm,Nt),He(Rm,q),He(tf,k),He(Om,Mn),B(an))if(an.length){const fe=t.exposed||(t.exposed={});an.forEach(se=>{Object.defineProperty(fe,se,{get:()=>n[se],set:ln=>n[se]=ln})})}else t.exposed||(t.exposed={});Te&&t.render===dt&&(t.render=Te),Es!=null&&(t.inheritAttrs=Es),Dr&&(t.components=Dr),Nr&&(t.directives=Nr)}function jm(t,e,n=dt){B(t)&&(t=ra(t));for(const s in t){const r=t[s];let i;ue(r)?"default"in r?i=ei(r.from||s,r.default,!0):i=ei(r.from||s):i=ei(r),Ue(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function qc(t,e,n){pt(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function of(t,e,n,s){const r=s.includes(".")?Jh(n,s):()=>n[s];if(Ee(t)){const i=e[t];W(i)&&Io(r,i)}else if(W(t))Io(r,t.bind(n));else if(ue(t))if(B(t))t.forEach(i=>of(i,e,n,s));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&Io(r,i,t)}}function rl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>ci(l,c,o,!0)),ci(l,e,o)),ue(e)&&i.set(e,l),l}function ci(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ci(t,i,n,!0),r&&r.forEach(o=>ci(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=qm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qm={data:Hc,props:zc,emits:zc,methods:Ds,computed:Ds,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:Ds,directives:Ds,watch:zm,provide:Hc,inject:Hm};function Hc(t,e){return e?t?function(){return Re(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Hm(t,e){return Ds(ra(t),ra(e))}function ra(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ke(t,e){return t?[...new Set([].concat(t,e))]:e}function Ds(t,e){return t?Re(Object.create(null),t,e):e}function zc(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:Re(Object.create(null),jc(t),jc(e??{})):e}function zm(t,e){if(!t)return e;if(!e)return t;const n=Re(Object.create(null),t);for(const s in e)n[s]=Ke(t[s],e[s]);return n}function af(){return{app:null,config:{isNativeTag:mg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Km=0;function Wm(t,e){return function(s,r=null){W(s)||(s=Re({},s)),r!=null&&!ue(r)&&(r=null);const i=af(),o=new Set;let a=!1;const l=i.app={_uid:Km++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Ey,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(l,...u)):W(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const p=ie(s,r);return p.appContext=i,u&&e?e(p,c):t(p,c,f),a=!0,l._container=c,c.__vue_app__=l,Ui(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){ui=l;try{return c()}finally{ui=null}}};return l}}let ui=null;function Gm(t,e){if(De){let n=De.provides;const s=De.parent&&De.parent.provides;s===n&&(n=De.provides=Object.create(s)),n[t]=e}}function ei(t,e,n=!1){const s=De||$e;if(s||ui){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ui._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&W(e)?e.call(s&&s.proxy):e}}function Ym(t,e,n,s=!1){const r={},i={};oi(i,Fi,1),t.propsDefaults=Object.create(null),lf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:sm(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Qm(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Z(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Oi(t.emitsOptions,p))continue;const g=e[p];if(l)if(X(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const I=xt(p);r[I]=ia(l,a,I,g,t,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{lf(t,e,r,i)&&(c=!0);let u;for(const f in a)(!e||!X(e,f)&&((u=fs(f))===f||!X(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=ia(l,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!X(e,f))&&(delete i[f],c=!0)}c&&Pt(t,"set","$attrs")}function lf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xr(l))continue;const c=e[l];let u;r&&X(r,u=xt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Oi(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=Z(n),c=a||oe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ia(r,l,f,c[f],t,!X(c,f))}}return o}function ia(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&W(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(ts(r),s=c[n]=l.call(null,e),_n())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===fs(n))&&(s=!0))}return s}function cf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!W(t)){const u=f=>{l=!0;const[p,g]=cf(f,e,!0);Re(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ue(t)&&s.set(t,qn),qn;if(B(i))for(let u=0;u<i.length;u++){const f=xt(i[u]);Kc(f)&&(o[f]=oe)}else if(i)for(const u in i){const f=xt(u);if(Kc(f)){const p=i[u],g=o[f]=B(p)||W(p)?{type:p}:Re({},p);if(g){const I=Yc(Boolean,g.type),T=Yc(String,g.type);g[0]=I>-1,g[1]=T<0||I<T,(I>-1||X(g,"default"))&&a.push(f)}}}const c=[o,a];return ue(t)&&s.set(t,c),c}function Kc(t){return t[0]!=="$"}function Wc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Gc(t,e){return Wc(t)===Wc(e)}function Yc(t,e){return B(e)?e.findIndex(n=>Gc(n,t)):W(e)&&Gc(e,t)?0:-1}const uf=t=>t[0]==="_"||t==="$stable",il=t=>B(t)?t.map(Et):[Et(t)],Xm=(t,e,n)=>{if(e._n)return e;const s=Zr((...r)=>il(e(...r)),n);return s._c=!1,s},hf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(uf(r))continue;const i=t[r];if(W(i))e[r]=Xm(r,i,s);else if(i!=null){const o=il(i);e[r]=()=>o}}},ff=(t,e)=>{const n=il(e);t.slots.default=()=>n},Jm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),oi(e,"_",n)):hf(e,t.slots={})}else t.slots={},e&&ff(t,e);oi(t.slots,Fi,1)},Zm=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=oe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Re(r,e),!n&&a===1&&delete r._):(i=!e.$stable,hf(e,r)),o=e}else e&&(ff(t,e),o={default:1});if(i)for(const a in r)!uf(a)&&!(a in o)&&delete r[a]};function oa(t,e,n,s,r=!1){if(B(t)){t.forEach((p,g)=>oa(p,e&&(B(e)?e[g]:e),n,s,r));return}if(Ps(s)&&!r)return;const i=s.shapeFlag&4?Ui(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===oe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Ee(c)?(u[c]=null,X(f,c)&&(f[c]=null)):Ue(c)&&(c.value=null)),W(l))Wt(l,a,12,[o,u]);else{const p=Ee(l),g=Ue(l);if(p||g){const I=()=>{if(t.f){const T=p?X(f,l)?f[l]:u[l]:l.value;r?B(T)&&Ha(T,i):B(T)?T.includes(i)||T.push(i):p?(u[l]=[i],X(f,l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else p?(u[l]=o,X(f,l)&&(f[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,Qe(I,n)):I()}}}const Qe=bm;function ey(t){return ty(t)}function ty(t,e){const n=Yo();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=dt,insertStaticContent:I}=t,T=(h,d,m,w=null,v=null,C=null,D=!1,b=null,S=!!d.dynamicChildren)=>{if(h===d)return;h&&!bs(h,d)&&(w=Rr(h),vt(h,v,C,!0),h=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:_,ref:P,shapeFlag:R}=d;switch(_){case Li:A(h,d,m,w);break;case Zt:H(h,d,m,w);break;case Ao:h==null&&q(d,m,w,D);break;case Xe:Dr(h,d,m,w,v,C,D,b,S);break;default:R&1?Te(h,d,m,w,v,C,D,b,S):R&6?Nr(h,d,m,w,v,C,D,b,S):(R&64||R&128)&&_.process(h,d,m,w,v,C,D,b,S,Pn)}P!=null&&v&&oa(P,h&&h.ref,C,d||h,!d)},A=(h,d,m,w)=>{if(h==null)s(d.el=a(d.children),m,w);else{const v=d.el=h.el;d.children!==h.children&&c(v,d.children)}},H=(h,d,m,w)=>{h==null?s(d.el=l(d.children||""),m,w):d.el=h.el},q=(h,d,m,w)=>{[h.el,h.anchor]=I(h.children,d,m,w,h.el,h.anchor)},z=({el:h,anchor:d},m,w)=>{let v;for(;h&&h!==d;)v=p(h),s(h,m,w),h=v;s(d,m,w)},k=({el:h,anchor:d})=>{let m;for(;h&&h!==d;)m=p(h),r(h),h=m;r(d)},Te=(h,d,m,w,v,C,D,b,S)=>{D=D||d.type==="svg",h==null?tt(d,m,w,v,C,D,b,S):Mn(h,d,v,C,D,b,S)},tt=(h,d,m,w,v,C,D,b)=>{let S,_;const{type:P,props:R,shapeFlag:L,transition:V,dirs:G}=h;if(S=h.el=o(h.type,C,R&&R.is,R),L&8?u(S,h.children):L&16&&nt(h.children,S,null,w,v,C&&P!=="foreignObject",D,b),G&&un(h,null,w,"created"),Nt(S,h,h.scopeId,D,w),R){for(const ne in R)ne!=="value"&&!Xr(ne)&&i(S,ne,null,R[ne],C,h.children,w,v,kt);"value"in R&&i(S,"value",null,R.value),(_=R.onVnodeBeforeMount)&&_t(_,w,h)}G&&un(h,null,w,"beforeMount");const re=(!v||v&&!v.pendingBranch)&&V&&!V.persisted;re&&V.beforeEnter(S),s(S,d,m),((_=R&&R.onVnodeMounted)||re||G)&&Qe(()=>{_&&_t(_,w,h),re&&V.enter(S),G&&un(h,null,w,"mounted")},v)},Nt=(h,d,m,w,v)=>{if(m&&g(h,m),w)for(let C=0;C<w.length;C++)g(h,w[C]);if(v){let C=v.subTree;if(d===C){const D=v.vnode;Nt(h,D,D.scopeId,D.slotScopeIds,v.parent)}}},nt=(h,d,m,w,v,C,D,b,S=0)=>{for(let _=S;_<h.length;_++){const P=h[_]=b?qt(h[_]):Et(h[_]);T(null,P,d,m,w,v,C,D,b)}},Mn=(h,d,m,w,v,C,D)=>{const b=d.el=h.el;let{patchFlag:S,dynamicChildren:_,dirs:P}=d;S|=h.patchFlag&16;const R=h.props||oe,L=d.props||oe;let V;m&&hn(m,!1),(V=L.onVnodeBeforeUpdate)&&_t(V,m,d,h),P&&un(d,h,m,"beforeUpdate"),m&&hn(m,!0);const G=v&&d.type!=="foreignObject";if(_?an(h.dynamicChildren,_,b,m,w,G,C):D||se(h,d,b,null,m,w,G,C,!1),S>0){if(S&16)Es(b,d,R,L,m,w,v);else if(S&2&&R.class!==L.class&&i(b,"class",null,L.class,v),S&4&&i(b,"style",R.style,L.style,v),S&8){const re=d.dynamicProps;for(let ne=0;ne<re.length;ne++){const me=re[ne],ct=R[me],Ln=L[me];(Ln!==ct||me==="value")&&i(b,me,ct,Ln,v,h.children,m,w,kt)}}S&1&&h.children!==d.children&&u(b,d.children)}else!D&&_==null&&Es(b,d,R,L,m,w,v);((V=L.onVnodeUpdated)||P)&&Qe(()=>{V&&_t(V,m,d,h),P&&un(d,h,m,"updated")},w)},an=(h,d,m,w,v,C,D)=>{for(let b=0;b<d.length;b++){const S=h[b],_=d[b],P=S.el&&(S.type===Xe||!bs(S,_)||S.shapeFlag&70)?f(S.el):m;T(S,_,P,null,w,v,C,D,!0)}},Es=(h,d,m,w,v,C,D)=>{if(m!==w){if(m!==oe)for(const b in m)!Xr(b)&&!(b in w)&&i(h,b,m[b],null,D,d.children,v,C,kt);for(const b in w){if(Xr(b))continue;const S=w[b],_=m[b];S!==_&&b!=="value"&&i(h,b,_,S,D,d.children,v,C,kt)}"value"in w&&i(h,"value",m.value,w.value)}},Dr=(h,d,m,w,v,C,D,b,S)=>{const _=d.el=h?h.el:a(""),P=d.anchor=h?h.anchor:a("");let{patchFlag:R,dynamicChildren:L,slotScopeIds:V}=d;V&&(b=b?b.concat(V):V),h==null?(s(_,m,w),s(P,m,w),nt(d.children,m,P,v,C,D,b,S)):R>0&&R&64&&L&&h.dynamicChildren?(an(h.dynamicChildren,L,m,v,C,D,b),(d.key!=null||v&&d===v.subTree)&&df(h,d,!0)):se(h,d,m,P,v,C,D,b,S)},Nr=(h,d,m,w,v,C,D,b,S)=>{d.slotScopeIds=b,h==null?d.shapeFlag&512?v.ctx.activate(d,m,w,D,S):wo(d,m,w,v,C,D,S):Cc(h,d,S)},wo=(h,d,m,w,v,C,D)=>{const b=h.component=hy(h,w,v);if(Zh(h)&&(b.ctx.renderer=Pn),fy(b),b.asyncDep){if(v&&v.registerDep(b,He),!h.el){const S=b.subTree=ie(Zt);H(null,S,d,m)}return}He(b,h,d,m,v,C,D)},Cc=(h,d,m)=>{const w=d.component=h.component;if(_m(h,d,m))if(w.asyncDep&&!w.asyncResolved){fe(w,d,m);return}else w.next=d,pm(w.update),w.update();else d.el=h.el,w.vnode=d},He=(h,d,m,w,v,C,D)=>{const b=()=>{if(h.isMounted){let{next:P,bu:R,u:L,parent:V,vnode:G}=h,re=P,ne;hn(h,!1),P?(P.el=G.el,fe(h,P,D)):P=G,R&&Jr(R),(ne=P.props&&P.props.onVnodeBeforeUpdate)&&_t(ne,V,P,G),hn(h,!0);const me=bo(h),ct=h.subTree;h.subTree=me,T(ct,me,f(ct.el),Rr(ct),h,v,C),P.el=me.el,re===null&&Em(h,me.el),L&&Qe(L,v),(ne=P.props&&P.props.onVnodeUpdated)&&Qe(()=>_t(ne,V,P,G),v)}else{let P;const{el:R,props:L}=d,{bm:V,m:G,parent:re}=h,ne=Ps(d);if(hn(h,!1),V&&Jr(V),!ne&&(P=L&&L.onVnodeBeforeMount)&&_t(P,re,d),hn(h,!0),R&&Eo){const me=()=>{h.subTree=bo(h),Eo(R,h.subTree,h,v,null)};ne?d.type.__asyncLoader().then(()=>!h.isUnmounted&&me()):me()}else{const me=h.subTree=bo(h);T(null,me,m,w,h,v,C),d.el=me.el}if(G&&Qe(G,v),!ne&&(P=L&&L.onVnodeMounted)){const me=d;Qe(()=>_t(P,re,me),v)}(d.shapeFlag&256||re&&Ps(re.vnode)&&re.vnode.shapeFlag&256)&&h.a&&Qe(h.a,v),h.isMounted=!0,d=m=w=null}},S=h.effect=new Ya(b,()=>sl(_),h.scope),_=h.update=()=>S.run();_.id=h.uid,hn(h,!0),_()},fe=(h,d,m)=>{d.component=h;const w=h.vnode.props;h.vnode=d,h.next=null,Qm(h,d.props,w,m),Zm(h,d.children,m),ds(),$c(),ps()},se=(h,d,m,w,v,C,D,b,S=!1)=>{const _=h&&h.children,P=h?h.shapeFlag:0,R=d.children,{patchFlag:L,shapeFlag:V}=d;if(L>0){if(L&128){kr(_,R,m,w,v,C,D,b,S);return}else if(L&256){ln(_,R,m,w,v,C,D,b,S);return}}V&8?(P&16&&kt(_,v,C),R!==_&&u(m,R)):P&16?V&16?kr(_,R,m,w,v,C,D,b,S):kt(_,v,C,!0):(P&8&&u(m,""),V&16&&nt(R,m,w,v,C,D,b,S))},ln=(h,d,m,w,v,C,D,b,S)=>{h=h||qn,d=d||qn;const _=h.length,P=d.length,R=Math.min(_,P);let L;for(L=0;L<R;L++){const V=d[L]=S?qt(d[L]):Et(d[L]);T(h[L],V,m,null,v,C,D,b,S)}_>P?kt(h,v,C,!0,!1,R):nt(d,m,w,v,C,D,b,S,R)},kr=(h,d,m,w,v,C,D,b,S)=>{let _=0;const P=d.length;let R=h.length-1,L=P-1;for(;_<=R&&_<=L;){const V=h[_],G=d[_]=S?qt(d[_]):Et(d[_]);if(bs(V,G))T(V,G,m,null,v,C,D,b,S);else break;_++}for(;_<=R&&_<=L;){const V=h[R],G=d[L]=S?qt(d[L]):Et(d[L]);if(bs(V,G))T(V,G,m,null,v,C,D,b,S);else break;R--,L--}if(_>R){if(_<=L){const V=L+1,G=V<P?d[V].el:w;for(;_<=L;)T(null,d[_]=S?qt(d[_]):Et(d[_]),m,G,v,C,D,b,S),_++}}else if(_>L)for(;_<=R;)vt(h[_],v,C,!0),_++;else{const V=_,G=_,re=new Map;for(_=G;_<=L;_++){const st=d[_]=S?qt(d[_]):Et(d[_]);st.key!=null&&re.set(st.key,_)}let ne,me=0;const ct=L-G+1;let Ln=!1,xc=0;const Ts=new Array(ct);for(_=0;_<ct;_++)Ts[_]=0;for(_=V;_<=R;_++){const st=h[_];if(me>=ct){vt(st,v,C,!0);continue}let wt;if(st.key!=null)wt=re.get(st.key);else for(ne=G;ne<=L;ne++)if(Ts[ne-G]===0&&bs(st,d[ne])){wt=ne;break}wt===void 0?vt(st,v,C,!0):(Ts[wt-G]=_+1,wt>=xc?xc=wt:Ln=!0,T(st,d[wt],m,null,v,C,D,b,S),me++)}const Dc=Ln?ny(Ts):qn;for(ne=Dc.length-1,_=ct-1;_>=0;_--){const st=G+_,wt=d[st],Nc=st+1<P?d[st+1].el:w;Ts[_]===0?T(null,wt,m,Nc,v,C,D,b,S):Ln&&(ne<0||_!==Dc[ne]?cn(wt,m,Nc,2):ne--)}}},cn=(h,d,m,w,v=null)=>{const{el:C,type:D,transition:b,children:S,shapeFlag:_}=h;if(_&6){cn(h.component.subTree,d,m,w);return}if(_&128){h.suspense.move(d,m,w);return}if(_&64){D.move(h,d,m,Pn);return}if(D===Xe){s(C,d,m);for(let R=0;R<S.length;R++)cn(S[R],d,m,w);s(h.anchor,d,m);return}if(D===Ao){z(h,d,m);return}if(w!==2&&_&1&&b)if(w===0)b.beforeEnter(C),s(C,d,m),Qe(()=>b.enter(C),v);else{const{leave:R,delayLeave:L,afterLeave:V}=b,G=()=>s(C,d,m),re=()=>{R(C,()=>{G(),V&&V()})};L?L(C,G,re):re()}else s(C,d,m)},vt=(h,d,m,w=!1,v=!1)=>{const{type:C,props:D,ref:b,children:S,dynamicChildren:_,shapeFlag:P,patchFlag:R,dirs:L}=h;if(b!=null&&oa(b,null,m,h,!0),P&256){d.ctx.deactivate(h);return}const V=P&1&&L,G=!Ps(h);let re;if(G&&(re=D&&D.onVnodeBeforeUnmount)&&_t(re,d,h),P&6)gg(h.component,m,w);else{if(P&128){h.suspense.unmount(m,w);return}V&&un(h,null,d,"beforeUnmount"),P&64?h.type.remove(h,d,m,v,Pn,w):_&&(C!==Xe||R>0&&R&64)?kt(_,d,m,!1,!0):(C===Xe&&R&384||!v&&P&16)&&kt(S,d,m),w&&Ac(h)}(G&&(re=D&&D.onVnodeUnmounted)||V)&&Qe(()=>{re&&_t(re,d,h),V&&un(h,null,d,"unmounted")},m)},Ac=h=>{const{type:d,el:m,anchor:w,transition:v}=h;if(d===Xe){pg(m,w);return}if(d===Ao){k(h);return}const C=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:D,delayLeave:b}=v,S=()=>D(m,C);b?b(h.el,C,S):S()}else C()},pg=(h,d)=>{let m;for(;h!==d;)m=p(h),r(h),h=m;r(d)},gg=(h,d,m)=>{const{bum:w,scope:v,update:C,subTree:D,um:b}=h;w&&Jr(w),v.stop(),C&&(C.active=!1,vt(D,h,d,m)),b&&Qe(b,d),Qe(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},kt=(h,d,m,w=!1,v=!1,C=0)=>{for(let D=C;D<h.length;D++)vt(h[D],d,m,w,v)},Rr=h=>h.shapeFlag&6?Rr(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),Sc=(h,d,m)=>{h==null?d._vnode&&vt(d._vnode,null,null,!0):T(d._vnode||null,h,d,null,null,null,m),$c(),Kh(),d._vnode=h},Pn={p:T,um:vt,m:cn,r:Ac,mt:wo,mc:nt,pc:se,pbc:an,n:Rr,o:t};let _o,Eo;return e&&([_o,Eo]=e(Pn)),{render:Sc,hydrate:_o,createApp:Wm(Sc,_o)}}function hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function df(t,e,n=!1){const s=t.children,r=e.children;if(B(s)&&B(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=qt(r[i]),a.el=o.el),n||df(o,a)),a.type===Li&&(a.el=o.el)}}function ny(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const sy=t=>t.__isTeleport,Xe=Symbol.for("v-fgt"),Li=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),Ao=Symbol.for("v-stc"),Fs=[];let ft=null;function Ne(t=!1){Fs.push(ft=t?null:[])}function ry(){Fs.pop(),ft=Fs[Fs.length-1]||null}let Ws=1;function Qc(t){Ws+=t}function pf(t){return t.dynamicChildren=Ws>0?ft||qn:null,ry(),Ws>0&&ft&&ft.push(t),t}function Ze(t,e,n,s,r,i){return pf(U(t,e,n,s,r,i,!0))}function ol(t,e,n,s,r){return pf(ie(t,e,n,s,r,!0))}function gf(t){return t?t.__v_isVNode===!0:!1}function bs(t,e){return t.type===e.type&&t.key===e.key}const Fi="__vInternal",mf=({key:t})=>t??null,ti=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ee(t)||Ue(t)||W(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,s=0,r=null,i=t===Xe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mf(e),ref:e&&ti(e),scopeId:Mi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$e};return a?(al(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ee(n)?8:16),Ws>0&&!o&&ft&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ft.push(l),l}const ie=iy;function iy(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Fm)&&(t=Zt),gf(t)){const a=es(t,e,!0);return n&&al(a,n),Ws>0&&!i&&ft&&(a.shapeFlag&6?ft[ft.indexOf(t)]=a:ft.push(a)),a.patchFlag|=-2,a}if(yy(t)&&(t=t.__vccOpts),e){e=oy(e);let{class:a,style:l}=e;a&&!Ee(a)&&(e.class=fr(a)),ue(l)&&($h(l)&&!B(l)&&(l=Re({},l)),e.style=Wa(l))}const o=Ee(t)?1:Tm(t)?128:sy(t)?64:ue(t)?4:W(t)?2:0;return U(t,e,n,s,r,o,i,!0)}function oy(t){return t?$h(t)||Fi in t?Re({},t):t:null}function es(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?ly(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&mf(a),ref:e&&e.ref?n&&r?B(r)?r.concat(ti(e)):[r,ti(e)]:ti(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&es(t.ssContent),ssFallback:t.ssFallback&&es(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function yf(t=" ",e=0){return ie(Li,null,t,e)}function ay(t="",e=!1){return e?(Ne(),ol(Zt,null,t)):ie(Zt,null,t)}function Et(t){return t==null||typeof t=="boolean"?ie(Zt):B(t)?ie(Xe,null,t.slice()):typeof t=="object"?qt(t):ie(Li,null,String(t))}function qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:es(t)}function al(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),al(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Fi in e)?e._ctx=$e:r===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),s&64?(n=16,e=[yf(e)]):n=8);t.children=e,t.shapeFlag|=n}function ly(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=fr([e.class,s.class]));else if(r==="style")e.style=Wa([e.style,s.style]);else if(Si(r)){const i=e[r],o=s[r];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function _t(t,e,n,s=null){pt(t,e,7,[n,s])}const cy=af();let uy=0;function hy(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||cy,i={uid:uy++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new xg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cf(s,r),emitsOptions:Gh(s,r),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:s.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ym.bind(null,i),t.ce&&t.ce(i),i}let De=null,ll,Fn,Xc="__VUE_INSTANCE_SETTERS__";(Fn=Yo()[Xc])||(Fn=Yo()[Xc]=[]),Fn.push(t=>De=t),ll=t=>{Fn.length>1?Fn.forEach(e=>e(t)):Fn[0](t)};const ts=t=>{ll(t),t.scope.on()},_n=()=>{De&&De.scope.off(),ll(null)};function vf(t){return t.vnode.shapeFlag&4}let Gs=!1;function fy(t,e=!1){Gs=e;const{props:n,children:s}=t.vnode,r=vf(t);Ym(t,n,r,e),Jm(t,s);const i=r?dy(t,e):void 0;return Gs=!1,i}function dy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Bh(new Proxy(t.ctx,Bm));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?gy(t):null;ts(t),ds();const i=Wt(s,t,0,[t.props,r]);if(ps(),_n(),bh(i)){if(i.then(_n,_n),e)return i.then(o=>{Jc(t,o,e)}).catch(o=>{Ri(o,t,0)});t.asyncDep=i}else Jc(t,i,e)}else wf(t,e)}function Jc(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=qh(e)),wf(t,n)}let Zc;function wf(t,e,n){const s=t.type;if(!t.render){if(!e&&Zc&&!s.render){const r=s.template||rl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Re(Re({isCustomElement:i,delimiters:a},o),l);s.render=Zc(r,c)}}t.render=s.render||dt}ts(t),ds(),Vm(t),ps(),_n()}function py(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return et(t,"get","$attrs"),e[n]}}))}function gy(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return py(t)},slots:t.slots,emit:t.emit,expose:e}}function Ui(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qh(Bh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}}))}function my(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function yy(t){return W(t)&&"__vccOpts"in t}const vy=(t,e)=>um(t,e,Gs),wy=Symbol.for("v-scx"),_y=()=>ei(wy),Ey="3.3.4",Ty="http://www.w3.org/2000/svg",pn=typeof document<"u"?document:null,eu=pn&&pn.createElement("template"),by={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?pn.createElementNS(Ty,t):pn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>pn.createTextNode(t),createComment:t=>pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{eu.innerHTML=s?`<svg>${t}</svg>`:t;const a=eu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Iy(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Cy(t,e,n){const s=t.style,r=Ee(n);if(n&&!r){if(e&&!Ee(e))for(const i in e)n[i]==null&&aa(s,i,"");for(const i in n)aa(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const tu=/\s*!important$/;function aa(t,e,n){if(B(n))n.forEach(s=>aa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ay(t,e);tu.test(n)?t.setProperty(fs(s),n.replace(tu,""),"important"):t[s]=n}}const nu=["Webkit","Moz","ms"],So={};function Ay(t,e){const n=So[e];if(n)return n;let s=xt(e);if(s!=="filter"&&s in t)return So[e]=s;s=Ni(s);for(let r=0;r<nu.length;r++){const i=nu[r]+s;if(i in t)return So[e]=i}return e}const su="http://www.w3.org/1999/xlink";function Sy(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(su,e.slice(6,e.length)):t.setAttributeNS(su,e,n);else{const i=Sg(e);n==null||i&&!Ah(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function xy(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ah(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function $n(t,e,n,s){t.addEventListener(e,n,s)}function Dy(t,e,n,s){t.removeEventListener(e,n,s)}function Ny(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=ky(e);if(s){const c=i[e]=My(s,r);$n(t,a,c,l)}else o&&(Dy(t,a,o,l),i[e]=void 0)}}const ru=/(?:Once|Passive|Capture)$/;function ky(t){let e;if(ru.test(t)){e={};let s;for(;s=t.match(ru);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fs(t.slice(2)),e]}let xo=0;const Ry=Promise.resolve(),Oy=()=>xo||(Ry.then(()=>xo=0),xo=Date.now());function My(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;pt(Py(s,n.value),e,5,[s])};return n.value=t,n.attached=Oy(),n}function Py(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const iu=/^on[a-z]/,Ly=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?Iy(t,s,r):e==="style"?Cy(t,n,s):Si(e)?qa(e)||Ny(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fy(t,e,s,r))?xy(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Sy(t,e,s,r))};function Fy(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&iu.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||iu.test(e)&&Ee(n)?!1:e in t}const ou=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Jr(e,n):e};function Uy(t){t.target.composing=!0}function au(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ys={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=ou(r);const i=s||r.props&&r.props.type==="number";$n(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Go(a)),t._assign(a)}),n&&$n(t,"change",()=>{t.value=t.value.trim()}),e||($n(t,"compositionstart",Uy),$n(t,"compositionend",au),$n(t,"change",au))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=ou(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Go(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},$y=["ctrl","shift","alt","meta"],By={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$y.some(n=>t[`${n}Key`]&&!e.includes(n))},cl=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=By[e[r]];if(i&&i(n,e))return}return t(n,...s)},Vy={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Is(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Is(t,!0),s.enter(t)):s.leave(t,()=>{Is(t,!1)}):Is(t,e))},beforeUnmount(t,{value:e}){Is(t,e)}};function Is(t,e){t.style.display=e?t._vod:"none"}const jy=Re({patchProp:Ly},by);let lu;function qy(){return lu||(lu=ey(jy))}const Hy=(...t)=>{const e=qy().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=zy(s);if(!r)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function zy(t){return Ee(t)?document.querySelector(t):t}const Ky={class:"flex items-center justify-between py-10"},Wy=U("a",{href:"https://toeaung-yeyint.github.io/",class:"text-2xl font-semibold"},"Home",-1),Gy={class:"flex gap-x-8 text-xl items-center"},Yy=U("a",{href:"https://www.linkedin.com/in/toeaung-yeyint/"},[U("i",{class:"fa-brands fa-linkedin"})],-1),Qy=U("a",{href:"https://github.com/toeaung-yeyint"},[U("i",{class:"fa-brands fa-github"})],-1),Xy={__name:"NavigationBar",setup(t){const e=rm("fa-solid fa-moon"),n=()=>{e.value==="fa-solid fa-moon"?e.value="fa-solid fa-sun":e.value="fa-solid fa-moon",document.documentElement.classList.toggle("dark")};return(s,r)=>(Ne(),Ze("div",Ky,[Wy,U("div",Gy,[Yy,Qy,U("i",{onClick:n,class:fr([e.value,"cursor-pointer w-7"])},null,2)])]))}},Vt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Jy={},Zy={class:"mt-16 mb-20"},ev=U("h1",{class:"uppercase text-center text-3xl font-bold mb-10"},"teams-titles",-1),tv=U("p",{class:"mb-5"},[U("strong",null,"Built using: "),yf("Vue (Options API), HTML, Tailwind CSS, JavaScript, Firebase, Snackbar.js, Vite ")],-1),nv=U("p",null," This fully-fledged Vue app allows users to view the winning history of top European football teams in the UEFA Champions League such as Real Madrid, Barcelona, Manchester United, etc. Additionally, the app provides functionality for users to add new teams, update or remove existing ones. ",-1),sv=[ev,tv,nv];function rv(t,e){return Ne(),Ze("div",Zy,sv)}const iv=Vt(Jy,[["render",rv]]),ov={props:["label","type"],computed:{buttonClasses(){return{primary:"bg-sky-500 hover:bg-sky-600 text-white",secondary:"border bg-neutral-50 hover:bg-neutral-100 text-black dark:border-gray-800 dark:hover:bg-gray-700 dark:bg-gray-800 dark:text-white",delete:"bg-red-500 hover:bg-red-600 text-white"}[this.type]||""}}};function av(t,e,n,s,r,i){return Ne(),Ze("button",{class:fr(["uppercase px-4 py-2 text-sm",i.buttonClasses])},Qo(n.label),3)}const $i=Vt(ov,[["render",av]]),lv={props:["id","src","name","winningYears"],emits:["update","delete","loaded"],computed:{sortedYears(){return this.winningYears.sort((t,e)=>Number.parseInt(e)-Number.parseInt(t))}},methods:{handleUpdate(){this.$emit("update",this.id,this.name,this.winningYears)},handleDelete(){this.$emit("delete",this.id)},handleImageLoad(){this.$emit("loaded")}}},cv={class:"w-full h-full py-4 px-3 border-2 dark:border-gray-700"},uv={class:"flex justify-end gap-x-2 text-white"},hv=["src"],fv={class:"font-bold text-center text-xl mb-4"},dv=U("div",null,"Winning Years:",-1);function pv(t,e,n,s,r,i){return Ne(),Ze("div",cv,[U("div",uv,[U("i",{class:"fa-regular fa-pen-to-square bg-gray-300 p-2 hover:bg-sky-500 dark:bg-gray-800 dark:hover:bg-sky-500 cursor-pointer",onClick:e[0]||(e[0]=(...o)=>i.handleUpdate&&i.handleUpdate(...o))}),U("i",{class:"fa-solid fa-xmark bg-gray-300 p-2 hover:bg-red-500 dark:bg-gray-800 dark:hover:bg-red-500 cursor-pointer",onClick:e[1]||(e[1]=(...o)=>i.handleDelete&&i.handleDelete(...o))})]),U("img",{src:n.src,alt:"",onLoad:e[2]||(e[2]=(...o)=>i.handleImageLoad&&i.handleImageLoad(...o)),ref:"image",class:"w-full object-contain h-36 my-8"},null,40,hv),U("h2",fv,Qo(n.name),1),dv,(Ne(!0),Ze(Xe,null,sf(i.sortedYears,(o,a)=>(Ne(),Ze("div",{class:"inline-block mt-2 mr-3",key:a},Qo(o),1))),128))])}const gv=Vt(lv,[["render",pv]]),mv={emits:["update"],data(){return{teamName:""}},methods:{updateTeamName(){this.$emit("update",this.teamName)}}},yv=U("i",{class:"fa-solid fa-magnifying-glass py-3 px-3"},null,-1);function vv(t,e,n,s,r,i){return Ne(),Ze("form",{onSubmit:e[2]||(e[2]=cl(()=>{},["prevent"])),class:"dark:border-gray-600 flex border-2 flex-grow items-center focus-within:border-black dark:focus-within:border-white"},[Zn(U("input",{type:"text",placeholder:"Search...",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>r.teamName=o),onInput:e[1]||(e[1]=(...o)=>i.updateTeamName&&i.updateTeamName(...o)),class:"dark:bg-gray-900 flex-grow outline-none border-none pl-5"},null,544),[[Ys,r.teamName]]),yv],32)}const wv=Vt(mv,[["render",vv]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},_v=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ef={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),s.push(n[u],n[f],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_f(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_v(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||f==null)throw new Ev;const p=i<<2|a>>4;if(s.push(p),c!==64){const g=a<<4&240|c>>2;if(s.push(g),f!==64){const I=c<<6&192|f;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ev extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tv=function(t){const e=_f(t);return Ef.encodeByteArray(e,!0)},hi=function(t){return Tv(t).replace(/\./g,"")},bv=function(t){try{return Ef.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=()=>Iv().__FIREBASE_DEFAULTS__,Av=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Sv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bv(t[1]);return e&&JSON.parse(e)},ul=()=>{try{return Cv()||Av()||Sv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xv=t=>{var e,n;return(n=(e=ul())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Tf=t=>{const e=xv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},bf=()=>{var t;return(t=ul())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[hi(JSON.stringify(n)),hi(JSON.stringify(o)),a].join(".")}function Nv(){var t;const e=(t=ul())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kv(){try{return typeof indexedDB=="object"}catch{return!1}}function Rv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="FirebaseError";class Dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ov,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cf.prototype.create)}}class Cf{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Mv(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Dn(r,a,s)}}function Mv(t,e){return t.replace(Pv,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Pv=/\{\$([^}]+)}/g;function la(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(cu(i)&&cu(o)){if(!la(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function cu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class ns{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Dv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uv(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Fv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fv(t){return t===fn?void 0:t}function Uv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Bv={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Vv=ee.INFO,jv={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},qv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=jv[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Af{constructor(e){this.name=e,this._logLevel=Vv,this._logHandler=qv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Hv=(t,e)=>e.some(n=>t instanceof n);let uu,hu;function zv(){return uu||(uu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kv(){return hu||(hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sf=new WeakMap,ca=new WeakMap,xf=new WeakMap,Do=new WeakMap,hl=new WeakMap;function Wv(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Gt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sf.set(n,t)}).catch(()=>{}),hl.set(e,t),e}function Gv(t){if(ca.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ca.set(t,e)}let ua={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ca.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yv(t){ua=t(ua)}function Qv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(No(this),e,...n);return xf.set(s,e.sort?e.sort():[e]),Gt(s)}:Kv().includes(t)?function(...e){return t.apply(No(this),e),Gt(Sf.get(this))}:function(...e){return Gt(t.apply(No(this),e))}}function Xv(t){return typeof t=="function"?Qv(t):(t instanceof IDBTransaction&&Gv(t),Hv(t,zv())?new Proxy(t,ua):t)}function Gt(t){if(t instanceof IDBRequest)return Wv(t);if(Do.has(t))return Do.get(t);const e=Xv(t);return e!==t&&(Do.set(t,e),hl.set(e,t)),e}const No=t=>hl.get(t);function Jv(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Gt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Gt(o.result),l.oldVersion,l.newVersion,Gt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Zv=["get","getKey","getAll","getAllKeys","count"],ew=["put","add","delete","clear"],ko=new Map;function fu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ko.get(e))return ko.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=ew.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Zv.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return ko.set(e,i),i}Yv(t=>({...t,get:(e,n,s)=>fu(e,n)||t.get(e,n,s),has:(e,n)=>!!fu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function nw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ha="@firebase/app",du="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new Af("@firebase/app"),sw="@firebase/app-compat",rw="@firebase/analytics-compat",iw="@firebase/analytics",ow="@firebase/app-check-compat",aw="@firebase/app-check",lw="@firebase/auth",cw="@firebase/auth-compat",uw="@firebase/database",hw="@firebase/database-compat",fw="@firebase/functions",dw="@firebase/functions-compat",pw="@firebase/installations",gw="@firebase/installations-compat",mw="@firebase/messaging",yw="@firebase/messaging-compat",vw="@firebase/performance",ww="@firebase/performance-compat",_w="@firebase/remote-config",Ew="@firebase/remote-config-compat",Tw="@firebase/storage",bw="@firebase/storage-compat",Iw="@firebase/firestore",Cw="@firebase/firestore-compat",Aw="firebase",Sw="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="[DEFAULT]",xw={[ha]:"fire-core",[sw]:"fire-core-compat",[iw]:"fire-analytics",[rw]:"fire-analytics-compat",[aw]:"fire-app-check",[ow]:"fire-app-check-compat",[lw]:"fire-auth",[cw]:"fire-auth-compat",[uw]:"fire-rtdb",[hw]:"fire-rtdb-compat",[fw]:"fire-fn",[dw]:"fire-fn-compat",[pw]:"fire-iid",[gw]:"fire-iid-compat",[mw]:"fire-fcm",[yw]:"fire-fcm-compat",[vw]:"fire-perf",[ww]:"fire-perf-compat",[_w]:"fire-rc",[Ew]:"fire-rc-compat",[Tw]:"fire-gcs",[bw]:"fire-gcs-compat",[Iw]:"fire-fst",[Cw]:"fire-fst-compat","fire-js":"fire-js",[Aw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new Map,da=new Map;function Dw(t,e){try{t.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qs(t){const e=t.name;if(da.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;da.set(e,t);for(const n of fi.values())Dw(n,t);return!0}function Df(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new Cf("app","Firebase",Nw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=Sw;function kf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fa,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Yt.create("bad-app-name",{appName:String(r)});if(n||(n=bf()),!n)throw Yt.create("no-options");const i=fi.get(r);if(i){if(la(n,i.options)&&la(s,i.config))return i;throw Yt.create("duplicate-app",{appName:r})}const o=new $v(r);for(const l of da.values())o.addComponent(l);const a=new kw(n,s,o);return fi.set(r,a),a}function Rf(t=fa){const e=fi.get(t);if(!e&&t===fa&&bf())return kf();if(!e)throw Yt.create("no-app",{appName:t});return e}function Qt(t,e,n){var s;let r=(s=xw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(a.join(" "));return}Qs(new ns(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="firebase-heartbeat-database",Ow=1,Xs="firebase-heartbeat-store";let Ro=null;function Of(){return Ro||(Ro=Jv(Rw,Ow,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xs)}}}).catch(t=>{throw Yt.create("idb-open",{originalErrorMessage:t.message})})),Ro}async function Mw(t){try{return await(await Of()).transaction(Xs).objectStore(Xs).get(Mf(t))}catch(e){if(e instanceof Dn)In.warn(e.message);else{const n=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function pu(t,e){try{const s=(await Of()).transaction(Xs,"readwrite");await s.objectStore(Xs).put(e,Mf(t)),await s.done}catch(n){if(n instanceof Dn)In.warn(n.message);else{const s=Yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(s.message)}}}function Mf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=1024,Lw=30*24*60*60*1e3;class Fw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $w(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Lw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gu(),{heartbeatsToSend:n,unsentEntries:s}=Uw(this._heartbeatsCache.heartbeats),r=hi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function gu(){return new Date().toISOString().substring(0,10)}function Uw(t,e=Pw){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),mu(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),mu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $w{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kv()?Rv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function mu(t){return hi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){Qs(new ns("platform-logger",e=>new tw(e),"PRIVATE")),Qs(new ns("heartbeat",e=>new Fw(e),"PRIVATE")),Qt(ha,du,t),Qt(ha,du,"esm2017"),Qt("fire-js","")}Bw("");var Vw="firebase",jw="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(Vw,jw,"app");var qw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,fl=fl||{},$=qw||self;function Bi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function dr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Hw(t){return Object.prototype.hasOwnProperty.call(t,Oo)&&t[Oo]||(t[Oo]=++zw)}var Oo="closure_uid_"+(1e9*Math.random()>>>0),zw=0;function Kw(t,e,n){return t.call.apply(t.bind,arguments)}function Ww(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=Kw:Be=Ww,Be.apply(null,arguments)}function $r(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ce(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function sn(){this.s=this.s,this.o=this.o}var Gw=0;sn.prototype.s=!1;sn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Gw!=0)&&Hw(this)};sn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Pf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function yu(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Bi(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ve(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var Yw=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",()=>{},e),$.removeEventListener("test",()=>{},e)}catch{}return t}();function Js(t){return/^[\s\xa0]*$/.test(t)}function Vi(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function bt(t){return Vi().indexOf(t)!=-1}function pl(t){return pl[" "](t),t}pl[" "]=function(){};function Qw(t,e){var n=j0;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Xw=bt("Opera"),ss=bt("Trident")||bt("MSIE"),Lf=bt("Edge"),pa=Lf||ss,Ff=bt("Gecko")&&!(Vi().toLowerCase().indexOf("webkit")!=-1&&!bt("Edge"))&&!(bt("Trident")||bt("MSIE"))&&!bt("Edge"),Jw=Vi().toLowerCase().indexOf("webkit")!=-1&&!bt("Edge");function Uf(){var t=$.document;return t?t.documentMode:void 0}var ga;e:{var Mo="",Po=function(){var t=Vi();if(Ff)return/rv:([^\);]+)(\)|;)/.exec(t);if(Lf)return/Edge\/([\d\.]+)/.exec(t);if(ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Jw)return/WebKit\/(\S+)/.exec(t);if(Xw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Po&&(Mo=Po?Po[1]:""),ss){var Lo=Uf();if(Lo!=null&&Lo>parseFloat(Mo)){ga=String(Lo);break e}}ga=Mo}var ma;if($.document&&ss){var vu=Uf();ma=vu||parseInt(ga,10)||void 0}else ma=void 0;var Zw=ma;function Zs(t,e){if(Ve.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ff){e:{try{pl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:e0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zs.$.h.call(this)}}Ce(Zs,Ve);var e0={2:"touch",3:"pen",4:"mouse"};Zs.prototype.h=function(){Zs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var pr="closure_listenable_"+(1e6*Math.random()|0),t0=0;function n0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++t0,this.fa=this.ia=!1}function ji(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function gl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function s0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function $f(t){const e={};for(const n in t)e[n]=t[n];return e}const wu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bf(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<wu.length;i++)n=wu[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function qi(t){this.src=t,this.g={},this.h=0}qi.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=va(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new n0(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function ya(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Pf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ji(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function va(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var ml="closure_lm_"+(1e6*Math.random()|0),Fo={};function Vf(t,e,n,s,r){if(s&&s.once)return qf(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Vf(t,e[i],n,s,r);return null}return n=wl(n),t&&t[pr]?t.O(e,n,dr(s)?!!s.capture:!!s,r):jf(t,e,n,!1,s,r)}function jf(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=dr(r)?!!r.capture:!!r,a=vl(t);if(a||(t[ml]=a=new qi(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=r0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Yw||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(zf(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function r0(){function t(n){return e.call(t.src,t.listener,n)}const e=i0;return t}function qf(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)qf(t,e[i],n,s,r);return null}return n=wl(n),t&&t[pr]?t.P(e,n,dr(s)?!!s.capture:!!s,r):jf(t,e,n,!0,s,r)}function Hf(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Hf(t,e[i],n,s,r);else s=dr(s)?!!s.capture:!!s,n=wl(n),t&&t[pr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=va(i,n,s,r),-1<n&&(ji(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=vl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=va(e,n,s,r)),(n=-1<t?e[t]:null)&&yl(n))}function yl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[pr])ya(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(zf(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=vl(e))?(ya(n,t),n.h==0&&(n.src=null,e[ml]=null)):ji(t)}}}function zf(t){return t in Fo?Fo[t]:Fo[t]="on"+t}function i0(t,e){if(t.fa)t=!0;else{e=new Zs(e,this);var n=t.listener,s=t.la||t.src;t.ia&&yl(t),t=n.call(s,e)}return t}function vl(t){return t=t[ml],t instanceof qi?t:null}var Uo="__closure_events_fn_"+(1e9*Math.random()>>>0);function wl(t){return typeof t=="function"?t:(t[Uo]||(t[Uo]=function(e){return t.handleEvent(e)}),t[Uo])}function Ie(){sn.call(this),this.i=new qi(this),this.S=this,this.J=null}Ce(Ie,sn);Ie.prototype[pr]=!0;Ie.prototype.removeEventListener=function(t,e,n,s){Hf(this,t,e,n,s)};function ke(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Ve(e,t);else if(e instanceof Ve)e.target=e.target||t;else{var r=e;e=new Ve(s,t),Bf(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Br(o,s,!0,e)&&r}if(o=e.g=t,r=Br(o,s,!0,e)&&r,r=Br(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Br(o,s,!1,e)&&r}Ie.prototype.N=function(){if(Ie.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ji(n[s]);delete t.g[e],t.h--}}this.J=null};Ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ie.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Br(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ya(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var _l=$.JSON.stringify;class o0{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function a0(){var t=El;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class l0{constructor(){this.h=this.g=null}add(e,n){const s=Kf.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Kf=new o0(()=>new c0,t=>t.reset());class c0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function u0(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function h0(t){$.setTimeout(()=>{throw t},0)}let er,tr=!1,El=new l0,Wf=()=>{const t=$.Promise.resolve(void 0);er=()=>{t.then(f0)}};var f0=()=>{for(var t;t=a0();){try{t.h.call(t.g)}catch(n){h0(n)}var e=Kf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}tr=!1};function Hi(t,e){Ie.call(this),this.h=t||1,this.g=e||$,this.j=Be(this.qb,this),this.l=Date.now()}Ce(Hi,Ie);x=Hi.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ke(this,"tick"),this.ga&&(Tl(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tl(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Hi.$.N.call(this),Tl(this),delete this.g};function bl(t,e,n){if(typeof t=="function")n&&(t=Be(t,n));else if(t&&typeof t.handleEvent=="function")t=Be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function Gf(t){t.g=bl(()=>{t.g=null,t.i&&(t.i=!1,Gf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class d0 extends sn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Gf(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nr(t){sn.call(this),this.h=t,this.g={}}Ce(nr,sn);var _u=[];function Yf(t,e,n,s){Array.isArray(n)||(n&&(_u[0]=n.toString()),n=_u);for(var r=0;r<n.length;r++){var i=Vf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Qf(t){gl(t.g,function(e,n){this.g.hasOwnProperty(n)&&yl(e)},t),t.g={}}nr.prototype.N=function(){nr.$.N.call(this),Qf(this)};nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function zi(){this.g=!0}zi.prototype.Ea=function(){this.g=!1};function p0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function g0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function jn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+y0(t,n)+(s?" "+s:"")})}function m0(t,e){t.info(function(){return"TIMEOUT: "+e})}zi.prototype.info=function(){};function y0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return _l(n)}catch{return e}}var Nn={},Eu=null;function Ki(){return Eu=Eu||new Ie}Nn.Ta="serverreachability";function Xf(t){Ve.call(this,Nn.Ta,t)}Ce(Xf,Ve);function sr(t){const e=Ki();ke(e,new Xf(e))}Nn.STAT_EVENT="statevent";function Jf(t,e){Ve.call(this,Nn.STAT_EVENT,t),this.stat=e}Ce(Jf,Ve);function We(t){const e=Ki();ke(e,new Jf(e,t))}Nn.Ua="timingevent";function Zf(t,e){Ve.call(this,Nn.Ua,t),this.size=e}Ce(Zf,Ve);function gr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Wi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ed={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Il(){}Il.prototype.h=null;function Tu(t){return t.h||(t.h=t.i())}function td(){}var mr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Cl(){Ve.call(this,"d")}Ce(Cl,Ve);function Al(){Ve.call(this,"c")}Ce(Al,Ve);var wa;function Gi(){}Ce(Gi,Il);Gi.prototype.g=function(){return new XMLHttpRequest};Gi.prototype.i=function(){return{}};wa=new Gi;function yr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new nr(this),this.P=v0,t=pa?125:void 0,this.V=new Hi(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nd}function nd(){this.i=null,this.g="",this.h=!1}var v0=45e3,_a={},di={};x=yr.prototype;x.setTimeout=function(t){this.P=t};function Ea(t,e,n){t.L=1,t.v=Qi(Lt(e)),t.s=n,t.S=!0,sd(t,null)}function sd(t,e){t.G=Date.now(),vr(t),t.A=Lt(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),hd(n.i,"t",s),t.C=0,n=t.l.J,t.h=new nd,t.g=Rd(t.l,n?e:null,!t.s),0<t.O&&(t.M=new d0(Be(t.Pa,t,t.g),t.O)),Yf(t.U,t.g,"readystatechange",t.nb),e=t.I?$f(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),sr(),p0(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&It(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const u=It(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>u)&&(u!=3||pa||this.g&&(this.h.h||this.g.ja()||Au(this.g)))){this.J||u!=4||e==7||(e==8||0>=f?sr(3):sr(2)),Yi(this);var n=this.g.da();this.ca=n;t:if(rd(this)){var s=Au(this.g);t="";var r=s.length,i=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),Us(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,g0(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Js(a)){var c=a;break t}}c=null}if(n=c)jn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ta(this,n);else{this.i=!1,this.o=3,We(12),mn(this),Us(this);break e}}this.S?(id(this,u,o),pa&&this.i&&u==3&&(Yf(this.U,this.V,"tick",this.mb),this.V.start())):(jn(this.j,this.m,o,null),Ta(this,o)),u==4&&mn(this),this.i&&!this.J&&(u==4?xd(this.l,this):(this.i=!1,vr(this)))}else $0(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),mn(this),Us(this)}}}catch{}finally{}};function rd(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function id(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=w0(t,n),r==di){e==4&&(t.o=4,We(14),s=!1),jn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==_a){t.o=4,We(15),jn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else jn(t.j,t.m,r,null),Ta(t,r);rd(t)&&r!=di&&r!=_a&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,We(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Rl(e),e.M=!0,We(11))):(jn(t.j,t.m,n,"[Invalid Chunked Response]"),mn(t),Us(t))}x.mb=function(){if(this.g){var t=It(this.g),e=this.g.ja();this.C<e.length&&(Yi(this),id(this,t,e),this.i&&t!=4&&vr(this))}};function w0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?di:(n=Number(e.substring(n,s)),isNaN(n)?_a:(s+=1,s+n>e.length?di:(e=e.slice(s,s+n),t.C=s+n,e)))}x.cancel=function(){this.J=!0,mn(this)};function vr(t){t.Y=Date.now()+t.P,od(t,t.P)}function od(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=gr(Be(t.lb,t),e)}function Yi(t){t.B&&($.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(m0(this.j,this.A),this.L!=2&&(sr(),We(17)),mn(this),this.o=2,Us(this)):od(this,this.Y-t)};function Us(t){t.l.H==0||t.J||xd(t.l,t)}function mn(t){Yi(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Tl(t.V),Qf(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ta(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ba(n.i,t))){if(!t.K&&ba(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)mi(n),Zi(n);else break e;kl(n),We(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=gr(Be(n.ib,n),6e3));if(1>=pd(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else yn(n,11)}else if((t.K||n.g==t)&&mi(n),!Js(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const f=c[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const I=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var i=s.i;i.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Sl(i,i.h),i.h=null))}if(s.F){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.Da=T,ae(s.I,s.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=kd(s,s.J?s.pa:null,s.Y),o.K){gd(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Yi(a),vr(a)),s.g=o}else Ad(s);0<n.j.length&&eo(n)}else c[0]!="stop"&&c[0]!="close"||yn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?yn(n,7):Nl(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}sr(4)}catch{}}function _0(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Bi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function E0(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Bi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function ad(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=E0(t),s=_0(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var ld=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function En(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof En){this.h=t.h,pi(this,t.j),this.s=t.s,this.g=t.g,gi(this,t.m),this.l=t.l;var e=t.i,n=new rr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),bu(this,n),this.o=t.o}else t&&(e=String(t).match(ld))?(this.h=!1,pi(this,e[1]||"",!0),this.s=Ns(e[2]||""),this.g=Ns(e[3]||"",!0),gi(this,e[4]),this.l=Ns(e[5]||"",!0),bu(this,e[6]||"",!0),this.o=Ns(e[7]||"")):(this.h=!1,this.i=new rr(null,this.h))}En.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ks(e,Iu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ks(e,Iu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ks(n,n.charAt(0)=="/"?C0:I0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ks(n,S0)),t.join("")};function Lt(t){return new En(t)}function pi(t,e,n){t.j=n?Ns(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bu(t,e,n){e instanceof rr?(t.i=e,x0(t.i,t.h)):(n||(e=ks(e,A0)),t.i=new rr(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function Qi(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ns(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,b0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function b0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Iu=/[#\/\?@]/g,I0=/[#\?:]/g,C0=/[#\?]/g,A0=/[#\?@]/g,S0=/#/g;function rr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&T0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=rr.prototype;x.add=function(t,e){rn(this),this.i=null,t=gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function cd(t,e){rn(t),e=gs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ud(t,e){return rn(t),e=gs(t,e),t.g.has(e)}x.forEach=function(t,e){rn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};x.ta=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};x.Z=function(t){rn(this);let e=[];if(typeof t=="string")ud(this,t)&&(e=e.concat(this.g.get(gs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return rn(this),this.i=null,t=gs(this,t),ud(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function hd(t,e,n){cd(t,e),0<n.length&&(t.i=null,t.g.set(gs(t,e),dl(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function x0(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(cd(this,s),hd(this,r,n))},t)),t.j=e}var D0=class{constructor(t,e){this.g=t,this.map=e}};function fd(t){this.l=t||N0,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var N0=10;function dd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function pd(t){return t.h?1:t.g?t.g.size:0}function ba(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sl(t,e){t.g?t.g.add(e):t.h=e}function gd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}fd.prototype.cancel=function(){if(this.i=md(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function md(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return dl(t.i)}var k0=class{stringify(t){return $.JSON.stringify(t,void 0)}parse(t){return $.JSON.parse(t,void 0)}};function R0(){this.g=new k0}function O0(t,e,n){const s=n||"";try{ad(t,function(r,i){let o=r;dr(r)&&(o=_l(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function M0(t,e){const n=new zi;if($.Image){const s=new Image;s.onload=$r(Vr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=$r(Vr,n,s,"TestLoadImage: error",!1,e),s.onabort=$r(Vr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=$r(Vr,n,s,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Vr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function wr(t){this.l=t.fc||null,this.j=t.ob||!1}Ce(wr,Il);wr.prototype.g=function(){return new Xi(this.l,this.j)};wr.prototype.i=function(t){return function(){return t}}({});function Xi(t,e){Ie.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=xl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ce(Xi,Ie);var xl=0;x=Xi.prototype;x.open=function(t,e){if(this.readyState!=xl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ir(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||$).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_r(this)),this.readyState=xl};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ir(this)),this.g&&(this.readyState=3,ir(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yd(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function yd(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_r(this):ir(this),this.readyState==3&&yd(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,_r(this))};x.Ya=function(t){this.g&&(this.response=t,_r(this))};x.ka=function(){this.g&&_r(this)};function _r(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ir(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ir(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var P0=$.JSON.parse;function de(t){Ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=vd,this.L=this.M=!1}Ce(de,Ie);var vd="",L0=/^https?$/i,F0=["POST","PUT"];x=de.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():wa.g(),this.C=this.u?Tu(this.u):Tu(wa),this.g.onreadystatechange=Be(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Cu(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=$.FormData&&t instanceof $.FormData,!(0<=Pf(F0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ed(this),0<this.B&&((this.L=U0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.ua,this)):this.A=bl(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Cu(this,i)}};function U0(t){return ss&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof fl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function Cu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wd(t),Ji(t)}function wd(t){t.F||(t.F=!0,ke(t,"complete"),ke(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ke(this,"complete"),ke(this,"abort"),Ji(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ji(this,!0)),de.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?_d(this):this.kb())};x.kb=function(){_d(this)};function _d(t){if(t.h&&typeof fl<"u"&&(!t.C[1]||It(t)!=4||t.da()!=2)){if(t.v&&It(t)==4)bl(t.La,0,t);else if(ke(t,"readystatechange"),It(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(ld)[1]||null;!r&&$.self&&$.self.location&&(r=$.self.location.protocol.slice(0,-1)),s=!L0.test(r?r.toLowerCase():"")}n=s}if(n)ke(t,"complete"),ke(t,"success");else{t.m=6;try{var i=2<It(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",wd(t)}}finally{Ji(t)}}}}function Ji(t,e){if(t.g){Ed(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ke(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ed(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function It(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),P0(e)}};function Au(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case vd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function $0(t){const e={};t=(t.g&&2<=It(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Js(t[s]))continue;var n=u0(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}s0(e,function(s){return s.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Td(t){let e="";return gl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Dl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Td(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function Cs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function bd(t){this.Ga=0,this.j=[],this.l=new zi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Cs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Cs("baseRetryDelayMs",5e3,t),this.hb=Cs("retryDelaySeedMs",1e4,t),this.eb=Cs("forwardChannelMaxRetries",2,t),this.xa=Cs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new fd(t&&t.concurrentRequestLimit),this.Ja=new R0,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=bd.prototype;x.ra=8;x.H=1;function Nl(t){if(Id(t),t.H==3){var e=t.W++,n=Lt(t.I);if(ae(n,"SID",t.K),ae(n,"RID",e),ae(n,"TYPE","terminate"),Er(t,n),e=new yr(t,t.l,e),e.L=2,e.v=Qi(Lt(n)),n=!1,$.navigator&&$.navigator.sendBeacon)try{n=$.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=Rd(e.l,null),e.g.ha(e.v)),e.G=Date.now(),vr(e)}Nd(t)}function Zi(t){t.g&&(Rl(t),t.g.cancel(),t.g=null)}function Id(t){Zi(t),t.u&&($.clearTimeout(t.u),t.u=null),mi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function eo(t){if(!dd(t.i)&&!t.m){t.m=!0;var e=t.Na;er||Wf(),tr||(er(),tr=!0),El.add(e,t),t.C=0}}function B0(t,e){return pd(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=gr(Be(t.Na,t,e),Dd(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new yr(this,this.l,t);let i=this.s;if(this.U&&(i?(i=$f(i),Bf(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Cd(this,r,e),n=Lt(this.I),ae(n,"RID",t),ae(n,"CVER",22),this.F&&ae(n,"X-HTTP-Session-Id",this.F),Er(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Td(i)))+"&"+e:this.o&&Dl(n,this.o,i)),Sl(this.i,r),this.bb&&ae(n,"TYPE","init"),this.P?(ae(n,"$req",e),ae(n,"SID","null"),r.aa=!0,Ea(r,n,null)):Ea(r,n,e),this.H=2}}else this.H==3&&(t?Su(this,t):this.j.length==0||dd(this.i)||Su(this))};function Su(t,e){var n;e?n=e.m:n=t.W++;const s=Lt(t.I);ae(s,"SID",t.K),ae(s,"RID",n),ae(s,"AID",t.V),Er(t,s),t.o&&t.s&&Dl(s,t.o,t.s),n=new yr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Cd(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Sl(t.i,n),Ea(n,s,e)}function Er(t,e){t.na&&gl(t.na,function(n,s){ae(e,s,n)}),t.h&&ad({},function(n,s){ae(e,s,n)})}function Cd(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Be(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=i,0>c)i=Math.max(0,r[l].g-100),a=!1;else try{O0(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function Ad(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;er||Wf(),tr||(er(),tr=!0),El.add(e,t),t.A=0}}function kl(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=gr(Be(t.Ma,t),Dd(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,Sd(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=gr(Be(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,We(10),Zi(this),Sd(this))};function Rl(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function Sd(t){t.g=new yr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Lt(t.wa);ae(e,"RID","rpc"),ae(e,"SID",t.K),ae(e,"AID",t.V),ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ae(e,"TO",t.qa),ae(e,"TYPE","xmlhttp"),Er(t,e),t.o&&t.s&&Dl(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Qi(Lt(e)),n.s=null,n.S=!0,sd(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Zi(this),kl(this),We(19))};function mi(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function xd(t,e){var n=null;if(t.g==e){mi(t),Rl(t),t.g=null;var s=2}else if(ba(t.i,e))n=e.F,gd(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Ki(),ke(s,new Zf(s,n)),eo(t)}else Ad(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&B0(t,e)||s==2&&kl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:yn(t,5);break;case 4:yn(t,10);break;case 3:yn(t,6);break;default:yn(t,2)}}}function Dd(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function yn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Be(t.pb,t);n||(n=new En("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||pi(n,"https"),Qi(n)),M0(n.toString(),s)}else We(2);t.H=0,t.h&&t.h.za(e),Nd(t),Id(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),We(2)):(this.l.info("Failed to ping google.com"),We(1))};function Nd(t){if(t.H=0,t.ma=[],t.h){const e=md(t.i);(e.length!=0||t.j.length!=0)&&(yu(t.ma,e),yu(t.ma,t.j),t.i.i.length=0,dl(t.j),t.j.length=0),t.h.ya()}}function kd(t,e,n){var s=n instanceof En?Lt(n):new En(n);if(s.g!="")e&&(s.g=e+"."+s.g),gi(s,s.m);else{var r=$.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new En(null);s&&pi(i,s),e&&(i.g=e),r&&gi(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&ae(s,n,e),ae(s,"VER",t.ra),Er(t,s),s}function Rd(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new de(new wr({ob:!0})):new de(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function Od(){}x=Od.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function yi(){if(ss&&!(10<=Number(Zw)))throw Error("Environmental error: no available transport.")}yi.prototype.g=function(t,e){return new ot(t,e)};function ot(t,e){Ie.call(this),this.g=new bd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Js(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Js(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ms(this)}Ce(ot,Ie);ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;We(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=kd(t,null,t.Y),eo(t)};ot.prototype.close=function(){Nl(this.g)};ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_l(t),t=n);e.j.push(new D0(e.fb++,t)),e.H==3&&eo(e)};ot.prototype.N=function(){this.g.h=null,delete this.j,Nl(this.g),delete this.g,ot.$.N.call(this)};function Md(t){Cl.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ce(Md,Cl);function Pd(){Al.call(this),this.status=1}Ce(Pd,Al);function ms(t){this.g=t}Ce(ms,Od);ms.prototype.Ba=function(){ke(this.g,"a")};ms.prototype.Aa=function(t){ke(this.g,new Md(t))};ms.prototype.za=function(t){ke(this.g,new Pd)};ms.prototype.ya=function(){ke(this.g,"b")};function V0(){this.blockSize=-1}function mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ce(mt,V0);mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function $o(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}mt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)$o(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){$o(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){$o(this,s),r=0;break}}this.h=r,this.i+=e};mt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function te(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var j0={};function Ol(t){return-128<=t&&128>t?Qw(t,function(e){return new te([e|0],0>e?-1:0)}):new te([t|0],0>t?-1:0)}function Ct(t){if(isNaN(t)||!isFinite(t))return Wn;if(0>t)return xe(Ct(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Ia;return new te(e,0)}function Ld(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return xe(Ld(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ct(Math.pow(e,8)),s=Wn,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Ct(Math.pow(e,i)),s=s.R(i).add(Ct(o))):(s=s.R(n),s=s.add(Ct(o)))}return s}var Ia=4294967296,Wn=Ol(0),Ca=Ol(1),xu=Ol(16777216);x=te.prototype;x.ea=function(){if(lt(this))return-xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Ia+s)*e,e*=Ia}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ot(this))return"0";if(lt(this))return"-"+xe(this).toString(t);for(var e=Ct(Math.pow(t,6)),n=this,s="";;){var r=wi(n,e).g;n=vi(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Ot(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ot(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function lt(t){return t.h==-1}x.X=function(t){return t=vi(this,t),lt(t)?-1:Ot(t)?0:1};function xe(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new te(n,~t.h).add(Ca)}x.abs=function(){return lt(this)?xe(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new te(n,n[n.length-1]&-2147483648?-1:0)};function vi(t,e){return t.add(xe(e))}x.R=function(t){if(Ot(this)||Ot(t))return Wn;if(lt(this))return lt(t)?xe(this).R(xe(t)):xe(xe(this).R(t));if(lt(t))return xe(this.R(xe(t)));if(0>this.X(xu)&&0>t.X(xu))return Ct(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*s+2*r]+=o*l,jr(n,2*s+2*r),n[2*s+2*r+1]+=i*l,jr(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,jr(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,jr(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new te(n,0)};function jr(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function As(t,e){this.g=t,this.h=e}function wi(t,e){if(Ot(e))throw Error("division by zero");if(Ot(t))return new As(Wn,Wn);if(lt(t))return e=wi(xe(t),e),new As(xe(e.g),xe(e.h));if(lt(e))return e=wi(t,xe(e)),new As(xe(e.g),e.h);if(30<t.g.length){if(lt(t)||lt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ca,s=e;0>=s.X(t);)n=Du(n),s=Du(s);var r=Un(n,1),i=Un(s,1);for(s=Un(s,2),n=Un(n,2);!Ot(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Un(s,1),n=Un(n,1)}return e=vi(t,r.R(e)),new As(r,e)}for(r=Wn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Ct(n),o=i.R(e);lt(o)||0<o.X(t);)n-=s,i=Ct(n),o=i.R(e);Ot(i)&&(i=Ca),r=r.add(i),t=vi(t,o)}return new As(r,t)}x.gb=function(t){return wi(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new te(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new te(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new te(n,this.h^t.h)};function Du(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new te(n,t.h)}function Un(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new te(r,t.h)}yi.prototype.createWebChannel=yi.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;Wi.NO_ERROR=0;Wi.TIMEOUT=8;Wi.HTTP_ERROR=6;ed.COMPLETE="complete";td.EventType=mr;mr.OPEN="a";mr.CLOSE="b";mr.ERROR="c";mr.MESSAGE="d";Ie.prototype.listen=Ie.prototype.O;de.prototype.listenOnce=de.prototype.P;de.prototype.getLastError=de.prototype.Sa;de.prototype.getLastErrorCode=de.prototype.Ia;de.prototype.getStatus=de.prototype.da;de.prototype.getResponseJson=de.prototype.Wa;de.prototype.getResponseText=de.prototype.ja;de.prototype.send=de.prototype.ha;de.prototype.setWithCredentials=de.prototype.Oa;mt.prototype.digest=mt.prototype.l;mt.prototype.reset=mt.prototype.reset;mt.prototype.update=mt.prototype.j;te.prototype.add=te.prototype.add;te.prototype.multiply=te.prototype.R;te.prototype.modulo=te.prototype.gb;te.prototype.compare=te.prototype.X;te.prototype.toNumber=te.prototype.ea;te.prototype.toString=te.prototype.toString;te.prototype.getBits=te.prototype.D;te.fromNumber=Ct;te.fromString=Ld;var q0=function(){return new yi},H0=function(){return Ki()},Bo=Wi,z0=ed,K0=Nn,Nu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},W0=wr,qr=td,G0=de,Y0=mt,Gn=te;const ku="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Af("@firebase/firestore");function Ru(){return Cn.logLevel}function O(t,...e){if(Cn.logLevel<=ee.DEBUG){const n=e.map(Ml);Cn.debug(`Firestore (${ys}): ${t}`,...n)}}function Ft(t,...e){if(Cn.logLevel<=ee.ERROR){const n=e.map(Ml);Cn.error(`Firestore (${ys}): ${t}`,...n)}}function rs(t,...e){if(Cn.logLevel<=ee.WARN){const n=e.map(Ml);Cn.warn(`Firestore (${ys}): ${t}`,...n)}}function Ml(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+t;throw Ft(e),new Error(e)}function ce(t,e){t||F()}function K(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Q0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Me.UNAUTHENTICATED))}shutdown(){}}class X0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class J0{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ce(typeof s.accessToken=="string"),new Fd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Me(e)}}class Z0{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class e_{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Z0(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class t_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n_{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.T=n.token,new t_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=s_(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function J(t,e){return t<e?-1:t>e?1:0}function is(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new _e(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new _e(0,0))}static max(){return new j(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,s){n===void 0?n=0:n>e.length&&F(),s===void 0?s=e.length-n:s>e.length-n&&F(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends or{construct(e,n,s){return new le(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new N(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new le(n)}static emptyPath(){return new le([])}}const r_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends or{construct(e,n,s){return new Fe(e,n,s)}static isValidIdentifier(e){return r_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new N(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new N(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new N(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(le.fromString(e))}static fromName(e){return new M(le.fromString(e).popFirst(5))}static empty(){return new M(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new le(e.slice()))}}function i_(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=j.fromTimestamp(s===1e9?new _e(n+1,0):new _e(n,s));return new en(r,M.empty(),e)}function o_(t){return new en(t.readTime,t.key,-1)}class en{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new en(j.min(),M.empty(),-1)}static max(){return new en(j.max(),M.empty(),-1)}}function a_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class c_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==l_)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,s)=>{n(e)})}static reject(e){return new E((n,s)=>{s(e)})}static waitFor(e){return new E((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=E.resolve(!1);for(const s of e)n=n.next(r=>r?E.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new E((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new E((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function br(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Pl.ct=-1;function to(t){return t==null}function _i(t){return t===0&&1/t==-1/0}function u_(t){return typeof t=="number"&&Number.isInteger(t)&&!_i(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $d(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new he(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hr(this.root,e,this.comparator,!0)}}class Hr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Se.RED,this.left=r??Se.EMPTY,this.right=i??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Se(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Se.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Se(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mu(this.data.getIterator())}getIteratorFrom(e){return new Mu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Mu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new rt([])}unionWith(e){let n=new je(Fe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Bd("Invalid base64 string: "+r):r}}(e);return new qe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const h_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tn(t){if(ce(!!t),typeof t=="string"){let e=0;const n=h_.exec(t);if(ce(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function An(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fl(t){const e=t.mapValue.fields.__previous_value__;return Ll(e)?Fl(e):e}function ar(t){const e=tn(t.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n,s,r,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class lr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Sn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ll(t)?4:d_(t)?9007199254740991:10:F()}function Dt(t,e){if(t===e)return!0;const n=Sn(t);if(n!==Sn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ar(t).isEqual(ar(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=tn(s.timestampValue),o=tn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return An(s.bytesValue).isEqual(An(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ve(s.geoPointValue.latitude)===ve(r.geoPointValue.latitude)&&ve(s.geoPointValue.longitude)===ve(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ve(s.integerValue)===ve(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ve(s.doubleValue),o=ve(r.doubleValue);return i===o?_i(i)===_i(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return is(t.arrayValue.values||[],e.arrayValue.values||[],Dt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ou(i)!==Ou(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Dt(i[a],o[a])))return!1;return!0}(t,e);default:return F()}}function cr(t,e){return(t.values||[]).find(n=>Dt(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=Sn(t),s=Sn(e);if(n!==s)return J(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ve(r.integerValue||r.doubleValue),a=ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Pu(t.timestampValue,e.timestampValue);case 4:return Pu(ar(t),ar(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(r,i){const o=An(r),a=An(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=J(o[l],a[l]);if(c!==0)return c}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=J(ve(r.latitude),ve(i.latitude));return o!==0?o:J(ve(r.longitude),ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=os(o[l],a[l]);if(c)return c}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===zr.mapValue&&i===zr.mapValue)return 0;if(r===zr.mapValue)return 1;if(i===zr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const f=J(a[u],c[u]);if(f!==0)return f;const p=os(o[a[u]],l[c[u]]);if(p!==0)return p}return J(a.length,c.length)}(t.mapValue,e.mapValue);default:throw F()}}function Pu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=tn(t),s=tn(e),r=J(n.seconds,s.seconds);return r!==0?r:J(n.nanos,s.nanos)}function as(t){return Aa(t)}function Aa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=tn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?An(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Aa(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Aa(s.fields[a])}`;return i+"}"}(t.mapValue):F();var e,n}function Lu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sa(t){return!!t&&"integerValue"in t}function Ul(t){return!!t&&"arrayValue"in t}function Fu(t){return!!t&&"nullValue"in t}function Uu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ni(t){return!!t&&"mapValue"in t}function $s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=$s(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$s(t.arrayValue.values[n]);return e}return Object.assign({},t)}function d_(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ni(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(n)}setAll(e){let n=Fe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=$s(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ni(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ni(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){kn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Je($s(this.value))}}function Vd(t){const e=[];return kn(t.fields,(n,s)=>{const r=new Fe([n]);if(ni(s)){const i=Vd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pe(e,0,j.min(),j.min(),j.min(),Je.empty(),0)}static newFoundDocument(e,n,s,r){return new Pe(e,1,n,j.min(),s,r,0)}static newNoDocument(e,n){return new Pe(e,2,n,j.min(),j.min(),Je.empty(),0)}static newUnknownDocument(e,n){return new Pe(e,3,n,j.min(),j.min(),Je.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.position=e,this.inclusive=n}}function $u(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=M.comparator(M.fromName(o.referenceValue),n.key):s=os(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Bu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n="asc"){this.field=e,this.dir=n}}function p_(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{}class we extends jd{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new m_(e,n,s):n==="array-contains"?new w_(e,s):n==="in"?new __(e,s):n==="not-in"?new E_(e,s):n==="array-contains-any"?new T_(e,s):new we(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new y_(e,s):new v_(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(os(n,this.value)):n!==null&&Sn(this.value)===Sn(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class yt extends jd{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new yt(e,n)}matches(e){return qd(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function qd(t){return t.op==="and"}function Hd(t){return g_(t)&&qd(t)}function g_(t){for(const e of t.filters)if(e instanceof yt)return!1;return!0}function xa(t){if(t instanceof we)return t.field.canonicalString()+t.op.toString()+as(t.value);if(Hd(t))return t.filters.map(e=>xa(e)).join(",");{const e=t.filters.map(n=>xa(n)).join(",");return`${t.op}(${e})`}}function zd(t,e){return t instanceof we?function(n,s){return s instanceof we&&n.op===s.op&&n.field.isEqual(s.field)&&Dt(n.value,s.value)}(t,e):t instanceof yt?function(n,s){return s instanceof yt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&zd(i,s.filters[o]),!0):!1}(t,e):void F()}function Kd(t){return t instanceof we?function(e){return`${e.field.canonicalString()} ${e.op} ${as(e.value)}`}(t):t instanceof yt?function(e){return e.op.toString()+" {"+e.getFilters().map(Kd).join(" ,")+"}"}(t):"Filter"}class m_ extends we{constructor(e,n,s){super(e,n,s),this.key=M.fromName(s.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class y_ extends we{constructor(e,n){super(e,"in",n),this.keys=Wd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class v_ extends we{constructor(e,n){super(e,"not-in",n),this.keys=Wd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>M.fromName(s.referenceValue))}class w_ extends we{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ul(n)&&cr(n.arrayValue,this.value)}}class __ extends we{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cr(this.value.arrayValue,n)}}class E_ extends we{constructor(e,n){super(e,"not-in",n)}matches(e){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cr(this.value.arrayValue,n)}}class T_ extends we{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ul(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>cr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Vu(t,e=null,n=[],s=[],r=null,i=null,o=null){return new b_(t,e,n,s,r,i,o)}function $l(t){const e=K(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>xa(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),to(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>as(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>as(s)).join(",")),e.dt=n}return e.dt}function Bl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!p_(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zd(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bu(t.startAt,e.startAt)&&Bu(t.endAt,e.endAt)}function Da(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function I_(t,e,n,s,r,i,o,a){return new vs(t,e,n,s,r,i,o,a)}function Vl(t){return new vs(t)}function ju(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function no(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Gd(t){return t.collectionGroup!==null}function Qn(t){const e=K(t);if(e.wt===null){e.wt=[];const n=no(e),s=jl(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Yn(n)),e.wt.push(new Yn(Fe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Yn(Fe.keyField(),i))}}}return e.wt}function Ut(t){const e=K(t);if(!e._t)if(e.limitType==="F")e._t=Vu(e.path,e.collectionGroup,Qn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Qn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Yn(i.field,o))}const s=e.endAt?new Ei(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ei(e.startAt.position,e.startAt.inclusive):null;e._t=Vu(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Na(t,e){e.getFirstInequalityField(),no(t);const n=t.filters.concat([e]);return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ka(t,e,n){return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function so(t,e){return Bl(Ut(t),Ut(e))&&t.limitType===e.limitType}function Yd(t){return`${$l(Ut(t))}|lt:${t.limitType}`}function Ra(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Kd(s)).join(", ")}]`),to(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>as(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>as(s)).join(",")),`Target(${n})`}(Ut(t))}; limitType=${t.limitType})`}function ro(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):M.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Qn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=$u(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Qn(n),s)||n.endAt&&!function(r,i,o){const a=$u(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Qn(n),s))}(t,e)}function C_(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qd(t){return(e,n)=>{let s=!1;for(const r of Qn(t)){const i=A_(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function A_(t,e,n){const s=t.field.isKeyField()?M.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?os(a,l):F()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){kn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return $d(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=new he(M.comparator);function $t(){return S_}const Xd=new he(M.comparator);function Rs(...t){let e=Xd;for(const n of t)e=e.insert(n.key,n);return e}function Jd(t){let e=Xd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function vn(){return Bs()}function Zd(){return Bs()}function Bs(){return new ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const x_=new he(M.comparator),D_=new je(M.comparator);function Y(...t){let e=D_;for(const n of t)e=e.add(n);return e}const N_=new je(J);function k_(){return N_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_i(e)?"-0":e}}function tp(t){return{integerValue:""+t}}function R_(t,e){return u_(e)?tp(e):ep(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this._=void 0}}function O_(t,e,n){return t instanceof Ti?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Ll(r)&&(r=Fl(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ur?sp(t,e):t instanceof hr?rp(t,e):function(s,r){const i=np(s,r),o=qu(i)+qu(s.gt);return Sa(i)&&Sa(s.gt)?tp(o):ep(s.serializer,o)}(t,e)}function M_(t,e,n){return t instanceof ur?sp(t,e):t instanceof hr?rp(t,e):n}function np(t,e){return t instanceof bi?Sa(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ti extends io{}class ur extends io{constructor(e){super(),this.elements=e}}function sp(t,e){const n=ip(e);for(const s of t.elements)n.some(r=>Dt(r,s))||n.push(s);return{arrayValue:{values:n}}}class hr extends io{constructor(e){super(),this.elements=e}}function rp(t,e){let n=ip(e);for(const s of t.elements)n=n.filter(r=>!Dt(r,s));return{arrayValue:{values:n}}}class bi extends io{constructor(e,n){super(),this.serializer=e,this.gt=n}}function qu(t){return ve(t.integerValue||t.doubleValue)}function ip(t){return Ul(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function P_(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ur&&s instanceof ur||n instanceof hr&&s instanceof hr?is(n.elements,s.elements,Dt):n instanceof bi&&s instanceof bi?Dt(n.gt,s.gt):n instanceof Ti&&s instanceof Ti}(t.transform,e.transform)}class L_{constructor(e,n){this.version=e,this.transformResults=n}}class gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gt}static exists(e){return new gt(void 0,e)}static updateTime(e){return new gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function si(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oo{}function op(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ql(t.key,gt.none()):new Ir(t.key,t.data,gt.none());{const n=t.data,s=Je.empty();let r=new je(Fe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new on(t.key,s,new rt(r.toArray()),gt.none())}}function F_(t,e,n){t instanceof Ir?function(s,r,i){const o=s.value.clone(),a=zu(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof on?function(s,r,i){if(!si(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=zu(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ap(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Vs(t,e,n,s){return t instanceof Ir?function(r,i,o,a){if(!si(r.precondition,i))return o;const l=r.value.clone(),c=Ku(r.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof on?function(r,i,o,a){if(!si(r.precondition,i))return o;const l=Ku(r.fieldTransforms,a,i),c=i.data;return c.setAll(ap(r)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return si(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function U_(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=np(s.transform,r||null);i!=null&&(n===null&&(n=Je.empty()),n.set(s.field,i))}return n||null}function Hu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&is(n,s,(r,i)=>P_(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ir extends oo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class on extends oo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ap(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function zu(t,e,n){const s=new Map;ce(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,M_(o,a,n[r]))}return s}function Ku(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,O_(i,o,e))}return s}class ql extends oo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $_ extends oo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&F_(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Vs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Vs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Zd();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=op(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,(n,s)=>Hu(n,s))&&is(this.baseMutations,e.baseMutations,(n,s)=>Hu(n,s))}}class Hl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ce(e.mutations.length===s.length);let r=x_;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Hl(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,Q;function q_(t){switch(t){default:return F();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function lp(t){if(t===void 0)return Ft("GRPC error has no .code"),y.UNKNOWN;switch(t){case ye.OK:return y.OK;case ye.CANCELLED:return y.CANCELLED;case ye.UNKNOWN:return y.UNKNOWN;case ye.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case ye.INTERNAL:return y.INTERNAL;case ye.UNAVAILABLE:return y.UNAVAILABLE;case ye.UNAUTHENTICATED:return y.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case ye.NOT_FOUND:return y.NOT_FOUND;case ye.ALREADY_EXISTS:return y.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return y.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case ye.ABORTED:return y.ABORTED;case ye.OUT_OF_RANGE:return y.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return y.UNIMPLEMENTED;case ye.DATA_LOSS:return y.DATA_LOSS;default:return F()}}(Q=ye||(ye={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Kr}static getOrCreateInstance(){return Kr===null&&(Kr=new zl),Kr}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Kr=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=new Gn([4294967295,4294967295],0);function Wu(t){const e=H_().encode(t),n=new Y0;return n.update(e),new Uint8Array(n.digest())}function Gu(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gn([n,s],0),new Gn([r,i],0)]}class Kl{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Os(`Invalid padding: ${n}`);if(s<0)throw new Os(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Os(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Gn.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(Gn.fromNumber(s)));return r.compare(z_)===1&&(r=new Gn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Wu(e),[s,r]=Gu(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Kl(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Wu(e),[s,r]=Gu(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Cr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ao(j.min(),r,new he(J),$t(),Y())}}class Cr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Cr(s,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class cp{constructor(e,n){this.targetId=e,this.Vt=n}}class up{constructor(e,n,s=qe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Yu{constructor(){this.St=0,this.Dt=Xu(),this.Ct=qe.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Y(),n=Y(),s=Y();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:F()}}),new Cr(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=Xu()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class K_{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=$t(),this.zt=Qu(),this.Wt=new he(J)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(Da(o))if(r===0){const a=new M(o.path);this.Yt(s,a,Pe.newNoDocument(a,j.min()))}else ce(r===1);else{const a=this.ie(s);if(a!==r){const l=this.re(e,a);if(l!==0){this.ee(s);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,c)}(n=zl.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,f){var p,g,I,T,A,H;const q={localCacheCount:u,existenceFilterCount:f.count},z=f.unchangedNames;return z&&(q.bloomFilter={applied:c===0,hashCount:(p=z==null?void 0:z.hashCount)!==null&&p!==void 0?p:0,bitmapLength:(T=(I=(g=z==null?void 0:z.bits)===null||g===void 0?void 0:g.bitmap)===null||I===void 0?void 0:I.length)!==null&&T!==void 0?T:0,padding:(H=(A=z==null?void 0:z.bits)===null||A===void 0?void 0:A.padding)!==null&&H!==void 0?H:0}),q}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=An(i).toUint8Array()}catch(u){if(u instanceof Bd)return rs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new Kl(l,o,a)}catch(u){return rs(u instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.It===0?1:r!==n-this.oe(e.targetId,c)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Da(a.target)){const l=new M(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Pe.newNoDocument(l,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=Y();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.se(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new ao(e,n,this.Wt,this.jt,s);return this.jt=$t(),this.zt=Qu(),this.Wt=new he(J),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Yu,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new je(J),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Yu),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Qu(){return new he(M.comparator)}function Xu(){return new he(M.comparator)}const W_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),G_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Y_=(()=>({and:"AND",or:"OR"}))();class Q_{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Oa(t,e){return t.useProto3Json||to(e)?e:{value:e}}function Ii(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hp(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function X_(t,e){return Ii(t,e.toTimestamp())}function St(t){return ce(!!t),j.fromTimestamp(function(e){const n=tn(e);return new _e(n.seconds,n.nanos)}(t))}function Wl(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function fp(t){const e=le.fromString(t);return ce(mp(e)),e}function Ma(t,e){return Wl(t.databaseId,e.path)}function Vo(t,e){const n=fp(e);if(n.get(1)!==t.databaseId.projectId)throw new N(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(dp(n))}function Pa(t,e){return Wl(t.databaseId,e)}function J_(t){const e=fp(t);return e.length===4?le.emptyPath():dp(e)}function La(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dp(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ju(t,e,n){return{name:Ma(t,e),fields:n.value.mapValue.fields}}function Z_(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,c){return l.useProto3Json?(ce(c===void 0||typeof c=="string"),qe.fromBase64String(c||"")):(ce(c===void 0||c instanceof Uint8Array),qe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?y.UNKNOWN:lp(l.code);return new N(c,l.message||"")}(o);n=new up(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Vo(t,s.document.name),i=St(s.document.updateTime),o=s.document.createTime?St(s.document.createTime):j.min(),a=new Je({mapValue:{fields:s.document.fields}}),l=Pe.newFoundDocument(r,i,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new ri(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Vo(t,s.document),i=s.readTime?St(s.readTime):j.min(),o=Pe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ri([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Vo(t,s.document),i=s.removedTargetIds||[];n=new ri([],i,r,null)}else{if(!("filter"in e))return F();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new j_(r,i),a=s.targetId;n=new cp(a,o)}}return n}function eE(t,e){let n;if(e instanceof Ir)n={update:Ju(t,e.key,e.value)};else if(e instanceof ql)n={delete:Ma(t,e.key)};else if(e instanceof on)n={update:Ju(t,e.key,e.data),updateMask:cE(e.fieldMask)};else{if(!(e instanceof $_))return F();n={verify:Ma(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ti)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ur)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof hr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof bi)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw F()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:X_(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:F()}(t,e.precondition)),n}function tE(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?St(s.updateTime):St(r);return i.isEqual(j.min())&&(i=St(r)),new L_(i,s.transformResults||[])}(n,e))):[]}function nE(t,e){return{documents:[Pa(t,e.path)]}}function sE(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Pa(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Pa(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return gp(yt.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Bn(u.field),direction:oE(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Oa(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function rE(t){let e=J_(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ce(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const f=pp(u);return f instanceof yt&&Hd(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Yn(Vn(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,to(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(u){const f=!!u.before,p=u.values||[];return new Ei(p,f)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const f=!u.before,p=u.values||[];return new Ei(p,f)}(n.endAt)),I_(e,r,o,i,a,"F",l,c)}function iE(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pp(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Vn(e.unaryFilter.field);return we.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Vn(e.unaryFilter.field);return we.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Vn(e.unaryFilter.field);return we.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Vn(e.unaryFilter.field);return we.create(i,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(e){return we.create(Vn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return yt.create(e.compositeFilter.filters.map(n=>pp(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(t):F()}function oE(t){return W_[t]}function aE(t){return G_[t]}function lE(t){return Y_[t]}function Bn(t){return{fieldPath:t.canonicalString()}}function Vn(t){return Fe.fromServerFormat(t.fieldPath)}function gp(t){return t instanceof we?function(e){if(e.op==="=="){if(Uu(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NAN"}};if(Fu(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Uu(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NOT_NAN"}};if(Fu(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(e.field),op:aE(e.op),value:e.value}}}(t):t instanceof yt?function(e){const n=e.getFilters().map(s=>gp(s));return n.length===1?n[0]:{compositeFilter:{op:lE(e.op),filters:n}}}(t):F()}function cE(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,s,r,i=j.min(),o=j.min(),a=qe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new zt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.fe=e}}function hE(t){const e=rE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ka(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.rn=new dE}addToCollectionParentIndex(e,n){return this.rn.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(en.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(en.min())}updateCollectionGroup(e,n,s){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class dE{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new je(le.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new je(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ls(0)}static Mn(){return new ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.changes=new ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Vs(s.mutation,r,rt.empty(),_e.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Y()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Y()){const r=vn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Rs();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=vn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Y()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=$t();const o=Bs(),a=Bs();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof on)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Vs(u.mutation,c,u.mutation.getFieldMask(),_e.now())):o.set(c.key,rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var f;return a.set(c,new gE(u,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Bs();let r=new he((o,a)=>o-a),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||rt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const f=(r.get(a.batchId)||Y()).add(l);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,f=Zd();u.forEach(p=>{if(!i.has(p)){const g=op(n.get(p),s.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gd(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):E.resolve(vn());let a=-1,l=i;return o.next(c=>E.forEach(c,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{l=l.insert(u,p)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,Y())).next(u=>({batchId:a,changes:Jd(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(s=>{let r=Rs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Rs();return this.indexManager.getCollectionParents(e,r).next(o=>E.forEach(o,a=>{const l=function(c,u){return new vs(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,Pe.newInvalidDocument(c)))});let o=Rs();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Vs(c.mutation,l,rt.empty(),_e.now()),ro(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return E.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:St(s.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:hE(s.bundledQuery),readTime:St(s.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.overlays=new he(M.comparator),this.ls=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const s=vn();return E.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),E.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),E.resolve()}getOverlaysForCollection(e,n,s){const r=vn(),i=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return E.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new he((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=vn(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=vn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return E.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new V_(n,s));let i=this.ls.get(n);i===void 0&&(i=Y(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.fs=new je(be.ds),this.ws=new je(be._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new be(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new be(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new M(new le([])),s=new be(n,e),r=new be(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new M(new le([])),s=new be(n,e),r=new be(n,e+1);let i=Y();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new be(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return M.comparator(e.key,n.key)||J(e.As,n.As)}static _s(e,n){return J(e.As,n.As)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new je(be.ds)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new B_(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new be(n,0),r=new be(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new je(J);return n.forEach(r=>{const i=new be(r,0),o=new be(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),E.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;M.isDocumentKey(i)||(i=i.child(""));const o=new be(new M(i),0);let a=new je(J);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.As)),!0)},o),E.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ce(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return E.forEach(n.mutations,r=>{const i=new be(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new be(n,0),r=this.Rs.firstAfterOrEqual(s);return E.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.Ds=e,this.docs=new he(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():Pe.newInvalidDocument(n))}getEntries(e,n){let s=$t();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Pe.newInvalidDocument(r))}),E.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=$t();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||a_(o_(u),s)<=0||(r.has(u.key)||ro(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(e,n,s,r){F()}Cs(e,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new EE(this)}getSize(e){return E.resolve(this.size)}}class EE extends pE{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),E.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.persistence=e,this.xs=new ws(n=>$l(n),Bl),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Gl,this.targetCount=0,this.Ms=ls.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),E.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.Fn(n),E.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),E.waitFor(i).next(()=>r)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return E.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),E.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),E.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return E.resolve(s)}containsKey(e,n){return E.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n){this.$s={},this.overlays={},this.Os=new Pl(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new TE(this),this.indexManager=new fE,this.remoteDocumentCache=function(s){return new _E(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new uE(n),this.qs=new yE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vE,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new wE(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){O("MemoryPersistence","Starting transaction:",e);const r=new IE(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return E.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class IE extends c_{constructor(e){super(),this.currentSequenceNumber=e}}class Yl{constructor(e){this.persistence=e,this.Qs=new Gl,this.js=null}static zs(e){return new Yl(e)}get Ws(){if(this.js)return this.js;throw F()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),E.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),E.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ws,s=>{const r=M.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,j.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return E.or([()=>E.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=Y(),r=Y();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ql(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(ju(n))return E.resolve(null);let s=Ut(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ka(n,null,"F"),s=Ut(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Y(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(e,ka(n,null,"F")):this.Wi(e,c,n,l)}))})))}Gi(e,n,s,r){return ju(n)||r.isEqual(j.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(Ru()<=ee.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ra(n)),this.Wi(e,o,n,i_(r,-1)))})}ji(e,n){let s=new je(Qd(e));return n.forEach((r,i)=>{ro(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return Ru()<=ee.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Ra(n)),this.Ui.getDocumentsMatchingQuery(e,n,en.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new he(J),this.Yi=new ws(i=>$l(i),Bl),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mE(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function SE(t,e,n,s){return new AE(t,e,n,s)}async function yp(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=Y();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function xE(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,f=u.keys();let p=E.resolve();return f.forEach(g=>{p=p.next(()=>c.getEntry(a,g)).next(I=>{const T=l.docVersions.get(g);ce(T!==null),I.version.compareTo(T)<0&&(u.applyToRemoteDocument(I,l),I.isValidDocument()&&(I.setReadTime(l.commitVersion),c.addEntry(I)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Y();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function vp(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function DE(t,e){const n=K(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,f)=>{const p=r.get(f);if(!p)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(qe.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(f,g),function(I,T,A){return I.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(p,g,u)&&a.push(n.Bs.updateTargetData(i,g))});let l=$t(),c=Y();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(NE(i,o,e.documentUpdates).next(u=>{l=u.nr,c=u.sr})),!s.isEqual(j.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(f=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Ji=r,i))}function NE(t,e,n){let s=Y(),r=Y();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=$t();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{nr:o,sr:r}})}function kE(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function RE(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,E.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new zt(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Fa(t,e,n){const s=K(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!br(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function Zu(t,e,n){const s=K(t);let r=j.min(),i=Y();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=K(a),f=u.Yi.get(c);return f!==void 0?E.resolve(u.Ji.get(f)):u.Bs.getTargetData(l,c)}(s,o,Ut(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:j.min(),n?i:Y())).next(a=>(OE(s,C_(e),a),{documents:a,ir:i})))}function OE(t,e,n){let s=t.Xi.get(e)||j.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class eh{constructor(){this.activeTargetIds=k_()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ME{constructor(){this.Hr=new eh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new eh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr=null;function jo(){return Wr===null?Wr=268435456+Math.round(2147483648*Math.random()):Wr++,"0x"+Wr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="WebChannelConnection";class UE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=jo(),a=this.To(e,n);O("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.Eo(l,r,i),this.Ao(e,a,l,s).then(c=>(O("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw rs("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+ys,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=LE[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=jo();return new Promise((o,a)=>{const l=new G0;l.setWithCredentials(!0),l.listenOnce(z0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Bo.NO_ERROR:const u=l.getResponseJson();O(Oe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Bo.TIMEOUT:O(Oe,`RPC '${e}' ${i} timed out`),a(new N(y.DEADLINE_EXCEEDED,"Request time out"));break;case Bo.HTTP_ERROR:const f=l.getStatus();if(O(Oe,`RPC '${e}' ${i} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const I=function(T){const A=T.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(A)>=0?A:y.UNKNOWN}(g.status);a(new N(I,g.message))}else a(new N(y.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new N(y.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{O(Oe,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);O(Oe,`RPC '${e}' ${i} sending request:`,r),l.send(n,"POST",c,s,15)})}Ro(e,n,s){const r=jo(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=q0(),a=H0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new W0({})),this.Eo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=i.join("");O(Oe,`Creating RPC '${e}' stream ${r}: ${u}`,l);const f=o.createWebChannel(u,l);let p=!1,g=!1;const I=new FE({ro:A=>{g?O(Oe,`Not sending because RPC '${e}' stream ${r} is closed:`,A):(p||(O(Oe,`Opening RPC '${e}' stream ${r} transport.`),f.open(),p=!0),O(Oe,`RPC '${e}' stream ${r} sending:`,A),f.send(A))},oo:()=>f.close()}),T=(A,H,q)=>{A.listen(H,z=>{try{q(z)}catch(k){setTimeout(()=>{throw k},0)}})};return T(f,qr.EventType.OPEN,()=>{g||O(Oe,`RPC '${e}' stream ${r} transport opened.`)}),T(f,qr.EventType.CLOSE,()=>{g||(g=!0,O(Oe,`RPC '${e}' stream ${r} transport closed`),I.wo())}),T(f,qr.EventType.ERROR,A=>{g||(g=!0,rs(Oe,`RPC '${e}' stream ${r} transport errored:`,A),I.wo(new N(y.UNAVAILABLE,"The operation could not be completed")))}),T(f,qr.EventType.MESSAGE,A=>{var H;if(!g){const q=A.data[0];ce(!!q);const z=q,k=z.error||((H=z[0])===null||H===void 0?void 0:H.error);if(k){O(Oe,`RPC '${e}' stream ${r} received error:`,k);const Te=k.status;let tt=function(nt){const Mn=ye[nt];if(Mn!==void 0)return lp(Mn)}(Te),Nt=k.message;tt===void 0&&(tt=y.INTERNAL,Nt="Unknown error status: "+Te+" with message "+k.message),g=!0,I.wo(new N(tt,Nt)),f.close()}else O(Oe,`RPC '${e}' stream ${r} received:`,q),I._o(q)}}),T(a,K0.STAT_EVENT,A=>{A.stat===Nu.PROXY?O(Oe,`RPC '${e}' stream ${r} detected buffering proxy`):A.stat===Nu.NOPROXY&&O(Oe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{I.fo()},0),I}}function qo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){return new Q_(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&O("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,s,r,i,o,a,l){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new wp(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(Ft(n.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new N(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $E extends _p{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=Z_(this.serializer,e),s=function(r){if(!("targetChange"in r))return j.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?j.min():i.readTime?St(i.readTime):j.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=La(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Da(a)?{documents:nE(r,a)}:{query:sE(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=hp(r,i.resumeToken);const l=Oa(r,i.expectedCount);l!==null&&(o.expectedCount=l)}else if(i.snapshotVersion.compareTo(j.min())>0){o.readTime=Ii(r,i.snapshotVersion.toTimestamp());const l=Oa(r,i.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const s=iE(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=La(this.serializer),n.removeTarget=e,this.Wo(n)}}class BE extends _p{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=tE(e.writeResults,e.commitTime),s=St(e.commitTime);return this.listener.cu(s,n)}return ce(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=La(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>eE(this.serializer,s))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new N(y.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new N(y.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(y.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class jE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ft(n),this.mu=!1):O("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Rn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=K(a);l.vu.add(4),await Ar(l),l.bu.set("Unknown"),l.vu.delete(4),await co(l)}(this))})}),this.bu=new jE(s,r)}}async function co(t){if(Rn(t))for(const e of t.Ru)await e(!0)}async function Ar(t){for(const e of t.Ru)await e(!1)}function Ep(t,e){const n=K(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Zl(n)?Jl(n):_s(n).Ko()&&Xl(n,e))}function Tp(t,e){const n=K(t),s=_s(n);n.Au.delete(e),s.Ko()&&bp(n,e),n.Au.size===0&&(s.Ko()?s.jo():Rn(n)&&n.bu.set("Unknown"))}function Xl(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_s(t).su(e)}function bp(t,e){t.Vu.qt(e),_s(t).iu(e)}function Jl(t){t.Vu=new K_({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),_s(t).start(),t.bu.gu()}function Zl(t){return Rn(t)&&!_s(t).Uo()&&t.Au.size>0}function Rn(t){return K(t).vu.size===0}function Ip(t){t.Vu=void 0}async function HE(t){t.Au.forEach((e,n)=>{Xl(t,e)})}async function zE(t,e){Ip(t),Zl(t)?(t.bu.Iu(e),Jl(t)):t.bu.set("Unknown")}async function KE(t,e,n){if(t.bu.set("Online"),e instanceof up&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ci(t,s)}else if(e instanceof ri?t.Vu.Ht(e):e instanceof cp?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(j.min()))try{const s=await vp(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Au.get(l);c&&r.Au.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,l)=>{const c=r.Au.get(a);if(!c)return;r.Au.set(a,c.withResumeToken(qe.EMPTY_BYTE_STRING,c.snapshotVersion)),bp(r,a);const u=new zt(c.target,a,l,c.sequenceNumber);Xl(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await Ci(t,s)}}async function Ci(t,e,n){if(!br(e))throw e;t.vu.add(1),await Ar(t),t.bu.set("Offline"),n||(n=()=>vp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await co(t)})}function Cp(t,e){return e().catch(n=>Ci(t,n,e))}async function uo(t){const e=K(t),n=nn(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;WE(e);)try{const r=await kE(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,GE(e,r)}catch(r){await Ci(e,r)}Ap(e)&&Sp(e)}function WE(t){return Rn(t)&&t.Eu.length<10}function GE(t,e){t.Eu.push(e);const n=nn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Ap(t){return Rn(t)&&!nn(t).Uo()&&t.Eu.length>0}function Sp(t){nn(t).start()}async function YE(t){nn(t).hu()}async function QE(t){const e=nn(t);for(const n of t.Eu)e.uu(n.mutations)}async function XE(t,e,n){const s=t.Eu.shift(),r=Hl.from(s,e,n);await Cp(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await uo(t)}async function JE(t,e){e&&nn(t).ou&&await async function(n,s){if(r=s.code,q_(r)&&r!==y.ABORTED){const i=n.Eu.shift();nn(n).Qo(),await Cp(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await uo(n)}var r}(t,e),Ap(t)&&Sp(t)}async function nh(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=Rn(n);n.vu.add(3),await Ar(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await co(n)}async function ZE(t,e){const n=K(t);e?(n.vu.delete(2),await co(n)):e||(n.vu.add(2),await Ar(n),n.bu.set("Unknown"))}function _s(t){return t.Su||(t.Su=function(e,n,s){const r=K(e);return r.fu(),new $E(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:HE.bind(null,t),ao:zE.bind(null,t),nu:KE.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Zl(t)?Jl(t):t.bu.set("Unknown")):(await t.Su.stop(),Ip(t))})),t.Su}function nn(t){return t.Du||(t.Du=function(e,n,s){const r=K(e);return r.fu(),new BE(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:YE.bind(null,t),ao:JE.bind(null,t),au:QE.bind(null,t),cu:XE.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await uo(t)):(await t.Du.stop(),t.Eu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new ec(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tc(t,e){if(Ft("AsyncQueue",`${e}: ${t}`),br(t))return new N(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||M.comparator(n.key,s.key):(n,s)=>M.comparator(n.key,s.key),this.keyedMap=Rs(),this.sortedSet=new he(this.comparator)}static emptySet(e){return new Xn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Xn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.Cu=new he(M.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):F():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class cs{constructor(e,n,s,r,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new cs(e,n,Xn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&so(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(){this.Nu=void 0,this.listeners=[]}}class tT{constructor(){this.queries=new ws(e=>Yd(e),so),this.onlineState="Unknown",this.ku=new Set}}async function nT(t,e){const n=K(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new eT),r)try{i.Nu=await n.onListen(s)}catch(o){const a=tc(o,`Initialization of query '${Ra(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&nc(n)}async function sT(t,e){const n=K(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function rT(t,e){const n=K(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&nc(n)}function iT(t,e,n){const s=K(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function nc(t){t.ku.forEach(e=>{e.next()})}class oT{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new cs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this.key=e}}class Dp{constructor(e){this.key=e}}class aT{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Y(),this.mutatedKeys=Y(),this.tc=Qd(e),this.ec=new Xn(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new sh,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,f)=>{const p=r.get(u),g=ro(this.query,f)?f:null,I=!!p&&this.mutatedKeys.has(p.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;p&&g?p.data.isEqual(g.data)?I!==T&&(s.track({type:3,doc:g}),A=!0):this.rc(p,g)||(s.track({type:2,doc:g}),A=!0,(l&&this.tc(g,l)>0||c&&this.tc(g,c)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),A=!0):p&&!g&&(s.track({type:1,doc:p}),A=!0,(l||c)&&(a=!0)),A&&(g?(o=o.add(g),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((c,u)=>function(f,p){const g=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return g(f)-g(p)}(c.type,u.type)||this.tc(c.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,i.length!==0||l?{snapshot:new cs(this.query,e.ec,r,i,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new sh,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Y(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new Dp(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new xp(s))}),n}hc(e){this.Yu=e.ir,this.Zu=Y();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return cs.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class lT{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class cT{constructor(e){this.key=e,this.fc=!1}}class uT{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ws(a=>Yd(a),so),this._c=new Map,this.mc=new Set,this.gc=new he(M.comparator),this.yc=new Map,this.Ic=new Gl,this.Tc={},this.Ec=new Map,this.Ac=ls.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function hT(t,e){const n=ET(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await RE(n.localStore,Ut(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await fT(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Ep(n.remoteStore,o)}return r}async function fT(t,e,n,s,r){t.Rc=(f,p,g)=>async function(I,T,A,H){let q=T.view.sc(A);q.zi&&(q=await Zu(I.localStore,T.query,!1).then(({documents:Te})=>T.view.sc(Te,q)));const z=H&&H.targetChanges.get(T.targetId),k=T.view.applyChanges(q,I.isPrimaryClient,z);return ih(I,T.targetId,k.cc),k.snapshot}(t,f,p,g);const i=await Zu(t.localStore,e,!0),o=new aT(e,i.ir),a=o.sc(i.documents),l=Cr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);ih(t,n,c.cc);const u=new lT(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function dT(t,e){const n=K(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!so(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Fa(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Tp(n.remoteStore,s.targetId),Ua(n,s.targetId)}).catch(Tr)):(Ua(n,s.targetId),await Fa(n.localStore,s.targetId,!0))}async function pT(t,e,n){const s=TT(t);try{const r=await function(i,o){const a=K(i),l=_e.now(),c=o.reduce((p,g)=>p.add(g.key),Y());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=$t(),I=Y();return a.Zi.getEntries(p,c).next(T=>{g=T,g.forEach((A,H)=>{H.isValidDocument()||(I=I.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(T=>{u=T;const A=[];for(const H of o){const q=U_(H,u.get(H.key).overlayedDocument);q!=null&&A.push(new on(H.key,q,Vd(q.value.mapValue),gt.exists(!0)))}return a.mutationQueue.addMutationBatch(p,l,A,o)}).next(T=>{f=T;const A=T.applyToLocalDocumentSet(u,I);return a.documentOverlayCache.saveOverlays(p,T.batchId,A)})}).then(()=>({batchId:f.batchId,changes:Jd(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let l=i.Tc[i.currentUser.toKey()];l||(l=new he(J)),l=l.insert(o,a),i.Tc[i.currentUser.toKey()]=l}(s,r.batchId,n),await Sr(s,r.changes),await uo(s.remoteStore)}catch(r){const i=tc(r,"Failed to persist write");n.reject(i)}}async function Np(t,e){const n=K(t);try{const s=await DE(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(ce(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?ce(o.fc):r.removedDocuments.size>0&&(ce(o.fc),o.fc=!1))}),await Sr(n,s,e)}catch(s){await Tr(s)}}function rh(t,e,n){const s=K(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=K(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const f of u.listeners)f.Mu(o)&&(l=!0)}),l&&nc(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function gT(t,e,n){const s=K(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new he(M.comparator);o=o.insert(i,Pe.newNoDocument(i,j.min()));const a=Y().add(i),l=new ao(j.min(),new Map,new he(J),o,a);await Np(s,l),s.gc=s.gc.remove(i),s.yc.delete(e),sc(s)}else await Fa(s.localStore,e,!1).then(()=>Ua(s,e,n)).catch(Tr)}async function mT(t,e){const n=K(t),s=e.batch.batchId;try{const r=await xE(n.localStore,e);Rp(n,s,null),kp(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Sr(n,r)}catch(r){await Tr(r)}}async function yT(t,e,n){const s=K(t);try{const r=await function(i,o){const a=K(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(ce(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Rp(s,e,n),kp(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Sr(s,r)}catch(r){await Tr(r)}}function kp(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Rp(t,e,n){const s=K(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function Ua(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||Op(t,s)})}function Op(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Tp(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),sc(t))}function ih(t,e,n){for(const s of n)s instanceof xp?(t.Ic.addReference(s.key,e),vT(t,s)):s instanceof Dp?(O("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||Op(t,s.key)):F()}function vT(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(O("SyncEngine","New document in limbo: "+n),t.mc.add(s),sc(t))}function sc(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new M(le.fromString(e)),s=t.Ac.next();t.yc.set(s,new cT(n)),t.gc=t.gc.insert(n,s),Ep(t.remoteStore,new zt(Ut(Vl(n.path)),s,"TargetPurposeLimboResolution",Pl.ct))}}async function Sr(t,e,n){const s=K(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,l)=>{o.push(s.Rc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=Ql.Li(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,l){const c=K(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(l,f=>E.forEach(f.Fi,p=>c.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>E.forEach(f.Bi,p=>c.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!br(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const f=u.targetId;if(!u.fromCache){const p=c.Ji.get(f),g=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(g);c.Ji=c.Ji.insert(f,I)}}}(s.localStore,i))}async function wT(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await yp(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new N(y.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Sr(n,s.er)}}function _T(t,e){const n=K(t),s=n.yc.get(e);if(s&&s.fc)return Y().add(s.key);{let r=Y();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function ET(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Np.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_T.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gT.bind(null,e),e.dc.nu=rT.bind(null,e.eventManager),e.dc.Pc=iT.bind(null,e.eventManager),e}function TT(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yT.bind(null,e),e}class oh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=lo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return SE(this.persistence,new CE,e.initialUser,this.serializer)}createPersistence(e){return new bE(Yl.zs,this.serializer)}createSharedClientState(e){return new ME}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>rh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=wT.bind(null,this.syncEngine),await ZE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tT}createDatastore(e){const n=lo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new UE(r));var r;return function(i,o,a,l){return new VE(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>rh(this.syncEngine,a,0),o=th.D()?new th:new PE,new qE(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,l,c){const u=new uT(s,r,i,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=K(e);O("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ar(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ft("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Me.UNAUTHENTICATED,this.clientId=Ud.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{O("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(O("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=tc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ho(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await yp(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ah(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ST(t);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>nh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>nh(e.remoteStore,i)),t._onlineComponents=e}function AT(t){return t.name==="FirebaseError"?t.code===y.FAILED_PRECONDITION||t.code===y.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ST(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ho(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!AT(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await Ho(t,new oh)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Ho(t,new oh);return t._offlineComponents}async function Mp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await ah(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await ah(t,new bT))),t._onlineComponents}function xT(t){return Mp(t).then(e=>e.syncEngine)}async function lh(t){const e=await Mp(t),n=e.eventManager;return n.onListen=hT.bind(null,e.syncEngine),n.onUnlisten=dT.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t,e,n){if(!n)throw new N(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DT(t,e,n,s){if(e===!0&&s===!0)throw new N(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uh(t){if(!M.isDocumentKey(t))throw new N(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hh(t){if(M.isDocumentKey(t))throw new N(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ho(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function Mt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ho(t);throw new N(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new N(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pp((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class fo{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Q0;switch(n.type){case"firstParty":return new e_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ch.get(e);n&&(O("ComponentProvider","Removing Datastore"),ch.delete(e),n.terminate())}(this),Promise.resolve()}}function NT(t,e,n,s={}){var r;const i=(t=Mt(t,fo))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=Me.MOCK_USER;else{a=If(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new N(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Me(c)}t._authCredentials=new X0(new Fd(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}}class On{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new On(this.firestore,e,this._query)}}class Xt extends On{constructor(e,n,s){super(e,n,Vl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new M(e))}withConverter(e){return new Xt(this.firestore,e,this._path)}}function kT(t,e,...n){if(t=Ye(t),Lp("collection","path",e),t instanceof fo){const s=le.fromString(e,...n);return hh(s),new Xt(t,null,s)}{if(!(t instanceof Ge||t instanceof Xt))throw new N(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(le.fromString(e,...n));return hh(s),new Xt(t.firestore,null,s)}}function rc(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=Ud.A()),Lp("doc","path",e),t instanceof fo){const s=le.fromString(e,...n);return uh(s),new Ge(t,null,new M(s))}{if(!(t instanceof Ge||t instanceof Xt))throw new N(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(le.fromString(e,...n));return uh(s),new Ge(t.firestore,t instanceof Xt?t.converter:null,new M(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new wp(this,"async_queue_retry"),this.Xc=()=>{const n=qo();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=qo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=qo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Tn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!br(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Ft("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=ec.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&F()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function dh(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class us extends fo{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new RT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Up(this),this._firestoreClient.terminate()}}function OT(t,e){const n=typeof t=="object"?t:Rf(),s=typeof t=="string"?t:e||"(default)",r=Df(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Tf("firestore");i&&NT(r,...i)}return r}function Fp(t){return t._firestoreClient||Up(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Up(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,l,c){return new f_(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Pp(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new CT(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(qe.fromBase64String(e))}catch(n){throw new N(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=/^__.*__$/;class PT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new on(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ir(e,this.data,n,this.fieldTransforms)}}class $p{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new on(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Bp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class ac{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new ac(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Ai(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Bp(this.ca)&&MT.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class LT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||lo(e)}ya(e,n,s,r=!1){return new ac({ca:e,methodName:n,ga:s,path:Fe.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lc(t){const e=t._freezeSettings(),n=lo(t._databaseId);return new LT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FT(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);cc("Data must be an object, but it was:",o,s);const a=Vp(s,o);let l,c;if(i.merge)l=new rt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=$a(e,f,n);if(!o.contains(p))throw new N(y.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);qp(u,p)||u.push(p)}l=new rt(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new PT(new Je(a),l,c)}class go extends ic{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof go}}function UT(t,e,n,s){const r=t.ya(1,e,n);cc("Data must be an object, but it was:",r,s);const i=[],o=Je.empty();kn(s,(l,c)=>{const u=uc(e,l,n);c=Ye(c);const f=r.da(u);if(c instanceof go)i.push(u);else{const p=xr(c,f);p!=null&&(i.push(u),o.set(u,p))}});const a=new rt(i);return new $p(o,a,r.fieldTransforms)}function $T(t,e,n,s,r,i){const o=t.ya(1,e,n),a=[$a(e,s,n)],l=[r];if(i.length%2!=0)throw new N(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push($a(e,i[p])),l.push(i[p+1]);const c=[],u=Je.empty();for(let p=a.length-1;p>=0;--p)if(!qp(c,a[p])){const g=a[p];let I=l[p];I=Ye(I);const T=o.da(g);if(I instanceof go)c.push(g);else{const A=xr(I,T);A!=null&&(c.push(g),u.set(g,A))}}const f=new rt(c);return new $p(u,f,o.fieldTransforms)}function BT(t,e,n,s=!1){return xr(n,t.ya(s?4:3,e))}function xr(t,e){if(jp(t=Ye(t)))return cc("Unsupported field value:",e,t),Vp(t,e);if(t instanceof ic)return function(n,s){if(!Bp(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=xr(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return R_(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=_e.fromDate(n);return{timestampValue:Ii(s.serializer,r)}}if(n instanceof _e){const r=new _e(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ii(s.serializer,r)}}if(n instanceof oc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hs)return{bytesValue:hp(s.serializer,n._byteString)};if(n instanceof Ge){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Wl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${ho(n)}`)}(t,e)}function Vp(t,e){const n={};return $d(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kn(t,(s,r)=>{const i=xr(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function jp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof oc||t instanceof hs||t instanceof Ge||t instanceof ic)}function cc(t,e,n){if(!jp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ho(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function $a(t,e,n){if((e=Ye(e))instanceof po)return e._internalPath;if(typeof e=="string")return uc(t,e);throw Ai("Field path arguments must be of type string or ",t,!1,void 0,n)}const VT=new RegExp("[~\\*/\\[\\]]");function uc(t,e,n){if(e.search(VT)>=0)throw Ai(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new po(...e.split("."))._internalPath}catch{throw Ai(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ai(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new N(y.INVALID_ARGUMENT,a+t+l)}function qp(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jT extends Hp{data(){return super.data()}}function hc(t,e){return typeof e=="string"?uc(t,e):e instanceof po?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fc{}class zp extends fc{}function HT(t,e,...n){let s=[];e instanceof fc&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof pc).length,o=r.filter(a=>a instanceof dc).length;if(i>1||i>0&&o>0)throw new N(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class dc extends zp{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new dc(e,n,s)}_apply(e){const n=this._parse(e);return Kp(e._query,n),new On(e.firestore,e.converter,Na(e._query,n))}_parse(e){const n=lc(e.firestore);return function(r,i,o,a,l,c,u){let f;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new N(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){gh(u,c);const p=[];for(const g of u)p.push(ph(a,r,g));f={arrayValue:{values:p}}}else f=ph(a,r,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||gh(u,c),f=BT(o,i,u,c==="in"||c==="not-in");return we.create(l,c,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class pc extends fc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new pc(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Kp(i,a),i=Na(i,a)}(e._query,n),new On(e.firestore,e.converter,Na(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gc extends zp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new gc(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new N(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Yn(r,i);return function(a,l){if(jl(a)===null){const c=no(a);c!==null&&Wp(a,c,l.field)}}(s,o),o}(e._query,this._field,this._direction);return new On(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new vs(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function zT(t,e="asc"){const n=e,s=hc("orderBy",t);return gc._create(s,n)}function ph(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new N(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gd(e)&&n.indexOf("/")!==-1)throw new N(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(le.fromString(n));if(!M.isDocumentKey(s))throw new N(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Lu(t,new M(s))}if(n instanceof Ge)return Lu(t,n._key);throw new N(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ho(n)}.`)}function gh(t,e){if(!Array.isArray(t)||t.length===0)throw new N(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Kp(t,e){if(e.isInequality()){const s=no(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new N(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=jl(t);i!==null&&Wp(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Wp(t,e,n){if(!n.isEqual(e))throw new N(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class KT{convertValue(e,n="none"){switch(Sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(An(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return kn(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new oc(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Fl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ar(e));default:return null}}convertTimestamp(e){const n=tn(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=le.fromString(e);ce(mp(s));const r=new lr(s.get(1),s.get(3)),i=new M(s.popFirst(5));return r.isEqual(n)||Ft(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gp extends Hp{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ii(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(hc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ii extends Gp{data(e={}){return super.data(e)}}class GT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ms(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ii(this._firestore,this._userDataWriter,s.key,s,new Ms(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new ii(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ms(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ii(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ms(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:YT(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}class Yp extends KT{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function QT(t,e,n){t=Mt(t,Ge);const s=Mt(t.firestore,us),r=WT(t.converter,e,n);return mc(s,[FT(lc(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,gt.none())])}function XT(t,e,n,...s){t=Mt(t,Ge);const r=Mt(t.firestore,us),i=lc(r);let o;return o=typeof(e=Ye(e))=="string"||e instanceof po?$T(i,"updateDoc",t._key,e,n,s):UT(i,"updateDoc",t._key,e),mc(r,[o.toMutation(t._key,gt.exists(!0))])}function JT(t){return mc(Mt(t.firestore,us),[new ql(t._key,gt.none())])}function ZT(t,...e){var n,s,r;t=Ye(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||dh(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(dh(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let l,c,u;if(t instanceof Ge)c=Mt(t.firestore,us),u=Vl(t._key.path),l={next:f=>{e[o]&&e[o](eb(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Mt(t,On);c=Mt(f.firestore,us),u=f._query;const p=new Yp(c);l={next:g=>{e[o]&&e[o](new GT(c,p,f,g))},error:e[o+1],complete:e[o+2]},qT(t._query)}return function(f,p,g,I){const T=new IT(I),A=new oT(p,T,g);return f.asyncQueue.enqueueAndForget(async()=>nT(await lh(f),A)),()=>{T.Dc(),f.asyncQueue.enqueueAndForget(async()=>sT(await lh(f),A))}}(Fp(c),u,a,l)}function mc(t,e){return function(n,s){const r=new Tn;return n.asyncQueue.enqueueAndForget(async()=>pT(await xT(n),s,r)),r.promise}(Fp(t),e)}function eb(t,e,n){const s=n.docs.get(e._key),r=new Yp(t);return new Gp(t,r,e._key,s,new Ms(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ys=n})(Nf),Qs(new ns("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new us(new J0(n.getProvider("auth-internal")),new n_(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lr(a.options.projectId,l)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Qt(ku,"3.12.2",t),Qt(ku,"3.12.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="firebasestorage.googleapis.com",Xp="storageBucket",tb=2*60*1e3,nb=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends Dn{constructor(e,n,s=0){super(zo(e),`Firebase Storage: ${n} (${zo(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function zo(t){return"storage/"+t}function yc(){const t="An unknown error occurred, please check the error payload for server response.";return new ge(pe.UNKNOWN,t)}function sb(t){return new ge(pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function rb(t){return new ge(pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ib(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ge(pe.UNAUTHENTICATED,t)}function ob(){return new ge(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ab(t){return new ge(pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function lb(){return new ge(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function cb(){return new ge(pe.CANCELED,"User canceled the upload/download.")}function ub(t){return new ge(pe.INVALID_URL,"Invalid URL '"+t+"'.")}function hb(t){return new ge(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function fb(){return new ge(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Xp+"' property when initializing the app?")}function db(){return new ge(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function pb(){return new ge(pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function gb(t){return new ge(pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ba(t){return new ge(pe.INVALID_ARGUMENT,t)}function Jp(){return new ge(pe.APP_DELETED,"The Firebase app was deleted.")}function mb(t){return new ge(pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function js(t,e){return new ge(pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ss(t){throw new ge(pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=it.makeFromUrl(e,n)}catch{return new it(e,"")}if(s.path==="")return s;throw hb(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${u}/b/${r}/o${p}`,"i"),I={bucket:1,path:3},T=n===Qp?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",H=new RegExp(`^https?://${T}/${r}/${A}`,"i"),z=[{regex:a,indices:l,postModify:i},{regex:g,indices:I,postModify:c},{regex:H,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<z.length;k++){const Te=z[k],tt=Te.regex.exec(e);if(tt){const Nt=tt[Te.indices.bucket];let nt=tt[Te.indices.path];nt||(nt=""),s=new it(Nt,nt),Te.postModify(s);break}}if(s==null)throw ub(e);return s}}class yb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...A){c||(c=!0,e.apply(null,A))}function f(A){r=setTimeout(()=>{r=null,t(g,l())},A)}function p(){i&&clearTimeout(i)}function g(A,...H){if(c){p();return}if(A){p(),u.call(null,A,...H);return}if(l()||o){p(),u.call(null,A,...H);return}s<64&&(s*=2);let z;a===1?(a=2,z=0):z=(s+Math.random())*1e3,f(z)}let I=!1;function T(A){I||(I=!0,p(),!c&&(r!==null?(A||(a=2),clearTimeout(r),f(0)):A||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,T(!0)},n),T}function wb(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){return t!==void 0}function Eb(t){return typeof t=="object"&&!Array.isArray(t)}function vc(t){return typeof t=="string"||t instanceof String}function mh(t){return wc()&&t instanceof Blob}function wc(){return typeof Blob<"u"&&!Nv()}function yh(t,e,n,s){if(s<e)throw Ba(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Ba(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Zp(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(bn||(bn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,s,r,i,o,a,l,c,u,f,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,I)=>{this.resolve_=g,this.reject_=I,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Gr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===bn.NO_ERROR,l=i.getStatus();if(!a||Tb(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===bn.ABORT;s(!1,new Gr(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Gr(c,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_b(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=yc();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?Jp():cb();o(l)}else{const l=lb();o(l)}};this.canceled_?n(!1,new Gr(!1,null,!0)):this.backoffId_=vb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gr{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Ib(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Cb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ab(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Sb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function xb(t,e,n,s,r,i,o=!0){const a=Zp(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return Ab(c,e),Ib(c,n),Cb(c,i),Sb(c,s),new bb(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Nb(...t){const e=Db();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(wc())return new Blob(t);throw new ge(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function kb(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t){if(typeof atob>"u")throw gb("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ko{constructor(e,n){this.data=e,this.contentType=n||null}}function Ob(t,e){switch(t){case At.RAW:return new Ko(eg(e));case At.BASE64:case At.BASE64URL:return new Ko(tg(t,e));case At.DATA_URL:return new Ko(Pb(e),Lb(e))}throw yc()}function eg(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Mb(t){let e;try{e=decodeURIComponent(t)}catch{throw js(At.DATA_URL,"Malformed data URL.")}return eg(e)}function tg(t,e){switch(t){case At.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw js(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case At.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw js(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Rb(e)}catch(r){throw r.message.includes("polyfill")?r:js(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class ng{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw js(At.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Fb(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Pb(t){const e=new ng(t);return e.base64?tg(At.BASE64,e.rest):Mb(e.rest)}function Lb(t){return new ng(t).contentType}function Fb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n){let s=0,r="";mh(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(mh(this.data_)){const s=this.data_,r=kb(s,e,n);return r===null?null:new Ht(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Ht(s,!0)}}static getBlob(...e){if(wc()){const n=e.map(s=>s instanceof Ht?s.data_:s);return new Ht(Nb.apply(null,n))}else{const n=e.map(o=>vc(o)?Ob(At.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Ht(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t){let e;try{e=JSON.parse(t)}catch{return null}return Eb(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function $b(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function rg(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t,e){return e}class ze{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Bb}}let Yr=null;function Vb(t){return!vc(t)||t.length<2?t:rg(t)}function ig(){if(Yr)return Yr;const t=[];t.push(new ze("bucket")),t.push(new ze("generation")),t.push(new ze("metageneration")),t.push(new ze("name","fullPath",!0));function e(i,o){return Vb(o)}const n=new ze("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new ze("size");return r.xform=s,t.push(r),t.push(new ze("timeCreated")),t.push(new ze("updated")),t.push(new ze("md5Hash",null,!0)),t.push(new ze("cacheControl",null,!0)),t.push(new ze("contentDisposition",null,!0)),t.push(new ze("contentEncoding",null,!0)),t.push(new ze("contentLanguage",null,!0)),t.push(new ze("contentType",null,!0)),t.push(new ze("metadata","customMetadata",!0)),Yr=t,Yr}function jb(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new it(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function qb(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return jb(s,t),s}function og(t,e,n){const s=sg(e);return s===null?null:qb(t,s,n)}function Hb(t,e,n,s){const r=sg(e);if(r===null||!vc(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,f=t.fullPath,p="/b/"+o(u)+"/o/"+o(f),g=mo(p,n,s),I=Zp({alt:"media",token:c});return g+I})[0]}function zb(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class _c{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t){if(!t)throw yc()}function Kb(t,e){function n(s,r){const i=og(t,r,e);return ag(i!==null),i}return n}function Wb(t,e){function n(s,r){const i=og(t,r,e);return ag(i!==null),Hb(i,r,t.host,t._protocol)}return n}function lg(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=ob():r=ib():n.getStatus()===402?r=rb(t.bucket):n.getStatus()===403?r=ab(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function cg(t){const e=lg(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=sb(t.path)),i.serverResponse=r.serverResponse,i}return n}function Gb(t,e,n){const s=e.fullServerUrl(),r=mo(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new _c(r,i,Wb(t,n),o);return a.errorHandler=cg(e),a}function Yb(t,e){const n=e.fullServerUrl(),s=mo(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function o(l,c){}const a=new _c(s,r,o,i);return a.successCodes=[200,204],a.errorHandler=cg(e),a}function Qb(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Xb(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Qb(null,e)),s}function Jb(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let z="";for(let k=0;k<2;k++)z=z+Math.random().toString().slice(2);return z}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Xb(e,s,r),u=zb(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=Ht.getBlob(f,s,p);if(g===null)throw db();const I={name:c.fullPath},T=mo(i,t.host,t._protocol),A="POST",H=t.maxUploadRetryTime,q=new _c(T,A,Kb(t,n),H);return q.urlParams=I,q.headers=o,q.body=g.uploadData(),q.errorHandler=lg(e),q}class Zb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Ss("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ss("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ss("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ss("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ss("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class e1 extends Zb{initXhr(){this.xhr_.responseType="text"}}function Ec(){return new e1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){this._service=e,n instanceof it?this._location=n:this._location=it.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xn(e,n)}get root(){const e=new it(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rg(this._location.path)}get storage(){return this._service}get parent(){const e=Ub(this._location.path);if(e===null)return null;const n=new it(this._location.bucket,e);return new xn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw mb(e)}}function t1(t,e,n){t._throwIfRoot("uploadBytes");const s=Jb(t.storage,t._location,ig(),new Ht(e,!0),n);return t.storage.makeRequestWithTokens(s,Ec).then(r=>({metadata:r,ref:t}))}function n1(t){t._throwIfRoot("getDownloadURL");const e=Gb(t.storage,t._location,ig());return t.storage.makeRequestWithTokens(e,Ec).then(n=>{if(n===null)throw pb();return n})}function s1(t){t._throwIfRoot("deleteObject");const e=Yb(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ec)}function r1(t,e){const n=$b(t._location.path,e),s=new it(t._location.bucket,n);return new xn(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(t){return/^[A-Za-z]+:\/\//.test(t)}function o1(t,e){return new xn(t,e)}function ug(t,e){if(t instanceof Tc){const n=t;if(n._bucket==null)throw fb();const s=new xn(n,n._bucket);return e!=null?ug(s,e):s}else return e!==void 0?r1(t,e):t}function a1(t,e){if(e&&i1(e)){if(t instanceof Tc)return o1(t,e);throw Ba("To use ref(service, url), the first argument must be a Storage instance.")}else return ug(t,e)}function vh(t,e){const n=e==null?void 0:e[Xp];return n==null?null:it.makeFromBucketSpec(n,t)}function l1(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:If(r,t.app.options.projectId))}class Tc{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Qp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tb,this._maxUploadRetryTime=nb,this._requests=new Set,r!=null?this._bucket=it.makeFromBucketSpec(r,this._host):this._bucket=vh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=it.makeFromBucketSpec(this._url,e):this._bucket=vh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xn(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new yb(Jp());{const o=xb(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const wh="@firebase/storage",_h="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="storage";function c1(t,e,n){return t=Ye(t),t1(t,e,n)}function u1(t){return t=Ye(t),n1(t)}function h1(t){return t=Ye(t),s1(t)}function fg(t,e){return t=Ye(t),a1(t,e)}function f1(t=Rf(),e){t=Ye(t);const s=Df(t,hg).getImmediate({identifier:e}),r=Tf("storage");return r&&d1(s,...r),s}function d1(t,e,n,s={}){l1(t,e,n,s)}function p1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Tc(n,s,r,e,Nf)}function g1(){Qs(new ns(hg,p1,"PUBLIC").setMultipleInstances(!0)),Qt(wh,_h,""),Qt(wh,_h,"esm2017")}g1();const m1={apiKey:"AIzaSyDyW77823MSajkNaSQ6fw9-u8JtbPD_D-E",authDomain:"fir-testing-53e54.firebaseapp.com",projectId:"fir-testing-53e54",storageBucket:"fir-testing-53e54.appspot.com",messagingSenderId:"530300578305",appId:"1:530300578305:web:594a5b6b3f79a5ad17ee00"};kf(m1);const yo=OT(),dg=f1();let Qr;const y1=new Uint8Array(16);function v1(){if(!Qr&&(Qr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Qr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Qr(y1)}const Ae=[];for(let t=0;t<256;++t)Ae.push((t+256).toString(16).slice(1));function w1(t,e=0){return(Ae[t[e+0]]+Ae[t[e+1]]+Ae[t[e+2]]+Ae[t[e+3]]+"-"+Ae[t[e+4]]+Ae[t[e+5]]+"-"+Ae[t[e+6]]+Ae[t[e+7]]+"-"+Ae[t[e+8]]+Ae[t[e+9]]+"-"+Ae[t[e+10]]+Ae[t[e+11]]+Ae[t[e+12]]+Ae[t[e+13]]+Ae[t[e+14]]+Ae[t[e+15]]).toLowerCase()}const _1=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Eh={randomUUID:_1};function E1(t,e,n){if(Eh.randomUUID&&!e&&!t)return Eh.randomUUID();t=t||{};const s=t.random||(t.rng||v1)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=s[r];return e}return w1(s)}const T1={components:{Button:$i},emits:["add","close"],data(){return{id:null,name:null,winningYears:null,showFileSizeWarning:!1}},methods:{async addTeam(){const t=this.$refs.inputFile.files[0];if(t.size>5e4){this.showFileSizeWarning=!0;return}else{this.showFileSizeWarning=!1,this.id=E1(),this.name=this.name.trim(),this.winningYears=this.winningYears.split(","),this.winningYears=this.winningYears.map(r=>Number.parseInt(r));const e=fg(dg,this.id);await c1(e,t);const n=await u1(e),s=rc(yo,"teams",this.id);await QT(s,{logo:n,name:this.name,winningYears:this.winningYears}),this.name="",this.winningYears="",this.$refs.addForm.reset(),this.$emit("add")}},handleClose(){this.$emit("close")}}},vo=t=>(Yh("data-v-68660e62"),t=t(),Qh(),t),b1=vo(()=>U("h2",{class:"text-2xl font-bold uppercase mb-8 text-center"}," Add a new team ",-1)),I1={class:"mb-8"},C1=vo(()=>U("label",{for:"name"},"Name:",-1)),A1={class:"mb-8"},S1=vo(()=>U("label",{for:"winningYears"},"Winning Years:",-1)),x1={class:"flex flex-col my-8"},D1=vo(()=>U("label",{for:"logo"},"Logo:",-1)),N1={ref:"inputFile",type:"file",accept:".webp",id:"logo",required:""},k1={key:0,class:"warning-text"};function R1(t,e,n,s,r,i){const o=at("Button");return Ne(),Ze("form",{onSubmit:e[3]||(e[3]=cl((...a)=>i.addTeam&&i.addTeam(...a),["prevent"])),ref:"addForm",class:"text-md dark:text-gray-300"},[U("i",{class:"fa-solid fa-xmark text-red-600 text-right text-3xl block mb-2 cursor-pointer",onClick:e[0]||(e[0]=(...a)=>i.handleClose&&i.handleClose(...a))}),b1,U("div",I1,[C1,Zn(U("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>r.name=a),id:"name",type:"text",required:"",placeholder:"e.g. Real Madrid"},null,512),[[Ys,r.name]])]),U("div",A1,[S1,Zn(U("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>r.winningYears=a),id:"winningYears",type:"text",pattern:"\\d{4}(,\\d{4})*",title:"e.g. 2022,2023",required:"",placeholder:"e.g. 2022,2023"},null,512),[[Ys,r.winningYears]])]),U("div",x1,[U("div",null,[D1,U("input",N1,null,512)]),r.showFileSizeWarning?(Ne(),Ze("p",k1," Please select an image file smaller than 50KB. ")):ay("",!0)]),ie(o,{type:"primary",label:"add"})],544)}const O1=Vt(T1,[["render",R1],["__scopeId","data-v-68660e62"]]);const M1={components:{Button:$i},props:["updateDoc"],emits:["update","close"],data(){return{name:"",winningYears:""}},computed:{currentName:{get(){var t;return((t=this.updateDoc)==null?void 0:t.name)??""},set(t){this.updateDoc.name=t}},currentWinningYears:{get(){var t;return((t=this.updateDoc)==null?void 0:t.winningYears)??""},set(t){this.updateDoc.winningYears=t}}},methods:{async updateTeam(){this.name=this.currentName.trim(),this.winningYears=this.currentWinningYears.toString().split(","),this.winningYears=this.winningYears.map(e=>Number.parseInt(e));const t=rc(yo,"teams",this.updateDoc.id);await XT(t,{name:this.name,winningYears:this.winningYears}),this.name="",this.winningYears="",this.$refs.updateForm.reset(),this.$emit("update")},handleClose(){this.$emit("close")}}},bc=t=>(Yh("data-v-e18ad617"),t=t(),Qh(),t),P1=bc(()=>U("h2",{class:"text-2xl font-bold uppercase mb-8 text-center"}," Update the team details ",-1)),L1={class:"mb-8"},F1=bc(()=>U("label",{for:"name"},"Name:",-1)),U1={class:"mb-8"},$1=bc(()=>U("label",{for:"winningYears"},"Winning Years:",-1));function B1(t,e,n,s,r,i){const o=at("Button");return Ne(),Ze("form",{onSubmit:e[3]||(e[3]=cl((...a)=>i.updateTeam&&i.updateTeam(...a),["prevent"])),ref:"updateForm",class:"text-md dark:text-gray-300"},[U("i",{class:"fa-solid fa-xmark text-red-600 text-right text-3xl block mb-2 cursor-pointer",onClick:e[0]||(e[0]=(...a)=>i.handleClose&&i.handleClose(...a))}),P1,U("div",L1,[F1,Zn(U("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>i.currentName=a),id:"name",type:"text",required:"",placeholder:"e.g. Real Madrid"},null,512),[[Ys,i.currentName]])]),U("div",U1,[$1,Zn(U("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>i.currentWinningYears=a),id:"winningYears",type:"text",pattern:"\\d{4}(,\\d{4})*",title:"e.g. 2022,2023",required:"",placeholder:"e.g. 2022,2023"},null,512),[[Ys,i.currentWinningYears]])]),ie(o,{type:"primary",label:"update"})],544)}const V1=Vt(M1,[["render",B1],["__scopeId","data-v-e18ad617"]]);function j1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ic={};Object.defineProperty(Ic,"__esModule",{value:!0});var q1=function(){function t(e,n){for(var s=0;s<n.length;s++){var r=n[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();function H1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var z1=function(){function t(){H1(this,t),this.view=document.body.appendChild(document.createElement("div")),this.view.classList.add("snackbar"),this.isActive=!1,this.queue=[],this.gap=250,this.duration=5e3}return q1(t,[{key:"show",value:function(n){var s=this;if(this.isActive){this.queue.push(n);return}this.isActive=!0,this.view.textContent=n,this.view.classList.add("snackbar--visible"),this.queue.shift(),setTimeout(function(){return s.hide()},this.duration)}},{key:"hide",value:function(){var n=this;this.isActive=!1,this.view.classList.remove("snackbar--visible"),this.queue.length&&setTimeout(function(){return n.show(n.queue[0])},this.gap)}}]),t}();Ic.default=z1;var K1=Ic,W1=G1(K1);function G1(t){return t&&t.__esModule?t:{default:t}}var Wo=void 0;function Y1(){return Wo||(Wo=new W1.default),Wo}var Q1=Y1();const Va=j1(Q1),X1={components:{Button:$i},props:["deleteDoc"],emits:["cancel","confirm"],methods:{handleCancel(){this.$emit("cancel")},async deleteTeam(){const t=fg(dg,this.deleteDoc);await h1(t);const e=rc(yo,"teams",this.deleteDoc);this.$emit("confirm"),await JT(e).then(()=>{Va.show("The team has been deleted successfully!")})}}},J1=U("h2",{class:"text-xl font-bold uppercase mb-8 text-center dark:text-gray-300"}," Please confirm to delete the team. ",-1),Z1={class:"flex justify-center gap-x-6"};function eI(t,e,n,s,r,i){const o=at("Button");return Ne(),Ze(Xe,null,[J1,U("div",Z1,[ie(o,{label:"Confirm",onClick:i.deleteTeam,type:"delete"},null,8,["onClick"]),ie(o,{label:"Cancel",onClick:i.handleCancel,type:"secondary"},null,8,["onClick"])])],64)}const tI=Vt(X1,[["render",eI]]);const nI={},sI={class:"modal w-[450px] p-6 dark:bg-gray-900"};function rI(t,e,n,s,r,i){return Ne(),Ze("dialog",sI,[$m(t.$slots,"default",{},void 0,!0)])}const iI=Vt(nI,[["render",rI],["__scopeId","data-v-7a7696db"]]);const oI={components:{NavigationBar:Xy,IntroSection:iv,Button:$i,Team:gv,SearchBar:wv,AddForm:O1,UpdateForm:V1,DeleteForm:tI,Modal:iI},data(){return{allTeams:[],updateDoc:null,deleteDoc:null,teamName:"",loaded:!1}},mounted(){let t=kT(yo,"teams");t=HT(t,zT("name")),ZT(t,e=>{this.allTeams=[],e.docs.forEach(n=>{const s=n.id;n=n.data(),n.id=s,this.allTeams.push(n)})})},methods:{reset(){this.$refs.searchBar.$data.teamName="",this.teamName=""},handleTeamName(t){this.teamName=t},addTeam(){this.$refs.addForm.$el.showModal()},updateTeam(t,e,n){this.$refs.updateForm.$el.showModal(),this.updateDoc={id:t,name:e,winningYears:n}},closeAddFrom(){this.$refs.addForm.$el.close(),Va.show("The team has been added successfully!")},closeAddModal(){this.$refs.addForm.$el.close()},closeUpdateForm(){this.$refs.updateForm.$el.close(),Va.show("The team has been updated successfully!")},closeUpdateModal(){this.$refs.updateForm.$el.close()},askConfirm(t){this.$refs.deleteForm.$el.showModal(),this.deleteDoc=t},closeConfirmBox(){this.$refs.deleteForm.$el.close()},showTeams(){this.loaded=!0}},computed:{filteredTeam(){return this.allTeams.filter(t=>t.name.toLowerCase().includes(this.teamName.trim().toLowerCase()))}}},aI={class:"max-w-screen-lg mx-auto mb-16 px-4"},lI={class:"flex flex-col md:flex-row gap-3"},cI={class:"all-teams"};function uI(t,e,n,s,r,i){const o=at("NavigationBar"),a=at("IntroSection"),l=at("SearchBar"),c=at("Button"),u=at("Team"),f=at("AddForm"),p=at("Modal"),g=at("UpdateForm"),I=at("DeleteForm");return Ne(),Ze("div",aI,[ie(o),ie(a),U("div",lI,[ie(l,{ref:"searchBar",onUpdate:i.handleTeamName},null,8,["onUpdate"]),ie(c,{type:"primary",label:"add a new team",onClick:i.addTeam},null,8,["onClick"]),ie(c,{type:"secondary",label:"reset",onClick:i.reset},null,8,["onClick"])]),Zn(U("div",cI,[(Ne(!0),Ze(Xe,null,sf(i.filteredTeam,(T,A)=>(Ne(),ol(u,{key:A,id:T.id,src:T.logo,name:T.name,winningYears:T.winningYears,onLoaded:i.showTeams,onDelete:i.askConfirm,onUpdate:i.updateTeam},null,8,["id","src","name","winningYears","onLoaded","onDelete","onUpdate"]))),128))],512),[[Vy,r.loaded]]),ie(p,{ref:"addForm"},{default:Zr(()=>[ie(f,{onAdd:i.closeAddFrom,onClose:i.closeAddModal},null,8,["onAdd","onClose"])]),_:1},512),ie(p,{ref:"updateForm"},{default:Zr(()=>[ie(g,{updateDoc:r.updateDoc,onClose:i.closeUpdateModal,onUpdate:i.closeUpdateForm},null,8,["updateDoc","onClose","onUpdate"])]),_:1},512),ie(p,{ref:"deleteForm"},{default:Zr(()=>[ie(I,{deleteDoc:r.deleteDoc,onConfirm:i.closeConfirmBox,onCancel:i.closeConfirmBox},null,8,["deleteDoc","onConfirm","onCancel"])]),_:1},512)])}const hI=Vt(oI,[["render",uI],["__scopeId","data-v-f20ebbf4"]]);Hy(hI).mount("#app");
