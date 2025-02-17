var U=t=>{throw TypeError(t)};var V=(t,e,r)=>e.has(t)||U("Cannot "+r);var j=(t,e,r)=>(V(t,e,"read from private field"),r?r.call(t):e.get(t)),P=(t,e,r)=>e.has(t)?U("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),W=(t,e,r,n)=>(V(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);import{h as ut,i as Z,g as L,c as ct,ao as at,D as ft,r as lt,o as J,W as pt,X as dt,u as Q}from"./context-ClX-pJyV.js";import{f as N,x as Y}from"./props-B4yo3oB_.js";import{k as C}from"./create-runtime-stories-BeEH6srk.js";import{g as ht}from"./_commonjsHelpers-CqkleIqs.js";function bt(t){return typeof t=="function"}function yt(t){return t!==null&&typeof t=="object"}const mt=["string","number","bigint","boolean"];function R(t){return t==null||mt.includes(typeof t)?!0:Array.isArray(t)?t.every(e=>R(e)):typeof t=="object"?Object.getPrototypeOf(t)===Object.prototype:!1}const I=Symbol("box"),F=Symbol("is-writable");function Et(t){return yt(t)&&I in t}function vt(t){return h.isBox(t)&&F in t}function h(t){let e=ut(N(t));return{[I]:!0,[F]:!0,get current(){return L(e)},set current(r){Z(e,N(r))}}}function gt(t,e){const r=ct(t);return e?{[I]:!0,[F]:!0,get current(){return L(r)},set current(n){e(n)}}:{[I]:!0,get current(){return t()}}}function wt(t){return h.isBox(t)?t:bt(t)?h.with(t):h(t)}function St(t){return Object.entries(t).reduce((e,[r,n])=>h.isBox(n)?(h.isWritableBox(n)?Object.defineProperty(e,r,{get(){return n.current},set(i){n.current=i}}):Object.defineProperty(e,r,{get(){return n.current}}),e):Object.assign(e,{[r]:n}),{})}function _t(t){return h.isWritableBox(t)?{[I]:!0,get current(){return t.current}}:t}h.from=wt;h.with=gt;h.flatten=St;h.readonly=_t;h.isBox=Et;h.isWritableBox=vt;function xt(...t){return function(e){var r;for(const n of t)if(n){if(e.defaultPrevented)return;typeof n=="function"?n.call(this,e):(r=n.current)==null||r.call(this,e)}}}var g={},B,q;function It(){if(q)return B;q=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,e=/\n/g,r=/^\s*/,n=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,o=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,u=/^[;\s]*/,a=/^\s+|\s+$/g,d=`
`,l="/",p="*",b="",S="comment",E="declaration";B=function(f,v){if(typeof f!="string")throw new TypeError("First argument must be a string");if(!f)return[];v=v||{};var _=1,m=1;function M(c){var s=c.match(e);s&&(_+=s.length);var y=c.lastIndexOf(d);m=~y?c.length-y:m+c.length}function X(){var c={line:_,column:m};return function(s){return s.position=new G(c),k(),s}}function G(c){this.start=c,this.end={line:_,column:m},this.source=v.source}G.prototype.content=f;function $(c){var s=new Error(v.source+":"+_+":"+m+": "+c);if(s.reason=c,s.filename=v.source,s.line=_,s.column=m,s.source=f,!v.silent)throw s}function x(c){var s=c.exec(f);if(s){var y=s[0];return M(y),f=f.slice(y.length),s}}function k(){x(r)}function D(c){var s;for(c=c||[];s=H();)s!==!1&&c.push(s);return c}function H(){var c=X();if(!(l!=f.charAt(0)||p!=f.charAt(1))){for(var s=2;b!=f.charAt(s)&&(p!=f.charAt(s)||l!=f.charAt(s+1));)++s;if(s+=2,b===f.charAt(s-1))return $("End of comment missing");var y=f.slice(2,s-2);return m+=2,M(y),f=f.slice(s),m+=2,c({type:S,comment:y})}}function it(){var c=X(),s=x(n);if(s){if(H(),!x(i))return $("property missing ':'");var y=x(o),st=c({type:E,property:T(s[0].replace(t,b)),value:y?T(y[0].replace(t,b)):b});return x(u),st}}function ot(){var c=[];D(c);for(var s;s=it();)s!==!1&&(c.push(s),D(c));return c}return k(),ot()};function T(f){return f?f.replace(a,b):b}return B}var z;function At(){if(z)return g;z=1;var t=g&&g.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(g,"__esModule",{value:!0}),g.default=r;var e=t(It());function r(n,i){var o=null;if(!n||typeof n!="string")return o;var u=(0,e.default)(n),a=typeof i=="function";return u.forEach(function(d){if(d.type==="declaration"){var l=d.property,p=d.value;a?i(l,p,d):p&&(o=o||{},o[l]=p)}}),o}return g}var Tt=At();const K=ht(Tt),jt=K.default||K,Ot=/\d/,Pt=["-","_","/","."];function Wt(t=""){if(!Ot.test(t))return t!==t.toLowerCase()}function Ct(t){const e=[];let r="",n,i;for(const o of t){const u=Pt.includes(o);if(u===!0){e.push(r),r="",n=void 0;continue}const a=Wt(o);if(i===!1){if(n===!1&&a===!0){e.push(r),r=o,n=a;continue}if(n===!0&&a===!1&&r.length>1){const d=r.at(-1);e.push(r.slice(0,Math.max(0,r.length-1))),r=d+o,n=a;continue}}r+=o,n=a,i=u}return e.push(r),e}function tt(t){return t?Ct(t).map(e=>Rt(e)).join(""):""}function Bt(t){return Lt(tt(t||""))}function Rt(t){return t?t[0].toUpperCase()+t.slice(1):""}function Lt(t){return t?t[0].toLowerCase()+t.slice(1):""}function O(t){if(!t)return{};const e={};function r(n,i){if(n.startsWith("-moz-")||n.startsWith("-webkit-")||n.startsWith("-ms-")||n.startsWith("-o-")){e[tt(n)]=i;return}if(n.startsWith("--")){e[n]=i;return}e[Bt(n)]=i}return jt(t,r),e}function Ft(...t){return(...e)=>{for(const r of t)typeof r=="function"&&r(...e)}}function Mt(t,e){const r=RegExp(t,"g");return n=>{if(typeof n!="string")throw new TypeError(`expected an argument of type string, but got ${typeof n}`);return n.match(r)?n.replace(r,e):n}}const Xt=Mt(/[A-Z]/,t=>`-${t.toLowerCase()}`);function Gt(t){if(!t||typeof t!="object"||Array.isArray(t))throw new TypeError(`expected an argument of type object, but got ${typeof t}`);return Object.keys(t).map(e=>`${Xt(e)}: ${t[e]};`).join(`
`)}function et(t={}){return Gt(t).replace(`
`," ")}const $t={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",transform:"translateX(-100%)"};et($t);function kt(t){var e;return t.length>2&&t.startsWith("on")&&t[2]===((e=t[2])==null?void 0:e.toLowerCase())}function ee(...t){const e={...t[0]};for(let r=1;r<t.length;r++){const n=t[r];for(const i in n){const o=e[i],u=n[i],a=typeof o=="function",d=typeof u=="function";if(a&&kt(i)){const l=o,p=u;e[i]=xt(l,p)}else if(a&&d)e[i]=Ft(o,u);else if(i==="class"){const l=R(o),p=R(u);l&&p?e[i]=C(o,u):l?e[i]=C(o):p&&(e[i]=C(u))}else if(i==="style"){const l=typeof o=="object",p=typeof u=="object",b=typeof o=="string",S=typeof u=="string";if(l&&p)e[i]={...o,...u};else if(l&&S){const E=O(u);e[i]={...o,...E}}else if(b&&p){const E=O(o);e[i]={...E,...u}}else if(b&&S){const E=O(o),T=O(u);e[i]={...E,...T}}else l?e[i]=o:p?e[i]=u:b?e[i]=o:S&&(e[i]=u)}else e[i]=u!==void 0?u:o}}return typeof e.style=="object"&&(e.style=et(e.style).replaceAll(`
`," ")),e.hidden!==!0&&(e.hidden=void 0,delete e.hidden),e.disabled!==!0&&(e.disabled=void 0,delete e.disabled),e}const Dt=typeof window<"u"?window:void 0;function Ht(t){let e=t.activeElement;for(;e!=null&&e.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}function Ut(t){Z(t,t.v+1)}function Vt(t){let e=0,r=ft(0),n;return()=>{at()&&(L(r),lt(()=>(e===0&&(n=J(()=>t(()=>Ut(r)))),e+=1,()=>{pt().then(()=>{e-=1,e===0&&(n==null||n(),n=void 0)})})))}}var w,A;class Nt{constructor(e={}){P(this,w);P(this,A);const{window:r=Dt,document:n=r==null?void 0:r.document}=e;r!==void 0&&(W(this,w,n),W(this,A,Vt(i=>{const o=Y(r,"focusin",i),u=Y(r,"focusout",i);return()=>{o(),u()}})))}get current(){var e;return(e=j(this,A))==null||e.call(this),j(this,w)?Ht(j(this,w)):null}}w=new WeakMap,A=new WeakMap;new Nt;function Yt(t,e){switch(t){case"post":Q(e);break;case"pre":dt(e);break}}function rt(t,e,r,n={}){const{lazy:i=!1}=n;let o=!i,u=Array.isArray(t)?[]:void 0;Yt(e,()=>{const a=Array.isArray(t)?t.map(l=>l()):t();if(!o){o=!0,u=a;return}const d=J(()=>r(a,u));return u=a,d})}function nt(t,e,r){rt(t,"post",e,r)}function qt(t,e,r){rt(t,"pre",e,r)}nt.pre=qt;function zt(t){Q(()=>()=>{t()})}function re({id:t,ref:e,deps:r=()=>!0,onRefChange:n,getRootNode:i}){nt([()=>t.current,r],([o])=>{const u=(i==null?void 0:i())??document,a=u==null?void 0:u.getElementById(o);a?e.current=a:e.current=null,n==null||n(e.current)}),zt(()=>{e.current=null,n==null||n(null)})}globalThis.bitsIdCounter??(globalThis.bitsIdCounter={current:0});function ne(t="bits"){return globalThis.bitsIdCounter.current++,`${t}-${globalThis.bitsIdCounter.current}`}export{ne as a,h as b,$t as c,xt as d,Ft as e,Dt as f,O as g,Ut as i,ee as m,zt as o,et as s,re as u,nt as w};
