import{i as _,b as n,a as o,t as h}from"./props-9-rJBpBe.js";import{p as v,f as x,a as $,s as F}from"./operations-Bwi65NFR.js";import{B as M}from"./Button-B0EMsS2a.js";import{F as O}from"./FlexModal-yt7Oubj-.js";import{d as g,c as B}from"./create-runtime-stories-CKaCVpQ3.js";import"./select-value-CzpO-uuJ.js";import"./theme-jP5gZvnJ.js";import"./this-xJIcOT7E.js";import"./index-client-i7eQDta5.js";import"./Icon-D_AiE4fS.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";var C=h("<!> <!>",1);const{Story:D,meta:b}=g({});let r=!1;function i(d,m){v(m,!1),_(),D(d,{name:"Default",children:(f,y)=>{var a=C(),s=x(a);M(s,{onclick:()=>{r=!0},children:(l,u)=>{var p=n("Open Modal");o(l,p)},$$slots:{default:!0}});var c=F(s,2);O(c,{get open(){return r},set open(e){r=e},header:e=>{var t=n("Header");o(e,t)},children:e=>{var t=n("Children");o(e,t)},footer:e=>{var t=n("Footer");o(e,t)},$$legacy:!0}),o(f,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
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
 </FlexModal>`}}}),$()}i.__docgen={version:3,name:"FlexModal.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const k=B(i,b),J=["Default"],K=k.Default;export{K as Default,J as __namedExportsOrder,b as default};
