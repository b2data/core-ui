import{r as l}from"./index-DQLiH3RP.js";import{g as Po,c as ho}from"./index-PKGOc6w3.js";import{i as go}from"./isHostComponent-DVu5iVWx.js";import{g as vo}from"./generateUtilityClasses-KoSbOHxf.js";import{u as C}from"./useSlot-BXYsnuZK.js";import{j as T}from"./jsx-runtime-D_zvdyIk.js";import{u as yo}from"./DefaultPropsProvider-CbX9bpU7.js";import{o as X}from"./ownerDocument-DW-IO8s5.js";import{o as Y}from"./ownerWindow-HkKU3E4x.js";import{d as wo}from"./debounce-Be36O1Ab.js";import{G as bo}from"./Grow-4JKDUPo6.js";import{m as xo}from"./mergeSlotProps-DjPLcKkk.js";import{s as Q,c as Eo}from"./styled-BJ0TTCEB.js";import{M as So}from"./Modal-DHBtNlyn.js";import{P as Co}from"./Paper-1rqY9H9j.js";function To(e){return Po("MuiPopover",e)}vo("MuiPopover",["root","paper"]);function q(e,t){let s=0;return typeof t=="number"?s=t:t==="center"?s=e.height/2:t==="bottom"&&(s=e.height),s}function J(e,t){let s=0;return typeof t=="number"?s=t:t==="center"?s=e.width/2:t==="right"&&(s=e.width),s}function K(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function w(e){return typeof e=="function"?e():e}const Ro=e=>{const{classes:t}=e;return Eo({root:["root"],paper:["paper"]},To,t)},Oo=Q(So,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),ko=Q(Co,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Vo=l.forwardRef(function(t,s){const R=yo({props:t,name:"MuiPopover"}),{action:Z,anchorEl:p,anchorOrigin:d={vertical:"top",horizontal:"left"},anchorPosition:O,anchorReference:P="anchorEl",children:_,className:oo,container:to,elevation:k=8,marginThreshold:i=16,open:f,PaperProps:eo={},slots:z={},slotProps:y={},transformOrigin:h={vertical:"top",horizontal:"left"},TransitionComponent:M,transitionDuration:b="auto",TransitionProps:W={},disableScrollLock:x=!1,...ro}=R,E=l.useRef(),g={...R,anchorOrigin:d,anchorReference:P,elevation:k,marginThreshold:i,transformOrigin:h,TransitionComponent:M,transitionDuration:b,TransitionProps:W},j=Ro(g),D=l.useCallback(()=>{if(P==="anchorPosition")return O;const o=w(p),r=(o&&o.nodeType===1?o:X(E.current).body).getBoundingClientRect();return{top:r.top+q(r,d.vertical),left:r.left+J(r,d.horizontal)}},[p,d.horizontal,d.vertical,O,P]),H=l.useCallback(o=>({vertical:q(o,h.vertical),horizontal:J(o,h.horizontal)}),[h.horizontal,h.vertical]),L=l.useCallback(o=>{const n={width:o.offsetWidth,height:o.offsetHeight},r=H(n);if(P==="none")return{top:null,left:null,transformOrigin:K(r)};const v=D();let u=v.top-r.vertical,m=v.left-r.horizontal;const $=u+n.height,G=m+n.width,I=Y(w(p)),B=I.innerHeight-i,V=I.innerWidth-i;if(i!==null&&u<i){const a=u-i;u-=a,r.vertical+=a}else if(i!==null&&$>B){const a=$-B;u-=a,r.vertical+=a}if(i!==null&&m<i){const a=m-i;m-=a,r.horizontal+=a}else if(G>V){const a=G-V;m-=a,r.horizontal+=a}return{top:`${Math.round(u)}px`,left:`${Math.round(m)}px`,transformOrigin:K(r)}},[p,P,D,H,i]),[no,A]=l.useState(f),c=l.useCallback(()=>{const o=E.current;if(!o)return;const n=L(o);n.top!==null&&o.style.setProperty("top",n.top),n.left!==null&&(o.style.left=n.left),o.style.transformOrigin=n.transformOrigin,A(!0)},[L]);l.useEffect(()=>(x&&window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)),[p,x,c]);const so=()=>{c()},io=()=>{A(!1)};l.useEffect(()=>{f&&c()}),l.useImperativeHandle(Z,()=>f?{updatePosition:()=>{c()}}:null,[f,c]),l.useEffect(()=>{if(!f)return;const o=wo(()=>{c()}),n=Y(w(p));return n.addEventListener("resize",o),()=>{o.clear(),n.removeEventListener("resize",o)}},[p,f,c]);let F=b;const S={slots:{transition:M,...z},slotProps:{transition:W,paper:eo,...y}},[U,ao]=C("transition",{elementType:bo,externalForwardedProps:S,ownerState:g,getSlotProps:o=>({...o,onEntering:(n,r)=>{var v;(v=o.onEntering)==null||v.call(o,n,r),so()},onExited:n=>{var r;(r=o.onExited)==null||r.call(o,n),io()}}),additionalProps:{appear:!0,in:f}});b==="auto"&&!U.muiSupportAuto&&(F=void 0);const lo=to||(p?X(w(p)).body:void 0),[N,{slots:po,slotProps:co,...fo}]=C("root",{ref:s,elementType:Oo,externalForwardedProps:{...S,...ro},shouldForwardComponentProp:!0,additionalProps:{slots:{backdrop:z.backdrop},slotProps:{backdrop:xo(typeof y.backdrop=="function"?y.backdrop(g):y.backdrop,{invisible:!0})},container:lo,open:f},ownerState:g,className:ho(j.root,oo)}),[uo,mo]=C("paper",{ref:E,className:j.paper,elementType:ko,externalForwardedProps:S,shouldForwardComponentProp:!0,additionalProps:{elevation:k,style:no?void 0:{opacity:0}},ownerState:g});return T.jsx(N,{...fo,...!go(N)&&{slots:po,slotProps:co,disableScrollLock:x},children:T.jsx(U,{...ao,timeout:F,children:T.jsx(uo,{...mo,children:_})})})});export{Vo as P,ko as a};
