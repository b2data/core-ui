import{r as a,j as o}from"./iframe-Bt0NHjzt.js";import{M as n}from"./MenuItem-CgK0E1tI.js";import{B as l}from"./Button-BOIAoTHC.js";import{M as m}from"./Menu-DxqQmRlO.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuItem-CjbaUP4J.js";import"./styled-BEaRT_Fa.js";import"./memoTheme-BgU4zM9I.js";import"./ListContext-CbahI33F.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useForkRef-hJSLhPXd.js";import"./ButtonBase-CyUYjTfn.js";import"./useTimeout-KoRalZn8.js";import"./TransitionGroupContext-B0SjSjGE.js";import"./useEventCallback-DRFCyGqk.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-CiRxluPw.js";import"./Box-CDPnqyyJ.js";import"./Tooltip-C2Ih7DGb.js";import"./Typography-D0JS2iMU.js";import"./Typography-C-487Qlx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-CJIytwIy.js";import"./useSlot-B6QK4qS-.js";import"./mergeSlotProps-CTGzhqDY.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-CipIMeEA.js";import"./getReactElementRef-CjonG1mU.js";import"./Grow-B4ACijKG.js";import"./utils-ByOi0em4.js";import"./index-Ypw_AV9V.js";import"./index-gtplWchC.js";import"./Popper-CWeedMjN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DwdRdUOR.js";import"./useSlotProps-BJcXo2-m.js";import"./Button-C5akElcv.js";import"./CircularProgress-CmZKsxNW.js";import"./Menu-sG-3ifRZ.js";import"./Popover-B6iscEM3.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CoXSsvkz.js";import"./Modal-DoKZQW4X.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-D0NTvvjC.js";import"./Paper-DKuqXmbM.js";import"./MenuList-Bt7l0Gye.js";const po={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},t={render:p=>{const[e,i]=a.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(l,{variant:"contained",onClick:s=>i(s.currentTarget),children:"Open Menu"}),o.jsxs(m,{anchorEl:e,open:!!e,onClose:r,...p,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const so=["Base"];export{t as Base,so as __namedExportsOrder,po as default};
