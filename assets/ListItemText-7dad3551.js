import{_ as P}from"./createTheme-bf72f819.js";import{_ as i}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import{r as T}from"./index-61bf1805.js";import{c as j}from"./index-aa4d0353.js";import{L as v}from"./ListContext-58194ff9.js";import{u as C}from"./useThemeProps-3a07dd36.js";import{s as N,c as R}from"./styled-8f47f2e2.js";import{l as h,g as _}from"./listItemTextClasses-45e954d4.js";import{j as d}from"./jsx-runtime-4ca860c5.js";import{T as p}from"./Typography-e48c7697.js";const $=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],k=s=>{const{classes:r,inset:o,primary:a,secondary:m,dense:c}=s;return R({root:["root",o&&"inset",c&&"dense",a&&m&&"multiline"],primary:["primary"],secondary:["secondary"]},_,r)},w=N("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(s,r)=>{const{ownerState:o}=s;return[{[`& .${h.primary}`]:r.primary},{[`& .${h.secondary}`]:r.secondary},r.root,o.inset&&r.inset,o.primary&&o.secondary&&r.multiline,o.dense&&r.dense]}})(({ownerState:s})=>i({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},s.primary&&s.secondary&&{marginTop:6,marginBottom:6},s.inset&&{paddingLeft:56})),B=T.forwardRef(function(r,o){const a=C({props:r,name:"MuiListItemText"}),{children:m,className:c,disableTypography:n=!1,inset:g=!1,primary:x,primaryTypographyProps:y,secondary:L,secondaryTypographyProps:b}=a,I=P(a,$),{dense:f}=T.useContext(v);let e=x??m,t=L;const u=i({},a,{disableTypography:n,inset:g,primary:!!e,secondary:!!t,dense:f}),l=k(u);return e!=null&&e.type!==p&&!n&&(e=d.jsx(p,i({variant:f?"body2":"body1",className:l.primary,component:y!=null&&y.variant?void 0:"span",display:"block"},y,{children:e}))),t!=null&&t.type!==p&&!n&&(t=d.jsx(p,i({variant:"body2",className:l.secondary,color:"text.secondary",display:"block"},b,{children:t}))),d.jsxs(w,i({className:j(l.root,c),ownerState:u,ref:o},I,{children:[e,t]}))}),G=B;export{G as L};
//# sourceMappingURL=ListItemText-7dad3551.js.map