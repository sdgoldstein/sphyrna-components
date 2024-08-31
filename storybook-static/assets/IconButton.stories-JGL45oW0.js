import{p as P,c as v,d as I,s as D,a,r as x,i as w,t as u,b as S}from"./props-DI9QN1PF.js";import{p as T,f as h,g as b,a as V,b as k,s as y}from"./operations-WN-Pn-cw.js";import"./index-CERzeK2C.js";import{s as A,d as O,c as R}from"./create-runtime-stories-CZUSeWpo.js";import{B as E}from"./label-13yRoTQj.js";import{D as F,t as M,g as L,a as j}from"./theme-CwoQUi83.js";import"./index-DZLKizrv.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./this-CShDlAgm.js";import"./index-client-yYWQBIps.js";function i(C,e){T(e,!0);let s=P(e,"colorVariant",3,F),m=x(e,["$$slots","$$events","$$legacy","colorVariant","dynamicColorTheme","children"]);const d=M("flex justify-center items-center w-8 h-8 rounded-full mb-1 p-0 transition-all active:scale-[95%]",L(s()));var n=v(),$=h(n),o=k(()=>e.dynamicColorTheme?j(e.dynamicColorTheme,s()):"");I($,()=>E,(l,t)=>{t(l,D({type:"button",class:d,get style(){return b(o)}},()=>m,{$$events:{click:onclick},children:(c,r)=>{var _=v(),B=h(_);A(B,()=>e.children),a(c,_)},$$slots:{default:!0}}))}),a(C,n),V()}i.__docgen={keywords:[],data:[],name:"IconButton.svelte"};var G=S("<!> <!> <!> <!>",1);const{Story:p,meta:N}=O({}),U={colorThemes:new Map([["foo",{bgColor:"#900000",textColor:"#000020"}]])};function g(C,e){T(e,!1),w();var s=G(),m=h(s);p(m,{name:"Default",children:(o,l)=>{i(o,{onclick:()=>alert("hh"),children:(t,c)=>{var r=u("T");a(t,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:'<IconButton onclick={() => alert("hh")}>T</IconButton>'}}});var d=y(m,2);p(d,{name:"Primary Color Variant",children:(o,l)=>{i(o,{colorVariant:"primary",children:(t,c)=>{var r=u("T");a(t,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:'<IconButton colorVariant="primary">T</IconButton>'}}});var n=y(d,2);p(n,{name:"Secondary Color Variant",children:(o,l)=>{i(o,{colorVariant:"secondary",children:(t,c)=>{var r=u("T");a(t,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:'<IconButton colorVariant="secondary">T</IconButton>'}}});var $=y(n,2);p($,{name:"Dynamic Color Theme",children:(o,l)=>{i(o,{colorVariant:"foo",dynamicColorTheme:U,children:(t,c)=>{var r=u("T");a(t,r)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:'<IconButton colorVariant="foo" {dynamicColorTheme}>T</IconButton>'}}}),a(C,s),V()}g.__docgen={version:3,name:"IconButton.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const f=R(g,N),to=["Default","PrimaryColorVariant","SecondaryColorVariant","DynamicColorTheme"],eo=f.Default,ro=f.PrimaryColorVariant,ao=f.SecondaryColorVariant,so=f.DynamicColorTheme;export{eo as Default,so as DynamicColorTheme,ro as PrimaryColorVariant,ao as SecondaryColorVariant,to as __namedExportsOrder,N as default};
