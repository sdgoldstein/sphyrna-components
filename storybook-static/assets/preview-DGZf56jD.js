import{v as D}from"./v4-CQkTLCs1.js";import{o as T}from"./index-client-l9-BPfpq.js";import{s as b,g as I}from"./operations-BG71wWEw.js";const{addons:j}=__STORYBOOK_MODULE_PREVIEW_API__,{global:w}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:x}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var k="storybook/actions",V=`${k}/action-event`,B={depth:10,clearOnStoryChange:!0,limit:50},L=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:L(t,n)},C=e=>!!(typeof e=="object"&&e&&L(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),N=e=>{if(C(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(r.constructor.prototype)}),n}return e},F=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?D():Date.now().toString(36)+Math.random().toString(36).substring(2);function A(e,n={}){let t={...B,...n},r=function(...g){var E,i;if(n.implicit){let c=(E="__STORYBOOK_PREVIEW__"in w?w.__STORYBOOK_PREVIEW__:void 0)==null?void 0:E.storyRenders.find(o=>o.phase==="playing"||o.phase==="rendering");if(c){let o=!((i=window==null?void 0:window.FEATURES)!=null&&i.disallowImplicitActionsInRenderV8),s=new x({phase:c.phase,name:e,deprecated:o});if(o)console.warn(s);else throw s}}let f=j.getChannel(),u=F(),_=5,d=g.map(N),O=g.length>1?d:d[0],h={id:u,count:0,data:{name:e,args:O},options:{...t,maxDepth:_+(t.depth||3),allowFunction:t.allowFunction||!1}};f.emit(V,h)};return r.isAction=!0,r.implicit=n.implicit,r}function M(e){b("after-navigate-args",e)}function y(e){return[{subscribe(n){let t=I(e);return n(t),()=>{}}},n=>{b(e,n)}]}var[q,P]=y("page-ctx"),[J,U]=y("navigating-ctx"),[W,Y]=y("updated-ctx");W.check=()=>{};var z=e=>typeof e=="function"?{callback:e,asRegex:!1}:e,Q=[(e,n)=>{var r,g,f,u,_;let t=((r=n.parameters)==null?void 0:r.sveltekit_experimental)??{};return P((g=t==null?void 0:t.stores)==null?void 0:g.page),U((f=t==null?void 0:t.stores)==null?void 0:f.navigating),Y((u=t==null?void 0:t.stores)==null?void 0:u.updated),M((_=t==null?void 0:t.navigation)==null?void 0:_.afterNavigate),T(()=>{let d=i=>{let c=i.composedPath().findLast(o=>o instanceof HTMLElement&&o.tagName==="A");if(c&&c instanceof HTMLAnchorElement){let o=c.getAttribute("href");if(!o)return;i.preventDefault();let s=()=>A("navigate")(o,i);if(!t.hrefs){s();return}let a=!0;Object.entries(t.hrefs).forEach(([l,v])=>{let{callback:p,asRegex:m}=z(v);(m?new RegExp(l).test(o):o===l)&&(a=!1,p==null||p(o,i))}),a&&s()}};function O(i,c,o){let s=[];return c.forEach(a=>{var v;let l=((v=t[i])==null?void 0:v[a])&&t[i][a]instanceof Function;if(l||o){let p=({detail:R=[]})=>{let S=Array.isArray(R)?R:[];(l?t[i][a]:A(a))(...S)},m=`storybook:${a}`;s.push({eventType:m,listener:p}),window.addEventListener(m,p)}}),()=>{s.forEach(({eventType:a,listener:l})=>{window.removeEventListener(a,l)})}}let h=O("navigation",["goto","invalidate","invalidateAll","pushState","replaceState"],!0),E=O("forms",["enhance"]);return window.addEventListener("click",d),()=>{window.removeEventListener("click",d),h(),E()}}),e()}];export{Q as decorators};
