import{p as h,c as N,t as C,a as y,d as Z,e as D,f as P,b as G,v as K,r as U,i as X,s as H}from"./props-B4yo3oB_.js";import{b as J,f as q,s as o,t as Q,a as O,p as z,j as I,g as m,c as v,n as $,e as ee,d as te}from"./context-ClX-pJyV.js";import{D as re,a as ne,i as S,t as ae,g as ie,b as oe,c as le,s as se,d as de}from"./create-runtime-stories-BeEH6srk.js";import{F as me,S as ce,z as ue}from"./form-BLyow3pB.js";import{o as fe}from"./index-client-BPhf_3YG.js";import{F as pe}from"./FormElementErrorMessage-C2R3EqVE.js";import{L as ye}from"./Label-BML5sANs.js";import{B as _e}from"./Button-DCW4NWbt.js";import{F as ge}from"./Form-C9LQAe-1.js";import"./index-Cu4lwwaE.js";import"./index-CfOrKyLd.js";import"./use-id-45WlqWe6.js";import"./_commonjsHelpers-CqkleIqs.js";import"./button-Ceed8E_z.js";import"./svelte-element-Bj_YV-By.js";import"./this-CzUvW_rT.js";var he=C('<div class="flex flex-col"><!><span class="mb-2"></span></div>'),ve=(l,e,i,n,t,a)=>{e().clearErrors(n.name),t(void 0),D(i,P(e()));const r=document.getElementById(n.id);if(r===null)throw new Error("Could not find file element");a(r.files[0].name)},Ce=C('<!> <div class="flex gap-2 items-center"><input> <!></div> <input class="hidden" type="file">',1);function b(l,e){z(e,!0);const[i,n]=Z(),t=()=>N(_,"$formValidator",i);let a=h(e,"value",7),r=h(e,"colorVariant",3,re),s=h(e,"error",7),B=U(e,["$$slots","$$events","$$legacy","id","testid","name","placeholder","value","schema","colorVariant","dynamicColorTheme","error"]);const _=J(me);e.schema&&t().register(e.name,e.schema);let x=v(()=>s()?[new ce(s())]:t().getErrors(e.name));fe(()=>{const u=document.getElementById(e.id);if(u===null)throw new Error("Could not find file element");const f=u.closest("form");if(f===null)throw new Error("Could not find parent form element");f.method="POST",f.enctype="multipart/form-data"});let M=v(()=>oe(e.id,e.testid)),R=v(()=>ae("rounded-md w-full p-2 mb-2 border-2 border-surface-dark outline-none placeholder:text-surface-text-placeholder",ie("surface-lightest"),m(x).length>0&&"bg-error-lightest border-error text-error-text"));var k=Ce(),F=q(k);pe(F,{get errors(){return m(x)}});var E=o(F,2),w=I(E),L=()=>{t().clearErrors(e.name),s(void 0),D(_,P(t()))};let T;var W=o(w,2);ye(W,{get colorVariant(){return r()},get dynamicColorTheme(){return e.dynamicColorTheme},get for(){return e.id},children:(u,f)=>{var V=he(),j=I(V);_e(j,{get colorVariant(){return r()},get dynamicColorTheme(){return e.dynamicColorTheme},onclick:()=>{const p=document.getElementById(e.id);if(p===null)throw new Error("Could not find file element");p.click()},children:(p,Ee)=>{var Y=G("Choose File");y(p,Y)},$$slots:{default:!0}}),y(u,V)},$$slots:{default:!0}});var g=o(E,2);g.__change=[ve,t,_,e,s,a],Q(()=>{T=ne(w,T,{"data-testid":m(M),placeholder:e.placeholder,value:a(),class:m(R),...B,oninput:L,readonly:!0}),S(g,"id",e.id),S(g,"name",e.name)}),y(l,k),O(),n()}K(["change"]);b.__docgen={data:[{name:"name",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"placeholder",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"schema",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"ZodType<any, ZodTypeDef, any>"},static:!1,readonly:!1},{name:"error",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"testid",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"colorVariant",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"primary"'},{name:"dynamicColorTheme",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"DynamicTheme"},static:!1,readonly:!1}],name:"FileInput.svelte"};const be=(l,e,i=$)=>{let n=()=>ee(e==null?void 0:e(),[]);ge(l,{onsubmit:()=>{},children:(t,a)=>{const r=te(()=>ue.requiredString("file"));b(t,H({placeholder:"",id:"name_file_input_id",name:"name_file_input_name",get schema(){return m(r)}},n))},$$slots:{default:!0}})},xe={component:b,args:{}},{Story:d}=de(),ke={colorThemes:new Map([["foo",{coreColor:"#900000",textColor:"#000020"}]])};var Fe=C("<!> <!> <!> <!> <!>",1);function A(l,e){z(e,!1),se(be),X();var i=Fe(),n=q(i);d(n,{name:"Default",parameters:{__svelteCsf:{rawCode:`<Form onsubmit={() => {}}>
    <FileInput
        placeholder=""
        id="name_file_input_id"
        name="name_file_input_name"
        schema={zExtended.requiredString("file")}
        {...args}
    />
</Form>`}}});var t=o(n,2);d(t,{name:"Primary Color Variant",args:{colorVariant:"primary"},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={() => {}}>
    <FileInput
        placeholder=""
        id="name_file_input_id"
        name="name_file_input_name"
        schema={zExtended.requiredString("file")}
        {...args}
    />
</Form>`}}});var a=o(t,2);d(a,{name:"Secondary Color Variant",args:{colorVariant:"secondary"},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={() => {}}>
    <FileInput
        placeholder=""
        id="name_file_input_id"
        name="name_file_input_name"
        schema={zExtended.requiredString("file")}
        {...args}
    />
</Form>`}}});var r=o(a,2);d(r,{name:"Dynamic Color Theme",args:{colorVariant:"foo",dynamicColorTheme:ke},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={() => {}}>
    <FileInput
        placeholder=""
        id="name_file_input_id"
        name="name_file_input_name"
        schema={zExtended.requiredString("file")}
        {...args}
    />
</Form>`}}});var s=o(r,2);d(s,{name:"With Error",args:{error:"You messed up!"},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={() => {}}>
    <FileInput
        placeholder=""
        id="name_file_input_id"
        name="name_file_input_name"
        schema={zExtended.requiredString("file")}
        {...args}
    />
</Form>`}}}),y(l,i),O()}A.__docgen={version:3,name:"FileInput.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const c=le(A,xe),je=["Default","PrimaryColorVariant","SecondaryColorVariant","DynamicColorTheme","WithError"],Ye=c.Default,Ne=c.PrimaryColorVariant,Ze=c.SecondaryColorVariant,Ge=c.DynamicColorTheme,Ke=c.WithError;export{Ye as Default,Ge as DynamicColorTheme,Ne as PrimaryColorVariant,Ze as SecondaryColorVariant,Ke as WithError,je as __namedExportsOrder,xe as default};
