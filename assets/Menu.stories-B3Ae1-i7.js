import{r as a,j as o}from"./iframe-CXZ_NyuK.js";import{M as n}from"./MenuItem-CcrQ1wJC.js";import{B as l}from"./Button-DLTGKrGg.js";import{M as m}from"./Menu-MVcH3Vwo.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuItem-DYtArEDb.js";import"./styled-BvUIjKhn.js";import"./memoTheme-DTk_V_hg.js";import"./ListContext-C8lwboQi.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useForkRef-CG8Sv1UH.js";import"./ButtonBase-C7cht_mo.js";import"./useTimeout-ZSFSp5cI.js";import"./TransitionGroupContext-CxxqYawP.js";import"./useEventCallback-EozOT64W.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-CiRxluPw.js";import"./Box-BEeFVL2s.js";import"./Tooltip-DDnKXK4R.js";import"./Typography-DNXmMN63.js";import"./Typography-eBWB5IMU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-DWoggi07.js";import"./useSlot-ML2559-c.js";import"./mergeSlotProps-MFdmIzEm.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-HlXZK1Hp.js";import"./getReactElementRef-DWRjfN76.js";import"./Grow-BNrzv2mz.js";import"./utils-DFraDq1z.js";import"./index-BvG9M3NN.js";import"./index-By5H4shY.js";import"./Popper-329D8CB1.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-BKU-ZVzg.js";import"./useSlotProps-lLW0FBW-.js";import"./Button-Cd7qYsOu.js";import"./CircularProgress-C5n-wVtT.js";import"./Menu-C6_HQ9Cz.js";import"./Popover-CadfQ21_.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Cw1N6ud7.js";import"./Modal-CuHv0e9C.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-EFsSiZOY.js";import"./Paper-DWrtNxDa.js";import"./MenuList-DB-HnPRY.js";const po={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},t={render:p=>{const[e,i]=a.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(l,{variant:"contained",onClick:s=>i(s.currentTarget),children:"Open Menu"}),o.jsxs(m,{anchorEl:e,open:!!e,onClose:r,...p,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
