import{i as $,b as r,a as o,t as v}from"./props-nMqGelTL.js";import{p as M,f as h,a as x,s as O}from"./runtime-CUu3ZF3c.js";import{M as p}from"./Modal-hRJiJXlW.js";import{B as g}from"./Button-Qnd_y5Gm.js";import{d as B}from"./theme-SAgvz43w.js";import{c as C}from"./create-runtime-stories-DgmlGvBM.js";import"./FlexModal-ByHaQGyq.js";import"./tabs-trigger-BzSeHmyr.js";import"./index-CoolVITi.js";import"./this-Tz2v2pVh.js";import"./index-client-CcKEzhO2.js";import"./Icon-Dke-KxkT.js";import"./each-5rBtr7Jv.js";import"./hydration-C_mtSyjW.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";const D={component:p},{Story:b}=B();let n=!1;var k=v("<!> <!>",1);function d(m,f){M(f,!1),$(),b(m,{name:"Default",children:(u,w)=>{var s=k(),a=h(s);g(a,{onclick:()=>{n=!0},children:(i,_)=>{var l=r("Open Modal");o(i,l)},$$slots:{default:!0}});var c=O(a,2);p(c,{get open(){return n},set open(t){n=t},title:t=>{var e=r("Modal Title");o(t,e)},children:t=>{var e=r("Children");o(t,e)},footer:t=>{var e=r("Footer");o(t,e)},$$slots:{title:!0,default:!0,footer:!0},$$legacy:!0}),o(u,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={() => {
    defaultOpen = true;
  }}>Open Modal</Button
>
<Modal
  bind:open={defaultOpen}>
  {#snippet title()}
  Modal Title
{/snippet} 
{#snippet children()}
  Children
{/snippet} 
{#snippet footer()}
  Footer
{/snippet}   
 </Modal>`}}}),x()}d.__docgen={version:3,name:"Modal.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const y=C(d,D),N=["Default"],Q=y.Default;export{Q as Default,N as __namedExportsOrder,D as default};
