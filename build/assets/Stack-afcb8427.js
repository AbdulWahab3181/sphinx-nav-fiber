import{r as E,a as ae,_ as T,bE as Tt,bF as Mt,bG as Bt,bH as Ft,bI as Wt,bp as Qe,bo as Ae,bJ as Lt,bD as Vt,bK as Nt,j as Q,bL as Ze,d as De,b as Te,g as vt,s as Me,bM as Ht,u as Be,e as mt,c as Ut}from"./index-47516e4c.js";import{o as et,u as It}from"./useSlotProps-79be829e.js";import{d as qt}from"./Popover-a83ac9d9.js";import{d as tt,e as rt}from"./index-a07c4456.js";function Se(e,t){var r,o;return E.isValidElement(e)&&t.indexOf((r=e.type.muiName)!=null?r:(o=e.type)==null||(o=o._payload)==null||(o=o.value)==null?void 0:o.muiName)!==-1}function Vo({controlled:e,default:t,name:r,state:o="value"}){const{current:n}=E.useRef(e!==void 0),[a,c]=E.useState(t),s=n?e:a,i=E.useCallback(f=>{n||c(f)},[]);return[s,i]}const zt=["sx"],Xt=e=>{var t,r;const o={systemProps:{},otherProps:{}},n=(t=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?t:Tt;return Object.keys(e).forEach(a=>{n[a]?o.systemProps[a]=e[a]:o.otherProps[a]=e[a]}),o};function Yt(e){const{sx:t}=e,r=ae(e,zt),{systemProps:o,otherProps:n}=Xt(r);let a;return Array.isArray(t)?a=[o,...t]:typeof t=="function"?a=(...c)=>{const s=t(...c);return Mt(s)?T({},o,s):o}:a=T({},o,t),T({},n,{sx:a})}function ht(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=ht(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Gt(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=ht(e))&&(o&&(o+=" "),o+=t);return o}const _t=Bt(),Jt=_t,Kt=["component","direction","spacing","divider","children","className","useFlexGap"],Qt=Ft(),Zt=Jt("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function er(e){return Wt({props:e,name:"MuiStack",defaultTheme:Qt})}function tr(e,t){const r=E.Children.toArray(e).filter(Boolean);return r.reduce((o,n,a)=>(o.push(n),a<r.length-1&&o.push(E.cloneElement(t,{key:`separator-${a}`})),o),[])}const rr=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],or=({ownerState:e,theme:t})=>{let r=T({display:"flex",flexDirection:"column"},Qe({theme:t},Ae({values:e.direction,breakpoints:t.breakpoints.values}),o=>({flexDirection:o})));if(e.spacing){const o=Lt(t),n=Object.keys(t.breakpoints.values).reduce((i,f)=>((typeof e.spacing=="object"&&e.spacing[f]!=null||typeof e.direction=="object"&&e.direction[f]!=null)&&(i[f]=!0),i),{}),a=Ae({values:e.direction,base:n}),c=Ae({values:e.spacing,base:n});typeof a=="object"&&Object.keys(a).forEach((i,f,l)=>{if(!a[i]){const h=f>0?a[l[f-1]]:"column";a[i]=h}}),r=Vt(r,Qe({theme:t},c,(i,f)=>e.useFlexGap?{gap:Ze(o,i)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${rr(f?a[f]:e.direction)}`]:Ze(o,i)}}))}return r=Nt(t.breakpoints,r),r};function nr(e={}){const{createStyledComponent:t=Zt,useThemeProps:r=er,componentName:o="MuiStack"}=e,n=()=>De({root:["root"]},i=>Te(o,i),{}),a=t(or);return E.forwardRef(function(i,f){const l=r(i),v=Yt(l),{component:h="div",direction:u="column",spacing:x=0,divider:d,children:m,className:w,useFlexGap:P=!1}=v,b=ae(v,Kt),p={direction:u,spacing:x,useFlexGap:P},g=n();return Q.jsx(a,T({as:h,ownerState:p,ref:f,className:Gt(g.root,w)},b,{children:d?tr(m,d):m}))})}const ar={disableDefaultClasses:!1},ir=E.createContext(ar);function sr(e){const{disableDefaultClasses:t}=E.useContext(ir);return r=>t?"":e(r)}var B="top",N="bottom",H="right",F="left",Fe="auto",de=[B,N,H,F],te="start",pe="end",lr="clippingParents",gt="viewport",le="popper",cr="reference",ot=de.reduce(function(e,t){return e.concat([t+"-"+te,t+"-"+pe])},[]),yt=[].concat(de,[Fe]).reduce(function(e,t){return e.concat([t,t+"-"+te,t+"-"+pe])},[]),fr="beforeRead",pr="read",ur="afterRead",dr="beforeMain",vr="main",mr="afterMain",hr="beforeWrite",gr="write",yr="afterWrite",br=[fr,pr,ur,dr,vr,mr,hr,gr,yr];function I(e){return e?(e.nodeName||"").toLowerCase():null}function W(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Z(e){var t=W(e).Element;return e instanceof t||e instanceof Element}function V(e){var t=W(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function We(e){if(typeof ShadowRoot>"u")return!1;var t=W(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function xr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},a=t.elements[r];!V(a)||!I(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(c){var s=n[c];s===!1?a.removeAttribute(c):a.setAttribute(c,s===!0?"":s)}))})}function wr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],a=t.attributes[o]||{},c=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=c.reduce(function(i,f){return i[f]="",i},{});!V(n)||!I(n)||(Object.assign(n.style,s),Object.keys(a).forEach(function(i){n.removeAttribute(i)}))})}}const Or={name:"applyStyles",enabled:!0,phase:"write",fn:xr,effect:wr,requires:["computeStyles"]};function U(e){return e.split("-")[0]}var K=Math.max,we=Math.min,re=Math.round;function $e(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function bt(){return!/^((?!chrome|android).)*safari/i.test($e())}function oe(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,a=1;t&&V(e)&&(n=e.offsetWidth>0&&re(o.width)/e.offsetWidth||1,a=e.offsetHeight>0&&re(o.height)/e.offsetHeight||1);var c=Z(e)?W(e):window,s=c.visualViewport,i=!bt()&&r,f=(o.left+(i&&s?s.offsetLeft:0))/n,l=(o.top+(i&&s?s.offsetTop:0))/a,v=o.width/n,h=o.height/a;return{width:v,height:h,top:l,right:f+v,bottom:l+h,left:f,x:f,y:l}}function Le(e){var t=oe(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function xt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&We(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function q(e){return W(e).getComputedStyle(e)}function Pr(e){return["table","td","th"].indexOf(I(e))>=0}function Y(e){return((Z(e)?e.ownerDocument:e.document)||window.document).documentElement}function Oe(e){return I(e)==="html"?e:e.assignedSlot||e.parentNode||(We(e)?e.host:null)||Y(e)}function nt(e){return!V(e)||q(e).position==="fixed"?null:e.offsetParent}function Er(e){var t=/firefox/i.test($e()),r=/Trident/i.test($e());if(r&&V(e)){var o=q(e);if(o.position==="fixed")return null}var n=Oe(e);for(We(n)&&(n=n.host);V(n)&&["html","body"].indexOf(I(n))<0;){var a=q(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function ve(e){for(var t=W(e),r=nt(e);r&&Pr(r)&&q(r).position==="static";)r=nt(r);return r&&(I(r)==="html"||I(r)==="body"&&q(r).position==="static")?t:r||Er(e)||t}function Ve(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ce(e,t,r){return K(e,we(t,r))}function Cr(e,t,r){var o=ce(e,t,r);return o>r?r:o}function wt(){return{top:0,right:0,bottom:0,left:0}}function Ot(e){return Object.assign({},wt(),e)}function Pt(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var Rr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Ot(typeof t!="number"?t:Pt(t,de))};function Ar(e){var t,r=e.state,o=e.name,n=e.options,a=r.elements.arrow,c=r.modifiersData.popperOffsets,s=U(r.placement),i=Ve(s),f=[F,H].indexOf(s)>=0,l=f?"height":"width";if(!(!a||!c)){var v=Rr(n.padding,r),h=Le(a),u=i==="y"?B:F,x=i==="y"?N:H,d=r.rects.reference[l]+r.rects.reference[i]-c[i]-r.rects.popper[l],m=c[i]-r.rects.reference[i],w=ve(a),P=w?i==="y"?w.clientHeight||0:w.clientWidth||0:0,b=d/2-m/2,p=v[u],g=P-h[l]-v[x],y=P/2-h[l]/2+b,O=ce(p,y,g),A=i;r.modifiersData[o]=(t={},t[A]=O,t.centerOffset=O-y,t)}}function Sr(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||xt(t.elements.popper,n)&&(t.elements.arrow=n))}const $r={name:"arrow",enabled:!0,phase:"main",fn:Ar,effect:Sr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ne(e){return e.split("-")[1]}var jr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function kr(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:re(r*n)/n||0,y:re(o*n)/n||0}}function at(e){var t,r=e.popper,o=e.popperRect,n=e.placement,a=e.variation,c=e.offsets,s=e.position,i=e.gpuAcceleration,f=e.adaptive,l=e.roundOffsets,v=e.isFixed,h=c.x,u=h===void 0?0:h,x=c.y,d=x===void 0?0:x,m=typeof l=="function"?l({x:u,y:d}):{x:u,y:d};u=m.x,d=m.y;var w=c.hasOwnProperty("x"),P=c.hasOwnProperty("y"),b=F,p=B,g=window;if(f){var y=ve(r),O="clientHeight",A="clientWidth";if(y===W(r)&&(y=Y(r),q(y).position!=="static"&&s==="absolute"&&(O="scrollHeight",A="scrollWidth")),y=y,n===B||(n===F||n===H)&&a===pe){p=N;var C=v&&y===g&&g.visualViewport?g.visualViewport.height:y[O];d-=C-o.height,d*=i?1:-1}if(n===F||(n===B||n===N)&&a===pe){b=H;var R=v&&y===g&&g.visualViewport?g.visualViewport.width:y[A];u-=R-o.width,u*=i?1:-1}}var $=Object.assign({position:s},f&&jr),D=l===!0?kr({x:u,y:d},W(r)):{x:u,y:d};if(u=D.x,d=D.y,i){var S;return Object.assign({},$,(S={},S[p]=P?"0":"",S[b]=w?"0":"",S.transform=(g.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",S))}return Object.assign({},$,(t={},t[p]=P?d+"px":"",t[b]=w?u+"px":"",t.transform="",t))}function Dr(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,c=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,f={placement:U(t.placement),variation:ne(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,at(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,at(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Tr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Dr,data:{}};var be={passive:!0};function Mr(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,a=n===void 0?!0:n,c=o.resize,s=c===void 0?!0:c,i=W(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&f.forEach(function(l){l.addEventListener("scroll",r.update,be)}),s&&i.addEventListener("resize",r.update,be),function(){a&&f.forEach(function(l){l.removeEventListener("scroll",r.update,be)}),s&&i.removeEventListener("resize",r.update,be)}}const Br={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Mr,data:{}};var Fr={left:"right",right:"left",bottom:"top",top:"bottom"};function xe(e){return e.replace(/left|right|bottom|top/g,function(t){return Fr[t]})}var Wr={start:"end",end:"start"};function it(e){return e.replace(/start|end/g,function(t){return Wr[t]})}function Ne(e){var t=W(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function He(e){return oe(Y(e)).left+Ne(e).scrollLeft}function Lr(e,t){var r=W(e),o=Y(e),n=r.visualViewport,a=o.clientWidth,c=o.clientHeight,s=0,i=0;if(n){a=n.width,c=n.height;var f=bt();(f||!f&&t==="fixed")&&(s=n.offsetLeft,i=n.offsetTop)}return{width:a,height:c,x:s+He(e),y:i}}function Vr(e){var t,r=Y(e),o=Ne(e),n=(t=e.ownerDocument)==null?void 0:t.body,a=K(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),c=K(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+He(e),i=-o.scrollTop;return q(n||r).direction==="rtl"&&(s+=K(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:c,x:s,y:i}}function Ue(e){var t=q(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function Et(e){return["html","body","#document"].indexOf(I(e))>=0?e.ownerDocument.body:V(e)&&Ue(e)?e:Et(Oe(e))}function fe(e,t){var r;t===void 0&&(t=[]);var o=Et(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),a=W(o),c=n?[a].concat(a.visualViewport||[],Ue(o)?o:[]):o,s=t.concat(c);return n?s:s.concat(fe(Oe(c)))}function je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Nr(e,t){var r=oe(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function st(e,t,r){return t===gt?je(Lr(e,r)):Z(t)?Nr(t,r):je(Vr(Y(e)))}function Hr(e){var t=fe(Oe(e)),r=["absolute","fixed"].indexOf(q(e).position)>=0,o=r&&V(e)?ve(e):e;return Z(o)?t.filter(function(n){return Z(n)&&xt(n,o)&&I(n)!=="body"}):[]}function Ur(e,t,r,o){var n=t==="clippingParents"?Hr(e):[].concat(t),a=[].concat(n,[r]),c=a[0],s=a.reduce(function(i,f){var l=st(e,f,o);return i.top=K(l.top,i.top),i.right=we(l.right,i.right),i.bottom=we(l.bottom,i.bottom),i.left=K(l.left,i.left),i},st(e,c,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Ct(e){var t=e.reference,r=e.element,o=e.placement,n=o?U(o):null,a=o?ne(o):null,c=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(n){case B:i={x:c,y:t.y-r.height};break;case N:i={x:c,y:t.y+t.height};break;case H:i={x:t.x+t.width,y:s};break;case F:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var f=n?Ve(n):null;if(f!=null){var l=f==="y"?"height":"width";switch(a){case te:i[f]=i[f]-(t[l]/2-r[l]/2);break;case pe:i[f]=i[f]+(t[l]/2-r[l]/2);break}}return i}function ue(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,a=r.strategy,c=a===void 0?e.strategy:a,s=r.boundary,i=s===void 0?lr:s,f=r.rootBoundary,l=f===void 0?gt:f,v=r.elementContext,h=v===void 0?le:v,u=r.altBoundary,x=u===void 0?!1:u,d=r.padding,m=d===void 0?0:d,w=Ot(typeof m!="number"?m:Pt(m,de)),P=h===le?cr:le,b=e.rects.popper,p=e.elements[x?P:h],g=Ur(Z(p)?p:p.contextElement||Y(e.elements.popper),i,l,c),y=oe(e.elements.reference),O=Ct({reference:y,element:b,strategy:"absolute",placement:n}),A=je(Object.assign({},b,O)),C=h===le?A:y,R={top:g.top-C.top+w.top,bottom:C.bottom-g.bottom+w.bottom,left:g.left-C.left+w.left,right:C.right-g.right+w.right},$=e.modifiersData.offset;if(h===le&&$){var D=$[n];Object.keys(R).forEach(function(S){var k=[H,N].indexOf(S)>=0?1:-1,L=[B,N].indexOf(S)>=0?"y":"x";R[S]+=D[L]*k})}return R}function Ir(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,a=r.rootBoundary,c=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,f=i===void 0?yt:i,l=ne(o),v=l?s?ot:ot.filter(function(x){return ne(x)===l}):de,h=v.filter(function(x){return f.indexOf(x)>=0});h.length===0&&(h=v);var u=h.reduce(function(x,d){return x[d]=ue(e,{placement:d,boundary:n,rootBoundary:a,padding:c})[U(d)],x},{});return Object.keys(u).sort(function(x,d){return u[x]-u[d]})}function qr(e){if(U(e)===Fe)return[];var t=xe(e);return[it(e),t,it(t)]}function zr(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,c=r.altAxis,s=c===void 0?!0:c,i=r.fallbackPlacements,f=r.padding,l=r.boundary,v=r.rootBoundary,h=r.altBoundary,u=r.flipVariations,x=u===void 0?!0:u,d=r.allowedAutoPlacements,m=t.options.placement,w=U(m),P=w===m,b=i||(P||!x?[xe(m)]:qr(m)),p=[m].concat(b).reduce(function(ee,X){return ee.concat(U(X)===Fe?Ir(t,{placement:X,boundary:l,rootBoundary:v,padding:f,flipVariations:x,allowedAutoPlacements:d}):X)},[]),g=t.rects.reference,y=t.rects.popper,O=new Map,A=!0,C=p[0],R=0;R<p.length;R++){var $=p[R],D=U($),S=ne($)===te,k=[B,N].indexOf(D)>=0,L=k?"width":"height",j=ue(t,{placement:$,boundary:l,rootBoundary:v,altBoundary:h,padding:f}),M=k?S?H:F:S?N:B;g[L]>y[L]&&(M=xe(M));var z=xe(M),G=[];if(a&&G.push(j[D]<=0),s&&G.push(j[M]<=0,j[z]<=0),G.every(function(ee){return ee})){C=$,A=!1;break}O.set($,G)}if(A)for(var me=x?3:1,Pe=function(X){var se=p.find(function(ge){var _=O.get(ge);if(_)return _.slice(0,X).every(function(Ee){return Ee})});if(se)return C=se,"break"},ie=me;ie>0;ie--){var he=Pe(ie);if(he==="break")break}t.placement!==C&&(t.modifiersData[o]._skip=!0,t.placement=C,t.reset=!0)}}const Xr={name:"flip",enabled:!0,phase:"main",fn:zr,requiresIfExists:["offset"],data:{_skip:!1}};function lt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ct(e){return[B,H,N,F].some(function(t){return e[t]>=0})}function Yr(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,a=t.modifiersData.preventOverflow,c=ue(t,{elementContext:"reference"}),s=ue(t,{altBoundary:!0}),i=lt(c,o),f=lt(s,n,a),l=ct(i),v=ct(f);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":v})}const Gr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Yr};function _r(e,t,r){var o=U(e),n=[F,B].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=a[0],s=a[1];return c=c||0,s=(s||0)*n,[F,H].indexOf(o)>=0?{x:s,y:c}:{x:c,y:s}}function Jr(e){var t=e.state,r=e.options,o=e.name,n=r.offset,a=n===void 0?[0,0]:n,c=yt.reduce(function(l,v){return l[v]=_r(v,t.rects,a),l},{}),s=c[t.placement],i=s.x,f=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=f),t.modifiersData[o]=c}const Kr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Jr};function Qr(e){var t=e.state,r=e.name;t.modifiersData[r]=Ct({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Zr={name:"popperOffsets",enabled:!0,phase:"read",fn:Qr,data:{}};function eo(e){return e==="x"?"y":"x"}function to(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,a=n===void 0?!0:n,c=r.altAxis,s=c===void 0?!1:c,i=r.boundary,f=r.rootBoundary,l=r.altBoundary,v=r.padding,h=r.tether,u=h===void 0?!0:h,x=r.tetherOffset,d=x===void 0?0:x,m=ue(t,{boundary:i,rootBoundary:f,padding:v,altBoundary:l}),w=U(t.placement),P=ne(t.placement),b=!P,p=Ve(w),g=eo(p),y=t.modifiersData.popperOffsets,O=t.rects.reference,A=t.rects.popper,C=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,R=typeof C=="number"?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),$=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(y){if(a){var S,k=p==="y"?B:F,L=p==="y"?N:H,j=p==="y"?"height":"width",M=y[p],z=M+m[k],G=M-m[L],me=u?-A[j]/2:0,Pe=P===te?O[j]:A[j],ie=P===te?-A[j]:-O[j],he=t.elements.arrow,ee=u&&he?Le(he):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:wt(),se=X[k],ge=X[L],_=ce(0,O[j],ee[j]),Ee=b?O[j]/2-me-_-se-R.mainAxis:Pe-_-se-R.mainAxis,At=b?-O[j]/2+me+_+ge+R.mainAxis:ie+_+ge+R.mainAxis,Ce=t.elements.arrow&&ve(t.elements.arrow),St=Ce?p==="y"?Ce.clientTop||0:Ce.clientLeft||0:0,Ie=(S=$==null?void 0:$[p])!=null?S:0,$t=M+Ee-Ie-St,jt=M+At-Ie,qe=ce(u?we(z,$t):z,M,u?K(G,jt):G);y[p]=qe,D[p]=qe-M}if(s){var ze,kt=p==="x"?B:F,Dt=p==="x"?N:H,J=y[g],ye=g==="y"?"height":"width",Xe=J+m[kt],Ye=J-m[Dt],Re=[B,F].indexOf(w)!==-1,Ge=(ze=$==null?void 0:$[g])!=null?ze:0,_e=Re?Xe:J-O[ye]-A[ye]-Ge+R.altAxis,Je=Re?J+O[ye]+A[ye]-Ge-R.altAxis:Ye,Ke=u&&Re?Cr(_e,J,Je):ce(u?_e:Xe,J,u?Je:Ye);y[g]=Ke,D[g]=Ke-J}t.modifiersData[o]=D}}const ro={name:"preventOverflow",enabled:!0,phase:"main",fn:to,requiresIfExists:["offset"]};function oo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function no(e){return e===W(e)||!V(e)?Ne(e):oo(e)}function ao(e){var t=e.getBoundingClientRect(),r=re(t.width)/e.offsetWidth||1,o=re(t.height)/e.offsetHeight||1;return r!==1||o!==1}function io(e,t,r){r===void 0&&(r=!1);var o=V(t),n=V(t)&&ao(t),a=Y(t),c=oe(e,n,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(o||!o&&!r)&&((I(t)!=="body"||Ue(a))&&(s=no(t)),V(t)?(i=oe(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=He(a))),{x:c.left+s.scrollLeft-i.x,y:c.top+s.scrollTop-i.y,width:c.width,height:c.height}}function so(e){var t=new Map,r=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function n(a){r.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&n(i)}}),o.push(a)}return e.forEach(function(a){r.has(a.name)||n(a)}),o}function lo(e){var t=so(e);return br.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function co(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function fo(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var ft={placement:"bottom",modifiers:[],strategy:"absolute"};function pt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function po(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,a=n===void 0?ft:n;return function(s,i,f){f===void 0&&(f=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},ft,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},v=[],h=!1,u={state:l,setOptions:function(w){var P=typeof w=="function"?w(l.options):w;d(),l.options=Object.assign({},a,l.options,P),l.scrollParents={reference:Z(s)?fe(s):s.contextElement?fe(s.contextElement):[],popper:fe(i)};var b=lo(fo([].concat(o,l.options.modifiers)));return l.orderedModifiers=b.filter(function(p){return p.enabled}),x(),u.update()},forceUpdate:function(){if(!h){var w=l.elements,P=w.reference,b=w.popper;if(pt(P,b)){l.rects={reference:io(P,ve(b),l.options.strategy==="fixed"),popper:Le(b)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(R){return l.modifiersData[R.name]=Object.assign({},R.data)});for(var p=0;p<l.orderedModifiers.length;p++){if(l.reset===!0){l.reset=!1,p=-1;continue}var g=l.orderedModifiers[p],y=g.fn,O=g.options,A=O===void 0?{}:O,C=g.name;typeof y=="function"&&(l=y({state:l,options:A,name:C,instance:u})||l)}}}},update:co(function(){return new Promise(function(m){u.forceUpdate(),m(l)})}),destroy:function(){d(),h=!0}};if(!pt(s,i))return u;u.setOptions(f).then(function(m){!h&&f.onFirstUpdate&&f.onFirstUpdate(m)});function x(){l.orderedModifiers.forEach(function(m){var w=m.name,P=m.options,b=P===void 0?{}:P,p=m.effect;if(typeof p=="function"){var g=p({state:l,name:w,instance:u,options:b}),y=function(){};v.push(g||y)}})}function d(){v.forEach(function(m){return m()}),v=[]}return u}}var uo=[Br,Zr,Tr,Or,Kr,Xr,ro,$r,Gr],vo=po({defaultModifiers:uo});function mo(e){return Te("MuiPopper",e)}vt("MuiPopper",["root"]);const ho=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],go=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function yo(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function ke(e){return typeof e=="function"?e():e}function bo(e){return e.nodeType!==void 0}const xo=()=>De({root:["root"]},sr(mo)),wo={},Oo=E.forwardRef(function(t,r){var o;const{anchorEl:n,children:a,direction:c,disablePortal:s,modifiers:i,open:f,placement:l,popperOptions:v,popperRef:h,slotProps:u={},slots:x={},TransitionProps:d}=t,m=ae(t,ho),w=E.useRef(null),P=tt(w,r),b=E.useRef(null),p=tt(b,h),g=E.useRef(p);rt(()=>{g.current=p},[p]),E.useImperativeHandle(h,()=>b.current,[]);const y=yo(l,c),[O,A]=E.useState(y),[C,R]=E.useState(ke(n));E.useEffect(()=>{b.current&&b.current.forceUpdate()}),E.useEffect(()=>{n&&R(ke(n))},[n]),rt(()=>{if(!C||!f)return;const L=z=>{A(z.placement)};let j=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:z})=>{L(z)}}];i!=null&&(j=j.concat(i)),v&&v.modifiers!=null&&(j=j.concat(v.modifiers));const M=vo(C,w.current,T({placement:y},v,{modifiers:j}));return g.current(M),()=>{M.destroy(),g.current(null)}},[C,s,i,f,v,y]);const $={placement:O};d!==null&&($.TransitionProps=d);const D=xo(),S=(o=x.root)!=null?o:"div",k=It({elementType:S,externalSlotProps:u.root,externalForwardedProps:m,additionalProps:{role:"tooltip",ref:P},ownerState:t,className:D.root});return Q.jsx(S,T({},k,{children:typeof a=="function"?a($):a}))}),Po=E.forwardRef(function(t,r){const{anchorEl:o,children:n,container:a,direction:c="ltr",disablePortal:s=!1,keepMounted:i=!1,modifiers:f,open:l,placement:v="bottom",popperOptions:h=wo,popperRef:u,style:x,transition:d=!1,slotProps:m={},slots:w={}}=t,P=ae(t,go),[b,p]=E.useState(!0),g=()=>{p(!1)},y=()=>{p(!0)};if(!i&&!l&&(!d||b))return null;let O;if(a)O=a;else if(o){const R=ke(o);O=R&&bo(R)?et(R).body:et(null).body}const A=!l&&i&&(!d||b)?"none":void 0,C=d?{in:l,onEnter:g,onExited:y}:void 0;return Q.jsx(qt,{disablePortal:s,container:O,children:Q.jsx(Oo,T({anchorEl:o,direction:c,disablePortal:s,modifiers:f,ref:r,open:d?!b:l,placement:v,popperOptions:h,popperRef:u,slotProps:m,slots:w},P,{style:T({position:"fixed",top:0,left:0,display:A},x),TransitionProps:C,children:n}))})}),Eo=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Co=Me(Po,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ro=E.forwardRef(function(t,r){var o;const n=Ht(),a=Be({props:t,name:"MuiPopper"}),{anchorEl:c,component:s,components:i,componentsProps:f,container:l,disablePortal:v,keepMounted:h,modifiers:u,open:x,placement:d,popperOptions:m,popperRef:w,transition:P,slots:b,slotProps:p}=a,g=ae(a,Eo),y=(o=b==null?void 0:b.root)!=null?o:i==null?void 0:i.Root,O=T({anchorEl:c,container:l,disablePortal:v,keepMounted:h,modifiers:u,open:x,placement:d,popperOptions:m,popperRef:w,transition:P},g);return Q.jsx(Co,T({as:s,direction:n==null?void 0:n.direction,slots:{root:y},slotProps:p??f},O,{ref:r}))}),No=Ro;function Ho({props:e,states:t,muiFormControl:r}){return t.reduce((o,n)=>(o[n]=e[n],r&&typeof e[n]>"u"&&(o[n]=r[n]),o),{})}const Ao=E.createContext(void 0),Rt=Ao;function Uo(){return E.useContext(Rt)}function ut(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function dt(e,t=!1){return e&&(ut(e.value)&&e.value!==""||t&&ut(e.defaultValue)&&e.defaultValue!=="")}function So(e){return e.startAdornment}function $o(e){return Te("MuiFormControl",e)}vt("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const jo=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],ko=e=>{const{classes:t,margin:r,fullWidth:o}=e,n={root:["root",r!=="none"&&`margin${mt(r)}`,o&&"fullWidth"]};return De(n,$o,t)},Do=Me("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>T({},t.root,t[`margin${mt(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>T({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),To=E.forwardRef(function(t,r){const o=Be({props:t,name:"MuiFormControl"}),{children:n,className:a,color:c="primary",component:s="div",disabled:i=!1,error:f=!1,focused:l,fullWidth:v=!1,hiddenLabel:h=!1,margin:u="none",required:x=!1,size:d="medium",variant:m="outlined"}=o,w=ae(o,jo),P=T({},o,{color:c,component:s,disabled:i,error:f,fullWidth:v,hiddenLabel:h,margin:u,required:x,size:d,variant:m}),b=ko(P),[p,g]=E.useState(()=>{let S=!1;return n&&E.Children.forEach(n,k=>{if(!Se(k,["Input","Select"]))return;const L=Se(k,["Select"])?k.props.input:k;L&&So(L.props)&&(S=!0)}),S}),[y,O]=E.useState(()=>{let S=!1;return n&&E.Children.forEach(n,k=>{Se(k,["Input","Select"])&&(dt(k.props,!0)||dt(k.props.inputProps,!0))&&(S=!0)}),S}),[A,C]=E.useState(!1);i&&A&&C(!1);const R=l!==void 0&&!i?l:A;let $;const D=E.useMemo(()=>({adornedStart:p,setAdornedStart:g,color:c,disabled:i,error:f,filled:y,focused:R,fullWidth:v,hiddenLabel:h,size:d,onBlur:()=>{C(!1)},onEmpty:()=>{O(!1)},onFilled:()=>{O(!0)},onFocus:()=>{C(!0)},registerEffect:$,required:x,variant:m}),[p,c,i,f,y,R,v,h,$,x,d,m]);return Q.jsx(Rt.Provider,{value:D,children:Q.jsx(Do,T({as:s,ownerState:P,className:Ut(b.root,a),ref:r},w,{children:n}))})}),Io=To,Mo=nr({createStyledComponent:Me("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>Be({props:e,name:"MuiStack"})}),qo=Mo;export{Io as F,No as P,qo as S,Uo as a,Rt as b,Yt as e,Ho as f,dt as i,Vo as u};