var on=Array.isArray,sn=Array.from,ln=Object.defineProperty,X=Object.getOwnPropertyDescriptor,jt=Object.getOwnPropertyDescriptors,an=Object.prototype,fn=Array.prototype,Mt=Object.getPrototypeOf;function _n(t){return typeof t=="function"}const cn=()=>{};function pn(t){return t()}function It(t){for(var n=0;n<t.length;n++)t[n]()}function vn(t,n,r=!1){return t===void 0?r?n():n:t}const E=2,st=4,O=8,lt=16,d=32,G=64,g=128,I=256,h=512,w=1024,q=2048,A=4096,b=8192,Lt=16384,it=32768,hn=65536,Pt=1<<18,Z=Symbol("$state"),dn=Symbol("");function at(t){return t===this.v}function Yt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ft(t){return!Yt(t,this.v)}function Bt(t){throw new Error("effect_in_teardown")}function Ht(){throw new Error("effect_in_unowned_derived")}function Ut(t){throw new Error("effect_orphan")}function Kt(){throw new Error("effect_update_depth_exceeded")}function yn(t){throw new Error("props_invalid_value")}function wn(){throw new Error("state_descriptors_fixed")}function mn(){throw new Error("state_prototype_fixed")}function $t(){throw new Error("state_unsafe_mutation")}function _t(t){return{f:0,v:t,reactions:null,equals:at,version:0}}function xn(t){var r;const n=_t(t);return n.equals=ft,i!==null&&i.l!==null&&((r=i.l).s??(r.s=[])).push(n),n}function ct(t,n){return f!==null&&K()&&f.f&E&&$t(),t.equals(n)||(t.v=n,t.version=Ct(),pt(t,w),K()&&_!==null&&_.f&h&&!(_.f&d)&&(c!==null&&c.includes(t)?(v(_,w),B(_)):y===null?Xt([t]):y.push(t))),n}function pt(t,n){var r=t.reactions;if(r!==null)for(var e=K(),u=r.length,o=0;o<u;o++){var s=r[o],l=s.f;l&w||!e&&s===_||(v(s,n),l&(h|g)&&(l&E?pt(s,q):B(s)))}}function vt(t){_===null&&f===null&&Ut(),f!==null&&f.f&g&&Ht(),V&&Bt()}function tt(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function D(t,n,r,e=!0){var u=(t&G)!==0,o=_,s={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|w,first:null,fn:n,last:null,next:null,parent:u?null:o,prev:null,teardown:null,transitions:null,version:0};if(r){var l=k;try{nt(!0),j(s),s.f|=Lt}catch(m){throw Y(s),m}finally{nt(l)}}else n!==null&&B(s);var a=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null;return!a&&!u&&e&&(o!==null&&tt(s,o),f!==null&&f.f&E&&tt(s,f)),s}function En(t){const n=D(O,null,!1);return v(n,h),n.teardown=t,n}function gn(t){vt();var n=_!==null&&(_.f&O)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push(t)}else{var e=ht(t);return e}}function Tn(t){return vt(),P(t)}function kn(t){const n=D(G,t,!0);return()=>{Y(n)}}function ht(t){return D(st,t,!1)}function Cn(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=P(()=>{t(),!e.ran&&(e.ran=!0,ct(r.l.r2,!0),rn(n))})}function An(){var t=i;P(()=>{if(Ft(t.l.r2)){for(var n of t.l.r1){var r=n.effect;F(r)&&j(r),n.ran=!1}t.l.r2.v=!1}})}function P(t){return D(O,t,!0)}function On(t){return P(t)}function qn(t,n=0){return D(O|lt|n,t,!0)}function bn(t,n=!0){return D(O|d,t,!0,n)}function dt(t){var n=t.teardown;if(n!==null){const r=V,e=f;rt(!0),et(null);try{n.call(null)}finally{rt(r),et(e)}}}function Y(t,n=!0){var r=!1;if((n||t.f&Pt)&&t.nodes_start!==null){for(var e=t.nodes_start,u=t.nodes_end;e!==null;){var o=e===u?null:J(e);e.remove(),e=o}r=!0}W(t,n&&!r),R(t,0),v(t,b);var s=t.transitions;if(s!==null)for(const a of s)a.stop();dt(t);var l=t.parent;l!==null&&t.f&d&&l.first!==null&&yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function yt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Dn(t,n){var r=[];wt(t,r,!0),Gt(r,()=>{Y(t),n&&n()})}function Gt(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var u of t)u.out(e)}else n()}function wt(t,n,r){if(!(t.f&A)){if(t.f^=A,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var u=e.next,o=(e.f&it)!==0||(e.f&d)!==0;wt(e,n,o?r:!1),e=u}}}function Fn(t){mt(t,!0)}function mt(t,n){if(t.f&A){t.f^=A,F(t)&&j(t);for(var r=t.first;r!==null;){var e=r.next,u=(r.f&it)!==0||(r.f&d)!==0;mt(r,u?n:!1),r=e}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&o.in()}}let L=!1,U=[];function xt(){L=!1;const t=U.slice();U=[],It(t)}function Sn(t){L||(L=!0,queueMicrotask(xt)),U.push(t)}function Vt(){L&&xt()}function Wt(t){let n=E|w;_===null&&(n|=g);const r={deps:null,deriveds:null,equals:at,f:n,first:null,fn:t,last:null,reactions:null,v:null,version:0};if(f!==null&&f.f&E){var e=f;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function Nn(t){const n=Wt(t);return n.equals=ft,n}function Et(t){W(t);var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)zt(n[r])}}function gt(t){var n;Et(t),n=At(t);var r=(T||t.f&g)&&t.deps!==null?q:h;v(t,r),t.equals(n)||(t.v=n,t.version=Ct())}function zt(t){Et(t),R(t,0),v(t,b),t.first=t.last=t.deps=t.reactions=t.fn=null}function Jt(t){throw new Error("lifecycle_outside_component")}const Tt=0,Qt=1;let M=Tt,N=!1,k=!1,V=!1;function nt(t){k=t}function rt(t){V=t}let x=[],C=0,f=null;function et(t){f=t}let _=null,c=null,p=0,y=null;function Xt(t){y=t}let kt=0,T=!1,i=null;function Ct(){return kt++}function K(){return i!==null&&i.l===null}function F(t){var s,l;var n=t.f;if(n&w)return!0;if(n&q){var r=t.deps,e=(n&g)!==0;if(r!==null){var u;if(n&I){for(u=0;u<r.length;u++)((s=r[u]).reactions??(s.reactions=[])).push(t);t.f^=I}for(u=0;u<r.length;u++){var o=r[u];if(F(o)&&gt(o),o.version>t.version)return!0;e&&!T&&!((l=o==null?void 0:o.reactions)!=null&&l.includes(t))&&(o.reactions??(o.reactions=[])).push(t)}}e||v(t,h)}return!1}function Zt(t,n,r){throw t}function At(t){var m;var n=c,r=p,e=y,u=f,o=T;c=null,p=0,y=null,f=t.f&(d|G)?null:t,T=!k&&(t.f&g)!==0;try{var s=(0,t.fn)(),l=t.deps;if(c!==null){var a;if(R(t,p),l!==null&&p>0)for(l.length=p+c.length,a=0;a<c.length;a++)l[p+a]=c[a];else t.deps=l=c;if(!T)for(a=p;a<l.length;a++)((m=l[a]).reactions??(m.reactions=[])).push(t)}else l!==null&&p<l.length&&(R(t,p),l.length=p);return s}finally{c=n,p=r,y=e,f=u,T=o}}function tn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var u=r.length-1;u===0?r=n.reactions=null:(r[e]=r[u],r.pop())}}r===null&&n.f&E&&(v(n,q),n.f&(g|I)||(n.f^=I),R(n,0))}function R(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)tn(t,r[e])}function W(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;Y(r,n),r=e}}function j(t){var n=t.f;if(!(n&b)){v(t,h);var r=t.ctx,e=_,u=i;_=t,i=r;try{n&lt||W(t),dt(t);var o=At(t);t.teardown=typeof o=="function"?o:null,t.version=kt}catch(s){Zt(s)}finally{_=e,i=u}}}function Ot(){C>1e3&&(C=0,Kt()),C++}function qt(t){var n=t.length;if(n!==0){Ot();var r=k;k=!0;try{for(var e=0;e<n;e++){var u=t[e];if(u.first===null&&!(u.f&d))ut([u]);else{var o=[];bt(u,o),ut(o)}}}finally{k=r}}}function ut(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(b|A))&&F(e)&&(j(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?yt(e):e.fn=null))}}function nn(){if(N=!1,C>1001)return;const t=x;x=[],qt(t),N||(C=0)}function B(t){M===Tt&&(N||(N=!0,queueMicrotask(nn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&d){if(!(r&h))return;v(n,q)}}x.push(n)}function bt(t,n){var r=t.first,e=[];t:for(;r!==null;){var u=r.f,o=(u&(b|A))===0,s=(u&d)!==0,l=(u&h)!==0,a=r.first;if(o&&(!s||!l)){if(s&&v(r,h),u&O){if(!s&&F(r)&&(j(r),a=r.first),a!==null){r=a;continue}}else if(u&st)if(s||l){if(a!==null){r=a;continue}}else e.push(r)}var m=r.next;if(m===null){let S=r.parent;for(;S!==null;){if(t===S)break t;var Q=S.next;if(Q!==null){r=Q;continue t}S=S.parent}}r=m}for(var H=0;H<e.length;H++)a=e[H],n.push(a),bt(a,n)}function Dt(t){var n=M,r=x;try{Ot();const u=[];M=Qt,x=u,N=!1,qt(r);var e=t==null?void 0:t();return Vt(),(x.length>0||u.length>0)&&Dt(),C=0,e}finally{M=n,x=r}}async function Rn(){await Promise.resolve(),Dt()}function Ft(t){var n=t.f;if(n&b)return t.v;if(f!==null){var r=f.deps;c===null&&r!==null&&r[p]===t?p++:c===null?c=[t]:c.push(t),y!==null&&_!==null&&_.f&h&&!(_.f&d)&&y.includes(t)&&(v(_,w),B(_))}if(n&E){var e=t;F(e)&&gt(e)}return t.v}function rn(t){const n=f;try{return f=null,t()}finally{f=n}}const en=~(w|q|h);function v(t,n){t.f=t.f&en|n}function jn(t){return z().get(t)}function Mn(t,n){return z().set(t,n),n}function In(t){return z().has(t)}function z(t){return i===null&&Jt(),i.c??(i.c=new Map(un(i)||void 0))}function un(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Ln(t,n=1){var r=+Ft(t);return ct(t,r+n),r}function Pn(t,n){var r={};for(var e in t)n.includes(e)||(r[e]=t[e]);return r}function Yn(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},n||(i.l={s:null,u:null,r1:[],r2:_t(!1)})}function Bn(t){const n=i;if(n!==null){const e=n.e;if(e!==null){n.e=null;for(var r=0;r<e.length;r++)ht(e[r])}i=n.p,n.m=!0}return{}}function Hn(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Z in t)$(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&Z in r&&$(r)}}}function $(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{$(t[e],n)}catch{}const r=Mt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=jt(r);for(let u in e){const o=e[u].get;if(o)try{o.call(t)}catch{}}}}}var ot,St,Nt;function Un(){if(ot===void 0){ot=window;var t=Element.prototype,n=Node.prototype;St=X(n,"firstChild").get,Nt=X(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function Kn(t=""){return document.createTextNode(t)}function Rt(t){return St.call(t)}function J(t){return Nt.call(t)}function $n(t){return Rt(t)}function Gn(t,n){{var r=Rt(t);return r instanceof Comment&&r.data===""?J(r):r}}function Vn(t,n=1,r=!1){let e=t;for(;n--;)e=J(e);return e}function Wn(t){t.textContent=""}export{ft as $,jt as A,En as B,xn as C,It as D,an as E,fn as F,wn as G,X as H,_ as I,mn as J,ln as K,dn as L,Kn as M,Rt as N,Un as O,sn as P,kn as Q,bn as R,Z as S,qn as T,Fn as U,Dn as V,it as W,Tn as X,pn as Y,yn as Z,hn as _,Bn as a,Ln as a0,_n as a1,Y as a2,In as a3,A as a4,wt as a5,Wn as a6,Gt as a7,J as a8,lt as a9,Lt as aa,Rn as ab,Cn as ac,An as ad,vn as ae,jn as b,Wt as c,Nn as d,Pn as e,Gn as f,Ft as g,_t as h,ct as i,$n as j,ht as k,i as l,Jt as m,cn as n,gn as o,Yn as p,Sn as q,P as r,Vn as s,On as t,rn as u,on as v,Mn as w,Hn as x,Yt as y,Mt as z};