import{r as a,j as o}from"./iframe-D5_OA-ZK.js";import{M as n}from"./MenuItem-BZHECmxU.js";import{B as l}from"./Button-bNLVIVwm.js";import{M as m}from"./Menu-DZi7EsR3.js";import"./preload-helper-D9Z9MdNV.js";import"./MenuItem-FrjcPS8n.js";import"./styled-Co26MWGr.js";import"./memoTheme-D980zPRr.js";import"./ListContext-D_zSJb4J.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useForkRef-XZbQ7842.js";import"./ButtonBase-BwGjSdxK.js";import"./useTimeout-CRsqOtag.js";import"./TransitionGroupContext-Dw2CfZNK.js";import"./useEventCallback-BhmZMpnQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-CiRxluPw.js";import"./Box-DVOVWupQ.js";import"./Tooltip-_61fROz3.js";import"./Typography-EV-5Otsk.js";import"./Typography-DMv6PTFK.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-C52RKMww.js";import"./useSlot-DWUuY1NV.js";import"./mergeSlotProps-C-NrcMNJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-CU8XY2YV.js";import"./getReactElementRef-MPxDcdTs.js";import"./Grow-KtGsVPMq.js";import"./utils-1P7-SQlo.js";import"./index-CeesYFFv.js";import"./index-Bm5Jvdhx.js";import"./Popper-BhOanR8U.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B3BM28AW.js";import"./useSlotProps-CpeE0ta1.js";import"./Button-B-P-vucM.js";import"./CircularProgress-CgEl-gX-.js";import"./Menu-DoWry3HC.js";import"./Popover-BwEvYiR6.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-D_ebDX1k.js";import"./Modal-DQZfc3mo.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CdMV7kIU.js";import"./Paper-D7li1_zG.js";import"./MenuList-BoRrU6AY.js";const po={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},t={render:p=>{const[e,i]=a.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(l,{variant:"contained",onClick:s=>i(s.currentTarget),children:"Open Menu"}),o.jsxs(m,{anchorEl:e,open:!!e,onClose:r,...p,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
