import{i as _,t as n,a as o,b as v}from"./props-DI9QN1PF.js";import{p as M,f as $,a as h,s as x}from"./operations-WN-Pn-cw.js";import{M as O}from"./Modal-DwoHup1q.js";import{B as g}from"./Button-2HGxFW1a.js";import{d as B,c as C}from"./create-runtime-stories-CZUSeWpo.js";import"./FlexModal-XXCzVCE8.js";import"./label-13yRoTQj.js";import"./theme-CwoQUi83.js";import"./this-CShDlAgm.js";import"./index-client-yYWQBIps.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";var D=v("<!> <!>",1);const{Story:b,meta:k}=B({});let r=!1;function p(d,m){M(m,!1),_(),b(d,{name:"Default",children:(f,w)=>{var s=D(),a=$(s);g(a,{onclick:()=>{r=!0},children:(i,u)=>{var l=n("Open Modal");o(i,l)},$$slots:{default:!0}});var c=x(a,2);O(c,{get open(){return r},set open(t){r=t},title:t=>{var e=n("Modal Title");o(t,e)},children:t=>{var e=n("Children");o(t,e)},footer:t=>{var e=n("Footer");o(t,e)},$$legacy:!0}),o(f,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
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
 </Modal>`}}}),h()}p.__docgen={version:3,name:"Modal.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const y=C(p,k),I=["Default"],J=y.Default;export{J as Default,I as __namedExportsOrder,k as default};
