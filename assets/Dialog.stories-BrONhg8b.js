import{r as s,j as t}from"./iframe-CXZ_NyuK.js";import{B as n}from"./Button-DLTGKrGg.js";import{D as e}from"./Dialog-DgEZY7Sb.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-DDnKXK4R.js";import"./Typography-DNXmMN63.js";import"./Typography-eBWB5IMU.js";import"./memoTheme-DTk_V_hg.js";import"./styled-BvUIjKhn.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-DWoggi07.js";import"./useSlot-ML2559-c.js";import"./mergeSlotProps-MFdmIzEm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CG8Sv1UH.js";import"./useTimeout-ZSFSp5cI.js";import"./useControlled-HlXZK1Hp.js";import"./useEventCallback-EozOT64W.js";import"./getReactElementRef-DWRjfN76.js";import"./Grow-BNrzv2mz.js";import"./utils-DFraDq1z.js";import"./TransitionGroupContext-CxxqYawP.js";import"./index-BvG9M3NN.js";import"./index-By5H4shY.js";import"./Popper-329D8CB1.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-BKU-ZVzg.js";import"./useSlotProps-lLW0FBW-.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-BEeFVL2s.js";import"./Button-Cd7qYsOu.js";import"./ButtonBase-C7cht_mo.js";import"./CircularProgress-C5n-wVtT.js";import"./DialogActions-CCEDMIbq.js";import"./DialogActions-Chhh3DWD.js";import"./DialogContent-9UYA0Bsa.js";import"./DialogContent-CYoKnpud.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-YEG0T-xg.js";import"./DialogContext-BrehRoKC.js";import"./Dialog-CEh_NiOt.js";import"./Paper-DWrtNxDa.js";import"./Backdrop-EFsSiZOY.js";import"./Modal-CuHv0e9C.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";const et={title:"Components/Dialogs/Dialog",component:e,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:i=>{const[a,r]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>r(!0),children:"open"}),t.jsx(e,{...i,open:a,onClose:()=>r(!1)})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
