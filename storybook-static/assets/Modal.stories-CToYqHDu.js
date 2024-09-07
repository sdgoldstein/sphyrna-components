import{i as _,b as n,a as o,t as v}from"./props-9-rJBpBe.js";import{p as M,f as $,a as h,s as x}from"./operations-Bwi65NFR.js";import{M as O}from"./Modal-DO4eM4oC.js";import{B as g}from"./Button-B0EMsS2a.js";import{d as B,c as C}from"./create-runtime-stories-CKaCVpQ3.js";import"./FlexModal-yt7Oubj-.js";import"./select-value-CzpO-uuJ.js";import"./theme-jP5gZvnJ.js";import"./this-xJIcOT7E.js";import"./index-client-i7eQDta5.js";import"./Icon-D_AiE4fS.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";var D=v("<!> <!>",1);const{Story:b,meta:k}=B({});let r=!1;function p(d,m){M(m,!1),_(),b(d,{name:"Default",children:(f,w)=>{var s=D(),a=$(s);g(a,{onclick:()=>{r=!0},children:(i,u)=>{var l=n("Open Modal");o(i,l)},$$slots:{default:!0}});var c=x(a,2);O(c,{get open(){return r},set open(t){r=t},title:t=>{var e=n("Modal Title");o(t,e)},children:t=>{var e=n("Children");o(t,e)},footer:t=>{var e=n("Footer");o(t,e)},$$legacy:!0}),o(f,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
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
 </Modal>`}}}),h()}p.__docgen={version:3,name:"Modal.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const y=C(p,k),J=["Default"],K=y.Default;export{K as Default,J as __namedExportsOrder,k as default};
