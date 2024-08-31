import{i as _,t as n,a as o,b as h}from"./props-DI9QN1PF.js";import{p as v,f as x,a as $,s as F}from"./operations-WN-Pn-cw.js";import{B as M}from"./Button-2HGxFW1a.js";import{F as O}from"./FlexModal-XXCzVCE8.js";import{d as g,c as B}from"./create-runtime-stories-CZUSeWpo.js";import"./label-13yRoTQj.js";import"./theme-CwoQUi83.js";import"./this-CShDlAgm.js";import"./index-client-yYWQBIps.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";var C=h("<!> <!>",1);const{Story:D,meta:b}=g({});let r=!1;function i(d,f){v(f,!1),_(),D(d,{name:"Default",children:(m,y)=>{var a=C(),s=x(a);M(s,{onclick:()=>{r=!0},children:(l,u)=>{var p=n("Open Modal");o(l,p)},$$slots:{default:!0}});var c=F(s,2);O(c,{get open(){return r},set open(e){r=e},header:e=>{var t=n("Header");o(e,t)},children:e=>{var t=n("Children");o(e,t)},footer:e=>{var t=n("Footer");o(e,t)},$$legacy:!0}),o(m,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
  onclick={() => {
    defaultOpen = true;
  }}>Open Modal</Button
>
<FlexModal
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
 </FlexModal>`}}}),$()}i.__docgen={version:3,name:"FlexModal.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const k=B(i,b),I=["Default"],J=k.Default;export{J as Default,I as __namedExportsOrder,b as default};
