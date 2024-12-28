import{i as _,a as f,t as C,s as h}from"./props-D_2D7U9r.js";import{p as v,f as y,a as V,s as a,n as F,e as g}from"./runtime-CtH2Mday.js";import{d as I}from"./component-Ci2hy3zc.js";import{I as c}from"./Input-BHO07ObO.js";import{z as b,F as w}from"./Form-to6g2Mm7.js";import{c as D,s as S}from"./create-runtime-stories-BC3aFYSS.js";import"./FormElementErrorMessage-BePDgMYM.js";import"./index-5sCJj3sS.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";const W=(s,e,m=F)=>{let t=()=>g(e==null?void 0:e(),[]);w(s,{onsubmit:()=>{},children:(n,i)=>{c(n,h(t))},$$slots:{default:!0}})},T={component:c,args:{placeholder:"John Smith",id:"name_input_id",name:"name_input_name",schema:b.requiredString("Name")}},{Story:r}=I(),x={colorThemes:new Map([["foo",{coreColor:"#900000",textColor:"#000020"}]])};var E=C("<!> <!> <!> <!> <!> <!>",1);function d(s,e){v(e,!1),S(W),_();var m=E(),t=y(m);r(t,{name:"Default",parameters:{__svelteCsf:{rawCode:`<Form onsubmit={()=>{}}>
    <Input {...args}/>
</Form>`}}});var n=a(t,2);r(n,{name:"Primary Color Variant",args:{colorVariant:"primary"},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={()=>{}}>
    <Input {...args}/>
</Form>`}}});var i=a(n,2);r(i,{name:"Secondary Color Variant",args:{colorVariant:"secondary"},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={()=>{}}>
    <Input {...args}/>
</Form>`}}});var l=a(i,2);r(l,{name:"Dynamic Color Theme",args:{colorVariant:"foo",dynamicColorTheme:x},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={()=>{}}>
    <Input {...args}/>
</Form>`}}});var p=a(l,2);r(p,{name:"With Value",args:{value:"My Value"},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={()=>{}}>
    <Input {...args}/>
</Form>`}}});var u=a(p,2);r(u,{name:"With Error",args:{error:"You messed up!"},parameters:{__svelteCsf:{rawCode:`<Form onsubmit={()=>{}}>
    <Input {...args}/>
</Form>`}}}),f(s,m),V()}d.__docgen={version:3,name:"Input.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const o=D(d,T),Y=["Default","PrimaryColorVariant","SecondaryColorVariant","DynamicColorTheme","WithValue","WithError"],A=o.Default,B=o.PrimaryColorVariant,G=o.SecondaryColorVariant,H=o.DynamicColorTheme,K=o.WithValue,L=o.WithError;export{A as Default,H as DynamicColorTheme,B as PrimaryColorVariant,G as SecondaryColorVariant,L as WithError,K as WithValue,Y as __namedExportsOrder,T as default};
