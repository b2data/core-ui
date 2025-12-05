import{r as a,j as o}from"./iframe-iBJb36Pk.js";import{M as n}from"./MenuItem-D8UmCVla.js";import{B as l}from"./Button-D_bDPD4l.js";import{M as m}from"./Menu-Gjr8C3Rz.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuItem-CLmW3zm9.js";import"./styled-TlQKRrkf.js";import"./memoTheme-DtgnkE7u.js";import"./ListContext-li8P5Mx-.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useForkRef-9UDatCif.js";import"./ButtonBase-Ci5asRaC.js";import"./useTimeout-eQduHELe.js";import"./TransitionGroupContext-hbf9GoVf.js";import"./useEventCallback-D_a16_zg.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-CiRxluPw.js";import"./Box-CKOjLhGr.js";import"./Tooltip-CNPkqRzJ.js";import"./Typography-CwPe-AN3.js";import"./Typography-D-S9EM20.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-Dp0Qizzj.js";import"./useSlot-Srv2vCGA.js";import"./mergeSlotProps-TIAJWBPs.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-DVqxZonj.js";import"./getReactElementRef-d_M2sW3V.js";import"./Grow-CnfwRGsT.js";import"./utils-BEY0T_cS.js";import"./index-Bg8xFF6E.js";import"./index-y5eWNptS.js";import"./Popper-CQgPFu_U.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CqWY6jV5.js";import"./useSlotProps-D7iYbLCp.js";import"./Button-DtTKKbMK.js";import"./CircularProgress-CkpWt93v.js";import"./Menu-XJFD5k2Q.js";import"./Popover-nuHtHeEw.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BUQD6Sej.js";import"./Modal-DKLF1oCm.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-AMo_6TPw.js";import"./Paper-1zfGM82n.js";import"./MenuList-CwYFvy4V.js";const po={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},t={render:p=>{const[e,i]=a.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(l,{variant:"contained",onClick:s=>i(s.currentTarget),children:"Open Menu"}),o.jsxs(m,{anchorEl:e,open:!!e,onClose:r,...p,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
