import{r as m}from"./index-d7050062.js";var g={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function h(e){if(typeof e=="number")return{value:e,unit:"px"};var t,a=(e.match(/^[0-9.]*/)||"").toString();a.includes(".")?t=parseFloat(a):t=parseInt(a,10);var r=(e.match(/[^0-9]*$/)||"").toString();return g[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function d(e){var t=h(e);return"".concat(t.value).concat(t.unit)}var b=function(e,t,a){var r="react-spinners-".concat(e,"-").concat(a);if(typeof window>"u"||!window.document)return r;var n=document.createElement("style");document.head.appendChild(n);var o=n.sheet,l=`
    @keyframes `.concat(r,` {
      `).concat(t,`
    }
  `);return o&&o.insertRule(l,0),r},i=globalThis&&globalThis.__assign||function(){return i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)},y=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},O=b("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function x(e){var t=e.loading,a=t===void 0?!0:t,r=e.color,n=r===void 0?"#000000":r,o=e.speedMultiplier,l=o===void 0?1:o,c=e.cssOverride,p=c===void 0?{}:c,u=e.size,s=u===void 0?35:u,v=y(e,["loading","color","speedMultiplier","cssOverride","size"]),f=i({background:"transparent !important",width:d(s),height:d(s),borderRadius:"100%",border:"2px solid",borderTopColor:n,borderBottomColor:"transparent",borderLeftColor:n,borderRightColor:n,display:"inline-block",animation:"".concat(O," ").concat(.75/l,"s 0s infinite linear"),animationFillMode:"both"},p);return a?m.createElement("span",i({style:f},v)):null}export{x as C,d as a,b as c};
