import{i as z,t as _,a as e,b as $}from"./props-B4yo3oB_.js";import{p as C,f as p,s as l,g,d as b,a as D,n as I}from"./context-ClX-pJyV.js";import{L as u}from"./Label-BML5sANs.js";import{c as J,s as W,d as w}from"./create-runtime-stories-BeEH6srk.js";import{I as x}from"./Input-DVgEh5V8.js";import{F as N}from"./Form-C9LQAe-1.js";import{z as S}from"./form-BLyow3pB.js";import"./use-id-45WlqWe6.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Cu4lwwaE.js";import"./index-CfOrKyLd.js";import"./FormElementErrorMessage-C2R3EqVE.js";const y=(a,f,o=I)=>{N(a,{onsubmit:()=>{},children:(t,c)=>{var r=M(),s=p(r);u(s,{for:"name_input_id",children:(n,m)=>{var d=$("Name");e(n,d)},$$slots:{default:!0}});var i=l(s,2);const h=b(()=>S.requiredString("Name"));x(i,{id:"name_input_id",name:"name_input_name",placeholder:"John Stevens",get schema(){return g(h)}}),e(t,r)},$$slots:{default:!0}})},k={component:u},{Story:v}=w();var M=_("<!> <!>",1),O=_("<!> <!>",1),R=_("<!> <!>",1);function E(a,f){C(f,!1),W(y),z();var o=R(),t=p(o);v(t,{name:"Default",parameters:{__svelteCsf:{rawCode:`<Form onsubmit={()=>{}}>
    <Label for="name_input_id">Name</Label>
    <Input
        id="name_input_id"
        name="name_input_name"
        placeholder="John Stevens"
        schema={zExtended.requiredString("Name")}
    />
</Form>`}}});var c=l(t,2);v(c,{name:"With Error",children:(r,s)=>{N(r,{onsubmit:()=>{},children:(i,h)=>{var n=O(),m=p(n);u(m,{for:"name_input_id",children:(F,T)=>{var P=$("Name");e(F,P)},$$slots:{default:!0}});var d=l(m,2);const q=b(()=>S.requiredString("Name"));x(d,{id:"name_input_id",name:"name_input_name",placeholder:"John Stevens",get schema(){return g(q)},error:"Name is required"}),e(i,n)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={()=>{}}>
    <Label for="name_input_id">Name</Label>
    <Input
        id="name_input_id"
        name="name_input_name"
        placeholder="John Stevens"
        schema={zExtended.requiredString("Name")}
        error="Name is required"
    />
</Form>`}}}),e(a,o),D()}E.__docgen={version:3,name:"Label.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const L=J(E,k),ee=["Default","WithError"],te=L.Default,re=L.WithError;export{te as Default,re as WithError,ee as __namedExportsOrder,k as default};
