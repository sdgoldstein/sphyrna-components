import{v as S}from"./v4-CQkTLCs1.js";import{o as x}from"./index-client-CT_jFKxK.js";import{R as A,c as T}from"./runtime-CtH2Mday.js";var j=Object.defineProperty,I=(e,n)=>{for(var t in n)j(e,t,{get:n[t],enumerable:!0})};const{addons:k}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:V}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:w}=__STORYBOOK_MODULE_GLOBAL__;var B="storybook/actions",C=`${B}/action-event`,M={depth:10,clearOnStoryChange:!0,limit:50},D=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:D(t,n)},N=e=>!!(typeof e=="object"&&e&&D(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),P=e=>{if(N(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(r.constructor.prototype)}),n}return e},F=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?S():Date.now().toString(36)+Math.random().toString(36).substring(2);function b(e,n={}){let t={...M,...n},r=function(...g){var O,i;if(n.implicit){let c=(O="__STORYBOOK_PREVIEW__"in w?w.__STORYBOOK_PREVIEW__:void 0)==null?void 0:O.storyRenders.find(o=>o.phase==="playing"||o.phase==="rendering");if(c){let o=!((i=window==null?void 0:window.FEATURES)!=null&&i.disallowImplicitActionsInRenderV8),s=new V({phase:c.phase,name:e,deprecated:o});if(o)console.warn(s);else throw s}}let f=k.getChannel(),u=F(),_=5,d=g.map(P),v=g.length>1?d:d[0],h={id:u,count:0,data:{name:e,args:v},options:{...t,maxDepth:_+(t.depth||3),allowFunction:t.allowFunction||!1}};f.emit(C,h)};return r.isAction=!0,r.implicit=n.implicit,r}var U={};I(U,{decorators:()=>J});function W(e){A("after-navigate-args",e)}function y(e){return[{subscribe(n){let t=T(e);return n(t),()=>{}}},n=>{A(e,n)}]}var[K,Y]=y("page-ctx"),[tt,z]=y("navigating-ctx"),[H,$]=y("updated-ctx");H.check=()=>{};var G=e=>typeof e=="function"?{callback:e,asRegex:!1}:e,q=(e,n)=>{var r,g,f,u,_;let t=((r=n.parameters)==null?void 0:r.sveltekit_experimental)??{};return Y((g=t==null?void 0:t.stores)==null?void 0:g.page),z((f=t==null?void 0:t.stores)==null?void 0:f.navigating),$((u=t==null?void 0:t.stores)==null?void 0:u.updated),W((_=t==null?void 0:t.navigation)==null?void 0:_.afterNavigate),x(()=>{let d=i=>{let c=i.composedPath().findLast(o=>o instanceof HTMLElement&&o.tagName==="A");if(c&&c instanceof HTMLAnchorElement){let o=c.getAttribute("href");if(!o)return;i.preventDefault();let s=()=>b("navigate")(o,i);if(!t.hrefs){s();return}let a=!0;Object.entries(t.hrefs).forEach(([p,E])=>{let{callback:l,asRegex:m}=G(E);(m?new RegExp(p).test(o):o===p)&&(a=!1,l==null||l(o,i))}),a&&s()}};function v(i,c,o){let s=[];return c.forEach(a=>{var E;let p=((E=t[i])==null?void 0:E[a])&&t[i][a]instanceof Function;if(p||o){let l=({detail:R=[]})=>{let L=Array.isArray(R)?R:[];(p?t[i][a]:b(a))(...L)},m=`storybook:${a}`;s.push({eventType:m,listener:l}),window.addEventListener(m,l)}}),()=>{s.forEach(({eventType:a,listener:p})=>{window.removeEventListener(a,p)})}}let h=v("navigation",["goto","invalidate","invalidateAll","pushState","replaceState"],!0),O=v("forms",["enhance"]);return window.addEventListener("click",d),()=>{window.removeEventListener("click",d),h(),O()}}),e()},J=[q];export{J as decorators};
