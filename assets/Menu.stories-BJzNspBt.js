import{r as a,j as o}from"./iframe-G5ZpE7QO.js";import{M as n}from"./MenuItem-CQ7Cxxl9.js";import{B as l}from"./Button-wD0cBa7m.js";import{M as m}from"./Menu-nhBa3qcb.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuItem-eDVnLRQ4.js";import"./styled-B19C_ToH.js";import"./memoTheme-yIZRShux.js";import"./ListContext-C9b8DO9_.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useForkRef-D2tk6x-x.js";import"./ButtonBase-DT2_oOoC.js";import"./useTimeout-CjFhj00D.js";import"./TransitionGroupContext-DdCBOnAD.js";import"./useEventCallback-CCbompB-.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-CiRxluPw.js";import"./Box-D4a9ddNd.js";import"./Tooltip-B3e3t0d-.js";import"./Typography-BgxAaF2H.js";import"./Typography-C-S4zNgT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-B138dJGz.js";import"./useSlot-Dnn0ZK68.js";import"./mergeSlotProps-DtAb3QtM.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-BsGi7h6u.js";import"./getReactElementRef-DhAmtzfE.js";import"./Grow-CPMU4Gxv.js";import"./utils-BY4JAHKj.js";import"./index-BMvGbyKB.js";import"./index-BOY60yfB.js";import"./Popper-C5STi-k-.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CSHLtsMQ.js";import"./useSlotProps-RR2uP_3d.js";import"./Button-D5lq0aSm.js";import"./CircularProgress-DU1PGsgU.js";import"./Menu-D1NUX130.js";import"./Popover-Zy7MGOxg.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-IEfrjphi.js";import"./Modal-ZvXrb2Ac.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-XPtT8SSm.js";import"./Paper-BiDxZ156.js";import"./MenuList-C1j_LIKx.js";const po={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},t={render:p=>{const[e,i]=a.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(l,{variant:"contained",onClick:s=>i(s.currentTarget),children:"Open Menu"}),o.jsxs(m,{anchorEl:e,open:!!e,onClose:r,...p,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
