import{s as r,F as n,T as g,j as e,b as w,c,r as A,u as B}from"./index-b71c035e.js";import{B as v}from"./index-813b6c7e.js";import{u as F}from"./index-386c76de.js";import{u as M,G as $,l as C,b,r as D,F as G}from"./react-toastify.esm-657845dc.js";import{B as f,T as k,a as R}from"./index-3e761c7f.js";import{T as x}from"./index-5d5ba667.js";import{C as L}from"./ClipLoader-ee4274d7.js";import"./useSlotProps-9100e6af.js";import"./index.esm-18eb1b53.js";import"./InfoIcon-1252b44d.js";const P=({onClose:s})=>{const[a]=M(t=>[t.graphStyle]),i=()=>{localStorage.setItem("graphStyle",a),s()};return e.jsxs(V,{direction:"column",children:[e.jsx(z,{children:"Default graph view:"}),e.jsx($,{}),e.jsx(n,{mt:308,children:e.jsx(f,{kind:"big",onClick:i,children:"Save changes"})})]})},V=r(n)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,z=r(g)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,W=({initialValues:s})=>{const a=C({defaultValues:s,mode:"onSubmit"}),{isSubmitting:i}=a.formState,t=b(l=>l.setAppMetaData),d=a.handleSubmit(async l=>{try{(await D(l)).status==="success"&&t(l)}catch(p){console.warn(p)}});return e.jsx(G,{...a,children:e.jsx(E,{id:"add-node-form",onSubmit:d,children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...w}})}),e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(n,{mt:210,py:24,children:i?e.jsx(K,{children:e.jsx(L,{color:c.white,size:20})}):e.jsx(f,{disabled:i,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},K=r(n).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,E=r.form`
  padding: 36px;
`,u=s=>{const{children:a,value:i,index:t,...d}=s;return i===t?e.jsx(U,{"aria-labelledby":`simple-tab-${t}`,hidden:i!==t,id:`simple-tabpanel-${t}`,role:"tabpanel",...d,children:a}):null};function h(s){return{id:`simple-tab-${s}`,"aria-controls":`simple-tabpanel-${s}`}}const H=({onClose:s})=>{const[a,i]=A.useState(0),[t,d]=B(o=>[o.isAdmin,o.setPubKey,o.pubKey]),l=b(o=>o.appMetaData),p=()=>t?"Admin Settings":"Settings",j=({children:o})=>e.jsxs(q,{children:[e.jsxs(n,{direction:"row",pt:3,children:[e.jsx(J,{children:p()}),y()]}),o]}),y=()=>!d||t?null:e.jsx(e.Fragment,{}),S=(o,T)=>{i(T)};return e.jsxs(Y,{direction:"column",children:[e.jsx(j,{children:e.jsxs(I,{"aria-label":"settings tabs",onChange:S,value:a,children:[t&&e.jsx(m,{disableRipple:!0,label:"General",...h(0)}),e.jsx(m,{color:c.white,disableRipple:!0,label:"Appearance",...h(1)})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(u,{index:0,value:a,children:e.jsx(W,{initialValues:l})})}),e.jsx(u,{index:t?1:0,value:a,children:e.jsx(P,{onClose:s})})]})},I=r(k)`
  && {
    .MuiTabs-indicator {
      background: ${c.primaryBlue};
    }
  }
`,q=r(n)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,m=r(R)`
  && {
    padding: 30px 0 24px;
    color: ${c.GRAY6};
    margin-left: 36px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${c.white};
    }
  }
`,U=r(n)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
`,Y=r(n)`
  min-height: 0;
  flex: 1;
`,J=r(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,ne=()=>{const{close:s}=F("settings");return e.jsx(v,{background:"BG1",id:"settings",noWrap:!0,onClose:s,children:e.jsx(H,{onClose:s})})};export{ne as SettingsModal};