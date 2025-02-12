(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},818:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>f,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),r(169),r(2037),r(9915),r(5866);var a=r(3191),s=r(8716),n=r(7922),i=r.n(n),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,169)),"C:\\Users\\anton\\Documents\\GitHub\\FALADOCAMPUS\\app\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,2037)),"C:\\Users\\anton\\Documents\\GitHub\\FALADOCAMPUS\\app\\layout.jsx"],template:[()=>Promise.resolve().then(r.bind(r,9915)),"C:\\Users\\anton\\Documents\\GitHub\\FALADOCAMPUS\\app\\template.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\anton\\Documents\\GitHub\\FALADOCAMPUS\\app\\page.jsx"],u="/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5873:(e,t,r)=>{Promise.resolve().then(r.bind(r,9941)),Promise.resolve().then(r.bind(r,4167))},6113:(e,t,r)=>{Promise.resolve().then(r.bind(r,5473))},2941:(e,t,r)=>{Promise.resolve().then(r.bind(r,7210))},6840:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5473:(e,t,r)=>{"use strict";let a;r.r(t),r.d(t,{default:()=>sU});var s,n,i,o,l,d,c,u=r(326),f=r(7577);let p=()=>{let e=(0,f.useRef)(null),[t,r]=(0,f.useState)("light");return(0,f.useEffect)(()=>{},[]),(0,f.useEffect)(()=>{},[t]),u.jsx("canvas",{ref:e,style:{position:"fixed",top:0,left:0,zIndex:-1}})};var m=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{a.insertRule(e,a.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),h=Math.abs,y=String.fromCharCode,g=Object.assign;function v(e,t,r){return e.replace(t,r)}function x(e,t){return e.indexOf(t)}function _(e,t){return 0|e.charCodeAt(t)}function b(e,t,r){return e.slice(t,r)}function w(e){return e.length}function k(e,t){return t.push(e),e}var C=1,S=1,j=0,A=0,N=0,O="";function T(e,t,r,a,s,n,i){return{value:e,root:t,parent:r,type:a,props:s,children:n,line:C,column:S,length:i,return:""}}function E(e,t){return g(T("",null,null,"",null,null,0),e,{length:-e.length},t)}function P(){return N=A<j?_(O,A++):0,S++,10===N&&(S=1,C++),N}function M(){return _(O,A)}function Z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function D(e){return C=S=1,j=w(O=e),A=0,[]}function V(e){var t,r;return(t=A-1,r=function e(t){for(;P();)switch(N){case t:return A;case 34:case 39:34!==t&&39!==t&&e(N);break;case 40:41===t&&e(t);break;case 92:P()}return A}(91===e?e+2:40===e?e+1:e),b(O,t,r)).trim()}var $="-ms-",R="-moz-",I="-webkit-",L="comm",F="rule",z="decl",U="@keyframes";function B(e,t){for(var r="",a=e.length,s=0;s<a;s++)r+=t(e[s],s,e,t)||"";return r}function H(e,t,r,a){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case z:return e.return=e.return||e.value;case L:return"";case U:return e.return=e.value+"{"+B(e.children,a)+"}";case F:e.value=e.props.join(",")}return w(r=B(e.children,a))?e.return=e.value+"{"+r+"}":""}function q(e){var t=e.length;return function(r,a,s,n){for(var i="",o=0;o<t;o++)i+=e[o](r,a,s,n)||"";return i}}function W(e){var t;return t=function e(t,r,a,s,n,i,o,l,d){for(var c,u=0,f=0,p=o,m=0,h=0,g=0,j=1,E=1,D=1,$=0,R="",I=n,F=i,z=s,U=R;E;)switch(g=$,$=P()){case 40:if(108!=g&&58==_(U,p-1)){-1!=x(U+=v(V($),"&","&\f"),"&\f")&&(D=-1);break}case 34:case 39:case 91:U+=V($);break;case 9:case 10:case 13:case 32:U+=function(e){for(;N=M();)if(N<33)P();else break;return Z(e)>2||Z(N)>3?"":" "}(g);break;case 92:U+=function(e,t){for(var r;--t&&P()&&!(N<48)&&!(N>102)&&(!(N>57)||!(N<65))&&(!(N>70)||!(N<97)););return r=A+(t<6&&32==M()&&32==P()),b(O,e,r)}(A-1,7);continue;case 47:switch(M()){case 42:case 47:k(T(c=function(e,t){for(;P();)if(e+N===57)break;else if(e+N===84&&47===M())break;return"/*"+b(O,t,A-1)+"*"+y(47===e?e:P())}(P(),A),r,a,L,y(N),b(c,2,-2),0),d);break;default:U+="/"}break;case 123*j:l[u++]=w(U)*D;case 125*j:case 59:case 0:switch($){case 0:case 125:E=0;case 59+f:-1==D&&(U=v(U,/\f/g,"")),h>0&&w(U)-p&&k(h>32?G(U+";",s,a,p-1):G(v(U," ","")+";",s,a,p-2),d);break;case 59:U+=";";default:if(k(z=Y(U,r,a,u,f,n,l,R,I=[],F=[],p),i),123===$){if(0===f)e(U,r,z,z,I,i,p,l,F);else switch(99===m&&110===_(U,3)?100:m){case 100:case 108:case 109:case 115:e(t,z,z,s&&k(Y(t,z,z,0,0,n,l,R,n,I=[],p),F),n,F,p,l,s?I:F);break;default:e(U,z,z,z,[""],F,0,l,F)}}}u=f=h=0,j=D=1,R=U="",p=o;break;case 58:p=1+w(U),h=g;default:if(j<1){if(123==$)--j;else if(125==$&&0==j++&&125==(N=A>0?_(O,--A):0,S--,10===N&&(S=1,C--),N))continue}switch(U+=y($),$*j){case 38:D=f>0?1:(U+="\f",-1);break;case 44:l[u++]=(w(U)-1)*D,D=1;break;case 64:45===M()&&(U+=V(P())),m=M(),f=p=w(R=U+=function(e){for(;!Z(M());)P();return b(O,e,A)}(A)),$++;break;case 45:45===g&&2==w(U)&&(j=0)}}return i}("",null,null,null,[""],e=D(e),0,[0],e),O="",t}function Y(e,t,r,a,s,n,i,o,l,d,c){for(var u=s-1,f=0===s?n:[""],p=f.length,m=0,y=0,g=0;m<a;++m)for(var x=0,_=b(e,u+1,u=h(y=i[m])),w=e;x<p;++x)(w=(y>0?f[x]+" "+_:v(_,/&\f/g,f[x])).trim())&&(l[g++]=w);return T(e,t,r,0===s?F:o,l,d,c)}function G(e,t,r,a){return T(e,t,r,z,b(e,0,a),b(e,a+1,-1),a)}function X(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var K="undefined"!=typeof document,J=function(e,t,r){for(var a=0,s=0;a=s,s=M(),38===a&&12===s&&(t[r]=1),!Z(s);)P();return b(O,e,A)},Q=function(e,t){var r=-1,a=44;do switch(Z(a)){case 0:38===a&&12===M()&&(t[r]=1),e[r]+=J(A-1,t,r);break;case 2:e[r]+=V(a);break;case 4:if(44===a){e[++r]=58===M()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=y(a)}while(a=P());return e},ee=function(e,t){var r;return r=Q(D(e),t),O="",r},et=new WeakMap,er=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,a=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||et.get(r))&&!a){et.set(e,!0);for(var s=[],n=ee(t,s),i=r.props,o=0,l=0;o<n.length;o++)for(var d=0;d<i.length;d++,l++)e.props[l]=s[o]?n[o].replace(/&\f/g,i[d]):i[d]+" "+n[o]}}},ea=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},es=K?void 0:function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var a=e(r);return t.set(r,a),a}}(function(){return X(function(){var e={};return function(t){return e[t]}})}),en=[function(e,t,r,a){if(e.length>-1&&!e.return)switch(e.type){case z:e.return=function e(t,r){switch(45^_(t,0)?(((r<<2^_(t,0))<<2^_(t,1))<<2^_(t,2))<<2^_(t,3):0){case 5103:return I+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return I+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return I+t+R+t+$+t+t;case 6828:case 4268:return I+t+$+t+t;case 6165:return I+t+$+"flex-"+t+t;case 5187:return I+t+v(t,/(\w+).+(:[^]+)/,I+"box-$1$2"+$+"flex-$1$2")+t;case 5443:return I+t+$+"flex-item-"+v(t,/flex-|-self/,"")+t;case 4675:return I+t+$+"flex-line-pack"+v(t,/align-content|flex-|-self/,"")+t;case 5548:return I+t+$+v(t,"shrink","negative")+t;case 5292:return I+t+$+v(t,"basis","preferred-size")+t;case 6060:return I+"box-"+v(t,"-grow","")+I+t+$+v(t,"grow","positive")+t;case 4554:return I+v(t,/([^-])(transform)/g,"$1"+I+"$2")+t;case 6187:return v(v(v(t,/(zoom-|grab)/,I+"$1"),/(image-set)/,I+"$1"),t,"")+t;case 5495:case 3959:return v(t,/(image-set\([^]*)/,I+"$1$`$1");case 4968:return v(v(t,/(.+:)(flex-)?(.*)/,I+"box-pack:$3"+$+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+I+t+t;case 4095:case 3583:case 4068:case 2532:return v(t,/(.+)-inline(.+)/,I+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(w(t)-1-r>6)switch(_(t,r+1)){case 109:if(45!==_(t,r+4))break;case 102:return v(t,/(.+:)(.+)-([^]+)/,"$1"+I+"$2-$3$1"+R+(108==_(t,r+3)?"$3":"$2-$3"))+t;case 115:return~x(t,"stretch")?e(v(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==_(t,r+1))break;case 6444:switch(_(t,w(t)-3-(~x(t,"!important")&&10))){case 107:return v(t,":",":"+I)+t;case 101:return v(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+I+(45===_(t,14)?"inline-":"")+"box$3$1"+I+"$2$3$1"+$+"$2box$3")+t}break;case 5936:switch(_(t,r+11)){case 114:return I+t+$+v(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return I+t+$+v(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return I+t+$+v(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return I+t+$+t+t}return t}(e.value,e.length);break;case U:return B([E(e,{value:v(e.value,"@","@"+I)})],a);case F:if(e.length){var s,n;return s=e.props,n=function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return B([E(e,{props:[v(t,/:(read-\w+)/,":"+R+"$1")]})],a);case"::placeholder":return B([E(e,{props:[v(t,/:(plac\w+)/,":"+I+"input-$1")]}),E(e,{props:[v(t,/:(plac\w+)/,":"+R+"$1")]}),E(e,{props:[v(t,/:(plac\w+)/,$+"input-$1")]})],a)}return""},s.map(n).join("")}}}],ei=function(e){var t=e.key;if(K&&"css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var a=e.stylisPlugins||en,s={},n=[];K&&(l=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)s[t[r]]=!0;n.push(e)}));var i=[er,ea];if(K){var o,l,d,c,u=[H,(o=function(e){c.insert(e)},function(e){!e.root&&(e=e.return)&&o(e)})],f=q(i.concat(a,u));d=function(e,t,r,a){c=r,B(W(e?e+"{"+t.styles+"}":t.styles),f),a&&(g.inserted[t.name]=!0)}}else{var p=q(i.concat(a,[H])),h=es(a)(t),y=function(e,t){var r=t.name;return void 0===h[r]&&(h[r]=B(W(e?e+"{"+t.styles+"}":t.styles),p)),h[r]};d=function(e,t,r,a){var s=t.name,n=y(e,t);return void 0===g.compat?(a&&(g.inserted[s]=!0),n):a?void(g.inserted[s]=n):n}}var g={key:t,sheet:new m({key:t,container:l,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:d};return g.sheet.hydrate(n),g},eo="undefined"!=typeof document;function el(e,t,r){var a="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):a+=r+" "}),a}var ed=function(e,t,r){var a=e.key+"-"+t.name;(!1===r||!1===eo&&void 0!==e.compat)&&void 0===e.registered[a]&&(e.registered[a]=t.styles)},ec=function(e,t,r){ed(e,t,r);var a=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var s="",n=t;do{var i=e.insert(t===n?"."+a:"",n,e.sheet,!0);eo||void 0===i||(s+=i),n=n.next}while(void 0!==n);if(!eo&&0!==s.length)return s}},eu={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ef=/[A-Z]|^ms/g,ep=/_EMO_([^_]+?)_([^]*?)_EMO_/g,em=function(e){return 45===e.charCodeAt(1)},eh=function(e){return null!=e&&"boolean"!=typeof e},ey=X(function(e){return em(e)?e:e.replace(ef,"-$&").toLowerCase()}),eg=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ep,function(e,t,r){return s={name:t,styles:r,next:s},t})}return 1===eu[e]||em(e)||"number"!=typeof t||0===t?t:t+"px"};function ev(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return s={name:r.name,styles:r.styles,next:s},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)s={name:a.name,styles:a.styles,next:s},a=a.next;return r.styles+";"}return function(e,t,r){var a="";if(Array.isArray(r))for(var s=0;s<r.length;s++)a+=ev(e,t,r[s])+";";else for(var n in r){var i=r[n];if("object"!=typeof i)null!=t&&void 0!==t[i]?a+=n+"{"+t[i]+"}":eh(i)&&(a+=ey(n)+":"+eg(n,i)+";");else if(Array.isArray(i)&&"string"==typeof i[0]&&(null==t||void 0===t[i[0]]))for(var o=0;o<i.length;o++)eh(i[o])&&(a+=ey(n)+":"+eg(n,i[o])+";");else{var l=ev(e,t,i);switch(n){case"animation":case"animationName":a+=ey(n)+":"+l+";";break;default:a+=n+"{"+l+"}"}}}return a}(e,t,r);case"function":if(void 0!==e){var n=s,i=r(e);return s=n,ev(e,t,i)}}if(null==t)return r;var o=t[r];return void 0!==o?o:r}var ex=/label:\s*([^\s;\n{]+)\s*(;|$)/g;function e_(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a,n=!0,i="";s=void 0;var o=e[0];null==o||void 0===o.raw?(n=!1,i+=ev(r,t,o)):i+=o[0];for(var l=1;l<e.length;l++)i+=ev(r,t,e[l]),n&&(i+=o[l]);ex.lastIndex=0;for(var d="";null!==(a=ex.exec(i));)d+="-"+a[1];return{name:function(e){for(var t,r=0,a=0,s=e.length;s>=4;++a,s-=4)t=(65535&(t=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(s){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(i)+d,styles:i,next:s}}var eb=!!f.useInsertionEffect&&f.useInsertionEffect,ew="undefined"!=typeof document&&eb||function(e){return e()};eb||f.useLayoutEffect;var ek="undefined"!=typeof document,eC=f.createContext("undefined"!=typeof HTMLElement?ei({key:"css"}):null);eC.Provider;var eS=function(e){return(0,f.forwardRef)(function(t,r){return e(t,(0,f.useContext)(eC),r)})};ek||(eS=function(e){return function(t){var r=(0,f.useContext)(eC);return null===r?(r=ei({key:"css"}),f.createElement(eC.Provider,{value:r},e(t,r))):e(t,r)}});var ej=f.createContext({}),eA={}.hasOwnProperty,eN="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",eO=function(e,t){var r={};for(var a in t)eA.call(t,a)&&(r[a]=t[a]);return r[eN]=e,r},eT=function(e){var t=e.cache,r=e.serialized,a=e.isStringTag;ed(t,r,a);var s=ew(function(){return ec(t,r,a)});if(!ek&&void 0!==s){for(var n,i=r.name,o=r.next;void 0!==o;)i+=" "+o.name,o=o.next;return f.createElement("style",((n={})["data-emotion"]=t.key+" "+i,n.dangerouslySetInnerHTML={__html:s},n.nonce=t.sheet.nonce,n))}return null},eE=eS(function(e,t,r){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var s=e[eN],n=[a],i="";"string"==typeof e.className?i=el(t.registered,n,e.className):null!=e.className&&(i=e.className+" ");var o=e_(n,void 0,f.useContext(ej));i+=t.key+"-"+o.name;var l={};for(var d in e)eA.call(e,d)&&"css"!==d&&d!==eN&&(l[d]=e[d]);return l.className=i,r&&(l.ref=r),f.createElement(f.Fragment,null,f.createElement(eT,{cache:t,serialized:o,isStringTag:"string"==typeof s}),f.createElement(s,l))});r(5684),r(9997);var eP=u.Fragment;function eM(e,t,r){return eA.call(t,"css")?u.jsx(eE,eO(e,t),r):u.jsx(e,t,r)}function eZ(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return e_(t)}var eD=function(){var e=eZ.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},eV=function e(t){for(var r=t.length,a=0,s="";a<r;a++){var n=t[a];if(null!=n){var i=void 0;switch(typeof n){case"boolean":break;case"object":if(Array.isArray(n))i=e(n);else for(var o in i="",n)n[o]&&o&&(i&&(i+=" "),i+=o);break;default:i=n}i&&(s&&(s+=" "),s+=i)}}return s},e$=function(e){var t,r=e.cache,a=e.serializedArr,s=ew(function(){for(var e="",t=0;t<a.length;t++){var s=ec(r,a[t],!1);ek||void 0===s||(e+=s)}if(!ek)return e});return ek||0===s.length?null:f.createElement("style",((t={})["data-emotion"]=r.key+" "+a.map(function(e){return e.name}).join(" "),t.dangerouslySetInnerHTML={__html:s},t.nonce=r.sheet.nonce,t))},eR=eS(function(e,t){var r=[],a=function(){for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];var n=e_(a,t.registered);return r.push(n),ed(t,n,!1),t.key+"-"+n.name},s={css:a,cx:function(){for(var e,r,s,n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];return s=el(t.registered,r=[],e=eV(i)),r.length<2?e:s+a(r)},theme:f.useContext(ej)},n=e.children(s);return f.createElement(f.Fragment,null,f.createElement(e$,{cache:t,serializedArr:r}),n)}),eI=Object.defineProperty,eL=(e,t,r)=>t in e?eI(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eF=(e,t,r)=>eL(e,"symbol"!=typeof t?t+"":t,r),ez=new Map,eU=new WeakMap,eB=0,eH=void 0;function eq(e,t,r={},a=eH){if(void 0===window.IntersectionObserver&&void 0!==a){let s=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}let{id:s,observer:n,elements:i}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(eU.has(r)||(eB+=1,eU.set(r,eB.toString())),eU.get(r)):"0":e[t]}`}).toString(),r=ez.get(t);if(!r){let a;let s=new Map,n=new IntersectionObserver(t=>{t.forEach(t=>{var r;let n=t.isIntersecting&&a.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=n),null==(r=s.get(t.target))||r.forEach(e=>{e(n,t)})})},e);a=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:n,elements:s},ez.set(t,r)}return r}(r),o=i.get(e)||[];return i.has(e)||i.set(e,o),o.push(t),n.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(i.delete(e),n.unobserve(e)),0===i.size&&(n.disconnect(),ez.delete(s))}}var eW=class extends f.Component{constructor(e){super(e),eF(this,"node",null),eF(this,"_unobserveCb",null),eF(this,"handleNode",e=>{!this.node||(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),eF(this,"handleChange",(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:e,root:t,rootMargin:r,trackVisibility:a,delay:s,fallbackInView:n}=this.props;this._unobserveCb=eq(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:a,delay:s},n)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:e}=this.props;if("function"==typeof e){let{inView:t,entry:r}=this.state;return e({inView:t,entry:r,ref:this.handleNode})}let{as:t,triggerOnce:r,threshold:a,root:s,rootMargin:n,onChange:i,skip:o,trackVisibility:l,delay:d,initialInView:c,fallbackInView:u,...p}=this.props;return f.createElement(t||"div",{ref:this.handleNode,...p},e)}};function eY({threshold:e,delay:t,trackVisibility:r,rootMargin:a,root:s,triggerOnce:n,skip:i,initialInView:o,fallbackInView:l,onChange:d}={}){var c;let[u,p]=f.useState(null),m=f.useRef(),[h,y]=f.useState({inView:!!o,entry:void 0});m.current=d,f.useEffect(()=>{let o;if(!i&&u)return o=eq(u,(e,t)=>{y({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&n&&o&&(o(),o=void 0)},{root:s,rootMargin:a,threshold:e,trackVisibility:r,delay:t},l),()=>{o&&o()}},[Array.isArray(e)?e.toString():e,u,s,a,n,i,r,l,t]);let g=null==(c=h.entry)?void 0:c.target,v=f.useRef();u||!g||n||i||v.current===g||(v.current=g,y({inView:!!o,entry:void 0}));let x=[p,h.inView,h.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}var eG=r(7191);eD`
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
`,eD`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`;let eX=eD`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,eK=eD`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eJ=eD`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eQ=eD`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e0=eD`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e1=eD`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e9=eD`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e2=eD`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e3=eD`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e5=eD`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e8=eD`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e4=eD`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e6=eD`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function e7(e){var t;return t=()=>null,r=>r?e():t()}function te(e){return e7(()=>({opacity:0}))(e)}let tt=e=>{let{cascade:t=!1,damping:r=.5,delay:a=0,duration:s=1e3,fraction:n=0,keyframes:i=e1,triggerOnce:o=!1,className:l,style:d,childClassName:c,childStyle:u,children:p,onVisibilityChange:m}=e,h=(0,f.useMemo)(()=>(function({duration:e=1e3,delay:t=0,timingFunction:r="ease",keyframes:a=e1,iterationCount:s=1}){return eZ`
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
  `})({keyframes:i,duration:s}),[s,i]);return void 0==p?null:!function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}(p)?(0,eG.isFragment)(p)?eM(ts,{...e,animationStyles:h}):eM(eP,{children:f.Children.map(p,(i,p)=>{if(!(0,f.isValidElement)(i))return null;let y=a+(t?p*s*r:0);switch(i.type){case"ol":case"ul":return eM(eR,{children:({cx:t})=>eM(i.type,{...i.props,className:t(l,i.props.className),style:Object.assign({},d,i.props.style),children:eM(tt,{...e,children:i.props.children})})});case"li":return eM(eW,{threshold:n,triggerOnce:o,onChange:m,children:({inView:e,ref:t})=>eM(eR,{children:({cx:r})=>eM(i.type,{...i.props,ref:t,className:r(c,i.props.className),css:e7(()=>h)(e),style:Object.assign({},u,i.props.style,te(!e),{animationDelay:y+"ms"})})})});default:return eM(eW,{threshold:n,triggerOnce:o,onChange:m,children:({inView:e,ref:t})=>eM("div",{ref:t,className:l,css:e7(()=>h)(e),style:Object.assign({},d,te(!e),{animationDelay:y+"ms"}),children:eM(eR,{children:({cx:e})=>eM(i.type,{...i.props,className:e(c,i.props.className),style:Object.assign({},u,i.props.style)})})})})}})}):eM(ta,{...e,animationStyles:h,children:String(p)})},tr={display:"inline-block",whiteSpace:"pre"},ta=e=>{var t,r;let{animationStyles:a,cascade:s=!1,damping:n=.5,delay:i=0,duration:o=1e3,fraction:l=0,triggerOnce:d=!1,className:c,style:u,children:f,onVisibilityChange:p}=e,{ref:m,inView:h}=eY({triggerOnce:d,threshold:l,onChange:p});return(t=()=>eM("div",{ref:m,className:c,style:Object.assign({},u,tr),children:f.split("").map((e,t)=>eM("span",{css:e7(()=>a)(h),style:{animationDelay:i+t*o*n+"ms"},children:e},t))}),r=()=>eM(ts,{...e,children:f}),e=>e?t():r())(s)},ts=e=>{let{animationStyles:t,fraction:r=0,triggerOnce:a=!1,className:s,style:n,children:i,onVisibilityChange:o}=e,{ref:l,inView:d}=eY({triggerOnce:a,threshold:r,onChange:o});return eM("div",{ref:l,className:s,css:e7(()=>t)(d),style:Object.assign({},n,te(!d)),children:i})},tn=(eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,eD`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,eD`
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
`,eD`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`),ti=eD`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,to=eD`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,tl=eD`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,td=eD`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,tc=eD`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,tu=eD`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,tf=eD`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,tp=eD`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,tm=eD`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,th=eD`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,ty=eD`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,tg=eD`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,tv=e=>{let{big:t=!1,direction:r,reverse:a=!1,...s}=e;return eM(tt,{keyframes:(0,f.useMemo)(()=>(function(e,t,r){switch(r){case"bottom-left":return t?ti:eK;case"bottom-right":return t?to:eJ;case"down":return e?t?td:e0:t?tl:eQ;case"left":return e?t?tu:e9:t?tc:e1;case"right":return e?t?tp:e3:t?tf:e2;case"top-left":return t?tm:e5;case"top-right":return t?th:e8;case"up":return e?t?tg:e6:t?ty:e4;default:return t?tn:eX}})(t,a,r),[t,r,a]),...s})};eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eD`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,eD`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eD`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eD`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eD`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eD`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,eD`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,eD`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,eD`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,eD`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,eD`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,eD`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eD`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eD`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eD`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,eD`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,eD`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,eD`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,eD`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,eD`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
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
`,eD`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,eD`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,eD`
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
`;var tx=r(4214),t_=r(8671),tb=r(6084);let tw=(0,t_.j)("inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-[55px] px-6 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),tk=f.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...s},n)=>{let i=a?tx.g7:"button";return u.jsx(i,{className:(0,tb.cn)(tw({variant:t,size:r,className:e})),ref:n,...s})});tk.displayName="Button";/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let tC=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tS=(...e)=>e.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let tA=(0,f.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:s="",children:n,iconNode:i,...o},l)=>(0,f.createElement)("svg",{ref:l,...tj,width:t,height:t,stroke:e,strokeWidth:a?24*Number(r)/Number(t):r,className:tS("lucide",s),...o},[...i.map(([e,t])=>(0,f.createElement)(e,t)),...Array.isArray(n)?n:[n]])),tN=(e,t)=>{let r=(0,f.forwardRef)(({className:r,...a},s)=>(0,f.createElement)(tA,{ref:s,iconNode:t,className:tS(`lucide-${tC(e)}`,r),...a}));return r.displayName=`${e}`,r},tO=tN("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),tT=tN("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),tE=tN("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]),tP=()=>u.jsx(u.Fragment,{children:u.jsx("p",{children:"Denunciation"})}),tM=()=>u.jsx(u.Fragment,{children:u.jsx("p",{children:"Reclamation"})});var tZ=e=>"checkbox"===e.type,tD=e=>e instanceof Date,tV=e=>null==e;let t$=e=>"object"==typeof e;var tR=e=>!tV(e)&&!Array.isArray(e)&&t$(e)&&!tD(e),tI=e=>tR(e)&&e.target?tZ(e.target)?e.target.checked:e.target.value:e,tL=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,tF=(e,t)=>e.has(tL(t)),tz=e=>{let t=e.constructor&&e.constructor.prototype;return tR(t)&&t.hasOwnProperty("isPrototypeOf")},tU="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function tB(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(tU&&(e instanceof Blob||e instanceof FileList))&&(r||tR(e))))return e;else if(t=r?[]:{},r||tz(e))for(let r in e)e.hasOwnProperty(r)&&(t[r]=tB(e[r]));else t=e;return t}var tH=e=>Array.isArray(e)?e.filter(Boolean):[],tq=e=>void 0===e,tW=(e,t,r)=>{if(!t||!tR(e))return r;let a=tH(t.split(/[,[\].]+?/)).reduce((e,t)=>tV(e)?e:e[t],e);return tq(a)||a===e?tq(e[t])?r:e[t]:a},tY=e=>"boolean"==typeof e,tG=e=>/^\w*$/.test(e),tX=e=>tH(e.replace(/["|']|\]/g,"").split(/\.|\[/)),tK=(e,t,r)=>{let a=-1,s=tG(t)?[t]:tX(t),n=s.length,i=n-1;for(;++a<n;){let t=s[a],n=r;if(a!==i){let r=e[t];n=tR(r)||Array.isArray(r)?r:isNaN(+s[a+1])?{}:[]}if("__proto__"===t)return;e[t]=n,e=e[t]}return e};let tJ={BLUR:"blur",FOCUS_OUT:"focusout"},tQ={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},t0={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};f.createContext(null);var t1=(e,t,r,a=!0)=>{let s={defaultValues:t._defaultValues};for(let n in e)Object.defineProperty(s,n,{get:()=>(t._proxyFormState[n]!==tQ.all&&(t._proxyFormState[n]=!a||tQ.all),r&&(r[n]=!0),e[n])});return s},t9=e=>tR(e)&&!Object.keys(e).length,t2=(e,t,r,a)=>{r(e);let{name:s,...n}=e;return t9(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find(e=>t[e]===(!a||tQ.all))},t3=e=>Array.isArray(e)?e:[e],t5=e=>"string"==typeof e,t8=(e,t,r,a,s)=>t5(e)?(a&&t.watch.add(e),tW(r,e,s)):Array.isArray(e)?e.map(e=>(a&&t.watch.add(e),tW(r,e))):(a&&(t.watchAll=!0),r),t4=(e,t,r,a,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:s||!0}}:{},t6=e=>({isOnSubmit:!e||e===tQ.onSubmit,isOnBlur:e===tQ.onBlur,isOnChange:e===tQ.onChange,isOnAll:e===tQ.all,isOnTouch:e===tQ.onTouched}),t7=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));let re=(e,t,r,a)=>{for(let s of r||Object.keys(e)){let r=tW(e,s);if(r){let{_f:e,...n}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],s)&&!a||e.ref&&t(e.ref,e.name)&&!a)break;re(n,t)}else tR(n)&&re(n,t)}}};var rt=(e,t,r)=>{let a=t3(tW(e,r));return tK(a,"root",t[r]),tK(e,r,a),e},rr=e=>"file"===e.type,ra=e=>"function"==typeof e,rs=e=>{if(!tU)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},rn=e=>t5(e),ri=e=>"radio"===e.type,ro=e=>e instanceof RegExp;let rl={value:!1,isValid:!1},rd={value:!0,isValid:!0};var rc=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!tq(e[0].attributes.value)?tq(e[0].value)||""===e[0].value?rd:{value:e[0].value,isValid:!0}:rd:rl}return rl};let ru={isValid:!1,value:null};var rf=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,ru):ru;function rp(e,t,r="validate"){if(rn(e)||Array.isArray(e)&&e.every(rn)||tY(e)&&!e)return{type:r,message:rn(e)?e:"",ref:t}}var rm=e=>tR(e)&&!ro(e)?e:{value:e,message:""},rh=async(e,t,r,a,s)=>{let{ref:n,refs:i,required:o,maxLength:l,minLength:d,min:c,max:u,pattern:f,validate:p,name:m,valueAsNumber:h,mount:y,disabled:g}=e._f,v=tW(t,m);if(!y||g)return{};let x=i?i[0]:n,_=e=>{a&&x.reportValidity&&(x.setCustomValidity(tY(e)?"":e||""),x.reportValidity())},b={},w=ri(n),k=tZ(n),C=(h||rr(n))&&tq(n.value)&&tq(v)||rs(n)&&""===n.value||""===v||Array.isArray(v)&&!v.length,S=t4.bind(null,m,r,b),j=(e,t,r,a=t0.maxLength,s=t0.minLength)=>{let i=e?t:r;b[m]={type:e?a:s,message:i,ref:n,...S(e?a:s,i)}};if(s?!Array.isArray(v)||!v.length:o&&(!(w||k)&&(C||tV(v))||tY(v)&&!v||k&&!rc(i).isValid||w&&!rf(i).isValid)){let{value:e,message:t}=rn(o)?{value:!!o,message:o}:rm(o);if(e&&(b[m]={type:t0.required,message:t,ref:x,...S(t0.required,t)},!r))return _(t),b}if(!C&&(!tV(c)||!tV(u))){let e,t;let a=rm(u),s=rm(c);if(tV(v)||isNaN(v)){let r=n.valueAsDate||new Date(v),i=e=>new Date(new Date().toDateString()+" "+e),o="time"==n.type,l="week"==n.type;t5(a.value)&&v&&(e=o?i(v)>i(a.value):l?v>a.value:r>new Date(a.value)),t5(s.value)&&v&&(t=o?i(v)<i(s.value):l?v<s.value:r<new Date(s.value))}else{let r=n.valueAsNumber||(v?+v:v);tV(a.value)||(e=r>a.value),tV(s.value)||(t=r<s.value)}if((e||t)&&(j(!!e,a.message,s.message,t0.max,t0.min),!r))return _(b[m].message),b}if((l||d)&&!C&&(t5(v)||s&&Array.isArray(v))){let e=rm(l),t=rm(d),a=!tV(e.value)&&v.length>+e.value,s=!tV(t.value)&&v.length<+t.value;if((a||s)&&(j(a,e.message,t.message),!r))return _(b[m].message),b}if(f&&!C&&t5(v)){let{value:e,message:t}=rm(f);if(ro(e)&&!v.match(e)&&(b[m]={type:t0.pattern,message:t,ref:n,...S(t0.pattern,t)},!r))return _(t),b}if(p){if(ra(p)){let e=rp(await p(v,t),x);if(e&&(b[m]={...e,...S(t0.validate,e.message)},!r))return _(e.message),b}else if(tR(p)){let e={};for(let a in p){if(!t9(e)&&!r)break;let s=rp(await p[a](v,t),x,a);s&&(e={...s,...S(a,s.message)},_(s.message),r&&(b[m]=e))}if(!t9(e)&&(b[m]={ref:x,...e},!r))return b}}return _(!0),b};function ry(e,t){let r=Array.isArray(t)?t:tG(t)?[t]:tX(t),a=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,a=0;for(;a<r;)e=tq(e)?a++:e[t[a++]];return e}(e,r),s=r.length-1,n=r[s];return a&&delete a[n],0!==s&&(tR(a)&&t9(a)||Array.isArray(a)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!tq(e[t]))return!1;return!0}(a))&&ry(e,r.slice(0,-1)),e}var rg=()=>{let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},rv=e=>tV(e)||!t$(e);function rx(e,t){if(rv(e)||rv(t))return e===t;if(tD(e)&&tD(t))return e.getTime()===t.getTime();let r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let s of r){let r=e[s];if(!a.includes(s))return!1;if("ref"!==s){let e=t[s];if(tD(r)&&tD(e)||tR(r)&&tR(e)||Array.isArray(r)&&Array.isArray(e)?!rx(r,e):r!==e)return!1}}return!0}var r_=e=>"select-multiple"===e.type,rb=e=>ri(e)||tZ(e),rw=e=>rs(e)&&e.isConnected,rk=e=>{for(let t in e)if(ra(e[t]))return!0;return!1};function rC(e,t={}){let r=Array.isArray(e);if(tR(e)||r)for(let r in e)Array.isArray(e[r])||tR(e[r])&&!rk(e[r])?(t[r]=Array.isArray(e[r])?[]:{},rC(e[r],t[r])):tV(e[r])||(t[r]=!0);return t}var rS=(e,t)=>(function e(t,r,a){let s=Array.isArray(t);if(tR(t)||s)for(let s in t)Array.isArray(t[s])||tR(t[s])&&!rk(t[s])?tq(r)||rv(a[s])?a[s]=Array.isArray(t[s])?rC(t[s],[]):{...rC(t[s])}:e(t[s],tV(r)?{}:r[s],a[s]):a[s]=!rx(t[s],r[s]);return a})(e,t,rC(t)),rj=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>tq(e)?e:t?""===e?NaN:e?+e:e:r&&t5(e)?new Date(e):a?a(e):e;function rA(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:rr(t)?t.files:ri(t)?rf(e.refs).value:r_(t)?[...t.selectedOptions].map(({value:e})=>e):tZ(t)?rc(e.refs).value:rj(tq(t.value)?e.ref.value:t.value,e)}var rN=(e,t,r,a)=>{let s={};for(let r of e){let e=tW(t,r);e&&tK(s,r,e._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:a}},rO=e=>tq(e)?e:ro(e)?e.source:tR(e)?ro(e.value)?e.value.source:e.value:e,rT=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function rE(e,t,r){let a=tW(e,r);if(a||tG(r))return{error:a,name:r};let s=r.split(".");for(;s.length;){let a=s.join("."),n=tW(t,a),i=tW(e,a);if(n&&!Array.isArray(n)&&r!==a)break;if(i&&i.type)return{name:a,error:i};s.pop()}return{name:r}}var rP=(e,t,r,a,s)=>!s.isOnAll&&(!r&&s.isOnTouch?!(t||e):(r?a.isOnBlur:s.isOnBlur)?!e:(r?!a.isOnChange:!s.isOnChange)||e),rM=(e,t)=>!tH(tW(e,t)).length&&ry(e,t);let rZ={mode:tQ.onSubmit,reValidateMode:tQ.onChange,shouldFocusError:!0},rD=(e,t,r)=>{if(e&&"reportValidity"in e){let a=tW(r,t);e.setCustomValidity(a&&a.message||""),e.reportValidity()}},rV=(e,t)=>{for(let r in t.fields){let a=t.fields[r];a&&a.ref&&"reportValidity"in a.ref?rD(a.ref,r,e):a.refs&&a.refs.forEach(t=>rD(t,r,e))}},r$=(e,t)=>{t.shouldUseNativeValidation&&rV(e,t);let r={};for(let a in e){let s=tW(t.fields,a),n=Object.assign(e[a]||{},{ref:s&&s.ref});if(rR(t.names||Object.keys(e),a)){let e=Object.assign({},tW(r,a));tK(e,"root",n),tK(r,a,e)}else tK(r,a,n)}return r},rR=(e,t)=>e.some(e=>e.startsWith(t+"."));var rI=function(e,t){for(var r={};e.length;){var a=e[0],s=a.code,n=a.message,i=a.path.join(".");if(!r[i]){if("unionErrors"in a){var o=a.unionErrors[0].errors[0];r[i]={message:o.message,type:o.code}}else r[i]={message:n,type:s}}if("unionErrors"in a&&a.unionErrors.forEach(function(t){return t.errors.forEach(function(t){return e.push(t)})}),t){var l=r[i].types,d=l&&l[a.code];r[i]=t4(i,t,r,s,d?[].concat(d,a.message):a.message)}e.shift()}return r};(function(e){e.assertEqual=e=>e,e.assertIs=function(e){},e.assertNever=function(e){throw Error()},e.arrayToEnum=e=>{let t={};for(let r of e)t[r]=r;return t},e.getValidEnumValues=t=>{let r=e.objectKeys(t).filter(e=>"number"!=typeof t[t[e]]),a={};for(let e of r)a[e]=t[e];return e.objectValues(a)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},e.find=(e,t)=>{for(let r of e)if(t(r))return r},e.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,e.joinValues=function(e,t=" | "){return e.map(e=>"string"==typeof e?`'${e}'`:e).join(t)},e.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t})(n||(n={})),(i||(i={})).mergeShapes=(e,t)=>({...e,...t});let rL=n.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),rF=e=>{switch(typeof e){case"undefined":return rL.undefined;case"string":return rL.string;case"number":return isNaN(e)?rL.nan:rL.number;case"boolean":return rL.boolean;case"function":return rL.function;case"bigint":return rL.bigint;case"symbol":return rL.symbol;case"object":if(Array.isArray(e))return rL.array;if(null===e)return rL.null;if(e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch)return rL.promise;if("undefined"!=typeof Map&&e instanceof Map)return rL.map;if("undefined"!=typeof Set&&e instanceof Set)return rL.set;if("undefined"!=typeof Date&&e instanceof Date)return rL.date;return rL.object;default:return rL.unknown}},rz=n.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class rU extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){let t=e||function(e){return e.message},r={_errors:[]},a=e=>{for(let s of e.issues)if("invalid_union"===s.code)s.unionErrors.map(a);else if("invalid_return_type"===s.code)a(s.returnTypeError);else if("invalid_arguments"===s.code)a(s.argumentsError);else if(0===s.path.length)r._errors.push(t(s));else{let e=r,a=0;for(;a<s.path.length;){let r=s.path[a];a===s.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(s))):e[r]=e[r]||{_errors:[]},e=e[r],a++}}};return a(this),r}static assert(e){if(!(e instanceof rU))throw Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,n.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){let t={},r=[];for(let a of this.issues)a.path.length>0?(t[a.path[0]]=t[a.path[0]]||[],t[a.path[0]].push(e(a))):r.push(e(a));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}rU.create=e=>new rU(e);let rB=(e,t)=>{let r;switch(e.code){case rz.invalid_type:r=e.received===rL.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case rz.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,n.jsonStringifyReplacer)}`;break;case rz.unrecognized_keys:r=`Unrecognized key(s) in object: ${n.joinValues(e.keys,", ")}`;break;case rz.invalid_union:r="Invalid input";break;case rz.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${n.joinValues(e.options)}`;break;case rz.invalid_enum_value:r=`Invalid enum value. Expected ${n.joinValues(e.options)}, received '${e.received}'`;break;case rz.invalid_arguments:r="Invalid function arguments";break;case rz.invalid_return_type:r="Invalid function return type";break;case rz.invalid_date:r="Invalid date";break;case rz.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:n.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case rz.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case rz.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case rz.custom:r="Invalid input";break;case rz.invalid_intersection_types:r="Intersection results could not be merged";break;case rz.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case rz.not_finite:r="Number must be finite";break;default:r=t.defaultError,n.assertNever(e)}return{message:r}},rH=rB;function rq(){return rH}let rW=e=>{let{data:t,path:r,errorMaps:a,issueData:s}=e,n=[...r,...s.path||[]],i={...s,path:n};if(void 0!==s.message)return{...s,path:n,message:s.message};let o="";for(let e of a.filter(e=>!!e).slice().reverse())o=e(i,{data:t,defaultError:o}).message;return{...s,path:n,message:o}};function rY(e,t){let r=rq(),a=rW({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,r,r===rB?void 0:rB].filter(e=>!!e)});e.common.issues.push(a)}class rG{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let a of t){if("aborted"===a.status)return rX;"dirty"===a.status&&e.dirty(),r.push(a.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let e of t){let t=await e.key,a=await e.value;r.push({key:t,value:a})}return rG.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let a of t){let{key:t,value:s}=a;if("aborted"===t.status||"aborted"===s.status)return rX;"dirty"===t.status&&e.dirty(),"dirty"===s.status&&e.dirty(),"__proto__"!==t.value&&(void 0!==s.value||a.alwaysSet)&&(r[t.value]=s.value)}return{status:e.value,value:r}}}let rX=Object.freeze({status:"aborted"}),rK=e=>({status:"dirty",value:e}),rJ=e=>({status:"valid",value:e}),rQ=e=>"aborted"===e.status,r0=e=>"dirty"===e.status,r1=e=>"valid"===e.status,r9=e=>"undefined"!=typeof Promise&&e instanceof Promise;function r2(e,t,r,a){if("a"===r&&!a)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?a:"a"===r?a.call(e):a?a.value:t.get(e)}function r3(e,t,r,a,s){if("m"===a)throw TypeError("Private method is not writable");if("a"===a&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?s.call(e,r):s?s.value=r:t.set(e,r),r}"function"==typeof SuppressedError&&SuppressedError,function(e){e.errToObj=e=>"string"==typeof e?{message:e}:e||{},e.toString=e=>"string"==typeof e?e:null==e?void 0:e.message}(o||(o={}));class r5{constructor(e,t,r,a){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=a}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}let r8=(e,t)=>{if(r1(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new rU(e.common.issues);return this._error=t,this._error}}};function r4(e){if(!e)return{};let{errorMap:t,invalid_type_error:r,required_error:a,description:s}=e;if(t&&(r||a))throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:s}:{errorMap:(t,s)=>{var n,i;let{message:o}=e;return"invalid_enum_value"===t.code?{message:null!=o?o:s.defaultError}:void 0===s.data?{message:null!==(n=null!=o?o:a)&&void 0!==n?n:s.defaultError}:"invalid_type"!==t.code?{message:s.defaultError}:{message:null!==(i=null!=o?o:r)&&void 0!==i?i:s.defaultError}},description:s}}class r6{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return rF(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:rF(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new rG,ctx:{common:e.parent.common,data:e.data,parsedType:rF(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(r9(t))throw Error("Synchronous parse encountered promise.");return t}_parseAsync(e){return Promise.resolve(this._parse(e))}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;let a={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:rF(e)},s=this._parseSync({data:e,path:a.path,parent:a});return r8(a,s)}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:rF(e)},a=this._parse({data:e,path:r.path,parent:r});return r8(r,await (r9(a)?a:Promise.resolve(a)))}refine(e,t){let r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement((t,a)=>{let s=e(t),n=()=>a.addIssue({code:rz.custom,...r(t)});return"undefined"!=typeof Promise&&s instanceof Promise?s.then(e=>!!e||(n(),!1)):!!s||(n(),!1)})}refinement(e,t){return this._refinement((r,a)=>!!e(r)||(a.addIssue("function"==typeof t?t(r,a):t),!1))}_refinement(e){return new az({schema:this,typeName:c.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return aU.create(this,this._def)}nullable(){return aB.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return aS.create(this,this._def)}promise(){return aF.create(this,this._def)}or(e){return aA.create([this,e],this._def)}and(e){return aT.create(this,e,this._def)}transform(e){return new az({...r4(this._def),schema:this,typeName:c.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new aH({...r4(this._def),innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:c.ZodDefault})}brand(){return new aG({typeName:c.ZodBranded,type:this,...r4(this._def)})}catch(e){return new aq({...r4(this._def),innerType:this,catchValue:"function"==typeof e?e:()=>e,typeName:c.ZodCatch})}describe(e){return new this.constructor({...this._def,description:e})}pipe(e){return aX.create(this,e)}readonly(){return aK.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}let r7=/^c[^\s-]{8,}$/i,ae=/^[0-9a-z]+$/,at=/^[0-9A-HJKMNP-TV-Z]{26}$/,ar=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,aa=/^[a-z0-9_-]{21}$/i,as=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,an=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,ai=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,ao=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,al=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,ad="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",ac=RegExp(`^${ad}$`);function au(e){let t="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return e.precision?t=`${t}\\.\\d{${e.precision}}`:null==e.precision&&(t=`${t}(\\.\\d+)?`),t}function af(e){let t=`${ad}T${au(e)}`,r=[];return r.push(e.local?"Z?":"Z"),e.offset&&r.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${r.join("|")})`,RegExp(`^${t}$`)}class ap extends r6{_parse(e){var t,r;let s;if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==rL.string){let t=this._getOrReturnCtx(e);return rY(t,{code:rz.invalid_type,expected:rL.string,received:t.parsedType}),rX}let i=new rG;for(let o of this._def.checks)if("min"===o.kind)e.data.length<o.value&&(rY(s=this._getOrReturnCtx(e,s),{code:rz.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),i.dirty());else if("max"===o.kind)e.data.length>o.value&&(rY(s=this._getOrReturnCtx(e,s),{code:rz.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),i.dirty());else if("length"===o.kind){let t=e.data.length>o.value,r=e.data.length<o.value;(t||r)&&(s=this._getOrReturnCtx(e,s),t?rY(s,{code:rz.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):r&&rY(s,{code:rz.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),i.dirty())}else if("email"===o.kind)an.test(e.data)||(rY(s=this._getOrReturnCtx(e,s),{validation:"email",code:rz.invalid_string,message:o.message}),i.dirty());else if("emoji"===o.kind)a||(a=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),a.test(e.data)||(rY(s=this._getOrReturnCtx(e,s),{validation:"emoji",code:rz.invalid_string,message:o.message}),i.dirty());else if("uuid"===o.kind)ar.test(e.data)||(rY(s=this._getOrReturnCtx(e,s),{validation:"uuid",code:rz.invalid_string,message:o.message}),i.dirty());else if("nanoid"===o.kind)aa.test(e.data)||(rY(s=this._getOrReturnCtx(e,s),{validation:"nanoid",code:rz.invalid_string,message:o.message}),i.dirty());else if("cuid"===o.kind)r7.test(e.data)||(rY(s=this._getOrReturnCtx(e,s),{validation:"cuid",code:rz.invalid_string,message:o.message}),i.dirty());else if("cuid2"===o.kind)ae.test(e.data)||(rY(s=this._getOrReturnCtx(e,s),{validation:"cuid2",code:rz.invalid_string,message:o.message}),i.dirty());else if("ulid"===o.kind)at.test(e.data)||(rY(s=this._getOrReturnCtx(e,s),{validation:"ulid",code:rz.invalid_string,message:o.message}),i.dirty());else if("url"===o.kind)try{new URL(e.data)}catch(t){rY(s=this._getOrReturnCtx(e,s),{validation:"url",code:rz.invalid_string,message:o.message}),i.dirty()}else"regex"===o.kind?(o.regex.lastIndex=0,o.regex.test(e.data)||(rY(s=this._getOrReturnCtx(e,s),{validation:"regex",code:rz.invalid_string,message:o.message}),i.dirty())):"trim"===o.kind?e.data=e.data.trim():"includes"===o.kind?e.data.includes(o.value,o.position)||(rY(s=this._getOrReturnCtx(e,s),{code:rz.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),i.dirty()):"toLowerCase"===o.kind?e.data=e.data.toLowerCase():"toUpperCase"===o.kind?e.data=e.data.toUpperCase():"startsWith"===o.kind?e.data.startsWith(o.value)||(rY(s=this._getOrReturnCtx(e,s),{code:rz.invalid_string,validation:{startsWith:o.value},message:o.message}),i.dirty()):"endsWith"===o.kind?e.data.endsWith(o.value)||(rY(s=this._getOrReturnCtx(e,s),{code:rz.invalid_string,validation:{endsWith:o.value},message:o.message}),i.dirty()):"datetime"===o.kind?af(o).test(e.data)||(rY(s=this._getOrReturnCtx(e,s),{code:rz.invalid_string,validation:"datetime",message:o.message}),i.dirty()):"date"===o.kind?ac.test(e.data)||(rY(s=this._getOrReturnCtx(e,s),{code:rz.invalid_string,validation:"date",message:o.message}),i.dirty()):"time"===o.kind?RegExp(`^${au(o)}$`).test(e.data)||(rY(s=this._getOrReturnCtx(e,s),{code:rz.invalid_string,validation:"time",message:o.message}),i.dirty()):"duration"===o.kind?as.test(e.data)||(rY(s=this._getOrReturnCtx(e,s),{validation:"duration",code:rz.invalid_string,message:o.message}),i.dirty()):"ip"===o.kind?(t=e.data,("v4"===(r=o.version)||!r)&&ai.test(t)||("v6"===r||!r)&&ao.test(t)||(rY(s=this._getOrReturnCtx(e,s),{validation:"ip",code:rz.invalid_string,message:o.message}),i.dirty())):"base64"===o.kind?al.test(e.data)||(rY(s=this._getOrReturnCtx(e,s),{validation:"base64",code:rz.invalid_string,message:o.message}),i.dirty()):n.assertNever(o);return{status:i.value,value:e.data}}_regex(e,t,r){return this.refinement(t=>e.test(t),{validation:t,code:rz.invalid_string,...o.errToObj(r)})}_addCheck(e){return new ap({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...o.errToObj(e)})}url(e){return this._addCheck({kind:"url",...o.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...o.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...o.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...o.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...o.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...o.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...o.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...o.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...o.errToObj(e)})}datetime(e){var t,r;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,local:null!==(r=null==e?void 0:e.local)&&void 0!==r&&r,...o.errToObj(null==e?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return"string"==typeof e?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,...o.errToObj(null==e?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...o.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...o.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...o.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...o.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...o.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...o.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...o.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...o.errToObj(t)})}nonempty(e){return this.min(1,o.errToObj(e))}trim(){return new ap({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ap({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ap({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>"datetime"===e.kind)}get isDate(){return!!this._def.checks.find(e=>"date"===e.kind)}get isTime(){return!!this._def.checks.find(e=>"time"===e.kind)}get isDuration(){return!!this._def.checks.find(e=>"duration"===e.kind)}get isEmail(){return!!this._def.checks.find(e=>"email"===e.kind)}get isURL(){return!!this._def.checks.find(e=>"url"===e.kind)}get isEmoji(){return!!this._def.checks.find(e=>"emoji"===e.kind)}get isUUID(){return!!this._def.checks.find(e=>"uuid"===e.kind)}get isNANOID(){return!!this._def.checks.find(e=>"nanoid"===e.kind)}get isCUID(){return!!this._def.checks.find(e=>"cuid"===e.kind)}get isCUID2(){return!!this._def.checks.find(e=>"cuid2"===e.kind)}get isULID(){return!!this._def.checks.find(e=>"ulid"===e.kind)}get isIP(){return!!this._def.checks.find(e=>"ip"===e.kind)}get isBase64(){return!!this._def.checks.find(e=>"base64"===e.kind)}get minLength(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}ap.create=e=>{var t;return new ap({checks:[],typeName:c.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...r4(e)})};class am extends r6{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){let t;if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==rL.number){let t=this._getOrReturnCtx(e);return rY(t,{code:rz.invalid_type,expected:rL.number,received:t.parsedType}),rX}let r=new rG;for(let a of this._def.checks)"int"===a.kind?n.isInteger(e.data)||(rY(t=this._getOrReturnCtx(e,t),{code:rz.invalid_type,expected:"integer",received:"float",message:a.message}),r.dirty()):"min"===a.kind?(a.inclusive?e.data<a.value:e.data<=a.value)&&(rY(t=this._getOrReturnCtx(e,t),{code:rz.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),r.dirty()):"max"===a.kind?(a.inclusive?e.data>a.value:e.data>=a.value)&&(rY(t=this._getOrReturnCtx(e,t),{code:rz.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),r.dirty()):"multipleOf"===a.kind?0!==function(e,t){let r=(e.toString().split(".")[1]||"").length,a=(t.toString().split(".")[1]||"").length,s=r>a?r:a;return parseInt(e.toFixed(s).replace(".",""))%parseInt(t.toFixed(s).replace(".",""))/Math.pow(10,s)}(e.data,a.value)&&(rY(t=this._getOrReturnCtx(e,t),{code:rz.not_multiple_of,multipleOf:a.value,message:a.message}),r.dirty()):"finite"===a.kind?Number.isFinite(e.data)||(rY(t=this._getOrReturnCtx(e,t),{code:rz.not_finite,message:a.message}),r.dirty()):n.assertNever(a);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,o.toString(t))}gt(e,t){return this.setLimit("min",e,!1,o.toString(t))}lte(e,t){return this.setLimit("max",e,!0,o.toString(t))}lt(e,t){return this.setLimit("max",e,!1,o.toString(t))}setLimit(e,t,r,a){return new am({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:o.toString(a)}]})}_addCheck(e){return new am({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:o.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:o.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:o.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:o.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:o.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:o.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:o.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:o.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:o.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>"int"===e.kind||"multipleOf"===e.kind&&n.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}am.create=e=>new am({checks:[],typeName:c.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...r4(e)});class ah extends r6{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){let t;if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==rL.bigint){let t=this._getOrReturnCtx(e);return rY(t,{code:rz.invalid_type,expected:rL.bigint,received:t.parsedType}),rX}let r=new rG;for(let a of this._def.checks)"min"===a.kind?(a.inclusive?e.data<a.value:e.data<=a.value)&&(rY(t=this._getOrReturnCtx(e,t),{code:rz.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),r.dirty()):"max"===a.kind?(a.inclusive?e.data>a.value:e.data>=a.value)&&(rY(t=this._getOrReturnCtx(e,t),{code:rz.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),r.dirty()):"multipleOf"===a.kind?e.data%a.value!==BigInt(0)&&(rY(t=this._getOrReturnCtx(e,t),{code:rz.not_multiple_of,multipleOf:a.value,message:a.message}),r.dirty()):n.assertNever(a);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,o.toString(t))}gt(e,t){return this.setLimit("min",e,!1,o.toString(t))}lte(e,t){return this.setLimit("max",e,!0,o.toString(t))}lt(e,t){return this.setLimit("max",e,!1,o.toString(t))}setLimit(e,t,r,a){return new ah({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:o.toString(a)}]})}_addCheck(e){return new ah({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:o.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:o.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:o.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:o.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:o.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}ah.create=e=>{var t;return new ah({checks:[],typeName:c.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...r4(e)})};class ay extends r6{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==rL.boolean){let t=this._getOrReturnCtx(e);return rY(t,{code:rz.invalid_type,expected:rL.boolean,received:t.parsedType}),rX}return rJ(e.data)}}ay.create=e=>new ay({typeName:c.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...r4(e)});class ag extends r6{_parse(e){let t;if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==rL.date){let t=this._getOrReturnCtx(e);return rY(t,{code:rz.invalid_type,expected:rL.date,received:t.parsedType}),rX}if(isNaN(e.data.getTime()))return rY(this._getOrReturnCtx(e),{code:rz.invalid_date}),rX;let r=new rG;for(let a of this._def.checks)"min"===a.kind?e.data.getTime()<a.value&&(rY(t=this._getOrReturnCtx(e,t),{code:rz.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),r.dirty()):"max"===a.kind?e.data.getTime()>a.value&&(rY(t=this._getOrReturnCtx(e,t),{code:rz.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),r.dirty()):n.assertNever(a);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new ag({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:o.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:o.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}ag.create=e=>new ag({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:c.ZodDate,...r4(e)});class av extends r6{_parse(e){if(this._getType(e)!==rL.symbol){let t=this._getOrReturnCtx(e);return rY(t,{code:rz.invalid_type,expected:rL.symbol,received:t.parsedType}),rX}return rJ(e.data)}}av.create=e=>new av({typeName:c.ZodSymbol,...r4(e)});class ax extends r6{_parse(e){if(this._getType(e)!==rL.undefined){let t=this._getOrReturnCtx(e);return rY(t,{code:rz.invalid_type,expected:rL.undefined,received:t.parsedType}),rX}return rJ(e.data)}}ax.create=e=>new ax({typeName:c.ZodUndefined,...r4(e)});class a_ extends r6{_parse(e){if(this._getType(e)!==rL.null){let t=this._getOrReturnCtx(e);return rY(t,{code:rz.invalid_type,expected:rL.null,received:t.parsedType}),rX}return rJ(e.data)}}a_.create=e=>new a_({typeName:c.ZodNull,...r4(e)});class ab extends r6{constructor(){super(...arguments),this._any=!0}_parse(e){return rJ(e.data)}}ab.create=e=>new ab({typeName:c.ZodAny,...r4(e)});class aw extends r6{constructor(){super(...arguments),this._unknown=!0}_parse(e){return rJ(e.data)}}aw.create=e=>new aw({typeName:c.ZodUnknown,...r4(e)});class ak extends r6{_parse(e){let t=this._getOrReturnCtx(e);return rY(t,{code:rz.invalid_type,expected:rL.never,received:t.parsedType}),rX}}ak.create=e=>new ak({typeName:c.ZodNever,...r4(e)});class aC extends r6{_parse(e){if(this._getType(e)!==rL.undefined){let t=this._getOrReturnCtx(e);return rY(t,{code:rz.invalid_type,expected:rL.void,received:t.parsedType}),rX}return rJ(e.data)}}aC.create=e=>new aC({typeName:c.ZodVoid,...r4(e)});class aS extends r6{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),a=this._def;if(t.parsedType!==rL.array)return rY(t,{code:rz.invalid_type,expected:rL.array,received:t.parsedType}),rX;if(null!==a.exactLength){let e=t.data.length>a.exactLength.value,s=t.data.length<a.exactLength.value;(e||s)&&(rY(t,{code:e?rz.too_big:rz.too_small,minimum:s?a.exactLength.value:void 0,maximum:e?a.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:a.exactLength.message}),r.dirty())}if(null!==a.minLength&&t.data.length<a.minLength.value&&(rY(t,{code:rz.too_small,minimum:a.minLength.value,type:"array",inclusive:!0,exact:!1,message:a.minLength.message}),r.dirty()),null!==a.maxLength&&t.data.length>a.maxLength.value&&(rY(t,{code:rz.too_big,maximum:a.maxLength.value,type:"array",inclusive:!0,exact:!1,message:a.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((e,r)=>a.type._parseAsync(new r5(t,e,t.path,r)))).then(e=>rG.mergeArray(r,e));let s=[...t.data].map((e,r)=>a.type._parseSync(new r5(t,e,t.path,r)));return rG.mergeArray(r,s)}get element(){return this._def.type}min(e,t){return new aS({...this._def,minLength:{value:e,message:o.toString(t)}})}max(e,t){return new aS({...this._def,maxLength:{value:e,message:o.toString(t)}})}length(e,t){return new aS({...this._def,exactLength:{value:e,message:o.toString(t)}})}nonempty(e){return this.min(1,e)}}aS.create=(e,t)=>new aS({type:e,minLength:null,maxLength:null,exactLength:null,typeName:c.ZodArray,...r4(t)});class aj extends r6{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;let e=this._def.shape(),t=n.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==rL.object){let t=this._getOrReturnCtx(e);return rY(t,{code:rz.invalid_type,expected:rL.object,received:t.parsedType}),rX}let{status:t,ctx:r}=this._processInputParams(e),{shape:a,keys:s}=this._getCached(),n=[];if(!(this._def.catchall instanceof ak&&"strip"===this._def.unknownKeys))for(let e in r.data)s.includes(e)||n.push(e);let i=[];for(let e of s){let t=a[e],s=r.data[e];i.push({key:{status:"valid",value:e},value:t._parse(new r5(r,s,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof ak){let e=this._def.unknownKeys;if("passthrough"===e)for(let e of n)i.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)n.length>0&&(rY(r,{code:rz.unrecognized_keys,keys:n}),t.dirty());else if("strip"===e);else throw Error("Internal ZodObject error: invalid unknownKeys value.")}else{let e=this._def.catchall;for(let t of n){let a=r.data[t];i.push({key:{status:"valid",value:t},value:e._parse(new r5(r,a,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of i){let r=await t.key,a=await t.value;e.push({key:r,value:a,alwaysSet:t.alwaysSet})}return e}).then(e=>rG.mergeObjectSync(t,e)):rG.mergeObjectSync(t,i)}get shape(){return this._def.shape()}strict(e){return o.errToObj,new aj({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var a,s,n,i;let l=null!==(n=null===(s=(a=this._def).errorMap)||void 0===s?void 0:s.call(a,t,r).message)&&void 0!==n?n:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(i=o.errToObj(e).message)&&void 0!==i?i:l}:{message:l}}}:{}})}strip(){return new aj({...this._def,unknownKeys:"strip"})}passthrough(){return new aj({...this._def,unknownKeys:"passthrough"})}extend(e){return new aj({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new aj({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:c.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new aj({...this._def,catchall:e})}pick(e){let t={};return n.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new aj({...this._def,shape:()=>t})}omit(e){let t={};return n.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new aj({...this._def,shape:()=>t})}deepPartial(){return function e(t){if(t instanceof aj){let r={};for(let a in t.shape){let s=t.shape[a];r[a]=aU.create(e(s))}return new aj({...t._def,shape:()=>r})}return t instanceof aS?new aS({...t._def,type:e(t.element)}):t instanceof aU?aU.create(e(t.unwrap())):t instanceof aB?aB.create(e(t.unwrap())):t instanceof aE?aE.create(t.items.map(t=>e(t))):t}(this)}partial(e){let t={};return n.objectKeys(this.shape).forEach(r=>{let a=this.shape[r];e&&!e[r]?t[r]=a:t[r]=a.optional()}),new aj({...this._def,shape:()=>t})}required(e){let t={};return n.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof aU;)e=e._def.innerType;t[r]=e}}),new aj({...this._def,shape:()=>t})}keyof(){return aR(n.objectKeys(this.shape))}}aj.create=(e,t)=>new aj({shape:()=>e,unknownKeys:"strip",catchall:ak.create(),typeName:c.ZodObject,...r4(t)}),aj.strictCreate=(e,t)=>new aj({shape:()=>e,unknownKeys:"strict",catchall:ak.create(),typeName:c.ZodObject,...r4(t)}),aj.lazycreate=(e,t)=>new aj({shape:e,unknownKeys:"strip",catchall:ak.create(),typeName:c.ZodObject,...r4(t)});class aA extends r6{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map(async e=>{let r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}})).then(function(e){for(let t of e)if("valid"===t.result.status)return t.result;for(let r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;let r=e.map(e=>new rU(e.ctx.common.issues));return rY(t,{code:rz.invalid_union,unionErrors:r}),rX});{let e;let a=[];for(let s of r){let r={...t,common:{...t.common,issues:[]},parent:null},n=s._parseSync({data:t.data,path:t.path,parent:r});if("valid"===n.status)return n;"dirty"!==n.status||e||(e={result:n,ctx:r}),r.common.issues.length&&a.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let s=a.map(e=>new rU(e));return rY(t,{code:rz.invalid_union,unionErrors:s}),rX}}get options(){return this._def.options}}aA.create=(e,t)=>new aA({options:e,typeName:c.ZodUnion,...r4(t)});let aN=e=>{if(e instanceof aV)return aN(e.schema);if(e instanceof az)return aN(e.innerType());if(e instanceof a$)return[e.value];if(e instanceof aI)return e.options;if(e instanceof aL)return n.objectValues(e.enum);if(e instanceof aH)return aN(e._def.innerType);if(e instanceof ax)return[void 0];else if(e instanceof a_)return[null];else if(e instanceof aU)return[void 0,...aN(e.unwrap())];else if(e instanceof aB)return[null,...aN(e.unwrap())];else if(e instanceof aG)return aN(e.unwrap());else if(e instanceof aK)return aN(e.unwrap());else if(e instanceof aq)return aN(e._def.innerType);else return[]};class aO extends r6{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==rL.object)return rY(t,{code:rz.invalid_type,expected:rL.object,received:t.parsedType}),rX;let r=this.discriminator,a=t.data[r],s=this.optionsMap.get(a);return s?t.common.async?s._parseAsync({data:t.data,path:t.path,parent:t}):s._parseSync({data:t.data,path:t.path,parent:t}):(rY(t,{code:rz.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),rX)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let a=new Map;for(let r of t){let t=aN(r.shape[e]);if(!t.length)throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let s of t){if(a.has(s))throw Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`);a.set(s,r)}}return new aO({typeName:c.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:a,...r4(r)})}}class aT extends r6{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),a=(e,a)=>{if(rQ(e)||rQ(a))return rX;let s=function e(t,r){let a=rF(t),s=rF(r);if(t===r)return{valid:!0,data:t};if(a===rL.object&&s===rL.object){let a=n.objectKeys(r),s=n.objectKeys(t).filter(e=>-1!==a.indexOf(e)),i={...t,...r};for(let a of s){let s=e(t[a],r[a]);if(!s.valid)return{valid:!1};i[a]=s.data}return{valid:!0,data:i}}if(a===rL.array&&s===rL.array){if(t.length!==r.length)return{valid:!1};let a=[];for(let s=0;s<t.length;s++){let n=e(t[s],r[s]);if(!n.valid)return{valid:!1};a.push(n.data)}return{valid:!0,data:a}}return a===rL.date&&s===rL.date&&+t==+r?{valid:!0,data:t}:{valid:!1}}(e.value,a.value);return s.valid?((r0(e)||r0(a))&&t.dirty(),{status:t.value,value:s.data}):(rY(r,{code:rz.invalid_intersection_types}),rX)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([e,t])=>a(e,t)):a(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}aT.create=(e,t,r)=>new aT({left:e,right:t,typeName:c.ZodIntersection,...r4(r)});class aE extends r6{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==rL.array)return rY(r,{code:rz.invalid_type,expected:rL.array,received:r.parsedType}),rX;if(r.data.length<this._def.items.length)return rY(r,{code:rz.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),rX;!this._def.rest&&r.data.length>this._def.items.length&&(rY(r,{code:rz.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let a=[...r.data].map((e,t)=>{let a=this._def.items[t]||this._def.rest;return a?a._parse(new r5(r,e,r.path,t)):null}).filter(e=>!!e);return r.common.async?Promise.all(a).then(e=>rG.mergeArray(t,e)):rG.mergeArray(t,a)}get items(){return this._def.items}rest(e){return new aE({...this._def,rest:e})}}aE.create=(e,t)=>{if(!Array.isArray(e))throw Error("You must pass an array of schemas to z.tuple([ ... ])");return new aE({items:e,typeName:c.ZodTuple,rest:null,...r4(t)})};class aP extends r6{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==rL.object)return rY(r,{code:rz.invalid_type,expected:rL.object,received:r.parsedType}),rX;let a=[],s=this._def.keyType,n=this._def.valueType;for(let e in r.data)a.push({key:s._parse(new r5(r,e,r.path,e)),value:n._parse(new r5(r,r.data[e],r.path,e)),alwaysSet:e in r.data});return r.common.async?rG.mergeObjectAsync(t,a):rG.mergeObjectSync(t,a)}get element(){return this._def.valueType}static create(e,t,r){return new aP(t instanceof r6?{keyType:e,valueType:t,typeName:c.ZodRecord,...r4(r)}:{keyType:ap.create(),valueType:e,typeName:c.ZodRecord,...r4(t)})}}class aM extends r6{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==rL.map)return rY(r,{code:rz.invalid_type,expected:rL.map,received:r.parsedType}),rX;let a=this._def.keyType,s=this._def.valueType,n=[...r.data.entries()].map(([e,t],n)=>({key:a._parse(new r5(r,e,r.path,[n,"key"])),value:s._parse(new r5(r,t,r.path,[n,"value"]))}));if(r.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let r of n){let a=await r.key,s=await r.value;if("aborted"===a.status||"aborted"===s.status)return rX;("dirty"===a.status||"dirty"===s.status)&&t.dirty(),e.set(a.value,s.value)}return{status:t.value,value:e}})}{let e=new Map;for(let r of n){let a=r.key,s=r.value;if("aborted"===a.status||"aborted"===s.status)return rX;("dirty"===a.status||"dirty"===s.status)&&t.dirty(),e.set(a.value,s.value)}return{status:t.value,value:e}}}}aM.create=(e,t,r)=>new aM({valueType:t,keyType:e,typeName:c.ZodMap,...r4(r)});class aZ extends r6{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==rL.set)return rY(r,{code:rz.invalid_type,expected:rL.set,received:r.parsedType}),rX;let a=this._def;null!==a.minSize&&r.data.size<a.minSize.value&&(rY(r,{code:rz.too_small,minimum:a.minSize.value,type:"set",inclusive:!0,exact:!1,message:a.minSize.message}),t.dirty()),null!==a.maxSize&&r.data.size>a.maxSize.value&&(rY(r,{code:rz.too_big,maximum:a.maxSize.value,type:"set",inclusive:!0,exact:!1,message:a.maxSize.message}),t.dirty());let s=this._def.valueType;function n(e){let r=new Set;for(let a of e){if("aborted"===a.status)return rX;"dirty"===a.status&&t.dirty(),r.add(a.value)}return{status:t.value,value:r}}let i=[...r.data.values()].map((e,t)=>s._parse(new r5(r,e,r.path,t)));return r.common.async?Promise.all(i).then(e=>n(e)):n(i)}min(e,t){return new aZ({...this._def,minSize:{value:e,message:o.toString(t)}})}max(e,t){return new aZ({...this._def,maxSize:{value:e,message:o.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}aZ.create=(e,t)=>new aZ({valueType:e,minSize:null,maxSize:null,typeName:c.ZodSet,...r4(t)});class aD extends r6{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==rL.function)return rY(t,{code:rz.invalid_type,expected:rL.function,received:t.parsedType}),rX;function r(e,r){return rW({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,rq(),rB].filter(e=>!!e),issueData:{code:rz.invalid_arguments,argumentsError:r}})}function a(e,r){return rW({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,rq(),rB].filter(e=>!!e),issueData:{code:rz.invalid_return_type,returnTypeError:r}})}let s={errorMap:t.common.contextualErrorMap},n=t.data;if(this._def.returns instanceof aF){let e=this;return rJ(async function(...t){let i=new rU([]),o=await e._def.args.parseAsync(t,s).catch(e=>{throw i.addIssue(r(t,e)),i}),l=await Reflect.apply(n,this,o);return await e._def.returns._def.type.parseAsync(l,s).catch(e=>{throw i.addIssue(a(l,e)),i})})}{let e=this;return rJ(function(...t){let i=e._def.args.safeParse(t,s);if(!i.success)throw new rU([r(t,i.error)]);let o=Reflect.apply(n,this,i.data),l=e._def.returns.safeParse(o,s);if(!l.success)throw new rU([a(o,l.error)]);return l.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new aD({...this._def,args:aE.create(e).rest(aw.create())})}returns(e){return new aD({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new aD({args:e||aE.create([]).rest(aw.create()),returns:t||aw.create(),typeName:c.ZodFunction,...r4(r)})}}class aV extends r6{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}aV.create=(e,t)=>new aV({getter:e,typeName:c.ZodLazy,...r4(t)});class a$ extends r6{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return rY(t,{received:t.data,code:rz.invalid_literal,expected:this._def.value}),rX}return{status:"valid",value:e.data}}get value(){return this._def.value}}function aR(e,t){return new aI({values:e,typeName:c.ZodEnum,...r4(t)})}a$.create=(e,t)=>new a$({value:e,typeName:c.ZodLiteral,...r4(t)});class aI extends r6{constructor(){super(...arguments),l.set(this,void 0)}_parse(e){if("string"!=typeof e.data){let t=this._getOrReturnCtx(e),r=this._def.values;return rY(t,{expected:n.joinValues(r),received:t.parsedType,code:rz.invalid_type}),rX}if(r2(this,l,"f")||r3(this,l,new Set(this._def.values),"f"),!r2(this,l,"f").has(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return rY(t,{received:t.data,code:rz.invalid_enum_value,options:r}),rX}return rJ(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return aI.create(e,{...this._def,...t})}exclude(e,t=this._def){return aI.create(this.options.filter(t=>!e.includes(t)),{...this._def,...t})}}l=new WeakMap,aI.create=aR;class aL extends r6{constructor(){super(...arguments),d.set(this,void 0)}_parse(e){let t=n.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==rL.string&&r.parsedType!==rL.number){let e=n.objectValues(t);return rY(r,{expected:n.joinValues(e),received:r.parsedType,code:rz.invalid_type}),rX}if(r2(this,d,"f")||r3(this,d,new Set(n.getValidEnumValues(this._def.values)),"f"),!r2(this,d,"f").has(e.data)){let e=n.objectValues(t);return rY(r,{received:r.data,code:rz.invalid_enum_value,options:e}),rX}return rJ(e.data)}get enum(){return this._def.values}}d=new WeakMap,aL.create=(e,t)=>new aL({values:e,typeName:c.ZodNativeEnum,...r4(t)});class aF extends r6{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==rL.promise&&!1===t.common.async?(rY(t,{code:rz.invalid_type,expected:rL.promise,received:t.parsedType}),rX):rJ((t.parsedType===rL.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}}aF.create=(e,t)=>new aF({type:e,typeName:c.ZodPromise,...r4(t)});class az extends r6{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===c.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),a=this._def.effect||null,s={addIssue:e=>{rY(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(s.addIssue=s.addIssue.bind(s),"preprocess"===a.type){let e=a.transform(r.data,s);if(r.common.async)return Promise.resolve(e).then(async e=>{if("aborted"===t.value)return rX;let a=await this._def.schema._parseAsync({data:e,path:r.path,parent:r});return"aborted"===a.status?rX:"dirty"===a.status||"dirty"===t.value?rK(a.value):a});{if("aborted"===t.value)return rX;let a=this._def.schema._parseSync({data:e,path:r.path,parent:r});return"aborted"===a.status?rX:"dirty"===a.status||"dirty"===t.value?rK(a.value):a}}if("refinement"===a.type){let e=e=>{let t=a.refinement(e,s);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(r=>"aborted"===r.status?rX:("dirty"===r.status&&t.dirty(),e(r.value).then(()=>({status:t.value,value:r.value}))));{let a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===a.status?rX:("dirty"===a.status&&t.dirty(),e(a.value),{status:t.value,value:a.value})}}if("transform"===a.type){if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(e=>r1(e)?Promise.resolve(a.transform(e.value,s)).then(e=>({status:t.value,value:e})):e);{let e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!r1(e))return e;let n=a.transform(e.value,s);if(n instanceof Promise)throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:n}}}n.assertNever(a)}}az.create=(e,t,r)=>new az({schema:e,typeName:c.ZodEffects,effect:t,...r4(r)}),az.createWithPreprocess=(e,t,r)=>new az({schema:t,effect:{type:"preprocess",transform:e},typeName:c.ZodEffects,...r4(r)});class aU extends r6{_parse(e){return this._getType(e)===rL.undefined?rJ(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}aU.create=(e,t)=>new aU({innerType:e,typeName:c.ZodOptional,...r4(t)});class aB extends r6{_parse(e){return this._getType(e)===rL.null?rJ(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}aB.create=(e,t)=>new aB({innerType:e,typeName:c.ZodNullable,...r4(t)});class aH extends r6{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===rL.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}aH.create=(e,t)=>new aH({innerType:e,typeName:c.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...r4(t)});class aq extends r6{_parse(e){let{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},a=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return r9(a)?a.then(e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new rU(r.common.issues)},input:r.data})})):{status:"valid",value:"valid"===a.status?a.value:this._def.catchValue({get error(){return new rU(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}aq.create=(e,t)=>new aq({innerType:e,typeName:c.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...r4(t)});class aW extends r6{_parse(e){if(this._getType(e)!==rL.nan){let t=this._getOrReturnCtx(e);return rY(t,{code:rz.invalid_type,expected:rL.nan,received:t.parsedType}),rX}return{status:"valid",value:e.data}}}aW.create=e=>new aW({typeName:c.ZodNaN,...r4(e)});let aY=Symbol("zod_brand");class aG extends r6{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class aX extends r6{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?rX:"dirty"===e.status?(t.dirty(),rK(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})})();{let e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?rX:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new aX({in:e,out:t,typeName:c.ZodPipeline})}}class aK extends r6{_parse(e){let t=this._def.innerType._parse(e),r=e=>(r1(e)&&(e.value=Object.freeze(e.value)),e);return r9(t)?t.then(e=>r(e)):r(t)}unwrap(){return this._def.innerType}}function aJ(e,t={},r){return e?ab.create().superRefine((a,s)=>{var n,i;if(!e(a)){let e="function"==typeof t?t(a):"string"==typeof t?{message:t}:t,o=null===(i=null!==(n=e.fatal)&&void 0!==n?n:r)||void 0===i||i;s.addIssue({code:"custom",..."string"==typeof e?{message:e}:e,fatal:o})}}):ab.create()}aK.create=(e,t)=>new aK({innerType:e,typeName:c.ZodReadonly,...r4(t)});let aQ={object:aj.lazycreate};!function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"}(c||(c={}));let a0=ap.create,a1=am.create,a9=aW.create,a2=ah.create,a3=ay.create,a5=ag.create,a8=av.create,a4=ax.create,a6=a_.create,a7=ab.create,se=aw.create,st=ak.create,sr=aC.create,sa=aS.create,ss=aj.create,sn=aj.strictCreate,si=aA.create,so=aO.create,sl=aT.create,sd=aE.create,sc=aP.create,su=aM.create,sf=aZ.create,sp=aD.create,sm=aV.create,sh=a$.create,sy=aI.create,sg=aL.create,sv=aF.create,sx=az.create,s_=aU.create,sb=aB.create,sw=az.createWithPreprocess,sk=aX.create;var sC=Object.freeze({__proto__:null,defaultErrorMap:rB,setErrorMap:function(e){rH=e},getErrorMap:rq,makeIssue:rW,EMPTY_PATH:[],addIssueToContext:rY,ParseStatus:rG,INVALID:rX,DIRTY:rK,OK:rJ,isAborted:rQ,isDirty:r0,isValid:r1,isAsync:r9,get util(){return n},get objectUtil(){return i},ZodParsedType:rL,getParsedType:rF,ZodType:r6,datetimeRegex:af,ZodString:ap,ZodNumber:am,ZodBigInt:ah,ZodBoolean:ay,ZodDate:ag,ZodSymbol:av,ZodUndefined:ax,ZodNull:a_,ZodAny:ab,ZodUnknown:aw,ZodNever:ak,ZodVoid:aC,ZodArray:aS,ZodObject:aj,ZodUnion:aA,ZodDiscriminatedUnion:aO,ZodIntersection:aT,ZodTuple:aE,ZodRecord:aP,ZodMap:aM,ZodSet:aZ,ZodFunction:aD,ZodLazy:aV,ZodLiteral:a$,ZodEnum:aI,ZodNativeEnum:aL,ZodPromise:aF,ZodEffects:az,ZodTransformer:az,ZodOptional:aU,ZodNullable:aB,ZodDefault:aH,ZodCatch:aq,ZodNaN:aW,BRAND:aY,ZodBranded:aG,ZodPipeline:aX,ZodReadonly:aK,custom:aJ,Schema:r6,ZodSchema:r6,late:aQ,get ZodFirstPartyTypeKind(){return c},coerce:{string:e=>ap.create({...e,coerce:!0}),number:e=>am.create({...e,coerce:!0}),boolean:e=>ay.create({...e,coerce:!0}),bigint:e=>ah.create({...e,coerce:!0}),date:e=>ag.create({...e,coerce:!0})},any:a7,array:sa,bigint:a2,boolean:a3,date:a5,discriminatedUnion:so,effect:sx,enum:sy,function:sp,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>aJ(t=>t instanceof e,t),intersection:sl,lazy:sm,literal:sh,map:su,nan:a9,nativeEnum:sg,never:st,null:a6,nullable:sb,number:a1,object:ss,oboolean:()=>a3().optional(),onumber:()=>a1().optional(),optional:s_,ostring:()=>a0().optional(),pipeline:sk,preprocess:sw,promise:sv,record:sc,set:sf,strictObject:sn,string:a0,symbol:a8,transformer:sx,tuple:sd,undefined:a4,union:si,unknown:se,void:sr,NEVER:rX,ZodIssueCode:rz,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:rU});/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let sS=tN("SquareUserRound",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]),sj=tN("Text",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]]),sA=tN("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),sN=tN("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]),sO=tN("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]),sT=sC.object({name:sC.string().min(3,"O nome deve ter pelo menos 3 caracteres"),email:sC.string().email("E-mail inv\xe1lido"),phone:sC.string().min(11,"Telefone inv\xe1lido"),title:sC.string().min(5,"O t\xedtulo deve ter pelo menos 5 caracteres"),description:sC.string().min(10,"A descri\xe7\xe3o deve ter pelo menos 10 caracteres"),files:sC.unknown().optional()}),sE=()=>{let[e,t]=(0,f.useState)(!1),[r,a]=(0,f.useState)([]),[s,n]=(0,f.useState)(""),{register:i,handleSubmit:o,formState:{errors:l}}=function(e={}){let t=f.useRef(),r=f.useRef(),[a,s]=f.useState({isDirty:!1,isValidating:!1,isLoading:ra(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:ra(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={}){let t,r={...rZ,...e},a={submitCount:0,isDirty:!1,isLoading:ra(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},s={},n=(tR(r.defaultValues)||tR(r.values))&&tB(r.defaultValues||r.values)||{},i=r.shouldUnregister?{}:tB(n),o={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},d=0,c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},u={values:rg(),array:rg(),state:rg()},f=t6(r.mode),p=t6(r.reValidateMode),m=r.criteriaMode===tQ.all,h=e=>t=>{clearTimeout(d),d=setTimeout(e,t)},y=async e=>{if(c.isValid||e){let e=r.resolver?t9((await w()).errors):await C(s,!0);e!==a.isValid&&u.state.next({isValid:e})}},g=(e,t)=>{(c.isValidating||c.validatingFields)&&((e||Array.from(l.mount)).forEach(e=>{e&&(t?tK(a.validatingFields,e,t):ry(a.validatingFields,e))}),u.state.next({validatingFields:a.validatingFields,isValidating:!t9(a.validatingFields)}))},v=(e,t)=>{tK(a.errors,e,t),u.state.next({errors:a.errors})},x=(e,t,r,a)=>{let l=tW(s,e);if(l){let s=tW(i,e,tq(r)?tW(n,e):r);tq(s)||a&&a.defaultChecked||t?tK(i,e,t?s:rA(l._f)):A(e,s),o.mount&&y()}},_=(e,t,r,i,o)=>{let l=!1,d=!1,f={name:e},p=!!(tW(s,e)&&tW(s,e)._f&&tW(s,e)._f.disabled);if(!r||i){c.isDirty&&(d=a.isDirty,a.isDirty=f.isDirty=S(),l=d!==f.isDirty);let r=p||rx(tW(n,e),t);d=!!(!p&&tW(a.dirtyFields,e)),r||p?ry(a.dirtyFields,e):tK(a.dirtyFields,e,!0),f.dirtyFields=a.dirtyFields,l=l||c.dirtyFields&&!r!==d}if(r){let t=tW(a.touchedFields,e);t||(tK(a.touchedFields,e,r),f.touchedFields=a.touchedFields,l=l||c.touchedFields&&t!==r)}return l&&o&&u.state.next(f),l?f:{}},b=(r,s,n,i)=>{let o=tW(a.errors,r),l=c.isValid&&tY(s)&&a.isValid!==s;if(e.delayError&&n?(t=h(()=>v(r,n)))(e.delayError):(clearTimeout(d),t=null,n?tK(a.errors,r,n):ry(a.errors,r)),(n?!rx(o,n):o)||!t9(i)||l){let e={...i,...l&&tY(s)?{isValid:s}:{},errors:a.errors,name:r};a={...a,...e},u.state.next(e)}},w=async e=>{g(e,!0);let t=await r.resolver(i,r.context,rN(e||l.mount,s,r.criteriaMode,r.shouldUseNativeValidation));return g(e),t},k=async e=>{let{errors:t}=await w(e);if(e)for(let r of e){let e=tW(t,r);e?tK(a.errors,r,e):ry(a.errors,r)}else a.errors=t;return t},C=async(e,t,s={valid:!0})=>{for(let n in e){let o=e[n];if(o){let{_f:e,...d}=o;if(e){let d=l.array.has(e.name);g([n],!0);let c=await rh(o,i,m,r.shouldUseNativeValidation&&!t,d);if(g([n]),c[e.name]&&(s.valid=!1,t))break;t||(tW(c,e.name)?d?rt(a.errors,c,e.name):tK(a.errors,e.name,c[e.name]):ry(a.errors,e.name))}t9(d)||await C(d,t,s)}}return s.valid},S=(e,t)=>(e&&t&&tK(i,e,t),!rx(M(),n)),j=(e,t,r)=>t8(e,l,{...o.mount?i:tq(t)?n:t5(e)?{[e]:t}:t},r,t),A=(e,t,r={})=>{let a=tW(s,e),n=t;if(a){let r=a._f;r&&(r.disabled||tK(i,e,rj(t,r)),n=rs(r.ref)&&tV(t)?"":t,r_(r.ref)?[...r.ref.options].forEach(e=>e.selected=n.includes(e.value)):r.refs?tZ(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(n)?!!n.find(t=>t===e.value):n===e.value)):r.refs[0]&&(r.refs[0].checked=!!n):r.refs.forEach(e=>e.checked=e.value===n):rr(r.ref)?r.ref.value="":(r.ref.value=n,r.ref.type||u.values.next({name:e,values:{...i}})))}(r.shouldDirty||r.shouldTouch)&&_(e,n,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&P(e)},N=(e,t,r)=>{for(let a in t){let n=t[a],i=`${e}.${a}`,o=tW(s,i);!l.array.has(e)&&rv(n)&&(!o||o._f)||tD(n)?A(i,n,r):N(i,n,r)}},O=(e,t,r={})=>{let d=tW(s,e),f=l.array.has(e),p=tB(t);tK(i,e,p),f?(u.array.next({name:e,values:{...i}}),(c.isDirty||c.dirtyFields)&&r.shouldDirty&&u.state.next({name:e,dirtyFields:rS(n,i),isDirty:S(e,p)})):!d||d._f||tV(p)?A(e,p,r):N(e,p,r),t7(e,l)&&u.state.next({...a}),u.values.next({name:o.mount?e:void 0,values:{...i}})},T=async e=>{o.mount=!0;let n=e.target,d=n.name,h=!0,v=tW(s,d),x=e=>{h=Number.isNaN(e)||e===tW(i,d,e)};if(v){let o,k;let S=n.type?rA(v._f):tI(e),j=e.type===tJ.BLUR||e.type===tJ.FOCUS_OUT,A=!rT(v._f)&&!r.resolver&&!tW(a.errors,d)&&!v._f.deps||rP(j,tW(a.touchedFields,d),a.isSubmitted,p,f),N=t7(d,l,j);tK(i,d,S),j?(v._f.onBlur&&v._f.onBlur(e),t&&t(0)):v._f.onChange&&v._f.onChange(e);let O=_(d,S,j,!1),T=!t9(O)||N;if(j||u.values.next({name:d,type:e.type,values:{...i}}),A)return c.isValid&&y(),T&&u.state.next({name:d,...N?{}:O});if(!j&&N&&u.state.next({...a}),r.resolver){let{errors:e}=await w([d]);if(x(S),h){let t=rE(a.errors,s,d),r=rE(e,s,t.name||d);o=r.error,d=r.name,k=t9(e)}}else g([d],!0),o=(await rh(v,i,m,r.shouldUseNativeValidation))[d],g([d]),x(S),h&&(o?k=!1:c.isValid&&(k=await C(s,!0)));h&&(v._f.deps&&P(v._f.deps),b(d,k,o,O))}},E=(e,t)=>{if(tW(a.errors,t)&&e.focus)return e.focus(),1},P=async(e,t={})=>{let n,i;let o=t3(e);if(r.resolver){let t=await k(tq(e)?e:o);n=t9(t),i=e?!o.some(e=>tW(t,e)):n}else e?((i=(await Promise.all(o.map(async e=>{let t=tW(s,e);return await C(t&&t._f?{[e]:t}:t)}))).every(Boolean))||a.isValid)&&y():i=n=await C(s);return u.state.next({...!t5(e)||c.isValid&&n!==a.isValid?{}:{name:e},...r.resolver||!e?{isValid:n}:{},errors:a.errors}),t.shouldFocus&&!i&&re(s,E,e?o:l.mount),i},M=e=>{let t={...o.mount?i:n};return tq(e)?t:t5(e)?tW(t,e):e.map(e=>tW(t,e))},Z=(e,t)=>({invalid:!!tW((t||a).errors,e),isDirty:!!tW((t||a).dirtyFields,e),error:tW((t||a).errors,e),isValidating:!!tW(a.validatingFields,e),isTouched:!!tW((t||a).touchedFields,e)}),D=(e,t,r)=>{let n=(tW(s,e,{_f:{}})._f||{}).ref,{ref:i,message:o,type:l,...d}=tW(a.errors,e)||{};tK(a.errors,e,{...d,...t,ref:n}),u.state.next({name:e,errors:a.errors,isValid:!1}),r&&r.shouldFocus&&n&&n.focus&&n.focus()},V=(e,t={})=>{for(let o of e?t3(e):l.mount)l.mount.delete(o),l.array.delete(o),t.keepValue||(ry(s,o),ry(i,o)),t.keepError||ry(a.errors,o),t.keepDirty||ry(a.dirtyFields,o),t.keepTouched||ry(a.touchedFields,o),t.keepIsValidating||ry(a.validatingFields,o),r.shouldUnregister||t.keepDefaultValue||ry(n,o);u.values.next({values:{...i}}),u.state.next({...a,...t.keepDirty?{isDirty:S()}:{}}),t.keepIsValid||y()},$=({disabled:e,name:t,field:r,fields:a,value:s})=>{if(tY(e)&&o.mount||e){let n=e?void 0:tq(s)?rA(r?r._f:tW(a,t)._f):s;tK(i,t,n),_(t,n,!1,!1,!0)}},R=(e,t={})=>{let a=tW(s,e),i=tY(t.disabled);return tK(s,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...t}}),l.mount.add(e),a?$({field:a,disabled:t.disabled,name:e,value:t.value}):x(e,!0,t.value),{...i?{disabled:t.disabled}:{},...r.progressive?{required:!!t.required,min:rO(t.min),max:rO(t.max),minLength:rO(t.minLength),maxLength:rO(t.maxLength),pattern:rO(t.pattern)}:{},name:e,onChange:T,onBlur:T,ref:i=>{if(i){R(e,t),a=tW(s,e);let r=tq(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,o=rb(r),l=a._f.refs||[];(o?l.find(e=>e===r):r===a._f.ref)||(tK(s,e,{_f:{...a._f,...o?{refs:[...l.filter(rw),r,...Array.isArray(tW(n,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),x(e,!1,void 0,r))}else(a=tW(s,e,{}))._f&&(a._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&!(tF(l.array,e)&&o.action)&&l.unMount.add(e)}}},I=()=>r.shouldFocusError&&re(s,E,l.mount),L=(e,t)=>async n=>{let o;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let l=tB(i);if(u.state.next({isSubmitting:!0}),r.resolver){let{errors:e,values:t}=await w();a.errors=e,l=t}else await C(s);if(ry(a.errors,"root"),t9(a.errors)){u.state.next({errors:{}});try{await e(l,n)}catch(e){o=e}}else t&&await t({...a.errors},n),I(),setTimeout(I);if(u.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:t9(a.errors)&&!o,submitCount:a.submitCount+1,errors:a.errors}),o)throw o},F=(t,r={})=>{let d=t?tB(t):n,f=tB(d),p=t9(t),m=p?n:f;if(r.keepDefaultValues||(n=d),!r.keepValues){if(r.keepDirtyValues)for(let e of l.mount)tW(a.dirtyFields,e)?tK(m,e,tW(i,e)):O(e,tW(m,e));else{if(tU&&tq(t))for(let e of l.mount){let t=tW(s,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(rs(e)){let t=e.closest("form");if(t){t.reset();break}}}}s={}}i=e.shouldUnregister?r.keepDefaultValues?tB(n):{}:tB(m),u.array.next({values:{...m}}),u.values.next({values:{...m}})}l={mount:r.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!c.isValid||!!r.keepIsValid||!!r.keepDirtyValues,o.watch=!!e.shouldUnregister,u.state.next({submitCount:r.keepSubmitCount?a.submitCount:0,isDirty:!p&&(r.keepDirty?a.isDirty:!!(r.keepDefaultValues&&!rx(t,n))),isSubmitted:!!r.keepIsSubmitted&&a.isSubmitted,dirtyFields:p?{}:r.keepDirtyValues?r.keepDefaultValues&&i?rS(n,i):a.dirtyFields:r.keepDefaultValues&&t?rS(n,t):r.keepDirty?a.dirtyFields:{},touchedFields:r.keepTouched?a.touchedFields:{},errors:r.keepErrors?a.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&a.isSubmitSuccessful,isSubmitting:!1})},z=(e,t)=>F(ra(e)?e(i):e,t);return{control:{register:R,unregister:V,getFieldState:Z,handleSubmit:L,setError:D,_executeSchema:w,_getWatch:j,_getDirty:S,_updateValid:y,_removeUnmounted:()=>{for(let e of l.unMount){let t=tW(s,e);t&&(t._f.refs?t._f.refs.every(e=>!rw(e)):!rw(t._f.ref))&&V(e)}l.unMount=new Set},_updateFieldArray:(e,t=[],r,l,d=!0,f=!0)=>{if(l&&r){if(o.action=!0,f&&Array.isArray(tW(s,e))){let t=r(tW(s,e),l.argA,l.argB);d&&tK(s,e,t)}if(f&&Array.isArray(tW(a.errors,e))){let t=r(tW(a.errors,e),l.argA,l.argB);d&&tK(a.errors,e,t),rM(a.errors,e)}if(c.touchedFields&&f&&Array.isArray(tW(a.touchedFields,e))){let t=r(tW(a.touchedFields,e),l.argA,l.argB);d&&tK(a.touchedFields,e,t)}c.dirtyFields&&(a.dirtyFields=rS(n,i)),u.state.next({name:e,isDirty:S(e,t),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else tK(i,e,t)},_updateDisabledField:$,_getFieldArray:t=>tH(tW(o.mount?i:n,t,e.shouldUnregister?tW(n,t,[]):[])),_reset:F,_resetDefaultValues:()=>ra(r.defaultValues)&&r.defaultValues().then(e=>{z(e,r.resetOptions),u.state.next({isLoading:!1})}),_updateFormState:e=>{a={...a,...e}},_disableForm:e=>{tY(e)&&(u.state.next({disabled:e}),re(s,(t,r)=>{let a=tW(s,r);a&&(t.disabled=a._f.disabled||e,Array.isArray(a._f.refs)&&a._f.refs.forEach(t=>{t.disabled=a._f.disabled||e}))},0,!1))},_subjects:u,_proxyFormState:c,_setErrors:e=>{a.errors=e,u.state.next({errors:a.errors,isValid:!1})},get _fields(){return s},get _formValues(){return i},get _state(){return o},set _state(value){o=value},get _defaultValues(){return n},get _names(){return l},set _names(value){l=value},get _formState(){return a},set _formState(value){a=value},get _options(){return r},set _options(value){r={...r,...value}}},trigger:P,register:R,handleSubmit:L,watch:(e,t)=>ra(e)?u.values.subscribe({next:r=>e(j(void 0,t),r)}):j(e,t,!0),setValue:O,getValues:M,reset:z,resetField:(e,t={})=>{tW(s,e)&&(tq(t.defaultValue)?O(e,tB(tW(n,e))):(O(e,t.defaultValue),tK(n,e,tB(t.defaultValue))),t.keepTouched||ry(a.touchedFields,e),t.keepDirty||(ry(a.dirtyFields,e),a.isDirty=t.defaultValue?S(e,tB(tW(n,e))):S()),!t.keepError&&(ry(a.errors,e),c.isValid&&y()),u.state.next({...a}))},clearErrors:e=>{e&&t3(e).forEach(e=>ry(a.errors,e)),u.state.next({errors:e?a.errors:{}})},unregister:V,setError:D,setFocus:(e,t={})=>{let r=tW(s,e),a=r&&r._f;if(a){let e=a.refs?a.refs[0]:a.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:Z}}(e),formState:a});let n=t.current.control;return n._options=e,function(e){let t=f.useRef(e);t.current=e,f.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}({subject:n._subjects.state,next:e=>{t2(e,n._proxyFormState,n._updateFormState,!0)&&s({...n._formState})}}),f.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),f.useEffect(()=>{if(n._proxyFormState.isDirty){let e=n._getDirty();e!==a.isDirty&&n._subjects.state.next({isDirty:e})}},[n,a.isDirty]),f.useEffect(()=>{e.values&&!rx(e.values,r.current)?(n._reset(e.values,n._options.resetOptions),r.current=e.values,s(e=>({...e}))):n._resetDefaultValues()},[e.values,n]),f.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),f.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),f.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),t.current.formState=t1(a,n),t.current}({resolver:function(e,t,r){return void 0===r&&(r={}),function(t,a,s){try{return Promise.resolve(function(a,n){try{var i=Promise.resolve(e["sync"===r.mode?"parse":"parseAsync"](t,void 0)).then(function(e){return s.shouldUseNativeValidation&&rV({},s),{errors:{},values:r.raw?t:e}})}catch(e){return n(e)}return i&&i.then?i.then(void 0,n):i}(0,function(e){if(Array.isArray(null==e?void 0:e.errors))return{values:{},errors:r$(rI(e.errors,!s.shouldUseNativeValidation&&"all"===s.criteriaMode),s)};throw e}))}catch(e){return Promise.reject(e)}}}(sT)}),d=e=>{a(r.filter((t,r)=>r!==e))};return(0,u.jsxs)("div",{className:"flex flex-col p-8 sm:p-20 w-full",children:[(0,u.jsxs)("h5",{className:"flex items-center gap-2",children:[u.jsx(sS,{className:"w-5 h-5"})," Identifica\xe7\xe3o"]}),(0,u.jsxs)("div",{className:"mt-4 flex items-center gap-4 ",children:[(0,u.jsxs)("label",{className:"relative inline-flex items-center cursor-pointer",children:[u.jsx("input",{type:"checkbox",checked:e,onChange:e=>{t(e.target.checked)},className:"sr-only peer"}),u.jsx("div",{className:"w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500 transition-colors"}),u.jsx("div",{className:"absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform peer-checked:translate-x-5"})]}),u.jsx("label",{className:"text-sm font-medium",children:"Quero me identificar"})]}),(0,u.jsxs)("form",{onSubmit:o(e=>{if(r.length>20){n("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}console.log("Dados enviados:",e),console.log("Arquivos selecionados:",r)}),className:" space-y-3 w-full",children:[e&&(0,u.jsxs)("div",{className:"mb-10",children:[(0,u.jsxs)("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-sm font-medium",children:"Nome"}),u.jsx("input",{type:"text",placeholder:"Digite seu nome",...i("name"),className:"w-full p-2 border rounded"}),l.name&&u.jsx("p",{className:"text-red-500 text-sm",children:l.name.message})]}),(0,u.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[(0,u.jsxs)("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-sm font-medium",children:"E-mail"}),u.jsx("input",{type:"email",placeholder:"Digite seu e-mail",...i("email"),className:"w-full p-2 border rounded"}),l.email&&u.jsx("p",{className:"text-red-500 text-sm",children:l.email.message})]}),(0,u.jsxs)("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-sm font-medium",children:"Telefone"}),u.jsx("input",{type:"text",placeholder:"Digite seu telefone",...i("phone"),className:"w-full p-2 border rounded"}),l.phone&&u.jsx("p",{className:"text-red-500 text-sm",children:l.phone.message})]})]})]}),(0,u.jsxs)("h5",{className:"flex items-center gap-2 mt-6",children:[u.jsx(sj,{className:"w-5 h-5"})," Mensagem"]}),(0,u.jsxs)("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-sm font-medium",children:"T\xedtulo"}),u.jsx("input",{type:"text",placeholder:"Digite o t\xedtulo",...i("title"),className:"w-full p-2 border rounded"}),l.title&&u.jsx("p",{className:"text-red-500 text-sm",children:l.title.message})]}),(0,u.jsxs)("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-sm font-medium",children:"Descri\xe7\xe3o"}),u.jsx("textarea",{placeholder:"Digite a descri\xe7\xe3o",...i("description"),className:"w-full p-2 border rounded resize-none",rows:4}),l.description&&u.jsx("p",{className:"text-red-500 text-sm",children:l.description.message})]}),(0,u.jsxs)("div",{className:"space-y-2",children:[u.jsx("input",{type:"file",multiple:!0,onChange:e=>{let t=Array.from(e.target.files);if(r.length+t.length>20){n("Voc\xea pode enviar no m\xe1ximo 20 arquivos.");return}n(""),a(e=>[...e,...t])},className:"hidden",id:"file-input"}),(0,u.jsxs)("div",{className:"flex align-middle items-center",children:[u.jsx("label",{htmlFor:"file-input",className:"inline-block bg-gray-300  dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/80 transition-colors",children:(0,u.jsxs)("p",{className:"flex gap-2 m-1",children:[u.jsx(sA,{className:"text-blue-400"}),"Selecionar"]})}),(0,u.jsxs)("p",{className:"pl-4",children:[r.length," Arquivos Enviados"]})]}),s&&u.jsx("p",{className:"text-red-500 text-sm",children:s})]}),r.length>0&&u.jsx("div",{className:"mt-4 space-y-2",children:r.map((e,t)=>(0,u.jsxs)("div",{className:"flex items-center justify-between p-2 border rounded",children:[(0,u.jsxs)("div",{className:"flex flex-col",children:[(0,u.jsxs)("div",{className:"flex items-center gap-2",children:[u.jsx(sN,{className:"w-4 h-4"}),u.jsx("span",{className:"text-sm",children:e.name})]}),(0,u.jsxs)("span",{className:"text-sm",children:[(e.size/1048576).toFixed(2)," MB"]})]}),u.jsx("button",{type:"button",onClick:()=>d(t),className:"text-red-500 hover:text-red-700",children:u.jsx(sO,{className:"w-4 h-4"})})]},t))}),u.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors mt-6",children:"Enviar"})]})]})},sP=()=>{let[e,t]=(0,f.useState)("Suggestion");return u.jsx("div",{className:"flex flex-col items-center gap-y-4 p-6",children:(0,u.jsxs)("div",{className:"flex gap-x-2 align-middle justify-center flex-wrap",children:[u.jsx(tv,{direction:"right",delay:400,cascade:!0,damping:.2,triggerOnce:!0,children:(0,u.jsxs)("div",{className:"flex gap-x-1 sm:gap-x-2 m-2",children:[(0,u.jsxs)(tk,{className:"flex items-center gap-x-2 p-1 m-0 md:w-56 sm:px-6 sm:py-2",onClick:()=>t("Suggestion"),children:["Sugest\xf5es / Ideias",u.jsx("div",{className:" hidden md:block",children:u.jsx(tO,{size:20})})]}),(0,u.jsxs)(tk,{className:"flex items-center gap-x-2 p-2 m-0 sm:px-6 sm:py-2",onClick:()=>t("Reclamation"),children:["Reclama\xe7\xe3o",u.jsx("div",{className:"hidden md:block",children:u.jsx(tT,{size:20})})]}),(0,u.jsxs)(tk,{className:"flex items-center gap-x-2 md:w-56 p-3 m-0 sm:px-6 sm:py-2",onClick:()=>t("Denunciation"),children:["Den\xfancia",u.jsx("div",{className:"hidden md:block",children:u.jsx(tE,{size:20})})]})]})}),u.jsx(tv,{direction:"top",className:"p-2 m-0 w-full",children:(0,u.jsxs)("div",{className:`flex flex-col items-center border-3 rounded-lg w-full  ${"Suggestion"===e?"border-2 transition-all rounded-lg border-green-500 shadow-lg shadow-green-500/50":""+e=="Denunciation"?"border-2 transition-all rounded-lg border-red-500 shadow-lg shadow-red-500/50":""+e=="Reclamation"?"border-2 transition-all rounded-lg border-yellow-500 shadow-lg shadow-yellow-500/50":""}`,children:["Suggestion"===e&&u.jsx(sE,{}),"Denunciation"===e&&u.jsx(tP,{}),"Reclamation"===e&&u.jsx(tM,{})]})})]})})};var sM=r(9029),sZ=r.n(sM);function sD(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}var sV=["color"],s$=(0,f.forwardRef)(function(e,t){var r=e.color,a=sD(e,sV);return(0,f.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a,{ref:t}),(0,f.createElement)("path",{d:"M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z",fill:void 0===r?"currentColor":r,fillRule:"evenodd",clipRule:"evenodd"}))}),sR=["color"],sI=(0,f.forwardRef)(function(e,t){var r=e.color,a=sD(e,sR);return(0,f.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a,{ref:t}),(0,f.createElement)("path",{d:"M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z",fill:void 0===r?"currentColor":r,fillRule:"evenodd",clipRule:"evenodd"}))}),sL=r(4831);let sF=()=>{let{theme:e,setTheme:t}=(0,sL.F)();return u.jsx("div",{className:"fixed right-0",children:(0,u.jsxs)(tk,{onClick:()=>t("dark"===e?"light":"dark"),className:" sm:w-[100px] m-5",children:[u.jsx(sI,{className:"absolute h-[1.2rem]  w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),u.jsx(s$,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"})]})})},sz=()=>(0,u.jsxs)("div",{className:"flex justify-center",children:[(0,u.jsxs)("div",{className:"flex p-4 pt-6 itens-center text-center",children:[u.jsx(sZ(),{src:"/logo.svg",width:25,height:25,priority:!0,alt:""}),u.jsx("h5",{className:"ml-2 leading-[50px]",children:"FALA DO CAMPUS"})]}),u.jsx("div",{children:u.jsx(sF,{})})]});function sU(){return(0,u.jsxs)("main",{className:"max-w-3xl mx-auto p-4",children:[u.jsx(sz,{}),u.jsx("div",{className:"",children:u.jsx(sP,{})}),u.jsx(p,{})]})}},7210:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(326),s=r(5428),n=r(7577);let i=()=>{let[e,t]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=()=>{let e=window.scrollY,r=document.body.scrollHeight-window.innerHeight;r&&t(100*Number(e/r).toFixed(2))};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),e},o={hidden:{opacity:0},enter:{opacity:1}},l=({children:e})=>{let t=i();return(0,a.jsxs)(a.Fragment,{children:[a.jsx(s.E.main,{variants:o,initial:"hidden",animate:"enter",transition:{type:"linear",delay:.2,duration:.4},children:e}),a.jsx("span",{style:{transform:`translateY(${t-100}%)`},className:"fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"})]})}},9941:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>n});var a=r(326),s=r(4831);function n({children:e,...t}){return a.jsx(s.f,{...t,children:e})}},4167:(e,t,r)=>{"use strict";r.d(t,{Toaster:()=>k});var a=r(326),s=r(7577),n=r(4578),i=r(8671),o=r(6084);let l=n.zt,d=s.forwardRef(({className:e,...t},r)=>a.jsx(n.l_,{ref:r,className:(0,o.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));d.displayName=n.l_.displayName;let c=(0,i.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),u=s.forwardRef(({className:e,variant:t,...r},s)=>a.jsx(n.fC,{ref:s,className:(0,o.cn)(c({variant:t}),e),...r}));u.displayName=n.fC.displayName,s.forwardRef(({className:e,...t},r)=>a.jsx(n.aU,{ref:r,className:(0,o.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=n.aU.displayName;let f=s.forwardRef(({className:e},t)=>a.jsx(a.Fragment,{}));f.displayName=n.x8.displayName;let p=s.forwardRef(({className:e,...t},r)=>a.jsx(n.Dx,{ref:r,className:(0,o.cn)("text-sm font-semibold",e),...t}));p.displayName=n.Dx.displayName;let m=s.forwardRef(({className:e,...t},r)=>a.jsx(n.dk,{ref:r,className:(0,o.cn)("text-sm opacity-90",e),...t}));m.displayName=n.dk.displayName;let h=0,y=new Map,g=e=>{if(y.has(e))return;let t=setTimeout(()=>{y.delete(e),b({type:"REMOVE_TOAST",toastId:e})},1e6);y.set(e,t)},v=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?g(r):e.toasts.forEach(e=>{g(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},x=[],_={toasts:[]};function b(e){_=v(_,e),x.forEach(e=>{e(_)})}function w({...e}){let t=(h=(h+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>b({type:"DISMISS_TOAST",toastId:t});return b({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>b({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function k(){let{toasts:e}=function(){let[e,t]=s.useState(_);return s.useEffect(()=>(x.push(t),()=>{let e=x.indexOf(t);e>-1&&x.splice(e,1)}),[e]),{...e,toast:w,dismiss:e=>b({type:"DISMISS_TOAST",toastId:e})}}();return(0,a.jsxs)(l,{children:[e.map(function({id:e,title:t,description:r,action:s,...n}){return(0,a.jsxs)(u,{...n,children:[(0,a.jsxs)("div",{className:"grid gap-1",children:[t&&a.jsx(p,{children:t}),r&&a.jsx(m,{children:r})]}),s,a.jsx(f,{})]},e)}),a.jsx(d,{})]})}},6084:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var a=r(1135),s=r(1009);function n(...e){return(0,s.m6)((0,a.W)(e))}},9997:(e,t,r)=>{"use strict";var a=r(6777),s={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function l(e){return a.isMemo(e)?i:o[e.$$typeof]||s}o[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[a.Memo]=i;var d=Object.defineProperty,c=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,a){if("string"!=typeof r){if(m){var s=p(r);s&&s!==m&&e(t,s,a)}var i=c(r);u&&(i=i.concat(u(r)));for(var o=l(t),h=l(r),y=0;y<i.length;++y){var g=i[y];if(!n[g]&&!(a&&a[g])&&!(h&&h[g])&&!(o&&o[g])){var v=f(r,g);try{d(t,g,v)}catch(e){}}}}return t}},2481:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let a=r(1174),s=r(8374),n=r(326),i=s._(r(7577)),o=a._(r(962)),l=a._(r(815)),d=r(3078),c=r(5248),u=r(1206);r(576);let f=r(131),p=a._(r(6820)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,a,s,n,i){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,s=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}}))}function y(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let g=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:a,sizes:s,height:o,width:l,decoding:d,className:c,style:u,fetchPriority:f,placeholder:p,loading:m,unoptimized:g,fill:v,onLoadRef:x,onLoadingCompleteRef:_,setBlurComplete:b,setShowAltText:w,sizesInput:k,onLoad:C,onError:S,...j}=e;return(0,n.jsx)("img",{...j,...y(f),loading:m,width:l,height:o,decoding:d,"data-nimg":v?"fill":"1",className:c,style:u,sizes:s,srcSet:a,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&h(e,p,x,_,b,g,k))},[r,p,x,_,b,S,g,k,t]),onLoad:e=>{h(e.currentTarget,p,x,_,b,g,k)},onError:e=>{w(!0),"empty"!==p&&b(!0),S&&S(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,a={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,a),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...a},"__nimg-"+r.src+r.srcSet+r.sizes)})}let x=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),a=(0,i.useContext)(u.ImageConfigContext),s=(0,i.useMemo)(()=>{let e=m||a||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[a]),{onLoad:o,onLoadingComplete:l}=e,h=(0,i.useRef)(o);(0,i.useEffect)(()=>{h.current=o},[o]);let y=(0,i.useRef)(l);(0,i.useEffect)(()=>{y.current=l},[l]);let[x,_]=(0,i.useState)(!1),[b,w]=(0,i.useState)(!1),{props:k,meta:C}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:s,blurComplete:x,showAltText:b});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{...k,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:h,onLoadingCompleteRef:y,setBlurComplete:_,setShowAltText:w,sizesInput:e.sizes,ref:t}),C.priority?(0,n.jsx)(v,{isAppRouter:!r,imgAttributes:k}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.AmpContext},1157:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.HeadManagerContext},1206:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.ImageConfigContext},131:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.RouterContext},8710:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:a=!1}=void 0===e?{}:e;return t||r&&a}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(576);let a=r(380),s=r(5248);function n(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,l,d,{src:c,sizes:u,unoptimized:f=!1,priority:p=!1,loading:m,className:h,quality:y,width:g,height:v,fill:x=!1,style:_,overrideSrc:b,onLoad:w,onLoadingComplete:k,placeholder:C="empty",blurDataURL:S,fetchPriority:j,layout:A,objectFit:N,objectPosition:O,lazyBoundary:T,lazyRoot:E,...P}=e,{imgConf:M,showAltText:Z,blurComplete:D,defaultLoader:V}=t,$=M||s.imageConfigDefault;if("allSizes"in $)o=$;else{let e=[...$.deviceSizes,...$.imageSizes].sort((e,t)=>e-t),t=$.deviceSizes.sort((e,t)=>e-t);o={...$,allSizes:e,deviceSizes:t}}if(void 0===V)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let R=P.loader||V;delete P.loader,delete P.srcSet;let I="__next_img_default"in R;if(I){if("custom"===o.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=R;R=t=>{let{config:r,...a}=t;return e(a)}}if(A){"fill"===A&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[A];t&&!u&&(u=t)}let L="",F=i(g),z=i(v);if("object"==typeof(r=c)&&(n(r)||void 0!==r.src)){let e=n(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,L=e.src,!x){if(F||z){if(F&&!z){let t=F/e.width;z=Math.round(e.height*t)}else if(!F&&z){let t=z/e.height;F=Math.round(e.width*t)}}else F=e.width,z=e.height}}let U=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:L)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,U=!1),o.unoptimized&&(f=!0),I&&c.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(f=!0),p&&(j="high");let B=i(y),H=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:O}:{},Z?{}:{color:"transparent"},_),q=D||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:F,heightInt:z,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:H.objectFit})+'")':'url("'+C+'")',W=q?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},Y=function(e){let{config:t,src:r,unoptimized:a,width:s,quality:n,sizes:i,loader:o}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:a,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(r);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:a,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,i),c=l.length-1;return{sizes:i||"w"!==d?i:"100vw",srcSet:l.map((e,a)=>o({config:t,src:r,quality:n,width:e})+" "+("w"===d?e:a+1)+d).join(", "),src:o({config:t,src:r,quality:n,width:l[c]})}}({config:o,src:c,unoptimized:f,width:F,quality:B,sizes:u,loader:R});return{props:{...P,loading:U?"lazy":m,fetchPriority:j,width:F,height:z,decoding:"async",className:h,style:{...H,...W},sizes:Y.sizes,srcSet:Y.srcSet,src:b||Y.src},meta:{unoptimized:f,priority:p,placeholder:C,fill:x}}}},815:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return u}});let a=r(1174),s=r(8374),n=r(326),i=s._(r(7577)),o=a._(r(8003)),l=r(3484),d=r(1157),c=r(8710);function u(e){void 0===e&&(e=!1);let t=[(0,n.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,n.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(576);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,a={};return s=>{let n=!0,i=!1;if(s.key&&"number"!=typeof s.key&&s.key.indexOf("$")>0){i=!0;let t=s.key.slice(s.key.indexOf("$")+1);e.has(t)?n=!1:e.add(t)}switch(s.type){case"title":case"base":t.has(s.type)?n=!1:t.add(s.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(s.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?n=!1:r.add(t);else{let e=s.props[t],r=a[t]||new Set;("name"!==t||!i)&&r.has(e)?n=!1:(r.add(e),a[t]=r)}}}}return n}}()).reverse().map((e,t)=>{let a=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:a})})}let h=function(e){let{children:t}=e,r=(0,i.useContext)(l.AmpStateContext),a=(0,i.useContext)(d.HeadManagerContext);return(0,n.jsx)(o.default,{reduceComponentsToState:m,headManager:a,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},380:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:s,blurDataURL:n,objectFit:i}=e,o=a?40*a:t,l=s?40*s:r,d=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5248:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return a}});let r=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},9029:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return o}});let a=r(1174),s=r(3078),n=r(2481),i=a._(r(6820));function o(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=n.Image},6820:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:a,quality:s}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+a+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),r.__next_img_default=!0;let a=r},8003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let a=r(7577),s=()=>{},n=()=>{};function i(e){var t;let{headManager:r,reduceComponentsToState:i}=e;function o(){if(r&&r.mountedInstances){let t=a.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),s(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),s(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),n(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},9652:(e,t)=>{"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),d=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),t.isFragment=function(e){return function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case s:case i:case n:case u:case f:return e;default:switch(e=e&&e.$$typeof){case d:case l:case c:case m:case p:case o:return e;default:return t}}case a:return t}}}(e)===s}},7191:(e,t,r)=>{"use strict";e.exports=r(9652)},745:(e,t)=>{"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,s=r?Symbol.for("react.portal"):60106,n=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,o=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,_=r?Symbol.for("react.scope"):60119;function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case c:case u:case n:case o:case i:case p:return e;default:switch(e=e&&e.$$typeof){case d:case f:case y:case h:case l:return e;default:return t}}case s:return t}}}function w(e){return b(e)===u}t.AsyncMode=c,t.ConcurrentMode=u,t.ContextConsumer=d,t.ContextProvider=l,t.Element=a,t.ForwardRef=f,t.Fragment=n,t.Lazy=y,t.Memo=h,t.Portal=s,t.Profiler=o,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||b(e)===c},t.isConcurrentMode=w,t.isContextConsumer=function(e){return b(e)===d},t.isContextProvider=function(e){return b(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return b(e)===f},t.isFragment=function(e){return b(e)===n},t.isLazy=function(e){return b(e)===y},t.isMemo=function(e){return b(e)===h},t.isPortal=function(e){return b(e)===s},t.isProfiler=function(e){return b(e)===o},t.isStrictMode=function(e){return b(e)===i},t.isSuspense=function(e){return b(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===u||e===o||e===i||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===l||e.$$typeof===d||e.$$typeof===f||e.$$typeof===v||e.$$typeof===x||e.$$typeof===_||e.$$typeof===g)},t.typeOf=b},6777:(e,t,r)=>{"use strict";e.exports=r(745)},2037:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y,metadata:()=>h});var a=r(9510),s=r(1364),n=r.n(s);r(7272);var i=r(8570);let o=(0,i.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\components\ui\toaster.jsx`),{__esModule:l,$$typeof:d}=o;o.default;let c=(0,i.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\components\ui\toaster.jsx#Toaster`),u=(0,i.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\components\ThemeProvider.jsx`),{__esModule:f,$$typeof:p}=u;u.default;let m=(0,i.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\components\ThemeProvider.jsx#ThemeProvider`),h={title:"Motion App",description:"Generated by create next app"};function y({children:e}){return a.jsx("html",{lang:"pt",suppressHydrationWarning:!0,children:a.jsx("body",{className:n().className,children:(0,a.jsxs)(m,{attribute:"class",defaultTheme:"light",children:[e,a.jsx(c,{})]})})})}},169:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var a=r(8570);let s=(0,a.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\app\page.jsx`),{__esModule:n,$$typeof:i}=s;s.default;let o=(0,a.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\app\page.jsx#default`)},9915:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var a=r(8570);let s=(0,a.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\app\template.jsx`),{__esModule:n,$$typeof:i}=s;s.default;let o=(0,a.createProxy)(String.raw`C:\Users\anton\Documents\GitHub\FALADOCAMPUS\app\template.jsx#default`)},7272:()=>{},5684:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[574],()=>r(818));module.exports=a})();