import{_ as i}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import{_ as w}from"./createTheme-bf72f819.js";import{r as l}from"./index-61bf1805.js";import"./react-is.production.min-a192e302.js";import{c as W}from"./index-aa4d0353.js";import{g as $,s as v,r as H,c as V}from"./styled-8f47f2e2.js";import{u as q}from"./useTheme-b9b9347b.js";import{u as B}from"./useThemeProps-3a07dd36.js";import{g as J}from"./generateUtilityClasses-d818091b.js";import{j as E}from"./jsx-runtime-4ca860c5.js";import{M as Q,P as X}from"./Popover-923cd157.js";import{M as Y}from"./MenuList-229da60e.js";import{u as N}from"./useSlotProps-8c90c05b.js";function Z(o){return $("MuiMenu",o)}J("MuiMenu",["root","paper","list"]);const oo=["onEntering"],so=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],to={vertical:"top",horizontal:"right"},eo={vertical:"top",horizontal:"left"},ro=o=>{const{classes:t}=o;return V({root:["root"],paper:["paper"],list:["list"]},Z,t)},no=v(Q,{shouldForwardProp:o=>H(o)||o==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(o,t)=>t.root})({}),ao=v(X,{name:"MuiMenu",slot:"Paper",overridesResolver:(o,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),io=v(Y,{name:"MuiMenu",slot:"List",overridesResolver:(o,t)=>t.list})({outline:0}),lo=l.forwardRef(function(t,g){var x,R;const e=B({props:t,name:"MuiMenu"}),{autoFocus:p=!0,children:S,className:D,disableAutoFocusItem:u=!1,MenuListProps:c={},onClose:m,open:y,PaperProps:T={},PopoverClasses:j,transitionDuration:C="auto",TransitionProps:{onEntering:P}={},variant:f="selectedMenu",slots:M={},slotProps:F={}}=e,I=w(e.TransitionProps,oo),O=w(e,so),L=q(),_=L.direction==="rtl",r=i({},e,{autoFocus:p,disableAutoFocusItem:u,MenuListProps:c,onEntering:P,PaperProps:T,transitionDuration:C,TransitionProps:I,variant:f}),d=ro(r),U=p&&!u&&y,h=l.useRef(null),z=(s,a)=>{h.current&&h.current.adjustStyleForScrollbar(s,L),P&&P(s,a)},A=s=>{s.key==="Tab"&&(s.preventDefault(),m&&m(s,"tabKeyDown"))};let n=-1;l.Children.map(S,(s,a)=>{l.isValidElement(s)&&(s.props.disabled||(f==="selectedMenu"&&s.props.selected||n===-1)&&(n=a))});const b=(x=M.paper)!=null?x:ao,K=(R=F.paper)!=null?R:T,k=N({elementType:M.root,externalSlotProps:F.root,ownerState:r,className:[d.root,D]}),G=N({elementType:b,externalSlotProps:K,ownerState:r,className:d.paper});return E.jsx(no,i({onClose:m,anchorOrigin:{vertical:"bottom",horizontal:_?"right":"left"},transformOrigin:_?to:eo,slots:{paper:b,root:M.root},slotProps:{root:k,paper:G},open:y,ref:g,transitionDuration:C,TransitionProps:i({onEntering:z},I),ownerState:r},O,{classes:j,children:E.jsx(io,i({onKeyDown:A,actions:h,autoFocus:p&&(n===-1||u),autoFocusItem:U,variant:f},c,{className:W(d.list,c.className),children:S}))}))}),yo=lo;export{yo as M};
//# sourceMappingURL=Menu-c3f24bc4.js.map