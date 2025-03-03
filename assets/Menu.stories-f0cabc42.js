import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as u}from"./index-61bf1805.js";import{M as n}from"./MenuItem-08c72fa1.js";import{B as d}from"./Button-eef0f5e5.js";import{M as a}from"./Menu-ef4536d4.js";import"./_commonjsHelpers-de833af9.js";import"./MenuItem-5ac73feb.js";import"./createTheme-316778f4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./index-05c64dab.js";import"./styled-9b74321f.js";import"./defaultTheme-fea1ec9a.js";import"./useThemeProps-8ddb2dd0.js";import"./ListContext-58194ff9.js";import"./generateUtilityClasses-5ea778c4.js";import"./ButtonBase-12de1a8d.js";import"./emotion-react.browser.esm-a2267d4c.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./dividerClasses-6ea87943.js";import"./listItemTextClasses-c4a05c48.js";import"./Box-58f77dc6.js";import"./extendSxProp-4079792f.js";import"./Button-7cf627bc.js";import"./useId-65eea1c4.js";import"./CircularProgress-e82ffd5a.js";import"./Menu-e1a4cefc.js";import"./react-is.production.min-a192e302.js";import"./useTheme-b859b38f.js";import"./Popover-7044e2a9.js";import"./Modal-35ee554a.js";import"./Backdrop-2c48098d.js";import"./utils-f86e1de4.js";import"./index-2801d3c9.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-7dac0002.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-90a9c904.js";import"./debounce-517eeb3c.js";import"./Grow-afbbb00d.js";import"./MenuList-1c32f46a.js";const co={title:"Components/Menu/Menu",component:a,tags:["autodocs"]},t={render:l=>{const[e,i]=u.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(d,{variant:"contained",onClick:c=>i(c.currentTarget),children:"Open Menu"}),o.jsxs(a,{anchorEl:e,open:!!e,onClose:r,...l,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
//# sourceMappingURL=Menu.stories-f0cabc42.js.map
