import{r as s,j as t}from"./iframe-D5_OA-ZK.js";import{B as n}from"./Button-bNLVIVwm.js";import{D as e}from"./Dialog-OYTeyjWS.js";import"./preload-helper-D9Z9MdNV.js";import"./Tooltip-_61fROz3.js";import"./Typography-EV-5Otsk.js";import"./Typography-DMv6PTFK.js";import"./memoTheme-D980zPRr.js";import"./styled-Co26MWGr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-C52RKMww.js";import"./useSlot-DWUuY1NV.js";import"./mergeSlotProps-C-NrcMNJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-XZbQ7842.js";import"./useTimeout-CRsqOtag.js";import"./useControlled-CU8XY2YV.js";import"./useEventCallback-BhmZMpnQ.js";import"./getReactElementRef-MPxDcdTs.js";import"./Grow-KtGsVPMq.js";import"./utils-1P7-SQlo.js";import"./TransitionGroupContext-Dw2CfZNK.js";import"./index-CeesYFFv.js";import"./index-Bm5Jvdhx.js";import"./Popper-BhOanR8U.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B3BM28AW.js";import"./useSlotProps-CpeE0ta1.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-DVOVWupQ.js";import"./Button-B-P-vucM.js";import"./ButtonBase-BwGjSdxK.js";import"./CircularProgress-CgEl-gX-.js";import"./DialogActions-C32nohjd.js";import"./DialogActions-UNFJqslI.js";import"./DialogContent--Rwrus2V.js";import"./DialogContent-ERPNibI4.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-DxDYKaQg.js";import"./DialogContext-_mVMXEBA.js";import"./Dialog-C4FICOJm.js";import"./Paper-D7li1_zG.js";import"./Backdrop-CdMV7kIU.js";import"./Modal-DQZfc3mo.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";const et={title:"Components/Dialogs/Dialog",component:e,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:i=>{const[a,r]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>r(!0),children:"open"}),t.jsx(e,{...i,open:a,onClose:()=>r(!1)})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
