import{_ as r,a as h}from"./index-4b35c83e.js";import{d as w}from"./index-67c0da52.js";function A(e,o=166){let t;function n(...s){const i=()=>{e.apply(this,s)};clearTimeout(t),t=setTimeout(i,o)}return n.clear=()=>{clearTimeout(t)},n}function x(e){return e&&e.ownerDocument||document}function T(e){return x(e).defaultView||window}function N(e){return typeof e=="string"}function k(e,o,t){return e===void 0||N(e)?o:r({},o,{ownerState:r({},o.ownerState,t)})}function E(e,o=[]){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&typeof e[n]=="function"&&!o.includes(n)).forEach(n=>{t[n]=e[n]}),t}function H(e,o,t){return typeof e=="function"?e(o,t):e}function P(e){var o,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(o=0;o<e.length;o++)e[o]&&(t=P(e[o]))&&(n&&(n+=" "),n+=t);else for(o in e)e[o]&&(n&&(n+=" "),n+=o);return n}function g(){for(var e,o,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(o=P(e))&&(n&&(n+=" "),n+=o);return n}function S(e){if(e===void 0)return{};const o={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&typeof e[t]=="function")).forEach(t=>{o[t]=e[t]}),o}function R(e){const{getSlotProps:o,additionalProps:t,externalSlotProps:n,externalForwardedProps:s,className:i}=e;if(!o){const v=g(t==null?void 0:t.className,i,s==null?void 0:s.className,n==null?void 0:n.className),y=r({},t==null?void 0:t.style,s==null?void 0:s.style,n==null?void 0:n.style),p=r({},t,s,n);return v.length>0&&(p.className=v),Object.keys(y).length>0&&(p.style=y),{props:p,internalRef:void 0}}const c=E(r({},s,n)),a=S(n),d=S(s),l=o(c),u=g(l==null?void 0:l.className,t==null?void 0:t.className,i,s==null?void 0:s.className,n==null?void 0:n.className),f=r({},l==null?void 0:l.style,t==null?void 0:t.style,s==null?void 0:s.style,n==null?void 0:n.style),m=r({},l,t,d,a);return u.length>0&&(m.className=u),Object.keys(f).length>0&&(m.style=f),{props:m,internalRef:l.ref}}const C=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function W(e){var o;const{elementType:t,externalSlotProps:n,ownerState:s,skipResolvingSlotProps:i=!1}=e,c=h(e,C),a=i?{}:H(n,s),{props:d,internalRef:l}=R(r({},c,{externalSlotProps:a})),u=w(l,a==null?void 0:a.ref,(o=e.additionalProps)==null?void 0:o.ref);return k(t,r({},d,{ref:u}),s)}export{T as a,A as d,E as e,N as i,x as o,W as u};
