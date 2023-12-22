import{j as e}from"./jsx-runtime-4ca860c5.js";import{d as z}from"./Save-1510dcf6.js";import{B as P}from"./Breadcrumbs-08b93796.js";import{r as f}from"./index-61bf1805.js";import{T as x}from"./Typography-1a0ee6fe.js";import{T as Q}from"./Tooltip-c9ef431f.js";import{B as o}from"./Box-b510fdd6.js";import{S as U}from"./SectionTitleAction-900e2a1f.js";import"./createSvgIcon-be1c860b.js";import"./_commonjsHelpers-de833af9.js";import"./createSvgIcon-77a259fa.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./createTheme-f7fbaf76.js";import"./clsx-63d16a80.js";import"./useThemeProps-8e2a0e37.js";import"./styled-3543814b.js";import"./generateUtilityClasses-802c53db.js";import"./useForkRef-80a5c2b4.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./isMuiElement-6a90d2d1.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./useControlled-1b61d410.js";import"./useEventCallback-1165b6b6.js";import"./useIsFocusVisible-9ca792e3.js";import"./Link-bc3c657a.js";import"./Typography-65ef5db8.js";import"./extendSxProp-69c75e3e.js";import"./react-is.production.min-a192e302.js";import"./ButtonBase-031fb489.js";import"./emotion-react.browser.esm-13bdab44.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";import"./useSlotProps-00f30b1b.js";import"./isHostComponent-73d6e646.js";import"./Tooltip-3d288e92.js";import"./useTheme-b04d84f2.js";import"./Popper-16db8f71.js";import"./ClassNameConfigurator-4826bb42.js";import"./Portal-c6ffb70f.js";import"./index-2801d3c9.js";import"./Grow-11d653f1.js";import"./utils-32a282cb.js";import"./Box-db9d02d2.js";import"./MoreVert-ee4f5a9d.js";import"./ButtonGroup-afe777ad.js";import"./Button-3b1980ee.js";import"./MenuItem-aea05580.js";import"./MenuItem-009a72d6.js";import"./ListContext-58194ff9.js";import"./listItemIconClasses-3cdacd8c.js";import"./dividerClasses-b9040cf2.js";import"./listItemTextClasses-90a4e329.js";import"./IconButton-dfaa3c35.js";import"./IconButton-2a342a8d.js";import"./Menu-9128bc7a.js";import"./Menu-e2de8e38.js";import"./Popover-b634892d.js";import"./Modal-7c84a4aa.js";import"./Backdrop-b5fe5510.js";import"./getScrollbarSize-ac846fe6.js";import"./Paper-c4298f7a.js";import"./MenuList-e6483060.js";import"./Button-2c9b320b.js";import"./CircularProgress-29f9ddb9.js";const d=({title:u,titleProps:F,subtitle:h,tooltip:G,helperText:r,actions:g,withBorder:J})=>{const K=f.useMemo(()=>(g||[]).filter(t=>!t.hidden),[g]);return e.jsxs(o,{sx:({palette:t})=>({display:"flex",flexDirection:"column",gap:2,...J?{borderBottom:`1px solid ${t.divider}`,pb:1}:{}}),children:[h&&e.jsx(o,{sx:{display:"flex",alignItems:"center",height:20,color:"#6B778C","& *":{color:"#6B778C"}},children:h}),e.jsxs(o,{sx:({palette:t})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:3,"&:hover .MuiIconButton-root":{backgroundColor:t.action.selected}}),children:[e.jsx(Q,{followCursor:!0,placement:"bottom",text:G,children:e.jsx(x,{noWrap:!0,style:{lineHeight:1.2},variant:"h2",...F,children:u})}),e.jsxs(o,{sx:{display:"flex",flexDirection:"row",alignItems:"center",gap:2,"& > .MuiIconButton-root":{minWidth:32,minHeight:32}},children:[r?f.isValidElement(r)?r:e.jsx(x,{variant:"body2",children:r}):null,K.map((t,L)=>e.jsx(U,{...t},`${t==null?void 0:t.label}-${L}`))]})]})]})};try{d.displayName="SectionTitle",d.__docgenInfo={description:"",displayName:"SectionTitle",props:{title:{defaultValue:null,description:"Main component text.",name:"title",required:!0,type:{name:"string"}},titleProps:{defaultValue:null,description:"The title TypographyProps",name:"titleProps",required:!1,type:{name:"TypographyProps"}},subtitle:{defaultValue:null,description:"Secondary component text.",name:"subtitle",required:!1,type:{name:"ReactNode"}},tooltip:{defaultValue:null,description:"If set, the tooltip will be shown when hover on the title box.",name:"tooltip",required:!1,type:{name:"ReactNode"}},helperText:{defaultValue:null,description:"Helper text component that shows near the buttons.",name:"helperText",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"Array of actions that will be shown.",name:"actions",required:!1,type:{name:"SectionTitleActionProps[]"}},withBorder:{defaultValue:null,description:"If `true` bottom border will be shown.",name:"withBorder",required:!1,type:{name:"boolean"}}}}}catch{}const dt={title:"Components/Section/Section Title",component:d,tags:["autodocs"]},i={args:{title:"Header"}},a={args:{title:"Header",actions:[{label:"Cancel",color:"default",variant:"outlined"},{label:"Save"}]}},n={args:{title:"Header",actions:[{icon:e.jsx(z,{})}]}},s={args:{title:"Header",actions:[{menuActions:[{children:"Save",startAdornment:e.jsx(z,{})}]}]}},l={args:{title:"Header",withBorder:!0}},p={args:{title:"Header",subtitle:e.jsx(P,{items:[{label:"Home"},{label:"Items"}]})}},m={args:{title:"Header",helperText:"1 / 3"}},c={args:{title:"Header",tooltip:"Tooltip text"}};var b,y,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Header"
  }
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var H,B,T;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: "Header",
    actions: [{
      label: "Cancel",
      color: "default",
      variant: "outlined"
    }, {
      label: "Save"
    }]
  }
}`,...(T=(B=a.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var w,W,j;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: "Header",
    actions: [{
      icon: <SaveIcon />
    }]
  }
}`,...(j=(W=n.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var I,v,_;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: "Header",
    actions: [{
      menuActions: [{
        children: "Save",
        startAdornment: <SaveIcon />
      }]
    }]
  }
}`,...(_=(v=s.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var A,C,V;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: "Header",
    withBorder: true
  }
}`,...(V=(C=l.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var q,M,N;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: "Header",
    subtitle: <Breadcrumbs items={[{
      label: "Home"
    }, {
      label: "Items"
    }]} />
  }
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var E,R,D;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: "Header",
    helperText: "1 / 3"
  }
}`,...(D=(R=m.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var $,k,O;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: "Header",
    tooltip: "Tooltip text"
  }
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const ut=["Base","WithButton","WithIconButton","WithMenu","WithBorder","WithSubtitle","WithHelpText","WithTooltip"];export{i as Base,l as WithBorder,a as WithButton,m as WithHelpText,n as WithIconButton,s as WithMenu,p as WithSubtitle,c as WithTooltip,ut as __namedExportsOrder,dt as default};
//# sourceMappingURL=SectionTitle.stories-9b595a66.js.map
