import{s as V,c as S,a as n,r as w,p as C,t as f,e as I,b as h,i as L}from"./props-DI9QN1PF.js";import{p as b,f as p,a as g,t as N,s as v,g as q,d as z}from"./operations-WN-Pn-cw.js";import{L as E}from"./Label-D71c5-2I.js";import{s as y,d as F,c as J}from"./create-runtime-stories-CZUSeWpo.js";import{F as R,I as j,z as A}from"./Form-uKehJ8j0.js";import{B as $}from"./Button-2HGxFW1a.js";import{M as G}from"./Modal-DwoHup1q.js";import"./label-13yRoTQj.js";import"./theme-CwoQUi83.js";import"./this-CShDlAgm.js";import"./index-client-yYWQBIps.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./FlexModal-XXCzVCE8.js";function x(r,e){b(e,!0);let l=w(e,["$$slots","$$events","$$legacy","colorVariant","dynamicColorTheme","children"]);$(r,V({type:"submit",get colorVariant(){return e.colorVariant},get dynamicColorTheme(){return e.dynamicColorTheme}},()=>l,{children:(s,m)=>{var t=S(),i=p(t);y(i,()=>e.children),n(s,t)},$$slots:{default:!0}})),g()}x.__docgen={keywords:[],data:[],name:"SubmitButton.svelte"};function M(r,e){let l=C(e,"colorVariant",3,"surface-dark");$(r,{get colorVariant(){return l()},get dynamicColorTheme(){return e.dynamicColorTheme},classOverride:"border-surface-darkest border",get oncancel(){return e.oncancel},children:(s,m)=>{var t=f("Cancel");n(s,t)},$$slots:{default:!0}})}M.__docgen={version:3,name:"CancelButton.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var H=h("<!> <!>",1);function B(r,e){b(e,!0);function l(){s(!1)}let s=C(e,"open",15);G(r,{get title(){return e.title},get open(){return s()},set open(t){s(t)},footer:t=>{var i=H(),d=p(i);x(d,{form:"submit_cancel_form",children:(a,u)=>{var c=f();N(()=>I(c,e.actionButtonText)),n(a,c)},$$slots:{default:!0}});var o=v(d,2);M(o,{oncancel:l}),n(t,i)},children:(t,i)=>{R(t,{id:"submit_cancel_form",get onsubmit(){return e.onsubmit},children:(d,o)=>{var a=S(),u=p(a);y(u,()=>e.children),n(d,a)},$$slots:{default:!0}})},$$slots:{default:!0}}),g()}B.__docgen={version:3,name:"SubmitCancelModal.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var K=h("<!> <!>",1),Q=h("<!> <!>",1);const{Story:U,meta:W}=F({});let _=!1;function X(r){}function P(r,e){b(e,!1),L(),U(r,{name:"Default",children:(l,s)=>{var m=Q(),t=p(m);$(t,{onclick:()=>{_=!0},children:(d,o)=>{var a=f("Open Modal");n(d,a)},$$slots:{default:!0}});var i=v(t,2);B(i,{get open(){return _},set open(o){_=o},actionButtonText:"Save It!",onsubmit:X,title:o=>{var a=f("Submit Modal Default Story");n(o,a)},children:(o,a)=>{var u=K(),c=p(u);E(c,{for:"name_input_id",children:(D,Z)=>{var O=f("Name");n(D,O)},$$slots:{default:!0}});var k=v(c,2),T=z(()=>A.requiredString("Name"));j(k,{id:"name_input_id",name:"name_input_name",placeholder:"John Stevens",get schema(){return q(T)}}),n(o,u)},$$slots:{default:!0},$$legacy:!0}),n(l,m)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Button
    onclick={() => {
        defaultOpen = true;
    }}>Open Modal</Button
>
<SubmitCancelModal
    bind:open={defaultOpen}
    actionButtonText="Save It!"
    onsubmit={handleSubmit}
>
    {#snippet title()}
        Submit Modal Default Story
    {/snippet}
    <Label for="name_input_id">Name</Label>
    <Input
        id="name_input_id"
        name="name_input_name"
        placeholder="John Stevens"
        schema={zExtended.requiredString("Name")}
    />
</SubmitCancelModal>`}}}),g()}P.__docgen={version:3,name:"SubmitCancelModel.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Y=J(P,W),pe=["Default"],_e=Y.Default;export{_e as Default,pe as __namedExportsOrder,W as default};
