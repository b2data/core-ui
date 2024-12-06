import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as u}from"./index-61bf1805.js";import{M as n}from"./MenuItem-07b73303.js";import{B as d}from"./Button-978b87d0.js";import{M as a}from"./Menu-5c70bafc.js";import"./_commonjsHelpers-de833af9.js";import"./MenuItem-f58899fb.js";import"./createTheme-bf72f819.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./index-aa4d0353.js";import"./styled-8f47f2e2.js";import"./useThemeProps-3a07dd36.js";import"./ListContext-58194ff9.js";import"./generateUtilityClasses-d818091b.js";import"./ButtonBase-12b39b19.js";import"./emotion-react.browser.esm-20161b7f.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./dividerClasses-e3157b11.js";import"./listItemTextClasses-45e954d4.js";import"./Box-fefa9705.js";import"./extendSxProp-1c98bbe3.js";import"./Button-9e16b906.js";import"./useId-65eea1c4.js";import"./CircularProgress-bc81b3ed.js";import"./Menu-c3f24bc4.js";import"./react-is.production.min-a192e302.js";import"./useTheme-b9b9347b.js";import"./Popover-923cd157.js";import"./Modal-2139a970.js";import"./Backdrop-c75f29d0.js";import"./utils-6f56962a.js";import"./index-2801d3c9.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-8c90c05b.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-bb0aa125.js";import"./debounce-517eeb3c.js";import"./Grow-5b576062.js";import"./MenuList-229da60e.js";const lo={title:"Components/Menu/Menu",component:a,tags:["autodocs"]},t={render:l=>{const[e,i]=u.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(d,{variant:"contained",onClick:c=>i(c.currentTarget),children:"Open Menu"}),o.jsxs(a,{anchorEl:e,open:!!e,onClose:r,...l,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClose = () => setAnchorEl(null);
    return <div>
        <Button variant="contained" onClick={e => setAnchorEl(e.currentTarget)}>
          Open Menu
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} {...props}>
          <MenuItem onClick={handleClose}>Telegram</MenuItem>
          <MenuItem onClick={handleClose}>Whatsapp</MenuItem>
          <MenuItem>Mail</MenuItem>
        </Menu>
      </div>;
  }
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const co=["Base"];export{t as Base,co as __namedExportsOrder,lo as default};
//# sourceMappingURL=Menu.stories-2cd40282.js.map
