import{i as h,b as r,a as o,t as x}from"./props-nMqGelTL.js";import{p as $,f as v,a as F,s as M}from"./runtime-CUu3ZF3c.js";import{B as O}from"./Button-Qnd_y5Gm.js";import{F as p}from"./FlexModal-ByHaQGyq.js";import{d as g}from"./theme-SAgvz43w.js";import{c as B}from"./create-runtime-stories-DgmlGvBM.js";import"./tabs-trigger-BzSeHmyr.js";import"./index-CoolVITi.js";import"./this-Tz2v2pVh.js";import"./index-client-CcKEzhO2.js";import"./Icon-Dke-KxkT.js";import"./each-5rBtr7Jv.js";import"./hydration-C_mtSyjW.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";const C={component:p},{Story:D}=g();let n=!1;var b=x("<!> <!>",1);function d(m,f){$(f,!1),h(),D(m,{name:"Default",children:(u,y)=>{var a=b(),s=v(a);O(s,{onclick:()=>{n=!0},children:(l,_)=>{var i=r("Open Modal");o(l,i)},$$slots:{default:!0}});var c=M(s,2);p(c,{id:"flex_modal_el_id",get open(){return n},set open(e){n=e},header:e=>{var t=r("Header");o(e,t)},children:e=>{var t=r("Children");o(e,t)},footer:e=>{var t=r("Footer");o(e,t)},$$slots:{header:!0,default:!0,footer:!0},$$legacy:!0}),o(u,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={() => {
    defaultOpen = true;
  }}>Open Modal</Button
>
<FlexModal
  id="flex_modal_el_id"
  bind:open={defaultOpen}>
  {#snippet header()}
  Header
{/snippet} 
{#snippet children()}
  Children
{/snippet} 
{#snippet footer()}
  Footer
{/snippet}   
 </FlexModal>`}}}),F()}d.__docgen={version:3,name:"FlexModal.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const k=B(d,C),N=["Default"],Q=k.Default;export{Q as Default,N as __namedExportsOrder,C as default};
