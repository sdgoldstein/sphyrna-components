import{p as k,a as o,t as v,r as z,d as te,k as ae,i as ne,s as re,b as S}from"./props-D_2D7U9r.js";import{p,R as ie,t as V,a as M,g as l,b as m,j as _,c as Z,f as F,s as C,n as oe,e as le}from"./runtime-CtH2Mday.js";import{D as w,b as R,s as x,t as L,g as j,a as se,c as E,e as G,h as ce,d as de}from"./component-Ci2hy3zc.js";import{a as I,c as me,s as ye}from"./create-runtime-stories-BC3aFYSS.js";import{h as ve}from"./hydration-C_mtSyjW.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";function U(n,e){var r=n.__className,t=ue(e);(r!==t||ve)&&(e==null?n.removeAttribute("class"):n.className=t,n.__className=t)}function ue(n){return n??""}const q="SIZE_CONTEXT";var he=v("<div><!></div>");function W(n,e){p(e,!0);let r=k(e,"size",3,3),t=k(e,"colorVariant",3,w),a=z(e,["$$slots","$$events","$$legacy","id","testid","size","colorVariant","dynamicColorTheme","children"]),s=m(()=>R(e.id,e.testid));ie(q,r());const i=m(()=>L("px-4 py-3.5 border-b-2 w-full flex justify-start items-center",`border-${t()}-text`,j(t()))),c=m(()=>e.dynamicColorTheme?`border-color:${se(e.dynamicColorTheme,t()).textColor} !important; ${E(e.dynamicColorTheme,t())}`:"");var d=he();let h;var f=_(d);I(f,()=>e.children,()=>e.id,()=>l(s)),V(()=>h=x(d,h,{class:l(i),style:l(c),...a})),o(n,d),M()}W.__docgen={data:[{name:"size",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"3"},{name:"children",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"Snippet<[string | undefined, string | undefined]>"},static:!1,readonly:!1},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"testid",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"colorVariant",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"primary"'},{name:"dynamicColorTheme",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"DynamicTheme"},static:!1,readonly:!1}],name:"NavBar.svelte"};var fe=v("<nav><!></nav>");function H(n,e){p(e,!0),k(e,"colorVariant",3,w);let r=z(e,["$$slots","$$events","$$legacy","id","testid","colorVariant","dynamicColorTheme","children"]),t=m(()=>R(e.id,e.testid));var a=fe();let s;var i=_(a);I(i,()=>e.children,()=>e.id,()=>l(t)),V(()=>s=x(a,s,{...r,class:"flex justify-center items-center space-x-8 grow"})),o(n,a),M()}H.__docgen={data:[{name:"children",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"Snippet<[string | undefined, string | undefined]>"},static:!1,readonly:!1},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"testid",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"colorVariant",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"primary"'},{name:"dynamicColorTheme",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"DynamicTheme"},static:!1,readonly:!1}],name:"NavMenu.svelte"};var Te=v("<a><!></a>"),Ce=v("<div><!></div>");function D(n,e){p(e,!0);let r=k(e,"colorVariant",3,w),t=z(e,["$$slots","$$events","$$legacy","id","testid","colorVariant","dynamicColorTheme","href","children"]),a=m(()=>R(e.id,e.testid)),s=Z(q);const i=m(()=>L("text-center whitespace-nowrap font-medium cursor-pointer",j(r()))),c=m(()=>`font-size:${.25+s*.25}rem; ${e.dynamicColorTheme?E(e.dynamicColorTheme,r()):""}`);var d=te(),h=F(d);{var f=g=>{var y=Te();let u;var N=_(y);I(N,()=>e.children,()=>e.id,()=>l(a)),V(()=>u=x(y,u,{href:e.href,class:l(i),style:l(c),...t})),o(g,y)},b=g=>{var y=Ce();let u;var N=_(y);I(N,()=>e.children,()=>e.id,()=>l(a)),V(()=>u=x(y,u,{class:l(i),style:l(c),...t})),o(g,y)};ae(h,g=>{e.href?g(f):g(b,!1)})}o(n,d),M()}D.__docgen={data:[{name:"href",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"children",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"Snippet<[string | undefined, string | undefined]>"},static:!1,readonly:!1},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"testid",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"colorVariant",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"primary"'},{name:"dynamicColorTheme",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"DynamicTheme"},static:!1,readonly:!1}],name:"NavMenuItem.svelte"};var ge=v("<a><div><!></div></a>");function J(n,e){p(e,!0);let r=k(e,"colorVariant",3,w),t=z(e,["$$slots","$$events","$$legacy","id","testid","colorVariant","dynamicColorTheme","children"]),a=m(()=>R(e.id,e.testid)),s=Z(q);const i=m(()=>L("flex items-stretch space-x-2",`text-${s}xl`,"font-semibold",j(r()))),c=m(()=>e.dynamicColorTheme?E(e.dynamicColorTheme,r()):"");var d=ge();let h;var f=_(d),b=_(f);I(b,()=>e.children,()=>e.id,()=>l(a)),V(()=>{h=x(d,h,{href:"/",...t}),U(f,l(i)),G(f,"style",l(c))}),o(n,d),M()}J.__docgen={data:[],name:"NavBarBrand.svelte"};var Ne=v("<img>");function K(n,e){let r=z(e,["$$slots","$$events","$$legacy","src","alt","width","height"]);var t=Ne();let a;V(()=>a=x(t,a,{src:e.src,alt:e.alt,width:e.width?`${e.width}px`:null,height:e.height?`${e.height}px`:null,...r})),ce(t),o(n,t)}K.__docgen={data:[{name:"src",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"alt",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"width",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"height",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"testid",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"colorVariant",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"dynamicColorTheme",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"DynamicTheme"},static:!1,readonly:!1}],name:"Image.svelte"};var ke=v("<div><!></div>");function Q(n,e){p(e,!0);let r=k(e,"aspectRatio",3,1),t=k(e,"colorVariant",3,w);const a=m(()=>L("h-[1lh]",j(t()))),s=m(()=>`width:${r()}lh; ${e.dynamicColorTheme?E(e.dynamicColorTheme,t()):""}`);var i=ke(),c=_(i);K(c,{get src(){return e.src},get alt(){return e.alt},class:"h-full w-full"}),V(()=>{U(i,l(a)),G(i,"style",l(s))}),o(n,i),M()}Q.__docgen={data:[],name:"NavBarBrandLogo.svelte"};var Ve=v("<div><!></div>");function $(n,e){p(e,!0);let r=k(e,"colorVariant",3,w),t=m(()=>R(e.id,e.testid)),a=Z(q);const s=m(()=>L("text-center whitespace-nowrap",`text-${a}xl`,"font-semibold","h-[1lh]",j(r()))),i=m(()=>e.dynamicColorTheme?E(e.dynamicColorTheme,r()):"");var c=Ve(),d=_(c);I(d,()=>e.children,()=>e.id,()=>l(t)),V(()=>{U(c,l(s)),G(c,"style",l(i))}),o(n,c),M()}$.__docgen={data:[],name:"NavBarBrandTitle.svelte"};const _e=(n,e,r=oe)=>{let t=()=>e==null?void 0:e().colorVariant,a=()=>e==null?void 0:e().dynamicColorTheme;W(n,re({get colorVariant(){return t()},get dynamicColorTheme(){return a()}},()=>le(e==null?void 0:e(),["children","colorVariant","dynamicColorTheme"]),{children:(i,c)=>{var d=xe(),h=F(d);J(h,{get colorVariant(){return t()},get dynamicColorTheme(){return a()},children:(b,g)=>{var y=pe(),u=F(y);Q(u,{src:"/logo.png",alt:"alt",aspectRatio:"2.5",get colorVariant(){return t()},get dynamicColorTheme(){return a()}});var N=C(u,2);$(N,{get colorVariant(){return t()},get dynamicColorTheme(){return a()},children:(O,Y)=>{var T=S("Title");o(O,T)},$$slots:{default:!0}}),o(b,y)},$$slots:{default:!0}});var f=C(h,2);H(f,{get colorVariant(){return t()},get dynamicColorTheme(){return a()},children:(b,g)=>{var y=Me(),u=F(y);D(u,{get colorVariant(){return t()},get dynamicColorTheme(){return a()},onclick:()=>{alert("first")},children:(T,X)=>{var B=S("First");o(T,B)},$$slots:{default:!0}});var N=C(u,2);D(N,{get colorVariant(){return t()},get dynamicColorTheme(){return a()},onclick:()=>{alert("second")},children:(T,X)=>{var B=S("Second");o(T,B)},$$slots:{default:!0}});var O=C(N,2);D(O,{get colorVariant(){return t()},get dynamicColorTheme(){return a()},onclick:()=>{alert("third")},children:(T,X)=>{var B=S("Third");o(T,B)},$$slots:{default:!0}});var Y=C(O,2);D(Y,{get colorVariant(){return t()},get dynamicColorTheme(){return a()},onclick:()=>{alert("fourth")},children:(T,X)=>{var B=S("Fourth");o(T,B)},$$slots:{default:!0}}),o(b,y)},$$slots:{default:!0}}),o(i,d)},$$slots:{default:!0}}))},be={component:W,args:{}},{Story:P}=de(),Be={colorThemes:new Map([["foo",{coreColor:"#900000",textColor:"#000020"}]])};var pe=v("<!> <!>",1),Me=v("<!> <!> <!> <!>",1),xe=v("<!> <!>",1),Ie=v("<!> <!> <!> <!> <!>",1);function ee(n,e){p(e,!1),ye(_e),ne();var r=Ie(),t=F(r);P(t,{name:"Default",parameters:{__svelteCsf:{rawCode:`<NavBar {colorVariant} {dynamicColorTheme} {...args}>
  <NavBarBrand {colorVariant} {dynamicColorTheme}>
    <NavBarBrandLogo
      src="/logo.png"
      alt="alt"
      aspectRatio="2.5"
      {colorVariant}
      {dynamicColorTheme}
    />
    <NavBarBrandTitle {colorVariant} {dynamicColorTheme}
      >Title</NavBarBrandTitle
    >
  </NavBarBrand>
  <NavMenu {colorVariant} {dynamicColorTheme}>
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("first");
      }}>First</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("second");
      }}>Second</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("third");
      }}>Third</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("fourth");
      }}>Fourth</NavMenuItem
    >
  </NavMenu>
</NavBar>`}}});var a=C(t,2);P(a,{name:"Primary Color Variant",args:{colorVariant:"primary"},parameters:{__svelteCsf:{rawCode:`<NavBar {colorVariant} {dynamicColorTheme} {...args}>
  <NavBarBrand {colorVariant} {dynamicColorTheme}>
    <NavBarBrandLogo
      src="/logo.png"
      alt="alt"
      aspectRatio="2.5"
      {colorVariant}
      {dynamicColorTheme}
    />
    <NavBarBrandTitle {colorVariant} {dynamicColorTheme}
      >Title</NavBarBrandTitle
    >
  </NavBarBrand>
  <NavMenu {colorVariant} {dynamicColorTheme}>
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("first");
      }}>First</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("second");
      }}>Second</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("third");
      }}>Third</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("fourth");
      }}>Fourth</NavMenuItem
    >
  </NavMenu>
</NavBar>`}}});var s=C(a,2);P(s,{name:"Secondary Color Variant",args:{colorVariant:"secondary"},parameters:{__svelteCsf:{rawCode:`<NavBar {colorVariant} {dynamicColorTheme} {...args}>
  <NavBarBrand {colorVariant} {dynamicColorTheme}>
    <NavBarBrandLogo
      src="/logo.png"
      alt="alt"
      aspectRatio="2.5"
      {colorVariant}
      {dynamicColorTheme}
    />
    <NavBarBrandTitle {colorVariant} {dynamicColorTheme}
      >Title</NavBarBrandTitle
    >
  </NavBarBrand>
  <NavMenu {colorVariant} {dynamicColorTheme}>
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("first");
      }}>First</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("second");
      }}>Second</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("third");
      }}>Third</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("fourth");
      }}>Fourth</NavMenuItem
    >
  </NavMenu>
</NavBar>`}}});var i=C(s,2);P(i,{name:"Dynamic Color Theme",args:{colorVariant:"foo",dynamicColorTheme:Be},parameters:{__svelteCsf:{rawCode:`<NavBar {colorVariant} {dynamicColorTheme} {...args}>
  <NavBarBrand {colorVariant} {dynamicColorTheme}>
    <NavBarBrandLogo
      src="/logo.png"
      alt="alt"
      aspectRatio="2.5"
      {colorVariant}
      {dynamicColorTheme}
    />
    <NavBarBrandTitle {colorVariant} {dynamicColorTheme}
      >Title</NavBarBrandTitle
    >
  </NavBarBrand>
  <NavMenu {colorVariant} {dynamicColorTheme}>
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("first");
      }}>First</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("second");
      }}>Second</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("third");
      }}>Third</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("fourth");
      }}>Fourth</NavMenuItem
    >
  </NavMenu>
</NavBar>`}}});var c=C(i,2);P(c,{name:"Size 5",args:{size:"5"},parameters:{__svelteCsf:{rawCode:`<NavBar {colorVariant} {dynamicColorTheme} {...args}>
  <NavBarBrand {colorVariant} {dynamicColorTheme}>
    <NavBarBrandLogo
      src="/logo.png"
      alt="alt"
      aspectRatio="2.5"
      {colorVariant}
      {dynamicColorTheme}
    />
    <NavBarBrandTitle {colorVariant} {dynamicColorTheme}
      >Title</NavBarBrandTitle
    >
  </NavBarBrand>
  <NavMenu {colorVariant} {dynamicColorTheme}>
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("first");
      }}>First</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("second");
      }}>Second</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("third");
      }}>Third</NavMenuItem
    >
    <NavMenuItem
      {colorVariant}
      {dynamicColorTheme}
      onclick={() => {
        alert("fourth");
      }}>Fourth</NavMenuItem
    >
  </NavMenu>
</NavBar>`}}}),o(n,r),M()}ee.__docgen={keywords:[],data:[],name:"NavBar.stories.svelte"};const A=me(ee,be),Le=["Default","PrimaryColorVariant","SecondaryColorVariant","DynamicColorTheme","Size5"],je=A.Default,Ee=A.PrimaryColorVariant,Ae=A.SecondaryColorVariant,Oe=A.DynamicColorTheme,qe=A.Size5;export{je as Default,Oe as DynamicColorTheme,Ee as PrimaryColorVariant,Ae as SecondaryColorVariant,qe as Size5,Le as __namedExportsOrder,be as default};
