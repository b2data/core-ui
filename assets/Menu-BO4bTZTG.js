import{r as c}from"./index-DQLiH3RP.js";import{g as _,c as H}from"./index-PKGOc6w3.js";import{u as V}from"./index-DgnjHyRg.js";import{s as S,c as W,r as q}from"./styled-BJ0TTCEB.js";import{g as B}from"./generateUtilityClasses-KoSbOHxf.js";import{u as k}from"./useSlot-BXYsnuZK.js";import{j as I}from"./jsx-runtime-D_zvdyIk.js";import{u as J}from"./DefaultPropsProvider-CbX9bpU7.js";import{u as Q}from"./useSlotProps-CWRXRlhi.js";import{a as X,P as Y}from"./Popover-D_dhIdqU.js";import{M as Z}from"./MenuList-xibqgwYT.js";function $(t){return _("MuiMenu",t)}B("MuiMenu",["root","paper","list"]);const oo={vertical:"top",horizontal:"right"},to={vertical:"top",horizontal:"left"},so=t=>{const{classes:r}=t;return W({root:["root"],paper:["paper"],list:["list"]},$,r)},ro=S(Y,{shouldForwardProp:t=>q(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,r)=>r.root})({}),eo=S(X,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,r)=>r.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),no=S(Z,{name:"MuiMenu",slot:"List",overridesResolver:(t,r)=>r.list})({outline:0}),go=c.forwardRef(function(r,b){const w=J({props:r,name:"MuiMenu"}),{autoFocus:u=!0,children:h,className:D,disableAutoFocusItem:m=!1,MenuListProps:f={},onClose:P,open:x,PaperProps:v={},PopoverClasses:E,transitionDuration:C="auto",TransitionProps:{onEntering:d,...F}={},variant:M="selectedMenu",slots:n={},slotProps:i={},...N}=w,y=V(),e={...w,autoFocus:u,disableAutoFocusItem:m,MenuListProps:f,onEntering:d,PaperProps:v,transitionDuration:C,TransitionProps:F,variant:M},g=so(e),j=u&&!m&&x,R=c.useRef(null),O=(o,s)=>{R.current&&R.current.adjustStyleForScrollbar(o,{direction:y?"rtl":"ltr"}),d&&d(o,s)},T=o=>{o.key==="Tab"&&(o.preventDefault(),P&&P(o,"tabKeyDown"))};let l=-1;c.Children.map(h,(o,s)=>{c.isValidElement(o)&&(o.props.disabled||(M==="selectedMenu"&&o.props.selected||l===-1)&&(l=s))});const p={slots:n,slotProps:{list:f,transition:F,paper:v,...i}},K=Q({elementType:n.root,externalSlotProps:i.root,ownerState:e,className:[g.root,D]}),[U,z]=k("paper",{className:g.paper,elementType:eo,externalForwardedProps:p,shouldForwardComponentProp:!0,ownerState:e}),[A,G]=k("list",{className:H(g.list,f.className),elementType:no,shouldForwardComponentProp:!0,externalForwardedProps:p,getSlotProps:o=>({...o,onKeyDown:s=>{var L;T(s),(L=o.onKeyDown)==null||L.call(o,s)}}),ownerState:e}),a=typeof p.slotProps.transition=="function"?p.slotProps.transition(e):p.slotProps.transition;return I.jsx(ro,{onClose:P,anchorOrigin:{vertical:"bottom",horizontal:y?"right":"left"},transformOrigin:y?oo:to,slots:{root:n.root,paper:U,backdrop:n.backdrop,...n.transition&&{transition:n.transition}},slotProps:{root:K,paper:z,backdrop:typeof i.backdrop=="function"?i.backdrop(e):i.backdrop,transition:{...a,onEntering:(...o)=>{var s;O(...o),(s=a==null?void 0:a.onEntering)==null||s.call(a,...o)}}},open:x,ref:b,transitionDuration:C,ownerState:e,...N,classes:E,children:I.jsx(A,{actions:R,autoFocus:u&&(l===-1||m),autoFocusItem:j,variant:M,...G,children:h})})});export{go as M};
