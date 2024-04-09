import B, { createContext, forwardRef, useState, useRef, memo, useContext, useEffect, useMemo, useCallback, useDebugValue, createElement } from 'react';
import { PostContentType, SubscriptionLevels, CommentRepository, PostRepository, CommunityRepository, ChannelRepository, UserRepository, getUserTopic, getCommunityTopic, getCommentTopic, getPostTopic, FileType, CommunityPostSettings, PollRepository, subscribeTopic, FileRepository, Client, CategoryRepository, SubChannelRepository, MessageRepository, StreamRepository, FeedRepository, ReactionRepository, getChannelTopic, getMessageTopic } from '@amityco/ts-sdk';
import * as et from 'stylis';
import { FormattedMessage, useIntl, IntlProvider, FormattedDate, FormattedTime } from 'react-intl';
import Ov from 'lodash/merge';
import { parseToHsl } from 'polished';
import Nv from 'lodash/isEmpty';
import tp from 'millify';
import { Mention, MentionsInput } from 'react-mentions';
import l6 from 'clsx';
import MM from 'react-textarea-autosize';
import _x from 'react-loading-skeleton';
import Gd from 'react-truncate-markup';
import tb from 'linkify-react';
import xb from 'react-timeago';
import { SizeMe } from 'react-sizeme';
import fi from 'hls.js';
import Mw from 'filesize';
import { Controller, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { v4 } from 'uuid';
import oT from 'react-infinite-scroll-component';
import { Popover } from 'react-tiny-popover';
import { zodResolver } from '@hookform/resolvers/zod';
import * as _t from 'zod';
import sk from 'react-use/lib/useMeasure';
import lk from 'react-use/lib/useScroll';
import { trim } from 'lodash';

var JC=Object.create;var xs=Object.defineProperty,XC=Object.defineProperties,RC=Object.getOwnPropertyDescriptor,eh=Object.getOwnPropertyDescriptors,th=Object.getOwnPropertyNames,o1=Object.getOwnPropertySymbols,oh=Object.getPrototypeOf,Ms=Object.prototype.hasOwnProperty,_0=Object.prototype.propertyIsEnumerable;var G0=(e,t,o)=>t in e?xs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))Ms.call(t,o)&&G0(e,o,t[o]);if(o1)for(var o of o1(t))_0.call(t,o)&&G0(e,o,t[o]);return e},w=(e,t)=>XC(e,eh(t));(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,o)=>(typeof require!="undefined"?require:t)[o]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var M=(e,t)=>{var o={};for(var r in e)Ms.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&o1)for(var r of o1(e))t.indexOf(r)<0&&_0.call(e,r)&&(o[r]=e[r]);return o};var nh=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ih=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of th(t))!Ms.call(e,n)&&n!==o&&xs(e,n,{get:()=>t[n],enumerable:!(r=RC(t,n))||r.enumerable});return e};var ah=(e,t,o)=>(o=e!=null?JC(oh(e)):{},ih(t||!e||!e.__esModule?xs(o,"default",{value:e,enumerable:!0}):o,e));var I=(e,t,o)=>new Promise((r,n)=>{var a=m=>{try{l(o.next(m));}catch(p){n(p);}},s=m=>{try{l(o.throw(m));}catch(p){n(p);}},l=m=>m.done?r(m.value):Promise.resolve(m.value).then(a,s);l((o=o.apply(e,t)).next());});var Q0=nh((oz,Y0)=>{Y0.exports=function(t,o,r,n){var a=r?r.call(n,t,o):void 0;if(a!==void 0)return !!a;if(t===o)return !0;if(typeof t!="object"||!t||typeof o!="object"||!o)return !1;var s=Object.keys(t),l=Object.keys(o);if(s.length!==l.length)return !1;for(var m=Object.prototype.hasOwnProperty.bind(o),p=0;p<s.length;p++){var u=s[p];if(!m(u))return !1;var c=t[u],g=o[u];if(a=r?r.call(n,c,g,u):void 0,a===!1||a===void 0&&c!==g)return !1}return !0};});var Ee=function(){return Ee=Object.assign||function(t){for(var o,r=1,n=arguments.length;r<n;r++){o=arguments[r];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);}return t},Ee.apply(this,arguments)};function ir(e,t,o){if(o||arguments.length===2)for(var r=0,n=t.length,a;r<n;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}function q0(e){var t=Object.create(null);return function(o){return t[o]===void 0&&(t[o]=e(o)),t[o]}}var sh=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Z0=q0(function(e){return sh.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});ah(Q0());var lh={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},W0=lh;var po=typeof process!="undefined"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",d3="active",d1="data-styled-version",Hr="6.1.6",Fs=`/*!sc*/
`,f1=typeof window!="undefined"&&"HTMLElement"in window,fh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production");var J0=/invalid hook call/i,r1=new Set,gh=function(e,t){if(process.env.NODE_ENV!=="production"){var o=t?' with the id of "'.concat(t,'"'):"",r="The component ".concat(e).concat(o,` has been created dynamically.
`)+`You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var a=!0;console.error=function(s){for(var l=[],m=1;m<arguments.length;m++)l[m-1]=arguments[m];J0.test(s)?(a=!1,r1.delete(r)):n.apply(void 0,ir([s],l,!1));},useRef(),a&&!r1.has(r)&&(console.warn(r),r1.add(r));}catch(s){J0.test(s.message)&&r1.delete(r);}finally{console.error=n;}}},g1=Object.freeze([]),Vr=Object.freeze({});function Ch(e,t,o){return o===void 0&&(o=Vr),e.theme!==o.theme&&e.theme||t||o.theme}var Ps=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yh=/(^-|-$)/g;function X0(e){return e.replace(hh,"-").replace(yh,"")}var vh=/(a)(d)/gi,n1=52,R0=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ss(e){var t,o="";for(t=Math.abs(e);t>n1;t=t/n1|0)o=R0(t%n1)+o;return (R0(t%n1)+o).replace(vh,"$1-$2")}var bs,p3=5381,ar=function(e,t){for(var o=t.length;o;)e=33*e^t.charCodeAt(--o);return e},c3=function(e){return ar(p3,e)};function xh(e){return Ss(c3(e)>>>0)}function u3(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Is(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var f3=typeof Symbol=="function"&&Symbol.for,g3=f3?Symbol.for("react.memo"):60115,Mh=f3?Symbol.for("react.forward_ref"):60112,bh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ih={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},C3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wh=((bs={})[Mh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bs[g3]=C3,bs);function e3(e){return ("type"in(t=e)&&t.type.$$typeof)===g3?C3:"$$typeof"in e?wh[e.$$typeof]:bh;var t;}var Ph=Object.defineProperty,Sh=Object.getOwnPropertyNames,t3=Object.getOwnPropertySymbols,Th=Object.getOwnPropertyDescriptor,Nh=Object.getPrototypeOf,o3=Object.prototype;function h3(e,t,o){if(typeof t!="string"){if(o3){var r=Nh(t);r&&r!==o3&&h3(e,r,o);}var n=Sh(t);t3&&(n=n.concat(t3(t)));for(var a=e3(e),s=e3(t),l=0;l<n.length;++l){var m=n[l];if(!(m in Ih||o&&o[m]||s&&m in s||a&&m in a)){var p=Th(t,m);try{Ph(e,m,p);}catch(u){}}}}return e}function lr(e){return typeof e=="function"}function As(e){return typeof e=="object"&&"styledComponentId"in e}function sr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function p1(e,t){if(e.length===0)return "";for(var o=e[0],r=1;r<e.length;r++)o+=t?t+e[r]:e[r];return o}function $r(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ts(e,t,o){if(o===void 0&&(o=!1),!o&&!$r(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ts(e[r],t[r]);else if($r(t))for(var r in t)e[r]=Ts(e[r],t[r]);return e}function Ds(e,t){Object.defineProperty(e,"toString",{value:t});}var Eh=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

`,2:`Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`,3:`Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`,4:`The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`,5:`The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`,6:`Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`,7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:`ThemeProvider: Please make your "theme" prop an object.

`,9:"Missing document `<head>`\n\n",10:`Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`,11:`_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`,12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:`%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`,14:`ThemeProvider: "theme" prop is required.

`,15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:`Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`,17:`CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`,18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function kh(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var o=e[0],r=[],n=1,a=e.length;n<a;n+=1)r.push(e[n]);return r.forEach(function(s){o=o.replace(/%[a-z]/,s);}),o}function Re(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return process.env.NODE_ENV==="production"?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):"")):new Error(kh.apply(void 0,ir([Eh[e]],t,!1)).trim())}var Lh=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t;}return e.prototype.indexOfGroup=function(t){for(var o=0,r=0;r<t;r++)o+=this.groupSizes[r];return o},e.prototype.insertRules=function(t,o){if(t>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,a=n;t>=a;)if((a<<=1)<0)throw Re(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var s=n;s<a;s++)this.groupSizes[s]=0;}for(var l=this.indexOfGroup(t+1),m=(s=0,o.length);s<m;s++)this.tag.insertRule(l,o[s])&&(this.groupSizes[t]++,l++);},e.prototype.clearGroup=function(t){if(t<this.length){var o=this.groupSizes[t],r=this.indexOfGroup(t),n=r+o;this.groupSizes[t]=0;for(var a=r;a<n;a++)this.tag.deleteRule(r);}},e.prototype.getGroup=function(t){var o="";if(t>=this.length||this.groupSizes[t]===0)return o;for(var r=this.groupSizes[t],n=this.indexOfGroup(t),a=n+r,s=n;s<a;s++)o+="".concat(this.tag.getRule(s)).concat(Fs);return o},e}(),l1=new Map,c1=new Map,m1=1,i1=function(e){if(l1.has(e))return l1.get(e);for(;c1.has(m1);)m1++;var t=m1++;if(process.env.NODE_ENV!=="production"&&((0|t)<0||t>1073741824))throw Re(16,"".concat(t));return l1.set(e,t),c1.set(t,e),t},Fh=function(e,t){m1=t+1,l1.set(e,t),c1.set(t,e);},Ah="style[".concat(po,"][").concat(d1,'="').concat(Hr,'"]'),Dh=new RegExp("^".concat(po,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Bh=function(e,t,o){for(var r,n=o.split(","),a=0,s=n.length;a<s;a++)(r=n[a])&&e.registerName(t,r);},zh=function(e,t){for(var o,r=((o=t.textContent)!==null&&o!==void 0?o:"").split(Fs),n=[],a=0,s=r.length;a<s;a++){var l=r[a].trim();if(l){var m=l.match(Dh);if(m){var p=0|parseInt(m[1],10),u=m[2];p!==0&&(Fh(u,p),Bh(e,u,m[3]),e.getTag().insertRules(p,n)),n.length=0;}else n.push(l);}}};function Ns(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var y3=function(e){var t=document.head,o=e||t,r=document.createElement("style"),n=function(l){var m=Array.from(l.querySelectorAll("style[".concat(po,"]")));return m[m.length-1]}(o),a=n!==void 0?n.nextSibling:null;r.setAttribute(po,d3),r.setAttribute(d1,Hr);var s=Ns();return s&&r.setAttribute("nonce",s),o.insertBefore(r,a),r},Oh=function(){function e(t){this.element=y3(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,n=0,a=r.length;n<a;n++){var s=r[n];if(s.ownerNode===o)return s}throw Re(17)}(this.element),this.length=0;}return e.prototype.insertRule=function(t,o){try{return this.sheet.insertRule(o,t),this.length++,!0}catch(r){return !1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--;},e.prototype.getRule=function(t){var o=this.sheet.cssRules[t];return o&&o.cssText?o.cssText:""},e}(),Uh=function(){function e(t){this.element=y3(t),this.nodes=this.element.childNodes,this.length=0;}return e.prototype.insertRule=function(t,o){if(t<=this.length&&t>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return !1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--;},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),jh=function(){function e(t){this.rules=[],this.length=0;}return e.prototype.insertRule=function(t,o){return t<=this.length&&(this.rules.splice(t,0,o),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--;},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),r3=f1,Hh={isServer:!f1,useCSSOMInjection:!fh},Yn=function(){function e(t,o,r){t===void 0&&(t=Vr),o===void 0&&(o={});var n=this;this.options=Ee(Ee({},Hh),t),this.gs=o,this.names=new Map(r),this.server=!!t.isServer,!this.server&&f1&&r3&&(r3=!1,function(a){for(var s=document.querySelectorAll(Ah),l=0,m=s.length;l<m;l++){var p=s[l];p&&p.getAttribute(po)!==d3&&(zh(a,p),p.parentNode&&p.parentNode.removeChild(p));}}(this)),Ds(this,function(){return function(a){for(var s=a.getTag(),l=s.length,m="",p=function(c){var g=function(h){return c1.get(h)}(c);if(g===void 0)return "continue";var f=a.names.get(g),C=s.getGroup(c);if(f===void 0||C.length===0)return "continue";var v="".concat(po,".g").concat(c,'[id="').concat(g,'"]'),y="";f!==void 0&&f.forEach(function(h){h.length>0&&(y+="".concat(h,","));}),m+="".concat(C).concat(v,'{content:"').concat(y,'"}').concat(Fs);},u=0;u<l;u++)p(u);return m}(n)});}return e.registerId=function(t){return i1(t)},e.prototype.reconstructWithOptions=function(t,o){return o===void 0&&(o=!0),new e(Ee(Ee({},this.options),t),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(o){var r=o.useCSSOMInjection,n=o.target;return o.isServer?new jh(n):r?new Oh(n):new Uh(n)}(this.options),new Lh(t)));var t;},e.prototype.hasNameForId=function(t,o){return this.names.has(t)&&this.names.get(t).has(o)},e.prototype.registerName=function(t,o){if(i1(t),this.names.has(t))this.names.get(t).add(o);else {var r=new Set;r.add(o),this.names.set(t,r);}},e.prototype.insertRules=function(t,o,r){this.registerName(t,o),this.getTag().insertRules(i1(t),r);},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear();},e.prototype.clearRules=function(t){this.getTag().clearGroup(i1(t)),this.clearNames(t);},e.prototype.clearTag=function(){this.tag=void 0;},e}(),Vh=/&/g,$h=/^\s*\/\/.*$/gm;function v3(e,t){return e.map(function(o){return o.type==="rule"&&(o.value="".concat(t," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(t," ")),o.props=o.props.map(function(r){return "".concat(t," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=v3(o.children,t)),o})}function x3(e){var t,o,r,n=e===void 0?Vr:e,a=n.options,s=a===void 0?Vr:a,l=n.plugins,m=l===void 0?g1:l,p=function(g,f,C){return C.startsWith(o)&&C.endsWith(o)&&C.replaceAll(o,"").length>0?".".concat(t):g},u=m.slice();u.push(function(g){g.type===et.RULESET&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Vh,o).replace(r,p));}),s.prefix&&u.push(et.prefixer),u.push(et.stringify);var c=function(g,f,C,v){f===void 0&&(f=""),C===void 0&&(C=""),v===void 0&&(v="&"),t=v,o=f,r=new RegExp("\\".concat(o,"\\b"),"g");var y=g.replace($h,""),h=et.compile(C||f?"".concat(C," ").concat(f," { ").concat(y," }"):y);s.namespace&&(h=v3(h,s.namespace));var x=[];return et.serialize(h,et.middleware(u.concat(et.rulesheet(function(T){return x.push(T)})))),x};return c.hash=m.length?m.reduce(function(g,f){return f.name||Re(15),ar(g,f.name)},p3).toString():"",c}var Gh=new Yn,Es=x3(),Bs=B.createContext({shouldForwardProp:void 0,styleSheet:Gh,stylis:Es});Bs.Consumer;B.createContext(void 0);function ks(){return useContext(Bs)}var n3=function(){function e(t,o){var r=this;this.inject=function(n,a){a===void 0&&(a=Es);var s=r.name+a.hash;n.hasNameForId(r.id,s)||n.insertRules(r.id,s,a(r.rules,s,"@keyframes"));},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=o,Ds(this,function(){throw Re(12,String(r.name))});}return e.prototype.getName=function(t){return t===void 0&&(t=Es),this.name+t.hash},e}(),Zh=function(e){return e>="A"&&e<="Z"};function i3(e){for(var t="",o=0;o<e.length;o++){var r=e[o];if(o===1&&r==="-"&&e[0]==="-")return e;Zh(r)?t+="-"+r.toLowerCase():t+=r;}return t.startsWith("ms-")?"-"+t:t}var M3=function(e){return e==null||e===!1||e===""},b3=function(e){var t,o,r=[];for(var n in e){var a=e[n];e.hasOwnProperty(n)&&!M3(a)&&(Array.isArray(a)&&a.isCss||lr(a)?r.push("".concat(i3(n),":"),a,";"):$r(a)?r.push.apply(r,ir(ir(["".concat(n," {")],b3(a),!1),["}"],!1)):r.push("".concat(i3(n),": ").concat((t=n,(o=a)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||t in W0||t.startsWith("--")?String(o).trim():"".concat(o,"px")),";")));}return r};function Bo(e,t,o,r){if(M3(e))return [];if(As(e))return [".".concat(e.styledComponentId)];if(lr(e)){if(!lr(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return [e];var n=e(t);return process.env.NODE_ENV==="production"||typeof n!="object"||Array.isArray(n)||n instanceof n3||$r(n)||n===null||console.error("".concat(u3(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),Bo(n,t,o,r)}var a;return e instanceof n3?o?(e.inject(o,r),[e.getName(r)]):[e]:$r(e)?b3(e):Array.isArray(e)?Array.prototype.concat.apply(g1,e.map(function(s){return Bo(s,t,o,r)})):[e.toString()]}function I3(e){for(var t=0;t<e.length;t+=1){var o=e[t];if(lr(o)&&!As(o))return !1}return !0}var Yh=c3(Hr),Qh=function(){function e(t,o,r){this.rules=t,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(r===void 0||r.isStatic)&&I3(t),this.componentId=o,this.baseHash=ar(Yh,o),this.baseStyle=r,Yn.registerId(o);}return e.prototype.generateAndInjectStyles=function(t,o,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))n=sr(n,this.staticRulesId);else {var a=p1(Bo(this.rules,t,o,r)),s=Ss(ar(this.baseHash,a)>>>0);if(!o.hasNameForId(this.componentId,s)){var l=r(a,".".concat(s),void 0,this.componentId);o.insertRules(this.componentId,s,l);}n=sr(n,s),this.staticRulesId=s;}else {for(var m=ar(this.baseHash,r.hash),p="",u=0;u<this.rules.length;u++){var c=this.rules[u];if(typeof c=="string")p+=c,process.env.NODE_ENV!=="production"&&(m=ar(m,c));else if(c){var g=p1(Bo(c,t,o,r));m=ar(m,g+u),p+=g;}}if(p){var f=Ss(m>>>0);o.hasNameForId(this.componentId,f)||o.insertRules(this.componentId,f,r(p,".".concat(f),void 0,this.componentId)),n=sr(n,f);}}return n},e}(),u1=B.createContext(void 0);u1.Consumer;function w3(e){var t=B.useContext(u1),o=useMemo(function(){return function(r,n){if(!r)throw Re(14);if(lr(r)){var a=r(n);if(process.env.NODE_ENV!=="production"&&(a===null||Array.isArray(a)||typeof a!="object"))throw Re(7);return a}if(Array.isArray(r)||typeof r!="object")throw Re(8);return n?Ee(Ee({},n),r):r}(e.theme,t)},[e.theme,t]);return e.children?B.createElement(u1.Provider,{value:o},e.children):null}var ws={},a3=new Set;function Wh(e,t,o){var r=As(e),n=e,a=!Is(e),s=t.attrs,l=s===void 0?g1:s,m=t.componentId,p=m===void 0?function(S,b){var P=typeof S!="string"?"sc":X0(S);ws[P]=(ws[P]||0)+1;var N="".concat(P,"-").concat(xh(Hr+P+ws[P]));return b?"".concat(b,"-").concat(N):N}(t.displayName,t.parentComponentId):m,u=t.displayName,c=u===void 0?function(S){return Is(S)?"styled.".concat(S):"Styled(".concat(u3(S),")")}(e):u,g=t.displayName&&t.componentId?"".concat(X0(t.displayName),"-").concat(t.componentId):t.componentId||p,f=r&&n.attrs?n.attrs.concat(l).filter(Boolean):l,C=t.shouldForwardProp;if(r&&n.shouldForwardProp){var v=n.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;C=function(S,b){return v(S,b)&&y(S,b)};}else C=v;}var h=new Qh(o,g,r?n.componentStyle:void 0);function x(S,b){return function(P,N,D){var V=P.attrs,q=P.componentStyle,A=P.defaultProps,_=P.foldedComponentIds,L=P.styledComponentId,ce=P.target,ae=B.useContext(u1),xe=ks(),Te=P.shouldForwardProp||xe.shouldForwardProp;process.env.NODE_ENV!=="production"&&useDebugValue(L);var Ve=Ch(N,ae,A)||Vr,Ne=function(ie,Ie,Ye){for(var ut,ge=Ee(Ee({},Ie),{className:void 0,theme:Ye}),Zn=0;Zn<ie.length;Zn+=1){var rr=lr(ut=ie[Zn])?ut(ge):ut;for(var Wt in rr)ge[Wt]=Wt==="className"?sr(ge[Wt],rr[Wt]):Wt==="style"?Ee(Ee({},ge[Wt]),rr[Wt]):rr[Wt];}return Ie.className&&(ge.className=sr(ge.className,Ie.className)),ge}(V,N,Ve),ze=Ne.as||ce,Me={};for(var be in Ne)Ne[be]===void 0||be[0]==="$"||be==="as"||be==="theme"&&Ne.theme===Ve||(be==="forwardedAs"?Me.as=Ne.forwardedAs:Te&&!Te(be,ze)||(Me[be]=Ne[be],Te||process.env.NODE_ENV!=="development"||Z0(be)||a3.has(be)||!Ps.has(ze)||(a3.add(be),console.warn('styled-components: it looks like an unknown prop "'.concat(be,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var pt=function(ie,Ie){var Ye=ks(),ut=ie.generateAndInjectStyles(Ie,Ye.styleSheet,Ye.stylis);return process.env.NODE_ENV!=="production"&&useDebugValue(ut),ut}(q,Ne);process.env.NODE_ENV!=="production"&&P.warnTooManyClasses&&P.warnTooManyClasses(pt);var ct=sr(_,L);return pt&&(ct+=" "+pt),Ne.className&&(ct+=" "+Ne.className),Me[Is(ze)&&!Ps.has(ze)?"class":"className"]=ct,Me.ref=D,createElement(ze,Me)}(T,S,b)}x.displayName=c;var T=B.forwardRef(x);return T.attrs=f,T.componentStyle=h,T.displayName=c,T.shouldForwardProp=C,T.foldedComponentIds=r?sr(n.foldedComponentIds,n.styledComponentId):"",T.styledComponentId=g,T.target=r?n.target:e,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(b){for(var P=[],N=1;N<arguments.length;N++)P[N-1]=arguments[N];for(var D=0,V=P;D<V.length;D++)Ts(b,V[D],!0);return b}({},n.defaultProps,S):S;}}),process.env.NODE_ENV!=="production"&&(gh(c,g),T.warnTooManyClasses=function(S,b){var P={},N=!1;return function(D){if(!N&&(P[D]=!0,Object.keys(P).length>=200)){var V=b?' with the id of "'.concat(b,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(S).concat(V,`.
`)+`Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),N=!0,P={};}}}(c,g)),Ds(T,function(){return ".".concat(T.styledComponentId)}),a&&h3(T,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function s3(e,t){for(var o=[e[0]],r=0,n=t.length;r<n;r+=1)o.push(t[r],e[r+1]);return o}var l3=function(e){return Object.assign(e,{isCss:!0})};function k(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];if(lr(e)||$r(e))return l3(Bo(s3(g1,ir([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Bo(r):l3(Bo(s3(r,t)))}function Ls(e,t,o){if(o===void 0&&(o=Vr),!t)throw Re(1,t);var r=function(n){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,o,k.apply(void 0,ir([n],a,!1)))};return r.attrs=function(n){return Ls(e,t,Ee(Ee({},o),{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return Ls(e,t,Ee(Ee({},o),n))},r}var P3=function(e){return Ls(Wh,e)},i=P3;Ps.forEach(function(e){i[e]=P3(e);});process.env.NODE_ENV!=="production"&&typeof navigator!="undefined"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);var a1="__sc-".concat(po,"__");process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window!="undefined"&&(window[a1]||(window[a1]=0),window[a1]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window[a1]+=1);var C1=`url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='20' fill='%23D9E5FC'/%3E%3Cpath d='M28 21C28 20.4688 27.5312 20 27 20H22C21.4375 20 21 20.4688 21 21V26C21 26.5625 21.4375 27 22 27H27C27.5312 27 28 26.5625 28 26V21ZM14 19C11.7812 19 10 20.8125 10 23C10 25.2188 11.7812 27 14 27C16.1875 27 18 25.2188 18 23C18 20.8125 16.1875 19 14 19ZM26.9688 17C27.75 17 28.25 16.1875 27.8438 15.5L24.875 10.5C24.4688 9.84375 23.5 9.84375 23.0938 10.5L20.125 15.5C19.7188 16.1875 20.2188 17 21 17H26.9688Z' fill='white'/%3E%3C/svg%3E%0A");`;var tt=`url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='20' fill='%23D9E5FC'/%3E%3Cpath d='M19.8462 12C20.7625 12 21.6413 12.356 22.2893 12.9898C22.9373 13.6235 23.3013 14.4831 23.3013 15.3793C23.3013 16.2756 22.9373 17.1351 22.2893 17.7688C21.6413 18.4026 20.7625 18.7586 19.8462 18.7586C18.9298 18.7586 18.051 18.4026 17.403 17.7688C16.755 17.1351 16.391 16.2756 16.391 15.3793C16.391 14.4831 16.755 13.6235 17.403 12.9898C18.051 12.356 18.9298 12 19.8462 12ZM12.9359 14.4138C13.4887 14.4138 14.0021 14.5586 14.4463 14.8193C14.2982 16.2 14.7128 17.571 15.5618 18.6428C15.0682 19.5697 14.081 20.2069 12.9359 20.2069C12.1504 20.2069 11.3972 19.9017 10.8418 19.3585C10.2864 18.8153 9.97436 18.0786 9.97436 17.3103C9.97436 16.5421 10.2864 15.8054 10.8418 15.2622C11.3972 14.719 12.1504 14.4138 12.9359 14.4138ZM26.7564 14.4138C27.5419 14.4138 28.2951 14.719 28.8505 15.2622C29.4059 15.8054 29.7179 16.5421 29.7179 17.3103C29.7179 18.0786 29.4059 18.8153 28.8505 19.3585C28.2951 19.9017 27.5419 20.2069 26.7564 20.2069C25.6113 20.2069 24.6241 19.5697 24.1305 18.6428C24.9795 17.571 25.3941 16.2 25.246 14.8193C25.6903 14.5586 26.2036 14.4138 26.7564 14.4138ZM13.4295 24.3103C13.4295 22.3117 16.3022 20.6897 19.8462 20.6897C23.3901 20.6897 26.2628 22.3117 26.2628 24.3103V26H13.4295V24.3103ZM8 26V24.5517C8 23.2097 9.86577 22.08 12.3929 21.7517C11.8105 22.4083 11.4551 23.3159 11.4551 24.3103V26H8ZM31.6923 26H28.2372V24.3103C28.2372 23.3159 27.8818 22.4083 27.2994 21.7517C29.8265 22.08 31.6923 23.2097 31.6923 24.5517V26Z' fill='white'/%3E%3C/svg%3E%0A");`;var se=`url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='20' fill='%23D9E5FC'/%3E%3Cpath d='M23.1255 13.1312C22.385 12.4069 21.3806 12 20.3333 12C19.2861 12 18.2817 12.4069 17.5412 13.1312C16.8006 13.8555 16.3846 14.8378 16.3846 15.8621C16.3846 16.8864 16.8006 17.8687 17.5412 18.593C18.2817 19.3172 19.2861 19.7241 20.3333 19.7241C21.3806 19.7241 22.385 19.3172 23.1255 18.593C23.866 17.8687 24.2821 16.8864 24.2821 15.8621C24.2821 14.8378 23.866 13.8555 23.1255 13.1312Z' fill='white'/%3E%3Cpath d='M20.3333 21.931C16.2831 21.931 13 23.7848 13 26.069V28H27.6667V26.069C27.6667 23.7848 24.3836 21.931 20.3333 21.931Z' fill='white'/%3E%3C/svg%3E");`;var Jh=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 448 512"},e),B.createElement("path",{fill:"currentColor",d:`M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627
      0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686
      4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515
      247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284
      4.686 16.971-.001z`})),h1=Jh;var Xh=e=>B.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 8 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),B.createElement("path",{d:"M1.46094 6.33203C1.63281 6.33203 1.77344 6.26172 1.97656 6.16406L6.82422 3.82812C7.18359 3.65234 7.33594 3.45312 7.33594 3.18359C7.33594 2.91406 7.18359 2.71484 6.82422 2.53906L1.97656 0.203125C1.77344 0.105469 1.62891 0.0351562 1.45703 0.0351562C1.12109 0.0351562 0.863281 0.292969 0.863281 0.714844L0.867188 5.65625C0.867188 6.07422 1.125 6.33203 1.46094 6.33203Z",fill:"#636878"})),y1=Xh;var Rh=o=>{var r=o,{color:e="#A5A9B5"}=r,t=M(r,["color"]);return B.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),B.createElement("path",{d:"M39.5107 25.2362C38.8869 25.2362 38.2747 25.3041 37.6818 25.4335C39.2923 23.0401 40.2282 20.2639 40.3918 17.3437H40.9769C41.4947 17.3437 41.9144 16.9239 41.9144 16.4062C41.9144 15.8884 41.4947 15.4687 40.9769 15.4687H40.3906C39.8967 6.85584 32.7344 0 24 0C15.2657 0 8.10337 6.85584 7.60959 15.4687H7.02319C6.50541 15.4687 6.08569 15.8884 6.08569 16.4062C6.08569 16.9239 6.50541 17.3437 7.02319 17.3437H7.60819C7.83019 21.3069 9.47447 25.0053 12.2966 27.8409L18.5743 34.1488V40.8825C17.1898 39.7625 15.4512 39.1327 13.6085 39.1327C11.1596 39.1327 8.89809 40.2416 7.40456 42.1379C6.75394 41.8646 6.05334 41.7226 5.33981 41.7226C2.39541 41.7227 0 44.1181 0 47.0625C0 47.5802 0.419719 48 0.9375 48H26.7872C28.2551 48 29.4494 46.8058 29.4494 45.3378V34.6875H33.7843C34.3021 34.6875 34.7218 34.2677 34.7218 33.75C34.7218 33.2323 34.3021 32.8125 33.7843 32.8125H26.8347C27.2541 31.151 28.7614 29.9174 30.5513 29.9174C31.2803 29.9174 31.9902 30.1238 32.6043 30.5145C32.8151 30.6486 33.0706 30.6929 33.3142 30.6379C33.5579 30.5827 33.7694 30.4328 33.9021 30.2212C35.1218 28.2738 37.2186 27.1112 39.5108 27.1112C42.8483 27.1112 45.6163 29.5958 46.0623 32.8125H42.2219C41.7041 32.8125 41.2844 33.2323 41.2844 33.75C41.2844 34.2677 41.7041 34.6875 42.2219 34.6875H47.0619C47.5728 34.6875 47.9887 34.2787 47.9993 33.7697C47.9997 33.7551 48.0001 33.7403 48.0001 33.7254C48 29.0445 44.1917 25.2362 39.5107 25.2362ZM24.8224 32.8125H23.1776L21.2122 26.8848C20.6679 25.2436 20.2627 23.2201 20.0246 21.0234C21.093 21.9445 22.482 22.5035 24 22.5035C25.518 22.5035 26.907 21.9446 27.9754 21.0234C27.7372 23.22 27.332 25.2435 26.7878 26.8848L24.8224 32.8125ZM24 1.875C24.6738 1.875 25.8003 2.89453 26.7577 5.76816C27.6264 8.37581 28.1352 11.791 28.2102 15.4687H19.79C19.8649 11.7909 20.3738 8.37581 21.2425 5.76806C22.1997 2.89463 23.3262 1.875 24 1.875ZM28.116 17.3437C27.6883 19.2219 26.0059 20.6284 24 20.6284C21.9941 20.6284 20.3117 19.2219 19.884 17.3437H28.116ZM38.5117 15.4687H30.0854C30.009 11.5909 29.466 7.96575 28.5365 5.17547C28.1202 3.92606 27.6695 2.96681 27.2081 2.23219C33.39 3.62953 38.091 8.97506 38.5117 15.4687ZM38.4354 17.3437C38.0078 19.2219 36.3253 20.6284 34.3194 20.6284C32.3136 20.6284 30.6311 19.2219 30.2034 17.3437H38.4354ZM20.7919 2.23228C20.3304 2.96691 19.8798 3.92616 19.4635 5.17556C18.534 7.96575 17.991 11.591 17.9146 15.4688H9.48825C9.909 8.97506 14.61 3.62953 20.7919 2.23228ZM17.7966 17.3437C17.3689 19.2219 15.6864 20.6284 13.6806 20.6284C11.6747 20.6284 9.99225 19.2219 9.56456 17.3437H17.7966ZM10.3957 21.5388C11.3445 22.1482 12.4716 22.5034 13.6806 22.5034C15.4158 22.5034 16.9827 21.7735 18.0941 20.6063C18.3314 23.1704 18.7869 25.5278 19.4325 27.4748L21.2022 32.8125H19.8896L13.6257 26.5184C12.1913 25.0772 11.1009 23.3838 10.3957 21.5388ZM5.33981 43.5977C5.99878 43.5977 6.6405 43.7843 7.19569 44.1375C7.40644 44.2716 7.662 44.316 7.90556 44.2609C8.14922 44.2057 8.36072 44.0557 8.49337 43.8442C9.60572 42.0681 11.5179 41.0077 13.6085 41.0077C15.6067 41.0077 17.445 41.9782 18.5743 43.6152V45.3379C18.5743 45.6118 18.6159 45.8762 18.6932 46.1251H2.00391C2.41369 44.6685 3.75403 43.5977 5.33981 43.5977ZM27.5744 45.3378C27.5744 45.7718 27.2213 46.125 26.7872 46.125H21.2366C20.8026 46.125 20.4494 45.7718 20.4494 45.3378V40.5H27.5744V45.3378ZM27.5744 34.6875V38.625H20.4494V34.6875H27.5744ZM28.2125 28.5457L28.5675 27.4748C29.2131 25.5278 29.6685 23.1704 29.9059 20.6063C31.0173 21.7736 32.5842 22.5034 34.3194 22.5034C35.5285 22.5034 36.6555 22.1482 37.6043 21.5388C36.899 23.3837 35.8087 25.0771 34.3743 26.5184L32.5115 28.3901C31.887 28.1615 31.2246 28.0423 30.5513 28.0423C29.7181 28.0424 28.9268 28.2233 28.2125 28.5457Z",fill:e}))},mr=Rh;var ey=e=>B.createElement("svg",d({width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),B.createElement("path",{d:"M16.125 20C17.9531 20 19.5 18.5234 19.5 16.625C19.5 14.7969 17.9531 13.25 16.125 13.25C14.2266 13.25 12.75 14.7969 12.75 16.625C12.75 18.5234 14.2266 20 16.125 20ZM16.125 15.5C16.6875 15.5 17.25 16.0625 17.25 16.625C17.25 17.2578 16.6875 17.75 16.125 17.75C15.4922 17.75 15 17.2578 15 16.625C15 16.0625 15.4922 15.5 16.125 15.5ZM37.5 8.75H10.5C9.23438 8.75 8.25 9.80469 8.25 11V38C8.25 39.2656 9.23438 40.25 10.5 40.25H37.5C38.6953 40.25 39.75 39.2656 39.75 38V11C39.75 9.80469 38.6953 8.75 37.5 8.75ZM37.5 38H10.5V32.375H37.5V38ZM14.2266 30.125L17.8828 25.2734L20.6953 29L19.8516 30.125H14.2266ZM22.6641 30.125L28.0078 23.0234L33.3516 30.125H22.6641ZM37.5 30.125H36.1641L28.9219 20.4922C28.4297 19.9297 27.5156 19.9297 27.0938 20.4922L22.1016 27.1719L18.7969 22.7422C18.3047 22.1797 17.3906 22.1797 16.9688 22.7422L11.4141 30.125H10.5V11H37.5V30.125Z"})),zs=ey;var ty=e=>B.createElement("svg",d({width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),B.createElement("path",{d:"M10.5 11.9844L9.72656 11.2109C9.65625 11.0703 9.44531 11 9.30469 11C9.16406 11 9.02344 11.0703 8.88281 11.2109C5.57812 14.7969 3.75 19.5078 3.75 24.5C3.75 29.4922 5.57812 34.2031 8.88281 37.8594C9.02344 38 9.16406 38.0703 9.30469 38.0703C9.44531 38.0703 9.65625 38 9.72656 37.8594L10.5 37.0859C10.6406 36.9453 10.7109 36.8047 10.7109 36.6641C10.7109 36.5234 10.6406 36.3828 10.5 36.2422C7.61719 33.0781 6 28.9297 6 24.5C6 20.1406 7.61719 15.9922 10.5 12.8281C10.6406 12.6875 10.7109 12.5469 10.7109 12.4062C10.7109 12.2656 10.6406 12.125 10.5 11.9844ZM16.4062 16.8359L15.6328 16.0625C15.4922 15.9219 15.3516 15.9219 15.2109 15.9219C15.0703 15.9219 14.9297 15.9219 14.7891 16.0625C12.8203 18.3125 11.625 21.2656 11.625 24.5C11.625 27.8047 12.8203 30.7578 14.7891 33.0078C14.9297 33.0781 15.0703 33.1484 15.2109 33.1484C15.3516 33.1484 15.4922 33.1484 15.6328 33.0078L16.4062 32.1641C16.5469 32.0938 16.6172 31.9531 16.6172 31.8125C16.6172 31.6719 16.5469 31.5312 16.4062 31.3906C14.7891 29.5625 13.875 27.1719 13.875 24.5703C13.875 21.8984 14.7891 19.5078 16.4062 17.6797C16.5469 17.5391 16.5469 17.3984 16.5469 17.2578C16.5469 17.1172 16.5469 16.9766 16.4062 16.8359ZM39.0469 11.2109C38.9062 11.0703 38.7656 11 38.625 11C38.4844 11 38.2734 11.0703 38.2031 11.2109L37.4297 11.9844C37.2891 12.125 37.2188 12.2656 37.2188 12.4062C37.2188 12.5469 37.2891 12.6875 37.4297 12.8281C40.3828 15.9922 42 20.1406 42 24.5C42 28.9297 40.3828 33.0781 37.4297 36.2422C37.2891 36.3828 37.2188 36.5234 37.2188 36.6641C37.2188 36.8047 37.2891 36.9453 37.4297 37.0859L38.2031 37.8594C38.2734 38 38.4844 38.0703 38.625 38.0703C38.7656 38.0703 38.9062 38 39.0469 37.8594C42.3516 34.2031 44.25 29.4922 44.25 24.5C44.25 19.5078 42.3516 14.7969 39.0469 11.2109ZM24 20C21.4688 20 19.5 22.0391 19.5 24.5C19.5 27.0312 21.4688 29 24 29C26.4609 29 28.5 27.0312 28.5 24.5C28.5 22.0391 26.4609 20 24 20ZM24 26.75C22.7344 26.75 21.75 25.7656 21.75 24.5C21.75 23.3047 22.7344 22.25 24 22.25C25.1953 22.25 26.25 23.3047 26.25 24.5C26.25 25.7656 25.1953 26.75 24 26.75ZM32.2969 16.0625L31.5234 16.8359C31.3828 16.9766 31.3125 17.1172 31.3125 17.2578C31.3125 17.3984 31.3828 17.5391 31.5234 17.6797C33.1406 19.5078 34.0547 21.8984 34.0547 24.5C34.0547 27.1719 33.1406 29.5625 31.5234 31.3906C31.3828 31.5312 31.3125 31.6719 31.3125 31.8125C31.3125 31.9531 31.3828 32.0938 31.5234 32.2344L32.2969 33.0078C32.4375 33.1484 32.5781 33.2188 32.7188 33.2188C32.8594 33.2188 33 33.1484 33.1406 33.0078C35.1094 30.7578 36.3047 27.8047 36.3047 24.5703C36.3047 21.2656 35.1094 18.3125 33.1406 16.0625C33 15.9922 32.8594 15.9219 32.7188 15.9219C32.5781 15.9219 32.4375 15.9219 32.2969 16.0625Z"})),Os=ty;var oy=e=>B.createElement("svg",d({width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),B.createElement("path",{d:"M39.6797 17.75L39.75 20L39.6797 38L33 33.3594V24.7109L39.6797 20V17.75C39.2578 17.8203 38.7656 17.9609 38.4141 18.1719L33 21.9688V21.125C33 19.2969 31.4531 17.75 29.625 17.75H12.75V14.375C12.75 12.5469 14.2266 11 16.125 11H27.9375C28.2188 11 28.5 10.7891 28.5 10.4375V9.3125C28.5 9.03125 28.2188 8.75 27.9375 8.75H16.125C12.9609 8.75 10.5 11.2812 10.5 14.375V17.75H9.375C7.47656 17.75 6 19.2969 6 21.125V36.875C6 38.7734 7.47656 40.25 9.375 40.25H29.625C31.4531 40.25 33 38.7734 33 36.875V36.1016L38.4141 39.8984C38.7656 40.1094 39.2578 40.25 39.6797 40.25C40.875 40.25 42 39.3359 42 38.0703V20C42 18.6641 40.875 17.75 39.6797 17.75ZM30.75 36.875C30.75 37.5078 30.1875 38 29.625 38H9.375C8.74219 38 8.25 37.5078 8.25 36.875V21.125C8.25 20.5625 8.74219 20 9.375 20H29.625C30.1875 20 30.75 20.5625 30.75 21.125V36.875ZM28.0078 22.25H10.9219C10.6406 22.3203 10.5 22.4609 10.5 22.7422V24.0781C10.5 24.3594 10.6406 24.5 10.9219 24.5H28.0078C28.2891 24.5 28.4297 24.3594 28.5 24.0781V22.7422C28.4297 22.4609 28.2891 22.3203 28.0078 22.25Z"})),Us=oy;var ry=e=>B.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),B.createElement("path",{d:"M11.824 4.72708L8.63343 7.84786C8.39883 8.05439 8.04692 8.05439 7.83578 7.82492L7.31965 7.32008C7.08504 7.11356 7.08504 6.74641 7.31965 6.53989L8.75073 5.25486L0.56305 5.25486C0.234605 5.25486 0 5.00244 0 4.70413V0.560002C0 0.250721 0.250722 0 0.560002 0L1.31683 4.36807e-06C1.62611 5.39397e-06 1.87683 0.250726 1.87683 0.560004V3.4191L8.75073 3.4191L7.31965 2.11113C7.08504 1.9046 7.08504 1.53745 7.31965 1.33093L7.83578 0.826096C8.04692 0.596627 8.39883 0.596627 8.63343 0.803149L11.824 3.92393C12.0587 4.1534 12.0587 4.49761 11.824 4.72708Z",fill:"#636878"})),js=ry;var ny=e=>B.createElement("svg",d({width:"48",height:"32",viewBox:"0 0 48 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),B.createElement("path",{d:"M46 0H7.33333C6.16667 0 5.33333 0.916667 5.33333 2V2.66667H2C0.833333 2.66667 0 3.58333 0 4.66667V28C0 30.25 1.75 32 4 32H46C47.0833 32 48 31.1667 48 30V2C48 0.916667 47.0833 0 46 0ZM2.66667 28V5.33333H5.33333V28C5.33333 28.75 4.66667 29.3333 4 29.3333C3.25 29.3333 2.66667 28.75 2.66667 28ZM45.3333 29.3333H7.75C7.83333 29 8 28.4167 8 28.0833V28V2.66667H45.3333V29.3333Z",fill:"#A5A9B5"}),B.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0231 10.3277L20.0159 10.3366L20.0094 10.3459C19.8498 10.575 19.7771 10.8433 19.8232 11.1079C19.8691 11.3716 20.0275 11.5989 20.2679 11.7554L21.0576 12.3368L21.0728 12.3454C21.498 12.5896 22.0853 12.5106 22.426 12.103L22.4273 12.1014C22.8645 11.5715 23.2846 11.1881 23.7898 10.9333C24.2937 10.6791 24.9063 10.5409 25.7453 10.5409C28.061 10.5409 28.9327 11.6808 28.9327 12.5977C28.9327 13.0993 28.7034 13.4644 28.3052 13.8072C27.9932 14.0759 27.6072 14.3074 27.1754 14.5663L27.1754 14.5664C27.0311 14.6529 26.8817 14.7425 26.7282 14.8376C26.1341 15.2057 25.5066 15.6423 25.0306 16.2624C24.548 16.891 24.2326 17.6923 24.2326 18.7681C24.2326 19.3702 24.7618 19.7677 25.2632 19.7677H26.2274C26.8061 19.7677 27.258 19.3542 27.258 18.7681C27.258 18.2649 27.489 17.8879 27.8895 17.5308C28.2112 17.244 28.6129 16.9941 29.0603 16.7157L29.0603 16.7157C29.1919 16.6339 29.3274 16.5496 29.466 16.4612C30.0584 16.0832 30.684 15.6419 31.1589 15.0321C31.6406 14.4135 31.9582 13.6337 31.9582 12.5977C31.9582 11.0185 31.2094 9.76304 30.0556 8.91183C28.9084 8.0656 27.3647 7.61914 25.7453 7.61914C24.3484 7.61914 23.2438 7.88697 22.3194 8.36743C21.3964 8.84713 20.6724 9.52886 20.0231 10.3277ZM21.2259 12.0787L20.4426 11.5021C20.0944 11.2799 20.0256 10.8973 20.2363 10.5603C20.0258 10.8973 20.0947 11.2797 20.4427 11.5018L21.2261 12.0785C21.5274 12.2515 21.9492 12.1938 22.1902 11.9055C23.0941 10.8098 23.998 10.2331 25.7455 10.2331C28.1558 10.2331 29.2404 11.4441 29.2404 12.5975C29.2404 12.9349 29.1534 13.22 29.003 13.4709C29.1533 13.22 29.2403 12.935 29.2403 12.5977C29.2403 11.4444 28.1556 10.2334 25.7453 10.2334C23.9978 10.2334 23.0939 10.8101 22.1901 11.9057C21.949 12.1941 21.5272 12.2517 21.2259 12.0787ZM25.0838 16.7238C24.7512 17.2542 24.5401 17.9128 24.5401 18.7681C24.5401 19.1718 24.9017 19.4601 25.2632 19.4601H26.2274C26.4954 19.4601 26.7148 19.3437 26.8391 19.1552C26.7148 19.3435 26.4955 19.4599 26.2275 19.4599H25.2634C24.9018 19.4599 24.5403 19.1715 24.5403 18.7678C24.5403 17.9127 24.7513 17.2542 25.0838 16.7238ZM27.2171 17.8382C27.5662 17.2823 28.2162 16.8782 28.9129 16.4451C29.6965 15.9578 30.5394 15.4338 31.0797 14.6156C30.5394 15.4336 29.6966 15.9576 28.913 16.4448C28.2162 16.878 27.5662 17.2822 27.2171 17.8382ZM25.8056 20.5366C24.6772 20.5366 23.8108 21.4184 23.8108 22.4588C23.8108 23.5639 24.6844 24.381 25.8056 24.381C26.8591 24.381 27.8003 23.5709 27.8003 22.4588C27.8003 21.4113 26.8664 20.5366 25.8056 20.5366ZM24.363 21.6208C24.2067 21.868 24.1183 22.1563 24.1183 22.4588C24.1183 23.3815 24.8414 24.0735 25.8056 24.0735C26.4076 24.0735 26.9562 23.7665 27.2554 23.2888C26.9561 23.7663 26.4077 24.0732 25.8057 24.0732C24.8416 24.0732 24.1185 23.3812 24.1185 22.4585C24.1185 22.1562 24.2068 21.8679 24.363 21.6208Z",fill:"#A5A9B5"})),Vs=ny;var iy=e=>B.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 19 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),B.createElement("path",{d:`M6.6875 9.3125C9.00195 9.3125 10.9062 7.4375 10.9062 5.09375C10.9062 2.7793 9.00195
    0.875 6.6875 0.875C4.34375 0.875 2.46875 2.7793 2.46875 5.09375C2.46875 7.4375 4.34375 9.3125
    6.6875 9.3125ZM6.6875 2.28125C8.21094 2.28125 9.5 3.57031 9.5 5.09375C9.5 6.64648 8.21094
    7.90625 6.6875 7.90625C5.13477 7.90625 3.875 6.64648 3.875 5.09375C3.875 3.57031 5.13477
    2.28125 6.6875 2.28125ZM1.53125 14.4688V13.7363C1.53125 12.3301 2.64453 11.1875 4.05078
    11.1875C4.49023 11.1875 5.16406 11.6562 6.6875 11.6562C7.94727 11.6562 8.73828 11.3047
    9.03125 11.2461C9.08984 10.748 9.17773 10.25 9.35352 9.81055C8.41602 9.78125 8.09375 10.25
    6.6875 10.25C5.28125 10.25 4.90039 9.78125 4.05078 9.78125C1.88281 9.78125 0.125 11.5684
    0.125 13.7363V14.4688C0.125 15.2598 0.740234 15.875 1.53125 15.875H10.9355C10.4668 15.4941
    10.0859 15.0254 9.76367 14.4688H1.53125ZM14.6562 7.4375C12.3125 7.4375 10.4375 9.3418 10.4375
    11.6562C10.4375 14 12.3125 15.875 14.6562 15.875C16.9707 15.875 18.875 14 18.875 11.6562C18.875
    9.3418 16.9707 7.4375 14.6562 7.4375ZM16.5312 11.8613C16.5312 12.0078 16.3848 12.125 16.2383
    12.125H14.4512C14.3047 12.125 14.1875 12.0078 14.1875 11.8613V9.60547C14.1875 9.45898 14.3047
    9.3125 14.4512 9.3125H14.832C14.9785 9.3125 15.125 9.45898 15.125
    9.60547V11.1875H16.2383C16.3848 11.1875 16.5312 11.334 16.5312 11.4805V11.8613Z`,fill:"#292B32"})),$s=iy;var ay=e=>B.createElement("svg",d({width:"84",height:"84",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),B.createElement("path",{d:"M63.002 31.725a10.672 10.672 0 00-3.15-7.574 10.987 10.987 0 00-15.17 0L3.153 65.692a10.724 10.724 0 0015.155 15.159l41.545-41.542a10.664 10.664 0 003.15-7.584zM13.358 75.909a3.805 3.805 0 01-5.25 0 3.717 3.717 0 010-5.25l27.191-27.195 5.268 5.267-27.21 27.178zM54.91 34.357l-9.408 9.411-5.25-5.267 9.411-9.408a3.72 3.72 0 115.25 5.25l-.003.014zM17.022 9.993l5.425-1.547 1.547-5.425a4.169 4.169 0 018.015 0l1.547 5.425 5.425 1.547a4.169 4.169 0 010 8.015l-5.425 1.547-1.547 5.425a4.169 4.169 0 01-8.015 0l-1.547-5.425-5.425-1.547a4.169 4.169 0 010-8.015zm63.96 50.015l-5.426 1.547-1.547 5.425a4.169 4.169 0 01-8.015 0l-1.547-5.425-5.425-1.547a4.169 4.169 0 010-8.015l5.425-1.547 1.547-5.425a4.169 4.169 0 018.015 0l1.547 5.425 5.425 1.547a4.169 4.169 0 010 8.015zM62.143 8.751l4.746-1.355 1.362-4.753a3.647 3.647 0 017 0l1.354 4.746 4.746 1.355a3.647 3.647 0 010 7l-4.746 1.354-1.354 4.757a3.647 3.647 0 01-7 0l-1.355-4.743-4.753-1.361a3.647 3.647 0 010-7z",fill:"#1054DE"})),Gs=ay;function sy(e){return B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",fill:"none",viewBox:"0 0 25 24"},e),B.createElement("path",{fill:"#fff",d:"M19.531 10.809a1.71 1.71 0 010 2.918L7.156 21.039c-1.125.668-2.531-.14-2.531-1.477V4.938c0-1.44 1.512-2.039 2.531-1.44l12.375 7.312z"}))}var Gr=sy;var ly=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),B.createElement("path",{d:`M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7
      96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7
      0-216-96.1-216-216zm331.7-18l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8
      35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5
      81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z`})),_s=ly;var O3=`url("data:image/svg+xml;charset=UTF-8,%3csvg width='439' height='219' viewBox='0 0 439 219' fill='none' xmlns='http://www.w3.org/2000/svg' %3e%3cpath d='M148.017 30.9692H125.866C123.49 30.9692 121.564 32.8976 121.564 35.2764V42.6062C121.564 44.985 123.49 46.9133 125.866 46.9133H148.017C150.393 46.9133 152.319 44.985 152.319 42.6062V35.2764C152.319 32.8976 150.393 30.9692 148.017 30.9692Z' fill='%23B3BBE3' /%3e%3cpath d='M326.51 121.695H304.359C301.983 121.695 300.057 123.623 300.057 126.002V133.332C300.057 135.711 301.983 137.639 304.359 137.639H326.51C328.886 137.639 330.812 135.711 330.812 133.332V126.002C330.812 123.623 328.886 121.695 326.51 121.695Z' fill='%23B3BBE3' /%3e%3cpath d='M352.074 18.8726H334.268C332.36 18.8726 330.812 20.4217 330.812 22.3326V28.2286C330.812 30.1396 332.36 31.6887 334.268 31.6887H352.074C353.982 31.6887 355.529 30.1396 355.529 28.2286V22.3326C355.529 20.4217 353.982 18.8726 352.074 18.8726Z' fill='%23B3BBE3' /%3e%3cpath d='M70.9908 157.149H56.7467C55.2198 157.149 53.9819 158.388 53.9819 159.917V164.634C53.9819 166.163 55.2198 167.402 56.7467 167.402H70.9908C72.5177 167.402 73.7555 166.163 73.7555 164.634V159.917C73.7555 158.388 72.5177 157.149 70.9908 157.149Z' fill='%23B3BBE3' /%3e%3cpath d='M256.65 194.102H242.406C240.879 194.102 239.642 195.341 239.642 196.87V201.587C239.642 203.116 240.879 204.355 242.406 204.355H256.65C258.177 204.355 259.415 203.116 259.415 201.587V196.87C259.415 195.341 258.177 194.102 256.65 194.102Z' fill='%23B3BBE3' /%3e%3cpath d='M235.234 0H220.99C219.463 0 218.226 1.23931 218.226 2.76807V7.48487C218.226 9.01363 219.463 10.2529 220.99 10.2529H235.234C236.761 10.2529 237.999 9.01363 237.999 7.48487V2.76807C237.999 1.23931 236.761 0 235.234 0Z' fill='%23B3BBE3' /%3e%3cpath d='M379.815 10.0757H369.132C367.987 10.0757 367.059 11.0052 367.059 12.1517V15.6893C367.059 16.8359 367.987 17.7654 369.132 17.7654H379.815C380.96 17.7654 381.889 16.8359 381.889 15.6893V12.1517C381.889 11.0052 380.96 10.0757 379.815 10.0757Z' fill='%23B3BBE3' /%3e%3cpath d='M436.382 170.087H425.699C424.554 170.087 423.625 171.017 423.625 172.163V175.701C423.625 176.848 424.554 177.777 425.699 177.777H436.382C437.527 177.777 438.456 176.848 438.456 175.701V172.163C438.456 171.017 437.527 170.087 436.382 170.087Z' fill='%23B3BBE3' /%3e%3cpath d='M319.952 106.854H309.269C308.124 106.854 307.196 107.783 307.196 108.93V112.467C307.196 113.614 308.124 114.543 309.269 114.543H319.952C321.098 114.543 322.026 113.614 322.026 112.467V108.93C322.026 107.783 321.098 106.854 319.952 106.854Z' fill='%23B3BBE3' /%3e%3cpath d='M12.7566 114.395H2.07357C0.92837 114.395 0 115.325 0 116.471V120.009C0 121.155 0.92837 122.085 2.07357 122.085H12.7566C13.9018 122.085 14.8302 121.155 14.8302 120.009V116.471C14.8302 115.325 13.9018 114.395 12.7566 114.395Z' fill='%23B3BBE3' /%3e%3cpath d='M123.886 92.126H113.203C112.058 92.126 111.13 93.0555 111.13 94.202V97.7396C111.13 98.8862 112.058 99.8157 113.203 99.8157H123.886C125.032 99.8157 125.96 98.8862 125.96 97.7396V94.202C125.96 93.0555 125.032 92.126 123.886 92.126Z' fill='%23B3BBE3' /%3e%3cpath d='M252.951 59.6855H242.268C241.123 59.6855 240.194 60.615 240.194 61.7616V65.2992C240.194 66.4458 241.123 67.3752 242.268 67.3752H252.951C254.096 67.3752 255.025 66.4458 255.025 65.2992V61.7616C255.025 60.615 254.096 59.6855 252.951 59.6855Z' fill='%23B3BBE3' /%3e%3cpath d='M204.07 191.103H193.387C192.242 191.103 191.313 192.033 191.313 193.179V196.717C191.313 197.863 192.242 198.793 193.387 198.793H204.07C205.215 198.793 206.144 197.863 206.144 196.717V193.179C206.144 192.033 205.215 191.103 204.07 191.103Z' fill='%23B3BBE3' /%3e%3cpath d='M414.347 182.183H400.501C399.017 182.183 397.813 183.387 397.813 184.873V189.457C397.813 190.943 399.017 192.148 400.501 192.148H414.347C415.831 192.148 417.034 190.943 417.034 189.457V184.873C417.034 183.387 415.831 182.183 414.347 182.183Z' fill='%23B3BBE3' /%3e%3cpath d='M272.89 167.175H251.95C249.702 167.175 247.88 168.999 247.88 171.249V178.175C247.88 180.425 249.702 182.25 251.95 182.25H272.89C275.138 182.25 276.96 180.425 276.96 178.175V171.249C276.96 168.999 275.138 167.175 272.89 167.175Z' fill='%23B3BBE3' /%3e%3cpath d='M340.754 115.103H326.909C325.424 115.103 324.221 116.307 324.221 117.793V122.377C324.221 123.863 325.424 125.068 326.909 125.068H340.754C342.239 125.068 343.442 123.863 343.442 122.377V117.793C343.442 116.307 342.239 115.103 340.754 115.103Z' fill='%23B3BBE3' /%3e%3cpath d='M52.3452 45.8179H18.3275C14.6781 45.8179 11.7197 48.7798 11.7197 52.4336V63.6885C11.7197 67.3423 14.6781 70.3042 18.3275 70.3042H52.3452C55.9945 70.3042 58.9529 67.3423 58.9529 63.6885V52.4336C58.9529 48.7798 55.9945 45.8179 52.3452 45.8179Z' fill='%23B3BBE3' /%3e%3cpath d='M100.69 117.848H63.902C59.9564 117.848 56.7578 121.051 56.7578 125.001V137.175C56.7578 141.125 59.9564 144.327 63.902 144.327H100.69C104.636 144.327 107.834 141.125 107.834 137.175V125.001C107.834 121.051 104.636 117.848 100.69 117.848Z' fill='%23B3BBE3' /%3e%3cpath d='M205.591 151.391H168.803C164.857 151.391 161.659 154.593 161.659 158.543V170.717C161.659 174.668 164.857 177.87 168.803 177.87H205.591C209.536 177.87 212.735 174.668 212.735 170.717V158.543C212.735 154.593 209.536 151.391 205.591 151.391Z' fill='%23B3BBE3' /%3e%3cpath d='M208.881 107.949H172.093C168.147 107.949 164.949 111.152 164.949 115.102V127.276C164.949 131.226 168.147 134.429 172.093 134.429H208.881C212.826 134.429 216.025 131.226 216.025 127.276V115.102C216.025 111.152 212.826 107.949 208.881 107.949Z' fill='%23B3BBE3' /%3e%3cpath d='M253.322 75.8452H207.836C202.956 75.8452 199 79.806 199 84.692V99.7447C199 104.631 202.956 108.592 207.836 108.592H253.322C258.202 108.592 262.158 104.631 262.158 99.7447V84.692C262.158 79.806 258.202 75.8452 253.322 75.8452Z' fill='%23B3BBE3' /%3e%3cpath d='M404.355 145.678H358.869C353.989 145.678 350.033 149.639 350.033 154.524V169.577C350.033 174.463 353.989 178.424 358.869 178.424H404.355C409.235 178.424 413.191 174.463 413.191 169.577V154.524C413.191 149.639 409.235 145.678 404.355 145.678Z' fill='%23B3BBE3' /%3e%3cpath d='M399.981 50.0034H368.739C365.386 50.0034 362.668 52.7249 362.668 56.0821V66.4181C362.668 69.7752 365.386 72.4968 368.739 72.4968H399.981C403.334 72.4968 406.053 69.7752 406.053 66.4181V56.0821C406.053 52.7249 403.334 50.0034 399.981 50.0034Z' fill='%23B3BBE3' /%3e%3cpath d='M374.827 101.449H185.845V208.108H374.827V101.449Z' fill='%23626FE5' /%3e%3cpath d='M190.114 85.9873H370.564C371.695 85.9873 372.779 86.437 373.579 87.2375C374.378 88.038 374.827 89.1236 374.827 90.2557V101.444H185.845V90.2612C185.845 89.1277 186.294 88.0406 187.095 87.2391C187.896 86.4376 188.981 85.9873 190.114 85.9873Z' fill='%23626FE5' /%3e%3cpath d='M185.845 208.108H374.827V212.493C374.827 213.627 374.378 214.714 373.577 215.515C372.777 216.317 371.691 216.767 370.559 216.767H190.114C188.981 216.767 187.896 216.317 187.095 215.515C186.294 214.714 185.845 213.627 185.845 212.493V208.108Z' fill='%23626FE5' /%3e%3cpath d='M365.875 98.5877C368.263 98.5877 370.199 96.6495 370.199 94.2585C370.199 91.8675 368.263 89.9292 365.875 89.9292C363.487 89.9292 361.551 91.8675 361.551 94.2585C361.551 96.6495 363.487 98.5877 365.875 98.5877Z' fill='%23F0FFFB' /%3e%3cpath d='M371.401 104.375H188.904V205.161H371.401V104.375Z' fill='%23B3BBE3' /%3e%3cpath d='M238.446 29.8564H42.5352V140.43H238.446V29.8564Z' fill='%23F0FFFB' /%3e%3cpath d='M47.4656 13.8354H234.53C235.703 13.8354 236.828 14.3021 237.658 15.1326C238.487 15.9632 238.953 17.0897 238.953 18.2644V29.857H43.042V18.2588C43.0435 17.0852 43.5102 15.9601 44.3396 15.1307C45.169 14.3013 46.2934 13.8354 47.4656 13.8354Z' fill='%23F0FFFB' /%3e%3cpath d='M229.669 26.889C232.143 26.889 234.148 24.8813 234.148 22.4047C234.148 19.9281 232.143 17.9204 229.669 17.9204C227.196 17.9204 225.19 19.9281 225.19 22.4047C225.19 24.8813 227.196 26.889 229.669 26.889Z' fill='%23626FE5' /%3e%3cpath d='M235.752 32.8237H46.5645V137.307H235.752V32.8237Z' fill='%23B3BBE3' /%3e%3cpath d='M42.5352 139.447H238.446V143.992C238.446 145.167 237.98 146.293 237.151 147.124C236.321 147.954 235.196 148.421 234.023 148.421H46.9588C45.7856 148.421 44.6604 147.954 43.8308 147.124C43.0012 146.293 42.5352 145.167 42.5352 143.992V139.447Z' fill='%23F0FFFB' /%3e%3cpath d='M311.647 18.8726H258.691C255.505 18.8726 252.923 21.4578 252.923 24.6468V46.5367C252.923 49.7257 255.505 52.3109 258.691 52.3109H311.647C314.832 52.3109 317.414 49.7257 317.414 46.5367V24.6468C317.414 21.4578 314.832 18.8726 311.647 18.8726Z' fill='%23626FE5' /%3e%3cpath d='M271.409 50.0025V63.5772C271.408 64.1444 271.576 64.699 271.89 65.1708C272.204 65.6427 272.652 66.0106 273.175 66.2281C273.698 66.4456 274.274 66.5028 274.83 66.3926C275.385 66.2824 275.896 66.0097 276.297 65.6089L292.885 49.0005L271.409 50.0025Z' fill='%23626FE5' /%3e%3cpath d='M272.531 35.2431C272.532 34.6415 272.355 34.0531 272.022 33.5525C271.688 33.0518 271.214 32.6614 270.659 32.4307C270.105 32.1999 269.494 32.1393 268.904 32.2564C268.315 32.3735 267.773 32.6631 267.349 33.0884C266.924 33.5138 266.634 34.0559 266.518 34.646C266.401 35.2361 266.461 35.8477 266.692 36.4033C266.922 36.9588 267.312 37.4335 267.812 37.767C268.312 38.1006 268.9 38.278 269.501 38.2769C270.304 38.2755 271.074 37.9554 271.642 37.3867C272.21 36.8181 272.529 36.0473 272.531 35.2431Z' fill='%23F0FFFB' /%3e%3cpath d='M283.175 35.243C283.177 34.6407 282.999 34.0517 282.665 33.5507C282.331 33.0497 281.856 32.6593 281.3 32.429C280.744 32.1988 280.133 32.1391 279.543 32.2576C278.953 32.3761 278.411 32.6673 277.987 33.0944C277.563 33.5214 277.275 34.065 277.16 34.6562C277.045 35.2474 277.108 35.8595 277.341 36.4148C277.574 36.9701 277.966 37.4435 278.469 37.7751C278.971 38.1066 279.56 38.2812 280.162 38.2769C280.962 38.271 281.728 37.949 282.292 37.3808C282.857 36.8127 283.174 36.0443 283.175 35.243Z' fill='%23F0FFFB' /%3e%3cpath d='M293.814 35.2438C293.814 34.6437 293.637 34.0572 293.304 33.5583C292.971 33.0594 292.497 32.6705 291.944 32.4409C291.39 32.2113 290.781 32.1512 290.193 32.2683C289.605 32.3853 289.065 32.6743 288.641 33.0985C288.218 33.5228 287.929 34.0634 287.812 34.6519C287.695 35.2404 287.755 35.8504 287.985 36.4048C288.214 36.9591 288.602 37.4329 289.101 37.7663C289.599 38.0996 290.185 38.2776 290.784 38.2776C291.588 38.2776 292.358 37.9579 292.927 37.389C293.495 36.82 293.814 36.0484 293.814 35.2438Z' fill='%23F0FFFB' /%3e%3cpath d='M304.459 35.2431C304.46 34.6415 304.282 34.0531 303.949 33.5525C303.616 33.0518 303.142 32.6614 302.587 32.4307C302.032 32.1999 301.421 32.1393 300.832 32.2564C300.243 32.3735 299.701 32.6631 299.276 33.0884C298.851 33.5138 298.562 34.0559 298.445 34.646C298.328 35.2361 298.389 35.8477 298.619 36.4033C298.85 36.9588 299.24 37.4335 299.74 37.767C300.24 38.1006 300.828 38.278 301.428 38.2769C302.232 38.2769 303.003 37.9573 303.571 37.3884C304.139 36.8194 304.459 36.0477 304.459 35.2431Z' fill='%23F0FFFB' /%3e%3cpath d='M139.419 205.436H169.101C172.287 205.436 174.869 202.85 174.869 199.661V189.84C174.869 186.651 172.287 184.066 169.101 184.066H139.419C136.234 184.066 133.652 186.651 133.652 189.84V199.661C133.652 202.85 136.234 205.436 139.419 205.436Z' fill='%23626FE5' /%3e%3cpath d='M163.052 203.962V212.643C163.052 213.005 162.944 213.36 162.743 213.661C162.542 213.962 162.256 214.197 161.922 214.335C161.588 214.474 161.22 214.51 160.865 214.44C160.51 214.369 160.184 214.195 159.928 213.938L149.344 203.342L163.052 203.962Z' fill='%23626FE5' /%3e%3cpath d='M162.333 194.529C162.333 194.145 162.447 193.769 162.66 193.45C162.873 193.13 163.176 192.881 163.531 192.734C163.886 192.587 164.276 192.548 164.653 192.623C165.029 192.698 165.375 192.883 165.646 193.155C165.918 193.427 166.103 193.773 166.177 194.15C166.252 194.527 166.214 194.918 166.067 195.273C165.92 195.628 165.671 195.931 165.352 196.145C165.033 196.358 164.658 196.472 164.274 196.472C163.759 196.472 163.265 196.268 162.901 195.903C162.537 195.539 162.333 195.044 162.333 194.529Z' fill='%23F0FFFB' /%3e%3cpath d='M155.532 194.529C155.532 194.145 155.646 193.769 155.859 193.45C156.072 193.13 156.375 192.881 156.73 192.734C157.085 192.587 157.475 192.548 157.851 192.623C158.228 192.698 158.574 192.883 158.845 193.155C159.116 193.427 159.301 193.773 159.376 194.15C159.451 194.527 159.413 194.918 159.266 195.273C159.119 195.628 158.87 195.931 158.551 196.145C158.232 196.358 157.856 196.472 157.473 196.472C156.958 196.472 156.464 196.268 156.1 195.903C155.736 195.539 155.532 195.044 155.532 194.529Z' fill='%23F0FFFB' /%3e%3cpath d='M148.73 194.529C148.73 194.145 148.844 193.769 149.058 193.449C149.271 193.129 149.575 192.88 149.93 192.733C150.285 192.586 150.675 192.548 151.052 192.624C151.429 192.699 151.774 192.885 152.046 193.157C152.317 193.429 152.501 193.776 152.576 194.153C152.65 194.531 152.611 194.922 152.463 195.277C152.315 195.632 152.066 195.935 151.746 196.148C151.426 196.36 151.05 196.473 150.666 196.472C150.411 196.472 150.159 196.422 149.924 196.324C149.689 196.227 149.475 196.083 149.295 195.903C149.116 195.722 148.973 195.508 148.876 195.272C148.779 195.037 148.73 194.784 148.73 194.529Z' fill='%23F0FFFB' /%3e%3cpath d='M141.924 194.529C141.924 194.145 142.038 193.769 142.251 193.449C142.465 193.129 142.768 192.88 143.123 192.733C143.478 192.586 143.869 192.548 144.245 192.624C144.622 192.699 144.968 192.885 145.239 193.157C145.51 193.429 145.695 193.776 145.769 194.153C145.843 194.531 145.804 194.922 145.656 195.277C145.508 195.632 145.259 195.935 144.939 196.148C144.619 196.36 144.243 196.473 143.859 196.472C143.605 196.472 143.352 196.422 143.117 196.324C142.882 196.227 142.669 196.083 142.489 195.903C142.309 195.722 142.167 195.508 142.07 195.272C141.973 195.037 141.923 194.784 141.924 194.529Z' fill='%23F0FFFB' /%3e%3cpath d='M34.6066 182.366H56.4206C58.7599 182.366 60.6562 180.468 60.6562 178.126V170.901C60.6562 168.559 58.7599 166.66 56.4206 166.66H34.6066C32.2674 166.66 30.371 168.559 30.371 170.901V178.126C30.371 180.468 32.2674 182.366 34.6066 182.366Z' fill='%23626FE5' /%3e%3cpath d='M51.9752 181.281V187.659C51.974 187.925 51.8943 188.185 51.7459 188.406C51.5976 188.627 51.3873 188.799 51.1415 188.901C50.8957 189.003 50.6253 189.03 50.3644 188.978C50.1034 188.926 49.8636 188.799 49.6749 188.611L41.9004 180.827L51.9752 181.281Z' fill='%23626FE5' /%3e%3cpath d='M51.4443 174.35C51.4433 174.067 51.526 173.79 51.6821 173.555C51.8382 173.319 52.0606 173.135 52.3212 173.026C52.5818 172.917 52.8688 172.888 53.1459 172.943C53.423 172.997 53.6777 173.133 53.8778 173.332C54.0778 173.532 54.2143 173.786 54.2698 174.064C54.3253 174.341 54.2973 174.628 54.1895 174.89C54.0817 175.151 53.8989 175.374 53.6641 175.532C53.4294 175.689 53.1534 175.773 52.871 175.773C52.494 175.771 52.1328 175.621 51.8657 175.355C51.5987 175.088 51.4473 174.727 51.4443 174.35Z' fill='%23F0FFFB' /%3e%3cpath d='M46.4453 174.35C46.4442 174.067 46.527 173.79 46.6831 173.555C46.8391 173.319 47.0616 173.135 47.3222 173.026C47.5827 172.917 47.8698 172.888 48.1469 172.943C48.424 172.997 48.6787 173.133 48.8787 173.332C49.0788 173.532 49.2152 173.786 49.2707 174.064C49.3262 174.341 49.2983 174.628 49.1905 174.89C49.0827 175.151 48.8998 175.374 48.6651 175.532C48.4304 175.689 48.1543 175.773 47.8719 175.773C47.495 175.771 47.1338 175.621 46.8667 175.355C46.5996 175.088 46.4482 174.727 46.4453 174.35Z' fill='%23F0FFFB' /%3e%3cpath d='M41.4468 174.35C41.4457 174.067 41.5284 173.79 41.6845 173.555C41.8406 173.319 42.063 173.135 42.3236 173.026C42.5842 172.917 42.8712 172.888 43.1483 172.943C43.4254 172.997 43.6801 173.133 43.8802 173.332C44.0803 173.532 44.2167 173.786 44.2722 174.064C44.3277 174.341 44.2998 174.628 44.192 174.89C44.0841 175.151 43.9013 175.374 43.6666 175.532C43.4318 175.689 43.1558 175.773 42.8734 175.773C42.4964 175.771 42.1353 175.621 41.8682 175.355C41.6011 175.088 41.4497 174.727 41.4468 174.35Z' fill='%23F0FFFB' /%3e%3cpath d='M36.4536 174.35C36.4525 174.067 36.5354 173.79 36.6918 173.554C36.8481 173.319 37.0708 173.135 37.3317 173.026C37.5926 172.917 37.8799 172.888 38.1572 172.943C38.4345 172.998 38.6892 173.134 38.889 173.334C39.0889 173.534 39.2248 173.789 39.2797 174.067C39.3346 174.345 39.3059 174.632 39.1972 174.893C39.0885 175.155 38.9048 175.378 38.6694 175.534C38.4339 175.691 38.1573 175.774 37.8747 175.773C37.4983 175.771 37.1377 175.621 36.8715 175.354C36.6053 175.088 36.4551 174.727 36.4536 174.35Z' fill='%23F0FFFB' /%3e%3cpath d='M92.7828 202.788H70.6316C68.2557 202.788 66.3296 204.716 66.3296 207.095V214.425C66.3296 216.804 68.2557 218.732 70.6316 218.732H92.7828C95.1588 218.732 97.0848 216.804 97.0848 214.425V207.095C97.0848 204.716 95.1588 202.788 92.7828 202.788Z' fill='%23B3BBE3' /%3e%3cpath d='M86.2244 187.947H75.5413C74.3961 187.947 73.4678 188.876 73.4678 190.023V193.56C73.4678 194.707 74.3961 195.636 75.5413 195.636H86.2244C87.3696 195.636 88.298 194.707 88.298 193.56V190.023C88.298 188.876 87.3696 187.947 86.2244 187.947Z' fill='%23B3BBE3' /%3e%3cpath d='M107.027 196.195H93.1815C91.6973 196.195 90.4941 197.4 90.4941 198.886V203.47C90.4941 204.956 91.6973 206.16 93.1815 206.16H107.027C108.512 206.16 109.715 204.956 109.715 203.47V198.886C109.715 197.4 108.512 196.195 107.027 196.195Z' fill='%23B3BBE3' /%3e%3crect opacity='0.5' x='54.6396' y='128.725' width='171.1' height='1.45175' fill='%23F0FFFB' /%3e%3cellipse cx='86.5399' cy='128.725' rx='4.34999' ry='4.3552' fill='%23D1DDEF' /%3e%3c/svg%3e")`;var _r="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUwIiBoZWlnaHQ9IjMxMSIgdmlld0JveD0iMCAwIDU1MCAzMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMTU6MzI3NjEpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzIxNTozMjc2MSkiPgo8cGF0aCBkPSJNLTIgMTQuODA5Nkg0MjUuMTk4VjMxMUgtMlYxNC44MDk2WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC40Ii8+CjxyZWN0IHg9Ii04OC41Nzg2IiB5PSItMjUwLjYyMyIgd2lkdGg9IjY1MC40OCIgaGVpZ2h0PSI1ODIuMTI4IiBmaWxsPSIjMzk1MkVFIi8+CjxwYXRoIG9wYWNpdHk9IjAuMTIiIGQ9Ik01OTMuNzE5IDIxNy43NDJDNTk3LjY5IDE0Ni42OTEgNTQzLjAwNyA2NS4xNTg4IDQ2OS43NjkgNTUuOTE5MkM0NjguNDgxIDU1LjczNjYgNDY3LjE4OCA1NS41OTQgNDY1Ljg1MiA1NS40NDU2QzM2MC43NjMgNDMuOTc4IDM0NS41NDggMTcyLjIyMiAyNDkuMzkgMTgwLjg1M0MxNTMuMjggMTg5LjQ1MSA4NC41OTEyIDExMS42NTMgLTMyLjE0MjEgMTUyLjQxOEMtMTM2Ljk3MSAxODkuMDMgLTE3OC4yMzQgNDI4LjY2MiAxMjIuMTcyIDQ1Ni45OTVDMzYyLjYxIDQ3OS42NDQgNTgxLjg4OSA0MjkuNzIzIDU5My43MTkgMjE3Ljc0MloiIGZpbGw9IiNFM0U4RkYiLz4KPHJlY3QgeD0iLTg4LjU3ODYiIHk9IjI5Ni4xOSIgd2lkdGg9IjU5NC42NTkiIGhlaWdodD0iODguODU3MSIgZmlsbD0iI0ZCQUNDMiIvPgo8cGF0aCBkPSJNMjcxLjM3NiAzMDIuOTUxQzI3Mi4xMjEgMzAwLjU3MSAyNzIuNTQ2IDI5OC4wNzIgMjcyLjU0NiAyOTUuNTE0QzI3Mi41NDYgMjc3LjY0NyAyNTMuMTQyIDI2My4xNzEgMjI5LjE5MyAyNjMuMTcxQzIyMy40NzggMjYzLjE3MSAyMTguMDI5IDI2NC4wMDQgMjEzLjAzMiAyNjUuNTExQzIwOC40MDcgMjU1LjIxOSAxOTUuMzgzIDI0Ny44MjIgMTgwLjAxOSAyNDcuODIyQzE3OC41MDQgMjQ3LjgyMiAxNzcuMDQyIDI0Ny45MDEgMTc1LjU4IDI0OC4wNEMxNzIuMTI1IDIxOC43OSAxMzkuMjQ1IDE5NS44NjYgOTkuMTYxNSAxOTUuODY2QzU3LjMyMzkgMTk1Ljg2NiAyMy4zMjc0IDIyMC44NTMgMjIuNDc2OCAyNTEuOTI3QzMuOTUwMjUgMjU4LjYxIC04LjgzNDk2IDI3Mi43NjkgLTguODM0OTYgMjg5LjE2OEMtOC44MzQ5NiAyOTQuMDA3IC03LjcxODU4IDI5OC42NDcgLTUuNjcxODggMzAyLjk1MUgyNzEuMzc2WiIgZmlsbD0iI0ZCQUNDMiIvPgo8cGF0aCBkPSJNMjQyLjUzMSAyOTguMzk0QzI0Mi4wNTggMjk2Ljg3NSAyNDEuNzg4IDI5NS4yOCAyNDEuNzg4IDI5My42NDdDMjQxLjc4OCAyODIuMjQzIDI1NC4xMjEgMjczLjAwMiAyNjkuMzQ0IDI3My4wMDJDMjcyLjk3NiAyNzMuMDAyIDI3Ni40NCAyNzMuNTM0IDI3OS42MTYgMjc0LjQ5NkMyODIuNTU2IDI2Ny45MjcgMjkwLjgzNSAyNjMuMjA1IDMwMC42IDI2My4yMDVDMzAxLjU2MyAyNjMuMjA1IDMwMi40OTIgMjYzLjI1NiAzMDMuNDIyIDI2My4zNDVDMzA1LjYxOCAyNDQuNjc0IDMyNi41MTcgMjMwLjA0MiAzNTEuOTk2IDIzMC4wNDJDMzc4LjU4OSAyMzAuMDQyIDQwMC4xOTggMjQ1Ljk5MSA0MDAuNzM4IDI2NS44MjVDNDEyLjUxNCAyNzAuMDkxIDQyMC42NDEgMjc5LjEyOSA0MjAuNjQxIDI4OS41OTdDNDIwLjY0MSAyOTIuNjg1IDQxOS45MzIgMjk1LjY0NyA0MTguNjMxIDI5OC4zOTRIMjQyLjUzMVoiIGZpbGw9IiNGQkFDQzIiLz4KPHBhdGggZD0iTS0wLjIyNjU2MiAzMzEuNTA2QzIuOTkxIDMyNy40NTQgNC44MzQ5OCAzMjIuNzk4IDQuODM0OTggMzE3LjgzOUM0LjgzNDk4IDMwMi4yOTEgLTEzLjE5MDkgMjg5LjY5IC0zNS40MzE2IDI4OS42OUMtMzkuMDI1NSAyODkuNjkgLTQyLjUwNjUgMjkwLjAxOSAtNDUuODE4MiAyOTAuNjM3Qy01Mi44OTMgMjc3LjI2IC03MS4zMTQxIDI2Ny43MTEgLTkyLjkzMzkgMjY3LjcxMUMtMTE3LjQxNCAyNjcuNzExIC0xMzcuNzkyIDI3OS45NTcgLTE0Mi4yNTEgMjk2LjE0OUMtMTQ1LjM3NSAyOTUuNjA5IC0xNDguNjMgMjk1LjMyIC0xNTEuOTc5IDI5NS4zMkMtMTc0LjIyIDI5NS4zMiAtMTkyLjI0NiAzMDcuOTIxIC0xOTIuMjQ2IDMyMy40NjlDLTE5Mi4yNDYgMzI2LjI1NyAtMTkxLjY2MiAzMjguOTY3IC0xOTAuNTcxIDMzMS41MDZILTAuMjI2NTYyWiIgZmlsbD0iI0ZCQUNDMiIvPgo8cGF0aCBkPSJNNTkyLjE1NSAzMjEuMjUzQzU5NS4zNzIgMzE3LjIwMSA1OTcuMjE2IDMxMi41NDUgNTk3LjIxNiAzMDcuNTg2QzU5Ny4yMTYgMjkyLjAzOSA1NzkuMTkgMjc5LjQzOCA1NTYuOTUgMjc5LjQzOEM1NTMuMzU2IDI3OS40MzggNTQ5Ljg3NSAyNzkuNzY2IDU0Ni41NjMgMjgwLjM4NUM1MzkuNDg4IDI2Ny4wMDcgNTIxLjA2NyAyNTcuNDU4IDQ5OS40NDcgMjU3LjQ1OEM0NzQuOTY4IDI1Ny40NTggNDU0LjU5IDI2OS43MDQgNDUwLjEzIDI4NS44OTZDNDQ3LjAwNyAyODUuMzU3IDQ0My43NTIgMjg1LjA2NyA0NDAuNDAyIDI4NS4wNjdDNDE4LjE2MiAyODUuMDY3IDQwMC4xMzYgMjk3LjY2OCA0MDAuMTM2IDMxMy4yMTZDNDAwLjEzNiAzMTYuMDA0IDQwMC43MTkgMzE4LjcxNCA0MDEuODEgMzIxLjI1M0g1OTIuMTU1WiIgZmlsbD0iI0ZCQUNDMiIvPgo8ZyBvcGFjaXR5PSIwLjUiIGNsaXAtcGF0aD0idXJsKCNjbGlwMl8yMTU6MzI3NjEpIj4KPHBhdGggZD0iTTIwOS4wMSAxOTAuNzM4QzIxMS4wODkgMTkyLjgzMyAyMTQuNjY5IDE5NC4yMiAyMTcuODE5IDE5My41NThDMjE4LjA4OSAxOTMuNDk4IDIxOC4zNTggMTkzLjQyOCAyMTguNjI3IDE5My4zMzZDMjE5Ljk0OSAxOTIuODg5IDIyMS4xNjQgMTkyLjA0MSAyMjIuMTE3IDE5MC42NzhDMjIzLjU3MyAxODguNjAzIDIyNC40MTMgMTg1LjMyIDIyNC4wOTcgMTgwLjQ2M0MyMjMuNTcyIDE3Mi40MzQgMjIwLjIwMSAxNjkuMDAxIDIxNi45NjcgMTY3LjU3M0MyMTMuNzMzIDE2Ni4xNDUgMjEwLjYyNSAxNjYuNzMyIDIxMC42MjUgMTY2LjczMkMxOTguMDgxIDE2OS44MjcgMjA0LjQ3MyAxODYuMTg3IDIwOS4wMSAxOTAuNzM4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIxNy44MDMgMTkzLjIxQzIxNy44MDMgMTkzLjIxIDIxNi44MzQgMTk0LjcwMiAyMTcuMTMzIDE5NC44MjRDMjE3LjQzMiAxOTQuOTQ2IDIxNy40NDUgMTk0LjYwOCAyMTguMjE3IDE5NC43MDFDMjE4Ljk4OSAxOTQuNzk1IDIxOC44ODEgMTk0Ljc4OCAyMTkuMjczIDE5NC42MzVDMjE5LjY2NSAxOTQuNDgyIDIxOS43MTIgMTk0LjA1OCAyMTkuNzEyIDE5NC4wNThMMjE4LjYwNyAxOTIuOTE1TDIxNy44MDMgMTkzLjIxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIxOC42OTkgMTkzLjc3NEMyMTYuNjQ1IDE5NS44NTIgMjE1Ljg0NiAxOTkuMTAxIDIxNy4yMjQgMjAxLjUzNEMyMTcuOTQ4IDIwMi44MTggMjE5LjE3IDIwMy43NjggMjIwLjQwOCAyMDQuNjM3QzIyMS42NDUgMjA1LjUwNiAyMjIuOTMyIDIwNi4zNCAyMjMuODU3IDIwNy40OTdDMjI0Ljc5MyAyMDguNjUxIDIyNS4zMjcgMjEwLjIwMyAyMjQuODIzIDIxMS42MjRDMjI0LjMyOCAyMTMuMDMxIDIyMi41NjIgMjE0LjA4MyAyMjEuMTI3IDIxMy41MzhDMjIwLjg1NCAyMTMuNDMyIDIyMC42MDcgMjEzLjI4NiAyMjAuNDM0IDIxMy4wNjdDMjE5LjkwOSAyMTIuNDIzIDIyMC4yNTIgMjExLjM4MiAyMjAuOTY5IDIxMC44OTNDMjIyLjExNiAyMTAuMTIgMjIzLjgwNCAyMTAuNjAxIDIyNC42MzcgMjExLjYyN0MyMjUuNDkyIDIxMi42NDggMjI1LjY1OSAyMTQuMDQxIDIyNS42NDEgMjE1LjM1QzIyNS42MjYgMjE2LjY2OCAyMjUuNDYyIDIxOC4wMDMgMjI1Ljc1MSAyMTkuMjc3QzIyNi40NDUgMjIyLjM3NyAyMjkuNjIxIDIyNC40ODUgMjMwLjQzOSAyMjcuNTY1QzIzMC45MjEgMjI5LjM3MSAyMzAuNTQ3IDIzMS4zOTQgMjMxLjM0IDIzMy4wODgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC40NTU2NzgiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L2c+CjxnIG9wYWNpdHk9IjAuNSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAzXzIxNTozMjc2MSkiPgo8cGF0aCBkPSJNMzM1Ljc1MiAxMjYuNTUyQzMzNS4zOTcgMTI3LjI3MSAzMzUuMDM3IDEyNy45NjYgMzM0LjY3MiAxMjguNjM5QzMzMi43NTUgMTMyLjA4NiAzMzAuNTAyIDEzNC45NjMgMzI4LjU3MSAxMzYuNTk3QzMyNS4yNSAxMzkuNDE0IDMxOS44NjUgMTQwLjk5IDMxNS4zNyAxMzkuNTY5QzMxNS4yNjggMTM5LjU0NyAzMTUuMTYgMTM5LjUwMSAzMTUuMDY2IDEzOS40NjRDMzE0Ljc4OSAxMzkuMzc1IDMxNC41MTYgMTM5LjI1IDMxNC4yNDMgMTM5LjEyNEwzMTQuMjI4IDEzOS4xMTZDMzEzLjQ3OSAxMzguNzgyIDMxMi43NjIgMTM4LjMzMiAzMTIuMDk2IDEzNy43OTVDMzA4LjYwNyAxMzQuOTYxIDMwNi41MjkgMTI5LjIyOSAzMDguMTIyIDExOS4yNkMzMDkuNDM5IDExMS4xMDUgMzEyLjQxMyAxMDYuMzUyIDMxNS43MzkgMTAzLjY1NUMzMjIuMDY3IDk4LjUxMTUgMzI5LjY3NCAxMDAuNzE3IDMyOS42NzQgMTAwLjcxN0MzNDEuNzY3IDEwNS4wMzUgMzQwLjIzNiAxMTcuMjU0IDMzNS43NTIgMTI2LjU1MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMTQuMjExIDEzOS4xNDRDMzE0LjIxMSAxMzkuMTQ0IDMxMS43MiAxMzkuOTM3IDMxMS45MzMgMTQwLjM1NkMzMTIuMTUxIDE0MC43OTggMzEyLjQ4OCAxNDAuMzk5IDMxMy4yNTYgMTQxLjI0OUMzMTQuMDI0IDE0Mi4wOTggMzEzLjkxMyAxNDEuOTkzIDMxNC41MDMgMTQyLjE3M0MzMTUuMDg0IDE0Mi4zNjcgMzE1LjUzNSAxNDEuOTM5IDMxNS41MzUgMTQxLjkzOUwzMTUuMzcgMTM5LjU2OUwzMTQuMjExIDEzOS4xNDRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzEzLjIxOSAxNDEuMjQ2QzMwOC45MzMgMTQzLjYzNyAzMDYuMTM3IDE1MC4wMyAzMDUuODU2IDE1NC43NTJDMzA1LjcyMiAxNTcuMDM5IDMwNi40MTYgMTU5LjQ5NCAzMDguMjA0IDE2MC45MzdDMzA5LjEgMTYxLjY3IDMxMC4yMjIgMTYyLjA5MiAzMTEuMzcgMTYyLjI3OEMzMTIuNzU1IDE2Mi40ODkgMzE0LjQ2NSAxNjIuMTU5IDMxNS4wMjggMTYwLjg2N0MzMTUuNDU0IDE1OS45IDMxNS4wMiAxNTguNjg4IDMxNC4yIDE1OC4wMjFDMzEzLjM4MSAxNTcuMzU0IDMxMi4yNTUgMTU3LjE2MiAzMTEuMTk4IDE1Ny4yNDVDMzA1LjI0MiAxNTcuNzQgMzAyLjUxNiAxNjUuMDQ5IDMwMi4wNDQgMTcwLjEyMUMzMDEuNjkxIDE3My45NjUgMzAyLjE1MiAxNzguMTYzIDMwMy40NDkgMTgxLjc3NkMzMDUuODM2IDE4OC40MTEgMzA2LjE0NCAxOTMuNjA0IDMwMi4zNjggMTk5Ljc1N0MzMDEuMTYzIDIwMS43MyAyOTkuODgzIDIwMy42OTcgMjk5LjE0NSAyMDUuODkzQzI5OC40MjEgMjA4LjA5NyAyOTguMzA2IDIxMC42MDkgMjk5LjQxNSAyMTIuNjM0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNDU1Njc4IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPgo8cGF0aCBkPSJNMTM2LjAyNCA1MS40NDc1QzEzNi40MDIgNTMuMzQ2MSAxMzUuMTQ2IDU1LjE5OTQgMTMzLjIyMyA1NS41ODE5QzEzMS4zIDU1Ljk2NDQgMTI5LjQzMSA1NC43MzI2IDEyOS4wNTMgNTIuODM0QzEyOC42NzUgNTAuOTM1NCAxMjkuOTMxIDQ5LjA4MjEgMTMxLjg1NCA0OC42OTk2QzEzMy43NzcgNDguMzE3MSAxMzUuNjQ2IDQ5LjU0ODkgMTM2LjAyNCA1MS40NDc1WiIgZmlsbD0iI0ZERTVERSIvPgo8cGF0aCBkPSJNNDQuMzI5NiAxOTkuMzg4QzQ0LjY0NDUgMjAwLjk3MiA0My41OTc0IDIwMi41MzEgNDEuOTc2MSAyMDIuODUzQzQwLjM1NDkgMjAzLjE3NSAzOC43OTA5IDIwMi4xMzYgMzguNDc2IDIwMC41NTNDMzguMTYxMSAxOTguOTY5IDM5LjIwODMgMTk3LjQxIDQwLjgyOTUgMTk3LjA4OEM0Mi40NTA3IDE5Ni43NjUgNDQuMDE0NyAxOTcuODA1IDQ0LjMyOTYgMTk5LjM4OFoiIHN0cm9rZT0iI0ZERTVERSIgc3Ryb2tlLXdpZHRoPSIxLjEzOTE5Ii8+CjxwYXRoIGQ9Ik0xNjUuMDAyIDE4My40MThMMTY1LjAwNSAxODMuNDE3QzE2Ni42MiAxODMuMDg2IDE2OC4xODUgMTg0LjEyMiAxNjguNTAyIDE4NS43MThDMTY4LjgxNyAxODcuMzAxIDE2Ny43NyAxODguODYgMTY2LjE0OSAxODkuMTgzQzE2NC41MjcgMTg5LjUwNSAxNjIuOTYzIDE4OC40NjYgMTYyLjY0OCAxODYuODgyQzE2Mi4zMzMgMTg1LjI5OSAxNjMuMzgxIDE4My43NCAxNjUuMDAyIDE4My40MThaIiBzdHJva2U9IiNGREU1REUiIHN0cm9rZS13aWR0aD0iMS4xMzkxOSIvPgo8cGF0aCBkPSJNMjc2LjY0MyA2OC40MzQzTDI3Ni42NDYgNjguNDMzN0MyNzguMjYxIDY4LjEwMyAyNzkuODI2IDY5LjEzODkgMjgwLjE0MyA3MC43MzQ3QzI4MC40NTggNzIuMzE4IDI3OS40MTEgNzMuODc2OSAyNzcuNzkgNzQuMTk5M0MyNzYuMTY4IDc0LjUyMTggMjc0LjYwNCA3My40ODIzIDI3NC4yODkgNzEuODk5QzI3My45NzUgNzAuMzE1NiAyNzUuMDIyIDY4Ljc1NjggMjc2LjY0MyA2OC40MzQzWiIgc3Ryb2tlPSIjRkRFNURFIiBzdHJva2Utd2lkdGg9IjEuMTM5MTkiLz4KPHBhdGggb3BhY2l0eT0iMC40IiBkPSJNMzg3LjA4MyAxMzEuNjQ3TDM5MS42MTggMTM0Ljg2MUMzOTEuNjE4IDEzNC44NjEgMzkyLjMwMSAxMzguMjkxIDM4OC45ODMgMTM5Ljc3QzM4NS42NjUgMTQxLjI0OCAzODMuNTI1IDE0My4wNTMgMzg0LjI1OSAxNDUuMzc0QzM4NC4yNTkgMTQ1LjM3NCAzODAuMTk2IDE0NC41MzQgMzc5Ljg5MiAxNDEuNTc4QzM3OS41NzcgMTM4LjYyNCAzODMuNTM1IDEzOC45MzYgMzg1LjQ2NyAxMzYuMDg1QzM4Ny4zOTkgMTMzLjIzMyAzODcuMDgzIDEzMS42NDcgMzg3LjA4MyAxMzEuNjQ3WiIgZmlsbD0iI0Y2RjVGMyIvPgo8cGF0aCBkPSJNNTkuMjAyNiAyMzkuNTgyTDU2Ljg1MzYgMjQ0LjYxQzU2Ljg1MzYgMjQ0LjYxIDUzLjU3NjYgMjQ1Ljk0NyA1MS40ODAxIDI0My4wMjJDNDkuMzk0NCAyNDAuMDk0IDQ3LjIwNjIgMjM4LjM2NiA0NS4wMzU4IDIzOS41NDFDNDUuMDM1OCAyMzkuNTQxIDQ1LjEyMDUgMjM1LjQzOCA0Ny45OTE3IDIzNC41NkM1MC44NzM3IDIzMy42NzkgNTEuMjg4NiAyMzcuNTcyIDU0LjQ4OTUgMjM4Ljg4N0M1Ny42OTAzIDI0MC4yMDMgNTkuMjAyNiAyMzkuNTgyIDU5LjIwMjYgMjM5LjU4MloiIGZpbGw9IiNGRkQ0MDAiLz4KPHBhdGggZD0iTTk3LjA4OTMgMjE5LjkyMkw5OS42NiAyMjQuODE2Qzk5LjY2IDIyNC44MTYgOTguNzA2NCAyMjguMTg4IDk1LjA3MyAyMjguMDQ0QzkxLjQ0NDIgMjI3Ljg5MSA4OC43MTIxIDIyOC41NDggODguMzExNiAyMzAuOTU3Qzg4LjMxMTYgMjMwLjk1NyA4NS4wODMzIDIyOC4zOTQgODYuMTUzMyAyMjUuNjE4Qzg3LjIyNzggMjIyLjgzMiA5MC41OTY3IDIyNC44NzcgOTMuNjI0NyAyMjMuMTc5Qzk2LjY1MjcgMjIxLjQ4IDk3LjA4OTMgMjE5LjkyMiA5Ny4wODkzIDIxOS45MjJaIiBmaWxsPSIjRkRFNURFIi8+CjxwYXRoIG9wYWNpdHk9IjAuNCIgZD0iTTM2NC4zNTQgMTc0Ljc0N0wzNjEuODE1IDE3OS42ODJDMzYxLjgxNSAxNzkuNjgyIDM1OC40ODkgMTgwLjg5MyAzNTYuNTA2IDE3Ny44OUMzNTQuNTIzIDE3NC44ODYgMzUyLjQxMyAxNzMuMDc0IDM1MC4xOTkgMTc0LjE2NUMzNTAuMTk5IDE3NC4xNjUgMzUwLjQ0MSAxNzAuMDY5IDM1My4zNDQgMTY5LjMwMUMzNTYuMjU3IDE2OC41MyAzNTYuNTM0IDE3Mi40MzQgMzU5LjY3MSAxNzMuODczQzM2Mi44MTkgMTc1LjMxMSAzNjQuMzU0IDE3NC43NDcgMzY0LjM1NCAxNzQuNzQ3WiIgZmlsbD0iI0Y2RjVGMyIvPgo8cGF0aCBkPSJNMTQ2LjI1MyAxMTQuNDM3TDE0My43MTMgMTE5LjM3MUMxNDMuNzEzIDExOS4zNzEgMTQwLjM4OCAxMjAuNTgyIDEzOC40MDQgMTE3LjU3OUMxMzYuNDMyIDExNC41NzMgMTM0LjMxMiAxMTIuNzY0IDEzMi4wOTggMTEzLjg1NEMxMzIuMDk4IDExMy44NTQgMTMyLjM0IDEwOS43NTggMTM1LjI0MiAxMDguOTlDMTM4LjE1NiAxMDguMjIgMTM4LjQyMiAxMTIuMTI2IDE0MS41NyAxMTMuNTYzQzE0NC43MTggMTE1IDE0Ni4yNTMgMTE0LjQzNyAxNDYuMjUzIDExNC40MzdaIiBmaWxsPSIjRjhEQTNBIi8+CjxwYXRoIGQ9Ik0zNS4zNzY0IDU4LjYwNzhMMzcuNzgyNCA2My42MDlDMzcuNzgyNCA2My42MDkgMzYuNzQzNSA2Ni45OTI0IDMzLjE1MTcgNjYuNzYzOUMyOS41NjQ3IDY2LjUyNTQgMjYuODQyNCA2Ny4xMjYxIDI2LjM3OCA2OS41NDk5QzI2LjM3OCA2OS41NDk5IDIzLjI1NTQgNjYuODg3NiAyNC4zOTI3IDY0LjEwODdDMjUuNTM0OCA2MS4zMTk4IDI4LjgxMTEgNjMuNDYyNSAzMS44NTU3IDYxLjgxNzNDMzQuOTAwMyA2MC4xNzIgMzUuMzc2NCA1OC42MDc4IDM1LjM3NjQgNTguNjA3OFoiIGZpbGw9IiNGOERBM0EiLz4KPHBhdGggZD0iTTM1OS43MSAxMDYuNjYxTDM2My43MjQgMTAyLjgwMUMzNjMuNzI0IDEwMi44MDEgMzY3LjI2MiAxMDIuNzE0IDM2OC4xNDggMTA2LjE5NEMzNjkuMDMzIDEwOS42NzMgMzcwLjQzOSAxMTIuMDYzIDM3Mi44ODQgMTExLjczM0MzNzIuODg0IDExMS43MzMgMzcxLjMyNSAxMTUuNTQyIDM2OC4zMiAxMTUuMzQ0QzM2NS4zMTYgMTE1LjE0NSAzNjYuMzM0IDExMS4zNTQgMzYzLjg0MiAxMDguOTlDMzYxLjM1IDEwNi42MjYgMzU5LjcxIDEwNi42NjEgMzU5LjcxIDEwNi42NjFaIiBmaWxsPSIjRkZENDAwIi8+CjxlbGxpcHNlIG9wYWNpdHk9IjAuNiIgY3g9IjI1NS40NTgiIGN5PSIyNzguNTMzIiByeD0iMzAuNzU4MiIgcnk9IjMuOTg3MTgiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMTIiLz4KPHBhdGggZD0iTTI3OS4wMTYgMjc2LjQ3NUwyNzYuODY0IDIxMC43NTFMMjMxLjUzNSAyNjUuNjY1QzIzMS41MzUgMjY1LjY2NSAyNDkuMTMxIDI4Ny4yODYgMjc5LjAxNiAyNzYuNDc1WiIgZmlsbD0iIzEyMUU2QSIvPgo8cGF0aCBkPSJNMjY0LjE5IDI0Ny44NjRDMjY0LjE5IDI1MC44MDYgMjYxLjgwNCAyNTMuMTkyIDI1OC44NjEgMjUzLjE5MkMyNTUuOTE4IDI1My4xOTIgMjUzLjUzMiAyNTAuODA2IDI1My41MzIgMjQ3Ljg2NEMyNTMuNTMyIDI0NC45MjEgMjU1LjkxOCAyNDIuNTM1IDI1OC44NjEgMjQyLjUzNUMyNjEuODA0IDI0Mi41MzUgMjY0LjE5IDI0NC45MjEgMjY0LjE5IDI0Ny44NjRaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMuMzY4NTUiLz4KPHBhdGggZD0iTTI3Ny43MjUgMjM5LjExN0MyNzIuNzA0IDIzOS4zNTYgMjY4LjQ5NiAyMzUuNDMzIDI2OC4yNTcgMjMwLjQxMUMyNjguMDE4IDIyNS4zODggMjcyLjA4MiAyMjIuMzgyIDI3Ny4xMDIgMjIyLjE0M0wyNzcuNzI1IDIzOS4xMTdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjU3LjgzNCAyNzIuODg4QzI2MC41MjcgMjcyLjg4OCAyNjIuNzExIDI3MC43MDMgMjYyLjcxMSAyNjguMDA4QzI2Mi43MTEgMjY1LjMxNCAyNjAuNTI3IDI2My4xMjkgMjU3LjgzNCAyNjMuMTI5QzI1NS4xNCAyNjMuMTI5IDI1Mi45NTcgMjY1LjMxNCAyNTIuOTU3IDI2OC4wMDhDMjUyLjk1NyAyNzAuNzAzIDI1NS4xNCAyNzIuODg4IDI1Ny44MzQgMjcyLjg4OFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMTU6MzI3NjEiPgo8cmVjdCB3aWR0aD0iNTUzLjY0OCIgaGVpZ2h0PSIzMTEiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8yMTU6MzI3NjEiPgo8cmVjdCB3aWR0aD0iNTUzLjY0OCIgaGVpZ2h0PSIzMTEiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMl8yMTU6MzI3NjEiPgo8cmVjdCB3aWR0aD0iMjUuODYyNCIgaGVpZ2h0PSI2OS43MTAzIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTk4LjQ5OCAxNjkuODU0KSByb3RhdGUoLTE1LjU4NjQpIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDNfMjE1OjMyNzYxIj4KPHJlY3Qgd2lkdGg9IjQzLjMxNDgiIGhlaWdodD0iMTEyLjE0NCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyMC4wNjYgOTQuNTUzMSkgcm90YXRlKDMxLjAwOTEpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";var my=e=>B.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 14 3",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),B.createElement("path",{d:`M13.1875 0.125H0.8125C0.496094 0.125 0.25 0.40625 0.25 0.6875V1.8125C0.25 2.12891 0.496094
      2.375 0.8125 2.375H13.1875C13.4688 2.375 13.75 2.12891 13.75 1.8125V0.6875C13.75 0.40625
      13.4688 0.125 13.1875 0.125Z`,fill:"#A5A9B5"})),qs=my;var dy=e=>B.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),B.createElement("path",{d:`M14.1875 0.375H1.8125C0.863281 0.375 0.125 1.14844 0.125 2.0625V14.4375C0.125 15.3867
      0.863281 16.125 1.8125 16.125H14.1875C15.1016 16.125 15.875 15.3867 15.875
      14.4375V2.0625C15.875 1.14844 15.1016 0.375 14.1875 0.375ZM14.1875
      14.4375H1.8125V2.0625H14.1875V14.4375ZM4.34375 12.75H4.90625C5.1875 12.75 5.46875 12.5039
      5.46875 12.1875V7.6875C5.46875 7.40625 5.1875 7.125 4.90625 7.125H4.34375C4.02734 7.125
      3.78125 7.40625 3.78125 7.6875V12.1875C3.78125 12.5039 4.02734 12.75 4.34375 12.75ZM7.71875
      12.75H8.28125C8.5625 12.75 8.84375 12.5039 8.84375 12.1875V4.3125C8.84375 4.03125 8.5625
      3.75 8.28125 3.75H7.71875C7.40234 3.75 7.15625 4.03125 7.15625 4.3125V12.1875C7.15625
      12.5039 7.40234 12.75 7.71875 12.75ZM11.0938 12.75H11.6562C11.9375 12.75 12.2188 12.5039
      12.2188 12.1875V9.9375C12.2188 9.65625 11.9375 9.375 11.6562 9.375H11.0938C10.7773 9.375
      10.5312 9.65625 10.5312 9.9375V12.1875C10.5312 12.5039 10.7773 12.75 11.0938 12.75Z`,fill:"#292B32"})),Zs=dy;var py=e=>B.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),B.createElement("path",{d:`M8 16C12.3857 16 16 12.3793 16 7.99581C16 3.62074 12.3774 0 8 0C3.61426 0 0 3.62074 0
      7.99581C0 12.3793 3.62264 16 8 16ZM5.12369 11.4573C4.79665 11.4573 4.54507 11.1975 4.54507
      10.879C4.54507 10.7197 4.60377 10.5773 4.71279 10.4767L7.1782 8.00419L4.71279 5.53169C4.60377
      5.43112 4.54507 5.28863 4.54507 5.12939C4.54507 4.80251 4.79665 4.55946 5.12369
      4.55946C5.28302 4.55946 5.41719 4.61812 5.52621 4.72708L8 7.1912L10.4822 4.72708C10.5996
      4.60136 10.7338 4.54269 10.8847 4.54269C11.2034 4.54269 11.4633 4.80251 11.4633
      5.12101C11.4633 5.28025 11.413 5.40597 11.2872 5.52331L8.81342 8.00419L11.2872
      10.4599C11.3962 10.5773 11.4549 10.7114 11.4549 10.879C11.4549 11.1975 11.2034 11.4573
      10.8763 11.4573C10.7086 11.4573 10.566 11.3903 10.457 11.2813L8 8.81718L5.53459
      11.2813C5.43396 11.3903 5.28302 11.4573 5.12369 11.4573Z`,fill:"#898E9E"})),Ys=py;var cy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),B.createElement("path",{d:`M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0
      4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2
      16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8
      0 16 7.2 16 16v288z`})),v1=cy;var uy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),B.createElement("path",{d:`M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48
      48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336
      0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z`})),x1=uy;function fy(e){return B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20"},e),B.createElement("path",{fill:"#A5A9B5",d:"M17.793 11.025c.148.854.037 1.67-.334 2.338a3.437 3.437 0 01-.668 2.487c-.037 2.078-1.299 3.525-4.156 3.525h-.854c-3.785 0-4.935-1.41-6.605-1.447-.112.482-.594.853-1.114.853H1.688c-.667 0-1.187-.52-1.187-1.187V8.687c0-.63.52-1.187 1.188-1.187h3.636c.705-.594 1.707-2.227 2.56-3.08.52-.52.372-4.045 2.673-4.045 2.115 0 3.525 1.188 3.525 3.896 0 .706-.148 1.262-.334 1.745h1.373c1.781 0 3.191 1.521 3.191 3.154 0 .705-.185 1.299-.519 1.855zm-2.3 2.004c.816-.742.704-1.892.185-2.449.37 0 .853-.705.853-1.373-.037-.705-.63-1.41-1.41-1.41h-3.86c0-1.41 1.04-2.078 1.04-3.526 0-.89 0-2.115-1.744-2.115-.705.705-.372 2.487-1.41 3.526-1.002 1.002-2.45 3.6-3.526 3.6H5.25v6.939c1.967 0 3.71 1.373 6.346 1.373h1.41c1.299 0 2.264-.631 1.967-2.412.556-.334 1.002-1.373.52-2.153zM3.765 16.406a.903.903 0 00-.891-.89.88.88 0 00-.89.89c0 .52.37.89.89.89a.88.88 0 00.89-.89z"}))}var qr=fy;var gy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 448 512",fill:"currentColor"},e),B.createElement("path",{d:`M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0
      12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41
      80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0
      48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6
      6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12
      12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z`})),M1=gy;var Cy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 320 512",fill:"currentColor"},e),B.createElement("path",{d:`M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34
      0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4
      52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4
      256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160
      303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34
      0-22.58L207.6 256z`})),bt=Cy;var hy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),B.createElement("path",{d:`M512 256c0-37.7-23.7-69.9-57.1-82.4 14.7-32.4
      8.8-71.9-17.9-98.6-26.7-26.7-66.2-32.6-98.6-17.9C325.9 23.7 293.7 0 256 0s-69.9 23.7-82.4
      57.1c-32.4-14.7-72-8.8-98.6 17.9-26.7 26.7-32.6 66.2-17.9 98.6C23.7 186.1 0 218.3 0 256s23.7
      69.9 57.1 82.4c-14.7 32.4-8.8 72 17.9 98.6 26.6 26.6 66.1 32.7 98.6 17.9 12.5 33.3 44.7 57.1
      82.4 57.1s69.9-23.7 82.4-57.1c32.6 14.8 72 8.7 98.6-17.9 26.7-26.7 32.6-66.2 17.9-98.6
      33.4-12.5 57.1-44.7 57.1-82.4zm-144.8-44.25L236.16 341.74c-4.31
      4.28-11.28 4.25-15.55-.06l-75.72-76.33c-4.28-4.31-4.25-11.28.06-15.56l26.03-25.82c4.31-4.28
      11.28-4.25 15.56.06l42.15 42.49 97.2-96.42c4.31-4.28 11.28-4.25 15.55.06l25.82 26.03c4.28
      4.32 4.26 11.29-.06 15.56z`})),b1=hy;function yy(e){return B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},e),B.createElement("path",{fill:"#292B32",d:"M19.453 7.61H4.547a.406.406 0 01-.422-.423V6.063c0-.21.176-.421.422-.421h14.906c.211 0 .422.21.422.421v1.125c0 .247-.21.422-.422.422zm0 5.624H4.547a.406.406 0 01-.422-.421v-1.126c0-.21.176-.421.422-.421h14.906c.211 0 .422.21.422.421v1.126c0 .246-.21.421-.422.421zm0 5.625H4.547a.406.406 0 01-.422-.422v-1.125c0-.21.176-.421.422-.421h14.906c.211 0 .422.21.422.422v1.125c0 .246-.21.421-.422.421z"}))}var Qs=yy;var vy=n=>{var a=n,{bg:e="#fff",fg:t="#cacaca",children:o}=a,r=M(a,["bg","fg","children"]);return B.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 24 28",fill:"none",vectorEffect:"non-scaling-stroke",xmlns:"http://www.w3.org/2000/svg"},r),B.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.24993 27.8542c-1.158 0-2.099997-.9263-2.099997-2.065V2.21031c0-1.13809.941997-2.064421 2.099997-2.064421H16.4999c.1614 0 .3114.060667.423.172084l6.7506 6.631917c.114.112.1764.26075.1764.41883V25.7892c0 1.1387-.942 2.065-2.1 2.065H2.24993z",fill:e}),B.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.4999.00010681H2.24991C1.00911.00010681-.00009155.99119-.00009155 2.21036V25.7899c0 1.2185 1.00920155 2.2102 2.25000155 2.2102H21.7499c1.2402 0 2.25-.9917 2.25-2.2102V7.36877c0-.196-.0792-.38266-.2196-.5215l-6.75-6.63133c-.141-.1394165-.3312-.21583319-.5304-.21583319zm0 .29162219c.1206 0 .2328.0455.3168.1295l6.75 6.631331c.0864.084.1332.19659.1332.31617V25.7898c0 1.0576-.8748 1.9186-1.95 1.9186H2.24995c-1.0752 0-1.950005-.861-1.950005-1.9186V2.21031c0-1.05758.874805-1.918581 1.950005-1.918581H16.4999z",fill:t}),B.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.9999 7.36861c0-.196-.0792-.38267-.2196-.5215l-6.75-6.631338c-.141-.1394164-.3312-.21583304-.5304-.21583304h-.4878V5.63727c0 1.21858 1.0092 2.21025 2.25 2.21025h5.7378v-.47891z",fill:t}),o)},Q=vy;var xy=o=>{var r=o,{color:e="#FFB400"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M6.75698 23.3835c-.0936.0595-.2088.0951-.3456.1079-.1368.0117-.2736.0304-.4104.0549-.0648.0105-.1278.025-.189.0443-.0612.0198-.1152.0461-.162.0787-.0468.0339-.0834.077-.1104.1313-.027.0548-.0408.1202-.0408.1972 0 .0665.0198.1225.0594.168.0396.0455.087.081.1428.1073.0564.0262.1176.0449.1842.0554.066.0105.1266.0152.1806.0152.0684 0 .1422-.0082.2214-.0257.0792-.0175.1542-.0472.2244-.0892.0702-.042.1284-.0957.1752-.1605.0468-.0647.0702-.144.0702-.2385v-.4463zm.6156.756c0 .0735.0102.126.0294.1569.0198.0321.0588.0473.117.0473h.0642c.0252 0 .054-.0029.0864-.0099v.4147c-.0216.007-.0498.0146-.0834.0233-.0348.0094-.0696.017-.1056.024-.036.007-.072.0116-.108.0157-.036.0035-.0666.0053-.0918.0053-.126 0-.2304-.0245-.3126-.0735-.0834-.049-.1374-.1348-.1626-.2573-.1224.1155-.2724.1989-.4506.252-.1788.0525-.3504.0788-.516.0788-.126 0-.2466-.0164-.3618-.0502-.1152-.0333-.2166-.0823-.3054-.147-.0876-.0642-.1578-.147-.21-.2468-.0522-.0997-.0786-.2158-.0786-.3488 0-.168.0318-.3045.0942-.4095.0636-.105.1458-.1872.2484-.2467s.2184-.1027.3456-.129c.1278-.0262.2568-.046.3864-.0606.1116-.0204.2178-.0356.3186-.0444.1008-.0081.1902-.0233.2676-.0443.0768-.021.1386-.0537.183-.0974.045-.0438.0678-.1091.0678-.1966 0-.077-.0192-.14-.0564-.189-.0384-.049-.0852-.0863-.141-.1126-.0552-.0262-.1176-.0443-.186-.0525-.0678-.0093-.1332-.014-.1938-.014-.1728 0-.3156.0356-.4272.1056-.1116.07-.1746.1785-.189.3255h-.6156c.0108-.175.054-.3202.1296-.4357.0756-.1155.1722-.2083.2892-.2783.1164-.07.249-.119.3966-.147.1476-.028.2988-.042.4536-.042.1368 0 .2718.014.405.042.1332.028.2532.0735.3594.1359.1056.0636.1914.1447.2562.2444.0648.0998.0972.2217.0972.3646v1.3971zM10.6235 24.7433h-.6048v-.378h-.0108c-.07556.1365-.18836.2456-.33776.3278-.1494.0823-.3018.1237-.4566.1237-.3666 0-.6318-.0881-.7962-.2654-.1638-.1768-.2454-.4433-.2454-.8003v-1.722h.615v1.6642c0 .2374.0474.406.141.5034.0936.098.225.147.3942.147.1296 0 .2376-.0186.324-.0571.0864-.0391.1566-.0899.2106-.1552.054-.0648.0924-.1423.1158-.2333.0234-.091.03536-.189.03536-.294v-1.575h.6156v2.7142zM11.8868 23.4149c0 .1155.015.2298.0462.3412.0306.112.0774.2118.1404.2993.063.0875.1434.1575.24.21.0972.0525.2124.0787.3456.0787.1374 0 .255-.028.354-.084.099-.0554.18-.1289.243-.2205.063-.091.1098-.1936.1404-.3068.03-.1137.0462-.2304.0462-.3494 0-.301-.0696-.5355-.2082-.7035-.1386-.168-.327-.252-.564-.252-.1446 0-.2658.0286-.3648.0869-.099.0578-.1806.133-.243.2258-.0636.0927-.108.1977-.135.315-.0276.1172-.0408.2368-.0408.3593zm2.1492 1.3282h-.5832v-.3675h-.0102c-.0834.1575-.204.2701-.3624.339-.1578.0682-.3258.102-.5022.102-.2196 0-.411-.0373-.5748-.1125-.1638-.0753-.3-.178-.4074-.3075-.1086-.1295-.1896-.2829-.2436-.459-.0534-.1768-.0804-.3664-.0804-.57 0-.245.0336-.4567.1026-.6352.0684-.1785.159-.3255.2724-.441.1134-.1155.243-.2007.3888-.2543.1458-.0543.294-.0817.4452-.0817.087 0 .1746.0082.2652.0239.0894.0152.1764.0408.2586.0758.0828.035.1596.08.2298.1336.0702.0543.1284.119.1752.1925h.0114v-1.386h.615v3.7479zM14.8571 24.7433h.615V22.029h-.615v2.7143zm0-3.1815h.615v-.567h-.615v.567zM17.5569 24.344c.1368 0 .2556-.028.3564-.084.1008-.0555.1836-.129.2484-.22.0648-.0915.1122-.1942.1428-.3074.0306-.1137.0462-.2298.0462-.3488 0-.1161-.0156-.2316-.0462-.3465-.0306-.1155-.078-.2182-.1428-.308-.0648-.0887-.1476-.1616-.2484-.2176-.1008-.0554-.2196-.084-.3564-.084-.1374 0-.2556.0286-.3564.084-.1008.056-.1836.1289-.2484.2176-.0648.0898-.1122.1925-.1434.308-.0306.1149-.0456.2304-.0456.3465 0 .119.015.2351.0456.3488.0312.1132.0786.2159.1434.3074.0648.091.1476.1645.2484.22.1008.056.219.084.3564.084zm0 .473c-.2232 0-.4224-.0361-.5964-.1079-.1752-.0717-.3222-.1709-.4428-.2969-.1212-.126-.213-.2759-.2754-.4509-.0636-.1756-.0948-.3681-.0948-.5775 0-.2071.0312-.3973.0948-.5728.0624-.175.1542-.3255.2754-.451.1206-.126.2676-.2251.4428-.2969.174-.0717.3732-.1079.5964-.1079.2232 0 .4218.0362.5964.1079.1746.0718.3222.1709.4428.2969.1212.1255.2124.276.2754.451.063.1755.0948.3657.0948.5728 0 .2094-.0318.4019-.0948.5775-.063.175-.1542.3249-.2754.4509-.1206.126-.2682.2252-.4428.2969-.1746.0718-.3732.1079-.5964.1079zM14.397 16.224c-.723 0-1.203-.294-1.203-.4882 0-.1943.48-.4883 1.203-.4883.723 0 1.203.294 1.203.4883 0 .1942-.48.4882-1.203.4882zm-4.79398 1.2478c-.723 0-1.203-.294-1.203-.4883 0-.1942.48-.4882 1.203-.4882.72298 0 1.20298.294 1.20298.4882 0 .1943-.48.4883-1.20298.4883zm6.48778-6.933c-.0684-.056-.1578-.0787-.2478-.0624l-4.794 1.1194c-.141.0269-.243.147-.243.287v4.2951c-.3156-.1645-.7296-.266-1.20298-.266-1.0278 0-1.803.4609-1.803 1.0716 0 .6113.7752 1.0716 1.803 1.0716 1.02778 0 1.80298-.4603 1.80298-1.0716v-4.8597l4.194-1.0075v3.8139c-.3156-.1651-.7296-.266-1.203-.266-1.0278 0-1.803.4602-1.803 1.0716 0 .6107.7752 1.0715 1.803 1.0715s1.803-.4608 1.803-1.0715v-4.9724c0-.0869-.0402-.1691-.1092-.2246z",clipRule:"evenodd"}))},Qn=xy;var My=o=>{var r=o,{color:e="#5856D6"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,d:"M10.5224 24.0681c0 .0785.0098.1346.0295.1683.0236.0336.0669.0504.1299.0504h.0709c.0276 0 .0591-.0037.0945-.0112v.4431c-.0236.0075-.0551.015-.0945.0225-.0354.0112-.0728.0205-.1122.028-.0394.0075-.0787.0131-.1181.0168-.0394.0038-.0728.0056-.1004.0056-.1378 0-.252-.0261-.3425-.0785-.09057-.0523-.14962-.1439-.17718-.2748-.13386.1234-.29921.2131-.49606.2692-.19291.0561-.37991.0841-.56101.0841-.1378 0-.26968-.0186-.39567-.056-.12598-.0337-.23818-.0842-.3366-.1515-.09449-.071-.17126-.1589-.23032-.2636-.05511-.1084-.08267-.2337-.08267-.3758 0-.1795.03346-.3253.10039-.4375.07087-.1122.16141-.2001.27165-.2636.11417-.0636.24015-.1085.37795-.1346.14173-.03.28346-.0524.42519-.0674.12204-.0224.23818-.0373.34842-.0448.11023-.0112.20669-.0281.28936-.0505.08662-.0224.15354-.0561.20079-.101.05118-.0486.07677-.1196.07677-.2131 0-.0823-.02166-.1496-.06496-.2019-.03937-.0524-.09055-.0916-.15354-.1178-.05906-.0299-.12599-.0486-.20079-.0561-.0748-.0112-.14567-.0168-.21259-.0168-.18898 0-.34449.0374-.46653.1121-.12205.0748-.19094.1907-.20669.3478h-.67322c.01181-.187.05906-.3421.14173-.4655.08268-.1234.18701-.2225.31299-.2973.12992-.0748.27558-.1272.437-.1571.16141-.0299.32677-.0448.49605-.0448.14961 0 .29724.0149.44291.0448.14567.0299.27563.0786.38973.1459.1181.0673.2126.1551.2835.2636.0709.1047.1063.2337.1063.387v1.492zm-.67323-.8077c-.10236.0636-.22834.1028-.37795.1178-.1496.0112-.29921.0299-.44881.0561-.07086.0112-.13976.028-.20669.0505-.06693.0187-.12598.0467-.17716.0841-.05118.0336-.09252.0804-.12402.1402-.02755.0561-.04133.1253-.04133.2075 0 .0711.02165.1309.06496.1795.0433.0486.09448.0879.15354.1178.06299.0262.12992.0449.20078.0561.0748.0112.14173.0168.20079.0168.0748 0 .1555-.0093.24212-.028.08661-.0187.16732-.0505.24212-.0954.07874-.0448.1437-.1009.19488-.1682.05118-.0711.07677-.1571.07677-.258v-.4768zM10.9456 21.8133h.7323l.7736 2.2267h.0118l.7441-2.2267h.6968l-1.0925 2.8998h-.7559l-1.1102-2.8998zM14.3268 20.7083H15v.6058h-.6732v-.6058zm0 1.105H15v2.8998h-.6732v-2.8998zM16.7812 11.6666c-.1125 0-.225.0365-.3375.1094L14.4 13.0521v-1.0938c0-.4739-.45-.875-.975-.875H7.55623c-.525 0-.95625.4011-.95625.875v5.2682c0 .474.43125.8568.95625.8568H13.425c.525 0 .975-.3828.975-.8568v-1.0937l2.0437 1.276c.1125.0729.225.0912.3375.0912.3188 0 .6-.237.6-.5651V12.25c.0188-.3464-.2812-.5834-.6-.5834zM13.8 17.2265c0 .1459-.1875.2735-.375.2735H7.55623c-.1875 0-.35625-.1276-.35625-.2735v-5.2682c0-.1458.16875-.2917.35625-.2917H13.425c.1875 0 .375.1459.375.2917v5.2682zm3-.2916l-.0375-.0183L14.4 15.4401v-1.6953l2.4-1.4948v4.6849z"}))},Ws=My;var by=o=>{var r=o,{color:e="#00BED4"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M9.6869 22.9368c-.0252-.1674-.0942-.2946-.2082-.3803-.1128-.0858-.2556-.1289-.429-.1289-.0792 0-.1638.0134-.2538.0396-.09.0263-.1722.0753-.2478.147-.0762.0718-.1392.1715-.1896.2993-.0504.1277-.0756.2952-.0756.5011 0 .1126.0138.224.0408.3366.0264.112.0702.2117.129.2986.06.0881.1362.1587.2298.2124.0936.0548.207.0816.3408.0816.1794 0 .3276-.0542.4452-.1621.1164-.1091.1896-.2608.2184-.4568h.6156c-.0576.3529-.1956.6236-.4128.8108-.2178.1873-.507.2812-.8664.2812-.2202 0-.4134-.0362-.5808-.1079-.168-.0718-.309-.1698-.4242-.294-.1152-.1243-.2022-.2724-.2622-.4439-.0588-.1715-.0888-.357-.0888-.5565 0-.2024.0288-.3932.0864-.5717.0576-.1791.144-.3337.2592-.4649.1152-.1313.2586-.2345.4296-.3098.171-.0752.3714-.1131.6018-.1131.162 0 .3162.0204.4614.0606.1458.0403.2754.101.3894.1809.1128.0805.2058.1826.2784.3051.0714.1225.1146.2677.129.4351h-.6156zM11.4043 23.8717c.0174.175.0864.2975.2052.3675.1188.07.2604.105.4266.105.057 0 .123-.0041.1968-.0134.0738-.0088.1434-.0251.2082-.0496.0648-.0245.1176-.0601.159-.1073.042-.0473.0606-.1097.057-.1867-.0036-.077-.0324-.14-.087-.189-.0534-.049-.123-.0881-.207-.1178-.0852-.0304-.1812-.0555-.2892-.0765-.108-.021-.2178-.0437-.33-.0682-.1146-.0245-.2256-.0543-.3312-.0893-.1068-.035-.2022-.0822-.2868-.1417-.084-.0595-.1518-.1353-.2022-.2281-.051-.0927-.0756-.2077-.0756-.3442 0-.147.0366-.2706.1104-.3704.0738-.0997.1674-.1796.2814-.2415.1128-.0606.2388-.1038.3774-.1283.1386-.0245.2712-.0368.3972-.0368.144 0 .2814.0146.4128.0444.1314.0303.2502.0781.3564.1446.1068.0665.1944.1535.2646.2596.0702.1074.1146.2357.1326.3862h-.6426c-.0288-.1435-.0966-.2398-.2022-.2888-.1068-.049-.228-.074-.3654-.074-.0426 0-.0942.004-.1536.011-.0594.007-.1152.0199-.1674.0391-.0522.0199-.096.0473-.1326.0846-.0354.0362-.0534.0846-.0534.1441 0 .0735.0264.133.078.1785.0522.0455.1212.0828.2052.1126.0846.0303.1812.0554.2892.0764.1074.021.2196.0437.3342.0682.1122.0245.2214.0543.33.0893.108.035.204.0822.2892.1417.084.0595.1524.1348.2046.2258.0522.091.0786.203.0786.3354 0 .1616-.0378.2981-.1134.4101-.0756.112-.174.203-.294.273-.1212.07-.255.1207-.4026.1522s-.294.0473-.4374.0473c-.1764 0-.3396-.0193-.4884-.0578-.1494-.0385-.2796-.0974-.3894-.1755-.1092-.0794-.1962-.1774-.2586-.294-.0636-.1173-.0972-.2567-.1002-.4177h.6156zM13.6021 22.0288h.669l.708 2.0843h.0108l.6798-2.0843h.6378l-.999 2.7143h-.6918l-1.0146-2.7143zM10.2 17.472h6v-1.1667h-6v1.1667zm-2.39999 0h1.8v-1.1667h-1.8v1.1667zm0-5.25h1.8v-1.1667h-1.8v1.1667zm2.39999 0h6v-1.1667h-6v1.1667zm0 1.75h6v-1.1667h-6v1.1667zm0 1.75h6v-1.1667h-6v1.1667zm-2.39999-1.75h1.8v-1.1667h-1.8v1.1667zm0 1.75h1.8v-1.1667h-1.8v1.1667zM16.5 10.472H7.50001c-.1656 0-.3.1307-.3.2917v7c0 .1616.1344.2916.3.2916H16.5c.1662 0 .3-.13.3-.2916v-7c0-.161-.1338-.2917-.3-.2917z",clipRule:"evenodd"}))},Ks=by;var Iy=o=>{var r=o,{color:e="#999"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M16.4998 11.0549H7.49977c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h9.00003c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM16.4998 12.8049H7.49977c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h9.00003c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM16.4998 14.5549H7.49977c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h9.00003c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM13.4998 16.3049H7.49977c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h6.00003c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM13.4998 18.0549H7.49977c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h6.00003c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916z",clipRule:"evenodd"}))},Js=Iy;var wy=o=>{var r=o,{color:e="#0E86FE"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M7.84262 23.4149c0 .1155.015.2298.0462.3412.03.112.0774.2118.1404.2993.063.0875.1428.1575.24.21.0972.0525.2124.0787.3456.0787.1368 0 .2544-.028.3534-.084.0996-.0554.1806-.1289.2436-.2205.063-.091.1098-.1936.1404-.3068.03-.1138.0456-.2304.0456-.3494 0-.301-.069-.5355-.2076-.7035-.1386-.168-.327-.252-.5646-.252-.144 0-.2652.0286-.3642.0869-.099.0577-.1806.133-.2436.2257-.063.0928-.1074.1978-.1344.315-.0276.1173-.0408.2369-.0408.3594zm2.1492 1.3282h-.5832v-.3675h-.0108c-.0828.1575-.2034.2701-.3618.3389-.1584.0683-.3258.1021-.5022.1021-.2196 0-.411-.0373-.5748-.1126-.1644-.0752-.3-.1779-.408-.3074-.108-.1295-.189-.2829-.243-.4591-.054-.1767-.081-.3663-.081-.5699 0-.245.0342-.4567.1026-.6352.0684-.1785.1596-.3255.273-.441.1134-.1155.243-.2007.3888-.2544.1458-.0542.294-.0816.4452-.0816.0864 0 .1746.0081.2646.0239.09.0152.1764.0408.2592.0758.0828.035.1596.0799.2298.1336.0702.0543.1284.119.1752.1925h.0108v-1.386h.6156v3.7479zM12.0763 24.344c.1368 0 .2556-.028.3564-.084.1008-.0555.1836-.129.2484-.22.0648-.0915.1128-.1942.1434-.3074.03-.1137.0456-.2298.0456-.3488 0-.1161-.0156-.2316-.0456-.3465-.0306-.1155-.0786-.2182-.1434-.308-.0648-.0887-.1476-.1616-.2484-.2176-.1008-.0554-.2196-.084-.3564-.084s-.2556.0286-.3564.084c-.1008.056-.1836.1289-.2484.2176-.0648.0898-.1122.1925-.1434.308-.03.1149-.0456.2304-.0456.3465 0 .119.0156.2351.0456.3488.0312.1132.0786.2159.1434.3074.0648.091.1476.1645.2484.22.1008.056.2196.084.3564.084zm0 .473c-.2232 0-.4224-.0361-.5964-.1079-.1752-.0717-.3222-.1709-.4428-.2969-.1212-.126-.2124-.2759-.2754-.4509-.063-.1756-.0948-.3681-.0948-.5775 0-.2071.0318-.3973.0948-.5728.063-.175.1542-.3255.2754-.451.1206-.126.2676-.2251.4428-.2969.174-.0717.3732-.1079.5964-.1079.2232 0 .4224.0362.597.1079.1746.0718.3222.1709.4422.2969.1212.1255.2124.276.2754.451.063.1755.0948.3657.0948.5728 0 .2094-.0318.4019-.0948.5775-.063.175-.1542.3249-.2754.4509-.12.126-.2676.2252-.4422.2969-.1746.0718-.3738.1079-.597.1079zM16.0182 22.9369c-.0252-.1674-.0948-.2946-.2082-.3803-.1134-.0858-.2562-.129-.429-.129-.0792 0-.1638.0135-.2538.0397-.09.0263-.1728.0753-.2484.147-.0756.0718-.1386.1715-.189.2993-.0504.1277-.0756.2951-.0756.501 0 .1126.0132.224.0408.3366.0264.112.0696.2118.129.2987.0594.0881.1362.1587.2298.2123.0936.0549.207.0817.3402.0817.18 0 .3282-.0543.4452-.1622.117-.1091.1902-.2607.219-.4567h.6156c-.0576.3529-.1956.6236-.4134.8108-.2178.1873-.5064.2812-.8664.2812-.2196 0-.4128-.0362-.5808-.1079-.1674-.0718-.3084-.1698-.4236-.294-.1152-.1243-.2028-.2725-.2622-.444-.0594-.1715-.0888-.357-.0888-.5565 0-.2024.0288-.3931.0864-.5716.0576-.1791.144-.3337.2592-.4649.1152-.1313.258-.2345.429-.3098.171-.0752.372-.1132.6024-.1132.162 0 .3162.0205.4614.0607.1458.0403.2754.1009.3888.1808.1134.0805.2064.1826.2784.3051.072.1225.1152.2678.1296.4352h-.6156zM16.5001 11.0549H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h8.99997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM14.7001 12.8049H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h7.19997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM16.5001 14.5549H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h8.99997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM14.7001 16.3049H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h7.19997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM16.5001 18.0549H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h8.99997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916z",clipRule:"evenodd"}))},Xs=wy;var Py=o=>{var r=o,{color:e="#5C6070"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,d:"M16.2375 15.235l-.6-.3463c0-.1276.0187-.3281.0187-.4557 0-.1094-.0187-.3099-.0187-.4375l.6-.3464c.1875-.0911.2625-.3099.2062-.4922-.2062-.6927-.5812-1.3125-1.0687-1.8229-.15-.1458-.375-.1823-.5625-.0729l-.6.3463c-.2063-.164-.5625-.3645-.8063-.4557v-.6745c0-.2187-.1312-.3828-.3375-.4375-.7125-.16403-1.4437-.16403-2.1562 0-.2063.0547-.3375.2188-.3375.4375v.6745c-.2438.0912-.6.2917-.80625.4557l-.6-.3463c-.1875-.1094-.4125-.0729-.5625.0729-.4875.5104-.8625 1.1302-1.06875 1.8229-.05625.1823.01875.4011.20625.4922l.6.3464c0 .1276-.01875.3281-.01875.4375 0 .1276.01875.3281.01875.4557l-.6.3463c-.1875.0912-.2625.3099-.20625.4922.20625.6927.58125 1.3125 1.06875 1.823.15.1458.375.1822.5625.0729l.6-.3464c.20625.1641.56245.3646.80625.4557v.6745c0 .2188.1312.3828.3375.4375.7125.1641 1.4437.1641 2.1562 0 .2063-.0547.3375-.2187.3375-.4375v-.6745c.2438-.0911.6-.2916.8063-.4557l.6.3464c.1875.1093.4125.0729.5625-.0729.4875-.5105.8625-1.1303 1.0687-1.823.0563-.1823-.0187-.401-.2062-.4922zm-1.2188 1.823l-.8812-.4922c-.5063.4375-.675.5286-1.3313.7656v.9661c-.225.0547-.5812.0912-.8062.0912-.2438 0-.6-.0365-.825-.0912v-.9661c-.6375-.2187-.825-.3281-1.33125-.7656l-.88125.4922c-.35625-.4011-.6375-.875-.825-1.3855l.88125-.4739c-.13125-.6563-.13125-.8568 0-1.513l-.88125-.474c.1875-.5104.46875-.9844.825-1.3854l.88125.4922c.50625-.4375.69375-.5469 1.33125-.7656v-.9662c.225-.0547.5812-.0911.825-.0911.225 0 .5812.0364.8062.0911v.9662c.6375.2187.825.3281 1.3313.7656l.8812-.4922c.3563.401.6375.875.825 1.3854l-.8812.474c.1312.6562.1312.8567 0 1.513l.8812.4739c-.1875.5105-.4687.9844-.825 1.3855zM12 12.683c-.9938 0-1.8.802-1.8 1.75 0 .9661.8062 1.75 1.8 1.75.975 0 1.8-.7839 1.8-1.75 0-.948-.825-1.75-1.8-1.75zm0 2.9166c-.675 0-1.2-.5104-1.2-1.1666 0-.6381.525-1.1667 1.2-1.1667.6562 0 1.2.5286 1.2 1.1667 0 .6562-.5438 1.1666-1.2 1.1666zM9.35869 22.837c-.00757-.0994-.0303-.1951-.06817-.2872-.03408-.092-.08332-.1712-.1477-.2375-.06059-.0699-.13633-.1251-.22723-.1656-.0871-.0442-.18557-.0663-.29539-.0663-.11362 0-.21777.0202-.31244.0607-.0909.0368-.17043.0902-.2386.1602-.06438.0663-.1174.1454-.15906.2375-.03787.092-.0587.1914-.06248.2982h1.51107zm-1.51107.4142c0 .1105.01514.2173.04544.3204.03409.1031.08332.1933.1477.2706.06438.0773.14581.1399.24427.1878.09847.0442.21587.0663.35221.0663.18936 0 .34084-.0387.45446-.116.1174-.081.2045-.2007.26131-.359h.61352c-.03408.1546-.09279.2927-.1761.4142-.08332.1215-.18368.2246-.30108.3093-.1174.081-.24995.1417-.39765.1822-.14392.0442-.2954.0663-.45446.0663-.23102 0-.43553-.0368-.61352-.1104-.178-.0737-.32948-.1768-.45446-.3093-.12119-.1326-.21397-.2909-.27836-.475-.06059-.1841-.09089-.3866-.09089-.6075 0-.2025.03219-.394.09657-.5744.06817-.1841.16285-.3443.28404-.4805.12498-.1399.27457-.2504.44878-.3314.17421-.081.37114-.1215.5908-.1215.23101 0 .43741.0479.6192.1436.18557.0921.33895.2154.46014.37.12118.1547.20829.3333.26131.5358.05685.1988.07195.405.04545.6185H7.84762zM11.2882 23.0138l-1.0168-1.3532h.7839l.6135.8782.642-.8782h.7498l-.9998 1.32 1.1248 1.5354h-.7783l-.7441-1.0549-.7215 1.0549h-.7612l1.1077-1.5022zM15.5664 22.837c-.0075-.0994-.0303-.1951-.0681-.2872-.0341-.092-.0833-.1712-.1477-.2375-.0606-.0699-.1364-.1251-.2273-.1656-.0871-.0442-.1855-.0663-.2953-.0663-.1137 0-.2178.0202-.3125.0607-.0909.0368-.1704.0902-.2386.1602-.0644.0663-.1174.1454-.159.2375-.0379.092-.0587.1914-.0625.2982h1.511zm-1.511.4142c0 .1105.0151.2173.0454.3204.0341.1031.0833.1933.1477.2706.0644.0773.1458.1399.2443.1878.0985.0442.2159.0663.3522.0663.1894 0 .3408-.0387.4545-.116.1174-.081.2045-.2007.2613-.359h.6135c-.0341.1546-.0928.2927-.1761.4142-.0833.1215-.1837.2246-.3011.3093-.1174.081-.2499.1417-.3976.1822-.144.0442-.2954.0663-.4545.0663-.231 0-.4355-.0368-.6135-.1104-.178-.0737-.3295-.1768-.4545-.3093-.1212-.1326-.214-.2909-.2783-.475-.0606-.1841-.0909-.3866-.0909-.6075 0-.2025.0322-.394.0965-.5744.0682-.1841.1629-.3443.2841-.4805.125-.1399.2745-.2504.4488-.3314.1742-.081.3711-.1215.5908-.1215.231 0 .4374.0479.6192.1436.1855.0921.3389.2154.4601.37.1212.1547.2083.3333.2613.5358.0568.1988.072.405.0454.6185h-2.1586z"}))},Rs=Py;var Sy=o=>{var r=o,{color:e="#1E3868"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M6.58255 20.9949h.6156v1.3913h.0108c.0756-.1225.1878-.2252.3372-.3074.1494-.0823.3162-.1237.4998-.1237.306 0 .5478.077.7242.2316.1758.154.264.3844.264.6924v1.8643h-.615v-1.7062c-.0078-.2135-.0546-.3687-.141-.4649-.0858-.0963-.2214-.1447-.405-.1447-.1038 0-.198.0187-.2802.0554-.0834.0368-.1536.0875-.2112.1528-.0576.0642-.1026.1406-.135.2275-.0324.0881-.0486.1809-.0486.2789v1.6012h-.6156v-3.7485zM9.53622 22.0289h.46438v-.8138h.6162v.8138h.5562v.4462h-.5562v1.449c0 .063.0024.1173.0078.1628s.018.084.0378.1161c.0198.0309.0492.0542.0888.0705.0402.0158.0942.0234.1626.0234.0426 0 .0858-.0006.1296-.0024.0426-.0017.0858-.0081.1296-.018v.462c-.069.0064-.135.0134-.1998.0204-.0654.007-.1314.0105-.1998.0105-.1626 0-.2928-.0146-.3918-.0449-.099-.0298-.1764-.0735-.2328-.1313-.0552-.0572-.093-.1301-.1128-.2176-.0198-.0875-.0318-.1872-.0354-.2992v-1.6013h-.46438v-.4462zM11.7505 22.0289h.5832v.378h.0162c.0462-.0665.0972-.1278.1512-.1838.054-.056.114-.1032.1806-.1417.0666-.0385.1434-.0688.2298-.0916s.1854-.0344.297-.0344c.1692 0 .327.0373.4722.1102.1458.0735.2496.1873.3102.3413.1044-.14.225-.2503.3624-.3308.1362-.0805.3078-.1207.5124-.1207.2958 0 .525.07.6888.21.1638.1406.246.3745.246.7035v1.8742h-.6156v-1.5849c0-.1091-.0036-.2082-.0108-.2969-.0078-.0898-.0282-.1662-.0618-.2316-.0348-.0641-.0858-.1143-.1542-.1493-.069-.035-.162-.0525-.2808-.0525-.2094 0-.3606.063-.4536.189-.0936.126-.1404.3045-.1404.5355v1.5907h-.6162v-1.743c0-.189-.0348-.3313-.1044-.4275-.0708-.0963-.1998-.1447-.3864-.1447-.0792 0-.156.0157-.2298.0472s-.1386.077-.1944.1365c-.0558.0601-.1008.1336-.135.2205-.0342.0875-.0516.1873-.0516.2993v1.6117h-.615v-2.7142zM16.5996 24.7433h.615v-3.7485h-.615v3.7485zM14.7001 16.5972c-.069 0-.1386-.0234-.195-.0706-.126-.105-.141-.2888-.033-.4107l1.6332-1.8521-1.6332-1.852c-.108-.1225-.093-.3063.033-.4113.1248-.1044.3144-.0904.423.0321l1.8 2.0417c.096.1085.096.27 0 .3791l-1.8 2.0417c-.06.0671-.1434.1021-.228.1021zM9.30013 16.5972c-.0846 0-.168-.035-.228-.1021l-1.8-2.0417c-.096-.1091-.096-.2706 0-.3791l1.8-2.0417c.1092-.1225.2988-.1365.423-.0321.126.105.141.2888.033.4113l-1.6332 1.852 1.6332 1.8521c.108.1219.093.3057-.033.4107-.0564.0472-.126.0706-.195.0706zM10.2001 18.0549c-.045 0-.0906-.0099-.1344-.0309-.14818-.0717-.20758-.2473-.13378-.3908l3.59998-7c.075-.1447.2538-.2013.4026-.1307.1482.0723.2076.2473.1338.392l-3.6 7c-.0528.1015-.1584.1604-.2682.1604z",clipRule:"evenodd"}))},e2=Sy;var Ty=o=>{var r=o,{color:e="#999"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M7.8002 16.0901c.0078-.007.0168-.0105.024-.0181l2.0952-2.3012 3.3666 3.7007H7.8002v-1.3814zm6.2862 1.3814l-3.9426-4.3342c-.0564-.0624-.138-.098-.2244-.098-.0858 0-.1674.0356-.225.098l-1.8942 2.0819v-4.1644h8.4v6.4167h-2.1138zm2.4138-7h-9c-.1656 0-.3.1306-.3.2916v7c0 .1616.1344.2917.3.2917h9c.1656 0 .3-.1301.3-.2917v-7c0-.161-.1344-.2916-.3-.2916z",clipRule:"evenodd"}),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M13.7527 13.95c-.3306 0-.6-.2614-.6-.5834s.2694-.5833.6-.5833c.3312 0 .6.2613.6.5833 0 .322-.2688.5834-.6.5834zm0-1.75c-.6618 0-1.2.5232-1.2 1.1666 0 .6434.5382 1.1667 1.2 1.1667.6624 0 1.2-.5233 1.2-1.1667 0-.6434-.5376-1.1666-1.2-1.1666z",clipRule:"evenodd"}),B.createElement("path",{fill:e,d:"M7.79999 20.4167h.60366v.5484h-.60366v-.5484zm0 1.0003h.60366v2.6253h-.60366V21.417zM9.06137 21.417h.57189v.3656h.01589c.04589-.0643.09531-.1235.14826-.1777.05296-.0542.1112-.0999.17475-.1371.06704-.0372.14294-.066.22774-.0863.0847-.0237.1818-.0356.2912-.0356.1659 0 .3195.0356.4607.1067.1447.0711.2471.1811.3071.33.1024-.1354.2206-.242.3548-.3199.1341-.0778.3018-.1168.503-.1168.2895 0 .5137.0677.6725.2031.1624.1355.2436.3623.2436.6805v1.8128h-.6036v-1.5335c0-.105-.0036-.1997-.0106-.2844-.0071-.088-.0283-.1625-.0636-.2234-.0318-.0643-.0812-.1134-.1482-.1473-.0671-.0338-.1589-.0508-.2754-.0508-.2048 0-.353.061-.4448.1829-.0918.1218-.1377.2945-.1377.5179v1.5386h-.6036v-1.6859c0-.1828-.0353-.3199-.1059-.4113-.0671-.0948-.1924-.1422-.376-.1422-.0777 0-.1536.0153-.2277.0457-.0706.0305-.13415.0745-.19063.1321-.05295.0575-.09708.1286-.13238.2132-.03177.0847-.04766.1812-.04766.2895v1.5589h-.60366V21.417zM16.2 23.9052c0 .3961-.1165.6906-.3495.8836-.2295.1963-.5613.2945-.9955.2945-.1377 0-.2771-.0135-.4183-.0406-.1377-.0271-.2648-.0728-.3813-.1371-.113-.0643-.2083-.149-.2859-.2539-.0777-.105-.1236-.2336-.1377-.3859h.6037c.0176.0812.0476.1472.09.198.0423.0508.0918.0897.1482.1168.0601.0305.1254.0491.196.0559.0706.0101.1447.0152.2224.0152.2435 0 .4218-.0576.5348-.1727.1129-.1151.1694-.2809.1694-.4976v-.4012h-.0106c-.0847.1456-.2012.259-.3494.3403-.1448.0812-.3019.1218-.4713.1218-.2189 0-.406-.0355-.5613-.1066-.1518-.0745-.2789-.1743-.3813-.2996-.0988-.1286-.1712-.2759-.2171-.4418-.0459-.1659-.0688-.3436-.0688-.5332 0-.176.0282-.3436.0847-.5027.0565-.1591.1377-.2979.2436-.4164.1059-.1219.2347-.2183.3865-.2894.1554-.0711.3301-.1067.5243-.1067.1729 0 .3318.0356.4765.1067.1448.0677.256.176.3336.325h.0106v-.3606H16.2v2.4882zm-1.3397-.3199c.1341 0 .2471-.0254.3389-.0762.0953-.0541.1712-.1235.2277-.2082.06-.088.1024-.1861.1271-.2945.0282-.1117.0423-.2234.0423-.3351 0-.1117-.0141-.2201-.0423-.325-.0283-.105-.0724-.1981-.1324-.2793-.0565-.0812-.1324-.1456-.2277-.193-.0918-.0474-.203-.0711-.3336-.0711-.1342 0-.2471.0271-.3389.0813-.0918.0542-.1659.1252-.2224.2133-.0565.0846-.0971.1828-.1218.2945-.0247.1083-.0371.2167-.0371.325 0 .1083.0142.2149.0424.3199.0282.1016.0706.193.1271.2742.06.0813.1341.1473.2224.198.0918.0508.2012.0762.3283.0762z"}))},Zr=Ty;var Ny=o=>{var r=o,{color:e="#5856D6"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,d:"M6.60001 21.9499h.60975v.3853h.01694c.04893-.0677.10163-.1302.15809-.1873.05646-.057.11856-.1052.18631-.1445.07152-.0392.15244-.0695.24278-.0909.09033-.025.19384-.0375.31052-.0375.17691 0 .34064.0375.49119.1124.15433.0749.26348.1909.32747.3478.10915-.1427.23524-.2551.37827-.3371.14303-.0821.32182-.1231.53636-.1231.30861 0 .54761.0714.71701.2141.1732.1427.2597.3817.2597.7171v1.9105h-.6436v-1.6162c0-.1106-.0038-.2105-.0113-.2997-.0075-.0927-.0301-.1712-.0677-.2354-.0339-.0678-.0866-.1196-.15813-.1552-.07151-.0357-.16937-.0535-.29358-.0535-.21831 0-.3764.0642-.47426.1926-.09786.1285-.14679.3104-.14679.5459v1.6215H8.3954V22.94c0-.1927-.03764-.3372-.11291-.4335-.07152-.0999-.20514-.1498-.40086-.1498-.08281 0-.16373.016-.24278.0481-.07528.0321-.14303.0785-.20325.1392-.05646.0606-.10351.1355-.14115.2247-.03387.0892-.05081.1909-.05081.3051v1.6429h-.64363v-2.7668zM12.8507 24.7917c-.2334 0-.4423-.0357-.6267-.1071-.1807-.0749-.335-.1766-.463-.305-.1242-.1285-.2202-.2819-.2879-.4603-.064-.1783-.096-.3746-.096-.5886 0-.2105.032-.405.096-.5834.0677-.1784.1637-.3318.2879-.4602.128-.1285.2823-.2284.463-.2997.1844-.0749.3933-.1124.6267-.1124.2333 0 .4404.0375.621.1124.1845.0713.3388.1712.463.2997.128.1284.224.2818.2879.4602.0678.1784.1017.3729.1017.5834 0 .214-.0339.4103-.1017.5886-.0639.1784-.1599.3318-.2879.4603-.1242.1284-.2785.2301-.463.305-.1806.0714-.3877.1071-.621.1071zm0-.4817c.143 0 .2672-.0285.3726-.0856s.192-.132.2597-.2248c.0678-.0927.1167-.1962.1468-.3104.0339-.1177.0508-.2372.0508-.3585 0-.1178-.0169-.2355-.0508-.3533-.0301-.1177-.079-.2212-.1468-.3104-.0677-.0927-.1543-.1676-.2597-.2247-.1054-.0571-.2296-.0856-.3726-.0856s-.2673.0285-.3726.0856c-.1054.0571-.192.132-.2598.2247-.0677.0892-.1185.1927-.1524.3104-.0301.1178-.0452.2355-.0452.3533 0 .1213.0151.2408.0452.3585.0339.1142.0847.2177.1524.3104.0678.0928.1544.1677.2598.2248.1053.0571.2296.0856.3726.0856zM14.5714 21.9499h.7001l.7396 2.1246h.0113l.7114-2.1246H17.4l-1.0445 2.7668h-.7227l-1.0614-2.7668zM16.7813 11.6666c-.1125 0-.225.0365-.3375.1094L14.4 13.0521v-1.0938c0-.4739-.45-.875-.975-.875H7.55626c-.525 0-.95625.4011-.95625.875v5.2682c0 .474.43125.8568.95625.8568H13.425c.525 0 .975-.3828.975-.8568v-1.0937l2.0438 1.276c.1125.0729.225.0912.3375.0912.3187 0 .6-.237.6-.5651V12.25c.0187-.3464-.2813-.5834-.6-.5834zM13.8 17.2265c0 .1459-.1875.2735-.375.2735H7.55626c-.1875 0-.35625-.1276-.35625-.2735v-5.2682c0-.1458.16875-.2917.35625-.2917H13.425c.1875 0 .375.1459.375.2917v5.2682zm3-.2916l-.0375-.0183L14.4 15.4401v-1.6953l2.4-1.4948v4.6849z"}))},t2=Ny;var Ey=o=>{var r=o,{color:e="#FFB400"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M6.59998 22.2436h.60542v.3955h.01618c.04853-.0696.1008-.1337.1568-.1923.056-.0586.11822-.108.18791-.1483.06906-.0403.14809-.072.23831-.0958.08898-.0238.19164-.036.308-.036.17484 0 .33849.039.48969.1153.1512.0769.25822.1959.32169.3571.10826-.1465.23333-.2619.3752-.3461.14186-.0842.31982-.1263.532-.1263.30672 0 .54382.0732.71432.2197.1692.1471.2545.3918.2545.736v1.9609h-.6378v-1.6582c0-.1141-.0044-.2179-.0118-.3106-.0075-.094-.0293-.174-.0641-.2423-.0355-.0671-.08899-.1196-.1593-.1563-.07156-.0366-.16862-.0549-.29182-.0549-.21654 0-.37334.0659-.4704.1978-.09707.1318-.14498.3185-.14498.5602v1.6643h-.63902v-1.8236c0-.1977-.03609-.3466-.10889-.4473-.07343-.1007-.20658-.1514-.40071-.1514-.08214 0-.16178.0165-.23769.0495-.07654.0329-.14374.0805-.2016.1428-.05849.0628-.10454.1397-.14063.2307-.03484.0915-.05288.1959-.05288.3131v1.6862h-.6384v-2.8397zM13.732 23.49c0-.1131-.0169-.223-.0527-.3296-.0352-.1067-.0879-.2009-.1576-.2839-.071-.0819-.1582-.1481-.2643-.1987-.1055-.0501-.2266-.0749-.3633-.0749-.2812 0-.4928.0808-.6354.2424-.1426.1621-.2142.3765-.2142.6447 0 .1261.0189.2429.056.3512.0371.1088.0931.2014.1667.279.0742.0776.1634.139.2669.1842.1028.0453.2233.0679.36.0679.1523 0 .2819-.0259.3874-.0776.1054-.0517.192-.119.2604-.2014.0683-.0819.1172-.1756.1465-.2806.0293-.1056.0436-.2128.0436-.3227zM11.4 22.2345h.6334v.3393h.0111c.0944-.1454.2246-.2494.3932-.3124.168-.063.349-.0948.5449-.0948.2377 0 .446.0345.6237.104.1778.0694.3256.1653.4421.2865.1172.1207.2057.2623.2643.4239.058.1616.0873.3345.0873.5187 0 .1681-.0267.3313-.0788.4896-.0527.1584-.1328.2979-.2402.4191-.1075.1217-.2435.2181-.4076.2908-.1641.0733-.3574.1094-.5794.1094-.0983 0-.196-.007-.2936-.0221-.0977-.014-.1915-.0377-.2806-.07-.0905-.0323-.1732-.0733-.2494-.1234-.0762-.0506-.14-.1093-.1907-.1772h-.0118v1.2507H11.4v-3.4321zM15.957 22.7047c.0907.0037.1814-.0037.2721-.0224.0907-.0181.1716-.0511.2429-.0979.0713-.0474.1285-.1116.1722-.1938.0437-.0823.0659-.1833.0659-.303 0-.1683-.0492-.3029-.1485-.4039-.0988-.101-.2256-.1515-.3811-.1515-.0972 0-.1814.0225-.2526.068-.0718.0442-.1307.1047-.1776.182-.047.0767-.0815.1621-.1042.2581-.0227.0953-.0324.1932-.0292.2942h-.5538c.0059-.1902.0372-.3678.0923-.5299.0551-.1626.1306-.3041.2262-.4238.095-.1191.2111-.2132.3471-.2805.136-.0673.2899-.1004.4615-.1004.1328 0 .2629.0219.3908.0667.1285.0449.243.1104.3455.1964.1015.086.1836.1957.2451.3285.0615.1327.0923.2848.0923.4569 0 .1988-.0389.3714-.1166.5186-.0777.1483-.1992.2555-.3644.3228v.0112c.1944.0449.3455.1559.454.3341.1085.1777.163.3934.163.6483 0 .1864-.0323.354-.0971.5011-.0648.1484-.1523.2737-.2624.3765-.1101.1029-.238.182-.3838.2387-.1457.0555-.2996.0836-.4615.0836-.1976 0-.3698-.0324-.5177-.0985-.1474-.0648-.2704-.1577-.3687-.2774-.0993-.1197-.1743-.2636-.2262-.4313-.0518-.1689-.0799-.3559-.0826-.5616h.5539c-.0065.2393.0442.4388.1528.5977.1085.159.2715.2381.4885.2381.1846 0 .339-.061.4642-.182.1242-.1215.1868-.2948.1868-.5192 0-.1533-.0259-.2742-.0777-.3646-.0519-.0898-.1199-.1577-.2041-.2045-.0842-.0467-.1792-.076-.2839-.0872-.1058-.0106-.2133-.0144-.3234-.0106v-.4775zM14.397 16.2524c-.723 0-1.203-.294-1.203-.4882 0-.1943.48-.4883 1.203-.4883.723 0 1.203.294 1.203.4883 0 .1942-.48.4882-1.203.4882zM9.60299 17.5c-.723 0-1.203-.2939-1.203-.4882 0-.1942.48-.4882 1.203-.4882.72301 0 1.20301.294 1.20301.4882 0 .1943-.48.4882-1.20301.4882zm6.48781-6.9324c-.0684-.056-.1578-.0788-.2478-.0624l-4.794 1.1193c-.141.0268-.243.147-.243.287v4.2948c-.3156-.1645-.7296-.266-1.20301-.266-1.0278 0-1.803.4608-1.803 1.0715 0 .6113.7752 1.0715 1.803 1.0715 1.02781 0 1.80301-.4602 1.80301-1.0715v-4.8594L15.6 11.145v3.8136c-.3156-.165-.7296-.266-1.203-.266-1.0278 0-1.803.4603-1.803 1.0716 0 .6107.7752 1.0715 1.803 1.0715s1.803-.4608 1.803-1.0715v-4.972c0-.087-.0402-.1692-.1092-.2246z",clipRule:"evenodd"}))},o2=Ey;var ky=o=>{var r=o,{color:e="#5856D6"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,d:"M6.60001 21.6977h.60058v.3893h.01668c.0482-.0685.1001-.1316.15571-.1893.05561-.0576.11678-.1063.18351-.1459.07044-.0397.15015-.0703.23913-.0919.08897-.0253.19092-.0379.30585-.0379.17424 0 .33551.0379.4838.1135.152.0757.25952.1929.32254.3515.10751-.1442.23171-.2577.37259-.3406.14087-.0829.31697-.1244.52829-.1244.30401 0 .53941.0721.70621.2163.1706.1441.2558.3856.2558.7244v1.9302h-.6339v-1.6328c0-.1117-.0037-.2127-.0111-.3028-.0074-.0937-.0297-.173-.0668-.2378-.0333-.0685-.08524-.1208-.15567-.1568-.07044-.0361-.16683-.0541-.28917-.0541-.21503 0-.37074.0649-.46713.1946-.09639.1298-.14458.3136-.14458.5515v1.6382H8.3684v-1.795c0-.1946-.03708-.3406-.11122-.4379-.07044-.1009-.20205-.1514-.39483-.1514-.08156 0-.16127.0162-.23912.0487-.07415.0324-.14088.0793-.2002.1405-.05561.0613-.10195.137-.13902.2271-.03337.0901-.05005.1928-.05005.3082v1.6598h-.63395v-2.7952zM11.4554 21.6977h.6006v.3785h.0111c.089-.1622.2132-.2776.3726-.3461.1594-.072.3318-.1081.5172-.1081.2261 0 .4226.0397.5894.119.1706.0756.3114.182.4227.3189.1112.1334.1946.2902.2502.4704.0556.1802.0834.3731.0834.5785 0 .1874-.0259.3694-.0778.5461-.0482.1766-.1242.3334-.228.4703-.1001.1334-.228.2415-.3838.3244-.1557.0793-.3392.119-.5505.119-.0927 0-.1854-.0091-.278-.0271-.0927-.0144-.1817-.0396-.267-.0757-.0852-.036-.1649-.0811-.2391-.1351-.0704-.0577-.1297-.1244-.1779-.2001h-.0112v1.3949h-.6339v-3.8278zm2.2133 1.4003c0-.1262-.0167-.2487-.0501-.3677-.0334-.1189-.0834-.2234-.1501-.3135-.0668-.0937-.1502-.1676-.2503-.2217-.1001-.0577-.215-.0865-.3448-.0865-.2669 0-.4689.0901-.6061.2703-.1335.1802-.2002.4199-.2002.7191 0 .1406.0167.2721.05.3947.0371.1189.0909.2216.1613.3081.0705.0865.1539.155.2503.2055.1001.0504.215.0757.3447.0757.1446 0 .267-.0289.3671-.0865.1001-.0577.1816-.1316.2446-.2217.0668-.0937.1131-.1982.1391-.3136.0296-.1189.0445-.2397.0445-.3622zM15.1275 23.1088h1.1789v-1.6652h-.0111l-1.1678 1.6652zm2.28.4866h-.5005v.8975h-.6006v-.8975h-1.6683v-.6109l1.6683-2.2762h.6006v2.4005h.5005v.4866zM16.7813 11.6666c-.1125 0-.225.0365-.3375.1094L14.4 13.0521v-1.0938c0-.4739-.45-.875-.975-.875H7.55626c-.525 0-.95625.4011-.95625.875v5.2682c0 .474.43125.8568.95625.8568H13.425c.525 0 .975-.3828.975-.8568v-1.0937l2.0438 1.276c.1125.0729.225.0912.3375.0912.3187 0 .6-.237.6-.5651V12.25c.0187-.3464-.2813-.5834-.6-.5834zM13.8 17.2265c0 .1459-.1875.2735-.375.2735H7.55626c-.1875 0-.35625-.1276-.35625-.2735v-5.2682c0-.1458.16875-.2917.35625-.2917H13.425c.1875 0 .375.1459.375.2917v5.2682zm3-.2916l-.0375-.0183L14.4 15.4401v-1.6953l2.4-1.4948v4.6849z"}))},r2=ky;var Ly=o=>{var r=o,{color:e="#5856D6"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,d:"M4.79999 21.6599h.6075v.3937h.01687c.04875-.0692.10125-.133.1575-.1914.05625-.0583.11813-.1075.18563-.1476.07125-.0401.15187-.0711.24187-.093.09-.0255.19313-.0383.30938-.0383.17625 0 .33937.0383.48937.1149.15375.0765.2625.195.32625.3554.10875-.1458.23438-.2607.37688-.3445.1425-.0839.32062-.1258.53437-.1258.3075 0 .54563.0729.71438.2188.1725.1458.25875.3901.25875.7328v1.9523h-.64125v-1.6515c0-.1131-.00375-.2151-.01125-.3063-.0075-.0948-.03-.175-.0675-.2406-.03375-.0693-.08625-.1222-.1575-.1586-.07125-.0365-.16875-.0547-.2925-.0547-.2175 0-.375.0656-.4725.1969-.0975.1312-.14625.3172-.14625.5578v1.657h-.64125v-1.8156c0-.1969-.0375-.3445-.1125-.443-.07125-.1021-.20438-.1531-.39938-.1531-.0825 0-.16312.0164-.24187.0492-.075.0328-.1425.0802-.2025.1422-.05625.062-.10313.1385-.14063.2297-.03375.0911-.05062.195-.05062.3117v1.6789h-.64125v-2.8273zM9.71127 21.6599h.60753v.3828h.0112c.09-.1641.2156-.2807.3769-.35.1612-.0729.3356-.1094.5231-.1094.2288 0 .4275.0401.5963.1203.1725.0766.315.1841.4275.3227.1125.1349.1968.2935.2531.4758.0562.1823.0844.3773.0844.5851 0 .1896-.0263.3737-.0788.5524-.0487.1786-.1256.3372-.2306.4757-.1013.1349-.2306.2443-.3881.3282-.1575.0802-.3432.1203-.5569.1203-.0938 0-.1875-.0091-.2813-.0274-.0937-.0145-.1837-.0401-.27-.0765-.0862-.0365-.1668-.0821-.2418-.1367-.0713-.0584-.1313-.1258-.18-.2024h-.0113v1.411h-.64123v-3.8719zM11.95 23.0763c0-.1276-.0169-.2516-.0506-.3719-.0338-.1203-.0844-.226-.1519-.3172-.0675-.0948-.1519-.1695-.2531-.2242-.1013-.0583-.2175-.0875-.3488-.0875-.27 0-.4743.0911-.6131.2734-.135.1823-.2025.4248-.2025.7274 0 .1422.0169.2752.0506.3992.0375.1203.0919.2242.1632.3117.0712.0875.1556.1568.2531.2078.1012.0511.2175.0766.3487.0766.1463 0 .27-.0292.3713-.0875.1012-.0583.1837-.1331.2475-.2242.0675-.0948.1144-.2005.1406-.3172.03-.1203.045-.2425.045-.3664zM15.13 22.8247c-.0075-.0984-.03-.1932-.0675-.2844-.0338-.0911-.0825-.1695-.1463-.2351-.06-.0693-.135-.124-.225-.1641-.0862-.0437-.1837-.0656-.2925-.0656-.1125 0-.2156.0201-.3093.0602-.09.0364-.1688.0893-.2363.1586-.0637.0656-.1162.144-.1575.2351-.0375.0912-.0581.1896-.0619.2953H15.13zm-1.4963.4102c0 .1094.015.2151.045.3172.0338.102.0825.1914.1463.2679.0637.0766.1444.1386.2419.186.0975.0437.2137.0656.3487.0656.1875 0 .3375-.0383.45-.1148.1163-.0803.2025-.1987.2588-.3555h.6075c-.0338.1531-.0919.2898-.1744.4101-.0825.1204-.1819.2224-.2981.3063-.1163.0802-.2475.1404-.3938.1805-.1425.0437-.2925.0656-.45.0656-.2287 0-.4312-.0365-.6075-.1094-.1762-.0729-.3262-.175-.45-.3062-.12-.1313-.2119-.2881-.2756-.4704-.06-.1822-.09-.3828-.09-.6015 0-.2005.0319-.3901.0956-.5688.0675-.1823.1613-.3409.2813-.4757.1237-.1386.2718-.248.4443-.3282s.3675-.1203.585-.1203c.2288 0 .4332.0474.6132.1422.1837.0911.3356.2133.4556.3664s.2062.33.2587.5305c.0563.1969.0713.401.045.6125h-2.1375zM18.9475 24.3396c0 .4265-.1238.7437-.3713.9515-.2437.2115-.5962.3172-1.0575.3172-.1462 0-.2944-.0146-.4444-.0437-.1462-.0292-.2812-.0784-.4049-.1477-.12-.0693-.2213-.1604-.3038-.2734-.0825-.1131-.1312-.2516-.1462-.4157h.6412c.0187.0875.0506.1586.0956.2133.045.0547.0975.0966.1575.1258.0638.0328.1332.0529.2081.0602.075.0109.1538.0164.2363.0164.2587 0 .4481-.062.5681-.186.12-.1239.18-.3026.18-.5359v-.432h-.0112c-.09.1567-.2138.2789-.3713.3664-.1537.0875-.3206.1312-.5006.1312-.2325 0-.4313-.0383-.5963-.1148-.1612-.0802-.2962-.1878-.4049-.3227-.105-.1385-.1819-.2971-.2307-.4758-.0487-.1786-.0731-.37-.0731-.5742 0-.1896.03-.37.09-.5414.06-.1713.1462-.3208.2587-.4484.1125-.1313.2494-.2352.4107-.3117.165-.0766.3506-.1149.5569-.1149.1837 0 .3524.0383.5062.1149.1537.0729.2719.1895.3544.35h.0112v-.3883h.6413v2.6797zm-1.4231-.3446c.1425 0 .2624-.0273.3599-.082.1013-.0583.1819-.1331.2419-.2242.0638-.0948.1088-.2005.135-.3172.03-.1203.045-.2406.045-.3609 0-.1204-.015-.237-.045-.35-.03-.1131-.0769-.2133-.1406-.3008-.06-.0875-.1406-.1568-.2419-.2078-.0975-.0511-.2156-.0766-.3543-.0766-.1426 0-.2626.0292-.3601.0875-.0975.0583-.1762.1349-.2362.2297-.06.0911-.1031.1969-.1294.3172-.0262.1166-.0394.2333-.0394.35 0 .1166.015.2315.045.3445.03.1094.075.2078.1351.2953.0637.0875.1425.1586.2362.2133.0975.0547.2137.082.3488.082zM16.7812 11.6666c-.1125 0-.225.0365-.3375.1094L14.4 13.0521v-1.0938c0-.4739-.45-.875-.975-.875H7.55623c-.525 0-.95625.4011-.95625.875v5.2682c0 .474.43125.8568.95625.8568H13.425c.525 0 .975-.3828.975-.8568v-1.0937l2.0437 1.276c.1125.0729.225.0912.3375.0912.3188 0 .6-.237.6-.5651V12.25c.0188-.3464-.2812-.5834-.6-.5834zM13.8 17.2265c0 .1459-.1875.2735-.375.2735H7.55623c-.1875 0-.35625-.1276-.35625-.2735v-5.2682c0-.1458.16875-.2917.35625-.2917H13.425c.1875 0 .375.1459.375.2917v5.2682zm3-.2916l-.0375-.0183L14.4 15.4401v-1.6953l2.4-1.4948v4.6849z"}))},P1=Ly;var Fy=o=>{var r=o,{color:e="#F02B04"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M10.1143 23.3886c0-.1225-.0162-.2415-.0486-.357-.0324-.1155-.08104-.2176-.14584-.3074-.0648-.0887-.1458-.1604-.243-.2152-.0972-.0543-.2088-.0811-.3348-.0811-.2592 0-.4542.0875-.5856.2625-.1314.1756-.1974.4077-.1974.6982 0 .1365.0174.2631.0516.3804.0336.1178.0852.2181.1536.3021.0684.084.15.1505.246.1995.0948.049.2058.0735.3318.0735.1404 0 .2592-.028.3564-.084.0972-.056.1776-.1289.2406-.2181.06304-.0887.10804-.1902.13504-.304.027-.1143.0402-.2304.0402-.3494zm-2.14924-1.3597h.5832v.3675h.0108c.0864-.1575.207-.2701.3618-.3384.1548-.0682.3222-.1026.5022-.1026.2196 0 .4116.0373.5754.1126.16384.0752.29944.179.40744.3103.108.1307.189.2841.243.4591.054.175.081.3622.081.5617 0 .182-.0246.3588-.0726.5303-.0486.1715-.1224.3226-.2214.4538-.099.1318-.2244.2363-.3756.315-.15124.0793-.32944.1184-.53464.1184-.09 0-.18-.0076-.27-.0239-.09-.0152-.1764-.0408-.2592-.0758-.0828-.035-.159-.0794-.2298-.1336-.0696-.0548-.1284-.1184-.1752-.1919h-.0108v1.3545h-.6156v-3.717zM11.8639 23.4149c0 .1155.015.2298.0462.3412.03.112.0774.2118.1404.2993.063.0875.1428.1575.24.21.0972.0525.2124.0787.3456.0787.1368 0 .2544-.028.3534-.084.0996-.0554.1806-.1289.2436-.2205.063-.091.1098-.1936.1404-.3068.03-.1138.0456-.2304.0456-.3494 0-.301-.069-.5355-.2076-.7035-.1386-.168-.327-.252-.5646-.252-.144 0-.2652.0286-.3642.0869-.099.0577-.1806.133-.2436.2257-.063.0928-.1074.1978-.1344.315-.0276.1173-.0408.2369-.0408.3594zm2.1492 1.3282h-.5832v-.3675h-.0108c-.0828.1575-.2034.2701-.3618.3389-.1584.0683-.3258.1021-.5022.1021-.2196 0-.411-.0373-.5748-.1126-.1644-.0752-.3-.1779-.408-.3074-.108-.1295-.189-.2829-.243-.4591-.054-.1767-.081-.3663-.081-.5699 0-.245.0342-.4567.1026-.6352.0684-.1785.1596-.3255.273-.441.1134-.1155.243-.2007.3888-.2544.1458-.0542.294-.0816.4452-.0816.0864 0 .1746.0081.2646.0239.09.0152.1764.0408.2592.0758.0828.035.1596.0799.2298.1336.0702.0543.1284.119.1752.1925h.0108v-1.386h.6156v3.7479zM14.5422 22.0289h.459v-.2258c0-.1715.0216-.3103.0648-.4176.0432-.1062.1008-.189.1728-.2462.072-.0578.1536-.0963.2454-.1161.0924-.0187.1884-.028.2892-.028.198 0 .342.0117.432.0362v.4672c-.0396-.0105-.0822-.0181-.1266-.0233-.0456-.0053-.0984-.0082-.1596-.0082-.0828 0-.1536.0193-.2136.0578-.0594.0385-.0888.1137-.0888.2257v.2783h.5238v.4462h-.5238v2.268h-.6156v-2.268h-.459v-.4462zM12.3001 11.0555h4.2c.1656 0 .3-.1307.3-.2917s-.1344-.2916-.3-.2916h-4.2c-.1656 0-.3.1306-.3.2916 0 .161.1344.2917.3.2917zM16.5001 12.2222h-4.2c-.1656 0-.3.1306-.3.2916 0 .161.1344.2917.3.2917h4.2c.1656 0 .3-.1307.3-.2917s-.1344-.2916-.3-.2916zM16.5001 13.9722h-4.2c-.1656 0-.3.1306-.3.2916 0 .161.1344.2917.3.2917h4.2c.1656 0 .3-.1307.3-.2917s-.1344-.2916-.3-.2916zM16.5001 15.7222H7.50013c-.1656 0-.3.1306-.3.2916 0 .161.1344.2917.3.2917h8.99997c.1656 0 .3-.1307.3-.2917s-.1344-.2916-.3-.2916zM16.5001 17.4722H7.50013c-.1656 0-.3.1306-.3.2916 0 .161.1344.2917.3.2917h8.99997c.1656 0 .3-.1307.3-.2917s-.1344-.2916-.3-.2916zM7.80001 13.972H10.2v-2.9167H7.80001v2.9167zm-.3.5833H10.5c.1662 0 .3-.1301.3-.2916v-3.5c0-.161-.1338-.2917-.3-.2917H7.50001c-.1656 0-.3.1307-.3.2917v3.5c0 .1615.1344.2916.3.2916z",clipRule:"evenodd"}))},n2=Fy;var Ay=o=>{var r=o,{color:e="#FF742F"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M10.0811 23.3886c0-.1225-.0162-.2415-.0486-.357-.0324-.1155-.08101-.2176-.14581-.3074-.0648-.0887-.1458-.1604-.243-.2152-.0972-.0543-.2088-.0811-.3348-.0811-.2592 0-.4542.0875-.5856.2625-.1314.1756-.1974.4077-.1974.6982 0 .1365.0174.2631.0516.3804.0336.1178.0852.2181.1536.3021.0684.084.15.1505.246.1995.0948.049.2058.0735.3318.0735.1404 0 .2592-.028.3564-.084.0972-.056.1776-.1289.2406-.2181.063-.0887.10801-.1902.13501-.304.027-.1143.0402-.2304.0402-.3494zm-2.14922-1.3597h.5832v.3675h.0108c.0864-.1575.207-.2701.3618-.3384.1548-.0682.3222-.1026.5022-.1026.2196 0 .4116.0373.5754.1126.16382.0752.29942.179.40742.3103.108.1307.189.2841.243.4591.054.175.081.3622.081.5617 0 .182-.0246.3588-.0726.5303-.0486.1715-.1224.3226-.2214.4538-.099.1318-.2244.2363-.3756.315-.15122.0793-.32942.1184-.53462.1184-.09 0-.18-.0076-.27-.0239-.09-.0152-.1764-.0408-.2592-.0758-.0828-.035-.159-.0794-.2298-.1336-.0696-.0548-.1284-.1184-.1752-.1919h-.0108v1.3545h-.6156v-3.717zM13.5157 23.3886c0-.1225-.0162-.2415-.0486-.357-.0324-.1155-.081-.2176-.1458-.3074-.0648-.0887-.1458-.1605-.243-.2153-.0972-.0542-.2088-.0811-.3348-.0811-.2592 0-.4542.0875-.5856.2625-.1314.1756-.1974.4078-.1974.6983 0 .1365.0174.2631.0516.3803.0336.1178.0852.2182.1536.3022.0684.084.15.1505.246.1995.0948.049.2058.0735.3318.0735.1404 0 .2592-.028.3564-.084.0972-.056.1776-.1289.2406-.2182.063-.0887.108-.1902.135-.3039.027-.1143.0402-.2304.0402-.3494zm-2.1492-1.3598h.5832v.3675h.0108c.0864-.1575.207-.2701.3618-.3383.1548-.0683.3222-.1027.5022-.1027.2196 0 .4116.0374.5754.1126.1638.0753.2994.1791.4074.3103.108.1307.189.2841.243.4591.054.175.081.3623.081.5618 0 .182-.0246.3587-.0726.5302-.0486.1715-.1224.3226-.2214.4539-.099.1318-.2244.2362-.3756.315-.1512.0793-.3294.1184-.5346.1184-.09 0-.18-.0076-.27-.0239-.09-.0152-.1764-.0409-.2592-.0759-.0828-.035-.159-.0793-.2298-.1336-.0696-.0548-.1284-.1184-.1752-.1919h-.0108v1.3545h-.6156v-3.717zM14.5036 22.0288h.4644v-.8137h.6156v.8137h.5562v.4463h-.5562v1.449c0 .063.003.1172.0084.1627.0054.0455.018.084.0378.1161.0198.0309.0492.0543.0888.0706.0396.0157.0936.0233.162.0233.0432 0 .0864-.0006.1296-.0023.0432-.0018.0864-.0082.1296-.0181v.462c-.0684.0064-.135.0134-.1998.0204-.0648.007-.1314.0105-.1998.0105-.162 0-.2922-.0146-.3912-.0449-.099-.0297-.1764-.0735-.2328-.1312-.0552-.0572-.093-.1301-.1128-.2176-.0198-.0875-.0318-.1873-.0354-.2993v-1.6012h-.4644v-.4463zM11.5263 10.8094c-1.0752 0-2.08619.4072-2.84699 1.1468-.7608.7391-1.179 1.7226-1.179 2.768 0 1.0453.4188 2.0282 1.179 2.7673.7602.7402 1.77179 1.1468 2.84699 1.1468s2.0862-.4071 2.847-1.1468c.7608-.7391 1.179-1.722 1.179-2.7673 0-.1278-.1056-.2305-.2364-.2305h-3.5526v-3.4539c0-.1271-.1062-.2304-.237-.2304zm-.363.602v3.0823c0 .322.2682.5834.6.5834h3.1704c-.0816.7566-.4236 1.4571-.9846 2.002-.648.6294-1.5084.9759-2.4228.9759-.9156 0-1.7754-.3465-2.4228-.9759-.6468-.6294-1.0032-1.4659-1.0032-2.3549 0-.8902.3558-1.7267 1.0032-2.355.561-.546 1.2822-.8785 2.0598-.9578z",clipRule:"evenodd"}),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M12.5931 9.8882c-.1266 0-.2298.10033-.2298.224v3.5747c0 .1236.1032.224.2298.224h3.6768c.1272 0 .2304-.1004.2304-.224 0-1.0145-.4068-1.9682-1.1448-2.6857-.7374-.7175-1.719-1.113-2.7624-1.113zm.3702.6032c.7434.0805 1.4316.4007 1.968.9222.5364.5221.8658 1.1912.9486 1.9139h-2.9166v-2.8361z",clipRule:"evenodd"}))},S1=Ay;var Dy=o=>{var r=o,{color:e="#FF742F"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M16.5001 11.0549H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h8.99997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM14.7001 12.8049H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h7.19997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM16.5001 14.5549H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h8.99997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM14.7001 16.3049H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h7.19997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM16.5001 18.0549H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h8.99997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916z",clipRule:"evenodd"}),B.createElement("path",{fill:e,d:"M7.20001 21.9525h.61485v.3874h.01138c.09109-.166.21824-.2841.38144-.3542.1632-.0738.33968-.1107.52945-.1107.23151 0 .43267.0406.60346.1218.17459.0775.31881.1863.43267.3265.11386.1366.19925.2971.25614.4816.057.1845.0854.3819.0854.5922 0 .1919-.0265.3782-.0797.559-.0493.1808-.12711.3413-.23338.4816-.10247.1365-.23341.2472-.39281.332-.15941.0812-.34728.1218-.56361.1218-.09489 0-.18977-.0092-.28466-.0277-.09488-.0147-.18597-.0406-.27326-.0775s-.16889-.083-.2448-.1383c-.07211-.0591-.13284-.1273-.18218-.2048h-.01138v1.428h-.64901v-3.9187zm2.26583 1.4335c0-.1291-.01708-.2546-.05124-.3763-.03416-.1218-.0854-.2288-.15371-.3211-.06832-.0959-.15371-.1716-.25619-.2269-.10247-.059-.22013-.0886-.35297-.0886-.27326 0-.48011.0923-.62054.2768-.13663.1845-.20495.4299-.20495.7361 0 .1439.01708.2786.05124.4041.03796.1217.09299.2269.1651.3155.07211.0885.15751.1586.25619.2103.10247.0516.22013.0775.35296.0775.14802 0 .27327-.0295.37574-.0886.10248-.059.18597-.1347.2505-.2269.06831-.096.11575-.203.14232-.321.03036-.1218.04555-.2454.04555-.3709zM10.6803 21.9525h.6149v.3874h.0114c.091-.166.2182-.2841.3814-.3542.1632-.0738.3397-.1107.5294-.1107.2315 0 .4327.0406.6035.1218.1746.0775.3188.1863.4327.3265.1138.1366.1992.2971.2561.4816.057.1845.0854.3819.0854.5922 0 .1919-.0265.3782-.0797.559-.0493.1808-.1271.3413-.2334.4816-.1024.1365-.2334.2472-.3928.332-.1594.0812-.3473.1218-.5636.1218-.0949 0-.1898-.0092-.2847-.0277-.0948-.0147-.1859-.0406-.2732-.0775-.0873-.0369-.1689-.083-.2448-.1383-.0721-.0591-.1329-.1273-.1822-.2048h-.0114v1.428h-.649v-3.9187zm2.2658 1.4335c0-.1291-.017-.2546-.0512-.3763-.0342-.1218-.0854-.2288-.1537-.3211-.0683-.0959-.1537-.1716-.2562-.2269-.1025-.059-.2201-.0886-.353-.0886-.2732 0-.4801.0923-.6205.2768-.1366.1845-.2049.4299-.2049.7361 0 .1439.017.2786.0512.4041.0379.1217.093.2269.1651.3155.0721.0885.1575.1586.2562.2103.1024.0516.2201.0775.3529.0775.1481 0 .2733-.0295.3758-.0886.1025-.059.1859-.1347.2505-.2269.0683-.096.1157-.203.1423-.321.0304-.1218.0455-.2454.0455-.3709zM14.9349 23.3085l-1.0191-1.356h.7857l.6148.88.6433-.88h.7515l-1.002 1.3228 1.1272 1.5387h-.7799l-.7458-1.0571-.723 1.0571h-.7629l1.1102-1.5055z"}))},s2=Dy;var By=o=>{var r=o,{color:e="#F14B5F"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M10.2396 14.2917v.5833c0 .161-.1428.2917-.31979.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.17699 0 .31979.1307.31979.2917zM10.8794 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM11.5193 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM12.1597 13.7083v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3204-.1307-.3204-.2917v-.5833c0-.161.1434-.2917.3204-.2917.1764 0 .3198.1307.3198.2917zM12.7996 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM13.4394 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM9.59976 13.7083v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3204-.1307-.3204-.2917v-.5833c0-.161.1434-.2917.3204-.2917.1764 0 .3198.1307.3198.2917zM14.0798 14.2917v.5833c0 .161-.1434.2917-.3204.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3204.1307.3204.2917zM5.11967 14.2917v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.1764 0 .3198.1307.3198.2917zM5.75953 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM6.39937 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM7.0398 13.7083v.5833c0 .161-.1434.2917-.3204.2917-.1764 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1434-.2917.3198-.2917.177 0 .3204.1307.3204.2917zM7.67964 14.2917v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.1764 0 .3198.1307.3198.2917zM8.31947 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM4.47986 13.7083v.5833c0 .161-.1434.2917-.3204.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3204.1307.3204.2917zM1.91929 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM2.55973 14.2917v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3204-.1307-.3204-.2917v-.5833c0-.161.1434-.2917.3204-.2917.1764 0 .3198.1307.3198.2917zM3.19957 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM3.8394 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM8.95933 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM18.9197 14.2917v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.1764 0 .3198.1307.3198.2917zM18.2798 13.7083v.5833c0 .161-.1434.2917-.3204.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3204.1307.3204.2917zM15.0794 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM15.7193 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM16.3597 14.2917v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3204-.1307-.3204-.2917v-.5833c0-.161.1434-.2917.3204-.2917.1764 0 .3198.1307.3198.2917zM16.9996 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM17.6394 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917z",clipRule:"evenodd"}),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M14.4396 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917z",clipRule:"evenodd"}),B.createElement("path",{fill:e,d:"M9 21.0773h.60793v.5524h.01136c.01894-.0773.05492-.1528.10795-.2265.05682-.0736.1231-.1399.19886-.1988.0795-.0626.1667-.1123.2614-.1492.0946-.0368.1912-.0552.2897-.0552.0758 0 .1269.0018.1534.0055l.0909.0111v.6076c-.0454-.0074-.0928-.0129-.142-.0166-.0455-.0074-.0909-.011-.1364-.011-.1098 0-.214.0221-.3125.0663-.0947.0405-.17799.1031-.24995.1878-.07197.081-.12879.1822-.17045.3038-.04167.1215-.0625.2614-.0625.4198v1.3588H9v-2.8558zM13.4576 23.2979c0 .0773.0094.1326.0284.1657.0227.0331.0644.0497.125.0497h.0681c.0266 0 .0569-.0037.0909-.011v.4363c-.0227.0074-.053.0148-.0909.0221-.0341.0111-.07.0203-.1079.0277-.0379.0073-.0758.0128-.1136.0165-.0379.0037-.0701.0055-.0966.0055-.1326 0-.2424-.0257-.3296-.0773-.0871-.0515-.1439-.1418-.1704-.2706-.1288.1215-.2879.2099-.4773.2651-.1856.0552-.3655.0828-.5397.0828-.1326 0-.2595-.0184-.3807-.0552-.1212-.0331-.2291-.0828-.3238-.1491-.0909-.07-.1648-.1565-.2216-.2596-.053-.1068-.0796-.2302-.0796-.3701 0-.1768.0322-.3204.0966-.4309.0682-.1105.1553-.197.2614-.2596.1098-.0626.231-.1068.3636-.1326.1364-.0294.2727-.0515.4091-.0663.1174-.0221.2291-.0368.3352-.0442.1061-.011.1989-.0276.2784-.0497.0833-.0221.1477-.0552.1932-.0994.0492-.0479.0738-.1178.0738-.2099 0-.081-.0208-.1473-.0625-.1989-.0378-.0515-.0871-.0902-.1477-.116-.0568-.0294-.1212-.0478-.1932-.0552-.0719-.011-.1401-.0166-.2045-.0166-.1818 0-.3314.0369-.4488.1105-.1175.0737-.1838.1878-.1989.3425h-.6477c.0114-.1841.0568-.337.1364-.4585.0795-.1215.1799-.2191.3011-.2927.125-.0737.2651-.1252.4204-.1547S12.1186 21 12.2815 21c.1439 0 .2859.0147.4261.0442.1401.0295.2651.0773.375.1436.1136.0663.2045.1528.2727.2596.0682.1031.1023.2302.1023.3812v1.4693zm-.6477-.7954c-.0985.0626-.2197.1012-.3637.116-.1439.011-.2878.0294-.4318.0552-.0681.011-.1344.0276-.1988.0497-.0644.0184-.1212.046-.1705.0829-.0492.0331-.089.0791-.1193.1381-.0265.0552-.0398.1233-.0398.2043 0 .07.0209.1289.0625.1768.0417.0479.091.0865.1478.116.0606.0258.125.0442.1931.0552.072.0111.1364.0166.1932.0166.072 0 .1496-.0092.233-.0276.0833-.0184.1609-.0497.2329-.0939.0758-.0442.1383-.0994.1875-.1657.0492-.07.0739-.1547.0739-.2541v-.4695zM14.1545 21.0773h.6079v.5524h.0114c.0189-.0773.0549-.1528.1079-.2265.0568-.0736.1231-.1399.1989-.1988.0795-.0626.1666-.1123.2613-.1492.0947-.0368.1913-.0552.2898-.0552.0757 0 .1269.0018.1534.0055l.0909.0111v.6076c-.0454-.0074-.0928-.0129-.142-.0166-.0455-.0074-.0909-.011-.1364-.011-.1098 0-.214.0221-.3125.0663-.0947.0405-.178.1031-.25.1878-.0719.081-.1288.1822-.1704.3038-.0417.1215-.0625.2614-.0625.4198v1.3588h-.6477v-2.8558z"}),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M22.4394 14.2917c0 .161-.1428.2916-.3198.2916h-1.6002V14h1.6002c.177 0 .3198.1307.3198.2917zm-3.1998 0c0-.161.1428-.2917.3198-.2917h.3198v.5833h-.3198c-.177 0-.3198-.1306-.3198-.2916zm-.6396 0c0 .4824.4296.875.9594.875h2.5602c.5292 0 .9594-.3926.9594-.875 0-.4825-.4302-.875-.9594-.875h-2.5602c-.5298 0-.9594.3925-.9594.875z",clipRule:"evenodd"}))},l2=By;var zy=o=>{var r=o,{color:e="#795545"}=r,t=M(r,["color"]);return B.createElement(Q,d({},t),B.createElement("path",{fill:e,fillRule:"evenodd",d:"M8.57751 22.0289h.4644v-.8138h.6156v.8138h.55619v.4462h-.55619v1.449c0 .063.003.1173.0078.1628.0054.0455.0186.084.0384.1161.0192.0309.0492.0542.0888.0706.0396.0157.0936.0233.162.0233.0432 0 .08639-.0006.12959-.0023.0432-.0018.0864-.0082.1296-.0181v.462c-.0684.0064-.135.0134-.1998.0204-.06479.007-.13139.0105-.19979.0105-.162 0-.2928-.0146-.3918-.0449-.099-.0298-.1764-.0735-.2322-.1313-.0552-.0571-.0936-.1301-.1134-.2176-.0192-.0875-.0312-.1872-.0348-.2992v-1.6013h-.4644v-.4462zM11.5424 23.3152l-.9666-1.2863h.7452l.5832.8348.6102-.8348h.7128l-.9504 1.2548 1.0692 1.4595h-.7404l-.7068-1.0028-.6858 1.0028h-.7236l1.053-1.428zM13.5451 22.0289h.4644v-.8138h.6162v.8138h.5562v.4462h-.5562v1.449c0 .063.0024.1173.0078.1628s.018.084.0378.1161c.0198.0309.0492.0542.0888.0706.0402.0157.0942.0233.1626.0233.0426 0 .0858-.0006.1296-.0023.0426-.0018.0858-.0082.1296-.0181v.462c-.069.0064-.135.0134-.1998.0204-.0654.007-.1314.0105-.1998.0105-.1626 0-.2928-.0146-.3918-.0449-.099-.0298-.1764-.0735-.2328-.1313-.0552-.0571-.093-.1301-.1128-.2176-.0198-.0875-.0318-.1872-.0354-.2992v-1.6013h-.4644v-.4462zM12.9 11.0549h3.6c.1656 0 .3-.1306.3-.2916 0-.161-.1344-.2917-.3-.2917h-3.6c-.1656 0-.3.1307-.3.2917s.1344.2916.3.2916zM16.5 12.2216h-3.6c-.1656 0-.3.1307-.3.2917s.1344.2916.3.2916h3.6c.1656 0 .3-.1306.3-.2916 0-.161-.1344-.2917-.3-.2917zM16.5 13.9716h-3.6c-.1656 0-.3.1307-.3.2917s.1344.2916.3.2916h3.6c.1656 0 .3-.1306.3-.2916 0-.161-.1344-.2917-.3-.2917zM16.5 15.7216H7.50001c-.1656 0-.3.1307-.3.2917s.1344.2916.3.2916H16.5c.1656 0 .3-.1306.3-.2916 0-.161-.1344-.2917-.3-.2917zM16.5 17.4716H7.50001c-.1656 0-.3.1307-.3.2917s.1344.2916.3.2916H16.5c.1656 0 .3-.1306.3-.2916 0-.161-.1344-.2917-.3-.2917zM7.50001 11.0549h1.5v3.2813c0 .161.1344.2916.3.2916s.3-.1306.3-.2916v-3.2813H11.1c.1656 0 .3-.1306.3-.2916 0-.161-.1344-.2917-.3-.2917H7.50001c-.1656 0-.3.1307-.3.2917s.1344.2916.3.2916z",clipRule:"evenodd"}))},m2=zy;var Oy=({color:e="#27B740"})=>B.createElement(Q,null,B.createElement("path",{fill:e,fillRule:"evenodd",d:"M9.35494 23.3152l-.9666-1.2863h.7452l.5832.8348.61016-.8348h.7128l-.9504 1.2548 1.0692 1.4595h-.7398l-.70736-1.0028-.6858 1.0028h-.7236l1.053-1.428zM11.6556 24.7432h.6156v-3.7484h-.6156v3.7484zM13.5397 23.8718c.018.175.0864.2974.2052.3674.1188.07.261.105.4266.105.0576 0 .123-.004.1968-.0134.0738-.0087.1434-.0251.2082-.0496.0648-.0245.1176-.06.1596-.1073.0414-.0472.06-.1097.0564-.1866-.0036-.077-.0324-.14-.0864-.189-.054-.049-.1236-.0881-.2076-.1179-.0846-.0303-.1812-.0554-.2892-.0764-.108-.021-.2178-.0437-.3294-.0682-.1152-.0245-.2262-.0543-.3318-.0893-.1068-.035-.2022-.0822-.2862-.1417-.0846-.0595-.1524-.1354-.2028-.2281-.0504-.0928-.0756-.2077-.0756-.3442 0-.147.0366-.2707.1104-.3704.0738-.0998.168-.1797.2814-.2415.1134-.0607.2394-.1038.3774-.1283.1386-.0245.2712-.0368.3972-.0368.144 0 .2814.0146.4134.0443.1308.0304.2502.0782.3558.1447.1068.0665.195.1534.2652.2596.0696.1073.114.2357.132.3862h-.6426c-.0288-.1435-.0966-.2398-.2022-.2888-.1068-.049-.228-.0741-.3648-.0741-.0432 0-.0942.0041-.1542.0111-.0594.007-.1146.0198-.1668.0391-.0528.0198-.0966.0472-.1326.0846-.036.0361-.054.0846-.054.1441 0 .0735.0264.133.078.1785.0522.0455.1212.0828.2058.1125.084.0304.1806.0555.2886.0765.108.021.2196.0437.3348.0682.1116.0245.2214.0543.3294.0893.108.035.204.0822.2892.1417.084.0595.1524.1348.2046.2258.0522.091.0786.203.0786.3354 0 .1615-.0378.298-.1134.41-.0756.112-.174.203-.294.273-.1212.07-.255.1208-.4026.1523-.1476.0315-.2934.0472-.4374.0472-.1764 0-.3396-.0192-.4884-.0577-.1494-.0385-.2796-.0974-.3888-.1756-.1098-.0793-.1962-.1773-.2592-.294-.063-.1172-.0966-.2566-.1002-.4176h.6156zM13.8 17.4714h2.4v-2.9166h-2.4v2.9166zm-3 0h2.4v-2.9166h-2.4v2.9166zm-3.00002 0H10.2v-2.9166H7.79998v2.9166zm0-3.5H10.2v-2.9166H7.79998v2.9166zm6.00002 0h2.4v-2.9166h-2.4v2.9166zm-3 0h2.4v-2.9166h-2.4v2.9166zm5.7-3.5H7.49998c-.1662 0-.3.1307-.3.2917v7c0 .1616.1338.2917.3.2917H16.5c.1656 0 .3-.1301.3-.2917v-7c0-.161-.1344-.2917-.3-.2917z",clipRule:"evenodd"})),T1=Oy;var Uy=({color:e="#5856D6"})=>B.createElement(Q,null,B.createElement("path",{fill:e,fillRule:"evenodd",d:"M8.35116 22.0289h2.26804v.42l-1.59844 1.8217h1.67944v.4725H8.24316v-.42l1.5444-1.8211h-1.4364v-.4731zM11.2998 24.7433h.6156V22.029h-.6156v2.7143zm0-3.1816h.6156v-.5669h-.6156v.5669zM14.8852 23.3886c0-.1225-.0162-.2415-.0486-.357-.0324-.1155-.081-.2176-.1458-.3074-.0648-.0887-.1458-.1604-.243-.2152-.0972-.0543-.2088-.0811-.3348-.0811-.2592 0-.4542.0875-.5856.2625-.1314.1756-.1974.4077-.1974.6982 0 .1365.0174.2631.0516.3804.0336.1178.0852.2181.1536.3021.0684.084.15.1505.246.1995.0948.049.2058.0735.3318.0735.1404 0 .2592-.028.3564-.084.0972-.056.1776-.1289.2406-.2181.063-.0887.108-.1902.135-.304.027-.1143.0402-.2304.0402-.3494zm-2.1492-1.3597h.5832v.3675h.0108c.0864-.1575.207-.2701.3618-.3384.1548-.0682.3222-.1026.5022-.1026.2196 0 .4116.0373.5754.1126.1638.0752.2994.179.4074.3103.108.1307.189.2841.243.4591.054.175.081.3622.081.5617 0 .182-.0246.3588-.0726.5303-.0486.1715-.1224.3226-.2214.4538-.099.1318-.2244.2363-.3756.315-.1512.0793-.3294.1184-.5346.1184-.09 0-.18-.0076-.27-.0239-.09-.0152-.1764-.0408-.2592-.0758-.0828-.035-.159-.0794-.2298-.1336-.0696-.0548-.1284-.1184-.1752-.1919h-.0108v1.3545h-.6156v-3.717zM12.0001 10.2465h-.6c-.1656 0-.3-.1388-.3-.31088 0-.17208.1344-.31091.3-.31091h.6c.1656 0 .3.13883.3.31091s-.1344.31088-.3.31088zM12.6001 10.8686h-.6c-.1656 0-.3-.1388-.3-.3109s.1344-.3109.3-.3109h.6c.1656 0 .3.1388.3.3109s-.1344.3109-.3.3109zM12.0001 11.4907h-.6c-.1656 0-.3-.1389-.3-.3109 0-.1721.1344-.311.3-.311h.6c.1656 0 .3.1389.3.311 0 .172-.1344.3109-.3.3109zM12.6001 12.1133h-.6c-.1656 0-.3-.1394-.3-.3109 0-.1721.1344-.3115.3-.3115h.6c.1656 0 .3.1394.3.3115 0 .1715-.1344.3109-.3.3109zM12.0001 12.7354h-.6c-.1656 0-.3-.1388-.3-.3109s.1344-.3109.3-.3109h.6c.1656 0 .3.1388.3.3109s-.1344.3109-.3.3109zM12.6001 13.3575h-.6c-.1656 0-.3-.1389-.3-.311 0-.172.1344-.3109.3-.3109h.6c.1656 0 .3.1389.3.3109 0 .1721-.1344.311-.3.311zM12.0001 17.7131c-.1656 0-.3-.1388-.3-.3109v-1.5558h.6v1.5558c0 .1721-.1344.3109-.3.3109zm0-3.1109c.1656 0 .3.1388.3.3109v.3109h-.6v-.3109c0-.1721.1344-.3109.3-.3109zm0-.6219c-.4962 0-.9.4177-.9.9328v2.4891c0 .5145.4038.9327.9.9327.4962 0 .9-.4182.9-.9327v-2.4891c0-.5151-.4038-.9328-.9-.9328zM12.6001 9.62448h-.6c-.1656 0-.3-.13942-.3-.31092 0-.17208.1344-.3115.3-.3115h.6c.1656 0 .3.13942.3.3115 0 .1715-.1344.31092-.3.31092zM12.0001 13.9801h-.6c-.1656 0-.3-.1394-.3-.3115s.1344-.3109.3-.3109h.6c.1656 0 .3.1388.3.3109s-.1344.3115-.3.3115zM12.0001 5.26884h-.6c-.1656 0-.3-.13942-.3-.31092 0-.17208.1344-.31091.3-.31091h.6c.1656 0 .3.13883.3.31091 0 .1715-.1344.31092-.3.31092zM12.6001 5.89091h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17208.1344-.31092.3-.31092h.6c.1656 0 .3.13884.3.31092 0 .17208-.1344.31092-.3.31092zM12.0001 6.51298h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17208.1344-.31092.3-.31092h.6c.1656 0 .3.13884.3.31092 0 .17208-.1344.31092-.3.31092zM12.6001 7.13562h-.6c-.1656 0-.3-.13941-.3-.3115 0-.1715.1344-.31091.3-.31091h.6c.1656 0 .3.13941.3.31091 0 .17209-.1344.3115-.3.3115zM12.0001 7.75769h-.6c-.1656 0-.3-.13941-.3-.31091 0-.17209.1344-.31092.3-.31092h.6c.1656 0 .3.13883.3.31092 0 .1715-.1344.31091-.3.31091zM12.6001 8.37976h-.6c-.1656 0-.3-.13883-.3-.31092 0-.17208.1344-.31091.3-.31091h.6c.1656 0 .3.13883.3.31091 0 .17209-.1344.31092-.3.31092zM12.6001 4.64678h-.6c-.1656 0-.3-.13942-.3-.3115 0-.17209.1344-.31092.3-.31092h.6c.1656 0 .3.13883.3.31092 0 .17208-.1344.3115-.3.3115zM12.0001 1.53528h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17208.1344-.310918.3-.310918h.6c.1656 0 .3.138838.3.310918 0 .17208-.1344.31092-.3.31092zM12.6001 2.15734h-.6c-.1656 0-.3-.13883-.3-.31092 0-.17208.1344-.31091.3-.31091h.6c.1656 0 .3.13883.3.31091 0 .17209-.1344.31092-.3.31092zM12.0001 2.77999h-.6c-.1656 0-.3-.13941-.3-.31091 0-.17209.1344-.3115.3-.3115h.6c.1656 0 .3.13941.3.3115 0 .1715-.1344.31091-.3.31091zM12.6001 3.40206h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17208.1344-.31092.3-.31092h.6c.1656 0 .3.13884.3.31092 0 .17208-.1344.31092-.3.31092zM12.0001 4.02412h-.6c-.1656 0-.3-.13883-.3-.31091 0-.17209.1344-.31092.3-.31092h.6c.1656 0 .3.13883.3.31092 0 .17208-.1344.31091-.3.31091zM12.0001 9.00183h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17209.1344-.31092.3-.31092h.6c.1656 0 .3.13883.3.31092 0 .17208-.1344.31092-.3.31092z",clipRule:"evenodd"})),d2=Uy;var jy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 384 512",fill:"currentColor"},e),B.createElement("path",{d:`M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16
      16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84
      0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z`})),ft=jy;var Hy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),B.createElement("path",{d:`M491.609 73.625l-53.861-53.839c-26.378-26.379-69.076-26.383-95.46-.001L24.91 335.089.329
      484.085c-2.675 16.215 11.368 30.261 27.587 27.587l148.995-24.582 315.326-317.378c26.33-26.331
      26.581-68.879-.628-96.087zM120.644 302l170.259-169.155 88.251 88.251L210
      391.355V350h-48v-48h-41.356zM82.132 458.132l-28.263-28.263 12.14-73.587L84.409
      338H126v48h48v41.59l-18.282 18.401-73.586
      12.141zm378.985-319.533l-.051.051-.051.051-48.03
      48.344-88.03-88.03 48.344-48.03.05-.05.05-.05c9.147-9.146 23.978-9.259
      33.236-.001l53.854 53.854c9.878 9.877 9.939 24.549.628 33.861z`})),dr=Hy;var Vy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 320 512",fill:"currentColor"},e),B.createElement("path",{d:`M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34
      0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4
      52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4
      256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160
      303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34
      0-22.58L207.6 256z`})),Oe=Vy;var $y=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 576 512",fill:"currentColor"},e),B.createElement("path",{d:`M561.938 190.06L385.94 14.107C355.79-16.043 304 5.327 304 48.047v80.703C166.04 132.9 0
      159.68 0 330.05c0 73.75 38.02 134.719 97.63 173.949 37.12 24.43 85.84-10.9
      72.19-54.46C145.47 371.859 157.41 330.2 304 321.66v78.28c0 42.64 51.73 64.15 81.94
      33.94l175.997-175.94c18.751-18.74 18.751-49.14.001-67.88zM352 400V272.09c-164.521
      1.79-277.44 33.821-227.98 191.61C88 440 48 397.01 48 330.05c0-142.242 160.819-153.39
      304-154.02V48l176 176-176 176z`})),p2=$y;var Gy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),B.createElement("path",{d:`M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416
      93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2
      3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4
      0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z`})),pr=Gy;var _y=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),B.createElement("path",{d:`M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6
      28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8
      9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3
      240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z`})),c2=_y;var qy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),B.createElement("path",{d:`M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5
      114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496
      128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8
      307.7z`})),u2=qy;var Zy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),B.createElement("path",{d:`M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49
      48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6
      6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909
      40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971
      0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z`})),Kn=Zy;var Yy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),B.createElement("path",{d:`M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645
      117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41
      31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51
      110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0
      16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699
      46.054-.001l189.465-189.489c25.987-25.989
      25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249
      39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174
      739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685
      4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034
      58.092-152.004 58.093-210.048.041z`})),Jn=Yy;var Qy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512"},e),B.createElement("path",{d:`M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284
      28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686
      16.971 0l299.813-299.813c4.686-4.686 4.686-12.284
      0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z`})),f2=Qy;var Wy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 448 512",fill:"currentColor"},e),B.createElement("path",{d:`M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17
      0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7
      4.7-12.3 0-17z`})),Dt=Wy;var Ky=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 256 512",fill:"currentColor"},e),B.createElement("path",{d:`M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092
      74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971
      0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285
      4.686 16.971-.001z`})),co=Ky;var Jy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 256 512",fill:"currentColor"},e),B.createElement("path",{d:`M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908
      437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971
      0l209.414-209.414c4.686-4.686
      4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z`})),cr=Jy;var Xy=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512"},e),B.createElement("path",{d:`M342.7 144H464v288H48V144h121.3l24-64h125.5l23.9 64zM324.3 32h-131c-20 0-37.9 12.4-44.9
      31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5
      48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2
      0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-192c-39.7
      0-72 32.3-72 72s32.3 72 72 72 72-32.3 72-72-32.3-72-72-72z`})),g2=Xy;var Ry=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),B.createElement("path",{d:`M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0
      4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2
      16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0
      16 7.2 16 16v288zM336 184h-56v-56c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v56h-56c-8.8
      0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h56v56c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2
      16-16v-56h56c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z`})),C2=Ry;var ev=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 128 512"},e),B.createElement("path",{d:`M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16
      104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5
      21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z`})),h2=ev;var tv=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),B.createElement("path",{d:`M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504
      119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200
      110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm42-104c0 23.159-18.841 42-42
      42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42zm-81.37-211.401l6.8 136c.319 6.387
      5.591 11.401 11.985 11.401h41.17c6.394 0 11.666-5.014
      11.985-11.401l6.8-136c.343-6.854-5.122-12.599-11.985-12.599h-54.77c-6.863 0-12.328
      5.745-11.985 12.599z`})),Bt=tv;var ov=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 496 512",fill:"currentColor"},e),B.createElement("path",{d:`M248 8C111.04 8 0 119.03 0 256s111.04 248 248 248 248-111.03 248-248S384.96 8 248 8zm0
      448c-110.28 0-200-89.72-200-200S137.72 56 248 56c10.92 0 21.55 1.12 32 2.81v21.7c0 8.56-6.94
      15.5-15.5 15.5h-24.21c-5.18 0-10.02 2.59-12.89 6.9l-8.08 12.11c-2.14 3.21-5.4 5.5-9.14
      6.44l-14.45 3.61a15.492 15.492 0 0 0-11.74 15.04v4.4c0 8.56 6.94 15.5 15.5 15.5h90.09c4.11
      0 8.05 1.63 10.96 4.54l6.92 6.92c2.91 2.91 6.85 4.54 10.96 4.54h10.09c8.56 0 15.5 6.94 15.5
      15.5 0 6.67-4.27 12.59-10.6 14.7l-47.31 15.77c-3.9 1.3-8.15 1-11.83-.84l-14.72-7.36a54.682
      54.682 0 0 0-24.43-5.77h-.89c-11.82 0-23.32 3.83-32.78 10.93l-27.58 20.69A54.545 54.545 0 0
      0 152 283.31v14.06c0 14.49 5.76 28.38 16 38.63a54.641 54.641 0 0 0 38.63 16h25.88c8.56 0
      15.5 6.94 15.5 15.5v29.88c0 12.25 2.85 24.33 8.33 35.29 4.7 9.4 14.31 15.34 24.82 15.34 9.28
      0 17.94-4.64 23.09-12.36l13.03-19.55a159.608 159.608 0 0 1 25-29.16c2.47-2.26 4.14-5.26
      4.76-8.56l4.3-22.83c.44-2.33 1.41-4.53 2.83-6.43l18.74-24.98c2.01-2.68
      3.1-5.95 3.1-9.3V303.5c0-8.56-6.94-15.5-15.5-15.5h-8.21c-5.18
      0-10.02-2.59-12.89-6.9l-13.24-19.86c-5.67-8.5-1.7-20.07 7.99-23.3l2.65-.88c4.54-1.51
      9.52-.85 13.5 1.81l18.21 12.14a15.532 15.532 0 0 0 15.53.97l15.39-7.7c5.25-2.62 8.57-7.99
      8.57-13.86v-6.93c0-8.56 6.94-15.5 15.5-15.5h18.44c3.82 15.41 6.07 31.43 6.07 48C448 366.28
      358.28 456 248 456z`})),y2=ov;var rv=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 448 512",fill:"currentColor"},e),B.createElement("path",{d:`M224 412c-15.5 0-28-12.5-28-28v-64c0-15.5 12.5-28 28-28s28 12.5 28 28v64c0
      15.5-12.5 28-28 28zm224-172v224c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V240c0-26.5
      21.5-48 48-48h32v-48C80 64.5 144.8-.2 224.4 0 304 .2 368 65.8 368 145.4V192h32c26.5 0 48
      21.5 48 48zm-320-48h192v-48c0-52.9-43.1-96-96-96s-96 43.1-96 96v48zm272 48H48v224h352V240z`})),uo=rv;var nv=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),B.createElement("path",{d:`M140 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4
      12-12 12H140zm364-28c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48
      0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z`})),v2=nv;var iv=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 576 512",fill:"currentColor"},e),B.createElement("path",{d:`M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0
      30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48
      392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480
      8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0
      12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12
      12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0
      6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627
      0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627
      5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627
      0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0
      6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z`})),x2=iv;var av=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 576 512",fill:"currentColor"},e),B.createElement("path",{d:`M552 64H88c-13.234 0-24 10.767-24 24v8H24c-13.255 0-24 10.745-24 24v280c0 26.51 21.49 48 48
      48h504c13.233 0 24-10.767 24-24V88c0-13.233-10.767-24-24-24zM32 400V128h32v272c0 8.822-7.178
      16-16 16s-16-7.178-16-16zm512 16H93.258A47.897 47.897 0 0 0 96
      400V96h448v320zm-404-96h168c6.627 0 12-5.373 12-12V140c0-6.627-5.373-12-12-12H140c-6.627 0-12
      5.373-12 12v168c0 6.627 5.373 12 12 12zm20-160h128v128H160V160zm-32 212v-8c0-6.627 5.373-12
      12-12h168c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H140c-6.627 0-12-5.373-12-12zm224
      0v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627
      0-12-5.373-12-12zm0-64v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373
      12-12 12H364c-6.627 0-12-5.373-12-12zm0-128v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373
      12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 64v-8c0-6.627 5.373-12
      12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z`})),M2=av;var sv=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 448 512",fill:"currentColor"},e),B.createElement("path",{d:`M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0
      26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272
      80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24
      24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6
      6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0
      128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z`})),b2=sv;var lv=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 320 512",fill:"currentColor"},e),B.createElement("path",{d:`M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 
      0L24 329c-15.1-15.1-4.4-41 17-41z`})),I2=lv;var Am=i(f2).attrs({width:18,height:18})`
  margin-right: 8px;
`,Dm=i(Bt).attrs({width:18,height:18})`
  margin-right: 8px;
`,Bm=i(Oe).attrs({width:18,height:18})`
  margin-right: 8px;
`,zm=i.div`
  position: fixed;
  padding-top: 50px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  pointer-events: none;
`,Om=i.div`
  width: 480px;
  padding: 8px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${({theme:e})=>e.palette.base.main};
  border-radius: 4px;
  margin-bottom: 10px;

  animation-duration: 0.3s;
  animation-name: appear;

  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  pointer-events: auto;
`;var dv=3e3,pv=({className:e,content:t,icon:o})=>B.createElement(Om,{className:e},o," ",t),Xn,Um=()=>{let[e,t]=useState([]),o=r=>t&&t(n=>n.filter(a=>a.id!==r));return Xn=a=>{var s=a,{duration:r=dv}=s,n=M(s,["duration"]);let l=Date.now();t([d({id:l},n),...e]),setTimeout(()=>o(l),r);},B.createElement(zm,null,e.map(r=>B.createElement(pv,w(d({},r),{key:r.id}))))},Z={success:e=>Xn(w(d({},e),{icon:B.createElement(Am,null)})),info:e=>Xn(w(d({},e),{icon:B.createElement(Dm,null)})),error:e=>Xn(w(d({},e),{icon:B.createElement(Bm,null)})),show:e=>Xn(e)};var w2=({theme:e})=>k`
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  outline: none;
  padding: 10px 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  ${e.typography.bodyBold}
  ${({fullWidth:t})=>t&&"width: 100%;"}
  justify-content: center;
  &:disabled {
    cursor: default;
  }
  & > :not(:first-child) {
    margin-left: 0.5rem;
  }
`,jm=i.button`
  ${w2};
  background-color: #fff;
  border: 1px solid #e3e4e8;
  color: ${({theme:e})=>e.palette.neutral.main};
  &:hover {
    color: ${({theme:e})=>e.palette.neutral.shade1};
  }
  &:disabled {
    color: ${({theme:e})=>e.palette.neutral.shade2};
  }
`,Y=i.button`
  ${w2};
  border: none;
  background-color: ${({theme:e})=>e.palette.primary.main};
  color: white;
  &:hover:not(:disabled) {
    opacity: 0.8;
  }
  &:disabled {
    background-color: ${({theme:e})=>e.palette.primary.shade2};
  }
`,ye=i.button`
  ${w2};
  color: ${({theme:e})=>e.palette.neutral.shade1};
  background-color: transparent;
  border: none;
  &:hover {
    background-color: #f2f2f4;
  }
  &:disabled {
    color: ${({theme:e})=>e.palette.neutral.shade2};
  }
  ${({active:e,theme:t})=>e&&`color: ${t.palette.primary.shade1};`}
`;var cv=r=>{var n=r,{variant:e,fullWidth:t=!1}=n,o=M(n,["variant","fullWidth"]);switch(e){case"primary":return B.createElement(Y,w(d({},o),{fullWidth:t}));case"secondary":return B.createElement(ye,w(d({},o),{fullWidth:t}));default:return B.createElement(jm,w(d({},o),{fullWidth:t}))}},F=cv;var Vm=i(bt).attrs({width:18,height:18})`
  padding: 0 6px;
  cursor: pointer;
  margin-left: auto;
  &.svg-inline--fa {
    width: auto;
  }
`,$m=i.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  padding: 20px 0;
  background: rgba(23, 24, 28, 0.8);
  animation-duration: 0.3s;
  animation-name: appear;
  margin-top: 0 !important;

  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`,Gm=i.div`
  margin: auto;
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 6px;
  max-width: 520px;
  min-width: 360px;
  ${({theme:e})=>e.typography.body}

  &:focus {
    outline: none;
  }
`,uv=i(Gm)`
  width: 440px;
`,_m=o=>{var r=o,{small:e}=r,t=M(r,["small"]);return e?B.createElement(uv,d({},t)):B.createElement(Gm,d({},t))},qm=i.div`
  padding: 16px 16px 12px 16px;
  ${({clean:e,theme:t})=>!e&&k`
      border-bottom: 1px solid ${t.palette.base.shade4};
    `};
  ${({theme:e})=>e.typography.title};
  display: flex;
  align-items: center;
`,Zm=i.div`
  ${({isText:e})=>e&&k`
      padding: 20px 16px;
    `}
`,Ym=i.div`
  padding: 16px 12px;
  padding-top: 4px;
  ${({clean:e,theme:t})=>!e&&k`
      border-top: 1px solid ${t.palette.base.shade4};
      padding-top: 16px;
    `}
`;var Cv=({"data-qa-anchor":e="",size:t="",className:o,onOverlayClick:r=()=>{},onCancel:n,title:a,footer:s,clean:l,children:m})=>{let p=useRef(null);useEffect(()=>{var c;(c=p==null?void 0:p.current)==null||c.focus();},[p==null?void 0:p.current]);let u=typeof m=="string"||(m==null?void 0:m.type)==="FormattedMessage";return B.createElement($m,{onClick:r},B.createElement(_m,{small:t==="small",tabIndex:0,className:o,ref:p,"data-qa-anchor":e},(a||n)&&B.createElement(qm,{clean:l},a,n&&B.createElement(Vm,{onClick:n})),B.createElement(Zm,{isText:u},m),s&&B.createElement(Ym,{clean:l},s)))},ke=Cv;var Qm=i(ke)`
  max-width: 360px;
`,Wm=i.div`
  display: flex;
  justify-content: flex-end;
`,Km=i(Y)`
  color: white;
  background: ${({theme:e})=>e.palette.alert.main};
  &:hover {
    background: ${({theme:e})=>e.palette.alert.main};
  }
`,Jm=i(F)`
  margin-right: 10px;
`;var yv=({"data-qa-anchor":e="",className:t,title:o,content:r,okText:n="Ok",onOk:a,OkButton:s=Km,cancelText:l="Cancel",CancelButton:m=Jm,onCancel:p,type:u="confirm"})=>B.createElement(Qm,{"data-qa-anchor":`confirm-modal-${e}`,clean:!0,className:t,title:o,footer:B.createElement(Wm,null,u==="confirm"&&B.createElement(m,{"data-qa-anchor":"confirm-modal-cancel-button",onClick:p},l),B.createElement(s,{"data-qa-anchor":`confirm-modal-${e}-ok-button`,onClick:a},n)),onCancel:p},r),S2,Xm=()=>{let[e,t]=useState(null);if(S2=n=>{t(n);},!e)return null;let o=()=>t(null),r=n=>()=>{o(),n&&n();};return B.createElement(yv,w(d({},e),{onCancel:r(e.onCancel),onOk:r(e.onOk)}))},re=e=>S2(w(d({},e),{type:"confirm"})),gt=e=>S2(w(d({},e),{type:"info",OkButton:Y}));var Rm={socialCommunityCreationButtonVisible:!0},e4=createContext(Rm),t4=()=>useContext(e4);function T2({children:e,config:t}){let o=useMemo(()=>d(d({},Rm),t),[t]);return B.createElement(e4.Provider,{value:o},e)}var o4={"general.action.cancel":"Cancel","general.action.accept":"Accept","general.action.decline":"Decline","general.action.discard":"Discard","general.error.tryAgainLater":"Something went wrong. Please try again later.",hello:"Hello World","plural.like":"{amount, plural, one {like} other {likes}}",comment:"Comment","plural.comment":"{amount, plural, one {comment} other {comments}}","plural.member":"{amount, plural, one {member} other {members}}",selectACategory:"Select a category",todaysTrendingTitle:"Today's Trending",loadMore:"Load More",categoryList:"Categories",recommendedList:"Recommended for you","exploreHeader.searchCommunityTitle":"Explore communities","exploreHeader.searchCommunityPlaceholder":"Search communities...","exploreHeader.createCommunityTitle":"or create your own!","exploreHeader.createCommunityButton":"Create community",backTitle:"Back",createCommunity:"Create Community",moderator:"Moderator","moderatorMenu.promoteToModerator":"Promote to moderator","moderatorMenu.dismissModerator":"Dismiss moderator","moderatorMenu.removeFromCommunity":"Remove from community","post.readMore":"...Read more","post.editPost":"Edit post","post.deletePost":"Delete post","post.confirmDelete":"This post will be permanently deleted. You\u2019ll no longer to see and find this post. Continue?","post.confirmPendingDelete":"This post will be permanently deleted from the pending list","post.edited":"Edited","post.like":"Like","post.liked":"Liked","post.unknownPost.description":"We couldn\u2019t recognize this post.","post.unknownPost.title":"Something went wrong","post.renderingError.description":"We couldn\u2019t render this post.","post.renderingError.title":"Something went wrong","post.community":"Community","post.myTimeline":"My Timeline","post.wasLive":"was live","post.success.approved":"Post approved","post.success.declined":"Post declined","post.success.submittedToReview":"Your post has been submitted to review by moderator","post.error.cannotReview.title":"Post is not available","post.error.cannotReview.description":"The post has been reviewed by another moderator","post.discard.title":"Discard post?","post.discard.content":"Do you want to discard your post?","collapsible.viewAll":"View all","collapsible.viewAllFiles":"View all files","collapsible.viewMoreComments":"View more comments","collapsible.viewMoreReplies":"View more replies","community.createSuccess":"Your community was successfully created","community.updateSuccess":"Your community was successfully updated","community.editProfile":"Edit profile","community.join":"Join","community.communitySettings":"Community Settings","community.returnTo":"Return to {communityName}","community.leaveCommunityTitle":"Leave community?","community.leaveCommunityBody":"You won\u2019t no longer be able to post and interact in this community after leaving.","community.leaveCommunityBodyLastMember":"As you\u2019re the last moderator and member, choose close community to leave.","community.leaveCommunityBodyOnlyModerator":"You\u2019re the only moderator in this group. Nominate other members before leaving community.","community.leaveCommunityButtonText":"Leave","community.leaveCommunityButtonOK":"OK","community.cannotInteract":"Join community to interact with all posts","community.removeUserFromCommunityTitle":"Remove user from community","community.removeUserFromCommunityBody":"This user won't no longer be able to search, post. Continue?","community.name":"Community name","community.about":"About","community.category":"Category","community.onlyadmincanpost":">Only admin can post","community.onlyadmins":"Choose to allow Only Admins to create posts in this community.","community.categorypermission":"Community permission","community.addmembers":"Add members","community.posts":"posts","community.members":"members","community.settings":"Settings","community.leaveCommunity":"Leave Community","CommunityMembers.members":"Members","CommunityMembers.moderators":"Moderators","EmptyFeed.TargetType.globalFeed":"This feed is empty","EmptyFeed.TargetType.communityFeed":"This community's feed is empty","EmptyFeed.TargetType.userFeed":"This user's feed is empty","EmptyFeed.TargetType.myFeed":"Your feed is empty. Start your first post","EmptyFeed.exploreCommunity":"Explore Community","UserFeed.tabs.timeline":"Timeline","community.exploreCommunities":"Explore Community","community.permissions.postReview":"Post review","community.permissions.approvePosts":"Approve member posts","community.permissions.approvePosts.prompt":"Posts by members have to be reviewed and approved by community moderator.","community.permissions.error.needApprovalOnPostCreation.turnOn":"Unable to turn on post review","community.permissions.error.needApprovalOnPostCreation.turnOff":"Unable to turn off post review","community.review.declinePendingPosts":"Decline pending post will permanently delete the selected post from community.","community.pendingPostsBanner.title":"Pending posts","community.pendingPostsBanner.pendingForReview":"Your posts are pending for review","community.pendingPostsBanner.needApproval":"{formattedAmount} {amount, plural, one {post needs} other {posts need}} approval","communityCreatedModal.title":"Customize your community","communityCreatedModal.message":"You\u2019ve successfully created a community! Now let's manage permissions that work best for you","communityCreatedModal.goToSettings":"Community settings","communityCreatedModal.skip":"Skip for now",post:"Post","upload.attachmentLimit":"You reached the maximum attachment of {maxFiles}","upload.fileSizeLimit":"One of the selected file is larger than 1GB. Please select a new file.","user.editProfile":"Edit profile","user.message":"Message","follow.placeholder.noFollowings":"No followings found","follow.placeholder.noFollowers":"No followers found","ProfileSettings.editProfile":"Edit profile","ProfileSettings.returnTo":"Return to ","SideSectionMyCommunity.myCommunity":"My Community","file.reUpload":"Click to re-upload the file","UserProfileForm.displayname":"Display name","UserProfileForm.about":"About","UserProfileForm.title":"General","UserProfileForm.namePlaceholder":"Enter user display name","UserProfileForm.requiredDisplayName":"Display name is required","UserProfileForm.requiredDescription":"Enter something about yourself","UserSelector.placeholder":"Select user...","report.reportUser":"Report user","report.unreportUser":"Unreport user","report.reportComment":"Report comment","report.unreportComment":"Unreport comment","report.reportSent":"Report sent","report.unreportSent":"Unreport sent","comment.deleted":"This comment has been deleted","comment.delete":"Delete comment","comment.edit":"Edit comment","comment.deleteConfirmContent":"This comment will be permanently deleted. Continue?","comment.deleteConfirmCancelText":"Cancel","comment.deleteConfirmOkText":"Delete","dropdown.first":"First","dropdown.second":"Second","layout.logout":"Log Out","layout.username":"Jackies","chat.details.chatDetailes":"Chat Detail","chat.details.communityName":"Community Name","message.flag":"flag","message.unflag":"Unflag","message.edit":"Edit","message.delete":"Delete","message.deleted":"deleted","message.unsupportedFormat":"Unsupported message format","message.saveOptionsError":"There was an error processing your request","MessageComposeBar.placeholder":"Type your message...","RecentChat.chats":"Chats","AddMemberModal.addMembers":"Add members","AddMemberModal.membersValidationError":"Please select at least one member",add:"Add",save:"Save",close:"Close",reply:"Reply",delete:"Delete",create:"Create",cancel:"Cancel",loading:"Loading...",anonymous:"Anonymous","comment.edited":"Edited","comment.readmore":"...Read more","communities.nocommunityfound":"No community found","profile.setting":"Profile Settings","sidesectioncommunity.newfeed":"NewsFeed","sidesectioncommunity.explore":"Explore","sidesectioncommunity.community":"Community","communityFeed.join":"Join community to interact with all posts","communityFeed.members":"Members","communityFeed.moderators":"Moderators","files.all":"View all files","sidebar.community":"Community","CategoryCommunitiesList.emptyTitle":"It's empty here...","CategoryCommunitiesList.emptyDescription":"No community found in this category","CommentComposeBar.addComment":"Add comment","CommentComposeBar.replayTo":"Reply to ","CommentComposeBar.saySomething":"Say something nice","CommentComposeBar.unableToPost":"Unable to post","CommentComposeBar.overCharacter":"You have reached maximum 50,000 characters in a post.","CommentComposeBar.done":"Done","CommentComposeBar.unableToMention":"Unable to mention","CommentComposeBar.overMentionees":"You have reached maximum 30 mentioned users in a post.","CommentComposeBar.okText":"OK","CommunityCreationModal.title":"Leave without finishing?","CommunityCreationModal.content":"Your progress won\u2019t be saved. Are you sure to leave this page now?","CommunityCreationModal.cancelText":"Continue editing","CommunityCreationModal.okText":"Leave","PostAsCommunity.title":"Post as community","PostAsCommunity.caption":"Enable this will publish the post on behalf of community account","AddMemberAction.title":"Add members","AddMemberAction.description":"Add your friends to this community to participate in group conversations","CloseCommunityAction.closeConfirm.title":"Close community?","CloseCommunityAction.closeConfirm.description":"All members will be removed from the community. All posts, messages, reactions and media shared in community will be deleted. This cannot be undone.","CloseCommunityAction.title":"Close community","CloseCommunityAction.description":"Closing this community will remove the community page and all its content and comments. This cannot be undone.","report.doReport":"Report","report.undoReport":"Undo Report","comment.deleteBody":"This comment will be permanently deleted. Continue?","reply.delete":"Delete reply","reply.deleteBody":"This reply will be permanently deleted. Continue?","reply.edit":"Edit reply","reply.deleted":"This reply has been deleted","tabs.editProfile":"Edit profile","tabs.timeline":"Timeline","tabs.followers":"Followers","tabs.followings":"Followings","tabs.pending":"Pending","tabs.members":"Members","tabs.moderators":"Moderators","tabs.pendingPosts":"Pending {amount, select, 0 {} other { ({formattedAmount})}}","tabs.permissions":"Permissions","tabs.gallery":"Gallery","tabs.images":"Photos","tabs.videos":"Videos","tabs.liveStreams":"Livestreams","feed.emptyFeed":"This feed is empty","feed.emptyCommunityPublicFeed":"This community's feed is empty","feed.emptyCommunityReviewingFeed":"No pending posts","feed.emptyJoinedCommunityPublicFeed":"Your feed is empty. Start you first post","feed.emptyUserFeed":"No posts yet","feed.emptyMyFeed":"Your feed is empty. Start your first post","chat.groupSetting":"Group settings","chat.message.deleted":"Message was deleted","chat.message.unsupported":"Unsupported message type","chat.chats":"Chats","chat.details.header":"Chat Details","chat.details.chatName":"Chat Name","chat.leaveChat":"Leave chat","chat.leaveChat.confirm.title":"Leave chat","chat.leaveChat.confirm.content":"Are you sure you want to leave the chat?","chat.leaveChat.confirm.okButton":"Leave","chat.leaveChat.success":"You successfully left chat","chat.leaveChat.error":"Attempt to leave a chat has failed","chat.members.return":"Return to controls","chat.members.count":"{count} members","chat.create.modalTitle":"Create new chat","userSelector.placeholder":"Enter name or email addresses","userSelector.emptyState.title":"It's empty here...","userSelector.emptyState.description":"No contact found here","groupChat.createPopup.fieldName":"Group name","groupChat.createPopup.placeholder":"Please input group name","general.cancel.capital":"Cancel","general.create.capital":"Create","general.done.capital":"Done","chat.member.addMore":"Add or Remove user","video.notReady":"The video is being processed. Please try again later.","liveStream.idle":"This stream is currently unavailable","liveStream.ended.caption":"This liveStream has ended.","liveStream.ended.message":"Playback will be available for you to watch shortly.","user.follow":"Follow","user.unfollow":"Unfollow","user.unfollow.confirm.title":"Unfollow {displayName}","user.unfollow.confirm.body":"You\u2019ll have to send a request again to follow {displayName}. Continue?","user.cancel_follow":"Cancel request","placeholder.noResults":"No results found","request.accept":"Accept","request.decline":"Decline","follower.title.removeUser":"Remove {displayName} from followers?","follower.body.removeUser":"We will not notify {displayName} that they've been removed from your followers","follower.menuItem.removeUser":"Remove user","follower.menuItem.unfollow":"Unfollow","buttonText.cancel":"Cancel","buttonText.remove":"Remove","follow.pendingNotification.title":"Pending requests","follow.pendingNotification.body":"Your requests are waiting for review","notification.done":"Done","counter.followings":"following","counter.followers":"followers","buttonText.unfollow":"Unfollow","privateFeed.title":"This account is private","privateFeed.body":"Follow this user to see all posts","navigationBlocker.title":"Unsaved changes","navigationBlocker.content":"Your changes won`t be saved. Are you sure you want to leave this page now?","user.unfollow.confirm.title.thisUser":"Unfollow this user","mediaGallery.images.empty":"No photos yet","mediaGallery.liveStreams.empty":"No liveStreams yet","mediaGallery.videos.empty":"No videos yet","user.unfollow.confirm.body.thisUser":"You\u2019ll have to send a request again to follow this user. Continue?","navigationBlocker.okText":"Leave","options_composer.button.add":"Add Option","options_composer.title":"Create at least 2 options","poll_modal.answer_type.title":"Selection type","poll_modal.answer_type.body":"Choose to vote with one or multiple options","poll_modal.closed_in.title":"Schedule poll (Optional)","poll_modal.closed_in.body":"Poll will be automatically closed at the end of chosen time frame (UTC)","select.answerType.item":"{answerType} selection","poll_composer.question.label":"Poll options","poll_composer.question.placeholder":"What\u2019s your poll question?","poll_composer.poll_options.label":"Options","poll_modal.title":"Create poll","poll.votes":"{voteCount} votes","poll.vote.closedIn":"Poll ends in {closedIn} days","poll.vote.finalResults":"Final results","poll.vote.submit":"Submit vote","poll.error.deletedOrClosed":"This poll has been closed or deleted.","poll.close":"Close poll","postCreator.unableToPost":"Unable to post","postCreator.overCharacter":"You have reached maximum 50,000 characters in a post.","postCreator.done":"Done","postCreator.unableToMention":"Unable to mention","postCreator.overMentionees":"You have reached maximum 30 mentioned users in a post.","postCreator.okText":"OK","pollComposer.unableToMention":"Unable to mention","pollComposer.overMentionees":"You have reached maximum 30 mentioned users in a post.","pollComposer.okText":"OK","select.chatType.item":"{answerType} type","chatComposer.label.channelId":"Channel ID","chatComposer.label.displayName":"Display Name","chatComposer.label.type":"Channel Type","chatComposer.addUsers":"Add users","chat_modal.title":"Create chat","chat_composer.placeholder.displayName":"Enter display name here","chat_composer.placeholder.channelId":"Enter channel ID here","editChatMembersModal.title":"Add/Edit chat members","editChatMembersModal.confirm.title":"Leave without finishing?","editChatMembersModal.confirm.content":"Your progress won\u2019t be saved. Are you sure to leave this page now?","editChatMembersModal.confirm.cancelText":"Continue editing","editChatMembersModal.confirm.okText":"Leave"};var N1={en:o4};var r4="en",Sv=({locale:e,children:t})=>{let o=N1[e]?N1[e]:N1[r4];return B.createElement(IntlProvider,{defaultLocale:r4,locale:e,messages:o},t)},n4=Sv;var Tv={palette:{alert:"#FA4D30",base:"#292B32",primary:"#1054DE",secondary:"#FFD400",tertiary:"#FF305A",neutral:"#17181C",highlight:"#1054DE",system:{borders:"#ebecef",background:"#fff"}},typography:{global:{fontFamily:"Inter, -apple-system, BlinkMacSystemFont, Arial, sans-serif",fontStyle:"normal"},headline:{fontWeight:600,fontSize:"20px"},title:{fontWeight:600,fontSize:"16px"},body:{fontWeight:"normal",fontSize:"14px"},bodyBold:{fontWeight:600,fontSize:"14px"},caption:{fontWeight:"normal",fontSize:"12px"},captionBold:{fontWeight:600,fontSize:"12px"}}},i4=Tv;function E1(e){return (e==null?void 0:e.communityMembership)==="member"}function k1(e){return (e==null?void 0:e.userPrivacySetting)==="private"}function a4(e){return (e||[]).map((t,o)=>{var r;return {id:t.userId,display:(r=t.displayName)!=null?r:t.userId,avatar:t.avatarCustomUrl,isLastItem:(e==null?void 0:e.length)===o+1}})}var L1=1;function Ev(e,t,o){let r=o+L1,n=r+t;return e.substring(r,n)}function F1(e){return e?e.sort((o,r)=>o.index-r.index).map(({index:o,length:r})=>({start:o,end:o+r+L1,highlight:!0})):[]}function A1(e){let t={},o=[];return (e==null?void 0:e.length)>0?(t.mentioned=[...e.sort((r,n)=>r.plainTextIndex-n.plainTextIndex).map(({plainTextIndex:r,id:n,display:a})=>({index:r,length:a.length-L1,type:"user",userId:n}))],o.push({type:"user",userIds:e.map(({id:r})=>r)})):o.push({type:"user",userIds:[]}),{metadata:t,mentionees:o}}function D1(e,t){if(!e||Nv(t==null?void 0:t.mentioned))return e;let o=e;return ((t||{}).mentioned||[]).sort((r,n)=>n.index-r.index).forEach(({userId:r,length:n,index:a})=>{let s=`@[${Ev(e,n,a)}](${r})`;o=o.replace(new RegExp(`(.{${a}}).{${n+L1}}`),`$1${s}`);}),o}function ue(e){return e!=null}var m4=e=>e.toFixed(1),s4=e=>{let t=Math.min(e*100,100);return m4(t)};function Lv(e){return e.alpha!==void 0}var d4=e=>{let{hue:t,saturation:o,lightness:r}=e,n=[`${m4(t)}`,`${s4(o)}%`,`${s4(r)}%`];return Lv(e)?`hsla(${[...n,e.alpha].filter(ue).join(",")})`:`hsl(${n.filter(ue).join(",")})`},Fv=e=>{let t=parseToHsl(e);return d4(t)},Av=(e,t)=>{let o=parseToHsl(t),{lightness:r}=o,n=w(d({},o),{lightness:Math.min(1,r+e)});return d4(n)},Dv=[.25,.4,.5,.75],p4=e=>{let a=e,{system:t}=a,o=M(a,["system"]),r=Object.keys(o).reduce((s,l)=>(s[l]={main:Fv(o[l])},s),d({},o)),n=Object.keys(r).reduce((s,l)=>{let m=o[l],p=Dv.reduce((c,g,f)=>{let C=`shade${f+1}`;return c[C]=Av(g,m),c},{}),u=r[l];return u&&typeof u=="object"?s[l]=d(d({},p),u):s[l]=w(d({},p),{main:u}),s},d({},r));return w(d({},n),{system:t})};var Bv=["fontFamily","fontStyle","fontWeight","fontSize"],zv=e=>Object.keys(e).reduce((o,r)=>{let n=e[r];return r&&n&&Bv.includes(r)&&(o[r]=n),o},{}),c4=e=>Object.keys(e).reduce((o,r)=>(o[r]=zv(d(d({},e.global),e[r])),o),{});var Uv=(e={})=>{let t=Ov(i4,e),o=p4(t.palette),r=c4(t.typography);return w(d({},t),{palette:o,typography:r})},u4=Uv;var f4=i.div`
  ${({theme:e})=>e.typography.body};
  color: ${({theme:e})=>e.palette.base.main};
  width: 100%;
  height: 100%;
  overflow: hidden;
  input,
  div {
    box-sizing: border-box;
  }

  // CSS resets to avoid inheriting from other other libraries e.g. antd.
  & * {
    font-size: ${({theme:e})=>e.typography.body.fontSize};
    line-height: 1.5;
  }

  & pre {
    ${({theme:e})=>e.typography.body}
  }
`;var B1=createContext({client:null,currentUserId:void 0,userRoles:[]});var z1=()=>useContext(B1),G=z1;var g4=createContext({subscribe:({fetcher:e,params:t,callback:o,config:r})=>({unsubscribe:()=>{}})}),E2=()=>useContext(g4);function k2({children:e}){let t=useRef({}),o=useRef({}),r=useRef({}),{currentUserId:n}=G();function a(l,m){return `${n}.${l}.${JSON.stringify(m)}`}useEffect(()=>()=>{Object.values(o.current).forEach(l=>l());},[]);let s=({fetcher:l,params:m,callback:p,config:u})=>{if(n==null)return {unsubscribe(){}};let c=a(l.name,m);if(t.current[c]&&r.current[c])p==null||p(r.current[c]),t.current[c].push(p);else {t.current[c]=[p];let g=l(m,f=>{r.current[c]=f,(t.current[c]||[]).forEach(v=>v(f));},u);o.current[c]=g;}return {unsubscribe(){let g=t.current[c].find(f=>f===p);g&&(t.current[c]=t.current[c].filter(f=>f!==g));}}};return B.createElement(g4.Provider,{value:{subscribe:s}},e)}var C4=createContext({subscribe:({fetcher:e,params:t,callback:o=()=>{},options:r})=>({unsubscribe:()=>{}})}),F2=()=>useContext(C4);function A2({children:e}){let t=useRef({}),o=useRef({}),r=useRef({}),{currentUserId:n}=G();function a(l,m){return `${n}.${l}.${JSON.stringify(m)}`}useEffect(()=>()=>{Object.values(o.current).forEach(l=>l());},[]);let s=({fetcher:l,params:m,callback:p=()=>{},options:u})=>{if(n==null)return {unsubscribe(){}};let c=a(l.name,m);if(t.current[c])p(r.current[c]),t.current[c].push(p);else {t.current[c]=[p];let g=l(m,f=>{r.current[c]=f,(t.current[c]||[]).forEach(v=>v(f));},u);o.current[c]=g;}return {unsubscribe(){let g=t.current[c].find(f=>f===p);g&&(t.current[c]=t.current[c].filter(f=>f!==g));}}};return B.createElement(C4.Provider,{value:{subscribe:s}},e)}var y4=createContext({fetch:o=>I(void 0,[o],function*({fetchFn:e,params:t}){return yield Promise.resolve({})})}),D2=()=>useContext(y4);function B2({children:e}){let t=useRef({}),o=useRef({});function r(a,s){return `${a}.${JSON.stringify(s)}`}let n=({fetchFn:a,params:s})=>{var c;let l=r(a.name,s);if(((c=t.current[l])==null?void 0:c.length)>0){if(o.current[l]!=null)return Promise.resolve(o.current[l]);let g=()=>{},f=()=>{},C=new Promise((v,y)=>{g=v,f=y;});return t.current[l].push({resolve:g,reject:f}),C}let m=()=>{},p=()=>{},u=new Promise((g,f)=>{m=g,p=f;});return t.current[l]=[{resolve:m,reject:p}],a(...s).then(g=>{o.current[l]=g,t.current[l].forEach(({resolve:f})=>f(g));}).catch(g=>{t.current[l].forEach(({reject:f})=>f(g));}).finally(()=>{setTimeout(()=>{o.current[l]=null,t.current[l]=[];},500);}),u};return B.createElement(y4.Provider,{value:{fetch:n}},e)}var x4=createContext({subscribe:({topic:e,callback:t})=>({unsubscribe:()=>{}})}),M4=()=>useContext(x4);function z2({children:e}){let t=useRef({}),o=useRef({});useEffect(()=>()=>{Object.values(o.current).forEach(n=>n());},[]);let r=({topic:n,callback:a})=>{if(t.current[n])t.current[n].push(a);else {t.current[n]=[a];let s=subscribeTopic(n,(...l)=>{(t.current[n]||[]).forEach(p=>p(...l));});o.current[n]=s;}return {unsubscribe(){let s=t.current[n].find(l=>l===a);s&&(t.current[n]=t.current[n].filter(l=>l!==s));}}};return B.createElement(x4.Provider,{value:{subscribe:r}},e)}function O2({children:e}){return B.createElement(k2,null,B.createElement(A2,null,B.createElement(z2,null,B.createElement(B2,null,e))))}function sx({fetcher:e,params:t,callback:o=()=>{},options:r,shouldCall:n=()=>!0,getSubscribedTopic:a}){let{subscribe:s}=F2(),[l,m]=useState(null),p=useRef(null),u=useCallback(c=>{n&&!n()||t!=null&&(c.data&&m(c.data),o(c));},[n,o]);return useEffect(()=>(a&&(p.current=subscribeTopic(a())),()=>{var c;(c=p.current)==null||c.call(p);}),[a]),useEffect(()=>{if(t==null||n&&!n())return;let{unsubscribe:c}=s({fetcher:e,params:t,callback:u,options:r});return ()=>{c();}},[t,n]),l}var Le=sx;function Ct({fetcher:e,params:t,callback:o=()=>{},options:r,shouldSubscribe:n=()=>!0,getSubscribedTopic:a}){let{subscribe:s}=M4(),l=useRef(null);return Le({fetcher:e,params:t,callback:m=>{let{error:p,loading:u}=m;if(u)return;if(p)throw p;let{unsubscribe:c}=s({topic:a(m),callback:o});l.current=c;},options:r,shouldCall:n}),useEffect(()=>()=>{var m;(m=l.current)==null||m.call(l);},[l]),{unsubscribe:()=>{var m;return (m=l.current)==null?void 0:m.call(l)}}}function fo({userId:e,level:t,shouldSubscribe:o=()=>!0,callback:r}){return Ct({fetcher:UserRepository.getUser,params:e,callback:r,shouldSubscribe:()=>!!e&&o(),getSubscribedTopic:({data:n})=>getUserTopic(n,t)})}var fx=e=>(fo({userId:e,level:SubscriptionLevels.USER}),Le({fetcher:UserRepository.getUser,params:e,shouldCall:()=>!!e})),U=fx;var Wr=Object.freeze({MEMBER:"member",COMMUNITY_MODERATOR:"community-moderator",CHANNEL_MODERATOR:"channel-moderator"}),I4=30,w4=Object.freeze({Uploaded:"uploaded",Transcoding:"transcoding",Transcoded:"transcoded",TranscodeFailed:"transcodeFailed"}),P4="video/mp4";var T4={page:{type:"newsfeed",communityId:void 0},onChangePage:e=>{},onClickCategory:e=>{},onClickCommunity:e=>{},onClickUser:e=>{},onCommunityCreated:e=>{},onEditCommunity:e=>{},onEditUser:e=>{},onMessageUser:e=>{},setNavigationBlocker:()=>{},onBack:()=>{}},vx=o=>{var r=o,{onSuccess:e}=r,t=M(r,["onSuccess"]);return re(w(d({},t),{onOk:e}))};process.env.NODE_ENV!=="production"&&(T4={page:{type:"newsfeed",communityId:void 0},onChangePage:e=>console.log(`NavigationContext onChangePage(${e})`),onClickCategory:e=>console.log(`NavigationContext onClickCategory(${e})`),onClickCommunity:e=>console.log(`NavigationContext onClickCommunity(${e})`),onClickUser:e=>console.log(`NavigationContext onClickUser(${e})`),onCommunityCreated:e=>console.log(`NavigationContext onCommunityCreated(${e})`),onEditCommunity:e=>console.log(`NavigationContext onEditCommunity({${e})`),onEditUser:e=>console.log(`NavigationContext onEditUser(${e})`),onMessageUser:e=>console.log(`NavigationContext onMessageUser(${e})`),onBack:()=>console.log("NavigationContext onBack()")});var N4=createContext(T4),O=()=>useContext(N4);function U2({askForConfirmation:e=vx,children:t,onChangePage:o,onClickCategory:r,onClickCommunity:n,onClickUser:a,onCommunityCreated:s,onEditCommunity:l,onEditUser:m,onMessageUser:p}){let[u,c]=useState([{type:"newsfeed",communityId:void 0}]),g=useMemo(()=>u[u.length-1],[u]),[f,C]=useState(),v=useCallback(()=>I(this,null,function*(){return f?new Promise(A=>{e(w(d({},f),{onSuccess:()=>{C==null||C(void 0),A(!0);},onCancel:()=>A(!1)}));}):!0}),[e,f]),y=useCallback(A=>I(this,null,function*(){(yield v())&&c(_=>[..._,A]);}),[v]),h=()=>{c(A=>A.length>1?A.slice(0,-1):A);},x=o?A=>I(this,null,function*(){(yield v())&&o(A);}):null,T=useCallback(A=>{console.log("handleChangePage",A),y({type:A});},[y]),S=useCallback(A=>{let _={type:"communityfeed",communityId:A};if(x)return x(_);if(n)return n(A);console.log("handleClickCommunity",{communityId:A}),y(_);},[x,n,y]),b=useCallback(A=>{let _={type:"communityfeed",communityId:A,isNewCommunity:!0};if(x)return x(_);if(s)return s(A);console.log("handleCommunityCreated",{communityId:A}),y(_);},[x,s,y]),P=useCallback(A=>{let _={type:"category",categoryId:A};if(x)return x(_);if(r)return r(A);console.log("handleClickCategory",{categoryId:A}),y(_);},[x,r,y]),N=useCallback((A,_)=>{let L={type:_!=null?_:"userfeed",userId:A};if(x)return x(L);if(a)return a(A);console.log("handleClickUser",{userId:A}),y(L);},[x,a,y]),D=useCallback(A=>{let _={type:"useredit",userId:A};if(x)return x(_);if(m)return m(A);console.log("handleEditUser",{userId:A}),y(_);},[x,m,y]),V=useCallback((A,_)=>{let L={type:"communityedit",communityId:A,tab:_};if(x)return x(L);if(l)return l(A,{tab:_});console.log("handleEditCommunity",{communityId:A,tab:_}),y(L);},[x,l,y]),q=useCallback(A=>{let _={type:"conversation",userId:A};if(x)return x(_);if(p)return p(A);console.log("handleMessageUser",{userId:A});},[x,p]);return B.createElement(N4.Provider,{value:{page:g,onChangePage:T,onClickCategory:P,onClickCommunity:S,onClickUser:N,onCommunityCreated:b,onEditCommunity:V,onEditUser:D,onMessageUser:q,onBack:h,setNavigationBlocker:C}},t)}var E4=createContext({}),E=e=>useContext(E4)[e]||null;function j2({children:e,config:t}){return B.createElement(E4.Provider,{value:t},e)}var wx=e=>Le({fetcher:PostRepository.getPost,params:e,shouldCall:()=>!!e}),ot=wx;var L4=k`
  color: ${({theme:e})=>e.palette.primary.main};
`,F4=i(ye)`
  ${({active:e})=>e&&L4}
`,A4=i(qr).attrs({width:16,height:16})`
  font-size: 16px;
  margin-right: 5px;
`,Px=i(A4)`
  ${L4}
`,D4=({isLiked:e})=>e?B.createElement(Px,null):B.createElement(A4,null);var Tx=({onClick:e,isActive:t,isDisabled:o})=>B.createElement(F4,{active:t,disabled:o,"data-qa-anchor":t?"post-liked-button":"post-like-button",onClick:e},B.createElement(D4,{isLiked:t})," ",B.createElement(FormattedMessage,{id:t?"post.liked":"post.like"})),B4=e=>{let t=E("PostLikeButton");return t?t(e):B.createElement(Tx,d({},e))};var zt="like";function O4(e){var t,o;return e==null||((t=e.myReactions)==null?void 0:t.length)===0?!1:(o=e==null?void 0:e.myReactions)==null?void 0:o.includes(zt)}var Lx=({postId:e,onLikeSuccess:t,onUnlikeSuccess:o})=>{let r=ot(e),[n,a]=useState(O4(r));useEffect(()=>{a(O4(r));},[r==null?void 0:r.myReactions]);let s=()=>I(void 0,null,function*(){r!=null&&(n?(yield ReactionRepository.removeReaction("post",r.postId,zt),o==null||o(r),a(!n)):(yield ReactionRepository.addReaction("post",r.postId,zt),t==null||t(r),a(!n)));});return B.createElement(B4,{isActive:n,isDisabled:r==null,onClick:s})},U4=Lx;var Ax=e=>Le({fetcher:CommunityRepository.getCommunity,params:e,shouldCall:()=>!!e}),Ce=Ax;var jx=({targetId:e,targetType:t,remoteText:o,remoteMarkup:r})=>{let n=t==="community",a=Ce(e),[s,l]=useState(o!=null?o:""),[m,p]=useState(r!=null?r:o),[u,c]=useState([]);useEffect(()=>{l(o||""),p(r!=null?r:"");},[o,r]);let g=({text:x,plainText:T,mentions:S})=>{l(T),p(x),c(S);},f=()=>{l(""),p(""),c([]);},C=()=>{l(o||""),p(r),c([]);},v=useCallback(x=>I(void 0,null,function*(){let T,S=x||"",b;return (S.match(/^@$/)||S==="")&&(S=void 0),n&&!(a!=null&&a.isPublic)&&e!=null?T=yield new Promise(P=>{b==null||b(),b=CommunityRepository.Membership.getMembers({communityId:e,search:S,limit:20},N=>{N.loading||P(N.data.map(({user:D})=>D).filter(ue));});}):T=yield new Promise(P=>{b==null||b(),b=UserRepository.getUsers({displayName:S,limit:20,sortBy:"displayName"},N=>{N.loading||P(N.data);});}),a4(T)}),[n,a==null?void 0:a.isPublic,e]),{mentionees:y,metadata:h}=useMemo(()=>{let{mentionees:x,metadata:T}=A1(u);return {mentionees:x,metadata:T}},[u]);return {text:s,markup:m,mentions:u,mentionees:y,metadata:h,onChange:g,clearAll:f,resetState:C,queryMentionees:v}},Jt=jx;var Kr=i.div.attrs(({progress:e})=>({style:{width:`${e||0}%`}}))`
  background: ${({lightMode:e,theme:t})=>e?t.palette.primary.main:t.palette.base.shade4};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.75;
  transition: width 0.4s ease;
  animation: glow 0.8s alternate infinite linear;

  @keyframes glow {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 0.75;
    }
  }
`;var ur={BIG:"big",REGULAR:"regular",SMALL:"small",TINY:"tiny"},Vx=ur.REGULAR,Jr={[ur.BIG]:64,[ur.REGULAR]:40,[ur.SMALL]:32,[ur.TINY]:28},$x=e=>useMemo(()=>e&&Jr[e]?e:Vx,[e]),j4=$x;var qx=l=>{var m=l,{circle:e,borderRadius:t=12,primaryColor:o="#EBECEF",secondaryColor:r="#f3f3f3",duration:n=2,style:a}=m,s=M(m,["circle","borderRadius","primaryColor","secondaryColor","duration","style"]);return B.createElement(_x,w(d({},s),{duration:n,circle:e,style:w(d({},a),{backgroundColor:o,backgroundImage:`linear-gradient(90deg, ${o}, ${r}, ${o})`,borderRadius:e?void 0:t})}))},W=qx;var Zx=a=>{var s=a,{loading:e,size:t,backgroundImage:o,children:r}=s,n=M(s,["loading","size","backgroundImage","children"]);return B.createElement("div",d({},n),e?B.createElement(W,{circle:!0,width:"100%",height:"100%",style:{display:"block"}}):r)},V4=i(Zx)`
  position: relative;
  flex-shrink: 0;
  overflow: hidden;

  border-radius: 50%;

  &.visible img {
    opacity: 1;
  }

  &.clickable {
    &:hover {
      cursor: pointer;
    }
  }

  ${({size:e,backgroundImage:t,theme:o})=>`
    height: ${Jr[e]}px;
    width: ${Jr[e]}px;
    background: ${t||o.palette.base.shade3}};
  `};
`,$4=i.div`
  position: absolute;
  z-index: 2;
  opacity: 0.5;
  background-color: #000000;

  ${({size:e})=>`
    height: ${Jr[e]}px;
    width: ${Jr[e]}px;
  `}
`,V2=i.img.attrs({loading:"lazy"})`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s;
`;i.input.attrs({type:"file"})`
  &&& {
    display: none;
  }
`;i.label``;var Wx=l=>{var m=l,{className:e="",avatar:t=null,showOverlay:o,size:r,onClick:n,loading:a}=m,s=M(m,["className","avatar","showOverlay","size","onClick","loading"]);let[p,u]=useState(!1),c=useCallback(()=>u(!0),[]),g=useCallback(()=>u(!1),[]),f=j4(r);return console.log("UIPostHeader loadingstate",a),B.createElement(V4,d({className:l6(e,{visible:p,clickable:!!n}),loading:a,size:f,onClick:n},s),console.log("UIPostHeader inside avatar container"),t?o?B.createElement($4,d({size:f},s),B.createElement(V2,{src:t,onError:g,onLoad:c})):B.createElement(V2,{src:t,onError:g,onLoad:c}):null)},J=e=>{let t=E("Avatar");return t?t(e):B.createElement(Wx,d({},e))};var Kx=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512"},e),B.createElement("path",{d:`M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256
      8zm141.421 106.579c73.176 73.175 77.05 187.301 15.964 264.865L132.556 98.615c77.588-61.105
      191.709-57.193 264.865 15.964zM114.579
      397.421c-73.176-73.175-77.05-187.301-15.964-264.865l280.829 280.829c-77.588 61.105-191.709
      57.193-264.865-15.964z`})),Xt=i(Kx)`
  fill: ${({theme:e})=>e.palette.base.shade3};
`;var $2={root:null,rootMargin:"0px 0px -15% 0px",threshold:.9},eM=(e,{root:t,rootMargin:o,threshold:r}=$2)=>{let n=useMemo(()=>({root:t,rootMargin:o||$2.rootMargin,threshold:r||$2.threshold}),[t,o,r]),[a,s]=useState(null),l=useRef(new IntersectionObserver(m=>s(m[0]),n));return useEffect(()=>{if(e){let{current:m}=l;return m.observe(e),()=>m.disconnect()}},[e]),useEffect(()=>{if(e){let{current:m}=l;return m.unobserve(e),l.current=new IntersectionObserver(p=>s(p[0]),n),l.current.observe(e),()=>l.current.disconnect()}},[n,o,e]),a},j1=eM;function rM({fetchFn:e,params:t,shouldCall:o=()=>!0}){let[r,n]=useState(null),{fetch:a}=D2();return useEffect(()=>{function s(){o()&&a({fetchFn:e,params:t}).then(l=>{n(l);});}s();},[t]),r}var Z4=rM;var iM=e=>{let t=Z4({fetchFn:FileRepository.getFile,params:[e],shouldCall:()=>!!e});return t==null?void 0:t.data},Ue=iM;var mM=({fileId:e,imageSize:t="medium"})=>{let o=Ue(e),[r,n]=useState(void 0);return useEffect(()=>{if(o==null||e==null){n(void 0);return}function a(){return I(this,null,function*(){let s=yield FileRepository.fileUrlWithSize(o==null?void 0:o.fileUrl,t);n(s);})}a();},[o,t]),r},j=mM;var uM=i.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: ${({focused:e,theme:t})=>e&&t.palette.base.shade4};
  font-weight: 600;
  color: ${({isBanned:e,theme:t})=>e&&t.palette.base.shade2};
  pointer-events: ${({isBanned:e})=>e&&"none"} !important;
  cursor: ${({isBanned:e})=>e&&"no-allowed"} !important;
  max-width: ${({maxWidth:e})=>e||0}px;
`,fM=i.div`
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,gM=({id:e,focused:t,isLastItem:o,loadMore:r,rootEl:n,containerRef:a})=>{var c,g;let s=useRef(null),l=j1(s==null?void 0:s.current,{root:(c=n==null?void 0:n.current)==null?void 0:c.childNodes[0]}),m=U(e),p=j({fileId:m==null?void 0:m.avatarFileId,imageSize:"small"});useEffect(()=>{s&&(l!=null&&l.isIntersecting)&&(r==null||r());},[s,l==null?void 0:l.isIntersecting,r]);let u=useCallback((f,C)=>{C&&(f.target.parentNode.style.cursor="not-allowed",f.target.parentNode.style["pointer-events"]="none");},[]);return B.createElement(uM,{ref:o?s:null,"data-qa-anchor":"social-mention-item",focused:t,isBanned:m==null?void 0:m.isGlobalBanned,maxWidth:(g=a==null?void 0:a.current)==null?void 0:g.clientWidth,onMouseEnter:f=>u(f,m==null?void 0:m.isGlobalBanned)},B.createElement(J,{avatar:p}),B.createElement(fM,null,m==null?void 0:m.displayName),B.createElement("div",{style:{marginLeft:"0.5rem"}},m!=null&&m.isGlobalBanned?B.createElement(Xt,null):null))},Y4=gM;var bM=i.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-width: 1em;
  background: ${({theme:e})=>e.palette.system.background};
  border: 1px solid #e3e4e8;
  border-radius: 4px;
  transition: background 0.2s, border-color 0.2s;

  ${({theme:e})=>e.typography.global}

  &:focus-within {
    border-color: ${({theme:e})=>e.palette.primary.main};
  }

  &.invalid {
    border-color: ${({theme:e})=>e.palette.alert.main};
  }

  &.disabled {
    background: ${({theme:e})=>e.palette.base.shade4};
    border-color: ${({theme:e})=>e.palette.base.shade3};
  }
`,G2=k`
  flex: 1 1 auto;
  display: block;
  width: 1%;
  min-width: 0;
  margin: 0;
  padding: 0.563rem 0.563rem;
  background: none;
  border: none;
  box-sizing: border-box;
  outline: none;
  font: inherit;

  &::placeholder {
    font-weight: 400;
  }

  &[disabled] {
    background: none;
  }
`,IM=i.input`
  ${G2}
`,wM=i(MM)`
  ${G2};
  resize: vertical;
`,PM={suggestions:{zIndex:999,position:"absolute",transform:"translateY(1.25rem)",list:{borderRadius:"0.5rem",maxHeight:"17.5rem",boxShadow:"0 0 0.3rem #A5A9B5",overflow:"auto"}},"&multiLine":{highlighter:{boxSizing:"border-box",overflow:"hidden"}}},SM={position:"relative",color:"#1054DE",pointerEvents:"none",textShadow:"1px 1px 1px white, 1px -1px 1px white, -1px 1px 1px white, -1px -1px 1px white",zIndex:1},TM=i(MentionsInput)`
  padding: 0.5rem;
  width: 100%;
  textarea {
    ${G2}
    resize: vertical;
  }
`,NM=forwardRef(({"data-qa-anchor":e="",id:t,name:o="",value:r="",placeholder:n="",multiline:a=!1,disabled:s=!1,invalid:l=!1,rows:m=1,maxRows:p=3,prepend:u,append:c,onChange:g,onClear:f,onClick:C,onKeyPress:v,className:y,mentionAllowed:h=!1,queryMentionees:x,loadMoreMentionees:T},S)=>{let[b,P]=useState([]),N=useRef(null),D=useRef(null),V=(L,[,],ce,ae)=>{var Ve;let xe=ce.split(" ").pop(),Te=((Ve=xe==null?void 0:xe[0])==null?void 0:Ve.match(/^@/g))||!1;g({text:L.target.value,plainText:ce,lastMentionText:Te?xe:void 0,mentions:ae});},q=L=>{L.key==="Backspace"&&(r==null?void 0:r.length)===0&&(f==null||f());},A=l6(y,{disabled:s,invalid:l}),_={id:t,name:o,value:r,placeholder:n,disabled:s,className:A,"data-qa-anchor":e};return B.createElement(bM,{ref:D,className:A},u,B.createElement("div",{ref:N,id:"mention-input"}),a&&h&&B.createElement(TM,w(d({allowSuggestionsAboveCursor:!0,inputRef:S,rows:m,style:PM},_),{onKeyDown:L=>q(L),onChange:V,onClick:C,onKeyPress:L=>v==null?void 0:v(L)}),B.createElement(Mention,{trigger:"@",data:(L,ce)=>{if(!x)return ce([]);x(L).then(ae=>{ce(ae);});},style:SM,renderSuggestion:({id:L},ce,ae,xe,Te)=>{var Ve;return B.createElement(Y4,{focused:Te,id:typeof L=="number"?`${L}`:L,isLastItem:L===((Ve=b[b.length-1])==null?void 0:Ve.id),containerRef:D,rootEl:N,loadMore:()=>T==null?void 0:T(ce)})},displayTransform:(L,ce)=>`@${ce}`,appendSpaceOnAdd:!0,onAdd:()=>{}})),a?!h&&B.createElement(wM,w(d({ref:S,minRows:m,maxRows:p},_),{onChange:L=>g==null?void 0:g({text:L.target.value,plainText:L.target.value,lastMentionText:"",mentions:[]}),onKeyDown:L=>q(L),onClick:C})):B.createElement(IM,w(d({ref:S},_),{onChange:L=>g==null?void 0:g({text:L.target.value,plainText:L.target.value,lastMentionText:"",mentions:[]}),onKeyDown:L=>q(L),onClick:C})),c)}),W4=NM;var LM=forwardRef((e,t)=>B.createElement(W4,w(d({},e),{ref:t}))),Ge=LM;var K4=i(J)`
  margin-right: 8px;
`,J4=i.div`
  padding-top: 16px;
  padding-bottom: 16px;
  background: ${({theme:e})=>e.palette.system.background};
  display: flex;
  align-items: center;
`,X4=i(Ge).attrs({rows:1,maxRows:15})`
  outline: none;
  flex-grow: 1;
  font: inherit;
  font-size: 14px;
  resize: vertical;
`,R4=i(Y)`
  height: 40px;
  padding: 10px 16px;
  margin-left: 12px;
`;var BM=30,zM=5e4,OM=({className:e,userToReply:t,onSubmit:o,postId:r})=>{let n=ot(r),{currentUserId:a}=G(),s=U(a),l=j({fileId:s==null?void 0:s.avatarFileId,imageSize:"small"}),{text:m,markup:p,mentions:u,mentionees:c,metadata:g,onChange:f,clearAll:C,queryMentionees:v}=Jt({targetId:n==null?void 0:n.targetId,targetType:n==null?void 0:n.targetType}),{formatMessage:y}=useIntl(),h=useRef(null);if(useEffect(()=>{var P;(P=h.current)==null||P.focus();},[]),n==null)return B.createElement(Kr,null);let x=()=>{if(m!==""){if(u&&(u==null?void 0:u.length)>BM)return gt({title:B.createElement(FormattedMessage,{id:"CommentComposeBar.unableToMention"}),content:B.createElement(FormattedMessage,{id:"CommentComposeBar.overMentionees"}),okText:B.createElement(FormattedMessage,{id:"CommentComposeBar.okText"})});if((m==null?void 0:m.length)>zM)return gt({title:B.createElement(FormattedMessage,{id:"CommentComposeBar.unableToPost"}),content:B.createElement(FormattedMessage,{id:"CommentComposeBar.overCharacter"}),okText:B.createElement(FormattedMessage,{id:"CommentComposeBar.done"})});o==null||o(m,c,g),C==null||C();}},T=m==="",S=t?y({id:"CommentComposeBar.replayTo"})+t:y({id:"CommentComposeBar.saySomething"}),b=y(t?{id:"reply"}:{id:"CommentComposeBar.addComment"});return B.createElement(J4,{className:e},B.createElement(K4,{avatar:l,backgroundImage:se}),B.createElement(X4,{ref:h,"data-qa-anchor":"comment-compose-bar-textarea",placeholder:S,value:p,multiline:!0,mentionAllowed:!0,queryMentionees:v,onChange:P=>f==null?void 0:f(P),onKeyPress:P=>P.key==="Enter"&&x()}),B.createElement(R4,{"data-qa-anchor":t?"comment-compose-bar-reply-button":"comment-compose-bar-add-comment-button",disabled:T,onClick:x},b))},Rr=e=>{let t=E("CommentComposerBar");return t?t(e):B.createElement(OM,d({},e))};var ed=i.div`
  color: ${({theme:e})=>e.palette.neutral.shade1};
  ${({theme:e})=>e.typography.body}
`,td=i.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e3e4e8;
  padding: 8px 0;
`,od=i.div`
  display: flex;
  padding: 2px 0;
  border-bottom: 1px solid #e3e4e8;
`,rd=i(v1).attrs({width:16,height:16})`
  position: relative;
  margin-right: 5px;
`,nd=i.div`
  color: ${({theme:e})=>e.palette.base.shade2};
  margin-top: 8px;
`;var jM=e=>Le({fetcher:CommentRepository.getComment,params:e,shouldCall:()=>!!e}),H1=jM;var _2="top",V1="right",gr="bottom",en="left",HM=(e="bottom")=>e===gr?"top: 100%;":e===en?"left: 0px;":e===V1?"right: 0px;":"bottom: 100%;",$1=HM;var id=k`
  color: ${({theme:e})=>e.palette.primary.main};
`,VM=i(ye)`
  background-color: transparent;
  ${({active:e})=>e&&id}

  > :not(:first-child) {
    margin-left: 5px;
  }
`,ad=i(qr).attrs({width:16,height:16})`
  font-size: 16px;
`,$M=i(ad)`
  ${id}
`,GM=({isLiked:e})=>e?B.createElement($M,null):B.createElement(ad,null),_M=({onClick:e,isActive:t,isDisabled:o,totalLikes:r})=>B.createElement(VM,{active:t,disabled:o,onClick:e},B.createElement(GM,{isLiked:t})," ",r&&r>0?B.createElement("span",null,r):""),sd=_M;var qM=({comment:e,onLikeSuccess:t,onUnlikeSuccess:o})=>{let r=!!(e&&e.myReactions&&e.myReactions.includes(zt)),n=(e==null?void 0:e.reactions[zt])||0,a=()=>I(void 0,null,function*(){if(e!=null)try{r?(yield ReactionRepository.removeReaction("comment",e.commentId,zt),o==null||o(e)):(yield ReactionRepository.addReaction("comment",e.commentId,zt),t==null||t(e));}catch(s){console.error("Can't toggle like",s);}});return B.createElement(sd,{isActive:r,isDisabled:e==null,totalLikes:n,onClick:a})},dd=e=>{let t=E("CommentLikeButton");return t?t(e):B.createElement(qM,d({},e))};function ni({userId:e,callback:t,shouldSubscribe:o}){return fo({userId:e,level:SubscriptionLevels.POST_AND_COMMENT,shouldSubscribe:o,callback:t})}function go({communityId:e,level:t,shouldSubscribe:o=()=>!0,callback:r}){return Ct({fetcher:CommunityRepository.getCommunity,params:e,callback:r,shouldSubscribe:()=>!!e&&o(),getSubscribedTopic:({data:n})=>getCommunityTopic(n,t)})}function ii({communityId:e,shouldSubscribe:t=()=>!0,callback:o}){return go({communityId:e,level:SubscriptionLevels.POST_AND_COMMENT,shouldSubscribe:t,callback:o})}var JM=({commentId:e,onLikeSuccess:t,onUnlikeSuccess:o})=>{let r=H1(e);return ni({userId:r==null?void 0:r.targetId,shouldSubscribe:()=>(r==null?void 0:r.targetType)==="user"}),ii({communityId:r==null?void 0:r.targetId,shouldSubscribe:()=>(r==null?void 0:r.targetType)==="community"}),B.createElement(dd,{comment:r,onLikeSuccess:t,onUnlikeSuccess:o})},pd=JM;var RM=i.span`
  cursor: pointer;
  color: ${({theme:e})=>e.palette.primary.main};
`,eb=({children:e,mentionee:t})=>{let{onClickUser:o}=O(),{userId:r}=t;return B.createElement(RM,{"data-qa-anchor":"mention-hilight-tag",onClick:()=>o(r)},e)},G1=eb;var _1=(e,t=[])=>{let o=e.length,r=[],n=(a,s,l)=>{r.push({start:a,end:s,highlight:l});};if(t.length===0)n(0,o,!1);else {let a=0;t.forEach(s=>{n(a,s.start,!1),n(s.start,s.end,!0),a=s.end;}),n(a,o,!1);}return r};var cd=i.a`
  color: ${({theme:e})=>e.palette.primary.shade1};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;var ob=e=>B.createElement(tb,d({componentDecorator:(t,o,r)=>B.createElement(cd,{key:r,target:"blank",rel:"noopener noreferrer",href:t},o)},e)),tn=ob;var ab=(e=!1)=>{let[t,o]=useState(e),r=useRef(null);return useEffect(()=>{let n=r.current;if(n){let a=s=>{o(n.contains(s.target)||document.activeElement===n||s.target===n);};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)}},[r.current]),[r,t]},ai=ab;var lb=(e,t)=>{useEffect(()=>{if(e){let o=new MutationObserver(()=>{let{height:r,width:n}=e.getBoundingClientRect();t({height:r,width:n});});return o.observe(e,{attributes:!0,childList:!0,subtree:!0}),()=>o.disconnect()}},[t,e]);},fd=lb;var cb=()=>{let e=useRef(null),[t,o]=useState({height:0,width:0});return useEffect(()=>{let r=e.current;if(r){let{height:n,width:a}=r.getBoundingClientRect(),s=[n,a].every(m=>m!==void 0),l=n!==t.height||a!==t.width;s&&l&&o({height:n,width:a});}},[e]),fd(e.current,o),[e,t.height,t.width]},gd=cb;var Cd=i.div`
  > *:disabled {
    cursor: default;
    background: ${({theme:e})=>e.palette.base.shade3};
  }
`,hd=i.div`
  position: relative;
  display: block;
`,yd=i.div`
  overflow: hidden;
`,vd=i.div`
  position: absolute;
  z-index: 2;
  ${({position:e})=>$1(e)}
  ${({align:e})=>e&&$1(e)}
  background: ${({theme:e})=>e.palette.system.background};
  ${({fullSized:e})=>e?"width: 100%;":"min-width: 15rem;"}
  ${({scrollable:e,scrollableHeight:t})=>e&&`
    max-height: ${t}px;
    overflow-y: auto;
  `}
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;var fb=200,gb=e=>B.createElement(F,d({},e),B.createElement(Dt,{height:14,width:14})),Cb=({"data-qa-anchor":e="",isOpen:t,renderTrigger:o=gb,children:r,position:n=gr,align:a=en,handleClose:s,fullSized:l=!1,scrollable:m=!1,scrollableHeight:p=fb,parentContainer:u=null,disabled:c=!1,className:g=""})=>{let[f,C]=useState(t),[v,y]=useState(n),[h,x]=ai(t),[T,S]=gd(),b=useCallback(()=>{s?t&&s():C(!1);},[s,t]),P=j1(h.current,{root:u,rootMargin:u?`0px 0px -${Math.ceil(p*100/(u.getBoundingClientRect().height-S))}% 0px`:void 0}),N={onClick:()=>C(!f),disabled:c};return useEffect(()=>{x||b();},[b,x]),useEffect(()=>{C(t);},[t]),useEffect(()=>{var D;(P==null?void 0:P.isIntersecting)===!1?((D=P.boundingClientRect)==null?void 0:D.top)<0?y(gr):y(_2):y(n);},[P,n]),B.createElement(hd,{ref:h,className:g},B.createElement(Cd,{ref:T},o(w(d({},N),{"data-qa-anchor":e}))),(t||f)&&B.createElement(yd,null,B.createElement(vd,{position:v,align:a,fullSized:l,scrollable:m,scrollableHeight:p},r)))},q1=Cb;var Md=i(x1).attrs({width:16,height:16})`
  cursor: pointer;
  margin-left: auto;
`,bd=i(ye)`
  padding: 5px;
  height: 2rem;
  color: ${({theme:e})=>e.palette.neutral.main};
`,Id=i.div`
  cursor: pointer;
  ${({active:e,theme:t})=>e&&`color: ${t.palette.primary.shade1};`};
  padding: 8px 12px;

  &:hover {
    background: #f2f2f4;
  }

  &.danger-zone {
    color: ${({theme:e})=>e.palette.alert.main};
  }
`,wd=i.div`
  ${({pullRight:e})=>e&&"margin-left: auto;"}
`;var yb=({className:e="","data-qa-anchor":t="",icon:o,options:r,position:n=gr,align:a=V1,pullRight:s=!0})=>{let[l,m]=useState(!1),p=()=>m(!l),u=()=>m(!1),c=g=>()=>{u(),g&&g();};return !r||r.length===0?null:B.createElement(wd,{className:e,pullRight:s},B.createElement(q1,{"data-qa-anchor":t,isOpen:l,renderTrigger:g=>B.createElement(bd,w(d({},g),{onClick:p,className:e,icon:o}),o||B.createElement(Md,null)),position:n,align:a,handleClose:()=>m(!1)},r.map(({name:g,action:f,className:C})=>B.createElement(Id,{key:g,"data-qa-anchor":`${t}-${g}`,className:C,onClick:c(f)},g))))},rt=yb;var Pd=i.div`
  color: ${({theme:e})=>e.palette.neutral.shade1};
  ${({theme:e})=>e.typography.caption}
  & > * {
    ${({theme:e})=>e.typography.caption}
  }
`;var Mb=24*60*60*1e3,bb=({className:e,date:t=Date.now()})=>{let o=Date.now()-t;return B.createElement(Pd,{className:e},o<Mb?B.createElement(xb,{date:t}):B.createElement(FormattedDate,{value:t}))},Z1=bb;var Sd=i(J)`
  margin-right: 8px;
`,Td=i(rt)`
  color: ${({theme:e})=>e.palette.neutral.main};
`,Y2=i.div`
  border-bottom: 1px solid #e3e4e8;
`,Ib=e=>e.replace("#","%23"),wb=e=>`<svg xmlns="http://www.w3.org/2000/svg" height="40">
<path d="M20 0 L 20 40" stroke="${Ib(e.palette.base.shade4)}" />
</svg>`,Nd=i.div`
  display: flex;
  color: black;
  padding-top: 16px;
`,Ed=i.div`
  display: flex;
  color: black;
  padding-top: 16px;
  padding-left: 40px;
`;i(Rr)`
  border: none;
  padding: 8px 0 16px;
  background-repeat: no-repeat;
  background-image: ${({theme:e})=>`url('data:image/svg+xml;utf8,${wb(e)}')`};
`;var kd=i.div`
  width: 100%;
`,Ld=i.div`
  word-break: break-all;
  margin-bottom: 5px;
`,Fd=i.div`
  overflow-wrap: anywhere !important;
  word-break: break-word;
  color: ${({theme:e})=>e.palette.neutral.main};
  background-color: ${({theme:e})=>e.palette.base.shade4};
  border-radius: 0 12px 12px 12px;
  padding: 12px;
  display: inline-block;
  white-space: pre-wrap;
  ${({theme:e})=>e.typography.body}
`;i.div`
  margin-left: 8px;
`;var Ad=i.span`
  // react-truncate-markup tries to set to inline-block
  display: inline !important;
  ${({theme:e})=>e.typography.body}
`,Q2=i(Z1)`
  display: inline;
  margin-left: 5px;
  color: ${({theme:e})=>e.palette.base.shade1};
  &::before {
    content: '• ';
  }
  ${({theme:e})=>e.typography.caption}
`,W2=i.span`
  margin-left: 5px;
  color: ${({theme:e})=>e.palette.neutral.shade1};
  &::before {
    content: '• ';
  }
  ${({theme:e})=>e.typography.caption}
`,Dd=i(ye)`
  color: ${({theme:e})=>e.palette.primary.main};
  padding: 0 0 0 4px;

  &:hover {
    background: none;
    text-decoration: underline;
  }
`,Bd=i.div`
  display: flex;
  align-items: center;
  padding: 2px 0;
  margin-left: -10px;
`,zd=i.div`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.palette.base.shade3};
  padding: 16px 0;

  &.reply {
    display: inline-flex;
    margin-left: 40px;
    background: ${({theme:e})=>e.palette.base.shade4};
    color: ${({theme:e})=>e.palette.base.shade2};
    border-radius: 4px;
    margin: 14px 0px;
    padding: 4px 8px 2px 0px;
  }
`,Od=i.div`
  display: inline-flex;
  align-items: center;
  margin: 7px 0px 7px 40px;
  background: ${({theme:e})=>e.palette.base.shade4};
  color: ${({theme:e})=>e.palette.base.shade2};
  border-radius: 4px;
  padding: 4px 8px 2px 0px;
`,K2=i(v2).attrs({width:18,height:18})``,J2=i.div`
  display: flex;
  padding-right: 10px;

  &.reply {
    padding: 4px 10px 4px 4px;
  }
`,X2=i.div`
  display: flex;
  align-items: center;
`,R2=i.span`
  font-size: 14px;
`,Ud=i(p2).attrs({width:16,height:16})`
  margin-right: 5px;
`,jd=i(ye)``,Hd=i.div`
  display: flex;
  flex-direction: column;
`,Vd=i.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;

  > * {
    margin-left: 8px;
  }
`,$d=i(Ge).attrs({rows:1,maxRows:15})`
  outline: none;
  border-radius: 4px;
  resize: none;
  ${({theme:e})=>e.typography.global}
`;var Nb=8,Eb=({text:e,className:t,mentionees:o,maxLines:r=Nb})=>{let[n,a]=useState(!1),s=useMemo(()=>_1(e||"",F1(o)),[o,e]),l=()=>a(!0),m=e?B.createElement(Fd,{"data-qa-anchor":"comment-content",className:t},B.createElement(Gd.Atom,null,s.map(p=>{let u=`${e}-${p.start}-${p.end}`,c=e.substring(p.start,p.end);if(p.highlight){let g=o==null?void 0:o.find(f=>f.index===p.start);return g?B.createElement(G1,{key:u,mentionee:g},c):B.createElement("span",{key:u},c)}return B.createElement(tn,{key:u},c)}))):null;return n?m:m?B.createElement(Gd,{lines:r,ellipsis:B.createElement(Dd,{onClick:l},B.createElement(FormattedMessage,{id:"comment.readmore"}))},m):null},el=Eb;var Lb=({commentId:e,authorName:t,authorAvatar:o,canDelete:r=!1,canEdit:n=!1,canLike:a=!0,canReply:s=!1,canReport:l=!0,createdAt:m,editedAt:p,text:u,markup:c,onClickReply:g,handleReportComment:f,handleEdit:C,startEditing:v,cancelEditing:y,handleDelete:h,isEditing:x,onChange:T,queryMentionees:S,isReported:b,isReplyComment:P,isBanned:N,mentionees:D,metadata:V})=>{let{formatMessage:q}=useIntl(),A=[n?{name:q(P?{id:"reply.edit"}:{id:"comment.edit"}),action:v}:null,l?{name:q(b?{id:"report.undoReport"}:{id:"report.doReport"}),action:f}:null,r?{name:q(P?{id:"reply.delete"}:{id:"comment.delete"}),action:h}:null].filter(ue);return B.createElement(B.Fragment,null,B.createElement(Sd,{avatar:o,backgroundImage:se}),B.createElement(kd,null,B.createElement(Gd,{ellipsis:B.createElement("span",null,"...",B.createElement(Q2,{date:m==null?void 0:m.getTime()}),((p==null?void 0:p.getTime())||0)-((m==null?void 0:m.getTime())||0)>0&&B.createElement(W2,null,B.createElement(FormattedMessage,{id:"comment.edited"}))),lines:2},B.createElement(Ld,null,B.createElement(Ad,null,t),B.createElement(Gd.Atom,null,B.createElement(B.Fragment,null,N&&B.createElement(Xt,{style:{marginLeft:"0.265rem",marginTop:"1px"}}),B.createElement(Q2,{date:m==null?void 0:m.getTime()}),((p==null?void 0:p.getTime())||0)-((m==null?void 0:m.getTime())||0)>0&&B.createElement(W2,null,B.createElement(FormattedMessage,{id:"comment.edited"})))))),x?B.createElement(Hd,null,B.createElement($d,{multiline:!0,mentionAllowed:!0,value:c,queryMentionees:S,onChange:_=>T==null?void 0:T(_)}),B.createElement(Vd,null,B.createElement(F,{"data-qa-anchor":"comment-cancel-edit-button",onClick:y},B.createElement(FormattedMessage,{id:"cancel"})),B.createElement(Y,{"data-qa-anchor":"comment-save-edit-button",onClick:()=>C==null?void 0:C(u)},B.createElement(FormattedMessage,{id:"save"})))):B.createElement(el,{text:u,mentionees:D}),!x&&(a||s||A.length>0)&&B.createElement(Bd,null,a&&B.createElement(pd,{commentId:e}),s&&B.createElement(jd,{"data-qa-anchor":"comment-reply-button",onClick:g},B.createElement(Ud,null)," ",B.createElement(FormattedMessage,{id:"reply"})),B.createElement(Td,{"data-qa-anchor":"comment-options-button",options:A,pullRight:!1,align:en}))))},qd=Lb;var Ab=e=>{let[t,o]=useState(!0),[r,n]=useState(!1);useEffect(()=>{e&&CommentRepository.isCommentFlaggedByMe(e).then(m=>{n(m),o(!1);});},[e]);let a=()=>I(void 0,null,function*(){if(e!=null)try{n(!0),yield CommentRepository.flagComment(e);}catch(m){n(!1);}}),s=()=>I(void 0,null,function*(){if(e!=null)try{n(!1),yield CommentRepository.unflagComment(e);}catch(m){n(!0);}});return {isLoading:t,isFlaggedByMe:r,flagComment:a,unflagComment:s,toggleFlagComment:()=>I(void 0,null,function*(){e!=null&&(r?s():a());})}},Yd=Ab;var Db="global-admin",{COMMUNITY_MODERATOR:Bb,CHANNEL_MODERATOR:zb}=Wr,Ot=e=>{if(!(e!=null&&e.length))return !1;let t=[Bb,zb];return e.some(o=>t.includes(o))},Cr=e=>e!=null&&e.length?e.includes(Db):!1;var Ob=(e,t=!1,o=[])=>{let{currentUserId:r}=G(),n=(e==null?void 0:e.userId)===r,a=!!(e!=null&&e.parentId);return {canDelete:!t&&n||Ot(o),canEdit:!t&&n,canLike:!t,canReply:!t&&!a,canReport:!t&&!n}},Qd=Ob;function ol({commentId:e,shouldSubscribe:t=()=>!0,callback:o}){return Ct({fetcher:CommentRepository.getComment,params:e,callback:o,shouldSubscribe:()=>!!e&&t(),getSubscribedTopic:({data:r})=>getCommentTopic(r)})}var $b=5,Gb=()=>B.createElement(zd,{"data-qa-anchor":"comment-deleted-comment"},B.createElement(J2,null,B.createElement(K2,null)),B.createElement(X2,null,B.createElement(R2,{"data-qa-anchor":"comment-deleted-comment-text"},B.createElement(FormattedMessage,{id:"comment.deleted"})))),_b=()=>B.createElement("div",null,B.createElement(Od,{"data-qa-anchor":"reply-deleted-reply"},B.createElement(J2,{className:"reply"},B.createElement(K2,null)),B.createElement(X2,null,B.createElement(R2,{"data-qa-anchor":"reply-deleted-reply-text"},B.createElement(FormattedMessage,{id:"reply.deleted"})))));function Wd(e){var t;return e==null?"":typeof e.data=="string"?e.data:((t=e==null?void 0:e.data)==null?void 0:t.text)||""}var qb=({commentId:e,readonly:t})=>{var ct;let o=H1(e),r=ot(o==null?void 0:o.referenceId),n=U(o==null?void 0:o.userId),a=Ue(n==null?void 0:n.avatarFileId),{userRoles:s}=G(),{toggleFlagComment:l,isFlaggedByMe:m}=Yd(e),[p,u]=useState(!1),[c,g]=useState(!1),{formatMessage:f}=useIntl(),[C,v]=useState(!1);ol({commentId:e});let{text:y,markup:h,mentions:x,onChange:T,queryMentionees:S,resetState:b,clearAll:P}=Jt({targetId:r==null?void 0:r.targetId,targetType:r==null?void 0:r.targetType,remoteText:Wd(o),remoteMarkup:D1(Wd(o),(o==null?void 0:o.metadata)||{})}),{canDelete:N,canEdit:D,canLike:V,canReply:q,canReport:A}=Qd(o,t,s);if(r==null||o==null)return B.createElement(Kr,null);let _=()=>I(void 0,null,function*(){return l()}),L=(ie,Ie,Ye)=>I(void 0,null,function*(){if(!(o!=null&&o.referenceType)||!(o!=null&&o.referenceId))return;let{referenceType:ut,referenceId:ge}=o;yield CommentRepository.createComment({referenceType:ut,referenceId:ge,data:{text:ie},parentId:e,metadata:Ye,mentionees:Ie});}),ce=(ie,Ie,Ye)=>I(void 0,null,function*(){return e&&CommentRepository.updateComment(e,{data:{text:ie},metadata:Ye,mentionees:Ie})}),ae=()=>I(void 0,null,function*(){return e&&CommentRepository.deleteComment(e)}),xe=()=>I(void 0,null,function*(){try{yield _(),m?Z.success({content:f({id:"report.unreportSent"})}):Z.success({content:f({id:"report.reportSent"})});}catch(ie){ie instanceof Error&&Z.error({content:ie.message});}}),Te=()=>{u(ie=>!ie);},Ve=()=>{g(!0);},Ne=()=>{g(!1),b();},ze=()=>{let{metadata:ie,mentionees:Ie}=A1(x);ce(y,Ie,ie),P(),g(!1);},Me=!!(o!=null&&o.parentId),be=()=>{re({"data-qa-anchor":"delete-comment",title:B.createElement(FormattedMessage,{id:Me?"reply.delete":"comment.delete"}),content:B.createElement(FormattedMessage,{id:Me?"reply.deleteBody":"comment.deleteBody"}),cancelText:f({id:"comment.deleteConfirmCancelText"}),okText:f({id:"comment.deleteConfirmOkText"}),onOk:ae});};if(o==null)return null;if(o!=null&&o.isDeleted)return Me?B.createElement(_b,null):B.createElement(Y2,null,B.createElement(Gb,null));let pt=B.createElement(qd,{commentId:o==null?void 0:o.commentId,authorName:(n==null?void 0:n.displayName)||(n==null?void 0:n.userId)||f({id:"anonymous"}),authorAvatar:a==null?void 0:a.fileUrl,canDelete:N,canEdit:D,canLike:V,canReply:q,canReport:A,isBanned:n==null?void 0:n.isGlobalBanned,createdAt:o!=null&&o.createdAt?new Date(o.createdAt):void 0,editedAt:o!=null&&o.editedAt?new Date(o==null?void 0:o.editedAt):void 0,mentionees:(ct=o==null?void 0:o.metadata)==null?void 0:ct.mentioned,metadata:o==null?void 0:o.metadata,text:y,markup:h,handleReportComment:xe,startEditing:Ve,cancelEditing:Ne,handleEdit:ze,handleDelete:be,isEditing:c,queryMentionees:S,isReported:m,isReplyComment:Me,onClickReply:Te,onChange:T});return Me?B.createElement(Ed,{"data-qa-anchor":"reply"},pt):B.createElement(Y2,null,B.createElement(Nd,{"data-qa-anchor":"comment"},pt),B.createElement(mi,{parentId:o.commentId,referenceType:o.referenceType,referenceId:o.referenceId,readonly:t,isExpanded:C,limit:$b}),p&&B.createElement(Rr,{postId:r==null?void 0:r.postId,userToReply:n==null?void 0:n.displayName,onSubmit:(ie,Ie,Ye)=>{L(ie,Ie,Ye),u(!1),v(!0);}}))},Kd=memo(e=>{let t=E("Comment");return t?t(e):B.createElement(qb,d({},e))});var Jd=i(js).attrs({height:"16px",width:"16px"})``,Xd=i.div`
  display: flex;
  margin-right: 8px;
`;var il=i(F)`
  width: 100%;
  &.text-center {
    justify-content: center;
  }
  color: ${({theme:e})=>e.palette.base.shade2};
  border: 1px solid ${({theme:e})=>e.palette.base.shade4};
  border-radius: 0;

  &.no-border {
    border: none;
  }

  &.comments-button {
    justify-content: flex-start;
    color: black;
    border: none;
    margin-top: 16px;
    padding: 0 0 16px 0;
    border-bottom: 1px solid #e3e4e8;
  }

  &.reply-button {
    width: fit-content;
    background-color: ${({theme:e})=>e.palette.base.shade4};
    color: ${({theme:e})=>e.palette.base.shade1};
    margin: 12px 0px 16px 3rem;
    padding: 5px 12px;
    border-radius: 8px;
    ${({theme:e})=>e.typography.captionBold}
  }
`,Rd=i(Dt).attrs({width:14,height:14})`
  margin-left: 5px;
`;var Wb=({hasMore:e,loadMore:t,text:o="",contentSlot:r,className:n="",prependIcon:a=null,appendIcon:s=B.createElement(Rd,null),isExpanded:l=!0})=>{let{formatMessage:m}=useIntl(),[p,u]=useState(l);return useEffect(()=>u(l),[l]),p?B.createElement(B.Fragment,null,r,e&&B.createElement(il,{className:n,onClick:t},a," ",o||m({id:"loadMore"})," ",s)):p?null:B.createElement(B.Fragment,null,B.createElement(il,{className:n,onClick:()=>u(!0)},a," ",o||m({id:"loadMore"})," ",s))},_e=Wb;function Ut({postId:e,level:t,shouldSubscribe:o=()=>!0,callback:r}){return Ct({fetcher:PostRepository.getPost,params:e,callback:r,shouldSubscribe:()=>!!e&&o(),getSubscribedTopic:({data:n})=>getPostTopic(n,t)})}function eI({fetcher:e,params:t,callback:o=()=>{},config:r,shouldCall:n=()=>!0}){let{subscribe:a}=E2(),[s,l]=useState(!1),[m,p]=useState(n?n():!0),[u,c]=useState([]),[g,f]=useState(!1),C=useRef(null),v=useCallback(()=>{var h;C.current&&(l(!0),(h=C.current)==null||h.call(C));},[C,s,m,p]),y=useCallback(h=>{n()&&(h.data&&c(h.data),p(h.loading),f(h.hasNextPage),C.current=h.onNextPage,o(h));},[n,c,p,f,C,o]);return useEffect(()=>{if(!n())return;let{unsubscribe:h}=a({fetcher:e,params:t,callback:y});return ()=>{h();}},[t,n]),{items:u,hasMore:g,isLoading:m,loadMore:v,loadMoreHasBeenCalled:s}}var ee=eI;function al({parentId:e,referenceId:t,referenceType:o,limit:r=10}){let s=ee({fetcher:CommentRepository.getComments,params:{parentId:e,referenceId:t,referenceType:o,limit:r},shouldCall:()=>!!t&&!!o}),{items:n}=s,a=M(s,["items"]);return d({comments:n},a)}var iI=({parentId:e,referenceId:t,referenceType:o,limit:r=5,readonly:n=!1,isExpanded:a=!0})=>{let{comments:s,hasMore:l,loadMore:m}=al({parentId:e,referenceId:t,referenceType:o,limit:r});Ut({postId:t,level:SubscriptionLevels.COMMENT,shouldSubscribe:()=>o==="post"&&!e});let{formatMessage:p}=useIntl(),u=!!e,c=p(u?{id:"collapsible.viewMoreReplies"}:{id:"collapsible.viewMoreComments"}),g=u?B.createElement(Xd,null,B.createElement(Jd,null)):null;return s.length===0?null:B.createElement(_e,{hasMore:l,loadMore:m,text:c,className:u?"reply-button":"comments-button",prependIcon:g,appendIcon:null,isExpanded:a,contentSlot:s.map(f=>B.createElement(Kd,{key:f.commentId,commentId:f.commentId,readonly:n}))})},mi=memo(iI);var op=5,sI=({post:e,readonly:t,onClickComment:o,isComposeBarDisplayed:r,handleAddComment:n})=>{let{postId:a,targetType:s,targetId:l,reactions:m={},commentsCount:p}=e;Ut({postId:a,level:SubscriptionLevels.POST});let u=m[zt]||0;return B.createElement(ed,null,B.createElement(td,null,u>0&&B.createElement("span",{"data-qa-anchor":"engagement-bar-like-counter"},tp(u||0)," ",B.createElement(FormattedMessage,{id:"plural.like",values:{amount:u}})),p>0&&B.createElement("span",{"data-qa-anchor":"engagement-bar-comment-counter"},tp(p||0)," ",B.createElement(FormattedMessage,{id:"plural.comment",values:{amount:p}}))),t?B.createElement(B.Fragment,null,B.createElement(nd,null,B.createElement(FormattedMessage,{id:"community.cannotInteract"})),B.createElement(mi,{referenceId:a,referenceType:"post",limit:op,readonly:!0})):B.createElement(B.Fragment,null,B.createElement(od,null,B.createElement(U4,{postId:a}),B.createElement(ye,{"data-qa-anchor":"engagement-bar-comment-button",onClick:o},B.createElement(rd,null)," ",B.createElement(FormattedMessage,{id:"comment"}))),B.createElement(mi,{referenceId:a,referenceType:"post",limit:op}),r&&B.createElement(Rr,{postId:a,onSubmit:(c,g,f)=>n==null?void 0:n(c,g,f)})))},rp=e=>{let t=E("UIEngagementBar");return t?t(e):B.createElement(sI,d({},e))};function di({targetId:e,targetType:t,callback:o,shouldSubscribe:r=()=>!0}){let{unsubscribe:n}=ni({userId:e,shouldSubscribe:()=>r()&&t==="user",callback:o}),{unsubscribe:a}=ii({communityId:e,shouldSubscribe:()=>r()&&t==="community",callback:o});return {unsubscribe(){n(),a();}}}var cI=({postId:e,readonly:t=!1})=>{let[o,r]=useState(!1),n=()=>r(m=>!m),a=()=>r(!1),s=ot(e);return Ut({postId:e,level:SubscriptionLevels.POST}),di({targetType:s==null?void 0:s.targetType,targetId:s==null?void 0:s.targetId,shouldSubscribe:()=>!!s}),s?B.createElement(rp,{post:s,readonly:t,isComposeBarDisplayed:o,handleAddComment:(m,p,u)=>I(void 0,null,function*(){yield CommentRepository.createComment({referenceType:"post",referenceId:e,data:{text:m},mentionees:p,metadata:u}),a();}),onClickComment:n}):null};var sl=memo(e=>{let t=E("EngagementBar");return t?t(e):B.createElement(cI,d({},e))});var uI=i.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${({percent:e})=>e}%;
  overflow: hidden;
`,fI=i.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
`,gI=({className:e,ratio:t=1,children:o,onClick:r})=>B.createElement(uI,{className:e,percent:100*t,onClick:r},B.createElement(fI,null,o)),J1=gI;var CI=i.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  grid-auto-flow: row;
`,hI=i(J1)`
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
  ${({onClick:e})=>e&&"cursor: pointer;"}

  &:hover {
    z-index: 2;
  }
`,yI=({className:e,onClick:t,renderItem:o,items:r=[],itemKey:n})=>B.createElement(CI,{className:e,count:r.length},r.map((a,s)=>B.createElement(hI,{key:`#${n?a[n]:s}`,onClick:()=>t==null?void 0:t(s)},o(a)))),sp=yI;var MI=i.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr calc((100% / 3) / 0.75);
  grid-gap: 0.5rem;
  border-radius: 4px;

  &.one > :nth-child(1) {
    grid-column: 1 / 7;
    grid-row: 1 / 3;
  }

  &.two > :nth-child(1) {
    grid-column: 1 / 4;
    grid-row: 1 / 3;
  }

  &.two > :nth-child(2) {
    grid-column: 4 / 7;
    grid-row: 1 / 3;
  }

  &.three > :nth-child(1),
  &.four > :nth-child(1),
  &.many > :nth-child(1) {
    grid-column: 1 / 7;
    grid-row: 1 / 2;
  }

  &.three > :nth-child(2) {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }

  &.three > :nth-child(3) {
    grid-column: 4 / 7;
    grid-row: 2 / 3;
  }

  &.four > :nth-child(2),
  &.many > :nth-child(2) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  &.four > :nth-child(3),
  &.many > :nth-child(3) {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
  }

  &.four > :nth-child(4),
  &.many > :nth-child(4) {
    grid-column: 5 / 7;
    grid-row: 2 / 3;
  }
`,lp=i.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${({onClick:e})=>e&&"cursor: pointer;"}

  &:hover {
    z-index: 2;
  }
`,bI=i.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  ${({theme:e})=>e.typography.headline}
  pointer-events: none;
`,II=({className:e,onClick:t,renderItem:o,items:r=[],itemKey:n})=>{let a=useMemo(()=>{switch(r.length){case 1:return "one";case 2:return "two";case 3:return "three";case 4:return "four";default:return "many"}},[r.length]);return B.createElement(J1,{ratio:.75,className:e},B.createElement(MI,{className:l6(a),count:r.length},r.slice(0,3).map((s,l)=>B.createElement(lp,{key:`#${n?s[n]:l}`,onClick:()=>t==null?void 0:t(l)},o(s))),r.length>=4&&B.createElement(lp,{key:`#${n?r[3][n]:4}`,onClick:()=>t==null?void 0:t(3)},o(r[3]),r.length>4&&B.createElement(bI,null,"+",r.length-4))))},mp=II;var wI=({className:e,items:t=[],itemKey:o,truncate:r,onClick:n,renderItem:a})=>r||t.length<=4?B.createElement(mp,{className:e,onClick:n,renderItem:a,items:t,itemKey:o}):B.createElement(sp,{className:e,items:t,itemKey:o,onClick:n,renderItem:a}),Oo=wI;var SI=(e,t)=>(useEffect(()=>{let o=r=>{r.stopPropagation(),r.key===e&&(r.preventDefault(),o(r));};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[t]),{removeEventListener:()=>document.removeEventListener("keydown",t)}),nt=SI;var pp=i.div`
  z-index: 9999;
  position: fixed;
  overflow: hidden;

  display: grid;
  grid-gap: 1rem 3rem;
  grid-template-columns: 2rem auto 2rem;
  grid-template-rows: min-content auto;
  grid-template-areas:
    'none counter close'
    'left image right';

  align-items: center;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 3rem;

  background: rgba(0, 0, 0, 0.75);
  color: ${({theme:e})=>e.palette.system.background};

  user-select: none;

  animation-duration: 0.3s;
  animation-name: appear;

  @keyframes appear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;i.img.attrs({loading:"lazy"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;var cp=i.div`
  grid-area: image;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,up=i.div`
  grid-area: counter;
  ${({theme:e})=>e.typography.headline}
  text-align: center;
`,ll=i.button`
  grid-area: ${({rel:e})=>e};
  appearance: none;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: inherit;

  &:hover {
    color: ${({theme:e})=>e.palette.neutral.shade4};
  }
`,fp=e=>B.createElement(ll,d({rel:"left"},e),B.createElement(co,{height:"24px"})),gp=e=>B.createElement(ll,d({rel:"right"},e),B.createElement(cr,{height:"24px"})),TI=e=>B.createElement(ll,d({rel:"close"},e),B.createElement(Oe,{height:"20px"})),Cp=i(TI)`
  background: rgba(0, 0, 0, 0.3);
  height: 43px;
  width: 43px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;var NI=({index:e=0,items:t=[],renderItem:o,onChange:r,showCounter:n=!0})=>{let a=()=>r==null?void 0:r(null),s=()=>r==null?void 0:r(e+1<t.length?e+1:0),l=()=>r==null?void 0:r(e-1>=0?e-1:t.length-1);return nt("ArrowLeft",l),nt("ArrowRight",s),nt("Escape",a),B.createElement(pp,null,B.createElement(cp,null,o(t[e])),n&&B.createElement(up,null,`${e+1} / ${t.length}`),t.length>1&&B.createElement(fp,{onClick:l}),t.length>1&&B.createElement(gp,{onClick:s}),B.createElement(Cp,{onClick:a}))},hp=e=>{let t=E("ImageGallery");return t?t(e):B.createElement(NI,d({},e))};var kI=({progress:e,lightMode:t})=>B.createElement(Kr,{progress:e,lightMode:t}),nn=kI;var X1=i.div`
  position: relative;
  display: inline-block;
  min-width: 2em;
  min-height: 2em;
  width: 100%;
  height: 100%;
  border: ${({theme:e,border:t})=>t&&`1px solid ${e.palette.base.shade4}`};
  border-radius: 4px;
  overflow: hidden;

  .darken {
    opacity: 0.4;
  }
`,yp=i.div`
  position: relative;
  width: 100%;
  height: 100%;
`,vp=k`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({mediaFit:e})=>e!=null?e:"cover"};
  object-position: center;
`,xp=i.img.attrs({loading:"lazy"})`
  ${vp}
`,FI=i.div`
  ${vp};

  display: flex;
  align-items: center;
  justify-content: center;
`,R1=()=>B.createElement(SizeMe,{monitorHeight:!0},({size:e})=>{let t=Math.min((e==null?void 0:e.width)||0,(e==null?void 0:e.height)||0);return B.createElement(FI,null,B.createElement(W,{borderRadius:0,height:t,width:t,style:{display:"block"}}))}),Mp=i(F).attrs({variant:"secondary",children:B.createElement(Oe,null)})`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
`,AI=i(Bt).attrs({width:24,height:24})`
  z-index: 2;
  opacity: 0.7;
`,bp=i(F).attrs({variant:"secondary",children:B.createElement(AI,null)})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`,ui=i.div`
  display: flex;
`;var BI=({className:e,"data-qa-anchor":t="",url:o,progress:r,mediaFit:n,noBorder:a,onRemove:s,isRejected:l,onRetry:m,overlayElements:p})=>{let[u,c]=useState(!1),g=useCallback(C=>{C.preventDefault(),C.stopPropagation(),s&&s();},[s]),f=useCallback(C=>{C.preventDefault(),C.stopPropagation(),m&&m();},[m]);return B.createElement(X1,{className:e,border:!a,"data-qa-anchor":t},B.createElement(yp,null,o?B.createElement(xp,{src:o,mediaFit:n,className:l?"darken":void 0,onError:()=>c(!0)}):B.createElement(R1,null),B.createElement(ui,null,(!!l||u)&&B.createElement(bp,{onClick:f}),!!s&&B.createElement(Mp,{onClick:g}),p)),!Number.isNaN(r)&&B.createElement(nn,{progress:(r||0)*100}))},ea=BI;var OI=({className:e,"data-qa-anchor":t="",file:o,progress:r=-1,mediaFit:n,noBorder:a,onRemove:s,isRejected:l,retry:m=()=>{},overlayElements:p})=>{if(o==null)return null;let u=URL.createObjectURL(o);return B.createElement(ea,{className:e,"data-qa-anchor":t,url:u,progress:r,mediaFit:n,noBorder:a,isRejected:l,overlayElements:p,onRemove:s,onRetry:()=>m()})},wp=OI;var jI=({className:e,"data-qa-anchor":t="",fileId:o,loading:r=!1,mediaFit:n="cover",noBorder:a,onRemove:s,overlayElements:l=void 0})=>{let m=j({fileId:o});return r||m==null?null:B.createElement(ea,{className:e,"data-qa-anchor":t,url:m,mediaFit:n,noBorder:a,overlayElements:l,onRemove:s})},Pp=jI;function we(e){return "fileId"in e?B.createElement(Pp,d({},e)):"file"in e?B.createElement(wp,d({},e)):null}var ml=({item:e})=>B.createElement(we,{fileId:e==null?void 0:e.data.fileId,"data-qa-anchor":"post-gallery-content-image-thumbnail-item",mediaFit:"cover"}),dl=({item:e})=>B.createElement(we,{fileId:e==null?void 0:e.data.fileId,"data-qa-anchor":"post-gallery-content-image-item",mediaFit:"contain",noBorder:!0});var ta=i(e=>B.createElement("div",d({},e),"LIVE"))`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: ${({theme:e})=>e.palette.tertiary.main};
  border-radius: 0.25rem;
  color: #fff;
`;var Co=i.div`
  position: relative;
  display: inline-block;
  min-width: 2em;
  min-height: 2em;
  width: 100%;
  height: 100%;
  border: ${({theme:e,border:t})=>t&&`1px solid ${e.palette.base.shade4}`};
  border-radius: 4px;
  overflow: hidden;

  .darken {
    opacity: 0.4;
  }
`,Np=i.div`
  position: relative;
  width: 100%;
  height: 100%;
`,Ep=k`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({mediaFit:e})=>e!=null?e:"cover"};
  object-position: center;
`,$I=B.forwardRef((a,n)=>{var s=a,{src:e,mimeType:t,mediaFit:o}=s,r=M(s,["src","mimeType","mediaFit"]);return B.createElement("video",w(d({controls:!0,controlsList:"nodownload"},r),{ref:n,"data-qa-anchor":"video-preview"}),B.createElement("source",{src:e,type:t}),B.createElement("p",null,"Your browser does not support this format of video. Please try again later once the server transcodes the video into an playable format(mp4)."))}),kp=i($I)`
  ${Ep}
  cursor: pointer;
`,GI=i.div`
  ${Ep};

  display: flex;
  align-items: center;
  justify-content: center;
`,Lp=()=>B.createElement(SizeMe,{monitorHeight:!0},({size:e})=>{let t=Math.min(e.width||0,e.height||0);return B.createElement(GI,null,B.createElement(W,{height:t,width:t,style:{display:"block"}}))}),Fp=i(F).attrs({variant:"secondary",children:Oe})`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
`,_I=i(Bt).attrs({width:24,height:24})`
  z-index: 2;
  opacity: 0.7;
`,Ap=i(F).attrs({variant:"secondary",icon:_I})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`,Dp=i.div`
  display: flex;
`;i(Gr)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;var Bp=i(ta)`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;var YI=({url:e,progress:t=-1,mediaFit:o,noBorder:r,onRemove:n,isRejected:a,onRetry:s,mimeType:l,autoPlay:m,isLive:p})=>{let u=useCallback(C=>{C.preventDefault(),C.stopPropagation(),n&&n();},[n]),c=useCallback(C=>{C.preventDefault(),C.stopPropagation(),s&&s();},[s]),[g,f]=useState(null);return useEffect(()=>{if(!(!g||!e||!e.includes("m3u8"))&&!(g!=null&&g.canPlayType("application/vnd.apple.mpegurl"))&&fi.isSupported()){let C=new fi;return C.loadSource(e),C.attachMedia(g),C.on(fi.Events.ERROR,(v,y)=>{if(y.fatal)switch(y.type){case fi.ErrorTypes.NETWORK_ERROR:C.startLoad();break;case fi.ErrorTypes.MEDIA_ERROR:C.recoverMediaError();break;}}),()=>C.destroy()}},[g,p,e]),B.createElement(Co,{border:!r},B.createElement(Np,null,e?B.createElement(kp,{key:e,ref:C=>f(C),className:a?"darken":void 0,mediaFit:o,mimeType:l,src:e,autoPlay:m}):B.createElement(Lp,null),B.createElement(Dp,null,p&&B.createElement(Bp,null),!!a&&B.createElement(Ap,{onClick:c}),!!n&&B.createElement(Fp,{onClick:u}))),!Number.isNaN(t)&&B.createElement(nn,{progress:(t||0)*100}))},an=YI;var WI=o=>{var r=o,{file:e}=r,t=M(r,["file"]);if(e==null)return null;let n=URL.createObjectURL(e);return B.createElement(an,d({url:n},t))},Op=WI;var JI=o=>{var r=o,{fileId:e}=r,t=M(r,["fileId"]);let n=Ue(e);if(n==null)return null;let a=(()=>{if(n.status===w4.Transcoded){let{videoUrl:s}=n;return (s==null?void 0:s["1080p"])||(s==null?void 0:s["720p"])||(s==null?void 0:s["480p"])||(s==null?void 0:s["360p"])||(s==null?void 0:s.original)||n.fileUrl}return n.fileUrl})();return B.createElement(an,d({url:a,mimeType:P4},t))},Up=JI;function yo(e){return "fileId"in e?B.createElement(Up,d({},e)):"file"in e?B.createElement(Op,d({},e)):null}var $p=i(F).attrs({variant:"secondary",children:B.createElement(Oe,null)})`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
`,Hp=i(Gr)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Vp=i.div`
  position: absolute;
  left: 0.5rem;
  bottom: 0.5rem;
  padding: 1px 0.25rem;
  border-radius: 0.25rem;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;

  && {
    ${({theme:e})=>e.typography.caption}
  }
`,RI=({className:e,duration:t=0,fileId:o,onRemove:r,overlayElements:n,showPlayIcon:a})=>{let{formatNumber:s}=useIntl(),l=m=>{let p=s(Math.floor(m/60/60),{minimumIntegerDigits:2,maximumSignificantDigits:2}),u=s(Math.floor(m/60%60),{minimumIntegerDigits:2,maximumSignificantDigits:2}),c=s(m%60%60,{minimumIntegerDigits:2,maximumSignificantDigits:2});return p==="00"?`${u}:${c}`:`${p}:${u}:${c}`};return o?B.createElement(we,{"data-qa-anchor":"post-gallery-content-thumbnail",className:e,fileId:o,mediaFit:"cover",overlayElements:B.createElement(B.Fragment,null,n,a&&B.createElement(Hp,{"data-qa-anchor":"post-gallery-content-play-button"}),t!=null?B.createElement(Vp,null,l(t)):null),onRemove:r}):B.createElement(X1,{"data-qa-anchor":"post-gallery-content-thumbnail",className:e},B.createElement(ui,null,n,a&&B.createElement(Hp,{"data-qa-anchor":"post-gallery-content-play-button"}),t!=null?B.createElement(Vp,null,l(t)):null,!!r&&B.createElement($p,{onClick:m=>{m.preventDefault(),m.stopPropagation(),r();}})))},gi=i(RI)`
  background: #ebecef;
`,oa=r=>{var n=r,{fileId:e,videoFileId:t}=n,o=M(n,["fileId","videoFileId"]);var m,p,u,c,g;let a=Ue(e),s=Ue(t),l=typeof((u=(p=(m=s==null?void 0:s.attributes)==null?void 0:m.metadata)==null?void 0:p.video)==null?void 0:u.duration)=="number"?((g=(c=s==null?void 0:s.attributes)==null?void 0:c.metadata)==null?void 0:g.video).duration:void 0;return a==null?null:B.createElement(gi,w(d({},o),{duration:l,fileId:e}))},ew=i.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
  padding-bottom: 56%;
  background: #000;
`,tw=o=>{var r=o,{children:e}=r,t=M(r,["children"]);return B.createElement("div",d({},t),B.createElement(ew,null,e))},Ci=i(tw)`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 825px;
  margin-right: auto;
  margin-left: auto;
`,jo=i.div`
  && {
    position: absolute;
    top: 50%;
    right: 1em;
    left: 1em;
    text-align: center;
    transform: translateY(-50%);
    color: #fff;
  }
`,Gp=({children:e,className:t,onRemove:o})=>B.createElement(Co,{className:t},B.createElement(jo,null,e),B.createElement(ui,null,!!o&&B.createElement($p,{onClick:r=>{r.preventDefault(),r.stopPropagation(),o();}})));var xr=({item:e,showPlayIcon:t,showVideoDuration:o})=>B.createElement(oa,{fileId:e==null?void 0:e.data.thumbnailFileId,showPlayIcon:t,videoFileId:o&&(e==null?void 0:e.data.videoFileId.original)}),pl=({item:e})=>{let t=(e==null?void 0:e.data.videoFileId.high)||(e==null?void 0:e.data.videoFileId.medium)||(e==null?void 0:e.data.videoFileId.low)||(e==null?void 0:e.data.videoFileId.original);return t?B.createElement(yo,{fileId:t,mediaFit:"contain",noBorder:!0}):B.createElement(Co,null,B.createElement(Ci,null,B.createElement(jo,null,B.createElement(FormattedMessage,{id:"video.notReady"}))))};var aw=e=>{let[t,o]=useState(null);return useEffect(()=>{function r(){return I(this,null,function*(){if(e==null)return;let n=yield StreamRepository.getStream(e);o(n.data);})}r();},[e]),t},hi=aw;var qp=i(Bt).attrs({width:24,height:24})`
  && {
    font-size: 24px;
  }
`,Zp=i.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  max-width: calc(100% - 1.5rem);

  > :not(:first-child) {
    margin-top: 0.5rem;
  }
`,Yp=i.div`
  ${({theme:e})=>e.typography.bodyBold};
  color: #fff;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`,Qp=i.div`
  margin-top: 0.5rem;
`,sw=e=>B.createElement(gi,w(d({},e),{overlayElements:B.createElement(jo,null,B.createElement(qp,null),B.createElement(Qp,null,B.createElement(FormattedMessage,{id:"liveStream.idle"})))})),Wp=i(sw)`
  background: #000;
`,Kp=i.div`
  && {
    ${({theme:e})=>e.typography.title}
  }
`,Jp=i.div`
  margin: 2px auto 0 auto;
  max-width: 15.5rem;
`,lw=e=>B.createElement(gi,w(d({},e),{overlayElements:B.createElement(jo,null,B.createElement(Kp,null,B.createElement(FormattedMessage,{id:"liveStream.ended.caption"})),B.createElement(Jp,null,B.createElement(FormattedMessage,{id:"liveStream.ended.message"})))})),Xp=i(lw)`
  background: #000;
`,Rp=i(gi)`
  background: center / 90% no-repeat ${O3} #d9dcec;
`,mw=e=>B.createElement("div",d({},e),"RECORDED"),e5=i(mw)`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0.25rem;
  color: #fff;
`,t5=()=>B.createElement(Co,null,B.createElement(Ci,null,B.createElement(jo,null,B.createElement(qp,null),B.createElement(Qp,null,B.createElement(FormattedMessage,{id:"liveStream.idle"}))))),o5=()=>B.createElement(Co,null,B.createElement(Ci,null,B.createElement(jo,null,B.createElement(Kp,null,B.createElement(FormattedMessage,{id:"liveStream.ended.caption"})),B.createElement(Jp,null,B.createElement(FormattedMessage,{id:"liveStream.ended.message"})))));function dw(e){var t,o,r,n;if(e.status==="live")return (o=(t=e.watcherUrl)==null?void 0:t.hls)==null?void 0:o.url;if(e.status==="recorded")return (n=(r=e==null?void 0:e.recordings)==null?void 0:r.find(a=>a.mp4))==null?void 0:n.mp4.url}var Mr=({item:e,showPlayIcon:t,showLivestreamRecordedBadge:o,showLivestreamTitle:r})=>{var l;let n=hi(e==null?void 0:e.data.streamId),a=Ue(n==null?void 0:n.thumbnailFileId);if(n==null)return null;if(n.status==="idle"||n.isDeleted)return B.createElement(Wp,null);if(n.status==="ended")return B.createElement(Xp,null);let s=(l=n.recordings.find(m=>m.mp4))==null?void 0:l.mp4;return B.createElement(Rp,{duration:s==null?void 0:s.duration,fileId:a==null?void 0:a.fileId,overlayElements:B.createElement(Zp,null,n.status==="live"&&B.createElement(ta,null),o&&n.status==="recorded"&&B.createElement(e5,null),r&&n.title&&B.createElement(Yp,null,n.title)),showPlayIcon:t})},cl=({item:e})=>{var o;let t=hi((o=e==null?void 0:e.data)==null?void 0:o.streamId);return t==null?null:t.status==="idle"||t.isDeleted?B.createElement(t5,null):t.status==="ended"?B.createElement(o5,null):B.createElement(an,{isLive:t.status==="live",mediaFit:"contain",noBorder:!0,url:dw(t)})};function wt(e){return !!e.skeleton}var n5=e=>e.path.split("/user/")[0];var i5=e=>`${n5(e)}/membership/${e._id}/+/+`,a5=e=>`${n5(e)}/membership/+/${e._id}/+`;var uw=({loading:e,loadingMore:t,items:o})=>{let[r,n]=useState(null);return {newItems:useMemo(()=>e?new Array(6).fill({skeleton:!0}):t?[...o||[],...new Array(6).fill({skeleton:!0})]:o,[o,e,t]),index:r,setIndex:n}},fw=({className:e,items:t=[],loading:o=!1,loadingMore:r=!1,showCounter:n=!1,truncate:a=!1,renderVideoItem:s,renderImageItem:l,renderLiveStreamItem:m,renderVideoThumbnail:p,renderImageThumbnail:u,renderLiveStreamThumbnail:c})=>{let{newItems:g,index:f,setIndex:C}=uw({loading:o,loadingMore:r,items:t}),v=h=>{switch(h.dataType){case"image":return u?u(h):B.createElement(ml,{item:h});case"video":return p?p(h):B.createElement(xr,{item:h});case"liveStream":return c?c(h):B.createElement(Mr,{item:h});default:return null}};return B.createElement(B.Fragment,null,B.createElement(Oo,{className:e,items:t,truncate:a,onClick:h=>{wt(t[h])||C(h);},renderItem:h=>h.skeleton?B.createElement(R1,null):v(h)}),f!==null&&B.createElement(hp,{index:f,items:g,showCounter:n,onChange:h=>C(h),renderItem:h=>{switch(h.dataType){case"image":return l?l(h):B.createElement(dl,{item:h});case"video":return s?s(h):B.createElement(pl,{item:h});case"liveStream":return m?m(h):B.createElement(cl,{item:h});default:return null}}}))},br=fw;var s5={aac:Qn,avi:Ws,csv:Ks,doc:Xs,exe:Rs,gif:Zr,html:e2,jpg:Zr,mov:t2,mp3:o2,mp4:r2,mpeg:P1,ogg:Qn,pdf:n2,ppt:S1,pptx:S1,ppx:s2,png:Zr,rar:l2,txt:m2,xls:T1,xlsx:T1,zip:d2,audio:Qn,image:Zr,video:P1},Cw={pptx:["openxmlformats-officedocument.presentationml"],xlsx:["openxmlformats-officedocument.spreadsheetml.sheet"]},hw=o=>{var r=o,{file:e}=r,t=M(r,["file"]);let{name:n,type:a}=e,s=a.toLowerCase(),l=Object.entries(Cw).find(([,u])=>u.find(c=>s.includes(c))),m=l?l[0]:n.slice(n.lastIndexOf(".")+1),p=m in s5?s5[m]:Js;return B.createElement(p,d({},t))},l5=hw;var m5=i.a`
  display: block;
  position: relative;
  border: 1px solid ${({theme:e})=>e.palette.base.shade4};
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
`,d5=i.div`
  position: relative;
  display: grid;
  grid-template-areas: 'icon name size remove';
  grid-template-columns: minmax(min-content, 2em) auto max-content min-content;
  grid-template-rows: 2.5em;
  grid-gap: 0.5em;
  padding: 0.5em;
  align-items: center;
`,p5=i.img.attrs({loading:"lazy"})`
  grid-area: icon;
  width: 2.5em;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border: 1px solid ${({theme:e})=>e.palette.base.shade4};
  border-radius: 4px;
`,c5=i(l5)`
  grid-area: icon;
`,vw=i(Bt).attrs({width:14,height:14})`
  fill: ${({theme:e})=>e.palette.alert.main};
  z-index: 2;
`,u5=e=>B.createElement(F,w(d({},e),{variant:"secondary"}),B.createElement(B.Fragment,null,B.createElement(vw,null)," ",B.createElement(FormattedMessage,{id:"file.reUpload"}))),f5=i.div`
  grid-area: name;
  padding: 0 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({theme:e})=>e.typography.bodyBold}
`,g5=i.div`
  grid-area: size;
  ${({theme:e})=>e.typography.caption};
  color: ${({theme:e})=>e.palette.base.shade1};
`,xw=i(Oe)`
  grid-area: remove;
  z-index: 2;
`,C5=e=>B.createElement(F,w(d({},e),{variant:"secondary"}),B.createElement(xw,null)),h5=i.div`
  display: flex;
`;var Iw=({"data-qa-anchor":e="",name:t,url:o,type:r,size:n,progress:a=-1,onRemove:s,isRejected:l,onRetry:m})=>{useIntl();let u=useCallback(f=>{f.preventDefault(),f.stopPropagation(),s&&s();},[s]),c=useCallback(f=>{f.preventDefault(),f.stopPropagation(),m&&m();},[m]),g=r==null?void 0:r.includes("image");return B.createElement(m5,{href:o,download:!0,"data-qa-anchor":e},B.createElement(d5,null,g&&o?B.createElement(p5,{src:o}):B.createElement(c5,{file:{name:t||"",type:r||""}}),B.createElement(f5,null,t)," ",B.createElement(g5,null,Mw(n||0,{base:2})),B.createElement(h5,null,!!l&&B.createElement(u5,{onClick:c}),!!s&&B.createElement(C5,{"data-qa-anchor":"uploaders-file-remove-button",onClick:u}))),!Number.isNaN(a)&&B.createElement(nn,{progress:(a||0)*100}))},ra=Iw;var Pw=({"data-qa-anchor":e="",file:t,progress:o=-1,onRemove:r,isRejected:n,retry:a=()=>{}})=>{if(t==null)return null;let s=t.type.includes("image")?URL.createObjectURL(t):void 0;return B.createElement(ra,{"data-qa-anchor":e,name:t.name,size:t.size,type:t.type,url:s,progress:o,isRejected:n,onRemove:r,onRetry:()=>a()})},v5=Pw;var Nw=({"data-qa-anchor":e="",fileId:t,onRemove:o})=>{let r=Ue(t);if(!r)return null;let n=FileRepository.fileUrlWithSize(r==null?void 0:r.fileUrl,"small");return B.createElement(ra,{"data-qa-anchor":e,name:r.attributes.name,size:isNaN(Number(r.attributes.size))?0:Number(r.attributes.size),type:r.attributes.mimeType,url:n,onRemove:o})},x5=Nw;function Pt(e){return "fileId"in e?B.createElement(x5,d({},e)):"file"in e?B.createElement(v5,d({},e)):null}var Lw=5,Fw=e=>B.createElement(F,{onClick:e},B.createElement(FormattedMessage,{id:"collapsible.viewAll"})),Aw=({items:e=[],onExpand:t=()=>{},visibleAmount:o=Lw,renderTrigger:r=Fw,renderItem:n})=>{let a=o<e.length?e.slice(0,o):e,[s,l]=useState(o>=e.length),m=()=>{l(!0),t();};return s?B.createElement(B.Fragment,null,e.map(p=>n(p))):B.createElement(B.Fragment,null,a.map(p=>n(p)),r(m))},b5=Aw;var Bw=i.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
`,zw=i.button.attrs({role:"button"})`
  color: ${({theme:e})=>e.palette.highlight.main};
  font-size: 14px;
  border: none;
  outline: none;
  background: none;
  padding: 4px 0 4px 0px;
  text-align: left;

  &:hover {
    cursor: pointer;
    color: ${({theme:e})=>e.palette.highlight.main};
  }
`,Ow=e=>B.createElement(zw,{onClick:e},B.createElement(FormattedMessage,{id:"collapsible.viewAllFiles"})),Uw=({items:e})=>B.createElement(Bw,{"data-qa-anchor":"post-file-list-content"},B.createElement(b5,{items:e,renderTrigger:Ow,renderItem:t=>B.createElement(Pt,{key:t.data.fileId,"item-qa-anchor":"post-file-item",fileId:t.data.fileId})})),I5=Uw;var w5=i.div`
  padding: 14px 0;
  border-radius: 4px;
  border: 1px solid
    ${({theme:e,checked:t})=>t?e.palette.primary.main:e.palette.base.shade4};
  margin-bottom: 12px;
`,P5=i.div`
  padding: 12px;
  border: 1px solid
    ${({theme:e,checked:t})=>t?e.palette.primary.main:e.palette.base.shade4};
  ${({checked:e,theme:t})=>e&&`
    border-left: 5px solid ${t.palette.primary.main};
  `};
  border-radius: 4px;
  margin-bottom: 12px;

  > *:not(:last-child) {
    margin-top: 8px;
  }
`,S5=i.div`
  font-weight: bold;
`,ul=i.div`
  font-weight: 600;
`,T5=i.div`
  display: flex;
  justify-content: space-between;

  :last-child {
    margin-left: auto;
  }

  margin-top: 20px;
  margin-bottom: 12px;
`,N5=i.a.attrs({role:"button"})`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 600;

  ${({disabled:e,theme:t})=>e?t.palette.primary.shade2:t.palette.primary.main};

  &:hover {
    cursor: pointer;
  }
`,E5=i.div`
  display: flex;
  align-items: center;

  > :first-child {
    margin-left: 14px;
  }

  > :last-child {
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
  }
`,k5=i.div`
  margin-left: auto;
  color: ${({theme:e})=>e.palette.base.shade2};
  font-size: 12px;
  font-weight: 400;
`,L5=i.div`
  position: relative;
  width: 100%;
  height: 14px;
  background: ${({theme:e})=>e.palette.base.shade4};
  border-radius: 8px;
  overflow: hidden;
`,F5=i.div`
  position: absolute;
  border-radius: 8px;
  width: ${({percentage:e=0})=>`${e}%`};
  height: 100%;
  background: ${({checked:e,theme:t})=>e?t.palette.primary.main:t.palette.base.shade2};
`;var A5=i.label`
  display: grid;
  grid-template-areas: 'label chip';
  grid-template-columns: auto min-content;
  grid-template-rows: auto;
  grid-gap: 0.4rem;
  align-items: center;
  padding: 0.5rem 0.4rem 0.4rem;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.palette.base.shade4};
  }
`,D5=i.input.attrs({type:"radio"})`
  &&& {
    appearance: none;
    position: absolute;
    outline: none;
  }
`,jw=k`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,na=i.div`
  grid-area: chip;
  position: relative;
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid ${({theme:e})=>e.palette.base.shade3};
  border-radius: 50%;

  ${({checked:e,theme:t})=>e&&`
    background: ${t.palette.system.background};
    border: 1px solid ${t.palette.primary.main};

    &:after {
      ${jw}
      content: '';
      width: .75rem;
      height: .75rem;
      background: ${t.palette.primary.main};
      border-radius: 50%;
    }
  `}
`;var Vw=e=>Le({fetcher:PollRepository.getPoll,params:e,shouldCall:()=>!!e}),ia=Vw;var qw=864e5,Zw=({data:e,onCheck:t,checked:o})=>B.createElement(w5,{checked:o,onClick:t},B.createElement(E5,null,B.createElement(na,{checked:o}),B.createElement(ul,null,e))),Yw=({data:e,voteCount:t,totalVotes:o=0,isVotedByUser:r})=>{let n=t&&o?t/o*100:0;return B.createElement(P5,{checked:r},B.createElement(ul,null,e),B.createElement(L5,null,B.createElement(F5,{percentage:n,checked:r})),B.createElement("div",null,B.createElement(FormattedMessage,{id:"poll.votes",values:{voteCount:t}})))},Qw=({answers:e,handleCheck:t,answerIds:o})=>B.createElement(B.Fragment,null,e.map(s=>{var l=s,{id:r,data:n}=l,a=M(l,["id","data"]);return B.createElement(Zw,d({key:r,checked:o.includes(r),onCheck:()=>t(r),data:n},a))})),B5=({answers:e,totalVotes:t})=>B.createElement(B.Fragment,null,e.map(a=>{var s=a,{id:o,data:r}=s,n=M(s,["id","data"]);return B.createElement(Yw,w(d({key:o,data:r},n),{totalVotes:t,isVotedByUser:!1}))})),Ww=({pollId:e})=>{let t=ia(e),[o,r]=useState([]),{formatMessage:n}=useIntl();if(t==null)return null;let{answers:a=[],answerType:s,closedIn:l,isDeleted:m,isVoted:p,status:u}=t,c=u==="closed",g=a.reduce((h,x)=>h+x.voteCount,0),f=s==="multiple",C=h=>{if(o.includes(h)){let x=o.findIndex(T=>T===h);r(T=>[...T.splice(0,x),...T.splice(x+1)]);}else r(f?x=>[...x,h]:[h]);},v=h=>I(void 0,null,function*(){if(e){if(h.preventDefault(),c||m)throw new Error(n({id:"poll.error.deletedOrClosed"}));yield PollRepository.votePoll(e,o);}}),y=Math.floor((l||0)/qw);return B.createElement(B.Fragment,null,B.createElement(T5,null,B.createElement(S5,null,c?B.createElement(FormattedMessage,{id:"poll.vote.finalResults"}):B.createElement(FormattedMessage,{id:"poll.vote.closedIn",values:{closedIn:y}})),B.createElement(k5,null,B.createElement(FormattedMessage,{id:"poll.votes",values:{voteCount:g}}))),c?B.createElement(B5,{answers:a}):p?B.createElement(B5,{answers:a,totalVotes:g}):B.createElement(Qw,{answers:a,handleCheck:C,answerIds:o}),!p&&B.createElement(N5,{disabled:!o.length,onClick:v},B.createElement(FormattedMessage,{id:"poll.vote.submit"})))},z5=Ww;var O5=i(br)`
  margin-right: calc(-1rem - 1px);
  margin-left: calc(-1rem - 1px);
  width: auto;
  // component's height / width should be about 0.56 according design
  // why 60% not 56%? - something wrong with styles
  padding-bottom: 60%;
`;var Kw=["image","video","file","poll","liveStream"],Jw=({contents:e})=>{let t=Kw.map(o=>e.filter(r=>r.dataType===o)).filter(o=>o&&!!o.length).reduce((o,r)=>w(d({},o),{[r[0].dataType]:r}),{});return Object.keys(t).length?B.createElement(B.Fragment,null,Object.entries(t).map(([o,r])=>{switch(o){case"image":return B.createElement(br,{key:o,items:r,truncate:!0,showCounter:!0});case"video":return B.createElement(br,{key:o,items:r,truncate:!0,showCounter:!0,renderVideoThumbnail:n=>B.createElement(xr,{item:n,showPlayIcon:!0,showVideoDuration:!0})});case"file":return B.createElement(I5,{key:o,items:r});case"poll":return B.createElement(B.Fragment,null,r.map(n=>B.createElement(z5,{key:o,pollId:n.data.pollId})));case"liveStream":return B.createElement(O5,{key:o,items:r,renderLiveStreamThumbnail:n=>B.createElement(Mr,{item:n,showPlayIcon:!0,showLivestreamTitle:!0})});default:return null}})):null},U5=Jw;var Xw=i.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: none;
`,Rw=i(Ge).attrs({rows:1,maxRows:15})`
  outline: none;
  border: none;
  resize: none;
  font: inherit;
`,eP=({text:e,placeholder:t,onChange:o,queryMentionees:r})=>B.createElement(Xw,null,B.createElement(Rw,{"data-qa-anchor":"post-editor-textarea",placeholder:t,value:e,multiline:!0,mentionAllowed:!0,queryMentionees:r,onChange:o})),H5=eP;var tP=({items:e,onRemove:t})=>B.createElement(Oo,{items:e,renderItem:o=>{var r;return B.createElement(we,{fileId:(r=o==null?void 0:o.data)==null?void 0:r.fileId,onRemove:()=>t(o.postId)})}}),$5=tP;var nP=i(Gp)`
  background: #ebecef;
`,iP=({items:e,onRemove:t})=>{let[o,r]=useState(void 0);return B.createElement(Oo,{itemKey:"postId",items:e,onClick:n=>r(e[n].postId),renderItem:n=>{if(o===n.postId){let a=n.data.videoFileId.high||n.data.videoFileId.medium||n.data.videoFileId.low||n.data.videoFileId.original;return a?B.createElement(yo,{key:n.data.videoFileId.original,fileId:a,mediaFit:"cover",noBorder:!0,autoPlay:!0,onRemove:()=>t(n.postId)}):B.createElement(nP,{onRemove:()=>t(n.postId)},B.createElement(FormattedMessage,{id:"video.notReady"}))}return B.createElement(oa,{key:n.data.thumbnailFileId,fileId:n.data.thumbnailFileId,onRemove:()=>t(n.postId)})}})},G5=iP;var aP=i.div`
  & > * {
    margin-bottom: 12px;
  }
`,sP=({items:e,onRemove:t})=>B.createElement(aP,null,e.map(o=>{var r;return B.createElement(Pt,{key:o.postId,fileId:(r=o==null?void 0:o.data)==null?void 0:r.fileId,onRemove:()=>t(o.postId)})})),q5=sP;var Z5=["text"];function mP(e){return Z5.includes(e.dataType)}function dP(e){return Array.isArray(e.data)}var pP=e=>{if(e.data==null)return null;if(dP(e)){let l=e,{onRemoveChild:u,dataType:c,data:g}=l,f=M(l,["onRemoveChild","dataType","data"]);switch(c){case"image":return B.createElement($5,d({items:g,onRemove:u},f));case"video":return B.createElement(G5,d({items:g,onRemove:u},f));case"file":return B.createElement(q5,d({items:g,onRemove:u},f));default:return null}}if(mP(e)){let m=e,{placeholder:u,onChangeText:c,dataType:g,data:f}=m,C=M(m,["placeholder","onChangeText","dataType","data"]);return B.createElement(H5,d({text:f,placeholder:u||void 0,onChange:v=>c==null?void 0:c(v)},C))}let p=e,{placeholder:t,onChangeText:o,dataType:r,onRemoveChild:n,data:a}=p,s=M(p,["placeholder","onChangeText","dataType","onRemoveChild","data"]);switch(r){case"image":return B.createElement(we,d({},s));case"video":return B.createElement(yo,d({},s));case"file":return B.createElement(Pt,d({},s));default:return null}},Mi=pP;var Y5=i.div`
  width: 520px;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px;
`,Q5=i.div`
  padding: 16px;
`,W5=i.div`
  border-top: 1px solid ${({theme:e})=>e.palette.base.shade4};
  padding: 12px 16px;
`,K5=i(Y)`
  padding: 10px 16px;
  margin-left: auto;
`;var gP=e=>{let[t,o]=useState([]);return useEffect(()=>{function r(){return I(this,null,function*(){if(e.length===0||!e||(e==null?void 0:e.length)===0)return;let n=yield PostRepository.getPostByIds(e);o(n.data);})}r();},[e]),t},aa=gP;var X5=({postId:e,onSave:t})=>{var b,P;let o=ot(e),r=aa(o==null?void 0:o.children),{text:n,markup:a,mentions:s,mentionees:l,metadata:m,clearAll:p,onChange:u,queryMentionees:c}=Jt({targetId:o==null?void 0:o.targetId,targetType:o==null?void 0:o.targetType,remoteText:typeof(o==null?void 0:o.data)=="string"?o==null?void 0:o.data:(b=o==null?void 0:o.data)==null?void 0:b.text,remoteMarkup:D1(typeof(o==null?void 0:o.data)=="string"?o==null?void 0:o.data:(P=o==null?void 0:o.data)==null?void 0:P.text,o==null?void 0:o.metadata)}),[g,f]=useState([]),C=useMemo(()=>r.filter(N=>!g.includes(N.postId)),[r,g]),v=N=>{f(D=>[...D,N]);},y=()=>I(void 0,null,function*(){g.forEach(N=>{PostRepository.deletePost(N);}),yield PostRepository.updatePost(o.postId,{data:{text:n},mentionees:l,metadata:m}),p(),t();}),h=useMemo(()=>(n==null?void 0:n.trim())===""&&!C.length,[n]),x=useMemo(()=>C.filter(N=>N.dataType==="file"),[C]),T=useMemo(()=>C.filter(N=>N.dataType==="image"),[C]),S=useMemo(()=>C.filter(N=>N.dataType==="video"),[C]);return {text:n,markup:a,mentions:s,post:o,childrenPosts:C,clearAll:p,onChange:u,queryMentionees:c,childVideoPosts:S,childFilePosts:x,childImagePosts:T,handleRemoveChild:v,isEmpty:h,handleSave:y}};var vP=({postId:e,placeholder:t="What's going on...",className:o,onSave:r})=>{let{post:n,markup:a,onChange:s,queryMentionees:l,childVideoPosts:m,childFilePosts:p,childImagePosts:u,handleRemoveChild:c,isEmpty:g,handleSave:f}=X5({postId:e,onSave:r});return n==null?null:B.createElement(Y5,{className:o},B.createElement(Q5,null,B.createElement(Mi,{"data-qa-anchor":"post-editor-textarea",data:a,dataType:"text",placeholder:t,queryMentionees:l,onChangeText:s}),u.length>0&&B.createElement(Mi,{data:u,dataType:"image",onRemoveChild:c}),m.length>0&&B.createElement(Mi,{data:m,dataType:"video",onRemoveChild:c}),p.length>0&&B.createElement(Mi,{data:p,dataType:"file",onRemoveChild:c})),B.createElement(W5,null,B.createElement(K5,{"data-qa-anchor":"post-editor-save-button",disabled:g,onClick:f},B.createElement(FormattedMessage,{id:"save"}))))},R5=memo(vP);var e6=i.div`
  display: flex;
  align-items: center;
`,t6=i.div`
  margin-left: 8px;
`,fl=i.div`
  ${({theme:e})=>e.typography.title}

  word-break: break-all;

  &.clickable {
    &:hover {
      cursor: pointer;
    }
  }
`,o6=i(y1).attrs({height:"8px",width:"8px"})`
  color: ${({theme:e})=>e.palette.base.shade1};
`,r6=i(u2).attrs({height:"14px",width:"14px"})`
  margin-right: 4px;
`,gl=i.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
  color: ${({theme:e})=>e.palette.base.shade1};
  ${({theme:e})=>e.typography.captionBold};
`,n6=i.div`
  color: ${({theme:e})=>e.palette.base.shade1};
  ${({theme:e})=>e.typography.caption}

  &::before {
    content: '• ';
    margin-left: 4px;
  }
`,i6=i.div`
  display: flex;
  align-items: center;

  ${({showTime:e})=>e&&k`
      & > ${gl} {
        &::after {
          content: '•';
          margin-left: 4px;
        }
      }
    `};
`,a6=i.div`
  display: flex;
  align-items: center;

  > :not(:first-child) {
    margin-left: 0.25rem;
  }
`;var MP=({avatarFileUrl:e,postAuthorName:t,postTargetName:o,timeAgo:r,isModerator:n,isEdited:a,onClickCommunity:s,onClickUser:l,hidePostTarget:m,loading:p,isBanned:u})=>{let c=E("UIPostHeader");if(c)return c({avatarFileUrl:e,postAuthorName:t,postTargetName:o,timeAgo:r,isModerator:n,isEdited:a,onClickCommunity:s,onClickUser:l,hidePostTarget:m,loading:p,isBanned:u});let g=()=>B.createElement(a6,{"data-qa-anchor":"post-header-post-names"},B.createElement(Gd,{lines:3},B.createElement(fl,{"data-qa-anchor":"post-header-post-name",className:l6({clickable:!!l}),onClick:l},t)),u&&B.createElement(Xt,null),o&&!m&&B.createElement(B.Fragment,null,B.createElement(o6,null),B.createElement(fl,{"data-qa-anchor":"post-header-post-target-name",className:l6({clickable:!!s}),onClick:s||void 0},o))),f=()=>B.createElement(i6,{"data-qa-anchor":"post-header-additional-info",showTime:!!r},n&&B.createElement(gl,{"data-qa-anchor":"post-header-additional-info-moderator-badge"},B.createElement(r6,null)," ",B.createElement(FormattedMessage,{id:"moderator"})),r&&B.createElement(Z1,{"data-qa-anchor":"post-header-additional-info-time-ago",date:r.getTime()}),a&&B.createElement(n6,{"data-qa-anchor":"post-header-additional-info-edited-label"},B.createElement(FormattedMessage,{id:"post.edited"})));return console.log("UIPostHeader postAuthorName",t),console.log("UIPostHeader url",e),B.createElement(e6,{"data-qa-anchor":"post-header"},B.createElement(J,{"data-qa-anchor":"post-header-avatar",avatar:e,backgroundImage:se,loading:p,onClick:l}),B.createElement(t6,{"data-qa-anchor":"post-header-post-info"},p?B.createElement(B.Fragment,null,B.createElement("div",null,B.createElement(W,{width:96,style:{fontSize:8}})),B.createElement(W,{width:189,style:{fontSize:8}})):B.createElement(B.Fragment,null,g(),f())))},m6=MP;var IP=10;function Vt({targetType:e,targetId:t,feedType:o,limit:r=IP}){let s=ee({fetcher:PostRepository.getPosts,params:{targetType:e,targetId:t,feedType:o,limit:r},shouldCall:()=>!!t&&!!e}),{items:n}=s,a=M(s,["items"]);return d({posts:n},a)}var{COMMUNITY_MODERATOR:PP}=Wr;function xo(e){let r=ee({fetcher:CommunityRepository.Membership.getMembers,params:{communityId:e,roles:[PP]},shouldCall:()=>!!e}),{items:t}=r,o=M(r,["items"]);return d({moderators:t},o)}function Ii(e,t=5){let n=ee({fetcher:CommunityRepository.Membership.getMembers,params:{communityId:e,limit:t,memberships:["member"]},shouldCall:()=>!!e}),{items:o}=n,r=M(n,["items"]);return d({members:o},r)}var NP=({post:e,childrenPosts:t=[],community:o,userId:r})=>{let{moderators:n}=xo(o==null?void 0:o.communityId),{members:a}=Ii(o==null?void 0:o.communityId),{posts:s}=Vt({targetType:"community",targetId:o==null?void 0:o.communityId,feedType:"reviewing"}),l=U(r),m=useMemo(()=>!t.find(y=>y.dataType==="liveStream"||y.dataType==="poll"),[t]),p=a.find(y=>y.userId===r),u=n.find(y=>y.userId===r),c=(e==null?void 0:e.postedUserId)===r,g=useMemo(()=>(o==null?void 0:o.postSetting)!=CommunityPostSettings.ANYONE_CAN_POST?s.find(y=>y.postId===(e==null?void 0:e.postId))!=null:!1,[o,s]),f=(l==null?void 0:l.roles.find(y=>y==="global-admin"))!=null,C=u!=null,v=p!=null;return o==null?{isPostUnderReview:!1,isModerator:!1,canEdit:(f||c)&&m,canReport:f||!c,canDelete:f||c,canReview:!1}:{isPostUnderReview:g,isModerator:C,canEdit:(f||C)&&m,canReview:f||C,canDelete:!g&&C||c&&v,canReport:g?!c:!c&&(C||v)}},sa=NP;var p6=({post:e,avatarFileUrl:t,loading:o,hidePostTarget:r})=>{let{onClickCommunity:n,onClickUser:a}=O(),{formatMessage:s}=useIntl(),l=U(e==null?void 0:e.postedUserId),m=Ce(e==null?void 0:e.targetId),{isModerator:p}=sa({community:m,post:e,userId:e==null?void 0:e.postedUserId}),u=(e==null?void 0:e.targetType)==="community",c=u?m==null?void 0:m.displayName:null,g=u?()=>e&&n(e==null?void 0:e.targetId):null,f=()=>e&&a(e.postedUserId);return {avatarFileUrl:t,postAuthorName:(l==null?void 0:l.displayName)||s({id:"anonymous"}),postTargetName:c,timeAgo:new Date(e==null?void 0:e.createdAt),isModerator:p||Ot(l==null?void 0:l.roles)||Cr(l==null?void 0:l.roles),isEdited:new Date(e==null?void 0:e.createdAt).getTime()<new Date(e==null?void 0:e.editedAt).getTime(),isBanned:l==null?void 0:l.isGlobalBanned,hidePostTarget:r,loading:o,onClickCommunity:g,onClickUser:f}};var FP=({postId:e,hidePostTarget:t,loading:o})=>{let r=ot(e),n=U(r==null?void 0:r.postedUserId),a=j({fileId:n==null?void 0:n.avatarFileId,imageSize:"small"}),s=p6({post:r,avatarFileUrl:a,user:n,loading:o,hidePostTarget:t});return B.createElement(m6,d({},s))};var c6=memo(FP);var zP=i.div`
  overflow-wrap: break-word;
  color: ${({theme:e})=>e.palette.neutral.main};
  white-space: pre-wrap;
  ${({theme:e})=>e.typography.body}
`,OP=i(F).attrs({variant:"secondary"})`
  color: ${({theme:e})=>e.palette.primary.main};
  padding: 4px;
  display: inline-block;
`,UP=({text:e,postMaxLines:t,mentionees:o})=>{let r=useMemo(()=>_1(e||"",F1(o)),[o,e]),n=e?B.createElement(zP,{"data-qa-anchor":"post-text-content"},B.createElement(Gd.Atom,null,r.map(m=>{let p=`${e}-${m.start}-${m.end}`,u=e.substring(m.start,m.end);if(m.highlight){let c=o==null?void 0:o.find(g=>g.index===m.start);return c?B.createElement(G1,{key:p,mentionee:c},u):B.createElement("span",{key:p},u)}return B.createElement(tn,{key:p},u)}))):null,[a,s]=useState(!1),l=()=>s(!0);return n?a?n:B.createElement(Gd,{lines:t,ellipsis:B.createElement(OP,{onClick:l},B.createElement(FormattedMessage,{id:"post.readMore"}))},n):null},la=e=>{let t=E("UITextContent");return t?t(e):B.createElement(UP,d({},e))};var HP=({fileId:e})=>B.createElement(we,{fileId:e}),f6=HP;var $P=({videoFileId:e})=>{let t=e.high||e.medium||e.low;return B.createElement(yo,{fileId:t})},g6=$P;var _P=({fileId:e})=>B.createElement(Pt,{fileId:e}),C6=_P;var qP=i.div`
  margin-bottom: 0.75rem;

  > :not(:first-child) {
    margin-top: 0.75rem;
  }
`,ZP=({streamId:e,mentionees:t=[]})=>{let o=hi(e);if(o==null)return null;let r=t.map(s=>{var l=s,{index:n}=l,a=M(l,["index"]);var m;return d({index:n>((m=o==null?void 0:o.title)==null?void 0:m.length)?n-o.title.length-2:n},a)});return B.createElement(qP,null,B.createElement("div",null,o==null?void 0:o.title),B.createElement(la,{text:o==null?void 0:o.description,mentionees:r}))},h6=ZP;var YP=({data:e,dataType:t,postMaxLines:o,mentionees:r})=>!e||!["text","image","video","file","liveStream"].includes(t||"")?null:t==="text"?B.createElement(la,w(d({},e),{postMaxLines:o,mentionees:r})):t==="image"?B.createElement(f6,w(d({},e),{postMaxLines:o,mentionees:r})):t==="video"?B.createElement(g6,w(d({},e),{postMaxLines:o,mentionees:r})):t==="file"?B.createElement(C6,w(d({},e),{postMaxLines:o,mentionees:r})):t==="liveStream"?B.createElement(h6,w(d({},e),{postMaxLines:o,mentionees:r})):null,y6=YP;var v6=i(rt)`
  margin-left: auto;
`,WP=o=>{var r=o,{className:e}=r,t=M(r,["className"]);return B.createElement("div",d({className:l6("post",e)},t))},Pi=i(WP)`
  padding: 16px;
  padding-bottom: 8px;
  background: ${({theme:e})=>e.palette.system.background};
  border: 1px solid #edeef2;
  border-radius: 4px;
`,x6=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`,M6=i.div`
  border-top: 1px solid ${({theme:e})=>e.palette.base.shade4};
  margin-top: 6px;
  padding-top: 12px;
  display: flex;

  > * {
    flex: 1 1 0;

    &:not(:first-child) {
      margin-left: 12px;
    }
  }
`,b6=()=>B.createElement(B.Fragment,null,B.createElement("div",null,B.createElement(W,{style:{fontSize:8,maxWidth:374}})),B.createElement("div",null,B.createElement(W,{style:{fontSize:8,maxWidth:448}})),B.createElement("div",{style:{paddingBottom:50}},B.createElement(W,{style:{fontSize:8,maxWidth:279}})));var XP=8,RP=3,eS="Post has been reviewed",tS=({childrenPosts:e=[],className:t,handleDeletePost:o,handleReportPost:r,handleUnreportPost:n,handleApprovePost:a,handleDeclinePost:s,handleClosePoll:l,isPollClosed:m,hidePostTarget:p,isFlaggedByMe:u,readonly:c,post:g,loading:f})=>{var Ie,Ye,ut;let{formatMessage:C}=useIntl(),[v,y]=useState(!1),h=()=>y(!0),x=()=>y(!1);function T(ge){if(ge instanceof Error)if(ge.message.includes(eS))gt({title:B.createElement(FormattedMessage,{id:"post.error.cannotReview.title"}),content:B.createElement(FormattedMessage,{id:"post.error.cannotReview.description"})});else throw ge}let S=g==null?void 0:g.targetId,b=Ce(S),{currentUserId:P}=G();Ut({postId:g==null?void 0:g.postId,level:SubscriptionLevels.POST});let[N,D]=useState(!1),[V,q]=useState(!1),{canEdit:A,canReview:_,canDelete:L,canReport:ce,isPostUnderReview:ae}=sa({community:b,post:g,childrenPosts:e,userId:P||void 0}),xe=()=>I(void 0,null,function*(){yield r==null?void 0:r(),Z.success({content:B.createElement(FormattedMessage,{id:"report.reportSent"})});}),Te=()=>I(void 0,null,function*(){yield n==null?void 0:n(),Z.success({content:B.createElement(FormattedMessage,{id:"report.unreportSent"})});}),Ve=()=>I(void 0,null,function*(){try{D(!0),yield a==null?void 0:a(),Z.success({content:B.createElement(FormattedMessage,{id:"post.success.approved"})});}catch(ge){T(ge);}finally{D(!1);}}),Ne=()=>I(void 0,null,function*(){try{q(!0),yield s==null?void 0:s(),Z.success({content:B.createElement(FormattedMessage,{id:"post.success.declined"})});}catch(ge){T(ge);}finally{q(!1);}}),ze=()=>re({title:C({id:"post.deletePost"}),content:C({id:ae?"post.confirmPendingDelete":"post.confirmDelete"}),okText:C({id:"delete"}),onOk:o}),Me=e.find(ge=>ge.dataType==="poll"),be=[A?{name:C({id:"post.editPost"}),action:h}:null,L?{name:C({id:"post.deletePost"}),action:ze}:null,ce?{name:C(u?{id:"report.undoReport"}:{id:"report.doReport"}),action:u?Te:xe}:null,Me&&!m?{name:C({id:"poll.close"}),action:l}:null].filter(ue),pt=e.length>0,ct=pt?RP:XP,ie=e.find(ge=>ge.dataType==="liveStream");return B.createElement(Pi,{"data-qa-anchor":"post",className:t},B.createElement(x6,null,B.createElement(c6,{postId:g==null?void 0:g.postId,hidePostTarget:p,loading:f}),!f&&B.createElement(v6,{options:be,"data-qa-anchor":"post-options-button"})),f?B.createElement(b6,null):B.createElement(B.Fragment,null,B.createElement(y6,{data:(Ie=ie==null?void 0:ie.data)!=null?Ie:g==null?void 0:g.data,dataType:(Ye=ie==null?void 0:ie.dataType)!=null?Ye:g==null?void 0:g.dataType,postMaxLines:ct,mentionees:(ut=g==null?void 0:g.metadata)==null?void 0:ut.mentioned}),pt&&B.createElement(U5,{contents:e}),!ae&&B.createElement(sl,{readonly:c,postId:g==null?void 0:g.postId}),ae&&_&&B.createElement(M6,{"data-qa-anchor":"post-review"},B.createElement(Y,{"data-qa-anchor":"post-review-accept-button",disabled:N||V,onClick:Ve},B.createElement(FormattedMessage,{id:"general.action.accept"})),B.createElement(F,{"data-qa-anchor":"post-review-decline-button",disabled:N||V,onClick:Ne},B.createElement(FormattedMessage,{id:"general.action.decline"}))),v&&B.createElement(ke,{"data-qa-anchor":"post-editor-modal",title:C({id:"post.editPost"}),onCancel:x},B.createElement(R5,{postId:g==null?void 0:g.postId,onSave:x}))))},Qe=B.memo(tS);var I6=i.div`
  color: ${({theme:e})=>e.palette.base.shade3};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0.5rem;
  background: ${({theme:e})=>e.palette.system.background};
  color: ${({theme:e})=>e.palette.base.shade3};
  ${({theme:e})=>e.typography.body};
`,w6=i.div`
  ${({theme:e})=>e.typography.title}
  margin-top: 8px;
`,P6=i.div`
  ${({theme:e})=>e.typography.body}
`;var oS=({className:e,icon:t,title:o,description:r,children:n})=>B.createElement(I6,{className:e},t,B.createElement(w6,null,o),B.createElement(P6,null,r),n),to=oS;var rS=()=>B.createElement(Pi,null,B.createElement(to,{title:B.createElement(FormattedMessage,{id:"post.unknownPost.title"}),icon:B.createElement(Vs,null)},B.createElement(FormattedMessage,{id:"post.unknownPost.description"}))),T6=rS;var ma={[PostContentType.FILE]:e=>B.createElement(Qe,d({},e)),[PostContentType.IMAGE]:e=>B.createElement(Qe,d({},e)),[PostContentType.LIVESTREAM]:e=>B.createElement(Qe,d({},e)),[PostContentType.POLL]:e=>B.createElement(Qe,d({},e)),[PostContentType.TEXT]:e=>B.createElement(Qe,d({},e)),[PostContentType.VIDEO]:e=>B.createElement(Qe,d({},e)),[PostContentType.CUSTOM]:e=>B.createElement(Qe,d({},e))},E6=createContext(ma),k6=e=>{let t=useContext(E6);return useMemo(()=>e==null?o=>null:t[e]||ma[e]||(o=>B.createElement(T6,null)),[e])};function vl({children:e,config:t}){let o=useMemo(()=>t==null?ma:d(d({},ma),t),[t]);return B.createElement(E6.Provider,{value:o},e)}var lS=({apiKey:e,authToken:t,apiRegion:o,apiEndpoint:r,userId:n,displayName:a,customComponents:s={},postRendererConfig:l,theme:m={},children:p,socialCommunityCreationButtonVisible:u,actionHandlers:c,onConnectionStatusChange:g,onDisconnected:f})=>{let[C,v]=useState(!1),[y,h]=useState(null),x=useRef(null),T=useRef(null),S=U(n),b=useMemo(()=>{var N;return {client:y||null,currentUserId:n||void 0,userRoles:(N=S==null?void 0:S.roles)!=null?N:[]}},[y,n,S==null?void 0:S.roles]);function P(){return I(this,null,function*(){try{let D=Client.getActiveClient();h(D);}catch(D){let V=Client.createClient(e,o,r?{apiEndpoint:r}:{});h(V);}Client.isConnected()||(yield Client.login({userId:n,displayName:a,authToken:t},{sessionWillRenewAccessToken(D){D.renew();}})),v(!0),x.current==null&&(x.current=Client.onSessionStateChange(D=>{g==null||g(D);})),T.current==null&&(T.current=Client.onClientDisconnected(()=>{f&&f();}));})}return useEffect(()=>(P(),()=>{var N,D;(N=x.current)==null||N.call(x),(D=T.current)==null||D.call(T);}),[n]),y==null?B.createElement(B.Fragment,null):C?B.createElement(n4,{locale:"en"},B.createElement(w3,{theme:u4(m)},B.createElement(f4,null,B.createElement(B1.Provider,{value:b},B.createElement(O2,null,B.createElement(j2,{config:s},B.createElement(T2,{config:{socialCommunityCreationButtonVisible:u||!0}},B.createElement(vl,{config:l},B.createElement(U2,d({},c),p))),B.createElement(Um,null),B.createElement(Xm,null))))))):B.createElement(B.Fragment,null)},mS=lS;var cS=()=>{let[e,t]=useState(null);return useEffect(()=>{e&&(Z.error({content:e}),t(null));},[e]),[t]},A6=cS;var fS=1073741824,gS=1,xl=i.label`
  cursor: pointer;
  background: rgb(235 236 239 / 60%);
  transition: background 0.1s;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus,
  &:active {
    background: rgb(235 236 239);
  }

  &.disabled {
    cursor: not-allowed;
  }

  > svg {
    height: 1.125rem;
    width: 1.125rem;
    font-size: 1.125rem;
  }
`,CS=i.input.attrs({type:"file"})`
  &&& {
    display: none;
  }
`,hS=({className:e="","data-qa-anchor":t="",mimeType:o,multiple:r,disabled:n,onChange:a,onMaxFilesLimit:s,onFileSizeLimit:l,fileLimitRemaining:m=0,children:p})=>{let[u]=useState(`_${(Date.now()*Math.random()).toString(36)}`),[c,g]=useState(!1),f=useCallback(b=>b.slice(0,r?m:gS),[m,r]),C=b=>b.some(P=>P.size>fS),v=useCallback(b=>(m||0)<b.length,[m]),y=useCallback(b=>{b.preventDefault(),b.stopPropagation(),!n&&(b.dataTransfer.setData(o,u),g(!0));},[n,o,u]),h=useCallback(b=>{b.preventDefault(),b.stopPropagation(),!n&&g(!1);},[n]),x=useCallback(b=>{if(b.preventDefault(),b.stopPropagation(),n)return;let P=b.target.files?[...b.target.files]:[],N=C(P),D=v(P),V=f(P);N?l==null||l():V.length&&(a==null||a(V)),D&&(s==null||s());},[v,n,f,a,l,s]),T=useCallback(b=>{if(b.preventDefault(),b.stopPropagation(),n)return;let P=(o||"").split(",").map(V=>V.replace("*",".*")).map(V=>new RegExp(V)),N=Array.from(b.dataTransfer.files).filter(V=>P.some(q=>q.test(V.type))),D=f(N);D.length&&(a==null||a(D)),g(!1);},[n,f,o,a]),S=b=>{};return B.createElement(xl,{"data-qa-anchor":`${t}`,id:u,className:l6(e,{hover:c,disabled:n}),onDragEnter:y,onDragOver:y,onDragLeave:h,onDrop:T},B.createElement(CS,{accept:o,multiple:r,disabled:n,onChange:x,onClick:S}),p)},da=hS;var z6=i.div`
  border-radius: 4px;
  border: 1px solid ${({theme:e})=>e.palette.base.shade4};
`,Ke=i.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;

  ${({hover:e,theme:t})=>e&&`background: ${t.palette.base.shade4};`}
  ${({active:e,theme:t})=>e&&`color: ${t.palette.primary.shade1};`}

  &:hover {
    ${({theme:e})=>`background: ${e.palette.base.shade4};`}
  }
`;var oo=z6;var O6=i.button.attrs({role:"button"})`
  color: ${({theme:e})=>e.palette.base.shade1};
  font-size: 14px;
  border: 1px solid ${({theme:e})=>e.palette.system.borders};
  outline: none;
  background: none;
  padding: 8px;
  text-align: left;
  display: flex;
  align-items: center;
  width: 300px;

  > *:last-child {
    margin-left: auto;
  }

  &:hover {
    cursor: pointer;
  }
`,U6=i.div`
  word-break: break-word;
  > * {
    margin: 0 3px;
  }
`;var xS=({value:e})=>B.createElement("div",null,e),MS=r=>{var n=r,{placeholder:e,selected:t}=n,o=M(n,["placeholder","selected"]);return B.createElement(O6,d({},o),t&&t.length?B.createElement(U6,null,t.map(({name:a,value:s})=>B.createElement("span",{key:s},a))):B.createElement("div",null,e),B.createElement(Dt,{height:14,width:14}))},bS=({value:e=[],onSelect:t=()=>{},options:o=[],multiple:r,disabled:n,parentContainer:a=null,renderItem:s=xS,renderTrigger:l=MS,isOpen:m,handleClose:p,placeholder:u="Select...",className:c="","data-qa-anchor":g=""})=>{let[f,C]=useState(m),[v,y]=useState(e),h=()=>C(!f),x=()=>p?p():C(!1),T=(P,N)=>{y(D=>{let V=D.filter(q=>q.value!==P.value);return N&&N(V.map(q=>q.value)),V});};nt("Escape",x),useEffect(()=>{C(m);},[m]);let S=P=>{if(t(P),r){let N=v.findIndex(D=>D.value===P.value);N>=0?T(v[N]):y([...v,P]);}else y([P]),x();},b=P=>{P.preventDefault(),h();};return B.createElement(q1,{"data-qa-anchor":`${g}-select-dropdown`,isOpen:m||f,renderTrigger:P=>l(w(d({},P),{onClick:b,selected:v,remove:T,placeholder:u})),handleClose:x,fullSized:!0,scrollable:!0,parentContainer:a,disabled:n,className:c},o&&o.length>0&&B.createElement(oo,null,o.map(P=>B.createElement(Ke,{key:P.value,"data-qa-anchor":`${g}-select-menu-item`,active:v.find(N=>N.value===P.value)!=null,onClick:()=>S(P)},s(P)))))},ro=memo(bS);var PS=i.div`
  margin-top: 8px;
  color: ${({theme:e})=>e.palette.alert.main};
  ${({theme:e})=>e.typography.caption}
`,H6=i.div``,V6=i.form``,$6=i.div``,G6=i.div`
  margin-bottom: 12px;
  width: 100%;
  display: flex;
  align-items: center;
`,_6=i(Ge)`
  ${({theme:e})=>e.typography.global};
  outline: none;
`,SS=i.input`
  ${({theme:e})=>e.typography.global};
  border-radius: 4px;
  border: 1px solid #e3e4e8;
  padding: 10px 12px;
  outline: none;
  &:focus-within {
    border-color: ${({theme:e})=>e.palette.primary.main};
  }
`,q6=i(SS)`
  background: ${({theme:e})=>e.palette.base.shade4};
  width: 100%;
  padding-right: 60px;
`,Z6=i(Ys)``,Y6=i(F)`
  background: transparent;
  border: none;
  outline: none;
`,Q6=i.div`
  padding: 20px 16px 16px;
`,W6=i.div``,Ti=i.div`
  display: flex;
  flex-direction: column;
  ${({horizontal:e})=>e&&"flex-direction: row"};
  ${({separate:e,theme:t})=>e&&`
    border-top: 1px solid ${t.palette.base.shade4};
    padding-top: 20px;
  `};
  margin-bottom: 20px;
`,K6=i.div``,Ml=e=>B.createElement(ErrorMessage,d({as:PS},e)),J6=i.div`
  border-top: 1px solid ${({theme:e})=>e.palette.base.shade4};
  padding: ${({edit:e})=>e?"12px 0":"12px 16px"};
  display: flex;
  justify-content: ${({edit:e})=>e?"flex-start":"flex-end"};
`,Ni=i.label`
  ${({theme:e})=>e.typography.bodyBold};
  ${({theme:e})=>`
    &.required {
      &::after {
        color: ${e.palette.alert.main};
        content: ' *';
      }
    }
  `}
`,Ei=i.div`
  width: 700px;
  margin-right: 20px;
`,bl=i.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
`,Il=i.div`
  width: 100%;
`,wl=i.div`
  display: flex;
  width: 100%;
`,X6=i(Y).attrs({type:"submit"})`
  padding: 10px 16px;
  margin-left: 12px;
  ${({edit:e})=>e&&k`
      min-width: 100px;
      margin-left: 0;
    `};
`,R6=i(ro)`
  button {
    width: 100%;
  }
`,cn=i.div`
  margin-left: auto;
  color: ${({theme:e})=>e.palette.base.shade1};
  ${({theme:e})=>e.typography.caption}
`,ec=i.div`
  position: relative;
  width: 100%;

  ${cn} {
    position: absolute;
    top: 14px;
    right: 8px;
  }
`,tc=i.div`
  margin-bottom: 8px;
`;var pa=i(ft).attrs({width:15,height:15})`
  margin-right: 8px;
`,oc=i.div`
  margin-right: 4px;
  display: flex;
  align-items: center;
`,rc=i($s).attrs({height:30,width:20})``,nc=i(dr).attrs({height:15,width:15})`
  margin-right: 4px;
`,ic=i.div`
  border: 1px solid #ebecef;
  border-radius: 8px;
  background: ${({theme:e})=>e.palette.system.background};
  flex-shrink: 0;
  align-self: flex-start;
  padding: 20px;
  margin-bottom: 14px;
`,ac=i.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`,sc=i(J)`
  height: 120px;
  width: 120px;
  margin-right: auto;
`,lc=i.div`
  display: flex;
  gap: 8px;
  margin-right: 8px;

  > button {
    min-width: 136px;
    height: 40px;
  }
`,mc=i.div`
  ${({theme:e})=>e.typography.headline}
`,TS=i.span`
  ${({theme:e})=>e.typography.bodyBold};
  margin-right: 2px;
`,Pl=i(TS)`
  &:hover {
    cursor: pointer;
  }
  margin-right: 3px;
`,dc=i.div`
  display: flex;

  > *:not(:first-child) {
    margin-left: 10px;
  }
`,pc=i.div`
  margin: 8px 0;
`,cc=i(rt)`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid #e3e4e8;
    border-radius: 4px;
    height: 40px;
    width: 40px;

    > * {
      margin: 0;
    }
  }
`,uc=i.div`
  background: ${({theme:e})=>e.palette.base.shade4};
  display: flex;
  border-radius: 4px;
  padding: 12px 20px;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
  }
`,fc=i.div`
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;

  > *:first-child {
    margin-right: 5px;
  }
`,gc=i.div`
  font-size: 12px;
`,Cc=i.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({theme:e})=>e.palette.primary.main};
`,hc=i.div`
  display: flex;
  align-items: center;
`;var vc=200,ES=({option:e,removeOption:t,updateOption:o})=>{let[r,n]=useState(e.text);return B.createElement(G6,null,B.createElement(ec,null,B.createElement(q6,{"data-qa-anchor":"poll-composer-option-item-input",value:r,maxLength:vc,onChange:s=>{n(s.target.value),o(s.target.value);}}),B.createElement(cn,null,`${r.length}/${vc}`)),B.createElement(Y6,{"data-qa-anchor":"poll-composer-option-item-close-button",onClick:t},B.createElement(Z6,{height:16})))},kS=({onChange:e,optionsLimit:t})=>{let[o,r]=useState([]),n=!t||t&&o.length<t,a=p=>{e(p.map(({text:u})=>({dataType:"text",data:u})));},s=()=>{if(n){let p=[...o,{text:"",id:v4()}];r(p),a(p);}},l=(p,u)=>{let c=o.map(g=>g.id===p?w(d({},g),{text:u}):g);r(c),a(c);},m=p=>{let u=o.findIndex(g=>g.id===p),c=[...o.slice(0,u),...o.slice(u+1)];r(c),a(c);};return B.createElement($6,null,B.createElement(tc,null,B.createElement(FormattedMessage,{id:"options_composer.title"})),o.map(p=>B.createElement(ES,{key:p.id,option:p,removeOption:()=>m(p.id),updateOption:u=>l(p.id,u)})),B.createElement("div",null,B.createElement(F,{"data-qa-anchor":"poll-composer-add-option-button",fullWidth:!0,disabled:!n,onClick:p=>{p.preventDefault(),s();}},B.createElement(pa,null)," ",B.createElement(FormattedMessage,{id:"options_composer.button.add"}))))},Mc=kS;var bc=i.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`,Ic=i.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
`,wc=i.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:disabled) {
    &:hover {
      cursor: pointer;
    }
  }
`,Pc=i(qs).attrs({width:24,height:24})``,Sc=i(ft).attrs({width:24,height:24})``;var Sl="{counter}",Tc=({icon:e=null,onClick:t,disabled:o})=>B.createElement(wc,{disabled:o,onClick:t},e),FS=({output:e=""})=>B.createElement(Ic,null,e),AS=({renderDecButton:e=Tc,renderIncButton:t=Tc,renderResult:o=FS,resultFormat:r="{counter}",defaultValue:n=0,onChange:a,onlyPositiveNumber:s=!0})=>{let[l,m]=useState(n);return B.createElement(bc,null,e({onClick:p=>{p.preventDefault();let u=l-1;m(u),a(u);},icon:B.createElement(Pc,null),disabled:s&&l-1<0}),o({output:r.replace(Sl,l)}),t({onClick:p=>{p.preventDefault();let u=l+1;m(u),a(u);},icon:B.createElement(Sc,null)}))},Nc=AS;var BS=({onChange:e,parentContainer:t=null})=>{let{formatMessage:o}=useIntl(),r=Object.values(["single","multiple"]).map(n=>({name:o({id:"select.answerType.item"},{answerType:n}),value:n}));return B.createElement(R6,{options:r,value:[r[0]],parentContainer:t,renderItem:({name:n})=>B.createElement("div",null,n),onSelect:({value:n})=>e(n)})},kc=BS;var Lc=500,Li=2,un=10,VS=864e5,$S=({children:e})=>B.createElement(W6,null,B.createElement(Q6,null,e)),GS=({className:e="",targetId:t,targetType:o,onCancel:r=()=>{},onSubmit:n=(s,l,m)=>{},onIsDirtyChange:a})=>{var _;let{text:s,markup:l,mentions:m,mentionees:p,metadata:u,queryMentionees:c,onChange:g}=Jt({targetId:t||void 0,targetType:o}),[f,C]=useState(!1),v={question:"",answers:[],answerType:"single",closedIn:0},{handleSubmit:y,setError:h,watch:x,control:T,formState:{errors:S,isDirty:b}}=useForm({defaultValues:v}),{formatMessage:P}=useIntl(),N=x("question",""),D=x("answers",[]);useEffect(()=>a==null?void 0:a(b),[b]);let V=L=>I(void 0,null,function*(){var ce,ae,xe;try{if(C(!0),!L.question.trim()){h("question",{message:"Question cannot be empty"});return}if(((ce=L==null?void 0:L.answers)==null?void 0:ce.length)<Li){h("answers",{message:`Minimum amount of answers should be ${Li}`});return}if(((ae=L==null?void 0:L.answers)==null?void 0:ae.length)>un){h("answers",{message:`Maximum amount of answers should be ${un}`});return}let Te={question:L==null?void 0:L.question,answers:(xe=L==null?void 0:L.answers)!=null&&xe.length?L.answers:[],answerType:(L==null?void 0:L.answerType)||"single",closedIn:L&&L.closedIn?L.closedIn*VS:void 0};yield n(Te,p,u);}finally{C(!1);}}),q=!b||(N==null?void 0:N.length)===0||f,A=useRef(null);return B.createElement(H6,null,B.createElement(V6,{className:e,onSubmit:y(V)},B.createElement(K6,{ref:A},B.createElement($S,null,B.createElement(Ti,null,B.createElement(bl,null,B.createElement(Ei,null,B.createElement(Ni,{className:"required"},B.createElement(FormattedMessage,{id:"poll_composer.question.label"}))),B.createElement(cn,null,`${(_=s==null?void 0:s.length)!=null?_:0}/${Lc}`)),B.createElement(Controller,{control:T,name:"question",rules:{required:"Question is required",maxLength:{value:Lc,message:"Question is too long"}},render:Te=>{var{field:Ve}=Te,Ne=Ve,{value:L,ref:ce,onChange:ae}=Ne,xe=M(Ne,["value","ref","onChange"]);return B.createElement(_6,w(d({},xe),{ref:ce,"data-qa-anchor":"poll-composer-options-textarea",mentionAllowed:!0,multiline:!0,value:l,queryMentionees:c,placeholder:P({id:"poll_composer.question.placeholder"}),onChange:pt=>{var ct=pt,{plainText:ze,mentions:Me}=ct,be=M(ct,["plainText","mentions"]);if((Me==null?void 0:Me.length)>I4)return gt({title:B.createElement(FormattedMessage,{id:"pollComposer.unableToMention"}),content:B.createElement(FormattedMessage,{id:"pollComposer.overMentionees"}),okText:B.createElement(FormattedMessage,{id:"pollComposer.okText"}),type:"info"});g(d({plainText:ze,mentions:Me},be)),ae(ze);}}))}}),B.createElement(Ml,{errors:S,name:"question"})),B.createElement(Ti,null,B.createElement(bl,null,B.createElement(Ei,null,B.createElement(Ni,{className:"required"},B.createElement(FormattedMessage,{id:"poll_composer.poll_options.label"}))),B.createElement(cn,null,`${D.length}/${un}`)),B.createElement(Controller,{rules:{required:`There should be at least ${Li} answers`,minLength:{value:Li,message:`There should be at least ${Li} answers`},maxLength:{value:un,message:`There can be only ${un} answers maximum`}},name:"answers",control:T,render:({field:L})=>B.createElement(Mc,d({optionsLimit:un},L))}),B.createElement(Ml,{errors:S,name:"answers"})),B.createElement(Ti,{horizontal:!0,separate:!0},B.createElement(wl,null,B.createElement(Ei,null,B.createElement(Ni,null,B.createElement(FormattedMessage,{id:"poll_modal.answer_type.title"})),B.createElement("div",null,B.createElement(FormattedMessage,{id:"poll_modal.answer_type.body"}))),B.createElement(Il,null,B.createElement(Controller,{rules:{required:"Answer type is required"},name:"answerType",render:({field:L})=>B.createElement(kc,d({parentContainer:A.current},L)),control:T})))),B.createElement(Ti,{horizontal:!0,separate:!0},B.createElement(wl,null,B.createElement(Ei,null,B.createElement(Ni,null,B.createElement(FormattedMessage,{id:"poll_modal.closed_in.title"})),B.createElement("div",null,B.createElement(FormattedMessage,{id:"poll_modal.closed_in.body"}))),B.createElement(Il,null,B.createElement(Controller,{name:"closedIn",render:({field:L})=>B.createElement(Nc,w(d({},L),{onlyPositiveNumber:!0,resultFormat:`${Sl} days`})),control:T})))))),B.createElement(J6,null,B.createElement(F,{onClick:L=>{L.preventDefault(),r();}},B.createElement(FormattedMessage,{id:"cancel"})),B.createElement(X6,{"data-qa-anchor":"poll-composer-post-button",disabled:q},B.createElement(FormattedMessage,{id:"post"})))))},Fc=GS;var YS=({targetId:e,targetType:t,onClose:o,onCreatePoll:r})=>{let[n,a]=useState(!1),{formatMessage:s}=useIntl(),l=(p,u,c)=>I(void 0,null,function*(){let g=yield PollRepository.createPoll(p);yield r(g.data.pollId,p.question,u,c),o();}),m=()=>re({title:s({id:"CommunityCreationModal.title"}),content:s({id:"CommunityCreationModal.content"}),cancelText:s({id:"CommunityCreationModal.cancelText"}),okText:s({id:"CommunityCreationModal.okText"}),onOk:o});return B.createElement(ke,{"data-qa-anchor":"poll-composer-modal",title:s({id:"poll_modal.title"}),clean:!1,onCancel:n?m:o},B.createElement(Fc,{targetId:e,targetType:t,onIsDirtyChange:p=>a(p),onCancel:m,onSubmit:l}))},Dc=YS;var JS=n=>{var a=n,{className:e,fixed:t=!1,children:o}=a,r=M(a,["className","fixed","children"]);return B.createElement(Popover,d({containerClassName:l6(e,{fixed:t})},r),o)},Bc=i(JS)`
  ${({theme:e})=>e.typography.body}
  z-index: 10000;
  background: ${({theme:e})=>e.palette.system.background};
  min-width: 200px;
  padding: 4px 0;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  &.fixed {
    position: fixed !important;
  }
`;var ua=Bc;var fa=i(J)`
  margin-right: 8px;
`;var XS=({"data-qa-anchor":e="",community:t,currentTargetId:o,onChange:r,onClose:n})=>{let a=j({fileId:t.avatarFileId,imageSize:"small"});return B.createElement(Ke,{"data-qa-anchor":e,active:t.communityId===o,onClick:()=>{r({targetId:t.communityId,targetType:"communityFeed"}),n();}},B.createElement(fa,{avatar:a,size:"tiny",backgroundImage:tt}),` ${t.displayName}`)},zc=e=>{let t=E("CommunityItem");return t?t(e):B.createElement(XS,d({},e))};var Oc=350,rT=.98,nT=i(I2).attrs({width:18,height:18})`
  margin-right: 8px;
  margin-top: -4px;
`,iT=i.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,aT=i.div`
  ${({theme:e})=>e.typography.caption}
  border-top: 1px solid #e3e4e8;
  color: ${({theme:e})=>e.palette.base.shade1};
  padding: 12px;
`,sT=i.div`
  position: relative;
  max-width: 200px;
  height: ${Oc}px;
  overflow: auto;
`,lT=i.h4`
  text-align: center;
`,mT=i(ua)`
  transform: none !important;
  position: absolute !important;
  top: 45px !important;
`,dT=({user:e,communities:t,hasMoreCommunities:o,loadMoreCommunities:r,currentTargetId:n,onChange:a,children:s})=>{let l=useRef(null),[m,p]=useState(!1),u=()=>p(!0),c=()=>p(!1),g=j({fileId:e.avatarFileId}),f=useCallback(()=>{r==null||r();},[r]),C=B.createElement(oo,null,B.createElement(Ke,{active:e.userId===n,onClick:()=>{a({targetId:e.userId,targetType:"user"}),c();}},B.createElement(fa,{size:"tiny",avatar:e.avatarCustomUrl||g,backgroundImage:se})," ",B.createElement(FormattedMessage,{id:"post.myTimeline"})),B.createElement(aT,null,B.createElement(FormattedMessage,{id:"post.community"})),B.createElement(sT,null,B.createElement(oT,{dataLength:t.length,next:()=>f(),hasMore:o||!1,height:Oc,loader:B.createElement(lT,null,B.createElement(FormattedMessage,{id:"loading"})),scrollThreshold:rT},t.map(v=>B.createElement(zc,{key:v.communityId,"data-qa-anchor":"post-creator-post-target-community-item",community:v,currentTargetId:n,onChange:a,onClose:c})))));return B.createElement("div",{ref:l,style:{position:"relative"}},B.createElement(mT,{isOpen:m,positions:["bottom"],align:"start",content:C,parentElement:l.current||void 0,onClickOutside:c},B.createElement(iT,{onClick:u},s," ",B.createElement(nT,{"data-qa-anchor":"post-creator-target-selector"}))))},Uc=e=>{let t=E("PostTargetSelector");return t?t(e):B.createElement(dT,d({},e))};var jc=i(J)`
  margin-right: 8px;
`,Hc=i.div`
  padding: 16px 20px 12px 16px;
  border: 1px solid #edeef2;
  display: flex;
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px;
`,Vc=i.div`
  padding-top: 12px;
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`,$c=i.div`
  flex-grow: 1;
  width: 85.5%;
`,Gc=i(Y)`
  padding: 10px 16px;
  margin-left: auto;
`,_c=i.div`
  padding: 0 12px;
`,qc=i(Ge)`
  display: block;
  & > textarea {
    width: 100%;
  }
`,Zc=i(_s)`
  vertical-align: -0.125em;
`,Yc=i.button`
  background: none;
  border: none;
  padding: 0;
`,Qc=i(Zs)``;var cT="video/*,.flv,.3gp",El=i(da)`
  ${({uploadLoading:e})=>e&&"cursor: wait !important;"}
  ${({disabled:e,theme:t})=>e&&`color: ${t.palette.neutral.shade2};`}
`,uT=({fileUploadDisabled:e,imageUploadDisabled:t,videoUploadDisabled:o,onChangeImages:r,onChangeVideos:n,onChangeFiles:a,uploadLoading:s,onMaxFilesLimit:l,onFileSizeLimit:m,fileLimitRemaining:p})=>B.createElement(B.Fragment,null,B.createElement(El,{"data-qa-anchor":"post-creator-image-attachment-button",disabled:t,uploadLoading:s,fileLimitRemaining:p,mimeType:"image/*",multiple:!0,onChange:r,onMaxFilesLimit:l,onFileSizeLimit:m},B.createElement(Kn,null)),B.createElement(El,{"data-qa-anchor":"post-creator-video-attachment-button",disabled:o,uploadLoading:s,fileLimitRemaining:p,mimeType:cT,multiple:!0,onChange:u=>{u.forEach(c=>{c.forceType=FileType.VIDEO;}),n==null||n(u);},onMaxFilesLimit:l,onFileSizeLimit:m},B.createElement(Zc,{icon:"video"})),B.createElement(El,{"data-qa-anchor":"post-creator-file-attachment-button",disabled:e,uploadLoading:s,fileLimitRemaining:p,multiple:!0,onChange:a,onMaxFilesLimit:l,onFileSizeLimit:m},B.createElement(Jn,null))),Wc=uT;var gT=.999;function fn(e){return e.fileId!==void 0}var Ll=e=>fn(e)?e.updatedAt?new Date(e.updatedAt).getTime():Date.now():e.lastModified;function Sr({files:e=[],uploadedFiles:t=[],onChange:o=a=>{},onLoadingChange:r=a=>{},onError:n=a=>{}}){let[a,s]=useState({}),[l,m]=useState([]),p=useMemo(()=>Array.isArray(e)?e:Array.from(e),[e]);useEffect(()=>{s(p.reduce((v,y)=>w(d({},v),{[y.name]:0}),{}));},[p]);let u=useCallback((v,y)=>{let h=y<=gT?y:1;s(x=>w(d({},x),{[v.name]:h}));},[]),c=useCallback(()=>{o({uploaded:[],uploading:[]});},[o]),g=useCallback(()=>{m([]);},[]),f=useCallback(v=>{if(fn(v)){let y=t.filter(h=>h.fileId!==v.fileId);o({uploaded:y,uploading:p});}else {let y=p.filter(h=>h.name!==v.name);o({uploaded:t,uploading:y});}},[o]);return useEffect(()=>{if(!p.length)return;function v(){return I(this,null,function*(){r(!0);try{let y=yield Promise.all(p.map(x=>I(this,null,function*(){let T=new FormData;T.append("files",x);let S=yield I(this,null,function*(){return x.type.includes(FileType.VIDEO)?FileRepository.createVideo(T,void 0,b=>{u(x,b);}):x.type.includes(FileType.IMAGE)?FileRepository.createImage(T,b=>{u(x,b);}):FileRepository.createFile(T,b=>{u(x,b);})});return S.data.length>0?S.data[0]:null})));s({});let h=[...t,...y].filter(ue);o({uploaded:h,uploading:[]}),m([]);}catch(y){m(p.map(h=>h.name)),n("Something went wrong. Please try uploading again.");}finally{r(!1);}})}v();},[p]),{allFiles:[...t,...p],uploading:p,uploaded:t,progress:a,removeFile:f,reset:c,rejected:l,retry:g}}var CT=i(Oo)`
  ${({uploadLoading:e})=>e&&k`
      cursor: wait !important;
    `}
`,hT=({allFiles:e,progress:t,removeFile:o,uploadLoading:r,rejected:n,retry:a})=>B.createElement(CT,{items:e,uploadLoading:r,renderItem:s=>{if(!fn(s))return B.createElement(we,{key:s==null?void 0:s.name,"data-qa-anchor":"post-creator-uploaded-image",file:s,progress:t[s==null?void 0:s.name],isRejected:n.includes(s==null?void 0:s.name)});let{fileId:l}=s;return B.createElement(we,{key:l,fileId:l,"data-qa-anchor":"post-creator-uploaded-image",onRemove:()=>o(s)})}}),yT=({files:e,uploadedFiles:t,onChange:o,onLoadingChange:r,uploadLoading:n,onError:a})=>{let s=Sr({files:e,uploadedFiles:t,onChange:o,onLoadingChange:r,onError:a}),{allFiles:l}=s;return l.length===0?null:B.createElement(hT,w(d({},s),{uploadLoading:n}))},Rc=yT;var vT=i.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5em;
  min-height: 1em;
  margin-bottom: 1rem;
  ${({uploadLoading:e})=>e&&"cursor: wait !important;"}
`,xT=({uploading:e,uploaded:t,progress:o,removeFile:r,uploadLoading:n,rejected:a,retry:s,rowDataQaAnchor:l})=>B.createElement(vT,{uploadLoading:n},t.map(m=>B.createElement(Pt,{key:m.fileId,"data-qa-anchor":l,fileId:m.fileId,onRemove:()=>r(m)})),e.map(m=>B.createElement(Pt,{key:m.name,"data-qa-anchor":l,file:m,progress:o[m.name],isRejected:a.includes(m.name),onRemove:()=>r(m)}))),MT=({files:e,uploadedFiles:t,onChange:o,onLoadingChange:r,uploadLoading:n,onError:a,rowDataQaAnchor:s="post-creator-uploaded-file"})=>{let l=Sr({files:e,uploadedFiles:t,onChange:o,onLoadingChange:r,onError:a}),{allFiles:m}=l;return m.length===0?null:B.createElement(xT,w(d({},l),{uploadLoading:n,rowDataQaAnchor:s}))},ya=MT;var IT=e=>B.createElement(ya,w(d({},e),{rowDataQaAnchor:"post-creator-uploaded-video"})),e8=IT;var FT=({targetId:e,targetType:t})=>{let[o,r]=useState(null),[n,a]=useState(null),s=useRef(null);return useEffect(()=>{if(!(e==null||e===""))return s.current&&s.current(),(t==="communityFeed"||t==="community")&&(s.current=CommunityRepository.getCommunity(e,l=>{r(l.data);})),s.current=UserRepository.getUser(e,l=>{a(l.data);}),()=>{var l;(l=s.current)==null||l.call(s);}},[e,t]),{community:o,user:n}},AT=10,DT=()=>gt({title:B.createElement(FormattedMessage,{id:"postCreator.unableToPost"}),content:B.createElement(FormattedMessage,{id:"postCreator.overCharacter"}),okText:B.createElement(FormattedMessage,{id:"postCreator.done"}),type:"info"}),BT=({className:e="",targetType:t,targetId:o,enablePostTargetPicker:r,communities:n=[],placeholder:a="What's going on...",hasMoreCommunities:s,loadMoreCommunities:l,onCreateSuccess:m,maxFiles:p=AT})=>{var H0,V0;let{currentUserId:u}=G(),{setNavigationBlocker:c}=O(),g=U(u);(t==="global"||t==="myFeed")&&(t="user",o=u||"");let[f,C]=useState({targetType:t,targetId:o}),{user:v,community:y}=FT({targetId:f.targetId,targetType:f.targetType}),{moderators:h}=xo(y==null?void 0:y.communityId);useEffect(()=>{C({targetType:t,targetId:o});},[t,o]);let x=j({fileId:(v==null?void 0:v.avatarFileId)||(y==null?void 0:y.avatarFileId)||""}),[T,S]=useState([]),[b,P]=useState([]),[N,D]=useState([]),[V,q]=useState([]),[A,_]=useState([]),[L,ce]=useState([]),[ae,xe]=useState(!1),[Te]=A6(),{mentionees:Ve,metadata:Ne,text:ze,markup:Me,onChange:be,queryMentionees:pt,clearAll:ct}=Jt({targetType:f.targetType,targetId:f.targetId||void 0}),[ie,Ie]=useState(!1);function Ye(){return I(this,null,function*(){var $e;if(f.targetId)try{Ie(!0);let Xe={},Ft=[];if(ze&&(Xe.text=ze),T.length&&Ft.push(...T.map(nr=>({fileId:nr.fileId,type:FileType.IMAGE}))),b.length&&Ft.push(...b.map(nr=>({fileId:nr.fileId,type:FileType.VIDEO}))),N.length&&Ft.push(...N.map(nr=>({fileId:nr.fileId,type:FileType.FILE}))),($e=Xe.text)!=null&&$e.length&&Xe.text.length>5e4){DT();return}let vs={targetId:f.targetId,targetType:f.targetType,data:Xe,dataType:"text",attachments:Ft,metadata:Ne,mentionees:Ve},$0=(yield PostRepository.createPost(vs)).data;if(m==null||m($0),ct(),S([]),P([]),D([]),q([]),_([]),ce([]),y){let nr=(h||[]).find(KC=>KC.userId===$0.postedUserId)!=null;y.postSetting===CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED&&!nr&&Z.success({content:B.createElement(FormattedMessage,{id:"post.success.submittedToReview"})});}}finally{Ie(!1);}})}let ut=()=>{Z.info({content:B.createElement(FormattedMessage,{id:"upload.attachmentLimit",values:{maxFiles:p}})});},ge=()=>{Z.info({content:B.createElement(FormattedMessage,{id:"upload.fileSizeLimit"})});},Zn=f.targetType==="community"?tt:se,rr=B.createElement(jc,{avatar:(v==null?void 0:v.avatarCustomUrl)||x||void 0,backgroundImage:Zn}),Wt=!ze&&T.length===0&&b.length===0&&N.length===0||ae||ie,O0=!(!ze&&T.length===0&&b.length===0&&N.length===0);useEffect(()=>{O0?c==null||c({title:B.createElement(FormattedMessage,{id:"post.discard.title"}),content:B.createElement(FormattedMessage,{id:"post.discard.content"}),okText:B.createElement(FormattedMessage,{id:"general.action.discard"})}):c==null||c(null);},[O0,c]);let[QC,U0]=useState(!1),WC=()=>U0(!0),j0=(H0=f==null?void 0:f.targetType)!=null?H0:t,ys=(V0=f==null?void 0:f.targetId)!=null?V0:o;return B.createElement(Hc,{className:l6("postComposeBar",e)},QC&&B.createElement(Dc,{targetId:ys||void 0,targetType:j0,onCreatePoll:($e,Xe,Ft,vs)=>I(void 0,null,function*(){ys&&(yield PostRepository.createPost({targetId:ys,targetType:j0,data:{pollId:$e,text:Xe},dataType:"poll",mentionees:Ft,metadata:vs}));}),onClose:()=>U0(!1)}),r&&g?B.createElement(Uc,{user:g,communities:n,hasMoreCommunities:s,loadMoreCommunities:l,currentTargetId:f.targetId,onChange:C},rr):rr,B.createElement($c,null,B.createElement(qc,{"data-qa-anchor":"post-creator-textarea",multiline:!0,value:Me,placeholder:a,mentionAllowed:!0,queryMentionees:pt,loadMoreMentionees:$e=>pt($e),append:B.createElement(_c,null,B.createElement(Rc,{files:V,uploadedFiles:T,uploadLoading:ae,onLoadingChange:xe,onChange:({uploaded:$e,uploading:Xe})=>{S($e),q(Xe);},onError:Te}),B.createElement(e8,{files:A,uploadedFiles:b,uploadLoading:ae,onLoadingChange:xe,onChange:({uploaded:$e,uploading:Xe})=>{P($e),_(Xe);},onError:Te}),B.createElement(ya,{files:L,uploadedFiles:N,uploadLoading:ae,onLoadingChange:xe,onChange:({uploaded:$e,uploading:Xe})=>{D($e),ce(Xe);},onError:Te})),onChange:({text:$e,plainText:Xe,mentions:Ft})=>{if((Ft==null?void 0:Ft.length)>30)return gt({title:B.createElement(FormattedMessage,{id:"postCreator.unableToMention"}),content:B.createElement(FormattedMessage,{id:"postCreator.overMentionees"}),okText:B.createElement(FormattedMessage,{id:"postCreator.okText"}),type:"info"});be({text:$e,plainText:Xe,mentions:Ft});}}),B.createElement(Vc,{"data-qa-anchor":"post-creator-footer"},B.createElement(Wc,{imageUploadDisabled:N.length>0||b.length>0||ae,videoUploadDisabled:N.length>0||T.length>0||ae,fileUploadDisabled:T.length>0||b.length>0||ae,fileLimitRemaining:p-N.length-T.length-b.length,uploadLoading:ae,onChangeImages:$e=>q($e),onChangeVideos:_,onChangeFiles:ce,onMaxFilesLimit:ut,onFileSizeLimit:ge}),B.createElement(Yc,{"data-qa-anchor":"post-creator-poll-button",onClick:WC},B.createElement(xl,null,B.createElement(Qc,null))),B.createElement(Gc,{disabled:Wt,"data-qa-anchor":"post-creator-post-button",onClick:Ye},B.createElement(FormattedMessage,{id:"post"})))))},Fi=memo(BT);var UT=e=>{let[t,o]=useState(!0),[r,n]=useState(!1),{currentUserId:a}=G(),s=(e==null?void 0:e.postId)||void 0,l=useMemo(()=>(e==null?void 0:e.creatorId)===a,[e,a]);useEffect(()=>{!s||l||PostRepository.isPostFlaggedByMe(s).then(c=>{n(c),o(!1);});},[s]);let m=()=>I(void 0,null,function*(){if(!(s==null||l))try{n(!0),yield PostRepository.flagPost(s);}catch(c){n(!1);}}),p=()=>I(void 0,null,function*(){if(!(s==null||l))try{n(!1),yield PostRepository.unflagPost(s);}catch(c){n(!0);}});return {isLoading:t,isFlaggedByMe:r,isUnableToFlag:l,flagPost:m,unflagPost:p,toggleFlagPost:()=>I(void 0,null,function*(){s==null||l||(r?p():m());})}},r8=UT;var $T=({postId:e,className:t,hidePostTarget:o,readonly:r,onDeleted:n})=>{var b;let a=ot(e),s=U(a==null?void 0:a.postedUserId),l=j({fileId:s==null?void 0:s.avatarFileId,imageSize:"small"}),m=aa(a==null?void 0:a.children),{userRoles:p}=G(),{isFlaggedByMe:u,toggleFlagPost:c}=r8(a),g=k6(a==null?void 0:a.dataType),{currentUserId:f}=G();Ut({postId:e,level:SubscriptionLevels.POST}),di({targetType:a==null?void 0:a.targetType,targetId:a==null?void 0:a.targetId,shouldSubscribe:()=>!!a});let C=(m||[]).find(P=>P.dataType==="poll"),v=ia((b=C==null?void 0:C.data)==null?void 0:b.pollId),y=(v==null?void 0:v.status)==="closed",h=()=>I(void 0,null,function*(){v!=null&&(yield PollRepository.closePoll(v.pollId));}),x=()=>I(void 0,null,function*(){a!=null&&(yield PostRepository.deletePost(a.postId),n==null||n(a.postId));}),T=()=>I(void 0,null,function*(){a!=null&&(yield PostRepository.approvePost(a.postId));}),S=()=>I(void 0,null,function*(){a!=null&&(yield PostRepository.declinePost(a.postId));});return a==null||g==null?B.createElement(Qe,{loading:!0}):B.createElement(B.Fragment,null,g({childrenPosts:m||[],handleClosePoll:h,isPollClosed:y,avatarFileUrl:l,user:s,poll:v,className:t,currentUserId:f||void 0,hidePostTarget:o,post:a,userRoles:p,readonly:r,isFlaggedByMe:u,handleReportPost:c,handleUnreportPost:c,handleApprovePost:T,handleDeclinePost:S,handleDeletePost:x}))},Ai=memo(e=>{let t=E("Post");return t?t(e):B.createElement($T,d({},e))});var GT=i(M2).attrs({width:48,height:48})`
  margin: 10px;
`,_T=i(F)`
  font-size: 14px;
  margin-top: 8px;
`,qT=i(pr).attrs({width:16,height:16})`
  margin-right: 6px;
`,ZT=e=>{switch(e){case"globalFeed":case"global":return ()=>"feed.emptyFeed";case"communityFeed":case"community":return (t,o)=>o==="reviewing"?"feed.emptyCommunityReviewingFeed":t?"feed.emptyJoinedCommunityPublicFeed":"feed.emptyCommunityPublicFeed";case"userFeed":case"user":return ()=>"feed.emptyUserFeed";case"myFeed":return ()=>"feed.emptyMyFeed";default:return ()=>"feed.emptyFeed"}},YT=({targetType:e,canPost:t=!1,className:o=void 0,feedType:r=void 0,goToExplore:n})=>{var a;return B.createElement(to,{className:o,title:B.createElement(FormattedMessage,{id:(a=ZT(e))==null?void 0:a(t,r)}),icon:B.createElement(GT,null)},n&&B.createElement(_T,{onClick:n},B.createElement(qT,null),B.createElement(FormattedMessage,{id:"community.exploreCommunities"})))},Di=e=>{let t=E("EmptyFeed");return t?t(e):B.createElement(YT,d({},e))};var KT=k`
  > :not(:first-child) {
    margin-top: 20px;
  }

  & .post:not(:first-child) {
    margin-top: 20px;
  }

  & .load-more {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`,Bi=e=>B.createElement(oT,w(d({},e),{className:String(KT)}));i.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-top: 10px;
  }

  color: ${({theme:e})=>e.palette.base.shade3};
  padding: 5rem 0.5rem;
  background: ${({theme:e})=>e.palette.system.background};
  color: ${({theme:e})=>e.palette.base.shade3};
  ${({theme:e})=>e.typography.body};
`;i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;i(uo).attrs({width:40,height:40})`
  fill: ${({theme:e})=>e.palette.base.shade2};
`;i.div`
  font-weight: 600;
  font-size: 17px;
  color: ${({theme:e})=>e.palette.base.main};
`;i.div`
  font-size: 14px;
  color: ${({theme:e})=>e.palette.base.shade1};
`;var i8=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme:e})=>e.palette.base.shade3};
  padding: 5rem 0.5rem;
  background: ${({theme:e})=>e.palette.system.background};
  color: ${({theme:e})=>e.palette.base.shade3};
  ${({theme:e})=>e.typography.body};
`,a8=i.div`
  margin-bottom: 12px;
`,s8=i(uo).attrs({width:40,height:40})`
  fill: ${({theme:e})=>e.palette.base.shade2};
`,l8=i.div`
  font-weight: bold;
  font-size: 17px;
  color: ${({theme:e})=>e.palette.base.main};
`,m8=i.div`
  font-size: 14px;
  color: ${({theme:e})=>e.palette.base.shade1};
`;var JT=()=>B.createElement(i8,null,B.createElement(a8,null,B.createElement(s8,null)),B.createElement(l8,null,B.createElement(FormattedMessage,{id:"privateFeed.title"})),B.createElement(m8,null,B.createElement(FormattedMessage,{id:"privateFeed.body"}))),zi=JT;var tN=()=>{let[e,t]=useState([]),[o,r]=useState(!1),[n,a]=useState(null),[s,l]=useState(!1);function m(){return I(this,null,function*(){try{let f=yield FeedRepository.queryGlobalFeed({limit:10,queryToken:n||void 0});a(f.paging.next||null),t(C=>[...C,...f.data]);}finally{r(!1);}})}useEffect(()=>{m();},[]);let p=f=>{t(C=>[f,...C]);},u=f=>{let C=e.filter(v=>v.postId!==f);t(C);},c=useMemo(()=>n!==null,[n]);return {contents:e,isLoading:o,prependItem:p,removeItem:u,loadMore:()=>{l(!0),c&&m();},hasMore:c,loadMoreHasBeenCalled:s}},p8=tN;function no(e,t){let n=ee({fetcher:CommunityRepository.getCommunities,params:e,shouldCall:()=>!!e&&(t?t==null?void 0:t():!0)}),{items:o}=n,r=M(n,["items"]);return d({communities:o},r)}var aN=({className:e="",feedType:t,showPostCreator:o=!1,goToExplore:r,readonly:n=!1,isHiddenProfile:a=!1})=>{let{currentUserId:s}=G(),{contents:l,isLoading:m,loadMore:p,prependItem:u,removeItem:c,hasMore:g,loadMoreHasBeenCalled:f}=p8();function C(){return new Array(3).fill(3).map((v,y)=>B.createElement(Qe,{key:y,loading:!0}))}return B.createElement(Bi,{className:e,dataLength:l.length,next:p,hasMore:g,loader:null},a?B.createElement(zi,null):B.createElement(B.Fragment,null,o?B.createElement(Fi,{"data-qa-anchor":"feed-post-creator-textarea",targetType:"user",targetId:s||void 0,enablePostTargetPicker:!1,onCreateSuccess:v=>u(v)}):null,m&&!f?C():null,(!m||f)&&l.length>0&&B.createElement(_e,{hasMore:g,loadMore:p,className:"load-more no-border",contentSlot:l.map(v=>B.createElement(Ai,{key:v.postId,postId:v.postId,hidePostTarget:!1,readonly:n,onDeleted:y=>c(y)}))}),!m&&l.length===0&&B.createElement(Di,{targetType:"global",goToExplore:r,canPost:o,feedType:t}),m&&f?C():null))},sN=({className:e="",feedType:t,targetType:o="myFeed",onPostCreated:r,goToExplore:n,readonly:a=!1,isHiddenProfile:s=!1})=>{let{currentUserId:l}=G(),m=l||void 0,{posts:p,hasMore:u,loadMore:c,isLoading:g,loadMoreHasBeenCalled:f}=Vt({targetType:"user",targetId:m,feedType:t}),{communities:C,hasMore:v,loadMore:y}=no({membership:"member"}),h=useCallback(()=>{y==null||y();},[y]);function x(){return new Array(3).fill(3).map((T,S)=>B.createElement(Qe,{key:S,loading:!0}))}return B.createElement(Bi,{className:e,dataLength:p.length,next:c,hasMore:u,loader:null},s?B.createElement(zi,null):B.createElement(B.Fragment,null,B.createElement(Fi,{"data-qa-anchor":"feed-post-creator-textarea",targetType:"user",targetId:m||void 0,communities:C,enablePostTargetPicker:!1,hasMoreCommunities:v,loadMoreCommunities:h,onCreateSuccess:r}),g&&!f?x():null,(!g||f)&&p.length>0&&B.createElement(_e,{hasMore:u,loadMore:c,className:"load-more no-border",contentSlot:B.createElement(B.Fragment,null,p.map(T=>B.createElement(Ai,{key:T.postId,postId:T.postId,hidePostTarget:!0,readonly:a})))}),!g&&p.length===0&&B.createElement(Di,{targetType:o,goToExplore:n,canPost:!0,feedType:t}),g&&f?x():null))},lN=({className:e="",targetType:t,targetId:o="",feedType:r,showPostCreator:n=!1,onPostCreated:a,goToExplore:s,readonly:l=!1,isHiddenProfile:m=!1})=>{let{posts:p,hasMore:u,loadMore:c,isLoading:g,loadMoreHasBeenCalled:f}=Vt({targetType:t,targetId:o||void 0,feedType:r});go({communityId:o,level:SubscriptionLevels.COMMUNITY});function C(){return new Array(3).fill(3).map((v,y)=>B.createElement(Qe,{key:y,loading:!0}))}return B.createElement(Bi,{className:e,dataLength:p.length,next:c,hasMore:u,loader:null},m?B.createElement(zi,null):B.createElement(B.Fragment,null,n?B.createElement(Fi,{"data-qa-anchor":"feed-post-creator-textarea",targetType:t,targetId:o,enablePostTargetPicker:!1,onCreateSuccess:a}):null,g&&!f?C():null,!g&&p.length>0&&B.createElement(_e,{hasMore:u,loadMore:c,className:"load-more no-border",contentSlot:B.createElement(B.Fragment,null,p.map(v=>B.createElement(Ai,{key:v.postId,postId:v.postId,hidePostTarget:!0,readonly:l})))}),!g&&p.length===0&&B.createElement(Di,{targetType:t,goToExplore:s,canPost:n}),g&&f?C():null))},mN=({className:e="",feedType:t,targetType:o,targetId:r="",showPostCreator:n=!1,onPostCreated:a,goToExplore:s,readonly:l=!1,isHiddenProfile:m=!1})=>{let{posts:p,hasMore:u,loadMore:c,isLoading:g,loadMoreHasBeenCalled:f}=Vt({targetType:o,targetId:r||void 0,feedType:t}),{communities:C,hasMore:v,loadMore:y}=no({membership:"member"});function h(){return new Array(3).fill(3).map((x,T)=>B.createElement(Qe,{key:T,loading:!0}))}return B.createElement(Bi,{className:e,dataLength:p.length,next:c,hasMore:u,loader:null},m?B.createElement(zi,null):B.createElement(B.Fragment,null,n&&B.createElement(Fi,{"data-qa-anchor":"feed-post-creator-textarea",targetType:o,targetId:r,communities:C,enablePostTargetPicker:!1,hasMoreCommunities:v,loadMoreCommunities:y,onCreateSuccess:a}),g&&!f?h():null,!g&&p.length>0&&B.createElement(_e,{hasMore:u,loadMore:c,className:"load-more no-border",contentSlot:B.createElement(B.Fragment,null,p.map(x=>B.createElement(Ai,{key:x.postId,postId:x.postId,hidePostTarget:!0,readonly:l})))}),!g&&p.length===0&&B.createElement(Di,{targetType:o,goToExplore:s,canPost:n,feedType:t}),g&&f?h():null))},dN=e=>e==="communityFeed"?"community":e==="userFeed"?"user":e==="globalFeed"||e==="global"?"feed":e||"myFeed",pN=e=>{let n=e,{targetType:t}=n,o=M(n,["targetType"]),r=dN(t);return r==="feed"?B.createElement(aN,d({},o)):r==="myFeed"?B.createElement(sN,w(d({},o),{targetType:r})):r==="community"?B.createElement(lN,w(d({},o),{targetType:r})):B.createElement(mN,w(d({},o),{targetType:r}))},$o=memo(e=>{let t=E("Feed");return t?t(e):B.createElement(pN,d({},e))});var cN=i.div`
  overflow: hidden;
  display: grid;
  grid-template-areas: 'side main' 'none main';
  grid-template-columns: min-content auto;
  grid-template-rows: 100%;
  grid-gap: 0 20px;
  width: 100%;
  height: 100%;
  padding: 0 20px 0 0;
  background: #f7f7f8;
`,uN=i.div`
  grid-area: main;
  overflow: auto;
  width: 100%;
  min-width: 20rem;
  max-width: 90.75rem;
  margin: 0 auto;
`,fN=i.div`
  grid-area: side;
  overflow: auto;
`,gN=({aside:e,children:t})=>B.createElement(cN,null,B.createElement(uN,null,t),B.createElement(fN,null,e)),c8=e=>{let t=E("Layout");return t?t(e):B.createElement(gN,d({},e))};var u8=i.div`
  background-color: white;
  border: 1px solid #e6e6e6;
  width: 280px;
  overflow: auto;
  flex-shrink: 0;
  ${({theme:e})=>e.typography.title}
`;var CN=i.div`
  border-top: 1px solid #f7f7f8;
  padding: 0 8px;
`,hN=i.h4`
  ${({theme:e})=>e.typography.title};
  padding: 0 8px;
  margin: 1em 0;
`,yN=({heading:e,children:t})=>B.createElement(CN,null,e&&B.createElement(hN,null,e),t),ba=yN;var vN=k`
  ${({active:e,theme:t})=>e&&`
      background-color: ${t.palette.primary.shade3};
      & > .actionItemChild {
        color: ${t.palette.primary.main};
      }
    `}
`,g8=k`
  display: flex;
  align-items: center;
  padding: 5px 8px;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.palette.neutral.main};
  justify-content: left;
  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>e.palette.base.shade4};
  }
  &:disabled {
    color: ${({theme:e})=>e.palette.neutral.shade2};
    background-color: transparent;
  }
  ${vN}
`,C8=i(ye)`
  ${g8};
  width: 100%;
`,h8=i.a`
  cursor: pointer;
  border-radius: 4px;
  ${g8}
  ${({theme:e})=>e.typography.bodyBold}
`,zl=i.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  ${({active:e,theme:t})=>e?k`
          background: ${t.palette.primary.main};
          // TODO: check color with design
          color: white;
        `:k`
          background: ${t.palette.base.shade4};
          color: inherit;
        `};
`;var xN=({"data-qa-anchor":e="",icon:t,children:o,active:r,className:n,onClick:a,element:s="a",disabled:l})=>s==="a"?B.createElement(h8,{"data-qa-anchor":e,className:n,onClick:a},t&&B.createElement(zl,{active:r},t),B.createElement("span",{className:"actionItemChild"},o)):B.createElement(C8,{"data-qa-anchor":e,className:n,active:r,disabled:l,onClick:a},t&&B.createElement(zl,{active:r},t),B.createElement("span",{className:"actionItemChild"},o)),Oi=xN;var MN=i(x2).attrs({width:20,height:20})``,bN=i(pr).attrs({width:20,height:20})``,IN=({shouldHideExplore:e,children:t})=>{let{onChangePage:o,page:r}=O();return B.createElement(ba,{heading:B.createElement(FormattedMessage,{id:"sidesectioncommunity.community"})},B.createElement(Oi,{"data-qa-anchor":"side-section-community-side-menu-action-item-news-feed-button",icon:B.createElement(MN,null),active:r.type==="newsfeed",onClick:()=>o("newsfeed")},B.createElement(FormattedMessage,{id:"sidesectioncommunity.newfeed"})),!e&&B.createElement(Oi,{"data-qa-anchor":"side-section-community-side-menu-action-item-explore-button",icon:B.createElement(bN,null),active:r.type==="explore",onClick:()=>o("explore")},B.createElement(FormattedMessage,{id:"sidesectioncommunity.explore"})),t)},y8=IN;var v8=i.span`
  ${({theme:e,highlight:t})=>t?e.typography.bodyBold:e.typography.body}
`,wN=({query:e,text:t})=>{if(e==null||(e==null?void 0:e.length)===0)return B.createElement(v8,null,t);let o=t.split(new RegExp(`(${e})`,"gi"));return B.createElement("span",null,o.map((r,n)=>B.createElement(v8,{key:`#${r}#${n}`,highlight:r.toLowerCase()===e.toLowerCase()},r)))},jl=wN;var x8=i(uo).attrs({width:16,height:16})`
  margin-right: 8px;
`,M8=i(b1).attrs({width:16,height:16})`
  margin-left: 8px;
  fill: #1253de;
`,Hl=i.div`
  padding-right: 1ch;
`,b8=i.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  ${({theme:e,isActive:t,isTitle:o})=>k`
    ${e.typography.bodyBold}
    ${t&&k`
      color: ${e.palette.primary.main};
    `}
    ${o&&e.typography.title}
  `}
`;var SN=({"data-qa-anchor":e="",isActive:t=!1,isOfficial:o=!1,isPublic:r=!1,isTitle:n=!1,isSearchResult:a=!1,name:s,searchInput:l="",className:m="",loading:p=!1,truncate:u})=>a?B.createElement(jl,{text:s||"",query:l}):B.createElement(b8,{className:m,isActive:t,isTitle:n},p?B.createElement(Hl,null,B.createElement(W,{width:120,style:{fontSize:12}})):B.createElement(Gd,{lines:u},B.createElement(Hl,{"data-qa-anchor":`${e}-community-name`,title:s},B.createElement(B.Fragment,null,!r&&B.createElement(x8,{"data-qa-anchor":`${e}-private-icon`}),s))),!p&&o&&B.createElement(M8,null)),_o=e=>{let t=E("CommunityName");return t?t(e):B.createElement(SN,d({},e))};var I8=i.a.attrs(e=>e)`
  display: grid;
  grid-template-areas: 'avatar title' 'avatar children';
  grid-template-columns: min-content auto;
  grid-template-rows: min-content min-content;
  grid-gap: 0 0.75em;
  padding: 0.5em;
  border-radius: 4px;
  align-items: center;
  color: ${({theme:e})=>e.palette.base.main};

  ${({loading:e})=>!e&&k`
      &:hover {
        cursor: pointer;
        background-color: ${({theme:t})=>t.palette.base.shade4};
      }
    `}

  ${({isActive:e,theme:t})=>e&&k`
      color: ${t.palette.primary.main};
      background-color: ${t.palette.primary.shade3};
    `};

  ${({children:e})=>!!e&&k`
      grid-template-areas: 'avatar title';
      align-items: center;
    `}
`,w8=i(J)`
  grid-area: avatar;
`,P8=i.div`
  grid-area: children;
`;var TN=({communityId:e,isActive:t,avatarFileUrl:o,onClick:r,isOfficial:n,isPublic:a,isSearchResult:s,name:l,searchInput:m,children:p,loading:u})=>B.createElement(I8,{"data-qa-anchor":"community-header",isActive:t,loading:u,onClick:()=>r==null?void 0:r(e)},B.createElement(w8,{avatar:o,backgroundImage:tt,loading:u}),u&&p?B.createElement(W,{style:{fontSize:8,maxWidth:120}}):B.createElement(_o,{"data-qa-anchor":"community-header",isActive:t,isOfficial:n,isPublic:a,isSearchResult:s,name:l,searchInput:m,loading:u}),p&&B.createElement(P8,null,p)),S8=e=>{let t=E("UICommunityHeader");return t?t(e):B.createElement(TN,d({},e))};var kN=({communityId:e="",onClick:t=()=>{},isActive:o=!1,isSearchResult:r=!1,searchInput:n="",children:a,loading:s=!1})=>{let l=Ce(e),m=j({fileId:l==null?void 0:l.avatarFileId,imageSize:"small"});return B.createElement(S8,{communityId:e,avatarFileUrl:m,isActive:o,isOfficial:l==null?void 0:l.isOfficial,isPublic:l==null?void 0:l.isPublic,isSearchResult:r,name:l==null?void 0:l.displayName,searchInput:n,loading:s,onClick:t},a)};var Ui=memo(kN);var AN=e=>B.createElement(oT,d({},e)),T8=i(AN)`
  &.no-scroll {
    width: 260px;
  }
`;i.p`
  text-align: center;
  color: ${({theme:e})=>e.palette.base.shade3};
`;var UN=i.p`
  text-align: center;
  color: ${({theme:e})=>e.palette.base.shade3};
`,jN=({className:e,communitiesQueryParam:t,activeCommunity:o})=>{let{onClickCommunity:r}=O(),{communities:n,hasMore:a,loadMore:s,isLoading:l,loadMoreHasBeenCalled:m}=no(t),p=t&&Reflect.has(t,"search"),u=(t==null?void 0:t.displayName)||"",c=useMemo(()=>n.length?n.map(({communityId:v})=>v):[],[n]),g=p&&!c.length,f=[c.length<4?"no-scroll":null,e].filter(ue);function C(){return new Array(5).fill(1).map((v,y)=>B.createElement(Ui,{key:y,loading:!0}))}return B.createElement(T8,{className:l6(f),dataLength:c.length,next:s,hasMore:a,loader:B.createElement("div",null)},B.createElement(_e,{hasMore:a,loadMore:s,className:"no-border",contentSlot:B.createElement(B.Fragment,null,g&&B.createElement(UN,null,B.createElement(FormattedMessage,{id:"communities.nocommunityfound"})),l&&!m&&C(),!l||m?c.map(v=>B.createElement(Ui,{key:v,communityId:v,isActive:v===o,isSearchResult:p,searchInput:u,onClick:()=>r(v)})):null,l&&m&&C())}))},N8=memo(jN);var HN=a=>{var s=a,{"data-qa-anchor":e="",renderer:t,label:o,className:r}=s,n=M(s,["data-qa-anchor","renderer","label","className"]);return B.createElement(A5,{"data-qa-anchor":`${e}-label`},B.createElement(D5,w(d({},n),{"data-qa-anchor":`${e}-radio`})),B.createElement(B.Fragment,null,t?t():B.createElement("span",{className:r},o),B.createElement(na,{checked:n.value})))},yn=HN;var GN=i(g2).attrs({height:20,width:20})`
  z-index: 3;
  fill: #fff;
`,_N=i.div`
  background: ${({theme:e})=>e.palette.base.shade3};
  border-radius: 4px;
  position: relative;
  display: block;
  width: 100%;
  height: 16.875rem;
  overflow: hidden;
  align-self: center;
  transition: background 0.2s linear;
`,qN=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  background: transparent;
  border: 1px solid #ffffff;
  padding: 10px 16px;
  border-radius: 4px;
  color: #ffffff;
`,ZN=i(da)`
  display: inline-block;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 0;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`,YN=i.div`
  width: 100%;
  height: 100%;
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`,QN=({uploading:e,uploaded:t,progress:o})=>{let r=[...e,...t].sort((s,l)=>{let m=Ll(s);return Ll(l)-m}),n=r.length>0?r[0]:null;if(!n)return null;if(!fn(n))return B.createElement(we,{key:n==null?void 0:n.name,file:n,progress:o[n==null?void 0:n.name]});let{fileId:a}=n;return B.createElement(we,{key:a,fileId:a})},WN=({"data-qa-anchor":e="",onChange:t,value:o,mimeType:r})=>{let[n,a]=useState([]),[s,l]=useState([]),m=Ue(o),p=C=>{if(C.length>0){let v=C[C.length-1];v!=null&&v.fileId&&t(v.fileId);}},u=useMemo(()=>m&&FileRepository.fileUrlWithSize(m==null?void 0:m.fileUrl,"medium"),[m]),{uploading:c,uploaded:g,progress:f}=Sr({files:n,uploadedFiles:s,onChange:({uploaded:C,uploading:v})=>{p(C),l(C),a(v);}});return B.createElement(_N,null,B.createElement(QN,{uploading:c,uploaded:g,progress:f}),B.createElement(YN,{src:u!=null?u:_r}),B.createElement(ZN,{"data-qa-anchor":`${e}-avatar-uploader`,mimeType:r,onChange:C=>a(C)},B.createElement(qN,null,B.createElement(GN,null)," \xA0 Upload image")))},Zo=WN;var RN=e=>{let[t,o]=useState(null);return useEffect(()=>{function r(){return I(this,null,function*(){if(e==null)return;let n=yield CategoryRepository.getCategory(e);o(n.data);})}r();},[e]),t},Yo=RN;var k8=i.div`
  display: grid;
  grid-template-areas: 'avatar title' 'avatar subtitle';
  grid-template-columns: min-content auto;
  grid-template-rows: min-content min-content;
  grid-gap: 0 0.5em;
  padding: 0.5rem;
  ${({hasNoChildren:e})=>e&&k`
      grid-template-areas: 'avatar title';
      align-items: center;
    `}

  ${({theme:e,clickable:t})=>t&&k`
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background: ${e.palette.base.shade4};
      }
    `}
`,L8=i(J)`
  grid-area: avatar;
`,F8=i.div`
  grid-area: title;
  ${({theme:e})=>e.typography.title};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,A8=i.div`
  grid-area: subtitle;
  ${({theme:e})=>e.typography.body}
`;var eE=({className:e,categoryId:t,name:o,avatarFileUrl:r,children:n,onClick:a,loading:s})=>B.createElement(k8,{className:e,title:o,hasNoChildren:!n,clickable:!s&&!!a,onClick:()=>t&&(a==null?void 0:a(t))},B.createElement(L8,{avatar:r,backgroundImage:C1,loading:s}),B.createElement(F8,{title:t},s?B.createElement(W,{style:{fontSize:12,maxWidth:124}}):o),n&&B.createElement(A8,{onClick:p=>p.stopPropagation()},n)),D8=e=>{let t=E("CategoryHeader");return t?t(e):B.createElement(eE,d({},e))};var oE=({className:e,categoryId:t,children:o,loading:r,onClick:n})=>{let a=Yo(t),s=j({fileId:a==null?void 0:a.avatarFileId,imageSize:"small"});return B.createElement(D8,{className:e,categoryId:a==null?void 0:a.categoryId,name:a==null?void 0:a.name,avatarFileUrl:s,loading:r||!1,onClick:n},o)},B8=oE;var aE=i.div`
  margin-top: 8px;
  color: ${({theme:e})=>e.palette.alert.main};
  ${({theme:e})=>e.typography.caption}
`,at=e=>B.createElement(ErrorMessage,d({as:aE},e));i.span`
  color: ${({theme:e})=>e.palette.base.shade1};
`;var Ia=i(y2).attrs({width:20,height:20})``,wa=i(uo).attrs({width:20,height:20})``;i(bt).attrs({width:12,height:12})`
  padding: 5px 12px;
  color: ${({theme:e})=>e.palette.base.shade1};
`;var z8=i.div`
  border: 1px solid #e3e4e8;
  &:focus-within {
    border: 1px solid ${({theme:e})=>e.palette.primary.main};
  }
  border-radius: 4px;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  max-height: 200px;
  overflow-y: auto;
`,Pa=i.div`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: ${({theme:e})=>e.palette.base.shade4};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,So=i.div`
  margin-left: auto;
  color: ${({theme:e})=>e.palette.base.shade1};
  ${({theme:e})=>e.typography.caption}
`,Tt=i.label`
  ${({theme:e})=>e.typography.bodyBold};
  margin-bottom: 4px;
  ${({theme:e})=>k`
    &.required {
      &::after {
        color: ${e.palette.alert.main};
        content: ' *';
      }
    }
  `}
`,To=i.div`
  display: flex;
  align-items: center;
`;i.input.attrs({type:"radio"})`
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: 0;
  flex-shrink: 0;
`;var Qo=i.form`
  min-width: 520px;
`,xn=i(Y).attrs({type:"submit"})`
  padding: 10px 16px;
  margin-left: 12px;
  ${({edit:e})=>e&&k`
      min-width: 100px;
      margin-left: 0;
    `};
`,Sa=i.div`
  padding: 12px 16px;
  ${({theme:e})=>e.typography.title};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({theme:e})=>e.palette.base.shade4};
`,Wo=i.div`
  background: ${({theme:e})=>e.palette.system.background};
  ${({theme:e,edit:t})=>t?k`
          > :not(:first-child) {
            margin-top: 12px;
          }
          border: 1px solid #edeef2;
          border-radius: 4px;
        `:k`
          > :not(:last-child) {
            border-bottom: 1px solid ${e.palette.base.shade4};
          }
        `}
`,Ko=i.div`
  ${({edit:e})=>e?k`
          padding: 0 16px 20px;
        `:k`
          padding: 20px 16px 16px;
        `}
`;i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;var Ta=i.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-bottom: 16px;
  }
  ${({theme:e})=>e.typography.bodyBold}
`,Na=i.div`
  color: ${({theme:e})=>e.palette.base.shade1};
  ${({theme:e})=>e.typography.body};
  width: 357px;
`;i.div`
  padding: 0 16px 20px;
  display: flex;
  flex-direction: column;
`;i.div`
  padding: 0 16px 20px;
  display: flex;
  flex-direction: column;
`;var Mn=i.div`
  border-top: 1px solid ${({theme:e})=>e.palette.base.shade4};
  padding: ${({edit:e})=>e?"12px 0":"12px 16px"};
  display: flex;
  justify-content: ${({edit:e})=>e?"flex-start":"flex-end"};
`,sE=i.div`
  background: rgba(0, 0, 0, 0);
  top: 0;
  left: 0;
  z-index: 1;
  transition: background 0.3s;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  pointer-events: none;
`;i(we)`
  display: inline-block;
  width: 100%;
  height: 100%;
`;i.div`
  background: ${({theme:e})=>e.palette.base.shade3};
  position: relative;
  display: block;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  align-self: center;
  &:hover ${sE} {
    background: rgba(0, 0, 0, 0.5);
  }
`;i.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;i(J)`
  margin-right: 8px;
`;var Er=i(MM).attrs({minRows:3,maxRows:15})`
  ${({theme:e})=>e.typography.global};
  display: block;
  outline: none;
  border-radius: 4px;
  resize: none;
  border: 1px solid #e3e4e8;
  padding: 10px 12px;
  &:focus-within {
    border-color: ${({theme:e})=>e.palette.primary.main};
  }
`,kr=i.input`
  ${({theme:e})=>e.typography.global};
  border-radius: 4px;
  border: 1px solid #e3e4e8;
  padding: 10px 12px;
  outline: none;
  &:focus-within {
    border-color: ${({theme:e})=>e.palette.primary.main};
  }
`,O8=i(Dt).attrs({width:16,height:16})`
  margin-left: auto;
`,st=i.div`
  > :not(:first-child) {
    margin-top: 20px;
  }
  display: flex;
  flex-direction: column;

  ${({error:e})=>e&&k`
      ${Er}, ${kr} {
        border-color: ${({theme:t})=>t.palette.alert.main};
      }
    `}
`,Ea=i(st)`
  margin-top: 0;
`,Jo=i.div``,U8=i.input`
  outline: none;
  border: none;
`;var j8=i.div`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  background: ${({theme:e})=>e.palette.base.shade4};
  border-radius: 28px;
  margin: 0.25rem;
  cursor: pointer;
`,H8=i.span`
  margin: 0 0.5rem;
`,V8=i(Oe).attrs({width:12,height:12})`
  fill: ${({theme:e})=>e.palette.base.shade1};
`,$8=i(F)`
  padding: 0.4rem 0.55rem;
  border-radius: 10rem;
`;var lE=({categoryId:e,name:t,fileUrl:o,onClick:r,onRemove:n})=>{let a=useCallback(l=>{l.stopPropagation(),e&&(r==null||r(e));},[r,e]),s=useCallback(l=>{l.stopPropagation(),e&&(n==null||n(e));},[n,e]);return B.createElement(j8,{onClick:a},B.createElement(J,{size:"tiny",avatar:o,backgroundImage:C1}),B.createElement(H8,null,t),!!n&&B.createElement($8,{onClick:s},B.createElement(V8,null)))},_8=lE;var dE=({categoryId:e,onClick:t,onRemove:o})=>{let r=Yo(e),n=j({fileId:r==null?void 0:r.avatarFileId,imageSize:"small"});return r==null?null:B.createElement(_8,{categoryId:r.categoryId,name:r.name,fileUrl:n,onClick:a=>t==null?void 0:t(a),onRemove:o})},q8=dE;function Hi(e){let r=ee({fetcher:CategoryRepository.getCategories,params:e}),{items:t}=r,o=M(r,["items"]);return d({categories:t},o)}var fE=({"data-qa-anchor":e="",value:t,onChange:o,parentContainer:r=null})=>{let n=t!=null?t:[],[a,s]=useState(!1),[l,m]=useState(""),p=()=>s(!a),{formatMessage:u}=useIntl(),c=useRef(null),g=h=>{var x;m(h),s(!!h),h&&((x=c.current)==null||x.focus());},f=()=>{m(""),s(!1);},{categories:C}=Hi({includeDeleted:!1,limit:100}),v=C.filter(h=>l?h.name.includes(l):!0).map(h=>({name:h.name,value:h.categoryId})),y=n.map(h=>{var x;return {name:((x=C.find(T=>T.categoryId===h))==null?void 0:x.name)||"",value:h}});return B.createElement(ro,{"data-qa-anchor":`${e}-category`,value:y,options:v,renderTrigger:S=>{var b=S,{selected:h,remove:x}=b,T=M(b,["selected","remove"]);return B.createElement(z8,w(d({},T),{onClick:p,"data-qa-anchor":`${e}-category-selector`}),h.map(P=>B.createElement(q8,{key:P.value,categoryId:P.value,onRemove:()=>x(P,o)})),B.createElement(U8,{ref:c,"data-qa-anchor":"category-selector-input",type:"text",value:l,placeholder:u({id:"selectACategory"}),onChange:P=>g(P.target.value)}),B.createElement(O8,null))},renderItem:({value:h})=>B.createElement(B8,{categoryId:h}),parentContainer:r,isOpen:a,handleClose:f,multiple:!0,onSelect:({value:h})=>{var x;m(""),(x=c.current)==null||x.focus(),o==null||o([...new Set([...n,h])]);}})},ka=e=>{let t=E("CategorySelector");return t?t(e):B.createElement(fE,d({},e))};var hE=1,Fa=(e,t=hE)=>{let[o,r]=useState([]),[n,a]=useState(!1),[s,l]=useState(!1),[m,p]=useState(!1),u=useRef(null),c=useRef(null),g=()=>{u.current&&(u.current(),p(!0));};return useEffect(()=>{if(e.length<t)return;c.current&&(c.current(),c.current=null);let f=UserRepository.searchUserByDisplayName({displayName:e,limit:10},C=>{l(C.hasNextPage||!1),a(C.loading),u.current=C.onNextPage||null,r(C.data);});return c.current=f,()=>{var C;(C=c.current)==null||C.call(c),c.current=null;}},[e,t]),{users:o,isLoading:n,hasMore:s,loadMore:g,loadMoreHasBeenCalled:m}};var Q8=i.div`
  display: grid;
  grid-template-areas: 'avatar title' 'avatar subtitle';
  grid-template-columns: min-content auto;
  grid-template-rows: min-content min-content;
  grid-gap: 0 0.5em;
  padding: 1em;
  ${({noSubtitle:e})=>!e&&k`
      grid-template-areas: 'avatar title';
      align-items: center;
    `}
`,W8=i(J)`
  grid-area: avatar;
`,K8=i.div`
  grid-area: title;
  ${({theme:e})=>e.typography.title}
  display: flex;
  min-width: 0;
  align-items: center;

  > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`,J8=i.div`
  grid-area: subtitle;
  ${({theme:e})=>e.typography.body}
`;var yE=({userId:e,displayName:t,avatarFileUrl:o,children:r,onClick:n,isBanned:a})=>{let s=()=>e&&(n==null?void 0:n(e));return B.createElement(Q8,{noSubtitle:!!r},B.createElement(W8,{avatar:o,backgroundImage:se,onClick:s}),B.createElement(K8,{title:e||void 0,onClick:s},B.createElement("div",null,t)," ",a&&B.createElement(Xt,null)),r&&B.createElement(J8,null,r))},Aa=e=>{let t=E("UserHeader");return t?t(e):B.createElement(yE,d({},e))};var xE=({userId:e,children:t,onClick:o,isBanned:r=!1})=>{let n=U(e),a=j({fileId:n==null?void 0:n.avatarFileId,imageSize:"small"});return B.createElement(Aa,{userId:n==null?void 0:n.userId,displayName:n==null?void 0:n.displayName,avatarFileUrl:a,isBanned:r,onClick:o},t)},io=xE;var X8=i.div`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  background: ${({theme:e})=>e.palette.base.shade4};
  border-radius: 28px;
  margin: 0.25rem;
  cursor: pointer;
`,R8=i.span`
  margin: 0 0.5rem;
`;i(Oe).attrs({width:12,height:12})`
  fill: ${({theme:e})=>e.palette.base.shade1};
`;var e7=i(F)`
  padding: 0.4rem 0.55rem;
  border-radius: 10rem;
`;var ME=({userId:e,displayName:t="Anonymous",fileUrl:o,onClick:r,onRemove:n})=>{let a=useCallback(l=>{l.stopPropagation(),e&&(r==null||r(e));},[r,e]),s=useCallback(l=>{l.stopPropagation(),e&&(n==null||n(e));},[n,e]);return B.createElement(X8,{onClick:a},B.createElement(J,{size:"tiny",avatar:o,backgroundImage:se}),B.createElement(R8,null,t),!!n&&B.createElement(e7,{onClick:s},B.createElement(bt,null)))},o7=e=>{let t=E("UserChip");return t?t(e):B.createElement(ME,d({},e))};var IE=({userId:e,onClick:t,onRemove:o})=>{let r=U(e),n=j({fileId:r==null?void 0:r.avatarFileId,imageSize:"small"});return r==null?null:B.createElement(o7,{userId:r.userId,displayName:r.displayName,fileUrl:n,onClick:a=>t==null?void 0:t(a),onRemove:o})},r7=IE;var n7=i.div`
  border: 1px solid #e3e4e8;
  &:focus-within {
    border: 1px solid ${({theme:e})=>e.palette.primary.main};
  }
  border-radius: 4px;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  max-height: 200px;
  overflow-y: auto;
`,i7=i.input`
  outline: none;
  border: none;
  width: 100%;
`;var TE=({value:e,onChange:t,parentContainer:o=null})=>{let r=e!=null?e:[],{currentUserId:n}=G(),[a,s]=useState(!1),[l,m]=useState(""),{users:p=[]}=Fa(l),{formatMessage:u}=useIntl(),c=p.filter(({displayName:y,userId:h})=>(y==null?void 0:y.toLowerCase().includes(l.toLowerCase()))&&h!==n).map(({displayName:y,userId:h})=>({name:y,value:h})),g=r.map(y=>{var h;return {name:((h=p.find(x=>x.userId===y))==null?void 0:h.displayName)||"",value:y}}),f=()=>{s(!1),m("");},C=useRef(null),v=y=>{var h;m(y),s(!!y),y&&((h=C.current)==null||h.focus());};return B.createElement(ro,{"data-qa-anchor":"user",value:g,options:l?c:[],renderTrigger:T=>{var S=T,{selected:y,remove:h}=S,x=M(S,["selected","remove"]);return B.createElement(n7,d({},x),y.map(b=>B.createElement(r7,{key:b.value,userId:b.value,onRemove:()=>h(b,t)})),B.createElement(i7,{ref:C,"data-qa-anchor":"user-selector-input",type:"text",value:l,placeholder:u({id:"UserSelector.placeholder"}),onChange:b=>v(b.target.value)}))},renderItem:({value:y})=>B.createElement(io,{userId:y}),parentContainer:o,isOpen:a,handleClose:f,multiple:!0,onSelect:({value:y})=>{var h;t==null||t([...new Set([...r,y])]),(h=C.current)==null||h.focus(),m("");}})},Xo=memo(e=>{let t=E("UserSelector");return t?t(e):B.createElement(TE,d({},e))});var m7=_t.object({displayName:_t.string().max(30),description:_t.string().max(180),categoryIds:_t.string().array().min(1),avatarFileId:_t.string().nullable().optional(),tags:_t.string().array().optional(),isPublic:_t.boolean()}),NE=m7.extend({userIds:_t.string().array().optional()}).refine(e=>{var t;return !(!e.isPublic&&((t=e.userIds)==null?void 0:t.length)===0)}),EE=m7.partial(),d7=()=>useForm({defaultValues:{avatarFileId:void 0,description:"",displayName:"",isPublic:!0,tags:[],userIds:[],categoryIds:[]},resolver:zodResolver(NE)}),p7=e=>useForm({defaultValues:{avatarFileId:e.avatarFileId,description:e.description,displayName:e.displayName,isPublic:e.isPublic,tags:e.tags,categoryIds:e.categoryIds},resolver:zodResolver(EE)});var Vl=({title:e,children:t})=>B.createElement(Wo,null,B.createElement(Ko,null,t)),c7=({type:e,description:t,icon:o})=>B.createElement(Ta,null,B.createElement(Pa,null,o),B.createElement("div",null,e,B.createElement(Na,null,t))),AE=({"data-qa-anchor":e="",className:t,onSubmit:o,onCancel:r})=>{let[n,a]=useState(!1),{register:s,handleSubmit:l,setError:m,watch:p,control:u,formState:c,setValue:g,getValues:f}=d7(),{errors:C}=c,v=p("displayName"),y=p("description"),h=p("isPublic"),x=useRef(null),T=P=>I(void 0,null,function*(){var N;try{if(a(!0),!P.isPublic&&((N=P.userIds)==null?void 0:N.length)===0){m("userIds",{message:"Please select at least one member"});return}yield o==null?void 0:o(w(d({},P),{displayName:P.displayName||"",avatarFileId:P.avatarFileId||void 0}));}finally{a(!1);}}),S=!c.isValid||n,b=x.current&&x.current.scrollHeight-x.current.clientHeight-x.current.scrollTop;return B.useLayoutEffect(()=>{b!=null&&x.current&&b<10&&x.current.scrollHeight-x.current.clientHeight-x.current.scrollTop>10&&x.current.scrollTo({top:x.current.scrollHeight});},[x.current,b,c]),B.createElement(Qo,{className:t,onSubmit:l(T)},B.createElement(Jo,{ref:x},B.createElement(Vl,{title:"General"},B.createElement(st,null,B.createElement(Controller,{name:"avatarFileId",control:u,render:D=>{var {field:V}=D,q=V,N=M(q,["ref"]);return B.createElement(Zo,w(d({mimeType:"image/png, image/jpeg"},N),{"data-qa-anchor":e}))}})),B.createElement(st,{error:C.displayName},B.createElement(To,null,B.createElement(Tt,{htmlFor:"displayName",className:"required"},B.createElement(FormattedMessage,{id:"community.name"})),B.createElement(So,null,v.length,"/30")),B.createElement(kr,w(d({},s("displayName")),{"data-qa-anchor":`${e}-community-name-input`,placeholder:"Enter community name"})),B.createElement(at,{errors:C,name:"displayName"})),B.createElement(st,{error:C.description},B.createElement(To,null,B.createElement(Tt,{htmlFor:"description"},B.createElement(FormattedMessage,{id:"community.about"})),B.createElement(So,null,(y==null?void 0:y.length)||0,"/180")),B.createElement(Er,w(d({},s("description",{maxLength:{value:180,message:"Description text is too long"}})),{"data-qa-anchor":`${e}-community-description-textarea`,placeholder:"Enter description"})),B.createElement(at,{errors:C,name:"description"})),B.createElement(st,{error:C.categoryIds},B.createElement(Tt,{htmlFor:"categoryIds",className:"required"},B.createElement(FormattedMessage,{id:"community.category"})),B.createElement(Controller,{rules:{required:"Category is required"},name:"categoryIds",render:V=>{var {field:q}=V,A=q,D=M(A,["ref","onChange"]);return B.createElement(ka,w(d({parentContainer:x.current,onChange:_=>g("categoryIds",_,{shouldValidate:!0})},D),{"data-qa-anchor":`${e}`}))},control:u}),B.createElement(at,{errors:C,name:"category"}))),B.createElement(Vl,{title:B.createElement(FormattedMessage,{id:"community.categorypermission"})},B.createElement(Controller,{name:"isPublic",render:({field:P})=>B.createElement(B.Fragment,null,B.createElement(yn,w(d({},P),{value:P.value===!0,onChange:N=>P.onChange(N.target.checked),"data-qa-anchor":"community-form-public-type-community-type",label:"Public",renderer:()=>B.createElement(c7,{type:"Public",description:"Anyone can join, view and search the posts in this page.",icon:B.createElement(Ia,null)})})),B.createElement(yn,w(d({},P),{value:P.value===!1,onChange:N=>P.onChange(!N.target.checked),"data-qa-anchor":"community-form-private-type-community-type",label:"Private",renderer:()=>B.createElement(c7,{type:"Private",description:"Only members invited by the moderators can join, view, and search the posts in this page.",icon:B.createElement(wa,null)})}))),control:u})),!h&&B.createElement(Vl,{title:"Community members"},B.createElement(Ea,{error:C.userIds},B.createElement(Tt,{className:"required"},B.createElement(FormattedMessage,{id:"community.addmembers"})),B.createElement(Controller,{name:"userIds",render:D=>{var {field:V}=D,q=V,N=M(q,["ref"]);return B.createElement(Xo,d({parentContainer:x.current,"data-qa-anchor":e},N))},control:u}),B.createElement(at,{errors:C,name:"userIds"})))),B.createElement(Mn,null,B.createElement(F,{onClick:P=>{P.preventDefault(),r==null||r();}},B.createElement(FormattedMessage,{id:"cancel"})),B.createElement(xn,{"data-qa-anchor":`${e}-save-button`,disabled:S},B.createElement(FormattedMessage,{id:"create"}))))},Ba=memo(AE);var OE=({isOpen:e,onClose:t})=>{let{formatMessage:o}=useIntl();if(!e)return null;let r=()=>re({title:o({id:"CommunityCreationModal.title"}),content:o({id:"CommunityCreationModal.content"}),cancelText:o({id:"CommunityCreationModal.cancelText"}),okText:o({id:"CommunityCreationModal.okText"}),onOk:t});return B.createElement(ke,{"data-qa-anchor":"community-creation-modal",title:"Create community",onCancel:r},B.createElement(Ba,{"data-qa-anchor":"community-creation",onCancel:r,onSubmit:a=>I(void 0,null,function*(){let s=yield CommunityRepository.createCommunity(a);t(s.data.communityId);})}))},u7=memo(e=>{let t=E("CommunityCreationModal");return t?t(e):B.createElement(OE,d({},e))});var HE=({className:e,activeCommunity:t})=>{let{socialCommunityCreationButtonVisible:o}=t4(),{onCommunityCreated:r}=O(),[n,a]=useState(!1);return B.createElement(ba,{heading:B.createElement(FormattedMessage,{id:"SideSectionMyCommunity.myCommunity"})},o&&B.createElement(Oi,{"data-qa-anchor":"side-section-my-community-create-community-button",icon:B.createElement(ft,{height:"20px"}),element:"button",onClick:()=>a(!0)},B.createElement(FormattedMessage,{id:"createCommunity"})),B.createElement(N8,{className:e,communitiesQueryParam:{membership:"member",limit:20},activeCommunity:t}),B.createElement(u7,{isOpen:n,onClose:m=>{a(!1),m&&r(m);}}))},g7=memo(HE);var _E=i.div`
  flex: 1 1 auto;
  z-index: 1;
  position: relative;
  display: block;
  overflow-y: auto;
  min-height: 3em;
  max-height: 200px;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
`,qE=i.div`
  flex: 1 1 auto;
  z-index: 1;
  position: relative;
  background: #fff;
  padding: 18px 72px 18px 72px;
  color: ${({theme:e})=>e.palette.base.shade3};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ZE=({items:e,onPick:t=()=>{},append:o,renderItem:r=n=>B.createElement("span",null,n)})=>{let n=useRef(null),[a,s]=useState(-1),l=g=>()=>s(g),m=()=>s(-1),p=g=>()=>t(g),u=()=>{if(n.current==null)return;let g=a>0?a-1:e.length-1,{scrollTop:f,clientHeight:C}=n.current,v=n.current.children[g],y=(v==null?void 0:v.clientTop)||0,h=(v==null?void 0:v.clientHeight)||0;(y<f||y+h>f+C)&&n.current.scrollTo(0,y),s(g);},c=()=>{if(n.current==null)return;let g=a<e.length-1?a+1:0,{scrollTop:f,clientHeight:C}=n.current,v=n.current.children[g],y=(v==null?void 0:v.clientTop)||0,h=(v==null?void 0:v.clientHeight)||0;(y<f||y+h>f+C)&&n.current.scrollTo(0,y+h-C),s(g);};return nt("ArrowUp",u),nt("ArrowDown",c),nt("Escape",()=>s(-1)),nt("Enter",()=>t==null?void 0:t(a)),e.length?B.createElement(_E,{ref:n,onMouseLeave:m},e.map((g,f)=>B.createElement(Ke,{key:`#${f}`,hover:f===a,onClick:p(f),onMouseEnter:l(f)},r(g))),o&&B.createElement(Ke,null,o)):B.createElement(qE,{"data-qa-anchor":"suggestions-placeholder-no-results"},B.createElement(FormattedMessage,{id:"placeholder.noResults"}))},Vi=ZE;var QE=i.div`
  position: relative;
`,WE=i(oo)`
  z-index: 10;
  position: absolute;
  top: calc(100% + 0.25rem);
  width: 100%;
  color: ${({theme:e})=>e.palette.base.main};
`;var h7=({value:e,disabled:t})=>{let[o,r]=useState(!1),[n,a]=ai(o),s=()=>r(!1),l=()=>r(!0);return useEffect(()=>{t||e&&e.length>0&&r(!0);},[e,t]),useEffect(()=>{!a&&s();},[a]),nt("Escape",s),{isOpen:o,open:l,close:s,containerRef:n}},KE=({"data-qa-anchor":e="",items:t,value:o,searchValue:r,placeholder:n,loadMore:a,prepend:s,append:l,invalid:m,disabled:p,renderItem:u,onSearchValueChange:c,onClear:g,onChange:f})=>{let[C,v]=useState(!1),[y,h]=ai(C),x=()=>v(!1);return useEffect(()=>{p||r.length>0&&v(!0);},[r,p]),useEffect(()=>{!h&&x();},[h]),nt("Escape",x),B.createElement(QE,{ref:y},B.createElement(Ge,{"data-qa-anchor":e,value:r,invalid:m,disabled:p,prepend:s,append:l,placeholder:n,onClear:g,onChange:b=>c==null?void 0:c(b.plainText),onClick:()=>v(!0)}),C&&B.createElement(WE,null,B.createElement(Vi,{items:t,append:a&&B.createElement(F,{fullWidth:!0,onClick:a},B.createElement(FormattedMessage,{id:"loadMore"})),onPick:b=>{f==null||f(t[b].value),v(!1),c==null||c("");},renderItem:b=>u(b)})))},y7=KE;var v7=i.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`,x7=i(pr).attrs({width:16,height:16})`
  fill: ${({theme:e})=>e.palette.base.shade2};
`,M7=i.div`
  position: relative;

  ${({sticky:e})=>e&&k`
      z-index: 500;
      position: sticky;
      top: 0;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    `};
`;i(y7)`
  ${({theme:e})=>e.typography.body};
  width: 100%;
  padding: 10px 10px 10px 40px;
  background: ${({theme:e})=>e.palette.system.background};
  border: 1px solid #d5d7dd;
  border-radius: 4px;
  outline: none;
  color: ${({theme:e})=>e.palette.base.main};

  &::placeholder {
    color: ${({theme:e})=>e.palette.base.shade1};
  }
`;var Oa=i.nav`
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px 4px 0 0;
  border: 1px solid #edeef2;
`,Ua=i.ul`
  margin: 0;
  padding: 0 16px;
  list-style-type: none;
`,ja=i.li`
  display: inline-block;
`,Ha=i.button`
  padding: 0.75em;
  margin-right: 0.5em;
  background-color: #ffffff;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  outline: none;
  color: #abaeba;
  ${({theme:e})=>e.typography.bodyBold}
  text-align: center;

  &:hover {
    color: #818698;
  }

  &.active {
    ${({theme:e})=>`
      border-bottom: 2px solid ${e.palette.primary.main};
      color: ${e.palette.primary.main};
    `}
  }

  &:disabled {
    color: #abaeba;
  }

  transition: border-color 0.3s;
`;var XE=({"data-qa-anchor":e="",className:t="",tabs:o,activeTab:r,onChange:n})=>B.createElement(Oa,{className:t},B.createElement(Ua,{"data-qa-anchor":`${e}-tabs-list`},o.map(({value:a,label:s})=>B.createElement(ja,{key:a,"data-qa-anchor":`${e}-${a}-tab-item`},B.createElement(Ha,{"data-qa-anchor":a===r?`${e}-${a}-tab-button-active`:`${e}-${a}-tab-button`,className:a===r?"active":"",onClick:()=>n(a)},s))))),lt=memo(e=>{let t=E("Tabs");return t?t(e):B.createElement(XE,d({},e))});var RE=i.div`
  position: relative;
`,I7=i(oo)`
  z-index: 10;
  position: absolute;
  top: calc(100% + 0.25rem);
  width: 100%;
  color: ${({theme:e})=>e.palette.base.main};
`,ek=({searchValue:e,isOpen:t})=>{let{onClickCommunity:o}=O(),{communities:r,hasMore:n,loadMore:a}=no({displayName:e}),s=r.filter(ue),l=s.map(m=>m.displayName);return t?B.createElement(I7,null,B.createElement(Vi,{items:l,append:n&&a?B.createElement(F,{fullWidth:!0,onClick:a},B.createElement(FormattedMessage,{id:"loadMore"})):null,onPick:m=>s[m]?o(s[m].communityId):null,renderItem:m=>{let p=r.find(u=>u.displayName===m);return p&&B.createElement(Ui,{communityId:p.communityId})}})):null},tk=({searchValue:e,isOpen:t})=>{let{onClickUser:o}=O(),{users:r,hasMore:n,loadMore:a}=Fa(e),s=r.filter(ue),l=s.map(m=>m.displayName);return t?B.createElement(I7,null,B.createElement(Vi,{items:l,append:n&&a?B.createElement(F,{fullWidth:!0,onClick:a},B.createElement(FormattedMessage,{id:"loadMore"})):null,onPick:m=>s[m]?o(s[m].userId):null,renderItem:m=>{let p=r.find(u=>u.displayName===m);return p&&B.createElement(io,{userId:p.userId,isBanned:p==null?void 0:p.isGlobalBanned})}})):null},ok=({className:e,sticky:t=!1,searchBy:o})=>{let[r,n]=useState(""),[a,s]=useState(o),{open:l,close:m,isOpen:p,containerRef:u}=h7({value:r});function c(){n("");}return B.createElement(M7,{className:e,sticky:t},B.createElement(FormattedMessage,{id:"exploreHeader.searchCommunityPlaceholder"},([g])=>B.createElement(RE,{ref:u},B.createElement(Ge,{"data-qa-anchor":"social-search-input",value:r,prepend:B.createElement(v7,null,B.createElement(x7,null)),placeholder:typeof g=="string"?g:void 0,onClear:c,onChange:f=>n==null?void 0:n(f.plainText),onClick:()=>l()}),p?B.createElement(lt,{tabs:[{value:"communities",label:"Communities"},{value:"accounts",label:"Accounts"}],activeTab:a,onChange:f=>s(f)}):null,a==="communities"?B.createElement(ek,{searchValue:r,isOpen:p}):null,a==="accounts"?B.createElement(tk,{searchValue:r,isOpen:p}):null)))},w7=e=>{let t=E("SocialSearch");return t?t(e):B.createElement(ok,d({},e))};var rk=i(w7)`
  background: ${({theme:e})=>e.palette.system.background};
  padding: 0.5rem;
`,nk=({className:e,activeCommunity:t})=>B.createElement(u8,{"data-qa-anchor":"community-side-menu",className:e},B.createElement(rk,{sticky:!0,searchBy:"communities"}),B.createElement(y8,null),B.createElement(g7,{activeCommunity:t})),P7=nk;var ql=16,mk={720:1,1024:2,1280:3,1440:4,1800:5},dk=i.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 16px 0;
  align-items: flex-end;
`,pk=i.h2`
  ${({theme:e})=>e.typography.headline};
  display: inline-block;
  margin: 0;
`,ck=i.div`
  display: flex;
  gap: 20px;
`,T7=i(F).attrs({variant:"secondary"})`
  width: 28px;
  padding: 2px;

  &:hover {
    background-color: transparent;
  }

  &:disabled {
    color: ${({theme:e})=>e.palette.neutral.shade3};
  }
`,uk=i.div`
  overflow-x: hidden;
`;function fk(e,t){let r=Object.entries(t).sort(([n],[a])=>Number(n)-Number(a)).find(([n])=>e<=Number(n));return r?r[1]:3}var gk=i.div`
  margin-bottom: 0.188rem; // give the shadow a little space
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  grid-gap: ${ql}px;

  ${({currentWidth:e,columns:t})=>{let o=fk(e,t);return k`
      grid-auto-columns: calc(
        (100% / ${o}) - (${ql}px * ${o-1} / ${o})
      );
    `}}
`,Ck=({title:e="",children:t,columns:o=mk,hasMore:r=!1,loadMore:n=()=>{}})=>{var v,y;let a=useRef(null),{x:s}=lk(a),[l,{width:m}]=sk(),[p,u]=useState(0),c=(y=(v=a.current)==null?void 0:v.scrollWidth)!=null?y:0,g=useMemo(()=>c>m,[c,m]),f=useMemo(()=>s>=c-m,[s,c,m]),C=useMemo(()=>s===0,[s]);return useEffect(()=>{var h;return (h=a.current)==null?void 0:h.scrollTo({left:(m+ql)*p,behavior:"smooth"})},[m,p]),useEffect(()=>{s>=c-m*2&&r&&n();},[s,c,m,r,n]),B.createElement("div",{ref:l},B.createElement(dk,null,B.createElement(pk,null,e),g&&B.createElement(ck,null,B.createElement(T7,{disabled:C,onClick:()=>u(p-1)},B.createElement(co,{height:"20px",width:"20px"})),B.createElement(T7,{disabled:f,onClick:()=>u(p+1)},B.createElement(cr,{height:"20px",width:"20px"})))),B.createElement(uk,{ref:a,page:p},a.current?B.createElement(gk,{currentWidth:a.current.clientWidth,columns:o},t):null))},$a=Ck;var N7=i.div`
  min-width: 278px;
  min-height: 289px;
  cursor: pointer;
  box-shadow: 0 0 1px rgba(40, 41, 61, 0.08), 0 0.5px 2px rgba(96, 97, 112, 0.16);
  border-radius: 8px;
  background: ${({theme:e})=>e.palette.system.background};
  overflow: hidden;
`,E7=i.div`
  padding-top: 74.46%;
  position: relative;

  ${({backgroundImage:e,theme:t})=>k`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 42.03%, rgba(0, 0, 0, 0.5) 100%),
      ${e?`url(${CSS.escape(e)})`:t.palette.base.shade3};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `}
`,k7=i.div`
  position: absolute;
  bottom: 12px;
  left: 16px;
  right: 16px;
`,L7=i(_o)`
  color: #ffffff;
  ${({theme:e})=>e.typography.headline}
  line-height: 30px !important;

  * {
    color: #ffffff;
    line-height: 30px !important;
    padding: 0;
  }
`,F7=i.div`
  word-break: break-word;
  color: #ffffff;
  margin-bottom: 0;
  line-height: 20px;
  ${({theme:e})=>e.typography.body}
`,A7=i.div`
  padding: 12px 16px;
`;i.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;var D7=i.div`
  color: ${({theme:e})=>e.palette.neutral.shade1};
  ${({theme:e})=>e.typography.caption}
  margin-bottom: 4px;
`,B7=i.div`
  ${({theme:e})=>e.typography.caption}
`;var vk=c=>{var g=c,{avatarFileUrl:e,community:t,communityCategories:o,membersCount:r,description:n,onClick:a,isOfficial:s,isPublic:l,name:m,loading:p}=g,u=M(g,["avatarFileUrl","community","communityCategories","membersCount","description","onClick","isOfficial","isPublic","name","loading"]);return B.createElement(N7,d({onClick:()=>(t==null?void 0:t.communityId)&&(a==null?void 0:a(t.communityId))},u),B.createElement(E7,{backgroundImage:e!=null?e:_r},B.createElement(k7,null,B.createElement(L7,{isOfficial:s,isPublic:l,isTitle:!0,name:m,truncate:2}),B.createElement(Gd,{lines:1},B.createElement(F7,null,(o||[]).map(C=>C.name).join(", "))))),B.createElement(A7,null,p&&B.createElement(W,{style:{fontSize:8}}),!p&&B.createElement(D7,null,tp(r||0)," ",B.createElement(FormattedMessage,{id:"plural.member",values:{amount:r}})),!p&&n?B.createElement(Gd,{lines:2},B.createElement(B7,null,n)):null))},Sn=e=>{let t=E("UICommunityCard");return t?t(e):B.createElement(vk,d({},e))};var Ik=e=>{let[t,o]=useState([]);return useEffect(()=>{function r(){return I(this,null,function*(){if(e==null||e.length===0)return;let n=yield Promise.all(e.map(a=>I(this,null,function*(){return (yield CategoryRepository.getCategory(a)).data})));o(n);})}r();},[e]),t},Tn=Ik;var Pk=r=>{var n=r,{communityId:e,onClick:t}=n,o=M(n,["communityId","onClick"]);var c;let a=Ce(e),s=Ue(a==null?void 0:a.avatarFileId),l=Tn((a==null?void 0:a.categoryIds)||[]),m=j({fileId:(c=s==null?void 0:s.fileId)!=null?c:void 0});if(a==null)return B.createElement(B.Fragment,null);let{membersCount:p,description:u}=a;return B.createElement(Sn,d({avatarFileUrl:m,community:a,communityCategories:l,membersCount:p,description:u,isOfficial:a.isOfficial,isPublic:a.isPublic,name:a.displayName,onClick:t},o))},Ga=memo(Pk);function Yl(e){let r=ee({fetcher:CommunityRepository.getRecommendedCommunities,params:w(d({},e),{limit:(e==null?void 0:e.limit)||10})}),{items:t}=r,o=M(r,["items"]);return d({communities:t},o)}var Ek=()=>{let{onClickCommunity:e}=O(),{communities:t,isLoading:o}=Yl(),r=o?B.createElement(W,{style:{fontSize:12,maxWidth:156}}):B.createElement(FormattedMessage,{id:"recommendedList"});return t!=null&&t.length?B.createElement($a,{title:r},o&&new Array(4).fill(1).map((n,a)=>B.createElement(Sn,{key:a,loading:!0})),!o&&t.map(({communityId:n})=>B.createElement(Ga,{key:n,communityId:n,onClick:e}))):null},O7=memo(Ek);var Fk=i.div`
  display: grid;
  grid-template-columns: 118px auto;
  cursor: pointer;
  counter-increment: trending;
  min-width: 425px;
  height: 118px;
  border: 1px solid #ebecef;
  border-radius: 8px;
  background: ${({theme:e})=>e.palette.system.background};
  overflow: hidden;
`,Ak=i.div`
  padding-left: 100%;

  ${({backgroundImage:e,theme:t})=>`
    background: ${e?`url(${CSS.escape(e)})`:t.palette.base.shade3};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `}
`,Dk=i.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`,Bk=i.span`
  &:after {
    content: ' • ';
  }
`,zk=i.span`
  font: inherit;
  &:not(:first-child):before {
    content: ' ';
  }
`,Ok=i.div`
  ${({theme:e})=>e.typography.caption};
  color: ${({theme:e})=>e.palette.base.shade1};

  & > * {
    font: inherit;
  }
`,Uk=i.p`
  margin: 0.5rem 0 0;
  ${({theme:e})=>e.typography.caption}
`,jk=i(_o)`
  ${({theme:e})=>e.typography.title};

  &:before {
    content: counter(trending, decimal-leading-zero);
    margin-right: 0.375em;
  }
`,Hk=({avatarFileUrl:e,description:t,categories:o=[],membersCount:r,onClick:n,isOfficial:a,isPublic:s,name:l,loading:m})=>B.createElement(Fk,{onClick:n},B.createElement(Ak,{backgroundImage:e}),B.createElement(Dk,null,m?B.createElement(B.Fragment,null,B.createElement(W,{style:{fontSize:"0.5rem",maxWidth:"7.5rem"}}),B.createElement("div",null,B.createElement(W,{style:{fontSize:"0.5rem",maxWidth:"13.5rem"}})),B.createElement(W,{width:"2.5rem",style:{fontSize:"0.5rem"}}),B.createElement(W,{width:"2.5rem",style:{fontSize:"0.5rem",marginLeft:"0.75rem"}})):B.createElement(B.Fragment,null,B.createElement(jk,{isOfficial:a,isPublic:s,name:l}),B.createElement(Ok,null,o.length>0&&B.createElement(Gd,{lines:1},B.createElement(Bk,null,o.map(p=>B.createElement(zk,{key:p.categoryId},p.name)))),B.createElement("span",null,tp(r||0)," ",B.createElement(FormattedMessage,{id:"plural.member",values:{amount:r}}))),t&&B.createElement(Gd,{lines:2},B.createElement(Uk,null,t))))),_a=e=>{let t=E("UITrendingItem");return t?t(e):B.createElement(Hk,d({},e))};var Gk=({communityId:e,onClick:t,loading:o})=>{let r=Ce(e),n=j({fileId:r==null?void 0:r.avatarFileId}),a=Tn(r==null?void 0:r.categoryIds),s=()=>t(e);if(r==null)return null;let{membersCount:l,description:m}=r;return B.createElement(_a,{avatarFileUrl:n,description:m,categories:a,membersCount:l,isOfficial:r.isOfficial,isPublic:r.isPublic,name:r.displayName,loading:o,onClick:s})};var j7=memo(Gk);var _k=i.h2`
  ${({theme:e})=>e.typography.headline};
  margin: 0 0 1rem 0;
`,H7=_k;function Ql(e){let r=ee({fetcher:CommunityRepository.getTrendingCommunities,params:w(d({},e),{limit:(e==null?void 0:e.limit)||10})}),{items:t}=r,o=M(r,["items"]);return d({communities:t},o)}var Yk=i.ul`
  list-style: none;
  counter-reset: trending;
  padding: 0;
  margin: 0;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Qk=()=>{let{onClickCommunity:e}=O(),{communities:t,loadMoreHasBeenCalled:o}=Ql(),r=o?B.createElement(W,{style:{fontSize:12,maxWidth:156}}):B.createElement(FormattedMessage,{id:"todaysTrendingTitle"}),n=o?new Array(5).fill(1).map((a,s)=>B.createElement("li",{key:s},B.createElement(_a,{loading:!0}))):t.slice(0,5).map(({communityId:a})=>B.createElement("li",{key:a},B.createElement(j7,{communityId:a,onClick:e})));return B.createElement("div",null,B.createElement(H7,null,r),B.createElement(Yk,null,n))},V7=Qk;var $7=i.div`
  min-width: 160px;
  min-height: 150px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  ${({backgroundImage:e,theme:t})=>`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 42.03%, rgba(0, 0, 0, 0.5) 100%), ${e?`url(${CSS.escape(e)})`:t.palette.base.shade3};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `}
`,G7=i.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
`,_7=i.h4`
  color: #ffffff;
  ${({theme:e})=>e.typography.title}
  margin: 0;
`;var Kk=l=>{var m=l,{categoryId:e,name:t,avatarFileUrl:o,avatarFileId:r,onClick:n,loading:a}=m,s=M(m,["categoryId","name","avatarFileUrl","avatarFileId","onClick","loading"]);let p=()=>e&&(n==null?void 0:n(e)),u=j({fileId:r});return B.createElement($7,d({backgroundImage:o||u||void 0,onClick:p},s),B.createElement(G7,null,a&&B.createElement(W,{style:{fontSize:16}}),!a&&B.createElement(Gd,{lines:2},B.createElement(_7,null,t))))},qa=e=>{let t=E("UICategoryCard");return t?t(e):B.createElement(Kk,d({},e))};var Rk=a=>{var s=a,{categoryId:e,className:t,loading:o,onClick:r}=s,n=M(s,["categoryId","className","loading","onClick"]);let l=Yo(e),m=j({fileId:l==null?void 0:l.avatarFileId});return B.createElement(qa,d({avatarFileUrl:m,className:t,categoryId:e,name:l==null?void 0:l.name,loading:o,onClick:r},n))};memo(Rk);var q7=i(qa)`
  > :first-child {
    padding-right: 1rem;
    padding-left: 0;
  }

  > :last-child {
    padding-left: 1rem;
    padding-right: 0;
  }

  padding-left: 1rem;
  padding-right: 1rem;
`,oL=()=>{let{onClickCategory:e}=O(),{categories:t,hasMore:o,loadMore:r,isLoading:n,loadMoreHasBeenCalled:a}=Hi({includeDeleted:!1}),s=useMemo(()=>{function l(){return new Array(6).fill(1).map((m,p)=>({categoryId:p,skeleton:!0}))}return n?l():a?[...t,...l()]:t},[t,n,a]);return B.createElement($a,{columns:{360:1,720:2,1024:3,1280:5,1440:6,1800:8},title:B.createElement(FormattedMessage,{id:"categoryList"}),hasMore:o,loadMore:r},s.map(l=>wt(l)?B.createElement(q7,{key:l.categoryId,loading:!0}):B.createElement(q7,{key:l.categoryId,categoryId:l.categoryId,name:l.name,avatarFileId:l.avatarFileId,onClick:e})))},Z7=oL;var Y7=i.div`
  max-width: 1450px;
  margin: 0 auto;
  padding: 30px 0;
  overflow-x: hidden;
  overflow-y: auto;

  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;
`;var rL=()=>B.createElement(Y7,null,B.createElement(O7,null),B.createElement(V7,null),B.createElement(Z7,null)),Q7=rL;var W7=i.div`
  height: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 28px 0;
  overflow-y: auto;
`;var nL=()=>{let{onChangePage:e}=O();return B.createElement(W7,{"data-qa-anchor":"news-feed"},B.createElement($o,{targetType:"globalFeed",goToExplore:()=>e("explore"),showPostCreator:!0}))},J7=nL;var Nt={EDIT_PROFILE:"EDIT_PROFILE",MEMBERS:"MEMBERS",PERMISSIONS:"PERMISSIONS"},X7=[{value:Nt.EDIT_PROFILE,label:B.createElement(FormattedMessage,{id:"tabs.editProfile"})},{value:Nt.MEMBERS,label:B.createElement(FormattedMessage,{id:"tabs.members"})},{value:Nt.PERMISSIONS,label:B.createElement(FormattedMessage,{id:"tabs.permissions"})}];var R7=i.div`
  padding: 70px 30px 30px;
  max-width: 360px;
  text-align: center;
`,eu=i.div`
  margin-top: 25px;
  ${({theme:e})=>e.typography.headline}
`,tu=i.p`
  margin-top: 8px;
  color: ${({theme:e})=>e.palette.shade1};
`,ou=i(Y)`
  display: block;
  margin: 25px auto 0 auto;
`,ru=i(ye)`
  color: ${({theme:e})=>e.palette.primary.main};
  padding: 0 0 0 4px;
  margin-top: 20px;

  &:hover {
    background: none;
    text-decoration: underline;
  }
`;function Jl({onClose:e,onGoSettings:t}){return B.createElement(ke,{"data-qa-anchor":"community-created-modal"},B.createElement(R7,null,B.createElement(Gs,null),B.createElement(eu,{"data-qa-anchor":"community-created-modal-title"},B.createElement(FormattedMessage,{id:"communityCreatedModal.title"})),B.createElement(tu,{"data-qa-anchor":"community-created-modal-message"},B.createElement(FormattedMessage,{id:"communityCreatedModal.message"})),B.createElement(ou,{"data-qa-anchor":"community-created-modal-go-to-settings-button",onClick:t},B.createElement(FormattedMessage,{id:"communityCreatedModal.goToSettings"})),B.createElement(ru,{"data-qa-anchor":"community-created-modal-skip-button",onClick:e},B.createElement(FormattedMessage,{id:"communityCreatedModal.skip"}))))}var aL=({communityId:e,onClose:t})=>{let{onEditCommunity:o}=O();return B.createElement(Jl,{onClose:t,onGoSettings:()=>{e!=null&&(o(e,Nt.PERMISSIONS),t());}})},nu=aL;var iu=21;var au=[{value:"image",label:B.createElement(FormattedMessage,{id:"tabs.images"})},{value:"video",label:B.createElement(FormattedMessage,{id:"tabs.videos"})},{value:"liveStream",label:B.createElement(FormattedMessage,{id:"tabs.liveStreams"})}],su={image:B.createElement(zs,null),video:B.createElement(Us,null),liveStream:B.createElement(Os,null)},lu={image:B.createElement(FormattedMessage,{id:"mediaGallery.images.empty"}),video:B.createElement(FormattedMessage,{id:"mediaGallery.videos.empty"}),liveStream:B.createElement(FormattedMessage,{id:"mediaGallery.liveStreams.empty"})};var mu=i(lt)`
  &${Oa} {
    border: none;
  }

  ${Ua} {
    padding: 0;
  }

  ${ja} {
    &:not(:first-child) {
      margin-left: 0.75em;
    }
  }

  ${Ha} {
    margin: 0;
    padding: 0.5em 0.75em;
    background: #ebecef;
    border-radius: 1.5em;
    ${({theme:e})=>e.typography.body}

    &.active {
      background: ${({theme:e})=>e.palette.primary.main};
      color: #fff;
      ${({theme:e})=>e.typography.bodyBold}
      border-bottom: none;
    }
  }
`;var du=i.div`
  padding: 1.25em 1em;
  background: ${({theme:e})=>e.palette.system.background};
  border: 1px solid ${({theme:e})=>e.palette.system.borders};
  border-radius: 0.25em;
`,pu=i(mu)`
  margin-bottom: 1em;
`;function Xl({targetId:e,targetType:t,dataType:o,limit:r}){let s=ee({fetcher:PostRepository.getPosts,params:{targetId:e,targetType:t,dataTypes:[o],limit:r},shouldCall:()=>!!e&&!!t}),{items:n}=s,a=M(s,["items"]);return d({media:n},a)}var dL=({targetId:e,targetType:t})=>{let[o,r]=useState("image"),{media:n,isLoading:a,hasMore:s,loadMore:l,loadMoreHasBeenCalled:m}=Xl({targetId:e||void 0,targetType:t,dataType:o,limit:iu});return B.createElement(du,null,B.createElement(pu,{activeTab:o,tabs:au,onChange:p=>r(p)}),(a||m||n.length>0)&&B.createElement(_e,{hasMore:s,loadMore:l,className:"load-more no-border",contentSlot:B.createElement(br,{items:n,loading:a,loadingMore:m,renderVideoThumbnail:p=>B.createElement(xr,w(d({},p),{showPlayIcon:!0,showVideoDuration:!0})),renderLiveStreamThumbnail:p=>B.createElement(Mr,w(d({},p),{showPlayIcon:!0,showLivestreamTitle:!0,showVideoDuration:!0}))})}),!a&&!m&&n.length===0&&B.createElement(to,{icon:su[o],title:lu[o]}))},Wa=memo(e=>{let t=E("MediaGallery");return t?t(e):B.createElement(dL,d({},e))});var cu=i(ft).attrs({width:15,height:15})`
  margin-right: 8px;
`,uu=i(dr).attrs({width:15,height:15})`
  margin-right: 4px;
`,fu=i(rt)`
  margin-left: auto;
  margin-right: 0;

  & .leave-community {
    color: ${({theme:e})=>e.palette.alert.main};
  }
`,gu=i.div`
  border: 1px solid #ebecef;
  border-radius: 8px;
  background: ${({theme:e})=>e.palette.system.background};
  flex-shrink: 0;
  align-self: flex-start;
  margin-bottom: 12px;
`,Cu=i.div`
  padding-top: 56.25%;
  position: relative;

  ${({backgroundImage:e,theme:t})=>`
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.5) -4.5%, rgba(0, 0, 0, 0) 77.17%), ${e?`url(${CSS.escape(e)})`:t.palette.base.shade3};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `}
`,hu=i.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
`,yu=i(_o)`
  color: #ffffff;
  ${({theme:e})=>e.typography.headline}
  line-height: 30px !important;

  * {
    line-height: 30px !important;
  }
`,vu=i.div`
  padding: 18px 16px;
`,xu=i.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`,Mu=i.div`
  word-break: break-word;
  color: #ffffff;
  margin-bottom: 0;
  line-height: 20px;
  ${({theme:e})=>e.typography.body}
`,Rl=i.span`
  & > .countNumber {
    ${({theme:e})=>e.typography.title};
    color: ${({theme:e})=>e.palette.base.default};
  }

  & > .countType {
    ${({theme:e})=>e.typography.body};
    color: ${({theme:e})=>e.palette.base.shade2};
  }
`,bu=i.div`
  display: inline-block;
  width: 1px;
  margin: 12px 0;
  background: ${({theme:e})=>e.palette.base.shade4};
`,Iu=i.div`
  margin-bottom: 20px;
`,wu=i(Y)`
  width: 100%;
  justify-content: center;
`,Pu=i.div`
  display: flex;
  gap: 20px;
`,Su=i.div`
  background: ${({theme:e})=>e.palette.base.shade4};
  padding: 12px;
  margin-top: 8px;
  border-radius: 4px;
  text-align: center;
`,Tu=i.div`
  ${({theme:e})=>e.typography.bodyBold};
  display: flex;
  align-items: center;
  justify-content: center;
`,Nu=i.span`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: ${({theme:e})=>e.palette.primary.main};
  margin-right: 6px;
`,Eu=i.div`
  ${({theme:e})=>e.typography.caption};
  color: ${({theme:e})=>e.palette.base.shade1};
`;var ku=({canReviewPosts:e,postsCount:t})=>B.createElement(Su,null,B.createElement(Tu,null,B.createElement(Nu,null),B.createElement(FormattedMessage,{id:"community.pendingPostsBanner.title"})),B.createElement(Eu,null,e?B.createElement(FormattedMessage,{id:"community.pendingPostsBanner.needApproval",values:{amount:t,formattedAmount:tp(t)}}):B.createElement(FormattedMessage,{id:"community.pendingPostsBanner.pendingForReview"})));var gL=({communityId:e,communityCategories:t,pendingPostsCount:o,postsCount:r,membersCount:n,description:a,isJoined:s,isOfficial:l,isPublic:m,avatarFileUrl:p,canEditCommunity:u,onEditCommunity:c,joinCommunity:g,onClickLeaveCommunity:f,canLeaveCommunity:C,canReviewPosts:v,name:y,postSetting:h})=>{let{formatMessage:x}=useIntl();return B.createElement(gu,{"data-qa-anchor":"community-info"},B.createElement(Cu,{backgroundImage:p!=null?p:_r},B.createElement(hu,null,B.createElement(yu,{"data-qa-anchor":"community-info",isOfficial:l,isPublic:m,isTitle:!0,name:y,truncate:2}),B.createElement(Mu,null,(t||[]).join(", ")))),B.createElement(vu,null,B.createElement(xu,null,B.createElement(Pu,null,B.createElement(Rl,null,B.createElement("div",{className:"countNumber"},tp(r||0)),B.createElement("div",{className:"countType"},B.createElement(FormattedMessage,{id:"community.posts"}))),B.createElement(bu,null),B.createElement(Rl,null,B.createElement("div",{className:"countNumber"},tp(n||0)),B.createElement("div",{className:"countType"},B.createElement(FormattedMessage,{id:"community.members"})))),s&&B.createElement(fu,{"data-qa-anchor":"community-info-options-button",options:[u?{name:x({id:"community.settings"}),action:()=>c(e),dataQaAnchorMenuItem:"settings"}:null,C?{name:x({id:"community.leaveCommunity"}),action:()=>f(e),dataQaAnchorMenuItem:"leave-community"}:null].filter(ue)})),a&&B.createElement(Gd,{lines:3},B.createElement(Iu,{"data-qa-anchor":"community-info-description"},a)),!s&&B.createElement(wu,{"data-qa-anchor":"community-info-join-button",onClick:()=>g(e)},B.createElement(cu,null)," ",B.createElement(FormattedMessage,{id:"community.join"})),s&&u&&B.createElement(F,{fullWidth:!0,"data-qa-anchor":"community-info-edit-button",onClick:()=>c(e)},B.createElement(uu,null)," ",B.createElement(FormattedMessage,{id:"community.editProfile"})),h===CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED&&s&&o>0&&B.createElement(ku,{canReviewPosts:v,postsCount:o})))},Fu=e=>{let t=E("UICommunityInfo");return t?t(e):B.createElement(gL,d({},e))};var Au=({onOk:e})=>re({"data-qa-anchor":"leave-community",title:B.createElement(FormattedMessage,{id:"community.leaveCommunityTitle"}),content:B.createElement(FormattedMessage,{id:"community.leaveCommunityBody"}),okText:B.createElement(FormattedMessage,{id:"community.leaveCommunityButtonText"}),onOk:()=>e()});var CL=({community:e})=>{let{currentUserId:t,userRoles:o}=G(),{moderators:r}=xo(e==null?void 0:e.communityId),n=r.find(l=>l.userId===t),a=o.find(l=>l==="global-admin")!=null,s=n!=null;return {isModerator:s,canEdit:a||s,canReview:a||s}},Ja=CL;var Du=e=>{let{onEditCommunity:t}=O(),o=Ce(e),r=j({fileId:o==null?void 0:o.avatarFileId,imageSize:"medium"}),{posts:n}=Vt({targetType:"community",targetId:e,feedType:"reviewing"}),a=Tn(o==null?void 0:o.categoryIds),{canReview:s,canEdit:l}=Ja({community:o}),m=useMemo(()=>(n==null?void 0:n.length)||0,[n]);return {community:o,reviewingPosts:n,avatarFileUrl:r,communityCategories:a,pendingPostsCount:m,canEditCommunity:l,canReviewCommunityPosts:s,onEditCommunity:t,joinCommunity:()=>e&&CommunityRepository.joinCommunity(e),leaveCommunity:()=>e&&CommunityRepository.leaveCommunity(e),updateCommunity:f=>e&&CommunityRepository.updateCommunity(e,f),closeCommunity:()=>e&&CommunityRepository.deleteCommunity(e)}};var xL=({communityId:e})=>{var v;let{community:t,communityCategories:o,avatarFileUrl:r,canEditCommunity:n,onEditCommunity:a,joinCommunity:s,leaveCommunity:l,pendingPostsCount:m,canReviewCommunityPosts:p}=Du(e),u=(o||[]).map(y=>y.name);if(t==null)return null;let c=t.isJoined||!1,{membersCount:g,description:f,isJoined:C}=t;return B.createElement(Fu,{communityId:e,communityCategories:u,pendingPostsCount:m,postsCount:(v=t.postsCount)!=null?v:0,membersCount:g,description:f||"",isJoined:C||!1,isOfficial:t.isOfficial||!1,isPublic:t.isPublic||!1,avatarFileUrl:r||null,joinCommunity:s,canEditCommunity:n,canLeaveCommunity:c||!1,canReviewPosts:p,name:t.displayName,postSetting:t.postSetting||CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED,onEditCommunity:a,onClickLeaveCommunity:()=>Au({onOk:()=>l()})})};var Bu=xL;var zu=i(lt)`
  margin-bottom: 14px;
  border-radius: 0;
  border-right: 0;
  border-left: 0;
`,Ou=i.div`
  background: ${({theme:e})=>e.palette.system.background};
  border: 1px solid #edeef2;
  border-radius: 4px;
  flex: 2;
`,Uu=i.div`
  ${({theme:e})=>e.typography.title};
  padding: 16px;
`,ju=i.div`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Hu=i.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;var bL=e=>{let[t,o]=useState(!0),[r,n]=useState(!1),a=()=>I(void 0,null,function*(){e&&UserRepository.isUserFlaggedByMe(e).then(p=>{n(p),o(!1);});});useEffect(()=>{e&&a();},[e]);let s=()=>I(void 0,null,function*(){if(e!=null)try{yield UserRepository.flagUser(e),n(!0);}catch(p){n(!1);}finally{a();}}),l=()=>I(void 0,null,function*(){if(e!=null)try{yield UserRepository.unflagUser(e),n(!1);}catch(p){n(!0);}finally{a();}});return {isLoading:t,isFlaggedByMe:r,flagUser:s,unflagUser:l,toggleFlagUser:()=>I(void 0,null,function*(){e!=null&&(r?l():s());})}},er=bL;var{COMMUNITY_MODERATOR:$u,CHANNEL_MODERATOR:Gu}=Wr,PL=({userId:e,currentUserId:t,onClick:o,roles:r=[],assignRolesToUsers:n,hasModeratorPermissions:a,removeRolesFromUsers:s,removeMembers:l,isJoined:m,isBanned:p})=>{let u=U(e),{formatMessage:c}=useIntl(),{isFlaggedByMe:g,toggleFlagUser:f}=er(e),C=u==null?void 0:u.isGlobalBanned;fo({userId:e,level:SubscriptionLevels.USER});let v=()=>I(void 0,null,function*(){return f()}),y=()=>{v(),Z.success({content:B.createElement(FormattedMessage,{id:"report.reportSent"})});},h=()=>n([$u,Gu],[e]),x=()=>s([$u,Gu],[e]),T=()=>{re({"data-qa-anchor":"remove-user",title:B.createElement(FormattedMessage,{id:"community.removeUserFromCommunityTitle"}),content:B.createElement(FormattedMessage,{id:"community.removeUserFromCommunityBody"}),cancelText:"Cancel",okText:"Remove",onOk:()=>l([e])});},S=Ot(r);return B.createElement(ju,{"data-qa-anchor":"community-member-item"},B.createElement(Hu,null,B.createElement(io,{userId:e,isBanned:p||C,onClick:o})),!(t===e)&&m&&B.createElement(rt,{"data-qa-anchor":"community-members-option-menu",options:[{name:c(g?{id:"report.unreportUser"}:{id:"report.reportUser"}),action:y},a&&!S&&!C?{name:c({id:"moderatorMenu.promoteToModerator"}),action:h}:null,a&&S?{name:c({id:"moderatorMenu.dismissModerator"}),action:x}:null,a?{name:c({id:"moderatorMenu.removeFromCommunity"}),action:T,className:"danger-zone"}:null].filter(ue)}))},i0=PL;var kn={MEMBERS:"MEMBERS",MODERATORS:"MODERATORS"};[{value:kn.MEMBERS,label:B.createElement(FormattedMessage,{id:"tabs.members"})},{value:kn.MODERATORS,label:B.createElement(FormattedMessage,{id:"tabs.moderators"})}];var kL=({community:e,members:t,loadMore:o,hasMore:r})=>{let n=e==null?void 0:e.communityId,{currentUserId:a}=G(),s=t.find(f=>f.userId===a),l=U(a),m=Ot(s==null?void 0:s.roles),p=E1(s)&&m||Ot(l==null?void 0:l.roles)||Cr(l==null?void 0:l.roles);return {community:e,members:t,currentUserId:a,hasMoreMembers:r,loadMoreMembers:o,hasModeratorPermissions:p,assignRolesToUsers:(f,C)=>n&&CommunityRepository.Moderation.addRoles(n,f,C),removeRolesFromUsers:(f,C)=>n&&CommunityRepository.Moderation.removeRoles(n,f,C),removeMembers:f=>n&&CommunityRepository.Membership.removeMembers(n,f)}},LL=({community:e,members:t,loadMore:o,hasMore:r})=>{let{onClickUser:n}=O(),{hasMoreMembers:a,loadMoreMembers:s,hasModeratorPermissions:l,currentUserId:m,assignRolesToUsers:p,removeRolesFromUsers:u,removeMembers:c}=kL({community:e,hasMore:r,loadMore:o,members:t});return t.length===0?null:B.createElement(_e,{hasMore:a,loadMore:s,contentSlot:t.map(({userId:g,roles:f,isBanned:C})=>B.createElement(i0,{key:g,userId:g,currentUserId:m||"",roles:f,assignRolesToUsers:p,removeRolesFromUsers:u,removeMembers:c,hasModeratorPermissions:l,isJoined:e==null?void 0:e.isJoined,isBanned:C,onClick:()=>n(g)}))})},FL=({community:e})=>{let t=e==null?void 0:e.communityId,{currentUserId:o}=G(),{moderators:r,hasMore:n,loadMore:a}=xo(t),s=r.find(f=>f.userId===o),l=U(o),m=Ot(s==null?void 0:s.roles),p=E1(s)&&m||Ot(l==null?void 0:l.roles)||Cr(l==null?void 0:l.roles);return {moderators:r,currentUserId:o,hasMoreModerators:n,loadMoreModerators:a,hasModeratorPermissions:p,assignRolesToUsers:(f,C)=>t&&CommunityRepository.Moderation.addRoles(t,f,C),removeRolesFromUsers:(f,C)=>t&&CommunityRepository.Moderation.removeRoles(t,f,C),removeMembers:f=>t&&CommunityRepository.Membership.removeMembers(t,f)}},AL=({community:e})=>{let{onClickUser:t}=O(),{currentUserId:o,moderators:r,hasMoreModerators:n,loadMoreModerators:a,hasModeratorPermissions:s,assignRolesToUsers:l,removeRolesFromUsers:m,removeMembers:p}=FL({community:e});return r.length===0?null:B.createElement(_e,{hasMore:n,loadMore:a,contentSlot:r.map(({userId:u,roles:c,isBanned:g})=>B.createElement(i0,{key:u,userId:u,currentUserId:o||"",roles:c,assignRolesToUsers:l,removeRolesFromUsers:m,removeMembers:p,hasModeratorPermissions:s,isJoined:e==null?void 0:e.isJoined,isBanned:g,onClick:f=>f&&t(f)}))})},DL=({communityId:e})=>{let{formatMessage:t}=useIntl();go({level:SubscriptionLevels.COMMUNITY,communityId:e});let{hasMore:o,loadMore:r,loadMoreHasBeenCalled:n,isLoading:a,members:s}=Ii(e),l=Ce(e),m=[{value:"MEMBERS",label:t({id:"CommunityMembers.members"})},{value:"MODERATORS",label:t({id:"CommunityMembers.moderators"})}],[p,u]=useState(kn.MEMBERS);return B.createElement(Ou,null,B.createElement(Uu,null,"Community Members \u2022 ",s.length||0),B.createElement(zu,{tabs:m,activeTab:p,onChange:u}),p===kn.MEMBERS&&B.createElement(LL,{community:l,hasMore:o,loadMore:r,members:s}),p===kn.MODERATORS&&B.createElement(AL,{community:l}))},Ra=memo(e=>{let t=E("CommunityMembers");return t?t(e):B.createElement(DL,d({},e))});var zL=i(lt)`
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px 4px 0 0;
  border: 1px solid #edeef2;
  margin-bottom: 12px;
`,es=e=>{let t=E("FeedHeaderTabs");return t?t(e):B.createElement(zL,d({},e))};var Zt={TIMELINE:"TIMELINE",GALLERY:"GALLERY",MEMBERS:"MEMBERS",PENDING:"PENDING"};function Zu(e,t,o,r=0){let n=[{value:Zt.TIMELINE,label:B.createElement(FormattedMessage,{id:"tabs.timeline"})},{value:Zt.GALLERY,label:B.createElement(FormattedMessage,{id:"tabs.gallery"})},{value:Zt.MEMBERS,label:B.createElement(FormattedMessage,{id:"tabs.members"})}];if(t&&e===CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED){let a=o?r:0;n.push({value:Zt.PENDING,label:B.createElement(FormattedMessage,{id:"tabs.pendingPosts",values:{amount:a,formattedAmount:a}})});}return n}var Yu=i.div`
  height: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 28px 0;
  overflow-y: auto;
`,Qu=i.div`
  background: ${({theme:e})=>e.palette.base.shade4};
  color: ${({theme:e})=>e.palette.base.shade1};
  margin-bottom: 12px;
  padding: 12px 16px;
  border-radius: 4px;
`;var $L=({communityId:e,isNewCommunity:t})=>{let o=Ce(e),{canReview:r}=Ja({community:o}),{posts:n}=Vt({targetId:e,targetType:"community",feedType:"reviewing"}),a=n.reduce((g,f)=>g+f.flagCount,0),s=useMemo(()=>Zu(o==null?void 0:o.postSetting,o==null?void 0:o.isJoined,r,a),[o==null?void 0:o.postSetting,o==null?void 0:o.isJoined,r,a]),[l,m]=useState(Zt.TIMELINE);go({communityId:e,level:SubscriptionLevels.POST}),useEffect(()=>{s.find(g=>g.value===l)||m(s[0].value);},[l,s]);let p=(o==null?void 0:o.isJoined)||!1,[u,c]=useState(t);return B.createElement(Yu,null,B.createElement(Bu,{communityId:e}),B.createElement(es,{"data-qa-anchor":"community-feed-header",tabs:s,activeTab:l,onChange:m}),l===Zt.TIMELINE&&B.createElement($o,{targetType:"community",targetId:e,readonly:!p,showPostCreator:p,feedType:"published"}),l===Zt.GALLERY&&B.createElement(Wa,{targetType:"community",targetId:e}),l===Zt.MEMBERS&&B.createElement(Ra,{communityId:e}),l===Zt.PENDING&&B.createElement(B.Fragment,null,r&&B.createElement(Qu,null,B.createElement(FormattedMessage,{id:"community.review.declinePendingPosts"})),B.createElement($o,{targetType:"community",targetId:e,readonly:!p,showPostCreator:!1,feedType:"reviewing"})),u&&B.createElement(nu,{communityId:e,onClose:()=>c(!1)}))},Ku=$L;var Ju=i(lt)`
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px 4px 0 0;
  border: 1px solid #edeef2;
  margin-bottom: 12px;
`,Fn=i.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;

  > * {
    width: 100%;
  }
`,Xu=i.div`
  display: flex;
  padding: 15px;

  border-top: 1px solid ${({theme:e})=>e.palette.base.shade4};

  > *:first-child {
    margin-right: 10px;
  }
`,An=i.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > * {
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }
`,rs=i.div`
  display: flex;
  align-items: center;
`,ns=i(to)`
  width: 100%;
`;var _L=i.button`
  display: block;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.625rem 0.75rem;
  background: none;
  border: 1px solid ${({theme:e})=>e.palette.base.shade4};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  color: ${({theme:e})=>e.palette.base.shade2};
  text-align: center;
`;function ko({onClick:e}){return B.createElement(_L,{onClick:t=>{t.preventDefault(),e==null||e();}},B.createElement(FormattedMessage,{id:"loadMore"})," ",B.createElement(Dt,{height:".8em"}))}function _i({userId:e,callback:t}){let o=U(e),r=useRef(null);useEffect(()=>{if(o!=null)return r.current=subscribeTopic(a5(o),t),()=>{var n;(n=r.current)==null||n.call(r);}},[]);}function s0({userId:e,status:t}){let n=ee({fetcher:UserRepository.Relationship.getFollowings,params:{userId:e,status:t!=null?t:void 0},shouldCall:()=>!!e}),{items:o}=n,r=M(n,["items"]);return d({followings:o},r)}var XL=({profileUserId:e,currentUserId:t,userId:o,onClick:r})=>{let n=U(o),{onClickUser:a}=O(),{formatMessage:s}=useIntl(),{isFlaggedByMe:l,toggleFlagUser:m}=er(o),p=()=>I(void 0,null,function*(){yield m(),Z.success({content:B.createElement(FormattedMessage,{id:"report.reportSent"})});}),u=()=>UserRepository.Relationship.unfollow(o),c=e===t,g=t===o,f=()=>{let y=n!=null&&n.displayName?s({id:"user.unfollow.confirm.title"},{displayName:n.displayName}):s({id:"user.unfollow.confirm.title.thisUser"}),h=n!=null&&n.displayName?s({id:"user.unfollow.confirm.body"},{displayName:n.displayName}):s({id:"user.unfollow.confirm.body.thisUser"});re({title:y,content:h,cancelText:s({id:"buttonText.cancel"}),okText:s({id:"buttonText.unfollow"}),onOk:u});},C=useCallback(()=>{a(o);},[a,o]),v=useMemo(()=>{let y=[];return g||y.push({name:s(l?{id:"report.unreportUser"}:{id:"report.reportUser"}),action:p}),c&&y.push({name:s({id:"follower.menuItem.unfollow"}),action:f}),y},[l,c,g,f,p]);return B.createElement(Fn,{key:o},B.createElement(rs,null,B.createElement(io,{userId:o,onClick:C}),B.createElement(rt,{options:v})))};function RL({userId:e}){let{followings:t,isLoading:o,loadMore:r,hasMore:n,loadMoreHasBeenCalled:a}=s0({userId:e,status:"all"});return _i({userId:e}),{items:useMemo(()=>{function l(){return new Array(5).fill(1).map((m,p)=>({skeleton:!0}))}return o&&!a?l():o&&a?[...t,...l()]:t},[t,o,a]),isLoading:o,hasMore:n,loadMore:r,loadMoreHasBeenCalled:a}}var eF=({userId:e,onItemClick:t})=>{let{formatMessage:o}=useIntl(),{currentUserId:r}=G(),{items:n,loadMore:a,hasMore:s}=RL({userId:e}),l=()=>s?B.createElement(ko,{onClick:()=>a==null?void 0:a()}):null;return n.length===0?B.createElement(B.Fragment,null,B.createElement(An,null,B.createElement(ns,{icon:B.createElement(mr,{width:48,height:48}),title:"It's empty here...",description:o({id:"follow.placeholder.noFollowings"})})),l()):B.createElement(B.Fragment,null,B.createElement(An,null,n.map(m=>wt(m)?B.createElement(W,{style:{fontSize:8}}):B.createElement(XL,{key:`${m.from}-${m.to}`,userId:m.to,profileUserId:e,currentUserId:r,onClick:()=>t(m.to)}))),l())},t9=eF;function qi({userId:e,callback:t}){let o=U(e),r=useRef(null);useEffect(()=>{if(o!=null)return r.current=subscribeTopic(i5(o),t),()=>{var n;(n=r.current)==null||n.call(r);}},[]);}function Lo({userId:e,status:t}){let n=ee({fetcher:UserRepository.Relationship.getFollowers,params:{userId:e,status:t!=null?t:void 0},shouldCall:()=>!!e}),{items:o}=n,r=M(n,["items"]);return d({followers:o},r)}var sF=({profileUserId:e,currentUserId:t,userId:o,onClick:r})=>{let n=U(o),a=j({fileId:n==null?void 0:n.avatarFileId,imageSize:"small"}),{onClickUser:s}=O(),{formatMessage:l}=useIntl(),{isFlaggedByMe:m,toggleFlagUser:p}=er(o||void 0),u=()=>I(void 0,null,function*(){yield p(),Z.success({content:B.createElement(FormattedMessage,{id:"report.reportSent"})});}),c=()=>{o&&UserRepository.Relationship.declineMyFollower(o);},g=e===t,f=t===o,C=()=>{re({title:B.createElement(FormattedMessage,{id:"follower.title.removeUser",values:{displayName:n==null?void 0:n.displayName}}),content:B.createElement(FormattedMessage,{id:"follower.body.removeUser",values:{displayName:n==null?void 0:n.displayName}}),cancelText:l({id:"buttonText.cancel"}),okText:l({id:"buttonText.remove"}),onOk:c});},v=useCallback(()=>{o!=null&&s(o);},[s,o]),y=useMemo(()=>{let h=[];return f||h.push({name:l(m?{id:"report.unreportUser"}:{id:"report.reportUser"}),action:u}),g&&h.push({name:l({id:"follower.menuItem.removeUser"}),action:C}),h},[m,g,f,C,u]);return B.createElement(Fn,{key:o},B.createElement(rs,null,B.createElement(Aa,{userId:n==null?void 0:n.userId,displayName:n==null?void 0:n.displayName,avatarFileUrl:a,onClick:v}),B.createElement(rt,{options:y})))};function lF({userId:e}){let{followers:t,isLoading:o,loadMore:r,hasMore:n,loadMoreHasBeenCalled:a}=Lo({userId:e,status:"all"});return qi({userId:e}),{items:useMemo(()=>{function l(){return new Array(5).fill(1).map((m,p)=>({skeleton:!0}))}return o&&!a?l():o&&a?[...t,...l()]:t},[t,o,a]),isLoading:o,hasMore:n,loadMore:r,loadMoreHasBeenCalled:a}}var mF=({userId:e,onItemClick:t})=>{let{formatMessage:o}=useIntl(),{items:r,loadMore:n,hasMore:a}=lF({userId:e}),{currentUserId:s}=G(),l=()=>a?B.createElement(ko,{onClick:()=>n==null?void 0:n()}):null;return r.length===0?B.createElement(B.Fragment,null,B.createElement(An,null,B.createElement(ns,{icon:B.createElement(mr,{width:48,height:48}),title:"It's empty here...",description:o({id:"follow.placeholder.noFollowers"})})),l()):B.createElement(B.Fragment,null,B.createElement(An,null,r.map(m=>wt(m)?B.createElement(W,{style:{fontSize:8}}):B.createElement(sF,{key:`${m.from}-${m.to}`,userId:m.from,profileUserId:e,currentUserId:s,onClick:()=>t(m.to)}))),l())},n9=mF;var Dn=i.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`,i9=i(to)`
  margin-right: auto;
  margin-left: auto;
`;var pF=({userId:e})=>B.createElement(Fn,null,B.createElement(io,{userId:e}),B.createElement(Xu,null,B.createElement(Y,{fullWidth:!0,onClick:()=>I(void 0,null,function*(){e&&(yield UserRepository.Relationship.acceptMyFollower(e),Z.success({content:B.createElement(FormattedMessage,{id:"notification.done"})}));})},B.createElement(FormattedMessage,{id:"request.accept"})),B.createElement(F,{fullWidth:!0,onClick:()=>I(void 0,null,function*(){e&&(yield UserRepository.Relationship.declineMyFollower(e),Z.success({content:B.createElement(FormattedMessage,{id:"notification.done"})}));})},B.createElement(FormattedMessage,{id:"request.decline"})))),cF=({userId:e})=>{let{followers:t,hasMore:o,loadMore:r,isLoading:n,loadMoreHasBeenCalled:a}=Lo({userId:e,status:"pending"}),s=useMemo(()=>{function m(){return new Array(5).fill(1).map((p,u)=>({userId:u,skeleton:!0}))}return n&&!a?m():n&&a?[...t,...m()]:t},[t,n,a]),l=()=>o?B.createElement(ko,{onClick:()=>r()}):null;return s.length===0?B.createElement(B.Fragment,null,B.createElement(Dn,null,null),l()):B.createElement(B.Fragment,null,B.createElement(Dn,null,s.map(m=>wt(m)?B.createElement(W,{style:{fontSize:8}}):B.createElement(pF,{key:`${m.from}-${m.to}`,userId:m.to}))),l())},s9=cF;var kt={FOLLOWINGS:"Followings",FOLLOWERS:"Followers"},Bn="Pending";[{value:kt.FOLLOWINGS,label:B.createElement(FormattedMessage,{id:"tabs.followings"})},{value:kt.FOLLOWERS,label:B.createElement(FormattedMessage,{id:"tabs.followers"})},{value:Bn,label:B.createElement(FormattedMessage,{id:"tabs.pending"})}];var CF=({userId:e,activeTab:t,socialSettings:o,onTabChange:r,onFollowingListClick:n,onFollowerListClick:a})=>{let{currentUserId:s}=G(),l=k1(o),{formatMessage:m}=useIntl(),[p,u]=useState(Object.values(kt).map(f=>({value:f,label:f}))),{followers:c}=Lo({userId:e,status:"pending"}),g=s===e;return useEffect(()=>{c!=null&&c.length&&g&&l?u(Object.values(kt).map(f=>({value:f,label:f})).concat({value:Bn,label:m({id:"tabs.pending"})})):u(Object.values(kt).map(f=>({value:f,label:f})));},[m,g,c,r]),B.createElement("div",null,B.createElement(Ju,{tabs:p,activeTab:t,onChange:r}),t===kt.FOLLOWINGS&&B.createElement(t9,{userId:e,onItemClick:f=>n(f)}),t===kt.FOLLOWERS&&B.createElement(n9,{userId:e,onItemClick:f=>a(f)}),t.includes(Bn)&&g&&B.createElement(s9,{userId:e}))},l9=CF;var Je={TIMELINE:"TIMELINE",GALLERY:"GALLERY",FOLLOWERS:"FOLLOWERS"},u0=[{value:Je.TIMELINE,label:B.createElement(FormattedMessage,{id:"tabs.timeline"})},{value:Je.GALLERY,label:B.createElement(FormattedMessage,{id:"tabs.gallery"})},{value:Je.FOLLOWERS,label:B.createElement(FormattedMessage,{id:"tabs.followers"})}];var m9=i.div`
  height: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 28px 0;
  overflow-y: auto;
`;var yF=e=>{let[t,o]=useState(0),[r,n]=useState(0),[a,s]=useState(0);return Le({fetcher:UserRepository.Relationship.getFollowInfo,params:e,callback:l=>{l.data&&(o(l.data.followerCount),n(l.data.followingCount),s(l.data.pendingCount));},shouldCall:()=>!!e}),{followerCount:t,followingCount:r,pendingCount:a}},d9=yF;var xF=e=>{var o;let t=Le({fetcher:UserRepository.Relationship.getFollowInfo,params:e});return (o=t==null?void 0:t.status)!=null?o:"none"},as=xF;var IF=({userId:e,currentUserId:t,fileUrl:o,displayName:r,description:n,isMyProfile:a,onEditUser:s,onFollowRequest:l,onFollowDecline:m,onUnFollow:p,onPendingNotificationClick:u,onFollowingCountClick:c,onFollowerCountClick:g,onReportClick:f,isFollowPending:C,isFollowNone:v,isFollowAccepted:y,followerCount:h=0,followingCount:x=0,isPrivateNetwork:T})=>{let S=U(e),{formatMessage:b}=useIntl(),{isFlaggedByMe:P}=er(e||void 0),{followers:N}=Lo({userId:t,status:"pending"}),D=S!=null&&S.displayName?b({id:"user.unfollow.confirm.title"},{displayName:S.displayName}):b({id:"user.unfollow.confirm.title.thisUser"}),V=S!=null&&S.displayName?b({id:"user.unfollow.confirm.body"},{displayName:S.displayName}):b({id:"user.unfollow.confirm.body.thisUser"}),q=[y&&!a?{name:b({id:"user.unfollow"}),action:()=>re({title:D,content:V,cancelText:b({id:"buttonText.cancel"}),okText:b({id:"buttonText.unfollow"}),onOk:()=>I(void 0,null,function*(){yield p==null?void 0:p();})})}:void 0,a?void 0:{name:b(P?{id:"report.unreportUser"}:{id:"report.reportUser"}),action:()=>{f==null||f();}}].filter(ue);return B.createElement(ic,{"data-qa-anchor":"user-info"},B.createElement(ac,null,B.createElement(sc,{"data-qa-anchor":"user-info-profile-image",avatar:o,backgroundImage:se}),B.createElement(lc,null,a?B.createElement(F,{"data-qa-anchor":"user-info-edit-profile-button",onClick:()=>(S==null?void 0:S.userId)&&(s==null?void 0:s(S.userId))},B.createElement(nc,null)," ",B.createElement(FormattedMessage,{id:"user.editProfile"})):B.createElement(B.Fragment,null,T&&C&&B.createElement(F,{onClick:()=>m==null?void 0:m()},B.createElement(oc,null,B.createElement(rc,null)),B.createElement(FormattedMessage,{id:"user.cancel_follow"})),v&&B.createElement(Y,{onClick:()=>l==null?void 0:l()},B.createElement(pa,null)," ",B.createElement(FormattedMessage,{id:"user.follow"})))),B.createElement(cc,{options:q,pullRight:!1})),B.createElement(hc,null,B.createElement(Gd,{lines:3},B.createElement(mc,{"data-qa-anchor":"user-info-profile-name"},r)),S!=null&&S.isGlobalBanned?B.createElement(Xt,{style:{marginLeft:"0.265rem",marginTop:"1px"}}):null),B.createElement(dc,null,B.createElement(Pl,{onClick:()=>{c==null||c();}},tp(x)),B.createElement(FormattedMessage,{id:"counter.followings"}),B.createElement(Pl,{onClick:()=>{g==null||g();}},tp(h)),B.createElement(FormattedMessage,{id:"counter.followers"})),B.createElement(pc,{"data-qa-anchor":"user-info-description"},n),a&&N.length>0&&T&&B.createElement(uc,{onClick:()=>{u==null||u();}},B.createElement(fc,null,B.createElement(Cc,null),B.createElement(FormattedMessage,{id:"follow.pendingNotification.title"})),B.createElement(gc,null,B.createElement(FormattedMessage,{id:"follow.pendingNotification.body"}))))},c9=e=>{let t=E("UIUserInfo");return t?t(e):B.createElement(IF,d({},e))};var TF=({userId:e,onUnFollow:t,onFollowingCountClick:o,onFollowerCountClick:r,onPendingNotificationClick:n,isPrivateNetwork:a})=>{let{currentUserId:s}=G(),{formatMessage:l}=useIntl(),{onEditUser:m}=O(),p=U(e),u=j({fileId:p==null?void 0:p.avatarFileId,imageSize:"small"});fo({userId:e,level:SubscriptionLevels.USER}),qi({userId:s}),_i({userId:s});let c=as(e),g=()=>I(void 0,null,function*(){e&&(yield UserRepository.Relationship.declineMyFollower(e),Z.success({content:B.createElement(FormattedMessage,{id:"notification.done"})}));}),f=()=>I(void 0,null,function*(){e&&(yield UserRepository.Relationship.unfollow(e),t==null||t(),Z.success({content:B.createElement(FormattedMessage,{id:"notification.done"})}));}),{followerCount:C,followingCount:v}=d9(e),y=()=>I(void 0,null,function*(){e&&(yield UserRepository.Relationship.follow(e));});if(c==null)return null;let h=c==="none",x=c==="accepted",T=c==="pending";return B.createElement(c9,{userId:e,currentUserId:s,fileUrl:(p==null?void 0:p.avatarCustomUrl)||u,displayName:(p==null?void 0:p.displayName)||l({id:"anonymous"}),description:p==null?void 0:p.description,onFollowerCountClick:r,onFollowingCountClick:o,onPendingNotificationClick:n,onFollowDecline:g,onFollowRequest:y,onUnFollow:f,onEditUser:m,isMyProfile:e===s,isFollowPending:T,isPrivateNetwork:a,isFollowNone:h,isFollowAccepted:x,followerCount:C,followingCount:v})},f9=memo(TF);var NF=({userId:e,socialSettings:t})=>{let{currentUserId:o}=G(),[r,n]=useState(Je.TIMELINE),[a,s]=useState(kt.FOLLOWINGS),l=as(e),m=e===o,p=()=>I(void 0,null,function*(){n(Je.TIMELINE);}),u=l==="accepted",c=k1(t)&&!u&&!m,g=c?u0.filter(({value:f})=>f===Je.TIMELINE):u0;return e?B.createElement(m9,null,B.createElement(f9,{key:e,userId:e,onUnFollow:p,onPendingNotificationClick:()=>{n(Je.FOLLOWERS),s(Bn);},onFollowingCountClick:()=>{n(Je.FOLLOWERS),s(kt.FOLLOWINGS);},onFollowerCountClick:()=>{n(Je.FOLLOWERS),s(kt.FOLLOWERS);}}),B.createElement(es,{"data-qa-anchor":"user-feed-header",tabs:g,activeTab:r,onChange:n}),r===Je.TIMELINE&&B.createElement($o,{targetType:m?"myFeed":"user",targetId:e,showPostCreator:m,isHiddenProfile:c}),r===Je.GALLERY&&B.createElement(Wa,{targetType:"user",targetId:e}),r===Je.FOLLOWERS&&!c&&B.createElement(l9,{userId:e,activeTab:a,socialSettings:t,onFollowingListClick:f=>n(Je.TIMELINE),onFollowerListClick:f=>n(Je.TIMELINE),onTabChange:f=>s(f)})):null},C9=NF;var h9=i.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 30px 0;
  overflow-x: hidden;
  overflow-y: auto;
`,y9=i.div`
  display: flex;
  margin-bottom: 1rem;
`,v9=i.div`
  ${({theme:e})=>e.typography.headline}
`,x9=i(F).attrs({variant:"secondary"})`
  width: 28px;
  padding: 2px;

  &:hover {
    background-color: transparent;
  }
`;var EF=({category:e,communities:t,hasMore:o,loadMore:r,isLoading:n,onClickCommunity:a})=>{let s=()=>o?B.createElement(ko,{onClick:()=>r()}):null;return t.length===0?B.createElement(B.Fragment,null,B.createElement(Dn,null,B.createElement(i9,{icon:B.createElement(mr,{width:48,height:48}),title:B.createElement(FormattedMessage,{id:"CategoryCommunitiesList.emptyTitle"}),description:B.createElement(FormattedMessage,{id:"CategoryCommunitiesList.emptyDescription"})})),s()):B.createElement(B.Fragment,null,B.createElement(Dn,null,t.map((l,m)=>wt(l)?B.createElement(Sn,{key:m,loading:!0}):B.createElement(Ga,{key:l==null?void 0:l.communityId,communityId:l==null?void 0:l.communityId,onClick:a}))),s())},b9=EF;var I9=({categoryId:e})=>{let{onClickCommunity:t}=O(),{communities:o,hasMore:r,loadMore:n,isLoading:a,loadMoreHasBeenCalled:s}=no({categoryId:e||void 0,sortBy:"displayName"});return {communities:useMemo(()=>{let m=new Array(5).fill(1).map(p=>({skeleton:!0}));return a&&!s?m:a?a&&s?[...o,...m]:m:o},[o,a,s]),hasMore:r,loadMore:n,isLoading:a,onClickCommunity:t}};var LF=({categoryId:e})=>{let{onChangePage:t}=O(),o=Yo(e),{communities:r,loadMore:n,isLoading:a,hasMore:s,onClickCommunity:l}=I9({categoryId:e}),m=(o==null?void 0:o.name)||"";return B.createElement(h9,null,B.createElement(y9,null,B.createElement(x9,{onClick:()=>t("explore")},B.createElement(h1,null)),B.createElement(v9,null,m)),o?B.createElement(b9,{category:o,communities:r,loadMore:n,isLoading:a,hasMore:s,onClickCommunity:l}):null)},w9=LF;var ss="0.3s",P9=i.label`
  position: relative;
  width: 48px;
  height: 28px;
  float: right;

  ${({disabled:e})=>e&&k`
      pointer-events: none;
      cursor: not-allowed;
    `}
`,ls=i.input`
  &&& {
    display: none;
  }
`,S9=i.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({disabled:e,theme:t})=>e?t.palette.base.shade4:t.palette.base.shade3};
  -webkit-transition: ${ss};
  transition: ${ss};
  border-radius: 14px;

  &:before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: 2px;
    bottom: 2px;
    background-color: #fff;
    -webkit-transition: ${ss};
    transition: ${ss};
    border-radius: 50%;
  }

  ${ls}:checked + & {
    background-color: ${({disabled:e,theme:t})=>e?t.palette.primary.shade2:t.palette.primary.main};
  }

  ${ls}:checked + &:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`;var FF=a=>{var s=a,{disabled:e,value:t,onChange:o=()=>{},"data-qa-anchor":r=""}=s,n=M(s,["disabled","value","onChange","data-qa-anchor"]);return B.createElement(P9,w(d({},n),{disabled:e,"data-qa-anchor":`${r}-label`}),B.createElement(ls,{type:"checkbox",checked:t,"data-qa-anchor":`${r}-switch`,onChange:l=>o==null?void 0:o(l.target.checked)}),B.createElement(S9,{disabled:e}))},T9=FF;var N9=i.div`
  background: ${({theme:e})=>e.palette.system.background};
  border: 1px solid #edeef2;
  border-radius: 4px;
`,E9=i.div`
  padding: 12px 16px;
  ${({theme:e})=>e.typography.title};
  border-bottom: 1px solid ${({theme:e})=>e.palette.base.shade4};
`,k9=i.div`
  padding: 12px 16px;
`,L9=i.div`
  display: flex;
  align-items: center;

  > :first-child {
    flex: 1 1 0px;
  }

  > :nth-child(2) {
    flex: 0 0 auto;
    margin-left: 20px;
  }
`,F9=i.div``,A9=i.div`
  ${({theme:e})=>e.typography.bodyBold}
`,D9=i.div`
  color: ${({theme:e})=>e.palette.base.shade2};
`;var AF=({onChange:e,value:t})=>B.createElement(L9,null,B.createElement(F9,null,B.createElement(A9,null,B.createElement(FormattedMessage,{id:"community.permissions.approvePosts"})),B.createElement(D9,null,B.createElement(FormattedMessage,{id:"community.permissions.approvePosts.prompt"}))),B.createElement(T9,{value:t,"data-qa-anchor":"community-permissions",onChange:e})),z9=AF;function BF({needApprovalOnPostCreation:e,onNeedApprovalOnPostCreationChange:t}){return B.createElement(N9,null,B.createElement(E9,null,B.createElement(FormattedMessage,{id:"community.permissions.postReview"})),B.createElement(k9,null,B.createElement(z9,{value:e,onChange:o=>t==null?void 0:t(o)})))}var O9=e=>{let t=E("CommunityPermissions");return t?t(e):B.createElement(BF,d({},e))};function $F(e,t){return e==="needApprovalOnPostCreation"?(t==null?void 0:t.postSetting)===CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED:!1}function GF(e,t){return e==="needApprovalOnPostCreation"?{postSetting:t?CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED:CommunityPostSettings.ANYONE_CAN_POST}:{[e]:t}}function U9({communityId:e,key:t}){let o=Ce(e),r=$F(t,o),[n,a]=useState(r);useEffect(()=>a(r),[r]);let s=useCallback(l=>I(this,null,function*(){try{if(a(l),e==null)return;yield CommunityRepository.updateCommunity(e,GF(t,l));}catch(m){a(r),m instanceof Error&&gt({title:B.createElement(FormattedMessage,{id:`community.permissions.error.${t}.${l?"turnOn":"turnOff"}`}),content:m.message});}}),[t,r]);return [n,s]}var qF=({communityId:e})=>{let[t,o]=U9({communityId:e,key:"needApprovalOnPostCreation"});return B.createElement(O9,{needApprovalOnPostCreation:t,onNeedApprovalOnPostCreationChange:o})},j9=qF;var H9=({title:e,children:t})=>B.createElement(Wo,{edit:!0},e&&B.createElement(Sa,null,e),B.createElement(Ko,null,t)),V9=({type:e,description:t,icon:o})=>B.createElement(Ta,null,B.createElement(Pa,null,o),B.createElement("div",null,e,B.createElement(Na,null,t))),WF=({community:e,"data-qa-anchor":t="",className:o,onSubmit:r,onCancel:n})=>{let[a,s]=useState(!1),{register:l,handleSubmit:m,setError:p,watch:u,control:c,formState:g}=p7(e),{errors:f,isValid:C}=g,v=u("displayName"),y=u("description"),h=useRef(null),x=b=>I(void 0,null,function*(){try{s(!0),yield r==null?void 0:r(w(d({},b),{avatarFileId:b.avatarFileId||void 0})),Z.success({content:B.createElement(FormattedMessage,{id:"community.updateSuccess"})});}finally{s(!1);}}),T=!g.isValid||a,S=h.current&&h.current.scrollHeight-h.current.clientHeight-h.current.scrollTop;return B.useLayoutEffect(()=>{S!=null&&h.current&&S<10&&h.current.scrollHeight-h.current.clientHeight-h.current.scrollTop>10&&h.current.scrollTo({top:h.current.scrollHeight});},[h.current,S,g]),B.createElement(Qo,{className:o,onSubmit:m(x)},B.createElement(Jo,{ref:h},B.createElement(H9,{title:"General"},B.createElement(st,null,B.createElement(Controller,{name:"avatarFileId",control:c,render:N=>{var {field:D}=N,V=D,P=M(V,["ref"]);return B.createElement(Zo,w(d({mimeType:"image/png, image/jpeg"},P),{"data-qa-anchor":t}))}})),B.createElement(st,{error:f.displayName},B.createElement(To,null,B.createElement(Tt,{htmlFor:"displayName",className:"required"},B.createElement(FormattedMessage,{id:"community.name"})),B.createElement(So,null,v.length,"/30")),B.createElement(kr,w(d({},l("displayName")),{"data-qa-anchor":`${t}-community-name-input`,placeholder:"Enter community name"})),B.createElement(at,{errors:f,name:"displayName"})),B.createElement(st,{error:f.description},B.createElement(To,null,B.createElement(Tt,{htmlFor:"description"},B.createElement(FormattedMessage,{id:"community.about"})),B.createElement(So,null,(y==null?void 0:y.length)||0,"/180")),B.createElement(Er,w(d({},l("description",{maxLength:{value:180,message:"Description text is too long"}})),{"data-qa-anchor":`${t}-community-description-textarea`,placeholder:"Enter description"})),B.createElement(at,{errors:f,name:"description"})),B.createElement(st,{error:f.categoryIds},B.createElement(Tt,{htmlFor:"categoryIds",className:"required"},B.createElement(FormattedMessage,{id:"community.category"})),B.createElement(Controller,{rules:{required:"Category is required"},name:"categoryIds",render:N=>{var {field:D}=N,V=D,P=M(V,["ref"]);return B.createElement(ka,w(d({parentContainer:h.current},P),{"data-qa-anchor":`${t}`}))},control:c}),B.createElement(at,{errors:f,name:"category"}))),B.createElement(H9,{title:B.createElement(FormattedMessage,{id:"community.categorypermission"})},B.createElement(Controller,{name:"isPublic",render:({field:b})=>B.createElement(B.Fragment,null,B.createElement(yn,w(d({},b),{value:b.value===!0,onChange:P=>b.onChange(P.target.checked),"data-qa-anchor":"community-form-public-type-community-type",label:"Public",renderer:()=>B.createElement(V9,{type:"Public",description:"Anyone can join, view and search the posts in this page.",icon:B.createElement(Ia,null)})})),B.createElement(yn,w(d({},b),{value:b.value===!1,onChange:P=>b.onChange(!P.target.checked),"data-qa-anchor":"community-form-private-type-community-type",label:"Private",renderer:()=>B.createElement(V9,{type:"Private",description:"Only members invited by the moderators can join, view, and search the posts in this page.",icon:B.createElement(wa,null)})}))),control:c}))),B.createElement(Mn,{edit:!0},B.createElement(xn,{"data-qa-anchor":`${t}-save-button`,disabled:T,edit:!0},B.createElement(FormattedMessage,{id:"save"}))))},$9=memo(WF);var JF=r=>{var n=r,{edit:e,community:t}=n,o=M(n,["edit","community"]);return e?t==null?null:B.createElement($9,w(d({},o),{community:t})):B.createElement(Ba,d({},o))},G9=memo(e=>{let t=E("CommunityForm");return t?t(e):B.createElement(JF,d({},e))});var _9=i.div`
  border-bottom: 1px solid ${({theme:e})=>e.palette.base.shade4};
`;var oA=({children:e})=>B.createElement(Wo,null,B.createElement(Ko,null,e)),q9=({className:e="",closeConfirm:t,onSubmit:o})=>{let{formatMessage:r}=useIntl(),{formState:{errors:n},control:a,setError:s,handleSubmit:l}=useForm({defaultValues:{members:[]}}),m=p=>I(void 0,null,function*(){if(p.members.length===0){s("members",{message:r({id:"AddMemberModal.membersValidationError"})});return}o(p.members);});return B.createElement(ke,{"data-qa-anchor":"add-member-modal",title:r({id:"AddMemberModal.addMembers"}),onCancel:t},B.createElement(_9,null,B.createElement(Qo,{className:e,onSubmit:l(m)},B.createElement(Jo,null,B.createElement(oA,null,B.createElement(Ea,{error:n.members},B.createElement(Controller,{name:"members",render:({field:p})=>B.createElement(Xo,w(d({},p),{"data-qa-anchor":"add-member-modal"})),control:a}),B.createElement(at,{errors:n,name:"members"})))),B.createElement(Mn,null,B.createElement(xn,null,B.createElement(FormattedMessage,{id:"add"}))))))};var rA=i.div`
  display: grid;

  grid-template-areas: 'main side';
  grid-template-columns: auto min-content;

  ${({withHeader:e})=>e&&`
    grid-template-areas: 'header header' 'main side';
    grid-template-columns: auto min-content;
    grid-template-rows: min-content auto;
  `}

  width: 100%;
  height: 100%;
  grid-gap: 20px;
  overflow: hidden;
  margin: 0 auto;
  padding: 20px 0;
`,nA=i.div`
  grid-area: header;
  width: 100%;
  height: 100%;
`,iA=i.div`
  grid-area: main;
  width: 100%;
  height: 100%;
  overflow: auto;
`,aA=i.div`
  grid-area: side;
  width: 100%;
  height: 100%;
  max-width: 20rem;
  overflow: auto;

  & > :not(:first-child) {
    margin-top: 20px;
  }
`,sA=({header:e,aside:t,children:o})=>B.createElement(rA,{withHeader:!!e},e&&B.createElement(nA,null,e),B.createElement(iA,null,o),B.createElement(aA,null,t)),Z9=sA;var mA=i.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem 0.25rem 0px 0px;
  border: 1px solid ${({theme:e})=>e.palette.system.borders};
  background: ${({theme:e})=>e.palette.system.background};
`,dA=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`,pA=i.div`
  ${({theme:e})=>e.typography.headline}
`,cA=i.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  color: ${({theme:e})=>e.palette.base.shade2};
  &:focus {
    outline: none;
  }
  & > svg {
    margin-right: 5px;
  }
`,uA=({title:e,avatarFileUrl:t,avatarImage:o,backLinkText:r,onBack:n})=>B.createElement(mA,null,B.createElement(J,{avatar:t,backgroundImage:o}),B.createElement(dA,null,n instanceof Function&&B.createElement(cA,{"data-qa-anchor":"page-header-back-button",onClick:n},B.createElement(co,{height:".9em",width:".9em"}),r!=null?r:B.createElement(FormattedMessage,{id:"backTitle"})),B.createElement(pA,null,e))),Y9=uA;var fA=i(lt)`
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px 4px 0 0;
  border: 1px solid #edeef2;
`,gA=({avatarFileUrl:e,communityName:t,onReturnToCommunity:o,tabs:r=[],activeTab:n,onTabChange:a})=>B.createElement(B.Fragment,null,B.createElement(Y9,{title:B.createElement(FormattedMessage,{id:"community.communitySettings"}),avatarFileUrl:e,avatarImage:tt,backLinkText:B.createElement(FormattedMessage,{id:"community.returnTo",values:{communityName:t}}),onBack:o}),r.length>0?B.createElement(fA,{tabs:r,activeTab:n||r[0].value,onChange:s=>a==null?void 0:a(s)}):null),W9=gA;var K9=i.div`
  border: 1px solid #edeef2;
  border-radius: 4px;
  background: ${({theme:e})=>e.palette.system.background};
  align-self: flex-start;
  padding: 16px;
  width: 330px;
  flex-shrink: 0;
`,J9=i.div`
  ${({theme:e})=>e.typography.title};
  line-height: 24px;
`,X9=i.div`
  ${({theme:e})=>e.typography.body};
  line-height: 20px;
`,R9=i.div`
  margin-top: 16px;
`,ef=i(Y)`
  padding: 10px 16px;
  justify-content: center;
  width: 100%;
`,tf=i(F)`
  padding: 10px 16px;
  justify-content: center;
  width: 100%;
`,of=i(ft).attrs({width:15,height:15})`
  margin-right: 8px;
`;var rf=({title:e,bodyText:t,actionButton:o})=>B.createElement(K9,null,B.createElement(J9,null,e),B.createElement(X9,null,B.createElement("div",null,t),B.createElement(R9,null,o))),yA=({onClick:e})=>B.createElement(ef,{"data-qa-anchor":"community-edit-add-member-button",onClick:e},B.createElement(of,null),B.createElement(FormattedMessage,{id:"add"})),vA=o=>{var r=o,{onClick:e}=r,t=M(r,["onClick"]);return B.createElement(tf,w(d({},t),{onClick:e}),B.createElement(FormattedMessage,{id:"close"}))},nf=({action:e})=>B.createElement(rf,{title:B.createElement(FormattedMessage,{id:"AddMemberAction.title"}),bodyText:B.createElement(FormattedMessage,{id:"AddMemberAction.description"}),actionButton:B.createElement(yA,{onClick:e})}),af=({communityId:e,onCommunityClosed:t})=>{let{formatMessage:o}=useIntl();return B.createElement(rf,{title:B.createElement(FormattedMessage,{id:"CloseCommunityAction.title"}),bodyText:B.createElement(FormattedMessage,{id:"CloseCommunityAction.description"}),actionButton:B.createElement(vA,{"data-qa-anchor":"community-edit-close-community-button",onClick:()=>re({"data-qa-anchor":"close-community",title:o({id:"CloseCommunityAction.closeConfirm.title"}),content:o({id:"CloseCommunityAction.closeConfirm.description"}),cancelText:o({id:"cancel"}),okText:o({id:"close"}),onOk:()=>I(void 0,null,function*(){e&&(yield CommunityRepository.deleteCommunity(e),t==null||t());})})})})};var MA=({communityId:e,tab:t=Nt.EDIT_PROFILE})=>{let{onChangePage:o}=O(),[r,n]=useState(t),[a,s]=useState(!1),l=()=>s(!0),m=()=>s(!1);useEffect(()=>n(t),[t]);let{onClickCommunity:p}=O(),u=Ce(e),c=j({fileId:u==null?void 0:u.avatarFileId,imageSize:"medium"}),g=()=>e&&p(e),f=y=>I(void 0,null,function*(){e!=null&&(yield CommunityRepository.updateCommunity(e,y),g());}),C=y=>I(void 0,null,function*(){e!=null&&(yield CommunityRepository.Membership.addMembers(e,y),m());});return B.createElement(Z9,{aside:(()=>{switch(r){case Nt.EDIT_PROFILE:return B.createElement(af,{communityId:e,onCommunityClosed:()=>o("newsfeed")});case Nt.MEMBERS:return B.createElement(B.Fragment,null,B.createElement(nf,{action:l}),a&&B.createElement(q9,{closeConfirm:m,onSubmit:C}));default:return null}})(),header:B.createElement(W9,{avatarFileUrl:c,communityName:u==null?void 0:u.displayName,tabs:X7,activeTab:r,onTabChange:y=>n(y),onReturnToCommunity:g})},r===Nt.EDIT_PROFILE&&!!(u!=null&&u.communityId)&&B.createElement(G9,{"data-qa-anchor":"community-edit",community:u,edit:!0,onSubmit:y=>f(w(d({},y),{avatarFileId:y.avatarFileId||void 0}))}),r===Nt.MEMBERS&&B.createElement(Ra,{communityId:e}),r===Nt.PERMISSIONS&&B.createElement(j9,{communityId:e}))},mf=MA;var SA=i.div`
  margin-top: 16px;
`,TA=({title:e,children:t})=>B.createElement(Wo,null,B.createElement(Sa,null,e),B.createElement(Ko,null,t)),NA=({user:e,onSubmit:t,className:o})=>{var C,v;let{currentUserId:r}=G(),n=U(r),{formatMessage:a}=useIntl(),{register:s,handleSubmit:l,formState:{errors:m},watch:p,control:u}=useForm({defaultValues:{displayName:e.displayName,description:(C=e.description)!=null?C:"",avatarFileId:(v=e.avatarFileId)!=null?v:void 0}}),c=Cr(n==null?void 0:n.roles),g=p("description"),f=p("displayName");return B.createElement(Qo,{className:o,onSubmit:l(y=>{t(c?y:{description:y.description,avatarFileId:y.avatarFileId});})},B.createElement(Jo,null,B.createElement(TA,{title:B.createElement(FormattedMessage,{id:"UserProfileForm.title"})},B.createElement(Controller,{name:"avatarFileId",render:x=>{var {field:T}=x,S=T,h=M(S,["ref"]);return B.createElement(Zo,w(d({},h),{"data-qa-anchor":"user-profile-form-avatar-uploader"}))},control:u}),B.createElement(st,{error:m.displayName},B.createElement(To,null,B.createElement(Tt,{htmlFor:"displayName",className:"required"},B.createElement(FormattedMessage,{id:"UserProfileForm.displayname"})),B.createElement(So,null,(f==null?void 0:f.length)||0,"/100")),B.createElement(kr,w(d({},s("displayName",{required:a({id:"UserProfileForm.requiredDisplayName"})})),{"data-qa-anchor":"user-profile-form-display-name-input",placeholder:a({id:"UserProfileForm.namePlaceholder"}),maxLength:100,disabled:!c})),B.createElement(at,{errors:m,name:"displayName"})),B.createElement(st,{error:m.description},B.createElement(To,null,B.createElement(Tt,{htmlFor:"description"},B.createElement(FormattedMessage,{id:"UserProfileForm.about"})),B.createElement(So,null,g.length,"/180")),B.createElement(Er,w(d({},s("description")),{"data-qa-anchor":"user-profile-form-description-textarea",placeholder:a({id:"UserProfileForm.requiredDescription"}),maxLength:180})),B.createElement(at,{errors:m,name:"description"})),B.createElement(SA,null,B.createElement(Y,{"data-qa-anchor":"user-profile-form-save-button",type:"submit"},B.createElement(FormattedMessage,{id:"save"}))))))},df=memo(NA);var pf=i.button.attrs({role:"button"})`
  color: ${({theme:e})=>e.palette.base.shade1};
  font-size: 14px;
  border: none;
  outline: none;
  background: none;
  padding: 4px 0 4px 0px;

  &:hover {
    cursor: pointer;
    color: ${({theme:e})=>e.palette.neutral.shade1};
  }
`;var kA=({text:e})=>{let{onBack:t}=O();return B.createElement(pf,{onClick:t},e)},cf=kA;var ps={EDIT_PROFILE:"EDIT_PROFILE"},uf=[{value:ps.EDIT_PROFILE,label:"Edit profile"}];var ff=i(lt)`
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px 4px 0 0;
  border: 1px solid #edeef2;
`;var gf=e=>{let t=E("ProfileSettingsTabs");return t?t(e):B.createElement(ff,d({},e))};var Cf=i(gf)``,hf=i.div`
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-width: 600px;
`,yf=i.div`
  display: flex;
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px 4px 0 0;
  border: 1px solid #edeef2;
  padding: 10px 10px 20px 10px;
`,vf=i.div`
  font-weight: 600;
  font-size: 20px;
`,xf=i(J).attrs({size:"small"})`
  margin-right: 12px;
  margin-left: 16px;
`,Mf=i.div`
  padding-top: 4px;
`,bf=i.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
`,If=i.div`
  flex: 3;
  margin-top: 12px;
`;i.div`
  border: 1px solid #edeef2;
  border-radius: 4px;
  background: ${({theme:e})=>e.palette.system.background};
  align-self: flex-start;
  padding: 16px;
  margin-left: 36px;
  flex: 1;
`;i.div`
  ${({theme:e})=>e.typography.title};
  line-height: 24px;
`;i.div`
  ${({theme:e})=>e.typography.body};
  line-height: 20px;
`;i.div`
  margin-top: 16px;
`;i(Y)`
  padding: 10px 16px;
  justify-content: center;
  width: 100%;
`;i(F)`
  padding: 10px 16px;
  justify-content: center;
  width: 100%;
`;i(ft).attrs({width:15,height:15})`
  margin-right: 8px;
`;var OA=({userId:e})=>{let{formatMessage:t}=useIntl(),{onClickUser:o}=O(),[r,n]=useState(ps.EDIT_PROFILE),a=U(e),s=j({fileId:a==null?void 0:a.avatarFileId,imageSize:"small"}),l=m=>I(void 0,null,function*(){try{if(e==null)return;yield UserRepository.updateUser(e,m),o(e);}catch(p){console.log(p);}});return a==null?null:B.createElement(hf,null,B.createElement(yf,null,B.createElement(Mf,null,B.createElement(xf,{avatar:s,backgroundImage:se})),B.createElement("div",null,B.createElement(cf,{text:t({id:"ProfileSettings.returnTo"})+((a==null?void 0:a.displayName)||"")}),B.createElement(vf,null,B.createElement(FormattedMessage,{id:"profile.setting"})))),B.createElement("div",null,B.createElement(Cf,{tabs:uf,activeTab:r,onChange:n})),B.createElement(If,null,r===ps.EDIT_PROFILE&&B.createElement(bf,null,a!=null?B.createElement(df,{user:a,onSubmit:l}):null)))},wf=memo(e=>{let t=E("ProfileSettings");return t?t(e):B.createElement(OA,d({},e))});var jA=i.div`
  height: 100%;
  width: 100%;
`,HA=i(P7)`
  min-height: 100%;
`,VA=()=>{let{page:e}=O(),{client:t}=G(),[o,r]=B.useState(null);return useEffect(()=>{if(t==null)return;function n(){return I(this,null,function*(){let a=yield t==null?void 0:t.getSocialSettings();a&&r(a);})}n();},[t]),B.createElement(jA,null,B.createElement(c8,{aside:B.createElement(HA,{activeCommunity:e.communityId})},e.type==="explore"&&B.createElement(Q7,null),e.type==="newsfeed"&&B.createElement(J7,null),e.type==="communityfeed"&&B.createElement(Ku,{communityId:e.communityId,isNewCommunity:e.isNewCommunity}),e.type==="communityedit"&&B.createElement(mf,{communityId:e.communityId,tab:e.tab}),e.type==="category"&&B.createElement(w9,{categoryId:e.categoryId}),e.type==="userfeed"&&B.createElement(C9,{userId:e.userId,socialSettings:o}),e.type==="useredit"&&B.createElement(wf,{userId:e.userId})))},$A=VA;var Sf={DIRECT_CHAT:2,ONLY_ME_CHAT:1};function YA(e,t){var a,s,l;if((a=e==null?void 0:e.metadata)!=null&&a.isDirectChat&&(e==null?void 0:e.memberCount)===Sf.ONLY_ME_CHAT)return "Me";if(!((s=e==null?void 0:e.metadata)!=null&&s.isDirectChat)&&(e!=null&&e.displayName))return e==null?void 0:e.displayName;let{firstname:o="",lastname:r=""}=(l=t==null?void 0:t.metadata)!=null?l:{},n=trim(`${o}${r}`);return (t==null?void 0:t.displayName)||n||(t==null?void 0:t.userId)||e.channelId}function M0(o){return I(this,arguments,function*({avatarFileId:e,avatarCustomUrl:t}){if(t)return t;if(e){let r=yield FileRepository.getFile(e);return FileRepository.fileUrlWithSize(r.data.fileUrl,"small")}return null})}function QA(e,t,o){return I(this,null,function*(){var r,n;return (e==null?void 0:e.memberCount)===Sf.ONLY_ME_CHAT?M0({avatarCustomUrl:o==null?void 0:o.avatarUrl}):(r=e==null?void 0:e.metadata)!=null&&r.isDirectChat&&(t!=null&&t.avatarUrl)?M0({avatarCustomUrl:t.avatarUrl}):M0({avatarFileId:e==null?void 0:e.avatarFileId,avatarCustomUrl:(n=e==null?void 0:e.metadata)==null?void 0:n.avatarCustomUrl})})}function WA({channel:e}){var u,c,g;let{currentUserId:t}=z1(),[o,r]=useState(null),n=(u=e==null?void 0:e.metadata)!=null&&u.isDirectChat?((g=(c=e==null?void 0:e.metadata)==null?void 0:c.userIds)!=null?g:[]).find(f=>f!==t):null,a=U(t),s=U(n),l=j({fileId:a==null?void 0:a.avatarFileId}),m=j({fileId:s==null?void 0:s.avatarFileId});return useEffect(()=>{function f(){return I(this,null,function*(){r(null);let C=yield QA(e,{avatarUrl:(s==null?void 0:s.avatarCustomUrl)||m},{avatarUrl:(a==null?void 0:a.avatarCustomUrl)||l});r(C);})}f();},[s==null?void 0:s.avatarCustomUrl,e,l,a==null?void 0:a.avatarCustomUrl]),{chatName:useMemo(()=>e==null?void 0:YA(e,s),[e,s]),chatAvatar:o,type:e==null?void 0:e.type}}var $n=WA;var Tf=i(ye)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 8px;
  margin-bottom: 6px;
  color: ${({theme:e})=>e.palette.neutral.main};
  justify-content: left;

  &:disabled {
    color: ${({theme:e})=>e.palette.neutral.shade2};
  }

  ${({active:e,theme:t})=>e?k`
          background-color: ${t.palette.primary.shade3};
          color: ${t.palette.primary.main};
          &:hover {
            background-color: ${t.palette.primary.shade3};
          }
        `:k`
          &:hover {
            background-color: ${t.palette.base.shade4};
          }
        `}
`,Nf=i.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  ${({active:e,theme:t})=>e?k`
          background: ${t.palette.primary.main};
          color: white;
        `:k`
          background: ${t.palette.base.shade4};
          color: ${t.palette.base.main};
        `}
`;var KA=s=>{var l=s,{icon:e,children:t,active:o,className:r,onClick:n}=l,a=M(l,["icon","children","active","className","onClick"]);return B.createElement(Tf,d({className:r,active:o,onClick:n},a),e&&B.createElement(Nf,{active:o},e),t)},kf=KA;var Gn={BIG:"big",REGULAR:"regular",SMALL:"small",TINY:"tiny"};var eD=({size:e=Gn.REGULAR,avatarUrl:t,avatarFileId:o,avatarFile:r,defaultImage:n,avatarCustomUrl:a})=>{let[s,l]=useState(null),[m,p]=useState(null);return useEffect(()=>{l(null),p(null),I(void 0,null,function*(){if(t){l(t);return}if(a){l(a);return}if(r){let g=yield (f=>new Promise((C,v)=>{let y=new FileReader;y.readAsDataURL(f),y.onload=()=>C(y.result),y.onerror=v;}))(r);l(g);return}if(o){let c=yield FileRepository.fileUrlWithSize(o,"small");l(c);return}if(n){p(n);return}});},[t,o,r,a]),B.createElement(J,{size:e,avatar:s,backgroundImage:m})},tr=eD;var Ff=i(kf)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin: 0;
  padding: 0 18px 0 16px;
  border-radius: 0;
`,Af=i.div`
  display: flex;
  align-items: center;
`,Df=i(tr)`
  flex-shrink: 0;
`,Bf=i.div`
  width: 135px;
  ${({theme:e})=>e.typography.bodyBold};
  line-height: 20px;
  text-align: left;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 8px;
`,zf=i.div`
  flex-shrink: 0;
  height: 20px;
  padding: 1px 6px;
  font-size: 13px;
  color: #fff;
  background: #f9563a;
  border-radius: 20px;
`;function Yi({channelId:e,shouldSubscribe:t=()=>!0,callback:o}){return Ct({fetcher:ChannelRepository.getChannel,params:e,callback:o,shouldSubscribe:()=>!!e&&t(),getSubscribedTopic:({data:r})=>getChannelTopic(r)})}var nD=e=>Le({fetcher:ChannelRepository.getChannel,params:e,shouldCall:()=>!!e}),or=nD;function iD(e){let t={BOTTOM:1,TOP:99};return !e||e<t.BOTTOM?"":e<=t.TOP?e:`${t.TOP}+`}var aD=({channelId:e,isSelected:t,onSelect:o})=>{let r=or(e),{chatName:n,chatAvatar:a}=$n({channel:r}),s=iD((r==null?void 0:r.unreadCount)||0);return Yi({channelId:r==null?void 0:r.channelId,shouldSubscribe:()=>!!(r!=null&&r.channelId)}),B.createElement(Ff,{"data-qa-anchor":"chat-item",active:t,onClick:l=>{l.stopPropagation(),r&&o({channelId:r.channelId,type:r.type});}},B.createElement(Af,null,B.createElement(Df,{avatarUrl:a,defaultImage:((r==null?void 0:r.memberCount)||0)>2?tt:se}),B.createElement(Bf,null,n)),s&&B.createElement(zf,{"data-qa-anchor":"chat-item-unread-count"},s))},Of=e=>{let t=E("ChatItem");return t?t(e):B.createElement(aD,d({},e))};var Uf=i(C2).attrs({width:24,height:18})`
  width: 24px !important;
  cursor: pointer;
`,jf=i.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 280px;
  padding: 24px 0 5px 0;
  background-color: white;
  border-right: 1px solid #e3e4e8;
  max-height: 100dvh;
`,Hf=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 17px;
  padding-left: 20px;
  padding-right: 16px;
`,Vf=i.span`
  ${({theme:e})=>e.typography.title};
  line-height: 28px;
  color: ${({theme:e})=>e.palette.neutral.shade1};
`,$f=i.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;function b0(e){let r=ee({fetcher:ChannelRepository.getChannels,params:e}),{items:t}=r,o=M(r,["items"]);return d({channels:t},o)}var pD=({onChannelSelect:e,onAddNewChannelClick:t,selectedChannelId:o,membershipFilter:r})=>{let{channels:n,hasMore:a,loadMore:s}=b0({membership:r,sortBy:"lastActivity",limit:20}),l=useRef(null);return B.createElement(jf,null,B.createElement(Hf,null,B.createElement(Vf,null,B.createElement(FormattedMessage,{id:"chat.chats"})),B.createElement(Uf,{"data-qa-anchor":"chat-create-chat-button",onClick:t})),B.createElement($f,{ref:l,"data-qa-anchor":"chat-list"},l.current?B.createElement(oT,{scrollableTarget:l.current,scrollThreshold:.7,hasMore:a,next:s,loader:a&&B.createElement("span",{key:0},"Loading..."),dataLength:n.length,height:l.current.clientHeight},Array.isArray(n)&&n.map(m=>B.createElement(Of,{key:m.channelId,channelId:m.channelId,isSelected:o===m.channelId,onSelect:p=>{e==null||e(p);}}))):null))},Gf=e=>{let t=E("RecentChat");return t?t(e):B.createElement(pD,d({},e))};var _f=i.div`
  display: flex;
  align-items: center;
`,qf=i.input`
  height: 34px;
  padding: 6px;
  margin: 5px;
  outline: none;
  border: 1px solid #e3e4e8;
  border-radius: 4px;
`,Zf=i(b2)`
  opacity: 0.7;
  padding: 0 10px;
  cursor: pointer;
`;i(M1)`
  opacity: 0.7;
  padding: 0 10px;
  cursor: pointer;
`;var Yf=i(bt)`
  opacity: 0.7;
  padding: 0 10px;
  cursor: pointer;
`,Qf=i(h2).attrs({width:11,height:11})`
  opacity: 0.5;
  margin: 0 5px;
  cursor: pointer;
`,I0=i(J)`
  margin-right: auto;
`,Wf=i.div`
  display: flex;
  width: 100%;
  ${({isIncoming:e})=>!e&&"justify-content: flex-end;"}
`,Kf=i.div`
  display: flex;
  max-width: 60%;
`,Jf=i.div`
  min-width: 265px;
`,Xf=i.div`
  width: 52px;
  flex-shrink: 0;
`,Rf=i.div`
  color: ${({theme:e})=>e.palette.neutral.main};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`,w0=i.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  padding: 8px;
  word-break: break-word;

  & pre {
    white-space: pre-wrap;
  }
`,eg=i(w0)`
  ${({theme:e,isIncoming:t})=>t?`
      background: ${e.palette.neutral.shade4};
      border-radius: 0px 6px 6px 6px;
    `:`
      background: ${e.palette.primary.main};
      color: #fff;
      border-radius: 6px 0px 6px 6px;
  `}
`,tg=i(w0)`
  text-align: ${({isIncoming:e})=>e?"left":"right"};
`,og=i(w0)`
  text-align: center;
  background: ${({theme:e})=>e.palette.neutral.shade4};
  border-radius: 10px;
`,rg=i.div`
  font-size: 13px;
  opacity: 0.5;
  margin-left: auto;
`,ng=i.div`
  margin-top: 3px;
  display: flex;
  align-items: center;
`;var uD=e=>{let[t,o]=useState(!0),[r,n]=useState(!1);useEffect(()=>{e&&MessageRepository.isMessageFlaggedByMe(e).then(m=>{n(m),o(!1);});},[e]);let a=()=>I(void 0,null,function*(){if(e!=null)try{n(!0),yield MessageRepository.flagMessage(e);}catch(m){n(!1);}}),s=()=>I(void 0,null,function*(){if(e!=null)try{n(!1),yield MessageRepository.unflagMessage(e);}catch(m){n(!0);}});return {isLoading:t,isFlaggedByMe:r,flagMessage:a,unflagMessage:s,toggleFlagMessage:()=>I(void 0,null,function*(){e!=null&&(r?s():a());})}},ag=uD;function S0({messageId:e,shouldSubscribe:t=()=>!0,callback:o}){return Ct({fetcher:MessageRepository.getMessage,params:e,callback:o,shouldSubscribe:()=>!!e&&t(),getSubscribedTopic:({data:r})=>getMessageTopic(r)})}var hD=i(ua)`
  ${({align:e,theme:t})=>e==="end"&&`color: ${t.palette.neutral.main};`}
`,yD=({messageId:e})=>{let{isFlaggedByMe:t,flagMessage:o,unflagMessage:r}=ag(e);return S0({messageId:e}),t?B.createElement(Ke,{onClick:r},B.createElement(FormattedMessage,{id:"message.unflag"})):B.createElement(Ke,{onClick:o},B.createElement(FormattedMessage,{id:"message.flag"}))},vD=({isIncoming:e,messageId:t,data:o,isSupportedMessageType:r,popupContainerRef:n})=>{let[a,s]=useState(""),[l,m]=useState(!1),p=T=>{T.stopPropagation(),m(!0);},[u,c]=useState(!1),{formatMessage:g}=useIntl(),f=()=>{s(typeof o=="object"?o.text:o),c(!0),m(!1);},C=()=>{c(!1);},v=()=>{MessageRepository.updateMessage(t,{data:{text:a}}).then(C).catch(()=>{Z.error({content:g({id:"message.saveOptionsError"})});});};return B.createElement(hD,{isOpen:u,positions:["bottom","top"],align:e?"start":"end",content:l?B.createElement(_f,null,B.createElement(qf,{"data-qa-anchor":"message-edit-input",autoFocus:!0,value:a,onChange:T=>s(T.target.value),onKeyDown:T=>{T.key==="Enter"&&v(),T.key==="Escape"&&C();}}),B.createElement(Zf,{"data-qa-anchor":"message-save-button",onClick:v}),B.createElement(Yf,{onClick:C})):B.createElement(oo,null,!e&&r&&B.createElement(Ke,{"data-qa-anchor":"message-menu-item-edit",onClick:p},B.createElement(FormattedMessage,{id:"message.edit"})),e&&B.createElement(yD,{messageId:t}),!e&&B.createElement(Ke,{"data-qa-anchor":"message-menu-item-delete",onClick:()=>{MessageRepository.deleteMessage(t).then(C);}},B.createElement(FormattedMessage,{id:"message.delete"}))),parentElement:(n==null?void 0:n.current)||void 0,onClickOutside:C},B.createElement("div",{"data-qa-anchor":"message-options-button",role:"button",tabIndex:0,onClick:f,onKeyDown:f},B.createElement(Qf,null)))},lg=vD;var bD=()=>B.createElement(FormattedMessage,{id:"chat.message.deleted"}),mg=bD;var wD=({data:e})=>B.createElement(tn,null,e.text),dg=wD;var SD=({data:e})=>B.createElement("pre",null,JSON.stringify(e)),pg=SD;var ED=()=>B.createElement(FormattedMessage,{id:"chat.message.unsupported"}),cg=ED;function kD(e){return e.type==="text"}function LD(e){return e.type==="custom"}var FD=e=>{let{isDeleted:t}=e;return t?B.createElement(mg,null):kD(e)?B.createElement(dg,{data:e.data}):LD(e)?B.createElement(pg,{data:e.data}):B.createElement(cg,null)},ug=FD;var DD=n=>{var a=n,{isDeleted:e,type:t,isSupportedMessageType:o}=a,r=M(a,["isDeleted","type","isSupportedMessageType"]);return e?B.createElement(tg,w(d({},r),{"data-qa-anchor":"message-body-deleted"})):o?B.createElement(eg,w(d({},r),{"data-qa-anchor":"message-body-general"})):B.createElement(og,w(d({},r),{"data-qa-anchor":"message-body-unsupported"}))},BD=({messageId:e,avatar:t,type:o,data:r,createdAt:n,isDeleted:a,isIncoming:s,isConsequent:l,userDisplayName:m,containerRef:p})=>{let u=s&&!l&&m,c=["text","custom"].includes(o);return B.createElement(Wf,{isIncoming:s},B.createElement(Kf,null,s&&B.createElement(Xf,null,!l&&(t?B.createElement(I0,{avatar:t}):B.createElement(I0,{backgroundImage:se}))),B.createElement(Jf,{"data-qa-anchor":"message"},u&&B.createElement(Rf,null,m),B.createElement(DD,{type:o,isIncoming:s,isDeleted:a||!1,isSupportedMessageType:c},B.createElement(ug,{data:r,type:o,isDeleted:a}),!a&&B.createElement(ng,null,B.createElement(rg,null,B.createElement(FormattedTime,{value:n})),B.createElement(lg,{messageId:e,data:r,isIncoming:s,isSupportedMessageType:c,popupContainerRef:p}))))))},fg=e=>{let t=E("Message");return t?t(e):B.createElement(BD,d({},e))};var gg=i.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  overflow: auto;
  background: #f7f7f8;
`,Cg=i.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 20px;
`;function N0(e){let r=ee({fetcher:MessageRepository.getMessages,params:e,shouldCall:()=>!!e.subChannelId}),{items:t}=r,o=M(r,["items"]);return d({messages:t},o)}var jD=({message:e,isConsequent:t,isIncoming:o,containerRef:r})=>{let n=U(e.creatorId),a=j({fileId:n==null?void 0:n.avatarFileId,imageSize:"small"});return B.createElement(fg,{key:e.messageId,avatar:a||"",messageId:e.messageId,data:(e==null?void 0:e.data)||"",type:e.dataType,createdAt:new Date(e.createdAt),isDeleted:e.isDeleted,userDisplayName:(n==null?void 0:n.displayName)||"",isConsequent:t,isIncoming:o,containerRef:r})},HD=({channelId:e})=>{let{client:t}=G(),o=useRef(null),{messages:r,hasMore:n,loadMore:a}=N0({subChannelId:e,sortBy:"segmentDesc",limit:20});return Yi({channelId:e}),B.createElement(gg,{ref:o},o.current?B.createElement(oT,{scrollableTarget:o.current,scrollThreshold:.7,hasMore:n,next:a,loader:B.createElement("span",{key:0},"Loading..."),inverse:!0,dataLength:r.length,style:{display:"flex",flexDirection:"column-reverse"},height:o.current.clientHeight},B.createElement(Cg,{ref:o,"data-qa-anchor":"message-list"},r.map((s,l)=>{let m=r[l+1],p=m&&m.creatorId===s.creatorId,u=s.creatorId!==(t==null?void 0:t.userId);return !(s!=null&&s.data)||!s.createdAt?B.createElement(B.Fragment,null):B.createElement(jD,{key:s.messageId,message:s,isConsequent:p,isIncoming:u,containerRef:o})}))):null)},hg=e=>{let t=E("MessageList");return t?t(e):B.createElement(HD,d({},e))};var yg=i(c2).attrs({width:28,height:28})`
  cursor: pointer;
  margin-left: 12px;
  margin-right: 8px;
  fill: #0f86fe;
`;i(Kn).attrs({width:18,height:18})`
  cursor: pointer;
  margin-right: 20px;
  fill: ${({theme:e})=>e.palette.neutral.main};
`;i(Jn).attrs({width:18,height:18})`
  margin-right: 12px;
  cursor: pointer;
  fill: ${({theme:e})=>e.palette.neutral.main};
`;var vg=i.div`
  padding: 12px 16px 16px 16px;
  background: ${({theme:e})=>e.palette.system.background};
  border-top: 1px solid #e3e4e8;
  display: flex;
  align-items: center;
`,xg=i.input`
  height: 34px;
  padding: 6px;
  outline: none;
  border: 1px solid #e3e4e8;
  border-radius: 4px;
  flex-grow: 1;
`;var GD=({onSubmit:e})=>{let[t,o]=useState(""),{formatMessage:r}=useIntl(),n=()=>{t!==""&&(e(t),o(""));};return B.createElement(vg,null,B.createElement(xg,{"data-qa-anchor":"message-compose-bar-input",type:"text",value:t,placeholder:r({id:"MessageComposeBar.placeholder"}),onChange:a=>o(a.target.value),onKeyPress:a=>a.key==="Enter"&&n()}),B.createElement(yg,{"data-qa-anchor":"message-compose-bar-send-message-button",onClick:n}))},Mg=e=>{let t=E("MessageComposerBar");return t?t(e):B.createElement(GD,d({},e))};var bg=i(Qs).attrs({width:24,height:24})`
  cursor: pointer;
  fill: ${({theme:e})=>e.palette.neutral.main};
  align-self: center;
`,Ig=i.div`
  height: 76px;
  padding: 0 20px;
  background: ${({theme:e})=>e.palette.system.background};
  border-top: 1px solid #e3e4e8;
  border-bottom: 1px solid #e3e4e8;
  display: flex;
  justify-content: space-between;
`,wg=i.div`
  display: flex;
  align-items: center;
  height: 74px;
`,Pg=i.div`
  margin-left: 8px;
`,Sg=i.div`
  font-weight: 600;
  font-size: 14px;
  color: #000000;
`,Tg=i.div`
  font-size: 12px;
  color: #999999;
`;var qD=({channelId:e,onChatDetailsClick:t,shouldShowChatDetails:o})=>{let r=or(e),{chatName:n,chatAvatar:a}=$n({channel:r});return B.createElement(Ig,{"data-qa-anchor":"chat-header"},B.createElement(wg,null,B.createElement(tr,{avatarUrl:a||void 0,defaultImage:r!=null&&r.memberCount&&r.memberCount>2?tt:se}),B.createElement(Pg,{"data-qa-anchor":"chat-header-channel-info"},B.createElement(Sg,{"data-qa-anchor":"chat-header-channel-info-channel-name"},n),B.createElement(Tg,{"data-qa-anchor":"chat-header-channel-info-member-count"},B.createElement(FormattedMessage,{id:"chat.members.count",values:{count:r==null?void 0:r.memberCount}})))),!o&&B.createElement(bg,{onClick:t}))},Ng=e=>{let t=E("ChatHeader");return t?t(e):B.createElement(qD,d({},e))};var Eg=i.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,kg=i.div`
  padding: 20px 16px 16px;
`,Lg=i.div``,Fg=i(ro)`
  button {
    width: 100%;
  }
`,Ag=i.input`
  ${({theme:e})=>e.typography.global};
  border-radius: 4px;
  border: 1px solid #e3e4e8;
  padding: 10px 12px;
  outline: none;
  &:focus-within {
    border-color: ${({theme:e})=>e.palette.primary.main};
  }
`,gs=i.label`
  ${({theme:e})=>e.typography.bodyBold};
  ${({theme:e})=>`
    &.required {
      &::after {
        color: ${e.palette.alert.main};
        content: ' *';
      }
    }
  `}
`,E0=i.div`
  width: 700px;
  margin-right: 20px;
`,k0=i.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
`,Dg=i.div``,Qi=i.div`
  display: flex;
  flex-direction: column;
  ${({horizontal:e})=>e&&"flex-direction: row"};
  ${({separate:e,theme:t})=>e&&`
    border-top: 1px solid ${t.palette.base.shade4};
    padding-top: 20px;
  `};
  margin-bottom: 20px;
`,QD=i.div`
  margin-top: 8px;
  color: ${({theme:e})=>e.palette.alert.main};
  ${({theme:e})=>e.typography.caption}
`,L0=e=>B.createElement(ErrorMessage,d({as:QD},e)),Bg=i.div`
  border-top: 1px solid ${({theme:e})=>e.palette.base.shade4};
  padding: ${({edit:e})=>e?"12px 0":"12px 16px"};
  display: flex;
  justify-content: ${({edit:e})=>e?"flex-start":"flex-end"};
`,zg=i.div``,Og=i.form``,Ug=i.div`
  width: 100%;
`,jg=i(Y).attrs({type:"submit"})`
  padding: 10px 16px;
  margin-left: 12px;
  ${({edit:e})=>e&&k`
      min-width: 100px;
      margin-left: 0;
    `};
`;var XD=({channelId:e,onChatDetailsClick:t,shouldShowChatDetails:o})=>(useEffect(()=>{function n(){return I(this,null,function*(){yield ChannelRepository.joinChannel(e),yield SubChannelRepository.startReading(e);})}return n(),()=>{SubChannelRepository.stopReading(e);}},[e]),B.createElement(Eg,null,B.createElement(Ng,{channelId:e,shouldShowChatDetails:o,onChatDetailsClick:t}),B.createElement(hg,{channelId:e}),B.createElement(Mg,{onSubmit:n=>I(void 0,null,function*(){return MessageRepository.createMessage({subChannelId:e,data:{text:n},dataType:"text"})})}))),Vg=e=>{let t=E("Chat");return t?t(e):B.createElement(XD,d({},e))};var $g=i.div`
  display: flex;
  padding: 0px 15px 10px;
`,Gg=i.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`,_g=i.label`
  font-weight: bold;
  margin-bottom: 5px;
`,qg=i.div`
  display: flex;
  justify-content: flex-end;
`,Zg=i(Y)`
  margin-left: 15px;
`,Yg=i(ye)``;var tB=({closeModal:e,submitButtonName:t="",onSubmit:o,chatName:r="",title:n})=>{let{formatMessage:a}=useIntl(),[s,l]=useState(r),m=()=>{o==null||o(s),e==null||e();};return B.createElement(ke,{"data-qa-anchor":"group-settings-modal",size:"small",title:n||a({id:"chat.create.modalTitle"}),footer:B.createElement(qg,null,B.createElement(Yg,{onClick:e},B.createElement(FormattedMessage,{id:"general.cancel.capital"})),B.createElement(Zg,{disabled:s.length===0,onClick:m},t||B.createElement(FormattedMessage,{id:"general.create.capital"})))},B.createElement($g,null,B.createElement(Gg,null,B.createElement(_g,null,B.createElement(FormattedMessage,{id:"groupChat.createPopup.fieldName"})),B.createElement(Ge,{value:s,placeholder:a({id:"groupChat.createPopup.placeholder"}),onChange:p=>l(p.plainText)}))))},Qg=tB;var oB=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 448 512",fill:"currentColor"},e),B.createElement("path",{d:`M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 
      438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 
      48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 
      86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 
      288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 
      43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z`})),Kg=oB;var Jg=i.div``,Ki=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 24px 0 20px;
  border-bottom: 1px solid #f7f7f8;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f8;
  }
`,Ji=i.div`
  display: flex;
  align-items: center;
`,Xi=i.div`
  padding-right: 8px;
  ${({theme:e})=>e.typography.body};
  color: ${({theme:e,isDanger:t})=>t?e.palette.alert.main:e.palette.neutral.main};
`,Xg=i.span`
  ${({theme:e})=>e.typography.body};
  color: ${({theme:e})=>e.palette.neutral.shade3};
`,Rg=i(cr).attrs({width:16,height:12})`
  width: 16px !important;
  padding-left: 8px;
  fill: ${({theme:e})=>e.palette.neutral.shade3};
`,eC=k`
  padding-right: 8px;
  text-align: center;
  fill: ${({theme:e})=>e.palette.neutral.main};
`,tC=i(Kg).attrs({width:24,height:24})`
  ${eC}
`,oC=i(dr).attrs({width:24,height:20})`
  ${eC}
`;var aB=({chatName:e,channelId:t})=>{let[o,r]=useState(!1),{formatMessage:n}=useIntl(),a=s=>I(void 0,null,function*(){yield ChannelRepository.updateChannel(t,{displayName:s});});return B.createElement(B.Fragment,null,B.createElement(Ki,{onClick:()=>r(!0)},B.createElement(Ji,null,B.createElement(oC,null),B.createElement(Xi,null,B.createElement(FormattedMessage,{id:"chat.groupSetting"})))),o&&B.createElement(Qg,{title:B.createElement(FormattedMessage,{id:"chat.groupSetting"}),chatName:e,submitButtonName:n({id:"general.done.capital"}),closeModal:()=>r(!1),onSubmit:a}))},nC=aB;var lB=({channelId:e,chatType:t,chatName:o,showMembers:r,leaveChat:n,memberCount:a=0})=>{let{formatMessage:s}=useIntl(),l=a<=2;return B.createElement(Jg,null,B.createElement(Ki,{onClick:r},B.createElement(Ji,null,B.createElement(tC,null),B.createElement(Xi,null,B.createElement(FormattedMessage,{id:"tabs.members"}))),B.createElement(Ji,null,a&&B.createElement(Xg,null,a),B.createElement(Rg,null))),!l&&B.createElement(nC,{channelId:e,chatName:o}),t!=="conversation"?B.createElement(Ki,{onClick:p=>{p.stopPropagation(),re({title:s({id:"chat.leaveChat.confirm.title"}),content:s({id:"chat.leaveChat.confirm.content"}),okText:s({id:"chat.leaveChat.confirm.okButton"}),onOk:()=>n==null?void 0:n()});}},B.createElement(Xi,{isDanger:!0},B.createElement(FormattedMessage,{id:"chat.leaveChat"}))):null)},aC=lB;var mB=e=>B.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 640 512",fill:"currentColor"},e),B.createElement("path",{d:`M224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9
      0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm89.6 256c-28.7 0-42.5
      16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5
      0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6
      38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4
      86.4V464zm224-248h-72v-72c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v72h-72c-8.8 0-16 7.2-16
      16v16c0 8.8 7.2 16 16 16h72v72c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-72h72c8.8 0 16-7.2
      16-16v-16c0-8.8-7.2-16-16-16z`})),lC=mB;var mC=i.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`,dC=i.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 52px;
  padding-left: 20px;
  color: ${({theme:e})=>e.palette.neutral.shade2};
  border-bottom: 1px solid #e3e4e8;
  cursor: pointer;

  &:hover {
    color: ${({theme:e})=>e.palette.neutral.main};
  }
`,pC=i(co).attrs({width:18,height:14})``,cC=i.span`
  padding-left: 8px;
  ${({theme:e})=>e.typography.body};
`,A0=i.div`
  display: flex;
  align-items: center;
  height: 46px;
  padding: 0 24px 0 20px;
  border-bottom: 1px solid #f7f7f8;
`,Cs=i.span`
  padding-left: 12px;
  ${({theme:e})=>e.typography.body};
  color: ${({theme:e})=>e.palette.neutral.main};
`,uC=i(A0)`
  cursor: pointer;
  &:hover {
    background-color: #f7f7f8;
  }
`,fC=i.span`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 20px;
  }
`;var pB=({onClick:e})=>B.createElement(uC,{onClick:e},B.createElement(fC,null,B.createElement(lC,null)),B.createElement(Cs,null,B.createElement(FormattedMessage,{id:"chat.member.addMore"}))),gC=pB;function e1(e){let r=ee({fetcher:ChannelRepository.Membership.getMembers,params:{channelId:e},shouldCall:()=>!!e}),{items:t}=r,o=M(r,["items"]);return d({channelMembers:t},o)}var fB="Anonymous",gB=({channelId:e,hideMembers:t,onEditChatMemberClick:o,onMemberSelect:r})=>{let n=or(e),{channelMembers:a,hasMore:s,loadMore:l}=e1(e),m=c=>{c.stopPropagation(),t==null||t();},p=c=>{var h;let{displayName:g,metadata:f}=(h=c==null?void 0:c.user)!=null?h:{};if(g)return g;let{firstname:C="",lastname:v=""}=f!=null?f:{};return [C,v].filter(Boolean).join(" ").trim()},u=(n==null?void 0:n.type)==="live"||(n==null?void 0:n.type)==="community";return B.createElement(mC,null,B.createElement(dC,{onClick:m},B.createElement(pC,null),B.createElement(cC,null,B.createElement(FormattedMessage,{id:"chat.members.return"}))),a.length>0?B.createElement(_e,{hasMore:s,loadMore:l,contentSlot:B.createElement(B.Fragment,null,a.map(c=>B.createElement(A0,{key:c.userId,onClick:()=>r==null?void 0:r(c)},B.createElement(tr,d({size:ur.SMALL,defaultImage:se},c==null?void 0:c.user)),B.createElement(Cs,null,p(c)||fB))),u?B.createElement(gC,{onClick:()=>o==null?void 0:o({channelId:e,members:a})}):null)}):null)},CC=gB;var hC=i.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 280px;
  height: 100%;
  padding-top: 24px;
  border-left: 1px solid #e3e4e8;
`,yC=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 18px 20px;
  ${({theme:e})=>e.typography.title};
  line-height: 1.75;
  color: ${({theme:e})=>e.palette.neutral.shade1};
`,vC=i(bt).attrs({width:20,height:20})`
  fill: ${({theme:e})=>e.palette.neutral.main};
  cursor: pointer;
`,xC=i.div`
  display: flex;
  padding: 0 24px 25px 20px;
  border-bottom: 1px solid #e3e4e8;
`,MC=i.div`
  margin-left: 12px;
`,bC=i.div`
  padding-bottom: 2px;
  ${({theme:e})=>e.typography.body};
  line-height: 16px;
  color: ${({theme:e})=>e.palette.neutral.main};
`,IC=i.div`
  ${({theme:e})=>e.typography.bodyBold};
  line-height: 24px;
  color: #000000;
`;var hB=({channelId:e,onClose:t,leaveChat:o,onEditChatMemberClick:r,onMemberSelect:n})=>{let a=or(e),{chatName:s,chatAvatar:l,type:m}=$n({channel:a}),[p,u]=useState(!1);return B.createElement(hC,null,B.createElement(yC,null,B.createElement(FormattedMessage,{id:"chat.details.header"}),B.createElement(vC,{onClick:t})),B.createElement(xC,null,B.createElement(tr,{avatarUrl:l,defaultImage:tt}),B.createElement(MC,null,B.createElement(bC,null,B.createElement(FormattedMessage,{id:"chat.details.chatName"})),B.createElement(IC,null,s))),p?B.createElement(CC,{channelId:e,hideMembers:()=>u(!1),onMemberSelect:n,onEditChatMemberClick:({members:c})=>a&&(r==null?void 0:r({channel:a,members:c}))}):B.createElement(aC,{chatType:m,channelId:e,chatName:s,leaveChat:o,memberCount:a==null?void 0:a.memberCount,showMembers:()=>u(!0)}))},PC=e=>{let t=E("ChatDetails");return t?t(e):B.createElement(hB,d({},e))};var SC=i.div`
  display: flex;
  height: 100%;
  width: 100%;
`;var vB=({name:e})=>B.createElement("div",{"data-qa-anchor":`chat-type-selector-item-${e}`},e),xB=({onChange:e,parentContainer:t})=>{let{formatMessage:o}=useIntl(),r=["live","community","conversation","broadcast"].map(n=>({name:o({id:"select.chatType.item"},{answerType:n}),value:n}));return B.createElement(Fg,{"data-qa-anchor":"chat-type",options:r,value:[r[0]],parentContainer:t,renderItem:vB,onSelect:({value:n})=>e(n)})},NC=xB;var wB=({children:e})=>B.createElement(Lg,null,B.createElement(kg,null,e)),PB=({className:e,onCancel:t,onSubmit:o})=>{let{formatMessage:r}=useIntl(),[n,a]=B.useState(!1),s={type:"live",displayName:void 0,avatarFileId:void 0,userIds:[],tags:[]},{register:l,handleSubmit:m,watch:p,control:u,formState:{errors:c,isDirty:g}}=useForm({defaultValues:s}),f=p("userIds"),C=h=>I(void 0,null,function*(){a(!0);try{let x={displayName:h.displayName,type:(h==null?void 0:h.type)||"community",avatarFileId:(h==null?void 0:h.avatarFileId)||void 0,userIds:h==null?void 0:h.userIds,tags:h==null?void 0:h.tags};yield o==null?void 0:o(x);}finally{a(!1);}}),v=!g||f.length===0||n,y=useRef(null);return B.createElement(Dg,null,B.createElement(Og,{className:e,onSubmit:m(C)},B.createElement(zg,{ref:y},B.createElement(wB,null,B.createElement(Qi,null,B.createElement(k0,null,B.createElement(E0,null,B.createElement(gs,null,B.createElement(FormattedMessage,{id:"chatComposer.label.type"})))),B.createElement(Ug,null,B.createElement(Controller,{name:"type",rules:{required:"Channel type is required"},render:T=>{var {field:S}=T,b=S,x=M(b,["ref"]);return B.createElement(NC,d({parentContainer:y.current},x))},control:u,defaultValue:""}))),B.createElement(Qi,null,B.createElement(k0,null,B.createElement(E0,null,B.createElement(gs,null,B.createElement(FormattedMessage,{id:"chatComposer.label.displayName"})))),B.createElement(Ag,w(d({},l("displayName")),{placeholder:r({id:"chat_composer.placeholder.displayName"}),"data-qa-anchor":"chat-composer-display-name-input"})),B.createElement(L0,{errors:c,name:"displayName"})),B.createElement(Qi,null,B.createElement(Controller,{name:"avatarFileId",control:u,render:T=>{var {field:S}=T,b=S,x=M(b,["ref"]);return B.createElement(Zo,d({mimeType:"image/png, image/jpeg"},x))},defaultValue:void 0})),B.createElement(Qi,null,B.createElement(gs,{className:"required"},B.createElement(FormattedMessage,{id:"chatComposer.addUsers"})),B.createElement(Controller,{name:"userIds",render:T=>{var {field:S}=T,b=S,x=M(b,["ref"]);return B.createElement(Xo,w(d({parentContainer:y.current},x),{"data-qa-anchor":"chat-composer-select-user-input"}))},control:u}),B.createElement(L0,{errors:c,name:"userIds"})))),B.createElement(Bg,null,B.createElement(F,{onClick:h=>{h.preventDefault(),t==null||t();}},B.createElement(FormattedMessage,{id:"cancel"})),B.createElement(jg,{"data-qa-anchor":"chat-composer-submit-button",disabled:v},B.createElement(FormattedMessage,{id:"create"})))))},EC=PB;var NB=({onClose:e})=>{let{formatMessage:t}=useIntl(),o=n=>I(void 0,null,function*(){try{yield ChannelRepository.createChannel(n),e();}catch(a){a instanceof Error&&Z.error({content:a.message});}}),r=()=>re({title:t({id:"CommunityCreationModal.title"}),content:t({id:"CommunityCreationModal.content"}),cancelText:t({id:"CommunityCreationModal.cancelText"}),okText:t({id:"CommunityCreationModal.okText"}),onOk:e});return B.createElement(ke,{"data-qa-anchor":"create-chat-modal",title:t({id:"chat_modal.title"}),onCancel:r},B.createElement(EC,{onSubmit:o,onCancel:r}))},LC=NB;i.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;var FC=i.div`
  padding: 20px 16px 16px;
`,AC=i.div``;i(ro)`
  button {
    width: 100%;
  }
`;i.input`
  ${({theme:e})=>e.typography.global};
  border-radius: 4px;
  border: 1px solid #e3e4e8;
  padding: 10px 12px;
  outline: none;
  &:focus-within {
    border-color: ${({theme:e})=>e.palette.primary.main};
  }
`;var DC=i.label`
  ${({theme:e})=>e.typography.bodyBold};
  ${({theme:e})=>`
    &.required {
      &::after {
        color: ${e.palette.alert.main};
        content: ' *';
      }
    }
  `}
`;i.div`
  width: 700px;
  margin-right: 20px;
`;i.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
`;var BC=i.div``,zC=i.div`
  display: flex;
  flex-direction: column;
  ${({horizontal:e})=>e&&"flex-direction: row"};
  ${({separate:e,theme:t})=>e&&`
    border-top: 1px solid ${t.palette.base.shade4};
    padding-top: 20px;
  `};
  margin-bottom: 20px;
`,LB=i.div`
  margin-top: 8px;
  color: ${({theme:e})=>e.palette.alert.main};
  ${({theme:e})=>e.typography.caption}
`,OC=e=>B.createElement(ErrorMessage,d({as:LB},e)),UC=i.div`
  border-top: 1px solid ${({theme:e})=>e.palette.base.shade4};
  padding: ${({edit:e})=>e?"12px 0":"12px 16px"};
  display: flex;
  justify-content: ${({edit:e})=>e?"flex-start":"flex-end"};
`,jC=i.div``,HC=i.form``;i.div`
  width: 100%;
`;var VC=i(Y).attrs({type:"submit"})`
  padding: 10px 16px;
  margin-left: 12px;
  ${({edit:e})=>e&&k`
      min-width: 100px;
      margin-left: 0;
    `};
`;var BB=({children:e})=>B.createElement(AC,null,B.createElement(FC,null,e)),zB=({channelId:e,className:t,memberIds:o,onCancel:r,onSubmit:n})=>{let[a,s]=B.useState(!1),l={userIds:o},{register:m,handleSubmit:p,watch:u,control:c,formState:{errors:g,isDirty:f}}=useForm({defaultValues:l}),C=u("userIds"),v=T=>I(void 0,[T],function*({userIds:x}){s(!0);try{n==null||n(x);let S=o.filter(P=>!x.includes(P)),b=x.filter(P=>!o.includes(P));return Promise.all([b.length>0?ChannelRepository.Membership.addMembers(e,b):null,S.length>0?ChannelRepository.Membership.removeMembers(e,S):null].filter(ue))}catch(S){S instanceof Error&&Z.error({content:S.message});}finally{s(!1);}}),y=!f||C.length===0||a,h=useRef(null);return B.createElement(BC,null,B.createElement(HC,{className:t,onSubmit:p(v)},B.createElement(jC,{ref:h},B.createElement(BB,null,B.createElement(zC,null,B.createElement(DC,{className:"required"},B.createElement(FormattedMessage,{id:"chatComposer.addUsers"})),B.createElement(Controller,{name:"userIds",render:S=>{var {field:b}=S,P=b,T=M(P,["ref"]);return B.createElement(Xo,w(d({parentContainer:h.current},T),{"data-qa-anchor":"edit-chat-members-composer-select-user-input"}))},control:c}),B.createElement(OC,{errors:g,name:"userIds"})))),B.createElement(UC,null,B.createElement(F,{onClick:x=>{x.preventDefault(),r==null||r();},disabled:f},B.createElement(FormattedMessage,{id:"cancel"})),B.createElement(VC,{"data-qa-anchor":"edit-chat-members-composer-submit-button",disabled:y},B.createElement(FormattedMessage,{id:"save"})))))};function z0(e){let m=e,{channelId:t}=m,o=M(m,["channelId"]),{isLoading:r,channelMembers:n,hasMore:a,loadMore:s}=e1(t),l=n.map(p=>p.userId);return r||t==null?null:B.createElement(zB,w(d({},o),{channelId:t,memberIds:l}))}var UB=({channelId:e,onClose:t})=>{let{formatMessage:o}=useIntl(),r=a=>I(void 0,null,function*(){try{t();}catch(s){s instanceof Error&&Z.error({content:s.message});}}),n=()=>re({title:o({id:"editChatMembersModal.confirm.title"}),content:o({id:"editChatMembersModal.confirm.content"}),cancelText:o({id:"editChatMembersModal.confirm.cancelText"}),okText:o({id:"editChatMembersModal.confirm.okText"}),onOk:t});return B.createElement(ke,{"data-qa-anchor":"edit-chat-members-modal",title:o({id:"editChatMembersModal.title"}),onCancel:n},B.createElement(z0,{channelId:e,onSubmit:r,onCancel:n}))},_C=UB;var $B=({membershipFilter:e="all",defaultChannelId:t,onMemberSelect:o,onChannelSelect:r,onAddNewChannel:n,onEditChatMember:a})=>{let{formatMessage:s}=useIntl(),[l,m]=useState(null),[p,u]=useState(!1),c=()=>u(!0),g=()=>u(!1),[f,C]=useState(!1),[v,y]=useState(!1),h=()=>C(!0),x=S=>{(l==null?void 0:l.channelId)!==(S==null?void 0:S.channelId)&&(g(),m(S),r==null||r(S));},T=()=>I(void 0,null,function*(){if(l!=null&&l.channelId)try{yield ChannelRepository.leaveChannel(l.channelId),Z.success({content:s({id:"chat.leaveChat.success"})}),m(null);}catch(S){Z.error({content:s({id:"chat.leaveChat.error"})});}});return useEffect(()=>{function S(){return I(this,null,function*(){return Client.startUnreadSync()})}S();},[]),useEffect(()=>{t&&x({channelId:t,type:"standard"});},[t]),B.createElement(SC,null,B.createElement(Gf,{selectedChannelId:l==null?void 0:l.channelId,membershipFilter:e,onChannelSelect:x,onAddNewChannelClick:()=>{h(),n==null||n();}}),l?B.createElement(Vg,{channelId:l.channelId,shouldShowChatDetails:p,onChatDetailsClick:c}):null,p&&l?B.createElement(PC,{channelId:l.channelId,leaveChat:T,onEditChatMemberClick:S=>{y(!0),a==null||a(S);},onMemberSelect:o,onClose:g}):null,f?B.createElement(LC,{onClose:()=>C(!1)}):null,v&&l?B.createElement(_C,{channelId:l==null?void 0:l.channelId,onClose:()=>y(!1)}):null)},GB=$B;var ZC=(e,t)=>I(void 0,null,function*(){return ChannelRepository.Membership.addMembers(e,t)});var YC=(e,t)=>I(void 0,null,function*(){return ChannelRepository.Membership.removeMembers(e,t)});

export { J as AmityAvatar, el as AmityExpandableText, Pi as AmityPostContainer, sl as AmityPostEngagementBar, GB as AmityUiKitChat, $o as AmityUiKitFeed, mS as AmityUiKitProvider, $A as AmityUiKitSocial, ZC as amityAddChatMembers, YC as amityRemoveChatMembers, O as useAmityNavigation, z1 as useAmitySDK, U as useAmityUser };
