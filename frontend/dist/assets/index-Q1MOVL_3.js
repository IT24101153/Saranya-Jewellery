function Im(l,c){for(var s=0;s<c.length;s++){const u=c[s];if(typeof u!="string"&&!Array.isArray(u)){for(const f in u)if(f!=="default"&&!(f in l)){const w=Object.getOwnPropertyDescriptor(u,f);w&&Object.defineProperty(l,f,w.get?w:{enumerable:!0,get:()=>u[f]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const w of f)if(w.type==="childList")for(const h of w.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function s(f){const w={};return f.integrity&&(w.integrity=f.integrity),f.referrerPolicy&&(w.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?w.credentials="include":f.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function u(f){if(f.ep)return;f.ep=!0;const w=s(f);fetch(f.href,w)}})();function Pm(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var za={exports:{}},jn={},_a={exports:{}},de={};var Xd;function Rm(){if(Xd)return de;Xd=1;var l=Symbol.for("react.element"),c=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),h=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),P=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),C=Symbol.iterator;function F(y){return y===null||typeof y!="object"?null:(y=C&&y[C]||y["@@iterator"],typeof y=="function"?y:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,I={};function M(y,A,se){this.props=y,this.context=A,this.refs=I,this.updater=se||U}M.prototype.isReactComponent={},M.prototype.setState=function(y,A){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,A,"setState")},M.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function W(){}W.prototype=M.prototype;function R(y,A,se){this.props=y,this.context=A,this.refs=I,this.updater=se||U}var Q=R.prototype=new W;Q.constructor=R,j(Q,M.prototype),Q.isPureReactComponent=!0;var oe=Array.isArray,H=Object.prototype.hasOwnProperty,O={current:null},Z={key:!0,ref:!0,__self:!0,__source:!0};function he(y,A,se){var ce,fe={},pe=null,be=null;if(A!=null)for(ce in A.ref!==void 0&&(be=A.ref),A.key!==void 0&&(pe=""+A.key),A)H.call(A,ce)&&!Z.hasOwnProperty(ce)&&(fe[ce]=A[ce]);var ye=arguments.length-2;if(ye===1)fe.children=se;else if(1<ye){for(var je=Array(ye),et=0;et<ye;et++)je[et]=arguments[et+2];fe.children=je}if(y&&y.defaultProps)for(ce in ye=y.defaultProps,ye)fe[ce]===void 0&&(fe[ce]=ye[ce]);return{$$typeof:l,type:y,key:pe,ref:be,props:fe,_owner:O.current}}function xe(y,A){return{$$typeof:l,type:y.type,key:A,ref:y.ref,props:y.props,_owner:y._owner}}function Le(y){return typeof y=="object"&&y!==null&&y.$$typeof===l}function ee(y){var A={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(se){return A[se]})}var ne=/\/+/g;function ue(y,A){return typeof y=="object"&&y!==null&&y.key!=null?ee(""+y.key):A.toString(36)}function Ie(y,A,se,ce,fe){var pe=typeof y;(pe==="undefined"||pe==="boolean")&&(y=null);var be=!1;if(y===null)be=!0;else switch(pe){case"string":case"number":be=!0;break;case"object":switch(y.$$typeof){case l:case c:be=!0}}if(be)return be=y,fe=fe(be),y=ce===""?"."+ue(be,0):ce,oe(fe)?(se="",y!=null&&(se=y.replace(ne,"$&/")+"/"),Ie(fe,A,se,"",function(et){return et})):fe!=null&&(Le(fe)&&(fe=xe(fe,se+(!fe.key||be&&be.key===fe.key?"":(""+fe.key).replace(ne,"$&/")+"/")+y)),A.push(fe)),1;if(be=0,ce=ce===""?".":ce+":",oe(y))for(var ye=0;ye<y.length;ye++){pe=y[ye];var je=ce+ue(pe,ye);be+=Ie(pe,A,se,je,fe)}else if(je=F(y),typeof je=="function")for(y=je.call(y),ye=0;!(pe=y.next()).done;)pe=pe.value,je=ce+ue(pe,ye++),be+=Ie(pe,A,se,je,fe);else if(pe==="object")throw A=String(y),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return be}function z(y,A,se){if(y==null)return y;var ce=[],fe=0;return Ie(y,ce,"","",function(pe){return A.call(se,pe,fe++)}),ce}function _(y){if(y._status===-1){var A=y._result;A=A(),A.then(function(se){(y._status===0||y._status===-1)&&(y._status=1,y._result=se)},function(se){(y._status===0||y._status===-1)&&(y._status=2,y._result=se)}),y._status===-1&&(y._status=0,y._result=A)}if(y._status===1)return y._result.default;throw y._result}var ie={current:null},D={transition:null},J={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:D,ReactCurrentOwner:O};function q(){throw Error("act(...) is not supported in production builds of React.")}return de.Children={map:z,forEach:function(y,A,se){z(y,function(){A.apply(this,arguments)},se)},count:function(y){var A=0;return z(y,function(){A++}),A},toArray:function(y){return z(y,function(A){return A})||[]},only:function(y){if(!Le(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},de.Component=M,de.Fragment=s,de.Profiler=f,de.PureComponent=R,de.StrictMode=u,de.Suspense=S,de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,de.act=q,de.cloneElement=function(y,A,se){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var ce=j({},y.props),fe=y.key,pe=y.ref,be=y._owner;if(A!=null){if(A.ref!==void 0&&(pe=A.ref,be=O.current),A.key!==void 0&&(fe=""+A.key),y.type&&y.type.defaultProps)var ye=y.type.defaultProps;for(je in A)H.call(A,je)&&!Z.hasOwnProperty(je)&&(ce[je]=A[je]===void 0&&ye!==void 0?ye[je]:A[je])}var je=arguments.length-2;if(je===1)ce.children=se;else if(1<je){ye=Array(je);for(var et=0;et<je;et++)ye[et]=arguments[et+2];ce.children=ye}return{$$typeof:l,type:y.type,key:fe,ref:pe,props:ce,_owner:be}},de.createContext=function(y){return y={$$typeof:h,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:w,_context:y},y.Consumer=y},de.createElement=he,de.createFactory=function(y){var A=he.bind(null,y);return A.type=y,A},de.createRef=function(){return{current:null}},de.forwardRef=function(y){return{$$typeof:N,render:y}},de.isValidElement=Le,de.lazy=function(y){return{$$typeof:E,_payload:{_status:-1,_result:y},_init:_}},de.memo=function(y,A){return{$$typeof:P,type:y,compare:A===void 0?null:A}},de.startTransition=function(y){var A=D.transition;D.transition={};try{y()}finally{D.transition=A}},de.unstable_act=q,de.useCallback=function(y,A){return ie.current.useCallback(y,A)},de.useContext=function(y){return ie.current.useContext(y)},de.useDebugValue=function(){},de.useDeferredValue=function(y){return ie.current.useDeferredValue(y)},de.useEffect=function(y,A){return ie.current.useEffect(y,A)},de.useId=function(){return ie.current.useId()},de.useImperativeHandle=function(y,A,se){return ie.current.useImperativeHandle(y,A,se)},de.useInsertionEffect=function(y,A){return ie.current.useInsertionEffect(y,A)},de.useLayoutEffect=function(y,A){return ie.current.useLayoutEffect(y,A)},de.useMemo=function(y,A){return ie.current.useMemo(y,A)},de.useReducer=function(y,A,se){return ie.current.useReducer(y,A,se)},de.useRef=function(y){return ie.current.useRef(y)},de.useState=function(y){return ie.current.useState(y)},de.useSyncExternalStore=function(y,A,se){return ie.current.useSyncExternalStore(y,A,se)},de.useTransition=function(){return ie.current.useTransition()},de.version="18.3.1",de}var Zd;function el(){return Zd||(Zd=1,_a.exports=Rm()),_a.exports}var ec;function Tm(){if(ec)return jn;ec=1;var l=el(),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,f=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function h(N,S,P){var E,C={},F=null,U=null;P!==void 0&&(F=""+P),S.key!==void 0&&(F=""+S.key),S.ref!==void 0&&(U=S.ref);for(E in S)u.call(S,E)&&!w.hasOwnProperty(E)&&(C[E]=S[E]);if(N&&N.defaultProps)for(E in S=N.defaultProps,S)C[E]===void 0&&(C[E]=S[E]);return{$$typeof:c,type:N,key:F,ref:U,props:C,_owner:f.current}}return jn.Fragment=s,jn.jsx=h,jn.jsxs=h,jn}var tc;function Mm(){return tc||(tc=1,za.exports=Tm()),za.exports}var n=Mm(),v=el();const vc=Pm(v),Am=Im({__proto__:null,default:vc},[v]);var Fo={},$a={exports:{}},Ze={},Fa={exports:{}},Da={};var rc;function Lm(){return rc||(rc=1,(function(l){function c(D,J){var q=D.length;D.push(J);e:for(;0<q;){var y=q-1>>>1,A=D[y];if(0<f(A,J))D[y]=J,D[q]=A,q=y;else break e}}function s(D){return D.length===0?null:D[0]}function u(D){if(D.length===0)return null;var J=D[0],q=D.pop();if(q!==J){D[0]=q;e:for(var y=0,A=D.length,se=A>>>1;y<se;){var ce=2*(y+1)-1,fe=D[ce],pe=ce+1,be=D[pe];if(0>f(fe,q))pe<A&&0>f(be,fe)?(D[y]=be,D[pe]=q,y=pe):(D[y]=fe,D[ce]=q,y=ce);else if(pe<A&&0>f(be,q))D[y]=be,D[pe]=q,y=pe;else break e}}return J}function f(D,J){var q=D.sortIndex-J.sortIndex;return q!==0?q:D.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;l.unstable_now=function(){return w.now()}}else{var h=Date,N=h.now();l.unstable_now=function(){return h.now()-N}}var S=[],P=[],E=1,C=null,F=3,U=!1,j=!1,I=!1,M=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(D){for(var J=s(P);J!==null;){if(J.callback===null)u(P);else if(J.startTime<=D)u(P),J.sortIndex=J.expirationTime,c(S,J);else break;J=s(P)}}function oe(D){if(I=!1,Q(D),!j)if(s(S)!==null)j=!0,_(H);else{var J=s(P);J!==null&&ie(oe,J.startTime-D)}}function H(D,J){j=!1,I&&(I=!1,W(he),he=-1),U=!0;var q=F;try{for(Q(J),C=s(S);C!==null&&(!(C.expirationTime>J)||D&&!ee());){var y=C.callback;if(typeof y=="function"){C.callback=null,F=C.priorityLevel;var A=y(C.expirationTime<=J);J=l.unstable_now(),typeof A=="function"?C.callback=A:C===s(S)&&u(S),Q(J)}else u(S);C=s(S)}if(C!==null)var se=!0;else{var ce=s(P);ce!==null&&ie(oe,ce.startTime-J),se=!1}return se}finally{C=null,F=q,U=!1}}var O=!1,Z=null,he=-1,xe=5,Le=-1;function ee(){return!(l.unstable_now()-Le<xe)}function ne(){if(Z!==null){var D=l.unstable_now();Le=D;var J=!0;try{J=Z(!0,D)}finally{J?ue():(O=!1,Z=null)}}else O=!1}var ue;if(typeof R=="function")ue=function(){R(ne)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,z=Ie.port2;Ie.port1.onmessage=ne,ue=function(){z.postMessage(null)}}else ue=function(){M(ne,0)};function _(D){Z=D,O||(O=!0,ue())}function ie(D,J){he=M(function(){D(l.unstable_now())},J)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_continueExecution=function(){j||U||(j=!0,_(H))},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return F},l.unstable_getFirstCallbackNode=function(){return s(S)},l.unstable_next=function(D){switch(F){case 1:case 2:case 3:var J=3;break;default:J=F}var q=F;F=J;try{return D()}finally{F=q}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(D,J){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=F;F=D;try{return J()}finally{F=q}},l.unstable_scheduleCallback=function(D,J,q){var y=l.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?y+q:y):q=y,D){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=q+A,D={id:E++,callback:J,priorityLevel:D,startTime:q,expirationTime:A,sortIndex:-1},q>y?(D.sortIndex=q,c(P,D),s(S)===null&&D===s(P)&&(I?(W(he),he=-1):I=!0,ie(oe,q-y))):(D.sortIndex=A,c(S,D),j||U||(j=!0,_(H))),D},l.unstable_shouldYield=ee,l.unstable_wrapCallback=function(D){var J=F;return function(){var q=F;F=J;try{return D.apply(this,arguments)}finally{F=q}}}})(Da)),Da}var nc;function Om(){return nc||(nc=1,Fa.exports=Lm()),Fa.exports}var oc;function Bm(){if(oc)return Ze;oc=1;var l=el(),c=Om();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,f={};function w(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(f[e]=t,e=0;e<t.length;e++)u.add(t[e])}var N=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,P=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},C={};function F(e){return S.call(C,e)?!0:S.call(E,e)?!1:P.test(e)?C[e]=!0:(E[e]=!0,!1)}function U(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,t,r,o){if(t===null||typeof t>"u"||U(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,r,o,i,a,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=d}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];M[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){M[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(W,R);M[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(W,R);M[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(W,R);M[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),M.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){M[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function Q(e,t,r,o){var i=M.hasOwnProperty(t)?M[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(j(t,r,i,o)&&(r=null),o||i===null?F(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,o=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var oe=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),O=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),Le=Symbol.for("react.provider"),ee=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),Ie=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),D=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,y;function A(e){if(y===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);y=t&&t[1]||""}return`
`+y+e}var se=!1;function ce(e,t){if(!e||se)return"";se=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var o=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){o=k}e.call(t.prototype)}else{try{throw Error()}catch(k){o=k}e()}}catch(k){if(k&&o&&typeof k.stack=="string"){for(var i=k.stack.split(`
`),a=o.stack.split(`
`),d=i.length-1,m=a.length-1;1<=d&&0<=m&&i[d]!==a[m];)m--;for(;1<=d&&0<=m;d--,m--)if(i[d]!==a[m]){if(d!==1||m!==1)do if(d--,m--,0>m||i[d]!==a[m]){var p=`
`+i[d].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=d&&0<=m);break}}}finally{se=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?A(e):""}function fe(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case O:return"Portal";case xe:return"Profiler";case he:return"StrictMode";case ue:return"Suspense";case Ie:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ee:return(e.displayName||"Context")+".Consumer";case Le:return(e._context.displayName||"Context")+".Provider";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return t=e.displayName||null,t!==null?t:pe(e.type)||"Memo";case _:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function be(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(t);case 8:return t===he?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ye(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function et(e){var t=je(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){o=""+d,a.call(this,d)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pn(e){e._valueTracker||(e._valueTracker=et(e))}function ol(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=je(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function Rn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wo(e,t){var r=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function il(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=ye(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function al(e,t){t=t.checked,t!=null&&Q(e,"checked",t,!1)}function qo(e,t){al(e,t);var r=ye(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Vo(e,t.type,ye(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ll(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Vo(e,t,r){(t!=="number"||Rn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var _r=Array.isArray;function mr(e,t,r,o){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&o&&(e[r].defaultSelected=!0)}else{for(r=""+ye(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Go(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(s(92));if(_r(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ye(r)}}function dl(e,t){var r=ye(t.value),o=ye(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function cl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ul(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ul(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tn,ml=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tn=Tn||document.createElement("div"),Tn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mc=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(e){Mc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fr[t]=Fr[e]})});function fl(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Fr.hasOwnProperty(e)&&Fr[e]?(""+t).trim():t+"px"}function pl(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,i=fl(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,i):e[r]=i}}var Ac=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qo(e,t){if(t){if(Ac[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yo=null;function Xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zo=null,fr=null,pr=null;function gl(e){if(e=dn(e)){if(typeof Zo!="function")throw Error(s(280));var t=e.stateNode;t&&(t=eo(t),Zo(e.stateNode,e.type,t))}}function hl(e){fr?pr?pr.push(e):pr=[e]:fr=e}function yl(){if(fr){var e=fr,t=pr;if(pr=fr=null,gl(e),t)for(e=0;e<t.length;e++)gl(t[e])}}function vl(e,t){return e(t)}function xl(){}var ei=!1;function bl(e,t,r){if(ei)return e(t,r);ei=!0;try{return vl(e,t,r)}finally{ei=!1,(fr!==null||pr!==null)&&(xl(),yl())}}function Dr(e,t){var r=e.stateNode;if(r===null)return null;var o=eo(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,t,typeof r));return r}var ti=!1;if(N)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){ti=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{ti=!1}function Lc(e,t,r,o,i,a,d,m,p){var k=Array.prototype.slice.call(arguments,3);try{t.apply(r,k)}catch(L){this.onError(L)}}var Hr=!1,Mn=null,An=!1,ri=null,Oc={onError:function(e){Hr=!0,Mn=e}};function Bc(e,t,r,o,i,a,d,m,p){Hr=!1,Mn=null,Lc.apply(Oc,arguments)}function zc(e,t,r,o,i,a,d,m,p){if(Bc.apply(this,arguments),Hr){if(Hr){var k=Mn;Hr=!1,Mn=null}else throw Error(s(198));An||(An=!0,ri=k)}}function Yt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function wl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kl(e){if(Yt(e)!==e)throw Error(s(188))}function _c(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(s(188));return t!==e?null:e}for(var r=e,o=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(o=i.return,o!==null){r=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return kl(i),e;if(a===o)return kl(i),t;a=a.sibling}throw Error(s(188))}if(r.return!==o.return)r=i,o=a;else{for(var d=!1,m=i.child;m;){if(m===r){d=!0,r=i,o=a;break}if(m===o){d=!0,o=i,r=a;break}m=m.sibling}if(!d){for(m=a.child;m;){if(m===r){d=!0,r=a,o=i;break}if(m===o){d=!0,o=a,r=i;break}m=m.sibling}if(!d)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:t}function Sl(e){return e=_c(e),e!==null?jl(e):null}function jl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jl(e);if(t!==null)return t;e=e.sibling}return null}var Cl=c.unstable_scheduleCallback,El=c.unstable_cancelCallback,$c=c.unstable_shouldYield,Fc=c.unstable_requestPaint,Re=c.unstable_now,Dc=c.unstable_getCurrentPriorityLevel,ni=c.unstable_ImmediatePriority,Nl=c.unstable_UserBlockingPriority,Ln=c.unstable_NormalPriority,Uc=c.unstable_LowPriority,Il=c.unstable_IdlePriority,On=null,vt=null;function Hc(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(On,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Vc,Wc=Math.log,qc=Math.LN2;function Vc(e){return e>>>=0,e===0?32:31-(Wc(e)/qc|0)|0}var Bn=64,zn=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _n(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,d=r&268435455;if(d!==0){var m=d&~i;m!==0?o=Wr(m):(a&=d,a!==0&&(o=Wr(a)))}else d=r&~i,d!==0?o=Wr(d):a!==0&&(o=Wr(a));if(o===0)return 0;if(t!==0&&t!==o&&(t&i)===0&&(i=o&-o,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-ut(t),i=1<<r,o|=e[r],t&=~i;return o}function Gc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jc(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-ut(a),m=1<<d,p=i[d];p===-1?((m&r)===0||(m&o)!==0)&&(i[d]=Gc(m,t)):p<=t&&(e.expiredLanes|=m),a&=~m}}function oi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pl(){var e=Bn;return Bn<<=1,(Bn&4194240)===0&&(Bn=64),e}function ii(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function qr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=r}function Qc(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-ut(r),a=1<<i;t[i]=0,o[i]=-1,e[i]=-1,r&=~a}}function ai(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-ut(r),i=1<<o;i&t|e[o]&t&&(e[o]|=t),r&=~i}}var ve=0;function Rl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Tl,li,Ml,Al,Ll,si=!1,$n=[],Tt=null,Mt=null,At=null,Vr=new Map,Gr=new Map,Lt=[],Kc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ol(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(t.pointerId)}}function Jr(e,t,r,o,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},t!==null&&(t=dn(t),t!==null&&li(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yc(e,t,r,o,i){switch(t){case"focusin":return Tt=Jr(Tt,e,t,r,o,i),!0;case"dragenter":return Mt=Jr(Mt,e,t,r,o,i),!0;case"mouseover":return At=Jr(At,e,t,r,o,i),!0;case"pointerover":var a=i.pointerId;return Vr.set(a,Jr(Vr.get(a)||null,e,t,r,o,i)),!0;case"gotpointercapture":return a=i.pointerId,Gr.set(a,Jr(Gr.get(a)||null,e,t,r,o,i)),!0}return!1}function Bl(e){var t=Xt(e.target);if(t!==null){var r=Yt(t);if(r!==null){if(t=r.tag,t===13){if(t=wl(r),t!==null){e.blockedOn=t,Ll(e.priority,function(){Ml(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Yo=o,r.target.dispatchEvent(o),Yo=null}else return t=dn(r),t!==null&&li(t),e.blockedOn=r,!1;t.shift()}return!0}function zl(e,t,r){Fn(e)&&r.delete(t)}function Xc(){si=!1,Tt!==null&&Fn(Tt)&&(Tt=null),Mt!==null&&Fn(Mt)&&(Mt=null),At!==null&&Fn(At)&&(At=null),Vr.forEach(zl),Gr.forEach(zl)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,si||(si=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Xc)))}function Kr(e){function t(i){return Qr(i,e)}if(0<$n.length){Qr($n[0],e);for(var r=1;r<$n.length;r++){var o=$n[r];o.blockedOn===e&&(o.blockedOn=null)}}for(Tt!==null&&Qr(Tt,e),Mt!==null&&Qr(Mt,e),At!==null&&Qr(At,e),Vr.forEach(t),Gr.forEach(t),r=0;r<Lt.length;r++)o=Lt[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<Lt.length&&(r=Lt[0],r.blockedOn===null);)Bl(r),r.blockedOn===null&&Lt.shift()}var gr=oe.ReactCurrentBatchConfig,Dn=!0;function Zc(e,t,r,o){var i=ve,a=gr.transition;gr.transition=null;try{ve=1,di(e,t,r,o)}finally{ve=i,gr.transition=a}}function eu(e,t,r,o){var i=ve,a=gr.transition;gr.transition=null;try{ve=4,di(e,t,r,o)}finally{ve=i,gr.transition=a}}function di(e,t,r,o){if(Dn){var i=ci(e,t,r,o);if(i===null)Ni(e,t,o,Un,r),Ol(e,o);else if(Yc(i,e,t,r,o))o.stopPropagation();else if(Ol(e,o),t&4&&-1<Kc.indexOf(e)){for(;i!==null;){var a=dn(i);if(a!==null&&Tl(a),a=ci(e,t,r,o),a===null&&Ni(e,t,o,Un,r),a===i)break;i=a}i!==null&&o.stopPropagation()}else Ni(e,t,o,null,r)}}var Un=null;function ci(e,t,r,o){if(Un=null,e=Xo(o),e=Xt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=wl(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Un=e,null}function _l(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dc()){case ni:return 1;case Nl:return 4;case Ln:case Uc:return 16;case Il:return 536870912;default:return 16}default:return 16}}var Ot=null,ui=null,Hn=null;function $l(){if(Hn)return Hn;var e,t=ui,r=t.length,o,i="value"in Ot?Ot.value:Ot.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var d=r-e;for(o=1;o<=d&&t[r-o]===i[a-o];o++);return Hn=i.slice(e,1<o?1-o:void 0)}function Wn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qn(){return!0}function Fl(){return!1}function tt(e){function t(r,o,i,a,d){this._reactName=r,this._targetInst=i,this.type=o,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(a):a[m]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?qn:Fl,this.isPropagationStopped=Fl,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),t}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=tt(hr),Yr=q({},hr,{view:0,detail:0}),tu=tt(Yr),fi,pi,Xr,Vn=q({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(fi=e.screenX-Xr.screenX,pi=e.screenY-Xr.screenY):pi=fi=0,Xr=e),fi)},movementY:function(e){return"movementY"in e?e.movementY:pi}}),Dl=tt(Vn),ru=q({},Vn,{dataTransfer:0}),nu=tt(ru),ou=q({},Yr,{relatedTarget:0}),gi=tt(ou),iu=q({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),au=tt(iu),lu=q({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),su=tt(lu),du=q({},hr,{data:0}),Ul=tt(du),cu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mu[e])?!!t[e]:!1}function hi(){return fu}var pu=q({},Yr,{key:function(e){if(e.key){var t=cu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hi,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gu=tt(pu),hu=q({},Vn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hl=tt(hu),yu=q({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hi}),vu=tt(yu),xu=q({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bu=tt(xu),wu=q({},Vn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ku=tt(wu),Su=[9,13,27,32],yi=N&&"CompositionEvent"in window,Zr=null;N&&"documentMode"in document&&(Zr=document.documentMode);var ju=N&&"TextEvent"in window&&!Zr,Wl=N&&(!yi||Zr&&8<Zr&&11>=Zr),ql=" ",Vl=!1;function Gl(e,t){switch(e){case"keyup":return Su.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function Cu(e,t){switch(e){case"compositionend":return Jl(t);case"keypress":return t.which!==32?null:(Vl=!0,ql);case"textInput":return e=t.data,e===ql&&Vl?null:e;default:return null}}function Eu(e,t){if(yr)return e==="compositionend"||!yi&&Gl(e,t)?(e=$l(),Hn=ui=Ot=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wl&&t.locale!=="ko"?null:t.data;default:return null}}var Nu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nu[e.type]:t==="textarea"}function Kl(e,t,r,o){hl(o),t=Yn(t,"onChange"),0<t.length&&(r=new mi("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var en=null,tn=null;function Iu(e){ps(e,0)}function Gn(e){var t=kr(e);if(ol(t))return e}function Pu(e,t){if(e==="change")return t}var Yl=!1;if(N){var vi;if(N){var xi="oninput"in document;if(!xi){var Xl=document.createElement("div");Xl.setAttribute("oninput","return;"),xi=typeof Xl.oninput=="function"}vi=xi}else vi=!1;Yl=vi&&(!document.documentMode||9<document.documentMode)}function Zl(){en&&(en.detachEvent("onpropertychange",es),tn=en=null)}function es(e){if(e.propertyName==="value"&&Gn(tn)){var t=[];Kl(t,tn,e,Xo(e)),bl(Iu,t)}}function Ru(e,t,r){e==="focusin"?(Zl(),en=t,tn=r,en.attachEvent("onpropertychange",es)):e==="focusout"&&Zl()}function Tu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gn(tn)}function Mu(e,t){if(e==="click")return Gn(t)}function Au(e,t){if(e==="input"||e==="change")return Gn(t)}function Lu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Lu;function rn(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var i=r[o];if(!S.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rs(e,t){var r=ts(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ts(r)}}function ns(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ns(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function os(){for(var e=window,t=Rn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Rn(e.document)}return t}function bi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ou(e){var t=os(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ns(r.ownerDocument.documentElement,r)){if(o!==null&&bi(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(o.start,i);o=o.end===void 0?a:Math.min(o.end,i),!e.extend&&a>o&&(i=o,o=a,a=i),i=rs(r,a);var d=rs(r,o);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bu=N&&"documentMode"in document&&11>=document.documentMode,vr=null,wi=null,nn=null,ki=!1;function is(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ki||vr==null||vr!==Rn(o)||(o=vr,"selectionStart"in o&&bi(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),nn&&rn(nn,o)||(nn=o,o=Yn(wi,"onSelect"),0<o.length&&(t=new mi("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=vr)))}function Jn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var xr={animationend:Jn("Animation","AnimationEnd"),animationiteration:Jn("Animation","AnimationIteration"),animationstart:Jn("Animation","AnimationStart"),transitionend:Jn("Transition","TransitionEnd")},Si={},as={};N&&(as=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Qn(e){if(Si[e])return Si[e];if(!xr[e])return e;var t=xr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in as)return Si[e]=t[r];return e}var ls=Qn("animationend"),ss=Qn("animationiteration"),ds=Qn("animationstart"),cs=Qn("transitionend"),us=new Map,ms="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){us.set(e,t),w(t,[e])}for(var ji=0;ji<ms.length;ji++){var Ci=ms[ji],zu=Ci.toLowerCase(),_u=Ci[0].toUpperCase()+Ci.slice(1);Bt(zu,"on"+_u)}Bt(ls,"onAnimationEnd"),Bt(ss,"onAnimationIteration"),Bt(ds,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(cs,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var on="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$u=new Set("cancel close invalid load scroll toggle".split(" ").concat(on));function fs(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,zc(o,t,void 0,e),e.currentTarget=null}function ps(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],i=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var d=o.length-1;0<=d;d--){var m=o[d],p=m.instance,k=m.currentTarget;if(m=m.listener,p!==a&&i.isPropagationStopped())break e;fs(i,m,k),a=p}else for(d=0;d<o.length;d++){if(m=o[d],p=m.instance,k=m.currentTarget,m=m.listener,p!==a&&i.isPropagationStopped())break e;fs(i,m,k),a=p}}}if(An)throw e=ri,An=!1,ri=null,e}function ke(e,t){var r=t[Ai];r===void 0&&(r=t[Ai]=new Set);var o=e+"__bubble";r.has(o)||(gs(t,e,2,!1),r.add(o))}function Ei(e,t,r){var o=0;t&&(o|=4),gs(r,e,o,t)}var Kn="_reactListening"+Math.random().toString(36).slice(2);function an(e){if(!e[Kn]){e[Kn]=!0,u.forEach(function(r){r!=="selectionchange"&&($u.has(r)||Ei(r,!1,e),Ei(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kn]||(t[Kn]=!0,Ei("selectionchange",!1,t))}}function gs(e,t,r,o){switch(_l(t)){case 1:var i=Zc;break;case 4:i=eu;break;default:i=di}r=i.bind(null,t,r,e),i=void 0,!ti||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ni(e,t,r,o,i){var a=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var m=o.stateNode.containerInfo;if(m===i||m.nodeType===8&&m.parentNode===i)break;if(d===4)for(d=o.return;d!==null;){var p=d.tag;if((p===3||p===4)&&(p=d.stateNode.containerInfo,p===i||p.nodeType===8&&p.parentNode===i))return;d=d.return}for(;m!==null;){if(d=Xt(m),d===null)return;if(p=d.tag,p===5||p===6){o=a=d;continue e}m=m.parentNode}}o=o.return}bl(function(){var k=a,L=Xo(r),B=[];e:{var T=us.get(e);if(T!==void 0){var V=mi,K=e;switch(e){case"keypress":if(Wn(r)===0)break e;case"keydown":case"keyup":V=gu;break;case"focusin":K="focus",V=gi;break;case"focusout":K="blur",V=gi;break;case"beforeblur":case"afterblur":V=gi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Dl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=nu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=vu;break;case ls:case ss:case ds:V=au;break;case cs:V=bu;break;case"scroll":V=tu;break;case"wheel":V=ku;break;case"copy":case"cut":case"paste":V=su;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Hl}var Y=(t&4)!==0,Te=!Y&&e==="scroll",x=Y?T!==null?T+"Capture":null:T;Y=[];for(var g=k,b;g!==null;){b=g;var $=b.stateNode;if(b.tag===5&&$!==null&&(b=$,x!==null&&($=Dr(g,x),$!=null&&Y.push(ln(g,$,b)))),Te)break;g=g.return}0<Y.length&&(T=new V(T,K,null,r,L),B.push({event:T,listeners:Y}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",T&&r!==Yo&&(K=r.relatedTarget||r.fromElement)&&(Xt(K)||K[St]))break e;if((V||T)&&(T=L.window===L?L:(T=L.ownerDocument)?T.defaultView||T.parentWindow:window,V?(K=r.relatedTarget||r.toElement,V=k,K=K?Xt(K):null,K!==null&&(Te=Yt(K),K!==Te||K.tag!==5&&K.tag!==6)&&(K=null)):(V=null,K=k),V!==K)){if(Y=Dl,$="onMouseLeave",x="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(Y=Hl,$="onPointerLeave",x="onPointerEnter",g="pointer"),Te=V==null?T:kr(V),b=K==null?T:kr(K),T=new Y($,g+"leave",V,r,L),T.target=Te,T.relatedTarget=b,$=null,Xt(L)===k&&(Y=new Y(x,g+"enter",K,r,L),Y.target=b,Y.relatedTarget=Te,$=Y),Te=$,V&&K)t:{for(Y=V,x=K,g=0,b=Y;b;b=br(b))g++;for(b=0,$=x;$;$=br($))b++;for(;0<g-b;)Y=br(Y),g--;for(;0<b-g;)x=br(x),b--;for(;g--;){if(Y===x||x!==null&&Y===x.alternate)break t;Y=br(Y),x=br(x)}Y=null}else Y=null;V!==null&&hs(B,T,V,Y,!1),K!==null&&Te!==null&&hs(B,Te,K,Y,!0)}}e:{if(T=k?kr(k):window,V=T.nodeName&&T.nodeName.toLowerCase(),V==="select"||V==="input"&&T.type==="file")var X=Pu;else if(Ql(T))if(Yl)X=Au;else{X=Tu;var te=Ru}else(V=T.nodeName)&&V.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(X=Mu);if(X&&(X=X(e,k))){Kl(B,X,r,L);break e}te&&te(e,T,k),e==="focusout"&&(te=T._wrapperState)&&te.controlled&&T.type==="number"&&Vo(T,"number",T.value)}switch(te=k?kr(k):window,e){case"focusin":(Ql(te)||te.contentEditable==="true")&&(vr=te,wi=k,nn=null);break;case"focusout":nn=wi=vr=null;break;case"mousedown":ki=!0;break;case"contextmenu":case"mouseup":case"dragend":ki=!1,is(B,r,L);break;case"selectionchange":if(Bu)break;case"keydown":case"keyup":is(B,r,L)}var re;if(yi)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else yr?Gl(e,r)&&(ae="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ae="onCompositionStart");ae&&(Wl&&r.locale!=="ko"&&(yr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&yr&&(re=$l()):(Ot=L,ui="value"in Ot?Ot.value:Ot.textContent,yr=!0)),te=Yn(k,ae),0<te.length&&(ae=new Ul(ae,e,null,r,L),B.push({event:ae,listeners:te}),re?ae.data=re:(re=Jl(r),re!==null&&(ae.data=re)))),(re=ju?Cu(e,r):Eu(e,r))&&(k=Yn(k,"onBeforeInput"),0<k.length&&(L=new Ul("onBeforeInput","beforeinput",null,r,L),B.push({event:L,listeners:k}),L.data=re))}ps(B,t)})}function ln(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Yn(e,t){for(var r=t+"Capture",o=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Dr(e,r),a!=null&&o.unshift(ln(e,a,i)),a=Dr(e,t),a!=null&&o.push(ln(e,a,i))),e=e.return}return o}function br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hs(e,t,r,o,i){for(var a=t._reactName,d=[];r!==null&&r!==o;){var m=r,p=m.alternate,k=m.stateNode;if(p!==null&&p===o)break;m.tag===5&&k!==null&&(m=k,i?(p=Dr(r,a),p!=null&&d.unshift(ln(r,p,m))):i||(p=Dr(r,a),p!=null&&d.push(ln(r,p,m)))),r=r.return}d.length!==0&&e.push({event:t,listeners:d})}var Fu=/\r\n?/g,Du=/\u0000|\uFFFD/g;function ys(e){return(typeof e=="string"?e:""+e).replace(Fu,`
`).replace(Du,"")}function Xn(e,t,r){if(t=ys(t),ys(e)!==t&&r)throw Error(s(425))}function Zn(){}var Ii=null,Pi=null;function Ri(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,Uu=typeof clearTimeout=="function"?clearTimeout:void 0,vs=typeof Promise=="function"?Promise:void 0,Hu=typeof queueMicrotask=="function"?queueMicrotask:typeof vs<"u"?function(e){return vs.resolve(null).then(e).catch(Wu)}:Ti;function Wu(e){setTimeout(function(){throw e})}function Mi(e,t){var r=t,o=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(o===0){e.removeChild(i),Kr(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=i}while(r);Kr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),xt="__reactFiber$"+wr,sn="__reactProps$"+wr,St="__reactContainer$"+wr,Ai="__reactEvents$"+wr,qu="__reactListeners$"+wr,Vu="__reactHandles$"+wr;function Xt(e){var t=e[xt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[St]||r[xt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=xs(e);e!==null;){if(r=e[xt])return r;e=xs(e)}return t}e=r,r=e.parentNode}return null}function dn(e){return e=e[xt]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function eo(e){return e[sn]||null}var Li=[],Sr=-1;function _t(e){return{current:e}}function Se(e){0>Sr||(e.current=Li[Sr],Li[Sr]=null,Sr--)}function we(e,t){Sr++,Li[Sr]=e.current,e.current=t}var $t={},Ue=_t($t),Je=_t(!1),Zt=$t;function jr(e,t){var r=e.type.contextTypes;if(!r)return $t;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(e){return e=e.childContextTypes,e!=null}function to(){Se(Je),Se(Ue)}function bs(e,t,r){if(Ue.current!==$t)throw Error(s(168));we(Ue,t),we(Je,r)}function ws(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(s(108,be(e)||"Unknown",i));return q({},r,o)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,Zt=Ue.current,we(Ue,e),we(Je,Je.current),!0}function ks(e,t,r){var o=e.stateNode;if(!o)throw Error(s(169));r?(e=ws(e,t,Zt),o.__reactInternalMemoizedMergedChildContext=e,Se(Je),Se(Ue),we(Ue,e)):Se(Je),we(Je,r)}var jt=null,no=!1,Oi=!1;function Ss(e){jt===null?jt=[e]:jt.push(e)}function Gu(e){no=!0,Ss(e)}function Ft(){if(!Oi&&jt!==null){Oi=!0;var e=0,t=ve;try{var r=jt;for(ve=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}jt=null,no=!1}catch(i){throw jt!==null&&(jt=jt.slice(e+1)),Cl(ni,Ft),i}finally{ve=t,Oi=!1}}return null}var Cr=[],Er=0,oo=null,io=0,it=[],at=0,er=null,Ct=1,Et="";function tr(e,t){Cr[Er++]=io,Cr[Er++]=oo,oo=e,io=t}function js(e,t,r){it[at++]=Ct,it[at++]=Et,it[at++]=er,er=e;var o=Ct;e=Et;var i=32-ut(o)-1;o&=~(1<<i),r+=1;var a=32-ut(t)+i;if(30<a){var d=i-i%5;a=(o&(1<<d)-1).toString(32),o>>=d,i-=d,Ct=1<<32-ut(t)+i|r<<i|o,Et=a+e}else Ct=1<<a|r<<i|o,Et=e}function Bi(e){e.return!==null&&(tr(e,1),js(e,1,0))}function zi(e){for(;e===oo;)oo=Cr[--Er],Cr[Er]=null,io=Cr[--Er],Cr[Er]=null;for(;e===er;)er=it[--at],it[at]=null,Et=it[--at],it[at]=null,Ct=it[--at],it[at]=null}var rt=null,nt=null,Ce=!1,ft=null;function Cs(e,t){var r=ct(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Es(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,nt=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=er!==null?{id:Ct,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ct(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,rt=e,nt=null,!0):!1;default:return!1}}function _i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $i(e){if(Ce){var t=nt;if(t){var r=t;if(!Es(e,t)){if(_i(e))throw Error(s(418));t=zt(r.nextSibling);var o=rt;t&&Es(e,t)?Cs(o,r):(e.flags=e.flags&-4097|2,Ce=!1,rt=e)}}else{if(_i(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ce=!1,rt=e}}}function Ns(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function ao(e){if(e!==rt)return!1;if(!Ce)return Ns(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ri(e.type,e.memoizedProps)),t&&(t=nt)){if(_i(e))throw Is(),Error(s(418));for(;t;)Cs(e,t),t=zt(t.nextSibling)}if(Ns(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){nt=zt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=rt?zt(e.stateNode.nextSibling):null;return!0}function Is(){for(var e=nt;e;)e=zt(e.nextSibling)}function Nr(){nt=rt=null,Ce=!1}function Fi(e){ft===null?ft=[e]:ft.push(e)}var Ju=oe.ReactCurrentBatchConfig;function cn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(s(309));var o=r.stateNode}if(!o)throw Error(s(147,e));var i=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(d){var m=i.refs;d===null?delete m[a]:m[a]=d},t._stringRef=a,t)}if(typeof e!="string")throw Error(s(284));if(!r._owner)throw Error(s(290,e))}return e}function lo(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ps(e){var t=e._init;return t(e._payload)}function Rs(e){function t(x,g){if(e){var b=x.deletions;b===null?(x.deletions=[g],x.flags|=16):b.push(g)}}function r(x,g){if(!e)return null;for(;g!==null;)t(x,g),g=g.sibling;return null}function o(x,g){for(x=new Map;g!==null;)g.key!==null?x.set(g.key,g):x.set(g.index,g),g=g.sibling;return x}function i(x,g){return x=Jt(x,g),x.index=0,x.sibling=null,x}function a(x,g,b){return x.index=b,e?(b=x.alternate,b!==null?(b=b.index,b<g?(x.flags|=2,g):b):(x.flags|=2,g)):(x.flags|=1048576,g)}function d(x){return e&&x.alternate===null&&(x.flags|=2),x}function m(x,g,b,$){return g===null||g.tag!==6?(g=Ta(b,x.mode,$),g.return=x,g):(g=i(g,b),g.return=x,g)}function p(x,g,b,$){var X=b.type;return X===Z?L(x,g,b.props.children,$,b.key):g!==null&&(g.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===_&&Ps(X)===g.type)?($=i(g,b.props),$.ref=cn(x,g,b),$.return=x,$):($=Mo(b.type,b.key,b.props,null,x.mode,$),$.ref=cn(x,g,b),$.return=x,$)}function k(x,g,b,$){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=Ma(b,x.mode,$),g.return=x,g):(g=i(g,b.children||[]),g.return=x,g)}function L(x,g,b,$,X){return g===null||g.tag!==7?(g=dr(b,x.mode,$,X),g.return=x,g):(g=i(g,b),g.return=x,g)}function B(x,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ta(""+g,x.mode,b),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case H:return b=Mo(g.type,g.key,g.props,null,x.mode,b),b.ref=cn(x,null,g),b.return=x,b;case O:return g=Ma(g,x.mode,b),g.return=x,g;case _:var $=g._init;return B(x,$(g._payload),b)}if(_r(g)||J(g))return g=dr(g,x.mode,b,null),g.return=x,g;lo(x,g)}return null}function T(x,g,b,$){var X=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return X!==null?null:m(x,g,""+b,$);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case H:return b.key===X?p(x,g,b,$):null;case O:return b.key===X?k(x,g,b,$):null;case _:return X=b._init,T(x,g,X(b._payload),$)}if(_r(b)||J(b))return X!==null?null:L(x,g,b,$,null);lo(x,b)}return null}function V(x,g,b,$,X){if(typeof $=="string"&&$!==""||typeof $=="number")return x=x.get(b)||null,m(g,x,""+$,X);if(typeof $=="object"&&$!==null){switch($.$$typeof){case H:return x=x.get($.key===null?b:$.key)||null,p(g,x,$,X);case O:return x=x.get($.key===null?b:$.key)||null,k(g,x,$,X);case _:var te=$._init;return V(x,g,b,te($._payload),X)}if(_r($)||J($))return x=x.get(b)||null,L(g,x,$,X,null);lo(g,$)}return null}function K(x,g,b,$){for(var X=null,te=null,re=g,ae=g=0,$e=null;re!==null&&ae<b.length;ae++){re.index>ae?($e=re,re=null):$e=re.sibling;var ge=T(x,re,b[ae],$);if(ge===null){re===null&&(re=$e);break}e&&re&&ge.alternate===null&&t(x,re),g=a(ge,g,ae),te===null?X=ge:te.sibling=ge,te=ge,re=$e}if(ae===b.length)return r(x,re),Ce&&tr(x,ae),X;if(re===null){for(;ae<b.length;ae++)re=B(x,b[ae],$),re!==null&&(g=a(re,g,ae),te===null?X=re:te.sibling=re,te=re);return Ce&&tr(x,ae),X}for(re=o(x,re);ae<b.length;ae++)$e=V(re,x,ae,b[ae],$),$e!==null&&(e&&$e.alternate!==null&&re.delete($e.key===null?ae:$e.key),g=a($e,g,ae),te===null?X=$e:te.sibling=$e,te=$e);return e&&re.forEach(function(Qt){return t(x,Qt)}),Ce&&tr(x,ae),X}function Y(x,g,b,$){var X=J(b);if(typeof X!="function")throw Error(s(150));if(b=X.call(b),b==null)throw Error(s(151));for(var te=X=null,re=g,ae=g=0,$e=null,ge=b.next();re!==null&&!ge.done;ae++,ge=b.next()){re.index>ae?($e=re,re=null):$e=re.sibling;var Qt=T(x,re,ge.value,$);if(Qt===null){re===null&&(re=$e);break}e&&re&&Qt.alternate===null&&t(x,re),g=a(Qt,g,ae),te===null?X=Qt:te.sibling=Qt,te=Qt,re=$e}if(ge.done)return r(x,re),Ce&&tr(x,ae),X;if(re===null){for(;!ge.done;ae++,ge=b.next())ge=B(x,ge.value,$),ge!==null&&(g=a(ge,g,ae),te===null?X=ge:te.sibling=ge,te=ge);return Ce&&tr(x,ae),X}for(re=o(x,re);!ge.done;ae++,ge=b.next())ge=V(re,x,ae,ge.value,$),ge!==null&&(e&&ge.alternate!==null&&re.delete(ge.key===null?ae:ge.key),g=a(ge,g,ae),te===null?X=ge:te.sibling=ge,te=ge);return e&&re.forEach(function(Nm){return t(x,Nm)}),Ce&&tr(x,ae),X}function Te(x,g,b,$){if(typeof b=="object"&&b!==null&&b.type===Z&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case H:e:{for(var X=b.key,te=g;te!==null;){if(te.key===X){if(X=b.type,X===Z){if(te.tag===7){r(x,te.sibling),g=i(te,b.props.children),g.return=x,x=g;break e}}else if(te.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===_&&Ps(X)===te.type){r(x,te.sibling),g=i(te,b.props),g.ref=cn(x,te,b),g.return=x,x=g;break e}r(x,te);break}else t(x,te);te=te.sibling}b.type===Z?(g=dr(b.props.children,x.mode,$,b.key),g.return=x,x=g):($=Mo(b.type,b.key,b.props,null,x.mode,$),$.ref=cn(x,g,b),$.return=x,x=$)}return d(x);case O:e:{for(te=b.key;g!==null;){if(g.key===te)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){r(x,g.sibling),g=i(g,b.children||[]),g.return=x,x=g;break e}else{r(x,g);break}else t(x,g);g=g.sibling}g=Ma(b,x.mode,$),g.return=x,x=g}return d(x);case _:return te=b._init,Te(x,g,te(b._payload),$)}if(_r(b))return K(x,g,b,$);if(J(b))return Y(x,g,b,$);lo(x,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(r(x,g.sibling),g=i(g,b),g.return=x,x=g):(r(x,g),g=Ta(b,x.mode,$),g.return=x,x=g),d(x)):r(x,g)}return Te}var Ir=Rs(!0),Ts=Rs(!1),so=_t(null),co=null,Pr=null,Di=null;function Ui(){Di=Pr=co=null}function Hi(e){var t=so.current;Se(so),e._currentValue=t}function Wi(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function Rr(e,t){co=e,Di=Pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ke=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(Di!==e)if(e={context:e,memoizedValue:t,next:null},Pr===null){if(co===null)throw Error(s(308));Pr=e,co.dependencies={lanes:0,firstContext:e}}else Pr=Pr.next=e;return t}var rr=null;function qi(e){rr===null?rr=[e]:rr.push(e)}function Ms(e,t,r,o){var i=t.interleaved;return i===null?(r.next=r,qi(t)):(r.next=i.next,i.next=r),t.interleaved=r,Nt(e,o)}function Nt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Dt=!1;function Vi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function As(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(me&2)!==0){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,Nt(e,r)}return i=o.interleaved,i===null?(t.next=t,qi(o)):(t.next=i.next,i.next=t),o.interleaved=t,Nt(e,r)}function uo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,ai(e,r)}}function Ls(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var d={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=d:a=a.next=d,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function mo(e,t,r,o){var i=e.updateQueue;Dt=!1;var a=i.firstBaseUpdate,d=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var p=m,k=p.next;p.next=null,d===null?a=k:d.next=k,d=p;var L=e.alternate;L!==null&&(L=L.updateQueue,m=L.lastBaseUpdate,m!==d&&(m===null?L.firstBaseUpdate=k:m.next=k,L.lastBaseUpdate=p))}if(a!==null){var B=i.baseState;d=0,L=k=p=null,m=a;do{var T=m.lane,V=m.eventTime;if((o&T)===T){L!==null&&(L=L.next={eventTime:V,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var K=e,Y=m;switch(T=t,V=r,Y.tag){case 1:if(K=Y.payload,typeof K=="function"){B=K.call(V,B,T);break e}B=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=Y.payload,T=typeof K=="function"?K.call(V,B,T):K,T==null)break e;B=q({},B,T);break e;case 2:Dt=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,T=i.effects,T===null?i.effects=[m]:T.push(m))}else V={eventTime:V,lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},L===null?(k=L=V,p=B):L=L.next=V,d|=T;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;T=m,m=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);if(L===null&&(p=B),i.baseState=p,i.firstBaseUpdate=k,i.lastBaseUpdate=L,t=i.shared.interleaved,t!==null){i=t;do d|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);ir|=d,e.lanes=d,e.memoizedState=B}}function Os(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=r,typeof i!="function")throw Error(s(191,i));i.call(o)}}}var un={},bt=_t(un),mn=_t(un),fn=_t(un);function nr(e){if(e===un)throw Error(s(174));return e}function Gi(e,t){switch(we(fn,t),we(mn,e),we(bt,un),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jo(t,e)}Se(bt),we(bt,t)}function Tr(){Se(bt),Se(mn),Se(fn)}function Bs(e){nr(fn.current);var t=nr(bt.current),r=Jo(t,e.type);t!==r&&(we(mn,e),we(bt,r))}function Ji(e){mn.current===e&&(Se(bt),Se(mn))}var Ee=_t(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qi=[];function Ki(){for(var e=0;e<Qi.length;e++)Qi[e]._workInProgressVersionPrimary=null;Qi.length=0}var po=oe.ReactCurrentDispatcher,Yi=oe.ReactCurrentBatchConfig,or=0,Ne=null,Oe=null,ze=null,go=!1,pn=!1,gn=0,Qu=0;function He(){throw Error(s(321))}function Xi(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!mt(e[r],t[r]))return!1;return!0}function Zi(e,t,r,o,i,a){if(or=a,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,po.current=e===null||e.memoizedState===null?Zu:em,e=r(o,i),pn){a=0;do{if(pn=!1,gn=0,25<=a)throw Error(s(301));a+=1,ze=Oe=null,t.updateQueue=null,po.current=tm,e=r(o,i)}while(pn)}if(po.current=vo,t=Oe!==null&&Oe.next!==null,or=0,ze=Oe=Ne=null,go=!1,t)throw Error(s(300));return e}function ea(){var e=gn!==0;return gn=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Ne.memoizedState=ze=e:ze=ze.next=e,ze}function st(){if(Oe===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=ze===null?Ne.memoizedState:ze.next;if(t!==null)ze=t,Oe=e;else{if(e===null)throw Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},ze===null?Ne.memoizedState=ze=e:ze=ze.next=e}return ze}function hn(e,t){return typeof t=="function"?t(e):t}function ta(e){var t=st(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var o=Oe,i=o.baseQueue,a=r.pending;if(a!==null){if(i!==null){var d=i.next;i.next=a.next,a.next=d}o.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,o=o.baseState;var m=d=null,p=null,k=a;do{var L=k.lane;if((or&L)===L)p!==null&&(p=p.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),o=k.hasEagerState?k.eagerState:e(o,k.action);else{var B={lane:L,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};p===null?(m=p=B,d=o):p=p.next=B,Ne.lanes|=L,ir|=L}k=k.next}while(k!==null&&k!==a);p===null?d=o:p.next=m,mt(o,t.memoizedState)||(Ke=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=p,r.lastRenderedState=o}if(e=r.interleaved,e!==null){i=e;do a=i.lane,Ne.lanes|=a,ir|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ra(e){var t=st(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var o=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var d=i=i.next;do a=e(a,d.action),d=d.next;while(d!==i);mt(a,t.memoizedState)||(Ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,o]}function zs(){}function _s(e,t){var r=Ne,o=st(),i=t(),a=!mt(o.memoizedState,i);if(a&&(o.memoizedState=i,Ke=!0),o=o.queue,na(Ds.bind(null,r,o,e),[e]),o.getSnapshot!==t||a||ze!==null&&ze.memoizedState.tag&1){if(r.flags|=2048,yn(9,Fs.bind(null,r,o,i,t),void 0,null),_e===null)throw Error(s(349));(or&30)!==0||$s(r,t,i)}return i}function $s(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Fs(e,t,r,o){t.value=r,t.getSnapshot=o,Us(t)&&Hs(e)}function Ds(e,t,r){return r(function(){Us(t)&&Hs(e)})}function Us(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!mt(e,r)}catch{return!0}}function Hs(e){var t=Nt(e,1);t!==null&&yt(t,e,1,-1)}function Ws(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hn,lastRenderedState:e},t.queue=e,e=e.dispatch=Xu.bind(null,Ne,e),[t.memoizedState,e]}function yn(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function qs(){return st().memoizedState}function ho(e,t,r,o){var i=wt();Ne.flags|=e,i.memoizedState=yn(1|t,r,void 0,o===void 0?null:o)}function yo(e,t,r,o){var i=st();o=o===void 0?null:o;var a=void 0;if(Oe!==null){var d=Oe.memoizedState;if(a=d.destroy,o!==null&&Xi(o,d.deps)){i.memoizedState=yn(t,r,a,o);return}}Ne.flags|=e,i.memoizedState=yn(1|t,r,a,o)}function Vs(e,t){return ho(8390656,8,e,t)}function na(e,t){return yo(2048,8,e,t)}function Gs(e,t){return yo(4,2,e,t)}function Js(e,t){return yo(4,4,e,t)}function Qs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ks(e,t,r){return r=r!=null?r.concat([e]):null,yo(4,4,Qs.bind(null,t,e),r)}function oa(){}function Ys(e,t){var r=st();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Xi(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Xs(e,t){var r=st();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Xi(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function Zs(e,t,r){return(or&21)===0?(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=r):(mt(r,t)||(r=Pl(),Ne.lanes|=r,ir|=r,e.baseState=!0),t)}function Ku(e,t){var r=ve;ve=r!==0&&4>r?r:4,e(!0);var o=Yi.transition;Yi.transition={};try{e(!1),t()}finally{ve=r,Yi.transition=o}}function ed(){return st().memoizedState}function Yu(e,t,r){var o=Vt(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},td(e))rd(t,r);else if(r=Ms(e,t,r,o),r!==null){var i=Ge();yt(r,e,o,i),nd(r,t,o)}}function Xu(e,t,r){var o=Vt(e),i={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(td(e))rd(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var d=t.lastRenderedState,m=a(d,r);if(i.hasEagerState=!0,i.eagerState=m,mt(m,d)){var p=t.interleaved;p===null?(i.next=i,qi(t)):(i.next=p.next,p.next=i),t.interleaved=i;return}}catch{}r=Ms(e,t,i,o),r!==null&&(i=Ge(),yt(r,e,o,i),nd(r,t,o))}}function td(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function rd(e,t){pn=go=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function nd(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,ai(e,r)}}var vo={readContext:lt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},Zu={readContext:lt,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Vs,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ho(4194308,4,Qs.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return ho(4,2,e,t)},useMemo:function(e,t){var r=wt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=wt();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Yu.bind(null,Ne,e),[o.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Ws,useDebugValue:oa,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Ws(!1),t=e[0];return e=Ku.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=Ne,i=wt();if(Ce){if(r===void 0)throw Error(s(407));r=r()}else{if(r=t(),_e===null)throw Error(s(349));(or&30)!==0||$s(o,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,Vs(Ds.bind(null,o,a,e),[e]),o.flags|=2048,yn(9,Fs.bind(null,o,a,r,t),void 0,null),r},useId:function(){var e=wt(),t=_e.identifierPrefix;if(Ce){var r=Et,o=Ct;r=(o&~(1<<32-ut(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=gn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Qu++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},em={readContext:lt,useCallback:Ys,useContext:lt,useEffect:na,useImperativeHandle:Ks,useInsertionEffect:Gs,useLayoutEffect:Js,useMemo:Xs,useReducer:ta,useRef:qs,useState:function(){return ta(hn)},useDebugValue:oa,useDeferredValue:function(e){var t=st();return Zs(t,Oe.memoizedState,e)},useTransition:function(){var e=ta(hn)[0],t=st().memoizedState;return[e,t]},useMutableSource:zs,useSyncExternalStore:_s,useId:ed,unstable_isNewReconciler:!1},tm={readContext:lt,useCallback:Ys,useContext:lt,useEffect:na,useImperativeHandle:Ks,useInsertionEffect:Gs,useLayoutEffect:Js,useMemo:Xs,useReducer:ra,useRef:qs,useState:function(){return ra(hn)},useDebugValue:oa,useDeferredValue:function(e){var t=st();return Oe===null?t.memoizedState=e:Zs(t,Oe.memoizedState,e)},useTransition:function(){var e=ra(hn)[0],t=st().memoizedState;return[e,t]},useMutableSource:zs,useSyncExternalStore:_s,useId:ed,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ia(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:q({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var xo={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=Ge(),i=Vt(e),a=It(o,i);a.payload=t,r!=null&&(a.callback=r),t=Ut(e,a,i),t!==null&&(yt(t,e,i,o),uo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=Ge(),i=Vt(e),a=It(o,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Ut(e,a,i),t!==null&&(yt(t,e,i,o),uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ge(),o=Vt(e),i=It(r,o);i.tag=2,t!=null&&(i.callback=t),t=Ut(e,i,o),t!==null&&(yt(t,e,o,r),uo(t,e,o))}};function od(e,t,r,o,i,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,d):t.prototype&&t.prototype.isPureReactComponent?!rn(r,o)||!rn(i,a):!0}function id(e,t,r){var o=!1,i=$t,a=t.contextType;return typeof a=="object"&&a!==null?a=lt(a):(i=Qe(t)?Zt:Ue.current,o=t.contextTypes,a=(o=o!=null)?jr(e,i):$t),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xo,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ad(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&xo.enqueueReplaceState(t,t.state,null)}function aa(e,t,r,o){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Vi(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=lt(a):(a=Qe(t)?Zt:Ue.current,i.context=jr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ia(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xo.enqueueReplaceState(i,i.state,null),mo(e,r,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mr(e,t){try{var r="",o=t;do r+=fe(o),o=o.return;while(o);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function la(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function sa(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var rm=typeof WeakMap=="function"?WeakMap:Map;function ld(e,t,r){r=It(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Eo||(Eo=!0,Sa=o),sa(e,t)},r}function sd(e,t,r){r=It(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;r.payload=function(){return o(i)},r.callback=function(){sa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){sa(e,t),typeof o!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),r}function dd(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new rm;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(r)||(i.add(r),e=hm.bind(null,e,t,r),t.then(e,e))}function cd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ud(e,t,r,o,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=It(-1,1),t.tag=2,Ut(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var nm=oe.ReactCurrentOwner,Ke=!1;function Ve(e,t,r,o){t.child=e===null?Ts(t,null,r,o):Ir(t,e.child,r,o)}function md(e,t,r,o,i){r=r.render;var a=t.ref;return Rr(t,i),o=Zi(e,t,r,o,a,i),r=ea(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(Ce&&r&&Bi(t),t.flags|=1,Ve(e,t,o,i),t.child)}function fd(e,t,r,o,i){if(e===null){var a=r.type;return typeof a=="function"&&!Ra(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,pd(e,t,a,o,i)):(e=Mo(r.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var d=a.memoizedProps;if(r=r.compare,r=r!==null?r:rn,r(d,o)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=Jt(a,o),e.ref=t.ref,e.return=t,t.child=e}function pd(e,t,r,o,i){if(e!==null){var a=e.memoizedProps;if(rn(a,o)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=o=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return da(e,t,r,o,i)}function gd(e,t,r){var o=t.pendingProps,i=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Lr,ot),ot|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(Lr,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:r,we(Lr,ot),ot|=o}else a!==null?(o=a.baseLanes|r,t.memoizedState=null):o=r,we(Lr,ot),ot|=o;return Ve(e,t,i,r),t.child}function hd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function da(e,t,r,o,i){var a=Qe(r)?Zt:Ue.current;return a=jr(t,a),Rr(t,i),r=Zi(e,t,r,o,a,i),o=ea(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(Ce&&o&&Bi(t),t.flags|=1,Ve(e,t,r,i),t.child)}function yd(e,t,r,o,i){if(Qe(r)){var a=!0;ro(t)}else a=!1;if(Rr(t,i),t.stateNode===null)wo(e,t),id(t,r,o),aa(t,r,o,i),o=!0;else if(e===null){var d=t.stateNode,m=t.memoizedProps;d.props=m;var p=d.context,k=r.contextType;typeof k=="object"&&k!==null?k=lt(k):(k=Qe(r)?Zt:Ue.current,k=jr(t,k));var L=r.getDerivedStateFromProps,B=typeof L=="function"||typeof d.getSnapshotBeforeUpdate=="function";B||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==o||p!==k)&&ad(t,d,o,k),Dt=!1;var T=t.memoizedState;d.state=T,mo(t,o,d,i),p=t.memoizedState,m!==o||T!==p||Je.current||Dt?(typeof L=="function"&&(ia(t,r,L,o),p=t.memoizedState),(m=Dt||od(t,r,m,o,T,p,k))?(B||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=p),d.props=o,d.state=p,d.context=k,o=m):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,As(e,t),m=t.memoizedProps,k=t.type===t.elementType?m:pt(t.type,m),d.props=k,B=t.pendingProps,T=d.context,p=r.contextType,typeof p=="object"&&p!==null?p=lt(p):(p=Qe(r)?Zt:Ue.current,p=jr(t,p));var V=r.getDerivedStateFromProps;(L=typeof V=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==B||T!==p)&&ad(t,d,o,p),Dt=!1,T=t.memoizedState,d.state=T,mo(t,o,d,i);var K=t.memoizedState;m!==B||T!==K||Je.current||Dt?(typeof V=="function"&&(ia(t,r,V,o),K=t.memoizedState),(k=Dt||od(t,r,k,o,T,K,p)||!1)?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,K,p),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,K,p)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=K),d.props=o,d.state=K,d.context=p,o=k):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),o=!1)}return ca(e,t,r,o,a,i)}function ca(e,t,r,o,i,a){hd(e,t);var d=(t.flags&128)!==0;if(!o&&!d)return i&&ks(t,r,!1),Pt(e,t,a);o=t.stateNode,nm.current=t;var m=d&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&d?(t.child=Ir(t,e.child,null,a),t.child=Ir(t,null,m,a)):Ve(e,t,m,a),t.memoizedState=o.state,i&&ks(t,r,!0),t.child}function vd(e){var t=e.stateNode;t.pendingContext?bs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bs(e,t.context,!1),Gi(e,t.containerInfo)}function xd(e,t,r,o,i){return Nr(),Fi(i),t.flags|=256,Ve(e,t,r,o),t.child}var ua={dehydrated:null,treeContext:null,retryLane:0};function ma(e){return{baseLanes:e,cachePool:null,transitions:null}}function bd(e,t,r){var o=t.pendingProps,i=Ee.current,a=!1,d=(t.flags&128)!==0,m;if((m=d)||(m=e!==null&&e.memoizedState===null?!1:(i&2)!==0),m?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(Ee,i&1),e===null)return $i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=o.children,e=o.fallback,a?(o=t.mode,a=t.child,d={mode:"hidden",children:d},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=Ao(d,o,0,null),e=dr(e,o,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ma(r),t.memoizedState=ua,e):fa(t,d));if(i=e.memoizedState,i!==null&&(m=i.dehydrated,m!==null))return om(e,t,d,o,m,i,r);if(a){a=o.fallback,d=t.mode,i=e.child,m=i.sibling;var p={mode:"hidden",children:o.children};return(d&1)===0&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=p,t.deletions=null):(o=Jt(i,p),o.subtreeFlags=i.subtreeFlags&14680064),m!==null?a=Jt(m,a):(a=dr(a,d,r,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,d=e.child.memoizedState,d=d===null?ma(r):{baseLanes:d.baseLanes|r,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~r,t.memoizedState=ua,o}return a=e.child,e=a.sibling,o=Jt(a,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function fa(e,t){return t=Ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bo(e,t,r,o){return o!==null&&Fi(o),Ir(t,e.child,null,r),e=fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function om(e,t,r,o,i,a,d){if(r)return t.flags&256?(t.flags&=-257,o=la(Error(s(422))),bo(e,t,d,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,i=t.mode,o=Ao({mode:"visible",children:o.children},i,0,null),a=dr(a,i,d,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,(t.mode&1)!==0&&Ir(t,e.child,null,d),t.child.memoizedState=ma(d),t.memoizedState=ua,a);if((t.mode&1)===0)return bo(e,t,d,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var m=o.dgst;return o=m,a=Error(s(419)),o=la(a,o,void 0),bo(e,t,d,o)}if(m=(d&e.childLanes)!==0,Ke||m){if(o=_e,o!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|d))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Nt(e,i),yt(o,e,i,-1))}return Pa(),o=la(Error(s(421))),bo(e,t,d,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ym.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,nt=zt(i.nextSibling),rt=t,Ce=!0,ft=null,e!==null&&(it[at++]=Ct,it[at++]=Et,it[at++]=er,Ct=e.id,Et=e.overflow,er=t),t=fa(t,o.children),t.flags|=4096,t)}function wd(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Wi(e.return,t,r)}function pa(e,t,r,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=r,a.tailMode=i)}function kd(e,t,r){var o=t.pendingProps,i=o.revealOrder,a=o.tail;if(Ve(e,t,o.children,r),o=Ee.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wd(e,r,t);else if(e.tag===19)wd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(we(Ee,o),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&fo(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),pa(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}pa(t,!0,r,null,a);break;case"together":pa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,r=Jt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Jt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function im(e,t,r){switch(t.tag){case 3:vd(t),Nr();break;case 5:Bs(t);break;case 1:Qe(t.type)&&ro(t);break;case 4:Gi(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;we(so,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(we(Ee,Ee.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?bd(e,t,r):(we(Ee,Ee.current&1),e=Pt(e,t,r),e!==null?e.sibling:null);we(Ee,Ee.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return kd(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ee,Ee.current),o)break;return null;case 22:case 23:return t.lanes=0,gd(e,t,r)}return Pt(e,t,r)}var Sd,ga,jd,Cd;Sd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ga=function(){},jd=function(e,t,r,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,nr(bt.current);var a=null;switch(r){case"input":i=Wo(e,i),o=Wo(e,o),a=[];break;case"select":i=q({},i,{value:void 0}),o=q({},o,{value:void 0}),a=[];break;case"textarea":i=Go(e,i),o=Go(e,o),a=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Zn)}Qo(r,o);var d;r=null;for(k in i)if(!o.hasOwnProperty(k)&&i.hasOwnProperty(k)&&i[k]!=null)if(k==="style"){var m=i[k];for(d in m)m.hasOwnProperty(d)&&(r||(r={}),r[d]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(f.hasOwnProperty(k)?a||(a=[]):(a=a||[]).push(k,null));for(k in o){var p=o[k];if(m=i?.[k],o.hasOwnProperty(k)&&p!==m&&(p!=null||m!=null))if(k==="style")if(m){for(d in m)!m.hasOwnProperty(d)||p&&p.hasOwnProperty(d)||(r||(r={}),r[d]="");for(d in p)p.hasOwnProperty(d)&&m[d]!==p[d]&&(r||(r={}),r[d]=p[d])}else r||(a||(a=[]),a.push(k,r)),r=p;else k==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,m=m?m.__html:void 0,p!=null&&m!==p&&(a=a||[]).push(k,p)):k==="children"?typeof p!="string"&&typeof p!="number"||(a=a||[]).push(k,""+p):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(f.hasOwnProperty(k)?(p!=null&&k==="onScroll"&&ke("scroll",e),a||m===p||(a=[])):(a=a||[]).push(k,p))}r&&(a=a||[]).push("style",r);var k=a;(t.updateQueue=k)&&(t.flags|=4)}},Cd=function(e,t,r,o){r!==o&&(t.flags|=4)};function vn(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function am(e,t,r){var o=t.pendingProps;switch(zi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return Qe(t.type)&&to(),We(t),null;case 3:return o=t.stateNode,Tr(),Se(Je),Se(Ue),Ki(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ft!==null&&(Ea(ft),ft=null))),ga(e,t),We(t),null;case 5:Ji(t);var i=nr(fn.current);if(r=t.type,e!==null&&t.stateNode!=null)jd(e,t,r,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(s(166));return We(t),null}if(e=nr(bt.current),ao(t)){o=t.stateNode,r=t.type;var a=t.memoizedProps;switch(o[xt]=t,o[sn]=a,e=(t.mode&1)!==0,r){case"dialog":ke("cancel",o),ke("close",o);break;case"iframe":case"object":case"embed":ke("load",o);break;case"video":case"audio":for(i=0;i<on.length;i++)ke(on[i],o);break;case"source":ke("error",o);break;case"img":case"image":case"link":ke("error",o),ke("load",o);break;case"details":ke("toggle",o);break;case"input":il(o,a),ke("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},ke("invalid",o);break;case"textarea":sl(o,a),ke("invalid",o)}Qo(r,a),i=null;for(var d in a)if(a.hasOwnProperty(d)){var m=a[d];d==="children"?typeof m=="string"?o.textContent!==m&&(a.suppressHydrationWarning!==!0&&Xn(o.textContent,m,e),i=["children",m]):typeof m=="number"&&o.textContent!==""+m&&(a.suppressHydrationWarning!==!0&&Xn(o.textContent,m,e),i=["children",""+m]):f.hasOwnProperty(d)&&m!=null&&d==="onScroll"&&ke("scroll",o)}switch(r){case"input":Pn(o),ll(o,a,!0);break;case"textarea":Pn(o),cl(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Zn)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ul(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(r,{is:o.is}):(e=d.createElement(r),r==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,r),e[xt]=t,e[sn]=o,Sd(e,t,!1,!1),t.stateNode=e;e:{switch(d=Ko(r,o),r){case"dialog":ke("cancel",e),ke("close",e),i=o;break;case"iframe":case"object":case"embed":ke("load",e),i=o;break;case"video":case"audio":for(i=0;i<on.length;i++)ke(on[i],e);i=o;break;case"source":ke("error",e),i=o;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=o;break;case"details":ke("toggle",e),i=o;break;case"input":il(e,o),i=Wo(e,o),ke("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=q({},o,{value:void 0}),ke("invalid",e);break;case"textarea":sl(e,o),i=Go(e,o),ke("invalid",e);break;default:i=o}Qo(r,i),m=i;for(a in m)if(m.hasOwnProperty(a)){var p=m[a];a==="style"?pl(e,p):a==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&ml(e,p)):a==="children"?typeof p=="string"?(r!=="textarea"||p!=="")&&$r(e,p):typeof p=="number"&&$r(e,""+p):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(f.hasOwnProperty(a)?p!=null&&a==="onScroll"&&ke("scroll",e):p!=null&&Q(e,a,p,d))}switch(r){case"input":Pn(e),ll(e,o,!1);break;case"textarea":Pn(e),cl(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ye(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?mr(e,!!o.multiple,a,!1):o.defaultValue!=null&&mr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zn)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)Cd(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(s(166));if(r=nr(fn.current),nr(bt.current),ao(t)){if(o=t.stateNode,r=t.memoizedProps,o[xt]=t,(a=o.nodeValue!==r)&&(e=rt,e!==null))switch(e.tag){case 3:Xn(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xn(o.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[xt]=t,t.stateNode=o}return We(t),null;case 13:if(Se(Ee),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&nt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Is(),Nr(),t.flags|=98560,a=!1;else if(a=ao(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(s(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[xt]=t}else Nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),a=!1}else ft!==null&&(Ea(ft),ft=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Be===0&&(Be=3):Pa())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Tr(),ga(e,t),e===null&&an(t.stateNode.containerInfo),We(t),null;case 10:return Hi(t.type._context),We(t),null;case 17:return Qe(t.type)&&to(),We(t),null;case 19:if(Se(Ee),a=t.memoizedState,a===null)return We(t),null;if(o=(t.flags&128)!==0,d=a.rendering,d===null)if(o)vn(a,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=fo(e),d!==null){for(t.flags|=128,vn(a,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)a=r,e=o,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return we(Ee,Ee.current&1|2),t.child}e=e.sibling}a.tail!==null&&Re()>Or&&(t.flags|=128,o=!0,vn(a,!1),t.lanes=4194304)}else{if(!o)if(e=fo(d),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),vn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Ce)return We(t),null}else 2*Re()-a.renderingStartTime>Or&&r!==1073741824&&(t.flags|=128,o=!0,vn(a,!1),t.lanes=4194304);a.isBackwards?(d.sibling=t.child,t.child=d):(r=a.last,r!==null?r.sibling=d:t.child=d,a.last=d)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Re(),t.sibling=null,r=Ee.current,we(Ee,o?r&1|2:r&1),t):(We(t),null);case 22:case 23:return Ia(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(ot&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function lm(e,t){switch(zi(t),t.tag){case 1:return Qe(t.type)&&to(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),Se(Je),Se(Ue),Ki(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ji(t),null;case 13:if(Se(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Ee),null;case 4:return Tr(),null;case 10:return Hi(t.type._context),null;case 22:case 23:return Ia(),null;case 24:return null;default:return null}}var ko=!1,qe=!1,sm=typeof WeakSet=="function"?WeakSet:Set,G=null;function Ar(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Pe(e,t,o)}else r.current=null}function ha(e,t,r){try{r()}catch(o){Pe(e,t,o)}}var Ed=!1;function dm(e,t){if(Ii=Dn,e=os(),bi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var i=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var d=0,m=-1,p=-1,k=0,L=0,B=e,T=null;t:for(;;){for(var V;B!==r||i!==0&&B.nodeType!==3||(m=d+i),B!==a||o!==0&&B.nodeType!==3||(p=d+o),B.nodeType===3&&(d+=B.nodeValue.length),(V=B.firstChild)!==null;)T=B,B=V;for(;;){if(B===e)break t;if(T===r&&++k===i&&(m=d),T===a&&++L===o&&(p=d),(V=B.nextSibling)!==null)break;B=T,T=B.parentNode}B=V}r=m===-1||p===-1?null:{start:m,end:p}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pi={focusedElem:e,selectionRange:r},Dn=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var K=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var Y=K.memoizedProps,Te=K.memoizedState,x=t.stateNode,g=x.getSnapshotBeforeUpdate(t.elementType===t.type?Y:pt(t.type,Y),Te);x.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch($){Pe(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return K=Ed,Ed=!1,K}function xn(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&ha(t,r,a)}i=i.next}while(i!==o)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function ya(e){var t=e.ref;if(t!==null){var r=e.stateNode;e.tag,e=r,typeof t=="function"?t(e):t.current=e}}function Nd(e){var t=e.alternate;t!==null&&(e.alternate=null,Nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[sn],delete t[Ai],delete t[qu],delete t[Vu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Id(e){return e.tag===5||e.tag===3||e.tag===4}function Pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function va(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Zn));else if(o!==4&&(e=e.child,e!==null))for(va(e,t,r),e=e.sibling;e!==null;)va(e,t,r),e=e.sibling}function xa(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(xa(e,t,r),e=e.sibling;e!==null;)xa(e,t,r),e=e.sibling}var Fe=null,gt=!1;function Ht(e,t,r){for(r=r.child;r!==null;)Rd(e,t,r),r=r.sibling}function Rd(e,t,r){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(On,r)}catch{}switch(r.tag){case 5:qe||Ar(r,t);case 6:var o=Fe,i=gt;Fe=null,Ht(e,t,r),Fe=o,gt=i,Fe!==null&&(gt?(e=Fe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Fe.removeChild(r.stateNode));break;case 18:Fe!==null&&(gt?(e=Fe,r=r.stateNode,e.nodeType===8?Mi(e.parentNode,r):e.nodeType===1&&Mi(e,r),Kr(e)):Mi(Fe,r.stateNode));break;case 4:o=Fe,i=gt,Fe=r.stateNode.containerInfo,gt=!0,Ht(e,t,r),Fe=o,gt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var a=i,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&ha(r,t,d),i=i.next}while(i!==o)}Ht(e,t,r);break;case 1:if(!qe&&(Ar(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(m){Pe(r,t,m)}Ht(e,t,r);break;case 21:Ht(e,t,r);break;case 22:r.mode&1?(qe=(o=qe)||r.memoizedState!==null,Ht(e,t,r),qe=o):Ht(e,t,r);break;default:Ht(e,t,r)}}function Td(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new sm),t.forEach(function(o){var i=vm.bind(null,e,o);r.has(o)||(r.add(o),o.then(i,i))})}}function ht(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var i=r[o];try{var a=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 5:Fe=m.stateNode,gt=!1;break e;case 3:Fe=m.stateNode.containerInfo,gt=!0;break e;case 4:Fe=m.stateNode.containerInfo,gt=!0;break e}m=m.return}if(Fe===null)throw Error(s(160));Rd(a,d,i),Fe=null,gt=!1;var p=i.alternate;p!==null&&(p.return=null),i.return=null}catch(k){Pe(i,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Md(t,e),t=t.sibling}function Md(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),kt(e),o&4){try{xn(3,e,e.return),So(3,e)}catch(Y){Pe(e,e.return,Y)}try{xn(5,e,e.return)}catch(Y){Pe(e,e.return,Y)}}break;case 1:ht(t,e),kt(e),o&512&&r!==null&&Ar(r,r.return);break;case 5:if(ht(t,e),kt(e),o&512&&r!==null&&Ar(r,r.return),e.flags&32){var i=e.stateNode;try{$r(i,"")}catch(Y){Pe(e,e.return,Y)}}if(o&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,d=r!==null?r.memoizedProps:a,m=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{m==="input"&&a.type==="radio"&&a.name!=null&&al(i,a),Ko(m,d);var k=Ko(m,a);for(d=0;d<p.length;d+=2){var L=p[d],B=p[d+1];L==="style"?pl(i,B):L==="dangerouslySetInnerHTML"?ml(i,B):L==="children"?$r(i,B):Q(i,L,B,k)}switch(m){case"input":qo(i,a);break;case"textarea":dl(i,a);break;case"select":var T=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var V=a.value;V!=null?mr(i,!!a.multiple,V,!1):T!==!!a.multiple&&(a.defaultValue!=null?mr(i,!!a.multiple,a.defaultValue,!0):mr(i,!!a.multiple,a.multiple?[]:"",!1))}i[sn]=a}catch(Y){Pe(e,e.return,Y)}}break;case 6:if(ht(t,e),kt(e),o&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(Y){Pe(e,e.return,Y)}}break;case 3:if(ht(t,e),kt(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Kr(t.containerInfo)}catch(Y){Pe(e,e.return,Y)}break;case 4:ht(t,e),kt(e);break;case 13:ht(t,e),kt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ka=Re())),o&4&&Td(e);break;case 22:if(L=r!==null&&r.memoizedState!==null,e.mode&1?(qe=(k=qe)||L,ht(t,e),qe=k):ht(t,e),kt(e),o&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!L&&(e.mode&1)!==0)for(G=e,L=e.child;L!==null;){for(B=G=L;G!==null;){switch(T=G,V=T.child,T.tag){case 0:case 11:case 14:case 15:xn(4,T,T.return);break;case 1:Ar(T,T.return);var K=T.stateNode;if(typeof K.componentWillUnmount=="function"){o=T,r=T.return;try{t=o,K.props=t.memoizedProps,K.state=t.memoizedState,K.componentWillUnmount()}catch(Y){Pe(o,r,Y)}}break;case 5:Ar(T,T.return);break;case 22:if(T.memoizedState!==null){Od(B);continue}}V!==null?(V.return=T,G=V):Od(B)}L=L.sibling}e:for(L=null,B=e;;){if(B.tag===5){if(L===null){L=B;try{i=B.stateNode,k?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(m=B.stateNode,p=B.memoizedProps.style,d=p!=null&&p.hasOwnProperty("display")?p.display:null,m.style.display=fl("display",d))}catch(Y){Pe(e,e.return,Y)}}}else if(B.tag===6){if(L===null)try{B.stateNode.nodeValue=k?"":B.memoizedProps}catch(Y){Pe(e,e.return,Y)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;L===B&&(L=null),B=B.return}L===B&&(L=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:ht(t,e),kt(e),o&4&&Td(e);break;case 21:break;default:ht(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Id(r)){var o=r;break e}r=r.return}throw Error(s(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&($r(i,""),o.flags&=-33);var a=Pd(e);xa(e,a,i);break;case 3:case 4:var d=o.stateNode.containerInfo,m=Pd(e);va(e,m,d);break;default:throw Error(s(161))}}catch(p){Pe(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cm(e,t,r){G=e,Ad(e)}function Ad(e,t,r){for(var o=(e.mode&1)!==0;G!==null;){var i=G,a=i.child;if(i.tag===22&&o){var d=i.memoizedState!==null||ko;if(!d){var m=i.alternate,p=m!==null&&m.memoizedState!==null||qe;m=ko;var k=qe;if(ko=d,(qe=p)&&!k)for(G=i;G!==null;)d=G,p=d.child,d.tag===22&&d.memoizedState!==null?Bd(i):p!==null?(p.return=d,G=p):Bd(i);for(;a!==null;)G=a,Ad(a),a=a.sibling;G=i,ko=m,qe=k}Ld(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,G=a):Ld(e)}}function Ld(e){for(;G!==null;){var t=G;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:qe||So(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!qe)if(r===null)o.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:pt(t.type,r.memoizedProps);o.componentDidUpdate(i,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Os(t,a,o);break;case 3:var d=t.updateQueue;if(d!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Os(t,d,r)}break;case 5:var m=t.stateNode;if(r===null&&t.flags&4){r=m;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&r.focus();break;case"img":p.src&&(r.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var L=k.memoizedState;if(L!==null){var B=L.dehydrated;B!==null&&Kr(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}qe||t.flags&512&&ya(t)}catch(T){Pe(t,t.return,T)}}if(t===e){G=null;break}if(r=t.sibling,r!==null){r.return=t.return,G=r;break}G=t.return}}function Od(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var r=t.sibling;if(r!==null){r.return=t.return,G=r;break}G=t.return}}function Bd(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{So(4,t)}catch(p){Pe(t,r,p)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(p){Pe(t,i,p)}}var a=t.return;try{ya(t)}catch(p){Pe(t,a,p)}break;case 5:var d=t.return;try{ya(t)}catch(p){Pe(t,d,p)}}}catch(p){Pe(t,t.return,p)}if(t===e){G=null;break}var m=t.sibling;if(m!==null){m.return=t.return,G=m;break}G=t.return}}var um=Math.ceil,jo=oe.ReactCurrentDispatcher,ba=oe.ReactCurrentOwner,dt=oe.ReactCurrentBatchConfig,me=0,_e=null,Me=null,De=0,ot=0,Lr=_t(0),Be=0,bn=null,ir=0,Co=0,wa=0,wn=null,Ye=null,ka=0,Or=1/0,Rt=null,Eo=!1,Sa=null,Wt=null,No=!1,qt=null,Io=0,kn=0,ja=null,Po=-1,Ro=0;function Ge(){return(me&6)!==0?Re():Po!==-1?Po:Po=Re()}function Vt(e){return(e.mode&1)===0?1:(me&2)!==0&&De!==0?De&-De:Ju.transition!==null?(Ro===0&&(Ro=Pl()),Ro):(e=ve,e!==0||(e=window.event,e=e===void 0?16:_l(e.type)),e)}function yt(e,t,r,o){if(50<kn)throw kn=0,ja=null,Error(s(185));qr(e,r,o),((me&2)===0||e!==_e)&&(e===_e&&((me&2)===0&&(Co|=r),Be===4&&Gt(e,De)),Xe(e,o),r===1&&me===0&&(t.mode&1)===0&&(Or=Re()+500,no&&Ft()))}function Xe(e,t){var r=e.callbackNode;Jc(e,t);var o=_n(e,e===_e?De:0);if(o===0)r!==null&&El(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&El(r),t===1)e.tag===0?Gu(_d.bind(null,e)):Ss(_d.bind(null,e)),Hu(function(){(me&6)===0&&Ft()}),r=null;else{switch(Rl(o)){case 1:r=ni;break;case 4:r=Nl;break;case 16:r=Ln;break;case 536870912:r=Il;break;default:r=Ln}r=Vd(r,zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function zd(e,t){if(Po=-1,Ro=0,(me&6)!==0)throw Error(s(327));var r=e.callbackNode;if(Br()&&e.callbackNode!==r)return null;var o=_n(e,e===_e?De:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=To(e,o);else{t=o;var i=me;me|=2;var a=Fd();(_e!==e||De!==t)&&(Rt=null,Or=Re()+500,lr(e,t));do try{pm();break}catch(m){$d(e,m)}while(!0);Ui(),jo.current=a,me=i,Me!==null?t=0:(_e=null,De=0,t=Be)}if(t!==0){if(t===2&&(i=oi(e),i!==0&&(o=i,t=Ca(e,i))),t===1)throw r=bn,lr(e,0),Gt(e,o),Xe(e,Re()),r;if(t===6)Gt(e,o);else{if(i=e.current.alternate,(o&30)===0&&!mm(i)&&(t=To(e,o),t===2&&(a=oi(e),a!==0&&(o=a,t=Ca(e,a))),t===1))throw r=bn,lr(e,0),Gt(e,o),Xe(e,Re()),r;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(s(345));case 2:sr(e,Ye,Rt);break;case 3:if(Gt(e,o),(o&130023424)===o&&(t=ka+500-Re(),10<t)){if(_n(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ti(sr.bind(null,e,Ye,Rt),t);break}sr(e,Ye,Rt);break;case 4:if(Gt(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var d=31-ut(o);a=1<<d,d=t[d],d>i&&(i=d),o&=~a}if(o=i,o=Re()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*um(o/1960))-o,10<o){e.timeoutHandle=Ti(sr.bind(null,e,Ye,Rt),o);break}sr(e,Ye,Rt);break;case 5:sr(e,Ye,Rt);break;default:throw Error(s(329))}}}return Xe(e,Re()),e.callbackNode===r?zd.bind(null,e):null}function Ca(e,t){var r=wn;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=To(e,t),e!==2&&(t=Ye,Ye=r,t!==null&&Ea(t)),e}function Ea(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function mm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var i=r[o],a=i.getSnapshot;i=i.value;try{if(!mt(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~wa,t&=~Co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ut(t),o=1<<r;e[r]=-1,t&=~o}}function _d(e){if((me&6)!==0)throw Error(s(327));Br();var t=_n(e,0);if((t&1)===0)return Xe(e,Re()),null;var r=To(e,t);if(e.tag!==0&&r===2){var o=oi(e);o!==0&&(t=o,r=Ca(e,o))}if(r===1)throw r=bn,lr(e,0),Gt(e,t),Xe(e,Re()),r;if(r===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sr(e,Ye,Rt),Xe(e,Re()),null}function Na(e,t){var r=me;me|=1;try{return e(t)}finally{me=r,me===0&&(Or=Re()+500,no&&Ft())}}function ar(e){qt!==null&&qt.tag===0&&(me&6)===0&&Br();var t=me;me|=1;var r=dt.transition,o=ve;try{if(dt.transition=null,ve=1,e)return e()}finally{ve=o,dt.transition=r,me=t,(me&6)===0&&Ft()}}function Ia(){ot=Lr.current,Se(Lr)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Uu(r)),Me!==null)for(r=Me.return;r!==null;){var o=r;switch(zi(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&to();break;case 3:Tr(),Se(Je),Se(Ue),Ki();break;case 5:Ji(o);break;case 4:Tr();break;case 13:Se(Ee);break;case 19:Se(Ee);break;case 10:Hi(o.type._context);break;case 22:case 23:Ia()}r=r.return}if(_e=e,Me=e=Jt(e.current,null),De=ot=t,Be=0,bn=null,wa=Co=ir=0,Ye=wn=null,rr!==null){for(t=0;t<rr.length;t++)if(r=rr[t],o=r.interleaved,o!==null){r.interleaved=null;var i=o.next,a=r.pending;if(a!==null){var d=a.next;a.next=i,o.next=d}r.pending=o}rr=null}return e}function $d(e,t){do{var r=Me;try{if(Ui(),po.current=vo,go){for(var o=Ne.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}go=!1}if(or=0,ze=Oe=Ne=null,pn=!1,gn=0,ba.current=null,r===null||r.return===null){Be=1,bn=t,Me=null;break}e:{var a=e,d=r.return,m=r,p=t;if(t=De,m.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var k=p,L=m,B=L.tag;if((L.mode&1)===0&&(B===0||B===11||B===15)){var T=L.alternate;T?(L.updateQueue=T.updateQueue,L.memoizedState=T.memoizedState,L.lanes=T.lanes):(L.updateQueue=null,L.memoizedState=null)}var V=cd(d);if(V!==null){V.flags&=-257,ud(V,d,m,a,t),V.mode&1&&dd(a,k,t),t=V,p=k;var K=t.updateQueue;if(K===null){var Y=new Set;Y.add(p),t.updateQueue=Y}else K.add(p);break e}else{if((t&1)===0){dd(a,k,t),Pa();break e}p=Error(s(426))}}else if(Ce&&m.mode&1){var Te=cd(d);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),ud(Te,d,m,a,t),Fi(Mr(p,m));break e}}a=p=Mr(p,m),Be!==4&&(Be=2),wn===null?wn=[a]:wn.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var x=ld(a,p,t);Ls(a,x);break e;case 1:m=p;var g=a.type,b=a.stateNode;if((a.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Wt===null||!Wt.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t;var $=sd(a,m,t);Ls(a,$);break e}}a=a.return}while(a!==null)}Ud(r)}catch(X){t=X,Me===r&&r!==null&&(Me=r=r.return);continue}break}while(!0)}function Fd(){var e=jo.current;return jo.current=vo,e===null?vo:e}function Pa(){(Be===0||Be===3||Be===2)&&(Be=4),_e===null||(ir&268435455)===0&&(Co&268435455)===0||Gt(_e,De)}function To(e,t){var r=me;me|=2;var o=Fd();(_e!==e||De!==t)&&(Rt=null,lr(e,t));do try{fm();break}catch(i){$d(e,i)}while(!0);if(Ui(),me=r,jo.current=o,Me!==null)throw Error(s(261));return _e=null,De=0,Be}function fm(){for(;Me!==null;)Dd(Me)}function pm(){for(;Me!==null&&!$c();)Dd(Me)}function Dd(e){var t=qd(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?Ud(e):Me=t,ba.current=null}function Ud(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=am(r,t,ot),r!==null){Me=r;return}}else{if(r=lm(r,t),r!==null){r.flags&=32767,Me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Me=null;return}}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);Be===0&&(Be=5)}function sr(e,t,r){var o=ve,i=dt.transition;try{dt.transition=null,ve=1,gm(e,t,r,o)}finally{dt.transition=i,ve=o}return null}function gm(e,t,r,o){do Br();while(qt!==null);if((me&6)!==0)throw Error(s(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Qc(e,a),e===_e&&(Me=_e=null,De=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||No||(No=!0,Vd(Ln,function(){return Br(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=dt.transition,dt.transition=null;var d=ve;ve=1;var m=me;me|=4,ba.current=null,dm(e,r),Md(r,e),Ou(Pi),Dn=!!Ii,Pi=Ii=null,e.current=r,cm(r),Fc(),me=m,ve=d,dt.transition=a}else e.current=r;if(No&&(No=!1,qt=e,Io=i),a=e.pendingLanes,a===0&&(Wt=null),Hc(r.stateNode),Xe(e,Re()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],o(i.value,{componentStack:i.stack,digest:i.digest});if(Eo)throw Eo=!1,e=Sa,Sa=null,e;return(Io&1)!==0&&e.tag!==0&&Br(),a=e.pendingLanes,(a&1)!==0?e===ja?kn++:(kn=0,ja=e):kn=0,Ft(),null}function Br(){if(qt!==null){var e=Rl(Io),t=dt.transition,r=ve;try{if(dt.transition=null,ve=16>e?16:e,qt===null)var o=!1;else{if(e=qt,qt=null,Io=0,(me&6)!==0)throw Error(s(331));var i=me;for(me|=4,G=e.current;G!==null;){var a=G,d=a.child;if((G.flags&16)!==0){var m=a.deletions;if(m!==null){for(var p=0;p<m.length;p++){var k=m[p];for(G=k;G!==null;){var L=G;switch(L.tag){case 0:case 11:case 15:xn(8,L,a)}var B=L.child;if(B!==null)B.return=L,G=B;else for(;G!==null;){L=G;var T=L.sibling,V=L.return;if(Nd(L),L===k){G=null;break}if(T!==null){T.return=V,G=T;break}G=V}}}var K=a.alternate;if(K!==null){var Y=K.child;if(Y!==null){K.child=null;do{var Te=Y.sibling;Y.sibling=null,Y=Te}while(Y!==null)}}G=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,G=d;else e:for(;G!==null;){if(a=G,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:xn(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,G=x;break e}G=a.return}}var g=e.current;for(G=g;G!==null;){d=G;var b=d.child;if((d.subtreeFlags&2064)!==0&&b!==null)b.return=d,G=b;else e:for(d=g;G!==null;){if(m=G,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:So(9,m)}}catch(X){Pe(m,m.return,X)}if(m===d){G=null;break e}var $=m.sibling;if($!==null){$.return=m.return,G=$;break e}G=m.return}}if(me=i,Ft(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(On,e)}catch{}o=!0}return o}finally{ve=r,dt.transition=t}}return!1}function Hd(e,t,r){t=Mr(r,t),t=ld(e,t,1),e=Ut(e,t,1),t=Ge(),e!==null&&(qr(e,1,t),Xe(e,t))}function Pe(e,t,r){if(e.tag===3)Hd(e,e,r);else for(;t!==null;){if(t.tag===3){Hd(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wt===null||!Wt.has(o))){e=Mr(r,e),e=sd(t,e,1),t=Ut(t,e,1),e=Ge(),t!==null&&(qr(t,1,e),Xe(t,e));break}}t=t.return}}function hm(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&r,_e===e&&(De&r)===r&&(Be===4||Be===3&&(De&130023424)===De&&500>Re()-ka?lr(e,0):wa|=r),Xe(e,t)}function Wd(e,t){t===0&&((e.mode&1)===0?t=1:(t=zn,zn<<=1,(zn&130023424)===0&&(zn=4194304)));var r=Ge();e=Nt(e,t),e!==null&&(qr(e,t,r),Xe(e,r))}function ym(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Wd(e,r)}function vm(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(s(314))}o!==null&&o.delete(t),Wd(e,r)}var qd;qd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Ke=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Ke=!1,im(e,t,r);Ke=(e.flags&131072)!==0}else Ke=!1,Ce&&(t.flags&1048576)!==0&&js(t,io,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;wo(e,t),e=t.pendingProps;var i=jr(t,Ue.current);Rr(t,r),i=Zi(null,t,o,e,i,r);var a=ea();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(o)?(a=!0,ro(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vi(t),i.updater=xo,t.stateNode=i,i._reactInternals=t,aa(t,o,e,r),t=ca(null,t,o,!0,a,r)):(t.tag=0,Ce&&a&&Bi(t),Ve(null,t,i,r),t=t.child),t;case 16:o=t.elementType;e:{switch(wo(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=bm(o),e=pt(o,e),i){case 0:t=da(null,t,o,e,r);break e;case 1:t=yd(null,t,o,e,r);break e;case 11:t=md(null,t,o,e,r);break e;case 14:t=fd(null,t,o,pt(o.type,e),r);break e}throw Error(s(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:pt(o,i),da(e,t,o,i,r);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:pt(o,i),yd(e,t,o,i,r);case 3:e:{if(vd(t),e===null)throw Error(s(387));o=t.pendingProps,a=t.memoizedState,i=a.element,As(e,t),mo(t,o,null,r);var d=t.memoizedState;if(o=d.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Mr(Error(s(423)),t),t=xd(e,t,o,r,i);break e}else if(o!==i){i=Mr(Error(s(424)),t),t=xd(e,t,o,r,i);break e}else for(nt=zt(t.stateNode.containerInfo.firstChild),rt=t,Ce=!0,ft=null,r=Ts(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Nr(),o===i){t=Pt(e,t,r);break e}Ve(e,t,o,r)}t=t.child}return t;case 5:return Bs(t),e===null&&$i(t),o=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,d=i.children,Ri(o,i)?d=null:a!==null&&Ri(o,a)&&(t.flags|=32),hd(e,t),Ve(e,t,d,r),t.child;case 6:return e===null&&$i(t),null;case 13:return bd(e,t,r);case 4:return Gi(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ir(t,null,o,r):Ve(e,t,o,r),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:pt(o,i),md(e,t,o,i,r);case 7:return Ve(e,t,t.pendingProps,r),t.child;case 8:return Ve(e,t,t.pendingProps.children,r),t.child;case 12:return Ve(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,a=t.memoizedProps,d=i.value,we(so,o._currentValue),o._currentValue=d,a!==null)if(mt(a.value,d)){if(a.children===i.children&&!Je.current){t=Pt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var m=a.dependencies;if(m!==null){d=a.child;for(var p=m.firstContext;p!==null;){if(p.context===o){if(a.tag===1){p=It(-1,r&-r),p.tag=2;var k=a.updateQueue;if(k!==null){k=k.shared;var L=k.pending;L===null?p.next=p:(p.next=L.next,L.next=p),k.pending=p}}a.lanes|=r,p=a.alternate,p!==null&&(p.lanes|=r),Wi(a.return,r,t),m.lanes|=r;break}p=p.next}}else if(a.tag===10)d=a.type===t.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(s(341));d.lanes|=r,m=d.alternate,m!==null&&(m.lanes|=r),Wi(d,r,t),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===t){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}Ve(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,Rr(t,r),i=lt(i),o=o(i),t.flags|=1,Ve(e,t,o,r),t.child;case 14:return o=t.type,i=pt(o,t.pendingProps),i=pt(o.type,i),fd(e,t,o,i,r);case 15:return pd(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:pt(o,i),wo(e,t),t.tag=1,Qe(o)?(e=!0,ro(t)):e=!1,Rr(t,r),id(t,o,i),aa(t,o,i,r),ca(null,t,o,!0,e,r);case 19:return kd(e,t,r);case 22:return gd(e,t,r)}throw Error(s(156,t.tag))};function Vd(e,t){return Cl(e,t)}function xm(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,r,o){return new xm(e,t,r,o)}function Ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bm(e){if(typeof e=="function")return Ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ne)return 11;if(e===z)return 14}return 2}function Jt(e,t){var r=e.alternate;return r===null?(r=ct(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Mo(e,t,r,o,i,a){var d=2;if(o=e,typeof e=="function")Ra(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Z:return dr(r.children,i,a,t);case he:d=8,i|=8;break;case xe:return e=ct(12,r,t,i|2),e.elementType=xe,e.lanes=a,e;case ue:return e=ct(13,r,t,i),e.elementType=ue,e.lanes=a,e;case Ie:return e=ct(19,r,t,i),e.elementType=Ie,e.lanes=a,e;case ie:return Ao(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:d=10;break e;case ee:d=9;break e;case ne:d=11;break e;case z:d=14;break e;case _:d=16,o=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=ct(d,r,t,i),t.elementType=e,t.type=o,t.lanes=a,t}function dr(e,t,r,o){return e=ct(7,e,o,t),e.lanes=r,e}function Ao(e,t,r,o){return e=ct(22,e,o,t),e.elementType=ie,e.lanes=r,e.stateNode={isHidden:!1},e}function Ta(e,t,r){return e=ct(6,e,null,t),e.lanes=r,e}function Ma(e,t,r){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wm(e,t,r,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Aa(e,t,r,o,i,a,d,m,p){return e=new wm(e,t,r,m,p),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ct(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vi(a),e}function km(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function Gd(e){if(!e)return $t;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var r=e.type;if(Qe(r))return ws(e,r,t)}return t}function Jd(e,t,r,o,i,a,d,m,p){return e=Aa(r,o,!0,e,i,a,d,m,p),e.context=Gd(null),r=e.current,o=Ge(),i=Vt(r),a=It(o,i),a.callback=t??null,Ut(r,a,i),e.current.lanes=i,qr(e,i,o),Xe(e,o),e}function Lo(e,t,r,o){var i=t.current,a=Ge(),d=Vt(i);return r=Gd(r),t.context===null?t.context=r:t.pendingContext=r,t=It(a,d),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Ut(i,t,d),e!==null&&(yt(e,i,d,a),uo(e,i,d)),d}function Oo(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Qd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function La(e,t){Qd(e,t),(e=e.alternate)&&Qd(e,t)}function Sm(){return null}var Kd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oa(e){this._internalRoot=e}Bo.prototype.render=Oa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Lo(e,t,null,null)},Bo.prototype.unmount=Oa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){Lo(null,e,null,null)}),t[St]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Al();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Lt.length&&t!==0&&t<Lt[r].priority;r++);Lt.splice(r,0,e),r===0&&Bl(e)}};function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yd(){}function jm(e,t,r,o,i){if(i){if(typeof o=="function"){var a=o;o=function(){var k=Oo(d);a.call(k)}}var d=Jd(t,o,e,0,null,!1,!1,"",Yd);return e._reactRootContainer=d,e[St]=d.current,an(e.nodeType===8?e.parentNode:e),ar(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var m=o;o=function(){var k=Oo(p);m.call(k)}}var p=Aa(e,0,!1,null,null,!1,!1,"",Yd);return e._reactRootContainer=p,e[St]=p.current,an(e.nodeType===8?e.parentNode:e),ar(function(){Lo(t,p,r,o)}),p}function _o(e,t,r,o,i){var a=r._reactRootContainer;if(a){var d=a;if(typeof i=="function"){var m=i;i=function(){var p=Oo(d);m.call(p)}}Lo(t,d,e,i)}else d=jm(r,t,e,i,o);return Oo(d)}Tl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Wr(t.pendingLanes);r!==0&&(ai(t,r|1),Xe(t,Re()),(me&6)===0&&(Or=Re()+500,Ft()))}break;case 13:ar(function(){var o=Nt(e,1);if(o!==null){var i=Ge();yt(o,e,1,i)}}),La(e,1)}},li=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var r=Ge();yt(t,e,134217728,r)}La(e,134217728)}},Ml=function(e){if(e.tag===13){var t=Vt(e),r=Nt(e,t);if(r!==null){var o=Ge();yt(r,e,t,o)}La(e,t)}},Al=function(){return ve},Ll=function(e,t){var r=ve;try{return ve=e,t()}finally{ve=r}},Zo=function(e,t,r){switch(t){case"input":if(qo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var i=eo(o);if(!i)throw Error(s(90));ol(o),qo(o,i)}}}break;case"textarea":dl(e,r);break;case"select":t=r.value,t!=null&&mr(e,!!r.multiple,t,!1)}},vl=Na,xl=ar;var Cm={usingClientEntryPoint:!1,Events:[dn,kr,eo,hl,yl,Na]},Sn={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Em={bundleType:Sn.bundleType,version:Sn.version,rendererPackageName:Sn.rendererPackageName,rendererConfig:Sn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sl(e),e===null?null:e.stateNode},findFiberByHostInstance:Sn.findFiberByHostInstance||Sm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{On=$o.inject(Em),vt=$o}catch{}}return Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cm,Ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ba(t))throw Error(s(200));return km(e,t,null,r)},Ze.createRoot=function(e,t){if(!Ba(e))throw Error(s(299));var r=!1,o="",i=Kd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Aa(e,1,!1,null,null,r,!1,o,i),e[St]=t.current,an(e.nodeType===8?e.parentNode:e),new Oa(t)},Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Sl(t),e=e===null?null:e.stateNode,e},Ze.flushSync=function(e){return ar(e)},Ze.hydrate=function(e,t,r){if(!zo(t))throw Error(s(200));return _o(null,e,t,!0,r)},Ze.hydrateRoot=function(e,t,r){if(!Ba(e))throw Error(s(405));var o=r!=null&&r.hydratedSources||null,i=!1,a="",d=Kd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),t=Jd(t,null,e,1,r??null,i,!1,a,d),e[St]=t.current,an(e),o)for(e=0;e<o.length;e++)r=o[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Bo(t)},Ze.render=function(e,t,r){if(!zo(t))throw Error(s(200));return _o(null,e,t,!1,r)},Ze.unmountComponentAtNode=function(e){if(!zo(e))throw Error(s(40));return e._reactRootContainer?(ar(function(){_o(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1},Ze.unstable_batchedUpdates=Na,Ze.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!zo(r))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return _o(e,t,r,!1,o)},Ze.version="18.3.1-next-f1338f8080-20240426",Ze}var ic;function xc(){if(ic)return $a.exports;ic=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),$a.exports=Bm(),$a.exports}var ac;function zm(){if(ac)return Fo;ac=1;var l=xc();return Fo.createRoot=l.createRoot,Fo.hydrateRoot=l.hydrateRoot,Fo}var _m=zm();xc();function Cn(){return Cn=Object.assign?Object.assign.bind():function(l){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(l[u]=s[u])}return l},Cn.apply(this,arguments)}var Kt;(function(l){l.Pop="POP",l.Push="PUSH",l.Replace="REPLACE"})(Kt||(Kt={}));const lc="popstate";function $m(l){l===void 0&&(l={});function c(u,f){let{pathname:w,search:h,hash:N}=u.location;return Ya("",{pathname:w,search:h,hash:N},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(u,f){return typeof f=="string"?f:bc(f)}return Dm(c,s,null,l)}function Ae(l,c){if(l===!1||l===null||typeof l>"u")throw new Error(c)}function tl(l,c){if(!l){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Fm(){return Math.random().toString(36).substr(2,8)}function sc(l,c){return{usr:l.state,key:l.key,idx:c}}function Ya(l,c,s,u){return s===void 0&&(s=null),Cn({pathname:typeof l=="string"?l:l.pathname,search:"",hash:""},typeof c=="string"?zr(c):c,{state:s,key:c&&c.key||u||Fm()})}function bc(l){let{pathname:c="/",search:s="",hash:u=""}=l;return s&&s!=="?"&&(c+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(c+=u.charAt(0)==="#"?u:"#"+u),c}function zr(l){let c={};if(l){let s=l.indexOf("#");s>=0&&(c.hash=l.substr(s),l=l.substr(0,s));let u=l.indexOf("?");u>=0&&(c.search=l.substr(u),l=l.substr(0,u)),l&&(c.pathname=l)}return c}function Dm(l,c,s,u){u===void 0&&(u={});let{window:f=document.defaultView,v5Compat:w=!1}=u,h=f.history,N=Kt.Pop,S=null,P=E();P==null&&(P=0,h.replaceState(Cn({},h.state,{idx:P}),""));function E(){return(h.state||{idx:null}).idx}function C(){N=Kt.Pop;let M=E(),W=M==null?null:M-P;P=M,S&&S({action:N,location:I.location,delta:W})}function F(M,W){N=Kt.Push;let R=Ya(I.location,M,W);P=E()+1;let Q=sc(R,P),oe=I.createHref(R);try{h.pushState(Q,"",oe)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;f.location.assign(oe)}w&&S&&S({action:N,location:I.location,delta:1})}function U(M,W){N=Kt.Replace;let R=Ya(I.location,M,W);P=E();let Q=sc(R,P),oe=I.createHref(R);h.replaceState(Q,"",oe),w&&S&&S({action:N,location:I.location,delta:0})}function j(M){let W=f.location.origin!=="null"?f.location.origin:f.location.href,R=typeof M=="string"?M:bc(M);return R=R.replace(/ $/,"%20"),Ae(W,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,W)}let I={get action(){return N},get location(){return l(f,h)},listen(M){if(S)throw new Error("A history only accepts one active listener");return f.addEventListener(lc,C),S=M,()=>{f.removeEventListener(lc,C),S=null}},createHref(M){return c(f,M)},createURL:j,encodeLocation(M){let W=j(M);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:F,replace:U,go(M){return h.go(M)}};return I}var dc;(function(l){l.data="data",l.deferred="deferred",l.redirect="redirect",l.error="error"})(dc||(dc={}));function Um(l,c,s){return s===void 0&&(s="/"),Hm(l,c,s)}function Hm(l,c,s,u){let f=typeof c=="string"?zr(c):c,w=Sc(f.pathname||"/",s);if(w==null)return null;let h=wc(l);Wm(h);let N=null;for(let S=0;N==null&&S<h.length;++S){let P=rf(w);N=Zm(h[S],P)}return N}function wc(l,c,s,u){c===void 0&&(c=[]),s===void 0&&(s=[]),u===void 0&&(u="");let f=(w,h,N)=>{let S={relativePath:N===void 0?w.path||"":N,caseSensitive:w.caseSensitive===!0,childrenIndex:h,route:w};S.relativePath.startsWith("/")&&(Ae(S.relativePath.startsWith(u),'Absolute route path "'+S.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),S.relativePath=S.relativePath.slice(u.length));let P=cr([u,S.relativePath]),E=s.concat(S);w.children&&w.children.length>0&&(Ae(w.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+P+'".')),wc(w.children,c,E,P)),!(w.path==null&&!w.index)&&c.push({path:P,score:Ym(P,w.index),routesMeta:E})};return l.forEach((w,h)=>{var N;if(w.path===""||!((N=w.path)!=null&&N.includes("?")))f(w,h);else for(let S of kc(w.path))f(w,h,S)}),c}function kc(l){let c=l.split("/");if(c.length===0)return[];let[s,...u]=c,f=s.endsWith("?"),w=s.replace(/\?$/,"");if(u.length===0)return f?[w,""]:[w];let h=kc(u.join("/")),N=[];return N.push(...h.map(S=>S===""?w:[w,S].join("/"))),f&&N.push(...h),N.map(S=>l.startsWith("/")&&S===""?"/":S)}function Wm(l){l.sort((c,s)=>c.score!==s.score?s.score-c.score:Xm(c.routesMeta.map(u=>u.childrenIndex),s.routesMeta.map(u=>u.childrenIndex)))}const qm=/^:[\w-]+$/,Vm=3,Gm=2,Jm=1,Qm=10,Km=-2,cc=l=>l==="*";function Ym(l,c){let s=l.split("/"),u=s.length;return s.some(cc)&&(u+=Km),c&&(u+=Gm),s.filter(f=>!cc(f)).reduce((f,w)=>f+(qm.test(w)?Vm:w===""?Jm:Qm),u)}function Xm(l,c){return l.length===c.length&&l.slice(0,-1).every((u,f)=>u===c[f])?l[l.length-1]-c[c.length-1]:0}function Zm(l,c,s){let{routesMeta:u}=l,f={},w="/",h=[];for(let N=0;N<u.length;++N){let S=u[N],P=N===u.length-1,E=w==="/"?c:c.slice(w.length)||"/",C=ef({path:S.relativePath,caseSensitive:S.caseSensitive,end:P},E),F=S.route;if(!C)return null;Object.assign(f,C.params),h.push({params:f,pathname:cr([w,C.pathname]),pathnameBase:sf(cr([w,C.pathnameBase])),route:F}),C.pathnameBase!=="/"&&(w=cr([w,C.pathnameBase]))}return h}function ef(l,c){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[s,u]=tf(l.path,l.caseSensitive,l.end),f=c.match(s);if(!f)return null;let w=f[0],h=w.replace(/(.)\/+$/,"$1"),N=f.slice(1);return{params:u.reduce((P,E,C)=>{let{paramName:F,isOptional:U}=E;if(F==="*"){let I=N[C]||"";h=w.slice(0,w.length-I.length).replace(/(.)\/+$/,"$1")}const j=N[C];return U&&!j?P[F]=void 0:P[F]=(j||"").replace(/%2F/g,"/"),P},{}),pathname:w,pathnameBase:h,pattern:l}}function tf(l,c,s){c===void 0&&(c=!1),s===void 0&&(s=!0),tl(l==="*"||!l.endsWith("*")||l.endsWith("/*"),'Route path "'+l+'" will be treated as if it were '+('"'+l.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+l.replace(/\*$/,"/*")+'".'));let u=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,N,S)=>(u.push({paramName:N,isOptional:S!=null}),S?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(u.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,c?void 0:"i"),u]}function rf(l){try{return l.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return tl(!1,'The URL path "'+l+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+c+").")),l}}function Sc(l,c){if(c==="/")return l;if(!l.toLowerCase().startsWith(c.toLowerCase()))return null;let s=c.endsWith("/")?c.length-1:c.length,u=l.charAt(s);return u&&u!=="/"?null:l.slice(s)||"/"}const nf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,of=l=>nf.test(l);function af(l,c){c===void 0&&(c="/");let{pathname:s,search:u="",hash:f=""}=typeof l=="string"?zr(l):l,w;if(s)if(of(s))w=s;else{if(s.includes("//")){let h=s;s=s.replace(/\/\/+/g,"/"),tl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+s))}s.startsWith("/")?w=uc(s.substring(1),"/"):w=uc(s,c)}else w=c;return{pathname:w,search:df(u),hash:cf(f)}}function uc(l,c){let s=c.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function Ua(l,c,s,u){return"Cannot include a '"+l+"' character in a manually specified "+("`to."+c+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lf(l){return l.filter((c,s)=>s===0||c.route.path&&c.route.path.length>0)}function jc(l,c){let s=lf(l);return c?s.map((u,f)=>f===s.length-1?u.pathname:u.pathnameBase):s.map(u=>u.pathnameBase)}function Cc(l,c,s,u){u===void 0&&(u=!1);let f;typeof l=="string"?f=zr(l):(f=Cn({},l),Ae(!f.pathname||!f.pathname.includes("?"),Ua("?","pathname","search",f)),Ae(!f.pathname||!f.pathname.includes("#"),Ua("#","pathname","hash",f)),Ae(!f.search||!f.search.includes("#"),Ua("#","search","hash",f)));let w=l===""||f.pathname==="",h=w?"/":f.pathname,N;if(h==null)N=s;else{let C=c.length-1;if(!u&&h.startsWith("..")){let F=h.split("/");for(;F[0]==="..";)F.shift(),C-=1;f.pathname=F.join("/")}N=C>=0?c[C]:"/"}let S=af(f,N),P=h&&h!=="/"&&h.endsWith("/"),E=(w||h===".")&&s.endsWith("/");return!S.pathname.endsWith("/")&&(P||E)&&(S.pathname+="/"),S}const cr=l=>l.join("/").replace(/\/\/+/g,"/"),sf=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),df=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,cf=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function uf(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}const Ec=["post","put","patch","delete"];new Set(Ec);const mf=["get",...Ec];new Set(mf);function En(){return En=Object.assign?Object.assign.bind():function(l){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(l[u]=s[u])}return l},En.apply(this,arguments)}const rl=v.createContext(null),ff=v.createContext(null),Nn=v.createContext(null),Ho=v.createContext(null),ur=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Nc=v.createContext(null);function In(){return v.useContext(Ho)!=null}function nl(){return In()||Ae(!1),v.useContext(Ho).location}function Ic(l){v.useContext(Nn).static||v.useLayoutEffect(l)}function pf(){let{isDataRoute:l}=v.useContext(ur);return l?Nf():gf()}function gf(){In()||Ae(!1);let l=v.useContext(rl),{basename:c,future:s,navigator:u}=v.useContext(Nn),{matches:f}=v.useContext(ur),{pathname:w}=nl(),h=JSON.stringify(jc(f,s.v7_relativeSplatPath)),N=v.useRef(!1);return Ic(()=>{N.current=!0}),v.useCallback(function(P,E){if(E===void 0&&(E={}),!N.current)return;if(typeof P=="number"){u.go(P);return}let C=Cc(P,JSON.parse(h),w,E.relative==="path");l==null&&c!=="/"&&(C.pathname=C.pathname==="/"?c:cr([c,C.pathname])),(E.replace?u.replace:u.push)(C,E.state,E)},[c,u,h,w,l])}function hf(l,c){return yf(l,c)}function yf(l,c,s,u){In()||Ae(!1);let{navigator:f}=v.useContext(Nn),{matches:w}=v.useContext(ur),h=w[w.length-1],N=h?h.params:{};h&&h.pathname;let S=h?h.pathnameBase:"/";h&&h.route;let P=nl(),E;if(c){var C;let M=typeof c=="string"?zr(c):c;S==="/"||(C=M.pathname)!=null&&C.startsWith(S)||Ae(!1),E=M}else E=P;let F=E.pathname||"/",U=F;if(S!=="/"){let M=S.replace(/^\//,"").split("/");U="/"+F.replace(/^\//,"").split("/").slice(M.length).join("/")}let j=Um(l,{pathname:U}),I=kf(j&&j.map(M=>Object.assign({},M,{params:Object.assign({},N,M.params),pathname:cr([S,f.encodeLocation?f.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?S:cr([S,f.encodeLocation?f.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),w,s,u);return c&&I?v.createElement(Ho.Provider,{value:{location:En({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:Kt.Pop}},I):I}function vf(){let l=Ef(),c=uf(l)?l.status+" "+l.statusText:l instanceof Error?l.message:JSON.stringify(l),s=l instanceof Error?l.stack:null,f={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},c),s?v.createElement("pre",{style:f},s):null,null)}const xf=v.createElement(vf,null);class bf extends v.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,s){return s.location!==c.location||s.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:s.error,location:s.location,revalidation:c.revalidation||s.revalidation}}componentDidCatch(c,s){console.error("React Router caught the following error during render",c,s)}render(){return this.state.error!==void 0?v.createElement(ur.Provider,{value:this.props.routeContext},v.createElement(Nc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wf(l){let{routeContext:c,match:s,children:u}=l,f=v.useContext(rl);return f&&f.static&&f.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=s.route.id),v.createElement(ur.Provider,{value:c},u)}function kf(l,c,s,u){var f;if(c===void 0&&(c=[]),s===void 0&&(s=null),u===void 0&&(u=null),l==null){var w;if(!s)return null;if(s.errors)l=s.matches;else if((w=u)!=null&&w.v7_partialHydration&&c.length===0&&!s.initialized&&s.matches.length>0)l=s.matches;else return null}let h=l,N=(f=s)==null?void 0:f.errors;if(N!=null){let E=h.findIndex(C=>C.route.id&&N?.[C.route.id]!==void 0);E>=0||Ae(!1),h=h.slice(0,Math.min(h.length,E+1))}let S=!1,P=-1;if(s&&u&&u.v7_partialHydration)for(let E=0;E<h.length;E++){let C=h[E];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(P=E),C.route.id){let{loaderData:F,errors:U}=s,j=C.route.loader&&F[C.route.id]===void 0&&(!U||U[C.route.id]===void 0);if(C.route.lazy||j){S=!0,P>=0?h=h.slice(0,P+1):h=[h[0]];break}}}return h.reduceRight((E,C,F)=>{let U,j=!1,I=null,M=null;s&&(U=N&&C.route.id?N[C.route.id]:void 0,I=C.route.errorElement||xf,S&&(P<0&&F===0?(If("route-fallback"),j=!0,M=null):P===F&&(j=!0,M=C.route.hydrateFallbackElement||null)));let W=c.concat(h.slice(0,F+1)),R=()=>{let Q;return U?Q=I:j?Q=M:C.route.Component?Q=v.createElement(C.route.Component,null):C.route.element?Q=C.route.element:Q=E,v.createElement(wf,{match:C,routeContext:{outlet:E,matches:W,isDataRoute:s!=null},children:Q})};return s&&(C.route.ErrorBoundary||C.route.errorElement||F===0)?v.createElement(bf,{location:s.location,revalidation:s.revalidation,component:I,error:U,children:R(),routeContext:{outlet:null,matches:W,isDataRoute:!0}}):R()},null)}var Pc=(function(l){return l.UseBlocker="useBlocker",l.UseRevalidator="useRevalidator",l.UseNavigateStable="useNavigate",l})(Pc||{}),Rc=(function(l){return l.UseBlocker="useBlocker",l.UseLoaderData="useLoaderData",l.UseActionData="useActionData",l.UseRouteError="useRouteError",l.UseNavigation="useNavigation",l.UseRouteLoaderData="useRouteLoaderData",l.UseMatches="useMatches",l.UseRevalidator="useRevalidator",l.UseNavigateStable="useNavigate",l.UseRouteId="useRouteId",l})(Rc||{});function Sf(l){let c=v.useContext(rl);return c||Ae(!1),c}function jf(l){let c=v.useContext(ff);return c||Ae(!1),c}function Cf(l){let c=v.useContext(ur);return c||Ae(!1),c}function Tc(l){let c=Cf(),s=c.matches[c.matches.length-1];return s.route.id||Ae(!1),s.route.id}function Ef(){var l;let c=v.useContext(Nc),s=jf(),u=Tc();return c!==void 0?c:(l=s.errors)==null?void 0:l[u]}function Nf(){let{router:l}=Sf(Pc.UseNavigateStable),c=Tc(Rc.UseNavigateStable),s=v.useRef(!1);return Ic(()=>{s.current=!0}),v.useCallback(function(f,w){w===void 0&&(w={}),s.current&&(typeof f=="number"?l.navigate(f):l.navigate(f,En({fromRouteId:c},w)))},[l,c])}const mc={};function If(l,c,s){mc[l]||(mc[l]=!0)}function Pf(l,c){l?.v7_startTransition,l?.v7_relativeSplatPath}function Rf(l){let{to:c,replace:s,state:u,relative:f}=l;In()||Ae(!1);let{future:w,static:h}=v.useContext(Nn),{matches:N}=v.useContext(ur),{pathname:S}=nl(),P=pf(),E=Cc(c,jc(N,w.v7_relativeSplatPath),S,f==="path"),C=JSON.stringify(E);return v.useEffect(()=>P(JSON.parse(C),{replace:s,state:u,relative:f}),[P,C,f,s,u]),null}function Xa(l){Ae(!1)}function Tf(l){let{basename:c="/",children:s=null,location:u,navigationType:f=Kt.Pop,navigator:w,static:h=!1,future:N}=l;In()&&Ae(!1);let S=c.replace(/^\/*/,"/"),P=v.useMemo(()=>({basename:S,navigator:w,static:h,future:En({v7_relativeSplatPath:!1},N)}),[S,N,w,h]);typeof u=="string"&&(u=zr(u));let{pathname:E="/",search:C="",hash:F="",state:U=null,key:j="default"}=u,I=v.useMemo(()=>{let M=Sc(E,S);return M==null?null:{location:{pathname:M,search:C,hash:F,state:U,key:j},navigationType:f}},[S,E,C,F,U,j,f]);return I==null?null:v.createElement(Nn.Provider,{value:P},v.createElement(Ho.Provider,{children:s,value:I}))}function Mf(l){let{children:c,location:s}=l;return hf(Za(c),s)}new Promise(()=>{});function Za(l,c){c===void 0&&(c=[]);let s=[];return v.Children.forEach(l,(u,f)=>{if(!v.isValidElement(u))return;let w=[...c,f];if(u.type===v.Fragment){s.push.apply(s,Za(u.props.children,w));return}u.type!==Xa&&Ae(!1),!u.props.index||!u.props.children||Ae(!1);let h={id:u.props.id||w.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=Za(u.props.children,w)),s.push(h)}),s}const Af="6";try{window.__reactRouterVersion=Af}catch{}const Lf="startTransition",fc=Am[Lf];function Of(l){let{basename:c,children:s,future:u,window:f}=l,w=v.useRef();w.current==null&&(w.current=$m({window:f,v5Compat:!0}));let h=w.current,[N,S]=v.useState({action:h.action,location:h.location}),{v7_startTransition:P}=u||{},E=v.useCallback(C=>{P&&fc?fc(()=>S(C)):S(C)},[S,P]);return v.useLayoutEffect(()=>h.listen(E),[h,E]),v.useEffect(()=>Pf(u),[u]),v.createElement(Tf,{basename:c,children:s,location:N.location,navigationType:N.action,navigator:h,future:u})}var pc;(function(l){l.UseScrollRestoration="useScrollRestoration",l.UseSubmit="useSubmit",l.UseSubmitFetcher="useSubmitFetcher",l.UseFetcher="useFetcher",l.useViewTransitionState="useViewTransitionState"})(pc||(pc={}));var gc;(function(l){l.UseFetcher="useFetcher",l.UseFetchers="useFetchers",l.UseScrollRestoration="useScrollRestoration"})(gc||(gc={}));const Ha={title:"Admin Dashboard - Saranya Jewellery",html:`<!-- Dashboard Container -->
    <div style="max-width: 1400px; margin: 0 auto; padding: 2rem;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #6f0022; color: white; padding: 1.5rem 2rem; border-radius: 8px; margin-bottom: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div>
                <h1 style="margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #ffffff;">Admin Dashboard</h1>
                <p style="margin: 0.5rem 0 0; opacity: 0.9; color: #ffffff;">Welcome, <span id="adminName" style="color: #ffffff;">Admin</span></p>
            </div>
            <button onclick="logout()" style="background: white; color: #6f0022; border: none; padding: 0.75rem 1.5rem; border-radius: 4px; cursor: pointer; font-weight: 600; transition: all 0.3s;">
                Logout
            </button>
        </div>

        <!-- Stats Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #6f0022; margin: 0 0 0.5rem; font-family: 'Cormorant Garamond', serif;" id="totalStaff">0</h3>
                <p style="margin: 0; color: #666; font-weight: 500;">Total Staff</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #ffc107; margin: 0 0 0.5rem; font-family: 'Cormorant Garamond', serif;" id="pendingStaff">0</h3>
                <p style="margin: 0; color: #666; font-weight: 500;">Pending Approval</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #28a745; margin: 0 0 0.5rem; font-family: 'Cormorant Garamond', serif;" id="approvedStaff">0</h3>
                <p style="margin: 0; color: #666; font-weight: 500;">Approved</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #dc3545; margin: 0 0 0.5rem; font-family: 'Cormorant Garamond', serif;" id="revokedStaff">0</h3>
                <p style="margin: 0; color: #666; font-weight: 500;">Revoked</p>
            </div>
        </div>

        <!-- Staff Management Table -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Staff Management</h2>
                <button onclick="openAddModal()" style="background: #6f0022; color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
                    + Add Staff
                </button>
            </div>

            <!-- Alert Message -->
            <div id="alertMessage" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; display: none;"></div>

            <!-- Filter Buttons -->
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                <button class="filter-btn active" onclick="filterStaff('all')">All</button>
                <button class="filter-btn" onclick="filterStaff('Pending')">Pending</button>
                <button class="filter-btn" onclick="filterStaff('Approved')">Approved</button>
                <button class="filter-btn" onclick="filterStaff('Revoked')">Revoked</button>
            </div>

            <!-- Staff Table -->
            <div style="overflow-x: auto;">
                <table class="management-table" style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; font-weight: 600;">Name</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; font-weight: 600;">Email</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; font-weight: 600;">Role</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; font-weight: 600;">Status</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; font-weight: 600;">Active</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; font-weight: 600;">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="staffTableBody">
                        <tr>
                            <td colspan="6" style="padding: 2rem; text-align: center; color: #999;">Loading staff...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Order Analytics -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-top: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Order Analytics (Monthly)</h2>
                <button onclick="loadOrderAnalytics()" style="background: #6f0022; color: white; padding: 0.7rem 1.2rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Refresh</button>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: #f9f9f9; border-left: 4px solid #6f0022; padding: 1rem; border-radius: 4px;">
                    <p style="margin: 0; color: #666; font-size: 0.9rem;">Total Orders</p>
                    <h3 id="totalOrdersCount" style="margin: 0.4rem 0 0; color: #6f0022; font-size: 1.8rem;">0</h3>
                </div>
                <div style="background: #f9f9f9; border-left: 4px solid #28a745; padding: 1rem; border-radius: 4px;">
                    <p style="margin: 0; color: #666; font-size: 0.9rem;">Total Revenue</p>
                    <h3 id="totalRevenueAmount" style="margin: 0.4rem 0 0; color: #28a745; font-size: 1.8rem;">Rs. 0</h3>
                </div>
                <div style="background: #f9f9f9; border-left: 4px solid #17a2b8; padding: 1rem; border-radius: 4px;">
                    <p style="margin: 0; color: #666; font-size: 0.9rem;">Average Order Value</p>
                    <h3 id="avgOrderValue" style="margin: 0.4rem 0 0; color: #17a2b8; font-size: 1.8rem;">Rs. 0</h3>
                </div>
                <div style="background: #f9f9f9; border-left: 4px solid #ffc107; padding: 1rem; border-radius: 4px;">
                    <p style="margin: 0; color: #666; font-size: 0.9rem;">This Month Revenue</p>
                    <h3 id="thisMonthRevenue" style="margin: 0.4rem 0 0; color: #b07d00; font-size: 1.8rem;">Rs. 0</h3>
                </div>
            </div>

            <div style="overflow-x: auto;">
                <table class="management-table" style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Month</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Orders</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Revenue</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Avg Order Value</th>
                        </tr>
                    </thead>
                    <tbody id="monthlyAnalyticsTableBody">
                        <tr>
                            <td colspan="4" style="padding: 1.5rem; text-align: center; color: #999;">Loading monthly analytics...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Customer Management -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-top: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Customer Management</h2>
                <button onclick="loadCustomers()" style="background: #6f0022; color: white; padding: 0.7rem 1.2rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Refresh</button>
            </div>

            <div style="overflow-x: auto;">
                <table class="management-table" style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Name</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Email</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Phone</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Loyalty</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="customersTableBody">
                        <tr>
                            <td colspan="5" style="padding: 1.5rem; text-align: center; color: #999;">Loading customers...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Add/Edit Staff Modal -->
    <div id="staffModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); align-items: center; justify-content: center; z-index: 1000;">
        <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 id="modalTitle" style="margin: 0; font-family: 'Cormorant Garamond', serif;">Add Staff</h3>
                <button onclick="closeModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #999;">&times;</button>
            </div>

            <form id="staffForm">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Full Name *</label>
                    <input type="text" id="fullName" required style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                </div>

                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email *</label>
                    <input type="email" id="email" required style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                </div>

                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Role *</label>
                    <select id="role" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Product Management">Product Management</option>
                        <option value="Order Management">Order Management</option>
                        <option value="Inventory">Inventory</option>
                        <option value="Customer Care">Customer Care</option>
                        <option value="Loyalty Management">Loyalty Management</option>
                    </select>
                </div>

                <div style="margin-bottom: 1rem;" id="passwordGroup">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Password *</label>
                    <input type="password" id="password" minlength="6" style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                </div>

                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Status *</label>
                    <select id="status" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Revoked">Revoked</option>
                    </select>
                </div>

                <button type="submit" style="width: 100%; background: #6f0022; color: white; padding: 0.8rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600; font-size: 1rem;">
                    Save Staff
                </button>
            </form>
        </div>
    </div>

    <style>
        .management-table thead th {
            color: #333;
        }

        .filter-btn {
            padding: 0.6rem 1.2rem;
            border: 1px solid #6f0022;
            background: white;
            color: #6f0022;
            cursor: pointer;
            border-radius: 4px;
            font-weight: 500;
            transition: all 0.3s;
        }
        .filter-btn:hover {
            background: #f5f5f5;
        }
        .filter-btn.active {
            background: #6f0022;
            color: white;
        }
        button:hover {
            opacity: 0.9;
        }
    </style>`,scripts:[{type:"module",content:`
        import authManager from '/src/auth.js';

        let staffList = [];
        let customersList = [];
        let monthlyAnalytics = [];
        let currentFilter = 'all';
        let editingStaffId = null;

        // Check authentication and role
        async function checkAuth() {
            const user = await authManager.checkStaffAuth('Admin');
            if (!user || user.needsApproval) return false;
            document.getElementById('adminName').textContent = user.fullName || user.email;
            return true;
        }

        // Load all staff
        async function loadStaff() {
            try {
                const response = await fetch('/api/staff', {
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to load staff');
                staffList = await response.json();
                updateStats();
                displayStaff();
            } catch (error) {
                console.error('Error loading staff:', error);
                showAlert('Error loading staff members', 'error');
            }
        }

        // Load monthly order analytics
        async function loadOrderAnalytics() {
            try {
                const response = await fetch('/api/orders/admin/analytics/monthly?months=6', {
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to load monthly analytics');

                const data = await response.json();
                monthlyAnalytics = data.monthlyData || [];

                document.getElementById('totalOrdersCount').textContent = data.summary?.totalOrders || 0;
                document.getElementById('totalRevenueAmount').textContent = \`Rs. \${(data.summary?.totalRevenue || 0).toLocaleString()}\`;
                document.getElementById('avgOrderValue').textContent = \`Rs. \${(data.summary?.avgOrderValue || 0).toLocaleString()}\`;
                document.getElementById('thisMonthRevenue').textContent = \`Rs. \${(data.summary?.thisMonthRevenue || 0).toLocaleString()}\`;

                displayMonthlyAnalytics();
            } catch (error) {
                console.error('Error loading monthly analytics:', error);
                showAlert('Error loading monthly order analytics', 'error');
            }
        }

        function displayMonthlyAnalytics() {
            const tbody = document.getElementById('monthlyAnalyticsTableBody');

            if (!monthlyAnalytics.length) {
                tbody.innerHTML = '<tr><td colspan="4" style="padding: 1.5rem; text-align: center; color: #999;">No analytics data available</td></tr>';
                return;
            }

            tbody.innerHTML = monthlyAnalytics.map(item => \`
                <tr>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee;">\${item.label}</td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee;">\${item.ordersCount}</td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee; color: #28a745; font-weight: 600;">Rs. \${(item.revenue || 0).toLocaleString()}</td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee;">Rs. \${(item.avgOrderValue || 0).toLocaleString()}</td>
                </tr>
            \`).join('');
        }

        // Load customers for admin management
        async function loadCustomers() {
            try {
                const response = await fetch('/api/customer/admin/list', {
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to load customers');

                customersList = await response.json();
                displayCustomers();
            } catch (error) {
                console.error('Error loading customers:', error);
                showAlert('Error loading customers', 'error');
            }
        }

        function displayCustomers() {
            const tbody = document.getElementById('customersTableBody');

            if (!customersList.length) {
                tbody.innerHTML = '<tr><td colspan="5" style="padding: 1.5rem; text-align: center; color: #999;">No customers found</td></tr>';
                return;
            }

            tbody.innerHTML = customersList.map(customer => \`
                <tr style="background: #ffffff; color: #333;">
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee; color: #333;">\${customer.fullName || 'N/A'}</td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee; color: #333;">\${customer.email || 'N/A'}</td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee; color: #333;">\${customer.phone || '-'}</td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee;">
                        \${customer.isLoyalty ? \`<span style="background: #d4edda; color: #155724; padding: 0.3rem 0.7rem; border-radius: 12px; font-size: 0.8rem;">\${customer.loyaltyTier || 'Loyalty'}</span>\` : '<span style="color: #777;">Regular</span>'}
                    </td>
                    <td style="padding: 0.9rem; border-bottom: 1px solid #eee;">
                        <button onclick="deleteCustomer('\${customer._id}', '\${(customer.fullName || '').replace(/'/g, "\\\\'")}')" style="padding: 0.4rem 0.8rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;" title="Delete Customer">Delete</button>
                    </td>
                </tr>
            \`).join('');
        }

        async function deleteCustomer(customerId, customerName) {
            if (!confirm(\`Are you sure you want to delete customer \${customerName}?\`)) return;

            try {
                const response = await fetch(\`/api/customer/admin/\${customerId}\`, {
                    method: 'DELETE',
                    credentials: 'same-origin'
                });

                const data = await response.json();
                if (!response.ok) throw new Error(data.message || 'Failed to delete customer');

                showAlert('Customer deleted successfully', 'success');
                loadCustomers();
            } catch (error) {
                showAlert(error.message, 'error');
            }
        }

        // Update stats cards
        function updateStats() {
            document.getElementById('totalStaff').textContent = staffList.length;
            document.getElementById('pendingStaff').textContent = staffList.filter(s => s.status === 'Pending').length;
            document.getElementById('approvedStaff').textContent = staffList.filter(s => s.status === 'Approved').length;
            document.getElementById('revokedStaff').textContent = staffList.filter(s => s.status === 'Revoked').length;
        }

        // Display staff in table
        function displayStaff() {
            const tbody = document.getElementById('staffTableBody');
            let filteredStaff = currentFilter === 'all' ? staffList : staffList.filter(s => s.status === currentFilter);

            if (filteredStaff.length === 0) {
                tbody.innerHTML = '<tr><td colspan="6" style="padding: 2rem; text-align: center; color: #999;">No staff members found</td></tr>';
                return;
            }

            tbody.innerHTML = filteredStaff.map(staff => {
                const safeStaffName = (staff.fullName || '').replace(/'/g, "\\\\'");

                return \`
                    <tr style="background: #ffffff; color: #333;">
                        <td style="padding: 1rem; border-bottom: 1px solid #eee; color: #333;">\${staff.fullName || '-'}</td>
                        <td style="padding: 1rem; border-bottom: 1px solid #eee; color: #333;">\${staff.email || '-'}</td>
                        <td style="padding: 1rem; border-bottom: 1px solid #eee; color: #333;">\${staff.role || '-'}</td>
                        <td style="padding: 1rem; border-bottom: 1px solid #eee;">
                            <span style="padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem; font-weight: 500; background: \${
                                staff.status === 'Approved' ? '#d4edda' :
                                staff.status === 'Pending' ? '#fff3cd' : '#f8d7da'
                            }; color: \${
                                staff.status === 'Approved' ? '#155724' :
                                staff.status === 'Pending' ? '#856404' : '#721c24'
                            };">
                                \${staff.status}
                            </span>
                        </td>
                        <td style="padding: 1rem; border-bottom: 1px solid #eee; color: #333;">
                            \${staff.isActive ? 'Yes' : 'No'}
                        </td>
                        <td style="padding: 1rem; border-bottom: 1px solid #eee;">
                            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                \${staff.status === 'Pending' ? \`
                                    <button onclick="approveStaff('\${staff._id}')" style="padding: 0.4rem 0.8rem; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;" title="Approve">Approve</button>
                                    <button onclick="rejectStaff('\${staff._id}')" style="padding: 0.4rem 0.8rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;" title="Reject">Reject</button>
                                \` : ''}
                                \${staff.status === 'Approved' ? \`
                                    <button onclick="toggleActive('\${staff._id}', \${staff.isActive})" style="padding: 0.4rem 0.8rem; background: #ffc107; color: #212529; border: none; border-radius: 4px; cursor: pointer;" title="\${staff.isActive ? 'Deactivate' : 'Activate'}">
                                        \${staff.isActive ? 'Deactivate' : 'Activate'}
                                    </button>
                                \` : ''}
                                <button onclick="editStaff('\${staff._id}')" style="padding: 0.4rem 0.8rem; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;" title="Edit">Edit</button>
                                \${staff.role !== 'Admin' ? \`
                                    <button onclick="deleteStaff('\${staff._id}', '\${safeStaffName}')" style="padding: 0.4rem 0.8rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;" title="Delete">Delete</button>
                                \` : ''}
                            </div>
                        </td>
                    </tr>
                \`;
            }).join('');
        }

        // Filter staff
        function filterStaff(status) {
            currentFilter = status;
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            displayStaff();
        }

        // Approve staff
        async function approveStaff(id) {
            try {
                const response = await fetch(\`/api/staff/\${id}/approve\`, { 
                    method: 'PATCH',
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to approve');
                showAlert('Staff approved successfully', 'success');
                loadStaff();
            } catch (error) {
                showAlert('Error approving staff', 'error');
            }
        }

        // Reject staff
        async function rejectStaff(id) {
            if (!confirm('Are you sure you want to reject this staff request?')) return;
            try {
                const response = await fetch(\`/api/staff/\${id}/reject\`, { 
                    method: 'PATCH',
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to reject');
                showAlert('Staff rejected', 'success');
                loadStaff();
            } catch (error) {
                showAlert('Error rejecting staff', 'error');
            }
        }

        // Toggle active status
        async function toggleActive(id, currentStatus) {
            try {
                const response = await fetch(\`/api/staff/\${id}/toggle-active\`, { 
                    method: 'PATCH',
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to toggle');
                showAlert(\`Staff \${currentStatus ? 'deactivated' : 'activated'} successfully\`, 'success');
                loadStaff();
            } catch (error) {
                showAlert('Error toggling status', 'error');
            }
        }

        // Delete staff
        async function deleteStaff(id, name) {
            if (!confirm(\`Are you sure you want to delete \${name}?\`)) return;
            try {
                const response = await fetch(\`/api/staff/\${id}\`, { 
                    method: 'DELETE',
                    credentials: 'same-origin'
                });
                if (!response.ok) throw new Error('Failed to delete');
                showAlert('Staff deleted successfully', 'success');
                loadStaff();
            } catch (error) {
                showAlert('Error deleting staff', 'error');
            }
        }

        // Open add modal
        function openAddModal() {
            editingStaffId = null;
            document.getElementById('modalTitle').textContent = 'Add Staff';
            document.getElementById('staffForm').reset();
            document.getElementById('passwordGroup').style.display = 'block';
            document.getElementById('password').required = true;
            document.getElementById('staffModal').style.display = 'flex';
        }

        // Edit staff
        function editStaff(id) {
            const staff = staffList.find(s => s._id === id);
            if (!staff) return;

            editingStaffId = id;
            document.getElementById('modalTitle').textContent = 'Edit Staff';
            document.getElementById('fullName').value = staff.fullName;
            document.getElementById('email').value = staff.email;
            document.getElementById('role').value = staff.role;
            document.getElementById('status').value = staff.status;
            document.getElementById('passwordGroup').style.display = 'none';
            document.getElementById('password').required = false;
            document.getElementById('staffModal').style.display = 'flex';
        }

        // Close modal
        function closeModal() {
            document.getElementById('staffModal').style.display = 'none';
            document.getElementById('staffForm').reset();
            editingStaffId = null;
        }

        // Handle form submission
        document.getElementById('staffForm').addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                role: document.getElementById('role').value,
                status: document.getElementById('status').value
            };

            if (!editingStaffId) {
                formData.password = document.getElementById('password').value;
            }

            try {
                let response;
                if (editingStaffId) {
                    response = await fetch(\`/api/staff/\${editingStaffId}\`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'same-origin',
                        body: JSON.stringify(formData)
                    });
                } else {
                    response = await fetch('/api/staff', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'same-origin',
                        body: JSON.stringify(formData)
                    });
                }

                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || 'Failed to save staff');
                }

                showAlert(editingStaffId ? 'Staff updated successfully' : 'Staff created successfully', 'success');
                closeModal();
                loadStaff();
            } catch (error) {
                showAlert(error.message, 'error');
            }
        });

        // Show alert
        function showAlert(message, type) {
            const alert = document.getElementById('alertMessage');
            alert.textContent = message;
            alert.style.display = 'block';
            alert.style.background = type === 'success' ? '#d4edda' : '#f8d7da';
            alert.style.color = type === 'success' ? '#155724' : '#721c24';
            alert.style.border = \`1px solid \${type === 'success' ? '#c3e6cb' : '#f5c6cb'}\`;
            setTimeout(() => alert.style.display = 'none', 5000);
        }

        // Logout
        function logout() {
            authManager.logout();
        }

        // Make functions available globally for onclick handlers
        window.logout = logout;
        window.openAddModal = openAddModal;
        window.closeModal = closeModal;
        window.filterStaff = filterStaff;
        window.approveStaff = approveStaff;
        window.rejectStaff = rejectStaff;
        window.toggleActive = toggleActive;
        window.editStaff = editStaff;
        window.deleteStaff = deleteStaff;
        window.loadOrderAnalytics = loadOrderAnalytics;
        window.loadCustomers = loadCustomers;
        window.deleteCustomer = deleteCustomer;

        // Initialize
        (async function() {
            const isAuth = await checkAuth();
            if (isAuth) {
                loadStaff();
                loadOrderAnalytics();
                loadCustomers();
            }
        })();
    `}]};function Bf(){const l=v.useRef(null);return v.useEffect(()=>{const c=l.current;if(!c)return;document.title=Ha.title,c.innerHTML=Ha.html;const s=[];for(const u of Ha.scripts||[]){const f=document.createElement("script");u.type&&(f.type=u.type),f.textContent=u.content,c.appendChild(f),s.push(f)}return()=>{s.forEach(u=>u.remove()),c.innerHTML=""}},[]),n.jsx("div",{ref:l})}const Wa={title:"Customer Care - Saranya Jewellery",html:`<!-- Pending Approval Overlay -->
    <div id="pendingOverlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 9999; align-items: center; justify-content: center;">
        <div style="background: white; padding: 3rem; border-radius: 8px; text-align: center; max-width: 500px;">
            <h2 style="color: #6f0022; margin-bottom: 1rem;">Pending Approval</h2>
            <p style="color: #666; margin-bottom: 2rem;">Your account is awaiting admin approval. Please check back later.</p>
            <button onclick="logout()" style="background: #6f0022; color: white; padding: 0.8rem 2rem; border: none; border-radius: 4px; cursor: pointer;">Logout</button>
        </div>
    </div>

    <div style="max-width: 1400px; margin: 0 auto; padding: 2rem;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #6f0022; color: white; padding: 1.5rem 2rem; border-radius: 8px; margin-bottom: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div>
                <h1 style="margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #ffffff;">Customer Care</h1>
                <p style="margin: 0.5rem 0 0; opacity: 0.9; color: #ffffff;">Welcome, <span id="userName" style="color: #ffffff;">Care Manager</span></p>
            </div>
            <button onclick="logout()" style="background: white; color: #6f0022; border: none; padding: 0.75rem 1.5rem; border-radius: 4px; cursor: pointer; font-weight: 600;">Logout</button>
        </div>

        <!-- Stats Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #6f0022; margin: 0 0 0.5rem;" id="totalMessages">0</h3>
                <p style="margin: 0; color: #666;">Total Messages</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #28a745; margin: 0 0 0.5rem;" id="activeMessages">0</h3>
                <p style="margin: 0; color: #666;">Active Messages</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #17a2b8; margin: 0 0 0.5rem;" id="totalSent">0</h3>
                <p style="margin: 0; color: #666;">Emails Sent</p>
            </div>
        </div>

        <!-- Email Messages & Promotions -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Email Messages & Promotions</h2>
                <button onclick="openMessageModal()" style="background: #6f0022; color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">+ Create Message</button>
            </div>

            <!-- Alert -->
            <div id="alert" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; display: none;"></div>

            <!-- Filter Tabs -->
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">
                <button onclick="filterMessages('all')" id="filter-all" style="background: none; border: none; padding: 0.5rem 1rem; cursor: pointer; font-weight: 600; color: #6f0022; border-bottom: 3px solid #6f0022;">All</button>
                <button onclick="filterMessages('active')" id="filter-active" style="background: none; border: none; padding: 0.5rem 1rem; cursor: pointer; color: #666;">Active</button>
                <button onclick="filterMessages('inactive')" id="filter-inactive" style="background: none; border: none; padding: 0.5rem 1rem; cursor: pointer; color: #666;">Inactive</button>
            </div>

            <!-- Messages List -->
            <div id="messagesList" style="display: flex; flex-direction: column; gap: 1rem;">
                <div style="padding: 2rem; text-align: center; color: #999;">Loading messages...</div>
            </div>
        </div>

        <!-- Promotional Campaigns (Old Section - Keep for backward compatibility) -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 2rem; display: none;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Promotional Campaigns</h2>
                <button onclick="openCampaignModal()" style="background: #6f0022; color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">+ Create Campaign</button>
            </div>

            <!-- Alert -->
            <div id="alert" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; display: none;"></div>

            <!-- Campaigns Grid -->
            <div id="campaignsGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
                <div style="padding: 2rem; text-align: center; color: #999;">Loading campaigns...</div>
            </div>
        </div>

        <!-- Customer Reviews -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="margin: 0 0 1.5rem; font-family: 'Cormorant Garamond', serif;">Customer Reviews</h2>
            <div id="feedbackList">
                <p style="text-align: center; color: #999;">Loading reviews...</p>
            </div>
        </div>

        <!-- Customer Chat Support -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-top: 2rem;">
            <h2 style="margin: 0 0 1.5rem; font-family: 'Cormorant Garamond', serif;">Customer Support Chats</h2>
            
            <!-- Chat Stats -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px; text-align: center;">
                    <h3 style="font-size: 1.8rem; color: #6f0022; margin: 0;" id="totalChats">0</h3>
                    <p style="margin: 0.3rem 0 0; color: #666; font-size: 0.85rem;">Total Chats</p>
                </div>
                <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px; text-align: center;">
                    <h3 style="font-size: 1.8rem; color: #28a745; margin: 0;" id="activeChats">0</h3>
                    <p style="margin: 0.3rem 0 0; color: #666; font-size: 0.85rem;">Active</p>
                </div>
                <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px; text-align: center;">
                    <h3 style="font-size: 1.8rem; color: #dc3545; margin: 0;" id="unreadMessages">0</h3>
                    <p style="margin: 0.3rem 0 0; color: #666; font-size: 0.85rem;">Unread</p>
                </div>
            </div>

            <!-- Chat Filter -->
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">
                <button onclick="filterChats('all')" id="chat-filter-all" style="background: none; border: none; padding: 0.5rem 1rem; cursor: pointer; font-weight: 600; color: #6f0022; border-bottom: 3px solid #6f0022;">All</button>
                <button onclick="filterChats('active')" id="chat-filter-active" style="background: none; border: none; padding: 0.5rem 1rem; cursor: pointer; color: #666;">Active</button>
                <button onclick="filterChats('resolved')" id="chat-filter-resolved" style="background: none; border: none; padding: 0.5rem 1rem; cursor: pointer; color: #666;">Resolved</button>
            </div>

            <!-- Chat List -->
            <div id="chatsList" style="display: flex; flex-direction: column; gap: 1rem; max-height: 600px; overflow-y: auto;">
                <p style="text-align: center; color: #999;">Loading chats...</p>
            </div>
            
            <div style="background: #f0f7ff; padding: 1rem; border-radius: 6px; margin-top: 1rem; border-left: 4px solid #17a2b8;">
                <p style="margin: 0; font-size: 0.9rem; color: #666;">
                    <strong>Tip:</strong> Click on any chat above to view the conversation and send a reply
                </p>
            </div>
        </div>
    </div>

    <!-- Chat Detail Modal -->
    <div id="chatModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); align-items: center; justify-content: center; z-index: 2000;">
        <div style="background: white; border-radius: 8px; max-width: 800px; width: 90%; max-height: 90vh; display: flex; flex-direction: column; overflow: hidden;">
            <!-- Chat Header -->
            <div style="background: #6f0022; color: white; padding: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3 style="margin: 0;" id="chatCustomerName">Customer Name</h3>
                    <p style="margin: 0.3rem 0 0; font-size: 0.9rem; opacity: 0.9;" id="chatCustomerEmail">customer@email.com</p>
                </div>
                <button onclick="closeChatModal()" style="background: white; color: #6f0022; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-weight: 600;">✕ Close</button>
            </div>

            <!-- Chat Messages -->
            <div id="chatModalMessages" style="flex: 1; overflow-y: auto; padding: 1.5rem; background: #f9f9f9; min-height: 400px; max-height: 500px;">
                <p style="text-align: center; color: #999;">Loading conversation...</p>
            </div>

            <!-- Chat Status & Actions -->
            <div style="padding: 1rem 1.5rem; background: #f8f9fa; border-top: 1px solid #ddd; display: flex; gap: 1rem; align-items: center;">
                <label style="font-size: 0.9rem; color: #666;">Status:</label>
                <select id="chatStatus" onchange="updateChatStatus()" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="resolved">Resolved</option>
                </select>
            </div>

            <!-- Reply Form -->
            <div style="padding: 1.5rem; background: white; border-top: 2px solid #6f0022;">
                <h4 style="margin: 0 0 1rem 0; color: #6f0022; font-size: 1rem;">Send Your Reply:</h4>
                <form id="replyForm" style="display: flex; gap: 0.5rem;">
                    <input 
                        type="text" 
                        id="replyInput" 
                        placeholder="Type your reply to the customer..." 
                        required
                        style="flex: 1; padding: 0.8rem; border: 1px solid #ddd; border-radius: 25px; font-size: 1rem;"
                    >
                    <button type="submit" style="background: #6f0022; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 25px; cursor: pointer; font-weight: 600; white-space: nowrap;">
                        Send Reply
                    </button>
                </form>
            </div>
        </div>
    </div>

    <style>
        .chat-item {
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            background: white;
        }
        .chat-item:hover {
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            border-color: #6f0022;
        }
        .chat-item.unread {
            background: #fff8f0;
            border-left: 4px solid #6f0022;
        }
        .chat-message-bubble {
            padding: 0.8rem 1rem;
            border-radius: 12px;
            margin-bottom: 0.8rem;
            max-width: 70%;
        }
        .chat-message-bubble.customer {
            background: #f0f0f0;
            margin-right: auto;
        }
        .chat-message-bubble.care-manager {
            background: #6f0022;
            color: white;
            margin-left: auto;
        }
        .chat-badge {
            display: inline-block;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        .chat-badge.active { background: #d4edda; color: #155724; }
        .chat-badge.pending { background: #fff3cd; color: #856404; }
        .chat-badge.resolved { background: #d1ecf1; color: #0c5460; }
    </style>
    </div>

    <!-- Message Modal -->
    <div id="messageModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); align-items: center; justify-content: center; z-index: 1000;">
        <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 600px; width: 90%; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem;">
                <h3 id="messageModalTitle" style="margin: 0;">Create Email Message</h3>
                <button onclick="closeMessageModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            <form id="messageForm">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Title *</label>
                    <input type="text" id="msgTitle" required style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Message Content *</label>
                    <textarea id="msgContent" required rows="5" style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;"></textarea>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem;">Type *</label>
                        <select id="msgType" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                            <option value="promotion">Promotion</option>
                            <option value="announcement">Announcement</option>
                            <option value="welcome">Welcome</option>
                            <option value="general">General</option>
                        </select>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem;">Status *</label>
                        <select id="msgStatus" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="scheduled">Scheduled</option>
                        </select>
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem;">Target Audience *</label>
                        <select id="msgTarget" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                            <option value="all">All Customers</option>
                            <option value="new">New Customers</option>
                            <option value="existing">Existing Customers</option>
                            <option value="specific">Specific</option>
                        </select>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem;">Valid Until</label>
                        <input type="date" id="msgValidUntil" style="width: 90%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                    </div>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" id="msgSendOnLogin" checked style="width: 20px; height: 20px;">
                        <span>Send on customer login</span>
                    </label>
                </div>
                <button type="submit" style="width: 100%; background: #6f0022; color: white; padding: 0.8rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Save Message</button>
            </form>
        </div>
    </div>

    <!-- Campaign Modal -->
    <div id="campaignModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); align-items: center; justify-content: center; z-index: 1000;">
        <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 600px; width: 90%; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem;">
                <h3 id="modalTitle" style="margin: 0;">Create Campaign</h3>
                <button onclick="closeCampaignModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            <form id="campaignForm">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Campaign Name *</label>
                    <input type="text" id="campaignName" required style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Description *</label>
                    <textarea id="campaignDesc" required rows="3" style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;"></textarea>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem;">Discount % *</label>
                        <input type="number" id="discount" required min="0" max="100" style="width: 90%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem;">Promo Code *</label>
                        <input type="text" id="promoCode" required style="width: 90%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem;">Start Date *</label>
                        <input type="date" id="startDate" required style="width: 90%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem;">End Date *</label>
                        <input type="date" id="endDate" required style="width: 90%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                    </div>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Target Customers</label>
                    <select id="targetCustomers" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                        <option value="All">All Customers</option>
                        <option value="Silver">Silver Tier</option>
                        <option value="Gold">Gold Tier</option>
                        <option value="Platinum">Platinum Tier</option>
                        <option value="New">New Customers</option>
                    </select>
                </div>
                <button type="submit" style="width: 100%; background: #6f0022; color: white; padding: 0.8rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Save Campaign</button>
            </form>
        </div>
    </div>`,scripts:[{type:"module",content:`
        import authManager from '/src/auth.js';

        let campaigns = [];
        let feedback = [];
        let messages = [];
        let editingCampaignId = null;
        let editingMessageId = null;
        let currentFilter = 'all';

        async function checkAuth() {
            const user = await authManager.checkStaffAuth('Customer Care');
            if (!user) return false;
            if (user.needsApproval) {
                document.getElementById('pendingOverlay').style.display = 'flex';
                return false;
            }
            document.getElementById('userName').textContent = user.fullName || user.email;
            return true;
        }

        // Message Functions
        async function loadMessages() {
            try {
                const res = await fetch('/api/messages', {
                    credentials: 'same-origin'
                });
                if (res.ok) {
                    messages = await res.json();
                    displayMessages();
                    await loadMessageStats();
                } else {
                    messages = [];
                    displayMessages();
                }
            } catch (e) { 
                messages = [];
                displayMessages();
            }
        }

        async function loadMessageStats() {
            try {
                const res = await fetch('/api/messages/stats', {
                    credentials: 'same-origin'
                });
                if (res.ok) {
                    const stats = await res.json();
                    document.getElementById('totalMessages').textContent = stats.totalMessages || 0;
                    document.getElementById('activeMessages').textContent = stats.activeMessages || 0;
                    document.getElementById('totalSent').textContent = stats.totalSent || 0;
                }
            } catch (e) {
                console.error('Failed to load stats');
            }
        }

        function filterMessages(status) {
            currentFilter = status;
            
            // Update button styles
            document.getElementById('filter-all').style.borderBottom = status === 'all' ? '3px solid #6f0022' : 'none';
            document.getElementById('filter-all').style.color = status === 'all' ? '#6f0022' : '#666';
            document.getElementById('filter-active').style.borderBottom = status === 'active' ? '3px solid #6f0022' : 'none';
            document.getElementById('filter-active').style.color = status === 'active' ? '#6f0022' : '#666';
            document.getElementById('filter-inactive').style.borderBottom = status === 'inactive' ? '3px solid #6f0022' : 'none';
            document.getElementById('filter-inactive').style.color = status === 'inactive' ? '#6f0022' : '#666';
            
            displayMessages();
        }

        function displayMessages() {
            const container = document.getElementById('messagesList');
            let filtered = messages;
            
            if (currentFilter !== 'all') {
                filtered = messages.filter(m => m.status === currentFilter);
            }
            
            if (filtered.length === 0) {
                container.innerHTML = '<div style="padding: 2rem; text-align: center; color: #999;">No messages found</div>';
                return;
            }
            
            container.innerHTML = filtered.map(msg => {
                const typeColors = {
                    promotion: '#e0bf63',
                    announcement: '#17a2b8',
                    welcome: '#28a745',
                    general: '#6c757d'
                };
                const statusColors = {
                    active: '#28a745',
                    inactive: '#6c757d',
                    scheduled: '#ffc107'
                };
                
                return \`
                <div style="border: 2px solid #eee; border-radius: 8px; padding: 1.5rem; position: relative;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                        <div>
                            <h3 style="margin: 0 0 0.5rem; color: #6f0022;">\${msg.title}</h3>
                            <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="background: \${typeColors[msg.type]}; color: white; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem;">\${msg.type}</span>
                                <span style="background: \${statusColors[msg.status]}; color: white; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem;">\${msg.status}</span>
                            </div>
                        </div>
                        <div style="display: flex; gap: 0.5rem;">
                            <button onclick="editMessage('\${msg._id}')" style="padding: 0.4rem 0.8rem; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;" title="Edit">Edit</button>
                            \${msg.status === 'active' ? 
                                \`<button onclick="broadcastMessage('\${msg._id}')" style="padding: 0.4rem 0.8rem; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;" title="Broadcast to customers">Send</button>\` :
                                \`<button disabled style="padding: 0.4rem 0.8rem; background: #ccc; color: #666; border: none; border-radius: 4px; cursor: not-allowed;" title="Only active messages can be broadcast">Send</button>\`
                            }
                            <button onclick="deleteMessage('\${msg._id}', '\${msg.title}')" style="padding: 0.4rem 0.8rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;" title="Delete">Delete</button>
                        </div>
                    </div>
                    <p style="color: #666; margin: 0.5rem 0; line-height: 1.6;">\${msg.message}</p>
                    <div style="display: flex; justify-content: space-between; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee; font-size: 0.9rem; color: #999;">
                        <span>Target: \${msg.targetAudience}</span>
                        <span>Sent: \${msg.sentCount || 0} times</span>
                        \${msg.validUntil ? \`<span>Valid until: \${new Date(msg.validUntil).toLocaleDateString()}</span>\` : '<span>No expiry</span>'}
                    </div>
                </div>
            \`}).join('');
        }

        function openMessageModal() {
            editingMessageId = null;
            document.getElementById('messageModalTitle').textContent = 'Create Email Message';
            document.getElementById('messageForm').reset();
            document.getElementById('msgSendOnLogin').checked = true;
            document.getElementById('messageModal').style.display = 'flex';
        }

        function closeMessageModal() {
            document.getElementById('messageModal').style.display = 'none';
            editingMessageId = null;
        }

        async function editMessage(id) {
            const msg = messages.find(m => m._id === id);
            if (!msg) return;
            
            editingMessageId = id;
            document.getElementById('messageModalTitle').textContent = 'Edit Email Message';
            document.getElementById('msgTitle').value = msg.title;
            document.getElementById('msgContent').value = msg.message;
            document.getElementById('msgType').value = msg.type;
            document.getElementById('msgStatus').value = msg.status;
            document.getElementById('msgTarget').value = msg.targetAudience;
            document.getElementById('msgValidUntil').value = msg.validUntil ? msg.validUntil.split('T')[0] : '';
            document.getElementById('msgSendOnLogin').checked = msg.sendOnLogin;
            document.getElementById('messageModal').style.display = 'flex';
        }

        async function deleteMessage(id, title) {
            if (!confirm(\`Delete message "\${title}"?\`)) return;
            try {
                const res = await fetch(\`/api/messages/\${id}\`, { 
                    method: 'DELETE',
                    credentials: 'same-origin'
                });
                if (!res.ok) throw new Error();
                showAlert('Message deleted successfully', 'success');
                loadMessages();
            } catch (e) {
                showAlert('Error deleting message', 'error');
            }
        }

        async function broadcastMessage(id) {
            if (!confirm('Send this message to all target customers? This may take a while.')) return;
            
            try {
                showAlert('Broadcasting message... Please wait', 'info');
                const res = await fetch(\`/api/messages/broadcast/\${id}\`, { 
                    method: 'POST',
                    credentials: 'same-origin'
                });
                
                const result = await res.json();
                console.log('Broadcast response:', result);
                
                if (!res.ok) {
                    throw new Error(result.message || 'Broadcast failed');
                }
                
                showAlert(\`Broadcast completed: \${result.successCount} sent, \${result.failCount} failed\`, 'success');
                loadMessages();
            } catch (e) {
                console.error('Broadcast error:', e);
                showAlert(\`Error broadcasting message: \${e.message}\`, 'error');
            }
        }

        document.getElementById('messageForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const data = {
                title: document.getElementById('msgTitle').value,
                message: document.getElementById('msgContent').value,
                type: document.getElementById('msgType').value,
                status: document.getElementById('msgStatus').value,
                targetAudience: document.getElementById('msgTarget').value,
                validUntil: document.getElementById('msgValidUntil').value || undefined,
                sendOnLogin: document.getElementById('msgSendOnLogin').checked
            };
            
            try {
                let res;
                if (editingMessageId) {
                    res = await fetch(\`/api/messages/\${editingMessageId}\`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'same-origin',
                        body: JSON.stringify(data)
                    });
                } else {
                    res = await fetch('/api/messages', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'same-origin',
                        body: JSON.stringify(data)
                    });
                }
                
                if (!res.ok) {
                    const err = await res.json();
                    throw new Error(err.message);
                }
                
                showAlert(editingMessageId ? 'Message updated successfully' : 'Message created successfully', 'success');
                closeMessageModal();
                loadMessages();
            } catch (e) {
                showAlert(e.message, 'error');
            }
        });

        async function loadCampaigns() {
            try {
                const res = await fetch('/api/campaigns', {
                    credentials: 'same-origin'
                });
                if (res.ok) {
                    campaigns = await res.json();
                    displayCampaigns();
                } else {
                    campaigns = [];
                    displayCampaigns();
                }
            } catch (e) { 
                campaigns = [];
                displayCampaigns();
            }
        }

        function displayCampaigns() {
            const grid = document.getElementById('campaignsGrid');
            if (campaigns.length === 0) {
                grid.innerHTML = '<div style="padding: 2rem; text-align: center; color: #999; grid-column: 1/-1;">No campaigns yet</div>';
                return;
            }
            grid.innerHTML = campaigns.map(c => {
                const now = new Date();
                const start = new Date(c.startDate);
                const end = new Date(c.endDate);
                const isActive = now >= start && now <= end;
                return \`
                <div style="border: 2px solid \${isActive ? '#28a745' : '#ddd'}; border-radius: 8px; padding: 1.5rem; position: relative;">
                    \${isActive ? '<span style="position: absolute; top: 10px; right: 10px; background: #28a745; color: white; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem;">Active</span>' : ''}
                    <h3 style="margin: 0 0 0.5rem; color: #6f0022;">\${c.name}</h3>
                    <p style="color: #666; margin: 0.5rem 0;">\${c.description}</p>
                    <div style="margin: 1rem 0;">
                        <span style="background: #e0bf63; padding: 0.5rem 1rem; border-radius: 4px; font-weight: 600;">\${c.discount}% OFF</span>
                        <span style="margin-left: 0.5rem; color: #666;">Code: <strong>\${c.promoCode}</strong></span>
                    </div>
                    <p style="font-size: 0.9rem; color: #666; margin: 0.5rem 0;">Valid: \${new Date(c.startDate).toLocaleDateString()} - \${new Date(c.endDate).toLocaleDateString()}</p>
                    <p style="font-size: 0.9rem; color: #666; margin: 0.5rem 0;">Target: \${c.targetCustomers || 'All'}</p>
                    <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <button onclick="editCampaign('\${c._id}')" style="padding: 0.5rem 1rem; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;">Edit</button>
                        <button onclick="deleteCampaign('\${c._id}', '\${c.name}')" style="padding: 0.5rem 1rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">Delete</button>
                    </div>
                </div>
            \`}).join('');
        }

        async function loadFeedback() {
            try {
                const res = await authManager.apiRequest('/api/reviews/staff/all');
                if (res.ok) {
                    feedback = await res.json();
                    displayFeedback();
                } else {
                    document.getElementById('feedbackList').innerHTML = '<p style="text-align: center; color: #999;">No reviews available</p>';
                }
            } catch (e) {
                document.getElementById('feedbackList').innerHTML = '<p style="text-align: center; color: #999;">No reviews available</p>';
            }
        }

        function renderStars(rating) {
            const value = Number(rating) || 0;
            return [1, 2, 3, 4, 5].map((star) => {
                const active = star <= value;
                return \`<span style="color: \${active ? '#e0bf63' : '#ddd'}; font-size: 1rem;">\${active ? '★' : '☆'}</span>\`;
            }).join('');
        }

        function displayFeedback() {
            const list = document.getElementById('feedbackList');
            if (feedback.length === 0) {
                list.innerHTML = '<p style="text-align: center; color: #999;">No reviews yet</p>';
                return;
            }

            list.innerHTML = feedback.slice(0, 20).map((f) => \`
                <div style="border: 1px solid #eee; border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 0.6rem;">
                        <div>
                            <strong>\${f.customerName || 'Customer'}</strong>
                            <p style="margin: 0.2rem 0 0; color: #666; font-size: 0.9rem;">Product: \${f.productId?.name || f.productName || 'Unknown Product'}</p>
                        </div>
                        <div style="text-align: right;">
                            <div>\${renderStars(f.rating)}</div>
                            <small style="color: #999;">\${new Date(f.createdAt).toLocaleDateString()}</small>
                        </div>
                    </div>

                    <p style="margin: 0.5rem 0; color: #666;">\${f.comment || 'No comment provided.'}</p>

                    \${f.careReply?.comment ? \`
                        <div style="background: #f8f9fa; border-left: 3px solid #6f0022; padding: 0.7rem; border-radius: 6px; margin-bottom: 0.8rem;">
                            <p style="margin: 0 0 0.2rem; font-weight: 600; color: #6f0022;">Current Reply \${f.careReply.staffName ? \`by \${f.careReply.staffName}\` : ''}</p>
                            <p style="margin: 0; color: #555;">\${f.careReply.comment}</p>
                        </div>
                    \` : ''}

                    <form class="review-reply-form" data-review-id="\${f._id}">
                        <textarea name="replyComment" rows="2" maxlength="1000" placeholder="Write a customer care reply..." style="width: 100%; padding: 0.7rem; border: 1px solid #ddd; border-radius: 6px; margin-bottom: 0.6rem;">\${f.careReply?.comment || ''}</textarea>
                        <button type="submit" style="background: #6f0022; color: white; border: none; border-radius: 6px; padding: 0.55rem 1rem; cursor: pointer; font-weight: 600;">\${f.careReply?.comment ? 'Update Reply' : 'Send Reply'}</button>
                    </form>
                </div>
            \`).join('');

            document.querySelectorAll('.review-reply-form').forEach((form) => {
                form.addEventListener('submit', async (event) => {
                    event.preventDefault();
                    const reviewId = form.dataset.reviewId;
                    const comment = form.querySelector('textarea[name="replyComment"]').value.trim();

                    if (!comment) {
                        showAlert('Reply comment is required', 'error');
                        return;
                    }

                    try {
                        const res = await authManager.apiRequest(\`/api/reviews/\${reviewId}/reply\`, {
                            method: 'PATCH',
                            body: JSON.stringify({ comment })
                        });

                        const result = await res.json();
                        if (!res.ok) throw new Error(result.message || 'Failed to save reply');

                        showAlert('Reply saved successfully', 'success');
                        loadFeedback();
                    } catch (error) {
                        showAlert(error.message || 'Failed to save reply', 'error');
                    }
                });
            });
        }

        function openCampaignModal() {
            editingCampaignId = null;
            document.getElementById('modalTitle').textContent = 'Create Campaign';
            document.getElementById('campaignForm').reset();
            document.getElementById('campaignModal').style.display = 'flex';
        }

        function editCampaign(id) {
            const campaign = campaigns.find(c => c._id === id);
            if (!campaign) return;
            editingCampaignId = id;
            document.getElementById('modalTitle').textContent = 'Edit Campaign';
            document.getElementById('campaignName').value = campaign.name;
            document.getElementById('campaignDesc').value = campaign.description;
            document.getElementById('discount').value = campaign.discount;
            document.getElementById('promoCode').value = campaign.promoCode;
            document.getElementById('startDate').value = campaign.startDate.split('T')[0];
            document.getElementById('endDate').value = campaign.endDate.split('T')[0];
            document.getElementById('targetCustomers').value = campaign.targetCustomers || 'All';
            document.getElementById('campaignModal').style.display = 'flex';
        }

        function closeCampaignModal() {
            document.getElementById('campaignModal').style.display = 'none';
            editingCampaignId = null;
        }

        async function deleteCampaign(id, name) {
            if (!confirm(\`Delete campaign "\${name}"?\`)) return;
            try {
                const res = await fetch(\`/api/campaigns/\${id}\`, { 
                    method: 'DELETE',
                    credentials: 'same-origin'
                });
                if (!res.ok) throw new Error();
                showAlert('Campaign deleted', 'success');
                loadCampaigns();
            } catch (e) { showAlert('Error deleting campaign', 'error'); }
        }

        document.getElementById('campaignForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = {
                name: document.getElementById('campaignName').value,
                description: document.getElementById('campaignDesc').value,
                discount: parseInt(document.getElementById('discount').value),
                promoCode: document.getElementById('promoCode').value,
                startDate: document.getElementById('startDate').value,
                endDate: document.getElementById('endDate').value,
                targetCustomers: document.getElementById('targetCustomers').value
            };
            try {
                let res;
                if (editingCampaignId) {
                    res = await fetch(\`/api/campaigns/\${editingCampaignId}\`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'same-origin',
                        body: JSON.stringify(data)
                    });
                } else {
                    res = await fetch('/api/campaigns', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'same-origin',
                        body: JSON.stringify(data)
                    });
                }
                if (!res.ok) { const err = await res.json(); throw new Error(err.message); }
                showAlert(editingCampaignId ? 'Campaign updated' : 'Campaign created', 'success');
                closeCampaignModal();
                loadCampaigns();
            } catch (e) { showAlert(e.message, 'error'); }
        });

        function showAlert(msg, type) {
            const alert = document.getElementById('alert');
            alert.textContent = msg;
            alert.style.display = 'block';
            if (type === 'success') {
                alert.style.background = '#d4edda';
                alert.style.color = '#155724';
                alert.style.border = '1px solid #c3e6cb';
            } else if (type === 'info') {
                alert.style.background = '#d1ecf1';
                alert.style.color = '#0c5460';
                alert.style.border = '1px solid #bee5eb';
            } else {
                alert.style.background = '#f8d7da';
                alert.style.color = '#721c24';
                alert.style.border = '1px solid #f5c6cb';
            }
            setTimeout(() => alert.style.display = 'none', 5000);
        }

        // ============ CHAT SUPPORT FUNCTIONS ============
        let chats = [];
        let currentChatId = null;
        let currentChatFilter = 'all';
        let chatRefreshInterval;

        async function loadChats() {
            try {
                const url = currentChatFilter === 'all' 
                    ? '/api/chat/all' 
                    : \`/api/chat/all?status=\${currentChatFilter}\`;
                    
                const res = await fetch(url, {
                    credentials: 'same-origin'
                });
                if (res.ok) {
                    chats = await res.json();
                    displayChats();
                    await loadChatStats();
                } else {
                    console.error('Error loading chats:', res.status);
                }
            } catch (e) {
                console.error('Error loading chats:', e);
            }
        }

        async function loadChatStats() {
            try {
                const res = await fetch('/api/chat/stats/summary', {
                    credentials: 'same-origin'
                });
                if (res.ok) {
                    const stats = await res.json();
                    document.getElementById('totalChats').textContent = stats.totalChats || 0;
                    document.getElementById('activeChats').textContent = stats.activeChats || 0;
                    document.getElementById('unreadMessages').textContent = stats.unreadMessages || 0;
                }
            } catch (e) {
                console.error('Error loading chat stats:', e);
            }
        }

        function displayChats() {
            const container = document.getElementById('chatsList');
            
            if (chats.length === 0) {
                container.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">No chats found</p>';
                return;
            }

            container.innerHTML = chats.map(chat => {
                const lastMsg = chat.lastMessage;
                const time = new Date(chat.lastMessageAt).toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit'
                });

                return \`
                    <div class="chat-item \${chat.unreadCount > 0 ? 'unread' : ''}" onclick="openChatModal('\${chat._id}')" style="position: relative;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                            <div style="flex: 1;">
                                <h4 style="margin: 0; color: #6f0022;">\${chat.customerName}</h4>
                                <p style="margin: 0.2rem 0 0; font-size: 0.85rem; color: #666;">\${chat.customerEmail}</p>
                            </div>
                            <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 0.3rem;">
                                <span class="chat-badge \${chat.status}">\${chat.status}</span>
                                \${chat.unreadCount > 0 ? \`<div style="background: #dc3545; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 600;">\${chat.unreadCount}</div>\` : ''}
                            </div>
                        </div>
                        \${lastMsg ? \`
                            <p style="margin: 0.5rem 0 0; color: #666; font-size: 0.9rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                <strong>\${lastMsg.senderName}:</strong> \${lastMsg.message}
                            </p>
                        \` : ''}
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                            <p style="margin: 0; font-size: 0.75rem; color: #999;">\${time} • \${chat.messageCount} messages</p>
                            <button style="background: #6f0022; color: white; border: none; padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.85rem; cursor: pointer; font-weight: 600;" onclick="event.stopPropagation(); openChatModal('\${chat._id}');">
                                Reply
                            </button>
                        </div>
                    </div>
                \`;
            }).join('');
        }

        window.filterChats = function(status) {
            currentChatFilter = status;
            
            // Update button styles
            ['all', 'active', 'resolved'].forEach(s => {
                const btn = document.getElementById(\`chat-filter-\${s}\`);
                if (s === status) {
                    btn.style.color = '#6f0022';
                    btn.style.borderBottom = '3px solid #6f0022';
                    btn.style.fontWeight = '600';
                } else {
                    btn.style.color = '#666';
                    btn.style.borderBottom = 'none';
                    btn.style.fontWeight = '400';
                }
            });
            
            loadChats();
        };

        window.openChatModal = async function(chatId) {
            currentChatId = chatId;
            document.getElementById('chatModal').style.display = 'flex';
            
            try {
                const res = await fetch(\`/api/chat/\${chatId}\`, {
                    credentials: 'same-origin'
                });
                if (res.ok) {
                    const chat = await res.json();
                    document.getElementById('chatCustomerName').textContent = chat.customerName;
                    document.getElementById('chatCustomerEmail').textContent = chat.customerEmail;
                    document.getElementById('chatStatus').value = chat.status;
                    
                    // Display messages
                    const messagesContainer = document.getElementById('chatModalMessages');
                    if (chat.messages.length === 0) {
                        messagesContainer.innerHTML = '<p style="text-align: center; color: #999;">No messages yet</p>';
                    } else {
                        messagesContainer.innerHTML = chat.messages.map(msg => {
                            const time = new Date(msg.timestamp).toLocaleString('en-US', {
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true,
                                month: 'short',
                                day: 'numeric'
                            });

                            return \`
                                <div class="chat-message-bubble \${msg.sender}">
                                    <div style="font-size: 0.75rem; font-weight: 600; margin-bottom: 0.3rem; \${msg.sender === 'care-manager' ? 'color: var(--brand-gold-strong);' : 'color: #6f0022;'}">\${msg.senderName}</div>
                                    <div>\${escapeHtml(msg.message)}</div>
                                    <div style="font-size: 0.7rem; opacity: 0.7; margin-top: 0.3rem;">\${time}</div>
                                </div>
                            \`;
                        }).join('');
                        
                        // Scroll to bottom
                        messagesContainer.scrollTop = messagesContainer.scrollHeight;
                    }
                } else {
                    showAlert('Error loading chat', 'error');
                }
            } catch (e) {
                console.error('Error loading chat:', e);
                showAlert('Error loading chat', 'error');
            }
        };

        window.closeChatModal = function() {
            document.getElementById('chatModal').style.display = 'none';
            currentChatId = null;
            loadChats(); // Refresh the chat list
        };

        window.updateChatStatus = async function() {
            if (!currentChatId) return;
            
            const status = document.getElementById('chatStatus').value;
            
            try {
                const res = await fetch(\`/api/chat/\${currentChatId}/status\`, {
                    method: 'PATCH',
                    credentials: 'same-origin',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status })
                });
                
                if (res.ok) {
                    showAlert('Status updated successfully', 'success');
                } else {
                    showAlert('Error updating status', 'error');
                }
            } catch (e) {
                console.error('Error updating status:', e);
                showAlert('Error updating status', 'error');
            }
        };

        document.getElementById('replyForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (!currentChatId) return;
            
            const input = document.getElementById('replyInput');
            const message = input.value.trim();
            
            if (!message) return;
            
            // Disable button while sending
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
            
            try {
                const res = await fetch(\`/api/chat/\${currentChatId}/reply\`, {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message })
                });
                
                if (res.ok) {
                    input.value = '';
                    showAlert('Reply sent successfully!', 'success');
                    // Reload the chat to show the new message
                    await openChatModal(currentChatId);
                } else {
                    const error = await res.json();
                    showAlert(error.message || 'Error sending reply', 'error');
                }
            } catch (e) {
                console.error('Error sending reply:', e);
                showAlert('Error sending reply: ' + e.message, 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        function startChatRefresh() {
            chatRefreshInterval = setInterval(() => {
                loadChats();
                if (currentChatId) {
                    openChatModal(currentChatId);
                }
            }, 10000); // Refresh every 10 seconds
        }

        function stopChatRefresh() {
            if (chatRefreshInterval) {
                clearInterval(chatRefreshInterval);
            }
        }

        window.addEventListener('beforeunload', stopChatRefresh);

        // ============ END CHAT SUPPORT FUNCTIONS ============

        function logout() { authManager.logout(); }

        // Make functions available globally for onclick/onchange handlers
        window.logout = logout;
        window.openMessageModal = openMessageModal;
        window.closeMessageModal = closeMessageModal;
        window.filterMessages = filterMessages;
        window.editMessage = editMessage;
        window.deleteMessage = deleteMessage;
        window.broadcastMessage = broadcastMessage;
        window.openCampaignModal = openCampaignModal;
        window.closeCampaignModal = closeCampaignModal;
        window.editCampaign = editCampaign;
        window.deleteCampaign = deleteCampaign;

        (async () => { 
            const auth = await checkAuth(); 
            if (auth) { 
                loadMessages(); 
                loadCampaigns(); 
                loadFeedback(); 
                loadChats();
                startChatRefresh();
            } 
        })();
    `}]};function zf(){const l=v.useRef(null);return v.useEffect(()=>{const c=l.current;if(!c)return;document.title=Wa.title,c.innerHTML=Wa.html;const s=[];for(const u of Wa.scripts||[]){const f=document.createElement("script");u.type&&(f.type=u.type),f.textContent=u.content,c.appendChild(f),s.push(f)}return()=>{s.forEach(u=>u.remove()),c.innerHTML=""}},[]),n.jsx("div",{ref:l})}class _f{constructor(){this.userType=null}getCurrentPathWithQuery(){const c=`${window.location.pathname}${window.location.search}${window.location.hash}`;return c.startsWith("/")?c:"/"}async apiRequest(c,s={}){const u={credentials:"same-origin",headers:{"Content-Type":"application/json",...s.headers}},f={...s,...u,headers:{...u.headers,...s.headers}};return await fetch(c,f)}async checkStaffAuth(c=null){try{const s=await this.apiRequest("/api/auth/me");if(!s.ok)return this.redirectToLogin("staff"),null;const u=await s.json();return u.isActive?c&&u.role!==c&&u.role!=="Admin"?(alert(`Access denied. This page requires ${c} role.`),this.redirectToLogin("staff"),null):u.status!=="Approved"?{...u,needsApproval:!0}:(this.userType="staff",u):(alert("Your account has been deactivated. Please contact administrator."),this.redirectToLogin("staff"),null)}catch(s){return console.error("Staff auth check failed:",s),this.redirectToLogin("staff"),null}}async checkCustomerAuth(c={}){const{redirectOnFail:s=!0,returnToCurrentPath:u=!0}=c;try{const f=await this.apiRequest("/api/customer/me");if(!f.ok)return s&&this.redirectToLogin("customer",{returnTo:u?this.getCurrentPathWithQuery():null}),null;const h=(await f.json()).customer;return h.isActive?(this.userType="customer",h):(alert("Your account has been deactivated. Please contact support."),s&&this.redirectToLogin("customer",{returnTo:u?this.getCurrentPathWithQuery():null}),null)}catch(f){return console.error("Customer auth check failed:",f),s&&this.redirectToLogin("customer",{returnTo:u?this.getCurrentPathWithQuery():null}),null}}async loginStaff(c,s){try{const u=await this.apiRequest("/api/auth/login",{method:"POST",body:JSON.stringify({email:c,password:s})}),f=await u.json();if(!u.ok)throw new Error(f.message||"Login failed");return this.userType="staff",{success:!0,data:f}}catch(u){return{success:!1,error:u.message}}}async loginCustomer(c,s){try{const u=await this.apiRequest("/api/customer/login",{method:"POST",body:JSON.stringify({email:c,password:s})}),f=await u.json();if(!u.ok)throw new Error(f.message||"Login failed");return this.userType="customer",{success:!0,data:f}}catch(u){return{success:!1,error:u.message}}}async logout(){try{const c=this.userType==="customer"?"/api/customer/logout":"/api/auth/logout";await this.apiRequest(c,{method:"POST"})}catch(c){console.error("Logout error:",c)}finally{this.redirectToLogin(this.userType||"staff",{returnTo:null})}}redirectToLogin(c,s={}){const{returnTo:u=this.getCurrentPathWithQuery()}=s,f=c==="customer"?"/customer-login":"/staff-login",w=u&&u.startsWith("/")?`?redirect=${encodeURIComponent(u)}`:"",h=`${f}${w}`;window.location.pathname!==f&&(window.location.href=h)}getRoleDashboard(c){return{Admin:"/admin-dashboard","Product Management":"/product-management-dashboard","Order Management":"/order-management-dashboard",Inventory:"/inventory-dashboard","Customer Care":"/customer-care-dashboard","Loyalty Management":"/loyalty-management-dashboard"}[c]||"/admin-dashboard"}}const le=new _f;typeof window<"u"&&(window.AuthManager=le);function $f(){const[l,c]=v.useState(null),[s,u]=v.useState(()=>JSON.parse(localStorage.getItem("saranyaCart")||"[]")),[f,w]=v.useState(!1),[h,N]=v.useState(!1),[S,P]=v.useState(null),[E,C]=v.useState(""),[F,U]=v.useState(""),[j,I]=v.useState("");v.useEffect(()=>{document.title="Shopping Cart - Saranya Jewellery";async function ee(){const ne=await le.checkCustomerAuth();ne&&(c(ne),ne.phone&&U(ne.phone))}ee()},[]);const M=v.useMemo(()=>s.reduce((ee,ne)=>ee+Number(ne.quantity||0),0),[s]),W=v.useMemo(()=>s.reduce((ee,ne)=>ee+Number(ne.price||0)*Number(ne.quantity||0),0),[s]),R=Math.round(W*.03),Q=W+R;function oe(ee){u(ee),localStorage.setItem("saranyaCart",JSON.stringify(ee))}function H(ee,ne){const ue=[...s];ue[ee].quantity+=ne,ue[ee].quantity<=0&&ue.splice(ee,1),oe(ue)}function O(ee){if(!window.confirm("Remove this item from cart?"))return;const ne=[...s];ne.splice(ee,1),oe(ne)}function Z(){if(!s.length){alert("Your cart is empty");return}w(!0)}function he(ee){if(P(ee||null),!ee){C("");return}const ne=new FileReader;ne.onload=ue=>{C(String(ue.target?.result||""))},ne.readAsDataURL(ee)}async function xe(ee){if(ee.preventDefault(),!s.length){alert("Your cart is empty. Please add items first.");return}for(const ne of s)if(!ne.productId||!ne.name||!ne.price){alert("Invalid cart data. Please clear your cart and add items again.");return}N(!0);try{let ne=null;if(S){const _=new FormData;_.append("receipt",S);const ie=await fetch("/api/upload/receipt",{method:"POST",credentials:"same-origin",body:_});if(!ie.ok){let J="Failed to upload receipt";try{J=(await ie.json()).message||J}catch{J="Failed to upload receipt (server error)"}throw new Error(J)}ne=(await ie.json()).imagePath}const ue={items:s.map(_=>({productId:_.productId,name:_.name,price:_.price,quantity:_.quantity,imageUrl:_.imageUrl||null})),phoneNumber:F.trim(),paymentReceipt:ne,orderNotes:j.trim(),subtotal:W,tax:R,total:Q},Ie=await le.apiRequest("/api/orders",{method:"POST",body:JSON.stringify(ue)});if(!Ie.ok){let _="Failed to place order";try{_=(await Ie.json()).message||_}catch{_=`Server error (${Ie.status})`}throw new Error(_)}const z=await Ie.json();oe([]),alert(`Order placed successfully! Order #${z.orderNumber}
You will be notified when your order is ready for collection.`),window.location.href="/customer-orders"}catch(ne){console.error("Error placing order:",ne),alert(`Failed to place order: ${ne.message}`),N(!1)}}function Le(){le.logout()}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"top-bar",children:[n.jsxs("div",{children:[n.jsx("i",{className:"fas fa-phone"})," ",n.jsx("a",{href:"tel:+1234567890",children:"Contact Us"})]}),n.jsxs("div",{children:[n.jsx("span",{style:{marginRight:"1rem",color:"var(--brand-gold-strong)"},children:l?.fullName||l?.email||"Loading..."}),n.jsxs("span",{style:{marginRight:"1rem"},children:["Loyalty: ",l?.loyaltyPoints||0," Points"]}),n.jsx("button",{type:"button",className:"logout-btn",onClick:Le,style:{fontSize:"0.85rem",padding:"0.3rem 0.8rem"},children:"Logout"})]})]}),n.jsxs("header",{className:"header",children:[n.jsxs("div",{className:"nav",children:[n.jsx("a",{href:"/",children:"Home"}),n.jsx("a",{href:"/customer-shop",children:"Shop"}),n.jsx("a",{href:"/customer-orders",children:"My Orders"}),n.jsx("a",{href:"/customer-loyalty",children:"Loyalty"}),n.jsx("a",{href:"/customer-support",children:"Support"})]}),n.jsx("div",{className:"logo",children:"SARANYA JEWELLERY"}),n.jsxs("div",{className:"header-icons",children:[n.jsx("i",{className:"fas fa-search header-icon"}),n.jsx("a",{href:"/customer-dashboard?openProfile=true",children:n.jsx("i",{className:"fas fa-user header-icon"})}),n.jsxs("a",{href:"/customer-cart",style:{position:"relative"},children:[n.jsx("i",{className:"fas fa-shopping-cart header-icon"}),M>0?n.jsx("span",{style:{position:"absolute",top:"-8px",right:"-8px",background:"var(--brand-gold-strong)",color:"white",borderRadius:"50%",padding:"2px 6px",fontSize:"0.7rem"},children:M}):null]})]})]}),n.jsx("main",{children:n.jsxs("div",{className:"container",style:{padding:"2rem",maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h1",{style:{textAlign:"center",marginBottom:"2rem",fontFamily:"'Cormorant Garamond', serif",color:"var(--brand-burgundy)"},children:"Shopping Cart"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"2rem"},children:[n.jsx("div",{children:s.length?s.map((ee,ne)=>n.jsxs("div",{style:{background:"white",padding:"1.5rem",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",marginBottom:"1rem",display:"flex",gap:"1.5rem"},children:[n.jsx("img",{src:ee.imageUrl||"/SaranyaLOGO.jpg",alt:ee.name,style:{width:"120px",height:"120px",objectFit:"cover",borderRadius:"4px"}}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h3",{style:{margin:"0 0 0.5rem",color:"var(--brand-burgundy)"},children:ee.name}),n.jsxs("p",{style:{color:"#666",margin:"0.25rem 0",fontSize:"0.9rem"},children:[ee.category," - ",ee.karat]}),n.jsxs("p",{style:{color:"var(--brand-gold-strong)",fontWeight:600,fontSize:"1.1rem",margin:"0.5rem 0"},children:["Rs. ",Number(ee.price||0).toLocaleString()]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"1rem"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[n.jsx("button",{type:"button",onClick:()=>H(ne,-1),style:{background:"#f0f0f0",border:"none",padding:"0.5rem 0.8rem",borderRadius:"4px",cursor:"pointer",fontSize:"1rem"},children:"-"}),n.jsx("span",{style:{padding:"0 1rem",fontWeight:600},children:ee.quantity}),n.jsx("button",{type:"button",onClick:()=>H(ne,1),style:{background:"#f0f0f0",border:"none",padding:"0.5rem 0.8rem",borderRadius:"4px",cursor:"pointer",fontSize:"1rem"},children:"+"})]}),n.jsxs("button",{type:"button",onClick:()=>O(ne),style:{background:"none",border:"none",color:"#dc3545",cursor:"pointer",padding:"0.5rem 1rem"},children:[n.jsx("i",{className:"fas fa-trash"})," Remove"]})]})]}),n.jsx("div",{style:{textAlign:"right"},children:n.jsxs("p",{style:{fontWeight:600,fontSize:"1.2rem",color:"var(--brand-burgundy)",margin:0},children:["Rs. ",Number(ee.price*ee.quantity||0).toLocaleString()]})})]},`${ee.productId}-${ne}`)):n.jsxs("div",{style:{textAlign:"center",padding:"3rem",background:"white",borderRadius:"8px"},children:[n.jsx("i",{className:"fas fa-shopping-cart",style:{fontSize:"4rem",color:"#ddd",marginBottom:"1rem"}}),n.jsx("h2",{style:{color:"#999",marginBottom:"1rem"},children:"Your cart is empty"}),n.jsx("a",{href:"/customer-shop",style:{display:"inline-block",background:"var(--brand-burgundy)",color:"white",padding:"1rem 2rem",borderRadius:"4px",textDecoration:"none"},children:"Browse Products"})]})}),n.jsx("div",{children:n.jsxs("div",{style:{background:"white",padding:"2rem",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",position:"sticky",top:"2rem"},children:[n.jsx("h2",{style:{margin:"0 0 1.5rem",fontFamily:"'Cormorant Garamond', serif",color:"var(--brand-burgundy)"},children:"Order Summary"}),n.jsxs("div",{style:{marginBottom:"1rem",paddingBottom:"1rem",borderBottom:"1px solid #eee"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[n.jsxs("span",{children:["Subtotal (",M," items):"]}),n.jsxs("span",{children:["Rs. ",W.toLocaleString()]})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[n.jsx("span",{children:"Tax (3%):"}),n.jsxs("span",{children:["Rs. ",R.toLocaleString()]})]})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"1.2rem",fontWeight:600,marginBottom:"1rem"},children:[n.jsx("span",{children:"Total:"}),n.jsxs("span",{style:{color:"var(--brand-gold-strong)"},children:["Rs. ",Q.toLocaleString()]})]}),n.jsx("div",{style:{background:"#d1f2eb",padding:"0.8rem",borderRadius:"4px",marginBottom:"1rem",textAlign:"center"},children:n.jsxs("p",{style:{margin:0,color:"#0d6655",fontSize:"0.9rem"},children:[n.jsx("strong",{children:"Shop Collection Only"})," - Visit our store to collect"]})}),n.jsx("button",{type:"button",onClick:Z,disabled:!s.length,style:{width:"100%",background:"var(--brand-burgundy)",color:"white",border:"none",padding:"1rem",borderRadius:"4px",cursor:"pointer",fontSize:"1rem",fontWeight:600,marginBottom:"1rem",opacity:s.length?1:.65},children:"Proceed to Checkout"}),n.jsxs("a",{href:"/customer-shop",style:{display:"block",textAlign:"center",color:"var(--brand-burgundy)",textDecoration:"none"},children:[n.jsx("i",{className:"fas fa-arrow-left"})," Continue Shopping"]})]})})]})]})}),f?n.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.7)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",overflowY:"auto",padding:"2rem"},children:n.jsx("div",{style:{background:"white",borderRadius:"8px",maxWidth:"600px",width:"100%",maxHeight:"90vh",overflowY:"auto",position:"relative"},children:n.jsxs("div",{style:{padding:"2rem"},children:[n.jsx("h2",{style:{margin:"0 0 1.5rem",fontFamily:"'Cormorant Garamond', serif",color:"var(--brand-burgundy)"},children:"Checkout"}),n.jsxs("div",{style:{background:"#d1f2eb",padding:"1rem",borderRadius:"8px",marginBottom:"1.5rem",textAlign:"center"},children:[n.jsx("p",{style:{margin:0,fontWeight:600,color:"#0d6655"},children:"Shop Collection"}),n.jsx("p",{style:{margin:"0.25rem 0 0",fontSize:"0.9rem",color:"#0d6655"},children:"Your order will be prepared for collection at Saranya Jewellery"})]}),n.jsxs("form",{onSubmit:xe,children:[n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:600},children:"Phone Number *"}),n.jsx("input",{type:"tel",required:!0,value:F,onChange:ee=>U(ee.target.value),style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px"}})]}),n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:600},children:"Payment Method"}),n.jsxs("div",{style:{background:"#f8f9fa",padding:"1rem",borderRadius:"4px",border:"1px solid #ddd"},children:[n.jsx("p",{style:{margin:0,fontWeight:600},children:"Bank Transfer"}),n.jsx("p",{style:{margin:"0.5rem 0 0",fontSize:"0.85rem",color:"#666"},children:"Please transfer the total amount to our bank account and upload the receipt/screenshot below."})]})]}),n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:600},children:"Payment Receipt / Screenshot (Optional)"}),n.jsx("input",{type:"file",accept:"image/*",onChange:ee=>he(ee.target.files?.[0]),style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px"}}),n.jsx("p",{style:{margin:"0.5rem 0 0",fontSize:"0.8rem",color:"#666"},children:"Upload a screenshot or photo of your bank transfer receipt (max 5MB). You can also submit this later."}),E?n.jsx("div",{style:{marginTop:"0.5rem"},children:n.jsx("img",{src:E,alt:"Receipt preview",style:{maxWidth:"200px",borderRadius:"4px",border:"1px solid #ddd"}})}):null]}),n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:600},children:"Order Notes (Optional)"}),n.jsx("textarea",{value:j,onChange:ee=>I(ee.target.value),style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"inherit",minHeight:"80px"},placeholder:"Any special instructions..."})]}),n.jsxs("div",{style:{background:"#f8f9fa",padding:"1rem",borderRadius:"4px",marginBottom:"1.5rem"},children:[n.jsx("h3",{style:{margin:"0 0 0.5rem",fontSize:"1rem"},children:"Order Summary"}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.25rem"},children:[n.jsx("span",{children:"Total Amount:"}),n.jsxs("strong",{style:{color:"var(--brand-gold-strong)"},children:["Rs. ",Q.toLocaleString()]})]})]}),n.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[n.jsx("button",{type:"button",onClick:()=>w(!1),style:{flex:1,background:"#6c757d",color:"white",border:"none",padding:"1rem",borderRadius:"4px",cursor:"pointer"},children:"Cancel"}),n.jsx("button",{type:"submit",disabled:h,style:{flex:1,background:"var(--brand-burgundy)",color:"white",border:"none",padding:"1rem",borderRadius:"4px",cursor:"pointer",fontWeight:600},children:h?"Placing Order...":"Place Order"})]})]})]})})}):null]})}const Ff=["Pending","Confirmed","Invoice Created","Payment Received","Preparing","Ready for Collection"];function Df(l){return[1,2,3,4,5].map(c=>c<=Number(l||0)?"★":"☆").join("")}function qa(l){return`${l.orderId}:${l.productId}`}function Uf(){const[l,c]=v.useState(null),[s]=v.useState(()=>JSON.parse(localStorage.getItem("saranyaCart")||"[]")),[u,f]=v.useState({totalOrders:0,activeOrders:0,wishlistCount:0}),[w,h]=v.useState([]),[N,S]=v.useState([]),[P,E]=v.useState({}),[C,F]=v.useState(!1),[U,j]=v.useState(!1),[I,M]=v.useState({fullName:"",email:"",phone:"",street:"",city:"",state:"",zipCode:"",country:""}),[W,R]=v.useState({currentPassword:"",newPassword:"",confirmPassword:""}),Q=v.useMemo(()=>s.reduce((z,_)=>z+Number(_.quantity||0),0),[s]);v.useEffect(()=>{document.title="Customer Dashboard - Saranya Jewellery"},[]),v.useEffect(()=>{async function z(){const _=await le.checkCustomerAuth();_&&(c(_),M({fullName:_.fullName||"",email:_.email||"",phone:_.phone||"",street:_.address?.street||"",city:_.address?.city||"",state:_.address?.state||"",zipCode:_.address?.zipCode||"",country:_.address?.country||""}))}z()},[]),v.useEffect(()=>{if(!l)return;async function z(){await Promise.all([oe(),H(),O()])}z()},[l]),v.useEffect(()=>{if(!l)return;new URLSearchParams(window.location.search).get("openProfile")==="true"&&(F(!0),window.history.replaceState({},document.title,window.location.pathname))},[l]);async function oe(){try{const z=await le.apiRequest("/api/orders/my-orders");if(!z.ok){f({totalOrders:0,activeOrders:0,wishlistCount:0});return}const _=await z.json();f({totalOrders:_.length,activeOrders:_.filter(ie=>Ff.includes(ie.status)).length,wishlistCount:0})}catch(z){console.error("Error loading order stats:",z),f({totalOrders:0,activeOrders:0,wishlistCount:0})}}async function H(){try{const z=await le.apiRequest("/api/messages/active");if(!z.ok){h([]);return}const _=await z.json();h(_||[])}catch(z){console.error("Error loading promotions:",z),h([])}}async function O(){try{const z=await le.apiRequest("/api/reviews/customer/eligible-items");if(!z.ok)throw new Error("Failed to load review items");const _=await z.json();S(_);const ie={};_.forEach(D=>{const J=qa(D);ie[J]={rating:D.review?.rating||0,comment:D.review?.comment||""}}),E(ie)}catch(z){console.error("Error loading review items:",z),S([]),E({})}}function Z(){if(!l){alert("Please wait, loading profile...");return}F(!0),j(!1)}function he(){F(!1),j(!0),R({currentPassword:"",newPassword:"",confirmPassword:""})}function xe(){j(!1),F(!0)}async function Le(z){z.preventDefault();try{const _=await le.apiRequest("/api/customer/profile",{method:"PUT",body:JSON.stringify({fullName:I.fullName,phone:I.phone,address:{street:I.street,city:I.city,state:I.state,zipCode:I.zipCode,country:I.country}})}),ie=await _.json();if(!_.ok)throw new Error(ie.message||"Failed to update profile");c(ie.customer),alert("Profile updated successfully!"),F(!1)}catch(_){alert(_.message||"Failed to update profile. Please try again.")}}async function ee(z){if(z.preventDefault(),W.newPassword!==W.confirmPassword){alert("New passwords do not match!");return}try{const _=await le.apiRequest("/api/customer/change-password",{method:"PUT",body:JSON.stringify({currentPassword:W.currentPassword,newPassword:W.newPassword})}),ie=await _.json();if(!_.ok)throw new Error(ie.message||"Failed to change password");alert("Password changed successfully!"),j(!1)}catch(_){alert(_.message||"Failed to change password. Please try again.")}}async function ne(z){const _=qa(z),ie=P[_]||{rating:0,comment:""},D=Number(ie.rating||0);if(D<1||D>5){alert("Please select a rating between 1 and 5 stars.");return}try{const J=await le.apiRequest("/api/reviews",{method:"POST",body:JSON.stringify({orderId:z.orderId,productId:z.productId,rating:D,comment:ie.comment||""})}),q=await J.json();if(!J.ok)throw new Error(q.message||"Failed to save review");alert("Review saved successfully."),await O()}catch(J){alert(J.message||"Failed to save review")}}async function ue(z){if(z&&window.confirm("Delete this rating and review?"))try{const _=await le.apiRequest(`/api/reviews/${z}`,{method:"DELETE"}),ie=await _.json();if(!_.ok)throw new Error(ie.message||"Failed to delete review");alert("Review deleted successfully."),await O()}catch(_){alert(_.message||"Failed to delete review")}}function Ie(){le.logout()}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"top-bar",children:[n.jsxs("div",{children:[n.jsx("i",{className:"fas fa-phone"})," ",n.jsx("a",{href:"tel:+1234567890",children:"Contact Us"})]}),n.jsxs("div",{children:[n.jsx("span",{style:{marginRight:"1rem",color:"var(--brand-gold-strong)"},children:l?.fullName||l?.email||"Loading..."}),n.jsxs("span",{style:{marginRight:"1rem"},children:["Loyalty: ",l?.loyaltyPoints||0," Points"]}),n.jsx("button",{type:"button",className:"logout-btn",onClick:Ie,style:{fontSize:"0.85rem",padding:"0.3rem 0.8rem"},children:"Logout"})]})]}),n.jsxs("header",{className:"header",children:[n.jsxs("div",{className:"nav",children:[n.jsx("a",{href:"/",children:"Home"}),n.jsx("a",{href:"/customer-shop",children:"Shop"}),n.jsx("a",{href:"/customer-orders",children:"My Orders"}),n.jsx("a",{href:"/customer-loyalty",children:"Loyalty"}),n.jsx("a",{href:"/customer-support",children:"Support"})]}),n.jsx("div",{className:"logo",children:"SARANYA JEWELLERY"}),n.jsxs("div",{className:"header-icons",children:[n.jsx("i",{className:"fas fa-search header-icon"}),n.jsx("i",{className:"fas fa-user header-icon",onClick:Z,style:{cursor:"pointer"}}),n.jsxs("a",{href:"/customer-cart",style:{position:"relative"},children:[n.jsx("i",{className:"fas fa-shopping-cart header-icon"}),Q>0?n.jsx("span",{style:{position:"absolute",top:"-8px",right:"-8px",background:"var(--brand-gold-strong)",color:"white",borderRadius:"50%",padding:"2px 6px",fontSize:"0.7rem"},children:Q}):null]})]})]}),n.jsx("main",{children:n.jsxs("div",{className:"dashboard-container",children:[n.jsxs("div",{className:"welcome-section",children:[n.jsx("h2",{children:"Welcome Back"}),n.jsx("p",{children:"Discover our latest collections and manage your orders"})]}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon",children:n.jsx("i",{className:"fas fa-box"})}),n.jsx("h3",{className:"stat-number",children:u.totalOrders}),n.jsx("p",{className:"stat-label",children:"Total Orders"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon",children:n.jsx("i",{className:"fas fa-gem"})}),n.jsx("h3",{className:"stat-number",children:l?.loyaltyPoints||0}),n.jsx("p",{className:"stat-label",children:"Loyalty Points"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon",children:n.jsx("i",{className:"fas fa-truck"})}),n.jsx("h3",{className:"stat-number",children:u.activeOrders}),n.jsx("p",{className:"stat-label",children:"Active Orders"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon",children:n.jsx("i",{className:"fas fa-heart"})}),n.jsx("h3",{className:"stat-number",children:u.wishlistCount}),n.jsx("p",{className:"stat-label",children:"Wishlist Items"})]})]}),w.length>0?n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"Latest Offers and Announcements"})}),n.jsx("div",{className:"section-content",children:w.map(z=>{const _=z.type==="promotion"?"fa-gift":z.type==="announcement"?"fa-bullhorn":z.type==="welcome"?"fa-handshake":"fa-circle-info";return n.jsx("div",{style:{background:"linear-gradient(135deg, #6f0022 0%, #8b0028 100%)",color:"white",padding:"1.5rem",borderRadius:"8px",marginBottom:"1rem",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"},children:n.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"1rem"},children:[n.jsx("div",{style:{fontSize:"2rem"},children:n.jsx("i",{className:`fas ${_}`})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"var(--brand-gold-strong)"},children:z.title}),n.jsx("p",{style:{margin:0,lineHeight:1.6},children:z.message}),z.validUntil?n.jsxs("p",{style:{fontSize:"0.85rem",color:"#ddd",marginTop:"0.5rem"},children:["Valid until: ",new Date(z.validUntil).toLocaleDateString()]}):null]})]})},z._id||z.title)})})]}):null,n.jsxs("div",{className:"section",style:{marginTop:"2rem"},children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"Rate Your Purchased Items"})}),n.jsx("div",{className:"section-content",children:N.length?N.slice(0,20).map(z=>{const _=qa(z),ie=P[_]||{rating:0,comment:""};return n.jsxs("div",{style:{border:"1px solid #eee",borderRadius:"10px",padding:"1rem",marginBottom:"1rem"},children:[n.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",marginBottom:"0.9rem"},children:[n.jsx("img",{src:z.productImage||"/SaranyaLOGO.jpg",alt:z.productName,style:{width:"70px",height:"70px",objectFit:"cover",borderRadius:"8px",border:"1px solid #eee"}}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h4",{style:{margin:"0 0 0.3rem",color:"var(--brand-burgundy)"},children:z.productName}),n.jsxs("p",{style:{margin:"0.2rem 0",color:"#666",fontSize:"0.9rem"},children:["Order: ",z.orderNumber," • ",new Date(z.orderDate).toLocaleDateString()]}),n.jsxs("p",{style:{margin:"0.2rem 0",color:"#666",fontSize:"0.9rem"},children:["Status: ",z.orderStatus]})]})]}),n.jsx("div",{style:{display:"flex",gap:"0.35rem",marginBottom:"0.6rem"},children:[1,2,3,4,5].map(D=>n.jsx("button",{type:"button",onClick:()=>{E(J=>({...J,[_]:{...ie,rating:D}}))},style:{border:"none",background:"transparent",cursor:"pointer",fontSize:"1.35rem",lineHeight:1,color:D<=Number(ie.rating||0)?"#e0bf63":"#ddd"},children:"★"},D))}),n.jsx("textarea",{rows:2,maxLength:1e3,placeholder:"Write a short review (optional)",style:{width:"100%",border:"1px solid #ddd",borderRadius:"6px",padding:"0.65rem",marginBottom:"0.6rem"},value:ie.comment,onChange:D=>{const J=D.target.value;E(q=>({...q,[_]:{...ie,comment:J}}))}}),n.jsxs("div",{style:{display:"flex",gap:"0.6rem",flexWrap:"wrap",alignItems:"center"},children:[n.jsx("button",{type:"button",onClick:()=>ne(z),style:{background:"var(--brand-burgundy)",color:"white",border:"none",borderRadius:"6px",padding:"0.6rem 1rem",cursor:"pointer",fontWeight:600},children:z.review?"Update Review":"Submit Review"}),z.review?n.jsx("button",{type:"button",onClick:()=>ue(z.review._id),style:{background:"#dc3545",color:"white",border:"none",borderRadius:"6px",padding:"0.6rem 1rem",cursor:"pointer",fontWeight:600},children:"Delete Rating"}):null]}),z.review?n.jsxs("div",{style:{marginTop:"0.9rem",background:"#faf7ee",borderRadius:"6px",padding:"0.8rem"},children:[n.jsxs("p",{style:{margin:"0 0 0.35rem",color:"#666",fontSize:"0.9rem"},children:["Your review: ",n.jsx("span",{style:{color:"#e0bf63"},children:Df(z.review.rating)})]}),z.review.careReply?.comment?n.jsxs("p",{style:{margin:0,color:"#6f0022",fontSize:"0.92rem"},children:[n.jsx("strong",{children:"Customer Care Reply:"})," ",z.review.careReply.comment]}):null]}):null]},_)}):n.jsxs("div",{className:"empty-state",children:[n.jsx("i",{className:"fas fa-star",style:{fontSize:"2.5rem",color:"#ddd",marginBottom:"1rem"}}),n.jsx("p",{style:{margin:0},children:"Place an order to start adding product reviews."})]})})]})]})}),C?n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1e3,overflowY:"auto"},children:n.jsxs("div",{style:{maxWidth:"600px",margin:"2rem auto",background:"white",borderRadius:"8px",padding:"2rem"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem"},children:[n.jsx("h2",{style:{margin:0,color:"var(--brand-burgundy)"},children:"Edit Profile"}),n.jsx("button",{type:"button",onClick:()=>F(!1),style:{background:"none",border:"none",fontSize:"1.5rem",cursor:"pointer",color:"#999"},children:"×"})]}),n.jsxs("form",{onSubmit:Le,children:[n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:600},children:"Full Name *"}),n.jsx("input",{type:"text",required:!0,value:I.fullName,onChange:z=>M(_=>({..._,fullName:z.target.value})),style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px"}})]}),n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:600},children:"Email (Read Only)"}),n.jsx("input",{type:"email",readOnly:!0,value:I.email,style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px",background:"#f5f5f5"}})]}),n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:600},children:"Phone Number"}),n.jsx("input",{type:"tel",value:I.phone,onChange:z=>M(_=>({..._,phone:z.target.value})),style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px"}})]}),n.jsx("h3",{style:{margin:"2rem 0 1rem",color:"var(--brand-burgundy)",fontSize:"1.1rem"},children:"Address"}),n.jsx("div",{style:{marginBottom:"1rem"},children:n.jsx("input",{type:"text",placeholder:"Street",value:I.street,onChange:z=>M(_=>({..._,street:z.target.value})),style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px"}})}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1rem"},children:[n.jsx("input",{type:"text",placeholder:"City",value:I.city,onChange:z=>M(_=>({..._,city:z.target.value})),style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px"}}),n.jsx("input",{type:"text",placeholder:"State",value:I.state,onChange:z=>M(_=>({..._,state:z.target.value})),style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px"}})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1.5rem"},children:[n.jsx("input",{type:"text",placeholder:"ZIP Code",value:I.zipCode,onChange:z=>M(_=>({..._,zipCode:z.target.value})),style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px"}}),n.jsx("input",{type:"text",placeholder:"Country",value:I.country,onChange:z=>M(_=>({..._,country:z.target.value})),style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px"}})]}),n.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[n.jsx("button",{type:"button",onClick:he,style:{flex:1,background:"#6c757d",color:"white",border:"none",padding:"1rem",borderRadius:"4px",cursor:"pointer"},children:"Change Password"}),n.jsx("button",{type:"submit",style:{flex:1,background:"var(--brand-burgundy)",color:"white",border:"none",padding:"1rem",borderRadius:"4px",cursor:"pointer",fontWeight:600},children:"Save Changes"})]})]})]})}):null,U?n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1001,overflowY:"auto"},children:n.jsxs("div",{style:{maxWidth:"500px",margin:"4rem auto",background:"white",borderRadius:"8px",padding:"2rem"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem"},children:[n.jsx("h2",{style:{margin:0,color:"var(--brand-burgundy)"},children:"Change Password"}),n.jsx("button",{type:"button",onClick:xe,style:{background:"none",border:"none",fontSize:"1.5rem",cursor:"pointer",color:"#999"},children:"×"})]}),n.jsxs("form",{onSubmit:ee,children:[n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:600},children:"Current Password *"}),n.jsx("input",{type:"password",required:!0,value:W.currentPassword,onChange:z=>R(_=>({..._,currentPassword:z.target.value})),style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px"}})]}),n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:600},children:"New Password *"}),n.jsx("input",{type:"password",required:!0,minLength:6,value:W.newPassword,onChange:z=>R(_=>({..._,newPassword:z.target.value})),style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px"}})]}),n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:600},children:"Confirm New Password *"}),n.jsx("input",{type:"password",required:!0,minLength:6,value:W.confirmPassword,onChange:z=>R(_=>({..._,confirmPassword:z.target.value})),style:{width:"100%",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"4px"}})]}),n.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[n.jsx("button",{type:"button",onClick:xe,style:{flex:1,background:"#6c757d",color:"white",border:"none",padding:"1rem",borderRadius:"4px",cursor:"pointer"},children:"Cancel"}),n.jsx("button",{type:"submit",style:{flex:1,background:"var(--brand-burgundy)",color:"white",border:"none",padding:"1rem",borderRadius:"4px",cursor:"pointer",fontWeight:600},children:"Update Password"})]})]})]})}):null]})}function Hf(){const l=new URLSearchParams(window.location.search).get("redirect");return!l||!l.startsWith("/")||l.startsWith("//")||l.startsWith("/customer-login")?"/customer-dashboard":l}function Wf(){const[l,c]=v.useState(""),[s,u]=v.useState(""),[f,w]=v.useState(!1),[h,N]=v.useState({message:"",type:"error"}),[S,P]=v.useState(0),[E,C]=v.useState("/customer-login"),F=v.useMemo(()=>Hf(),[]),U=`/customer-register?redirect=${encodeURIComponent(F)}`;v.useEffect(()=>{document.title="Customer Login - Saranya Jewellery";const R=JSON.parse(localStorage.getItem("saranyaCart")||"[]").reduce((oe,H)=>oe+Number(H.quantity||0),0);P(R);async function Q(){try{const oe=await le.apiRequest("/api/customer/me");if(!oe.ok)return;(await oe.json()).customer&&C("/customer-dashboard")}catch{}}Q()},[]);function j(W,R="error"){N({message:W,type:R}),window.setTimeout(()=>N({message:"",type:"error"}),5e3)}function I(W,R){W.preventDefault(),le.redirectToLogin("customer",{returnTo:R})}async function M(W){W.preventDefault();const R=l.trim();if(!R||!s){j("Please fill in all fields");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(R)){j("Please enter a valid email address");return}w(!0);const oe=await le.loginCustomer(R,s);if(oe.success){j("Login successful! Redirecting...","success"),window.setTimeout(()=>{window.location.href=F},500);return}j(oe.error||"Invalid email or password"),w(!1)}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"top-bar",children:[n.jsxs("div",{children:[n.jsx("i",{className:"fas fa-phone"})," ",n.jsx("a",{href:"tel:+1234567890",children:"Contact Us"})]}),n.jsx("div",{})]}),n.jsxs("header",{className:"header",children:[n.jsxs("div",{className:"nav",children:[n.jsx("a",{href:"/",children:"Home"}),n.jsx("a",{href:"/customer-shop",children:"Shop"}),n.jsx("a",{href:"/customer-orders",onClick:W=>I(W,"/customer-orders"),children:"My Orders"}),n.jsx("a",{href:"/customer-loyalty",onClick:W=>I(W,"/customer-loyalty"),children:"Loyalty"}),n.jsx("a",{href:"/customer-support",onClick:W=>I(W,"/customer-support"),children:"Support"})]}),n.jsx("div",{className:"logo",children:"SARANYA JEWELLERY"}),n.jsxs("div",{className:"header-icons",children:[n.jsx("i",{className:"fas fa-search header-icon"}),n.jsx("a",{href:E,children:n.jsx("i",{className:"fas fa-user header-icon"})}),n.jsxs("a",{href:"/customer-cart",style:{position:"relative"},children:[n.jsx("i",{className:"fas fa-shopping-cart header-icon"}),S>0?n.jsx("span",{style:{position:"absolute",top:"-8px",right:"-8px",background:"var(--brand-gold-strong)",color:"white",borderRadius:"50%",padding:"2px 6px",fontSize:"0.7rem"},children:S}):null]})]})]}),n.jsx("main",{children:n.jsxs("div",{className:"login-container",style:{marginTop:"2rem",marginBottom:"3rem"},children:[n.jsxs("div",{className:"logo-area",children:[n.jsx("h1",{children:"Saranya"}),n.jsx("p",{children:"Customer Login"})]}),n.jsx("div",{className:`alert ${h.message?`alert-${h.type} show`:""}`,children:h.message}),n.jsxs("form",{onSubmit:M,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"email",children:"Email Address"}),n.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Enter your email",required:!0,value:l,onChange:W=>c(W.target.value)})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"password",children:"Password"}),n.jsx("input",{type:"password",id:"password",name:"password",placeholder:"Enter your password",required:!0,value:s,onChange:W=>u(W.target.value)})]}),n.jsx("button",{type:"submit",className:"btn",disabled:f,children:f?"Logging in...":"Login"})]}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:U,children:"Create Account"}),n.jsx("span",{className:"divider",children:"|"}),n.jsx("a",{href:"/",children:"Back to Home"})]})]})}),n.jsxs("footer",{className:"footer",children:[n.jsxs("div",{className:"footer-content",children:[n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"ABOUT SARANYA"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"/#story",children:"Our Story"})}),n.jsx("li",{children:n.jsx("a",{href:"/#education",children:"Education"})}),n.jsx("li",{children:n.jsx("a",{href:"/#faq",children:"FAQ"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"WHY SARANYA?"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"/#quality",children:"Quality Guarantee"})}),n.jsx("li",{children:n.jsx("a",{href:"/#warranty",children:"Lifetime Warranty"})}),n.jsx("li",{children:n.jsx("a",{href:"/#certification",children:"Certified Jewellery"})}),n.jsx("li",{children:n.jsx("a",{href:"/#shipping",children:"Free Shipping"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"SERVICES"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"/#custom",children:"Custom Design"})}),n.jsx("li",{children:n.jsx("a",{href:"/#resize",children:"Free Ring Resize"})}),n.jsx("li",{children:n.jsx("a",{href:"/#gift",children:"Gift Services"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"POLICIES"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"/#policies",children:"Our Policies"})}),n.jsx("li",{children:n.jsx("a",{href:"/#privacy",children:"Privacy Policy"})}),n.jsx("li",{children:n.jsx("a",{href:"/#terms",children:"Terms & Conditions"})}),n.jsx("li",{children:n.jsx("a",{href:"/#returns",children:"Return Policy"})}),n.jsx("li",{children:n.jsx("a",{href:"/#payment",children:"Payment Methods"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"CONNECT WITH US"}),n.jsxs("div",{className:"social-links",children:[n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-facebook-f"})}),n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-instagram"})}),n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-twitter"})}),n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-pinterest"})})]})]})]}),n.jsx("div",{className:"footer-bottom",children:n.jsx("p",{children:"© 2026 Saranya Jewellery. All Rights Reserved."})})]})]})}const Va={Silver:{minSpent:0,maxSpent:5e4,multiplier:1,nextTier:"Gold"},Gold:{minSpent:50001,maxSpent:2e5,multiplier:1.5,nextTier:"Platinum"},Platinum:{minSpent:200001,maxSpent:null,multiplier:2,nextTier:null}};function qf(){const[l,c]=v.useState(null),[s]=v.useState(()=>JSON.parse(localStorage.getItem("saranyaCart")||"[]")),u=v.useMemo(()=>s.reduce((E,C)=>E+Number(C.quantity||0),0),[s]);v.useEffect(()=>{document.title="Loyalty Rewards - Saranya Jewellery";async function E(){const C=await le.checkCustomerAuth();C&&c(C)}E()},[]);const f=Number(l?.loyaltyPoints||0),w=Number(l?.totalSpent||0),h=l?.loyaltyTier||"Silver",N=Va[h]||Va.Silver,S=N.nextTier?Va[N.nextTier]:null,P=S?Math.max(0,(S.minSpent||0)-w):0;return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"top-bar",children:[n.jsxs("div",{children:[n.jsx("i",{className:"fas fa-phone"})," ",n.jsx("a",{href:"tel:+1234567890",children:"Contact Us"})]}),n.jsxs("div",{children:[n.jsx("span",{style:{marginRight:"1rem",color:"var(--brand-gold-strong)"},children:l?.fullName||l?.email||"Loading..."}),n.jsxs("span",{style:{marginRight:"1rem"},children:["Loyalty: ",f," Points"]}),n.jsx("button",{type:"button",className:"logout-btn",onClick:()=>le.logout(),style:{fontSize:"0.85rem",padding:"0.3rem 0.8rem"},children:"Logout"})]})]}),n.jsxs("header",{className:"header",children:[n.jsxs("div",{className:"nav",children:[n.jsx("a",{href:"/",children:"Home"}),n.jsx("a",{href:"/customer-shop",children:"Shop"}),n.jsx("a",{href:"/customer-orders",children:"My Orders"}),n.jsx("a",{href:"/customer-loyalty",className:"active",children:"Loyalty"}),n.jsx("a",{href:"/customer-support",children:"Support"})]}),n.jsx("div",{className:"logo",children:"SARANYA JEWELLERY"}),n.jsxs("div",{className:"header-icons",children:[n.jsx("i",{className:"fas fa-search header-icon"}),n.jsx("i",{className:"fas fa-user header-icon",style:{cursor:"pointer"},onClick:()=>{window.location.href="/customer-dashboard?openProfile=true"}}),n.jsxs("a",{href:"/customer-cart",style:{position:"relative"},children:[n.jsx("i",{className:"fas fa-shopping-cart header-icon"}),u>0?n.jsx("span",{style:{position:"absolute",top:"-8px",right:"-8px",background:"var(--brand-gold-strong)",color:"white",borderRadius:"50%",padding:"2px 6px",fontSize:"0.7rem"},children:u}):null]})]})]}),n.jsx("main",{children:n.jsxs("div",{className:"dashboard-container",children:[n.jsx("h1",{style:{textAlign:"center",marginBottom:"2rem",fontFamily:"'Cormorant Garamond', serif",color:"var(--brand-burgundy)"},children:"Loyalty Rewards Program"}),n.jsxs("div",{className:"section loyalty-card",style:{textAlign:"center",padding:"3rem 2rem"},children:[n.jsx("div",{style:{fontSize:"5rem",marginBottom:"1rem"},children:n.jsx("i",{className:"fas fa-gem"})}),n.jsxs("h2",{style:{color:"var(--brand-gold)",fontSize:"3rem",margin:"1rem 0"},children:[n.jsx("span",{children:f})," ",n.jsx("span",{style:{fontSize:"1.5rem"},children:"Points"})]}),n.jsx("p",{style:{fontSize:"1.1rem",color:"var(--text-medium)",marginTop:"1rem"},children:"Your current loyalty points balance"}),n.jsxs("div",{style:{marginTop:"1.5rem",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"1rem",textAlign:"left",maxWidth:"520px",marginLeft:"auto",marginRight:"auto"},children:[n.jsxs("p",{style:{margin:"0.35rem 0"},children:[n.jsx("strong",{children:"Current Tier:"})," ",l?.isLoyalty?h:"Not Enrolled"]}),n.jsxs("p",{style:{margin:"0.35rem 0"},children:[n.jsx("strong",{children:"Total Spent:"})," Rs. ",w.toLocaleString()]}),n.jsxs("p",{style:{margin:"0.35rem 0"},children:[n.jsx("strong",{children:"Points Multiplier:"})," ",N.multiplier,"x"]}),n.jsxs("p",{style:{margin:"0.35rem 0"},children:[n.jsx("strong",{children:"Next Tier Target:"})," ",S?`${N.nextTier} (Rs. ${S.minSpent.toLocaleString()})`:"Top Tier Reached"]}),n.jsxs("p",{style:{margin:"0.35rem 0"},children:[n.jsx("strong",{children:"Amount to Next Tier:"})," Rs. ",P.toLocaleString()]})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"How It Works"})}),n.jsx("div",{className:"section-content",children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"2rem",marginTop:"1.5rem"},children:[n.jsxs("div",{style:{textAlign:"center",padding:"2rem",background:"var(--bg-light)",borderRadius:"12px"},children:[n.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:n.jsx("i",{className:"fas fa-wallet"})}),n.jsx("h3",{style:{color:"var(--brand-burgundy)",marginBottom:"1rem"},children:"Earn Points"}),n.jsx("p",{style:{color:"var(--text-medium)"},children:"Earn 1 point for every Rs. 100 you spend on purchases"})]}),n.jsxs("div",{style:{textAlign:"center",padding:"2rem",background:"var(--bg-light)",borderRadius:"12px"},children:[n.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:n.jsx("i",{className:"fas fa-gift"})}),n.jsx("h3",{style:{color:"var(--brand-burgundy)",marginBottom:"1rem"},children:"Redeem Rewards"}),n.jsx("p",{style:{color:"var(--text-medium)"},children:"100 points = Rs. 100 discount on your next purchase"})]}),n.jsxs("div",{style:{textAlign:"center",padding:"2rem",background:"var(--bg-light)",borderRadius:"12px"},children:[n.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:n.jsx("i",{className:"fas fa-clock"})}),n.jsx("h3",{style:{color:"var(--brand-burgundy)",marginBottom:"1rem"},children:"Never Expire"}),n.jsx("p",{style:{color:"var(--text-medium)"},children:"Your points never expire and keep accumulating"})]})]})})]}),n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h2",{children:"Points History"})}),n.jsx("div",{className:"section-content",children:n.jsxs("div",{className:"empty-state",children:[n.jsx("i",{className:"fas fa-history",style:{fontSize:"3rem",color:"#ddd",marginBottom:"1rem"}}),n.jsx("p",{style:{margin:0},children:"Your points history will appear here"})]})})]})]})}),n.jsxs("footer",{className:"footer",children:[n.jsxs("div",{className:"footer-content",children:[n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"ABOUT SARANYA"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"/#story",children:"Our Story"})}),n.jsx("li",{children:n.jsx("a",{href:"/#education",children:"Education"})}),n.jsx("li",{children:n.jsx("a",{href:"/#faq",children:"FAQ"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"WHY SARANYA?"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"/#quality",children:"Quality Guarantee"})}),n.jsx("li",{children:n.jsx("a",{href:"/#warranty",children:"Lifetime Warranty"})}),n.jsx("li",{children:n.jsx("a",{href:"/#certification",children:"Certified Jewellery"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"CONNECT WITH US"}),n.jsxs("div",{className:"social-links",children:[n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-facebook-f"})}),n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-instagram"})}),n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-twitter"})}),n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-pinterest"})})]})]})]}),n.jsx("div",{className:"footer-bottom",children:n.jsx("p",{children:"© 2026 Saranya Jewellery. All Rights Reserved."})})]})]})}const Vf=["all","Pending","Confirmed","Invoice Created","Payment Received","Preparing","Ready for Collection","Completed","Cancelled"],hc={Pending:"#ffc107",Confirmed:"#17a2b8","Invoice Created":"#6f42c1","Payment Received":"#28a745",Preparing:"#007bff","Ready for Collection":"#20c997",Completed:"#28a745",Cancelled:"#dc3545",Refunded:"#e83e8c"};function Gf(){const[l,c]=v.useState(null),[s,u]=v.useState([]),[f,w]=v.useState("all"),[h,N]=v.useState(null),[S,P]=v.useState(!0),[E]=v.useState(()=>JSON.parse(localStorage.getItem("saranyaCart")||"[]")),C=v.useMemo(()=>E.reduce((R,Q)=>R+Number(Q.quantity||0),0),[E]),F=v.useMemo(()=>f==="all"?s:s.filter(R=>R.status===f),[s,f]);v.useEffect(()=>{document.title="My Orders - Saranya Jewellery"},[]),v.useEffect(()=>{async function R(){const Q=await le.checkCustomerAuth();Q&&(c(Q),await U())}R()},[]);async function U(){P(!0);try{const R=await le.apiRequest("/api/orders/my-orders");if(!R.ok)throw new Error("Failed to load orders");const Q=await R.json();u(Q)}catch(R){console.error("Error loading orders:",R),u([])}finally{P(!1)}}async function j(R){try{const Q=await le.apiRequest(`/api/orders/${R}`);if(!Q.ok)throw new Error("Failed to load order details");const oe=await Q.json();N(oe)}catch(Q){console.error("Error loading order details:",Q),alert("Failed to load order details")}}async function I(R){if(window.confirm("Are you sure you want to cancel this order?"))try{const Q=await le.apiRequest(`/api/orders/${R}/cancel`,{method:"PATCH"});if(!Q.ok){const oe=await Q.json();throw new Error(oe.message||"Failed to cancel order")}alert("Order cancelled successfully"),await U(),h?._id===R&&N(null)}catch(Q){console.error("Error cancelling order:",Q),alert(`Failed to cancel order: ${Q.message}`)}}async function M(R){try{const Q=await le.apiRequest(`/api/orders/${R}`);if(!Q.ok)throw new Error("Failed to load order");const oe=await Q.json(),H=JSON.parse(localStorage.getItem("saranyaCart")||"[]");oe.items.forEach(O=>{const Z=H.find(he=>he.productId===O.productId);Z?Z.quantity+=O.quantity:H.push({productId:O.productId,name:O.name,price:O.price,imageUrl:O.imageUrl,category:O.category||"N/A",karat:O.karat||"N/A",quantity:O.quantity})}),localStorage.setItem("saranyaCart",JSON.stringify(H)),alert("Items added to cart successfully!"),window.location.href="/customer-cart"}catch(Q){console.error("Error reordering:",Q),alert("Failed to add items to cart")}}function W(){le.logout()}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"top-bar",children:[n.jsxs("div",{children:[n.jsx("i",{className:"fas fa-phone"})," ",n.jsx("a",{href:"tel:+1234567890",children:"Contact Us"})]}),n.jsxs("div",{children:[n.jsx("span",{style:{marginRight:"1rem",color:"var(--brand-gold-strong)"},children:l?.fullName||l?.email||"Loading..."}),n.jsxs("span",{style:{marginRight:"1rem"},children:["Loyalty: ",l?.loyaltyPoints||0," Points"]}),n.jsx("button",{type:"button",className:"logout-btn",onClick:W,style:{fontSize:"0.85rem",padding:"0.3rem 0.8rem"},children:"Logout"})]})]}),n.jsxs("header",{className:"header",children:[n.jsxs("div",{className:"nav",children:[n.jsx("a",{href:"/",children:"Home"}),n.jsx("a",{href:"/customer-shop",children:"Shop"}),n.jsx("a",{href:"/customer-orders",className:"active",children:"My Orders"}),n.jsx("a",{href:"/customer-loyalty",children:"Loyalty"}),n.jsx("a",{href:"/customer-support",children:"Support"})]}),n.jsx("div",{className:"logo",children:"SARANYA JEWELLERY"}),n.jsxs("div",{className:"header-icons",children:[n.jsx("i",{className:"fas fa-search header-icon"}),n.jsx("a",{href:"/customer-dashboard?openProfile=true",children:n.jsx("i",{className:"fas fa-user header-icon"})}),n.jsxs("a",{href:"/customer-cart",style:{position:"relative"},children:[n.jsx("i",{className:"fas fa-shopping-cart header-icon"}),C>0?n.jsx("span",{style:{position:"absolute",top:"-8px",right:"-8px",background:"var(--brand-gold-strong)",color:"white",borderRadius:"50%",padding:"2px 6px",fontSize:"0.7rem"},children:C}):null]})]})]}),n.jsx("main",{children:n.jsxs("div",{className:"container",style:{padding:"2rem",maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("h1",{style:{textAlign:"center",marginBottom:"2rem",fontFamily:"'Cormorant Garamond', serif",color:"var(--brand-burgundy)"},children:"My Orders"}),n.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"2rem",justifyContent:"center",flexWrap:"wrap"},children:Vf.map(R=>n.jsx("button",{type:"button",className:`filter-btn ${f===R?"active":""}`,onClick:()=>w(R),children:R==="all"?"All Orders":R},R))}),S?n.jsx("div",{style:{textAlign:"center",padding:"3rem",color:"#999"},children:"Loading orders..."}):null,!S&&F.length===0?n.jsxs("div",{style:{textAlign:"center",padding:"3rem",background:"white",borderRadius:"8px"},children:[n.jsx("i",{className:"fas fa-box",style:{fontSize:"4rem",color:"#ddd",marginBottom:"1rem"}}),n.jsx("h2",{style:{color:"#999",marginBottom:"1rem"},children:"No orders found"}),n.jsx("a",{href:"/customer-shop",style:{display:"inline-block",background:"var(--brand-burgundy)",color:"white",padding:"1rem 2rem",borderRadius:"4px",textDecoration:"none"},children:"Start Shopping"})]}):null,S?null:F.map(R=>{const Q=R.status==="Ready for Collection";return n.jsxs("div",{style:{background:"white",padding:"1.5rem",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",marginBottom:"1rem",border:Q?"2px solid #20c997":"none"},children:[Q?n.jsxs("div",{style:{background:"#d1f2eb",padding:"1rem",borderRadius:"8px",marginBottom:"1rem",textAlign:"center"},children:[n.jsx("p",{style:{margin:0,fontWeight:700,color:"#0d6655",fontSize:"1.1rem"},children:"Your jewellery is ready for collection"}),n.jsx("p",{style:{margin:"0.25rem 0 0",color:"#0d6655"},children:"Please visit Saranya Jewellery to collect your order."})]}):null,n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"1rem"},children:[n.jsxs("div",{children:[n.jsxs("h3",{style:{margin:"0 0 0.5rem",color:"var(--brand-burgundy)"},children:["Order #",R.orderNumber]}),n.jsxs("p",{style:{color:"#666",margin:"0.25rem 0",fontSize:"0.9rem"},children:[n.jsx("i",{className:"fas fa-calendar"})," ",new Date(R.createdAt).toLocaleDateString("en-IN",{year:"numeric",month:"long",day:"numeric"})]}),n.jsxs("p",{style:{color:"#666",margin:"0.25rem 0",fontSize:"0.9rem"},children:[n.jsx("i",{className:"fas fa-box"})," ",R.items.length," item(s)"]}),R.invoiceNumber?n.jsxs("p",{style:{color:"#666",margin:"0.25rem 0",fontSize:"0.9rem"},children:[n.jsx("i",{className:"fas fa-file-invoice"})," Invoice: ",R.invoiceNumber]}):null]}),n.jsxs("div",{style:{textAlign:"right"},children:[n.jsx("span",{style:{display:"inline-block",padding:"0.5rem 1rem",borderRadius:"20px",fontSize:"0.85rem",fontWeight:600,background:hc[R.status]||"#999",color:"white"},children:R.status}),n.jsxs("p",{style:{fontSize:"1.3rem",fontWeight:600,margin:"0.5rem 0 0",color:"var(--brand-gold-strong)"},children:["Rs. ",Number(R.total||0).toLocaleString()]})]})]}),n.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"1rem",overflowX:"auto",paddingBottom:"0.5rem"},children:[R.items.slice(0,4).map((oe,H)=>n.jsx("img",{src:oe.imageUrl||"/SaranyaLOGO.jpg",alt:oe.name,style:{width:"80px",height:"80px",objectFit:"cover",borderRadius:"4px",flexShrink:0}},`${R._id}-${H}`)),R.items.length>4?n.jsxs("div",{style:{width:"80px",height:"80px",background:"#f0f0f0",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:["+",R.items.length-4]}):null]}),n.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[n.jsxs("button",{type:"button",onClick:()=>j(R._id),style:{flex:1,minWidth:"150px",background:"var(--brand-burgundy)",color:"white",border:"none",padding:"0.75rem 1.5rem",borderRadius:"4px",cursor:"pointer"},children:[n.jsx("i",{className:"fas fa-eye"})," View Details"]}),R.status==="Completed"?n.jsxs("button",{type:"button",onClick:()=>M(R._id),style:{flex:1,minWidth:"150px",background:"var(--brand-gold-strong)",color:"white",border:"none",padding:"0.75rem 1.5rem",borderRadius:"4px",cursor:"pointer"},children:[n.jsx("i",{className:"fas fa-redo"})," Reorder"]}):null,R.status==="Pending"?n.jsxs("button",{type:"button",onClick:()=>I(R._id),style:{flex:1,minWidth:"150px",background:"#dc3545",color:"white",border:"none",padding:"0.75rem 1.5rem",borderRadius:"4px",cursor:"pointer"},children:[n.jsx("i",{className:"fas fa-times"})," Cancel Order"]}):null]})]},R._id)})]})}),h?n.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.7)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",overflowY:"auto",padding:"2rem"},children:n.jsxs("div",{style:{background:"white",borderRadius:"8px",maxWidth:"900px",width:"100%",maxHeight:"90vh",overflowY:"auto",position:"relative"},children:[n.jsx("button",{type:"button",onClick:()=>N(null),style:{position:"absolute",top:"1rem",right:"1rem",background:"none",border:"none",fontSize:"2rem",cursor:"pointer",color:"#999",zIndex:10},children:"×"}),n.jsxs("div",{style:{padding:"2rem"},children:[n.jsx("h2",{style:{margin:"0 0 1.5rem",fontFamily:"'Cormorant Garamond', serif",color:"var(--brand-burgundy)"},children:"Order Details"}),h.status==="Ready for Collection"?n.jsxs("div",{style:{background:"#d1f2eb",padding:"1.5rem",borderRadius:"8px",marginBottom:"1.5rem",textAlign:"center"},children:[n.jsx("h3",{style:{margin:"0 0 0.5rem",color:"#0d6655"},children:"Ready for Collection"}),n.jsxs("p",{style:{margin:0,color:"#0d6655"},children:["Your jewellery is ready. Please visit ",n.jsx("strong",{children:"Saranya Jewellery"})," to collect your order."]})]}):null,n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem",marginBottom:"2rem"},children:[n.jsxs("div",{children:[n.jsx("h3",{style:{margin:"0 0 1rem",color:"#333"},children:"Order Information"}),n.jsxs("p",{style:{margin:"0.5rem 0"},children:[n.jsx("strong",{children:"Order Number:"})," ",h.orderNumber]}),n.jsxs("p",{style:{margin:"0.5rem 0"},children:[n.jsx("strong",{children:"Order Date:"})," ",new Date(h.createdAt).toLocaleDateString("en-IN",{year:"numeric",month:"long",day:"numeric"})]}),n.jsxs("p",{style:{margin:"0.5rem 0"},children:[n.jsx("strong",{children:"Status:"})," ",n.jsx("span",{style:{display:"inline-block",padding:"0.3rem 0.8rem",borderRadius:"20px",fontSize:"0.85rem",fontWeight:600,background:hc[h.status]||"#999",color:"white",marginLeft:"0.5rem"},children:h.status})]}),n.jsxs("p",{style:{margin:"0.5rem 0"},children:[n.jsx("strong",{children:"Payment:"})," ",h.paymentStatus||"Pending"," (",h.paymentMethod,")"]}),h.invoiceNumber?n.jsxs("p",{style:{margin:"0.5rem 0"},children:[n.jsx("strong",{children:"Invoice:"})," ",h.invoiceNumber]}):null]}),n.jsxs("div",{children:[n.jsx("h3",{style:{margin:"0 0 1rem",color:"#333"},children:"Collection Information"}),n.jsxs("p",{style:{margin:"0.5rem 0"},children:[n.jsx("strong",{children:"Phone:"})," ",h.phoneNumber]}),n.jsxs("p",{style:{margin:"0.5rem 0"},children:[n.jsx("strong",{children:"Collection:"})," Visit Saranya Jewellery shop"]}),n.jsxs("p",{style:{margin:"0.5rem 0"},children:[n.jsx("strong",{children:"Payment:"})," Bank Transfer"]}),h.paymentReceipt?n.jsxs("p",{style:{margin:"0.5rem 0"},children:[n.jsx("strong",{children:"Receipt:"})," ",n.jsx("a",{href:h.paymentReceipt,target:"_blank",rel:"noreferrer",style:{color:"var(--brand-burgundy)"},children:"View Receipt"})]}):null,h.orderNotes?n.jsxs("p",{style:{margin:"0.5rem 0"},children:[n.jsx("strong",{children:"Notes:"})," ",h.orderNotes]}):null]})]}),n.jsx("h3",{style:{margin:"0 0 1rem",color:"#333"},children:"Order Items"}),n.jsx("div",{style:{marginBottom:"2rem"},children:h.items.map((R,Q)=>n.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"1rem",border:"1px solid #eee",borderRadius:"4px",marginBottom:"1rem"},children:[n.jsx("img",{src:R.imageUrl||"/SaranyaLOGO.jpg",alt:R.name,style:{width:"80px",height:"80px",objectFit:"cover",borderRadius:"4px"}}),n.jsxs("div",{style:{flex:1},children:[n.jsx("h4",{style:{margin:"0 0 0.5rem",color:"var(--brand-burgundy)"},children:R.name}),n.jsxs("p",{style:{color:"#666",margin:"0.25rem 0",fontSize:"0.9rem"},children:["Quantity: ",R.quantity]}),n.jsxs("p",{style:{color:"var(--brand-gold-strong)",fontWeight:600,margin:"0.25rem 0"},children:["Rs. ",Number(R.price||0).toLocaleString()," each"]})]}),n.jsx("div",{style:{textAlign:"right"},children:n.jsxs("p",{style:{fontWeight:600,fontSize:"1.1rem",margin:0},children:["Rs. ",Number(R.price*R.quantity||0).toLocaleString()]})})]},`${h._id}-${Q}`))}),n.jsxs("div",{style:{background:"#f8f9fa",padding:"1.5rem",borderRadius:"4px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[n.jsx("span",{children:"Subtotal:"}),n.jsxs("span",{children:["Rs. ",Number(h.subtotal||0).toLocaleString()]})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[n.jsx("span",{children:"Tax:"}),n.jsxs("span",{children:["Rs. ",Number(h.tax||0).toLocaleString()]})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"1.2rem",fontWeight:600,paddingTop:"0.5rem",borderTop:"2px solid #ddd",marginTop:"0.5rem"},children:[n.jsx("span",{children:"Total:"}),n.jsxs("span",{style:{color:"var(--brand-gold-strong)"},children:["Rs. ",Number(h.total||0).toLocaleString()]})]})]})]})]})}):null]})}function yc(l){const c=Number(l)||0;return[1,2,3,4,5].map(s=>s<=c?"★":"☆").join("")}function Jf(){return new URLSearchParams(window.location.search).get("id")}function Do(){return`${window.location.pathname}${window.location.search}${window.location.hash}`}function Qf(){const[l,c]=v.useState(null),[s,u]=v.useState(null),[f,w]=v.useState([]),[h,N]=v.useState({avgRating:0,totalReviews:0}),[S,P]=v.useState([]),[E,C]=v.useState(!0),[F,U]=v.useState(()=>JSON.parse(localStorage.getItem("saranyaCart")||"[]")),j=!!l,I=v.useMemo(()=>F.reduce((H,O)=>H+Number(O.quantity||0),0),[F]);v.useEffect(()=>{async function H(){const O=Jf();if(!O){C(!1);return}const Z=await le.checkCustomerAuth({redirectOnFail:!1,returnToCurrentPath:!1});c(Z);try{const he=await le.apiRequest(`/api/products/${O}`);if(!he.ok)throw new Error("Failed to load product details");const xe=await he.json();u(xe),document.title=`${xe.name} - Saranya Jewellery`;const Le=await le.apiRequest(`/api/reviews/product/${xe._id}`);if(Le.ok){const ue=await Le.json();w(ue.reviews||[]),N({avgRating:Number(ue.avgRating||0),totalReviews:Number(ue.totalReviews||0)})}const ee=new URLSearchParams;xe.category&&ee.append("category",xe.category);const ne=await le.apiRequest(`/api/products?${ee.toString()}`);if(ne.ok){const ue=await ne.json();P(ue.filter(Ie=>Ie._id!==xe._id).slice(0,4))}}catch(he){console.error("Error loading product page:",he)}finally{C(!1)}}H()},[]);function M(){const H=encodeURIComponent(Do());return{loginHref:`/customer-login?redirect=${H}`,registerHref:`/customer-register?redirect=${H}`,userProfileHref:`/customer-login?redirect=${H}`}}const W=M();function R(H,O){j||(H.preventDefault(),le.redirectToLogin("customer",{returnTo:O||Do()}))}async function Q(){if(!s?._id)return;if(!j){le.redirectToLogin("customer",{returnTo:Do()});return}const H=[...F],O=H.find(Z=>Z.productId===s._id);O?O.quantity+=1:H.push({productId:s._id,name:s.name,price:s.price,imageUrl:s.imageUrl||s.image,category:s.category,karat:s.karat||s.kType,quantity:1}),localStorage.setItem("saranyaCart",JSON.stringify(H)),U(H),alert("Added to cart")}function oe(){le.logout()}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"top-bar",children:[n.jsxs("div",{children:[n.jsx("i",{className:"fas fa-phone"})," ",n.jsx("a",{href:"tel:+1234567890",children:"Contact Us"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[n.jsx("span",{style:{color:"var(--brand-gold-strong)"},children:l?.fullName||l?.email||"Guest"}),l?n.jsxs("span",{children:["Loyalty: ",l.loyaltyPoints||0," Points"]}):null,l?n.jsx("button",{type:"button",className:"logout-btn",onClick:oe,style:{fontSize:"0.85rem",padding:"0.3rem 0.8rem"},children:"Logout"}):n.jsxs(n.Fragment,{children:[n.jsx("a",{href:W.loginHref,className:"logout-btn",style:{fontSize:"0.85rem",padding:"0.3rem 0.8rem",textDecoration:"none"},children:"Login"}),n.jsx("a",{href:W.registerHref,className:"logout-btn",style:{fontSize:"0.85rem",padding:"0.3rem 0.8rem",textDecoration:"none"},children:"Register"})]})]})]}),n.jsxs("header",{className:"header",children:[n.jsxs("div",{className:"nav",children:[n.jsx("a",{href:"/",children:"Home"}),n.jsx("a",{href:"/customer-shop",className:"active",children:"Shop"}),n.jsx("a",{href:"/customer-orders","data-requires-auth":"true",onClick:H=>R(H,"/customer-orders"),children:"My Orders"}),n.jsx("a",{href:"/customer-loyalty","data-requires-auth":"true",onClick:H=>R(H,"/customer-loyalty"),children:"Loyalty"}),n.jsx("a",{href:"/customer-support","data-requires-auth":"true",onClick:H=>R(H,"/customer-support"),children:"Support"})]}),n.jsx("div",{className:"logo",children:"SARANYA JEWELLERY"}),n.jsxs("div",{className:"header-icons",children:[n.jsx("i",{className:"fas fa-search header-icon"}),n.jsx("a",{href:l?"/customer-dashboard?openProfile=true":W.userProfileHref,children:n.jsx("i",{className:"fas fa-user header-icon"})}),n.jsxs("a",{href:"/customer-cart",style:{position:"relative"},onClick:H=>R(H,Do()),children:[n.jsx("i",{className:"fas fa-shopping-cart header-icon"}),I>0?n.jsx("span",{style:{position:"absolute",top:"-8px",right:"-8px",background:"var(--brand-gold-strong)",color:"white",borderRadius:"50%",padding:"2px 6px",fontSize:"0.7rem"},children:I}):null]})]})]}),n.jsx("main",{children:n.jsxs("div",{className:"container",style:{padding:"2rem 1rem 3rem",maxWidth:"1200px",margin:"0 auto"},children:[n.jsx("div",{style:{marginBottom:"1.5rem"},children:n.jsxs("a",{href:"/customer-shop",style:{color:"var(--brand-burgundy)",textDecoration:"none",fontWeight:600},children:[n.jsx("i",{className:"fas fa-arrow-left"})," Back to Shop"]})}),n.jsxs("section",{style:{background:"white",borderRadius:"10px",boxShadow:"0 4px 16px rgba(0,0,0,0.08)",padding:"1.5rem"},children:[E?n.jsx("div",{style:{textAlign:"center",padding:"3rem",color:"#999"},children:"Loading product details..."}):null,!E&&!s?n.jsx("div",{style:{textAlign:"center",padding:"3rem",color:"#999"},children:"Unable to load product details"}):null,!E&&s?n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"2rem"},children:[n.jsx("div",{children:n.jsx("img",{src:s.imageUrl||s.image||"/SaranyaLOGO.jpg",alt:s.name,style:{width:"100%",borderRadius:"10px",objectFit:"cover",maxHeight:"500px"}})}),n.jsxs("div",{children:[n.jsx("h1",{style:{margin:"0 0 0.75rem",color:"var(--brand-burgundy)",fontFamily:"'Cormorant Garamond', serif",fontSize:"2.2rem"},children:s.name}),n.jsxs("p",{style:{color:"var(--brand-gold-strong)",fontWeight:700,fontSize:"1.8rem",margin:"0.5rem 0 1.2rem"},children:["Rs. ",Number(s.price||0).toLocaleString()]}),n.jsxs("div",{style:{display:"grid",gap:"0.55rem",marginBottom:"1.2rem"},children:[n.jsxs("p",{style:{margin:0},children:[n.jsx("strong",{children:"Category:"})," ",s.category||"N/A"]}),n.jsxs("p",{style:{margin:0},children:[n.jsx("strong",{children:"Karat:"})," ",s.karat||s.kType||"N/A"]}),n.jsxs("p",{style:{margin:0},children:[n.jsx("strong",{children:"Weight:"})," ",s.weight||0,"g"]}),n.jsxs("p",{style:{margin:0},children:[n.jsx("strong",{children:"SKU:"})," ",s.sku||"N/A"]}),n.jsxs("p",{style:{margin:0},children:[n.jsx("strong",{children:"Stock:"})," ",s.stockQuantity??0]}),n.jsxs("p",{style:{margin:0},children:[n.jsx("strong",{children:"Tax:"})," ",Number(s.taxPercentage??0).toFixed(1),"%"]}),n.jsxs("p",{style:{margin:0},children:[n.jsx("strong",{children:"Availability:"})," ",n.jsx("span",{style:{color:s.isAvailable?"#28a745":"#dc3545"},children:s.isAvailable?"In Stock":s.availabilityStatus||"Out of Stock"})]})]}),n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("h3",{style:{marginBottom:"0.4rem",color:"var(--brand-burgundy)"},children:"Description"}),n.jsx("p",{style:{margin:0,color:"#666",lineHeight:1.7},children:s.description||"No description available."})]}),s.isAvailable?n.jsxs("button",{type:"button",onClick:Q,style:{background:"var(--brand-burgundy)",color:"white",border:"none",padding:"0.95rem 1.4rem",borderRadius:"6px",cursor:"pointer",fontSize:"1rem",fontWeight:600},children:[n.jsx("i",{className:"fas fa-cart-plus"})," Add to Cart"]}):n.jsx("button",{type:"button",disabled:!0,style:{background:"#bbb",color:"#fff",border:"none",padding:"0.95rem 1.4rem",borderRadius:"6px",fontSize:"1rem",fontWeight:600,cursor:"not-allowed"},children:"Currently Unavailable"})]})]}):null]}),n.jsxs("section",{style:{marginTop:"2rem",background:"white",borderRadius:"10px",boxShadow:"0 4px 16px rgba(0,0,0,0.08)",padding:"1.5rem"},children:[n.jsx("h2",{style:{margin:"0 0 1rem",color:"var(--brand-burgundy)",fontFamily:"'Cormorant Garamond', serif",fontSize:"2rem"},children:"Customer Reviews"}),h.totalReviews>0?n.jsxs("div",{style:{padding:"0.8rem 1rem",border:"1px solid #eee",borderRadius:"8px",background:"#faf7ee",marginBottom:"1rem"},children:[n.jsxs("strong",{style:{color:"var(--brand-burgundy)"},children:[h.avgRating.toFixed(1)," / 5"]}),n.jsx("span",{style:{marginLeft:"0.4rem",color:"#e0bf63"},children:yc(Math.round(h.avgRating))}),n.jsxs("span",{style:{color:"#666",marginLeft:"0.6rem"},children:["(",h.totalReviews," review",h.totalReviews>1?"s":"",")"]})]}):null,n.jsxs("div",{style:{display:"grid",gap:"0.85rem"},children:[!E&&f.length===0?n.jsx("div",{style:{textAlign:"center",color:"#999"},children:"No reviews yet for this product."}):null,f.map(H=>n.jsxs("div",{style:{border:"1px solid #eee",borderRadius:"8px",padding:"0.9rem"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"0.7rem",alignItems:"center",marginBottom:"0.4rem"},children:[n.jsx("strong",{children:H.customerName||"Customer"}),n.jsx("small",{style:{color:"#888"},children:new Date(H.createdAt).toLocaleDateString()})]}),n.jsx("div",{style:{marginBottom:"0.4rem",color:"#e0bf63"},children:yc(H.rating)}),n.jsx("p",{style:{margin:0,color:"#555",lineHeight:1.6},children:H.comment||"No comment provided."}),H.careReply?.comment?n.jsxs("div",{style:{marginTop:"0.7rem",background:"#f8f9fa",borderLeft:"3px solid #6f0022",padding:"0.65rem",borderRadius:"6px"},children:[n.jsx("p",{style:{margin:"0 0 0.3rem",fontWeight:600,color:"#6f0022"},children:"Customer Care Reply"}),n.jsx("p",{style:{margin:0,color:"#555"},children:H.careReply.comment})]}):null]},H._id))]})]}),n.jsxs("section",{style:{marginTop:"3rem"},children:[n.jsx("h2",{style:{marginBottom:"1rem",color:"var(--brand-burgundy)",fontFamily:"'Cormorant Garamond', serif",fontSize:"2rem"},children:"Related Products"}),n.jsxs("div",{className:"category-grid",style:{gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"1.2rem"},children:[!E&&S.length===0?n.jsx("div",{style:{gridColumn:"1/-1",textAlign:"center",padding:"2rem",color:"#999"},children:"No related products found"}):null,S.map(H=>n.jsxs("div",{className:"category-card",style:{cursor:"pointer",padding:"1rem",background:"white",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},onClick:()=>{window.location.href=`/customer-product?id=${encodeURIComponent(H._id)}`},children:[n.jsx("img",{src:H.imageUrl||H.image||"/SaranyaLOGO.jpg",alt:H.name,style:{width:"100%",height:"220px",objectFit:"cover",borderRadius:"6px"}}),n.jsx("h3",{style:{margin:"0.9rem 0 0.3rem",color:"var(--brand-burgundy)"},children:H.name}),n.jsxs("p",{style:{margin:"0.35rem 0",color:"#666",fontSize:"0.9rem"},children:[H.category," - ",H.karat||H.kType||"N/A"]}),n.jsxs("p",{style:{margin:"0.35rem 0",color:"var(--brand-gold-strong)",fontWeight:600},children:["Rs. ",Number(H.price||0).toLocaleString()]})]},H._id))]})]})]})}),n.jsxs("footer",{className:"footer",children:[n.jsxs("div",{className:"footer-content",children:[n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"ABOUT SARANYA"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"/#story",children:"Our Story"})}),n.jsx("li",{children:n.jsx("a",{href:"/#education",children:"Education"})}),n.jsx("li",{children:n.jsx("a",{href:"/#faq",children:"FAQ"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"WHY SARANYA?"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"/#quality",children:"Quality Guarantee"})}),n.jsx("li",{children:n.jsx("a",{href:"/#warranty",children:"Lifetime Warranty"})}),n.jsx("li",{children:n.jsx("a",{href:"/#certification",children:"Certified Jewellery"})}),n.jsx("li",{children:n.jsx("a",{href:"/#shipping",children:"Free Shipping"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"SERVICES"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"/#custom",children:"Custom Design"})}),n.jsx("li",{children:n.jsx("a",{href:"/#resize",children:"Free Ring Resize"})}),n.jsx("li",{children:n.jsx("a",{href:"/#gift",children:"Gift Services"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"POLICIES"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"/#policies",children:"Our Policies"})}),n.jsx("li",{children:n.jsx("a",{href:"/#privacy",children:"Privacy Policy"})}),n.jsx("li",{children:n.jsx("a",{href:"/#terms",children:"Terms & Conditions"})}),n.jsx("li",{children:n.jsx("a",{href:"/#returns",children:"Return Policy"})}),n.jsx("li",{children:n.jsx("a",{href:"/#payment",children:"Payment Methods"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"CONNECT WITH US"}),n.jsxs("div",{className:"social-links",children:[n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-facebook-f"})}),n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-instagram"})}),n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-twitter"})}),n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-pinterest"})})]})]})]}),n.jsx("div",{className:"footer-bottom",children:n.jsx("p",{children:"© 2026 Saranya Jewellery. All Rights Reserved."})})]})]})}function Kf(){const l=new URLSearchParams(window.location.search).get("redirect");return!l||!l.startsWith("/")||l.startsWith("//")?null:l}function Yf(){const[l,c]=v.useState({fullName:"",email:"",phone:"",password:"",confirmPassword:""}),[s,u]=v.useState(!1),[f,w]=v.useState({message:"",type:"error"}),h=v.useMemo(()=>Kf(),[]);v.useEffect(()=>{document.title="Customer Registration - Saranya Jewellery"},[]);function N(E,C="error"){w({message:E,type:C}),window.setTimeout(()=>w({message:"",type:"error"}),5e3)}async function S(E){E.preventDefault();const C=l.fullName.trim(),F=l.email.trim(),U=l.phone.trim();if(!C||!F||!l.password||!l.confirmPassword){N("Please fill in all required fields");return}if(C.length<3){N("Name must be at least 3 characters long");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(F)){N("Please enter a valid email address");return}if(U&&!/^[\d\s+\-()]+$/.test(U)){N("Please enter a valid phone number");return}if(l.password.length<6){N("Password must be at least 6 characters long");return}if(l.password!==l.confirmPassword){N("Passwords do not match");return}u(!0);try{const I=await fetch("/api/customer/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:C,email:F,phone:U,password:l.password})}),M=await I.json();if(!I.ok){N(M.message||"Registration failed"),u(!1);return}N("Registration successful! Redirecting to login...","success"),c({fullName:"",email:"",phone:"",password:"",confirmPassword:""}),window.setTimeout(()=>{const W=h?`/customer-login?redirect=${encodeURIComponent(h)}`:"/customer-login";window.location.href=W},1500)}catch(I){console.error("Registration error:",I),N("Network error. Please check your connection and try again."),u(!1)}}const P=h?`/customer-login?redirect=${encodeURIComponent(h)}`:"/customer-login";return n.jsxs("div",{className:"register-container",children:[n.jsxs("div",{className:"logo-area",children:[n.jsx("h1",{children:"Saranya"}),n.jsx("p",{children:"Customer Registration"})]}),n.jsx("div",{className:"info-note",children:"Join us to enjoy exclusive collections and earn loyalty rewards."}),n.jsx("div",{className:`alert ${f.message?`alert-${f.type} show`:""}`,children:f.message}),n.jsxs("form",{onSubmit:S,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"fullName",children:"Full Name"}),n.jsx("input",{type:"text",id:"fullName",name:"fullName",placeholder:"Enter your full name",required:!0,value:l.fullName,onChange:E=>c(C=>({...C,fullName:E.target.value}))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"email",children:"Email Address"}),n.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Enter your email",required:!0,value:l.email,onChange:E=>c(C=>({...C,email:E.target.value}))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"phone",children:"Phone Number (Optional)"}),n.jsx("input",{type:"tel",id:"phone",name:"phone",placeholder:"Enter your phone number",value:l.phone,onChange:E=>c(C=>({...C,phone:E.target.value}))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"password",children:"Password"}),n.jsx("input",{type:"password",id:"password",name:"password",placeholder:"Create a password",required:!0,minLength:6,value:l.password,onChange:E=>c(C=>({...C,password:E.target.value}))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),n.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",placeholder:"Re-enter password",required:!0,minLength:6,value:l.confirmPassword,onChange:E=>c(C=>({...C,confirmPassword:E.target.value}))})]}),n.jsx("button",{type:"submit",className:"btn",disabled:s,children:s?"Registering...":"Register"})]}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:P,children:"Already have an account? Login"}),n.jsx("span",{className:"divider",children:"|"}),n.jsx("a",{href:"/",children:"Back to Home"})]})]})}const Xf=["Ring","Necklace","Bracelet","Earring","Pendant","Chain","Bangles","Anklet"],Zf=["18K","22K","24K"];function ep(l){const c=Number(l)||0;return[1,2,3,4,5].map(s=>s<=Math.round(c)?"★":"☆").join("")}function Uo(){return`${window.location.pathname}${window.location.search}${window.location.hash}`}function tp(){const[l,c]=v.useState(null),[s,u]=v.useState([]),[f,w]=v.useState(!0),[h,N]=v.useState(()=>JSON.parse(localStorage.getItem("saranyaCart")||"[]")),[S,P]=v.useState({}),[E,C]=v.useState({category:"",karat:"",isAvailable:""}),[F,U]=v.useState(""),j=!!l,I=v.useMemo(()=>h.reduce((O,Z)=>O+Number(Z.quantity||0),0),[h]);v.useEffect(()=>{document.title="Shop - Saranya Jewellery"},[]),v.useEffect(()=>{async function O(){const Z=await le.checkCustomerAuth({redirectOnFail:!1,returnToCurrentPath:!1});c(Z)}O()},[]),v.useEffect(()=>{async function O(){w(!0);try{const Z=new URLSearchParams;E.category&&Z.set("category",E.category),E.karat&&Z.set("karat",E.karat),E.isAvailable&&Z.set("isAvailable",E.isAvailable);const he=Z.toString(),xe=he?`/api/products?${he}`:"/api/products",Le=await le.apiRequest(xe);if(!Le.ok)throw new Error("Failed to load products");const ee=await Le.json();u(ee);const ne=ee.map(z=>z?._id).filter(Boolean);if(!ne.length){P({});return}const ue=await le.apiRequest(`/api/reviews/summary?productIds=${encodeURIComponent(ne.join(","))}`);if(!ue.ok){P({});return}const Ie=await ue.json();P(Ie.summary||{})}catch(Z){console.error("Error loading products:",Z),u([]),P({})}finally{w(!1)}}O()},[E]);function M(O){le.redirectToLogin("customer",{returnTo:O})}function W(O,Z){j||(O.preventDefault(),M(Z||Uo()))}async function R(O){if(!j){M(Uo());return}U(O._id);try{const Z=[...h],he=Z.find(xe=>xe.productId===O._id);he?he.quantity+=1:Z.push({productId:O._id,name:O.name,price:O.price,imageUrl:O.imageUrl,category:O.category,karat:O.karat,quantity:1}),localStorage.setItem("saranyaCart",JSON.stringify(Z)),N(Z)}catch(Z){console.error("Error adding to cart:",Z),alert("Failed to add to cart")}finally{U("")}}function Q(){le.logout()}const oe=window.location.pathname,H=encodeURIComponent(Uo());return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"top-bar",children:[n.jsxs("div",{children:[n.jsx("i",{className:"fas fa-phone"})," ",n.jsx("a",{href:"tel:+1234567890",children:"Contact Us"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[n.jsx("span",{style:{color:"var(--brand-gold-strong)"},children:l?.fullName||l?.email||"Guest"}),l?n.jsxs("span",{children:["Loyalty: ",l.loyaltyPoints||0," Points"]}):null,l?n.jsx("button",{type:"button",className:"logout-btn",onClick:Q,style:{fontSize:"0.85rem",padding:"0.3rem 0.8rem"},children:"Logout"}):n.jsxs(n.Fragment,{children:[n.jsx("a",{href:`/customer-login?redirect=${H}`,className:"logout-btn",style:{fontSize:"0.85rem",padding:"0.3rem 0.8rem",textDecoration:"none"},children:"Login"}),n.jsx("a",{href:`/customer-register?redirect=${H}`,className:"logout-btn",style:{fontSize:"0.85rem",padding:"0.3rem 0.8rem",textDecoration:"none"},children:"Register"})]})]})]}),n.jsxs("header",{className:"header",children:[n.jsxs("div",{className:"nav",children:[n.jsx("a",{href:"/",className:oe==="/"?"active":"",children:"Home"}),n.jsx("a",{href:"/customer-shop",className:oe==="/customer-shop"?"active":"",children:"Shop"}),n.jsx("a",{href:"/customer-orders",onClick:O=>W(O,"/customer-orders"),children:"My Orders"}),n.jsx("a",{href:"/customer-loyalty",onClick:O=>W(O,"/customer-loyalty"),children:"Loyalty"}),n.jsx("a",{href:"/customer-support",onClick:O=>W(O,"/customer-support"),children:"Support"})]}),n.jsx("div",{className:"logo",children:"SARANYA JEWELLERY"}),n.jsxs("div",{className:"header-icons",children:[n.jsx("i",{className:"fas fa-search header-icon"}),n.jsx("a",{href:l?"/customer-dashboard?openProfile=true":`/customer-login?redirect=${H}`,children:n.jsx("i",{className:"fas fa-user header-icon"})}),n.jsxs("a",{href:"/customer-cart",style:{position:"relative"},onClick:O=>W(O,Uo()),children:[n.jsx("i",{className:"fas fa-shopping-cart header-icon"}),I>0?n.jsx("span",{style:{position:"absolute",top:"-8px",right:"-8px",background:"var(--brand-gold-strong)",color:"white",borderRadius:"50%",padding:"2px 6px",fontSize:"0.7rem"},children:I}):null]})]})]}),n.jsx("main",{children:n.jsxs("div",{className:"container",style:{paddingTop:"2rem"},children:[n.jsx("h1",{style:{textAlign:"center",marginBottom:"2rem",fontFamily:"'Cormorant Garamond', serif",color:"var(--brand-burgundy)"},children:"Fine Jewellery Collection"}),n.jsxs("div",{className:"filter-container",style:{display:"flex",gap:"1rem",marginBottom:"2rem",flexWrap:"wrap",justifyContent:"center"},children:[n.jsxs("div",{children:[n.jsx("label",{htmlFor:"categoryFilter",children:"Category:"}),n.jsxs("select",{id:"categoryFilter",value:E.category,onChange:O=>C(Z=>({...Z,category:O.target.value})),children:[n.jsx("option",{value:"",children:"All Categories"}),Xf.map(O=>n.jsx("option",{value:O,children:O},O))]})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"karatFilter",children:"Karat:"}),n.jsxs("select",{id:"karatFilter",value:E.karat,onChange:O=>C(Z=>({...Z,karat:O.target.value})),children:[n.jsx("option",{value:"",children:"All Types"}),Zf.map(O=>n.jsx("option",{value:O,children:O},O))]})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"availabilityFilter",children:"Availability:"}),n.jsxs("select",{id:"availabilityFilter",value:E.isAvailable,onChange:O=>C(Z=>({...Z,isAvailable:O.target.value})),children:[n.jsx("option",{value:"",children:"All"}),n.jsx("option",{value:"true",children:"In Stock"}),n.jsx("option",{value:"false",children:"Out of Stock"})]})]})]}),n.jsxs("div",{className:"category-grid",style:{gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"2rem"},children:[f?n.jsx("div",{style:{gridColumn:"1/-1",textAlign:"center",padding:"3rem",color:"#999"},children:"Loading products..."}):null,!f&&s.length===0?n.jsx("div",{style:{gridColumn:"1/-1",textAlign:"center",padding:"3rem",color:"#999"},children:"No products found"}):null,f?null:s.map(O=>{const Z=S[O._id]||{avgRating:0,totalReviews:0},he=Number(Z.totalReviews||0)>0;return n.jsxs("div",{className:"category-card",style:{cursor:"pointer",padding:"1rem",background:"white",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",transition:"transform 0.3s"},onClick:()=>{window.location.href=`/customer-product?id=${encodeURIComponent(O._id)}`},children:[n.jsx("img",{src:O.imageUrl||"/SaranyaLOGO.jpg",alt:O.name,style:{width:"100%",height:"250px",objectFit:"cover",borderRadius:"4px"}}),n.jsx("h3",{style:{margin:"1rem 0 0.5rem",color:"var(--brand-burgundy)"},children:O.name}),n.jsxs("p",{style:{color:"#666",fontSize:"0.9rem",margin:"0.5rem 0"},children:[O.category," - ",O.karat]}),he?n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.45rem",margin:"0.35rem 0 0.5rem"},children:[n.jsx("span",{style:{color:"#e0bf63",fontSize:"0.95rem"},children:ep(Z.avgRating)}),n.jsxs("span",{style:{fontSize:"0.82rem",color:"#666"},children:[Number(Z.avgRating||0).toFixed(1)," (",Z.totalReviews,")"]})]}):n.jsx("p",{style:{fontSize:"0.82rem",color:"#999",margin:"0.35rem 0 0.5rem"},children:"No reviews yet"}),n.jsxs("p",{style:{color:"var(--brand-gold-strong)",fontWeight:600,fontSize:"1.1rem",margin:"0.5rem 0"},children:["Rs. ",O.price?.toLocaleString()||"N/A"]}),n.jsxs("p",{style:{color:"#666",fontSize:"0.85rem",margin:"0.25rem 0"},children:["Stock: ",O.stockQuantity??0]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1rem"},children:[n.jsx("span",{style:{fontSize:"0.85rem",color:O.isAvailable?"#28a745":"#dc3545"},children:O.isAvailable?"In Stock":"Out of Stock"}),O.isAvailable?n.jsxs("button",{type:"button",onClick:xe=>{xe.stopPropagation(),R(O)},disabled:F===O._id,style:{background:"var(--brand-burgundy)",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer",fontSize:"0.9rem",opacity:F===O._id?.7:1},children:[n.jsx("i",{className:"fas fa-cart-plus"})," ",F===O._id?"Adding...":"Add to Cart"]}):null]})]},O._id)})]})]})})]})}function rp(){const[l,c]=v.useState(null),[s,u]=v.useState([]),[f,w]=v.useState(""),[h,N]=v.useState(!1),[S]=v.useState(()=>JSON.parse(localStorage.getItem("saranyaCart")||"[]")),P=v.useMemo(()=>S.reduce((U,j)=>U+Number(j.quantity||0),0),[S]);v.useEffect(()=>{document.title="Customer Support - Saranya Jewellery"},[]),v.useEffect(()=>{let U;async function j(){const I=await le.checkCustomerAuth();I&&(c(I),await E(),U=window.setInterval(E,5e3))}return j(),()=>{U&&window.clearInterval(U)}},[]);async function E(){try{const U=await le.apiRequest("/api/chat/my-messages");if(!U.ok)return;const j=await U.json();u(j.messages||[])}catch(U){console.error("Error loading messages:",U)}}async function C(U){U.preventDefault();const j=f.trim();if(j){N(!0);try{const I=await le.apiRequest("/api/chat/send",{method:"POST",body:JSON.stringify({message:j})});if(!I.ok){const M=await I.json();alert(M.message||"Failed to send message");return}w(""),await E()}catch(I){console.error("Error sending message:",I),alert(`Failed to send message. Please try again. Error: ${I.message}`)}finally{N(!1)}}}function F(){le.logout()}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"top-bar",children:[n.jsxs("div",{children:[n.jsx("i",{className:"fas fa-phone"})," ",n.jsx("a",{href:"tel:+1234567890",children:"Contact Us"})]}),n.jsxs("div",{children:[n.jsx("span",{style:{marginRight:"1rem",color:"var(--brand-gold-strong)"},children:l?.fullName||l?.email||"Loading..."}),n.jsxs("span",{style:{marginRight:"1rem"},children:["Loyalty: ",l?.loyaltyPoints||0," Points"]}),n.jsx("button",{type:"button",className:"logout-btn",onClick:F,style:{fontSize:"0.85rem",padding:"0.3rem 0.8rem"},children:"Logout"})]})]}),n.jsxs("header",{className:"header",children:[n.jsxs("div",{className:"nav",children:[n.jsx("a",{href:"/",children:"Home"}),n.jsx("a",{href:"/customer-shop",children:"Shop"}),n.jsx("a",{href:"/customer-orders",children:"My Orders"}),n.jsx("a",{href:"/customer-loyalty",children:"Loyalty"}),n.jsx("a",{href:"/customer-support",className:"active",children:"Support"})]}),n.jsx("div",{className:"logo",children:"SARANYA JEWELLERY"}),n.jsxs("div",{className:"header-icons",children:[n.jsx("i",{className:"fas fa-search header-icon"}),n.jsx("i",{className:"fas fa-user header-icon",style:{cursor:"pointer"},onClick:()=>{window.location.href="/customer-dashboard?openProfile=true"}}),n.jsxs("a",{href:"/customer-cart",style:{position:"relative"},children:[n.jsx("i",{className:"fas fa-shopping-cart header-icon"}),P>0?n.jsx("span",{style:{position:"absolute",top:"-8px",right:"-8px",background:"var(--brand-gold-strong)",color:"white",borderRadius:"50%",padding:"2px 6px",fontSize:"0.7rem"},children:P}):null]})]})]}),n.jsx("main",{children:n.jsx("div",{className:"dashboard-container",children:n.jsxs("div",{className:"chat-container",children:[n.jsxs("div",{className:"chat-header",children:[n.jsx("h2",{children:"Customer Support Chat"}),n.jsx("p",{style:{margin:"0.5rem 0 0",opacity:.9,fontSize:"0.9rem"},children:"Our customer care team is here to help you"})]}),n.jsx("div",{className:"chat-messages",children:s.length===0?n.jsxs("div",{className:"empty-chat",children:[n.jsx("i",{className:"fas fa-comments"}),n.jsx("p",{children:"Start a conversation with our customer care team"})]}):s.map(U=>{const j=new Date(U.timestamp).toLocaleString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0,month:"short",day:"numeric"});return n.jsx("div",{className:`message ${U.sender}`,children:n.jsxs("div",{className:"message-bubble",children:[n.jsx("div",{className:"message-sender",children:U.senderName}),n.jsx("div",{className:"message-text",children:U.message}),n.jsx("div",{className:"message-time",children:j})]})},U._id||`${U.timestamp}-${U.message}`)})}),n.jsx("div",{className:"chat-input-area",children:n.jsxs("form",{className:"chat-input-form",onSubmit:C,children:[n.jsx("input",{type:"text",className:"chat-input",placeholder:"Type your message...",required:!0,autoComplete:"off",value:f,onChange:U=>w(U.target.value)}),n.jsxs("button",{type:"submit",className:"chat-send-btn",disabled:h,children:[n.jsx("i",{className:`fas ${h?"fa-spinner fa-spin":"fa-paper-plane"}`})," ",h?"Sending...":"Send"]})]})})]})})}),n.jsx("footer",{className:"footer",children:n.jsx("div",{className:"footer-content",children:n.jsx("p",{children:"© 2026 Saranya Jewellery. All rights reserved."})})})]})}const np=["Ring","Necklace","Bracelet","Earring","Pendant","Chain","Bangles","Anklet","Other"],op=["18K","22K","24K"],ip=["In Stock","Out of Stock","Pre-Order"];function ap(){const[l,c]=v.useState([]),[s,u]=v.useState(!1),[f,w]=v.useState("/customer-login"),[h,N]=v.useState({category:"",karat:"",availability:"",featured:!1}),[S,P]=v.useState(()=>JSON.parse(localStorage.getItem("saranyaCart")||"[]")),E=v.useMemo(()=>S.reduce((j,I)=>j+Number(I.quantity||0),0),[S]);v.useEffect(()=>{document.title="Saranya Jewellery - Elegance Redefined"},[]),v.useEffect(()=>{async function j(){try{const I=await fetch("/api/customer/me",{credentials:"same-origin"});if(!I.ok)return;(await I.json()).customer&&w("/customer-dashboard")}catch{}}j()},[]),v.useEffect(()=>{C()},[h]);async function C(){u(!0);try{const j=new URLSearchParams;h.category&&j.append("category",h.category),h.karat&&j.append("kType",h.karat),h.availability&&j.append("availabilityStatus",h.availability),h.featured&&j.append("featured","true");const I=await fetch(`/api/products?${j.toString()}`);if(!I.ok)throw new Error("Failed to load products");const M=await I.json();c(M)}catch(j){console.error("Error loading products:",j),c([])}finally{u(!1)}}async function F(){try{if((await fetch("/api/customer/me",{credentials:"same-origin"})).ok)return!0}catch(I){console.error("Auth check failed:",I)}const j=`${window.location.pathname}${window.location.search}${window.location.hash||"#collections"}`;return window.location.href=`/customer-login?redirect=${encodeURIComponent(j)}`,!1}async function U(j){if(j.availabilityStatus!=="In Stock"){alert("This product is currently not in stock.");return}if(!await F())return;const M=[...S],W=M.find(R=>R.id===j._id);W?W.quantity+=1:M.push({id:j._id,productId:j._id,name:j.name,price:j.price,image:j.image,imageUrl:j.imageUrl||j.image,category:j.category,karat:j.karat||j.kType,kType:j.kType,weight:j.weight,quantity:1}),localStorage.setItem("saranyaCart",JSON.stringify(M)),P(M),alert(`${j.name} added to cart`)}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"top-bar",children:[n.jsxs("div",{children:[n.jsx("i",{className:"fas fa-phone"})," ",n.jsx("a",{href:"tel:+1234567890",children:"Contact Us"})]}),n.jsx("div",{})]}),n.jsxs("header",{className:"header",children:[n.jsxs("div",{className:"nav",children:[n.jsx("a",{href:"#home",children:"Home"}),n.jsx("a",{href:"#collections",children:"Shop"}),n.jsx("a",{href:"#rings",children:"Rings"}),n.jsx("a",{href:"#necklaces",children:"Necklaces"})]}),n.jsx("div",{className:"logo",children:"SARANYA JEWELLERY"}),n.jsxs("div",{className:"header-icons",children:[n.jsx("i",{className:"fas fa-search header-icon"}),n.jsx("a",{href:f,children:n.jsx("i",{className:"fas fa-user header-icon"})}),n.jsxs("a",{href:"/customer-cart",style:{position:"relative"},children:[n.jsx("i",{className:"fas fa-shopping-cart header-icon"}),E>0?n.jsx("span",{style:{position:"absolute",top:"-8px",right:"-8px",background:"var(--brand-gold-strong)",color:"white",borderRadius:"50%",padding:"2px 6px",fontSize:"0.7rem"},children:E}):null]})]})]}),n.jsxs("main",{children:[n.jsxs("section",{className:"hero",children:[n.jsxs("div",{className:"hero-content",children:[n.jsx("h1",{children:"Customised Diamond & Gemstone Fine Jewellery"}),n.jsx("p",{children:"Mark your Joyous Moments with gifts that last a lifetime. Make it perfect with Saranya no matter if it is a diamond necklace, tennis bracelet, diamond earring, blue sapphire ring, emerald ring or diamond bracelet."}),n.jsx("a",{href:"#collections",className:"btn",children:"Shop Now"})]}),n.jsx("div",{className:"hero-image",children:n.jsx("img",{src:"SaranyaLOGO.jpg",alt:"Elegant Jewellery Collection"})})]}),n.jsxs("section",{className:"category-showcase",children:[n.jsx("h2",{className:"section-title",children:"Shop By Category (Fine Jewellery)"}),n.jsx("div",{className:"category-grid",children:["Ring","Earring","Necklace","Bracelet"].map(j=>n.jsxs("div",{className:"category-card",onClick:()=>{N(I=>({...I,category:j})),document.getElementById("collections")?.scrollIntoView({behavior:"smooth"})},children:[n.jsx("img",{src:"SaranyaLOGO.jpg",alt:j}),n.jsx("h3",{children:j.toUpperCase()})]},j))})]}),n.jsxs("section",{className:"category-showcase",id:"collections",children:[n.jsx("h2",{className:"section-title",children:"Popular Fine Jewellery"}),n.jsxs("div",{className:"filter-container",children:[n.jsx("label",{htmlFor:"categoryFilter",children:"Category:"}),n.jsxs("select",{id:"categoryFilter",value:h.category,onChange:j=>N(I=>({...I,category:j.target.value})),children:[n.jsx("option",{value:"",children:"All Categories"}),np.map(j=>n.jsx("option",{value:j,children:j},j))]}),n.jsx("label",{htmlFor:"kTypeFilter",children:"Karat:"}),n.jsxs("select",{id:"kTypeFilter",value:h.karat,onChange:j=>N(I=>({...I,karat:j.target.value})),children:[n.jsx("option",{value:"",children:"All Types"}),op.map(j=>n.jsx("option",{value:j,children:j},j))]}),n.jsx("label",{htmlFor:"availabilityFilter",children:"Availability:"}),n.jsxs("select",{id:"availabilityFilter",value:h.availability,onChange:j=>N(I=>({...I,availability:j.target.value})),children:[n.jsx("option",{value:"",children:"All"}),ip.map(j=>n.jsx("option",{value:j,children:j},j))]}),n.jsxs("label",{children:[n.jsx("input",{type:"checkbox",checked:h.featured,onChange:j=>N(I=>({...I,featured:j.target.checked}))}),"Featured Only"]})]}),s?n.jsx("div",{className:"loading",children:"Loading our beautiful collection..."}):null,s?null:n.jsx("div",{className:"grid-container",id:"productsGrid",children:l.length===0?n.jsx("div",{className:"no-products",children:"No products found. Check back soon for new arrivals!"}):l.map(j=>{const I=j.availabilityStatus==="In Stock"?"badge-in-stock":j.availabilityStatus==="Out of Stock"?"badge-out-stock":"badge-pre-order";return n.jsxs("div",{className:"product-card",children:[n.jsx("img",{src:j.image||j.imageUrl||"/SaranyaLOGO.jpg",alt:j.name,className:"product-image"}),n.jsxs("div",{className:"product-content",children:[n.jsx("div",{className:"product-name",children:j.name}),n.jsxs("div",{className:"product-price",children:["Rs. ",Number(j.price||0).toLocaleString()]}),n.jsxs("div",{className:"product-details",children:[j.category," | ",j.kType||j.karat," | ",j.weight,"g"]}),n.jsxs("div",{children:[n.jsx("span",{className:`product-badge ${I}`,children:j.availabilityStatus}),j.featured?n.jsx("span",{className:"product-badge badge-featured",children:"Featured"}):null]}),n.jsx("button",{type:"button",className:"home-add-cart-btn",disabled:j.availabilityStatus!=="In Stock",onClick:()=>U(j),children:"Add to Cart"})]})]},j._id)})})]}),n.jsx("section",{className:"featured-sections",children:n.jsxs("div",{className:"featured-grid",children:[n.jsxs("div",{className:"featured-item",children:[n.jsx("img",{src:"SaranyaLOGO.jpg",alt:"Anniversary Gift Guide"}),n.jsx("h3",{children:"Anniversary Gift Guide"})]}),n.jsxs("div",{className:"featured-item",children:[n.jsx("img",{src:"SaranyaLOGO.jpg",alt:"Personalized Jewellery"}),n.jsx("h3",{children:"Personalized Jewellery"})]}),n.jsxs("div",{className:"featured-item",children:[n.jsx("img",{src:"SaranyaLOGO.jpg",alt:"Gemstone Jewellery"}),n.jsx("h3",{children:"Gemstone Jewellery Below Rs. 5,000"})]})]})}),n.jsxs("section",{className:"category-showcase",id:"about",children:[n.jsx("h2",{className:"section-title",children:"Years Of Craftsmanship"}),n.jsx("p",{className:"section-subtitle",children:"We are passionate about the quality of our fine jewellery. With decades of experience, our jewellery craftsmen dedicate themselves to perfecting their jewellery crafting skills. Each unique piece is created by order with exceptional finishing, which is the hallmark of our brand."}),n.jsx("div",{className:"text-center",children:n.jsx("a",{href:"#collections",className:"btn",children:"Shop Jewellery"})})]})]}),n.jsxs("footer",{className:"footer",children:[n.jsxs("div",{className:"footer-content",children:[n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"ABOUT SARANYA"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"#story",children:"Our Story"})}),n.jsx("li",{children:n.jsx("a",{href:"#education",children:"Education"})}),n.jsx("li",{children:n.jsx("a",{href:"#faq",children:"FAQ"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"WHY SARANYA?"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"#quality",children:"Quality Guarantee"})}),n.jsx("li",{children:n.jsx("a",{href:"#warranty",children:"Lifetime Warranty"})}),n.jsx("li",{children:n.jsx("a",{href:"#certification",children:"Certified Jewellery"})}),n.jsx("li",{children:n.jsx("a",{href:"#shipping",children:"Free Shipping"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"SERVICES"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"#custom",children:"Custom Design"})}),n.jsx("li",{children:n.jsx("a",{href:"#resize",children:"Free Ring Resize"})}),n.jsx("li",{children:n.jsx("a",{href:"#gift",children:"Gift Services"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"POLICIES"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"#policies",children:"Our Policies"})}),n.jsx("li",{children:n.jsx("a",{href:"#privacy",children:"Privacy Policy"})}),n.jsx("li",{children:n.jsx("a",{href:"#terms",children:"Terms & Conditions"})}),n.jsx("li",{children:n.jsx("a",{href:"#returns",children:"Return Policy"})}),n.jsx("li",{children:n.jsx("a",{href:"#payment",children:"Payment Methods"})})]})]}),n.jsxs("div",{className:"footer-section",children:[n.jsx("h3",{children:"CONNECT WITH US"}),n.jsxs("div",{className:"social-links",children:[n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-facebook-f"})}),n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-instagram"})}),n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-twitter"})}),n.jsx("a",{href:"#",className:"social-icon",children:n.jsx("i",{className:"fab fa-pinterest"})})]})]})]}),n.jsx("div",{className:"footer-bottom",children:n.jsx("p",{children:"© 2026 Saranya Jewellery. All Rights Reserved."})})]})]})}const Ga={title:"Inventory Management – Saranya Jewellers",html:`<!-- MAIN -->
<main class="main">
  <div class="topbar">
    <div class="page-title">✦ Inventory Management</div>
    <div class="topbar-right">
      <div class="gold-rate-badge">
        <span class="label">Gold Rate (22K):</span>
        <span class="value" id="topbarRate">LKR 6,820 /g</span>
      </div>
      <button class="btn btn-gold" onclick="openModal('addStockModal')">
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Add Stock
      </button>
      <button class="btn btn-outline" onclick="logout()" style="color:#fff;border-color:rgba(255,255,255,0.45);background:transparent;">
        Logout
      </button>
    </div>
  </div>

  <div class="content">

    <div class="tab-bar">
      <button class="tab active" onclick="switchTab('stock',this)">Stock</button>
      <button class="tab" onclick="switchTab('goldrate',this)">Gold Rates</button>
      <button class="tab" onclick="switchTab('suppliers',this)">Suppliers</button>
      <button class="tab" onclick="switchTab('alerts',this)">
        Alerts &nbsp;<span id="alertCount" style="background:var(--maroon);color:var(--gold-light);font-size:10px;padding:1px 7px;border-radius:10px;vertical-align:middle;">3</span>
      </button>
    </div>

    <!-- STOCK TAB -->
    <div id="tab-stock" class="tab-content active">
      <div class="stats-grid">
        <div class="stat-card c-gold">
          <div class="stat-icon" style="background:rgba(201,168,76,0.1);">💍</div>
          <div class="stat-label">Total Items</div>
          <div class="stat-value">247</div>
          <div class="stat-sub up">↑ 12 added this week</div>
        </div>
        <div class="stat-card c-green">
          <div class="stat-icon" style="background:rgba(46,125,82,0.1);">✅</div>
          <div class="stat-label">In Stock</div>
          <div class="stat-value">198</div>
          <div class="stat-sub">80% of inventory</div>
        </div>
        <div class="stat-card c-warn">
          <div class="stat-icon" style="background:rgba(146,96,10,0.1);">⚠️</div>
          <div class="stat-label">Low Stock</div>
          <div class="stat-value">32</div>
          <div class="stat-sub warn">Needs reorder</div>
        </div>
        <div class="stat-card c-red">
          <div class="stat-icon" style="background:rgba(122,21,48,0.08);">🚫</div>
          <div class="stat-label">Out of Stock</div>
          <div class="stat-value">17</div>
          <div class="stat-sub down">Action required</div>
        </div>
      </div>

      <div class="table-card">
        <div class="table-header">
          <div class="table-title">Stock Inventory</div>
          <div class="table-actions">
            <div class="search-box">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" placeholder="Search items..." id="stockSearch" oninput="filterTable()"/>
            </div>
            <select class="btn btn-ghost" id="categoryFilter" onchange="filterTable()" style="padding:8px 12px;">
              <option value="">All Categories</option>
              <option>Ring</option><option>Necklace</option><option>Bangle</option>
              <option>Earring</option><option>Pendant</option><option>Chain</option>
            </select>
            <button class="btn btn-outline" onclick="exportCSV()">
              <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Export CSV
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Serial No.</th><th>Item Name</th><th>Category</th><th>Karat</th>
              <th>Weight (g)</th><th>Qty</th><th>Status</th><th>Supplier</th><th>Actions</th>
            </tr>
          </thead>
          <tbody id="stockBody"></tbody>
        </table>
      </div>
    </div>

    <!-- GOLD RATE TAB -->
    <div id="tab-goldrate" class="tab-content">
      <div class="two-col">
        <div>
          <div class="gold-rate-card">
            <div class="card-title">Current Gold Rate — Today</div>
            <div class="rate-display">
              <span class="currency">LKR</span>
              <span class="amount" id="currentRateDisplay">6,820</span>
              <span class="per">per gram (22K)</span>
            </div>
            <div class="rate-sub-row">
              <span>18K: <strong id="rate18k">LKR 5,578</strong></span>
              <span>24K: <strong id="rate24k">LKR 7,440</strong></span>
            </div>
            <div style="display:flex;gap:12px;">
              <div style="flex:1;"><label>Update Today's Rate (22K, LKR/g)</label><input type="number" id="newGoldRate" placeholder="e.g. 6820"/></div>
              <div style="display:flex;align-items:flex-end;"><button class="btn btn-gold" onclick="updateGoldRate()">Update Rate</button></div>
            </div>
          </div>
          <div class="table-card">
            <div class="table-header"><div class="table-title">Rate History</div></div>
            <table>
              <thead><tr><th>Date</th><th>22K (LKR/g)</th><th>18K (LKR/g)</th><th>24K (LKR/g)</th><th>Change</th></tr></thead>
              <tbody id="rateHistoryBody"></tbody>
            </table>
          </div>
        </div>
        <div>
          <div class="gold-rate-card">
            <div class="card-title">Price Calculator</div>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <div><label>Weight (grams)</label><input type="number" id="calcWeight" placeholder="Enter weight" oninput="calculate()"/></div>
              <div><label>Karat</label><select id="calcKarat" onchange="calculate()"><option value="22">22K</option><option value="18">18K</option><option value="24">24K</option></select></div>
              <div><label>Making Charges (%)</label><input type="number" id="calcMaking" value="12" oninput="calculate()"/></div>
              <div style="background:linear-gradient(135deg,var(--maroon-dark),var(--maroon));border-radius:10px;padding:20px;">
                <div style="font-size:11px;color:rgba(255,255,255,0.55);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px;">Estimated Price</div>
                <div id="calcResult" style="font-family:'Cormorant Garamond',serif;font-size:36px;font-weight:700;color:var(--gold-light);">LKR 0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SUPPLIERS TAB -->
    <div id="tab-suppliers" class="tab-content">
      <div style="display:flex;justify-content:flex-end;margin-bottom:18px;">
        <button class="btn btn-gold" onclick="openModal('addSupplierModal')">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Supplier
        </button>
      </div>
      <div class="table-card">
        <div class="table-header"><div class="table-title">Supplier Directory</div></div>
        <table>
          <thead><tr><th>ID</th><th>Name</th><th>Contact</th><th>Email</th><th>Location</th><th>Items Supplied</th><th>Actions</th></tr></thead>
          <tbody id="supplierBody"></tbody>
        </table>
      </div>
    </div>

    <!-- ALERTS TAB -->
    <div id="tab-alerts" class="tab-content">
      <p style="margin-bottom:18px;font-size:14px;color:var(--text-muted);">Real-time alerts for stock requiring attention.</p>
      <div id="alertsContainer"></div>
    </div>

  </div>
</main>

<!-- MODAL: Add Stock -->
<div class="modal-overlay" id="addStockModal">
  <div class="modal">
    <div class="modal-title">Add New Stock Entry</div>
    <div class="form-row">
      <div class="form-group"><label>Item Name *</label><input type="text" id="si_name" placeholder="e.g. Gold Ring Floral"/></div>
      <div class="form-group"><label>Category *</label><select id="si_cat"><option value="">Select...</option><option>Ring</option><option>Necklace</option><option>Bangle</option><option>Earring</option><option>Pendant</option><option>Chain</option></select></div>
      <div class="form-group"><label>Karat</label><select id="si_karat"><option>22K</option><option>18K</option><option>24K</option></select></div>
      <div class="form-group"><label>Weight (g) *</label><input type="number" id="si_weight" placeholder="e.g. 5.4"/></div>
      <div class="form-group"><label>Quantity *</label><input type="number" id="si_qty" placeholder="e.g. 10"/></div>
      <div class="form-group"><label>Supplier</label><select id="si_supplier"><option value="">Select...</option><option>Raja Jewellers</option><option>Swarnamahal Jewellers Ltd</option><option>Vogue Jewellers Ltd</option></select></div>
      <div class="form-group full"><label>Notes</label><textarea id="si_notes" placeholder="Any additional notes..."></textarea></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal('addStockModal')">Cancel</button>
      <button class="btn btn-gold" onclick="addStock()">Add Stock Entry</button>
    </div>
  </div>
</div>

<!-- MODAL: Edit Stock -->
<div class="modal-overlay" id="editStockModal">
  <div class="modal">
    <div class="modal-title">Edit Stock Entry</div>
    <input type="hidden" id="edit_idx"/>
    <div class="form-row">
      <div class="form-group"><label>Item Name</label><input type="text" id="edit_name"/></div>
      <div class="form-group"><label>Category</label><select id="edit_cat"><option>Ring</option><option>Necklace</option><option>Bangle</option><option>Earring</option><option>Pendant</option><option>Chain</option></select></div>
      <div class="form-group"><label>Karat</label><select id="edit_karat"><option>22K</option><option>18K</option><option>24K</option></select></div>
      <div class="form-group"><label>Weight (g)</label><input type="number" id="edit_weight"/></div>
      <div class="form-group"><label>Quantity</label><input type="number" id="edit_qty"/></div>
      <div class="form-group"><label>Supplier</label><input type="text" id="edit_supplier"/></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal('editStockModal')">Cancel</button>
      <button class="btn btn-gold" onclick="saveEdit()">Save Changes</button>
    </div>
  </div>
</div>

<!-- MODAL: Add Supplier -->
<div class="modal-overlay" id="addSupplierModal">
  <div class="modal">
    <div class="modal-title">Add New Supplier</div>
    <div class="form-row">
      <div class="form-group"><label>Supplier Name *</label><input type="text" id="sup_name" placeholder="Company name"/></div>
      <div class="form-group"><label>Contact No. *</label><input type="text" id="sup_contact" placeholder="+91 XXXXX XXXXX"/></div>
      <div class="form-group"><label>Email</label><input type="email" id="sup_email" placeholder="email@example.com"/></div>
      <div class="form-group"><label>Location</label><input type="text" id="sup_location" placeholder="City, State"/></div>
      <div class="form-group full"><label>Items Supplied</label><input type="text" id="sup_items" placeholder="e.g. Rings, Necklaces"/></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal('addSupplierModal')">Cancel</button>
      <button class="btn btn-gold" onclick="addSupplier()">Add Supplier</button>
    </div>
  </div>
</div>

<div class="toast" id="toast"><span id="toastMsg"></span></div>`,scripts:[{type:null,content:`
let stockData = [];
let supplierData = [];
let goldRates = [
  {date:'14 Mar 2026',r22:6820,r18:5578,r24:7440,change:+80},
  {date:'13 Mar 2026',r22:6740,r18:5516,r24:7352,change:-20},
  {date:'12 Mar 2026',r22:6760,r18:5532,r24:7376,change:+50},
  {date:'11 Mar 2026',r22:6710,r18:5495,r24:7320,change:-30},
  {date:'10 Mar 2026',r22:6740,r18:5516,r24:7352,change:+10},
];
let serialCounter = 9;

function getStatus(qty){ if(qty===0)return{label:'Out of Stock',cls:'out'}; if(qty<=3)return{label:'Low Stock',cls:'low'}; return{label:'In Stock',cls:'in-stock'}; }

function renderStock(data){
  document.getElementById('stockBody').innerHTML = data.map((item,i)=>{
    const st=getStatus(item.qty);
    return \`<tr>
      <td><span class="serial-badge">\${item.serial}</span></td>
      <td><strong>\${item.name}</strong></td><td>\${item.cat}</td><td>\${item.karat}</td>
      <td>\${item.weight}g</td><td><strong style="color:var(--maroon)">\${item.qty}</strong></td>
      <td><span class="status-badge \${st.cls}"><span class="status-dot"></span>\${st.label}</span></td>
      <td>\${item.supplier}</td>
      <td><div class="row-actions">
        <button class="icon-btn" title="Edit" onclick="editStock(\${i})"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
        <button class="icon-btn danger" title="Delete" onclick="deleteStock(\${i})"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg></button>
      </div></td>
    </tr>\`;
  }).join('');
}

function filterTable(){
  const q=document.getElementById('stockSearch').value.toLowerCase();
  const cat=document.getElementById('categoryFilter').value;
  renderStock(stockData.filter(item=>(item.name.toLowerCase().includes(q)||item.serial.toLowerCase().includes(q))&&(cat===''||item.cat===cat)));
}

function renderGoldRates(){
  document.getElementById('rateHistoryBody').innerHTML=goldRates.map(r=>{
    const chg=r.change>=0?\`<span style="color:var(--green);font-weight:600">↑ +\${r.change}</span>\`:\`<span style="color:var(--red);font-weight:600">↓ \${r.change}</span>\`;
    return\`<tr><td>\${r.date}</td><td>LKR \${r.r22.toLocaleString()}</td><td>LKR \${r.r18.toLocaleString()}</td><td>LKR \${r.r24.toLocaleString()}</td><td>\${chg}</td></tr>\`;
  }).join('');
}

function calculate(){
  const w=parseFloat(document.getElementById('calcWeight').value)||0;
  const k=document.getElementById('calcKarat').value;
  const making=parseFloat(document.getElementById('calcMaking').value)||0;
  const base22=goldRates[0].r22;
  const rate=k==='22'?base22:k==='18'?Math.round(base22*0.818):Math.round(base22*1.091);
  const base=w*rate; const total=base+(base*making/100);
  document.getElementById('calcResult').textContent=\`LKR \${Math.round(total).toLocaleString()}\`;
}

function renderSuppliers(){
  document.getElementById('supplierBody').innerHTML=supplierData.map((s,i)=>\`<tr>
    <td><span class="serial-badge">\${s.id}</span></td><td><strong>\${s.name}</strong></td>
    <td>\${s.contact}</td><td>\${s.email}</td><td>\${s.location}</td><td>\${s.items}</td>
    <td><div class="row-actions">
      <button class="icon-btn" onclick="editSupplier(\${i})"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
      <button class="icon-btn danger" onclick="deleteSupplier(\${i})"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg></button>
    </div></td>
  </tr>\`).join('');
}

function addSupplier(){
  const name=document.getElementById('sup_name').value.trim();
  const contact=document.getElementById('sup_contact').value.trim();
  if(!name||!contact){showToast('Name and contact are required.','error');return;}
  const id=\`SUP-\${String(supplierData.length+1).padStart(3,'0')}\`;
  supplierData.push({id,name,contact,email:document.getElementById('sup_email').value||'-',location:document.getElementById('sup_location').value||'-',items:document.getElementById('sup_items').value||'-'});
  renderSuppliers(); closeModal('addSupplierModal');
  ['sup_name','sup_contact','sup_email','sup_location','sup_items'].forEach(id=>document.getElementById(id).value='');
  showToast('✓ Supplier added.','success');
}

function editSupplier(i){
  const s=supplierData[i];
  const name=prompt('Supplier Name:',s.name); if(!name)return;
  const contact=prompt('Contact:',s.contact); const email=prompt('Email:',s.email);
  const location=prompt('Location:',s.location); const items=prompt('Items Supplied:',s.items);
  supplierData[i]={...s,name,contact:contact||s.contact,email:email||s.email,location:location||s.location,items:items||s.items};
  renderSuppliers(); showToast('✓ Updated.','success');
}

function deleteSupplier(i){
  if(!confirm(\`Remove "\${supplierData[i].name}"?\`))return;
  supplierData.splice(i,1); renderSuppliers(); showToast('✓ Removed.','success');
}

function updateAlerts(){
  const low=stockData.filter(s=>s.qty>0&&s.qty<=3);
  const out=stockData.filter(s=>s.qty===0);
  let html='';
  out.forEach(item=>{html+=\`<div class="alert-item danger"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span class="alert-msg"><strong>\${item.name}</strong> (\${item.serial}) — OUT OF STOCK. Reorder immediately.</span><span class="alert-time">Today</span></div>\`;});
  low.forEach(item=>{html+=\`<div class="alert-item warning"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><span class="alert-msg"><strong>\${item.name}</strong> (\${item.serial}) — Only <strong>\${item.qty}</strong> unit(s) left.</span><span class="alert-time">Today</span></div>\`;});
  if(!html)html=\`<div style="padding:32px;text-align:center;color:var(--text-muted);font-size:14px;">✓ All stock levels are healthy.</div>\`;
  document.getElementById('alertsContainer').innerHTML=html;
  document.getElementById('alertCount').textContent=out.length+low.length;
}

function exportCSV(){
  const headers=['Serial','Name','Category','Karat','Weight(g)','Qty','Status','Supplier'];
  const rows=stockData.map(s=>[s.serial,s.name,s.cat,s.karat,s.weight,s.qty,getStatus(s.qty).label,s.supplier]);
  const csv=[headers,...rows].map(r=>r.join(',')).join('\\n');
  const a=document.createElement('a'); a.href='data:text/csv,'+encodeURIComponent(csv);
  a.download='inventory_'+new Date().toISOString().slice(0,10)+'.csv'; a.click();
  showToast('✓ CSV exported.','success');
}

function switchTab(name,el){
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active'); el.classList.add('active');
}

function openModal(id){document.getElementById(id).classList.add('open');}
function closeModal(id){document.getElementById(id).classList.remove('open');}
document.querySelectorAll('.modal-overlay').forEach(o=>{o.addEventListener('click',e=>{if(e.target===o)o.classList.remove('open');});});

function showToast(msg,type='success'){
  const t=document.getElementById('toast'); document.getElementById('toastMsg').textContent=msg;
  t.className=\`toast \${type} show\`; setTimeout(()=>t.classList.remove('show'),3200);
}

async function logout() {
  try {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'same-origin' });
  } catch (err) {
    console.error('Logout failed:', err);
  } finally {
    window.location.href = '/staff-login';
  }
}

`}]};function lp(){const l=v.useRef(null);return v.useEffect(()=>{const c=l.current;if(!c)return;document.title=Ga.title,c.innerHTML=Ga.html;const s=[];for(const u of Ga.scripts||[]){const f=document.createElement("script");u.type&&(f.type=u.type),f.textContent=u.content,c.appendChild(f),s.push(f)}return()=>{s.forEach(u=>u.remove()),c.innerHTML=""}},[]),n.jsx("div",{ref:l})}const Ja={title:"Loyalty Management - Saranya Jewellery",html:`<!-- Pending Approval Overlay -->
    <div id="pendingOverlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 9999; align-items: center; justify-content: center;">
        <div style="background: white; padding: 3rem; border-radius: 8px; text-align: center; max-width: 500px;">
            <h2 style="color: #6f0022; margin-bottom: 1rem;">Pending Approval</h2>
            <p style="color: #666; margin-bottom: 2rem;">Your account is awaiting admin approval. Please check back later.</p>
            <button onclick="logout()" style="background: #6f0022; color: white; padding: 0.8rem 2rem; border: none; border-radius: 4px; cursor: pointer;">Logout</button>
        </div>
    </div>

    <div style="max-width: 1400px; margin: 0 auto; padding: 2rem;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #6f0022; color: white; padding: 1.5rem 2rem; border-radius: 8px; margin-bottom: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div>
                <h1 style="margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #ffffff;">Loyalty Management</h1>
                <p style="margin: 0.5rem 0 0; opacity: 0.9; color: #ffffff;">Welcome, <span id="userName" style="color: #ffffff;">Manager</span></p>
            </div>
            <button onclick="logout()" style="background: white; color: #6f0022; border: none; padding: 0.75rem 1.5rem; border-radius: 4px; cursor: pointer; font-weight: 600;">Logout</button>
        </div>

        <!-- Alert -->
        <div id="alertBox" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; display: none;"></div>

        <!-- TIER CONFIGURATION SECTION -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Tier Configuration</h2>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                <div id="silverTierCard" style="background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 100%); padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="margin: 0 0 0.5rem; font-size: 1.3rem; color: #4a4a4a;">Silver Tier</h3>
                    <p id="silverRange" style="margin: 0 0 1rem; color: #666; font-size: 0.9rem;">Points Range: 0 - 500 pts (Rs. 0 - Rs. 50,000)</p>
                    <p id="silverMultiplier" style="margin: 0 0 0.5rem; color: #4a4a4a; font-weight: 600;">Points Multiplier: 1x</p>
                    <div id="silverBenefits" style="background: rgba(255,255,255,0.7); padding: 0.8rem; border-radius: 4px; font-size: 0.9rem;">
                        <ul style="margin: 0; padding-left: 1.5rem; color: #555;"></ul>
                    </div>
                    <button onclick="openEditTierModal('Silver')" style="width: 100%; margin-top: 1rem; padding: 0.6rem; background: #6f0022; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">Edit</button>
                </div>

                <div id="goldTierCard" style="background: linear-gradient(135deg, #e0bf63 0%, #d4a747 100%); padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="margin: 0 0 0.5rem; font-size: 1.3rem; color: #3e2723;">Gold Tier</h3>
                    <p id="goldRange" style="margin: 0 0 1rem; color: #5d4037; font-size: 0.9rem;">Points Range: 500 - 2,000 pts (Rs. 50,000 - Rs. 2,00,000)</p>
                    <p id="goldMultiplier" style="margin: 0 0 0.5rem; color: #3e2723; font-weight: 600;">Points Multiplier: 1.5x</p>
                    <div id="goldBenefits" style="background: rgba(255,255,255,0.8); padding: 0.8rem; border-radius: 4px; font-size: 0.9rem;">
                        <ul style="margin: 0; padding-left: 1.5rem; color: #3e2723;"></ul>
                    </div>
                    <button onclick="openEditTierModal('Gold')" style="width: 100%; margin-top: 1rem; padding: 0.6rem; background: #3e2723; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">Edit</button>
                </div>

                <div id="platinumTierCard" style="background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%); padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); color: white;">
                    <h3 style="margin: 0 0 0.5rem; font-size: 1.3rem;">Platinum Tier</h3>
                    <p id="platinumRange" style="margin: 0 0 1rem; opacity: 0.9; font-size: 0.9rem;">Points Range: 2,000+ pts (Rs. 2,00,000+)</p>
                    <p id="platinumMultiplier" style="margin: 0 0 0.5rem; font-weight: 600;">Points Multiplier: 2x</p>
                    <div id="platinumBenefits" style="background: rgba(255,255,255,0.15); padding: 0.8rem; border-radius: 4px; font-size: 0.9rem;">
                        <ul style="margin: 0; padding-left: 1.5rem;"></ul>
                    </div>
                    <button onclick="openEditTierModal('Platinum')" style="width: 100%; margin-top: 1rem; padding: 0.6rem; background: white; color: #2d3748; border: none; border-radius: 4px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">Edit</button>
                </div>
            </div>
        </div>

        <!-- Stats Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #6f0022; margin: 0 0 0.5rem;" id="activeMembers">0</h3>
                <p style="margin: 0; color: #666;">Active Members</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #c0c0c0; margin: 0 0 0.5rem;" id="silverCount">0</h3>
                <p style="margin: 0; color: #666;">Silver Members</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #e0bf63; margin: 0 0 0.5rem;" id="goldCount">0</h3>
                <p style="margin: 0; color: #666;">Gold Members</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #4a5568; margin: 0 0 0.5rem;" id="platinumCount">0</h3>
                <p style="margin: 0; color: #666;">Platinum Members</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #e0bf63; margin: 0 0 0.5rem;" id="pointsRedeemed">0</h3>
                <p style="margin: 0; color: #666;">Points Redeemed</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #17a2b8; margin: 0 0 0.5rem;" id="pointsIssued">0</h3>
                <p style="margin: 0; color: #666;">Points Issued</p>
            </div>
        </div>

        <!-- MEMBER MANAGEMENT SECTION -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                <h2 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Loyalty Members</h2>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <button onclick="openPointsModal()" style="background: #e0bf63; color: #3e2723; padding: 0.8rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Award Points</button>
                </div>
            </div>

            <!-- Filter -->
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                <button class="filter-btn active" onclick="filterMembers('all')">All Customers</button>
                <button class="filter-btn" onclick="filterMembers('loyalty')">Loyalty Members</button>
                <button class="filter-btn" onclick="filterMembers('Silver')">Silver</button>
                <button class="filter-btn" onclick="filterMembers('Gold')">Gold</button>
                <button class="filter-btn" onclick="filterMembers('Platinum')">Platinum</button>
            </div>

            <!-- Members Table -->
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                    <thead>
                        <tr>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Name</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Email</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Status</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Tier</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Points</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9;">Total Spent</th>
                            <th style="padding: 1rem; text-align: center; border-bottom: 2px solid #eee; background: #f9f9f9;">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="membersTable">
                        <tr><td colspan="7" style="padding: 2rem; text-align: center; color: #999;">Loading members...</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- PROMOTIONAL OFFERS SECTION -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Promotional Offers</h2>
                <button onclick="openCreateOfferModal()" style="background: #6f0022; color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Create New Offer</button>
            </div>

            <div id="offersContainer" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
                <p style="grid-column: 1/-1; text-align: center; color: #999;">Loading offers...</p>
            </div>
        </div>
    </div>

    <!-- Edit Tier Modal -->
    <div id="editTierModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); align-items: center; justify-content: center; z-index: 1000;">
        <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 600px; width: 90%; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem;">
                <h3 id="editTierTitle" style="margin: 0;">Edit Tier Configuration</h3>
                <button onclick="closeEditTierModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            <form id="editTierForm">
                <input type="hidden" id="tierName">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Min Spent (Rs.) * (1 point = Rs. 100)</label>
                    <input type="number" id="tierMinSpent" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Max Spent (Rs.) *</label>
                    <input type="number" id="tierMaxSpent" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                </div>
                <p id="tierPointRangePreview" style="margin: -0.4rem 0 1rem; color: #666; font-size: 0.9rem;"></p>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Points Multiplier *</label>
                    <input type="number" id="tierMultiplier" required step="0.1" min="1" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Benefits (one per line)</label>
                    <textarea id="tierBenefits" rows="4" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; font-family: monospace;"></textarea>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Description</label>
                    <textarea id="tierDescription" rows="3" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;"></textarea>
                </div>
                <button type="submit" style="width: 100%; background: #6f0022; color: white; padding: 0.8rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Save Changes</button>
            </form>
        </div>
    </div>

    <!-- Add to Loyalty Modal -->
    <div id="addLoyaltyModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); align-items: center; justify-content: center; z-index: 1000;">
        <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 500px; width: 90%;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem;">
                <h3 style="margin: 0;">Add Customer to Loyalty</h3>
                <button onclick="closeAddLoyaltyModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            <form id="addLoyaltyForm">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Customer *</label>
                    <select id="loyaltyCustomer" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                        <option value="">Select a customer...</option>
                    </select>
                </div>
                <button type="submit" style="width: 100%; background: #28a745; color: white; padding: 0.8rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Add to Loyalty (Silver Tier)</button>
            </form>
        </div>
    </div>

    <!-- Award Points Modal -->
    <div id="pointsModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); align-items: center; justify-content: center; z-index: 1000;">
        <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 500px; width: 90%;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem;">
                <h3 style="margin: 0;">Award Loyalty Points</h3>
                <button onclick="closePointsModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            <form id="pointsForm">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Loyalty Customer *</label>
                    <select id="pointsCustomerId" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                        <option value="">Select a customer...</option>
                    </select>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Points to Award *</label>
                    <input type="number" id="pointsAmount" required min="1" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Reason</label>
                    <textarea id="pointsReason" rows="3" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;" placeholder="e.g., Special promotion, compensation, bonus"></textarea>
                </div>
                <button type="submit" style="width: 100%; background: #e0bf63; color: #3e2723; padding: 0.8rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Award Points</button>
            </form>
        </div>
    </div>

    <!-- Create/Edit Offer Modal -->
    <div id="offerModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); align-items: center; justify-content: center; z-index: 1000;">
        <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 600px; width: 90%; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem;">
                <h3 id="offerModalTitle" style="margin: 0;">Create Promotional Offer</h3>
                <button onclick="closeOfferModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            <form id="offerForm">
                <input type="hidden" id="offerId">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Offer Title *</label>
                    <input type="text" id="offerTitle" required placeholder="e.g., New Year Special" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Description *</label>
                    <textarea id="offerDescription" required rows="3" placeholder="Offer details and terms..." style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;"></textarea>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem;">Discount % *</label>
                        <input type="number" id="discountPercentage" required min="0" max="100" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem;">Or Discount Amount (Rs.)</label>
                        <input type="number" id="discountAmount" min="0" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                    </div>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Applicable Tier *</label>
                    <select id="offerTierType" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                        <option value="">Select tier...</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                        <option value="All">All Tiers</option>
                    </select>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Valid Until *</label>
                    <input type="date" id="offerValidUntil" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box;">
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button type="submit" style="flex: 1; background: #6f0022; color: white; padding: 0.8rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Save Offer</button>
                    <button type="button" onclick="sendOfferEmail()" id="sendEmailBtn" style="flex: 1; background: #17a2b8; color: white; padding: 0.8rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600; display: none;">Send via Email</button>
                </div>
            </form>
        </div>
    </div>

    <style>
        .filter-btn { padding: 0.6rem 1.2rem; border: 1px solid #6f0022; background: white; color: #6f0022; cursor: pointer; border-radius: 4px; font-weight: 500; transition: all 0.3s; }
        .filter-btn:hover { background: #f5f5f5; }
        .filter-btn.active { background: #6f0022; color: white; }
        .offer-card { background: #f9f9f9; border-left: 4px solid #e0bf63; padding: 1.5rem; border-radius: 4px; }
        .offer-card h4 { margin: 0 0 0.5rem; color: #6f0022; }
        .offer-actions { display: flex; gap: 0.5rem; margin-top: 1rem; }
        .offer-actions button { padding: 0.4rem 0.8rem; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9rem; font-weight: 600; }
    </style>`,scripts:[{type:"module",content:`
        import authManager from '/src/auth.js';

        let allMembers = [];
        let allCustomers = [];
        let loyaltyTiers = {};
        let currentFilter = 'all';
        let allOffers = [];
        let editingOfferId = null;
        let editingTierId = null;

        async function checkAuth() {
            const user = await authManager.checkStaffAuth('Loyalty Management');
            if (!user) return false;
            if (user.needsApproval) {
                document.getElementById('pendingOverlay').style.display = 'flex';
                return false;
            }
            document.getElementById('userName').textContent = user.fullName || user.email;
            return true;
        }

        async function loadAllData() {
            await Promise.all([
                loadMembers(),
                loadAllCustomers(),
                loadTiers(),
                loadOffers()
            ]);
        }

        async function loadMembers() {
            try {
                const res = await fetch('/api/loyalty/members', { credentials: 'same-origin' });
                if (res.ok) allMembers = await res.json();
                else allMembers = [];
            } catch (e) { allMembers = []; }
            updateStats();
            displayMembers();
        }

        async function loadAllCustomers() {
            try {
                const res = await fetch('/api/customer', { credentials: 'same-origin' });
                if (res.ok) allCustomers = await res.json();
                else allCustomers = [];
            } catch (e) { allCustomers = []; }
            populateCustomerSelects();
        }

        async function loadTiers() {
            try {
                const res = await fetch('/api/loyalty/tiers', { credentials: 'same-origin' });
                if (res.ok) {
                    const tiers = await res.json();
                    loyaltyTiers = {};
                    tiers.forEach(tier => loyaltyTiers[tier.tierName] = tier);
                    displayTierCards();
                }
            } catch (e) { console.error('Error loading tiers:', e); }
        }

        async function loadOffers() {
            try {
                const res = await fetch('/api/loyalty/offers', { credentials: 'same-origin' });
                if (res.ok) { allOffers = await res.json(); }
                else { allOffers = []; }
            } catch (e) { allOffers = []; }
            displayOffers();
        }

        function formatTierRangeWithPoints(minSpent, maxSpent) {
            const min = Number(minSpent) || 0;
            const max = Number(maxSpent) || 0;
            const minPoints = Math.floor(min / 100);
            const maxPoints = Math.floor(max / 100);

            if (max >= 999999999) {
                return \`Points Range: \${minPoints.toLocaleString()}+ pts (Rs. \${min.toLocaleString()}+)\`;
            }

            return \`Points Range: \${minPoints.toLocaleString()} - \${maxPoints.toLocaleString()} pts (Rs. \${min.toLocaleString()} - Rs. \${max.toLocaleString()})\`;
        }

        function updateTierPointRangePreview() {
            const minSpent = parseInt(document.getElementById('tierMinSpent').value, 10) || 0;
            const maxSpent = parseInt(document.getElementById('tierMaxSpent').value, 10) || 0;
            document.getElementById('tierPointRangePreview').textContent = formatTierRangeWithPoints(minSpent, maxSpent);
        }

        function displayTierCards() {
            const tierNames = ['Silver', 'Gold', 'Platinum'];
            tierNames.forEach(tierName => {
                const tier = loyaltyTiers[tierName];
                if (!tier) return;
                
                const benefitsHtml = (tier.benefits || []).map(b => \`<li>\${b}</li>\`).join('');
                const card = document.getElementById(tierName.toLowerCase() + 'TierCard');
                
                card.querySelector(\`#\${tierName.toLowerCase()}Range\`).textContent = 
                    formatTierRangeWithPoints(tier.minSpent, tier.maxSpent);
                card.querySelector(\`#\${tierName.toLowerCase()}Multiplier\`).textContent = 
                    \`Points Multiplier: \${tier.pointMultiplier}x\`;
                card.querySelector(\`#\${tierName.toLowerCase()}Benefits ul\`).innerHTML = benefitsHtml;
            });
        }

        function displayOffers() {
            const container = document.getElementById('offersContainer');
            if (allOffers.length === 0) {
                container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No offers created yet</p>';
                return;
            }

            container.innerHTML = allOffers.map(offer => \`
                <div class="offer-card">
                    <h4>\${offer.title}</h4>
                    <p style="font-size: 0.9rem; color: #666; margin: 0 0 0.5rem;">\${offer.description}</p>
                    <div style="font-size: 0.9rem; color: #333; margin-bottom: 0.5rem;">
                        <strong>Discount:</strong> \${offer.discountPercentage}%\${offer.discountAmount ? \` or Rs. \${offer.discountAmount}\` : ''}<br>
                        <strong>Tier:</strong> \${offer.tierType}<br>
                        <strong>Valid Until:</strong> \${new Date(offer.validUntil).toLocaleDateString()}<br>
                        <strong>Status:</strong> \${offer.emailSent ? 'Email Sent' : 'Not Sent'} \${offer.recipientsCount ? \`(\${offer.recipientsCount} recipients)\` : ''}
                    </div>
                    <div class="offer-actions">
                        <button onclick="editOffer('\${offer._id}')" style="background: #e0bf63; color: #3e2723;">Edit</button>
                        <button onclick="sendOfferEmailAction('\${offer._id}')" style="background: #17a2b8; color: white;">Send Email</button>
                        <button onclick="deleteOffer('\${offer._id}')" style="background: #dc3545; color: white;">Delete</button>
                    </div>
                </div>
            \`).join('');
        }

        function populateCustomerSelects() {
            const loyaltyCustomers = allMembers.filter(m => m.isLoyalty);
            const nonLoyaltyCustomers = allCustomers.filter(c => !c.isLoyalty);
            
            const pointsSelect = document.getElementById('pointsCustomerId');
            pointsSelect.innerHTML = '<option value="">Select a customer...</option>' +
                loyaltyCustomers.map(c => \`<option value="\${c._id}">\${c.fullName} (\${c.loyaltyTier})</option>\`).join('');
            
            const loyaltySelect = document.getElementById('loyaltyCustomer');
            loyaltySelect.innerHTML = '<option value="">Select a customer...</option>' +
                nonLoyaltyCustomers.map(c => \`<option value="\${c._id}">\${c.fullName} (\${c.email})</option>\`).join('');
        }

        function updateStats() {
            const loyal = allMembers.filter(m => m.isLoyalty);
            document.getElementById('activeMembers').textContent = loyal.length;
            document.getElementById('silverCount').textContent = allMembers.filter(m => m.loyaltyTier === 'Silver').length;
            document.getElementById('goldCount').textContent = allMembers.filter(m => m.loyaltyTier === 'Gold').length;
            document.getElementById('platinumCount').textContent = allMembers.filter(m => m.loyaltyTier === 'Platinum').length;
            document.getElementById('pointsRedeemed').textContent = allMembers.reduce((sum, m) => sum + (m.pointsRedeemed || 0), 0);
            document.getElementById('pointsIssued').textContent = allMembers.reduce((sum, m) => sum + (m.loyaltyPoints || 0), 0);
        }

        function getTierBadge(tier) {
            if (!tier) return '<span style="padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem; background: #ddd; color: #666;">Regular</span>';
            const colors = {
                'Silver': 'background: #c0c0c0; color: #4a4a4a;',
                'Gold': 'background: #e0bf63; color: #3e2723;',
                'Platinum': 'background: #4a5568; color: white;'
            };
            return \`<span style="\${colors[tier]} padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">\${tier}</span>\`;
        }

        function displayMembers() {
            const tbody = document.getElementById('membersTable');
            let filtered = allMembers;

            if (currentFilter === 'loyalty') {
                filtered = allMembers.filter(m => m.isLoyalty);
            } else if (currentFilter !== 'all' && ['Silver', 'Gold', 'Platinum'].includes(currentFilter)) {
                filtered = allMembers.filter(m => m.loyaltyTier === currentFilter);
            }

            if (filtered.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" style="padding: 2rem; text-align: center; color: #999;">No members found</td></tr>';
                return;
            }

            tbody.innerHTML = filtered.map(m => \`
                <tr>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">\${m.fullName || 'N/A'}</td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">\${m.email}</td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">
                        <span style="padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem; background: \${m.isLoyalty ? '#d4edda' : '#f8d7da'}; color: \${m.isLoyalty ? '#155724' : '#721c24'};">
                            \${m.isLoyalty ? 'Loyalty' : 'Regular'}
                        </span>
                    </td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">\${getTierBadge(m.loyaltyTier)}</td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee; font-weight: 600; color: #e0bf63;">\${m.loyaltyPoints || 0}</td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">Rs. \${(m.totalSpent || 0).toLocaleString()}</td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee; text-align: center;">
                        <div style="display: flex; gap: 0.4rem; justify-content: center;">
                            \${m.isLoyalty ? \`
                                <button onclick="upgradeMember('\${m._id}')" title="Upgrade" style="padding: 0.4rem 0.6rem; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem;">Up</button>
                                <button onclick="downgradeMember('\${m._id}')" title="Downgrade" style="padding: 0.4rem 0.6rem; background: #ffc107; color: #333; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem;">Down</button>
                                <button onclick="removeLoyalty('\${m._id}')" title="Remove" style="padding: 0.4rem 0.6rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem;">Remove</button>
                            \` : \`
                                <button onclick="addLoyaltyDirectly('\${m._id}')" title="Add" style="padding: 0.4rem 0.6rem; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem;">Add</button>
                            \`}
                        </div>
                    </td>
                </tr>
            \`).join('');
        }

        function filterMembers(tier) {
            currentFilter = tier;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            event.target.classList.add('active');
            displayMembers();
        }

        async function addLoyaltyDirectly(customerId) {
            try {
                const res = await fetch('/api/loyalty/members/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                    body: JSON.stringify({ customerId })
                });
                if (!res.ok) throw new Error('Failed to add to loyalty');
                showAlert('Customer added to loyalty as Silver tier', 'success');
                await loadAllData();
            } catch (e) {
                showAlert(e.message, 'error');
            }
        }

        async function removeLoyalty(customerId) {
            if (!confirm('Remove customer from loyalty program?')) return;
            try {
                const res = await fetch('/api/loyalty/members/remove', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                    body: JSON.stringify({ customerId })
                });
                if (!res.ok) throw new Error('Failed to remove from loyalty');
                showAlert('Customer removed from loyalty program', 'success');
                await loadAllData();
            } catch (e) {
                showAlert(e.message, 'error');
            }
        }

        async function upgradeMember(customerId) {
            const member = allMembers.find(m => m._id === customerId);
            if (!member) return;
            
            const tiers = ['Silver', 'Gold', 'Platinum'];
            const currentIndex = tiers.indexOf(member.loyaltyTier);
            if (currentIndex === -1 || currentIndex === tiers.length - 1) {
                showAlert('Already at highest tier', 'error');
                return;
            }
            
            const newTier = tiers[currentIndex + 1];
            try {
                const res = await fetch(\`/api/loyalty/members/upgrade/\${customerId}\`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                    body: JSON.stringify({ newTier })
                });
                if (!res.ok) throw new Error('Failed to upgrade');
                showAlert(\`Upgraded to \${newTier} tier\`, 'success');
                await loadAllData();
            } catch (e) { showAlert(e.message, 'error'); }
        }

        async function downgradeMember(customerId) {
            const member = allMembers.find(m => m._id === customerId);
            if (!member) return;
            
            const tiers = ['Silver', 'Gold', 'Platinum'];
            const currentIndex = tiers.indexOf(member.loyaltyTier);
            if (currentIndex <= 0) {
                showAlert('Already at lowest tier', 'error');
                return;
            }
            
            const newTier = tiers[currentIndex - 1];
            try {
                const res = await fetch(\`/api/loyalty/members/downgrade/\${customerId}\`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                    body: JSON.stringify({ newTier })
                });
                if (!res.ok) throw new Error('Failed to downgrade');
                showAlert(\`Downgraded to \${newTier} tier\`, 'success');
                await loadAllData();
            } catch (e) { showAlert(e.message, 'error'); }
        }

        // Tier Management
        async function openEditTierModal(tierName) {
            const selectedTierName = tierName || 'Silver';

            if (!loyaltyTiers[selectedTierName]) {
                await loadTiers();
            }

            const tier = loyaltyTiers[selectedTierName];
            if (!tier) {
                showAlert('Unable to load tier data. Please refresh and try again.', 'error');
                return;
            }

            editingTierId = tier._id || null;
            document.getElementById('editTierTitle').textContent = \`Edit \${selectedTierName} Tier Configuration\`;
            document.getElementById('tierName').value = selectedTierName;
            document.getElementById('tierMinSpent').value = tier?.minSpent || 0;
            document.getElementById('tierMaxSpent').value = tier?.maxSpent || 50000;
            document.getElementById('tierMultiplier').value = tier?.pointMultiplier || 1;
            document.getElementById('tierBenefits').value = (tier?.benefits || []).join('\\n');
            document.getElementById('tierDescription').value = tier?.description || '';
            updateTierPointRangePreview();
            document.getElementById('editTierModal').style.display = 'flex';
        }

        function closeEditTierModal() {
            editingTierId = null;
            document.getElementById('editTierModal').style.display = 'none';
        }

        document.getElementById('tierMinSpent').addEventListener('input', updateTierPointRangePreview);
        document.getElementById('tierMaxSpent').addEventListener('input', updateTierPointRangePreview);

        document.getElementById('editTierForm').addEventListener('submit', async (e) => {
            e.preventDefault();

            const selectedTierName = document.getElementById('tierName').value;
            let tierId = editingTierId || loyaltyTiers[selectedTierName]?._id;

            if (!tierId) {
                await loadTiers();
                tierId = loyaltyTiers[selectedTierName]?._id;
            }

            if (!tierId) {
                showAlert('Tier not found', 'error');
                return;
            }

            try {
                const res = await fetch(\`/api/loyalty/tiers/\${tierId}\`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                    body: JSON.stringify({
                        minSpent: parseInt(document.getElementById('tierMinSpent').value),
                        maxSpent: parseInt(document.getElementById('tierMaxSpent').value),
                        pointMultiplier: parseFloat(document.getElementById('tierMultiplier').value),
                        benefits: document.getElementById('tierBenefits').value.split('\\n').filter(b => b.trim()),
                        description: document.getElementById('tierDescription').value
                    })
                });

                if (!res.ok) {
                    let errMsg = 'Failed to update tier';
                    try {
                        const errData = await res.json();
                        errMsg = errData.message || errData.error || errMsg;
                    } catch (_) {
                        // Keep default error message when response body is not JSON.
                    }
                    throw new Error(errMsg);
                }

                showAlert('Tier updated successfully', 'success');
                closeEditTierModal();
                await loadTiers();
            } catch (e) { showAlert(e.message, 'error'); }
        });

        // Offer Management
        function openCreateOfferModal() {
            editingOfferId = null;
            document.getElementById('offerModalTitle').textContent = 'Create Promotional Offer';
            document.getElementById('offerId').value = '';
            document.getElementById('offerForm').reset();
            document.getElementById('sendEmailBtn').style.display = 'none';
            document.getElementById('offerModal').style.display = 'flex';
        }

        function closeOfferModal() {
            document.getElementById('offerModal').style.display = 'none';
        }

        function editOffer(offerId) {
            const offer = allOffers.find(o => o._id === offerId);
            if (!offer) return;
            
            editingOfferId = offerId;
            document.getElementById('offerModalTitle').textContent = 'Edit Promotional Offer';
            document.getElementById('offerId').value = offerId;
            document.getElementById('offerTitle').value = offer.title;
            document.getElementById('offerDescription').value = offer.description;
            document.getElementById('discountPercentage').value = offer.discountPercentage;
            document.getElementById('discountAmount').value = offer.discountAmount || 0;
            document.getElementById('offerTierType').value = offer.tierType;
            document.getElementById('offerValidUntil').value = new Date(offer.validUntil).toISOString().split('T')[0];
            document.getElementById('sendEmailBtn').style.display = 'block';
            document.getElementById('offerModal').style.display = 'flex';
        }

        document.getElementById('offerForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const offerId = document.getElementById('offerId').value;
            const data = {
                title: document.getElementById('offerTitle').value,
                description: document.getElementById('offerDescription').value,
                discountPercentage: parseInt(document.getElementById('discountPercentage').value),
                discountAmount: parseInt(document.getElementById('discountAmount').value) || 0,
                tierType: document.getElementById('offerTierType').value,
                validUntil: document.getElementById('offerValidUntil').value
            };

            try {
                const method = offerId ? 'PUT' : 'POST';
                const url = offerId ? \`/api/loyalty/offers/\${offerId}\` : '/api/loyalty/offers';
                const res = await fetch(url, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                    body: JSON.stringify(data)
                });
                if (!res.ok) throw new Error('Failed to save offer');
                showAlert('Offer saved successfully', 'success');
                closeOfferModal();
                await loadOffers();
            } catch (e) { showAlert(e.message, 'error'); }
        });

        async function sendOfferEmailAction(offerId) {
            try {
                const res = await fetch(\`/api/loyalty/offers/\${offerId}/send-email\`, {
                    method: 'POST',
                    credentials: 'same-origin'
                });
                if (!res.ok) throw new Error('Failed to send emails');
                const data = await res.json();
                showAlert(\`Emails sent to \${data.successCount} customers\`, 'success');
                await loadOffers();
            } catch (e) { showAlert(e.message, 'error'); }
        }

        function sendOfferEmail() {
            if (!editingOfferId) {
                showAlert('Please save offer first', 'error');
                return;
            }
            sendOfferEmailAction(editingOfferId);
        }

        async function deleteOffer(offerId) {
            if (!confirm('Delete this offer?')) return;
            try {
                const res = await fetch(\`/api/loyalty/offers/\${offerId}\`, {
                    method: 'DELETE',
                    credentials: 'same-origin'
                });
                if (!res.ok) throw new Error('Failed to delete offer');
                showAlert('Offer deleted', 'success');
                await loadOffers();
            } catch (e) { showAlert(e.message, 'error'); }
        }

        // Modals
        function openAddLoyaltyModal() {
            populateCustomerSelects();
            document.getElementById('addLoyaltyModal').style.display = 'flex';
        }

        function closeAddLoyaltyModal() {
            document.getElementById('addLoyaltyModal').style.display = 'none';
        }

        function openPointsModal() {
            populateCustomerSelects();
            document.getElementById('pointsModal').style.display = 'flex';
        }

        function closePointsModal() {
            document.getElementById('pointsModal').style.display = 'none';
        }

        document.getElementById('addLoyaltyForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const customerId = document.getElementById('loyaltyCustomer').value;
            try {
                const res = await fetch('/api/loyalty/members/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                    body: JSON.stringify({ customerId })
                });
                if (!res.ok) throw new Error('Failed to add to loyalty');
                showAlert('Customer added to loyalty as Silver tier', 'success');
                closeAddLoyaltyModal();
                await loadAllData();
            } catch (e) { showAlert(e.message, 'error'); }
        });

        document.getElementById('pointsForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const res = await fetch('/api/loyalty/members/award-points', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                    body: JSON.stringify({
                        customerId: document.getElementById('pointsCustomerId').value,
                        points: parseInt(document.getElementById('pointsAmount').value),
                        reason: document.getElementById('pointsReason').value
                    })
                });
                if (!res.ok) throw new Error('Failed to award points');
                showAlert('Points awarded successfully', 'success');
                closePointsModal();
                await loadAllData();
            } catch (e) { showAlert(e.message, 'error'); }
        });

        function showAlert(msg, type) {
            const alert = document.getElementById('alertBox');
            alert.textContent = msg;
            alert.style.display = 'block';
            alert.style.background = type === 'success' ? '#d4edda' : '#f8d7da';
            alert.style.color = type === 'success' ? '#155724' : '#721c24';
            alert.style.border = \`1px solid \${type === 'success' ? '#c3e6cb' : '#f5c6cb'}\`;
            setTimeout(() => alert.style.display = 'none', 5000);
        }

        function logout() { authManager.logout(); }

        window.logout = logout;
        window.filterMembers = filterMembers;
        window.openEditTierModal = openEditTierModal;
        window.closeEditTierModal = closeEditTierModal;
        window.openAddLoyaltyModal = openAddLoyaltyModal;
        window.closeAddLoyaltyModal = closeAddLoyaltyModal;
        window.openPointsModal = openPointsModal;
        window.closePointsModal = closePointsModal;
        window.openCreateOfferModal = openCreateOfferModal;
        window.closeOfferModal = closeOfferModal;
        window.editOffer = editOffer;
        window.deleteOffer = deleteOffer;
        window.sendOfferEmailAction = sendOfferEmailAction;
        window.sendOfferEmail = sendOfferEmail;
        window.addLoyaltyDirectly = addLoyaltyDirectly;
        window.removeLoyalty = removeLoyalty;
        window.upgradeMember = upgradeMember;
        window.downgradeMember = downgradeMember;

        (async () => {
            const auth = await checkAuth();
            if (auth) loadAllData();
        })();
    `}]};function sp(){const l=v.useRef(null);return v.useEffect(()=>{const c=l.current;if(!c)return;document.title=Ja.title,c.innerHTML=Ja.html;const s=[];for(const u of Ja.scripts||[]){const f=document.createElement("script");u.type&&(f.type=u.type),f.textContent=u.content,c.appendChild(f),s.push(f)}return()=>{s.forEach(u=>u.remove()),c.innerHTML=""}},[]),n.jsx("div",{ref:l})}const Qa={title:"Order Management - Saranya Jewellery",html:`<!-- Pending Approval Overlay -->
    <div id="pendingOverlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 9999; align-items: center; justify-content: center;">
        <div style="background: white; padding: 3rem; border-radius: 8px; text-align: center; max-width: 500px;">
            <h2 style="color: #6f0022; margin-bottom: 1rem;">⏳ Pending Approval</h2>
            <p style="color: #666; margin-bottom: 2rem;">Your account is awaiting admin approval. Please check back later.</p>
            <button onclick="logout()" style="background: #6f0022; color: white; padding: 0.8rem 2rem; border: none; border-radius: 4px; cursor: pointer;">Logout</button>
        </div>
    </div>

    <div style="max-width: 1400px; margin: 0 auto; padding: 2rem;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #6f0022; color: white; padding: 1.5rem 2rem; border-radius: 8px; margin-bottom: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div>
                <h1 style="margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #ffffff;"> Order Management</h1>
                <p style="margin: 0.5rem 0 0; opacity: 0.9; color: #ffffff;">Welcome, <span id="userName" style="color: #ffffff;">Manager</span></p>
            </div>
            <button onclick="logout()" style="background: white; color: #6f0022; border: none; padding: 0.75rem 1.5rem; border-radius: 4px; cursor: pointer; font-weight: 600;">Logout</button>
        </div>

        <!-- Stats Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div style="background: white; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2rem; color: #ffc107; margin: 0 0 0.3rem;" id="pending">0</h3>
                <p style="margin: 0; color: #666; font-size: 0.85rem;">Pending</p>
            </div>
            <div style="background: white; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2rem; color: #17a2b8; margin: 0 0 0.3rem;" id="confirmed">0</h3>
                <p style="margin: 0; color: #666; font-size: 0.85rem;">Confirmed</p>
            </div>
            <div style="background: white; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2rem; color: #e0bf63; margin: 0 0 0.3rem;" id="invoiced">0</h3>
                <p style="margin: 0; color: #666; font-size: 0.85rem;">Invoice Created</p>
            </div>
            <div style="background: white; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2rem; color: #28a745; margin: 0 0 0.3rem;" id="completed">0</h3>
                <p style="margin: 0; color: #666; font-size: 0.85rem;">Completed</p>
            </div>
            <div style="background: white; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2rem; color: #6f0022; margin: 0 0 0.3rem;" id="revenue">Rs. 0</h3>
                <p style="margin: 0; color: #666; font-size: 0.85rem;">Total Revenue</p>
            </div>
        </div>

        <!-- Order Management -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Orders</h2>
                <button onclick="openCreateOrderModal()" style="background: #6f0022; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">+ Create Manual Order</button>
            </div>

            <!-- Alert -->
            <div id="alert" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; display: none;"></div>

            <!-- Status Filter -->
            <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                <button class="filter-btn active" onclick="filterOrders('all')">All</button>
                <button class="filter-btn" onclick="filterOrders('Pending')">Pending</button>
                <button class="filter-btn" onclick="filterOrders('Confirmed')">Confirmed</button>
                <button class="filter-btn" onclick="filterOrders('Invoice Created')">Invoice Created</button>
                <button class="filter-btn" onclick="filterOrders('Payment Received')">Payment Received</button>
                <button class="filter-btn" onclick="filterOrders('Preparing')">Preparing</button>
                <button class="filter-btn" onclick="filterOrders('Ready for Collection')">Ready</button>
                <button class="filter-btn" onclick="filterOrders('Completed')">Completed</button>
                <button class="filter-btn" onclick="filterOrders('Cancelled')">Cancelled</button>
                <button class="filter-btn" onclick="filterOrders('Refunded')">Refunded</button>
            </div>

            <!-- Orders Table -->
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Order ID</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Customer</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Date</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Items</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Amount</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Status</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Payment</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Invoice</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022; min-width: 200px;">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="ordersTable">
                        <tr><td colspan="9" style="padding: 2rem; text-align: center; color: #999;">Loading orders...</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Created Invoices -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-top: 2rem;">
            <h3 style="font-family: 'Cormorant Garamond', serif; margin-bottom: 1rem;">Created Invoices</h3>
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Invoice No</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Order No</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Customer</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Date</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Amount</th>
                            <th style="padding: 0.9rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Action</th>
                        </tr>
                    </thead>
                    <tbody id="createdInvoicesTable">
                        <tr><td colspan="6" style="padding: 1.5rem; text-align: center; color: #999;">Loading invoices...</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Order Detail Modal -->
    <div id="orderDetailModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); align-items: center; justify-content: center; z-index: 1000;">
        <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 700px; width: 90%; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem;">
                <h3 style="margin: 0;">Order Details</h3>
                <button onclick="closeDetailModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            <div id="orderDetailContent">Loading...</div>
        </div>
    </div>

    <!-- Create Manual Order Modal -->
    <div id="createOrderModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); align-items: center; justify-content: center; z-index: 1000; overflow-y: auto;">
        <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 800px; width: 90%; margin: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Create Manual Order</h3>
                <button onclick="closeCreateOrderModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>

            <form id="manualOrderForm" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <!-- Customer Details Row 1 -->
                <div>
                    <label style="display: block; margin-bottom: 0.3rem; font-weight: 600; font-size: 0.9rem;">Customer Name *</label>
                    <input type="text" id="mo_customerName" placeholder="Enter customer name" required style="width: 100%; padding: 0.6rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.9rem; box-sizing: border-box;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.3rem; font-weight: 600; font-size: 0.9rem;">Customer Email *</label>
                    <input type="email" id="mo_customerEmail" placeholder="customer@example.com" required style="width: 100%; padding: 0.6rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.9rem; box-sizing: border-box;">
                </div>

                <!-- Customer Details Row 2 -->
                <div>
                    <label style="display: block; margin-bottom: 0.3rem; font-weight: 600; font-size: 0.9rem;">Phone Number *</label>
                    <input type="tel" id="mo_phoneNumber" placeholder="Enter phone number" required style="width: 100%; padding: 0.6rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.9rem; box-sizing: border-box;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.3rem; font-weight: 600; font-size: 0.9rem;">Payment Method</label>
                    <select id="mo_paymentMethod" style="width: 100%; padding: 0.6rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.9rem; box-sizing: border-box;">
                        <option value="">Select Payment Method</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Cash">Cash</option>
                        <option value="Card">Card</option>
                        <option value="Cheque">Cheque</option>
                    </select>
                </div>

                <!-- Items Section -->
                <div style="grid-column: 1 / -1; border-top: 1px solid #eee; padding-top: 1rem; margin-top: 0.5rem;">
                    <h4 style="margin: 0 0 1rem; font-size: 0.95rem;">Order Items</h4>
                    <div id="mo_itemsContainer" style="display: grid; gap: 1rem; margin-bottom: 1rem;">
                        <!-- Items will be added here -->
                    </div>
                    <button type="button" onclick="addManualOrderItem()" style="background: #6c757d; color: white; padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">+ Add Item</button>
                </div>

                <!-- Totals -->
                <div style="grid-column: 1 / -1; border-top: 1px solid #eee; padding-top: 1rem;">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.3rem; font-weight: 600; font-size: 0.9rem;">Subtotal (Rs.)</label>
                            <input type="number" id="mo_subtotal" value="0" readonly style="width: 100%; padding: 0.6rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.9rem; box-sizing: border-box; background: #f9f9f9;">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.3rem; font-weight: 600; font-size: 0.9rem;">Tax (Rs.)</label>
                            <input type="number" id="mo_tax" value="0" step="0.01" style="width: 100%; padding: 0.6rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.9rem; box-sizing: border-box;" oninput="updateOrderTotals()">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.3rem; font-weight: 600; font-size: 0.9rem;">Total (Rs.)</label>
                            <input type="number" id="mo_total" value="0" readonly style="width: 100%; padding: 0.6rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.9rem; box-sizing: border-box; background: #f9f9f9; color: #6f0022; font-weight: 600;">
                        </div>
                    </div>
                </div>

                <!-- Notes -->
                <div style="grid-column: 1 / -1;">
                    <label style="display: block; margin-bottom: 0.3rem; font-weight: 600; font-size: 0.9rem;">Order Notes</label>
                    <textarea id="mo_orderNotes" placeholder="Add any special notes for this order..." style="width: 100%; padding: 0.6rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.9rem; box-sizing: border-box; resize: vertical; height: 60px;"></textarea>
                </div>

                <!-- Buttons -->
                <div style="grid-column: 1 / -1; display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem; border-top: 1px solid #eee; padding-top: 1rem;">
                    <button type="button" onclick="closeCreateOrderModal()" style="background: #6c757d; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Cancel</button>
                    <button type="submit" style="background: #6f0022; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Create Order</button>
                </div>
            </form>
        </div>
    </div>

    <style>
        .filter-btn { padding: 0.5rem 1rem; border: 1px solid #6f0022; background: white; color: #6f0022; cursor: pointer; border-radius: 4px; font-weight: 500; transition: all 0.3s; font-size: 0.85rem; }
        .filter-btn:hover { background: #f5f5f5; }
        .filter-btn.active { background: #6f0022; color: white; }
        .action-btn { padding: 0.4rem 0.8rem; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: 600; margin: 0.2rem; white-space: nowrap; }
    </style>`,scripts:[{type:"module",content:`
        import authManager from '/src/auth.js';

        let orders = [];
        let currentFilter = 'all';
        let availableProducts = []; // Store products for order creation

        async function checkAuth() {
            const user = await authManager.checkStaffAuth('Order Management');
            if (!user) return false;
            if (user.needsApproval) {
                document.getElementById('pendingOverlay').style.display = 'flex';
                return false;
            }
            document.getElementById('userName').textContent = user.fullName || user.email;
            return true;
        }

        async function loadOrders() {
            try {
                const res = await fetch('/api/orders', { credentials: 'same-origin' });
                if (!res.ok) throw new Error();
                orders = await res.json();
                updateStats();
                displayOrders();
                renderCreatedInvoices();
            } catch (e) { showAlert('Error loading orders', 'error'); }
        }

        function renderCreatedInvoices() {
            const tbody = document.getElementById('createdInvoicesTable');
            const invoices = orders
                .filter(o => o.invoiceNumber)
                .sort((a, b) => new Date(b.invoiceDate || b.updatedAt || b.createdAt) - new Date(a.invoiceDate || a.updatedAt || a.createdAt));

            if (invoices.length === 0) {
                tbody.innerHTML = '<tr><td colspan="6" style="padding: 1.5rem; text-align: center; color: #999;">No invoices created yet</td></tr>';
                return;
            }

            tbody.innerHTML = invoices.map(o => \`
                <tr>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee; font-size: 0.9rem;">\${o.invoiceNumber}</td>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee; font-size: 0.9rem;">\${o.orderNumber || o._id?.slice(-8)}</td>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee; font-size: 0.9rem;">\${o.customerName || o.customerEmail || 'N/A'}</td>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee; font-size: 0.9rem;">\${new Date(o.invoiceDate || o.updatedAt || o.createdAt).toLocaleDateString()}</td>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee; font-size: 0.9rem; font-weight: 600;">Rs. \${(o.totalAmount || o.total || 0).toLocaleString()}</td>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee;">
                        <button class="action-btn" style="background: #6f42c1; color: white;" onclick="viewInvoice('\${o._id}')">View Invoice</button>
                    </td>
                </tr>
            \`).join('');
        }

        function updateStats() {
            document.getElementById('pending').textContent = orders.filter(o => o.status === 'Pending').length;
            document.getElementById('confirmed').textContent = orders.filter(o => o.status === 'Confirmed').length;
            document.getElementById('invoiced').textContent = orders.filter(o => o.status === 'Invoice Created').length;
            document.getElementById('completed').textContent = orders.filter(o => ['Completed', 'Ready for Collection'].includes(o.status)).length;
            const total = orders.filter(o => !['Cancelled', 'Refunded'].includes(o.status)).reduce((sum, o) => sum + (o.total || o.totalAmount || 0), 0);
            document.getElementById('revenue').textContent = 'Rs. ' + total.toLocaleString();
        }

        function getStatusColor(status) {
            const colors = {
                'Pending': '#fff3cd',
                'Confirmed': '#d1ecf1',
                'Invoice Created': '#e0d4f5',
                'Payment Received': '#d4edda',
                'Preparing': '#cce5ff',
                'Ready for Collection': '#c3e6cb',
                'Completed': '#d4edda',
                'Cancelled': '#f8d7da',
                'Refunded': '#fce4ec'
            };
            return colors[status] || '#e9ecef';
        }

        function getActionButtons(order) {
            const o = order;
            let btns = '';

            btns += \`<button class="action-btn" style="background: #6c757d; color: white;" onclick="viewOrder('\${o._id}')">👁️ View</button>\`;

            if (o.invoiceNumber) {
                btns += \`<button class="action-btn" style="background: #6f42c1; color: white;" onclick="viewInvoice('\${o._id}')">🧾 Invoice</button>\`;
            }

            if (o.status === 'Pending') {
                btns += \`<button class="action-btn" style="background: #28a745; color: white;" onclick="markPaymentReceived('\${o._id}')">💰 Payment Received</button>\`;
                btns += \`<button class="action-btn" style="background: #dc3545; color: white;" onclick="markPaymentNotReceived('\${o._id}')">❌ Payment Not Received</button>\`;
            }
            if (o.status === 'Payment Received') {
                btns += \`<button class="action-btn" style="background: #6f42c1; color: white;" onclick="createInvoice('\${o._id}')">🧾 Generate Invoice</button>\`;
                btns += \`<button class="action-btn" style="background: #b0b0b0; color: white;" disabled>✅ Confirm</button>\`;
                btns += \`<button class="action-btn" style="background: #e83e8c; color: white;" onclick="changeStatus('\${o._id}', 'Refunded')">↩️ Refund</button>\`;
            }
            if (o.status === 'Invoice Created') {
                btns += \`<button class="action-btn" style="background: #17a2b8; color: white;" onclick="confirmOrder('\${o._id}')">✅ Confirm</button>\`;
                btns += \`<button class="action-btn" style="background: #e83e8c; color: white;" onclick="changeStatus('\${o._id}', 'Refunded')">↩️ Refund</button>\`;
            }
            if (o.status === 'Confirmed') {
                btns += \`<button class="action-btn" style="background: #e83e8c; color: white;" onclick="changeStatus('\${o._id}', 'Refunded')">↩️ Refund</button>\`;
            }
            return btns;
        }

        function displayOrders() {
            const tbody = document.getElementById('ordersTable');
            let filtered = currentFilter === 'all' ? orders : orders.filter(o => o.status === currentFilter);
            if (filtered.length === 0) {
                tbody.innerHTML = '<tr><td colspan="9" style="padding: 2rem; text-align: center; color: #999;">No orders found</td></tr>';
                return;
            }
            tbody.innerHTML = filtered.map(o => \`
                <tr>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee; font-size: 0.9rem;">\${o.orderNumber || o._id?.slice(-8)}</td>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee; font-size: 0.9rem;">\${o.customerName || o.customerEmail || 'N/A'}</td>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee; font-size: 0.9rem;">\${new Date(o.createdAt).toLocaleDateString()}</td>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee; font-size: 0.9rem;">\${o.items?.length || 0} items</td>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee; font-size: 0.9rem; font-weight: 600;">Rs. \${(o.totalAmount || o.total || 0).toLocaleString()}</td>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee;">
                        <span style="padding: 0.3rem 0.6rem; border-radius: 20px; font-size: 0.75rem; background: \${getStatusColor(o.status)};">\${o.status}</span>
                    </td>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee;">
                        <span style="font-size: 0.85rem; color: \${o.paymentStatus === 'Paid' ? '#28a745' : o.paymentStatus === 'Refunded' ? '#dc3545' : '#666'};">\${o.paymentStatus || 'Pending'}</span>
                    </td>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee; font-size: 0.85rem;">\${o.invoiceNumber || '-'}</td>
                    <td style="padding: 0.8rem; border-bottom: 1px solid #eee;">\${getActionButtons(o)}</td>
                </tr>
            \`).join('');
        }

        function filterOrders(status) {
            currentFilter = status;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            event.target.classList.add('active');
            displayOrders();
        }

        async function confirmOrder(id) {
            if (!confirm('Confirm this order and generate invoice email?')) return;
            try {
                const res = await fetch(\`/api/orders/\${id}/confirm\`, {
                    method: 'PATCH',
                    credentials: 'same-origin'
                });
                if (!res.ok) { const e = await res.json(); throw new Error(e.message); }
                showAlert('Order confirmed and invoice emailed to customer.', 'success');
                loadOrders();
            } catch (e) { showAlert(e.message || 'Error', 'error'); }
        }

        async function markPaymentReceived(id) {
            if (!confirm('Mark payment as received for this order?')) return;
            try {
                const res = await fetch(\`/api/orders/\${id}/payment-received\`, {
                    method: 'PATCH',
                    credentials: 'same-origin'
                });
                if (!res.ok) { const e = await res.json(); throw new Error(e.message); }
                showAlert('Payment marked as received. Generate invoice next.', 'success');
                loadOrders();
            } catch (e) { showAlert(e.message || 'Error', 'error'); }
        }

        async function markPaymentNotReceived(id) {
            if (!confirm('Payment not received. Cancel this order?')) return;
            try {
                const res = await fetch(\`/api/orders/\${id}/payment-not-received\`, {
                    method: 'PATCH',
                    credentials: 'same-origin'
                });
                if (!res.ok) { const e = await res.json(); throw new Error(e.message); }
                showAlert('Order cancelled because payment was not received.', 'success');
                loadOrders();
            } catch (e) { showAlert(e.message || 'Error', 'error'); }
        }

        async function createInvoice(id) {
            if (!confirm('Create payment invoice for this order?')) return;
            try {
                const res = await fetch(\`/api/orders/\${id}/invoice\`, {
                    method: 'PATCH',
                    credentials: 'same-origin'
                });
                if (!res.ok) { const e = await res.json(); throw new Error(e.message); }
                const data = await res.json();
                showAlert(\`Invoice \${data.invoiceNumber} created! Customer emailed.\`, 'success');
                loadOrders();
            } catch (e) { showAlert(e.message || 'Error creating invoice', 'error'); }
        }

        async function notifyInventory(id) {
            if (!confirm('Notify inventory team to prepare this order?')) return;
            try {
                const res = await fetch(\`/api/orders/\${id}/notify-inventory\`, {
                    method: 'PATCH',
                    credentials: 'same-origin'
                });
                if (!res.ok) { const e = await res.json(); throw new Error(e.message); }
                showAlert('Inventory team notified! Order is now being prepared.', 'success');
                loadOrders();
            } catch (e) { showAlert(e.message || 'Error', 'error'); }
        }

        async function changeStatus(id, newStatus) {
            const confirmMsg = newStatus === 'Cancelled' ? 'Cancel this order? Stock will be restored.' :
                              newStatus === 'Refunded' ? 'Refund this order? Stock will be restored.' :
                              \`Change status to "\${newStatus}"?\`;
            if (!confirm(confirmMsg)) return;
            try {
                const res = await fetch(\`/api/orders/\${id}/status\`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                    body: JSON.stringify({ status: newStatus })
                });
                if (!res.ok) { const e = await res.json(); throw new Error(e.message); }
                showAlert(\`Status updated to \${newStatus}\`, 'success');
                loadOrders();
            } catch (e) { showAlert(e.message || 'Error', 'error'); }
        }

        async function viewOrder(id) {
            try {
                const res = await fetch(\`/api/orders/\${id}\`, { credentials: 'same-origin' });
                if (!res.ok) throw new Error();
                const o = await res.json();
                document.getElementById('orderDetailContent').innerHTML = \`
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                        <div>
                            <p><strong>Order #:</strong> \${o.orderNumber}</p>
                            <p><strong>Customer:</strong> \${o.customerName || o.customerEmail}</p>
                            <p><strong>Date:</strong> \${new Date(o.createdAt).toLocaleString()}</p>
                            <p><strong>Status:</strong> <span style="padding: 0.25rem 0.6rem; border-radius: 20px; background: \${getStatusColor(o.status)};">\${o.status}</span></p>
                        </div>
                        <div>
                            <p><strong>Payment:</strong> \${o.paymentStatus || 'Pending'} (\${o.paymentMethod || 'N/A'})</p>
                            <p><strong>Invoice:</strong> \${o.invoiceNumber || 'Not created'}</p>
                            \${o.invoiceDate ? \`<p><strong>Invoice Date:</strong> \${new Date(o.invoiceDate).toLocaleDateString()}</p>\` : ''}
                            <p><strong>Inventory Notified:</strong> \${o.inventoryNotified ? '✅ Yes' : '❌ No'}</p>
                        </div>
                    </div>
                    <h4 style="margin: 0 0 0.5rem;">Items</h4>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">
                        \${o.items.map(item => \`
                            <tr>
                                <td style="padding: 0.5rem; border-bottom: 1px solid #eee;">\${item.name}</td>
                                <td style="padding: 0.5rem; border-bottom: 1px solid #eee;">x\${item.quantity}</td>
                                <td style="padding: 0.5rem; border-bottom: 1px solid #eee; text-align: right;">Rs. \${(item.price * item.quantity).toLocaleString()}</td>
                            </tr>
                        \`).join('')}
                        <tr>
                            <td colspan="2" style="padding: 0.5rem; font-weight: 700;">Total</td>
                            <td style="padding: 0.5rem; font-weight: 700; text-align: right; color: #6f0022;">Rs. \${(o.totalAmount || o.total || 0).toLocaleString()}</td>
                        </tr>
                    </table>
                    <p><strong>Phone:</strong> \${o.phoneNumber || 'N/A'}</p>
                    <p><strong>Collection:</strong> Shop Collection</p>
                    \${o.paymentReceipt ? \`<p><strong>Payment Receipt:</strong> <a href="\${o.paymentReceipt}" target="_blank" style="color: #6f0022; font-weight: 600;">View Receipt</a></p>\` : '<p><strong>Payment Receipt:</strong> Not uploaded</p>'}
                    \${o.orderNotes ? \`<p><strong>Notes:</strong> \${o.orderNotes}</p>\` : ''}
                \`;
                document.getElementById('orderDetailModal').style.display = 'flex';
            } catch (e) { showAlert('Error loading order', 'error'); }
        }

        async function viewInvoice(id) {
            try {
                const res = await fetch(\`/api/orders/\${id}\`, { credentials: 'same-origin' });
                if (!res.ok) throw new Error();
                const o = await res.json();

                if (!o.invoiceNumber) {
                    showAlert('Invoice not generated yet for this order.', 'error');
                    return;
                }

                document.getElementById('orderDetailContent').innerHTML = \`
                    <h3 style="margin: 0 0 1rem; color: #6f0022;">Invoice Preview</h3>
                    <p><strong>Invoice #:</strong> \${o.invoiceNumber}</p>
                    <p><strong>Order #:</strong> \${o.orderNumber}</p>
                    <p><strong>Customer:</strong> \${o.customerName}</p>
                    <p><strong>Invoice Date:</strong> \${o.invoiceDate ? new Date(o.invoiceDate).toLocaleDateString() : '-'}</p>
                    <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; background: #fafafa;">
                        \${o.items.map(item => \`
                            <tr>
                                <td style="padding: 0.5rem; border-bottom: 1px solid #eee;">\${item.name}</td>
                                <td style="padding: 0.5rem; border-bottom: 1px solid #eee;">x\${item.quantity}</td>
                                <td style="padding: 0.5rem; border-bottom: 1px solid #eee; text-align: right;">Rs. \${(item.price * item.quantity).toLocaleString()}</td>
                            </tr>
                        \`).join('')}
                        <tr>
                            <td colspan="2" style="padding: 0.5rem; font-weight: 700;">Total</td>
                            <td style="padding: 0.5rem; font-weight: 700; text-align: right; color: #6f0022;">Rs. \${(o.total || 0).toLocaleString()}</td>
                        </tr>
                    </table>
                    <p style="margin-top: 1rem;"><strong>You can now collect from Saranya Jewellers our store.</strong></p>
                    <p>Bring your Order Number <strong>\${o.orderNumber}</strong> at collection.</p>
                \`;
                document.getElementById('orderDetailModal').style.display = 'flex';
            } catch (e) {
                showAlert('Error loading invoice', 'error');
            }
        }

        function closeDetailModal() {
            document.getElementById('orderDetailModal').style.display = 'none';
        }

        function showAlert(msg, type) {
            const alert = document.getElementById('alert');
            alert.textContent = msg;
            alert.style.display = 'block';
            alert.style.background = type === 'success' ? '#d4edda' : '#f8d7da';
            alert.style.color = type === 'success' ? '#155724' : '#721c24';
            alert.style.border = \`1px solid \${type === 'success' ? '#c3e6cb' : '#f5c6cb'}\`;
            setTimeout(() => alert.style.display = 'none', 5000);
        }

        async function deleteOrder(id) {
            if (!confirm('Are you sure you want to delete this order? This action cannot be undone.')) return;
            try {
                const res = await fetch(\`/api/orders/\${id}\`, {
                    method: 'DELETE',
                    credentials: 'same-origin'
                });
                if (!res.ok) { const e = await res.json(); throw new Error(e.message); }
                showAlert('Order deleted successfully', 'success');
                loadOrders();
            } catch (e) { showAlert(e.message || 'Error deleting order', 'error'); }
        }

        async function loadAvailableProducts() {
            try {
                const res = await fetch('/api/products', { credentials: 'same-origin' });
                if (!res.ok) throw new Error('Failed to load products');
                availableProducts = await res.json();
            } catch (e) {
                console.error('Error loading products:', e);
                availableProducts = [];
            }
        }

        function getProductOptions() {
            return availableProducts.map(p => \`
                <option value="\${p._id}" data-name="\${p.name}" data-price="\${p.price || 0}" data-stock="\${p.stockQuantity || 0}">
                    \${p.name} (Stock: \${p.stockQuantity || 0}) - Rs. \${(p.price || 0).toLocaleString()}
                </option>
            \`).join('');
        }

        function openCreateOrderModal() {
            document.getElementById('mo_itemsContainer').innerHTML = '';
            addManualOrderItem(); // Add first empty item row
            document.getElementById('manualOrderForm').reset();
            document.getElementById('createOrderModal').style.display = 'flex';
        }

        function closeCreateOrderModal() {
            document.getElementById('createOrderModal').style.display = 'none';
        }

        let manualOrderItemCount = 0;

        function addManualOrderItem() {
            const itemId = manualOrderItemCount++;
            const container = document.getElementById('mo_itemsContainer');
            const itemHtml = \`
                <div id="mo_item_\${itemId}" style="display: grid; grid-template-columns: 2fr 0.8fr 1fr 1fr 1fr auto; gap: 0.5rem; padding: 0.8rem; background: #f9f9f9; border-radius: 4px; border: 1px solid #eee;">
                    <div>
                        <label style="display: block; margin-bottom: 0.2rem; font-weight: 600; font-size: 0.8rem;">Product</label>
                        <select class="mo_item_product" onchange="onProductChange(this, \${itemId})" style="width: 100%; padding: 0.4rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.75rem; box-sizing: border-box;">
                            <option value="">-- Select Product --</option>
                            \${getProductOptions()}
                            <option value="custom">-- Custom Item --</option>
                        </select>
                    </div>
                    <div style="display: none;" class="mo_item_custom_name_section">
                        <label style="display: block; margin-bottom: 0.2rem; font-weight: 600; font-size: 0.8rem;">Item Name</label>
                        <input type="text" class="mo_item_custom_name" placeholder="Name" style="width: 100%; padding: 0.4rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.75rem; box-sizing: border-box;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.2rem; font-weight: 600; font-size: 0.8rem;">Qty</label>
                        <input type="number" class="mo_item_qty" value="1" min="1" style="width: 100%; padding: 0.4rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.75rem; box-sizing: border-box;" oninput="updateOrderTotals()">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.2rem; font-weight: 600; font-size: 0.8rem;">Price (Rs.)</label>
                        <input type="number" class="mo_item_price" value="0" step="0.01" min="0" readonly style="width: 100%; padding: 0.4rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.75rem; box-sizing: border-box; background: #f0f0f0;" oninput="updateOrderTotals()">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.2rem; font-weight: 600; font-size: 0.8rem;">Subtotal</label>
                        <input type="number" class="mo_item_subtotal" value="0" readonly style="width: 100%; padding: 0.4rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.75rem; box-sizing: border-box; background: #fff; color: #6f0022; font-weight: 600;">
                    </div>
                    <button type="button" onclick="removeManualOrderItem(\${itemId})" style="background: #dc3545; color: white; border: none; padding: 0.4rem 0.6rem; border-radius: 4px; cursor: pointer; font-size: 0.8rem; align-self: flex-end; height: 30px; display: flex; align-items: center;">🗑️</button>
                </div>
            \`;
            container.innerHTML += itemHtml;
        }

        function onProductChange(selectElem, itemId) {
            const row = document.getElementById(\`mo_item_\${itemId}\`);
            const selectedValue = selectElem.value;
            const customNameSection = row.querySelector('.mo_item_custom_name_section');
            const priceInput = row.querySelector('.mo_item_price');
            
            if (selectedValue === 'custom') {
                customNameSection.style.display = 'block';
                priceInput.removeAttribute('readonly');
                priceInput.style.background = 'white';
                priceInput.value = '0';
            } else if (selectedValue) {
                const selected = selectElem.options[selectElem.selectedIndex];
                const price = parseFloat(selected.getAttribute('data-price')) || 0;
                priceInput.value = price.toFixed(2);
                priceInput.setAttribute('readonly', 'readonly');
                priceInput.style.background = '#f0f0f0';
                customNameSection.style.display = 'none';
            } else {
                customNameSection.style.display = 'none';
                priceInput.value = '0';
                priceInput.setAttribute('readonly', 'readonly');
                priceInput.style.background = '#f0f0f0';
            }
            updateOrderTotals();
        }

        function removeManualOrderItem(itemId) {
            const elem = document.getElementById(\`mo_item_\${itemId}\`);
            if (elem) elem.remove();
            updateOrderTotals();
        }

        function updateOrderTotals() {
            let subtotal = 0;
            document.querySelectorAll('#mo_itemsContainer input.mo_item_qty').forEach((qtyInput, idx) => {
                const row = qtyInput.closest('[id^="mo_item_"]');
                const qty = parseFloat(qtyInput.value) || 0;
                const price = parseFloat(row.querySelector('.mo_item_price').value) || 0;
                const itemSubtotal = qty * price;
                row.querySelector('.mo_item_subtotal').value = itemSubtotal.toFixed(2);
                subtotal += itemSubtotal;
            });
            document.getElementById('mo_subtotal').value = subtotal.toFixed(2);
            const tax = parseFloat(document.getElementById('mo_tax').value) || 0;
            const total = subtotal + tax;
            document.getElementById('mo_total').value = total.toFixed(2);
        }

        async function submitManualOrder(e) {
            e.preventDefault();
            
            // Validate customer fields
            const customerName = document.getElementById('mo_customerName').value.trim();
            const customerEmail = document.getElementById('mo_customerEmail').value.trim();
            const phoneNumber = document.getElementById('mo_phoneNumber').value.trim();
            
            if (!customerName || !customerEmail || !phoneNumber) {
                showAlert('Please fill in all customer details', 'error');
                return;
            }

            // Compile items
            const items = [];
            let hasItems = false;
            document.querySelectorAll('#mo_itemsContainer [id^="mo_item_"]').forEach((itemRow, idx) => {
                const productSelect = itemRow.querySelector('.mo_item_product');
                const selectedValue = productSelect.value;
                const qty = parseInt(itemRow.querySelector('.mo_item_qty').value) || 0;
                const price = parseFloat(itemRow.querySelector('.mo_item_price').value) || 0;
                
                let name;
                let itemData = {
                    quantity: qty,
                    price
                };
                
                if (selectedValue === 'custom') {
                    // Custom item
                    name = itemRow.querySelector('.mo_item_custom_name').value.trim();
                    if (!name) {
                        showAlert('Please enter a name for custom items', 'error');
                        return;
                    }
                    itemData.name = name;
                    // Don't include productId for custom items
                } else if (selectedValue) {
                    // Selected product
                    const selected = productSelect.options[productSelect.selectedIndex];
                    name = selected.getAttribute('data-name');
                    itemData.name = name;
                    itemData.productId = selectedValue;
                } else {
                    showAlert('Please select a product or enter a custom item', 'error');
                    return;
                }
                
                if (qty > 0 && price > 0 && itemData.name) {
                    items.push(itemData);
                    hasItems = true;
                }
            });

            if (!hasItems) {
                showAlert('Please add at least one item to the order', 'error');
                return;
            }

            const subtotal = parseFloat(document.getElementById('mo_subtotal').value) || 0;
            const tax = parseFloat(document.getElementById('mo_tax').value) || 0;
            const total = parseFloat(document.getElementById('mo_total').value) || 0;

            if (total <= 0) {
                showAlert('Order total must be greater than 0', 'error');
                return;
            }

            const payload = {
                customerName,
                customerEmail,
                phoneNumber,
                items,
                subtotal,
                tax,
                total,
                paymentMethod: document.getElementById('mo_paymentMethod').value || 'Bank Transfer',
                orderNotes: document.getElementById('mo_orderNotes').value.trim()
            };

            try {
                const res = await fetch('/api/orders/manual/create', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                    body: JSON.stringify(payload)
                });

                if (!res.ok) {
                    const err = await res.json();
                    throw new Error(err.message);
                }

                const data = await res.json();
                showAlert(\`Order #\${data.orderNumber} created successfully! Customer notified.\`, 'success');
                closeCreateOrderModal();
                loadOrders();
            } catch (e) {
                showAlert(e.message || 'Error creating order', 'error');
            }
        }

        function logout() { authManager.logout(); }

        // Make functions available globally for onclick/onchange handlers
        window.logout = logout;
        window.filterOrders = filterOrders;
        window.confirmOrder = confirmOrder;
        window.markPaymentReceived = markPaymentReceived;
        window.markPaymentNotReceived = markPaymentNotReceived;
        window.createInvoice = createInvoice;
        window.notifyInventory = notifyInventory;
        window.changeStatus = changeStatus;
        window.viewOrder = viewOrder;
        window.viewInvoice = viewInvoice;
        window.closeDetailModal = closeDetailModal;
        window.deleteOrder = deleteOrder;
        window.openCreateOrderModal = openCreateOrderModal;
        window.closeCreateOrderModal = closeCreateOrderModal;
        window.addManualOrderItem = addManualOrderItem;
        window.removeManualOrderItem = removeManualOrderItem;
        window.updateOrderTotals = updateOrderTotals;
        window.submitManualOrder = submitManualOrder;
        window.onProductChange = onProductChange;

        (async () => { 
            const auth = await checkAuth(); 
            if (auth) {
                loadOrders();
                await loadAvailableProducts(); // Load products on page load
                // Setup manual order form submission
                document.getElementById('manualOrderForm').addEventListener('submit', submitManualOrder);
            }
        })();
    `}]};function dp(){const l=v.useRef(null);return v.useEffect(()=>{const c=l.current;if(!c)return;document.title=Qa.title,c.innerHTML=Qa.html;const s=[];for(const u of Qa.scripts||[]){const f=document.createElement("script");u.type&&(f.type=u.type),f.textContent=u.content,c.appendChild(f),s.push(f)}return()=>{s.forEach(u=>u.remove()),c.innerHTML=""}},[]),n.jsx("div",{ref:l})}const Ka={title:"Product Management - Saranya Jewellery",html:`<!-- Pending Approval Overlay -->
    <div id="pendingOverlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 9999; align-items: center; justify-content: center;">
        <div style="background: white; padding: 3rem; border-radius: 8px; text-align: center; max-width: 500px;">
            <h2 style="color: #6f0022; margin-bottom: 1rem;">⏳ Pending Approval</h2>
            <p style="color: #666; margin-bottom: 2rem;">Your account is awaiting admin approval. Please check back later.</p>
            <button onclick="logout()" style="background: #6f0022; color: white; padding: 0.8rem 2rem; border: none; border-radius: 4px; cursor: pointer;">Logout</button>
        </div>
    </div>

    <!-- Dashboard Container -->
    <div style="max-width: 1400px; margin: 0 auto; padding: 2rem;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #6f0022; color: white; padding: 1.5rem 2rem; border-radius: 8px; margin-bottom: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div>
                <h1 style="margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #ffffff;">Product Management</h1>
                <p style="margin: 0.5rem 0 0; opacity: 0.9; color: #ffffff;">Welcome, <span id="userName" style="color: #ffffff;">Manager</span></p>
            </div>
            <button onclick="logout()" style="background: white; color: #6f0022; border: none; padding: 0.75rem 1.5rem; border-radius: 4px; cursor: pointer; font-weight: 600;">
                Logout
            </button>
        </div>

        <!-- Stats Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #6f0022; margin: 0 0 0.5rem;" id="totalProducts">0</h3>
                <p style="margin: 0; color: #666;">Total Products</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #28a745; margin: 0 0 0.5rem;" id="inStock">0</h3>
                <p style="margin: 0; color: #666;">Active (Inventory Done)</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #e0bf63; margin: 0 0 0.5rem;" id="featured">0</h3>
                <p style="margin: 0; color: #666;">Featured</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;">
                <h3 style="font-size: 2.5rem; color: #17a2b8; margin: 0 0 0.5rem;" id="categories">0</h3>
                <p style="margin: 0; color: #666;">Categories</p>
            </div>
        </div>

        <!-- Product Management -->
        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0; font-family: 'Cormorant Garamond', serif;">Products</h2>
                <button onclick="openAddModal()" style="background: #6f0022; color: white; padding: 0.8rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
                    + Add Product
                </button>
            </div>

            <!-- Alert -->
            <div id="alert" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; display: none;"></div>
            <div id="stockWarning" style="padding: 0.8rem 1rem; border-radius: 4px; margin-bottom: 1rem; display: none; background: #fff3cd; border: 1px solid #ffe69c; color: #856404;"></div>

            <!-- Category Filter Tabs -->
            <div style="margin-bottom: 1.5rem;">
                <p style="margin: 0 0 0.6rem; color: #6f0022; font-weight: 600;">Filter by Category</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.6rem;">
                    <button class="category-tab-btn active" onclick="setCategoryFilter('')">All Products</button>
                    <button class="category-tab-btn" onclick="setCategoryFilter('Ring')">Rings</button>
                    <button class="category-tab-btn" onclick="setCategoryFilter('Necklace')">Necklaces</button>
                    <button class="category-tab-btn" onclick="setCategoryFilter('Bracelet')">Bracelets</button>
                    <button class="category-tab-btn" onclick="setCategoryFilter('Earring')">Earrings</button>
                    <button class="category-tab-btn" onclick="setCategoryFilter('Pendant')">Pendants</button>
                    <button class="category-tab-btn" onclick="setCategoryFilter('Chain')">Chains</button>
                    <button class="category-tab-btn" onclick="setCategoryFilter('Bangles')">Bangles</button>
                    <button class="category-tab-btn" onclick="setCategoryFilter('Anklet')">Anklets</button>
                </div>
                <input type="hidden" id="categoryFilter" value="">
            </div>

            <div style="margin-bottom: 1.5rem;">
                <label for="productSearch" style="display: block; margin: 0 0 0.45rem; color: #6f0022; font-weight: 600;">Search Products</label>
                <input id="productSearch" type="text" placeholder="Search by name, category, or description" style="width: 100%; max-width: 420px; padding: 0.75rem 0.9rem; border: 1px solid #ddd; border-radius: 6px;">
            </div>

            <!-- Products Table -->
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Image</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Name</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Category</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Stock</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Status</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Tax (%)</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Sale Availability</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Visible to Customers</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Featured</th>
                            <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #eee; background: #f9f9f9; color: #6f0022;">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="productsTable">
                        <tr><td colspan="10" style="padding: 2rem; text-align: center; color: #999;">Loading...</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Product Modal -->
    <div id="productModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); align-items: center; justify-content: center; z-index: 1000;">
        <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 600px; width: 90%; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem;">
                <h3 id="modalTitle" style="margin: 0;">Add Product</h3>
                <button onclick="closeModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            <form id="productForm">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Select From Inventory Stock</label>
                    <select id="stockSelector" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                        <option value="">Create New Product (Manual)</option>
                    </select>
                    <p id="stockHint" style="margin: 0.5rem 0 0; color: #666; font-size: 0.85rem;">Pick an unpublished inventory item to link stock, then enter product details manually.</p>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Product Name *</label>
                    <input type="text" id="name" required style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Description *</label>
                    <textarea id="description" required rows="3" style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;"></textarea>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Category *</label>
                    <select id="category" required style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                        <option value="">Select</option>
                        <option value="Ring">Ring</option>
                        <option value="Necklace">Necklace</option>
                        <option value="Bracelet">Bracelet</option>
                        <option value="Earring">Earring</option>
                        <option value="Pendant">Pendant</option>
                        <option value="Chain">Chain</option>
                        <option value="Bangles">Bangles</option>
                        <option value="Anklet">Anklet</option>
                    </select>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Tax (%) *</label>
                    <input type="number" id="taxPercentage" min="0" max="100" step="0.1" value="0" required style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem;">Product Image *</label>
                    <input type="file" id="imageFile" accept="image/*" style="width: 95%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                    <input type="hidden" id="image">
                    <div id="imagePreview" style="margin-top: 0.5rem; display: none;">
                        <img id="previewImg" src="" alt="Preview" style="max-width: 200px; max-height: 200px; border-radius: 4px; border: 1px solid #ddd;">
                        <p style="margin-top: 0.5rem; font-size: 0.875rem; color: #666;" id="imageName"></p>
                    </div>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" id="isFeatured" style="width: 20px; height: 20px;">
                        <span>Featured Product</span>
                    </label>
                </div>
                <p style="color: #888; font-size: 0.85rem; margin-bottom: 1rem;">Note: Weight, karat, price, and stock details will be added by the Inventory team.</p>
                <button type="submit" style="width: 100%; background: #6f0022; color: white; padding: 0.8rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
                    Save Product
                </button>
            </form>
        </div>
    </div>

    <style>
        .category-tab-btn {
            border: 1px solid #6f0022;
            background: #ffffff;
            color: #6f0022;
            padding: 0.45rem 0.9rem;
            border-radius: 999px;
            cursor: pointer;
            font-weight: 500;
            font-size: 0.85rem;
            transition: all 0.2s ease;
        }

        .category-tab-btn:hover {
            background: #f8eef2;
        }

        .category-tab-btn.active {
            background: #6f0022;
            color: #ffffff;
        }
    </style>`,scripts:[{type:"module",content:`
        import authManager from '/src/auth.js';

        let products = [];
        let stockOptions = [];
        let editingId = null;

        async function checkAuth() {
            const user = await authManager.checkStaffAuth('Product Management');
            if (!user) return false;
            if (user.needsApproval) {
                document.getElementById('pendingOverlay').style.display = 'flex';
                return false;
            }
            document.getElementById('userName').textContent = user.fullName || user.email;
            return true;
        }

        async function loadProducts() {
            try {
            let url = '/api/products?productStatus=Active&';
                const cat = document.getElementById('categoryFilter').value;
                
                if (cat) url += \`category=\${cat}&\`;

                const res = await fetch(url, {
                    credentials: 'same-origin'
                });
                if (!res.ok) throw new Error();
                products = await res.json();
                updateStats();
                displayProducts();
                updateStockWarning();
            } catch (error) {
                showAlert('Error loading products', 'error');
            }
        }

        function setCategoryFilter(categoryValue) {
            document.getElementById('categoryFilter').value = categoryValue;

            const buttons = document.querySelectorAll('.category-tab-btn');
            buttons.forEach((button) => {
                button.classList.remove('active');
                const onclickText = button.getAttribute('onclick') || '';
                const normalizedValue = categoryValue === '' ? "''" : \`'\${categoryValue}'\`;
                if (onclickText.includes(\`setCategoryFilter(\${normalizedValue})\`)) {
                    button.classList.add('active');
                }
            });

            loadProducts();
        }

        function updateStats() {
            document.getElementById('totalProducts').textContent = products.length;
            document.getElementById('inStock').textContent = products.filter(p => (p.stockQuantity ?? 0) > 0).length;
            document.getElementById('featured').textContent = products.filter(p => p.featured).length;
            const uniqueCats = [...new Set(products.map(p => p.category))];
            document.getElementById('categories').textContent = uniqueCats.length;
        }

        function updateStockWarning() {
            const outOfStockCount = products.filter((p) => (p.stockQuantity ?? 0) === 0 && p.productStatus === 'Active').length;
            const warning = document.getElementById('stockWarning');

            if (outOfStockCount > 0) {
                warning.textContent = \`\${outOfStockCount} active product(s) are out of stock.\`;
                warning.style.display = 'block';
            } else {
                warning.style.display = 'none';
            }
        }

        function getProductIdValue(product) {
            if (!product) return '';
            if (typeof product._id === 'string') return product._id;
            if (product._id && typeof product._id === 'object' && typeof product._id.$oid === 'string') {
                return product._id.$oid;
            }
            return String(product._id || '');
        }

        function displayProducts() {
            const tbody = document.getElementById('productsTable');
            const searchValue = (document.getElementById('productSearch')?.value || '').trim().toLowerCase();

            const filteredProducts = products.filter((p) => {
                if (!searchValue) return true;
                return [p.name, p.category, p.description]
                    .filter(Boolean)
                    .some((field) => String(field).toLowerCase().includes(searchValue));
            });

            if (filteredProducts.length === 0) {
                tbody.innerHTML = '<tr><td colspan="10" style="padding: 2rem; text-align: center; color: #999;">No products found</td></tr>';
                return;
            }
            tbody.innerHTML = filteredProducts.map(p => {
                const productId = getProductIdValue(p);
                return \`
                <tr>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">
                        <img src="\${p.image || '/placeholder.jpg'}" alt="\${p.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
                    </td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">\${p.name}</td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">\${p.category}</td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">
                        <div style="font-weight: 600; color: \${(p.stockQuantity ?? 0) > 0 ? '#155724' : '#721c24'};">\${p.stockQuantity ?? 0}</div>
                        <div style="font-size: 0.8rem; color: \${(p.stockQuantity ?? 0) > 0 ? '#155724' : '#721c24'};">\${(p.stockQuantity ?? 0) > 0 ? 'In Stock' : 'Out of Stock'}</div>
                    </td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">
                        <span style="padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem; background: \${p.productStatus === 'Active' ? '#d4edda' : '#fff3cd'}; color: \${p.productStatus === 'Active' ? '#155724' : '#856404'};">
                            \${p.productStatus || 'Draft'}
                        </span>
                    </td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">\${(p.taxPercentage ?? 0).toFixed(1)}%</td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">
                        <span style="padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem; background: \${(p.isAvailableForSale ?? true) ? '#d4edda' : '#f8d7da'}; color: \${(p.isAvailableForSale ?? true) ? '#155724' : '#721c24'};">
                            \${(p.isAvailableForSale ?? true) ? 'Available' : 'Unavailable'}
                        </span>
                    </td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">
                        <span style="padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem; background: \${(p.isVisibleToCustomers ?? true) ? '#d4edda' : '#f8d7da'}; color: \${(p.isVisibleToCustomers ?? true) ? '#155724' : '#721c24'};">
                            \${(p.isVisibleToCustomers ?? true) ? 'Visible' : 'Hidden'}
                        </span>
                    </td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">\${p.featured ? '⭐' : '-'}</td>
                    <td style="padding: 1rem; border-bottom: 1px solid #eee;">
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            <button onclick="toggleAvailability('\${productId}', \${!(p.isAvailableForSale ?? true)})" style="padding: 0.4rem 0.8rem; background: \${(p.isAvailableForSale ?? true) ? '#ffc107' : '#28a745'}; color: \${(p.isAvailableForSale ?? true) ? '#333' : 'white'}; border: none; border-radius: 4px; cursor: pointer;">
                                \${(p.isAvailableForSale ?? true) ? 'Set Unavailable' : 'Set Available'}
                            </button>
                            <button onclick="toggleCustomerVisibility('\${productId}', \${!(p.isVisibleToCustomers ?? true)})" style="padding: 0.4rem 0.8rem; background: \${(p.isVisibleToCustomers ?? true) ? '#6c757d' : '#17a2b8'}; color: white; border: none; border-radius: 4px; cursor: pointer;">
                                \${(p.isVisibleToCustomers ?? true) ? 'Hide from Customers' : 'Unhide for Customers'}
                            </button>
                            <button onclick="editProduct('\${productId}')" style="padding: 0.4rem 0.8rem; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;">Edit Product</button>
                            <button onclick="deleteProduct('\${productId}', '\${p.name}')" style="padding: 0.4rem 0.8rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">Remove Product (Keep Stock)</button>
                        </div>
                    </td>
                </tr>
            \`;
            }).join('');
        }

        async function toggleAvailability(id, newAvailability) {
            try {
                const safeId = encodeURIComponent(String(id || '').trim());
                if (!safeId) throw new Error('Invalid product id');
                const res = await fetch(\`/api/products/\${safeId}/availability\`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                    body: JSON.stringify({ isAvailableForSale: newAvailability })
                });
                if (!res.ok) {
                    const err = await res.json();
                    throw new Error(err.message || 'Failed to update availability');
                }
                const data = await res.json();
                showAlert(data.message || 'Sale availability updated', 'success');
                await loadProducts();
            } catch (error) {
                showAlert(error.message, 'error');
            }
        }

        async function toggleCustomerVisibility(id, newVisibility) {
            try {
                const safeId = encodeURIComponent(String(id || '').trim());
                if (!safeId) throw new Error('Invalid product id');
                const res = await fetch(\`/api/products/\${safeId}/customer-visibility\`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'same-origin',
                    body: JSON.stringify({ isVisibleToCustomers: newVisibility })
                });
                if (!res.ok) {
                    const err = await res.json();
                    throw new Error(err.message || 'Failed to update customer visibility');
                }
                showAlert('Customer visibility updated', 'success');
                await loadProducts();
            } catch (error) {
                showAlert(error.message, 'error');
            }
        }

        async function openAddModal() {
            editingId = null;
            document.getElementById('modalTitle').textContent = 'Add Product';
            document.getElementById('productForm').reset();
            document.getElementById('taxPercentage').value = '0';
            await loadStockOptions();
            populateStockSelector();
            document.getElementById('productModal').style.display = 'flex';
        }

        function editProduct(id) {
            const product = products.find(p => p._id === id);
            if (!product) return;
            editingId = id;
            document.getElementById('modalTitle').textContent = 'Edit Product';
            document.getElementById('name').value = product.name;
            document.getElementById('description').value = product.description;
            document.getElementById('category').value = product.category;
            document.getElementById('taxPercentage').value = product.taxPercentage ?? 0;
            document.getElementById('image').value = product.image || '';
            
            // Show current image if exists
            if (product.image) {
                document.getElementById('previewImg').src = product.image;
                document.getElementById('imageName').textContent = 'Current image';
                document.getElementById('imagePreview').style.display = 'block';
            }
            
            document.getElementById('isFeatured').checked = product.featured;
            document.getElementById('productModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('productModal').style.display = 'none';
            document.getElementById('productForm').reset();
            document.getElementById('imagePreview').style.display = 'none';
            document.getElementById('image').value = '';
            editingId = null;
        }

        async function loadStockOptions() {
            try {
                const res = await fetch('/api/products/stock-options', { credentials: 'same-origin' });
                if (!res.ok) throw new Error();
                stockOptions = await res.json();
                populateStockSelector();
            } catch (error) {
                stockOptions = [];
                populateStockSelector();
            }
        }

        function populateStockSelector() {
            const select = document.getElementById('stockSelector');
            if (!select) return;

            const optionsHtml = stockOptions.map((item) => {
                const stock = item.stockQuantity ?? 0;
                const kType = item.kType || '-';
                return \`<option value="\${item._id}">\${item.name} | \${item.category} | \${kType} | Stock: \${stock}</option>\`;
            }).join('');

            select.innerHTML = '<option value="">Create New Product (Manual)</option>' + optionsHtml;
            document.getElementById('stockHint').textContent = stockOptions.length
                ? \`Available unpublished stock items: \${stockOptions.length}\`
                : 'No unpublished stock items available. Create product manually.';
        }

        function onStockSelect() {
            const selectedId = document.getElementById('stockSelector').value;
            if (!selectedId) {
                document.getElementById('stockHint').textContent = stockOptions.length
                    ? \`Available unpublished stock items: \${stockOptions.length}\`
                    : 'No unpublished stock items available. Create product manually.';
                return;
            }

            const selected = stockOptions.find((item) => item._id === selectedId);
            if (!selected) return;

            const stock = selected.stockQuantity ?? 0;
            const kType = selected.kType || 'N/A';
            document.getElementById('stockHint').textContent = \`Selected stock item: \${selected.name} (\${kType}) | Available stock: \${stock}. Fill name, description, image, featured, and tax manually.\`;
        }

        async function deleteProduct(id, name) {
            if (!confirm(\`Remove \${name} from product list? Stock will be kept in inventory.\`)) return;
            try {
                const res = await fetch(\`/api/products/\${id}\`, { 
                    method: 'DELETE',
                    credentials: 'same-origin'
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.message || 'Failed to remove product');
                showAlert(data.message || 'Product removed', 'success');
                loadProducts();
            } catch (error) {
                showAlert(error.message || 'Error removing product', 'error');
            }
        }

        // Image file preview
        document.getElementById('imageFile').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('previewImg').src = e.target.result;
                    document.getElementById('imageName').textContent = file.name;
                    document.getElementById('imagePreview').style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });

        document.getElementById('stockSelector').addEventListener('change', onStockSelect);

        document.getElementById('productForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            let imagePath = document.getElementById('image').value;
            
            // Upload image first if a file is selected
            const imageFile = document.getElementById('imageFile').files[0];
            if (imageFile) {
                try {
                    const formData = new FormData();
                    formData.append('image', imageFile);
                    
                    const uploadRes = await fetch('/api/upload', {
                        method: 'POST',
                        credentials: 'same-origin',
                        body: formData
                    });
                    
                    if (!uploadRes.ok) {
                        const err = await uploadRes.json();
                        throw new Error(err.message || 'Failed to upload image');
                    }
                    
                    const uploadData = await uploadRes.json();
                    imagePath = uploadData.imagePath;
                } catch (error) {
                    showAlert('Error uploading image: ' + error.message, 'error');
                    return;
                }
            }
            
            // Validate that we have an image
            if (!imagePath) {
                showAlert('Please select an image', 'error');
                return;
            }
            
            const data = {
                stockProductId: editingId ? null : (document.getElementById('stockSelector').value || null),
                name: document.getElementById('name').value,
                description: document.getElementById('description').value,
                category: document.getElementById('category').value,
                image: imagePath,
                featured: document.getElementById('isFeatured').checked,
                taxPercentage: parseFloat(document.getElementById('taxPercentage').value) || 0
            };

            try {
                let res;
                if (editingId) {
                    res = await fetch(\`/api/products/\${editingId}\`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'same-origin',
                        body: JSON.stringify(data)
                    });
                } else {
                    res = await fetch('/api/products', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'same-origin',
                        body: JSON.stringify(data)
                    });
                }
                if (!res.ok) {
                    const err = await res.json();
                    throw new Error(err.message);
                }
                showAlert(editingId ? 'Product updated' : 'Product created', 'success');
                closeModal();
                await loadProducts();
                await loadStockOptions();
            } catch (error) {
                showAlert(error.message, 'error');
            }
        });

        function showAlert(msg, type) {
            const alert = document.getElementById('alert');
            alert.textContent = msg;
            alert.style.display = 'block';
            alert.style.background = type === 'success' ? '#d4edda' : '#f8d7da';
            alert.style.color = type === 'success' ? '#155724' : '#721c24';
            alert.style.border = \`1px solid \${type === 'success' ? '#c3e6cb' : '#f5c6cb'}\`;
            setTimeout(() => alert.style.display = 'none', 5000);
        }

        function logout() {
            authManager.logout();
        }

        // Make functions available globally for onclick/onchange handlers
        window.logout = logout;
        window.openAddModal = openAddModal;
        window.closeModal = closeModal;
        window.editProduct = editProduct;
        window.deleteProduct = deleteProduct;
        window.loadProducts = loadProducts;
        window.setCategoryFilter = setCategoryFilter;
        window.toggleAvailability = toggleAvailability;
        window.toggleCustomerVisibility = toggleCustomerVisibility;

        (async () => {
            const auth = await checkAuth();
            if (auth) {
                await loadStockOptions();
                loadProducts();
                document.getElementById('productSearch').addEventListener('input', displayProducts);
            }
        })();
    `}]};function cp(){const l=v.useRef(null);return v.useEffect(()=>{const c=l.current;if(!c)return;document.title=Ka.title,c.innerHTML=Ka.html;const s=[];for(const u of Ka.scripts||[]){const f=document.createElement("script");u.type&&(f.type=u.type),f.textContent=u.content,c.appendChild(f),s.push(f)}return()=>{s.forEach(u=>u.remove()),c.innerHTML=""}},[]),n.jsx("div",{ref:l})}function up(){const[l,c]=v.useState(""),[s,u]=v.useState(""),[f,w]=v.useState(!1),[h,N]=v.useState({message:"",type:"error"});v.useEffect(()=>{document.title="Staff Login - Saranya Jewellery"},[]);function S(E,C="error"){N({message:E,type:C}),window.setTimeout(()=>N({message:"",type:"error"}),5e3)}async function P(E){E.preventDefault();const C=l.trim();if(!C||!s){S("Please fill in all fields");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(C)){S("Please enter a valid email address");return}w(!0);const U=await le.loginStaff(C,s);if(U.success){S("Login successful! Redirecting...","success"),window.setTimeout(()=>{const j=le.getRoleDashboard(U.data.staff?.role);window.location.href=j},500);return}S(U.error||"Invalid email or password"),w(!1)}return n.jsxs("div",{className:"login-container",children:[n.jsxs("div",{className:"logo-area",children:[n.jsx("h1",{children:"Saranya"}),n.jsx("p",{children:"Staff Portal Login"})]}),n.jsx("div",{className:`alert ${h.message?`alert-${h.type} show`:""}`,children:h.message}),n.jsxs("form",{onSubmit:P,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"email",children:"Email Address"}),n.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Enter your email",required:!0,value:l,onChange:E=>c(E.target.value)})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"password",children:"Password"}),n.jsx("input",{type:"password",id:"password",name:"password",placeholder:"Enter your password",required:!0,value:s,onChange:E=>u(E.target.value)})]}),n.jsx("button",{type:"submit",className:"btn",disabled:f,children:f?"Logging in...":"Login"})]}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"/staff-register",children:"Create Account"}),n.jsx("span",{className:"divider",children:"|"}),n.jsx("a",{href:"/",children:"Back to Home"})]})]})}function mp(){const[l,c]=v.useState({fullName:"",email:"",role:"",password:"",confirmPassword:""}),[s,u]=v.useState(!1),[f,w]=v.useState({message:"",type:"error"});v.useEffect(()=>{document.title="Staff Registration - Saranya Jewellery"},[]);function h(S,P="error"){w({message:S,type:P}),window.setTimeout(()=>w({message:"",type:"error"}),5e3)}async function N(S){S.preventDefault();const P=l.fullName.trim(),E=l.email.trim();if(!P||!E||!l.role||!l.password||!l.confirmPassword){h("Please fill in all fields");return}if(P.length<3){h("Name must be at least 3 characters long");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(E)){h("Please enter a valid email address");return}if(l.password.length<6){h("Password must be at least 6 characters long");return}if(l.password!==l.confirmPassword){h("Passwords do not match");return}u(!0);try{const F=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:P,email:E,role:l.role,password:l.password})}),U=await F.json();if(!F.ok){h(U.message||"Registration failed"),u(!1);return}h("Registration successful! Your account is pending approval. Redirecting to login...","success"),c({fullName:"",email:"",role:"",password:"",confirmPassword:""}),window.setTimeout(()=>{window.location.href="/staff-login"},2e3)}catch(F){console.error("Registration error:",F),h("Network error. Please check your connection and try again."),u(!1)}}return n.jsxs("div",{className:"register-container",children:[n.jsxs("div",{className:"logo-area",children:[n.jsx("h1",{children:"Saranya"}),n.jsx("p",{children:"Staff Portal Registration"})]}),n.jsx("div",{className:"info-note",children:"Your account will be pending approval until an administrator reviews and approves it."}),n.jsx("div",{className:`alert ${f.message?`alert-${f.type} show`:""}`,children:f.message}),n.jsxs("form",{onSubmit:N,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"fullName",children:"Full Name"}),n.jsx("input",{type:"text",id:"fullName",name:"fullName",placeholder:"Enter your full name",required:!0,value:l.fullName,onChange:S=>c(P=>({...P,fullName:S.target.value}))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"email",children:"Email Address"}),n.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Enter your email",required:!0,value:l.email,onChange:S=>c(P=>({...P,email:S.target.value}))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"role",children:"Select Your Role"}),n.jsxs("select",{id:"role",name:"role",required:!0,value:l.role,onChange:S=>c(P=>({...P,role:S.target.value})),children:[n.jsx("option",{value:"",children:"-- Choose Role --"}),n.jsx("option",{value:"Customer Care",children:"Customer Care"}),n.jsx("option",{value:"Inventory",children:"Inventory"}),n.jsx("option",{value:"Order Management",children:"Order Management"}),n.jsx("option",{value:"Loyalty Management",children:"Loyalty Management"}),n.jsx("option",{value:"Product Management",children:"Product Management"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"password",children:"Password"}),n.jsx("input",{type:"password",id:"password",name:"password",placeholder:"Create a password",required:!0,minLength:6,value:l.password,onChange:S=>c(P=>({...P,password:S.target.value}))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),n.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",placeholder:"Re-enter password",required:!0,minLength:6,value:l.confirmPassword,onChange:S=>c(P=>({...P,confirmPassword:S.target.value}))})]}),n.jsx("button",{type:"submit",className:"btn",disabled:s,children:s?"Registering...":"Register"})]}),n.jsxs("div",{className:"footer-links",children:[n.jsx("a",{href:"/staff-login",children:"Already have an account? Login"}),n.jsx("span",{className:"divider",children:"|"}),n.jsx("a",{href:"/",children:"Back to Home"})]})]})}const fp={"admin-dashboard":Bf,"customer-care-dashboard":zf,"customer-cart":$f,"customer-dashboard":Uf,"customer-login":Wf,"customer-loyalty":qf,"customer-orders":Gf,"customer-product":Qf,"customer-register":Yf,"customer-shop":tp,"customer-support":rp,home:ap,"inventory-dashboard":lp,"loyalty-management-dashboard":sp,"order-management-dashboard":dp,"product-management-dashboard":cp,"staff-login":up,"staff-register":mp},pp={"/admin-dashboard":"admin-dashboard","/customer-care-dashboard":"customer-care-dashboard","/customer-cart":"customer-cart","/customer-dashboard":"customer-dashboard","/customer-login":"customer-login","/customer-loyalty":"customer-loyalty","/customer-orders":"customer-orders","/customer-product":"customer-product","/customer-register":"customer-register","/customer-shop":"customer-shop","/customer-support":"customer-support","/":"home","/inventory-dashboard":"inventory-dashboard","/loyalty-management-dashboard":"loyalty-management-dashboard","/order-management-dashboard":"order-management-dashboard","/product-management-dashboard":"product-management-dashboard","/staff-login":"staff-login","/staff-register":"staff-register"};function gp(){return n.jsxs(Mf,{children:[Object.entries(pp).map(([l,c])=>{const s=fp[c];return s?n.jsx(Xa,{path:l,element:n.jsx(s,{})},l):null}),n.jsx(Xa,{path:"*",element:n.jsx(Rf,{to:"/",replace:!0})})]})}_m.createRoot(document.getElementById("root")).render(n.jsx(vc.StrictMode,{children:n.jsx(Of,{children:n.jsx(gp,{})})}));
