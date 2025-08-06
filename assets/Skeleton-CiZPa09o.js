import{r as v}from"./index-DQLiH3RP.js";import{g as C,c as b}from"./generateUtilityClass-Crd22lsZ.js";import{m as k}from"./memoTheme-6CX_wYOL.js";import{g as w}from"./generateUtilityClasses-C4v8O9Po.js";import{j as x}from"./jsx-runtime-D_zvdyIk.js";import{u as R}from"./DefaultPropsProvider-D7SvoM6x.js";import{s as S,a as $}from"./styled-DnAalvCx.js";import{c as m,k as u}from"./emotion-react.browser.esm-_xrAgkY8.js";import{e as U}from"./createTheme-CpmnfvGf.js";function M(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function A(t){return parseFloat(t)}function X(t){return C("MuiSkeleton",t)}w("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const j=t=>{const{classes:e,variant:a,animation:o,hasChildren:n,width:i,height:r}=t;return $({root:["root",a,o,n&&"withChildren",n&&!i&&"fitContent",n&&!r&&"heightAuto"]},X,e)},s=u`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,l=u`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,B=typeof s!="string"?m`
        animation: ${s} 2s ease-in-out 0.5s infinite;
      `:null,E=typeof l!="string"?m`
        &::after {
          animation: ${l} 2s linear 0.5s infinite;
        }
      `:null,K=S("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(k(({theme:t})=>{const e=M(t.shape.borderRadius)||"px",a=A(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:U(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:o})=>o.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:o})=>o.hasChildren&&!o.width,style:{maxWidth:"fit-content"}},{props:({ownerState:o})=>o.hasChildren&&!o.height,style:{height:"auto"}},{props:{animation:"pulse"},style:B||{animation:`${s} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:E||{"&::after":{animation:`${l} 2s linear 0.5s infinite`}}}]}})),q=v.forwardRef(function(e,a){const o=R({props:e,name:"MuiSkeleton"}),{animation:n="pulse",className:i,component:r="span",height:p,style:c,variant:f="text",width:g,...h}=o,d={...o,animation:n,component:r,variant:f,hasChildren:!!h.children},y=j(d);return x.jsx(K,{as:r,ref:a,className:b(y.root,i),ownerState:d,...h,style:{width:g,height:p,...c}})});export{q as S};
