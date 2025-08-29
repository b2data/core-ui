import{r as a,j as o}from"./iframe-CPQWTtPx.js";import{M as n}from"./MenuItem-CgiJH3lX.js";import{B as l}from"./Button-CJzhJCxW.js";import{M as m}from"./Menu-Cc0xrcxE.js";import"./preload-helper-D9Z9MdNV.js";import"./MenuItem-vV9Uou4g.js";import"./styled-CVYEzxfA.js";import"./memoTheme-BaYEZ6jo.js";import"./ListContext-BIvlDR40.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useForkRef-BakhbzqY.js";import"./ButtonBase-EDIMIaVv.js";import"./useTimeout-DTjciWwP.js";import"./TransitionGroupContext-Cfd4JEJX.js";import"./useEventCallback-Cj11N6aI.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-CiRxluPw.js";import"./Box-BeujDT_a.js";import"./Tooltip-nBpdw_N9.js";import"./Typography-fNUyy1zz.js";import"./Typography-I-dH0nT8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-T4B27w73.js";import"./useSlot-A_Glp2nr.js";import"./mergeSlotProps-CC7Q4nyl.js";import"./useControlled-P7ZiawrM.js";import"./getReactElementRef-zlErzI_n.js";import"./Grow-XH1gVCTx.js";import"./utils-ETLqDsx7.js";import"./index-ClHgv_2Q.js";import"./index-DdDY9x1M.js";import"./Popper-CsOJDGQx.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Eo5Y0Fep.js";import"./useSlotProps-BIkjHaxR.js";import"./Button-C712vq8Q.js";import"./CircularProgress-32V-54TS.js";import"./Menu-DYyvmYRs.js";import"./Popover-DFYn66xo.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-B0p2lkCa.js";import"./Modal-B6dHYExC.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BpFn6bBk.js";import"./Paper-B8p_ssOJ.js";import"./MenuList-Bl2p_wQH.js";const po={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},t={render:p=>{const[e,i]=a.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(l,{variant:"contained",onClick:s=>i(s.currentTarget),children:"Open Menu"}),o.jsxs(m,{anchorEl:e,open:!!e,onClose:r,...p,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
