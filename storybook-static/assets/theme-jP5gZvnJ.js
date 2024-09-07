import{k as ge,u as he,r as me,x as ye,y as ae,q as le,z as ee,L as we,A as xe,n as M,B as ve,C as Ce,g as ke,i as _e,D as ze}from"./operations-Bwi65NFR.js";import{h as Ae,j as re,k as Se,m as Me,o as Ge,N as Re}from"./props-9-rJBpBe.js";function xr(e,r,t){ge(()=>{var o=he(()=>r(e,t==null?void 0:t())||{});if(t&&(o!=null&&o.update)){var n=!1,i={};me(()=>{var a=t();ye(a),n&&ae(i,a)&&(i=a,o.update(a))}),n=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function Te(e,r){if(r){const t=document.body;e.autofocus=!0,le(()=>{document.activeElement===t&&e.focus()})}}function ce(e,r,t,o){t=t==null?null:t+"";var n=e.__attributes??(e.__attributes={});n[r]!==(n[r]=t)&&(r==="loading"&&(e[we]=t),t===null?e.removeAttribute(r):e.setAttribute(r,t))}function Pe(e,r,t){if(r in e){var o=e[r],n=typeof o=="boolean"&&t===""?!0:t;(typeof o!="object"||o!==n)&&(e[r]=n)}else ce(e,r,t)}function Ie(e,r,t,o,n=!1,i){var a=r||{},s=e.tagName==="OPTION";for(var p in r)p in t||(t[p]=null);var d=te.get(e.nodeName);d||te.set(e.nodeName,d=Ee(e));var h=e.__attributes??(e.__attributes={}),w=[];for(const l in t){let u=t[l];if(s&&l==="value"&&u==null){e.value=e.__value="",a[l]=u;continue}var x=a[l];if(u!==x){a[l]=u;var C=l[0]+l[1];if(C!=="$$")if(C==="on"){const y={},k="$$"+l;let v=l.slice(2);var m=Ge(v);if(Ae(v)&&(v=v.slice(0,-7),y.capture=!0),!m&&x){if(u!=null)continue;e.removeEventListener(v,a[k],y),a[k]=null}if(u!=null)if(m)e[`__${v}`]=u,Se([v]);else{let G=function($){a[l].call(this,$)};r?a[k]=re(v,e,G,y):w.push([l,u,()=>a[k]=re(v,e,G,y)])}}else if(u==null)h[l]=null,e.removeAttribute(l);else if(l==="style")e.style.cssText=u+"";else if(l==="autofocus")Te(e,!!u);else if(l==="__value"||l==="value")e.value=e[l]=e.__value=u;else{var f=l;n||(f=Me(f)),d.includes(f)?e[f]=u:typeof u!="function"&&ce(e,f,u)}}}return r||le(()=>{if(e.isConnected)for(const[l,u,y]of w)a[l]===u&&y()}),a}function vr(e,r,t,o){if(e.tagName.includes("-")){for(var n in r)n in t||(t[n]=null);for(n in t)Pe(e,n,t[n]);return t}return Ie(e,r,t,o,e.namespaceURI!==Re)}var Ne=["width","height","draggable"],te=new Map;function Ee(e){for(var r=[],t,o=ee(e);o.constructor.name!=="Element";){t=xe(o);for(var n in t)t[n].set&&!Ne.includes(n)&&r.push(n);o=ee(o)}return r}function Y(e,r,t){if(e==null)return r(void 0),t&&t(void 0),M;const o=e.subscribe(r,t);return o.unsubscribe?()=>o.unsubscribe():o}function Cr(e,r,t){const o=t[r]??(t[r]={store:null,source:Ce(void 0),unsubscribe:M});if(o.store!==e)if(o.unsubscribe(),o.store=e??null,e==null)o.source.v=void 0,o.unsubscribe=M;else{var n=!0;o.unsubscribe=Y(e,i=>{n?o.source.v=i:_e(o.source,i)}),n=!1}return ke(o.source)}function kr(e,r){return e.set(r),r}function _r(){const e={};return ve(()=>{for(var r in e)e[r].unsubscribe()}),e}const R=[];function Le(e,r){return{subscribe:$e(e,r).subscribe}}function $e(e,r=M){let t=null;const o=new Set;function n(s){if(ae(e,s)&&(e=s,t)){const p=!R.length;for(const d of o)d[1](),R.push(d,e);if(p){for(let d=0;d<R.length;d+=2)R[d][0](R[d+1]);R.length=0}}}function i(s){n(s(e))}function a(s,p=M){const d=[s,p];return o.add(d),o.size===1&&(t=r(n,i)||M),s(e),()=>{o.delete(d),o.size===0&&t&&(t(),t=null)}}return{set:n,update:i,subscribe:a}}function zr(e,r,t){const o=!Array.isArray(e),n=o?[e]:e;if(!n.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=r.length<2;return Le(t,(a,s)=>{let p=!1;const d=[];let h=0,w=M;const x=()=>{if(h)return;w();const m=r(o?d[0]:d,a,s);i?a(m):w=typeof m=="function"?m:M},C=n.map((m,f)=>Y(m,l=>{d[f]=l,h&=~(1<<f),p&&x()},()=>{h|=1<<f}));return p=!0,x(),function(){ze(C),w(),p=!1}})}function Ar(e){return{subscribe:e.subscribe.bind(e)}}function Sr(e){let r;return Y(e,t=>r=t)(),r}const J="-",je=e=>{const r=We(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:a=>{const s=a.split(J);return s[0]===""&&s.length!==1&&s.shift(),de(s,r)||Be(a)},getConflictingClassGroupIds:(a,s)=>{const p=t[a]||[];return s&&o[a]?[...p,...o[a]]:p}}},de=(e,r)=>{var a;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),n=o?de(e.slice(1),o):void 0;if(n)return n;if(r.validators.length===0)return;const i=e.join(J);return(a=r.validators.find(({validator:s})=>s(i)))==null?void 0:a.classGroupId},oe=/^\[(.+)\]$/,Be=e=>{if(oe.test(e)){const r=oe.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},We=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return Oe(Object.entries(e.classGroups),t).forEach(([i,a])=>{U(a,o,i,r)}),o},U=(e,r,t,o)=>{e.forEach(n=>{if(typeof n=="string"){const i=n===""?r:ne(r,n);i.classGroupId=t;return}if(typeof n=="function"){if(Ve(n)){U(n(o),r,t,o);return}r.validators.push({validator:n,classGroupId:t});return}Object.entries(n).forEach(([i,a])=>{U(a,ne(r,i),t,o)})})},ne=(e,r)=>{let t=e;return r.split(J).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},Ve=e=>e.isThemeGetter,Oe=(e,r)=>r?e.map(([t,o])=>{const n=o.map(i=>typeof i=="string"?r+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([a,s])=>[r+a,s])):i);return[t,n]}):e,qe=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const n=(i,a)=>{t.set(i,a),r++,r>e&&(r=0,o=t,t=new Map)};return{get(i){let a=t.get(i);if(a!==void 0)return a;if((a=o.get(i))!==void 0)return n(i,a),a},set(i,a){t.has(i)?t.set(i,a):n(i,a)}}},ue="!",Fe=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,n=r[0],i=r.length,a=s=>{const p=[];let d=0,h=0,w;for(let l=0;l<s.length;l++){let u=s[l];if(d===0){if(u===n&&(o||s.slice(l,l+i)===r)){p.push(s.slice(h,l)),h=l+i;continue}if(u==="/"){w=l;continue}}u==="["?d++:u==="]"&&d--}const x=p.length===0?s:s.substring(h),C=x.startsWith(ue),m=C?x.substring(1):x,f=w&&w>h?w-h:void 0;return{modifiers:p,hasImportantModifier:C,baseClassName:m,maybePostfixModifierPosition:f}};return t?s=>t({className:s,parseClassName:a}):a},Ue=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},Ye=e=>({cache:qe(e.cacheSize),parseClassName:Fe(e),...je(e)}),Je=/\s+/,Ke=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,i=[],a=e.trim().split(Je);let s="";for(let p=a.length-1;p>=0;p-=1){const d=a[p],{modifiers:h,hasImportantModifier:w,baseClassName:x,maybePostfixModifierPosition:C}=t(d);let m=!!C,f=o(m?x.substring(0,C):x);if(!f){if(!m){s=d+(s.length>0?" "+s:s);continue}if(f=o(x),!f){s=d+(s.length>0?" "+s:s);continue}m=!1}const l=Ue(h).join(":"),u=w?l+ue:l,y=u+f;if(i.includes(y))continue;i.push(y);const k=n(f,m);for(let v=0;v<k.length;++v){const G=k[v];i.push(u+G)}s=d+(s.length>0?" "+s:s)}return s};function Xe(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=pe(r))&&(o&&(o+=" "),o+=t);return o}const pe=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=pe(e[o]))&&(t&&(t+=" "),t+=r);return t};function se(e,...r){let t,o,n,i=a;function a(p){const d=r.reduce((h,w)=>w(h),e());return t=Ye(d),o=t.cache.get,n=t.cache.set,i=s,s(p)}function s(p){const d=o(p);if(d)return d;const h=Ke(p,t);return n(p,h),h}return function(){return i(Xe.apply(null,arguments))}}const b=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},fe=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ze=/^\d+\/\d+$/,He=new Set(["px","full","screen"]),Qe=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,De=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,er=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,rr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,tr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,z=e=>T(e)||He.has(e)||Ze.test(e),A=e=>P(e,"length",dr),T=e=>!!e&&!Number.isNaN(Number(e)),F=e=>P(e,"number",T),N=e=>!!e&&Number.isInteger(Number(e)),or=e=>e.endsWith("%")&&T(e.slice(0,-1)),c=e=>fe.test(e),S=e=>Qe.test(e),nr=new Set(["length","size","percentage"]),sr=e=>P(e,nr,be),ir=e=>P(e,"position",be),ar=new Set(["image","url"]),lr=e=>P(e,ar,pr),cr=e=>P(e,"",ur),E=()=>!0,P=(e,r,t)=>{const o=fe.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},dr=e=>De.test(e)&&!er.test(e),be=()=>!1,ur=e=>rr.test(e),pr=e=>tr.test(e),ie=()=>{const e=b("colors"),r=b("spacing"),t=b("blur"),o=b("brightness"),n=b("borderColor"),i=b("borderRadius"),a=b("borderSpacing"),s=b("borderWidth"),p=b("contrast"),d=b("grayscale"),h=b("hueRotate"),w=b("invert"),x=b("gap"),C=b("gradientColorStops"),m=b("gradientColorStopPositions"),f=b("inset"),l=b("margin"),u=b("opacity"),y=b("padding"),k=b("saturate"),v=b("scale"),G=b("sepia"),$=b("skew"),K=b("space"),X=b("translate"),W=()=>["auto","contain","none"],V=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",c,r],g=()=>[c,r],Z=()=>["",z,A],j=()=>["auto",T,c],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],B=()=>["solid","dashed","dotted","double","none"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],q=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",c],D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],_=()=>[T,c];return{cacheSize:500,separator:":",theme:{colors:[E],spacing:[z,A],blur:["none","",S,c],brightness:_(),borderColor:[e],borderRadius:["none","","full",S,c],borderSpacing:g(),borderWidth:Z(),contrast:_(),grayscale:I(),hueRotate:_(),invert:I(),gap:g(),gradientColorStops:[e],gradientColorStopPositions:[or,A],inset:O(),margin:O(),opacity:_(),padding:g(),saturate:_(),scale:_(),sepia:I(),skew:_(),space:g(),translate:g()},classGroups:{aspect:[{aspect:["auto","square","video",c]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),c]}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[f]}],"inset-x":[{"inset-x":[f]}],"inset-y":[{"inset-y":[f]}],start:[{start:[f]}],end:[{end:[f]}],top:[{top:[f]}],right:[{right:[f]}],bottom:[{bottom:[f]}],left:[{left:[f]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",N,c]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",c]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",N,c]}],"grid-cols":[{"grid-cols":[E]}],"col-start-end":[{col:["auto",{span:["full",N,c]},c]}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":[E]}],"row-start-end":[{row:["auto",{span:[N,c]},c]}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",c]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",c]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal",...q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[l]}],mx:[{mx:[l]}],my:[{my:[l]}],ms:[{ms:[l]}],me:[{me:[l]}],mt:[{mt:[l]}],mr:[{mr:[l]}],mb:[{mb:[l]}],ml:[{ml:[l]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",c,r]}],"min-w":[{"min-w":[c,r,"min","max","fit"]}],"max-w":[{"max-w":[c,r,"none","full","min","max","fit","prose",{screen:[S]},S]}],h:[{h:[c,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[c,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[c,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[c,r,"auto","min","max","fit"]}],"font-size":[{text:["base",S,A]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",F]}],"font-family":[{font:[E]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",c]}],"line-clamp":[{"line-clamp":["none",T,F]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,c]}],"list-image":[{"list-image":["none",c]}],"list-style-type":[{list:["none","disc","decimal",c]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[u]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[u]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",z,A]}],"underline-offset":[{"underline-offset":["auto",z,c]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:g()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",c]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",c]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[u]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),ir]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",sr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},lr]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[C]}],"gradient-via":[{via:[C]}],"gradient-to":[{to:[C]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[u]}],"border-style":[{border:[...B(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[u]}],"divide-style":[{divide:B()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...B()]}],"outline-offset":[{"outline-offset":[z,c]}],"outline-w":[{outline:[z,A]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[u]}],"ring-offset-w":[{"ring-offset":[z,A]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,cr]}],"shadow-color":[{shadow:[E]}],opacity:[{opacity:[u]}],"mix-blend":[{"mix-blend":[...Q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",S,c]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[w]}],saturate:[{saturate:[k]}],sepia:[{sepia:[G]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[w]}],"backdrop-opacity":[{"backdrop-opacity":[u]}],"backdrop-saturate":[{"backdrop-saturate":[k]}],"backdrop-sepia":[{"backdrop-sepia":[G]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",c]}],duration:[{duration:_()}],ease:[{ease:["linear","in","out","in-out",c]}],delay:[{delay:_()}],animate:[{animate:["none","spin","ping","pulse","bounce",c]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[N,c]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[$]}],"skew-y":[{"skew-y":[$]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",c]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",c]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":g()}],"scroll-mx":[{"scroll-mx":g()}],"scroll-my":[{"scroll-my":g()}],"scroll-ms":[{"scroll-ms":g()}],"scroll-me":[{"scroll-me":g()}],"scroll-mt":[{"scroll-mt":g()}],"scroll-mr":[{"scroll-mr":g()}],"scroll-mb":[{"scroll-mb":g()}],"scroll-ml":[{"scroll-ml":g()}],"scroll-p":[{"scroll-p":g()}],"scroll-px":[{"scroll-px":g()}],"scroll-py":[{"scroll-py":g()}],"scroll-ps":[{"scroll-ps":g()}],"scroll-pe":[{"scroll-pe":g()}],"scroll-pt":[{"scroll-pt":g()}],"scroll-pr":[{"scroll-pr":g()}],"scroll-pb":[{"scroll-pb":g()}],"scroll-pl":[{"scroll-pl":g()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",c]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,A,F]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},fr=(e,{cacheSize:r,prefix:t,separator:o,experimentalParseClassName:n,extend:i={},override:a={}})=>{L(e,"cacheSize",r),L(e,"prefix",t),L(e,"separator",o),L(e,"experimentalParseClassName",n);for(const s in a)br(e[s],a[s]);for(const s in i)gr(e[s],i[s]);return e},L=(e,r,t)=>{t!==void 0&&(e[r]=t)},br=(e,r)=>{if(r)for(const t in r)L(e,t,r[t])},gr=(e,r)=>{if(r)for(const t in r){const o=r[t];o!==void 0&&(e[t]=(e[t]||[]).concat(o))}},hr=(e,...r)=>typeof e=="function"?se(ie,e,...r):se(()=>fr(ie(),e),...r),Mr="primary";function Gr(e){const r=e.split("-");if(r.length<=0)throw new Error(`styleVariant specified is invalid: ${e}`);return`bg-${e} text-${r[0]}-text`}function mr(e,r){if(!e.colorThemes.has(r))throw new Error("Dynamic Color Theme does not contain provided color variant");return e.colorThemes.get(r)}function Rr(e,r){const t=mr(e,r);return`background-color:${t.coreColor} !important; color:${t.textColor} !important;`}const Tr=hr({extend:{classGroups:{rounded:[{rounded:["component","container"]}]}}});export{Mr as D,Cr as a,Ie as b,kr as c,Gr as d,Rr as e,vr as f,mr as g,xr as h,zr as i,Sr as j,Ar as k,Le as r,_r as s,Tr as t,$e as w};
