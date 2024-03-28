import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as u}from"./index-61bf1805.js";import{M as n}from"./MenuItem-48cb39a6.js";import{B as d}from"./Button-c61d662a.js";import{M as a}from"./Menu-7a2907a3.js";import"./_commonjsHelpers-de833af9.js";import"./MenuItem-ac2de4ef.js";import"./createTheme-dbf13da2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./clsx-5c20934d.js";import"./styled-fa5f10e1.js";import"./useThemeProps-af14b15e.js";import"./ListContext-58194ff9.js";import"./generateUtilityClasses-2a7b4d5e.js";import"./ButtonBase-e3e89d5f.js";import"./emotion-react.browser.esm-9b27619f.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./dividerClasses-91d759d3.js";import"./listItemTextClasses-670f5f39.js";import"./Box-d56a769d.js";import"./extendSxProp-5fc992c6.js";import"./Button-79c74423.js";import"./useId-65eea1c4.js";import"./CircularProgress-6310d3c8.js";import"./Menu-2b7e8a24.js";import"./react-is.production.min-a192e302.js";import"./useTheme-2cc7c047.js";import"./Popover-9235690e.js";import"./Modal-552b375e.js";import"./Backdrop-4cbb43ae.js";import"./utils-5b75737a.js";import"./index-2801d3c9.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-4a5f3c0e.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-08c921af.js";import"./debounce-517eeb3c.js";import"./Grow-8a34c90c.js";import"./MenuList-a0a2fbf1.js";const lo={title:"Components/Menu/Menu",component:a,tags:["autodocs"]},t={render:l=>{const[e,i]=u.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(d,{variant:"contained",onClick:c=>i(c.currentTarget),children:"Open Menu"}),o.jsxs(a,{anchorEl:e,open:!!e,onClose:r,...l,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
//# sourceMappingURL=Menu.stories-abce7968.js.map
