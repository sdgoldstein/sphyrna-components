let K=!1;function An(){K=!0}const vt=!1;var On=Array.isArray,Dn=Array.from,Fn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Sn=Object.prototype,qn=Array.prototype,$t=Object.getPrototypeOf;function Rn(t){return typeof t=="function"}const Nn=()=>{};function jn(t){return t()}function Wt(t){for(var n=0;n<t.length;n++)t[n]()}function Pn(t,n,r=!1){return t===void 0?r?n():n:t}const w=2,pt=4,I=8,Z=16,x=32,$=64,J=128,A=256,H=512,h=1024,k=2048,S=4096,F=8192,q=16384,zt=32768,ht=65536,Yn=1<<17,Jt=1<<19,dt=1<<20,it=Symbol("$state"),In=Symbol("legacy props"),Ln=Symbol("");function yt(t){return t===this.v}function Qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function wt(t){return!Qt(t,this.v)}function Xt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Zt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Mn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function tt(t,n){var r={f:0,v:t,reactions:null,equals:yt,version:0};return r}function Un(t){return mt(tt(t))}function ln(t,n=!1){var e;const r=tt(t);return n||(r.equals=wt),K&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function Vn(t,n=!1){return mt(ln(t,n))}function mt(t){return i!==null&&i.f&w&&(E===null?yn([t]):E.push(t)),t}function Et(t,n){return i!==null&&st()&&i.f&(w|Z)&&(E===null||!E.includes(t))&&en(),sn(t,n)}function sn(t,n){return t.equals(n)||(t.v=n,t.version=Lt(),xt(t,k),st()&&a!==null&&a.f&h&&!(a.f&x)&&(v!==null&&v.includes(t)?(m(a,k),z(a)):g===null?wn([t]):g.push(t))),n}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=st(),l=r.length,s=0;s<l;s++){var u=r[s],f=u.f;f&k||!e&&u===a||(m(u,n),f&(h|A)&&(f&w?xt(u,S):z(u)))}}var ft,gt,kt;function Gn(){if(ft===void 0){ft=window;var t=Element.prototype,n=Node.prototype;gt=ot(n,"firstChild").get,kt=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Kn(t=""){return document.createTextNode(t)}function Tt(t){return gt.call(t)}function nt(t){return kt.call(t)}function $n(t,n){return Tt(t)}function Wn(t,n){{var r=Tt(t);return r instanceof Comment&&r.data===""?nt(r):r}}function zn(t,n=1,r=!1){let e=t;for(;n--;)e=nt(e);return e}function Jn(t){t.textContent=""}function un(t){var n=w|k;a===null?n|=A:a.f|=dt;var r=i!==null&&i.f&w?i:null;const e={children:null,ctx:o,deps:null,equals:yt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??a};return r!==null&&(r.children??(r.children=[])).push(e),e}function Qn(t){const n=un(t);return n.equals=wt,n}function bt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?rt(e):C(e)}}}function an(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function Ct(t){var n,r=a;G(an(t));try{bt(t),n=Mt(t)}finally{G(r)}return n}function At(t){var n=Ct(t),r=(b||t.f&A)&&t.deps!==null?S:h;m(t,r),t.equals(n)||(t.v=n,t.version=Lt())}function rt(t){bt(t),Y(t,0),m(t,q),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){a===null&&i===null&&tn(),i!==null&&i.f&A&&Zt(),lt&&Xt()}function on(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function R(t,n,r,e=!0){var l=(t&$)!==0,s=a,u={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var f=O;try{_t(!0),L(u),u.f|=zt}catch(_){throw C(u),_}finally{_t(f)}}else n!==null&&z(u);var p=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&dt)===0;if(!p&&!l&&e&&(s!==null&&on(u,s),i!==null&&i.f&w)){var d=i;(d.children??(d.children=[])).push(u)}return u}function Xn(t){const n=R(I,null,!1);return m(n,h),n.teardown=t,n}function Zn(t){Ot();var n=a!==null&&(a.f&x)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:a,reaction:i})}else{var e=Dt(t);return e}}function tr(t){return Ot(),et(t)}function nr(t){const n=R($,t,!0);return(r={})=>new Promise(e=>{r.outro?cn(n,()=>{C(n),e(void 0)}):(C(n),e(void 0))})}function Dt(t){return R(pt,t,!1)}function rr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=et(()=>{t(),!e.ran&&(e.ran=!0,Et(r.l.r2,!0),Tn(n))})}function er(){var t=o;et(()=>{if(Gt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&h&&m(r,S),N(r)&&L(r),n.ran=!1}t.l.r2.v=!1}})}function et(t){return R(I,t,!0)}function lr(t){return fn(t)}function fn(t,n=0){return R(I|Z|n,t,!0)}function sr(t,n=!0){return R(I|x,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=lt,e=i;ct(!0),V(null);try{n.call(null)}finally{ct(r),V(e)}}}function St(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rt(n[r])}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function _n(t){for(var n=t.first;n!==null;){var r=n.next;n.f&x||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&Jt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:nt(e);e.remove(),e=s}r=!0}qt(t,n&&!r),St(t),Y(t,0),m(t,q);var u=t.transitions;if(u!==null)for(const p of u)p.stop();Ft(t);var f=t.parent;f!==null&&f.first!==null&&Rt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Rt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function cn(t,n){var r=[];Nt(t,r,!0),vn(r,()=>{C(t),n&&n()})}function vn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Nt(t,n,r){if(!(t.f&F)){if(t.f^=F,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&ht)!==0||(e.f&x)!==0;Nt(e,n,s?r:!1),e=l}}}function ur(t){jt(t,!0)}function jt(t,n){if(t.f&F){N(t)&&L(t),t.f^=F;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&ht)!==0||(r.f&x)!==0;jt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let U=!1,Q=[];function Pt(){U=!1;const t=Q.slice();Q=[],Wt(t)}function ar(t){U||(U=!0,queueMicrotask(Pt)),Q.push(t)}function pn(){U&&Pt()}function or(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function hn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Yt=0,dn=1;let M=!1,B=Yt,j=!1,P=null,O=!1,lt=!1;function _t(t){O=t}function ct(t){lt=t}let T=[],D=0;let i=null;function V(t){i=t}let a=null;function G(t){a=t}let E=null;function yn(t){E=t}let v=null,y=0,g=null;function wn(t){g=t}let It=1,b=!1,o=null;function Lt(){return++It}function st(){return!K||o!==null&&o.l===null}function N(t){var u,f;var n=t.f;if(n&k)return!0;if(n&S){var r=t.deps,e=(n&A)!==0;if(r!==null){var l;if(n&H){for(l=0;l<r.length;l++)((u=r[l]).reactions??(u.reactions=[])).push(t);t.f^=H}for(l=0;l<r.length;l++){var s=r[l];if(N(s)&&At(s),e&&a!==null&&!b&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}(!e||a!==null&&!b)&&m(t,h)}return!1}function mn(t,n){for(var r=n;r!==null;){if(r.f&J)try{r.fn(t);return}catch{r.f^=J}r=r.parent}throw M=!1,t}function En(t){return(t.f&q)===0&&(t.parent===null||(t.parent.f&J)===0)}function W(t,n,r,e){if(M){if(r===null&&(M=!1),En(n))throw t;return}r!==null&&(M=!0);{mn(t,n);return}}function Mt(t){var at;var n=v,r=y,e=g,l=i,s=b,u=E,f=o,p=t.f;v=null,y=0,g=null,i=p&(x|$)?null:t,b=!O&&(p&A)!==0,E=null,o=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(Y(t,y),_!==null&&y>0)for(_.length=y+v.length,c=0;c<v.length;c++)_[y+c]=v[c];else t.deps=_=v;if(!b)for(c=y;c<_.length;c++)((at=_[c]).reactions??(at.reactions=[])).push(t)}else _!==null&&y<_.length&&(Y(t,y),_.length=y);return d}finally{v=n,y=r,g=e,i=l,b=s,E=u,o=f}}function xn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&w&&(v===null||!v.includes(n))&&(m(n,S),n.f&(A|H)||(n.f^=H),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)xn(t,r[e])}function L(t){var n=t.f;if(!(n&q)){m(t,h);var r=a,e=o;a=t;try{n&Z?_n(t):qt(t),St(t),Ft(t);var l=Mt(t);t.teardown=typeof l=="function"?l:null,t.version=It}catch(s){W(s,t,r,e||t.ctx)}finally{a=r}}}function Bt(){if(D>1e3){D=0;try{nn()}catch(t){if(P!==null)W(t,P,null);else throw t}}D++}function Ht(t){var n=t.length;if(n!==0){Bt();var r=O;O=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&h||(l.f^=h);var s=[];Ut(l,s),gn(s)}}finally{O=r}}}function gn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(q|F)))try{N(e)&&(L(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Rt(e):e.fn=null))}catch(l){W(l,e,null,e.ctx)}}}function kn(){if(j=!1,D>1001)return;const t=T;T=[],Ht(t),j||(D=0,P=null)}function z(t){B===Yt&&(j||(j=!0,queueMicrotask(kn))),P=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&($|x)){if(!(r&h))return;n.f^=h}}T.push(n)}function Ut(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&x)!==0,u=s&&(l&h)!==0,f=r.next;if(!u&&!(l&F))if(l&I){if(s)r.f^=h;else try{N(r)&&L(r)}catch(c){W(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&pt&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Ut(p,n)}function Vt(t){var n=B,r=T;try{Bt();const l=[];B=dn,T=l,j=!1,Ht(r);var e=t==null?void 0:t();return pn(),(T.length>0||l.length>0)&&Vt(),D=0,P=null,e}finally{B=n,T=r}}async function ir(){await Promise.resolve(),Vt()}function Gt(t){var _;var n=t.f,r=(n&w)!==0;if(r&&n&q){var e=Ct(t);return rt(t),e}if(i!==null){E!==null&&E.includes(t)&&rn();var l=i.deps;v===null&&l!==null&&l[y]===t?y++:v===null?v=[t]:v.push(t),g!==null&&a!==null&&a.f&h&&!(a.f&x)&&g.includes(t)&&(m(a,k),z(a))}else if(r&&t.deps===null)for(var s=t,u=s.parent,f=s;u!==null;)if(u.f&w){var p=u;f=p,u=p.parent}else{var d=u;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(s=t,N(s)&&At(s)),t.v}function Tn(t){const n=i;try{return i=null,t()}finally{i=n}}const bn=~(k|S|h);function m(t,n){t.f=t.f&bn|n}function fr(t){return ut().get(t)}function _r(t,n){return ut().set(t,n),n}function cr(t){return ut().has(t)}function ut(t){return o===null&&hn(),o.c??(o.c=new Map(Cn(o)||void 0))}function Cn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function vr(t,n=1){var r=Gt(t),e=n===1?r++:r--;return Et(t,r),e}function pr(t,n){var r={};for(var e in t)n.includes(e)||(r[e]=t[e]);return r}function hr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},K&&!n&&(o.l={s:null,u:null,r1:[],r2:tt(!1)})}function dr(t){const n=o;if(n!==null){const u=n.e;if(u!==null){var r=a,e=i;n.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];G(s.effect),V(s.reaction),Dt(s.fn)}}finally{G(r),V(e)}}o=n.p,n.m=!0}return{}}function yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(it in t)X(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&it in r&&X(r)}}}function X(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{X(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{qn as $,Kn as A,i as B,ar as C,ln as D,tt as E,nt as F,Dt as G,et as H,F as I,Tn as J,o as K,hn as L,K as M,Zn as N,yr as O,Qt as P,Wt as Q,_r as R,it as S,or as T,$t as U,Ln as V,Kt as W,ht as X,cr as Y,An as Z,Sn as _,dr as a,Bn as a0,ot as a1,Hn as a2,V as a3,G as a4,Fn as a5,Xn as a6,Tt as a7,Gn as a8,nr as a9,tr as aa,jn as ab,Mn as ac,Yn as ad,wt as ae,x as af,$ as ag,In as ah,vr as ai,Rn as aj,Z as ak,zt as al,ir as am,rr as an,er as ao,Vn as ap,Pn as aq,un as b,fr as c,Qn as d,pr as e,Wn as f,Gt as g,Un as h,Et as i,$n as j,fn as k,On as l,Dn as m,Nn as n,sr as o,hr as p,cn as q,ur as r,zn as s,lr as t,a as u,sn as v,Nt as w,Jn as x,vn as y,C as z};
