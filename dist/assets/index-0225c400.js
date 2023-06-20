(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function oa(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const rt={},_n=[],Zt=()=>{},Ld=()=>!1,Fd=/^on[^a-z]/,Gr=e=>Fd.test(e),aa=e=>e.startsWith("onUpdate:"),St=Object.assign,la=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},$d=Object.prototype.hasOwnProperty,H=(e,t)=>$d.call(e,t),$=Array.isArray,Tn=e=>Wr(e)==="[object Map]",_u=e=>Wr(e)==="[object Set]",j=e=>typeof e=="function",yt=e=>typeof e=="string",ca=e=>typeof e=="symbol",lt=e=>e!==null&&typeof e=="object",Tu=e=>lt(e)&&j(e.then)&&j(e.catch),Iu=Object.prototype.toString,Wr=e=>Iu.call(e),Vd=e=>Wr(e).slice(8,-1),Cu=e=>Wr(e)==="[object Object]",ua=e=>yt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Er=oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Bd=/-(\w)/g,de=Qr(e=>e.replace(Bd,(t,n)=>n?n.toUpperCase():"")),Ud=/\B([A-Z])/g,Hn=Qr(e=>e.replace(Ud,"-$1").toLowerCase()),Yr=Qr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fi=Qr(e=>e?`on${Yr(e)}`:""),xr=(e,t)=>!Object.is(e,t),_r=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Dr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},lo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ll;const co=()=>Ll||(Ll=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ha(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=yt(s)?Hd(s):ha(s);if(r)for(const i in r)t[i]=r[i]}return t}else{if(yt(e))return e;if(lt(e))return e}}const jd=/;(?![^(]*\))/g,qd=/:([^]+)/,zd=/\/\*[^]*?\*\//g;function Hd(e){const t={};return e.replace(zd,"").split(jd).forEach(n=>{if(n){const s=n.split(qd);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Xr(e){let t="";if(yt(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const s=Xr(e[n]);s&&(t+=s+" ")}else if(lt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Kd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gd=oa(Kd);function bu(e){return!!e||e===""}const uo=e=>yt(e)?e:e==null?"":$(e)||lt(e)&&(e.toString===Iu||!j(e.toString))?JSON.stringify(e,Su,2):String(e),Su=(e,t)=>t&&t.__v_isRef?Su(e,t.value):Tn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:_u(t)?{[`Set(${t.size})`]:[...t.values()]}:lt(t)&&!$(t)&&!Cu(t)?String(t):t;let Yt;class Wd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Yt,!t&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Yt;try{return Yt=this,t()}finally{Yt=n}}}on(){Yt=this}off(){Yt=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Qd(e,t=Yt){t&&t.active&&t.effects.push(e)}function Yd(){return Yt}const fa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Au=e=>(e.w&Pe)>0,xu=e=>(e.n&Pe)>0,Xd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Pe},Jd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Au(r)&&!xu(r)?r.delete(e):t[n++]=r,r.w&=~Pe,r.n&=~Pe}t.length=n}},ho=new WeakMap;let as=0,Pe=1;const fo=30;let Xt;const tn=Symbol(""),po=Symbol("");class da{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qd(this,s)}run(){if(!this.active)return this.fn();let t=Xt,n=Me;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Xt,Xt=this,Me=!0,Pe=1<<++as,as<=fo?Xd(this):Fl(this),this.fn()}finally{as<=fo&&Jd(this),Pe=1<<--as,Xt=this.parent,Me=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xt===this?this.deferStop=!0:this.active&&(Fl(this),this.onStop&&this.onStop(),this.active=!1)}}function Fl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Me=!0;const Du=[];function Kn(){Du.push(Me),Me=!1}function Gn(){const e=Du.pop();Me=e===void 0?!0:e}function zt(e,t,n){if(Me&&Xt){let s=ho.get(e);s||ho.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=fa()),Nu(r)}}function Nu(e,t){let n=!1;as<=fo?xu(e)||(e.n|=Pe,n=!Au(e)):n=!e.has(Xt),n&&(e.add(Xt),Xt.deps.push(e))}function Te(e,t,n,s,r,i){const o=ho.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&$(e)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":$(e)?ua(n)&&a.push(o.get("length")):(a.push(o.get(tn)),Tn(e)&&a.push(o.get(po)));break;case"delete":$(e)||(a.push(o.get(tn)),Tn(e)&&a.push(o.get(po)));break;case"set":Tn(e)&&a.push(o.get(tn));break}if(a.length===1)a[0]&&go(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);go(fa(l))}}function go(e,t){const n=$(e)?e:[...e];for(const s of n)s.computed&&$l(s);for(const s of n)s.computed||$l(s)}function $l(e,t){(e!==Xt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Zd=oa("__proto__,__v_isRef,__isVue"),Mu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ca)),tp=pa(),ep=pa(!1,!0),np=pa(!0),Vl=sp();function sp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=Z(this);for(let i=0,o=this.length;i<o;i++)zt(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Kn();const s=Z(this)[t].apply(this,n);return Gn(),s}}),e}function rp(e){const t=Z(this);return zt(t,"has",e),t.hasOwnProperty(e)}function pa(e=!1,t=!1){return function(s,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&i===(e?t?Ep:Lu:t?Pu:Ru).get(s))return s;const o=$(s);if(!e){if(o&&H(Vl,r))return Reflect.get(Vl,r,i);if(r==="hasOwnProperty")return rp}const a=Reflect.get(s,r,i);return(ca(r)?Mu.has(r):Zd(r))||(e||zt(s,"get",r),t)?a:Bt(a)?o&&ua(r)?a:a.value:lt(a)?e?Fu(a):ya(a):a}}const ip=Ou(),op=Ou(!0);function Ou(e=!1){return function(n,s,r,i){let o=n[s];if(_s(o)&&Bt(o)&&!Bt(r))return!1;if(!e&&(!mo(r)&&!_s(r)&&(o=Z(o),r=Z(r)),!$(n)&&Bt(o)&&!Bt(r)))return o.value=r,!0;const a=$(n)&&ua(s)?Number(s)<n.length:H(n,s),l=Reflect.set(n,s,r,i);return n===Z(i)&&(a?xr(r,o)&&Te(n,"set",s,r):Te(n,"add",s,r)),l}}function ap(e,t){const n=H(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Te(e,"delete",t,void 0),s}function lp(e,t){const n=Reflect.has(e,t);return(!ca(t)||!Mu.has(t))&&zt(e,"has",t),n}function cp(e){return zt(e,"iterate",$(e)?"length":tn),Reflect.ownKeys(e)}const ku={get:tp,set:ip,deleteProperty:ap,has:lp,ownKeys:cp},up={get:np,set(e,t){return!0},deleteProperty(e,t){return!0}},hp=St({},ku,{get:ep,set:op}),ga=e=>e,Jr=e=>Reflect.getPrototypeOf(e);function ir(e,t,n=!1,s=!1){e=e.__v_raw;const r=Z(e),i=Z(t);n||(t!==i&&zt(r,"get",t),zt(r,"get",i));const{has:o}=Jr(r),a=s?ga:n?Ea:wa;if(o.call(r,t))return a(e.get(t));if(o.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function or(e,t=!1){const n=this.__v_raw,s=Z(n),r=Z(e);return t||(e!==r&&zt(s,"has",e),zt(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function ar(e,t=!1){return e=e.__v_raw,!t&&zt(Z(e),"iterate",tn),Reflect.get(e,"size",e)}function Bl(e){e=Z(e);const t=Z(this);return Jr(t).has.call(t,e)||(t.add(e),Te(t,"add",e,e)),this}function Ul(e,t){t=Z(t);const n=Z(this),{has:s,get:r}=Jr(n);let i=s.call(n,e);i||(e=Z(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?xr(t,o)&&Te(n,"set",e,t):Te(n,"add",e,t),this}function jl(e){const t=Z(this),{has:n,get:s}=Jr(t);let r=n.call(t,e);r||(e=Z(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&Te(t,"delete",e,void 0),i}function ql(){const e=Z(this),t=e.size!==0,n=e.clear();return t&&Te(e,"clear",void 0,void 0),n}function lr(e,t){return function(s,r){const i=this,o=i.__v_raw,a=Z(o),l=t?ga:e?Ea:wa;return!e&&zt(a,"iterate",tn),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function cr(e,t,n){return function(...s){const r=this.__v_raw,i=Z(r),o=Tn(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=r[e](...s),u=n?ga:t?Ea:wa;return!t&&zt(i,"iterate",l?po:tn),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Ae(e){return function(...t){return e==="delete"?!1:this}}function fp(){const e={get(i){return ir(this,i)},get size(){return ar(this)},has:or,add:Bl,set:Ul,delete:jl,clear:ql,forEach:lr(!1,!1)},t={get(i){return ir(this,i,!1,!0)},get size(){return ar(this)},has:or,add:Bl,set:Ul,delete:jl,clear:ql,forEach:lr(!1,!0)},n={get(i){return ir(this,i,!0)},get size(){return ar(this,!0)},has(i){return or.call(this,i,!0)},add:Ae("add"),set:Ae("set"),delete:Ae("delete"),clear:Ae("clear"),forEach:lr(!0,!1)},s={get(i){return ir(this,i,!0,!0)},get size(){return ar(this,!0)},has(i){return or.call(this,i,!0)},add:Ae("add"),set:Ae("set"),delete:Ae("delete"),clear:Ae("clear"),forEach:lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=cr(i,!1,!1),n[i]=cr(i,!0,!1),t[i]=cr(i,!1,!0),s[i]=cr(i,!0,!0)}),[e,n,t,s]}const[dp,pp,gp,mp]=fp();function ma(e,t){const n=t?e?mp:gp:e?pp:dp;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(H(n,r)&&r in s?n:s,r,i)}const yp={get:ma(!1,!1)},vp={get:ma(!1,!0)},wp={get:ma(!0,!1)},Ru=new WeakMap,Pu=new WeakMap,Lu=new WeakMap,Ep=new WeakMap;function _p(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tp(e){return e.__v_skip||!Object.isExtensible(e)?0:_p(Vd(e))}function ya(e){return _s(e)?e:va(e,!1,ku,yp,Ru)}function Ip(e){return va(e,!1,hp,vp,Pu)}function Fu(e){return va(e,!0,up,wp,Lu)}function va(e,t,n,s,r){if(!lt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=Tp(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function In(e){return _s(e)?In(e.__v_raw):!!(e&&e.__v_isReactive)}function _s(e){return!!(e&&e.__v_isReadonly)}function mo(e){return!!(e&&e.__v_isShallow)}function $u(e){return In(e)||_s(e)}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function Vu(e){return Dr(e,"__v_skip",!0),e}const wa=e=>lt(e)?ya(e):e,Ea=e=>lt(e)?Fu(e):e;function Cp(e){Me&&Xt&&(e=Z(e),Nu(e.dep||(e.dep=fa())))}function bp(e,t){e=Z(e);const n=e.dep;n&&go(n)}function Bt(e){return!!(e&&e.__v_isRef===!0)}function Sp(e){return Bt(e)?e.value:e}const Ap={get:(e,t,n)=>Sp(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Bt(r)&&!Bt(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Bu(e){return In(e)?e:new Proxy(e,Ap)}class xp{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new da(t,()=>{this._dirty||(this._dirty=!0,bp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=Z(this);return Cp(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Dp(e,t,n=!1){let s,r;const i=j(e);return i?(s=e,r=Zt):(s=e.get,r=e.set),new xp(s,r,i||!r,n)}function Oe(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){Zr(i,t,n)}return r}function te(e,t,n,s){if(j(e)){const i=Oe(e,t,n,s);return i&&Tu(i)&&i.catch(o=>{Zr(o,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(te(e[i],t,n,s));return r}function Zr(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Oe(l,null,10,[e,o,a]);return}}Np(e,n,r,s)}function Np(e,t,n,s=!0){console.error(e)}let Ts=!1,yo=!1;const Nt=[];let le=0;const Cn=[];let we=null,We=0;const Uu=Promise.resolve();let _a=null;function Mp(e){const t=_a||Uu;return e?t.then(this?e.bind(this):e):t}function Op(e){let t=le+1,n=Nt.length;for(;t<n;){const s=t+n>>>1;Is(Nt[s])<e?t=s+1:n=s}return t}function Ta(e){(!Nt.length||!Nt.includes(e,Ts&&e.allowRecurse?le+1:le))&&(e.id==null?Nt.push(e):Nt.splice(Op(e.id),0,e),ju())}function ju(){!Ts&&!yo&&(yo=!0,_a=Uu.then(zu))}function kp(e){const t=Nt.indexOf(e);t>le&&Nt.splice(t,1)}function Rp(e){$(e)?Cn.push(...e):(!we||!we.includes(e,e.allowRecurse?We+1:We))&&Cn.push(e),ju()}function zl(e,t=Ts?le+1:0){for(;t<Nt.length;t++){const n=Nt[t];n&&n.pre&&(Nt.splice(t,1),t--,n())}}function qu(e){if(Cn.length){const t=[...new Set(Cn)];if(Cn.length=0,we){we.push(...t);return}for(we=t,we.sort((n,s)=>Is(n)-Is(s)),We=0;We<we.length;We++)we[We]();we=null,We=0}}const Is=e=>e.id==null?1/0:e.id,Pp=(e,t)=>{const n=Is(e)-Is(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function zu(e){yo=!1,Ts=!0,Nt.sort(Pp);const t=Zt;try{for(le=0;le<Nt.length;le++){const n=Nt[le];n&&n.active!==!1&&Oe(n,null,14)}}finally{le=0,Nt.length=0,qu(),Ts=!1,_a=null,(Nt.length||Cn.length)&&zu()}}function Lp(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||rt;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||rt;p&&(r=n.map(m=>yt(m)?m.trim():m)),f&&(r=n.map(lo))}let a,l=s[a=Fi(t)]||s[a=Fi(de(t))];!l&&i&&(l=s[a=Fi(Hn(t))]),l&&te(l,e,6,r);const c=s[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,te(c,e,6,r)}}function Hu(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!j(e)){const l=c=>{const u=Hu(c,t,!0);u&&(a=!0,St(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(lt(e)&&s.set(e,null),null):($(i)?i.forEach(l=>o[l]=null):St(o,i),lt(e)&&s.set(e,o),o)}function ti(e,t){return!e||!Gr(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,Hn(t))||H(e,t))}let Mt=null,ei=null;function Nr(e){const t=Mt;return Mt=e,ei=e&&e.type.__scopeId||null,t}function ni(e){ei=e}function si(){ei=null}function Ku(e,t=Mt,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ec(-1);const i=Nr(t);let o;try{o=e(...r)}finally{Nr(i),s._d&&ec(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function $i(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:m,ctx:M,inheritAttrs:A}=e;let O,J;const W=Nr(e);try{if(n.shapeFlag&4){const L=r||s;O=ae(u.call(L,L,f,i,m,p,M)),J=l}else{const L=t;O=ae(L.length>1?L(i,{attrs:l,slots:a,emit:c}):L(i,null)),J=t.props?l:Fp(l)}}catch(L){ms.length=0,Zr(L,e,1),O=$t(Rn)}let Q=O;if(J&&A!==!1){const L=Object.keys(J),{shapeFlag:Ht}=Q;L.length&&Ht&7&&(o&&L.some(aa)&&(J=$p(J,o)),Q=Pn(Q,J))}return n.dirs&&(Q=Pn(Q),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&(Q.transition=n.transition),O=Q,Nr(W),O}const Fp=e=>{let t;for(const n in e)(n==="class"||n==="style"||Gr(n))&&((t||(t={}))[n]=e[n]);return t},$p=(e,t)=>{const n={};for(const s in e)(!aa(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Vp(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Hl(s,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!ti(c,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Hl(s,o,c):!0:!!o;return!1}function Hl(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!ti(n,i))return!0}return!1}function Bp({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Up=e=>e.__isSuspense;function jp(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):Rp(e)}const ur={};function Vi(e,t,n){return Gu(e,t,n)}function Gu(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=rt){var a;const l=Yd()===((a=Ct)==null?void 0:a.scope)?Ct:null;let c,u=!1,f=!1;if(Bt(e)?(c=()=>e.value,u=mo(e)):In(e)?(c=()=>e,s=!0):$(e)?(f=!0,u=e.some(L=>In(L)||mo(L)),c=()=>e.map(L=>{if(Bt(L))return L.value;if(In(L))return Ye(L);if(j(L))return Oe(L,l,2)})):j(e)?t?c=()=>Oe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),te(e,l,3,[m])}:c=Zt,t&&s){const L=c;c=()=>Ye(L())}let p,m=L=>{p=W.onStop=()=>{Oe(L,l,4)}},M;if(bs)if(m=Zt,t?n&&te(t,l,3,[c(),f?[]:void 0,m]):c(),r==="sync"){const L=$g();M=L.__watcherHandles||(L.__watcherHandles=[])}else return Zt;let A=f?new Array(e.length).fill(ur):ur;const O=()=>{if(W.active)if(t){const L=W.run();(s||u||(f?L.some((Ht,me)=>xr(Ht,A[me])):xr(L,A)))&&(p&&p(),te(t,l,3,[L,A===ur?void 0:f&&A[0]===ur?[]:A,m]),A=L)}else W.run()};O.allowRecurse=!!t;let J;r==="sync"?J=O:r==="post"?J=()=>jt(O,l&&l.suspense):(O.pre=!0,l&&(O.id=l.uid),J=()=>Ta(O));const W=new da(c,J);t?n?O():A=W.run():r==="post"?jt(W.run.bind(W),l&&l.suspense):W.run();const Q=()=>{W.stop(),l&&l.scope&&la(l.scope.effects,W)};return M&&M.push(Q),Q}function qp(e,t,n){const s=this.proxy,r=yt(e)?e.includes(".")?Wu(s,e):()=>s[e]:e.bind(s,s);let i;j(t)?i=t:(i=t.handler,n=t);const o=Ct;Ln(this);const a=Gu(r,i.bind(s),n);return o?Ln(o):en(),a}function Wu(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ye(e,t){if(!lt(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Bt(e))Ye(e.value,t);else if($(e))for(let n=0;n<e.length;n++)Ye(e[n],t);else if(_u(e)||Tn(e))e.forEach(n=>{Ye(n,t)});else if(Cu(e))for(const n in e)Ye(e[n],t);return e}function vo(e,t){const n=Mt;if(n===null)return e;const s=ai(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,l,c=rt]=t[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&Ye(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function He(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Kn(),te(l,n,8,[e.el,a,e,t]),Gn())}}const ps=e=>!!e.type.__asyncLoader,Qu=e=>e.type.__isKeepAlive;function zp(e,t){Yu(e,"a",t)}function Hp(e,t){Yu(e,"da",t)}function Yu(e,t,n=Ct){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ri(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Qu(r.parent.vnode)&&Kp(s,t,n,r),r=r.parent}}function Kp(e,t,n,s){const r=ri(t,e,s,!0);Xu(()=>{la(s[t],r)},n)}function ri(e,t,n=Ct,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Kn(),Ln(n);const a=te(t,n,e,o);return en(),Gn(),a});return s?r.unshift(i):r.push(i),i}}const Se=e=>(t,n=Ct)=>(!bs||e==="sp")&&ri(e,(...s)=>t(...s),n),Gp=Se("bm"),Wp=Se("m"),Qp=Se("bu"),Yp=Se("u"),Xp=Se("bum"),Xu=Se("um"),Jp=Se("sp"),Zp=Se("rtg"),tg=Se("rtc");function eg(e,t=Ct){ri("ec",e,t)}const Ju="components";function mn(e,t){return sg(Ju,e,!0,t)||e}const ng=Symbol.for("v-ndc");function sg(e,t,n=!0,s=!1){const r=Mt||Ct;if(r){const i=r.type;if(e===Ju){const a=Rg(i,!1);if(a&&(a===t||a===de(t)||a===Yr(de(t))))return i}const o=Kl(r[e]||i[e],t)||Kl(r.appContext[e],t);return!o&&s?i:o}}function Kl(e,t){return e&&(e[t]||e[de(t)]||e[Yr(de(t))])}function Zu(e,t,n,s){let r;const i=n&&n[s];if($(e)||yt(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i&&i[o])}else if(lt(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=t(e[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function rg(e,t,n={},s,r){if(Mt.isCE||Mt.parent&&ps(Mt.parent)&&Mt.parent.isCE)return t!=="default"&&(n.name=t),$t("slot",n,s&&s());let i=e[t];i&&i._c&&(i._d=!1),ee();const o=i&&th(i(n)),a=uh(qt,{key:n.key||o&&o.key||`_${t}`},o||(s?s():[]),o&&e._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function th(e){return e.some(t=>hh(t)?!(t.type===Rn||t.type===qt&&!th(t.children)):!0)?e:null}const wo=e=>e?ph(e)?ai(e)||e.proxy:wo(e.parent):null,gs=St(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wo(e.parent),$root:e=>wo(e.root),$emit:e=>e.emit,$options:e=>Ia(e),$forceUpdate:e=>e.f||(e.f=()=>Ta(e.update)),$nextTick:e=>e.n||(e.n=Mp.bind(e.proxy)),$watch:e=>qp.bind(e)}),Bi=(e,t)=>e!==rt&&!e.__isScriptSetup&&H(e,t),ig={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Bi(s,t))return o[t]=1,s[t];if(r!==rt&&H(r,t))return o[t]=2,r[t];if((c=e.propsOptions[0])&&H(c,t))return o[t]=3,i[t];if(n!==rt&&H(n,t))return o[t]=4,n[t];Eo&&(o[t]=0)}}const u=gs[t];let f,p;if(u)return t==="$attrs"&&zt(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==rt&&H(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,H(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return Bi(r,t)?(r[t]=n,!0):s!==rt&&H(s,t)?(s[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==rt&&H(e,o)||Bi(t,o)||(a=i[0])&&H(a,o)||H(s,o)||H(gs,o)||H(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Gl(e){return $(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Eo=!0;function og(e){const t=Ia(e),n=e.proxy,s=e.ctx;Eo=!1,t.beforeCreate&&Wl(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:M,activated:A,deactivated:O,beforeDestroy:J,beforeUnmount:W,destroyed:Q,unmounted:L,render:Ht,renderTracked:me,renderTriggered:Ue,errorCaptured:ye,serverPrefetch:hn,expose:je,inheritAttrs:ns,components:er,directives:nr,filters:Ri}=t;if(c&&ag(c,s,null),o)for(const ct in o){const nt=o[ct];j(nt)&&(s[ct]=nt.bind(n))}if(r){const ct=r.call(n,n);lt(ct)&&(e.data=ya(ct))}if(Eo=!0,i)for(const ct in i){const nt=i[ct],qe=j(nt)?nt.bind(n,n):j(nt.get)?nt.get.bind(n,n):Zt,sr=!j(nt)&&j(nt.set)?nt.set.bind(n):Zt,ze=Lg({get:qe,set:sr});Object.defineProperty(s,ct,{enumerable:!0,configurable:!0,get:()=>ze.value,set:re=>ze.value=re})}if(a)for(const ct in a)eh(a[ct],s,n,ct);if(l){const ct=j(l)?l.call(n):l;Reflect.ownKeys(ct).forEach(nt=>{dg(nt,ct[nt])})}u&&Wl(u,e,"c");function Lt(ct,nt){$(nt)?nt.forEach(qe=>ct(qe.bind(n))):nt&&ct(nt.bind(n))}if(Lt(Gp,f),Lt(Wp,p),Lt(Qp,m),Lt(Yp,M),Lt(zp,A),Lt(Hp,O),Lt(eg,ye),Lt(tg,me),Lt(Zp,Ue),Lt(Xp,W),Lt(Xu,L),Lt(Jp,hn),$(je))if(je.length){const ct=e.exposed||(e.exposed={});je.forEach(nt=>{Object.defineProperty(ct,nt,{get:()=>n[nt],set:qe=>n[nt]=qe})})}else e.exposed||(e.exposed={});Ht&&e.render===Zt&&(e.render=Ht),ns!=null&&(e.inheritAttrs=ns),er&&(e.components=er),nr&&(e.directives=nr)}function ag(e,t,n=Zt){$(e)&&(e=_o(e));for(const s in e){const r=e[s];let i;lt(r)?"default"in r?i=Tr(r.from||s,r.default,!0):i=Tr(r.from||s):i=Tr(r),Bt(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function Wl(e,t,n){te($(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function eh(e,t,n,s){const r=s.includes(".")?Wu(n,s):()=>n[s];if(yt(e)){const i=t[e];j(i)&&Vi(r,i)}else if(j(e))Vi(r,e.bind(n));else if(lt(e))if($(e))e.forEach(i=>eh(i,t,n,s));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Vi(r,i,e)}}function Ia(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(c=>Mr(l,c,o,!0)),Mr(l,t,o)),lt(t)&&i.set(t,l),l}function Mr(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Mr(e,i,n,!0),r&&r.forEach(o=>Mr(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=lg[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const lg={data:Ql,props:Yl,emits:Yl,methods:ls,computed:ls,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:ls,directives:ls,watch:ug,provide:Ql,inject:cg};function Ql(e,t){return t?e?function(){return St(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function cg(e,t){return ls(_o(e),_o(t))}function _o(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ft(e,t){return e?[...new Set([].concat(e,t))]:t}function ls(e,t){return e?St(Object.create(null),e,t):t}function Yl(e,t){return e?$(e)&&$(t)?[...new Set([...e,...t])]:St(Object.create(null),Gl(e),Gl(t??{})):t}function ug(e,t){if(!e)return t;if(!t)return e;const n=St(Object.create(null),e);for(const s in t)n[s]=Ft(e[s],t[s]);return n}function nh(){return{app:null,config:{isNativeTag:Ld,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hg=0;function fg(e,t){return function(s,r=null){j(s)||(s=St({},s)),r!=null&&!lt(r)&&(r=null);const i=nh(),o=new Set;let a=!1;const l=i.app={_uid:hg++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Vg,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...u)):j(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const p=$t(s,r);return p.appContext=i,u&&t?t(p,c):e(p,c,f),a=!0,l._container=c,c.__vue_app__=l,ai(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Or=l;try{return c()}finally{Or=null}}};return l}}let Or=null;function dg(e,t){if(Ct){let n=Ct.provides;const s=Ct.parent&&Ct.parent.provides;s===n&&(n=Ct.provides=Object.create(s)),n[e]=t}}function Tr(e,t,n=!1){const s=Ct||Mt;if(s||Or){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Or._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&j(t)?t.call(s&&s.proxy):t}}function pg(e,t,n,s=!1){const r={},i={};Dr(i,oi,1),e.propsDefaults=Object.create(null),sh(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Ip(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function gg(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=Z(r),[l]=e.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(ti(e.emitsOptions,p))continue;const m=t[p];if(l)if(H(i,p))m!==i[p]&&(i[p]=m,c=!0);else{const M=de(p);r[M]=To(l,a,M,m,e,!1)}else m!==i[p]&&(i[p]=m,c=!0)}}}else{sh(e,t,r,i)&&(c=!0);let u;for(const f in a)(!t||!H(t,f)&&((u=Hn(f))===f||!H(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=To(l,a,f,void 0,e,!0)):delete r[f]);if(i!==a)for(const f in i)(!t||!H(t,f))&&(delete i[f],c=!0)}c&&Te(e,"set","$attrs")}function sh(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Er(l))continue;const c=t[l];let u;r&&H(r,u=de(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:ti(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=Z(n),c=a||rt;for(let u=0;u<i.length;u++){const f=i[u];n[f]=To(r,l,f,c[f],e,!H(c,f))}}return o}function To(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=H(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(Ln(r),s=c[n]=l.call(null,t),en())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Hn(n))&&(s=!0))}return s}function rh(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let l=!1;if(!j(e)){const u=f=>{l=!0;const[p,m]=rh(f,t,!0);St(o,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return lt(e)&&s.set(e,_n),_n;if($(i))for(let u=0;u<i.length;u++){const f=de(i[u]);Xl(f)&&(o[f]=rt)}else if(i)for(const u in i){const f=de(u);if(Xl(f)){const p=i[u],m=o[f]=$(p)||j(p)?{type:p}:St({},p);if(m){const M=tc(Boolean,m.type),A=tc(String,m.type);m[0]=M>-1,m[1]=A<0||M<A,(M>-1||H(m,"default"))&&a.push(f)}}}const c=[o,a];return lt(e)&&s.set(e,c),c}function Xl(e){return e[0]!=="$"}function Jl(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Zl(e,t){return Jl(e)===Jl(t)}function tc(e,t){return $(t)?t.findIndex(n=>Zl(n,e)):j(t)&&Zl(t,e)?0:-1}const ih=e=>e[0]==="_"||e==="$stable",Ca=e=>$(e)?e.map(ae):[ae(e)],mg=(e,t,n)=>{if(t._n)return t;const s=Ku((...r)=>Ca(t(...r)),n);return s._c=!1,s},oh=(e,t,n)=>{const s=e._ctx;for(const r in e){if(ih(r))continue;const i=e[r];if(j(i))t[r]=mg(r,i,s);else if(i!=null){const o=Ca(i);t[r]=()=>o}}},ah=(e,t)=>{const n=Ca(t);e.slots.default=()=>n},yg=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Z(t),Dr(t,"_",n)):oh(t,e.slots={})}else e.slots={},t&&ah(e,t);Dr(e.slots,oi,1)},vg=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=rt;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(St(r,t),!n&&a===1&&delete r._):(i=!t.$stable,oh(t,r)),o=t}else t&&(ah(e,t),o={default:1});if(i)for(const a in r)!ih(a)&&!(a in o)&&delete r[a]};function Io(e,t,n,s,r=!1){if($(e)){e.forEach((p,m)=>Io(p,t&&($(t)?t[m]:t),n,s,r));return}if(ps(s)&&!r)return;const i=s.shapeFlag&4?ai(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=e,c=t&&t.r,u=a.refs===rt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(yt(c)?(u[c]=null,H(f,c)&&(f[c]=null)):Bt(c)&&(c.value=null)),j(l))Oe(l,a,12,[o,u]);else{const p=yt(l),m=Bt(l);if(p||m){const M=()=>{if(e.f){const A=p?H(f,l)?f[l]:u[l]:l.value;r?$(A)&&la(A,i):$(A)?A.includes(i)||A.push(i):p?(u[l]=[i],H(f,l)&&(f[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,H(f,l)&&(f[l]=o)):m&&(l.value=o,e.k&&(u[e.k]=o))};o?(M.id=-1,jt(M,n)):M()}}}const jt=jp;function wg(e){return Eg(e)}function Eg(e,t){const n=co();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=Zt,insertStaticContent:M}=e,A=(h,d,g,v=null,y=null,I=null,S=!1,T=null,C=!!d.dynamicChildren)=>{if(h===d)return;h&&!rs(h,d)&&(v=rr(h),re(h,y,I,!0),h=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:w,ref:k,shapeFlag:D}=d;switch(w){case ii:O(h,d,g,v);break;case Rn:J(h,d,g,v);break;case Ui:h==null&&W(d,g,v,S);break;case qt:er(h,d,g,v,y,I,S,T,C);break;default:D&1?Ht(h,d,g,v,y,I,S,T,C):D&6?nr(h,d,g,v,y,I,S,T,C):(D&64||D&128)&&w.process(h,d,g,v,y,I,S,T,C,fn)}k!=null&&y&&Io(k,h&&h.ref,I,d||h,!d)},O=(h,d,g,v)=>{if(h==null)s(d.el=a(d.children),g,v);else{const y=d.el=h.el;d.children!==h.children&&c(y,d.children)}},J=(h,d,g,v)=>{h==null?s(d.el=l(d.children||""),g,v):d.el=h.el},W=(h,d,g,v)=>{[h.el,h.anchor]=M(h.children,d,g,v,h.el,h.anchor)},Q=({el:h,anchor:d},g,v)=>{let y;for(;h&&h!==d;)y=p(h),s(h,g,v),h=y;s(d,g,v)},L=({el:h,anchor:d})=>{let g;for(;h&&h!==d;)g=p(h),r(h),h=g;r(d)},Ht=(h,d,g,v,y,I,S,T,C)=>{S=S||d.type==="svg",h==null?me(d,g,v,y,I,S,T,C):hn(h,d,y,I,S,T,C)},me=(h,d,g,v,y,I,S,T)=>{let C,w;const{type:k,props:D,shapeFlag:R,transition:V,dirs:q}=h;if(C=h.el=o(h.type,I,D&&D.is,D),R&8?u(C,h.children):R&16&&ye(h.children,C,null,v,y,I&&k!=="foreignObject",S,T),q&&He(h,null,v,"created"),Ue(C,h,h.scopeId,S,v),D){for(const et in D)et!=="value"&&!Er(et)&&i(C,et,null,D[et],I,h.children,v,y,ve);"value"in D&&i(C,"value",null,D.value),(w=D.onVnodeBeforeMount)&&oe(w,v,h)}q&&He(h,null,v,"beforeMount");const st=(!y||y&&!y.pendingBranch)&&V&&!V.persisted;st&&V.beforeEnter(C),s(C,d,g),((w=D&&D.onVnodeMounted)||st||q)&&jt(()=>{w&&oe(w,v,h),st&&V.enter(C),q&&He(h,null,v,"mounted")},y)},Ue=(h,d,g,v,y)=>{if(g&&m(h,g),v)for(let I=0;I<v.length;I++)m(h,v[I]);if(y){let I=y.subTree;if(d===I){const S=y.vnode;Ue(h,S,S.scopeId,S.slotScopeIds,y.parent)}}},ye=(h,d,g,v,y,I,S,T,C=0)=>{for(let w=C;w<h.length;w++){const k=h[w]=T?xe(h[w]):ae(h[w]);A(null,k,d,g,v,y,I,S,T)}},hn=(h,d,g,v,y,I,S)=>{const T=d.el=h.el;let{patchFlag:C,dynamicChildren:w,dirs:k}=d;C|=h.patchFlag&16;const D=h.props||rt,R=d.props||rt;let V;g&&Ke(g,!1),(V=R.onVnodeBeforeUpdate)&&oe(V,g,d,h),k&&He(d,h,g,"beforeUpdate"),g&&Ke(g,!0);const q=y&&d.type!=="foreignObject";if(w?je(h.dynamicChildren,w,T,g,v,q,I):S||nt(h,d,T,null,g,v,q,I,!1),C>0){if(C&16)ns(T,d,D,R,g,v,y);else if(C&2&&D.class!==R.class&&i(T,"class",null,R.class,y),C&4&&i(T,"style",D.style,R.style,y),C&8){const st=d.dynamicProps;for(let et=0;et<st.length;et++){const ft=st[et],Qt=D[ft],dn=R[ft];(dn!==Qt||ft==="value")&&i(T,ft,Qt,dn,y,h.children,g,v,ve)}}C&1&&h.children!==d.children&&u(T,d.children)}else!S&&w==null&&ns(T,d,D,R,g,v,y);((V=R.onVnodeUpdated)||k)&&jt(()=>{V&&oe(V,g,d,h),k&&He(d,h,g,"updated")},v)},je=(h,d,g,v,y,I,S)=>{for(let T=0;T<d.length;T++){const C=h[T],w=d[T],k=C.el&&(C.type===qt||!rs(C,w)||C.shapeFlag&70)?f(C.el):g;A(C,w,k,null,v,y,I,S,!0)}},ns=(h,d,g,v,y,I,S)=>{if(g!==v){if(g!==rt)for(const T in g)!Er(T)&&!(T in v)&&i(h,T,g[T],null,S,d.children,y,I,ve);for(const T in v){if(Er(T))continue;const C=v[T],w=g[T];C!==w&&T!=="value"&&i(h,T,w,C,S,d.children,y,I,ve)}"value"in v&&i(h,"value",g.value,v.value)}},er=(h,d,g,v,y,I,S,T,C)=>{const w=d.el=h?h.el:a(""),k=d.anchor=h?h.anchor:a("");let{patchFlag:D,dynamicChildren:R,slotScopeIds:V}=d;V&&(T=T?T.concat(V):V),h==null?(s(w,g,v),s(k,g,v),ye(d.children,g,k,y,I,S,T,C)):D>0&&D&64&&R&&h.dynamicChildren?(je(h.dynamicChildren,R,g,y,I,S,T),(d.key!=null||y&&d===y.subTree)&&lh(h,d,!0)):nt(h,d,g,k,y,I,S,T,C)},nr=(h,d,g,v,y,I,S,T,C)=>{d.slotScopeIds=T,h==null?d.shapeFlag&512?y.ctx.activate(d,g,v,S,C):Ri(d,g,v,y,I,S,C):Nl(h,d,C)},Ri=(h,d,g,v,y,I,S)=>{const T=h.component=Dg(h,v,y);if(Qu(h)&&(T.ctx.renderer=fn),Ng(T),T.asyncDep){if(y&&y.registerDep(T,Lt),!h.el){const C=T.subTree=$t(Rn);J(null,C,d,g)}return}Lt(T,h,d,g,y,I,S)},Nl=(h,d,g)=>{const v=d.component=h.component;if(Vp(h,d,g))if(v.asyncDep&&!v.asyncResolved){ct(v,d,g);return}else v.next=d,kp(v.update),v.update();else d.el=h.el,v.vnode=d},Lt=(h,d,g,v,y,I,S)=>{const T=()=>{if(h.isMounted){let{next:k,bu:D,u:R,parent:V,vnode:q}=h,st=k,et;Ke(h,!1),k?(k.el=q.el,ct(h,k,S)):k=q,D&&_r(D),(et=k.props&&k.props.onVnodeBeforeUpdate)&&oe(et,V,k,q),Ke(h,!0);const ft=$i(h),Qt=h.subTree;h.subTree=ft,A(Qt,ft,f(Qt.el),rr(Qt),h,y,I),k.el=ft.el,st===null&&Bp(h,ft.el),R&&jt(R,y),(et=k.props&&k.props.onVnodeUpdated)&&jt(()=>oe(et,V,k,q),y)}else{let k;const{el:D,props:R}=d,{bm:V,m:q,parent:st}=h,et=ps(d);if(Ke(h,!1),V&&_r(V),!et&&(k=R&&R.onVnodeBeforeMount)&&oe(k,st,d),Ke(h,!0),D&&Li){const ft=()=>{h.subTree=$i(h),Li(D,h.subTree,h,y,null)};et?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ft()):ft()}else{const ft=h.subTree=$i(h);A(null,ft,g,v,h,y,I),d.el=ft.el}if(q&&jt(q,y),!et&&(k=R&&R.onVnodeMounted)){const ft=d;jt(()=>oe(k,st,ft),y)}(d.shapeFlag&256||st&&ps(st.vnode)&&st.vnode.shapeFlag&256)&&h.a&&jt(h.a,y),h.isMounted=!0,d=g=v=null}},C=h.effect=new da(T,()=>Ta(w),h.scope),w=h.update=()=>C.run();w.id=h.uid,Ke(h,!0),w()},ct=(h,d,g)=>{d.component=h;const v=h.vnode.props;h.vnode=d,h.next=null,gg(h,d.props,v,g),vg(h,d.children,g),Kn(),zl(),Gn()},nt=(h,d,g,v,y,I,S,T,C=!1)=>{const w=h&&h.children,k=h?h.shapeFlag:0,D=d.children,{patchFlag:R,shapeFlag:V}=d;if(R>0){if(R&128){sr(w,D,g,v,y,I,S,T,C);return}else if(R&256){qe(w,D,g,v,y,I,S,T,C);return}}V&8?(k&16&&ve(w,y,I),D!==w&&u(g,D)):k&16?V&16?sr(w,D,g,v,y,I,S,T,C):ve(w,y,I,!0):(k&8&&u(g,""),V&16&&ye(D,g,v,y,I,S,T,C))},qe=(h,d,g,v,y,I,S,T,C)=>{h=h||_n,d=d||_n;const w=h.length,k=d.length,D=Math.min(w,k);let R;for(R=0;R<D;R++){const V=d[R]=C?xe(d[R]):ae(d[R]);A(h[R],V,g,null,y,I,S,T,C)}w>k?ve(h,y,I,!0,!1,D):ye(d,g,v,y,I,S,T,C,D)},sr=(h,d,g,v,y,I,S,T,C)=>{let w=0;const k=d.length;let D=h.length-1,R=k-1;for(;w<=D&&w<=R;){const V=h[w],q=d[w]=C?xe(d[w]):ae(d[w]);if(rs(V,q))A(V,q,g,null,y,I,S,T,C);else break;w++}for(;w<=D&&w<=R;){const V=h[D],q=d[R]=C?xe(d[R]):ae(d[R]);if(rs(V,q))A(V,q,g,null,y,I,S,T,C);else break;D--,R--}if(w>D){if(w<=R){const V=R+1,q=V<k?d[V].el:v;for(;w<=R;)A(null,d[w]=C?xe(d[w]):ae(d[w]),g,q,y,I,S,T,C),w++}}else if(w>R)for(;w<=D;)re(h[w],y,I,!0),w++;else{const V=w,q=w,st=new Map;for(w=q;w<=R;w++){const Kt=d[w]=C?xe(d[w]):ae(d[w]);Kt.key!=null&&st.set(Kt.key,w)}let et,ft=0;const Qt=R-q+1;let dn=!1,kl=0;const ss=new Array(Qt);for(w=0;w<Qt;w++)ss[w]=0;for(w=V;w<=D;w++){const Kt=h[w];if(ft>=Qt){re(Kt,y,I,!0);continue}let ie;if(Kt.key!=null)ie=st.get(Kt.key);else for(et=q;et<=R;et++)if(ss[et-q]===0&&rs(Kt,d[et])){ie=et;break}ie===void 0?re(Kt,y,I,!0):(ss[ie-q]=w+1,ie>=kl?kl=ie:dn=!0,A(Kt,d[ie],g,null,y,I,S,T,C),ft++)}const Rl=dn?_g(ss):_n;for(et=Rl.length-1,w=Qt-1;w>=0;w--){const Kt=q+w,ie=d[Kt],Pl=Kt+1<k?d[Kt+1].el:v;ss[w]===0?A(null,ie,g,Pl,y,I,S,T,C):dn&&(et<0||w!==Rl[et]?ze(ie,g,Pl,2):et--)}}},ze=(h,d,g,v,y=null)=>{const{el:I,type:S,transition:T,children:C,shapeFlag:w}=h;if(w&6){ze(h.component.subTree,d,g,v);return}if(w&128){h.suspense.move(d,g,v);return}if(w&64){S.move(h,d,g,fn);return}if(S===qt){s(I,d,g);for(let D=0;D<C.length;D++)ze(C[D],d,g,v);s(h.anchor,d,g);return}if(S===Ui){Q(h,d,g);return}if(v!==2&&w&1&&T)if(v===0)T.beforeEnter(I),s(I,d,g),jt(()=>T.enter(I),y);else{const{leave:D,delayLeave:R,afterLeave:V}=T,q=()=>s(I,d,g),st=()=>{D(I,()=>{q(),V&&V()})};R?R(I,q,st):st()}else s(I,d,g)},re=(h,d,g,v=!1,y=!1)=>{const{type:I,props:S,ref:T,children:C,dynamicChildren:w,shapeFlag:k,patchFlag:D,dirs:R}=h;if(T!=null&&Io(T,null,g,h,!0),k&256){d.ctx.deactivate(h);return}const V=k&1&&R,q=!ps(h);let st;if(q&&(st=S&&S.onVnodeBeforeUnmount)&&oe(st,d,h),k&6)Pd(h.component,g,v);else{if(k&128){h.suspense.unmount(g,v);return}V&&He(h,null,d,"beforeUnmount"),k&64?h.type.remove(h,d,g,y,fn,v):w&&(I!==qt||D>0&&D&64)?ve(w,d,g,!1,!0):(I===qt&&D&384||!y&&k&16)&&ve(C,d,g),v&&Ml(h)}(q&&(st=S&&S.onVnodeUnmounted)||V)&&jt(()=>{st&&oe(st,d,h),V&&He(h,null,d,"unmounted")},g)},Ml=h=>{const{type:d,el:g,anchor:v,transition:y}=h;if(d===qt){Rd(g,v);return}if(d===Ui){L(h);return}const I=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:T}=y,C=()=>S(g,I);T?T(h.el,I,C):C()}else I()},Rd=(h,d)=>{let g;for(;h!==d;)g=p(h),r(h),h=g;r(d)},Pd=(h,d,g)=>{const{bum:v,scope:y,update:I,subTree:S,um:T}=h;v&&_r(v),y.stop(),I&&(I.active=!1,re(S,h,d,g)),T&&jt(T,d),jt(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ve=(h,d,g,v=!1,y=!1,I=0)=>{for(let S=I;S<h.length;S++)re(h[S],d,g,v,y)},rr=h=>h.shapeFlag&6?rr(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),Ol=(h,d,g)=>{h==null?d._vnode&&re(d._vnode,null,null,!0):A(d._vnode||null,h,d,null,null,null,g),zl(),qu(),d._vnode=h},fn={p:A,um:re,m:ze,r:Ml,mt:Ri,mc:ye,pc:nt,pbc:je,n:rr,o:e};let Pi,Li;return t&&([Pi,Li]=t(fn)),{render:Ol,hydrate:Pi,createApp:fg(Ol,Pi)}}function Ke({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function lh(e,t,n=!1){const s=e.children,r=t.children;if($(s)&&$(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=xe(r[i]),a.el=o.el),n||lh(o,a)),a.type===ii&&(a.el=o.el)}}function _g(e){const t=e.slice(),n=[0];let s,r,i,o,a;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(r=n[n.length-1],e[r]<c){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Tg=e=>e.__isTeleport,qt=Symbol.for("v-fgt"),ii=Symbol.for("v-txt"),Rn=Symbol.for("v-cmt"),Ui=Symbol.for("v-stc"),ms=[];let Jt=null;function ee(e=!1){ms.push(Jt=e?null:[])}function Ig(){ms.pop(),Jt=ms[ms.length-1]||null}let Cs=1;function ec(e){Cs+=e}function ch(e){return e.dynamicChildren=Cs>0?Jt||_n:null,Ig(),Cs>0&&Jt&&Jt.push(e),e}function _e(e,t,n,s,r,i){return ch(ot(e,t,n,s,r,i,!0))}function uh(e,t,n,s,r){return ch($t(e,t,n,s,r,!0))}function hh(e){return e?e.__v_isVNode===!0:!1}function rs(e,t){return e.type===t.type&&e.key===t.key}const oi="__vInternal",fh=({key:e})=>e??null,Ir=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?yt(e)||Bt(e)||j(e)?{i:Mt,r:e,k:t,f:!!n}:e:null);function ot(e,t=null,n=null,s=0,r=null,i=e===qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fh(t),ref:t&&Ir(t),scopeId:ei,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Mt};return a?(ba(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=yt(n)?8:16),Cs>0&&!o&&Jt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Jt.push(l),l}const $t=Cg;function Cg(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===ng)&&(e=Rn),hh(e)){const a=Pn(e,t,!0);return n&&ba(a,n),Cs>0&&!i&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(e)]=a:Jt.push(a)),a.patchFlag|=-2,a}if(Pg(e)&&(e=e.__vccOpts),t){t=bg(t);let{class:a,style:l}=t;a&&!yt(a)&&(t.class=Xr(a)),lt(l)&&($u(l)&&!$(l)&&(l=St({},l)),t.style=ha(l))}const o=yt(e)?1:Up(e)?128:Tg(e)?64:lt(e)?4:j(e)?2:0;return ot(e,t,n,s,r,o,i,!0)}function bg(e){return e?$u(e)||oi in e?St({},e):e:null}function Pn(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=e,a=t?Sg(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&fh(a),ref:t&&t.ref?n&&r?$(r)?r.concat(Ir(t)):[r,Ir(t)]:Ir(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==qt?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pn(e.ssContent),ssFallback:e.ssFallback&&Pn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function dh(e=" ",t=0){return $t(ii,null,e,t)}function ae(e){return e==null||typeof e=="boolean"?$t(Rn):$(e)?$t(qt,null,e.slice()):typeof e=="object"?xe(e):$t(ii,null,String(e))}function xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pn(e)}function ba(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),ba(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(oi in t)?t._ctx=Mt:r===3&&Mt&&(Mt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Mt},n=32):(t=String(t),s&64?(n=16,t=[dh(t)]):n=8);e.children=t,e.shapeFlag|=n}function Sg(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Xr([t.class,s.class]));else if(r==="style")t.style=ha([t.style,s.style]);else if(Gr(r)){const i=t[r],o=s[r];o&&i!==o&&!($(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function oe(e,t,n,s=null){te(e,t,7,[n,s])}const Ag=nh();let xg=0;function Dg(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Ag,i={uid:xg++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rh(s,r),emitsOptions:Hu(s,r),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:s.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Lp.bind(null,i),e.ce&&e.ce(i),i}let Ct=null,Sa,pn,nc="__VUE_INSTANCE_SETTERS__";(pn=co()[nc])||(pn=co()[nc]=[]),pn.push(e=>Ct=e),Sa=e=>{pn.length>1?pn.forEach(t=>t(e)):pn[0](e)};const Ln=e=>{Sa(e),e.scope.on()},en=()=>{Ct&&Ct.scope.off(),Sa(null)};function ph(e){return e.vnode.shapeFlag&4}let bs=!1;function Ng(e,t=!1){bs=t;const{props:n,children:s}=e.vnode,r=ph(e);pg(e,n,r,t),yg(e,s);const i=r?Mg(e,t):void 0;return bs=!1,i}function Mg(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Vu(new Proxy(e.ctx,ig));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?kg(e):null;Ln(e),Kn();const i=Oe(s,e,0,[e.props,r]);if(Gn(),en(),Tu(i)){if(i.then(en,en),t)return i.then(o=>{sc(e,o,t)}).catch(o=>{Zr(o,e,0)});e.asyncDep=i}else sc(e,i,t)}else gh(e,t)}function sc(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:lt(t)&&(e.setupState=Bu(t)),gh(e,n)}let rc;function gh(e,t,n){const s=e.type;if(!e.render){if(!t&&rc&&!s.render){const r=s.template||Ia(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,c=St(St({isCustomElement:i,delimiters:a},o),l);s.render=rc(r,c)}}e.render=s.render||Zt}Ln(e),Kn(),og(e),Gn(),en()}function Og(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return zt(e,"get","$attrs"),t[n]}}))}function kg(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Og(e)},slots:e.slots,emit:e.emit,expose:t}}function ai(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Bu(Vu(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gs)return gs[n](e)},has(t,n){return n in t||n in gs}}))}function Rg(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function Pg(e){return j(e)&&"__vccOpts"in e}const Lg=(e,t)=>Dp(e,t,bs),Fg=Symbol.for("v-scx"),$g=()=>Tr(Fg),Vg="3.3.4",Bg="http://www.w3.org/2000/svg",Qe=typeof document<"u"?document:null,ic=Qe&&Qe.createElement("template"),Ug={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?Qe.createElementNS(Bg,e):Qe.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ic.innerHTML=s?`<svg>${e}</svg>`:e;const a=ic.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function jg(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function qg(e,t,n){const s=e.style,r=yt(n);if(n&&!r){if(t&&!yt(t))for(const i in t)n[i]==null&&Co(s,i,"");for(const i in n)Co(s,i,n[i])}else{const i=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=i)}}const oc=/\s*!important$/;function Co(e,t,n){if($(n))n.forEach(s=>Co(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=zg(e,t);oc.test(n)?e.setProperty(Hn(s),n.replace(oc,""),"important"):e[s]=n}}const ac=["Webkit","Moz","ms"],ji={};function zg(e,t){const n=ji[t];if(n)return n;let s=de(t);if(s!=="filter"&&s in e)return ji[t]=s;s=Yr(s);for(let r=0;r<ac.length;r++){const i=ac[r]+s;if(i in e)return ji[t]=i}return t}const lc="http://www.w3.org/1999/xlink";function Hg(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(lc,t.slice(6,t.length)):e.setAttributeNS(lc,t,n);else{const i=Gd(t);n==null||i&&!bu(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Kg(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=bu(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function yn(e,t,n,s){e.addEventListener(t,n,s)}function Gg(e,t,n,s){e.removeEventListener(t,n,s)}function Wg(e,t,n,s,r=null){const i=e._vei||(e._vei={}),o=i[t];if(s&&o)o.value=s;else{const[a,l]=Qg(t);if(s){const c=i[t]=Jg(s,r);yn(e,a,c,l)}else o&&(Gg(e,a,o,l),i[t]=void 0)}}const cc=/(?:Once|Passive|Capture)$/;function Qg(e){let t;if(cc.test(e)){t={};let s;for(;s=e.match(cc);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Hn(e.slice(2)),t]}let qi=0;const Yg=Promise.resolve(),Xg=()=>qi||(Yg.then(()=>qi=0),qi=Date.now());function Jg(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;te(Zg(s,n.value),t,5,[s])};return n.value=e,n.attached=Xg(),n}function Zg(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const uc=/^on[a-z]/,tm=(e,t,n,s,r=!1,i,o,a,l)=>{t==="class"?jg(e,s,r):t==="style"?qg(e,n,s):Gr(t)?aa(t)||Wg(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):em(e,t,s,r))?Kg(e,t,s,i,o,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Hg(e,t,s,r))};function em(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&uc.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||uc.test(t)&&yt(n)?!1:t in e}const hc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return $(t)?n=>_r(t,n):t};function nm(e){e.target.composing=!0}function fc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const bo={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=hc(r);const i=s||r.props&&r.props.type==="number";yn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=lo(a)),e._assign(a)}),n&&yn(e,"change",()=>{e.value=e.value.trim()}),t||(yn(e,"compositionstart",nm),yn(e,"compositionend",fc),yn(e,"change",fc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},i){if(e._assign=hc(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&lo(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},sm=["ctrl","shift","alt","meta"],rm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>sm.some(n=>e[`${n}Key`]&&!t.includes(n))},mh=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const i=rm[t[r]];if(i&&i(n,t))return}return e(n,...s)},im=St({patchProp:tm},Ug);let dc;function om(){return dc||(dc=wg(im))}const am=(...e)=>{const t=om().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=lm(s);if(!r)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function lm(e){return yt(e)?document.querySelector(e):e}const Wn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},cm={props:["label","type"]};function um(e,t,n,s,r,i){return ee(),_e("button",{class:Xr({reset:n.type==="reset"})},uo(n.label),3)}const yh=Wn(cm,[["render",um]]);const hm={props:["src","name","winningYears"],computed:{sortedYears(){return this.winningYears.sort((e,t)=>Number.parseInt(e)-Number.parseInt(t))}}},fm=e=>(ni("data-v-cef0d1c7"),e=e(),si(),e),dm={class:"app-result"},pm=["src"],gm=fm(()=>ot("div",null,"Winning Years:",-1));function mm(e,t,n,s,r,i){return ee(),_e("div",dm,[ot("img",{src:n.src,alt:""},null,8,pm),ot("h2",null,uo(n.name),1),gm,(ee(!0),_e(qt,null,Zu(i.sortedYears,(o,a)=>(ee(),_e("div",{class:"year",key:a},uo(o),1))),128))])}const ym=Wn(hm,[["render",mm],["__scopeId","data-v-cef0d1c7"]]);const vm={emits:["update"],data(){return{teamName:""}},methods:{updateTeamName(){this.$emit("update",this.teamName)}}},wm=e=>(ni("data-v-5bc2ae5d"),e=e(),si(),e),Em=wm(()=>ot("i",{class:"fa-solid fa-magnifying-glass"},null,-1));function _m(e,t,n,s,r,i){return ee(),_e("form",{onSubmit:t[2]||(t[2]=mh(()=>{},["prevent"]))},[vo(ot("input",{type:"text",placeholder:"Search...",required:"","onUpdate:modelValue":t[0]||(t[0]=o=>r.teamName=o),onInput:t[1]||(t[1]=(...o)=>i.updateTeamName&&i.updateTeamName(...o))},null,544),[[bo,r.teamName]]),Em],32)}const Tm=Wn(vm,[["render",_m],["__scopeId","data-v-5bc2ae5d"]]);/**
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
 */const vh=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Im=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},wh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,c=l?e[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(p=64)),s.push(n[u],n[f],n[p],n[m])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Im(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const c=r<e.length?n[e.charAt(r)]:64;++r;const f=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||c==null||f==null)throw new Cm;const p=i<<2|a>>4;if(s.push(p),c!==64){const m=a<<4&240|c>>2;if(s.push(m),f!==64){const M=c<<6&192|f;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Cm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bm=function(e){const t=vh(e);return wh.encodeByteArray(t,!0)},kr=function(e){return bm(e).replace(/\./g,"")},Sm=function(e){try{return wh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Am(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xm=()=>Am().__FIREBASE_DEFAULTS__,Dm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Nm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Sm(e[1]);return t&&JSON.parse(t)},Eh=()=>{try{return xm()||Dm()||Nm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Mm=e=>{var t,n;return(n=(t=Eh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Om=e=>{const t=Mm(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},_h=()=>{var e;return(e=Eh())===null||e===void 0?void 0:e.config};/**
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
 */class km{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Rm(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[kr(JSON.stringify(n)),kr(JSON.stringify(o)),a].join(".")}function Pm(){try{return typeof indexedDB=="object"}catch{return!1}}function Lm(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Fm="FirebaseError";class Qn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Fm,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Th.prototype.create)}}class Th{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?$m(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Qn(r,a,s)}}function $m(e,t){return e.replace(Vm,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Vm=/\{\$([^}]+)}/g;function So(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(pc(i)&&pc(o)){if(!So(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function pc(e){return e!==null&&typeof e=="object"}/**
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
 */function Ss(e){return e&&e._delegate?e._delegate:e}class As{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ge="[DEFAULT]";/**
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
 */class Bm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new km;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jm(t))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Ge){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ge){return this.instances.has(t)}getOptions(t=Ge){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Um(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ge){return this.component?this.component.multipleInstances?t:Ge:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Um(e){return e===Ge?void 0:e}function jm(e){return e.instantiationMode==="EAGER"}/**
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
 */class qm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Bm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const zm={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Hm=Y.INFO,Km={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Gm=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Km[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ih{constructor(t){this.name=t,this._logLevel=Hm,this._logHandler=Gm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Wm=(e,t)=>t.some(n=>e instanceof n);let gc,mc;function Qm(){return gc||(gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ym(){return mc||(mc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ch=new WeakMap,Ao=new WeakMap,bh=new WeakMap,zi=new WeakMap,Aa=new WeakMap;function Xm(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(ke(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ch.set(n,e)}).catch(()=>{}),Aa.set(t,e),t}function Jm(e){if(Ao.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ao.set(e,t)}let xo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ao.get(e);if(t==="objectStoreNames")return e.objectStoreNames||bh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ke(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zm(e){xo=e(xo)}function ty(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Hi(this),t,...n);return bh.set(s,t.sort?t.sort():[t]),ke(s)}:Ym().includes(e)?function(...t){return e.apply(Hi(this),t),ke(Ch.get(this))}:function(...t){return ke(e.apply(Hi(this),t))}}function ey(e){return typeof e=="function"?ty(e):(e instanceof IDBTransaction&&Jm(e),Wm(e,Qm())?new Proxy(e,xo):e)}function ke(e){if(e instanceof IDBRequest)return Xm(e);if(zi.has(e))return zi.get(e);const t=ey(e);return t!==e&&(zi.set(e,t),Aa.set(t,e)),t}const Hi=e=>Aa.get(e);function ny(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=ke(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ke(o.result),l.oldVersion,l.newVersion,ke(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sy=["get","getKey","getAll","getAllKeys","count"],ry=["put","add","delete","clear"],Ki=new Map;function yc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ki.get(t))return Ki.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=ry.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||sy.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Ki.set(t,i),i}Zm(e=>({...e,get:(t,n,s)=>yc(t,n)||e.get(t,n,s),has:(t,n)=>!!yc(t,n)||e.has(t,n)}));/**
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
 */class iy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function oy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Do="@firebase/app",vc="0.9.12";/**
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
 */const rn=new Ih("@firebase/app"),ay="@firebase/app-compat",ly="@firebase/analytics-compat",cy="@firebase/analytics",uy="@firebase/app-check-compat",hy="@firebase/app-check",fy="@firebase/auth",dy="@firebase/auth-compat",py="@firebase/database",gy="@firebase/database-compat",my="@firebase/functions",yy="@firebase/functions-compat",vy="@firebase/installations",wy="@firebase/installations-compat",Ey="@firebase/messaging",_y="@firebase/messaging-compat",Ty="@firebase/performance",Iy="@firebase/performance-compat",Cy="@firebase/remote-config",by="@firebase/remote-config-compat",Sy="@firebase/storage",Ay="@firebase/storage-compat",xy="@firebase/firestore",Dy="@firebase/firestore-compat",Ny="firebase",My="9.22.2";/**
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
 */const No="[DEFAULT]",Oy={[Do]:"fire-core",[ay]:"fire-core-compat",[cy]:"fire-analytics",[ly]:"fire-analytics-compat",[hy]:"fire-app-check",[uy]:"fire-app-check-compat",[fy]:"fire-auth",[dy]:"fire-auth-compat",[py]:"fire-rtdb",[gy]:"fire-rtdb-compat",[my]:"fire-fn",[yy]:"fire-fn-compat",[vy]:"fire-iid",[wy]:"fire-iid-compat",[Ey]:"fire-fcm",[_y]:"fire-fcm-compat",[Ty]:"fire-perf",[Iy]:"fire-perf-compat",[Cy]:"fire-rc",[by]:"fire-rc-compat",[Sy]:"fire-gcs",[Ay]:"fire-gcs-compat",[xy]:"fire-fst",[Dy]:"fire-fst-compat","fire-js":"fire-js",[Ny]:"fire-js-all"};/**
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
 */const Rr=new Map,Mo=new Map;function ky(e,t){try{e.container.addComponent(t)}catch(n){rn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Pr(e){const t=e.name;if(Mo.has(t))return rn.debug(`There were multiple attempts to register component ${t}.`),!1;Mo.set(t,e);for(const n of Rr.values())ky(n,e);return!0}function Ry(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Py={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Re=new Th("app","Firebase",Py);/**
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
 */class Ly{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new As("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Re.create("app-deleted",{appName:this._name})}}/**
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
 */const Fy=My;function Sh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:No,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Re.create("bad-app-name",{appName:String(r)});if(n||(n=_h()),!n)throw Re.create("no-options");const i=Rr.get(r);if(i){if(So(n,i.options)&&So(s,i.config))return i;throw Re.create("duplicate-app",{appName:r})}const o=new qm(r);for(const l of Mo.values())o.addComponent(l);const a=new Ly(n,s,o);return Rr.set(r,a),a}function $y(e=No){const t=Rr.get(e);if(!t&&e===No&&_h())return Sh();if(!t)throw Re.create("no-app",{appName:e});return t}function bn(e,t,n){var s;let r=(s=Oy[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),rn.warn(a.join(" "));return}Pr(new As(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Vy="firebase-heartbeat-database",By=1,xs="firebase-heartbeat-store";let Gi=null;function Ah(){return Gi||(Gi=ny(Vy,By,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(xs)}}}).catch(e=>{throw Re.create("idb-open",{originalErrorMessage:e.message})})),Gi}async function Uy(e){try{return await(await Ah()).transaction(xs).objectStore(xs).get(xh(e))}catch(t){if(t instanceof Qn)rn.warn(t.message);else{const n=Re.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});rn.warn(n.message)}}}async function wc(e,t){try{const s=(await Ah()).transaction(xs,"readwrite");await s.objectStore(xs).put(t,xh(e)),await s.done}catch(n){if(n instanceof Qn)rn.warn(n.message);else{const s=Re.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rn.warn(s.message)}}}function xh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const jy=1024,qy=30*24*60*60*1e3;class zy{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ky(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ec();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=qy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ec(),{heartbeatsToSend:n,unsentEntries:s}=Hy(this._heartbeatsCache.heartbeats),r=kr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ec(){return new Date().toISOString().substring(0,10)}function Hy(e,t=jy){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),_c(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),_c(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ky{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pm()?Lm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Uy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return wc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return wc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function _c(e){return kr(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Gy(e){Pr(new As("platform-logger",t=>new iy(t),"PRIVATE")),Pr(new As("heartbeat",t=>new zy(t),"PRIVATE")),bn(Do,vc,e),bn(Do,vc,"esm2017"),bn("fire-js","")}Gy("");var Wy="firebase",Qy="9.22.2";/**
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
 */bn(Wy,Qy,"app");var Yy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,xa=xa||{},F=Yy||self;function li(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Us(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Xy(e){return Object.prototype.hasOwnProperty.call(e,Wi)&&e[Wi]||(e[Wi]=++Jy)}var Wi="closure_uid_"+(1e9*Math.random()>>>0),Jy=0;function Zy(e,t,n){return e.call.apply(e.bind,arguments)}function tv(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function Ot(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ot=Zy:Ot=tv,Ot.apply(null,arguments)}function hr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function _t(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Ve(){this.s=this.s,this.o=this.o}var ev=0;Ve.prototype.s=!1;Ve.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ev!=0)&&Xy(this)};Ve.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dh=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Da(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Tc(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(li(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function kt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}kt.prototype.h=function(){this.defaultPrevented=!0};var nv=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{F.addEventListener("test",()=>{},t),F.removeEventListener("test",()=>{},t)}catch{}return e}();function Ds(e){return/^[\s\xa0]*$/.test(e)}function ci(){var e=F.navigator;return e&&(e=e.userAgent)?e:""}function ce(e){return ci().indexOf(e)!=-1}function Na(e){return Na[" "](e),e}Na[" "]=function(){};function sv(e,t){var n=Qv;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var rv=ce("Opera"),Fn=ce("Trident")||ce("MSIE"),Nh=ce("Edge"),Oo=Nh||Fn,Mh=ce("Gecko")&&!(ci().toLowerCase().indexOf("webkit")!=-1&&!ce("Edge"))&&!(ce("Trident")||ce("MSIE"))&&!ce("Edge"),iv=ci().toLowerCase().indexOf("webkit")!=-1&&!ce("Edge");function Oh(){var e=F.document;return e?e.documentMode:void 0}var ko;t:{var Qi="",Yi=function(){var e=ci();if(Mh)return/rv:([^\);]+)(\)|;)/.exec(e);if(Nh)return/Edge\/([\d\.]+)/.exec(e);if(Fn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(iv)return/WebKit\/(\S+)/.exec(e);if(rv)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Yi&&(Qi=Yi?Yi[1]:""),Fn){var Xi=Oh();if(Xi!=null&&Xi>parseFloat(Qi)){ko=String(Xi);break t}}ko=Qi}var Ro;if(F.document&&Fn){var Ic=Oh();Ro=Ic||parseInt(ko,10)||void 0}else Ro=void 0;var ov=Ro;function Ns(e,t){if(kt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Mh){t:{try{Na(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:av[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ns.$.h.call(this)}}_t(Ns,kt);var av={2:"touch",3:"pen",4:"mouse"};Ns.prototype.h=function(){Ns.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var js="closure_listenable_"+(1e6*Math.random()|0),lv=0;function cv(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=r,this.key=++lv,this.fa=this.ia=!1}function ui(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ma(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function uv(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function kh(e){const t={};for(const n in e)t[n]=e[n];return t}const Cc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rh(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Cc.length;i++)n=Cc[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function hi(e){this.src=e,this.g={},this.h=0}hi.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Lo(e,t,s,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new cv(t,this.src,i,!!s,r),t.ia=n,e.push(t)),t};function Po(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Dh(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ui(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Lo(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==s)return r}return-1}var Oa="closure_lm_"+(1e6*Math.random()|0),Ji={};function Ph(e,t,n,s,r){if(s&&s.once)return Fh(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ph(e,t[i],n,s,r);return null}return n=Pa(n),e&&e[js]?e.O(t,n,Us(s)?!!s.capture:!!s,r):Lh(e,t,n,!1,s,r)}function Lh(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Us(r)?!!r.capture:!!r,a=Ra(e);if(a||(e[Oa]=a=new hi(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=hv(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)nv||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Vh(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hv(){function e(n){return t.call(e.src,e.listener,n)}const t=fv;return e}function Fh(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Fh(e,t[i],n,s,r);return null}return n=Pa(n),e&&e[js]?e.P(t,n,Us(s)?!!s.capture:!!s,r):Lh(e,t,n,!0,s,r)}function $h(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)$h(e,t[i],n,s,r);else s=Us(s)?!!s.capture:!!s,n=Pa(n),e&&e[js]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Lo(i,n,s,r),-1<n&&(ui(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ra(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Lo(t,n,s,r)),(n=-1<e?t[e]:null)&&ka(n))}function ka(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[js])Po(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Vh(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ra(t))?(Po(n,e),n.h==0&&(n.src=null,t[Oa]=null)):ui(e)}}}function Vh(e){return e in Ji?Ji[e]:Ji[e]="on"+e}function fv(e,t){if(e.fa)e=!0;else{t=new Ns(t,this);var n=e.listener,s=e.la||e.src;e.ia&&ka(e),e=n.call(s,t)}return e}function Ra(e){return e=e[Oa],e instanceof hi?e:null}var Zi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pa(e){return typeof e=="function"?e:(e[Zi]||(e[Zi]=function(t){return e.handleEvent(t)}),e[Zi])}function Et(){Ve.call(this),this.i=new hi(this),this.S=this,this.J=null}_t(Et,Ve);Et.prototype[js]=!0;Et.prototype.removeEventListener=function(e,t,n,s){$h(this,e,t,n,s)};function bt(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new kt(t,e);else if(t instanceof kt)t.target=t.target||e;else{var r=t;t=new kt(s,e),Rh(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=fr(o,s,!0,t)&&r}if(o=t.g=e,r=fr(o,s,!0,t)&&r,r=fr(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=fr(o,s,!1,t)&&r}Et.prototype.N=function(){if(Et.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ui(n[s]);delete e.g[t],e.h--}}this.J=null};Et.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};Et.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function fr(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Po(e.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var La=F.JSON.stringify;class dv{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function pv(){var e=Fa;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class gv{constructor(){this.h=this.g=null}add(t,n){const s=Bh.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Bh=new dv(()=>new mv,e=>e.reset());class mv{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yv(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function vv(e){F.setTimeout(()=>{throw e},0)}let Ms,Os=!1,Fa=new gv,Uh=()=>{const e=F.Promise.resolve(void 0);Ms=()=>{e.then(wv)}};var wv=()=>{for(var e;e=pv();){try{e.h.call(e.g)}catch(n){vv(n)}var t=Bh;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Os=!1};function fi(e,t){Et.call(this),this.h=e||1,this.g=t||F,this.j=Ot(this.qb,this),this.l=Date.now()}_t(fi,Et);b=fi.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),bt(this,"tick"),this.ga&&($a(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $a(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}b.N=function(){fi.$.N.call(this),$a(this),delete this.g};function Va(e,t,n){if(typeof e=="function")n&&(e=Ot(e,n));else if(e&&typeof e.handleEvent=="function")e=Ot(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:F.setTimeout(e,t||0)}function jh(e){e.g=Va(()=>{e.g=null,e.i&&(e.i=!1,jh(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Ev extends Ve{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:jh(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ks(e){Ve.call(this),this.h=e,this.g={}}_t(ks,Ve);var bc=[];function qh(e,t,n,s){Array.isArray(n)||(n&&(bc[0]=n.toString()),n=bc);for(var r=0;r<n.length;r++){var i=Ph(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function zh(e){Ma(e.g,function(t,n){this.g.hasOwnProperty(n)&&ka(t)},e),e.g={}}ks.prototype.N=function(){ks.$.N.call(this),zh(this)};ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function di(){this.g=!0}di.prototype.Ea=function(){this.g=!1};function _v(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Tv(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function En(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Cv(e,n)+(s?" "+s:"")})}function Iv(e,t){e.info(function(){return"TIMEOUT: "+t})}di.prototype.info=function(){};function Cv(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return La(n)}catch{return t}}var cn={},Sc=null;function pi(){return Sc=Sc||new Et}cn.Ta="serverreachability";function Hh(e){kt.call(this,cn.Ta,e)}_t(Hh,kt);function Rs(e){const t=pi();bt(t,new Hh(t))}cn.STAT_EVENT="statevent";function Kh(e,t){kt.call(this,cn.STAT_EVENT,e),this.stat=t}_t(Kh,kt);function Ut(e){const t=pi();bt(t,new Kh(t,e))}cn.Ua="timingevent";function Gh(e,t){kt.call(this,cn.Ua,e),this.size=t}_t(Gh,kt);function qs(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){e()},t)}var gi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Wh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ba(){}Ba.prototype.h=null;function Ac(e){return e.h||(e.h=e.i())}function Qh(){}var zs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ua(){kt.call(this,"d")}_t(Ua,kt);function ja(){kt.call(this,"c")}_t(ja,kt);var Fo;function mi(){}_t(mi,Ba);mi.prototype.g=function(){return new XMLHttpRequest};mi.prototype.i=function(){return{}};Fo=new mi;function Hs(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new ks(this),this.P=bv,e=Oo?125:void 0,this.V=new fi(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Yh}function Yh(){this.i=null,this.g="",this.h=!1}var bv=45e3,$o={},Lr={};b=Hs.prototype;b.setTimeout=function(e){this.P=e};function Vo(e,t,n){e.L=1,e.v=vi(Ie(t)),e.s=n,e.S=!0,Xh(e,null)}function Xh(e,t){e.G=Date.now(),Ks(e),e.A=Ie(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),of(n.i,"t",s),e.C=0,n=e.l.J,e.h=new Yh,e.g=Af(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Ev(Ot(e.Pa,e,e.g),e.O)),qh(e.U,e.g,"readystatechange",e.nb),t=e.I?kh(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Rs(),_v(e.j,e.u,e.A,e.m,e.W,e.s)}b.nb=function(e){e=e.target;const t=this.M;t&&he(e)==3?t.l():this.Pa(e)};b.Pa=function(e){try{if(e==this.g)t:{const u=he(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>u)&&(u!=3||Oo||this.g&&(this.h.h||this.g.ja()||Mc(this.g)))){this.J||u!=4||t==7||(t==8||0>=f?Rs(3):Rs(2)),yi(this);var n=this.g.da();this.ca=n;e:if(Jh(this)){var s=Mc(this.g);e="";var r=s.length,i=he(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xe(this),ys(this);var o="";break e}this.h.i=new F.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Tv(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ds(a)){var c=a;break e}}c=null}if(n=c)En(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bo(this,n);else{this.i=!1,this.o=3,Ut(12),Xe(this),ys(this);break t}}this.S?(Zh(this,u,o),Oo&&this.i&&u==3&&(qh(this.U,this.V,"tick",this.mb),this.V.start())):(En(this.j,this.m,o,null),Bo(this,o)),u==4&&Xe(this),this.i&&!this.J&&(u==4?If(this.l,this):(this.i=!1,Ks(this)))}else Kv(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ut(12)):(this.o=0,Ut(13)),Xe(this),ys(this)}}}catch{}finally{}};function Jh(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Zh(e,t,n){let s=!0,r;for(;!e.J&&e.C<n.length;)if(r=Sv(e,n),r==Lr){t==4&&(e.o=4,Ut(14),s=!1),En(e.j,e.m,null,"[Incomplete Response]");break}else if(r==$o){e.o=4,Ut(15),En(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else En(e.j,e.m,r,null),Bo(e,r);Jh(e)&&r!=Lr&&r!=$o&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Ut(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wa(t),t.M=!0,Ut(11))):(En(e.j,e.m,n,"[Invalid Chunked Response]"),Xe(e),ys(e))}b.mb=function(){if(this.g){var e=he(this.g),t=this.g.ja();this.C<t.length&&(yi(this),Zh(this,e,t),this.i&&e!=4&&Ks(this))}};function Sv(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Lr:(n=Number(t.substring(n,s)),isNaN(n)?$o:(s+=1,s+n>t.length?Lr:(t=t.slice(s,s+n),e.C=s+n,t)))}b.cancel=function(){this.J=!0,Xe(this)};function Ks(e){e.Y=Date.now()+e.P,tf(e,e.P)}function tf(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=qs(Ot(e.lb,e),t)}function yi(e){e.B&&(F.clearTimeout(e.B),e.B=null)}b.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Iv(this.j,this.A),this.L!=2&&(Rs(),Ut(17)),Xe(this),this.o=2,ys(this)):tf(this,this.Y-e)};function ys(e){e.l.H==0||e.J||If(e.l,e)}function Xe(e){yi(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,$a(e.V),zh(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Bo(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Uo(n.i,e))){if(!e.K&&Uo(n.i,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Vr(n),_i(n);else break t;Ga(n),Ut(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=qs(Ot(n.ib,n),6e3));if(1>=cf(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Je(n,11)}else if((e.K||n.g==e)&&Vr(n),!Ds(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const f=c[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const M=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(M){var i=s.i;i.g||M.indexOf("spdy")==-1&&M.indexOf("quic")==-1&&M.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(qa(i,i.h),i.h=null))}if(s.F){const A=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.Da=A,it(s.I,s.F,A))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=Sf(s,s.J?s.pa:null,s.Y),o.K){uf(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(yi(a),Ks(a)),s.g=o}else _f(s);0<n.j.length&&Ti(n)}else c[0]!="stop"&&c[0]!="close"||Je(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Je(n,7):Ka(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Rs(4)}catch{}}function Av(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(li(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function xv(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(li(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function ef(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(li(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=xv(e),s=Av(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var nf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dv(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function nn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof nn){this.h=e.h,Fr(this,e.j),this.s=e.s,this.g=e.g,$r(this,e.m),this.l=e.l;var t=e.i,n=new Ps;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),xc(this,n),this.o=e.o}else e&&(t=String(e).match(nf))?(this.h=!1,Fr(this,t[1]||"",!0),this.s=cs(t[2]||""),this.g=cs(t[3]||"",!0),$r(this,t[4]),this.l=cs(t[5]||"",!0),xc(this,t[6]||"",!0),this.o=cs(t[7]||"")):(this.h=!1,this.i=new Ps(null,this.h))}nn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(us(t,Dc,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(us(t,Dc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(us(n,n.charAt(0)=="/"?Ov:Mv,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",us(n,Rv)),e.join("")};function Ie(e){return new nn(e)}function Fr(e,t,n){e.j=n?cs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function $r(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function xc(e,t,n){t instanceof Ps?(e.i=t,Pv(e.i,e.h)):(n||(t=us(t,kv)),e.i=new Ps(t,e.h))}function it(e,t,n){e.i.set(t,n)}function vi(e){return it(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function cs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function us(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Nv),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Nv(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Dc=/[#\/\?@]/g,Mv=/[#\?:]/g,Ov=/[#\?]/g,kv=/[#\?@]/g,Rv=/#/g;function Ps(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Be(e){e.g||(e.g=new Map,e.h=0,e.i&&Dv(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}b=Ps.prototype;b.add=function(e,t){Be(this),this.i=null,e=Yn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function sf(e,t){Be(e),t=Yn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function rf(e,t){return Be(e),t=Yn(e,t),e.g.has(t)}b.forEach=function(e,t){Be(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};b.ta=function(){Be(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};b.Z=function(e){Be(this);let t=[];if(typeof e=="string")rf(this,e)&&(t=t.concat(this.g.get(Yn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};b.set=function(e,t){return Be(this),this.i=null,e=Yn(this,e),rf(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};b.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function of(e,t,n){sf(e,t),0<n.length&&(e.i=null,e.g.set(Yn(e,t),Da(n)),e.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function Yn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Pv(e,t){t&&!e.j&&(Be(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(sf(this,s),of(this,r,n))},e)),e.j=t}var Lv=class{constructor(e,t){this.g=e,this.map=t}};function af(e){this.l=e||Fv,F.PerformanceNavigationTiming?(e=F.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fv=10;function lf(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function cf(e){return e.h?1:e.g?e.g.size:0}function Uo(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function qa(e,t){e.g?e.g.add(t):e.h=t}function uf(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}af.prototype.cancel=function(){if(this.i=hf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function hf(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Da(e.i)}var $v=class{stringify(e){return F.JSON.stringify(e,void 0)}parse(e){return F.JSON.parse(e,void 0)}};function Vv(){this.g=new $v}function Bv(e,t,n){const s=n||"";try{ef(e,function(r,i){let o=r;Us(r)&&(o=La(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Uv(e,t){const n=new di;if(F.Image){const s=new Image;s.onload=hr(dr,n,s,"TestLoadImage: loaded",!0,t),s.onerror=hr(dr,n,s,"TestLoadImage: error",!1,t),s.onabort=hr(dr,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=hr(dr,n,s,"TestLoadImage: timeout",!1,t),F.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function dr(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Gs(e){this.l=e.fc||null,this.j=e.ob||!1}_t(Gs,Ba);Gs.prototype.g=function(){return new wi(this.l,this.j)};Gs.prototype.i=function(e){return function(){return e}}({});function wi(e,t){Et.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=za,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_t(wi,Et);var za=0;b=wi.prototype;b.open=function(e,t){if(this.readyState!=za)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ls(this)};b.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||F).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=za};b.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ff(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function ff(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}b.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ws(this):Ls(this),this.readyState==3&&ff(this)}};b.Za=function(e){this.g&&(this.response=this.responseText=e,Ws(this))};b.Ya=function(e){this.g&&(this.response=e,Ws(this))};b.ka=function(){this.g&&Ws(this)};function Ws(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ls(e)}b.setRequestHeader=function(e,t){this.v.append(e,t)};b.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ls(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var jv=F.JSON.parse;function ut(e){Et.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=df,this.L=this.M=!1}_t(ut,Et);var df="",qv=/^https?$/i,zv=["POST","PUT"];b=ut.prototype;b.Oa=function(e){this.M=e};b.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Fo.g(),this.C=this.u?Ac(this.u):Ac(Fo),this.g.onreadystatechange=Ot(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Nc(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=F.FormData&&e instanceof F.FormData,!(0<=Dh(zv,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{mf(this),0<this.B&&((this.L=Hv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ot(this.ua,this)):this.A=Va(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Nc(this,i)}};function Hv(e){return Fn&&typeof e.timeout=="number"&&e.ontimeout!==void 0}b.ua=function(){typeof xa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,bt(this,"timeout"),this.abort(8))};function Nc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,pf(e),Ei(e)}function pf(e){e.F||(e.F=!0,bt(e,"complete"),bt(e,"error"))}b.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,bt(this,"complete"),bt(this,"abort"),Ei(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ei(this,!0)),ut.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?gf(this):this.kb())};b.kb=function(){gf(this)};function gf(e){if(e.h&&typeof xa<"u"&&(!e.C[1]||he(e)!=4||e.da()!=2)){if(e.v&&he(e)==4)Va(e.La,0,e);else if(bt(e,"readystatechange"),he(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=o===0){var r=String(e.I).match(nf)[1]||null;!r&&F.self&&F.self.location&&(r=F.self.location.protocol.slice(0,-1)),s=!qv.test(r?r.toLowerCase():"")}n=s}if(n)bt(e,"complete"),bt(e,"success");else{e.m=6;try{var i=2<he(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",pf(e)}}finally{Ei(e)}}}}function Ei(e,t){if(e.g){mf(e);const n=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||bt(e,"ready");try{n.onreadystatechange=s}catch{}}}function mf(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(F.clearTimeout(e.A),e.A=null)}b.isActive=function(){return!!this.g};function he(e){return e.g?e.g.readyState:0}b.da=function(){try{return 2<he(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),jv(t)}};function Mc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case df:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Kv(e){const t={};e=(e.g&&2<=he(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<e.length;s++){if(Ds(e[s]))continue;var n=yv(e[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[r]||[];t[r]=i,i.push(n)}uv(t,function(s){return s.join(", ")})}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yf(e){let t="";return Ma(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ha(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=yf(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):it(e,t,n))}function is(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function vf(e){this.Ga=0,this.j=[],this.l=new di,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=is("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=is("baseRetryDelayMs",5e3,e),this.hb=is("retryDelaySeedMs",1e4,e),this.eb=is("forwardChannelMaxRetries",2,e),this.xa=is("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new af(e&&e.concurrentRequestLimit),this.Ja=new Vv,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}b=vf.prototype;b.ra=8;b.H=1;function Ka(e){if(wf(e),e.H==3){var t=e.W++,n=Ie(e.I);if(it(n,"SID",e.K),it(n,"RID",t),it(n,"TYPE","terminate"),Qs(e,n),t=new Hs(e,e.l,t),t.L=2,t.v=vi(Ie(n)),n=!1,F.navigator&&F.navigator.sendBeacon)try{n=F.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&F.Image&&(new Image().src=t.v,n=!0),n||(t.g=Af(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ks(t)}bf(e)}function _i(e){e.g&&(Wa(e),e.g.cancel(),e.g=null)}function wf(e){_i(e),e.u&&(F.clearTimeout(e.u),e.u=null),Vr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&F.clearTimeout(e.m),e.m=null)}function Ti(e){if(!lf(e.i)&&!e.m){e.m=!0;var t=e.Na;Ms||Uh(),Os||(Ms(),Os=!0),Fa.add(t,e),e.C=0}}function Gv(e,t){return cf(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=qs(Ot(e.Na,e,t),Cf(e,e.C)),e.C++,!0)}b.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new Hs(this,this.l,e);let i=this.s;if(this.U&&(i?(i=kh(i),Rh(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ef(this,r,t),n=Ie(this.I),it(n,"RID",e),it(n,"CVER",22),this.F&&it(n,"X-HTTP-Session-Id",this.F),Qs(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(yf(i)))+"&"+t:this.o&&Ha(n,this.o,i)),qa(this.i,r),this.bb&&it(n,"TYPE","init"),this.P?(it(n,"$req",t),it(n,"SID","null"),r.aa=!0,Vo(r,n,null)):Vo(r,n,t),this.H=2}}else this.H==3&&(e?Oc(this,e):this.j.length==0||lf(this.i)||Oc(this))};function Oc(e,t){var n;t?n=t.m:n=e.W++;const s=Ie(e.I);it(s,"SID",e.K),it(s,"RID",n),it(s,"AID",e.V),Qs(e,s),e.o&&e.s&&Ha(s,e.o,e.s),n=new Hs(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ef(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),qa(e.i,n),Vo(n,s,t)}function Qs(e,t){e.na&&Ma(e.na,function(n,s){it(t,s,n)}),e.h&&ef({},function(n,s){it(t,s,n)})}function Ef(e,t,n){n=Math.min(e.j.length,n);var s=e.h?Ot(e.h.Va,e.h,e):null;t:{var r=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=i,0>c)i=Math.max(0,r[l].g-100),a=!1;else try{Bv(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,s}function _f(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ms||Uh(),Os||(Ms(),Os=!0),Fa.add(t,e),e.A=0}}function Ga(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=qs(Ot(e.Ma,e),Cf(e,e.A)),e.A++,!0)}b.Ma=function(){if(this.u=null,Tf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=qs(Ot(this.jb,this),e)}};b.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ut(10),_i(this),Tf(this))};function Wa(e){e.B!=null&&(F.clearTimeout(e.B),e.B=null)}function Tf(e){e.g=new Hs(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ie(e.wa);it(t,"RID","rpc"),it(t,"SID",e.K),it(t,"AID",e.V),it(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&it(t,"TO",e.qa),it(t,"TYPE","xmlhttp"),Qs(e,t),e.o&&e.s&&Ha(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=vi(Ie(t)),n.s=null,n.S=!0,Xh(n,e)}b.ib=function(){this.v!=null&&(this.v=null,_i(this),Ga(this),Ut(19))};function Vr(e){e.v!=null&&(F.clearTimeout(e.v),e.v=null)}function If(e,t){var n=null;if(e.g==t){Vr(e),Wa(e),e.g=null;var s=2}else if(Uo(e.i,t))n=t.F,uf(e.i,t),s=1;else return;if(e.H!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;s=pi(),bt(s,new Gh(s,n)),Ti(e)}else _f(e);else if(r=t.o,r==3||r==0&&0<t.ca||!(s==1&&Gv(e,t)||s==2&&Ga(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Je(e,5);break;case 4:Je(e,10);break;case 3:Je(e,6);break;default:Je(e,2)}}}function Cf(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Je(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var s=Ot(e.pb,e);n||(n=new nn("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Fr(n,"https"),vi(n)),Uv(n.toString(),s)}else Ut(2);e.H=0,e.h&&e.h.za(t),bf(e),wf(e)}b.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Ut(2)):(this.l.info("Failed to ping google.com"),Ut(1))};function bf(e){if(e.H=0,e.ma=[],e.h){const t=hf(e.i);(t.length!=0||e.j.length!=0)&&(Tc(e.ma,t),Tc(e.ma,e.j),e.i.i.length=0,Da(e.j),e.j.length=0),e.h.ya()}}function Sf(e,t,n){var s=n instanceof nn?Ie(n):new nn(n);if(s.g!="")t&&(s.g=t+"."+s.g),$r(s,s.m);else{var r=F.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new nn(null);s&&Fr(i,s),t&&(i.g=t),r&&$r(i,r),n&&(i.l=n),s=i}return n=e.F,t=e.Da,n&&t&&it(s,n,t),it(s,"VER",e.ra),Qs(e,s),s}function Af(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new ut(new Gs({ob:!0})):new ut(e.va),t.Oa(e.J),t}b.isActive=function(){return!!this.h&&this.h.isActive(this)};function xf(){}b=xf.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.isActive=function(){return!0};b.Va=function(){};function Br(){if(Fn&&!(10<=Number(ov)))throw Error("Environmental error: no available transport.")}Br.prototype.g=function(e,t){return new Gt(e,t)};function Gt(e,t){Et.call(this),this.g=new vf(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Ds(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ds(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Xn(this)}_t(Gt,Et);Gt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Ut(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Sf(e,null,e.Y),Ti(e)};Gt.prototype.close=function(){Ka(this.g)};Gt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=La(e),e=n);t.j.push(new Lv(t.fb++,e)),t.H==3&&Ti(t)};Gt.prototype.N=function(){this.g.h=null,delete this.j,Ka(this.g),delete this.g,Gt.$.N.call(this)};function Df(e){Ua.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}_t(Df,Ua);function Nf(){ja.call(this),this.status=1}_t(Nf,ja);function Xn(e){this.g=e}_t(Xn,xf);Xn.prototype.Ba=function(){bt(this.g,"a")};Xn.prototype.Aa=function(e){bt(this.g,new Df(e))};Xn.prototype.za=function(e){bt(this.g,new Nf)};Xn.prototype.ya=function(){bt(this.g,"b")};function Wv(){this.blockSize=-1}function ne(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}_t(ne,Wv);ne.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function to(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var r=0;16>r;++r)s[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var i=e.g[3],o=t+(i^n&(r^i))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(i^n&(r^i))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(r^t&(n^r))+s[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=r+(n^i&(t^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(t^r&(i^t))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^i&(n^r))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^i&(n^r))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(t^n))+s[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(i^t))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^i)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^i)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^r)+s[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=r+(i^t^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^t)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~i))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~i))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~r))+s[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=r+(t^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+i&4294967295}ne.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,r=this.h,i=0;i<t;){if(r==0)for(;i<=n;)to(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[r++]=e.charCodeAt(i++),r==this.blockSize){to(this,s),r=0;break}}else for(;i<t;)if(s[r++]=e[i++],r==this.blockSize){to(this,s),r=0;break}}this.h=r,this.i+=t};ne.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function tt(e,t){this.h=t;for(var n=[],s=!0,r=e.length-1;0<=r;r--){var i=e[r]|0;s&&i==t||(n[r]=i,s=!1)}this.g=n}var Qv={};function Qa(e){return-128<=e&&128>e?sv(e,function(t){return new tt([t|0],0>t?-1:0)}):new tt([e|0],0>e?-1:0)}function fe(e){if(isNaN(e)||!isFinite(e))return Sn;if(0>e)return It(fe(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=jo;return new tt(t,0)}function Mf(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return It(Mf(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=fe(Math.pow(t,8)),s=Sn,r=0;r<e.length;r+=8){var i=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+i),t);8>i?(i=fe(Math.pow(t,i)),s=s.R(i).add(fe(o))):(s=s.R(n),s=s.add(fe(o)))}return s}var jo=4294967296,Sn=Qa(0),qo=Qa(1),kc=Qa(16777216);b=tt.prototype;b.ea=function(){if(Wt(this))return-It(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:jo+s)*t,t*=jo}return e};b.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ee(this))return"0";if(Wt(this))return"-"+It(this).toString(e);for(var t=fe(Math.pow(e,6)),n=this,s="";;){var r=jr(n,t).g;n=Ur(n,r.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,Ee(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};b.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Ee(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Wt(e){return e.h==-1}b.X=function(e){return e=Ur(this,e),Wt(e)?-1:Ee(e)?0:1};function It(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new tt(n,~e.h).add(qo)}b.abs=function(){return Wt(this)?It(this):this};b.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,r=0;r<=t;r++){var i=s+(this.D(r)&65535)+(e.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new tt(n,n[n.length-1]&-2147483648?-1:0)};function Ur(e,t){return e.add(It(t))}b.R=function(e){if(Ee(this)||Ee(e))return Sn;if(Wt(this))return Wt(e)?It(this).R(It(e)):It(It(this).R(e));if(Wt(e))return It(this.R(It(e)));if(0>this.X(kc)&&0>e.X(kc))return fe(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<e.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(r)>>>16,l=e.D(r)&65535;n[2*s+2*r]+=o*l,pr(n,2*s+2*r),n[2*s+2*r+1]+=i*l,pr(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,pr(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,pr(n,2*s+2*r+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new tt(n,0)};function pr(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function os(e,t){this.g=e,this.h=t}function jr(e,t){if(Ee(t))throw Error("division by zero");if(Ee(e))return new os(Sn,Sn);if(Wt(e))return t=jr(It(e),t),new os(It(t.g),It(t.h));if(Wt(t))return t=jr(e,It(t)),new os(It(t.g),t.h);if(30<e.g.length){if(Wt(e)||Wt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=qo,s=t;0>=s.X(e);)n=Rc(n),s=Rc(s);var r=gn(n,1),i=gn(s,1);for(s=gn(s,2),n=gn(n,2);!Ee(s);){var o=i.add(s);0>=o.X(e)&&(r=r.add(n),i=o),s=gn(s,1),n=gn(n,1)}return t=Ur(e,r.R(t)),new os(r,t)}for(r=Sn;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=fe(n),o=i.R(t);Wt(o)||0<o.X(e);)n-=s,i=fe(n),o=i.R(t);Ee(i)&&(i=qo),r=r.add(i),e=Ur(e,o)}return new os(r,e)}b.gb=function(e){return jr(this,e).h};b.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new tt(n,this.h&e.h)};b.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new tt(n,this.h|e.h)};b.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new tt(n,this.h^e.h)};function Rc(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new tt(n,e.h)}function gn(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,r=[],i=0;i<s;i++)r[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new tt(r,e.h)}Br.prototype.createWebChannel=Br.prototype.g;Gt.prototype.send=Gt.prototype.u;Gt.prototype.open=Gt.prototype.m;Gt.prototype.close=Gt.prototype.close;gi.NO_ERROR=0;gi.TIMEOUT=8;gi.HTTP_ERROR=6;Wh.COMPLETE="complete";Qh.EventType=zs;zs.OPEN="a";zs.CLOSE="b";zs.ERROR="c";zs.MESSAGE="d";Et.prototype.listen=Et.prototype.O;ut.prototype.listenOnce=ut.prototype.P;ut.prototype.getLastError=ut.prototype.Sa;ut.prototype.getLastErrorCode=ut.prototype.Ia;ut.prototype.getStatus=ut.prototype.da;ut.prototype.getResponseJson=ut.prototype.Wa;ut.prototype.getResponseText=ut.prototype.ja;ut.prototype.send=ut.prototype.ha;ut.prototype.setWithCredentials=ut.prototype.Oa;ne.prototype.digest=ne.prototype.l;ne.prototype.reset=ne.prototype.reset;ne.prototype.update=ne.prototype.j;tt.prototype.add=tt.prototype.add;tt.prototype.multiply=tt.prototype.R;tt.prototype.modulo=tt.prototype.gb;tt.prototype.compare=tt.prototype.X;tt.prototype.toNumber=tt.prototype.ea;tt.prototype.toString=tt.prototype.toString;tt.prototype.getBits=tt.prototype.D;tt.fromNumber=fe;tt.fromString=Mf;var Yv=function(){return new Br},Xv=function(){return pi()},eo=gi,Jv=Wh,Zv=cn,Pc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},t0=Gs,gr=Qh,e0=ut,n0=ne,An=tt;const Lc="@firebase/firestore";/**
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
 */class xt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
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
 */let Jn="9.22.2";/**
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
 */const on=new Ih("@firebase/firestore");function Fc(){return on.logLevel}function N(e,...t){if(on.logLevel<=Y.DEBUG){const n=t.map(Ya);on.debug(`Firestore (${Jn}): ${e}`,...n)}}function Ce(e,...t){if(on.logLevel<=Y.ERROR){const n=t.map(Ya);on.error(`Firestore (${Jn}): ${e}`,...n)}}function $n(e,...t){if(on.logLevel<=Y.WARN){const n=t.map(Ya);on.warn(`Firestore (${Jn}): ${e}`,...n)}}function Ya(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function U(e="Unexpected state"){const t=`FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: `+e;throw Ce(t),new Error(t)}function mt(e,t){e||U()}function G(e,t){return e}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Qn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Of{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class s0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}}class r0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class i0{constructor(t){this.t=t,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xn,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(mt(typeof s.accessToken=="string"),new Of(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return mt(t===null||typeof t=="string"),new xt(t)}}class o0{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class a0{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new o0(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class l0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c0{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(mt(typeof n.token=="string"),this.T=n.token,new l0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function u0(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class h0{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=u0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function X(e,t){return e<t?-1:e>t?1:0}function Vn(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class wt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return wt.fromMillis(Date.now())}static fromDate(t){return wt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new wt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?X(this.nanoseconds,t.nanoseconds):X(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(t){this.timestamp=t}static fromTimestamp(t){return new B(t)}static min(){return new B(new wt(0,0))}static max(){return new B(new wt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Fs{constructor(t,n,s){n===void 0?n=0:n>t.length&&U(),s===void 0?s=t.length-n:s>t.length-n&&U(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Fs.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Fs?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class at extends Fs{construct(t,n,s){return new at(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new x(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new at(n)}static emptyPath(){return new at([])}}const f0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends Fs{construct(t,n,s){return new Vt(t,n,s)}static isValidIdentifier(t){return f0.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Vt(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new x(_.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new x(_.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Vt(n)}static emptyPath(){return new Vt([])}}/**
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
 */class P{constructor(t){this.path=t}static fromPath(t){return new P(at.fromString(t))}static fromName(t){return new P(at.fromString(t).popFirst(5))}static empty(){return new P(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&at.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return at.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new P(new at(t.slice()))}}function d0(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=B.fromTimestamp(s===1e9?new wt(n+1,0):new wt(n,s));return new Le(r,P.empty(),t)}function p0(e){return new Le(e.readTime,e.key,-1)}class Le{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Le(B.min(),P.empty(),-1)}static max(){return new Le(B.max(),P.empty(),-1)}}function g0(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=P.comparator(e.documentKey,t.documentKey),n!==0?n:X(e.largestBatchId,t.largestBatchId))}/**
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
 */const m0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class y0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Xa(e){if(e.code!==_.FAILED_PRECONDITION||e.message!==m0)throw e;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class E{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new E((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):E.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):E.reject(n)}static resolve(t){return new E((n,s)=>{n(t)})}static reject(t){return new E((n,s)=>{s(t)})}static waitFor(t){return new E((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(t){let n=E.resolve(!1);for(const s of t)n=n.next(r=>r?E.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new E((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(t,n){return new E((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function Ys(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Ja{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}Ja.ct=-1;function Ii(e){return e==null}function qr(e){return e===0&&1/e==-1/0}function v0(e){return typeof e=="number"&&Number.isInteger(e)&&!qr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function $c(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Xs(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function kf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class ht{constructor(t,n){this.comparator=t,this.root=n||Tt.EMPTY}insert(t,n){return new ht(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(t){return new ht(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new mr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new mr(this.root,t,this.comparator,!1)}getReverseIterator(){return new mr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new mr(this.root,t,this.comparator,!0)}}class mr{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Tt{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??Tt.RED,this.left=r??Tt.EMPTY,this.right=i??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new Tt(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return Tt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const t=this.left.check();if(t!==this.right.check())throw U();return t+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,n,s,r){return this}insert(e,t,n){return new Tt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Rt{constructor(t){this.comparator=t,this.data=new ht(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vc(this.data.getIterator())}getIteratorFrom(t){return new Vc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Rt)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Rt(this.comparator);return n.data=t,n}}class Vc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class De{constructor(t){this.fields=t,t.sort(Vt.comparator)}static empty(){return new De([])}unionWith(t){let n=new Rt(Vt.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new De(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Vn(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Rf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Rf("Invalid base64 string: "+r):r}}(t);return new Pt(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new Pt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return X(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const w0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fe(e){if(mt(!!e),typeof e=="string"){let t=0;const n=w0.exec(e);if(mt(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:pt(e.seconds),nanos:pt(e.nanos)}}function pt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function an(e){return typeof e=="string"?Pt.fromBase64String(e):Pt.fromUint8Array(e)}/**
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
 */function Za(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tl(e){const t=e.mapValue.fields.__previous_value__;return Za(t)?tl(t):t}function $s(e){const t=Fe(e.mapValue.fields.__local_write_time__.timestampValue);return new wt(t.seconds,t.nanos)}/**
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
 */class E0{constructor(t,n,s,r,i,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Vs{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Vs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Vs&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ln(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Za(e)?4:_0(e)?9007199254740991:10:U()}function pe(e,t){if(e===t)return!0;const n=ln(e);if(n!==ln(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return $s(e).isEqual($s(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Fe(s.timestampValue),o=Fe(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return an(s.bytesValue).isEqual(an(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return pt(s.geoPointValue.latitude)===pt(r.geoPointValue.latitude)&&pt(s.geoPointValue.longitude)===pt(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return pt(s.integerValue)===pt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=pt(s.doubleValue),o=pt(r.doubleValue);return i===o?qr(i)===qr(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Vn(e.arrayValue.values||[],t.arrayValue.values||[],pe);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if($c(i)!==$c(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!pe(i[a],o[a])))return!1;return!0}(e,t);default:return U()}}function Bs(e,t){return(e.values||[]).find(n=>pe(n,t))!==void 0}function Bn(e,t){if(e===t)return 0;const n=ln(e),s=ln(t);if(n!==s)return X(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=pt(r.integerValue||r.doubleValue),a=pt(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Bc(e.timestampValue,t.timestampValue);case 4:return Bc($s(e),$s(t));case 5:return X(e.stringValue,t.stringValue);case 6:return function(r,i){const o=an(r),a=an(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=X(o[l],a[l]);if(c!==0)return c}return X(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=X(pt(r.latitude),pt(i.latitude));return o!==0?o:X(pt(r.longitude),pt(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Bn(o[l],a[l]);if(c)return c}return X(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===yr.mapValue&&i===yr.mapValue)return 0;if(r===yr.mapValue)return 1;if(i===yr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const f=X(a[u],c[u]);if(f!==0)return f;const p=Bn(o[a[u]],l[c[u]]);if(p!==0)return p}return X(a.length,c.length)}(e.mapValue,t.mapValue);default:throw U()}}function Bc(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return X(e,t);const n=Fe(e),s=Fe(t),r=X(n.seconds,s.seconds);return r!==0?r:X(n.nanos,s.nanos)}function Un(e){return zo(e)}function zo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Fe(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?an(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,P.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=zo(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${zo(s.fields[a])}`;return i+"}"}(e.mapValue):U();var t,n}function Uc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ho(e){return!!e&&"integerValue"in e}function el(e){return!!e&&"arrayValue"in e}function jc(e){return!!e&&"nullValue"in e}function qc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function no(e){return!!e&&"mapValue"in e}function vs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Xs(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=vs(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=vs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function _0(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ue{constructor(t){this.value=t}static empty(){return new ue({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!no(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=vs(n)}setAll(t){let n=Vt.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=vs(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());no(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return pe(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];no(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Xs(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new ue(vs(this.value))}}/**
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
 */class Dt{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Dt(t,0,B.min(),B.min(),B.min(),ue.empty(),0)}static newFoundDocument(t,n,s,r){return new Dt(t,1,n,B.min(),s,r,0)}static newNoDocument(t,n){return new Dt(t,2,n,B.min(),B.min(),ue.empty(),0)}static newUnknownDocument(t,n){return new Dt(t,3,n,B.min(),B.min(),ue.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Dt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zr{constructor(t,n){this.position=t,this.inclusive=n}}function zc(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=P.comparator(P.fromName(o.referenceValue),n.key):s=Bn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Hc(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!pe(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Dn{constructor(t,n="asc"){this.field=t,this.dir=n}}function T0(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Pf{}class gt extends Pf{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new C0(t,n,s):n==="array-contains"?new A0(t,s):n==="in"?new x0(t,s):n==="not-in"?new D0(t,s):n==="array-contains-any"?new N0(t,s):new gt(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new b0(t,s):new S0(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Bn(n,this.value)):n!==null&&ln(this.value)===ln(n)&&this.matchesComparison(Bn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class se extends Pf{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new se(t,n)}matches(t){return Lf(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Lf(e){return e.op==="and"}function Ff(e){return I0(e)&&Lf(e)}function I0(e){for(const t of e.filters)if(t instanceof se)return!1;return!0}function Ko(e){if(e instanceof gt)return e.field.canonicalString()+e.op.toString()+Un(e.value);if(Ff(e))return e.filters.map(t=>Ko(t)).join(",");{const t=e.filters.map(n=>Ko(n)).join(",");return`${e.op}(${t})`}}function $f(e,t){return e instanceof gt?function(n,s){return s instanceof gt&&n.op===s.op&&n.field.isEqual(s.field)&&pe(n.value,s.value)}(e,t):e instanceof se?function(n,s){return s instanceof se&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&$f(i,s.filters[o]),!0):!1}(e,t):void U()}function Vf(e){return e instanceof gt?function(t){return`${t.field.canonicalString()} ${t.op} ${Un(t.value)}`}(e):e instanceof se?function(t){return t.op.toString()+" {"+t.getFilters().map(Vf).join(" ,")+"}"}(e):"Filter"}class C0 extends gt{constructor(t,n,s){super(t,n,s),this.key=P.fromName(s.referenceValue)}matches(t){const n=P.comparator(t.key,this.key);return this.matchesComparison(n)}}class b0 extends gt{constructor(t,n){super(t,"in",n),this.keys=Bf("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class S0 extends gt{constructor(t,n){super(t,"not-in",n),this.keys=Bf("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Bf(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>P.fromName(s.referenceValue))}class A0 extends gt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return el(n)&&Bs(n.arrayValue,this.value)}}class x0 extends gt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Bs(this.value.arrayValue,n)}}class D0 extends gt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Bs(this.value.arrayValue,n)}}class N0 extends gt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!el(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Bs(this.value.arrayValue,s))}}/**
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
 */class M0{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Kc(e,t=null,n=[],s=[],r=null,i=null,o=null){return new M0(e,t,n,s,r,i,o)}function nl(e){const t=G(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Ko(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ii(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Un(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Un(s)).join(",")),t.dt=n}return t.dt}function sl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!T0(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!$f(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Hc(e.startAt,t.startAt)&&Hc(e.endAt,t.endAt)}function Go(e){return P.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Zn{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function O0(e,t,n,s,r,i,o,a){return new Zn(e,t,n,s,r,i,o,a)}function rl(e){return new Zn(e)}function Gc(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function il(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ci(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Uf(e){return e.collectionGroup!==null}function Nn(e){const t=G(e);if(t.wt===null){t.wt=[];const n=Ci(t),s=il(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new Dn(n)),t.wt.push(new Dn(Vt.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Dn(Vt.keyField(),i))}}}return t.wt}function be(e){const t=G(e);if(!t._t)if(t.limitType==="F")t._t=Kc(t.path,t.collectionGroup,Nn(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Nn(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Dn(i.field,o))}const s=t.endAt?new zr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zr(t.startAt.position,t.startAt.inclusive):null;t._t=Kc(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function Wo(e,t){t.getFirstInequalityField(),Ci(e);const n=e.filters.concat([t]);return new Zn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Qo(e,t,n){return new Zn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function bi(e,t){return sl(be(e),be(t))&&e.limitType===t.limitType}function jf(e){return`${nl(be(e))}|lt:${e.limitType}`}function Yo(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Vf(s)).join(", ")}]`),Ii(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Un(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Un(s)).join(",")),`Target(${n})`}(be(e))}; limitType=${e.limitType})`}function Si(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):P.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Nn(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=zc(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Nn(n),s)||n.endAt&&!function(r,i,o){const a=zc(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Nn(n),s))}(e,t)}function k0(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function qf(e){return(t,n)=>{let s=!1;for(const r of Nn(e)){const i=R0(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function R0(e,t,n){const s=e.field.isKeyField()?P.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?Bn(a,l):U()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return U()}}/**
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
 */class ts{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Xs(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return kf(this.inner)}size(){return this.innerSize}}/**
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
 */const P0=new ht(P.comparator);function $e(){return P0}const zf=new ht(P.comparator);function hs(...e){let t=zf;for(const n of e)t=t.insert(n.key,n);return t}function L0(e){let t=zf;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Ze(){return ws()}function Hf(){return ws()}function ws(){return new ts(e=>e.toString(),(e,t)=>e.isEqual(t))}const F0=new Rt(P.comparator);function K(...e){let t=F0;for(const n of e)t=t.add(n);return t}const $0=new Rt(X);function V0(){return $0}/**
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
 */function Kf(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qr(t)?"-0":t}}function Gf(e){return{integerValue:""+e}}function B0(e,t){return v0(t)?Gf(t):Kf(e,t)}/**
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
 */class Ai{constructor(){this._=void 0}}function U0(e,t,n){return e instanceof Xo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Za(r)&&(r=tl(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Hr?Wf(e,t):e instanceof Kr?Qf(e,t):function(s,r){const i=q0(s,r),o=Wc(i)+Wc(s.gt);return Ho(i)&&Ho(s.gt)?Gf(o):Kf(s.serializer,o)}(e,t)}function j0(e,t,n){return e instanceof Hr?Wf(e,t):e instanceof Kr?Qf(e,t):n}function q0(e,t){return e instanceof Jo?Ho(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Xo extends Ai{}class Hr extends Ai{constructor(t){super(),this.elements=t}}function Wf(e,t){const n=Yf(t);for(const s of e.elements)n.some(r=>pe(r,s))||n.push(s);return{arrayValue:{values:n}}}class Kr extends Ai{constructor(t){super(),this.elements=t}}function Qf(e,t){let n=Yf(t);for(const s of e.elements)n=n.filter(r=>!pe(r,s));return{arrayValue:{values:n}}}class Jo extends Ai{constructor(t,n){super(),this.serializer=t,this.gt=n}}function Wc(e){return pt(e.integerValue||e.doubleValue)}function Yf(e){return el(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function z0(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Hr&&s instanceof Hr||n instanceof Kr&&s instanceof Kr?Vn(n.elements,s.elements,pe):n instanceof Jo&&s instanceof Jo?pe(n.gt,s.gt):n instanceof Xo&&s instanceof Xo}(e.transform,t.transform)}class sn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new sn}static exists(t){return new sn(void 0,t)}static updateTime(t){return new sn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Cr(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ol{}function Xf(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new K0(e.key,sn.none()):new al(e.key,e.data,sn.none());{const n=e.data,s=ue.empty();let r=new Rt(Vt.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new xi(e.key,s,new De(r.toArray()),sn.none())}}function H0(e,t,n){e instanceof al?function(s,r,i){const o=s.value.clone(),a=Yc(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof xi?function(s,r,i){if(!Cr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Yc(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Jf(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Es(e,t,n,s){return e instanceof al?function(r,i,o,a){if(!Cr(r.precondition,i))return o;const l=r.value.clone(),c=Xc(r.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(e,t,n,s):e instanceof xi?function(r,i,o,a){if(!Cr(r.precondition,i))return o;const l=Xc(r.fieldTransforms,a,i),c=i.data;return c.setAll(Jf(r)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(e,t,n,s):function(r,i,o){return Cr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Qc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Vn(n,s,(r,i)=>z0(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class al extends ol{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class xi extends ol{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jf(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Yc(e,t,n){const s=new Map;mt(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,j0(o,a,n[r]))}return s}function Xc(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,U0(i,o,t))}return s}class K0 extends ol{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class G0{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&H0(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Es(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Es(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Hf();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=Xf(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),K())}isEqual(t){return this.batchId===t.batchId&&Vn(this.mutations,t.mutations,(n,s)=>Qc(n,s))&&Vn(this.baseMutations,t.baseMutations,(n,s)=>Qc(n,s))}}/**
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
 */class W0{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Q0{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var dt,z;function Zf(e){if(e===void 0)return Ce("GRPC error has no .code"),_.UNKNOWN;switch(e){case dt.OK:return _.OK;case dt.CANCELLED:return _.CANCELLED;case dt.UNKNOWN:return _.UNKNOWN;case dt.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case dt.INTERNAL:return _.INTERNAL;case dt.UNAVAILABLE:return _.UNAVAILABLE;case dt.UNAUTHENTICATED:return _.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case dt.NOT_FOUND:return _.NOT_FOUND;case dt.ALREADY_EXISTS:return _.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return _.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case dt.ABORTED:return _.ABORTED;case dt.OUT_OF_RANGE:return _.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return _.UNIMPLEMENTED;case dt.DATA_LOSS:return _.DATA_LOSS;default:return U()}}(z=dt||(dt={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ll{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return vr}static getOrCreateInstance(){return vr===null&&(vr=new ll),vr}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let vr=null;/**
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
 */function Y0(){return new TextEncoder}/**
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
 */const X0=new An([4294967295,4294967295],0);function Jc(e){const t=Y0().encode(e),n=new n0;return n.update(t),new Uint8Array(n.digest())}function Zc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new An([n,s],0),new An([r,i],0)]}class cl{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new fs(`Invalid padding: ${n}`);if(s<0)throw new fs(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new fs(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new fs(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*t.length-n,this.Tt=An.fromNumber(this.It)}Et(t,n,s){let r=t.add(n.multiply(An.fromNumber(s)));return r.compare(X0)===1&&(r=new An([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}vt(t){if(this.It===0)return!1;const n=Jc(t),[s,r]=Zc(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(t,n,s){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new cl(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.It===0)return;const n=Jc(t),[s,r]=Zc(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Di{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,Js.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Di(B.min(),r,new ht(X),$e(),K())}}class Js{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Js(s,n,K(),K(),K())}}/**
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
 */class br{constructor(t,n,s,r){this.Pt=t,this.removedTargetIds=n,this.key=s,this.bt=r}}class td{constructor(t,n){this.targetId=t,this.Vt=n}}class ed{constructor(t,n,s=Pt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class tu{constructor(){this.St=0,this.Dt=nu(),this.Ct=Pt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=K(),n=K(),s=K();return this.Dt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:U()}}),new Js(this.Ct,this.xt,t,n,s)}Ft(){this.Nt=!1,this.Dt=nu()}Bt(t,n){this.Nt=!0,this.Dt=this.Dt.insert(t,n)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class J0{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=$e(),this.zt=eu(),this.Wt=new ht(X)}Ht(t){for(const n of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(n,t.bt):this.Yt(n,t.key,t.bt);for(const n of t.removedTargetIds)this.Yt(n,t.key,t.bt)}Xt(t){this.forEachTarget(t,n=>{const s=this.Zt(n);switch(t.state){case 0:this.te(n)&&s.$t(t.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(t.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(t.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(t.resumeToken));break;default:U()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(t){var n;const s=t.targetId,r=t.Vt.count,i=this.se(s);if(i){const o=i.target;if(Go(o))if(r===0){const a=new P(o.path);this.Yt(s,a,Dt.newNoDocument(a,B.min()))}else mt(r===1);else{const a=this.ie(s);if(a!==r){const l=this.re(t,a);if(l!==0){this.ee(s);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,c)}(n=ll.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,f){var p,m,M,A,O,J;const W={localCacheCount:u,existenceFilterCount:f.count},Q=f.unchangedNames;return Q&&(W.bloomFilter={applied:c===0,hashCount:(p=Q==null?void 0:Q.hashCount)!==null&&p!==void 0?p:0,bitmapLength:(A=(M=(m=Q==null?void 0:Q.bits)===null||m===void 0?void 0:m.bitmap)===null||M===void 0?void 0:M.length)!==null&&A!==void 0?A:0,padding:(J=(O=Q==null?void 0:Q.bits)===null||O===void 0?void 0:O.padding)!==null&&J!==void 0?J:0}),W}(l,a,t.Vt))}}}}re(t,n){const{unchangedNames:s,count:r}=t.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=an(i).toUint8Array()}catch(u){if(u instanceof Rf)return $n("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new cl(l,o,a)}catch(u){return $n(u instanceof fs?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.It===0?1:r!==n-this.oe(t.targetId,c)?2:0}oe(t,n){const s=this.Gt.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(t,i,null),r++)}),r}ce(t){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Go(a.target)){const l=new P(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Dt.newNoDocument(l,t))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=K();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.se(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(t));const r=new Di(t,n,this.Wt,this.jt,s);return this.jt=$e(),this.zt=eu(),this.Wt=new ht(X),r}Jt(t,n){if(!this.te(t))return;const s=this.ae(t,n.key)?2:0;this.Zt(t).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(t))}Yt(t,n,s){if(!this.te(t))return;const r=this.Zt(t);this.ae(t,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(t)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(t){this.Qt.delete(t)}ie(t){const n=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let n=this.Qt.get(t);return n||(n=new tu,this.Qt.set(t,n)),n}he(t){let n=this.zt.get(t);return n||(n=new Rt(X),this.zt=this.zt.insert(t,n)),n}te(t){const n=this.se(t)!==null;return n||N("WatchChangeAggregator","Detected inactive target",t),n}se(t){const n=this.Qt.get(t);return n&&n.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new tu),this.Gt.getRemoteKeysForTarget(t).forEach(n=>{this.Yt(t,n,null)})}ae(t,n){return this.Gt.getRemoteKeysForTarget(t).has(n)}}function eu(){return new ht(P.comparator)}function nu(){return new ht(P.comparator)}const Z0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),tw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ew=(()=>({and:"AND",or:"OR"}))();class nw{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Zo(e,t){return e.useProto3Json||Ii(t)?t:{value:t}}function ta(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nd(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Mn(e){return mt(!!e),B.fromTimestamp(function(t){const n=Fe(t);return new wt(n.seconds,n.nanos)}(e))}function sd(e,t){return function(n){return new at(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function rd(e){const t=at.fromString(e);return mt(ld(t)),t}function so(e,t){const n=rd(t);if(n.get(1)!==e.databaseId.projectId)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new P(id(n))}function ea(e,t){return sd(e.databaseId,t)}function sw(e){const t=rd(e);return t.length===4?at.emptyPath():id(t)}function su(e){return new at(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function id(e){return mt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function rw(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:U()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(l,c){return l.useProto3Json?(mt(c===void 0||typeof c=="string"),Pt.fromBase64String(c||"")):(mt(c===void 0||c instanceof Uint8Array),Pt.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const c=l.code===void 0?_.UNKNOWN:Zf(l.code);return new x(c,l.message||"")}(o);n=new ed(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=so(e,s.document.name),i=Mn(s.document.updateTime),o=s.document.createTime?Mn(s.document.createTime):B.min(),a=new ue({mapValue:{fields:s.document.fields}}),l=Dt.newFoundDocument(r,i,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new br(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=so(e,s.document),i=s.readTime?Mn(s.readTime):B.min(),o=Dt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new br([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=so(e,s.document),i=s.removedTargetIds||[];n=new br([],i,r,null)}else{if(!("filter"in t))return U();{t.filter;const s=t.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new Q0(r,i),a=s.targetId;n=new td(a,o)}}return n}function iw(e,t){return{documents:[ea(e,t.path)]}}function ow(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ea(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ea(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return ad(se.create(l,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:vn(u.field),direction:cw(u.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Zo(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function aw(e){let t=sw(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){mt(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(u){const f=od(u);return f instanceof se&&Ff(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Dn(wn(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Ii(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(u){const f=!!u.before,p=u.values||[];return new zr(p,f)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const f=!u.before,p=u.values||[];return new zr(p,f)}(n.endAt)),O0(t,r,o,i,a,"F",l,c)}function lw(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function od(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=wn(t.unaryFilter.field);return gt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=wn(t.unaryFilter.field);return gt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=wn(t.unaryFilter.field);return gt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=wn(t.unaryFilter.field);return gt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(e):e.fieldFilter!==void 0?function(t){return gt.create(wn(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return se.create(t.compositeFilter.filters.map(n=>od(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(t.compositeFilter.op))}(e):U()}function cw(e){return Z0[e]}function uw(e){return tw[e]}function hw(e){return ew[e]}function vn(e){return{fieldPath:e.canonicalString()}}function wn(e){return Vt.fromServerFormat(e.fieldPath)}function ad(e){return e instanceof gt?function(t){if(t.op==="=="){if(qc(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NAN"}};if(jc(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(qc(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NAN"}};if(jc(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vn(t.field),op:uw(t.op),value:t.value}}}(e):e instanceof se?function(t){const n=t.getFilters().map(s=>ad(s));return n.length===1?n[0]:{compositeFilter:{op:hw(t.op),filters:n}}}(e):U()}function ld(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Ne{constructor(t,n,s,r,i=B.min(),o=B.min(),a=Pt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Ne(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ne(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ne(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ne(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class fw{constructor(t){this.fe=t}}function dw(e){const t=aw({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Qo(t,t.limit,"L"):t}/**
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
 */class pw{constructor(){this.rn=new gw}addToCollectionParentIndex(t,n){return this.rn.add(n),E.resolve()}getCollectionParents(t,n){return E.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return E.resolve()}deleteFieldIndex(t,n){return E.resolve()}getDocumentsMatchingTarget(t,n){return E.resolve(null)}getIndexType(t,n){return E.resolve(0)}getFieldIndexes(t,n){return E.resolve([])}getNextCollectionGroupToUpdate(t){return E.resolve(null)}getMinOffset(t,n){return E.resolve(Le.min())}getMinOffsetFromCollectionGroup(t,n){return E.resolve(Le.min())}updateCollectionGroup(t,n,s){return E.resolve()}updateIndexEntries(t,n){return E.resolve()}}class gw{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new Rt(at.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new Rt(at.comparator)).toArray()}}/**
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
 */class jn{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new jn(0)}static Mn(){return new jn(-1)}}/**
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
 */class mw{constructor(){this.changes=new ts(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Dt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class yw{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class vw{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Es(s.mutation,r,De.empty(),wt.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,K()).next(()=>s))}getLocalViewOfDocuments(t,n,s=K()){const r=Ze();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=hs();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Ze();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,K()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=$e();const o=ws(),a=ws();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof xi)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Es(u.mutation,c,u.mutation.getFieldMask(),wt.now())):o.set(c.key,De.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var f;return a.set(c,new yw(u,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const s=ws();let r=new ht((o,a)=>o-a),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||De.empty();u=a.applyToLocalView(c,u),s.set(l,u);const f=(r.get(a.batchId)||K()).add(l);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,f=Hf();u.forEach(p=>{if(!i.has(p)){const m=Xf(n.get(p),s.get(p));m!==null&&f.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,f))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return P.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Uf(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):E.resolve(Ze());let a=-1,l=i;return o.next(c=>E.forEach(c,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?E.resolve():this.remoteDocumentCache.getEntry(t,u).next(p=>{l=l.insert(u,p)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,l,c,K())).next(u=>({batchId:a,changes:L0(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new P(n)).next(s=>{let r=hs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=hs();return this.indexManager.getCollectionParents(t,r).next(o=>E.forEach(o,a=>{const l=function(c,u){return new Zn(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,s).next(c=>{c.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,Dt.newInvalidDocument(c)))});let o=hs();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Es(c.mutation,l,De.empty(),wt.now()),Si(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class ww{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return E.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Mn(s.createTime)}),E.resolve()}getNamedQuery(t,n){return E.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(s){return{name:s.name,query:dw(s.bundledQuery),readTime:Mn(s.readTime)}}(n)),E.resolve()}}/**
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
 */class Ew{constructor(){this.overlays=new ht(P.comparator),this.ls=new Map}getOverlay(t,n){return E.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ze();return E.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.we(t,n,i)}),E.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),E.resolve()}getOverlaysForCollection(t,n,s){const r=Ze(),i=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return E.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new ht((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=Ze(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ze(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return E.resolve(a)}we(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new W0(n,s));let i=this.ls.get(n);i===void 0&&(i=K(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class ul{constructor(){this.fs=new Rt(vt.ds),this.ws=new Rt(vt._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const s=new vt(t,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ys(new vt(t,n))}ps(t,n){t.forEach(s=>this.removeReference(s,n))}Is(t){const n=new P(new at([])),s=new vt(n,t),r=new vt(n,t+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new P(new at([])),s=new vt(n,t),r=new vt(n,t+1);let i=K();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new vt(t,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class vt{constructor(t,n){this.key=t,this.As=n}static ds(t,n){return P.comparator(t.key,n.key)||X(t.As,n.As)}static _s(t,n){return X(t.As,n.As)||P.comparator(t.key,n.key)}}/**
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
 */class _w{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Rt(vt.ds)}checkEmpty(t){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new G0(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new vt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(t,n){return E.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new vt(n,0),r=new vt(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Rt(X);return n.forEach(r=>{const i=new vt(r,0),o=new vt(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),E.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;P.isDocumentKey(i)||(i=i.child(""));const o=new vt(new P(i),0);let a=new Rt(X);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.As)),!0)},o),E.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){mt(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return E.forEach(n.mutations,r=>{const i=new vt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Rs=s})}Cn(t){}containsKey(t,n){const s=new vt(n,0),r=this.Rs.firstAfterOrEqual(s);return E.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,E.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Tw{constructor(t){this.Ds=t,this.docs=new ht(P.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(t,n){let s=$e();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Dt.newInvalidDocument(r))}),E.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=$e();const o=n.path,a=new P(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||g0(p0(u),s)<=0||(r.has(u.key)||Si(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(t,n,s,r){U()}Cs(t,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Iw(this)}getSize(t){return E.resolve(this.size)}}class Iw extends mw{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(t,r)):this.os.removeEntry(s)}),E.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
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
 */class Cw{constructor(t){this.persistence=t,this.xs=new ts(n=>nl(n),sl),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ul,this.targetCount=0,this.Ms=jn.kn()}forEachTarget(t,n){return this.xs.forEach((s,r)=>n(r)),E.resolve()}getLastRemoteSnapshotVersion(t){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return E.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),E.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new jn(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,E.resolve()}updateTargetData(t,n){return this.Fn(n),E.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),E.waitFor(i).next(()=>r)}getTargetCount(t){return E.resolve(this.targetCount)}getTargetData(t,n){const s=this.xs.get(n)||null;return E.resolve(s)}addMatchingKeys(t,n,s){return this.ks.gs(n,s),E.resolve()}removeMatchingKeys(t,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),E.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ks.Es(n);return E.resolve(s)}containsKey(t,n){return E.resolve(this.ks.containsKey(n))}}/**
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
 */class bw{constructor(t,n){this.$s={},this.overlays={},this.Os=new Ja(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Cw(this),this.indexManager=new pw,this.remoteDocumentCache=function(s){return new Tw(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new fw(n),this.qs=new ww(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Ew,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.$s[t.toKey()];return s||(s=new _w(n,this.referenceDelegate),this.$s[t.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,s){N("MemoryPersistence","Starting transaction:",t);const r=new Sw(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(t,n){return E.or(Object.values(this.$s).map(s=>()=>s.containsKey(t,n)))}}class Sw extends y0{constructor(t){super(),this.currentSequenceNumber=t}}class hl{constructor(t){this.persistence=t,this.Qs=new ul,this.js=null}static zs(t){return new hl(t)}get Ws(){if(this.js)return this.js;throw U()}addReference(t,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),E.resolve()}removeReference(t,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),E.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),E.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ws,s=>{const r=P.fromPath(s);return this.Hs(t,r).next(i=>{i||n.removeEntry(r,B.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return E.or([()=>E.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
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
 */class fl{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(t,n){let s=K(),r=K();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new fl(t,n.fromCache,s,r)}}/**
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
 */class Aw{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ki(t,n).next(i=>i||this.Gi(t,n,r,s)).next(i=>i||this.Qi(t,n))}Ki(t,n){if(Gc(n))return E.resolve(null);let s=be(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Qo(n,null,"F"),s=be(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=K(...i);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(t,Qo(n,null,"F")):this.Wi(t,c,n,l)}))})))}Gi(t,n,s,r){return Gc(n)||r.isEqual(B.min())?this.Qi(t,n):this.Ui.getDocuments(t,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(t,n):(Fc()<=Y.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Yo(n)),this.Wi(t,o,n,d0(r,-1)))})}ji(t,n){let s=new Rt(qf(t));return n.forEach((r,i)=>{Si(t,i)&&(s=s.add(i))}),s}zi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(t,n){return Fc()<=Y.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Yo(n)),this.Ui.getDocumentsMatchingQuery(t,n,Le.min())}Wi(t,n,s,r){return this.Ui.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class xw{constructor(t,n,s,r){this.persistence=t,this.Hi=n,this.serializer=r,this.Ji=new ht(X),this.Yi=new ts(i=>nl(i),sl),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(s)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vw(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function Dw(e,t,n,s){return new xw(e,t,n,s)}async function cd(e,t){const n=G(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=K();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function ud(e){const t=G(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function Nw(e,t){const n=G(e),s=t.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];t.targetChanges.forEach((u,f)=>{const p=r.get(f);if(!p)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,f)));let m=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(f)!==null?m=m.withResumeToken(Pt.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(f,m),function(M,A,O){return M.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,m,u)&&a.push(n.Bs.updateTargetData(i,m))});let l=$e(),c=K();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Mw(i,o,t.documentUpdates).next(u=>{l=u.nr,c=u.sr})),!s.isEqual(B.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(f=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Ji=r,i))}function Mw(e,t,n){let s=K(),r=K();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=$e();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{nr:o,sr:r}})}function Ow(e,t){const n=G(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,t).next(i=>i?(r=i,E.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new Ne(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(t,s.targetId)),s})}async function na(e,t,n){const s=G(e),r=s.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ys(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(r.target)}function ru(e,t,n){const s=G(e);let r=B.min(),i=K();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=G(a),f=u.Yi.get(c);return f!==void 0?E.resolve(u.Ji.get(f)):u.Bs.getTargetData(l,c)}(s,o,be(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,t,n?r:B.min(),n?i:K())).next(a=>(kw(s,k0(t),a),{documents:a,ir:i})))}function kw(e,t,n){let s=e.Xi.get(t)||B.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Xi.set(t,s)}class iu{constructor(){this.activeTargetIds=V0()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Rw{constructor(){this.Hr=new iu,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,s){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new iu,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Pw{Yr(t){}shutdown(){}}/**
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
 */class ou{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wr=null;function ro(){return wr===null?wr=268435456+Math.round(2147483648*Math.random()):wr++,"0x"+wr.toString(16)}/**
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
 */const Lw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Fw{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
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
 */const At="WebChannelConnection";class $w extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,s,r,i){const o=ro(),a=this.To(t,n);N("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const l={};return this.Eo(l,r,i),this.Ao(t,a,l,s).then(c=>(N("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw $n("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(t,n,s,r,i,o){return this.Io(t,n,s,r,i)}Eo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Jn,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}To(t,n){const s=Lw[t];return`${this.mo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,s,r){const i=ro();return new Promise((o,a)=>{const l=new e0;l.setWithCredentials(!0),l.listenOnce(Jv.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case eo.NO_ERROR:const u=l.getResponseJson();N(At,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case eo.TIMEOUT:N(At,`RPC '${t}' ${i} timed out`),a(new x(_.DEADLINE_EXCEEDED,"Request time out"));break;case eo.HTTP_ERROR:const f=l.getStatus();if(N(At,`RPC '${t}' ${i} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const M=function(A){const O=A.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(O)>=0?O:_.UNKNOWN}(m.status);a(new x(M,m.message))}else a(new x(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(_.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{N(At,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(r);N(At,`RPC '${t}' ${i} sending request:`,r),l.send(n,"POST",c,s,15)})}Ro(t,n,s){const r=ro(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Yv(),a=Xv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new t0({})),this.Eo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=i.join("");N(At,`Creating RPC '${t}' stream ${r}: ${u}`,l);const f=o.createWebChannel(u,l);let p=!1,m=!1;const M=new Fw({ro:O=>{m?N(At,`Not sending because RPC '${t}' stream ${r} is closed:`,O):(p||(N(At,`Opening RPC '${t}' stream ${r} transport.`),f.open(),p=!0),N(At,`RPC '${t}' stream ${r} sending:`,O),f.send(O))},oo:()=>f.close()}),A=(O,J,W)=>{O.listen(J,Q=>{try{W(Q)}catch(L){setTimeout(()=>{throw L},0)}})};return A(f,gr.EventType.OPEN,()=>{m||N(At,`RPC '${t}' stream ${r} transport opened.`)}),A(f,gr.EventType.CLOSE,()=>{m||(m=!0,N(At,`RPC '${t}' stream ${r} transport closed`),M.wo())}),A(f,gr.EventType.ERROR,O=>{m||(m=!0,$n(At,`RPC '${t}' stream ${r} transport errored:`,O),M.wo(new x(_.UNAVAILABLE,"The operation could not be completed")))}),A(f,gr.EventType.MESSAGE,O=>{var J;if(!m){const W=O.data[0];mt(!!W);const Q=W,L=Q.error||((J=Q[0])===null||J===void 0?void 0:J.error);if(L){N(At,`RPC '${t}' stream ${r} received error:`,L);const Ht=L.status;let me=function(ye){const hn=dt[ye];if(hn!==void 0)return Zf(hn)}(Ht),Ue=L.message;me===void 0&&(me=_.INTERNAL,Ue="Unknown error status: "+Ht+" with message "+L.message),m=!0,M.wo(new x(me,Ue)),f.close()}else N(At,`RPC '${t}' stream ${r} received:`,W),M._o(W)}}),A(a,Zv.STAT_EVENT,O=>{O.stat===Pc.PROXY?N(At,`RPC '${t}' stream ${r} detected buffering proxy`):O.stat===Pc.NOPROXY&&N(At,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{M.fo()},0),M}}function io(){return typeof document<"u"?document:null}/**
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
 */function Ni(e){return new nw(e,!0)}/**
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
 */class hd{constructor(t,n,s=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&N("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Vw{constructor(t,n,s,r,i,o,a,l){this.ii=t,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new hd(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Ce(n.toString()),Ce("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{t(()=>{const r=new x(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(t,n){const s=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return N("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bw extends Vw{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.qo.reset();const n=rw(this.serializer,t),s=function(r){if(!("targetChange"in r))return B.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?B.min():i.readTime?Mn(i.readTime):B.min()}(t);return this.listener.nu(n,s)}su(t){const n={};n.database=su(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Go(a)?{documents:iw(r,a)}:{query:ow(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=nd(r,i.resumeToken);const l=Zo(r,i.expectedCount);l!==null&&(o.expectedCount=l)}else if(i.snapshotVersion.compareTo(B.min())>0){o.readTime=ta(r,i.snapshotVersion.toTimestamp());const l=Zo(r,i.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,t);const s=lw(this.serializer,t);s&&(n.labels=s),this.Wo(n)}iu(t){const n={};n.database=su(this.serializer),n.removeTarget=t,this.Wo(n)}}/**
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
 */class Uw extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(_.UNKNOWN,r.toString())})}vo(t,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(_.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class jw{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ce(n),this.mu=!1):N("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class qw{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{tr(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=G(a);l.vu.add(4),await Zs(l),l.bu.set("Unknown"),l.vu.delete(4),await Mi(l)}(this))})}),this.bu=new jw(s,r)}}async function Mi(e){if(tr(e))for(const t of e.Ru)await t(!0)}async function Zs(e){for(const t of e.Ru)await t(!1)}function fd(e,t){const n=G(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),gl(n)?pl(n):es(n).Ko()&&dl(n,t))}function dd(e,t){const n=G(e),s=es(n);n.Au.delete(t),s.Ko()&&pd(n,t),n.Au.size===0&&(s.Ko()?s.jo():tr(n)&&n.bu.set("Unknown"))}function dl(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}es(e).su(t)}function pd(e,t){e.Vu.qt(t),es(e).iu(t)}function pl(e){e.Vu=new J0({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),es(e).start(),e.bu.gu()}function gl(e){return tr(e)&&!es(e).Uo()&&e.Au.size>0}function tr(e){return G(e).vu.size===0}function gd(e){e.Vu=void 0}async function zw(e){e.Au.forEach((t,n)=>{dl(e,t)})}async function Hw(e,t){gd(e),gl(e)?(e.bu.Iu(t),pl(e)):e.bu.set("Unknown")}async function Kw(e,t,n){if(e.bu.set("Online"),t instanceof ed&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(e,t)}catch(s){N("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await au(e,s)}else if(t instanceof br?e.Vu.Ht(t):t instanceof td?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(B.min()))try{const s=await ud(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Au.get(l);c&&r.Au.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,l)=>{const c=r.Au.get(a);if(!c)return;r.Au.set(a,c.withResumeToken(Pt.EMPTY_BYTE_STRING,c.snapshotVersion)),pd(r,a);const u=new Ne(c.target,a,l,c.sequenceNumber);dl(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){N("RemoteStore","Failed to raise snapshot:",s),await au(e,s)}}async function au(e,t,n){if(!Ys(t))throw t;e.vu.add(1),await Zs(e),e.bu.set("Offline"),n||(n=()=>ud(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Mi(e)})}async function lu(e,t){const n=G(e);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const s=tr(n);n.vu.add(3),await Zs(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Mi(n)}async function Gw(e,t){const n=G(e);t?(n.vu.delete(2),await Mi(n)):t||(n.vu.add(2),await Zs(n),n.bu.set("Unknown"))}function es(e){return e.Su||(e.Su=function(t,n,s){const r=G(t);return r.fu(),new Bw(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{uo:zw.bind(null,e),ao:Hw.bind(null,e),nu:Kw.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),gl(e)?pl(e):e.bu.set("Unknown")):(await e.Su.stop(),gd(e))})),e.Su}/**
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
 */class ml{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new ml(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(_.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function md(e,t){if(Ce("AsyncQueue",`${t}: ${e}`),Ys(e))return new x(_.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class On{constructor(t){this.comparator=t?(n,s)=>t(n,s)||P.comparator(n.key,s.key):(n,s)=>P.comparator(n.key,s.key),this.keyedMap=hs(),this.sortedSet=new ht(this.comparator)}static emptySet(t){return new On(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof On)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new On;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class cu{constructor(){this.Cu=new ht(P.comparator)}track(t){const n=t.doc.key,s=this.Cu.get(n);s?t.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,t):t.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Cu=this.Cu.remove(n):t.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):U():this.Cu=this.Cu.insert(n,t)}xu(){const t=[];return this.Cu.inorderTraversal((n,s)=>{t.push(s)}),t}}class qn{constructor(t,n,s,r,i,o,a,l,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qn(t,n,On.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&bi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Ww{constructor(){this.Nu=void 0,this.listeners=[]}}class Qw{constructor(){this.queries=new ts(t=>jf(t),bi),this.onlineState="Unknown",this.ku=new Set}}async function Yw(e,t){const n=G(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Ww),r)try{i.Nu=await n.onListen(s)}catch(o){const a=md(o,`Initialization of query '${Yo(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.Mu(n.onlineState),i.Nu&&t.$u(i.Nu)&&yl(n)}async function Xw(e,t){const n=G(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Jw(e,t){const n=G(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&yl(n)}function Zw(e,t,n){const s=G(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function yl(e){e.ku.forEach(t=>{t.next()})}class tE{constructor(t,n,s){this.query=t,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new qn(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),n=!0):this.qu(t,this.onlineState)&&(this.Uu(t),n=!0),this.Bu=t,n}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),n=!0),n}qu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Lu(t){if(t.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(t){t=qn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}/**
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
 */class yd{constructor(t){this.key=t}}class vd{constructor(t){this.key=t}}class eE{constructor(t,n){this.query=t,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=K(),this.mutatedKeys=K(),this.tc=qf(t),this.ec=new On(this.tc)}get nc(){return this.Yu}sc(t,n){const s=n?n.ic:new cu,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((u,f)=>{const p=r.get(u),m=Si(this.query,f)?f:null,M=!!p&&this.mutatedKeys.has(p.key),A=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let O=!1;p&&m?p.data.isEqual(m.data)?M!==A&&(s.track({type:3,doc:m}),O=!0):this.rc(p,m)||(s.track({type:2,doc:m}),O=!0,(l&&this.tc(m,l)>0||c&&this.tc(m,c)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),O=!0):p&&!m&&(s.track({type:1,doc:p}),O=!0,(l||c)&&(a=!0)),O&&(m?(o=o.add(m),i=A?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort((c,u)=>function(f,p){const m=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return m(f)-m(p)}(c.type,u.type)||this.tc(c.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,i.length!==0||l?{snapshot:new qn(this.query,t.ec,r,i,t.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new cu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=K(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return t.forEach(s=>{this.Zu.has(s)||n.push(new vd(s))}),this.Zu.forEach(s=>{t.has(s)||n.push(new yd(s))}),n}hc(t){this.Yu=t.ir,this.Zu=K();const n=this.sc(t.documents);return this.applyChanges(n,!0)}lc(){return qn.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class nE{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class sE{constructor(t){this.key=t,this.fc=!1}}class rE{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ts(a=>jf(a),bi),this._c=new Map,this.mc=new Set,this.gc=new ht(P.comparator),this.yc=new Map,this.Ic=new ul,this.Tc={},this.Ec=new Map,this.Ac=jn.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function iE(e,t){const n=fE(e);let s,r;const i=n.wc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await Ow(n.localStore,be(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await oE(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&fd(n.remoteStore,o)}return r}async function oE(e,t,n,s,r){e.Rc=(f,p,m)=>async function(M,A,O,J){let W=A.view.sc(O);W.zi&&(W=await ru(M.localStore,A.query,!1).then(({documents:Ht})=>A.view.sc(Ht,W)));const Q=J&&J.targetChanges.get(A.targetId),L=A.view.applyChanges(W,M.isPrimaryClient,Q);return hu(M,A.targetId,L.cc),L.snapshot}(e,f,p,m);const i=await ru(e.localStore,t,!0),o=new eE(t,i.ir),a=o.sc(i.documents),l=Js.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),c=o.applyChanges(a,e.isPrimaryClient,l);hu(e,n,c.cc);const u=new nE(t,n,o);return e.wc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function aE(e,t){const n=G(e),s=n.wc.get(t),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!bi(i,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await na(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),dd(n.remoteStore,s.targetId),sa(n,s.targetId)}).catch(Xa)):(sa(n,s.targetId),await na(n.localStore,s.targetId,!0))}async function wd(e,t){const n=G(e);try{const s=await Nw(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(mt(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?mt(o.fc):r.removedDocuments.size>0&&(mt(o.fc),o.fc=!1))}),await _d(n,s,t)}catch(s){await Xa(s)}}function uu(e,t,n){const s=G(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const f of u.listeners)f.Mu(o)&&(l=!0)}),l&&yl(a)}(s.eventManager,t),r.length&&s.dc.nu(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function lE(e,t,n){const s=G(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.yc.get(t),i=r&&r.key;if(i){let o=new ht(P.comparator);o=o.insert(i,Dt.newNoDocument(i,B.min()));const a=K().add(i),l=new Di(B.min(),new Map,new ht(X),o,a);await wd(s,l),s.gc=s.gc.remove(i),s.yc.delete(t),vl(s)}else await na(s.localStore,t,!1).then(()=>sa(s,t,n)).catch(Xa)}function sa(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(s=>{e.Ic.containsKey(s)||Ed(e,s)})}function Ed(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);n!==null&&(dd(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),vl(e))}function hu(e,t,n){for(const s of n)s instanceof yd?(e.Ic.addReference(s.key,t),cE(e,s)):s instanceof vd?(N("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||Ed(e,s.key)):U()}function cE(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(N("SyncEngine","New document in limbo: "+n),e.mc.add(s),vl(e))}function vl(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new P(at.fromString(t)),s=e.Ac.next();e.yc.set(s,new sE(n)),e.gc=e.gc.insert(n,s),fd(e.remoteStore,new Ne(be(rl(n.path)),s,"TargetPurposeLimboResolution",Ja.ct))}}async function _d(e,t,n){const s=G(e),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,l)=>{o.push(s.Rc(l,t,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=fl.Li(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,l){const c=G(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(l,f=>E.forEach(f.Fi,p=>c.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>E.forEach(f.Bi,p=>c.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!Ys(u))throw u;N("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const f=u.targetId;if(!u.fromCache){const p=c.Ji.get(f),m=p.snapshotVersion,M=p.withLastLimboFreeSnapshotVersion(m);c.Ji=c.Ji.insert(f,M)}}}(s.localStore,i))}async function uE(e,t){const n=G(e);if(!n.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());const s=await cd(n.localStore,t);n.currentUser=t,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new x(_.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await _d(n,s.er)}}function hE(e,t){const n=G(e),s=n.yc.get(t);if(s&&s.fc)return K().add(s.key);{let r=K();const i=n._c.get(t);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function fE(e){const t=G(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=wd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lE.bind(null,t),t.dc.nu=Jw.bind(null,t.eventManager),t.dc.Pc=Zw.bind(null,t.eventManager),t}class fu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ni(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Dw(this.persistence,new Aw,t.initialUser,this.serializer)}createPersistence(t){return new bw(hl.zs,this.serializer)}createSharedClientState(t){return new Rw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dE{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uE.bind(null,this.syncEngine),await Gw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Qw}createDatastore(t){const n=Ni(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new $w(r));var r;return function(i,o,a,l){return new Uw(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>uu(this.syncEngine,a,0),o=ou.D()?new ou:new Pw,new qw(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,l,c){const u=new rE(s,r,i,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=G(t);N("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Zs(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class pE{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):Ce("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class gE{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=xt.UNAUTHENTICATED,this.clientId=h0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{N("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(N("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=md(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function oo(e,t){e.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await cd(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function du(e,t){e.asyncQueue.verifyOperationInProgress();const n=await yE(e);N("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>lu(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>lu(t.remoteStore,i)),e._onlineComponents=t}function mE(e){return e.name==="FirebaseError"?e.code===_.FAILED_PRECONDITION||e.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function yE(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await oo(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!mE(n))throw n;$n("Error using user provided cache. Falling back to memory cache: "+n),await oo(e,new fu)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await oo(e,new fu);return e._offlineComponents}async function vE(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await du(e,e._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await du(e,new dE))),e._onlineComponents}async function pu(e){const t=await vE(e),n=t.eventManager;return n.onListen=iE.bind(null,t.syncEngine),n.onUnlisten=aE.bind(null,t.syncEngine),n}/**
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
 */function Td(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const gu=new Map;/**
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
 */function wE(e,t,n){if(!n)throw new x(_.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function EE(e,t,n,s){if(t===!0&&s===!0)throw new x(_.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function mu(e){if(P.isDocumentKey(e))throw new x(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Oi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":U()}function Sr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new x(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oi(e);throw new x(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class yu{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new x(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}EE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Td((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new x(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new x(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new x(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=t.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,s}}class wl{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new x(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yu(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new s0;switch(n.type){case"firstParty":return new a0(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=gu.get(t);n&&(N("ComponentProvider","Removing Datastore"),gu.delete(t),n.terminate())}(this),Promise.resolve()}}function _E(e,t,n,s={}){var r;const i=(e=Sr(e,wl))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&$n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=xt.MOCK_USER;else{a=Rm(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new x(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new xt(c)}e._authCredentials=new r0(new Of(a,l))}}/**
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
 */class ge{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ge(this.firestore,t,this._key)}}class un{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new un(this.firestore,t,this._query)}}class kn extends un{constructor(t,n,s){super(t,n,rl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ge(this.firestore,null,new P(t))}withConverter(t){return new kn(this.firestore,t,this._path)}}function TE(e,t,...n){if(e=Ss(e),wE("collection","path",t),e instanceof wl){const s=at.fromString(t,...n);return mu(s),new kn(e,null,s)}{if(!(e instanceof ge||e instanceof kn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(at.fromString(t,...n));return mu(s),new kn(e.firestore,null,s)}}/**
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
 */class IE{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new hd(this,"async_queue_retry"),this.Xc=()=>{const n=io();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=io();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new xn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Ys(t))throw t;N("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Ce("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(t,n,s){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const r=ml.createAndSchedule(this,t,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&U()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}function vu(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class ra extends wl{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new IE,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Id(this),this._firestoreClient.terminate()}}function CE(e,t){const n=typeof e=="object"?e:$y(),s=typeof e=="string"?e:t||"(default)",r=Ry(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Om("firestore");i&&_E(r,...i)}return r}function bE(e){return e._firestoreClient||Id(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Id(e){var t,n,s;const r=e._freezeSettings(),i=function(o,a,l,c){return new E0(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Td(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new gE(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class zn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new zn(Pt.fromBase64String(t))}catch(n){throw new x(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new zn(Pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Cd{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new x(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class bd{constructor(t){this._methodName=t}}/**
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
 */class El{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new x(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new x(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return X(this._lat,t._lat)||X(this._long,t._long)}}/**
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
 */const SE=/^__.*__$/;function Sd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class _l{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new _l(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.aa({path:s,la:!1});return r.fa(t),r}da(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.aa({path:s,la:!1});return r.ua(),r}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return ia(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(Sd(this.ca)&&SE.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class AE{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Ni(t)}ya(t,n,s,r=!1){return new _l({ca:t,methodName:n,ga:s,path:Vt.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xE(e){const t=e._freezeSettings(),n=Ni(e._databaseId);return new AE(e._databaseId,!!t.ignoreUndefinedProperties,n)}function DE(e,t,n,s=!1){return Tl(n,e.ya(s?4:3,t))}function Tl(e,t){if(Ad(e=Ss(e)))return ME("Unsupported field value:",t,e),NE(e,t);if(e instanceof bd)return function(n,s){if(!Sd(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Tl(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Ss(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return B0(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=wt.fromDate(n);return{timestampValue:ta(s.serializer,r)}}if(n instanceof wt){const r=new wt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ta(s.serializer,r)}}if(n instanceof El)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zn)return{bytesValue:nd(s.serializer,n._byteString)};if(n instanceof ge){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:sd(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Oi(n)}`)}(e,t)}function NE(e,t){const n={};return kf(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xs(e,(s,r)=>{const i=Tl(r,t.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Ad(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof wt||e instanceof El||e instanceof zn||e instanceof ge||e instanceof bd)}function ME(e,t,n){if(!Ad(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Oi(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}const OE=new RegExp("[~\\*/\\[\\]]");function kE(e,t,n){if(t.search(OE)>=0)throw ia(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Cd(...t.split("."))._internalPath}catch{throw ia(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ia(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new x(_.INVALID_ARGUMENT,a+e+l)}/**
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
 */class xd{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new RE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Il("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RE extends xd{data(){return super.data()}}function Il(e,t){return typeof t=="string"?kE(e,t):t instanceof Cd?t._internalPath:t._delegate._internalPath}/**
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
 */function PE(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new x(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cl{}class Dd extends Cl{}function LE(e,t,...n){let s=[];t instanceof Cl&&s.push(t),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Sl).length,o=r.filter(a=>a instanceof bl).length;if(i>1||i>0&&o>0)throw new x(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)e=r._apply(e);return e}class bl extends Dd{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new bl(t,n,s)}_apply(t){const n=this._parse(t);return Nd(t._query,n),new un(t.firestore,t.converter,Wo(t._query,n))}_parse(t){const n=xE(t.firestore);return function(r,i,o,a,l,c,u){let f;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new x(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Eu(u,c);const p=[];for(const m of u)p.push(wu(a,r,m));f={arrayValue:{values:p}}}else f=wu(a,r,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Eu(u,c),f=DE(o,i,u,c==="in"||c==="not-in");return gt.create(l,c,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Sl extends Cl{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Sl(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:se.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Nd(i,a),i=Wo(i,a)}(t._query,n),new un(t.firestore,t.converter,Wo(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Al extends Dd{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Al(t,n)}_apply(t){const n=function(s,r,i){if(s.startAt!==null)throw new x(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Dn(r,i);return function(a,l){if(il(a)===null){const c=Ci(a);c!==null&&Md(a,c,l.field)}}(s,o),o}(t._query,this._field,this._direction);return new un(t.firestore,t.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Zn(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function FE(e,t="asc"){const n=t,s=Il("orderBy",e);return Al._create(s,n)}function wu(e,t,n){if(typeof(n=Ss(n))=="string"){if(n==="")throw new x(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Uf(t)&&n.indexOf("/")!==-1)throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(at.fromString(n));if(!P.isDocumentKey(s))throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Uc(e,new P(s))}if(n instanceof ge)return Uc(e,n._key);throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oi(n)}.`)}function Eu(e,t){if(!Array.isArray(e)||e.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Nd(e,t){if(t.isInequality()){const s=Ci(e),r=t.field;if(s!==null&&!s.isEqual(r))throw new x(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=il(e);i!==null&&Md(e,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Md(e,t,n){if(!n.isEqual(t))throw new x(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class $E{convertValue(t,n="none"){switch(ln(t)){case 0:return null;case 1:return t.booleanValue;case 2:return pt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(an(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw U()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Xs(t,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new El(pt(t.latitude),pt(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=tl(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp($s(t));default:return null}}convertTimestamp(t){const n=Fe(t);return new wt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=at.fromString(t);mt(ld(s));const r=new Vs(s.get(1),s.get(3)),i=new P(s.popFirst(5));return r.isEqual(n)||Ce(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class ds{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Od extends xd{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Il("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ar extends Od{data(t={}){return super.data(t)}}class VE{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new ds(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Ar(this._firestore,this._userDataWriter,s.key,s,new ds(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ar(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ds(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ar(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ds(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:BE(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BE(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class kd extends $E{constructor(t){super(),this.firestore=t}convertBytes(t){return new zn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ge(this.firestore,null,n)}}function UE(e,...t){var n,s,r;e=Ss(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||vu(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(vu(t[o])){const f=t[o];t[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),t[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),t[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let l,c,u;if(e instanceof ge)c=Sr(e.firestore,ra),u=rl(e._key.path),l={next:f=>{t[o]&&t[o](jE(c,e,f))},error:t[o+1],complete:t[o+2]};else{const f=Sr(e,un);c=Sr(f.firestore,ra),u=f._query;const p=new kd(c);l={next:m=>{t[o]&&t[o](new VE(c,p,f,m))},error:t[o+1],complete:t[o+2]},PE(e._query)}return function(f,p,m,M){const A=new pE(M),O=new tE(p,A,m);return f.asyncQueue.enqueueAndForget(async()=>Yw(await pu(f),O)),()=>{A.Dc(),f.asyncQueue.enqueueAndForget(async()=>Xw(await pu(f),O))}}(bE(c),u,a,l)}function jE(e,t,n){const s=n.docs.get(t._key),r=new kd(e);return new Od(e,r,t._key,s,new ds(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Jn=n})(Fy),Pr(new As("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ra(new i0(n.getProvider("auth-internal")),new c0(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vs(a.options.projectId,l)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),bn(Lc,"3.12.2",e),bn(Lc,"3.12.2","esm2017")})();const qE={apiKey:"AIzaSyDyW77823MSajkNaSQ6fw9-u8JtbPD_D-E",authDomain:"fir-testing-53e54.firebaseapp.com",projectId:"fir-testing-53e54",storageBucket:"fir-testing-53e54.appspot.com",messagingSenderId:"530300578305",appId:"1:530300578305:web:594a5b6b3f79a5ad17ee00"};Sh(qE);const zE=CE();const HE={components:{Button:yh},emits:["close"],data(){return{name:null,logo:null,winningYears:null}},methods:{addTeam(){this.$refs.addFrom.reset(),this.$emit("close")}}},ki=e=>(ni("data-v-b0040eaa"),e=e(),si(),e),KE=ki(()=>ot("h2",null,"Add a new team",-1)),GE={class:"input-field"},WE=ki(()=>ot("label",{for:"name"},"Name:",-1)),QE={class:"input-field"},YE=ki(()=>ot("label",{for:"winningYears"},"Winning Years:",-1)),XE=ki(()=>ot("div",{class:"input-field-logo"},[ot("label",{for:"logo"},"Logo:"),ot("input",{type:"file",accept:".webp",id:"logo",required:""})],-1));function JE(e,t,n,s,r,i){const o=mn("Button");return ee(),_e(qt,null,[KE,ot("form",{onSubmit:t[2]||(t[2]=mh((...a)=>i.addTeam&&i.addTeam(...a),["prevent"])),ref:"addFrom"},[ot("div",GE,[vo(ot("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>r.name=a),id:"name",type:"text",required:"",placeholder:" "},null,512),[[bo,r.name]]),WE]),ot("div",QE,[vo(ot("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>r.winningYears=a),id:"winningYears",type:"text",pattern:"\\d{4}(,\\s\\d{4})*",title:"e.g. 2022, 2023",required:"",placeholder:" "},null,512),[[bo,r.winningYears]]),YE]),XE,$t(o,{label:"add"})],544)],64)}const ZE=Wn(HE,[["render",JE],["__scopeId","data-v-b0040eaa"]]);const t_={},e_={class:"modal"};function n_(e,t,n,s,r,i){return ee(),_e("dialog",e_,[rg(e.$slots,"default",{},void 0,!0)])}const s_=Wn(t_,[["render",n_],["__scopeId","data-v-cacaff91"]]);function r_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xl={};Object.defineProperty(xl,"__esModule",{value:!0});var i_=function(){function e(t,n){for(var s=0;s<n.length;s++){var r=n[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();function o_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a_=function(){function e(){o_(this,e),this.view=document.body.appendChild(document.createElement("div")),this.view.classList.add("snackbar"),this.isActive=!1,this.queue=[],this.gap=250,this.duration=5e3}return i_(e,[{key:"show",value:function(n){var s=this;if(this.isActive){this.queue.push(n);return}this.isActive=!0,this.view.textContent=n,this.view.classList.add("snackbar--visible"),this.queue.shift(),setTimeout(function(){return s.hide()},this.duration)}},{key:"hide",value:function(){var n=this;this.isActive=!1,this.view.classList.remove("snackbar--visible"),this.queue.length&&setTimeout(function(){return n.show(n.queue[0])},this.gap)}}]),e}();xl.default=a_;var l_=xl,c_=u_(l_);function u_(e){return e&&e.__esModule?e:{default:e}}var ao=void 0;function h_(){return ao||(ao=new c_.default),ao}var f_=h_();const d_=r_(f_);const p_={components:{Button:yh,Team:ym,SearchBar:Tm,AddForm:ZE,Modal:s_},data(){return{allTeams:[],src:null,name:null,years:null,result:!1,teamName:"",isOpen:!1}},mounted(){let e=TE(zE,"teams");e=LE(e,FE("name")),UE(e,t=>{this.allTeams=[],t.docs.forEach(n=>{this.allTeams.push(n.data())})})},methods:{reset(){this.$refs.searchBar.$data.teamName="",this.teamName=""},handleTeamName(e){this.teamName=e},addTeam(){this.$refs.addForm.$el.showModal()},closeAddFrom(){this.$refs.addForm.$el.close(),d_.show("The team has been added successfully!")}},computed:{filteredTeam(){return this.allTeams.filter(e=>e.name.toLowerCase().includes(this.teamName.trim().toLowerCase()))}}},Dl=e=>(ni("data-v-8d1bd33c"),e=e(),si(),e),g_={class:"container"},m_=Dl(()=>ot("h1",null,"teams-titles",-1)),y_=Dl(()=>ot("p",null,[ot("strong",null,"Built using:"),dh(" Vue, HTML, CSS, Firestore, Snackbar.js, Vite ")],-1)),v_=Dl(()=>ot("p",null," This app allows users to view the winning history of top European football teams in the UEFA Champions League. Users can access the Champions League winning history of teams such as Real Madrid, Barcelona, Manchester United, Chelsea, Liverpool, Bayern Munich, AC Milan, Inter Milan, Juventus, and Ajax. Additionally, the system provides functionality for users to add new teams, remove existing teams, and update the winning history of teams. ",-1)),w_={class:"app-functions"},E_={class:"all-teams"};function __(e,t,n,s,r,i){const o=mn("SearchBar"),a=mn("Button"),l=mn("Team"),c=mn("AddForm"),u=mn("Modal");return ee(),_e("div",g_,[m_,y_,v_,ot("div",w_,[$t(o,{ref:"searchBar",onUpdate:i.handleTeamName},null,8,["onUpdate"]),$t(a,{label:"add a new team",onClick:i.addTeam},null,8,["onClick"]),$t(a,{label:"reset",type:"reset",onClick:i.reset},null,8,["onClick"])]),ot("div",E_,[(ee(!0),_e(qt,null,Zu(i.filteredTeam,(f,p)=>(ee(),uh(l,{key:p,src:f.logo,name:f.name,winningYears:f.winningYears},null,8,["src","name","winningYears"]))),128))]),$t(u,{ref:"addForm"},{default:Ku(()=>[$t(c,{onClose:i.closeAddFrom},null,8,["onClose"])]),_:1},512)])}const T_=Wn(p_,[["render",__],["__scopeId","data-v-8d1bd33c"]]);am(T_).mount("#app");
