import{j as o}from"./jsx-runtime-DZlKWc7q.js";import{r as u}from"./index-3dRrDZpt.js";import{M as n}from"./MenuItem-Dz47LlzX.js";import{B as d}from"./Button-BrGUlhU_.js";import{M as a}from"./Menu-B0_cjZbI.js";import"./MenuItem-B9hap1ET.js";import"./identifier-DOope7UP.js";import"./generateUtilityClass-CXPxvQOg.js";import"./styled-Mw1EHJJT.js";import"./defaultTheme-DgpnsjHP.js";import"./ListContext-CJ4YrkIs.js";import"./generateUtilityClasses-CkJG6r2x.js";import"./DefaultPropsProvider-BUlghEOV.js";import"./useEnhancedEffect-BJLNeg-6.js";import"./useForkRef-Dg5HCZjH.js";import"./ButtonBase-DG2qOmNJ.js";import"./useTimeout-Caar1w0_.js";import"./TransitionGroupContext-CTqiJmAL.js";import"./useIsFocusVisible-kKmNRUXV.js";import"./useEventCallback-rxG9GCI1.js";import"./listItemTextClasses-CQaHVKTz.js";import"./dividerClasses-BVnYb8lf.js";import"./Box-B4yDLkDm.js";import"./useTheme-C1aVjhx_.js";import"./Button-DnAuDp1s.js";import"./useId-C0_knTX8.js";import"./CircularProgress-DCuTWsso.js";import"./Menu-D3OPfHli.js";import"./index-xeTtEoR5.js";import"./useSlotProps-xExk7eqi.js";import"./mergeSlotProps-D0R3fJWy.js";import"./isHostComponent-DVu5iVWx.js";import"./Popover-DZ6r3iRc.js";import"./Grow-BK3n8APd.js";import"./useTheme-DVj2CI2E.js";import"./utils-CiCX3onH.js";import"./index-BAcUCDwH.js";import"./index-BVoldrdP.js";import"./getReactElementRef-40wuMu9m.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Modal-CUw12K15.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-79c61KSa.js";import"./Backdrop-Bb5spx6G.js";import"./Paper-Dib-hOey.js";import"./MenuList-D-LNiX5l.js";const ao={title:"Components/Menu/Menu",component:a,tags:["autodocs"]},t={render:l=>{const[e,i]=u.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(d,{variant:"contained",onClick:c=>i(c.currentTarget),children:"Open Menu"}),o.jsxs(a,{anchorEl:e,open:!!e,onClose:r,...l,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const lo=["Base"];export{t as Base,lo as __namedExportsOrder,ao as default};
