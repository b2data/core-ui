import{j as a}from"./jsx-runtime-4ca860c5.js";import{d as f}from"./Send-4f87e5ae.js";import{P as c}from"./Preview-607a0968.js";import{r as B,R as S}from"./index-61bf1805.js";import{c as v,_ as M}from"./createTheme-f7fbaf76.js";import{_ as n}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import{c as y}from"./clsx-63d16a80.js";import{u as U}from"./useThemeProps-8e2a0e37.js";import{g as W}from"./generateUtilityClasses-802c53db.js";import{g as E,s as A,r as D,c as L}from"./styled-3543814b.js";import{B as H}from"./ButtonBase-031fb489.js";import"./createSvgIcon-be1c860b.js";import"./_commonjsHelpers-de833af9.js";import"./createSvgIcon-77a259fa.js";import"./useForkRef-80a5c2b4.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./isMuiElement-6a90d2d1.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./useControlled-1b61d410.js";import"./useEventCallback-1165b6b6.js";import"./useIsFocusVisible-9ca792e3.js";import"./emotion-react.browser.esm-13bdab44.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";function O(e){return E("MuiFab",e)}const G=W("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),z=G,J=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],K=e=>{const{color:r,variant:s,classes:i,size:u}=e,p={root:["root",s,`size${v(u)}`,r==="inherit"?"colorInherit":r]},m=L(p,O,i);return n({},i,m)},Q=A(H,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>D(e)||e==="classes",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`size${v(s.size)}`],s.color==="inherit"&&r.colorInherit,r[v(s.size)],r[s.color]]}})(({theme:e,ownerState:r})=>{var s,i;return n({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:(s=(i=e.palette).getContrastText)==null?void 0:s.call(i,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${z.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},r.size==="small"&&{width:40,height:40},r.size==="medium"&&{width:48,height:48},r.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},r.variant==="extended"&&r.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},r.variant==="extended"&&r.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},r.color==="inherit"&&{color:"inherit"})},({theme:e,ownerState:r})=>n({},r.color!=="inherit"&&r.color!=="default"&&(e.vars||e).palette[r.color]!=null&&{color:(e.vars||e).palette[r.color].contrastText,backgroundColor:(e.vars||e).palette[r.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[r.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[r.color].main}}}),({theme:e})=>({[`&.${z.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}})),X=B.forwardRef(function(r,s){const i=U({props:r,name:"MuiFab"}),{children:u,className:p,color:m="default",component:x="button",disabled:g=!1,disableFocusRipple:h=!1,focusVisibleClassName:k,size:$="large",variant:q="circular"}=i,N=M(i,J),F=n({},i,{color:m,component:x,disabled:g,disableFocusRipple:h,size:$,variant:q}),b=K(F);return a.jsx(Q,n({className:y(b.root,p),component:x,disabled:g,focusRipple:!h,focusVisibleClassName:y(b.focusVisible,k),ownerState:F,ref:s},N,{classes:b,children:u}))}),Y=X,o=S.forwardRef((e,r)=>a.jsx(Y,{ref:r,...e}));try{o.displayName="Fab",o.__docgenInfo={description:"",displayName:"Fab",props:{color:{defaultValue:{value:"default"},description:"The color of the component.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"default"'}]}},size:{defaultValue:{value:"medium"},description:"The size of the component. `small` is equivalent to the dense Fab styling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:{value:"circular"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circular"'},{value:'"extended"'}]}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}}}}}catch{}const Te={title:"Components/Buttons/Fab",component:o,tags:["autodocs"]},t={args:{children:a.jsx(f,{})},render:e=>a.jsx(o,{...e})},l={args:{children:a.jsx(f,{})},render:e=>a.jsxs(c,{style:{flexDirection:"column",alignItems:"start"},children:[a.jsxs(c,{children:[a.jsx(o,{...e,size:"small"}),a.jsx(o,{...e,size:"medium"}),a.jsx(o,{...e,size:"large"})]}),a.jsxs(c,{children:[a.jsx(o,{...e,size:"small",variant:"extended",children:"Text content"}),a.jsx(o,{...e,size:"medium",variant:"extended",children:"Text content"}),a.jsx(o,{...e,size:"large",variant:"extended",children:"Text content"})]})]})},d={args:{children:a.jsx(f,{})},render:e=>a.jsxs(c,{children:[a.jsx(o,{...e,color:"inherit"}),a.jsx(o,{...e,color:"primary"}),a.jsx(o,{...e,color:"secondary"}),a.jsx(o,{...e,color:"default"}),a.jsx(o,{...e,color:"success"}),a.jsx(o,{...e,color:"error"}),a.jsx(o,{...e,color:"info"}),a.jsx(o,{...e,color:"warning"})]})};var j,w,C;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <SendIcon />
  },
  render: props => <Fab {...props} />
}`,...(C=(w=t.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var _,R,T;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: <SendIcon />
  },
  render: props => <Preview style={{
    flexDirection: "column",
    alignItems: "start"
  }}>
      <Preview>
        <Fab {...props} size="small" />
        <Fab {...props} size="medium" />
        <Fab {...props} size="large" />
      </Preview>
      <Preview>
        <Fab {...props} size="small" variant="extended">
          Text content
        </Fab>
        <Fab {...props} size="medium" variant="extended">
          Text content
        </Fab>
        <Fab {...props} size="large" variant="extended">
          Text content
        </Fab>
      </Preview>
    </Preview>
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var P,V,I;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: <SendIcon />
  },
  render: props => <Preview>
      <Fab {...props} color="inherit" />
      <Fab {...props} color="primary" />
      <Fab {...props} color="secondary" />
      <Fab {...props} color="default" />
      <Fab {...props} color="success" />
      <Fab {...props} color="error" />
      <Fab {...props} color="info" />
      <Fab {...props} color="warning" />
    </Preview>
}`,...(I=(V=d.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const Pe=["Base","SizesAndVariants","Colors"];export{t as Base,d as Colors,l as SizesAndVariants,Pe as __namedExportsOrder,Te as default};
//# sourceMappingURL=Fab.stories-aab8bd5c.js.map
