import{b as I,g as C,s as w,e as f,r as v,u as R,a as b,_ as g,j as S,c as j,d as N}from"./index-4b35c83e.js";function A(o){return I("MuiSvgIcon",o)}C("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const B=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],M=o=>{const{color:e,fontSize:t,classes:i}=o,n={root:["root",e!=="inherit"&&`color${f(e)}`,`fontSize${f(t)}`]};return N(n,A,i)},T=w("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${f(t.color)}`],e[`fontSize${f(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,i,n,u,m,a,h,p,d,r,s,c,l;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(i=t.create)==null?void 0:i.call(t,"fill",{duration:(n=o.transitions)==null||(n=n.duration)==null?void 0:n.shorter}),fontSize:{inherit:"inherit",small:((u=o.typography)==null||(m=u.pxToRem)==null?void 0:m.call(u,20))||"1.25rem",medium:((a=o.typography)==null||(h=a.pxToRem)==null?void 0:h.call(a,24))||"1.5rem",large:((p=o.typography)==null||(d=p.pxToRem)==null?void 0:d.call(p,35))||"2.1875rem"}[e.fontSize],color:(r=(s=(o.vars||o).palette)==null||(s=s[e.color])==null?void 0:s.main)!=null?r:{action:(c=(o.vars||o).palette)==null||(c=c.action)==null?void 0:c.active,disabled:(l=(o.vars||o).palette)==null||(l=l.action)==null?void 0:l.disabled,inherit:void 0}[e.color]}}),_=v.forwardRef(function(e,t){const i=R({props:e,name:"MuiSvgIcon"}),{children:n,className:u,color:m="inherit",component:a="svg",fontSize:h="medium",htmlColor:p,inheritViewBox:d=!1,titleAccess:r,viewBox:s="0 0 24 24"}=i,c=b(i,B),l=v.isValidElement(n)&&n.type==="svg",y=g({},i,{color:m,component:a,fontSize:h,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:s,hasSvgAsChild:l}),x={};d||(x.viewBox=s);const z=M(y);return S.jsxs(T,g({as:a,className:j(z.root,u),focusable:"false",color:p,"aria-hidden":r?void 0:!0,role:r?"img":void 0,ref:t},x,c,l&&n.props,{ownerState:y,children:[l?n.props.children:n,r?S.jsx("title",{children:r}):null]}))});_.muiName="SvgIcon";const $=_;function U(o,e){function t(i,n){return S.jsx($,g({"data-testid":`${e}Icon`,ref:n},i,{children:o}))}return t.muiName=$.muiName,v.memo(v.forwardRef(t))}export{U as c};
