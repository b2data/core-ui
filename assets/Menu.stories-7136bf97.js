import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as u}from"./index-61bf1805.js";import{M as n}from"./MenuItem-aea05580.js";import{B as d}from"./Button-2c9b320b.js";import{M as a}from"./Menu-9128bc7a.js";import"./_commonjsHelpers-de833af9.js";import"./MenuItem-009a72d6.js";import"./createTheme-f7fbaf76.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./clsx-63d16a80.js";import"./styled-3543814b.js";import"./useThemeProps-8e2a0e37.js";import"./ListContext-58194ff9.js";import"./generateUtilityClasses-802c53db.js";import"./ButtonBase-031fb489.js";import"./emotion-react.browser.esm-13bdab44.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-9ca792e3.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./listItemIconClasses-3cdacd8c.js";import"./dividerClasses-b9040cf2.js";import"./listItemTextClasses-90a4e329.js";import"./Box-db9d02d2.js";import"./extendSxProp-69c75e3e.js";import"./Button-3b1980ee.js";import"./useId-65eea1c4.js";import"./CircularProgress-29f9ddb9.js";import"./Menu-e2de8e38.js";import"./react-is.production.min-a192e302.js";import"./useTheme-b04d84f2.js";import"./Popover-b634892d.js";import"./Modal-7c84a4aa.js";import"./Backdrop-b5fe5510.js";import"./utils-32a282cb.js";import"./index-2801d3c9.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-00f30b1b.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-c4298f7a.js";import"./debounce-517eeb3c.js";import"./Grow-11d653f1.js";import"./MenuList-e6483060.js";const co={title:"Components/Menu/Menu",component:a,tags:["autodocs"]},t={render:l=>{const[e,i]=u.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(d,{variant:"contained",onClick:c=>i(c.currentTarget),children:"Open Menu"}),o.jsxs(a,{anchorEl:e,open:!!e,onClose:r,...l,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const uo=["Base"];export{t as Base,uo as __namedExportsOrder,co as default};
//# sourceMappingURL=Menu.stories-7136bf97.js.map
