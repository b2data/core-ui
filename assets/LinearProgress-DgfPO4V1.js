import{j as n}from"./jsx-runtime-DZlKWc7q.js";import{r as j}from"./index-3dRrDZpt.js";import{B as $}from"./Box-B4yDLkDm.js";import{_ as M,a as l,h as t,i as h,d as L,k as y}from"./identifier-DOope7UP.js";import{g as w,c as D}from"./generateUtilityClass-CXPxvQOg.js";import{u as z}from"./index-xeTtEoR5.js";import{s as p,c as U}from"./styled-Mw1EHJJT.js";import{g as S}from"./generateUtilityClasses-CkJG6r2x.js";import{u as E}from"./DefaultPropsProvider-BUlghEOV.js";import{T as O}from"./Typography-I7qryP9c.js";function A(r){return w("MuiLinearProgress",r)}S("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const K=["className","color","value","valueBuffer","variant"];let u=r=>r,_,k,B,q,I,R;const g=4,X=y(_||(_=u`
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
`)),W=y(k||(k=u`
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
`)),F=y(B||(B=u`
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
`)),G=r=>{const{classes:e,variant:a,color:o}=r,b={root:["root",`color${t(o)}`,a],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar",`barColor${t(o)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${t(o)}`,a==="buffer"&&`color${t(o)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return U(b,A,e)},x=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?L.lighten(r.palette[e].main,.62):L.darken(r.palette[e].main,.5),H=p("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${t(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>l({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:x(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),J=p("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${t(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=x(e,r.color);return l({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},h(q||(q=u`
    animation: ${0} 3s infinite linear;
  `),F)),Q=p("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${g}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${g}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&h(I||(I=u`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),X)),Y=p("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:x(e,r.color),transition:`transform .${g}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&h(R||(R=u`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),W)),Z=j.forwardRef(function(e,a){const o=E({props:e,name:"MuiLinearProgress"}),{className:b,color:N="primary",value:v,valueBuffer:C,variant:s="indeterminate"}=o,V=M(o,K),d=l({},o,{color:N,variant:s}),f=G(d),P=z(),c={},m={bar1:{},bar2:{}};if((s==="determinate"||s==="buffer")&&v!==void 0){c["aria-valuenow"]=Math.round(v),c["aria-valuemin"]=0,c["aria-valuemax"]=100;let i=v-100;P&&(i=-i),m.bar1.transform=`translateX(${i}%)`}if(s==="buffer"&&C!==void 0){let i=(C||0)-100;P&&(i=-i),m.bar2.transform=`translateX(${i}%)`}return n.jsxs(H,l({className:D(f.root,b),ownerState:d,role:"progressbar"},c,{ref:a},V,{children:[s==="buffer"?n.jsx(J,{className:f.dashed,ownerState:d}):null,n.jsx(Q,{className:f.bar1,ownerState:d,style:m.bar1}),s==="determinate"?null:n.jsx(Y,{className:f.bar2,ownerState:d,style:m.bar2})]}))}),T=({label:r,wrapSx:e,...a})=>n.jsxs($,{sx:{display:"flex",alignItems:"center",...e},children:[n.jsx(Z,{...a}),r&&n.jsx($,{sx:{ml:2},children:j.isValidElement(r)?r:n.jsx(O,{variant:"body2",color:"text.secondary",sx:{minWidth:35},children:r})})]});try{T.displayName="LinearProgress",T.__docgenInfo={description:"",displayName:"LinearProgress",props:{color:{defaultValue:{value:"primary"},description:"The color of the component.",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'}]}},variant:{defaultValue:{value:"indeterminate"},description:`The variant to use.
Use indeterminate when there is no progress value.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"indeterminate"'},{value:'"determinate"'},{value:'"buffer"'}]}},label:{defaultValue:null,description:"Show label inside progress",name:"label",required:!1,type:{name:"ReactNode"}},wrapSx:{defaultValue:null,description:"SX properties for wrap component",name:"wrapSx",required:!1,type:{name:"SxProps<Theme>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},value:{defaultValue:null,description:`The value of the progress indicator for the determinate and buffer variants.
Value between 0 and 100.`,name:"value",required:!1,type:{name:"number"}},valueBuffer:{defaultValue:null,description:`The value for the buffer variant.
Value between 0 and 100.`,name:"valueBuffer",required:!1,type:{name:"number"}}}}}catch{}export{T as L};
