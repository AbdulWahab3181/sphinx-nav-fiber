import{g as ft,b as ht,s as A,e as $t,_ as b,r as d,u as vt,a as nt,c as $,j as v,d as St,ac as Lt,o as te,ag as rt,F as ee,T as oe}from"./index-4b35c83e.js";import{n as Nt,e as re,f as bt}from"./index-67c0da52.js";import{d as kt,a as Ft,u as lt,o as le}from"./useSlotProps-d8b27a34.js";import{c as jt}from"./createSvgIcon-08b8911f.js";let K;function At(){if(K)return K;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),K="reverse",t.scrollLeft>0?K="default":(t.scrollLeft=1,t.scrollLeft===0&&(K="negative")),document.body.removeChild(t),K}function ne(t,e){const l=t.scrollLeft;if(e!=="rtl")return l;switch(At()){case"negative":return t.scrollWidth-t.clientWidth+l;case"reverse":return t.scrollWidth-t.clientWidth-l;default:return l}}function se(t){return ht("MuiTab",t)}const ae=ft("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),j=ae,ie=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],ce=t=>{const{classes:e,textColor:l,fullWidth:s,wrapped:n,icon:i,label:h,selected:p,disabled:u}=t,S={root:["root",i&&h&&"labelIcon",`textColor${$t(l)}`,s&&"fullWidth",n&&"wrapped",p&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return St(S,se,e)},de=A(Nt,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.root,l.label&&l.icon&&e.labelIcon,e[`textColor${$t(l.textColor)}`],l.fullWidth&&e.fullWidth,l.wrapped&&e.wrapped]}})(({theme:t,ownerState:e})=>b({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${j.iconWrapper}`]:b({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${j.selected}`]:{opacity:1},[`&.${j.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${j.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${j.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${j.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${j.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),ue=d.forwardRef(function(e,l){const s=vt({props:e,name:"MuiTab"}),{className:n,disabled:i=!1,disableFocusRipple:h=!1,fullWidth:p,icon:u,iconPosition:S="top",indicator:B,label:C,onChange:x,onClick:g,onFocus:O,selected:I,selectionFollowsFocus:y,textColor:H="inherit",value:w,wrapped:st=!1}=s,D=nt(s,ie),U=b({},s,{disabled:i,disableFocusRipple:h,selected:I,icon:!!u,iconPosition:S,label:!!C,fullWidth:p,textColor:H,wrapped:st}),X=ce(U),L=u&&C&&d.isValidElement(u)?d.cloneElement(u,{className:$(X.iconWrapper,u.props.className)}):u,J=R=>{!I&&x&&x(R,w),g&&g(R)},_=R=>{y&&!I&&x&&x(R,w),O&&O(R)};return v.jsxs(de,b({focusRipple:!h,className:$(X.root,n),ref:l,role:"tab","aria-selected":I,disabled:i,onClick:J,onFocus:_,ownerState:U,tabIndex:I?0:-1},D,{children:[S==="top"||S==="start"?v.jsxs(d.Fragment,{children:[L,C]}):v.jsxs(d.Fragment,{children:[C,L]}),B]}))}),_e=ue,be=jt(v.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),pe=jt(v.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function fe(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function he(t,e,l,s={},n=()=>{}){const{ease:i=fe,duration:h=300}=s;let p=null;const u=e[t];let S=!1;const B=()=>{S=!0},C=x=>{if(S){n(new Error("Animation cancelled"));return}p===null&&(p=x);const g=Math.min(1,(x-p)/h);if(e[t]=i(g)*(l-u)+u,g>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(C)};return u===l?(n(new Error("Element already at target position")),B):(requestAnimationFrame(C),B)}const ve=["onChange"],Se={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function me(t){const{onChange:e}=t,l=nt(t,ve),s=d.useRef(),n=d.useRef(null),i=()=>{s.current=n.current.offsetHeight-n.current.clientHeight};return re(()=>{const h=kt(()=>{const u=s.current;i(),u!==s.current&&e(s.current)}),p=Ft(n.current);return p.addEventListener("resize",h),()=>{h.clear(),p.removeEventListener("resize",h)}},[e]),d.useEffect(()=>{i(),e(s.current)},[e]),v.jsx("div",b({style:Se,ref:n},l))}function xe(t){return ht("MuiTabScrollButton",t)}const ge=ft("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),ye=ge,Be=["className","slots","slotProps","direction","orientation","disabled"],Ce=t=>{const{classes:e,orientation:l,disabled:s}=t;return St({root:["root",l,s&&"disabled"]},xe,e)},we=A(Nt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.root,l.orientation&&e[l.orientation]]}})(({ownerState:t})=>b({width:40,flexShrink:0,opacity:.8,[`&.${ye.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),Te=d.forwardRef(function(e,l){var s,n;const i=vt({props:e,name:"MuiTabScrollButton"}),{className:h,slots:p={},slotProps:u={},direction:S}=i,B=nt(i,Be),x=Lt().direction==="rtl",g=b({isRtl:x},i),O=Ce(g),I=(s=p.StartScrollButtonIcon)!=null?s:be,y=(n=p.EndScrollButtonIcon)!=null?n:pe,H=lt({elementType:I,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:g}),w=lt({elementType:y,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:g});return v.jsx(we,b({component:"div",className:$(O.root,h),ref:l,role:null,ownerState:g,tabIndex:null},B,{children:S==="left"?v.jsx(I,b({},H)):v.jsx(y,b({},w))}))}),Ie=Te;function Ee(t){return ht("MuiTabs",t)}const Me=ft("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),pt=Me,Re=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],zt=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,Wt=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,ot=(t,e,l)=>{let s=!1,n=l(t,e);for(;n;){if(n===t.firstChild){if(s)return;s=!0}const i=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||i)n=l(t,n);else{n.focus();return}}},ze=t=>{const{vertical:e,fixed:l,hideScrollbar:s,scrollableX:n,scrollableY:i,centered:h,scrollButtonsHideMobile:p,classes:u}=t;return St({root:["root",e&&"vertical"],scroller:["scroller",l&&"fixed",s&&"hideScrollbar",n&&"scrollableX",i&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",p&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[s&&"hideScrollbar"]},Ee,u)},We=A("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[{[`& .${pt.scrollButtons}`]:e.scrollButtons},{[`& .${pt.scrollButtons}`]:l.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,l.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>b({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${pt.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),Pe=A("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.scroller,l.fixed&&e.fixed,l.hideScrollbar&&e.hideScrollbar,l.scrollableX&&e.scrollableX,l.scrollableY&&e.scrollableY]}})(({ownerState:t})=>b({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),$e=A("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:l}=t;return[e.flexContainer,l.vertical&&e.flexContainerVertical,l.centered&&e.centered]}})(({ownerState:t})=>b({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),Le=A("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>b({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),Ne=A(me)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Pt={},ke=d.forwardRef(function(e,l){const s=vt({props:e,name:"MuiTabs"}),n=Lt(),i=n.direction==="rtl",{"aria-label":h,"aria-labelledby":p,action:u,centered:S=!1,children:B,className:C,component:x="div",allowScrollButtonsMobile:g=!1,indicatorColor:O="primary",onChange:I,orientation:y="horizontal",ScrollButtonComponent:H=Ie,scrollButtons:w="auto",selectionFollowsFocus:st,slots:D={},slotProps:U={},TabIndicatorProps:X={},TabScrollButtonProps:L={},textColor:J="primary",value:_,variant:R="standard",visibleScrollbar:at=!1}=s,Ot=nt(s,Re),E=R==="scrollable",T=y==="vertical",Y=T?"scrollTop":"scrollLeft",Q=T?"top":"left",Z=T?"bottom":"right",it=T?"clientHeight":"clientWidth",V=T?"height":"width",N=b({},s,{component:x,allowScrollButtonsMobile:g,indicatorColor:O,orientation:y,vertical:T,scrollButtons:w,textColor:J,variant:R,visibleScrollbar:at,fixed:!E,hideScrollbar:E&&!at,scrollableX:E&&!T,scrollableY:E&&T,centered:S&&!E,scrollButtonsHideMobile:!g}),W=ze(N),Ht=lt({elementType:D.StartScrollButtonIcon,externalSlotProps:U.startScrollButtonIcon,ownerState:N}),Dt=lt({elementType:D.EndScrollButtonIcon,externalSlotProps:U.endScrollButtonIcon,ownerState:N}),[mt,Xt]=d.useState(!1),[k,xt]=d.useState(Pt),[gt,_t]=d.useState(!1),[yt,Kt]=d.useState(!1),[Bt,Ut]=d.useState(!1),[Ct,Yt]=d.useState({overflow:"hidden",scrollbarWidth:0}),wt=new Map,z=d.useRef(null),F=d.useRef(null),Tt=()=>{const o=z.current;let r;if(o){const a=o.getBoundingClientRect();r={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:ne(o,n.direction),scrollWidth:o.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}let c;if(o&&_!==!1){const a=F.current.children;if(a.length>0){const f=a[wt.get(_)];c=f?f.getBoundingClientRect():null}}return{tabsMeta:r,tabMeta:c}},q=bt(()=>{const{tabsMeta:o,tabMeta:r}=Tt();let c=0,a;if(T)a="top",r&&o&&(c=r.top-o.top+o.scrollTop);else if(a=i?"right":"left",r&&o){const m=i?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;c=(i?-1:1)*(r[a]-o[a]+m)}const f={[a]:c,[V]:r?r[V]:0};if(isNaN(k[a])||isNaN(k[V]))xt(f);else{const m=Math.abs(k[a]-f[a]),M=Math.abs(k[V]-f[V]);(m>=1||M>=1)&&xt(f)}}),ct=(o,{animation:r=!0}={})=>{r?he(Y,z.current,o,{duration:n.transitions.duration.standard}):z.current[Y]=o},It=o=>{let r=z.current[Y];T?r+=o:(r+=o*(i?-1:1),r*=i&&At()==="reverse"?-1:1),ct(r)},Et=()=>{const o=z.current[it];let r=0;const c=Array.from(F.current.children);for(let a=0;a<c.length;a+=1){const f=c[a];if(r+f[it]>o){a===0&&(r=o);break}r+=f[it]}return r},Vt=()=>{It(-1*Et())},qt=()=>{It(Et())},Gt=d.useCallback(o=>{Yt({overflow:null,scrollbarWidth:o})},[]),Jt=()=>{const o={};o.scrollbarSizeListener=E?v.jsx(Ne,{onChange:Gt,className:$(W.scrollableX,W.hideScrollbar)}):null;const c=E&&(w==="auto"&&(gt||yt)||w===!0);return o.scrollButtonStart=c?v.jsx(H,b({slots:{StartScrollButtonIcon:D.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:Ht},orientation:y,direction:i?"right":"left",onClick:Vt,disabled:!gt},L,{className:$(W.scrollButtons,L.className)})):null,o.scrollButtonEnd=c?v.jsx(H,b({slots:{EndScrollButtonIcon:D.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Dt},orientation:y,direction:i?"left":"right",onClick:qt,disabled:!yt},L,{className:$(W.scrollButtons,L.className)})):null,o},Mt=bt(o=>{const{tabsMeta:r,tabMeta:c}=Tt();if(!(!c||!r)){if(c[Q]<r[Q]){const a=r[Y]+(c[Q]-r[Q]);ct(a,{animation:o})}else if(c[Z]>r[Z]){const a=r[Y]+(c[Z]-r[Z]);ct(a,{animation:o})}}}),tt=bt(()=>{E&&w!==!1&&Ut(!Bt)});d.useEffect(()=>{const o=kt(()=>{z.current&&q()});let r;const c=m=>{m.forEach(M=>{M.removedNodes.forEach(G=>{var P;(P=r)==null||P.unobserve(G)}),M.addedNodes.forEach(G=>{var P;(P=r)==null||P.observe(G)})}),o(),tt()},a=Ft(z.current);a.addEventListener("resize",o);let f;return typeof ResizeObserver<"u"&&(r=new ResizeObserver(o),Array.from(F.current.children).forEach(m=>{r.observe(m)})),typeof MutationObserver<"u"&&(f=new MutationObserver(c),f.observe(F.current,{childList:!0})),()=>{var m,M;o.clear(),a.removeEventListener("resize",o),(m=f)==null||m.disconnect(),(M=r)==null||M.disconnect()}},[q,tt]),d.useEffect(()=>{const o=Array.from(F.current.children),r=o.length;if(typeof IntersectionObserver<"u"&&r>0&&E&&w!==!1){const c=o[0],a=o[r-1],f={root:z.current,threshold:.99},m=ut=>{_t(!ut[0].isIntersecting)},M=new IntersectionObserver(m,f);M.observe(c);const G=ut=>{Kt(!ut[0].isIntersecting)},P=new IntersectionObserver(G,f);return P.observe(a),()=>{M.disconnect(),P.disconnect()}}},[E,w,Bt,B==null?void 0:B.length]),d.useEffect(()=>{Xt(!0)},[]),d.useEffect(()=>{q()}),d.useEffect(()=>{Mt(Pt!==k)},[Mt,k]),d.useImperativeHandle(u,()=>({updateIndicator:q,updateScrollButtons:tt}),[q,tt]);const Rt=v.jsx(Le,b({},X,{className:$(W.indicator,X.className),ownerState:N,style:b({},k,X.style)}));let et=0;const Qt=d.Children.map(B,o=>{if(!d.isValidElement(o))return null;const r=o.props.value===void 0?et:o.props.value;wt.set(r,et);const c=r===_;return et+=1,d.cloneElement(o,b({fullWidth:R==="fullWidth",indicator:c&&!mt&&Rt,selected:c,selectionFollowsFocus:st,onChange:I,textColor:J,value:r},et===1&&_===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),Zt=o=>{const r=F.current,c=le(r).activeElement;if(c.getAttribute("role")!=="tab")return;let f=y==="horizontal"?"ArrowLeft":"ArrowUp",m=y==="horizontal"?"ArrowRight":"ArrowDown";switch(y==="horizontal"&&i&&(f="ArrowRight",m="ArrowLeft"),o.key){case f:o.preventDefault(),ot(r,c,Wt);break;case m:o.preventDefault(),ot(r,c,zt);break;case"Home":o.preventDefault(),ot(r,null,zt);break;case"End":o.preventDefault(),ot(r,null,Wt);break}},dt=Jt();return v.jsxs(We,b({className:$(W.root,C),ownerState:N,ref:l,as:x},Ot,{children:[dt.scrollButtonStart,dt.scrollbarSizeListener,v.jsxs(Pe,{className:W.scroller,ownerState:N,style:{overflow:Ct.overflow,[T?`margin${i?"Left":"Right"}`:"marginBottom"]:at?void 0:-Ct.scrollbarWidth},ref:z,children:[v.jsx($e,{"aria-label":h,"aria-labelledby":p,"aria-orientation":y==="vertical"?"vertical":null,className:W.flexContainer,ownerState:N,onKeyDown:Zt,ref:F,role:"tablist",children:Qt}),mt&&Rt]}),dt.scrollButtonEnd]}))}),Ke=ke,Fe=({kind:t,shape:e})=>{switch(t){case"small":return rt`
        padding: 4px 8px;
        border-radius: ${e==="rounded"?"16px":"8px"};
        height: 32px;
      `;case"big":return rt`
        padding: 16px 24px;
        border-radius: ${e==="rounded"?"24px":"8px"};
        height: 48px;
      `;default:return rt`
        padding: 8px 16px;
        border-radius: ${e==="rounded"?"32px":"8px"};
        height: 64px;
      `}},je=({kind:t})=>{switch(t){case"small":return"regularBold";case"big":return"mediumBold";default:return"regularBold"}},Ae=te(ee).attrs({align:"center",direction:"row",justify:"center"})`
  border: none;
  cursor: pointer;
  pointer-events: auto;

  ${Fe}

  &:hover {
    opacity: ${({disabled:t})=>t?.5:.9};
  }

  ${({disabled:t})=>t&&rt`
      opacity: 0.5;
      pointer-events: none;
    `}
`,Ue=({background:t="primaryButton",children:e,className:l="button",startIcon:s,endIcon:n,disabled:i,id:h,kind:p="regular",onClick:u,onPointerDown:S,shape:B="squared",textColor:C="white",type:x})=>v.jsxs(Ae,{as:"button",background:t,className:l,disabled:i,id:h,kind:p,onClick:u,onPointerDown:S,shape:B,type:x,children:[s&&s,v.jsx(oe,{color:C,kind:je({kind:p}),children:e}),n&&n]});export{Ue as B,Ke as T,_e as a};
