import{r as y}from"./index-DQLiH3RP.js";import{g as z,c as H}from"./index-PKGOc6w3.js";import{u as j}from"./useSlot-BXYsnuZK.js";import{g as W}from"./generateUtilityClasses-KoSbOHxf.js";import{j as B}from"./jsx-runtime-D_zvdyIk.js";import{u as q}from"./DefaultPropsProvider-CbX9bpU7.js";import{s as A,c as G}from"./styled-BJ0TTCEB.js";import{u as I}from"./useTheme-DNsyaSfM.js";import{T as J,g as F,r as K}from"./utils-D-OqLXMy.js";import{u as O}from"./useForkRef-8i08ZgmQ.js";import{g as Q}from"./getReactElementRef-DW0MqppP.js";const V={entering:{opacity:1},entered:{opacity:1}},X=y.forwardRef(function(n,r){const o=I(),x={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:m,appear:h=!0,children:d,easing:u,in:f,onEnter:g,onEntered:b,onEntering:v,onExit:E,onExited:k,onExiting:C,style:a,timeout:p=x,TransitionComponent:R=J,...T}=n,c=y.useRef(null),P=O(c,Q(d),r),e=t=>s=>{if(t){const l=c.current;s===void 0?t(l):t(l,s)}},w=e(v),S=e((t,s)=>{K(t);const l=F({style:a,timeout:p,easing:u},{mode:"enter"});t.style.webkitTransition=o.transitions.create("opacity",l),t.style.transition=o.transitions.create("opacity",l),g&&g(t,s)}),M=e(b),U=e(C),L=e(t=>{const s=F({style:a,timeout:p,easing:u},{mode:"exit"});t.style.webkitTransition=o.transitions.create("opacity",s),t.style.transition=o.transitions.create("opacity",s),E&&E(t)}),D=e(k),N=t=>{m&&m(c.current,t)};return B.jsx(R,{appear:h,in:f,nodeRef:c,onEnter:S,onEntered:M,onEntering:w,onExit:L,onExited:D,onExiting:U,addEndListener:N,timeout:p,...T,children:(t,{ownerState:s,...l})=>y.cloneElement(d,{style:{opacity:0,visibility:t==="exited"&&!f?"hidden":void 0,...V[t],...a,...d.props.style},ref:P,...l})})});function Y(i){return z("MuiBackdrop",i)}W("MuiBackdrop",["root","invisible"]);const Z=i=>{const{classes:n,invisible:r}=i;return G({root:["root",r&&"invisible"]},Y,n)},_=A("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(i,n)=>{const{ownerState:r}=i;return[n.root,r.invisible&&n.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),pt=y.forwardRef(function(n,r){const o=q({props:n,name:"MuiBackdrop"}),{children:x,className:m,component:h="div",invisible:d=!1,open:u,components:f={},componentsProps:g={},slotProps:b={},slots:v={},TransitionComponent:E,transitionDuration:k,...C}=o,a={...o,component:h,invisible:d},p=Z(a),R={transition:E,root:f.Root,...v},T={...g,...b},c={slots:R,slotProps:T},[P,e]=j("root",{elementType:_,externalForwardedProps:c,className:H(p.root,m),ownerState:a}),[w,S]=j("transition",{elementType:X,externalForwardedProps:c,ownerState:a});return B.jsx(w,{in:u,timeout:k,...C,...S,children:B.jsx(P,{"aria-hidden":!0,...e,classes:p,ref:r,children:x})})});export{pt as B,X as F};
