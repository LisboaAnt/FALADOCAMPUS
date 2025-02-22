(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},818:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>f,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),r(169),r(2037),r(9915),r(5866);var a=r(3191),s=r(8716),n=r(7922),i=r.n(n),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,169)),"C:\\Users\\anton\\Documents\\GitHub\\FALADOCAMPUS\\app\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,2037)),"C:\\Users\\anton\\Documents\\GitHub\\FALADOCAMPUS\\app\\layout.jsx"],template:[()=>Promise.resolve().then(r.bind(r,9915)),"C:\\Users\\anton\\Documents\\GitHub\\FALADOCAMPUS\\app\\template.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\anton\\Documents\\GitHub\\FALADOCAMPUS\\app\\page.jsx"],u="/page",f={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5873:(e,t,r)=>{Promise.resolve().then(r.bind(r,9941)),Promise.resolve().then(r.bind(r,5675))},6113:(e,t,r)=>{Promise.resolve().then(r.bind(r,7484))},2941:(e,t,r)=>{Promise.resolve().then(r.bind(r,7210))},6840:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},7484:(e,t,r)=>{"use strict";let a;r.r(t),r.d(t,{default:()=>s8});var s,n,i,o,l,d,c,u=r(326),f=r(7577);let m=()=>{let e=(0,f.useRef)(null),[t,r]=(0,f.useState)("light");return(0,f.useEffect)(()=>{},[]),(0,f.useEffect)(()=>{},[t]),u.jsx("canvas",{ref:e,style:{position:"fixed",top:0,left:0,zIndex:-1}})};var p=r(4214),h=r(8671),y=r(6084);let g=(0,h.j)("inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-[55px] px-6 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),v=f.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...s},n)=>{let i=a?p.g7:"button";return u.jsx(i,{className:(0,y.cn)(g({variant:t,size:r,className:e})),ref:n,...s})});v.displayName="Button";/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let x=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=(...e)=>e.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let w=(0,f.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:s="",children:n,iconNode:i,...o},l)=>(0,f.createElement)("svg",{ref:l,..._,width:t,height:t,stroke:e,strokeWidth:a?24*Number(r)/Number(t):r,className:b("lucide",s),...o},[...i.map(([e,t])=>(0,f.createElement)(e,t)),...Array.isArray(n)?n:[n]])),k=(e,t)=>{let r=(0,f.forwardRef)(({className:r,...a},s)=>(0,f.createElement)(w,{ref:s,iconNode:t,className:b(`lucide-${x(e)}`,r),...a}));return r.displayName=`${e}`,r},j=k("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),C=k("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),S=k("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);var N=e=>"checkbox"===e.type,A=e=>e instanceof Date,O=e=>null==e;let E=e=>"object"==typeof e;var T=e=>!O(e)&&!Array.isArray(e)&&E(e)&&!A(e),P=e=>T(e)&&e.target?N(e.target)?e.target.checked:e.target.value:e,M=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Z=(e,t)=>e.has(M(t)),D=e=>{let t=e.constructor&&e.constructor.prototype;return T(t)&&t.hasOwnProperty("isPrototypeOf")},V="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function $(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(V&&(e instanceof Blob||e instanceof FileList))&&(r||T(e))))return e;else if(t=r?[]:{},r||D(e))for(let r in e)e.hasOwnProperty(r)&&(t[r]=$(e[r]));else t=e;return t}var R=e=>Array.isArray(e)?e.filter(Boolean):[],F=e=>void 0===e,I=(e,t,r)=>{if(!t||!T(e))return r;let a=R(t.split(/[,[\].]+?/)).reduce((e,t)=>O(e)?e:e[t],e);return F(a)||a===e?F(e[t])?r:e[t]:a},L=e=>"boolean"==typeof e,z=e=>/^\w*$/.test(e),U=e=>R(e.replace(/["|']|\]/g,"").split(/\.|\[/)),q=(e,t,r)=>{let a=-1,s=z(t)?[t]:U(t),n=s.length,i=n-1;for(;++a<n;){let t=s[a],n=r;if(a!==i){let r=e[t];n=T(r)||Array.isArray(r)?r:isNaN(+s[a+1])?{}:[]}if("__proto__"===t)return;e[t]=n,e=e[t]}return e};let B={BLUR:"blur",FOCUS_OUT:"focusout"},H={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},W={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};f.createContext(null);var Y=(e,t,r,a=!0)=>{let s={defaultValues:t._defaultValues};for(let n in e)Object.defineProperty(s,n,{get:()=>(t._proxyFormState[n]!==H.all&&(t._proxyFormState[n]=!a||H.all),r&&(r[n]=!0),e[n])});return s},G=e=>T(e)&&!Object.keys(e).length,X=(e,t,r,a)=>{r(e);let{name:s,...n}=e;return G(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find(e=>t[e]===(!a||H.all))},K=e=>Array.isArray(e)?e:[e],J=e=>"string"==typeof e,Q=(e,t,r,a,s)=>J(e)?(a&&t.watch.add(e),I(r,e,s)):Array.isArray(e)?e.map(e=>(a&&t.watch.add(e),I(r,e))):(a&&(t.watchAll=!0),r),ee=(e,t,r,a,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:s||!0}}:{},et=e=>({isOnSubmit:!e||e===H.onSubmit,isOnBlur:e===H.onBlur,isOnChange:e===H.onChange,isOnAll:e===H.all,isOnTouch:e===H.onTouched}),er=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));let ea=(e,t,r,a)=>{for(let s of r||Object.keys(e)){let r=I(e,s);if(r){let{_f:e,...n}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],s)&&!a||e.ref&&t(e.ref,e.name)&&!a)break;ea(n,t)}else T(n)&&ea(n,t)}}};var es=(e,t,r)=>{let a=K(I(e,r));return q(a,"root",t[r]),q(e,r,a),e},en=e=>"file"===e.type,ei=e=>"function"==typeof e,eo=e=>{if(!V)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},el=e=>J(e),ed=e=>"radio"===e.type,ec=e=>e instanceof RegExp;let eu={value:!1,isValid:!1},ef={value:!0,isValid:!0};var em=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!F(e[0].attributes.value)?F(e[0].value)||""===e[0].value?ef:{value:e[0].value,isValid:!0}:ef:eu}return eu};let ep={isValid:!1,value:null};var eh=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,ep):ep;function ey(e,t,r="validate"){if(el(e)||Array.isArray(e)&&e.every(el)||L(e)&&!e)return{type:r,message:el(e)?e:"",ref:t}}var eg=e=>T(e)&&!ec(e)?e:{value:e,message:""},ev=async(e,t,r,a,s)=>{let{ref:n,refs:i,required:o,maxLength:l,minLength:d,min:c,max:u,pattern:f,validate:m,name:p,valueAsNumber:h,mount:y,disabled:g}=e._f,v=I(t,p);if(!y||g)return{};let x=i?i[0]:n,b=e=>{a&&x.reportValidity&&(x.setCustomValidity(L(e)?"":e||""),x.reportValidity())},_={},w=ed(n),k=N(n),j=(h||en(n))&&F(n.value)&&F(v)||eo(n)&&""===n.value||""===v||Array.isArray(v)&&!v.length,C=ee.bind(null,p,r,_),S=(e,t,r,a=W.maxLength,s=W.minLength)=>{let i=e?t:r;_[p]={type:e?a:s,message:i,ref:n,...C(e?a:s,i)}};if(s?!Array.isArray(v)||!v.length:o&&(!(w||k)&&(j||O(v))||L(v)&&!v||k&&!em(i).isValid||w&&!eh(i).isValid)){let{value:e,message:t}=el(o)?{value:!!o,message:o}:eg(o);if(e&&(_[p]={type:W.required,message:t,ref:x,...C(W.required,t)},!r))return b(t),_}if(!j&&(!O(c)||!O(u))){let e,t;let a=eg(u),s=eg(c);if(O(v)||isNaN(v)){let r=n.valueAsDate||new Date(v),i=e=>new Date(new Date().toDateString()+" "+e),o="time"==n.type,l="week"==n.type;J(a.value)&&v&&(e=o?i(v)>i(a.value):l?v>a.value:r>new Date(a.value)),J(s.value)&&v&&(t=o?i(v)<i(s.value):l?v<s.value:r<new Date(s.value))}else{let r=n.valueAsNumber||(v?+v:v);O(a.value)||(e=r>a.value),O(s.value)||(t=r<s.value)}if((e||t)&&(S(!!e,a.message,s.message,W.max,W.min),!r))return b(_[p].message),_}if((l||d)&&!j&&(J(v)||s&&Array.isArray(v))){let e=eg(l),t=eg(d),a=!O(e.value)&&v.length>+e.value,s=!O(t.value)&&v.length<+t.value;if((a||s)&&(S(a,e.message,t.message),!r))return b(_[p].message),_}if(f&&!j&&J(v)){let{value:e,message:t}=eg(f);if(ec(e)&&!v.match(e)&&(_[p]={type:W.pattern,message:t,ref:n,...C(W.pattern,t)},!r))return b(t),_}if(m){if(ei(m)){let e=ey(await m(v,t),x);if(e&&(_[p]={...e,...C(W.validate,e.message)},!r))return b(e.message),_}else if(T(m)){let e={};for(let a in m){if(!G(e)&&!r)break;let s=ey(await m[a](v,t),x,a);s&&(e={...s,...C(a,s.message)},b(s.message),r&&(_[p]=e))}if(!G(e)&&(_[p]={ref:x,...e},!r))return _}}return b(!0),_};function ex(e,t){let r=Array.isArray(t)?t:z(t)?[t]:U(t),a=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,a=0;for(;a<r;)e=F(e)?a++:e[t[a++]];return e}(e,r),s=r.length-1,n=r[s];return a&&delete a[n],0!==s&&(T(a)&&G(a)||Array.isArray(a)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!F(e[t]))return!1;return!0}(a))&&ex(e,r.slice(0,-1)),e}var eb=()=>{let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},e_=e=>O(e)||!E(e);function ew(e,t){if(e_(e)||e_(t))return e===t;if(A(e)&&A(t))return e.getTime()===t.getTime();let r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let s of r){let r=e[s];if(!a.includes(s))return!1;if("ref"!==s){let e=t[s];if(A(r)&&A(e)||T(r)&&T(e)||Array.isArray(r)&&Array.isArray(e)?!ew(r,e):r!==e)return!1}}return!0}var ek=e=>"select-multiple"===e.type,ej=e=>ed(e)||N(e),eC=e=>eo(e)&&e.isConnected,eS=e=>{for(let t in e)if(ei(e[t]))return!0;return!1};function eN(e,t={}){let r=Array.isArray(e);if(T(e)||r)for(let r in e)Array.isArray(e[r])||T(e[r])&&!eS(e[r])?(t[r]=Array.isArray(e[r])?[]:{},eN(e[r],t[r])):O(e[r])||(t[r]=!0);return t}var eA=(e,t)=>(function e(t,r,a){let s=Array.isArray(t);if(T(t)||s)for(let s in t)Array.isArray(t[s])||T(t[s])&&!eS(t[s])?F(r)||e_(a[s])?a[s]=Array.isArray(t[s])?eN(t[s],[]):{...eN(t[s])}:e(t[s],O(r)?{}:r[s],a[s]):a[s]=!ew(t[s],r[s]);return a})(e,t,eN(t)),eO=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>F(e)?e:t?""===e?NaN:e?+e:e:r&&J(e)?new Date(e):a?a(e):e;function eE(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:en(t)?t.files:ed(t)?eh(e.refs).value:ek(t)?[...t.selectedOptions].map(({value:e})=>e):N(t)?em(e.refs).value:eO(F(t.value)?e.ref.value:t.value,e)}var eT=(e,t,r,a)=>{let s={};for(let r of e){let e=I(t,r);e&&q(s,r,e._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:a}},eP=e=>F(e)?e:ec(e)?e.source:T(e)?ec(e.value)?e.value.source:e.value:e,eM=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function eZ(e,t,r){let a=I(e,r);if(a||z(r))return{error:a,name:r};let s=r.split(".");for(;s.length;){let a=s.join("."),n=I(t,a),i=I(e,a);if(n&&!Array.isArray(n)&&r!==a)break;if(i&&i.type)return{name:a,error:i};s.pop()}return{name:r}}var eD=(e,t,r,a,s)=>!s.isOnAll&&(!r&&s.isOnTouch?!(t||e):(r?a.isOnBlur:s.isOnBlur)?!e:(r?!a.isOnChange:!s.isOnChange)||e),eV=(e,t)=>!R(I(e,t)).length&&ex(e,t);let e$={mode:H.onSubmit,reValidateMode:H.onChange,shouldFocusError:!0};function eR(e={}){let t=f.useRef(),r=f.useRef(),[a,s]=f.useState({isDirty:!1,isValidating:!1,isLoading:ei(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:ei(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={}){let t,r={...e$,...e},a={submitCount:0,isDirty:!1,isLoading:ei(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},s={},n=(T(r.defaultValues)||T(r.values))&&$(r.defaultValues||r.values)||{},i=r.shouldUnregister?{}:$(n),o={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},d=0,c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},u={values:eb(),array:eb(),state:eb()},f=et(r.mode),m=et(r.reValidateMode),p=r.criteriaMode===H.all,h=e=>t=>{clearTimeout(d),d=setTimeout(e,t)},y=async e=>{if(c.isValid||e){let e=r.resolver?G((await w()).errors):await j(s,!0);e!==a.isValid&&u.state.next({isValid:e})}},g=(e,t)=>{(c.isValidating||c.validatingFields)&&((e||Array.from(l.mount)).forEach(e=>{e&&(t?q(a.validatingFields,e,t):ex(a.validatingFields,e))}),u.state.next({validatingFields:a.validatingFields,isValidating:!G(a.validatingFields)}))},v=(e,t)=>{q(a.errors,e,t),u.state.next({errors:a.errors})},x=(e,t,r,a)=>{let l=I(s,e);if(l){let s=I(i,e,F(r)?I(n,e):r);F(s)||a&&a.defaultChecked||t?q(i,e,t?s:eE(l._f)):E(e,s),o.mount&&y()}},b=(e,t,r,i,o)=>{let l=!1,d=!1,f={name:e},m=!!(I(s,e)&&I(s,e)._f&&I(s,e)._f.disabled);if(!r||i){c.isDirty&&(d=a.isDirty,a.isDirty=f.isDirty=C(),l=d!==f.isDirty);let r=m||ew(I(n,e),t);d=!!(!m&&I(a.dirtyFields,e)),r||m?ex(a.dirtyFields,e):q(a.dirtyFields,e,!0),f.dirtyFields=a.dirtyFields,l=l||c.dirtyFields&&!r!==d}if(r){let t=I(a.touchedFields,e);t||(q(a.touchedFields,e,r),f.touchedFields=a.touchedFields,l=l||c.touchedFields&&t!==r)}return l&&o&&u.state.next(f),l?f:{}},_=(r,s,n,i)=>{let o=I(a.errors,r),l=c.isValid&&L(s)&&a.isValid!==s;if(e.delayError&&n?(t=h(()=>v(r,n)))(e.delayError):(clearTimeout(d),t=null,n?q(a.errors,r,n):ex(a.errors,r)),(n?!ew(o,n):o)||!G(i)||l){let e={...i,...l&&L(s)?{isValid:s}:{},errors:a.errors,name:r};a={...a,...e},u.state.next(e)}},w=async e=>{g(e,!0);let t=await r.resolver(i,r.context,eT(e||l.mount,s,r.criteriaMode,r.shouldUseNativeValidation));return g(e),t},k=async e=>{let{errors:t}=await w(e);if(e)for(let r of e){let e=I(t,r);e?q(a.errors,r,e):ex(a.errors,r)}else a.errors=t;return t},j=async(e,t,s={valid:!0})=>{for(let n in e){let o=e[n];if(o){let{_f:e,...d}=o;if(e){let d=l.array.has(e.name);g([n],!0);let c=await ev(o,i,p,r.shouldUseNativeValidation&&!t,d);if(g([n]),c[e.name]&&(s.valid=!1,t))break;t||(I(c,e.name)?d?es(a.errors,c,e.name):q(a.errors,e.name,c[e.name]):ex(a.errors,e.name))}G(d)||await j(d,t,s)}}return s.valid},C=(e,t)=>(e&&t&&q(i,e,t),!ew(Y(),n)),S=(e,t,r)=>Q(e,l,{...o.mount?i:F(t)?n:J(e)?{[e]:t}:t},r,t),E=(e,t,r={})=>{let a=I(s,e),n=t;if(a){let r=a._f;r&&(r.disabled||q(i,e,eO(t,r)),n=eo(r.ref)&&O(t)?"":t,ek(r.ref)?[...r.ref.options].forEach(e=>e.selected=n.includes(e.value)):r.refs?N(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(n)?!!n.find(t=>t===e.value):n===e.value)):r.refs[0]&&(r.refs[0].checked=!!n):r.refs.forEach(e=>e.checked=e.value===n):en(r.ref)?r.ref.value="":(r.ref.value=n,r.ref.type||u.values.next({name:e,values:{...i}})))}(r.shouldDirty||r.shouldTouch)&&b(e,n,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&W(e)},M=(e,t,r)=>{for(let a in t){let n=t[a],i=`${e}.${a}`,o=I(s,i);!l.array.has(e)&&e_(n)&&(!o||o._f)||A(n)?E(i,n,r):M(i,n,r)}},D=(e,t,r={})=>{let d=I(s,e),f=l.array.has(e),m=$(t);q(i,e,m),f?(u.array.next({name:e,values:{...i}}),(c.isDirty||c.dirtyFields)&&r.shouldDirty&&u.state.next({name:e,dirtyFields:eA(n,i),isDirty:C(e,m)})):!d||d._f||O(m)?E(e,m,r):M(e,m,r),er(e,l)&&u.state.next({...a}),u.values.next({name:o.mount?e:void 0,values:{...i}})},z=async e=>{o.mount=!0;let n=e.target,d=n.name,h=!0,v=I(s,d),x=e=>{h=Number.isNaN(e)||e===I(i,d,e)};if(v){let o,k;let C=n.type?eE(v._f):P(e),S=e.type===B.BLUR||e.type===B.FOCUS_OUT,N=!eM(v._f)&&!r.resolver&&!I(a.errors,d)&&!v._f.deps||eD(S,I(a.touchedFields,d),a.isSubmitted,m,f),A=er(d,l,S);q(i,d,C),S?(v._f.onBlur&&v._f.onBlur(e),t&&t(0)):v._f.onChange&&v._f.onChange(e);let O=b(d,C,S,!1),E=!G(O)||A;if(S||u.values.next({name:d,type:e.type,values:{...i}}),N)return c.isValid&&y(),E&&u.state.next({name:d,...A?{}:O});if(!S&&A&&u.state.next({...a}),r.resolver){let{errors:e}=await w([d]);if(x(C),h){let t=eZ(a.errors,s,d),r=eZ(e,s,t.name||d);o=r.error,d=r.name,k=G(e)}}else g([d],!0),o=(await ev(v,i,p,r.shouldUseNativeValidation))[d],g([d]),x(C),h&&(o?k=!1:c.isValid&&(k=await j(s,!0)));h&&(v._f.deps&&W(v._f.deps),_(d,k,o,O))}},U=(e,t)=>{if(I(a.errors,t)&&e.focus)return e.focus(),1},W=async(e,t={})=>{let n,i;let o=K(e);if(r.resolver){let t=await k(F(e)?e:o);n=G(t),i=e?!o.some(e=>I(t,e)):n}else e?((i=(await Promise.all(o.map(async e=>{let t=I(s,e);return await j(t&&t._f?{[e]:t}:t)}))).every(Boolean))||a.isValid)&&y():i=n=await j(s);return u.state.next({...!J(e)||c.isValid&&n!==a.isValid?{}:{name:e},...r.resolver||!e?{isValid:n}:{},errors:a.errors}),t.shouldFocus&&!i&&ea(s,U,e?o:l.mount),i},Y=e=>{let t={...o.mount?i:n};return F(e)?t:J(e)?I(t,e):e.map(e=>I(t,e))},X=(e,t)=>({invalid:!!I((t||a).errors,e),isDirty:!!I((t||a).dirtyFields,e),error:I((t||a).errors,e),isValidating:!!I(a.validatingFields,e),isTouched:!!I((t||a).touchedFields,e)}),ee=(e,t,r)=>{let n=(I(s,e,{_f:{}})._f||{}).ref,{ref:i,message:o,type:l,...d}=I(a.errors,e)||{};q(a.errors,e,{...d,...t,ref:n}),u.state.next({name:e,errors:a.errors,isValid:!1}),r&&r.shouldFocus&&n&&n.focus&&n.focus()},el=(e,t={})=>{for(let o of e?K(e):l.mount)l.mount.delete(o),l.array.delete(o),t.keepValue||(ex(s,o),ex(i,o)),t.keepError||ex(a.errors,o),t.keepDirty||ex(a.dirtyFields,o),t.keepTouched||ex(a.touchedFields,o),t.keepIsValidating||ex(a.validatingFields,o),r.shouldUnregister||t.keepDefaultValue||ex(n,o);u.values.next({values:{...i}}),u.state.next({...a,...t.keepDirty?{isDirty:C()}:{}}),t.keepIsValid||y()},ed=({disabled:e,name:t,field:r,fields:a,value:s})=>{if(L(e)&&o.mount||e){let n=e?void 0:F(s)?eE(r?r._f:I(a,t)._f):s;q(i,t,n),b(t,n,!1,!1,!0)}},ec=(e,t={})=>{let a=I(s,e),i=L(t.disabled);return q(s,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...t}}),l.mount.add(e),a?ed({field:a,disabled:t.disabled,name:e,value:t.value}):x(e,!0,t.value),{...i?{disabled:t.disabled}:{},...r.progressive?{required:!!t.required,min:eP(t.min),max:eP(t.max),minLength:eP(t.minLength),maxLength:eP(t.maxLength),pattern:eP(t.pattern)}:{},name:e,onChange:z,onBlur:z,ref:i=>{if(i){ec(e,t),a=I(s,e);let r=F(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,o=ej(r),l=a._f.refs||[];(o?l.find(e=>e===r):r===a._f.ref)||(q(s,e,{_f:{...a._f,...o?{refs:[...l.filter(eC),r,...Array.isArray(I(n,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),x(e,!1,void 0,r))}else(a=I(s,e,{}))._f&&(a._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&!(Z(l.array,e)&&o.action)&&l.unMount.add(e)}}},eu=()=>r.shouldFocusError&&ea(s,U,l.mount),ef=(e,t)=>async n=>{let o;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let l=$(i);if(u.state.next({isSubmitting:!0}),r.resolver){let{errors:e,values:t}=await w();a.errors=e,l=t}else await j(s);if(ex(a.errors,"root"),G(a.errors)){u.state.next({errors:{}});try{await e(l,n)}catch(e){o=e}}else t&&await t({...a.errors},n),eu(),setTimeout(eu);if(u.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:G(a.errors)&&!o,submitCount:a.submitCount+1,errors:a.errors}),o)throw o},em=(t,r={})=>{let d=t?$(t):n,f=$(d),m=G(t),p=m?n:f;if(r.keepDefaultValues||(n=d),!r.keepValues){if(r.keepDirtyValues)for(let e of l.mount)I(a.dirtyFields,e)?q(p,e,I(i,e)):D(e,I(p,e));else{if(V&&F(t))for(let e of l.mount){let t=I(s,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(eo(e)){let t=e.closest("form");if(t){t.reset();break}}}}s={}}i=e.shouldUnregister?r.keepDefaultValues?$(n):{}:$(p),u.array.next({values:{...p}}),u.values.next({values:{...p}})}l={mount:r.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!c.isValid||!!r.keepIsValid||!!r.keepDirtyValues,o.watch=!!e.shouldUnregister,u.state.next({submitCount:r.keepSubmitCount?a.submitCount:0,isDirty:!m&&(r.keepDirty?a.isDirty:!!(r.keepDefaultValues&&!ew(t,n))),isSubmitted:!!r.keepIsSubmitted&&a.isSubmitted,dirtyFields:m?{}:r.keepDirtyValues?r.keepDefaultValues&&i?eA(n,i):a.dirtyFields:r.keepDefaultValues&&t?eA(n,t):r.keepDirty?a.dirtyFields:{},touchedFields:r.keepTouched?a.touchedFields:{},errors:r.keepErrors?a.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&a.isSubmitSuccessful,isSubmitting:!1})},ep=(e,t)=>em(ei(e)?e(i):e,t);return{control:{register:ec,unregister:el,getFieldState:X,handleSubmit:ef,setError:ee,_executeSchema:w,_getWatch:S,_getDirty:C,_updateValid:y,_removeUnmounted:()=>{for(let e of l.unMount){let t=I(s,e);t&&(t._f.refs?t._f.refs.every(e=>!eC(e)):!eC(t._f.ref))&&el(e)}l.unMount=new Set},_updateFieldArray:(e,t=[],r,l,d=!0,f=!0)=>{if(l&&r){if(o.action=!0,f&&Array.isArray(I(s,e))){let t=r(I(s,e),l.argA,l.argB);d&&q(s,e,t)}if(f&&Array.isArray(I(a.errors,e))){let t=r(I(a.errors,e),l.argA,l.argB);d&&q(a.errors,e,t),eV(a.errors,e)}if(c.touchedFields&&f&&Array.isArray(I(a.touchedFields,e))){let t=r(I(a.touchedFields,e),l.argA,l.argB);d&&q(a.touchedFields,e,t)}c.dirtyFields&&(a.dirtyFields=eA(n,i)),u.state.next({name:e,isDirty:C(e,t),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else q(i,e,t)},_updateDisabledField:ed,_getFieldArray:t=>R(I(o.mount?i:n,t,e.shouldUnregister?I(n,t,[]):[])),_reset:em,_resetDefaultValues:()=>ei(r.defaultValues)&&r.defaultValues().then(e=>{ep(e,r.resetOptions),u.state.next({isLoading:!1})}),_updateFormState:e=>{a={...a,...e}},_disableForm:e=>{L(e)&&(u.state.next({disabled:e}),ea(s,(t,r)=>{let a=I(s,r);a&&(t.disabled=a._f.disabled||e,Array.isArray(a._f.refs)&&a._f.refs.forEach(t=>{t.disabled=a._f.disabled||e}))},0,!1))},_subjects:u,_proxyFormState:c,_setErrors:e=>{a.errors=e,u.state.next({errors:a.errors,isValid:!1})},get _fields(){return s},get _formValues(){return i},get _state(){return o},set _state(value){o=value},get _defaultValues(){return n},get _names(){return l},set _names(value){l=value},get _formState(){return a},set _formState(value){a=value},get _options(){return r},set _options(value){r={...r,...value}}},trigger:W,register:ec,handleSubmit:ef,watch:(e,t)=>ei(e)?u.values.subscribe({next:r=>e(S(void 0,t),r)}):S(e,t,!0),setValue:D,getValues:Y,reset:ep,resetField:(e,t={})=>{I(s,e)&&(F(t.defaultValue)?D(e,$(I(n,e))):(D(e,t.defaultValue),q(n,e,$(t.defaultValue))),t.keepTouched||ex(a.touchedFields,e),t.keepDirty||(ex(a.dirtyFields,e),a.isDirty=t.defaultValue?C(e,$(I(n,e))):C()),!t.keepError&&(ex(a.errors,e),c.isValid&&y()),u.state.next({...a}))},clearErrors:e=>{e&&K(e).forEach(e=>ex(a.errors,e)),u.state.next({errors:e?a.errors:{}})},unregister:el,setError:ee,setFocus:(e,t={})=>{let r=I(s,e),a=r&&r._f;if(a){let e=a.refs?a.refs[0]:a.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:X}}(e),formState:a});let n=t.current.control;return n._options=e,function(e){let t=f.useRef(e);t.current=e,f.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}({subject:n._subjects.state,next:e=>{X(e,n._proxyFormState,n._updateFormState,!0)&&s({...n._formState})}}),f.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),f.useEffect(()=>{if(n._proxyFormState.isDirty){let e=n._getDirty();e!==a.isDirty&&n._subjects.state.next({isDirty:e})}},[n,a.isDirty]),f.useEffect(()=>{e.values&&!ew(e.values,r.current)?(n._reset(e.values,n._options.resetOptions),r.current=e.values,s(e=>({...e}))):n._resetDefaultValues()},[e.values,n]),f.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),f.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),f.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),t.current.formState=Y(a,n),t.current}let eF=(e,t,r)=>{if(e&&"reportValidity"in e){let a=I(r,t);e.setCustomValidity(a&&a.message||""),e.reportValidity()}},eI=(e,t)=>{for(let r in t.fields){let a=t.fields[r];a&&a.ref&&"reportValidity"in a.ref?eF(a.ref,r,e):a.refs&&a.refs.forEach(t=>eF(t,r,e))}},eL=(e,t)=>{t.shouldUseNativeValidation&&eI(e,t);let r={};for(let a in e){let s=I(t.fields,a),n=Object.assign(e[a]||{},{ref:s&&s.ref});if(ez(t.names||Object.keys(e),a)){let e=Object.assign({},I(r,a));q(e,"root",n),q(r,a,e)}else q(r,a,n)}return r},ez=(e,t)=>e.some(e=>e.startsWith(t+"."));var eU=function(e,t){for(var r={};e.length;){var a=e[0],s=a.code,n=a.message,i=a.path.join(".");if(!r[i]){if("unionErrors"in a){var o=a.unionErrors[0].errors[0];r[i]={message:o.message,type:o.code}}else r[i]={message:n,type:s}}if("unionErrors"in a&&a.unionErrors.forEach(function(t){return t.errors.forEach(function(t){return e.push(t)})}),t){var l=r[i].types,d=l&&l[a.code];r[i]=ee(i,t,r,s,d?[].concat(d,a.message):a.message)}e.shift()}return r},eq=function(e,t,r){return void 0===r&&(r={}),function(a,s,n){try{return Promise.resolve(function(s,i){try{var o=Promise.resolve(e["sync"===r.mode?"parse":"parseAsync"](a,t)).then(function(e){return n.shouldUseNativeValidation&&eI({},n),{errors:{},values:r.raw?a:e}})}catch(e){return i(e)}return o&&o.then?o.then(void 0,i):o}(0,function(e){if(Array.isArray(null==e?void 0:e.errors))return{values:{},errors:eL(eU(e.errors,!n.shouldUseNativeValidation&&"all"===n.criteriaMode),n)};throw e}))}catch(e){return Promise.reject(e)}}};(function(e){e.assertEqual=e=>e,e.assertIs=function(e){},e.assertNever=function(e){throw Error()},e.arrayToEnum=e=>{let t={};for(let r of e)t[r]=r;return t},e.getValidEnumValues=t=>{let r=e.objectKeys(t).filter(e=>"number"!=typeof t[t[e]]),a={};for(let e of r)a[e]=t[e];return e.objectValues(a)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},e.find=(e,t)=>{for(let r of e)if(t(r))return r},e.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,e.joinValues=function(e,t=" | "){return e.map(e=>"string"==typeof e?`'${e}'`:e).join(t)},e.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t})(s||(s={})),(n||(n={})).mergeShapes=(e,t)=>({...e,...t});let eB=s.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),eH=e=>{switch(typeof e){case"undefined":return eB.undefined;case"string":return eB.string;case"number":return isNaN(e)?eB.nan:eB.number;case"boolean":return eB.boolean;case"function":return eB.function;case"bigint":return eB.bigint;case"symbol":return eB.symbol;case"object":if(Array.isArray(e))return eB.array;if(null===e)return eB.null;if(e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch)return eB.promise;if("undefined"!=typeof Map&&e instanceof Map)return eB.map;if("undefined"!=typeof Set&&e instanceof Set)return eB.set;if("undefined"!=typeof Date&&e instanceof Date)return eB.date;return eB.object;default:return eB.unknown}},eW=s.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class eY extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){let t=e||function(e){return e.message},r={_errors:[]},a=e=>{for(let s of e.issues)if("invalid_union"===s.code)s.unionErrors.map(a);else if("invalid_return_type"===s.code)a(s.returnTypeError);else if("invalid_arguments"===s.code)a(s.argumentsError);else if(0===s.path.length)r._errors.push(t(s));else{let e=r,a=0;for(;a<s.path.length;){let r=s.path[a];a===s.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(s))):e[r]=e[r]||{_errors:[]},e=e[r],a++}}};return a(this),r}static assert(e){if(!(e instanceof eY))throw Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,s.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){let t={},r=[];for(let a of this.issues)a.path.length>0?(t[a.path[0]]=t[a.path[0]]||[],t[a.path[0]].push(e(a))):r.push(e(a));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}eY.create=e=>new eY(e);let eG=(e,t)=>{let r;switch(e.code){case eW.invalid_type:r=e.received===eB.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case eW.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,s.jsonStringifyReplacer)}`;break;case eW.unrecognized_keys:r=`Unrecognized key(s) in object: ${s.joinValues(e.keys,", ")}`;break;case eW.invalid_union:r="Invalid input";break;case eW.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${s.joinValues(e.options)}`;break;case eW.invalid_enum_value:r=`Invalid enum value. Expected ${s.joinValues(e.options)}, received '${e.received}'`;break;case eW.invalid_arguments:r="Invalid function arguments";break;case eW.invalid_return_type:r="Invalid function return type";break;case eW.invalid_date:r="Invalid date";break;case eW.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:s.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case eW.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case eW.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case eW.custom:r="Invalid input";break;case eW.invalid_intersection_types:r="Intersection results could not be merged";break;case eW.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case eW.not_finite:r="Number must be finite";break;default:r=t.defaultError,s.assertNever(e)}return{message:r}},eX=eG;function eK(){return eX}let eJ=e=>{let{data:t,path:r,errorMaps:a,issueData:s}=e,n=[...r,...s.path||[]],i={...s,path:n};if(void 0!==s.message)return{...s,path:n,message:s.message};let o="";for(let e of a.filter(e=>!!e).slice().reverse())o=e(i,{data:t,defaultError:o}).message;return{...s,path:n,message:o}};function eQ(e,t){let r=eK(),a=eJ({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,r,r===eG?void 0:eG].filter(e=>!!e)});e.common.issues.push(a)}class e0{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let a of t){if("aborted"===a.status)return e1;"dirty"===a.status&&e.dirty(),r.push(a.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let e of t){let t=await e.key,a=await e.value;r.push({key:t,value:a})}return e0.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let a of t){let{key:t,value:s}=a;if("aborted"===t.status||"aborted"===s.status)return e1;"dirty"===t.status&&e.dirty(),"dirty"===s.status&&e.dirty(),"__proto__"!==t.value&&(void 0!==s.value||a.alwaysSet)&&(r[t.value]=s.value)}return{status:e.value,value:r}}}let e1=Object.freeze({status:"aborted"}),e2=e=>({status:"dirty",value:e}),e9=e=>({status:"valid",value:e}),e3=e=>"aborted"===e.status,e5=e=>"dirty"===e.status,e8=e=>"valid"===e.status,e4=e=>"undefined"!=typeof Promise&&e instanceof Promise;function e6(e,t,r,a){if("a"===r&&!a)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?a:"a"===r?a.call(e):a?a.value:t.get(e)}function e7(e,t,r,a,s){if("m"===a)throw TypeError("Private method is not writable");if("a"===a&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?s.call(e,r):s?s.value=r:t.set(e,r),r}"function"==typeof SuppressedError&&SuppressedError,function(e){e.errToObj=e=>"string"==typeof e?{message:e}:e||{},e.toString=e=>"string"==typeof e?e:null==e?void 0:e.message}(i||(i={}));class te{constructor(e,t,r,a){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=a}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}let tt=(e,t)=>{if(e8(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new eY(e.common.issues);return this._error=t,this._error}}};function tr(e){if(!e)return{};let{errorMap:t,invalid_type_error:r,required_error:a,description:s}=e;if(t&&(r||a))throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:s}:{errorMap:(t,s)=>{var n,i;let{message:o}=e;return"invalid_enum_value"===t.code?{message:null!=o?o:s.defaultError}:void 0===s.data?{message:null!==(n=null!=o?o:a)&&void 0!==n?n:s.defaultError}:"invalid_type"!==t.code?{message:s.defaultError}:{message:null!==(i=null!=o?o:r)&&void 0!==i?i:s.defaultError}},description:s}}class ta{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return eH(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:eH(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new e0,ctx:{common:e.parent.common,data:e.data,parsedType:eH(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(e4(t))throw Error("Synchronous parse encountered promise.");return t}_parseAsync(e){return Promise.resolve(this._parse(e))}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;let a={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:eH(e)},s=this._parseSync({data:e,path:a.path,parent:a});return tt(a,s)}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:eH(e)},a=this._parse({data:e,path:r.path,parent:r});return tt(r,await (e4(a)?a:Promise.resolve(a)))}refine(e,t){let r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement((t,a)=>{let s=e(t),n=()=>a.addIssue({code:eW.custom,...r(t)});return"undefined"!=typeof Promise&&s instanceof Promise?s.then(e=>!!e||(n(),!1)):!!s||(n(),!1)})}refinement(e,t){return this._refinement((r,a)=>!!e(r)||(a.addIssue("function"==typeof t?t(r,a):t),!1))}_refinement(e){return new tW({schema:this,typeName:d.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return tY.create(this,this._def)}nullable(){return tG.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return tE.create(this,this._def)}promise(){return tH.create(this,this._def)}or(e){return tP.create([this,e],this._def)}and(e){return tD.create(this,e,this._def)}transform(e){return new tW({...tr(this._def),schema:this,typeName:d.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new tX({...tr(this._def),innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:d.ZodDefault})}brand(){return new t0({typeName:d.ZodBranded,type:this,...tr(this._def)})}catch(e){return new tK({...tr(this._def),innerType:this,catchValue:"function"==typeof e?e:()=>e,typeName:d.ZodCatch})}describe(e){return new this.constructor({...this._def,description:e})}pipe(e){return t1.create(this,e)}readonly(){return t2.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}let ts=/^c[^\s-]{8,}$/i,tn=/^[0-9a-z]+$/,ti=/^[0-9A-HJKMNP-TV-Z]{26}$/,to=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,tl=/^[a-z0-9_-]{21}$/i,td=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,tc=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,tu=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,tf=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,tm=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,tp="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",th=RegExp(`^${tp}$`);function ty(e){let t="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return e.precision?t=`${t}\\.\\d{${e.precision}}`:null==e.precision&&(t=`${t}(\\.\\d+)?`),t}function tg(e){let t=`${tp}T${ty(e)}`,r=[];return r.push(e.local?"Z?":"Z"),e.offset&&r.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${r.join("|")})`,RegExp(`^${t}$`)}class tv extends ta{_parse(e){var t,r;let n;if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==eB.string){let t=this._getOrReturnCtx(e);return eQ(t,{code:eW.invalid_type,expected:eB.string,received:t.parsedType}),e1}let i=new e0;for(let o of this._def.checks)if("min"===o.kind)e.data.length<o.value&&(eQ(n=this._getOrReturnCtx(e,n),{code:eW.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),i.dirty());else if("max"===o.kind)e.data.length>o.value&&(eQ(n=this._getOrReturnCtx(e,n),{code:eW.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),i.dirty());else if("length"===o.kind){let t=e.data.length>o.value,r=e.data.length<o.value;(t||r)&&(n=this._getOrReturnCtx(e,n),t?eQ(n,{code:eW.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):r&&eQ(n,{code:eW.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),i.dirty())}else if("email"===o.kind)tc.test(e.data)||(eQ(n=this._getOrReturnCtx(e,n),{validation:"email",code:eW.invalid_string,message:o.message}),i.dirty());else if("emoji"===o.kind)a||(a=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),a.test(e.data)||(eQ(n=this._getOrReturnCtx(e,n),{validation:"emoji",code:eW.invalid_string,message:o.message}),i.dirty());else if("uuid"===o.kind)to.test(e.data)||(eQ(n=this._getOrReturnCtx(e,n),{validation:"uuid",code:eW.invalid_string,message:o.message}),i.dirty());else if("nanoid"===o.kind)tl.test(e.data)||(eQ(n=this._getOrReturnCtx(e,n),{validation:"nanoid",code:eW.invalid_string,message:o.message}),i.dirty());else if("cuid"===o.kind)ts.test(e.data)||(eQ(n=this._getOrReturnCtx(e,n),{validation:"cuid",code:eW.invalid_string,message:o.message}),i.dirty());else if("cuid2"===o.kind)tn.test(e.data)||(eQ(n=this._getOrReturnCtx(e,n),{validation:"cuid2",code:eW.invalid_string,message:o.message}),i.dirty());else if("ulid"===o.kind)ti.test(e.data)||(eQ(n=this._getOrReturnCtx(e,n),{validation:"ulid",code:eW.invalid_string,message:o.message}),i.dirty());else if("url"===o.kind)try{new URL(e.data)}catch(t){eQ(n=this._getOrReturnCtx(e,n),{validation:"url",code:eW.invalid_string,message:o.message}),i.dirty()}else"regex"===o.kind?(o.regex.lastIndex=0,o.regex.test(e.data)||(eQ(n=this._getOrReturnCtx(e,n),{validation:"regex",code:eW.invalid_string,message:o.message}),i.dirty())):"trim"===o.kind?e.data=e.data.trim():"includes"===o.kind?e.data.includes(o.value,o.position)||(eQ(n=this._getOrReturnCtx(e,n),{code:eW.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),i.dirty()):"toLowerCase"===o.kind?e.data=e.data.toLowerCase():"toUpperCase"===o.kind?e.data=e.data.toUpperCase():"startsWith"===o.kind?e.data.startsWith(o.value)||(eQ(n=this._getOrReturnCtx(e,n),{code:eW.invalid_string,validation:{startsWith:o.value},message:o.message}),i.dirty()):"endsWith"===o.kind?e.data.endsWith(o.value)||(eQ(n=this._getOrReturnCtx(e,n),{code:eW.invalid_string,validation:{endsWith:o.value},message:o.message}),i.dirty()):"datetime"===o.kind?tg(o).test(e.data)||(eQ(n=this._getOrReturnCtx(e,n),{code:eW.invalid_string,validation:"datetime",message:o.message}),i.dirty()):"date"===o.kind?th.test(e.data)||(eQ(n=this._getOrReturnCtx(e,n),{code:eW.invalid_string,validation:"date",message:o.message}),i.dirty()):"time"===o.kind?RegExp(`^${ty(o)}$`).test(e.data)||(eQ(n=this._getOrReturnCtx(e,n),{code:eW.invalid_string,validation:"time",message:o.message}),i.dirty()):"duration"===o.kind?td.test(e.data)||(eQ(n=this._getOrReturnCtx(e,n),{validation:"duration",code:eW.invalid_string,message:o.message}),i.dirty()):"ip"===o.kind?(t=e.data,("v4"===(r=o.version)||!r)&&tu.test(t)||("v6"===r||!r)&&tf.test(t)||(eQ(n=this._getOrReturnCtx(e,n),{validation:"ip",code:eW.invalid_string,message:o.message}),i.dirty())):"base64"===o.kind?tm.test(e.data)||(eQ(n=this._getOrReturnCtx(e,n),{validation:"base64",code:eW.invalid_string,message:o.message}),i.dirty()):s.assertNever(o);return{status:i.value,value:e.data}}_regex(e,t,r){return this.refinement(t=>e.test(t),{validation:t,code:eW.invalid_string,...i.errToObj(r)})}_addCheck(e){return new tv({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...i.errToObj(e)})}url(e){return this._addCheck({kind:"url",...i.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...i.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...i.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...i.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...i.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...i.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...i.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...i.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...i.errToObj(e)})}datetime(e){var t,r;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,local:null!==(r=null==e?void 0:e.local)&&void 0!==r&&r,...i.errToObj(null==e?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return"string"==typeof e?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,...i.errToObj(null==e?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...i.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...i.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...i.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...i.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...i.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...i.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...i.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...i.errToObj(t)})}nonempty(e){return this.min(1,i.errToObj(e))}trim(){return new tv({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new tv({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new tv({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>"datetime"===e.kind)}get isDate(){return!!this._def.checks.find(e=>"date"===e.kind)}get isTime(){return!!this._def.checks.find(e=>"time"===e.kind)}get isDuration(){return!!this._def.checks.find(e=>"duration"===e.kind)}get isEmail(){return!!this._def.checks.find(e=>"email"===e.kind)}get isURL(){return!!this._def.checks.find(e=>"url"===e.kind)}get isEmoji(){return!!this._def.checks.find(e=>"emoji"===e.kind)}get isUUID(){return!!this._def.checks.find(e=>"uuid"===e.kind)}get isNANOID(){return!!this._def.checks.find(e=>"nanoid"===e.kind)}get isCUID(){return!!this._def.checks.find(e=>"cuid"===e.kind)}get isCUID2(){return!!this._def.checks.find(e=>"cuid2"===e.kind)}get isULID(){return!!this._def.checks.find(e=>"ulid"===e.kind)}get isIP(){return!!this._def.checks.find(e=>"ip"===e.kind)}get isBase64(){return!!this._def.checks.find(e=>"base64"===e.kind)}get minLength(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}tv.create=e=>{var t;return new tv({checks:[],typeName:d.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...tr(e)})};class tx extends ta{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){let t;if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==eB.number){let t=this._getOrReturnCtx(e);return eQ(t,{code:eW.invalid_type,expected:eB.number,received:t.parsedType}),e1}let r=new e0;for(let a of this._def.checks)"int"===a.kind?s.isInteger(e.data)||(eQ(t=this._getOrReturnCtx(e,t),{code:eW.invalid_type,expected:"integer",received:"float",message:a.message}),r.dirty()):"min"===a.kind?(a.inclusive?e.data<a.value:e.data<=a.value)&&(eQ(t=this._getOrReturnCtx(e,t),{code:eW.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),r.dirty()):"max"===a.kind?(a.inclusive?e.data>a.value:e.data>=a.value)&&(eQ(t=this._getOrReturnCtx(e,t),{code:eW.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),r.dirty()):"multipleOf"===a.kind?0!==function(e,t){let r=(e.toString().split(".")[1]||"").length,a=(t.toString().split(".")[1]||"").length,s=r>a?r:a;return parseInt(e.toFixed(s).replace(".",""))%parseInt(t.toFixed(s).replace(".",""))/Math.pow(10,s)}(e.data,a.value)&&(eQ(t=this._getOrReturnCtx(e,t),{code:eW.not_multiple_of,multipleOf:a.value,message:a.message}),r.dirty()):"finite"===a.kind?Number.isFinite(e.data)||(eQ(t=this._getOrReturnCtx(e,t),{code:eW.not_finite,message:a.message}),r.dirty()):s.assertNever(a);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,i.toString(t))}gt(e,t){return this.setLimit("min",e,!1,i.toString(t))}lte(e,t){return this.setLimit("max",e,!0,i.toString(t))}lt(e,t){return this.setLimit("max",e,!1,i.toString(t))}setLimit(e,t,r,a){return new tx({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:i.toString(a)}]})}_addCheck(e){return new tx({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:i.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:i.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:i.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:i.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:i.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:i.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:i.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:i.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:i.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>"int"===e.kind||"multipleOf"===e.kind&&s.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}tx.create=e=>new tx({checks:[],typeName:d.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...tr(e)});class tb extends ta{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){let t;if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==eB.bigint){let t=this._getOrReturnCtx(e);return eQ(t,{code:eW.invalid_type,expected:eB.bigint,received:t.parsedType}),e1}let r=new e0;for(let a of this._def.checks)"min"===a.kind?(a.inclusive?e.data<a.value:e.data<=a.value)&&(eQ(t=this._getOrReturnCtx(e,t),{code:eW.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),r.dirty()):"max"===a.kind?(a.inclusive?e.data>a.value:e.data>=a.value)&&(eQ(t=this._getOrReturnCtx(e,t),{code:eW.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),r.dirty()):"multipleOf"===a.kind?e.data%a.value!==BigInt(0)&&(eQ(t=this._getOrReturnCtx(e,t),{code:eW.not_multiple_of,multipleOf:a.value,message:a.message}),r.dirty()):s.assertNever(a);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,i.toString(t))}gt(e,t){return this.setLimit("min",e,!1,i.toString(t))}lte(e,t){return this.setLimit("max",e,!0,i.toString(t))}lt(e,t){return this.setLimit("max",e,!1,i.toString(t))}setLimit(e,t,r,a){return new tb({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:i.toString(a)}]})}_addCheck(e){return new tb({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:i.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:i.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:i.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:i.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:i.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}tb.create=e=>{var t;return new tb({checks:[],typeName:d.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...tr(e)})};class t_ extends ta{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==eB.boolean){let t=this._getOrReturnCtx(e);return eQ(t,{code:eW.invalid_type,expected:eB.boolean,received:t.parsedType}),e1}return e9(e.data)}}t_.create=e=>new t_({typeName:d.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...tr(e)});class tw extends ta{_parse(e){let t;if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==eB.date){let t=this._getOrReturnCtx(e);return eQ(t,{code:eW.invalid_type,expected:eB.date,received:t.parsedType}),e1}if(isNaN(e.data.getTime()))return eQ(this._getOrReturnCtx(e),{code:eW.invalid_date}),e1;let r=new e0;for(let a of this._def.checks)"min"===a.kind?e.data.getTime()<a.value&&(eQ(t=this._getOrReturnCtx(e,t),{code:eW.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),r.dirty()):"max"===a.kind?e.data.getTime()>a.value&&(eQ(t=this._getOrReturnCtx(e,t),{code:eW.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),r.dirty()):s.assertNever(a);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new tw({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:i.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:i.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}tw.create=e=>new tw({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:d.ZodDate,...tr(e)});class tk extends ta{_parse(e){if(this._getType(e)!==eB.symbol){let t=this._getOrReturnCtx(e);return eQ(t,{code:eW.invalid_type,expected:eB.symbol,received:t.parsedType}),e1}return e9(e.data)}}tk.create=e=>new tk({typeName:d.ZodSymbol,...tr(e)});class tj extends ta{_parse(e){if(this._getType(e)!==eB.undefined){let t=this._getOrReturnCtx(e);return eQ(t,{code:eW.invalid_type,expected:eB.undefined,received:t.parsedType}),e1}return e9(e.data)}}tj.create=e=>new tj({typeName:d.ZodUndefined,...tr(e)});class tC extends ta{_parse(e){if(this._getType(e)!==eB.null){let t=this._getOrReturnCtx(e);return eQ(t,{code:eW.invalid_type,expected:eB.null,received:t.parsedType}),e1}return e9(e.data)}}tC.create=e=>new tC({typeName:d.ZodNull,...tr(e)});class tS extends ta{constructor(){super(...arguments),this._any=!0}_parse(e){return e9(e.data)}}tS.create=e=>new tS({typeName:d.ZodAny,...tr(e)});class tN extends ta{constructor(){super(...arguments),this._unknown=!0}_parse(e){return e9(e.data)}}tN.create=e=>new tN({typeName:d.ZodUnknown,...tr(e)});class tA extends ta{_parse(e){let t=this._getOrReturnCtx(e);return eQ(t,{code:eW.invalid_type,expected:eB.never,received:t.parsedType}),e1}}tA.create=e=>new tA({typeName:d.ZodNever,...tr(e)});class tO extends ta{_parse(e){if(this._getType(e)!==eB.undefined){let t=this._getOrReturnCtx(e);return eQ(t,{code:eW.invalid_type,expected:eB.void,received:t.parsedType}),e1}return e9(e.data)}}tO.create=e=>new tO({typeName:d.ZodVoid,...tr(e)});class tE extends ta{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),a=this._def;if(t.parsedType!==eB.array)return eQ(t,{code:eW.invalid_type,expected:eB.array,received:t.parsedType}),e1;if(null!==a.exactLength){let e=t.data.length>a.exactLength.value,s=t.data.length<a.exactLength.value;(e||s)&&(eQ(t,{code:e?eW.too_big:eW.too_small,minimum:s?a.exactLength.value:void 0,maximum:e?a.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:a.exactLength.message}),r.dirty())}if(null!==a.minLength&&t.data.length<a.minLength.value&&(eQ(t,{code:eW.too_small,minimum:a.minLength.value,type:"array",inclusive:!0,exact:!1,message:a.minLength.message}),r.dirty()),null!==a.maxLength&&t.data.length>a.maxLength.value&&(eQ(t,{code:eW.too_big,maximum:a.maxLength.value,type:"array",inclusive:!0,exact:!1,message:a.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((e,r)=>a.type._parseAsync(new te(t,e,t.path,r)))).then(e=>e0.mergeArray(r,e));let s=[...t.data].map((e,r)=>a.type._parseSync(new te(t,e,t.path,r)));return e0.mergeArray(r,s)}get element(){return this._def.type}min(e,t){return new tE({...this._def,minLength:{value:e,message:i.toString(t)}})}max(e,t){return new tE({...this._def,maxLength:{value:e,message:i.toString(t)}})}length(e,t){return new tE({...this._def,exactLength:{value:e,message:i.toString(t)}})}nonempty(e){return this.min(1,e)}}tE.create=(e,t)=>new tE({type:e,minLength:null,maxLength:null,exactLength:null,typeName:d.ZodArray,...tr(t)});class tT extends ta{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;let e=this._def.shape(),t=s.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==eB.object){let t=this._getOrReturnCtx(e);return eQ(t,{code:eW.invalid_type,expected:eB.object,received:t.parsedType}),e1}let{status:t,ctx:r}=this._processInputParams(e),{shape:a,keys:s}=this._getCached(),n=[];if(!(this._def.catchall instanceof tA&&"strip"===this._def.unknownKeys))for(let e in r.data)s.includes(e)||n.push(e);let i=[];for(let e of s){let t=a[e],s=r.data[e];i.push({key:{status:"valid",value:e},value:t._parse(new te(r,s,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof tA){let e=this._def.unknownKeys;if("passthrough"===e)for(let e of n)i.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)n.length>0&&(eQ(r,{code:eW.unrecognized_keys,keys:n}),t.dirty());else if("strip"===e);else throw Error("Internal ZodObject error: invalid unknownKeys value.")}else{let e=this._def.catchall;for(let t of n){let a=r.data[t];i.push({key:{status:"valid",value:t},value:e._parse(new te(r,a,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of i){let r=await t.key,a=await t.value;e.push({key:r,value:a,alwaysSet:t.alwaysSet})}return e}).then(e=>e0.mergeObjectSync(t,e)):e0.mergeObjectSync(t,i)}get shape(){return this._def.shape()}strict(e){return i.errToObj,new tT({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var a,s,n,o;let l=null!==(n=null===(s=(a=this._def).errorMap)||void 0===s?void 0:s.call(a,t,r).message)&&void 0!==n?n:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(o=i.errToObj(e).message)&&void 0!==o?o:l}:{message:l}}}:{}})}strip(){return new tT({...this._def,unknownKeys:"strip"})}passthrough(){return new tT({...this._def,unknownKeys:"passthrough"})}extend(e){return new tT({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new tT({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:d.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new tT({...this._def,catchall:e})}pick(e){let t={};return s.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new tT({...this._def,shape:()=>t})}omit(e){let t={};return s.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new tT({...this._def,shape:()=>t})}deepPartial(){return function e(t){if(t instanceof tT){let r={};for(let a in t.shape){let s=t.shape[a];r[a]=tY.create(e(s))}return new tT({...t._def,shape:()=>r})}return t instanceof tE?new tE({...t._def,type:e(t.element)}):t instanceof tY?tY.create(e(t.unwrap())):t instanceof tG?tG.create(e(t.unwrap())):t instanceof tV?tV.create(t.items.map(t=>e(t))):t}(this)}partial(e){let t={};return s.objectKeys(this.shape).forEach(r=>{let a=this.shape[r];e&&!e[r]?t[r]=a:t[r]=a.optional()}),new tT({...this._def,shape:()=>t})}required(e){let t={};return s.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof tY;)e=e._def.innerType;t[r]=e}}),new tT({...this._def,shape:()=>t})}keyof(){return tU(s.objectKeys(this.shape))}}tT.create=(e,t)=>new tT({shape:()=>e,unknownKeys:"strip",catchall:tA.create(),typeName:d.ZodObject,...tr(t)}),tT.strictCreate=(e,t)=>new tT({shape:()=>e,unknownKeys:"strict",catchall:tA.create(),typeName:d.ZodObject,...tr(t)}),tT.lazycreate=(e,t)=>new tT({shape:e,unknownKeys:"strip",catchall:tA.create(),typeName:d.ZodObject,...tr(t)});class tP extends ta{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map(async e=>{let r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}})).then(function(e){for(let t of e)if("valid"===t.result.status)return t.result;for(let r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;let r=e.map(e=>new eY(e.ctx.common.issues));return eQ(t,{code:eW.invalid_union,unionErrors:r}),e1});{let e;let a=[];for(let s of r){let r={...t,common:{...t.common,issues:[]},parent:null},n=s._parseSync({data:t.data,path:t.path,parent:r});if("valid"===n.status)return n;"dirty"!==n.status||e||(e={result:n,ctx:r}),r.common.issues.length&&a.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let s=a.map(e=>new eY(e));return eQ(t,{code:eW.invalid_union,unionErrors:s}),e1}}get options(){return this._def.options}}tP.create=(e,t)=>new tP({options:e,typeName:d.ZodUnion,...tr(t)});let tM=e=>{if(e instanceof tL)return tM(e.schema);if(e instanceof tW)return tM(e.innerType());if(e instanceof tz)return[e.value];if(e instanceof tq)return e.options;if(e instanceof tB)return s.objectValues(e.enum);if(e instanceof tX)return tM(e._def.innerType);if(e instanceof tj)return[void 0];else if(e instanceof tC)return[null];else if(e instanceof tY)return[void 0,...tM(e.unwrap())];else if(e instanceof tG)return[null,...tM(e.unwrap())];else if(e instanceof t0)return tM(e.unwrap());else if(e instanceof t2)return tM(e.unwrap());else if(e instanceof tK)return tM(e._def.innerType);else return[]};class tZ extends ta{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==eB.object)return eQ(t,{code:eW.invalid_type,expected:eB.object,received:t.parsedType}),e1;let r=this.discriminator,a=t.data[r],s=this.optionsMap.get(a);return s?t.common.async?s._parseAsync({data:t.data,path:t.path,parent:t}):s._parseSync({data:t.data,path:t.path,parent:t}):(eQ(t,{code:eW.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),e1)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let a=new Map;for(let r of t){let t=tM(r.shape[e]);if(!t.length)throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let s of t){if(a.has(s))throw Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`);a.set(s,r)}}return new tZ({typeName:d.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:a,...tr(r)})}}class tD extends ta{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),a=(e,a)=>{if(e3(e)||e3(a))return e1;let n=function e(t,r){let a=eH(t),n=eH(r);if(t===r)return{valid:!0,data:t};if(a===eB.object&&n===eB.object){let a=s.objectKeys(r),n=s.objectKeys(t).filter(e=>-1!==a.indexOf(e)),i={...t,...r};for(let a of n){let s=e(t[a],r[a]);if(!s.valid)return{valid:!1};i[a]=s.data}return{valid:!0,data:i}}if(a===eB.array&&n===eB.array){if(t.length!==r.length)return{valid:!1};let a=[];for(let s=0;s<t.length;s++){let n=e(t[s],r[s]);if(!n.valid)return{valid:!1};a.push(n.data)}return{valid:!0,data:a}}return a===eB.date&&n===eB.date&&+t==+r?{valid:!0,data:t}:{valid:!1}}(e.value,a.value);return n.valid?((e5(e)||e5(a))&&t.dirty(),{status:t.value,value:n.data}):(eQ(r,{code:eW.invalid_intersection_types}),e1)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([e,t])=>a(e,t)):a(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}tD.create=(e,t,r)=>new tD({left:e,right:t,typeName:d.ZodIntersection,...tr(r)});class tV extends ta{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eB.array)return eQ(r,{code:eW.invalid_type,expected:eB.array,received:r.parsedType}),e1;if(r.data.length<this._def.items.length)return eQ(r,{code:eW.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),e1;!this._def.rest&&r.data.length>this._def.items.length&&(eQ(r,{code:eW.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let a=[...r.data].map((e,t)=>{let a=this._def.items[t]||this._def.rest;return a?a._parse(new te(r,e,r.path,t)):null}).filter(e=>!!e);return r.common.async?Promise.all(a).then(e=>e0.mergeArray(t,e)):e0.mergeArray(t,a)}get items(){return this._def.items}rest(e){return new tV({...this._def,rest:e})}}tV.create=(e,t)=>{if(!Array.isArray(e))throw Error("You must pass an array of schemas to z.tuple([ ... ])");return new tV({items:e,typeName:d.ZodTuple,rest:null,...tr(t)})};class t$ extends ta{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eB.object)return eQ(r,{code:eW.invalid_type,expected:eB.object,received:r.parsedType}),e1;let a=[],s=this._def.keyType,n=this._def.valueType;for(let e in r.data)a.push({key:s._parse(new te(r,e,r.path,e)),value:n._parse(new te(r,r.data[e],r.path,e)),alwaysSet:e in r.data});return r.common.async?e0.mergeObjectAsync(t,a):e0.mergeObjectSync(t,a)}get element(){return this._def.valueType}static create(e,t,r){return new t$(t instanceof ta?{keyType:e,valueType:t,typeName:d.ZodRecord,...tr(r)}:{keyType:tv.create(),valueType:e,typeName:d.ZodRecord,...tr(t)})}}class tR extends ta{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eB.map)return eQ(r,{code:eW.invalid_type,expected:eB.map,received:r.parsedType}),e1;let a=this._def.keyType,s=this._def.valueType,n=[...r.data.entries()].map(([e,t],n)=>({key:a._parse(new te(r,e,r.path,[n,"key"])),value:s._parse(new te(r,t,r.path,[n,"value"]))}));if(r.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let r of n){let a=await r.key,s=await r.value;if("aborted"===a.status||"aborted"===s.status)return e1;("dirty"===a.status||"dirty"===s.status)&&t.dirty(),e.set(a.value,s.value)}return{status:t.value,value:e}})}{let e=new Map;for(let r of n){let a=r.key,s=r.value;if("aborted"===a.status||"aborted"===s.status)return e1;("dirty"===a.status||"dirty"===s.status)&&t.dirty(),e.set(a.value,s.value)}return{status:t.value,value:e}}}}tR.create=(e,t,r)=>new tR({valueType:t,keyType:e,typeName:d.ZodMap,...tr(r)});class tF extends ta{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eB.set)return eQ(r,{code:eW.invalid_type,expected:eB.set,received:r.parsedType}),e1;let a=this._def;null!==a.minSize&&r.data.size<a.minSize.value&&(eQ(r,{code:eW.too_small,minimum:a.minSize.value,type:"set",inclusive:!0,exact:!1,message:a.minSize.message}),t.dirty()),null!==a.maxSize&&r.data.size>a.maxSize.value&&(eQ(r,{code:eW.too_big,maximum:a.maxSize.value,type:"set",inclusive:!0,exact:!1,message:a.maxSize.message}),t.dirty());let s=this._def.valueType;function n(e){let r=new Set;for(let a of e){if("aborted"===a.status)return e1;"dirty"===a.status&&t.dirty(),r.add(a.value)}return{status:t.value,value:r}}let i=[...r.data.values()].map((e,t)=>s._parse(new te(r,e,r.path,t)));return r.common.async?Promise.all(i).then(e=>n(e)):n(i)}min(e,t){return new tF({...this._def,minSize:{value:e,message:i.toString(t)}})}max(e,t){return new tF({...this._def,maxSize:{value:e,message:i.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}tF.create=(e,t)=>new tF({valueType:e,minSize:null,maxSize:null,typeName:d.ZodSet,...tr(t)});class tI extends ta{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==eB.function)return eQ(t,{code:eW.invalid_type,expected:eB.function,received:t.parsedType}),e1;function r(e,r){return eJ({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,eK(),eG].filter(e=>!!e),issueData:{code:eW.invalid_arguments,argumentsError:r}})}function a(e,r){return eJ({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,eK(),eG].filter(e=>!!e),issueData:{code:eW.invalid_return_type,returnTypeError:r}})}let s={errorMap:t.common.contextualErrorMap},n=t.data;if(this._def.returns instanceof tH){let e=this;return e9(async function(...t){let i=new eY([]),o=await e._def.args.parseAsync(t,s).catch(e=>{throw i.addIssue(r(t,e)),i}),l=await Reflect.apply(n,this,o);return await e._def.returns._def.type.parseAsync(l,s).catch(e=>{throw i.addIssue(a(l,e)),i})})}{let e=this;return e9(function(...t){let i=e._def.args.safeParse(t,s);if(!i.success)throw new eY([r(t,i.error)]);let o=Reflect.apply(n,this,i.data),l=e._def.returns.safeParse(o,s);if(!l.success)throw new eY([a(o,l.error)]);return l.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new tI({...this._def,args:tV.create(e).rest(tN.create())})}returns(e){return new tI({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new tI({args:e||tV.create([]).rest(tN.create()),returns:t||tN.create(),typeName:d.ZodFunction,...tr(r)})}}class tL extends ta{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}tL.create=(e,t)=>new tL({getter:e,typeName:d.ZodLazy,...tr(t)});class tz extends ta{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return eQ(t,{received:t.data,code:eW.invalid_literal,expected:this._def.value}),e1}return{status:"valid",value:e.data}}get value(){return this._def.value}}function tU(e,t){return new tq({values:e,typeName:d.ZodEnum,...tr(t)})}tz.create=(e,t)=>new tz({value:e,typeName:d.ZodLiteral,...tr(t)});class tq extends ta{constructor(){super(...arguments),o.set(this,void 0)}_parse(e){if("string"!=typeof e.data){let t=this._getOrReturnCtx(e),r=this._def.values;return eQ(t,{expected:s.joinValues(r),received:t.parsedType,code:eW.invalid_type}),e1}if(e6(this,o,"f")||e7(this,o,new Set(this._def.values),"f"),!e6(this,o,"f").has(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return eQ(t,{received:t.data,code:eW.invalid_enum_value,options:r}),e1}return e9(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return tq.create(e,{...this._def,...t})}exclude(e,t=this._def){return tq.create(this.options.filter(t=>!e.includes(t)),{...this._def,...t})}}o=new WeakMap,tq.create=tU;class tB extends ta{constructor(){super(...arguments),l.set(this,void 0)}_parse(e){let t=s.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==eB.string&&r.parsedType!==eB.number){let e=s.objectValues(t);return eQ(r,{expected:s.joinValues(e),received:r.parsedType,code:eW.invalid_type}),e1}if(e6(this,l,"f")||e7(this,l,new Set(s.getValidEnumValues(this._def.values)),"f"),!e6(this,l,"f").has(e.data)){let e=s.objectValues(t);return eQ(r,{received:r.data,code:eW.invalid_enum_value,options:e}),e1}return e9(e.data)}get enum(){return this._def.values}}l=new WeakMap,tB.create=(e,t)=>new tB({values:e,typeName:d.ZodNativeEnum,...tr(t)});class tH extends ta{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==eB.promise&&!1===t.common.async?(eQ(t,{code:eW.invalid_type,expected:eB.promise,received:t.parsedType}),e1):e9((t.parsedType===eB.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}}tH.create=(e,t)=>new tH({type:e,typeName:d.ZodPromise,...tr(t)});class tW extends ta{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===d.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),a=this._def.effect||null,n={addIssue:e=>{eQ(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(n.addIssue=n.addIssue.bind(n),"preprocess"===a.type){let e=a.transform(r.data,n);if(r.common.async)return Promise.resolve(e).then(async e=>{if("aborted"===t.value)return e1;let a=await this._def.schema._parseAsync({data:e,path:r.path,parent:r});return"aborted"===a.status?e1:"dirty"===a.status||"dirty"===t.value?e2(a.value):a});{if("aborted"===t.value)return e1;let a=this._def.schema._parseSync({data:e,path:r.path,parent:r});return"aborted"===a.status?e1:"dirty"===a.status||"dirty"===t.value?e2(a.value):a}}if("refinement"===a.type){let e=e=>{let t=a.refinement(e,n);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(r=>"aborted"===r.status?e1:("dirty"===r.status&&t.dirty(),e(r.value).then(()=>({status:t.value,value:r.value}))));{let a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===a.status?e1:("dirty"===a.status&&t.dirty(),e(a.value),{status:t.value,value:a.value})}}if("transform"===a.type){if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(e=>e8(e)?Promise.resolve(a.transform(e.value,n)).then(e=>({status:t.value,value:e})):e);{let e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!e8(e))return e;let s=a.transform(e.value,n);if(s instanceof Promise)throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:s}}}s.assertNever(a)}}tW.create=(e,t,r)=>new tW({schema:e,typeName:d.ZodEffects,effect:t,...tr(r)}),tW.createWithPreprocess=(e,t,r)=>new tW({schema:t,effect:{type:"preprocess",transform:e},typeName:d.ZodEffects,...tr(r)});class tY extends ta{_parse(e){return this._getType(e)===eB.undefined?e9(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}tY.create=(e,t)=>new tY({innerType:e,typeName:d.ZodOptional,...tr(t)});class tG extends ta{_parse(e){return this._getType(e)===eB.null?e9(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}tG.create=(e,t)=>new tG({innerType:e,typeName:d.ZodNullable,...tr(t)});class tX extends ta{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===eB.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}tX.create=(e,t)=>new tX({innerType:e,typeName:d.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...tr(t)});class tK extends ta{_parse(e){let{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},a=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return e4(a)?a.then(e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new eY(r.common.issues)},input:r.data})})):{status:"valid",value:"valid"===a.status?a.value:this._def.catchValue({get error(){return new eY(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}tK.create=(e,t)=>new tK({innerType:e,typeName:d.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...tr(t)});class tJ extends ta{_parse(e){if(this._getType(e)!==eB.nan){let t=this._getOrReturnCtx(e);return eQ(t,{code:eW.invalid_type,expected:eB.nan,received:t.parsedType}),e1}return{status:"valid",value:e.data}}}tJ.create=e=>new tJ({typeName:d.ZodNaN,...tr(e)});let tQ=Symbol("zod_brand");class t0 extends ta{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class t1 extends ta{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?e1:"dirty"===e.status?(t.dirty(),e2(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})})();{let e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?e1:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new t1({in:e,out:t,typeName:d.ZodPipeline})}}class t2 extends ta{_parse(e){let t=this._def.innerType._parse(e),r=e=>(e8(e)&&(e.value=Object.freeze(e.value)),e);return e4(t)?t.then(e=>r(e)):r(t)}unwrap(){return this._def.innerType}}function t9(e,t={},r){return e?tS.create().superRefine((a,s)=>{var n,i;if(!e(a)){let e="function"==typeof t?t(a):"string"==typeof t?{message:t}:t,o=null===(i=null!==(n=e.fatal)&&void 0!==n?n:r)||void 0===i||i;s.addIssue({code:"custom",..."string"==typeof e?{message:e}:e,fatal:o})}}):tS.create()}t2.create=(e,t)=>new t2({innerType:e,typeName:d.ZodReadonly,...tr(t)});let t3={object:tT.lazycreate};!function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"}(d||(d={}));let t5=tv.create,t8=tx.create,t4=tJ.create,t6=tb.create,t7=t_.create,re=tw.create,rt=tk.create,rr=tj.create,ra=tC.create,rs=tS.create,rn=tN.create,ri=tA.create,ro=tO.create,rl=tE.create,rd=tT.create,rc=tT.strictCreate,ru=tP.create,rf=tZ.create,rm=tD.create,rp=tV.create,rh=t$.create,ry=tR.create,rg=tF.create,rv=tI.create,rx=tL.create,rb=tz.create,r_=tq.create,rw=tB.create,rk=tH.create,rj=tW.create,rC=tY.create,rS=tG.create,rN=tW.createWithPreprocess,rA=t1.create;var rO=Object.freeze({__proto__:null,defaultErrorMap:eG,setErrorMap:function(e){eX=e},getErrorMap:eK,makeIssue:eJ,EMPTY_PATH:[],addIssueToContext:eQ,ParseStatus:e0,INVALID:e1,DIRTY:e2,OK:e9,isAborted:e3,isDirty:e5,isValid:e8,isAsync:e4,get util(){return s},get objectUtil(){return n},ZodParsedType:eB,getParsedType:eH,ZodType:ta,datetimeRegex:tg,ZodString:tv,ZodNumber:tx,ZodBigInt:tb,ZodBoolean:t_,ZodDate:tw,ZodSymbol:tk,ZodUndefined:tj,ZodNull:tC,ZodAny:tS,ZodUnknown:tN,ZodNever:tA,ZodVoid:tO,ZodArray:tE,ZodObject:tT,ZodUnion:tP,ZodDiscriminatedUnion:tZ,ZodIntersection:tD,ZodTuple:tV,ZodRecord:t$,ZodMap:tR,ZodSet:tF,ZodFunction:tI,ZodLazy:tL,ZodLiteral:tz,ZodEnum:tq,ZodNativeEnum:tB,ZodPromise:tH,ZodEffects:tW,ZodTransformer:tW,ZodOptional:tY,ZodNullable:tG,ZodDefault:tX,ZodCatch:tK,ZodNaN:tJ,BRAND:tQ,ZodBranded:t0,ZodPipeline:t1,ZodReadonly:t2,custom:t9,Schema:ta,ZodSchema:ta,late:t3,get ZodFirstPartyTypeKind(){return d},coerce:{string:e=>tv.create({...e,coerce:!0}),number:e=>tx.create({...e,coerce:!0}),boolean:e=>t_.create({...e,coerce:!0}),bigint:e=>tb.create({...e,coerce:!0}),date:e=>tw.create({...e,coerce:!0})},any:rs,array:rl,bigint:t6,boolean:t7,date:re,discriminatedUnion:rf,effect:rj,enum:r_,function:rv,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>t9(t=>t instanceof e,t),intersection:rm,lazy:rx,literal:rb,map:ry,nan:t4,nativeEnum:rw,never:ri,null:ra,nullable:rS,number:t8,object:rd,oboolean:()=>t7().optional(),onumber:()=>t8().optional(),optional:rC,ostring:()=>t5().optional(),pipeline:rA,preprocess:rN,promise:rk,record:rh,set:rg,strictObject:rc,string:t5,symbol:rt,transformer:rj,tuple:rp,undefined:rr,union:ru,unknown:rn,void:ro,NEVER:e1,ZodIssueCode:eW,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:eY});/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let rE=k("SquareUserRound",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);var rT=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{a.insertRule(e,a.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),rP=Math.abs,rM=String.fromCharCode,rZ=Object.assign;function rD(e,t,r){return e.replace(t,r)}function rV(e,t){return e.indexOf(t)}function r$(e,t){return 0|e.charCodeAt(t)}function rR(e,t,r){return e.slice(t,r)}function rF(e){return e.length}function rI(e,t){return t.push(e),e}var rL=1,rz=1,rU=0,rq=0,rB=0,rH="";function rW(e,t,r,a,s,n,i){return{value:e,root:t,parent:r,type:a,props:s,children:n,line:rL,column:rz,length:i,return:""}}function rY(e,t){return rZ(rW("",null,null,"",null,null,0),e,{length:-e.length},t)}function rG(){return rB=rq<rU?r$(rH,rq++):0,rz++,10===rB&&(rz=1,rL++),rB}function rX(){return r$(rH,rq)}function rK(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rJ(e){return rL=rz=1,rU=rF(rH=e),rq=0,[]}function rQ(e){var t,r;return(t=rq-1,r=function e(t){for(;rG();)switch(rB){case t:return rq;case 34:case 39:34!==t&&39!==t&&e(rB);break;case 40:41===t&&e(t);break;case 92:rG()}return rq}(91===e?e+2:40===e?e+1:e),rR(rH,t,r)).trim()}var r0="-ms-",r1="-moz-",r2="-webkit-",r9="comm",r3="rule",r5="decl",r8="@keyframes";function r4(e,t){for(var r="",a=e.length,s=0;s<a;s++)r+=t(e[s],s,e,t)||"";return r}function r6(e,t,r,a){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case r5:return e.return=e.return||e.value;case r9:return"";case r8:return e.return=e.value+"{"+r4(e.children,a)+"}";case r3:e.value=e.props.join(",")}return rF(r=r4(e.children,a))?e.return=e.value+"{"+r+"}":""}function r7(e){var t=e.length;return function(r,a,s,n){for(var i="",o=0;o<t;o++)i+=e[o](r,a,s,n)||"";return i}}function ae(e){var t;return t=function e(t,r,a,s,n,i,o,l,d){for(var c,u=0,f=0,m=o,p=0,h=0,y=0,g=1,v=1,x=1,b=0,_="",w=n,k=i,j=s,C=_;v;)switch(y=b,b=rG()){case 40:if(108!=y&&58==r$(C,m-1)){-1!=rV(C+=rD(rQ(b),"&","&\f"),"&\f")&&(x=-1);break}case 34:case 39:case 91:C+=rQ(b);break;case 9:case 10:case 13:case 32:C+=function(e){for(;rB=rX();)if(rB<33)rG();else break;return rK(e)>2||rK(rB)>3?"":" "}(y);break;case 92:C+=function(e,t){for(var r;--t&&rG()&&!(rB<48)&&!(rB>102)&&(!(rB>57)||!(rB<65))&&(!(rB>70)||!(rB<97)););return r=rq+(t<6&&32==rX()&&32==rG()),rR(rH,e,r)}(rq-1,7);continue;case 47:switch(rX()){case 42:case 47:rI(rW(c=function(e,t){for(;rG();)if(e+rB===57)break;else if(e+rB===84&&47===rX())break;return"/*"+rR(rH,t,rq-1)+"*"+rM(47===e?e:rG())}(rG(),rq),r,a,r9,rM(rB),rR(c,2,-2),0),d);break;default:C+="/"}break;case 123*g:l[u++]=rF(C)*x;case 125*g:case 59:case 0:switch(b){case 0:case 125:v=0;case 59+f:-1==x&&(C=rD(C,/\f/g,"")),h>0&&rF(C)-m&&rI(h>32?ar(C+";",s,a,m-1):ar(rD(C," ","")+";",s,a,m-2),d);break;case 59:C+=";";default:if(rI(j=at(C,r,a,u,f,n,l,_,w=[],k=[],m),i),123===b){if(0===f)e(C,r,j,j,w,i,m,l,k);else switch(99===p&&110===r$(C,3)?100:p){case 100:case 108:case 109:case 115:e(t,j,j,s&&rI(at(t,j,j,0,0,n,l,_,n,w=[],m),k),n,k,m,l,s?w:k);break;default:e(C,j,j,j,[""],k,0,l,k)}}}u=f=h=0,g=x=1,_=C="",m=o;break;case 58:m=1+rF(C),h=y;default:if(g<1){if(123==b)--g;else if(125==b&&0==g++&&125==(rB=rq>0?r$(rH,--rq):0,rz--,10===rB&&(rz=1,rL--),rB))continue}switch(C+=rM(b),b*g){case 38:x=f>0?1:(C+="\f",-1);break;case 44:l[u++]=(rF(C)-1)*x,x=1;break;case 64:45===rX()&&(C+=rQ(rG())),p=rX(),f=m=rF(_=C+=function(e){for(;!rK(rX());)rG();return rR(rH,e,rq)}(rq)),b++;break;case 45:45===y&&2==rF(C)&&(g=0)}}return i}("",null,null,null,[""],e=rJ(e),0,[0],e),rH="",t}function at(e,t,r,a,s,n,i,o,l,d,c){for(var u=s-1,f=0===s?n:[""],m=f.length,p=0,h=0,y=0;p<a;++p)for(var g=0,v=rR(e,u+1,u=rP(h=i[p])),x=e;g<m;++g)(x=(h>0?f[g]+" "+v:rD(v,/&\f/g,f[g])).trim())&&(l[y++]=x);return rW(e,t,r,0===s?r3:o,l,d,c)}function ar(e,t,r,a){return rW(e,t,r,r5,rR(e,0,a),rR(e,a+1,-1),a)}function aa(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var as="undefined"!=typeof document,an=function(e,t,r){for(var a=0,s=0;a=s,s=rX(),38===a&&12===s&&(t[r]=1),!rK(s);)rG();return rR(rH,e,rq)},ai=function(e,t){var r=-1,a=44;do switch(rK(a)){case 0:38===a&&12===rX()&&(t[r]=1),e[r]+=an(rq-1,t,r);break;case 2:e[r]+=rQ(a);break;case 4:if(44===a){e[++r]=58===rX()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=rM(a)}while(a=rG());return e},ao=function(e,t){var r;return r=ai(rJ(e),t),rH="",r},al=new WeakMap,ad=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,a=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||al.get(r))&&!a){al.set(e,!0);for(var s=[],n=ao(t,s),i=r.props,o=0,l=0;o<n.length;o++)for(var d=0;d<i.length;d++,l++)e.props[l]=s[o]?n[o].replace(/&\f/g,i[d]):i[d]+" "+n[o]}}},ac=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},au=as?void 0:function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var a=e(r);return t.set(r,a),a}}(function(){return aa(function(){var e={};return function(t){return e[t]}})}),af=[function(e,t,r,a){if(e.length>-1&&!e.return)switch(e.type){case r5:e.return=function e(t,r){switch(45^r$(t,0)?(((r<<2^r$(t,0))<<2^r$(t,1))<<2^r$(t,2))<<2^r$(t,3):0){case 5103:return r2+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return r2+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return r2+t+r1+t+r0+t+t;case 6828:case 4268:return r2+t+r0+t+t;case 6165:return r2+t+r0+"flex-"+t+t;case 5187:return r2+t+rD(t,/(\w+).+(:[^]+)/,r2+"box-$1$2"+r0+"flex-$1$2")+t;case 5443:return r2+t+r0+"flex-item-"+rD(t,/flex-|-self/,"")+t;case 4675:return r2+t+r0+"flex-line-pack"+rD(t,/align-content|flex-|-self/,"")+t;case 5548:return r2+t+r0+rD(t,"shrink","negative")+t;case 5292:return r2+t+r0+rD(t,"basis","preferred-size")+t;case 6060:return r2+"box-"+rD(t,"-grow","")+r2+t+r0+rD(t,"grow","positive")+t;case 4554:return r2+rD(t,/([^-])(transform)/g,"$1"+r2+"$2")+t;case 6187:return rD(rD(rD(t,/(zoom-|grab)/,r2+"$1"),/(image-set)/,r2+"$1"),t,"")+t;case 5495:case 3959:return rD(t,/(image-set\([^]*)/,r2+"$1$`$1");case 4968:return rD(rD(t,/(.+:)(flex-)?(.*)/,r2+"box-pack:$3"+r0+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+r2+t+t;case 4095:case 3583:case 4068:case 2532:return rD(t,/(.+)-inline(.+)/,r2+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rF(t)-1-r>6)switch(r$(t,r+1)){case 109:if(45!==r$(t,r+4))break;case 102:return rD(t,/(.+:)(.+)-([^]+)/,"$1"+r2+"$2-$3$1"+r1+(108==r$(t,r+3)?"$3":"$2-$3"))+t;case 115:return~rV(t,"stretch")?e(rD(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==r$(t,r+1))break;case 6444:switch(r$(t,rF(t)-3-(~rV(t,"!important")&&10))){case 107:return rD(t,":",":"+r2)+t;case 101:return rD(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+r2+(45===r$(t,14)?"inline-":"")+"box$3$1"+r2+"$2$3$1"+r0+"$2box$3")+t}break;case 5936:switch(r$(t,r+11)){case 114:return r2+t+r0+rD(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return r2+t+r0+rD(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return r2+t+r0+rD(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return r2+t+r0+t+t}return t}(e.value,e.length);break;case r8:return r4([rY(e,{value:rD(e.value,"@","@"+r2)})],a);case r3:if(e.length){var s,n;return s=e.props,n=function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return r4([rY(e,{props:[rD(t,/:(read-\w+)/,":"+r1+"$1")]})],a);case"::placeholder":return r4([rY(e,{props:[rD(t,/:(plac\w+)/,":"+r2+"input-$1")]}),rY(e,{props:[rD(t,/:(plac\w+)/,":"+r1+"$1")]}),rY(e,{props:[rD(t,/:(plac\w+)/,r0+"input-$1")]})],a)}return""},s.map(n).join("")}}}],am=function(e){var t=e.key;if(as&&"css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var a=e.stylisPlugins||af,s={},n=[];as&&(l=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)s[t[r]]=!0;n.push(e)}));var i=[ad,ac];if(as){var o,l,d,c,u=[r6,(o=function(e){c.insert(e)},function(e){!e.root&&(e=e.return)&&o(e)})],f=r7(i.concat(a,u));d=function(e,t,r,a){c=r,r4(ae(e?e+"{"+t.styles+"}":t.styles),f),a&&(y.inserted[t.name]=!0)}}else{var m=r7(i.concat(a,[r6])),p=au(a)(t),h=function(e,t){var r=t.name;return void 0===p[r]&&(p[r]=r4(ae(e?e+"{"+t.styles+"}":t.styles),m)),p[r]};d=function(e,t,r,a){var s=t.name,n=h(e,t);return void 0===y.compat?(a&&(y.inserted[s]=!0),n):a?void(y.inserted[s]=n):n}}var y={key:t,sheet:new rT({key:t,container:l,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:d};return y.sheet.hydrate(n),y},ap="undefined"!=typeof document;function ah(e,t,r){var a="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):a+=r+" "}),a}var ay=function(e,t,r){var a=e.key+"-"+t.name;(!1===r||!1===ap&&void 0!==e.compat)&&void 0===e.registered[a]&&(e.registered[a]=t.styles)},ag=function(e,t,r){ay(e,t,r);var a=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var s="",n=t;do{var i=e.insert(t===n?"."+a:"",n,e.sheet,!0);ap||void 0===i||(s+=i),n=n.next}while(void 0!==n);if(!ap&&0!==s.length)return s}},av={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ax=/[A-Z]|^ms/g,ab=/_EMO_([^_]+?)_([^]*?)_EMO_/g,a_=function(e){return 45===e.charCodeAt(1)},aw=function(e){return null!=e&&"boolean"!=typeof e},ak=aa(function(e){return a_(e)?e:e.replace(ax,"-$&").toLowerCase()}),aj=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ab,function(e,t,r){return c={name:t,styles:r,next:c},t})}return 1===av[e]||a_(e)||"number"!=typeof t||0===t?t:t+"px"};function aC(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return c={name:r.name,styles:r.styles,next:c},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)c={name:a.name,styles:a.styles,next:c},a=a.next;return r.styles+";"}return function(e,t,r){var a="";if(Array.isArray(r))for(var s=0;s<r.length;s++)a+=aC(e,t,r[s])+";";else for(var n in r){var i=r[n];if("object"!=typeof i)null!=t&&void 0!==t[i]?a+=n+"{"+t[i]+"}":aw(i)&&(a+=ak(n)+":"+aj(n,i)+";");else if(Array.isArray(i)&&"string"==typeof i[0]&&(null==t||void 0===t[i[0]]))for(var o=0;o<i.length;o++)aw(i[o])&&(a+=ak(n)+":"+aj(n,i[o])+";");else{var l=aC(e,t,i);switch(n){case"animation":case"animationName":a+=ak(n)+":"+l+";";break;default:a+=n+"{"+l+"}"}}}return a}(e,t,r);case"function":if(void 0!==e){var s=c,n=r(e);return c=s,aC(e,t,n)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var aS=/label:\s*([^\s;\n{]+)\s*(;|$)/g;function aN(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a,s=!0,n="";c=void 0;var i=e[0];null==i||void 0===i.raw?(s=!1,n+=aC(r,t,i)):n+=i[0];for(var o=1;o<e.length;o++)n+=aC(r,t,e[o]),s&&(n+=i[o]);aS.lastIndex=0;for(var l="";null!==(a=aS.exec(n));)l+="-"+a[1];return{name:function(e){for(var t,r=0,a=0,s=e.length;s>=4;++a,s-=4)t=(65535&(t=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(s){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(n)+l,styles:n,next:c}}var aA=!!f.useInsertionEffect&&f.useInsertionEffect,aO="undefined"!=typeof document&&aA||function(e){return e()};aA||f.useLayoutEffect;var aE="undefined"!=typeof document,aT=f.createContext("undefined"!=typeof HTMLElement?am({key:"css"}):null);aT.Provider;var aP=function(e){return(0,f.forwardRef)(function(t,r){return e(t,(0,f.useContext)(aT),r)})};aE||(aP=function(e){return function(t){var r=(0,f.useContext)(aT);return null===r?(r=am({key:"css"}),f.createElement(aT.Provider,{value:r},e(t,r))):e(t,r)}});var aM=f.createContext({}),aZ={}.hasOwnProperty,aD="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",aV=function(e,t){var r={};for(var a in t)aZ.call(t,a)&&(r[a]=t[a]);return r[aD]=e,r},a$=function(e){var t=e.cache,r=e.serialized,a=e.isStringTag;ay(t,r,a);var s=aO(function(){return ag(t,r,a)});if(!aE&&void 0!==s){for(var n,i=r.name,o=r.next;void 0!==o;)i+=" "+o.name,o=o.next;return f.createElement("style",((n={})["data-emotion"]=t.key+" "+i,n.dangerouslySetInnerHTML={__html:s},n.nonce=t.sheet.nonce,n))}return null},aR=aP(function(e,t,r){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var s=e[aD],n=[a],i="";"string"==typeof e.className?i=ah(t.registered,n,e.className):null!=e.className&&(i=e.className+" ");var o=aN(n,void 0,f.useContext(aM));i+=t.key+"-"+o.name;var l={};for(var d in e)aZ.call(e,d)&&"css"!==d&&d!==aD&&(l[d]=e[d]);return l.className=i,r&&(l.ref=r),f.createElement(f.Fragment,null,f.createElement(a$,{cache:t,serialized:o,isStringTag:"string"==typeof s}),f.createElement(s,l))});r(5684),r(9997);var aF=u.Fragment;function aI(e,t,r){return aZ.call(t,"css")?u.jsx(aR,aV(e,t),r):u.jsx(e,t,r)}function aL(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return aN(t)}var az=function(){var e=aL.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},aU=function e(t){for(var r=t.length,a=0,s="";a<r;a++){var n=t[a];if(null!=n){var i=void 0;switch(typeof n){case"boolean":break;case"object":if(Array.isArray(n))i=e(n);else for(var o in i="",n)n[o]&&o&&(i&&(i+=" "),i+=o);break;default:i=n}i&&(s&&(s+=" "),s+=i)}}return s},aq=function(e){var t,r=e.cache,a=e.serializedArr,s=aO(function(){for(var e="",t=0;t<a.length;t++){var s=ag(r,a[t],!1);aE||void 0===s||(e+=s)}if(!aE)return e});return aE||0===s.length?null:f.createElement("style",((t={})["data-emotion"]=r.key+" "+a.map(function(e){return e.name}).join(" "),t.dangerouslySetInnerHTML={__html:s},t.nonce=r.sheet.nonce,t))},aB=aP(function(e,t){var r=[],a=function(){for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];var n=aN(a,t.registered);return r.push(n),ay(t,n,!1),t.key+"-"+n.name},s={css:a,cx:function(){for(var e,r,s,n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];return s=ah(t.registered,r=[],e=aU(i)),r.length<2?e:s+a(r)},theme:f.useContext(aM)},n=e.children(s);return f.createElement(f.Fragment,null,f.createElement(aq,{cache:t,serializedArr:r}),n)}),aH=Object.defineProperty,aW=(e,t,r)=>t in e?aH(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,aY=(e,t,r)=>aW(e,"symbol"!=typeof t?t+"":t,r),aG=new Map,aX=new WeakMap,aK=0,aJ=void 0;function aQ(e,t,r={},a=aJ){if(void 0===window.IntersectionObserver&&void 0!==a){let s=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}let{id:s,observer:n,elements:i}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(aX.has(r)||(aK+=1,aX.set(r,aK.toString())),aX.get(r)):"0":e[t]}`}).toString(),r=aG.get(t);if(!r){let a;let s=new Map,n=new IntersectionObserver(t=>{t.forEach(t=>{var r;let n=t.isIntersecting&&a.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=n),null==(r=s.get(t.target))||r.forEach(e=>{e(n,t)})})},e);a=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:n,elements:s},aG.set(t,r)}return r}(r),o=i.get(e)||[];return i.has(e)||i.set(e,o),o.push(t),n.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(i.delete(e),n.unobserve(e)),0===i.size&&(n.disconnect(),aG.delete(s))}}var a0=class extends f.Component{constructor(e){super(e),aY(this,"node",null),aY(this,"_unobserveCb",null),aY(this,"handleNode",e=>{!this.node||(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),aY(this,"handleChange",(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:e,root:t,rootMargin:r,trackVisibility:a,delay:s,fallbackInView:n}=this.props;this._unobserveCb=aQ(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:a,delay:s},n)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:e}=this.props;if("function"==typeof e){let{inView:t,entry:r}=this.state;return e({inView:t,entry:r,ref:this.handleNode})}let{as:t,triggerOnce:r,threshold:a,root:s,rootMargin:n,onChange:i,skip:o,trackVisibility:l,delay:d,initialInView:c,fallbackInView:u,...m}=this.props;return f.createElement(t||"div",{ref:this.handleNode,...m},e)}};function a1({threshold:e,delay:t,trackVisibility:r,rootMargin:a,root:s,triggerOnce:n,skip:i,initialInView:o,fallbackInView:l,onChange:d}={}){var c;let[u,m]=f.useState(null),p=f.useRef(),[h,y]=f.useState({inView:!!o,entry:void 0});p.current=d,f.useEffect(()=>{let o;if(!i&&u)return o=aQ(u,(e,t)=>{y({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&n&&o&&(o(),o=void 0)},{root:s,rootMargin:a,threshold:e,trackVisibility:r,delay:t},l),()=>{o&&o()}},[Array.isArray(e)?e.toString():e,u,s,a,n,i,r,l,t]);let g=null==(c=h.entry)?void 0:c.target,v=f.useRef();u||!g||n||i||v.current===g||(v.current=g,y({inView:!!o,entry:void 0}));let x=[m,h.inView,h.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}var a2=r(7191);az`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,az`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,az`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,az`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,az`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,az`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,az`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,az`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,az`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,az`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,az`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,az`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,az`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;let a9=az`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,a3=az`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,a5=az`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,a8=az`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,a4=az`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,a6=az`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,a7=az`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,se=az`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,st=az`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sr=az`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sa=az`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ss=az`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sn=az`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function si(e){var t;return t=()=>null,r=>r?e():t()}function so(e){return si(()=>({opacity:0}))(e)}let sl=e=>{let{cascade:t=!1,damping:r=.5,delay:a=0,duration:s=1e3,fraction:n=0,keyframes:i=a6,triggerOnce:o=!1,className:l,style:d,childClassName:c,childStyle:u,children:m,onVisibilityChange:p}=e,h=(0,f.useMemo)(()=>(function({duration:e=1e3,delay:t=0,timingFunction:r="ease",keyframes:a=a6,iterationCount:s=1}){return aL`
    animation-duration: ${e}ms;
    animation-timing-function: ${r};
    animation-delay: ${t}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${s};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:i,duration:s}),[s,i]);return void 0==m?null:!function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}(m)?(0,a2.isFragment)(m)?aI(su,{...e,animationStyles:h}):aI(aF,{children:f.Children.map(m,(i,m)=>{if(!(0,f.isValidElement)(i))return null;let y=a+(t?m*s*r:0);switch(i.type){case"ol":case"ul":return aI(aB,{children:({cx:t})=>aI(i.type,{...i.props,className:t(l,i.props.className),style:Object.assign({},d,i.props.style),children:aI(sl,{...e,children:i.props.children})})});case"li":return aI(a0,{threshold:n,triggerOnce:o,onChange:p,children:({inView:e,ref:t})=>aI(aB,{children:({cx:r})=>aI(i.type,{...i.props,ref:t,className:r(c,i.props.className),css:si(()=>h)(e),style:Object.assign({},u,i.props.style,so(!e),{animationDelay:y+"ms"})})})});default:return aI(a0,{threshold:n,triggerOnce:o,onChange:p,children:({inView:e,ref:t})=>aI("div",{ref:t,className:l,css:si(()=>h)(e),style:Object.assign({},d,so(!e),{animationDelay:y+"ms"}),children:aI(aB,{children:({cx:e})=>aI(i.type,{...i.props,className:e(c,i.props.className),style:Object.assign({},u,i.props.style)})})})})}})}):aI(sc,{...e,animationStyles:h,children:String(m)})},sd={display:"inline-block",whiteSpace:"pre"},sc=e=>{var t,r;let{animationStyles:a,cascade:s=!1,damping:n=.5,delay:i=0,duration:o=1e3,fraction:l=0,triggerOnce:d=!1,className:c,style:u,children:f,onVisibilityChange:m}=e,{ref:p,inView:h}=a1({triggerOnce:d,threshold:l,onChange:m});return(t=()=>aI("div",{ref:p,className:c,style:Object.assign({},u,sd),children:f.split("").map((e,t)=>aI("span",{css:si(()=>a)(h),style:{animationDelay:i+t*o*n+"ms"},children:e},t))}),r=()=>aI(su,{...e,children:f}),e=>e?t():r())(s)},su=e=>{let{animationStyles:t,fraction:r=0,triggerOnce:a=!1,className:s,style:n,children:i,onVisibilityChange:o}=e,{ref:l,inView:d}=a1({triggerOnce:a,threshold:r,onChange:o});return aI("div",{ref:l,className:s,css:si(()=>t)(d),style:Object.assign({},n,so(!d)),children:i})},sf=(az`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,az`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,az`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,az`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,az`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,az`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,az`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,az`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,az`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,az`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`,az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`),sm=az`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,sp=az`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,sh=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,sy=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,sg=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,sv=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,sx=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,sb=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,s_=az`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,sw=az`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,sk=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,sj=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,sC=e=>{let{big:t=!1,direction:r,reverse:a=!1,...s}=e;return aI(sl,{keyframes:(0,f.useMemo)(()=>(function(e,t,r){switch(r){case"bottom-left":return t?sm:a3;case"bottom-right":return t?sp:a5;case"down":return e?t?sy:a4:t?sh:a8;case"left":return e?t?sv:a7:t?sg:a6;case"right":return e?t?sb:st:t?sx:se;case"top-left":return t?s_:sr;case"top-right":return t?sw:sa;case"up":return e?t?sj:sn:t?sk:ss;default:return t?sf:a9}})(t,a,r),[t,r,a]),...s})};az`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,az`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,az`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,az`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,az`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,az`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,az`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,az`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,az`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,az`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,az`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,az`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,az`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,az`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,az`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,az`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,az`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,az`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,az`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,az`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,az`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,az`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,az`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,az`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,az`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,az`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,az`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,az`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,az`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,az`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,az`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,az`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,az`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,az`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,az`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,az`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;let sS=({isSwitchOn:e,handleSwitchChange:t,register:r,errors:a})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("h5",{className:"flex items-center gap-2",children:[u.jsx(rE,{className:"w-5 h-5"})," Identifica\xe7\xe3o"]}),(0,u.jsxs)("div",{className:"mt-4 flex items-center gap-4",children:[(0,u.jsxs)("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",checked:e,onChange:t,className:"sr-only peer"}),u.jsx("div",{className:"w-11 h-6 bg-[#FF5959] peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:bg-[#FF5959] transition-all duration-300 ease-in-out"}),u.jsx("div",{className:"absolute left-1 top-1 w-4 h-4 bg-[#FF5959] peer-checked:bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out peer-checked:translate-x-5"})]}),u.jsx("label",{className:"text-sm font-medium",children:"Quero me identificar"})]}),e&&(0,u.jsxs)(sC,{direction:"top",delay:10,cascade:!0,damping:.1,triggerOnce:!0,children:[(0,u.jsxs)("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-sm font-medium",children:"Nome"}),u.jsx("input",{type:"text",placeholder:"Digite seu nome",...r("name"),className:"w-full p-2 border-[1px] border-gray-700 rounded"}),a.name&&u.jsx("p",{className:"text-red-500 text-sm",children:a.name.message})]}),(0,u.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[(0,u.jsxs)("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-sm font-medium",children:"E-mail"}),u.jsx("input",{type:"email",placeholder:"Digite seu e-mail",...r("email"),className:"w-full p-2 border-[1px] border-gray-700 rounded"}),a.email&&u.jsx("p",{className:"text-red-500 text-sm",children:a.email.message})]}),(0,u.jsxs)("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-sm font-medium",children:"Telefone"}),u.jsx("input",{type:"text",placeholder:"Digite seu telefone",...r("phone"),className:"w-full p-2 border-[1px] border-gray-700 rounded"}),a.phone&&u.jsx("p",{className:"text-red-500 text-sm",children:a.phone.message})]})]})]})]}),sN=k("FileLock2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]),sA=({register:e,errors:t})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("h5",{className:"flex items-center gap-2 mt-6",children:["        ",u.jsx(sN,{className:"w-5 h-5"}),"Quem vai ler a sua mensagem?"]}),(0,u.jsxs)("div",{className:"space-y-2",children:[(0,u.jsxs)("label",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"radio",value:"Qualquer pessoa que possa me ajudar",...e("recipient"),defaultChecked:!0,className:"peer hidden"}),u.jsx("div",{className:"w-4 h-4 rounded-full border border-gray-600 bg-gray-700 transition-all duration-300 ease-in-out peer-checked:bg-[#4B2DBB] peer-checked:border-none"}),u.jsx("p",{className:"text-sm dark:text-gray-300 dark:peer-checked:text-gray-100 transition-all duration-300 ease-in-out",children:"Qualquer pessoa que possa me ajudar"})]}),(0,u.jsxs)("label",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"radio",value:"Uma mulher",...e("recipient"),className:"peer hidden"}),u.jsx("div",{className:"w-4 h-4 rounded-full border border-gray-600 bg-gray-700 transition-all duration-300 ease-in-out peer-checked:bg-[#4B2DBB] peer-checked:border-none"}),u.jsx("p",{className:"text-sm dark:text-gray-300 dark:peer-checked:text-gray-100 transition-all duration-300 ease-in-out",children:"Uma mulher"})]}),(0,u.jsxs)("label",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"radio",value:"Um homem",...e("recipient"),className:"peer hidden"}),u.jsx("div",{className:"w-4 h-4 rounded-full border border-gray-600 bg-gray-700 transition-all duration-300 ease-in-out peer-checked:bg-[#4B2DBB] peer-checked:border-none"}),u.jsx("p",{className:"text-sm dark:text-gray-300 dark:peer-checked:text-gray-100 transition-all duration-300 ease-in-out",children:"Um homem"})]}),t.recipient&&u.jsx("p",{className:"text-red-500 text-sm",children:t.recipient.message})]})]}),sO=k("Text",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]]),sE=({register:e,errors:t})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("h5",{className:"flex items-center gap-2 mt-6",children:[u.jsx(sO,{className:"w-5 h-5"})," Mensagem"]}),(0,u.jsxs)("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-sm font-medium",children:"T\xedtulo"}),u.jsx("input",{type:"text",placeholder:"T\xedtulo do assunto",...e("title"),className:"w-full p-2  border-[1px] border-gray-700 rounded"}),t.title&&u.jsx("p",{className:"text-red-500 text-sm",children:t.title.message})]}),(0,u.jsxs)("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-sm font-medium",children:"Descri\xe7\xe3o"}),u.jsx("textarea",{placeholder:"Escreva a sua mensagem com o m\xe1ximo de detalhes poss\xedvel",...e("description"),className:"w-full p-2 border-[1px] border-gray-700 rounded",rows:4}),t.description&&u.jsx("p",{className:"text-red-500 text-sm",children:t.description.message})]})]}),sT=k("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),sP=k("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]),sM=k("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]),sZ=({selectedFiles:e,handleFileChange:t,removeFile:r,fileError:a})=>(0,u.jsxs)("div",{className:"space-y-2",children:[u.jsx("input",{type:"file",multiple:!0,onChange:t,className:"hidden",id:"file-input"}),(0,u.jsxs)("div",{className:"flex align-middle items-center",children:[u.jsx("label",{htmlFor:"file-input",className:"inline-block bg-gray-300 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/80 transition-colors",children:(0,u.jsxs)("p",{className:"flex gap-2 m-1",children:[u.jsx(sT,{className:"text-blue-400"}),"Selecionar"]})}),(0,u.jsxs)("p",{className:"pl-4",children:[e.length," Arquivos Enviados"]})]}),a&&u.jsx("p",{className:"text-red-500 text-sm",children:a}),e.length>0&&u.jsx("div",{className:"mt-4 space-y-2",children:e.map((e,t)=>(0,u.jsxs)("div",{className:"flex items-center justify-between p-2 border rounded",children:[(0,u.jsxs)("div",{className:"flex flex-col",children:[(0,u.jsxs)("div",{className:"flex items-center gap-2",children:[u.jsx(sP,{className:"w-4 h-4"}),u.jsx("span",{className:"text-sm",children:e.name})]}),(0,u.jsxs)("span",{className:"text-sm",children:[(e.size/1048576).toFixed(2)," MB"]})]}),u.jsx("button",{type:"button",onClick:()=>r(t),className:"text-red-500 hover:text-red-700",children:u.jsx(sM,{className:"w-4 h-4"})})]},t))})]}),sD={_origin:"https://api.emailjs.com"},sV=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class s${constructor(e){this.status=e.status,this.text=e.responseText}}let sR=(e,t,r={})=>new Promise((a,s)=>{let n=new XMLHttpRequest;n.addEventListener("load",({target:e})=>{let t=new s$(e);200===t.status||"OK"===t.text?a(t):s(t)}),n.addEventListener("error",({target:e})=>{s(new s$(e))}),n.open("POST",sD._origin+e,!0),Object.keys(r).forEach(e=>{n.setRequestHeader(e,r[e])}),n.send(t)}),sF={send:(e,t,r,a)=>{let s=a||sD._userID;return sV(s,e,t),sR("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:s,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})}},sI=async e=>{try{let t=(await Promise.all(e.archives.map(async e=>{let t=new FormData;t.append("file",e.base64),t.append("upload_preset","ml_default");let r=await fetch("cloudinary://621735344721143:OS2--6pBf0gTFS1jQzzriophWBA@dz1fusqtd",{method:"POST",body:t}),a=await r.json();if(a.secure_url)return a.secure_url;throw Error("Erro ao carregar o arquivo no Cloudinary.")}))).map(e=>`<p><a href="${e}" target="_blank">Abrir Arquivo</a></p>`).join(""),r={name:e.name,email:e.email,phone:e.phone,title:e.title,description:e.description,recipient:e.recipient,to_email:e.to_email,archives:t},a=await sF.send("service_trz5cl7","template_f4hey8b",r,"xhc1wEZ4x7ljz1yaq");return{success:!0,response:a}}catch(e){return console.error("Erro ao enviar e-mail:",e),{success:!1,error:e}}};var sL=r(2391);let sz=rO.object({name:rO.string().min(3,"O nome deve ter pelo menos 3 caracteres").optional(),email:rO.string().email("E-mail inv\xe1lido").optional(),phone:rO.string().min(11,"Telefone inv\xe1lido").optional(),title:rO.string().min(5,"O t\xedtulo deve ter pelo menos 5 caracteres"),description:rO.string().min(10,"A descri\xe7\xe3o deve ter pelo menos 10 caracteres"),recipient:rO.string().min(1,"Selecione uma op\xe7\xe3o"),files:rO.unknown().optional()}),sU=()=>{let[e,t]=(0,f.useState)(!1),[r,a]=(0,f.useState)([]),[s,n]=(0,f.useState)(""),{toast:i}=(0,sL.pm)(),{register:o,handleSubmit:l,formState:{errors:d},reset:c,clearErrors:m}=eR({resolver:eq(sz)}),p=async t=>{if(r.length>20){n("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}t.recipient&&"Qualquer pessoa que possa me ajudar"!==t.recipient?"Uma mulher"===t.recipient?t.to_email="antoniol.carvalho49@gmail.com":"Um homem"===t.recipient&&(t.to_email="antoniol.carvalho@hotmail.com"):t.to_email="antoniol.carvalho49@gmail.com,antoniol.carvalho@hotmail.com",t.archives=r,(await sI(t)).success?(i({title:"Mensagem enviada",description:"Em breve, algum membro do C.A. ir\xe1 analisar."}),a([]),n("")):i({title:"Erro ao enviar. Tente novamente mais tarde",description:"Se o erro persistir, comunique a um dos C.A."}),e?c({name:"",email:"",phone:"",title:"",description:""}):c({name:void 0,email:void 0,phone:void 0,title:"",description:""})};return(0,u.jsxs)("div",{className:"flex flex-col p-8 sm:p-20 sm:pt-1 w-full",children:[u.jsx(sS,{isSwitchOn:e,handleSwitchChange:e=>{t(e.target.checked),c({name:void 0,email:void 0,phone:void 0}),m()},register:o,errors:d}),(0,u.jsxs)("form",{onSubmit:l(p),className:"space-y-3 w-full",children:[u.jsx(sA,{register:o,errors:d}),u.jsx(sE,{register:o,errors:d}),u.jsx(sZ,{selectedFiles:r,handleFileChange:e=>{let t=Array.from(e.target.files);if(r.length+t.length>20){n("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}n(""),a(e=>[...e,...t])},removeFile:e=>{a(r.filter((t,r)=>r!==e))},fileError:s}),u.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors mt-6",children:"Enviar"})]})]})},sq=e=>new Promise((t,r)=>{let a=new FileReader;a.readAsDataURL(e),a.onload=()=>t(a.result),a.onerror=e=>r(e)}),sB=rO.object({name:rO.string().min(3,"O nome deve ter pelo menos 3 caracteres").optional(),email:rO.string().email("E-mail inv\xe1lido").optional(),phone:rO.string().min(11,"Telefone inv\xe1lido").optional(),title:rO.string().min(5,"O t\xedtulo deve ter pelo menos 5 caracteres"),description:rO.string().min(10,"A descri\xe7\xe3o deve ter pelo menos 10 caracteres"),files:rO.unknown().optional()}),sH=()=>{let[e,t]=(0,f.useState)(!1),[r,a]=(0,f.useState)([]),[s,n]=(0,f.useState)(""),{toast:i}=(0,sL.pm)(),{register:o,handleSubmit:l,formState:{errors:d},reset:c,clearErrors:m}=eR({resolver:eq(sB)}),p=async t=>{if(r.length>20){n("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}let s=await Promise.all(r.map(async e=>{let t=await sq(e);return{name:e.name,type:e.type,base64:t}}));t.recipient="Qualquer pessoa que possa me ajudar",t.to_email="antoniol.carvalho49@gmail.com,antoniol.carvalho@hotmail.com",t.archives=s,(await sI(t)).success?(i({title:"Mensagem enviada",description:"Em breve, algum membro do C.A. ir\xe1 analisar."}),a([]),n("")):i({title:"Erro ao enviar. Tente novamente mais tarde",description:"Se o erro persistir, comunique a um dos C.A."}),e?c({name:"",email:"",phone:"",title:"",description:""}):c({name:void 0,email:void 0,phone:void 0,title:"",description:""})};return(0,u.jsxs)("div",{className:"flex flex-col p-8 sm:p-20 sm:pt-1 w-full",children:[u.jsx(sS,{isSwitchOn:e,handleSwitchChange:e=>{t(e.target.checked),c({name:void 0,email:void 0,phone:void 0}),m()},register:o,errors:d}),(0,u.jsxs)("form",{onSubmit:l(p),className:"space-y-3 w-full",children:[u.jsx(sE,{register:o,errors:d}),u.jsx(sZ,{selectedFiles:r,handleFileChange:e=>{let t=Array.from(e.target.files);if(r.length+t.length>20){n("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}n(""),a(e=>[...e,...t])},removeFile:e=>{a(r.filter((t,r)=>r!==e))},fileError:s}),u.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors mt-6",children:"Enviar"})]})]})},sW=rO.object({name:rO.string().min(3,"O nome deve ter pelo menos 3 caracteres").optional(),email:rO.string().email("E-mail inv\xe1lido").optional(),phone:rO.string().min(11,"Telefone inv\xe1lido").optional(),title:rO.string().min(5,"O t\xedtulo deve ter pelo menos 5 caracteres"),description:rO.string().min(10,"A descri\xe7\xe3o deve ter pelo menos 10 caracteres"),files:rO.unknown().optional()}),sY=()=>{let[e,t]=(0,f.useState)(!1),[r,a]=(0,f.useState)([]),[s,n]=(0,f.useState)(""),{toast:i}=(0,sL.pm)(),{register:o,handleSubmit:l,formState:{errors:d},reset:c,clearErrors:m}=eR({resolver:eq(sW)}),p=async t=>{if(r.length>20){n("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}t.recipient="Qualquer pessoa que possa me ajudar",t.to_email="antoniol.carvalho49@gmail.com,antoniol.carvalho@hotmail.com",t.archives=r,(await sI(t)).success?(i({title:"Mensagem enviada",description:"Em breve, algum membro do C.A. ir\xe1 analisar."}),a([]),n("")):i({title:"Erro ao enviar. Tente novamente mais tarde",description:"Se o erro persistir, comunique a um dos C.A."}),e?c({name:"",email:"",phone:"",title:"",description:""}):c({name:void 0,email:void 0,phone:void 0,title:"",description:""})};return(0,u.jsxs)("div",{className:"flex flex-col p-8 sm:p-20 sm:pt-1 w-full",children:[u.jsx(sS,{isSwitchOn:e,handleSwitchChange:e=>{t(e.target.checked),c({name:void 0,email:void 0,phone:void 0}),m()},register:o,errors:d}),(0,u.jsxs)("form",{onSubmit:l(p),className:"space-y-3 w-full",children:[u.jsx(sE,{register:o,errors:d}),u.jsx(sZ,{selectedFiles:r,handleFileChange:e=>{let t=Array.from(e.target.files);if(r.length+t.length>20){n("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}n(""),a(e=>[...e,...t])},removeFile:e=>{a(r.filter((t,r)=>r!==e))},fileError:s}),u.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors mt-6",children:"Enviar"})]})]})},sG=()=>{let[e,t]=(0,f.useState)("Suggestion");return u.jsx("div",{className:`flex flex-col items-center border-3 rounded-lg w-full  ${"Suggestion"===e?"border-2 transition-all rounded-lg border-green-500 shadow-lg shadow-green-500/50":""+e=="Denunciation"?"border-2 transition-all rounded-lg border-red-500 shadow-lg shadow-red-500/50":""+e=="Reclamation"?"border-2 transition-all rounded-lg border-yellow-500 shadow-lg shadow-yellow-500/50":""}`,children:(0,u.jsxs)("div",{className:"flex gap-x-2 align-middle justify-center flex-wrap",children:[(0,u.jsxs)("div",{className:"flex gap-x-1 sm:gap-x-2 pl-20 pr-20 mt-2 w-full justify-center",children:[(0,u.jsxs)("div",{className:"flex items-center gap-x-2 p-1 m-0 sm:px-6 sm:py-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out",onClick:()=>t("Suggestion"),children:[u.jsx("div",{className:`w-[15px] h-[14px] rounded-full border border-gray-600 bg-gray-700 transition-all duration-300 ease-in-out ${"Suggestion"===e?"bg-[#4b2bc2] border-none":""}`}),(0,u.jsxs)("p",{className:"text-sm flex items-center gap-x-1 truncate",children:["Sugest\xf5es",u.jsx("div",{className:"hidden md:block",children:u.jsx(j,{size:20})})]})]}),(0,u.jsxs)("div",{className:"flex items-center gap-x-2 p-1 m-0 sm:px-6 sm:py-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out",onClick:()=>t("Reclamation"),children:[u.jsx("div",{className:`w-[15px] h-[14px] rounded-full border border-gray-600 bg-gray-700 transition-all duration-300 ease-in-out ${"Reclamation"===e?"bg-[#4b2bc2] border-none":""}`}),(0,u.jsxs)("p",{className:"text-sm flex items-center gap-x-1 truncate",children:["Reclama\xe7\xe3o",u.jsx("div",{className:"hidden md:block",children:u.jsx(C,{size:20})})]})]}),(0,u.jsxs)("div",{className:"flex items-center gap-x-2 p-1 m-0 sm:px-6 sm:py-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out",onClick:()=>t("Denunciation"),children:[u.jsx("div",{className:`w-[15px] h-[14px] rounded-full border border-gray-600 bg-gray-700 transition-all duration-300 ease-in-out ${"Denunciation"===e?"bg-[#4b2bc2] border-none":""}`}),(0,u.jsxs)("p",{className:"text-sm flex items-center gap-x-1 truncate",children:["Den\xfancia",u.jsx("div",{className:"hidden md:block",children:u.jsx(S,{size:20})})]})]})]}),(0,u.jsxs)("div",{className:"m-0 w-full pt-5",children:["Suggestion"===e&&u.jsx(sY,{}),"Denunciation"===e&&u.jsx(sU,{}),"Reclamation"===e&&u.jsx(sH,{})]})]})})};var sX=r(9029),sK=r.n(sX);function sJ(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}var sQ=["color"],s0=(0,f.forwardRef)(function(e,t){var r=e.color,a=sJ(e,sQ);return(0,f.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a,{ref:t}),(0,f.createElement)("path",{d:"M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z",fill:void 0===r?"currentColor":r,fillRule:"evenodd",clipRule:"evenodd"}))}),s1=["color"],s2=(0,f.forwardRef)(function(e,t){var r=e.color,a=sJ(e,s1);return(0,f.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a,{ref:t}),(0,f.createElement)("path",{d:"M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z",fill:void 0===r?"currentColor":r,fillRule:"evenodd",clipRule:"evenodd"}))}),s9=r(4831);let s3=()=>{let{theme:e,setTheme:t}=(0,s9.F)();return(0,u.jsxs)("div",{className:"fixed right-0 z-50",children:[" ",(0,u.jsxs)(v,{onClick:()=>t("dark"===e?"light":"dark"),className:"sm:w-[70px] m-5",children:[u.jsx(s2,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),u.jsx(s0,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"})]})]})},s5=()=>(0,u.jsxs)("div",{className:"flex justify-center",children:[(0,u.jsxs)("div",{className:"flex p-4 pt-6 itens-center text-center",children:[u.jsx(sK(),{src:"/logo.svg",width:25,height:25,priority:!0,alt:""}),u.jsx("h5",{className:"ml-2 leading-[50px]",children:"FALA DO CAMPUS"})]}),u.jsx("div",{children:u.jsx(s3,{})})]});function s8(){return(0,u.jsxs)("main",{className:"max-w-3xl mx-auto p-4",children:[u.jsx(s5,{}),u.jsx("div",{className:"",children:u.jsx(sG,{})}),u.jsx(m,{})]})}},7210:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(326),s=r(5428),n=r(7577);let i=()=>{let[e,t]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=()=>{let e=window.scrollY,r=document.body.scrollHeight-window.innerHeight;r&&t(100*Number(e/r).toFixed(2))};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),e},o={hidden:{opacity:0},enter:{opacity:1}},l=({children:e})=>{let t=i();return(0,a.jsxs)(a.Fragment,{children:[a.jsx(s.E.main,{variants:o,initial:"hidden",animate:"enter",transition:{type:"linear",delay:.2,duration:.4},children:e}),a.jsx("span",{style:{transform:`translateY(${t-100}%)`},className:"fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"})]})}},9941:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>n});var a=r(326),s=r(4831);function n({children:e,...t}){return a.jsx(s.f,{...t,children:e})}},5675:(e,t,r)=>{"use strict";r.d(t,{Toaster:()=>y});var a=r(326),s=r(7577),n=r(4578),i=r(8671),o=r(6084);let l=n.zt,d=s.forwardRef(({className:e,...t},r)=>a.jsx(n.l_,{ref:r,className:(0,o.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));d.displayName=n.l_.displayName;let c=(0,i.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),u=s.forwardRef(({className:e,variant:t,...r},s)=>a.jsx(n.fC,{ref:s,className:(0,o.cn)(c({variant:t}),e),...r}));u.displayName=n.fC.displayName,s.forwardRef(({className:e,...t},r)=>a.jsx(n.aU,{ref:r,className:(0,o.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=n.aU.displayName;let f=s.forwardRef(({className:e},t)=>a.jsx(a.Fragment,{}));f.displayName=n.x8.displayName;let m=s.forwardRef(({className:e,...t},r)=>a.jsx(n.Dx,{ref:r,className:(0,o.cn)("text-sm font-semibold",e),...t}));m.displayName=n.Dx.displayName;let p=s.forwardRef(({className:e,...t},r)=>a.jsx(n.dk,{ref:r,className:(0,o.cn)("text-sm opacity-90",e),...t}));p.displayName=n.dk.displayName;var h=r(2391);function y(){let{toasts:e}=(0,h.pm)();return(0,a.jsxs)(l,{children:[e.map(function({id:e,title:t,description:r,action:s,...n}){return(0,a.jsxs)(u,{...n,children:[(0,a.jsxs)("div",{className:"grid gap-1",children:[t&&a.jsx(m,{children:t}),r&&a.jsx(p,{children:r})]}),s,a.jsx(f,{})]},e)}),a.jsx(d,{})]})}},2391:(e,t,r)=>{"use strict";r.d(t,{pm:()=>f});var a=r(7577);let s=0,n=new Map,i=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function c(e){d=o(d,e),l.forEach(e=>{e(d)})}function u({...e}){let t=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:t});return c({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function f(){let[e,t]=a.useState(d);return a.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},6084:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var a=r(1135),s=r(1009);function n(...e){return(0,s.m6)((0,a.W)(e))}},9997:(e,t,r)=>{"use strict";var a=r(6777),s={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function l(e){return a.isMemo(e)?i:o[e.$$typeof]||s}o[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[a.Memo]=i;var d=Object.defineProperty,c=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,a){if("string"!=typeof r){if(p){var s=m(r);s&&s!==p&&e(t,s,a)}var i=c(r);u&&(i=i.concat(u(r)));for(var o=l(t),h=l(r),y=0;y<i.length;++y){var g=i[y];if(!n[g]&&!(a&&a[g])&&!(h&&h[g])&&!(o&&o[g])){var v=f(r,g);try{d(t,g,v)}catch(e){}}}}return t}},2481:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let a=r(1174),s=r(8374),n=r(326),i=s._(r(7577)),o=a._(r(962)),l=a._(r(815)),d=r(3078),c=r(5248),u=r(1206);r(576);let f=r(131),m=a._(r(6820)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,a,s,n,i){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,s=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}}))}function y(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let g=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:a,sizes:s,height:o,width:l,decoding:d,className:c,style:u,fetchPriority:f,placeholder:m,loading:p,unoptimized:g,fill:v,onLoadRef:x,onLoadingCompleteRef:b,setBlurComplete:_,setShowAltText:w,sizesInput:k,onLoad:j,onError:C,...S}=e;return(0,n.jsx)("img",{...S,...y(f),loading:p,width:l,height:o,decoding:d,"data-nimg":v?"fill":"1",className:c,style:u,sizes:s,srcSet:a,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,m,x,b,_,g,k))},[r,m,x,b,_,C,g,k,t]),onLoad:e=>{h(e.currentTarget,m,x,b,_,g,k)},onError:e=>{w(!0),"empty"!==m&&_(!0),C&&C(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,a={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,a),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...a},"__nimg-"+r.src+r.srcSet+r.sizes)})}let x=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),a=(0,i.useContext)(u.ImageConfigContext),s=(0,i.useMemo)(()=>{let e=p||a||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[a]),{onLoad:o,onLoadingComplete:l}=e,h=(0,i.useRef)(o);(0,i.useEffect)(()=>{h.current=o},[o]);let y=(0,i.useRef)(l);(0,i.useEffect)(()=>{y.current=l},[l]);let[x,b]=(0,i.useState)(!1),[_,w]=(0,i.useState)(!1),{props:k,meta:j}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:s,blurComplete:x,showAltText:_});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{...k,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:h,onLoadingCompleteRef:y,setBlurComplete:b,setShowAltText:w,sizesInput:e.sizes,ref:t}),j.priority?(0,n.jsx)(v,{isAppRouter:!r,imgAttributes:k}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.AmpContext},1157:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.HeadManagerContext},1206:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.ImageConfigContext},131:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.RouterContext},8710:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:a=!1}=void 0===e?{}:e;return t||r&&a}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(576);let a=r(380),s=r(5248);function n(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,l,d,{src:c,sizes:u,unoptimized:f=!1,priority:m=!1,loading:p,className:h,quality:y,width:g,height:v,fill:x=!1,style:b,overrideSrc:_,onLoad:w,onLoadingComplete:k,placeholder:j="empty",blurDataURL:C,fetchPriority:S,layout:N,objectFit:A,objectPosition:O,lazyBoundary:E,lazyRoot:T,...P}=e,{imgConf:M,showAltText:Z,blurComplete:D,defaultLoader:V}=t,$=M||s.imageConfigDefault;if("allSizes"in $)o=$;else{let e=[...$.deviceSizes,...$.imageSizes].sort((e,t)=>e-t),t=$.deviceSizes.sort((e,t)=>e-t);o={...$,allSizes:e,deviceSizes:t}}if(void 0===V)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let R=P.loader||V;delete P.loader,delete P.srcSet;let F="__next_img_default"in R;if(F){if("custom"===o.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=R;R=t=>{let{config:r,...a}=t;return e(a)}}if(N){"fill"===N&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[N];t&&!u&&(u=t)}let I="",L=i(g),z=i(v);if("object"==typeof(r=c)&&(n(r)||void 0!==r.src)){let e=n(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,I=e.src,!x){if(L||z){if(L&&!z){let t=L/e.width;z=Math.round(e.height*t)}else if(!L&&z){let t=z/e.height;L=Math.round(e.width*t)}}else L=e.width,z=e.height}}let U=!m&&("lazy"===p||void 0===p);(!(c="string"==typeof c?c:I)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,U=!1),o.unoptimized&&(f=!0),F&&c.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(f=!0),m&&(S="high");let q=i(y),B=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:O}:{},Z?{}:{color:"transparent"},b),H=D||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:L,heightInt:z,blurWidth:l,blurHeight:d,blurDataURL:C||"",objectFit:B.objectFit})+'")':'url("'+j+'")',W=H?{backgroundSize:B.objectFit||"cover",backgroundPosition:B.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},Y=function(e){let{config:t,src:r,unoptimized:a,width:s,quality:n,sizes:i,loader:o}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:a,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(r);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:a,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,i),c=l.length-1;return{sizes:i||"w"!==d?i:"100vw",srcSet:l.map((e,a)=>o({config:t,src:r,quality:n,width:e})+" "+("w"===d?e:a+1)+d).join(", "),src:o({config:t,src:r,quality:n,width:l[c]})}}({config:o,src:c,unoptimized:f,width:L,quality:q,sizes:u,loader:R});return{props:{...P,loading:U?"lazy":p,fetchPriority:S,width:L,height:z,decoding:"async",className:h,style:{...B,...W},sizes:Y.sizes,srcSet:Y.srcSet,src:_||Y.src},meta:{unoptimized:f,priority:m,placeholder:j,fill:x}}}},815:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return u}});let a=r(1174),s=r(8374),n=r(326),i=s._(r(7577)),o=a._(r(8003)),l=r(3484),d=r(1157),c=r(8710);function u(e){void 0===e&&(e=!1);let t=[(0,n.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,n.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(576);let m=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,a={};return s=>{let n=!0,i=!1;if(s.key&&"number"!=typeof s.key&&s.key.indexOf("$")>0){i=!0;let t=s.key.slice(s.key.indexOf("$")+1);e.has(t)?n=!1:e.add(t)}switch(s.type){case"title":case"base":t.has(s.type)?n=!1:t.add(s.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(s.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?n=!1:r.add(t);else{let e=s.props[t],r=a[t]||new Set;("name"!==t||!i)&&r.has(e)?n=!1:(r.add(e),a[t]=r)}}}}return n}}()).reverse().map((e,t)=>{let a=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:a})})}let h=function(e){let{children:t}=e,r=(0,i.useContext)(l.AmpStateContext),a=(0,i.useContext)(d.HeadManagerContext);return(0,n.jsx)(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},380:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:s,blurDataURL:n,objectFit:i}=e,o=a?40*a:t,l=s?40*s:r,d=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5248:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return a}});let r=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},9029:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return o}});let a=r(1174),s=r(3078),n=r(2481),i=a._(r(6820));function o(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=n.Image},6820:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:a,quality:s}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+a+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),r.__next_img_default=!0;let a=r},8003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let a=r(7577),s=()=>{},n=()=>{};function i(e){var t;let{headManager:r,reduceComponentsToState:i}=e;function o(){if(r&&r.mountedInstances){let t=a.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),s(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),s(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),n(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},9652:(e,t)=>{"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),d=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),p=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),t.isFragment=function(e){return function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case s:case i:case n:case u:case f:return e;default:switch(e=e&&e.$$typeof){case d:case l:case c:case p:case m:case o:return e;default:return t}}case a:return t}}}(e)===s}},7191:(e,t,r)=>{"use strict";e.exports=r(9652)},745:(e,t)=>{"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,s=r?Symbol.for("react.portal"):60106,n=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,o=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case c:case u:case n:case o:case i:case m:return e;default:switch(e=e&&e.$$typeof){case d:case f:case y:case h:case l:return e;default:return t}}case s:return t}}}function w(e){return _(e)===u}t.AsyncMode=c,t.ConcurrentMode=u,t.ContextConsumer=d,t.ContextProvider=l,t.Element=a,t.ForwardRef=f,t.Fragment=n,t.Lazy=y,t.Memo=h,t.Portal=s,t.Profiler=o,t.StrictMode=i,t.Suspense=m,t.isAsyncMode=function(e){return w(e)||_(e)===c},t.isConcurrentMode=w,t.isContextConsumer=function(e){return _(e)===d},t.isContextProvider=function(e){return _(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return _(e)===f},t.isFragment=function(e){return _(e)===n},t.isLazy=function(e){return _(e)===y},t.isMemo=function(e){return _(e)===h},t.isPortal=function(e){return _(e)===s},t.isProfiler=function(e){return _(e)===o},t.isStrictMode=function(e){return _(e)===i},t.isSuspense=function(e){return _(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===u||e===o||e===i||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===l||e.$$typeof===d||e.$$typeof===f||e.$$typeof===v||e.$$typeof===x||e.$$typeof===b||e.$$typeof===g)},t.typeOf=_},6777:(e,t,r)=>{"use strict";e.exports=r(745)},2037:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y,metadata:()=>h});var a=r(9510),s=r(1364),n=r.n(s);r(7272);var i=r(8570);let o=(0,i.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\components\ui\toaster.jsx`),{__esModule:l,$$typeof:d}=o;o.default;let c=(0,i.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\components\ui\toaster.jsx#Toaster`),u=(0,i.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\components\ThemeProvider.jsx`),{__esModule:f,$$typeof:m}=u;u.default;let p=(0,i.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\components\ThemeProvider.jsx#ThemeProvider`),h={title:"Motion App",description:"Generated by create next app"};function y({children:e}){return a.jsx("html",{lang:"pt",suppressHydrationWarning:!0,children:a.jsx("body",{className:n().className,children:(0,a.jsxs)(p,{attribute:"class",defaultTheme:"light",children:[e,a.jsx(c,{})]})})})}},169:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var a=r(8570);let s=(0,a.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\app\page.jsx`),{__esModule:n,$$typeof:i}=s;s.default;let o=(0,a.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\app\page.jsx#default`)},9915:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var a=r(8570);let s=(0,a.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\app\template.jsx`),{__esModule:n,$$typeof:i}=s;s.default;let o=(0,a.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\app\template.jsx#default`)},7272:()=>{},5684:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[574],()=>r(818));module.exports=a})();