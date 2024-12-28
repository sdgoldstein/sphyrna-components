import{i as z,b as $,a as e,t as _}from"./props-D_2D7U9r.js";import{p as C,f as p,g,a as D,s as l,d as b,n as I}from"./runtime-CtH2Mday.js";import{L as u}from"./Label-Ceppn5NU.js";import{d as J}from"./component-Ci2hy3zc.js";import{I as N}from"./Input-BHO07ObO.js";import{F as S,z as x}from"./Form-to6g2Mm7.js";import{c as W,s as w}from"./create-runtime-stories-BC3aFYSS.js";import"./tabs-trigger-BgMS1DRg.js";import"./index-5sCJj3sS.js";import"./this-DyLbBvFN.js";import"./index-client-CT_jFKxK.js";import"./FormElementErrorMessage-BePDgMYM.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";const y=(n,f,o=I)=>{S(n,{onsubmit:()=>{},children:(t,c)=>{var r=M(),s=p(r);u(s,{for:"name_input_id",children:(a,i)=>{var d=$("Name");e(a,d)},$$slots:{default:!0}});var m=l(s,2),h=b(()=>x.requiredString("Name"));N(m,{id:"name_input_id",name:"name_input_name",placeholder:"John Stevens",get schema(){return g(h)}}),e(t,r)},$$slots:{default:!0}})},k={component:u},{Story:v}=J();var M=_("<!> <!>",1),O=_("<!> <!>",1),R=_("<!> <!>",1);function E(n,f){C(f,!1),w(y),z();var o=R(),t=p(o);v(t,{name:"Default",parameters:{__svelteCsf:{rawCode:`<Form onsubmit={()=>{}}>
    <Label for="name_input_id">Name</Label>
    <Input
        id="name_input_id"
        name="name_input_name"
        placeholder="John Stevens"
        schema={zExtended.requiredString("Name")}
    />
</Form>`}}});var c=l(t,2);v(c,{name:"With Error",children:(r,s)=>{S(r,{onsubmit:()=>{},children:(m,h)=>{var a=O(),i=p(a);u(i,{for:"name_input_id",children:(F,T)=>{var P=$("Name");e(F,P)},$$slots:{default:!0}});var d=l(i,2),q=b(()=>x.requiredString("Name"));N(d,{id:"name_input_id",name:"name_input_name",placeholder:"John Stevens",get schema(){return g(q)},error:"Name is required"}),e(m,a)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={()=>{}}>
    <Label for="name_input_id">Name</Label>
    <Input
        id="name_input_id"
        name="name_input_name"
        placeholder="John Stevens"
        schema={zExtended.requiredString("Name")}
        error="Name is required"
    />
</Form>`}}}),e(n,o),D()}E.__docgen={version:3,name:"Label.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const L=W(E,k),re=["Default","WithError"],ae=L.Default,ne=L.WithError;export{ae as Default,ne as WithError,re as __namedExportsOrder,k as default};
