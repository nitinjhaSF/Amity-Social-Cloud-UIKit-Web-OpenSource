import q, { createContext, forwardRef, useState, useRef, memo, useContext, useEffect, useMemo, useCallback, Fragment, useDebugValue, createElement } from 'react';
import { PostContentType, SubscriptionLevels, CommentRepository, PostRepository, CommunityRepository, ChannelRepository, UserRepository, getUserTopic, getCommunityTopic, getCommentTopic, getPostTopic, Client, FileType, CommunityPostSettings, PollRepository, subscribeTopic, ReactionRepository, MessageRepository, FileRepository, StoryRepository, CategoryRepository, getCommunityStoriesTopic, SubChannelRepository, StreamRepository, FeedRepository, getChannelTopic, getMessageTopic } from '@amityco/ts-sdk';
import { FormattedMessage, useIntl, FormattedTime, FormattedDate, IntlProvider } from 'react-intl';
import * as Ht from 'stylis';
import Ck from 'lodash/isEmpty';
import bp from 'millify';
import { Mention, MentionsInput } from 'react-mentions';
import Ln from 'clsx';
import xE from 'react-textarea-autosize';
import qk from 'react-loading-skeleton';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import v6 from 'react-truncate-markup';
import iN from 'linkify-react';
import SN from 'react-timeago';
import { SizeMe } from 'react-sizeme';
import Ls from 'hls.js';
import LA from 'filesize';
import JF from 'lodash/merge';
import { parseToHsl, darken, hslToColorString, lighten } from 'polished';
import { Controller, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { v4 as v4$1 } from 'uuid';
import gz from 'react-infinite-scroll-component';
import { Popover } from 'react-tiny-popover';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Uo from 'zod';
import { z as z$1 } from 'zod';
import MU from 'react-use/lib/useMeasure';
import IU from 'react-use/lib/useScroll';
import { useMedia } from 'react-use';
import $V from 'react-modal-sheet';
import { extractColors } from 'extract-colors';
import GG from 'react-insta-stories';
import { trim } from 'lodash';

var Hw=Object.create;var O1=Object.defineProperty,jw=Object.defineProperties,Vw=Object.getOwnPropertyDescriptor,$w=Object.getOwnPropertyDescriptors,Gw=Object.getOwnPropertyNames,z1=Object.getOwnPropertySymbols,qw=Object.getPrototypeOf,Md=Object.prototype.hasOwnProperty,l3=Object.prototype.propertyIsEnumerable;var s3=(e,t,o)=>t in e?O1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))Md.call(t,o)&&s3(e,o,t[o]);if(z1)for(var o of z1(t))l3.call(t,o)&&s3(e,o,t[o]);return e},T=(e,t)=>jw(e,$w(t));(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,o)=>(typeof require!="undefined"?require:t)[o]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var I=(e,t)=>{var o={};for(var r in e)Md.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&z1)for(var r of z1(e))t.indexOf(r)<0&&l3.call(e,r)&&(o[r]=e[r]);return o};var Ww=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Yw=(e,t)=>{for(var o in t)O1(e,o,{get:t[o],enumerable:!0});},Qw=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Gw(t))!Md.call(e,n)&&n!==o&&O1(e,n,{get:()=>t[n],enumerable:!(r=Vw(t,n))||r.enumerable});return e};var Kw=(e,t,o)=>(o=e!=null?Hw(qw(e)):{},Qw(t||!e||!e.__esModule?O1(o,"default",{value:e,enumerable:!0}):o,e));var w=(e,t,o)=>new Promise((r,n)=>{var s=m=>{try{l(o.next(m));}catch(c){n(c);}},a=m=>{try{l(o.throw(m));}catch(c){n(c);}},l=m=>m.done?r(m.value):Promise.resolve(m.value).then(s,a);l((o=o.apply(e,t)).next());});var v3=Ww((TK,C3)=>{C3.exports=function(t,o,r,n){var s=r?r.call(n,t,o):void 0;if(s!==void 0)return !!s;if(t===o)return !0;if(typeof t!="object"||!t||typeof o!="object"||!o)return !1;var a=Object.keys(t),l=Object.keys(o);if(a.length!==l.length)return !1;for(var m=Object.prototype.hasOwnProperty.bind(o),c=0;c<a.length;c++){var u=a[c];if(!m(u))return !1;var f=t[u],p=o[u];if(s=r?r.call(n,f,p,u):void 0,s===!1||s===void 0&&f!==p)return !1}return !0};});var _1=createContext({client:null,currentUserId:void 0,userRoles:[]});var Li=()=>useContext(_1),H=Li;var m3=createContext({subscribe:({fetcher:e,params:t,callback:o,config:r})=>({unsubscribe:()=>{}})}),wd=()=>useContext(m3);function Sd({children:e}){let t=useRef({}),o=useRef({}),r=useRef({}),{currentUserId:n}=H();function s(l,m){return `${n}.${l}.${JSON.stringify(m)}`}useEffect(()=>()=>{Object.values(o.current).forEach(l=>l());},[]);let a=({fetcher:l,params:m,callback:c,config:u})=>{if(n==null)return {unsubscribe(){}};let f=s(l.name,m);if(t.current[f]&&r.current[f])c==null||c(r.current[f]),t.current[f].push(c);else {t.current[f]=[c];let p=l(m,g=>{r.current[f]=g,(t.current[f]||[]).forEach(v=>v(g));},u);o.current[f]=p;}return {unsubscribe(){let p=t.current[f].find(g=>g===c);p&&(t.current[f]=t.current[f].filter(g=>g!==p));}}};return q.createElement(m3.Provider,{value:{subscribe:a}},e)}var d3=createContext({subscribe:({fetcher:e,params:t,callback:o=()=>{},options:r})=>({unsubscribe:()=>{}})}),Td=()=>useContext(d3);function kd({children:e}){let t=useRef({}),o=useRef({}),r=useRef({}),{currentUserId:n}=H();function s(l,m){return `${n}.${l}.${JSON.stringify(m)}`}useEffect(()=>()=>{Object.values(o.current).forEach(l=>l());},[]);let a=({fetcher:l,params:m,callback:c=()=>{},options:u})=>{if(n==null)return {unsubscribe(){}};let f=s(l.name,m);if(t.current[f])c(r.current[f]),t.current[f].push(c);else {t.current[f]=[c];let p=l(m,g=>{r.current[f]=g,(t.current[f]||[]).forEach(v=>v(g));},u);o.current[f]=p;}return {unsubscribe(){let p=t.current[f].find(g=>g===c);p&&(t.current[f]=t.current[f].filter(g=>g!==p));}}};return q.createElement(d3.Provider,{value:{subscribe:a}},e)}var mS=createContext({fetch:o=>w(void 0,[o],function*({fetchFn:e,params:t}){return yield Promise.resolve({})})});function Ed({children:e}){let t=useRef({}),o=useRef({});function r(s,a){return `${s}.${JSON.stringify(a)}`}let n=({fetchFn:s,params:a})=>{var f;let l=r(s.name,a);if(((f=t.current[l])==null?void 0:f.length)>0){if(o.current[l]!=null)return Promise.resolve(o.current[l]);let p=()=>{},g=()=>{},y=new Promise((v,h)=>{p=v,g=h;});return t.current[l].push({resolve:p,reject:g}),y}let m=()=>{},c=()=>{},u=new Promise((p,g)=>{m=p,c=g;});return t.current[l]=[{resolve:m,reject:c}],s(...a).then(p=>{o.current[l]=p,t.current[l].forEach(({resolve:g})=>g(p));}).catch(p=>{t.current[l].forEach(({reject:g})=>g(p));}).finally(()=>{setTimeout(()=>{o.current[l]=null,t.current[l]=[];},500);}),u};return q.createElement(mS.Provider,{value:{fetch:n}},e)}var u3=createContext({subscribe:({topic:e,callback:t})=>({unsubscribe:()=>{}})}),f3=()=>useContext(u3);function Nd({children:e}){let t=useRef({}),o=useRef({});useEffect(()=>()=>{Object.values(o.current).forEach(n=>n());},[]);let r=({topic:n,callback:s})=>{if(t.current[n])t.current[n].push(s);else {t.current[n]=[s];let a=subscribeTopic(n,(...l)=>{(t.current[n]||[]).forEach(c=>c(...l));});o.current[n]=a;}return {unsubscribe(){let a=t.current[n].find(l=>l===s);a&&(t.current[n]=t.current[n].filter(l=>l!==a));}}};return q.createElement(u3.Provider,{value:{subscribe:r}},e)}function Ld({children:e}){return q.createElement(Sd,null,q.createElement(kd,null,q.createElement(Nd,null,q.createElement(Ed,null,e))))}function vS({fetcher:e,params:t,callback:o=()=>{},options:r,shouldCall:n=()=>!0,getSubscribedTopic:s}){let{subscribe:a}=Td(),[l,m]=useState(null),c=useRef(null),u=useCallback(f=>{n&&!n()||t!=null&&(f.data&&m(f.data),o(f));},[n,o]);return useEffect(()=>(s&&(c.current=subscribeTopic(s())),()=>{var f;(f=c.current)==null||f.call(c);}),[s]),useEffect(()=>{if(t==null||n&&!n())return;let{unsubscribe:f}=a({fetcher:e,params:t,callback:u,options:r});return ()=>{f();}},[t,n]),l}var Fe=vS;function At({fetcher:e,params:t,callback:o=()=>{},options:r,shouldSubscribe:n=()=>!0,getSubscribedTopic:s}){let{subscribe:a}=f3(),l=useRef(null);return Fe({fetcher:e,params:t,callback:m=>{let{error:c,loading:u}=m;if(u)return;if(c)throw c;let{unsubscribe:f}=a({topic:s(m),callback:o});l.current=f;},options:r,shouldCall:n}),useEffect(()=>()=>{var m;(m=l.current)==null||m.call(l);},[l]),{unsubscribe:()=>{var m;return (m=l.current)==null?void 0:m.call(l)}}}function br({userId:e,level:t,shouldSubscribe:o=()=>!0,callback:r}){return At({fetcher:UserRepository.getUser,params:e,callback:r,shouldSubscribe:()=>!!e&&o(),getSubscribedTopic:({data:n})=>getUserTopic(n,t)})}var PS=e=>(br({userId:e,level:SubscriptionLevels.USER}),Fe({fetcher:UserRepository.getUser,params:e,shouldCall:()=>!!e})),j=PS;var st=function(){return st=Object.assign||function(t){for(var o,r=1,n=arguments.length;r<n;r++){o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);}return t},st.apply(this,arguments)};function Kr(e,t,o){if(o||arguments.length===2)for(var r=0,n=t.length,s;r<n;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function y3(e){var t=Object.create(null);return function(o){return t[o]===void 0&&(t[o]=e(o)),t[o]}}var TS=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,h3=y3(function(e){return TS.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});Kw(v3());var kS={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},x3=kS;var Mr=typeof process!="undefined"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",D3="active",W1="data-styled-version",Ai="6.1.8",$d=`/*!sc*/
`,Q1=typeof window!="undefined"&&"HTMLElement"in window,BS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production");var M3=/invalid hook call/i,H1=new Set,FS=function(e,t){if(process.env.NODE_ENV!=="production"){var o=t?' with the id of "'.concat(t,'"'):"",r="The component ".concat(e).concat(o,` has been created dynamically.
`)+`You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,n=console.error;try{var s=!0;console.error=function(a){for(var l=[],m=1;m<arguments.length;m++)l[m-1]=arguments[m];M3.test(a)?(s=!1,H1.delete(r)):n.apply(void 0,Kr([a],l,!1));},useRef(),s&&!H1.has(r)&&(console.warn(r),H1.add(r));}catch(a){M3.test(a.message)&&H1.delete(r);}finally{console.error=n;}}},K1=Object.freeze([]),Bi=Object.freeze({});function DS(e,t,o){return o===void 0&&(o=Bi),e.theme!==o.theme&&e.theme||t||o.theme}var Dd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,OS=/(^-|-$)/g;function I3(e){return e.replace(zS,"-").replace(OS,"")}var _S=/(a)(d)/gi,j1=52,w3=function(e){return String.fromCharCode(e+(e>25?39:97))};function zd(e){var t,o="";for(t=Math.abs(e);t>j1;t=t/j1|0)o=w3(t%j1)+o;return (w3(t%j1)+o).replace(_S,"$1-$2")}var Ad,z3=5381,Hn=function(e,t){for(var o=t.length;o;)e=33*e^t.charCodeAt(--o);return e},O3=function(e){return Hn(z3,e)};function _3(e){return zd(O3(e)>>>0)}function U3(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Bd(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var H3=typeof Symbol=="function"&&Symbol.for,j3=H3?Symbol.for("react.memo"):60115,US=H3?Symbol.for("react.forward_ref"):60112,HS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},V3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},VS=((Ad={})[US]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ad[j3]=V3,Ad);function S3(e){return ("type"in(t=e)&&t.type.$$typeof)===j3?V3:"$$typeof"in e?VS[e.$$typeof]:HS;var t;}var $S=Object.defineProperty,GS=Object.getOwnPropertyNames,P3=Object.getOwnPropertySymbols,qS=Object.getOwnPropertyDescriptor,ZS=Object.getPrototypeOf,T3=Object.prototype;function $3(e,t,o){if(typeof t!="string"){if(T3){var r=ZS(t);r&&r!==T3&&$3(e,r,o);}var n=GS(t);P3&&(n=n.concat(P3(t)));for(var s=S3(e),a=S3(t),l=0;l<n.length;++l){var m=n[l];if(!(m in jS||o&&o[m]||a&&m in a||s&&m in s)){var c=qS(t,m);try{$S(e,m,c);}catch(u){}}}}return e}function Vn(e){return typeof e=="function"}function Gd(e){return typeof e=="object"&&"styledComponentId"in e}function jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ns(e,t){if(e.length===0)return "";for(var o=e[0],r=1;r<e.length;r++)o+=t?t+e[r]:e[r];return o}function Fi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Od(e,t,o){if(o===void 0&&(o=!1),!o&&!Fi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Od(e[r],t[r]);else if(Fi(t))for(var r in t)e[r]=Od(e[r],t[r]);return e}function qd(e,t){Object.defineProperty(e,"toString",{value:t});}var WS=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`,18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function YS(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var o=e[0],r=[],n=1,s=e.length;n<s;n+=1)r.push(e[n]);return r.forEach(function(a){o=o.replace(/%[a-z]/,a);}),o}function Bt(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return process.env.NODE_ENV==="production"?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):"")):new Error(YS.apply(void 0,Kr([WS[e]],t,!1)).trim())}var QS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t;}return e.prototype.indexOfGroup=function(t){for(var o=0,r=0;r<t;r++)o+=this.groupSizes[r];return o},e.prototype.insertRules=function(t,o){if(t>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,s=n;t>=s;)if((s<<=1)<0)throw Bt(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var a=n;a<s;a++)this.groupSizes[a]=0;}for(var l=this.indexOfGroup(t+1),m=(a=0,o.length);a<m;a++)this.tag.insertRule(l,o[a])&&(this.groupSizes[t]++,l++);},e.prototype.clearGroup=function(t){if(t<this.length){var o=this.groupSizes[t],r=this.indexOfGroup(t),n=r+o;this.groupSizes[t]=0;for(var s=r;s<n;s++)this.tag.deleteRule(r);}},e.prototype.getGroup=function(t){var o="";if(t>=this.length||this.groupSizes[t]===0)return o;for(var r=this.groupSizes[t],n=this.indexOfGroup(t),s=n+r,a=n;a<s;a++)o+="".concat(this.tag.getRule(a)).concat($d);return o},e}(),q1=new Map,Y1=new Map,Z1=1,V1=function(e){if(q1.has(e))return q1.get(e);for(;Y1.has(Z1);)Z1++;var t=Z1++;if(process.env.NODE_ENV!=="production"&&((0|t)<0||t>1073741824))throw Bt(16,"".concat(t));return q1.set(e,t),Y1.set(t,e),t},KS=function(e,t){Z1=t+1,q1.set(e,t),Y1.set(t,e);},JS="style[".concat(Mr,"][").concat(W1,'="').concat(Ai,'"]'),XS=new RegExp("^".concat(Mr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),RS=function(e,t,o){for(var r,n=o.split(","),s=0,a=n.length;s<a;s++)(r=n[s])&&e.registerName(t,r);},eP=function(e,t){for(var o,r=((o=t.textContent)!==null&&o!==void 0?o:"").split($d),n=[],s=0,a=r.length;s<a;s++){var l=r[s].trim();if(l){var m=l.match(XS);if(m){var c=0|parseInt(m[1],10),u=m[2];c!==0&&(KS(u,c),RS(e,u,m[3]),e.getTag().insertRules(c,n)),n.length=0;}else n.push(l);}}};function _d(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var G3=function(e){var t=document.head,o=e||t,r=document.createElement("style"),n=function(l){var m=Array.from(l.querySelectorAll("style[".concat(Mr,"]")));return m[m.length-1]}(o),s=n!==void 0?n.nextSibling:null;r.setAttribute(Mr,D3),r.setAttribute(W1,Ai);var a=_d();return a&&r.setAttribute("nonce",a),o.insertBefore(r,s),r},tP=function(){function e(t){this.element=G3(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var r=document.styleSheets,n=0,s=r.length;n<s;n++){var a=r[n];if(a.ownerNode===o)return a}throw Bt(17)}(this.element),this.length=0;}return e.prototype.insertRule=function(t,o){try{return this.sheet.insertRule(o,t),this.length++,!0}catch(r){return !1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--;},e.prototype.getRule=function(t){var o=this.sheet.cssRules[t];return o&&o.cssText?o.cssText:""},e}(),oP=function(){function e(t){this.element=G3(t),this.nodes=this.element.childNodes,this.length=0;}return e.prototype.insertRule=function(t,o){if(t<=this.length&&t>=0){var r=document.createTextNode(o);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return !1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--;},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),rP=function(){function e(t){this.rules=[],this.length=0;}return e.prototype.insertRule=function(t,o){return t<=this.length&&(this.rules.splice(t,0,o),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--;},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),k3=Q1,nP={isServer:!Q1,useCSSOMInjection:!BS},is=function(){function e(t,o,r){t===void 0&&(t=Bi),o===void 0&&(o={});var n=this;this.options=st(st({},nP),t),this.gs=o,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Q1&&k3&&(k3=!1,function(s){for(var a=document.querySelectorAll(JS),l=0,m=a.length;l<m;l++){var c=a[l];c&&c.getAttribute(Mr)!==D3&&(eP(s,c),c.parentNode&&c.parentNode.removeChild(c));}}(this)),qd(this,function(){return function(s){for(var a=s.getTag(),l=a.length,m="",c=function(f){var p=function(C){return Y1.get(C)}(f);if(p===void 0)return "continue";var g=s.names.get(p),y=a.getGroup(f);if(g===void 0||y.length===0)return "continue";var v="".concat(Mr,".g").concat(f,'[id="').concat(p,'"]'),h="";g!==void 0&&g.forEach(function(C){C.length>0&&(h+="".concat(C,","));}),m+="".concat(y).concat(v,'{content:"').concat(h,'"}').concat($d);},u=0;u<l;u++)c(u);return m}(n)});}return e.registerId=function(t){return V1(t)},e.prototype.reconstructWithOptions=function(t,o){return o===void 0&&(o=!0),new e(st(st({},this.options),t),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(o){var r=o.useCSSOMInjection,n=o.target;return o.isServer?new rP(n):r?new tP(n):new oP(n)}(this.options),new QS(t)));var t;},e.prototype.hasNameForId=function(t,o){return this.names.has(t)&&this.names.get(t).has(o)},e.prototype.registerName=function(t,o){if(V1(t),this.names.has(t))this.names.get(t).add(o);else {var r=new Set;r.add(o),this.names.set(t,r);}},e.prototype.insertRules=function(t,o,r){this.registerName(t,o),this.getTag().insertRules(V1(t),r);},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear();},e.prototype.clearRules=function(t){this.getTag().clearGroup(V1(t)),this.clearNames(t);},e.prototype.clearTag=function(){this.tag=void 0;},e}(),iP=/&/g,aP=/^\s*\/\/.*$/gm;function q3(e,t){return e.map(function(o){return o.type==="rule"&&(o.value="".concat(t," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(t," ")),o.props=o.props.map(function(r){return "".concat(t," ").concat(r)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=q3(o.children,t)),o})}function Z3(e){var t,o,r,n=e===void 0?Bi:e,s=n.options,a=s===void 0?Bi:s,l=n.plugins,m=l===void 0?K1:l,c=function(p,g,y){return y.startsWith(o)&&y.endsWith(o)&&y.replaceAll(o,"").length>0?".".concat(t):p},u=m.slice();u.push(function(p){p.type===Ht.RULESET&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(iP,o).replace(r,c));}),a.prefix&&u.push(Ht.prefixer),u.push(Ht.stringify);var f=function(p,g,y,v){g===void 0&&(g=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,o=g,r=new RegExp("\\".concat(o,"\\b"),"g");var h=p.replace(aP,""),C=Ht.compile(y||g?"".concat(y," ").concat(g," { ").concat(h," }"):h);a.namespace&&(C=q3(C,a.namespace));var x=[];return Ht.serialize(C,Ht.middleware(u.concat(Ht.rulesheet(function(M){return x.push(M)})))),x};return f.hash=m.length?m.reduce(function(p,g){return g.name||Bt(15),Hn(p,g.name)},z3).toString():"",f}var sP=new is,Ud=Z3(),Zd=q.createContext({shouldForwardProp:void 0,styleSheet:sP,stylis:Ud});Zd.Consumer;q.createContext(void 0);function Hd(){return useContext(Zd)}var jd=function(){function e(t,o){var r=this;this.inject=function(n,s){s===void 0&&(s=Ud);var a=r.name+s.hash;n.hasNameForId(r.id,a)||n.insertRules(r.id,a,s(r.rules,a,"@keyframes"));},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=o,qd(this,function(){throw Bt(12,String(r.name))});}return e.prototype.getName=function(t){return t===void 0&&(t=Ud),this.name+t.hash},e}(),dP=function(e){return e>="A"&&e<="Z"};function E3(e){for(var t="",o=0;o<e.length;o++){var r=e[o];if(o===1&&r==="-"&&e[0]==="-")return e;dP(r)?t+="-"+r.toLowerCase():t+=r;}return t.startsWith("ms-")?"-"+t:t}var W3=function(e){return e==null||e===!1||e===""},Y3=function(e){var t,o,r=[];for(var n in e){var s=e[n];e.hasOwnProperty(n)&&!W3(s)&&(Array.isArray(s)&&s.isCss||Vn(s)?r.push("".concat(E3(n),":"),s,";"):Fi(s)?r.push.apply(r,Kr(Kr(["".concat(n," {")],Y3(s),!1),["}"],!1)):r.push("".concat(E3(n),": ").concat((t=n,(o=s)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||t in x3||t.startsWith("--")?String(o).trim():"".concat(o,"px")),";")));}return r};function Jr(e,t,o,r){if(W3(e))return [];if(Gd(e))return [".".concat(e.styledComponentId)];if(Vn(e)){if(!Vn(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return [e];var n=e(t);return process.env.NODE_ENV==="production"||typeof n!="object"||Array.isArray(n)||n instanceof jd||Fi(n)||n===null||console.error("".concat(U3(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),Jr(n,t,o,r)}var s;return e instanceof jd?o?(e.inject(o,r),[e.getName(r)]):[e]:Fi(e)?Y3(e):Array.isArray(e)?Array.prototype.concat.apply(K1,e.map(function(a){return Jr(a,t,o,r)})):[e.toString()]}function Q3(e){for(var t=0;t<e.length;t+=1){var o=e[t];if(Vn(o)&&!Gd(o))return !1}return !0}var cP=O3(Ai),pP=function(){function e(t,o,r){this.rules=t,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(r===void 0||r.isStatic)&&Q3(t),this.componentId=o,this.baseHash=Hn(cP,o),this.baseStyle=r,is.registerId(o);}return e.prototype.generateAndInjectStyles=function(t,o,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,o,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))n=jn(n,this.staticRulesId);else {var s=ns(Jr(this.rules,t,o,r)),a=zd(Hn(this.baseHash,s)>>>0);if(!o.hasNameForId(this.componentId,a)){var l=r(s,".".concat(a),void 0,this.componentId);o.insertRules(this.componentId,a,l);}n=jn(n,a),this.staticRulesId=a;}else {for(var m=Hn(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")c+=f,process.env.NODE_ENV!=="production"&&(m=Hn(m,f));else if(f){var p=ns(Jr(f,t,o,r));m=Hn(m,p+u),c+=p;}}if(c){var g=zd(m>>>0);o.hasNameForId(this.componentId,g)||o.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),n=jn(n,g);}}return n},e}(),as=q.createContext(void 0);as.Consumer;function co(){var e=useContext(as);if(!e)throw Bt(18);return e}function K3(e){var t=q.useContext(as),o=useMemo(function(){return function(r,n){if(!r)throw Bt(14);if(Vn(r)){var s=r(n);if(process.env.NODE_ENV!=="production"&&(s===null||Array.isArray(s)||typeof s!="object"))throw Bt(7);return s}if(Array.isArray(r)||typeof r!="object")throw Bt(8);return n?st(st({},n),r):r}(e.theme,t)},[e.theme,t]);return e.children?q.createElement(as.Provider,{value:o},e.children):null}var Fd={},N3=new Set;function uP(e,t,o){var r=Gd(e),n=e,s=!Bd(e),a=t.attrs,l=a===void 0?K1:a,m=t.componentId,c=m===void 0?function(S,b){var P=typeof S!="string"?"sc":I3(S);Fd[P]=(Fd[P]||0)+1;var k="".concat(P,"-").concat(_3(Ai+P+Fd[P]));return b?"".concat(b,"-").concat(k):k}(t.displayName,t.parentComponentId):m,u=t.displayName,f=u===void 0?function(S){return Bd(S)?"styled.".concat(S):"Styled(".concat(U3(S),")")}(e):u,p=t.displayName&&t.componentId?"".concat(I3(t.displayName),"-").concat(t.componentId):t.componentId||c,g=r&&n.attrs?n.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&n.shouldForwardProp){var v=n.shouldForwardProp;if(t.shouldForwardProp){var h=t.shouldForwardProp;y=function(S,b){return v(S,b)&&h(S,b)};}else y=v;}var C=new pP(o,p,r?n.componentStyle:void 0);function x(S,b){return function(P,k,A){var L=P.attrs,O=P.componentStyle,Y=P.defaultProps,B=P.foldedComponentIds,E=P.styledComponentId,G=P.target,F=q.useContext(as),ee=Hd(),se=P.shouldForwardProp||ee.shouldForwardProp;process.env.NODE_ENV!=="production"&&useDebugValue(E);var ie=DS(k,F,Y)||Bi,D=function(fe,Ae,Ve){for(var Ee,Ie=st(st({},Ae),{className:void 0,theme:Ve}),Nt=0;Nt<fe.length;Nt+=1){var Lt=Vn(Ee=fe[Nt])?Ee(Ie):Ee;for(var we in Lt)Ie[we]=we==="className"?jn(Ie[we],Lt[we]):we==="style"?st(st({},Ie[we]),Lt[we]):Lt[we];}return Ae.className&&(Ie.className=jn(Ie.className,Ae.className)),Ie}(L,k,ie),U=D.as||G,ne={};for(var ue in D)D[ue]===void 0||ue[0]==="$"||ue==="as"||ue==="theme"&&D.theme===ie||(ue==="forwardedAs"?ne.as=D.forwardedAs:se&&!se(ue,U)||(ne[ue]=D[ue],se||process.env.NODE_ENV!=="development"||h3(ue)||N3.has(ue)||!Dd.has(U)||(N3.add(ue),console.warn('styled-components: it looks like an unknown prop "'.concat(ue,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var Me=function(fe,Ae){var Ve=Hd(),Ee=fe.generateAndInjectStyles(Ae,Ve.styleSheet,Ve.stylis);return process.env.NODE_ENV!=="production"&&useDebugValue(Ee),Ee}(O,D);process.env.NODE_ENV!=="production"&&P.warnTooManyClasses&&P.warnTooManyClasses(Me);var Ce=jn(B,E);return Me&&(Ce+=" "+Me),D.className&&(Ce+=" "+D.className),ne[Bd(U)&&!Dd.has(U)?"class":"className"]=Ce,ne.ref=A,createElement(U,ne)}(M,S,b)}x.displayName=f;var M=q.forwardRef(x);return M.attrs=g,M.componentStyle=C,M.displayName=f,M.shouldForwardProp=y,M.foldedComponentIds=r?jn(n.foldedComponentIds,n.styledComponentId):"",M.styledComponentId=p,M.target=r?n.target:e,Object.defineProperty(M,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(b){for(var P=[],k=1;k<arguments.length;k++)P[k-1]=arguments[k];for(var A=0,L=P;A<L.length;A++)Od(b,L[A],!0);return b}({},n.defaultProps,S):S;}}),process.env.NODE_ENV!=="production"&&(FS(f,p),M.warnTooManyClasses=function(S,b){var P={},k=!1;return function(A){if(!k&&(P[A]=!0,Object.keys(P).length>=200)){var L=b?' with the id of "'.concat(b,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(S).concat(L,`.
`)+`Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),k=!0,P={};}}}(f,p)),qd(M,function(){return ".".concat(M.styledComponentId)}),s&&$3(M,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),M}function L3(e,t){for(var o=[e[0]],r=0,n=t.length;r<n;r+=1)o.push(t[r],e[r+1]);return o}var A3=function(e){return Object.assign(e,{isCss:!0})};function z(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];if(Vn(e)||Fi(e))return A3(Jr(L3(K1,Kr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Jr(r):A3(Jr(L3(r,t)))}function Vd(e,t,o){if(o===void 0&&(o=Bi),!t)throw Bt(1,t);var r=function(n){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return e(t,o,z.apply(void 0,Kr([n],s,!1)))};return r.attrs=function(n){return Vd(e,t,st(st({},o),{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return Vd(e,t,st(st({},o),n))},r}var J3=function(e){return Vd(uP,e)},i=J3;Dd.forEach(function(e){i[e]=J3(e);});function Xr(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];process.env.NODE_ENV!=="production"&&typeof navigator!="undefined"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");var r=ns(z.apply(void 0,Kr([e],t,!1))),n=_3(r);return new jd(n,r)}process.env.NODE_ENV!=="production"&&typeof navigator!="undefined"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);var $1="__sc-".concat(Mr,"__");process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window!="undefined"&&(window[$1]||(window[$1]=0),window[$1]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window[$1]+=1);var Wd=({theme:e})=>z`
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
`,X3=i.button`
  ${Wd};
  background-color: #fff;
  border: 1px solid #e3e4e8;
  color: ${({theme:e})=>e.palette.neutral.main};
  &:hover {
    color: ${({theme:e})=>e.palette.neutral.shade1};
  }
  &:disabled {
    color: ${({theme:e})=>e.palette.neutral.shade2};
  }
`,oe=i.button`
  ${Wd};
  border: none;
  background-color: ${({theme:e})=>e.palette.primary.main};
  color: white;
  &:hover:not(:disabled) {
    opacity: 0.8;
  }
  &:disabled {
    background-color: ${({theme:e})=>e.palette.primary.shade2};
  }
`,K=i.button`
  ${Wd};
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
`;var gP=r=>{var n=r,{variant:e,fullWidth:t=!1}=n,o=I(n,["variant","fullWidth"]);switch(e){case"primary":return q.createElement(oe,T(d({},o),{fullWidth:t}));case"secondary":return q.createElement(K,T(d({},o),{fullWidth:t}));default:return q.createElement(X3,T(d({},o),{fullWidth:t}))}},$=gP;var r0={};Yw(r0,{AddIcon:()=>qn,ArrowLeft:()=>ss,ArrowLeftCircle:()=>Oi,ArrowLeftCircle2:()=>ul,ArrowLeftIcon:()=>ss,ArrowRight:()=>ls,ArrowRight2Icon:()=>G4,ArrowRightCircle:()=>fl,ArrowRightIcon:()=>ls,AudioFile:()=>Vi,AviFile:()=>xl,Balloon:()=>p5,BarsIcon:()=>en,Camera:()=>_l,Category:()=>R3,Check:()=>Ol,ChevronDown:()=>po,ChevronLeft:()=>Ro,ChevronRight:()=>nn,CircleRemove:()=>ml,Close:()=>Qe,CloseIcon:()=>Qe,Comment:()=>$n,Comment2Icon:()=>V4,CommentIcon:()=>$n,Community:()=>e4,CommunityAlt:()=>t4,CommunityCoverPicture:()=>C4,CreateChat:()=>Ul,CsvFile:()=>bl,DefaultFile:()=>Ml,DocFile:()=>Il,Dots:()=>f5,DotsIcon:()=>oo,EllipsisH:()=>oo,EllipsisV:()=>Hl,EmptyFeed:()=>Rr,EmptyImageGallery:()=>R1,EmptyLivestreamGallery:()=>el,EmptyVideoGallery:()=>tl,ErrorIcon:()=>zi,ExclamationCircle:()=>uo,ExeFile:()=>wl,ExpandIcon:()=>N4,EyeIcon:()=>_i,File:()=>ae,FileAttachment:()=>Gi,FireIcon:()=>Hi,FlagIcon:()=>yl,Globe:()=>jl,HeartIcon:()=>ji,HtmlFile:()=>Sl,ImageAttachment:()=>$i,ImgFile:()=>Yn,LikeIcon:()=>Ir,LikedIcon:()=>Ui,LinkIcon:()=>pl,LivestreamCover:()=>y4,Lock:()=>er,Lock2Icon:()=>gl,MagicWand:()=>il,MentionIcon:()=>Cl,Message:()=>D5,Minus:()=>sl,MinusCircle:()=>an,ModeratorBadgeIcon:()=>W4,MovFile:()=>Tl,Mp3File:()=>kl,Mp4File:()=>El,MpegFile:()=>ms,MuteCircle:()=>dl,Newspaper:()=>Vl,NewspaperLight:()=>$l,PauseIcon:()=>Di,PdfFile:()=>Nl,Pencil:()=>tn,Pencil2Icon:()=>hl,Pending:()=>nl,Play:()=>Po,PlayCircle:()=>al,PlayIcon:()=>Po,Plus:()=>jt,Poll:()=>ll,PptFile:()=>ds,PpxFile:()=>Ll,RarFile:()=>Al,Remove:()=>mt,Reply:()=>on,Save:()=>Gl,Search:()=>rn,SendMessage:()=>Dl,Shield:()=>zl,Sky:()=>c5,SortDown:()=>ql,Tab:()=>ol,ThumbsUp:()=>Ir,Trash:()=>Gn,Trash2Icon:()=>Xo,TrashIcon:()=>Gn,TxtFile:()=>Bl,UnknownPost:()=>rl,UnmuteCircle:()=>cl,User:()=>o4,Verified:()=>To,VerifiedIcon:()=>To,VideoAttachment:()=>g4,XlsFile:()=>ps,ZipFile:()=>Fl});var yP=e=>q.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("rect",{width:"40",height:"40",rx:"20",fill:"#D9E5FC"}),q.createElement("path",{d:"M28 21C28 20.4688 27.5312 20 27 20H22C21.4375 20 21 20.4688 21 21V26C21 26.5625 21.4375 27 22 27H27C27.5312 27 28 26.5625 28 26V21ZM14 19C11.7812 19 10 20.8125 10 23C10 25.2188 11.7812 27 14 27C16.1875 27 18 25.2188 18 23C18 20.8125 16.1875 19 14 19ZM26.9688 17C27.75 17 28.25 16.1875 27.8438 15.5L24.875 10.5C24.4688 9.84375 23.5 9.84375 23.0938 10.5L20.125 15.5C19.7188 16.1875 20.2188 17 21 17H26.9688Z",fill:"white"})),R3=yP,J1=`url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='20' fill='%23D9E5FC'/%3E%3Cpath d='M28 21C28 20.4688 27.5312 20 27 20H22C21.4375 20 21 20.4688 21 21V26C21 26.5625 21.4375 27 22 27H27C27.5312 27 28 26.5625 28 26V21ZM14 19C11.7812 19 10 20.8125 10 23C10 25.2188 11.7812 27 14 27C16.1875 27 18 25.2188 18 23C18 20.8125 16.1875 19 14 19ZM26.9688 17C27.75 17 28.25 16.1875 27.8438 15.5L24.875 10.5C24.4688 9.84375 23.5 9.84375 23.0938 10.5L20.125 15.5C19.7188 16.1875 20.2188 17 21 17H26.9688Z' fill='white'/%3E%3C/svg%3E%0A");`;var hP=e=>q.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("rect",{width:"40",height:"40",rx:"20",fill:"#D9E5FC"}),q.createElement("path",{d:"M19.8462 12C20.7625 12 21.6413 12.356 22.2893 12.9898C22.9373 13.6235 23.3013 14.4831 23.3013 15.3793C23.3013 16.2756 22.9373 17.1351 22.2893 17.7688C21.6413 18.4026 20.7625 18.7586 19.8462 18.7586C18.9298 18.7586 18.051 18.4026 17.403 17.7688C16.755 17.1351 16.391 16.2756 16.391 15.3793C16.391 14.4831 16.755 13.6235 17.403 12.9898C18.051 12.356 18.9298 12 19.8462 12ZM12.9359 14.4138C13.4887 14.4138 14.0021 14.5586 14.4463 14.8193C14.2982 16.2 14.7128 17.571 15.5618 18.6428C15.0682 19.5697 14.081 20.2069 12.9359 20.2069C12.1504 20.2069 11.3972 19.9017 10.8418 19.3585C10.2864 18.8153 9.97436 18.0786 9.97436 17.3103C9.97436 16.5421 10.2864 15.8054 10.8418 15.2622C11.3972 14.719 12.1504 14.4138 12.9359 14.4138ZM26.7564 14.4138C27.5419 14.4138 28.2951 14.719 28.8505 15.2622C29.4059 15.8054 29.7179 16.5421 29.7179 17.3103C29.7179 18.0786 29.4059 18.8153 28.8505 19.3585C28.2951 19.9017 27.5419 20.2069 26.7564 20.2069C25.6113 20.2069 24.6241 19.5697 24.1305 18.6428C24.9795 17.571 25.3941 16.2 25.246 14.8193C25.6903 14.5586 26.2036 14.4138 26.7564 14.4138ZM13.4295 24.3103C13.4295 22.3117 16.3022 20.6897 19.8462 20.6897C23.3901 20.6897 26.2628 22.3117 26.2628 24.3103V26H13.4295V24.3103ZM8 26V24.5517C8 23.2097 9.86577 22.08 12.3929 21.7517C11.8105 22.4083 11.4551 23.3159 11.4551 24.3103V26H8ZM31.6923 26H28.2372V24.3103C28.2372 23.3159 27.8818 22.4083 27.2994 21.7517C29.8265 22.08 31.6923 23.2097 31.6923 24.5517V26Z",fill:"white"})),e4=hP,lt=`url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='20' fill='%23D9E5FC'/%3E%3Cpath d='M19.8462 12C20.7625 12 21.6413 12.356 22.2893 12.9898C22.9373 13.6235 23.3013 14.4831 23.3013 15.3793C23.3013 16.2756 22.9373 17.1351 22.2893 17.7688C21.6413 18.4026 20.7625 18.7586 19.8462 18.7586C18.9298 18.7586 18.051 18.4026 17.403 17.7688C16.755 17.1351 16.391 16.2756 16.391 15.3793C16.391 14.4831 16.755 13.6235 17.403 12.9898C18.051 12.356 18.9298 12 19.8462 12ZM12.9359 14.4138C13.4887 14.4138 14.0021 14.5586 14.4463 14.8193C14.2982 16.2 14.7128 17.571 15.5618 18.6428C15.0682 19.5697 14.081 20.2069 12.9359 20.2069C12.1504 20.2069 11.3972 19.9017 10.8418 19.3585C10.2864 18.8153 9.97436 18.0786 9.97436 17.3103C9.97436 16.5421 10.2864 15.8054 10.8418 15.2622C11.3972 14.719 12.1504 14.4138 12.9359 14.4138ZM26.7564 14.4138C27.5419 14.4138 28.2951 14.719 28.8505 15.2622C29.4059 15.8054 29.7179 16.5421 29.7179 17.3103C29.7179 18.0786 29.4059 18.8153 28.8505 19.3585C28.2951 19.9017 27.5419 20.2069 26.7564 20.2069C25.6113 20.2069 24.6241 19.5697 24.1305 18.6428C24.9795 17.571 25.3941 16.2 25.246 14.8193C25.6903 14.5586 26.2036 14.4138 26.7564 14.4138ZM13.4295 24.3103C13.4295 22.3117 16.3022 20.6897 19.8462 20.6897C23.3901 20.6897 26.2628 22.3117 26.2628 24.3103V26H13.4295V24.3103ZM8 26V24.5517C8 23.2097 9.86577 22.08 12.3929 21.7517C11.8105 22.4083 11.4551 23.3159 11.4551 24.3103V26H8ZM31.6923 26H28.2372V24.3103C28.2372 23.3159 27.8818 22.4083 27.2994 21.7517C29.8265 22.08 31.6923 23.2097 31.6923 24.5517V26Z' fill='white'/%3E%3C/svg%3E%0A");`;var CP=e=>q.createElement("svg",d({width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("circle",{cx:"7.82443",cy:"18.04",r:"2.48767",fill:"#1054DE"}),q.createElement("circle",{r:"2.48767",transform:"matrix(-1 0 0 1 22.4188 18.04)",fill:"#1054DE"}),q.createElement("path",{d:"M7.82334 21.5221C5.35031 21.5221 3.34553 23.5269 3.34553 25.9999H8.90133C8.90133 24.2088 9.45415 22.5787 9.81348 21.9876C9.21397 21.6896 8.53822 21.5221 7.82334 21.5221Z",fill:"#1054DE"}),q.createElement("path",{d:"M22.4183 21.5221C24.8914 21.5221 26.8961 23.5269 26.8961 25.9999H21.3403C21.3403 24.2088 20.7875 22.5787 20.4282 21.9875C21.0277 21.6896 21.7034 21.5221 22.4183 21.5221Z",fill:"#1054DE"}),q.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.1099 20.4352C18.1087 19.7843 18.7689 18.6574 18.7689 17.3764C18.7689 15.3613 17.1354 13.7278 15.1203 13.7278C13.1052 13.7278 11.4717 15.3613 11.4717 17.3764C11.4717 18.7266 12.2052 19.9056 13.2955 20.5365V20.9179C11.4476 21.708 10.1452 23.6116 10.1452 25.8344H20.2617C20.2617 23.611 18.9586 21.707 17.1099 20.9172V20.4352ZM17.2773 17.3765C17.2773 18.5672 16.3121 19.5325 15.1214 19.5325C13.9306 19.5325 12.9654 18.5672 12.9654 17.3765C12.9654 16.9838 13.0704 16.6156 13.2538 16.2985C13.6828 16.879 15.0882 17.9072 17.2773 17.3765Z",fill:"#1054DE"}),q.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.8429 8.62622C15.3935 8.62622 15.8398 9.07253 15.8398 9.62308V11.9686C15.8398 12.5192 15.3935 12.9655 14.8429 12.9655C14.2924 12.9655 13.8461 12.5192 13.8461 11.9686V9.62308C13.8461 9.07253 14.2924 8.62622 14.8429 8.62622Z",fill:"#1054DE"}),q.createElement("path",{d:"M3.73594 7.50087C4.05829 8.13364 4.9647 8.1268 5.27746 7.48924V7.48924C5.52678 6.98102 5.93601 6.56868 6.44232 6.31553L6.48079 6.29629C7.1152 5.97909 7.10843 5.07141 6.46935 4.7637V4.7637C5.94653 4.51198 5.52471 4.09015 5.27298 3.56733V3.56733C4.96528 2.92826 4.0576 2.92148 3.74039 3.55589L3.72116 3.59436C3.468 4.10068 3.05566 4.5099 2.54745 4.75922V4.75922C1.90989 5.07198 1.90304 5.97839 2.53581 6.30074L2.56702 6.31664C3.06349 6.56956 3.46712 6.97319 3.72004 7.46966L3.73594 7.50087Z",fill:"#1054DE"}),q.createElement("path",{d:"M14.2909 6.58406C14.5595 7.11136 15.3149 7.10566 15.5755 6.57436V6.57436C15.7832 6.15085 16.1243 5.80723 16.5462 5.59627L16.5783 5.58024C17.1069 5.3159 17.1013 4.5595 16.5687 4.30309V4.30309C16.133 4.09331 15.7815 3.74179 15.5717 3.30611V3.30611C15.3153 2.77355 14.5589 2.7679 14.2946 3.29658L14.2786 3.32864C14.0676 3.75056 13.724 4.09159 13.3005 4.29935V4.29935C12.7692 4.55998 12.7635 5.31532 13.2908 5.58395L13.3168 5.5972C13.7305 5.80797 14.0669 6.14432 14.2776 6.55805L14.2909 6.58406Z",fill:"#1054DE"}),q.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.27084 7.81208C7.62329 7.38913 8.25188 7.33199 8.67483 7.68445C9.9614 8.75659 10.6121 9.63667 11.798 11.4156C12.1034 11.8737 11.9797 12.4927 11.5216 12.798C11.0635 13.1034 10.4446 12.9797 10.1392 12.5216C8.97958 10.7822 8.45747 10.0986 7.39847 9.21607C6.97553 8.86362 6.91838 8.23503 7.27084 7.81208Z",fill:"#1054DE"}),q.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.2895 7.81208C21.937 7.38913 21.3084 7.33199 20.8855 7.68445C19.5989 8.75659 18.9483 9.63667 17.7623 11.4156C17.4569 11.8737 17.5807 12.4927 18.0388 12.798C18.4969 13.1034 19.1158 12.9797 19.4212 12.5216C20.5807 10.7822 21.1029 10.0986 22.1619 9.21607C22.5848 8.86362 22.6419 8.23503 22.2895 7.81208Z",fill:"#1054DE"})),t4=CP;var vP=e=>q.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("rect",{width:"40",height:"40",rx:"20",fill:"#D9E5FC"}),q.createElement("path",{d:"M23.1255 13.1312C22.385 12.4069 21.3806 12 20.3333 12C19.2861 12 18.2817 12.4069 17.5412 13.1312C16.8006 13.8555 16.3846 14.8378 16.3846 15.8621C16.3846 16.8864 16.8006 17.8687 17.5412 18.593C18.2817 19.3172 19.2861 19.7241 20.3333 19.7241C21.3806 19.7241 22.385 19.3172 23.1255 18.593C23.866 17.8687 24.2821 16.8864 24.2821 15.8621C24.2821 14.8378 23.866 13.8555 23.1255 13.1312Z",fill:"white"}),q.createElement("path",{d:"M20.3333 21.931C16.2831 21.931 13 23.7848 13 26.069V28H27.6667V26.069C27.6667 23.7848 24.3836 21.931 20.3333 21.931Z",fill:"white"})),o4=vP,ce=`url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='20' fill='%23D9E5FC'/%3E%3Cpath d='M23.1255 13.1312C22.385 12.4069 21.3806 12 20.3333 12C19.2861 12 18.2817 12.4069 17.5412 13.1312C16.8006 13.8555 16.3846 14.8378 16.3846 15.8621C16.3846 16.8864 16.8006 17.8687 17.5412 18.593C18.2817 19.3172 19.2861 19.7241 20.3333 19.7241C21.3806 19.7241 22.385 19.3172 23.1255 18.593C23.866 17.8687 24.2821 16.8864 24.2821 15.8621C24.2821 14.8378 23.866 13.8555 23.1255 13.1312Z' fill='white'/%3E%3Cpath d='M20.3333 21.931C16.2831 21.931 13 23.7848 13 26.069V28H27.6667V26.069C27.6667 23.7848 24.3836 21.931 20.3333 21.931Z' fill='white'/%3E%3C/svg%3E");`;var xP=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 448 512"},e),q.createElement("path",{fill:"currentColor",d:`M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627
      0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686
      4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515
      247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284
      4.686 16.971-.001z`})),ss=xP;var bP=e=>q.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 8 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:"M1.46094 6.33203C1.63281 6.33203 1.77344 6.26172 1.97656 6.16406L6.82422 3.82812C7.18359 3.65234 7.33594 3.45312 7.33594 3.18359C7.33594 2.91406 7.18359 2.71484 6.82422 2.53906L1.97656 0.203125C1.77344 0.105469 1.62891 0.0351562 1.45703 0.0351562C1.12109 0.0351562 0.863281 0.292969 0.863281 0.714844L0.867188 5.65625C0.867188 6.07422 1.125 6.33203 1.46094 6.33203Z",fill:"#636878"})),ls=bP;var MP=o=>{var r=o,{color:e="#A5A9B5"}=r,t=I(r,["color"]);return q.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),q.createElement("path",{d:"M39.5107 25.2362C38.8869 25.2362 38.2747 25.3041 37.6818 25.4335C39.2923 23.0401 40.2282 20.2639 40.3918 17.3437H40.9769C41.4947 17.3437 41.9144 16.9239 41.9144 16.4062C41.9144 15.8884 41.4947 15.4687 40.9769 15.4687H40.3906C39.8967 6.85584 32.7344 0 24 0C15.2657 0 8.10337 6.85584 7.60959 15.4687H7.02319C6.50541 15.4687 6.08569 15.8884 6.08569 16.4062C6.08569 16.9239 6.50541 17.3437 7.02319 17.3437H7.60819C7.83019 21.3069 9.47447 25.0053 12.2966 27.8409L18.5743 34.1488V40.8825C17.1898 39.7625 15.4512 39.1327 13.6085 39.1327C11.1596 39.1327 8.89809 40.2416 7.40456 42.1379C6.75394 41.8646 6.05334 41.7226 5.33981 41.7226C2.39541 41.7227 0 44.1181 0 47.0625C0 47.5802 0.419719 48 0.9375 48H26.7872C28.2551 48 29.4494 46.8058 29.4494 45.3378V34.6875H33.7843C34.3021 34.6875 34.7218 34.2677 34.7218 33.75C34.7218 33.2323 34.3021 32.8125 33.7843 32.8125H26.8347C27.2541 31.151 28.7614 29.9174 30.5513 29.9174C31.2803 29.9174 31.9902 30.1238 32.6043 30.5145C32.8151 30.6486 33.0706 30.6929 33.3142 30.6379C33.5579 30.5827 33.7694 30.4328 33.9021 30.2212C35.1218 28.2738 37.2186 27.1112 39.5108 27.1112C42.8483 27.1112 45.6163 29.5958 46.0623 32.8125H42.2219C41.7041 32.8125 41.2844 33.2323 41.2844 33.75C41.2844 34.2677 41.7041 34.6875 42.2219 34.6875H47.0619C47.5728 34.6875 47.9887 34.2787 47.9993 33.7697C47.9997 33.7551 48.0001 33.7403 48.0001 33.7254C48 29.0445 44.1917 25.2362 39.5107 25.2362ZM24.8224 32.8125H23.1776L21.2122 26.8848C20.6679 25.2436 20.2627 23.2201 20.0246 21.0234C21.093 21.9445 22.482 22.5035 24 22.5035C25.518 22.5035 26.907 21.9446 27.9754 21.0234C27.7372 23.22 27.332 25.2435 26.7878 26.8848L24.8224 32.8125ZM24 1.875C24.6738 1.875 25.8003 2.89453 26.7577 5.76816C27.6264 8.37581 28.1352 11.791 28.2102 15.4687H19.79C19.8649 11.7909 20.3738 8.37581 21.2425 5.76806C22.1997 2.89463 23.3262 1.875 24 1.875ZM28.116 17.3437C27.6883 19.2219 26.0059 20.6284 24 20.6284C21.9941 20.6284 20.3117 19.2219 19.884 17.3437H28.116ZM38.5117 15.4687H30.0854C30.009 11.5909 29.466 7.96575 28.5365 5.17547C28.1202 3.92606 27.6695 2.96681 27.2081 2.23219C33.39 3.62953 38.091 8.97506 38.5117 15.4687ZM38.4354 17.3437C38.0078 19.2219 36.3253 20.6284 34.3194 20.6284C32.3136 20.6284 30.6311 19.2219 30.2034 17.3437H38.4354ZM20.7919 2.23228C20.3304 2.96691 19.8798 3.92616 19.4635 5.17556C18.534 7.96575 17.991 11.591 17.9146 15.4688H9.48825C9.909 8.97506 14.61 3.62953 20.7919 2.23228ZM17.7966 17.3437C17.3689 19.2219 15.6864 20.6284 13.6806 20.6284C11.6747 20.6284 9.99225 19.2219 9.56456 17.3437H17.7966ZM10.3957 21.5388C11.3445 22.1482 12.4716 22.5034 13.6806 22.5034C15.4158 22.5034 16.9827 21.7735 18.0941 20.6063C18.3314 23.1704 18.7869 25.5278 19.4325 27.4748L21.2022 32.8125H19.8896L13.6257 26.5184C12.1913 25.0772 11.1009 23.3838 10.3957 21.5388ZM5.33981 43.5977C5.99878 43.5977 6.6405 43.7843 7.19569 44.1375C7.40644 44.2716 7.662 44.316 7.90556 44.2609C8.14922 44.2057 8.36072 44.0557 8.49337 43.8442C9.60572 42.0681 11.5179 41.0077 13.6085 41.0077C15.6067 41.0077 17.445 41.9782 18.5743 43.6152V45.3379C18.5743 45.6118 18.6159 45.8762 18.6932 46.1251H2.00391C2.41369 44.6685 3.75403 43.5977 5.33981 43.5977ZM27.5744 45.3378C27.5744 45.7718 27.2213 46.125 26.7872 46.125H21.2366C20.8026 46.125 20.4494 45.7718 20.4494 45.3378V40.5H27.5744V45.3378ZM27.5744 34.6875V38.625H20.4494V34.6875H27.5744ZM28.2125 28.5457L28.5675 27.4748C29.2131 25.5278 29.6685 23.1704 29.9059 20.6063C31.0173 21.7736 32.5842 22.5034 34.3194 22.5034C35.5285 22.5034 36.6555 22.1482 37.6043 21.5388C36.899 23.3837 35.8087 25.0771 34.3743 26.5184L32.5115 28.3901C31.887 28.1615 31.2246 28.0423 30.5513 28.0423C29.7181 28.0424 28.9268 28.2233 28.2125 28.5457Z",fill:e}))},Rr=MP;var IP=e=>q.createElement("svg",d({width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:"M16.125 20C17.9531 20 19.5 18.5234 19.5 16.625C19.5 14.7969 17.9531 13.25 16.125 13.25C14.2266 13.25 12.75 14.7969 12.75 16.625C12.75 18.5234 14.2266 20 16.125 20ZM16.125 15.5C16.6875 15.5 17.25 16.0625 17.25 16.625C17.25 17.2578 16.6875 17.75 16.125 17.75C15.4922 17.75 15 17.2578 15 16.625C15 16.0625 15.4922 15.5 16.125 15.5ZM37.5 8.75H10.5C9.23438 8.75 8.25 9.80469 8.25 11V38C8.25 39.2656 9.23438 40.25 10.5 40.25H37.5C38.6953 40.25 39.75 39.2656 39.75 38V11C39.75 9.80469 38.6953 8.75 37.5 8.75ZM37.5 38H10.5V32.375H37.5V38ZM14.2266 30.125L17.8828 25.2734L20.6953 29L19.8516 30.125H14.2266ZM22.6641 30.125L28.0078 23.0234L33.3516 30.125H22.6641ZM37.5 30.125H36.1641L28.9219 20.4922C28.4297 19.9297 27.5156 19.9297 27.0938 20.4922L22.1016 27.1719L18.7969 22.7422C18.3047 22.1797 17.3906 22.1797 16.9688 22.7422L11.4141 30.125H10.5V11H37.5V30.125Z"})),R1=IP;var wP=e=>q.createElement("svg",d({width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:"M10.5 11.9844L9.72656 11.2109C9.65625 11.0703 9.44531 11 9.30469 11C9.16406 11 9.02344 11.0703 8.88281 11.2109C5.57812 14.7969 3.75 19.5078 3.75 24.5C3.75 29.4922 5.57812 34.2031 8.88281 37.8594C9.02344 38 9.16406 38.0703 9.30469 38.0703C9.44531 38.0703 9.65625 38 9.72656 37.8594L10.5 37.0859C10.6406 36.9453 10.7109 36.8047 10.7109 36.6641C10.7109 36.5234 10.6406 36.3828 10.5 36.2422C7.61719 33.0781 6 28.9297 6 24.5C6 20.1406 7.61719 15.9922 10.5 12.8281C10.6406 12.6875 10.7109 12.5469 10.7109 12.4062C10.7109 12.2656 10.6406 12.125 10.5 11.9844ZM16.4062 16.8359L15.6328 16.0625C15.4922 15.9219 15.3516 15.9219 15.2109 15.9219C15.0703 15.9219 14.9297 15.9219 14.7891 16.0625C12.8203 18.3125 11.625 21.2656 11.625 24.5C11.625 27.8047 12.8203 30.7578 14.7891 33.0078C14.9297 33.0781 15.0703 33.1484 15.2109 33.1484C15.3516 33.1484 15.4922 33.1484 15.6328 33.0078L16.4062 32.1641C16.5469 32.0938 16.6172 31.9531 16.6172 31.8125C16.6172 31.6719 16.5469 31.5312 16.4062 31.3906C14.7891 29.5625 13.875 27.1719 13.875 24.5703C13.875 21.8984 14.7891 19.5078 16.4062 17.6797C16.5469 17.5391 16.5469 17.3984 16.5469 17.2578C16.5469 17.1172 16.5469 16.9766 16.4062 16.8359ZM39.0469 11.2109C38.9062 11.0703 38.7656 11 38.625 11C38.4844 11 38.2734 11.0703 38.2031 11.2109L37.4297 11.9844C37.2891 12.125 37.2188 12.2656 37.2188 12.4062C37.2188 12.5469 37.2891 12.6875 37.4297 12.8281C40.3828 15.9922 42 20.1406 42 24.5C42 28.9297 40.3828 33.0781 37.4297 36.2422C37.2891 36.3828 37.2188 36.5234 37.2188 36.6641C37.2188 36.8047 37.2891 36.9453 37.4297 37.0859L38.2031 37.8594C38.2734 38 38.4844 38.0703 38.625 38.0703C38.7656 38.0703 38.9062 38 39.0469 37.8594C42.3516 34.2031 44.25 29.4922 44.25 24.5C44.25 19.5078 42.3516 14.7969 39.0469 11.2109ZM24 20C21.4688 20 19.5 22.0391 19.5 24.5C19.5 27.0312 21.4688 29 24 29C26.4609 29 28.5 27.0312 28.5 24.5C28.5 22.0391 26.4609 20 24 20ZM24 26.75C22.7344 26.75 21.75 25.7656 21.75 24.5C21.75 23.3047 22.7344 22.25 24 22.25C25.1953 22.25 26.25 23.3047 26.25 24.5C26.25 25.7656 25.1953 26.75 24 26.75ZM32.2969 16.0625L31.5234 16.8359C31.3828 16.9766 31.3125 17.1172 31.3125 17.2578C31.3125 17.3984 31.3828 17.5391 31.5234 17.6797C33.1406 19.5078 34.0547 21.8984 34.0547 24.5C34.0547 27.1719 33.1406 29.5625 31.5234 31.3906C31.3828 31.5312 31.3125 31.6719 31.3125 31.8125C31.3125 31.9531 31.3828 32.0938 31.5234 32.2344L32.2969 33.0078C32.4375 33.1484 32.5781 33.2188 32.7188 33.2188C32.8594 33.2188 33 33.1484 33.1406 33.0078C35.1094 30.7578 36.3047 27.8047 36.3047 24.5703C36.3047 21.2656 35.1094 18.3125 33.1406 16.0625C33 15.9922 32.8594 15.9219 32.7188 15.9219C32.5781 15.9219 32.4375 15.9219 32.2969 16.0625Z"})),el=wP;var SP=e=>q.createElement("svg",d({width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:"M39.6797 17.75L39.75 20L39.6797 38L33 33.3594V24.7109L39.6797 20V17.75C39.2578 17.8203 38.7656 17.9609 38.4141 18.1719L33 21.9688V21.125C33 19.2969 31.4531 17.75 29.625 17.75H12.75V14.375C12.75 12.5469 14.2266 11 16.125 11H27.9375C28.2188 11 28.5 10.7891 28.5 10.4375V9.3125C28.5 9.03125 28.2188 8.75 27.9375 8.75H16.125C12.9609 8.75 10.5 11.2812 10.5 14.375V17.75H9.375C7.47656 17.75 6 19.2969 6 21.125V36.875C6 38.7734 7.47656 40.25 9.375 40.25H29.625C31.4531 40.25 33 38.7734 33 36.875V36.1016L38.4141 39.8984C38.7656 40.1094 39.2578 40.25 39.6797 40.25C40.875 40.25 42 39.3359 42 38.0703V20C42 18.6641 40.875 17.75 39.6797 17.75ZM30.75 36.875C30.75 37.5078 30.1875 38 29.625 38H9.375C8.74219 38 8.25 37.5078 8.25 36.875V21.125C8.25 20.5625 8.74219 20 9.375 20H29.625C30.1875 20 30.75 20.5625 30.75 21.125V36.875ZM28.0078 22.25H10.9219C10.6406 22.3203 10.5 22.4609 10.5 22.7422V24.0781C10.5 24.3594 10.6406 24.5 10.9219 24.5H28.0078C28.2891 24.5 28.4297 24.3594 28.5 24.0781V22.7422C28.4297 22.4609 28.2891 22.3203 28.0078 22.25Z"})),tl=SP;var PP=e=>q.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:"M11.824 4.72708L8.63343 7.84786C8.39883 8.05439 8.04692 8.05439 7.83578 7.82492L7.31965 7.32008C7.08504 7.11356 7.08504 6.74641 7.31965 6.53989L8.75073 5.25486L0.56305 5.25486C0.234605 5.25486 0 5.00244 0 4.70413V0.560002C0 0.250721 0.250722 0 0.560002 0L1.31683 4.36807e-06C1.62611 5.39397e-06 1.87683 0.250726 1.87683 0.560004V3.4191L8.75073 3.4191L7.31965 2.11113C7.08504 1.9046 7.08504 1.53745 7.31965 1.33093L7.83578 0.826096C8.04692 0.596627 8.39883 0.596627 8.63343 0.803149L11.824 3.92393C12.0587 4.1534 12.0587 4.49761 11.824 4.72708Z",fill:"#636878"})),ol=PP;var TP=e=>q.createElement("svg",d({width:"48",height:"32",viewBox:"0 0 48 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:"M46 0H7.33333C6.16667 0 5.33333 0.916667 5.33333 2V2.66667H2C0.833333 2.66667 0 3.58333 0 4.66667V28C0 30.25 1.75 32 4 32H46C47.0833 32 48 31.1667 48 30V2C48 0.916667 47.0833 0 46 0ZM2.66667 28V5.33333H5.33333V28C5.33333 28.75 4.66667 29.3333 4 29.3333C3.25 29.3333 2.66667 28.75 2.66667 28ZM45.3333 29.3333H7.75C7.83333 29 8 28.4167 8 28.0833V28V2.66667H45.3333V29.3333Z",fill:"#A5A9B5"}),q.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0231 10.3277L20.0159 10.3366L20.0094 10.3459C19.8498 10.575 19.7771 10.8433 19.8232 11.1079C19.8691 11.3716 20.0275 11.5989 20.2679 11.7554L21.0576 12.3368L21.0728 12.3454C21.498 12.5896 22.0853 12.5106 22.426 12.103L22.4273 12.1014C22.8645 11.5715 23.2846 11.1881 23.7898 10.9333C24.2937 10.6791 24.9063 10.5409 25.7453 10.5409C28.061 10.5409 28.9327 11.6808 28.9327 12.5977C28.9327 13.0993 28.7034 13.4644 28.3052 13.8072C27.9932 14.0759 27.6072 14.3074 27.1754 14.5663L27.1754 14.5664C27.0311 14.6529 26.8817 14.7425 26.7282 14.8376C26.1341 15.2057 25.5066 15.6423 25.0306 16.2624C24.548 16.891 24.2326 17.6923 24.2326 18.7681C24.2326 19.3702 24.7618 19.7677 25.2632 19.7677H26.2274C26.8061 19.7677 27.258 19.3542 27.258 18.7681C27.258 18.2649 27.489 17.8879 27.8895 17.5308C28.2112 17.244 28.6129 16.9941 29.0603 16.7157L29.0603 16.7157C29.1919 16.6339 29.3274 16.5496 29.466 16.4612C30.0584 16.0832 30.684 15.6419 31.1589 15.0321C31.6406 14.4135 31.9582 13.6337 31.9582 12.5977C31.9582 11.0185 31.2094 9.76304 30.0556 8.91183C28.9084 8.0656 27.3647 7.61914 25.7453 7.61914C24.3484 7.61914 23.2438 7.88697 22.3194 8.36743C21.3964 8.84713 20.6724 9.52886 20.0231 10.3277ZM21.2259 12.0787L20.4426 11.5021C20.0944 11.2799 20.0256 10.8973 20.2363 10.5603C20.0258 10.8973 20.0947 11.2797 20.4427 11.5018L21.2261 12.0785C21.5274 12.2515 21.9492 12.1938 22.1902 11.9055C23.0941 10.8098 23.998 10.2331 25.7455 10.2331C28.1558 10.2331 29.2404 11.4441 29.2404 12.5975C29.2404 12.9349 29.1534 13.22 29.003 13.4709C29.1533 13.22 29.2403 12.935 29.2403 12.5977C29.2403 11.4444 28.1556 10.2334 25.7453 10.2334C23.9978 10.2334 23.0939 10.8101 22.1901 11.9057C21.949 12.1941 21.5272 12.2517 21.2259 12.0787ZM25.0838 16.7238C24.7512 17.2542 24.5401 17.9128 24.5401 18.7681C24.5401 19.1718 24.9017 19.4601 25.2632 19.4601H26.2274C26.4954 19.4601 26.7148 19.3437 26.8391 19.1552C26.7148 19.3435 26.4955 19.4599 26.2275 19.4599H25.2634C24.9018 19.4599 24.5403 19.1715 24.5403 18.7678C24.5403 17.9127 24.7513 17.2542 25.0838 16.7238ZM27.2171 17.8382C27.5662 17.2823 28.2162 16.8782 28.9129 16.4451C29.6965 15.9578 30.5394 15.4338 31.0797 14.6156C30.5394 15.4336 29.6966 15.9576 28.913 16.4448C28.2162 16.878 27.5662 17.2822 27.2171 17.8382ZM25.8056 20.5366C24.6772 20.5366 23.8108 21.4184 23.8108 22.4588C23.8108 23.5639 24.6844 24.381 25.8056 24.381C26.8591 24.381 27.8003 23.5709 27.8003 22.4588C27.8003 21.4113 26.8664 20.5366 25.8056 20.5366ZM24.363 21.6208C24.2067 21.868 24.1183 22.1563 24.1183 22.4588C24.1183 23.3815 24.8414 24.0735 25.8056 24.0735C26.4076 24.0735 26.9562 23.7665 27.2554 23.2888C26.9561 23.7663 26.4077 24.0732 25.8057 24.0732C24.8416 24.0732 24.1185 23.3812 24.1185 22.4585C24.1185 22.1562 24.2068 21.8679 24.363 21.6208Z",fill:"#A5A9B5"})),rl=TP;var kP=e=>q.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 19 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:`M6.6875 9.3125C9.00195 9.3125 10.9062 7.4375 10.9062 5.09375C10.9062 2.7793 9.00195
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
    9.60547V11.1875H16.2383C16.3848 11.1875 16.5312 11.334 16.5312 11.4805V11.8613Z`,fill:"#292B32"})),nl=kP;var EP=e=>q.createElement("svg",d({width:"84",height:"84",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:"M63.002 31.725a10.672 10.672 0 00-3.15-7.574 10.987 10.987 0 00-15.17 0L3.153 65.692a10.724 10.724 0 0015.155 15.159l41.545-41.542a10.664 10.664 0 003.15-7.584zM13.358 75.909a3.805 3.805 0 01-5.25 0 3.717 3.717 0 010-5.25l27.191-27.195 5.268 5.267-27.21 27.178zM54.91 34.357l-9.408 9.411-5.25-5.267 9.411-9.408a3.72 3.72 0 115.25 5.25l-.003.014zM17.022 9.993l5.425-1.547 1.547-5.425a4.169 4.169 0 018.015 0l1.547 5.425 5.425 1.547a4.169 4.169 0 010 8.015l-5.425 1.547-1.547 5.425a4.169 4.169 0 01-8.015 0l-1.547-5.425-5.425-1.547a4.169 4.169 0 010-8.015zm63.96 50.015l-5.426 1.547-1.547 5.425a4.169 4.169 0 01-8.015 0l-1.547-5.425-5.425-1.547a4.169 4.169 0 010-8.015l5.425-1.547 1.547-5.425a4.169 4.169 0 018.015 0l1.547 5.425 5.425 1.547a4.169 4.169 0 010 8.015zM62.143 8.751l4.746-1.355 1.362-4.753a3.647 3.647 0 017 0l1.354 4.746 4.746 1.355a3.647 3.647 0 010 7l-4.746 1.354-1.354 4.757a3.647 3.647 0 01-7 0l-1.355-4.743-4.753-1.361a3.647 3.647 0 010-7z",fill:"#1054DE"})),il=EP;function NP(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",fill:"none",viewBox:"0 0 25 24"},e),q.createElement("path",{fill:"#fff",d:"M19.531 10.809a1.71 1.71 0 010 2.918L7.156 21.039c-1.125.668-2.531-.14-2.531-1.477V4.938c0-1.44 1.512-2.039 2.531-1.44l12.375 7.312z"}))}var Po=NP;var LP=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7
      96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7
      0-216-96.1-216-216zm331.7-18l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8
      35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5
      81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z`})),al=LP;var AP=e=>q.createElement("svg",d({width:"1em",height:"1em",viewBox:"64 64 896 896",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:"M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"})),g4=AP;var BP=e=>q.createElement("svg",d({width:"439",height:"219",viewBox:"0 0 439 219",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:"M148.017 30.9692H125.866C123.49 30.9692 121.564 32.8976 121.564 35.2764V42.6062C121.564 44.985 123.49 46.9133 125.866 46.9133H148.017C150.393 46.9133 152.319 44.985 152.319 42.6062V35.2764C152.319 32.8976 150.393 30.9692 148.017 30.9692Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M326.51 121.695H304.359C301.983 121.695 300.057 123.623 300.057 126.002V133.332C300.057 135.711 301.983 137.639 304.359 137.639H326.51C328.886 137.639 330.812 135.711 330.812 133.332V126.002C330.812 123.623 328.886 121.695 326.51 121.695Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M352.074 18.8726H334.268C332.36 18.8726 330.812 20.4217 330.812 22.3326V28.2286C330.812 30.1396 332.36 31.6887 334.268 31.6887H352.074C353.982 31.6887 355.529 30.1396 355.529 28.2286V22.3326C355.529 20.4217 353.982 18.8726 352.074 18.8726Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M70.9908 157.149H56.7467C55.2198 157.149 53.9819 158.388 53.9819 159.917V164.634C53.9819 166.163 55.2198 167.402 56.7467 167.402H70.9908C72.5177 167.402 73.7555 166.163 73.7555 164.634V159.917C73.7555 158.388 72.5177 157.149 70.9908 157.149Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M256.65 194.102H242.406C240.879 194.102 239.642 195.341 239.642 196.87V201.587C239.642 203.116 240.879 204.355 242.406 204.355H256.65C258.177 204.355 259.415 203.116 259.415 201.587V196.87C259.415 195.341 258.177 194.102 256.65 194.102Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M235.234 0H220.99C219.463 0 218.226 1.23931 218.226 2.76807V7.48487C218.226 9.01363 219.463 10.2529 220.99 10.2529H235.234C236.761 10.2529 237.999 9.01363 237.999 7.48487V2.76807C237.999 1.23931 236.761 0 235.234 0Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M379.815 10.0757H369.132C367.987 10.0757 367.059 11.0052 367.059 12.1517V15.6893C367.059 16.8359 367.987 17.7654 369.132 17.7654H379.815C380.96 17.7654 381.889 16.8359 381.889 15.6893V12.1517C381.889 11.0052 380.96 10.0757 379.815 10.0757Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M436.382 170.087H425.699C424.554 170.087 423.625 171.017 423.625 172.163V175.701C423.625 176.848 424.554 177.777 425.699 177.777H436.382C437.527 177.777 438.456 176.848 438.456 175.701V172.163C438.456 171.017 437.527 170.087 436.382 170.087Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M319.952 106.854H309.269C308.124 106.854 307.196 107.783 307.196 108.93V112.467C307.196 113.614 308.124 114.543 309.269 114.543H319.952C321.098 114.543 322.026 113.614 322.026 112.467V108.93C322.026 107.783 321.098 106.854 319.952 106.854Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M12.7566 114.395H2.07357C0.92837 114.395 0 115.325 0 116.471V120.009C0 121.155 0.92837 122.085 2.07357 122.085H12.7566C13.9018 122.085 14.8302 121.155 14.8302 120.009V116.471C14.8302 115.325 13.9018 114.395 12.7566 114.395Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M123.886 92.126H113.203C112.058 92.126 111.13 93.0555 111.13 94.202V97.7396C111.13 98.8862 112.058 99.8157 113.203 99.8157H123.886C125.032 99.8157 125.96 98.8862 125.96 97.7396V94.202C125.96 93.0555 125.032 92.126 123.886 92.126Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M252.951 59.6855H242.268C241.123 59.6855 240.194 60.615 240.194 61.7616V65.2992C240.194 66.4458 241.123 67.3752 242.268 67.3752H252.951C254.096 67.3752 255.025 66.4458 255.025 65.2992V61.7616C255.025 60.615 254.096 59.6855 252.951 59.6855Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M204.07 191.103H193.387C192.242 191.103 191.313 192.033 191.313 193.179V196.717C191.313 197.863 192.242 198.793 193.387 198.793H204.07C205.215 198.793 206.144 197.863 206.144 196.717V193.179C206.144 192.033 205.215 191.103 204.07 191.103Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M414.347 182.183H400.501C399.017 182.183 397.813 183.387 397.813 184.873V189.457C397.813 190.943 399.017 192.148 400.501 192.148H414.347C415.831 192.148 417.034 190.943 417.034 189.457V184.873C417.034 183.387 415.831 182.183 414.347 182.183Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M272.89 167.175H251.95C249.702 167.175 247.88 168.999 247.88 171.249V178.175C247.88 180.425 249.702 182.25 251.95 182.25H272.89C275.138 182.25 276.96 180.425 276.96 178.175V171.249C276.96 168.999 275.138 167.175 272.89 167.175Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M340.754 115.103H326.909C325.424 115.103 324.221 116.307 324.221 117.793V122.377C324.221 123.863 325.424 125.068 326.909 125.068H340.754C342.239 125.068 343.442 123.863 343.442 122.377V117.793C343.442 116.307 342.239 115.103 340.754 115.103Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M52.3452 45.8179H18.3275C14.6781 45.8179 11.7197 48.7798 11.7197 52.4336V63.6885C11.7197 67.3423 14.6781 70.3042 18.3275 70.3042H52.3452C55.9945 70.3042 58.9529 67.3423 58.9529 63.6885V52.4336C58.9529 48.7798 55.9945 45.8179 52.3452 45.8179Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M100.69 117.848H63.902C59.9564 117.848 56.7578 121.051 56.7578 125.001V137.175C56.7578 141.125 59.9564 144.327 63.902 144.327H100.69C104.636 144.327 107.834 141.125 107.834 137.175V125.001C107.834 121.051 104.636 117.848 100.69 117.848Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M205.591 151.391H168.803C164.857 151.391 161.659 154.593 161.659 158.543V170.717C161.659 174.668 164.857 177.87 168.803 177.87H205.591C209.536 177.87 212.735 174.668 212.735 170.717V158.543C212.735 154.593 209.536 151.391 205.591 151.391Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M208.881 107.949H172.093C168.147 107.949 164.949 111.152 164.949 115.102V127.276C164.949 131.226 168.147 134.429 172.093 134.429H208.881C212.826 134.429 216.025 131.226 216.025 127.276V115.102C216.025 111.152 212.826 107.949 208.881 107.949Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M253.322 75.8452H207.836C202.956 75.8452 199 79.806 199 84.692V99.7447C199 104.631 202.956 108.592 207.836 108.592H253.322C258.202 108.592 262.158 104.631 262.158 99.7447V84.692C262.158 79.806 258.202 75.8452 253.322 75.8452Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M404.355 145.678H358.869C353.989 145.678 350.033 149.639 350.033 154.524V169.577C350.033 174.463 353.989 178.424 358.869 178.424H404.355C409.235 178.424 413.191 174.463 413.191 169.577V154.524C413.191 149.639 409.235 145.678 404.355 145.678Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M399.981 50.0034H368.739C365.386 50.0034 362.668 52.7249 362.668 56.0821V66.4181C362.668 69.7752 365.386 72.4968 368.739 72.4968H399.981C403.334 72.4968 406.053 69.7752 406.053 66.4181V56.0821C406.053 52.7249 403.334 50.0034 399.981 50.0034Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M374.827 101.449H185.845V208.108H374.827V101.449Z",fill:"#626FE5"}),q.createElement("path",{d:"M190.114 85.9873H370.564C371.695 85.9873 372.779 86.437 373.579 87.2375C374.378 88.038 374.827 89.1236 374.827 90.2557V101.444H185.845V90.2612C185.845 89.1277 186.294 88.0406 187.095 87.2391C187.896 86.4376 188.981 85.9873 190.114 85.9873Z",fill:"#626FE5"}),q.createElement("path",{d:"M185.845 208.108H374.827V212.493C374.827 213.627 374.378 214.714 373.577 215.515C372.777 216.317 371.691 216.767 370.559 216.767H190.114C188.981 216.767 187.896 216.317 187.095 215.515C186.294 214.714 185.845 213.627 185.845 212.493V208.108Z",fill:"#626FE5"}),q.createElement("path",{d:"M365.875 98.5877C368.263 98.5877 370.199 96.6495 370.199 94.2585C370.199 91.8675 368.263 89.9292 365.875 89.9292C363.487 89.9292 361.551 91.8675 361.551 94.2585C361.551 96.6495 363.487 98.5877 365.875 98.5877Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M371.401 104.375H188.904V205.161H371.401V104.375Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M238.446 29.8564H42.5352V140.43H238.446V29.8564Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M47.4656 13.8354H234.53C235.703 13.8354 236.828 14.3021 237.658 15.1326C238.487 15.9632 238.953 17.0897 238.953 18.2644V29.857H43.042V18.2588C43.0435 17.0852 43.5102 15.9601 44.3396 15.1307C45.169 14.3013 46.2934 13.8354 47.4656 13.8354Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M229.669 26.889C232.143 26.889 234.148 24.8813 234.148 22.4047C234.148 19.9281 232.143 17.9204 229.669 17.9204C227.196 17.9204 225.19 19.9281 225.19 22.4047C225.19 24.8813 227.196 26.889 229.669 26.889Z",fill:"#626FE5"}),q.createElement("path",{d:"M235.752 32.8237H46.5645V137.307H235.752V32.8237Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M42.5352 139.447H238.446V143.992C238.446 145.167 237.98 146.293 237.151 147.124C236.321 147.954 235.196 148.421 234.023 148.421H46.9588C45.7856 148.421 44.6604 147.954 43.8308 147.124C43.0012 146.293 42.5352 145.167 42.5352 143.992V139.447Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M311.647 18.8726H258.691C255.505 18.8726 252.923 21.4578 252.923 24.6468V46.5367C252.923 49.7257 255.505 52.3109 258.691 52.3109H311.647C314.832 52.3109 317.414 49.7257 317.414 46.5367V24.6468C317.414 21.4578 314.832 18.8726 311.647 18.8726Z",fill:"#626FE5"}),q.createElement("path",{d:"M271.409 50.0025V63.5772C271.408 64.1444 271.576 64.699 271.89 65.1708C272.204 65.6427 272.652 66.0106 273.175 66.2281C273.698 66.4456 274.274 66.5028 274.83 66.3926C275.385 66.2824 275.896 66.0097 276.297 65.6089L292.885 49.0005L271.409 50.0025Z",fill:"#626FE5"}),q.createElement("path",{d:"M272.531 35.2431C272.532 34.6415 272.355 34.0531 272.022 33.5525C271.688 33.0518 271.214 32.6614 270.659 32.4307C270.105 32.1999 269.494 32.1393 268.904 32.2564C268.315 32.3735 267.773 32.6631 267.349 33.0884C266.924 33.5138 266.634 34.0559 266.518 34.646C266.401 35.2361 266.461 35.8477 266.692 36.4033C266.922 36.9588 267.312 37.4335 267.812 37.767C268.312 38.1006 268.9 38.278 269.501 38.2769C270.304 38.2755 271.074 37.9554 271.642 37.3867C272.21 36.8181 272.529 36.0473 272.531 35.2431Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M283.175 35.243C283.177 34.6407 282.999 34.0517 282.665 33.5507C282.331 33.0497 281.856 32.6593 281.3 32.429C280.744 32.1988 280.133 32.1391 279.543 32.2576C278.953 32.3761 278.411 32.6673 277.987 33.0944C277.563 33.5214 277.275 34.065 277.16 34.6562C277.045 35.2474 277.108 35.8595 277.341 36.4148C277.574 36.9701 277.966 37.4435 278.469 37.7751C278.971 38.1066 279.56 38.2812 280.162 38.2769C280.962 38.271 281.728 37.949 282.292 37.3808C282.857 36.8127 283.174 36.0443 283.175 35.243Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M293.814 35.2438C293.814 34.6437 293.637 34.0572 293.304 33.5583C292.971 33.0594 292.497 32.6705 291.944 32.4409C291.39 32.2113 290.781 32.1512 290.193 32.2683C289.605 32.3853 289.065 32.6743 288.641 33.0985C288.218 33.5228 287.929 34.0634 287.812 34.6519C287.695 35.2404 287.755 35.8504 287.985 36.4048C288.214 36.9591 288.602 37.4329 289.101 37.7663C289.599 38.0996 290.185 38.2776 290.784 38.2776C291.588 38.2776 292.358 37.9579 292.927 37.389C293.495 36.82 293.814 36.0484 293.814 35.2438Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M304.459 35.2431C304.46 34.6415 304.282 34.0531 303.949 33.5525C303.616 33.0518 303.142 32.6614 302.587 32.4307C302.032 32.1999 301.421 32.1393 300.832 32.2564C300.243 32.3735 299.701 32.6631 299.276 33.0884C298.851 33.5138 298.562 34.0559 298.445 34.646C298.328 35.2361 298.389 35.8477 298.619 36.4033C298.85 36.9588 299.24 37.4335 299.74 37.767C300.24 38.1006 300.828 38.278 301.428 38.2769C302.232 38.2769 303.003 37.9573 303.571 37.3884C304.139 36.8194 304.459 36.0477 304.459 35.2431Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M139.419 205.436H169.101C172.287 205.436 174.869 202.85 174.869 199.661V189.84C174.869 186.651 172.287 184.066 169.101 184.066H139.419C136.234 184.066 133.652 186.651 133.652 189.84V199.661C133.652 202.85 136.234 205.436 139.419 205.436Z",fill:"#626FE5"}),q.createElement("path",{d:"M163.052 203.962V212.643C163.052 213.005 162.944 213.36 162.743 213.661C162.542 213.962 162.256 214.197 161.922 214.335C161.588 214.474 161.22 214.51 160.865 214.44C160.51 214.369 160.184 214.195 159.928 213.938L149.344 203.342L163.052 203.962Z",fill:"#626FE5"}),q.createElement("path",{d:"M162.333 194.529C162.333 194.145 162.447 193.769 162.66 193.45C162.873 193.13 163.176 192.881 163.531 192.734C163.886 192.587 164.276 192.548 164.653 192.623C165.029 192.698 165.375 192.883 165.646 193.155C165.918 193.427 166.103 193.773 166.177 194.15C166.252 194.527 166.214 194.918 166.067 195.273C165.92 195.628 165.671 195.931 165.352 196.145C165.033 196.358 164.658 196.472 164.274 196.472C163.759 196.472 163.265 196.268 162.901 195.903C162.537 195.539 162.333 195.044 162.333 194.529Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M155.532 194.529C155.532 194.145 155.646 193.769 155.859 193.45C156.072 193.13 156.375 192.881 156.73 192.734C157.085 192.587 157.475 192.548 157.851 192.623C158.228 192.698 158.574 192.883 158.845 193.155C159.116 193.427 159.301 193.773 159.376 194.15C159.451 194.527 159.413 194.918 159.266 195.273C159.119 195.628 158.87 195.931 158.551 196.145C158.232 196.358 157.856 196.472 157.473 196.472C156.958 196.472 156.464 196.268 156.1 195.903C155.736 195.539 155.532 195.044 155.532 194.529Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M148.73 194.529C148.73 194.145 148.844 193.769 149.058 193.449C149.271 193.129 149.575 192.88 149.93 192.733C150.285 192.586 150.675 192.548 151.052 192.624C151.429 192.699 151.774 192.885 152.046 193.157C152.317 193.429 152.501 193.776 152.576 194.153C152.65 194.531 152.611 194.922 152.463 195.277C152.315 195.632 152.066 195.935 151.746 196.148C151.426 196.36 151.05 196.473 150.666 196.472C150.411 196.472 150.159 196.422 149.924 196.324C149.689 196.227 149.475 196.083 149.295 195.903C149.116 195.722 148.973 195.508 148.876 195.272C148.779 195.037 148.73 194.784 148.73 194.529Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M141.924 194.529C141.924 194.145 142.038 193.769 142.251 193.449C142.465 193.129 142.768 192.88 143.123 192.733C143.478 192.586 143.869 192.548 144.245 192.624C144.622 192.699 144.968 192.885 145.239 193.157C145.51 193.429 145.695 193.776 145.769 194.153C145.843 194.531 145.804 194.922 145.656 195.277C145.508 195.632 145.259 195.935 144.939 196.148C144.619 196.36 144.243 196.473 143.859 196.472C143.605 196.472 143.352 196.422 143.117 196.324C142.882 196.227 142.669 196.083 142.489 195.903C142.309 195.722 142.167 195.508 142.07 195.272C141.973 195.037 141.923 194.784 141.924 194.529Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M34.6066 182.366H56.4206C58.7599 182.366 60.6562 180.468 60.6562 178.126V170.901C60.6562 168.559 58.7599 166.66 56.4206 166.66H34.6066C32.2674 166.66 30.371 168.559 30.371 170.901V178.126C30.371 180.468 32.2674 182.366 34.6066 182.366Z",fill:"#626FE5"}),q.createElement("path",{d:"M51.9752 181.281V187.659C51.974 187.925 51.8943 188.185 51.7459 188.406C51.5976 188.627 51.3873 188.799 51.1415 188.901C50.8957 189.003 50.6253 189.03 50.3644 188.978C50.1034 188.926 49.8636 188.799 49.6749 188.611L41.9004 180.827L51.9752 181.281Z",fill:"#626FE5"}),q.createElement("path",{d:"M51.4443 174.35C51.4433 174.067 51.526 173.79 51.6821 173.555C51.8382 173.319 52.0606 173.135 52.3212 173.026C52.5818 172.917 52.8688 172.888 53.1459 172.943C53.423 172.997 53.6777 173.133 53.8778 173.332C54.0778 173.532 54.2143 173.786 54.2698 174.064C54.3253 174.341 54.2973 174.628 54.1895 174.89C54.0817 175.151 53.8989 175.374 53.6641 175.532C53.4294 175.689 53.1534 175.773 52.871 175.773C52.494 175.771 52.1328 175.621 51.8657 175.355C51.5987 175.088 51.4473 174.727 51.4443 174.35Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M46.4453 174.35C46.4442 174.067 46.527 173.79 46.6831 173.555C46.8391 173.319 47.0616 173.135 47.3222 173.026C47.5827 172.917 47.8698 172.888 48.1469 172.943C48.424 172.997 48.6787 173.133 48.8787 173.332C49.0788 173.532 49.2152 173.786 49.2707 174.064C49.3262 174.341 49.2983 174.628 49.1905 174.89C49.0827 175.151 48.8998 175.374 48.6651 175.532C48.4304 175.689 48.1543 175.773 47.8719 175.773C47.495 175.771 47.1338 175.621 46.8667 175.355C46.5996 175.088 46.4482 174.727 46.4453 174.35Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M41.4468 174.35C41.4457 174.067 41.5284 173.79 41.6845 173.555C41.8406 173.319 42.063 173.135 42.3236 173.026C42.5842 172.917 42.8712 172.888 43.1483 172.943C43.4254 172.997 43.6801 173.133 43.8802 173.332C44.0803 173.532 44.2167 173.786 44.2722 174.064C44.3277 174.341 44.2998 174.628 44.192 174.89C44.0841 175.151 43.9013 175.374 43.6666 175.532C43.4318 175.689 43.1558 175.773 42.8734 175.773C42.4964 175.771 42.1353 175.621 41.8682 175.355C41.6011 175.088 41.4497 174.727 41.4468 174.35Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M36.4536 174.35C36.4525 174.067 36.5354 173.79 36.6918 173.554C36.8481 173.319 37.0708 173.135 37.3317 173.026C37.5926 172.917 37.8799 172.888 38.1572 172.943C38.4345 172.998 38.6892 173.134 38.889 173.334C39.0889 173.534 39.2248 173.789 39.2797 174.067C39.3346 174.345 39.3059 174.632 39.1972 174.893C39.0885 175.155 38.9048 175.378 38.6694 175.534C38.4339 175.691 38.1573 175.774 37.8747 175.773C37.4983 175.771 37.1377 175.621 36.8715 175.354C36.6053 175.088 36.4551 174.727 36.4536 174.35Z",fill:"#F0FFFB"}),q.createElement("path",{d:"M92.7828 202.788H70.6316C68.2557 202.788 66.3296 204.716 66.3296 207.095V214.425C66.3296 216.804 68.2557 218.732 70.6316 218.732H92.7828C95.1588 218.732 97.0848 216.804 97.0848 214.425V207.095C97.0848 204.716 95.1588 202.788 92.7828 202.788Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M86.2244 187.947H75.5413C74.3961 187.947 73.4678 188.876 73.4678 190.023V193.56C73.4678 194.707 74.3961 195.636 75.5413 195.636H86.2244C87.3696 195.636 88.298 194.707 88.298 193.56V190.023C88.298 188.876 87.3696 187.947 86.2244 187.947Z",fill:"#B3BBE3"}),q.createElement("path",{d:"M107.027 196.195H93.1815C91.6973 196.195 90.4941 197.4 90.4941 198.886V203.47C90.4941 204.956 91.6973 206.16 93.1815 206.16H107.027C108.512 206.16 109.715 204.956 109.715 203.47V198.886C109.715 197.4 108.512 196.195 107.027 196.195Z",fill:"#B3BBE3"}),q.createElement("rect",{opacity:"0.5",x:"54.6396",y:"128.725",width:"171.1",height:"1.45175",fill:"#F0FFFB"}),q.createElement("ellipse",{cx:"86.5399",cy:"128.725",rx:"4.34999",ry:"4.3552",fill:"#D1DDEF"})),y4=BP,h4=`url("data:image/svg+xml;charset=UTF-8,%3csvg width='439' height='219' viewBox='0 0 439 219' fill='none' xmlns='http://www.w3.org/2000/svg' %3e%3cpath d='M148.017 30.9692H125.866C123.49 30.9692 121.564 32.8976 121.564 35.2764V42.6062C121.564 44.985 123.49 46.9133 125.866 46.9133H148.017C150.393 46.9133 152.319 44.985 152.319 42.6062V35.2764C152.319 32.8976 150.393 30.9692 148.017 30.9692Z' fill='%23B3BBE3' /%3e%3cpath d='M326.51 121.695H304.359C301.983 121.695 300.057 123.623 300.057 126.002V133.332C300.057 135.711 301.983 137.639 304.359 137.639H326.51C328.886 137.639 330.812 135.711 330.812 133.332V126.002C330.812 123.623 328.886 121.695 326.51 121.695Z' fill='%23B3BBE3' /%3e%3cpath d='M352.074 18.8726H334.268C332.36 18.8726 330.812 20.4217 330.812 22.3326V28.2286C330.812 30.1396 332.36 31.6887 334.268 31.6887H352.074C353.982 31.6887 355.529 30.1396 355.529 28.2286V22.3326C355.529 20.4217 353.982 18.8726 352.074 18.8726Z' fill='%23B3BBE3' /%3e%3cpath d='M70.9908 157.149H56.7467C55.2198 157.149 53.9819 158.388 53.9819 159.917V164.634C53.9819 166.163 55.2198 167.402 56.7467 167.402H70.9908C72.5177 167.402 73.7555 166.163 73.7555 164.634V159.917C73.7555 158.388 72.5177 157.149 70.9908 157.149Z' fill='%23B3BBE3' /%3e%3cpath d='M256.65 194.102H242.406C240.879 194.102 239.642 195.341 239.642 196.87V201.587C239.642 203.116 240.879 204.355 242.406 204.355H256.65C258.177 204.355 259.415 203.116 259.415 201.587V196.87C259.415 195.341 258.177 194.102 256.65 194.102Z' fill='%23B3BBE3' /%3e%3cpath d='M235.234 0H220.99C219.463 0 218.226 1.23931 218.226 2.76807V7.48487C218.226 9.01363 219.463 10.2529 220.99 10.2529H235.234C236.761 10.2529 237.999 9.01363 237.999 7.48487V2.76807C237.999 1.23931 236.761 0 235.234 0Z' fill='%23B3BBE3' /%3e%3cpath d='M379.815 10.0757H369.132C367.987 10.0757 367.059 11.0052 367.059 12.1517V15.6893C367.059 16.8359 367.987 17.7654 369.132 17.7654H379.815C380.96 17.7654 381.889 16.8359 381.889 15.6893V12.1517C381.889 11.0052 380.96 10.0757 379.815 10.0757Z' fill='%23B3BBE3' /%3e%3cpath d='M436.382 170.087H425.699C424.554 170.087 423.625 171.017 423.625 172.163V175.701C423.625 176.848 424.554 177.777 425.699 177.777H436.382C437.527 177.777 438.456 176.848 438.456 175.701V172.163C438.456 171.017 437.527 170.087 436.382 170.087Z' fill='%23B3BBE3' /%3e%3cpath d='M319.952 106.854H309.269C308.124 106.854 307.196 107.783 307.196 108.93V112.467C307.196 113.614 308.124 114.543 309.269 114.543H319.952C321.098 114.543 322.026 113.614 322.026 112.467V108.93C322.026 107.783 321.098 106.854 319.952 106.854Z' fill='%23B3BBE3' /%3e%3cpath d='M12.7566 114.395H2.07357C0.92837 114.395 0 115.325 0 116.471V120.009C0 121.155 0.92837 122.085 2.07357 122.085H12.7566C13.9018 122.085 14.8302 121.155 14.8302 120.009V116.471C14.8302 115.325 13.9018 114.395 12.7566 114.395Z' fill='%23B3BBE3' /%3e%3cpath d='M123.886 92.126H113.203C112.058 92.126 111.13 93.0555 111.13 94.202V97.7396C111.13 98.8862 112.058 99.8157 113.203 99.8157H123.886C125.032 99.8157 125.96 98.8862 125.96 97.7396V94.202C125.96 93.0555 125.032 92.126 123.886 92.126Z' fill='%23B3BBE3' /%3e%3cpath d='M252.951 59.6855H242.268C241.123 59.6855 240.194 60.615 240.194 61.7616V65.2992C240.194 66.4458 241.123 67.3752 242.268 67.3752H252.951C254.096 67.3752 255.025 66.4458 255.025 65.2992V61.7616C255.025 60.615 254.096 59.6855 252.951 59.6855Z' fill='%23B3BBE3' /%3e%3cpath d='M204.07 191.103H193.387C192.242 191.103 191.313 192.033 191.313 193.179V196.717C191.313 197.863 192.242 198.793 193.387 198.793H204.07C205.215 198.793 206.144 197.863 206.144 196.717V193.179C206.144 192.033 205.215 191.103 204.07 191.103Z' fill='%23B3BBE3' /%3e%3cpath d='M414.347 182.183H400.501C399.017 182.183 397.813 183.387 397.813 184.873V189.457C397.813 190.943 399.017 192.148 400.501 192.148H414.347C415.831 192.148 417.034 190.943 417.034 189.457V184.873C417.034 183.387 415.831 182.183 414.347 182.183Z' fill='%23B3BBE3' /%3e%3cpath d='M272.89 167.175H251.95C249.702 167.175 247.88 168.999 247.88 171.249V178.175C247.88 180.425 249.702 182.25 251.95 182.25H272.89C275.138 182.25 276.96 180.425 276.96 178.175V171.249C276.96 168.999 275.138 167.175 272.89 167.175Z' fill='%23B3BBE3' /%3e%3cpath d='M340.754 115.103H326.909C325.424 115.103 324.221 116.307 324.221 117.793V122.377C324.221 123.863 325.424 125.068 326.909 125.068H340.754C342.239 125.068 343.442 123.863 343.442 122.377V117.793C343.442 116.307 342.239 115.103 340.754 115.103Z' fill='%23B3BBE3' /%3e%3cpath d='M52.3452 45.8179H18.3275C14.6781 45.8179 11.7197 48.7798 11.7197 52.4336V63.6885C11.7197 67.3423 14.6781 70.3042 18.3275 70.3042H52.3452C55.9945 70.3042 58.9529 67.3423 58.9529 63.6885V52.4336C58.9529 48.7798 55.9945 45.8179 52.3452 45.8179Z' fill='%23B3BBE3' /%3e%3cpath d='M100.69 117.848H63.902C59.9564 117.848 56.7578 121.051 56.7578 125.001V137.175C56.7578 141.125 59.9564 144.327 63.902 144.327H100.69C104.636 144.327 107.834 141.125 107.834 137.175V125.001C107.834 121.051 104.636 117.848 100.69 117.848Z' fill='%23B3BBE3' /%3e%3cpath d='M205.591 151.391H168.803C164.857 151.391 161.659 154.593 161.659 158.543V170.717C161.659 174.668 164.857 177.87 168.803 177.87H205.591C209.536 177.87 212.735 174.668 212.735 170.717V158.543C212.735 154.593 209.536 151.391 205.591 151.391Z' fill='%23B3BBE3' /%3e%3cpath d='M208.881 107.949H172.093C168.147 107.949 164.949 111.152 164.949 115.102V127.276C164.949 131.226 168.147 134.429 172.093 134.429H208.881C212.826 134.429 216.025 131.226 216.025 127.276V115.102C216.025 111.152 212.826 107.949 208.881 107.949Z' fill='%23B3BBE3' /%3e%3cpath d='M253.322 75.8452H207.836C202.956 75.8452 199 79.806 199 84.692V99.7447C199 104.631 202.956 108.592 207.836 108.592H253.322C258.202 108.592 262.158 104.631 262.158 99.7447V84.692C262.158 79.806 258.202 75.8452 253.322 75.8452Z' fill='%23B3BBE3' /%3e%3cpath d='M404.355 145.678H358.869C353.989 145.678 350.033 149.639 350.033 154.524V169.577C350.033 174.463 353.989 178.424 358.869 178.424H404.355C409.235 178.424 413.191 174.463 413.191 169.577V154.524C413.191 149.639 409.235 145.678 404.355 145.678Z' fill='%23B3BBE3' /%3e%3cpath d='M399.981 50.0034H368.739C365.386 50.0034 362.668 52.7249 362.668 56.0821V66.4181C362.668 69.7752 365.386 72.4968 368.739 72.4968H399.981C403.334 72.4968 406.053 69.7752 406.053 66.4181V56.0821C406.053 52.7249 403.334 50.0034 399.981 50.0034Z' fill='%23B3BBE3' /%3e%3cpath d='M374.827 101.449H185.845V208.108H374.827V101.449Z' fill='%23626FE5' /%3e%3cpath d='M190.114 85.9873H370.564C371.695 85.9873 372.779 86.437 373.579 87.2375C374.378 88.038 374.827 89.1236 374.827 90.2557V101.444H185.845V90.2612C185.845 89.1277 186.294 88.0406 187.095 87.2391C187.896 86.4376 188.981 85.9873 190.114 85.9873Z' fill='%23626FE5' /%3e%3cpath d='M185.845 208.108H374.827V212.493C374.827 213.627 374.378 214.714 373.577 215.515C372.777 216.317 371.691 216.767 370.559 216.767H190.114C188.981 216.767 187.896 216.317 187.095 215.515C186.294 214.714 185.845 213.627 185.845 212.493V208.108Z' fill='%23626FE5' /%3e%3cpath d='M365.875 98.5877C368.263 98.5877 370.199 96.6495 370.199 94.2585C370.199 91.8675 368.263 89.9292 365.875 89.9292C363.487 89.9292 361.551 91.8675 361.551 94.2585C361.551 96.6495 363.487 98.5877 365.875 98.5877Z' fill='%23F0FFFB' /%3e%3cpath d='M371.401 104.375H188.904V205.161H371.401V104.375Z' fill='%23B3BBE3' /%3e%3cpath d='M238.446 29.8564H42.5352V140.43H238.446V29.8564Z' fill='%23F0FFFB' /%3e%3cpath d='M47.4656 13.8354H234.53C235.703 13.8354 236.828 14.3021 237.658 15.1326C238.487 15.9632 238.953 17.0897 238.953 18.2644V29.857H43.042V18.2588C43.0435 17.0852 43.5102 15.9601 44.3396 15.1307C45.169 14.3013 46.2934 13.8354 47.4656 13.8354Z' fill='%23F0FFFB' /%3e%3cpath d='M229.669 26.889C232.143 26.889 234.148 24.8813 234.148 22.4047C234.148 19.9281 232.143 17.9204 229.669 17.9204C227.196 17.9204 225.19 19.9281 225.19 22.4047C225.19 24.8813 227.196 26.889 229.669 26.889Z' fill='%23626FE5' /%3e%3cpath d='M235.752 32.8237H46.5645V137.307H235.752V32.8237Z' fill='%23B3BBE3' /%3e%3cpath d='M42.5352 139.447H238.446V143.992C238.446 145.167 237.98 146.293 237.151 147.124C236.321 147.954 235.196 148.421 234.023 148.421H46.9588C45.7856 148.421 44.6604 147.954 43.8308 147.124C43.0012 146.293 42.5352 145.167 42.5352 143.992V139.447Z' fill='%23F0FFFB' /%3e%3cpath d='M311.647 18.8726H258.691C255.505 18.8726 252.923 21.4578 252.923 24.6468V46.5367C252.923 49.7257 255.505 52.3109 258.691 52.3109H311.647C314.832 52.3109 317.414 49.7257 317.414 46.5367V24.6468C317.414 21.4578 314.832 18.8726 311.647 18.8726Z' fill='%23626FE5' /%3e%3cpath d='M271.409 50.0025V63.5772C271.408 64.1444 271.576 64.699 271.89 65.1708C272.204 65.6427 272.652 66.0106 273.175 66.2281C273.698 66.4456 274.274 66.5028 274.83 66.3926C275.385 66.2824 275.896 66.0097 276.297 65.6089L292.885 49.0005L271.409 50.0025Z' fill='%23626FE5' /%3e%3cpath d='M272.531 35.2431C272.532 34.6415 272.355 34.0531 272.022 33.5525C271.688 33.0518 271.214 32.6614 270.659 32.4307C270.105 32.1999 269.494 32.1393 268.904 32.2564C268.315 32.3735 267.773 32.6631 267.349 33.0884C266.924 33.5138 266.634 34.0559 266.518 34.646C266.401 35.2361 266.461 35.8477 266.692 36.4033C266.922 36.9588 267.312 37.4335 267.812 37.767C268.312 38.1006 268.9 38.278 269.501 38.2769C270.304 38.2755 271.074 37.9554 271.642 37.3867C272.21 36.8181 272.529 36.0473 272.531 35.2431Z' fill='%23F0FFFB' /%3e%3cpath d='M283.175 35.243C283.177 34.6407 282.999 34.0517 282.665 33.5507C282.331 33.0497 281.856 32.6593 281.3 32.429C280.744 32.1988 280.133 32.1391 279.543 32.2576C278.953 32.3761 278.411 32.6673 277.987 33.0944C277.563 33.5214 277.275 34.065 277.16 34.6562C277.045 35.2474 277.108 35.8595 277.341 36.4148C277.574 36.9701 277.966 37.4435 278.469 37.7751C278.971 38.1066 279.56 38.2812 280.162 38.2769C280.962 38.271 281.728 37.949 282.292 37.3808C282.857 36.8127 283.174 36.0443 283.175 35.243Z' fill='%23F0FFFB' /%3e%3cpath d='M293.814 35.2438C293.814 34.6437 293.637 34.0572 293.304 33.5583C292.971 33.0594 292.497 32.6705 291.944 32.4409C291.39 32.2113 290.781 32.1512 290.193 32.2683C289.605 32.3853 289.065 32.6743 288.641 33.0985C288.218 33.5228 287.929 34.0634 287.812 34.6519C287.695 35.2404 287.755 35.8504 287.985 36.4048C288.214 36.9591 288.602 37.4329 289.101 37.7663C289.599 38.0996 290.185 38.2776 290.784 38.2776C291.588 38.2776 292.358 37.9579 292.927 37.389C293.495 36.82 293.814 36.0484 293.814 35.2438Z' fill='%23F0FFFB' /%3e%3cpath d='M304.459 35.2431C304.46 34.6415 304.282 34.0531 303.949 33.5525C303.616 33.0518 303.142 32.6614 302.587 32.4307C302.032 32.1999 301.421 32.1393 300.832 32.2564C300.243 32.3735 299.701 32.6631 299.276 33.0884C298.851 33.5138 298.562 34.0559 298.445 34.646C298.328 35.2361 298.389 35.8477 298.619 36.4033C298.85 36.9588 299.24 37.4335 299.74 37.767C300.24 38.1006 300.828 38.278 301.428 38.2769C302.232 38.2769 303.003 37.9573 303.571 37.3884C304.139 36.8194 304.459 36.0477 304.459 35.2431Z' fill='%23F0FFFB' /%3e%3cpath d='M139.419 205.436H169.101C172.287 205.436 174.869 202.85 174.869 199.661V189.84C174.869 186.651 172.287 184.066 169.101 184.066H139.419C136.234 184.066 133.652 186.651 133.652 189.84V199.661C133.652 202.85 136.234 205.436 139.419 205.436Z' fill='%23626FE5' /%3e%3cpath d='M163.052 203.962V212.643C163.052 213.005 162.944 213.36 162.743 213.661C162.542 213.962 162.256 214.197 161.922 214.335C161.588 214.474 161.22 214.51 160.865 214.44C160.51 214.369 160.184 214.195 159.928 213.938L149.344 203.342L163.052 203.962Z' fill='%23626FE5' /%3e%3cpath d='M162.333 194.529C162.333 194.145 162.447 193.769 162.66 193.45C162.873 193.13 163.176 192.881 163.531 192.734C163.886 192.587 164.276 192.548 164.653 192.623C165.029 192.698 165.375 192.883 165.646 193.155C165.918 193.427 166.103 193.773 166.177 194.15C166.252 194.527 166.214 194.918 166.067 195.273C165.92 195.628 165.671 195.931 165.352 196.145C165.033 196.358 164.658 196.472 164.274 196.472C163.759 196.472 163.265 196.268 162.901 195.903C162.537 195.539 162.333 195.044 162.333 194.529Z' fill='%23F0FFFB' /%3e%3cpath d='M155.532 194.529C155.532 194.145 155.646 193.769 155.859 193.45C156.072 193.13 156.375 192.881 156.73 192.734C157.085 192.587 157.475 192.548 157.851 192.623C158.228 192.698 158.574 192.883 158.845 193.155C159.116 193.427 159.301 193.773 159.376 194.15C159.451 194.527 159.413 194.918 159.266 195.273C159.119 195.628 158.87 195.931 158.551 196.145C158.232 196.358 157.856 196.472 157.473 196.472C156.958 196.472 156.464 196.268 156.1 195.903C155.736 195.539 155.532 195.044 155.532 194.529Z' fill='%23F0FFFB' /%3e%3cpath d='M148.73 194.529C148.73 194.145 148.844 193.769 149.058 193.449C149.271 193.129 149.575 192.88 149.93 192.733C150.285 192.586 150.675 192.548 151.052 192.624C151.429 192.699 151.774 192.885 152.046 193.157C152.317 193.429 152.501 193.776 152.576 194.153C152.65 194.531 152.611 194.922 152.463 195.277C152.315 195.632 152.066 195.935 151.746 196.148C151.426 196.36 151.05 196.473 150.666 196.472C150.411 196.472 150.159 196.422 149.924 196.324C149.689 196.227 149.475 196.083 149.295 195.903C149.116 195.722 148.973 195.508 148.876 195.272C148.779 195.037 148.73 194.784 148.73 194.529Z' fill='%23F0FFFB' /%3e%3cpath d='M141.924 194.529C141.924 194.145 142.038 193.769 142.251 193.449C142.465 193.129 142.768 192.88 143.123 192.733C143.478 192.586 143.869 192.548 144.245 192.624C144.622 192.699 144.968 192.885 145.239 193.157C145.51 193.429 145.695 193.776 145.769 194.153C145.843 194.531 145.804 194.922 145.656 195.277C145.508 195.632 145.259 195.935 144.939 196.148C144.619 196.36 144.243 196.473 143.859 196.472C143.605 196.472 143.352 196.422 143.117 196.324C142.882 196.227 142.669 196.083 142.489 195.903C142.309 195.722 142.167 195.508 142.07 195.272C141.973 195.037 141.923 194.784 141.924 194.529Z' fill='%23F0FFFB' /%3e%3cpath d='M34.6066 182.366H56.4206C58.7599 182.366 60.6562 180.468 60.6562 178.126V170.901C60.6562 168.559 58.7599 166.66 56.4206 166.66H34.6066C32.2674 166.66 30.371 168.559 30.371 170.901V178.126C30.371 180.468 32.2674 182.366 34.6066 182.366Z' fill='%23626FE5' /%3e%3cpath d='M51.9752 181.281V187.659C51.974 187.925 51.8943 188.185 51.7459 188.406C51.5976 188.627 51.3873 188.799 51.1415 188.901C50.8957 189.003 50.6253 189.03 50.3644 188.978C50.1034 188.926 49.8636 188.799 49.6749 188.611L41.9004 180.827L51.9752 181.281Z' fill='%23626FE5' /%3e%3cpath d='M51.4443 174.35C51.4433 174.067 51.526 173.79 51.6821 173.555C51.8382 173.319 52.0606 173.135 52.3212 173.026C52.5818 172.917 52.8688 172.888 53.1459 172.943C53.423 172.997 53.6777 173.133 53.8778 173.332C54.0778 173.532 54.2143 173.786 54.2698 174.064C54.3253 174.341 54.2973 174.628 54.1895 174.89C54.0817 175.151 53.8989 175.374 53.6641 175.532C53.4294 175.689 53.1534 175.773 52.871 175.773C52.494 175.771 52.1328 175.621 51.8657 175.355C51.5987 175.088 51.4473 174.727 51.4443 174.35Z' fill='%23F0FFFB' /%3e%3cpath d='M46.4453 174.35C46.4442 174.067 46.527 173.79 46.6831 173.555C46.8391 173.319 47.0616 173.135 47.3222 173.026C47.5827 172.917 47.8698 172.888 48.1469 172.943C48.424 172.997 48.6787 173.133 48.8787 173.332C49.0788 173.532 49.2152 173.786 49.2707 174.064C49.3262 174.341 49.2983 174.628 49.1905 174.89C49.0827 175.151 48.8998 175.374 48.6651 175.532C48.4304 175.689 48.1543 175.773 47.8719 175.773C47.495 175.771 47.1338 175.621 46.8667 175.355C46.5996 175.088 46.4482 174.727 46.4453 174.35Z' fill='%23F0FFFB' /%3e%3cpath d='M41.4468 174.35C41.4457 174.067 41.5284 173.79 41.6845 173.555C41.8406 173.319 42.063 173.135 42.3236 173.026C42.5842 172.917 42.8712 172.888 43.1483 172.943C43.4254 172.997 43.6801 173.133 43.8802 173.332C44.0803 173.532 44.2167 173.786 44.2722 174.064C44.3277 174.341 44.2998 174.628 44.192 174.89C44.0841 175.151 43.9013 175.374 43.6666 175.532C43.4318 175.689 43.1558 175.773 42.8734 175.773C42.4964 175.771 42.1353 175.621 41.8682 175.355C41.6011 175.088 41.4497 174.727 41.4468 174.35Z' fill='%23F0FFFB' /%3e%3cpath d='M36.4536 174.35C36.4525 174.067 36.5354 173.79 36.6918 173.554C36.8481 173.319 37.0708 173.135 37.3317 173.026C37.5926 172.917 37.8799 172.888 38.1572 172.943C38.4345 172.998 38.6892 173.134 38.889 173.334C39.0889 173.534 39.2248 173.789 39.2797 174.067C39.3346 174.345 39.3059 174.632 39.1972 174.893C39.0885 175.155 38.9048 175.378 38.6694 175.534C38.4339 175.691 38.1573 175.774 37.8747 175.773C37.4983 175.771 37.1377 175.621 36.8715 175.354C36.6053 175.088 36.4551 174.727 36.4536 174.35Z' fill='%23F0FFFB' /%3e%3cpath d='M92.7828 202.788H70.6316C68.2557 202.788 66.3296 204.716 66.3296 207.095V214.425C66.3296 216.804 68.2557 218.732 70.6316 218.732H92.7828C95.1588 218.732 97.0848 216.804 97.0848 214.425V207.095C97.0848 204.716 95.1588 202.788 92.7828 202.788Z' fill='%23B3BBE3' /%3e%3cpath d='M86.2244 187.947H75.5413C74.3961 187.947 73.4678 188.876 73.4678 190.023V193.56C73.4678 194.707 74.3961 195.636 75.5413 195.636H86.2244C87.3696 195.636 88.298 194.707 88.298 193.56V190.023C88.298 188.876 87.3696 187.947 86.2244 187.947Z' fill='%23B3BBE3' /%3e%3cpath d='M107.027 196.195H93.1815C91.6973 196.195 90.4941 197.4 90.4941 198.886V203.47C90.4941 204.956 91.6973 206.16 93.1815 206.16H107.027C108.512 206.16 109.715 204.956 109.715 203.47V198.886C109.715 197.4 108.512 196.195 107.027 196.195Z' fill='%23B3BBE3' /%3e%3crect opacity='0.5' x='54.6396' y='128.725' width='171.1' height='1.45175' fill='%23F0FFFB' /%3e%3cellipse cx='86.5399' cy='128.725' rx='4.34999' ry='4.3552' fill='%23D1DDEF' /%3e%3c/svg%3e")`;var FP=e=>q.createElement("svg",d({width:"550",height:"311",viewBox:"0 0 550 311",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("g",{clipPath:"url(#clip0_215:32761)"},q.createElement("g",{clipPath:"url(#clip1_215:32761)"},q.createElement("path",{d:"M-2 14.8096H425.198V311H-2V14.8096Z",fill:"black",fillOpacity:"0.4"}),q.createElement("rect",{x:"-88.5786",y:"-250.623",width:"650.48",height:"582.128",fill:"#3952EE"}),q.createElement("path",{opacity:"0.12",d:"M593.719 217.742C597.69 146.691 543.007 65.1588 469.769 55.9192C468.481 55.7366 467.188 55.594 465.852 55.4456C360.763 43.978 345.548 172.222 249.39 180.853C153.28 189.451 84.5912 111.653 -32.1421 152.418C-136.971 189.03 -178.234 428.662 122.172 456.995C362.61 479.644 581.889 429.723 593.719 217.742Z",fill:"#E3E8FF"}),q.createElement("rect",{x:"-88.5786",y:"296.19",width:"594.659",height:"88.8571",fill:"#FBACC2"}),q.createElement("path",{d:"M271.376 302.951C272.121 300.571 272.546 298.072 272.546 295.514C272.546 277.647 253.142 263.171 229.193 263.171C223.478 263.171 218.029 264.004 213.032 265.511C208.407 255.219 195.383 247.822 180.019 247.822C178.504 247.822 177.042 247.901 175.58 248.04C172.125 218.79 139.245 195.866 99.1615 195.866C57.3239 195.866 23.3274 220.853 22.4768 251.927C3.95025 258.61 -8.83496 272.769 -8.83496 289.168C-8.83496 294.007 -7.71858 298.647 -5.67188 302.951H271.376Z",fill:"#FBACC2"}),q.createElement("path",{d:"M242.531 298.394C242.058 296.875 241.788 295.28 241.788 293.647C241.788 282.243 254.121 273.002 269.344 273.002C272.976 273.002 276.44 273.534 279.616 274.496C282.556 267.927 290.835 263.205 300.6 263.205C301.563 263.205 302.492 263.256 303.422 263.345C305.618 244.674 326.517 230.042 351.996 230.042C378.589 230.042 400.198 245.991 400.738 265.825C412.514 270.091 420.641 279.129 420.641 289.597C420.641 292.685 419.932 295.647 418.631 298.394H242.531Z",fill:"#FBACC2"}),q.createElement("path",{d:"M-0.226562 331.506C2.991 327.454 4.83498 322.798 4.83498 317.839C4.83498 302.291 -13.1909 289.69 -35.4316 289.69C-39.0255 289.69 -42.5065 290.019 -45.8182 290.637C-52.893 277.26 -71.3141 267.711 -92.9339 267.711C-117.414 267.711 -137.792 279.957 -142.251 296.149C-145.375 295.609 -148.63 295.32 -151.979 295.32C-174.22 295.32 -192.246 307.921 -192.246 323.469C-192.246 326.257 -191.662 328.967 -190.571 331.506H-0.226562Z",fill:"#FBACC2"}),q.createElement("path",{d:"M592.155 321.253C595.372 317.201 597.216 312.545 597.216 307.586C597.216 292.039 579.19 279.438 556.95 279.438C553.356 279.438 549.875 279.766 546.563 280.385C539.488 267.007 521.067 257.458 499.447 257.458C474.968 257.458 454.59 269.704 450.13 285.896C447.007 285.357 443.752 285.067 440.402 285.067C418.162 285.067 400.136 297.668 400.136 313.216C400.136 316.004 400.719 318.714 401.81 321.253H592.155Z",fill:"#FBACC2"}),q.createElement("g",{opacity:"0.5",clipPath:"url(#clip2_215:32761)"},q.createElement("path",{d:"M209.01 190.738C211.089 192.833 214.669 194.22 217.819 193.558C218.089 193.498 218.358 193.428 218.627 193.336C219.949 192.889 221.164 192.041 222.117 190.678C223.573 188.603 224.413 185.32 224.097 180.463C223.572 172.434 220.201 169.001 216.967 167.573C213.733 166.145 210.625 166.732 210.625 166.732C198.081 169.827 204.473 186.187 209.01 190.738Z",fill:"white"}),q.createElement("path",{d:"M217.803 193.21C217.803 193.21 216.834 194.702 217.133 194.824C217.432 194.946 217.445 194.608 218.217 194.701C218.989 194.795 218.881 194.788 219.273 194.635C219.665 194.482 219.712 194.058 219.712 194.058L218.607 192.915L217.803 193.21Z",fill:"white"}),q.createElement("path",{d:"M218.699 193.774C216.645 195.852 215.846 199.101 217.224 201.534C217.948 202.818 219.17 203.768 220.408 204.637C221.645 205.506 222.932 206.34 223.857 207.497C224.793 208.651 225.327 210.203 224.823 211.624C224.328 213.031 222.562 214.083 221.127 213.538C220.854 213.432 220.607 213.286 220.434 213.067C219.909 212.423 220.252 211.382 220.969 210.893C222.116 210.12 223.804 210.601 224.637 211.627C225.492 212.648 225.659 214.041 225.641 215.35C225.626 216.668 225.462 218.003 225.751 219.277C226.445 222.377 229.621 224.485 230.439 227.565C230.921 229.371 230.547 231.394 231.34 233.088",stroke:"white",strokeWidth:"0.455678",strokeMiterlimit:"10"})),q.createElement("g",{opacity:"0.5",clipPath:"url(#clip3_215:32761)"},q.createElement("path",{d:"M335.752 126.552C335.397 127.271 335.037 127.966 334.672 128.639C332.755 132.086 330.502 134.963 328.571 136.597C325.25 139.414 319.865 140.99 315.37 139.569C315.268 139.547 315.16 139.501 315.066 139.464C314.789 139.375 314.516 139.25 314.243 139.124L314.228 139.116C313.479 138.782 312.762 138.332 312.096 137.795C308.607 134.961 306.529 129.229 308.122 119.26C309.439 111.105 312.413 106.352 315.739 103.655C322.067 98.5115 329.674 100.717 329.674 100.717C341.767 105.035 340.236 117.254 335.752 126.552Z",fill:"white"}),q.createElement("path",{d:"M314.211 139.144C314.211 139.144 311.72 139.937 311.933 140.356C312.151 140.798 312.488 140.399 313.256 141.249C314.024 142.098 313.913 141.993 314.503 142.173C315.084 142.367 315.535 141.939 315.535 141.939L315.37 139.569L314.211 139.144Z",fill:"white"}),q.createElement("path",{d:"M313.219 141.246C308.933 143.637 306.137 150.03 305.856 154.752C305.722 157.039 306.416 159.494 308.204 160.937C309.1 161.67 310.222 162.092 311.37 162.278C312.755 162.489 314.465 162.159 315.028 160.867C315.454 159.9 315.02 158.688 314.2 158.021C313.381 157.354 312.255 157.162 311.198 157.245C305.242 157.74 302.516 165.049 302.044 170.121C301.691 173.965 302.152 178.163 303.449 181.776C305.836 188.411 306.144 193.604 302.368 199.757C301.163 201.73 299.883 203.697 299.145 205.893C298.421 208.097 298.306 210.609 299.415 212.634",stroke:"white",strokeWidth:"0.455678",strokeMiterlimit:"10"})),q.createElement("path",{d:"M136.024 51.4475C136.402 53.3461 135.146 55.1994 133.223 55.5819C131.3 55.9644 129.431 54.7326 129.053 52.834C128.675 50.9354 129.931 49.0821 131.854 48.6996C133.777 48.3171 135.646 49.5489 136.024 51.4475Z",fill:"#FDE5DE"}),q.createElement("path",{d:"M44.3296 199.388C44.6445 200.972 43.5974 202.531 41.9761 202.853C40.3549 203.175 38.7909 202.136 38.476 200.553C38.1611 198.969 39.2083 197.41 40.8295 197.088C42.4507 196.765 44.0147 197.805 44.3296 199.388Z",stroke:"#FDE5DE",strokeWidth:"1.13919"}),q.createElement("path",{d:"M165.002 183.418L165.005 183.417C166.62 183.086 168.185 184.122 168.502 185.718C168.817 187.301 167.77 188.86 166.149 189.183C164.527 189.505 162.963 188.466 162.648 186.882C162.333 185.299 163.381 183.74 165.002 183.418Z",stroke:"#FDE5DE",strokeWidth:"1.13919"}),q.createElement("path",{d:"M276.643 68.4343L276.646 68.4337C278.261 68.103 279.826 69.1389 280.143 70.7347C280.458 72.318 279.411 73.8769 277.79 74.1993C276.168 74.5218 274.604 73.4823 274.289 71.899C273.975 70.3156 275.022 68.7568 276.643 68.4343Z",stroke:"#FDE5DE",strokeWidth:"1.13919"}),q.createElement("path",{opacity:"0.4",d:"M387.083 131.647L391.618 134.861C391.618 134.861 392.301 138.291 388.983 139.77C385.665 141.248 383.525 143.053 384.259 145.374C384.259 145.374 380.196 144.534 379.892 141.578C379.577 138.624 383.535 138.936 385.467 136.085C387.399 133.233 387.083 131.647 387.083 131.647Z",fill:"#F6F5F3"}),q.createElement("path",{d:"M59.2026 239.582L56.8536 244.61C56.8536 244.61 53.5766 245.947 51.4801 243.022C49.3944 240.094 47.2062 238.366 45.0358 239.541C45.0358 239.541 45.1205 235.438 47.9917 234.56C50.8737 233.679 51.2886 237.572 54.4895 238.887C57.6903 240.203 59.2026 239.582 59.2026 239.582Z",fill:"#FFD400"}),q.createElement("path",{d:"M97.0893 219.922L99.66 224.816C99.66 224.816 98.7064 228.188 95.073 228.044C91.4442 227.891 88.7121 228.548 88.3116 230.957C88.3116 230.957 85.0833 228.394 86.1533 225.618C87.2278 222.832 90.5967 224.877 93.6247 223.179C96.6527 221.48 97.0893 219.922 97.0893 219.922Z",fill:"#FDE5DE"}),q.createElement("path",{opacity:"0.4",d:"M364.354 174.747L361.815 179.682C361.815 179.682 358.489 180.893 356.506 177.89C354.523 174.886 352.413 173.074 350.199 174.165C350.199 174.165 350.441 170.069 353.344 169.301C356.257 168.53 356.534 172.434 359.671 173.873C362.819 175.311 364.354 174.747 364.354 174.747Z",fill:"#F6F5F3"}),q.createElement("path",{d:"M146.253 114.437L143.713 119.371C143.713 119.371 140.388 120.582 138.404 117.579C136.432 114.573 134.312 112.764 132.098 113.854C132.098 113.854 132.34 109.758 135.242 108.99C138.156 108.22 138.422 112.126 141.57 113.563C144.718 115 146.253 114.437 146.253 114.437Z",fill:"#F8DA3A"}),q.createElement("path",{d:"M35.3764 58.6078L37.7824 63.609C37.7824 63.609 36.7435 66.9924 33.1517 66.7639C29.5647 66.5254 26.8424 67.1261 26.378 69.5499C26.378 69.5499 23.2554 66.8876 24.3927 64.1087C25.5348 61.3198 28.8111 63.4625 31.8557 61.8173C34.9003 60.172 35.3764 58.6078 35.3764 58.6078Z",fill:"#F8DA3A"}),q.createElement("path",{d:"M359.71 106.661L363.724 102.801C363.724 102.801 367.262 102.714 368.148 106.194C369.033 109.673 370.439 112.063 372.884 111.733C372.884 111.733 371.325 115.542 368.32 115.344C365.316 115.145 366.334 111.354 363.842 108.99C361.35 106.626 359.71 106.661 359.71 106.661Z",fill:"#FFD400"}),q.createElement("ellipse",{opacity:"0.6",cx:"255.458",cy:"278.533",rx:"30.7582",ry:"3.98718",fill:"black",fillOpacity:"0.12"}),q.createElement("path",{d:"M279.016 276.475L276.864 210.751L231.535 265.665C231.535 265.665 249.131 287.286 279.016 276.475Z",fill:"#121E6A"}),q.createElement("path",{d:"M264.19 247.864C264.19 250.806 261.804 253.192 258.861 253.192C255.918 253.192 253.532 250.806 253.532 247.864C253.532 244.921 255.918 242.535 258.861 242.535C261.804 242.535 264.19 244.921 264.19 247.864Z",stroke:"white",strokeWidth:"3.36855"}),q.createElement("path",{d:"M277.725 239.117C272.704 239.356 268.496 235.433 268.257 230.411C268.018 225.388 272.082 222.382 277.102 222.143L277.725 239.117Z",fill:"white"}),q.createElement("path",{d:"M257.834 272.888C260.527 272.888 262.711 270.703 262.711 268.008C262.711 265.314 260.527 263.129 257.834 263.129C255.14 263.129 252.957 265.314 252.957 268.008C252.957 270.703 255.14 272.888 257.834 272.888Z",fill:"white"}))),q.createElement("defs",null,q.createElement("clipPath",{id:"clip0_215:32761"},q.createElement("rect",{width:"553.648",height:"311",fill:"white",transform:"translate(-2)"})),q.createElement("clipPath",{id:"clip1_215:32761"},q.createElement("rect",{width:"553.648",height:"311",fill:"white",transform:"translate(-2)"})),q.createElement("clipPath",{id:"clip2_215:32761"},q.createElement("rect",{width:"25.8624",height:"69.7103",fill:"white",transform:"translate(198.498 169.854) rotate(-15.5864)"})),q.createElement("clipPath",{id:"clip3_215:32761"},q.createElement("rect",{width:"43.3148",height:"112.144",fill:"white",transform:"translate(320.066 94.5531) rotate(31.0091)"})))),C4=FP,v4="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUwIiBoZWlnaHQ9IjMxMSIgdmlld0JveD0iMCAwIDU1MCAzMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMTU6MzI3NjEpIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzIxNTozMjc2MSkiPgo8cGF0aCBkPSJNLTIgMTQuODA5Nkg0MjUuMTk4VjMxMUgtMlYxNC44MDk2WiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC40Ii8+CjxyZWN0IHg9Ii04OC41Nzg2IiB5PSItMjUwLjYyMyIgd2lkdGg9IjY1MC40OCIgaGVpZ2h0PSI1ODIuMTI4IiBmaWxsPSIjMzk1MkVFIi8+CjxwYXRoIG9wYWNpdHk9IjAuMTIiIGQ9Ik01OTMuNzE5IDIxNy43NDJDNTk3LjY5IDE0Ni42OTEgNTQzLjAwNyA2NS4xNTg4IDQ2OS43NjkgNTUuOTE5MkM0NjguNDgxIDU1LjczNjYgNDY3LjE4OCA1NS41OTQgNDY1Ljg1MiA1NS40NDU2QzM2MC43NjMgNDMuOTc4IDM0NS41NDggMTcyLjIyMiAyNDkuMzkgMTgwLjg1M0MxNTMuMjggMTg5LjQ1MSA4NC41OTEyIDExMS42NTMgLTMyLjE0MjEgMTUyLjQxOEMtMTM2Ljk3MSAxODkuMDMgLTE3OC4yMzQgNDI4LjY2MiAxMjIuMTcyIDQ1Ni45OTVDMzYyLjYxIDQ3OS42NDQgNTgxLjg4OSA0MjkuNzIzIDU5My43MTkgMjE3Ljc0MloiIGZpbGw9IiNFM0U4RkYiLz4KPHJlY3QgeD0iLTg4LjU3ODYiIHk9IjI5Ni4xOSIgd2lkdGg9IjU5NC42NTkiIGhlaWdodD0iODguODU3MSIgZmlsbD0iI0ZCQUNDMiIvPgo8cGF0aCBkPSJNMjcxLjM3NiAzMDIuOTUxQzI3Mi4xMjEgMzAwLjU3MSAyNzIuNTQ2IDI5OC4wNzIgMjcyLjU0NiAyOTUuNTE0QzI3Mi41NDYgMjc3LjY0NyAyNTMuMTQyIDI2My4xNzEgMjI5LjE5MyAyNjMuMTcxQzIyMy40NzggMjYzLjE3MSAyMTguMDI5IDI2NC4wMDQgMjEzLjAzMiAyNjUuNTExQzIwOC40MDcgMjU1LjIxOSAxOTUuMzgzIDI0Ny44MjIgMTgwLjAxOSAyNDcuODIyQzE3OC41MDQgMjQ3LjgyMiAxNzcuMDQyIDI0Ny45MDEgMTc1LjU4IDI0OC4wNEMxNzIuMTI1IDIxOC43OSAxMzkuMjQ1IDE5NS44NjYgOTkuMTYxNSAxOTUuODY2QzU3LjMyMzkgMTk1Ljg2NiAyMy4zMjc0IDIyMC44NTMgMjIuNDc2OCAyNTEuOTI3QzMuOTUwMjUgMjU4LjYxIC04LjgzNDk2IDI3Mi43NjkgLTguODM0OTYgMjg5LjE2OEMtOC44MzQ5NiAyOTQuMDA3IC03LjcxODU4IDI5OC42NDcgLTUuNjcxODggMzAyLjk1MUgyNzEuMzc2WiIgZmlsbD0iI0ZCQUNDMiIvPgo8cGF0aCBkPSJNMjQyLjUzMSAyOTguMzk0QzI0Mi4wNTggMjk2Ljg3NSAyNDEuNzg4IDI5NS4yOCAyNDEuNzg4IDI5My42NDdDMjQxLjc4OCAyODIuMjQzIDI1NC4xMjEgMjczLjAwMiAyNjkuMzQ0IDI3My4wMDJDMjcyLjk3NiAyNzMuMDAyIDI3Ni40NCAyNzMuNTM0IDI3OS42MTYgMjc0LjQ5NkMyODIuNTU2IDI2Ny45MjcgMjkwLjgzNSAyNjMuMjA1IDMwMC42IDI2My4yMDVDMzAxLjU2MyAyNjMuMjA1IDMwMi40OTIgMjYzLjI1NiAzMDMuNDIyIDI2My4zNDVDMzA1LjYxOCAyNDQuNjc0IDMyNi41MTcgMjMwLjA0MiAzNTEuOTk2IDIzMC4wNDJDMzc4LjU4OSAyMzAuMDQyIDQwMC4xOTggMjQ1Ljk5MSA0MDAuNzM4IDI2NS44MjVDNDEyLjUxNCAyNzAuMDkxIDQyMC42NDEgMjc5LjEyOSA0MjAuNjQxIDI4OS41OTdDNDIwLjY0MSAyOTIuNjg1IDQxOS45MzIgMjk1LjY0NyA0MTguNjMxIDI5OC4zOTRIMjQyLjUzMVoiIGZpbGw9IiNGQkFDQzIiLz4KPHBhdGggZD0iTS0wLjIyNjU2MiAzMzEuNTA2QzIuOTkxIDMyNy40NTQgNC44MzQ5OCAzMjIuNzk4IDQuODM0OTggMzE3LjgzOUM0LjgzNDk4IDMwMi4yOTEgLTEzLjE5MDkgMjg5LjY5IC0zNS40MzE2IDI4OS42OUMtMzkuMDI1NSAyODkuNjkgLTQyLjUwNjUgMjkwLjAxOSAtNDUuODE4MiAyOTAuNjM3Qy01Mi44OTMgMjc3LjI2IC03MS4zMTQxIDI2Ny43MTEgLTkyLjkzMzkgMjY3LjcxMUMtMTE3LjQxNCAyNjcuNzExIC0xMzcuNzkyIDI3OS45NTcgLTE0Mi4yNTEgMjk2LjE0OUMtMTQ1LjM3NSAyOTUuNjA5IC0xNDguNjMgMjk1LjMyIC0xNTEuOTc5IDI5NS4zMkMtMTc0LjIyIDI5NS4zMiAtMTkyLjI0NiAzMDcuOTIxIC0xOTIuMjQ2IDMyMy40NjlDLTE5Mi4yNDYgMzI2LjI1NyAtMTkxLjY2MiAzMjguOTY3IC0xOTAuNTcxIDMzMS41MDZILTAuMjI2NTYyWiIgZmlsbD0iI0ZCQUNDMiIvPgo8cGF0aCBkPSJNNTkyLjE1NSAzMjEuMjUzQzU5NS4zNzIgMzE3LjIwMSA1OTcuMjE2IDMxMi41NDUgNTk3LjIxNiAzMDcuNTg2QzU5Ny4yMTYgMjkyLjAzOSA1NzkuMTkgMjc5LjQzOCA1NTYuOTUgMjc5LjQzOEM1NTMuMzU2IDI3OS40MzggNTQ5Ljg3NSAyNzkuNzY2IDU0Ni41NjMgMjgwLjM4NUM1MzkuNDg4IDI2Ny4wMDcgNTIxLjA2NyAyNTcuNDU4IDQ5OS40NDcgMjU3LjQ1OEM0NzQuOTY4IDI1Ny40NTggNDU0LjU5IDI2OS43MDQgNDUwLjEzIDI4NS44OTZDNDQ3LjAwNyAyODUuMzU3IDQ0My43NTIgMjg1LjA2NyA0NDAuNDAyIDI4NS4wNjdDNDE4LjE2MiAyODUuMDY3IDQwMC4xMzYgMjk3LjY2OCA0MDAuMTM2IDMxMy4yMTZDNDAwLjEzNiAzMTYuMDA0IDQwMC43MTkgMzE4LjcxNCA0MDEuODEgMzIxLjI1M0g1OTIuMTU1WiIgZmlsbD0iI0ZCQUNDMiIvPgo8ZyBvcGFjaXR5PSIwLjUiIGNsaXAtcGF0aD0idXJsKCNjbGlwMl8yMTU6MzI3NjEpIj4KPHBhdGggZD0iTTIwOS4wMSAxOTAuNzM4QzIxMS4wODkgMTkyLjgzMyAyMTQuNjY5IDE5NC4yMiAyMTcuODE5IDE5My41NThDMjE4LjA4OSAxOTMuNDk4IDIxOC4zNTggMTkzLjQyOCAyMTguNjI3IDE5My4zMzZDMjE5Ljk0OSAxOTIuODg5IDIyMS4xNjQgMTkyLjA0MSAyMjIuMTE3IDE5MC42NzhDMjIzLjU3MyAxODguNjAzIDIyNC40MTMgMTg1LjMyIDIyNC4wOTcgMTgwLjQ2M0MyMjMuNTcyIDE3Mi40MzQgMjIwLjIwMSAxNjkuMDAxIDIxNi45NjcgMTY3LjU3M0MyMTMuNzMzIDE2Ni4xNDUgMjEwLjYyNSAxNjYuNzMyIDIxMC42MjUgMTY2LjczMkMxOTguMDgxIDE2OS44MjcgMjA0LjQ3MyAxODYuMTg3IDIwOS4wMSAxOTAuNzM4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIxNy44MDMgMTkzLjIxQzIxNy44MDMgMTkzLjIxIDIxNi44MzQgMTk0LjcwMiAyMTcuMTMzIDE5NC44MjRDMjE3LjQzMiAxOTQuOTQ2IDIxNy40NDUgMTk0LjYwOCAyMTguMjE3IDE5NC43MDFDMjE4Ljk4OSAxOTQuNzk1IDIxOC44ODEgMTk0Ljc4OCAyMTkuMjczIDE5NC42MzVDMjE5LjY2NSAxOTQuNDgyIDIxOS43MTIgMTk0LjA1OCAyMTkuNzEyIDE5NC4wNThMMjE4LjYwNyAxOTIuOTE1TDIxNy44MDMgMTkzLjIxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIxOC42OTkgMTkzLjc3NEMyMTYuNjQ1IDE5NS44NTIgMjE1Ljg0NiAxOTkuMTAxIDIxNy4yMjQgMjAxLjUzNEMyMTcuOTQ4IDIwMi44MTggMjE5LjE3IDIwMy43NjggMjIwLjQwOCAyMDQuNjM3QzIyMS42NDUgMjA1LjUwNiAyMjIuOTMyIDIwNi4zNCAyMjMuODU3IDIwNy40OTdDMjI0Ljc5MyAyMDguNjUxIDIyNS4zMjcgMjEwLjIwMyAyMjQuODIzIDIxMS42MjRDMjI0LjMyOCAyMTMuMDMxIDIyMi41NjIgMjE0LjA4MyAyMjEuMTI3IDIxMy41MzhDMjIwLjg1NCAyMTMuNDMyIDIyMC42MDcgMjEzLjI4NiAyMjAuNDM0IDIxMy4wNjdDMjE5LjkwOSAyMTIuNDIzIDIyMC4yNTIgMjExLjM4MiAyMjAuOTY5IDIxMC44OTNDMjIyLjExNiAyMTAuMTIgMjIzLjgwNCAyMTAuNjAxIDIyNC42MzcgMjExLjYyN0MyMjUuNDkyIDIxMi42NDggMjI1LjY1OSAyMTQuMDQxIDIyNS42NDEgMjE1LjM1QzIyNS42MjYgMjE2LjY2OCAyMjUuNDYyIDIxOC4wMDMgMjI1Ljc1MSAyMTkuMjc3QzIyNi40NDUgMjIyLjM3NyAyMjkuNjIxIDIyNC40ODUgMjMwLjQzOSAyMjcuNTY1QzIzMC45MjEgMjI5LjM3MSAyMzAuNTQ3IDIzMS4zOTQgMjMxLjM0IDIzMy4wODgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC40NTU2NzgiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L2c+CjxnIG9wYWNpdHk9IjAuNSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAzXzIxNTozMjc2MSkiPgo8cGF0aCBkPSJNMzM1Ljc1MiAxMjYuNTUyQzMzNS4zOTcgMTI3LjI3MSAzMzUuMDM3IDEyNy45NjYgMzM0LjY3MiAxMjguNjM5QzMzMi43NTUgMTMyLjA4NiAzMzAuNTAyIDEzNC45NjMgMzI4LjU3MSAxMzYuNTk3QzMyNS4yNSAxMzkuNDE0IDMxOS44NjUgMTQwLjk5IDMxNS4zNyAxMzkuNTY5QzMxNS4yNjggMTM5LjU0NyAzMTUuMTYgMTM5LjUwMSAzMTUuMDY2IDEzOS40NjRDMzE0Ljc4OSAxMzkuMzc1IDMxNC41MTYgMTM5LjI1IDMxNC4yNDMgMTM5LjEyNEwzMTQuMjI4IDEzOS4xMTZDMzEzLjQ3OSAxMzguNzgyIDMxMi43NjIgMTM4LjMzMiAzMTIuMDk2IDEzNy43OTVDMzA4LjYwNyAxMzQuOTYxIDMwNi41MjkgMTI5LjIyOSAzMDguMTIyIDExOS4yNkMzMDkuNDM5IDExMS4xMDUgMzEyLjQxMyAxMDYuMzUyIDMxNS43MzkgMTAzLjY1NUMzMjIuMDY3IDk4LjUxMTUgMzI5LjY3NCAxMDAuNzE3IDMyOS42NzQgMTAwLjcxN0MzNDEuNzY3IDEwNS4wMzUgMzQwLjIzNiAxMTcuMjU0IDMzNS43NTIgMTI2LjU1MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMTQuMjExIDEzOS4xNDRDMzE0LjIxMSAxMzkuMTQ0IDMxMS43MiAxMzkuOTM3IDMxMS45MzMgMTQwLjM1NkMzMTIuMTUxIDE0MC43OTggMzEyLjQ4OCAxNDAuMzk5IDMxMy4yNTYgMTQxLjI0OUMzMTQuMDI0IDE0Mi4wOTggMzEzLjkxMyAxNDEuOTkzIDMxNC41MDMgMTQyLjE3M0MzMTUuMDg0IDE0Mi4zNjcgMzE1LjUzNSAxNDEuOTM5IDMxNS41MzUgMTQxLjkzOUwzMTUuMzcgMTM5LjU2OUwzMTQuMjExIDEzOS4xNDRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzEzLjIxOSAxNDEuMjQ2QzMwOC45MzMgMTQzLjYzNyAzMDYuMTM3IDE1MC4wMyAzMDUuODU2IDE1NC43NTJDMzA1LjcyMiAxNTcuMDM5IDMwNi40MTYgMTU5LjQ5NCAzMDguMjA0IDE2MC45MzdDMzA5LjEgMTYxLjY3IDMxMC4yMjIgMTYyLjA5MiAzMTEuMzcgMTYyLjI3OEMzMTIuNzU1IDE2Mi40ODkgMzE0LjQ2NSAxNjIuMTU5IDMxNS4wMjggMTYwLjg2N0MzMTUuNDU0IDE1OS45IDMxNS4wMiAxNTguNjg4IDMxNC4yIDE1OC4wMjFDMzEzLjM4MSAxNTcuMzU0IDMxMi4yNTUgMTU3LjE2MiAzMTEuMTk4IDE1Ny4yNDVDMzA1LjI0MiAxNTcuNzQgMzAyLjUxNiAxNjUuMDQ5IDMwMi4wNDQgMTcwLjEyMUMzMDEuNjkxIDE3My45NjUgMzAyLjE1MiAxNzguMTYzIDMwMy40NDkgMTgxLjc3NkMzMDUuODM2IDE4OC40MTEgMzA2LjE0NCAxOTMuNjA0IDMwMi4zNjggMTk5Ljc1N0MzMDEuMTYzIDIwMS43MyAyOTkuODgzIDIwMy42OTcgMjk5LjE0NSAyMDUuODkzQzI5OC40MjEgMjA4LjA5NyAyOTguMzA2IDIxMC42MDkgMjk5LjQxNSAyMTIuNjM0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNDU1Njc4IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPgo8cGF0aCBkPSJNMTM2LjAyNCA1MS40NDc1QzEzNi40MDIgNTMuMzQ2MSAxMzUuMTQ2IDU1LjE5OTQgMTMzLjIyMyA1NS41ODE5QzEzMS4zIDU1Ljk2NDQgMTI5LjQzMSA1NC43MzI2IDEyOS4wNTMgNTIuODM0QzEyOC42NzUgNTAuOTM1NCAxMjkuOTMxIDQ5LjA4MjEgMTMxLjg1NCA0OC42OTk2QzEzMy43NzcgNDguMzE3MSAxMzUuNjQ2IDQ5LjU0ODkgMTM2LjAyNCA1MS40NDc1WiIgZmlsbD0iI0ZERTVERSIvPgo8cGF0aCBkPSJNNDQuMzI5NiAxOTkuMzg4QzQ0LjY0NDUgMjAwLjk3MiA0My41OTc0IDIwMi41MzEgNDEuOTc2MSAyMDIuODUzQzQwLjM1NDkgMjAzLjE3NSAzOC43OTA5IDIwMi4xMzYgMzguNDc2IDIwMC41NTNDMzguMTYxMSAxOTguOTY5IDM5LjIwODMgMTk3LjQxIDQwLjgyOTUgMTk3LjA4OEM0Mi40NTA3IDE5Ni43NjUgNDQuMDE0NyAxOTcuODA1IDQ0LjMyOTYgMTk5LjM4OFoiIHN0cm9rZT0iI0ZERTVERSIgc3Ryb2tlLXdpZHRoPSIxLjEzOTE5Ii8+CjxwYXRoIGQ9Ik0xNjUuMDAyIDE4My40MThMMTY1LjAwNSAxODMuNDE3QzE2Ni42MiAxODMuMDg2IDE2OC4xODUgMTg0LjEyMiAxNjguNTAyIDE4NS43MThDMTY4LjgxNyAxODcuMzAxIDE2Ny43NyAxODguODYgMTY2LjE0OSAxODkuMTgzQzE2NC41MjcgMTg5LjUwNSAxNjIuOTYzIDE4OC40NjYgMTYyLjY0OCAxODYuODgyQzE2Mi4zMzMgMTg1LjI5OSAxNjMuMzgxIDE4My43NCAxNjUuMDAyIDE4My40MThaIiBzdHJva2U9IiNGREU1REUiIHN0cm9rZS13aWR0aD0iMS4xMzkxOSIvPgo8cGF0aCBkPSJNMjc2LjY0MyA2OC40MzQzTDI3Ni42NDYgNjguNDMzN0MyNzguMjYxIDY4LjEwMyAyNzkuODI2IDY5LjEzODkgMjgwLjE0MyA3MC43MzQ3QzI4MC40NTggNzIuMzE4IDI3OS40MTEgNzMuODc2OSAyNzcuNzkgNzQuMTk5M0MyNzYuMTY4IDc0LjUyMTggMjc0LjYwNCA3My40ODIzIDI3NC4yODkgNzEuODk5QzI3My45NzUgNzAuMzE1NiAyNzUuMDIyIDY4Ljc1NjggMjc2LjY0MyA2OC40MzQzWiIgc3Ryb2tlPSIjRkRFNURFIiBzdHJva2Utd2lkdGg9IjEuMTM5MTkiLz4KPHBhdGggb3BhY2l0eT0iMC40IiBkPSJNMzg3LjA4MyAxMzEuNjQ3TDM5MS42MTggMTM0Ljg2MUMzOTEuNjE4IDEzNC44NjEgMzkyLjMwMSAxMzguMjkxIDM4OC45ODMgMTM5Ljc3QzM4NS42NjUgMTQxLjI0OCAzODMuNTI1IDE0My4wNTMgMzg0LjI1OSAxNDUuMzc0QzM4NC4yNTkgMTQ1LjM3NCAzODAuMTk2IDE0NC41MzQgMzc5Ljg5MiAxNDEuNTc4QzM3OS41NzcgMTM4LjYyNCAzODMuNTM1IDEzOC45MzYgMzg1LjQ2NyAxMzYuMDg1QzM4Ny4zOTkgMTMzLjIzMyAzODcuMDgzIDEzMS42NDcgMzg3LjA4MyAxMzEuNjQ3WiIgZmlsbD0iI0Y2RjVGMyIvPgo8cGF0aCBkPSJNNTkuMjAyNiAyMzkuNTgyTDU2Ljg1MzYgMjQ0LjYxQzU2Ljg1MzYgMjQ0LjYxIDUzLjU3NjYgMjQ1Ljk0NyA1MS40ODAxIDI0My4wMjJDNDkuMzk0NCAyNDAuMDk0IDQ3LjIwNjIgMjM4LjM2NiA0NS4wMzU4IDIzOS41NDFDNDUuMDM1OCAyMzkuNTQxIDQ1LjEyMDUgMjM1LjQzOCA0Ny45OTE3IDIzNC41NkM1MC44NzM3IDIzMy42NzkgNTEuMjg4NiAyMzcuNTcyIDU0LjQ4OTUgMjM4Ljg4N0M1Ny42OTAzIDI0MC4yMDMgNTkuMjAyNiAyMzkuNTgyIDU5LjIwMjYgMjM5LjU4MloiIGZpbGw9IiNGRkQ0MDAiLz4KPHBhdGggZD0iTTk3LjA4OTMgMjE5LjkyMkw5OS42NiAyMjQuODE2Qzk5LjY2IDIyNC44MTYgOTguNzA2NCAyMjguMTg4IDk1LjA3MyAyMjguMDQ0QzkxLjQ0NDIgMjI3Ljg5MSA4OC43MTIxIDIyOC41NDggODguMzExNiAyMzAuOTU3Qzg4LjMxMTYgMjMwLjk1NyA4NS4wODMzIDIyOC4zOTQgODYuMTUzMyAyMjUuNjE4Qzg3LjIyNzggMjIyLjgzMiA5MC41OTY3IDIyNC44NzcgOTMuNjI0NyAyMjMuMTc5Qzk2LjY1MjcgMjIxLjQ4IDk3LjA4OTMgMjE5LjkyMiA5Ny4wODkzIDIxOS45MjJaIiBmaWxsPSIjRkRFNURFIi8+CjxwYXRoIG9wYWNpdHk9IjAuNCIgZD0iTTM2NC4zNTQgMTc0Ljc0N0wzNjEuODE1IDE3OS42ODJDMzYxLjgxNSAxNzkuNjgyIDM1OC40ODkgMTgwLjg5MyAzNTYuNTA2IDE3Ny44OUMzNTQuNTIzIDE3NC44ODYgMzUyLjQxMyAxNzMuMDc0IDM1MC4xOTkgMTc0LjE2NUMzNTAuMTk5IDE3NC4xNjUgMzUwLjQ0MSAxNzAuMDY5IDM1My4zNDQgMTY5LjMwMUMzNTYuMjU3IDE2OC41MyAzNTYuNTM0IDE3Mi40MzQgMzU5LjY3MSAxNzMuODczQzM2Mi44MTkgMTc1LjMxMSAzNjQuMzU0IDE3NC43NDcgMzY0LjM1NCAxNzQuNzQ3WiIgZmlsbD0iI0Y2RjVGMyIvPgo8cGF0aCBkPSJNMTQ2LjI1MyAxMTQuNDM3TDE0My43MTMgMTE5LjM3MUMxNDMuNzEzIDExOS4zNzEgMTQwLjM4OCAxMjAuNTgyIDEzOC40MDQgMTE3LjU3OUMxMzYuNDMyIDExNC41NzMgMTM0LjMxMiAxMTIuNzY0IDEzMi4wOTggMTEzLjg1NEMxMzIuMDk4IDExMy44NTQgMTMyLjM0IDEwOS43NTggMTM1LjI0MiAxMDguOTlDMTM4LjE1NiAxMDguMjIgMTM4LjQyMiAxMTIuMTI2IDE0MS41NyAxMTMuNTYzQzE0NC43MTggMTE1IDE0Ni4yNTMgMTE0LjQzNyAxNDYuMjUzIDExNC40MzdaIiBmaWxsPSIjRjhEQTNBIi8+CjxwYXRoIGQ9Ik0zNS4zNzY0IDU4LjYwNzhMMzcuNzgyNCA2My42MDlDMzcuNzgyNCA2My42MDkgMzYuNzQzNSA2Ni45OTI0IDMzLjE1MTcgNjYuNzYzOUMyOS41NjQ3IDY2LjUyNTQgMjYuODQyNCA2Ny4xMjYxIDI2LjM3OCA2OS41NDk5QzI2LjM3OCA2OS41NDk5IDIzLjI1NTQgNjYuODg3NiAyNC4zOTI3IDY0LjEwODdDMjUuNTM0OCA2MS4zMTk4IDI4LjgxMTEgNjMuNDYyNSAzMS44NTU3IDYxLjgxNzNDMzQuOTAwMyA2MC4xNzIgMzUuMzc2NCA1OC42MDc4IDM1LjM3NjQgNTguNjA3OFoiIGZpbGw9IiNGOERBM0EiLz4KPHBhdGggZD0iTTM1OS43MSAxMDYuNjYxTDM2My43MjQgMTAyLjgwMUMzNjMuNzI0IDEwMi44MDEgMzY3LjI2MiAxMDIuNzE0IDM2OC4xNDggMTA2LjE5NEMzNjkuMDMzIDEwOS42NzMgMzcwLjQzOSAxMTIuMDYzIDM3Mi44ODQgMTExLjczM0MzNzIuODg0IDExMS43MzMgMzcxLjMyNSAxMTUuNTQyIDM2OC4zMiAxMTUuMzQ0QzM2NS4zMTYgMTE1LjE0NSAzNjYuMzM0IDExMS4zNTQgMzYzLjg0MiAxMDguOTlDMzYxLjM1IDEwNi42MjYgMzU5LjcxIDEwNi42NjEgMzU5LjcxIDEwNi42NjFaIiBmaWxsPSIjRkZENDAwIi8+CjxlbGxpcHNlIG9wYWNpdHk9IjAuNiIgY3g9IjI1NS40NTgiIGN5PSIyNzguNTMzIiByeD0iMzAuNzU4MiIgcnk9IjMuOTg3MTgiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMTIiLz4KPHBhdGggZD0iTTI3OS4wMTYgMjc2LjQ3NUwyNzYuODY0IDIxMC43NTFMMjMxLjUzNSAyNjUuNjY1QzIzMS41MzUgMjY1LjY2NSAyNDkuMTMxIDI4Ny4yODYgMjc5LjAxNiAyNzYuNDc1WiIgZmlsbD0iIzEyMUU2QSIvPgo8cGF0aCBkPSJNMjY0LjE5IDI0Ny44NjRDMjY0LjE5IDI1MC44MDYgMjYxLjgwNCAyNTMuMTkyIDI1OC44NjEgMjUzLjE5MkMyNTUuOTE4IDI1My4xOTIgMjUzLjUzMiAyNTAuODA2IDI1My41MzIgMjQ3Ljg2NEMyNTMuNTMyIDI0NC45MjEgMjU1LjkxOCAyNDIuNTM1IDI1OC44NjEgMjQyLjUzNUMyNjEuODA0IDI0Mi41MzUgMjY0LjE5IDI0NC45MjEgMjY0LjE5IDI0Ny44NjRaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMuMzY4NTUiLz4KPHBhdGggZD0iTTI3Ny43MjUgMjM5LjExN0MyNzIuNzA0IDIzOS4zNTYgMjY4LjQ5NiAyMzUuNDMzIDI2OC4yNTcgMjMwLjQxMUMyNjguMDE4IDIyNS4zODggMjcyLjA4MiAyMjIuMzgyIDI3Ny4xMDIgMjIyLjE0M0wyNzcuNzI1IDIzOS4xMTdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjU3LjgzNCAyNzIuODg4QzI2MC41MjcgMjcyLjg4OCAyNjIuNzExIDI3MC43MDMgMjYyLjcxMSAyNjguMDA4QzI2Mi43MTEgMjY1LjMxNCAyNjAuNTI3IDI2My4xMjkgMjU3LjgzNCAyNjMuMTI5QzI1NS4xNCAyNjMuMTI5IDI1Mi45NTcgMjY1LjMxNCAyNTIuOTU3IDI2OC4wMDhDMjUyLjk1NyAyNzAuNzAzIDI1NS4xNCAyNzIuODg4IDI1Ny44MzQgMjcyLjg4OFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMTU6MzI3NjEiPgo8cmVjdCB3aWR0aD0iNTUzLjY0OCIgaGVpZ2h0PSIzMTEiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8yMTU6MzI3NjEiPgo8cmVjdCB3aWR0aD0iNTUzLjY0OCIgaGVpZ2h0PSIzMTEiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMikiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMl8yMTU6MzI3NjEiPgo8cmVjdCB3aWR0aD0iMjUuODYyNCIgaGVpZ2h0PSI2OS43MTAzIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTk4LjQ5OCAxNjkuODU0KSByb3RhdGUoLTE1LjU4NjQpIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDNfMjE1OjMyNzYxIj4KPHJlY3Qgd2lkdGg9IjQzLjMxNDgiIGhlaWdodD0iMTEyLjE0NCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyMC4wNjYgOTQuNTUzMSkgcm90YXRlKDMxLjAwOTEpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";var DP=e=>q.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 14 3",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:`M13.1875 0.125H0.8125C0.496094 0.125 0.25 0.40625 0.25 0.6875V1.8125C0.25 2.12891 0.496094
      2.375 0.8125 2.375H13.1875C13.4688 2.375 13.75 2.12891 13.75 1.8125V0.6875C13.75 0.40625
      13.4688 0.125 13.1875 0.125Z`,fill:"#A5A9B5"})),sl=DP;var zP=e=>q.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:`M14.1875 0.375H1.8125C0.863281 0.375 0.125 1.14844 0.125 2.0625V14.4375C0.125 15.3867
      0.863281 16.125 1.8125 16.125H14.1875C15.1016 16.125 15.875 15.3867 15.875
      14.4375V2.0625C15.875 1.14844 15.1016 0.375 14.1875 0.375ZM14.1875
      14.4375H1.8125V2.0625H14.1875V14.4375ZM4.34375 12.75H4.90625C5.1875 12.75 5.46875 12.5039
      5.46875 12.1875V7.6875C5.46875 7.40625 5.1875 7.125 4.90625 7.125H4.34375C4.02734 7.125
      3.78125 7.40625 3.78125 7.6875V12.1875C3.78125 12.5039 4.02734 12.75 4.34375 12.75ZM7.71875
      12.75H8.28125C8.5625 12.75 8.84375 12.5039 8.84375 12.1875V4.3125C8.84375 4.03125 8.5625
      3.75 8.28125 3.75H7.71875C7.40234 3.75 7.15625 4.03125 7.15625 4.3125V12.1875C7.15625
      12.5039 7.40234 12.75 7.71875 12.75ZM11.0938 12.75H11.6562C11.9375 12.75 12.2188 12.5039
      12.2188 12.1875V9.9375C12.2188 9.65625 11.9375 9.375 11.6562 9.375H11.0938C10.7773 9.375
      10.5312 9.65625 10.5312 9.9375V12.1875C10.5312 12.5039 10.7773 12.75 11.0938 12.75Z`,fill:"#292B32"})),ll=zP;var OP=e=>q.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:`M8 16C12.3857 16 16 12.3793 16 7.99581C16 3.62074 12.3774 0 8 0C3.61426 0 0 3.62074 0
      7.99581C0 12.3793 3.62264 16 8 16ZM5.12369 11.4573C4.79665 11.4573 4.54507 11.1975 4.54507
      10.879C4.54507 10.7197 4.60377 10.5773 4.71279 10.4767L7.1782 8.00419L4.71279 5.53169C4.60377
      5.43112 4.54507 5.28863 4.54507 5.12939C4.54507 4.80251 4.79665 4.55946 5.12369
      4.55946C5.28302 4.55946 5.41719 4.61812 5.52621 4.72708L8 7.1912L10.4822 4.72708C10.5996
      4.60136 10.7338 4.54269 10.8847 4.54269C11.2034 4.54269 11.4633 4.80251 11.4633
      5.12101C11.4633 5.28025 11.413 5.40597 11.2872 5.52331L8.81342 8.00419L11.2872
      10.4599C11.3962 10.5773 11.4549 10.7114 11.4549 10.879C11.4549 11.1975 11.2034 11.4573
      10.8763 11.4573C10.7086 11.4573 10.566 11.3903 10.457 11.2813L8 8.81718L5.53459
      11.2813C5.43396 11.3903 5.28302 11.4573 5.12369 11.4573Z`,fill:"#898E9E"})),ml=OP;function _P(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},e),q.createElement("path",{fill:"#fff",d:"M11.121 5.781c.527-.527 1.441-.176 1.441.598v11.777c0 .774-.914 1.125-1.44.598l-3.13-3.129H4.406c-.492 0-.843-.352-.843-.844V9.72c0-.457.351-.844.843-.844h3.586l3.13-3.094zm9.316 6.469c0 2.25-1.16 4.29-3.023 5.52-.422.246-.95.105-1.16-.282a.845.845 0 01.246-1.16 4.807 4.807 0 002.25-4.078 4.792 4.792 0 00-2.25-4.043.845.845 0 01-.246-1.16.824.824 0 011.16-.281c1.863 1.23 3.023 3.27 3.023 5.484zm-4.992-2.672c.985.527 1.617 1.582 1.617 2.672 0 1.125-.632 2.18-1.617 2.707-.422.246-.914.105-1.16-.316a.869.869 0 01.352-1.16c.422-.247.738-.704.738-1.231 0-.492-.316-.95-.738-1.195a.869.869 0 01-.352-1.16c.246-.422.738-.563 1.16-.317z"}))}var dl=_P;function UP(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},e),q.createElement("path",{fill:"#fff",d:"M21.781 18.344a.467.467 0 01.094.687l-.594.782c-.187.218-.5.28-.718.093L2.188 5.688A.468.468 0 012.094 5l.625-.781a.468.468 0 01.687-.094l4.75 3.656L9.72 6.25c.469-.469 1.281-.156 1.281.531V9.97l2.469 1.937a1.234 1.234 0 00-.625-.969.773.773 0 01-.313-1.03c.219-.376.656-.5 1.031-.282A2.739 2.739 0 0115 12c0 .344-.094.625-.188.938l1.22.937c.28-.563.468-1.188.468-1.875a4.26 4.26 0 00-2-3.594.751.751 0 01-.219-1.031c.219-.344.688-.469 1.031-.25C16.97 8.188 18 10.031 18 12a5.727 5.727 0 01-.75 2.813l1.188.937c.656-1.125 1.03-2.406 1.03-3.719 0-2.469-1.218-4.781-3.312-6.125-.343-.218-.437-.687-.218-1.062A.795.795 0 0117 4.625c2.5 1.656 4 4.406 4 7.375 0 1.688-.5 3.281-1.375 4.656l2.156 1.688zM3 9.75c0-.25.125-.469.344-.625L11 15.031v2.219c0 .688-.813 1-1.281.531L6.938 15H3.75a.722.722 0 01-.75-.75v-4.5z"}))}var cl=UP;var HP=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0
      4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2
      16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8
      0 16 7.2 16 16v288z`})),$n=HP;var jP=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48
      48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336
      0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z`})),oo=jP;function VP(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20"},e),q.createElement("path",{fill:"#A5A9B5",d:"M17.793 11.025c.148.854.037 1.67-.334 2.338a3.437 3.437 0 01-.668 2.487c-.037 2.078-1.299 3.525-4.156 3.525h-.854c-3.785 0-4.935-1.41-6.605-1.447-.112.482-.594.853-1.114.853H1.688c-.667 0-1.187-.52-1.187-1.187V8.687c0-.63.52-1.187 1.188-1.187h3.636c.705-.594 1.707-2.227 2.56-3.08.52-.52.372-4.045 2.673-4.045 2.115 0 3.525 1.188 3.525 3.896 0 .706-.148 1.262-.334 1.745h1.373c1.781 0 3.191 1.521 3.191 3.154 0 .705-.185 1.299-.519 1.855zm-2.3 2.004c.816-.742.704-1.892.185-2.449.37 0 .853-.705.853-1.373-.037-.705-.63-1.41-1.41-1.41h-3.86c0-1.41 1.04-2.078 1.04-3.526 0-.89 0-2.115-1.744-2.115-.705.705-.372 2.487-1.41 3.526-1.002 1.002-2.45 3.6-3.526 3.6H5.25v6.939c1.967 0 3.71 1.373 6.346 1.373h1.41c1.299 0 2.264-.631 1.967-2.412.556-.334 1.002-1.373.52-2.153zM3.765 16.406a.903.903 0 00-.891-.89.88.88 0 00-.89.89c0 .52.37.89.89.89a.88.88 0 00.89-.89z"}))}var Ir=VP;var $P=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 448 512",fill:"currentColor"},e),q.createElement("path",{d:`M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0
      12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41
      80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0
      48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6
      6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12
      12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z`})),Gn=$P;function GP(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},e),q.createElement("path",{fill:"#fff",d:"M4.125 9.578v-4.36c0-.456.352-.843.844-.843h4.36c.21 0 .421.21.421.422v.844c0 .246-.21.421-.422.421H5.813v3.516c0 .246-.211.422-.422.422h-.844a.406.406 0 01-.422-.422zM14.25 4.797c0-.211.176-.422.422-.422h4.36c.456 0 .843.387.843.844v4.36c0 .245-.21.421-.422.421h-.844a.406.406 0 01-.422-.422V6.063h-3.515a.406.406 0 01-.422-.422v-.844zm5.203 9.703c.211 0 .422.21.422.422v4.36a.833.833 0 01-.844.843h-4.36a.406.406 0 01-.421-.422v-.844c0-.21.176-.422.422-.422h3.515v-3.515c0-.211.176-.422.422-.422h.844zM9.75 19.703c0 .246-.21.422-.422.422h-4.36c-.491 0-.843-.352-.843-.844v-4.36c0-.21.176-.421.422-.421h.844c.21 0 .421.21.421.422v3.515h3.516c.211 0 .422.211.422.422v.844z"}))}var N4=GP;function qP(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24"},e),q.createElement("path",{fill:"inherit",d:"M14.04 10.21c1.792 1.794 1.898 4.677.316 6.575-.211.281-.07.14-2.954 3.024-1.933 1.933-5.062 1.933-6.96 0-1.934-1.899-1.934-5.028 0-6.961l2.214-2.215c.246-.246.703-.07.703.281.036.387.106.984.176 1.336.035.14 0 .281-.105.387l-1.617 1.617a2.95 2.95 0 000 4.184 2.95 2.95 0 004.183 0l2.637-2.637a2.95 2.95 0 000-4.184c-.176-.21-.563-.457-.809-.562-.14-.106-.246-.282-.21-.457.034-.387.21-.774.527-1.055l.14-.14a.435.435 0 01.492-.106c.457.246.88.527 1.266.914zm5.483-5.483c1.934 1.898 1.934 5.027 0 6.96l-2.214 2.215c-.247.246-.704.07-.704-.28a15.366 15.366 0 00-.175-1.337.397.397 0 01.105-.387l1.617-1.617a2.95 2.95 0 000-4.183 2.95 2.95 0 00-4.183 0l-2.637 2.636a2.95 2.95 0 000 4.184c.176.21.563.457.809.563.14.105.246.28.21.457a1.607 1.607 0 01-.527 1.054l-.14.14a.435.435 0 01-.493.106 5.266 5.266 0 01-1.265-.914c-1.793-1.793-1.899-4.676-.317-6.574.211-.281.07-.14 2.954-3.023 1.933-1.934 5.062-1.934 6.96 0z"}))}var pl=qP;var ZP=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 320 512",fill:"currentColor"},e),q.createElement("path",{d:`M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34
      0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4
      52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4
      256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160
      303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34
      0-22.58L207.6 256z`})),Qe=ZP;var WP=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M512 256c0-37.7-23.7-69.9-57.1-82.4 14.7-32.4
      8.8-71.9-17.9-98.6-26.7-26.7-66.2-32.6-98.6-17.9C325.9 23.7 293.7 0 256 0s-69.9 23.7-82.4
      57.1c-32.4-14.7-72-8.8-98.6 17.9-26.7 26.7-32.6 66.2-17.9 98.6C23.7 186.1 0 218.3 0 256s23.7
      69.9 57.1 82.4c-14.7 32.4-8.8 72 17.9 98.6 26.6 26.6 66.1 32.7 98.6 17.9 12.5 33.3 44.7 57.1
      82.4 57.1s69.9-23.7 82.4-57.1c32.6 14.8 72 8.7 98.6-17.9 26.7-26.7 32.6-66.2 17.9-98.6
      33.4-12.5 57.1-44.7 57.1-82.4zm-144.8-44.25L236.16 341.74c-4.31
      4.28-11.28 4.25-15.55-.06l-75.72-76.33c-4.28-4.31-4.25-11.28.06-15.56l26.03-25.82c4.31-4.28
      11.28-4.25 15.56.06l42.15 42.49 97.2-96.42c4.31-4.28 11.28-4.25 15.55.06l25.82 26.03c4.28
      4.32 4.26 11.29-.06 15.56z`})),To=WP;function YP(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16"},e),q.createElement("circle",{cx:"8",cy:"8",r:"7.25",fill:"#1054DE",stroke:"#fff",strokeWidth:"1.5"}),q.createElement("path",{fill:"#fff",d:"M11.438 7.625c.156 0 .312.156.312.313v.625a.321.321 0 01-.313.312H8.626v2.813a.321.321 0 01-.313.312h-.624a.308.308 0 01-.313-.313V8.876H4.562a.309.309 0 01-.312-.313v-.624c0-.157.137-.313.313-.313h2.812V4.812c0-.156.137-.312.313-.312h.625c.156 0 .312.156.312.313v2.812h2.813z"}))}var qn=YP;function QP(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},e),q.createElement("path",{fill:"#292B32",d:"M19.453 7.61H4.547a.406.406 0 01-.422-.423V6.063c0-.21.176-.421.422-.421h14.906c.211 0 .422.21.422.421v1.125c0 .247-.21.422-.422.422zm0 5.624H4.547a.406.406 0 01-.422-.421v-1.126c0-.21.176-.421.422-.421h14.906c.211 0 .422.21.422.421v1.126c0 .246-.21.421-.422.421zm0 5.625H4.547a.406.406 0 01-.422-.422v-1.125c0-.21.176-.421.422-.421h14.906c.211 0 .422.21.422.422v1.125c0 .246-.21.421-.422.421z"}))}var en=QP;function KP(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",fill:"none",viewBox:"0 0 25 24"},e),q.createElement("path",{fill:"#fff",d:"M9.688 20.09H6.312c-.949 0-1.687-.738-1.687-1.688V6.027c0-.914.738-1.687 1.688-1.687h3.375c.914 0 1.687.773 1.687 1.687v12.375c0 .95-.773 1.688-1.688 1.688zm10.687-1.688c0 .95-.773 1.688-1.688 1.688h-3.375c-.949 0-1.687-.738-1.687-1.688V6.027c0-.914.738-1.687 1.688-1.687h3.374c.915 0 1.688.773 1.688 1.687v12.375z"}))}var Di=KP;function JP(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",fill:"none",viewBox:"0 0 17 17"},e),q.createElement("circle",{cx:"8.842",cy:"8.253",r:"7.25",fill:"#FA4D30",stroke:"#fff",strokeWidth:"1.5"}),q.createElement("path",{fill:"#fff",d:"M10.092 11.003c0 .703-.563 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25 0-.688.547-1.25 1.25-1.25.687 0 1.25.562 1.25 1.25zm-2.36-6.344a.378.378 0 01.375-.406h1.454c.218 0 .39.187.375.406l-.204 4.25a.387.387 0 01-.375.344H8.311a.387.387 0 01-.375-.344l-.204-4.25z"}))}var zi=JP;function XP(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},e),q.createElement("path",{fill:"#fff",d:"M16 27.91c-6.422 0-11.625-5.202-11.625-11.624C4.375 9.864 9.578 4.66 16 4.66s11.625 5.203 11.625 11.625S22.422 27.91 16 27.91zm-5.344-10.827l6.328 6.375c.47.422 1.172.422 1.594 0l.797-.797c.422-.422.422-1.172 0-1.594l-4.781-4.781 4.781-4.735c.422-.468.422-1.171 0-1.593l-.797-.797c-.422-.422-1.172-.422-1.594 0l-6.328 6.328c-.469.469-.469 1.172 0 1.594z",opacity:"0.7"}))}var Oi=XP;function RP(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 16 17"},e),q.createElement("path",{fill:"#fff",d:"M8.176 15.914c-.14.176-.422.176-.598 0L.23 8.566a.405.405 0 010-.597L7.578.62c.176-.176.457-.176.598 0l.703.668c.176.176.176.457 0 .598l-5.45 5.449h12.024c.211 0 .422.21.422.422v.984c0 .246-.21.422-.422.422H3.43l5.449 5.484c.176.141.176.422 0 .598l-.703.668z"}))}var ul=RP;function eT(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},e),q.createElement("path",{fill:"#fff",d:"M16 4.66c6.422 0 11.625 5.204 11.625 11.626S22.422 27.91 16 27.91 4.375 22.708 4.375 16.286 9.578 4.66 16 4.66zm5.297 10.829L14.969 9.16c-.422-.422-1.172-.422-1.594 0l-.797.797c-.422.421-.422 1.171 0 1.593l4.781 4.735-4.78 4.781c-.423.422-.423 1.172 0 1.594l.796.797c.422.422 1.172.422 1.594 0l6.328-6.375c.469-.422.469-1.125 0-1.594z",opacity:"0.7"}))}var fl=eT;function tT(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20"},e),q.createElement("path",{fill:"#A5A9B5",d:"M10 6.5c1.938 0 3.5 1.594 3.5 3.5 0 1.938-1.563 3.5-3.5 3.5A3.494 3.494 0 016.5 10c0-.281.063-.688.156-.969.188.125.594.219.844.219.938 0 1.75-.781 1.75-1.75-.031-.219-.125-.625-.25-.844.281-.062.719-.125 1-.156zm8.875 3.063a1.142 1.142 0 010 .906C17.187 13.78 13.812 16 10 16c-3.844 0-7.219-2.219-8.906-5.531a1.142 1.142 0 010-.906C2.78 6.25 6.156 4 10 4c3.813 0 7.188 2.25 8.875 5.563zM10 14.5c3.063 0 5.906-1.719 7.406-4.5-1.5-2.781-4.343-4.5-7.406-4.5-3.094 0-5.938 1.719-7.438 4.5 1.5 2.781 4.344 4.5 7.438 4.5z"}))}var _i=tT;function oT(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},e),q.createElement("circle",{cx:"12",cy:"12",r:"12",fill:"url(#paint0_linear_4792_23932)"}),q.createElement("path",{fill:"#fff",d:"M7.486 10.575H5.42a.611.611 0 00-.62.619v6.187c0 .361.258.619.62.619h2.066c.336 0 .62-.258.62-.619v-6.187a.628.628 0 00-.62-.619zm-1.033 6.394a.596.596 0 01-.62-.619c0-.335.258-.619.62-.619.336 0 .62.284.62.619 0 .36-.284.619-.62.619zm8.264-10.055c0-1.908-1.24-2.114-1.859-2.114-.542 0-.775 1.031-.878 1.495-.155.567-.284 1.135-.672 1.521-.826.851-1.265 1.908-2.298 2.914a.415.415 0 00-.078.232v5.517c0 .155.13.284.284.31.414 0 .956.231 1.37.412.826.36 1.833.799 3.073.799h.077c1.11 0 2.428 0 2.944-.748.233-.309.285-.696.155-1.16.44-.438.646-1.263.44-1.933.439-.593.49-1.444.232-2.037.31-.31.516-.8.49-1.263 0-.8-.67-1.522-1.523-1.522h-2.635c.207-.721.878-1.34.878-2.423z"}),q.createElement("defs",null,q.createElement("linearGradient",{id:"paint0_linear_4792_23932",x1:"9",x2:"19.8",y1:"2.4",y2:"29.4",gradientUnits:"userSpaceOnUse"},q.createElement("stop",{stopColor:"#5B9DFF"}),q.createElement("stop",{offset:"1",stopColor:"#0041BE"}))))}var Ui=oT;function rT(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",fill:"none",viewBox:"0 0 14 16"},e),q.createElement("path",{fill:"#898E9E",d:"M12.5 6c.813 0 1.5.688 1.5 1.5v7a1.5 1.5 0 01-1.5 1.5h-11A1.48 1.48 0 010 14.5v-7A1.5 1.5 0 011.5 6h1V4.5C2.5 2.031 4.5 0 7 0c2.5.031 4.5 2.063 4.5 4.563V6h1zM4 4.5V6h6V4.5c0-1.625-1.375-3-3-3-1.656 0-3 1.375-3 3zm8.5 10v-7h-11v7h11z"}))}var gl=rT;function nT(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"18",height:"16",fill:"none",viewBox:"0 0 18 16"},e),q.createElement("path",{fill:"#A5A9B5",d:"M9 .188c4.682 0 8.5 3.12 8.5 6.906C17.5 10.912 13.682 14 9 14c-1.295 0-2.49-.232-3.586-.63-.797.663-2.457 1.693-4.648 1.693-.133 0-.2-.034-.266-.133-.033-.1 0-.233.066-.3 0-.032 1.395-1.493 1.827-3.187C1.197 10.248.5 8.753.5 7.093.5 3.31 4.285.189 9 .189z"}))}var V4=nT;function iT(){return q.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"14",fill:"none",viewBox:"0 0 15 14"},q.createElement("path",{fill:"#292B32",d:"M6.813.219c.125-.157.375-.157.53 0l6.532 6.531a.36.36 0 010 .531l-6.531 6.532c-.157.156-.407.156-.532 0l-.625-.594c-.156-.156-.156-.406 0-.531l4.844-4.876H.375A.361.361 0 010 7.438v-.875a.38.38 0 01.375-.375h10.656L6.187 1.345c-.156-.125-.156-.375 0-.532L6.813.22z"}))}var G4=iT;function aT(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"19",fill:"none",viewBox:"0 0 16 19"},e),q.createElement("path",{fill:"inherit",d:"M15.313 3.063c.28 0 .562.28.562.562v.563a.578.578 0 01-.563.562h-.562l-.773 11.918c-.036.879-.809 1.582-1.688 1.582H3.676c-.88 0-1.653-.703-1.688-1.582L1.25 4.75H.687a.555.555 0 01-.562-.563v-.562c0-.281.246-.563.563-.563H3.57l1.196-1.968C5.046.637 5.68.25 6.207.25h3.55c.528 0 1.161.387 1.442.844l1.196 1.968h2.918zM6.207 1.937l-.668 1.125h4.887l-.668-1.124H6.207zm6.082 14.626l.738-11.813H2.937l.739 11.813h8.613z"}))}var Xo=aT;function sT(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"none",viewBox:"0 0 12 12"},e),q.createElement("path",{fill:"#1054DE",d:"M9.281 3.813c.281.124.469.39.469.687 0 3.469-2.125 5.39-3.469 5.953a.743.743 0 01-.578 0C4.031 9.75 2.25 7.61 2.25 4.5c0-.297.172-.563.453-.688l3-1.25a.91.91 0 01.578 0l3 1.25zm-.734 1.78a.245.245 0 000-.343l-.36-.36a.245.245 0 00-.343 0L5.5 7.235 4.39 6.141a.245.245 0 00-.343 0l-.36.359a.245.245 0 000 .344l1.626 1.625c.093.11.265.11.359 0l2.875-2.875z"}))}var W4=sT;function lT(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},e),q.createElement("path",{fill:"#292B32",d:"M14.813 6.063c1.23 0 2.566-.422 3.832-.985C19.735 4.621 21 5.43 21 6.625v8.438c0 .597-.316 1.124-.773 1.44-.95.599-2.461 1.372-4.536 1.372-2.39 0-3.972-1.125-5.695-1.125-1.969 0-3.164.422-4.465 1.02v2.918a.578.578 0 01-.562.562h-.563a.555.555 0 01-.562-.563V6.415C3.316 6.133 3 5.57 3 4.938c0-.95.809-1.723 1.793-1.653A1.626 1.626 0 016.34 4.762c0 .035.035.14.035.176 0 .175-.07.421-.105.562a7.451 7.451 0 012.847-.563c2.39 0 3.973 1.125 5.695 1.125zm4.5 9V6.624c-1.125.527-2.989 1.125-4.5 1.125-2.11 0-3.586-1.125-5.696-1.125-1.476 0-2.847.598-3.586 1.125v8.156c1.09-.492 2.953-.844 4.465-.844 2.11 0 3.586 1.126 5.695 1.126 1.477 0 2.848-.563 3.621-1.125z"}))}var yl=lT;function mT(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},e),q.createElement("path",{fill:"#292B32",d:"M20.332 5.254a2.228 2.228 0 010 3.164l-2.637 2.637L16.5 12.25l-8.578 8.578-4.008.422H3.81A.804.804 0 013 20.336l.422-4.008L12 7.75l1.195-1.195 2.637-2.637a2.3 2.3 0 011.582-.668 2.3 2.3 0 011.582.668l1.336 1.336zM7.148 19.21l8.157-8.121 1.09-1.09-2.145-2.145-1.09 1.09-8.12 8.157-.247 2.355 2.355-.246zM19.137 7.223a.552.552 0 000-.774L17.8 5.113a.6.6 0 00-.387-.176.6.6 0 00-.387.176L15.445 6.66l2.145 2.145 1.547-1.582z"}))}var hl=mT;function dT(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20"},e),q.createElement("circle",{cx:"10",cy:"10",r:"10",fill:"url(#paint0_linear_5915_5783)"}),q.createElement("path",{fill:"#ED694A",d:"M13.673 6.119c-.334-.364-.852-.855-1.073.254-.075.377-.25.668-.4.902-.162-.819-.649-1.667-1.108-2.238-.171-.214-.78-1.065-.898-2.487a.256.256 0 00-.427-.169C8.26 3.75 7.433 5.631 7.402 7.75c0 0-.628-.53-.969-1.513-.092-.265-.447-.316-.601-.082-.03.045-.057.09-.082.134-1.163 2.057-1.722 4.554-1.205 6.877.865 3.89 6.585 4.978 9.613 2.533 2.962-2.393 2.02-6.846-.485-9.58z"}),q.createElement("path",{fill:"#F4A32C",d:"M12.758 8.963c-.246-.269-.63-.632-.792.188a1.9 1.9 0 01-.296.666c-.12-.605-.48-1.231-.818-1.653-.127-.158-.577-.786-.663-1.837a.189.189 0 00-.316-.125c-1.113 1.01-1.724 2.4-1.747 3.966 0 0-.464-.391-.715-1.118-.068-.196-.33-.233-.444-.06a1.736 1.736 0 00-.06.099c-.86 1.519-1.273 3.363-.891 5.079.639 2.873 4.863 3.677 7.1 1.87 2.188-1.766 1.493-5.055-.358-7.075z"}),q.createElement("path",{fill:"#F4D44E",d:"M11.922 11.56c-.166-.183-.426-.428-.536.127a1.284 1.284 0 01-.2.45c-.081-.409-.325-.833-.554-1.119-.086-.107-.39-.532-.449-1.243a.128.128 0 00-.214-.084c-.753.684-1.167 1.625-1.182 2.684 0 0-.314-.265-.484-.757-.046-.132-.224-.157-.301-.04a1.184 1.184 0 00-.041.067c-.581 1.028-.861 2.276-.603 3.438.433 1.945 3.293 2.489 4.807 1.266.518-.418.84-1.008.905-1.66.098-.99-.282-2.185-1.148-3.13z"}),q.createElement("path",{fill:"#EAE9E8",d:"M11.15 13.969c-.094-.101-.238-.238-.3.07a.717.717 0 01-.111.252 1.558 1.558 0 00-.309-.624 1.293 1.293 0 01-.25-.692.071.071 0 00-.119-.047c-.42.38-.65.905-.659 1.495 0 0-.174-.147-.27-.421-.025-.074-.124-.088-.167-.023a.628.628 0 00-.023.037c-.324.573-.48 1.269-.335 1.916.328 1.476 3.017 1.431 3.182-.22.054-.55-.158-1.217-.64-1.743z"}),q.createElement("path",{fill:"#F7E7A1",d:"M9.231 16.225c-.144-.58.012-1.201.336-1.714a.585.585 0 01.022-.033c.043-.059.142-.046.168.02.095.245.27.377.27.377.007-.434.164-.827.453-1.143-.065-.09-.263-.305-.3-.757a.071.071 0 00-.119-.047c-.42.38-.65.905-.659 1.495 0 0-.174-.147-.27-.421-.025-.074-.124-.088-.167-.023a.628.628 0 00-.023.037c-.324.573-.48 1.269-.335 1.916.133.6.68.96 1.286 1.047-.327-.16-.578-.414-.662-.754z"}),q.createElement("defs",null,q.createElement("linearGradient",{id:"paint0_linear_5915_5783",x1:"4.5",x2:"15.5",y1:"4.5",y2:"18",gradientUnits:"userSpaceOnUse"},q.createElement("stop",{stopColor:"#FFEC8A"}),q.createElement("stop",{offset:"1",stopColor:"#FCCF5A"}))))}var Hi=dT;function cT(e){return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20"},e),q.createElement("circle",{cx:"10",cy:"10",r:"10",fill:"url(#paint0_linear_5915_5776)"}),q.createElement("path",{fill:"#fff",d:"M14.03 6.615c-1.074-.944-2.654-.763-3.65.28l-.37.402-.39-.401c-.976-1.044-2.576-1.225-3.65-.281-1.228 1.084-1.287 3.01-.194 4.175l3.785 4.014a.59.59 0 00.878 0l3.785-4.014c1.093-1.164 1.034-3.091-.195-4.175z"}),q.createElement("defs",null,q.createElement("linearGradient",{id:"paint0_linear_5915_5776",x1:"4.5",x2:"17.5",y1:"4.5",y2:"24.5",gradientUnits:"userSpaceOnUse"},q.createElement("stop",{stopColor:"#E3447E"}),q.createElement("stop",{offset:"0.833",stopColor:"#E02222"}))))}var ji=cT;var pT=o=>{var r=o,{fill:e="#1054DE"}=r,t=I(r,["fill"]);return q.createElement("svg",d({width:"32",height:"33",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),q.createElement("circle",{cx:"16",cy:"16.4961",r:"16",fill:e}),q.createElement("path",{d:"M22.3758 15.5698C22.3758 16.3198 22.256 17.0073 22.0164 17.6323C21.7768 18.2573 21.4383 18.7443 21.0008 19.0933C20.5633 19.4422 20.0555 19.6167 19.4773 19.6167C19.0919 19.6167 18.7482 19.5256 18.4461 19.3433C18.1492 19.1558 17.9383 18.911 17.8133 18.6089H17.6883C17.4331 18.9214 17.1232 19.1688 16.7586 19.3511C16.394 19.5282 15.9878 19.6167 15.5398 19.6167C14.618 19.6167 13.8914 19.3407 13.3602 18.7886C12.8289 18.2313 12.5633 17.4735 12.5633 16.5151C12.5633 15.4266 12.907 14.5438 13.5945 13.8667C14.2872 13.1896 15.2039 12.8511 16.3445 12.8511C16.7664 12.8511 17.2534 12.8927 17.8055 12.9761C18.3576 13.0542 18.8081 13.1558 19.157 13.2808L18.9773 17.1011C18.9773 17.8302 19.1753 18.1948 19.5711 18.1948C19.9044 18.1948 20.1701 17.9526 20.368 17.4683C20.5659 16.9787 20.6648 16.3407 20.6648 15.5542C20.6648 14.7157 20.4904 13.9761 20.1414 13.3354C19.7977 12.6896 19.3081 12.1974 18.6727 11.8589C18.0424 11.5151 17.3185 11.3433 16.5008 11.3433C15.4539 11.3433 14.5398 11.562 13.7586 11.9995C12.9773 12.437 12.381 13.062 11.9695 13.8745C11.5581 14.687 11.3523 15.6245 11.3523 16.687C11.3523 18.1297 11.7352 19.2365 12.5008 20.0073C13.2716 20.7729 14.3862 21.1558 15.8445 21.1558C16.4279 21.1558 17.0529 21.0907 17.7195 20.9604C18.3862 20.8302 19.019 20.6532 19.618 20.4292V21.937C18.5138 22.4058 17.2768 22.6401 15.907 22.6401C13.9279 22.6401 12.3836 22.1193 11.2742 21.0776C10.1701 20.036 9.61797 18.5881 9.61797 16.7339C9.61797 15.4474 9.90182 14.2782 10.4695 13.2261C11.0424 12.174 11.8523 11.3537 12.8992 10.7651C13.9461 10.1714 15.1414 9.87451 16.4852 9.87451C17.631 9.87451 18.6544 10.1089 19.5555 10.5776C20.4565 11.0464 21.1518 11.7131 21.6414 12.5776C22.131 13.4422 22.3758 14.4396 22.3758 15.5698ZM14.3758 16.5464C14.3758 17.6453 14.8237 18.1948 15.7195 18.1948C16.1831 18.1948 16.5372 18.0308 16.782 17.7026C17.032 17.3693 17.1831 16.8276 17.2352 16.0776L17.3367 14.3511C17.0971 14.299 16.7977 14.2729 16.4383 14.2729C15.7872 14.2729 15.2794 14.4761 14.9148 14.8823C14.5555 15.2886 14.3758 15.8433 14.3758 16.5464Z",fill:"white"}))},Cl=pT;var uT=n=>{var s=n,{bg:e="#fff",fg:t="#cacaca",children:o}=s,r=I(s,["bg","fg","children"]);return q.createElement("svg",d({width:"100%",height:"100%",viewBox:"0 0 24 28",fill:"none",vectorEffect:"non-scaling-stroke",xmlns:"http://www.w3.org/2000/svg"},r),q.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.24993 27.8542c-1.158 0-2.099997-.9263-2.099997-2.065V2.21031c0-1.13809.941997-2.064421 2.099997-2.064421H16.4999c.1614 0 .3114.060667.423.172084l6.7506 6.631917c.114.112.1764.26075.1764.41883V25.7892c0 1.1387-.942 2.065-2.1 2.065H2.24993z",fill:e}),q.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.4999.00010681H2.24991C1.00911.00010681-.00009155.99119-.00009155 2.21036V25.7899c0 1.2185 1.00920155 2.2102 2.25000155 2.2102H21.7499c1.2402 0 2.25-.9917 2.25-2.2102V7.36877c0-.196-.0792-.38266-.2196-.5215l-6.75-6.63133c-.141-.1394165-.3312-.21583319-.5304-.21583319zm0 .29162219c.1206 0 .2328.0455.3168.1295l6.75 6.631331c.0864.084.1332.19659.1332.31617V25.7898c0 1.0576-.8748 1.9186-1.95 1.9186H2.24995c-1.0752 0-1.950005-.861-1.950005-1.9186V2.21031c0-1.05758.874805-1.918581 1.950005-1.918581H16.4999z",fill:t}),q.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.9999 7.36861c0-.196-.0792-.38267-.2196-.5215l-6.75-6.631338c-.141-.1394164-.3312-.21583304-.5304-.21583304h-.4878V5.63727c0 1.21858 1.0092 2.21025 2.25 2.21025h5.7378v-.47891z",fill:t}),o)},ae=uT;var fT=o=>{var r=o,{color:e="#FFB400"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M6.75698 23.3835c-.0936.0595-.2088.0951-.3456.1079-.1368.0117-.2736.0304-.4104.0549-.0648.0105-.1278.025-.189.0443-.0612.0198-.1152.0461-.162.0787-.0468.0339-.0834.077-.1104.1313-.027.0548-.0408.1202-.0408.1972 0 .0665.0198.1225.0594.168.0396.0455.087.081.1428.1073.0564.0262.1176.0449.1842.0554.066.0105.1266.0152.1806.0152.0684 0 .1422-.0082.2214-.0257.0792-.0175.1542-.0472.2244-.0892.0702-.042.1284-.0957.1752-.1605.0468-.0647.0702-.144.0702-.2385v-.4463zm.6156.756c0 .0735.0102.126.0294.1569.0198.0321.0588.0473.117.0473h.0642c.0252 0 .054-.0029.0864-.0099v.4147c-.0216.007-.0498.0146-.0834.0233-.0348.0094-.0696.017-.1056.024-.036.007-.072.0116-.108.0157-.036.0035-.0666.0053-.0918.0053-.126 0-.2304-.0245-.3126-.0735-.0834-.049-.1374-.1348-.1626-.2573-.1224.1155-.2724.1989-.4506.252-.1788.0525-.3504.0788-.516.0788-.126 0-.2466-.0164-.3618-.0502-.1152-.0333-.2166-.0823-.3054-.147-.0876-.0642-.1578-.147-.21-.2468-.0522-.0997-.0786-.2158-.0786-.3488 0-.168.0318-.3045.0942-.4095.0636-.105.1458-.1872.2484-.2467s.2184-.1027.3456-.129c.1278-.0262.2568-.046.3864-.0606.1116-.0204.2178-.0356.3186-.0444.1008-.0081.1902-.0233.2676-.0443.0768-.021.1386-.0537.183-.0974.045-.0438.0678-.1091.0678-.1966 0-.077-.0192-.14-.0564-.189-.0384-.049-.0852-.0863-.141-.1126-.0552-.0262-.1176-.0443-.186-.0525-.0678-.0093-.1332-.014-.1938-.014-.1728 0-.3156.0356-.4272.1056-.1116.07-.1746.1785-.189.3255h-.6156c.0108-.175.054-.3202.1296-.4357.0756-.1155.1722-.2083.2892-.2783.1164-.07.249-.119.3966-.147.1476-.028.2988-.042.4536-.042.1368 0 .2718.014.405.042.1332.028.2532.0735.3594.1359.1056.0636.1914.1447.2562.2444.0648.0998.0972.2217.0972.3646v1.3971zM10.6235 24.7433h-.6048v-.378h-.0108c-.07556.1365-.18836.2456-.33776.3278-.1494.0823-.3018.1237-.4566.1237-.3666 0-.6318-.0881-.7962-.2654-.1638-.1768-.2454-.4433-.2454-.8003v-1.722h.615v1.6642c0 .2374.0474.406.141.5034.0936.098.225.147.3942.147.1296 0 .2376-.0186.324-.0571.0864-.0391.1566-.0899.2106-.1552.054-.0648.0924-.1423.1158-.2333.0234-.091.03536-.189.03536-.294v-1.575h.6156v2.7142zM11.8868 23.4149c0 .1155.015.2298.0462.3412.0306.112.0774.2118.1404.2993.063.0875.1434.1575.24.21.0972.0525.2124.0787.3456.0787.1374 0 .255-.028.354-.084.099-.0554.18-.1289.243-.2205.063-.091.1098-.1936.1404-.3068.03-.1137.0462-.2304.0462-.3494 0-.301-.0696-.5355-.2082-.7035-.1386-.168-.327-.252-.564-.252-.1446 0-.2658.0286-.3648.0869-.099.0578-.1806.133-.243.2258-.0636.0927-.108.1977-.135.315-.0276.1172-.0408.2368-.0408.3593zm2.1492 1.3282h-.5832v-.3675h-.0102c-.0834.1575-.204.2701-.3624.339-.1578.0682-.3258.102-.5022.102-.2196 0-.411-.0373-.5748-.1125-.1638-.0753-.3-.178-.4074-.3075-.1086-.1295-.1896-.2829-.2436-.459-.0534-.1768-.0804-.3664-.0804-.57 0-.245.0336-.4567.1026-.6352.0684-.1785.159-.3255.2724-.441.1134-.1155.243-.2007.3888-.2543.1458-.0543.294-.0817.4452-.0817.087 0 .1746.0082.2652.0239.0894.0152.1764.0408.2586.0758.0828.035.1596.08.2298.1336.0702.0543.1284.119.1752.1925h.0114v-1.386h.615v3.7479zM14.8571 24.7433h.615V22.029h-.615v2.7143zm0-3.1815h.615v-.567h-.615v.567zM17.5569 24.344c.1368 0 .2556-.028.3564-.084.1008-.0555.1836-.129.2484-.22.0648-.0915.1122-.1942.1428-.3074.0306-.1137.0462-.2298.0462-.3488 0-.1161-.0156-.2316-.0462-.3465-.0306-.1155-.078-.2182-.1428-.308-.0648-.0887-.1476-.1616-.2484-.2176-.1008-.0554-.2196-.084-.3564-.084-.1374 0-.2556.0286-.3564.084-.1008.056-.1836.1289-.2484.2176-.0648.0898-.1122.1925-.1434.308-.0306.1149-.0456.2304-.0456.3465 0 .119.015.2351.0456.3488.0312.1132.0786.2159.1434.3074.0648.091.1476.1645.2484.22.1008.056.219.084.3564.084zm0 .473c-.2232 0-.4224-.0361-.5964-.1079-.1752-.0717-.3222-.1709-.4428-.2969-.1212-.126-.213-.2759-.2754-.4509-.0636-.1756-.0948-.3681-.0948-.5775 0-.2071.0312-.3973.0948-.5728.0624-.175.1542-.3255.2754-.451.1206-.126.2676-.2251.4428-.2969.174-.0717.3732-.1079.5964-.1079.2232 0 .4218.0362.5964.1079.1746.0718.3222.1709.4428.2969.1212.1255.2124.276.2754.451.063.1755.0948.3657.0948.5728 0 .2094-.0318.4019-.0948.5775-.063.175-.1542.3249-.2754.4509-.1206.126-.2682.2252-.4428.2969-.1746.0718-.3732.1079-.5964.1079zM14.397 16.224c-.723 0-1.203-.294-1.203-.4882 0-.1943.48-.4883 1.203-.4883.723 0 1.203.294 1.203.4883 0 .1942-.48.4882-1.203.4882zm-4.79398 1.2478c-.723 0-1.203-.294-1.203-.4883 0-.1942.48-.4882 1.203-.4882.72298 0 1.20298.294 1.20298.4882 0 .1943-.48.4883-1.20298.4883zm6.48778-6.933c-.0684-.056-.1578-.0787-.2478-.0624l-4.794 1.1194c-.141.0269-.243.147-.243.287v4.2951c-.3156-.1645-.7296-.266-1.20298-.266-1.0278 0-1.803.4609-1.803 1.0716 0 .6113.7752 1.0716 1.803 1.0716 1.02778 0 1.80298-.4603 1.80298-1.0716v-4.8597l4.194-1.0075v3.8139c-.3156-.1651-.7296-.266-1.203-.266-1.0278 0-1.803.4602-1.803 1.0716 0 .6107.7752 1.0715 1.803 1.0715s1.803-.4608 1.803-1.0715v-4.9724c0-.0869-.0402-.1691-.1092-.2246z",clipRule:"evenodd"}))},Vi=fT;var gT=o=>{var r=o,{color:e="#5856D6"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,d:"M10.5224 24.0681c0 .0785.0098.1346.0295.1683.0236.0336.0669.0504.1299.0504h.0709c.0276 0 .0591-.0037.0945-.0112v.4431c-.0236.0075-.0551.015-.0945.0225-.0354.0112-.0728.0205-.1122.028-.0394.0075-.0787.0131-.1181.0168-.0394.0038-.0728.0056-.1004.0056-.1378 0-.252-.0261-.3425-.0785-.09057-.0523-.14962-.1439-.17718-.2748-.13386.1234-.29921.2131-.49606.2692-.19291.0561-.37991.0841-.56101.0841-.1378 0-.26968-.0186-.39567-.056-.12598-.0337-.23818-.0842-.3366-.1515-.09449-.071-.17126-.1589-.23032-.2636-.05511-.1084-.08267-.2337-.08267-.3758 0-.1795.03346-.3253.10039-.4375.07087-.1122.16141-.2001.27165-.2636.11417-.0636.24015-.1085.37795-.1346.14173-.03.28346-.0524.42519-.0674.12204-.0224.23818-.0373.34842-.0448.11023-.0112.20669-.0281.28936-.0505.08662-.0224.15354-.0561.20079-.101.05118-.0486.07677-.1196.07677-.2131 0-.0823-.02166-.1496-.06496-.2019-.03937-.0524-.09055-.0916-.15354-.1178-.05906-.0299-.12599-.0486-.20079-.0561-.0748-.0112-.14567-.0168-.21259-.0168-.18898 0-.34449.0374-.46653.1121-.12205.0748-.19094.1907-.20669.3478h-.67322c.01181-.187.05906-.3421.14173-.4655.08268-.1234.18701-.2225.31299-.2973.12992-.0748.27558-.1272.437-.1571.16141-.0299.32677-.0448.49605-.0448.14961 0 .29724.0149.44291.0448.14567.0299.27563.0786.38973.1459.1181.0673.2126.1551.2835.2636.0709.1047.1063.2337.1063.387v1.492zm-.67323-.8077c-.10236.0636-.22834.1028-.37795.1178-.1496.0112-.29921.0299-.44881.0561-.07086.0112-.13976.028-.20669.0505-.06693.0187-.12598.0467-.17716.0841-.05118.0336-.09252.0804-.12402.1402-.02755.0561-.04133.1253-.04133.2075 0 .0711.02165.1309.06496.1795.0433.0486.09448.0879.15354.1178.06299.0262.12992.0449.20078.0561.0748.0112.14173.0168.20079.0168.0748 0 .1555-.0093.24212-.028.08661-.0187.16732-.0505.24212-.0954.07874-.0448.1437-.1009.19488-.1682.05118-.0711.07677-.1571.07677-.258v-.4768zM10.9456 21.8133h.7323l.7736 2.2267h.0118l.7441-2.2267h.6968l-1.0925 2.8998h-.7559l-1.1102-2.8998zM14.3268 20.7083H15v.6058h-.6732v-.6058zm0 1.105H15v2.8998h-.6732v-2.8998zM16.7812 11.6666c-.1125 0-.225.0365-.3375.1094L14.4 13.0521v-1.0938c0-.4739-.45-.875-.975-.875H7.55623c-.525 0-.95625.4011-.95625.875v5.2682c0 .474.43125.8568.95625.8568H13.425c.525 0 .975-.3828.975-.8568v-1.0937l2.0437 1.276c.1125.0729.225.0912.3375.0912.3188 0 .6-.237.6-.5651V12.25c.0188-.3464-.2812-.5834-.6-.5834zM13.8 17.2265c0 .1459-.1875.2735-.375.2735H7.55623c-.1875 0-.35625-.1276-.35625-.2735v-5.2682c0-.1458.16875-.2917.35625-.2917H13.425c.1875 0 .375.1459.375.2917v5.2682zm3-.2916l-.0375-.0183L14.4 15.4401v-1.6953l2.4-1.4948v4.6849z"}))},xl=gT;var yT=o=>{var r=o,{color:e="#00BED4"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M9.6869 22.9368c-.0252-.1674-.0942-.2946-.2082-.3803-.1128-.0858-.2556-.1289-.429-.1289-.0792 0-.1638.0134-.2538.0396-.09.0263-.1722.0753-.2478.147-.0762.0718-.1392.1715-.1896.2993-.0504.1277-.0756.2952-.0756.5011 0 .1126.0138.224.0408.3366.0264.112.0702.2117.129.2986.06.0881.1362.1587.2298.2124.0936.0548.207.0816.3408.0816.1794 0 .3276-.0542.4452-.1621.1164-.1091.1896-.2608.2184-.4568h.6156c-.0576.3529-.1956.6236-.4128.8108-.2178.1873-.507.2812-.8664.2812-.2202 0-.4134-.0362-.5808-.1079-.168-.0718-.309-.1698-.4242-.294-.1152-.1243-.2022-.2724-.2622-.4439-.0588-.1715-.0888-.357-.0888-.5565 0-.2024.0288-.3932.0864-.5717.0576-.1791.144-.3337.2592-.4649.1152-.1313.2586-.2345.4296-.3098.171-.0752.3714-.1131.6018-.1131.162 0 .3162.0204.4614.0606.1458.0403.2754.101.3894.1809.1128.0805.2058.1826.2784.3051.0714.1225.1146.2677.129.4351h-.6156zM11.4043 23.8717c.0174.175.0864.2975.2052.3675.1188.07.2604.105.4266.105.057 0 .123-.0041.1968-.0134.0738-.0088.1434-.0251.2082-.0496.0648-.0245.1176-.0601.159-.1073.042-.0473.0606-.1097.057-.1867-.0036-.077-.0324-.14-.087-.189-.0534-.049-.123-.0881-.207-.1178-.0852-.0304-.1812-.0555-.2892-.0765-.108-.021-.2178-.0437-.33-.0682-.1146-.0245-.2256-.0543-.3312-.0893-.1068-.035-.2022-.0822-.2868-.1417-.084-.0595-.1518-.1353-.2022-.2281-.051-.0927-.0756-.2077-.0756-.3442 0-.147.0366-.2706.1104-.3704.0738-.0997.1674-.1796.2814-.2415.1128-.0606.2388-.1038.3774-.1283.1386-.0245.2712-.0368.3972-.0368.144 0 .2814.0146.4128.0444.1314.0303.2502.0781.3564.1446.1068.0665.1944.1535.2646.2596.0702.1074.1146.2357.1326.3862h-.6426c-.0288-.1435-.0966-.2398-.2022-.2888-.1068-.049-.228-.074-.3654-.074-.0426 0-.0942.004-.1536.011-.0594.007-.1152.0199-.1674.0391-.0522.0199-.096.0473-.1326.0846-.0354.0362-.0534.0846-.0534.1441 0 .0735.0264.133.078.1785.0522.0455.1212.0828.2052.1126.0846.0303.1812.0554.2892.0764.1074.021.2196.0437.3342.0682.1122.0245.2214.0543.33.0893.108.035.204.0822.2892.1417.084.0595.1524.1348.2046.2258.0522.091.0786.203.0786.3354 0 .1616-.0378.2981-.1134.4101-.0756.112-.174.203-.294.273-.1212.07-.255.1207-.4026.1522s-.294.0473-.4374.0473c-.1764 0-.3396-.0193-.4884-.0578-.1494-.0385-.2796-.0974-.3894-.1755-.1092-.0794-.1962-.1774-.2586-.294-.0636-.1173-.0972-.2567-.1002-.4177h.6156zM13.6021 22.0288h.669l.708 2.0843h.0108l.6798-2.0843h.6378l-.999 2.7143h-.6918l-1.0146-2.7143zM10.2 17.472h6v-1.1667h-6v1.1667zm-2.39999 0h1.8v-1.1667h-1.8v1.1667zm0-5.25h1.8v-1.1667h-1.8v1.1667zm2.39999 0h6v-1.1667h-6v1.1667zm0 1.75h6v-1.1667h-6v1.1667zm0 1.75h6v-1.1667h-6v1.1667zm-2.39999-1.75h1.8v-1.1667h-1.8v1.1667zm0 1.75h1.8v-1.1667h-1.8v1.1667zM16.5 10.472H7.50001c-.1656 0-.3.1307-.3.2917v7c0 .1616.1344.2916.3.2916H16.5c.1662 0 .3-.13.3-.2916v-7c0-.161-.1338-.2917-.3-.2917z",clipRule:"evenodd"}))},bl=yT;var hT=o=>{var r=o,{color:e="#999"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M16.4998 11.0549H7.49977c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h9.00003c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM16.4998 12.8049H7.49977c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h9.00003c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM16.4998 14.5549H7.49977c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h9.00003c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM13.4998 16.3049H7.49977c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h6.00003c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM13.4998 18.0549H7.49977c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h6.00003c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916z",clipRule:"evenodd"}))},Ml=hT;var CT=o=>{var r=o,{color:e="#0E86FE"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M7.84262 23.4149c0 .1155.015.2298.0462.3412.03.112.0774.2118.1404.2993.063.0875.1428.1575.24.21.0972.0525.2124.0787.3456.0787.1368 0 .2544-.028.3534-.084.0996-.0554.1806-.1289.2436-.2205.063-.091.1098-.1936.1404-.3068.03-.1138.0456-.2304.0456-.3494 0-.301-.069-.5355-.2076-.7035-.1386-.168-.327-.252-.5646-.252-.144 0-.2652.0286-.3642.0869-.099.0577-.1806.133-.2436.2257-.063.0928-.1074.1978-.1344.315-.0276.1173-.0408.2369-.0408.3594zm2.1492 1.3282h-.5832v-.3675h-.0108c-.0828.1575-.2034.2701-.3618.3389-.1584.0683-.3258.1021-.5022.1021-.2196 0-.411-.0373-.5748-.1126-.1644-.0752-.3-.1779-.408-.3074-.108-.1295-.189-.2829-.243-.4591-.054-.1767-.081-.3663-.081-.5699 0-.245.0342-.4567.1026-.6352.0684-.1785.1596-.3255.273-.441.1134-.1155.243-.2007.3888-.2544.1458-.0542.294-.0816.4452-.0816.0864 0 .1746.0081.2646.0239.09.0152.1764.0408.2592.0758.0828.035.1596.0799.2298.1336.0702.0543.1284.119.1752.1925h.0108v-1.386h.6156v3.7479zM12.0763 24.344c.1368 0 .2556-.028.3564-.084.1008-.0555.1836-.129.2484-.22.0648-.0915.1128-.1942.1434-.3074.03-.1137.0456-.2298.0456-.3488 0-.1161-.0156-.2316-.0456-.3465-.0306-.1155-.0786-.2182-.1434-.308-.0648-.0887-.1476-.1616-.2484-.2176-.1008-.0554-.2196-.084-.3564-.084s-.2556.0286-.3564.084c-.1008.056-.1836.1289-.2484.2176-.0648.0898-.1122.1925-.1434.308-.03.1149-.0456.2304-.0456.3465 0 .119.0156.2351.0456.3488.0312.1132.0786.2159.1434.3074.0648.091.1476.1645.2484.22.1008.056.2196.084.3564.084zm0 .473c-.2232 0-.4224-.0361-.5964-.1079-.1752-.0717-.3222-.1709-.4428-.2969-.1212-.126-.2124-.2759-.2754-.4509-.063-.1756-.0948-.3681-.0948-.5775 0-.2071.0318-.3973.0948-.5728.063-.175.1542-.3255.2754-.451.1206-.126.2676-.2251.4428-.2969.174-.0717.3732-.1079.5964-.1079.2232 0 .4224.0362.597.1079.1746.0718.3222.1709.4422.2969.1212.1255.2124.276.2754.451.063.1755.0948.3657.0948.5728 0 .2094-.0318.4019-.0948.5775-.063.175-.1542.3249-.2754.4509-.12.126-.2676.2252-.4422.2969-.1746.0718-.3738.1079-.597.1079zM16.0182 22.9369c-.0252-.1674-.0948-.2946-.2082-.3803-.1134-.0858-.2562-.129-.429-.129-.0792 0-.1638.0135-.2538.0397-.09.0263-.1728.0753-.2484.147-.0756.0718-.1386.1715-.189.2993-.0504.1277-.0756.2951-.0756.501 0 .1126.0132.224.0408.3366.0264.112.0696.2118.129.2987.0594.0881.1362.1587.2298.2123.0936.0549.207.0817.3402.0817.18 0 .3282-.0543.4452-.1622.117-.1091.1902-.2607.219-.4567h.6156c-.0576.3529-.1956.6236-.4134.8108-.2178.1873-.5064.2812-.8664.2812-.2196 0-.4128-.0362-.5808-.1079-.1674-.0718-.3084-.1698-.4236-.294-.1152-.1243-.2028-.2725-.2622-.444-.0594-.1715-.0888-.357-.0888-.5565 0-.2024.0288-.3931.0864-.5716.0576-.1791.144-.3337.2592-.4649.1152-.1313.258-.2345.429-.3098.171-.0752.372-.1132.6024-.1132.162 0 .3162.0205.4614.0607.1458.0403.2754.1009.3888.1808.1134.0805.2064.1826.2784.3051.072.1225.1152.2678.1296.4352h-.6156zM16.5001 11.0549H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h8.99997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM14.7001 12.8049H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h7.19997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM16.5001 14.5549H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h8.99997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM14.7001 16.3049H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h7.19997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM16.5001 18.0549H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h8.99997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916z",clipRule:"evenodd"}))},Il=CT;var vT=o=>{var r=o,{color:e="#5C6070"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,d:"M16.2375 15.235l-.6-.3463c0-.1276.0187-.3281.0187-.4557 0-.1094-.0187-.3099-.0187-.4375l.6-.3464c.1875-.0911.2625-.3099.2062-.4922-.2062-.6927-.5812-1.3125-1.0687-1.8229-.15-.1458-.375-.1823-.5625-.0729l-.6.3463c-.2063-.164-.5625-.3645-.8063-.4557v-.6745c0-.2187-.1312-.3828-.3375-.4375-.7125-.16403-1.4437-.16403-2.1562 0-.2063.0547-.3375.2188-.3375.4375v.6745c-.2438.0912-.6.2917-.80625.4557l-.6-.3463c-.1875-.1094-.4125-.0729-.5625.0729-.4875.5104-.8625 1.1302-1.06875 1.8229-.05625.1823.01875.4011.20625.4922l.6.3464c0 .1276-.01875.3281-.01875.4375 0 .1276.01875.3281.01875.4557l-.6.3463c-.1875.0912-.2625.3099-.20625.4922.20625.6927.58125 1.3125 1.06875 1.823.15.1458.375.1822.5625.0729l.6-.3464c.20625.1641.56245.3646.80625.4557v.6745c0 .2188.1312.3828.3375.4375.7125.1641 1.4437.1641 2.1562 0 .2063-.0547.3375-.2187.3375-.4375v-.6745c.2438-.0911.6-.2916.8063-.4557l.6.3464c.1875.1093.4125.0729.5625-.0729.4875-.5105.8625-1.1303 1.0687-1.823.0563-.1823-.0187-.401-.2062-.4922zm-1.2188 1.823l-.8812-.4922c-.5063.4375-.675.5286-1.3313.7656v.9661c-.225.0547-.5812.0912-.8062.0912-.2438 0-.6-.0365-.825-.0912v-.9661c-.6375-.2187-.825-.3281-1.33125-.7656l-.88125.4922c-.35625-.4011-.6375-.875-.825-1.3855l.88125-.4739c-.13125-.6563-.13125-.8568 0-1.513l-.88125-.474c.1875-.5104.46875-.9844.825-1.3854l.88125.4922c.50625-.4375.69375-.5469 1.33125-.7656v-.9662c.225-.0547.5812-.0911.825-.0911.225 0 .5812.0364.8062.0911v.9662c.6375.2187.825.3281 1.3313.7656l.8812-.4922c.3563.401.6375.875.825 1.3854l-.8812.474c.1312.6562.1312.8567 0 1.513l.8812.4739c-.1875.5105-.4687.9844-.825 1.3855zM12 12.683c-.9938 0-1.8.802-1.8 1.75 0 .9661.8062 1.75 1.8 1.75.975 0 1.8-.7839 1.8-1.75 0-.948-.825-1.75-1.8-1.75zm0 2.9166c-.675 0-1.2-.5104-1.2-1.1666 0-.6381.525-1.1667 1.2-1.1667.6562 0 1.2.5286 1.2 1.1667 0 .6562-.5438 1.1666-1.2 1.1666zM9.35869 22.837c-.00757-.0994-.0303-.1951-.06817-.2872-.03408-.092-.08332-.1712-.1477-.2375-.06059-.0699-.13633-.1251-.22723-.1656-.0871-.0442-.18557-.0663-.29539-.0663-.11362 0-.21777.0202-.31244.0607-.0909.0368-.17043.0902-.2386.1602-.06438.0663-.1174.1454-.15906.2375-.03787.092-.0587.1914-.06248.2982h1.51107zm-1.51107.4142c0 .1105.01514.2173.04544.3204.03409.1031.08332.1933.1477.2706.06438.0773.14581.1399.24427.1878.09847.0442.21587.0663.35221.0663.18936 0 .34084-.0387.45446-.116.1174-.081.2045-.2007.26131-.359h.61352c-.03408.1546-.09279.2927-.1761.4142-.08332.1215-.18368.2246-.30108.3093-.1174.081-.24995.1417-.39765.1822-.14392.0442-.2954.0663-.45446.0663-.23102 0-.43553-.0368-.61352-.1104-.178-.0737-.32948-.1768-.45446-.3093-.12119-.1326-.21397-.2909-.27836-.475-.06059-.1841-.09089-.3866-.09089-.6075 0-.2025.03219-.394.09657-.5744.06817-.1841.16285-.3443.28404-.4805.12498-.1399.27457-.2504.44878-.3314.17421-.081.37114-.1215.5908-.1215.23101 0 .43741.0479.6192.1436.18557.0921.33895.2154.46014.37.12118.1547.20829.3333.26131.5358.05685.1988.07195.405.04545.6185H7.84762zM11.2882 23.0138l-1.0168-1.3532h.7839l.6135.8782.642-.8782h.7498l-.9998 1.32 1.1248 1.5354h-.7783l-.7441-1.0549-.7215 1.0549h-.7612l1.1077-1.5022zM15.5664 22.837c-.0075-.0994-.0303-.1951-.0681-.2872-.0341-.092-.0833-.1712-.1477-.2375-.0606-.0699-.1364-.1251-.2273-.1656-.0871-.0442-.1855-.0663-.2953-.0663-.1137 0-.2178.0202-.3125.0607-.0909.0368-.1704.0902-.2386.1602-.0644.0663-.1174.1454-.159.2375-.0379.092-.0587.1914-.0625.2982h1.511zm-1.511.4142c0 .1105.0151.2173.0454.3204.0341.1031.0833.1933.1477.2706.0644.0773.1458.1399.2443.1878.0985.0442.2159.0663.3522.0663.1894 0 .3408-.0387.4545-.116.1174-.081.2045-.2007.2613-.359h.6135c-.0341.1546-.0928.2927-.1761.4142-.0833.1215-.1837.2246-.3011.3093-.1174.081-.2499.1417-.3976.1822-.144.0442-.2954.0663-.4545.0663-.231 0-.4355-.0368-.6135-.1104-.178-.0737-.3295-.1768-.4545-.3093-.1212-.1326-.214-.2909-.2783-.475-.0606-.1841-.0909-.3866-.0909-.6075 0-.2025.0322-.394.0965-.5744.0682-.1841.1629-.3443.2841-.4805.125-.1399.2745-.2504.4488-.3314.1742-.081.3711-.1215.5908-.1215.231 0 .4374.0479.6192.1436.1855.0921.3389.2154.4601.37.1212.1547.2083.3333.2613.5358.0568.1988.072.405.0454.6185h-2.1586z"}))},wl=vT;var xT=o=>{var r=o,{color:e="#1E3868"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M6.58255 20.9949h.6156v1.3913h.0108c.0756-.1225.1878-.2252.3372-.3074.1494-.0823.3162-.1237.4998-.1237.306 0 .5478.077.7242.2316.1758.154.264.3844.264.6924v1.8643h-.615v-1.7062c-.0078-.2135-.0546-.3687-.141-.4649-.0858-.0963-.2214-.1447-.405-.1447-.1038 0-.198.0187-.2802.0554-.0834.0368-.1536.0875-.2112.1528-.0576.0642-.1026.1406-.135.2275-.0324.0881-.0486.1809-.0486.2789v1.6012h-.6156v-3.7485zM9.53622 22.0289h.46438v-.8138h.6162v.8138h.5562v.4462h-.5562v1.449c0 .063.0024.1173.0078.1628s.018.084.0378.1161c.0198.0309.0492.0542.0888.0705.0402.0158.0942.0234.1626.0234.0426 0 .0858-.0006.1296-.0024.0426-.0017.0858-.0081.1296-.018v.462c-.069.0064-.135.0134-.1998.0204-.0654.007-.1314.0105-.1998.0105-.1626 0-.2928-.0146-.3918-.0449-.099-.0298-.1764-.0735-.2328-.1313-.0552-.0572-.093-.1301-.1128-.2176-.0198-.0875-.0318-.1872-.0354-.2992v-1.6013h-.46438v-.4462zM11.7505 22.0289h.5832v.378h.0162c.0462-.0665.0972-.1278.1512-.1838.054-.056.114-.1032.1806-.1417.0666-.0385.1434-.0688.2298-.0916s.1854-.0344.297-.0344c.1692 0 .327.0373.4722.1102.1458.0735.2496.1873.3102.3413.1044-.14.225-.2503.3624-.3308.1362-.0805.3078-.1207.5124-.1207.2958 0 .525.07.6888.21.1638.1406.246.3745.246.7035v1.8742h-.6156v-1.5849c0-.1091-.0036-.2082-.0108-.2969-.0078-.0898-.0282-.1662-.0618-.2316-.0348-.0641-.0858-.1143-.1542-.1493-.069-.035-.162-.0525-.2808-.0525-.2094 0-.3606.063-.4536.189-.0936.126-.1404.3045-.1404.5355v1.5907h-.6162v-1.743c0-.189-.0348-.3313-.1044-.4275-.0708-.0963-.1998-.1447-.3864-.1447-.0792 0-.156.0157-.2298.0472s-.1386.077-.1944.1365c-.0558.0601-.1008.1336-.135.2205-.0342.0875-.0516.1873-.0516.2993v1.6117h-.615v-2.7142zM16.5996 24.7433h.615v-3.7485h-.615v3.7485zM14.7001 16.5972c-.069 0-.1386-.0234-.195-.0706-.126-.105-.141-.2888-.033-.4107l1.6332-1.8521-1.6332-1.852c-.108-.1225-.093-.3063.033-.4113.1248-.1044.3144-.0904.423.0321l1.8 2.0417c.096.1085.096.27 0 .3791l-1.8 2.0417c-.06.0671-.1434.1021-.228.1021zM9.30013 16.5972c-.0846 0-.168-.035-.228-.1021l-1.8-2.0417c-.096-.1091-.096-.2706 0-.3791l1.8-2.0417c.1092-.1225.2988-.1365.423-.0321.126.105.141.2888.033.4113l-1.6332 1.852 1.6332 1.8521c.108.1219.093.3057-.033.4107-.0564.0472-.126.0706-.195.0706zM10.2001 18.0549c-.045 0-.0906-.0099-.1344-.0309-.14818-.0717-.20758-.2473-.13378-.3908l3.59998-7c.075-.1447.2538-.2013.4026-.1307.1482.0723.2076.2473.1338.392l-3.6 7c-.0528.1015-.1584.1604-.2682.1604z",clipRule:"evenodd"}))},Sl=xT;var bT=o=>{var r=o,{color:e="#999"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M7.8002 16.0901c.0078-.007.0168-.0105.024-.0181l2.0952-2.3012 3.3666 3.7007H7.8002v-1.3814zm6.2862 1.3814l-3.9426-4.3342c-.0564-.0624-.138-.098-.2244-.098-.0858 0-.1674.0356-.225.098l-1.8942 2.0819v-4.1644h8.4v6.4167h-2.1138zm2.4138-7h-9c-.1656 0-.3.1306-.3.2916v7c0 .1616.1344.2917.3.2917h9c.1656 0 .3-.1301.3-.2917v-7c0-.161-.1344-.2916-.3-.2916z",clipRule:"evenodd"}),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M13.7527 13.95c-.3306 0-.6-.2614-.6-.5834s.2694-.5833.6-.5833c.3312 0 .6.2613.6.5833 0 .322-.2688.5834-.6.5834zm0-1.75c-.6618 0-1.2.5232-1.2 1.1666 0 .6434.5382 1.1667 1.2 1.1667.6624 0 1.2-.5233 1.2-1.1667 0-.6434-.5376-1.1666-1.2-1.1666z",clipRule:"evenodd"}),q.createElement("path",{fill:e,d:"M7.79999 20.4167h.60366v.5484h-.60366v-.5484zm0 1.0003h.60366v2.6253h-.60366V21.417zM9.06137 21.417h.57189v.3656h.01589c.04589-.0643.09531-.1235.14826-.1777.05296-.0542.1112-.0999.17475-.1371.06704-.0372.14294-.066.22774-.0863.0847-.0237.1818-.0356.2912-.0356.1659 0 .3195.0356.4607.1067.1447.0711.2471.1811.3071.33.1024-.1354.2206-.242.3548-.3199.1341-.0778.3018-.1168.503-.1168.2895 0 .5137.0677.6725.2031.1624.1355.2436.3623.2436.6805v1.8128h-.6036v-1.5335c0-.105-.0036-.1997-.0106-.2844-.0071-.088-.0283-.1625-.0636-.2234-.0318-.0643-.0812-.1134-.1482-.1473-.0671-.0338-.1589-.0508-.2754-.0508-.2048 0-.353.061-.4448.1829-.0918.1218-.1377.2945-.1377.5179v1.5386h-.6036v-1.6859c0-.1828-.0353-.3199-.1059-.4113-.0671-.0948-.1924-.1422-.376-.1422-.0777 0-.1536.0153-.2277.0457-.0706.0305-.13415.0745-.19063.1321-.05295.0575-.09708.1286-.13238.2132-.03177.0847-.04766.1812-.04766.2895v1.5589h-.60366V21.417zM16.2 23.9052c0 .3961-.1165.6906-.3495.8836-.2295.1963-.5613.2945-.9955.2945-.1377 0-.2771-.0135-.4183-.0406-.1377-.0271-.2648-.0728-.3813-.1371-.113-.0643-.2083-.149-.2859-.2539-.0777-.105-.1236-.2336-.1377-.3859h.6037c.0176.0812.0476.1472.09.198.0423.0508.0918.0897.1482.1168.0601.0305.1254.0491.196.0559.0706.0101.1447.0152.2224.0152.2435 0 .4218-.0576.5348-.1727.1129-.1151.1694-.2809.1694-.4976v-.4012h-.0106c-.0847.1456-.2012.259-.3494.3403-.1448.0812-.3019.1218-.4713.1218-.2189 0-.406-.0355-.5613-.1066-.1518-.0745-.2789-.1743-.3813-.2996-.0988-.1286-.1712-.2759-.2171-.4418-.0459-.1659-.0688-.3436-.0688-.5332 0-.176.0282-.3436.0847-.5027.0565-.1591.1377-.2979.2436-.4164.1059-.1219.2347-.2183.3865-.2894.1554-.0711.3301-.1067.5243-.1067.1729 0 .3318.0356.4765.1067.1448.0677.256.176.3336.325h.0106v-.3606H16.2v2.4882zm-1.3397-.3199c.1341 0 .2471-.0254.3389-.0762.0953-.0541.1712-.1235.2277-.2082.06-.088.1024-.1861.1271-.2945.0282-.1117.0423-.2234.0423-.3351 0-.1117-.0141-.2201-.0423-.325-.0283-.105-.0724-.1981-.1324-.2793-.0565-.0812-.1324-.1456-.2277-.193-.0918-.0474-.203-.0711-.3336-.0711-.1342 0-.2471.0271-.3389.0813-.0918.0542-.1659.1252-.2224.2133-.0565.0846-.0971.1828-.1218.2945-.0247.1083-.0371.2167-.0371.325 0 .1083.0142.2149.0424.3199.0282.1016.0706.193.1271.2742.06.0813.1341.1473.2224.198.0918.0508.2012.0762.3283.0762z"}))},Yn=bT;var MT=o=>{var r=o,{color:e="#5856D6"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,d:"M6.60001 21.9499h.60975v.3853h.01694c.04893-.0677.10163-.1302.15809-.1873.05646-.057.11856-.1052.18631-.1445.07152-.0392.15244-.0695.24278-.0909.09033-.025.19384-.0375.31052-.0375.17691 0 .34064.0375.49119.1124.15433.0749.26348.1909.32747.3478.10915-.1427.23524-.2551.37827-.3371.14303-.0821.32182-.1231.53636-.1231.30861 0 .54761.0714.71701.2141.1732.1427.2597.3817.2597.7171v1.9105h-.6436v-1.6162c0-.1106-.0038-.2105-.0113-.2997-.0075-.0927-.0301-.1712-.0677-.2354-.0339-.0678-.0866-.1196-.15813-.1552-.07151-.0357-.16937-.0535-.29358-.0535-.21831 0-.3764.0642-.47426.1926-.09786.1285-.14679.3104-.14679.5459v1.6215H8.3954V22.94c0-.1927-.03764-.3372-.11291-.4335-.07152-.0999-.20514-.1498-.40086-.1498-.08281 0-.16373.016-.24278.0481-.07528.0321-.14303.0785-.20325.1392-.05646.0606-.10351.1355-.14115.2247-.03387.0892-.05081.1909-.05081.3051v1.6429h-.64363v-2.7668zM12.8507 24.7917c-.2334 0-.4423-.0357-.6267-.1071-.1807-.0749-.335-.1766-.463-.305-.1242-.1285-.2202-.2819-.2879-.4603-.064-.1783-.096-.3746-.096-.5886 0-.2105.032-.405.096-.5834.0677-.1784.1637-.3318.2879-.4602.128-.1285.2823-.2284.463-.2997.1844-.0749.3933-.1124.6267-.1124.2333 0 .4404.0375.621.1124.1845.0713.3388.1712.463.2997.128.1284.224.2818.2879.4602.0678.1784.1017.3729.1017.5834 0 .214-.0339.4103-.1017.5886-.0639.1784-.1599.3318-.2879.4603-.1242.1284-.2785.2301-.463.305-.1806.0714-.3877.1071-.621.1071zm0-.4817c.143 0 .2672-.0285.3726-.0856s.192-.132.2597-.2248c.0678-.0927.1167-.1962.1468-.3104.0339-.1177.0508-.2372.0508-.3585 0-.1178-.0169-.2355-.0508-.3533-.0301-.1177-.079-.2212-.1468-.3104-.0677-.0927-.1543-.1676-.2597-.2247-.1054-.0571-.2296-.0856-.3726-.0856s-.2673.0285-.3726.0856c-.1054.0571-.192.132-.2598.2247-.0677.0892-.1185.1927-.1524.3104-.0301.1178-.0452.2355-.0452.3533 0 .1213.0151.2408.0452.3585.0339.1142.0847.2177.1524.3104.0678.0928.1544.1677.2598.2248.1053.0571.2296.0856.3726.0856zM14.5714 21.9499h.7001l.7396 2.1246h.0113l.7114-2.1246H17.4l-1.0445 2.7668h-.7227l-1.0614-2.7668zM16.7813 11.6666c-.1125 0-.225.0365-.3375.1094L14.4 13.0521v-1.0938c0-.4739-.45-.875-.975-.875H7.55626c-.525 0-.95625.4011-.95625.875v5.2682c0 .474.43125.8568.95625.8568H13.425c.525 0 .975-.3828.975-.8568v-1.0937l2.0438 1.276c.1125.0729.225.0912.3375.0912.3187 0 .6-.237.6-.5651V12.25c.0187-.3464-.2813-.5834-.6-.5834zM13.8 17.2265c0 .1459-.1875.2735-.375.2735H7.55626c-.1875 0-.35625-.1276-.35625-.2735v-5.2682c0-.1458.16875-.2917.35625-.2917H13.425c.1875 0 .375.1459.375.2917v5.2682zm3-.2916l-.0375-.0183L14.4 15.4401v-1.6953l2.4-1.4948v4.6849z"}))},Tl=MT;var IT=o=>{var r=o,{color:e="#FFB400"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M6.59998 22.2436h.60542v.3955h.01618c.04853-.0696.1008-.1337.1568-.1923.056-.0586.11822-.108.18791-.1483.06906-.0403.14809-.072.23831-.0958.08898-.0238.19164-.036.308-.036.17484 0 .33849.039.48969.1153.1512.0769.25822.1959.32169.3571.10826-.1465.23333-.2619.3752-.3461.14186-.0842.31982-.1263.532-.1263.30672 0 .54382.0732.71432.2197.1692.1471.2545.3918.2545.736v1.9609h-.6378v-1.6582c0-.1141-.0044-.2179-.0118-.3106-.0075-.094-.0293-.174-.0641-.2423-.0355-.0671-.08899-.1196-.1593-.1563-.07156-.0366-.16862-.0549-.29182-.0549-.21654 0-.37334.0659-.4704.1978-.09707.1318-.14498.3185-.14498.5602v1.6643h-.63902v-1.8236c0-.1977-.03609-.3466-.10889-.4473-.07343-.1007-.20658-.1514-.40071-.1514-.08214 0-.16178.0165-.23769.0495-.07654.0329-.14374.0805-.2016.1428-.05849.0628-.10454.1397-.14063.2307-.03484.0915-.05288.1959-.05288.3131v1.6862h-.6384v-2.8397zM13.732 23.49c0-.1131-.0169-.223-.0527-.3296-.0352-.1067-.0879-.2009-.1576-.2839-.071-.0819-.1582-.1481-.2643-.1987-.1055-.0501-.2266-.0749-.3633-.0749-.2812 0-.4928.0808-.6354.2424-.1426.1621-.2142.3765-.2142.6447 0 .1261.0189.2429.056.3512.0371.1088.0931.2014.1667.279.0742.0776.1634.139.2669.1842.1028.0453.2233.0679.36.0679.1523 0 .2819-.0259.3874-.0776.1054-.0517.192-.119.2604-.2014.0683-.0819.1172-.1756.1465-.2806.0293-.1056.0436-.2128.0436-.3227zM11.4 22.2345h.6334v.3393h.0111c.0944-.1454.2246-.2494.3932-.3124.168-.063.349-.0948.5449-.0948.2377 0 .446.0345.6237.104.1778.0694.3256.1653.4421.2865.1172.1207.2057.2623.2643.4239.058.1616.0873.3345.0873.5187 0 .1681-.0267.3313-.0788.4896-.0527.1584-.1328.2979-.2402.4191-.1075.1217-.2435.2181-.4076.2908-.1641.0733-.3574.1094-.5794.1094-.0983 0-.196-.007-.2936-.0221-.0977-.014-.1915-.0377-.2806-.07-.0905-.0323-.1732-.0733-.2494-.1234-.0762-.0506-.14-.1093-.1907-.1772h-.0118v1.2507H11.4v-3.4321zM15.957 22.7047c.0907.0037.1814-.0037.2721-.0224.0907-.0181.1716-.0511.2429-.0979.0713-.0474.1285-.1116.1722-.1938.0437-.0823.0659-.1833.0659-.303 0-.1683-.0492-.3029-.1485-.4039-.0988-.101-.2256-.1515-.3811-.1515-.0972 0-.1814.0225-.2526.068-.0718.0442-.1307.1047-.1776.182-.047.0767-.0815.1621-.1042.2581-.0227.0953-.0324.1932-.0292.2942h-.5538c.0059-.1902.0372-.3678.0923-.5299.0551-.1626.1306-.3041.2262-.4238.095-.1191.2111-.2132.3471-.2805.136-.0673.2899-.1004.4615-.1004.1328 0 .2629.0219.3908.0667.1285.0449.243.1104.3455.1964.1015.086.1836.1957.2451.3285.0615.1327.0923.2848.0923.4569 0 .1988-.0389.3714-.1166.5186-.0777.1483-.1992.2555-.3644.3228v.0112c.1944.0449.3455.1559.454.3341.1085.1777.163.3934.163.6483 0 .1864-.0323.354-.0971.5011-.0648.1484-.1523.2737-.2624.3765-.1101.1029-.238.182-.3838.2387-.1457.0555-.2996.0836-.4615.0836-.1976 0-.3698-.0324-.5177-.0985-.1474-.0648-.2704-.1577-.3687-.2774-.0993-.1197-.1743-.2636-.2262-.4313-.0518-.1689-.0799-.3559-.0826-.5616h.5539c-.0065.2393.0442.4388.1528.5977.1085.159.2715.2381.4885.2381.1846 0 .339-.061.4642-.182.1242-.1215.1868-.2948.1868-.5192 0-.1533-.0259-.2742-.0777-.3646-.0519-.0898-.1199-.1577-.2041-.2045-.0842-.0467-.1792-.076-.2839-.0872-.1058-.0106-.2133-.0144-.3234-.0106v-.4775zM14.397 16.2524c-.723 0-1.203-.294-1.203-.4882 0-.1943.48-.4883 1.203-.4883.723 0 1.203.294 1.203.4883 0 .1942-.48.4882-1.203.4882zM9.60299 17.5c-.723 0-1.203-.2939-1.203-.4882 0-.1942.48-.4882 1.203-.4882.72301 0 1.20301.294 1.20301.4882 0 .1943-.48.4882-1.20301.4882zm6.48781-6.9324c-.0684-.056-.1578-.0788-.2478-.0624l-4.794 1.1193c-.141.0268-.243.147-.243.287v4.2948c-.3156-.1645-.7296-.266-1.20301-.266-1.0278 0-1.803.4608-1.803 1.0715 0 .6113.7752 1.0715 1.803 1.0715 1.02781 0 1.80301-.4602 1.80301-1.0715v-4.8594L15.6 11.145v3.8136c-.3156-.165-.7296-.266-1.203-.266-1.0278 0-1.803.4603-1.803 1.0716 0 .6107.7752 1.0715 1.803 1.0715s1.803-.4608 1.803-1.0715v-4.972c0-.087-.0402-.1692-.1092-.2246z",clipRule:"evenodd"}))},kl=IT;var wT=o=>{var r=o,{color:e="#5856D6"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,d:"M6.60001 21.6977h.60058v.3893h.01668c.0482-.0685.1001-.1316.15571-.1893.05561-.0576.11678-.1063.18351-.1459.07044-.0397.15015-.0703.23913-.0919.08897-.0253.19092-.0379.30585-.0379.17424 0 .33551.0379.4838.1135.152.0757.25952.1929.32254.3515.10751-.1442.23171-.2577.37259-.3406.14087-.0829.31697-.1244.52829-.1244.30401 0 .53941.0721.70621.2163.1706.1441.2558.3856.2558.7244v1.9302h-.6339v-1.6328c0-.1117-.0037-.2127-.0111-.3028-.0074-.0937-.0297-.173-.0668-.2378-.0333-.0685-.08524-.1208-.15567-.1568-.07044-.0361-.16683-.0541-.28917-.0541-.21503 0-.37074.0649-.46713.1946-.09639.1298-.14458.3136-.14458.5515v1.6382H8.3684v-1.795c0-.1946-.03708-.3406-.11122-.4379-.07044-.1009-.20205-.1514-.39483-.1514-.08156 0-.16127.0162-.23912.0487-.07415.0324-.14088.0793-.2002.1405-.05561.0613-.10195.137-.13902.2271-.03337.0901-.05005.1928-.05005.3082v1.6598h-.63395v-2.7952zM11.4554 21.6977h.6006v.3785h.0111c.089-.1622.2132-.2776.3726-.3461.1594-.072.3318-.1081.5172-.1081.2261 0 .4226.0397.5894.119.1706.0756.3114.182.4227.3189.1112.1334.1946.2902.2502.4704.0556.1802.0834.3731.0834.5785 0 .1874-.0259.3694-.0778.5461-.0482.1766-.1242.3334-.228.4703-.1001.1334-.228.2415-.3838.3244-.1557.0793-.3392.119-.5505.119-.0927 0-.1854-.0091-.278-.0271-.0927-.0144-.1817-.0396-.267-.0757-.0852-.036-.1649-.0811-.2391-.1351-.0704-.0577-.1297-.1244-.1779-.2001h-.0112v1.3949h-.6339v-3.8278zm2.2133 1.4003c0-.1262-.0167-.2487-.0501-.3677-.0334-.1189-.0834-.2234-.1501-.3135-.0668-.0937-.1502-.1676-.2503-.2217-.1001-.0577-.215-.0865-.3448-.0865-.2669 0-.4689.0901-.6061.2703-.1335.1802-.2002.4199-.2002.7191 0 .1406.0167.2721.05.3947.0371.1189.0909.2216.1613.3081.0705.0865.1539.155.2503.2055.1001.0504.215.0757.3447.0757.1446 0 .267-.0289.3671-.0865.1001-.0577.1816-.1316.2446-.2217.0668-.0937.1131-.1982.1391-.3136.0296-.1189.0445-.2397.0445-.3622zM15.1275 23.1088h1.1789v-1.6652h-.0111l-1.1678 1.6652zm2.28.4866h-.5005v.8975h-.6006v-.8975h-1.6683v-.6109l1.6683-2.2762h.6006v2.4005h.5005v.4866zM16.7813 11.6666c-.1125 0-.225.0365-.3375.1094L14.4 13.0521v-1.0938c0-.4739-.45-.875-.975-.875H7.55626c-.525 0-.95625.4011-.95625.875v5.2682c0 .474.43125.8568.95625.8568H13.425c.525 0 .975-.3828.975-.8568v-1.0937l2.0438 1.276c.1125.0729.225.0912.3375.0912.3187 0 .6-.237.6-.5651V12.25c.0187-.3464-.2813-.5834-.6-.5834zM13.8 17.2265c0 .1459-.1875.2735-.375.2735H7.55626c-.1875 0-.35625-.1276-.35625-.2735v-5.2682c0-.1458.16875-.2917.35625-.2917H13.425c.1875 0 .375.1459.375.2917v5.2682zm3-.2916l-.0375-.0183L14.4 15.4401v-1.6953l2.4-1.4948v4.6849z"}))},El=wT;var ST=o=>{var r=o,{color:e="#5856D6"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,d:"M4.79999 21.6599h.6075v.3937h.01687c.04875-.0692.10125-.133.1575-.1914.05625-.0583.11813-.1075.18563-.1476.07125-.0401.15187-.0711.24187-.093.09-.0255.19313-.0383.30938-.0383.17625 0 .33937.0383.48937.1149.15375.0765.2625.195.32625.3554.10875-.1458.23438-.2607.37688-.3445.1425-.0839.32062-.1258.53437-.1258.3075 0 .54563.0729.71438.2188.1725.1458.25875.3901.25875.7328v1.9523h-.64125v-1.6515c0-.1131-.00375-.2151-.01125-.3063-.0075-.0948-.03-.175-.0675-.2406-.03375-.0693-.08625-.1222-.1575-.1586-.07125-.0365-.16875-.0547-.2925-.0547-.2175 0-.375.0656-.4725.1969-.0975.1312-.14625.3172-.14625.5578v1.657h-.64125v-1.8156c0-.1969-.0375-.3445-.1125-.443-.07125-.1021-.20438-.1531-.39938-.1531-.0825 0-.16312.0164-.24187.0492-.075.0328-.1425.0802-.2025.1422-.05625.062-.10313.1385-.14063.2297-.03375.0911-.05062.195-.05062.3117v1.6789h-.64125v-2.8273zM9.71127 21.6599h.60753v.3828h.0112c.09-.1641.2156-.2807.3769-.35.1612-.0729.3356-.1094.5231-.1094.2288 0 .4275.0401.5963.1203.1725.0766.315.1841.4275.3227.1125.1349.1968.2935.2531.4758.0562.1823.0844.3773.0844.5851 0 .1896-.0263.3737-.0788.5524-.0487.1786-.1256.3372-.2306.4757-.1013.1349-.2306.2443-.3881.3282-.1575.0802-.3432.1203-.5569.1203-.0938 0-.1875-.0091-.2813-.0274-.0937-.0145-.1837-.0401-.27-.0765-.0862-.0365-.1668-.0821-.2418-.1367-.0713-.0584-.1313-.1258-.18-.2024h-.0113v1.411h-.64123v-3.8719zM11.95 23.0763c0-.1276-.0169-.2516-.0506-.3719-.0338-.1203-.0844-.226-.1519-.3172-.0675-.0948-.1519-.1695-.2531-.2242-.1013-.0583-.2175-.0875-.3488-.0875-.27 0-.4743.0911-.6131.2734-.135.1823-.2025.4248-.2025.7274 0 .1422.0169.2752.0506.3992.0375.1203.0919.2242.1632.3117.0712.0875.1556.1568.2531.2078.1012.0511.2175.0766.3487.0766.1463 0 .27-.0292.3713-.0875.1012-.0583.1837-.1331.2475-.2242.0675-.0948.1144-.2005.1406-.3172.03-.1203.045-.2425.045-.3664zM15.13 22.8247c-.0075-.0984-.03-.1932-.0675-.2844-.0338-.0911-.0825-.1695-.1463-.2351-.06-.0693-.135-.124-.225-.1641-.0862-.0437-.1837-.0656-.2925-.0656-.1125 0-.2156.0201-.3093.0602-.09.0364-.1688.0893-.2363.1586-.0637.0656-.1162.144-.1575.2351-.0375.0912-.0581.1896-.0619.2953H15.13zm-1.4963.4102c0 .1094.015.2151.045.3172.0338.102.0825.1914.1463.2679.0637.0766.1444.1386.2419.186.0975.0437.2137.0656.3487.0656.1875 0 .3375-.0383.45-.1148.1163-.0803.2025-.1987.2588-.3555h.6075c-.0338.1531-.0919.2898-.1744.4101-.0825.1204-.1819.2224-.2981.3063-.1163.0802-.2475.1404-.3938.1805-.1425.0437-.2925.0656-.45.0656-.2287 0-.4312-.0365-.6075-.1094-.1762-.0729-.3262-.175-.45-.3062-.12-.1313-.2119-.2881-.2756-.4704-.06-.1822-.09-.3828-.09-.6015 0-.2005.0319-.3901.0956-.5688.0675-.1823.1613-.3409.2813-.4757.1237-.1386.2718-.248.4443-.3282s.3675-.1203.585-.1203c.2288 0 .4332.0474.6132.1422.1837.0911.3356.2133.4556.3664s.2062.33.2587.5305c.0563.1969.0713.401.045.6125h-2.1375zM18.9475 24.3396c0 .4265-.1238.7437-.3713.9515-.2437.2115-.5962.3172-1.0575.3172-.1462 0-.2944-.0146-.4444-.0437-.1462-.0292-.2812-.0784-.4049-.1477-.12-.0693-.2213-.1604-.3038-.2734-.0825-.1131-.1312-.2516-.1462-.4157h.6412c.0187.0875.0506.1586.0956.2133.045.0547.0975.0966.1575.1258.0638.0328.1332.0529.2081.0602.075.0109.1538.0164.2363.0164.2587 0 .4481-.062.5681-.186.12-.1239.18-.3026.18-.5359v-.432h-.0112c-.09.1567-.2138.2789-.3713.3664-.1537.0875-.3206.1312-.5006.1312-.2325 0-.4313-.0383-.5963-.1148-.1612-.0802-.2962-.1878-.4049-.3227-.105-.1385-.1819-.2971-.2307-.4758-.0487-.1786-.0731-.37-.0731-.5742 0-.1896.03-.37.09-.5414.06-.1713.1462-.3208.2587-.4484.1125-.1313.2494-.2352.4107-.3117.165-.0766.3506-.1149.5569-.1149.1837 0 .3524.0383.5062.1149.1537.0729.2719.1895.3544.35h.0112v-.3883h.6413v2.6797zm-1.4231-.3446c.1425 0 .2624-.0273.3599-.082.1013-.0583.1819-.1331.2419-.2242.0638-.0948.1088-.2005.135-.3172.03-.1203.045-.2406.045-.3609 0-.1204-.015-.237-.045-.35-.03-.1131-.0769-.2133-.1406-.3008-.06-.0875-.1406-.1568-.2419-.2078-.0975-.0511-.2156-.0766-.3543-.0766-.1426 0-.2626.0292-.3601.0875-.0975.0583-.1762.1349-.2362.2297-.06.0911-.1031.1969-.1294.3172-.0262.1166-.0394.2333-.0394.35 0 .1166.015.2315.045.3445.03.1094.075.2078.1351.2953.0637.0875.1425.1586.2362.2133.0975.0547.2137.082.3488.082zM16.7812 11.6666c-.1125 0-.225.0365-.3375.1094L14.4 13.0521v-1.0938c0-.4739-.45-.875-.975-.875H7.55623c-.525 0-.95625.4011-.95625.875v5.2682c0 .474.43125.8568.95625.8568H13.425c.525 0 .975-.3828.975-.8568v-1.0937l2.0437 1.276c.1125.0729.225.0912.3375.0912.3188 0 .6-.237.6-.5651V12.25c.0188-.3464-.2812-.5834-.6-.5834zM13.8 17.2265c0 .1459-.1875.2735-.375.2735H7.55623c-.1875 0-.35625-.1276-.35625-.2735v-5.2682c0-.1458.16875-.2917.35625-.2917H13.425c.1875 0 .375.1459.375.2917v5.2682zm3-.2916l-.0375-.0183L14.4 15.4401v-1.6953l2.4-1.4948v4.6849z"}))},ms=ST;var PT=o=>{var r=o,{color:e="#F02B04"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M10.1143 23.3886c0-.1225-.0162-.2415-.0486-.357-.0324-.1155-.08104-.2176-.14584-.3074-.0648-.0887-.1458-.1604-.243-.2152-.0972-.0543-.2088-.0811-.3348-.0811-.2592 0-.4542.0875-.5856.2625-.1314.1756-.1974.4077-.1974.6982 0 .1365.0174.2631.0516.3804.0336.1178.0852.2181.1536.3021.0684.084.15.1505.246.1995.0948.049.2058.0735.3318.0735.1404 0 .2592-.028.3564-.084.0972-.056.1776-.1289.2406-.2181.06304-.0887.10804-.1902.13504-.304.027-.1143.0402-.2304.0402-.3494zm-2.14924-1.3597h.5832v.3675h.0108c.0864-.1575.207-.2701.3618-.3384.1548-.0682.3222-.1026.5022-.1026.2196 0 .4116.0373.5754.1126.16384.0752.29944.179.40744.3103.108.1307.189.2841.243.4591.054.175.081.3622.081.5617 0 .182-.0246.3588-.0726.5303-.0486.1715-.1224.3226-.2214.4538-.099.1318-.2244.2363-.3756.315-.15124.0793-.32944.1184-.53464.1184-.09 0-.18-.0076-.27-.0239-.09-.0152-.1764-.0408-.2592-.0758-.0828-.035-.159-.0794-.2298-.1336-.0696-.0548-.1284-.1184-.1752-.1919h-.0108v1.3545h-.6156v-3.717zM11.8639 23.4149c0 .1155.015.2298.0462.3412.03.112.0774.2118.1404.2993.063.0875.1428.1575.24.21.0972.0525.2124.0787.3456.0787.1368 0 .2544-.028.3534-.084.0996-.0554.1806-.1289.2436-.2205.063-.091.1098-.1936.1404-.3068.03-.1138.0456-.2304.0456-.3494 0-.301-.069-.5355-.2076-.7035-.1386-.168-.327-.252-.5646-.252-.144 0-.2652.0286-.3642.0869-.099.0577-.1806.133-.2436.2257-.063.0928-.1074.1978-.1344.315-.0276.1173-.0408.2369-.0408.3594zm2.1492 1.3282h-.5832v-.3675h-.0108c-.0828.1575-.2034.2701-.3618.3389-.1584.0683-.3258.1021-.5022.1021-.2196 0-.411-.0373-.5748-.1126-.1644-.0752-.3-.1779-.408-.3074-.108-.1295-.189-.2829-.243-.4591-.054-.1767-.081-.3663-.081-.5699 0-.245.0342-.4567.1026-.6352.0684-.1785.1596-.3255.273-.441.1134-.1155.243-.2007.3888-.2544.1458-.0542.294-.0816.4452-.0816.0864 0 .1746.0081.2646.0239.09.0152.1764.0408.2592.0758.0828.035.1596.0799.2298.1336.0702.0543.1284.119.1752.1925h.0108v-1.386h.6156v3.7479zM14.5422 22.0289h.459v-.2258c0-.1715.0216-.3103.0648-.4176.0432-.1062.1008-.189.1728-.2462.072-.0578.1536-.0963.2454-.1161.0924-.0187.1884-.028.2892-.028.198 0 .342.0117.432.0362v.4672c-.0396-.0105-.0822-.0181-.1266-.0233-.0456-.0053-.0984-.0082-.1596-.0082-.0828 0-.1536.0193-.2136.0578-.0594.0385-.0888.1137-.0888.2257v.2783h.5238v.4462h-.5238v2.268h-.6156v-2.268h-.459v-.4462zM12.3001 11.0555h4.2c.1656 0 .3-.1307.3-.2917s-.1344-.2916-.3-.2916h-4.2c-.1656 0-.3.1306-.3.2916 0 .161.1344.2917.3.2917zM16.5001 12.2222h-4.2c-.1656 0-.3.1306-.3.2916 0 .161.1344.2917.3.2917h4.2c.1656 0 .3-.1307.3-.2917s-.1344-.2916-.3-.2916zM16.5001 13.9722h-4.2c-.1656 0-.3.1306-.3.2916 0 .161.1344.2917.3.2917h4.2c.1656 0 .3-.1307.3-.2917s-.1344-.2916-.3-.2916zM16.5001 15.7222H7.50013c-.1656 0-.3.1306-.3.2916 0 .161.1344.2917.3.2917h8.99997c.1656 0 .3-.1307.3-.2917s-.1344-.2916-.3-.2916zM16.5001 17.4722H7.50013c-.1656 0-.3.1306-.3.2916 0 .161.1344.2917.3.2917h8.99997c.1656 0 .3-.1307.3-.2917s-.1344-.2916-.3-.2916zM7.80001 13.972H10.2v-2.9167H7.80001v2.9167zm-.3.5833H10.5c.1662 0 .3-.1301.3-.2916v-3.5c0-.161-.1338-.2917-.3-.2917H7.50001c-.1656 0-.3.1307-.3.2917v3.5c0 .1615.1344.2916.3.2916z",clipRule:"evenodd"}))},Nl=PT;var TT=o=>{var r=o,{color:e="#FF742F"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M10.0811 23.3886c0-.1225-.0162-.2415-.0486-.357-.0324-.1155-.08101-.2176-.14581-.3074-.0648-.0887-.1458-.1604-.243-.2152-.0972-.0543-.2088-.0811-.3348-.0811-.2592 0-.4542.0875-.5856.2625-.1314.1756-.1974.4077-.1974.6982 0 .1365.0174.2631.0516.3804.0336.1178.0852.2181.1536.3021.0684.084.15.1505.246.1995.0948.049.2058.0735.3318.0735.1404 0 .2592-.028.3564-.084.0972-.056.1776-.1289.2406-.2181.063-.0887.10801-.1902.13501-.304.027-.1143.0402-.2304.0402-.3494zm-2.14922-1.3597h.5832v.3675h.0108c.0864-.1575.207-.2701.3618-.3384.1548-.0682.3222-.1026.5022-.1026.2196 0 .4116.0373.5754.1126.16382.0752.29942.179.40742.3103.108.1307.189.2841.243.4591.054.175.081.3622.081.5617 0 .182-.0246.3588-.0726.5303-.0486.1715-.1224.3226-.2214.4538-.099.1318-.2244.2363-.3756.315-.15122.0793-.32942.1184-.53462.1184-.09 0-.18-.0076-.27-.0239-.09-.0152-.1764-.0408-.2592-.0758-.0828-.035-.159-.0794-.2298-.1336-.0696-.0548-.1284-.1184-.1752-.1919h-.0108v1.3545h-.6156v-3.717zM13.5157 23.3886c0-.1225-.0162-.2415-.0486-.357-.0324-.1155-.081-.2176-.1458-.3074-.0648-.0887-.1458-.1605-.243-.2153-.0972-.0542-.2088-.0811-.3348-.0811-.2592 0-.4542.0875-.5856.2625-.1314.1756-.1974.4078-.1974.6983 0 .1365.0174.2631.0516.3803.0336.1178.0852.2182.1536.3022.0684.084.15.1505.246.1995.0948.049.2058.0735.3318.0735.1404 0 .2592-.028.3564-.084.0972-.056.1776-.1289.2406-.2182.063-.0887.108-.1902.135-.3039.027-.1143.0402-.2304.0402-.3494zm-2.1492-1.3598h.5832v.3675h.0108c.0864-.1575.207-.2701.3618-.3383.1548-.0683.3222-.1027.5022-.1027.2196 0 .4116.0374.5754.1126.1638.0753.2994.1791.4074.3103.108.1307.189.2841.243.4591.054.175.081.3623.081.5618 0 .182-.0246.3587-.0726.5302-.0486.1715-.1224.3226-.2214.4539-.099.1318-.2244.2362-.3756.315-.1512.0793-.3294.1184-.5346.1184-.09 0-.18-.0076-.27-.0239-.09-.0152-.1764-.0409-.2592-.0759-.0828-.035-.159-.0793-.2298-.1336-.0696-.0548-.1284-.1184-.1752-.1919h-.0108v1.3545h-.6156v-3.717zM14.5036 22.0288h.4644v-.8137h.6156v.8137h.5562v.4463h-.5562v1.449c0 .063.003.1172.0084.1627.0054.0455.018.084.0378.1161.0198.0309.0492.0543.0888.0706.0396.0157.0936.0233.162.0233.0432 0 .0864-.0006.1296-.0023.0432-.0018.0864-.0082.1296-.0181v.462c-.0684.0064-.135.0134-.1998.0204-.0648.007-.1314.0105-.1998.0105-.162 0-.2922-.0146-.3912-.0449-.099-.0297-.1764-.0735-.2328-.1312-.0552-.0572-.093-.1301-.1128-.2176-.0198-.0875-.0318-.1873-.0354-.2993v-1.6012h-.4644v-.4463zM11.5263 10.8094c-1.0752 0-2.08619.4072-2.84699 1.1468-.7608.7391-1.179 1.7226-1.179 2.768 0 1.0453.4188 2.0282 1.179 2.7673.7602.7402 1.77179 1.1468 2.84699 1.1468s2.0862-.4071 2.847-1.1468c.7608-.7391 1.179-1.722 1.179-2.7673 0-.1278-.1056-.2305-.2364-.2305h-3.5526v-3.4539c0-.1271-.1062-.2304-.237-.2304zm-.363.602v3.0823c0 .322.2682.5834.6.5834h3.1704c-.0816.7566-.4236 1.4571-.9846 2.002-.648.6294-1.5084.9759-2.4228.9759-.9156 0-1.7754-.3465-2.4228-.9759-.6468-.6294-1.0032-1.4659-1.0032-2.3549 0-.8902.3558-1.7267 1.0032-2.355.561-.546 1.2822-.8785 2.0598-.9578z",clipRule:"evenodd"}),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M12.5931 9.8882c-.1266 0-.2298.10033-.2298.224v3.5747c0 .1236.1032.224.2298.224h3.6768c.1272 0 .2304-.1004.2304-.224 0-1.0145-.4068-1.9682-1.1448-2.6857-.7374-.7175-1.719-1.113-2.7624-1.113zm.3702.6032c.7434.0805 1.4316.4007 1.968.9222.5364.5221.8658 1.1912.9486 1.9139h-2.9166v-2.8361z",clipRule:"evenodd"}))},ds=TT;var kT=o=>{var r=o,{color:e="#FF742F"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M16.5001 11.0549H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h8.99997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM14.7001 12.8049H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h7.19997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM16.5001 14.5549H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h8.99997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM14.7001 16.3049H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h7.19997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916zM16.5001 18.0549H7.50013c-.1656 0-.3-.1306-.3-.2916 0-.161.1344-.2917.3-.2917h8.99997c.1656 0 .3.1307.3.2917s-.1344.2916-.3.2916z",clipRule:"evenodd"}),q.createElement("path",{fill:e,d:"M7.20001 21.9525h.61485v.3874h.01138c.09109-.166.21824-.2841.38144-.3542.1632-.0738.33968-.1107.52945-.1107.23151 0 .43267.0406.60346.1218.17459.0775.31881.1863.43267.3265.11386.1366.19925.2971.25614.4816.057.1845.0854.3819.0854.5922 0 .1919-.0265.3782-.0797.559-.0493.1808-.12711.3413-.23338.4816-.10247.1365-.23341.2472-.39281.332-.15941.0812-.34728.1218-.56361.1218-.09489 0-.18977-.0092-.28466-.0277-.09488-.0147-.18597-.0406-.27326-.0775s-.16889-.083-.2448-.1383c-.07211-.0591-.13284-.1273-.18218-.2048h-.01138v1.428h-.64901v-3.9187zm2.26583 1.4335c0-.1291-.01708-.2546-.05124-.3763-.03416-.1218-.0854-.2288-.15371-.3211-.06832-.0959-.15371-.1716-.25619-.2269-.10247-.059-.22013-.0886-.35297-.0886-.27326 0-.48011.0923-.62054.2768-.13663.1845-.20495.4299-.20495.7361 0 .1439.01708.2786.05124.4041.03796.1217.09299.2269.1651.3155.07211.0885.15751.1586.25619.2103.10247.0516.22013.0775.35296.0775.14802 0 .27327-.0295.37574-.0886.10248-.059.18597-.1347.2505-.2269.06831-.096.11575-.203.14232-.321.03036-.1218.04555-.2454.04555-.3709zM10.6803 21.9525h.6149v.3874h.0114c.091-.166.2182-.2841.3814-.3542.1632-.0738.3397-.1107.5294-.1107.2315 0 .4327.0406.6035.1218.1746.0775.3188.1863.4327.3265.1138.1366.1992.2971.2561.4816.057.1845.0854.3819.0854.5922 0 .1919-.0265.3782-.0797.559-.0493.1808-.1271.3413-.2334.4816-.1024.1365-.2334.2472-.3928.332-.1594.0812-.3473.1218-.5636.1218-.0949 0-.1898-.0092-.2847-.0277-.0948-.0147-.1859-.0406-.2732-.0775-.0873-.0369-.1689-.083-.2448-.1383-.0721-.0591-.1329-.1273-.1822-.2048h-.0114v1.428h-.649v-3.9187zm2.2658 1.4335c0-.1291-.017-.2546-.0512-.3763-.0342-.1218-.0854-.2288-.1537-.3211-.0683-.0959-.1537-.1716-.2562-.2269-.1025-.059-.2201-.0886-.353-.0886-.2732 0-.4801.0923-.6205.2768-.1366.1845-.2049.4299-.2049.7361 0 .1439.017.2786.0512.4041.0379.1217.093.2269.1651.3155.0721.0885.1575.1586.2562.2103.1024.0516.2201.0775.3529.0775.1481 0 .2733-.0295.3758-.0886.1025-.059.1859-.1347.2505-.2269.0683-.096.1157-.203.1423-.321.0304-.1218.0455-.2454.0455-.3709zM14.9349 23.3085l-1.0191-1.356h.7857l.6148.88.6433-.88h.7515l-1.002 1.3228 1.1272 1.5387h-.7799l-.7458-1.0571-.723 1.0571h-.7629l1.1102-1.5055z"}))},Ll=kT;var ET=o=>{var r=o,{color:e="#F14B5F"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M10.2396 14.2917v.5833c0 .161-.1428.2917-.31979.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.17699 0 .31979.1307.31979.2917zM10.8794 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM11.5193 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM12.1597 13.7083v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3204-.1307-.3204-.2917v-.5833c0-.161.1434-.2917.3204-.2917.1764 0 .3198.1307.3198.2917zM12.7996 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM13.4394 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM9.59976 13.7083v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3204-.1307-.3204-.2917v-.5833c0-.161.1434-.2917.3204-.2917.1764 0 .3198.1307.3198.2917zM14.0798 14.2917v.5833c0 .161-.1434.2917-.3204.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3204.1307.3204.2917zM5.11967 14.2917v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.1764 0 .3198.1307.3198.2917zM5.75953 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM6.39937 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM7.0398 13.7083v.5833c0 .161-.1434.2917-.3204.2917-.1764 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1434-.2917.3198-.2917.177 0 .3204.1307.3204.2917zM7.67964 14.2917v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.1764 0 .3198.1307.3198.2917zM8.31947 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM4.47986 13.7083v.5833c0 .161-.1434.2917-.3204.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3204.1307.3204.2917zM1.91929 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM2.55973 14.2917v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3204-.1307-.3204-.2917v-.5833c0-.161.1434-.2917.3204-.2917.1764 0 .3198.1307.3198.2917zM3.19957 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM3.8394 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM8.95933 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM18.9197 14.2917v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.1764 0 .3198.1307.3198.2917zM18.2798 13.7083v.5833c0 .161-.1434.2917-.3204.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3204.1307.3204.2917zM15.0794 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM15.7193 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM16.3597 14.2917v.5833c0 .161-.1434.2917-.3198.2917-.177 0-.3204-.1307-.3204-.2917v-.5833c0-.161.1434-.2917.3204-.2917.1764 0 .3198.1307.3198.2917zM16.9996 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917zM17.6394 14.2917v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917z",clipRule:"evenodd"}),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M14.4396 13.7083v.5833c0 .161-.1428.2917-.3198.2917-.177 0-.3198-.1307-.3198-.2917v-.5833c0-.161.1428-.2917.3198-.2917.177 0 .3198.1307.3198.2917z",clipRule:"evenodd"}),q.createElement("path",{fill:e,d:"M9 21.0773h.60793v.5524h.01136c.01894-.0773.05492-.1528.10795-.2265.05682-.0736.1231-.1399.19886-.1988.0795-.0626.1667-.1123.2614-.1492.0946-.0368.1912-.0552.2897-.0552.0758 0 .1269.0018.1534.0055l.0909.0111v.6076c-.0454-.0074-.0928-.0129-.142-.0166-.0455-.0074-.0909-.011-.1364-.011-.1098 0-.214.0221-.3125.0663-.0947.0405-.17799.1031-.24995.1878-.07197.081-.12879.1822-.17045.3038-.04167.1215-.0625.2614-.0625.4198v1.3588H9v-2.8558zM13.4576 23.2979c0 .0773.0094.1326.0284.1657.0227.0331.0644.0497.125.0497h.0681c.0266 0 .0569-.0037.0909-.011v.4363c-.0227.0074-.053.0148-.0909.0221-.0341.0111-.07.0203-.1079.0277-.0379.0073-.0758.0128-.1136.0165-.0379.0037-.0701.0055-.0966.0055-.1326 0-.2424-.0257-.3296-.0773-.0871-.0515-.1439-.1418-.1704-.2706-.1288.1215-.2879.2099-.4773.2651-.1856.0552-.3655.0828-.5397.0828-.1326 0-.2595-.0184-.3807-.0552-.1212-.0331-.2291-.0828-.3238-.1491-.0909-.07-.1648-.1565-.2216-.2596-.053-.1068-.0796-.2302-.0796-.3701 0-.1768.0322-.3204.0966-.4309.0682-.1105.1553-.197.2614-.2596.1098-.0626.231-.1068.3636-.1326.1364-.0294.2727-.0515.4091-.0663.1174-.0221.2291-.0368.3352-.0442.1061-.011.1989-.0276.2784-.0497.0833-.0221.1477-.0552.1932-.0994.0492-.0479.0738-.1178.0738-.2099 0-.081-.0208-.1473-.0625-.1989-.0378-.0515-.0871-.0902-.1477-.116-.0568-.0294-.1212-.0478-.1932-.0552-.0719-.011-.1401-.0166-.2045-.0166-.1818 0-.3314.0369-.4488.1105-.1175.0737-.1838.1878-.1989.3425h-.6477c.0114-.1841.0568-.337.1364-.4585.0795-.1215.1799-.2191.3011-.2927.125-.0737.2651-.1252.4204-.1547S12.1186 21 12.2815 21c.1439 0 .2859.0147.4261.0442.1401.0295.2651.0773.375.1436.1136.0663.2045.1528.2727.2596.0682.1031.1023.2302.1023.3812v1.4693zm-.6477-.7954c-.0985.0626-.2197.1012-.3637.116-.1439.011-.2878.0294-.4318.0552-.0681.011-.1344.0276-.1988.0497-.0644.0184-.1212.046-.1705.0829-.0492.0331-.089.0791-.1193.1381-.0265.0552-.0398.1233-.0398.2043 0 .07.0209.1289.0625.1768.0417.0479.091.0865.1478.116.0606.0258.125.0442.1931.0552.072.0111.1364.0166.1932.0166.072 0 .1496-.0092.233-.0276.0833-.0184.1609-.0497.2329-.0939.0758-.0442.1383-.0994.1875-.1657.0492-.07.0739-.1547.0739-.2541v-.4695zM14.1545 21.0773h.6079v.5524h.0114c.0189-.0773.0549-.1528.1079-.2265.0568-.0736.1231-.1399.1989-.1988.0795-.0626.1666-.1123.2613-.1492.0947-.0368.1913-.0552.2898-.0552.0757 0 .1269.0018.1534.0055l.0909.0111v.6076c-.0454-.0074-.0928-.0129-.142-.0166-.0455-.0074-.0909-.011-.1364-.011-.1098 0-.214.0221-.3125.0663-.0947.0405-.178.1031-.25.1878-.0719.081-.1288.1822-.1704.3038-.0417.1215-.0625.2614-.0625.4198v1.3588h-.6477v-2.8558z"}),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M22.4394 14.2917c0 .161-.1428.2916-.3198.2916h-1.6002V14h1.6002c.177 0 .3198.1307.3198.2917zm-3.1998 0c0-.161.1428-.2917.3198-.2917h.3198v.5833h-.3198c-.177 0-.3198-.1306-.3198-.2916zm-.6396 0c0 .4824.4296.875.9594.875h2.5602c.5292 0 .9594-.3926.9594-.875 0-.4825-.4302-.875-.9594-.875h-2.5602c-.5298 0-.9594.3925-.9594.875z",clipRule:"evenodd"}))},Al=ET;var NT=o=>{var r=o,{color:e="#795545"}=r,t=I(r,["color"]);return q.createElement(ae,d({},t),q.createElement("path",{fill:e,fillRule:"evenodd",d:"M8.57751 22.0289h.4644v-.8138h.6156v.8138h.55619v.4462h-.55619v1.449c0 .063.003.1173.0078.1628.0054.0455.0186.084.0384.1161.0192.0309.0492.0542.0888.0706.0396.0157.0936.0233.162.0233.0432 0 .08639-.0006.12959-.0023.0432-.0018.0864-.0082.1296-.0181v.462c-.0684.0064-.135.0134-.1998.0204-.06479.007-.13139.0105-.19979.0105-.162 0-.2928-.0146-.3918-.0449-.099-.0298-.1764-.0735-.2322-.1313-.0552-.0571-.0936-.1301-.1134-.2176-.0192-.0875-.0312-.1872-.0348-.2992v-1.6013h-.4644v-.4462zM11.5424 23.3152l-.9666-1.2863h.7452l.5832.8348.6102-.8348h.7128l-.9504 1.2548 1.0692 1.4595h-.7404l-.7068-1.0028-.6858 1.0028h-.7236l1.053-1.428zM13.5451 22.0289h.4644v-.8138h.6162v.8138h.5562v.4462h-.5562v1.449c0 .063.0024.1173.0078.1628s.018.084.0378.1161c.0198.0309.0492.0542.0888.0706.0402.0157.0942.0233.1626.0233.0426 0 .0858-.0006.1296-.0023.0426-.0018.0858-.0082.1296-.0181v.462c-.069.0064-.135.0134-.1998.0204-.0654.007-.1314.0105-.1998.0105-.1626 0-.2928-.0146-.3918-.0449-.099-.0298-.1764-.0735-.2328-.1313-.0552-.0571-.093-.1301-.1128-.2176-.0198-.0875-.0318-.1872-.0354-.2992v-1.6013h-.4644v-.4462zM12.9 11.0549h3.6c.1656 0 .3-.1306.3-.2916 0-.161-.1344-.2917-.3-.2917h-3.6c-.1656 0-.3.1307-.3.2917s.1344.2916.3.2916zM16.5 12.2216h-3.6c-.1656 0-.3.1307-.3.2917s.1344.2916.3.2916h3.6c.1656 0 .3-.1306.3-.2916 0-.161-.1344-.2917-.3-.2917zM16.5 13.9716h-3.6c-.1656 0-.3.1307-.3.2917s.1344.2916.3.2916h3.6c.1656 0 .3-.1306.3-.2916 0-.161-.1344-.2917-.3-.2917zM16.5 15.7216H7.50001c-.1656 0-.3.1307-.3.2917s.1344.2916.3.2916H16.5c.1656 0 .3-.1306.3-.2916 0-.161-.1344-.2917-.3-.2917zM16.5 17.4716H7.50001c-.1656 0-.3.1307-.3.2917s.1344.2916.3.2916H16.5c.1656 0 .3-.1306.3-.2916 0-.161-.1344-.2917-.3-.2917zM7.50001 11.0549h1.5v3.2813c0 .161.1344.2916.3.2916s.3-.1306.3-.2916v-3.2813H11.1c.1656 0 .3-.1306.3-.2916 0-.161-.1344-.2917-.3-.2917H7.50001c-.1656 0-.3.1307-.3.2917s.1344.2916.3.2916z",clipRule:"evenodd"}))},Bl=NT;var LT=({color:e="#27B740"})=>q.createElement(ae,null,q.createElement("path",{fill:e,fillRule:"evenodd",d:"M9.35494 23.3152l-.9666-1.2863h.7452l.5832.8348.61016-.8348h.7128l-.9504 1.2548 1.0692 1.4595h-.7398l-.70736-1.0028-.6858 1.0028h-.7236l1.053-1.428zM11.6556 24.7432h.6156v-3.7484h-.6156v3.7484zM13.5397 23.8718c.018.175.0864.2974.2052.3674.1188.07.261.105.4266.105.0576 0 .123-.004.1968-.0134.0738-.0087.1434-.0251.2082-.0496.0648-.0245.1176-.06.1596-.1073.0414-.0472.06-.1097.0564-.1866-.0036-.077-.0324-.14-.0864-.189-.054-.049-.1236-.0881-.2076-.1179-.0846-.0303-.1812-.0554-.2892-.0764-.108-.021-.2178-.0437-.3294-.0682-.1152-.0245-.2262-.0543-.3318-.0893-.1068-.035-.2022-.0822-.2862-.1417-.0846-.0595-.1524-.1354-.2028-.2281-.0504-.0928-.0756-.2077-.0756-.3442 0-.147.0366-.2707.1104-.3704.0738-.0998.168-.1797.2814-.2415.1134-.0607.2394-.1038.3774-.1283.1386-.0245.2712-.0368.3972-.0368.144 0 .2814.0146.4134.0443.1308.0304.2502.0782.3558.1447.1068.0665.195.1534.2652.2596.0696.1073.114.2357.132.3862h-.6426c-.0288-.1435-.0966-.2398-.2022-.2888-.1068-.049-.228-.0741-.3648-.0741-.0432 0-.0942.0041-.1542.0111-.0594.007-.1146.0198-.1668.0391-.0528.0198-.0966.0472-.1326.0846-.036.0361-.054.0846-.054.1441 0 .0735.0264.133.078.1785.0522.0455.1212.0828.2058.1125.084.0304.1806.0555.2886.0765.108.021.2196.0437.3348.0682.1116.0245.2214.0543.3294.0893.108.035.204.0822.2892.1417.084.0595.1524.1348.2046.2258.0522.091.0786.203.0786.3354 0 .1615-.0378.298-.1134.41-.0756.112-.174.203-.294.273-.1212.07-.255.1208-.4026.1523-.1476.0315-.2934.0472-.4374.0472-.1764 0-.3396-.0192-.4884-.0577-.1494-.0385-.2796-.0974-.3888-.1756-.1098-.0793-.1962-.1773-.2592-.294-.063-.1172-.0966-.2566-.1002-.4176h.6156zM13.8 17.4714h2.4v-2.9166h-2.4v2.9166zm-3 0h2.4v-2.9166h-2.4v2.9166zm-3.00002 0H10.2v-2.9166H7.79998v2.9166zm0-3.5H10.2v-2.9166H7.79998v2.9166zm6.00002 0h2.4v-2.9166h-2.4v2.9166zm-3 0h2.4v-2.9166h-2.4v2.9166zm5.7-3.5H7.49998c-.1662 0-.3.1307-.3.2917v7c0 .1616.1338.2917.3.2917H16.5c.1656 0 .3-.1301.3-.2917v-7c0-.161-.1344-.2917-.3-.2917z",clipRule:"evenodd"})),ps=LT;var AT=({color:e="#5856D6"})=>q.createElement(ae,null,q.createElement("path",{fill:e,fillRule:"evenodd",d:"M8.35116 22.0289h2.26804v.42l-1.59844 1.8217h1.67944v.4725H8.24316v-.42l1.5444-1.8211h-1.4364v-.4731zM11.2998 24.7433h.6156V22.029h-.6156v2.7143zm0-3.1816h.6156v-.5669h-.6156v.5669zM14.8852 23.3886c0-.1225-.0162-.2415-.0486-.357-.0324-.1155-.081-.2176-.1458-.3074-.0648-.0887-.1458-.1604-.243-.2152-.0972-.0543-.2088-.0811-.3348-.0811-.2592 0-.4542.0875-.5856.2625-.1314.1756-.1974.4077-.1974.6982 0 .1365.0174.2631.0516.3804.0336.1178.0852.2181.1536.3021.0684.084.15.1505.246.1995.0948.049.2058.0735.3318.0735.1404 0 .2592-.028.3564-.084.0972-.056.1776-.1289.2406-.2181.063-.0887.108-.1902.135-.304.027-.1143.0402-.2304.0402-.3494zm-2.1492-1.3597h.5832v.3675h.0108c.0864-.1575.207-.2701.3618-.3384.1548-.0682.3222-.1026.5022-.1026.2196 0 .4116.0373.5754.1126.1638.0752.2994.179.4074.3103.108.1307.189.2841.243.4591.054.175.081.3622.081.5617 0 .182-.0246.3588-.0726.5303-.0486.1715-.1224.3226-.2214.4538-.099.1318-.2244.2363-.3756.315-.1512.0793-.3294.1184-.5346.1184-.09 0-.18-.0076-.27-.0239-.09-.0152-.1764-.0408-.2592-.0758-.0828-.035-.159-.0794-.2298-.1336-.0696-.0548-.1284-.1184-.1752-.1919h-.0108v1.3545h-.6156v-3.717zM12.0001 10.2465h-.6c-.1656 0-.3-.1388-.3-.31088 0-.17208.1344-.31091.3-.31091h.6c.1656 0 .3.13883.3.31091s-.1344.31088-.3.31088zM12.6001 10.8686h-.6c-.1656 0-.3-.1388-.3-.3109s.1344-.3109.3-.3109h.6c.1656 0 .3.1388.3.3109s-.1344.3109-.3.3109zM12.0001 11.4907h-.6c-.1656 0-.3-.1389-.3-.3109 0-.1721.1344-.311.3-.311h.6c.1656 0 .3.1389.3.311 0 .172-.1344.3109-.3.3109zM12.6001 12.1133h-.6c-.1656 0-.3-.1394-.3-.3109 0-.1721.1344-.3115.3-.3115h.6c.1656 0 .3.1394.3.3115 0 .1715-.1344.3109-.3.3109zM12.0001 12.7354h-.6c-.1656 0-.3-.1388-.3-.3109s.1344-.3109.3-.3109h.6c.1656 0 .3.1388.3.3109s-.1344.3109-.3.3109zM12.6001 13.3575h-.6c-.1656 0-.3-.1389-.3-.311 0-.172.1344-.3109.3-.3109h.6c.1656 0 .3.1389.3.3109 0 .1721-.1344.311-.3.311zM12.0001 17.7131c-.1656 0-.3-.1388-.3-.3109v-1.5558h.6v1.5558c0 .1721-.1344.3109-.3.3109zm0-3.1109c.1656 0 .3.1388.3.3109v.3109h-.6v-.3109c0-.1721.1344-.3109.3-.3109zm0-.6219c-.4962 0-.9.4177-.9.9328v2.4891c0 .5145.4038.9327.9.9327.4962 0 .9-.4182.9-.9327v-2.4891c0-.5151-.4038-.9328-.9-.9328zM12.6001 9.62448h-.6c-.1656 0-.3-.13942-.3-.31092 0-.17208.1344-.3115.3-.3115h.6c.1656 0 .3.13942.3.3115 0 .1715-.1344.31092-.3.31092zM12.0001 13.9801h-.6c-.1656 0-.3-.1394-.3-.3115s.1344-.3109.3-.3109h.6c.1656 0 .3.1388.3.3109s-.1344.3115-.3.3115zM12.0001 5.26884h-.6c-.1656 0-.3-.13942-.3-.31092 0-.17208.1344-.31091.3-.31091h.6c.1656 0 .3.13883.3.31091 0 .1715-.1344.31092-.3.31092zM12.6001 5.89091h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17208.1344-.31092.3-.31092h.6c.1656 0 .3.13884.3.31092 0 .17208-.1344.31092-.3.31092zM12.0001 6.51298h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17208.1344-.31092.3-.31092h.6c.1656 0 .3.13884.3.31092 0 .17208-.1344.31092-.3.31092zM12.6001 7.13562h-.6c-.1656 0-.3-.13941-.3-.3115 0-.1715.1344-.31091.3-.31091h.6c.1656 0 .3.13941.3.31091 0 .17209-.1344.3115-.3.3115zM12.0001 7.75769h-.6c-.1656 0-.3-.13941-.3-.31091 0-.17209.1344-.31092.3-.31092h.6c.1656 0 .3.13883.3.31092 0 .1715-.1344.31091-.3.31091zM12.6001 8.37976h-.6c-.1656 0-.3-.13883-.3-.31092 0-.17208.1344-.31091.3-.31091h.6c.1656 0 .3.13883.3.31091 0 .17209-.1344.31092-.3.31092zM12.6001 4.64678h-.6c-.1656 0-.3-.13942-.3-.3115 0-.17209.1344-.31092.3-.31092h.6c.1656 0 .3.13883.3.31092 0 .17208-.1344.3115-.3.3115zM12.0001 1.53528h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17208.1344-.310918.3-.310918h.6c.1656 0 .3.138838.3.310918 0 .17208-.1344.31092-.3.31092zM12.6001 2.15734h-.6c-.1656 0-.3-.13883-.3-.31092 0-.17208.1344-.31091.3-.31091h.6c.1656 0 .3.13883.3.31091 0 .17209-.1344.31092-.3.31092zM12.0001 2.77999h-.6c-.1656 0-.3-.13941-.3-.31091 0-.17209.1344-.3115.3-.3115h.6c.1656 0 .3.13941.3.3115 0 .1715-.1344.31091-.3.31091zM12.6001 3.40206h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17208.1344-.31092.3-.31092h.6c.1656 0 .3.13884.3.31092 0 .17208-.1344.31092-.3.31092zM12.0001 4.02412h-.6c-.1656 0-.3-.13883-.3-.31091 0-.17209.1344-.31092.3-.31092h.6c.1656 0 .3.13883.3.31092 0 .17208-.1344.31091-.3.31091zM12.0001 9.00183h-.6c-.1656 0-.3-.13884-.3-.31092 0-.17209.1344-.31092.3-.31092h.6c.1656 0 .3.13883.3.31092 0 .17208-.1344.31092-.3.31092z",clipRule:"evenodd"})),Fl=AT;var BT=e=>q.createElement("svg",d({width:"599",height:"216",fill:"none",viewBox:"0 0 599 216"},e),q.createElement("path",{fill:"#fff",d:"M239 219l-1-6c0-9 5-17 12-21a30 30 0 0128-39c7 0 13 2 18 5 4-3 9-5 14-5 12 0 21 8 23 19l6 5c5-4 11-7 18-7 12 0 22 9 25 20h2l8 1a18 18 0 0125 5 36 36 0 0154-20 53 53 0 01103 17c11 5 20 14 25 26H239zM12 229c-7-6-12-15-12-25 0-18 17-33 37-33l6 1v-5c0-26 23-47 52-47s53 21 53 47l-1 5 6-1c14 0 26 8 30 19 6-4 13-6 21-6 19 0 34 14 34 30 0 6-2 11-4 15H12z",opacity:".1"}),q.createElement("circle",{cx:"221",cy:"193",r:"105.5",stroke:"#D9E5FC",strokeDasharray:"4 4",opacity:".5"}),q.createElement("path",{fill:"#F1F6F5",d:"M530 67a31 31 0 100-63 31 31 0 000 63z",opacity:".1"}),q.createElement("circle",{cx:"530",cy:"67",r:"32",fill:"#A0BDF8",opacity:".1"}),q.createElement("circle",{cx:"280",cy:"14",r:"14",fill:"#A0BDF8",opacity:".1"}),q.createElement("circle",{cx:"70",cy:"42",r:"24",fill:"#A0BDF8",opacity:".1"})),c5=BT;var FT=e=>q.createElement("svg",d({width:"262",height:"243",fill:"none",viewBox:"0 0 262 243"},e),q.createElement("g",null,q.createElement("path",{fill:"#BCF7FC",d:"M104 149l-11 4 10 32 17 17-16-53z"}),q.createElement("path",{fill:"#97E4FD",d:"M162 174l5 11-31 15-24-2 50-24z"}),q.createElement("path",{fill:"#E8F7F4",d:"M190 32a78 78 0 00-109 76l43 45 66-121z"}),q.createElement("path",{fill:"#231F20",d:"M190 32l-45 131 62 1a78 78 0 00-17-132z"}),q.createElement("path",{fill:"#EC95AD",d:"M190 32l-66 121 52-3c7-9 13-20 18-31 17-39 16-78-4-87z"}),q.createElement("path",{fill:"#4A82F2",d:"M190 32c-20-9-50 16-67 56-5 11-9 23-10 34l21 36 56-126z"}),q.createElement("path",{fill:"#4CBEFF",d:"M130 169l37 16 25-11 15-10-63-28-22 10 8 23z"}),q.createElement("path",{fill:"#71D1FE",d:"M81 108l3 18 9 27 37 16 14-33-63-28z"}),q.createElement("path",{fill:"#231F20",d:"M136 200l-17-8-13 10 2 16 16 7 12-25z"}),q.createElement("path",{fill:"#EC95AD",d:"M103 185l16 7-11 26-16-7 11-26z"})),q.createElement("g",null,q.createElement("path",{fill:"#D9E5FC",fillRule:"evenodd",d:"M54 89c4-5 6-11 6-17 0-15-13-28-29-28C16 44 3 57 3 72s13 28 28 28c7 0 13-2 17-5l12 3-6-9z",clipRule:"evenodd"}),q.createElement("path",{fill:"#1054DE",d:"M24 61c3 0 6 2 7 4 2-2 4-4 7-4 5 0 9 4 9 8 0 11-16 17-16 17s-15-6-15-17c0-4 4-8 8-8z"}))),p5=FT;var DT=e=>q.createElement("svg",d({width:"25",height:"25",fill:"none",viewBox:"0 0 25 25"},e),q.createElement("circle",{cx:"3",cy:"3",r:"3",fill:"#F3F0EA",opacity:".1"})),f5=DT;var zT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 384 512",fill:"currentColor"},e),q.createElement("path",{d:`M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16
      16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84
      0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z`})),jt=zT;var OT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M491.609 73.625l-53.861-53.839c-26.378-26.379-69.076-26.383-95.46-.001L24.91 335.089.329
      484.085c-2.675 16.215 11.368 30.261 27.587 27.587l148.995-24.582 315.326-317.378c26.33-26.331
      26.581-68.879-.628-96.087zM120.644 302l170.259-169.155 88.251 88.251L210
      391.355V350h-48v-48h-41.356zM82.132 458.132l-28.263-28.263 12.14-73.587L84.409
      338H126v48h48v41.59l-18.282 18.401-73.586
      12.141zm378.985-319.533l-.051.051-.051.051-48.03
      48.344-88.03-88.03 48.344-48.03.05-.05.05-.05c9.147-9.146 23.978-9.259
      33.236-.001l53.854 53.854c9.878 9.877 9.939 24.549.628 33.861z`})),tn=OT;var _T=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 320 512",fill:"currentColor"},e),q.createElement("path",{d:`M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34
      0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4
      52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4
      256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160
      303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34
      0-22.58L207.6 256z`})),mt=_T;var UT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 576 512",fill:"currentColor"},e),q.createElement("path",{d:`M561.938 190.06L385.94 14.107C355.79-16.043 304 5.327 304 48.047v80.703C166.04 132.9 0
      159.68 0 330.05c0 73.75 38.02 134.719 97.63 173.949 37.12 24.43 85.84-10.9
      72.19-54.46C145.47 371.859 157.41 330.2 304 321.66v78.28c0 42.64 51.73 64.15 81.94
      33.94l175.997-175.94c18.751-18.74 18.751-49.14.001-67.88zM352 400V272.09c-164.521
      1.79-277.44 33.821-227.98 191.61C88 440 48 397.01 48 330.05c0-142.242 160.819-153.39
      304-154.02V48l176 176-176 176z`})),on=UT;var HT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416
      93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2
      3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4
      0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z`})),rn=HT;var jT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6
      28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8
      9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3
      240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z`})),Dl=jT;var VT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5
      114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496
      128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8
      307.7z`})),zl=VT;var $T=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49
      48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6
      6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909
      40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971
      0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z`})),$i=$T;var GT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645
      117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41
      31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51
      110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0
      16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699
      46.054-.001l189.465-189.489c25.987-25.989
      25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249
      39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174
      739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685
      4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034
      58.092-152.004 58.093-210.048.041z`})),Gi=GT;var qT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512"},e),q.createElement("path",{d:`M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284
      28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686
      16.971 0l299.813-299.813c4.686-4.686 4.686-12.284
      0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z`})),Ol=qT;var ZT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 448 512",fill:"currentColor"},e),q.createElement("path",{d:`M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17
      0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7
      4.7-12.3 0-17z`})),po=ZT;var WT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 256 512",fill:"currentColor"},e),q.createElement("path",{d:`M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092
      74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971
      0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285
      4.686 16.971-.001z`})),Ro=WT;var YT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 256 512",fill:"currentColor"},e),q.createElement("path",{d:`M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908
      437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971
      0l209.414-209.414c4.686-4.686
      4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z`})),nn=YT;var QT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512"},e),q.createElement("path",{d:`M342.7 144H464v288H48V144h121.3l24-64h125.5l23.9 64zM324.3 32h-131c-20 0-37.9 12.4-44.9
      31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5
      48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2
      0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-192c-39.7
      0-72 32.3-72 72s32.3 72 72 72 72-32.3 72-72-32.3-72-72-72z`})),_l=QT;var KT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0
      4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2
      16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0
      16 7.2 16 16v288zM336 184h-56v-56c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v56h-56c-8.8
      0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h56v56c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2
      16-16v-56h56c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z`})),Ul=KT;var JT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 128 512"},e),q.createElement("path",{d:`M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16
      104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5
      21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z`})),Hl=JT;var XT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504
      119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200
      110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm42-104c0 23.159-18.841 42-42
      42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42zm-81.37-211.401l6.8 136c.319 6.387
      5.591 11.401 11.985 11.401h41.17c6.394 0 11.666-5.014
      11.985-11.401l6.8-136c.343-6.854-5.122-12.599-11.985-12.599h-54.77c-6.863 0-12.328
      5.745-11.985 12.599z`})),uo=XT;var RT=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 496 512",fill:"currentColor"},e),q.createElement("path",{d:`M248 8C111.04 8 0 119.03 0 256s111.04 248 248 248 248-111.03 248-248S384.96 8 248 8zm0
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
      358.28 456 248 456z`})),jl=RT;var ek=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 448 512",fill:"currentColor"},e),q.createElement("path",{d:`M224 412c-15.5 0-28-12.5-28-28v-64c0-15.5 12.5-28 28-28s28 12.5 28 28v64c0
      15.5-12.5 28-28 28zm224-172v224c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V240c0-26.5
      21.5-48 48-48h32v-48C80 64.5 144.8-.2 224.4 0 304 .2 368 65.8 368 145.4V192h32c26.5 0 48
      21.5 48 48zm-320-48h192v-48c0-52.9-43.1-96-96-96s-96 43.1-96 96v48zm272 48H48v224h352V240z`})),er=ek;var tk=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 576 512",fill:"currentColor"},e),q.createElement("path",{d:`M512 160h-96V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v160c0 35.3 28.7 64 64
      64h32v52c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4l76.9-43.5V384c0 35.3 28.7 64 64
      64h96l108.9 61.6c2.2 1.6 4.7 2.4 7.1 2.4 6.2 0 12-4.9 12-12v-52h32c35.3 0 64-28.7
      64-64V224c0-35.3-28.7-64-64-64zM96 240H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16
      16-16h288c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H211.4l-11 6.2-56.4 31.9V240H96zm432
      144c0 8.8-7.2 16-16 16h-80v38.1l-56.4-31.9-11-6.2H256c-8.8 0-16-7.2-16-16v-96h112c35.3 0
      64-28.7 64-64v-16h96c8.8 0 16 7.2 16 16v160z`})),D5=tk;var ok=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M140 284c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v32c0 6.6-5.4
      12-12 12H140zm364-28c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48
      0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z`})),an=ok;var rk=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 576 512",fill:"currentColor"},e),q.createElement("path",{d:`M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0
      30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48
      392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480
      8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0
      12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12
      12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0
      6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627
      0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627
      5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627
      0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0
      6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z`})),Vl=rk;var nk=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 576 512",fill:"currentColor"},e),q.createElement("path",{d:`M552 64H88c-13.234 0-24 10.767-24 24v8H24c-13.255 0-24 10.745-24 24v280c0 26.51 21.49 48 48
      48h504c13.233 0 24-10.767 24-24V88c0-13.233-10.767-24-24-24zM32 400V128h32v272c0 8.822-7.178
      16-16 16s-16-7.178-16-16zm512 16H93.258A47.897 47.897 0 0 0 96
      400V96h448v320zm-404-96h168c6.627 0 12-5.373 12-12V140c0-6.627-5.373-12-12-12H140c-6.627 0-12
      5.373-12 12v168c0 6.627 5.373 12 12 12zm20-160h128v128H160V160zm-32 212v-8c0-6.627 5.373-12
      12-12h168c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H140c-6.627 0-12-5.373-12-12zm224
      0v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627
      0-12-5.373-12-12zm0-64v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373
      12-12 12H364c-6.627 0-12-5.373-12-12zm0-128v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373
      12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 64v-8c0-6.627 5.373-12
      12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z`})),$l=nk;var ik=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 448 512",fill:"currentColor"},e),q.createElement("path",{d:`M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0
      26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272
      80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24
      24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6
      6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0
      128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z`})),Gl=ik;var ak=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 320 512",fill:"currentColor"},e),q.createElement("path",{d:`M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 
      0L24 329c-15.1-15.1-4.4-41 17-41z`})),ql=ak;var V5=i(Qe).attrs({width:18,height:18})`
  padding: 0 6px;
  cursor: pointer;
  margin-left: auto;
  &.svg-inline--fa {
    width: auto;
  }
`,$5=i.div`
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
`,G5=i.div`
  margin: auto;
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 6px;
  max-width: 520px;
  min-width: 360px;
  ${({theme:e})=>e.typography.body}

  &:focus {
    outline: none;
  }
`,sk=i(G5)`
  width: 440px;
`,q5=o=>{var r=o,{small:e}=r,t=I(r,["small"]);return e?q.createElement(sk,d({},t)):q.createElement(G5,d({},t))},Z5=i.div`
  padding: 16px 16px 12px 16px;
  ${({clean:e,theme:t})=>!e&&z`
      border-bottom: 1px solid ${t.palette.base.shade4};
    `};
  ${({theme:e})=>e.typography.title};
  display: flex;
  align-items: center;
`,W5=i.div`
  ${({isText:e})=>e&&z`
      padding: 20px 16px;
    `}
`,Y5=i.div`
  padding: 16px 12px;
  padding-top: 4px;
  ${({clean:e,theme:t})=>!e&&z`
      border-top: 1px solid ${t.palette.base.shade4};
      padding-top: 16px;
    `}
`;var dk=({"data-qa-anchor":e="",size:t="",className:o,onOverlayClick:r=()=>{},onCancel:n,title:s,footer:a,clean:l,children:m})=>{let c=useRef(null);useEffect(()=>{var f;(f=c==null?void 0:c.current)==null||f.focus();},[c==null?void 0:c.current]);let u=typeof m=="string"||(m==null?void 0:m.type)==="FormattedMessage";return q.createElement($5,{onClick:r},q.createElement(q5,{small:t==="small",tabIndex:0,className:o,ref:c,"data-qa-anchor":e},(s||n)&&q.createElement(Z5,{clean:l},s,n&&q.createElement(V5,{onClick:n})),q.createElement(W5,{isText:u},m),a&&q.createElement(Y5,{clean:l},a)))},dt=dk;i(dt)`
  max-width: 360px;
`;i.div`
  padding: 1rem 1rem 0.75rem 1rem;
`;i.div`
  display: flex;
  justify-content: flex-end;
`;i(oe)`
  color: white;
  background: ${({theme:e})=>e.palette.alert.main};
  &:hover {
    background: ${({theme:e})=>e.palette.alert.main};
  }
`;i($)`
  margin-right: 10px;
`;var Q5;var me=e=>Q5(T(d({},e),{type:"confirm"})),It=e=>Q5(T(d({},e),{type:"info",OkButton:oe}));var K5=i(Ol).attrs({width:18,height:18})`
  margin-right: 8px;
`,J5=i(uo).attrs({width:18,height:18})`
  margin-right: 8px;
`,X5=i(mt).attrs({width:18,height:18})`
  margin-right: 8px;
`;i.div`
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
`;i.div`
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
`;var Zl;var Z={success:e=>Zl(T(d({},e),{icon:q.createElement(K5,null)})),info:e=>Zl(T(d({},e),{icon:q.createElement(J5,null)})),error:e=>Zl(T(d({},e),{icon:q.createElement(X5,null)})),show:e=>Zl(e)};function Wl(e){return (e==null?void 0:e.communityMembership)==="member"}function Yl(e){return (e==null?void 0:e.userPrivacySetting)==="private"}function Ql(e){return (e||[]).map((t,o)=>{var r;return {id:t.userId,display:(r=t.displayName)!=null?r:t.userId,avatar:t.avatarCustomUrl,isLastItem:(e==null?void 0:e.length)===o+1}})}var Kl=1;function vk(e,t,o){let r=o+Kl,n=r+t;return e.substring(r,n)}function Zi(e){return e?e.sort((o,r)=>o.index-r.index).map(({index:o,length:r})=>({start:o,end:o+r+Kl,highlight:!0})):[]}function sn(e){let t={},o=[];return (e==null?void 0:e.length)>0?(t.mentioned=[...e.sort((r,n)=>r.plainTextIndex-n.plainTextIndex).map(({plainTextIndex:r,id:n,display:s})=>({index:r,length:s.length-Kl,type:"user",userId:n}))],o.push({type:"user",userIds:e.map(({id:r})=>r)})):o.push({type:"user",userIds:[]}),{metadata:t,mentionees:o}}function Wi(e,t){if(!e||Ck(t==null?void 0:t.mentioned))return e;let o=e;return ((t||{}).mentioned||[]).sort((r,n)=>n.index-r.index).forEach(({userId:r,length:n,index:s})=>{let a=`@[${vk(e,n,s)}](${r})`;o=o.replace(new RegExp(`(.{${s}}).{${n+Kl}}`),`$1${a}`);}),o}function ge(e){return e!=null}var Mk=e=>Fe({fetcher:PostRepository.getPost,params:e,shouldCall:()=>!!e}),Vt=Mk;var eu=z`
  color: ${({theme:e})=>e.palette.primary.main};
`,tu=i(K)`
  ${({active:e})=>e&&eu}
`,ou=i(Ir)`
  font-size: 16px;
  margin-right: 5px;
`,Ik=i(ou)`
  ${eu}
`,ru=({isLiked:e})=>e?q.createElement(Ik,null):q.createElement(ou,null);var Pk=createContext({}),N=e=>useContext(Pk)[e]||null;var kk=({onClick:e,isActive:t,isDisabled:o})=>q.createElement(tu,{active:t,disabled:o,"data-qa-anchor":t?"post-liked-button":"post-like-button",onClick:e},q.createElement(ru,{isLiked:t})," ",q.createElement(FormattedMessage,{id:t?"post.liked":"post.like"})),nu=e=>{let t=N("PostLikeButton");return t?t(e):q.createElement(kk,d({},e))};var De="like",iu="love",au="fire";function lu(e){var t,o;return e==null||((t=e.myReactions)==null?void 0:t.length)===0?!1:(o=e==null?void 0:e.myReactions)==null?void 0:o.includes(De)}var Ak=({postId:e,onLikeSuccess:t,onUnlikeSuccess:o})=>{let r=Vt(e),[n,s]=useState(lu(r));useEffect(()=>{s(lu(r));},[r==null?void 0:r.myReactions]);let a=()=>w(void 0,null,function*(){r!=null&&(n?(yield ReactionRepository.removeReaction("post",r.postId,De),o==null||o(r),s(!n)):(yield ReactionRepository.addReaction("post",r.postId,De),t==null||t(r),s(!n)));});return q.createElement(nu,{isActive:n,isDisabled:r==null,onClick:a})},mu=Ak;var Fk=e=>Fe({fetcher:CommunityRepository.getCommunity,params:e,shouldCall:()=>!!e}),Ze=Fk;var Hk=({targetId:e,targetType:t,remoteText:o,remoteMarkup:r})=>{let n=t==="community",s=Ze(e),[a,l]=useState(o!=null?o:""),[m,c]=useState(r!=null?r:o),[u,f]=useState([]);useEffect(()=>{l(o||""),c(r!=null?r:"");},[o,r]);let p=({text:x,plainText:M,mentions:S})=>{l(M),c(x),f(S);},g=()=>{l(""),c(""),f([]);},y=()=>{l(o||""),c(r),f([]);},v=useCallback(x=>w(void 0,null,function*(){let M,S=x||"",b;return (S.match(/^@$/)||S==="")&&(S=void 0),n&&!(s!=null&&s.isPublic)&&e!=null?M=yield new Promise(P=>{b==null||b(),b=CommunityRepository.Membership.getMembers({communityId:e,search:S,limit:20},k=>{k.loading||P(k.data.map(({user:A})=>A).filter(ge));});}):M=yield new Promise(P=>{b==null||b(),b=UserRepository.getUsers({displayName:S,limit:20,sortBy:"displayName"},k=>{k.loading||P(k.data);});}),Ql(M)}),[n,s==null?void 0:s.isPublic,e]),{mentionees:h,metadata:C}=useMemo(()=>{let{mentionees:x,metadata:M}=sn(u);return {mentionees:x,metadata:M}},[u]);return {text:a,markup:m,mentions:u,mentionees:h,metadata:C,onChange:p,clearAll:g,resetState:y,queryMentionees:v}},wt=Hk;var Eo={BIG:"big",REGULAR:"regular",SMALL:"small",TINY:"tiny"},Vk=Eo.REGULAR,Yi={[Eo.BIG]:64,[Eo.REGULAR]:40,[Eo.SMALL]:32,[Eo.TINY]:28},$k=e=>useMemo(()=>e&&Yi[e]?e:Vk,[e]),du=$k;var Zk=l=>{var m=l,{circle:e,borderRadius:t=12,primaryColor:o="#EBECEF",secondaryColor:r="#f3f3f3",duration:n=2,style:s}=m,a=I(m,["circle","borderRadius","primaryColor","secondaryColor","duration","style"]);return q.createElement(qk,T(d({},a),{duration:n,circle:e,style:T(d({},s),{backgroundColor:o,backgroundImage:`linear-gradient(90deg, ${o}, ${r}, ${o})`,borderRadius:e?void 0:t})}))},de=Zk;var Wk=s=>{var a=s,{loading:e,size:t,backgroundImage:o,children:r}=a,n=I(a,["loading","size","backgroundImage","children"]);return q.createElement("div",d({},n),e?q.createElement(de,{circle:!0,width:"100%",height:"100%",style:{display:"block"}}):r)},pu=i(Wk)`
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
    height: ${Yi[e]}px;
    width: ${Yi[e]}px;
    background: ${t||o.palette.base.shade3}};
  `};
`,uu=i.div`
  position: absolute;
  z-index: 2;
  opacity: 0.5;
  background-color: #000000;

  ${({size:e})=>`
    height: ${Yi[e]}px;
    width: ${Yi[e]}px;
  `}
`,a0=i.img.attrs({loading:"lazy"})`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s;
`;i.input.attrs({type:"file"})`
  &&& {
    display: none;
  }
`;i.label``;var Kk=l=>{var m=l,{className:e="",avatar:t=null,showOverlay:o,size:r,onClick:n,loading:s}=m,a=I(m,["className","avatar","showOverlay","size","onClick","loading"]);let[c,u]=useState(!1),f=useCallback(()=>u(!0),[]),p=useCallback(()=>u(!1),[]),g=du(r);return q.createElement(pu,d({className:Ln(e,{visible:c,clickable:!!n}),loading:s,size:g,onClick:n},a),t?o?q.createElement(uu,d({size:g},a),q.createElement(a0,{src:t,onError:p,onLoad:f})):q.createElement(a0,{src:t,onError:p,onLoad:f}):null)},J=e=>{let t=N("Avatar");return t?t(e):q.createElement(Kk,d({},e))};var Jk=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512"},e),q.createElement("path",{d:`M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256
      8zm141.421 106.579c73.176 73.175 77.05 187.301 15.964 264.865L132.556 98.615c77.588-61.105
      191.709-57.193 264.865 15.964zM114.579
      397.421c-73.176-73.175-77.05-187.301-15.964-264.865l280.829 280.829c-77.588 61.105-191.709
      57.193-264.865-15.964z`})),$t=i(Jk)`
  fill: ${({theme:e})=>e.palette.base.shade3};
`;var s0={root:null,rootMargin:"0px 0px -15% 0px",threshold:.9},tE=(e,{root:t,rootMargin:o,threshold:r}=s0)=>{let n=useMemo(()=>({root:t,rootMargin:o||s0.rootMargin,threshold:r||s0.threshold}),[t,o,r]),[s,a]=useState(null),l=useRef(new IntersectionObserver(m=>a(m[0]),n));return useEffect(()=>{if(e){let{current:m}=l;return m.observe(e),()=>m.disconnect()}},[e]),useEffect(()=>{if(e){let{current:m}=l;return m.unobserve(e),l.current=new IntersectionObserver(c=>a(c[0]),n),l.current.observe(e),()=>l.current.disconnect()}},[n,o,e]),s},Qi=tE;var nE=e=>{let{data:t}=useQuery({queryKey:["asc-uikit","FileRepository","getFile",e],queryFn:()=>FileRepository.getFile(e),enabled:!!e});return t==null?void 0:t.data},nt=nE;var lE=({fileId:e,imageSize:t="medium"})=>{let o=nt(e),[r,n]=useState(void 0);return useEffect(()=>{if(o==null||e==null){n(void 0);return}function s(){return w(this,null,function*(){if((o==null?void 0:o.fileUrl)==null)return;let a=FileRepository.fileUrlWithSize(o==null?void 0:o.fileUrl,t);n(a);})}s();},[o,t]),r},_=lE;var pE=i.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;

  font-weight: 600;

  pointer-events: ${({isBanned:e})=>e&&"none"} !important;
  cursor: ${({isBanned:e})=>e&&"no-allowed"} !important;
  max-width: ${({maxWidth:e})=>e||0}px;
`,uE=i.div`
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,fE=({id:e,focused:t,isLastItem:o,loadMore:r,rootEl:n,containerRef:s})=>{var f,p;let a=useRef(null),l=Qi(a==null?void 0:a.current,{root:(f=n==null?void 0:n.current)==null?void 0:f.childNodes[0]}),m=j(e),c=_({fileId:m==null?void 0:m.avatarFileId,imageSize:"small"});useEffect(()=>{a&&(l!=null&&l.isIntersecting)&&(r==null||r());},[a,l==null?void 0:l.isIntersecting,r]);let u=useCallback((g,y)=>{y&&(g.target.parentNode.style.cursor="not-allowed",g.target.parentNode.style["pointer-events"]="none");},[]);return q.createElement(pE,{ref:o?a:null,"data-qa-anchor":"social-mention-item",focused:t,isBanned:m==null?void 0:m.isGlobalBanned,maxWidth:(p=s==null?void 0:s.current)==null?void 0:p.clientWidth,onMouseEnter:g=>u(g,m==null?void 0:m.isGlobalBanned)},q.createElement(J,{avatar:c}),q.createElement(uE,null,m==null?void 0:m.displayName),q.createElement("div",{style:{marginLeft:"0.5rem"}},m!=null&&m.isGlobalBanned?q.createElement($t,null):null))},hu=fE;var bE=i.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  min-width: 1em;
  background: ${({theme:e})=>e.palette.base.shade4};
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
`,l0=z`
  flex: 1 1 auto;
  display: block;
  width: 1%;
  min-width: 0;
  margin: 0;
  padding: 0.563rem 0.563rem;
  color: ${({theme:e})=>e.palette.neutral.main};
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
`,ME=i.input`
  ${l0}
`,IE=i(xE)`
  ${l0};
  resize: vertical;
`,wE={suggestions:{zIndex:999,position:"absolute",transform:"translateY(1.25rem)",list:{borderRadius:"0.5rem",maxHeight:"17.5rem",boxShadow:"0 0 0.3rem #A5A9B5",overflow:"auto"}},"&multiLine":{highlighter:{boxSizing:"border-box",overflow:"hidden"}}},SE={position:"relative",color:"#1054DE",pointerEvents:"none",textShadow:"1px 1px 1px white, 1px -1px 1px white, -1px 1px 1px white, -1px -1px 1px white",zIndex:1},PE=i(MentionsInput)`
  padding: 0.5rem;
  width: 100%;
  textarea {
    ${l0}
    resize: vertical;
  }
`,TE=forwardRef(({"data-qa-anchor":e="",id:t,name:o="",value:r="",placeholder:n="",multiline:s=!1,disabled:a=!1,invalid:l=!1,rows:m=1,maxRows:c=3,prepend:u,append:f,onChange:p,onClear:g,onClick:y,onKeyPress:v,className:h,mentionAllowed:C=!1,queryMentionees:x,loadMoreMentionees:M},S)=>{let[b,P]=useState([]),k=useRef(null),A=useRef(null),L=(E,[,],G,F)=>{var ie;let ee=G.split(" ").pop(),se=((ie=ee==null?void 0:ee[0])==null?void 0:ie.match(/^@/g))||!1;p({text:E.target.value,plainText:G,lastMentionText:se?ee:void 0,mentions:F});},O=E=>{E.key==="Backspace"&&(r==null?void 0:r.length)===0&&(g==null||g());},Y=Ln(h,{disabled:a,invalid:l}),B={id:t,name:o,value:r,placeholder:n,disabled:a,className:Y,"data-qa-anchor":e};return q.createElement(bE,{ref:A,className:Y},u,q.createElement("div",{ref:k,id:"mention-input"}),s&&C&&q.createElement(PE,T(d({allowSuggestionsAboveCursor:!0,inputRef:S,rows:m,style:wE},B),{onKeyDown:E=>O(E),onChange:L,onClick:y,onKeyPress:E=>v==null?void 0:v(E)}),q.createElement(Mention,{trigger:"@",data:(E,G)=>{if(!x)return G([]);x(E).then(F=>{G(F);});},style:SE,renderSuggestion:({id:E},G,F,ee,se)=>{var ie;return q.createElement(hu,{focused:se,id:typeof E=="number"?`${E}`:E,isLastItem:E===((ie=b[b.length-1])==null?void 0:ie.id),containerRef:A,rootEl:k,loadMore:()=>M==null?void 0:M(G)})},displayTransform:(E,G)=>`@${G}`,appendSpaceOnAdd:!0,onAdd:()=>{}})),s?!C&&q.createElement(IE,T(d({ref:S,minRows:m,maxRows:c},B),{onChange:E=>p==null?void 0:p({text:E.target.value,plainText:E.target.value,lastMentionText:"",mentions:[]}),onKeyDown:E=>O(E),onClick:y})):q.createElement(ME,T(d({ref:S},B),{onChange:E=>p==null?void 0:p({text:E.target.value,plainText:E.target.value,lastMentionText:"",mentions:[]}),onKeyDown:E=>O(E),onClick:y})),f)}),vu=TE;var NE=forwardRef((e,t)=>q.createElement(vu,T(d({},e),{ref:t}))),We=NE;var xu=i(J)`
  margin-right: 8px;
`,bu=i.div`
  padding-top: 16px;
  padding-bottom: 16px;
  background: ${({theme:e})=>e.palette.system.background};
  display: flex;
  align-items: center;
`,Mu=i(We).attrs({rows:1,maxRows:15})`
  outline: none;
  flex-grow: 1;
  font: inherit;
  font-size: 14px;
  resize: vertical;
`,Iu=i(oe)`
  height: 40px;
  padding: 10px 16px;
  margin-left: 12px;
`;var FE=30,DE=5e4,zE=({className:e,userToReply:t,onSubmit:o,postId:r})=>{let n=Vt(r),{currentUserId:s}=H(),a=j(s),l=_({fileId:a==null?void 0:a.avatarFileId,imageSize:"small"}),{text:m,markup:c,mentions:u,mentionees:f,metadata:p,onChange:g,queryMentionees:y}=wt({targetId:n==null?void 0:n.targetId,targetType:n==null?void 0:n.targetType}),{formatMessage:v}=useIntl(),h=useRef(null);useEffect(()=>{var b;(b=h.current)==null||b.focus();},[]);let C=()=>{if(m!==""){if(u&&(u==null?void 0:u.length)>FE)return It({title:q.createElement(FormattedMessage,{id:"CommentComposeBar.unableToMention"}),content:q.createElement(FormattedMessage,{id:"CommentComposeBar.overMentionees"}),okText:q.createElement(FormattedMessage,{id:"CommentComposeBar.okText"})});if((m==null?void 0:m.length)>DE)return It({title:q.createElement(FormattedMessage,{id:"CommentComposeBar.unableToPost"}),content:q.createElement(FormattedMessage,{id:"CommentComposeBar.overCharacter"}),okText:q.createElement(FormattedMessage,{id:"CommentComposeBar.done"})});o==null||o(m,f,p);}},x=m==="",M=t?v({id:"CommentComposeBar.replayTo"})+t:v({id:"CommentComposeBar.saySomething"}),S=v(t?{id:"reply"}:{id:"CommentComposeBar.addComment"});return q.createElement(bu,{className:e},q.createElement(xu,{avatar:l,backgroundImage:ce}),q.createElement(Mu,{ref:h,"data-qa-anchor":"comment-compose-bar-textarea",placeholder:M,value:c,multiline:!0,mentionAllowed:!0,queryMentionees:y,onChange:b=>g==null?void 0:g(b),onKeyPress:b=>b.key==="Enter"&&C()}),q.createElement(Iu,{"data-qa-anchor":t?"comment-compose-bar-reply-button":"comment-compose-bar-add-comment-button",disabled:x,onClick:C},S))},tr=e=>{let t=N("CommentComposerBar");return t?t(e):q.createElement(zE,d({},e))};var wu=i.div`
  color: ${({theme:e})=>e.palette.neutral.shade1};
  ${({theme:e})=>e.typography.body}
`,Su=i.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e3e4e8;
  padding: 8px 0;
`,Pu=i.div`
  display: flex;
  padding: 2px 0;
  border-bottom: 1px solid #e3e4e8;
`,Tu=i($n).attrs({width:16,height:16})`
  position: relative;
  margin-right: 5px;
`,ku=i.div`
  color: ${({theme:e})=>e.palette.base.shade2};
  margin-top: 8px;
`;var _E=e=>Fe({fetcher:CommentRepository.getComment,params:e,shouldCall:()=>!!e}),Ji=_E;var m0="top",Xl="right",Jn="bottom",Xi="left",UE=(e="bottom")=>e===Jn?"top: 100%;":e===Xi?"left: 0px;":e===Xl?"right: 0px;":"bottom: 100%;",Rl=UE;var Eu=z`
  color: ${({theme:e})=>e.palette.primary.main};
`,HE=i(K)`
  background-color: transparent;
  ${({active:e})=>e&&Eu}

  > :not(:first-child) {
    margin-left: 5px;
  }
`,Nu=i(Ir)`
  font-size: 16px;
`,jE=i(Nu)`
  ${Eu}
`,VE=({isLiked:e})=>e?q.createElement(jE,null):q.createElement(Nu,null),$E=({onClick:e,isActive:t,isDisabled:o,totalLikes:r})=>q.createElement(HE,{active:t,disabled:o,onClick:e},q.createElement(VE,{isLiked:t})," ",r&&r>0?q.createElement("span",null,r):""),Lu=$E;var GE=({comment:e,onLikeSuccess:t,onUnlikeSuccess:o})=>{let r=!!(e&&e.myReactions&&e.myReactions.includes(De)),n=(e==null?void 0:e.reactions[De])||0,s=()=>w(void 0,null,function*(){if(e!=null)try{r?(yield ReactionRepository.removeReaction("comment",e.commentId,De),o==null||o(e)):(yield ReactionRepository.addReaction("comment",e.commentId,De),t==null||t(e));}catch(a){console.error("Can't toggle like",a);}});return q.createElement(Lu,{isActive:r,isDisabled:e==null,totalLikes:n,onClick:s})},Fu=e=>{let t=N("CommentLikeButton");return t?t(e):q.createElement(GE,d({},e))};function ys({userId:e,callback:t,shouldSubscribe:o}){return br({userId:e,level:SubscriptionLevels.POST_AND_COMMENT,shouldSubscribe:o,callback:t})}function wr({communityId:e,level:t,shouldSubscribe:o=()=>!0,callback:r}){return At({fetcher:CommunityRepository.getCommunity,params:e,callback:r,shouldSubscribe:()=>!!e&&o(),getSubscribedTopic:({data:n})=>getCommunityTopic(n,t)})}function hs({communityId:e,shouldSubscribe:t=()=>!0,callback:o}){return wr({communityId:e,level:SubscriptionLevels.POST_AND_COMMENT,shouldSubscribe:t,callback:o})}var KE=({commentId:e,onLikeSuccess:t,onUnlikeSuccess:o})=>{let r=Ji(e);return ys({userId:r==null?void 0:r.targetId,shouldSubscribe:()=>(r==null?void 0:r.targetType)==="user"}),hs({communityId:r==null?void 0:r.targetId,shouldSubscribe:()=>(r==null?void 0:r.targetType)==="community"}),q.createElement(Fu,{comment:r,onLikeSuccess:t,onUnlikeSuccess:o})},Du=KE;var Ri=Object.freeze({MEMBER:"member",MODERATOR:"moderator",SUPER_MODERATOR:"super-moderator",COMMUNITY_MODERATOR:"community-moderator",CHANNEL_MODERATOR:"channel-moderator"}),d0=Object.freeze({EditUserPermission:"EDIT_USER",BanUserPermission:"BAN_USER",CreateRolePermission:"CREATE_ROLE",EditRolePermission:"EDIT_ROLE",DeleteRolePermission:"DELETE_ROLE",AssignRolePermission:"ASSIGN_USER_ROLE",EditChannelPermission:"EDIT_CHANNEL",EditChannelRatelimitPermission:"EDIT_CHANNEL_RATELIMIT",MuteChannelPermission:"MUTE_CHANNEL",CloseChannelPermission:"CLOSE_CHANNEL",AddChannelUserPermission:"ADD_CHANNEL_USER",EditChannelUserPermission:"EDIT_CHANNEL_USER",RemoveChannelUserPermission:"REMOVE_CHANNEL_USER",MuteChannelUserPermission:"MUTE_CHANNEL_USER",BanChannelUserPermission:"BAN_CHANNEL_USER",EditMessagePermission:"EDIT_MESSAGE",DeleteMessagePermission:"DELETE_MESSAGE",EditCommunityPermission:"EDIT_COMMUNITY",DeleteCommunityPermission:"DELETE_COMMUNITY",AddChannelCommunityPermission:"ADD_COMMUNITY_USER",EditChannelCommunityPermission:"EDIT_COMMUNITY_USER",RemoveChannelCommunityPermission:"REMOVE_COMMUNITY_USER",MuteChannelCommunityPermission:"MUTE_COMMUNITY_USER",BanChannelCommunityPermission:"BAN_COMMUNITY_USER",EditUserFeedPostPermission:"EDIT_USER_FEED_POST",DeleteUserFeedPostPermission:"DELETE_USER_FEED_POST",EditUserFeedCommentPermission:"EDIT_USER_FEED_COMMENT",DeleteUserFeedCommentPermission:"DELETE_USER_FEED_COMMENT",EditCommunityFeedPostPermission:"EDIT_COMMUNITY_FEED_POST",DeleteCommunityFeedPostPermission:"DELETE_COMMUNITY_FEED_POST",EditCommunityFeedCommentPermission:"EDIT_COMMUNITY_FEED_COMMENT",DeleteCommunityFeedCommentPermission:"DELETE_COMMUNITY_FEED_COMMENT",CreateCommunityCategoryPermission:"CREATE_COMMUNITY_CATEGORY",EditCommunityCategoryPermission:"EDIT_COMMUNITY_CATEGORY",DeleteCommunityCategoryPermission:"DELETE_COMMUNITY_CATEGORY",ManageStoryPermission:"MANAGE_COMMUNITY_STORY"}),zu=30,Ou=Object.freeze({Uploaded:"uploaded",Transcoding:"transcoding",Transcoded:"transcoded",TranscodeFailed:"transcodeFailed"}),_u="video/mp4",ln=Object.freeze({CONTAIN_BLOCKED_WORD:"Amity SDK (400308): Text contain blocked word",NOT_INCLUDE_WHITELIST_LINK:"Data contains a link that is not in the whitelist",CONTAIN_BLOCKLISTED_WORD:"Your text contains a blocklisted word."});var Hu={page:{type:"newsfeed",communityId:void 0},onChangePage:e=>{},onClickCategory:e=>{},onClickCommunity:e=>{},onClickUser:e=>{},onClickStory:e=>{},onCommunityCreated:e=>{},onEditCommunity:e=>{},onEditUser:e=>{},onMessageUser:e=>{},setNavigationBlocker:()=>{},onBack:()=>{}},tN=o=>{var r=o,{onSuccess:e}=r,t=I(r,["onSuccess"]);return me(T(d({},t),{onOk:e}))};process.env.NODE_ENV!=="production"&&(Hu={page:{type:"newsfeed",communityId:void 0},onChangePage:e=>console.log(`NavigationContext onChangePage(${e})`),onClickCategory:e=>console.log(`NavigationContext onClickCategory(${e})`),onClickCommunity:e=>console.log(`NavigationContext onClickCommunity(${e})`),onClickUser:e=>console.log(`NavigationContext onClickUser(${e})`),onClickStory:e=>console.log(`NavigationContext onClickStory(${e})`),onCommunityCreated:e=>console.log(`NavigationContext onCommunityCreated(${e})`),onEditCommunity:e=>console.log(`NavigationContext onEditCommunity({${e})`),onEditUser:e=>console.log(`NavigationContext onEditUser(${e})`),onMessageUser:e=>console.log(`NavigationContext onMessageUser(${e})`),onBack:()=>console.log("NavigationContext onBack()")});var ju=createContext(Hu),V=()=>useContext(ju);function c0({askForConfirmation:e=tN,children:t,onChangePage:o,onClickCategory:r,onClickCommunity:n,onClickUser:s,onCommunityCreated:a,onEditCommunity:l,onEditUser:m,onMessageUser:c}){let[u,f]=useState([{type:"newsfeed",communityId:void 0}]),p=useMemo(()=>u[u.length-1],[u]),[g,y]=useState(),v=useCallback(()=>w(this,null,function*(){return g?new Promise(B=>{e(T(d({},g),{onSuccess:()=>{y==null||y(void 0),B(!0);},onCancel:()=>B(!1)}));}):!0}),[e,g]),h=useCallback(B=>w(this,null,function*(){(yield v())&&f(E=>[...E,B]);}),[v]),C=()=>{f(B=>B.length>1?B.slice(0,-1):B);},x=o?B=>w(this,null,function*(){(yield v())&&o(B);}):null,M=useCallback(B=>{h({type:B});},[h]),S=useCallback(B=>{let E={type:"communityfeed",communityId:B};if(x)return x(E);if(n)return n(B);h(E);},[x,n,h]),b=useCallback(B=>{let E={type:"communityfeed",communityId:B,isNewCommunity:!0};if(x)return x(E);if(a)return a(B);h(E);},[x,a,h]),P=useCallback(B=>{let E={type:"category",categoryId:B};if(x)return x(E);if(r)return r(B);h(E);},[x,r,h]),k=useCallback((B,E)=>{let G={type:E!=null?E:"userfeed",userId:B};if(x)return x(G);if(s)return s(B);h(G);},[x,s,h]),A=useCallback(B=>{let E={type:"useredit",userId:B};if(x)return x(E);if(m)return m(B);h(E);},[x,m,h]),L=useCallback((B,E)=>{let G={type:"communityedit",communityId:B,tab:E};if(x)return x(G);if(l)return l(B,{tab:E});h(G);},[x,l,h]),O=useCallback(B=>{let E={type:"conversation",userId:B};if(x)return x(E);if(c)return c(B)},[x,c]),Y=useCallback(B=>{let E={type:"viewstory",targetId:B};if(x)return x(E);h(E);},[x,h]);return q.createElement(ju.Provider,{value:{page:p,onChangePage:M,onClickCategory:P,onClickCommunity:S,onClickUser:k,onClickStory:Y,onCommunityCreated:b,onEditCommunity:L,onEditUser:A,onMessageUser:O,onBack:C,setNavigationBlocker:y}},t)}var rN=i.span`
  cursor: pointer;
  color: ${({theme:e})=>e.palette.primary.main};
`,nN=({children:e,mentionee:t})=>{let{onClickUser:o}=V(),{userId:r}=t;return q.createElement(rN,{"data-qa-anchor":"mention-hilight-tag",onClick:()=>o(r)},e)},ea=nN;var ta=(e,t=[])=>{let o=(e==null?void 0:e.length)||0,r=[],n=(s,a,l)=>{r.push({start:s,end:a,highlight:l});};if(!t||(t==null?void 0:t.length)===0)n(0,o,!1);else {let s=0;t.forEach(a=>{n(s,a.start,!1),n(a.start,a.end,!0),s=a.end;}),n(s,o,!1);}return r};var Vu=i.a`
  color: ${({theme:e})=>e.palette.primary.shade1};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;var aN=e=>q.createElement(iN,d({componentDecorator:(t,o,r)=>q.createElement(Vu,{key:r,target:"blank",rel:"noopener noreferrer",href:t},o)},e)),mn=aN;var dN=(e=!1)=>{let[t,o]=useState(e),r=useRef(null);return useEffect(()=>{let n=r.current;if(n){let s=a=>{o(n.contains(a.target)||document.activeElement===n||a.target===n);};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)}},[r.current]),[r,t]},vs=dN;var pN=(e,t)=>{useEffect(()=>{if(e){let o=new MutationObserver(()=>{let{height:r,width:n}=e.getBoundingClientRect();t({height:r,width:n});});return o.observe(e,{attributes:!0,childList:!0,subtree:!0}),()=>o.disconnect()}},[t,e]);},Gu=pN;var yN=()=>{let e=useRef(null),[t,o]=useState({height:0,width:0});return useEffect(()=>{let r=e.current;if(r){let{height:n,width:s}=r.getBoundingClientRect(),a=[n,s].every(m=>m!==void 0),l=n!==t.height||s!==t.width;a&&l&&o({height:n,width:s});}},[e]),Gu(e.current,o),[e,t.height,t.width]},qu=yN;var hN=e=>new Promise((t,o)=>{let r=new FileReader;r.onload=()=>{if(r.result==null)return o();if(typeof r.result=="string")return t(r.result);let n=new TextDecoder;t(n.decode(r.result));},r.onerror=o,r.readAsDataURL(e);}),p0=hN;var Zu=i.div`
  > *:disabled {
    cursor: default;
    background: ${({theme:e})=>e.palette.base.shade3};
  }
`,Wu=i.div`
  position: relative;
  display: block;
`,Yu=i.div`
  overflow: hidden;
`,Qu=i.div`
  position: absolute;
  z-index: 2;
  ${({position:e})=>Rl(e)}
  ${({align:e})=>e&&Rl(e)}
  background: ${({theme:e})=>e.palette.system.background};
  ${({fullSized:e})=>e?"width: 100%;":"min-width: 15rem;"}
  ${({scrollable:e,scrollableHeight:t})=>e&&`
    max-height: ${t}px;
    overflow-y: auto;
  `}
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;var vN=200,xN=e=>q.createElement($,d({},e),q.createElement(po,{height:14,width:14})),bN=({"data-qa-anchor":e="",isOpen:t,renderTrigger:o=xN,children:r,position:n=Jn,align:s=Xi,handleClose:a,fullSized:l=!1,scrollable:m=!1,scrollableHeight:c=vN,parentContainer:u=null,disabled:f=!1,className:p=""})=>{let[g,y]=useState(t),[v,h]=useState(n),[C,x]=vs(t),[M,S]=qu(),b=useCallback(()=>{a?t&&a():y(!1);},[a,t]),P=Qi(C.current,{root:u,rootMargin:u?`0px 0px -${Math.ceil(c*100/(u.getBoundingClientRect().height-S))}% 0px`:void 0}),k={onClick:()=>y(!g),disabled:f};return useEffect(()=>{x||b();},[b,x]),useEffect(()=>{y(t);},[t]),useEffect(()=>{var A;(P==null?void 0:P.isIntersecting)===!1?((A=P.boundingClientRect)==null?void 0:A.top)<0?h(Jn):h(m0):h(n);},[P,n]),q.createElement(Wu,{ref:C,className:p},q.createElement(Zu,{ref:M},o(T(d({},k),{"data-qa-anchor":e}))),(t||g)&&q.createElement(Yu,null,q.createElement(Qu,{position:v,align:s,fullSized:l,scrollable:m,scrollableHeight:c},r)))},em=bN;var Ju=i(oo).attrs({width:16,height:16})`
  cursor: pointer;
  margin-left: auto;
`,Xu=i(K)`
  padding: 5px;
  height: 2rem;
  color: ${({theme:e})=>e.palette.neutral.main};
`,Ru=i.div`
  cursor: pointer;
  ${({active:e,theme:t})=>e&&`color: ${t.palette.primary.shade1};`};
  padding: 8px 12px;

  &:hover {
    background: #f2f2f4;
  }

  &.danger-zone {
    color: ${({theme:e})=>e.palette.alert.main};
  }
`,e6=i.div`
  ${({pullRight:e})=>e&&"margin-left: auto;"}
`;var IN=({className:e="","data-qa-anchor":t="",icon:o,options:r,position:n=Jn,align:s=Xl,pullRight:a=!0})=>{let[l,m]=useState(!1),c=()=>m(!l),u=()=>m(!1),f=p=>()=>{u(),p&&p();};return !r||r.length===0?null:q.createElement(e6,{className:e,pullRight:a},q.createElement(em,{"data-qa-anchor":t,isOpen:l,renderTrigger:p=>q.createElement(Xu,T(d({},p),{onClick:c,className:e,icon:o}),o||q.createElement(Ju,null)),position:n,align:s,handleClose:()=>m(!1)},r.map(({name:p,action:g,className:y})=>q.createElement(Ru,{key:p,"data-qa-anchor":`${t}-${p}`,className:y,onClick:f(g)},p))))},St=IN;var t6=i.div`
  color: ${({theme:e})=>e.palette.neutral.shade1};
  ${({theme:e})=>e.typography.caption}
  & > * {
    ${({theme:e})=>e.typography.caption}
  }
`;var PN=24*60*60*1e3,TN=({className:e,date:t=Date.now()})=>{let o=Date.now()-t;return q.createElement(t6,{className:e},o<PN?q.createElement(SN,{date:t}):q.createElement(FormattedDate,{value:t}))},tm=TN;var o6=i(J)`
  margin-right: 8px;
`,r6=i(St)`
  color: ${({theme:e})=>e.palette.neutral.main};
`,g0=i.div`
  border-bottom: 1px solid #e3e4e8;
`,kN=e=>e.replace("#","%23"),EN=e=>`<svg xmlns="http://www.w3.org/2000/svg" height="40">
<path d="M20 0 L 20 40" stroke="${kN(e.palette.base.shade4)}" />
</svg>`,n6=i.div`
  display: flex;
  color: black;
  padding-top: 16px;
`,i6=i.div`
  display: flex;
  color: black;
  padding-top: 16px;
  padding-left: 40px;
`;i(tr)`
  border: none;
  padding: 8px 0 16px;
  background-repeat: no-repeat;
  background-image: ${({theme:e})=>`url('data:image/svg+xml;utf8,${EN(e)}')`};
`;var a6=i.div`
  width: 100%;
`,s6=i.div`
  word-break: break-all;
  margin-bottom: 5px;
`,l6=i.div`
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
`;var m6=i.span`
  // react-truncate-markup tries to set to inline-block
  display: inline !important;
  ${({theme:e})=>e.typography.body}
`,y0=i(tm)`
  display: inline;
  margin-left: 5px;
  color: ${({theme:e})=>e.palette.base.shade1};
  &::before {
    content: '• ';
  }
  ${({theme:e})=>e.typography.caption}
`,h0=i.span`
  margin-left: 5px;
  color: ${({theme:e})=>e.palette.neutral.shade1};
  &::before {
    content: '• ';
  }
  ${({theme:e})=>e.typography.caption}
`,d6=i(K)`
  color: ${({theme:e})=>e.palette.primary.main};
  padding: 0 0 0 4px;

  &:hover {
    background: none;
    text-decoration: underline;
  }
`,c6=i.div`
  display: flex;
  align-items: center;
  padding: 2px 0;
  margin-left: -10px;
`,p6=i.div`
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
`,u6=i.div`
  display: inline-flex;
  align-items: center;
  margin: 7px 0px 7px 40px;
  background: ${({theme:e})=>e.palette.base.shade4};
  color: ${({theme:e})=>e.palette.base.shade2};
  border-radius: 4px;
  padding: 4px 8px 2px 0px;
`,C0=i(an).attrs({width:18,height:18})``,v0=i.div`
  display: flex;
  padding-right: 10px;

  &.reply {
    padding: 4px 10px 4px 4px;
  }
`,x0=i.div`
  display: flex;
  align-items: center;
`,b0=i.span`
  font-size: 14px;
`,f6=i(on).attrs({width:16,height:16})`
  margin-right: 5px;
`,g6=i(K)``,y6=i.div`
  display: flex;
  flex-direction: column;
`,h6=i.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;

  > * {
    margin-left: 8px;
  }
`,C6=i(We).attrs({rows:1,maxRows:15})`
  outline: none;
  border-radius: 4px;
  resize: none;
  ${({theme:e})=>e.typography.global}
`;var BN=8,FN=({text:e,className:t,mentionees:o,maxLines:r=BN})=>{let[n,s]=useState(!1),a=useMemo(()=>ta(e||"",Zi(o)),[o,e]),l=()=>s(!0),m=e?q.createElement(l6,{"data-qa-anchor":"comment-content",className:t},q.createElement(v6.Atom,null,a.map(c=>{let u=`${e}-${c.start}-${c.end}`,f=e.substring(c.start,c.end);if(c.highlight){let p=o==null?void 0:o.find(g=>g.index===c.start);return p?q.createElement(ea,{key:u,mentionee:p},f):q.createElement("span",{key:u},f)}return q.createElement(mn,{key:u},f)}))):null;return n?m:m?q.createElement(v6,{lines:r,ellipsis:q.createElement(d6,{onClick:l},q.createElement(FormattedMessage,{id:"comment.readmore"}))},m):null},M0=FN;var zN=({commentId:e,authorName:t,authorAvatar:o,canDelete:r=!1,canEdit:n=!1,canLike:s=!0,canReply:a=!1,canReport:l=!0,createdAt:m,editedAt:c,text:u,markup:f,onClickReply:p,handleReportComment:g,handleEdit:y,startEditing:v,cancelEditing:h,handleDelete:C,isEditing:x,onChange:M,queryMentionees:S,isReported:b,isReplyComment:P,isBanned:k,mentionees:A,metadata:L})=>{let{formatMessage:O}=useIntl(),Y=[n?{name:O(P?{id:"reply.edit"}:{id:"comment.edit"}),action:v}:null,l?{name:O(b?{id:"report.undoReport"}:{id:"report.doReport"}),action:g}:null,r?{name:O(P?{id:"reply.delete"}:{id:"comment.delete"}),action:C}:null].filter(ge);return q.createElement(q.Fragment,null,q.createElement(o6,{avatar:o,backgroundImage:ce}),q.createElement(a6,null,q.createElement(v6,{ellipsis:q.createElement("span",null,"...",q.createElement(y0,{date:m==null?void 0:m.getTime()}),((c==null?void 0:c.getTime())||0)-((m==null?void 0:m.getTime())||0)>0&&q.createElement(h0,null,q.createElement(FormattedMessage,{id:"comment.edited"}))),lines:2},q.createElement(s6,null,q.createElement(m6,null,t),q.createElement(v6.Atom,null,q.createElement(q.Fragment,null,k&&q.createElement($t,{style:{marginLeft:"0.265rem",marginTop:"1px"}}),q.createElement(y0,{date:m==null?void 0:m.getTime()}),((c==null?void 0:c.getTime())||0)-((m==null?void 0:m.getTime())||0)>0&&q.createElement(h0,null,q.createElement(FormattedMessage,{id:"comment.edited"})))))),x?q.createElement(y6,null,q.createElement(C6,{multiline:!0,mentionAllowed:!0,value:f,queryMentionees:S,onChange:B=>M==null?void 0:M(B)}),q.createElement(h6,null,q.createElement($,{"data-qa-anchor":"comment-cancel-edit-button",onClick:h},q.createElement(FormattedMessage,{id:"cancel"})),q.createElement(oe,{"data-qa-anchor":"comment-save-edit-button",onClick:()=>y==null?void 0:y(u)},q.createElement(FormattedMessage,{id:"save"})))):q.createElement(M0,{text:u,mentionees:A}),!x&&(s||a||Y.length>0)&&q.createElement(c6,null,s&&q.createElement(Du,{commentId:e}),a&&q.createElement(g6,{"data-qa-anchor":"comment-reply-button",onClick:p},q.createElement(f6,null)," ",q.createElement(FormattedMessage,{id:"reply"})),q.createElement(r6,{"data-qa-anchor":"comment-options-button",options:Y,pullRight:!1,align:Xi}))))},b6=zN;var cn=i.div.attrs(({progress:e})=>({style:{width:`${e||0}%`}}))`
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
`;var HN=e=>{let[t,o]=useState(!1),{data:r,isLoading:n,refetch:s}=useQuery({queryKey:["asc-uikit","CommentRepository","isCommentFlaggedByMe",e],queryFn:()=>CommentRepository.isCommentFlaggedByMe(e),enabled:e!=null});useEffect(()=>{r!=null&&o(r);},[r]);let a=()=>w(void 0,null,function*(){if(e!=null)try{o(!0),yield CommentRepository.flagComment(e);}catch(c){o(!1);}finally{s();}}),l=()=>w(void 0,null,function*(){if(e!=null)try{o(!1),yield CommentRepository.unflagComment(e);}catch(c){o(!0);}finally{s();}});return {isLoading:n,isFlaggedByMe:t,flagComment:a,unflagComment:l,toggleFlagComment:()=>w(void 0,null,function*(){e!=null&&(t?l():a());})}},om=HN;var jN="global-admin",{COMMUNITY_MODERATOR:VN,CHANNEL_MODERATOR:$N,MODERATOR:GN,SUPER_MODERATOR:qN}=Ri,Ao=e=>{if(!(e!=null&&e.length))return !1;let t=[VN,$N,GN,qN];return e.some(o=>t.includes(o))},Xn=e=>e!=null&&e.length?e.includes(jN):!1;var ZN=(e,t=!1,o=[])=>{let{currentUserId:r}=H(),n=(e==null?void 0:e.userId)===r,s=!!(e!=null&&e.parentId);return {canDelete:!t&&n||Ao(o),canEdit:!t&&n,canLike:!t,canReply:!t&&!s,canReport:!t&&!n}},rm=ZN;function Ms({commentId:e,shouldSubscribe:t=()=>!0,callback:o}){return At({fetcher:CommentRepository.getComment,params:e,callback:o,shouldSubscribe:()=>!!e&&t(),getSubscribedTopic:({data:r})=>getCommentTopic(r)})}var JN=5,XN=()=>q.createElement(p6,{"data-qa-anchor":"comment-deleted-comment"},q.createElement(v0,null,q.createElement(C0,null)),q.createElement(x0,null,q.createElement(b0,{"data-qa-anchor":"comment-deleted-comment-text"},q.createElement(FormattedMessage,{id:"comment.deleted"})))),RN=()=>q.createElement("div",null,q.createElement(u6,{"data-qa-anchor":"reply-deleted-reply"},q.createElement(v0,{className:"reply"},q.createElement(C0,null)),q.createElement(x0,null,q.createElement(b0,{"data-qa-anchor":"reply-deleted-reply-text"},q.createElement(FormattedMessage,{id:"reply.deleted"})))));function M6(e){var t;return e==null?"":typeof e.data=="string"?e.data:((t=e==null?void 0:e.data)==null?void 0:t.text)||""}var eL=({commentId:e,readonly:t})=>{var Ce;let o=Ji(e),r=Vt(o==null?void 0:o.referenceId),n=j(o==null?void 0:o.userId),s=nt(n==null?void 0:n.avatarFileId),{userRoles:a}=H(),{toggleFlagComment:l,isFlaggedByMe:m}=om(e),[c,u]=useState(!1),[f,p]=useState(!1),{formatMessage:g}=useIntl(),[y,v]=useState(!1);Ms({commentId:e});let{text:h,markup:C,mentions:x,onChange:M,queryMentionees:S,resetState:b,clearAll:P}=wt({targetId:r==null?void 0:r.targetId,targetType:r==null?void 0:r.targetType,remoteText:M6(o),remoteMarkup:Wi(M6(o),(o==null?void 0:o.metadata)||{})}),{canDelete:k,canEdit:A,canLike:L,canReply:O,canReport:Y}=rm(o,t,a);if(r==null&&o==null)return q.createElement(cn,null);let B=()=>w(void 0,null,function*(){return l()}),E=(fe,Ae,Ve)=>w(void 0,null,function*(){if(!(!(o!=null&&o.referenceType)||!(o!=null&&o.referenceId)))try{let{referenceType:Ee,referenceId:Ie}=o;yield CommentRepository.createComment({referenceType:Ee,referenceId:Ie,data:{text:fe},parentId:e,metadata:Ve,mentionees:Ae}),u(!1),v(!0);}catch(Ee){Ee instanceof Error&&Ee.message===ln.CONTAIN_BLOCKED_WORD&&Z.error({content:q.createElement(FormattedMessage,{id:"notification.error.blockedWord"})});}}),G=(fe,Ae,Ve)=>w(void 0,null,function*(){return e&&CommentRepository.updateComment(e,{data:{text:fe},metadata:Ve,mentionees:Ae})}),F=()=>w(void 0,null,function*(){return e&&CommentRepository.deleteComment(e)}),ee=()=>w(void 0,null,function*(){try{yield B(),m?Z.success({content:g({id:"report.unreportSent"})}):Z.success({content:g({id:"report.reportSent"})});}catch(fe){fe instanceof Error&&Z.error({content:fe.message});}}),se=()=>{u(fe=>!fe);},ie=()=>{p(!0);},D=()=>{p(!1),b();},U=()=>{let{metadata:fe,mentionees:Ae}=sn(x);G(h,Ae,fe),P(),p(!1);},ne=!!(o!=null&&o.parentId),ue=()=>{me({"data-qa-anchor":"delete-comment",title:q.createElement(FormattedMessage,{id:ne?"reply.delete":"comment.delete"}),content:q.createElement(FormattedMessage,{id:ne?"reply.deleteBody":"comment.deleteBody"}),cancelText:g({id:"comment.deleteConfirmCancelText"}),okText:g({id:"comment.deleteConfirmOkText"}),onOk:F});};if(o==null)return null;if(o!=null&&o.isDeleted)return ne?q.createElement(RN,null):q.createElement(g0,null,q.createElement(XN,null));let Me=q.createElement(b6,{commentId:o==null?void 0:o.commentId,authorName:(n==null?void 0:n.displayName)||(n==null?void 0:n.userId)||g({id:"anonymous"}),authorAvatar:s==null?void 0:s.fileUrl,canDelete:k,canEdit:A,canLike:L,canReply:O,canReport:Y,isBanned:n==null?void 0:n.isGlobalBanned,createdAt:o!=null&&o.createdAt?new Date(o.createdAt):void 0,editedAt:o!=null&&o.editedAt?new Date(o==null?void 0:o.editedAt):void 0,mentionees:(Ce=o==null?void 0:o.metadata)==null?void 0:Ce.mentioned,metadata:o==null?void 0:o.metadata,text:h,markup:C,handleReportComment:ee,startEditing:ie,cancelEditing:D,handleEdit:U,handleDelete:ue,isEditing:f,queryMentionees:S,isReported:m,isReplyComment:ne,onClickReply:se,onChange:M});return ne?q.createElement(i6,{"data-qa-anchor":"reply"},Me):q.createElement(g0,null,q.createElement(n6,{"data-qa-anchor":"comment"},Me),o.children.length>0&&q.createElement(ws,{parentId:o.commentId,referenceType:o.referenceType,referenceId:o.referenceId,readonly:t,isExpanded:y,limit:JN}),c&&q.createElement(tr,{postId:r==null?void 0:r.postId,userToReply:n==null?void 0:n.displayName,onSubmit:(fe,Ae,Ve)=>{E(fe,Ae,Ve);}}))},P0=memo(e=>{let t=N("Comment");return t?t(e):q.createElement(eL,d({},e))});var nm=i(ol).attrs({height:"16px",width:"16px"})``,im=i.div`
  display: flex;
  margin-right: 8px;
`,am=i.div`
  ${({theme:e})=>e.typography.body};
  color: ${({theme:e})=>e.palette.base.shade2};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;var T0=i($)`
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
`,I6=i(po).attrs({width:14,height:14})`
  margin-left: 5px;
`;var nL=({hasMore:e,loadMore:t,text:o="",contentSlot:r,className:n="",prependIcon:s=null,appendIcon:a=q.createElement(I6,null),isExpanded:l=!0})=>{let{formatMessage:m}=useIntl(),[c,u]=useState(l);return useEffect(()=>u(l),[l]),c?q.createElement(q.Fragment,null,r,e&&q.createElement(T0,{className:n,onClick:t},s," ",o||m({id:"loadMore"})," ",a)):c?null:q.createElement(q.Fragment,null,q.createElement(T0,{className:n,onClick:()=>u(!0)},s," ",o||m({id:"loadMore"})," ",a))},ct=nL;function Bo({postId:e,level:t,shouldSubscribe:o=()=>!0,callback:r}){return At({fetcher:PostRepository.getPost,params:e,callback:r,shouldSubscribe:()=>!!e&&o(),getSubscribedTopic:({data:n})=>getPostTopic(n,t)})}function mL({fetcher:e,params:t,callback:o=()=>{},config:r,shouldCall:n=()=>!0}){let{subscribe:s}=wd(),[a,l]=useState(!1),[m,c]=useState(n?n():!0),[u,f]=useState([]),[p,g]=useState(null),[y,v]=useState(!1),h=useRef(null),C=useCallback(()=>{var M;h.current&&(l(!0),(M=h.current)==null||M.call(h));},[h,a,m,c]),x=useCallback(M=>{n()&&(M.data&&f(M.data),c(M.loading),v(M.hasNextPage),g(M.error),h.current=M.onNextPage,o(M));},[n,f,c,v,h,o]);return useEffect(()=>{if(!n())return;let{unsubscribe:M}=s({fetcher:e,params:t,callback:x});return ()=>{M();}},[t,n]),{items:u,hasMore:y,isLoading:m,loadMore:C,error:p,loadMoreHasBeenCalled:a}}var be=mL;function Ps({parentId:e,referenceId:t,referenceType:o,limit:r=10,shouldCall:n=()=>!0}){let l=be({fetcher:CommentRepository.getComments,params:{parentId:e,referenceId:t,referenceType:o,limit:r},shouldCall:()=>n()&&!!t&&!!o}),{items:s}=l,a=I(l,["items"]);return d({comments:s},a)}var fL=({parentId:e,referenceId:t,referenceType:o,limit:r=5,readonly:n=!1,isExpanded:s=!0,latestComments:a})=>{let{formatMessage:l}=useIntl(),m=!!e,{comments:c,hasMore:u,loadMore:f}=Ps({parentId:e,referenceId:t,referenceType:o,limit:r,shouldCall:()=>(a==null?void 0:a.length)===0});Bo({postId:t,level:SubscriptionLevels.COMMENT,shouldSubscribe:()=>o==="post"&&!e});let p=a||c,g=l(m?{id:"collapsible.viewMoreReplies"}:{id:"collapsible.viewMoreComments"}),y=m?q.createElement(im,null,q.createElement(nm,null)):null;return ((a==null?void 0:a.length)===0||p.length===0)&&o==="story"&&!m?q.createElement(am,null,l({id:"storyViewer.commentSheet.empty"})):(a==null?void 0:a.length)===0||p.length===0?null:q.createElement(ct,{hasMore:u,loadMore:f,text:g,className:m?"reply-button":"comments-button",prependIcon:y,appendIcon:null,isExpanded:s,contentSlot:a?a.map(v=>q.createElement(P0,{key:v.commentId,commentId:v.commentId,readonly:n})):p.map(v=>q.createElement(P0,{key:v.commentId,commentId:v.commentId,readonly:n}))})},ws=memo(fL);var P6=5,yL=({post:e,readonly:t,onClickComment:o,isComposeBarDisplayed:r,handleAddComment:n})=>{let{postId:s,targetType:a,targetId:l,reactions:m={},commentsCount:c,latestComments:u}=e;Bo({postId:s,level:SubscriptionLevels.POST});let f=m[De]||0;return q.createElement(wu,null,q.createElement(Su,null,f>0&&q.createElement("span",{"data-qa-anchor":"engagement-bar-like-counter"},bp(f||0)," ",q.createElement(FormattedMessage,{id:"plural.like",values:{amount:f}})),c>0&&q.createElement("span",{"data-qa-anchor":"engagement-bar-comment-counter"},bp(c||0)," ",q.createElement(FormattedMessage,{id:"plural.comment",values:{amount:c}}))),t?q.createElement(q.Fragment,null,q.createElement(ku,null,q.createElement(FormattedMessage,{id:"community.cannotInteract"})),q.createElement(ws,{referenceId:s,referenceType:"post",limit:P6,latestComments:u,readonly:!0})):q.createElement(q.Fragment,null,q.createElement(Pu,null,q.createElement(mu,{postId:s}),q.createElement(K,{"data-qa-anchor":"engagement-bar-comment-button",onClick:o},q.createElement(Tu,null)," ",q.createElement(FormattedMessage,{id:"comment"}))),q.createElement(ws,{referenceId:s,referenceType:"post",limit:P6}),r&&q.createElement(tr,{postId:s,onSubmit:(p,g,y)=>n==null?void 0:n(p,g,y)})))},T6=e=>{let t=N("UIEngagementBar");return t?t(e):q.createElement(yL,d({},e))};function Ts({targetId:e,targetType:t,callback:o,shouldSubscribe:r=()=>!0}){let{unsubscribe:n}=ys({userId:e,shouldSubscribe:()=>r()&&t==="user",callback:o}),{unsubscribe:s}=hs({communityId:e,shouldSubscribe:()=>r()&&t==="community",callback:o});return {unsubscribe(){n(),s();}}}var ML=({postId:e,readonly:t=!1})=>{let[o,r]=useState(!1),n=()=>r(c=>!c),s=()=>r(!1),a=Vt(e),{clearAll:l}=wt({targetType:a==null?void 0:a.targetType,targetId:a==null?void 0:a.targetId});return Bo({postId:e,level:SubscriptionLevels.POST}),Ts({targetType:a==null?void 0:a.targetType,targetId:a==null?void 0:a.targetId,shouldSubscribe:()=>!!a}),a?q.createElement(T6,{post:a,readonly:t,isComposeBarDisplayed:o,handleAddComment:(c,u,f)=>w(void 0,null,function*(){try{yield CommentRepository.createComment({referenceType:"post",referenceId:e,data:{text:c},mentionees:u,metadata:f}),l==null||l(),s();}catch(p){p instanceof Error&&p.message===ln.CONTAIN_BLOCKED_WORD&&Z.error({content:q.createElement(FormattedMessage,{id:"notification.error.blockedWord"})});}}),onClickComment:n}):null};var E0=memo(e=>{let t=N("EngagementBar");return t?t(e):q.createElement(ML,d({},e))});var IL=i.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${({percent:e})=>e}%;
  overflow: hidden;
`,wL=i.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
`,SL=({className:e,ratio:t=1,children:o,onClick:r})=>q.createElement(IL,{className:e,percent:100*t,onClick:r},q.createElement(wL,null,o)),lm=SL;var PL=i.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  grid-auto-flow: row;
`,TL=i(lm)`
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
  ${({onClick:e})=>e&&"cursor: pointer;"}

  &:hover {
    z-index: 2;
  }
`,kL=({className:e,onClick:t,renderItem:o,items:r=[],itemKey:n})=>q.createElement(PL,{className:e,count:r.length},r.map((s,a)=>q.createElement(TL,{key:`#${n?s[n]:a}`,onClick:()=>t==null?void 0:t(a)},o(s)))),N6=kL;var LL=i.div`
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
`,L6=i.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${({onClick:e})=>e&&"cursor: pointer;"}

  &:hover {
    z-index: 2;
  }
`,AL=i.div`
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
`,BL=({className:e,onClick:t,renderItem:o,items:r=[],itemKey:n})=>{let s=useMemo(()=>{switch(r.length){case 1:return "one";case 2:return "two";case 3:return "three";case 4:return "four";default:return "many"}},[r.length]);return q.createElement(lm,{ratio:.75,className:e},q.createElement(LL,{className:Ln(s),count:r.length},r.slice(0,3).map((a,l)=>q.createElement(L6,{key:`#${n?a[n]:l}`,onClick:()=>t==null?void 0:t(l)},o(a))),r.length>=4&&q.createElement(L6,{key:`#${n?r[3][n]:4}`,onClick:()=>t==null?void 0:t(3)},o(r[3]),r.length>4&&q.createElement(AL,null,"+",r.length-4))))},A6=BL;var FL=({className:e,items:t=[],itemKey:o,truncate:r,onClick:n,renderItem:s})=>r||t.length<=4?q.createElement(A6,{className:e,onClick:n,renderItem:s,items:t,itemKey:o}):q.createElement(N6,{className:e,items:t,itemKey:o,onClick:n,renderItem:s}),pn=FL;var zL=(e,t)=>(useEffect(()=>{let o=r=>{r.stopPropagation(),r.key===e&&(r.preventDefault(),o(r));};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[t]),{removeEventListener:()=>document.removeEventListener("keydown",t)}),Gt=zL;var F6=i.div`
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
`;var D6=i.div`
  grid-area: image;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,z6=i.div`
  grid-area: counter;
  ${({theme:e})=>e.typography.headline}
  text-align: center;
`,N0=i.button`
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
`,O6=e=>q.createElement(N0,d({rel:"left"},e),q.createElement(Ro,{height:"24px"})),_6=e=>q.createElement(N0,d({rel:"right"},e),q.createElement(nn,{height:"24px"})),OL=e=>q.createElement(N0,d({rel:"close"},e),q.createElement(mt,{height:"20px"})),U6=i(OL)`
  background: rgba(0, 0, 0, 0.3);
  height: 43px;
  width: 43px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;var _L=({index:e=0,items:t=[],renderItem:o,onChange:r,showCounter:n=!0})=>{let s=()=>r==null?void 0:r(null),a=()=>r==null?void 0:r(e+1<t.length?e+1:0),l=()=>r==null?void 0:r(e-1>=0?e-1:t.length-1);return Gt("ArrowLeft",l),Gt("ArrowRight",a),Gt("Escape",s),q.createElement(F6,null,q.createElement(D6,null,o(t[e])),n&&q.createElement(z6,null,`${e+1} / ${t.length}`),t.length>1&&q.createElement(O6,{onClick:l}),t.length>1&&q.createElement(_6,{onClick:a}),q.createElement(U6,{onClick:s}))},H6=e=>{let t=N("ImageGallery");return t?t(e):q.createElement(_L,d({},e))};var HL=({progress:e,lightMode:t})=>q.createElement(cn,{progress:e,lightMode:t}),ia=HL;var mm=i.div`
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
`,j6=i.div`
  position: relative;
  width: 100%;
  height: 100%;
`,V6=z`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({mediaFit:e})=>e!=null?e:"cover"};
  object-position: center;
`,$6=i.img.attrs({loading:"lazy"})`
  ${V6}
`,VL=i.div`
  ${V6};

  display: flex;
  align-items: center;
  justify-content: center;
`,dm=()=>q.createElement(SizeMe,{monitorHeight:!0},({size:e})=>{let t=Math.min((e==null?void 0:e.width)||0,(e==null?void 0:e.height)||0);return q.createElement(VL,null,q.createElement(de,{borderRadius:0,height:t,width:t,style:{display:"block"}}))}),G6=i($).attrs({variant:"secondary",children:q.createElement(mt,null)})`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
`,$L=i(uo).attrs({width:24,height:24})`
  z-index: 2;
  opacity: 0.7;
`,q6=i($).attrs({variant:"secondary",children:q.createElement($L,null)})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`,Ns=i.div`
  display: flex;
`;var qL=({className:e,"data-qa-anchor":t="",url:o,progress:r,mediaFit:n,noBorder:s,onRemove:a,isRejected:l,onRetry:m,overlayElements:c})=>{let[u,f]=useState(!1),p=useCallback(y=>{y.preventDefault(),y.stopPropagation(),a&&a();},[a]),g=useCallback(y=>{y.preventDefault(),y.stopPropagation(),m&&m();},[m]);return q.createElement(mm,{className:e,border:!s,"data-qa-anchor":t},q.createElement(j6,null,o?q.createElement($6,{src:o,mediaFit:n,className:l?"darken":void 0,onError:()=>f(!0)}):q.createElement(dm,null),q.createElement(Ns,null,(!!l||u)&&q.createElement(q6,{onClick:g}),!!a&&q.createElement(G6,{onClick:p}),c)),!Number.isNaN(r)&&q.createElement(ia,{progress:(r||0)*100}))},cm=qL;var WL=({className:e,"data-qa-anchor":t="",file:o,progress:r=-1,mediaFit:n,noBorder:s,onRemove:a,isRejected:l,retry:m=()=>{},overlayElements:c})=>{if(o==null)return null;let u=URL.createObjectURL(o);return q.createElement(cm,{className:e,"data-qa-anchor":t,url:u,progress:r,mediaFit:n,noBorder:s,isRejected:l,overlayElements:c,onRemove:a,onRetry:()=>m()})},W6=WL;var QL=({className:e,"data-qa-anchor":t="",fileId:o,loading:r=!1,mediaFit:n="cover",noBorder:s,onRemove:a,overlayElements:l=void 0})=>{let m=_({fileId:o});return r||m==null?null:q.createElement(cm,{className:e,"data-qa-anchor":t,url:m,mediaFit:n,noBorder:s,overlayElements:l,onRemove:a})},Y6=QL;function Re(e){return "fileId"in e?q.createElement(Y6,d({},e)):"file"in e?q.createElement(W6,d({},e)):null}var L0=({item:e})=>q.createElement(Re,{fileId:e==null?void 0:e.data.fileId,"data-qa-anchor":"post-gallery-content-image-thumbnail-item",mediaFit:"cover"}),A0=({item:e})=>q.createElement(Re,{fileId:e==null?void 0:e.data.fileId,"data-qa-anchor":"post-gallery-content-image-item",mediaFit:"contain",noBorder:!0});var pm=i(e=>q.createElement("div",d({},e),"LIVE"))`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: ${({theme:e})=>e.palette.tertiary.main};
  border-radius: 0.25rem;
  color: #fff;
`;var Sr=i.div`
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
`,J6=i.div`
  position: relative;
  width: 100%;
  height: 100%;
`,X6=z`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({mediaFit:e})=>e!=null?e:"cover"};
  object-position: center;
`,XL=q.forwardRef((s,n)=>{var a=s,{src:e,mimeType:t,mediaFit:o}=a,r=I(a,["src","mimeType","mediaFit"]);return q.createElement("video",T(d({controls:!0,controlsList:"nodownload"},r),{ref:n,"data-qa-anchor":"video-preview"}),q.createElement("source",{src:e,type:t}),q.createElement("p",null,"Your browser does not support this format of video. Please try again later once the server transcodes the video into an playable format(mp4)."))}),um=i(XL)`
  ${X6}
  cursor: pointer;
`,RL=i.div`
  ${X6};

  display: flex;
  align-items: center;
  justify-content: center;
`,R6=()=>q.createElement(SizeMe,{monitorHeight:!0},({size:e})=>{let t=Math.min(e.width||0,e.height||0);return q.createElement(RL,null,q.createElement(de,{height:t,width:t,style:{display:"block"}}))}),e8=i($).attrs({variant:"secondary",children:mt})`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
`,eA=i(uo).attrs({width:24,height:24})`
  z-index: 2;
  opacity: 0.7;
`,t8=i($).attrs({variant:"secondary",icon:eA})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`,o8=i.div`
  display: flex;
`;i(Po)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;var r8=i(pm)`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;var rA=({url:e,progress:t=-1,mediaFit:o,noBorder:r,onRemove:n,isRejected:s,onRetry:a,mimeType:l,autoPlay:m,isLive:c})=>{let u=useCallback(y=>{y.preventDefault(),y.stopPropagation(),n&&n();},[n]),f=useCallback(y=>{y.preventDefault(),y.stopPropagation(),a&&a();},[a]),[p,g]=useState(null);return useEffect(()=>{if(!(!p||!e||!e.includes("m3u8"))&&!(p!=null&&p.canPlayType("application/vnd.apple.mpegurl"))&&Ls.isSupported()){let y=new Ls;return y.loadSource(e),y.attachMedia(p),y.on(Ls.Events.ERROR,(v,h)=>{if(h.fatal)switch(h.type){case Ls.ErrorTypes.NETWORK_ERROR:y.startLoad();break;case Ls.ErrorTypes.MEDIA_ERROR:y.recoverMediaError();break;}}),()=>y.destroy()}},[p,c,e]),q.createElement(Sr,{border:!r},q.createElement(J6,null,e?q.createElement(um,{key:e,ref:y=>g(y),className:s?"darken":void 0,mediaFit:o,mimeType:l,src:e,autoPlay:m}):q.createElement(R6,null),q.createElement(o8,null,c&&q.createElement(r8,null),!!s&&q.createElement(t8,{onClick:f}),!!n&&q.createElement(e8,{onClick:u}))),!Number.isNaN(t)&&q.createElement(ia,{progress:(t||0)*100}))},aa=rA;var iA=o=>{var r=o,{file:e}=r,t=I(r,["file"]);if(e==null)return null;let n=URL.createObjectURL(e);return q.createElement(aa,d({url:n},t))},i8=iA;var sA=o=>{var r=o,{fileId:e}=r,t=I(r,["fileId"]);let n=nt(e);if(n==null)return null;let s=(()=>{if(n.status===Ou.Transcoded){let{videoUrl:a}=n;return (a==null?void 0:a["1080p"])||(a==null?void 0:a["720p"])||(a==null?void 0:a["480p"])||(a==null?void 0:a["360p"])||(a==null?void 0:a.original)||n.fileUrl}return n.fileUrl})();return q.createElement(aa,d({url:s,mimeType:_u},t))},a8=sA;function Tr(e){return "fileId"in e?q.createElement(a8,d({},e)):"file"in e?q.createElement(i8,d({},e)):null}var d8=i($).attrs({variant:"secondary",children:q.createElement(mt,null)})`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
`,l8=i(Po)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,m8=i.div`
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
`,mA=({className:e,duration:t=0,fileId:o,onRemove:r,overlayElements:n,showPlayIcon:s})=>{let{formatNumber:a}=useIntl(),l=m=>{let c=a(Math.floor(m/60/60),{minimumIntegerDigits:2,maximumSignificantDigits:2}),u=a(Math.floor(m/60%60),{minimumIntegerDigits:2,maximumSignificantDigits:2}),f=a(m%60%60,{minimumIntegerDigits:2,maximumSignificantDigits:2});return c==="00"?`${u}:${f}`:`${c}:${u}:${f}`};return o?q.createElement(Re,{"data-qa-anchor":"post-gallery-content-thumbnail",className:e,fileId:o,mediaFit:"cover",overlayElements:q.createElement(q.Fragment,null,n,s&&q.createElement(l8,{"data-qa-anchor":"post-gallery-content-play-button"}),t!=null?q.createElement(m8,null,l(t)):null),onRemove:r}):q.createElement(mm,{"data-qa-anchor":"post-gallery-content-thumbnail",className:e},q.createElement(Ns,null,n,s&&q.createElement(l8,{"data-qa-anchor":"post-gallery-content-play-button"}),t!=null?q.createElement(m8,null,l(t)):null,!!r&&q.createElement(d8,{onClick:m=>{m.preventDefault(),m.stopPropagation(),r();}})))},As=i(mA)`
  background: #ebecef;
`,fm=r=>{var n=r,{fileId:e,videoFileId:t}=n,o=I(n,["fileId","videoFileId"]);var m,c,u,f,p;let s=nt(e),a=nt(t),l=typeof((u=(c=(m=a==null?void 0:a.attributes)==null?void 0:m.metadata)==null?void 0:c.video)==null?void 0:u.duration)=="number"?((p=(f=a==null?void 0:a.attributes)==null?void 0:f.metadata)==null?void 0:p.video).duration:void 0;return s==null?null:q.createElement(As,T(d({},o),{duration:l,fileId:e}))},dA=i.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
  padding-bottom: 56%;
  background: #000;
`,cA=o=>{var r=o,{children:e}=r,t=I(r,["children"]);return q.createElement("div",d({},t),q.createElement(dA,null,e))},Bs=i(cA)`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 825px;
  margin-right: auto;
  margin-left: auto;
`,fn=i.div`
  && {
    position: absolute;
    top: 50%;
    right: 1em;
    left: 1em;
    text-align: center;
    transform: translateY(-50%);
    color: #fff;
  }
`,c8=({children:e,className:t,onRemove:o})=>q.createElement(Sr,{className:t},q.createElement(fn,null,e),q.createElement(Ns,null,!!o&&q.createElement(d8,{onClick:r=>{r.preventDefault(),r.stopPropagation(),o();}})));var oi=({item:e,showPlayIcon:t,showVideoDuration:o})=>q.createElement(fm,{fileId:e==null?void 0:e.data.thumbnailFileId,showPlayIcon:t,videoFileId:o&&(e==null?void 0:e.data.videoFileId.original)}),B0=({item:e})=>{let t=(e==null?void 0:e.data.videoFileId.high)||(e==null?void 0:e.data.videoFileId.medium)||(e==null?void 0:e.data.videoFileId.low)||(e==null?void 0:e.data.videoFileId.original);return t?q.createElement(Tr,{fileId:t,mediaFit:"contain",noBorder:!0}):q.createElement(Sr,null,q.createElement(Bs,null,q.createElement(fn,null,q.createElement(FormattedMessage,{id:"video.notReady"}))))};var yA=e=>{let[t,o]=useState(null);return useEffect(()=>{function r(){return w(this,null,function*(){if(e==null)return;let n=yield StreamRepository.getStream(e);o(n.data);})}r();},[e]),t},Fs=yA;var u8=i(uo)`
  && {
    font-size: 24px;
  }
`,f8=i.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  max-width: calc(100% - 1.5rem);

  > :not(:first-child) {
    margin-top: 0.5rem;
  }
`,g8=i.div`
  ${({theme:e})=>e.typography.bodyBold};
  color: #fff;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`,y8=i.div`
  margin-top: 0.5rem;
`,hA=e=>q.createElement(As,T(d({},e),{overlayElements:q.createElement(fn,null,q.createElement(u8,null),q.createElement(y8,null,q.createElement(FormattedMessage,{id:"liveStream.idle"})))})),h8=i(hA)`
  background: #000;
`,C8=i.div`
  && {
    ${({theme:e})=>e.typography.title}
  }
`,v8=i.div`
  margin: 2px auto 0 auto;
  max-width: 15.5rem;
`,CA=e=>q.createElement(As,T(d({},e),{overlayElements:q.createElement(fn,null,q.createElement(C8,null,q.createElement(FormattedMessage,{id:"liveStream.ended.caption"})),q.createElement(v8,null,q.createElement(FormattedMessage,{id:"liveStream.ended.message"})))})),x8=i(CA)`
  background: #000;
`,b8=i(As)`
  background: center / 90% no-repeat ${h4} #d9dcec;
`,vA=e=>q.createElement("div",d({},e),"RECORDED"),M8=i(vA)`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0.25rem;
  color: #fff;
`,I8=()=>q.createElement(Sr,null,q.createElement(Bs,null,q.createElement(fn,null,q.createElement(u8,null),q.createElement(y8,null,q.createElement(FormattedMessage,{id:"liveStream.idle"}))))),w8=()=>q.createElement(Sr,null,q.createElement(Bs,null,q.createElement(fn,null,q.createElement(C8,null,q.createElement(FormattedMessage,{id:"liveStream.ended.caption"})),q.createElement(v8,null,q.createElement(FormattedMessage,{id:"liveStream.ended.message"})))));function xA(e){var t,o,r,n;if(e.status==="live")return (o=(t=e.watcherUrl)==null?void 0:t.hls)==null?void 0:o.url;if(e.status==="recorded")return (n=(r=e==null?void 0:e.recordings)==null?void 0:r.find(s=>s.mp4))==null?void 0:n.mp4.url}var ri=({item:e,showPlayIcon:t,showLivestreamRecordedBadge:o,showLivestreamTitle:r})=>{var l;let n=Fs(e==null?void 0:e.data.streamId),s=nt(n==null?void 0:n.thumbnailFileId);if(n==null)return null;if(n.status==="idle"||n.isDeleted)return q.createElement(h8,null);if(n.status==="ended")return q.createElement(x8,null);let a=(l=n.recordings.find(m=>m.mp4))==null?void 0:l.mp4;return q.createElement(b8,{duration:a==null?void 0:a.duration,fileId:s==null?void 0:s.fileId,overlayElements:q.createElement(f8,null,n.status==="live"&&q.createElement(pm,null),o&&n.status==="recorded"&&q.createElement(M8,null),r&&n.title&&q.createElement(g8,null,n.title)),showPlayIcon:t})},F0=({item:e})=>{var o;let t=Fs((o=e==null?void 0:e.data)==null?void 0:o.streamId);return t==null?null:t.status==="idle"||t.isDeleted?q.createElement(I8,null):t.status==="ended"?q.createElement(w8,null):q.createElement(aa,{isLive:t.status==="live",mediaFit:"contain",noBorder:!0,url:xA(t)})};function fo(e){return !!e.skeleton}function Je(e){try{let t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch(t){return !1}}var rr=(e,t)=>e?e.hasPermission(d0.ManageStoryPermission).currentUser()?!0:t?e.hasPermission(d0.ManageStoryPermission).community(t):!1:!1;function ma(e){if(!e)return;let t=new Date(e),r=Math.floor((new Date().getTime()-t.getTime())/1e3);return r<60?"Just now":r>=60&&r<3600?`${Math.floor(r/60)}m`:`${Math.floor(r/3600)}h`}var P8=e=>e.path.split("/user/")[0];var T8=e=>`${P8(e)}/membership/${e._id}/+/+`,k8=e=>`${P8(e)}/membership/+/${e._id}/+`;var IA=({loading:e,loadingMore:t,items:o})=>{let[r,n]=useState(null);return {newItems:useMemo(()=>e?new Array(6).fill({skeleton:!0}):t?[...o||[],...new Array(6).fill({skeleton:!0})]:o,[o,e,t]),index:r,setIndex:n}},wA=({className:e,items:t=[],loading:o=!1,loadingMore:r=!1,showCounter:n=!1,truncate:s=!1,renderVideoItem:a,renderImageItem:l,renderLiveStreamItem:m,renderVideoThumbnail:c,renderImageThumbnail:u,renderLiveStreamThumbnail:f})=>{let{newItems:p,index:g,setIndex:y}=IA({loading:o,loadingMore:r,items:t}),v=C=>{switch(C.dataType){case"image":return u?u(C):q.createElement(L0,{item:C});case"video":return c?c(C):q.createElement(oi,{item:C});case"liveStream":return f?f(C):q.createElement(ri,{item:C});default:return null}};return q.createElement(q.Fragment,null,q.createElement(pn,{className:e,items:t,truncate:s,onClick:C=>{fo(t[C])||y(C);},renderItem:C=>C.skeleton?q.createElement(dm,null):v(C)}),g!==null&&q.createElement(H6,{index:g,items:p,showCounter:n,onChange:C=>y(C),renderItem:C=>{switch(C.dataType){case"image":return l?l(C):q.createElement(A0,{item:C});case"video":return a?a(C):q.createElement(B0,{item:C});case"liveStream":return m?m(C):q.createElement(F0,{item:C});default:return null}}}))},ni=wA;var E8={aac:Vi,avi:xl,csv:bl,doc:Il,exe:wl,gif:Yn,html:Sl,jpg:Yn,mov:Tl,mp3:kl,mp4:El,mpeg:ms,ogg:Vi,pdf:Nl,ppt:ds,pptx:ds,ppx:Ll,png:Yn,rar:Al,txt:Bl,xls:ps,xlsx:ps,zip:Fl,audio:Vi,image:Yn,video:ms},PA={pptx:["openxmlformats-officedocument.presentationml"],xlsx:["openxmlformats-officedocument.spreadsheetml.sheet"]},TA=o=>{var r=o,{file:e}=r,t=I(r,["file"]);let{name:n,type:s}=e,a=s.toLowerCase(),l=Object.entries(PA).find(([,u])=>u.find(f=>a.includes(f))),m=l?l[0]:n.slice(n.lastIndexOf(".")+1),c=m in E8?E8[m]:Ml;return q.createElement(c,d({},t))},N8=TA;var L8=i.a`
  display: block;
  position: relative;
  border: 1px solid ${({theme:e})=>e.palette.base.shade4};
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
`,A8=i.div`
  position: relative;
  display: grid;
  grid-template-areas: 'icon name size remove';
  grid-template-columns: minmax(min-content, 2em) auto max-content min-content;
  grid-template-rows: 2.5em;
  grid-gap: 0.5em;
  padding: 0.5em;
  align-items: center;
`,B8=i.img.attrs({loading:"lazy"})`
  grid-area: icon;
  width: 2.5em;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border: 1px solid ${({theme:e})=>e.palette.base.shade4};
  border-radius: 4px;
`,F8=i(N8)`
  grid-area: icon;
`,EA=i(uo).attrs({width:14,height:14})`
  fill: ${({theme:e})=>e.palette.alert.main};
  z-index: 2;
`,D8=e=>q.createElement($,T(d({},e),{variant:"secondary"}),q.createElement(q.Fragment,null,q.createElement(EA,null)," ",q.createElement(FormattedMessage,{id:"file.reUpload"}))),z8=i.div`
  grid-area: name;
  padding: 0 0.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({theme:e})=>e.typography.bodyBold}
`,O8=i.div`
  grid-area: size;
  ${({theme:e})=>e.typography.caption};
  color: ${({theme:e})=>e.palette.base.shade1};
`,NA=i(mt)`
  grid-area: remove;
  z-index: 2;
`,_8=e=>q.createElement($,T(d({},e),{variant:"secondary"}),q.createElement(NA,null)),U8=i.div`
  display: flex;
`;var BA=({"data-qa-anchor":e="",name:t,url:o,type:r,size:n,progress:s=-1,onRemove:a,isRejected:l,onRetry:m})=>{useIntl();let u=useCallback(g=>{g.preventDefault(),g.stopPropagation(),a&&a();},[a]),f=useCallback(g=>{g.preventDefault(),g.stopPropagation(),m&&m();},[m]),p=r==null?void 0:r.includes("image");return q.createElement(L8,{href:o,download:!0,"data-qa-anchor":e},q.createElement(A8,null,p&&o?q.createElement(B8,{src:o}):q.createElement(F8,{file:{name:t,type:r},width:null,height:"100%"}),q.createElement(z8,null,t)," ",q.createElement(O8,null,LA(n||0,{base:2})),q.createElement(U8,null,!!l&&q.createElement(D8,{onClick:f}),!!a&&q.createElement(_8,{"data-qa-anchor":"uploaders-file-remove-button",onClick:u}))),!Number.isNaN(s)&&q.createElement(ia,{progress:(s||0)*100}))},gm=BA;var DA=({"data-qa-anchor":e="",file:t,progress:o=-1,onRemove:r,isRejected:n,retry:s=()=>{}})=>{if(t==null)return null;let a=t.type.includes("image")?URL.createObjectURL(t):void 0;return q.createElement(gm,{"data-qa-anchor":e,name:t.name,size:t.size,type:t.type,url:a,progress:o,isRejected:n,onRemove:r,onRetry:()=>s()})},j8=DA;var _A=({"data-qa-anchor":e="",fileId:t,onRemove:o})=>{let r=nt(t);if(!r)return null;let n=FileRepository.fileUrlWithSize(r==null?void 0:r.fileUrl,"small");return q.createElement(gm,{"data-qa-anchor":e,name:r.attributes.name,size:isNaN(Number(r.attributes.size))?0:Number(r.attributes.size),type:r.attributes.mimeType,url:n,onRemove:o})},V8=_A;function go(e){return "fileId"in e?q.createElement(V8,d({},e)):"file"in e?q.createElement(j8,d({},e)):null}var jA=5,VA=e=>q.createElement($,{onClick:e},q.createElement(FormattedMessage,{id:"collapsible.viewAll"})),$A=({items:e=[],onExpand:t=()=>{},visibleAmount:o=jA,renderTrigger:r=VA,renderItem:n})=>{let s=o<e.length?e.slice(0,o):e,[a,l]=useState(o>=e.length),m=()=>{l(!0),t();};return a?q.createElement(q.Fragment,null,e.map(c=>n(c))):q.createElement(q.Fragment,null,s.map(c=>n(c)),r(m))},G8=$A;var qA=i.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
`,ZA=i.button.attrs({role:"button"})`
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
`,WA=e=>q.createElement(ZA,{onClick:e},q.createElement(FormattedMessage,{id:"collapsible.viewAllFiles"})),YA=({items:e})=>q.createElement(qA,{"data-qa-anchor":"post-file-list-content"},q.createElement(G8,{items:e,renderTrigger:WA,renderItem:t=>q.createElement(go,{key:t.data.fileId,"item-qa-anchor":"post-file-item",fileId:t.data.fileId})})),q8=YA;var Z8=i.div`
  padding: 14px 0;
  border-radius: 4px;
  border: 1px solid
    ${({theme:e,checked:t})=>t?e.palette.primary.main:e.palette.base.shade4};
  margin-bottom: 12px;
`,W8=i.div`
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
`,Y8=i.div`
  font-weight: bold;
`,D0=i.div`
  font-weight: 600;
`,Q8=i.div`
  display: flex;
  justify-content: space-between;

  :last-child {
    margin-left: auto;
  }

  margin-top: 20px;
  margin-bottom: 12px;
`,K8=i.a.attrs({role:"button"})`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 600;

  ${({disabled:e,theme:t})=>e?t.palette.primary.shade2:t.palette.primary.main};

  &:hover {
    cursor: pointer;
  }
`,J8=i.div`
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
`,X8=i.div`
  margin-left: auto;
  color: ${({theme:e})=>e.palette.base.shade2};
  font-size: 12px;
  font-weight: 400;
`,R8=i.div`
  position: relative;
  width: 100%;
  height: 14px;
  background: ${({theme:e})=>e.palette.base.shade4};
  border-radius: 8px;
  overflow: hidden;
`,ef=i.div`
  position: absolute;
  border-radius: 8px;
  width: ${({percentage:e=0})=>`${e}%`};
  height: 100%;
  background: ${({checked:e,theme:t})=>e?t.palette.primary.main:t.palette.base.shade2};
`;var tf=i.label`
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
`,of=i.input.attrs({type:"radio"})`
  &&& {
    appearance: none;
    position: absolute;
    outline: none;
  }
`,QA=z`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,ym=i.div`
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
      ${QA}
      content: '';
      width: .75rem;
      height: .75rem;
      background: ${t.palette.primary.main};
      border-radius: 50%;
    }
  `}
`;var JA=e=>Fe({fetcher:PollRepository.getPoll,params:e,shouldCall:()=>!!e}),hm=JA;var tB=864e5,oB=({data:e,onCheck:t,checked:o})=>q.createElement(Z8,{checked:o,onClick:t},q.createElement(J8,null,q.createElement(ym,{checked:o}),q.createElement(D0,null,e))),rB=({data:e,voteCount:t,totalVotes:o=0,isVotedByUser:r})=>{let n=t&&o?t/o*100:0;return q.createElement(W8,{checked:r},q.createElement(D0,null,e),q.createElement(R8,null,q.createElement(ef,{percentage:n,checked:r})),q.createElement("div",null,q.createElement(FormattedMessage,{id:"poll.votes",values:{voteCount:t}})))},nB=({answers:e,handleCheck:t,answerIds:o})=>q.createElement(q.Fragment,null,e.map(a=>{var l=a,{id:r,data:n}=l,s=I(l,["id","data"]);return q.createElement(oB,d({key:r,checked:o.includes(r),onCheck:()=>t(r),data:n},s))})),rf=({answers:e,totalVotes:t})=>q.createElement(q.Fragment,null,e.map(s=>{var a=s,{id:o,data:r}=a,n=I(a,["id","data"]);return q.createElement(rB,T(d({key:o,data:r},n),{totalVotes:t,isVotedByUser:!1}))})),iB=({pollId:e})=>{let t=hm(e),[o,r]=useState([]),{formatMessage:n}=useIntl();if(t==null)return null;let{answers:s=[],answerType:a,closedIn:l,isDeleted:m,isVoted:c,status:u}=t,f=u==="closed",p=s.reduce((C,x)=>C+x.voteCount,0),g=a==="multiple",y=C=>{if(o.includes(C)){let x=o.findIndex(M=>M===C);r(M=>[...M.splice(0,x),...M.splice(x+1)]);}else r(g?x=>[...x,C]:[C]);},v=C=>w(void 0,null,function*(){if(e){if(C.preventDefault(),f||m)throw new Error(n({id:"poll.error.deletedOrClosed"}));yield PollRepository.votePoll(e,o);}}),h=Math.floor((l||0)/tB);return q.createElement(q.Fragment,null,q.createElement(Q8,null,q.createElement(Y8,null,f?q.createElement(FormattedMessage,{id:"poll.vote.finalResults"}):q.createElement(FormattedMessage,{id:"poll.vote.closedIn",values:{closedIn:h}})),q.createElement(X8,null,q.createElement(FormattedMessage,{id:"poll.votes",values:{voteCount:p}}))),f?q.createElement(rf,{answers:s}):c?q.createElement(rf,{answers:s,totalVotes:p}):q.createElement(nB,{answers:s,handleCheck:y,answerIds:o}),!c&&q.createElement(K8,{disabled:!o.length,onClick:v},q.createElement(FormattedMessage,{id:"poll.vote.submit"})))},nf=iB;var af=i(ni)`
  margin-right: calc(-1rem - 1px);
  margin-left: calc(-1rem - 1px);
  width: auto;
  // component's height / width should be about 0.56 according design
  // why 60% not 56%? - something wrong with styles
  padding-bottom: 60%;
`;var aB=["image","video","file","poll","liveStream"],sB=({contents:e})=>{let t=aB.map(o=>e.filter(r=>r.dataType===o)).filter(o=>o&&!!o.length).reduce((o,r)=>T(d({},o),{[r[0].dataType]:r}),{});return Object.keys(t).length?q.createElement(q.Fragment,null,Object.entries(t).map(([o,r])=>{switch(o){case"image":return q.createElement(ni,{key:o,items:r,truncate:!0,showCounter:!0});case"video":return q.createElement(ni,{key:o,items:r,truncate:!0,showCounter:!0,renderVideoThumbnail:n=>q.createElement(oi,{item:n,showPlayIcon:!0,showVideoDuration:!0})});case"file":return q.createElement(q8,{key:o,items:r});case"poll":return q.createElement(q.Fragment,null,r.map(n=>q.createElement(nf,{key:o,pollId:n.data.pollId})));case"liveStream":return q.createElement(af,{key:o,items:r,renderLiveStreamThumbnail:n=>q.createElement(ri,{item:n,showPlayIcon:!0,showLivestreamTitle:!0})});default:return null}})):null},sf=sB;var lB=i.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: none;
`,mB=i(We).attrs({rows:1,maxRows:15})`
  outline: none;
  border: none;
  resize: none;
  font: inherit;
`,dB=({text:e,placeholder:t,onChange:o,queryMentionees:r})=>q.createElement(lB,null,q.createElement(mB,{"data-qa-anchor":"post-editor-textarea",placeholder:t,value:e,multiline:!0,mentionAllowed:!0,queryMentionees:r,onChange:o})),mf=dB;var cB=({items:e,onRemove:t})=>q.createElement(pn,{items:e,renderItem:o=>{var r;return q.createElement(Re,{fileId:(r=o==null?void 0:o.data)==null?void 0:r.fileId,onRemove:()=>t(o.postId)})}}),cf=cB;var fB=i(c8)`
  background: #ebecef;
`,gB=({items:e,onRemove:t})=>{let[o,r]=useState(void 0);return q.createElement(pn,{itemKey:"postId",items:e,onClick:n=>r(e[n].postId),renderItem:n=>{if(o===n.postId){let s=n.data.videoFileId.high||n.data.videoFileId.medium||n.data.videoFileId.low||n.data.videoFileId.original;return s?q.createElement(Tr,{key:n.data.videoFileId.original,fileId:s,mediaFit:"cover",noBorder:!0,autoPlay:!0,onRemove:()=>t(n.postId)}):q.createElement(fB,{onRemove:()=>t(n.postId)},q.createElement(FormattedMessage,{id:"video.notReady"}))}return q.createElement(fm,{key:n.data.thumbnailFileId,fileId:n.data.thumbnailFileId,onRemove:()=>t(n.postId)})}})},pf=gB;var yB=i.div`
  & > * {
    margin-bottom: 12px;
  }
`,hB=({items:e,onRemove:t})=>q.createElement(yB,null,e.map(o=>{var r;return q.createElement(go,{key:o.postId,fileId:(r=o==null?void 0:o.data)==null?void 0:r.fileId,onRemove:()=>t(o.postId)})})),ff=hB;var gf=["text"];function vB(e){return gf.includes(e.dataType)}function xB(e){return Array.isArray(e.data)}var bB=e=>{if(e.data==null)return null;if(xB(e)){let l=e,{onRemoveChild:u,dataType:f,data:p}=l,g=I(l,["onRemoveChild","dataType","data"]);switch(f){case"image":return q.createElement(cf,d({items:p,onRemove:u},g));case"video":return q.createElement(pf,d({items:p,onRemove:u},g));case"file":return q.createElement(ff,d({items:p,onRemove:u},g));default:return null}}if(vB(e)){let m=e,{placeholder:u,onChangeText:f,dataType:p,data:g}=m,y=I(m,["placeholder","onChangeText","dataType","data"]);return q.createElement(mf,d({text:g,placeholder:u||void 0,onChange:v=>f==null?void 0:f(v)},y))}let c=e,{placeholder:t,onChangeText:o,dataType:r,onRemoveChild:n,data:s}=c,a=I(c,["placeholder","onChangeText","dataType","onRemoveChild","data"]);switch(r){case"image":return q.createElement(Re,d({},a));case"video":return q.createElement(Tr,d({},a));case"file":return q.createElement(go,d({},a));default:return null}},_s=bB;var yf=i.div`
  width: 520px;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px;
`,hf=i.div`
  padding: 16px;
`,Cf=i.div`
  border-top: 1px solid ${({theme:e})=>e.palette.base.shade4};
  padding: 12px 16px;
`,vf=i(oe)`
  padding: 10px 16px;
  margin-left: auto;
`;var SB=e=>{let[t,o]=useState([]);return useEffect(()=>{function r(){return w(this,null,function*(){if(!e||(e==null?void 0:e.length)===0)return;let n=yield PostRepository.getPostByIds(e);o(n.data);})}r();},[e]),t},xf=SB;var Mf=({postId:e,onSave:t})=>{var b,P;let o=Vt(e),r=xf(o==null?void 0:o.children),{text:n,markup:s,mentions:a,mentionees:l,metadata:m,clearAll:c,onChange:u,queryMentionees:f}=wt({targetId:o==null?void 0:o.targetId,targetType:o==null?void 0:o.targetType,remoteText:typeof(o==null?void 0:o.data)=="string"?o==null?void 0:o.data:(b=o==null?void 0:o.data)==null?void 0:b.text,remoteMarkup:Wi(typeof(o==null?void 0:o.data)=="string"?o==null?void 0:o.data:(P=o==null?void 0:o.data)==null?void 0:P.text,o==null?void 0:o.metadata)}),[p,g]=useState([]),y=useMemo(()=>r.filter(k=>!p.includes(k.postId)),[r,p]),v=k=>{g(A=>[...A,k]);},h=()=>w(void 0,null,function*(){p.forEach(k=>{PostRepository.deletePost(k);}),yield PostRepository.updatePost(o.postId,{data:{text:n},mentionees:l,metadata:m}),c(),t();}),C=(n==null?void 0:n.trim())===""&&!y.length,x=useMemo(()=>y.filter(k=>k.dataType==="file"),[y]),M=useMemo(()=>y.filter(k=>k.dataType==="image"),[y]),S=useMemo(()=>y.filter(k=>k.dataType==="video"),[y]);return {text:n,markup:s,mentions:a,post:o,childrenPosts:y,clearAll:c,onChange:u,queryMentionees:f,childVideoPosts:S,childFilePosts:x,childImagePosts:M,handleRemoveChild:v,isEmpty:C,handleSave:h}};var EB=({postId:e,placeholder:t="What's going on...",className:o,onSave:r})=>{let{post:n,markup:s,onChange:a,queryMentionees:l,childVideoPosts:m,childFilePosts:c,childImagePosts:u,handleRemoveChild:f,isEmpty:p,handleSave:g}=Mf({postId:e,onSave:r});return n==null?null:q.createElement(yf,{className:o},q.createElement(hf,null,q.createElement(_s,{"data-qa-anchor":"post-editor-textarea",data:s,dataType:"text",placeholder:t,queryMentionees:l,onChangeText:a}),u.length>0&&q.createElement(_s,{data:u,dataType:"image",onRemoveChild:f}),m.length>0&&q.createElement(_s,{data:m,dataType:"video",onRemoveChild:f}),c.length>0&&q.createElement(_s,{data:c,dataType:"file",onRemoveChild:f})),q.createElement(Cf,null,q.createElement(vf,{"data-qa-anchor":"post-editor-save-button",disabled:p,onClick:g},q.createElement(FormattedMessage,{id:"save"}))))},If=memo(EB);var wf=i.div`
  display: flex;
  align-items: center;
`,Sf=i.div`
  margin-left: 8px;
`,z0=i.div`
  ${({theme:e})=>e.typography.title}

  word-break: break-all;

  &.clickable {
    &:hover {
      cursor: pointer;
    }
  }
`,Pf=i(ls).attrs({height:"8px",width:"8px"})`
  color: ${({theme:e})=>e.palette.base.shade1};
`,Tf=i(zl).attrs({height:"14px",width:"14px"})`
  margin-right: 4px;
`,O0=i.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
  color: ${({theme:e})=>e.palette.base.shade1};
  ${({theme:e})=>e.typography.captionBold};
`,kf=i.div`
  color: ${({theme:e})=>e.palette.base.shade1};
  ${({theme:e})=>e.typography.caption}

  &::before {
    content: '• ';
    margin-left: 4px;
  }
`,Ef=i.div`
  display: flex;
  align-items: center;

  ${({showTime:e})=>e&&z`
      & > ${O0} {
        &::after {
          content: '•';
          margin-left: 4px;
        }
      }
    `};
`,Nf=i.div`
  display: flex;
  align-items: center;

  > :not(:first-child) {
    margin-left: 0.25rem;
  }
`;var LB=({avatarFileUrl:e,postAuthorName:t,postTargetName:o,timeAgo:r,isModerator:n,isEdited:s,onClickCommunity:a,onClickUser:l,hidePostTarget:m,loading:c,isBanned:u})=>{let f=N("UIPostHeader");if(f)return f({avatarFileUrl:e,postAuthorName:t,postTargetName:o,timeAgo:r,isModerator:n,isEdited:s,onClickCommunity:a,onClickUser:l,hidePostTarget:m,loading:c,isBanned:u});let p=()=>q.createElement(Nf,{"data-qa-anchor":"post-header-post-names"},q.createElement(v6,{lines:3},q.createElement(z0,{"data-qa-anchor":"post-header-post-name",className:Ln({clickable:!!l}),onClick:l},t)),u&&q.createElement($t,null),o&&!m&&q.createElement(q.Fragment,null,q.createElement(Pf,null),q.createElement(z0,{"data-qa-anchor":"post-header-post-target-name",className:Ln({clickable:!!a}),onClick:a||void 0},o))),g=()=>q.createElement(Ef,{"data-qa-anchor":"post-header-additional-info",showTime:!!r},n&&q.createElement(O0,{"data-qa-anchor":"post-header-additional-info-moderator-badge"},q.createElement(Tf,null)," ",q.createElement(FormattedMessage,{id:"moderator"})),r&&q.createElement(tm,{"data-qa-anchor":"post-header-additional-info-time-ago",date:r.getTime()}),s&&q.createElement(kf,{"data-qa-anchor":"post-header-additional-info-edited-label"},q.createElement(FormattedMessage,{id:"post.edited"})));return q.createElement(wf,{"data-qa-anchor":"post-header"},q.createElement(J,{"data-qa-anchor":"post-header-avatar",avatar:e,backgroundImage:ce,loading:c,onClick:l}),q.createElement(Sf,{"data-qa-anchor":"post-header-post-info"},c?q.createElement(q.Fragment,null,q.createElement("div",null,q.createElement(de,{width:96,style:{fontSize:8}})),q.createElement(de,{width:189,style:{fontSize:8}})):q.createElement(q.Fragment,null,p(),g())))},Bf=LB;var BB=10;function zo({targetType:e,targetId:t,feedType:o,limit:r=BB}){let a=be({fetcher:PostRepository.getPosts,params:{targetType:e,targetId:t,feedType:o,limit:r},shouldCall:()=>!!t&&!!e}),{items:n}=a,s=I(a,["items"]);return d({posts:n},s)}var{COMMUNITY_MODERATOR:DB}=Ri;function Er(e){let r=be({fetcher:CommunityRepository.Membership.getMembers,params:{communityId:e,roles:[DB]},shouldCall:()=>!!e}),{items:t}=r,o=I(r,["items"]);return d({moderators:t},o)}function Us(e,t=5){let n=be({fetcher:CommunityRepository.Membership.getMembers,params:{communityId:e,limit:t,memberships:["member"]},shouldCall:()=>!!e}),{items:o}=n,r=I(n,["items"]);return d({members:o},r)}var _B=({post:e,childrenPosts:t=[],community:o,userId:r})=>{let{moderators:n}=Er(o==null?void 0:o.communityId),{members:s}=Us(o==null?void 0:o.communityId),{posts:a}=zo({targetType:"community",targetId:o==null?void 0:o.communityId,feedType:"reviewing"}),l=j(r),m=useMemo(()=>!t.find(h=>h.dataType==="liveStream"||h.dataType==="poll"),[t]),c=s.find(h=>h.userId===r),u=n.find(h=>h.userId===r),f=(e==null?void 0:e.postedUserId)===r,p=useMemo(()=>(o==null?void 0:o.postSetting)!=CommunityPostSettings.ANYONE_CAN_POST?a.find(h=>h.postId===(e==null?void 0:e.postId))!=null:!1,[o,a]),g=(l==null?void 0:l.roles.find(h=>h==="global-admin"))!=null,y=u!=null,v=c!=null;return o==null?{isPostUnderReview:!1,isModerator:!1,canEdit:(g||f)&&m,canReport:g||!f,canDelete:g||f,canReview:!1}:{isPostUnderReview:p,isModerator:y,canEdit:(g||y)&&m,canReview:g||y,canDelete:!p&&y||f&&v,canReport:p?!f:!f&&(y||v)}},vm=_B;var Df=({post:e,avatarFileUrl:t,loading:o,hidePostTarget:r})=>{let{onClickCommunity:n,onClickUser:s}=V(),{formatMessage:a}=useIntl(),l=j(e==null?void 0:e.postedUserId),m=Ze(e==null?void 0:e.targetId),{isModerator:c}=vm({community:m,post:e,userId:e==null?void 0:e.postedUserId}),u=(e==null?void 0:e.targetType)==="community",f=u?m==null?void 0:m.displayName:null,p=u?()=>e&&n(e==null?void 0:e.targetId):null,g=()=>e&&s(e.postedUserId);return {avatarFileUrl:t,postAuthorName:(l==null?void 0:l.displayName)||a({id:"anonymous"}),postTargetName:f,timeAgo:new Date(e==null?void 0:e.createdAt),isModerator:c||Ao(l==null?void 0:l.roles)||Xn(l==null?void 0:l.roles),isEdited:new Date(e==null?void 0:e.createdAt).getTime()<new Date(e==null?void 0:e.editedAt).getTime(),isBanned:l==null?void 0:l.isGlobalBanned,hidePostTarget:r,loading:o,onClickCommunity:p,onClickUser:g}};var VB=({postId:e,hidePostTarget:t,loading:o})=>{let r=Vt(e),n=j(r==null?void 0:r.postedUserId),s=_({fileId:n==null?void 0:n.avatarFileId,imageSize:"small"}),a=Df({post:r,avatarFileUrl:s,user:n,loading:o,hidePostTarget:t});return q.createElement(Bf,d({},a))};var zf=memo(VB);var ZB=i.div`
  overflow-wrap: break-word;
  color: ${({theme:e})=>e.palette.neutral.main};
  white-space: pre-wrap;
  ${({theme:e})=>e.typography.body}
`,WB=i($).attrs({variant:"secondary"})`
  color: ${({theme:e})=>e.palette.primary.main};
  padding: 4px;
  display: inline-block;
`,YB=({text:e,postMaxLines:t,mentionees:o})=>{let r=useMemo(()=>ta(e||"",Zi(o)),[o,e]),n=e?q.createElement(ZB,{"data-qa-anchor":"post-text-content"},q.createElement(v6.Atom,null,r.map(m=>{let c=`${e}-${m.start}-${m.end}`,u=e.substring(m.start,m.end);if(m.highlight){let f=o==null?void 0:o.find(p=>p.index===m.start);return f?q.createElement(ea,{key:c,mentionee:f},u):q.createElement("span",{key:c},u)}return q.createElement(mn,{key:c},u)}))):null,[s,a]=useState(!1),l=()=>a(!0);return n?s?n:q.createElement(v6,{lines:t,ellipsis:q.createElement(WB,{onClick:l},q.createElement(FormattedMessage,{id:"post.readMore"}))},n):null},xm=e=>{let t=N("UITextContent");return t?t(e):q.createElement(YB,d({},e))};var KB=({fileId:e})=>q.createElement(Re,{fileId:e}),_f=KB;var XB=({videoFileId:e})=>{let t=e.high||e.medium||e.low;return q.createElement(Tr,{fileId:t})},Uf=XB;var eF=({fileId:e})=>q.createElement(go,{fileId:e}),Hf=eF;var tF=i.div`
  margin-bottom: 0.75rem;

  > :not(:first-child) {
    margin-top: 0.75rem;
  }
`,oF=({streamId:e,mentionees:t=[]})=>{let o=Fs(e);if(o==null)return null;let r=t.map(a=>{var l=a,{index:n}=l,s=I(l,["index"]);var m;return d({index:n>((m=o==null?void 0:o.title)==null?void 0:m.length)?n-o.title.length-2:n},s)});return q.createElement(tF,null,q.createElement("div",null,o==null?void 0:o.title),q.createElement(xm,{text:o==null?void 0:o.description,mentionees:r}))},jf=oF;var rF=({data:e,dataType:t,postMaxLines:o,mentionees:r})=>!e||!["text","image","video","file","liveStream"].includes(t||"")?null:t==="text"?q.createElement(xm,T(d({},e),{postMaxLines:o,mentionees:r})):t==="image"?q.createElement(_f,T(d({},e),{postMaxLines:o,mentionees:r})):t==="video"?q.createElement(Uf,T(d({},e),{postMaxLines:o,mentionees:r})):t==="file"?q.createElement(Hf,T(d({},e),{postMaxLines:o,mentionees:r})):t==="liveStream"?q.createElement(jf,T(d({},e),{postMaxLines:o,mentionees:r})):null,Vf=rF;var $f=i(St)`
  margin-left: auto;
`,iF=o=>{var r=o,{className:e}=r,t=I(r,["className"]);return q.createElement("div",d({className:Ln("post",e)},t))},js=i(iF)`
  padding: 16px;
  padding-bottom: 8px;
  background: ${({theme:e})=>e.palette.system.background};
  border: 1px solid #edeef2;
  border-radius: 4px;
`,Gf=i.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`,qf=i.div`
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
`,Zf=()=>q.createElement(q.Fragment,null,q.createElement("div",null,q.createElement(de,{style:{fontSize:8,maxWidth:374}})),q.createElement("div",null,q.createElement(de,{style:{fontSize:8,maxWidth:448}})),q.createElement("div",{style:{paddingBottom:50}},q.createElement(de,{style:{fontSize:8,maxWidth:279}})));var lF=8,mF=3,dF="Post has been reviewed",cF=({childrenPosts:e=[],className:t,handleDeletePost:o,handleReportPost:r,handleUnreportPost:n,handleApprovePost:s,handleDeclinePost:a,handleClosePoll:l,isPollClosed:m,hidePostTarget:c,isFlaggedByMe:u,readonly:f,post:p,loading:g})=>{var Ae,Ve,Ee;let{formatMessage:y}=useIntl(),[v,h]=useState(!1),C=()=>h(!0),x=()=>h(!1);function M(Ie){if(Ie instanceof Error)if(Ie.message.includes(dF))It({title:q.createElement(FormattedMessage,{id:"post.error.cannotReview.title"}),content:q.createElement(FormattedMessage,{id:"post.error.cannotReview.description"})});else throw Ie}let S=p==null?void 0:p.targetId,b=Ze(S),{currentUserId:P}=H();Bo({postId:p==null?void 0:p.postId,level:SubscriptionLevels.POST});let[k,A]=useState(!1),[L,O]=useState(!1),{canEdit:Y,canReview:B,canDelete:E,canReport:G,isPostUnderReview:F}=vm({community:b,post:p,childrenPosts:e,userId:P||void 0}),ee=()=>w(void 0,null,function*(){yield r==null?void 0:r(),Z.success({content:q.createElement(FormattedMessage,{id:"report.reportSent"})});}),se=()=>w(void 0,null,function*(){yield n==null?void 0:n(),Z.success({content:q.createElement(FormattedMessage,{id:"report.unreportSent"})});}),ie=()=>w(void 0,null,function*(){try{A(!0),yield s==null?void 0:s(),Z.success({content:q.createElement(FormattedMessage,{id:"post.success.approved"})});}catch(Ie){M(Ie);}finally{A(!1);}}),D=()=>w(void 0,null,function*(){try{O(!0),yield a==null?void 0:a(),Z.success({content:q.createElement(FormattedMessage,{id:"post.success.declined"})});}catch(Ie){M(Ie);}finally{O(!1);}}),U=()=>me({title:y({id:"post.deletePost"}),content:y({id:F?"post.confirmPendingDelete":"post.confirmDelete"}),okText:y({id:"delete"}),onOk:o}),ne=e.find(Ie=>Ie.dataType==="poll"),ue=[Y?{name:y({id:"post.editPost"}),action:C}:null,E?{name:y({id:"post.deletePost"}),action:U}:null,G?{name:y(u?{id:"report.undoReport"}:{id:"report.doReport"}),action:u?se:ee}:null,ne&&!m?{name:y({id:"poll.close"}),action:l}:null].filter(ge),Me=e.length>0,Ce=Me?mF:lF,fe=e.find(Ie=>Ie.dataType==="liveStream");return q.createElement(js,{"data-qa-anchor":"post",className:t},q.createElement(Gf,null,q.createElement(zf,{postId:p==null?void 0:p.postId,hidePostTarget:c,loading:g}),!g&&q.createElement($f,{options:ue,"data-qa-anchor":"post-options-button"})),g?q.createElement(Zf,null):q.createElement(q.Fragment,null,q.createElement(Vf,{data:(Ae=fe==null?void 0:fe.data)!=null?Ae:p==null?void 0:p.data,dataType:(Ve=fe==null?void 0:fe.dataType)!=null?Ve:p==null?void 0:p.dataType,postMaxLines:Ce,mentionees:(Ee=p==null?void 0:p.metadata)==null?void 0:Ee.mentioned}),Me&&q.createElement(sf,{contents:e}),!F&&q.createElement(E0,{readonly:f,postId:p==null?void 0:p.postId}),F&&B&&q.createElement(qf,{"data-qa-anchor":"post-review"},q.createElement(oe,{"data-qa-anchor":"post-review-accept-button",disabled:k||L,onClick:ie},q.createElement(FormattedMessage,{id:"general.action.accept"})),q.createElement($,{"data-qa-anchor":"post-review-decline-button",disabled:k||L,onClick:D},q.createElement(FormattedMessage,{id:"general.action.decline"}))),v&&q.createElement(dt,{"data-qa-anchor":"post-editor-modal",title:y({id:"post.editPost"}),onCancel:x},q.createElement(If,{postId:p==null?void 0:p.postId,onSave:x}))))},Dt=q.memo(cF);var Wf=i.div`
  color: ${({theme:e})=>e.palette.base.shade3};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0.5rem;
  background: ${({theme:e})=>e.palette.system.background};
  color: ${({theme:e})=>e.palette.base.shade3};
  ${({theme:e})=>e.typography.body};
`,Yf=i.div`
  ${({theme:e})=>e.typography.title}
  margin-top: 8px;
`,Qf=i.div`
  ${({theme:e})=>e.typography.body}
`;var pF=({className:e,icon:t,title:o,description:r,children:n})=>q.createElement(Wf,{className:e},t,q.createElement(Yf,null,o),q.createElement(Qf,null,r),n),ir=pF;var uF=()=>q.createElement(js,null,q.createElement(ir,{title:q.createElement(FormattedMessage,{id:"post.unknownPost.title"}),icon:q.createElement(rl,null)},q.createElement(FormattedMessage,{id:"post.unknownPost.description"}))),Jf=uF;var bm={[PostContentType.FILE]:e=>q.createElement(Dt,d({},e)),[PostContentType.IMAGE]:e=>q.createElement(Dt,d({},e)),[PostContentType.LIVESTREAM]:e=>q.createElement(Dt,d({},e)),[PostContentType.POLL]:e=>q.createElement(Dt,d({},e)),[PostContentType.TEXT]:e=>q.createElement(Dt,d({},e)),[PostContentType.VIDEO]:e=>q.createElement(Dt,d({},e)),[PostContentType.CUSTOM]:e=>q.createElement(Dt,d({},e))},Rf=createContext(bm),e7=e=>{let t=useContext(Rf);return useMemo(()=>e==null?o=>null:t[e]||bm[e]||(o=>q.createElement(Jf,null)),[e])};function j0({children:e,config:t}){let o=useMemo(()=>t==null?bm:d(d({},bm),t),[t]);return q.createElement(Rf.Provider,{value:o},e)}var t7={socialCommunityCreationButtonVisible:!0},o7=createContext(t7),r7=()=>useContext(o7);function V0({children:e,config:t}){let o=useMemo(()=>d(d({},t7),t),[t]);return q.createElement(o7.Provider,{value:o},e)}var li={};var bF=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 320 512",fill:"currentColor"},e),q.createElement("path",{d:`M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34
      0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4
      52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4
      256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160
      303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34
      0-22.58L207.6 256z`})),i7=bF;var wF=({"data-qa-anchor":e="",size:t="",onOverlayClick:o=()=>{},onCancel:r,title:n,footer:s,children:a})=>{let l=useRef(null);return useEffect(()=>{var m;(m=l==null?void 0:l.current)==null||m.focus();},[l==null?void 0:l.current]),q.createElement("div",{"data-theme":"dark",className:li.overlay,onClick:o},q.createElement("div",{className:Ln(li.modalWindow,`${t==="small"?"smallModalWindow":""}`),"data-qa-anchor":e,ref:l,tabIndex:0},(n||r)&&q.createElement("div",{className:li.header},n,r&&q.createElement(i7,{className:li.closeIcon,onClick:r})),q.createElement("div",{className:Ln(li.content)},a),s&&q.createElement("div",{className:li.footer},s)))},s7=wF;var $s={};var TF=a=>{var l=a,{children:e,variant:t="primary",size:o="medium",icon:r,className:n}=l,s=I(l,["children","variant","size","icon","className"]);let m=Ln($s.button,$s[t],$s[o],n);return q.createElement("button",d({className:m},s),r&&q.createElement("span",{className:$s.icon},r),e)},Gs=TF;var pa={};var LF=({"data-qa-anchor":e="",className:t,title:o,content:r,okText:n="Ok",onOk:s,cancelText:a="Cancel",onCancel:l,type:m="confirm"})=>q.createElement(s7,{className:Ln(t,pa.modal),"data-qa-anchor":`confirm-modal-${e}`,title:o,footer:q.createElement("div",{className:pa.footer},m==="confirm"&&q.createElement(Gs,{className:pa.cancelButton,"data-qa-anchor":"confirm-modal-cancel-button",onClick:l},a),q.createElement(Gs,{className:pa.okButton,"data-qa-anchor":`confirm-modal-${e}-ok-button`,onClick:s},n)),onCancel:l},q.createElement("div",{className:pa.modalContent},r)),m7,d7=()=>{let[e,t]=useState(null);if(m7=n=>{t(n);},!e)return null;let o=()=>t(null),r=n=>()=>{o(),n&&n();};return q.createElement(LF,T(d({},e),{onCancel:r(e.onCancel),onOk:r(e.onOk)}))},c7=e=>m7(T(d({},e),{type:"confirm"}));var AF=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512"},e),q.createElement("path",{d:`M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284
      28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686
      16.971 0l299.813-299.813c4.686-4.686 4.686-12.284
      0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z`})),u7=AF;var BF=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 512 512",fill:"currentColor"},e),q.createElement("path",{d:`M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504
      119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200
      110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm42-104c0 23.159-18.841 42-42
      42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42zm-81.37-211.401l6.8 136c.319 6.387
      5.591 11.401 11.985 11.401h41.17c6.394 0 11.666-5.014
      11.985-11.401l6.8-136c.343-6.854-5.122-12.599-11.985-12.599h-54.77c-6.863 0-12.328
      5.745-11.985 12.599z`})),g7=BF;var FF=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 320 512",fill:"currentColor"},e),q.createElement("path",{d:`M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34
      0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4
      52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4
      256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160
      303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34
      0-22.58L207.6 256z`})),h7=FF;var fa={};var _F=3e3,UF=({className:e,content:t,icon:o})=>q.createElement("div",{"data-theme":"dark",className:Ln(fa.notificationContainer,e)},o," ",t),qs,C7=()=>{let[e,t]=useState([]),o=r=>t&&t(n=>n.filter(s=>s.id!==r));return qs=s=>{var a=s,{duration:r=_F}=a,n=I(a,["duration"]);let l=Date.now();t([d({id:l},n),...e]),setTimeout(()=>o(l),r);},q.createElement("div",{className:fa.notifications},e.map(r=>q.createElement(UF,T(d({},r),{key:r.id}))))},v7={success:e=>qs(T(d({},e),{icon:q.createElement(u7,{className:fa.icon})})),info:e=>qs(T(d({},e),{icon:q.createElement(g7,{className:fa.icon})})),error:e=>qs(T(d({},e),{icon:q.createElement(h7,{className:fa.icon})})),show:e=>qs(e)};var x7={"general.action.cancel":"Cancel","general.action.accept":"Accept","general.action.decline":"Decline","general.action.discard":"Discard","general.action.ok":"Ok","general.error.tryAgainLater":"Something went wrong. Please try again later.","general.connection.waiting":"Waiting for connection...",hello:"Hello World","plural.like":"{amount, plural, one {like} other {likes}}",comment:"Comment","plural.comment":"{amount, plural, one {comment} other {comments}}","plural.member":"{amount, plural, one {member} other {members}}",selectACategory:"Select a category",todaysTrendingTitle:"Today's Trending",loadMore:"Load More",categoryList:"Categories",recommendedList:"Recommended for you","exploreHeader.searchCommunityTitle":"Explore communities","exploreHeader.searchCommunityPlaceholder":"Search communities...","exploreHeader.createCommunityTitle":"or create your own!","exploreHeader.createCommunityButton":"Create community",backTitle:"Back",createCommunity:"Create Community",moderator:"Moderator","moderatorMenu.promoteToModerator":"Promote to moderator","moderatorMenu.dismissModerator":"Dismiss moderator","moderatorMenu.removeFromCommunity":"Remove from community","post.readMore":"...Read more","post.editPost":"Edit post","post.deletePost":"Delete post","post.confirmDelete":"This post will be permanently deleted. You\u2019ll no longer to see and find this post. Continue?","post.confirmPendingDelete":"This post will be permanently deleted from the pending list","post.edited":"Edited","post.like":"Like","post.liked":"Liked","post.unknownPost.description":"We couldn\u2019t recognize this post.","post.unknownPost.title":"Something went wrong","post.renderingError.description":"We couldn\u2019t render this post.","post.renderingError.title":"Something went wrong","post.community":"Community","post.myTimeline":"My Timeline","post.wasLive":"was live","post.success.approved":"Post approved","post.success.declined":"Post declined","post.success.submittedToReview":"Your post has been submitted to review by moderator","post.error.cannotReview.title":"Post is not available","post.error.cannotReview.description":"The post has been reviewed by another moderator","post.discard.title":"Discard post?","post.discard.content":"Do you want to discard your post?","collapsible.viewAll":"View all","collapsible.viewAllFiles":"View all files","collapsible.viewMoreComments":"View more comments","collapsible.viewMoreReplies":"View {count, plural, one {# reply} other {# replies}}","community.createSuccess":"Your community was successfully created","community.updateSuccess":"Your community was successfully updated","community.editProfile":"Edit profile","community.join":"Join","community.communitySettings":"Community Settings","community.returnTo":"Return to {communityName}","community.leaveCommunityTitle":"Leave community?","community.leaveCommunityBody":"You won\u2019t no longer be able to post and interact in this community after leaving.","community.leaveCommunityBodyLastMember":"As you\u2019re the last moderator and member, choose close community to leave.","community.leaveCommunityBodyOnlyModerator":"You\u2019re the only moderator in this group. Nominate other members before leaving community.","community.leaveCommunityButtonText":"Leave","community.leaveCommunityButtonOK":"OK","community.cannotInteract":"Join community to interact with all posts","community.removeUserFromCommunityTitle":"Remove user from community","community.removeUserFromCommunityBody":"This user won't no longer be able to search, post. Continue?","community.name":"Community name","community.about":"About","community.category":"Category","community.onlyadmincanpost":">Only admin can post","community.onlyadmins":"Choose to allow Only Admins to create posts in this community.","community.categorypermission":"Community permission","community.addmembers":"Add members","community.posts":"posts","community.members":"members","community.settings":"Settings","community.leaveCommunity":"Leave Community","CommunityMembers.members":"Members","CommunityMembers.moderators":"Moderators","EmptyFeed.TargetType.globalFeed":"This feed is empty","EmptyFeed.TargetType.communityFeed":"This community's feed is empty","EmptyFeed.TargetType.userFeed":"This user's feed is empty","EmptyFeed.TargetType.myFeed":"Your feed is empty. Start your first post","EmptyFeed.exploreCommunity":"Explore Community","UserFeed.tabs.timeline":"Timeline","community.exploreCommunities":"Explore Community","community.permissions.postReview":"Post review","community.permissions.storyComments":"Story comments","community.permissions.approvePosts":"Approve member posts","community.permissions.allowStoryComments":"Allow comments on community stories","community.permissions.approvePosts.prompt":"Posts by members have to be reviewed and approved by community moderator.","community.permissions.storyComments.prompt":"Turn on to receive comments on stories in this community.","community.permissions.error.needApprovalOnPostCreation.turnOn":"Unable to turn on post review","community.permissions.error.needApprovalOnPostCreation.turnOff":"Unable to turn off post review","community.permissions.error.storyComments.turnOn":"Unable to turn on post review","community.permissions.error.storyComments.turnOff":"Unable to turn off post review","community.review.declinePendingPosts":"Decline pending post will permanently delete the selected post from community.","community.pendingPostsBanner.title":"Pending posts","community.pendingPostsBanner.pendingForReview":"Your posts are pending for review","community.pendingPostsBanner.needApproval":"{formattedAmount} {amount, plural, one {post needs} other {posts need}} approval","communityCreatedModal.title":"Customize your community","communityCreatedModal.message":"You\u2019ve successfully created a community! Now let's manage permissions that work best for you","communityCreatedModal.goToSettings":"Community settings","communityCreatedModal.skip":"Skip for now",post:"Post","upload.attachmentLimit":"You reached the maximum attachment of {maxFiles}","upload.fileSizeLimit":"One of the selected file is larger than 1GB. Please select a new file.","user.editProfile":"Edit profile","user.message":"Message","follow.placeholder.noFollowings":"No followings found","follow.placeholder.noFollowers":"No followers found","ProfileSettings.editProfile":"Edit profile","ProfileSettings.returnTo":"Return to ","SideSectionMyCommunity.myCommunity":"My Community","file.reUpload":"Click to re-upload the file","UserProfileForm.displayname":"Display name","UserProfileForm.about":"About","UserProfileForm.title":"General","UserProfileForm.namePlaceholder":"Enter user display name","UserProfileForm.requiredDisplayName":"Display name is required","UserProfileForm.requiredDescription":"Enter something about yourself","UserSelector.placeholder":"Select user...","report.reportUser":"Report user","report.unreportUser":"Unreport user","report.reportComment":"Report comment","report.unreportComment":"Unreport comment","report.reportSent":"Report sent","report.unreportSent":"Unreport sent","comment.deleted":"This comment has been deleted","comment.delete":"Delete comment","comment.edit":"Edit comment","comment.deleteConfirmContent":"This comment will be permanently deleted. Continue?","comment.deleteConfirmCancelText":"Cancel","comment.deleteConfirmOkText":"Delete","dropdown.first":"First","dropdown.second":"Second","layout.logout":"Log Out","layout.username":"Jackies","chat.details.chatDetailes":"Chat Detail","chat.details.communityName":"Community Name","message.flag":"flag","message.unflag":"Unflag","message.edit":"Edit","message.delete":"Delete","message.deleted":"deleted","message.unsupportedFormat":"Unsupported message format","message.saveOptionsError":"There was an error processing your request","MessageComposeBar.placeholder":"Type your message...","RecentChat.chats":"Chats","AddMemberModal.addMembers":"Add members","AddMemberModal.membersValidationError":"Please select at least one member",add:"Add",save:"Save",close:"Close",reply:"Reply",delete:"Delete",create:"Create",cancel:"Cancel",loading:"Loading...","loading.chat":"Loading chat...",anonymous:"Anonymous","comment.edited":"Edited","comment.readmore":"...Read more","communities.nocommunityfound":"No community found","profile.setting":"Profile Settings","sidesectioncommunity.newfeed":"NewsFeed","sidesectioncommunity.explore":"Explore","sidesectioncommunity.community":"Community","communityFeed.join":"Join community to interact with all posts","communityFeed.members":"Members","communityFeed.moderators":"Moderators","files.all":"View all files","sidebar.community":"Community","CategoryCommunitiesList.emptyTitle":"It's empty here...","CategoryCommunitiesList.emptyDescription":"No community found in this category","CommentComposeBar.addComment":"Add comment","CommentComposeBar.replayTo":"Reply to ","CommentComposeBar.replayToUser":"Replying to {displayName}","CommentComposeBar.saySomething":"Say something nice","CommentComposeBar.unableToPost":"Unable to post","CommentComposeBar.overCharacter":"You have reached maximum 50,000 characters in a post.","CommentComposeBar.done":"Done","CommentComposeBar.unableToMention":"Unable to mention","CommentComposeBar.overMentionees":"You have reached maximum 30 mentioned users in a post.","CommentComposeBar.okText":"OK","CommunityCreationModal.title":"Leave without finishing?","CommunityCreationModal.content":"Your progress won\u2019t be saved. Are you sure to leave this page now?","CommunityCreationModal.cancelText":"Continue editing","CommunityCreationModal.okText":"Leave","PostAsCommunity.title":"Post as community","PostAsCommunity.caption":"Enable this will publish the post on behalf of community account","AddMemberAction.title":"Add members","AddMemberAction.description":"Add your friends to this community to participate in group conversations","CloseCommunityAction.closeConfirm.title":"Close community?","CloseCommunityAction.closeConfirm.description":"All members will be removed from the community. All posts, messages, reactions and media shared in community will be deleted. This cannot be undone.","CloseCommunityAction.title":"Close community","CloseCommunityAction.description":"Closing this community will remove the community page and all its content and comments. This cannot be undone.","report.doReport":"Report","report.undoReport":"Undo Report","comment.deleteBody":"This comment will be permanently removed.","reply.delete":"Delete reply","reply.deleteBody":"This reply will be permanently deleted. Continue?","reply.edit":"Edit reply","reply.deleted":"This reply has been deleted","tabs.editProfile":"Edit profile","tabs.timeline":"Timeline","tabs.followers":"Followers","tabs.followings":"Followings","tabs.pending":"Pending","tabs.members":"Members","tabs.moderators":"Moderators","tabs.pendingPosts":"Pending {amount, select, 0 {} other { ({formattedAmount})}}","tabs.permissions":"Permissions","tabs.gallery":"Gallery","tabs.images":"Photos","tabs.videos":"Videos","tabs.liveStreams":"Livestreams","feed.emptyFeed":"This feed is empty","feed.emptyCommunityPublicFeed":"This community's feed is empty","feed.emptyCommunityReviewingFeed":"No pending posts","feed.emptyJoinedCommunityPublicFeed":"Your feed is empty. Start you first post","feed.emptyUserFeed":"No posts yet","feed.emptyMyFeed":"Your feed is empty. Start your first post","chat.groupSetting":"Group settings","chat.message.deleted":"Message was deleted","chat.message.unsupported":"Unsupported message type","chat.chats":"Chats","chat.details.header":"Chat Details","chat.details.chatName":"Chat Name","chat.leaveChat":"Leave chat","chat.leaveChat.confirm.title":"Leave chat","chat.leaveChat.confirm.content":"Are you sure you want to leave the chat?","chat.leaveChat.confirm.okButton":"Leave","chat.leaveChat.success":"You successfully left chat","chat.leaveChat.error":"Attempt to leave a chat has failed","chat.members.return":"Return to controls","chat.members.count":"{count} members","chat.create.modalTitle":"Create new chat","chat.loading.error":"Couldn't load chat","userSelector.placeholder":"Enter name or email addresses","userSelector.emptyState.title":"It's empty here...","userSelector.emptyState.description":"No contact found here","groupChat.createPopup.fieldName":"Group name","groupChat.createPopup.placeholder":"Please input group name","general.cancel.capital":"Cancel","general.create.capital":"Create","general.done.capital":"Done","chat.member.addMore":"Add or Remove user","video.notReady":"The video is being processed. Please try again later.","liveStream.idle":"This stream is currently unavailable","liveStream.ended.caption":"This liveStream has ended.","liveStream.ended.message":"Playback will be available for you to watch shortly.","user.follow":"Follow","user.unfollow":"Unfollow","user.unfollow.confirm.title":"Unfollow {displayName}","user.unfollow.confirm.body":"You\u2019ll have to send a request again to follow {displayName}. Continue?","user.cancel_follow":"Cancel request","placeholder.noResults":"No results found","request.accept":"Accept","request.decline":"Decline","follower.title.removeUser":"Remove {displayName} from followers?","follower.body.removeUser":"We will not notify {displayName} that they've been removed from your followers","follower.menuItem.removeUser":"Remove user","follower.menuItem.unfollow":"Unfollow","buttonText.cancel":"Cancel","buttonText.remove":"Remove","follow.pendingNotification.title":"Pending requests","follow.pendingNotification.body":"Your requests are waiting for review","notification.done":"Done","counter.followings":"following","counter.followers":"followers","buttonText.unfollow":"Unfollow","privateFeed.title":"This account is private","privateFeed.body":"Follow this user to see all posts","navigationBlocker.title":"Unsaved changes","navigationBlocker.content":"Your changes won`t be saved. Are you sure you want to leave this page now?","user.unfollow.confirm.title.thisUser":"Unfollow this user","mediaGallery.images.empty":"No photos yet","mediaGallery.liveStreams.empty":"No liveStreams yet","mediaGallery.videos.empty":"No videos yet","user.unfollow.confirm.body.thisUser":"You\u2019ll have to send a request again to follow this user. Continue?","navigationBlocker.okText":"Leave","options_composer.button.add":"Add Option","options_composer.title":"Create at least 2 options","poll_modal.answer_type.title":"Selection type","poll_modal.answer_type.body":"Choose to vote with one or multiple options","poll_modal.closed_in.title":"Schedule poll (Optional)","poll_modal.closed_in.body":"Poll will be automatically closed at the end of chosen time frame (UTC)","select.answerType.item":"{answerType} selection","poll_composer.question.label":"Poll options","poll_composer.question.placeholder":"What\u2019s your poll question?","poll_composer.poll_options.label":"Options","poll_modal.title":"Create poll","poll.votes":"{voteCount} votes","poll.vote.closedIn":"Poll ends in {closedIn} days","poll.vote.finalResults":"Final results","poll.vote.submit":"Submit vote","poll.error.deletedOrClosed":"This poll has been closed or deleted.","poll.close":"Close poll","postCreator.unableToPost":"Unable to post","postCreator.overCharacter":"You have reached maximum 50,000 characters in a post.","postCreator.done":"Done","postCreator.unableToMention":"Unable to mention","postCreator.overMentionees":"You have reached maximum 30 mentioned users in a post.","postCreator.okText":"OK","pollComposer.unableToMention":"Unable to mention","pollComposer.overMentionees":"You have reached maximum 30 mentioned users in a post.","pollComposer.okText":"OK","storyCreation.hyperlink.bottomSheet.cancel":"Cancel","storyCreation.hyperlink.bottomSheet.title":"Add link","storyCreation.hyperlink.bottomSheet.submit":"Done","storyCreation.hyperlink.form.urlLabel":"URL","storyCreation.hyperlink.form.urlPlaceholder":"https://example.com","storyCreation.hyperlink.form.linkTextLabel":"Customize link text","storyCreation.hyperlink.form.linkTextPlaceholder":"Name your link","storyCreation.hyperlink.form.linkTextDescription":"This text will show on the link instead of URL.","storyCreation.hyperlink.validation.invalidUrl":"Please enter a valid URL.","storyCreation.hyperlink.form.removeButton":"Remove link","storyCreation.hyperlink.removeConfirm.title":"Remove link","storyCreation.hyperlink.removeConfirm.content":"This link will be removed from story.","storyCreation.hyperlink.removeConfirm.cancel":"Cancel","storyCreation.hyperlink.removeConfirm.confirm":"Remove","storyCreation.hyperlink.validation.error.whitelisted":"Please enter a whitelisted URL.","storyCreation.hyperlink.validation.error.blocked":"Your text contains a blocklisted word.","storyViewer.actions.deleteStory":"Delete story","storyViewer.action.confirmModal.title":"Delete this story?","storyViewer.action.confirmModal.content":"This story will be permanently deleted. You\u2019ll no longer to see and find this story.","storyViewer.notification.deleted":"Story deleted","storyViewer.notification.success":"Successfully shared story","storyViewer.notification.error":"Failed to share story","storyViewer.footer.failed":"Failed to upload","storyViewer.footer.uploading":"Uploading...","storyViewer.commentSheet.title":"Comments","storyViewer.commentSheet.empty":"No comments yet","storyViewer.commentSheet.disabled":"Comments are disabled for this story","storyViewer.commentSheet.replyingTo":"Replying to","storyViewer.toast.like.disabled":"Join community to interact with all stories","storyViewer.commentComposeBar.submit":"Post","storyDraft.button.shareStory":"Share story","select.chatType.item":"{answerType} type","chatComposer.label.channelId":"Channel ID","chatComposer.label.displayName":"Display Name","chatComposer.label.type":"Channel Type","chatComposer.addUsers":"Add users","chat_modal.title":"Create chat","chat_composer.placeholder.displayName":"Enter display name here","chat_composer.placeholder.channelId":"Enter channel ID here","editChatMembersModal.title":"Add/Edit chat members","editChatMembersModal.confirm.title":"Leave without finishing?","editChatMembersModal.confirm.content":"Your progress won\u2019t be saved. Are you sure to leave this page now?","editChatMembersModal.confirm.cancelText":"Continue editing","editChatMembersModal.confirm.okText":"Leave","notification.error.blockedWord":"Amity SDK (400308): Text contain blocked word","livechat.deleted.message":"This message was deleted","livechat.messageBubble.reply.button":"Reply","livechat.messageBubble.copy.button":"Copy","livechat.messageBubble.delete.button":"Delete","livechat.messageBubble.mention.button":"Mention","livechat.messageBubble.report.button":"Report","livechat.modal.delete.message.title":"Delete this message?","livechat.modal.delete.message.content":"This message will also be removed from your friend\u2019s devices.","livechat.mention.all":"All","livechat.mention.all.description":"Notify everyone","livechat.notification.copy.message":"Message copied","livechat.composebar.placeholder":"Write a message"};var Mm={en:x7};var b7="en",$F=({locale:e,children:t})=>{let o=Mm[e]?Mm[e]:Mm[b7];return q.createElement(IntlProvider,{defaultLocale:b7,locale:e,messages:o},t)},M7=$F;var GF={palette:{alert:"#FA4D30",base:"#292B32",primary:"#1054DE",secondary:"#FFD400",tertiary:"#FF305A",neutral:"#17181C",highlight:"#1054DE",system:{borders:"#ebecef",background:"#fff"}},typography:{global:{fontFamily:"Inter, -apple-system, BlinkMacSystemFont, Arial, sans-serif",fontStyle:"normal"},headline:{fontWeight:600,fontSize:"20px"},title:{fontWeight:600,fontSize:"16px"},subTitle:{fontWight:400,fontSize:"13px"},body:{fontWeight:"normal",fontSize:"14px"},bodyBold:{fontWeight:600,fontSize:"14px"},caption:{fontWeight:"normal",fontSize:"12px"},captionBold:{fontWeight:600,fontSize:"12px"}}},I7=GF;var P7=e=>e.toFixed(1),w7=e=>{let t=Math.min(e*100,100);return P7(t)};function qF(e){return e.alpha!==void 0}var T7=e=>{let{hue:t,saturation:o,lightness:r}=e,n=[`${P7(t)}`,`${w7(o)}%`,`${w7(r)}%`];return qF(e)?`hsla(${[...n,e.alpha].filter(ge).join(",")})`:`hsl(${n.filter(ge).join(",")})`},ZF=e=>{let t=parseToHsl(e);return T7(t)},WF=(e,t)=>{let o=parseToHsl(t),{lightness:r}=o,n=T(d({},o),{lightness:Math.min(1,r+e)});return T7(n)},YF=[.25,.4,.5,.75],k7=e=>{let s=e,{system:t}=s,o=I(s,["system"]),r=Object.keys(o).reduce((a,l)=>(a[l]={main:ZF(o[l])},a),d({},o)),n=Object.keys(r).reduce((a,l)=>{let m=o[l],c=YF.reduce((f,p,g)=>{let y=`shade${g+1}`;return f[y]=WF(p,m),f},{}),u=r[l];return u&&typeof u=="object"?a[l]=d(d({},c),u):a[l]=T(d({},c),{main:u}),a},d({},r));return T(d({},n),{system:t})};var QF=["fontFamily","fontStyle","fontWeight","fontSize"],KF=e=>Object.keys(e).reduce((o,r)=>{let n=e[r];return r&&n&&QF.includes(r)&&(o[r]=n),o},{}),E7=e=>Object.keys(e).reduce((o,r)=>(o[r]=KF(d(d({},e.global),e[r])),o),{});var N7={colors:{primary:{default:"#1054DE",shade1:"#4A82F2",shade2:"#A0BDF8",shade3:"#D9E5FC",shade4:"#FFFFFF"},secondary:{default:"#292B32",shade1:"#636878",shade2:"#898E9E",shade3:"#A5A9B5",shade4:"#EBECEF"},base:{default:"#292B32",shade1:"#636878",shade2:"#898E9E",shade3:"#A5A9B5",shade4:"#EBECEF"},baseInverse:{default:"#FFFFFF"},alert:{default:"#FA4D30"},highlight:"#1054DE",messageBubble:{default:"#1054DE",inverse:"#FFFFFF"},storyIndicator:{default:"#EBECEF",active:["#339AF9","#78FA58"]},hyperlink:{default:"#FFFFFFCC"},actionButton:{default:"#00000080"}},typography:{heading:{fontWeight:600,fontSize:"1.25rem",lineHeight:"1.5rem"},title:{fontWeight:600,fontSize:"1rem",lineHeight:"1.25rem"},subTitle:{fontWeight:400,fontSize:"0.8125rem",lineHeight:"1rem"},body:{fontWeight:"normal",fontSize:"0.875rem",lineHeight:"1.25rem"},bodyBold:{fontWeight:600,fontSize:"0.875rem",lineHeight:"1.25rem"},caption:{fontWeight:"normal",fontSize:"0.75rem",lineHeight:"1rem"},captionBold:{fontWeight:600,fontSize:"0.75rem",lineHeight:"1rem"}}};var XF=(e={})=>{let t=JF(I7,e),o=k7(t.palette),r=E7(t.typography);return T(d({},t),{palette:o,typography:r,v4:N7})},L7=XF;var A7=createContext({config:null,parseConfig:()=>{},isExcluded:()=>!1,getConfig:()=>({})}),ve=()=>{let e=useContext(A7);if(!e)throw new Error("useCustomization must be used within a CustomizationProvider");return e},B7=({children:e,initialConfig:t})=>{let[o,r]=useState(null);useEffect(()=>{n(t)?s(t):console.error("Invalid configuration provided to CustomizationProvider");},[t]);let n=c=>!(!(c!=null&&c.preferred_theme)||!(c!=null&&c.theme)||!(c!=null&&c.excludes)||!(c!=null&&c.customizations)),s=c=>{r(c);},m={config:o,parseConfig:s,isExcluded:c=>{var u;return o?!!((u=o.excludes)!=null&&u.some(f=>new RegExp(`^${f.replace(/\*/g,".*")}$`).test(c))):!1},getConfig:c=>o!=null&&o.customizations?(o==null?void 0:o.customizations[c])||{}:{}};return q.createElement(A7.Provider,{value:m},e)};var dD=[.25,.4,.5,.75],ut=(e,t)=>{t&&document.documentElement.style.setProperty(e,t);},z7=(e,t=!1)=>{let o=parseToHsl(e);return dD.map(n=>t?darken(n,hslToColorString(o)):lighten(n,hslToColorString(o)))},cD=createContext({currentTheme:"light",toggleTheme:()=>{}}),pD={preferred_theme:"default",theme:{light:{primary_color:"#1054DE",secondary_color:"#292B32",base_color:"#292b32",base_shade1_color:"#636878",base_shade2_color:"#898e9e",base_shade3_color:"#a5a9b5",base_shade4_color:"#ebecef",alert_color:"#FA4D30",background_color:"#FFFFFF"},dark:{primary_color:"#1054DE",secondary_color:"#292B32",base_color:"#ebecef",base_shade1_color:"#a5a9b5",base_shade2_color:"#6e7487",base_shade3_color:"#40434e",base_shade4_color:"#292b32",alert_color:"#FA4D30",background_color:"#191919"}},excludes:[],customizations:{"select_target_page/*/*":{theme:{},title:"Share to"},"select_target_page/*/back_button":{back_icon:"back.png"},"camera_page/*/*":{resolution:"720p"},"camera_page/*/close_button":{close_icon:"close.png"},"create_story_page/*/*":{},"create_story_page/*/back_button":{back_icon:"back.png",background_color:"#1234DB"},"create_story_page/*/aspect_ratio_button":{aspect_ratio_icon:"aspect_ratio.png",background_color:"1234DB"},"create_story_page/*/story_hyperlink_button":{hyperlink_button_icon:"hyperlink_button.png",background_color:"#1234DB"},"create_story_page/*/hyper_link":{hyper_link_icon:"hyper_link.png",background_color:"#1234DB"},"create_story_page/*/share_story_button":{share_icon:"share_story_button.png",background_color:"#1234DB",hide_avatar:!1},"story_page/*/*":{},"story_page/*/progress_bar":{progress_color:"#UD1234",background_color:"#AB1234"},"story_page/*/overflow_menu":{overflow_menu_icon:"threeDot.png"},"story_page/*/close_button":{close_icon:"close.png"},"story_page/*/story_impression_button":{impression_icon:"impressionIcon.png"},"story_page/*/story_comment_button":{comment_icon:"comment.png",background_color:"#2b2b2b"},"story_page/*/story_reaction_button":{reaction_icon:"like.png",background_color:"#2b2b2b"},"story_page/*/create_new_story_button":{create_new_story_icon:"plus.png",background_color:"#ffffff"},"story_page/*/speaker_button":{mute_icon:"mute.png",unmute_icon:"unmute.png",background_color:"#1243EE"},"*/edit_comment_component/*":{theme:{}},"*/edit_comment_component/cancel_button":{cancel_icon:"",cancel_button_text:"cancel",background_color:"#1243EE"},"*/edit_comment_component/save_button":{save_icon:"",save_button_text:"Save",background_color:"#1243EE"},"*/hyper_link_config_component/*":{theme:{}},"*/hyper_link_config_component/done_button":{done_icon:"",done_button_text:"Done",background_color:"#1243EE"},"*/hyper_link_config_component/cancel_button":{cancel_icon:"",cancel_button_text:"Cancel"},"*/comment_tray_component/*":{theme:{}},"*/story_tab_component/*":{},"*/story_tab_component/story_ring":{progress_color:["#339AF9","#78FA58"],background_color:"#AB1234"},"*/story_tab_component/create_new_story_button":{create_new_story_icon:"plus.png",background_color:"#1243EE"},"*/*/close_button":{close_icon:"close.png"}}},O7=({children:e,initialConfig:t})=>{let o=t||pD,[r,n]=useState("light");useEffect(()=>{var m,c,u,f,p,g,y,v;let a=z7(o.light.primary_color),l=z7(o.light.secondary_color);ut("--asc-color-primary-default",o.light.primary_color),ut("--asc-color-primary-shade1",a[0]),ut("--asc-color-primary-shade2",a[1]),ut("--asc-color-primary-shade3",a[2]),ut("--asc-color-primary-shade4",a[3]),ut("--asc-color-secondary-default",o.light.secondary_color),ut("--asc-color-secondary-shade1",l[0]),ut("--asc-color-secondary-shade2",l[1]),ut("--asc-color-secondary-shade3",l[2]),ut("--asc-color-secondary-shade4",l[3]),ut("--asc-color-base-default",(m=o.light)==null?void 0:m.base_color),ut("--asc-color-base-shade1",(c=o.light)==null?void 0:c.base_shade1_color),ut("--asc-color-base-shade2",(u=o.light)==null?void 0:u.base_shade2_color),ut("--asc-color-base-shade3",(f=o.light)==null?void 0:f.base_shade3_color),ut("--asc-color-base-shade4",(p=o.light)==null?void 0:p.base_shade4_color),ut("--asc-color-alert",(g=o.light)==null?void 0:g.alert_color),ut("--asc-color-background",(y=o.light)==null?void 0:y.background_color),ut("--asc-color-primary-dark",(v=o.dark)==null?void 0:v.primary_color);},[r,o]),useEffect(()=>{if(o.preferred_theme==="default"){let a=window.matchMedia("(prefers-color-scheme: dark)"),l=m=>{n(m.matches?"dark":"light");};return a.addEventListener("change",l),()=>a.removeEventListener("change",l)}},[o.preferred_theme]);let s=()=>{n(a=>a==="light"?"dark":"light");};return q.createElement(cD.Provider,{value:{currentTheme:r,toggleTheme:s}},e)};var U7=q.createContext(void 0),H7=({children:e,pageBehavior:t={}})=>{let{onBack:o}=V(),r={onCloseAction:()=>{o();},onClickHyperLink:()=>{}},n=useMemo(()=>({navigationBehavior:d(d({},r),t)}),[]);return q.createElement(U7.Provider,{value:n},e)},j7=()=>{let e=useContext(U7);if(!e)throw new Error("usePageBehavior must be used within a PageBehaviorProvider");return e};var V7=i.div`
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
`;var Pt=class Pt{constructor(){this.client=null;this.isConnected=!1;this.stateChangeHandler=null;this.disconnectedHandler=null;}static setup(t){if(!Pt.instance){Pt.instance=new Pt;let o=Client.createClient(t.apiKey,t.apiRegion,t!=null&&t.apiEndpoint?{apiEndpoint:t.apiEndpoint}:{});Pt.setClient(o);}}static registerDevice(t,o,r,n,s,a,l){return w(this,null,function*(){if(!Pt.instance)throw new Error("AmityUIKitManager must be set up first using the setup method.");Pt.instance.onConnectionStatusChange=n,Pt.instance.onConnected=s,Pt.instance.onDisconnected=a,yield Pt.instance.connectAndLogin(t,o,r,l);})}static setClient(t){if(Pt.instance)Pt.instance.client=t,Pt.instance.isConnected=!0;else throw new Error("AmityUIKitManager must be set up first using the setup method.")}connectAndLogin(t,o,r,n){return w(this,null,function*(){yield Client.login({userId:t,displayName:o,authToken:n},{sessionWillRenewAccessToken:r.sessionWillRenewAccessToken.bind(r)}),this.stateChangeHandler=Client.onSessionStateChange(s=>{var a;(a=this.onConnectionStatusChange)==null||a.call(this,s);}),this.disconnectedHandler=Client.onClientDisconnected(()=>{this.onDisconnected&&this.onDisconnected();}),this.onConnected&&this.onConnected();})}disconnect(){var t,o;(t=this.stateChangeHandler)==null||t.call(this),(o=this.disconnectedHandler)==null||o.call(this),this.client=null,this.isConnected=!1;}static getClient(){var t;return ((t=Pt.instance)==null?void 0:t.client)||null}isClientConnected(){return this.isConnected}};Pt.instance=null;var $0=Pt,Zs=$0;var xD=({apiKey:e,apiRegion:t,apiEndpoint:o,authToken:r,userId:n,displayName:s,postRendererConfig:a,theme:l={},children:m,socialCommunityCreationButtonVisible:c,pageBehavior:u,onConnectionStatusChange:f,onDisconnected:p,configs:g})=>{let y=new QueryClient,[v,h]=useState(null),C=j(n),x=useMemo(()=>({client:v,currentUserId:n||void 0,userRoles:(C==null?void 0:C.roles)||[]}),[v,n,C==null?void 0:C.roles]);return useEffect(()=>{w(void 0,null,function*(){try{Zs.setup({apiKey:e,apiRegion:t,apiEndpoint:o}),yield Zs.registerDevice(n,s||n,{sessionWillRenewAccessToken:b=>{r?b.renewWithAuthToken(r):b.renew();}},f,p,void 0,r);let S=Zs.getClient();h(S);}catch(S){console.error("Error setting up AmityUIKitManager:",S);}});},[n,s,r,f,p]),v?q.createElement(QueryClientProvider,{client:y},q.createElement(M7,{locale:"en"},q.createElement(B7,{initialConfig:g},q.createElement(K3,{theme:L7(l)},q.createElement(O7,{initialConfig:g==null?void 0:g.theme},q.createElement(V7,null,q.createElement(_1.Provider,{value:x},q.createElement(Ld,null,q.createElement(V0,{config:{socialCommunityCreationButtonVisible:c||!0}},q.createElement(j0,{config:a},q.createElement(c0,null,q.createElement(H7,{pageBehavior:u},m)))),q.createElement(C7,null),q.createElement(d7,null))))))))):null},bD=xD;var wD=()=>{let[e,t]=useState(null);return useEffect(()=>{e&&(Z.error({content:e}),t(null));},[e]),[t]},$7=wD;var PD=1073741824,TD=1,G0=i.label`
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
`,kD=i.input.attrs({type:"file"})`
  &&& {
    display: none;
  }
`,ED=({className:e="","data-qa-anchor":t="",mimeType:o,multiple:r,disabled:n,onChange:s,onMaxFilesLimit:a,onFileSizeLimit:l,fileLimitRemaining:m=0,children:c})=>{let[u]=useState(`_${(Date.now()*Math.random()).toString(36)}`),[f,p]=useState(!1),g=useCallback(b=>b.slice(0,r?m:TD),[m,r]),y=b=>b.some(P=>P.size>PD),v=useCallback(b=>(m||0)<b.length,[m]),h=useCallback(b=>{b.preventDefault(),b.stopPropagation(),!n&&(b.dataTransfer.setData(o,u),p(!0));},[n,o,u]),C=useCallback(b=>{b.preventDefault(),b.stopPropagation(),!n&&p(!1);},[n]),x=useCallback(b=>{if(b.preventDefault(),b.stopPropagation(),n)return;let P=b.target.files?[...b.target.files]:[],k=y(P),A=v(P),L=g(P);k?l==null||l():L.length&&(s==null||s(L)),A&&(a==null||a());},[v,n,g,s,l,a]),M=useCallback(b=>{if(b.preventDefault(),b.stopPropagation(),n)return;let P=(o||"").split(",").map(L=>L.replace("*",".*")).map(L=>new RegExp(L)),k=Array.from(b.dataTransfer.files).filter(L=>P.some(O=>O.test(L.type))),A=g(k);A.length&&(s==null||s(A)),p(!1);},[n,g,o,s]),S=b=>{};return q.createElement(G0,{"data-qa-anchor":`${t}`,id:u,className:Ln(e,{hover:f,disabled:n}),onDragEnter:h,onDragOver:h,onDragLeave:C,onDrop:M},q.createElement(kD,{accept:o,multiple:r,disabled:n,onChange:x,onClick:S}),c)},wm=ED;var Z7=i.div`
  border-radius: 4px;
  border: 1px solid ${({theme:e})=>e.palette.base.shade4};
`,zt=i.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;

  ${({hover:e,theme:t})=>e&&`background: ${t.palette.base.shade4};`}
  ${({active:e,theme:t})=>e&&`color: ${t.palette.primary.shade1};`}

  &:hover {
    ${({theme:e})=>`background: ${e.palette.base.shade4};`}
  }
`;var ar=Z7;var W7=i.button.attrs({role:"button"})`
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
`,Y7=i.div`
  word-break: break-word;
  > * {
    margin: 0 3px;
  }
`;var AD=({value:e})=>q.createElement("div",null,e),BD=r=>{var n=r,{placeholder:e,selected:t}=n,o=I(n,["placeholder","selected"]);return q.createElement(W7,d({},o),t&&t.length?q.createElement(Y7,null,t.map(({name:s,value:a})=>q.createElement("span",{key:a},s))):q.createElement("div",null,e),q.createElement(po,{height:14,width:14}))},FD=({value:e=[],onSelect:t=()=>{},options:o=[],multiple:r,disabled:n,parentContainer:s=null,renderItem:a=AD,renderTrigger:l=BD,isOpen:m,handleClose:c,placeholder:u="Select...",className:f="","data-qa-anchor":p=""})=>{let[g,y]=useState(m),[v,h]=useState(e),C=()=>y(!g),x=()=>c?c():y(!1),M=(P,k)=>{h(A=>{let L=A.filter(O=>O.value!==P.value);return k&&k(L.map(O=>O.value)),L});};Gt("Escape",x),useEffect(()=>{y(m);},[m]);let S=P=>{if(t(P),r){let k=v.findIndex(A=>A.value===P.value);k>=0?M(v[k]):h([...v,P]);}else h([P]),x();},b=P=>{P.preventDefault(),C();};return q.createElement(em,{"data-qa-anchor":`${p}-select-dropdown`,isOpen:m||g,renderTrigger:P=>l(T(d({},P),{onClick:b,selected:v,remove:M,placeholder:u})),handleClose:x,fullSized:!0,scrollable:!0,parentContainer:s,disabled:n,className:f},o&&o.length>0&&q.createElement(ar,null,o.map(P=>q.createElement(zt,{key:P.value,"data-qa-anchor":`${p}-select-menu-item`,active:v.find(k=>k.value===P.value)!=null,onClick:()=>S(P)},a(P)))))},sr=memo(FD);var OD=i.div`
  margin-top: 8px;
  color: ${({theme:e})=>e.palette.alert.main};
  ${({theme:e})=>e.typography.caption}
`,K7=i.div``,J7=i.form``,X7=i.div``,R7=i.div`
  margin-bottom: 12px;
  width: 100%;
  display: flex;
  align-items: center;
`,e9=i(We)`
  ${({theme:e})=>e.typography.global};
  outline: none;
`,_D=i.input`
  ${({theme:e})=>e.typography.global};
  border-radius: 4px;
  border: 1px solid #e3e4e8;
  padding: 10px 12px;
  outline: none;
  &:focus-within {
    border-color: ${({theme:e})=>e.palette.primary.main};
  }
`,t9=i(_D)`
  background: ${({theme:e})=>e.palette.base.shade4};
  width: 100%;
  padding-right: 60px;
`,o9=i(ml)``,r9=i($)`
  background: transparent;
  border: none;
  outline: none;
`,n9=i.div`
  padding: 20px 16px 16px;
`,i9=i.div``,Ws=i.div`
  display: flex;
  flex-direction: column;
  ${({horizontal:e})=>e&&"flex-direction: row"};
  ${({separate:e,theme:t})=>e&&`
    border-top: 1px solid ${t.palette.base.shade4};
    padding-top: 20px;
  `};
  margin-bottom: 20px;
`,a9=i.div``,q0=e=>q.createElement(ErrorMessage,d({as:OD},e)),s9=i.div`
  border-top: 1px solid ${({theme:e})=>e.palette.base.shade4};
  padding: ${({edit:e})=>e?"12px 0":"12px 16px"};
  display: flex;
  justify-content: ${({edit:e})=>e?"flex-start":"flex-end"};
`,Ys=i.label`
  ${({theme:e})=>e.typography.bodyBold};
  ${({theme:e})=>`
    &.required {
      &::after {
        color: ${e.palette.alert.main};
        content: ' *';
      }
    }
  `}
`,Qs=i.div`
  width: 700px;
  margin-right: 20px;
`,Z0=i.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
`,W0=i.div`
  width: 100%;
`,Y0=i.div`
  display: flex;
  width: 100%;
`,l9=i(oe).attrs({type:"submit"})`
  padding: 10px 16px;
  margin-left: 12px;
  ${({edit:e})=>e&&z`
      min-width: 100px;
      margin-left: 0;
    `};
`,m9=i(sr)`
  button {
    width: 100%;
  }
`,ha=i.div`
  margin-left: auto;
  color: ${({theme:e})=>e.palette.base.shade1};
  ${({theme:e})=>e.typography.caption}
`,d9=i.div`
  position: relative;
  width: 100%;

  ${ha} {
    position: absolute;
    top: 14px;
    right: 8px;
  }
`,c9=i.div`
  margin-bottom: 8px;
`;var Sm=i(jt).attrs({width:15,height:15})`
  margin-right: 8px;
`,p9=i.div`
  margin-right: 4px;
  display: flex;
  align-items: center;
`,u9=i(nl).attrs({height:30,width:20})``,f9=i(tn).attrs({height:15,width:15})`
  margin-right: 4px;
`,g9=i.div`
  border: 1px solid #ebecef;
  border-radius: 8px;
  background: ${({theme:e})=>e.palette.system.background};
  flex-shrink: 0;
  align-self: flex-start;
  padding: 20px;
  margin-bottom: 14px;
`,y9=i.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`,h9=i(J)`
  height: 120px;
  width: 120px;
  margin-right: auto;
`,C9=i.div`
  display: flex;
  gap: 8px;
  margin-right: 8px;

  > button {
    min-width: 136px;
    height: 40px;
  }
`,v9=i.div`
  ${({theme:e})=>e.typography.headline}
`,UD=i.span`
  ${({theme:e})=>e.typography.bodyBold};
  margin-right: 2px;
`,Q0=i(UD)`
  &:hover {
    cursor: pointer;
  }
  margin-right: 3px;
`,x9=i.div`
  display: flex;

  > *:not(:first-child) {
    margin-left: 10px;
  }
`,b9=i.div`
  margin: 8px 0;
`,M9=i(St)`
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
`,I9=i.div`
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
`,w9=i.div`
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;

  > *:first-child {
    margin-right: 5px;
  }
`,S9=i.div`
  font-size: 12px;
`,P9=i.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({theme:e})=>e.palette.primary.main};
`,T9=i.div`
  display: flex;
  align-items: center;
`;var E9=200,jD=({option:e,removeOption:t,updateOption:o})=>{let[r,n]=useState(e.text);return q.createElement(R7,null,q.createElement(d9,null,q.createElement(t9,{"data-qa-anchor":"poll-composer-option-item-input",value:r,maxLength:E9,onChange:a=>{n(a.target.value),o(a.target.value);}}),q.createElement(ha,null,`${r.length}/${E9}`)),q.createElement(r9,{"data-qa-anchor":"poll-composer-option-item-close-button",onClick:t},q.createElement(o9,{height:16})))},VD=({onChange:e,optionsLimit:t})=>{let[o,r]=useState([]),n=!t||t&&o.length<t,s=c=>{e(c.map(({text:u})=>({dataType:"text",data:u})));},a=()=>{if(n){let c=[...o,{text:"",id:v4$1()}];r(c),s(c);}},l=(c,u)=>{let f=o.map(p=>p.id===c?T(d({},p),{text:u}):p);r(f),s(f);},m=c=>{let u=o.findIndex(p=>p.id===c),f=[...o.slice(0,u),...o.slice(u+1)];r(f),s(f);};return q.createElement(X7,null,q.createElement(c9,null,q.createElement(FormattedMessage,{id:"options_composer.title"})),o.map(c=>q.createElement(jD,{key:c.id,option:c,removeOption:()=>m(c.id),updateOption:u=>l(c.id,u)})),q.createElement("div",null,q.createElement($,{"data-qa-anchor":"poll-composer-add-option-button",fullWidth:!0,disabled:!n,onClick:c=>{c.preventDefault(),a();}},q.createElement(Sm,null)," ",q.createElement(FormattedMessage,{id:"options_composer.button.add"}))))},L9=VD;var A9=i.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`,B9=i.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
`,F9=i.button`
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
`,D9=i(sl).attrs({width:24,height:24})``,z9=i(jt).attrs({width:24,height:24})``;var K0="{counter}",O9=({icon:e=null,onClick:t,disabled:o})=>q.createElement(F9,{disabled:o,onClick:t},e),GD=({output:e=""})=>q.createElement(B9,null,e),qD=({renderDecButton:e=O9,renderIncButton:t=O9,renderResult:o=GD,resultFormat:r="{counter}",defaultValue:n=0,onChange:s,onlyPositiveNumber:a=!0})=>{let[l,m]=useState(n);return q.createElement(A9,null,e({onClick:c=>{c.preventDefault();let u=l-1;m(u),s(u);},icon:q.createElement(D9,null),disabled:a&&l-1<0}),o({output:r.replace(K0,l)}),t({onClick:c=>{c.preventDefault();let u=l+1;m(u),s(u);},icon:q.createElement(z9,null)}))},_9=qD;var WD=({onChange:e,parentContainer:t=null})=>{let{formatMessage:o}=useIntl(),r=Object.values(["single","multiple"]).map(n=>({name:o({id:"select.answerType.item"},{answerType:n}),value:n}));return q.createElement(m9,{options:r,value:[r[0]],parentContainer:t,renderItem:({name:n})=>q.createElement("div",null,n),onSelect:({value:n})=>e(n)})},H9=WD;var j9=500,Js=2,Ca=10,RD=864e5,ez=({children:e})=>q.createElement(i9,null,q.createElement(n9,null,e)),tz=({className:e="",targetId:t,targetType:o,onCancel:r=()=>{},onSubmit:n=(a,l,m)=>{},onIsDirtyChange:s})=>{var B;let{text:a,markup:l,mentions:m,mentionees:c,metadata:u,queryMentionees:f,onChange:p}=wt({targetId:t||void 0,targetType:o}),[g,y]=useState(!1),v={question:"",answers:[],answerType:"single",closedIn:0},{handleSubmit:h,setError:C,watch:x,control:M,formState:{errors:S,isDirty:b}}=useForm({defaultValues:v}),{formatMessage:P}=useIntl(),k=x("question",""),A=x("answers",[]);useEffect(()=>s==null?void 0:s(b),[b]);let L=E=>w(void 0,null,function*(){var G,F,ee;try{if(y(!0),!E.question.trim()){C("question",{message:"Question cannot be empty"});return}if(((G=E==null?void 0:E.answers)==null?void 0:G.length)<Js){C("answers",{message:`Minimum amount of answers should be ${Js}`});return}if(((F=E==null?void 0:E.answers)==null?void 0:F.length)>Ca){C("answers",{message:`Maximum amount of answers should be ${Ca}`});return}let se={question:E==null?void 0:E.question,answers:(ee=E==null?void 0:E.answers)!=null&&ee.length?E.answers:[],answerType:(E==null?void 0:E.answerType)||"single",closedIn:E&&E.closedIn?E.closedIn*RD:void 0};yield n(se,c,u);}finally{y(!1);}}),O=!b||(k==null?void 0:k.length)===0||g,Y=useRef(null);return q.createElement(K7,null,q.createElement(J7,{className:e,onSubmit:h(L)},q.createElement(a9,{ref:Y},q.createElement(ez,null,q.createElement(Ws,null,q.createElement(Z0,null,q.createElement(Qs,null,q.createElement(Ys,{className:"required"},q.createElement(FormattedMessage,{id:"poll_composer.question.label"}))),q.createElement(ha,null,`${(B=a==null?void 0:a.length)!=null?B:0}/${j9}`)),q.createElement(Controller,{control:M,name:"question",rules:{required:"Question is required",maxLength:{value:j9,message:"Question is too long"}},render:se=>{var{field:ie}=se,D=ie,{value:E,ref:G,onChange:F}=D,ee=I(D,["value","ref","onChange"]);return q.createElement(e9,T(d({},ee),{ref:G,"data-qa-anchor":"poll-composer-options-textarea",mentionAllowed:!0,multiline:!0,value:l,queryMentionees:f,placeholder:P({id:"poll_composer.question.placeholder"}),onChange:Me=>{var Ce=Me,{plainText:U,mentions:ne}=Ce,ue=I(Ce,["plainText","mentions"]);if((ne==null?void 0:ne.length)>zu)return It({title:q.createElement(FormattedMessage,{id:"pollComposer.unableToMention"}),content:q.createElement(FormattedMessage,{id:"pollComposer.overMentionees"}),okText:q.createElement(FormattedMessage,{id:"pollComposer.okText"}),type:"info"});p(d({plainText:U,mentions:ne},ue)),F(U);}}))}}),q.createElement(q0,{errors:S,name:"question"})),q.createElement(Ws,null,q.createElement(Z0,null,q.createElement(Qs,null,q.createElement(Ys,{className:"required"},q.createElement(FormattedMessage,{id:"poll_composer.poll_options.label"}))),q.createElement(ha,null,`${A.length}/${Ca}`)),q.createElement(Controller,{rules:{required:`There should be at least ${Js} answers`,minLength:{value:Js,message:`There should be at least ${Js} answers`},maxLength:{value:Ca,message:`There can be only ${Ca} answers maximum`}},name:"answers",control:M,render:({field:E})=>q.createElement(L9,d({optionsLimit:Ca},E))}),q.createElement(q0,{errors:S,name:"answers"})),q.createElement(Ws,{horizontal:!0,separate:!0},q.createElement(Y0,null,q.createElement(Qs,null,q.createElement(Ys,null,q.createElement(FormattedMessage,{id:"poll_modal.answer_type.title"})),q.createElement("div",null,q.createElement(FormattedMessage,{id:"poll_modal.answer_type.body"}))),q.createElement(W0,null,q.createElement(Controller,{rules:{required:"Answer type is required"},name:"answerType",render:({field:E})=>q.createElement(H9,d({parentContainer:Y.current},E)),control:M})))),q.createElement(Ws,{horizontal:!0,separate:!0},q.createElement(Y0,null,q.createElement(Qs,null,q.createElement(Ys,null,q.createElement(FormattedMessage,{id:"poll_modal.closed_in.title"})),q.createElement("div",null,q.createElement(FormattedMessage,{id:"poll_modal.closed_in.body"}))),q.createElement(W0,null,q.createElement(Controller,{name:"closedIn",render:({field:E})=>q.createElement(_9,T(d({},E),{onlyPositiveNumber:!0,resultFormat:`${K0} days`})),control:M})))))),q.createElement(s9,null,q.createElement($,{onClick:E=>{E.preventDefault(),r();}},q.createElement(FormattedMessage,{id:"cancel"})),q.createElement(l9,{"data-qa-anchor":"poll-composer-post-button",disabled:O},q.createElement(FormattedMessage,{id:"post"})))))},V9=tz;var az=({targetId:e,targetType:t,onClose:o,onCreatePoll:r})=>{let[n,s]=useState(!1),{formatMessage:a}=useIntl(),l=(c,u,f)=>w(void 0,null,function*(){try{let p=yield PollRepository.createPoll(c);yield r(p.data.pollId,c.question,u,f),o();}catch(p){p instanceof Error&&p.message===ln.CONTAIN_BLOCKED_WORD&&Z.error({content:q.createElement(FormattedMessage,{id:"notification.error.blockedWord"})});}}),m=()=>me({title:a({id:"CommunityCreationModal.title"}),content:a({id:"CommunityCreationModal.content"}),cancelText:a({id:"CommunityCreationModal.cancelText"}),okText:a({id:"CommunityCreationModal.okText"}),onOk:o});return q.createElement(dt,{"data-qa-anchor":"poll-composer-modal",title:a({id:"poll_modal.title"}),clean:!1,onCancel:n?m:o},q.createElement(V9,{targetId:e,targetType:t,onIsDirtyChange:c=>s(c),onCancel:m,onSubmit:l}))},$9=az;var dz=n=>{var s=n,{className:e,fixed:t=!1,children:o}=s,r=I(s,["className","fixed","children"]);return q.createElement(Popover,d({containerClassName:Ln(e,{fixed:t})},r),o)},G9=i(dz)`
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
`;var Tm=G9;var km=i(J)`
  margin-right: 8px;
`;var cz=({"data-qa-anchor":e="",community:t,currentTargetId:o,onChange:r,onClose:n})=>{let s=_({fileId:t.avatarFileId,imageSize:"small"});return q.createElement(zt,{"data-qa-anchor":e,active:t.communityId===o,onClick:()=>{r({targetId:t.communityId,targetType:"communityFeed"}),n();}},q.createElement(km,{avatar:s,size:"tiny",backgroundImage:lt}),` ${t.displayName}`)},q9=e=>{let t=N("CommunityItem");return t?t(e):q.createElement(cz,d({},e))};var Z9=350,yz=.98,hz=i(ql).attrs({width:18,height:18})`
  margin-right: 8px;
  margin-top: -4px;
`,Cz=i.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`,vz=i.div`
  ${({theme:e})=>e.typography.caption}
  border-top: 1px solid #e3e4e8;
  color: ${({theme:e})=>e.palette.base.shade1};
  padding: 12px;
`,xz=i.div`
  position: relative;
  max-width: 200px;
  height: ${Z9}px;
  overflow: auto;
`,bz=i.h4`
  text-align: center;
`,Mz=i(Tm)`
  transform: none !important;
  position: absolute !important;
  top: 45px !important;
`,Iz=({user:e,communities:t,hasMoreCommunities:o,loadMoreCommunities:r,currentTargetId:n,onChange:s,children:a})=>{let l=useRef(null),[m,c]=useState(!1),u=()=>c(!0),f=()=>c(!1),p=_({fileId:e.avatarFileId}),g=useCallback(()=>{r==null||r();},[r]),y=q.createElement(ar,null,q.createElement(zt,{active:e.userId===n,onClick:()=>{s({targetId:e.userId,targetType:"user"}),f();}},q.createElement(km,{size:"tiny",avatar:e.avatarCustomUrl||p,backgroundImage:ce})," ",q.createElement(FormattedMessage,{id:"post.myTimeline"})),q.createElement(vz,null,q.createElement(FormattedMessage,{id:"post.community"})),q.createElement(xz,null,q.createElement(gz,{dataLength:t.length,next:()=>g(),hasMore:o||!1,height:Z9,loader:q.createElement(bz,null,q.createElement(FormattedMessage,{id:"loading"})),scrollThreshold:yz},t.map(v=>q.createElement(q9,{key:v.communityId,"data-qa-anchor":"post-creator-post-target-community-item",community:v,currentTargetId:n,onChange:s,onClose:f})))));return q.createElement("div",{ref:l,style:{position:"relative"}},q.createElement(Mz,{isOpen:m,positions:["bottom"],align:"start",content:y,parentElement:l.current||void 0,onClickOutside:f},q.createElement(Cz,{onClick:u},a," ",q.createElement(hz,{"data-qa-anchor":"post-creator-target-selector"}))))},W9=e=>{let t=N("PostTargetSelector");return t?t(e):q.createElement(Iz,d({},e))};var Y9=i(J)`
  margin-right: 8px;
`,Q9=i.div`
  padding: 16px 20px 12px 16px;
  border: 1px solid #edeef2;
  display: flex;
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px;
`,K9=i.div`
  padding-top: 12px;
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`,J9=i.div`
  flex-grow: 1;
  width: 85.5%;
`,X9=i(oe)`
  padding: 10px 16px;
  margin-left: auto;
`,R9=i.div`
  padding: 0 12px;
`,eg=i(We)`
  display: block;
  & > textarea {
    width: 100%;
  }
`,tg=i(al)`
  vertical-align: -0.125em;
`,og=i.button`
  background: none;
  border: none;
  padding: 0;
`,rg=i(ll)``;var Sz="video/*,.flv,.3gp",ec=i(wm)`
  ${({uploadLoading:e})=>e&&"cursor: wait !important;"}
  ${({disabled:e,theme:t})=>e&&`color: ${t.palette.neutral.shade2};`}
`,Pz=({fileUploadDisabled:e,imageUploadDisabled:t,videoUploadDisabled:o,onChangeImages:r,onChangeVideos:n,onChangeFiles:s,uploadLoading:a,onMaxFilesLimit:l,onFileSizeLimit:m,fileLimitRemaining:c})=>q.createElement(q.Fragment,null,q.createElement(ec,{"data-qa-anchor":"post-creator-image-attachment-button",disabled:t,uploadLoading:a,fileLimitRemaining:c,mimeType:"image/*",multiple:!0,onChange:r,onMaxFilesLimit:l,onFileSizeLimit:m},q.createElement($i,null)),q.createElement(ec,{"data-qa-anchor":"post-creator-video-attachment-button",disabled:o,uploadLoading:a,fileLimitRemaining:c,mimeType:Sz,multiple:!0,onChange:u=>{u.forEach(f=>{f.forceType=FileType.VIDEO;}),n==null||n(u);},onMaxFilesLimit:l,onFileSizeLimit:m},q.createElement(tg,{icon:"video"})),q.createElement(ec,{"data-qa-anchor":"post-creator-file-attachment-button",disabled:e,uploadLoading:a,fileLimitRemaining:c,multiple:!0,onChange:s,onMaxFilesLimit:l,onFileSizeLimit:m},q.createElement(Gi,null))),ng=Pz;var kz=.999;function va(e){return e.fileId!==void 0}var oc=e=>va(e)?e.updatedAt?new Date(e.updatedAt).getTime():Date.now():e.lastModified;function mi({files:e=[],uploadedFiles:t=[],onChange:o=s=>{},onLoadingChange:r=s=>{},onError:n=s=>{}}){let[s,a]=useState({}),[l,m]=useState([]),c=useMemo(()=>Array.isArray(e)?e:Array.from(e),[e]);useEffect(()=>{a(c.reduce((v,h)=>T(d({},v),{[h.name]:0}),{}));},[c]);let u=useCallback((v,h)=>{let C=h<=kz?h:1;a(x=>T(d({},x),{[v.name]:C}));},[]),f=useCallback(()=>{o({uploaded:[],uploading:[]});},[o]),p=useCallback(()=>{m([]);},[]),g=useCallback(v=>{if(va(v)){let h=t.filter(C=>C.fileId!==v.fileId);o({uploaded:h,uploading:c});}else {let h=c.filter(C=>C.name!==v.name);o({uploaded:t,uploading:h});}},[o]);return useEffect(()=>{if(!c.length)return;function v(){return w(this,null,function*(){r(!0);try{let h=yield Promise.all(c.map(x=>w(this,null,function*(){let M=new FormData;M.append("files",x);let S=yield w(this,null,function*(){return x.type.includes(FileType.VIDEO)?FileRepository.createVideo(M,void 0,b=>{u(x,b);}):x.type.includes(FileType.IMAGE)?FileRepository.createImage(M,b=>{u(x,b);}):FileRepository.createFile(M,b=>{u(x,b);})});return S.data.length>0?S.data[0]:null})));a({});let C=[...t,...h].filter(ge);o({uploaded:C,uploading:[]}),m([]);}catch(h){m(c.map(C=>C.name)),n("Something went wrong. Please try uploading again.");}finally{r(!1);}})}v();},[c]),{allFiles:[...t,...c],uploading:c,uploaded:t,progress:s,removeFile:g,reset:f,rejected:l,retry:p}}var Ez=i(pn)`
  ${({uploadLoading:e})=>e&&z`
      cursor: wait !important;
    `}
`,Nz=({allFiles:e,progress:t,removeFile:o,uploadLoading:r,rejected:n,retry:s})=>q.createElement(Ez,{items:e,uploadLoading:r,renderItem:a=>{if(!va(a))return q.createElement(Re,{key:a==null?void 0:a.name,"data-qa-anchor":"post-creator-uploaded-image",file:a,progress:t[a==null?void 0:a.name],isRejected:n.includes(a==null?void 0:a.name)});let{fileId:l}=a;return q.createElement(Re,{key:l,fileId:l,"data-qa-anchor":"post-creator-uploaded-image",onRemove:()=>o(a)})}}),Lz=({files:e,uploadedFiles:t,onChange:o,onLoadingChange:r,uploadLoading:n,onError:s})=>{let a=mi({files:e,uploadedFiles:t,onChange:o,onLoadingChange:r,onError:s}),{allFiles:l}=a;return l.length===0?null:q.createElement(Nz,T(d({},a),{uploadLoading:n}))},lg=Lz;var Az=i.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5em;
  min-height: 1em;
  margin-bottom: 1rem;
  ${({uploadLoading:e})=>e&&"cursor: wait !important;"}
`,Bz=({uploading:e,uploaded:t,progress:o,removeFile:r,uploadLoading:n,rejected:s,retry:a,rowDataQaAnchor:l})=>q.createElement(Az,{uploadLoading:n},t.map(m=>q.createElement(go,{key:m.fileId,"data-qa-anchor":l,fileId:m.fileId,onRemove:()=>r(m)})),e.map(m=>q.createElement(go,{key:m.name,"data-qa-anchor":l,file:m,progress:o[m.name],isRejected:s.includes(m.name),onRemove:()=>r(m)}))),Fz=({files:e,uploadedFiles:t,onChange:o,onLoadingChange:r,uploadLoading:n,onError:s,rowDataQaAnchor:a="post-creator-uploaded-file"})=>{let l=mi({files:e,uploadedFiles:t,onChange:o,onLoadingChange:r,onError:s}),{allFiles:m}=l;return m.length===0?null:q.createElement(Bz,T(d({},l),{uploadLoading:n,rowDataQaAnchor:a}))},Am=Fz;var zz=e=>q.createElement(Am,T(d({},e),{rowDataQaAnchor:"post-creator-uploaded-video"})),mg=zz;var qz=({targetId:e,targetType:t})=>{let[o,r]=useState(null),[n,s]=useState(null),a=useRef(null);return useEffect(()=>{if(!(e==null||e===""))return a.current&&a.current(),(t==="communityFeed"||t==="community")&&(a.current=CommunityRepository.getCommunity(e,l=>{r(l.data);})),a.current=UserRepository.getUser(e,l=>{s(l.data);}),()=>{var l;(l=a.current)==null||l.call(a);}},[e,t]),{community:o,user:n}},Zz=10,Wz=()=>It({title:q.createElement(FormattedMessage,{id:"postCreator.unableToPost"}),content:q.createElement(FormattedMessage,{id:"postCreator.overCharacter"}),okText:q.createElement(FormattedMessage,{id:"postCreator.done"}),type:"info"}),Yz=({className:e="",targetType:t,targetId:o,enablePostTargetPicker:r,communities:n=[],placeholder:s="What's going on...",hasMoreCommunities:a,loadMoreCommunities:l,onCreateSuccess:m,maxFiles:c=Zz})=>{var B1,F1;let{currentUserId:u}=H(),{setNavigationBlocker:f}=V(),p=j(u);(t==="global"||t==="myFeed")&&(t="user",o=u||"");let[g,y]=useState({targetType:t,targetId:o}),{user:v,community:h}=qz({targetId:g.targetId,targetType:g.targetType}),{moderators:C}=Er(h==null?void 0:h.communityId);useEffect(()=>{y({targetType:t,targetId:o});},[t,o]);let x=_({fileId:(v==null?void 0:v.avatarFileId)||(h==null?void 0:h.avatarFileId)||""}),[M,S]=useState([]),[b,P]=useState([]),[k,A]=useState([]),[L,O]=useState([]),[Y,B]=useState([]),[E,G]=useState([]),[F,ee]=useState(!1),[se]=$7(),{mentionees:ie,metadata:D,text:U,markup:ne,onChange:ue,queryMentionees:Me,clearAll:Ce}=wt({targetType:g.targetType,targetId:g.targetId||void 0}),[fe,Ae]=useState(!1);function Ve(){return w(this,null,function*(){var Xe;if(g.targetId)try{Ae(!0);let rt={},to=[];if(U&&(rt.text=U),M.length&&to.push(...M.map(Jo=>({fileId:Jo.fileId,type:FileType.IMAGE}))),b.length&&to.push(...b.map(Jo=>({fileId:Jo.fileId,type:FileType.VIDEO}))),k.length&&to.push(...k.map(Jo=>({fileId:Jo.fileId,type:FileType.FILE}))),(Xe=rt.text)!=null&&Xe.length&&rt.text.length>5e4){Wz();return}let Qr={targetId:g.targetId,targetType:g.targetType,data:rt,dataType:"text",attachments:to,metadata:D,mentionees:ie},rs=(yield PostRepository.createPost(Qr)).data;if(m==null||m(rs),Ce(),S([]),P([]),A([]),O([]),B([]),G([]),h){let Jo=(C||[]).find(D1=>D1.userId===rs.postedUserId)!=null;h.postSetting===CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED&&!Jo&&Z.success({content:q.createElement(FormattedMessage,{id:"post.success.submittedToReview"})});}}catch(rt){rt instanceof Error&&rt.message===ln.CONTAIN_BLOCKED_WORD&&Z.error({content:q.createElement(FormattedMessage,{id:"notification.error.blockedWord"})});}finally{Ae(!1);}})}let Ee=()=>{Z.info({content:q.createElement(FormattedMessage,{id:"upload.attachmentLimit",values:{maxFiles:c}})});},Ie=()=>{Z.info({content:q.createElement(FormattedMessage,{id:"upload.fileSizeLimit"})});},Nt=g.targetType==="community"?lt:ce,Lt=q.createElement(Y9,{avatar:(v==null?void 0:v.avatarCustomUrl)||x||void 0,backgroundImage:Nt}),we=!U&&M.length===0&&b.length===0&&k.length===0||F||fe,Ko=!(!U&&M.length===0&&b.length===0&&k.length===0);useEffect(()=>{Ko?f==null||f({title:q.createElement(FormattedMessage,{id:"post.discard.title"}),content:q.createElement(FormattedMessage,{id:"post.discard.content"}),okText:q.createElement(FormattedMessage,{id:"general.action.discard"})}):f==null||f(null);},[Ko,f]);let[qe,mo]=useState(!1),vr=()=>mo(!0),Yr=(B1=g==null?void 0:g.targetType)!=null?B1:t,xr=(F1=g==null?void 0:g.targetId)!=null?F1:o;return q.createElement(Q9,{className:Ln("postComposeBar",e)},qe&&q.createElement($9,{targetId:xr||void 0,targetType:Yr,onCreatePoll:(Xe,rt,to,Qr)=>w(void 0,null,function*(){xr&&(yield PostRepository.createPost({targetId:xr,targetType:Yr,data:{pollId:Xe,text:rt},dataType:"poll",mentionees:to,metadata:Qr}));}),onClose:()=>mo(!1)}),r&&p?q.createElement(W9,{user:p,communities:n,hasMoreCommunities:a,loadMoreCommunities:l,currentTargetId:g.targetId,onChange:y},Lt):Lt,q.createElement(J9,null,q.createElement(eg,{"data-qa-anchor":"post-creator-textarea",multiline:!0,value:ne,placeholder:s,mentionAllowed:!0,queryMentionees:Me,loadMoreMentionees:Xe=>Me(Xe),append:q.createElement(R9,null,q.createElement(lg,{files:L,uploadedFiles:M,uploadLoading:F,onLoadingChange:ee,onChange:({uploaded:Xe,uploading:rt})=>{S(Xe),O(rt);},onError:se}),q.createElement(mg,{files:Y,uploadedFiles:b,uploadLoading:F,onLoadingChange:ee,onChange:({uploaded:Xe,uploading:rt})=>{P(Xe),B(rt);},onError:se}),q.createElement(Am,{files:E,uploadedFiles:k,uploadLoading:F,onLoadingChange:ee,onChange:({uploaded:Xe,uploading:rt})=>{A(Xe),G(rt);},onError:se})),onChange:({text:Xe,plainText:rt,mentions:to})=>{if((to==null?void 0:to.length)>30)return It({title:q.createElement(FormattedMessage,{id:"postCreator.unableToMention"}),content:q.createElement(FormattedMessage,{id:"postCreator.overMentionees"}),okText:q.createElement(FormattedMessage,{id:"postCreator.okText"}),type:"info"});ue({text:Xe,plainText:rt,mentions:to});}}),q.createElement(K9,{"data-qa-anchor":"post-creator-footer"},q.createElement(ng,{imageUploadDisabled:k.length>0||b.length>0||F,videoUploadDisabled:k.length>0||M.length>0||F,fileUploadDisabled:M.length>0||b.length>0||F,fileLimitRemaining:c-k.length-M.length-b.length,uploadLoading:F,onChangeImages:Xe=>O(Xe),onChangeVideos:B,onChangeFiles:G,onMaxFilesLimit:Ee,onFileSizeLimit:Ie}),q.createElement(og,{"data-qa-anchor":"post-creator-poll-button",onClick:vr},q.createElement(G0,null,q.createElement(rg,null))),q.createElement(X9,{disabled:we,"data-qa-anchor":"post-creator-post-button",onClick:Ve},q.createElement(FormattedMessage,{id:"post"})))))},Xs=memo(Yz);var Rz=e=>{let[t,o]=useState(!1),{currentUserId:r}=H(),n=(e==null?void 0:e.postId)||void 0,s=useMemo(()=>(e==null?void 0:e.creatorId)===r,[e,r]),{data:a,isLoading:l,refetch:m}=useQuery({queryKey:["asc-uikit","PostRepository","isPostFlaggedByMe",n],queryFn:()=>PostRepository.isPostFlaggedByMe(n),enabled:e!=null});useEffect(()=>{a!=null&&o(a);},[a]);let c=()=>w(void 0,null,function*(){if(!(n==null||s))try{yield PostRepository.flagPost(n);}catch(p){o(!1);}finally{m();}}),u=()=>w(void 0,null,function*(){if(!(n==null||s))try{yield PostRepository.unflagPost(n);}catch(p){o(!0);}finally{m();}});return {isLoading:l,isFlaggedByMe:t,isUnableToFlag:s,flagPost:c,unflagPost:u,toggleFlagPost:()=>w(void 0,null,function*(){n==null||s||(t?u():c());})}},cg=Rz;var rO=({postId:e,className:t,hidePostTarget:o,readonly:r,onDeleted:n})=>{var x,M,S;let s=Vt(e),a=_({fileId:(x=s==null?void 0:s.creator)==null?void 0:x.avatarFileId,imageSize:"small"}),{isFlaggedByMe:l,flagPost:m,unflagPost:c}=cg(s),u=e7(s==null?void 0:s.dataType);Bo({postId:e,level:SubscriptionLevels.POST}),Ts({targetType:s==null?void 0:s.targetType,targetId:s==null?void 0:s.targetId,shouldSubscribe:()=>!!s});let f=((s==null?void 0:s.latestComments)||[]).find(b=>b.dataType==="poll"),p=hm((M=f==null?void 0:f.data)==null?void 0:M.pollId),g=(p==null?void 0:p.status)==="closed",y=()=>w(void 0,null,function*(){p!=null&&(yield PollRepository.closePoll(p.pollId));}),v=()=>w(void 0,null,function*(){s!=null&&(yield PostRepository.deletePost(s.postId),n==null||n(s.postId));}),h=()=>w(void 0,null,function*(){s!=null&&(yield PostRepository.approvePost(s.postId));}),C=()=>w(void 0,null,function*(){s!=null&&(yield PostRepository.declinePost(s.postId));});return s==null||u==null?q.createElement(Dt,{loading:!0}):q.createElement(q.Fragment,null,u({childrenPosts:(s==null?void 0:s.latestComments)||[],handleClosePoll:y,isPollClosed:g,avatarFileUrl:a,user:s==null?void 0:s.creator,poll:p,className:t,currentUserId:(s==null?void 0:s.postedUserId)||void 0,hidePostTarget:o,post:s,userRoles:((S=s==null?void 0:s.creator)==null?void 0:S.roles)||[],readonly:r,isFlaggedByMe:l,handleReportPost:m,handleUnreportPost:c,handleApprovePost:h,handleDeclinePost:C,handleDeletePost:v}))},Rs=memo(e=>{let t=N("Post");return t?t(e):q.createElement(rO,d({},e))});var nO=i($l).attrs({width:48,height:48})`
  margin: 10px;
`,iO=i($)`
  font-size: 14px;
  margin-top: 8px;
`,aO=i(rn).attrs({width:16,height:16})`
  margin-right: 6px;
`,sO=e=>{switch(e){case"globalFeed":case"global":return ()=>"feed.emptyFeed";case"communityFeed":case"community":return (t,o)=>o==="reviewing"?"feed.emptyCommunityReviewingFeed":t?"feed.emptyJoinedCommunityPublicFeed":"feed.emptyCommunityPublicFeed";case"userFeed":case"user":return ()=>"feed.emptyUserFeed";case"myFeed":return ()=>"feed.emptyMyFeed";default:return ()=>"feed.emptyFeed"}},lO=({targetType:e,canPost:t=!1,className:o=void 0,feedType:r=void 0,goToExplore:n})=>{var s;return q.createElement(ir,{className:o,title:q.createElement(FormattedMessage,{id:(s=sO(e))==null?void 0:s(t,r)}),icon:q.createElement(nO,null)},n&&q.createElement(iO,{onClick:n},q.createElement(aO,null),q.createElement(FormattedMessage,{id:"community.exploreCommunities"})))},e1=e=>{let t=N("EmptyFeed");return t?t(e):q.createElement(lO,d({},e))};var cO=z`
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
`,t1=e=>q.createElement(gz,T(d({},e),{className:String(cO)}));i.div`
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
`;i(er).attrs({width:40,height:40})`
  fill: ${({theme:e})=>e.palette.base.shade2};
`;i.div`
  font-weight: 600;
  font-size: 17px;
  color: ${({theme:e})=>e.palette.base.main};
`;i.div`
  font-size: 14px;
  color: ${({theme:e})=>e.palette.base.shade1};
`;var ug=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme:e})=>e.palette.base.shade3};
  padding: 5rem 0.5rem;
  background: ${({theme:e})=>e.palette.system.background};
  color: ${({theme:e})=>e.palette.base.shade3};
  ${({theme:e})=>e.typography.body};
`,fg=i.div`
  margin-bottom: 12px;
`,gg=i(er).attrs({width:40,height:40})`
  fill: ${({theme:e})=>e.palette.base.shade2};
`,yg=i.div`
  font-weight: bold;
  font-size: 17px;
  color: ${({theme:e})=>e.palette.base.main};
`,hg=i.div`
  font-size: 14px;
  color: ${({theme:e})=>e.palette.base.shade1};
`;var pO=()=>q.createElement(ug,null,q.createElement(fg,null,q.createElement(gg,null)),q.createElement(yg,null,q.createElement(FormattedMessage,{id:"privateFeed.title"})),q.createElement(hg,null,q.createElement(FormattedMessage,{id:"privateFeed.body"}))),o1=pO;var yO=()=>{let[e,t]=useState([]),[o,r]=useState(!1),[n,s]=useState(null),[a,l]=useState(!1);function m(){return w(this,null,function*(){try{let g=yield FeedRepository.queryGlobalFeed({limit:10,queryToken:n||void 0});s(g.paging.next||null),t(y=>[...y,...g.data]);}finally{r(!1);}})}useEffect(()=>{m();},[]);let c=g=>{t(y=>[g,...y]);},u=g=>{let y=e.filter(v=>v.postId!==g);t(y);},f=useMemo(()=>n!==null,[n]);return {contents:e,isLoading:o,prependItem:c,removeItem:u,loadMore:()=>{l(!0),f&&m();},hasMore:f,loadMoreHasBeenCalled:a}},vg=yO;function lr(e,t){let n=be({fetcher:CommunityRepository.getCommunities,params:e,shouldCall:()=>!!e&&(t?t==null?void 0:t():!0)}),{items:o}=n,r=I(n,["items"]);return d({communities:o},r)}var bO=({className:e="",feedType:t,showPostCreator:o=!1,goToExplore:r,readonly:n=!1,isHiddenProfile:s=!1})=>{let{currentUserId:a}=H(),{contents:l,isLoading:m,loadMore:c,prependItem:u,removeItem:f,hasMore:p,loadMoreHasBeenCalled:g}=vg();function y(){return new Array(3).fill(3).map((v,h)=>q.createElement(Dt,{key:h,loading:!0}))}return q.createElement(t1,{className:e,dataLength:l.length,next:c,hasMore:p,loader:null},s?q.createElement(o1,null):q.createElement(q.Fragment,null,o?q.createElement(Xs,{"data-qa-anchor":"feed-post-creator-textarea",targetType:"user",targetId:a||void 0,enablePostTargetPicker:!1,onCreateSuccess:v=>u(v)}):null,m&&!g?y():null,(!m||g)&&l.length>0&&q.createElement(ct,{hasMore:p,loadMore:c,className:"load-more no-border",contentSlot:l.map(v=>q.createElement(Rs,{key:v.postId,postId:v.postId,hidePostTarget:!1,readonly:n,onDeleted:h=>f(h)}))}),!m&&l.length===0&&q.createElement(e1,{targetType:"global",goToExplore:r,canPost:o,feedType:t}),m&&g?y():null))},MO=({className:e="",feedType:t,targetType:o="myFeed",onPostCreated:r,goToExplore:n,readonly:s=!1,isHiddenProfile:a=!1})=>{let{currentUserId:l}=H(),m=l||void 0,{posts:c,hasMore:u,loadMore:f,isLoading:p,loadMoreHasBeenCalled:g}=zo({targetType:"user",targetId:m,feedType:t}),{communities:y,hasMore:v,loadMore:h}=lr({membership:"member"}),C=useCallback(()=>{h==null||h();},[h]);function x(){return new Array(3).fill(3).map((M,S)=>q.createElement(Dt,{key:S,loading:!0}))}return q.createElement(t1,{className:e,dataLength:c.length,next:f,hasMore:u,loader:null},a?q.createElement(o1,null):q.createElement(q.Fragment,null,q.createElement(Xs,{"data-qa-anchor":"feed-post-creator-textarea",targetType:"user",targetId:m||void 0,communities:y,enablePostTargetPicker:!1,hasMoreCommunities:v,loadMoreCommunities:C,onCreateSuccess:r}),p&&!g?x():null,(!p||g)&&c.length>0&&q.createElement(ct,{hasMore:u,loadMore:f,className:"load-more no-border",contentSlot:q.createElement(q.Fragment,null,c.map(M=>q.createElement(Rs,{key:M.postId,postId:M.postId,hidePostTarget:!0,readonly:s})))}),!p&&c.length===0&&q.createElement(e1,{targetType:o,goToExplore:n,canPost:!0,feedType:t}),p&&g?x():null))},IO=({className:e="",targetType:t,targetId:o="",feedType:r,showPostCreator:n=!1,onPostCreated:s,goToExplore:a,readonly:l=!1,isHiddenProfile:m=!1})=>{let{posts:c,hasMore:u,loadMore:f,isLoading:p,loadMoreHasBeenCalled:g}=zo({targetType:t,targetId:o||void 0,feedType:r});wr({communityId:o,level:SubscriptionLevels.COMMUNITY});function y(){return new Array(3).fill(3).map((v,h)=>q.createElement(Dt,{key:h,loading:!0}))}return q.createElement(t1,{className:e,dataLength:c.length,next:f,hasMore:u,loader:null},m?q.createElement(o1,null):q.createElement(q.Fragment,null,n?q.createElement(Xs,{"data-qa-anchor":"feed-post-creator-textarea",targetType:t,targetId:o,enablePostTargetPicker:!1,onCreateSuccess:s}):null,p&&!g?y():null,!p&&c.length>0&&q.createElement(ct,{hasMore:u,loadMore:f,className:"load-more no-border",contentSlot:q.createElement(q.Fragment,null,c.map(v=>q.createElement(Rs,{key:v.postId,postId:v.postId,hidePostTarget:!0,readonly:l})))}),!p&&c.length===0&&q.createElement(e1,{targetType:t,goToExplore:a,canPost:n}),p&&g?y():null))},wO=({className:e="",feedType:t,targetType:o,targetId:r="",showPostCreator:n=!1,onPostCreated:s,goToExplore:a,readonly:l=!1,isHiddenProfile:m=!1})=>{let{posts:c,hasMore:u,loadMore:f,isLoading:p,loadMoreHasBeenCalled:g}=zo({targetType:o,targetId:r||void 0,feedType:t}),{communities:y,hasMore:v,loadMore:h}=lr({membership:"member"});function C(){return new Array(3).fill(3).map((x,M)=>q.createElement(Dt,{key:M,loading:!0}))}return q.createElement(t1,{className:e,dataLength:c.length,next:f,hasMore:u,loader:null},m?q.createElement(o1,null):q.createElement(q.Fragment,null,n&&q.createElement(Xs,{"data-qa-anchor":"feed-post-creator-textarea",targetType:o,targetId:r,communities:y,enablePostTargetPicker:!1,hasMoreCommunities:v,loadMoreCommunities:h,onCreateSuccess:s}),p&&!g?C():null,!p&&c.length>0&&q.createElement(ct,{hasMore:u,loadMore:f,className:"load-more no-border",contentSlot:q.createElement(q.Fragment,null,c.map(x=>q.createElement(Rs,{key:x.postId,postId:x.postId,hidePostTarget:!0,readonly:l})))}),!p&&c.length===0&&q.createElement(e1,{targetType:o,goToExplore:a,canPost:n,feedType:t}),p&&g?C():null))},SO=e=>e==="communityFeed"?"community":e==="userFeed"?"user":e==="globalFeed"||e==="global"?"feed":e||"myFeed",PO=e=>{let n=e,{targetType:t}=n,o=I(n,["targetType"]),r=SO(t);return r==="feed"?q.createElement(bO,d({},o)):r==="myFeed"?q.createElement(MO,T(d({},o),{targetType:r})):r==="community"?q.createElement(IO,T(d({},o),{targetType:r})):q.createElement(wO,T(d({},o),{targetType:r}))},hn=memo(e=>{let t=N("Feed");return t?t(e):q.createElement(PO,d({},e))});var TO=i.div`
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
`,kO=i.div`
  grid-area: main;
  overflow: auto;
  width: 100%;
  min-width: 20rem;
  max-width: 90.75rem;
  margin: 0 auto;
`,EO=i.div`
  grid-area: side;
  overflow: auto;
`,NO=({aside:e,children:t})=>q.createElement(TO,null,q.createElement(kO,null,t),q.createElement(EO,null,e)),xg=e=>{let t=N("Layout");return t?t(e):q.createElement(NO,d({},e))};var bg=i.div`
  background-color: white;
  border: 1px solid #e6e6e6;
  width: 280px;
  overflow: auto;
  flex-shrink: 0;
  ${({theme:e})=>e.typography.title}
`;var LO=i.div`
  border-top: 1px solid #f7f7f8;
  padding: 0 8px;
`,AO=i.h4`
  ${({theme:e})=>e.typography.title};
  color: black;
  padding: 0 8px;
  margin: 1em 0;
`,BO=({heading:e,children:t})=>q.createElement(LO,null,e&&q.createElement(AO,null,e),t),zm=BO;var FO=z`
  ${({active:e,theme:t})=>e&&`
      background-color: ${t.palette.primary.shade3};
      & > .actionItemChild {
        color: ${t.palette.primary.main};
      }
    `}
`,Ig=z`
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
  ${FO}
`,wg=i(K)`
  ${Ig};
  width: 100%;
`,Sg=i.a`
  cursor: pointer;
  border-radius: 4px;
  ${Ig}
  ${({theme:e})=>e.typography.bodyBold}
`,sc=i.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  ${({active:e,theme:t})=>e?z`
          background: ${t.palette.primary.main};
          // TODO: check color with design
          color: white;
        `:z`
          background: ${t.palette.base.shade4};
          color: inherit;
        `};
`;var DO=({"data-qa-anchor":e="",icon:t,children:o,active:r,className:n,onClick:s,element:a="a",disabled:l})=>a==="a"?q.createElement(Sg,{"data-qa-anchor":e,className:n,onClick:s},t&&q.createElement(sc,{active:r},t),q.createElement("span",{className:"actionItemChild"},o)):q.createElement(wg,{"data-qa-anchor":e,className:n,active:r,disabled:l,onClick:s},t&&q.createElement(sc,{active:r},t),q.createElement("span",{className:"actionItemChild"},o)),r1=DO;var zO=i(Vl).attrs({width:20,height:20})``,OO=i(rn).attrs({width:20,height:20})``,_O=({shouldHideExplore:e,children:t})=>{let{onChangePage:o,page:r}=V();return q.createElement(zm,{heading:q.createElement(FormattedMessage,{id:"sidesectioncommunity.community"})},q.createElement(r1,{"data-qa-anchor":"side-section-community-side-menu-action-item-news-feed-button",icon:q.createElement(zO,null),active:r.type==="newsfeed",onClick:()=>o("newsfeed")},q.createElement(FormattedMessage,{id:"sidesectioncommunity.newfeed"})),!e&&q.createElement(r1,{"data-qa-anchor":"side-section-community-side-menu-action-item-explore-button",icon:q.createElement(OO,null),active:r.type==="explore",onClick:()=>o("explore")},q.createElement(FormattedMessage,{id:"sidesectioncommunity.explore"})),t)},Pg=_O;var Tg=i.span`
  ${({theme:e,highlight:t})=>t?e.typography.bodyBold:e.typography.body}
`,UO=({query:e,text:t})=>{if(e==null||(e==null?void 0:e.length)===0)return q.createElement(Tg,null,t);let o=t.split(new RegExp(`(${e})`,"gi"));return q.createElement("span",null,o.map((r,n)=>q.createElement(Tg,{key:`#${r}#${n}`,highlight:r.toLowerCase()===e.toLowerCase()},r)))},dc=UO;var kg=i(er).attrs({width:16,height:16})`
  margin-right: 8px;
`,Eg=i(To).attrs({width:16,height:16})`
  margin-left: 8px;
  fill: #1253de;
`,cc=i.div`
  padding-right: 1ch;
`,Ng=i.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  ${({theme:e,isActive:t,isTitle:o})=>z`
    ${e.typography.bodyBold}
    ${t&&z`
      color: ${e.palette.primary.main};
    `}
    ${o&&e.typography.title}
  `}
`;var jO=({"data-qa-anchor":e="",isActive:t=!1,isOfficial:o=!1,isPublic:r=!1,isTitle:n=!1,isSearchResult:s=!1,name:a,searchInput:l="",className:m="",loading:c=!1,truncate:u})=>s?q.createElement(dc,{text:a||"",query:l}):q.createElement(Ng,{className:m,isActive:t,isTitle:n},c?q.createElement(cc,null,q.createElement(de,{width:120,style:{fontSize:12}})):q.createElement(v6,{lines:u},q.createElement(cc,{"data-qa-anchor":`${e}-community-name`,title:a},q.createElement(q.Fragment,null,!r&&q.createElement(kg,{"data-qa-anchor":`${e}-private-icon`}),a))),!c&&o&&q.createElement(Eg,null)),vn=e=>{let t=N("CommunityName");return t?t(e):q.createElement(jO,d({},e))};var Lg=i.a.attrs(e=>e)`
  display: grid;
  grid-template-areas: 'avatar title' 'avatar children';
  grid-template-columns: min-content auto;
  grid-template-rows: min-content min-content;
  grid-gap: 0 0.75em;
  padding: 0.5em;
  border-radius: 4px;
  align-items: center;
  color: ${({theme:e})=>e.palette.base.main};

  ${({loading:e})=>!e&&z`
      &:hover {
        cursor: pointer;
        background-color: ${({theme:t})=>t.palette.base.shade4};
      }
    `}

  ${({isActive:e,theme:t})=>e&&z`
      color: ${t.palette.primary.main};
      background-color: ${t.palette.primary.shade3};
    `};

  ${({children:e})=>!!e&&z`
      grid-template-areas: 'avatar title';
      align-items: center;
    `}
`,Ag=i(J)`
  grid-area: avatar;
`,Bg=i.div`
  grid-area: children;
`;var VO=({communityId:e,isActive:t,avatarFileUrl:o,onClick:r,isOfficial:n,isPublic:s,isSearchResult:a,name:l,searchInput:m,children:c,loading:u})=>q.createElement(Lg,{"data-qa-anchor":"community-header",isActive:t,loading:u,onClick:()=>r==null?void 0:r(e)},q.createElement(Ag,{avatar:o,backgroundImage:lt,loading:u}),u&&c?q.createElement(de,{style:{fontSize:8,maxWidth:120}}):q.createElement(vn,{"data-qa-anchor":"community-header",isActive:t,isOfficial:n,isPublic:s,isSearchResult:a,name:l,searchInput:m,loading:u}),c&&q.createElement(Bg,null,c)),Fg=e=>{let t=N("UICommunityHeader");return t?t(e):q.createElement(VO,d({},e))};var qO=({communityId:e="",onClick:t=()=>{},isActive:o=!1,isSearchResult:r=!1,searchInput:n="",children:s,loading:a=!1})=>{let l=Ze(e),m=_({fileId:l==null?void 0:l.avatarFileId,imageSize:"small"});return q.createElement(Fg,{communityId:e,avatarFileUrl:m,isActive:o,isOfficial:l==null?void 0:l.isOfficial,isPublic:l==null?void 0:l.isPublic,isSearchResult:r,name:l==null?void 0:l.displayName,searchInput:n,loading:a,onClick:t},s)};var n1=memo(qO);var YO=e=>q.createElement(gz,d({},e)),Dg=i(YO)`
  &.no-scroll {
    width: 260px;
  }
`;i.p`
  text-align: center;
  color: ${({theme:e})=>e.palette.base.shade3};
`;var RO=i.p`
  text-align: center;
  color: ${({theme:e})=>e.palette.base.shade3};
`,e_=({className:e,communitiesQueryParam:t,activeCommunity:o})=>{let{onClickCommunity:r}=V(),{communities:n,hasMore:s,loadMore:a,isLoading:l,loadMoreHasBeenCalled:m}=lr(t),c=t&&Reflect.has(t,"search"),u=(t==null?void 0:t.displayName)||"",f=useMemo(()=>n.length?n.map(({communityId:v})=>v):[],[n]),p=c&&!f.length,g=[f.length<4?"no-scroll":null,e].filter(ge);function y(){return new Array(5).fill(1).map((v,h)=>q.createElement(n1,{key:h,loading:!0}))}return q.createElement(Dg,{className:Ln(g),dataLength:f.length,next:a,hasMore:s,loader:q.createElement("div",null)},q.createElement(ct,{hasMore:s,loadMore:a,className:"no-border",contentSlot:q.createElement(q.Fragment,null,p&&q.createElement(RO,null,q.createElement(FormattedMessage,{id:"communities.nocommunityfound"})),l&&!m&&y(),!l||m?f.map(v=>q.createElement(n1,{key:v,communityId:v,isActive:v===o,isSearchResult:c,searchInput:u,onClick:()=>r(v)})):null,l&&m&&y())}))},zg=memo(e_);var t_=s=>{var a=s,{"data-qa-anchor":e="",renderer:t,label:o,className:r}=a,n=I(a,["data-qa-anchor","renderer","label","className"]);return q.createElement(tf,{"data-qa-anchor":`${e}-label`},q.createElement(of,T(d({},n),{"data-qa-anchor":`${e}-radio`})),q.createElement(q.Fragment,null,t?t():q.createElement("span",{className:r},o),q.createElement(ym,{checked:n.value})))},Ia=t_;var n_=i(_l).attrs({height:20,width:20})`
  z-index: 3;
  fill: #fff;
`,i_=i.div`
  background: ${({theme:e})=>e.palette.base.shade3};
  border-radius: 4px;
  position: relative;
  display: block;
  width: 100%;
  height: 16.875rem;
  overflow: hidden;
  align-self: center;
  transition: background 0.2s linear;
`,a_=i.div`
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
`,s_=i(wm)`
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
`,l_=i.div`
  width: 100%;
  height: 100%;
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`,m_=({uploading:e,uploaded:t,progress:o})=>{let r=[...e,...t].sort((a,l)=>{let m=oc(a);return oc(l)-m}),n=r.length>0?r[0]:null;if(!n)return null;if(!va(n))return q.createElement(Re,{key:n==null?void 0:n.name,file:n,progress:o[n==null?void 0:n.name]});let{fileId:s}=n;return q.createElement(Re,{key:s,fileId:s})},d_=({"data-qa-anchor":e="",onChange:t,value:o,mimeType:r})=>{let[n,s]=useState([]),[a,l]=useState([]),m=nt(o),c=y=>{if(y.length>0){let v=y[y.length-1];v!=null&&v.fileId&&t(v.fileId);}},u=useMemo(()=>m&&FileRepository.fileUrlWithSize(m==null?void 0:m.fileUrl,"medium"),[m]),{uploading:f,uploaded:p,progress:g}=mi({files:n,uploadedFiles:a,onChange:({uploaded:y,uploading:v})=>{c(y),l(y),s(v);}});return q.createElement(i_,null,q.createElement(m_,{uploading:f,uploaded:p,progress:g}),q.createElement(l_,{src:u!=null?u:v4}),q.createElement(s_,{"data-qa-anchor":`${e}-avatar-uploader`,mimeType:r,onChange:y=>s(y)},q.createElement(a_,null,q.createElement(n_,null)," \xA0 Upload image")))},bn=d_;var f_=e=>{let[t,o]=useState(null);return useEffect(()=>{function r(){return w(this,null,function*(){if(e==null)return;let n=yield CategoryRepository.getCategory(e);o(n.data);})}r();},[e]),t},Mn=f_;var _g=i.div`
  display: grid;
  grid-template-areas: 'avatar title' 'avatar subtitle';
  grid-template-columns: min-content auto;
  grid-template-rows: min-content min-content;
  grid-gap: 0 0.5em;
  padding: 0.5rem;
  ${({hasNoChildren:e})=>e&&z`
      grid-template-areas: 'avatar title';
      align-items: center;
    `}

  ${({theme:e,clickable:t})=>t&&z`
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background: ${e.palette.base.shade4};
      }
    `}
`,Ug=i(J)`
  grid-area: avatar;
`,Hg=i.div`
  grid-area: title;
  ${({theme:e})=>e.typography.title};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,jg=i.div`
  grid-area: subtitle;
  ${({theme:e})=>e.typography.body}
`;var g_=({className:e,categoryId:t,name:o,avatarFileUrl:r,children:n,onClick:s,loading:a})=>q.createElement(_g,{className:e,title:o,hasNoChildren:!n,clickable:!a&&!!s,onClick:()=>t&&(s==null?void 0:s(t))},q.createElement(Ug,{avatar:r,backgroundImage:J1,loading:a}),q.createElement(Hg,{title:t},a?q.createElement(de,{style:{fontSize:12,maxWidth:124}}):o),n&&q.createElement(jg,{onClick:c=>c.stopPropagation()},n)),Vg=e=>{let t=N("CategoryHeader");return t?t(e):q.createElement(g_,d({},e))};var h_=({className:e,categoryId:t,children:o,loading:r,onClick:n})=>{let s=Mn(t),a=_({fileId:s==null?void 0:s.avatarFileId,imageSize:"small"});return q.createElement(Vg,{className:e,categoryId:s==null?void 0:s.categoryId,name:s==null?void 0:s.name,avatarFileUrl:a,loading:r||!1,onClick:n},o)},$g=h_;var b_=i.div`
  margin-top: 8px;
  color: ${({theme:e})=>e.palette.alert.main};
  ${({theme:e})=>e.typography.caption}
`,Yt=e=>q.createElement(ErrorMessage,d({as:b_},e));i.span`
  color: ${({theme:e})=>e.palette.base.shade1};
`;var Om=i(jl).attrs({width:20,height:20})``,_m=i(er).attrs({width:20,height:20})``;i(Qe).attrs({width:12,height:12})`
  padding: 5px 12px;
  color: ${({theme:e})=>e.palette.base.shade1};
`;var Gg=i.div`
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
`,Um=i.div`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: ${({theme:e})=>e.palette.base.shade4};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Dr=i.div`
  margin-left: auto;
  color: ${({theme:e})=>e.palette.base.shade1};
  ${({theme:e})=>e.typography.caption}
`,ho=i.label`
  ${({theme:e})=>e.typography.bodyBold};
  margin-bottom: 4px;
  ${({theme:e})=>z`
    &.required {
      &::after {
        color: ${e.palette.alert.main};
        content: ' *';
      }
    }
  `}
`,zr=i.div`
  display: flex;
  align-items: center;
`;i.input.attrs({type:"radio"})`
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: 0;
  flex-shrink: 0;
`;var In=i.form`
  min-width: 520px;
`,Sa=i(oe).attrs({type:"submit"})`
  padding: 10px 16px;
  margin-left: 12px;
  ${({edit:e})=>e&&z`
      min-width: 100px;
      margin-left: 0;
    `};
`,Hm=i.div`
  padding: 12px 16px;
  ${({theme:e})=>e.typography.title};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({theme:e})=>e.palette.base.shade4};
`,wn=i.div`
  background: ${({theme:e})=>e.palette.system.background};
  ${({theme:e,edit:t})=>t?z`
          > :not(:first-child) {
            margin-top: 12px;
          }
          border: 1px solid #edeef2;
          border-radius: 4px;
        `:z`
          > :not(:last-child) {
            border-bottom: 1px solid ${e.palette.base.shade4};
          }
        `}
`,Sn=i.div`
  ${({edit:e})=>e?z`
          padding: 0 16px 20px;
        `:z`
          padding: 20px 16px 16px;
        `}
`;i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;var jm=i.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-bottom: 16px;
  }
  ${({theme:e})=>e.typography.bodyBold}
`,Vm=i.div`
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
`;var Pa=i.div`
  border-top: 1px solid ${({theme:e})=>e.palette.base.shade4};
  padding: ${({edit:e})=>e?"12px 0":"12px 16px"};
  display: flex;
  justify-content: ${({edit:e})=>e?"flex-start":"flex-end"};
`,M_=i.div`
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
`;i(Re)`
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
  &:hover ${M_} {
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
`;var pi=i(xE).attrs({minRows:3,maxRows:15})`
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
`,ui=i.input`
  ${({theme:e})=>e.typography.global};
  border-radius: 4px;
  border: 1px solid #e3e4e8;
  padding: 10px 12px;
  outline: none;
  &:focus-within {
    border-color: ${({theme:e})=>e.palette.primary.main};
  }
`,qg=i(po).attrs({width:16,height:16})`
  margin-left: auto;
`,Qt=i.div`
  > :not(:first-child) {
    margin-top: 20px;
  }
  display: flex;
  flex-direction: column;

  ${({error:e})=>e&&z`
      ${pi}, ${ui} {
        border-color: ${({theme:t})=>t.palette.alert.main};
      }
    `}
`,$m=i(Qt)`
  margin-top: 0;
`,Pn=i.div``,Zg=i.input`
  outline: none;
  border: none;
`;var Wg=i.div`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  background: ${({theme:e})=>e.palette.base.shade4};
  border-radius: 28px;
  margin: 0.25rem;
  cursor: pointer;
`,Yg=i.span`
  margin: 0 0.5rem;
`,Qg=i(mt).attrs({width:12,height:12})`
  fill: ${({theme:e})=>e.palette.base.shade1};
`,Kg=i($)`
  padding: 0.4rem 0.55rem;
  border-radius: 10rem;
`;var I_=({categoryId:e,name:t,fileUrl:o,onClick:r,onRemove:n})=>{let s=useCallback(l=>{l.stopPropagation(),e&&(r==null||r(e));},[r,e]),a=useCallback(l=>{l.stopPropagation(),e&&(n==null||n(e));},[n,e]);return q.createElement(Wg,{onClick:s},q.createElement(J,{size:"tiny",avatar:o,backgroundImage:J1}),q.createElement(Yg,null,t),!!n&&q.createElement(Kg,{onClick:a},q.createElement(Qg,null)))},Xg=I_;var S_=({categoryId:e,onClick:t,onRemove:o})=>{let r=Mn(e),n=_({fileId:r==null?void 0:r.avatarFileId,imageSize:"small"});return r==null?null:q.createElement(Xg,{categoryId:r.categoryId,name:r.name,fileUrl:n,onClick:s=>t==null?void 0:t(s),onRemove:o})},Rg=S_;function a1(e){let r=be({fetcher:CategoryRepository.getCategories,params:e}),{items:t}=r,o=I(r,["items"]);return d({categories:t},o)}var E_=({"data-qa-anchor":e="",value:t,onChange:o,parentContainer:r=null})=>{let n=t!=null?t:[],[s,a]=useState(!1),[l,m]=useState(""),c=()=>a(!s),{formatMessage:u}=useIntl(),f=useRef(null),p=C=>{var x;m(C),a(!!C),C&&((x=f.current)==null||x.focus());},g=()=>{m(""),a(!1);},{categories:y}=a1({includeDeleted:!1,limit:100}),v=y.filter(C=>l?C.name.includes(l):!0).map(C=>({name:C.name,value:C.categoryId})),h=n.map(C=>{var x;return {name:((x=y.find(M=>M.categoryId===C))==null?void 0:x.name)||"",value:C}});return q.createElement(sr,{"data-qa-anchor":`${e}-category`,value:h,options:v,renderTrigger:S=>{var b=S,{selected:C,remove:x}=b,M=I(b,["selected","remove"]);return q.createElement(Gg,T(d({},M),{onClick:c,"data-qa-anchor":`${e}-category-selector`}),C.map(P=>q.createElement(Rg,{key:P.value,categoryId:P.value,onRemove:()=>x(P,o)})),q.createElement(Zg,{ref:f,"data-qa-anchor":"category-selector-input",type:"text",value:l,placeholder:u({id:"selectACategory"}),onChange:P=>p(P.target.value)}),q.createElement(qg,null))},renderItem:({value:C})=>q.createElement($g,{categoryId:C}),parentContainer:r,isOpen:s,handleClose:g,multiple:!0,onSelect:({value:C})=>{var x;m(""),(x=f.current)==null||x.focus(),o==null||o([...new Set([...n,C])]);}})},Gm=e=>{let t=N("CategorySelector");return t?t(e):q.createElement(E_,d({},e))};var A_=1,Zm=(e,t=A_)=>{let[o,r]=useState([]),[n,s]=useState(!1),[a,l]=useState(!1),[m,c]=useState(!1),u=useRef(null),f=useRef(null),p=()=>{u.current&&(u.current(),c(!0));};return useEffect(()=>{if(e.length<t)return;f.current&&(f.current(),f.current=null);let g=UserRepository.searchUserByDisplayName({displayName:e,limit:10},y=>{l(y.hasNextPage||!1),s(y.loading),u.current=y.onNextPage||null,r(y.data);});return f.current=g,()=>{var y;(y=f.current)==null||y.call(f),f.current=null;}},[e,t]),{users:o,isLoading:n,hasMore:a,loadMore:p,loadMoreHasBeenCalled:m}};var oy=i.div`
  display: grid;
  grid-template-areas: 'avatar title' 'avatar subtitle';
  grid-template-columns: min-content auto;
  grid-template-rows: min-content min-content;
  grid-gap: 0 0.5em;
  padding: 1em;
  ${({noSubtitle:e})=>!e&&z`
      grid-template-areas: 'avatar title';
      align-items: center;
    `}
`,ry=i(J)`
  grid-area: avatar;
`,ny=i.div`
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
`,iy=i.div`
  grid-area: subtitle;
  ${({theme:e})=>e.typography.body}
`;var B_=({userId:e,displayName:t,avatarFileUrl:o,children:r,onClick:n,isBanned:s})=>{let a=()=>e&&(n==null?void 0:n(e));return q.createElement(oy,{noSubtitle:!!r},q.createElement(ry,{avatar:o,backgroundImage:ce,onClick:a}),q.createElement(ny,{title:e||void 0,onClick:a},q.createElement("div",null,t)," ",s&&q.createElement($t,null)),r&&q.createElement(iy,null,r))},Wm=e=>{let t=N("UserHeader");return t?t(e):q.createElement(B_,d({},e))};var D_=({userId:e,children:t,onClick:o,isBanned:r=!1})=>{let n=j(e),s=_({fileId:n==null?void 0:n.avatarFileId,imageSize:"small"});return q.createElement(Wm,{userId:n==null?void 0:n.userId,displayName:n==null?void 0:n.displayName,avatarFileUrl:s,isBanned:r,onClick:o},t)},mr=D_;var ay=i.div`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  background: ${({theme:e})=>e.palette.base.shade4};
  border-radius: 28px;
  margin: 0.25rem;
  cursor: pointer;
`,sy=i.span`
  margin: 0 0.5rem;
`,ly=i(mt).attrs({width:12,height:12})`
  fill: ${({theme:e})=>e.palette.base.shade1};
`,my=i($)`
  padding: 0.4rem 0.55rem;
  border-radius: 10rem;
`;var z_=({userId:e,displayName:t="Anonymous",fileUrl:o,onClick:r,onRemove:n})=>{let s=useCallback(l=>{l.stopPropagation(),e&&(r==null||r(e));},[r,e]),a=useCallback(l=>{l.stopPropagation(),e&&(n==null||n(e));},[n,e]);return q.createElement(ay,{onClick:s},q.createElement(J,{size:"tiny",avatar:o,backgroundImage:ce}),q.createElement(sy,null,t),!!n&&q.createElement(my,{onClick:a},q.createElement(ly,null)))},cy=e=>{let t=N("UserChip");return t?t(e):q.createElement(z_,d({},e))};var __=({userId:e,onClick:t,onRemove:o})=>{let r=j(e),n=_({fileId:r==null?void 0:r.avatarFileId,imageSize:"small"});return r==null?null:q.createElement(cy,{userId:r.userId,displayName:r.displayName,fileUrl:n,onClick:s=>t==null?void 0:t(s),onRemove:o})},py=__;var uy=i.div`
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
`,fy=i.input`
  outline: none;
  border: none;
  width: 100%;
`;var V_=({value:e,onChange:t,parentContainer:o=null})=>{let r=e!=null?e:[],{currentUserId:n}=H(),[s,a]=useState(!1),[l,m]=useState(""),{users:c=[]}=Zm(l),{formatMessage:u}=useIntl(),f=c.filter(({displayName:h,userId:C})=>(h==null?void 0:h.toLowerCase().includes(l.toLowerCase()))&&C!==n).map(({displayName:h,userId:C})=>({name:h,value:C})),p=r.map(h=>{var C;return {name:((C=c.find(x=>x.userId===h))==null?void 0:C.displayName)||"",value:h}}),g=()=>{a(!1),m("");},y=useRef(null),v=h=>{var C;m(h),a(!!h),h&&((C=y.current)==null||C.focus());};return q.createElement(sr,{"data-qa-anchor":"user",value:p,options:l?f:[],renderTrigger:M=>{var S=M,{selected:h,remove:C}=S,x=I(S,["selected","remove"]);return q.createElement(uy,d({},x),h.map(b=>q.createElement(py,{key:b.value,userId:b.value,onRemove:()=>C(b,t)})),q.createElement(fy,{ref:y,"data-qa-anchor":"user-selector-input",type:"text",value:l,placeholder:u({id:"UserSelector.placeholder"}),onChange:b=>v(b.target.value)}))},renderItem:({value:h})=>q.createElement(mr,{userId:h}),parentContainer:o,isOpen:s,handleClose:g,multiple:!0,onSelect:({value:h})=>{var C;t==null||t([...new Set([...r,h])]),(C=y.current)==null||C.focus(),m("");}})},Tn=memo(e=>{let t=N("UserSelector");return t?t(e):q.createElement(V_,d({},e))});var Cy=Uo.object({displayName:Uo.string().max(30),description:Uo.string().max(180),categoryIds:Uo.string().array().min(1),avatarFileId:Uo.string().nullable().optional(),tags:Uo.string().array().optional(),isPublic:Uo.boolean()}),$_=Cy.extend({userIds:Uo.string().array().optional()}).refine(e=>{var t;return !(!e.isPublic&&((t=e.userIds)==null?void 0:t.length)===0)}),G_=Cy.partial(),vy=()=>useForm({defaultValues:{avatarFileId:void 0,description:"",displayName:"",isPublic:!0,tags:[],userIds:[],categoryIds:[]},resolver:zodResolver($_)}),xy=e=>useForm({defaultValues:{avatarFileId:e.avatarFileId,description:e.description,displayName:e.displayName,isPublic:e.isPublic,tags:e.tags,categoryIds:e.categoryIds},resolver:zodResolver(G_)});var pc=({title:e,children:t})=>q.createElement(wn,null,q.createElement(Sn,null,t)),by=({type:e,description:t,icon:o})=>q.createElement(jm,null,q.createElement(Um,null,o),q.createElement("div",null,e,q.createElement(Vm,null,t))),Y_=({"data-qa-anchor":e="",className:t,onSubmit:o,onCancel:r})=>{let[n,s]=useState(!1),{register:a,handleSubmit:l,setError:m,watch:c,control:u,formState:f,setValue:p,getValues:g}=vy(),{errors:y}=f,v=c("displayName"),h=c("description"),C=c("isPublic"),x=useRef(null),M=P=>w(void 0,null,function*(){var k;try{if(s(!0),!P.isPublic&&((k=P.userIds)==null?void 0:k.length)===0){m("userIds",{message:"Please select at least one member"});return}yield o==null?void 0:o(T(d({},P),{displayName:P.displayName||"",avatarFileId:P.avatarFileId||void 0}));}finally{s(!1);}}),S=!f.isValid||n,b=x.current&&x.current.scrollHeight-x.current.clientHeight-x.current.scrollTop;return q.useLayoutEffect(()=>{b!=null&&x.current&&b<10&&x.current.scrollHeight-x.current.clientHeight-x.current.scrollTop>10&&x.current.scrollTo({top:x.current.scrollHeight});},[x.current,b,f]),q.createElement(In,{className:t,onSubmit:l(M)},q.createElement(Pn,{ref:x},q.createElement(pc,{title:"General"},q.createElement(Qt,null,q.createElement(Controller,{name:"avatarFileId",control:u,render:A=>{var {field:L}=A,O=L,k=I(O,["ref"]);return q.createElement(bn,T(d({mimeType:"image/png, image/jpeg"},k),{"data-qa-anchor":e}))}})),q.createElement(Qt,{error:y.displayName},q.createElement(zr,null,q.createElement(ho,{htmlFor:"displayName",className:"required"},q.createElement(FormattedMessage,{id:"community.name"})),q.createElement(Dr,null,v.length,"/30")),q.createElement(ui,T(d({},a("displayName")),{"data-qa-anchor":`${e}-community-name-input`,placeholder:"Enter community name"})),q.createElement(Yt,{errors:y,name:"displayName"})),q.createElement(Qt,{error:y.description},q.createElement(zr,null,q.createElement(ho,{htmlFor:"description"},q.createElement(FormattedMessage,{id:"community.about"})),q.createElement(Dr,null,(h==null?void 0:h.length)||0,"/180")),q.createElement(pi,T(d({},a("description",{maxLength:{value:180,message:"Description text is too long"}})),{"data-qa-anchor":`${e}-community-description-textarea`,placeholder:"Enter description"})),q.createElement(Yt,{errors:y,name:"description"})),q.createElement(Qt,{error:y.categoryIds},q.createElement(ho,{htmlFor:"categoryIds",className:"required"},q.createElement(FormattedMessage,{id:"community.category"})),q.createElement(Controller,{rules:{required:"Category is required"},name:"categoryIds",render:L=>{var {field:O}=L,Y=O,A=I(Y,["ref","onChange"]);return q.createElement(Gm,T(d({parentContainer:x.current,onChange:B=>p("categoryIds",B,{shouldValidate:!0})},A),{"data-qa-anchor":`${e}`}))},control:u}),q.createElement(Yt,{errors:y,name:"category"}))),q.createElement(pc,{title:q.createElement(FormattedMessage,{id:"community.categorypermission"})},q.createElement(Controller,{name:"isPublic",render:({field:P})=>q.createElement(q.Fragment,null,q.createElement(Ia,T(d({},P),{value:P.value===!0,onChange:k=>P.onChange(k.target.checked),"data-qa-anchor":"community-form-public-type-community-type",label:"Public",renderer:()=>q.createElement(by,{type:"Public",description:"Anyone can join, view and search the posts in this page.",icon:q.createElement(Om,null)})})),q.createElement(Ia,T(d({},P),{value:P.value===!1,onChange:k=>P.onChange(!k.target.checked),"data-qa-anchor":"community-form-private-type-community-type",label:"Private",renderer:()=>q.createElement(by,{type:"Private",description:"Only members invited by the moderators can join, view, and search the posts in this page.",icon:q.createElement(_m,null)})}))),control:u})),!C&&q.createElement(pc,{title:"Community members"},q.createElement($m,{error:y.userIds},q.createElement(ho,{className:"required"},q.createElement(FormattedMessage,{id:"community.addmembers"})),q.createElement(Controller,{name:"userIds",render:A=>{var {field:L}=A,O=L,k=I(O,["ref"]);return q.createElement(Tn,d({parentContainer:x.current,"data-qa-anchor":e},k))},control:u}),q.createElement(Yt,{errors:y,name:"userIds"})))),q.createElement(Pa,null,q.createElement($,{onClick:P=>{P.preventDefault(),r==null||r();}},q.createElement(FormattedMessage,{id:"cancel"})),q.createElement(Sa,{"data-qa-anchor":`${e}-save-button`,disabled:S},q.createElement(FormattedMessage,{id:"create"}))))},Qm=memo(Y_);var X_=({isOpen:e,onClose:t})=>{let{formatMessage:o}=useIntl();if(!e)return null;let r=()=>me({title:o({id:"CommunityCreationModal.title"}),content:o({id:"CommunityCreationModal.content"}),cancelText:o({id:"CommunityCreationModal.cancelText"}),okText:o({id:"CommunityCreationModal.okText"}),onOk:t});return q.createElement(dt,{"data-qa-anchor":"community-creation-modal",title:"Create community",onCancel:r},q.createElement(Qm,{"data-qa-anchor":"community-creation",onCancel:r,onSubmit:s=>w(void 0,null,function*(){let a=yield CommunityRepository.createCommunity(s);t(a.data.communityId);})}))},My=memo(e=>{let t=N("CommunityCreationModal");return t?t(e):q.createElement(X_,d({},e))});var tU=({className:e,activeCommunity:t})=>{let{socialCommunityCreationButtonVisible:o}=r7(),{onCommunityCreated:r}=V(),[n,s]=useState(!1);return q.createElement(zm,{heading:q.createElement(FormattedMessage,{id:"SideSectionMyCommunity.myCommunity"})},o&&q.createElement(r1,{"data-qa-anchor":"side-section-my-community-create-community-button",icon:q.createElement(jt,{height:"20px"}),element:"button",onClick:()=>s(!0)},q.createElement(FormattedMessage,{id:"createCommunity"})),q.createElement(zg,{className:e,communitiesQueryParam:{membership:"member",limit:20},activeCommunity:t}),q.createElement(My,{isOpen:n,onClose:m=>{s(!1),m&&r(m);}}))},wy=memo(tU);var iU=i.div`
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
`,aU=i.div`
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
`,sU=({items:e,onPick:t=()=>{},append:o,renderItem:r=n=>q.createElement("span",null,n)})=>{let n=useRef(null),[s,a]=useState(-1),l=p=>()=>a(p),m=()=>a(-1),c=p=>()=>t(p),u=()=>{if(n.current==null)return;let p=s>0?s-1:e.length-1,{scrollTop:g,clientHeight:y}=n.current,v=n.current.children[p],h=(v==null?void 0:v.clientTop)||0,C=(v==null?void 0:v.clientHeight)||0;(h<g||h+C>g+y)&&n.current.scrollTo(0,h),a(p);},f=()=>{if(n.current==null)return;let p=s<e.length-1?s+1:0,{scrollTop:g,clientHeight:y}=n.current,v=n.current.children[p],h=(v==null?void 0:v.clientTop)||0,C=(v==null?void 0:v.clientHeight)||0;(h<g||h+C>g+y)&&n.current.scrollTo(0,h+C-y),a(p);};return Gt("ArrowUp",u),Gt("ArrowDown",f),Gt("Escape",()=>a(-1)),Gt("Enter",()=>t==null?void 0:t(s)),e.length?q.createElement(iU,{ref:n,onMouseLeave:m},e.map((p,g)=>q.createElement(zt,{key:`#${g}`,hover:g===s,onClick:c(g),onMouseEnter:l(g)},r(p))),o&&q.createElement(zt,null,o)):q.createElement(aU,{"data-qa-anchor":"suggestions-placeholder-no-results"},q.createElement(FormattedMessage,{id:"placeholder.noResults"}))},s1=sU;var mU=i.div`
  position: relative;
`,dU=i(ar)`
  z-index: 10;
  position: absolute;
  top: calc(100% + 0.25rem);
  width: 100%;
  color: ${({theme:e})=>e.palette.base.main};
`;var Py=({value:e,disabled:t})=>{let[o,r]=useState(!1),[n,s]=vs(o),a=()=>r(!1),l=()=>r(!0);return useEffect(()=>{t||e&&e.length>0&&r(!0);},[e,t]),useEffect(()=>{!s&&a();},[s]),Gt("Escape",a),{isOpen:o,open:l,close:a,containerRef:n}},cU=({"data-qa-anchor":e="",items:t,value:o,searchValue:r,placeholder:n,loadMore:s,prepend:a,append:l,invalid:m,disabled:c,renderItem:u,onSearchValueChange:f,onClear:p,onChange:g})=>{let[y,v]=useState(!1),[h,C]=vs(y),x=()=>v(!1);return useEffect(()=>{c||r.length>0&&v(!0);},[r,c]),useEffect(()=>{!C&&x();},[C]),Gt("Escape",x),q.createElement(mU,{ref:h},q.createElement(We,{"data-qa-anchor":e,value:r,invalid:m,disabled:c,prepend:a,append:l,placeholder:n,onClear:p,onChange:b=>f==null?void 0:f(b.plainText),onClick:()=>v(!0)}),y&&q.createElement(dU,null,q.createElement(s1,{items:t,append:s&&q.createElement($,{fullWidth:!0,onClick:s},q.createElement(FormattedMessage,{id:"loadMore"})),onPick:b=>{g==null||g(t[b].value),v(!1),f==null||f("");},renderItem:b=>u(b)})))},Ty=cU;var ky=i.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`,Ey=i(rn).attrs({width:16,height:16})`
  fill: ${({theme:e})=>e.palette.base.shade2};
`,Ny=i.div`
  position: relative;

  ${({sticky:e})=>e&&z`
      z-index: 500;
      position: sticky;
      top: 0;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    `};
`;i(Ty)`
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
`;var Jm=i.nav`
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px 4px 0 0;
  border: 1px solid #edeef2;
`,Xm=i.ul`
  margin: 0;
  padding: 0 16px;
  list-style-type: none;
`,Rm=i.li`
  display: inline-block;
`,e2=i.button`
  padding: 0.75em;
  margin-right: 0.5em;
  background-color: #ffffff;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  outline: none;
  color: ${({theme:e})=>e.v4.colors.base.shade3};
  text-align: center;

  &:hover {
    color: #818698;
  }

  &.active {
    ${({theme:e})=>`
      border-bottom: 2px solid ${e.v4.colors.primary.default};
      color: ${e.v4.colors.primary.default};
    `}
  }

  &:disabled {
    color: #abaeba;
  }

  transition: border-color 0.3s;
`;var uU=({"data-qa-anchor":e="",className:t="",tabs:o,activeTab:r,onChange:n})=>q.createElement(Jm,{className:t},q.createElement(Xm,{"data-qa-anchor":`${e}-tabs-list`},o.map(({value:s,label:a})=>q.createElement(Rm,{key:s,"data-qa-anchor":`${e}-${s}-tab-item`},q.createElement(e2,{"data-qa-anchor":s===r?`${e}-${s}-tab-button-active`:`${e}-${s}-tab-button`,className:s===r?"active":"",onClick:()=>n(s)},a))))),Kt=memo(e=>{let t=N("Tabs");return t?t(e):q.createElement(uU,d({},e))});var fU=i.div`
  position: relative;
`,Ay=i(ar)`
  z-index: 10;
  position: absolute;
  top: calc(100% + 0.25rem);
  width: 100%;
  color: ${({theme:e})=>e.palette.base.main};
`,gU=({searchValue:e,isOpen:t})=>{let{onClickCommunity:o}=V(),{communities:r,hasMore:n,loadMore:s}=lr({displayName:e}),a=r.filter(ge),l=a.map(m=>m.displayName);return t?q.createElement(Ay,null,q.createElement(s1,{items:l,append:n&&s?q.createElement($,{fullWidth:!0,onClick:s},q.createElement(FormattedMessage,{id:"loadMore"})):null,onPick:m=>a[m]?o(a[m].communityId):null,renderItem:m=>{let c=r.find(u=>u.displayName===m);return c&&q.createElement(n1,{communityId:c.communityId})}})):null},yU=({searchValue:e,isOpen:t})=>{let{onClickUser:o}=V(),{users:r,hasMore:n,loadMore:s}=Zm(e),a=r.filter(ge),l=a.map(m=>m.displayName);return t?q.createElement(Ay,null,q.createElement(s1,{items:l,append:n&&s?q.createElement($,{fullWidth:!0,onClick:s},q.createElement(FormattedMessage,{id:"loadMore"})):null,onPick:m=>a[m]?o(a[m].userId):null,renderItem:m=>{let c=r.find(u=>u.displayName===m);return c&&q.createElement(mr,{userId:c.userId,isBanned:c==null?void 0:c.isGlobalBanned})}})):null},hU=({className:e,sticky:t=!1,searchBy:o})=>{let[r,n]=useState(""),[s,a]=useState(o),{open:l,close:m,isOpen:c,containerRef:u}=Py({value:r});function f(){n("");}return q.createElement(Ny,{className:e,sticky:t},q.createElement(FormattedMessage,{id:"exploreHeader.searchCommunityPlaceholder"},([p])=>q.createElement(fU,{ref:u},q.createElement(We,{"data-qa-anchor":"social-search-input",value:r,prepend:q.createElement(ky,null,q.createElement(Ey,null)),placeholder:typeof p=="string"?p:void 0,onClear:f,onChange:g=>n==null?void 0:n(g.plainText),onClick:()=>l()}),c?q.createElement(Kt,{tabs:[{value:"communities",label:"Communities"},{value:"accounts",label:"Accounts"}],activeTab:s,onChange:g=>a(g)}):null,s==="communities"?q.createElement(gU,{searchValue:r,isOpen:c}):null,s==="accounts"?q.createElement(yU,{searchValue:r,isOpen:c}):null)))},By=e=>{let t=N("SocialSearch");return t?t(e):q.createElement(hU,d({},e))};var CU=i(By)`
  background: ${({theme:e})=>e.palette.system.background};
  padding: 0.5rem;
`,vU=({className:e,activeCommunity:t})=>q.createElement(bg,{"data-qa-anchor":"community-side-menu",className:e},q.createElement(CU,{sticky:!0,searchBy:"communities"}),q.createElement(Pg,null),q.createElement(wy,{activeCommunity:t})),o2=vU;var yc=16,wU={720:1,1024:2,1280:3,1440:4,1800:5},SU=i.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 16px 0;
  align-items: flex-end;
`,PU=i.h2`
  ${({theme:e})=>e.typography.headline};
  display: inline-block;
  margin: 0;
`,TU=i.div`
  display: flex;
  gap: 20px;
`,Dy=i($).attrs({variant:"secondary"})`
  width: 28px;
  padding: 2px;

  &:hover {
    background-color: transparent;
  }

  &:disabled {
    color: ${({theme:e})=>e.palette.neutral.shade3};
  }
`,kU=i.div`
  overflow-x: hidden;
`;function EU(e,t){let r=Object.entries(t).sort(([n],[s])=>Number(n)-Number(s)).find(([n])=>e<=Number(n));return r?r[1]:3}var NU=i.div`
  margin-bottom: 0.188rem; // give the shadow a little space
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  grid-gap: ${yc}px;

  ${({currentWidth:e,columns:t})=>{let o=EU(e,t);return z`
      grid-auto-columns: calc(
        (100% / ${o}) - (${yc}px * ${o-1} / ${o})
      );
    `}}
`,LU=({title:e="",children:t,columns:o=wU,hasMore:r=!1,loadMore:n=()=>{}})=>{var v,h;let s=useRef(null),{x:a}=IU(s),[l,{width:m}]=MU(),[c,u]=useState(0),f=(h=(v=s.current)==null?void 0:v.scrollWidth)!=null?h:0,p=useMemo(()=>f>m,[f,m]),g=useMemo(()=>a>=f-m,[a,f,m]),y=useMemo(()=>a===0,[a]);return useEffect(()=>{var C;return (C=s.current)==null?void 0:C.scrollTo({left:(m+yc)*c,behavior:"smooth"})},[m,c]),useEffect(()=>{a>=f-m*2&&r&&n();},[a,f,m,r,n]),q.createElement("div",{ref:l},q.createElement(SU,null,q.createElement(PU,null,e),p&&q.createElement(TU,null,q.createElement(Dy,{disabled:y,onClick:()=>u(c-1)},q.createElement(Ro,{height:"20px",width:"20px"})),q.createElement(Dy,{disabled:g,onClick:()=>u(c+1)},q.createElement(nn,{height:"20px",width:"20px"})))),q.createElement(kU,{ref:s,page:c},s.current?q.createElement(NU,{currentWidth:s.current.clientWidth,columns:o},t):null))},r2=LU;var zy=i.div`
  min-width: 278px;
  min-height: 289px;
  cursor: pointer;
  box-shadow: 0 0 1px rgba(40, 41, 61, 0.08), 0 0.5px 2px rgba(96, 97, 112, 0.16);
  border-radius: 8px;
  background: ${({theme:e})=>e.palette.system.background};
  overflow: hidden;
`,Oy=i.div`
  padding-top: 74.46%;
  position: relative;

  ${({backgroundImage:e,theme:t})=>z`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 42.03%, rgba(0, 0, 0, 0.5) 100%),
      ${e?`url(${CSS.escape(e)})`:t.palette.base.shade3};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `}
`,_y=i.div`
  position: absolute;
  bottom: 12px;
  left: 16px;
  right: 16px;
`,Uy=i(vn)`
  color: #ffffff;
  ${({theme:e})=>e.typography.headline}
  line-height: 30px !important;

  * {
    color: #ffffff;
    line-height: 30px !important;
    padding: 0;
  }
`,Hy=i.div`
  word-break: break-word;
  color: #ffffff;
  margin-bottom: 0;
  line-height: 20px;
  ${({theme:e})=>e.typography.body}
`,jy=i.div`
  padding: 12px 16px;
`;i.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;var Vy=i.div`
  color: ${({theme:e})=>e.palette.neutral.shade1};
  ${({theme:e})=>e.typography.caption}
  margin-bottom: 4px;
`,$y=i.div`
  ${({theme:e})=>e.typography.caption}
`;var FU=f=>{var p=f,{avatarFileUrl:e,community:t,communityCategories:o,membersCount:r,description:n,onClick:s,isOfficial:a,isPublic:l,name:m,loading:c}=p,u=I(p,["avatarFileUrl","community","communityCategories","membersCount","description","onClick","isOfficial","isPublic","name","loading"]);return q.createElement(zy,d({onClick:()=>(t==null?void 0:t.communityId)&&(s==null?void 0:s(t.communityId))},u),q.createElement(Oy,{backgroundImage:e},q.createElement(_y,null,q.createElement(Uy,{isOfficial:a,isPublic:l,isTitle:!0,name:m,truncate:2}),q.createElement(v6,{lines:1},q.createElement(Hy,null,(o||[]).map(y=>y.name).join(", "))))),q.createElement(jy,null,c&&q.createElement(de,{style:{fontSize:8}}),!c&&q.createElement(Vy,null,bp(r||0)," ",q.createElement(FormattedMessage,{id:"plural.member",values:{amount:r}})),!c&&n?q.createElement(v6,{lines:2},q.createElement($y,null,n)):null))},La=e=>{let t=N("UICommunityCard");return t?t(e):q.createElement(FU,d({},e))};var _U=e=>{let[t,o]=useState([]);return useEffect(()=>{function r(){return w(this,null,function*(){if(e==null||e.length===0)return;let n=yield Promise.all(e.map(s=>w(this,null,function*(){return (yield CategoryRepository.getCategory(s)).data})));o(n);})}r();},[e]),t},Aa=_U;var HU=r=>{var n=r,{communityId:e,onClick:t}=n,o=I(n,["communityId","onClick"]);var f;let s=Ze(e),a=nt(s==null?void 0:s.avatarFileId),l=Aa((s==null?void 0:s.categoryIds)||[]),m=_({fileId:(f=a==null?void 0:a.fileId)!=null?f:void 0});if(s==null)return q.createElement(q.Fragment,null);let{membersCount:c,description:u}=s;return q.createElement(La,d({avatarFileUrl:m,community:s,communityCategories:l,membersCount:c,description:u,isOfficial:s.isOfficial,isPublic:s.isPublic,name:s.displayName,onClick:t},o))},n2=memo(HU);function Cc(e){let r=be({fetcher:CommunityRepository.getRecommendedCommunities,params:T(d({},e),{limit:(e==null?void 0:e.limit)||10})}),{items:t}=r,o=I(r,["items"]);return d({communities:t},o)}var GU=()=>{let{onClickCommunity:e}=V(),{communities:t,isLoading:o}=Cc(),r=o?q.createElement(de,{style:{fontSize:12,maxWidth:156}}):q.createElement(FormattedMessage,{id:"recommendedList"});return t!=null&&t.length?q.createElement(r2,{title:r},o&&new Array(4).fill(1).map((n,s)=>q.createElement(La,{key:s,loading:!0})),!o&&t.map(({communityId:n})=>q.createElement(n2,{key:n,communityId:n,onClick:e}))):null},qy=memo(GU);var WU=i.div`
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
`,YU=i.div`
  padding-left: 100%;

  ${({backgroundImage:e,theme:t})=>`
    background: ${e?`url(${CSS.escape(e)})`:t.palette.base.shade3};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `}
`,QU=i.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`,KU=i.span`
  &:after {
    content: ' • ';
  }
`,JU=i.span`
  font: inherit;
  &:not(:first-child):before {
    content: ' ';
  }
`,XU=i.div`
  ${({theme:e})=>e.typography.caption};
  color: ${({theme:e})=>e.palette.base.shade1};

  & > * {
    font: inherit;
  }
`,RU=i.p`
  margin: 0.5rem 0 0;
  ${({theme:e})=>e.typography.caption}
`,eH=i(vn)`
  ${({theme:e})=>e.typography.title};

  &:before {
    content: counter(trending, decimal-leading-zero);
    margin-right: 0.375em;
  }
`,tH=({avatarFileUrl:e,description:t,categories:o=[],membersCount:r,onClick:n,isOfficial:s,isPublic:a,name:l,loading:m})=>q.createElement(WU,{onClick:n},q.createElement(YU,{backgroundImage:e}),q.createElement(QU,null,m?q.createElement(q.Fragment,null,q.createElement(de,{style:{fontSize:"0.5rem",maxWidth:"7.5rem"}}),q.createElement("div",null,q.createElement(de,{style:{fontSize:"0.5rem",maxWidth:"13.5rem"}})),q.createElement(de,{width:"2.5rem",style:{fontSize:"0.5rem"}}),q.createElement(de,{width:"2.5rem",style:{fontSize:"0.5rem",marginLeft:"0.75rem"}})):q.createElement(q.Fragment,null,q.createElement(eH,{isOfficial:s,isPublic:a,name:l}),q.createElement(XU,null,o.length>0&&q.createElement(v6,{lines:1},q.createElement(KU,null,o.map(c=>q.createElement(JU,{key:c.categoryId},c.name)))),q.createElement("span",null,bp(r||0)," ",q.createElement(FormattedMessage,{id:"plural.member",values:{amount:r}}))),t&&q.createElement(v6,{lines:2},q.createElement(RU,null,t))))),i2=e=>{let t=N("UITrendingItem");return t?t(e):q.createElement(tH,d({},e))};var nH=({communityId:e,onClick:t,loading:o})=>{let r=Ze(e),n=_({fileId:r==null?void 0:r.avatarFileId}),s=Aa(r==null?void 0:r.categoryIds),a=()=>t(e);if(r==null)return null;let{membersCount:l,description:m}=r;return q.createElement(i2,{avatarFileUrl:n,description:m,categories:s,membersCount:l,isOfficial:r.isOfficial,isPublic:r.isPublic,name:r.displayName,loading:o,onClick:a})};var Wy=memo(nH);var iH=i.h2`
  ${({theme:e})=>e.typography.headline};
  margin: 0 0 1rem 0;
`,Yy=iH;function vc(e){let r=be({fetcher:CommunityRepository.getTrendingCommunities,params:T(d({},e),{limit:(e==null?void 0:e.limit)||10})}),{items:t}=r,o=I(r,["items"]);return d({communities:t},o)}var lH=i.ul`
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
`,mH=()=>{let{onClickCommunity:e}=V(),{communities:t,loadMoreHasBeenCalled:o}=vc(),r=o?q.createElement(de,{style:{fontSize:12,maxWidth:156}}):q.createElement(FormattedMessage,{id:"todaysTrendingTitle"}),n=o?new Array(5).fill(1).map((s,a)=>q.createElement("li",{key:a},q.createElement(i2,{loading:!0}))):t.slice(0,5).map(({communityId:s})=>q.createElement("li",{key:s},q.createElement(Wy,{communityId:s,onClick:e})));return q.createElement("div",null,q.createElement(Yy,null,r),q.createElement(lH,null,n))},Qy=mH;var Ky=i.div`
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
`,Jy=i.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
`,Xy=i.h4`
  color: #ffffff;
  ${({theme:e})=>e.typography.title}
  margin: 0;
`;var cH=l=>{var m=l,{categoryId:e,name:t,avatarFileUrl:o,avatarFileId:r,onClick:n,loading:s}=m,a=I(m,["categoryId","name","avatarFileUrl","avatarFileId","onClick","loading"]);let c=()=>e&&(n==null?void 0:n(e)),u=_({fileId:r});return q.createElement(Ky,d({backgroundImage:o||u||void 0,onClick:c},a),q.createElement(Jy,null,s&&q.createElement(de,{style:{fontSize:16}}),!s&&q.createElement(v6,{lines:2},q.createElement(Xy,null,t))))},a2=e=>{let t=N("UICategoryCard");return t?t(e):q.createElement(cH,d({},e))};var fH=s=>{var a=s,{categoryId:e,className:t,loading:o,onClick:r}=a,n=I(a,["categoryId","className","loading","onClick"]);let l=Mn(e),m=_({fileId:l==null?void 0:l.avatarFileId});return q.createElement(a2,d({avatarFileUrl:m,className:t,categoryId:e,name:l==null?void 0:l.name,loading:o,onClick:r},n))};memo(fH);var Ry=i(a2)`
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
`,hH=()=>{let{onClickCategory:e}=V(),{categories:t,hasMore:o,loadMore:r,isLoading:n,loadMoreHasBeenCalled:s}=a1({includeDeleted:!1}),a=useMemo(()=>{function l(){return new Array(6).fill(1).map((m,c)=>({categoryId:c,skeleton:!0}))}return n?l():s?[...t,...l()]:t},[t,n,s]);return q.createElement(r2,{columns:{360:1,720:2,1024:3,1280:5,1440:6,1800:8},title:q.createElement(FormattedMessage,{id:"categoryList"}),hasMore:o,loadMore:r},a.map(l=>fo(l)?q.createElement(Ry,{key:l.categoryId,loading:!0}):q.createElement(Ry,{key:l.categoryId,categoryId:l.categoryId,name:l.name,avatarFileId:l.avatarFileId,onClick:e})))},eh=hH;var th=i.div`
  max-width: 1450px;
  margin: 0 auto;
  padding: 30px 0;
  overflow-x: hidden;
  overflow-y: auto;

  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;
`;var CH=()=>q.createElement(th,null,q.createElement(qy,null),q.createElement(Qy,null),q.createElement(eh,null)),oh=CH;var rh=i.div`
  height: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 28px 0;
  overflow-y: auto;
`,m2=i.h2`
  ${({theme:e})=>e.typography.headline};
`,d2=i.div`
  @media (min-width: 768px) {
    /* Updated media query for screens wider than 767px */
    display: none; /* Hide on desktop and tablet */
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 0.975rem;
    background: #fff;
    height: 58px;
    padding: 1rem;
  }
`,c2=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: ${({isOpen:e})=>e?1:0};
  visibility: ${({isOpen:e})=>e?"visible":"hidden"};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  cursor: pointer;
`,p2=i(o2)`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
  height: 100%;
  z-index: 999;
  transform: translateX(${({isOpen:e})=>e?0:"-100%"});
  transition: transform 0.3s ease-in-out;
`;var xH=({isOpen:e,toggleOpen:t})=>{let{onChangePage:o}=V(),{formatMessage:r}=useIntl();return q.createElement(rh,{"data-qa-anchor":"news-feed"},q.createElement(c2,{isOpen:e,onClick:t}),q.createElement(p2,{isOpen:e}),q.createElement(d2,null,q.createElement(en,{onClick:t}),q.createElement(m2,null,r({id:"sidebar.community"}))),q.createElement(hn,{targetType:"globalFeed",goToExplore:()=>o("explore"),showPostCreator:!0}))},nh=xH;var ih=21;var ah=[{value:"image",label:q.createElement(FormattedMessage,{id:"tabs.images"})},{value:"video",label:q.createElement(FormattedMessage,{id:"tabs.videos"})},{value:"liveStream",label:q.createElement(FormattedMessage,{id:"tabs.liveStreams"})}],sh={image:q.createElement(R1,null),video:q.createElement(tl,null),liveStream:q.createElement(el,null)},lh={image:q.createElement(FormattedMessage,{id:"mediaGallery.images.empty"}),video:q.createElement(FormattedMessage,{id:"mediaGallery.videos.empty"}),liveStream:q.createElement(FormattedMessage,{id:"mediaGallery.liveStreams.empty"})};var mh=i(Kt)`
  &${Jm} {
    border: none;
  }

  ${Xm} {
    padding: 0;
  }

  ${Rm} {
    &:not(:first-child) {
      margin-left: 0.75em;
    }
  }

  ${e2} {
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
`;var dh=i.div`
  padding: 1.25em 1em;
  background: ${({theme:e})=>e.palette.system.background};
  border: 1px solid ${({theme:e})=>e.palette.system.borders};
  border-radius: 0.25em;
`,ch=i(mh)`
  margin-bottom: 1em;
`;function xc({targetId:e,targetType:t,dataType:o,limit:r}){let a=be({fetcher:PostRepository.getPosts,params:{targetId:e,targetType:t,dataTypes:[o],limit:r},shouldCall:()=>!!e&&!!t}),{items:n}=a,s=I(a,["items"]);return d({media:n},s)}var wH=({targetId:e,targetType:t})=>{let[o,r]=useState("image"),{media:n,isLoading:s,hasMore:a,loadMore:l,loadMoreHasBeenCalled:m}=xc({targetId:e||void 0,targetType:t,dataType:o,limit:ih});return q.createElement(dh,null,q.createElement(ch,{activeTab:o,tabs:ah,onChange:c=>r(c)}),(s||m||n.length>0)&&q.createElement(ct,{hasMore:a,loadMore:l,className:"load-more no-border",contentSlot:q.createElement(ni,{items:n,loading:s,loadingMore:m,renderVideoThumbnail:c=>q.createElement(oi,{item:c,showPlayIcon:!0,showVideoDuration:!0}),renderLiveStreamThumbnail:c=>q.createElement(ri,{item:c,showPlayIcon:!0,showLivestreamTitle:!0,showLivestreamRecordedBadge:!0})})}),!s&&!m&&n.length===0&&q.createElement(ir,{icon:sh[o],title:lh[o]}))},u2=memo(e=>{let t=N("MediaGallery");return t?t(e):q.createElement(wH,d({},e))});var PH=i(Kt)`
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px 4px 0 0;
  border: 1px solid #edeef2;
  margin-bottom: 12px;
`,f2=e=>{let t=N("FeedHeaderTabs");return t?t(e):q.createElement(PH,d({},e))};var ph=i(Kt)`
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px 4px 0 0;
  border: 1px solid #edeef2;
  margin-bottom: 12px;
`,Da=i.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;

  > * {
    width: 100%;
  }
`,uh=i.div`
  display: flex;
  padding: 15px;

  border-top: 1px solid ${({theme:e})=>e.palette.base.shade4};

  > *:first-child {
    margin-right: 10px;
  }
`,za=i.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > * {
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }
`,g2=i.div`
  display: flex;
  align-items: center;
`,y2=i(ir)`
  width: 100%;
`;var kH=i.button`
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
`;function Ur({onClick:e}){return q.createElement(kH,{onClick:t=>{t.preventDefault(),e==null||e();}},q.createElement(FormattedMessage,{id:"loadMore"})," ",q.createElement(po,{height:".8em"}))}var AH=e=>{let[t,o]=useState(!1),{data:r,isLoading:n,refetch:s}=useQuery({queryKey:["asc-uikit","UserRepository","isUserFlaggedByMe",e],queryFn:()=>UserRepository.isUserFlaggedByMe(e),enabled:e!=null});useEffect(()=>{r!=null&&o(r);},[r]);let a=()=>w(void 0,null,function*(){if(e!=null)try{yield UserRepository.flagUser(e);}catch(c){o(!1);}finally{s();}}),l=()=>w(void 0,null,function*(){if(e!=null)try{yield UserRepository.unflagUser(e),o(!1);}catch(c){o(!0);}finally{s();}});return {isLoading:n,isFlaggedByMe:t,flagUser:a,unflagUser:l,toggleFlagUser:()=>w(void 0,null,function*(){e!=null&&(t?l():a());})}},En=AH;function d1({userId:e,callback:t}){let o=j(e),r=useRef(null);useEffect(()=>{if(o!=null)return r.current=subscribeTopic(k8(o),t),()=>{var n;(n=r.current)==null||n.call(r);}},[]);}function Ic({userId:e,status:t}){let n=be({fetcher:UserRepository.Relationship.getFollowings,params:{userId:e,status:t!=null?t:void 0},shouldCall:()=>!!e}),{items:o}=n,r=I(n,["items"]);return d({followings:o},r)}var HH=({profileUserId:e,currentUserId:t,userId:o,onClick:r})=>{let n=j(o),{onClickUser:s}=V(),{formatMessage:a}=useIntl(),{isFlaggedByMe:l,toggleFlagUser:m}=En(o),c=()=>w(void 0,null,function*(){yield m(),Z.success({content:q.createElement(FormattedMessage,{id:"report.reportSent"})});}),u=()=>UserRepository.Relationship.unfollow(o),f=e===t,p=t===o,g=()=>{let h=n!=null&&n.displayName?a({id:"user.unfollow.confirm.title"},{displayName:n.displayName}):a({id:"user.unfollow.confirm.title.thisUser"}),C=n!=null&&n.displayName?a({id:"user.unfollow.confirm.body"},{displayName:n.displayName}):a({id:"user.unfollow.confirm.body.thisUser"});me({title:h,content:C,cancelText:a({id:"buttonText.cancel"}),okText:a({id:"buttonText.unfollow"}),onOk:u});},y=useCallback(()=>{s(o);},[s,o]),v=useMemo(()=>{let h=[];return p||h.push({name:a(l?{id:"report.unreportUser"}:{id:"report.reportUser"}),action:c}),f&&h.push({name:a({id:"follower.menuItem.unfollow"}),action:g}),h},[l,f,p,g,c]);return q.createElement(Da,{key:o},q.createElement(g2,null,q.createElement(mr,{userId:o,onClick:y}),q.createElement(St,{options:v})))};function jH({userId:e}){let{followings:t,isLoading:o,loadMore:r,hasMore:n,loadMoreHasBeenCalled:s}=Ic({userId:e,status:"all"});return d1({userId:e}),{items:useMemo(()=>{function l(){return new Array(5).fill(1).map((m,c)=>({skeleton:!0}))}return o&&!s?l():o&&s?[...t,...l()]:t},[t,o,s]),isLoading:o,hasMore:n,loadMore:r,loadMoreHasBeenCalled:s}}var VH=({userId:e,onItemClick:t})=>{let{formatMessage:o}=useIntl(),{currentUserId:r}=H(),{items:n,loadMore:s,hasMore:a}=jH({userId:e}),l=()=>a?q.createElement(Ur,{onClick:()=>s==null?void 0:s()}):null;return n.length===0?q.createElement(q.Fragment,null,q.createElement(za,null,q.createElement(y2,{icon:q.createElement(Rr,{width:48,height:48}),title:"It's empty here...",description:o({id:"follow.placeholder.noFollowings"})})),l()):q.createElement(q.Fragment,null,q.createElement(za,null,n.map(m=>fo(m)?q.createElement(de,{style:{fontSize:8}}):q.createElement(HH,{key:`${m.from}-${m.to}`,userId:m.to,profileUserId:e,currentUserId:r,onClick:()=>t(m.to)}))),l())},yh=VH;function c1({userId:e,callback:t}){let o=j(e),r=useRef(null);useEffect(()=>{if(o!=null)return r.current=subscribeTopic(T8(o),t),()=>{var n;(n=r.current)==null||n.call(r);}},[]);}function Hr({userId:e,status:t}){let n=be({fetcher:UserRepository.Relationship.getFollowers,params:{userId:e,status:t!=null?t:void 0},shouldCall:()=>!!e}),{items:o}=n,r=I(n,["items"]);return d({followers:o},r)}var QH=({profileUserId:e,currentUserId:t,userId:o,onClick:r})=>{let n=j(o),s=_({fileId:n==null?void 0:n.avatarFileId,imageSize:"small"}),{onClickUser:a}=V(),{formatMessage:l}=useIntl(),{isFlaggedByMe:m,toggleFlagUser:c}=En(o||void 0),u=()=>w(void 0,null,function*(){yield c(),Z.success({content:q.createElement(FormattedMessage,{id:"report.reportSent"})});}),f=()=>{o&&UserRepository.Relationship.declineMyFollower(o);},p=e===t,g=t===o,y=()=>{me({title:q.createElement(FormattedMessage,{id:"follower.title.removeUser",values:{displayName:n==null?void 0:n.displayName}}),content:q.createElement(FormattedMessage,{id:"follower.body.removeUser",values:{displayName:n==null?void 0:n.displayName}}),cancelText:l({id:"buttonText.cancel"}),okText:l({id:"buttonText.remove"}),onOk:f});},v=useCallback(()=>{o!=null&&a(o);},[a,o]),h=useMemo(()=>{let C=[];return g||C.push({name:l(m?{id:"report.unreportUser"}:{id:"report.reportUser"}),action:u}),p&&C.push({name:l({id:"follower.menuItem.removeUser"}),action:y}),C},[m,p,g,y,u]);return q.createElement(Da,{key:o},q.createElement(g2,null,q.createElement(Wm,{userId:n==null?void 0:n.userId,displayName:n==null?void 0:n.displayName,avatarFileUrl:s,onClick:v}),q.createElement(St,{options:h})))};function KH({userId:e}){let{followers:t,isLoading:o,loadMore:r,hasMore:n,loadMoreHasBeenCalled:s}=Hr({userId:e,status:"all"});return c1({userId:e}),{items:useMemo(()=>{function l(){return new Array(5).fill(1).map((m,c)=>({skeleton:!0}))}return o&&!s?l():o&&s?[...t,...l()]:t},[t,o,s]),isLoading:o,hasMore:n,loadMore:r,loadMoreHasBeenCalled:s}}var JH=({userId:e,onItemClick:t})=>{let{formatMessage:o}=useIntl(),{items:r,loadMore:n,hasMore:s}=KH({userId:e}),{currentUserId:a}=H(),l=()=>s?q.createElement(Ur,{onClick:()=>n==null?void 0:n()}):null;return r.length===0?q.createElement(q.Fragment,null,q.createElement(za,null,q.createElement(y2,{icon:q.createElement(Rr,{width:48,height:48}),title:"It's empty here...",description:o({id:"follow.placeholder.noFollowers"})})),l()):q.createElement(q.Fragment,null,q.createElement(za,null,r.map(m=>fo(m)?q.createElement(de,{style:{fontSize:8}}):q.createElement(QH,{key:`${m.from}-${m.to}`,userId:m.from,profileUserId:e,currentUserId:a,onClick:()=>t(m.to)}))),l())},vh=JH;var Oa=i.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`,xh=i(ir)`
  margin-right: auto;
  margin-left: auto;
`;var RH=({userId:e})=>q.createElement(Da,null,q.createElement(mr,{userId:e}),q.createElement(uh,null,q.createElement(oe,{fullWidth:!0,onClick:()=>w(void 0,null,function*(){e&&(yield UserRepository.Relationship.acceptMyFollower(e),Z.success({content:q.createElement(FormattedMessage,{id:"notification.done"})}));})},q.createElement(FormattedMessage,{id:"request.accept"})),q.createElement($,{fullWidth:!0,onClick:()=>w(void 0,null,function*(){e&&(yield UserRepository.Relationship.declineMyFollower(e),Z.success({content:q.createElement(FormattedMessage,{id:"notification.done"})}));})},q.createElement(FormattedMessage,{id:"request.decline"})))),ej=({userId:e})=>{let{followers:t,hasMore:o,loadMore:r,isLoading:n,loadMoreHasBeenCalled:s}=Hr({userId:e,status:"pending"}),a=useMemo(()=>{function m(){return new Array(5).fill(1).map((c,u)=>({userId:u,skeleton:!0}))}return n&&!s?m():n&&s?[...t,...m()]:t},[t,n,s]),l=()=>o?q.createElement(Ur,{onClick:()=>r()}):null;return a.length===0?q.createElement(q.Fragment,null,q.createElement(Oa,null,null),l()):q.createElement(q.Fragment,null,q.createElement(Oa,null,a.map(m=>fo(m)?q.createElement(de,{style:{fontSize:8}}):q.createElement(RH,{key:`${m.from}-${m.to}`,userId:m.to}))),l())},Mh=ej;var Co={FOLLOWINGS:"Followings",FOLLOWERS:"Followers"},_a="Pending";[{value:Co.FOLLOWINGS,label:q.createElement(FormattedMessage,{id:"tabs.followings"})},{value:Co.FOLLOWERS,label:q.createElement(FormattedMessage,{id:"tabs.followers"})},{value:_a,label:q.createElement(FormattedMessage,{id:"tabs.pending"})}];var nj=({userId:e,activeTab:t,socialSettings:o,onTabChange:r,onFollowingListClick:n,onFollowerListClick:s})=>{let{currentUserId:a}=H(),l=Yl(o),{formatMessage:m}=useIntl(),[c,u]=useState(Object.values(Co).map(g=>({value:g,label:g}))),{followers:f}=Hr({userId:e,status:"pending"}),p=a===e;return useEffect(()=>{f!=null&&f.length&&p&&l?u(Object.values(Co).map(g=>({value:g,label:g})).concat({value:_a,label:m({id:"tabs.pending"})})):u(Object.values(Co).map(g=>({value:g,label:g})));},[m,p,f,r]),q.createElement("div",null,q.createElement(ph,{tabs:c,activeTab:t,onChange:r}),t===Co.FOLLOWINGS&&q.createElement(yh,{userId:e,onItemClick:g=>n(g)}),t===Co.FOLLOWERS&&q.createElement(vh,{userId:e,onItemClick:g=>s(g)}),t.includes(_a)&&p&&q.createElement(Mh,{userId:e}))},Ih=nj;var Ot={TIMELINE:"TIMELINE",GALLERY:"GALLERY",FOLLOWERS:"FOLLOWERS"},Ec=[{value:Ot.TIMELINE,label:q.createElement(FormattedMessage,{id:"tabs.timeline"})},{value:Ot.GALLERY,label:q.createElement(FormattedMessage,{id:"tabs.gallery"})},{value:Ot.FOLLOWERS,label:q.createElement(FormattedMessage,{id:"tabs.followers"})}];var wh=i.div`
  height: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 28px 0;
  overflow-y: auto;
`;var aj=e=>{let[t,o]=useState(0),[r,n]=useState(0),[s,a]=useState(0);return Fe({fetcher:UserRepository.Relationship.getFollowInfo,params:e,callback:l=>{l.data&&(o(l.data.followerCount),n(l.data.followingCount),a(l.data.pendingCount));},shouldCall:()=>!!e}),{followerCount:t,followingCount:r,pendingCount:s}},Sh=aj;var lj=e=>{var o;let t=Fe({fetcher:UserRepository.Relationship.getFollowInfo,params:e});return (o=t==null?void 0:t.status)!=null?o:"none"},C2=lj;var cj=({userId:e,currentUserId:t,fileUrl:o,displayName:r,description:n,isMyProfile:s,onEditUser:a,onFollowRequest:l,onFollowDecline:m,onUnFollow:c,onPendingNotificationClick:u,onFollowingCountClick:f,onFollowerCountClick:p,onReportClick:g,isFollowPending:y,isFollowNone:v,isFollowAccepted:h,followerCount:C=0,followingCount:x=0,isPrivateNetwork:M})=>{let S=j(e),{formatMessage:b}=useIntl(),{isFlaggedByMe:P}=En(e||void 0),{followers:k}=Hr({userId:t,status:"pending"}),A=S!=null&&S.displayName?b({id:"user.unfollow.confirm.title"},{displayName:S.displayName}):b({id:"user.unfollow.confirm.title.thisUser"}),L=S!=null&&S.displayName?b({id:"user.unfollow.confirm.body"},{displayName:S.displayName}):b({id:"user.unfollow.confirm.body.thisUser"}),O=[h&&!s?{name:b({id:"user.unfollow"}),action:()=>me({title:A,content:L,cancelText:b({id:"buttonText.cancel"}),okText:b({id:"buttonText.unfollow"}),onOk:()=>w(void 0,null,function*(){yield c==null?void 0:c();})})}:void 0,s?void 0:{name:b(P?{id:"report.unreportUser"}:{id:"report.reportUser"}),action:()=>{g==null||g();}}].filter(ge);return q.createElement(g9,{"data-qa-anchor":"user-info"},q.createElement(y9,null,q.createElement(h9,{"data-qa-anchor":"user-info-profile-image",avatar:o,backgroundImage:ce}),q.createElement(C9,null,s?q.createElement($,{"data-qa-anchor":"user-info-edit-profile-button",onClick:()=>(S==null?void 0:S.userId)&&(a==null?void 0:a(S.userId))},q.createElement(f9,null)," ",q.createElement(FormattedMessage,{id:"user.editProfile"})):q.createElement(q.Fragment,null,M&&y&&q.createElement($,{onClick:()=>m==null?void 0:m()},q.createElement(p9,null,q.createElement(u9,null)),q.createElement(FormattedMessage,{id:"user.cancel_follow"})),v&&q.createElement(oe,{onClick:()=>l==null?void 0:l()},q.createElement(Sm,null)," ",q.createElement(FormattedMessage,{id:"user.follow"})))),q.createElement(M9,{options:O,pullRight:!1})),q.createElement(T9,null,q.createElement(v6,{lines:3},q.createElement(v9,{"data-qa-anchor":"user-info-profile-name"},r)),S!=null&&S.isGlobalBanned?q.createElement($t,{style:{marginLeft:"0.265rem",marginTop:"1px"}}):null),q.createElement(x9,null,q.createElement(Q0,{onClick:()=>{f==null||f();}},bp(x)),q.createElement(FormattedMessage,{id:"counter.followings"}),q.createElement(Q0,{onClick:()=>{p==null||p();}},bp(C)),q.createElement(FormattedMessage,{id:"counter.followers"})),q.createElement(b9,{"data-qa-anchor":"user-info-description"},n),s&&k.length>0&&M&&q.createElement(I9,{onClick:()=>{u==null||u();}},q.createElement(w9,null,q.createElement(P9,null),q.createElement(FormattedMessage,{id:"follow.pendingNotification.title"})),q.createElement(S9,null,q.createElement(FormattedMessage,{id:"follow.pendingNotification.body"}))))},Th=e=>{let t=N("UIUserInfo");return t?t(e):q.createElement(cj,d({},e))};var gj=({userId:e,onUnFollow:t,onFollowingCountClick:o,onFollowerCountClick:r,onPendingNotificationClick:n,isPrivateNetwork:s})=>{let{currentUserId:a}=H(),{formatMessage:l}=useIntl(),{onEditUser:m}=V(),c=j(e),u=_({fileId:c==null?void 0:c.avatarFileId,imageSize:"small"});br({userId:e,level:SubscriptionLevels.USER}),c1({userId:a}),d1({userId:a});let f=C2(e),p=()=>w(void 0,null,function*(){e&&(yield UserRepository.Relationship.declineMyFollower(e),Z.success({content:q.createElement(FormattedMessage,{id:"notification.done"})}));}),g=()=>w(void 0,null,function*(){e&&(yield UserRepository.Relationship.unfollow(e),t==null||t(),Z.success({content:q.createElement(FormattedMessage,{id:"notification.done"})}));}),{followerCount:y,followingCount:v}=Sh(e),h=()=>w(void 0,null,function*(){e&&(yield UserRepository.Relationship.follow(e));});if(f==null)return null;let C=f==="none",x=f==="accepted",M=f==="pending";return q.createElement(Th,{userId:e,currentUserId:a,fileUrl:(c==null?void 0:c.avatarCustomUrl)||u,displayName:(c==null?void 0:c.displayName)||l({id:"anonymous"}),description:c==null?void 0:c.description,onFollowerCountClick:r,onFollowingCountClick:o,onPendingNotificationClick:n,onFollowDecline:p,onFollowRequest:h,onUnFollow:g,onEditUser:m,isMyProfile:e===a,isFollowPending:M,isPrivateNetwork:s,isFollowNone:C,isFollowAccepted:x,followerCount:y,followingCount:v})},Eh=memo(gj);var yj=({userId:e,socialSettings:t})=>{let{currentUserId:o}=H(),[r,n]=useState(Ot.TIMELINE),[s,a]=useState(Co.FOLLOWINGS),l=C2(e),m=e===o,c=()=>w(void 0,null,function*(){n(Ot.TIMELINE);}),u=l==="accepted",f=Yl(t)&&!u&&!m,p=f?Ec.filter(({value:g})=>g===Ot.TIMELINE):Ec;return e?q.createElement(wh,null,q.createElement(Eh,{key:e,userId:e,onUnFollow:c,onPendingNotificationClick:()=>{n(Ot.FOLLOWERS),a(_a);},onFollowingCountClick:()=>{n(Ot.FOLLOWERS),a(Co.FOLLOWINGS);},onFollowerCountClick:()=>{n(Ot.FOLLOWERS),a(Co.FOLLOWERS);}}),q.createElement(f2,{"data-qa-anchor":"user-feed-header",tabs:p,activeTab:r,onChange:n}),r===Ot.TIMELINE&&q.createElement(hn,{targetType:m?"myFeed":"user",targetId:e,showPostCreator:m,isHiddenProfile:f}),r===Ot.GALLERY&&q.createElement(u2,{targetType:"user",targetId:e}),r===Ot.FOLLOWERS&&!f&&q.createElement(Ih,{userId:e,activeTab:s,socialSettings:t,onFollowingListClick:g=>n(Ot.TIMELINE),onFollowerListClick:g=>n(Ot.TIMELINE),onTabChange:g=>a(g)})):null},Lh=yj;var Ah=i.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 30px 0;
  overflow-x: hidden;
  overflow-y: auto;
`,Bh=i.div`
  display: flex;
  margin-bottom: 1rem;
`,Fh=i.div`
  ${({theme:e})=>e.typography.headline}
`,Dh=i($).attrs({variant:"secondary"})`
  width: 28px;
  padding: 2px;

  &:hover {
    background-color: transparent;
  }
`;var hj=({category:e,communities:t,hasMore:o,loadMore:r,isLoading:n,onClickCommunity:s})=>{let a=()=>o?q.createElement(Ur,{onClick:()=>r()}):null;return t.length===0?q.createElement(q.Fragment,null,q.createElement(Oa,null,q.createElement(xh,{icon:q.createElement(Rr,{width:48,height:48}),title:q.createElement(FormattedMessage,{id:"CategoryCommunitiesList.emptyTitle"}),description:q.createElement(FormattedMessage,{id:"CategoryCommunitiesList.emptyDescription"})})),a()):q.createElement(q.Fragment,null,q.createElement(Oa,null,t.map((l,m)=>fo(l)?q.createElement(La,{key:m,loading:!0}):q.createElement(n2,{key:l==null?void 0:l.communityId,communityId:l==null?void 0:l.communityId,onClick:s}))),a())},Oh=hj;var _h=({categoryId:e})=>{let{onClickCommunity:t}=V(),{communities:o,hasMore:r,loadMore:n,isLoading:s,loadMoreHasBeenCalled:a}=lr({categoryId:e||void 0,sortBy:"displayName"});return {communities:useMemo(()=>{let m=new Array(5).fill(1).map(c=>({skeleton:!0}));return s&&!a?m:s?s&&a?[...o,...m]:m:o},[o,s,a]),hasMore:r,loadMore:n,isLoading:s,onClickCommunity:t}};var vj=({categoryId:e})=>{let{onChangePage:t}=V(),o=Mn(e),{communities:r,loadMore:n,isLoading:s,hasMore:a,onClickCommunity:l}=_h({categoryId:e}),m=(o==null?void 0:o.name)||"";return q.createElement(Ah,null,q.createElement(Bh,null,q.createElement(Dh,{onClick:()=>t("explore")},q.createElement(ss,null)),q.createElement(Fh,null,m)),o?q.createElement(Oh,{category:o,communities:r,loadMore:n,isLoading:s,hasMore:a,onClickCommunity:l}):null)},Uh=vj;var Hh=i(Kt)`
  margin-bottom: 14px;
  border-radius: 0;
  border-right: 0;
  border-left: 0;
`,jh=i.div`
  background: ${({theme:e})=>e.palette.system.background};
  border: 1px solid #edeef2;
  border-radius: 4px;
  flex: 2;
`,Vh=i.div`
  ${({theme:e})=>e.typography.title};
  padding: 16px;
`,$h=i.div`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Gh=i.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;var{COMMUNITY_MODERATOR:qh,CHANNEL_MODERATOR:Zh}=Ri,Mj=({userId:e,currentUserId:t,onClick:o,roles:r=[],assignRolesToUsers:n,hasModeratorPermissions:s,removeRolesFromUsers:a,removeMembers:l,isJoined:m,isBanned:c})=>{let u=j(e),{formatMessage:f}=useIntl(),{isFlaggedByMe:p,toggleFlagUser:g}=En(e),y=u==null?void 0:u.isGlobalBanned;br({userId:e,level:SubscriptionLevels.USER});let v=()=>w(void 0,null,function*(){return g()}),h=()=>{v(),Z.success({content:q.createElement(FormattedMessage,{id:"report.reportSent"})});},C=()=>n([qh,Zh],[e]),x=()=>a([qh,Zh],[e]),M=()=>{me({"data-qa-anchor":"remove-user",title:q.createElement(FormattedMessage,{id:"community.removeUserFromCommunityTitle"}),content:q.createElement(FormattedMessage,{id:"community.removeUserFromCommunityBody"}),cancelText:"Cancel",okText:"Remove",onOk:()=>l([e])});},S=Ao(r);return q.createElement($h,{"data-qa-anchor":"community-member-item"},q.createElement(Gh,null,q.createElement(mr,{userId:e,isBanned:c||y,onClick:o})),!(t===e)&&m&&q.createElement(St,{"data-qa-anchor":"community-members-option-menu",options:[{name:f(p?{id:"report.unreportUser"}:{id:"report.reportUser"}),action:h},s&&!S&&!y?{name:f({id:"moderatorMenu.promoteToModerator"}),action:C}:null,s&&S?{name:f({id:"moderatorMenu.dismissModerator"}),action:x}:null,s?{name:f({id:"moderatorMenu.removeFromCommunity"}),action:M,className:"danger-zone"}:null].filter(ge)}))},Fc=Mj;var ja={MEMBERS:"MEMBERS",MODERATORS:"MODERATORS"};[{value:ja.MEMBERS,label:q.createElement(FormattedMessage,{id:"tabs.members"})},{value:ja.MODERATORS,label:q.createElement(FormattedMessage,{id:"tabs.moderators"})}];var Tj=({community:e,members:t,loadMore:o,hasMore:r})=>{let n=e==null?void 0:e.communityId,{currentUserId:s}=H(),a=t.find(g=>g.userId===s),l=j(s),m=Ao(a==null?void 0:a.roles),c=Wl(a)&&m||Ao(l==null?void 0:l.roles)||Xn(l==null?void 0:l.roles);return {community:e,members:t,currentUserId:s,hasMoreMembers:r,loadMoreMembers:o,hasModeratorPermissions:c,assignRolesToUsers:(g,y)=>n&&CommunityRepository.Moderation.addRoles(n,g,y),removeRolesFromUsers:(g,y)=>n&&CommunityRepository.Moderation.removeRoles(n,g,y),removeMembers:g=>n&&CommunityRepository.Membership.removeMembers(n,g)}},kj=({community:e,members:t,loadMore:o,hasMore:r})=>{let{onClickUser:n}=V(),{hasMoreMembers:s,loadMoreMembers:a,hasModeratorPermissions:l,currentUserId:m,assignRolesToUsers:c,removeRolesFromUsers:u,removeMembers:f}=Tj({community:e,hasMore:r,loadMore:o,members:t});return t.length===0?null:q.createElement(ct,{hasMore:s,loadMore:a,contentSlot:t.map(({userId:p,roles:g,isBanned:y})=>q.createElement(Fc,{key:p,userId:p,currentUserId:m||"",roles:g,assignRolesToUsers:c,removeRolesFromUsers:u,removeMembers:f,hasModeratorPermissions:l,isJoined:e==null?void 0:e.isJoined,isBanned:y,onClick:()=>n(p)}))})},Ej=({community:e})=>{let t=e==null?void 0:e.communityId,{currentUserId:o}=H(),{moderators:r,hasMore:n,loadMore:s}=Er(t),a=r.find(g=>g.userId===o),l=j(o),m=Ao(a==null?void 0:a.roles),c=Wl(a)&&m||Ao(l==null?void 0:l.roles)||Xn(l==null?void 0:l.roles);return {moderators:r,currentUserId:o,hasMoreModerators:n,loadMoreModerators:s,hasModeratorPermissions:c,assignRolesToUsers:(g,y)=>t&&CommunityRepository.Moderation.addRoles(t,g,y),removeRolesFromUsers:(g,y)=>t&&CommunityRepository.Moderation.removeRoles(t,g,y),removeMembers:g=>t&&CommunityRepository.Membership.removeMembers(t,g)}},Nj=({community:e})=>{let{onClickUser:t}=V(),{currentUserId:o,moderators:r,hasMoreModerators:n,loadMoreModerators:s,hasModeratorPermissions:a,assignRolesToUsers:l,removeRolesFromUsers:m,removeMembers:c}=Ej({community:e});return r.length===0?null:q.createElement(ct,{hasMore:n,loadMore:s,contentSlot:r.map(({userId:u,roles:f,isBanned:p})=>q.createElement(Fc,{key:u,userId:u,currentUserId:o||"",roles:f,assignRolesToUsers:l,removeRolesFromUsers:m,removeMembers:c,hasModeratorPermissions:a,isJoined:e==null?void 0:e.isJoined,isBanned:p,onClick:g=>g&&t(g)}))})},Lj=({communityId:e})=>{let{formatMessage:t}=useIntl();wr({level:SubscriptionLevels.COMMUNITY,communityId:e});let{hasMore:o,loadMore:r,loadMoreHasBeenCalled:n,isLoading:s,members:a}=Us(e),l=Ze(e),m=[{value:"MEMBERS",label:t({id:"CommunityMembers.members"})},{value:"MODERATORS",label:t({id:"CommunityMembers.moderators"})}],[c,u]=useState(ja.MEMBERS);return q.createElement(jh,null,q.createElement(Vh,null,"Community Members \u2022 ",a.length||0),q.createElement(Hh,{tabs:m,activeTab:c,onChange:u}),c===ja.MEMBERS&&q.createElement(kj,{community:l,hasMore:o,loadMore:r,members:a}),c===ja.MODERATORS&&q.createElement(Nj,{community:l}))},v2=memo(e=>{let t=N("CommunityMembers");return t?t(e):q.createElement(Lj,d({},e))});var x2="0.3s",Qh=i.label`
  position: relative;
  width: 48px;
  height: 28px;
  float: right;

  ${({disabled:e})=>e&&z`
      pointer-events: none;
      cursor: not-allowed;
    `}
`,b2=i.input`
  &&& {
    display: none;
  }
`,Kh=i.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({disabled:e,theme:t})=>e?t.palette.base.shade4:t.palette.base.shade3};
  -webkit-transition: ${x2};
  transition: ${x2};
  border-radius: 14px;

  &:before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: 2px;
    bottom: 2px;
    background-color: #fff;
    -webkit-transition: ${x2};
    transition: ${x2};
    border-radius: 50%;
  }

  ${b2}:checked + & {
    background-color: ${({disabled:e,theme:t})=>e?t.palette.primary.shade2:t.palette.primary.main};
  }

  ${b2}:checked + &:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`;var Aj=s=>{var a=s,{disabled:e,value:t,onChange:o=()=>{},"data-qa-anchor":r=""}=a,n=I(a,["disabled","value","onChange","data-qa-anchor"]);return q.createElement(Qh,T(d({},n),{disabled:e,"data-qa-anchor":`${r}-label`}),q.createElement(b2,{type:"checkbox",checked:t,"data-qa-anchor":`${r}-switch`,onChange:l=>o==null?void 0:o(l.target.checked)}),q.createElement(Kh,{disabled:e}))},Jh=Aj;var Xh=i.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0px;
  gap: 1rem;
`,zc=i.div`
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.palette.system.background};
  border: 1px solid #edeef2;
  border-radius: 4px;
`,Oc=i.div`
  display: flex;
  flex-direction: column;
`,_c=i.div`
  padding: 12px 16px;
  ${({theme:e})=>e.typography.title};

  border-bottom: 1px solid ${({theme:e})=>e.palette.base.shade4};
`,Uc=i.div`
  padding: 12px 16px;
`,Rh=i.div`
  display: flex;
  align-items: center;

  > :first-child {
    flex: 1 1 0px;
  }

  > :nth-child(2) {
    flex: 0 0 auto;
    margin-left: 20px;
  }
`,eC=i.div``,tC=i.div`
  ${({theme:e})=>e.typography.bodyBold}
`,oC=i.div`
  color: ${({theme:e})=>e.palette.base.shade2};
`;var Bj=({onChange:e,value:t,title:o,promptText:r})=>q.createElement(Rh,null,q.createElement(eC,null,o&&q.createElement(tC,null,o),r&&q.createElement(oC,null,r)),q.createElement(Jh,{value:t,"data-qa-anchor":"community-permissions",onChange:e})),Hc=Bj;function Fj({needApprovalOnPostCreation:e,storyCommentsApproval:t,onNeedApprovalOnPostCreationChange:o,onStoryCommentsApproval:r}){return q.createElement(Xh,null,q.createElement(zc,null,q.createElement(Oc,null,q.createElement(_c,null,q.createElement(FormattedMessage,{id:"community.permissions.postReview"})),q.createElement(Uc,null,q.createElement(Hc,{title:q.createElement(FormattedMessage,{id:"community.permissions.approvePosts"}),promptText:q.createElement(FormattedMessage,{id:"community.permissions.approvePosts.prompt"}),value:e,onChange:n=>o==null?void 0:o(n)})))),q.createElement(zc,null,q.createElement(Oc,null,q.createElement(_c,null,q.createElement(FormattedMessage,{id:"community.permissions.storyComments"})),q.createElement(Uc,null,q.createElement(Hc,{title:q.createElement(FormattedMessage,{id:"community.permissions.allowStoryComments"}),promptText:q.createElement(FormattedMessage,{id:"community.permissions.storyComments.prompt"}),value:t,onChange:n=>r==null?void 0:r(n)})))))}var rC=e=>{let t=N("CommunityPermissions");return t?t(e):q.createElement(Fj,d({},e))};function jj(e,t){return e==="needApprovalOnPostCreation"?(t==null?void 0:t.postSetting)===CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED:e==="storyComments"?t==null?void 0:t.allowCommentInStory:!1}function Vj(e,t){return e==="needApprovalOnPostCreation"?{postSetting:t?CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED:CommunityPostSettings.ANYONE_CAN_POST}:e==="storyComments"?{storySetting:{enableComment:t}}:{[e]:t}}function Vc({communityId:e,key:t}){let o=Ze(e),r=jj(t,o),[n,s]=useState(r);useEffect(()=>s(r),[r]);let a=useCallback(l=>w(this,null,function*(){try{if(s(l),e==null)return;yield CommunityRepository.updateCommunity(e,Vj(t,l));}catch(m){s(r),m instanceof Error&&It({title:q.createElement(FormattedMessage,{id:`community.permissions.error.${t}.${l?"turnOn":"turnOff"}`}),content:m.message});}}),[t,r]);return [n,a]}var Gj=({communityId:e})=>{let[t,o]=Vc({communityId:e,key:"needApprovalOnPostCreation"}),[r,n]=Vc({communityId:e,key:"storyComments"});return q.createElement(rC,{needApprovalOnPostCreation:t,onNeedApprovalOnPostCreationChange:o,storyCommentsApproval:r,onStoryCommentsApproval:n})},nC=Gj;var iC=({title:e,children:t})=>q.createElement(wn,{edit:!0},e&&q.createElement(Hm,null,e),q.createElement(Sn,null,t)),aC=({type:e,description:t,icon:o})=>q.createElement(jm,null,q.createElement(Um,null,o),q.createElement("div",null,e,q.createElement(Vm,null,t))),Yj=({community:e,"data-qa-anchor":t="",className:o,onSubmit:r,onCancel:n})=>{let[s,a]=useState(!1),{register:l,handleSubmit:m,setError:c,watch:u,control:f,formState:p}=xy(e),{errors:g,isValid:y}=p,v=u("displayName"),h=u("description"),C=useRef(null),x=b=>w(void 0,null,function*(){try{a(!0),yield r==null?void 0:r(T(d({},b),{avatarFileId:b.avatarFileId||void 0})),Z.success({content:q.createElement(FormattedMessage,{id:"community.updateSuccess"})});}finally{a(!1);}}),M=!p.isValid||s,S=C.current&&C.current.scrollHeight-C.current.clientHeight-C.current.scrollTop;return q.useLayoutEffect(()=>{S!=null&&C.current&&S<10&&C.current.scrollHeight-C.current.clientHeight-C.current.scrollTop>10&&C.current.scrollTo({top:C.current.scrollHeight});},[C.current,S,p]),q.createElement(In,{className:o,onSubmit:m(x)},q.createElement(Pn,{ref:C},q.createElement(iC,{title:"General"},q.createElement(Qt,null,q.createElement(Controller,{name:"avatarFileId",control:f,render:k=>{var {field:A}=k,L=A,P=I(L,["ref"]);return q.createElement(bn,T(d({mimeType:"image/png, image/jpeg"},P),{"data-qa-anchor":t}))}})),q.createElement(Qt,{error:g.displayName},q.createElement(zr,null,q.createElement(ho,{htmlFor:"displayName",className:"required"},q.createElement(FormattedMessage,{id:"community.name"})),q.createElement(Dr,null,v.length,"/30")),q.createElement(ui,T(d({},l("displayName")),{"data-qa-anchor":`${t}-community-name-input`,placeholder:"Enter community name"})),q.createElement(Yt,{errors:g,name:"displayName"})),q.createElement(Qt,{error:g.description},q.createElement(zr,null,q.createElement(ho,{htmlFor:"description"},q.createElement(FormattedMessage,{id:"community.about"})),q.createElement(Dr,null,(h==null?void 0:h.length)||0,"/180")),q.createElement(pi,T(d({},l("description",{maxLength:{value:180,message:"Description text is too long"}})),{"data-qa-anchor":`${t}-community-description-textarea`,placeholder:"Enter description"})),q.createElement(Yt,{errors:g,name:"description"})),q.createElement(Qt,{error:g.categoryIds},q.createElement(ho,{htmlFor:"categoryIds",className:"required"},q.createElement(FormattedMessage,{id:"community.category"})),q.createElement(Controller,{rules:{required:"Category is required"},name:"categoryIds",render:k=>{var {field:A}=k,L=A,P=I(L,["ref"]);return q.createElement(Gm,T(d({parentContainer:C.current},P),{"data-qa-anchor":`${t}`}))},control:f}),q.createElement(Yt,{errors:g,name:"category"}))),q.createElement(iC,{title:q.createElement(FormattedMessage,{id:"community.categorypermission"})},q.createElement(Controller,{name:"isPublic",render:({field:b})=>q.createElement(q.Fragment,null,q.createElement(Ia,T(d({},b),{value:b.value===!0,onChange:P=>b.onChange(P.target.checked),"data-qa-anchor":"community-form-public-type-community-type",label:"Public",renderer:()=>q.createElement(aC,{type:"Public",description:"Anyone can join, view and search the posts in this page.",icon:q.createElement(Om,null)})})),q.createElement(Ia,T(d({},b),{value:b.value===!1,onChange:P=>b.onChange(!P.target.checked),"data-qa-anchor":"community-form-private-type-community-type",label:"Private",renderer:()=>q.createElement(aC,{type:"Private",description:"Only members invited by the moderators can join, view, and search the posts in this page.",icon:q.createElement(_m,null)})}))),control:f}))),q.createElement(Pa,{edit:!0},q.createElement(Sa,{"data-qa-anchor":`${t}-save-button`,disabled:M,edit:!0},q.createElement(FormattedMessage,{id:"save"}))))},sC=memo(Yj);var Kj=r=>{var n=r,{edit:e,community:t}=n,o=I(n,["edit","community"]);return e?t==null?null:q.createElement(sC,T(d({},o),{community:t})):q.createElement(Qm,d({},o))},lC=memo(e=>{let t=N("CommunityForm");return t?t(e):q.createElement(Kj,d({},e))});var mC=i.div`
  border-bottom: 1px solid ${({theme:e})=>e.palette.base.shade4};
`;var tV=({children:e})=>q.createElement(wn,null,q.createElement(Sn,null,e)),dC=({className:e="",closeConfirm:t,onSubmit:o})=>{let{formatMessage:r}=useIntl(),{formState:{errors:n},control:s,setError:a,handleSubmit:l}=useForm({defaultValues:{members:[]}}),m=c=>w(void 0,null,function*(){if(c.members.length===0){a("members",{message:r({id:"AddMemberModal.membersValidationError"})});return}o(c.members);});return q.createElement(dt,{"data-qa-anchor":"add-member-modal",title:r({id:"AddMemberModal.addMembers"}),onCancel:t},q.createElement(mC,null,q.createElement(In,{className:e,onSubmit:l(m)},q.createElement(Pn,null,q.createElement(tV,null,q.createElement($m,{error:n.members},q.createElement(Controller,{name:"members",render:({field:c})=>q.createElement(Tn,T(d({},c),{"data-qa-anchor":"add-member-modal"})),control:s}),q.createElement(Yt,{errors:n,name:"members"})))),q.createElement(Pa,null,q.createElement(Sa,null,q.createElement(FormattedMessage,{id:"add"}))))))};var oV=i.div`
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
`,rV=i.div`
  grid-area: header;
  width: 100%;
  height: 100%;
`,nV=i.div`
  grid-area: main;
  width: 100%;
  height: 100%;
  overflow: auto;
`,iV=i.div`
  grid-area: side;
  width: 100%;
  height: 100%;
  max-width: 20rem;
  overflow: auto;

  & > :not(:first-child) {
    margin-top: 20px;
  }
`,aV=({header:e,aside:t,children:o})=>q.createElement(oV,{withHeader:!!e},e&&q.createElement(rV,null,e),q.createElement(nV,null,o),q.createElement(iV,null,t)),cC=aV;var lV=i.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem 0.25rem 0px 0px;
  border: 1px solid ${({theme:e})=>e.palette.system.borders};
  background: ${({theme:e})=>e.palette.system.background};
`,mV=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`,dV=i.div`
  ${({theme:e})=>e.typography.headline}
`,cV=i.button`
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
`,pV=({title:e,avatarFileUrl:t,avatarImage:o,backLinkText:r,onBack:n})=>q.createElement(lV,null,q.createElement(J,{avatar:t,backgroundImage:o}),q.createElement(mV,null,n instanceof Function&&q.createElement(cV,{"data-qa-anchor":"page-header-back-button",onClick:n},q.createElement(Ro,{height:".9em",width:".9em"}),r!=null?r:q.createElement(FormattedMessage,{id:"backTitle"})),q.createElement(dV,null,e))),pC=pV;var uV=i(Kt)`
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px 4px 0 0;
  border: 1px solid #edeef2;
`,fV=({avatarFileUrl:e,communityName:t,onReturnToCommunity:o,tabs:r=[],activeTab:n,onTabChange:s})=>q.createElement(q.Fragment,null,q.createElement(pC,{title:q.createElement(FormattedMessage,{id:"community.communitySettings"}),avatarFileUrl:e,avatarImage:lt,backLinkText:q.createElement(FormattedMessage,{id:"community.returnTo",values:{communityName:t}}),onBack:o}),r.length>0?q.createElement(uV,{tabs:r,activeTab:n||r[0].value,onChange:a=>s==null?void 0:s(a)}):null),fC=fV;var gC=i.div`
  border: 1px solid #edeef2;
  border-radius: 4px;
  background: ${({theme:e})=>e.palette.system.background};
  align-self: flex-start;
  padding: 16px;
  width: 330px;
  flex-shrink: 0;
`,yC=i.div`
  ${({theme:e})=>e.typography.title};
  line-height: 24px;
`,hC=i.div`
  ${({theme:e})=>e.typography.body};
  line-height: 20px;
`,CC=i.div`
  margin-top: 16px;
`,vC=i(oe)`
  padding: 10px 16px;
  justify-content: center;
  width: 100%;
`,xC=i($)`
  padding: 10px 16px;
  justify-content: center;
  width: 100%;
`,bC=i(jt).attrs({width:15,height:15})`
  margin-right: 8px;
`;var MC=({title:e,bodyText:t,actionButton:o})=>q.createElement(gC,null,q.createElement(yC,null,e),q.createElement(hC,null,q.createElement("div",null,t),q.createElement(CC,null,o))),hV=({onClick:e})=>q.createElement(vC,{"data-qa-anchor":"community-edit-add-member-button",onClick:e},q.createElement(bC,null),q.createElement(FormattedMessage,{id:"add"})),CV=o=>{var r=o,{onClick:e}=r,t=I(r,["onClick"]);return q.createElement(xC,T(d({},t),{onClick:e}),q.createElement(FormattedMessage,{id:"close"}))},IC=({action:e})=>q.createElement(MC,{title:q.createElement(FormattedMessage,{id:"AddMemberAction.title"}),bodyText:q.createElement(FormattedMessage,{id:"AddMemberAction.description"}),actionButton:q.createElement(hV,{onClick:e})}),wC=({communityId:e,onCommunityClosed:t})=>{let{formatMessage:o}=useIntl();return q.createElement(MC,{title:q.createElement(FormattedMessage,{id:"CloseCommunityAction.title"}),bodyText:q.createElement(FormattedMessage,{id:"CloseCommunityAction.description"}),actionButton:q.createElement(CV,{"data-qa-anchor":"community-edit-close-community-button",onClick:()=>me({"data-qa-anchor":"close-community",title:o({id:"CloseCommunityAction.closeConfirm.title"}),content:o({id:"CloseCommunityAction.closeConfirm.description"}),cancelText:o({id:"cancel"}),okText:o({id:"close"}),onOk:()=>w(void 0,null,function*(){e&&(yield CommunityRepository.deleteCommunity(e),t==null||t());})})})})};var vo={EDIT_PROFILE:"EDIT_PROFILE",MEMBERS:"MEMBERS",PERMISSIONS:"PERMISSIONS"},SC=[{value:vo.EDIT_PROFILE,label:q.createElement(FormattedMessage,{id:"tabs.editProfile"})},{value:vo.MEMBERS,label:q.createElement(FormattedMessage,{id:"tabs.members"})},{value:vo.PERMISSIONS,label:q.createElement(FormattedMessage,{id:"tabs.permissions"})}];var xV=({communityId:e,tab:t=vo.EDIT_PROFILE})=>{let{onChangePage:o}=V(),[r,n]=useState(t),[s,a]=useState(!1),l=()=>a(!0),m=()=>a(!1);useEffect(()=>n(t),[t]);let{onClickCommunity:c}=V(),u=Ze(e),f=_({fileId:u==null?void 0:u.avatarFileId,imageSize:"medium"}),p=()=>e&&c(e),g=h=>w(void 0,null,function*(){e!=null&&(yield CommunityRepository.updateCommunity(e,h),p());}),y=h=>w(void 0,null,function*(){e!=null&&(yield CommunityRepository.Membership.addMembers(e,h),m());});return q.createElement(cC,{aside:(()=>{switch(r){case vo.EDIT_PROFILE:return q.createElement(wC,{communityId:e,onCommunityClosed:()=>o("newsfeed")});case vo.MEMBERS:return q.createElement(q.Fragment,null,q.createElement(IC,{action:l}),s&&q.createElement(dC,{closeConfirm:m,onSubmit:y}));default:return null}})(),header:q.createElement(fC,{avatarFileUrl:f,communityName:u==null?void 0:u.displayName,tabs:SC,activeTab:r,onTabChange:h=>n(h),onReturnToCommunity:p})},r===vo.EDIT_PROFILE&&!!(u!=null&&u.communityId)&&q.createElement(lC,{"data-qa-anchor":"community-edit",community:u,edit:!0,onSubmit:h=>g(T(d({},h),{avatarFileId:h.avatarFileId||void 0}))}),r===vo.MEMBERS&&q.createElement(v2,{communityId:e}),r===vo.PERMISSIONS&&q.createElement(nC,{communityId:e}))},kC=xV;var SV=i.div`
  margin-top: 16px;
`,PV=({title:e,children:t})=>q.createElement(wn,null,q.createElement(Hm,null,e),q.createElement(Sn,null,t)),TV=({user:e,onSubmit:t,className:o})=>{var y,v;let{currentUserId:r}=H(),n=j(r),{formatMessage:s}=useIntl(),{register:a,handleSubmit:l,formState:{errors:m},watch:c,control:u}=useForm({defaultValues:{displayName:e.displayName,description:(y=e.description)!=null?y:"",avatarFileId:(v=e.avatarFileId)!=null?v:void 0}}),f=Xn(n==null?void 0:n.roles),p=c("description"),g=c("displayName");return q.createElement(In,{className:o,onSubmit:l(h=>{t(f?h:{description:h.description,avatarFileId:h.avatarFileId});})},q.createElement(Pn,null,q.createElement(PV,{title:q.createElement(FormattedMessage,{id:"UserProfileForm.title"})},q.createElement(Controller,{name:"avatarFileId",render:x=>{var {field:M}=x,S=M,C=I(S,["ref"]);return q.createElement(bn,T(d({},C),{"data-qa-anchor":"user-profile-form-avatar-uploader"}))},control:u}),q.createElement(Qt,{error:m.displayName},q.createElement(zr,null,q.createElement(ho,{htmlFor:"displayName",className:"required"},q.createElement(FormattedMessage,{id:"UserProfileForm.displayname"})),q.createElement(Dr,null,(g==null?void 0:g.length)||0,"/100")),q.createElement(ui,T(d({},a("displayName",{required:s({id:"UserProfileForm.requiredDisplayName"})})),{"data-qa-anchor":"user-profile-form-display-name-input",placeholder:s({id:"UserProfileForm.namePlaceholder"}),maxLength:100,disabled:!f})),q.createElement(Yt,{errors:m,name:"displayName"})),q.createElement(Qt,{error:m.description},q.createElement(zr,null,q.createElement(ho,{htmlFor:"description"},q.createElement(FormattedMessage,{id:"UserProfileForm.about"})),q.createElement(Dr,null,(p==null?void 0:p.length)||0,"/180")),q.createElement(pi,T(d({},a("description")),{"data-qa-anchor":"user-profile-form-description-textarea",placeholder:s({id:"UserProfileForm.requiredDescription"}),maxLength:180})),q.createElement(Yt,{errors:m,name:"description"})),q.createElement(SV,null,q.createElement(oe,{"data-qa-anchor":"user-profile-form-save-button",type:"submit"},q.createElement(FormattedMessage,{id:"save"}))))))},EC=memo(TV);var NC=i.button.attrs({role:"button"})`
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
`;var EV=({text:e})=>{let{onBack:t}=V();return q.createElement(NC,{onClick:t},e)},LC=EV;var w2={EDIT_PROFILE:"EDIT_PROFILE"},AC=[{value:w2.EDIT_PROFILE,label:"Edit profile"}];var BC=i(Kt)`
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px 4px 0 0;
  border: 1px solid #edeef2;
`;var FC=e=>{let t=N("ProfileSettingsTabs");return t?t(e):q.createElement(BC,d({},e))};var DC=i(FC)``,zC=i.div`
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-width: 600px;
`,OC=i.div`
  display: flex;
  background: ${({theme:e})=>e.palette.system.background};
  border-radius: 4px 4px 0 0;
  border: 1px solid #edeef2;
  padding: 10px 10px 20px 10px;
`,_C=i.div`
  font-weight: 600;
  font-size: 20px;
`,UC=i(J).attrs({size:"small"})`
  margin-right: 12px;
  margin-left: 16px;
`,HC=i.div`
  padding-top: 4px;
`,jC=i.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
`,VC=i.div`
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
`;i(oe)`
  padding: 10px 16px;
  justify-content: center;
  width: 100%;
`;i($)`
  padding: 10px 16px;
  justify-content: center;
  width: 100%;
`;i(jt).attrs({width:15,height:15})`
  margin-right: 8px;
`;var zV=({userId:e})=>{let{formatMessage:t}=useIntl(),{onClickUser:o}=V(),[r,n]=useState(w2.EDIT_PROFILE),s=j(e),a=_({fileId:s==null?void 0:s.avatarFileId,imageSize:"small"}),l=m=>w(void 0,null,function*(){try{if(e==null)return;yield UserRepository.updateUser(e,m),o(e);}catch(c){console.log(c);}});return s==null?null:q.createElement(zC,null,q.createElement(OC,null,q.createElement(HC,null,q.createElement(UC,{avatar:a,backgroundImage:ce})),q.createElement("div",null,q.createElement(LC,{text:t({id:"ProfileSettings.returnTo"})+((s==null?void 0:s.displayName)||"")}),q.createElement(_C,null,q.createElement(FormattedMessage,{id:"profile.setting"})))),q.createElement("div",null,q.createElement(DC,{tabs:AC,activeTab:r,onChange:n})),q.createElement(VC,null,r===w2.EDIT_PROFILE&&q.createElement(jC,null,s!=null?q.createElement(EC,{user:s,onSubmit:l}):null)))},$C=memo(e=>{let t=N("ProfileSettings");return t?t(e):q.createElement(zV,d({},e))});function Wc({targetId:e,targetType:t,shouldSubscribe:o=()=>!0,callback:r}){return At({fetcher:StoryRepository.getActiveStoriesByTarget,params:{targetId:e,targetType:t},callback:r,shouldSubscribe:()=>!!e&&o(),getSubscribedTopic:()=>getCommunityStoriesTopic({targetId:e,targetType:t})})}var VV=e=>{let t=useRef(null),[o,r]=useState([]),[n,s]=useState(!1);useState(null);let [m,c]=useState(!1),u=useRef(null),[f,p]=useState(!1),g=useCallback(()=>{var y;u.current&&(p(!0),(y=u.current)==null||y.call(u));},[u,f,n,s]);return useEffect(()=>{function y(){return w(this,null,function*(){t.current&&t.current(),t.current=StoryRepository.getActiveStoriesByTarget({targetId:e.targetId,targetType:e.targetType,options:e.options},x=>w(this,[x],function*({data:v,hasNextPage:h,onNextPage:C}){var M,S;if(v)if(((M=e.options)==null?void 0:M.orderBy)==="asc"&&((S=e.options)==null?void 0:S.sortBy)==="createdAt"){let b=v.filter(ge).sort((P,k)=>P.syncState==="syncing"&&k.syncState!=="syncing"?1:P.syncState!=="syncing"&&k.syncState==="syncing"?-1:0);r(b);}else r(v.filter(ge));h&&c(h),u.current=C;}));})}return y(),()=>{t.current&&t.current();}},[e.targetId]),Wc({targetId:e.targetId,targetType:e.targetType}),{stories:o,hasMore:m,loadMore:g}},Wa=VV;var $e=i($V)`
  margin: 0 auto;
  width: 100%;
  z-index: 9999;
`;i($e.Backdrop)`
  background-color: rgba(0, 0, 0, 0.5);
`;var qC=i($e.Container)`
  z-index: 101;
`,ZC=i($e.Header)`
  ${({theme:e})=>e.typography.title};
  color: ${({theme:e})=>e.palette.base.default};
  text-align: center;
  border-bottom: 1px solid #e3e4e8;
  padding-bottom: 0.5rem;
  z-index: 100;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`,WC=i($e.Content)`
  z-index: 100;
`;i(K)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;var ur=l=>{var m=l,{isOpen:e=!1,onClose:t=()=>{},detent:o="content-height",rootId:r,children:n,mountPoint:s}=m,a=I(m,["isOpen","onClose","detent","rootId","children","mountPoint"]);return q.createElement($e,d({rootId:r,isOpen:e,onClose:t,mountPoint:s,detent:o},a),n)};var Ge=a=>{var l=a,{name:e,size:t=24,className:o,style:r,onClick:n}=l,s=I(l,["name","size","className","style","onClick"]);let c=d({},r0)[e];return c?q.createElement(c,d({"data-qa-anchor":`${e}-icon`,width:t,height:t,className:o,style:r,onClick:n},s)):(console.error(`Icon not found: ${e}`),null)};var it={};var An=({children:e,className:t=""})=>q.createElement("div",{className:Ln(it.typography,t)},e);An.Heading=({children:e,className:t=""})=>q.createElement("h1",{className:Ln(it.typography,it["typography-headings"],t)},e);An.Title=({children:e,className:t=""})=>q.createElement("h2",{className:Ln(it.typography,it["typography-titles"],t)},e);An.Subtitle=({children:e,className:t=""})=>q.createElement("h3",{className:Ln(it.typography,it["typography-sub-title"],t)},e);An.Body=({children:e,className:t=""})=>q.createElement("p",{className:Ln(it.typography,it["typography-body"],t)},e);An.BodyBold=({children:e,className:t=""})=>q.createElement("p",{className:Ln(it.typography,it["typography-body-bold"],t)},e);An.Caption=({children:e,className:t=""})=>q.createElement("p",{className:Ln(it.typography,it["typography-caption"],t)},e);An.CaptionBold=({children:e,className:t=""})=>q.createElement("p",{className:Ln(it.typography,it["typography-caption-bold"],t)},e);var he=An;var YC=i(Ge)`
  cursor: pointer;
  border-radius: 50%;
  padding: 0.25rem;
  background-color: ${({theme:e})=>e.v4.colors.actionButton.default};
`,QC=i.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;var S2=n=>{var s=n,{pageId:e="create_story_page",componentId:t="*",onClick:o=()=>{}}=s,r=I(s,["pageId","componentId","onClick"]);let a="aspect_ratio_button",{getConfig:l,isExcluded:m}=ve(),c=l(`${e}/${t}/${a}`),u=m(`${e}/${t}/${a}`),f=c==null?void 0:c.aspect_ratio_icon;return u?null:f&&Je(f)?q.createElement(QC,d({"data-qa-anchor":"aspect_ratio_button",src:f,onClick:o},r)):q.createElement(YC,d({"data-qa-anchor":"aspect_ratio_button",name:"ExpandIcon",onClick:o},r))};i(Ge)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.375rem 0rem;
  background: ${({theme:e})=>e.v4.colors.actionButton.default};
  fill: ${({theme:e})=>e.v4.colors.baseInverse.default};
`;var JC=i.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;var YV=i.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({theme:e})=>e.v4.colors.actionButton.default};
  color: ${({theme:e})=>e.v4.colors.baseInverse.default};
  cursor: pointer;
  padding: 0.1875rem 0rem;
  border-radius: 50%;
  transition: background-color 0.3s;
  flex-shrink: 0;
`,g1=o=>{var r=o,{icon:e}=r,t=I(r,["icon"]);return q.createElement(YV,d({},t),e)};var Yc=({pageId:e="create_story_page",componentId:t="*",onClick:o=()=>{}})=>{let r="back_button",{getConfig:n,isExcluded:s}=ve(),a=n(`${e}/${t}/${r}`),l=a==null?void 0:a.back_icon;return s(`${e}/${t}/${r}`)?null:l&&Je(l)?q.createElement(JC,{"data-qa-anchor":"back_button",src:l,onClick:o}):q.createElement(g1,{"data-qa-anchor":"back_button",icon:l==="back"?q.createElement(Oi,{width:20,height:20}):q.createElement(ul,{width:20,height:20}),onClick:o})};var XC=i(Ge)`
  cursor: pointer;
  fill: #ffffff;
  background-color: ${({backgroundColor:e})=>e};
`,RC=i.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;var Qc=s=>{var a=s,{pageId:e="story_page",componentId:t="*",onClick:o=()=>{},style:r}=a,n=I(a,["pageId","componentId","onClick","style"]);let l="close_button",{getConfig:m,isExcluded:c}=ve(),u=m(`${e}/${t}/${l}`),f=c(`${e}/${t}/${l}`),p=u==null?void 0:u.close_icon;return f?null:p&&Je(p)?q.createElement(RC,d({"data-qa-anchor":"close_button",src:p,onClick:o},n)):q.createElement(XC,d({"data-qa-anchor":"close_button",name:"Close",onClick:o},n))};i.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;var Kc={};var k2=a=>{var l=a,{pageId:e="story_page",componentId:t="*",onClick:o=()=>{},style:r,children:n}=l,s=I(l,["pageId","componentId","onClick","style","children"]);let m=co(),{getConfig:c,isExcluded:u}=ve(),f=c(`${e}/*/story_comment_button`),p=u(`${e}/*/story_comment_button`),g=f==null?void 0:f.background_color,y=f==null?void 0:f.comment_icon;return p?null:y&&Je(y)?q.createElement("img",d({"data-qa-anchor":"comment_button",src:y,onClick:o,style:T(d({},r),{backgroundColor:g||m.v4.colors.secondary.default}),className:Kc.uiRemoteImageButton},s)):q.createElement("button",d({"data-qa-anchor":"comment_button",onClick:o,className:Kc.uiCommentButton,style:T(d({},r),{backgroundColor:g||m.v4.colors.secondary.default})},s),q.createElement(Ge,{name:y==="comment"?y:"Comment2Icon"}),q.createElement("span",{"data-qa-anchor":"comment_button_text_view"},n))};var tv=i(Ge)`
  width: 1rem;
  height: 1rem;
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  cursor: pointer;
  border-radius: 50%;
  z-index: 100;
`,ov=i.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;var Jc=({pageId:e="story_page",componentId:t="*",onClick:o=()=>{},style:r})=>{let n=co(),s="create_new_story_button",{getConfig:a,isExcluded:l}=ve(),m=a(`${e}/${t}/${s}`),c=m==null?void 0:m.background_color,u=m==null?void 0:m.create_new_story_icon;return l(`${e}/${t}/${s}`)?null:u&&Je(u)?q.createElement(ov,{"data-qa-anchor":"create_story_icon",src:u,onClick:o,style:T(d({},r),{backgroundColor:c||n.v4.colors.secondary.default})}):q.createElement(tv,{"data-qa-anchor":"create_story_icon",name:"AddIcon",style:T(d({},r),{backgroundColor:c||n.v4.colors.secondary.default}),onClick:o})};var Rc=({pageId:e="create_story_page",componentId:t="*",onClick:o=()=>{}})=>{let r=co(),n="story_hyperlink_button",{getConfig:s,isExcluded:a}=ve(),l=s(`${e}/${t}/${n}`),m=l==null?void 0:l.background_color,c=l==null?void 0:l.hyperlink_button_icon;return a(`${e}/${t}/${n}`)?null:q.createElement(g1,{icon:c&&(c.startsWith("http://")||c.startsWith("https://"))?q.createElement("img",{src:c,alt:n,"data-qa-anchor":n,width:24,height:24}):q.createElement(pl,{width:24,height:24,fill:r.v4.colors.baseInverse.default}),onClick:o,style:{backgroundColor:m||r.v4.colors.actionButton.default}})};var nv=i.img`
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;var E2=({pageId:e="story_page",componentId:t="*",onClick:o=()=>{},style:r})=>{let n="story_impression_button",{getConfig:s,isExcluded:a}=ve(),l=s(`${e}/${t}/${n}`),m=l==null?void 0:l.impression_icon;return a(`${e}/${t}/${n}`)?null:m&&Je(m)?q.createElement(nv,{"data-qa-anchor":"reach_button",src:m,onClick:o}):q.createElement(_i,{"data-qa-anchor":"reach_button",width:20,height:20,onClick:o})};var av=i(Ge)`
  cursor: pointer;
  fill: #ffffff;
  background-color: ${({backgroundColor:e})=>e};
`,sv=i.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;var ep=s=>{var a=s,{pageId:e="story_page",componentId:t="*",onClick:o=()=>{},style:r}=a,n=I(a,["pageId","componentId","onClick","style"]);let l="overflow_menu",{getConfig:m,isExcluded:c}=ve(),u=m(`${e}/${t}/${l}`);if(c(`${e}/${t}/${l}`))return null;let p=u==null?void 0:u.overflow_menu_icon;return p&&Je(p)?q.createElement(sv,d({"data-qa-anchor":"overflow_menu_button",src:p,onClick:o},n)):q.createElement(av,d({"data-qa-anchor":"overflow_menu_button",name:"EllipsisH",onClick:o},n))};var tp=i.button`
  ${({theme:e})=>e.typography.bodyBold};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border-radius: 1.5rem;
  padding: 0.5rem 0.625rem;
  background-color: #292b32;
  cursor: pointer;
  border: none;
  color: ${({theme:e})=>e.v4.colors.baseInverse.default};
`,op=i.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.baseInverse.default};
`;var N2=l=>{var m=l,{isLiked:e,pageId:t="story_page",componentId:o="*",onClick:r=()=>{},style:n,children:s}=m,a=I(m,["isLiked","pageId","componentId","onClick","style","children"]);let c=co(),{getConfig:u,isExcluded:f}=ve(),p=u(`${t}/*/story_reaction_button`),g=f(`${t}/*/story_reaction_button`),y=p.background_color,v=p.liked_icon,h=p.unliked_icon;if(g)return null;let C=v&&(v.startsWith("http://")||v.startsWith("https://")),x=h&&(h.startsWith("http://")||h.startsWith("https://"));return e?C?q.createElement(op,d({"data-qa-anchor":"reaction_button",src:v,onClick:r,style:T(d({},n),{backgroundColor:y||c.v4.colors.secondary.default})},a),q.createElement("span",{"data-qa-anchor":"reaction_button_text_view"},s)):q.createElement(tp,d({"data-qa-anchor":"reaction_button",onClick:r},a),q.createElement(Ge,{name:v||"LikedIcon"}),q.createElement("span",{"data-qa-anchor":"reaction_button_text_view"},s)):x?q.createElement(op,d({"data-qa-anchor":"reaction_button",src:h,onClick:r,style:T(d({},n),{backgroundColor:y||c.v4.colors.secondary.default})},a),q.createElement("span",{"data-qa-anchor":"reaction_button_text_view"},s)):q.createElement(tp,d({"data-qa-anchor":"reaction_button",onClick:r},a),q.createElement(Ge,{name:h||"LikeIcon"}),q.createElement("span",{"data-qa-anchor":"reaction_button_text_view"},s))};i.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;var L2={};var rp=({pageId:e="create_story_page",componentId:t="*",onClick:o,avatar:r})=>{let n="share_story_button",{formatMessage:s}=useIntl(),{getConfig:a,isExcluded:l}=ve(),m=a(`${e}/${t}/${n}`);if(l(`${e}/${t}/${n}`))return null;let u=m==null?void 0:m.share_icon,f=u&&Je(u);return q.createElement("button",{role:"button",className:L2.uiShareStoryButton,"data-qa-anchor":"share_story_button",onClick:o},!(m!=null&&m.hide_avatar)&&q.createElement(J,{"data-qa-anchor":"share_story_button_image_view",size:"small",avatar:r}),q.createElement("span",null,s({id:"storyDraft.button.shareStory"})),f?q.createElement("img",{src:u,alt:"Share Story Icon",className:L2.remoteImageIcon}):q.createElement(Ge,{className:L2.shareStoryIcon,name:"ArrowRight2Icon"}))};var np=i(Ge)`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.25rem;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  top: 96px;
  left: 24px;
  z-index: 99999;
`,ip=i.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;var B2=a=>{var l=a,{pageId:e="story_page",componentId:t="*",isMuted:o=!1,onClick:r=()=>{},style:n}=l,s=I(l,["pageId","componentId","isMuted","onClick","style"]);let m=co(),c="speaker_button",{getConfig:u,isExcluded:f}=ve(),p=u(`${e}/${t}/${c}`);if(f(`${e}/${t}/${c}`))return null;let y=p==null?void 0:p.mute_icon,v=p==null?void 0:p.unmute_icon,h=y&&Je(y),C=v&&Je(v);return o?h?q.createElement(ip,d({"data-qa-anchor":"video_audio_button",src:y,onClick:r,style:T(d({},n),{backgroundColor:(p==null?void 0:p.background_color)||m.v4.colors.base.default})},s)):q.createElement(np,d({"data-qa-anchor":"video_audio_button",name:"UnmuteCircle",onClick:r,style:T(d({},n),{backgroundColor:(p==null?void 0:p.background_color)||m.v4.colors.base.default})},s)):C?q.createElement(ip,d({"data-qa-anchor":"video_audio_button",src:v,onClick:r,style:T(d({},n),{backgroundColor:(p==null?void 0:p.background_color)||m.v4.colors.base.default})},s)):q.createElement(np,d({"data-qa-anchor":"video_audio_button",name:"MuteCircle",onClick:r,style:T(d({},n),{backgroundColor:(p==null?void 0:p.background_color)||m.v4.colors.base.default})},s))};var dv=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 2rem;
  gap: 1rem;
  background-color: #000;
`,ap=i($V)`
  margin: 0 auto;
  width: 100%;

  .react-modal-sheet-content {
    position: relative;
    padding: 0rem 1rem;
  }
`,cv=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: #f2f3f5;
`;i.div`
  ${({theme:e})=>e.typography.body};
  color: ${({theme:e})=>e.palette.base.shade2};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border-top: 1px solid #e3e4e8;
`;i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: #000;
  color: #fff;
`;i(ap.Content)`
  position: relative;
  padding: 0rem 1rem;
`;i(ap.Scroller)``;var pv=i.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 99999;
`,F2=i(ap.Content)`
  padding: 1rem;
`;i(Qe)`
  color: #ffffff;
  cursor: pointer;
`;i(To)`
  color: #ffffff;
`;i(oo)`
  cursor: pointer;
  color: #ffffff;
`;i(_i)`
  color: #a5a9b5;
`;i(Ir)``;i($n)``;i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;i.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  height: 5rem;
`;i.div`
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  padding: 0.75rem;
  background-color: #000;
  bottom: 0;
`;i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  gap: 0.25rem;
`;i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  gap: 0.75rem;
`;i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  gap: 0.25rem;
  border-radius: 50%;
  padding: 0.5rem 0.625rem;
  background-color: #292b32;
`;i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  height: 5rem;
`;var uv=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,fv=i.div`
  position: relative;
  width: 23.438rem;
  height: 40.875rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 2;
`,gv=i.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.16) 55.05%, rgba(255, 255, 255, 0) 96.52%);
  z-index: 3;
`;i.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem 1rem 0.625rem 1rem;
  gap: 0.5rem;
`;i.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
`;i.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;i.div`
  display: flex;
  gap: 1.25rem;
  justify-content: flex-end;
  align-items: center;
`;i.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.75rem;
  align-items: center;
`;i.div`
  display: flex;
  gap: 0.25rem;
  color: #fff;
  font-size: 0.938rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.24px;
  margin-right: 0.25rem;
  align-items: center;
`;i.span`
  display: inline-flex;
  gap: 0.25rem;
  margin-bottom: 0.25rem;
  color: #fff;
  font-size: 0.813rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: -0.1px;
`;i.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;i.img`
  flex: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;i.video`
  flex: 1;
  width: 100%;
  height: 100%;
`;i.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 5rem;
`;i.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;i.ul`
  list-style: none;
`;i.li`
  margin-bottom: 0.75rem;
`;i.button`
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  cursor: pointer;
  justify-content: flex-start;
`;i(Gn)`
  width: 1.5rem;
  height: 1.5rem;
  color: #292b32;
`;var D2=i.div`
  ${({theme:e})=>e.typography.title};
  color: ${({theme:e})=>e.palette.base.default};
  text-align: center;
  border-bottom: 1px solid #e3e4e8;
  padding-bottom: 0.5rem;
`,z2=i(K)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`,O2=i.div`
  ${({theme:e})=>e.typography.bodyBold};
  color: ${({theme:e})=>e.palette.base.main};
`,yv=i(Oi)`
  cursor: pointer;
`,hv=i(fl)`
  cursor: pointer;
`,Cv=i.input`
  display: none;
`;var _2={};i.div`
  position: relative;
  display: flex;
  width: 23.438rem;
  height: 40.875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;i.div`
  position: absolute;
  top: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
`;i.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({backgroundColor:e})=>e};
  border: none;
  cursor: pointer;
`;i.div`
  display: flex;
  gap: 0.75rem;
`;var vv=i.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;i.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    ${e=>{var t,o;return ((o=(t=e.colors)==null?void 0:t[0])==null?void 0:o.hex)||"#000"}} 0%,
    ${e=>{var t,o,r;return ((r=(o=e.colors)==null?void 0:o[((t=e==null?void 0:e.colors)==null?void 0:t.length)-1])==null?void 0:r.hex)||"#000"}} 100%
  );
`;i.img`
  width: 100%;
  height: 100%;
  object-fit: ${e=>(e==null?void 0:e.imageMode)==="fit"?"contain":"cover"};
`;i.div`
  width: 100%;
  position: absolute;
  bottom: -50px;
  background-color: #000;
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem;
  overflow: hidden;
`;i.button`
  display: inline-flex;
  height: 2.5rem;
  padding: 0.375rem 0.5rem 0.25rem 0.25rem;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 1.5rem;
  background-color: #fff;
  border: none;
  color: #292b32;
  font-size: 0.938rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.24px;
  cursor: pointer;
  gap: 0.5rem;
`;var xv=i(um)`
  background-color: #000;
`;i.button`
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: none;
  top: 6rem;
  left: 1.25rem;
  z-index: 9999;
  cursor: pointer;
`;var U2=i(vv)`
  bottom: 6rem;
  z-index: 9999;
`,bv=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,Mv=i.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;i(dl)`
  width: 100%;
  height: 100%;
`;i(cl)`
  width: 100%;
  height: 100%;
`;var Iv=i.div`
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
`;i.img`
  width: auto;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  flex-grow: 1;
  ${e=>e.customStyles};
`;i(Po)`
  color: #ffffff;
  cursor: pointer;
`;i(Di)`
  color: #ffffff;
  cursor: pointer;
`;i(Qe)`
  color: #ffffff;
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;i(To)`
  color: #ffffff;
`;i(oo)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  color: #ffffff;
`;i.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;i.div`
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  padding: 0.75rem;
  background-color: #000;
  bottom: 0;
`;i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  gap: 0.25rem;
`;i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  gap: 0.75rem;
`;i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  gap: 0.25rem;
  border-radius: 50%;
  padding: 0.5rem 0.625rem;
  background-color: #292b32;
`;i.div`
  flex: 1;
`;i.div`
  height: 5rem;
  padding: 0.75rem 1rem 0.625rem 1rem;
`;i.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
`;i.div`
  z-index: 9999;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem 1rem 0.625rem 1rem;
  gap: 0.5rem;
`;i.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  flex-shrink: 0;
`;i(qn)`
  position: absolute;
  bottom: 0;
  right: 0;

  &:hover {
    cursor: pointer;
  }
`;i.div`
  display: flex;
  gap: 1.25rem;
  justify-content: flex-end;
  align-items: center;
`;i.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.75rem;
  align-items: center;
`;i.div`
  cursor: pointer;
  display: flex;
  gap: 0.25rem;
  color: #fff;
  font-size: 0.938rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.24px;
  margin-right: 0.25rem;
  align-items: center;
`;i.div`
  width: auto;
  max-width: 11.688rem;
`;i.span`
  display: inline-flex;
  gap: 0.25rem;
  margin-bottom: 0.25rem;
  color: #fff;
  font-size: 0.813rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: -0.1px;
`;i(J)`
  margin-right: 8px;
`;i.div`
  color: ${({theme:e})=>e.palette.base.shade2};
`;i(K)`
  padding: 0.5rem;
  color: ${({theme:e})=>e.palette.base.shade2};
`;i(K)`
  padding: 0.25rem;
  color: ${({theme:e,isLiked:t})=>t?e.palette.primary.main:e.palette.neutral.shade2};
`;i(K)`
  color: ${({theme:e})=>e.palette.neutral.shade2};
  padding: 0.25rem;
`;var H2=i($V)`
  margin: 0 auto;
  width: 100%;
`;i(H2.Backdrop)`
  background-color: rgba(0, 0, 0, 0.5);
`;i(H2.Container)`
  z-index: 100;
`;i(H2.Header)`
  z-index: 100;
`;i(H2.Content)`
  z-index: 100;
  padding: 1rem;
`;i(K)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #ffffff;
  align-items: start;
  justify-content: flex-start;
  overflow: hidden;
`;i.div`
  display: inline !important;
  ${({theme:e})=>e.typography.captionBold}
`;i.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem;
  background-color: #f0f0f0;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
`;i(St)`
  color: ${({theme:e})=>e.palette.neutral.main};
`;var n$=e=>e.replace("#","%23"),i$=e=>`<svg xmlns="http://www.w3.org/2000/svg" height="40">
<path d="M20 0 L 20 40" stroke="${n$(e.palette.base.shade4)}" />
</svg>`;i.div`
  display: flex;
  width: 100%;
  color: black;
  padding-top: 16px;
`;i.div`
  display: flex;
  color: black;
  padding-top: 16px;
  padding-left: 40px;
`;i(tr)`
  border: none;
  padding: 8px 0 16px;
  background-repeat: no-repeat;
  background-image: ${({theme:e})=>`url('data:image/svg+xml;utf8,${i$(e)}')`};
`;i.div`
  width: 100%;
`;i.div`
  word-break: break-all;
  margin-bottom: 5px;
`;i.div`
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
`;i.span`
  margin-left: 5px;
  color: ${({theme:e})=>e.palette.neutral.shade1};
  ${({theme:e})=>e.typography.subTitle}
`;i.span`
  margin-left: 5px;
  color: ${({theme:e})=>e.palette.neutral.shade1};
  ${({theme:e})=>e.typography.subTitle}

  &:before {
    content: '(';
  }

  &:after {
    content: ')';
  }
`;i(K)`
  color: ${({theme:e})=>e.palette.primary.main};
  padding: 0 0 0 4px;

  &:hover {
    background: none;
    text-decoration: underline;
  }
`;i.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;i.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;i.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
  padding: 2px 0;
`;i.div`
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
`;i.div`
  display: inline-flex;
  align-items: center;
  margin: 7px 0px 7px 40px;
  background: ${({theme:e})=>e.palette.base.shade4};
  color: ${({theme:e})=>e.palette.base.shade2};
  border-radius: 4px;
  padding: 4px 8px 2px 0px;
`;i(an)`
  font-size: 18px;
  width: 1.25rem;
  height: 1.25rem;
`;i.div`
  display: flex;
  padding-right: 10px;

  &.reply {
    padding: 4px 10px 4px 4px;
  }
`;i.div`
  display: flex;
  align-items: center;
`;i.span`
  font-size: 14px;
`;i(on)`
  font-size: 16px;
  margin-right: 5px;
`;i(K)``;i.div`
  display: flex;
  flex-direction: column;
`;i.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;

  > * {
    margin-left: 8px;
  }
`;i(We).attrs({rows:1,maxRows:15})`
  ${({theme:e})=>e.typography.body}
  border-radius: 0rem 0.75rem 0.75rem 0.75rem;
  height: 7.5rem;
  padding: 0.75rem;
`;var wv=i(J)`
  margin-right: 0.5rem;
`;i.div`
  color: ${({theme:e})=>e.palette.base.shade2};
`;i(K)`
  padding: 0.5rem;
  color: ${({theme:e})=>e.palette.base.shade2};
`;var Sv=i(K)`
  padding: 0.25rem;
  color: ${({theme:e,isLiked:t})=>t?e.palette.primary.main:e.palette.neutral.shade2};
`,sp=i(K)`
  color: ${({theme:e})=>e.palette.neutral.shade2};
  padding: 0.25rem;
`,_t=i($V)`
  margin: 0 auto;
  width: 100%;
`,lp=i(_t.Backdrop)`
  background-color: rgba(0, 0, 0, 0.5);
`;i(_t.Container)`
  z-index: 100;
`;var mp=i(_t.Header)`
  z-index: 100;
`,dp=i(_t.Content)`
  z-index: 100;
  padding: 0rem 1rem;
`,Pv=i(K)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
`,cp=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: start;
  justify-content: flex-start;
  overflow: hidden;
`,Tv=i.div`
  display: inline !important;
  ${({theme:e})=>e.typography.captionBold}
`;i.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem;
  background-color: #f0f0f0;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
`;var d$=e=>e.replace("#","%23"),c$=e=>`<svg xmlns="http://www.w3.org/2000/svg" height="40">
<path d="M20 0 L 20 40" stroke="${d$(e.palette.base.shade4)}" />
</svg>`,kv=i.div`
  display: flex;
  width: 100%;
  color: black;
  padding-top: 1rem;
`,Ev=i.div`
  display: flex;
  color: black;
  padding-top: 1rem;
  padding-left: 2.5rem;
`;i(tr)`
  border: none;
  padding: 0.5rem 0 1rem;
  background-repeat: no-repeat;
  background-image: ${({theme:e})=>`url('data:image/svg+xml;utf8,${c$(e)}')`};
`;var Nv=i.div`
  width: 100%;
`,Lv=i.div`
  word-break: break-all;
  margin-bottom: 0.3125rem;
`,Av=i.div`
  overflow-wrap: anywhere !important;
  word-break: break-word;
  color: ${({theme:e})=>e.palette.neutral.main};
  background-color: ${({theme:e})=>e.palette.base.shade4};
  border-radius: 0 0.75rem 0.75rem 0.75rem;
  padding: 0.75rem;
  display: inline-block;
  white-space: pre-wrap;
  ${({theme:e})=>e.typography.body}
`;i.div`
  margin-left: 0.5rem;
`;var Bv=i.span`
  margin-left: 0.3125rem;
  color: ${({theme:e})=>e.palette.neutral.shade1};
  ${({theme:e})=>e.typography.subTitle}
`,Fv=i.span`
  margin-left: 0.3125rem;
  color: ${({theme:e})=>e.palette.neutral.shade1};
  ${({theme:e})=>e.typography.subTitle}

  &:before {
    content: '(';
  }

  &:after {
    content: ')';
  }
`,Dv=i(K)`
  color: ${({theme:e})=>e.palette.primary.main};
  padding: 0 0 0 0.25rem;

  &:hover {
    background: none;
    text-decoration: underline;
  }
`,zv=i.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;i.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;var Ov=i.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
  padding: 0.125rem 0;
`,_v=i.div`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.palette.base.shade3};
  padding: 1rem 0;

  &.reply {
    display: inline-flex;
    margin-left: 2.5rem;
    background: ${({theme:e})=>e.palette.base.shade4};
    color: ${({theme:e})=>e.palette.base.shade2};
    border-radius: 0.25rem;
    margin: 0.875rem 0;
    padding: 0.25rem 0.5rem 0.125rem 0;
  }
`,Uv=i.div`
  display: inline-flex;
  align-items: center;
  margin: 0.4375rem 0 0.4375rem 2.5rem;
  background: ${({theme:e})=>e.palette.base.shade4};
  color: ${({theme:e})=>e.palette.base.shade2};
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem 0.125rem 0;
`,pp=i(an)`
  font-size: 1.125rem;
  width: 1.25rem;
  height: 1.25rem;
`,up=i.div`
  display: flex;
  padding-right: 0.625rem;

  &.reply {
    padding: 0.25rem 0.625rem 0.25rem 0.25rem;
  }
`,fp=i.div`
  display: flex;
  align-items: center;
`,gp=i.span`
  font-size: 0.875rem;
`;i(on)`
  font-size: 1rem;
  margin-right: 0.3125rem;
`;i(K)``;var Hv=i.div`
  display: flex;
  flex-direction: column;
`,jv=i.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;

  > * {
    margin-left: 0.5rem;
  }
`,Vv=i(We).attrs({rows:1,maxRows:15})`
  ${({theme:e})=>e.typography.body}
  border-radius: 0 0.75rem 0.75rem 0.75rem;
  height: 7.5rem;
  padding: 0.75rem;
`,$v=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({theme:e})=>e.v4.colors.base.shade2};
`,Gv=i.div`
  display: flex;
  align-items: center;
  flex-shrink: 1;
`,j2=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  margin-left: -0.25rem;

  &:first-child {
    margin-left: 0;
  }
`;var g$=8,y$=({text:e,className:t,mentionees:o,maxLines:r=g$})=>{let[n,s]=useState(!1),a=useMemo(()=>ta(e||"",Zi(o)),[o,e]),l=()=>s(!0),m=e?q.createElement(Av,{"data-qa-anchor":"comment-content",className:t},q.createElement(v6.Atom,null,a.map(c=>{let u=`${e}-${c.start}-${c.end}`,f=e.substring(c.start,c.end);if(c.highlight){let p=o==null?void 0:o.find(g=>g.index===c.start);return p?q.createElement(ea,{key:u,mentionee:p},f):q.createElement("span",{key:u},f)}return q.createElement(mn,{key:u},f)}))):null;return n?m:m?q.createElement(v6,{lines:r,ellipsis:q.createElement(Dv,{onClick:l},q.createElement(FormattedMessage,{id:"comment.readmore"}))},m):null},Zv=y$;var v$=({authorName:e,authorAvatar:t,canLike:o=!0,canReply:r=!1,reactions:n={},reactionsCount:s,createdAt:a,editedAt:l,text:m,markup:c,onClickReply:u,onClickOverflowMenu:f,handleEdit:p,cancelEditing:g,handleLike:y,isEditing:v,onChange:h,queryMentionees:C,isBanned:x,isLiked:M,mentionees:S,options:b,referenceId:P,referenceType:k,commentId:A,onClickReactionList:L})=>q.createElement(q.Fragment,null,q.createElement(wv,{avatar:t,backgroundImage:ce}),q.createElement(Nv,null,q.createElement(Lv,null,q.createElement(Tv,null,e),q.createElement(v6.Atom,null,q.createElement(q.Fragment,null,x&&q.createElement($t,{style:{marginLeft:"0.265rem",marginTop:"1px"}})))),v?q.createElement(Hv,null,q.createElement(Vv,{"data-qa-anchor":"edit_comment_component/text_field",multiline:!0,mentionAllowed:!0,value:c,queryMentionees:C,onChange:O=>h==null?void 0:h(O)}),q.createElement(jv,null,q.createElement(K,{"data-qa-anchor":"edit_comment_component/cancel_button",onClick:g},q.createElement(FormattedMessage,{id:"cancel"})),q.createElement(oe,{"data-qa-anchor":"edit_comment_component/save_button",onClick:()=>p==null?void 0:p(m)},q.createElement(FormattedMessage,{id:"save"})))):q.createElement(Zv,{text:m,mentionees:S}),!v&&(o||r||b.length>0)&&q.createElement(Ov,null,q.createElement(zv,null,q.createElement(Bv,null,ma(a),((l==null?void 0:l.getTime())||0)-((a==null?void 0:a.getTime())||0)>0&&q.createElement(Fv,null,q.createElement(FormattedMessage,{id:"comment.edited"}))),o&&q.createElement(Sv,{isLiked:M,onClick:y},M?q.createElement(FormattedMessage,{id:"post.liked"}):q.createElement(FormattedMessage,{id:"post.like"})),r&&q.createElement(sp,{"data-qa-anchor":"comment-reply-button",onClick:()=>u==null?void 0:u(e,k,P,A)},q.createElement(FormattedMessage,{id:"reply"})),q.createElement(sp,{onClick:f},q.createElement(oo,{width:20,height:20}))),q.createElement(K,{onClick:L},s>0&&q.createElement($v,null,bp(s),q.createElement(Gv,null,n[De]>0&&q.createElement(j2,null,q.createElement(Ui,null)),n[iu]>0&&q.createElement(j2,null,q.createElement(ji,null)),n[au]>0&&q.createElement(j2,null,q.createElement(Hi,null)))))))),Wv=v$;var Ct={};var Yv=e=>{let r=be({fetcher:ReactionRepository.getReactions,params:e,shouldCall:()=>!!e.referenceId&&!!e.referenceType}),{items:t}=r,o=I(r,["items"]);return d({reactions:t},o)};var h1=({referenceId:e,referenceType:t})=>{let{reactions:o}=Yv({referenceId:e,referenceType:t}),[r,n]=useState("All"),s=l=>{n(l);},a=r==="All"?o:o.filter(l=>l.reactionName===r.toLowerCase());return o==null?null:q.createElement("div",{className:Ct.reactionListContainer},q.createElement("div",{className:Ct.tabList},q.createElement("div",{className:`${Ct.tabItem} ${r==="All"?Ct.active:""}`,onClick:()=>s("All")},q.createElement(he.Title,null,q.createElement("span",{className:Ct.reactionEmoji},"All ",q.createElement("span",{className:Ct.tabCount},o.length)))),["like","love","fire"].map(l=>{let m=o.filter(c=>c.reactionName===l).length;return q.createElement("div",{key:l,className:`${Ct.tabItem} ${r===l?Ct.active:""}`,onClick:()=>s(l)},l==="like"&&q.createElement(he.Title,null,q.createElement("span",{className:Ct.reactionEmoji},q.createElement(Ui,null)," ",q.createElement("span",{className:Ct.tabCount},m))),l==="love"&&q.createElement(he.Title,null,q.createElement("span",{className:Ct.reactionEmoji},q.createElement(ji,null)," ",q.createElement("span",{className:Ct.tabCount},m))),l==="fire"&&q.createElement(he.Title,null,q.createElement("span",{className:Ct.reactionEmoji},q.createElement(Hi,null)," ",q.createElement("span",{className:Ct.tabCount},m))))})),q.createElement("div",{className:Ct.userList},a.map(l=>{var m,c,u;return q.createElement(Fragment,{key:l.reactionId},q.createElement("div",{className:Ct.userItem},q.createElement("div",{className:Ct.userDetailsContainer},q.createElement(J,{size:"small",avatar:(c=(m=l.user)==null?void 0:m.avatar)==null?void 0:c.fileUrl}),q.createElement(he.Body,null,(u=l.user)==null?void 0:u.displayName))))})))};var S$=e=>Fe({fetcher:StoryRepository.getStoryByStoryId,params:e,shouldCall:()=>!!e}),Qv=S$;var k$=5,E$=()=>q.createElement(_v,{"data-qa-anchor":"comment-deleted-comment"},q.createElement(up,null,q.createElement(pp,null)),q.createElement(fp,null,q.createElement(gp,{"data-qa-anchor":"comment-deleted-comment-text"},q.createElement(FormattedMessage,{id:"comment.deleted"})))),N$=()=>q.createElement("div",null,q.createElement(Uv,{"data-qa-anchor":"reply-deleted-reply"},q.createElement(up,{className:"reply"},q.createElement(pp,null)),q.createElement(fp,null,q.createElement(gp,{"data-qa-anchor":"reply-deleted-reply-text"},q.createElement(FormattedMessage,{id:"reply.deleted"})))));function Xv(e){var t;return e==null?"":typeof e.data=="string"?e.data:((t=e==null?void 0:e.data)==null?void 0:t.text)||""}var L$=({commentId:e,readonly:t,onClickReply:o,style:r,shouldAllowInteraction:n})=>{var we,Ko;let s=co(),a=Ji(e),l=Qv(a==null?void 0:a.referenceId),[m,c]=useState(!1),[u,f]=useState(""),p=j(a==null?void 0:a.userId),g=_({fileId:p==null?void 0:p.avatarFileId,imageSize:"small"}),{userRoles:y}=H(),{toggleFlagComment:v,isFlaggedByMe:h}=om(e),[C,x]=useState(!1),{formatMessage:M}=useIntl(),[S,b]=useState(!1),P=()=>c(qe=>!qe);Ms({commentId:e});let{text:k,markup:A,mentions:L,onChange:O,queryMentionees:Y,resetState:B,clearAll:E}=wt({targetId:l==null?void 0:l.targetId,targetType:l==null?void 0:l.targetType,remoteText:Xv(a),remoteMarkup:Wi(Xv(a),(a==null?void 0:a.metadata)||{})}),{canDelete:G,canEdit:F,canLike:ee,canReply:se,canReport:ie}=rm(a,t,y);if(l==null&&a==null)return q.createElement(cn,null);let D=()=>w(void 0,null,function*(){return v()}),U=(qe,mo,vr)=>w(void 0,null,function*(){return e&&CommentRepository.updateComment(e,{data:{text:qe},metadata:vr,mentionees:mo})}),ne=()=>w(void 0,null,function*(){return e&&CommentRepository.deleteComment(e)}),ue=()=>w(void 0,null,function*(){try{yield D(),h?Z.success({content:M({id:"report.unreportSent"})}):Z.success({content:M({id:"report.reportSent"})});}catch(qe){qe instanceof Error&&Z.error({content:qe.message});}}),Me=()=>{x(!0),P();},Ce=()=>{x(!1),B();},fe=()=>{let{metadata:qe,mentionees:mo}=sn(L);U(k,mo,qe),E(),x(!1);},Ae=!!((we=a==null?void 0:a.myReactions)!=null&&we.includes(De)),Ve=()=>w(void 0,null,function*(){a&&(Ae?yield ReactionRepository.removeReaction("comment",a==null?void 0:a.commentId,De):yield ReactionRepository.addReaction("comment",a==null?void 0:a.commentId,De));}),Ee=!!(a!=null&&a.parentId),Ie=()=>{me({"data-qa-anchor":"delete-comment",title:q.createElement(FormattedMessage,{id:Ee?"reply.delete":"comment.delete"}),content:q.createElement(FormattedMessage,{id:Ee?"reply.deleteBody":"comment.deleteBody"}),cancelText:M({id:"comment.deleteConfirmCancelText"}),okText:M({id:"comment.deleteConfirmOkText"}),onOk:ne});},Nt=[F?{name:M(Ee?{id:"reply.edit"}:{id:"comment.edit"}),action:Me,icon:q.createElement(hl,{width:24,height:24,fill:s.palette.base.default})}:null,ie?{name:M(h?{id:"report.undoReport"}:{id:"report.doReport"}),action:D,icon:q.createElement(yl,{width:24,height:24,fill:s.palette.base.default})}:null,G?{name:M(Ee?{id:"reply.delete"}:{id:"comment.delete"}),action:Ie,icon:q.createElement(Xo,{width:24,height:24,fill:s.palette.base.default})}:null].filter(ge);if(a==null)return null;if(a!=null&&a.isDeleted)return Ee?q.createElement(N$,null):q.createElement(cp,null,q.createElement(E$,null));let Lt=q.createElement(Wv,{commentId:a==null?void 0:a.commentId,authorName:(p==null?void 0:p.displayName)||(p==null?void 0:p.userId)||M({id:"anonymous"}),authorAvatar:g,canDelete:G,canEdit:F,canLike:ee,canReply:se,canReport:ie,isBanned:p==null?void 0:p.isGlobalBanned,createdAt:a!=null&&a.createdAt?new Date(a.createdAt):void 0,editedAt:a!=null&&a.editedAt?new Date(a==null?void 0:a.editedAt):void 0,mentionees:(Ko=a==null?void 0:a.metadata)==null?void 0:Ko.mentioned,metadata:a==null?void 0:a.metadata,reactions:a==null?void 0:a.reactions,reactionsCount:a==null?void 0:a.reactionsCount,text:k,markup:A,handleReportComment:ue,startEditing:Me,cancelEditing:Ce,handleEdit:fe,handleLike:Ve,handleDelete:Ie,isEditing:C,queryMentionees:Y,isLiked:Ae,isReported:h,isReplyComment:Ee,onChange:O,onClickOverflowMenu:P,options:Nt,onClickReply:()=>o==null?void 0:o(p==null?void 0:p.displayName,a.referenceType,a.referenceId,a.commentId),onClickReactionList:()=>{f(a.commentId);}});return q.createElement(q.Fragment,null,Ee?q.createElement(Ev,{"data-qa-anchor":"reply"},Lt):q.createElement(cp,{style:r},q.createElement(kv,{"data-qa-anchor":"comment"},Lt),a.children.length>0&&q.createElement(Qa,{parentId:a.commentId,referenceType:a.referenceType,referenceId:a.referenceId,readonly:t,isExpanded:S,limit:k$})),q.createElement(_t,{isOpen:m,onClose:P,mountPoint:document.getElementById("asc-uikit-stories-viewer"),detent:"content-height"},q.createElement(_t.Container,null,q.createElement(mp,null),q.createElement(dp,null,Nt.map(qe=>q.createElement(Pv,{onClick:()=>{qe.action(),c(!1);}},qe==null?void 0:qe.icon,qe.name)))),q.createElement(lp,{onTap:P})),q.createElement(_t,{isOpen:!!u,onClose:()=>f(""),mountPoint:document.getElementById("asc-uikit-stories-viewer"),detent:"full-height"},q.createElement(_t.Container,null,q.createElement(mp,null),q.createElement(dp,null,q.createElement(_t.Scroller,null,q.createElement(h1,{referenceId:a.commentId,referenceType:"comment"})))),q.createElement(lp,{onTap:()=>f("")})))},Rv=memo(e=>{let t=N("Comment");return t?t(e):q.createElement(L$,d({},e))});var Qa=({parentId:e,referenceId:t,referenceType:o,limit:r=5,readonly:n=!1,isExpanded:s=!0,onClickReply:a,style:l,shouldAllowInteraction:m})=>{let[c,u]=useState(""),{comments:f,hasMore:p,loadMore:g}=Ps({parentId:e,referenceId:t,referenceType:o,limit:r}),{formatMessage:y}=useIntl(),v=b=>{u(b);},h=()=>{u("");},C=!!e,x=f==null?void 0:f.length,M=C?y({id:"collapsible.viewMoreReplies"},{count:x}):y({id:"collapsible.viewMoreComments"}),S=C?q.createElement(im,null,q.createElement(nm,null)):null;return (f==null?void 0:f.length)===0&&o==="story"?q.createElement(am,null,y({id:"storyViewer.commentSheet.empty"})):(f==null?void 0:f.length)===0?null:q.createElement("div",{style:{maxHeight:"calc(100vh - 16rem)",overflowY:"auto"}},q.createElement(ct,{hasMore:p,loadMore:g,text:M,className:C?"reply-button":"comments-button",appendIcon:null,prependIcon:S,isExpanded:s,contentSlot:f.map(b=>q.createElement(Rv,{key:b.commentId,commentId:b.commentId,readonly:n,onClickReply:()=>a==null?void 0:a(b),style:l,onClickReactionList:()=>v(b.commentId),shouldAllowInteraction:m}))}),c&&q.createElement(_t,{isOpen:!!c,onClose:h,detent:"full-height",mountPoint:document.getElementById("asc-uikit-stories-viewer"),rootId:"comment-reaction-list-sheet"},q.createElement(_t.Container,null,q.createElement(_t.Header,null),q.createElement(_t.Content,null,q.createElement(h1,{referenceId:c,referenceType:"comment"})))))};memo(Qa);var ex=i(J)`
  margin-right: 8px;
`,D$=i.div`
  display: flex;
  padding: 10px 12px 10px 16px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: ${({theme:e})=>e.palette.base.shade4};
  transform: translateY(100%);
  transition: transform 0.5s ease-in-out; /* Adjust the duration and timing function as needed */
`,tx=i.span`
  ${({theme:e})=>e.typography.body};
  color: ${({theme:e})=>e.palette.base.shade2};
`,ox=i.span`
  ${({theme:e})=>e.typography.bodyBold};
  color: ${({theme:e})=>e.palette.base.shade2};
`;i(D$)`
  transform: translateY(0%);
`;var rx=i.div`
  width: 100%;
  padding: 1rem;
  background: ${({theme:e})=>e.palette.system.background};
  display: flex;
  align-items: center;
`,nx=i(We).attrs({rows:1,maxRows:15})`
  outline: none;
  flex-grow: 1;
  font: inherit;
  font-size: 14px;
  resize: vertical;
  border-radius: 1.25rem;
  color: ${({theme:e})=>e.palette.base.shade2};
  background-color: ${({theme:e})=>e.palette.base.shade4};
  border-radius: 20px;
`,ix=i(K)`
  color: ${({theme:e})=>e.palette.primary.main} !important;
  cursor: pointer !important;
  padding: 0.625rem;
  margin-left: 0.625rem;
`;var U$=30,H$=5e4,G2=({style:e,userToReply:t,onSubmit:o,targetId:r})=>{let{currentUserId:n}=H(),s=j(n),a=_({fileId:s==null?void 0:s.avatarFileId,imageSize:"small"}),{text:l,markup:m,mentions:c,mentionees:u,metadata:f,onChange:p,clearAll:g,queryMentionees:y}=wt({targetId:r,targetType:"community"}),{formatMessage:v}=useIntl(),h=useRef(null);if(useEffect(()=>{var S;(S=h.current)==null||S.focus();},[]),r==null)return q.createElement(cn,null);let C=()=>{if(l!==""){if(c&&(c==null?void 0:c.length)>U$)return It({title:q.createElement(FormattedMessage,{id:"CommentComposeBar.unableToMention"}),content:q.createElement(FormattedMessage,{id:"CommentComposeBar.overMentionees"}),okText:q.createElement(FormattedMessage,{id:"CommentComposeBar.okText"})});if((l==null?void 0:l.length)>H$)return It({title:q.createElement(FormattedMessage,{id:"CommentComposeBar.unableToPost"}),content:q.createElement(FormattedMessage,{id:"CommentComposeBar.overCharacter"}),okText:q.createElement(FormattedMessage,{id:"CommentComposeBar.done"})});o==null||o(l,u,f),g==null||g();}},x=l==="",M=t?v({id:"CommentComposeBar.replayTo"})+t:v({id:"CommentComposeBar.saySomething"});return q.createElement(rx,{style:e},q.createElement(ex,{size:"small",avatar:a,backgroundImage:ce}),q.createElement(nx,{ref:h,"data-qa-anchor":"comment-compose-bar-textarea",placeholder:M,value:m,multiline:!0,mentionAllowed:!0,queryMentionees:y,onChange:S=>p==null?void 0:p(S),onKeyPress:S=>S.key==="Enter"&&C()}),q.createElement(ix,{"data-qa-anchor":t?"comment-compose-bar-reply-button":"comment-compose-bar-add-comment-button",disabled:x,onClick:C},v({id:"storyViewer.commentComposeBar.submit"})))};i.div`
  padding: 0 1rem;
`;var ax=i.div`
  ${({theme:e})=>e.typography.body};
  color: ${({theme:e})=>e.palette.base.shade2};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border-top: 1px solid #e3e4e8;
`;i(Qe)`
  fill: ${({theme:e})=>e.palette.base.shade2};
  width: 20px;
  height: 20px;
`;var yp=({communityId:e,isJoined:t,shouldAllowCreation:o,isReplying:r,replyTo:n,onCancelReply:s,referenceType:a,referenceId:l,style:m})=>{let{formatMessage:c}=useIntl(),u=(p,g,y)=>w(void 0,null,function*(){yield CommentRepository.createComment({referenceType:"story",referenceId:l,data:{text:p},mentionees:g,metadata:y});}),f=(p,g,y)=>w(void 0,null,function*(){yield CommentRepository.createComment({referenceType:n==null?void 0:n.referenceType,referenceId:n==null?void 0:n.referenceId,data:{text:p},parentId:n==null?void 0:n.commentId,metadata:y,mentionees:g});});return t&&o?q.createElement(q.Fragment,null,r&&q.createElement(cv,null,q.createElement(tx,null,q.createElement(FormattedMessage,{id:"storyViewer.commentSheet.replyingTo"})," ",q.createElement(ox,null,n==null?void 0:n.userId)),q.createElement(Qe,{width:20,height:20,onClick:s})),r?q.createElement(G2,{targetId:e,userToReply:n==null?void 0:n.userId,onSubmit:(p,g,y)=>{f(p,g,y),s==null||s();},style:m}):q.createElement(G2,{targetId:e,onSubmit:(p,g,y)=>u(p,g,y),style:m})):t&&o?q.createElement(ax,null,q.createElement(gl,null)," ",c({id:"storyViewer.commentSheet.disabled"})):null};var $$=5,Ja=({referenceType:e,referenceId:t,community:o={},shouldAllowInteraction:r=!0,shouldAllowCreation:n=!0})=>{let[s,a]=useState(!1),[l,m]=useState(null),c=f=>{a(!0),m(f);},u=()=>{a(!1),m(null);};return q.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column"}},q.createElement("div",{style:{overflowY:"auto",flexGrow:1}},q.createElement(Qa,{referenceId:t,referenceType:e,onClickReply:c,shouldAllowInteraction:r,limit:$$})),q.createElement(pv,null,q.createElement(yp,{communityId:o.communityId,referenceId:t,referenceType:e,isReplying:s,replyTo:l,isJoined:o.isJoined,shouldAllowCreation:n,onCancelReply:u})))};var je={};var Y$=30,Cp=({pageId:e="*",isOpen:t,isHaveHyperLink:o,onClose:r,onSubmit:n,onRemove:s})=>{var P,k,A;let a="hyper_link_config_component",{getConfig:l}=ve(),m=l(`${e}/${a}/*`),c=(m==null?void 0:m.theme.light)||{},u=l("*/hyper_link_config_component/cancel_button"),f=l("*/hyper_link_config_component/done_button"),{formatMessage:p}=useIntl(),{client:g}=H(),y=z$1.object({url:z$1.string().refine(L=>w(void 0,null,function*(){return L?yield g==null?void 0:g.validateUrls([L]).catch(()=>!1):!0}),p({id:"storyCreation.hyperlink.validation.error.whitelisted"})),customText:z$1.string().optional().refine(L=>w(void 0,null,function*(){return L?yield g==null?void 0:g.validateTexts([L]).catch(()=>!1):!0}),p({id:"storyCreation.hyperlink.validation.error.blocked"}))}),{watch:v,register:h,handleSubmit:C,formState:{errors:x}}=useForm({resolver:zodResolver(y)}),M=L=>w(void 0,null,function*(){n(L),r();}),S=()=>{s(),r();},b=()=>{me({title:p({id:"storyCreation.hyperlink.removeConfirm.title"}),content:p({id:"storyCreation.hyperlink.removeConfirm.content"}),cancelText:p({id:"storyCreation.hyperlink.removeConfirm.cancel"}),okText:p({id:"storyCreation.hyperlink.removeConfirm.confirm"}),onOk:S});};return q.createElement(ur,{detent:"full-height",mountPoint:document.getElementById("asc-uikit-create-story"),rootId:"asc-uikit-create-story",isOpen:t,onClose:r},q.createElement(qC,null,q.createElement($e.Header,{style:{backgroundColor:c==null?void 0:c.primary_color,color:c==null?void 0:c.secondary_color,borderTopLeftRadius:"0.5rem",borderTopRightRadius:"0.5rem"}}),q.createElement(ZC,{style:{backgroundColor:c==null?void 0:c.primary_color,color:c==null?void 0:c.secondary_color}},q.createElement("div",{className:je.headerContainer},q.createElement(K,{onClick:r},(u==null?void 0:u.cancel_button_text)||p({id:"storyCreation.hyperlink.bottomSheet.cancel"}),(u==null?void 0:u.cancel_icon)&&q.createElement("img",{src:u==null?void 0:u.cancel_icon,width:16,height:16})),q.createElement("div",{className:je.headerTitle},p({id:"storyCreation.hyperlink.bottomSheet.title"})),q.createElement(K,{style:{backgroundColor:(f==null?void 0:f.background_color)||(c==null?void 0:c.primary_color),color:c==null?void 0:c.secondary_color},form:"asc-story-hyperlink-form",type:"submit",className:je.styledSecondaryButton},(f==null?void 0:f.done_button_text)||p({id:"storyCreation.hyperlink.bottomSheet.submit"}),(f==null?void 0:f.done_icon)&&q.createElement("img",{src:f.done_icon,width:16,height:16})))),q.createElement(WC,{style:{backgroundColor:c==null?void 0:c.primary_color,color:c==null?void 0:c.secondary_color}},q.createElement("div",{className:je.hyperlinkFormContainer},q.createElement("form",{id:"asc-story-hyperlink-form",onSubmit:C(M),className:je.form},q.createElement("div",{className:je.inputContainer},q.createElement("label",{htmlFor:"asc-uikit-hyperlink-input-url",className:`${je.label} ${je.required}`},p({id:"storyCreation.hyperlink.form.urlLabel"})),q.createElement("input",d({id:"asc-uikit-hyperlink-input-url",placeholder:p({id:"storyCreation.hyperlink.form.urlPlaceholder"}),className:`${je.input} ${x!=null&&x.url?je.hasError:""}`},h("url"))),(x==null?void 0:x.url)&&q.createElement("span",{className:je.errorText},(P=x==null?void 0:x.url)==null?void 0:P.message)),q.createElement("div",{className:je.inputContainer},q.createElement("div",{className:je.labelContainer},q.createElement("label",{htmlFor:"asc-uikit-hyperlink-input-link-text",className:je.label},p({id:"storyCreation.hyperlink.form.linkTextLabel"})),q.createElement("div",{className:je.characterCount},(k=v("customText"))==null?void 0:k.length," / ",Y$)),q.createElement("input",d({id:"asc-uikit-hyperlink-input-link-text",placeholder:p({id:"storyCreation.hyperlink.form.linkTextPlaceholder"}),className:`${je.input} ${x!=null&&x.customText?je.hasError:""}`},h("customText"))),(x==null?void 0:x.customText)&&q.createElement("span",{className:je.errorText},(A=x==null?void 0:x.customText)==null?void 0:A.message),q.createElement("label",{className:je.description},p({id:"storyCreation.hyperlink.form.linkTextDescription"}))),o&&q.createElement("div",{className:je.inputContainer},q.createElement(K,{onClick:b,className:je.removeLinkButton},q.createElement(Xo,{className:je.removeIcon}),p({id:"storyCreation.hyperlink.form.removeButton"})),q.createElement("div",{className:je.divider})))))))};var mx=i(zi)`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  z-index: 2;
`,dx=i(qn)`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  z-index: 2;
`,cx=i.input`
  display: none;
`,px=i.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  cursor: pointer;
`,ux=i.div`
  position: relative;
  width: 3rem;
  display: flex;
  gap: 0.13rem;
  flex-direction: column;
  text-align: center;
  padding: 1rem 0.75rem;
  align-items: center;
`,fx=i(J)`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  z-index: 1;
  cursor: pointer;
`,gx=i.div`
  ${({theme:e})=>e.typography.caption};
  color: ${({theme:e})=>e.palette.base.main};
  cursor: pointer;
`;i(qn)`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  z-index: 2;
`;var vp=Xr`
  0% {
    stroke-dashoffset: 339;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,yx=i.circle`
  animation: ${e=>e.uploading?vp:"none"} 2s linear 0s infinite;
  -webkit-animation: ${e=>e.uploading?vp:"none"} 2s linear 0s infinite;
  -moz-animation: ${e=>e.uploading?vp:"none"} 2s linear 0s infinite;
`;var Q$=a=>{var l=a,{pageId:e="*",componentId:t="story_tab_component",isSeen:o=!1,uploading:r=!1,isErrored:n=!1}=l,s=I(l,["pageId","componentId","isSeen","uploading","isErrored"]);var g,y;let m="story_ring",{getConfig:c,isExcluded:u}=ve(),f=c(`${e}/${t}/${m}`);return u(`${e}/${t}/${m}`)?null:n?q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",fill:"none",viewBox:"0 0 48 48"},s),q.createElement("circle",{cx:"24",cy:"24",r:"23",stroke:"#FA4D30",strokeWidth:"2"})):q.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",fill:"none",viewBox:"0 0 48 48"},q.createElement("defs",null,q.createElement("linearGradient",{id:"story-ring-gradient",x1:"35.4004",y1:"1.875",x2:"10.6504",y2:"45.75",gradientUnits:"userSpaceOnUse"},q.createElement("stop",{stopColor:(g=f==null?void 0:f.progress_color)==null?void 0:g[0]}),q.createElement("stop",{offset:1,stopColor:(y=f==null?void 0:f.progress_color)==null?void 0:y[1]}))),q.createElement("circle",{fill:"none",style:{stroke:"var(--asc-color-secondary-shade4)"},cx:"24",cy:"24",r:"23",strokeWidth:"2",strokeDasharray:339,strokeDashoffset:0}),!o&&q.createElement(yx,{cx:"24",cy:"24",r:"23",strokeWidth:"2",strokeLinecap:"round",stroke:"url(#story-ring-gradient)",fill:"none",strokeDashoffset:339,strokeDasharray:339/2,uploading:r,transform:"rotate(-90, 24, 24)"}))},hx=Q$;var Cx=createContext({file:null,setFile:()=>{}}),gr=()=>useContext(Cx),vx=({children:e})=>{let[t,o]=useState(null),r={file:t,setFile:o};return q.createElement(Cx.Provider,{value:r},e)};var eG=({community:e})=>{let{currentUserId:t,userRoles:o}=H(),{moderators:r}=Er(e==null?void 0:e.communityId),n=r.find(l=>l.userId===t),s=o.find(l=>l==="global-admin")!=null,a=n!=null;return {isModerator:a,canEdit:s||a,canReview:s||a}},q2=eG;var W2=e=>{let{onEditCommunity:t}=V(),o=Ze(e),r=_({fileId:o==null?void 0:o.avatarFileId,imageSize:"medium"}),{posts:n}=zo({targetType:"community",targetId:e,feedType:"reviewing"}),s=Aa(o==null?void 0:o.categoryIds),{canReview:a,canEdit:l}=q2({community:o}),m=useMemo(()=>(n==null?void 0:n.length)||0,[n]);return {community:o,reviewingPosts:n,avatarFileUrl:r,communityCategories:s,pendingPostsCount:m,canEditCommunity:l,canReviewCommunityPosts:a,onEditCommunity:t,joinCommunity:()=>e&&CommunityRepository.joinCommunity(e),leaveCommunity:()=>e&&CommunityRepository.leaveCommunity(e),updateCommunity:g=>e&&CommunityRepository.updateCommunity(e,g),closeCommunity:()=>e&&CommunityRepository.deleteCommunity(e)}};var Y2=({type:e,communityId:t})=>{let {onClickStory:o}=V(),{stories:r}=Wa({targetId:t,targetType:"community",options:{orderBy:"asc",sortBy:"createdAt"}}),{avatarFileUrl:n}=W2(t),{setFile:s}=gr(),l=useRef(null),m=()=>{l.current&&l.current.click();},c=x=>{var S;let M=(S=x.target.files)==null?void 0:S[0];M&&s(M);},u=()=>{!r||!t||o(t);},{client:f}=H(),p=rr(f,t),g=(r==null?void 0:r.length)>0,y=r.every(x=>x==null?void 0:x.isSeen),v=r.some(x=>(x==null?void 0:x.syncState)==="syncing"),h=r.some(x=>(x==null?void 0:x.syncState)==="error");return (()=>{switch(e){case"communityFeed":return q.createElement(ux,null,q.createElement(px,null,g&&q.createElement(hx,{pageId:"*",componentId:"story_tab_component",isSeen:y,uploading:v,isErrored:h}),q.createElement(fx,{onClick:u,avatar:n,backgroundImage:lt}),p&&q.createElement(q.Fragment,null,q.createElement(dx,{onClick:m}),q.createElement(cx,{ref:l,type:"file",accept:"image/*,video/*",onChange:c})),h&&q.createElement(mx,null)),q.createElement(v6,{lines:1},q.createElement(gx,null,"Story")));default:return null}})()};var xx=i.a`
  border: ${({theme:e})=>`1px solid ${e.v4.colors.base.shade4}`};
  color: ${({theme:e})=>e.v4.colors.secondary.default};
  background: ${({theme:e})=>e.v4.colors.hyperlink.default};
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1rem 0.625rem 0.75rem;
  border-radius: 1.5rem;
  transition: background-color 0.3s, color 0.3s;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.015rem;
  gap: 0.5rem;
`,bx=i(Ge)`
  fill: ${({theme:e})=>e.v4.colors.primary.default};
`;var Mi=n=>{var s=n,{href:e,children:t,icon:o=q.createElement(bx,{name:"LinkIcon",size:16})}=s,r=I(s,["href","children","icon"]);return q.createElement(xx,d({href:e},r),o&&o,t)};var Fn={};var iG=Xr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,aG=i.svg`
  animation: ${iG} 2s linear infinite;
`,sG=e=>q.createElement(aG,d({xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 21 21",fill:"none"},e),q.createElement("circle",{cx:"10.5",cy:"10.5",r:"9",fill:"none",stroke:"white",strokeWidth:"2"}),q.createElement("circle",{cx:"10.5",cy:"10.5",r:"9",fill:"none",stroke:"#1054DE",strokeWidth:"2",strokeDasharray:"46.75",strokeDashoffset:"21",strokeLinecap:"round",strokeLinejoin:"round"})),Q2=sG;var dG=({syncState:e,reach:t,commentsCount:o,totalLikes:r,isLiked:n,storyId:s,onClickComment:a})=>{let[l,m]=useState(n),[c,u]=useState(r),{formatMessage:f}=useIntl(),p=()=>w(void 0,null,function*(){try{n?yield ReactionRepository.removeReaction("story",s,De):yield ReactionRepository.addReaction("story",s,De);}catch(g){console.error("Can't toggle like",g);}});return useEffect(()=>{m(n),u(r);},[n,r]),e==="syncing"?q.createElement("div",{className:Fn.viewStoryCompostBarContainer},q.createElement("div",{className:Fn.viewStoryUploadingWrapper},q.createElement(Q2,{width:20,height:20}),f({id:"storyViewer.footer.uploading"}))):e==="error"?q.createElement("div",{className:Fn.viewStoryFailedCompostBarContainer},q.createElement("div",{className:Fn.viewStoryFailedCompostBarWrapper},q.createElement(zi,null),f({id:"storyViewer.footer.failed"})),q.createElement(oo,null)):q.createElement("div",{className:Fn.viewStoryCompostBarContainer},q.createElement("div",{className:Fn.viewStoryCompostBarViewIconContainer},q.createElement(E2,{pageId:"story_page",componentId:"*"}),bp(t||0)),q.createElement("div",{className:Fn.viewStoryCompostBarEngagementContainer},q.createElement(k2,{onClick:a,pageId:"story_page",componentId:"*"},bp(o)||0),q.createElement(N2,{onClick:p,pageId:"story_page",isLiked:n},bp(c||0))))},K2=dG;var xo={};var uG=({avatar:e,heading:t,subheading:o,isHaveActions:r,isOfficial:n,isPaused:s,onPlay:a,onPause:l,onAction:m,onClose:c,onClickCommunity:u,haveStoryPermission:f,addStoryButton:p})=>q.createElement("div",{className:xo.viewStoryHeaderContainer},q.createElement("div",{className:xo.viewStoryHeadingInfoContainer},q.createElement("div",{className:xo.avatarContainer},q.createElement(J,{"data-qa-anchor":"community_avatar",avatar:e,backgroundImage:lt}),f&&p),q.createElement("div",{className:xo.viewStoryInfoContainer},q.createElement("div",{className:xo.viewStoryHeading},q.createElement(v6,{lines:1},q.createElement("div",{className:xo.viewStoryHeadingTitle,"data-qa-anchor":"community_display_name",onClick:u},t)),n&&q.createElement(To,{className:xo.verifiedBadge})),q.createElement("span",{className:xo.viewStorySubHeading},o))),q.createElement("div",{className:xo.viewStoryHeaderListActionsContainer},s?q.createElement(Po,{className:xo.playStoryButton,"data-qa-anchor":"play_button",onClick:a}):q.createElement(Di,{className:xo.pauseStoryButton,"data-qa-anchor":"pause_button",onClick:l}),r&&q.createElement(ep,{pageId:"story_page",componentId:"*",onClick:m}),q.createElement(Qc,{pageId:"story_page",componentId:"*",onClick:c}))),J2=uG;var hG=({story:e,action:t,config:o})=>{var Lt,we,Ko,qe,mo,vr,Yr;let{formatMessage:r}=useIntl(),{onBack:n,onClickCommunity:s}=V(),[a,l]=useState(!1),[m,c]=useState(!1),[u,f]=useState(!1),[p,g]=useState(!1),{width:y,height:v,loader:h,storyStyles:C}=o,{client:x}=H(),M=!!(e&&e.myReactions&&e.myReactions.includes(De)),S=e.reactions[De]||0,{storyId:b,syncState:P,reach:k,commentsCount:A,createdAt:L,creator:O,community:Y,actions:B,handleAddIconClick:E,addStoryButton:G,fileInputRef:F}=e,ee=(Y==null?void 0:Y.isJoined)||!1,se=_({fileId:(Y==null?void 0:Y.avatarFileId)||"",imageSize:"small"}),ie=q.createElement("div",{"data-qa-anchor":"community_display_name"},Y==null?void 0:Y.displayName),D=L&&(O!=null&&O.displayName)?q.createElement("span",null,q.createElement("span",{"data-qa-anchor":"created_at"},ma(L))," \u2022 By"," ",q.createElement("span",{"data-qa-anchor":"creator_display_name"},O==null?void 0:O.displayName)):"",U=(Y==null?void 0:Y.isOfficial)||!1,ne=rr(x,Y==null?void 0:Y.communityId),ue=d(d({},CG.storyContent),C||{}),Me=()=>{l(!0),p&&g(!1),t("play");},Ce=()=>g(!1),fe=()=>g(!0),Ae=()=>c(!0),Ve=()=>c(!1),Ee=()=>f(!0),Ie=()=>f(!1),Nt="asc-uikit-stories-viewer";return useEffect(()=>{t(p||m||u?"pause":"play",!0);},[p,m,u]),useEffect(()=>(F.current&&(F.current.addEventListener("click",()=>{t("pause",!0);}),F.current.addEventListener("cancel",()=>{t("play",!0);})),()=>{F.current&&(F.current.removeEventListener("cancel",()=>{t("play",!0);}),F.current.removeEventListener("click",()=>{t("pause",!0);}));}),[]),q.createElement("div",{className:_2.rendererContainer},q.createElement(J2,{avatar:se,heading:ie,subheading:D,isHaveActions:(B==null?void 0:B.length)>0,haveStoryPermission:ne,isOfficial:U,isPaused:p,onPlay:Ce,onPause:fe,onAction:Ae,onAddStory:E,onClickCommunity:()=>s(Y==null?void 0:Y.communityId),onClose:n,addStoryButton:G}),q.createElement("img",{className:_2.storyImage,"data-qa-anchor":"image_view",style:ue,src:e.url,onLoad:Me,alt:"Story Image"}),!a&&q.createElement("div",{className:_2.loadingOverlay,style:{width:y,height:v}},h||q.createElement("div",null,"loading...")),q.createElement(ur,{rootId:Nt,isOpen:m,onClose:Ve,mountPoint:document.getElementById(Nt)},q.createElement($e.Container,null,q.createElement($e.Header,null),q.createElement(F2,null,B==null?void 0:B.map(xr=>q.createElement(z2,{onClick:()=>{xr.action(),Ve();}},xr.icon,q.createElement(O2,null,r({id:xr.name})))))),q.createElement($e.Backdrop,{onTap:Ve})),q.createElement(ur,{rootId:Nt,isOpen:u,onClose:Ie,mountPoint:document.getElementById(Nt),detent:"full-height"},q.createElement($e.Container,null,q.createElement($e.Header,{style:{borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem",borderBottom:"none"}}),q.createElement(D2,null,q.createElement(FormattedMessage,{id:"storyViewer.commentSheet.title"})),q.createElement($e.Content,null,q.createElement(Ja,{referenceId:b,referenceType:"story",community:Y,shouldAllowCreation:(Y==null?void 0:Y.allowCommentInStory)||!0,shouldAllowInteraction:ee||!0})))),((Ko=(we=(Lt=e.items)==null?void 0:Lt[0])==null?void 0:we.data)==null?void 0:Ko.url)&&q.createElement(U2,null,q.createElement(Mi,{href:e.items[0].data.url.startsWith("http")?e.items[0].data.url:`https://${e.items[0].data.url}`,target:"_blank",rel:"noopener noreferrer",onClick:()=>e.analytics.markLinkAsClicked()},q.createElement(v6,{lines:1},q.createElement("span",null,((vr=(mo=(qe=e.items)==null?void 0:qe[0])==null?void 0:mo.data)==null?void 0:vr.customText)||((Yr=e.items)==null?void 0:Yr[0].data.url))))),q.createElement(K2,{storyId:b,syncState:P,reach:k,commentsCount:A,totalLikes:S,isLiked:M,onClickComment:Ee}))},CG={story:{display:"flex",position:"relative",overflow:"hidden"},storyContent:{width:"auto",maxWidth:"100%",maxHeight:"100%",margin:"auto"}},vG=e=>({condition:!e.content&&(!e.type||e.type==="image"),priority:2}),Px={renderer:hG,tester:vG};var wG=({story:e,action:t,config:o,messageHandler:r})=>{var bd,rs,Jo,D1,r3,n3;let {formatMessage:n}=useIntl(),{onBack:s,onClickCommunity:a}=V(),[l,m]=useState(!1),[c,u]=useState(!1),[f,p]=useState(!1),[g,y]=useState(!1),[v,h]=useState(!1),{width:C,height:x,loader:M,storyStyles:S}=o,{client:b}=H();useState(!1);useState(void 0);let [O,Y]=useState(null),B=!!(e&&e.myReactions&&e.myReactions.includes(De)),E=(e==null?void 0:e.reactions[De])||0,{storyId:G,syncState:F,reach:ee,commentsCount:se,createdAt:ie,creator:D,community:U,actions:ne,handleAddIconClick:ue,addStoryButton:Me,fileInputRef:Ce}=e,fe=(U==null?void 0:U.isJoined)||!1,Ae=_({fileId:(U==null?void 0:U.avatarFileId)||"",imageSize:"small"}),Ve=(U==null?void 0:U.isOfficial)||!1,Ee=q.createElement("div",{"data-qa-anchor":"community_display_name"},U==null?void 0:U.displayName),Ie=ie&&(D!=null&&D.displayName)?q.createElement("span",null,q.createElement("span",{"data-qa-anchor":"created_at"},ma(ie))," \u2022 By"," ",q.createElement("span",{"data-qa-anchor":"creator_display_name"},D==null?void 0:D.displayName)):"",Nt=rr(b,U==null?void 0:U.communityId),Lt=d(d({},SG.storyContent),S||{}),we=useRef(null),Ko=()=>{t("pause",!0);},qe=()=>{t("play",!0);},mo=()=>{var Ni,i3;r("UPDATE_VIDEO_DURATION",{duration:(Ni=we==null?void 0:we.current)==null?void 0:Ni.duration}),m(!0),(i3=we==null?void 0:we.current)==null||i3.play().then(()=>{f&&p(!1),t("play");}).catch(()=>{var a3;u(!0),(a3=we==null?void 0:we.current)==null||a3.play().finally(()=>{t("play");});});},vr=()=>u(!0),Yr=()=>u(!1),xr=()=>p(!1),B1=()=>p(!0),F1=()=>y(!0),Xe=()=>y(!1),rt=()=>h(!0),to=()=>h(!1),Qr="asc-uikit-stories-viewer";return useEffect(()=>{we.current&&(f||g||v?(we.current.pause(),t("pause",!0)):(we.current.play().catch(()=>{}),t("play",!0)));},[f,g,v]),useEffect(()=>(Ce.current&&(Ce.current.addEventListener("click",()=>{t("pause",!0);}),Ce.current.addEventListener("cancel",()=>{t("play",!0);})),()=>{Ce.current&&(Ce.current.removeEventListener("cancel",()=>{t("play",!0);}),Ce.current.removeEventListener("click",()=>{t("pause",!0);}));}),[]),q.createElement(bv,null,q.createElement(B2,{pageId:"story_page",componentId:"*",isMuted:c,onClick:c?Yr:vr}),q.createElement(J2,{avatar:Ae,heading:Ee,subheading:Ie,isHaveActions:(ne==null?void 0:ne.length)>0,haveStoryPermission:Nt,isOfficial:Ve,isPaused:f,onPlay:xr,onPause:B1,onMute:vr,onUnmute:Yr,onAction:F1,onAddStory:ue,onClickCommunity:()=>a(U==null?void 0:U.communityId),onClose:s,addStoryButton:Me}),q.createElement(Mv,{"data-qa-anchor":"video_view",ref:we,style:Lt,src:(e==null?void 0:e.url)||void 0,controls:!1,onLoadedData:mo,playsInline:!0,onWaiting:Ko,onPlaying:qe,muted:c,autoPlay:!0,"webkit-playsinline":"true"}),!l&&q.createElement(Iv,{width:C,height:x},M||q.createElement("div",null,"loading...")),q.createElement(ur,{rootId:Qr,isOpen:g,onClose:Xe,mountPoint:document.getElementById(Qr),detent:"content-height"},q.createElement($e.Container,null,q.createElement($e.Header,null),q.createElement(F2,null,ne==null?void 0:ne.map(Ni=>q.createElement(z2,{onClick:()=>{Ni.action(),Xe();}},Ni.icon,q.createElement(O2,null,n({id:Ni.name})))))),q.createElement($e.Backdrop,{onTap:Xe})),q.createElement(ur,{rootId:Qr,isOpen:v,onClose:to,mountPoint:document.getElementById(Qr),detent:"full-height"},q.createElement($e.Container,null,q.createElement($e.Header,{style:{borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem",borderBottom:"none"}}),q.createElement(D2,null,q.createElement(FormattedMessage,{id:"storyViewer.commentSheet.title"})),q.createElement($e.Content,null,q.createElement($e.Scroller,null,q.createElement(Ja,{referenceId:G,referenceType:(O==null?void 0:O.referenceType)||"story",community:U,shouldAllowCreation:(U==null?void 0:U.allowCommentInStory)||!0,shouldAllowInteraction:fe||!0}))))),((Jo=(rs=(bd=e.items)==null?void 0:bd[0])==null?void 0:rs.data)==null?void 0:Jo.url)&&q.createElement(U2,null,q.createElement(Mi,{href:e.items[0].data.url.startsWith("http")?e.items[0].data.url:`https://${e.items[0].data.url}`,target:"_blank",rel:"noopener noreferrer",onClick:()=>e.analytics.markLinkAsClicked()},q.createElement(v6,{lines:1},q.createElement("span",null,((r3=(D1=e.items)==null?void 0:D1[0].data)==null?void 0:r3.customText)||((n3=e.items)==null?void 0:n3[0].data.url))))),q.createElement(K2,{storyId:G,syncState:F,reach:ee,commentsCount:se,totalLikes:E,isLiked:B,onClickComment:rt}))},SG={storyContent:{width:"auto",maxWidth:"100%",maxHeight:"100%",margin:"auto",position:"relative"},videoContainer:{display:"flex",alignItems:"center",justifyContent:"center"}},PG=e=>({condition:e.type==="video",priority:2}),kx={renderer:wG,tester:PG};var kG=({story:e,action:t})=>(useEffect(()=>{t("play");},[e]),q.createElement("div",{style:Nx.storyContent},q.createElement("p",{style:Nx.text},"This story could not be loaded."))),Nx={storyContent:{width:"100%",maxHeight:"100%",margin:"auto"},text:{textAlign:"center",color:"white",width:"90%",margin:"auto"}},EG=()=>({condition:!0,priority:1}),Lx={renderer:kG,tester:EG};var AG=e=>{useEffect(()=>{e.action("play");},[e.story]);let t=e.story.originalContent;return q.createElement(t,d({},e))},BG=e=>({condition:!!e.content,priority:2}),Ax={renderer:AG,tester:BG};var Bx=[Px,kx,Ax,Lx];var Ii={};var Fx=i.div`
  padding: 1rem;
  border-radius: var(--asc-border-radius-md);
  margin: auto;
`;i.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;i.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;i.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid
    ${({hasError:e,theme:t})=>e?t.v4.colors.alert.default:t.v4.colors.base.shade4};
  outline: none;
  color: ${({hasError:e,theme:t})=>e?t.v4.colors.alert.default:"inherit"};
`;i.label`
  ${({theme:e})=>e.v4.typography.title};
  display: block;

  &::after {
    content: ${({required:e})=>e?"'*'":"none"};
    color: ${({theme:e})=>e.v4.colors.alert.default};
  }
`;i.label`
  ${({theme:e})=>e.v4.typography.caption};
  color: ${({theme:e})=>e.v4.colors.base.shade2};
`;i.span`
  ${({theme:e})=>e.v4.typography.caption};
  color: ${({theme:e})=>e.v4.colors.alert.default};
`;i.div`
  ${({theme:e})=>e.v4.typography.caption};
  color: ${({theme:e})=>e.v4.colors.base.shade1};
  text-align: right;
  margin-top: 0.3rem;
`;i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;i.div`
  ${({theme:e})=>e.v4.typography.title};
`;i(K)`
  color: ${({theme:e})=>e.v4.colors.primary.default};
`;i(Xo)`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${({theme:e})=>e.v4.colors.alert.default};
`;i(K)`
  ${({theme:e})=>e.v4.typography.body};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  color: ${({theme:e})=>e.v4.colors.alert.default};
  border-radius: 0;
`;i.div`
  width: 100%;
  height: 0.0625rem;
  align-self: stretch;
  background-color: ${({theme:e})=>e.v4.colors.base.shade4};
`;var UG=({targetId:e,targetType:t,mediaType:o})=>{var L,O,Y,B;let{onBack:r}=V(),{file:n,setFile:s}=gr(),{navigationBehavior:a}=j7(),[l,m]=useState(!1),[c,u]=useState([]),f=()=>{m(!1);},{currentUserId:p}=H(),g=j(p),y=_({imageSize:"small",fileId:g==null?void 0:g.avatarFileId}),{formatMessage:v}=useIntl(),[h,C]=useState("fit"),[x,M]=useState([]),S=()=>{C(h==="fit"?"fill":"fit"),h==="fill"&&M([]);},b=(E,G,F,ee)=>w(void 0,null,function*(){if(!E)return;r();let se=new FormData;if(se.append("files",E),s(null),(o==null?void 0:o.type)==="image"){let{data:ie}=yield StoryRepository.createImageStory(t,e,se,F,G,ee);ie&&Z.success({content:v({id:"storyViewer.notification.success"})});}else if((o==null?void 0:o.type)==="video"){let{data:ie}=yield StoryRepository.createVideoStory(t,e,se,F,ee);ie&&Z.success({content:v({id:"storyViewer.notification.success"})});}}),P=()=>{me({title:v({id:"storyViewer.action.confirmModal.title"}),content:v({id:"storyViewer.action.confirmModal.content"}),cancelText:v({id:"general.action.cancel"}),okText:v({id:"delete"}),onOk:()=>{s(null),a.onCloseAction();}});},k=({url:E,customText:G})=>{u([{data:{url:E,customText:G||""},type:"hyperlink"}]),m(!1);},A=()=>{u([]);};return useEffect(()=>{let E=G=>w(void 0,null,function*(){let F=yield p0(G);if(G!=null&&G.type.includes("image")){let ee=new Image;ee.src=F;let se=yield extractColors(ee,{crossOrigin:"anonymous"});M(se);}});(o==null?void 0:o.type)==="image"&&(n?E(n):o.url&&fetch(o.url).then(G=>G.blob()).then(G=>{let F=new File([G],"image",{type:"image/jpeg"});E(F);}));},[n,h,o]),q.createElement(q.Fragment,null,q.createElement("div",{id:"asc-uikit-create-story",className:Ii.draftPage},q.createElement("div",{className:Ii.header},q.createElement(Yc,{pageId:"create_story_page",componentId:"*",onClick:P}),q.createElement("div",{className:Ii.topRightButtons},(o==null?void 0:o.type)==="image"&&q.createElement(S2,{pageId:"create_story_page",componentId:"*",onClick:S}),q.createElement(Rc,{pageId:"create_story_page",componentId:"*",onClick:()=>m(!0)}))),(o==null?void 0:o.type)==="image"?q.createElement("div",{className:Ii.mainContainer,style:{background:`linear-gradient(
              180deg,
              ${(x==null?void 0:x.length)>0?x[0].hex:"var(--color-black)"} 0%,
              ${(x==null?void 0:x.length)>0?x[(x==null?void 0:x.length)-1].hex:"var(--color-black)"} 100%
            )`}},q.createElement("img",{className:Ii.previewImage,src:n?URL.createObjectURL(n):o.url,style:{width:"100%",height:"100%",objectFit:h==="fit"?"contain":"cover"},alt:"Draft"})):(o==null?void 0:o.type)==="video"?q.createElement(xv,{src:n?URL.createObjectURL(n):o.url,mediaFit:"contain",autoPlay:!0,controls:!1}):null,((O=(L=c[0])==null?void 0:L.data)==null?void 0:O.url)&&q.createElement(Fx,null,q.createElement(Mi,{href:c[0].data.url.startsWith("http")?c[0].data.url:`https://${c[0].data.url}`,target:"_blank",rel:"noopener noreferrer"},q.createElement(v6,{lines:1},q.createElement("span",null,((B=(Y=c[0])==null?void 0:Y.data)==null?void 0:B.customText)||c[0].data.url)))),q.createElement(Cp,{pageId:"*",isOpen:l,onClose:f,onSubmit:k,onRemove:A,isHaveHyperLink:c.length>0}),q.createElement("div",{className:Ii.footer},q.createElement(rp,{pageId:"create_story_page",componentId:"*",onClick:()=>b(n,h,{},c.length>0?c:[]),avatar:y}))))},wi=UG;var qG=5e3,_x=({communityId:e})=>{var G,F,ee,se,ie;let{onBack:t}=V(),{stories:o}=Wa({targetId:e,targetType:"community",options:{orderBy:"asc",sortBy:"createdAt"}}),r=useRef(null),n=D=>{D.stopPropagation(),D.preventDefault(),r.current&&r.current.click();},s=D=>{var ne;let U=(ne=D.target.files)==null?void 0:ne[0];U&&M(U);},{client:a,currentUserId:l}=H(),{formatMessage:m}=useIntl(),c=useMedia("(max-width: 768px)"),[u,f]=useState(0),{file:p,setFile:g}=gr(),[y,v]=useState([]),h=((F=(G=o[u])==null?void 0:G.creator)==null?void 0:F.userId)===l,C=rr(a,e),x=D=>{let U=u===0;me({title:m({id:"storyViewer.action.confirmModal.title"}),content:m({id:"storyViewer.action.confirmModal.content"}),okText:m({id:"delete"}),onOk:()=>w(void 0,null,function*(){O(),U&&t(),yield StoryRepository.softDeleteStory(D),Z.success({content:m({id:"storyViewer.notification.deleted"})});})});},M=D=>{g(D);},S=D=>w(void 0,null,function*(){x(D);}),b=(D,U,ne,ue)=>w(void 0,null,function*(){t();let Me=new FormData;if(Me.append("files",D),g(null),D!=null&&D.type.includes("image")){let{data:Ce}=yield StoryRepository.createImageStory("community",e,Me,ne,U,ue);Ce&&Z.success({content:m({id:"storyViewer.notification.success"})});}else {let{data:Ce}=yield StoryRepository.createVideoStory("community",e,Me,ne,ue);Ce&&Z.success({content:m({id:"storyViewer.notification.success"})});}}),P=()=>{g(null);},k=q.createElement(Jc,{pageId:"story_page",componentId:"*",onClick:n}),A=o==null?void 0:o.map(D=>{var ue,Me,Ce;let U=(D==null?void 0:D.dataType)==="image",ne=U?(ue=D==null?void 0:D.imageData)==null?void 0:ue.fileUrl:(Ce=(Me=D==null?void 0:D.videoData)==null?void 0:Me.videoUrl)==null?void 0:Ce["720p"];return T(d({},D),{url:ne,type:U?"image":"video",actions:[h||C?{name:"delete",action:()=>S(D==null?void 0:D.storyId),icon:q.createElement(Xo,null)}:null].filter(ge),handleAddIconClick:n,onCreateStory:b,discardStory:P,addStoryButton:k,fileInputRef:r})}),L=()=>{if(u===o.length-1){t();return}f(u+1);},O=()=>{u!==0&&f(u-1);},Y="asc-uikit-stories-viewer",B={width:"100%",height:"100%",objectFit:((ee=o[u])==null?void 0:ee.dataType)==="image"&&((ie=(se=o[u])==null?void 0:se.data)==null?void 0:ie.imageDisplayMode)==="fill"?"cover":"contain",background:`linear-gradient(
               180deg,
               ${(y==null?void 0:y.length)>0?y[0].hex:"#000"} 0%,
               ${(y==null?void 0:y.length)>0?y[(y==null?void 0:y.length)-1].hex:"#000"} 100%
             )`},E=()=>{f(u+1);};return useEffect(()=>{var D,U;((D=o[o.length-1])==null?void 0:D.syncState)==="syncing"&&f(o.length-1),o[u]&&((U=o[u])==null||U.analytics.markAsSeen());},[u,o]),useEffect(()=>{var U,ne,ue,Me;let D=Ce=>w(void 0,null,function*(){let fe=yield extractColors(Ce,{crossOrigin:"anonymous"});v(fe);});p!=null&&p.type.includes("image")||((U=o[u])==null?void 0:U.dataType)==="image"?D((Me=(ue=(ne=o[u])==null?void 0:ne.imageData)==null?void 0:ue.fileUrl)!=null?Me:p):v([]);},[o,p,u]),p?q.createElement(wi,{mediaType:p.type.includes("image")?{type:"image",url:URL.createObjectURL(p)}:{type:"video",url:URL.createObjectURL(p)},targetId:e,targetType:"community"}):q.createElement(dv,{"data-qa-anchor":"story_page"},!c&&q.createElement(yv,{"data-qa-anchor":"arrow_left_button",onClick:O}),q.createElement(uv,{id:Y},q.createElement(Cv,{ref:r,type:"file",accept:"image/*,video/*",onChange:s}),q.createElement(fv,null,q.createElement(gv,null),(A==null?void 0:A.length)>0?q.createElement(GG,{width:"100%",height:"100%",storyStyles:B,preventDefault:!c,currentIndex:u,stories:A,renderers:Bx,defaultInterval:qG,onStoryStart:()=>{var D;return (D=o[u])==null?void 0:D.analytics.markAsSeen()},onStoryEnd:E,onNext:L,onPrevious:O,onAllStoriesEnd:t}):null)),!c&&q.createElement(hv,{"data-qa-anchor":"arrow_right_button",onClick:L}))};var ZG=({type:e})=>{let{page:t}=V();return q.createElement("div",null,(()=>{switch(e){case"communityFeed":return q.createElement(_x,{communityId:t.communityId});default:return null}})())},v1=ZG;var Hx=i.div`
  padding: 70px 30px 30px;
  max-width: 360px;
  text-align: center;
`,jx=i.div`
  margin-top: 25px;
  ${({theme:e})=>e.typography.headline}
`,Vx=i.p`
  margin-top: 8px;
  color: ${({theme:e})=>e.palette.shade1};
`,$x=i(oe)`
  display: block;
  margin: 25px auto 0 auto;
`,Gx=i(K)`
  color: ${({theme:e})=>e.palette.primary.main};
  padding: 0 0 0 4px;
  margin-top: 20px;

  &:hover {
    background: none;
    text-decoration: underline;
  }
`;function Ip({onClose:e,onGoSettings:t}){return q.createElement(dt,{"data-qa-anchor":"community-created-modal"},q.createElement(Hx,null,q.createElement(il,null),q.createElement(jx,{"data-qa-anchor":"community-created-modal-title"},q.createElement(FormattedMessage,{id:"communityCreatedModal.title"})),q.createElement(Vx,{"data-qa-anchor":"community-created-modal-message"},q.createElement(FormattedMessage,{id:"communityCreatedModal.message"})),q.createElement($x,{"data-qa-anchor":"community-created-modal-go-to-settings-button",onClick:t},q.createElement(FormattedMessage,{id:"communityCreatedModal.goToSettings"})),q.createElement(Gx,{"data-qa-anchor":"community-created-modal-skip-button",onClick:e},q.createElement(FormattedMessage,{id:"communityCreatedModal.skip"}))))}var YG=({communityId:e,onClose:t})=>{let{onEditCommunity:o}=V();return q.createElement(Ip,{onClose:t,onGoSettings:()=>{e!=null&&(o(e,vo.PERMISSIONS),t());}})},qx=YG;var Zx=i(jt).attrs({width:15,height:15})`
  margin-right: 8px;
`,Wx=i(tn).attrs({width:15,height:15})`
  margin-right: 4px;
`,Yx=i(St)`
  margin-left: auto;
  margin-right: 0;

  & .leave-community {
    color: ${({theme:e})=>e.palette.alert.main};
  }
`,Qx=i.div`
  border: 1px solid #ebecef;
  border-radius: 8px;
  background: ${({theme:e})=>e.palette.system.background};
  flex-shrink: 0;
  align-self: flex-start;
  margin-bottom: 12px;
`,Kx=i.div`
  padding-top: 56.25%;
  position: relative;

  ${({backgroundImage:e,theme:t})=>`
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.5) -4.5%, rgba(0, 0, 0, 0) 77.17%), ${e?`url(${CSS.escape(e)})`:t.palette.base.shade3};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `}
`,Jx=i.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
`,Xx=i(vn)`
  color: #ffffff;
  ${({theme:e})=>e.typography.headline}
  line-height: 30px !important;

  * {
    line-height: 30px !important;
  }
`,Rx=i.div`
  padding: 18px 16px;
`,eb=i.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`,tb=i.div`
  word-break: break-word;
  color: #ffffff;
  margin-bottom: 0;
  line-height: 20px;
  ${({theme:e})=>e.typography.body}
`,wp=i.span`
  & > .countNumber {
    ${({theme:e})=>e.typography.title};
    color: ${({theme:e})=>e.palette.base.default};
  }

  & > .countType {
    ${({theme:e})=>e.typography.body};
    color: ${({theme:e})=>e.palette.base.shade2};
  }
`,ob=i.div`
  display: inline-block;
  width: 1px;
  margin: 12px 0;
  background: ${({theme:e})=>e.palette.base.shade4};
`,rb=i.div`
  margin-bottom: 20px;
`,nb=i(oe)`
  width: 100%;
  justify-content: center;
`,ib=i.div`
  display: flex;
  gap: 20px;
`,ab=i.div`
  background: ${({theme:e})=>e.palette.base.shade4};
  padding: 12px;
  margin-top: 8px;
  border-radius: 4px;
  text-align: center;
`,sb=i.div`
  ${({theme:e})=>e.typography.bodyBold};
  display: flex;
  align-items: center;
  justify-content: center;
`,lb=i.span`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: ${({theme:e})=>e.palette.primary.main};
  margin-right: 6px;
`,mb=i.div`
  ${({theme:e})=>e.typography.caption};
  color: ${({theme:e})=>e.palette.base.shade1};
`;var db=({canReviewPosts:e,postsCount:t})=>q.createElement(ab,null,q.createElement(sb,null,q.createElement(lb,null),q.createElement(FormattedMessage,{id:"community.pendingPostsBanner.title"})),q.createElement(mb,null,e?q.createElement(FormattedMessage,{id:"community.pendingPostsBanner.needApproval",values:{amount:t,formattedAmount:bp(t)}}):q.createElement(FormattedMessage,{id:"community.pendingPostsBanner.pendingForReview"})));var RG=({communityId:e,communityCategories:t,pendingPostsCount:o,postsCount:r,membersCount:n,description:s,isJoined:a,isOfficial:l,isPublic:m,avatarFileUrl:c,canEditCommunity:u,onEditCommunity:f,joinCommunity:p,onClickLeaveCommunity:g,canLeaveCommunity:y,canReviewPosts:v,name:h,postSetting:C})=>{let{formatMessage:x}=useIntl();return q.createElement(Qx,{"data-qa-anchor":"community-info"},q.createElement(Kx,{backgroundImage:c},q.createElement(Jx,null,q.createElement(Xx,{"data-qa-anchor":"community-info",isOfficial:l,isPublic:m,isTitle:!0,name:h,truncate:2}),q.createElement(tb,null,(t||[]).join(", ")))),q.createElement(Rx,null,q.createElement(eb,null,q.createElement(ib,null,q.createElement(wp,null,q.createElement("div",{className:"countNumber"},bp(r||0)),q.createElement("div",{className:"countType"},q.createElement(FormattedMessage,{id:"community.posts"}))),q.createElement(ob,null),q.createElement(wp,null,q.createElement("div",{className:"countNumber"},bp(n||0)),q.createElement("div",{className:"countType"},q.createElement(FormattedMessage,{id:"community.members"})))),a&&q.createElement(Yx,{"data-qa-anchor":"community-info-options-button",options:[u?{name:x({id:"community.settings"}),action:()=>f(e),dataQaAnchorMenuItem:"settings"}:null,y?{name:x({id:"community.leaveCommunity"}),action:()=>g(e),dataQaAnchorMenuItem:"leave-community"}:null].filter(ge)})),s&&q.createElement(v6,{lines:3},q.createElement(rb,{"data-qa-anchor":"community-info-description"},s)),!a&&q.createElement(nb,{"data-qa-anchor":"community-info-join-button",onClick:()=>p(e)},q.createElement(Zx,null)," ",q.createElement(FormattedMessage,{id:"community.join"})),q.createElement(Y2,{type:"communityFeed",communityId:e}),a&&u&&q.createElement($,{fullWidth:!0,"data-qa-anchor":"community-info-edit-button",onClick:()=>f(e)},q.createElement(Wx,null)," ",q.createElement(FormattedMessage,{id:"community.editProfile"})),C===CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED&&a&&o>0&&q.createElement(db,{canReviewPosts:v,postsCount:o})))},pb=e=>{let t=N("UICommunityInfo");return t?t(e):q.createElement(RG,d({},e))};var ub=({onOk:e})=>me({"data-qa-anchor":"leave-community",title:q.createElement(FormattedMessage,{id:"community.leaveCommunityTitle"}),content:q.createElement(FormattedMessage,{id:"community.leaveCommunityBody"}),okText:q.createElement(FormattedMessage,{id:"community.leaveCommunityButtonText"}),onOk:()=>e()});var oq=({communityId:e,stories:t})=>{var A;let{setFile:o}=gr(),r=(t==null?void 0:t.length)>0,n=r&&t.some(L=>(L==null?void 0:L.syncState)==="syncing"),s=r&&t.some(L=>(L==null?void 0:L.syncState)==="error"),a=r&&t.every(L=>L==null?void 0:L.isSeen),{onClickStory:l}=V(),{client:m}=H(),c=rr(m,e),{community:u,communityCategories:f,avatarFileUrl:p,canEditCommunity:g,onEditCommunity:y,joinCommunity:v,leaveCommunity:h,pendingPostsCount:C,canReviewCommunityPosts:x}=W2(e),M=(f||[]).map(L=>L.name);if(u==null)return null;let S=u.isJoined||!1,{membersCount:b,description:P,isJoined:k}=u;return q.createElement(pb,{communityId:e,communityCategories:M,pendingPostsCount:C,postsCount:(A=u.postsCount)!=null?A:0,membersCount:b,description:P||"",isJoined:k||!1,isOfficial:u.isOfficial||!1,isPublic:u.isPublic||!1,avatarFileUrl:p||null,joinCommunity:v,canEditCommunity:g,canLeaveCommunity:S||!1,canReviewPosts:x,name:u.displayName,postSetting:u.postSetting||CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED,onEditCommunity:y,onClickLeaveCommunity:()=>ub({onOk:()=>h()}),setStoryFile:o,haveStories:r||!1,haveStoryPermission:c,isStorySyncing:n||!1,isStoryErrored:s||!1,isSeen:a||!1,onClickStory:l})};var fb=oq;var Zo={TIMELINE:"TIMELINE",GALLERY:"GALLERY",MEMBERS:"MEMBERS",PENDING:"PENDING"};function gb(e,t,o,r=0){let n=[{value:Zo.TIMELINE,label:q.createElement(FormattedMessage,{id:"tabs.timeline"})},{value:Zo.GALLERY,label:q.createElement(FormattedMessage,{id:"tabs.gallery"})},{value:Zo.MEMBERS,label:q.createElement(FormattedMessage,{id:"tabs.members"})}];if(t&&e===CommunityPostSettings.ADMIN_REVIEW_POST_REQUIRED){let s=o?r:0;n.push({value:Zo.PENDING,label:q.createElement(FormattedMessage,{id:"tabs.pendingPosts",values:{amount:s,formattedAmount:s}})});}return n}var kp=i.div`
  height: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 28px 0;
  overflow-y: auto;
`,yb=i.div`
  background: ${({theme:e})=>e.palette.base.shade4};
  color: ${({theme:e})=>e.palette.base.shade1};
  margin-bottom: 12px;
  padding: 12px 16px;
  border-radius: 4px;
`;var sq=({communityId:e,isNewCommunity:t,isOpen:o,toggleOpen:r})=>{let {file:n}=gr(),{stories:s}=Wa({targetId:e,targetType:"community",options:{orderBy:"asc",sortBy:"createdAt"}}),a=Ze(e);nt((a==null?void 0:a.avatarFileId)||"");let {canReview:m}=q2({community:a}),{posts:c}=zo({targetId:e,targetType:"community",feedType:"reviewing"}),u=c.reduce((C,x)=>C+x.flagCount,0),f=useMemo(()=>gb(a==null?void 0:a.postSetting,a==null?void 0:a.isJoined,m,u),[a==null?void 0:a.postSetting,a==null?void 0:a.isJoined,m,u]),[p,g]=useState(Zo.TIMELINE);wr({communityId:e,level:SubscriptionLevels.POST});let y=(a==null?void 0:a.isJoined)||!1,[v,h]=useState(t);return useEffect(()=>{f.find(C=>C.value===p)||g(f[0].value);},[p,f]),n?q.createElement(kp,null,q.createElement(wi,{targetId:e,targetType:"community",mediaType:n.type.includes("image")?{type:"image",url:URL.createObjectURL(n)}:{type:"video",url:URL.createObjectURL(n)}})):q.createElement(kp,null,q.createElement(c2,{isOpen:o,onClick:r}),q.createElement(p2,{isOpen:o}),q.createElement(d2,null,q.createElement(en,{onClick:r}),q.createElement(m2,null,q.createElement(FormattedMessage,{id:"sidebar.community"}))),q.createElement(fb,{communityId:e,stories:s}),q.createElement(f2,{"data-qa-anchor":"community-feed-header",tabs:f,activeTab:p,onChange:g}),p===Zo.TIMELINE&&q.createElement(hn,{targetType:"community",targetId:e,readonly:!y,showPostCreator:y,feedType:"published"}),p===Zo.GALLERY&&q.createElement(u2,{targetType:"community",targetId:e}),p===Zo.MEMBERS&&q.createElement(v2,{communityId:e}),p===Zo.PENDING&&q.createElement(q.Fragment,null,m&&q.createElement(yb,null,q.createElement(FormattedMessage,{id:"community.review.declinePendingPosts"})),q.createElement(hn,{targetType:"community",targetId:e,readonly:!y,showPostCreator:!1,feedType:"reviewing"})),v&&q.createElement(qx,{communityId:e,onClose:()=>h(!1)}))},vb=sq;var mq=i.div`
  height: 100%;
  width: 100%;
`,dq=i(o2)`
  display: none;

  @media (min-width: 768px) {
    min-height: 100%;
    display: block;
  }
`,cq=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,pq=()=>{let{page:e,onBack:t}=V(),{client:o}=H(),[r,n]=useState(null),[s,a]=useState(!1),l=()=>{a(!s);};return useEffect(()=>{if(o===null)return;function m(){return w(this,null,function*(){let c=yield o==null?void 0:o.getSocialSettings();c&&n(c);})}m();},[o]),q.createElement(vx,null,q.createElement(mq,null,q.createElement(xg,{aside:q.createElement(dq,{activeCommunity:e.communityId})},e.type==="explore"&&q.createElement(oh,null),e.type==="newsfeed"&&q.createElement(nh,{toggleOpen:l,isOpen:s}),e.type==="communityfeed"&&q.createElement(vb,{communityId:e.communityId,isNewCommunity:e.isNewCommunity,isOpen:s,toggleOpen:l}),e.type==="viewstory"&&q.createElement(cq,null,q.createElement(v1,{type:"communityFeed"})),e.type==="communityedit"&&q.createElement(kC,{communityId:e.communityId,tab:e.tab}),e.type==="category"&&q.createElement(Uh,{categoryId:e.categoryId}),e.type==="userfeed"&&q.createElement(Lh,{userId:e.userId,socialSettings:r}),e.type==="useredit"&&q.createElement($C,{userId:e.userId}))))},uq=pq;var Mb={DIRECT_CHAT:2,ONLY_ME_CHAT:1};function Cq(e,t){var s,a,l;if((s=e==null?void 0:e.metadata)!=null&&s.isDirectChat&&(e==null?void 0:e.memberCount)===Mb.ONLY_ME_CHAT)return "Me";if(!((a=e==null?void 0:e.metadata)!=null&&a.isDirectChat)&&(e!=null&&e.displayName))return e==null?void 0:e.displayName;let{firstname:o="",lastname:r=""}=(l=t==null?void 0:t.metadata)!=null?l:{},n=trim(`${o}${r}`);return (t==null?void 0:t.displayName)||n||(t==null?void 0:t.userId)||e.channelId}function Ep(o){return w(this,arguments,function*({avatarFileId:e,avatarCustomUrl:t}){if(t)return t;if(e){let r=yield FileRepository.getFile(e);return FileRepository.fileUrlWithSize(r.data.fileUrl,"small")}return null})}function vq(e,t,o){return w(this,null,function*(){var r,n;return (e==null?void 0:e.memberCount)===Mb.ONLY_ME_CHAT?Ep({avatarCustomUrl:o==null?void 0:o.avatarUrl}):(r=e==null?void 0:e.metadata)!=null&&r.isDirectChat&&(t!=null&&t.avatarUrl)?Ep({avatarCustomUrl:t.avatarUrl}):Ep({avatarFileId:e==null?void 0:e.avatarFileId,avatarCustomUrl:(n=e==null?void 0:e.metadata)==null?void 0:n.avatarCustomUrl})})}function xq({channel:e}){var u,f,p;let{currentUserId:t}=Li(),[o,r]=useState(null),n=(u=e==null?void 0:e.metadata)!=null&&u.isDirectChat?((p=(f=e==null?void 0:e.metadata)==null?void 0:f.userIds)!=null?p:[]).find(g=>g!==t):null,s=j(t),a=j(n),l=_({fileId:s==null?void 0:s.avatarFileId}),m=_({fileId:a==null?void 0:a.avatarFileId});return useEffect(()=>{function g(){return w(this,null,function*(){r(null);let y=yield vq(e,{avatarUrl:(a==null?void 0:a.avatarCustomUrl)||m},{avatarUrl:(s==null?void 0:s.avatarCustomUrl)||l});r(y);})}g();},[a==null?void 0:a.avatarCustomUrl,e,l,s==null?void 0:s.avatarCustomUrl]),{chatName:useMemo(()=>e==null?void 0:Cq(e,a),[e,a]),chatAvatar:o,type:e==null?void 0:e.type}}var Xa=xq;var Ib=i(K)`
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

  ${({active:e,theme:t})=>e?z`
          background-color: ${t.palette.primary.shade3};
          color: ${t.palette.primary.main};
          &:hover {
            background-color: ${t.palette.primary.shade3};
          }
        `:z`
          &:hover {
            background-color: ${t.palette.base.shade4};
          }
        `}
`,wb=i.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  ${({active:e,theme:t})=>e?z`
          background: ${t.palette.primary.main};
          color: white;
        `:z`
          background: ${t.palette.base.shade4};
          color: ${t.palette.base.main};
        `}
`;var bq=a=>{var l=a,{icon:e,children:t,active:o,className:r,onClick:n}=l,s=I(l,["icon","children","active","className","onClick"]);return q.createElement(Ib,d({className:r,active:o,onClick:n},s),e&&q.createElement(wb,{active:o},e),t)},Pb=bq;var yr={BIG:"big",REGULAR:"regular",SMALL:"small",TINY:"tiny"};var Sq=({size:e=yr.REGULAR,avatarUrl:t,avatarFileId:o,avatarFile:r,defaultImage:n,avatarCustomUrl:s})=>{let[a,l]=useState(null),[m,c]=useState(null);return useEffect(()=>{l(null),c(null),w(void 0,null,function*(){if(t){l(t);return}if(s){l(s);return}if(r){let p=yield (g=>new Promise((y,v)=>{let h=new FileReader;h.readAsDataURL(g),h.onload=()=>y(h.result),h.onerror=v;}))(r);l(p);return}if(o){let f=yield FileRepository.fileUrlWithSize(o,"small");l(f);return}if(n){c(n);return}});},[t,o,r,s]),q.createElement(J,{size:e,avatar:a,backgroundImage:m})},zn=Sq;var kb=i(Pb)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin: 0;
  padding: 0 18px 0 16px;
  border-radius: 0;
`,Eb=i.div`
  display: flex;
  align-items: center;
`,Nb=i(zn)`
  flex-shrink: 0;
`,Lb=i.div`
  width: 135px;
  ${({theme:e})=>e.typography.bodyBold};
  line-height: 20px;
  text-align: left;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 8px;
`,Ab=i.div`
  flex-shrink: 0;
  height: 20px;
  padding: 1px 6px;
  font-size: 13px;
  color: #fff;
  background: #f9563a;
  border-radius: 20px;
`;function x1({channelId:e,shouldSubscribe:t=()=>!0,callback:o}){return At({fetcher:ChannelRepository.getChannel,params:e,callback:o,shouldSubscribe:()=>!!e&&t(),getSubscribedTopic:({data:r})=>getChannelTopic(r)})}var Eq=e=>Fe({fetcher:ChannelRepository.getChannel,params:e,shouldCall:()=>!!e}),hr=Eq;function Nq(e){let t={BOTTOM:1,TOP:99};return !e||e<t.BOTTOM?"":e<=t.TOP?e:`${t.TOP}+`}var Lq=({channelId:e,isSelected:t,onSelect:o})=>{let r=hr(e),{chatName:n,chatAvatar:s}=Xa({channel:r}),a=Nq((r==null?void 0:r.unreadCount)||0);return x1({channelId:r==null?void 0:r.channelId,shouldSubscribe:()=>!!(r!=null&&r.channelId)}),q.createElement(kb,{"data-qa-anchor":"chat-item",active:t,onClick:l=>{l.stopPropagation(),r&&o({channelId:r.channelId,type:r.type});}},q.createElement(Eb,null,q.createElement(Nb,{avatarUrl:s,defaultImage:((r==null?void 0:r.memberCount)||0)>2?lt:ce}),q.createElement(Lb,null,n)),a&&q.createElement(Ab,{"data-qa-anchor":"chat-item-unread-count"},a))},Bb=e=>{let t=N("ChatItem");return t?t(e):q.createElement(Lq,d({},e))};var Fb=i(Ul).attrs({width:24,height:18})`
  width: 24px !important;
  cursor: pointer;
`,Db=i.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 280px;
  padding: 24px 0 5px 0;
  background-color: white;
  border-right: 1px solid #e3e4e8;
  max-height: 100dvh;
`,zb=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 17px;
  padding-left: 20px;
  padding-right: 16px;
`,Ob=i.span`
  ${({theme:e})=>e.typography.title};
  line-height: 28px;
  color: ${({theme:e})=>e.palette.neutral.shade1};
`,_b=i.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;function Np(e){let r=be({fetcher:ChannelRepository.getChannels,params:e}),{items:t}=r,o=I(r,["items"]);return d({channels:t},o)}var zq=({onChannelSelect:e,onAddNewChannelClick:t,selectedChannelId:o,membershipFilter:r})=>{let{channels:n,hasMore:s,loadMore:a}=Np({membership:r,sortBy:"lastActivity",limit:20}),l=useRef(null);return q.createElement(Db,null,q.createElement(zb,null,q.createElement(Ob,null,q.createElement(FormattedMessage,{id:"chat.chats"})),q.createElement(Fb,{"data-qa-anchor":"chat-create-chat-button",onClick:t})),q.createElement(_b,{ref:l,"data-qa-anchor":"chat-list"},l.current?q.createElement(gz,{scrollableTarget:l.current,scrollThreshold:.7,hasMore:s,next:a,loader:s&&q.createElement("span",{key:0},"Loading..."),dataLength:(n==null?void 0:n.length)||0,height:l.current.clientHeight},Array.isArray(n)&&n.map(m=>q.createElement(Bb,{key:m.channelId,channelId:m.channelId,isSelected:o===m.channelId,onSelect:c=>{e==null||e(c);}}))):null))},Ub=e=>{let t=N("RecentChat");return t?t(e):q.createElement(zq,d({},e))};var Hb=i.div`
  display: flex;
  align-items: center;
`,jb=i.input`
  height: 34px;
  padding: 6px;
  margin: 5px;
  outline: none;
  border: 1px solid #e3e4e8;
  border-radius: 4px;
`,Vb=i(Gl)`
  opacity: 0.7;
  padding: 0 10px;
  cursor: pointer;
`;i(Gn)`
  opacity: 0.7;
  padding: 0 10px;
  cursor: pointer;
`;var $b=i(Qe)`
  opacity: 0.7;
  padding: 0 10px;
  cursor: pointer;
`,Gb=i(Hl).attrs({width:11,height:11})`
  opacity: 0.5;
  margin: 0 5px;
  cursor: pointer;
`,Lp=i(J)`
  margin-right: auto;
`,qb=i.div`
  display: flex;
  width: 100%;
  ${({isIncoming:e})=>!e&&"justify-content: flex-end;"}
`,Zb=i.div`
  display: flex;
  max-width: 60%;
`,Wb=i.div`
  min-width: 265px;
`,Yb=i.div`
  width: 52px;
  flex-shrink: 0;
`,Qb=i.div`
  color: ${({theme:e})=>e.palette.neutral.main};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`,Ap=i.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  padding: 8px;
  word-break: break-word;

  & pre {
    white-space: pre-wrap;
  }
`,Kb=i(Ap)`
  ${({theme:e,isIncoming:t})=>t?`
      background: ${e.palette.neutral.shade4};
      border-radius: 0px 6px 6px 6px;
    `:`
      background: ${e.palette.primary.main};
      color: #fff;
      border-radius: 6px 0px 6px 6px;
  `}
`,Jb=i(Ap)`
  text-align: ${({isIncoming:e})=>e?"left":"right"};
`,Xb=i(Ap)`
  text-align: center;
  background: ${({theme:e})=>e.palette.neutral.shade4};
  border-radius: 10px;
`,Rb=i.div`
  font-size: 13px;
  opacity: 0.5;
  margin-left: auto;
`,eM=i.div`
  margin-top: 3px;
  display: flex;
  align-items: center;
`;var Hq=e=>{let[t,o]=useState(!1),{data:r,isLoading:n,refetch:s}=useQuery({queryKey:["asc-uikit","MessageRepository","isMessageFlaggedByMe",e],queryFn:()=>MessageRepository.isMessageFlaggedByMe(e),enabled:e!=null});useEffect(()=>{r!=null&&o(r);},[r]);let a=()=>w(void 0,null,function*(){if(e!=null)try{o(!0),yield MessageRepository.flagMessage(e);}catch(c){o(!1);}finally{s();}}),l=()=>w(void 0,null,function*(){if(e!=null)try{o(!1),yield MessageRepository.unflagMessage(e);}catch(c){o(!0);}finally{s();}});return {isLoading:n,isFlaggedByMe:t,flagMessage:a,unflagMessage:l,toggleFlagMessage:()=>w(void 0,null,function*(){e!=null&&(t?l():a());})}},tM=Hq;function Fp({messageId:e,shouldSubscribe:t=()=>!0,callback:o}){return At({fetcher:MessageRepository.getMessage,params:e,callback:o,shouldSubscribe:()=>!!e&&t(),getSubscribedTopic:({data:r})=>getMessageTopic(r)})}var Gq=i(Tm)`
  ${({align:e,theme:t})=>e==="end"&&`color: ${t.palette.neutral.main};`}
`,qq=({messageId:e})=>{let{isFlaggedByMe:t,flagMessage:o,unflagMessage:r}=tM(e);return Fp({messageId:e}),t?q.createElement(zt,{onClick:r},q.createElement(FormattedMessage,{id:"message.unflag"})):q.createElement(zt,{onClick:o},q.createElement(FormattedMessage,{id:"message.flag"}))},Zq=({isIncoming:e,messageId:t,data:o,isSupportedMessageType:r,popupContainerRef:n})=>{let[s,a]=useState(""),[l,m]=useState(!1),c=M=>{M.stopPropagation(),m(!0);},[u,f]=useState(!1),{formatMessage:p}=useIntl(),g=()=>{a(typeof o=="object"?o.text:o),f(!0),m(!1);},y=()=>{f(!1);},v=()=>{MessageRepository.updateMessage(t,{data:{text:s}}).then(y).catch(()=>{Z.error({content:p({id:"message.saveOptionsError"})});});};return q.createElement(Gq,{isOpen:u,positions:["bottom","top"],align:e?"start":"end",content:l?q.createElement(Hb,null,q.createElement(jb,{"data-qa-anchor":"message-edit-input",autoFocus:!0,value:s,onChange:M=>a(M.target.value),onKeyDown:M=>{M.key==="Enter"&&v(),M.key==="Escape"&&y();}}),q.createElement(Vb,{"data-qa-anchor":"message-save-button",onClick:v}),q.createElement($b,{onClick:y})):q.createElement(ar,null,!e&&r&&q.createElement(zt,{"data-qa-anchor":"message-menu-item-edit",onClick:c},q.createElement(FormattedMessage,{id:"message.edit"})),e&&q.createElement(qq,{messageId:t}),!e&&q.createElement(zt,{"data-qa-anchor":"message-menu-item-delete",onClick:()=>{MessageRepository.deleteMessage(t).then(y);}},q.createElement(FormattedMessage,{id:"message.delete"}))),parentElement:(n==null?void 0:n.current)||void 0,onClickOutside:y},q.createElement("div",{"data-qa-anchor":"message-options-button",role:"button",tabIndex:0,onClick:g,onKeyDown:g},q.createElement(Gb,null)))},rM=Zq;var Qq=()=>q.createElement(FormattedMessage,{id:"chat.message.deleted"}),nM=Qq;var Jq=({data:e})=>q.createElement(mn,null,e.text),iM=Jq;var Rq=({data:e})=>q.createElement("pre",null,JSON.stringify(e)),aM=Rq;var oZ=()=>q.createElement(FormattedMessage,{id:"chat.message.unsupported"}),sM=oZ;function rZ(e){return e.type==="text"}function nZ(e){return e.type==="custom"}var iZ=e=>{let{isDeleted:t}=e;return t?q.createElement(nM,null):rZ(e)?q.createElement(iM,{data:e.data}):nZ(e)?q.createElement(aM,{data:e.data}):q.createElement(sM,null)},lM=iZ;var sZ=n=>{var s=n,{isDeleted:e,type:t,isSupportedMessageType:o}=s,r=I(s,["isDeleted","type","isSupportedMessageType"]);return e?q.createElement(Jb,T(d({},r),{"data-qa-anchor":"message-body-deleted"})):o?q.createElement(Kb,T(d({},r),{"data-qa-anchor":"message-body-general"})):q.createElement(Xb,T(d({},r),{"data-qa-anchor":"message-body-unsupported"}))},lZ=({messageId:e,avatar:t,type:o,data:r,createdAt:n,isDeleted:s,isIncoming:a,isConsequent:l,userDisplayName:m,containerRef:c})=>{let u=a&&!l&&m,f=["text","custom"].includes(o);return q.createElement(qb,{isIncoming:a},q.createElement(Zb,null,a&&q.createElement(Yb,null,!l&&(t?q.createElement(Lp,{avatar:t}):q.createElement(Lp,{backgroundImage:ce}))),q.createElement(Wb,{"data-qa-anchor":"message"},u&&q.createElement(Qb,null,m),q.createElement(sZ,{type:o,isIncoming:a,isDeleted:s||!1,isSupportedMessageType:f},q.createElement(lM,{data:r,type:o,isDeleted:s}),!s&&q.createElement(eM,null,q.createElement(Rb,null,q.createElement(FormattedTime,{value:n})),q.createElement(rM,{messageId:e,data:r,isIncoming:a,isSupportedMessageType:f,popupContainerRef:c}))))))},mM=e=>{let t=N("Message");return t?t(e):q.createElement(lZ,d({},e))};var dM=i.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  overflow: auto;
  background: #f7f7f8;
`,cM=i.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 20px;
`;function b1(e){let r=be({fetcher:MessageRepository.getMessages,params:e,shouldCall:()=>!!e.subChannelId}),{items:t}=r,o=I(r,["items"]);return d({messages:t},o)}var pZ=({message:e,isConsequent:t,isIncoming:o,containerRef:r})=>{let n=j(e.creatorId),s=_({fileId:n==null?void 0:n.avatarFileId,imageSize:"small"});return q.createElement(mM,{key:e.messageId,avatar:s||"",messageId:e.messageId,data:(e==null?void 0:e.data)||"",type:e.dataType,createdAt:new Date(e.createdAt),isDeleted:e.isDeleted,userDisplayName:(n==null?void 0:n.displayName)||"",isConsequent:t,isIncoming:o,containerRef:r})},uZ=({channelId:e})=>{let{client:t}=H(),o=useRef(null),{messages:r,hasMore:n,loadMore:s,isLoading:a}=b1({subChannelId:e,sortBy:"segmentDesc",limit:20});return x1({channelId:e}),q.createElement(dM,{ref:o},o.current?q.createElement(gz,{scrollableTarget:o.current,scrollThreshold:.7,hasMore:n,next:s,loader:a?q.createElement("span",{key:0},"Loading..."):null,inverse:!0,dataLength:(r==null?void 0:r.length)||0,style:{display:"flex",flexDirection:"column-reverse"},height:o.current.clientHeight},q.createElement(cM,{ref:o,"data-qa-anchor":"message-list"},r.map((l,m)=>{let c=r[m+1],u=c&&c.creatorId===l.creatorId,f=l.creatorId!==(t==null?void 0:t.userId);return !(l!=null&&l.data)||!l.createdAt?q.createElement(q.Fragment,null):q.createElement(pZ,{key:l.messageId,message:l,isConsequent:u,isIncoming:f,containerRef:o})}))):null)},pM=e=>{let t=N("MessageList");return t?t(e):q.createElement(uZ,d({},e))};var uM=i(Dl).attrs({width:28,height:28})`
  cursor: pointer;
  margin-left: 12px;
  margin-right: 8px;
  fill: #0f86fe;
`;i($i).attrs({width:18,height:18})`
  cursor: pointer;
  margin-right: 20px;
  fill: ${({theme:e})=>e.palette.neutral.main};
`;i(Gi).attrs({width:18,height:18})`
  margin-right: 12px;
  cursor: pointer;
  fill: ${({theme:e})=>e.palette.neutral.main};
`;var fM=i.div`
  padding: 12px 16px 16px 16px;
  background: ${({theme:e})=>e.palette.system.background};
  border-top: 1px solid #e3e4e8;
  display: flex;
  align-items: center;
`,gM=i.input`
  height: 34px;
  padding: 6px;
  outline: none;
  border: 1px solid #e3e4e8;
  border-radius: 4px;
  flex-grow: 1;
`;var yZ=({onSubmit:e})=>{let[t,o]=useState(""),{formatMessage:r}=useIntl(),n=()=>{t!==""&&(e(t),o(""));};return q.createElement(fM,null,q.createElement(gM,{"data-qa-anchor":"message-compose-bar-input",type:"text",value:t,placeholder:r({id:"MessageComposeBar.placeholder"}),onChange:s=>o(s.target.value),onKeyPress:s=>s.key==="Enter"&&n()}),q.createElement(uM,{"data-qa-anchor":"message-compose-bar-send-message-button",onClick:n}))},yM=e=>{let t=N("MessageComposerBar");return t?t(e):q.createElement(yZ,d({},e))};var hM=i(en).attrs({width:24,height:24})`
    cursor: pointer;
    fill: ${({theme:e})=>e.palette.neutral.main};
    align-self: center;
`,CM=i.div`
  height: 76px;
  padding: 0 20px;
  background: ${({theme:e})=>e.palette.system.background};
  border-top: 1px solid #e3e4e8;
  border-bottom: 1px solid #e3e4e8;
  display: flex;
  justify-content: space-between;
`,vM=i.div`
  display: flex;
  align-items: center;
  height: 74px;
`,xM=i.div`
  margin-left: 8px;
`,bM=i.div`
  font-weight: 600;
  font-size: 14px;
  color: #000000;
`,MM=i.div`
  font-size: 12px;
  color: #999999;
`;var CZ=({channelId:e,onChatDetailsClick:t,shouldShowChatDetails:o})=>{let r=hr(e),{chatName:n,chatAvatar:s}=Xa({channel:r});return q.createElement(CM,{"data-qa-anchor":"chat-header"},q.createElement(vM,null,q.createElement(zn,{avatarUrl:s||void 0,defaultImage:r!=null&&r.memberCount&&r.memberCount>2?lt:ce}),q.createElement(xM,{"data-qa-anchor":"chat-header-channel-info"},q.createElement(bM,{"data-qa-anchor":"chat-header-channel-info-channel-name"},n),q.createElement(MM,{"data-qa-anchor":"chat-header-channel-info-member-count"},q.createElement(FormattedMessage,{id:"chat.members.count",values:{count:r==null?void 0:r.memberCount}})))),!o&&q.createElement(hM,{onClick:t}))},IM=e=>{let t=N("ChatHeader");return t?t(e):q.createElement(CZ,d({},e))};var wM=i.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,SM=i.div`
  padding: 20px 16px 16px;
`,PM=i.div``,TM=i(sr)`
  button {
    width: 100%;
  }
`,kM=i.input`
  ${({theme:e})=>e.typography.global};
  border-radius: 4px;
  border: 1px solid #e3e4e8;
  padding: 10px 12px;
  outline: none;
  &:focus-within {
    border-color: ${({theme:e})=>e.palette.primary.main};
  }
`,sd=i.label`
  ${({theme:e})=>e.typography.bodyBold};
  ${({theme:e})=>`
    &.required {
      &::after {
        color: ${e.palette.alert.main};
        content: ' *';
      }
    }
  `}
`,zp=i.div`
  width: 700px;
  margin-right: 20px;
`,Op=i.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
`,EM=i.div``,M1=i.div`
  display: flex;
  flex-direction: column;
  ${({horizontal:e})=>e&&"flex-direction: row"};
  ${({separate:e,theme:t})=>e&&`
    border-top: 1px solid ${t.palette.base.shade4};
    padding-top: 20px;
  `};
  margin-bottom: 20px;
`,bZ=i.div`
  margin-top: 8px;
  color: ${({theme:e})=>e.palette.alert.main};
  ${({theme:e})=>e.typography.caption}
`,_p=e=>q.createElement(ErrorMessage,d({as:bZ},e)),NM=i.div`
  border-top: 1px solid ${({theme:e})=>e.palette.base.shade4};
  padding: ${({edit:e})=>e?"12px 0":"12px 16px"};
  display: flex;
  justify-content: ${({edit:e})=>e?"flex-start":"flex-end"};
`,LM=i.div``,AM=i.form``,BM=i.div`
  width: 100%;
`,FM=i(oe).attrs({type:"submit"})`
  padding: 10px 16px;
  margin-left: 12px;
  ${({edit:e})=>e&&z`
      min-width: 100px;
      margin-left: 0;
    `};
`;var SZ=({channelId:e,onChatDetailsClick:t,shouldShowChatDetails:o})=>{let r=hr(e);return useEffect(()=>{function s(){return w(this,null,function*(){r!=null&&(r.type!=="conversation"&&(yield ChannelRepository.joinChannel(r==null?void 0:r.channelId)),yield SubChannelRepository.startReading(r==null?void 0:r.channelId));})}return s(),()=>{r!=null&&SubChannelRepository.stopReading(r==null?void 0:r.channelId);}},[r]),q.createElement(wM,null,q.createElement(IM,{channelId:e,shouldShowChatDetails:o,onChatDetailsClick:t}),q.createElement(pM,{channelId:e}),q.createElement(yM,{onSubmit:s=>w(void 0,null,function*(){return MessageRepository.createMessage({subChannelId:e,data:{text:s},dataType:"text"})})}))},zM=e=>{let t=N("Chat");return t?t(e):q.createElement(SZ,d({},e))};var OM=i.div`
  display: flex;
  padding: 0px 15px 10px;
`,_M=i.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`,UM=i.label`
  font-weight: bold;
  margin-bottom: 5px;
`,HM=i.div`
  display: flex;
  justify-content: flex-end;
`,jM=i(oe)`
  margin-left: 15px;
`,VM=i(K)``;var kZ=({closeModal:e,submitButtonName:t="",onSubmit:o,chatName:r="",title:n})=>{let{formatMessage:s}=useIntl(),[a,l]=useState(r),m=()=>{o==null||o(a),e==null||e();};return q.createElement(dt,{"data-qa-anchor":"group-settings-modal",size:"small",title:n||s({id:"chat.create.modalTitle"}),footer:q.createElement(HM,null,q.createElement(VM,{onClick:e},q.createElement(FormattedMessage,{id:"general.cancel.capital"})),q.createElement(jM,{disabled:a.length===0,onClick:m},t||q.createElement(FormattedMessage,{id:"general.create.capital"})))},q.createElement(OM,null,q.createElement(_M,null,q.createElement(UM,null,q.createElement(FormattedMessage,{id:"groupChat.createPopup.fieldName"})),q.createElement(We,{value:a,placeholder:s({id:"groupChat.createPopup.placeholder"}),onChange:c=>l(c.plainText)}))))},$M=kZ;var EZ=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 448 512",fill:"currentColor"},e),q.createElement("path",{d:`M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 
      438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 
      48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 
      86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 
      288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 
      43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z`})),qM=EZ;var ZM=i.div``,w1=i.div`
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
`,S1=i.div`
  display: flex;
  align-items: center;
`,P1=i.div`
  padding-right: 8px;
  ${({theme:e})=>e.typography.body};
  color: ${({theme:e,isDanger:t})=>t?e.palette.alert.main:e.palette.neutral.main};
`,WM=i.span`
  ${({theme:e})=>e.typography.body};
  color: ${({theme:e})=>e.palette.neutral.shade3};
`,YM=i(nn).attrs({width:16,height:12})`
  width: 16px !important;
  padding-left: 8px;
  fill: ${({theme:e})=>e.palette.neutral.shade3};
`,QM=z`
  padding-right: 8px;
  text-align: center;
  fill: ${({theme:e})=>e.palette.neutral.main};
`,KM=i(qM).attrs({width:24,height:24})`
  ${QM}
`,JM=i(tn).attrs({width:24,height:20})`
  ${QM}
`;var BZ=({chatName:e,channelId:t})=>{let[o,r]=useState(!1),{formatMessage:n}=useIntl(),s=a=>w(void 0,null,function*(){yield ChannelRepository.updateChannel(t,{displayName:a});});return q.createElement(q.Fragment,null,q.createElement(w1,{onClick:()=>r(!0)},q.createElement(S1,null,q.createElement(JM,null),q.createElement(P1,null,q.createElement(FormattedMessage,{id:"chat.groupSetting"})))),o&&q.createElement($M,{title:q.createElement(FormattedMessage,{id:"chat.groupSetting"}),chatName:e,submitButtonName:n({id:"general.done.capital"}),closeModal:()=>r(!1),onSubmit:s}))},RM=BZ;var DZ=({channelId:e,chatType:t,chatName:o,showMembers:r,leaveChat:n,memberCount:s=0})=>{let{formatMessage:a}=useIntl(),l=s<=2;return q.createElement(ZM,null,q.createElement(w1,{onClick:r},q.createElement(S1,null,q.createElement(KM,null),q.createElement(P1,null,q.createElement(FormattedMessage,{id:"tabs.members"}))),q.createElement(S1,null,s&&q.createElement(WM,null,s),q.createElement(YM,null))),!l&&q.createElement(RM,{channelId:e,chatName:o}),t!=="conversation"?q.createElement(w1,{onClick:c=>{c.stopPropagation(),me({title:a({id:"chat.leaveChat.confirm.title"}),content:a({id:"chat.leaveChat.confirm.content"}),okText:a({id:"chat.leaveChat.confirm.okButton"}),onOk:()=>n==null?void 0:n()});}},q.createElement(P1,{isDanger:!0},q.createElement(FormattedMessage,{id:"chat.leaveChat"}))):null)},tI=DZ;var zZ=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 640 512",fill:"currentColor"},e),q.createElement("path",{d:`M224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9
      0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm89.6 256c-28.7 0-42.5
      16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5
      0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6
      38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4
      86.4V464zm224-248h-72v-72c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v72h-72c-8.8 0-16 7.2-16
      16v16c0 8.8 7.2 16 16 16h72v72c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-72h72c8.8 0 16-7.2
      16-16v-16c0-8.8-7.2-16-16-16z`})),rI=zZ;var nI=i.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`,iI=i.div`
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
`,aI=i(Ro).attrs({width:18,height:14})``,sI=i.span`
  padding-left: 8px;
  ${({theme:e})=>e.typography.body};
`,Hp=i.div`
  display: flex;
  align-items: center;
  height: 46px;
  padding: 0 24px 0 20px;
  border-bottom: 1px solid #f7f7f8;
`,ld=i.span`
  padding-left: 12px;
  ${({theme:e})=>e.typography.body};
  color: ${({theme:e})=>e.palette.neutral.main};
`,lI=i(Hp)`
  cursor: pointer;
  &:hover {
    background-color: #f7f7f8;
  }
`,mI=i.span`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 20px;
  }
`;var _Z=({onClick:e})=>q.createElement(lI,{onClick:e},q.createElement(mI,null,q.createElement(rI,null)),q.createElement(ld,null,q.createElement(FormattedMessage,{id:"chat.member.addMore"}))),dI=_Z;function k1(e){let r=be({fetcher:ChannelRepository.Membership.getMembers,params:{channelId:e},shouldCall:()=>!!e}),{items:t}=r,o=I(r,["items"]);return d({channelMembers:t},o)}var jZ="Anonymous",VZ=({channelId:e,hideMembers:t,onEditChatMemberClick:o,onMemberSelect:r})=>{let n=hr(e),{channelMembers:s,hasMore:a,loadMore:l}=k1(e),m=f=>{f.stopPropagation(),t==null||t();},c=f=>{var C;let{displayName:p,metadata:g}=(C=f==null?void 0:f.user)!=null?C:{};if(p)return p;let{firstname:y="",lastname:v=""}=g!=null?g:{};return [y,v].filter(Boolean).join(" ").trim()},u=(n==null?void 0:n.type)==="live"||(n==null?void 0:n.type)==="community";return q.createElement(nI,null,q.createElement(iI,{onClick:m},q.createElement(aI,null),q.createElement(sI,null,q.createElement(FormattedMessage,{id:"chat.members.return"}))),(s==null?void 0:s.length)>0?q.createElement(ct,{hasMore:a,loadMore:l,contentSlot:q.createElement(q.Fragment,null,s.map(f=>q.createElement(Hp,{key:f.userId,onClick:()=>r==null?void 0:r(f)},q.createElement(zn,d({size:Eo.SMALL,defaultImage:ce},f==null?void 0:f.user)),q.createElement(ld,null,c(f)||jZ))),u?q.createElement(dI,{onClick:()=>o==null?void 0:o({channelId:e,members:s})}):null)}):null)},cI=VZ;var pI=i.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 280px;
  height: 100%;
  padding-top: 24px;
  border-left: 1px solid #e3e4e8;
`,uI=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 18px 20px;
  ${({theme:e})=>e.typography.title};
  line-height: 1.75;
  color: ${({theme:e})=>e.palette.neutral.shade1};
`,fI=i(Qe).attrs({width:20,height:20})`
  fill: ${({theme:e})=>e.palette.neutral.main};
  cursor: pointer;
`,gI=i.div`
  display: flex;
  padding: 0 24px 25px 20px;
  border-bottom: 1px solid #e3e4e8;
`,yI=i.div`
  margin-left: 12px;
`,hI=i.div`
  padding-bottom: 2px;
  ${({theme:e})=>e.typography.body};
  line-height: 16px;
  color: ${({theme:e})=>e.palette.neutral.main};
`,CI=i.div`
  ${({theme:e})=>e.typography.bodyBold};
  line-height: 24px;
  color: #000000;
`;var GZ=({channelId:e,onClose:t,leaveChat:o,onEditChatMemberClick:r,onMemberSelect:n})=>{let s=hr(e),{chatName:a,chatAvatar:l,type:m}=Xa({channel:s}),[c,u]=useState(!1);return q.createElement(pI,null,q.createElement(uI,null,q.createElement(FormattedMessage,{id:"chat.details.header"}),q.createElement(fI,{onClick:t})),q.createElement(gI,null,q.createElement(zn,{avatarUrl:l,defaultImage:lt}),q.createElement(yI,null,q.createElement(hI,null,q.createElement(FormattedMessage,{id:"chat.details.chatName"})),q.createElement(CI,null,a))),c?q.createElement(cI,{channelId:e,hideMembers:()=>u(!1),onMemberSelect:n,onEditChatMemberClick:({members:f})=>s&&(r==null?void 0:r({channel:s,members:f}))}):q.createElement(tI,{chatType:m,channelId:e,chatName:a,leaveChat:o,memberCount:s==null?void 0:s.memberCount,showMembers:()=>u(!0)}))},xI=e=>{let t=N("ChatDetails");return t?t(e):q.createElement(GZ,d({},e))};var bI=i.div`
  display: flex;
  height: 100%;
  width: 100%;
`;var ZZ=({name:e})=>q.createElement("div",{"data-qa-anchor":`chat-type-selector-item-${e}`},e),WZ=({onChange:e,parentContainer:t})=>{let{formatMessage:o}=useIntl(),r=["live","community","conversation","broadcast"].map(n=>({name:o({id:"select.chatType.item"},{answerType:n}),value:n}));return q.createElement(TM,{"data-qa-anchor":"chat-type",options:r,value:[r[0]],parentContainer:t,renderItem:ZZ,onSelect:({value:n})=>e(n)})},II=WZ;var JZ=({children:e})=>q.createElement(PM,null,q.createElement(SM,null,e)),XZ=({className:e,onCancel:t,onSubmit:o})=>{let{formatMessage:r}=useIntl(),[n,s]=q.useState(!1),a={type:"live",displayName:void 0,avatarFileId:void 0,userIds:[],tags:[]},{register:l,handleSubmit:m,watch:c,control:u,formState:{errors:f,isDirty:p}}=useForm({defaultValues:a}),g=c("userIds"),y=C=>w(void 0,null,function*(){s(!0);try{let x={displayName:C.displayName,type:(C==null?void 0:C.type)||"community",avatarFileId:(C==null?void 0:C.avatarFileId)||void 0,userIds:C==null?void 0:C.userIds,tags:C==null?void 0:C.tags};yield o==null?void 0:o(x);}finally{s(!1);}}),v=!p||g.length===0||n,h=useRef(null);return q.createElement(EM,null,q.createElement(AM,{className:e,onSubmit:m(y)},q.createElement(LM,{ref:h},q.createElement(JZ,null,q.createElement(M1,null,q.createElement(Op,null,q.createElement(zp,null,q.createElement(sd,null,q.createElement(FormattedMessage,{id:"chatComposer.label.type"})))),q.createElement(BM,null,q.createElement(Controller,{name:"type",rules:{required:"Channel type is required"},render:M=>{var {field:S}=M,b=S,x=I(b,["ref"]);return q.createElement(II,d({parentContainer:h.current},x))},control:u,defaultValue:""}))),q.createElement(M1,null,q.createElement(Op,null,q.createElement(zp,null,q.createElement(sd,null,q.createElement(FormattedMessage,{id:"chatComposer.label.displayName"})))),q.createElement(kM,T(d({},l("displayName")),{placeholder:r({id:"chat_composer.placeholder.displayName"}),"data-qa-anchor":"chat-composer-display-name-input"})),q.createElement(_p,{errors:f,name:"displayName"})),q.createElement(M1,null,q.createElement(Controller,{name:"avatarFileId",control:u,render:M=>{var {field:S}=M,b=S,x=I(b,["ref"]);return q.createElement(bn,d({mimeType:"image/png, image/jpeg"},x))},defaultValue:void 0})),q.createElement(M1,null,q.createElement(sd,{className:"required"},q.createElement(FormattedMessage,{id:"chatComposer.addUsers"})),q.createElement(Controller,{name:"userIds",render:M=>{var {field:S}=M,b=S,x=I(b,["ref"]);return q.createElement(Tn,T(d({parentContainer:h.current},x),{"data-qa-anchor":"chat-composer-select-user-input"}))},control:u}),q.createElement(_p,{errors:f,name:"userIds"})))),q.createElement(NM,null,q.createElement($,{onClick:C=>{C.preventDefault(),t==null||t();}},q.createElement(FormattedMessage,{id:"cancel"})),q.createElement(FM,{"data-qa-anchor":"chat-composer-submit-button",disabled:v},q.createElement(FormattedMessage,{id:"create"})))))},wI=XZ;var tW=({onClose:e})=>{let{formatMessage:t}=useIntl(),o=n=>w(void 0,null,function*(){try{yield ChannelRepository.createChannel(n),e();}catch(s){s instanceof Error&&Z.error({content:s.message});}}),r=()=>me({title:t({id:"CommunityCreationModal.title"}),content:t({id:"CommunityCreationModal.content"}),cancelText:t({id:"CommunityCreationModal.cancelText"}),okText:t({id:"CommunityCreationModal.okText"}),onOk:e});return q.createElement(dt,{"data-qa-anchor":"create-chat-modal",title:t({id:"chat_modal.title"}),onCancel:r},q.createElement(wI,{onSubmit:o,onCancel:r}))},PI=tW;i.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;var TI=i.div`
  padding: 20px 16px 16px;
`,kI=i.div``;i(sr)`
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
`;var EI=i.label`
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
`;var NI=i.div``,LI=i.div`
  display: flex;
  flex-direction: column;
  ${({horizontal:e})=>e&&"flex-direction: row"};
  ${({separate:e,theme:t})=>e&&`
    border-top: 1px solid ${t.palette.base.shade4};
    padding-top: 20px;
  `};
  margin-bottom: 20px;
`,nW=i.div`
  margin-top: 8px;
  color: ${({theme:e})=>e.palette.alert.main};
  ${({theme:e})=>e.typography.caption}
`,AI=e=>q.createElement(ErrorMessage,d({as:nW},e)),BI=i.div`
  border-top: 1px solid ${({theme:e})=>e.palette.base.shade4};
  padding: ${({edit:e})=>e?"12px 0":"12px 16px"};
  display: flex;
  justify-content: ${({edit:e})=>e?"flex-start":"flex-end"};
`,FI=i.div``,DI=i.form``;i.div`
  width: 100%;
`;var zI=i(oe).attrs({type:"submit"})`
  padding: 10px 16px;
  margin-left: 12px;
  ${({edit:e})=>e&&z`
      min-width: 100px;
      margin-left: 0;
    `};
`;var lW=({children:e})=>q.createElement(kI,null,q.createElement(TI,null,e)),mW=({channelId:e,className:t,memberIds:o,onCancel:r,onSubmit:n})=>{let[s,a]=q.useState(!1),l={userIds:o},{register:m,handleSubmit:c,watch:u,control:f,formState:{errors:p,isDirty:g}}=useForm({defaultValues:l}),y=u("userIds"),v=M=>w(void 0,[M],function*({userIds:x}){a(!0);try{n==null||n(x);let S=o.filter(P=>!x.includes(P)),b=x.filter(P=>!o.includes(P));return Promise.all([(b==null?void 0:b.length)>0?ChannelRepository.Membership.addMembers(e,b):null,(S==null?void 0:S.length)>0?ChannelRepository.Membership.removeMembers(e,S):null].filter(ge))}catch(S){S instanceof Error&&Z.error({content:S.message});}finally{a(!1);}}),h=!g||y.length===0||s,C=useRef(null);return q.createElement(NI,null,q.createElement(DI,{className:t,onSubmit:c(v)},q.createElement(FI,{ref:C},q.createElement(lW,null,q.createElement(LI,null,q.createElement(EI,{className:"required"},q.createElement(FormattedMessage,{id:"chatComposer.addUsers"})),q.createElement(Controller,{name:"userIds",render:S=>{var {field:b}=S,P=b,M=I(P,["ref"]);return q.createElement(Tn,T(d({parentContainer:C.current},M),{"data-qa-anchor":"edit-chat-members-composer-select-user-input"}))},control:f}),q.createElement(AI,{errors:p,name:"userIds"})))),q.createElement(BI,null,q.createElement($,{onClick:x=>{x.preventDefault(),r==null||r();},disabled:g},q.createElement(FormattedMessage,{id:"cancel"})),q.createElement(zI,{"data-qa-anchor":"edit-chat-members-composer-submit-button",disabled:h},q.createElement(FormattedMessage,{id:"save"})))))};function $p(e){let m=e,{channelId:t}=m,o=I(m,["channelId"]),{isLoading:r,channelMembers:n,hasMore:s,loadMore:a}=k1(t),l=n.map(c=>c.userId);return r||t==null?null:q.createElement(mW,T(d({},o),{channelId:t,memberIds:l}))}var cW=({channelId:e,onClose:t})=>{let{formatMessage:o}=useIntl(),r=s=>w(void 0,null,function*(){try{t();}catch(a){a instanceof Error&&Z.error({content:a.message});}}),n=()=>me({title:o({id:"editChatMembersModal.confirm.title"}),content:o({id:"editChatMembersModal.confirm.content"}),cancelText:o({id:"editChatMembersModal.confirm.cancelText"}),okText:o({id:"editChatMembersModal.confirm.okText"}),onOk:t});return q.createElement(dt,{"data-qa-anchor":"edit-chat-members-modal",title:o({id:"editChatMembersModal.title"}),onCancel:n},q.createElement($p,{channelId:e,onSubmit:r,onCancel:n}))},UI=cW;var fW=({membershipFilter:e="all",defaultChannelId:t,onMemberSelect:o,onChannelSelect:r,onAddNewChannel:n,onEditChatMember:s})=>{let{formatMessage:a}=useIntl(),[l,m]=useState(null),[c,u]=useState(!1),f=()=>u(!0),p=()=>u(!1),[g,y]=useState(!1),[v,h]=useState(!1),C=()=>y(!0),x=S=>{(l==null?void 0:l.channelId)!==(S==null?void 0:S.channelId)&&(p(),m(S),r==null||r(S));},M=()=>w(void 0,null,function*(){if(l!=null&&l.channelId)try{yield ChannelRepository.leaveChannel(l.channelId),Z.success({content:a({id:"chat.leaveChat.success"})}),m(null);}catch(S){Z.error({content:a({id:"chat.leaveChat.error"})});}});return useEffect(()=>{function S(){return w(this,null,function*(){return Client.startUnreadSync()})}return S(),()=>{Client.stopUnreadSync();}},[]),useEffect(()=>{t&&x({channelId:t,type:"standard"});},[t]),q.createElement(bI,null,q.createElement(Ub,{selectedChannelId:l==null?void 0:l.channelId,membershipFilter:e,onChannelSelect:x,onAddNewChannelClick:()=>{C(),n==null||n();}}),l?q.createElement(zM,{channelId:l.channelId,shouldShowChatDetails:c,onChatDetailsClick:f}):null,c&&l?q.createElement(xI,{channelId:l.channelId,leaveChat:M,onEditChatMemberClick:S=>{h(!0),s==null||s(S);},onMemberSelect:o,onClose:p}):null,g?q.createElement(PI,{onClose:()=>y(!1)}):null,v&&l?q.createElement(UI,{channelId:l==null?void 0:l.channelId,onClose:()=>h(!1)}):null)},gW=fW;var VI=(e,t)=>w(void 0,null,function*(){return ChannelRepository.Membership.addMembers(e,t)});var $I=(e,t)=>w(void 0,null,function*(){return ChannelRepository.Membership.removeMembers(e,t)});var bW=({size:e=yr.REGULAR,avatarUrl:t,avatarFileId:o,avatarFile:r,defaultImage:n,avatarCustomUrl:s})=>{let[a,l]=useState(null),[m,c]=useState(null);return useEffect(()=>{l(null),c(null),w(void 0,null,function*(){if(t){l(t);return}if(s){l(s);return}if(r){let p=yield (g=>new Promise((y,v)=>{let h=new FileReader;h.readAsDataURL(g),h.onload=()=>y(h.result),h.onerror=v;}))(r);l(p);return}if(o){let f=yield FileRepository.fileUrlWithSize(o,"small");l(f);return}if(n){c(n);return}});},[t,o,r,s]),q.createElement(J,{size:e,avatar:a,backgroundImage:m})},On=bW;var qI=`url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='20' fill='%23D9E5FC'/%3E%3Cpath d='M19.8462 12C20.7625 12 21.6413 12.356 22.2893 12.9898C22.9373 13.6235 23.3013 14.4831 23.3013 15.3793C23.3013 16.2756 22.9373 17.1351 22.2893 17.7688C21.6413 18.4026 20.7625 18.7586 19.8462 18.7586C18.9298 18.7586 18.051 18.4026 17.403 17.7688C16.755 17.1351 16.391 16.2756 16.391 15.3793C16.391 14.4831 16.755 13.6235 17.403 12.9898C18.051 12.356 18.9298 12 19.8462 12ZM12.9359 14.4138C13.4887 14.4138 14.0021 14.5586 14.4463 14.8193C14.2982 16.2 14.7128 17.571 15.5618 18.6428C15.0682 19.5697 14.081 20.2069 12.9359 20.2069C12.1504 20.2069 11.3972 19.9017 10.8418 19.3585C10.2864 18.8153 9.97436 18.0786 9.97436 17.3103C9.97436 16.5421 10.2864 15.8054 10.8418 15.2622C11.3972 14.719 12.1504 14.4138 12.9359 14.4138ZM26.7564 14.4138C27.5419 14.4138 28.2951 14.719 28.8505 15.2622C29.4059 15.8054 29.7179 16.5421 29.7179 17.3103C29.7179 18.0786 29.4059 18.8153 28.8505 19.3585C28.2951 19.9017 27.5419 20.2069 26.7564 20.2069C25.6113 20.2069 24.6241 19.5697 24.1305 18.6428C24.9795 17.571 25.3941 16.2 25.246 14.8193C25.6903 14.5586 26.2036 14.4138 26.7564 14.4138ZM13.4295 24.3103C13.4295 22.3117 16.3022 20.6897 19.8462 20.6897C23.3901 20.6897 26.2628 22.3117 26.2628 24.3103V26H13.4295V24.3103ZM8 26V24.5517C8 23.2097 9.86577 22.08 12.3929 21.7517C11.8105 22.4083 11.4551 23.3159 11.4551 24.3103V26H8ZM31.6923 26H28.2372V24.3103C28.2372 23.3159 27.8818 22.4083 27.2994 21.7517C29.8265 22.08 31.6923 23.2097 31.6923 24.5517V26Z' fill='white'/%3E%3C/svg%3E%0A");`;var MW=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 448 512",fill:"currentColor"},e),q.createElement("path",{d:`M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 
      438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 
      48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 
      86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 
      288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 
      43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z`})),WI=MW;var wW=(e=void 0)=>{var r;let[t,o]=useState(e===void 0?(r=window.navigator.onLine)!=null?r:Client.isConnected:e);return useEffect(()=>(window.addEventListener("online",()=>o(!0)),window.removeEventListener("online",()=>o(!0))),[]),useEffect(()=>(window.addEventListener("offline",()=>o(!1)),window.removeEventListener("offline",()=>o(!1))),[]),useEffect(()=>Client.onSessionStateChange(()=>{o(Client.isConnected());}),[]),t},dd=wW;var PW=Xr`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`,TW=i.svg`
  animation: ${PW} 2s linear infinite;
`,kW=e=>{let t=v4$1();return q.createElement(TW,d({xmlns:"http://www.w3.org/2000/svg",width:"17",height:"16",viewBox:"0 0 17 16",fill:"none"},e),q.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.52453 4C9.52453 4.31559 9.26869 4.57143 8.9531 4.57143C8.63751 4.57143 8.38167 4.31559 8.38167 4V0.571429C8.38167 0.255837 8.63751 0 8.9531 0C9.26869 0 9.52453 0.255837 9.52453 0.571428V4ZM7.23891 5.03082C7.51222 4.87303 7.60586 4.52355 7.44807 4.25024L5.73378 1.28101C5.57599 1.0077 5.22651 0.914056 4.9532 1.07185C4.67989 1.22965 4.58624 1.57913 4.74404 1.85244L6.45832 4.82167C6.61612 5.09498 6.9656 5.18862 7.23891 5.03082ZM5.77458 5.50525C6.04789 5.66304 6.14153 6.01252 5.98374 6.28583C5.82594 6.55914 5.47646 6.65278 5.20315 6.49499L2.23392 4.7807C1.96061 4.62291 1.86697 4.27343 2.02476 4.00012C2.18256 3.72681 2.53204 3.63316 2.80535 3.79096L5.77458 5.50525ZM5.52455 8.00013C5.52455 7.68454 5.26872 7.4287 4.95312 7.4287H1.52455C1.20896 7.4287 0.953125 7.68454 0.953125 8.00013C0.953125 8.31572 1.20896 8.57156 1.52455 8.57156H4.95313C5.26872 8.57156 5.52455 8.31572 5.52455 8.00013ZM5.20327 9.50543C5.47658 9.34764 5.82606 9.44128 5.98385 9.71459C6.14165 9.9879 6.048 10.3374 5.77469 10.4952L2.80546 12.2095C2.53215 12.3673 2.18267 12.2736 2.02488 12.0003C1.86708 11.727 1.96073 11.3775 2.23404 11.2197L5.20327 9.50543ZM7.23874 10.9693C6.96543 10.8115 6.61595 10.9051 6.45815 11.1784L4.74387 14.1476C4.58607 14.4209 4.67971 14.7704 4.95302 14.9282C5.22633 15.086 5.57581 14.9924 5.73361 14.7191L7.44789 11.7498C7.60569 11.4765 7.51205 11.127 7.23874 10.9693ZM8.95292 11.4287C8.63732 11.4287 8.38149 11.6845 8.38149 12.0001V15.4287C8.38149 15.7443 8.63732 16.0001 8.95292 16.0001C9.26851 16.0001 9.52435 15.7443 9.52435 15.4287V12.0001C9.52435 11.6845 9.26851 11.4287 8.95292 11.4287ZM10.6674 5.03064C10.9407 5.18843 11.2901 5.09479 11.4479 4.82148L13.1622 1.85225C13.32 1.57894 13.2264 1.22946 12.9531 1.07166C12.6798 0.913868 12.3303 1.00751 12.1725 1.28082L10.4582 4.25005C10.3004 4.52336 10.394 4.87284 10.6674 5.03064ZM12.7028 6.4947C12.4295 6.65249 12.08 6.55885 11.9222 6.28554C11.7644 6.01223 11.8581 5.66275 12.1314 5.50496L15.1006 3.79067C15.3739 3.63287 15.7234 3.72652 15.8812 3.99983C16.039 4.27314 15.9453 4.62262 15.672 4.78041L12.7028 6.4947ZM12.3816 8C12.3816 8.31559 12.6374 8.57143 12.953 8.57143H16.3816C16.6972 8.57143 16.953 8.31559 16.953 8C16.953 7.68441 16.6972 7.42857 16.3816 7.42857H12.953C12.6374 7.42857 12.3816 7.68441 12.3816 8ZM12.1315 10.4946C11.8582 10.3368 11.7646 9.98737 11.9224 9.71406C12.0801 9.44075 12.4296 9.3471 12.7029 9.5049L15.6722 11.2192C15.9455 11.377 16.0391 11.7265 15.8813 11.9998C15.7235 12.2731 15.3741 12.3667 15.1007 12.2089L12.1315 10.4946ZM10.6673 10.9693C10.3939 11.1271 10.3003 11.4766 10.4581 11.7499L12.1724 14.7191C12.3302 14.9924 12.6797 15.0861 12.953 14.9283C13.2263 14.7705 13.3199 14.421 13.1621 14.1477L11.4478 11.1785C11.29 10.9052 10.9406 10.8115 10.6673 10.9693Z",fill:`url(#paint_${t})`}),q.createElement("defs",null,q.createElement("radialGradient",{id:`paint_${t}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(8.95312 8) scale(8)"},q.createElement("stop",{offset:"0.669733",stopColor:"white"}),q.createElement("stop",{offset:"0.716307",stopColor:"white",stopOpacity:"0.01"}))))},YI=kW;var N1={};var KI={DIRECT_CHAT:2,ONLY_ME_CHAT:1};function FW(e,t){var s,a,l;if((s=e==null?void 0:e.metadata)!=null&&s.isDirectChat&&(e==null?void 0:e.memberCount)===KI.ONLY_ME_CHAT)return "Me";if(!((a=e==null?void 0:e.metadata)!=null&&a.isDirectChat)&&(e!=null&&e.displayName))return e==null?void 0:e.displayName;let{firstname:o="",lastname:r=""}=(l=t==null?void 0:t.metadata)!=null?l:{},n=trim(`${o}${r}`);return (t==null?void 0:t.displayName)||n||(t==null?void 0:t.userId)||e.channelId}function Zp(o){return w(this,arguments,function*({avatarFileId:e,avatarCustomUrl:t}){if(t)return t;if(e){let r=yield FileRepository.getFile(e);return FileRepository.fileUrlWithSize(r.data.fileUrl,"small")}return null})}function DW(e,t,o){return w(this,null,function*(){var r,n;return (e==null?void 0:e.memberCount)===KI.ONLY_ME_CHAT?Zp({avatarCustomUrl:o==null?void 0:o.avatarUrl}):(r=e==null?void 0:e.metadata)!=null&&r.isDirectChat&&(t!=null&&t.avatarUrl)?Zp({avatarCustomUrl:t.avatarUrl}):Zp({avatarFileId:e==null?void 0:e.avatarFileId,avatarCustomUrl:(n=e==null?void 0:e.metadata)==null?void 0:n.avatarCustomUrl})})}function zW({channel:e}){var u,f,p;let{currentUserId:t}=Li(),[o,r]=useState(null),n=(u=e==null?void 0:e.metadata)!=null&&u.isDirectChat?((p=(f=e==null?void 0:e.metadata)==null?void 0:f.userIds)!=null?p:[]).find(g=>g!==t):null,s=j(t),a=j(n),l=_({fileId:s==null?void 0:s.avatarFileId}),m=_({fileId:a==null?void 0:a.avatarFileId});return useEffect(()=>{function g(){return w(this,null,function*(){r(null);let y=yield DW(e,{avatarUrl:(a==null?void 0:a.avatarCustomUrl)||m},{avatarUrl:(s==null?void 0:s.avatarCustomUrl)||l});r(y);})}g();},[a==null?void 0:a.avatarCustomUrl,e,l,s==null?void 0:s.avatarCustomUrl]),{chatName:useMemo(()=>e==null?void 0:FW(e,a),[e,a]),chatAvatar:o,type:e==null?void 0:e.type}}var JI=zW;var Wp=({channel:e})=>{let{chatName:t,chatAvatar:o}=JI({channel:e}),{formatMessage:r}=useIntl(),n=dd();return q.createElement("div",{className:N1.messageListHeader},q.createElement(On,{avatarUrl:o,defaultImage:qI}),q.createElement("div",null,q.createElement("div",{className:N1.displayName},q.createElement(he.Title,null,t||r({id:"loading"}))),q.createElement("div",{className:N1.memberCount},n?q.createElement(q.Fragment,null,q.createElement(WI,{className:N1.memberIcon}),q.createElement(he.Caption,null,bp((e==null?void 0:e.memberCount)||0)," ",q.createElement(FormattedMessage,{id:"plural.member",values:{amount:(e==null?void 0:e.memberCount)||0}}))):q.createElement(q.Fragment,null,q.createElement(YI,{width:20,height:20}),q.createElement(he.Caption,null,q.createElement(FormattedMessage,{id:"general.connection.waiting"}))))))},RI=Wp;var L1={};var Yo={};var jW=o=>{var r=o,{fill:e="#A5A9B5"}=r,t=I(r,["fill"]);return q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"20",height:"21",viewBox:"0 0 20 21",fill:"none"},t),q.createElement("path",{d:"M10 8.78369C10.8125 8.78369 11.5 9.47119 11.5 10.2837C11.5 11.1274 10.8125 11.7837 10 11.7837C9.15625 11.7837 8.5 11.1274 8.5 10.2837C8.5 9.47119 9.15625 8.78369 10 8.78369ZM8.5 5.53369C8.5 4.72119 9.15625 4.03369 10 4.03369C10.8125 4.03369 11.5 4.72119 11.5 5.53369C11.5 6.37744 10.8125 7.03369 10 7.03369C9.15625 7.03369 8.5 6.37744 8.5 5.53369ZM8.5 15.0337C8.5 14.2212 9.15625 13.5337 10 13.5337C10.8125 13.5337 11.5 14.2212 11.5 15.0337C11.5 15.8774 10.8125 16.5337 10 16.5337C9.15625 16.5337 8.5 15.8774 8.5 15.0337Z",fill:e}))},tw=jW;var ow={};var ZW=s=>{var a=s,{isOpen:e,content:t,fixed:o=!1,children:r}=a,n=I(a,["isOpen","content","fixed","children"]);return q.createElement(Popover,d({containerClassName:Ln(ow.popover,{fixed:!1}),isOpen:e,content:t},n),r)},rw=ZW;var WW=e=>q.createElement("svg",d({width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:"M1.4375 10.5586C0.84375 9.99609 0.84375 9.02734 1.4375 8.46484L6.9375 2.96484C7.875 1.99609 9.5 2.68359 9.5 4.02734V6.52734C13.7812 6.65234 19 7.49609 19 12.8398C19 15.1211 17.7812 17.0273 15.9375 18.2461C14.7812 19.0273 13.25 17.9336 13.6875 16.5586C14.4375 14.1211 14.0625 12.8398 9.5 12.5586V14.9961C9.5 16.3398 7.875 17.0273 6.9375 16.0586L1.4375 10.5586ZM2.5 9.49609L8 14.9961V11.0273C13.125 11.0586 16.6562 12.0586 15.0938 16.9961C16.25 16.2461 17.5 14.9336 17.5 12.8398C17.5 8.37109 12.4688 8.02734 8 8.02734V3.99609L2.5 9.49609Z",fill:"currenColor"})),iw=WW;var YW=e=>q.createElement("svg",d({width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:"M16.5312 5.03992C16.7812 5.28992 17 5.75867 17 6.10242V14.4774C17 15.3212 16.3125 15.9774 15.5 15.9774H13V17.4774C13 18.3212 12.3125 18.9774 11.5 18.9774H4.5C3.65625 18.9774 3 18.3212 3 17.4774V7.47742C3 6.66492 3.65625 5.97742 4.5 5.97742H7V4.47742C7 3.66492 7.65625 2.97742 8.5 2.97742H13.875C14.2188 2.97742 14.6875 3.19617 14.9375 3.44617L16.5312 5.03992ZM11.3125 17.4774C11.4062 17.4774 11.5 17.4149 11.5 17.2899V15.9774H8.5C7.65625 15.9774 7 15.3212 7 14.4774V7.47742H4.6875C4.5625 7.47742 4.5 7.57117 4.5 7.66492V17.2899C4.5 17.4149 4.5625 17.4774 4.6875 17.4774H11.3125ZM15.3125 14.4774C15.4062 14.4774 15.5 14.4149 15.5 14.2899V7.97742H12.75C12.3125 7.97742 12 7.66492 12 7.22742V4.47742H8.6875C8.5625 4.47742 8.5 4.57117 8.5 4.66492V14.2899C8.5 14.4149 8.5625 14.4774 8.6875 14.4774H15.3125ZM15.5 6.47742V6.19617C15.5 6.13367 15.4688 6.10242 15.4375 6.07117L13.9062 4.53992C13.875 4.50867 13.8438 4.47742 13.7812 4.47742H13.5V6.47742H15.5Z",fill:"currenColor"})),sw=YW;var QW=e=>q.createElement("svg",d({width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:"M12.875 4.375C13.0625 4.375 13.25 4.5625 13.25 4.75V5.125C13.25 5.33594 13.0625 5.5 12.875 5.5H12.5L11.9844 13.4453C11.9609 14.0312 11.4453 14.5 10.8594 14.5H5.11719C4.53125 14.5 4.01562 14.0312 3.99219 13.4453L3.5 5.5H3.125C2.91406 5.5 2.75 5.33594 2.75 5.125V4.75C2.75 4.5625 2.91406 4.375 3.125 4.375H5.04688L5.84375 3.0625C6.03125 2.75781 6.45312 2.5 6.80469 2.5H9.17188C9.52344 2.5 9.94531 2.75781 10.1328 3.0625L10.9297 4.375H12.875ZM6.80469 3.625L6.35938 4.375H9.61719L9.17188 3.625H6.80469ZM10.8594 13.375L11.3516 5.5H4.625L5.11719 13.375H10.8594Z"})),cd=QW;var XW=({isOwner:e,isModerator:t,action:o,containerRef:r})=>{let[n,s]=q.useState(!1),{formatMessage:a}=useIntl(),l=useRef(null),m=()=>{o.onCopy&&o.onCopy(),s(!1);},c=()=>{o.onReply&&o.onReply(),s(!1);},u=()=>{o.onDelete&&o.onDelete(),s(!1);};return q.createElement(q.Fragment,null,q.createElement(rw,{positions:["bottom","top"],onClickOutside:()=>s(!1),isOpen:n,align:"start",parentElement:(r==null?void 0:r.current)||void 0,content:q.createElement(q.Fragment,null,q.createElement("div",{className:Yo.messageActionButton,onClick:c},q.createElement("div",{className:Yo.messageActionButtonText},q.createElement(he.Body,null,a({id:"livechat.messageBubble.reply.button"}))),q.createElement(iw,{className:Yo.replyIcon})),q.createElement("div",{className:Yo.messageActionButton,onClick:m},q.createElement("div",{className:Yo.messageActionButtonText},q.createElement(he.Body,null,a({id:"livechat.messageBubble.copy.button"}))),q.createElement(sw,{className:Yo.copyIcon})),(e||t)&&q.createElement("div",{className:Yo.messageActionButton,onClick:u},q.createElement("div",{className:Yo.messageDangerActionButtonText},q.createElement(he.Body,null,a({id:"livechat.messageBubble.delete.button"}))),q.createElement(cd,{className:Yo.binIcon})))},q.createElement("div",{className:Yo.optionIcon,ref:l,onClick:()=>{s(!n);}},q.createElement(tw,null))))},mw=XW;var Yp={};var eY=({avatarUrl:e,displayName:t,children:o})=>q.createElement("div",{className:Yp.messageItemContainer},q.createElement(On,{size:Eo.SMALL,avatarUrl:e,defaultImage:ce}),q.createElement("div",null,q.createElement("div",{className:Yp.userDisplayName},q.createElement(he.CaptionBold,null,t)),o)),dw=eY;var _n={};var rY=e=>Fe({fetcher:MessageRepository.getMessage,params:e,shouldCall:()=>!!e}),cw=rY;var pw={};var iY=({message:e,className:t})=>{var s,a,l;ve();let r=(s=e.metadata)==null?void 0:s.mentioned,n=r==null?void 0:r.sort((m,c)=>m.index-c.index);if(n!=null&&n.length){let m=((a=e.data)==null?void 0:a.text)||"",c=[],u=0;n.forEach(p=>{let g=p.index,y=p.index+p.length+1,v=m.slice(u,g),h=m.slice(g,y);v&&c.push({text:v,isMention:!1}),c.push({text:h,isMention:!0}),u=y;});let f=m.slice(u);return f&&c.push({text:f,isMention:!1}),q.createElement(he.Body,{className:t},c.map((p,g)=>p.isMention?q.createElement("span",{key:g,className:pw.mentionText},p.text):q.createElement("span",{key:g},p.text)))}return q.createElement(he.Body,{className:t},(l=e.data)==null?void 0:l.text)},Qp=iY;var aY=({message:e})=>{var t;if(e&&e.parentId){let o=cw(e.parentId),r=j(o==null?void 0:o.creatorId);return !o||!r?null:q.createElement("div",{className:_n.messageRepliedBubble},q.createElement("div",{className:_n.messageParentContainer},q.createElement("div",{className:_n.messageParentDisplayName},q.createElement(he.BodyBold,null,r.displayName)),q.createElement(he.Body,{className:_n.messageParentText},(t=o.data)==null?void 0:t.text)),q.createElement("div",{className:_n.messageChildContainer},q.createElement(Qp,{className:_n.messageChildText,message:e})))}return q.createElement("div",{className:_n.messageBubble},q.createElement(Qp,{message:e}))},uw=aY;var mY=e=>{let{client:t}=H(),[o,r]=useState(!1);return useEffect(()=>{let n=(t==null?void 0:t.hasPermission("EDIT_CHANNEL_USER").currentUser())||!1,s=(t==null?void 0:t.hasPermission("EDIT_CHANNEL_USER").channel(e))||!1;r(n||s);},[e]),{isModerator:o}},ud=mY;var pY=({message:e,avatarUrl:t,userDisplayName:o,containerRef:r,action:n})=>{let{formatMessage:s}=useIntl(),a=H(),l=e.creatorId===a.currentUserId,{isModerator:m}=ud(e.channelId);return q.createElement(dw,{avatarUrl:t,displayName:o},q.createElement("div",null,e.isDeleted?q.createElement("div",{className:L1.messageDeletedBubble},q.createElement(cd,{className:L1.binIcon}),q.createElement("div",null,q.createElement(he.Body,null,s({id:"livechat.deleted.message"})))):q.createElement("div",{className:L1.messageBubbleWrap},q.createElement(uw,{message:e}),q.createElement(mw,{containerRef:r,isOwner:l,isModerator:m,action:n}),q.createElement("div",{className:L1.timestamp},q.createElement(FormattedTime,{value:new Date(e.createdAt)})))))},fd=pY;var Kp=({message:e,containerRef:t,action:o})=>{let r=j(e.creatorId),n=_({fileId:r==null?void 0:r.avatarFileId,imageSize:"small"});return q.createElement(fd,{message:e,userDisplayName:r==null?void 0:r.displayName,isCreator:!1,avatarUrl:n,containerRef:t,action:o})},fw=Kp;var Jp=({message:e,containerRef:t,action:o})=>{let r=j(e.creatorId),n=_({fileId:r==null?void 0:r.avatarFileId,imageSize:"small"});return q.createElement(fd,{message:e,userDisplayName:r==null?void 0:r.displayName,isCreator:!0,avatarUrl:n,containerRef:t,action:o})},gw=Jp;var Pi={};var yY=Xr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,hY=i.svg`
  animation: ${yY} 2s linear infinite;
`,CY=e=>q.createElement(hY,d({width:"25",height:"25",xmlns:"http://www.w3.org/2000/svg","aria-label":"Loading...",viewBox:"0 0 100 100",version:"1.1"},e),q.createElement("defs",{id:"defs3821"}),q.createElement("rect",{fill:"#555555",height:"6",opacity:"0",rx:"3",ry:"3",transform:"rotate(-90 50 50)",width:"25",x:"72",y:"47",id:"rect3793"}),q.createElement("rect",{fill:"#555555",height:"6",opacity:"0.08333333333333333",rx:"3",ry:"3",transform:"rotate(-60 50 50)",width:"25",x:"72",y:"47",id:"rect3795"}),q.createElement("rect",{fill:"#555555",height:"6",opacity:"0.16666666666666666",rx:"3",ry:"3",transform:"rotate(-30 50 50)",width:"25",x:"72",y:"47",id:"rect3797"}),q.createElement("rect",{fill:"#555555",height:"6",opacity:"0.25",rx:"3",ry:"3",transform:"rotate(0 50 50)",width:"25",x:"72",y:"47",id:"rect3799"}),q.createElement("rect",{fill:"#555555",height:"6",opacity:"0.3333333333333333",rx:"3",ry:"3",transform:"rotate(30 50 50)",width:"25",x:"72",y:"47",id:"rect3801"}),q.createElement("rect",{fill:"#555555",height:"6",opacity:"0.4166666666666667",rx:"3",ry:"3",transform:"rotate(60 50 50)",width:"25",x:"72",y:"47",id:"rect3803"}),q.createElement("rect",{fill:"#555555",height:"6",opacity:"0.5",rx:"3",ry:"3",transform:"rotate(90 50 50)",width:"25",x:"72",y:"47",id:"rect3805"}),q.createElement("rect",{fill:"#555555",height:"6",opacity:"0.5833333333333334",rx:"3",ry:"3",transform:"rotate(120 50 50)",width:"25",x:"72",y:"47",id:"rect3807"}),q.createElement("rect",{fill:"#555555",height:"6",opacity:"0.6666666666666666",rx:"3",ry:"3",transform:"rotate(150 50 50)",width:"25",x:"72",y:"47",id:"rect3809"}),q.createElement("rect",{fill:"#555555",height:"6",opacity:"0.75",rx:"3",ry:"3",transform:"rotate(180 50 50)",width:"25",x:"72",y:"47",id:"rect3811"}),q.createElement("rect",{fill:"#555555",height:"6",opacity:"0.8333333333333334",rx:"3",ry:"3",transform:"rotate(210 50 50)",width:"25",x:"72",y:"47",id:"rect3813"}),q.createElement("rect",{fill:"#555555",height:"6",opacity:"0.9166666666666666",rx:"3",ry:"3",transform:"rotate(240 50 50)",width:"25",x:"72",y:"47",id:"rect3815"})),yw=CY;var gd=e=>{navigator.clipboard.writeText(e).then(()=>{v7.show({content:q.createElement(FormattedMessage,{id:"livechat.notification.copy.message"})});});};var Xp=e=>MessageRepository.deleteMessage(e);var MY=e=>q.createElement("svg",d({width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),q.createElement("path",{d:"M18.8672 1.63086C19.1797 1.31836 19.6875 1.55273 19.6875 1.94336V7.5293C19.6875 7.80273 19.4531 7.99805 19.2188 7.99805H13.5938C13.2031 7.99805 12.9688 7.5293 13.2812 7.2168L15.3906 5.10742C14.0234 3.70117 12.1094 2.8418 10 2.8418C5.74219 2.8418 2.34375 6.2793 2.34375 10.498C2.34375 14.7559 5.74219 18.1543 10 18.1543C11.9531 18.1543 13.7109 17.4512 15.0781 16.2402C15.2734 16.084 15.5469 16.084 15.7031 16.2402L16.4844 17.0215C16.6797 17.2168 16.6797 17.5293 16.4844 17.7246C14.7656 19.248 12.4609 20.1855 10 20.1855C4.64844 20.1855 0.3125 15.8887 0.3125 10.5371C0.273438 5.18555 4.64844 0.810547 10 0.810547C12.6562 0.810547 15.0781 1.9043 16.8359 3.66211L18.8672 1.63086Z",fill:"#6E7487"})),Cw=MY;var yd=({channel:e,replyMessage:t})=>{let o=H(),r=q.useRef(null),{formatMessage:n}=useIntl(),[s,a]=q.useState(void 0),{messages:l,hasMore:m,loadMore:c,isLoading:u,error:f}=b1({subChannelId:e.channelId,sortBy:"segmentDesc",limit:10,includeDeleted:!0}),p=l,g=y=>{c7({title:n({id:"livechat.modal.delete.message.title"}),content:n({id:"livechat.modal.delete.message.content"}),cancelText:n({id:"cancel"}),okText:n({id:"delete"}),onOk:()=>Xp(y),theme:"dark"});};return q.useEffect(()=>{let y=()=>{r.current&&a(r.current.clientHeight);},v=new ResizeObserver(y);return r.current&&v.observe(r.current),()=>{r.current&&v.unobserve(r.current);}},[]),f?q.createElement("div",{className:Pi.customStatusContainer,ref:r},q.createElement("div",{className:Pi.iconContainer},q.createElement(Cw,null)),q.createElement(he.Caption,null,q.createElement(FormattedMessage,{id:"chat.loading.error"}))):q.createElement("div",{className:Pi.infiniteScrollContainer,ref:r},r.current&&q.createElement(gz,{className:Pi.infiniteScrollInner,scrollableTarget:r.current,scrollThreshold:.7,hasMore:m,next:c,loader:u?q.createElement("div",{className:Pi.loadingIndicatorWrap},q.createElement(yw,{className:Pi.loadingIndicator})):null,inverse:!0,dataLength:p.length,height:r.current.clientHeight},p.map((y,v)=>y.creatorId===o.currentUserId?q.createElement(gw,{message:y,action:{onReply:()=>t(y),onDelete:()=>g(y.messageId),onCopy:()=>{var h,C;return ((h=y.data)==null?void 0:h.text)&&gd((C=y.data)==null?void 0:C.text)}},key:y.messageId,containerRef:r}):q.createElement(fw,{message:y,action:{onReply:()=>t(y),onDelete:()=>g(y.messageId),onCopy:()=>{var h,C;return ((h=y.data)==null?void 0:h.text)&&gd((C=y.data)==null?void 0:C.text)}},key:y.messageId,containerRef:r}))))};var PY=e=>q.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},e),q.createElement("path",{d:"M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"})),xw=PY;var Rp={};var kY=()=>q.createElement("div",{className:Rp.homeIndicatorContainer},q.createElement("div",{className:Rp.homeIndicator})),hd=kY;var os={};var Ti={};var FY=({id:e,entry:t,onMouseEnter:o,focused:r,isLastItem:n,loadMore:s,targetRef:a,containerRef:l})=>{let m=j(e),c=_({fileId:m==null?void 0:m.avatarFileId,imageSize:"small"});return useEffect(()=>{a&&(t!=null&&t.isIntersecting)&&(s==null||s());},[a,t==null?void 0:t.isIntersecting,s]),q.createElement("div",{ref:n?a:null,"data-qa-anchor":"social-mention-item",className:Ln(Ti.mentionItem,(m==null?void 0:m.isGlobalBanned)&&"isBanned"),onMouseEnter:u=>o(u,m==null?void 0:m.isGlobalBanned)},q.createElement(On,{size:Eo.SMALL,avatarUrl:c,defaultImage:ce}),q.createElement("div",{className:Ti.userDisplayName},q.createElement(he.Body,null,m==null?void 0:m.displayName)),q.createElement("div",{style:{marginLeft:"0.5rem"}},m!=null&&m.isGlobalBanned?q.createElement($t,null):null))},DY=({id:e,onMouseEnter:t,focused:o,isLastItem:r,targetRef:n,containerRef:s})=>q.createElement("div",{ref:r?n:null,"data-qa-anchor":"custom-mention-item",className:Ln(Ti.mentionItem,Ti.mentionAll),onMouseEnter:a=>t(a,!1)},q.createElement("div",null,q.createElement(Cl,{width:32,height:32}),q.createElement("div",{className:Ti.userDisplayName},q.createElement(he.Body,null,q.createElement(FormattedMessage,{id:"livechat.mention.all"})))),q.createElement("div",{className:Ti.mentionAllDescription},q.createElement(he.Caption,null,q.createElement(FormattedMessage,{id:"livechat.mention.all.description"})))),zY=({id:e,focused:t,isLastItem:o,loadMore:r,rootEl:n,containerRef:s})=>{var c;let a=useRef(null),l=Qi(a==null?void 0:a.current,{root:(c=n==null?void 0:n.current)==null?void 0:c.childNodes[0]}),m=useCallback((u,f)=>{f&&(u.target.parentNode.style.cursor="not-allowed",u.target.parentNode.style["pointer-events"]="none");},[]);return e==="@all"?q.createElement(DY,{id:e,onMouseEnter:m,focused:t,isLastItem:o,targetRef:a,containerRef:s}):q.createElement(FY,{id:e,entry:l,onMouseEnter:m,focused:t,isLastItem:o,loadMore:r,targetRef:a,containerRef:s})},ww=zY;var Un={};var $Y=forwardRef(({"data-qa-anchor":e="",id:t,name:o="",value:r="",placeholder:n="",multiline:s=!1,disabled:a=!1,invalid:l=!1,rows:m=1,maxRows:c=3,prepend:u,append:f,onChange:p,onClear:g,onClick:y,onKeyPress:v,className:h,mentionAllowed:C=!1,queryMentionees:x,loadMoreMentionees:M,isModerator:S,suggestionRef:b},P)=>{let[k,A]=useState([]),L=useRef(null),O=useRef(null),Y=(F,[,],ee,se)=>{var U;let ie=ee.split(" ").pop(),D=((U=ie==null?void 0:ie[0])==null?void 0:U.match(/^@/g))||!1;p({text:F.target.value,plainText:ee,lastMentionText:D?ie:void 0,mentions:se});},B=F=>{F.key==="Backspace"&&(r==null?void 0:r.length)===0&&(g==null||g());},E=Ln(h,{disabled:a,invalid:l}),G={id:t,name:o,value:r,placeholder:n,disabled:a,className:E,"data-qa-anchor":e};return q.createElement("div",{ref:O,className:Ln(Un.inputTextContainer,E,it.typography,it["typography-body"])},u,q.createElement("div",{ref:L,className:Un.mentionContainer,id:"mention-input"}),s&&C&&q.createElement(MentionsInput,T(d({allowSuggestionsAboveCursor:!0,inputRef:P,rows:m},G),{className:"live-chat-mention-input",classNames:Un,onKeyDown:F=>B(F),onChange:Y,onClick:y,suggestionsPortalHost:(b==null?void 0:b.current)||L.current,onKeyPress:F=>v==null?void 0:v(F)}),q.createElement(Mention,{trigger:"@",data:(F,ee)=>{if(!x)return ee([]);x(F).then(se=>{if(!S){ee(se);return}let ie={id:"@all",display:"All",isLastItem:!1},D=ie.display.toLowerCase().includes(F.trim().toLowerCase())?[ie]:[];ee(D.concat(se));});},renderSuggestion:({id:F},ee,se,ie,D)=>{var U;return q.createElement(ww,{focused:D,id:typeof F=="number"?`${F}`:F,isLastItem:F===((U=k[k.length-1])==null?void 0:U.id),containerRef:O,rootEl:L,loadMore:()=>M==null?void 0:M(ee)})},displayTransform:(F,ee)=>`@${ee}`,appendSpaceOnAdd:!0,onAdd:()=>{}})),s?!C&&q.createElement(xE,T(d({ref:P,minRows:m,maxRows:c},G),{className:Ln(Un.baseInputStyle,G.className),onChange:F=>p==null?void 0:p({text:F.target.value,plainText:F.target.value,lastMentionText:"",mentions:[]}),onKeyDown:F=>B(F),onClick:y})):q.createElement("input",T(d({type:"text",ref:P},G),{className:Ln(Un.baseInputStyle,G.className),onChange:F=>p==null?void 0:p({text:F.target.value,plainText:F.target.value,lastMentionText:"",mentions:[]}),onKeyDown:F=>B(F),onClick:y})),f)}),Pw=$Y;var ZY=forwardRef((e,t)=>q.createElement(Pw,T(d({},e),{ref:t}))),Tw=ZY;var YY=e=>Fe({fetcher:CommunityRepository.getCommunity,params:e,shouldCall:()=>!!e}),kw=YY;var tQ=({targetId:e,targetType:t,remoteText:o,remoteMarkup:r})=>{let n=t==="community",s=t==="channel",a=kw(e),[l,m]=useState(o!=null?o:""),[c,u]=useState(r!=null?r:o),[f,p]=useState([]);useEffect(()=>{m(o||""),u(r!=null?r:"");},[o,r]);let g=({text:M,plainText:S,mentions:b})=>{m(S),u(M),p(b);},y=()=>{m(""),u(""),p([]);},v=()=>{m(o||""),u(r),p([]);},h=useCallback(M=>w(void 0,null,function*(){let S,b=M||"",P;return (b.match(/^@$/)||b==="")&&(b=void 0),n&&!(a!=null&&a.isPublic)&&e!=null?S=yield new Promise(k=>{P==null||P(),P=CommunityRepository.Membership.getMembers({communityId:e,search:b,limit:20},A=>{A.loading||k(A.data.map(({user:L})=>L).filter(ge));});}):s?S=yield new Promise(k=>{P==null||P(),P=ChannelRepository.Membership.getMembers({channelId:e,search:b,limit:20},A=>{A.loading||k(A.data.map(({user:L})=>L).filter(ge));});}):S=yield new Promise(k=>{P==null||P(),P=UserRepository.getUsers({displayName:b,limit:20,sortBy:"displayName"},A=>{A.loading||k(A.data);});}),Ql(S)}),[n,s,a==null?void 0:a.isPublic,e]),{mentionees:C,metadata:x}=useMemo(()=>{let{mentionees:M,metadata:S}=sn(f);return {mentionees:M,metadata:S}},[f]);return {text:l,markup:c,mentions:f,mentionees:C,metadata:x,onChange:g,clearAll:y,resetState:v,queryMentionees:h}},Ew=tQ;var t3=({channel:e,suggestionRef:t,composeAction:{replyMessage:o,mentionMessage:r,clearReplyMessage:n,clearMention:s}})=>{let[a,l]=useState({}),{getConfig:m}=ve(),c=m("live_chat/message_composer/*"),[u,f]=useState(""),p=useRef(null),{queryMentionees:g}=Ew({targetId:e.channelId,targetType:"channel"}),{isModerator:y}=ud(e.channelId),{formatMessage:v}=useIntl(),h=C=>w(void 0,null,function*(){if(!e||u.trim().length===0)return;f("");let x=Object.values(a).filter(({display:P})=>C.includes(P))||[],M=[],S=x.filter(({id:P})=>P!=="@all").map(({id:P})=>P),b=x.find(({id:P})=>P==="@all");S.length>0&&M.push({type:"user",userIds:S}),b&&M.push({type:"channel"});try{yield MessageRepository.createMessage({tags:[],subChannelId:e.channelId,data:{text:C},dataType:"text",mentionees:M,metadata:{mentioned:x.map(({id:P,index:k,display:A})=>P==="@all"?{index:k,userId:"",type:"channel",length:A.length-1}:{index:k,userId:P,type:"user",length:A.length-1})},parentId:(o==null?void 0:o.messageId)||void 0});}catch(P){me({title:v({id:"post.renderingError.title"}),content:v({id:"general.error.tryAgainLater"}),okText:v({id:"general.action.ok"})}),f(C);return}l({}),s&&s(),n&&n();});return useEffect(()=>{var C;(C=p.current)==null||C.focus();},[]),useEffect(()=>{r&&UserRepository.getUser(r.creatorId,({loading:C,data:x})=>{if(C)return;let M={id:x.userId,display:x.displayName,childIndex:0,index:u.length,plainTextIndex:u.length};l(T(d({},a),{[M.id]:M})),f(`${u}@${M.display}`);});},[r]),q.createElement("div",{className:os.composeBarContainer},q.createElement("div",{className:os.composeBar},q.createElement("div",{className:os.textInputContainer},q.createElement(Tw,{ref:p,suggestionRef:t,"data-qa-anchor":"live-chat-compose-bar",multiline:!0,placeholder:(c==null?void 0:c.placeholder_text)||v({id:"livechat.composebar.placeholder"}),mentionAllowed:!0,isModerator:y,onChange:C=>{f(C.plainText);let x=C.mentions;if(x.length>0){let M=x.reduce((S,b)=>T(d({},S),{[b.id]:b}),a);l(M);}},value:u,queryMentionees:g,onKeyPress:C=>{u.trim().length<200||(C.preventDefault(),u.trim().length>0&&h(u));}})),q.createElement("div",{className:os.sendButtonContainer},q.createElement(xw,{className:os.sendButton,onClick:()=>h(u)}))),q.createElement(hd,null))},Aw=t3;var sQ=e=>Fe({fetcher:ChannelRepository.getChannel,params:e,shouldCall:()=>!!e}),Bw=sQ;var Mo={};var cQ=({children:e})=>q.createElement(q.Fragment,null,q.createElement($V.Content,null,e),q.createElement("div",{className:Mo.composeBarContainer},q.createElement("div",{className:Mo.composeBar},q.createElement("div",{className:Mo.textInputContainer},q.createElement("div",{className:Mo.composeBarLoading},q.createElement(Q2,{width:20,height:20}),q.createElement("span",null,q.createElement(he.Body,null,q.createElement(FormattedMessage,{id:"loading.chat"})))))),q.createElement(hd,null))),vd=cQ;var uQ=({replyMessage:e,onDismiss:t})=>{var r,n;let o=j(e.creatorId);return o?q.createElement("div",{className:Mo.replyPlaceholderContainer},q.createElement("div",{className:Mo.replyAvatar},q.createElement(On,{avatarUrl:(r=o.avatar)==null?void 0:r.fileUrl,size:yr.SMALL,defaultImage:ce})),q.createElement("div",{className:Mo.replyProfile},q.createElement("div",{className:Mo.replyProfileName},q.createElement(FormattedMessage,{id:"CommentComposeBar.replayToUser",values:{displayName:o.displayName}})),q.createElement("div",{className:Mo.replyProfileMessage},(n=e.data)==null?void 0:n.text)),q.createElement("div",{className:Mo.replyDismiss},q.createElement(Qe,{onClick:t,width:"20",height:"20"}))):null},Fw=uQ;var gQ=({channel:e})=>{let t=dd(),[o,r]=useState(void 0),[n,s]=useState(void 0),a=useRef(null);return t?q.createElement(q.Fragment,null,q.createElement(yd,{channel:e,replyMessage:r}),t&&q.createElement(q.Fragment,null,q.createElement("div",{ref:a,className:Un.mentionContainer}),o&&q.createElement(Fw,{replyMessage:o,onDismiss:()=>r(void 0)}),q.createElement(Aw,{channel:e,suggestionRef:a,composeAction:{replyMessage:o,mentionMessage:n,clearReplyMessage:()=>r(void 0),clearMention:()=>s(void 0)}}))):q.createElement(vd,null)},zw=gQ;var yQ=({channel:e})=>e?q.createElement(zw,{channel:e}):q.createElement(vd,null),_w=yQ;var o3={};var Uw=({channelId:e})=>{let t=Bw(e),o=useRef(null);return q.createElement("div",{className:o3.amtiyLivechatPage,ref:o},q.createElement("div",{className:o3.messageListHeaderWrap},q.createElement(RI,{channel:t})),q.createElement(_w,{channel:t}))};

export { J as AmityAvatar, Ja as AmityCommentTrayComponent, wi as AmityDraftStoryPage, M0 as AmityExpandableText, Wp as AmityLiveChatHeader, t3 as AmityLiveChatMessageComposeBar, yd as AmityLiveChatMessageList, Kp as AmityLiveChatMessageReceiverView, Jp as AmityLiveChatMessageSenderView, Uw as AmityLiveChatPage, js as AmityPostContainer, E0 as AmityPostEngagementBar, Y2 as AmityStoryTabComponent, Zs as AmityUIKitManager, gW as AmityUiKitChat, hn as AmityUiKitFeed, bD as AmityUiKitProvider, uq as AmityUiKitSocial, v1 as AmityViewStoryPage, VI as amityAddChatMembers, $I as amityRemoveChatMembers, V as useAmityNavigation, Li as useAmitySDK, j as useAmityUser };
