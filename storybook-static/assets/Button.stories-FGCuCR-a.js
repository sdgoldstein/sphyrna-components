import{i as B,t as a,a as e,b as h}from"./props-DI9QN1PF.js";import{p as v,f as x,a as T,s as c}from"./operations-WN-Pn-cw.js";import{f as V}from"./index-CERzeK2C.js";import{B as n}from"./Button-2HGxFW1a.js";import{d as P,c as D}from"./create-runtime-stories-CZUSeWpo.js";import"./index-DZLKizrv.js";import"./label-13yRoTQj.js";import"./theme-CwoQUi83.js";import"./this-CShDlAgm.js";import"./index-client-yYWQBIps.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";var w=h("<!> <!> <!> <!>",1);const{Story:s,meta:S}=P({}),g={colorThemes:new Map([["foo",{bgColor:"#900000",textColor:"#000020"}]])};function $(C,_){v(_,!1),B();var d=w(),u=x(d);s(u,{name:"Default",children:(t,i)=>{n(t,{onclick:()=>V(),children:(o,m)=>{var r=a("Button Text");e(o,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:"<Button onclick={() => fn()}>Button Text</Button>"}}});var p=c(u,2);s(p,{name:"Primary Color Variant",children:(t,i)=>{n(t,{colorVariant:"primary",children:(o,m)=>{var r=a("Button Text");e(o,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:'<Button colorVariant="primary">Button Text</Button>'}}});var f=c(p,2);s(f,{name:"Secondary Color Variant",children:(t,i)=>{n(t,{colorVariant:"secondary",children:(o,m)=>{var r=a("Button Text");e(o,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:'<Button colorVariant="secondary">Button Text</Button>'}}});var y=c(f,2);s(y,{name:"Dynamic Color Theme",children:(t,i)=>{n(t,{colorVariant:"foo",dynamicColorTheme:g,children:(o,m)=>{var r=a("Button Text");e(o,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:'<Button colorVariant="foo" {dynamicColorTheme}>Button Text</Button>'}}}),e(C,d),T()}$.__docgen={version:3,name:"Button.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const l=D($,S),H=["Default","PrimaryColorVariant","SecondaryColorVariant","DynamicColorTheme"],I=l.Default,J=l.PrimaryColorVariant,K=l.SecondaryColorVariant,L=l.DynamicColorTheme;export{I as Default,L as DynamicColorTheme,J as PrimaryColorVariant,K as SecondaryColorVariant,H as __namedExportsOrder,S as default};
