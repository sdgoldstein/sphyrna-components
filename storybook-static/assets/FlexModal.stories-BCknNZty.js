import{i as h,t as x,b as r,a as o}from"./props-B4yo3oB_.js";import{p as $,f as v,s as F,a as M}from"./context-ClX-pJyV.js";import{B as O}from"./Button-DCW4NWbt.js";import{F as p}from"./FlexModal-B1L5fw1e.js";import{c as g,d as B}from"./create-runtime-stories-BeEH6srk.js";import"./button-Ceed8E_z.js";import"./svelte-element-Bj_YV-By.js";import"./this-CzUvW_rT.js";import"./use-id-45WlqWe6.js";import"./_commonjsHelpers-CqkleIqs.js";import"./kbd-constants-DS5mc9Pr.js";import"./noop-Bv_UqmjJ.js";import"./Icon-COOrz9i5.js";import"./each-Dd2ULguY.js";import"./hydration-C_mtSyjW.js";import"./scroll-lock-Gug9plIs.js";import"./map-ClooQ1aQ.js";import"./index-Cu4lwwaE.js";import"./index-CfOrKyLd.js";const C={component:p},{Story:D}=B();let n=!1;var b=x("<!> <!>",1);function d(m,f){$(f,!1),h(),D(m,{name:"Default",children:(u,y)=>{var a=b(),s=v(a);O(s,{onclick:()=>{n=!0},children:(i,_)=>{var l=r("Open Modal");o(i,l)},$$slots:{default:!0}});var c=F(s,2);p(c,{id:"flex_modal_el_id",get open(){return n},set open(e){n=e},header:e=>{var t=r("Header");o(e,t)},children:e=>{var t=r("Children");o(e,t)},footer:e=>{var t=r("Footer");o(e,t)},$$slots:{header:!0,default:!0,footer:!0},$$legacy:!0}),o(u,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={() => {
    defaultOpen = true;
  }}>Open Modal</Button
>
<FlexModal id="flex_modal_el_id" bind:open={defaultOpen}>
  {#snippet header()}
    Header
  {/snippet}
  {#snippet children()}
    Children
  {/snippet}
  {#snippet footer()}
    Footer
  {/snippet}
</FlexModal>`}}}),M()}d.__docgen={version:3,name:"FlexModal.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const k=g(d,C),V=["Default"],W=k.Default;export{W as Default,V as __namedExportsOrder,C as default};
