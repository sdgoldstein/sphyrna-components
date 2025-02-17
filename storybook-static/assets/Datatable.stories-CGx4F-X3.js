var q=Object.defineProperty;var J=(t,e,a)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var V=(t,e,a)=>J(t,typeof e!="symbol"?e+"":e,a);import{p as M,t as s,a as i,j as A,r as B,i as F}from"./props-B4yo3oB_.js";import{t as w,a as L,p as R,s as y,j as m,g as d,c as G,f as H,n as K}from"./context-ClX-pJyV.js";import{j as S,D as U,a as Y,b as z,c as Q,s as W,d as X}from"./create-runtime-stories-BeEH6srk.js";import{e as g,i as h}from"./each-Dd2ULguY.js";import{s as T}from"./class-Dsc1ZoIn.js";import"./index-Cu4lwwaE.js";import"./index-CfOrKyLd.js";import"./hydration-C_mtSyjW.js";var Z=s("<th> </th>"),$=s("<td> </td>"),ee=s("<tr></tr>"),ae=s("<table><thead><tr></tr></thead><tbody></tbody></table>");function C(t,e){R(e,!0),M(e,"colorVariant",3,U);let a=B(e,["$$slots","$$events","$$legacy","id","testid","colorVariant","dynamicColorTheme","columnDefinitions","rowData"]),n=G(()=>z(e.id,e.testid));const o="w-full text-center border-collapse text-sm",l="border-b border-surface-darkest",b="divide-y d divide-surface-darkest";var f=ae();let x;var p=m(f);T(p,S(l));var j=m(p);g(j,21,()=>e.columnDefinitions,h,(D,_)=>{var r=Z(),v=m(r);w(()=>A(v,d(_).columnLabel)),i(D,r)});var k=y(p);T(k,S(b)),g(k,21,()=>e.rowData,h,(D,_)=>{var r=ee();g(r,21,()=>e.columnDefinitions,h,(v,P)=>{var N=$(),E=m(N);w(O=>A(E,O),[()=>d(_).getData(d(P).columnName)]),i(v,N)}),i(D,r)}),w(()=>x=Y(f,x,{class:o,id:e.id,"data-testid":d(n),...a})),i(t,f),L()}C.__docgen={data:[{name:"columnDefinitions",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"array",text:"ColumnDefinition[]"},static:!1,readonly:!1},{name:"rowData",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"object",text:"TableDataSource"},static:!1,readonly:!1},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"testid",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"colorVariant",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"primary"'},{name:"dynamicColorTheme",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"DynamicTheme"},static:!1,readonly:!1}],name:"Datatable.svelte"};class te{constructor(e){this.data=e}[Symbol.iterator](){return new ne(this.data)}}class ne{constructor(e){V(this,"_index",0);this.data=e}next(){const e=this.index>=this.data.length,a=new oe(this.index.toString(),this.data[this.index]);return this._index++,{done:e,value:a}}get index(){return this._index}}class oe{constructor(e,a){this.rowKey=e,this._data=a}getData(e){let a=this._data;const n=e.split(".");for(const o of n)if(a=a[o],a==null)throw new Error(`Could not find nested property ${e}`);return a.toString()}}const re=(t,e,a=K)=>{C(t,{columnDefinitions:[{columnName:"name",columnLabel:"Name"},{columnName:"age",columnLabel:"Age"}],rowData:new te(ie)})},ie=[{name:"John",age:25},{name:"Jane",age:30}],se={component:C,args:{}},{Story:c}=X(),le={colorThemes:new Map([["foo",{coreColor:"#900000",textColor:"#000020"}]])};var me=s("<!> <!> <!> <!>",1);function I(t,e){R(e,!1),W(re),F();var a=me(),n=H(a);c(n,{name:"Default",parameters:{__svelteCsf:{rawCode:`<Datatable
  columnDefinitions={[
    { columnName: "name", columnLabel: "Name" },
    { columnName: "age", columnLabel: "Age" },
  ]}
  rowData={new ArrayDataRowIterable(data)}
/>`}}});var o=y(n,2);c(o,{name:"Primary Color Variant",args:{colorVariant:"primary"},parameters:{__svelteCsf:{rawCode:`<Datatable
  columnDefinitions={[
    { columnName: "name", columnLabel: "Name" },
    { columnName: "age", columnLabel: "Age" },
  ]}
  rowData={new ArrayDataRowIterable(data)}
/>`}}});var l=y(o,2);c(l,{name:"Secondary Color Variant",args:{colorVariant:"secondary"},parameters:{__svelteCsf:{rawCode:`<Datatable
  columnDefinitions={[
    { columnName: "name", columnLabel: "Name" },
    { columnName: "age", columnLabel: "Age" },
  ]}
  rowData={new ArrayDataRowIterable(data)}
/>`}}});var b=y(l,2);c(b,{name:"Dynamic Color Theme",args:{colorVariant:"foo",dynamicColorTheme:le},parameters:{__svelteCsf:{rawCode:`<Datatable
  columnDefinitions={[
    { columnName: "name", columnLabel: "Name" },
    { columnName: "age", columnLabel: "Age" },
  ]}
  rowData={new ArrayDataRowIterable(data)}
/>`}}}),i(t,a),L()}I.__docgen={version:3,name:"Datatable.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const u=Q(I,se),ve=["Default","PrimaryColorVariant","SecondaryColorVariant","DynamicColorTheme"],we=u.Default,ge=u.PrimaryColorVariant,he=u.SecondaryColorVariant,Ce=u.DynamicColorTheme;export{we as Default,Ce as DynamicColorTheme,ge as PrimaryColorVariant,he as SecondaryColorVariant,ve as __namedExportsOrder,se as default};
