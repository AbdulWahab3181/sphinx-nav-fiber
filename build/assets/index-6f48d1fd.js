import{j as e,o as c,q as t,F as i,O as y,r as l,p as b,B as S,y as M,bk as $,bl as D}from"./index-e6d6ccb0.js";import{B as R}from"./index-6a2454b4.js";import{S as I}from"./Skeleton-d64607e0.js";import{C as z}from"./ClipLoader-21493f19.js";import{B as j}from"./index-63408349.js";const A=d=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 60 52",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12.849 16.2461L31.5592 5.44376L50.2694 16.2461V37.8508L31.5592 48.6531L12.849 37.8508V16.2461Z",stroke:"#6B7A8D",fill:"currentColor","stroke-width":"2"}),e.jsx("path",{d:"M50.7383 16.0509L31.559 27.047M31.559 27.047L12.3798 16.0509M31.559 27.047L31.559 49.2949",stroke:"#6B7A8D","stroke-width":"2"}),e.jsx("path",{d:"M7.44052 9.03136C5.80715 8.08833 3.71857 8.64797 2.77554 10.2813C1.83251 11.9147 2.39215 14.0033 4.02552 14.9463L52.5595 42.9674C54.1929 43.9104 56.2814 43.3508 57.2245 41.7174L55.4924 40.7174L57.2245 41.7174C58.1675 40.0841 57.6079 37.9955 55.9745 37.0525L7.44052 9.03136Z",fill:"currentColor",stroke:"#23252F","stroke-width":"4","stroke-linecap":"round"})]}),E=({nodeName:d})=>e.jsx(i,{children:e.jsxs(i,{align:"center",direction:"column",justify:"space-between",children:[e.jsx(G,{children:e.jsx(A,{})}),e.jsxs(T,{children:["Are you sure you want to delete ",d||"this item","?"]})]})}),T=c(i)`
  color: ${t.white};
  font-family: 'Barlow';
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  padding: 0 20px;
  width: 100%;
  word-wrap: break-word;
`,G=c(i)`
  justify-content: center;
  align-items: center;
  font-size: 52px;
  color: #23252f;
  margin-bottom: 20px;

  path:nth-child(3) {
    color: #6b7a8d;
  }
`,F=()=>{const{close:d}=y("removeNode"),{close:u}=y("editNodeName"),[x,p]=l.useState(!1),[g]=b(r=>[r.setSelectedNode]),[k]=S(r=>[r.removeNode]),[v,w]=l.useState(!1),[n,L]=l.useState(),[a,C]=l.useState(),o=M(),h=()=>{d()};l.useEffect(()=>{(async()=>{if(o){w(!0);try{if(o.type==="topic"){const{data:s}=await $({search:o==null?void 0:o.name}),m=s.find(f=>f.name===o.name);C(m)}else L(o)}catch(s){console.log(s)}finally{w(!1)}}})()},[o]);const B=async()=>{p(!0);try{g(null),h(),u()}catch(r){console.warn(r)}finally{p(!1)}},N=async()=>{let r="";const s=n||a;if(!s)return;s!=null&&s.ref_id&&(r=s.ref_id),p(!0);const m=o==null?void 0:o.ref_id;try{await D(r),k(m),g(null),h(),u()}catch(f){console.warn(f)}finally{p(!1)}};return e.jsxs(W,{children:[e.jsx(E,{nodeName:(n==null?void 0:n.name)||(a==null?void 0:a.name)||""}),v?e.jsx(I,{}):e.jsxs(i,{direction:"row",mt:34,children:[e.jsx(_,{color:"secondary",onClick:h,size:"large",style:{flex:1,marginRight:20},variant:"contained",children:"Cancel"}),e.jsxs(O,{color:"secondary",disabled:x||!n&&!a,onClick:n||a?N:B,size:"large",style:{flex:1},variant:"contained",children:["Delete",x&&e.jsx(V,{children:e.jsx(z,{color:t.lightGray,size:12})})]})]})]})},W=c(i)`
  padding: 4px 12px 16px;
`,_=c(j)`
  && {
    background: ${t.white};
    color: ${t.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${t.white};
      color: ${t.BG2};
    }
  }
`,O=c(j)`
  && {
    color: ${t.white};
    background-color: ${t.primaryRed};

    &:hover,
    &:active,
    &:focus {
      color: ${t.white};
      background-color: ${t.primaryRed};
    }
  }
`,V=c.span`
  margin-top: 2px;
`,P=()=>e.jsx(R,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(F,{})});export{P as RemoveNodeModal};
