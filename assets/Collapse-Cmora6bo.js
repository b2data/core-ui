import{r as y}from"./index-DQLiH3RP.js";import{g as _,c as tt}from"./index-PKGOc6w3.js";import{u as et}from"./useTheme-DNsyaSfM.js";import{j as E}from"./jsx-runtime-D_zvdyIk.js";import{s as S,c as nt}from"./styled-BJ0TTCEB.js";import{m as it}from"./memoTheme-BuPib-dq.js";import{f as ot}from"./identifier-DtIXL9n7.js";import{T as rt,g as P}from"./utils-D-OqLXMy.js";import{g as st}from"./generateUtilityClasses-KoSbOHxf.js";import{u as at}from"./DefaultPropsProvider-CbX9bpU7.js";import{u as lt}from"./useTimeout-fSo4lzeS.js";import{u as pt}from"./useForkRef-8i08ZgmQ.js";function ct(n){return _("MuiCollapse",n)}st("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const dt=n=>{const{orientation:e,classes:r}=n,m={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return nt(m,ct,r)},ut=S("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:r}=n;return[e.root,e[r.orientation],r.state==="entered"&&e.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&e.hidden]}})(it(({theme:n})=>({height:0,overflow:"hidden",transition:n.transitions.create("height"),variants:[{props:{orientation:"horizontal"},style:{height:"auto",width:0,transition:n.transitions.create("width")}},{props:{state:"entered"},style:{height:"auto",overflow:"visible"}},{props:{state:"entered",orientation:"horizontal"},style:{width:"auto"}},{props:({ownerState:e})=>e.state==="exited"&&!e.in&&e.collapsedSize==="0px",style:{visibility:"hidden"}}]}))),mt=S("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(n,e)=>e.wrapper})({display:"flex",width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),ht=S("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(n,e)=>e.wrapperInner})({width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),U=y.forwardRef(function(e,r){const m=at({props:e,name:"MuiCollapse"}),{addEndListener:R,children:A,className:L,collapsedSize:h="0px",component:b,easing:T,in:D,onEnter:$,onEntered:W,onEntering:j,onExit:I,onExited:O,onExiting:M,orientation:F="vertical",style:C,timeout:s=ot.standard,TransitionComponent:k=rt,...q}=m,f={...m,orientation:F,collapsedSize:h},p=dt(f),H=et(),B=lt(),a=y.useRef(null),v=y.useRef(),g=typeof h=="number"?`${h}px`:h,c=F==="horizontal",d=c?"width":"height",w=y.useRef(null),G=pt(r,w),l=t=>i=>{if(t){const o=w.current;i===void 0?t(o):t(o,i)}},z=()=>a.current?a.current[c?"clientWidth":"clientHeight"]:0,J=l((t,i)=>{a.current&&c&&(a.current.style.position="absolute"),t.style[d]=g,$&&$(t,i)}),K=l((t,i)=>{const o=z();a.current&&c&&(a.current.style.position="");const{duration:u,easing:x}=P({style:C,timeout:s,easing:T},{mode:"enter"});if(s==="auto"){const N=H.transitions.getAutoHeightDuration(o);t.style.transitionDuration=`${N}ms`,v.current=N}else t.style.transitionDuration=typeof u=="string"?u:`${u}ms`;t.style[d]=`${o}px`,t.style.transitionTimingFunction=x,j&&j(t,i)}),Q=l((t,i)=>{t.style[d]="auto",W&&W(t,i)}),V=l(t=>{t.style[d]=`${z()}px`,I&&I(t)}),X=l(O),Y=l(t=>{const i=z(),{duration:o,easing:u}=P({style:C,timeout:s,easing:T},{mode:"exit"});if(s==="auto"){const x=H.transitions.getAutoHeightDuration(i);t.style.transitionDuration=`${x}ms`,v.current=x}else t.style.transitionDuration=typeof o=="string"?o:`${o}ms`;t.style[d]=g,t.style.transitionTimingFunction=u,M&&M(t)}),Z=t=>{s==="auto"&&B.start(v.current||0,t),R&&R(w.current,t)};return E.jsx(k,{in:D,onEnter:J,onEntered:Q,onEntering:K,onExit:V,onExited:X,onExiting:Y,addEndListener:Z,nodeRef:w,timeout:s==="auto"?null:s,...q,children:(t,{ownerState:i,...o})=>E.jsx(ut,{as:b,className:tt(p.root,L,{entered:p.entered,exited:!D&&g==="0px"&&p.hidden}[t]),style:{[c?"minWidth":"minHeight"]:g,...C},ref:G,ownerState:{...f,state:t},...o,children:E.jsx(mt,{ownerState:{...f,state:t},className:p.wrapper,ref:a,children:E.jsx(ht,{ownerState:{...f,state:t},className:p.wrapperInner,children:A})})})})});U&&(U.muiSupportAuto=!0);export{U as C};
