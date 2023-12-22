import{j as n}from"./jsx-runtime-4ca860c5.js";import{r as j}from"./index-61bf1805.js";import{B as L}from"./Box-db9d02d2.js";import{c as o,_ as R,l as V,b as M}from"./createTheme-f7fbaf76.js";import{_ as l}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import{c as S}from"./clsx-63d16a80.js";import{u as z}from"./useTheme-b04d84f2.js";import{g as D,s as p,c as U}from"./styled-3543814b.js";import{u as O}from"./useThemeProps-8e2a0e37.js";import{g as A}from"./generateUtilityClasses-802c53db.js";import{k as h,c as y}from"./emotion-react.browser.esm-13bdab44.js";import{T as E}from"./Typography-65ef5db8.js";function K(r){return D("MuiLinearProgress",r)}A("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const X=["className","color","value","valueBuffer","variant"];let u=r=>r,_,$,k,B,q,T;const g=4,W=h(_||(_=u`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),F=h($||($=u`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),G=h(k||(k=u`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),H=r=>{const{classes:e,variant:a,color:t}=r,b={root:["root",`color${o(t)}`,a],dashed:["dashed",`dashedColor${o(t)}`],bar1:["bar",`barColor${o(t)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${o(t)}`,a==="buffer"&&`color${o(t)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return U(b,K,e)},x=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?V(r.palette[e].main,.62):M(r.palette[e].main,.5),J=p("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${o(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>l({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:x(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),Q=p("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${o(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=x(e,r.color);return l({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},y(B||(B=u`
    animation: ${0} 3s infinite linear;
  `),G)),Y=p("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${o(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${g}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${g}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(q||(q=u`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),W)),Z=p("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${o(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:x(e,r.color),transition:`transform .${g}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(T||(T=u`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),F)),rr=j.forwardRef(function(e,a){const t=O({props:e,name:"MuiLinearProgress"}),{className:b,color:w="primary",value:v,valueBuffer:C,variant:s="indeterminate"}=t,N=R(t,X),d=l({},t,{color:w,variant:s}),f=H(d),P=z(),c={},m={bar1:{},bar2:{}};if((s==="determinate"||s==="buffer")&&v!==void 0){c["aria-valuenow"]=Math.round(v),c["aria-valuemin"]=0,c["aria-valuemax"]=100;let i=v-100;P.direction==="rtl"&&(i=-i),m.bar1.transform=`translateX(${i}%)`}if(s==="buffer"&&C!==void 0){let i=(C||0)-100;P.direction==="rtl"&&(i=-i),m.bar2.transform=`translateX(${i}%)`}return n.jsxs(J,l({className:S(f.root,b),ownerState:d,role:"progressbar"},c,{ref:a},N,{children:[s==="buffer"?n.jsx(Q,{className:f.dashed,ownerState:d}):null,n.jsx(Y,{className:f.bar1,ownerState:d,style:m.bar1}),s==="determinate"?null:n.jsx(Z,{className:f.bar2,ownerState:d,style:m.bar2})]}))}),er=rr,I=({label:r,wrapSx:e,...a})=>n.jsxs(L,{sx:{display:"flex",alignItems:"center",...e},children:[n.jsx(er,{...a}),r&&n.jsx(L,{sx:{ml:2},children:j.isValidElement(r)?r:n.jsx(E,{variant:"body2",color:"text.secondary",sx:{minWidth:35},children:r})})]});try{I.displayName="LinearProgress",I.__docgenInfo={description:"",displayName:"LinearProgress",props:{color:{defaultValue:{value:"primary"},description:"The color of the component.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},variant:{defaultValue:{value:"indeterminate"},description:`The variant to use.
Use indeterminate when there is no progress value.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"determinate"'},{value:'"indeterminate"'},{value:'"buffer"'}]}},label:{defaultValue:null,description:"Show label inside progress",name:"label",required:!1,type:{name:"ReactNode"}},wrapSx:{defaultValue:null,description:"SX properties for wrap component",name:"wrapSx",required:!1,type:{name:"SxProps<Theme>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},value:{defaultValue:null,description:`The value of the progress indicator for the determinate and buffer variants.
Value between 0 and 100.`,name:"value",required:!1,type:{name:"number"}},valueBuffer:{defaultValue:null,description:`The value for the buffer variant.
Value between 0 and 100.`,name:"valueBuffer",required:!1,type:{name:"number"}}}}}catch{}export{I as L};
//# sourceMappingURL=LinearProgress-d803c68d.js.map
