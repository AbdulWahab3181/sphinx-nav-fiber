import{r as n,j as t,l as B,s as _,c as y,T as D,F as f,ai as F}from"./index-2a9d3beb.js";import{B as I}from"./index-5c9cd044.js";import{u as C}from"./index-82f4c095.js";import{j as N,az as w,k as R,H as z,F as k,C as b,B as P,l as M}from"./react-toastify.esm-07017734.js";import{n as v}from"./toastMessage-b961f51d.js";import{A}from"./index-09a9a174.js";import{O as H}from"./constants-84edb5fc.js";import{A as U}from"./index-bb30e745.js";import"./index.esm-7c2c6137.js";import"./index-69eec19b.js";import"./Popover-dabdecb4.js";import"./useSlotProps-28bca2ab.js";import"./Select-cbc0a71e.js";import"./Stack-5524f850.js";import"./Popper-449923bf.js";const G=({selectedType:a,setSelectedType:d})=>{const[c,s]=n.useState([]);n.useEffect(()=>{(async()=>{try{const{data:p}=await N();s(p.edge_types)}catch(p){console.warn(p)}})()},[s]);const r=o=>({label:o,value:o}),m=o=>{d((o==null?void 0:o.value)||"")};return t.jsx(A,{onSelect:m,options:c.map(r),selectedValue:a?r(a):null})},V=({onSelect:a,selectedValue:d})=>{const[c,s]=n.useState([]),[r,m]=n.useState(!1),o=async e=>{const h={muted:"False",sort_by:U,search:e,skip:"0",limit:"1000"};m(!0);try{const u=await w(h.search);s(u.data)}catch{s([])}finally{m(!1)}},p=n.useMemo(()=>B.debounce(o,300),[]),i=e=>{if(!e){s([]);return}e.length>2&&p(e)},S=e=>{const h=e?c.find(u=>u.ref_id===e.value):null;a(h||null)},l=e=>({label:e.search_value,value:e.ref_id,type:e.node_type}),j=e=>e.map(l);return t.jsx(A,{handleInputChange:i,isLoading:r,onSelect:S,options:j(c)||H,selectedValue:d?l(d):null})},Y=({from:a,onSelect:d,selectedType:c,setSelectedType:s,selectedToNode:r})=>t.jsxs(f,{mb:20,children:[t.jsx(f,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(f,{align:"center",direction:"row",children:t.jsx($,{children:"Add edge"})})}),t.jsxs(W,{mb:12,children:[t.jsxs(T,{children:[t.jsx("div",{className:"label",children:"From"}),t.jsx("div",{children:a})]}),t.jsxs(T,{children:[t.jsx("div",{className:"label",children:"Type"}),t.jsx(G,{selectedType:c,setSelectedType:s})]}),t.jsxs(T,{children:[t.jsx("div",{className:"label",children:"To"}),t.jsx(V,{onSelect:d,selectedValue:r})]})]})]}),$=_(D)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,W=_(f).attrs({align:"stretch",direction:"column",justify:"flex-start"})`
  color: ${y.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${y.GRAY3};
  }
`,T=_(f)`
  flex: 1 1 100%;
  min-height: unset;
  margin-bottom: 8px;
`,q="Link sucessfully created!",J=()=>{const{close:a}=C("addEdgeToNode"),d=R({mode:"onChange"}),[c,s]=n.useState(!1),[r,m]=n.useState(""),[o,p]=n.useState(!1),[i,S]=n.useState(null),[l,j]=n.useState(),e=z();n.useEffect(()=>{(async()=>{if(e){p(!0);try{if(e.type==="topic"){const{data:g}=await w(e==null?void 0:e.name,{exact_match:"true",node_type:"topic"}),E=g.find(O=>O.node_type==="topic");j(E)}}catch(g){console.log(g)}finally{p(!1)}}})()},[e]);const h=()=>{a()},u=async()=>{if(!(!i||!l)){s(!0);try{const x=l||i;await M({from:x.ref_id,to:i==null?void 0:i.ref_id,relationship:r});const{ref_id:g}=x,{ref_id:E}=i;console.log(g,E),v(q,"success"),h()}catch(x){console.warn(x),v(F)}finally{s(!1)}}},L=c||!i||!r;return t.jsxs(k,{...d,children:[o?t.jsx(f,{align:"center",my:24,children:t.jsx(b,{color:y.BLUE_PRESS_STATE,size:24})}):t.jsx(Y,{from:l?l==null?void 0:l.search_value:(e==null?void 0:e.name)||"",onSelect:S,selectedToNode:i,selectedType:r,setSelectedType:m}),t.jsxs(P,{color:"secondary",disabled:L,onClick:u,size:"large",variant:"contained",children:["Confirm",c&&t.jsx(b,{color:y.BLUE_PRESS_STATE,size:10})]})]})},pe=()=>{const{close:a}=C("addEdgeToNode");return t.jsx(I,{id:"addEdgeToNode",kind:"large",onClose:a,preventOutsideClose:!0,children:t.jsx(J,{})})};export{pe as AddNodeEdgeModal};
