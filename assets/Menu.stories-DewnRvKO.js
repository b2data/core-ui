import{r as a,j as o}from"./iframe-BCz_NIWA.js";import{M as n}from"./MenuItem-sn7NBZ18.js";import{B as l}from"./Button-B8zZKuMl.js";import{M as m}from"./Menu-CRITN5Vp.js";import"./preload-helper-D9Z9MdNV.js";import"./MenuItem-J05MlJdS.js";import"./styled-DMcz7HpS.js";import"./memoTheme-HkdJwuAH.js";import"./ListContext-q7ES6MQn.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useForkRef-CSZsaPHq.js";import"./ButtonBase-BsXO2UWG.js";import"./useTimeout-B3_rYZv9.js";import"./TransitionGroupContext-BDhOcy0u.js";import"./useEventCallback-2E7ndIeg.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-CiRxluPw.js";import"./Box-BDHmJulq.js";import"./Tooltip-D_6do7UI.js";import"./Typography-CtRC1-wR.js";import"./Typography-mHJ8S4Er.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-EP6WGabO.js";import"./useSlot-DjJyu2W-.js";import"./mergeSlotProps-Efm9CLsr.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-BEnROTAs.js";import"./getReactElementRef-CoeUOVJ1.js";import"./Grow-BGs0lST7.js";import"./utils-CALKgiFZ.js";import"./index-Ar8B3F6Q.js";import"./index-DV66Sa4q.js";import"./Popper-d0Kmc_Sr.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-MdsF2Uh7.js";import"./useSlotProps-BzCPMEQC.js";import"./Button-DLwj2Kz7.js";import"./CircularProgress-yuAzg5x6.js";import"./Menu-mSYKJZCO.js";import"./Popover-DDIrH8pa.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-qWtR93Ew.js";import"./Modal-C2ob3-em.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-GJXCx2Bz.js";import"./Paper-CpAtm7fY.js";import"./MenuList-CE-VIX8a.js";const po={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},t={render:p=>{const[e,i]=a.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(l,{variant:"contained",onClick:s=>i(s.currentTarget),children:"Open Menu"}),o.jsxs(m,{anchorEl:e,open:!!e,onClose:r,...p,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
