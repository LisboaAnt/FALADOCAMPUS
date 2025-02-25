(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},818:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),r(169),r(2037),r(9915),r(5866);var a=r(3191),n=r(8716),s=r(7922),i=r.n(s),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,169)),"C:\\Users\\anton\\Documents\\GitHub\\FALADOCAMPUS\\app\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,2037)),"C:\\Users\\anton\\Documents\\GitHub\\FALADOCAMPUS\\app\\layout.jsx"],template:[()=>Promise.resolve().then(r.bind(r,9915)),"C:\\Users\\anton\\Documents\\GitHub\\FALADOCAMPUS\\app\\template.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\Users\\anton\\Documents\\GitHub\\FALADOCAMPUS\\app\\page.jsx"],c="/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5873:(e,t,r)=>{Promise.resolve().then(r.bind(r,9941)),Promise.resolve().then(r.bind(r,5675))},6113:(e,t,r)=>{Promise.resolve().then(r.bind(r,6419))},2941:(e,t,r)=>{Promise.resolve().then(r.bind(r,7210))},6840:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},6419:(e,t,r)=>{"use strict";let a;r.r(t),r.d(t,{default:()=>n9});var n,s,i,o,l,d,u,c=r(326),f=r(7577);let p=()=>{let e=(0,f.useRef)(null),[t,r]=(0,f.useState)("light");return(0,f.useEffect)(()=>{},[]),(0,f.useEffect)(()=>{},[t]),c.jsx("canvas",{ref:e,style:{position:"fixed",top:0,left:0,zIndex:-1}})};var m=r(4214),h=r(8671),y=r(6084);let g=(0,h.j)("inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-secondary hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-[55px] px-6 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),v=f.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...n},s)=>{let i=a?m.g7:"button";return c.jsx(i,{className:(0,y.cn)(g({variant:t,size:r,className:e})),ref:s,...n})});v.displayName="Button";/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let b=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x=(...e)=>e.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let w=(0,f.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:s,iconNode:i,...o},l)=>(0,f.createElement)("svg",{ref:l,..._,width:t,height:t,stroke:e,strokeWidth:a?24*Number(r)/Number(t):r,className:x("lucide",n),...o},[...i.map(([e,t])=>(0,f.createElement)(e,t)),...Array.isArray(s)?s:[s]])),k=(e,t)=>{let r=(0,f.forwardRef)(({className:r,...a},n)=>(0,f.createElement)(w,{ref:n,iconNode:t,className:x(`lucide-${b(e)}`,r),...a}));return r.displayName=`${e}`,r},j=k("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),S=k("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),C=k("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);var O=e=>"checkbox"===e.type,N=e=>e instanceof Date,A=e=>null==e;let E=e=>"object"==typeof e;var P=e=>!A(e)&&!Array.isArray(e)&&E(e)&&!N(e),T=e=>P(e)&&e.target?O(e.target)?e.target.checked:e.target.value:e,M=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,R=(e,t)=>e.has(M(t)),D=e=>{let t=e.constructor&&e.constructor.prototype;return P(t)&&t.hasOwnProperty("isPrototypeOf")},Z="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function I(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(Z&&(e instanceof Blob||e instanceof FileList))&&(r||P(e))))return e;else if(t=r?[]:{},r||D(e))for(let r in e)e.hasOwnProperty(r)&&(t[r]=I(e[r]));else t=e;return t}var L=e=>Array.isArray(e)?e.filter(Boolean):[],V=e=>void 0===e,$=(e,t,r)=>{if(!t||!P(e))return r;let a=L(t.split(/[,[\].]+?/)).reduce((e,t)=>A(e)?e:e[t],e);return V(a)||a===e?V(e[t])?r:e[t]:a},F=e=>"boolean"==typeof e,z=e=>/^\w*$/.test(e),U=e=>L(e.replace(/["|']|\]/g,"").split(/\.|\[/)),B=(e,t,r)=>{let a=-1,n=z(t)?[t]:U(t),s=n.length,i=s-1;for(;++a<s;){let t=n[a],s=r;if(a!==i){let r=e[t];s=P(r)||Array.isArray(r)?r:isNaN(+n[a+1])?{}:[]}if("__proto__"===t)return;e[t]=s,e=e[t]}return e};let q={BLUR:"blur",FOCUS_OUT:"focusout"},W={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},H={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};f.createContext(null);var Y=(e,t,r,a=!0)=>{let n={defaultValues:t._defaultValues};for(let s in e)Object.defineProperty(n,s,{get:()=>(t._proxyFormState[s]!==W.all&&(t._proxyFormState[s]=!a||W.all),r&&(r[s]=!0),e[s])});return n},G=e=>P(e)&&!Object.keys(e).length,K=(e,t,r,a)=>{r(e);let{name:n,...s}=e;return G(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(e=>t[e]===(!a||W.all))},X=e=>Array.isArray(e)?e:[e],Q=e=>"string"==typeof e,J=(e,t,r,a,n)=>Q(e)?(a&&t.watch.add(e),$(r,e,n)):Array.isArray(e)?e.map(e=>(a&&t.watch.add(e),$(r,e))):(a&&(t.watchAll=!0),r),ee=(e,t,r,a,n)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:n||!0}}:{},et=e=>({isOnSubmit:!e||e===W.onSubmit,isOnBlur:e===W.onBlur,isOnChange:e===W.onChange,isOnAll:e===W.all,isOnTouch:e===W.onTouched}),er=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));let ea=(e,t,r,a)=>{for(let n of r||Object.keys(e)){let r=$(e,n);if(r){let{_f:e,...s}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],n)&&!a||e.ref&&t(e.ref,e.name)&&!a)break;ea(s,t)}else P(s)&&ea(s,t)}}};var en=(e,t,r)=>{let a=X($(e,r));return B(a,"root",t[r]),B(e,r,a),e},es=e=>"file"===e.type,ei=e=>"function"==typeof e,eo=e=>{if(!Z)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},el=e=>Q(e),ed=e=>"radio"===e.type,eu=e=>e instanceof RegExp;let ec={value:!1,isValid:!1},ef={value:!0,isValid:!0};var ep=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!V(e[0].attributes.value)?V(e[0].value)||""===e[0].value?ef:{value:e[0].value,isValid:!0}:ef:ec}return ec};let em={isValid:!1,value:null};var eh=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,em):em;function ey(e,t,r="validate"){if(el(e)||Array.isArray(e)&&e.every(el)||F(e)&&!e)return{type:r,message:el(e)?e:"",ref:t}}var eg=e=>P(e)&&!eu(e)?e:{value:e,message:""},ev=async(e,t,r,a,n)=>{let{ref:s,refs:i,required:o,maxLength:l,minLength:d,min:u,max:c,pattern:f,validate:p,name:m,valueAsNumber:h,mount:y,disabled:g}=e._f,v=$(t,m);if(!y||g)return{};let b=i?i[0]:s,x=e=>{a&&b.reportValidity&&(b.setCustomValidity(F(e)?"":e||""),b.reportValidity())},_={},w=ed(s),k=O(s),j=(h||es(s))&&V(s.value)&&V(v)||eo(s)&&""===s.value||""===v||Array.isArray(v)&&!v.length,S=ee.bind(null,m,r,_),C=(e,t,r,a=H.maxLength,n=H.minLength)=>{let i=e?t:r;_[m]={type:e?a:n,message:i,ref:s,...S(e?a:n,i)}};if(n?!Array.isArray(v)||!v.length:o&&(!(w||k)&&(j||A(v))||F(v)&&!v||k&&!ep(i).isValid||w&&!eh(i).isValid)){let{value:e,message:t}=el(o)?{value:!!o,message:o}:eg(o);if(e&&(_[m]={type:H.required,message:t,ref:b,...S(H.required,t)},!r))return x(t),_}if(!j&&(!A(u)||!A(c))){let e,t;let a=eg(c),n=eg(u);if(A(v)||isNaN(v)){let r=s.valueAsDate||new Date(v),i=e=>new Date(new Date().toDateString()+" "+e),o="time"==s.type,l="week"==s.type;Q(a.value)&&v&&(e=o?i(v)>i(a.value):l?v>a.value:r>new Date(a.value)),Q(n.value)&&v&&(t=o?i(v)<i(n.value):l?v<n.value:r<new Date(n.value))}else{let r=s.valueAsNumber||(v?+v:v);A(a.value)||(e=r>a.value),A(n.value)||(t=r<n.value)}if((e||t)&&(C(!!e,a.message,n.message,H.max,H.min),!r))return x(_[m].message),_}if((l||d)&&!j&&(Q(v)||n&&Array.isArray(v))){let e=eg(l),t=eg(d),a=!A(e.value)&&v.length>+e.value,n=!A(t.value)&&v.length<+t.value;if((a||n)&&(C(a,e.message,t.message),!r))return x(_[m].message),_}if(f&&!j&&Q(v)){let{value:e,message:t}=eg(f);if(eu(e)&&!v.match(e)&&(_[m]={type:H.pattern,message:t,ref:s,...S(H.pattern,t)},!r))return x(t),_}if(p){if(ei(p)){let e=ey(await p(v,t),b);if(e&&(_[m]={...e,...S(H.validate,e.message)},!r))return x(e.message),_}else if(P(p)){let e={};for(let a in p){if(!G(e)&&!r)break;let n=ey(await p[a](v,t),b,a);n&&(e={...n,...S(a,n.message)},x(n.message),r&&(_[m]=e))}if(!G(e)&&(_[m]={ref:b,...e},!r))return _}}return x(!0),_};function eb(e,t){let r=Array.isArray(t)?t:z(t)?[t]:U(t),a=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,a=0;for(;a<r;)e=V(e)?a++:e[t[a++]];return e}(e,r),n=r.length-1,s=r[n];return a&&delete a[s],0!==n&&(P(a)&&G(a)||Array.isArray(a)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!V(e[t]))return!1;return!0}(a))&&eb(e,r.slice(0,-1)),e}var ex=()=>{let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},e_=e=>A(e)||!E(e);function ew(e,t){if(e_(e)||e_(t))return e===t;if(N(e)&&N(t))return e.getTime()===t.getTime();let r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let n of r){let r=e[n];if(!a.includes(n))return!1;if("ref"!==n){let e=t[n];if(N(r)&&N(e)||P(r)&&P(e)||Array.isArray(r)&&Array.isArray(e)?!ew(r,e):r!==e)return!1}}return!0}var ek=e=>"select-multiple"===e.type,ej=e=>ed(e)||O(e),eS=e=>eo(e)&&e.isConnected,eC=e=>{for(let t in e)if(ei(e[t]))return!0;return!1};function eO(e,t={}){let r=Array.isArray(e);if(P(e)||r)for(let r in e)Array.isArray(e[r])||P(e[r])&&!eC(e[r])?(t[r]=Array.isArray(e[r])?[]:{},eO(e[r],t[r])):A(e[r])||(t[r]=!0);return t}var eN=(e,t)=>(function e(t,r,a){let n=Array.isArray(t);if(P(t)||n)for(let n in t)Array.isArray(t[n])||P(t[n])&&!eC(t[n])?V(r)||e_(a[n])?a[n]=Array.isArray(t[n])?eO(t[n],[]):{...eO(t[n])}:e(t[n],A(r)?{}:r[n],a[n]):a[n]=!ew(t[n],r[n]);return a})(e,t,eO(t)),eA=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>V(e)?e:t?""===e?NaN:e?+e:e:r&&Q(e)?new Date(e):a?a(e):e;function eE(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:es(t)?t.files:ed(t)?eh(e.refs).value:ek(t)?[...t.selectedOptions].map(({value:e})=>e):O(t)?ep(e.refs).value:eA(V(t.value)?e.ref.value:t.value,e)}var eP=(e,t,r,a)=>{let n={};for(let r of e){let e=$(t,r);e&&B(n,r,e._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:a}},eT=e=>V(e)?e:eu(e)?e.source:P(e)?eu(e.value)?e.value.source:e.value:e,eM=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function eR(e,t,r){let a=$(e,r);if(a||z(r))return{error:a,name:r};let n=r.split(".");for(;n.length;){let a=n.join("."),s=$(t,a),i=$(e,a);if(s&&!Array.isArray(s)&&r!==a)break;if(i&&i.type)return{name:a,error:i};n.pop()}return{name:r}}var eD=(e,t,r,a,n)=>!n.isOnAll&&(!r&&n.isOnTouch?!(t||e):(r?a.isOnBlur:n.isOnBlur)?!e:(r?!a.isOnChange:!n.isOnChange)||e),eZ=(e,t)=>!L($(e,t)).length&&eb(e,t);let eI={mode:W.onSubmit,reValidateMode:W.onChange,shouldFocusError:!0};function eL(e={}){let t=f.useRef(),r=f.useRef(),[a,n]=f.useState({isDirty:!1,isValidating:!1,isLoading:ei(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:ei(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={}){let t,r={...eI,...e},a={submitCount:0,isDirty:!1,isLoading:ei(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},n={},s=(P(r.defaultValues)||P(r.values))&&I(r.defaultValues||r.values)||{},i=r.shouldUnregister?{}:I(s),o={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},d=0,u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},c={values:ex(),array:ex(),state:ex()},f=et(r.mode),p=et(r.reValidateMode),m=r.criteriaMode===W.all,h=e=>t=>{clearTimeout(d),d=setTimeout(e,t)},y=async e=>{if(u.isValid||e){let e=r.resolver?G((await w()).errors):await j(n,!0);e!==a.isValid&&c.state.next({isValid:e})}},g=(e,t)=>{(u.isValidating||u.validatingFields)&&((e||Array.from(l.mount)).forEach(e=>{e&&(t?B(a.validatingFields,e,t):eb(a.validatingFields,e))}),c.state.next({validatingFields:a.validatingFields,isValidating:!G(a.validatingFields)}))},v=(e,t)=>{B(a.errors,e,t),c.state.next({errors:a.errors})},b=(e,t,r,a)=>{let l=$(n,e);if(l){let n=$(i,e,V(r)?$(s,e):r);V(n)||a&&a.defaultChecked||t?B(i,e,t?n:eE(l._f)):E(e,n),o.mount&&y()}},x=(e,t,r,i,o)=>{let l=!1,d=!1,f={name:e},p=!!($(n,e)&&$(n,e)._f&&$(n,e)._f.disabled);if(!r||i){u.isDirty&&(d=a.isDirty,a.isDirty=f.isDirty=S(),l=d!==f.isDirty);let r=p||ew($(s,e),t);d=!!(!p&&$(a.dirtyFields,e)),r||p?eb(a.dirtyFields,e):B(a.dirtyFields,e,!0),f.dirtyFields=a.dirtyFields,l=l||u.dirtyFields&&!r!==d}if(r){let t=$(a.touchedFields,e);t||(B(a.touchedFields,e,r),f.touchedFields=a.touchedFields,l=l||u.touchedFields&&t!==r)}return l&&o&&c.state.next(f),l?f:{}},_=(r,n,s,i)=>{let o=$(a.errors,r),l=u.isValid&&F(n)&&a.isValid!==n;if(e.delayError&&s?(t=h(()=>v(r,s)))(e.delayError):(clearTimeout(d),t=null,s?B(a.errors,r,s):eb(a.errors,r)),(s?!ew(o,s):o)||!G(i)||l){let e={...i,...l&&F(n)?{isValid:n}:{},errors:a.errors,name:r};a={...a,...e},c.state.next(e)}},w=async e=>{g(e,!0);let t=await r.resolver(i,r.context,eP(e||l.mount,n,r.criteriaMode,r.shouldUseNativeValidation));return g(e),t},k=async e=>{let{errors:t}=await w(e);if(e)for(let r of e){let e=$(t,r);e?B(a.errors,r,e):eb(a.errors,r)}else a.errors=t;return t},j=async(e,t,n={valid:!0})=>{for(let s in e){let o=e[s];if(o){let{_f:e,...d}=o;if(e){let d=l.array.has(e.name);g([s],!0);let u=await ev(o,i,m,r.shouldUseNativeValidation&&!t,d);if(g([s]),u[e.name]&&(n.valid=!1,t))break;t||($(u,e.name)?d?en(a.errors,u,e.name):B(a.errors,e.name,u[e.name]):eb(a.errors,e.name))}G(d)||await j(d,t,n)}}return n.valid},S=(e,t)=>(e&&t&&B(i,e,t),!ew(Y(),s)),C=(e,t,r)=>J(e,l,{...o.mount?i:V(t)?s:Q(e)?{[e]:t}:t},r,t),E=(e,t,r={})=>{let a=$(n,e),s=t;if(a){let r=a._f;r&&(r.disabled||B(i,e,eA(t,r)),s=eo(r.ref)&&A(t)?"":t,ek(r.ref)?[...r.ref.options].forEach(e=>e.selected=s.includes(e.value)):r.refs?O(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(s)?!!s.find(t=>t===e.value):s===e.value)):r.refs[0]&&(r.refs[0].checked=!!s):r.refs.forEach(e=>e.checked=e.value===s):es(r.ref)?r.ref.value="":(r.ref.value=s,r.ref.type||c.values.next({name:e,values:{...i}})))}(r.shouldDirty||r.shouldTouch)&&x(e,s,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&H(e)},M=(e,t,r)=>{for(let a in t){let s=t[a],i=`${e}.${a}`,o=$(n,i);!l.array.has(e)&&e_(s)&&(!o||o._f)||N(s)?E(i,s,r):M(i,s,r)}},D=(e,t,r={})=>{let d=$(n,e),f=l.array.has(e),p=I(t);B(i,e,p),f?(c.array.next({name:e,values:{...i}}),(u.isDirty||u.dirtyFields)&&r.shouldDirty&&c.state.next({name:e,dirtyFields:eN(s,i),isDirty:S(e,p)})):!d||d._f||A(p)?E(e,p,r):M(e,p,r),er(e,l)&&c.state.next({...a}),c.values.next({name:o.mount?e:void 0,values:{...i}})},z=async e=>{o.mount=!0;let s=e.target,d=s.name,h=!0,v=$(n,d),b=e=>{h=Number.isNaN(e)||e===$(i,d,e)};if(v){let o,k;let S=s.type?eE(v._f):T(e),C=e.type===q.BLUR||e.type===q.FOCUS_OUT,O=!eM(v._f)&&!r.resolver&&!$(a.errors,d)&&!v._f.deps||eD(C,$(a.touchedFields,d),a.isSubmitted,p,f),N=er(d,l,C);B(i,d,S),C?(v._f.onBlur&&v._f.onBlur(e),t&&t(0)):v._f.onChange&&v._f.onChange(e);let A=x(d,S,C,!1),E=!G(A)||N;if(C||c.values.next({name:d,type:e.type,values:{...i}}),O)return u.isValid&&y(),E&&c.state.next({name:d,...N?{}:A});if(!C&&N&&c.state.next({...a}),r.resolver){let{errors:e}=await w([d]);if(b(S),h){let t=eR(a.errors,n,d),r=eR(e,n,t.name||d);o=r.error,d=r.name,k=G(e)}}else g([d],!0),o=(await ev(v,i,m,r.shouldUseNativeValidation))[d],g([d]),b(S),h&&(o?k=!1:u.isValid&&(k=await j(n,!0)));h&&(v._f.deps&&H(v._f.deps),_(d,k,o,A))}},U=(e,t)=>{if($(a.errors,t)&&e.focus)return e.focus(),1},H=async(e,t={})=>{let s,i;let o=X(e);if(r.resolver){let t=await k(V(e)?e:o);s=G(t),i=e?!o.some(e=>$(t,e)):s}else e?((i=(await Promise.all(o.map(async e=>{let t=$(n,e);return await j(t&&t._f?{[e]:t}:t)}))).every(Boolean))||a.isValid)&&y():i=s=await j(n);return c.state.next({...!Q(e)||u.isValid&&s!==a.isValid?{}:{name:e},...r.resolver||!e?{isValid:s}:{},errors:a.errors}),t.shouldFocus&&!i&&ea(n,U,e?o:l.mount),i},Y=e=>{let t={...o.mount?i:s};return V(e)?t:Q(e)?$(t,e):e.map(e=>$(t,e))},K=(e,t)=>({invalid:!!$((t||a).errors,e),isDirty:!!$((t||a).dirtyFields,e),error:$((t||a).errors,e),isValidating:!!$(a.validatingFields,e),isTouched:!!$((t||a).touchedFields,e)}),ee=(e,t,r)=>{let s=($(n,e,{_f:{}})._f||{}).ref,{ref:i,message:o,type:l,...d}=$(a.errors,e)||{};B(a.errors,e,{...d,...t,ref:s}),c.state.next({name:e,errors:a.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},el=(e,t={})=>{for(let o of e?X(e):l.mount)l.mount.delete(o),l.array.delete(o),t.keepValue||(eb(n,o),eb(i,o)),t.keepError||eb(a.errors,o),t.keepDirty||eb(a.dirtyFields,o),t.keepTouched||eb(a.touchedFields,o),t.keepIsValidating||eb(a.validatingFields,o),r.shouldUnregister||t.keepDefaultValue||eb(s,o);c.values.next({values:{...i}}),c.state.next({...a,...t.keepDirty?{isDirty:S()}:{}}),t.keepIsValid||y()},ed=({disabled:e,name:t,field:r,fields:a,value:n})=>{if(F(e)&&o.mount||e){let s=e?void 0:V(n)?eE(r?r._f:$(a,t)._f):n;B(i,t,s),x(t,s,!1,!1,!0)}},eu=(e,t={})=>{let a=$(n,e),i=F(t.disabled);return B(n,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...t}}),l.mount.add(e),a?ed({field:a,disabled:t.disabled,name:e,value:t.value}):b(e,!0,t.value),{...i?{disabled:t.disabled}:{},...r.progressive?{required:!!t.required,min:eT(t.min),max:eT(t.max),minLength:eT(t.minLength),maxLength:eT(t.maxLength),pattern:eT(t.pattern)}:{},name:e,onChange:z,onBlur:z,ref:i=>{if(i){eu(e,t),a=$(n,e);let r=V(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,o=ej(r),l=a._f.refs||[];(o?l.find(e=>e===r):r===a._f.ref)||(B(n,e,{_f:{...a._f,...o?{refs:[...l.filter(eS),r,...Array.isArray($(s,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),b(e,!1,void 0,r))}else(a=$(n,e,{}))._f&&(a._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&!(R(l.array,e)&&o.action)&&l.unMount.add(e)}}},ec=()=>r.shouldFocusError&&ea(n,U,l.mount),ef=(e,t)=>async s=>{let o;s&&(s.preventDefault&&s.preventDefault(),s.persist&&s.persist());let l=I(i);if(c.state.next({isSubmitting:!0}),r.resolver){let{errors:e,values:t}=await w();a.errors=e,l=t}else await j(n);if(eb(a.errors,"root"),G(a.errors)){c.state.next({errors:{}});try{await e(l,s)}catch(e){o=e}}else t&&await t({...a.errors},s),ec(),setTimeout(ec);if(c.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:G(a.errors)&&!o,submitCount:a.submitCount+1,errors:a.errors}),o)throw o},ep=(t,r={})=>{let d=t?I(t):s,f=I(d),p=G(t),m=p?s:f;if(r.keepDefaultValues||(s=d),!r.keepValues){if(r.keepDirtyValues)for(let e of l.mount)$(a.dirtyFields,e)?B(m,e,$(i,e)):D(e,$(m,e));else{if(Z&&V(t))for(let e of l.mount){let t=$(n,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(eo(e)){let t=e.closest("form");if(t){t.reset();break}}}}n={}}i=e.shouldUnregister?r.keepDefaultValues?I(s):{}:I(m),c.array.next({values:{...m}}),c.values.next({values:{...m}})}l={mount:r.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!u.isValid||!!r.keepIsValid||!!r.keepDirtyValues,o.watch=!!e.shouldUnregister,c.state.next({submitCount:r.keepSubmitCount?a.submitCount:0,isDirty:!p&&(r.keepDirty?a.isDirty:!!(r.keepDefaultValues&&!ew(t,s))),isSubmitted:!!r.keepIsSubmitted&&a.isSubmitted,dirtyFields:p?{}:r.keepDirtyValues?r.keepDefaultValues&&i?eN(s,i):a.dirtyFields:r.keepDefaultValues&&t?eN(s,t):r.keepDirty?a.dirtyFields:{},touchedFields:r.keepTouched?a.touchedFields:{},errors:r.keepErrors?a.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&a.isSubmitSuccessful,isSubmitting:!1})},em=(e,t)=>ep(ei(e)?e(i):e,t);return{control:{register:eu,unregister:el,getFieldState:K,handleSubmit:ef,setError:ee,_executeSchema:w,_getWatch:C,_getDirty:S,_updateValid:y,_removeUnmounted:()=>{for(let e of l.unMount){let t=$(n,e);t&&(t._f.refs?t._f.refs.every(e=>!eS(e)):!eS(t._f.ref))&&el(e)}l.unMount=new Set},_updateFieldArray:(e,t=[],r,l,d=!0,f=!0)=>{if(l&&r){if(o.action=!0,f&&Array.isArray($(n,e))){let t=r($(n,e),l.argA,l.argB);d&&B(n,e,t)}if(f&&Array.isArray($(a.errors,e))){let t=r($(a.errors,e),l.argA,l.argB);d&&B(a.errors,e,t),eZ(a.errors,e)}if(u.touchedFields&&f&&Array.isArray($(a.touchedFields,e))){let t=r($(a.touchedFields,e),l.argA,l.argB);d&&B(a.touchedFields,e,t)}u.dirtyFields&&(a.dirtyFields=eN(s,i)),c.state.next({name:e,isDirty:S(e,t),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else B(i,e,t)},_updateDisabledField:ed,_getFieldArray:t=>L($(o.mount?i:s,t,e.shouldUnregister?$(s,t,[]):[])),_reset:ep,_resetDefaultValues:()=>ei(r.defaultValues)&&r.defaultValues().then(e=>{em(e,r.resetOptions),c.state.next({isLoading:!1})}),_updateFormState:e=>{a={...a,...e}},_disableForm:e=>{F(e)&&(c.state.next({disabled:e}),ea(n,(t,r)=>{let a=$(n,r);a&&(t.disabled=a._f.disabled||e,Array.isArray(a._f.refs)&&a._f.refs.forEach(t=>{t.disabled=a._f.disabled||e}))},0,!1))},_subjects:c,_proxyFormState:u,_setErrors:e=>{a.errors=e,c.state.next({errors:a.errors,isValid:!1})},get _fields(){return n},get _formValues(){return i},get _state(){return o},set _state(value){o=value},get _defaultValues(){return s},get _names(){return l},set _names(value){l=value},get _formState(){return a},set _formState(value){a=value},get _options(){return r},set _options(value){r={...r,...value}}},trigger:H,register:eu,handleSubmit:ef,watch:(e,t)=>ei(e)?c.values.subscribe({next:r=>e(C(void 0,t),r)}):C(e,t,!0),setValue:D,getValues:Y,reset:em,resetField:(e,t={})=>{$(n,e)&&(V(t.defaultValue)?D(e,I($(s,e))):(D(e,t.defaultValue),B(s,e,I(t.defaultValue))),t.keepTouched||eb(a.touchedFields,e),t.keepDirty||(eb(a.dirtyFields,e),a.isDirty=t.defaultValue?S(e,I($(s,e))):S()),!t.keepError&&(eb(a.errors,e),u.isValid&&y()),c.state.next({...a}))},clearErrors:e=>{e&&X(e).forEach(e=>eb(a.errors,e)),c.state.next({errors:e?a.errors:{}})},unregister:el,setError:ee,setFocus:(e,t={})=>{let r=$(n,e),a=r&&r._f;if(a){let e=a.refs?a.refs[0]:a.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:K}}(e),formState:a});let s=t.current.control;return s._options=e,function(e){let t=f.useRef(e);t.current=e,f.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}({subject:s._subjects.state,next:e=>{K(e,s._proxyFormState,s._updateFormState,!0)&&n({...s._formState})}}),f.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),f.useEffect(()=>{if(s._proxyFormState.isDirty){let e=s._getDirty();e!==a.isDirty&&s._subjects.state.next({isDirty:e})}},[s,a.isDirty]),f.useEffect(()=>{e.values&&!ew(e.values,r.current)?(s._reset(e.values,s._options.resetOptions),r.current=e.values,n(e=>({...e}))):s._resetDefaultValues()},[e.values,s]),f.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),f.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),f.useEffect(()=>{e.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[e.shouldUnregister,s]),t.current.formState=Y(a,s),t.current}let eV=(e,t,r)=>{if(e&&"reportValidity"in e){let a=$(r,t);e.setCustomValidity(a&&a.message||""),e.reportValidity()}},e$=(e,t)=>{for(let r in t.fields){let a=t.fields[r];a&&a.ref&&"reportValidity"in a.ref?eV(a.ref,r,e):a.refs&&a.refs.forEach(t=>eV(t,r,e))}},eF=(e,t)=>{t.shouldUseNativeValidation&&e$(e,t);let r={};for(let a in e){let n=$(t.fields,a),s=Object.assign(e[a]||{},{ref:n&&n.ref});if(ez(t.names||Object.keys(e),a)){let e=Object.assign({},$(r,a));B(e,"root",s),B(r,a,e)}else B(r,a,s)}return r},ez=(e,t)=>e.some(e=>e.startsWith(t+"."));var eU=function(e,t){for(var r={};e.length;){var a=e[0],n=a.code,s=a.message,i=a.path.join(".");if(!r[i]){if("unionErrors"in a){var o=a.unionErrors[0].errors[0];r[i]={message:o.message,type:o.code}}else r[i]={message:s,type:n}}if("unionErrors"in a&&a.unionErrors.forEach(function(t){return t.errors.forEach(function(t){return e.push(t)})}),t){var l=r[i].types,d=l&&l[a.code];r[i]=ee(i,t,r,n,d?[].concat(d,a.message):a.message)}e.shift()}return r},eB=function(e,t,r){return void 0===r&&(r={}),function(a,n,s){try{return Promise.resolve(function(n,i){try{var o=Promise.resolve(e["sync"===r.mode?"parse":"parseAsync"](a,t)).then(function(e){return s.shouldUseNativeValidation&&e$({},s),{errors:{},values:r.raw?a:e}})}catch(e){return i(e)}return o&&o.then?o.then(void 0,i):o}(0,function(e){if(Array.isArray(null==e?void 0:e.errors))return{values:{},errors:eF(eU(e.errors,!s.shouldUseNativeValidation&&"all"===s.criteriaMode),s)};throw e}))}catch(e){return Promise.reject(e)}}};(function(e){e.assertEqual=e=>e,e.assertIs=function(e){},e.assertNever=function(e){throw Error()},e.arrayToEnum=e=>{let t={};for(let r of e)t[r]=r;return t},e.getValidEnumValues=t=>{let r=e.objectKeys(t).filter(e=>"number"!=typeof t[t[e]]),a={};for(let e of r)a[e]=t[e];return e.objectValues(a)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},e.find=(e,t)=>{for(let r of e)if(t(r))return r},e.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,e.joinValues=function(e,t=" | "){return e.map(e=>"string"==typeof e?`'${e}'`:e).join(t)},e.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t})(n||(n={})),(s||(s={})).mergeShapes=(e,t)=>({...e,...t});let eq=n.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),eW=e=>{switch(typeof e){case"undefined":return eq.undefined;case"string":return eq.string;case"number":return isNaN(e)?eq.nan:eq.number;case"boolean":return eq.boolean;case"function":return eq.function;case"bigint":return eq.bigint;case"symbol":return eq.symbol;case"object":if(Array.isArray(e))return eq.array;if(null===e)return eq.null;if(e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch)return eq.promise;if("undefined"!=typeof Map&&e instanceof Map)return eq.map;if("undefined"!=typeof Set&&e instanceof Set)return eq.set;if("undefined"!=typeof Date&&e instanceof Date)return eq.date;return eq.object;default:return eq.unknown}},eH=n.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class eY extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){let t=e||function(e){return e.message},r={_errors:[]},a=e=>{for(let n of e.issues)if("invalid_union"===n.code)n.unionErrors.map(a);else if("invalid_return_type"===n.code)a(n.returnTypeError);else if("invalid_arguments"===n.code)a(n.argumentsError);else if(0===n.path.length)r._errors.push(t(n));else{let e=r,a=0;for(;a<n.path.length;){let r=n.path[a];a===n.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(n))):e[r]=e[r]||{_errors:[]},e=e[r],a++}}};return a(this),r}static assert(e){if(!(e instanceof eY))throw Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,n.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){let t={},r=[];for(let a of this.issues)a.path.length>0?(t[a.path[0]]=t[a.path[0]]||[],t[a.path[0]].push(e(a))):r.push(e(a));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}eY.create=e=>new eY(e);let eG=(e,t)=>{let r;switch(e.code){case eH.invalid_type:r=e.received===eq.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case eH.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,n.jsonStringifyReplacer)}`;break;case eH.unrecognized_keys:r=`Unrecognized key(s) in object: ${n.joinValues(e.keys,", ")}`;break;case eH.invalid_union:r="Invalid input";break;case eH.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${n.joinValues(e.options)}`;break;case eH.invalid_enum_value:r=`Invalid enum value. Expected ${n.joinValues(e.options)}, received '${e.received}'`;break;case eH.invalid_arguments:r="Invalid function arguments";break;case eH.invalid_return_type:r="Invalid function return type";break;case eH.invalid_date:r="Invalid date";break;case eH.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:n.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case eH.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case eH.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case eH.custom:r="Invalid input";break;case eH.invalid_intersection_types:r="Intersection results could not be merged";break;case eH.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case eH.not_finite:r="Number must be finite";break;default:r=t.defaultError,n.assertNever(e)}return{message:r}},eK=eG;function eX(){return eK}let eQ=e=>{let{data:t,path:r,errorMaps:a,issueData:n}=e,s=[...r,...n.path||[]],i={...n,path:s};if(void 0!==n.message)return{...n,path:s,message:n.message};let o="";for(let e of a.filter(e=>!!e).slice().reverse())o=e(i,{data:t,defaultError:o}).message;return{...n,path:s,message:o}};function eJ(e,t){let r=eX(),a=eQ({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,r,r===eG?void 0:eG].filter(e=>!!e)});e.common.issues.push(a)}class e0{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let a of t){if("aborted"===a.status)return e1;"dirty"===a.status&&e.dirty(),r.push(a.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let e of t){let t=await e.key,a=await e.value;r.push({key:t,value:a})}return e0.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let a of t){let{key:t,value:n}=a;if("aborted"===t.status||"aborted"===n.status)return e1;"dirty"===t.status&&e.dirty(),"dirty"===n.status&&e.dirty(),"__proto__"!==t.value&&(void 0!==n.value||a.alwaysSet)&&(r[t.value]=n.value)}return{status:e.value,value:r}}}let e1=Object.freeze({status:"aborted"}),e2=e=>({status:"dirty",value:e}),e9=e=>({status:"valid",value:e}),e3=e=>"aborted"===e.status,e5=e=>"dirty"===e.status,e4=e=>"valid"===e.status,e8=e=>"undefined"!=typeof Promise&&e instanceof Promise;function e6(e,t,r,a){if("a"===r&&!a)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?a:"a"===r?a.call(e):a?a.value:t.get(e)}function e7(e,t,r,a,n){if("m"===a)throw TypeError("Private method is not writable");if("a"===a&&!n)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?n.call(e,r):n?n.value=r:t.set(e,r),r}"function"==typeof SuppressedError&&SuppressedError,function(e){e.errToObj=e=>"string"==typeof e?{message:e}:e||{},e.toString=e=>"string"==typeof e?e:null==e?void 0:e.message}(i||(i={}));class te{constructor(e,t,r,a){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=a}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}let tt=(e,t)=>{if(e4(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new eY(e.common.issues);return this._error=t,this._error}}};function tr(e){if(!e)return{};let{errorMap:t,invalid_type_error:r,required_error:a,description:n}=e;if(t&&(r||a))throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:n}:{errorMap:(t,n)=>{var s,i;let{message:o}=e;return"invalid_enum_value"===t.code?{message:null!=o?o:n.defaultError}:void 0===n.data?{message:null!==(s=null!=o?o:a)&&void 0!==s?s:n.defaultError}:"invalid_type"!==t.code?{message:n.defaultError}:{message:null!==(i=null!=o?o:r)&&void 0!==i?i:n.defaultError}},description:n}}class ta{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return eW(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:eW(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new e0,ctx:{common:e.parent.common,data:e.data,parsedType:eW(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(e8(t))throw Error("Synchronous parse encountered promise.");return t}_parseAsync(e){return Promise.resolve(this._parse(e))}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;let a={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:eW(e)},n=this._parseSync({data:e,path:a.path,parent:a});return tt(a,n)}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:eW(e)},a=this._parse({data:e,path:r.path,parent:r});return tt(r,await (e8(a)?a:Promise.resolve(a)))}refine(e,t){let r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement((t,a)=>{let n=e(t),s=()=>a.addIssue({code:eH.custom,...r(t)});return"undefined"!=typeof Promise&&n instanceof Promise?n.then(e=>!!e||(s(),!1)):!!n||(s(),!1)})}refinement(e,t){return this._refinement((r,a)=>!!e(r)||(a.addIssue("function"==typeof t?t(r,a):t),!1))}_refinement(e){return new tH({schema:this,typeName:d.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return tY.create(this,this._def)}nullable(){return tG.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return tE.create(this,this._def)}promise(){return tW.create(this,this._def)}or(e){return tT.create([this,e],this._def)}and(e){return tD.create(this,e,this._def)}transform(e){return new tH({...tr(this._def),schema:this,typeName:d.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new tK({...tr(this._def),innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:d.ZodDefault})}brand(){return new t0({typeName:d.ZodBranded,type:this,...tr(this._def)})}catch(e){return new tX({...tr(this._def),innerType:this,catchValue:"function"==typeof e?e:()=>e,typeName:d.ZodCatch})}describe(e){return new this.constructor({...this._def,description:e})}pipe(e){return t1.create(this,e)}readonly(){return t2.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}let tn=/^c[^\s-]{8,}$/i,ts=/^[0-9a-z]+$/,ti=/^[0-9A-HJKMNP-TV-Z]{26}$/,to=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,tl=/^[a-z0-9_-]{21}$/i,td=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,tu=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,tc=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,tf=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,tp=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,tm="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",th=RegExp(`^${tm}$`);function ty(e){let t="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return e.precision?t=`${t}\\.\\d{${e.precision}}`:null==e.precision&&(t=`${t}(\\.\\d+)?`),t}function tg(e){let t=`${tm}T${ty(e)}`,r=[];return r.push(e.local?"Z?":"Z"),e.offset&&r.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${r.join("|")})`,RegExp(`^${t}$`)}class tv extends ta{_parse(e){var t,r;let s;if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==eq.string){let t=this._getOrReturnCtx(e);return eJ(t,{code:eH.invalid_type,expected:eq.string,received:t.parsedType}),e1}let i=new e0;for(let o of this._def.checks)if("min"===o.kind)e.data.length<o.value&&(eJ(s=this._getOrReturnCtx(e,s),{code:eH.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),i.dirty());else if("max"===o.kind)e.data.length>o.value&&(eJ(s=this._getOrReturnCtx(e,s),{code:eH.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),i.dirty());else if("length"===o.kind){let t=e.data.length>o.value,r=e.data.length<o.value;(t||r)&&(s=this._getOrReturnCtx(e,s),t?eJ(s,{code:eH.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):r&&eJ(s,{code:eH.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),i.dirty())}else if("email"===o.kind)tu.test(e.data)||(eJ(s=this._getOrReturnCtx(e,s),{validation:"email",code:eH.invalid_string,message:o.message}),i.dirty());else if("emoji"===o.kind)a||(a=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),a.test(e.data)||(eJ(s=this._getOrReturnCtx(e,s),{validation:"emoji",code:eH.invalid_string,message:o.message}),i.dirty());else if("uuid"===o.kind)to.test(e.data)||(eJ(s=this._getOrReturnCtx(e,s),{validation:"uuid",code:eH.invalid_string,message:o.message}),i.dirty());else if("nanoid"===o.kind)tl.test(e.data)||(eJ(s=this._getOrReturnCtx(e,s),{validation:"nanoid",code:eH.invalid_string,message:o.message}),i.dirty());else if("cuid"===o.kind)tn.test(e.data)||(eJ(s=this._getOrReturnCtx(e,s),{validation:"cuid",code:eH.invalid_string,message:o.message}),i.dirty());else if("cuid2"===o.kind)ts.test(e.data)||(eJ(s=this._getOrReturnCtx(e,s),{validation:"cuid2",code:eH.invalid_string,message:o.message}),i.dirty());else if("ulid"===o.kind)ti.test(e.data)||(eJ(s=this._getOrReturnCtx(e,s),{validation:"ulid",code:eH.invalid_string,message:o.message}),i.dirty());else if("url"===o.kind)try{new URL(e.data)}catch(t){eJ(s=this._getOrReturnCtx(e,s),{validation:"url",code:eH.invalid_string,message:o.message}),i.dirty()}else"regex"===o.kind?(o.regex.lastIndex=0,o.regex.test(e.data)||(eJ(s=this._getOrReturnCtx(e,s),{validation:"regex",code:eH.invalid_string,message:o.message}),i.dirty())):"trim"===o.kind?e.data=e.data.trim():"includes"===o.kind?e.data.includes(o.value,o.position)||(eJ(s=this._getOrReturnCtx(e,s),{code:eH.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),i.dirty()):"toLowerCase"===o.kind?e.data=e.data.toLowerCase():"toUpperCase"===o.kind?e.data=e.data.toUpperCase():"startsWith"===o.kind?e.data.startsWith(o.value)||(eJ(s=this._getOrReturnCtx(e,s),{code:eH.invalid_string,validation:{startsWith:o.value},message:o.message}),i.dirty()):"endsWith"===o.kind?e.data.endsWith(o.value)||(eJ(s=this._getOrReturnCtx(e,s),{code:eH.invalid_string,validation:{endsWith:o.value},message:o.message}),i.dirty()):"datetime"===o.kind?tg(o).test(e.data)||(eJ(s=this._getOrReturnCtx(e,s),{code:eH.invalid_string,validation:"datetime",message:o.message}),i.dirty()):"date"===o.kind?th.test(e.data)||(eJ(s=this._getOrReturnCtx(e,s),{code:eH.invalid_string,validation:"date",message:o.message}),i.dirty()):"time"===o.kind?RegExp(`^${ty(o)}$`).test(e.data)||(eJ(s=this._getOrReturnCtx(e,s),{code:eH.invalid_string,validation:"time",message:o.message}),i.dirty()):"duration"===o.kind?td.test(e.data)||(eJ(s=this._getOrReturnCtx(e,s),{validation:"duration",code:eH.invalid_string,message:o.message}),i.dirty()):"ip"===o.kind?(t=e.data,("v4"===(r=o.version)||!r)&&tc.test(t)||("v6"===r||!r)&&tf.test(t)||(eJ(s=this._getOrReturnCtx(e,s),{validation:"ip",code:eH.invalid_string,message:o.message}),i.dirty())):"base64"===o.kind?tp.test(e.data)||(eJ(s=this._getOrReturnCtx(e,s),{validation:"base64",code:eH.invalid_string,message:o.message}),i.dirty()):n.assertNever(o);return{status:i.value,value:e.data}}_regex(e,t,r){return this.refinement(t=>e.test(t),{validation:t,code:eH.invalid_string,...i.errToObj(r)})}_addCheck(e){return new tv({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...i.errToObj(e)})}url(e){return this._addCheck({kind:"url",...i.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...i.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...i.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...i.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...i.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...i.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...i.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...i.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...i.errToObj(e)})}datetime(e){var t,r;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,local:null!==(r=null==e?void 0:e.local)&&void 0!==r&&r,...i.errToObj(null==e?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return"string"==typeof e?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,...i.errToObj(null==e?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...i.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...i.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...i.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...i.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...i.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...i.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...i.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...i.errToObj(t)})}nonempty(e){return this.min(1,i.errToObj(e))}trim(){return new tv({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new tv({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new tv({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>"datetime"===e.kind)}get isDate(){return!!this._def.checks.find(e=>"date"===e.kind)}get isTime(){return!!this._def.checks.find(e=>"time"===e.kind)}get isDuration(){return!!this._def.checks.find(e=>"duration"===e.kind)}get isEmail(){return!!this._def.checks.find(e=>"email"===e.kind)}get isURL(){return!!this._def.checks.find(e=>"url"===e.kind)}get isEmoji(){return!!this._def.checks.find(e=>"emoji"===e.kind)}get isUUID(){return!!this._def.checks.find(e=>"uuid"===e.kind)}get isNANOID(){return!!this._def.checks.find(e=>"nanoid"===e.kind)}get isCUID(){return!!this._def.checks.find(e=>"cuid"===e.kind)}get isCUID2(){return!!this._def.checks.find(e=>"cuid2"===e.kind)}get isULID(){return!!this._def.checks.find(e=>"ulid"===e.kind)}get isIP(){return!!this._def.checks.find(e=>"ip"===e.kind)}get isBase64(){return!!this._def.checks.find(e=>"base64"===e.kind)}get minLength(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}tv.create=e=>{var t;return new tv({checks:[],typeName:d.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...tr(e)})};class tb extends ta{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){let t;if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==eq.number){let t=this._getOrReturnCtx(e);return eJ(t,{code:eH.invalid_type,expected:eq.number,received:t.parsedType}),e1}let r=new e0;for(let a of this._def.checks)"int"===a.kind?n.isInteger(e.data)||(eJ(t=this._getOrReturnCtx(e,t),{code:eH.invalid_type,expected:"integer",received:"float",message:a.message}),r.dirty()):"min"===a.kind?(a.inclusive?e.data<a.value:e.data<=a.value)&&(eJ(t=this._getOrReturnCtx(e,t),{code:eH.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),r.dirty()):"max"===a.kind?(a.inclusive?e.data>a.value:e.data>=a.value)&&(eJ(t=this._getOrReturnCtx(e,t),{code:eH.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),r.dirty()):"multipleOf"===a.kind?0!==function(e,t){let r=(e.toString().split(".")[1]||"").length,a=(t.toString().split(".")[1]||"").length,n=r>a?r:a;return parseInt(e.toFixed(n).replace(".",""))%parseInt(t.toFixed(n).replace(".",""))/Math.pow(10,n)}(e.data,a.value)&&(eJ(t=this._getOrReturnCtx(e,t),{code:eH.not_multiple_of,multipleOf:a.value,message:a.message}),r.dirty()):"finite"===a.kind?Number.isFinite(e.data)||(eJ(t=this._getOrReturnCtx(e,t),{code:eH.not_finite,message:a.message}),r.dirty()):n.assertNever(a);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,i.toString(t))}gt(e,t){return this.setLimit("min",e,!1,i.toString(t))}lte(e,t){return this.setLimit("max",e,!0,i.toString(t))}lt(e,t){return this.setLimit("max",e,!1,i.toString(t))}setLimit(e,t,r,a){return new tb({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:i.toString(a)}]})}_addCheck(e){return new tb({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:i.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:i.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:i.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:i.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:i.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:i.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:i.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:i.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:i.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>"int"===e.kind||"multipleOf"===e.kind&&n.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}tb.create=e=>new tb({checks:[],typeName:d.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...tr(e)});class tx extends ta{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){let t;if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==eq.bigint){let t=this._getOrReturnCtx(e);return eJ(t,{code:eH.invalid_type,expected:eq.bigint,received:t.parsedType}),e1}let r=new e0;for(let a of this._def.checks)"min"===a.kind?(a.inclusive?e.data<a.value:e.data<=a.value)&&(eJ(t=this._getOrReturnCtx(e,t),{code:eH.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),r.dirty()):"max"===a.kind?(a.inclusive?e.data>a.value:e.data>=a.value)&&(eJ(t=this._getOrReturnCtx(e,t),{code:eH.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),r.dirty()):"multipleOf"===a.kind?e.data%a.value!==BigInt(0)&&(eJ(t=this._getOrReturnCtx(e,t),{code:eH.not_multiple_of,multipleOf:a.value,message:a.message}),r.dirty()):n.assertNever(a);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,i.toString(t))}gt(e,t){return this.setLimit("min",e,!1,i.toString(t))}lte(e,t){return this.setLimit("max",e,!0,i.toString(t))}lt(e,t){return this.setLimit("max",e,!1,i.toString(t))}setLimit(e,t,r,a){return new tx({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:i.toString(a)}]})}_addCheck(e){return new tx({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:i.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:i.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:i.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:i.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:i.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}tx.create=e=>{var t;return new tx({checks:[],typeName:d.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...tr(e)})};class t_ extends ta{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==eq.boolean){let t=this._getOrReturnCtx(e);return eJ(t,{code:eH.invalid_type,expected:eq.boolean,received:t.parsedType}),e1}return e9(e.data)}}t_.create=e=>new t_({typeName:d.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...tr(e)});class tw extends ta{_parse(e){let t;if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==eq.date){let t=this._getOrReturnCtx(e);return eJ(t,{code:eH.invalid_type,expected:eq.date,received:t.parsedType}),e1}if(isNaN(e.data.getTime()))return eJ(this._getOrReturnCtx(e),{code:eH.invalid_date}),e1;let r=new e0;for(let a of this._def.checks)"min"===a.kind?e.data.getTime()<a.value&&(eJ(t=this._getOrReturnCtx(e,t),{code:eH.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),r.dirty()):"max"===a.kind?e.data.getTime()>a.value&&(eJ(t=this._getOrReturnCtx(e,t),{code:eH.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),r.dirty()):n.assertNever(a);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new tw({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:i.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:i.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}tw.create=e=>new tw({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:d.ZodDate,...tr(e)});class tk extends ta{_parse(e){if(this._getType(e)!==eq.symbol){let t=this._getOrReturnCtx(e);return eJ(t,{code:eH.invalid_type,expected:eq.symbol,received:t.parsedType}),e1}return e9(e.data)}}tk.create=e=>new tk({typeName:d.ZodSymbol,...tr(e)});class tj extends ta{_parse(e){if(this._getType(e)!==eq.undefined){let t=this._getOrReturnCtx(e);return eJ(t,{code:eH.invalid_type,expected:eq.undefined,received:t.parsedType}),e1}return e9(e.data)}}tj.create=e=>new tj({typeName:d.ZodUndefined,...tr(e)});class tS extends ta{_parse(e){if(this._getType(e)!==eq.null){let t=this._getOrReturnCtx(e);return eJ(t,{code:eH.invalid_type,expected:eq.null,received:t.parsedType}),e1}return e9(e.data)}}tS.create=e=>new tS({typeName:d.ZodNull,...tr(e)});class tC extends ta{constructor(){super(...arguments),this._any=!0}_parse(e){return e9(e.data)}}tC.create=e=>new tC({typeName:d.ZodAny,...tr(e)});class tO extends ta{constructor(){super(...arguments),this._unknown=!0}_parse(e){return e9(e.data)}}tO.create=e=>new tO({typeName:d.ZodUnknown,...tr(e)});class tN extends ta{_parse(e){let t=this._getOrReturnCtx(e);return eJ(t,{code:eH.invalid_type,expected:eq.never,received:t.parsedType}),e1}}tN.create=e=>new tN({typeName:d.ZodNever,...tr(e)});class tA extends ta{_parse(e){if(this._getType(e)!==eq.undefined){let t=this._getOrReturnCtx(e);return eJ(t,{code:eH.invalid_type,expected:eq.void,received:t.parsedType}),e1}return e9(e.data)}}tA.create=e=>new tA({typeName:d.ZodVoid,...tr(e)});class tE extends ta{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),a=this._def;if(t.parsedType!==eq.array)return eJ(t,{code:eH.invalid_type,expected:eq.array,received:t.parsedType}),e1;if(null!==a.exactLength){let e=t.data.length>a.exactLength.value,n=t.data.length<a.exactLength.value;(e||n)&&(eJ(t,{code:e?eH.too_big:eH.too_small,minimum:n?a.exactLength.value:void 0,maximum:e?a.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:a.exactLength.message}),r.dirty())}if(null!==a.minLength&&t.data.length<a.minLength.value&&(eJ(t,{code:eH.too_small,minimum:a.minLength.value,type:"array",inclusive:!0,exact:!1,message:a.minLength.message}),r.dirty()),null!==a.maxLength&&t.data.length>a.maxLength.value&&(eJ(t,{code:eH.too_big,maximum:a.maxLength.value,type:"array",inclusive:!0,exact:!1,message:a.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((e,r)=>a.type._parseAsync(new te(t,e,t.path,r)))).then(e=>e0.mergeArray(r,e));let n=[...t.data].map((e,r)=>a.type._parseSync(new te(t,e,t.path,r)));return e0.mergeArray(r,n)}get element(){return this._def.type}min(e,t){return new tE({...this._def,minLength:{value:e,message:i.toString(t)}})}max(e,t){return new tE({...this._def,maxLength:{value:e,message:i.toString(t)}})}length(e,t){return new tE({...this._def,exactLength:{value:e,message:i.toString(t)}})}nonempty(e){return this.min(1,e)}}tE.create=(e,t)=>new tE({type:e,minLength:null,maxLength:null,exactLength:null,typeName:d.ZodArray,...tr(t)});class tP extends ta{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;let e=this._def.shape(),t=n.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==eq.object){let t=this._getOrReturnCtx(e);return eJ(t,{code:eH.invalid_type,expected:eq.object,received:t.parsedType}),e1}let{status:t,ctx:r}=this._processInputParams(e),{shape:a,keys:n}=this._getCached(),s=[];if(!(this._def.catchall instanceof tN&&"strip"===this._def.unknownKeys))for(let e in r.data)n.includes(e)||s.push(e);let i=[];for(let e of n){let t=a[e],n=r.data[e];i.push({key:{status:"valid",value:e},value:t._parse(new te(r,n,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof tN){let e=this._def.unknownKeys;if("passthrough"===e)for(let e of s)i.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)s.length>0&&(eJ(r,{code:eH.unrecognized_keys,keys:s}),t.dirty());else if("strip"===e);else throw Error("Internal ZodObject error: invalid unknownKeys value.")}else{let e=this._def.catchall;for(let t of s){let a=r.data[t];i.push({key:{status:"valid",value:t},value:e._parse(new te(r,a,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of i){let r=await t.key,a=await t.value;e.push({key:r,value:a,alwaysSet:t.alwaysSet})}return e}).then(e=>e0.mergeObjectSync(t,e)):e0.mergeObjectSync(t,i)}get shape(){return this._def.shape()}strict(e){return i.errToObj,new tP({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var a,n,s,o;let l=null!==(s=null===(n=(a=this._def).errorMap)||void 0===n?void 0:n.call(a,t,r).message)&&void 0!==s?s:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(o=i.errToObj(e).message)&&void 0!==o?o:l}:{message:l}}}:{}})}strip(){return new tP({...this._def,unknownKeys:"strip"})}passthrough(){return new tP({...this._def,unknownKeys:"passthrough"})}extend(e){return new tP({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new tP({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:d.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new tP({...this._def,catchall:e})}pick(e){let t={};return n.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new tP({...this._def,shape:()=>t})}omit(e){let t={};return n.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new tP({...this._def,shape:()=>t})}deepPartial(){return function e(t){if(t instanceof tP){let r={};for(let a in t.shape){let n=t.shape[a];r[a]=tY.create(e(n))}return new tP({...t._def,shape:()=>r})}return t instanceof tE?new tE({...t._def,type:e(t.element)}):t instanceof tY?tY.create(e(t.unwrap())):t instanceof tG?tG.create(e(t.unwrap())):t instanceof tZ?tZ.create(t.items.map(t=>e(t))):t}(this)}partial(e){let t={};return n.objectKeys(this.shape).forEach(r=>{let a=this.shape[r];e&&!e[r]?t[r]=a:t[r]=a.optional()}),new tP({...this._def,shape:()=>t})}required(e){let t={};return n.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof tY;)e=e._def.innerType;t[r]=e}}),new tP({...this._def,shape:()=>t})}keyof(){return tU(n.objectKeys(this.shape))}}tP.create=(e,t)=>new tP({shape:()=>e,unknownKeys:"strip",catchall:tN.create(),typeName:d.ZodObject,...tr(t)}),tP.strictCreate=(e,t)=>new tP({shape:()=>e,unknownKeys:"strict",catchall:tN.create(),typeName:d.ZodObject,...tr(t)}),tP.lazycreate=(e,t)=>new tP({shape:e,unknownKeys:"strip",catchall:tN.create(),typeName:d.ZodObject,...tr(t)});class tT extends ta{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map(async e=>{let r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}})).then(function(e){for(let t of e)if("valid"===t.result.status)return t.result;for(let r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;let r=e.map(e=>new eY(e.ctx.common.issues));return eJ(t,{code:eH.invalid_union,unionErrors:r}),e1});{let e;let a=[];for(let n of r){let r={...t,common:{...t.common,issues:[]},parent:null},s=n._parseSync({data:t.data,path:t.path,parent:r});if("valid"===s.status)return s;"dirty"!==s.status||e||(e={result:s,ctx:r}),r.common.issues.length&&a.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let n=a.map(e=>new eY(e));return eJ(t,{code:eH.invalid_union,unionErrors:n}),e1}}get options(){return this._def.options}}tT.create=(e,t)=>new tT({options:e,typeName:d.ZodUnion,...tr(t)});let tM=e=>{if(e instanceof tF)return tM(e.schema);if(e instanceof tH)return tM(e.innerType());if(e instanceof tz)return[e.value];if(e instanceof tB)return e.options;if(e instanceof tq)return n.objectValues(e.enum);if(e instanceof tK)return tM(e._def.innerType);if(e instanceof tj)return[void 0];else if(e instanceof tS)return[null];else if(e instanceof tY)return[void 0,...tM(e.unwrap())];else if(e instanceof tG)return[null,...tM(e.unwrap())];else if(e instanceof t0)return tM(e.unwrap());else if(e instanceof t2)return tM(e.unwrap());else if(e instanceof tX)return tM(e._def.innerType);else return[]};class tR extends ta{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==eq.object)return eJ(t,{code:eH.invalid_type,expected:eq.object,received:t.parsedType}),e1;let r=this.discriminator,a=t.data[r],n=this.optionsMap.get(a);return n?t.common.async?n._parseAsync({data:t.data,path:t.path,parent:t}):n._parseSync({data:t.data,path:t.path,parent:t}):(eJ(t,{code:eH.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),e1)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let a=new Map;for(let r of t){let t=tM(r.shape[e]);if(!t.length)throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let n of t){if(a.has(n))throw Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);a.set(n,r)}}return new tR({typeName:d.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:a,...tr(r)})}}class tD extends ta{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),a=(e,a)=>{if(e3(e)||e3(a))return e1;let s=function e(t,r){let a=eW(t),s=eW(r);if(t===r)return{valid:!0,data:t};if(a===eq.object&&s===eq.object){let a=n.objectKeys(r),s=n.objectKeys(t).filter(e=>-1!==a.indexOf(e)),i={...t,...r};for(let a of s){let n=e(t[a],r[a]);if(!n.valid)return{valid:!1};i[a]=n.data}return{valid:!0,data:i}}if(a===eq.array&&s===eq.array){if(t.length!==r.length)return{valid:!1};let a=[];for(let n=0;n<t.length;n++){let s=e(t[n],r[n]);if(!s.valid)return{valid:!1};a.push(s.data)}return{valid:!0,data:a}}return a===eq.date&&s===eq.date&&+t==+r?{valid:!0,data:t}:{valid:!1}}(e.value,a.value);return s.valid?((e5(e)||e5(a))&&t.dirty(),{status:t.value,value:s.data}):(eJ(r,{code:eH.invalid_intersection_types}),e1)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([e,t])=>a(e,t)):a(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}tD.create=(e,t,r)=>new tD({left:e,right:t,typeName:d.ZodIntersection,...tr(r)});class tZ extends ta{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eq.array)return eJ(r,{code:eH.invalid_type,expected:eq.array,received:r.parsedType}),e1;if(r.data.length<this._def.items.length)return eJ(r,{code:eH.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),e1;!this._def.rest&&r.data.length>this._def.items.length&&(eJ(r,{code:eH.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let a=[...r.data].map((e,t)=>{let a=this._def.items[t]||this._def.rest;return a?a._parse(new te(r,e,r.path,t)):null}).filter(e=>!!e);return r.common.async?Promise.all(a).then(e=>e0.mergeArray(t,e)):e0.mergeArray(t,a)}get items(){return this._def.items}rest(e){return new tZ({...this._def,rest:e})}}tZ.create=(e,t)=>{if(!Array.isArray(e))throw Error("You must pass an array of schemas to z.tuple([ ... ])");return new tZ({items:e,typeName:d.ZodTuple,rest:null,...tr(t)})};class tI extends ta{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eq.object)return eJ(r,{code:eH.invalid_type,expected:eq.object,received:r.parsedType}),e1;let a=[],n=this._def.keyType,s=this._def.valueType;for(let e in r.data)a.push({key:n._parse(new te(r,e,r.path,e)),value:s._parse(new te(r,r.data[e],r.path,e)),alwaysSet:e in r.data});return r.common.async?e0.mergeObjectAsync(t,a):e0.mergeObjectSync(t,a)}get element(){return this._def.valueType}static create(e,t,r){return new tI(t instanceof ta?{keyType:e,valueType:t,typeName:d.ZodRecord,...tr(r)}:{keyType:tv.create(),valueType:e,typeName:d.ZodRecord,...tr(t)})}}class tL extends ta{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eq.map)return eJ(r,{code:eH.invalid_type,expected:eq.map,received:r.parsedType}),e1;let a=this._def.keyType,n=this._def.valueType,s=[...r.data.entries()].map(([e,t],s)=>({key:a._parse(new te(r,e,r.path,[s,"key"])),value:n._parse(new te(r,t,r.path,[s,"value"]))}));if(r.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let r of s){let a=await r.key,n=await r.value;if("aborted"===a.status||"aborted"===n.status)return e1;("dirty"===a.status||"dirty"===n.status)&&t.dirty(),e.set(a.value,n.value)}return{status:t.value,value:e}})}{let e=new Map;for(let r of s){let a=r.key,n=r.value;if("aborted"===a.status||"aborted"===n.status)return e1;("dirty"===a.status||"dirty"===n.status)&&t.dirty(),e.set(a.value,n.value)}return{status:t.value,value:e}}}}tL.create=(e,t,r)=>new tL({valueType:t,keyType:e,typeName:d.ZodMap,...tr(r)});class tV extends ta{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eq.set)return eJ(r,{code:eH.invalid_type,expected:eq.set,received:r.parsedType}),e1;let a=this._def;null!==a.minSize&&r.data.size<a.minSize.value&&(eJ(r,{code:eH.too_small,minimum:a.minSize.value,type:"set",inclusive:!0,exact:!1,message:a.minSize.message}),t.dirty()),null!==a.maxSize&&r.data.size>a.maxSize.value&&(eJ(r,{code:eH.too_big,maximum:a.maxSize.value,type:"set",inclusive:!0,exact:!1,message:a.maxSize.message}),t.dirty());let n=this._def.valueType;function s(e){let r=new Set;for(let a of e){if("aborted"===a.status)return e1;"dirty"===a.status&&t.dirty(),r.add(a.value)}return{status:t.value,value:r}}let i=[...r.data.values()].map((e,t)=>n._parse(new te(r,e,r.path,t)));return r.common.async?Promise.all(i).then(e=>s(e)):s(i)}min(e,t){return new tV({...this._def,minSize:{value:e,message:i.toString(t)}})}max(e,t){return new tV({...this._def,maxSize:{value:e,message:i.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}tV.create=(e,t)=>new tV({valueType:e,minSize:null,maxSize:null,typeName:d.ZodSet,...tr(t)});class t$ extends ta{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==eq.function)return eJ(t,{code:eH.invalid_type,expected:eq.function,received:t.parsedType}),e1;function r(e,r){return eQ({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,eX(),eG].filter(e=>!!e),issueData:{code:eH.invalid_arguments,argumentsError:r}})}function a(e,r){return eQ({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,eX(),eG].filter(e=>!!e),issueData:{code:eH.invalid_return_type,returnTypeError:r}})}let n={errorMap:t.common.contextualErrorMap},s=t.data;if(this._def.returns instanceof tW){let e=this;return e9(async function(...t){let i=new eY([]),o=await e._def.args.parseAsync(t,n).catch(e=>{throw i.addIssue(r(t,e)),i}),l=await Reflect.apply(s,this,o);return await e._def.returns._def.type.parseAsync(l,n).catch(e=>{throw i.addIssue(a(l,e)),i})})}{let e=this;return e9(function(...t){let i=e._def.args.safeParse(t,n);if(!i.success)throw new eY([r(t,i.error)]);let o=Reflect.apply(s,this,i.data),l=e._def.returns.safeParse(o,n);if(!l.success)throw new eY([a(o,l.error)]);return l.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new t$({...this._def,args:tZ.create(e).rest(tO.create())})}returns(e){return new t$({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new t$({args:e||tZ.create([]).rest(tO.create()),returns:t||tO.create(),typeName:d.ZodFunction,...tr(r)})}}class tF extends ta{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}tF.create=(e,t)=>new tF({getter:e,typeName:d.ZodLazy,...tr(t)});class tz extends ta{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return eJ(t,{received:t.data,code:eH.invalid_literal,expected:this._def.value}),e1}return{status:"valid",value:e.data}}get value(){return this._def.value}}function tU(e,t){return new tB({values:e,typeName:d.ZodEnum,...tr(t)})}tz.create=(e,t)=>new tz({value:e,typeName:d.ZodLiteral,...tr(t)});class tB extends ta{constructor(){super(...arguments),o.set(this,void 0)}_parse(e){if("string"!=typeof e.data){let t=this._getOrReturnCtx(e),r=this._def.values;return eJ(t,{expected:n.joinValues(r),received:t.parsedType,code:eH.invalid_type}),e1}if(e6(this,o,"f")||e7(this,o,new Set(this._def.values),"f"),!e6(this,o,"f").has(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return eJ(t,{received:t.data,code:eH.invalid_enum_value,options:r}),e1}return e9(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return tB.create(e,{...this._def,...t})}exclude(e,t=this._def){return tB.create(this.options.filter(t=>!e.includes(t)),{...this._def,...t})}}o=new WeakMap,tB.create=tU;class tq extends ta{constructor(){super(...arguments),l.set(this,void 0)}_parse(e){let t=n.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==eq.string&&r.parsedType!==eq.number){let e=n.objectValues(t);return eJ(r,{expected:n.joinValues(e),received:r.parsedType,code:eH.invalid_type}),e1}if(e6(this,l,"f")||e7(this,l,new Set(n.getValidEnumValues(this._def.values)),"f"),!e6(this,l,"f").has(e.data)){let e=n.objectValues(t);return eJ(r,{received:r.data,code:eH.invalid_enum_value,options:e}),e1}return e9(e.data)}get enum(){return this._def.values}}l=new WeakMap,tq.create=(e,t)=>new tq({values:e,typeName:d.ZodNativeEnum,...tr(t)});class tW extends ta{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==eq.promise&&!1===t.common.async?(eJ(t,{code:eH.invalid_type,expected:eq.promise,received:t.parsedType}),e1):e9((t.parsedType===eq.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}}tW.create=(e,t)=>new tW({type:e,typeName:d.ZodPromise,...tr(t)});class tH extends ta{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===d.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),a=this._def.effect||null,s={addIssue:e=>{eJ(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(s.addIssue=s.addIssue.bind(s),"preprocess"===a.type){let e=a.transform(r.data,s);if(r.common.async)return Promise.resolve(e).then(async e=>{if("aborted"===t.value)return e1;let a=await this._def.schema._parseAsync({data:e,path:r.path,parent:r});return"aborted"===a.status?e1:"dirty"===a.status||"dirty"===t.value?e2(a.value):a});{if("aborted"===t.value)return e1;let a=this._def.schema._parseSync({data:e,path:r.path,parent:r});return"aborted"===a.status?e1:"dirty"===a.status||"dirty"===t.value?e2(a.value):a}}if("refinement"===a.type){let e=e=>{let t=a.refinement(e,s);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(r=>"aborted"===r.status?e1:("dirty"===r.status&&t.dirty(),e(r.value).then(()=>({status:t.value,value:r.value}))));{let a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===a.status?e1:("dirty"===a.status&&t.dirty(),e(a.value),{status:t.value,value:a.value})}}if("transform"===a.type){if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(e=>e4(e)?Promise.resolve(a.transform(e.value,s)).then(e=>({status:t.value,value:e})):e);{let e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!e4(e))return e;let n=a.transform(e.value,s);if(n instanceof Promise)throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:n}}}n.assertNever(a)}}tH.create=(e,t,r)=>new tH({schema:e,typeName:d.ZodEffects,effect:t,...tr(r)}),tH.createWithPreprocess=(e,t,r)=>new tH({schema:t,effect:{type:"preprocess",transform:e},typeName:d.ZodEffects,...tr(r)});class tY extends ta{_parse(e){return this._getType(e)===eq.undefined?e9(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}tY.create=(e,t)=>new tY({innerType:e,typeName:d.ZodOptional,...tr(t)});class tG extends ta{_parse(e){return this._getType(e)===eq.null?e9(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}tG.create=(e,t)=>new tG({innerType:e,typeName:d.ZodNullable,...tr(t)});class tK extends ta{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===eq.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}tK.create=(e,t)=>new tK({innerType:e,typeName:d.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...tr(t)});class tX extends ta{_parse(e){let{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},a=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return e8(a)?a.then(e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new eY(r.common.issues)},input:r.data})})):{status:"valid",value:"valid"===a.status?a.value:this._def.catchValue({get error(){return new eY(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}tX.create=(e,t)=>new tX({innerType:e,typeName:d.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...tr(t)});class tQ extends ta{_parse(e){if(this._getType(e)!==eq.nan){let t=this._getOrReturnCtx(e);return eJ(t,{code:eH.invalid_type,expected:eq.nan,received:t.parsedType}),e1}return{status:"valid",value:e.data}}}tQ.create=e=>new tQ({typeName:d.ZodNaN,...tr(e)});let tJ=Symbol("zod_brand");class t0 extends ta{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class t1 extends ta{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?e1:"dirty"===e.status?(t.dirty(),e2(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})})();{let e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?e1:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new t1({in:e,out:t,typeName:d.ZodPipeline})}}class t2 extends ta{_parse(e){let t=this._def.innerType._parse(e),r=e=>(e4(e)&&(e.value=Object.freeze(e.value)),e);return e8(t)?t.then(e=>r(e)):r(t)}unwrap(){return this._def.innerType}}function t9(e,t={},r){return e?tC.create().superRefine((a,n)=>{var s,i;if(!e(a)){let e="function"==typeof t?t(a):"string"==typeof t?{message:t}:t,o=null===(i=null!==(s=e.fatal)&&void 0!==s?s:r)||void 0===i||i;n.addIssue({code:"custom",..."string"==typeof e?{message:e}:e,fatal:o})}}):tC.create()}t2.create=(e,t)=>new t2({innerType:e,typeName:d.ZodReadonly,...tr(t)});let t3={object:tP.lazycreate};!function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"}(d||(d={}));let t5=tv.create,t4=tb.create,t8=tQ.create,t6=tx.create,t7=t_.create,re=tw.create,rt=tk.create,rr=tj.create,ra=tS.create,rn=tC.create,rs=tO.create,ri=tN.create,ro=tA.create,rl=tE.create,rd=tP.create,ru=tP.strictCreate,rc=tT.create,rf=tR.create,rp=tD.create,rm=tZ.create,rh=tI.create,ry=tL.create,rg=tV.create,rv=t$.create,rb=tF.create,rx=tz.create,r_=tB.create,rw=tq.create,rk=tW.create,rj=tH.create,rS=tY.create,rC=tG.create,rO=tH.createWithPreprocess,rN=t1.create;var rA=Object.freeze({__proto__:null,defaultErrorMap:eG,setErrorMap:function(e){eK=e},getErrorMap:eX,makeIssue:eQ,EMPTY_PATH:[],addIssueToContext:eJ,ParseStatus:e0,INVALID:e1,DIRTY:e2,OK:e9,isAborted:e3,isDirty:e5,isValid:e4,isAsync:e8,get util(){return n},get objectUtil(){return s},ZodParsedType:eq,getParsedType:eW,ZodType:ta,datetimeRegex:tg,ZodString:tv,ZodNumber:tb,ZodBigInt:tx,ZodBoolean:t_,ZodDate:tw,ZodSymbol:tk,ZodUndefined:tj,ZodNull:tS,ZodAny:tC,ZodUnknown:tO,ZodNever:tN,ZodVoid:tA,ZodArray:tE,ZodObject:tP,ZodUnion:tT,ZodDiscriminatedUnion:tR,ZodIntersection:tD,ZodTuple:tZ,ZodRecord:tI,ZodMap:tL,ZodSet:tV,ZodFunction:t$,ZodLazy:tF,ZodLiteral:tz,ZodEnum:tB,ZodNativeEnum:tq,ZodPromise:tW,ZodEffects:tH,ZodTransformer:tH,ZodOptional:tY,ZodNullable:tG,ZodDefault:tK,ZodCatch:tX,ZodNaN:tQ,BRAND:tJ,ZodBranded:t0,ZodPipeline:t1,ZodReadonly:t2,custom:t9,Schema:ta,ZodSchema:ta,late:t3,get ZodFirstPartyTypeKind(){return d},coerce:{string:e=>tv.create({...e,coerce:!0}),number:e=>tb.create({...e,coerce:!0}),boolean:e=>t_.create({...e,coerce:!0}),bigint:e=>tx.create({...e,coerce:!0}),date:e=>tw.create({...e,coerce:!0})},any:rn,array:rl,bigint:t6,boolean:t7,date:re,discriminatedUnion:rf,effect:rj,enum:r_,function:rv,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>t9(t=>t instanceof e,t),intersection:rp,lazy:rb,literal:rx,map:ry,nan:t8,nativeEnum:rw,never:ri,null:ra,nullable:rC,number:t4,object:rd,oboolean:()=>t7().optional(),onumber:()=>t4().optional(),optional:rS,ostring:()=>t5().optional(),pipeline:rN,preprocess:rO,promise:rk,record:rh,set:rg,strictObject:ru,string:t5,symbol:rt,transformer:rj,tuple:rm,undefined:rr,union:rc,unknown:rs,void:ro,NEVER:e1,ZodIssueCode:eH,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:eY});/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let rE=k("SquareUserRound",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);var rP=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{a.insertRule(e,a.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),rT=Math.abs,rM=String.fromCharCode,rR=Object.assign;function rD(e,t,r){return e.replace(t,r)}function rZ(e,t){return e.indexOf(t)}function rI(e,t){return 0|e.charCodeAt(t)}function rL(e,t,r){return e.slice(t,r)}function rV(e){return e.length}function r$(e,t){return t.push(e),e}var rF=1,rz=1,rU=0,rB=0,rq=0,rW="";function rH(e,t,r,a,n,s,i){return{value:e,root:t,parent:r,type:a,props:n,children:s,line:rF,column:rz,length:i,return:""}}function rY(e,t){return rR(rH("",null,null,"",null,null,0),e,{length:-e.length},t)}function rG(){return rq=rB<rU?rI(rW,rB++):0,rz++,10===rq&&(rz=1,rF++),rq}function rK(){return rI(rW,rB)}function rX(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rQ(e){return rF=rz=1,rU=rV(rW=e),rB=0,[]}function rJ(e){var t,r;return(t=rB-1,r=function e(t){for(;rG();)switch(rq){case t:return rB;case 34:case 39:34!==t&&39!==t&&e(rq);break;case 40:41===t&&e(t);break;case 92:rG()}return rB}(91===e?e+2:40===e?e+1:e),rL(rW,t,r)).trim()}var r0="-ms-",r1="-moz-",r2="-webkit-",r9="comm",r3="rule",r5="decl",r4="@keyframes";function r8(e,t){for(var r="",a=e.length,n=0;n<a;n++)r+=t(e[n],n,e,t)||"";return r}function r6(e,t,r,a){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case r5:return e.return=e.return||e.value;case r9:return"";case r4:return e.return=e.value+"{"+r8(e.children,a)+"}";case r3:e.value=e.props.join(",")}return rV(r=r8(e.children,a))?e.return=e.value+"{"+r+"}":""}function r7(e){var t=e.length;return function(r,a,n,s){for(var i="",o=0;o<t;o++)i+=e[o](r,a,n,s)||"";return i}}function ae(e){var t;return t=function e(t,r,a,n,s,i,o,l,d){for(var u,c=0,f=0,p=o,m=0,h=0,y=0,g=1,v=1,b=1,x=0,_="",w=s,k=i,j=n,S=_;v;)switch(y=x,x=rG()){case 40:if(108!=y&&58==rI(S,p-1)){-1!=rZ(S+=rD(rJ(x),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:S+=rJ(x);break;case 9:case 10:case 13:case 32:S+=function(e){for(;rq=rK();)if(rq<33)rG();else break;return rX(e)>2||rX(rq)>3?"":" "}(y);break;case 92:S+=function(e,t){for(var r;--t&&rG()&&!(rq<48)&&!(rq>102)&&(!(rq>57)||!(rq<65))&&(!(rq>70)||!(rq<97)););return r=rB+(t<6&&32==rK()&&32==rG()),rL(rW,e,r)}(rB-1,7);continue;case 47:switch(rK()){case 42:case 47:r$(rH(u=function(e,t){for(;rG();)if(e+rq===57)break;else if(e+rq===84&&47===rK())break;return"/*"+rL(rW,t,rB-1)+"*"+rM(47===e?e:rG())}(rG(),rB),r,a,r9,rM(rq),rL(u,2,-2),0),d);break;default:S+="/"}break;case 123*g:l[c++]=rV(S)*b;case 125*g:case 59:case 0:switch(x){case 0:case 125:v=0;case 59+f:-1==b&&(S=rD(S,/\f/g,"")),h>0&&rV(S)-p&&r$(h>32?ar(S+";",n,a,p-1):ar(rD(S," ","")+";",n,a,p-2),d);break;case 59:S+=";";default:if(r$(j=at(S,r,a,c,f,s,l,_,w=[],k=[],p),i),123===x){if(0===f)e(S,r,j,j,w,i,p,l,k);else switch(99===m&&110===rI(S,3)?100:m){case 100:case 108:case 109:case 115:e(t,j,j,n&&r$(at(t,j,j,0,0,s,l,_,s,w=[],p),k),s,k,p,l,n?w:k);break;default:e(S,j,j,j,[""],k,0,l,k)}}}c=f=h=0,g=b=1,_=S="",p=o;break;case 58:p=1+rV(S),h=y;default:if(g<1){if(123==x)--g;else if(125==x&&0==g++&&125==(rq=rB>0?rI(rW,--rB):0,rz--,10===rq&&(rz=1,rF--),rq))continue}switch(S+=rM(x),x*g){case 38:b=f>0?1:(S+="\f",-1);break;case 44:l[c++]=(rV(S)-1)*b,b=1;break;case 64:45===rK()&&(S+=rJ(rG())),m=rK(),f=p=rV(_=S+=function(e){for(;!rX(rK());)rG();return rL(rW,e,rB)}(rB)),x++;break;case 45:45===y&&2==rV(S)&&(g=0)}}return i}("",null,null,null,[""],e=rQ(e),0,[0],e),rW="",t}function at(e,t,r,a,n,s,i,o,l,d,u){for(var c=n-1,f=0===n?s:[""],p=f.length,m=0,h=0,y=0;m<a;++m)for(var g=0,v=rL(e,c+1,c=rT(h=i[m])),b=e;g<p;++g)(b=(h>0?f[g]+" "+v:rD(v,/&\f/g,f[g])).trim())&&(l[y++]=b);return rH(e,t,r,0===n?r3:o,l,d,u)}function ar(e,t,r,a){return rH(e,t,r,r5,rL(e,0,a),rL(e,a+1,-1),a)}function aa(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var an="undefined"!=typeof document,as=function(e,t,r){for(var a=0,n=0;a=n,n=rK(),38===a&&12===n&&(t[r]=1),!rX(n);)rG();return rL(rW,e,rB)},ai=function(e,t){var r=-1,a=44;do switch(rX(a)){case 0:38===a&&12===rK()&&(t[r]=1),e[r]+=as(rB-1,t,r);break;case 2:e[r]+=rJ(a);break;case 4:if(44===a){e[++r]=58===rK()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=rM(a)}while(a=rG());return e},ao=function(e,t){var r;return r=ai(rQ(e),t),rW="",r},al=new WeakMap,ad=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,a=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||al.get(r))&&!a){al.set(e,!0);for(var n=[],s=ao(t,n),i=r.props,o=0,l=0;o<s.length;o++)for(var d=0;d<i.length;d++,l++)e.props[l]=n[o]?s[o].replace(/&\f/g,i[d]):i[d]+" "+s[o]}}},au=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ac=an?void 0:function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var a=e(r);return t.set(r,a),a}}(function(){return aa(function(){var e={};return function(t){return e[t]}})}),af=[function(e,t,r,a){if(e.length>-1&&!e.return)switch(e.type){case r5:e.return=function e(t,r){switch(45^rI(t,0)?(((r<<2^rI(t,0))<<2^rI(t,1))<<2^rI(t,2))<<2^rI(t,3):0){case 5103:return r2+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return r2+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return r2+t+r1+t+r0+t+t;case 6828:case 4268:return r2+t+r0+t+t;case 6165:return r2+t+r0+"flex-"+t+t;case 5187:return r2+t+rD(t,/(\w+).+(:[^]+)/,r2+"box-$1$2"+r0+"flex-$1$2")+t;case 5443:return r2+t+r0+"flex-item-"+rD(t,/flex-|-self/,"")+t;case 4675:return r2+t+r0+"flex-line-pack"+rD(t,/align-content|flex-|-self/,"")+t;case 5548:return r2+t+r0+rD(t,"shrink","negative")+t;case 5292:return r2+t+r0+rD(t,"basis","preferred-size")+t;case 6060:return r2+"box-"+rD(t,"-grow","")+r2+t+r0+rD(t,"grow","positive")+t;case 4554:return r2+rD(t,/([^-])(transform)/g,"$1"+r2+"$2")+t;case 6187:return rD(rD(rD(t,/(zoom-|grab)/,r2+"$1"),/(image-set)/,r2+"$1"),t,"")+t;case 5495:case 3959:return rD(t,/(image-set\([^]*)/,r2+"$1$`$1");case 4968:return rD(rD(t,/(.+:)(flex-)?(.*)/,r2+"box-pack:$3"+r0+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+r2+t+t;case 4095:case 3583:case 4068:case 2532:return rD(t,/(.+)-inline(.+)/,r2+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rV(t)-1-r>6)switch(rI(t,r+1)){case 109:if(45!==rI(t,r+4))break;case 102:return rD(t,/(.+:)(.+)-([^]+)/,"$1"+r2+"$2-$3$1"+r1+(108==rI(t,r+3)?"$3":"$2-$3"))+t;case 115:return~rZ(t,"stretch")?e(rD(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==rI(t,r+1))break;case 6444:switch(rI(t,rV(t)-3-(~rZ(t,"!important")&&10))){case 107:return rD(t,":",":"+r2)+t;case 101:return rD(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+r2+(45===rI(t,14)?"inline-":"")+"box$3$1"+r2+"$2$3$1"+r0+"$2box$3")+t}break;case 5936:switch(rI(t,r+11)){case 114:return r2+t+r0+rD(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return r2+t+r0+rD(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return r2+t+r0+rD(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return r2+t+r0+t+t}return t}(e.value,e.length);break;case r4:return r8([rY(e,{value:rD(e.value,"@","@"+r2)})],a);case r3:if(e.length){var n,s;return n=e.props,s=function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return r8([rY(e,{props:[rD(t,/:(read-\w+)/,":"+r1+"$1")]})],a);case"::placeholder":return r8([rY(e,{props:[rD(t,/:(plac\w+)/,":"+r2+"input-$1")]}),rY(e,{props:[rD(t,/:(plac\w+)/,":"+r1+"$1")]}),rY(e,{props:[rD(t,/:(plac\w+)/,r0+"input-$1")]})],a)}return""},n.map(s).join("")}}}],ap=function(e){var t=e.key;if(an&&"css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var a=e.stylisPlugins||af,n={},s=[];an&&(l=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)n[t[r]]=!0;s.push(e)}));var i=[ad,au];if(an){var o,l,d,u,c=[r6,(o=function(e){u.insert(e)},function(e){!e.root&&(e=e.return)&&o(e)})],f=r7(i.concat(a,c));d=function(e,t,r,a){u=r,r8(ae(e?e+"{"+t.styles+"}":t.styles),f),a&&(y.inserted[t.name]=!0)}}else{var p=r7(i.concat(a,[r6])),m=ac(a)(t),h=function(e,t){var r=t.name;return void 0===m[r]&&(m[r]=r8(ae(e?e+"{"+t.styles+"}":t.styles),p)),m[r]};d=function(e,t,r,a){var n=t.name,s=h(e,t);return void 0===y.compat?(a&&(y.inserted[n]=!0),s):a?void(y.inserted[n]=s):s}}var y={key:t,sheet:new rP({key:t,container:l,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:n,registered:{},insert:d};return y.sheet.hydrate(s),y},am="undefined"!=typeof document;function ah(e,t,r){var a="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):a+=r+" "}),a}var ay=function(e,t,r){var a=e.key+"-"+t.name;(!1===r||!1===am&&void 0!==e.compat)&&void 0===e.registered[a]&&(e.registered[a]=t.styles)},ag=function(e,t,r){ay(e,t,r);var a=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var n="",s=t;do{var i=e.insert(t===s?"."+a:"",s,e.sheet,!0);am||void 0===i||(n+=i),s=s.next}while(void 0!==s);if(!am&&0!==n.length)return n}},av={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ab=/[A-Z]|^ms/g,ax=/_EMO_([^_]+?)_([^]*?)_EMO_/g,a_=function(e){return 45===e.charCodeAt(1)},aw=function(e){return null!=e&&"boolean"!=typeof e},ak=aa(function(e){return a_(e)?e:e.replace(ab,"-$&").toLowerCase()}),aj=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ax,function(e,t,r){return u={name:t,styles:r,next:u},t})}return 1===av[e]||a_(e)||"number"!=typeof t||0===t?t:t+"px"};function aS(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return u={name:r.name,styles:r.styles,next:u},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)u={name:a.name,styles:a.styles,next:u},a=a.next;return r.styles+";"}return function(e,t,r){var a="";if(Array.isArray(r))for(var n=0;n<r.length;n++)a+=aS(e,t,r[n])+";";else for(var s in r){var i=r[s];if("object"!=typeof i)null!=t&&void 0!==t[i]?a+=s+"{"+t[i]+"}":aw(i)&&(a+=ak(s)+":"+aj(s,i)+";");else if(Array.isArray(i)&&"string"==typeof i[0]&&(null==t||void 0===t[i[0]]))for(var o=0;o<i.length;o++)aw(i[o])&&(a+=ak(s)+":"+aj(s,i[o])+";");else{var l=aS(e,t,i);switch(s){case"animation":case"animationName":a+=ak(s)+":"+l+";";break;default:a+=s+"{"+l+"}"}}}return a}(e,t,r);case"function":if(void 0!==e){var n=u,s=r(e);return u=n,aS(e,t,s)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var aC=/label:\s*([^\s;\n{]+)\s*(;|$)/g;function aO(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a,n=!0,s="";u=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,s+=aS(r,t,i)):s+=i[0];for(var o=1;o<e.length;o++)s+=aS(r,t,e[o]),n&&(s+=i[o]);aC.lastIndex=0;for(var l="";null!==(a=aC.exec(s));)l+="-"+a[1];return{name:function(e){for(var t,r=0,a=0,n=e.length;n>=4;++a,n-=4)t=(65535&(t=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(n){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(s)+l,styles:s,next:u}}var aN=!!f.useInsertionEffect&&f.useInsertionEffect,aA="undefined"!=typeof document&&aN||function(e){return e()};aN||f.useLayoutEffect;var aE="undefined"!=typeof document,aP=f.createContext("undefined"!=typeof HTMLElement?ap({key:"css"}):null);aP.Provider;var aT=function(e){return(0,f.forwardRef)(function(t,r){return e(t,(0,f.useContext)(aP),r)})};aE||(aT=function(e){return function(t){var r=(0,f.useContext)(aP);return null===r?(r=ap({key:"css"}),f.createElement(aP.Provider,{value:r},e(t,r))):e(t,r)}});var aM=f.createContext({}),aR={}.hasOwnProperty,aD="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",aZ=function(e,t){var r={};for(var a in t)aR.call(t,a)&&(r[a]=t[a]);return r[aD]=e,r},aI=function(e){var t=e.cache,r=e.serialized,a=e.isStringTag;ay(t,r,a);var n=aA(function(){return ag(t,r,a)});if(!aE&&void 0!==n){for(var s,i=r.name,o=r.next;void 0!==o;)i+=" "+o.name,o=o.next;return f.createElement("style",((s={})["data-emotion"]=t.key+" "+i,s.dangerouslySetInnerHTML={__html:n},s.nonce=t.sheet.nonce,s))}return null},aL=aT(function(e,t,r){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var n=e[aD],s=[a],i="";"string"==typeof e.className?i=ah(t.registered,s,e.className):null!=e.className&&(i=e.className+" ");var o=aO(s,void 0,f.useContext(aM));i+=t.key+"-"+o.name;var l={};for(var d in e)aR.call(e,d)&&"css"!==d&&d!==aD&&(l[d]=e[d]);return l.className=i,r&&(l.ref=r),f.createElement(f.Fragment,null,f.createElement(aI,{cache:t,serialized:o,isStringTag:"string"==typeof n}),f.createElement(n,l))});r(5684),r(9997);var aV=c.Fragment;function a$(e,t,r){return aR.call(t,"css")?c.jsx(aL,aZ(e,t),r):c.jsx(e,t,r)}function aF(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return aO(t)}var az=function(){var e=aF.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},aU=function e(t){for(var r=t.length,a=0,n="";a<r;a++){var s=t[a];if(null!=s){var i=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))i=e(s);else for(var o in i="",s)s[o]&&o&&(i&&(i+=" "),i+=o);break;default:i=s}i&&(n&&(n+=" "),n+=i)}}return n},aB=function(e){var t,r=e.cache,a=e.serializedArr,n=aA(function(){for(var e="",t=0;t<a.length;t++){var n=ag(r,a[t],!1);aE||void 0===n||(e+=n)}if(!aE)return e});return aE||0===n.length?null:f.createElement("style",((t={})["data-emotion"]=r.key+" "+a.map(function(e){return e.name}).join(" "),t.dangerouslySetInnerHTML={__html:n},t.nonce=r.sheet.nonce,t))},aq=aT(function(e,t){var r=[],a=function(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];var s=aO(a,t.registered);return r.push(s),ay(t,s,!1),t.key+"-"+s.name},n={css:a,cx:function(){for(var e,r,n,s=arguments.length,i=Array(s),o=0;o<s;o++)i[o]=arguments[o];return n=ah(t.registered,r=[],e=aU(i)),r.length<2?e:n+a(r)},theme:f.useContext(aM)},s=e.children(n);return f.createElement(f.Fragment,null,f.createElement(aB,{cache:t,serializedArr:r}),s)}),aW=Object.defineProperty,aH=(e,t,r)=>t in e?aW(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,aY=(e,t,r)=>aH(e,"symbol"!=typeof t?t+"":t,r),aG=new Map,aK=new WeakMap,aX=0,aQ=void 0;function aJ(e,t,r={},a=aQ){if(void 0===window.IntersectionObserver&&void 0!==a){let n=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:n,observer:s,elements:i}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(aK.has(r)||(aX+=1,aK.set(r,aX.toString())),aK.get(r)):"0":e[t]}`}).toString(),r=aG.get(t);if(!r){let a;let n=new Map,s=new IntersectionObserver(t=>{t.forEach(t=>{var r;let s=t.isIntersecting&&a.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(r=n.get(t.target))||r.forEach(e=>{e(s,t)})})},e);a=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:s,elements:n},aG.set(t,r)}return r}(r),o=i.get(e)||[];return i.has(e)||i.set(e,o),o.push(t),s.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(i.delete(e),s.unobserve(e)),0===i.size&&(s.disconnect(),aG.delete(n))}}var a0=class extends f.Component{constructor(e){super(e),aY(this,"node",null),aY(this,"_unobserveCb",null),aY(this,"handleNode",e=>{!this.node||(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),aY(this,"handleChange",(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:e,root:t,rootMargin:r,trackVisibility:a,delay:n,fallbackInView:s}=this.props;this._unobserveCb=aJ(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:a,delay:n},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:e}=this.props;if("function"==typeof e){let{inView:t,entry:r}=this.state;return e({inView:t,entry:r,ref:this.handleNode})}let{as:t,triggerOnce:r,threshold:a,root:n,rootMargin:s,onChange:i,skip:o,trackVisibility:l,delay:d,initialInView:u,fallbackInView:c,...p}=this.props;return f.createElement(t||"div",{ref:this.handleNode,...p},e)}};function a1({threshold:e,delay:t,trackVisibility:r,rootMargin:a,root:n,triggerOnce:s,skip:i,initialInView:o,fallbackInView:l,onChange:d}={}){var u;let[c,p]=f.useState(null),m=f.useRef(),[h,y]=f.useState({inView:!!o,entry:void 0});m.current=d,f.useEffect(()=>{let o;if(!i&&c)return o=aJ(c,(e,t)=>{y({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&s&&o&&(o(),o=void 0)},{root:n,rootMargin:a,threshold:e,trackVisibility:r,delay:t},l),()=>{o&&o()}},[Array.isArray(e)?e.toString():e,c,n,a,s,i,r,l,t]);let g=null==(u=h.entry)?void 0:u.target,v=f.useRef();c||!g||s||i||v.current===g||(v.current=g,y({inView:!!o,entry:void 0}));let b=[p,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var a2=r(7191);az`
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
`,a4=az`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,a8=az`
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
`,ne=az`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nt=az`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nr=az`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,na=az`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nn=az`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ns=az`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ni(e){var t;return t=()=>null,r=>r?e():t()}function no(e){return ni(()=>({opacity:0}))(e)}let nl=e=>{let{cascade:t=!1,damping:r=.5,delay:a=0,duration:n=1e3,fraction:s=0,keyframes:i=a6,triggerOnce:o=!1,className:l,style:d,childClassName:u,childStyle:c,children:p,onVisibilityChange:m}=e,h=(0,f.useMemo)(()=>(function({duration:e=1e3,delay:t=0,timingFunction:r="ease",keyframes:a=a6,iterationCount:n=1}){return aF`
    animation-duration: ${e}ms;
    animation-timing-function: ${r};
    animation-delay: ${t}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:i,duration:n}),[n,i]);return void 0==p?null:!function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}(p)?(0,a2.isFragment)(p)?a$(nc,{...e,animationStyles:h}):a$(aV,{children:f.Children.map(p,(i,p)=>{if(!(0,f.isValidElement)(i))return null;let y=a+(t?p*n*r:0);switch(i.type){case"ol":case"ul":return a$(aq,{children:({cx:t})=>a$(i.type,{...i.props,className:t(l,i.props.className),style:Object.assign({},d,i.props.style),children:a$(nl,{...e,children:i.props.children})})});case"li":return a$(a0,{threshold:s,triggerOnce:o,onChange:m,children:({inView:e,ref:t})=>a$(aq,{children:({cx:r})=>a$(i.type,{...i.props,ref:t,className:r(u,i.props.className),css:ni(()=>h)(e),style:Object.assign({},c,i.props.style,no(!e),{animationDelay:y+"ms"})})})});default:return a$(a0,{threshold:s,triggerOnce:o,onChange:m,children:({inView:e,ref:t})=>a$("div",{ref:t,className:l,css:ni(()=>h)(e),style:Object.assign({},d,no(!e),{animationDelay:y+"ms"}),children:a$(aq,{children:({cx:e})=>a$(i.type,{...i.props,className:e(u,i.props.className),style:Object.assign({},c,i.props.style)})})})})}})}):a$(nu,{...e,animationStyles:h,children:String(p)})},nd={display:"inline-block",whiteSpace:"pre"},nu=e=>{var t,r;let{animationStyles:a,cascade:n=!1,damping:s=.5,delay:i=0,duration:o=1e3,fraction:l=0,triggerOnce:d=!1,className:u,style:c,children:f,onVisibilityChange:p}=e,{ref:m,inView:h}=a1({triggerOnce:d,threshold:l,onChange:p});return(t=()=>a$("div",{ref:m,className:u,style:Object.assign({},c,nd),children:f.split("").map((e,t)=>a$("span",{css:ni(()=>a)(h),style:{animationDelay:i+t*o*s+"ms"},children:e},t))}),r=()=>a$(nc,{...e,children:f}),e=>e?t():r())(n)},nc=e=>{let{animationStyles:t,fraction:r=0,triggerOnce:a=!1,className:n,style:s,children:i,onVisibilityChange:o}=e,{ref:l,inView:d}=a1({triggerOnce:a,threshold:r,onChange:o});return a$("div",{ref:l,className:n,css:ni(()=>t)(d),style:Object.assign({},s,no(!d)),children:i})},nf=(az`
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
`),np=az`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,nm=az`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,nh=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,ny=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,ng=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,nv=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,nb=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,nx=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,n_=az`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,nw=az`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,nk=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,nj=az`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,nS=e=>{let{big:t=!1,direction:r,reverse:a=!1,...n}=e;return a$(nl,{keyframes:(0,f.useMemo)(()=>(function(e,t,r){switch(r){case"bottom-left":return t?np:a3;case"bottom-right":return t?nm:a5;case"down":return e?t?ny:a8:t?nh:a4;case"left":return e?t?nv:a7:t?ng:a6;case"right":return e?t?nx:nt:t?nb:ne;case"top-left":return t?n_:nr;case"top-right":return t?nw:na;case"up":return e?t?nj:ns:t?nk:nn;default:return t?nf:a9}})(t,a,r),[t,r,a]),...n})};az`
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
`;let nC=({isSwitchOn:e,handleSwitchChange:t,register:r,errors:a})=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("h5",{className:"flex items-center gap-2",children:[c.jsx(rE,{className:"w-5 h-5"})," Identifica\xe7\xe3o"]}),(0,c.jsxs)("div",{className:"mt-4 flex items-center gap-4",children:[(0,c.jsxs)("label",{className:"relative inline-flex items-center cursor-pointer",children:[c.jsx("input",{type:"checkbox",checked:e,onChange:t,className:"sr-only peer"}),c.jsx("div",{className:"w-11 h-6 bg-[#a5a5a5] peer-checked:bg-[#d4d4d4] peer-focus:ring-0 rounded-full peer dark:bg-gray-700/30 dark:peer-checked:bg-[#4B2DBB] transition-all duration-300 ease-in-out"}),c.jsx("div",{className:"absolute left-1 top-1 w-4 h-4 dark:bg-[#4B2DBB] bg-[#efefef] dark:peer-checked:bg-white peer-checked:bg-[#5e5e5e] rounded-full shadow-md transform transition-all duration-300 ease-in-out peer-checked:translate-x-5"})]}),c.jsx("label",{className:"text-sm font-medium dark:text-gray-300",children:"Quero me identificar"})]}),e&&(0,c.jsxs)(nS,{direction:"top",delay:10,cascade:!0,damping:.1,triggerOnce:!0,children:[(0,c.jsxs)("div",{className:"space-y-2",children:[c.jsx("label",{className:"text-sm font-medium",children:"Nome"}),c.jsx("input",{type:"text",placeholder:"Digite seu nome",...r("name"),className:"w-full p-2 border-[1px] border-gray-700 rounded"}),a.name&&c.jsx("p",{className:"text-red-500 text-sm",children:a.name.message})]}),(0,c.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[(0,c.jsxs)("div",{className:"space-y-2",children:[c.jsx("label",{className:"text-sm font-medium",children:"E-mail"}),c.jsx("input",{type:"email",placeholder:"Digite seu e-mail",...r("email"),className:"w-full p-2 border-[1px] border-gray-700 rounded"}),a.email&&c.jsx("p",{className:"text-red-500 text-sm",children:a.email.message})]}),(0,c.jsxs)("div",{className:"space-y-2",children:[c.jsx("label",{className:"text-sm font-medium",children:"Telefone"}),c.jsx("input",{type:"text",placeholder:"Digite seu telefone",...r("phone"),className:"w-full p-2 border-[1px] border-gray-700 rounded"}),a.phone&&c.jsx("p",{className:"text-red-500 text-sm",children:a.phone.message})]})]})]})]}),nO=k("FileLock2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]),nN=({register:e,errors:t})=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("h5",{className:"flex items-center gap-2 mt-6",children:["        ",c.jsx(nO,{className:"w-5 h-5"}),"Quem vai ler a sua mensagem?"]}),(0,c.jsxs)("div",{className:"space-y-2",children:[(0,c.jsxs)("label",{className:"flex items-center gap-2",children:[c.jsx("input",{type:"radio",value:"Qualquer pessoa que possa me ajudar",...e("recipient"),defaultChecked:!0,className:"peer hidden"}),c.jsx("div",{className:"w-4 h-4 rounded-full border dark:border-gray-600 border-gray-600/20 dark:bg-gray-700 bg-gray-700/20 transition-all duration-300 ease-in-out dark:peer-checked:bg-[#4B2DBB] peer-checked:bg-[#4B2DBB]/80 peer-checked:border-none"}),c.jsx("p",{className:"text-sm dark:text-gray-400 dark:peer-checked:text-gray-300 transition-all duration-300 ease-in-out",children:"Qualquer pessoa que possa me ajudar"})]}),(0,c.jsxs)("label",{className:"flex items-center gap-2",children:[c.jsx("input",{type:"radio",value:"Uma mulher",...e("recipient"),className:"peer hidden"}),c.jsx("div",{className:"w-4 h-4 rounded-full border dark:border-gray-600 border-gray-600/20 dark:bg-gray-700 bg-gray-700/20 transition-all duration-300 ease-in-out dark:peer-checked:bg-[#4B2DBB] peer-checked:bg-[#4B2DBB]/80 peer-checked:border-none"}),c.jsx("p",{className:"text-sm dark:text-gray-400 dark:peer-checked:text-gray-300 transition-all duration-300 ease-in-out",children:"Uma mulher"})]}),(0,c.jsxs)("label",{className:"flex items-center gap-2",children:[c.jsx("input",{type:"radio",value:"Um homem",...e("recipient"),className:"peer hidden"}),c.jsx("div",{className:"w-4 h-4 rounded-full border dark:border-gray-600 border-gray-600/20 dark:bg-gray-700 bg-gray-700/20 transition-all duration-300 ease-in-out dark:peer-checked:bg-[#4B2DBB] peer-checked:bg-[#4B2DBB]/80 peer-checked:border-none"}),c.jsx("p",{className:"text-sm dark:text-gray-400 dark:peer-checked:text-gray-300 transition-all duration-300 ease-in-out",children:"Um homem"})]}),t.recipient&&c.jsx("p",{className:"text-red-500 text-sm",children:t.recipient.message})]})]}),nA=k("Text",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]]),nE=({register:e,errors:t})=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("h5",{className:"flex items-center gap-2 mt-6",children:[c.jsx(nA,{className:"w-5 h-5"})," Mensagem"]}),(0,c.jsxs)("div",{className:"space-y-2",children:[c.jsx("label",{className:"text-sm font-medium",children:"T\xedtulo"}),c.jsx("input",{type:"text",placeholder:"T\xedtulo do assunto",...e("title"),className:"w-full p-2  border-[1px] border-gray-700 rounded"}),t.title&&c.jsx("p",{className:"text-red-500 text-sm",children:t.title.message})]}),(0,c.jsxs)("div",{className:"space-y-2",children:[c.jsx("label",{className:"text-sm font-medium",children:"Descri\xe7\xe3o"}),c.jsx("textarea",{placeholder:"Escreva a sua mensagem com o m\xe1ximo de detalhes poss\xedvel",...e("description"),className:"w-full p-2 border-[1px] border-gray-700 rounded",rows:4}),t.description&&c.jsx("p",{className:"text-red-500 text-sm",children:t.description.message})]})]}),nP=k("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),nT=k("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]),nM=k("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]),nR=({selectedFiles:e,handleFileChange:t,removeFile:r,fileError:a})=>(0,c.jsxs)("div",{className:"space-y-2",children:[c.jsx("input",{type:"file",multiple:!0,onChange:t,className:"hidden",id:"file-input"}),(0,c.jsxs)("div",{className:"flex align-middle items-center",children:[c.jsx("label",{htmlFor:"file-input",className:"inline-block bg-gray-300 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/80 transition-colors",children:(0,c.jsxs)("p",{className:"flex gap-2 m-1",children:[c.jsx(nP,{className:"text-blue-400"}),"Selecionar"]})}),(0,c.jsxs)("p",{className:"pl-4",children:[e.length," Arquivos Enviados"]})]}),a&&c.jsx("p",{className:"text-red-500 text-sm",children:a}),e.length>0&&c.jsx("div",{className:"mt-4 space-y-2",children:e.map((e,t)=>(0,c.jsxs)("div",{className:"flex items-center justify-between p-2 border rounded",children:[(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[c.jsx(nT,{className:"w-4 h-4"}),c.jsx("span",{className:"text-sm",children:e.name})]}),(0,c.jsxs)("span",{className:"text-sm",children:[(e.size/1048576).toFixed(2)," MB"]})]}),c.jsx("button",{type:"button",onClick:()=>r(t),className:"text-red-500 hover:text-red-700",children:c.jsx(nM,{className:"w-4 h-4"})})]},t))})]}),nD=async e=>{try{return e.name,e.email,e.phone,e.title,e.description,e.recipient,e.to_email,e.archives,{success:!0,response}}catch(e){return console.error("Erro ao enviar e-mail:",e),{success:!1,error:e}}};var nZ=r(2391);let nI=rA.object({name:rA.string().min(3,"O nome deve ter pelo menos 3 caracteres").optional(),email:rA.string().email("E-mail inv\xe1lido").optional(),phone:rA.string().min(11,"Telefone inv\xe1lido").optional(),title:rA.string().min(5,"O t\xedtulo deve ter pelo menos 5 caracteres"),description:rA.string().min(10,"A descri\xe7\xe3o deve ter pelo menos 10 caracteres"),recipient:rA.string().min(1,"Selecione uma op\xe7\xe3o"),files:rA.unknown().optional()}),nL=()=>{let[e,t]=(0,f.useState)(!1),[r,a]=(0,f.useState)([]),[n,s]=(0,f.useState)(""),[i,o]=(0,f.useState)(!1),{toast:l}=(0,nZ.pm)(),{register:d,handleSubmit:u,formState:{errors:p},reset:m,clearErrors:h}=eL({resolver:eB(nI)}),y=async t=>{if(r.length>20){s("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}t.recipient&&"Qualquer pessoa que possa me ajudar"!==t.recipient?"Uma mulher"===t.recipient?t.to_email="antoniol.carvalho49@gmail.com":"Um homem"===t.recipient&&(t.to_email="antoniol.carvalho@hotmail.com"):t.to_email="antoniol.carvalho49@gmail.com,antoniol.carvalho@hotmail.com",t.archives=r,o(!0);let n=await nD(t);o(!1),n.success?(l({title:"Mensagem enviada",description:"Em breve, algum membro do C.A. ir\xe1 analisar."}),a([]),s("")):l({title:"Erro ao enviar. Tente novamente mais tarde",description:"Se o erro persistir, comunique a um dos C.A."}),e?m({name:"",email:"",phone:"",title:"",description:""}):m({name:void 0,email:void 0,phone:void 0,title:"",description:""})};return(0,c.jsxs)("div",{className:"",children:[c.jsx(nC,{isSwitchOn:e,handleSwitchChange:e=>{t(e.target.checked),m({name:void 0,email:void 0,phone:void 0}),h()},register:d,errors:p}),(0,c.jsxs)("form",{onSubmit:u(y),className:"space-y-3 w-full",children:[c.jsx(nN,{register:d,errors:p}),c.jsx(nE,{register:d,errors:p}),c.jsx(nR,{selectedFiles:r,handleFileChange:e=>{let t=Array.from(e.target.files);if(r.length+t.length>20){s("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}s(""),a(e=>[...e,...t])},removeFile:e=>{a(r.filter((t,r)=>r!==e))},fileError:n}),c.jsx("button",{type:"submit",className:"w-full bg-[#4B2DBB] text-white p-2 rounded hover:bg-[#4B2DBB]/60 transition-colors mt-6",disabled:i,children:i?"Enviando...":"Enviar"})]})]})},nV=rA.object({name:rA.string().min(3,"O nome deve ter pelo menos 3 caracteres").optional(),email:rA.string().email("E-mail inv\xe1lido").optional(),phone:rA.string().min(11,"Telefone inv\xe1lido").optional(),title:rA.string().min(5,"O t\xedtulo deve ter pelo menos 5 caracteres"),description:rA.string().min(10,"A descri\xe7\xe3o deve ter pelo menos 10 caracteres"),files:rA.unknown().optional()}),n$=()=>{let[e,t]=(0,f.useState)(!1),[r,a]=(0,f.useState)([]),[n,s]=(0,f.useState)(""),[i,o]=(0,f.useState)(!1),{toast:l}=(0,nZ.pm)(),{register:d,handleSubmit:u,formState:{errors:p},reset:m,clearErrors:h}=eL({resolver:eB(nV)}),y=async t=>{if(r.length>20){s("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}t.recipient="Qualquer pessoa que possa me ajudar",t.to_email="antoniol.carvalho49@gmail.com,antoniol.carvalho@hotmail.com",o(!0);let n=await nD(t);o(!1),n.success?(l({title:"Mensagem enviada",description:"Em breve, algum membro do C.A. ir\xe1 analisar."}),a([]),s("")):l({title:"Erro ao enviar. Tente novamente mais tarde",description:"Se o erro persistir, comunique a um dos C.A."}),e?m({name:"",email:"",phone:"",title:"",description:""}):m({name:void 0,email:void 0,phone:void 0,title:"",description:""})};return(0,c.jsxs)("div",{className:"",children:[c.jsx(nC,{isSwitchOn:e,handleSwitchChange:e=>{t(e.target.checked),m({name:void 0,email:void 0,phone:void 0}),h()},register:d,errors:p}),(0,c.jsxs)("form",{onSubmit:u(y),className:"space-y-3 w-full",children:[c.jsx(nE,{register:d,errors:p}),c.jsx(nR,{selectedFiles:r,handleFileChange:e=>{let t=Array.from(e.target.files);if(r.length+t.length>20){s("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}s(""),a(e=>[...e,...t])},removeFile:e=>{a(r.filter((t,r)=>r!==e))},fileError:n}),c.jsx("button",{type:"submit",className:"w-full bg-[#4B2DBB] text-white p-2 rounded hover:bg-[#4B2DBB]/60 transition-colors mt-6",disabled:i,children:i?"Enviando...":"Enviar"})]})]})},nF=rA.object({name:rA.string().min(3,"O nome deve ter pelo menos 3 caracteres").optional(),email:rA.string().email("E-mail inv\xe1lido").optional(),phone:rA.string().min(11,"Telefone inv\xe1lido").optional(),title:rA.string().min(5,"O t\xedtulo deve ter pelo menos 5 caracteres"),description:rA.string().min(10,"A descri\xe7\xe3o deve ter pelo menos 10 caracteres"),files:rA.unknown().optional()}),nz=()=>{let[e,t]=(0,f.useState)(!1),[r,a]=(0,f.useState)([]),[n,s]=(0,f.useState)(""),[i,o]=(0,f.useState)(!1),{toast:l}=(0,nZ.pm)(),{register:d,handleSubmit:u,formState:{errors:p},reset:m,clearErrors:h}=eL({resolver:eB(nF)}),y=async t=>{if(r.length>20){s("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}t.recipient="Qualquer pessoa que possa me ajudar",t.to_email="antoniol.carvalho49@gmail.com,antoniol.carvalho@hotmail.com",t.archives=r,o(!0);let n=await nD(t);o(!1),n.success?(l({title:"Mensagem enviada",description:"Em breve, algum membro do C.A. ir\xe1 analisar."}),a([]),s("")):l({title:"Erro ao enviar. Tente novamente mais tarde",description:"Se o erro persistir, comunique a um dos C.A."}),e?m({name:"",email:"",phone:"",title:"",description:""}):m({name:void 0,email:void 0,phone:void 0,title:"",description:""})};return(0,c.jsxs)("div",{className:"",children:[c.jsx(nC,{isSwitchOn:e,handleSwitchChange:e=>{t(e.target.checked),m({name:void 0,email:void 0,phone:void 0}),h()},register:d,errors:p}),(0,c.jsxs)("form",{onSubmit:u(y),className:"space-y-3 w-full",children:[c.jsx(nE,{register:d,errors:p}),c.jsx(nR,{selectedFiles:r,handleFileChange:e=>{let t=Array.from(e.target.files);if(r.length+t.length>20){s("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}s(""),a(e=>[...e,...t])},removeFile:e=>{a(r.filter((t,r)=>r!==e))},fileError:n}),c.jsx("button",{type:"submit",className:"w-full bg-[#4B2DBB] text-white p-2 rounded hover:bg-[#4B2DBB]/60 transition-colors mt-6",disabled:i,children:i?"Enviando...":"Enviar"})]})]})},nU=()=>{let[e,t]=(0,f.useState)("Suggestion");return(0,f.useEffect)(()=>{},[]),c.jsx("div",{className:`flex flex-col items-center border-3 rounded-lg w-full min-w-[340px] backdrop-blur-[3px] ${"Suggestion"===e?"border-2 transition-all rounded-lg dark:border-green-500/20 shadow-lg dark:shadow-green-500/30":""+e=="Denunciation"?"border-2 transition-all rounded-lg dark:border-red-500/20 shadow-lg dark:shadow-red-500/30":""+e=="Reclamation"?"border-2 transition-all rounded-lg dark:border-yellow-500/20 shadow-lg dark:shadow-yellow-500/30":""}`,children:(0,c.jsxs)("div",{className:"flex gap-x-2 align-middle  justify-center flex-wrap ",children:[(0,c.jsxs)("div",{className:"flex gap-x-1 sm:gap-x-2 sm:px-0  mt-2 w-full justify-between",children:[(0,c.jsxs)("div",{className:"flex items-center gap-x-2 m-0 sm:py-2 pl-3 sm:pl-20 cursor-pointer rounded-md transition-all duration-300 ease-in-out",onClick:()=>t("Suggestion"),children:[c.jsx("div",{className:`w-[15px] h-[15px] rounded-full transition-all duration-300 ease-in-out ${"Suggestion"===e?"bg-[#4B2DBB]/80 border-none":"border dark:border-gray-600/10 dark:bg-gray-700 border-gray-400/5 bg-gray-700/20"}`}),(0,c.jsxs)("p",{className:" text-sm sm:text-base flex items-center gap-x-1 truncate",children:["Sugest\xf5es",c.jsx("span",{className:"hidden md:block",children:c.jsx(j,{size:20})})]})]}),(0,c.jsxs)("div",{className:"flex items-center gap-x-2 p-1 m-0 sm:py-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out",onClick:()=>t("Reclamation"),children:[c.jsx("div",{className:`w-[15px] h-[15px] rounded-full transition-all duration-300 ease-in-out ${"Reclamation"===e?"bg-[#4B2DBB]/80 border-none":"border dark:border-gray-600/10 dark:bg-gray-700 border-gray-400/5 bg-gray-700/20"}`}),(0,c.jsxs)("p",{className:"text-sm sm:text-base flex items-center gap-x-1 truncate",children:["Reclama\xe7\xe3o",c.jsx("span",{className:"hidden md:block",children:c.jsx(S,{size:20})})]})]}),(0,c.jsxs)("div",{className:"flex items-center gap-x-2 pr-3 sm:pr-20 m-0 sm:py-2 cursor-pointer rounded-md transition-all duration-300 ease-in-out",onClick:()=>t("Denunciation"),children:[c.jsx("div",{className:`w-[15px] h-[15px] rounded-full transition-all duration-300 ease-in-out ${"Denunciation"===e?"bg-[#4B2DBB]/80 border-none":"border dark:border-gray-600/10 dark:bg-gray-700 border-gray-400/5 bg-gray-700/20"}`}),(0,c.jsxs)("p",{className:"text-sm sm:text-base flex items-center gap-x-1 truncate",children:["Den\xfancia",c.jsx("span",{className:"hidden md:block",children:c.jsx(C,{size:20})})]})]})]}),(0,c.jsxs)("div",{className:"m-0  sm:w-full w-full flex flex-col pb-5 pt-4 px-3 sm:p-20 sm:pt-1 w-full",children:["Suggestion"===e&&c.jsx(nz,{}),"Denunciation"===e&&c.jsx(nL,{}),"Reclamation"===e&&c.jsx(n$,{})]})]})})};var nB=r(9029),nq=r.n(nB);function nW(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}var nH=["color"],nY=(0,f.forwardRef)(function(e,t){var r=e.color,a=nW(e,nH);return(0,f.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a,{ref:t}),(0,f.createElement)("path",{d:"M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z",fill:void 0===r?"currentColor":r,fillRule:"evenodd",clipRule:"evenodd"}))}),nG=["color"],nK=(0,f.forwardRef)(function(e,t){var r=e.color,a=nW(e,nG);return(0,f.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a,{ref:t}),(0,f.createElement)("path",{d:"M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z",fill:void 0===r?"currentColor":r,fillRule:"evenodd",clipRule:"evenodd"}))}),nX=r(4831);let nQ=()=>{let{theme:e,setTheme:t}=(0,nX.F)();return(0,c.jsxs)("div",{className:"fixed right-0 z-50",children:[" ",(0,c.jsxs)(v,{onClick:()=>t("dark"===e?"light":"dark"),className:"sm:w-[55px] m-5",children:[c.jsx(nK,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),c.jsx(nY,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"})]})]})},nJ=()=>(0,c.jsxs)("div",{className:"flex justify-center",children:[(0,c.jsxs)("div",{className:"flex p-4 pt-6 itens-center text-center",children:[c.jsx(nq(),{src:"/logo.svg",width:25,height:25,priority:!0,alt:"Logo"}),c.jsx("h5",{className:"ml-2 leading-[50px]",children:"FALA DO CAMPUS"})]}),c.jsx("div",{children:c.jsx(nQ,{})})]});var n0=r(9404),n1=r.n(n0);r(2878);let n2=()=>{let[e,t]=(0,f.useState)([]),r=e=>{t(t=>[...t,e]),setTimeout(()=>{t(t=>t.filter(t=>t!==e))},500)};return c.jsx(n1(),{href:"https://www.antoniolisboa.site",className:"flex justify-center text-black dark:text-white py-6",target:"_blank",rel:"noopener noreferrer",children:c.jsx("div",{className:"flex flex-col items-baseline text-center px-4",children:c.jsx("h5",{className:"text-base font-medium",children:"Desenvolvido_por_@AntonioLisboa".split("").map((t,a)=>c.jsx("span",{className:`hover-letter ${e.includes(a)?"animate-lift":""}`,onMouseEnter:()=>r(a),children:t},a))})})})};function n9(){return(0,c.jsxs)("main",{className:"min-h-screen flex flex-col max-w-3xl mx-auto p-4",children:[c.jsx(nJ,{}),c.jsx("div",{className:"flex-1 flex flex-col ",children:c.jsx(nU,{})}),c.jsx(n2,{}),c.jsx(p,{})]})}},7210:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(326),n=r(5428),s=r(7577);let i=()=>{let[e,t]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=()=>{let e=window.scrollY,r=document.body.scrollHeight-window.innerHeight;r&&t(100*Number(e/r).toFixed(2))};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),e},o={hidden:{opacity:0},enter:{opacity:1}},l=({children:e})=>{let t=i();return(0,a.jsxs)(a.Fragment,{children:[a.jsx(n.E.main,{variants:o,initial:"hidden",animate:"enter",transition:{type:"linear",delay:.2,duration:.4},children:e}),a.jsx("span",{style:{transform:`translateY(${t-100}%)`},className:"fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"})]})}},9941:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>s});var a=r(326),n=r(4831);function s({children:e,...t}){return a.jsx(n.f,{...t,children:e})}},5675:(e,t,r)=>{"use strict";r.d(t,{Toaster:()=>y});var a=r(326),n=r(7577),s=r(4578),i=r(8671),o=r(6084);let l=s.zt,d=n.forwardRef(({className:e,...t},r)=>a.jsx(s.l_,{ref:r,className:(0,o.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));d.displayName=s.l_.displayName;let u=(0,i.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),c=n.forwardRef(({className:e,variant:t,...r},n)=>a.jsx(s.fC,{ref:n,className:(0,o.cn)(u({variant:t}),e),...r}));c.displayName=s.fC.displayName,n.forwardRef(({className:e,...t},r)=>a.jsx(s.aU,{ref:r,className:(0,o.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=s.aU.displayName;let f=n.forwardRef(({className:e},t)=>a.jsx(a.Fragment,{}));f.displayName=s.x8.displayName;let p=n.forwardRef(({className:e,...t},r)=>a.jsx(s.Dx,{ref:r,className:(0,o.cn)("text-sm font-semibold",e),...t}));p.displayName=s.Dx.displayName;let m=n.forwardRef(({className:e,...t},r)=>a.jsx(s.dk,{ref:r,className:(0,o.cn)("text-sm opacity-90",e),...t}));m.displayName=s.dk.displayName;var h=r(2391);function y(){let{toasts:e}=(0,h.pm)();return(0,a.jsxs)(l,{children:[e.map(function({id:e,title:t,description:r,action:n,...s}){return(0,a.jsxs)(c,{...s,children:[(0,a.jsxs)("div",{className:"grid gap-1",children:[t&&a.jsx(p,{children:t}),r&&a.jsx(m,{children:r})]}),n,a.jsx(f,{})]},e)}),a.jsx(d,{})]})}},2391:(e,t,r)=>{"use strict";r.d(t,{pm:()=>f});var a=r(7577);let n=0,s=new Map,i=e=>{if(s.has(e))return;let t=setTimeout(()=>{s.delete(e),u({type:"REMOVE_TOAST",toastId:e})},1e6);s.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function u(e){d=o(d,e),l.forEach(e=>{e(d)})}function c({...e}){let t=(n=(n+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>u({type:"DISMISS_TOAST",toastId:t});return u({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>u({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function f(){let[e,t]=a.useState(d);return a.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:c,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},6084:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s});var a=r(1135),n=r(1009);function s(...e){return(0,n.m6)((0,a.W)(e))}},9997:(e,t,r)=>{"use strict";var a=r(6777),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function l(e){return a.isMemo(e)?i:o[e.$$typeof]||n}o[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[a.Memo]=i;var d=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,a){if("string"!=typeof r){if(m){var n=p(r);n&&n!==m&&e(t,n,a)}var i=u(r);c&&(i=i.concat(c(r)));for(var o=l(t),h=l(r),y=0;y<i.length;++y){var g=i[y];if(!s[g]&&!(a&&a[g])&&!(h&&h[g])&&!(o&&o[g])){var v=f(r,g);try{d(t,g,v)}catch(e){}}}}return t}},3416:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return a}}),r(3658);let a=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9683:(e,t,r)=>{"use strict";function a(e,t,r,a){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return a}}),r(3658),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2481:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let a=r(1174),n=r(8374),s=r(326),i=n._(r(7577)),o=a._(r(962)),l=a._(r(815)),d=r(3078),u=r(5248),c=r(1206);r(576);let f=r(131),p=a._(r(6820)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,a,n,s,i){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}}))}function y(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let g=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:a,sizes:n,height:o,width:l,decoding:d,className:u,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:g,fill:v,onLoadRef:b,onLoadingCompleteRef:x,setBlurComplete:_,setShowAltText:w,sizesInput:k,onLoad:j,onError:S,...C}=e;return(0,s.jsx)("img",{...C,...y(f),loading:m,width:l,height:o,decoding:d,"data-nimg":v?"fill":"1",className:u,style:c,sizes:n,srcSet:a,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&h(e,p,b,x,_,g,k))},[r,p,b,x,_,S,g,k,t]),onLoad:e=>{h(e.currentTarget,p,b,x,_,g,k)},onError:e=>{w(!0),"empty"!==p&&_(!0),S&&S(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,a={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,a),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...a},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),a=(0,i.useContext)(c.ImageConfigContext),n=(0,i.useMemo)(()=>{let e=m||a||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[a]),{onLoad:o,onLoadingComplete:l}=e,h=(0,i.useRef)(o);(0,i.useEffect)(()=>{h.current=o},[o]);let y=(0,i.useRef)(l);(0,i.useEffect)(()=>{y.current=l},[l]);let[b,x]=(0,i.useState)(!1),[_,w]=(0,i.useState)(!1),{props:k,meta:j}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:b,showAltText:_});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{...k,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:h,onLoadingCompleteRef:y,setBlurComplete:x,setShowAltText:w,sizesInput:e.sizes,ref:t}),j.priority?(0,s.jsx)(v,{isAppRouter:!r,imgAttributes:k}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9404:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let a=r(1174),n=r(326),s=a._(r(7577)),i=r(5619),o=r(944),l=r(3071),d=r(1348),u=r(3416),c=r(131),f=r(2413),p=r(9408),m=r(9683),h=r(3486),y=r(7767);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let v=s.default.forwardRef(function(e,t){let r,a;let{href:l,as:v,children:b,prefetch:x=null,passHref:_,replace:w,shallow:k,scroll:j,locale:S,onClick:C,onMouseEnter:O,onTouchStart:N,legacyBehavior:A=!1,...E}=e;r=b,A&&("string"==typeof r||"number"==typeof r)&&(r=(0,n.jsx)("a",{children:r}));let P=s.default.useContext(c.RouterContext),T=s.default.useContext(f.AppRouterContext),M=null!=P?P:T,R=!P,D=!1!==x,Z=null===x?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:I,as:L}=s.default.useMemo(()=>{if(!P){let e=g(l);return{href:e,as:v?g(v):e}}let[e,t]=(0,i.resolveHref)(P,l,!0);return{href:e,as:v?(0,i.resolveHref)(P,v):t||e}},[P,l,v]),V=s.default.useRef(I),$=s.default.useRef(L);A&&(a=s.default.Children.only(r));let F=A?a&&"object"==typeof a&&a.ref:t,[z,U,B]=(0,p.useIntersection)({rootMargin:"200px"}),q=s.default.useCallback(e=>{($.current!==L||V.current!==I)&&(B(),$.current=L,V.current=I),z(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[L,F,I,B,z]);s.default.useEffect(()=>{},[L,I,U,S,D,null==P?void 0:P.locale,M,R,Z]);let W={ref:q,onClick(e){A||"function"!=typeof C||C(e),A&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,r,a,n,i,l,d,u){let{nodeName:c}=e.currentTarget;if("A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,o.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==l||l;"beforePopState"in t?t[n?"replace":"push"](r,a,{shallow:i,locale:d,scroll:e}):t[n?"replace":"push"](a||r,{scroll:e})};u?s.default.startTransition(f):f()}(e,M,I,L,w,k,j,S,R)},onMouseEnter(e){A||"function"!=typeof O||O(e),A&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e)},onTouchStart:function(e){A||"function"!=typeof N||N(e),A&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e)}};if((0,d.isAbsoluteUrl)(L))W.href=L;else if(!A||_||"a"===a.type&&!("href"in a.props)){let e=void 0!==S?S:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&(0,m.getDomainLocale)(L,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);W.href=t||(0,h.addBasePath)((0,u.addLocale)(L,e,null==P?void 0:P.defaultLocale))}return A?s.default.cloneElement(a,W):(0,n.jsx)("a",{...E,...W,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},956:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return a},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},a="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5619:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return c}});let a=r(2149),n=r(3071),s=r(757),i=r(1348),o=r(3658),l=r(944),d=r(4903),u=r(1394);function c(e,t,r){let c;let f="string"==typeof t?t:(0,n.formatWithValidation)(t),p=f.match(/^[a-zA-Z]{1,}:\/\//),m=p?f.slice(p[0].length):f;if((m.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+f+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(m);f=(p?p[0]:"")+t}if(!(0,l.isLocalURL)(f))return r?[f]:f;try{c=new URL(f.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){c=new URL("/","http://n")}try{let e=new URL(f,c);e.pathname=(0,o.normalizePathTrailingSlash)(e.pathname);let t="";if((0,d.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,a.searchParamsToUrlQuery)(e.searchParams),{result:i,params:o}=(0,u.interpolateAs)(e.pathname,e.pathname,r);i&&(t=(0,n.formatWithValidation)({pathname:i,hash:e.hash,query:(0,s.omit)(r,o)}))}let i=e.origin===c.origin?e.href.slice(e.origin.length):e.href;return r?[i,t||i]:i}catch(e){return r?[f]:f}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9408:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let a=r(7577),n=r(956),s="function"==typeof IntersectionObserver,i=new Map,o=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,d=l||!s,[u,c]=(0,a.useState)(!1),f=(0,a.useRef)(null),p=(0,a.useCallback)(e=>{f.current=e},[]);return(0,a.useEffect)(()=>{if(s){if(d||u)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:a,observer:n,elements:s}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},a=o.find(e=>e.root===r.root&&e.margin===r.margin);if(a&&(t=i.get(a)))return t;let n=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:n},o.push(r),i.set(r,t),t}(r);return s.set(e,t),n.observe(e),function(){if(s.delete(e),n.unobserve(e),0===s.size){n.disconnect(),i.delete(a);let e=o.findIndex(e=>e.root===a.root&&e.margin===a.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!u){let e=(0,n.requestIdleCallback)(()=>c(!0));return()=>(0,n.cancelIdleCallback)(e)}},[d,r,t,u,f.current]),[p,u,(0,a.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.AmpContext},1157:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.HeadManagerContext},1206:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.ImageConfigContext},131:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.RouterContext},8710:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:a=!1}=void 0===e?{}:e;return t||r&&a}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},2451:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return n}});let r=/[|\\{}()[\]^$+*?.-]/,a=/[|\\{}()[\]^$+*?.-]/g;function n(e){return r.test(e)?e.replace(a,"\\$&"):e}},3078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(576);let a=r(380),n=r(5248);function s(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:h,quality:y,width:g,height:v,fill:b=!1,style:x,overrideSrc:_,onLoad:w,onLoadingComplete:k,placeholder:j="empty",blurDataURL:S,fetchPriority:C,layout:O,objectFit:N,objectPosition:A,lazyBoundary:E,lazyRoot:P,...T}=e,{imgConf:M,showAltText:R,blurComplete:D,defaultLoader:Z}=t,I=M||n.imageConfigDefault;if("allSizes"in I)o=I;else{let e=[...I.deviceSizes,...I.imageSizes].sort((e,t)=>e-t),t=I.deviceSizes.sort((e,t)=>e-t);o={...I,allSizes:e,deviceSizes:t}}if(void 0===Z)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=T.loader||Z;delete T.loader,delete T.srcSet;let V="__next_img_default"in L;if(V){if("custom"===o.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...a}=t;return e(a)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let $="",F=i(g),z=i(v);if("object"==typeof(r=u)&&(s(r)||void 0!==r.src)){let e=s(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,$=e.src,!b){if(F||z){if(F&&!z){let t=F/e.width;z=Math.round(e.height*t)}else if(!F&&z){let t=z/e.height;F=Math.round(e.width*t)}}else F=e.width,z=e.height}}let U=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:$)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,U=!1),o.unoptimized&&(f=!0),V&&u.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let B=i(y),q=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:A}:{},R?{}:{color:"transparent"},x),W=D||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:F,heightInt:z,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:q.objectFit})+'")':'url("'+j+'")',H=W?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},Y=function(e){let{config:t,src:r,unoptimized:a,width:n,quality:s,sizes:i,loader:o}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:a,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(r);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:a,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,i),u=l.length-1;return{sizes:i||"w"!==d?i:"100vw",srcSet:l.map((e,a)=>o({config:t,src:r,quality:s,width:e})+" "+("w"===d?e:a+1)+d).join(", "),src:o({config:t,src:r,quality:s,width:l[u]})}}({config:o,src:u,unoptimized:f,width:F,quality:B,sizes:c,loader:L});return{props:{...T,loading:U?"lazy":m,fetchPriority:C,width:F,height:z,decoding:"async",className:h,style:{...q,...H},sizes:Y.sizes,srcSet:Y.srcSet,src:_||Y.src},meta:{unoptimized:f,priority:p,placeholder:j,fill:b}}}},815:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return c}});let a=r(1174),n=r(8374),s=r(326),i=n._(r(7577)),o=a._(r(8003)),l=r(3484),d=r(1157),u=r(8710);function c(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(576);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,a={};return n=>{let s=!0,i=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){i=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?s=!1:t.add(n.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?s=!1:r.add(t);else{let e=n.props[t],r=a[t]||new Set;("name"!==t||!i)&&r.has(e)?s=!1:(r.add(e),a[t]=r)}}}}return s}}()).reverse().map((e,t)=>{let a=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:a})})}let h=function(e){let{children:t}=e,r=(0,i.useContext)(l.AmpStateContext),a=(0,i.useContext)(d.HeadManagerContext);return(0,s.jsx)(o.default,{reduceComponentsToState:m,headManager:a,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},380:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:n,blurDataURL:s,objectFit:i}=e,o=a?40*a:t,l=n?40*n:r,d=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5248:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return a}});let r=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},9029:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return o}});let a=r(1174),n=r(3078),s=r(2481),i=a._(r(6820));function o(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=s.Image},6820:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:a,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+a+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),r.__next_img_default=!0;let a=r},3071:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return s},formatWithValidation:function(){return o},urlObjectKeys:function(){return i}});let a=r(8374)._(r(2149)),n=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,s=e.protocol||"",i=e.pathname||"",o=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:r&&(d=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let u=e.search||l&&"?"+l||"";return s&&!s.endsWith(":")&&(s+=":"),e.slashes||(!s||n.test(s))&&!1!==d?(d="//"+(d||""),i&&"/"!==i[0]&&(i="/"+i)):d||(d=""),o&&"#"!==o[0]&&(o="#"+o),u&&"?"!==u[0]&&(u="?"+u),""+s+d+(i=i.replace(/[?#]/g,encodeURIComponent))+(u=u.replace("#","%23"))+o}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function o(e){return s(e)}},4903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return a.getSortedRoutes},isDynamicRoute:function(){return n.isDynamicRoute}});let a=r(4712),n=r(5541)},1394:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return s}});let a=r(9966),n=r(7249);function s(e,t,r){let s="",i=(0,n.getRouteRegex)(e),o=i.groups,l=(t!==e?(0,a.getRouteMatcher)(i)(t):"")||r;s=e;let d=Object.keys(o);return d.every(e=>{let t=l[e]||"",{repeat:r,optional:a}=o[e],n="["+(r?"...":"")+e+"]";return a&&(n=(t?"":"/")+"["+n+"]"),r&&!Array.isArray(t)&&(t=[t]),(a||e in l)&&(s=s.replace(n,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(s=""),{params:d,result:s}}},5541:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return s}});let a=r(7356),n=/\/\[[^/]+?\](?=\/|$)/;function s(e){return(0,a.isInterceptionRouteAppPath)(e)&&(e=(0,a.extractInterceptionRouteInformation)(e).interceptedRoute),n.test(e)}},944:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return s}});let a=r(1348),n=r(7929);function s(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},757:(e,t)=>{"use strict";function r(e,t){let r={};return Object.keys(e).forEach(a=>{t.includes(a)||(r[a]=e[a])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},2149:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function a(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function n(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,n]=e;Array.isArray(n)?n.forEach(e=>t.append(r,a(e))):t.set(r,a(n))}),t}function s(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return s},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return n}})},9966:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return n}});let a=r(1348);function n(e){let{re:t,groups:r}=e;return e=>{let n=t.exec(e);if(!n)return!1;let s=e=>{try{return decodeURIComponent(e)}catch(e){throw new a.DecodeError("failed to decode param")}},i={};return Object.keys(r).forEach(e=>{let t=r[e],a=n[t.pos];void 0!==a&&(i[e]=~a.indexOf("/")?a.split("/").map(e=>s(e)):t.repeat?[s(a)]:s(a))}),i}}},7249:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return f},getNamedRouteRegex:function(){return c},getRouteRegex:function(){return l}});let a=r(7356),n=r(2451),s=r(3236);function i(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function o(e){let t=(0,s.removeTrailingSlash)(e).slice(1).split("/"),r={},o=1;return{parameterizedRoute:t.map(e=>{let t=a.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),s=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&s){let{key:e,optional:a,repeat:l}=i(s[1]);return r[e]={pos:o++,repeat:l,optional:a},"/"+(0,n.escapeStringRegexp)(t)+"([^/]+?)"}if(!s)return"/"+(0,n.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:a}=i(s[1]);return r[e]={pos:o++,repeat:t,optional:a},t?a?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function l(e){let{parameterizedRoute:t,groups:r}=o(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function d(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:a,routeKeys:s,keyPrefix:o}=e,{key:l,optional:d,repeat:u}=i(a),c=l.replace(/\W/g,"");o&&(c=""+o+c);let f=!1;(0===c.length||c.length>30)&&(f=!0),isNaN(parseInt(c.slice(0,1)))||(f=!0),f&&(c=r()),o?s[c]=""+o+l:s[c]=l;let p=t?(0,n.escapeStringRegexp)(t):"";return u?d?"(?:/"+p+"(?<"+c+">.+?))?":"/"+p+"(?<"+c+">.+?)":"/"+p+"(?<"+c+">[^/]+?)"}function u(e,t){let r;let i=(0,s.removeTrailingSlash)(e).slice(1).split("/"),o=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),l={};return{namedParameterizedRoute:i.map(e=>{let r=a.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),s=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&s){let[r]=e.split(s[0]);return d({getSafeRouteKey:o,interceptionMarker:r,segment:s[1],routeKeys:l,keyPrefix:t?"nxtI":void 0})}return s?d({getSafeRouteKey:o,segment:s[1],routeKeys:l,keyPrefix:t?"nxtP":void 0}):"/"+(0,n.escapeStringRegexp)(e)}).join(""),routeKeys:l}}function c(e,t){let r=u(e,t);return{...l(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function f(e,t){let{parameterizedRoute:r}=o(e),{catchAll:a=!0}=t;if("/"===r)return{namedRegex:"^/"+(a?".*":"")+"$"};let{namedParameterizedRoute:n}=u(e,!1);return{namedRegex:"^"+n+(a?"(?:(/.*)?)":"")+"$"}}},4712:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return a}});class r{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,a){if(0===e.length){this.placeholder=!1;return}if(a)throw Error("Catch-all must be the last part of the URL.");let n=e[0];if(n.startsWith("[")&&n.endsWith("]")){let r=n.slice(1,-1),i=!1;if(r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1),i=!0),r.startsWith("...")&&(r=r.substring(3),a=!0),r.startsWith("[")||r.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+r+"').");if(r.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+r+"').");function s(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===n.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(a){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');s(this.optionalRestSlugName,r),this.optionalRestSlugName=r,n="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');s(this.restSlugName,r),this.restSlugName=r,n="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');s(this.slugName,r),this.slugName=r,n="[]"}}this.children.has(n)||this.children.set(n,new r),this.children.get(n)._insert(e.slice(1),t,a)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function a(e){let t=new r;return e.forEach(e=>t.insert(e)),t.smoosh()}},8003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let a=r(7577),n=()=>{},s=()=>{};function i(e){var t;let{headManager:r,reduceComponentsToState:i}=e;function o(){if(r&&r.mountedInstances){let t=a.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),n(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),n(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),s(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1348:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return m},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return g},NormalizeError:function(){return h},PageNotFoundError:function(){return y},SP:function(){return f},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return a},getDisplayName:function(){return l},getLocationOrigin:function(){return i},getURL:function(){return o},isAbsoluteUrl:function(){return s},isResSent:function(){return d},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return b}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return function(){for(var a=arguments.length,n=Array(a),s=0;s<a;s++)n[s]=arguments[s];return r||(r=!0,t=e(...n)),t}}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>n.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function o(){let{href:e}=window.location,t=i();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let a=await e.getInitialProps(t);if(r&&d(r))return a;if(!a)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+a+'" instead.');return a}let f="undefined"!=typeof performance,p=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}},9652:(e,t)=>{"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),t.isFragment=function(e){return function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case i:case s:case c:case f:return e;default:switch(e=e&&e.$$typeof){case d:case l:case u:case m:case p:case o:return e;default:return t}}case a:return t}}}(e)===n}},7191:(e,t,r)=>{"use strict";e.exports=r(9652)},745:(e,t)=>{"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,o=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,c=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case u:case c:case s:case o:case i:case p:return e;default:switch(e=e&&e.$$typeof){case d:case f:case y:case h:case l:return e;default:return t}}case n:return t}}}function w(e){return _(e)===c}t.AsyncMode=u,t.ConcurrentMode=c,t.ContextConsumer=d,t.ContextProvider=l,t.Element=a,t.ForwardRef=f,t.Fragment=s,t.Lazy=y,t.Memo=h,t.Portal=n,t.Profiler=o,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||_(e)===u},t.isConcurrentMode=w,t.isContextConsumer=function(e){return _(e)===d},t.isContextProvider=function(e){return _(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return _(e)===f},t.isFragment=function(e){return _(e)===s},t.isLazy=function(e){return _(e)===y},t.isMemo=function(e){return _(e)===h},t.isPortal=function(e){return _(e)===n},t.isProfiler=function(e){return _(e)===o},t.isStrictMode=function(e){return _(e)===i},t.isSuspense=function(e){return _(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===c||e===o||e===i||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===l||e.$$typeof===d||e.$$typeof===f||e.$$typeof===v||e.$$typeof===b||e.$$typeof===x||e.$$typeof===g)},t.typeOf=_},6777:(e,t,r)=>{"use strict";e.exports=r(745)},2037:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y,metadata:()=>h});var a=r(9510),n=r(1364),s=r.n(n);r(7272);var i=r(8570);let o=(0,i.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\components\ui\toaster.jsx`),{__esModule:l,$$typeof:d}=o;o.default;let u=(0,i.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\components\ui\toaster.jsx#Toaster`),c=(0,i.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\components\ThemeProvider.jsx`),{__esModule:f,$$typeof:p}=c;c.default;let m=(0,i.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\components\ThemeProvider.jsx#ThemeProvider`),h={title:"Motion App",description:"Generated by create next app"};function y({children:e}){return a.jsx("html",{lang:"pt",suppressHydrationWarning:!0,children:a.jsx("body",{className:s().className,children:(0,a.jsxs)(m,{attribute:"class",defaultTheme:"light",children:[e,a.jsx(u,{})]})})})}},169:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>s,default:()=>o});var a=r(8570);let n=(0,a.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\app\page.jsx`),{__esModule:s,$$typeof:i}=n;n.default;let o=(0,a.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\app\page.jsx#default`)},9915:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>s,default:()=>o});var a=r(8570);let n=(0,a.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\app\template.jsx`),{__esModule:s,$$typeof:i}=n;n.default;let o=(0,a.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\app\template.jsx#default`)},7272:()=>{},2878:()=>{},5684:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[574],()=>r(818));module.exports=a})();