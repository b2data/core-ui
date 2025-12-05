import{r as s,j as t}from"./iframe-iBJb36Pk.js";import{B as n}from"./Button-D_bDPD4l.js";import{D as e}from"./Dialog-B7Z_Tp8_.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CNPkqRzJ.js";import"./Typography-CwPe-AN3.js";import"./Typography-D-S9EM20.js";import"./memoTheme-DtgnkE7u.js";import"./styled-TlQKRrkf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-Dp0Qizzj.js";import"./useSlot-Srv2vCGA.js";import"./mergeSlotProps-TIAJWBPs.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-9UDatCif.js";import"./useTimeout-eQduHELe.js";import"./useControlled-DVqxZonj.js";import"./useEventCallback-D_a16_zg.js";import"./getReactElementRef-d_M2sW3V.js";import"./Grow-CnfwRGsT.js";import"./utils-BEY0T_cS.js";import"./TransitionGroupContext-hbf9GoVf.js";import"./index-Bg8xFF6E.js";import"./index-y5eWNptS.js";import"./Popper-CQgPFu_U.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CqWY6jV5.js";import"./useSlotProps-D7iYbLCp.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-CKOjLhGr.js";import"./Button-DtTKKbMK.js";import"./ButtonBase-Ci5asRaC.js";import"./CircularProgress-CkpWt93v.js";import"./DialogActions-MOesEqLu.js";import"./DialogActions-CsA3rROl.js";import"./DialogContent-to1J_6Hx.js";import"./DialogContent-BGp-34Ls.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-_VyFG4r3.js";import"./DialogContext-CIbjE67J.js";import"./Dialog-rUljOwZs.js";import"./Paper-1zfGM82n.js";import"./Backdrop-AMo_6TPw.js";import"./Modal-DKLF1oCm.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";const et={title:"Components/Dialogs/Dialog",component:e,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:i=>{const[a,r]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>r(!0),children:"open"}),t.jsx(e,{...i,open:a,onClose:()=>r(!1)})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Base Dialog",
    children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
    actions: [{
      label: "Cancel",
      variant: "outlined",
      color: "default"
    }, {
      label: "Submit",
      variant: "contained",
      color: "primary"
    }]
  },
  render: props => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>open</Button>
        <Dialog {...props} open={open} onClose={() => setOpen(false)} />
      </>;
  }
}`,...o.parameters?.docs?.source}}};const it=["Base"];export{o as Base,it as __namedExportsOrder,et as default};
