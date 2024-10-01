import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as u}from"./index-61bf1805.js";import{M as n}from"./MenuItem-8ccd3716.js";import{B as d}from"./Button-7a4246ff.js";import{M as a}from"./Menu-b27274bd.js";import"./_commonjsHelpers-de833af9.js";import"./MenuItem-26379da8.js";import"./createTheme-afe70497.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./index-b47fffdc.js";import"./styled-938ba038.js";import"./useThemeProps-bf98364a.js";import"./ListContext-58194ff9.js";import"./generateUtilityClasses-8f2c365e.js";import"./ButtonBase-d6010b8e.js";import"./emotion-react.browser.esm-42739ee1.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./dividerClasses-fa2bd388.js";import"./listItemTextClasses-cc36566e.js";import"./Box-cf9644a4.js";import"./extendSxProp-50a8832f.js";import"./Button-109bab0c.js";import"./useId-65eea1c4.js";import"./CircularProgress-5fce7acd.js";import"./Menu-a7e34ff0.js";import"./react-is.production.min-a192e302.js";import"./useTheme-9d477022.js";import"./Popover-55fbf5b0.js";import"./Modal-557ea229.js";import"./Backdrop-7a9c79a0.js";import"./utils-eb1a1c61.js";import"./index-2801d3c9.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-761aac92.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-b8e9baec.js";import"./debounce-517eeb3c.js";import"./Grow-b56d2d19.js";import"./MenuList-8c082415.js";const lo={title:"Components/Menu/Menu",component:a,tags:["autodocs"]},t={render:l=>{const[e,i]=u.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(d,{variant:"contained",onClick:c=>i(c.currentTarget),children:"Open Menu"}),o.jsxs(a,{anchorEl:e,open:!!e,onClose:r,...l,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
//# sourceMappingURL=Menu.stories-ff3d50ad.js.map
