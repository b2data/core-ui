import{j as w}from"./jsx-runtime-4ca860c5.js";import{r as v,R as Q}from"./index-61bf1805.js";import{_,c as A}from"./createTheme-bf72f819.js";import{_ as l}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import{c as S}from"./index-aa4d0353.js";import{u as Y}from"./useTheme-b9b9347b.js";import{u as Z}from"./useThemeProps-3a07dd36.js";import{g as ee,s as L,r as te,c as re}from"./styled-8f47f2e2.js";import{g as ne}from"./generateUtilityClasses-d818091b.js";import{M as oe}from"./Modal-2139a970.js";import{P as ae}from"./Paper-bb0aa125.js";import{T as ie,r as se,g as N}from"./utils-6f56962a.js";import{u as le}from"./useForkRef-80a5c2b4.js";import{d as ce}from"./debounce-517eeb3c.js";import{o as H}from"./ownerWindow-03d1c82d.js";const pe=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function de(t,e,o){const r=e.getBoundingClientRect(),a=o&&o.getBoundingClientRect(),x=H(e);let c;if(e.fakeTransform)c=e.fakeTransform;else{const i=x.getComputedStyle(e);c=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}let m=0,u=0;if(c&&c!=="none"&&typeof c=="string"){const i=c.split("(")[1].split(")")[0].split(",");m=parseInt(i[4],10),u=parseInt(i[5],10)}return t==="left"?a?`translateX(${a.right+m-r.left}px)`:`translateX(${x.innerWidth+m-r.left}px)`:t==="right"?a?`translateX(-${r.right-a.left-m}px)`:`translateX(-${r.left+r.width-m}px)`:t==="up"?a?`translateY(${a.bottom+u-r.top}px)`:`translateY(${x.innerHeight+u-r.top}px)`:a?`translateY(-${r.top-a.top+r.height-u}px)`:`translateY(-${r.top+r.height-u}px)`}function ue(t){return typeof t=="function"?t():t}function q(t,e,o){const r=ue(o),a=de(t,e,r);a&&(e.style.webkitTransform=a,e.style.transform=a)}const fe=v.forwardRef(function(e,o){const r=Y(),a={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},x={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:c,appear:m=!0,children:u,container:i,direction:f="down",easing:P=a,in:g,onEnter:T,onEntered:b,onEntering:E,onExit:R,onExited:C,onExiting:M,style:y,timeout:D=x,TransitionComponent:k=ie}=e,V=_(e,pe),p=v.useRef(null),j=le(u.ref,p,o),d=n=>s=>{n&&(s===void 0?n(p.current):n(p.current,s))},h=d((n,s)=>{q(f,n,i),se(n),T&&T(n,s)}),$=d((n,s)=>{const I=N({timeout:D,style:y,easing:P},{mode:"enter"});n.style.webkitTransition=r.transitions.create("-webkit-transform",l({},I)),n.style.transition=r.transitions.create("transform",l({},I)),n.style.webkitTransform="none",n.style.transform="none",E&&E(n,s)}),B=d(b),F=d(M),K=d(n=>{const s=N({timeout:D,style:y,easing:P},{mode:"exit"});n.style.webkitTransition=r.transitions.create("-webkit-transform",s),n.style.transition=r.transitions.create("transform",s),q(f,n,i),R&&R(n)}),G=d(n=>{n.style.webkitTransition="",n.style.transition="",C&&C(n)}),J=n=>{c&&c(p.current,n)},z=v.useCallback(()=>{p.current&&q(f,p.current,i)},[f,i]);return v.useEffect(()=>{if(g||f==="down"||f==="right")return;const n=ce(()=>{p.current&&q(f,p.current,i)}),s=H(p.current);return s.addEventListener("resize",n),()=>{n.clear(),s.removeEventListener("resize",n)}},[f,g,i]),v.useEffect(()=>{g||z()},[g,z]),w.jsx(k,l({nodeRef:p,onEnter:h,onEntered:B,onEntering:$,onExit:K,onExited:G,onExiting:F,addEndListener:J,appear:m,in:g,timeout:D},V,{children:(n,s)=>v.cloneElement(u,l({ref:j,style:l({visibility:n==="exited"&&!g?"hidden":void 0},y,u.props.style)},s))}))}),me=fe;function he(t){return ee("MuiDrawer",t)}ne("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const ve=["BackdropProps"],ge=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],X=(t,e)=>{const{ownerState:o}=t;return[e.root,(o.variant==="permanent"||o.variant==="persistent")&&e.docked,e.modal]},ye=t=>{const{classes:e,anchor:o,variant:r}=t,a={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${A(o)}`,r!=="temporary"&&`paperAnchorDocked${A(o)}`]};return re(a,he,e)},xe=L(oe,{name:"MuiDrawer",slot:"Root",overridesResolver:X})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),O=L("div",{shouldForwardProp:te,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:X})({flex:"0 0 auto"}),we=L(ae,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.paper,e[`paperAnchor${A(o.anchor)}`],o.variant!=="temporary"&&e[`paperAnchorDocked${A(o.anchor)}`]]}})(({theme:t,ownerState:e})=>l({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},e.anchor==="left"&&{left:0},e.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="right"&&{right:0},e.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="left"&&e.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="top"&&e.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="right"&&e.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="bottom"&&e.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),U={left:"right",right:"left",top:"down",bottom:"up"};function ke(t){return["left","right"].indexOf(t)!==-1}function be(t,e){return t.direction==="rtl"&&ke(e)?U[e]:e}const Ee=v.forwardRef(function(e,o){const r=Z({props:e,name:"MuiDrawer"}),a=Y(),x={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:c="left",BackdropProps:m,children:u,className:i,elevation:f=16,hideBackdrop:P=!1,ModalProps:{BackdropProps:g}={},onClose:T,open:b=!1,PaperProps:E={},SlideProps:R,TransitionComponent:C=me,transitionDuration:M=x,variant:y="temporary"}=r,D=_(r.ModalProps,ve),k=_(r,ge),V=v.useRef(!1);v.useEffect(()=>{V.current=!0},[]);const p=be(a,c),d=l({},r,{anchor:c,elevation:f,open:b,variant:y},k),h=ye(d),$=w.jsx(we,l({elevation:y==="temporary"?f:0,square:!0},E,{className:S(h.paper,E.className),ownerState:d,children:u}));if(y==="permanent")return w.jsx(O,l({className:S(h.root,h.docked,i),ownerState:d,ref:o},k,{children:$}));const B=w.jsx(C,l({in:b,direction:U[p],timeout:M,appear:V.current},R,{children:$}));return y==="persistent"?w.jsx(O,l({className:S(h.root,h.docked,i),ownerState:d,ref:o},k,{children:B})):w.jsx(xe,l({BackdropProps:l({},m,g,{transitionDuration:M}),className:S(h.root,h.modal,i),open:b,ownerState:d,onClose:T,hideBackdrop:P,ref:o},k,D,{children:B}))}),De=Ee,W=Q.forwardRef((t,e)=>w.jsx(De,{ref:e,...t}));try{W.displayName="Drawer",W.__docgenInfo={description:"",displayName:"Drawer",props:{anchor:{defaultValue:{value:"left"},description:"Side from which the drawer will appear.",name:"anchor",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},variant:{defaultValue:{value:"temporary"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"permanent"'},{value:'"persistent"'},{value:'"temporary"'}]}},container:{defaultValue:null,description:"An HTML element or function that returns one.\nThe `container` will have the portal children appended to it.\n\nBy default, it uses the body of the top-level document object,\nso it's simply `document.body` most of the time.",name:"container",required:!1,type:{name:"Element | (() => Element | null) | null"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},onClose:{defaultValue:null,description:`Callback fired when the component requests to be closed.
@param event The event source of the callback.`,name:"onClose",required:!1,type:{name:'((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)'}},open:{defaultValue:{value:"false"},description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},elevation:{defaultValue:{value:"16"},description:"The elevation of the drawer.",name:"elevation",required:!1,type:{name:"number"}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Modal.`,name:"keepMounted",required:!1,type:{name:"boolean"}},disableScrollLock:{defaultValue:{value:"false"},description:"Disable the scroll lock behavior.",name:"disableScrollLock",required:!1,type:{name:"boolean"}},disableEscapeKeyDown:{defaultValue:{value:"false"},description:"If `true`, hitting escape will not fire the `onClose` callback.",name:"disableEscapeKeyDown",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:{value:"false"},description:"If `true`, the backdrop is not rendered.",name:"hideBackdrop",required:!1,type:{name:"boolean"}}}}}catch{}export{W as D};
//# sourceMappingURL=Drawer-4678b992.js.map