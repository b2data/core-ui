import{j as g}from"./jsx-runtime-4ca860c5.js";import{r as c,R as _}from"./index-61bf1805.js";import{a as p,_ as k}from"./createTheme-bf72f819.js";import{_ as u}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import{c as I}from"./index-aa4d0353.js";import{s as F,r as w,c as G}from"./styled-8f47f2e2.js";import{u as N}from"./useThemeProps-3a07dd36.js";import{L as B}from"./ListContext-58194ff9.js";import{l as n,g as j}from"./listItemButtonClasses-02fa8195.js";import{B as S}from"./ButtonBase-12b39b19.js";import{u as q}from"./useEnhancedEffect-e1879ff8.js";import{u as E}from"./useForkRef-80a5c2b4.js";const P=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],T=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.alignItems==="flex-start"&&t.alignItemsFlexStart,s.divider&&t.divider,!s.disableGutters&&t.gutters]},M=e=>{const{alignItems:t,classes:s,dense:a,disabled:o,disableGutters:l,divider:d,selected:f}=e,i=G({root:["root",a&&"dense",!l&&"gutters",d&&"divider",o&&"disabled",t==="flex-start"&&"alignItemsFlexStart",f&&"selected"]},j,s);return u({},s,i)},U=F(S,{shouldForwardProp:e=>w(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:T})(({theme:e,ownerState:t})=>u({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:p(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:p(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:p(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:p(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),W=c.forwardRef(function(t,s){const a=N({props:t,name:"MuiListItemButton"}),{alignItems:o="center",autoFocus:l=!1,component:d="div",children:f,dense:m=!1,disableGutters:i=!1,divider:L=!1,focusVisibleClassName:R,selected:h=!1,className:O}=a,r=k(a,P),y=c.useContext(B),x=c.useMemo(()=>({dense:m||y.dense||!1,alignItems:o,disableGutters:i}),[o,y.dense,m,i]),b=c.useRef(null);q(()=>{l&&b.current&&b.current.focus()},[l]);const C=u({},a,{alignItems:o,dense:x.dense,disableGutters:i,divider:L,selected:h}),v=M(C),V=E(b,s);return g.jsx(B.Provider,{value:x,children:g.jsx(U,u({ref:V,href:r.href||r.to,component:(r.href||r.to)&&d==="div"?"button":d,focusVisibleClassName:I(v.focusVisible,R),ownerState:C,className:I(v.root,O)},r,{classes:v,children:f}))})}),A=W,$=_.forwardRef((e,t)=>g.jsx(A,{ref:t,dense:!0,...e}));try{$.displayName="ListItemButton",$.__docgenInfo={description:"",displayName:"ListItemButton",props:{sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableGutters:{defaultValue:{value:"false"},description:"If `true`, the left and right padding is removed.",name:"disableGutters",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Use to apply selected styling.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}export{$ as L};
//# sourceMappingURL=ListItemButton-0d3f2d04.js.map