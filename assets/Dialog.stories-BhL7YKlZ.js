import{r as s,j as t}from"./iframe-BCz_NIWA.js";import{B as n}from"./Button-B8zZKuMl.js";import{D as e}from"./Dialog-DT075BbN.js";import"./preload-helper-D9Z9MdNV.js";import"./Tooltip-D_6do7UI.js";import"./Typography-CtRC1-wR.js";import"./Typography-mHJ8S4Er.js";import"./memoTheme-HkdJwuAH.js";import"./styled-DMcz7HpS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-EP6WGabO.js";import"./useSlot-DjJyu2W-.js";import"./mergeSlotProps-Efm9CLsr.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CSZsaPHq.js";import"./useTimeout-B3_rYZv9.js";import"./useControlled-BEnROTAs.js";import"./useEventCallback-2E7ndIeg.js";import"./getReactElementRef-CoeUOVJ1.js";import"./Grow-BGs0lST7.js";import"./utils-CALKgiFZ.js";import"./TransitionGroupContext-BDhOcy0u.js";import"./index-Ar8B3F6Q.js";import"./index-DV66Sa4q.js";import"./Popper-d0Kmc_Sr.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-MdsF2Uh7.js";import"./useSlotProps-BzCPMEQC.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-BDHmJulq.js";import"./Button-DLwj2Kz7.js";import"./ButtonBase-BsXO2UWG.js";import"./CircularProgress-yuAzg5x6.js";import"./DialogActions-CEqbbziR.js";import"./DialogActions-3kT7nFrY.js";import"./DialogContent-BeXaueEk.js";import"./DialogContent-NaT3Bjex.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-Byz-sffw.js";import"./DialogContext-Dsjjv0n0.js";import"./Dialog-DpPMKiWQ.js";import"./Paper-CpAtm7fY.js";import"./Backdrop-GJXCx2Bz.js";import"./Modal-C2ob3-em.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";const et={title:"Components/Dialogs/Dialog",component:e,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:i=>{const[a,r]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>r(!0),children:"open"}),t.jsx(e,{...i,open:a,onClose:()=>r(!1)})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
