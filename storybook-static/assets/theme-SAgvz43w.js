import{C as ce,U as de,V as U,W as ue}from"./runtime-CUu3ZF3c.js";import{w as pe,x as fe,y as be,z as ge,A as he}from"./props-nMqGelTL.js";import{S as me}from"./create-runtime-stories-DgmlGvBM.js";function ye(e,r){if(r){const t=document.body;e.autofocus=!0,ce(()=>{document.activeElement===t&&e.focus()})}}function ve(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function xe(e,r,t,o){var i=e.__attributes??(e.__attributes={});i[r]!==(i[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[U]=t),t==null?e.removeAttribute(r):typeof t!="string"&&oe(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function nr(e,r,t,o,i=!1,s=!1,a=!1){var n=r||{},g=e.tagName==="OPTION";for(var h in r)h in t||(t[h]=null);var m=oe(e),k=e.__attributes??(e.__attributes={});for(const c in t){let d=t[c];if(g&&c==="value"&&d==null){e.value=e.__value="",n[c]=d;continue}var x=n[c];if(d!==x){n[c]=d;var _=c[0]+c[1];if(_!=="$$"){if(_==="on"){const y={},v="$$"+c;let C=c.slice(2);var w=he(C);if(pe(C)&&(C=C.slice(0,-7),y.capture=!0),!w&&x){if(d!=null)continue;e.removeEventListener(C,n[v],y),n[v]=null}if(d!=null)if(w)e[`__${C}`]=d,be([C]);else{let E=function($){n[c].call(this,$)};n[v]=fe(C,e,E,y)}else w&&(e[`__${C}`]=void 0)}else if(c==="style"&&d!=null)e.style.cssText=d+"";else if(c==="autofocus")ye(e,!!d);else if(c==="__value"||c==="value"&&d!=null)e.value=e[c]=e.__value=d;else if(c==="selected"&&g)ve(e,d);else{var u=c;i||(u=ge(u));var f=u==="defaultValue"||u==="defaultChecked";if(d==null&&!s&&!f)if(k[c]=null,u==="value"||u==="checked"){let y=e;if(u==="value"){let v=y.defaultValue;y.removeAttribute(u),y.defaultValue=v}else{let v=y.defaultChecked;y.removeAttribute(u),y.defaultChecked=v}}else e.removeAttribute(c);else f||m.includes(u)&&(s||typeof d!="string")?e[u]=d:typeof d!="function"&&xe(e,u,d)}c==="style"&&"__styles"in e&&(e.__styles={})}}}return n}var Q=new Map;function oe(e){var r=Q.get(e.nodeName);if(r)return r;Q.set(e.nodeName,r=[]);for(var t,o=e,i=Element.prototype;i!==o;){t=ue(o);for(var s in t)t[s].set&&r.push(s);o=de(o)}return r}function sr(e){if(e.loading==="lazy"){var r=e.src;e[U]=null,e.loading="eager",e.removeAttribute("src"),requestAnimationFrame(()=>{e[U]!=="eager"&&(e.loading="lazy"),e.src=r})}}function ir(e){return{Story:me}}function ar(e,r){let t;return r!=null?t=r:e!=null&&(t=e.endsWith("id")?`${e.slice(0,-2)}testid`:`${e}_testid`),t}const Y="-",we=e=>{const r=ke(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:a=>{const n=a.split(Y);return n[0]===""&&n.length!==1&&n.shift(),ne(n,r)||Ce(a)},getConflictingClassGroupIds:(a,n)=>{const g=t[a]||[];return n&&o[a]?[...g,...o[a]]:g}}},ne=(e,r)=>{var a;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),i=o?ne(e.slice(1),o):void 0;if(i)return i;if(r.validators.length===0)return;const s=e.join(Y);return(a=r.validators.find(({validator:n})=>n(s)))==null?void 0:a.classGroupId},D=/^\[(.+)\]$/,Ce=e=>{if(D.test(e)){const r=D.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},ke=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return ze(Object.entries(e.classGroups),t).forEach(([s,a])=>{q(a,o,s,r)}),o},q=(e,r,t,o)=>{e.forEach(i=>{if(typeof i=="string"){const s=i===""?r:ee(r,i);s.classGroupId=t;return}if(typeof i=="function"){if(_e(i)){q(i(o),r,t,o);return}r.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([s,a])=>{q(a,ee(r,s),t,o)})})},ee=(e,r)=>{let t=e;return r.split(Y).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},_e=e=>e.isThemeGetter,ze=(e,r)=>r?e.map(([t,o])=>{const i=o.map(s=>typeof s=="string"?r+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([a,n])=>[r+a,n])):s);return[t,i]}):e,Ae=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const i=(s,a)=>{t.set(s,a),r++,r>e&&(r=0,o=t,t=new Map)};return{get(s){let a=t.get(s);if(a!==void 0)return a;if((a=o.get(s))!==void 0)return i(s,a),a},set(s,a){t.has(s)?t.set(s,a):i(s,a)}}},se="!",Se=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,i=r[0],s=r.length,a=n=>{const g=[];let h=0,m=0,k;for(let f=0;f<n.length;f++){let c=n[f];if(h===0){if(c===i&&(o||n.slice(f,f+s)===r)){g.push(n.slice(m,f)),m=f+s;continue}if(c==="/"){k=f;continue}}c==="["?h++:c==="]"&&h--}const x=g.length===0?n:n.substring(m),_=x.startsWith(se),w=_?x.substring(1):x,u=k&&k>m?k-m:void 0;return{modifiers:g,hasImportantModifier:_,baseClassName:w,maybePostfixModifierPosition:u}};return t?n=>t({className:n,parseClassName:a}):a},Me=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},Te=e=>({cache:Ae(e.cacheSize),parseClassName:Se(e),...we(e)}),Re=/\s+/,Ge=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:i}=r,s=[],a=e.trim().split(Re);let n="";for(let g=a.length-1;g>=0;g-=1){const h=a[g],{modifiers:m,hasImportantModifier:k,baseClassName:x,maybePostfixModifierPosition:_}=t(h);let w=!!_,u=o(w?x.substring(0,_):x);if(!u){if(!w){n=h+(n.length>0?" "+n:n);continue}if(u=o(x),!u){n=h+(n.length>0?" "+n:n);continue}w=!1}const f=Me(m).join(":"),c=k?f+se:f,d=c+u;if(s.includes(d))continue;s.push(d);const y=i(u,w);for(let v=0;v<y.length;++v){const C=y[v];s.push(c+C)}n=h+(n.length>0?" "+n:n)}return n};function Pe(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=ie(r))&&(o&&(o+=" "),o+=t);return o}const ie=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=ie(e[o]))&&(t&&(t+=" "),t+=r);return t};function re(e,...r){let t,o,i,s=a;function a(g){const h=r.reduce((m,k)=>k(m),e());return t=Te(h),o=t.cache.get,i=t.cache.set,s=n,n(g)}function n(g){const h=o(g);if(h)return h;const m=Ge(g,t);return i(g,m),m}return function(){return s(Pe.apply(null,arguments))}}const p=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},ae=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ie=/^\d+\/\d+$/,Ne=new Set(["px","full","screen"]),Ee=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,$e=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Le=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ve=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,We=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,A=e=>T(e)||Ne.has(e)||Ie.test(e),S=e=>R(e,"length",Je),T=e=>!!e&&!Number.isNaN(Number(e)),F=e=>R(e,"number",T),P=e=>!!e&&Number.isInteger(Number(e)),je=e=>e.endsWith("%")&&T(e.slice(0,-1)),l=e=>ae.test(e),M=e=>Ee.test(e),Be=new Set(["length","size","percentage"]),Oe=e=>R(e,Be,le),Fe=e=>R(e,"position",le),Ue=new Set(["image","url"]),qe=e=>R(e,Ue,Xe),Ye=e=>R(e,"",Ke),I=()=>!0,R=(e,r,t)=>{const o=ae.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},Je=e=>$e.test(e)&&!Le.test(e),le=()=>!1,Ke=e=>Ve.test(e),Xe=e=>We.test(e),te=()=>{const e=p("colors"),r=p("spacing"),t=p("blur"),o=p("brightness"),i=p("borderColor"),s=p("borderRadius"),a=p("borderSpacing"),n=p("borderWidth"),g=p("contrast"),h=p("grayscale"),m=p("hueRotate"),k=p("invert"),x=p("gap"),_=p("gradientColorStops"),w=p("gradientColorStopPositions"),u=p("inset"),f=p("margin"),c=p("opacity"),d=p("padding"),y=p("saturate"),v=p("scale"),C=p("sepia"),E=p("skew"),$=p("space"),J=p("translate"),W=()=>["auto","contain","none"],j=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto",l,r],b=()=>[l,r],K=()=>["",A,S],L=()=>["auto",T,l],X=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],Z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],O=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",l],H=()=>["auto","avoid","all","avoid-page","page","left","right","column"],z=()=>[T,l];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[A,S],blur:["none","",M,l],brightness:z(),borderColor:[e],borderRadius:["none","","full",M,l],borderSpacing:b(),borderWidth:K(),contrast:z(),grayscale:G(),hueRotate:z(),invert:G(),gap:b(),gradientColorStops:[e],gradientColorStopPositions:[je,S],inset:B(),margin:B(),opacity:z(),padding:b(),saturate:z(),scale:z(),sepia:G(),skew:z(),space:b(),translate:b()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":H()}],"break-before":[{"break-before":H()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...X(),l]}],overflow:[{overflow:j()}],"overflow-x":[{"overflow-x":j()}],"overflow-y":[{"overflow-y":j()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[u]}],"inset-x":[{"inset-x":[u]}],"inset-y":[{"inset-y":[u]}],start:[{start:[u]}],end:[{end:[u]}],top:[{top:[u]}],right:[{right:[u]}],bottom:[{bottom:[u]}],left:[{left:[u]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P,l]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",P,l]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",P,l]},l]}],"col-start":[{"col-start":L()}],"col-end":[{"col-end":L()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[P,l]},l]}],"row-start":[{"row-start":L()}],"row-end":[{"row-end":L()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal",...O()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...O(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...O(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[d]}],px:[{px:[d]}],py:[{py:[d]}],ps:[{ps:[d]}],pe:[{pe:[d]}],pt:[{pt:[d]}],pr:[{pr:[d]}],pb:[{pb:[d]}],pl:[{pl:[d]}],m:[{m:[f]}],mx:[{mx:[f]}],my:[{my:[f]}],ms:[{ms:[f]}],me:[{me:[f]}],mt:[{mt:[f]}],mr:[{mr:[f]}],mb:[{mb:[f]}],ml:[{ml:[f]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[M]},M]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",M,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",F]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",T,F]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",A,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[c]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[c]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",A,S]}],"underline-offset":[{"underline-offset":["auto",A,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:b()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[c]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...X(),Fe]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Oe]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[n]}],"border-w-x":[{"border-x":[n]}],"border-w-y":[{"border-y":[n]}],"border-w-s":[{"border-s":[n]}],"border-w-e":[{"border-e":[n]}],"border-w-t":[{"border-t":[n]}],"border-w-r":[{"border-r":[n]}],"border-w-b":[{"border-b":[n]}],"border-w-l":[{"border-l":[n]}],"border-opacity":[{"border-opacity":[c]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[n]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[n]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[c]}],"divide-style":[{divide:V()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[A,l]}],"outline-w":[{outline:[A,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[c]}],"ring-offset-w":[{"ring-offset":[A,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",M,Ye]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[c]}],"mix-blend":[{"mix-blend":[...Z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Z()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[g]}],"drop-shadow":[{"drop-shadow":["","none",M,l]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[k]}],saturate:[{saturate:[y]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[g]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[k]}],"backdrop-opacity":[{"backdrop-opacity":[c]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:z()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:z()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[P,l]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[E]}],"skew-y":[{"skew-y":[E]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[A,S,F]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Ze=(e,{cacheSize:r,prefix:t,separator:o,experimentalParseClassName:i,extend:s={},override:a={}})=>{N(e,"cacheSize",r),N(e,"prefix",t),N(e,"separator",o),N(e,"experimentalParseClassName",i);for(const n in a)He(e[n],a[n]);for(const n in s)Qe(e[n],s[n]);return e},N=(e,r,t)=>{t!==void 0&&(e[r]=t)},He=(e,r)=>{if(r)for(const t in r)N(e,t,r[t])},Qe=(e,r)=>{if(r)for(const t in r){const o=r[t];o!==void 0&&(e[t]=(e[t]||[]).concat(o))}},De=(e,...r)=>typeof e=="function"?re(te,e,...r):re(()=>Ze(te(),e),...r),lr="primary";function cr(e){const r=e.split("-");if(r.length<=0)throw new Error(`styleVariant specified is invalid: ${e}`);return`bg-${e} text-${r[0]}-text`}function er(e,r){const t=e.colorThemes.get(r);if(t===void 0)throw new Error("Dynamic Color Theme does not contain provided color variant");return t}function dr(e,r){const t=er(e,r);return`background-color:${t.coreColor} !important; color:${t.textColor} !important;`}const ur=De({extend:{classGroups:{rounded:[{rounded:["component","container"]}]}}});export{lr as D,er as a,ar as b,dr as c,ir as d,xe as e,cr as g,sr as h,nr as s,ur as t};
