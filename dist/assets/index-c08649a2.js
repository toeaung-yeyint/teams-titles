(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function fa(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const rt={},bn=[],ne=()=>{},Kd=()=>!1,Hd=/^on[^a-z]/,ii=e=>Hd.test(e),da=e=>e.startsWith("onUpdate:"),bt=Object.assign,pa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Wd=Object.prototype.hasOwnProperty,Q=(e,t)=>Wd.call(e,t),V=Array.isArray,An=e=>oi(e)==="[object Map]",yu=e=>oi(e)==="[object Set]",q=e=>typeof e=="function",vt=e=>typeof e=="string",ga=e=>typeof e=="symbol",lt=e=>e!==null&&typeof e=="object",vu=e=>lt(e)&&q(e.then)&&q(e.catch),wu=Object.prototype.toString,oi=e=>wu.call(e),Gd=e=>oi(e).slice(8,-1),Eu=e=>oi(e)==="[object Object]",ma=e=>vt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,br=fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ai=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qd=/-(\w)/g,ge=ai(e=>e.replace(Qd,(t,n)=>n?n.toUpperCase():"")),Yd=/\B([A-Z])/g,Wn=ai(e=>e.replace(Yd,"-$1").toLowerCase()),ci=ai(e=>e.charAt(0).toUpperCase()+e.slice(1)),Xi=ai(e=>e?`on${ci(e)}`:""),Fr=(e,t)=>!Object.is(e,t),Ar=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Lr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},_o=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Pc;const To=()=>Pc||(Pc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ya(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=vt(s)?tp(s):ya(s);if(r)for(const i in r)t[i]=r[i]}return t}else{if(vt(e))return e;if(lt(e))return e}}const Xd=/;(?![^(]*\))/g,Jd=/:([^]+)/,Zd=/\/\*[^]*?\*\//g;function tp(e){const t={};return e.replace(Zd,"").split(Xd).forEach(n=>{if(n){const s=n.split(Jd);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function li(e){let t="";if(vt(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const s=li(e[n]);s&&(t+=s+" ")}else if(lt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ep="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",np=fa(ep);function _u(e){return!!e||e===""}const Io=e=>vt(e)?e:e==null?"":V(e)||lt(e)&&(e.toString===wu||!q(e.toString))?JSON.stringify(e,Tu,2):String(e),Tu=(e,t)=>t&&t.__v_isRef?Tu(e,t.value):An(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:yu(t)?{[`Set(${t.size})`]:[...t.values()]}:lt(t)&&!V(t)&&!Eu(t)?String(t):t;let Jt;class sp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Jt,!t&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Jt;try{return Jt=this,t()}finally{Jt=n}}}on(){Jt=this}off(){Jt=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function rp(e,t=Jt){t&&t.active&&t.effects.push(e)}function ip(){return Jt}const va=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Iu=e=>(e.w&Ve)>0,Cu=e=>(e.n&Ve)>0,op=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ve},ap=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Iu(r)&&!Cu(r)?r.delete(e):t[n++]=r,r.w&=~Ve,r.n&=~Ve}t.length=n}},Co=new WeakMap;let ls=0,Ve=1;const So=30;let Zt;const rn=Symbol(""),bo=Symbol("");class wa{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,rp(this,s)}run(){if(!this.active)return this.fn();let t=Zt,n=Re;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Zt,Zt=this,Re=!0,Ve=1<<++ls,ls<=So?op(this):Fc(this),this.fn()}finally{ls<=So&&ap(this),Ve=1<<--ls,Zt=this.parent,Re=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Zt===this?this.deferStop=!0:this.active&&(Fc(this),this.onStop&&this.onStop(),this.active=!1)}}function Fc(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Re=!0;const Su=[];function Gn(){Su.push(Re),Re=!1}function Qn(){const e=Su.pop();Re=e===void 0?!0:e}function zt(e,t,n){if(Re&&Zt){let s=Co.get(e);s||Co.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=va()),bu(r)}}function bu(e,t){let n=!1;ls<=So?Cu(e)||(e.n|=Ve,n=!Iu(e)):n=!e.has(Zt),n&&(e.add(Zt),Zt.deps.push(e))}function Se(e,t,n,s,r,i){const o=Co.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&V(e)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":V(e)?ma(n)&&a.push(o.get("length")):(a.push(o.get(rn)),An(e)&&a.push(o.get(bo)));break;case"delete":V(e)||(a.push(o.get(rn)),An(e)&&a.push(o.get(bo)));break;case"set":An(e)&&a.push(o.get(rn));break}if(a.length===1)a[0]&&Ao(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ao(va(c))}}function Ao(e,t){const n=V(e)?e:[...e];for(const s of n)s.computed&&Lc(s);for(const s of n)s.computed||Lc(s)}function Lc(e,t){(e!==Zt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const cp=fa("__proto__,__v_isRef,__isVue"),Au=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ga)),lp=Ea(),up=Ea(!1,!0),hp=Ea(!0),$c=fp();function fp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=Z(this);for(let i=0,o=this.length;i<o;i++)zt(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Gn();const s=Z(this)[t].apply(this,n);return Qn(),s}}),e}function dp(e){const t=Z(this);return zt(t,"has",e),t.hasOwnProperty(e)}function Ea(e=!1,t=!1){return function(s,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&i===(e?t?xp:Mu:t?ku:Nu).get(s))return s;const o=V(s);if(!e){if(o&&Q($c,r))return Reflect.get($c,r,i);if(r==="hasOwnProperty")return dp}const a=Reflect.get(s,r,i);return(ga(r)?Au.has(r):cp(r))||(e||zt(s,"get",r),t)?a:Ut(a)?o&&ma(r)?a:a.value:lt(a)?e?Ou(a):Ia(a):a}}const pp=Du(),gp=Du(!0);function Du(e=!1){return function(n,s,r,i){let o=n[s];if(Ss(o)&&Ut(o)&&!Ut(r))return!1;if(!e&&(!Do(r)&&!Ss(r)&&(o=Z(o),r=Z(r)),!V(n)&&Ut(o)&&!Ut(r)))return o.value=r,!0;const a=V(n)&&ma(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,r,i);return n===Z(i)&&(a?Fr(r,o)&&Se(n,"set",s,r):Se(n,"add",s,r)),c}}function mp(e,t){const n=Q(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Se(e,"delete",t,void 0),s}function yp(e,t){const n=Reflect.has(e,t);return(!ga(t)||!Au.has(t))&&zt(e,"has",t),n}function vp(e){return zt(e,"iterate",V(e)?"length":rn),Reflect.ownKeys(e)}const xu={get:lp,set:pp,deleteProperty:mp,has:yp,ownKeys:vp},wp={get:hp,set(e,t){return!0},deleteProperty(e,t){return!0}},Ep=bt({},xu,{get:up,set:gp}),_a=e=>e,ui=e=>Reflect.getPrototypeOf(e);function hr(e,t,n=!1,s=!1){e=e.__v_raw;const r=Z(e),i=Z(t);n||(t!==i&&zt(r,"get",t),zt(r,"get",i));const{has:o}=ui(r),a=s?_a:n?ba:Sa;if(o.call(r,t))return a(e.get(t));if(o.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function fr(e,t=!1){const n=this.__v_raw,s=Z(n),r=Z(e);return t||(e!==r&&zt(s,"has",e),zt(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function dr(e,t=!1){return e=e.__v_raw,!t&&zt(Z(e),"iterate",rn),Reflect.get(e,"size",e)}function Vc(e){e=Z(e);const t=Z(this);return ui(t).has.call(t,e)||(t.add(e),Se(t,"add",e,e)),this}function Uc(e,t){t=Z(t);const n=Z(this),{has:s,get:r}=ui(n);let i=s.call(n,e);i||(e=Z(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?Fr(t,o)&&Se(n,"set",e,t):Se(n,"add",e,t),this}function Bc(e){const t=Z(this),{has:n,get:s}=ui(t);let r=n.call(t,e);r||(e=Z(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&Se(t,"delete",e,void 0),i}function jc(){const e=Z(this),t=e.size!==0,n=e.clear();return t&&Se(e,"clear",void 0,void 0),n}function pr(e,t){return function(s,r){const i=this,o=i.__v_raw,a=Z(o),c=t?_a:e?ba:Sa;return!e&&zt(a,"iterate",rn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function gr(e,t,n){return function(...s){const r=this.__v_raw,i=Z(r),o=An(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=r[e](...s),u=n?_a:t?ba:Sa;return!t&&zt(i,"iterate",c?bo:rn),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function ke(e){return function(...t){return e==="delete"?!1:this}}function _p(){const e={get(i){return hr(this,i)},get size(){return dr(this)},has:fr,add:Vc,set:Uc,delete:Bc,clear:jc,forEach:pr(!1,!1)},t={get(i){return hr(this,i,!1,!0)},get size(){return dr(this)},has:fr,add:Vc,set:Uc,delete:Bc,clear:jc,forEach:pr(!1,!0)},n={get(i){return hr(this,i,!0)},get size(){return dr(this,!0)},has(i){return fr.call(this,i,!0)},add:ke("add"),set:ke("set"),delete:ke("delete"),clear:ke("clear"),forEach:pr(!0,!1)},s={get(i){return hr(this,i,!0,!0)},get size(){return dr(this,!0)},has(i){return fr.call(this,i,!0)},add:ke("add"),set:ke("set"),delete:ke("delete"),clear:ke("clear"),forEach:pr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=gr(i,!1,!1),n[i]=gr(i,!0,!1),t[i]=gr(i,!1,!0),s[i]=gr(i,!0,!0)}),[e,n,t,s]}const[Tp,Ip,Cp,Sp]=_p();function Ta(e,t){const n=t?e?Sp:Cp:e?Ip:Tp;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const bp={get:Ta(!1,!1)},Ap={get:Ta(!1,!0)},Dp={get:Ta(!0,!1)},Nu=new WeakMap,ku=new WeakMap,Mu=new WeakMap,xp=new WeakMap;function Np(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kp(e){return e.__v_skip||!Object.isExtensible(e)?0:Np(Gd(e))}function Ia(e){return Ss(e)?e:Ca(e,!1,xu,bp,Nu)}function Mp(e){return Ca(e,!1,Ep,Ap,ku)}function Ou(e){return Ca(e,!0,wp,Dp,Mu)}function Ca(e,t,n,s,r){if(!lt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=kp(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function Dn(e){return Ss(e)?Dn(e.__v_raw):!!(e&&e.__v_isReactive)}function Ss(e){return!!(e&&e.__v_isReadonly)}function Do(e){return!!(e&&e.__v_isShallow)}function Ru(e){return Dn(e)||Ss(e)}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function Pu(e){return Lr(e,"__v_skip",!0),e}const Sa=e=>lt(e)?Ia(e):e,ba=e=>lt(e)?Ou(e):e;function Op(e){Re&&Zt&&(e=Z(e),bu(e.dep||(e.dep=va())))}function Rp(e,t){e=Z(e);const n=e.dep;n&&Ao(n)}function Ut(e){return!!(e&&e.__v_isRef===!0)}function Pp(e){return Ut(e)?e.value:e}const Fp={get:(e,t,n)=>Pp(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Ut(r)&&!Ut(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Fu(e){return Dn(e)?e:new Proxy(e,Fp)}class Lp{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new wa(t,()=>{this._dirty||(this._dirty=!0,Rp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=Z(this);return Op(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function $p(e,t,n=!1){let s,r;const i=q(e);return i?(s=e,r=ne):(s=e.get,r=e.set),new Lp(s,r,i||!r,n)}function Pe(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){hi(i,t,n)}return r}function se(e,t,n,s){if(q(e)){const i=Pe(e,t,n,s);return i&&vu(i)&&i.catch(o=>{hi(o,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(se(e[i],t,n,s));return r}function hi(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Pe(c,null,10,[e,o,a]);return}}Vp(e,n,r,s)}function Vp(e,t,n,s=!0){console.error(e)}let bs=!1,xo=!1;const Nt=[];let ue=0;const xn=[];let _e=null,Je=0;const Lu=Promise.resolve();let Aa=null;function Up(e){const t=Aa||Lu;return e?t.then(this?e.bind(this):e):t}function Bp(e){let t=ue+1,n=Nt.length;for(;t<n;){const s=t+n>>>1;As(Nt[s])<e?t=s+1:n=s}return t}function Da(e){(!Nt.length||!Nt.includes(e,bs&&e.allowRecurse?ue+1:ue))&&(e.id==null?Nt.push(e):Nt.splice(Bp(e.id),0,e),$u())}function $u(){!bs&&!xo&&(xo=!0,Aa=Lu.then(Uu))}function jp(e){const t=Nt.indexOf(e);t>ue&&Nt.splice(t,1)}function qp(e){V(e)?xn.push(...e):(!_e||!_e.includes(e,e.allowRecurse?Je+1:Je))&&xn.push(e),$u()}function qc(e,t=bs?ue+1:0){for(;t<Nt.length;t++){const n=Nt[t];n&&n.pre&&(Nt.splice(t,1),t--,n())}}function Vu(e){if(xn.length){const t=[...new Set(xn)];if(xn.length=0,_e){_e.push(...t);return}for(_e=t,_e.sort((n,s)=>As(n)-As(s)),Je=0;Je<_e.length;Je++)_e[Je]();_e=null,Je=0}}const As=e=>e.id==null?1/0:e.id,zp=(e,t)=>{const n=As(e)-As(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Uu(e){xo=!1,bs=!0,Nt.sort(zp);const t=ne;try{for(ue=0;ue<Nt.length;ue++){const n=Nt[ue];n&&n.active!==!1&&Pe(n,null,14)}}finally{ue=0,Nt.length=0,Vu(),bs=!1,Aa=null,(Nt.length||xn.length)&&Uu()}}function Kp(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||rt;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||rt;p&&(r=n.map(m=>vt(m)?m.trim():m)),f&&(r=n.map(_o))}let a,c=s[a=Xi(t)]||s[a=Xi(ge(t))];!c&&i&&(c=s[a=Xi(Wn(t))]),c&&se(c,e,6,r);const l=s[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,se(l,e,6,r)}}function Bu(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!q(e)){const c=l=>{const u=Bu(l,t,!0);u&&(a=!0,bt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(lt(e)&&s.set(e,null),null):(V(i)?i.forEach(c=>o[c]=null):bt(o,i),lt(e)&&s.set(e,o),o)}function fi(e,t){return!e||!ii(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,Wn(t))||Q(e,t))}let Mt=null,di=null;function $r(e){const t=Mt;return Mt=e,di=e&&e.type.__scopeId||null,t}function pi(e){di=e}function gi(){di=null}function ju(e,t=Mt,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&tl(-1);const i=$r(t);let o;try{o=e(...r)}finally{$r(i),s._d&&tl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ji(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:m,ctx:D,inheritAttrs:S}=e;let x,H;const W=$r(e);try{if(n.shapeFlag&4){const F=r||s;x=le(u.call(F,F,f,i,m,p,D)),H=c}else{const F=t;x=le(F.length>1?F(i,{attrs:c,slots:a,emit:l}):F(i,null)),H=t.props?c:Hp(c)}}catch(F){vs.length=0,hi(F,e,1),x=Vt(Pn)}let Y=x;if(H&&S!==!1){const F=Object.keys(H),{shapeFlag:Kt}=Y;F.length&&Kt&7&&(o&&F.some(da)&&(H=Wp(H,o)),Y=Fn(Y,H))}return n.dirs&&(Y=Fn(Y),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&(Y.transition=n.transition),x=Y,$r(W),x}const Hp=e=>{let t;for(const n in e)(n==="class"||n==="style"||ii(n))&&((t||(t={}))[n]=e[n]);return t},Wp=(e,t)=>{const n={};for(const s in e)(!da(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Gp(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?zc(s,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!fi(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?zc(s,o,l):!0:!!o;return!1}function zc(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!fi(n,i))return!0}return!1}function Qp({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Yp=e=>e.__isSuspense;function Xp(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):qp(e)}const mr={};function Zi(e,t,n){return qu(e,t,n)}function qu(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=rt){var a;const c=ip()===((a=Ct)==null?void 0:a.scope)?Ct:null;let l,u=!1,f=!1;if(Ut(e)?(l=()=>e.value,u=Do(e)):Dn(e)?(l=()=>e,s=!0):V(e)?(f=!0,u=e.some(F=>Dn(F)||Do(F)),l=()=>e.map(F=>{if(Ut(F))return F.value;if(Dn(F))return tn(F);if(q(F))return Pe(F,c,2)})):q(e)?t?l=()=>Pe(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),se(e,c,3,[m])}:l=ne,t&&s){const F=l;l=()=>tn(F())}let p,m=F=>{p=W.onStop=()=>{Pe(F,c,4)}},D;if(xs)if(m=ne,t?n&&se(t,c,3,[l(),f?[]:void 0,m]):l(),r==="sync"){const F=Wg();D=F.__watcherHandles||(F.__watcherHandles=[])}else return ne;let S=f?new Array(e.length).fill(mr):mr;const x=()=>{if(W.active)if(t){const F=W.run();(s||u||(f?F.some((Kt,ve)=>Fr(Kt,S[ve])):Fr(F,S)))&&(p&&p(),se(t,c,3,[F,S===mr?void 0:f&&S[0]===mr?[]:S,m]),S=F)}else W.run()};x.allowRecurse=!!t;let H;r==="sync"?H=x:r==="post"?H=()=>jt(x,c&&c.suspense):(x.pre=!0,c&&(x.id=c.uid),H=()=>Da(x));const W=new wa(l,H);t?n?x():S=W.run():r==="post"?jt(W.run.bind(W),c&&c.suspense):W.run();const Y=()=>{W.stop(),c&&c.scope&&pa(c.scope.effects,W)};return D&&D.push(Y),Y}function Jp(e,t,n){const s=this.proxy,r=vt(e)?e.includes(".")?zu(s,e):()=>s[e]:e.bind(s,s);let i;q(t)?i=t:(i=t.handler,n=t);const o=Ct;Ln(this);const a=qu(r,i.bind(s),n);return o?Ln(o):on(),a}function zu(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function tn(e,t){if(!lt(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ut(e))tn(e.value,t);else if(V(e))for(let n=0;n<e.length;n++)tn(e[n],t);else if(yu(e)||An(e))e.forEach(n=>{tn(n,t)});else if(Eu(e))for(const n in e)tn(e[n],t);return e}function Dr(e,t){const n=Mt;if(n===null)return e;const s=wi(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=rt]=t[i];o&&(q(o)&&(o={mounted:o,updated:o}),o.deep&&tn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Qe(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Gn(),se(c,n,8,[e.el,a,e,t]),Qn())}}const ms=e=>!!e.type.__asyncLoader,Ku=e=>e.type.__isKeepAlive;function Zp(e,t){Hu(e,"a",t)}function tg(e,t){Hu(e,"da",t)}function Hu(e,t,n=Ct){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(mi(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Ku(r.parent.vnode)&&eg(s,t,n,r),r=r.parent}}function eg(e,t,n,s){const r=mi(t,e,s,!0);Wu(()=>{pa(s[t],r)},n)}function mi(e,t,n=Ct,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Gn(),Ln(n);const a=se(t,n,e,o);return on(),Qn(),a});return s?r.unshift(i):r.push(i),i}}const Ne=e=>(t,n=Ct)=>(!xs||e==="sp")&&mi(e,(...s)=>t(...s),n),ng=Ne("bm"),sg=Ne("m"),rg=Ne("bu"),ig=Ne("u"),og=Ne("bum"),Wu=Ne("um"),ag=Ne("sp"),cg=Ne("rtg"),lg=Ne("rtc");function ug(e,t=Ct){mi("ec",e,t)}const Gu="components";function _n(e,t){return fg(Gu,e,!0,t)||e}const hg=Symbol.for("v-ndc");function fg(e,t,n=!0,s=!1){const r=Mt||Ct;if(r){const i=r.type;if(e===Gu){const a=qg(i,!1);if(a&&(a===t||a===ge(t)||a===ci(ge(t))))return i}const o=Kc(r[e]||i[e],t)||Kc(r.appContext[e],t);return!o&&s?i:o}}function Kc(e,t){return e&&(e[t]||e[ge(t)]||e[ci(ge(t))])}function Qu(e,t,n,s){let r;const i=n&&n[s];if(V(e)||vt(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i&&i[o])}else if(lt(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=t(e[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function dg(e,t,n={},s,r){if(Mt.isCE||Mt.parent&&ms(Mt.parent)&&Mt.parent.isCE)return t!=="default"&&(n.name=t),Vt("slot",n,s&&s());let i=e[t];i&&i._c&&(i._d=!1),re();const o=i&&Yu(i(n)),a=oh(qt,{key:n.key||o&&o.key||`_${t}`},o||(s?s():[]),o&&e._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Yu(e){return e.some(t=>ah(t)?!(t.type===Pn||t.type===qt&&!Yu(t.children)):!0)?e:null}const No=e=>e?uh(e)?wi(e)||e.proxy:No(e.parent):null,ys=bt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>No(e.parent),$root:e=>No(e.root),$emit:e=>e.emit,$options:e=>xa(e),$forceUpdate:e=>e.f||(e.f=()=>Da(e.update)),$nextTick:e=>e.n||(e.n=Up.bind(e.proxy)),$watch:e=>Jp.bind(e)}),to=(e,t)=>e!==rt&&!e.__isScriptSetup&&Q(e,t),pg={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(to(s,t))return o[t]=1,s[t];if(r!==rt&&Q(r,t))return o[t]=2,r[t];if((l=e.propsOptions[0])&&Q(l,t))return o[t]=3,i[t];if(n!==rt&&Q(n,t))return o[t]=4,n[t];ko&&(o[t]=0)}}const u=ys[t];let f,p;if(u)return t==="$attrs"&&zt(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==rt&&Q(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,Q(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return to(r,t)?(r[t]=n,!0):s!==rt&&Q(s,t)?(s[t]=n,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==rt&&Q(e,o)||to(t,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q(ys,o)||Q(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Hc(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ko=!0;function gg(e){const t=xa(e),n=e.proxy,s=e.ctx;ko=!1,t.beforeCreate&&Wc(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:D,activated:S,deactivated:x,beforeDestroy:H,beforeUnmount:W,destroyed:Y,unmounted:F,render:Kt,renderTracked:ve,renderTriggered:Ke,errorCaptured:we,serverPrefetch:mn,expose:He,inheritAttrs:rs,components:ar,directives:cr,filters:Gi}=t;if(l&&mg(l,s,null),o)for(const ht in o){const nt=o[ht];q(nt)&&(s[ht]=nt.bind(n))}if(r){const ht=r.call(n,n);lt(ht)&&(e.data=Ia(ht))}if(ko=!0,i)for(const ht in i){const nt=i[ht],We=q(nt)?nt.bind(n,n):q(nt.get)?nt.get.bind(n,n):ne,lr=!q(nt)&&q(nt.set)?nt.set.bind(n):ne,Ge=Kg({get:We,set:lr});Object.defineProperty(s,ht,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:oe=>Ge.value=oe})}if(a)for(const ht in a)Xu(a[ht],s,n,ht);if(c){const ht=q(c)?c.call(n):c;Reflect.ownKeys(ht).forEach(nt=>{Tg(nt,ht[nt])})}u&&Wc(u,e,"c");function Lt(ht,nt){V(nt)?nt.forEach(We=>ht(We.bind(n))):nt&&ht(nt.bind(n))}if(Lt(ng,f),Lt(sg,p),Lt(rg,m),Lt(ig,D),Lt(Zp,S),Lt(tg,x),Lt(ug,we),Lt(lg,ve),Lt(cg,Ke),Lt(og,W),Lt(Wu,F),Lt(ag,mn),V(He))if(He.length){const ht=e.exposed||(e.exposed={});He.forEach(nt=>{Object.defineProperty(ht,nt,{get:()=>n[nt],set:We=>n[nt]=We})})}else e.exposed||(e.exposed={});Kt&&e.render===ne&&(e.render=Kt),rs!=null&&(e.inheritAttrs=rs),ar&&(e.components=ar),cr&&(e.directives=cr)}function mg(e,t,n=ne){V(e)&&(e=Mo(e));for(const s in e){const r=e[s];let i;lt(r)?"default"in r?i=xr(r.from||s,r.default,!0):i=xr(r.from||s):i=xr(r),Ut(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function Wc(e,t,n){se(V(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Xu(e,t,n,s){const r=s.includes(".")?zu(n,s):()=>n[s];if(vt(e)){const i=t[e];q(i)&&Zi(r,i)}else if(q(e))Zi(r,e.bind(n));else if(lt(e))if(V(e))e.forEach(i=>Xu(i,t,n,s));else{const i=q(e.handler)?e.handler.bind(n):t[e.handler];q(i)&&Zi(r,i,e)}}function xa(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(l=>Vr(c,l,o,!0)),Vr(c,t,o)),lt(t)&&i.set(t,c),c}function Vr(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Vr(e,i,n,!0),r&&r.forEach(o=>Vr(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=yg[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const yg={data:Gc,props:Qc,emits:Qc,methods:us,computed:us,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:us,directives:us,watch:wg,provide:Gc,inject:vg};function Gc(e,t){return t?e?function(){return bt(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function vg(e,t){return us(Mo(e),Mo(t))}function Mo(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function $t(e,t){return e?[...new Set([].concat(e,t))]:t}function us(e,t){return e?bt(Object.create(null),e,t):t}function Qc(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:bt(Object.create(null),Hc(e),Hc(t??{})):t}function wg(e,t){if(!e)return t;if(!t)return e;const n=bt(Object.create(null),e);for(const s in t)n[s]=$t(e[s],t[s]);return n}function Ju(){return{app:null,config:{isNativeTag:Kd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Eg=0;function _g(e,t){return function(s,r=null){q(s)||(s=bt({},s)),r!=null&&!lt(r)&&(r=null);const i=Ju(),o=new Set;let a=!1;const c=i.app={_uid:Eg++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Gg,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&q(l.install)?(o.add(l),l.install(c,...u)):q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=Vt(s,r);return p.appContext=i,u&&t?t(p,l):e(p,l,f),a=!0,c._container=l,l.__vue_app__=c,wi(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Ur=c;try{return l()}finally{Ur=null}}};return c}}let Ur=null;function Tg(e,t){if(Ct){let n=Ct.provides;const s=Ct.parent&&Ct.parent.provides;s===n&&(n=Ct.provides=Object.create(s)),n[e]=t}}function xr(e,t,n=!1){const s=Ct||Mt;if(s||Ur){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ur._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&q(t)?t.call(s&&s.proxy):t}}function Ig(e,t,n,s=!1){const r={},i={};Lr(i,vi,1),e.propsDefaults=Object.create(null),Zu(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Mp(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Cg(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=Z(r),[c]=e.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(fi(e.emitsOptions,p))continue;const m=t[p];if(c)if(Q(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const D=ge(p);r[D]=Oo(c,a,D,m,e,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{Zu(e,t,r,i)&&(l=!0);let u;for(const f in a)(!t||!Q(t,f)&&((u=Wn(f))===f||!Q(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Oo(c,a,f,void 0,e,!0)):delete r[f]);if(i!==a)for(const f in i)(!t||!Q(t,f))&&(delete i[f],l=!0)}l&&Se(e,"set","$attrs")}function Zu(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(br(c))continue;const l=t[c];let u;r&&Q(r,u=ge(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:fi(e.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Z(n),l=a||rt;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Oo(r,c,f,l[f],e,!Q(l,f))}}return o}function Oo(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&q(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Ln(r),s=l[n]=c.call(null,t),on())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Wn(n))&&(s=!0))}return s}function th(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let c=!1;if(!q(e)){const u=f=>{c=!0;const[p,m]=th(f,t,!0);bt(o,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return lt(e)&&s.set(e,bn),bn;if(V(i))for(let u=0;u<i.length;u++){const f=ge(i[u]);Yc(f)&&(o[f]=rt)}else if(i)for(const u in i){const f=ge(u);if(Yc(f)){const p=i[u],m=o[f]=V(p)||q(p)?{type:p}:bt({},p);if(m){const D=Zc(Boolean,m.type),S=Zc(String,m.type);m[0]=D>-1,m[1]=S<0||D<S,(D>-1||Q(m,"default"))&&a.push(f)}}}const l=[o,a];return lt(e)&&s.set(e,l),l}function Yc(e){return e[0]!=="$"}function Xc(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Jc(e,t){return Xc(e)===Xc(t)}function Zc(e,t){return V(t)?t.findIndex(n=>Jc(n,e)):q(t)&&Jc(t,e)?0:-1}const eh=e=>e[0]==="_"||e==="$stable",Na=e=>V(e)?e.map(le):[le(e)],Sg=(e,t,n)=>{if(t._n)return t;const s=ju((...r)=>Na(t(...r)),n);return s._c=!1,s},nh=(e,t,n)=>{const s=e._ctx;for(const r in e){if(eh(r))continue;const i=e[r];if(q(i))t[r]=Sg(r,i,s);else if(i!=null){const o=Na(i);t[r]=()=>o}}},sh=(e,t)=>{const n=Na(t);e.slots.default=()=>n},bg=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Z(t),Lr(t,"_",n)):nh(t,e.slots={})}else e.slots={},t&&sh(e,t);Lr(e.slots,vi,1)},Ag=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=rt;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(bt(r,t),!n&&a===1&&delete r._):(i=!t.$stable,nh(t,r)),o=t}else t&&(sh(e,t),o={default:1});if(i)for(const a in r)!eh(a)&&!(a in o)&&delete r[a]};function Ro(e,t,n,s,r=!1){if(V(e)){e.forEach((p,m)=>Ro(p,t&&(V(t)?t[m]:t),n,s,r));return}if(ms(s)&&!r)return;const i=s.shapeFlag&4?wi(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===rt?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(vt(l)?(u[l]=null,Q(f,l)&&(f[l]=null)):Ut(l)&&(l.value=null)),q(c))Pe(c,a,12,[o,u]);else{const p=vt(c),m=Ut(c);if(p||m){const D=()=>{if(e.f){const S=p?Q(f,c)?f[c]:u[c]:c.value;r?V(S)&&pa(S,i):V(S)?S.includes(i)||S.push(i):p?(u[c]=[i],Q(f,c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else p?(u[c]=o,Q(f,c)&&(f[c]=o)):m&&(c.value=o,e.k&&(u[e.k]=o))};o?(D.id=-1,jt(D,n)):D()}}}const jt=Xp;function Dg(e){return xg(e)}function xg(e,t){const n=To();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=ne,insertStaticContent:D}=e,S=(h,d,g,v=null,y=null,I=null,A=!1,T=null,C=!!d.dynamicChildren)=>{if(h===d)return;h&&!os(h,d)&&(v=ur(h),oe(h,y,I,!0),h=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:E,ref:M,shapeFlag:N}=d;switch(E){case yi:x(h,d,g,v);break;case Pn:H(h,d,g,v);break;case eo:h==null&&W(d,g,v,A);break;case qt:ar(h,d,g,v,y,I,A,T,C);break;default:N&1?Kt(h,d,g,v,y,I,A,T,C):N&6?cr(h,d,g,v,y,I,A,T,C):(N&64||N&128)&&E.process(h,d,g,v,y,I,A,T,C,yn)}M!=null&&y&&Ro(M,h&&h.ref,I,d||h,!d)},x=(h,d,g,v)=>{if(h==null)s(d.el=a(d.children),g,v);else{const y=d.el=h.el;d.children!==h.children&&l(y,d.children)}},H=(h,d,g,v)=>{h==null?s(d.el=c(d.children||""),g,v):d.el=h.el},W=(h,d,g,v)=>{[h.el,h.anchor]=D(h.children,d,g,v,h.el,h.anchor)},Y=({el:h,anchor:d},g,v)=>{let y;for(;h&&h!==d;)y=p(h),s(h,g,v),h=y;s(d,g,v)},F=({el:h,anchor:d})=>{let g;for(;h&&h!==d;)g=p(h),r(h),h=g;r(d)},Kt=(h,d,g,v,y,I,A,T,C)=>{A=A||d.type==="svg",h==null?ve(d,g,v,y,I,A,T,C):mn(h,d,y,I,A,T,C)},ve=(h,d,g,v,y,I,A,T)=>{let C,E;const{type:M,props:N,shapeFlag:O,transition:U,dirs:z}=h;if(C=h.el=o(h.type,I,N&&N.is,N),O&8?u(C,h.children):O&16&&we(h.children,C,null,v,y,I&&M!=="foreignObject",A,T),z&&Qe(h,null,v,"created"),Ke(C,h,h.scopeId,A,v),N){for(const et in N)et!=="value"&&!br(et)&&i(C,et,null,N[et],I,h.children,v,y,Ee);"value"in N&&i(C,"value",null,N.value),(E=N.onVnodeBeforeMount)&&ce(E,v,h)}z&&Qe(h,null,v,"beforeMount");const st=(!y||y&&!y.pendingBranch)&&U&&!U.persisted;st&&U.beforeEnter(C),s(C,d,g),((E=N&&N.onVnodeMounted)||st||z)&&jt(()=>{E&&ce(E,v,h),st&&U.enter(C),z&&Qe(h,null,v,"mounted")},y)},Ke=(h,d,g,v,y)=>{if(g&&m(h,g),v)for(let I=0;I<v.length;I++)m(h,v[I]);if(y){let I=y.subTree;if(d===I){const A=y.vnode;Ke(h,A,A.scopeId,A.slotScopeIds,y.parent)}}},we=(h,d,g,v,y,I,A,T,C=0)=>{for(let E=C;E<h.length;E++){const M=h[E]=T?Me(h[E]):le(h[E]);S(null,M,d,g,v,y,I,A,T)}},mn=(h,d,g,v,y,I,A)=>{const T=d.el=h.el;let{patchFlag:C,dynamicChildren:E,dirs:M}=d;C|=h.patchFlag&16;const N=h.props||rt,O=d.props||rt;let U;g&&Ye(g,!1),(U=O.onVnodeBeforeUpdate)&&ce(U,g,d,h),M&&Qe(d,h,g,"beforeUpdate"),g&&Ye(g,!0);const z=y&&d.type!=="foreignObject";if(E?He(h.dynamicChildren,E,T,g,v,z,I):A||nt(h,d,T,null,g,v,z,I,!1),C>0){if(C&16)rs(T,d,N,O,g,v,y);else if(C&2&&N.class!==O.class&&i(T,"class",null,O.class,y),C&4&&i(T,"style",N.style,O.style,y),C&8){const st=d.dynamicProps;for(let et=0;et<st.length;et++){const dt=st[et],Xt=N[dt],vn=O[dt];(vn!==Xt||dt==="value")&&i(T,dt,Xt,vn,y,h.children,g,v,Ee)}}C&1&&h.children!==d.children&&u(T,d.children)}else!A&&E==null&&rs(T,d,N,O,g,v,y);((U=O.onVnodeUpdated)||M)&&jt(()=>{U&&ce(U,g,d,h),M&&Qe(d,h,g,"updated")},v)},He=(h,d,g,v,y,I,A)=>{for(let T=0;T<d.length;T++){const C=h[T],E=d[T],M=C.el&&(C.type===qt||!os(C,E)||C.shapeFlag&70)?f(C.el):g;S(C,E,M,null,v,y,I,A,!0)}},rs=(h,d,g,v,y,I,A)=>{if(g!==v){if(g!==rt)for(const T in g)!br(T)&&!(T in v)&&i(h,T,g[T],null,A,d.children,y,I,Ee);for(const T in v){if(br(T))continue;const C=v[T],E=g[T];C!==E&&T!=="value"&&i(h,T,E,C,A,d.children,y,I,Ee)}"value"in v&&i(h,"value",g.value,v.value)}},ar=(h,d,g,v,y,I,A,T,C)=>{const E=d.el=h?h.el:a(""),M=d.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:O,slotScopeIds:U}=d;U&&(T=T?T.concat(U):U),h==null?(s(E,g,v),s(M,g,v),we(d.children,g,M,y,I,A,T,C)):N>0&&N&64&&O&&h.dynamicChildren?(He(h.dynamicChildren,O,g,y,I,A,T),(d.key!=null||y&&d===y.subTree)&&rh(h,d,!0)):nt(h,d,g,M,y,I,A,T,C)},cr=(h,d,g,v,y,I,A,T,C)=>{d.slotScopeIds=T,h==null?d.shapeFlag&512?y.ctx.activate(d,g,v,A,C):Gi(d,g,v,y,I,A,C):xc(h,d,C)},Gi=(h,d,g,v,y,I,A)=>{const T=h.component=$g(h,v,y);if(Ku(h)&&(T.ctx.renderer=yn),Vg(T),T.asyncDep){if(y&&y.registerDep(T,Lt),!h.el){const C=T.subTree=Vt(Pn);H(null,C,d,g)}return}Lt(T,h,d,g,y,I,A)},xc=(h,d,g)=>{const v=d.component=h.component;if(Gp(h,d,g))if(v.asyncDep&&!v.asyncResolved){ht(v,d,g);return}else v.next=d,jp(v.update),v.update();else d.el=h.el,v.vnode=d},Lt=(h,d,g,v,y,I,A)=>{const T=()=>{if(h.isMounted){let{next:M,bu:N,u:O,parent:U,vnode:z}=h,st=M,et;Ye(h,!1),M?(M.el=z.el,ht(h,M,A)):M=z,N&&Ar(N),(et=M.props&&M.props.onVnodeBeforeUpdate)&&ce(et,U,M,z),Ye(h,!0);const dt=Ji(h),Xt=h.subTree;h.subTree=dt,S(Xt,dt,f(Xt.el),ur(Xt),h,y,I),M.el=dt.el,st===null&&Qp(h,dt.el),O&&jt(O,y),(et=M.props&&M.props.onVnodeUpdated)&&jt(()=>ce(et,U,M,z),y)}else{let M;const{el:N,props:O}=d,{bm:U,m:z,parent:st}=h,et=ms(d);if(Ye(h,!1),U&&Ar(U),!et&&(M=O&&O.onVnodeBeforeMount)&&ce(M,st,d),Ye(h,!0),N&&Yi){const dt=()=>{h.subTree=Ji(h),Yi(N,h.subTree,h,y,null)};et?d.type.__asyncLoader().then(()=>!h.isUnmounted&&dt()):dt()}else{const dt=h.subTree=Ji(h);S(null,dt,g,v,h,y,I),d.el=dt.el}if(z&&jt(z,y),!et&&(M=O&&O.onVnodeMounted)){const dt=d;jt(()=>ce(M,st,dt),y)}(d.shapeFlag&256||st&&ms(st.vnode)&&st.vnode.shapeFlag&256)&&h.a&&jt(h.a,y),h.isMounted=!0,d=g=v=null}},C=h.effect=new wa(T,()=>Da(E),h.scope),E=h.update=()=>C.run();E.id=h.uid,Ye(h,!0),E()},ht=(h,d,g)=>{d.component=h;const v=h.vnode.props;h.vnode=d,h.next=null,Cg(h,d.props,v,g),Ag(h,d.children,g),Gn(),qc(),Qn()},nt=(h,d,g,v,y,I,A,T,C=!1)=>{const E=h&&h.children,M=h?h.shapeFlag:0,N=d.children,{patchFlag:O,shapeFlag:U}=d;if(O>0){if(O&128){lr(E,N,g,v,y,I,A,T,C);return}else if(O&256){We(E,N,g,v,y,I,A,T,C);return}}U&8?(M&16&&Ee(E,y,I),N!==E&&u(g,N)):M&16?U&16?lr(E,N,g,v,y,I,A,T,C):Ee(E,y,I,!0):(M&8&&u(g,""),U&16&&we(N,g,v,y,I,A,T,C))},We=(h,d,g,v,y,I,A,T,C)=>{h=h||bn,d=d||bn;const E=h.length,M=d.length,N=Math.min(E,M);let O;for(O=0;O<N;O++){const U=d[O]=C?Me(d[O]):le(d[O]);S(h[O],U,g,null,y,I,A,T,C)}E>M?Ee(h,y,I,!0,!1,N):we(d,g,v,y,I,A,T,C,N)},lr=(h,d,g,v,y,I,A,T,C)=>{let E=0;const M=d.length;let N=h.length-1,O=M-1;for(;E<=N&&E<=O;){const U=h[E],z=d[E]=C?Me(d[E]):le(d[E]);if(os(U,z))S(U,z,g,null,y,I,A,T,C);else break;E++}for(;E<=N&&E<=O;){const U=h[N],z=d[O]=C?Me(d[O]):le(d[O]);if(os(U,z))S(U,z,g,null,y,I,A,T,C);else break;N--,O--}if(E>N){if(E<=O){const U=O+1,z=U<M?d[U].el:v;for(;E<=O;)S(null,d[E]=C?Me(d[E]):le(d[E]),g,z,y,I,A,T,C),E++}}else if(E>O)for(;E<=N;)oe(h[E],y,I,!0),E++;else{const U=E,z=E,st=new Map;for(E=z;E<=O;E++){const Ht=d[E]=C?Me(d[E]):le(d[E]);Ht.key!=null&&st.set(Ht.key,E)}let et,dt=0;const Xt=O-z+1;let vn=!1,Mc=0;const is=new Array(Xt);for(E=0;E<Xt;E++)is[E]=0;for(E=U;E<=N;E++){const Ht=h[E];if(dt>=Xt){oe(Ht,y,I,!0);continue}let ae;if(Ht.key!=null)ae=st.get(Ht.key);else for(et=z;et<=O;et++)if(is[et-z]===0&&os(Ht,d[et])){ae=et;break}ae===void 0?oe(Ht,y,I,!0):(is[ae-z]=E+1,ae>=Mc?Mc=ae:vn=!0,S(Ht,d[ae],g,null,y,I,A,T,C),dt++)}const Oc=vn?Ng(is):bn;for(et=Oc.length-1,E=Xt-1;E>=0;E--){const Ht=z+E,ae=d[Ht],Rc=Ht+1<M?d[Ht+1].el:v;is[E]===0?S(null,ae,g,Rc,y,I,A,T,C):vn&&(et<0||E!==Oc[et]?Ge(ae,g,Rc,2):et--)}}},Ge=(h,d,g,v,y=null)=>{const{el:I,type:A,transition:T,children:C,shapeFlag:E}=h;if(E&6){Ge(h.component.subTree,d,g,v);return}if(E&128){h.suspense.move(d,g,v);return}if(E&64){A.move(h,d,g,yn);return}if(A===qt){s(I,d,g);for(let N=0;N<C.length;N++)Ge(C[N],d,g,v);s(h.anchor,d,g);return}if(A===eo){Y(h,d,g);return}if(v!==2&&E&1&&T)if(v===0)T.beforeEnter(I),s(I,d,g),jt(()=>T.enter(I),y);else{const{leave:N,delayLeave:O,afterLeave:U}=T,z=()=>s(I,d,g),st=()=>{N(I,()=>{z(),U&&U()})};O?O(I,z,st):st()}else s(I,d,g)},oe=(h,d,g,v=!1,y=!1)=>{const{type:I,props:A,ref:T,children:C,dynamicChildren:E,shapeFlag:M,patchFlag:N,dirs:O}=h;if(T!=null&&Ro(T,null,g,h,!0),M&256){d.ctx.deactivate(h);return}const U=M&1&&O,z=!ms(h);let st;if(z&&(st=A&&A.onVnodeBeforeUnmount)&&ce(st,d,h),M&6)zd(h.component,g,v);else{if(M&128){h.suspense.unmount(g,v);return}U&&Qe(h,null,d,"beforeUnmount"),M&64?h.type.remove(h,d,g,y,yn,v):E&&(I!==qt||N>0&&N&64)?Ee(E,d,g,!1,!0):(I===qt&&N&384||!y&&M&16)&&Ee(C,d,g),v&&Nc(h)}(z&&(st=A&&A.onVnodeUnmounted)||U)&&jt(()=>{st&&ce(st,d,h),U&&Qe(h,null,d,"unmounted")},g)},Nc=h=>{const{type:d,el:g,anchor:v,transition:y}=h;if(d===qt){qd(g,v);return}if(d===eo){F(h);return}const I=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:A,delayLeave:T}=y,C=()=>A(g,I);T?T(h.el,I,C):C()}else I()},qd=(h,d)=>{let g;for(;h!==d;)g=p(h),r(h),h=g;r(d)},zd=(h,d,g)=>{const{bum:v,scope:y,update:I,subTree:A,um:T}=h;v&&Ar(v),y.stop(),I&&(I.active=!1,oe(A,h,d,g)),T&&jt(T,d),jt(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ee=(h,d,g,v=!1,y=!1,I=0)=>{for(let A=I;A<h.length;A++)oe(h[A],d,g,v,y)},ur=h=>h.shapeFlag&6?ur(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),kc=(h,d,g)=>{h==null?d._vnode&&oe(d._vnode,null,null,!0):S(d._vnode||null,h,d,null,null,null,g),qc(),Vu(),d._vnode=h},yn={p:S,um:oe,m:Ge,r:Nc,mt:Gi,mc:we,pc:nt,pbc:He,n:ur,o:e};let Qi,Yi;return t&&([Qi,Yi]=t(yn)),{render:kc,hydrate:Qi,createApp:_g(kc,Qi)}}function Ye({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function rh(e,t,n=!1){const s=e.children,r=t.children;if(V(s)&&V(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Me(r[i]),a.el=o.el),n||rh(o,a)),a.type===yi&&(a.el=o.el)}}function Ng(e){const t=e.slice(),n=[0];let s,r,i,o,a;const c=e.length;for(s=0;s<c;s++){const l=e[s];if(l!==0){if(r=n[n.length-1],e[r]<l){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const kg=e=>e.__isTeleport,qt=Symbol.for("v-fgt"),yi=Symbol.for("v-txt"),Pn=Symbol.for("v-cmt"),eo=Symbol.for("v-stc"),vs=[];let te=null;function re(e=!1){vs.push(te=e?null:[])}function Mg(){vs.pop(),te=vs[vs.length-1]||null}let Ds=1;function tl(e){Ds+=e}function ih(e){return e.dynamicChildren=Ds>0?te||bn:null,Mg(),Ds>0&&te&&te.push(e),e}function Ie(e,t,n,s,r,i){return ih(at(e,t,n,s,r,i,!0))}function oh(e,t,n,s,r){return ih(Vt(e,t,n,s,r,!0))}function ah(e){return e?e.__v_isVNode===!0:!1}function os(e,t){return e.type===t.type&&e.key===t.key}const vi="__vInternal",ch=({key:e})=>e??null,Nr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?vt(e)||Ut(e)||q(e)?{i:Mt,r:e,k:t,f:!!n}:e:null);function at(e,t=null,n=null,s=0,r=null,i=e===qt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ch(t),ref:t&&Nr(t),scopeId:di,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Mt};return a?(ka(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=vt(n)?8:16),Ds>0&&!o&&te&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&te.push(c),c}const Vt=Og;function Og(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===hg)&&(e=Pn),ah(e)){const a=Fn(e,t,!0);return n&&ka(a,n),Ds>0&&!i&&te&&(a.shapeFlag&6?te[te.indexOf(e)]=a:te.push(a)),a.patchFlag|=-2,a}if(zg(e)&&(e=e.__vccOpts),t){t=Rg(t);let{class:a,style:c}=t;a&&!vt(a)&&(t.class=li(a)),lt(c)&&(Ru(c)&&!V(c)&&(c=bt({},c)),t.style=ya(c))}const o=vt(e)?1:Yp(e)?128:kg(e)?64:lt(e)?4:q(e)?2:0;return at(e,t,n,s,r,o,i,!0)}function Rg(e){return e?Ru(e)||vi in e?bt({},e):e:null}function Fn(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=e,a=t?Pg(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&ch(a),ref:t&&t.ref?n&&r?V(r)?r.concat(Nr(t)):[r,Nr(t)]:Nr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==qt?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Fn(e.ssContent),ssFallback:e.ssFallback&&Fn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function lh(e=" ",t=0){return Vt(yi,null,e,t)}function le(e){return e==null||typeof e=="boolean"?Vt(Pn):V(e)?Vt(qt,null,e.slice()):typeof e=="object"?Me(e):Vt(yi,null,String(e))}function Me(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Fn(e)}function ka(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),ka(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(vi in t)?t._ctx=Mt:r===3&&Mt&&(Mt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:Mt},n=32):(t=String(t),s&64?(n=16,t=[lh(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pg(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=li([t.class,s.class]));else if(r==="style")t.style=ya([t.style,s.style]);else if(ii(r)){const i=t[r],o=s[r];o&&i!==o&&!(V(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function ce(e,t,n,s=null){se(e,t,7,[n,s])}const Fg=Ju();let Lg=0;function $g(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Fg,i={uid:Lg++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new sp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:th(s,r),emitsOptions:Bu(s,r),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:s.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Kp.bind(null,i),e.ce&&e.ce(i),i}let Ct=null,Ma,wn,el="__VUE_INSTANCE_SETTERS__";(wn=To()[el])||(wn=To()[el]=[]),wn.push(e=>Ct=e),Ma=e=>{wn.length>1?wn.forEach(t=>t(e)):wn[0](e)};const Ln=e=>{Ma(e),e.scope.on()},on=()=>{Ct&&Ct.scope.off(),Ma(null)};function uh(e){return e.vnode.shapeFlag&4}let xs=!1;function Vg(e,t=!1){xs=t;const{props:n,children:s}=e.vnode,r=uh(e);Ig(e,n,r,t),bg(e,s);const i=r?Ug(e,t):void 0;return xs=!1,i}function Ug(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Pu(new Proxy(e.ctx,pg));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?jg(e):null;Ln(e),Gn();const i=Pe(s,e,0,[e.props,r]);if(Qn(),on(),vu(i)){if(i.then(on,on),t)return i.then(o=>{nl(e,o,t)}).catch(o=>{hi(o,e,0)});e.asyncDep=i}else nl(e,i,t)}else hh(e,t)}function nl(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:lt(t)&&(e.setupState=Fu(t)),hh(e,n)}let sl;function hh(e,t,n){const s=e.type;if(!e.render){if(!t&&sl&&!s.render){const r=s.template||xa(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,l=bt(bt({isCustomElement:i,delimiters:a},o),c);s.render=sl(r,l)}}e.render=s.render||ne}Ln(e),Gn(),gg(e),Qn(),on()}function Bg(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return zt(e,"get","$attrs"),t[n]}}))}function jg(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Bg(e)},slots:e.slots,emit:e.emit,expose:t}}function wi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Fu(Pu(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ys)return ys[n](e)},has(t,n){return n in t||n in ys}}))}function qg(e,t=!0){return q(e)?e.displayName||e.name:e.name||t&&e.__name}function zg(e){return q(e)&&"__vccOpts"in e}const Kg=(e,t)=>$p(e,t,xs),Hg=Symbol.for("v-scx"),Wg=()=>xr(Hg),Gg="3.3.4",Qg="http://www.w3.org/2000/svg",Ze=typeof document<"u"?document:null,rl=Ze&&Ze.createElement("template"),Yg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?Ze.createElementNS(Qg,e):Ze.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Ze.createTextNode(e),createComment:e=>Ze.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ze.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{rl.innerHTML=s?`<svg>${e}</svg>`:e;const a=rl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Xg(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Jg(e,t,n){const s=e.style,r=vt(n);if(n&&!r){if(t&&!vt(t))for(const i in t)n[i]==null&&Po(s,i,"");for(const i in n)Po(s,i,n[i])}else{const i=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=i)}}const il=/\s*!important$/;function Po(e,t,n){if(V(n))n.forEach(s=>Po(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Zg(e,t);il.test(n)?e.setProperty(Wn(s),n.replace(il,""),"important"):e[s]=n}}const ol=["Webkit","Moz","ms"],no={};function Zg(e,t){const n=no[t];if(n)return n;let s=ge(t);if(s!=="filter"&&s in e)return no[t]=s;s=ci(s);for(let r=0;r<ol.length;r++){const i=ol[r]+s;if(i in e)return no[t]=i}return t}const al="http://www.w3.org/1999/xlink";function tm(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(al,t.slice(6,t.length)):e.setAttributeNS(al,t,n);else{const i=np(t);n==null||i&&!_u(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function em(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=_u(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Tn(e,t,n,s){e.addEventListener(t,n,s)}function nm(e,t,n,s){e.removeEventListener(t,n,s)}function sm(e,t,n,s,r=null){const i=e._vei||(e._vei={}),o=i[t];if(s&&o)o.value=s;else{const[a,c]=rm(t);if(s){const l=i[t]=am(s,r);Tn(e,a,l,c)}else o&&(nm(e,a,o,c),i[t]=void 0)}}const cl=/(?:Once|Passive|Capture)$/;function rm(e){let t;if(cl.test(e)){t={};let s;for(;s=e.match(cl);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Wn(e.slice(2)),t]}let so=0;const im=Promise.resolve(),om=()=>so||(im.then(()=>so=0),so=Date.now());function am(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;se(cm(s,n.value),t,5,[s])};return n.value=e,n.attached=om(),n}function cm(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const ll=/^on[a-z]/,lm=(e,t,n,s,r=!1,i,o,a,c)=>{t==="class"?Xg(e,s,r):t==="style"?Jg(e,n,s):ii(t)?da(t)||sm(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):um(e,t,s,r))?em(e,t,s,i,o,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),tm(e,t,s,r))};function um(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&ll.test(t)&&q(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ll.test(t)&&vt(n)?!1:t in e}const ul=e=>{const t=e.props["onUpdate:modelValue"]||!1;return V(t)?n=>Ar(t,n):t};function hm(e){e.target.composing=!0}function hl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const kr={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=ul(r);const i=s||r.props&&r.props.type==="number";Tn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=_o(a)),e._assign(a)}),n&&Tn(e,"change",()=>{e.value=e.value.trim()}),t||(Tn(e,"compositionstart",hm),Tn(e,"compositionend",hl),Tn(e,"change",hl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},i){if(e._assign=ul(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&_o(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},fm=["ctrl","shift","alt","meta"],dm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>fm.some(n=>e[`${n}Key`]&&!t.includes(n))},fh=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const i=dm[t[r]];if(i&&i(n,t))return}return e(n,...s)},pm=bt({patchProp:lm},Yg);let fl;function gm(){return fl||(fl=Dg(pm))}const mm=(...e)=>{const t=gm().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=ym(s);if(!r)return;const i=t._component;!q(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function ym(e){return vt(e)?document.querySelector(e):e}const Yn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},vm={props:["label","type"]};function wm(e,t,n,s,r,i){return re(),Ie("button",{class:li({reset:n.type==="reset"})},Io(n.label),3)}const dh=Yn(vm,[["render",wm]]);const Em={props:["src","name","winningYears"],computed:{sortedYears(){return this.winningYears.sort((e,t)=>Number.parseInt(e)-Number.parseInt(t))}}},_m=e=>(pi("data-v-8a0f7923"),e=e(),gi(),e),Tm={class:"app-result"},Im=["src"],Cm=_m(()=>at("div",null,"Winning Years:",-1));function Sm(e,t,n,s,r,i){return re(),Ie("div",Tm,[at("img",{src:n.src,alt:""},null,8,Im),at("h2",null,Io(n.name),1),Cm,(re(!0),Ie(qt,null,Qu(i.sortedYears,(o,a)=>(re(),Ie("div",{class:"year",key:a},Io(o),1))),128))])}const bm=Yn(Em,[["render",Sm],["__scopeId","data-v-8a0f7923"]]);const Am={data(){return{teamName:""}},methods:{updateTeamName(){this.$emit("update",this.teamName)}}},Dm=e=>(pi("data-v-3ad21436"),e=e(),gi(),e),xm=Dm(()=>at("i",{class:"fa-solid fa-magnifying-glass"},null,-1));function Nm(e,t,n,s,r,i){return re(),Ie("form",{onSubmit:t[2]||(t[2]=fh(()=>{},["prevent"]))},[Dr(at("input",{type:"text",placeholder:"Search...",required:"","onUpdate:modelValue":t[0]||(t[0]=o=>r.teamName=o),onInput:t[1]||(t[1]=(...o)=>i.updateTeamName&&i.updateTeamName(...o))},null,544),[[kr,r.teamName]]),xm],32)}const km=Yn(Am,[["render",Nm],["__scopeId","data-v-3ad21436"]]);/**
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
 */const ph=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Mm=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),s.push(n[u],n[f],n[p],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ph(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Mm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const f=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw new Om;const p=i<<2|a>>4;if(s.push(p),l!==64){const m=a<<4&240|l>>2;if(s.push(m),f!==64){const D=l<<6&192|f;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Om extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rm=function(e){const t=ph(e);return gh.encodeByteArray(t,!0)},Br=function(e){return Rm(e).replace(/\./g,"")},Pm=function(e){try{return gh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Fm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lm=()=>Fm().__FIREBASE_DEFAULTS__,$m=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Vm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Pm(e[1]);return t&&JSON.parse(t)},mh=()=>{try{return Lm()||$m()||Vm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Um=e=>{var t,n;return(n=(t=mh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Bm=e=>{const t=Um(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},yh=()=>{var e;return(e=mh())===null||e===void 0?void 0:e.config};/**
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
 */class jm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function qm(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Br(JSON.stringify(n)),Br(JSON.stringify(o)),a].join(".")}function zm(){try{return typeof indexedDB=="object"}catch{return!1}}function Km(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Hm="FirebaseError";class Xn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Hm,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vh.prototype.create)}}class vh{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Wm(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Xn(r,a,s)}}function Wm(e,t){return e.replace(Gm,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Gm=/\{\$([^}]+)}/g;function Fo(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(dl(i)&&dl(o)){if(!Fo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function dl(e){return e!==null&&typeof e=="object"}/**
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
 */function $n(e){return e&&e._delegate?e._delegate:e}class Ns{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xe="[DEFAULT]";/**
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
 */class Qm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new jm;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xm(t))try{this.getOrInitializeService({instanceIdentifier:Xe})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Xe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xe){return this.instances.has(t)}getOptions(t=Xe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ym(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Xe){return this.component?this.component.multipleInstances?t:Xe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ym(e){return e===Xe?void 0:e}function Xm(e){return e.instantiationMode==="EAGER"}/**
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
 */class Jm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Qm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(J||(J={}));const Zm={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},ty=J.INFO,ey={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},ny=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=ey[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class wh{constructor(t){this.name=t,this._logLevel=ty,this._logHandler=ny,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Zm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const sy=(e,t)=>t.some(n=>e instanceof n);let pl,gl;function ry(){return pl||(pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iy(){return gl||(gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eh=new WeakMap,Lo=new WeakMap,_h=new WeakMap,ro=new WeakMap,Oa=new WeakMap;function oy(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Fe(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Eh.set(n,e)}).catch(()=>{}),Oa.set(t,e),t}function ay(e){if(Lo.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Lo.set(e,t)}let $o={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Lo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||_h.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function cy(e){$o=e($o)}function ly(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(io(this),t,...n);return _h.set(s,t.sort?t.sort():[t]),Fe(s)}:iy().includes(e)?function(...t){return e.apply(io(this),t),Fe(Eh.get(this))}:function(...t){return Fe(e.apply(io(this),t))}}function uy(e){return typeof e=="function"?ly(e):(e instanceof IDBTransaction&&ay(e),sy(e,ry())?new Proxy(e,$o):e)}function Fe(e){if(e instanceof IDBRequest)return oy(e);if(ro.has(e))return ro.get(e);const t=uy(e);return t!==e&&(ro.set(e,t),Oa.set(t,e)),t}const io=e=>Oa.get(e);function hy(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Fe(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Fe(o.result),c.oldVersion,c.newVersion,Fe(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const fy=["get","getKey","getAll","getAllKeys","count"],dy=["put","add","delete","clear"],oo=new Map;function ml(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(oo.get(t))return oo.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=dy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||fy.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return oo.set(t,i),i}cy(e=>({...e,get:(t,n,s)=>ml(t,n)||e.get(t,n,s),has:(t,n)=>!!ml(t,n)||e.has(t,n)}));/**
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
 */class py{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function gy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Vo="@firebase/app",yl="0.9.12";/**
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
 */const ln=new wh("@firebase/app"),my="@firebase/app-compat",yy="@firebase/analytics-compat",vy="@firebase/analytics",wy="@firebase/app-check-compat",Ey="@firebase/app-check",_y="@firebase/auth",Ty="@firebase/auth-compat",Iy="@firebase/database",Cy="@firebase/database-compat",Sy="@firebase/functions",by="@firebase/functions-compat",Ay="@firebase/installations",Dy="@firebase/installations-compat",xy="@firebase/messaging",Ny="@firebase/messaging-compat",ky="@firebase/performance",My="@firebase/performance-compat",Oy="@firebase/remote-config",Ry="@firebase/remote-config-compat",Py="@firebase/storage",Fy="@firebase/storage-compat",Ly="@firebase/firestore",$y="@firebase/firestore-compat",Vy="firebase",Uy="9.22.2";/**
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
 */const Uo="[DEFAULT]",By={[Vo]:"fire-core",[my]:"fire-core-compat",[vy]:"fire-analytics",[yy]:"fire-analytics-compat",[Ey]:"fire-app-check",[wy]:"fire-app-check-compat",[_y]:"fire-auth",[Ty]:"fire-auth-compat",[Iy]:"fire-rtdb",[Cy]:"fire-rtdb-compat",[Sy]:"fire-fn",[by]:"fire-fn-compat",[Ay]:"fire-iid",[Dy]:"fire-iid-compat",[xy]:"fire-fcm",[Ny]:"fire-fcm-compat",[ky]:"fire-perf",[My]:"fire-perf-compat",[Oy]:"fire-rc",[Ry]:"fire-rc-compat",[Py]:"fire-gcs",[Fy]:"fire-gcs-compat",[Ly]:"fire-fst",[$y]:"fire-fst-compat","fire-js":"fire-js",[Vy]:"fire-js-all"};/**
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
 */const jr=new Map,Bo=new Map;function jy(e,t){try{e.container.addComponent(t)}catch(n){ln.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function qr(e){const t=e.name;if(Bo.has(t))return ln.debug(`There were multiple attempts to register component ${t}.`),!1;Bo.set(t,e);for(const n of jr.values())jy(n,e);return!0}function qy(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const zy={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Le=new vh("app","Firebase",zy);/**
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
 */class Ky{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}/**
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
 */const Hy=Uy;function Th(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Uo,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Le.create("bad-app-name",{appName:String(r)});if(n||(n=yh()),!n)throw Le.create("no-options");const i=jr.get(r);if(i){if(Fo(n,i.options)&&Fo(s,i.config))return i;throw Le.create("duplicate-app",{appName:r})}const o=new Jm(r);for(const c of Bo.values())o.addComponent(c);const a=new Ky(n,s,o);return jr.set(r,a),a}function Wy(e=Uo){const t=jr.get(e);if(!t&&e===Uo&&yh())return Th();if(!t)throw Le.create("no-app",{appName:e});return t}function Nn(e,t,n){var s;let r=(s=By[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}qr(new Ns(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Gy="firebase-heartbeat-database",Qy=1,ks="firebase-heartbeat-store";let ao=null;function Ih(){return ao||(ao=hy(Gy,Qy,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ks)}}}).catch(e=>{throw Le.create("idb-open",{originalErrorMessage:e.message})})),ao}async function Yy(e){try{return await(await Ih()).transaction(ks).objectStore(ks).get(Ch(e))}catch(t){if(t instanceof Xn)ln.warn(t.message);else{const n=Le.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ln.warn(n.message)}}}async function vl(e,t){try{const s=(await Ih()).transaction(ks,"readwrite");await s.objectStore(ks).put(t,Ch(e)),await s.done}catch(n){if(n instanceof Xn)ln.warn(n.message);else{const s=Le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(s.message)}}}function Ch(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Xy=1024,Jy=30*24*60*60*1e3;class Zy{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ev(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Jy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wl(),{heartbeatsToSend:n,unsentEntries:s}=tv(this._heartbeatsCache.heartbeats),r=Br(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function wl(){return new Date().toISOString().substring(0,10)}function tv(e,t=Xy){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),El(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),El(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ev{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zm()?Km().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function El(e){return Br(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function nv(e){qr(new Ns("platform-logger",t=>new py(t),"PRIVATE")),qr(new Ns("heartbeat",t=>new Zy(t),"PRIVATE")),Nn(Vo,yl,e),Nn(Vo,yl,"esm2017"),Nn("fire-js","")}nv("");var sv="firebase",rv="9.22.2";/**
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
 */Nn(sv,rv,"app");var iv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,Ra=Ra||{},$=iv||self;function Ei(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Hs(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ov(e){return Object.prototype.hasOwnProperty.call(e,co)&&e[co]||(e[co]=++av)}var co="closure_uid_"+(1e9*Math.random()>>>0),av=0;function cv(e,t,n){return e.call.apply(e.bind,arguments)}function lv(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function Ot(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ot=cv:Ot=lv,Ot.apply(null,arguments)}function yr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function _t(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function qe(){this.s=this.s,this.o=this.o}var uv=0;qe.prototype.s=!1;qe.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),uv!=0)&&ov(this)};qe.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sh=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Pa(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function _l(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ei(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function Rt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Rt.prototype.h=function(){this.defaultPrevented=!0};var hv=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{$.addEventListener("test",()=>{},t),$.removeEventListener("test",()=>{},t)}catch{}return e}();function Ms(e){return/^[\s\xa0]*$/.test(e)}function _i(){var e=$.navigator;return e&&(e=e.userAgent)?e:""}function he(e){return _i().indexOf(e)!=-1}function Fa(e){return Fa[" "](e),e}Fa[" "]=function(){};function fv(e,t){var n=r0;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var dv=he("Opera"),Vn=he("Trident")||he("MSIE"),bh=he("Edge"),jo=bh||Vn,Ah=he("Gecko")&&!(_i().toLowerCase().indexOf("webkit")!=-1&&!he("Edge"))&&!(he("Trident")||he("MSIE"))&&!he("Edge"),pv=_i().toLowerCase().indexOf("webkit")!=-1&&!he("Edge");function Dh(){var e=$.document;return e?e.documentMode:void 0}var qo;t:{var lo="",uo=function(){var e=_i();if(Ah)return/rv:([^\);]+)(\)|;)/.exec(e);if(bh)return/Edge\/([\d\.]+)/.exec(e);if(Vn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(pv)return/WebKit\/(\S+)/.exec(e);if(dv)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(uo&&(lo=uo?uo[1]:""),Vn){var ho=Dh();if(ho!=null&&ho>parseFloat(lo)){qo=String(ho);break t}}qo=lo}var zo;if($.document&&Vn){var Tl=Dh();zo=Tl||parseInt(qo,10)||void 0}else zo=void 0;var gv=zo;function Os(e,t){if(Rt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ah){t:{try{Fa(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:mv[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Os.$.h.call(this)}}_t(Os,Rt);var mv={2:"touch",3:"pen",4:"mouse"};Os.prototype.h=function(){Os.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ws="closure_listenable_"+(1e6*Math.random()|0),yv=0;function vv(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=r,this.key=++yv,this.fa=this.ia=!1}function Ti(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function La(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function wv(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function xh(e){const t={};for(const n in e)t[n]=e[n];return t}const Il="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nh(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Il.length;i++)n=Il[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ii(e){this.src=e,this.g={},this.h=0}Ii.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Ho(e,t,s,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new vv(t,this.src,i,!!s,r),t.ia=n,e.push(t)),t};function Ko(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Sh(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ti(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ho(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==s)return r}return-1}var $a="closure_lm_"+(1e6*Math.random()|0),fo={};function kh(e,t,n,s,r){if(s&&s.once)return Oh(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)kh(e,t[i],n,s,r);return null}return n=Ba(n),e&&e[Ws]?e.O(t,n,Hs(s)?!!s.capture:!!s,r):Mh(e,t,n,!1,s,r)}function Mh(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Hs(r)?!!r.capture:!!r,a=Ua(e);if(a||(e[$a]=a=new Ii(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Ev(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)hv||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Ph(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ev(){function e(n){return t.call(e.src,e.listener,n)}const t=_v;return e}function Oh(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Oh(e,t[i],n,s,r);return null}return n=Ba(n),e&&e[Ws]?e.P(t,n,Hs(s)?!!s.capture:!!s,r):Mh(e,t,n,!0,s,r)}function Rh(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Rh(e,t[i],n,s,r);else s=Hs(s)?!!s.capture:!!s,n=Ba(n),e&&e[Ws]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Ho(i,n,s,r),-1<n&&(Ti(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ua(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ho(t,n,s,r)),(n=-1<e?t[e]:null)&&Va(n))}function Va(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ws])Ko(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Ph(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ua(t))?(Ko(n,e),n.h==0&&(n.src=null,t[$a]=null)):Ti(e)}}}function Ph(e){return e in fo?fo[e]:fo[e]="on"+e}function _v(e,t){if(e.fa)e=!0;else{t=new Os(t,this);var n=e.listener,s=e.la||e.src;e.ia&&Va(e),e=n.call(s,t)}return e}function Ua(e){return e=e[$a],e instanceof Ii?e:null}var po="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ba(e){return typeof e=="function"?e:(e[po]||(e[po]=function(t){return e.handleEvent(t)}),e[po])}function Et(){qe.call(this),this.i=new Ii(this),this.S=this,this.J=null}_t(Et,qe);Et.prototype[Ws]=!0;Et.prototype.removeEventListener=function(e,t,n,s){Rh(this,e,t,n,s)};function St(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new Rt(t,e);else if(t instanceof Rt)t.target=t.target||e;else{var r=t;t=new Rt(s,e),Nh(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=vr(o,s,!0,t)&&r}if(o=t.g=e,r=vr(o,s,!0,t)&&r,r=vr(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=vr(o,s,!1,t)&&r}Et.prototype.N=function(){if(Et.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Ti(n[s]);delete e.g[t],e.h--}}this.J=null};Et.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};Et.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function vr(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ko(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ja=$.JSON.stringify;class Tv{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Iv(){var e=qa;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Cv{constructor(){this.h=this.g=null}add(t,n){const s=Fh.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Fh=new Tv(()=>new Sv,e=>e.reset());class Sv{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bv(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Av(e){$.setTimeout(()=>{throw e},0)}let Rs,Ps=!1,qa=new Cv,Lh=()=>{const e=$.Promise.resolve(void 0);Rs=()=>{e.then(Dv)}};var Dv=()=>{for(var e;e=Iv();){try{e.h.call(e.g)}catch(n){Av(n)}var t=Fh;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ps=!1};function Ci(e,t){Et.call(this),this.h=e||1,this.g=t||$,this.j=Ot(this.qb,this),this.l=Date.now()}_t(Ci,Et);b=Ci.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),St(this,"tick"),this.ga&&(za(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function za(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}b.N=function(){Ci.$.N.call(this),za(this),delete this.g};function Ka(e,t,n){if(typeof e=="function")n&&(e=Ot(e,n));else if(e&&typeof e.handleEvent=="function")e=Ot(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:$.setTimeout(e,t||0)}function $h(e){e.g=Ka(()=>{e.g=null,e.i&&(e.i=!1,$h(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class xv extends qe{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$h(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fs(e){qe.call(this),this.h=e,this.g={}}_t(Fs,qe);var Cl=[];function Vh(e,t,n,s){Array.isArray(n)||(n&&(Cl[0]=n.toString()),n=Cl);for(var r=0;r<n.length;r++){var i=kh(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Uh(e){La(e.g,function(t,n){this.g.hasOwnProperty(n)&&Va(t)},e),e.g={}}Fs.prototype.N=function(){Fs.$.N.call(this),Uh(this)};Fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Si(){this.g=!0}Si.prototype.Ea=function(){this.g=!1};function Nv(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function kv(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Sn(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Ov(e,n)+(s?" "+s:"")})}function Mv(e,t){e.info(function(){return"TIMEOUT: "+t})}Si.prototype.info=function(){};function Ov(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ja(n)}catch{return t}}var dn={},Sl=null;function bi(){return Sl=Sl||new Et}dn.Ta="serverreachability";function Bh(e){Rt.call(this,dn.Ta,e)}_t(Bh,Rt);function Ls(e){const t=bi();St(t,new Bh(t))}dn.STAT_EVENT="statevent";function jh(e,t){Rt.call(this,dn.STAT_EVENT,e),this.stat=t}_t(jh,Rt);function Bt(e){const t=bi();St(t,new jh(t,e))}dn.Ua="timingevent";function qh(e,t){Rt.call(this,dn.Ua,e),this.size=t}_t(qh,Rt);function Gs(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){e()},t)}var Ai={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ha(){}Ha.prototype.h=null;function bl(e){return e.h||(e.h=e.i())}function Kh(){}var Qs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wa(){Rt.call(this,"d")}_t(Wa,Rt);function Ga(){Rt.call(this,"c")}_t(Ga,Rt);var Wo;function Di(){}_t(Di,Ha);Di.prototype.g=function(){return new XMLHttpRequest};Di.prototype.i=function(){return{}};Wo=new Di;function Ys(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new Fs(this),this.P=Rv,e=jo?125:void 0,this.V=new Ci(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Hh}function Hh(){this.i=null,this.g="",this.h=!1}var Rv=45e3,Go={},zr={};b=Ys.prototype;b.setTimeout=function(e){this.P=e};function Qo(e,t,n){e.L=1,e.v=Ni(be(t)),e.s=n,e.S=!0,Wh(e,null)}function Wh(e,t){e.G=Date.now(),Xs(e),e.A=be(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),ef(n.i,"t",s),e.C=0,n=e.l.J,e.h=new Hh,e.g=If(e.l,n?t:null,!e.s),0<e.O&&(e.M=new xv(Ot(e.Pa,e,e.g),e.O)),Vh(e.U,e.g,"readystatechange",e.nb),t=e.I?xh(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ls(),Nv(e.j,e.u,e.A,e.m,e.W,e.s)}b.nb=function(e){e=e.target;const t=this.M;t&&fe(e)==3?t.l():this.Pa(e)};b.Pa=function(e){try{if(e==this.g)t:{const u=fe(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>u)&&(u!=3||jo||this.g&&(this.h.h||this.g.ja()||Nl(this.g)))){this.J||u!=4||t==7||(t==8||0>=f?Ls(3):Ls(2)),xi(this);var n=this.g.da();this.ca=n;e:if(Gh(this)){var s=Nl(this.g);e="";var r=s.length,i=fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),ws(this);var o="";break e}this.h.i=new $.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kv(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ms(a)){var l=a;break e}}l=null}if(n=l)Sn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yo(this,n);else{this.i=!1,this.o=3,Bt(12),en(this),ws(this);break t}}this.S?(Qh(this,u,o),jo&&this.i&&u==3&&(Vh(this.U,this.V,"tick",this.mb),this.V.start())):(Sn(this.j,this.m,o,null),Yo(this,o)),u==4&&en(this),this.i&&!this.J&&(u==4?wf(this.l,this):(this.i=!1,Xs(this)))}else e0(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Bt(12)):(this.o=0,Bt(13)),en(this),ws(this)}}}catch{}finally{}};function Gh(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Qh(e,t,n){let s=!0,r;for(;!e.J&&e.C<n.length;)if(r=Pv(e,n),r==zr){t==4&&(e.o=4,Bt(14),s=!1),Sn(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Go){e.o=4,Bt(15),Sn(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Sn(e.j,e.m,r,null),Yo(e,r);Gh(e)&&r!=zr&&r!=Go&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Bt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),tc(t),t.M=!0,Bt(11))):(Sn(e.j,e.m,n,"[Invalid Chunked Response]"),en(e),ws(e))}b.mb=function(){if(this.g){var e=fe(this.g),t=this.g.ja();this.C<t.length&&(xi(this),Qh(this,e,t),this.i&&e!=4&&Xs(this))}};function Pv(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?zr:(n=Number(t.substring(n,s)),isNaN(n)?Go:(s+=1,s+n>t.length?zr:(t=t.slice(s,s+n),e.C=s+n,t)))}b.cancel=function(){this.J=!0,en(this)};function Xs(e){e.Y=Date.now()+e.P,Yh(e,e.P)}function Yh(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Gs(Ot(e.lb,e),t)}function xi(e){e.B&&($.clearTimeout(e.B),e.B=null)}b.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Mv(this.j,this.A),this.L!=2&&(Ls(),Bt(17)),en(this),this.o=2,ws(this)):Yh(this,this.Y-e)};function ws(e){e.l.H==0||e.J||wf(e.l,e)}function en(e){xi(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,za(e.V),Uh(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Yo(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Xo(n.i,e))){if(!e.K&&Xo(n.i,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Wr(n),Oi(n);else break t;Za(n),Bt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Gs(Ot(n.ib,n),6e3));if(1>=rf(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else nn(n,11)}else if((e.K||n.g==e)&&Wr(n),!Ms(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const f=l[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const D=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(D){var i=s.i;i.g||D.indexOf("spdy")==-1&&D.indexOf("quic")==-1&&D.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Qa(i,i.h),i.h=null))}if(s.F){const S=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(s.Da=S,it(s.I,s.F,S))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=Tf(s,s.J?s.pa:null,s.Y),o.K){of(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(xi(a),Xs(a)),s.g=o}else yf(s);0<n.j.length&&Ri(n)}else l[0]!="stop"&&l[0]!="close"||nn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?nn(n,7):Ja(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ls(4)}catch{}}function Fv(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ei(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Lv(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ei(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Xh(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ei(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Lv(e),s=Fv(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var Jh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $v(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function an(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof an){this.h=e.h,Kr(this,e.j),this.s=e.s,this.g=e.g,Hr(this,e.m),this.l=e.l;var t=e.i,n=new $s;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Al(this,n),this.o=e.o}else e&&(t=String(e).match(Jh))?(this.h=!1,Kr(this,t[1]||"",!0),this.s=hs(t[2]||""),this.g=hs(t[3]||"",!0),Hr(this,t[4]),this.l=hs(t[5]||"",!0),Al(this,t[6]||"",!0),this.o=hs(t[7]||"")):(this.h=!1,this.i=new $s(null,this.h))}an.prototype.toString=function(){var e=[],t=this.j;t&&e.push(fs(t,Dl,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(fs(t,Dl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(fs(n,n.charAt(0)=="/"?Bv:Uv,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",fs(n,qv)),e.join("")};function be(e){return new an(e)}function Kr(e,t,n){e.j=n?hs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Hr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Al(e,t,n){t instanceof $s?(e.i=t,zv(e.i,e.h)):(n||(t=fs(t,jv)),e.i=new $s(t,e.h))}function it(e,t,n){e.i.set(t,n)}function Ni(e){return it(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function hs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function fs(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Vv),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Vv(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Dl=/[#\/\?@]/g,Uv=/[#\?:]/g,Bv=/[#\?]/g,jv=/[#\?@]/g,qv=/#/g;function $s(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ze(e){e.g||(e.g=new Map,e.h=0,e.i&&$v(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}b=$s.prototype;b.add=function(e,t){ze(this),this.i=null,e=Jn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Zh(e,t){ze(e),t=Jn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tf(e,t){return ze(e),t=Jn(e,t),e.g.has(t)}b.forEach=function(e,t){ze(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};b.ta=function(){ze(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};b.Z=function(e){ze(this);let t=[];if(typeof e=="string")tf(this,e)&&(t=t.concat(this.g.get(Jn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};b.set=function(e,t){return ze(this),this.i=null,e=Jn(this,e),tf(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};b.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function ef(e,t,n){Zh(e,t),0<n.length&&(e.i=null,e.g.set(Jn(e,t),Pa(n)),e.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function Jn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function zv(e,t){t&&!e.j&&(ze(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Zh(this,s),ef(this,r,n))},e)),e.j=t}var Kv=class{constructor(e,t){this.g=e,this.map=t}};function nf(e){this.l=e||Hv,$.PerformanceNavigationTiming?(e=$.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hv=10;function sf(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function rf(e){return e.h?1:e.g?e.g.size:0}function Xo(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Qa(e,t){e.g?e.g.add(t):e.h=t}function of(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}nf.prototype.cancel=function(){if(this.i=af(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function af(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Pa(e.i)}var Wv=class{stringify(e){return $.JSON.stringify(e,void 0)}parse(e){return $.JSON.parse(e,void 0)}};function Gv(){this.g=new Wv}function Qv(e,t,n){const s=n||"";try{Xh(e,function(r,i){let o=r;Hs(r)&&(o=ja(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Yv(e,t){const n=new Si;if($.Image){const s=new Image;s.onload=yr(wr,n,s,"TestLoadImage: loaded",!0,t),s.onerror=yr(wr,n,s,"TestLoadImage: error",!1,t),s.onabort=yr(wr,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=yr(wr,n,s,"TestLoadImage: timeout",!1,t),$.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function wr(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Js(e){this.l=e.fc||null,this.j=e.ob||!1}_t(Js,Ha);Js.prototype.g=function(){return new ki(this.l,this.j)};Js.prototype.i=function(e){return function(){return e}}({});function ki(e,t){Et.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Ya,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_t(ki,Et);var Ya=0;b=ki.prototype;b.open=function(e,t){if(this.readyState!=Ya)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Vs(this)};b.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||$).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=Ya};b.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cf(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function cf(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}b.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Zs(this):Vs(this),this.readyState==3&&cf(this)}};b.Za=function(e){this.g&&(this.response=this.responseText=e,Zs(this))};b.Ya=function(e){this.g&&(this.response=e,Zs(this))};b.ka=function(){this.g&&Zs(this)};function Zs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Vs(e)}b.setRequestHeader=function(e,t){this.v.append(e,t)};b.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Vs(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Xv=$.JSON.parse;function ft(e){Et.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=lf,this.L=this.M=!1}_t(ft,Et);var lf="",Jv=/^https?$/i,Zv=["POST","PUT"];b=ft.prototype;b.Oa=function(e){this.M=e};b.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Wo.g(),this.C=this.u?bl(this.u):bl(Wo),this.g.onreadystatechange=Ot(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){xl(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=$.FormData&&e instanceof $.FormData,!(0<=Sh(Zv,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ff(this),0<this.B&&((this.L=t0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ot(this.ua,this)):this.A=Ka(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){xl(this,i)}};function t0(e){return Vn&&typeof e.timeout=="number"&&e.ontimeout!==void 0}b.ua=function(){typeof Ra<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,St(this,"timeout"),this.abort(8))};function xl(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,uf(e),Mi(e)}function uf(e){e.F||(e.F=!0,St(e,"complete"),St(e,"error"))}b.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,St(this,"complete"),St(this,"abort"),Mi(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mi(this,!0)),ft.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?hf(this):this.kb())};b.kb=function(){hf(this)};function hf(e){if(e.h&&typeof Ra<"u"&&(!e.C[1]||fe(e)!=4||e.da()!=2)){if(e.v&&fe(e)==4)Ka(e.La,0,e);else if(St(e,"readystatechange"),fe(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=o===0){var r=String(e.I).match(Jh)[1]||null;!r&&$.self&&$.self.location&&(r=$.self.location.protocol.slice(0,-1)),s=!Jv.test(r?r.toLowerCase():"")}n=s}if(n)St(e,"complete"),St(e,"success");else{e.m=6;try{var i=2<fe(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",uf(e)}}finally{Mi(e)}}}}function Mi(e,t){if(e.g){ff(e);const n=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||St(e,"ready");try{n.onreadystatechange=s}catch{}}}function ff(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&($.clearTimeout(e.A),e.A=null)}b.isActive=function(){return!!this.g};function fe(e){return e.g?e.g.readyState:0}b.da=function(){try{return 2<fe(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Xv(t)}};function Nl(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case lf:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function e0(e){const t={};e=(e.g&&2<=fe(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<e.length;s++){if(Ms(e[s]))continue;var n=bv(e[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[r]||[];t[r]=i,i.push(n)}wv(t,function(s){return s.join(", ")})}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function df(e){let t="";return La(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Xa(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=df(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):it(e,t,n))}function as(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function pf(e){this.Ga=0,this.j=[],this.l=new Si,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=as("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=as("baseRetryDelayMs",5e3,e),this.hb=as("retryDelaySeedMs",1e4,e),this.eb=as("forwardChannelMaxRetries",2,e),this.xa=as("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new nf(e&&e.concurrentRequestLimit),this.Ja=new Gv,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}b=pf.prototype;b.ra=8;b.H=1;function Ja(e){if(gf(e),e.H==3){var t=e.W++,n=be(e.I);if(it(n,"SID",e.K),it(n,"RID",t),it(n,"TYPE","terminate"),tr(e,n),t=new Ys(e,e.l,t),t.L=2,t.v=Ni(be(n)),n=!1,$.navigator&&$.navigator.sendBeacon)try{n=$.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&$.Image&&(new Image().src=t.v,n=!0),n||(t.g=If(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Xs(t)}_f(e)}function Oi(e){e.g&&(tc(e),e.g.cancel(),e.g=null)}function gf(e){Oi(e),e.u&&($.clearTimeout(e.u),e.u=null),Wr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&$.clearTimeout(e.m),e.m=null)}function Ri(e){if(!sf(e.i)&&!e.m){e.m=!0;var t=e.Na;Rs||Lh(),Ps||(Rs(),Ps=!0),qa.add(t,e),e.C=0}}function n0(e,t){return rf(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Gs(Ot(e.Na,e,t),Ef(e,e.C)),e.C++,!0)}b.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new Ys(this,this.l,e);let i=this.s;if(this.U&&(i?(i=xh(i),Nh(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=mf(this,r,t),n=be(this.I),it(n,"RID",e),it(n,"CVER",22),this.F&&it(n,"X-HTTP-Session-Id",this.F),tr(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(df(i)))+"&"+t:this.o&&Xa(n,this.o,i)),Qa(this.i,r),this.bb&&it(n,"TYPE","init"),this.P?(it(n,"$req",t),it(n,"SID","null"),r.aa=!0,Qo(r,n,null)):Qo(r,n,t),this.H=2}}else this.H==3&&(e?kl(this,e):this.j.length==0||sf(this.i)||kl(this))};function kl(e,t){var n;t?n=t.m:n=e.W++;const s=be(e.I);it(s,"SID",e.K),it(s,"RID",n),it(s,"AID",e.V),tr(e,s),e.o&&e.s&&Xa(s,e.o,e.s),n=new Ys(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=mf(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Qa(e.i,n),Qo(n,s,t)}function tr(e,t){e.na&&La(e.na,function(n,s){it(t,s,n)}),e.h&&Xh({},function(n,s){it(t,s,n)})}function mf(e,t,n){n=Math.min(e.j.length,n);var s=e.h?Ot(e.h.Va,e.h,e):null;t:{var r=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{Qv(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,s}function yf(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Rs||Lh(),Ps||(Rs(),Ps=!0),qa.add(t,e),e.A=0}}function Za(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Gs(Ot(e.Ma,e),Ef(e,e.A)),e.A++,!0)}b.Ma=function(){if(this.u=null,vf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Gs(Ot(this.jb,this),e)}};b.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Bt(10),Oi(this),vf(this))};function tc(e){e.B!=null&&($.clearTimeout(e.B),e.B=null)}function vf(e){e.g=new Ys(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=be(e.wa);it(t,"RID","rpc"),it(t,"SID",e.K),it(t,"AID",e.V),it(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&it(t,"TO",e.qa),it(t,"TYPE","xmlhttp"),tr(e,t),e.o&&e.s&&Xa(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ni(be(t)),n.s=null,n.S=!0,Wh(n,e)}b.ib=function(){this.v!=null&&(this.v=null,Oi(this),Za(this),Bt(19))};function Wr(e){e.v!=null&&($.clearTimeout(e.v),e.v=null)}function wf(e,t){var n=null;if(e.g==t){Wr(e),tc(e),e.g=null;var s=2}else if(Xo(e.i,t))n=t.F,of(e.i,t),s=1;else return;if(e.H!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;s=bi(),St(s,new qh(s,n)),Ri(e)}else yf(e);else if(r=t.o,r==3||r==0&&0<t.ca||!(s==1&&n0(e,t)||s==2&&Za(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:nn(e,5);break;case 4:nn(e,10);break;case 3:nn(e,6);break;default:nn(e,2)}}}function Ef(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function nn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var s=Ot(e.pb,e);n||(n=new an("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Kr(n,"https"),Ni(n)),Yv(n.toString(),s)}else Bt(2);e.H=0,e.h&&e.h.za(t),_f(e),gf(e)}b.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Bt(2)):(this.l.info("Failed to ping google.com"),Bt(1))};function _f(e){if(e.H=0,e.ma=[],e.h){const t=af(e.i);(t.length!=0||e.j.length!=0)&&(_l(e.ma,t),_l(e.ma,e.j),e.i.i.length=0,Pa(e.j),e.j.length=0),e.h.ya()}}function Tf(e,t,n){var s=n instanceof an?be(n):new an(n);if(s.g!="")t&&(s.g=t+"."+s.g),Hr(s,s.m);else{var r=$.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new an(null);s&&Kr(i,s),t&&(i.g=t),r&&Hr(i,r),n&&(i.l=n),s=i}return n=e.F,t=e.Da,n&&t&&it(s,n,t),it(s,"VER",e.ra),tr(e,s),s}function If(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new ft(new Js({ob:!0})):new ft(e.va),t.Oa(e.J),t}b.isActive=function(){return!!this.h&&this.h.isActive(this)};function Cf(){}b=Cf.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.isActive=function(){return!0};b.Va=function(){};function Gr(){if(Vn&&!(10<=Number(gv)))throw Error("Environmental error: no available transport.")}Gr.prototype.g=function(e,t){return new Wt(e,t)};function Wt(e,t){Et.call(this),this.g=new pf(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Ms(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ms(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Zn(this)}_t(Wt,Et);Wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Bt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Tf(e,null,e.Y),Ri(e)};Wt.prototype.close=function(){Ja(this.g)};Wt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ja(e),e=n);t.j.push(new Kv(t.fb++,e)),t.H==3&&Ri(t)};Wt.prototype.N=function(){this.g.h=null,delete this.j,Ja(this.g),delete this.g,Wt.$.N.call(this)};function Sf(e){Wa.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}_t(Sf,Wa);function bf(){Ga.call(this),this.status=1}_t(bf,Ga);function Zn(e){this.g=e}_t(Zn,Cf);Zn.prototype.Ba=function(){St(this.g,"a")};Zn.prototype.Aa=function(e){St(this.g,new Sf(e))};Zn.prototype.za=function(e){St(this.g,new bf)};Zn.prototype.ya=function(){St(this.g,"b")};function s0(){this.blockSize=-1}function ie(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}_t(ie,s0);ie.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function go(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var r=0;16>r;++r)s[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var i=e.g[3],o=t+(i^n&(r^i))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^i&(n^r))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^i)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~i))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+i&4294967295}ie.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,r=this.h,i=0;i<t;){if(r==0)for(;i<=n;)go(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[r++]=e.charCodeAt(i++),r==this.blockSize){go(this,s),r=0;break}}else for(;i<t;)if(s[r++]=e[i++],r==this.blockSize){go(this,s),r=0;break}}this.h=r,this.i+=t};ie.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function tt(e,t){this.h=t;for(var n=[],s=!0,r=e.length-1;0<=r;r--){var i=e[r]|0;s&&i==t||(n[r]=i,s=!1)}this.g=n}var r0={};function ec(e){return-128<=e&&128>e?fv(e,function(t){return new tt([t|0],0>t?-1:0)}):new tt([e|0],0>e?-1:0)}function de(e){if(isNaN(e)||!isFinite(e))return kn;if(0>e)return It(de(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=Jo;return new tt(t,0)}function Af(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return It(Af(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=de(Math.pow(t,8)),s=kn,r=0;r<e.length;r+=8){var i=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+i),t);8>i?(i=de(Math.pow(t,i)),s=s.R(i).add(de(o))):(s=s.R(n),s=s.add(de(o)))}return s}var Jo=4294967296,kn=ec(0),Zo=ec(1),Ml=ec(16777216);b=tt.prototype;b.ea=function(){if(Gt(this))return-It(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:Jo+s)*t,t*=Jo}return e};b.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Te(this))return"0";if(Gt(this))return"-"+It(this).toString(e);for(var t=de(Math.pow(e,6)),n=this,s="";;){var r=Yr(n,t).g;n=Qr(n,r.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,Te(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};b.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Te(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Gt(e){return e.h==-1}b.X=function(e){return e=Qr(this,e),Gt(e)?-1:Te(e)?0:1};function It(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new tt(n,~e.h).add(Zo)}b.abs=function(){return Gt(this)?It(this):this};b.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,r=0;r<=t;r++){var i=s+(this.D(r)&65535)+(e.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new tt(n,n[n.length-1]&-2147483648?-1:0)};function Qr(e,t){return e.add(It(t))}b.R=function(e){if(Te(this)||Te(e))return kn;if(Gt(this))return Gt(e)?It(this).R(It(e)):It(It(this).R(e));if(Gt(e))return It(this.R(It(e)));if(0>this.X(Ml)&&0>e.X(Ml))return de(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<e.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(r)>>>16,c=e.D(r)&65535;n[2*s+2*r]+=o*c,Er(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Er(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Er(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Er(n,2*s+2*r+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new tt(n,0)};function Er(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function cs(e,t){this.g=e,this.h=t}function Yr(e,t){if(Te(t))throw Error("division by zero");if(Te(e))return new cs(kn,kn);if(Gt(e))return t=Yr(It(e),t),new cs(It(t.g),It(t.h));if(Gt(t))return t=Yr(e,It(t)),new cs(It(t.g),t.h);if(30<e.g.length){if(Gt(e)||Gt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Zo,s=t;0>=s.X(e);)n=Ol(n),s=Ol(s);var r=En(n,1),i=En(s,1);for(s=En(s,2),n=En(n,2);!Te(s);){var o=i.add(s);0>=o.X(e)&&(r=r.add(n),i=o),s=En(s,1),n=En(n,1)}return t=Qr(e,r.R(t)),new cs(r,t)}for(r=kn;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=de(n),o=i.R(t);Gt(o)||0<o.X(e);)n-=s,i=de(n),o=i.R(t);Te(i)&&(i=Zo),r=r.add(i),e=Qr(e,o)}return new cs(r,e)}b.gb=function(e){return Yr(this,e).h};b.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new tt(n,this.h&e.h)};b.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new tt(n,this.h|e.h)};b.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new tt(n,this.h^e.h)};function Ol(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new tt(n,e.h)}function En(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,r=[],i=0;i<s;i++)r[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new tt(r,e.h)}Gr.prototype.createWebChannel=Gr.prototype.g;Wt.prototype.send=Wt.prototype.u;Wt.prototype.open=Wt.prototype.m;Wt.prototype.close=Wt.prototype.close;Ai.NO_ERROR=0;Ai.TIMEOUT=8;Ai.HTTP_ERROR=6;zh.COMPLETE="complete";Kh.EventType=Qs;Qs.OPEN="a";Qs.CLOSE="b";Qs.ERROR="c";Qs.MESSAGE="d";Et.prototype.listen=Et.prototype.O;ft.prototype.listenOnce=ft.prototype.P;ft.prototype.getLastError=ft.prototype.Sa;ft.prototype.getLastErrorCode=ft.prototype.Ia;ft.prototype.getStatus=ft.prototype.da;ft.prototype.getResponseJson=ft.prototype.Wa;ft.prototype.getResponseText=ft.prototype.ja;ft.prototype.send=ft.prototype.ha;ft.prototype.setWithCredentials=ft.prototype.Oa;ie.prototype.digest=ie.prototype.l;ie.prototype.reset=ie.prototype.reset;ie.prototype.update=ie.prototype.j;tt.prototype.add=tt.prototype.add;tt.prototype.multiply=tt.prototype.R;tt.prototype.modulo=tt.prototype.gb;tt.prototype.compare=tt.prototype.X;tt.prototype.toNumber=tt.prototype.ea;tt.prototype.toString=tt.prototype.toString;tt.prototype.getBits=tt.prototype.D;tt.fromNumber=de;tt.fromString=Af;var i0=function(){return new Gr},o0=function(){return bi()},mo=Ai,a0=zh,c0=dn,Rl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},l0=Js,_r=Kh,u0=ft,h0=ie,Mn=tt;const Pl="@firebase/firestore";/**
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
 */class Dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
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
 */let ts="9.22.2";/**
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
 */const un=new wh("@firebase/firestore");function Fl(){return un.logLevel}function k(e,...t){if(un.logLevel<=J.DEBUG){const n=t.map(nc);un.debug(`Firestore (${ts}): ${e}`,...n)}}function Ae(e,...t){if(un.logLevel<=J.ERROR){const n=t.map(nc);un.error(`Firestore (${ts}): ${e}`,...n)}}function Un(e,...t){if(un.logLevel<=J.WARN){const n=t.map(nc);un.warn(`Firestore (${ts}): ${e}`,...n)}}function nc(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function L(e="Unexpected state"){const t=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: `+e;throw Ae(t),new Error(t)}function ot(e,t){e||L()}function j(e,t){return e}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Xn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Df{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class f0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class d0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class p0{constructor(t){this.t=t,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cn,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ot(typeof s.accessToken=="string"),new Df(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ot(t===null||typeof t=="string"),new Dt(t)}}class g0{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class m0{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new g0(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class y0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class v0{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=i=>{i.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ot(typeof n.token=="string"),this.T=n.token,new y0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function w0(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class xf{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=w0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function X(e,t){return e<t?-1:e>t?1:0}function Bn(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class yt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new R(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new R(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new R(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return yt.fromMillis(Date.now())}static fromDate(t){return yt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new yt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?X(this.nanoseconds,t.nanoseconds):X(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(t){this.timestamp=t}static fromTimestamp(t){return new B(t)}static min(){return new B(new yt(0,0))}static max(){return new B(new yt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Us{constructor(t,n,s){n===void 0?n=0:n>t.length&&L(),s===void 0?s=t.length-n:s>t.length-n&&L(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Us.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Us?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class ct extends Us{construct(t,n,s){return new ct(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new R(w.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ct(n)}static emptyPath(){return new ct([])}}const E0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Us{construct(t,n,s){return new kt(t,n,s)}static isValidIdentifier(t){return E0.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new R(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new R(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new R(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new kt(n)}static emptyPath(){return new kt([])}}/**
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
 */class P{constructor(t){this.path=t}static fromPath(t){return new P(ct.fromString(t))}static fromName(t){return new P(ct.fromString(t).popFirst(5))}static empty(){return new P(ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ct.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ct.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new P(new ct(t.slice()))}}function _0(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=B.fromTimestamp(s===1e9?new yt(n+1,0):new yt(n,s));return new Ue(r,P.empty(),t)}function T0(e){return new Ue(e.readTime,e.key,-1)}class Ue{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Ue(B.min(),P.empty(),-1)}static max(){return new Ue(B.max(),P.empty(),-1)}}function I0(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=P.comparator(e.documentKey,t.documentKey),n!==0?n:X(e.largestBatchId,t.largestBatchId))}/**
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
 */const C0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class S0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function er(e){if(e.code!==w.FAILED_PRECONDITION||e.message!==C0)throw e;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new _((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):_.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):_.reject(n)}static resolve(t){return new _((n,s)=>{n(t)})}static reject(t){return new _((n,s)=>{s(t)})}static waitFor(t){return new _((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=_.resolve(!1);for(const s of t)n=n.next(r=>r?_.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new _((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(t,n){return new _((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function nr(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class sc{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}sc.ct=-1;function Pi(e){return e==null}function Xr(e){return e===0&&1/e==-1/0}function b0(e){return typeof e=="number"&&Number.isInteger(e)&&!Xr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ll(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function es(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Nf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class ut{constructor(t,n){this.comparator=t,this.root=n||Tt.EMPTY}insert(t,n){return new ut(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(t){return new ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Tr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Tr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Tr(this.root,t,this.comparator,!0)}}class Tr{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Tt{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??Tt.RED,this.left=r??Tt.EMPTY,this.right=i??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new Tt(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return Tt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,t,n,s,r){return this}insert(e,t,n){return new Tt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(t){this.comparator=t,this.data=new ut(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new $l(this.data.getIterator())}getIteratorFrom(t){return new $l(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Pt)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Pt(this.comparator);return n.data=t,n}}class $l{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ee{constructor(t){this.fields=t,t.sort(kt.comparator)}static empty(){return new ee([])}unionWith(t){let n=new Pt(kt.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new ee(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Bn(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class kf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ft{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new kf("Invalid base64 string: "+r):r}}(t);return new Ft(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new Ft(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return X(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const A0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Be(e){if(ot(!!e),typeof e=="string"){let t=0;const n=A0.exec(e);if(ot(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:gt(e.seconds),nanos:gt(e.nanos)}}function gt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function hn(e){return typeof e=="string"?Ft.fromBase64String(e):Ft.fromUint8Array(e)}/**
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
 */function rc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ic(e){const t=e.mapValue.fields.__previous_value__;return rc(t)?ic(t):t}function Bs(e){const t=Be(e.mapValue.fields.__local_write_time__.timestampValue);return new yt(t.seconds,t.nanos)}/**
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
 */class D0{constructor(t,n,s,r,i,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class js{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new js("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof js&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ir={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rc(e)?4:x0(e)?9007199254740991:10:L()}function me(e,t){if(e===t)return!0;const n=fn(e);if(n!==fn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Bs(e).isEqual(Bs(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Be(s.timestampValue),o=Be(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return hn(s.bytesValue).isEqual(hn(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return gt(s.geoPointValue.latitude)===gt(r.geoPointValue.latitude)&&gt(s.geoPointValue.longitude)===gt(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return gt(s.integerValue)===gt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=gt(s.doubleValue),o=gt(r.doubleValue);return i===o?Xr(i)===Xr(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Bn(e.arrayValue.values||[],t.arrayValue.values||[],me);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ll(i)!==Ll(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!me(i[a],o[a])))return!1;return!0}(e,t);default:return L()}}function qs(e,t){return(e.values||[]).find(n=>me(n,t))!==void 0}function jn(e,t){if(e===t)return 0;const n=fn(e),s=fn(t);if(n!==s)return X(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=gt(r.integerValue||r.doubleValue),a=gt(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Vl(e.timestampValue,t.timestampValue);case 4:return Vl(Bs(e),Bs(t));case 5:return X(e.stringValue,t.stringValue);case 6:return function(r,i){const o=hn(r),a=hn(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=X(o[c],a[c]);if(l!==0)return l}return X(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=X(gt(r.latitude),gt(i.latitude));return o!==0?o:X(gt(r.longitude),gt(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=jn(o[c],a[c]);if(l)return l}return X(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Ir.mapValue&&i===Ir.mapValue)return 0;if(r===Ir.mapValue)return 1;if(i===Ir.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=X(a[u],l[u]);if(f!==0)return f;const p=jn(o[a[u]],c[l[u]]);if(p!==0)return p}return X(a.length,l.length)}(e.mapValue,t.mapValue);default:throw L()}}function Vl(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return X(e,t);const n=Be(e),s=Be(t),r=X(n.seconds,s.seconds);return r!==0?r:X(n.nanos,s.nanos)}function qn(e){return ta(e)}function ta(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Be(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?hn(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,P.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ta(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ta(s.fields[a])}`;return i+"}"}(e.mapValue):L();var t,n}function ea(e){return!!e&&"integerValue"in e}function oc(e){return!!e&&"arrayValue"in e}function Ul(e){return!!e&&"nullValue"in e}function Bl(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Mr(e){return!!e&&"mapValue"in e}function Es(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return es(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Es(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Es(e.arrayValue.values[n]);return t}return Object.assign({},e)}function x0(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Qt{constructor(t){this.value=t}static empty(){return new Qt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Mr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Es(n)}setAll(t){let n=kt.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Es(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Mr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return me(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Mr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){es(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new Qt(Es(this.value))}}function Mf(e){const t=[];return es(e.fields,(n,s)=>{const r=new kt([n]);if(Mr(s)){const i=Mf(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new ee(t)}/**
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
 */class xt{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new xt(t,0,B.min(),B.min(),B.min(),Qt.empty(),0)}static newFoundDocument(t,n,s,r){return new xt(t,1,n,B.min(),s,r,0)}static newNoDocument(t,n){return new xt(t,2,n,B.min(),B.min(),Qt.empty(),0)}static newUnknownDocument(t,n){return new xt(t,3,n,B.min(),B.min(),Qt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jr{constructor(t,n){this.position=t,this.inclusive=n}}function jl(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=P.comparator(P.fromName(o.referenceValue),n.key):s=jn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ql(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!me(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class _s{constructor(t,n="asc"){this.field=t,this.dir=n}}function N0(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Of{}class mt extends Of{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new M0(t,n,s):n==="array-contains"?new P0(t,s):n==="in"?new F0(t,s):n==="not-in"?new L0(t,s):n==="array-contains-any"?new $0(t,s):new mt(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new O0(t,s):new R0(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(jn(n,this.value)):n!==null&&fn(this.value)===fn(n)&&this.matchesComparison(jn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ye extends Of{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new ye(t,n)}matches(t){return Rf(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Rf(e){return e.op==="and"}function Pf(e){return k0(e)&&Rf(e)}function k0(e){for(const t of e.filters)if(t instanceof ye)return!1;return!0}function na(e){if(e instanceof mt)return e.field.canonicalString()+e.op.toString()+qn(e.value);if(Pf(e))return e.filters.map(t=>na(t)).join(",");{const t=e.filters.map(n=>na(n)).join(",");return`${e.op}(${t})`}}function Ff(e,t){return e instanceof mt?function(n,s){return s instanceof mt&&n.op===s.op&&n.field.isEqual(s.field)&&me(n.value,s.value)}(e,t):e instanceof ye?function(n,s){return s instanceof ye&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Ff(i,s.filters[o]),!0):!1}(e,t):void L()}function Lf(e){return e instanceof mt?function(t){return`${t.field.canonicalString()} ${t.op} ${qn(t.value)}`}(e):e instanceof ye?function(t){return t.op.toString()+" {"+t.getFilters().map(Lf).join(" ,")+"}"}(e):"Filter"}class M0 extends mt{constructor(t,n,s){super(t,n,s),this.key=P.fromName(s.referenceValue)}matches(t){const n=P.comparator(t.key,this.key);return this.matchesComparison(n)}}class O0 extends mt{constructor(t,n){super(t,"in",n),this.keys=$f("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class R0 extends mt{constructor(t,n){super(t,"not-in",n),this.keys=$f("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function $f(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>P.fromName(s.referenceValue))}class P0 extends mt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return oc(n)&&qs(n.arrayValue,this.value)}}class F0 extends mt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&qs(this.value.arrayValue,n)}}class L0 extends mt{constructor(t,n){super(t,"not-in",n)}matches(t){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!qs(this.value.arrayValue,n)}}class $0 extends mt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!oc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>qs(this.value.arrayValue,s))}}/**
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
 */class V0{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function zl(e,t=null,n=[],s=[],r=null,i=null,o=null){return new V0(e,t,n,s,r,i,o)}function ac(e){const t=j(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>na(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Pi(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>qn(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>qn(s)).join(",")),t.dt=n}return t.dt}function cc(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!N0(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ff(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ql(e.startAt,t.startAt)&&ql(e.endAt,t.endAt)}function sa(e){return P.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Fi{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function U0(e,t,n,s,r,i,o,a){return new Fi(e,t,n,s,r,i,o,a)}function lc(e){return new Fi(e)}function Kl(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function B0(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function j0(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function q0(e){return e.collectionGroup!==null}function On(e){const t=j(e);if(t.wt===null){t.wt=[];const n=j0(t),s=B0(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new _s(n)),t.wt.push(new _s(kt.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new _s(kt.keyField(),i))}}}return t.wt}function De(e){const t=j(e);if(!t._t)if(t.limitType==="F")t._t=zl(t.path,t.collectionGroup,On(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of On(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new _s(i.field,o))}const s=t.endAt?new Jr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jr(t.startAt.position,t.startAt.inclusive):null;t._t=zl(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function ra(e,t,n){return new Fi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Li(e,t){return cc(De(e),De(t))&&e.limitType===t.limitType}function Vf(e){return`${ac(De(e))}|lt:${e.limitType}`}function ia(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Lf(s)).join(", ")}]`),Pi(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>qn(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>qn(s)).join(",")),`Target(${n})`}(De(e))}; limitType=${e.limitType})`}function $i(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):P.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of On(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=jl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,On(n),s)||n.endAt&&!function(r,i,o){const a=jl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,On(n),s))}(e,t)}function z0(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Uf(e){return(t,n)=>{let s=!1;for(const r of On(e)){const i=K0(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function K0(e,t,n){const s=e.field.isKeyField()?P.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?jn(a,c):L()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return L()}}/**
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
 */class ns{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){es(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Nf(this.inner)}size(){return this.innerSize}}/**
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
 */const H0=new ut(P.comparator);function xe(){return H0}const Bf=new ut(P.comparator);function ds(...e){let t=Bf;for(const n of e)t=t.insert(n.key,n);return t}function jf(e){let t=Bf;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function sn(){return Ts()}function qf(){return Ts()}function Ts(){return new ns(e=>e.toString(),(e,t)=>e.isEqual(t))}const W0=new ut(P.comparator),G0=new Pt(P.comparator);function K(...e){let t=G0;for(const n of e)t=t.add(n);return t}const Q0=new Pt(X);function Y0(){return Q0}/**
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
 */function zf(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xr(t)?"-0":t}}function Kf(e){return{integerValue:""+e}}function X0(e,t){return b0(t)?Kf(t):zf(e,t)}/**
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
 */class Vi{constructor(){this._=void 0}}function J0(e,t,n){return e instanceof Zr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&rc(r)&&(r=ic(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof zs?Wf(e,t):e instanceof Ks?Gf(e,t):function(s,r){const i=Hf(s,r),o=Hl(i)+Hl(s.gt);return ea(i)&&ea(s.gt)?Kf(o):zf(s.serializer,o)}(e,t)}function Z0(e,t,n){return e instanceof zs?Wf(e,t):e instanceof Ks?Gf(e,t):n}function Hf(e,t){return e instanceof ti?ea(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Zr extends Vi{}class zs extends Vi{constructor(t){super(),this.elements=t}}function Wf(e,t){const n=Qf(t);for(const s of e.elements)n.some(r=>me(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ks extends Vi{constructor(t){super(),this.elements=t}}function Gf(e,t){let n=Qf(t);for(const s of e.elements)n=n.filter(r=>!me(r,s));return{arrayValue:{values:n}}}class ti extends Vi{constructor(t,n){super(),this.serializer=t,this.gt=n}}function Hl(e){return gt(e.integerValue||e.doubleValue)}function Qf(e){return oc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function tw(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof zs&&s instanceof zs||n instanceof Ks&&s instanceof Ks?Bn(n.elements,s.elements,me):n instanceof ti&&s instanceof ti?me(n.gt,s.gt):n instanceof Zr&&s instanceof Zr}(e.transform,t.transform)}class ew{constructor(t,n){this.version=t,this.transformResults=n}}class Ce{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ce}static exists(t){return new Ce(void 0,t)}static updateTime(t){return new Ce(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Or(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ui{}function Yf(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Jf(e.key,Ce.none()):new sr(e.key,e.data,Ce.none());{const n=e.data,s=Qt.empty();let r=new Pt(kt.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new pn(e.key,s,new ee(r.toArray()),Ce.none())}}function nw(e,t,n){e instanceof sr?function(s,r,i){const o=s.value.clone(),a=Gl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof pn?function(s,r,i){if(!Or(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Gl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Xf(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Is(e,t,n,s){return e instanceof sr?function(r,i,o,a){if(!Or(r.precondition,i))return o;const c=r.value.clone(),l=Ql(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof pn?function(r,i,o,a){if(!Or(r.precondition,i))return o;const c=Ql(r.fieldTransforms,a,i),l=i.data;return l.setAll(Xf(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(e,t,n,s):function(r,i,o){return Or(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function sw(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Hf(s.transform,r||null);i!=null&&(n===null&&(n=Qt.empty()),n.set(s.field,i))}return n||null}function Wl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Bn(n,s,(r,i)=>tw(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sr extends Ui{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class pn extends Ui{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xf(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Gl(e,t,n){const s=new Map;ot(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Z0(o,a,n[r]))}return s}function Ql(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,J0(i,o,t))}return s}class Jf extends Ui{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rw extends Ui{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class iw{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&nw(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Is(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Is(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=qf();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Yf(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(B.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),K())}isEqual(t){return this.batchId===t.batchId&&Bn(this.mutations,t.mutations,(n,s)=>Wl(n,s))&&Bn(this.baseMutations,t.baseMutations,(n,s)=>Wl(n,s))}}class uc{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){ot(t.mutations.length===s.length);let r=W0;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new uc(t,n,s,r)}}/**
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
 */class ow{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class aw{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var pt,G;function cw(e){switch(e){default:return L();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Zf(e){if(e===void 0)return Ae("GRPC error has no .code"),w.UNKNOWN;switch(e){case pt.OK:return w.OK;case pt.CANCELLED:return w.CANCELLED;case pt.UNKNOWN:return w.UNKNOWN;case pt.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case pt.INTERNAL:return w.INTERNAL;case pt.UNAVAILABLE:return w.UNAVAILABLE;case pt.UNAUTHENTICATED:return w.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case pt.NOT_FOUND:return w.NOT_FOUND;case pt.ALREADY_EXISTS:return w.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return w.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case pt.ABORTED:return w.ABORTED;case pt.OUT_OF_RANGE:return w.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return w.UNIMPLEMENTED;case pt.DATA_LOSS:return w.DATA_LOSS;default:return L()}}(G=pt||(pt={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class hc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Cr}static getOrCreateInstance(){return Cr===null&&(Cr=new hc),Cr}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Cr=null;/**
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
 */function lw(){return new TextEncoder}/**
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
 */const uw=new Mn([4294967295,4294967295],0);function Yl(e){const t=lw().encode(e),n=new h0;return n.update(t),new Uint8Array(n.digest())}function Xl(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Mn([n,s],0),new Mn([r,i],0)]}class fc{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ps(`Invalid padding: ${n}`);if(s<0)throw new ps(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new ps(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new ps(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*t.length-n,this.Tt=Mn.fromNumber(this.It)}Et(t,n,s){let r=t.add(n.multiply(Mn.fromNumber(s)));return r.compare(uw)===1&&(r=new Mn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}vt(t){if(this.It===0)return!1;const n=Yl(t),[s,r]=Xl(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(t,n,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new fc(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.It===0)return;const n=Yl(t),[s,r]=Xl(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bi{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,rr.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Bi(B.min(),r,new ut(X),xe(),K())}}class rr{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new rr(s,n,K(),K(),K())}}/**
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
 */class Rr{constructor(t,n,s,r){this.Pt=t,this.removedTargetIds=n,this.key=s,this.bt=r}}class td{constructor(t,n){this.targetId=t,this.Vt=n}}class ed{constructor(t,n,s=Ft.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Jl{constructor(){this.St=0,this.Dt=tu(),this.Ct=Ft.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=K(),n=K(),s=K();return this.Dt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:L()}}),new rr(this.Ct,this.xt,t,n,s)}Ft(){this.Nt=!1,this.Dt=tu()}Bt(t,n){this.Nt=!0,this.Dt=this.Dt.insert(t,n)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class hw{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=xe(),this.zt=Zl(),this.Wt=new ut(X)}Ht(t){for(const n of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(n,t.bt):this.Yt(n,t.key,t.bt);for(const n of t.removedTargetIds)this.Yt(n,t.key,t.bt)}Xt(t){this.forEachTarget(t,n=>{const s=this.Zt(n);switch(t.state){case 0:this.te(n)&&s.$t(t.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(t.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(t.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(t.resumeToken));break;default:L()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(t){var n;const s=t.targetId,r=t.Vt.count,i=this.se(s);if(i){const o=i.target;if(sa(o))if(r===0){const a=new P(o.path);this.Yt(s,a,xt.newNoDocument(a,B.min()))}else ot(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(t,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=hc.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,f){var p,m,D,S,x,H;const W={localCacheCount:u,existenceFilterCount:f.count},Y=f.unchangedNames;return Y&&(W.bloomFilter={applied:l===0,hashCount:(p=Y==null?void 0:Y.hashCount)!==null&&p!==void 0?p:0,bitmapLength:(S=(D=(m=Y==null?void 0:Y.bits)===null||m===void 0?void 0:m.bitmap)===null||D===void 0?void 0:D.length)!==null&&S!==void 0?S:0,padding:(H=(x=Y==null?void 0:Y.bits)===null||x===void 0?void 0:x.padding)!==null&&H!==void 0?H:0}),W}(c,a,t.Vt))}}}}re(t,n){const{unchangedNames:s,count:r}=t.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=hn(i).toUint8Array()}catch(u){if(u instanceof kf)return Un("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new fc(c,o,a)}catch(u){return Un(u instanceof ps?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(t.targetId,l)?2:0}oe(t,n){const s=this.Gt.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(t,i,null),r++)}),r}ce(t){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&sa(a.target)){const c=new P(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,xt.newNoDocument(c,t))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=K();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(t));const r=new Bi(t,n,this.Wt,this.jt,s);return this.jt=xe(),this.zt=Zl(),this.Wt=new ut(X),r}Jt(t,n){if(!this.te(t))return;const s=this.ae(t,n.key)?2:0;this.Zt(t).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(t))}Yt(t,n,s){if(!this.te(t))return;const r=this.Zt(t);this.ae(t,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(t)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(t){this.Qt.delete(t)}ie(t){const n=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let n=this.Qt.get(t);return n||(n=new Jl,this.Qt.set(t,n)),n}he(t){let n=this.zt.get(t);return n||(n=new Pt(X),this.zt=this.zt.insert(t,n)),n}te(t){const n=this.se(t)!==null;return n||k("WatchChangeAggregator","Detected inactive target",t),n}se(t){const n=this.Qt.get(t);return n&&n.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new Jl),this.Gt.getRemoteKeysForTarget(t).forEach(n=>{this.Yt(t,n,null)})}ae(t,n){return this.Gt.getRemoteKeysForTarget(t).has(n)}}function Zl(){return new ut(P.comparator)}function tu(){return new ut(P.comparator)}const fw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pw=(()=>({and:"AND",or:"OR"}))();class gw{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function oa(e,t){return e.useProto3Json||Pi(t)?t:{value:t}}function ei(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nd(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function mw(e,t){return ei(e,t.toTimestamp())}function pe(e){return ot(!!e),B.fromTimestamp(function(t){const n=Be(t);return new yt(n.seconds,n.nanos)}(e))}function dc(e,t){return function(n){return new ct(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function sd(e){const t=ct.fromString(e);return ot(ad(t)),t}function aa(e,t){return dc(e.databaseId,t.path)}function yo(e,t){const n=sd(t);if(n.get(1)!==e.databaseId.projectId)throw new R(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new R(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new P(rd(n))}function ca(e,t){return dc(e.databaseId,t)}function yw(e){const t=sd(e);return t.length===4?ct.emptyPath():rd(t)}function la(e){return new ct(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rd(e){return ot(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function eu(e,t,n){return{name:aa(e,t),fields:n.value.mapValue.fields}}function vw(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(ot(l===void 0||typeof l=="string"),Ft.fromBase64String(l||"")):(ot(l===void 0||l instanceof Uint8Array),Ft.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const l=c.code===void 0?w.UNKNOWN:Zf(c.code);return new R(l,c.message||"")}(o);n=new ed(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=yo(e,s.document.name),i=pe(s.document.updateTime),o=s.document.createTime?pe(s.document.createTime):B.min(),a=new Qt({mapValue:{fields:s.document.fields}}),c=xt.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Rr(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=yo(e,s.document),i=s.readTime?pe(s.readTime):B.min(),o=xt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Rr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=yo(e,s.document),i=s.removedTargetIds||[];n=new Rr([],i,r,null)}else{if(!("filter"in t))return L();{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new aw(r,i),a=s.targetId;n=new td(a,o)}}return n}function ww(e,t){let n;if(t instanceof sr)n={update:eu(e,t.key,t.value)};else if(t instanceof Jf)n={delete:aa(e,t.key)};else if(t instanceof pn)n={update:eu(e,t.key,t.data),updateMask:Dw(t.fieldMask)};else{if(!(t instanceof rw))return L();n={verify:aa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Zr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof zs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ks)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ti)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw L()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:mw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:L()}(e,t.precondition)),n}function Ew(e,t){return e&&e.length>0?(ot(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?pe(s.updateTime):pe(r);return i.isEqual(B.min())&&(i=pe(r)),new ew(i,s.transformResults||[])}(n,t))):[]}function _w(e,t){return{documents:[ca(e,t.path)]}}function Tw(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ca(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ca(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return od(ye.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:In(u.field),direction:Sw(u.dir)}}(l))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=oa(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Iw(e){let t=yw(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ot(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(u){const f=id(u);return f instanceof ye&&Pf(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new _s(Cn(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Pi(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,p=u.values||[];return new Jr(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,p=u.values||[];return new Jr(p,f)}(n.endAt)),U0(t,r,o,i,a,"F",c,l)}function Cw(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function id(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Cn(t.unaryFilter.field);return mt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Cn(t.unaryFilter.field);return mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Cn(t.unaryFilter.field);return mt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Cn(t.unaryFilter.field);return mt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(e):e.fieldFilter!==void 0?function(t){return mt.create(Cn(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return ye.create(t.compositeFilter.filters.map(n=>id(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return L()}}(t.compositeFilter.op))}(e):L()}function Sw(e){return fw[e]}function bw(e){return dw[e]}function Aw(e){return pw[e]}function In(e){return{fieldPath:e.canonicalString()}}function Cn(e){return kt.fromServerFormat(e.fieldPath)}function od(e){return e instanceof mt?function(t){if(t.op==="=="){if(Bl(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NAN"}};if(Ul(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Bl(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NOT_NAN"}};if(Ul(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:In(t.field),op:bw(t.op),value:t.value}}}(e):e instanceof ye?function(t){const n=t.getFilters().map(s=>od(s));return n.length===1?n[0]:{compositeFilter:{op:Aw(t.op),filters:n}}}(e):L()}function Dw(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function ad(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Oe{constructor(t,n,s,r,i=B.min(),o=B.min(),a=Ft.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Oe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Oe(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class xw{constructor(t){this.fe=t}}function Nw(e){const t=Iw({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ra(t,t.limit,"L"):t}/**
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
 */class kw{constructor(){this.rn=new Mw}addToCollectionParentIndex(t,n){return this.rn.add(n),_.resolve()}getCollectionParents(t,n){return _.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return _.resolve()}deleteFieldIndex(t,n){return _.resolve()}getDocumentsMatchingTarget(t,n){return _.resolve(null)}getIndexType(t,n){return _.resolve(0)}getFieldIndexes(t,n){return _.resolve([])}getNextCollectionGroupToUpdate(t){return _.resolve(null)}getMinOffset(t,n){return _.resolve(Ue.min())}getMinOffsetFromCollectionGroup(t,n){return _.resolve(Ue.min())}updateCollectionGroup(t,n,s){return _.resolve()}updateIndexEntries(t,n){return _.resolve()}}class Mw{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new Pt(ct.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new Pt(ct.comparator)).toArray()}}/**
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
 */class zn{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new zn(0)}static Mn(){return new zn(-1)}}/**
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
 */class Ow{constructor(){this.changes=new ns(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?_.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Rw{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Pw{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Is(s.mutation,r,ee.empty(),yt.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,K()).next(()=>s))}getLocalViewOfDocuments(t,n,s=K()){const r=sn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=ds();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=sn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,K()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=xe();const o=Ts(),a=Ts();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof pn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Is(u.mutation,l,u.mutation.getFieldMask(),yt.now())):o.set(l.key,ee.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new Rw(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Ts();let r=new ut((o,a)=>o-a),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||ee.empty();u=a.applyToLocalView(l,u),s.set(c,u);const f=(r.get(a.batchId)||K()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=qf();u.forEach(p=>{if(!i.has(p)){const m=Yf(n.get(p),s.get(p));m!==null&&f.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,f))}return _.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return P.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):q0(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):_.resolve(sn());let a=-1,c=i;return o.next(l=>_.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?_.resolve():this.remoteDocumentCache.getEntry(t,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,K())).next(u=>({batchId:a,changes:jf(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new P(n)).next(s=>{let r=ds();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=ds();return this.indexManager.getCollectionParents(t,r).next(o=>_.forEach(o,a=>{const c=function(l,u){return new Fi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(l=>{l.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,xt.newInvalidDocument(l)))});let o=ds();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Is(l.mutation,c,ee.empty(),yt.now()),$i(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Fw{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return _.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:pe(s.createTime)}),_.resolve()}getNamedQuery(t,n){return _.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(s){return{name:s.name,query:Nw(s.bundledQuery),readTime:pe(s.readTime)}}(n)),_.resolve()}}/**
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
 */class Lw{constructor(){this.overlays=new ut(P.comparator),this.ls=new Map}getOverlay(t,n){return _.resolve(this.overlays.get(n))}getOverlays(t,n){const s=sn();return _.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.we(t,n,i)}),_.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),_.resolve()}getOverlaysForCollection(t,n,s){const r=sn(),i=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return _.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new ut((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=sn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=sn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return _.resolve(a)}we(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ow(n,s));let i=this.ls.get(n);i===void 0&&(i=K(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class pc{constructor(){this.fs=new Pt(wt.ds),this.ws=new Pt(wt._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const s=new wt(t,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ys(new wt(t,n))}ps(t,n){t.forEach(s=>this.removeReference(s,n))}Is(t){const n=new P(new ct([])),s=new wt(n,t),r=new wt(n,t+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new P(new ct([])),s=new wt(n,t),r=new wt(n,t+1);let i=K();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new wt(t,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class wt{constructor(t,n){this.key=t,this.As=n}static ds(t,n){return P.comparator(t.key,n.key)||X(t.As,n.As)}static _s(t,n){return X(t.As,n.As)||P.comparator(t.key,n.key)}}/**
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
 */class $w{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Pt(wt.ds)}checkEmpty(t){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iw(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new wt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(t,n){return _.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new wt(n,0),r=new wt(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Pt(X);return n.forEach(r=>{const i=new wt(r,0),o=new wt(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),_.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;P.isDocumentKey(i)||(i=i.child(""));const o=new wt(new P(i),0);let a=new Pt(X);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),_.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){ot(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return _.forEach(n.mutations,r=>{const i=new wt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Rs=s})}Cn(t){}containsKey(t,n){const s=new wt(n,0),r=this.Rs.firstAfterOrEqual(s);return _.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,_.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Vw{constructor(t){this.Ds=t,this.docs=new ut(P.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return _.resolve(s?s.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(t,n){let s=xe();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():xt.newInvalidDocument(r))}),_.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=xe();const o=n.path,a=new P(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||I0(T0(u),s)<=0||(r.has(u.key)||$i(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(t,n,s,r){L()}Cs(t,n){return _.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Uw(this)}getSize(t){return _.resolve(this.size)}}class Uw extends Ow{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(t,r)):this.os.removeEntry(s)}),_.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
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
 */class Bw{constructor(t){this.persistence=t,this.xs=new ns(n=>ac(n),cc),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Ns=0,this.ks=new pc,this.targetCount=0,this.Ms=zn.kn()}forEachTarget(t,n){return this.xs.forEach((s,r)=>n(r)),_.resolve()}getLastRemoteSnapshotVersion(t){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return _.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),_.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new zn(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,_.resolve()}updateTargetData(t,n){return this.Fn(n),_.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),_.waitFor(i).next(()=>r)}getTargetCount(t){return _.resolve(this.targetCount)}getTargetData(t,n){const s=this.xs.get(n)||null;return _.resolve(s)}addMatchingKeys(t,n,s){return this.ks.gs(n,s),_.resolve()}removeMatchingKeys(t,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),_.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),_.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ks.Es(n);return _.resolve(s)}containsKey(t,n){return _.resolve(this.ks.containsKey(n))}}/**
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
 */class jw{constructor(t,n){this.$s={},this.overlays={},this.Os=new sc(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Bw(this),this.indexManager=new kw,this.remoteDocumentCache=function(s){return new Vw(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new xw(n),this.qs=new Fw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Lw,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.$s[t.toKey()];return s||(s=new $w(n,this.referenceDelegate),this.$s[t.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,s){k("MemoryPersistence","Starting transaction:",t);const r=new qw(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(t,n){return _.or(Object.values(this.$s).map(s=>()=>s.containsKey(t,n)))}}class qw extends S0{constructor(t){super(),this.currentSequenceNumber=t}}class gc{constructor(t){this.persistence=t,this.Qs=new pc,this.js=null}static zs(t){return new gc(t)}get Ws(){if(this.js)return this.js;throw L()}addReference(t,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),_.resolve()}removeReference(t,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),_.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),_.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ws,s=>{const r=P.fromPath(s);return this.Hs(t,r).next(i=>{i||n.removeEntry(r,B.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return _.or([()=>_.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
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
 */class mc{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(t,n){let s=K(),r=K();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new mc(t,n.fromCache,s,r)}}/**
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
 */class zw{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ki(t,n).next(i=>i||this.Gi(t,n,r,s)).next(i=>i||this.Qi(t,n))}Ki(t,n){if(Kl(n))return _.resolve(null);let s=De(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ra(n,null,"F"),s=De(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=K(...i);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(t,ra(n,null,"F")):this.Wi(t,l,n,c)}))})))}Gi(t,n,s,r){return Kl(n)||r.isEqual(B.min())?this.Qi(t,n):this.Ui.getDocuments(t,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(t,n):(Fl()<=J.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ia(n)),this.Wi(t,o,n,_0(r,-1)))})}ji(t,n){let s=new Pt(Uf(t));return n.forEach((r,i)=>{$i(t,i)&&(s=s.add(i))}),s}zi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(t,n){return Fl()<=J.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",ia(n)),this.Ui.getDocumentsMatchingQuery(t,n,Ue.min())}Wi(t,n,s,r){return this.Ui.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Kw{constructor(t,n,s,r){this.persistence=t,this.Hi=n,this.serializer=r,this.Ji=new ut(X),this.Yi=new ns(i=>ac(i),cc),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(s)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Pw(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function Hw(e,t,n,s){return new Kw(e,t,n,s)}async function cd(e,t){const n=j(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=K();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function Ww(e,t){const n=j(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let p=_.resolve();return f.forEach(m=>{p=p.next(()=>l.getEntry(a,m)).next(D=>{const S=c.docVersions.get(m);ot(S!==null),D.version.compareTo(S)<0&&(u.applyToRemoteDocument(D,c),D.isValidDocument()&&(D.setReadTime(c.commitVersion),l.addEntry(D)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=K();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function ld(e){const t=j(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function Gw(e,t){const n=j(e),s=t.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];t.targetChanges.forEach((u,f)=>{const p=r.get(f);if(!p)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,f)));let m=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(f)!==null?m=m.withResumeToken(Ft.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(f,m),function(D,S,x){return D.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,m,u)&&a.push(n.Bs.updateTargetData(i,m))});let c=xe(),l=K();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Qw(i,o,t.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(B.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(f=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return _.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function Qw(e,t,n){let s=K(),r=K();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=xe();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(B.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function Yw(e,t){const n=j(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Xw(e,t){const n=j(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,t).next(i=>i?(r=i,_.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new Oe(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(t,s.targetId)),s})}async function ua(e,t,n){const s=j(e),r=s.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!nr(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(r.target)}function nu(e,t,n){const s=j(e);let r=B.min(),i=K();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=j(a),f=u.Yi.get(l);return f!==void 0?_.resolve(u.Ji.get(f)):u.Bs.getTargetData(c,l)}(s,o,De(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,t,n?r:B.min(),n?i:K())).next(a=>(Jw(s,z0(t),a),{documents:a,ir:i})))}function Jw(e,t,n){let s=e.Xi.get(t)||B.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Xi.set(t,s)}class su{constructor(){this.activeTargetIds=Y0()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Zw{constructor(){this.Hr=new su,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,s){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new su,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class tE{Yr(t){}shutdown(){}}/**
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
 */class ru{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sr=null;function vo(){return Sr===null?Sr=268435456+Math.round(2147483648*Math.random()):Sr++,"0x"+Sr.toString(16)}/**
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
 */const eE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class nE{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
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
 */const At="WebChannelConnection";class sE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,s,r,i){const o=vo(),a=this.To(t,n);k("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(t,a,c,s).then(l=>(k("RestConnection",`Received RPC '${t}' ${o}: `,l),l),l=>{throw Un("RestConnection",`RPC '${t}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(t,n,s,r,i,o){return this.Io(t,n,s,r,i)}Eo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ts,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}To(t,n){const s=eE[t];return`${this.mo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,s,r){const i=vo();return new Promise((o,a)=>{const c=new u0;c.setWithCredentials(!0),c.listenOnce(a0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case mo.NO_ERROR:const u=c.getResponseJson();k(At,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case mo.TIMEOUT:k(At,`RPC '${t}' ${i} timed out`),a(new R(w.DEADLINE_EXCEEDED,"Request time out"));break;case mo.HTTP_ERROR:const f=c.getStatus();if(k(At,`RPC '${t}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const D=function(S){const x=S.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(x)>=0?x:w.UNKNOWN}(m.status);a(new R(D,m.message))}else a(new R(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new R(w.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{k(At,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(r);k(At,`RPC '${t}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(t,n,s){const r=vo(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=i0(),a=o0(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new l0({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");k(At,`Creating RPC '${t}' stream ${r}: ${u}`,c);const f=o.createWebChannel(u,c);let p=!1,m=!1;const D=new nE({ro:x=>{m?k(At,`Not sending because RPC '${t}' stream ${r} is closed:`,x):(p||(k(At,`Opening RPC '${t}' stream ${r} transport.`),f.open(),p=!0),k(At,`RPC '${t}' stream ${r} sending:`,x),f.send(x))},oo:()=>f.close()}),S=(x,H,W)=>{x.listen(H,Y=>{try{W(Y)}catch(F){setTimeout(()=>{throw F},0)}})};return S(f,_r.EventType.OPEN,()=>{m||k(At,`RPC '${t}' stream ${r} transport opened.`)}),S(f,_r.EventType.CLOSE,()=>{m||(m=!0,k(At,`RPC '${t}' stream ${r} transport closed`),D.wo())}),S(f,_r.EventType.ERROR,x=>{m||(m=!0,Un(At,`RPC '${t}' stream ${r} transport errored:`,x),D.wo(new R(w.UNAVAILABLE,"The operation could not be completed")))}),S(f,_r.EventType.MESSAGE,x=>{var H;if(!m){const W=x.data[0];ot(!!W);const Y=W,F=Y.error||((H=Y[0])===null||H===void 0?void 0:H.error);if(F){k(At,`RPC '${t}' stream ${r} received error:`,F);const Kt=F.status;let ve=function(we){const mn=pt[we];if(mn!==void 0)return Zf(mn)}(Kt),Ke=F.message;ve===void 0&&(ve=w.INTERNAL,Ke="Unknown error status: "+Kt+" with message "+F.message),m=!0,D.wo(new R(ve,Ke)),f.close()}else k(At,`RPC '${t}' stream ${r} received:`,W),D._o(W)}}),S(a,c0.STAT_EVENT,x=>{x.stat===Rl.PROXY?k(At,`RPC '${t}' stream ${r} detected buffering proxy`):x.stat===Rl.NOPROXY&&k(At,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{D.fo()},0),D}}function wo(){return typeof document<"u"?document:null}/**
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
 */function ji(e){return new gw(e,!0)}/**
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
 */class ud{constructor(t,n,s=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&k("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class hd{constructor(t,n,s,r,i,o,a,c){this.ii=t,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new ud(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Ae(n.toString()),Ae("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{t(()=>{const r=new R(w.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(t,n){const s=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rE extends hd{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.qo.reset();const n=vw(this.serializer,t),s=function(r){if(!("targetChange"in r))return B.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?B.min():i.readTime?pe(i.readTime):B.min()}(t);return this.listener.nu(n,s)}su(t){const n={};n.database=la(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=sa(a)?{documents:_w(r,a)}:{query:Tw(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=nd(r,i.resumeToken);const c=oa(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(B.min())>0){o.readTime=ei(r,i.snapshotVersion.toTimestamp());const c=oa(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,t);const s=Cw(this.serializer,t);s&&(n.labels=s),this.Wo(n)}iu(t){const n={};n.database=la(this.serializer),n.removeTarget=t,this.Wo(n)}}class iE extends hd{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(ot(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const n=Ew(t.writeResults,t.commitTime),s=pe(t.commitTime);return this.listener.cu(s,n)}return ot(!t.writeResults||t.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const t={};t.database=la(this.serializer),this.Wo(t)}uu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>ww(this.serializer,s))};this.Wo(n)}}/**
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
 */class oE extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new R(w.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new R(w.UNKNOWN,r.toString())})}vo(t,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(w.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class aE{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ae(n),this.mu=!1):k("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class cE{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{gn(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=j(a);c.vu.add(4),await ir(c),c.bu.set("Unknown"),c.vu.delete(4),await qi(c)}(this))})}),this.bu=new aE(s,r)}}async function qi(e){if(gn(e))for(const t of e.Ru)await t(!0)}async function ir(e){for(const t of e.Ru)await t(!1)}function fd(e,t){const n=j(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),wc(n)?vc(n):ss(n).Ko()&&yc(n,t))}function dd(e,t){const n=j(e),s=ss(n);n.Au.delete(t),s.Ko()&&pd(n,t),n.Au.size===0&&(s.Ko()?s.jo():gn(n)&&n.bu.set("Unknown"))}function yc(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ss(e).su(t)}function pd(e,t){e.Vu.qt(t),ss(e).iu(t)}function vc(e){e.Vu=new hw({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),ss(e).start(),e.bu.gu()}function wc(e){return gn(e)&&!ss(e).Uo()&&e.Au.size>0}function gn(e){return j(e).vu.size===0}function gd(e){e.Vu=void 0}async function lE(e){e.Au.forEach((t,n)=>{yc(e,t)})}async function uE(e,t){gd(e),wc(e)?(e.bu.Iu(t),vc(e)):e.bu.set("Unknown")}async function hE(e,t,n){if(e.bu.set("Online"),t instanceof ed&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(e,t)}catch(s){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await ni(e,s)}else if(t instanceof Rr?e.Vu.Ht(t):t instanceof td?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(B.min()))try{const s=await ld(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken(Ft.EMPTY_BYTE_STRING,l.snapshotVersion)),pd(r,a);const u=new Oe(l.target,a,c,l.sequenceNumber);yc(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){k("RemoteStore","Failed to raise snapshot:",s),await ni(e,s)}}async function ni(e,t,n){if(!nr(t))throw t;e.vu.add(1),await ir(e),e.bu.set("Offline"),n||(n=()=>ld(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await qi(e)})}function md(e,t){return t().catch(n=>ni(e,n,t))}async function zi(e){const t=j(e),n=je(t);let s=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;fE(t);)try{const r=await Yw(t.localStore,s);if(r===null){t.Eu.length===0&&n.jo();break}s=r.batchId,dE(t,r)}catch(r){await ni(t,r)}yd(t)&&vd(t)}function fE(e){return gn(e)&&e.Eu.length<10}function dE(e,t){e.Eu.push(t);const n=je(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function yd(e){return gn(e)&&!je(e).Uo()&&e.Eu.length>0}function vd(e){je(e).start()}async function pE(e){je(e).hu()}async function gE(e){const t=je(e);for(const n of e.Eu)t.uu(n.mutations)}async function mE(e,t,n){const s=e.Eu.shift(),r=uc.from(s,t,n);await md(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await zi(e)}async function yE(e,t){t&&je(e).ou&&await async function(n,s){if(r=s.code,cw(r)&&r!==w.ABORTED){const i=n.Eu.shift();je(n).Qo(),await md(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await zi(n)}var r}(e,t),yd(e)&&vd(e)}async function iu(e,t){const n=j(e);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const s=gn(n);n.vu.add(3),await ir(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await qi(n)}async function vE(e,t){const n=j(e);t?(n.vu.delete(2),await qi(n)):t||(n.vu.add(2),await ir(n),n.bu.set("Unknown"))}function ss(e){return e.Su||(e.Su=function(t,n,s){const r=j(t);return r.fu(),new rE(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{uo:lE.bind(null,e),ao:uE.bind(null,e),nu:hE.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),wc(e)?vc(e):e.bu.set("Unknown")):(await e.Su.stop(),gd(e))})),e.Su}function je(e){return e.Du||(e.Du=function(t,n,s){const r=j(t);return r.fu(),new iE(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{uo:pE.bind(null,e),ao:yE.bind(null,e),au:gE.bind(null,e),cu:mE.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await zi(e)):(await e.Du.stop(),e.Eu.length>0&&(k("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
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
 */class Ec{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Ec(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _c(e,t){if(Ae("AsyncQueue",`${t}: ${e}`),nr(e))return new R(w.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Rn{constructor(t){this.comparator=t?(n,s)=>t(n,s)||P.comparator(n.key,s.key):(n,s)=>P.comparator(n.key,s.key),this.keyedMap=ds(),this.sortedSet=new ut(this.comparator)}static emptySet(t){return new Rn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Rn)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Rn;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class ou{constructor(){this.Cu=new ut(P.comparator)}track(t){const n=t.doc.key,s=this.Cu.get(n);s?t.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,t):t.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Cu=this.Cu.remove(n):t.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):L():this.Cu=this.Cu.insert(n,t)}xu(){const t=[];return this.Cu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Kn{constructor(t,n,s,r,i,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Kn(t,n,Rn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Li(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class wE{constructor(){this.Nu=void 0,this.listeners=[]}}class EE{constructor(){this.queries=new ns(t=>Vf(t),Li),this.onlineState="Unknown",this.ku=new Set}}async function _E(e,t){const n=j(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new wE),r)try{i.Nu=await n.onListen(s)}catch(o){const a=_c(o,`Initialization of query '${ia(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Mu(n.onlineState),i.Nu&&t.$u(i.Nu)&&Tc(n)}async function TE(e,t){const n=j(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function IE(e,t){const n=j(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&Tc(n)}function CE(e,t,n){const s=j(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Tc(e){e.ku.forEach(t=>{t.next()})}class SE{constructor(t,n,s){this.query=t,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Kn(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),n=!0):this.qu(t,this.onlineState)&&(this.Uu(t),n=!0),this.Bu=t,n}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),n=!0),n}qu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Lu(t){if(t.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(t){t=Kn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}/**
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
 */class wd{constructor(t){this.key=t}}class Ed{constructor(t){this.key=t}}class bE{constructor(t,n){this.query=t,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=K(),this.mutatedKeys=K(),this.tc=Uf(t),this.ec=new Rn(this.tc)}get nc(){return this.Yu}sc(t,n){const s=n?n.ic:new ou,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((u,f)=>{const p=r.get(u),m=$i(this.query,f)?f:null,D=!!p&&this.mutatedKeys.has(p.key),S=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let x=!1;p&&m?p.data.isEqual(m.data)?D!==S&&(s.track({type:3,doc:m}),x=!0):this.rc(p,m)||(s.track({type:2,doc:m}),x=!0,(c&&this.tc(m,c)>0||l&&this.tc(m,l)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),x=!0):p&&!m&&(s.track({type:1,doc:p}),x=!0,(c||l)&&(a=!0)),x&&(m?(o=o.add(m),i=S?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort((l,u)=>function(f,p){const m=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return m(f)-m(p)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new Kn(this.query,t.ec,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ou,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=K(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return t.forEach(s=>{this.Zu.has(s)||n.push(new Ed(s))}),this.Zu.forEach(s=>{t.has(s)||n.push(new wd(s))}),n}hc(t){this.Yu=t.ir,this.Zu=K();const n=this.sc(t.documents);return this.applyChanges(n,!0)}lc(){return Kn.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class AE{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class DE{constructor(t){this.key=t,this.fc=!1}}class xE{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ns(a=>Vf(a),Li),this._c=new Map,this.mc=new Set,this.gc=new ut(P.comparator),this.yc=new Map,this.Ic=new pc,this.Tc={},this.Ec=new Map,this.Ac=zn.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function NE(e,t){const n=UE(e);let s,r;const i=n.wc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await Xw(n.localStore,De(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await kE(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&fd(n.remoteStore,o)}return r}async function kE(e,t,n,s,r){e.Rc=(f,p,m)=>async function(D,S,x,H){let W=S.view.sc(x);W.zi&&(W=await nu(D.localStore,S.query,!1).then(({documents:Kt})=>S.view.sc(Kt,W)));const Y=H&&H.targetChanges.get(S.targetId),F=S.view.applyChanges(W,D.isPrimaryClient,Y);return cu(D,S.targetId,F.cc),F.snapshot}(e,f,p,m);const i=await nu(e.localStore,t,!0),o=new bE(t,i.ir),a=o.sc(i.documents),c=rr.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),l=o.applyChanges(a,e.isPrimaryClient,c);cu(e,n,l.cc);const u=new AE(t,n,o);return e.wc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),l.snapshot}async function ME(e,t){const n=j(e),s=n.wc.get(t),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Li(i,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ua(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),dd(n.remoteStore,s.targetId),ha(n,s.targetId)}).catch(er)):(ha(n,s.targetId),await ua(n.localStore,s.targetId,!0))}async function OE(e,t,n){const s=BE(e);try{const r=await function(i,o){const a=j(i),c=yt.now(),l=o.reduce((p,m)=>p.add(m.key),K());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=xe(),D=K();return a.Zi.getEntries(p,l).next(S=>{m=S,m.forEach((x,H)=>{H.isValidDocument()||(D=D.add(x))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,m)).next(S=>{u=S;const x=[];for(const H of o){const W=sw(H,u.get(H.key).overlayedDocument);W!=null&&x.push(new pn(H.key,W,Mf(W.value.mapValue),Ce.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,x,o)}).next(S=>{f=S;const x=S.applyToLocalDocumentSet(u,D);return a.documentOverlayCache.saveOverlays(p,S.batchId,x)})}).then(()=>({batchId:f.batchId,changes:jf(u)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new ut(X)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await or(s,r.changes),await zi(s.remoteStore)}catch(r){const i=_c(r,"Failed to persist write");n.reject(i)}}async function _d(e,t){const n=j(e);try{const s=await Gw(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(ot(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?ot(o.fc):r.removedDocuments.size>0&&(ot(o.fc),o.fc=!1))}),await or(n,s,t)}catch(s){await er(s)}}function au(e,t,n){const s=j(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=j(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.Mu(o)&&(c=!0)}),c&&Tc(a)}(s.eventManager,t),r.length&&s.dc.nu(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function RE(e,t,n){const s=j(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.yc.get(t),i=r&&r.key;if(i){let o=new ut(P.comparator);o=o.insert(i,xt.newNoDocument(i,B.min()));const a=K().add(i),c=new Bi(B.min(),new Map,new ut(X),o,a);await _d(s,c),s.gc=s.gc.remove(i),s.yc.delete(t),Ic(s)}else await ua(s.localStore,t,!1).then(()=>ha(s,t,n)).catch(er)}async function PE(e,t){const n=j(e),s=t.batch.batchId;try{const r=await Ww(n.localStore,t);Id(n,s,null),Td(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await or(n,r)}catch(r){await er(r)}}async function FE(e,t,n){const s=j(e);try{const r=await function(i,o){const a=j(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ot(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,t);Id(s,t,n),Td(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await or(s,r)}catch(r){await er(r)}}function Td(e,t){(e.Ec.get(t)||[]).forEach(n=>{n.resolve()}),e.Ec.delete(t)}function Id(e,t,n){const s=j(e);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.Tc[s.currentUser.toKey()]=r}}function ha(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(s=>{e.Ic.containsKey(s)||Cd(e,s)})}function Cd(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);n!==null&&(dd(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Ic(e))}function cu(e,t,n){for(const s of n)s instanceof wd?(e.Ic.addReference(s.key,t),LE(e,s)):s instanceof Ed?(k("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||Cd(e,s.key)):L()}function LE(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(k("SyncEngine","New document in limbo: "+n),e.mc.add(s),Ic(e))}function Ic(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new P(ct.fromString(t)),s=e.Ac.next();e.yc.set(s,new DE(n)),e.gc=e.gc.insert(n,s),fd(e.remoteStore,new Oe(De(lc(n.path)),s,"TargetPurposeLimboResolution",sc.ct))}}async function or(e,t,n){const s=j(e),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,t,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=mc.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=j(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(c,f=>_.forEach(f.Fi,p=>l.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>_.forEach(f.Bi,p=>l.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!nr(u))throw u;k("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const p=l.Ji.get(f),m=p.snapshotVersion,D=p.withLastLimboFreeSnapshotVersion(m);l.Ji=l.Ji.insert(f,D)}}}(s.localStore,i))}async function $E(e,t){const n=j(e);if(!n.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const s=await cd(n.localStore,t);n.currentUser=t,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new R(w.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await or(n,s.er)}}function VE(e,t){const n=j(e),s=n.yc.get(t);if(s&&s.fc)return K().add(s.key);{let r=K();const i=n._c.get(t);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function UE(e){const t=j(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=_d.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=VE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=RE.bind(null,t),t.dc.nu=IE.bind(null,t.eventManager),t.dc.Pc=CE.bind(null,t.eventManager),t}function BE(e){const t=j(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=PE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=FE.bind(null,t),t}class lu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ji(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Hw(this.persistence,new zw,t.initialUser,this.serializer)}createPersistence(t){return new jw(gc.zs,this.serializer)}createSharedClientState(t){return new Zw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jE{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>au(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=$E.bind(null,this.syncEngine),await vE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new EE}createDatastore(t){const n=ji(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new sE(r));var r;return function(i,o,a,c){return new oE(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>au(this.syncEngine,a,0),o=ru.D()?new ru:new tE,new cE(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,l){const u=new xE(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=j(t);k("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await ir(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class qE{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):Ae("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class zE{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Dt.UNAUTHENTICATED,this.clientId=xf.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{k("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(k("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=_c(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Eo(e,t){e.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await cd(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function uu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await HE(e);k("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>iu(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>iu(t.remoteStore,i)),e._onlineComponents=t}function KE(e){return e.name==="FirebaseError"?e.code===w.FAILED_PRECONDITION||e.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function HE(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await Eo(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!KE(n))throw n;Un("Error using user provided cache. Falling back to memory cache: "+n),await Eo(e,new lu)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await Eo(e,new lu);return e._offlineComponents}async function Sd(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await uu(e,e._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await uu(e,new jE))),e._onlineComponents}function WE(e){return Sd(e).then(t=>t.syncEngine)}async function hu(e){const t=await Sd(e),n=t.eventManager;return n.onListen=NE.bind(null,t.syncEngine),n.onUnlisten=ME.bind(null,t.syncEngine),n}/**
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
 */function bd(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const fu=new Map;/**
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
 */function Ad(e,t,n){if(!n)throw new R(w.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function GE(e,t,n,s){if(t===!0&&s===!0)throw new R(w.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function du(e){if(!P.isDocumentKey(e))throw new R(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function pu(e){if(P.isDocumentKey(e))throw new R(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Cc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":L()}function Cs(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new R(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cc(e);throw new R(w.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class gu{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new R(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new R(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}GE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bd((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new R(w.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new R(w.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new R(w.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=t.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,s}}class Ki{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new R(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gu(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new f0;switch(n.type){case"firstParty":return new m0(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new R(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=fu.get(t);n&&(k("ComponentProvider","Removing Datastore"),fu.delete(t),n.terminate())}(this),Promise.resolve()}}function QE(e,t,n,s={}){var r;const i=(e=Cs(e,Ki))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=Dt.MOCK_USER;else{a=qm(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new R(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Dt(l)}e._authCredentials=new d0(new Df(a,c))}}/**
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
 */class Yt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $e(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Yt(this.firestore,t,this._key)}}class Hi{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Hi(this.firestore,t,this._query)}}class $e extends Hi{constructor(t,n,s){super(t,n,lc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Yt(this.firestore,null,new P(t))}withConverter(t){return new $e(this.firestore,t,this._path)}}function Dd(e,t,...n){if(e=$n(e),Ad("collection","path",t),e instanceof Ki){const s=ct.fromString(t,...n);return pu(s),new $e(e,null,s)}{if(!(e instanceof Yt||e instanceof $e))throw new R(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(ct.fromString(t,...n));return pu(s),new $e(e.firestore,null,s)}}function YE(e,t,...n){if(e=$n(e),arguments.length===1&&(t=xf.A()),Ad("doc","path",t),e instanceof Ki){const s=ct.fromString(t,...n);return du(s),new Yt(e,null,new P(s))}{if(!(e instanceof Yt||e instanceof $e))throw new R(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(ct.fromString(t,...n));return du(s),new Yt(e.firestore,e instanceof $e?e.converter:null,new P(s))}}/**
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
 */class XE{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new ud(this,"async_queue_retry"),this.Xc=()=>{const n=wo();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=wo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=wo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new cn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!nr(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Ae("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(t,n,s){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const r=Ec.createAndSchedule(this,t,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&L()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}function mu(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class si extends Ki{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new XE,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Nd(this),this._firestoreClient.terminate()}}function JE(e,t){const n=typeof e=="object"?e:Wy(),s=typeof e=="string"?e:t||"(default)",r=qy(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Bm("firestore");i&&QE(r,...i)}return r}function xd(e){return e._firestoreClient||Nd(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Nd(e){var t,n,s;const r=e._freezeSettings(),i=function(o,a,c,l){return new D0(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,bd(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new zE(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Hn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Hn(Ft.fromBase64String(t))}catch(n){throw new R(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Hn(Ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Sc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new R(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class kd{constructor(t){this._methodName=t}}/**
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
 */class bc{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new R(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new R(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return X(this._lat,t._lat)||X(this._long,t._long)}}/**
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
 */const ZE=/^__.*__$/;class t_{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new pn(t,this.data,this.fieldMask,n,this.fieldTransforms):new sr(t,this.data,n,this.fieldTransforms)}}function Md(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Ac{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new Ac(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.aa({path:s,la:!1});return r.fa(t),r}da(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.aa({path:s,la:!1});return r.ua(),r}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return ri(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(Md(this.ca)&&ZE.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class e_{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||ji(t)}ya(t,n,s,r=!1){return new Ac({ca:t,methodName:n,ga:s,path:kt.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function n_(e){const t=e._freezeSettings(),n=ji(e._databaseId);return new e_(e._databaseId,!!t.ignoreUndefinedProperties,n)}function s_(e,t,n,s,r,i={}){const o=e.ya(i.merge||i.mergeFields?2:0,t,n,r);Fd("Data must be an object, but it was:",o,s);const a=Rd(s,o);let c,l;if(i.merge)c=new ee(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=r_(t,f,n);if(!o.contains(p))throw new R(w.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);o_(u,p)||u.push(p)}c=new ee(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new t_(new Qt(a),c,l)}function Od(e,t){if(Pd(e=$n(e)))return Fd("Unsupported field value:",t,e),Rd(e,t);if(e instanceof kd)return function(n,s){if(!Md(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Od(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=$n(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return X0(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=yt.fromDate(n);return{timestampValue:ei(s.serializer,r)}}if(n instanceof yt){const r=new yt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ei(s.serializer,r)}}if(n instanceof bc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Hn)return{bytesValue:nd(s.serializer,n._byteString)};if(n instanceof Yt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:dc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Cc(n)}`)}(e,t)}function Rd(e,t){const n={};return Nf(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):es(e,(s,r)=>{const i=Od(r,t.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Pd(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof yt||e instanceof bc||e instanceof Hn||e instanceof Yt||e instanceof kd)}function Fd(e,t,n){if(!Pd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Cc(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}function r_(e,t,n){if((t=$n(t))instanceof Sc)return t._internalPath;if(typeof t=="string")return Ld(e,t);throw ri("Field path arguments must be of type string or ",e,!1,void 0,n)}const i_=new RegExp("[~\\*/\\[\\]]");function Ld(e,t,n){if(t.search(i_)>=0)throw ri(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Sc(...t.split("."))._internalPath}catch{throw ri(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ri(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new R(w.INVALID_ARGUMENT,a+e+c)}function o_(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class $d{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new a_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Vd("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class a_ extends $d{data(){return super.data()}}function Vd(e,t){return typeof t=="string"?Ld(e,t):t instanceof Sc?t._internalPath:t._delegate._internalPath}/**
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
 */function c_(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new R(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class l_{convertValue(t,n="none"){switch(fn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return gt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(hn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw L()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return es(t,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new bc(gt(t.latitude),gt(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ic(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Bs(t));default:return null}}convertTimestamp(t){const n=Be(t);return new yt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ct.fromString(t);ot(ad(s));const r=new js(s.get(1),s.get(3)),i=new P(s.popFirst(5));return r.isEqual(n)||Ae(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function u_(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
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
 */class gs{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ud extends $d{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Pr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Vd("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Pr extends Ud{data(t={}){return super.data(t)}}class h_{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new gs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Pr(this._firestore,this._userDataWriter,s.key,s,new gs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Pr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new gs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Pr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new gs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:f_(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function f_(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Bd extends l_{constructor(t){super(),this.firestore=t}convertBytes(t){return new Hn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Yt(this.firestore,null,n)}}function d_(e,t){const n=Cs(e.firestore,si),s=YE(e),r=u_(e.converter,t);return g_(n,[s_(n_(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,Ce.exists(!1))]).then(()=>s)}function p_(e,...t){var n,s,r;e=$n(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||mu(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(mu(t[o])){const f=t[o];t[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),t[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),t[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,l,u;if(e instanceof Yt)l=Cs(e.firestore,si),u=lc(e._key.path),c={next:f=>{t[o]&&t[o](m_(l,e,f))},error:t[o+1],complete:t[o+2]};else{const f=Cs(e,Hi);l=Cs(f.firestore,si),u=f._query;const p=new Bd(l);c={next:m=>{t[o]&&t[o](new h_(l,p,f,m))},error:t[o+1],complete:t[o+2]},c_(e._query)}return function(f,p,m,D){const S=new qE(D),x=new SE(p,S,m);return f.asyncQueue.enqueueAndForget(async()=>_E(await hu(f),x)),()=>{S.Dc(),f.asyncQueue.enqueueAndForget(async()=>TE(await hu(f),x))}}(xd(l),u,a,c)}function g_(e,t){return function(n,s){const r=new cn;return n.asyncQueue.enqueueAndForget(async()=>OE(await WE(n),s,r)),r.promise}(xd(e),t)}function m_(e,t,n){const s=n.docs.get(t._key),r=new Bd(e);return new Ud(e,r,t._key,s,new gs(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){ts=n})(Hy),qr(new Ns("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new si(new p0(n.getProvider("auth-internal")),new v0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new js(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Nn(Pl,"3.12.2",e),Nn(Pl,"3.12.2","esm2017")})();const y_={apiKey:"AIzaSyDyW77823MSajkNaSQ6fw9-u8JtbPD_D-E",authDomain:"fir-testing-53e54.firebaseapp.com",projectId:"fir-testing-53e54",storageBucket:"fir-testing-53e54.appspot.com",messagingSenderId:"530300578305",appId:"1:530300578305:web:594a5b6b3f79a5ad17ee00"};Th(y_);const jd=JE();const v_={components:{Button:dh},data(){return{name:"",url:"",winningYears:null}},methods:{addTeam(){const e=Dd(jd,"teams");this.winningYears=this.winningYears.split(", "),this.winningYears=this.winningYears.map(t=>Number.parseInt(t)),d_(e,{logo:this.url,name:this.name,winningYears:this.winningYears}).then(()=>{this.$refs.addFrom.reset(),this.$emit("close")})}}},Wi=e=>(pi("data-v-c3863bb9"),e=e(),gi(),e),w_=Wi(()=>at("h2",null,"Add a new team",-1)),E_=Wi(()=>at("label",{for:"name"},"Name:",-1)),__=Wi(()=>at("label",{for:"logo"},"Logo (url):",-1)),T_=Wi(()=>at("label",{for:"years"},"Winning Years:",-1));function I_(e,t,n,s,r,i){const o=_n("Button");return re(),Ie(qt,null,[w_,at("form",{onSubmit:t[3]||(t[3]=fh((...a)=>i.addTeam&&i.addTeam(...a),["prevent"])),ref:"addFrom"},[at("div",null,[Dr(at("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>r.name=a),id:"name",type:"text",required:"",placeholder:" "},null,512),[[kr,r.name]]),E_]),at("div",null,[Dr(at("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>r.url=a),type:"text",id:"logo",required:"",placeholder:" "},null,512),[[kr,r.url]]),__]),at("div",null,[Dr(at("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>r.winningYears=a),id:"years",type:"text",pattern:"\\d{4}(,\\s\\d{4})*",title:"e.g. 2022, 2023",required:"",placeholder:" "},null,512),[[kr,r.winningYears]]),T_]),Vt(o,{label:"add"})],544)],64)}const C_=Yn(v_,[["render",I_],["__scopeId","data-v-c3863bb9"]]);const S_={},b_={class:"modal"};function A_(e,t,n,s,r,i){return re(),Ie("dialog",b_,[dg(e.$slots,"default",{},void 0,!0)])}const D_=Yn(S_,[["render",A_],["__scopeId","data-v-cacaff91"]]);const x_={components:{Button:dh,Team:bm,SearchBar:km,AddForm:C_,Modal:D_},data(){return{allTeams:[],src:null,name:null,years:null,result:!1,teamName:"",isOpen:!1}},mounted(){const e=Dd(jd,"teams");p_(e,t=>{this.allTeams=[],t.docs.forEach(n=>{this.allTeams.push(n.data())})})},methods:{reset(){this.$refs.searchBar.$data.teamName="",this.teamName=""},handleTeamName(e){this.teamName=e},addTeam(){this.$refs.addForm.$el.showModal()},closeAddFrom(){this.$refs.addForm.$el.close()}},computed:{filteredTeam(){return this.allTeams.filter(e=>e.name.toLowerCase().includes(this.teamName.trim().toLowerCase()))}}},Dc=e=>(pi("data-v-56f57017"),e=e(),gi(),e),N_={class:"container"},k_=Dc(()=>at("h1",null,"teams-titles",-1)),M_=Dc(()=>at("p",null,[at("strong",null,"Built using:"),lh(" Vue, HTML, CSS, Snackbar.js, MockAPI, Vite ")],-1)),O_=Dc(()=>at("p",null," This app allows users to view the winning history of top European football teams in the UEFA Champions League. Users can access the Champions League winning history of teams such as Real Madrid, Barcelona, Manchester United, Chelsea, Liverpool, Bayern Munich, AC Milan, Inter Milan, Juventus, and Ajax. Additionally, the system provides functionality for users to add new teams, remove existing teams, and update the winning history of teams. ",-1)),R_={class:"app-functions"},P_={class:"all-teams"};function F_(e,t,n,s,r,i){const o=_n("SearchBar"),a=_n("Button"),c=_n("Team"),l=_n("AddForm"),u=_n("Modal");return re(),Ie("div",N_,[k_,M_,O_,at("div",R_,[Vt(o,{ref:"searchBar",onUpdate:i.handleTeamName},null,8,["onUpdate"]),Vt(a,{label:"add a new team",onClick:i.addTeam},null,8,["onClick"]),Vt(a,{label:"reset",type:"reset",onClick:i.reset},null,8,["onClick"])]),at("div",P_,[(re(!0),Ie(qt,null,Qu(i.filteredTeam,(f,p)=>(re(),oh(c,{key:p,src:f.logo,name:f.name,winningYears:f.winningYears},null,8,["src","name","winningYears"]))),128))]),Vt(u,{ref:"addForm"},{default:ju(()=>[Vt(l,{onClose:i.closeAddFrom},null,8,["onClose"])]),_:1},512)])}const L_=Yn(x_,[["render",F_],["__scopeId","data-v-56f57017"]]);mm(L_).mount("#app");
