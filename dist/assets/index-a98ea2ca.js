(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Ra(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const re={},Un=[],ct=()=>{},tg=()=>!1,ng=/^on[^a-z]/,yi=t=>ng.test(t),ka=t=>t.startsWith("onUpdate:"),xe=Object.assign,Oa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sg=Object.prototype.hasOwnProperty,Y=(t,e)=>sg.call(t,e),$=Array.isArray,$n=t=>vi(t)==="[object Map]",sh=t=>vi(t)==="[object Set]",K=t=>typeof t=="function",_e=t=>typeof t=="string",Ma=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",rh=t=>le(t)&&K(t.then)&&K(t.catch),ih=Object.prototype.toString,vi=t=>ih.call(t),rg=t=>vi(t).slice(8,-1),oh=t=>vi(t)==="[object Object]",Pa=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vr=Ra(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ig=/-(\w)/g,bt=wi(t=>t.replace(ig,(e,n)=>n?n.toUpperCase():"")),og=/\B([A-Z])/g,is=wi(t=>t.replace(og,"-$1").toLowerCase()),_i=wi(t=>t.charAt(0).toUpperCase()+t.slice(1)),lo=wi(t=>t?`on${_i(t)}`:""),Qr=(t,e)=>!Object.is(t,e),jr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Yr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Lo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let dl;const Fo=()=>dl||(dl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function La(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=_e(s)?ug(s):La(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(_e(t))return t;if(le(t))return t}}const ag=/;(?![^(]*\))/g,cg=/:([^]+)/,lg=/\/\*[^]*?\*\//g;function ug(t){const e={};return t.replace(lg,"").split(ag).forEach(n=>{if(n){const s=n.split(cg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ei(t){let e="";if(_e(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Ei(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const hg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fg=Ra(hg);function ah(t){return!!t||t===""}const Uo=t=>_e(t)?t:t==null?"":$(t)||le(t)&&(t.toString===ih||!K(t.toString))?JSON.stringify(t,ch,2):String(t),ch=(t,e)=>e&&e.__v_isRef?ch(t,e.value):$n(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:sh(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!$(e)&&!oh(e)?String(e):e;let rt;class dg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=rt,!e&&rt&&(this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=rt;try{return rt=this,e()}finally{rt=n}}}on(){rt=this}off(){rt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function pg(t,e=rt){e&&e.active&&e.effects.push(t)}function gg(){return rt}const Fa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},lh=t=>(t.w&Gt)>0,uh=t=>(t.n&Gt)>0,mg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Gt},yg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];lh(r)&&!uh(r)?r.delete(t):e[n++]=r,r.w&=~Gt,r.n&=~Gt}e.length=n}},$o=new WeakMap;let Ts=0,Gt=1;const Bo=30;let it;const dn=Symbol(""),Vo=Symbol("");class Ua{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pg(this,s)}run(){if(!this.active)return this.fn();let e=it,n=jt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=it,it=this,jt=!0,Gt=1<<++Ts,Ts<=Bo?mg(this):pl(this),this.fn()}finally{Ts<=Bo&&yg(this),Gt=1<<--Ts,it=this.parent,jt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){it===this?this.deferStop=!0:this.active&&(pl(this),this.onStop&&this.onStop(),this.active=!1)}}function pl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let jt=!0;const hh=[];function os(){hh.push(jt),jt=!1}function as(){const t=hh.pop();jt=t===void 0?!0:t}function Ge(t,e,n){if(jt&&it){let s=$o.get(t);s||$o.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Fa()),fh(r)}}function fh(t,e){let n=!1;Ts<=Bo?uh(t)||(t.n|=Gt,n=!lh(t)):n=!t.has(it),n&&(t.add(it),it.deps.push(t))}function kt(t,e,n,s,r,i){const o=$o.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Pa(n)&&a.push(o.get("length")):(a.push(o.get(dn)),$n(t)&&a.push(o.get(Vo)));break;case"delete":$(t)||(a.push(o.get(dn)),$n(t)&&a.push(o.get(Vo)));break;case"set":$n(t)&&a.push(o.get(dn));break}if(a.length===1)a[0]&&jo(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);jo(Fa(c))}}function jo(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&gl(s);for(const s of n)s.computed||gl(s)}function gl(t,e){(t!==it||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const vg=Ra("__proto__,__v_isRef,__isVue"),dh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ma)),wg=$a(),_g=$a(!1,!0),Eg=$a(!0),ml=Tg();function Tg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let i=0,o=this.length;i<o;i++)Ge(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){os();const s=Z(this)[e].apply(this,n);return as(),s}}),t}function Ig(t){const e=Z(this);return Ge(e,"has",t),e.hasOwnProperty(t)}function $a(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?$g:vh:e?yh:mh).get(s))return s;const o=$(s);if(!t){if(o&&Y(ml,r))return Reflect.get(ml,r,i);if(r==="hasOwnProperty")return Ig}const a=Reflect.get(s,r,i);return(Ma(r)?dh.has(r):vg(r))||(t||Ge(s,"get",r),e)?a:He(a)?o&&Pa(r)?a:a.value:le(a)?t?wh(a):ja(a):a}}const bg=ph(),Cg=ph(!0);function ph(t=!1){return function(n,s,r,i){let o=n[s];if(Us(o)&&He(o)&&!He(r))return!1;if(!t&&(!qo(r)&&!Us(r)&&(o=Z(o),r=Z(r)),!$(n)&&He(o)&&!He(r)))return o.value=r,!0;const a=$(n)&&Pa(s)?Number(s)<n.length:Y(n,s),c=Reflect.set(n,s,r,i);return n===Z(i)&&(a?Qr(r,o)&&kt(n,"set",s,r):kt(n,"add",s,r)),c}}function Ag(t,e){const n=Y(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&kt(t,"delete",e,void 0),s}function Sg(t,e){const n=Reflect.has(t,e);return(!Ma(e)||!dh.has(e))&&Ge(t,"has",e),n}function Dg(t){return Ge(t,"iterate",$(t)?"length":dn),Reflect.ownKeys(t)}const gh={get:wg,set:bg,deleteProperty:Ag,has:Sg,ownKeys:Dg},xg={get:Eg,set(t,e){return!0},deleteProperty(t,e){return!0}},Ng=xe({},gh,{get:_g,set:Cg}),Ba=t=>t,Ti=t=>Reflect.getPrototypeOf(t);function br(t,e,n=!1,s=!1){t=t.__v_raw;const r=Z(t),i=Z(e);n||(e!==i&&Ge(r,"get",e),Ge(r,"get",i));const{has:o}=Ti(r),a=s?Ba:n?za:Ha;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Cr(t,e=!1){const n=this.__v_raw,s=Z(n),r=Z(t);return e||(t!==r&&Ge(s,"has",t),Ge(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ar(t,e=!1){return t=t.__v_raw,!e&&Ge(Z(t),"iterate",dn),Reflect.get(t,"size",t)}function yl(t){t=Z(t);const e=Z(this);return Ti(e).has.call(e,t)||(e.add(t),kt(e,"add",t,t)),this}function vl(t,e){e=Z(e);const n=Z(this),{has:s,get:r}=Ti(n);let i=s.call(n,t);i||(t=Z(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Qr(e,o)&&kt(n,"set",t,e):kt(n,"add",t,e),this}function wl(t){const e=Z(this),{has:n,get:s}=Ti(e);let r=n.call(e,t);r||(t=Z(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&kt(e,"delete",t,void 0),i}function _l(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&kt(t,"clear",void 0,void 0),n}function Sr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Z(o),c=e?Ba:t?za:Ha;return!t&&Ge(a,"iterate",dn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Dr(t,e,n){return function(...s){const r=this.__v_raw,i=Z(r),o=$n(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Ba:e?za:Ha;return!e&&Ge(i,"iterate",c?Vo:dn),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...e){return t==="delete"?!1:this}}function Rg(){const t={get(i){return br(this,i)},get size(){return Ar(this)},has:Cr,add:yl,set:vl,delete:wl,clear:_l,forEach:Sr(!1,!1)},e={get(i){return br(this,i,!1,!0)},get size(){return Ar(this)},has:Cr,add:yl,set:vl,delete:wl,clear:_l,forEach:Sr(!1,!0)},n={get(i){return br(this,i,!0)},get size(){return Ar(this,!0)},has(i){return Cr.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:Sr(!0,!1)},s={get(i){return br(this,i,!0,!0)},get size(){return Ar(this,!0)},has(i){return Cr.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:Sr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Dr(i,!1,!1),n[i]=Dr(i,!0,!1),e[i]=Dr(i,!1,!0),s[i]=Dr(i,!0,!0)}),[t,n,e,s]}const[kg,Og,Mg,Pg]=Rg();function Va(t,e){const n=e?t?Pg:Mg:t?Og:kg;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Y(n,r)&&r in s?n:s,r,i)}const Lg={get:Va(!1,!1)},Fg={get:Va(!1,!0)},Ug={get:Va(!0,!1)},mh=new WeakMap,yh=new WeakMap,vh=new WeakMap,$g=new WeakMap;function Bg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vg(t){return t.__v_skip||!Object.isExtensible(t)?0:Bg(rg(t))}function ja(t){return Us(t)?t:qa(t,!1,gh,Lg,mh)}function jg(t){return qa(t,!1,Ng,Fg,yh)}function wh(t){return qa(t,!0,xg,Ug,vh)}function qa(t,e,n,s,r){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Vg(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Bn(t){return Us(t)?Bn(t.__v_raw):!!(t&&t.__v_isReactive)}function Us(t){return!!(t&&t.__v_isReadonly)}function qo(t){return!!(t&&t.__v_isShallow)}function _h(t){return Bn(t)||Us(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Eh(t){return Yr(t,"__v_skip",!0),t}const Ha=t=>le(t)?ja(t):t,za=t=>le(t)?wh(t):t;function qg(t){jt&&it&&(t=Z(t),fh(t.dep||(t.dep=Fa())))}function Hg(t,e){t=Z(t);const n=t.dep;n&&jo(n)}function He(t){return!!(t&&t.__v_isRef===!0)}function zg(t){return He(t)?t.value:t}const Kg={get:(t,e,n)=>zg(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return He(r)&&!He(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Th(t){return Bn(t)?t:new Proxy(t,Kg)}class Wg{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ua(e,()=>{this._dirty||(this._dirty=!0,Hg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Z(this);return qg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Gg(t,e,n=!1){let s,r;const i=K(t);return i?(s=t,r=ct):(s=t.get,r=t.set),new Wg(s,r,i||!r,n)}function qt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Ii(i,e,n)}return r}function lt(t,e,n,s){if(K(t)){const i=qt(t,e,n,s);return i&&rh(i)&&i.catch(o=>{Ii(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(lt(t[i],e,n,s));return r}function Ii(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){qt(c,null,10,[t,o,a]);return}}Qg(t,n,r,s)}function Qg(t,e,n,s=!0){console.error(t)}let $s=!1,Ho=!1;const Oe=[];let vt=0;const Vn=[];let Dt=null,an=0;const Ih=Promise.resolve();let Ka=null;function Yg(t){const e=Ka||Ih;return t?e.then(this?t.bind(this):t):e}function Xg(t){let e=vt+1,n=Oe.length;for(;e<n;){const s=e+n>>>1;Bs(Oe[s])<t?e=s+1:n=s}return e}function Wa(t){(!Oe.length||!Oe.includes(t,$s&&t.allowRecurse?vt+1:vt))&&(t.id==null?Oe.push(t):Oe.splice(Xg(t.id),0,t),bh())}function bh(){!$s&&!Ho&&(Ho=!0,Ka=Ih.then(Ah))}function Jg(t){const e=Oe.indexOf(t);e>vt&&Oe.splice(e,1)}function Zg(t){$(t)?Vn.push(...t):(!Dt||!Dt.includes(t,t.allowRecurse?an+1:an))&&Vn.push(t),bh()}function El(t,e=$s?vt+1:0){for(;e<Oe.length;e++){const n=Oe[e];n&&n.pre&&(Oe.splice(e,1),e--,n())}}function Ch(t){if(Vn.length){const e=[...new Set(Vn)];if(Vn.length=0,Dt){Dt.push(...e);return}for(Dt=e,Dt.sort((n,s)=>Bs(n)-Bs(s)),an=0;an<Dt.length;an++)Dt[an]();Dt=null,an=0}}const Bs=t=>t.id==null?1/0:t.id,em=(t,e)=>{const n=Bs(t)-Bs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ah(t){Ho=!1,$s=!0,Oe.sort(em);const e=ct;try{for(vt=0;vt<Oe.length;vt++){const n=Oe[vt];n&&n.active!==!1&&qt(n,null,14)}}finally{vt=0,Oe.length=0,Ch(),$s=!1,Ka=null,(Oe.length||Vn.length)&&Ah()}}function tm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||re;p&&(r=n.map(g=>_e(g)?g.trim():g)),f&&(r=n.map(Lo))}let a,c=s[a=lo(e)]||s[a=lo(bt(e))];!c&&i&&(c=s[a=lo(is(e))]),c&&lt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,lt(l,t,6,r)}}function Sh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!K(t)){const c=l=>{const u=Sh(l,e,!0);u&&(a=!0,xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(le(t)&&s.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):xe(o,i),le(t)&&s.set(t,o),o)}function bi(t,e){return!t||!yi(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,is(e))||Y(t,e))}let Pe=null,Ci=null;function Xr(t){const e=Pe;return Pe=t,Ci=t&&t.type.__scopeId||null,e}function Ai(t){Ci=t}function Si(){Ci=null}function Dh(t,e=Pe,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&kl(-1);const i=Xr(e);let o;try{o=t(...r)}finally{Xr(i),s._d&&kl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function uo(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:g,ctx:A,inheritAttrs:I}=t;let S,q;const j=Xr(t);try{if(n.shapeFlag&4){const R=r||s;S=yt(u.call(R,R,f,i,g,p,A)),q=c}else{const R=e;S=yt(R.length>1?R(i,{attrs:c,slots:a,emit:l}):R(i,null)),q=e.props?c:nm(c)}}catch(R){Rs.length=0,Ii(R,t,1),S=qe(Wn)}let H=S;if(q&&I!==!1){const R=Object.keys(q),{shapeFlag:Ee}=H;R.length&&Ee&7&&(o&&R.some(ka)&&(q=sm(q,o)),H=Gn(H,q))}return n.dirs&&(H=Gn(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),S=H,Xr(j),S}const nm=t=>{let e;for(const n in t)(n==="class"||n==="style"||yi(n))&&((e||(e={}))[n]=t[n]);return e},sm=(t,e)=>{const n={};for(const s in t)(!ka(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function rm(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Tl(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!bi(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Tl(s,o,l):!0:!!o;return!1}function Tl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!bi(n,i))return!0}return!1}function im({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const om=t=>t.__isSuspense;function am(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Zg(t)}const xr={};function ho(t,e,n){return xh(t,e,n)}function xh(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=re){var a;const c=gg()===((a=Se)==null?void 0:a.scope)?Se:null;let l,u=!1,f=!1;if(He(t)?(l=()=>t.value,u=qo(t)):Bn(t)?(l=()=>t,s=!0):$(t)?(f=!0,u=t.some(R=>Bn(R)||qo(R)),l=()=>t.map(R=>{if(He(R))return R.value;if(Bn(R))return ln(R);if(K(R))return qt(R,c,2)})):K(t)?e?l=()=>qt(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),lt(t,c,3,[g])}:l=ct,e&&s){const R=l;l=()=>ln(R())}let p,g=R=>{p=j.onStop=()=>{qt(R,c,4)}},A;if(js)if(g=ct,e?n&&lt(e,c,3,[l(),f?[]:void 0,g]):l(),r==="sync"){const R=sy();A=R.__watcherHandles||(R.__watcherHandles=[])}else return ct;let I=f?new Array(t.length).fill(xr):xr;const S=()=>{if(j.active)if(e){const R=j.run();(s||u||(f?R.some((Ee,Qe)=>Qr(Ee,I[Qe])):Qr(R,I)))&&(p&&p(),lt(e,c,3,[R,I===xr?void 0:f&&I[0]===xr?[]:I,g]),I=R)}else j.run()};S.allowRecurse=!!e;let q;r==="sync"?q=S:r==="post"?q=()=>Ke(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),q=()=>Wa(S));const j=new Ua(l,q);e?n?S():I=j.run():r==="post"?Ke(j.run.bind(j),c&&c.suspense):j.run();const H=()=>{j.stop(),c&&c.scope&&Oa(c.scope.effects,j)};return A&&A.push(H),H}function cm(t,e,n){const s=this.proxy,r=_e(t)?t.includes(".")?Nh(s,t):()=>s[t]:t.bind(s,s);let i;K(e)?i=e:(i=e.handler,n=e);const o=Se;Qn(this);const a=xh(r,i.bind(s),n);return o?Qn(o):pn(),a}function Nh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ln(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),He(t))ln(t.value,e);else if($(t))for(let n=0;n<t.length;n++)ln(t[n],e);else if(sh(t)||$n(t))t.forEach(n=>{ln(n,e)});else if(oh(t))for(const n in t)ln(t[n],e);return t}function zo(t,e){const n=Pe;if(n===null)return t;const s=Ri(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=re]=e[i];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&ln(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function sn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(os(),lt(c,n,8,[t.el,a,t,e]),as())}}const xs=t=>!!t.type.__asyncLoader,Rh=t=>t.type.__isKeepAlive;function lm(t,e){kh(t,"a",e)}function um(t,e){kh(t,"da",e)}function kh(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Di(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Rh(r.parent.vnode)&&hm(s,e,n,r),r=r.parent}}function hm(t,e,n,s){const r=Di(e,t,s,!0);Oh(()=>{Oa(s[e],r)},n)}function Di(t,e,n=Se,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;os(),Qn(n);const a=lt(e,n,t,o);return pn(),as(),a});return s?r.unshift(i):r.push(i),i}}const Ft=t=>(e,n=Se)=>(!js||t==="sp")&&Di(t,(...s)=>e(...s),n),fm=Ft("bm"),dm=Ft("m"),pm=Ft("bu"),gm=Ft("u"),mm=Ft("bum"),Oh=Ft("um"),ym=Ft("sp"),vm=Ft("rtg"),wm=Ft("rtc");function _m(t,e=Se){Di("ec",t,e)}const Mh="components";function On(t,e){return Tm(Mh,t,!0,e)||t}const Em=Symbol.for("v-ndc");function Tm(t,e,n=!0,s=!1){const r=Pe||Se;if(r){const i=r.type;if(t===Mh){const a=Zm(i,!1);if(a&&(a===e||a===bt(e)||a===_i(bt(e))))return i}const o=Il(r[t]||i[t],e)||Il(r.appContext[t],e);return!o&&s?i:o}}function Il(t,e){return t&&(t[e]||t[bt(e)]||t[_i(bt(e))])}function Ph(t,e,n,s){let r;const i=n&&n[s];if($(t)||_e(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(le(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Im(t,e,n={},s,r){if(Pe.isCE||Pe.parent&&xs(Pe.parent)&&Pe.parent.isCE)return e!=="default"&&(n.name=e),qe("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),ut();const o=i&&Lh(i(n)),a=Kh(We,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Lh(t){return t.some(e=>Wh(e)?!(e.type===Wn||e.type===We&&!Lh(e.children)):!0)?t:null}const Ko=t=>t?Yh(t)?Ri(t)||t.proxy:Ko(t.parent):null,Ns=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ko(t.parent),$root:t=>Ko(t.root),$emit:t=>t.emit,$options:t=>Ga(t),$forceUpdate:t=>t.f||(t.f=()=>Wa(t.update)),$nextTick:t=>t.n||(t.n=Yg.bind(t.proxy)),$watch:t=>cm.bind(t)}),fo=(t,e)=>t!==re&&!t.__isScriptSetup&&Y(t,e),bm={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(fo(s,e))return o[e]=1,s[e];if(r!==re&&Y(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Y(l,e))return o[e]=3,i[e];if(n!==re&&Y(n,e))return o[e]=4,n[e];Wo&&(o[e]=0)}}const u=Ns[e];let f,p;if(u)return e==="$attrs"&&Ge(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==re&&Y(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Y(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return fo(r,e)?(r[e]=n,!0):s!==re&&Y(s,e)?(s[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==re&&Y(t,o)||fo(e,o)||(a=i[0])&&Y(a,o)||Y(s,o)||Y(Ns,o)||Y(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bl(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wo=!0;function Cm(t){const e=Ga(t),n=t.proxy,s=t.ctx;Wo=!1,e.beforeCreate&&Cl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:A,activated:I,deactivated:S,beforeDestroy:q,beforeUnmount:j,destroyed:H,unmounted:R,render:Ee,renderTracked:Qe,renderTriggered:At,errorCaptured:Ye,serverPrefetch:Dn,expose:en,inheritAttrs:ms,components:_r,directives:Er,filters:oo}=e;if(l&&Am(l,s,null),o)for(const he in o){const ne=o[he];K(ne)&&(s[he]=ne.bind(n))}if(r){const he=r.call(n,n);le(he)&&(t.data=ja(he))}if(Wo=!0,i)for(const he in i){const ne=i[he],tn=K(ne)?ne.bind(n,n):K(ne.get)?ne.get.bind(n,n):ct,Tr=!K(ne)&&K(ne.set)?ne.set.bind(n):ct,nn=ty({get:tn,set:Tr});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>nn.value,set:pt=>nn.value=pt})}if(a)for(const he in a)Fh(a[he],s,n,he);if(c){const he=K(c)?c.call(n):c;Reflect.ownKeys(he).forEach(ne=>{km(ne,he[ne])})}u&&Cl(u,t,"c");function Be(he,ne){$(ne)?ne.forEach(tn=>he(tn.bind(n))):ne&&he(ne.bind(n))}if(Be(fm,f),Be(dm,p),Be(pm,g),Be(gm,A),Be(lm,I),Be(um,S),Be(_m,Ye),Be(wm,Qe),Be(vm,At),Be(mm,j),Be(Oh,R),Be(ym,Dn),$(en))if(en.length){const he=t.exposed||(t.exposed={});en.forEach(ne=>{Object.defineProperty(he,ne,{get:()=>n[ne],set:tn=>n[ne]=tn})})}else t.exposed||(t.exposed={});Ee&&t.render===ct&&(t.render=Ee),ms!=null&&(t.inheritAttrs=ms),_r&&(t.components=_r),Er&&(t.directives=Er)}function Am(t,e,n=ct){$(t)&&(t=Go(t));for(const s in t){const r=t[s];let i;le(r)?"default"in r?i=qr(r.from||s,r.default,!0):i=qr(r.from||s):i=qr(r),He(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Cl(t,e,n){lt($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fh(t,e,n,s){const r=s.includes(".")?Nh(n,s):()=>n[s];if(_e(t)){const i=e[t];K(i)&&ho(r,i)}else if(K(t))ho(r,t.bind(n));else if(le(t))if($(t))t.forEach(i=>Fh(i,e,n,s));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&ho(r,i,t)}}function Ga(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Jr(c,l,o,!0)),Jr(c,e,o)),le(e)&&i.set(e,c),c}function Jr(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Jr(t,i,n,!0),r&&r.forEach(o=>Jr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Sm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Sm={data:Al,props:Sl,emits:Sl,methods:Is,computed:Is,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:Is,directives:Is,watch:xm,provide:Al,inject:Dm};function Al(t,e){return e?t?function(){return xe(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Dm(t,e){return Is(Go(t),Go(e))}function Go(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function je(t,e){return t?[...new Set([].concat(t,e))]:e}function Is(t,e){return t?xe(Object.create(null),t,e):e}function Sl(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:xe(Object.create(null),bl(t),bl(e??{})):e}function xm(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const s in e)n[s]=je(t[s],e[s]);return n}function Uh(){return{app:null,config:{isNativeTag:tg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nm=0;function Rm(t,e){return function(s,r=null){K(s)||(s=xe({},s)),r!=null&&!le(r)&&(r=null);const i=Uh(),o=new Set;let a=!1;const c=i.app={_uid:Nm++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ry,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(c,...u)):K(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=qe(s,r);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,Ri(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Zr=c;try{return l()}finally{Zr=null}}};return c}}let Zr=null;function km(t,e){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function qr(t,e,n=!1){const s=Se||Pe;if(s||Zr){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Zr._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}function Om(t,e,n,s=!1){const r={},i={};Yr(i,Ni,1),t.propsDefaults=Object.create(null),$h(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:jg(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Mm(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Z(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(bi(t.emitsOptions,p))continue;const g=e[p];if(c)if(Y(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const A=bt(p);r[A]=Qo(c,a,A,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{$h(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!Y(e,f)&&((u=is(f))===f||!Y(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Qo(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Y(e,f))&&(delete i[f],l=!0)}l&&kt(t,"set","$attrs")}function $h(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Vr(c))continue;const l=e[c];let u;r&&Y(r,u=bt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:bi(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Z(n),l=a||re;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Qo(r,c,f,l[f],t,!Y(l,f))}}return o}function Qo(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Y(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&K(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Qn(r),s=l[n]=c.call(null,e),pn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===is(n))&&(s=!0))}return s}function Bh(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!K(t)){const u=f=>{c=!0;const[p,g]=Bh(f,e,!0);xe(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return le(t)&&s.set(t,Un),Un;if($(i))for(let u=0;u<i.length;u++){const f=bt(i[u]);Dl(f)&&(o[f]=re)}else if(i)for(const u in i){const f=bt(u);if(Dl(f)){const p=i[u],g=o[f]=$(p)||K(p)?{type:p}:xe({},p);if(g){const A=Rl(Boolean,g.type),I=Rl(String,g.type);g[0]=A>-1,g[1]=I<0||A<I,(A>-1||Y(g,"default"))&&a.push(f)}}}const l=[o,a];return le(t)&&s.set(t,l),l}function Dl(t){return t[0]!=="$"}function xl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Nl(t,e){return xl(t)===xl(e)}function Rl(t,e){return $(e)?e.findIndex(n=>Nl(n,t)):K(e)&&Nl(e,t)?0:-1}const Vh=t=>t[0]==="_"||t==="$stable",Qa=t=>$(t)?t.map(yt):[yt(t)],Pm=(t,e,n)=>{if(e._n)return e;const s=Dh((...r)=>Qa(e(...r)),n);return s._c=!1,s},jh=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Vh(r))continue;const i=t[r];if(K(i))e[r]=Pm(r,i,s);else if(i!=null){const o=Qa(i);e[r]=()=>o}}},qh=(t,e)=>{const n=Qa(e);t.slots.default=()=>n},Lm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),Yr(e,"_",n)):jh(e,t.slots={})}else t.slots={},e&&qh(t,e);Yr(t.slots,Ni,1)},Fm=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(xe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,jh(e,r)),o=e}else e&&(qh(t,e),o={default:1});if(i)for(const a in r)!Vh(a)&&!(a in o)&&delete r[a]};function Yo(t,e,n,s,r=!1){if($(t)){t.forEach((p,g)=>Yo(p,e&&($(e)?e[g]:e),n,s,r));return}if(xs(s)&&!r)return;const i=s.shapeFlag&4?Ri(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===re?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(_e(l)?(u[l]=null,Y(f,l)&&(f[l]=null)):He(l)&&(l.value=null)),K(c))qt(c,a,12,[o,u]);else{const p=_e(c),g=He(c);if(p||g){const A=()=>{if(t.f){const I=p?Y(f,c)?f[c]:u[c]:c.value;r?$(I)&&Oa(I,i):$(I)?I.includes(i)||I.push(i):p?(u[c]=[i],Y(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Y(f,c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(A.id=-1,Ke(A,n)):A()}}}const Ke=am;function Um(t){return $m(t)}function $m(t,e){const n=Fo();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=ct,insertStaticContent:A}=t,I=(h,d,m,w=null,v=null,b=null,x=!1,T=null,C=!!d.dynamicChildren)=>{if(h===d)return;h&&!vs(h,d)&&(w=Ir(h),pt(h,v,b,!0),h=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:_,ref:P,shapeFlag:k}=d;switch(_){case xi:S(h,d,m,w);break;case Wn:q(h,d,m,w);break;case po:h==null&&j(d,m,w,x);break;case We:_r(h,d,m,w,v,b,x,T,C);break;default:k&1?Ee(h,d,m,w,v,b,x,T,C):k&6?Er(h,d,m,w,v,b,x,T,C):(k&64||k&128)&&_.process(h,d,m,w,v,b,x,T,C,xn)}P!=null&&v&&Yo(P,h&&h.ref,b,d||h,!d)},S=(h,d,m,w)=>{if(h==null)s(d.el=a(d.children),m,w);else{const v=d.el=h.el;d.children!==h.children&&l(v,d.children)}},q=(h,d,m,w)=>{h==null?s(d.el=c(d.children||""),m,w):d.el=h.el},j=(h,d,m,w)=>{[h.el,h.anchor]=A(h.children,d,m,w,h.el,h.anchor)},H=({el:h,anchor:d},m,w)=>{let v;for(;h&&h!==d;)v=p(h),s(h,m,w),h=v;s(d,m,w)},R=({el:h,anchor:d})=>{let m;for(;h&&h!==d;)m=p(h),r(h),h=m;r(d)},Ee=(h,d,m,w,v,b,x,T,C)=>{x=x||d.type==="svg",h==null?Qe(d,m,w,v,b,x,T,C):Dn(h,d,v,b,x,T,C)},Qe=(h,d,m,w,v,b,x,T)=>{let C,_;const{type:P,props:k,shapeFlag:L,transition:B,dirs:W}=h;if(C=h.el=o(h.type,b,k&&k.is,k),L&8?u(C,h.children):L&16&&Ye(h.children,C,null,w,v,b&&P!=="foreignObject",x,T),W&&sn(h,null,w,"created"),At(C,h,h.scopeId,x,w),k){for(const te in k)te!=="value"&&!Vr(te)&&i(C,te,null,k[te],b,h.children,w,v,St);"value"in k&&i(C,"value",null,k.value),(_=k.onVnodeBeforeMount)&&mt(_,w,h)}W&&sn(h,null,w,"beforeMount");const se=(!v||v&&!v.pendingBranch)&&B&&!B.persisted;se&&B.beforeEnter(C),s(C,d,m),((_=k&&k.onVnodeMounted)||se||W)&&Ke(()=>{_&&mt(_,w,h),se&&B.enter(C),W&&sn(h,null,w,"mounted")},v)},At=(h,d,m,w,v)=>{if(m&&g(h,m),w)for(let b=0;b<w.length;b++)g(h,w[b]);if(v){let b=v.subTree;if(d===b){const x=v.vnode;At(h,x,x.scopeId,x.slotScopeIds,v.parent)}}},Ye=(h,d,m,w,v,b,x,T,C=0)=>{for(let _=C;_<h.length;_++){const P=h[_]=T?$t(h[_]):yt(h[_]);I(null,P,d,m,w,v,b,x,T)}},Dn=(h,d,m,w,v,b,x)=>{const T=d.el=h.el;let{patchFlag:C,dynamicChildren:_,dirs:P}=d;C|=h.patchFlag&16;const k=h.props||re,L=d.props||re;let B;m&&rn(m,!1),(B=L.onVnodeBeforeUpdate)&&mt(B,m,d,h),P&&sn(d,h,m,"beforeUpdate"),m&&rn(m,!0);const W=v&&d.type!=="foreignObject";if(_?en(h.dynamicChildren,_,T,m,w,W,b):x||ne(h,d,T,null,m,w,W,b,!1),C>0){if(C&16)ms(T,d,k,L,m,w,v);else if(C&2&&k.class!==L.class&&i(T,"class",null,L.class,v),C&4&&i(T,"style",k.style,L.style,v),C&8){const se=d.dynamicProps;for(let te=0;te<se.length;te++){const ge=se[te],st=k[ge],Nn=L[ge];(Nn!==st||ge==="value")&&i(T,ge,st,Nn,v,h.children,m,w,St)}}C&1&&h.children!==d.children&&u(T,d.children)}else!x&&_==null&&ms(T,d,k,L,m,w,v);((B=L.onVnodeUpdated)||P)&&Ke(()=>{B&&mt(B,m,d,h),P&&sn(d,h,m,"updated")},w)},en=(h,d,m,w,v,b,x)=>{for(let T=0;T<d.length;T++){const C=h[T],_=d[T],P=C.el&&(C.type===We||!vs(C,_)||C.shapeFlag&70)?f(C.el):m;I(C,_,P,null,w,v,b,x,!0)}},ms=(h,d,m,w,v,b,x)=>{if(m!==w){if(m!==re)for(const T in m)!Vr(T)&&!(T in w)&&i(h,T,m[T],null,x,d.children,v,b,St);for(const T in w){if(Vr(T))continue;const C=w[T],_=m[T];C!==_&&T!=="value"&&i(h,T,_,C,x,d.children,v,b,St)}"value"in w&&i(h,"value",m.value,w.value)}},_r=(h,d,m,w,v,b,x,T,C)=>{const _=d.el=h?h.el:a(""),P=d.anchor=h?h.anchor:a("");let{patchFlag:k,dynamicChildren:L,slotScopeIds:B}=d;B&&(T=T?T.concat(B):B),h==null?(s(_,m,w),s(P,m,w),Ye(d.children,m,P,v,b,x,T,C)):k>0&&k&64&&L&&h.dynamicChildren?(en(h.dynamicChildren,L,m,v,b,x,T),(d.key!=null||v&&d===v.subTree)&&Hh(h,d,!0)):ne(h,d,m,P,v,b,x,T,C)},Er=(h,d,m,w,v,b,x,T,C)=>{d.slotScopeIds=T,h==null?d.shapeFlag&512?v.ctx.activate(d,m,w,x,C):oo(d,m,w,v,b,x,C):al(h,d,C)},oo=(h,d,m,w,v,b,x)=>{const T=h.component=Gm(h,w,v);if(Rh(h)&&(T.ctx.renderer=xn),Qm(T),T.asyncDep){if(v&&v.registerDep(T,Be),!h.el){const C=T.subTree=qe(Wn);q(null,C,d,m)}return}Be(T,h,d,m,v,b,x)},al=(h,d,m)=>{const w=d.component=h.component;if(rm(h,d,m))if(w.asyncDep&&!w.asyncResolved){he(w,d,m);return}else w.next=d,Jg(w.update),w.update();else d.el=h.el,w.vnode=d},Be=(h,d,m,w,v,b,x)=>{const T=()=>{if(h.isMounted){let{next:P,bu:k,u:L,parent:B,vnode:W}=h,se=P,te;rn(h,!1),P?(P.el=W.el,he(h,P,x)):P=W,k&&jr(k),(te=P.props&&P.props.onVnodeBeforeUpdate)&&mt(te,B,P,W),rn(h,!0);const ge=uo(h),st=h.subTree;h.subTree=ge,I(st,ge,f(st.el),Ir(st),h,v,b),P.el=ge.el,se===null&&im(h,ge.el),L&&Ke(L,v),(te=P.props&&P.props.onVnodeUpdated)&&Ke(()=>mt(te,B,P,W),v)}else{let P;const{el:k,props:L}=d,{bm:B,m:W,parent:se}=h,te=xs(d);if(rn(h,!1),B&&jr(B),!te&&(P=L&&L.onVnodeBeforeMount)&&mt(P,se,d),rn(h,!0),k&&co){const ge=()=>{h.subTree=uo(h),co(k,h.subTree,h,v,null)};te?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ge()):ge()}else{const ge=h.subTree=uo(h);I(null,ge,m,w,h,v,b),d.el=ge.el}if(W&&Ke(W,v),!te&&(P=L&&L.onVnodeMounted)){const ge=d;Ke(()=>mt(P,se,ge),v)}(d.shapeFlag&256||se&&xs(se.vnode)&&se.vnode.shapeFlag&256)&&h.a&&Ke(h.a,v),h.isMounted=!0,d=m=w=null}},C=h.effect=new Ua(T,()=>Wa(_),h.scope),_=h.update=()=>C.run();_.id=h.uid,rn(h,!0),_()},he=(h,d,m)=>{d.component=h;const w=h.vnode.props;h.vnode=d,h.next=null,Mm(h,d.props,w,m),Fm(h,d.children,m),os(),El(),as()},ne=(h,d,m,w,v,b,x,T,C=!1)=>{const _=h&&h.children,P=h?h.shapeFlag:0,k=d.children,{patchFlag:L,shapeFlag:B}=d;if(L>0){if(L&128){Tr(_,k,m,w,v,b,x,T,C);return}else if(L&256){tn(_,k,m,w,v,b,x,T,C);return}}B&8?(P&16&&St(_,v,b),k!==_&&u(m,k)):P&16?B&16?Tr(_,k,m,w,v,b,x,T,C):St(_,v,b,!0):(P&8&&u(m,""),B&16&&Ye(k,m,w,v,b,x,T,C))},tn=(h,d,m,w,v,b,x,T,C)=>{h=h||Un,d=d||Un;const _=h.length,P=d.length,k=Math.min(_,P);let L;for(L=0;L<k;L++){const B=d[L]=C?$t(d[L]):yt(d[L]);I(h[L],B,m,null,v,b,x,T,C)}_>P?St(h,v,b,!0,!1,k):Ye(d,m,w,v,b,x,T,C,k)},Tr=(h,d,m,w,v,b,x,T,C)=>{let _=0;const P=d.length;let k=h.length-1,L=P-1;for(;_<=k&&_<=L;){const B=h[_],W=d[_]=C?$t(d[_]):yt(d[_]);if(vs(B,W))I(B,W,m,null,v,b,x,T,C);else break;_++}for(;_<=k&&_<=L;){const B=h[k],W=d[L]=C?$t(d[L]):yt(d[L]);if(vs(B,W))I(B,W,m,null,v,b,x,T,C);else break;k--,L--}if(_>k){if(_<=L){const B=L+1,W=B<P?d[B].el:w;for(;_<=L;)I(null,d[_]=C?$t(d[_]):yt(d[_]),m,W,v,b,x,T,C),_++}}else if(_>L)for(;_<=k;)pt(h[_],v,b,!0),_++;else{const B=_,W=_,se=new Map;for(_=W;_<=L;_++){const Xe=d[_]=C?$t(d[_]):yt(d[_]);Xe.key!=null&&se.set(Xe.key,_)}let te,ge=0;const st=L-W+1;let Nn=!1,ul=0;const ys=new Array(st);for(_=0;_<st;_++)ys[_]=0;for(_=B;_<=k;_++){const Xe=h[_];if(ge>=st){pt(Xe,v,b,!0);continue}let gt;if(Xe.key!=null)gt=se.get(Xe.key);else for(te=W;te<=L;te++)if(ys[te-W]===0&&vs(Xe,d[te])){gt=te;break}gt===void 0?pt(Xe,v,b,!0):(ys[gt-W]=_+1,gt>=ul?ul=gt:Nn=!0,I(Xe,d[gt],m,null,v,b,x,T,C),ge++)}const hl=Nn?Bm(ys):Un;for(te=hl.length-1,_=st-1;_>=0;_--){const Xe=W+_,gt=d[Xe],fl=Xe+1<P?d[Xe+1].el:w;ys[_]===0?I(null,gt,m,fl,v,b,x,T,C):Nn&&(te<0||_!==hl[te]?nn(gt,m,fl,2):te--)}}},nn=(h,d,m,w,v=null)=>{const{el:b,type:x,transition:T,children:C,shapeFlag:_}=h;if(_&6){nn(h.component.subTree,d,m,w);return}if(_&128){h.suspense.move(d,m,w);return}if(_&64){x.move(h,d,m,xn);return}if(x===We){s(b,d,m);for(let k=0;k<C.length;k++)nn(C[k],d,m,w);s(h.anchor,d,m);return}if(x===po){H(h,d,m);return}if(w!==2&&_&1&&T)if(w===0)T.beforeEnter(b),s(b,d,m),Ke(()=>T.enter(b),v);else{const{leave:k,delayLeave:L,afterLeave:B}=T,W=()=>s(b,d,m),se=()=>{k(b,()=>{W(),B&&B()})};L?L(b,W,se):se()}else s(b,d,m)},pt=(h,d,m,w=!1,v=!1)=>{const{type:b,props:x,ref:T,children:C,dynamicChildren:_,shapeFlag:P,patchFlag:k,dirs:L}=h;if(T!=null&&Yo(T,null,m,h,!0),P&256){d.ctx.deactivate(h);return}const B=P&1&&L,W=!xs(h);let se;if(W&&(se=x&&x.onVnodeBeforeUnmount)&&mt(se,d,h),P&6)eg(h.component,m,w);else{if(P&128){h.suspense.unmount(m,w);return}B&&sn(h,null,d,"beforeUnmount"),P&64?h.type.remove(h,d,m,v,xn,w):_&&(b!==We||k>0&&k&64)?St(_,d,m,!1,!0):(b===We&&k&384||!v&&P&16)&&St(C,d,m),w&&cl(h)}(W&&(se=x&&x.onVnodeUnmounted)||B)&&Ke(()=>{se&&mt(se,d,h),B&&sn(h,null,d,"unmounted")},m)},cl=h=>{const{type:d,el:m,anchor:w,transition:v}=h;if(d===We){Zp(m,w);return}if(d===po){R(h);return}const b=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:x,delayLeave:T}=v,C=()=>x(m,b);T?T(h.el,b,C):C()}else b()},Zp=(h,d)=>{let m;for(;h!==d;)m=p(h),r(h),h=m;r(d)},eg=(h,d,m)=>{const{bum:w,scope:v,update:b,subTree:x,um:T}=h;w&&jr(w),v.stop(),b&&(b.active=!1,pt(x,h,d,m)),T&&Ke(T,d),Ke(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},St=(h,d,m,w=!1,v=!1,b=0)=>{for(let x=b;x<h.length;x++)pt(h[x],d,m,w,v)},Ir=h=>h.shapeFlag&6?Ir(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),ll=(h,d,m)=>{h==null?d._vnode&&pt(d._vnode,null,null,!0):I(d._vnode||null,h,d,null,null,null,m),El(),Ch(),d._vnode=h},xn={p:I,um:pt,m:nn,r:cl,mt:oo,mc:Ye,pc:ne,pbc:en,n:Ir,o:t};let ao,co;return e&&([ao,co]=e(xn)),{render:ll,hydrate:ao,createApp:Rm(ll,ao)}}function rn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Hh(t,e,n=!1){const s=t.children,r=e.children;if($(s)&&$(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=$t(r[i]),a.el=o.el),n||Hh(o,a)),a.type===xi&&(a.el=o.el)}}function Bm(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Vm=t=>t.__isTeleport,We=Symbol.for("v-fgt"),xi=Symbol.for("v-txt"),Wn=Symbol.for("v-cmt"),po=Symbol.for("v-stc"),Rs=[];let ot=null;function ut(t=!1){Rs.push(ot=t?null:[])}function jm(){Rs.pop(),ot=Rs[Rs.length-1]||null}let Vs=1;function kl(t){Vs+=t}function zh(t){return t.dynamicChildren=Vs>0?ot||Un:null,jm(),Vs>0&&ot&&ot.push(t),t}function Nt(t,e,n,s,r,i){return zh(ce(t,e,n,s,r,i,!0))}function Kh(t,e,n,s,r){return zh(qe(t,e,n,s,r,!0))}function Wh(t){return t?t.__v_isVNode===!0:!1}function vs(t,e){return t.type===e.type&&t.key===e.key}const Ni="__vInternal",Gh=({key:t})=>t??null,Hr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||He(t)||K(t)?{i:Pe,r:t,k:e,f:!!n}:t:null);function ce(t,e=null,n=null,s=0,r=null,i=t===We?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gh(e),ref:e&&Hr(e),scopeId:Ci,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pe};return a?(Ya(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),Vs>0&&!o&&ot&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ot.push(c),c}const qe=qm;function qm(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Em)&&(t=Wn),Wh(t)){const a=Gn(t,e,!0);return n&&Ya(a,n),Vs>0&&!i&&ot&&(a.shapeFlag&6?ot[ot.indexOf(t)]=a:ot.push(a)),a.patchFlag|=-2,a}if(ey(t)&&(t=t.__vccOpts),e){e=Hm(e);let{class:a,style:c}=e;a&&!_e(a)&&(e.class=Ei(a)),le(c)&&(_h(c)&&!$(c)&&(c=xe({},c)),e.style=La(c))}const o=_e(t)?1:om(t)?128:Vm(t)?64:le(t)?4:K(t)?2:0;return ce(t,e,n,s,r,o,i,!0)}function Hm(t){return t?_h(t)||Ni in t?xe({},t):t:null}function Gn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?zm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Gh(a),ref:e&&e.ref?n&&r?$(r)?r.concat(Hr(e)):[r,Hr(e)]:Hr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gn(t.ssContent),ssFallback:t.ssFallback&&Gn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Qh(t=" ",e=0){return qe(xi,null,t,e)}function yt(t){return t==null||typeof t=="boolean"?qe(Wn):$(t)?qe(We,null,t.slice()):typeof t=="object"?$t(t):qe(xi,null,String(t))}function $t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gn(t)}function Ya(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ya(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ni in e)?e._ctx=Pe:r===3&&Pe&&(Pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:Pe},n=32):(e=String(e),s&64?(n=16,e=[Qh(e)]):n=8);t.children=e,t.shapeFlag|=n}function zm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ei([e.class,s.class]));else if(r==="style")e.style=La([e.style,s.style]);else if(yi(r)){const i=e[r],o=s[r];o&&i!==o&&!($(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function mt(t,e,n,s=null){lt(t,e,7,[n,s])}const Km=Uh();let Wm=0;function Gm(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Km,i={uid:Wm++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new dg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bh(s,r),emitsOptions:Sh(s,r),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=tm.bind(null,i),t.ce&&t.ce(i),i}let Se=null,Xa,Rn,Ol="__VUE_INSTANCE_SETTERS__";(Rn=Fo()[Ol])||(Rn=Fo()[Ol]=[]),Rn.push(t=>Se=t),Xa=t=>{Rn.length>1?Rn.forEach(e=>e(t)):Rn[0](t)};const Qn=t=>{Xa(t),t.scope.on()},pn=()=>{Se&&Se.scope.off(),Xa(null)};function Yh(t){return t.vnode.shapeFlag&4}let js=!1;function Qm(t,e=!1){js=e;const{props:n,children:s}=t.vnode,r=Yh(t);Om(t,n,r,e),Lm(t,s);const i=r?Ym(t,e):void 0;return js=!1,i}function Ym(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Eh(new Proxy(t.ctx,bm));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Jm(t):null;Qn(t),os();const i=qt(s,t,0,[t.props,r]);if(as(),pn(),rh(i)){if(i.then(pn,pn),e)return i.then(o=>{Ml(t,o,e)}).catch(o=>{Ii(o,t,0)});t.asyncDep=i}else Ml(t,i,e)}else Xh(t,e)}function Ml(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Th(e)),Xh(t,n)}let Pl;function Xh(t,e,n){const s=t.type;if(!t.render){if(!e&&Pl&&!s.render){const r=s.template||Ga(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=xe(xe({isCustomElement:i,delimiters:a},o),c);s.render=Pl(r,l)}}t.render=s.render||ct}Qn(t),os(),Cm(t),as(),pn()}function Xm(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ge(t,"get","$attrs"),e[n]}}))}function Jm(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Xm(t)},slots:t.slots,emit:t.emit,expose:e}}function Ri(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Th(Eh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ns)return Ns[n](t)},has(e,n){return n in e||n in Ns}}))}function Zm(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function ey(t){return K(t)&&"__vccOpts"in t}const ty=(t,e)=>Gg(t,e,js),ny=Symbol.for("v-scx"),sy=()=>qr(ny),ry="3.3.4",iy="http://www.w3.org/2000/svg",cn=typeof document<"u"?document:null,Ll=cn&&cn.createElement("template"),oy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?cn.createElementNS(iy,t):cn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>cn.createTextNode(t),createComment:t=>cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ll.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ll.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ay(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function cy(t,e,n){const s=t.style,r=_e(n);if(n&&!r){if(e&&!_e(e))for(const i in e)n[i]==null&&Xo(s,i,"");for(const i in n)Xo(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Fl=/\s*!important$/;function Xo(t,e,n){if($(n))n.forEach(s=>Xo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ly(t,e);Fl.test(n)?t.setProperty(is(s),n.replace(Fl,""),"important"):t[s]=n}}const Ul=["Webkit","Moz","ms"],go={};function ly(t,e){const n=go[e];if(n)return n;let s=bt(e);if(s!=="filter"&&s in t)return go[e]=s;s=_i(s);for(let r=0;r<Ul.length;r++){const i=Ul[r]+s;if(i in t)return go[e]=i}return e}const $l="http://www.w3.org/1999/xlink";function uy(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($l,e.slice(6,e.length)):t.setAttributeNS($l,e,n);else{const i=fg(e);n==null||i&&!ah(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function hy(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ah(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Mn(t,e,n,s){t.addEventListener(e,n,s)}function fy(t,e,n,s){t.removeEventListener(e,n,s)}function dy(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=py(e);if(s){const l=i[e]=yy(s,r);Mn(t,a,l,c)}else o&&(fy(t,a,o,c),i[e]=void 0)}}const Bl=/(?:Once|Passive|Capture)$/;function py(t){let e;if(Bl.test(t)){e={};let s;for(;s=t.match(Bl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):is(t.slice(2)),e]}let mo=0;const gy=Promise.resolve(),my=()=>mo||(gy.then(()=>mo=0),mo=Date.now());function yy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;lt(vy(s,n.value),e,5,[s])};return n.value=t,n.attached=my(),n}function vy(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Vl=/^on[a-z]/,wy=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?ay(t,s,r):e==="style"?cy(t,n,s):yi(e)?ka(e)||dy(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_y(t,e,s,r))?hy(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),uy(t,e,s,r))};function _y(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Vl.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Vl.test(e)&&_e(n)?!1:e in t}const jl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>jr(e,n):e};function Ey(t){t.target.composing=!0}function ql(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jo={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=jl(r);const i=s||r.props&&r.props.type==="number";Mn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Lo(a)),t._assign(a)}),n&&Mn(t,"change",()=>{t.value=t.value.trim()}),e||(Mn(t,"compositionstart",Ey),Mn(t,"compositionend",ql),Mn(t,"change",ql))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=jl(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Lo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ty=["ctrl","shift","alt","meta"],Iy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ty.some(n=>t[`${n}Key`]&&!e.includes(n))},Jh=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Iy[e[r]];if(i&&i(n,e))return}return t(n,...s)},by=xe({patchProp:wy},oy);let Hl;function Cy(){return Hl||(Hl=Um(by))}const Ay=(...t)=>{const e=Cy().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Sy(s);if(!r)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Sy(t){return _e(t)?document.querySelector(t):t}const cs=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Dy={props:["label","type"]};function xy(t,e,n,s,r,i){return ut(),Nt("button",{class:Ei({reset:n.type==="reset"})},Uo(n.label),3)}const Zh=cs(Dy,[["render",xy]]);const Ny={props:["src","name","winningYears"],computed:{sortedYears(){return this.winningYears.sort((t,e)=>Number.parseInt(t)-Number.parseInt(e))}}},Ry=t=>(Ai("data-v-fd274685"),t=t(),Si(),t),ky={class:"app-result"},Oy=["src"],My=Ry(()=>ce("div",null,"Winning Years:",-1));function Py(t,e,n,s,r,i){return ut(),Nt("div",ky,[ce("img",{src:n.src,alt:""},null,8,Oy),ce("h2",null,Uo(n.name),1),My,(ut(!0),Nt(We,null,Ph(i.sortedYears,(o,a)=>(ut(),Nt("div",{class:"year",key:a},Uo(o),1))),128))])}const Ly=cs(Ny,[["render",Py],["__scopeId","data-v-fd274685"]]);const Fy={emits:["update"],data(){return{teamName:""}},methods:{updateTeamName(){this.$emit("update",this.teamName)}}},Uy=t=>(Ai("data-v-5bc2ae5d"),t=t(),Si(),t),$y=Uy(()=>ce("i",{class:"fa-solid fa-magnifying-glass"},null,-1));function By(t,e,n,s,r,i){return ut(),Nt("form",{onSubmit:e[2]||(e[2]=Jh(()=>{},["prevent"]))},[zo(ce("input",{type:"text",placeholder:"Search...",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>r.teamName=o),onInput:e[1]||(e[1]=(...o)=>i.updateTeamName&&i.updateTeamName(...o))},null,544),[[Jo,r.teamName]]),$y],32)}const Vy=cs(Fy,[["render",By],["__scopeId","data-v-5bc2ae5d"]]);/**
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
 */const ef=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},jy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),s.push(n[u],n[f],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ef(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw new qy;const p=i<<2|a>>4;if(s.push(p),l!==64){const g=a<<4&240|l>>2;if(s.push(g),f!==64){const A=l<<6&192|f;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hy=function(t){const e=ef(t);return tf.encodeByteArray(e,!0)},ei=function(t){return Hy(t).replace(/\./g,"")},zy=function(t){try{return tf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ky(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wy=()=>Ky().__FIREBASE_DEFAULTS__,Gy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zy(t[1]);return e&&JSON.parse(e)},Ja=()=>{try{return Wy()||Gy()||Qy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yy=t=>{var e,n;return(n=(e=Ja())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nf=t=>{const e=Yy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},sf=()=>{var t;return(t=Ja())===null||t===void 0?void 0:t.config};/**
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
 */class Xy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function rf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ei(JSON.stringify(n)),ei(JSON.stringify(o)),a].join(".")}function Jy(){var t;const e=(t=Ja())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zy(){try{return typeof indexedDB=="object"}catch{return!1}}function ev(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const tv="FirebaseError";class In extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=tv,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,of.prototype.create)}}class of{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?nv(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new In(r,a,s)}}function nv(t,e){return t.replace(sv,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const sv=/\{\$([^}]+)}/g;function Zo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(zl(i)&&zl(o)){if(!Zo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function zl(t){return t!==null&&typeof t=="object"}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const on="[DEFAULT]";/**
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
 */class rv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xy;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ov(e))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=on){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=on){return this.instances.has(e)}getOptions(e=on){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:iv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=on){return this.component?this.component.multipleInstances?e:on:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iv(t){return t===on?void 0:t}function ov(t){return t.instantiationMode==="EAGER"}/**
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
 */class av{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const cv={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},lv=J.INFO,uv={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},hv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=uv[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class af{constructor(e){this.name=e,this._logLevel=lv,this._logHandler=hv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const fv=(t,e)=>e.some(n=>t instanceof n);let Kl,Wl;function dv(){return Kl||(Kl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pv(){return Wl||(Wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cf=new WeakMap,ea=new WeakMap,lf=new WeakMap,yo=new WeakMap,Za=new WeakMap;function gv(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ht(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cf.set(n,t)}).catch(()=>{}),Za.set(e,t),e}function mv(t){if(ea.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ea.set(t,e)}let ta={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ea.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yv(t){ta=t(ta)}function vv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(vo(this),e,...n);return lf.set(s,e.sort?e.sort():[e]),Ht(s)}:pv().includes(t)?function(...e){return t.apply(vo(this),e),Ht(cf.get(this))}:function(...e){return Ht(t.apply(vo(this),e))}}function wv(t){return typeof t=="function"?vv(t):(t instanceof IDBTransaction&&mv(t),fv(t,dv())?new Proxy(t,ta):t)}function Ht(t){if(t instanceof IDBRequest)return gv(t);if(yo.has(t))return yo.get(t);const e=wv(t);return e!==t&&(yo.set(t,e),Za.set(e,t)),e}const vo=t=>Za.get(t);function _v(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ht(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ht(o.result),c.oldVersion,c.newVersion,Ht(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ev=["get","getKey","getAll","getAllKeys","count"],Tv=["put","add","delete","clear"],wo=new Map;function Gl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wo.get(e))return wo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Tv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ev.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return wo.set(e,i),i}yv(t=>({...t,get:(e,n,s)=>Gl(e,n)||t.get(e,n,s),has:(e,n)=>!!Gl(e,n)||t.has(e,n)}));/**
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
 */class Iv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function bv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const na="@firebase/app",Ql="0.9.12";/**
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
 */const vn=new af("@firebase/app"),Cv="@firebase/app-compat",Av="@firebase/analytics-compat",Sv="@firebase/analytics",Dv="@firebase/app-check-compat",xv="@firebase/app-check",Nv="@firebase/auth",Rv="@firebase/auth-compat",kv="@firebase/database",Ov="@firebase/database-compat",Mv="@firebase/functions",Pv="@firebase/functions-compat",Lv="@firebase/installations",Fv="@firebase/installations-compat",Uv="@firebase/messaging",$v="@firebase/messaging-compat",Bv="@firebase/performance",Vv="@firebase/performance-compat",jv="@firebase/remote-config",qv="@firebase/remote-config-compat",Hv="@firebase/storage",zv="@firebase/storage-compat",Kv="@firebase/firestore",Wv="@firebase/firestore-compat",Gv="firebase",Qv="9.22.2";/**
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
 */const sa="[DEFAULT]",Yv={[na]:"fire-core",[Cv]:"fire-core-compat",[Sv]:"fire-analytics",[Av]:"fire-analytics-compat",[xv]:"fire-app-check",[Dv]:"fire-app-check-compat",[Nv]:"fire-auth",[Rv]:"fire-auth-compat",[kv]:"fire-rtdb",[Ov]:"fire-rtdb-compat",[Mv]:"fire-fn",[Pv]:"fire-fn-compat",[Lv]:"fire-iid",[Fv]:"fire-iid-compat",[Uv]:"fire-fcm",[$v]:"fire-fcm-compat",[Bv]:"fire-perf",[Vv]:"fire-perf-compat",[jv]:"fire-rc",[qv]:"fire-rc-compat",[Hv]:"fire-gcs",[zv]:"fire-gcs-compat",[Kv]:"fire-fst",[Wv]:"fire-fst-compat","fire-js":"fire-js",[Gv]:"fire-js-all"};/**
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
 */const ti=new Map,ra=new Map;function Xv(t,e){try{t.container.addComponent(e)}catch(n){vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qs(t){const e=t.name;if(ra.has(e))return vn.debug(`There were multiple attempts to register component ${e}.`),!1;ra.set(e,t);for(const n of ti.values())Xv(n,t);return!0}function uf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Jv={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zt=new of("app","Firebase",Jv);/**
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
 */class Zv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const hf=Qv;function ff(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:sa,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw zt.create("bad-app-name",{appName:String(r)});if(n||(n=sf()),!n)throw zt.create("no-options");const i=ti.get(r);if(i){if(Zo(n,i.options)&&Zo(s,i.config))return i;throw zt.create("duplicate-app",{appName:r})}const o=new av(r);for(const c of ra.values())o.addComponent(c);const a=new Zv(n,s,o);return ti.set(r,a),a}function df(t=sa){const e=ti.get(t);if(!e&&t===sa&&sf())return ff();if(!e)throw zt.create("no-app",{appName:t});return e}function Kt(t,e,n){var s;let r=(s=Yv[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vn.warn(a.join(" "));return}qs(new Yn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ew="firebase-heartbeat-database",tw=1,Hs="firebase-heartbeat-store";let _o=null;function pf(){return _o||(_o=_v(ew,tw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hs)}}}).catch(t=>{throw zt.create("idb-open",{originalErrorMessage:t.message})})),_o}async function nw(t){try{return await(await pf()).transaction(Hs).objectStore(Hs).get(gf(t))}catch(e){if(e instanceof In)vn.warn(e.message);else{const n=zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vn.warn(n.message)}}}async function Yl(t,e){try{const s=(await pf()).transaction(Hs,"readwrite");await s.objectStore(Hs).put(e,gf(t)),await s.done}catch(n){if(n instanceof In)vn.warn(n.message);else{const s=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vn.warn(s.message)}}}function gf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sw=1024,rw=30*24*60*60*1e3;class iw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=rw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xl(),{heartbeatsToSend:n,unsentEntries:s}=ow(this._heartbeatsCache.heartbeats),r=ei(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Xl(){return new Date().toISOString().substring(0,10)}function ow(t,e=sw){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Jl(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Jl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class aw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zy()?ev().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jl(t){return ei(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cw(t){qs(new Yn("platform-logger",e=>new Iv(e),"PRIVATE")),qs(new Yn("heartbeat",e=>new iw(e),"PRIVATE")),Kt(na,Ql,t),Kt(na,Ql,"esm2017"),Kt("fire-js","")}cw("");var lw="firebase",uw="9.22.2";/**
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
 */Kt(lw,uw,"app");var hw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,ec=ec||{},U=hw||self;function ki(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ir(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function fw(t){return Object.prototype.hasOwnProperty.call(t,Eo)&&t[Eo]||(t[Eo]=++dw)}var Eo="closure_uid_"+(1e9*Math.random()>>>0),dw=0;function pw(t,e,n){return t.call.apply(t.bind,arguments)}function gw(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=pw:Le=gw,Le.apply(null,arguments)}function Nr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function be(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Jt(){this.s=this.s,this.o=this.o}var mw=0;Jt.prototype.s=!1;Jt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),mw!=0)&&fw(this)};Jt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function tc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Zl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ki(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var yw=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",()=>{},e),U.removeEventListener("test",()=>{},e)}catch{}return t}();function zs(t){return/^[\s\xa0]*$/.test(t)}function Oi(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function wt(t){return Oi().indexOf(t)!=-1}function nc(t){return nc[" "](t),t}nc[" "]=function(){};function vw(t,e){var n=u0;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ww=wt("Opera"),Xn=wt("Trident")||wt("MSIE"),yf=wt("Edge"),ia=yf||Xn,vf=wt("Gecko")&&!(Oi().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge"))&&!(wt("Trident")||wt("MSIE"))&&!wt("Edge"),_w=Oi().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge");function wf(){var t=U.document;return t?t.documentMode:void 0}var oa;e:{var To="",Io=function(){var t=Oi();if(vf)return/rv:([^\);]+)(\)|;)/.exec(t);if(yf)return/Edge\/([\d\.]+)/.exec(t);if(Xn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_w)return/WebKit\/(\S+)/.exec(t);if(ww)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Io&&(To=Io?Io[1]:""),Xn){var bo=wf();if(bo!=null&&bo>parseFloat(To)){oa=String(bo);break e}}oa=To}var aa;if(U.document&&Xn){var eu=wf();aa=eu||parseInt(oa,10)||void 0}else aa=void 0;var Ew=aa;function Ks(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vf){e:{try{nc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Tw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ks.$.h.call(this)}}be(Ks,Fe);var Tw={2:"touch",3:"pen",4:"mouse"};Ks.prototype.h=function(){Ks.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var or="closure_listenable_"+(1e6*Math.random()|0),Iw=0;function bw(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++Iw,this.fa=this.ia=!1}function Mi(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function sc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Cw(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function _f(t){const e={};for(const n in t)e[n]=t[n];return e}const tu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ef(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<tu.length;i++)n=tu[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Pi(t){this.src=t,this.g={},this.h=0}Pi.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=la(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new bw(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function ca(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=mf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Mi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function la(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var rc="closure_lm_"+(1e6*Math.random()|0),Co={};function Tf(t,e,n,s,r){if(s&&s.once)return bf(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Tf(t,e[i],n,s,r);return null}return n=ac(n),t&&t[or]?t.O(e,n,ir(s)?!!s.capture:!!s,r):If(t,e,n,!1,s,r)}function If(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ir(r)?!!r.capture:!!r,a=oc(t);if(a||(t[rc]=a=new Pi(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Aw(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)yw||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Af(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Aw(){function t(n){return e.call(t.src,t.listener,n)}const e=Sw;return t}function bf(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)bf(t,e[i],n,s,r);return null}return n=ac(n),t&&t[or]?t.P(e,n,ir(s)?!!s.capture:!!s,r):If(t,e,n,!0,s,r)}function Cf(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Cf(t,e[i],n,s,r);else s=ir(s)?!!s.capture:!!s,n=ac(n),t&&t[or]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=la(i,n,s,r),-1<n&&(Mi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=oc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=la(e,n,s,r)),(n=-1<t?e[t]:null)&&ic(n))}function ic(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[or])ca(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Af(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=oc(e))?(ca(n,t),n.h==0&&(n.src=null,e[rc]=null)):Mi(t)}}}function Af(t){return t in Co?Co[t]:Co[t]="on"+t}function Sw(t,e){if(t.fa)t=!0;else{e=new Ks(e,this);var n=t.listener,s=t.la||t.src;t.ia&&ic(t),t=n.call(s,e)}return t}function oc(t){return t=t[rc],t instanceof Pi?t:null}var Ao="__closure_events_fn_"+(1e9*Math.random()>>>0);function ac(t){return typeof t=="function"?t:(t[Ao]||(t[Ao]=function(e){return t.handleEvent(e)}),t[Ao])}function Ie(){Jt.call(this),this.i=new Pi(this),this.S=this,this.J=null}be(Ie,Jt);Ie.prototype[or]=!0;Ie.prototype.removeEventListener=function(t,e,n,s){Cf(this,t,e,n,s)};function De(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var r=e;e=new Fe(s,t),Ef(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Rr(o,s,!0,e)&&r}if(o=e.g=t,r=Rr(o,s,!0,e)&&r,r=Rr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Rr(o,s,!1,e)&&r}Ie.prototype.N=function(){if(Ie.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Mi(n[s]);delete t.g[e],t.h--}}this.J=null};Ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ie.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Rr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ca(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var cc=U.JSON.stringify;class Dw{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function xw(){var t=lc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nw{constructor(){this.h=this.g=null}add(e,n){const s=Sf.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Sf=new Dw(()=>new Rw,t=>t.reset());class Rw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kw(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Ow(t){U.setTimeout(()=>{throw t},0)}let Ws,Gs=!1,lc=new Nw,Df=()=>{const t=U.Promise.resolve(void 0);Ws=()=>{t.then(Mw)}};var Mw=()=>{for(var t;t=xw();){try{t.h.call(t.g)}catch(n){Ow(n)}var e=Sf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gs=!1};function Li(t,e){Ie.call(this),this.h=t||1,this.g=e||U,this.j=Le(this.qb,this),this.l=Date.now()}be(Li,Ie);D=Li.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),De(this,"tick"),this.ga&&(uc(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function uc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){Li.$.N.call(this),uc(this),delete this.g};function hc(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function xf(t){t.g=hc(()=>{t.g=null,t.i&&(t.i=!1,xf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Pw extends Jt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:xf(this)}N(){super.N(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qs(t){Jt.call(this),this.h=t,this.g={}}be(Qs,Jt);var nu=[];function Nf(t,e,n,s){Array.isArray(n)||(n&&(nu[0]=n.toString()),n=nu);for(var r=0;r<n.length;r++){var i=Tf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Rf(t){sc(t.g,function(e,n){this.g.hasOwnProperty(n)&&ic(e)},t),t.g={}}Qs.prototype.N=function(){Qs.$.N.call(this),Rf(this)};Qs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fi(){this.g=!0}Fi.prototype.Ea=function(){this.g=!1};function Lw(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Fw(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Fn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$w(t,n)+(s?" "+s:"")})}function Uw(t,e){t.info(function(){return"TIMEOUT: "+e})}Fi.prototype.info=function(){};function $w(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return cc(n)}catch{return e}}var bn={},su=null;function Ui(){return su=su||new Ie}bn.Ta="serverreachability";function kf(t){Fe.call(this,bn.Ta,t)}be(kf,Fe);function Ys(t){const e=Ui();De(e,new kf(e))}bn.STAT_EVENT="statevent";function Of(t,e){Fe.call(this,bn.STAT_EVENT,t),this.stat=e}be(Of,Fe);function ze(t){const e=Ui();De(e,new Of(e,t))}bn.Ua="timingevent";function Mf(t,e){Fe.call(this,bn.Ua,t),this.size=e}be(Mf,Fe);function ar(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var $i={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Pf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fc(){}fc.prototype.h=null;function ru(t){return t.h||(t.h=t.i())}function Lf(){}var cr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dc(){Fe.call(this,"d")}be(dc,Fe);function pc(){Fe.call(this,"c")}be(pc,Fe);var ua;function Bi(){}be(Bi,fc);Bi.prototype.g=function(){return new XMLHttpRequest};Bi.prototype.i=function(){return{}};ua=new Bi;function lr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Qs(this),this.P=Bw,t=ia?125:void 0,this.V=new Li(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ff}function Ff(){this.i=null,this.g="",this.h=!1}var Bw=45e3,ha={},ni={};D=lr.prototype;D.setTimeout=function(t){this.P=t};function fa(t,e,n){t.L=1,t.v=ji(Ot(e)),t.s=n,t.S=!0,Uf(t,null)}function Uf(t,e){t.G=Date.now(),ur(t),t.A=Ot(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Kf(n.i,"t",s),t.C=0,n=t.l.J,t.h=new Ff,t.g=dd(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Pw(Le(t.Pa,t,t.g),t.O)),Nf(t.U,t.g,"readystatechange",t.nb),e=t.I?_f(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ys(),Lw(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&_t(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const u=_t(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>u)&&(u!=3||ia||this.g&&(this.h.h||this.g.ja()||cu(this.g)))){this.J||u!=4||e==7||(e==8||0>=f?Ys(3):Ys(2)),Vi(this);var n=this.g.da();this.ca=n;t:if($f(this)){var s=cu(this.g);t="";var r=s.length,i=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),ks(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Fw(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zs(a)){var l=a;break t}}l=null}if(n=l)Fn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,da(this,n);else{this.i=!1,this.o=3,ze(12),un(this),ks(this);break e}}this.S?(Bf(this,u,o),ia&&this.i&&u==3&&(Nf(this.U,this.V,"tick",this.mb),this.V.start())):(Fn(this.j,this.m,o,null),da(this,o)),u==4&&un(this),this.i&&!this.J&&(u==4?ld(this.l,this):(this.i=!1,ur(this)))}else a0(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ze(12)):(this.o=0,ze(13)),un(this),ks(this)}}}catch{}finally{}};function $f(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Bf(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=Vw(t,n),r==ni){e==4&&(t.o=4,ze(14),s=!1),Fn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ha){t.o=4,ze(15),Fn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Fn(t.j,t.m,r,null),da(t,r);$f(t)&&r!=ni&&r!=ha&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ze(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),_c(e),e.M=!0,ze(11))):(Fn(t.j,t.m,n,"[Invalid Chunked Response]"),un(t),ks(t))}D.mb=function(){if(this.g){var t=_t(this.g),e=this.g.ja();this.C<e.length&&(Vi(this),Bf(this,t,e),this.i&&t!=4&&ur(this))}};function Vw(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ni:(n=Number(e.substring(n,s)),isNaN(n)?ha:(s+=1,s+n>e.length?ni:(e=e.slice(s,s+n),t.C=s+n,e)))}D.cancel=function(){this.J=!0,un(this)};function ur(t){t.Y=Date.now()+t.P,Vf(t,t.P)}function Vf(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ar(Le(t.lb,t),e)}function Vi(t){t.B&&(U.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Uw(this.j,this.A),this.L!=2&&(Ys(),ze(17)),un(this),this.o=2,ks(this)):Vf(this,this.Y-t)};function ks(t){t.l.H==0||t.J||ld(t.l,t)}function un(t){Vi(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,uc(t.V),Rf(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function da(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||pa(n.i,t))){if(!t.K&&pa(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ii(n),zi(n);else break e;wc(n),ze(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=ar(Le(n.ib,n),6e3));if(1>=Qf(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else hn(n,11)}else if((t.K||n.g==t)&&ii(n),!zs(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const f=l[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const A=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var i=s.i;i.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(gc(i,i.h),i.h=null))}if(s.F){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.Da=I,ie(s.I,s.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=fd(s,s.J?s.pa:null,s.Y),o.K){Yf(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Vi(a),ur(a)),s.g=o}else ad(s);0<n.j.length&&Ki(n)}else l[0]!="stop"&&l[0]!="close"||hn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?hn(n,7):vc(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ys(4)}catch{}}function jw(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ki(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function qw(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ki(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function jf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ki(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=qw(t),s=jw(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var qf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function gn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof gn){this.h=t.h,si(this,t.j),this.s=t.s,this.g=t.g,ri(this,t.m),this.l=t.l;var e=t.i,n=new Xs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),iu(this,n),this.o=t.o}else t&&(e=String(t).match(qf))?(this.h=!1,si(this,e[1]||"",!0),this.s=bs(e[2]||""),this.g=bs(e[3]||"",!0),ri(this,e[4]),this.l=bs(e[5]||"",!0),iu(this,e[6]||"",!0),this.o=bs(e[7]||"")):(this.h=!1,this.i=new Xs(null,this.h))}gn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Cs(e,ou,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Cs(e,ou,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Cs(n,n.charAt(0)=="/"?Ww:Kw,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Cs(n,Qw)),t.join("")};function Ot(t){return new gn(t)}function si(t,e,n){t.j=n?bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ri(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function iu(t,e,n){e instanceof Xs?(t.i=e,Yw(t.i,t.h)):(n||(e=Cs(e,Gw)),t.i=new Xs(e,t.h))}function ie(t,e,n){t.i.set(e,n)}function ji(t){return ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Cs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ou=/[#\/\?@]/g,Kw=/[#\?:]/g,Ww=/[#\?]/g,Gw=/[#\?@]/g,Qw=/#/g;function Xs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Zt(t){t.g||(t.g=new Map,t.h=0,t.i&&Hw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Xs.prototype;D.add=function(t,e){Zt(this),this.i=null,t=ls(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hf(t,e){Zt(t),e=ls(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zf(t,e){return Zt(t),e=ls(t,e),t.g.has(e)}D.forEach=function(t,e){Zt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};D.ta=function(){Zt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};D.Z=function(t){Zt(this);let e=[];if(typeof t=="string")zf(this,t)&&(e=e.concat(this.g.get(ls(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Zt(this),this.i=null,t=ls(this,t),zf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Kf(t,e,n){Hf(t,e),0<n.length&&(t.i=null,t.g.set(ls(t,e),tc(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ls(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Yw(t,e){e&&!t.j&&(Zt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Hf(this,s),Kf(this,r,n))},t)),t.j=e}var Xw=class{constructor(t,e){this.g=t,this.map=e}};function Wf(t){this.l=t||Jw,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ka&&U.g.Ka()&&U.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Jw=10;function Gf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Qf(t){return t.h?1:t.g?t.g.size:0}function pa(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function gc(t,e){t.g?t.g.add(e):t.h=e}function Yf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Wf.prototype.cancel=function(){if(this.i=Xf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xf(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return tc(t.i)}var Zw=class{stringify(t){return U.JSON.stringify(t,void 0)}parse(t){return U.JSON.parse(t,void 0)}};function e0(){this.g=new Zw}function t0(t,e,n){const s=n||"";try{jf(t,function(r,i){let o=r;ir(r)&&(o=cc(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function n0(t,e){const n=new Fi;if(U.Image){const s=new Image;s.onload=Nr(kr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Nr(kr,n,s,"TestLoadImage: error",!1,e),s.onabort=Nr(kr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Nr(kr,n,s,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function kr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function hr(t){this.l=t.fc||null,this.j=t.ob||!1}be(hr,fc);hr.prototype.g=function(){return new qi(this.l,this.j)};hr.prototype.i=function(t){return function(){return t}}({});function qi(t,e){Ie.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=mc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}be(qi,Ie);var mc=0;D=qi.prototype;D.open=function(t,e){if(this.readyState!=mc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Js(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||U).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fr(this)),this.readyState=mc};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Js(this)),this.g&&(this.readyState=3,Js(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jf(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Jf(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fr(this):Js(this),this.readyState==3&&Jf(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,fr(this))};D.Ya=function(t){this.g&&(this.response=t,fr(this))};D.ka=function(){this.g&&fr(this)};function fr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Js(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Js(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var s0=U.JSON.parse;function fe(t){Ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Zf,this.L=this.M=!1}be(fe,Ie);var Zf="",r0=/^https?$/i,i0=["POST","PUT"];D=fe.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ua.g(),this.C=this.u?ru(this.u):ru(ua),this.g.onreadystatechange=Le(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){au(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=U.FormData&&t instanceof U.FormData,!(0<=mf(i0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{nd(this),0<this.B&&((this.L=o0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.ua,this)):this.A=hc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){au(this,i)}};function o0(t){return Xn&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof ec<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function au(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ed(t),Hi(t)}function ed(t){t.F||(t.F=!0,De(t,"complete"),De(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),Hi(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hi(this,!0)),fe.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?td(this):this.kb())};D.kb=function(){td(this)};function td(t){if(t.h&&typeof ec<"u"&&(!t.C[1]||_t(t)!=4||t.da()!=2)){if(t.v&&_t(t)==4)hc(t.La,0,t);else if(De(t,"readystatechange"),_t(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(qf)[1]||null;!r&&U.self&&U.self.location&&(r=U.self.location.protocol.slice(0,-1)),s=!r0.test(r?r.toLowerCase():"")}n=s}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var i=2<_t(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",ed(t)}}finally{Hi(t)}}}}function Hi(t,e){if(t.g){nd(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=s}catch{}}}function nd(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function _t(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),s0(e)}};function cu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Zf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function a0(t){const e={};t=(t.g&&2<=_t(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(zs(t[s]))continue;var n=kw(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}Cw(e,function(s){return s.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sd(t){let e="";return sc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function yc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=sd(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ie(t,e,n))}function ws(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rd(t){this.Ga=0,this.j=[],this.l=new Fi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ws("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ws("baseRetryDelayMs",5e3,t),this.hb=ws("retryDelaySeedMs",1e4,t),this.eb=ws("forwardChannelMaxRetries",2,t),this.xa=ws("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Wf(t&&t.concurrentRequestLimit),this.Ja=new e0,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=rd.prototype;D.ra=8;D.H=1;function vc(t){if(id(t),t.H==3){var e=t.W++,n=Ot(t.I);if(ie(n,"SID",t.K),ie(n,"RID",e),ie(n,"TYPE","terminate"),dr(t,n),e=new lr(t,t.l,e),e.L=2,e.v=ji(Ot(n)),n=!1,U.navigator&&U.navigator.sendBeacon)try{n=U.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=dd(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ur(e)}hd(t)}function zi(t){t.g&&(_c(t),t.g.cancel(),t.g=null)}function id(t){zi(t),t.u&&(U.clearTimeout(t.u),t.u=null),ii(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function Ki(t){if(!Gf(t.i)&&!t.m){t.m=!0;var e=t.Na;Ws||Df(),Gs||(Ws(),Gs=!0),lc.add(e,t),t.C=0}}function c0(t,e){return Qf(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ar(Le(t.Na,t,e),ud(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new lr(this,this.l,t);let i=this.s;if(this.U&&(i?(i=_f(i),Ef(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=od(this,r,e),n=Ot(this.I),ie(n,"RID",t),ie(n,"CVER",22),this.F&&ie(n,"X-HTTP-Session-Id",this.F),dr(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(sd(i)))+"&"+e:this.o&&yc(n,this.o,i)),gc(this.i,r),this.bb&&ie(n,"TYPE","init"),this.P?(ie(n,"$req",e),ie(n,"SID","null"),r.aa=!0,fa(r,n,null)):fa(r,n,e),this.H=2}}else this.H==3&&(t?lu(this,t):this.j.length==0||Gf(this.i)||lu(this))};function lu(t,e){var n;e?n=e.m:n=t.W++;const s=Ot(t.I);ie(s,"SID",t.K),ie(s,"RID",n),ie(s,"AID",t.V),dr(t,s),t.o&&t.s&&yc(s,t.o,t.s),n=new lr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=od(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),gc(t.i,n),fa(n,s,e)}function dr(t,e){t.na&&sc(t.na,function(n,s){ie(e,s,n)}),t.h&&jf({},function(n,s){ie(e,s,n)})}function od(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Le(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{t0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function ad(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ws||Df(),Gs||(Ws(),Gs=!0),lc.add(e,t),t.A=0}}function wc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ar(Le(t.Ma,t),ud(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,cd(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ar(Le(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ze(10),zi(this),cd(this))};function _c(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function cd(t){t.g=new lr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ot(t.wa);ie(e,"RID","rpc"),ie(e,"SID",t.K),ie(e,"AID",t.V),ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ie(e,"TO",t.qa),ie(e,"TYPE","xmlhttp"),dr(t,e),t.o&&t.s&&yc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ji(Ot(e)),n.s=null,n.S=!0,Uf(n,t)}D.ib=function(){this.v!=null&&(this.v=null,zi(this),wc(this),ze(19))};function ii(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function ld(t,e){var n=null;if(t.g==e){ii(t),_c(t),t.g=null;var s=2}else if(pa(t.i,e))n=e.F,Yf(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Ui(),De(s,new Mf(s,n)),Ki(t)}else ad(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&c0(t,e)||s==2&&wc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:hn(t,5);break;case 4:hn(t,10);break;case 3:hn(t,6);break;default:hn(t,2)}}}function ud(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function hn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Le(t.pb,t);n||(n=new gn("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||si(n,"https"),ji(n)),n0(n.toString(),s)}else ze(2);t.H=0,t.h&&t.h.za(e),hd(t),id(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ze(2)):(this.l.info("Failed to ping google.com"),ze(1))};function hd(t){if(t.H=0,t.ma=[],t.h){const e=Xf(t.i);(e.length!=0||t.j.length!=0)&&(Zl(t.ma,e),Zl(t.ma,t.j),t.i.i.length=0,tc(t.j),t.j.length=0),t.h.ya()}}function fd(t,e,n){var s=n instanceof gn?Ot(n):new gn(n);if(s.g!="")e&&(s.g=e+"."+s.g),ri(s,s.m);else{var r=U.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new gn(null);s&&si(i,s),e&&(i.g=e),r&&ri(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&ie(s,n,e),ie(s,"VER",t.ra),dr(t,s),s}function dd(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new fe(new hr({ob:!0})):new fe(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function pd(){}D=pd.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function oi(){if(Xn&&!(10<=Number(Ew)))throw Error("Environmental error: no available transport.")}oi.prototype.g=function(t,e){return new et(t,e)};function et(t,e){Ie.call(this),this.g=new rd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!zs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new us(this)}be(et,Ie);et.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ze(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=fd(t,null,t.Y),Ki(t)};et.prototype.close=function(){vc(this.g)};et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=cc(t),t=n);e.j.push(new Xw(e.fb++,t)),e.H==3&&Ki(e)};et.prototype.N=function(){this.g.h=null,delete this.j,vc(this.g),delete this.g,et.$.N.call(this)};function gd(t){dc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}be(gd,dc);function md(){pc.call(this),this.status=1}be(md,pc);function us(t){this.g=t}be(us,pd);us.prototype.Ba=function(){De(this.g,"a")};us.prototype.Aa=function(t){De(this.g,new gd(t))};us.prototype.za=function(t){De(this.g,new md)};us.prototype.ya=function(){De(this.g,"b")};function l0(){this.blockSize=-1}function ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}be(ft,l0);ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function So(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}ft.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)So(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){So(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){So(this,s),r=0;break}}this.h=r,this.i+=e};ft.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ee(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var u0={};function Ec(t){return-128<=t&&128>t?vw(t,function(e){return new ee([e|0],0>e?-1:0)}):new ee([t|0],0>t?-1:0)}function Et(t){if(isNaN(t)||!isFinite(t))return jn;if(0>t)return Ae(Et(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=ga;return new ee(e,0)}function yd(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ae(yd(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Et(Math.pow(e,8)),s=jn,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Et(Math.pow(e,i)),s=s.R(i).add(Et(o))):(s=s.R(n),s=s.add(Et(o)))}return s}var ga=4294967296,jn=Ec(0),ma=Ec(1),uu=Ec(16777216);D=ee.prototype;D.ea=function(){if(tt(this))return-Ae(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:ga+s)*e,e*=ga}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(xt(this))return"0";if(tt(this))return"-"+Ae(this).toString(t);for(var e=Et(Math.pow(t,6)),n=this,s="";;){var r=ci(n,e).g;n=ai(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,xt(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function xt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function tt(t){return t.h==-1}D.X=function(t){return t=ai(this,t),tt(t)?-1:xt(t)?0:1};function Ae(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ee(n,~t.h).add(ma)}D.abs=function(){return tt(this)?Ae(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new ee(n,n[n.length-1]&-2147483648?-1:0)};function ai(t,e){return t.add(Ae(e))}D.R=function(t){if(xt(this)||xt(t))return jn;if(tt(this))return tt(t)?Ae(this).R(Ae(t)):Ae(Ae(this).R(t));if(tt(t))return Ae(this.R(Ae(t)));if(0>this.X(uu)&&0>t.X(uu))return Et(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Or(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Or(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Or(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Or(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ee(n,0)};function Or(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function _s(t,e){this.g=t,this.h=e}function ci(t,e){if(xt(e))throw Error("division by zero");if(xt(t))return new _s(jn,jn);if(tt(t))return e=ci(Ae(t),e),new _s(Ae(e.g),Ae(e.h));if(tt(e))return e=ci(t,Ae(e)),new _s(Ae(e.g),e.h);if(30<t.g.length){if(tt(t)||tt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ma,s=e;0>=s.X(t);)n=hu(n),s=hu(s);var r=kn(n,1),i=kn(s,1);for(s=kn(s,2),n=kn(n,2);!xt(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=kn(s,1),n=kn(n,1)}return e=ai(t,r.R(e)),new _s(r,e)}for(r=jn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Et(n),o=i.R(e);tt(o)||0<o.X(t);)n-=s,i=Et(n),o=i.R(e);xt(i)&&(i=ma),r=r.add(i),t=ai(t,o)}return new _s(r,t)}D.gb=function(t){return ci(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ee(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ee(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ee(n,this.h^t.h)};function hu(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ee(n,t.h)}function kn(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ee(r,t.h)}oi.prototype.createWebChannel=oi.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;$i.NO_ERROR=0;$i.TIMEOUT=8;$i.HTTP_ERROR=6;Pf.COMPLETE="complete";Lf.EventType=cr;cr.OPEN="a";cr.CLOSE="b";cr.ERROR="c";cr.MESSAGE="d";Ie.prototype.listen=Ie.prototype.O;fe.prototype.listenOnce=fe.prototype.P;fe.prototype.getLastError=fe.prototype.Sa;fe.prototype.getLastErrorCode=fe.prototype.Ia;fe.prototype.getStatus=fe.prototype.da;fe.prototype.getResponseJson=fe.prototype.Wa;fe.prototype.getResponseText=fe.prototype.ja;fe.prototype.send=fe.prototype.ha;fe.prototype.setWithCredentials=fe.prototype.Oa;ft.prototype.digest=ft.prototype.l;ft.prototype.reset=ft.prototype.reset;ft.prototype.update=ft.prototype.j;ee.prototype.add=ee.prototype.add;ee.prototype.multiply=ee.prototype.R;ee.prototype.modulo=ee.prototype.gb;ee.prototype.compare=ee.prototype.X;ee.prototype.toNumber=ee.prototype.ea;ee.prototype.toString=ee.prototype.toString;ee.prototype.getBits=ee.prototype.D;ee.fromNumber=Et;ee.fromString=yd;var h0=function(){return new oi},f0=function(){return Ui()},Do=$i,d0=Pf,p0=bn,fu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},g0=hr,Mr=Lf,m0=fe,y0=ft,qn=ee;const du="@firebase/firestore";/**
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
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
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
 */let hs="9.22.2";/**
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
 */const wn=new af("@firebase/firestore");function pu(){return wn.logLevel}function O(t,...e){if(wn.logLevel<=J.DEBUG){const n=e.map(Tc);wn.debug(`Firestore (${hs}): ${t}`,...n)}}function Mt(t,...e){if(wn.logLevel<=J.ERROR){const n=e.map(Tc);wn.error(`Firestore (${hs}): ${t}`,...n)}}function Jn(t,...e){if(wn.logLevel<=J.WARN){const n=e.map(Tc);wn.warn(`Firestore (${hs}): ${t}`,...n)}}function Tc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function F(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw Mt(e),new Error(e)}function ae(t,e){t||F()}function z(t,e){return t}/**
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
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class vd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class v0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Re.UNAUTHENTICATED))}shutdown(){}}class w0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _0{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ae(typeof s.accessToken=="string"),new vd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Re(e)}}class E0{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class T0{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new E0(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class I0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b0{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.T=n.token,new I0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function C0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class wd{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=C0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function X(t,e){return t<e?-1:t>e?1:0}function Zn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new we(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new we(0,0))}static max(){return new V(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zs{constructor(e,n,s){n===void 0?n=0:n>e.length&&F(),s===void 0?s=e.length-n:s>e.length-n&&F(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Zs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends Zs{construct(e,n,s){return new oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new N(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const A0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends Zs{construct(e,n,s){return new Me(e,n,s)}static isValidIdentifier(e){return A0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new N(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new N(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new N(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new N(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(oe.fromString(e))}static fromName(e){return new M(oe.fromString(e).popFirst(5))}static empty(){return new M(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new oe(e.slice()))}}function S0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=V.fromTimestamp(s===1e9?new we(n+1,0):new we(n,s));return new Qt(r,M.empty(),e)}function D0(t){return new Qt(t.readTime,t.key,-1)}class Qt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Qt(V.min(),M.empty(),-1)}static max(){return new Qt(V.max(),M.empty(),-1)}}function x0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
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
 */const N0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class R0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function pr(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==N0)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,s)=>{n(e)})}static reject(e){return new E((n,s)=>{s(e)})}static waitFor(e){return new E((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=E.resolve(!1);for(const s of e)n=n.next(r=>r?E.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new E((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new E((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function gr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ic{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ic.ct=-1;function Wi(t){return t==null}function li(t){return t===0&&1/t==-1/0}function k0(t){return typeof t=="number"&&Number.isInteger(t)&&!li(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function gu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _d(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ue{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pr(this.root,e,this.comparator,!0)}}class Pr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=r??Ce.EMPTY,this.right=i??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ce(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ce.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ue{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mu(this.data.getIterator())}getIteratorFrom(e){return new mu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class mu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class at{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new at([])}unionWith(e){let n=new Ue(Me.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new at(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Ed extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Ed("Invalid base64 string: "+r):r}}(e);return new $e(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const O0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(t){if(ae(!!t),typeof t=="string"){let e=0;const n=O0.exec(t);if(ae(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _n(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
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
 */function bc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cc(t){const e=t.mapValue.fields.__previous_value__;return bc(e)?Cc(e):e}function er(t){const e=Yt(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class M0{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class tr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new tr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof tr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Lr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function En(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bc(t)?4:P0(t)?9007199254740991:10:F()}function Ct(t,e){if(t===e)return!0;const n=En(t);if(n!==En(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return er(t).isEqual(er(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Yt(s.timestampValue),o=Yt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return _n(s.bytesValue).isEqual(_n(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ye(s.geoPointValue.latitude)===ye(r.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ye(s.integerValue)===ye(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ye(s.doubleValue),o=ye(r.doubleValue);return i===o?li(i)===li(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Zn(t.arrayValue.values||[],e.arrayValue.values||[],Ct);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(gu(i)!==gu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ct(i[a],o[a])))return!1;return!0}(t,e);default:return F()}}function nr(t,e){return(t.values||[]).find(n=>Ct(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=En(t),s=En(e);if(n!==s)return X(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ye(r.integerValue||r.doubleValue),a=ye(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return yu(t.timestampValue,e.timestampValue);case 4:return yu(er(t),er(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(r,i){const o=_n(r),a=_n(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=X(o[c],a[c]);if(l!==0)return l}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=X(ye(r.latitude),ye(i.latitude));return o!==0?o:X(ye(r.longitude),ye(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=es(o[c],a[c]);if(l)return l}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Lr.mapValue&&i===Lr.mapValue)return 0;if(r===Lr.mapValue)return 1;if(i===Lr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=X(a[u],l[u]);if(f!==0)return f;const p=es(o[a[u]],c[l[u]]);if(p!==0)return p}return X(a.length,l.length)}(t.mapValue,e.mapValue);default:throw F()}}function yu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=Yt(t),s=Yt(e),r=X(n.seconds,s.seconds);return r!==0?r:X(n.nanos,s.nanos)}function ts(t){return ya(t)}function ya(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Yt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_n(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ya(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ya(s.fields[a])}`;return i+"}"}(t.mapValue):F();var e,n}function vu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function va(t){return!!t&&"integerValue"in t}function Ac(t){return!!t&&"arrayValue"in t}function wu(t){return!!t&&"nullValue"in t}function _u(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zr(t){return!!t&&"mapValue"in t}function Os(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Os(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Os(t.arrayValue.values[n]);return e}return Object.assign({},t)}function P0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!zr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Os(n)}setAll(e){let n=Me.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Os(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());zr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ct(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];zr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){fs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new nt(Os(this.value))}}function Td(t){const e=[];return fs(t.fields,(n,s)=>{const r=new Me([n]);if(zr(s)){const i=Td(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new at(e)}/**
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
 */class ke{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ke(e,0,V.min(),V.min(),V.min(),nt.empty(),0)}static newFoundDocument(e,n,s,r){return new ke(e,1,n,V.min(),s,r,0)}static newNoDocument(e,n){return new ke(e,2,n,V.min(),V.min(),nt.empty(),0)}static newUnknownDocument(e,n){return new ke(e,3,n,V.min(),V.min(),nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ui{constructor(e,n){this.position=e,this.inclusive=n}}function Eu(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=M.comparator(M.fromName(o.referenceValue),n.key):s=es(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Tu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ct(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Hn{constructor(e,n="asc"){this.field=e,this.dir=n}}function L0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Id{}class ve extends Id{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new U0(e,n,s):n==="array-contains"?new V0(e,s):n==="in"?new j0(e,s):n==="not-in"?new q0(e,s):n==="array-contains-any"?new H0(e,s):new ve(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new $0(e,s):new B0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(es(n,this.value)):n!==null&&En(this.value)===En(n)&&this.matchesComparison(es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class dt extends Id{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new dt(e,n)}matches(e){return bd(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function bd(t){return t.op==="and"}function Cd(t){return F0(t)&&bd(t)}function F0(t){for(const e of t.filters)if(e instanceof dt)return!1;return!0}function wa(t){if(t instanceof ve)return t.field.canonicalString()+t.op.toString()+ts(t.value);if(Cd(t))return t.filters.map(e=>wa(e)).join(",");{const e=t.filters.map(n=>wa(n)).join(",");return`${t.op}(${e})`}}function Ad(t,e){return t instanceof ve?function(n,s){return s instanceof ve&&n.op===s.op&&n.field.isEqual(s.field)&&Ct(n.value,s.value)}(t,e):t instanceof dt?function(n,s){return s instanceof dt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Ad(i,s.filters[o]),!0):!1}(t,e):void F()}function Sd(t){return t instanceof ve?function(e){return`${e.field.canonicalString()} ${e.op} ${ts(e.value)}`}(t):t instanceof dt?function(e){return e.op.toString()+" {"+e.getFilters().map(Sd).join(" ,")+"}"}(t):"Filter"}class U0 extends ve{constructor(e,n,s){super(e,n,s),this.key=M.fromName(s.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class $0 extends ve{constructor(e,n){super(e,"in",n),this.keys=Dd("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class B0 extends ve{constructor(e,n){super(e,"not-in",n),this.keys=Dd("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dd(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>M.fromName(s.referenceValue))}class V0 extends ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ac(n)&&nr(n.arrayValue,this.value)}}class j0 extends ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&nr(this.value.arrayValue,n)}}class q0 extends ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(nr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!nr(this.value.arrayValue,n)}}class H0 extends ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ac(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>nr(this.value.arrayValue,s))}}/**
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
 */class z0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Iu(t,e=null,n=[],s=[],r=null,i=null,o=null){return new z0(t,e,n,s,r,i,o)}function Sc(t){const e=z(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>wa(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Wi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ts(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ts(s)).join(",")),e.dt=n}return e.dt}function Dc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!L0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ad(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tu(t.startAt,e.startAt)&&Tu(t.endAt,e.endAt)}function _a(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ds{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function K0(t,e,n,s,r,i,o,a){return new ds(t,e,n,s,r,i,o,a)}function xc(t){return new ds(t)}function bu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Nc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Gi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function xd(t){return t.collectionGroup!==null}function zn(t){const e=z(t);if(e.wt===null){e.wt=[];const n=Gi(e),s=Nc(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Hn(n)),e.wt.push(new Hn(Me.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Hn(Me.keyField(),i))}}}return e.wt}function Pt(t){const e=z(t);if(!e._t)if(e.limitType==="F")e._t=Iu(e.path,e.collectionGroup,zn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of zn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Hn(i.field,o))}const s=e.endAt?new ui(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ui(e.startAt.position,e.startAt.inclusive):null;e._t=Iu(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Ea(t,e){e.getFirstInequalityField(),Gi(t);const n=t.filters.concat([e]);return new ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ta(t,e,n){return new ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qi(t,e){return Dc(Pt(t),Pt(e))&&t.limitType===e.limitType}function Nd(t){return`${Sc(Pt(t))}|lt:${t.limitType}`}function Ia(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Sd(s)).join(", ")}]`),Wi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ts(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ts(s)).join(",")),`Target(${n})`}(Pt(t))}; limitType=${t.limitType})`}function Yi(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):M.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of zn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Eu(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,zn(n),s)||n.endAt&&!function(r,i,o){const a=Eu(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,zn(n),s))}(t,e)}function W0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Rd(t){return(e,n)=>{let s=!1;for(const r of zn(t)){const i=G0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function G0(t,e,n){const s=t.field.isKeyField()?M.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?es(a,c):F()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return F()}}/**
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
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return _d(this.inner)}size(){return this.innerSize}}/**
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
 */const Q0=new ue(M.comparator);function Lt(){return Q0}const kd=new ue(M.comparator);function As(...t){let e=kd;for(const n of t)e=e.insert(n.key,n);return e}function Od(t){let e=kd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function fn(){return Ms()}function Md(){return Ms()}function Ms(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const Y0=new ue(M.comparator),X0=new Ue(M.comparator);function G(...t){let e=X0;for(const n of t)e=e.add(n);return e}const J0=new Ue(X);function Z0(){return J0}/**
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
 */function Pd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:li(e)?"-0":e}}function Ld(t){return{integerValue:""+t}}function e_(t,e){return k0(e)?Ld(e):Pd(t,e)}/**
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
 */class Xi{constructor(){this._=void 0}}function t_(t,e,n){return t instanceof hi?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&bc(r)&&(r=Cc(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof sr?Ud(t,e):t instanceof rr?$d(t,e):function(s,r){const i=Fd(s,r),o=Cu(i)+Cu(s.gt);return va(i)&&va(s.gt)?Ld(o):Pd(s.serializer,o)}(t,e)}function n_(t,e,n){return t instanceof sr?Ud(t,e):t instanceof rr?$d(t,e):n}function Fd(t,e){return t instanceof fi?va(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class hi extends Xi{}class sr extends Xi{constructor(e){super(),this.elements=e}}function Ud(t,e){const n=Bd(e);for(const s of t.elements)n.some(r=>Ct(r,s))||n.push(s);return{arrayValue:{values:n}}}class rr extends Xi{constructor(e){super(),this.elements=e}}function $d(t,e){let n=Bd(e);for(const s of t.elements)n=n.filter(r=>!Ct(r,s));return{arrayValue:{values:n}}}class fi extends Xi{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Cu(t){return ye(t.integerValue||t.doubleValue)}function Bd(t){return Ac(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function s_(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof sr&&s instanceof sr||n instanceof rr&&s instanceof rr?Zn(n.elements,s.elements,Ct):n instanceof fi&&s instanceof fi?Ct(n.gt,s.gt):n instanceof hi&&s instanceof hi}(t.transform,e.transform)}class r_{constructor(e,n){this.version=e,this.transformResults=n}}class Rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ji{}function Vd(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qd(t.key,Rt.none()):new mr(t.key,t.data,Rt.none());{const n=t.data,s=nt.empty();let r=new Ue(Me.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Cn(t.key,s,new at(r.toArray()),Rt.none())}}function i_(t,e,n){t instanceof mr?function(s,r,i){const o=s.value.clone(),a=Su(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Cn?function(s,r,i){if(!Kr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Su(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(jd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ps(t,e,n,s){return t instanceof mr?function(r,i,o,a){if(!Kr(r.precondition,i))return o;const c=r.value.clone(),l=Du(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Cn?function(r,i,o,a){if(!Kr(r.precondition,i))return o;const c=Du(r.fieldTransforms,a,i),l=i.data;return l.setAll(jd(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Kr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function o_(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Fd(s.transform,r||null);i!=null&&(n===null&&(n=nt.empty()),n.set(s.field,i))}return n||null}function Au(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Zn(n,s,(r,i)=>s_(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mr extends Ji{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Cn extends Ji{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Su(t,e,n){const s=new Map;ae(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,n_(o,a,n[r]))}return s}function Du(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,t_(i,o,e))}return s}class qd extends Ji{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class a_ extends Ji{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class c_{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&i_(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ps(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ps(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Md();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Vd(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(V.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&Zn(this.mutations,e.mutations,(n,s)=>Au(n,s))&&Zn(this.baseMutations,e.baseMutations,(n,s)=>Au(n,s))}}class Rc{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ae(e.mutations.length===s.length);let r=Y0;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Rc(e,n,s,r)}}/**
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
 */class l_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class u_{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var me,Q;function h_(t){switch(t){default:return F();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function Hd(t){if(t===void 0)return Mt("GRPC error has no .code"),y.UNKNOWN;switch(t){case me.OK:return y.OK;case me.CANCELLED:return y.CANCELLED;case me.UNKNOWN:return y.UNKNOWN;case me.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case me.INTERNAL:return y.INTERNAL;case me.UNAVAILABLE:return y.UNAVAILABLE;case me.UNAUTHENTICATED:return y.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case me.NOT_FOUND:return y.NOT_FOUND;case me.ALREADY_EXISTS:return y.ALREADY_EXISTS;case me.PERMISSION_DENIED:return y.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case me.ABORTED:return y.ABORTED;case me.OUT_OF_RANGE:return y.OUT_OF_RANGE;case me.UNIMPLEMENTED:return y.UNIMPLEMENTED;case me.DATA_LOSS:return y.DATA_LOSS;default:return F()}}(Q=me||(me={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class kc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Fr}static getOrCreateInstance(){return Fr===null&&(Fr=new kc),Fr}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Fr=null;/**
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
 */function f_(){return new TextEncoder}/**
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
 */const d_=new qn([4294967295,4294967295],0);function xu(t){const e=f_().encode(t),n=new y0;return n.update(e),new Uint8Array(n.digest())}function Nu(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qn([n,s],0),new qn([r,i],0)]}class Oc{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ss(`Invalid padding: ${n}`);if(s<0)throw new Ss(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ss(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ss(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=qn.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(qn.fromNumber(s)));return r.compare(d_)===1&&(r=new qn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=xu(e),[s,r]=Nu(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Oc(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=xu(e),[s,r]=Nu(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ss extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,yr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Zi(V.min(),r,new ue(X),Lt(),G())}}class yr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new yr(s,n,G(),G(),G())}}/**
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
 */class Wr{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class zd{constructor(e,n){this.targetId=e,this.Vt=n}}class Kd{constructor(e,n,s=$e.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Ru{constructor(){this.St=0,this.Dt=Ou(),this.Ct=$e.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=G(),n=G(),s=G();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:F()}}),new yr(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=Ou()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class p_{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Lt(),this.zt=ku(),this.Wt=new ue(X)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(_a(o))if(r===0){const a=new M(o.path);this.Yt(s,a,ke.newNoDocument(a,V.min()))}else ae(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=kc.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,f){var p,g,A,I,S,q;const j={localCacheCount:u,existenceFilterCount:f.count},H=f.unchangedNames;return H&&(j.bloomFilter={applied:l===0,hashCount:(p=H==null?void 0:H.hashCount)!==null&&p!==void 0?p:0,bitmapLength:(I=(A=(g=H==null?void 0:H.bits)===null||g===void 0?void 0:g.bitmap)===null||A===void 0?void 0:A.length)!==null&&I!==void 0?I:0,padding:(q=(S=H==null?void 0:H.bits)===null||S===void 0?void 0:S.padding)!==null&&q!==void 0?q:0}),j}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=_n(i).toUint8Array()}catch(u){if(u instanceof Ed)return Jn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Oc(c,o,a)}catch(u){return Jn(u instanceof Ss?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&_a(a.target)){const c=new M(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,ke.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=G();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new Zi(e,n,this.Wt,this.jt,s);return this.jt=Lt(),this.zt=ku(),this.Wt=new ue(X),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Ru,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Ue(X),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Ru),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function ku(){return new ue(M.comparator)}function Ou(){return new ue(M.comparator)}const g_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),m_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),y_=(()=>({and:"AND",or:"OR"}))();class v_{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ba(t,e){return t.useProto3Json||Wi(e)?e:{value:e}}function di(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wd(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function w_(t,e){return di(t,e.toTimestamp())}function It(t){return ae(!!t),V.fromTimestamp(function(e){const n=Yt(e);return new we(n.seconds,n.nanos)}(t))}function Mc(t,e){return function(n){return new oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Gd(t){const e=oe.fromString(t);return ae(Jd(e)),e}function Ca(t,e){return Mc(t.databaseId,e.path)}function xo(t,e){const n=Gd(e);if(n.get(1)!==t.databaseId.projectId)throw new N(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(Qd(n))}function Aa(t,e){return Mc(t.databaseId,e)}function __(t){const e=Gd(t);return e.length===4?oe.emptyPath():Qd(e)}function Sa(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qd(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Mu(t,e,n){return{name:Ca(t,e),fields:n.value.mapValue.fields}}function E_(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(ae(l===void 0||typeof l=="string"),$e.fromBase64String(l||"")):(ae(l===void 0||l instanceof Uint8Array),$e.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?y.UNKNOWN:Hd(c.code);return new N(l,c.message||"")}(o);n=new Kd(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=xo(t,s.document.name),i=It(s.document.updateTime),o=s.document.createTime?It(s.document.createTime):V.min(),a=new nt({mapValue:{fields:s.document.fields}}),c=ke.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Wr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=xo(t,s.document),i=s.readTime?It(s.readTime):V.min(),o=ke.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Wr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=xo(t,s.document),i=s.removedTargetIds||[];n=new Wr([],i,r,null)}else{if(!("filter"in e))return F();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new u_(r,i),a=s.targetId;n=new zd(a,o)}}return n}function T_(t,e){let n;if(e instanceof mr)n={update:Mu(t,e.key,e.value)};else if(e instanceof qd)n={delete:Ca(t,e.key)};else if(e instanceof Cn)n={update:Mu(t,e.key,e.data),updateMask:R_(e.fieldMask)};else{if(!(e instanceof a_))return F();n={verify:Ca(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof hi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof sr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof rr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fi)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw F()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:w_(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:F()}(t,e.precondition)),n}function I_(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?It(s.updateTime):It(r);return i.isEqual(V.min())&&(i=It(r)),new r_(i,s.transformResults||[])}(n,e))):[]}function b_(t,e){return{documents:[Aa(t,e.path)]}}function C_(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Aa(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Aa(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Xd(dt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Pn(u.field),direction:D_(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ba(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function A_(t){let e=__(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ae(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const f=Yd(u);return f instanceof dt&&Cd(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Hn(Ln(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Wi(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,p=u.values||[];return new ui(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,p=u.values||[];return new ui(p,f)}(n.endAt)),K0(e,r,o,i,a,"F",c,l)}function S_(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yd(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ln(e.unaryFilter.field);return ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ln(e.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ln(e.unaryFilter.field);return ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ln(e.unaryFilter.field);return ve.create(i,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(e){return ve.create(Ln(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return dt.create(e.compositeFilter.filters.map(n=>Yd(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(t):F()}function D_(t){return g_[t]}function x_(t){return m_[t]}function N_(t){return y_[t]}function Pn(t){return{fieldPath:t.canonicalString()}}function Ln(t){return Me.fromServerFormat(t.fieldPath)}function Xd(t){return t instanceof ve?function(e){if(e.op==="=="){if(_u(e.value))return{unaryFilter:{field:Pn(e.field),op:"IS_NAN"}};if(wu(e.value))return{unaryFilter:{field:Pn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(_u(e.value))return{unaryFilter:{field:Pn(e.field),op:"IS_NOT_NAN"}};if(wu(e.value))return{unaryFilter:{field:Pn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pn(e.field),op:x_(e.op),value:e.value}}}(t):t instanceof dt?function(e){const n=e.getFilters().map(s=>Xd(s));return n.length===1?n[0]:{compositeFilter:{op:N_(e.op),filters:n}}}(t):F()}function R_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vt{constructor(e,n,s,r,i=V.min(),o=V.min(),a=$e.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class k_{constructor(e){this.fe=e}}function O_(t){const e=A_({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ta(e,e.limit,"L"):e}/**
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
 */class M_{constructor(){this.rn=new P_}addToCollectionParentIndex(e,n){return this.rn.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(Qt.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(Qt.min())}updateCollectionGroup(e,n,s){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class P_{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ue(oe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ue(oe.comparator)).toArray()}}/**
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
 */class ns{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new ns(0)}static Mn(){return new ns(-1)}}/**
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
 */class L_{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class F_{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class U_{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Ps(s.mutation,r,at.empty(),we.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,G()).next(()=>s))}getLocalViewOfDocuments(e,n,s=G()){const r=fn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=As();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=fn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,G()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Lt();const o=Ms(),a=Ms();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Cn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ps(u.mutation,l,u.mutation.getFieldMask(),we.now())):o.set(l.key,at.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new F_(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ms();let r=new ue((o,a)=>o-a),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||at.empty();u=a.applyToLocalView(l,u),s.set(c,u);const f=(r.get(a.batchId)||G()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=Md();u.forEach(p=>{if(!i.has(p)){const g=Vd(n.get(p),s.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xd(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):E.resolve(fn());let a=-1,c=i;return o.next(l=>E.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,G())).next(u=>({batchId:a,changes:Od(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(s=>{let r=As();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=As();return this.indexManager.getCollectionParents(e,r).next(o=>E.forEach(o,a=>{const c=function(l,u){return new ds(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,ke.newInvalidDocument(l)))});let o=As();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Ps(l.mutation,c,at.empty(),we.now()),Yi(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class $_{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return E.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:It(s.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:O_(s.bundledQuery),readTime:It(s.readTime)}}(n)),E.resolve()}}/**
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
 */class B_{constructor(){this.overlays=new ue(M.comparator),this.ls=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const s=fn();return E.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),E.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),E.resolve()}getOverlaysForCollection(e,n,s){const r=fn(),i=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return E.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ue((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=fn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=fn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return E.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new l_(n,s));let i=this.ls.get(n);i===void 0&&(i=G(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class Pc{constructor(){this.fs=new Ue(Te.ds),this.ws=new Ue(Te._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Te(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Te(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new M(new oe([])),s=new Te(n,e),r=new Te(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new M(new oe([])),s=new Te(n,e),r=new Te(n,e+1);let i=G();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Te(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Te{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return M.comparator(e.key,n.key)||X(e.As,n.As)}static _s(e,n){return X(e.As,n.As)||M.comparator(e.key,n.key)}}/**
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
 */class V_{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Ue(Te.ds)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new c_(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Te(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Te(n,0),r=new Te(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ue(X);return n.forEach(r=>{const i=new Te(r,0),o=new Te(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),E.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;M.isDocumentKey(i)||(i=i.child(""));const o=new Te(new M(i),0);let a=new Ue(X);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),E.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ae(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return E.forEach(n.mutations,r=>{const i=new Te(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Te(n,0),r=this.Rs.firstAfterOrEqual(s);return E.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class j_{constructor(e){this.Ds=e,this.docs=new ue(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(e,n){let s=Lt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ke.newInvalidDocument(r))}),E.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Lt();const o=n.path,a=new M(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||x0(D0(u),s)<=0||(r.has(u.key)||Yi(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(e,n,s,r){F()}Cs(e,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new q_(this)}getSize(e){return E.resolve(this.size)}}class q_ extends L_{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),E.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class H_{constructor(e){this.persistence=e,this.xs=new ps(n=>Sc(n),Dc),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Pc,this.targetCount=0,this.Ms=ns.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),E.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new ns(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.Fn(n),E.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),E.waitFor(i).next(()=>r)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return E.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),E.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),E.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return E.resolve(s)}containsKey(e,n){return E.resolve(this.ks.containsKey(n))}}/**
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
 */class z_{constructor(e,n){this.$s={},this.overlays={},this.Os=new Ic(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new H_(this),this.indexManager=new M_,this.remoteDocumentCache=function(s){return new j_(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new k_(n),this.qs=new $_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new B_,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new V_(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){O("MemoryPersistence","Starting transaction:",e);const r=new K_(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return E.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class K_ extends R0{constructor(e){super(),this.currentSequenceNumber=e}}class Lc{constructor(e){this.persistence=e,this.Qs=new Pc,this.js=null}static zs(e){return new Lc(e)}get Ws(){if(this.js)return this.js;throw F()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),E.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),E.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ws,s=>{const r=M.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,V.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return E.or([()=>E.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Fc{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=G(),r=G();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Fc(e,n.fromCache,s,r)}}/**
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
 */class W_{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(bu(n))return E.resolve(null);let s=Pt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ta(n,null,"F"),s=Pt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=G(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,Ta(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,r){return bu(n)||r.isEqual(V.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(pu()<=J.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ia(n)),this.Wi(e,o,n,S0(r,-1)))})}ji(e,n){let s=new Ue(Rd(e));return n.forEach((r,i)=>{Yi(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return pu()<=J.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Ia(n)),this.Ui.getDocumentsMatchingQuery(e,n,Qt.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class G_{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new ue(X),this.Yi=new ps(i=>Sc(i),Dc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new U_(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Q_(t,e,n,s){return new G_(t,e,n,s)}async function Zd(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=G();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function Y_(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let p=E.resolve();return f.forEach(g=>{p=p.next(()=>l.getEntry(a,g)).next(A=>{const I=c.docVersions.get(g);ae(I!==null),A.version.compareTo(I)<0&&(u.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),l.addEntry(A)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=G();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function ep(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function X_(t,e){const n=z(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,f)=>{const p=r.get(f);if(!p)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken($e.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(f,g),function(A,I,S){return A.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,g,u)&&a.push(n.Bs.updateTargetData(i,g))});let c=Lt(),l=G();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(J_(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(V.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(f=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function J_(t,e,n){let s=G(),r=G();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Lt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(V.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function Z_(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function eE(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,E.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new Vt(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Da(t,e,n){const s=z(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!gr(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function Pu(t,e,n){const s=z(t);let r=V.min(),i=G();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=z(a),f=u.Yi.get(l);return f!==void 0?E.resolve(u.Ji.get(f)):u.Bs.getTargetData(c,l)}(s,o,Pt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:V.min(),n?i:G())).next(a=>(tE(s,W0(e),a),{documents:a,ir:i})))}function tE(t,e,n){let s=t.Xi.get(e)||V.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class Lu{constructor(){this.activeTargetIds=Z0()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nE{constructor(){this.Hr=new Lu,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Lu,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sE{Yr(e){}shutdown(){}}/**
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
 */class Fu{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ur=null;function No(){return Ur===null?Ur=268435456+Math.round(2147483648*Math.random()):Ur++,"0x"+Ur.toString(16)}/**
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
 */const rE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class iE{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Ne="WebChannelConnection";class oE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=No(),a=this.To(e,n);O("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(l=>(O("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Jn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+hs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=rE[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=No();return new Promise((o,a)=>{const c=new m0;c.setWithCredentials(!0),c.listenOnce(d0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Do.NO_ERROR:const u=c.getResponseJson();O(Ne,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Do.TIMEOUT:O(Ne,`RPC '${e}' ${i} timed out`),a(new N(y.DEADLINE_EXCEEDED,"Request time out"));break;case Do.HTTP_ERROR:const f=c.getStatus();if(O(Ne,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const A=function(I){const S=I.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(S)>=0?S:y.UNKNOWN}(g.status);a(new N(A,g.message))}else a(new N(y.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new N(y.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{O(Ne,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);O(Ne,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=No(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=h0(),a=f0(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new g0({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");O(Ne,`Creating RPC '${e}' stream ${r}: ${u}`,c);const f=o.createWebChannel(u,c);let p=!1,g=!1;const A=new iE({ro:S=>{g?O(Ne,`Not sending because RPC '${e}' stream ${r} is closed:`,S):(p||(O(Ne,`Opening RPC '${e}' stream ${r} transport.`),f.open(),p=!0),O(Ne,`RPC '${e}' stream ${r} sending:`,S),f.send(S))},oo:()=>f.close()}),I=(S,q,j)=>{S.listen(q,H=>{try{j(H)}catch(R){setTimeout(()=>{throw R},0)}})};return I(f,Mr.EventType.OPEN,()=>{g||O(Ne,`RPC '${e}' stream ${r} transport opened.`)}),I(f,Mr.EventType.CLOSE,()=>{g||(g=!0,O(Ne,`RPC '${e}' stream ${r} transport closed`),A.wo())}),I(f,Mr.EventType.ERROR,S=>{g||(g=!0,Jn(Ne,`RPC '${e}' stream ${r} transport errored:`,S),A.wo(new N(y.UNAVAILABLE,"The operation could not be completed")))}),I(f,Mr.EventType.MESSAGE,S=>{var q;if(!g){const j=S.data[0];ae(!!j);const H=j,R=H.error||((q=H[0])===null||q===void 0?void 0:q.error);if(R){O(Ne,`RPC '${e}' stream ${r} received error:`,R);const Ee=R.status;let Qe=function(Ye){const Dn=me[Ye];if(Dn!==void 0)return Hd(Dn)}(Ee),At=R.message;Qe===void 0&&(Qe=y.INTERNAL,At="Unknown error status: "+Ee+" with message "+R.message),g=!0,A.wo(new N(Qe,At)),f.close()}else O(Ne,`RPC '${e}' stream ${r} received:`,j),A._o(j)}}),I(a,p0.STAT_EVENT,S=>{S.stat===fu.PROXY?O(Ne,`RPC '${e}' stream ${r} detected buffering proxy`):S.stat===fu.NOPROXY&&O(Ne,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{A.fo()},0),A}}function Ro(){return typeof document<"u"?document:null}/**
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
 */function eo(t){return new v_(t,!0)}/**
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
 */class tp{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&O("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class np{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new tp(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(Mt(n.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new N(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aE extends np{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=E_(this.serializer,e),s=function(r){if(!("targetChange"in r))return V.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?V.min():i.readTime?It(i.readTime):V.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Sa(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=_a(a)?{documents:b_(r,a)}:{query:C_(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Wd(r,i.resumeToken);const c=ba(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(V.min())>0){o.readTime=di(r,i.snapshotVersion.toTimestamp());const c=ba(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=S_(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Sa(this.serializer),n.removeTarget=e,this.Wo(n)}}class cE extends np{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=I_(e.writeResults,e.commitTime),s=It(e.commitTime);return this.listener.cu(s,n)}return ae(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Sa(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>T_(this.serializer,s))};this.Wo(n)}}/**
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
 */class lE extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new N(y.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new N(y.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(y.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class uE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Mt(n),this.mu=!1):O("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class hE{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{An(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=z(a);c.vu.add(4),await vr(c),c.bu.set("Unknown"),c.vu.delete(4),await to(c)}(this))})}),this.bu=new uE(s,r)}}async function to(t){if(An(t))for(const e of t.Ru)await e(!0)}async function vr(t){for(const e of t.Ru)await e(!1)}function sp(t,e){const n=z(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Bc(n)?$c(n):gs(n).Ko()&&Uc(n,e))}function rp(t,e){const n=z(t),s=gs(n);n.Au.delete(e),s.Ko()&&ip(n,e),n.Au.size===0&&(s.Ko()?s.jo():An(n)&&n.bu.set("Unknown"))}function Uc(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(V.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).su(e)}function ip(t,e){t.Vu.qt(e),gs(t).iu(e)}function $c(t){t.Vu=new p_({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.bu.gu()}function Bc(t){return An(t)&&!gs(t).Uo()&&t.Au.size>0}function An(t){return z(t).vu.size===0}function op(t){t.Vu=void 0}async function fE(t){t.Au.forEach((e,n)=>{Uc(t,e)})}async function dE(t,e){op(t),Bc(t)?(t.bu.Iu(e),$c(t)):t.bu.set("Unknown")}async function pE(t,e,n){if(t.bu.set("Online"),e instanceof Kd&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await pi(t,s)}else if(e instanceof Wr?t.Vu.Ht(e):e instanceof zd?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(V.min()))try{const s=await ep(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken($e.EMPTY_BYTE_STRING,l.snapshotVersion)),ip(r,a);const u=new Vt(l.target,a,c,l.sequenceNumber);Uc(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await pi(t,s)}}async function pi(t,e,n){if(!gr(e))throw e;t.vu.add(1),await vr(t),t.bu.set("Offline"),n||(n=()=>ep(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await to(t)})}function ap(t,e){return e().catch(n=>pi(t,n,e))}async function no(t){const e=z(t),n=Xt(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;gE(e);)try{const r=await Z_(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,mE(e,r)}catch(r){await pi(e,r)}cp(e)&&lp(e)}function gE(t){return An(t)&&t.Eu.length<10}function mE(t,e){t.Eu.push(e);const n=Xt(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function cp(t){return An(t)&&!Xt(t).Uo()&&t.Eu.length>0}function lp(t){Xt(t).start()}async function yE(t){Xt(t).hu()}async function vE(t){const e=Xt(t);for(const n of t.Eu)e.uu(n.mutations)}async function wE(t,e,n){const s=t.Eu.shift(),r=Rc.from(s,e,n);await ap(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await no(t)}async function _E(t,e){e&&Xt(t).ou&&await async function(n,s){if(r=s.code,h_(r)&&r!==y.ABORTED){const i=n.Eu.shift();Xt(n).Qo(),await ap(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await no(n)}var r}(t,e),cp(t)&&lp(t)}async function Uu(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=An(n);n.vu.add(3),await vr(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await to(n)}async function EE(t,e){const n=z(t);e?(n.vu.delete(2),await to(n)):e||(n.vu.add(2),await vr(n),n.bu.set("Unknown"))}function gs(t){return t.Su||(t.Su=function(e,n,s){const r=z(e);return r.fu(),new aE(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:fE.bind(null,t),ao:dE.bind(null,t),nu:pE.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Bc(t)?$c(t):t.bu.set("Unknown")):(await t.Su.stop(),op(t))})),t.Su}function Xt(t){return t.Du||(t.Du=function(e,n,s){const r=z(e);return r.fu(),new cE(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:yE.bind(null,t),ao:_E.bind(null,t),au:vE.bind(null,t),cu:wE.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await no(t)):(await t.Du.stop(),t.Eu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Vc{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Vc(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jc(t,e){if(Mt("AsyncQueue",`${e}: ${t}`),gr(t))return new N(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Kn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||M.comparator(n.key,s.key):(n,s)=>M.comparator(n.key,s.key),this.keyedMap=As(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new Kn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Kn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Kn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class $u{constructor(){this.Cu=new ue(M.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):F():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ss{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ss(e,n,Kn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class TE{constructor(){this.Nu=void 0,this.listeners=[]}}class IE{constructor(){this.queries=new ps(e=>Nd(e),Qi),this.onlineState="Unknown",this.ku=new Set}}async function bE(t,e){const n=z(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new TE),r)try{i.Nu=await n.onListen(s)}catch(o){const a=jc(o,`Initialization of query '${Ia(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&qc(n)}async function CE(t,e){const n=z(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function AE(t,e){const n=z(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&qc(n)}function SE(t,e,n){const s=z(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function qc(t){t.ku.forEach(e=>{e.next()})}class DE{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ss(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class up{constructor(e){this.key=e}}class hp{constructor(e){this.key=e}}class xE{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=G(),this.mutatedKeys=G(),this.tc=Rd(e),this.ec=new Kn(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new $u,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,f)=>{const p=r.get(u),g=Yi(this.query,f)?f:null,A=!!p&&this.mutatedKeys.has(p.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;p&&g?p.data.isEqual(g.data)?A!==I&&(s.track({type:3,doc:g}),S=!0):this.rc(p,g)||(s.track({type:2,doc:g}),S=!0,(c&&this.tc(g,c)>0||l&&this.tc(g,l)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),S=!0):p&&!g&&(s.track({type:1,doc:p}),S=!0,(c||l)&&(a=!0)),S&&(g?(o=o.add(g),i=I?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(f,p){const g=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return g(f)-g(p)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new ss(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new $u,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=G(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new hp(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new up(s))}),n}hc(e){this.Yu=e.ir,this.Zu=G();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return ss.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class NE{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class RE{constructor(e){this.key=e,this.fc=!1}}class kE{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ps(a=>Nd(a),Qi),this._c=new Map,this.mc=new Set,this.gc=new ue(M.comparator),this.yc=new Map,this.Ic=new Pc,this.Tc={},this.Ec=new Map,this.Ac=ns.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function OE(t,e){const n=qE(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await eE(n.localStore,Pt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await ME(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&sp(n.remoteStore,o)}return r}async function ME(t,e,n,s,r){t.Rc=(f,p,g)=>async function(A,I,S,q){let j=I.view.sc(S);j.zi&&(j=await Pu(A.localStore,I.query,!1).then(({documents:Ee})=>I.view.sc(Ee,j)));const H=q&&q.targetChanges.get(I.targetId),R=I.view.applyChanges(j,A.isPrimaryClient,H);return Vu(A,I.targetId,R.cc),R.snapshot}(t,f,p,g);const i=await Pu(t.localStore,e,!0),o=new xE(e,i.ir),a=o.sc(i.documents),c=yr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Vu(t,n,l.cc);const u=new NE(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function PE(t,e){const n=z(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Qi(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Da(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),rp(n.remoteStore,s.targetId),xa(n,s.targetId)}).catch(pr)):(xa(n,s.targetId),await Da(n.localStore,s.targetId,!0))}async function LE(t,e,n){const s=HE(t);try{const r=await function(i,o){const a=z(i),c=we.now(),l=o.reduce((p,g)=>p.add(g.key),G());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=Lt(),A=G();return a.Zi.getEntries(p,l).next(I=>{g=I,g.forEach((S,q)=>{q.isValidDocument()||(A=A.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(I=>{u=I;const S=[];for(const q of o){const j=o_(q,u.get(q.key).overlayedDocument);j!=null&&S.push(new Cn(q.key,j,Td(j.value.mapValue),Rt.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,S,o)}).next(I=>{f=I;const S=I.applyToLocalDocumentSet(u,A);return a.documentOverlayCache.saveOverlays(p,I.batchId,S)})}).then(()=>({batchId:f.batchId,changes:Od(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new ue(X)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await wr(s,r.changes),await no(s.remoteStore)}catch(r){const i=jc(r,"Failed to persist write");n.reject(i)}}async function fp(t,e){const n=z(t);try{const s=await X_(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(ae(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?ae(o.fc):r.removedDocuments.size>0&&(ae(o.fc),o.fc=!1))}),await wr(n,s,e)}catch(s){await pr(s)}}function Bu(t,e,n){const s=z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=z(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.Mu(o)&&(c=!0)}),c&&qc(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function FE(t,e,n){const s=z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new ue(M.comparator);o=o.insert(i,ke.newNoDocument(i,V.min()));const a=G().add(i),c=new Zi(V.min(),new Map,new ue(X),o,a);await fp(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),Hc(s)}else await Da(s.localStore,e,!1).then(()=>xa(s,e,n)).catch(pr)}async function UE(t,e){const n=z(t),s=e.batch.batchId;try{const r=await Y_(n.localStore,e);pp(n,s,null),dp(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await wr(n,r)}catch(r){await pr(r)}}async function $E(t,e,n){const s=z(t);try{const r=await function(i,o){const a=z(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ae(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);pp(s,e,n),dp(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await wr(s,r)}catch(r){await pr(r)}}function dp(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function pp(t,e,n){const s=z(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function xa(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||gp(t,s)})}function gp(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(rp(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Hc(t))}function Vu(t,e,n){for(const s of n)s instanceof up?(t.Ic.addReference(s.key,e),BE(t,s)):s instanceof hp?(O("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||gp(t,s.key)):F()}function BE(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(O("SyncEngine","New document in limbo: "+n),t.mc.add(s),Hc(t))}function Hc(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new M(oe.fromString(e)),s=t.Ac.next();t.yc.set(s,new RE(n)),t.gc=t.gc.insert(n,s),sp(t.remoteStore,new Vt(Pt(xc(n.path)),s,"TargetPurposeLimboResolution",Ic.ct))}}async function wr(t,e,n){const s=z(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Fc.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(c,f=>E.forEach(f.Fi,p=>l.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>E.forEach(f.Bi,p=>l.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!gr(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const p=l.Ji.get(f),g=p.snapshotVersion,A=p.withLastLimboFreeSnapshotVersion(g);l.Ji=l.Ji.insert(f,A)}}}(s.localStore,i))}async function VE(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await Zd(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new N(y.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await wr(n,s.er)}}function jE(t,e){const n=z(t),s=n.yc.get(e);if(s&&s.fc)return G().add(s.key);{let r=G();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function qE(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FE.bind(null,e),e.dc.nu=AE.bind(null,e.eventManager),e.dc.Pc=SE.bind(null,e.eventManager),e}function HE(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$E.bind(null,e),e}class ju{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=eo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Q_(this.persistence,new W_,e.initialUser,this.serializer)}createPersistence(e){return new z_(Lc.zs,this.serializer)}createSharedClientState(e){return new nE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Bu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=VE.bind(null,this.syncEngine),await EE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new IE}createDatastore(e){const n=eo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new oE(r));var r;return function(i,o,a,c){return new lE(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Bu(this.syncEngine,a,0),o=Fu.D()?new Fu:new sE,new hE(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new kE(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);O("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await vr(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class KE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Mt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class WE{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Re.UNAUTHENTICATED,this.clientId=wd.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{O("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(O("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=jc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ko(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Zd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await QE(t);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Uu(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Uu(e.remoteStore,i)),t._onlineComponents=e}function GE(t){return t.name==="FirebaseError"?t.code===y.FAILED_PRECONDITION||t.code===y.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function QE(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await ko(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!GE(n))throw n;Jn("Error using user provided cache. Falling back to memory cache: "+n),await ko(t,new ju)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await ko(t,new ju);return t._offlineComponents}async function mp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await qu(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await qu(t,new zE))),t._onlineComponents}function YE(t){return mp(t).then(e=>e.syncEngine)}async function Hu(t){const e=await mp(t),n=e.eventManager;return n.onListen=OE.bind(null,e.syncEngine),n.onUnlisten=PE.bind(null,e.syncEngine),n}/**
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
 */function yp(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const zu=new Map;/**
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
 */function vp(t,e,n){if(!n)throw new N(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XE(t,e,n,s){if(e===!0&&s===!0)throw new N(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ku(t){if(!M.isDocumentKey(t))throw new N(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wu(t){if(M.isDocumentKey(t))throw new N(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function so(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function Ls(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=so(t);throw new N(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Gu{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new N(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yp((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(y.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class ro{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new v0;switch(n.type){case"firstParty":return new T0(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zu.get(e);n&&(O("ComponentProvider","Removing Datastore"),zu.delete(e),n.terminate())}(this),Promise.resolve()}}function JE(t,e,n,s={}){var r;const i=(t=Ls(t,ro))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=Re.MOCK_USER;else{a=rf(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new N(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Re(l)}t._authCredentials=new w0(new vd(a,c))}}/**
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
 */class Ze{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}}class Sn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Sn(this.firestore,e,this._query)}}class Wt extends Sn{constructor(e,n,s){super(e,n,xc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new M(e))}withConverter(e){return new Wt(this.firestore,e,this._path)}}function wp(t,e,...n){if(t=ht(t),vp("collection","path",e),t instanceof ro){const s=oe.fromString(e,...n);return Wu(s),new Wt(t,null,s)}{if(!(t instanceof Ze||t instanceof Wt))throw new N(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return Wu(s),new Wt(t.firestore,null,s)}}function ZE(t,e,...n){if(t=ht(t),arguments.length===1&&(e=wd.A()),vp("doc","path",e),t instanceof ro){const s=oe.fromString(e,...n);return Ku(s),new Ze(t,null,new M(s))}{if(!(t instanceof Ze||t instanceof Wt))throw new N(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return Ku(s),new Ze(t.firestore,t instanceof Wt?t.converter:null,new M(s))}}/**
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
 */class eT{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new tp(this,"async_queue_retry"),this.Xc=()=>{const n=Ro();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Ro();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Ro();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new mn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!gr(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Mt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=Vc.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&F()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Qu(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class gi extends ro{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new eT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ep(this),this._firestoreClient.terminate()}}function tT(t,e){const n=typeof t=="object"?t:df(),s=typeof t=="string"?t:e||"(default)",r=uf(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=nf("firestore");i&&JE(r,...i)}return r}function _p(t){return t._firestoreClient||Ep(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ep(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new M0(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,yp(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new WE(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs($e.fromBase64String(e))}catch(n){throw new N(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rs($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class zc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Tp{constructor(e){this._methodName=e}}/**
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
 */class Kc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */const nT=/^__.*__$/;class sT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Cn(e,this.data,this.fieldMask,n,this.fieldTransforms):new mr(e,this.data,n,this.fieldTransforms)}}function Ip(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Wc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Wc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return mi(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Ip(this.ca)&&nT.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class rT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||eo(e)}ya(e,n,s,r=!1){return new Wc({ca:e,methodName:n,ga:s,path:Me.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bp(t){const e=t._freezeSettings(),n=eo(t._databaseId);return new rT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iT(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);Sp("Data must be an object, but it was:",o,s);const a=Cp(s,o);let c,l;if(i.merge)c=new at(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=aT(e,f,n);if(!o.contains(p))throw new N(y.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);lT(u,p)||u.push(p)}c=new at(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new sT(new nt(a),c,l)}function oT(t,e,n,s=!1){return Gc(n,t.ya(s?4:3,e))}function Gc(t,e){if(Ap(t=ht(t)))return Sp("Unsupported field value:",e,t),Cp(t,e);if(t instanceof Tp)return function(n,s){if(!Ip(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Gc(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=ht(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return e_(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=we.fromDate(n);return{timestampValue:di(s.serializer,r)}}if(n instanceof we){const r=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:di(s.serializer,r)}}if(n instanceof Kc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof rs)return{bytesValue:Wd(s.serializer,n._byteString)};if(n instanceof Ze){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Mc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${so(n)}`)}(t,e)}function Cp(t,e){const n={};return _d(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(t,(s,r)=>{const i=Gc(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Ap(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof Kc||t instanceof rs||t instanceof Ze||t instanceof Tp)}function Sp(t,e,n){if(!Ap(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=so(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function aT(t,e,n){if((e=ht(e))instanceof zc)return e._internalPath;if(typeof e=="string")return Dp(t,e);throw mi("Field path arguments must be of type string or ",t,!1,void 0,n)}const cT=new RegExp("[~\\*/\\[\\]]");function Dp(t,e,n){if(e.search(cT)>=0)throw mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zc(...e.split("."))._internalPath}catch{throw mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mi(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new N(y.INVALID_ARGUMENT,a+t+c)}function lT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class xp{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uT extends xp{data(){return super.data()}}function Qc(t,e){return typeof e=="string"?Dp(t,e):e instanceof zc?e._internalPath:e._delegate._internalPath}/**
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
 */function hT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yc{}class Np extends Yc{}function fT(t,e,...n){let s=[];e instanceof Yc&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Jc).length,o=r.filter(a=>a instanceof Xc).length;if(i>1||i>0&&o>0)throw new N(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Xc extends Np{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Xc(e,n,s)}_apply(e){const n=this._parse(e);return Rp(e._query,n),new Sn(e.firestore,e.converter,Ea(e._query,n))}_parse(e){const n=bp(e.firestore);return function(r,i,o,a,c,l,u){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new N(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Xu(u,l);const p=[];for(const g of u)p.push(Yu(a,r,g));f={arrayValue:{values:p}}}else f=Yu(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Xu(u,l),f=oT(o,i,u,l==="in"||l==="not-in");return ve.create(c,l,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Jc extends Yc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Jc(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:dt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Rp(i,a),i=Ea(i,a)}(e._query,n),new Sn(e.firestore,e.converter,Ea(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zc extends Np{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Zc(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new N(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Hn(r,i);return function(a,c){if(Nc(a)===null){const l=Gi(a);l!==null&&kp(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Sn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new ds(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function dT(t,e="asc"){const n=e,s=Qc("orderBy",t);return Zc._create(s,n)}function Yu(t,e,n){if(typeof(n=ht(n))=="string"){if(n==="")throw new N(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xd(e)&&n.indexOf("/")!==-1)throw new N(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(oe.fromString(n));if(!M.isDocumentKey(s))throw new N(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return vu(t,new M(s))}if(n instanceof Ze)return vu(t,n._key);throw new N(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${so(n)}.`)}function Xu(t,e){if(!Array.isArray(t)||t.length===0)throw new N(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rp(t,e){if(e.isInequality()){const s=Gi(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new N(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Nc(t);i!==null&&kp(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function kp(t,e,n){if(!n.isEqual(e))throw new N(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class pT{convertValue(e,n="none"){switch(En(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_n(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return fs(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Kc(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Cc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(er(e));default:return null}}convertTimestamp(e){const n=Yt(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=oe.fromString(e);ae(Jd(s));const r=new tr(s.get(1),s.get(3)),i=new M(s.popFirst(5));return r.isEqual(n)||Mt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function gT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Ds{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Op extends xp{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Qc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Gr extends Op{data(e={}){return super.data(e)}}class mT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ds(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Gr(this._firestore,this._userDataWriter,s.key,s,new Ds(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Gr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ds(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Gr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ds(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:yT(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}class Mp extends pT{constructor(e){super(),this.firestore=e}convertBytes(e){return new rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function vT(t,e){const n=Ls(t.firestore,gi),s=ZE(t),r=gT(t.converter,e);return _T(n,[iT(bp(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Rt.exists(!1))]).then(()=>s)}function wT(t,...e){var n,s,r;t=ht(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Qu(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Qu(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,l,u;if(t instanceof Ze)l=Ls(t.firestore,gi),u=xc(t._key.path),c={next:f=>{e[o]&&e[o](ET(l,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Ls(t,Sn);l=Ls(f.firestore,gi),u=f._query;const p=new Mp(l);c={next:g=>{e[o]&&e[o](new mT(l,p,f,g))},error:e[o+1],complete:e[o+2]},hT(t._query)}return function(f,p,g,A){const I=new KE(A),S=new DE(p,I,g);return f.asyncQueue.enqueueAndForget(async()=>bE(await Hu(f),S)),()=>{I.Dc(),f.asyncQueue.enqueueAndForget(async()=>CE(await Hu(f),S))}}(_p(l),u,a,c)}function _T(t,e){return function(n,s){const r=new mn;return n.asyncQueue.enqueueAndForget(async()=>LE(await YE(n),s,r)),r.promise}(_p(t),e)}function ET(t,e,n){const s=n.docs.get(e._key),r=new Mp(t);return new Op(t,r,e._key,s,new Ds(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){hs=n})(hf),qs(new Yn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new gi(new _0(n.getProvider("auth-internal")),new b0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Kt(du,"3.12.2",t),Kt(du,"3.12.2","esm2017")})();/**
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
 */const Pp="firebasestorage.googleapis.com",Lp="storageBucket",TT=2*60*1e3,IT=10*60*1e3;/**
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
 */class pe extends In{constructor(e,n,s=0){super(Oo(e),`Firebase Storage: ${n} (${Oo(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Oo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var de;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(de||(de={}));function Oo(t){return"storage/"+t}function el(){const t="An unknown error occurred, please check the error payload for server response.";return new pe(de.UNKNOWN,t)}function bT(t){return new pe(de.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function CT(t){return new pe(de.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function AT(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new pe(de.UNAUTHENTICATED,t)}function ST(){return new pe(de.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function DT(t){return new pe(de.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function xT(){return new pe(de.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function NT(){return new pe(de.CANCELED,"User canceled the upload/download.")}function RT(t){return new pe(de.INVALID_URL,"Invalid URL '"+t+"'.")}function kT(t){return new pe(de.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function OT(){return new pe(de.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Lp+"' property when initializing the app?")}function MT(){return new pe(de.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PT(){return new pe(de.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function LT(t){return new pe(de.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Na(t){return new pe(de.INVALID_ARGUMENT,t)}function Fp(){return new pe(de.APP_DELETED,"The Firebase app was deleted.")}function FT(t){return new pe(de.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Fs(t,e){return new pe(de.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Es(t){throw new pe(de.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Je{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Je.makeFromUrl(e,n)}catch{return new Je(e,"")}if(s.path==="")return s;throw kT(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${u}/b/${r}/o${p}`,"i"),A={bucket:1,path:3},I=n===Pp?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",q=new RegExp(`^https?://${I}/${r}/${S}`,"i"),H=[{regex:a,indices:c,postModify:i},{regex:g,indices:A,postModify:l},{regex:q,indices:{bucket:1,path:2},postModify:l}];for(let R=0;R<H.length;R++){const Ee=H[R],Qe=Ee.regex.exec(e);if(Qe){const At=Qe[Ee.indices.bucket];let Ye=Qe[Ee.indices.path];Ye||(Ye=""),s=new Je(At,Ye),Ee.postModify(s);break}}if(s==null)throw RT(e);return s}}class UT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function $T(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...S){l||(l=!0,e.apply(null,S))}function f(S){r=setTimeout(()=>{r=null,t(g,c())},S)}function p(){i&&clearTimeout(i)}function g(S,...q){if(l){p();return}if(S){p(),u.call(null,S,...q);return}if(c()||o){p(),u.call(null,S,...q);return}s<64&&(s*=2);let H;a===1?(a=2,H=0):H=(s+Math.random())*1e3,f(H)}let A=!1;function I(S){A||(A=!0,p(),!l&&(r!==null?(S||(a=2),clearTimeout(r),f(0)):S||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function BT(t){t(!1)}/**
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
 */function VT(t){return t!==void 0}function jT(t){return typeof t=="object"&&!Array.isArray(t)}function tl(t){return typeof t=="string"||t instanceof String}function Ju(t){return nl()&&t instanceof Blob}function nl(){return typeof Blob<"u"&&!Jy()}function Zu(t,e,n,s){if(s<e)throw Na(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Na(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function sl(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Up(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var yn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yn||(yn={}));/**
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
 */function qT(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class HT{constructor(e,n,s,r,i,o,a,c,l,u,f,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,A)=>{this.resolve_=g,this.reject_=A,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new $r(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===yn.NO_ERROR,c=i.getStatus();if(!a||qT(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===yn.ABORT;s(!1,new $r(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new $r(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());VT(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=el();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Fp():NT();o(c)}else{const c=xT();o(c)}};this.canceled_?n(!1,new $r(!1,null,!0)):this.backoffId_=$T(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $r{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function zT(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function KT(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function WT(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GT(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function QT(t,e,n,s,r,i,o=!0){const a=Up(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return WT(l,e),zT(l,n),KT(l,i),GT(l,s),new HT(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function YT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function XT(...t){const e=YT();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(nl())return new Blob(t);throw new pe(de.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function JT(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function ZT(t){if(typeof atob>"u")throw LT("base-64");return atob(t)}/**
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
 */const Tt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Mo{constructor(e,n){this.data=e,this.contentType=n||null}}function e1(t,e){switch(t){case Tt.RAW:return new Mo($p(e));case Tt.BASE64:case Tt.BASE64URL:return new Mo(Bp(t,e));case Tt.DATA_URL:return new Mo(n1(e),s1(e))}throw el()}function $p(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function t1(t){let e;try{e=decodeURIComponent(t)}catch{throw Fs(Tt.DATA_URL,"Malformed data URL.")}return $p(e)}function Bp(t,e){switch(t){case Tt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Fs(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Tt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Fs(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ZT(e)}catch(r){throw r.message.includes("polyfill")?r:Fs(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Vp{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Fs(Tt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=r1(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function n1(t){const e=new Vp(t);return e.base64?Bp(Tt.BASE64,e.rest):t1(e.rest)}function s1(t){return new Vp(t).contentType}function r1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Bt{constructor(e,n){let s=0,r="";Ju(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ju(this.data_)){const s=this.data_,r=JT(s,e,n);return r===null?null:new Bt(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Bt(s,!0)}}static getBlob(...e){if(nl()){const n=e.map(s=>s instanceof Bt?s.data_:s);return new Bt(XT.apply(null,n))}else{const n=e.map(o=>tl(o)?e1(Tt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Bt(r,!0)}}uploadData(){return this.data_}}/**
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
 */function jp(t){let e;try{e=JSON.parse(t)}catch{return null}return jT(e)?e:null}/**
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
 */function i1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function o1(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function qp(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function a1(t,e){return e}class Ve{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||a1}}let Br=null;function c1(t){return!tl(t)||t.length<2?t:qp(t)}function Hp(){if(Br)return Br;const t=[];t.push(new Ve("bucket")),t.push(new Ve("generation")),t.push(new Ve("metageneration")),t.push(new Ve("name","fullPath",!0));function e(i,o){return c1(o)}const n=new Ve("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Ve("size");return r.xform=s,t.push(r),t.push(new Ve("timeCreated")),t.push(new Ve("updated")),t.push(new Ve("md5Hash",null,!0)),t.push(new Ve("cacheControl",null,!0)),t.push(new Ve("contentDisposition",null,!0)),t.push(new Ve("contentEncoding",null,!0)),t.push(new Ve("contentLanguage",null,!0)),t.push(new Ve("contentType",null,!0)),t.push(new Ve("metadata","customMetadata",!0)),Br=t,Br}function l1(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Je(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function u1(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return l1(s,t),s}function zp(t,e,n){const s=jp(e);return s===null?null:u1(t,s,n)}function h1(t,e,n,s){const r=jp(e);if(r===null||!tl(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,f=t.fullPath,p="/b/"+o(u)+"/o/"+o(f),g=sl(p,n,s),A=Up({alt:"media",token:l});return g+A})[0]}function f1(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Kp{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Wp(t){if(!t)throw el()}function d1(t,e){function n(s,r){const i=zp(t,r,e);return Wp(i!==null),i}return n}function p1(t,e){function n(s,r){const i=zp(t,r,e);return Wp(i!==null),h1(i,r,t.host,t._protocol)}return n}function Gp(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=ST():r=AT():n.getStatus()===402?r=CT(t.bucket):n.getStatus()===403?r=DT(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function g1(t){const e=Gp(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=bT(t.path)),i.serverResponse=r.serverResponse,i}return n}function m1(t,e,n){const s=e.fullServerUrl(),r=sl(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Kp(r,i,p1(t,n),o);return a.errorHandler=g1(e),a}function y1(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function v1(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=y1(null,e)),s}function w1(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let H="";for(let R=0;R<2;R++)H=H+Math.random().toString().slice(2);return H}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=v1(e,s,r),u=f1(l,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,p=`\r
--`+c+"--",g=Bt.getBlob(f,s,p);if(g===null)throw MT();const A={name:l.fullPath},I=sl(i,t.host,t._protocol),S="POST",q=t.maxUploadRetryTime,j=new Kp(I,S,d1(t,n),q);return j.urlParams=A,j.headers=o,j.body=g.uploadData(),j.errorHandler=Gp(e),j}class _1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=yn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=yn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=yn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Es("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Es("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Es("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Es("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Es("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class E1 extends _1{initXhr(){this.xhr_.responseType="text"}}function Qp(){return new E1}/**
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
 */class Tn{constructor(e,n){this._service=e,n instanceof Je?this._location=n:this._location=Je.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Tn(e,n)}get root(){const e=new Je(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qp(this._location.path)}get storage(){return this._service}get parent(){const e=i1(this._location.path);if(e===null)return null;const n=new Je(this._location.bucket,e);return new Tn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw FT(e)}}function T1(t,e,n){t._throwIfRoot("uploadBytes");const s=w1(t.storage,t._location,Hp(),new Bt(e,!0),n);return t.storage.makeRequestWithTokens(s,Qp).then(r=>({metadata:r,ref:t}))}function I1(t){t._throwIfRoot("getDownloadURL");const e=m1(t.storage,t._location,Hp());return t.storage.makeRequestWithTokens(e,Qp).then(n=>{if(n===null)throw PT();return n})}function b1(t,e){const n=o1(t._location.path,e),s=new Je(t._location.bucket,n);return new Tn(t.storage,s)}/**
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
 */function C1(t){return/^[A-Za-z]+:\/\//.test(t)}function A1(t,e){return new Tn(t,e)}function Yp(t,e){if(t instanceof rl){const n=t;if(n._bucket==null)throw OT();const s=new Tn(n,n._bucket);return e!=null?Yp(s,e):s}else return e!==void 0?b1(t,e):t}function S1(t,e){if(e&&C1(e)){if(t instanceof rl)return A1(t,e);throw Na("To use ref(service, url), the first argument must be a Storage instance.")}else return Yp(t,e)}function eh(t,e){const n=e==null?void 0:e[Lp];return n==null?null:Je.makeFromBucketSpec(n,t)}function D1(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:rf(r,t.app.options.projectId))}class rl{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Pp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TT,this._maxUploadRetryTime=IT,this._requests=new Set,r!=null?this._bucket=Je.makeFromBucketSpec(r,this._host):this._bucket=eh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Je.makeFromBucketSpec(this._url,e):this._bucket=eh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tn(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new UT(Fp());{const o=QT(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const th="@firebase/storage",nh="0.11.2";/**
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
 */const Xp="storage";function x1(t,e,n){return t=ht(t),T1(t,e,n)}function N1(t){return t=ht(t),I1(t)}function R1(t,e){return t=ht(t),S1(t,e)}function k1(t=df(),e){t=ht(t);const s=uf(t,Xp).getImmediate({identifier:e}),r=nf("storage");return r&&O1(s,...r),s}function O1(t,e,n,s={}){D1(t,e,n,s)}function M1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new rl(n,s,r,e,hf)}function P1(){qs(new Yn(Xp,M1,"PUBLIC").setMultipleInstances(!0)),Kt(th,nh,""),Kt(th,nh,"esm2017")}P1();const L1={apiKey:"AIzaSyDyW77823MSajkNaSQ6fw9-u8JtbPD_D-E",authDomain:"fir-testing-53e54.firebaseapp.com",projectId:"fir-testing-53e54",storageBucket:"fir-testing-53e54.appspot.com",messagingSenderId:"530300578305",appId:"1:530300578305:web:594a5b6b3f79a5ad17ee00"};ff(L1);const Jp=tT(),F1=k1();const U1={components:{Button:Zh},emits:["close"],data(){return{name:null,winningYears:null}},methods:{async addTeam(){this.name=this.name.trim().substring(0,1).toUpperCase()+this.name.trim().substring(1).toLowerCase(),this.winningYears=this.winningYears.split(", "),this.winningYears=this.winningYears.map(r=>Number.parseInt(r));const t=this.$refs.inputFile.files[0],e=R1(F1,t.name);await x1(e,t);const n=await N1(e),s=wp(Jp,"teams");await vT(s,{logo:n,name:this.name,winningYears:this.winningYears}),this.name="",this.winningYears="",this.$refs.addFrom.reset(),this.$emit("close")}}},io=t=>(Ai("data-v-3866480a"),t=t(),Si(),t),$1=io(()=>ce("h2",null,"Add a new team",-1)),B1={class:"input-field"},V1=io(()=>ce("label",{for:"name"},"Name:",-1)),j1={class:"input-field"},q1=io(()=>ce("label",{for:"winningYears"},"Winning Years:",-1)),H1={class:"input-field-logo"},z1=io(()=>ce("label",{for:"logo"},"Logo:",-1)),K1={ref:"inputFile",type:"file",accept:".webp",id:"logo",required:""};function W1(t,e,n,s,r,i){const o=On("Button");return ut(),Nt(We,null,[$1,ce("form",{onSubmit:e[2]||(e[2]=Jh((...a)=>i.addTeam&&i.addTeam(...a),["prevent"])),ref:"addFrom"},[ce("div",B1,[zo(ce("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.name=a),id:"name",type:"text",required:"",placeholder:" "},null,512),[[Jo,r.name]]),V1]),ce("div",j1,[zo(ce("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>r.winningYears=a),id:"winningYears",type:"text",pattern:"\\d{4}(,\\s\\d{4})*",title:"e.g. 2022, 2023",required:"",placeholder:" "},null,512),[[Jo,r.winningYears]]),q1]),ce("div",H1,[z1,ce("input",K1,null,512)]),qe(o,{label:"add"})],544)],64)}const G1=cs(U1,[["render",W1],["__scopeId","data-v-3866480a"]]);const Q1={},Y1={class:"modal"};function X1(t,e,n,s,r,i){return ut(),Nt("dialog",Y1,[Im(t.$slots,"default",{},void 0,!0)])}const J1=cs(Q1,[["render",X1],["__scopeId","data-v-cacaff91"]]);function Z1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var il={};Object.defineProperty(il,"__esModule",{value:!0});var eI=function(){function t(e,n){for(var s=0;s<n.length;s++){var r=n[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();function tI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var nI=function(){function t(){tI(this,t),this.view=document.body.appendChild(document.createElement("div")),this.view.classList.add("snackbar"),this.isActive=!1,this.queue=[],this.gap=250,this.duration=5e3}return eI(t,[{key:"show",value:function(n){var s=this;if(this.isActive){this.queue.push(n);return}this.isActive=!0,this.view.textContent=n,this.view.classList.add("snackbar--visible"),this.queue.shift(),setTimeout(function(){return s.hide()},this.duration)}},{key:"hide",value:function(){var n=this;this.isActive=!1,this.view.classList.remove("snackbar--visible"),this.queue.length&&setTimeout(function(){return n.show(n.queue[0])},this.gap)}}]),t}();il.default=nI;var sI=il,rI=iI(sI);function iI(t){return t&&t.__esModule?t:{default:t}}var Po=void 0;function oI(){return Po||(Po=new rI.default),Po}var aI=oI();const cI=Z1(aI);const lI={components:{Button:Zh,Team:Ly,SearchBar:Vy,AddForm:G1,Modal:J1},data(){return{allTeams:[],src:null,name:null,years:null,result:!1,teamName:"",isOpen:!1}},mounted(){let t=wp(Jp,"teams");t=fT(t,dT("name")),wT(t,e=>{this.allTeams=[],e.docs.forEach(n=>{this.allTeams.push(n.data())})})},methods:{reset(){this.$refs.searchBar.$data.teamName="",this.teamName=""},handleTeamName(t){this.teamName=t},addTeam(){this.$refs.addForm.$el.showModal()},closeAddFrom(){this.$refs.addForm.$el.close(),cI.show("The team has been added successfully!")}},computed:{filteredTeam(){return this.allTeams.filter(t=>t.name.toLowerCase().includes(this.teamName.trim().toLowerCase()))}}},ol=t=>(Ai("data-v-91ec0aec"),t=t(),Si(),t),uI={class:"container"},hI=ol(()=>ce("h1",null,"teams-titles",-1)),fI=ol(()=>ce("p",null,[ce("strong",null,"Built using:"),Qh(" Vue, HTML, CSS, Firestore, Snackbar.js, Vite ")],-1)),dI=ol(()=>ce("p",null," This app allows users to view the winning history of top European football teams in the UEFA Champions League. Users can access the Champions League winning history of teams such as Real Madrid, Barcelona, Manchester United, Chelsea, Liverpool, Bayern Munich, AC Milan, Inter Milan, Juventus, and Ajax. Additionally, the system provides functionality for users to add new teams, remove existing teams, and update the winning history of teams. ",-1)),pI={class:"app-functions"},gI={class:"all-teams"};function mI(t,e,n,s,r,i){const o=On("SearchBar"),a=On("Button"),c=On("Team"),l=On("AddForm"),u=On("Modal");return ut(),Nt("div",uI,[hI,fI,dI,ce("div",pI,[qe(o,{ref:"searchBar",onUpdate:i.handleTeamName},null,8,["onUpdate"]),qe(a,{label:"add a new team",onClick:i.addTeam},null,8,["onClick"]),qe(a,{label:"reset",type:"reset",onClick:i.reset},null,8,["onClick"])]),ce("div",gI,[(ut(!0),Nt(We,null,Ph(i.filteredTeam,(f,p)=>(ut(),Kh(c,{key:p,src:f.logo,name:f.name,winningYears:f.winningYears},null,8,["src","name","winningYears"]))),128))]),qe(u,{ref:"addForm"},{default:Dh(()=>[qe(l,{onClose:i.closeAddFrom},null,8,["onClose"])]),_:1},512)])}const yI=cs(lI,[["render",mI],["__scopeId","data-v-91ec0aec"]]);Ay(yI).mount("#app");
