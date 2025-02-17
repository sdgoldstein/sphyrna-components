import{i as h,t as v,b as r,a as o}from"./props-B4yo3oB_.js";import{p as $,f as M,s as x,a as O}from"./context-ClX-pJyV.js";import{M as l}from"./Modal-C1ZdwyNU.js";import{B as g}from"./Button-DCW4NWbt.js";import{c as B,d as C}from"./create-runtime-stories-BeEH6srk.js";import"./FlexModal-B1L5fw1e.js";import"./use-id-45WlqWe6.js";import"./_commonjsHelpers-CqkleIqs.js";import"./kbd-constants-DS5mc9Pr.js";import"./noop-Bv_UqmjJ.js";import"./Icon-COOrz9i5.js";import"./each-Dd2ULguY.js";import"./hydration-C_mtSyjW.js";import"./svelte-element-Bj_YV-By.js";import"./scroll-lock-Gug9plIs.js";import"./map-ClooQ1aQ.js";import"./button-Ceed8E_z.js";import"./this-CzUvW_rT.js";import"./index-Cu4lwwaE.js";import"./index-CfOrKyLd.js";const D={component:l},{Story:T}=C();let n=!1;var b=v("<!> <!>",1);function d(m,c){$(c,!1),h(),T(m,{name:"Default",children:(f,y)=>{var s=b(),i=M(s);g(i,{onclick:()=>{n=!0},children:(p,_)=>{var a=r("Open Modal");o(p,a)},$$slots:{default:!0}});var u=x(i,2);l(u,{get open(){return n},set open(t){n=t},title:t=>{var e=r("Modal Title");o(t,e)},description:t=>{var e=r("This is the model description");o(t,e)},children:t=>{var e=r("Children");o(t,e)},footer:t=>{var e=r("Footer");o(t,e)},$$slots:{title:!0,description:!0,default:!0,footer:!0},$$legacy:!0}),o(f,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={() => {
    defaultOpen = true;
  }}>Open Modal</Button
>
<Modal bind:open={defaultOpen}>
  {#snippet title()}
    Modal Title
  {/snippet}
  {#snippet description()}
    This is the model description
  {/snippet}
  {#snippet children()}
    Children
  {/snippet}
  {#snippet footer()}
    Footer
  {/snippet}
</Modal>`}}}),O()}d.__docgen={version:3,name:"Modal.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const k=B(d,D),X=["Default"],Y=k.Default;export{Y as Default,X as __namedExportsOrder,D as default};
