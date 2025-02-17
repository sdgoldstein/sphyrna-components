import{i as c,t as h,a as f,s as C}from"./props-B4yo3oB_.js";import{p as g,f as S,s as a,a as v,n as y,e as V,g as F,d as x}from"./context-ClX-pJyV.js";import{c as E,s as I,d as b}from"./create-runtime-stories-BeEH6srk.js";import{I as l}from"./Input-DVgEh5V8.js";import{F as q}from"./Form-C9LQAe-1.js";import{z as w}from"./form-BLyow3pB.js";import"./index-Cu4lwwaE.js";import"./index-CfOrKyLd.js";import"./FormElementErrorMessage-C2R3EqVE.js";const z=(s,r,i=y)=>{let o=()=>V(r==null?void 0:r(),[]);q(s,{onsubmit:()=>{},children:(t,d)=>{const m=x(()=>w.requiredString("Name"));l(t,C({placeholder:"John Smith",id:"name_input_id",name:"name_input_name",get schema(){return F(m)}},o))},$$slots:{default:!0}})},D={component:l,args:{}},{Story:e}=b(),W={colorThemes:new Map([["foo",{coreColor:"#900000",textColor:"#000020"}]])};var J=h("<!> <!> <!> <!> <!> <!>",1);function u(s,r){g(r,!1),I(z),c();var i=J(),o=S(i);e(o,{name:"Default",parameters:{__svelteCsf:{rawCode:`<Form onsubmit={() => {}}>
    <Input
        placeholder="John Smith"
        id="name_input_id"
        name="name_input_name"
        schema={zExtended.requiredString("Name")}
        {...args}
    />
</Form>`}}});var t=a(o,2);e(t,{name:"Primary Color Variant",args:{colorVariant:"primary"},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={() => {}}>
    <Input
        placeholder="John Smith"
        id="name_input_id"
        name="name_input_name"
        schema={zExtended.requiredString("Name")}
        {...args}
    />
</Form>`}}});var d=a(t,2);e(d,{name:"Secondary Color Variant",args:{colorVariant:"secondary"},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={() => {}}>
    <Input
        placeholder="John Smith"
        id="name_input_id"
        name="name_input_name"
        schema={zExtended.requiredString("Name")}
        {...args}
    />
</Form>`}}});var m=a(d,2);e(m,{name:"Dynamic Color Theme",args:{colorVariant:"foo",dynamicColorTheme:W},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={() => {}}>
    <Input
        placeholder="John Smith"
        id="name_input_id"
        name="name_input_name"
        schema={zExtended.requiredString("Name")}
        {...args}
    />
</Form>`}}});var p=a(m,2);e(p,{name:"With Value",args:{value:"My Value"},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={() => {}}>
    <Input
        placeholder="John Smith"
        id="name_input_id"
        name="name_input_name"
        schema={zExtended.requiredString("Name")}
        {...args}
    />
</Form>`}}});var _=a(p,2);e(_,{name:"With Error",args:{error:"You messed up!"},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={() => {}}>
    <Input
        placeholder="John Smith"
        id="name_input_id"
        name="name_input_name"
        schema={zExtended.requiredString("Name")}
        {...args}
    />
</Form>`}}}),f(s,i),v()}u.__docgen={version:3,name:"Input.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const n=E(u,D),A=["Default","PrimaryColorVariant","SecondaryColorVariant","DynamicColorTheme","WithValue","WithError"],B=n.Default,G=n.PrimaryColorVariant,H=n.SecondaryColorVariant,K=n.DynamicColorTheme,L=n.WithValue,Q=n.WithError;export{B as Default,K as DynamicColorTheme,G as PrimaryColorVariant,H as SecondaryColorVariant,Q as WithError,L as WithValue,A as __namedExportsOrder,D as default};
