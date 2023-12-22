import{j as r}from"./jsx-runtime-4ca860c5.js";import{B as i,L as m}from"./Link-bc3c657a.js";import{d as R}from"./Save-1510dcf6.js";import{T as k}from"./Typography-1a0ee6fe.js";import{B as n}from"./Breadcrumbs-08b93796.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-f7fbaf76.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./clsx-63d16a80.js";import"./styled-3543814b.js";import"./useThemeProps-8e2a0e37.js";import"./generateUtilityClasses-802c53db.js";import"./Typography-65ef5db8.js";import"./extendSxProp-69c75e3e.js";import"./useIsFocusVisible-9ca792e3.js";import"./useForkRef-80a5c2b4.js";import"./createSvgIcon-be1c860b.js";import"./createSvgIcon-77a259fa.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./isMuiElement-6a90d2d1.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./useControlled-1b61d410.js";import"./useEventCallback-1165b6b6.js";import"./react-is.production.min-a192e302.js";import"./ButtonBase-031fb489.js";import"./emotion-react.browser.esm-13bdab44.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";import"./useSlotProps-00f30b1b.js";import"./isHostComponent-73d6e646.js";const nr={title:"Components/Breadcrumbs",component:n,tags:["autodocs"]},p=[{label:"Root",link:"/"},{label:"Level 1",disabled:!0},{label:"Level 2",disabled:!0,onClick:()=>alert("Level 2")},{label:"Level 3",onClick:()=>alert("Level 3")},{label:"Breadcrumbs",icon:r.jsx(R,{})}],o={args:{items:p},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})},s={args:{items:p,separator:"›"},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})},t={args:{items:p,maxItems:2},render:e=>r.jsx(i,{children:r.jsx(n,{...e})})},a={args:{children:[r.jsx(m,{href:"/",underline:"none",color:"inherit",children:"Root"}),r.jsx(m,{href:"/",underline:"none",color:"inherit",children:"Level 1"}),r.jsx(k,{color:"text.disabled",children:"Breadcrumbs"})]}};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items
  },
  render: props => <BrowserRouter>
      <Breadcrumbs {...props} />
    </BrowserRouter>
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,h,B;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items,
    separator: "›"
  },
  render: props => <BrowserRouter>
      <Breadcrumbs {...props} />
    </BrowserRouter>
}`,...(B=(h=s.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var x,b,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items,
    maxItems: 2
  },
  render: props => <BrowserRouter>
      <Breadcrumbs {...props} />
    </BrowserRouter>
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var L,j,f;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: [<Link href="/" underline="none" color="inherit">
        Root
      </Link>, <Link href="/" underline="none" color="inherit">
        Level 1
      </Link>, <Typography color="text.disabled">Breadcrumbs</Typography>]
  }
}`,...(f=(j=a.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const ir=["Base","Separator","Collapsed","WithChildren"];export{o as Base,t as Collapsed,s as Separator,a as WithChildren,ir as __namedExportsOrder,nr as default};
//# sourceMappingURL=Breadcrumbs.stories-be65b26b.js.map
