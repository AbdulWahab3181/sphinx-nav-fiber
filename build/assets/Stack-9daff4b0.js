import{bZ as $,bP as _,bK as A,bL as E}from"./react-toastify.esm-bb128754.js";import{E as P,C as l,aQ as F,I as O,H as B,aR as D,aS as v,aT as m,aU as M,J as G,aV as N,r as y,j as U,aW as x,O as L}from"./index-f76464f2.js";const I=["sx"],W=e=>{var s,r;const t={systemProps:{},otherProps:{}},c=(s=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?s:F;return Object.keys(e).forEach(o=>{c[o]?t.systemProps[o]=e[o]:t.otherProps[o]=e[o]}),t};function H(e){const{sx:s}=e,r=P(e,I),{systemProps:t,otherProps:c}=W(r);let o;return Array.isArray(s)?o=[t,...s]:typeof s=="function"?o=(...u)=>{const i=s(...u);return O(i)?l({},t,i):t}:o=l({},t,s),l({},c,{sx:o})}function k(e){var s,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e))for(s=0;s<e.length;s++)e[s]&&(r=k(e[s]))&&(t&&(t+=" "),t+=r);else for(s in e)e[s]&&(t&&(t+=" "),t+=s);return t}function J(){for(var e,s,r=0,t="";r<arguments.length;)(e=arguments[r++])&&(s=k(e))&&(t&&(t+=" "),t+=s);return t}const K=$(),Q=K,Z=["component","direction","spacing","divider","children","className","useFlexGap"],q=B(),z=Q("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function X(e){return D({props:e,name:"MuiStack",defaultTheme:q})}function Y(e,s){const r=y.Children.toArray(e).filter(Boolean);return r.reduce((t,c,o)=>(t.push(c),o<r.length-1&&t.push(y.cloneElement(s,{key:`separator-${o}`})),t),[])}const w=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],ee=({ownerState:e,theme:s})=>{let r=l({display:"flex",flexDirection:"column"},v({theme:s},m({values:e.direction,breakpoints:s.breakpoints.values}),t=>({flexDirection:t})));if(e.spacing){const t=M(s),c=Object.keys(s.breakpoints.values).reduce((n,a)=>((typeof e.spacing=="object"&&e.spacing[a]!=null||typeof e.direction=="object"&&e.direction[a]!=null)&&(n[a]=!0),n),{}),o=m({values:e.direction,base:c}),u=m({values:e.spacing,base:c});typeof o=="object"&&Object.keys(o).forEach((n,a,f)=>{if(!o[n]){const p=a>0?o[f[a-1]]:"column";o[n]=p}}),r=G(r,v({theme:s},u,(n,a)=>e.useFlexGap?{gap:x(t,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${w(a?o[a]:e.direction)}`]:x(t,n)}}))}return r=N(s.breakpoints,r),r};function se(e={}){const{createStyledComponent:s=z,useThemeProps:r=X,componentName:t="MuiStack"}=e,c=()=>_({root:["root"]},n=>A(t,n),{}),o=s(ee);return y.forwardRef(function(n,a){const f=r(n),d=H(f),{component:p="div",direction:b="column",spacing:S=0,divider:h,children:g,className:j,useFlexGap:C=!1}=d,R=P(d,Z),T={direction:b,spacing:S,useFlexGap:C},V=c();return U.jsx(o,l({as:p,ownerState:T,ref:a,className:J(V.root,j)},R,{children:h?Y(g,h):g}))})}const te=se({createStyledComponent:E("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>L({props:e,name:"MuiStack"})}),ne=te;export{ne as S};