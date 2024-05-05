"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const az=require("./components.cjs"),b1=require("vue");function r9(s,n){var l=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);n&&(f=f.filter(function(v){return Object.getOwnPropertyDescriptor(s,v).enumerable})),l.push.apply(l,f)}return l}function k(s){for(var n=1;n<arguments.length;n++){var l=arguments[n]!=null?arguments[n]:{};n%2?r9(Object(l),!0).forEach(function(f){M1(s,f,l[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(l)):r9(Object(l)).forEach(function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(l,f))})}return s}function W4(s){"@babel/helpers - typeof";return W4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},W4(s)}function ez(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}function iz(s,n){for(var l=0;l<n.length;l++){var f=n[l];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(s,f.key,f)}}function rz(s,n,l){return n&&iz(s.prototype,n),Object.defineProperty(s,"prototype",{writable:!1}),s}function M1(s,n,l){return n in s?Object.defineProperty(s,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[n]=l,s}function $0(s,n){return tz(s)||oz(s,n)||y9(s,n)||fz()}function I3(s){return sz(s)||nz(s)||y9(s)||lz()}function sz(s){if(Array.isArray(s))return g0(s)}function tz(s){if(Array.isArray(s))return s}function nz(s){if(typeof Symbol<"u"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function oz(s,n){var l=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(l!=null){var f=[],v=!0,u=!1,p,C;try{for(l=l.call(s);!(v=(p=l.next()).done)&&(f.push(p.value),!(n&&f.length===n));v=!0);}catch(M){u=!0,C=M}finally{try{!v&&l.return!=null&&l.return()}finally{if(u)throw C}}return f}}function y9(s,n){if(s){if(typeof s=="string")return g0(s,n);var l=Object.prototype.toString.call(s).slice(8,-1);if(l==="Object"&&s.constructor&&(l=s.constructor.name),l==="Map"||l==="Set")return Array.from(s);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return g0(s,n)}}function g0(s,n){(n==null||n>s.length)&&(n=s.length);for(var l=0,f=new Array(n);l<n;l++)f[l]=s[l];return f}function lz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s9=function(){},F0={},A9={},P9=null,B9={mark:s9,measure:s9};try{typeof window<"u"&&(F0=window),typeof document<"u"&&(A9=document),typeof MutationObserver<"u"&&(P9=MutationObserver),typeof performance<"u"&&(B9=performance)}catch{}var hz=F0.navigator||{},t9=hz.userAgent,n9=t9===void 0?"":t9,h2=F0,n1=A9,o9=P9,B4=B9;h2.document;var r2=!!n1.documentElement&&!!n1.head&&typeof n1.addEventListener=="function"&&typeof n1.createElement=="function",T9=~n9.indexOf("MSIE")||~n9.indexOf("Trident/"),T4,$4,F4,D4,E4,a2="___FONT_AWESOME___",L0=16,$9="fa",F9="svg-inline--fa",D2="data-fa-i2svg",x0="data-fa-pseudo-element",mz="data-fa-pseudo-element-pending",D0="data-prefix",E0="data-icon",l9="fontawesome-i2svg",vz="async",zz=["HTML","HEAD","STYLE","SCRIPT"],D9=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),t1="classic",v1="sharp",q0=[t1,v1];function O3(s){return new Proxy(s,{get:function(l,f){return f in l?l[f]:l[t1]}})}var F3=O3((T4={},M1(T4,t1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),M1(T4,v1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),T4)),D3=O3(($4={},M1($4,t1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),M1($4,v1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),$4)),E3=O3((F4={},M1(F4,t1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),M1(F4,v1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),F4)),uz=O3((D4={},M1(D4,t1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),M1(D4,v1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),D4)),pz=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,E9="fa-layers-text",dz=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Hz=O3((E4={},M1(E4,t1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),M1(E4,v1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),E4)),q9=[1,2,3,4,5,6,7,8,9,10],Cz=q9.concat([11,12,13,14,15,16,17,18,19,20]),Mz=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},q3=new Set;Object.keys(D3[t1]).map(q3.add.bind(q3));Object.keys(D3[v1]).map(q3.add.bind(q3));var Vz=[].concat(q0,I3(q3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$2.GROUP,$2.SWAP_OPACITY,$2.PRIMARY,$2.SECONDARY]).concat(q9.map(function(s){return"".concat(s,"x")})).concat(Cz.map(function(s){return"w-".concat(s)})),B3=h2.FontAwesomeConfig||{};function gz(s){var n=n1.querySelector("script["+s+"]");if(n)return n.getAttribute(s)}function Lz(s){return s===""?!0:s==="false"?!1:s==="true"?!0:s}if(n1&&typeof n1.querySelector=="function"){var xz=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];xz.forEach(function(s){var n=$0(s,2),l=n[0],f=n[1],v=Lz(gz(l));v!=null&&(B3[f]=v)})}var R9={styleDefault:"solid",familyDefault:"classic",cssPrefix:$9,replacementClass:F9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};B3.familyPrefix&&(B3.cssPrefix=B3.familyPrefix);var r3=k(k({},R9),B3);r3.autoReplaceSvg||(r3.observeMutations=!1);var B={};Object.keys(R9).forEach(function(s){Object.defineProperty(B,s,{enumerable:!0,set:function(l){r3[s]=l,T3.forEach(function(f){return f(B)})},get:function(){return r3[s]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(n){r3.cssPrefix=n,T3.forEach(function(l){return l(B)})},get:function(){return r3.cssPrefix}});h2.FontAwesomeConfig=B;var T3=[];function bz(s){return T3.push(s),function(){T3.splice(T3.indexOf(s),1)}}var f2=L0,X1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wz(s){if(!(!s||!r2)){var n=n1.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=s;for(var l=n1.head.childNodes,f=null,v=l.length-1;v>-1;v--){var u=l[v],p=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(p)>-1&&(f=u)}return n1.head.insertBefore(n,f),s}}var Nz="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function R3(){for(var s=12,n="";s-- >0;)n+=Nz[Math.random()*62|0];return n}function s3(s){for(var n=[],l=(s||[]).length>>>0;l--;)n[l]=s[l];return n}function R0(s){return s.classList?s3(s.classList):(s.getAttribute("class")||"").split(" ").filter(function(n){return n})}function I9(s){return"".concat(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kz(s){return Object.keys(s||{}).reduce(function(n,l){return n+"".concat(l,'="').concat(I9(s[l]),'" ')},"").trim()}function Y4(s){return Object.keys(s||{}).reduce(function(n,l){return n+"".concat(l,": ").concat(s[l].trim(),";")},"")}function I0(s){return s.size!==X1.size||s.x!==X1.x||s.y!==X1.y||s.rotate!==X1.rotate||s.flipX||s.flipY}function Sz(s){var n=s.transform,l=s.containerWidth,f=s.iconWidth,v={transform:"translate(".concat(l/2," 256)")},u="translate(".concat(n.x*32,", ").concat(n.y*32,") "),p="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),C="rotate(".concat(n.rotate," 0 0)"),M={transform:"".concat(u," ").concat(p," ").concat(C)},x={transform:"translate(".concat(f/2*-1," -256)")};return{outer:v,inner:M,path:x}}function yz(s){var n=s.transform,l=s.width,f=l===void 0?L0:l,v=s.height,u=v===void 0?L0:v,p=s.startCentered,C=p===void 0?!1:p,M="";return C&&T9?M+="translate(".concat(n.x/f2-f/2,"em, ").concat(n.y/f2-u/2,"em) "):C?M+="translate(calc(-50% + ".concat(n.x/f2,"em), calc(-50% + ").concat(n.y/f2,"em)) "):M+="translate(".concat(n.x/f2,"em, ").concat(n.y/f2,"em) "),M+="scale(".concat(n.size/f2*(n.flipX?-1:1),", ").concat(n.size/f2*(n.flipY?-1:1),") "),M+="rotate(".concat(n.rotate,"deg) "),M}var Az=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function O9(){var s=$9,n=F9,l=B.cssPrefix,f=B.replacementClass,v=Az;if(l!==s||f!==n){var u=new RegExp("\\.".concat(s,"\\-"),"g"),p=new RegExp("\\--".concat(s,"\\-"),"g"),C=new RegExp("\\.".concat(n),"g");v=v.replace(u,".".concat(l,"-")).replace(p,"--".concat(l,"-")).replace(C,".".concat(f))}return v}var f9=!1;function H0(){B.autoAddCss&&!f9&&(wz(O9()),f9=!0)}var Pz={mixout:function(){return{dom:{css:O9,insertCss:H0}}},hooks:function(){return{beforeDOMElementCreation:function(){H0()},beforeI2svg:function(){H0()}}}},e2=h2||{};e2[a2]||(e2[a2]={});e2[a2].styles||(e2[a2].styles={});e2[a2].hooks||(e2[a2].hooks={});e2[a2].shims||(e2[a2].shims=[]);var Z1=e2[a2],U9=[],Bz=function s(){n1.removeEventListener("DOMContentLoaded",s),G4=1,U9.map(function(n){return n()})},G4=!1;r2&&(G4=(n1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(n1.readyState),G4||n1.addEventListener("DOMContentLoaded",Bz));function Tz(s){r2&&(G4?setTimeout(s,0):U9.push(s))}function U3(s){var n=s.tag,l=s.attributes,f=l===void 0?{}:l,v=s.children,u=v===void 0?[]:v;return typeof s=="string"?I9(s):"<".concat(n," ").concat(kz(f),">").concat(u.map(U3).join(""),"</").concat(n,">")}function h9(s,n,l){if(s&&s[n]&&s[n][l])return{prefix:n,iconName:l,icon:s[n][l]}}var C0=function(n,l,f,v){var u=Object.keys(n),p=u.length,C=l,M,x,g;for(f===void 0?(M=1,g=n[u[0]]):(M=0,g=f);M<p;M++)x=u[M],g=C(g,n[x],x,n);return g};function $z(s){for(var n=[],l=0,f=s.length;l<f;){var v=s.charCodeAt(l++);if(v>=55296&&v<=56319&&l<f){var u=s.charCodeAt(l++);(u&64512)==56320?n.push(((v&1023)<<10)+(u&1023)+65536):(n.push(v),l--)}else n.push(v)}return n}function b0(s){var n=$z(s);return n.length===1?n[0].toString(16):null}function Fz(s,n){var l=s.length,f=s.charCodeAt(n),v;return f>=55296&&f<=56319&&l>n+1&&(v=s.charCodeAt(n+1),v>=56320&&v<=57343)?(f-55296)*1024+v-56320+65536:f}function m9(s){return Object.keys(s).reduce(function(n,l){var f=s[l],v=!!f.icon;return v?n[f.iconName]=f.icon:n[l]=f,n},{})}function w0(s,n){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},f=l.skipHooks,v=f===void 0?!1:f,u=m9(n);typeof Z1.hooks.addPack=="function"&&!v?Z1.hooks.addPack(s,m9(n)):Z1.styles[s]=k(k({},Z1.styles[s]||{}),u),s==="fas"&&w0("fa",n)}var q4,R4,I4,a3=Z1.styles,Dz=Z1.shims,Ez=(q4={},M1(q4,t1,Object.values(E3[t1])),M1(q4,v1,Object.values(E3[v1])),q4),O0=null,W9={},G9={},_9={},Z9={},j9={},qz=(R4={},M1(R4,t1,Object.keys(F3[t1])),M1(R4,v1,Object.keys(F3[v1])),R4);function Rz(s){return~Vz.indexOf(s)}function Iz(s,n){var l=n.split("-"),f=l[0],v=l.slice(1).join("-");return f===s&&v!==""&&!Rz(v)?v:null}var Y9=function(){var n=function(u){return C0(a3,function(p,C,M){return p[M]=C0(C,u,{}),p},{})};W9=n(function(v,u,p){if(u[3]&&(v[u[3]]=p),u[2]){var C=u[2].filter(function(M){return typeof M=="number"});C.forEach(function(M){v[M.toString(16)]=p})}return v}),G9=n(function(v,u,p){if(v[p]=p,u[2]){var C=u[2].filter(function(M){return typeof M=="string"});C.forEach(function(M){v[M]=p})}return v}),j9=n(function(v,u,p){var C=u[2];return v[p]=p,C.forEach(function(M){v[M]=p}),v});var l="far"in a3||B.autoFetchSvg,f=C0(Dz,function(v,u){var p=u[0],C=u[1],M=u[2];return C==="far"&&!l&&(C="fas"),typeof p=="string"&&(v.names[p]={prefix:C,iconName:M}),typeof p=="number"&&(v.unicodes[p.toString(16)]={prefix:C,iconName:M}),v},{names:{},unicodes:{}});_9=f.names,Z9=f.unicodes,O0=X4(B.styleDefault,{family:B.familyDefault})};bz(function(s){O0=X4(s.styleDefault,{family:B.familyDefault})});Y9();function U0(s,n){return(W9[s]||{})[n]}function Oz(s,n){return(G9[s]||{})[n]}function F2(s,n){return(j9[s]||{})[n]}function X9(s){return _9[s]||{prefix:null,iconName:null}}function Uz(s){var n=Z9[s],l=U0("fas",s);return n||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function m2(){return O0}var W0=function(){return{prefix:null,iconName:null,rest:[]}};function X4(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=n.family,f=l===void 0?t1:l,v=F3[f][s],u=D3[f][s]||D3[f][v],p=s in Z1.styles?s:null;return u||p||null}var v9=(I4={},M1(I4,t1,Object.keys(E3[t1])),M1(I4,v1,Object.keys(E3[v1])),I4);function K4(s){var n,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=l.skipLookups,v=f===void 0?!1:f,u=(n={},M1(n,t1,"".concat(B.cssPrefix,"-").concat(t1)),M1(n,v1,"".concat(B.cssPrefix,"-").concat(v1)),n),p=null,C=t1;(s.includes(u[t1])||s.some(function(x){return v9[t1].includes(x)}))&&(C=t1),(s.includes(u[v1])||s.some(function(x){return v9[v1].includes(x)}))&&(C=v1);var M=s.reduce(function(x,g){var S=Iz(B.cssPrefix,g);if(a3[g]?(g=Ez[C].includes(g)?uz[C][g]:g,p=g,x.prefix=g):qz[C].indexOf(g)>-1?(p=g,x.prefix=X4(g,{family:C})):S?x.iconName=S:g!==B.replacementClass&&g!==u[t1]&&g!==u[v1]&&x.rest.push(g),!v&&x.prefix&&x.iconName){var V=p==="fa"?X9(x.iconName):{},R=F2(x.prefix,x.iconName);V.prefix&&(p=null),x.iconName=V.iconName||R||x.iconName,x.prefix=V.prefix||x.prefix,x.prefix==="far"&&!a3.far&&a3.fas&&!B.autoFetchSvg&&(x.prefix="fas")}return x},W0());return(s.includes("fa-brands")||s.includes("fab"))&&(M.prefix="fab"),(s.includes("fa-duotone")||s.includes("fad"))&&(M.prefix="fad"),!M.prefix&&C===v1&&(a3.fass||B.autoFetchSvg)&&(M.prefix="fass",M.iconName=F2(M.prefix,M.iconName)||M.iconName),(M.prefix==="fa"||p==="fa")&&(M.prefix=m2()||"fas"),M}var Wz=function(){function s(){ez(this,s),this.definitions={}}return rz(s,[{key:"add",value:function(){for(var l=this,f=arguments.length,v=new Array(f),u=0;u<f;u++)v[u]=arguments[u];var p=v.reduce(this._pullDefinitions,{});Object.keys(p).forEach(function(C){l.definitions[C]=k(k({},l.definitions[C]||{}),p[C]),w0(C,p[C]);var M=E3[t1][C];M&&w0(M,p[C]),Y9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,f){var v=f.prefix&&f.iconName&&f.icon?{0:f}:f;return Object.keys(v).map(function(u){var p=v[u],C=p.prefix,M=p.iconName,x=p.icon,g=x[2];l[C]||(l[C]={}),g.length>0&&g.forEach(function(S){typeof S=="string"&&(l[C][S]=x)}),l[C][M]=x}),l}}]),s}(),z9=[],e3={},i3={},Gz=Object.keys(i3);function _z(s,n){var l=n.mixoutsTo;return z9=s,e3={},Object.keys(i3).forEach(function(f){Gz.indexOf(f)===-1&&delete i3[f]}),z9.forEach(function(f){var v=f.mixout?f.mixout():{};if(Object.keys(v).forEach(function(p){typeof v[p]=="function"&&(l[p]=v[p]),W4(v[p])==="object"&&Object.keys(v[p]).forEach(function(C){l[p]||(l[p]={}),l[p][C]=v[p][C]})}),f.hooks){var u=f.hooks();Object.keys(u).forEach(function(p){e3[p]||(e3[p]=[]),e3[p].push(u[p])})}f.provides&&f.provides(i3)}),l}function N0(s,n){for(var l=arguments.length,f=new Array(l>2?l-2:0),v=2;v<l;v++)f[v-2]=arguments[v];var u=e3[s]||[];return u.forEach(function(p){n=p.apply(null,[n].concat(f))}),n}function E2(s){for(var n=arguments.length,l=new Array(n>1?n-1:0),f=1;f<n;f++)l[f-1]=arguments[f];var v=e3[s]||[];v.forEach(function(u){u.apply(null,l)})}function i2(){var s=arguments[0],n=Array.prototype.slice.call(arguments,1);return i3[s]?i3[s].apply(null,n):void 0}function k0(s){s.prefix==="fa"&&(s.prefix="fas");var n=s.iconName,l=s.prefix||m2();if(n)return n=F2(l,n)||n,h9(K9.definitions,l,n)||h9(Z1.styles,l,n)}var K9=new Wz,Zz=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,E2("noAuto")},jz={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return r2?(E2("beforeI2svg",n),i2("pseudoElements2svg",n),i2("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=n.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,Tz(function(){Xz({autoReplaceSvgRoot:l}),E2("watch",n)})}},Yz={icon:function(n){if(n===null)return null;if(W4(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:F2(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var l=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],f=X4(n[0]);return{prefix:f,iconName:F2(f,l)||l}}if(typeof n=="string"&&(n.indexOf("".concat(B.cssPrefix,"-"))>-1||n.match(pz))){var v=K4(n.split(" "),{skipLookups:!0});return{prefix:v.prefix||m2(),iconName:F2(v.prefix,v.iconName)||v.iconName}}if(typeof n=="string"){var u=m2();return{prefix:u,iconName:F2(u,n)||n}}}},I1={noAuto:Zz,config:B,dom:jz,parse:Yz,library:K9,findIconDefinition:k0,toHtml:U3},Xz=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=n.autoReplaceSvgRoot,f=l===void 0?n1:l;(Object.keys(Z1.styles).length>0||B.autoFetchSvg)&&r2&&B.autoReplaceSvg&&I1.dom.i2svg({node:f})};function Q4(s,n){return Object.defineProperty(s,"abstract",{get:n}),Object.defineProperty(s,"html",{get:function(){return s.abstract.map(function(f){return U3(f)})}}),Object.defineProperty(s,"node",{get:function(){if(r2){var f=n1.createElement("div");return f.innerHTML=s.html,f.children}}}),s}function Kz(s){var n=s.children,l=s.main,f=s.mask,v=s.attributes,u=s.styles,p=s.transform;if(I0(p)&&l.found&&!f.found){var C=l.width,M=l.height,x={x:C/M/2,y:.5};v.style=Y4(k(k({},u),{},{"transform-origin":"".concat(x.x+p.x/16,"em ").concat(x.y+p.y/16,"em")}))}return[{tag:"svg",attributes:v,children:n}]}function Qz(s){var n=s.prefix,l=s.iconName,f=s.children,v=s.attributes,u=s.symbol,p=u===!0?"".concat(n,"-").concat(B.cssPrefix,"-").concat(l):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},v),{},{id:p}),children:f}]}]}function G0(s){var n=s.icons,l=n.main,f=n.mask,v=s.prefix,u=s.iconName,p=s.transform,C=s.symbol,M=s.title,x=s.maskId,g=s.titleId,S=s.extra,V=s.watchable,R=V===void 0?!1:V,G=f.found?f:l,o1=G.width,i1=G.height,b=v==="fak",A=[B.replacementClass,u?"".concat(B.cssPrefix,"-").concat(u):""].filter(function(k1){return S.classes.indexOf(k1)===-1}).filter(function(k1){return k1!==""||!!k1}).concat(S.classes).join(" "),_={children:[],attributes:k(k({},S.attributes),{},{"data-prefix":v,"data-icon":u,class:A,role:S.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(o1," ").concat(i1)})},e1=b&&!~S.classes.indexOf("fa-fw")?{width:"".concat(o1/i1*16*.0625,"em")}:{};R&&(_.attributes[D2]=""),M&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(g||R3())},children:[M]}),delete _.attributes.title);var r1=k(k({},_),{},{prefix:v,iconName:u,main:l,mask:f,maskId:x,transform:p,symbol:C,styles:k(k({},e1),S.styles)}),N1=f.found&&l.found?i2("generateAbstractMask",r1)||{children:[],attributes:{}}:i2("generateAbstractIcon",r1)||{children:[],attributes:{}},V1=N1.children,z2=N1.attributes;return r1.children=V1,r1.attributes=z2,C?Qz(r1):Kz(r1)}function u9(s){var n=s.content,l=s.width,f=s.height,v=s.transform,u=s.title,p=s.extra,C=s.watchable,M=C===void 0?!1:C,x=k(k(k({},p.attributes),u?{title:u}:{}),{},{class:p.classes.join(" ")});M&&(x[D2]="");var g=k({},p.styles);I0(v)&&(g.transform=yz({transform:v,startCentered:!0,width:l,height:f}),g["-webkit-transform"]=g.transform);var S=Y4(g);S.length>0&&(x.style=S);var V=[];return V.push({tag:"span",attributes:x,children:[n]}),u&&V.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),V}function Jz(s){var n=s.content,l=s.title,f=s.extra,v=k(k(k({},f.attributes),l?{title:l}:{}),{},{class:f.classes.join(" ")}),u=Y4(f.styles);u.length>0&&(v.style=u);var p=[];return p.push({tag:"span",attributes:v,children:[n]}),l&&p.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),p}var M0=Z1.styles;function S0(s){var n=s[0],l=s[1],f=s.slice(4),v=$0(f,1),u=v[0],p=null;return Array.isArray(u)?p={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat($2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat($2.SECONDARY),fill:"currentColor",d:u[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat($2.PRIMARY),fill:"currentColor",d:u[1]}}]}:p={tag:"path",attributes:{fill:"currentColor",d:u}},{found:!0,width:n,height:l,icon:p}}var cu={found:!1,width:512,height:512};function au(s,n){!D9&&!B.showMissingIcons&&s&&console.error('Icon with name "'.concat(s,'" and prefix "').concat(n,'" is missing.'))}function y0(s,n){var l=n;return n==="fa"&&B.styleDefault!==null&&(n=m2()),new Promise(function(f,v){if(i2("missingIconAbstract"),l==="fa"){var u=X9(s)||{};s=u.iconName||s,n=u.prefix||n}if(s&&n&&M0[n]&&M0[n][s]){var p=M0[n][s];return f(S0(p))}au(s,n),f(k(k({},cu),{},{icon:B.showMissingIcons&&s?i2("missingIconAbstract")||{}:{}}))})}var p9=function(){},A0=B.measurePerformance&&B4&&B4.mark&&B4.measure?B4:{mark:p9,measure:p9},P3='FA "6.5.2"',eu=function(n){return A0.mark("".concat(P3," ").concat(n," begins")),function(){return Q9(n)}},Q9=function(n){A0.mark("".concat(P3," ").concat(n," ends")),A0.measure("".concat(P3," ").concat(n),"".concat(P3," ").concat(n," begins"),"".concat(P3," ").concat(n," ends"))},_0={begin:eu,end:Q9},O4=function(){};function d9(s){var n=s.getAttribute?s.getAttribute(D2):null;return typeof n=="string"}function iu(s){var n=s.getAttribute?s.getAttribute(D0):null,l=s.getAttribute?s.getAttribute(E0):null;return n&&l}function ru(s){return s&&s.classList&&s.classList.contains&&s.classList.contains(B.replacementClass)}function su(){if(B.autoReplaceSvg===!0)return U4.replace;var s=U4[B.autoReplaceSvg];return s||U4.replace}function tu(s){return n1.createElementNS("http://www.w3.org/2000/svg",s)}function nu(s){return n1.createElement(s)}function J9(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=n.ceFn,f=l===void 0?s.tag==="svg"?tu:nu:l;if(typeof s=="string")return n1.createTextNode(s);var v=f(s.tag);Object.keys(s.attributes||[]).forEach(function(p){v.setAttribute(p,s.attributes[p])});var u=s.children||[];return u.forEach(function(p){v.appendChild(J9(p,{ceFn:f}))}),v}function ou(s){var n=" ".concat(s.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var U4={replace:function(n){var l=n[0];if(l.parentNode)if(n[1].forEach(function(v){l.parentNode.insertBefore(J9(v),l)}),l.getAttribute(D2)===null&&B.keepOriginalSource){var f=n1.createComment(ou(l));l.parentNode.replaceChild(f,l)}else l.remove()},nest:function(n){var l=n[0],f=n[1];if(~R0(l).indexOf(B.replacementClass))return U4.replace(n);var v=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete f[0].attributes.id,f[0].attributes.class){var u=f[0].attributes.class.split(" ").reduce(function(C,M){return M===B.replacementClass||M.match(v)?C.toSvg.push(M):C.toNode.push(M),C},{toNode:[],toSvg:[]});f[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",u.toNode.join(" "))}var p=f.map(function(C){return U3(C)}).join(`
`);l.setAttribute(D2,""),l.innerHTML=p}};function H9(s){s()}function cc(s,n){var l=typeof n=="function"?n:O4;if(s.length===0)l();else{var f=H9;B.mutateApproach===vz&&(f=h2.requestAnimationFrame||H9),f(function(){var v=su(),u=_0.begin("mutate");s.map(v),u(),l()})}}var Z0=!1;function ac(){Z0=!0}function P0(){Z0=!1}var _4=null;function C9(s){if(o9&&B.observeMutations){var n=s.treeCallback,l=n===void 0?O4:n,f=s.nodeCallback,v=f===void 0?O4:f,u=s.pseudoElementsCallback,p=u===void 0?O4:u,C=s.observeMutationsRoot,M=C===void 0?n1:C;_4=new o9(function(x){if(!Z0){var g=m2();s3(x).forEach(function(S){if(S.type==="childList"&&S.addedNodes.length>0&&!d9(S.addedNodes[0])&&(B.searchPseudoElements&&p(S.target),l(S.target)),S.type==="attributes"&&S.target.parentNode&&B.searchPseudoElements&&p(S.target.parentNode),S.type==="attributes"&&d9(S.target)&&~Mz.indexOf(S.attributeName))if(S.attributeName==="class"&&iu(S.target)){var V=K4(R0(S.target)),R=V.prefix,G=V.iconName;S.target.setAttribute(D0,R||g),G&&S.target.setAttribute(E0,G)}else ru(S.target)&&v(S.target)})}}),r2&&_4.observe(M,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lu(){_4&&_4.disconnect()}function fu(s){var n=s.getAttribute("style"),l=[];return n&&(l=n.split(";").reduce(function(f,v){var u=v.split(":"),p=u[0],C=u.slice(1);return p&&C.length>0&&(f[p]=C.join(":").trim()),f},{})),l}function hu(s){var n=s.getAttribute("data-prefix"),l=s.getAttribute("data-icon"),f=s.innerText!==void 0?s.innerText.trim():"",v=K4(R0(s));return v.prefix||(v.prefix=m2()),n&&l&&(v.prefix=n,v.iconName=l),v.iconName&&v.prefix||(v.prefix&&f.length>0&&(v.iconName=Oz(v.prefix,s.innerText)||U0(v.prefix,b0(s.innerText))),!v.iconName&&B.autoFetchSvg&&s.firstChild&&s.firstChild.nodeType===Node.TEXT_NODE&&(v.iconName=s.firstChild.data)),v}function mu(s){var n=s3(s.attributes).reduce(function(v,u){return v.name!=="class"&&v.name!=="style"&&(v[u.name]=u.value),v},{}),l=s.getAttribute("title"),f=s.getAttribute("data-fa-title-id");return B.autoA11y&&(l?n["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(f||R3()):(n["aria-hidden"]="true",n.focusable="false")),n}function vu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:X1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function M9(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=hu(s),f=l.iconName,v=l.prefix,u=l.rest,p=mu(s),C=N0("parseNodeAttributes",{},s),M=n.styleParser?fu(s):[];return k({iconName:f,title:s.getAttribute("title"),titleId:s.getAttribute("data-fa-title-id"),prefix:v,transform:X1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:M,attributes:p}},C)}var zu=Z1.styles;function ec(s){var n=B.autoReplaceSvg==="nest"?M9(s,{styleParser:!1}):M9(s);return~n.extra.classes.indexOf(E9)?i2("generateLayersText",s,n):i2("generateSvgReplacementMutation",s,n)}var v2=new Set;q0.map(function(s){v2.add("fa-".concat(s))});Object.keys(F3[t1]).map(v2.add.bind(v2));Object.keys(F3[v1]).map(v2.add.bind(v2));v2=I3(v2);function V9(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!r2)return Promise.resolve();var l=n1.documentElement.classList,f=function(S){return l.add("".concat(l9,"-").concat(S))},v=function(S){return l.remove("".concat(l9,"-").concat(S))},u=B.autoFetchSvg?v2:q0.map(function(g){return"fa-".concat(g)}).concat(Object.keys(zu));u.includes("fa")||u.push("fa");var p=[".".concat(E9,":not([").concat(D2,"])")].concat(u.map(function(g){return".".concat(g,":not([").concat(D2,"])")})).join(", ");if(p.length===0)return Promise.resolve();var C=[];try{C=s3(s.querySelectorAll(p))}catch{}if(C.length>0)f("pending"),v("complete");else return Promise.resolve();var M=_0.begin("onTree"),x=C.reduce(function(g,S){try{var V=ec(S);V&&g.push(V)}catch(R){D9||R.name==="MissingIcon"&&console.error(R)}return g},[]);return new Promise(function(g,S){Promise.all(x).then(function(V){cc(V,function(){f("active"),f("complete"),v("pending"),typeof n=="function"&&n(),M(),g()})}).catch(function(V){M(),S(V)})})}function uu(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ec(s).then(function(l){l&&cc([l],n)})}function pu(s){return function(n){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=(n||{}).icon?n:k0(n||{}),v=l.mask;return v&&(v=(v||{}).icon?v:k0(v||{})),s(f,k(k({},l),{},{mask:v}))}}var du=function(n){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=l.transform,v=f===void 0?X1:f,u=l.symbol,p=u===void 0?!1:u,C=l.mask,M=C===void 0?null:C,x=l.maskId,g=x===void 0?null:x,S=l.title,V=S===void 0?null:S,R=l.titleId,G=R===void 0?null:R,o1=l.classes,i1=o1===void 0?[]:o1,b=l.attributes,A=b===void 0?{}:b,_=l.styles,e1=_===void 0?{}:_;if(n){var r1=n.prefix,N1=n.iconName,V1=n.icon;return Q4(k({type:"icon"},n),function(){return E2("beforeDOMElementCreation",{iconDefinition:n,params:l}),B.autoA11y&&(V?A["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(G||R3()):(A["aria-hidden"]="true",A.focusable="false")),G0({icons:{main:S0(V1),mask:M?S0(M.icon):{found:!1,width:null,height:null,icon:{}}},prefix:r1,iconName:N1,transform:k(k({},X1),v),symbol:p,title:V,maskId:g,titleId:G,extra:{attributes:A,styles:e1,classes:i1}})})}},Hu={mixout:function(){return{icon:pu(du)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=V9,l.nodeCallback=uu,l}}},provides:function(n){n.i2svg=function(l){var f=l.node,v=f===void 0?n1:f,u=l.callback,p=u===void 0?function(){}:u;return V9(v,p)},n.generateSvgReplacementMutation=function(l,f){var v=f.iconName,u=f.title,p=f.titleId,C=f.prefix,M=f.transform,x=f.symbol,g=f.mask,S=f.maskId,V=f.extra;return new Promise(function(R,G){Promise.all([y0(v,C),g.iconName?y0(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o1){var i1=$0(o1,2),b=i1[0],A=i1[1];R([l,G0({icons:{main:b,mask:A},prefix:C,iconName:v,transform:M,symbol:x,maskId:S,title:u,titleId:p,extra:V,watchable:!0})])}).catch(G)})},n.generateAbstractIcon=function(l){var f=l.children,v=l.attributes,u=l.main,p=l.transform,C=l.styles,M=Y4(C);M.length>0&&(v.style=M);var x;return I0(p)&&(x=i2("generateAbstractTransformGrouping",{main:u,transform:p,containerWidth:u.width,iconWidth:u.width})),f.push(x||u.icon),{children:f,attributes:v}}}},Cu={mixout:function(){return{layer:function(l){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=f.classes,u=v===void 0?[]:v;return Q4({type:"layer"},function(){E2("beforeDOMElementCreation",{assembler:l,params:f});var p=[];return l(function(C){Array.isArray(C)?C.map(function(M){p=p.concat(M.abstract)}):p=p.concat(C.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(I3(u)).join(" ")},children:p}]})}}}},Mu={mixout:function(){return{counter:function(l){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=f.title,u=v===void 0?null:v,p=f.classes,C=p===void 0?[]:p,M=f.attributes,x=M===void 0?{}:M,g=f.styles,S=g===void 0?{}:g;return Q4({type:"counter",content:l},function(){return E2("beforeDOMElementCreation",{content:l,params:f}),Jz({content:l.toString(),title:u,extra:{attributes:x,styles:S,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(I3(C))}})})}}}},Vu={mixout:function(){return{text:function(l){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=f.transform,u=v===void 0?X1:v,p=f.title,C=p===void 0?null:p,M=f.classes,x=M===void 0?[]:M,g=f.attributes,S=g===void 0?{}:g,V=f.styles,R=V===void 0?{}:V;return Q4({type:"text",content:l},function(){return E2("beforeDOMElementCreation",{content:l,params:f}),u9({content:l,transform:k(k({},X1),u),title:C,extra:{attributes:S,styles:R,classes:["".concat(B.cssPrefix,"-layers-text")].concat(I3(x))}})})}}},provides:function(n){n.generateLayersText=function(l,f){var v=f.title,u=f.transform,p=f.extra,C=null,M=null;if(T9){var x=parseInt(getComputedStyle(l).fontSize,10),g=l.getBoundingClientRect();C=g.width/x,M=g.height/x}return B.autoA11y&&!v&&(p.attributes["aria-hidden"]="true"),Promise.resolve([l,u9({content:l.innerHTML,width:C,height:M,transform:u,title:v,extra:p,watchable:!0})])}}},gu=new RegExp('"',"ug"),g9=[1105920,1112319];function Lu(s){var n=s.replace(gu,""),l=Fz(n,0),f=l>=g9[0]&&l<=g9[1],v=n.length===2?n[0]===n[1]:!1;return{value:b0(v?n[0]:n),isSecondary:f||v}}function L9(s,n){var l="".concat(mz).concat(n.replace(":","-"));return new Promise(function(f,v){if(s.getAttribute(l)!==null)return f();var u=s3(s.children),p=u.filter(function(V1){return V1.getAttribute(x0)===n})[0],C=h2.getComputedStyle(s,n),M=C.getPropertyValue("font-family").match(dz),x=C.getPropertyValue("font-weight"),g=C.getPropertyValue("content");if(p&&!M)return s.removeChild(p),f();if(M&&g!=="none"&&g!==""){var S=C.getPropertyValue("content"),V=~["Sharp"].indexOf(M[2])?v1:t1,R=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(M[2])?D3[V][M[2].toLowerCase()]:Hz[V][x],G=Lu(S),o1=G.value,i1=G.isSecondary,b=M[0].startsWith("FontAwesome"),A=U0(R,o1),_=A;if(b){var e1=Uz(o1);e1.iconName&&e1.prefix&&(A=e1.iconName,R=e1.prefix)}if(A&&!i1&&(!p||p.getAttribute(D0)!==R||p.getAttribute(E0)!==_)){s.setAttribute(l,_),p&&s.removeChild(p);var r1=vu(),N1=r1.extra;N1.attributes[x0]=n,y0(A,R).then(function(V1){var z2=G0(k(k({},r1),{},{icons:{main:V1,mask:W0()},prefix:R,iconName:_,extra:N1,watchable:!0})),k1=n1.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?s.insertBefore(k1,s.firstChild):s.appendChild(k1),k1.outerHTML=z2.map(function(a1){return U3(a1)}).join(`
`),s.removeAttribute(l),f()}).catch(v)}else f()}else f()})}function xu(s){return Promise.all([L9(s,"::before"),L9(s,"::after")])}function bu(s){return s.parentNode!==document.head&&!~zz.indexOf(s.tagName.toUpperCase())&&!s.getAttribute(x0)&&(!s.parentNode||s.parentNode.tagName!=="svg")}function x9(s){if(r2)return new Promise(function(n,l){var f=s3(s.querySelectorAll("*")).filter(bu).map(xu),v=_0.begin("searchPseudoElements");ac(),Promise.all(f).then(function(){v(),P0(),n()}).catch(function(){v(),P0(),l()})})}var wu={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=x9,l}}},provides:function(n){n.pseudoElements2svg=function(l){var f=l.node,v=f===void 0?n1:f;B.searchPseudoElements&&x9(v)}}},b9=!1,Nu={mixout:function(){return{dom:{unwatch:function(){ac(),b9=!0}}}},hooks:function(){return{bootstrap:function(){C9(N0("mutationObserverCallbacks",{}))},noAuto:function(){lu()},watch:function(l){var f=l.observeMutationsRoot;b9?P0():C9(N0("mutationObserverCallbacks",{observeMutationsRoot:f}))}}}},w9=function(n){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(f,v){var u=v.toLowerCase().split("-"),p=u[0],C=u.slice(1).join("-");if(p&&C==="h")return f.flipX=!0,f;if(p&&C==="v")return f.flipY=!0,f;if(C=parseFloat(C),isNaN(C))return f;switch(p){case"grow":f.size=f.size+C;break;case"shrink":f.size=f.size-C;break;case"left":f.x=f.x-C;break;case"right":f.x=f.x+C;break;case"up":f.y=f.y-C;break;case"down":f.y=f.y+C;break;case"rotate":f.rotate=f.rotate+C;break}return f},l)},ku={mixout:function(){return{parse:{transform:function(l){return w9(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,f){var v=f.getAttribute("data-fa-transform");return v&&(l.transform=w9(v)),l}}},provides:function(n){n.generateAbstractTransformGrouping=function(l){var f=l.main,v=l.transform,u=l.containerWidth,p=l.iconWidth,C={transform:"translate(".concat(u/2," 256)")},M="translate(".concat(v.x*32,", ").concat(v.y*32,") "),x="scale(".concat(v.size/16*(v.flipX?-1:1),", ").concat(v.size/16*(v.flipY?-1:1),") "),g="rotate(".concat(v.rotate," 0 0)"),S={transform:"".concat(M," ").concat(x," ").concat(g)},V={transform:"translate(".concat(p/2*-1," -256)")},R={outer:C,inner:S,path:V};return{tag:"g",attributes:k({},R.outer),children:[{tag:"g",attributes:k({},R.inner),children:[{tag:f.icon.tag,children:f.icon.children,attributes:k(k({},f.icon.attributes),R.path)}]}]}}}},V0={x:0,y:0,width:"100%",height:"100%"};function N9(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return s.attributes&&(s.attributes.fill||n)&&(s.attributes.fill="black"),s}function Su(s){return s.tag==="g"?s.children:[s]}var yu={hooks:function(){return{parseNodeAttributes:function(l,f){var v=f.getAttribute("data-fa-mask"),u=v?K4(v.split(" ").map(function(p){return p.trim()})):W0();return u.prefix||(u.prefix=m2()),l.mask=u,l.maskId=f.getAttribute("data-fa-mask-id"),l}}},provides:function(n){n.generateAbstractMask=function(l){var f=l.children,v=l.attributes,u=l.main,p=l.mask,C=l.maskId,M=l.transform,x=u.width,g=u.icon,S=p.width,V=p.icon,R=Sz({transform:M,containerWidth:S,iconWidth:x}),G={tag:"rect",attributes:k(k({},V0),{},{fill:"white"})},o1=g.children?{children:g.children.map(N9)}:{},i1={tag:"g",attributes:k({},R.inner),children:[N9(k({tag:g.tag,attributes:k(k({},g.attributes),R.path)},o1))]},b={tag:"g",attributes:k({},R.outer),children:[i1]},A="mask-".concat(C||R3()),_="clip-".concat(C||R3()),e1={tag:"mask",attributes:k(k({},V0),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[G,b]},r1={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:Su(V)},e1]};return f.push(r1,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(A,")")},V0)}),{children:f,attributes:v}}}},Au={provides:function(n){var l=!1;h2.matchMedia&&(l=h2.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var f=[],v={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};f.push({tag:"path",attributes:k(k({},v),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var p=k(k({},u),{},{attributeName:"opacity"}),C={tag:"circle",attributes:k(k({},v),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||C.children.push({tag:"animate",attributes:k(k({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},p),{},{values:"1;0;1;1;0;1;"})}),f.push(C),f.push({tag:"path",attributes:k(k({},v),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:k(k({},p),{},{values:"1;0;0;0;0;1;"})}]}),l||f.push({tag:"path",attributes:k(k({},v),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},p),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:f}}}},Pu={hooks:function(){return{parseNodeAttributes:function(l,f){var v=f.getAttribute("data-fa-symbol"),u=v===null?!1:v===""?!0:v;return l.symbol=u,l}}}},Bu=[Pz,Hu,Cu,Mu,Vu,wu,Nu,ku,yu,Au,Pu];_z(Bu,{mixoutsTo:I1});I1.noAuto;var ic=I1.config,Tu=I1.library;I1.dom;var Z4=I1.parse;I1.findIconDefinition;I1.toHtml;var $u=I1.icon;I1.layer;var Fu=I1.text;I1.counter;function k9(s,n){var l=Object.keys(s);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);n&&(f=f.filter(function(v){return Object.getOwnPropertyDescriptor(s,v).enumerable})),l.push.apply(l,f)}return l}function _1(s){for(var n=1;n<arguments.length;n++){var l=arguments[n]!=null?arguments[n]:{};n%2?k9(Object(l),!0).forEach(function(f){T1(s,f,l[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(l)):k9(Object(l)).forEach(function(f){Object.defineProperty(s,f,Object.getOwnPropertyDescriptor(l,f))})}return s}function j4(s){"@babel/helpers - typeof";return j4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},j4(s)}function T1(s,n,l){return n=Wu(n),n in s?Object.defineProperty(s,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[n]=l,s}function Du(s,n){if(s==null)return{};var l={},f=Object.keys(s),v,u;for(u=0;u<f.length;u++)v=f[u],!(n.indexOf(v)>=0)&&(l[v]=s[v]);return l}function Eu(s,n){if(s==null)return{};var l=Du(s,n),f,v;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(v=0;v<u.length;v++)f=u[v],!(n.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(s,f)&&(l[f]=s[f])}return l}function B0(s){return qu(s)||Ru(s)||Iu(s)||Ou()}function qu(s){if(Array.isArray(s))return T0(s)}function Ru(s){if(typeof Symbol<"u"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function Iu(s,n){if(s){if(typeof s=="string")return T0(s,n);var l=Object.prototype.toString.call(s).slice(8,-1);if(l==="Object"&&s.constructor&&(l=s.constructor.name),l==="Map"||l==="Set")return Array.from(s);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return T0(s,n)}}function T0(s,n){(n==null||n>s.length)&&(n=s.length);for(var l=0,f=new Array(n);l<n;l++)f[l]=s[l];return f}function Ou(){throw new TypeError(`Invalid attempt to spread non-iterable instance.