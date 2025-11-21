import{r as s,j as t}from"./iframe-G5ZpE7QO.js";import{B as n}from"./Button-wD0cBa7m.js";import{D as e}from"./Dialog-iz4Ay1dx.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-B3e3t0d-.js";import"./Typography-BgxAaF2H.js";import"./Typography-C-S4zNgT.js";import"./memoTheme-yIZRShux.js";import"./styled-B19C_ToH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-B138dJGz.js";import"./useSlot-Dnn0ZK68.js";import"./mergeSlotProps-DtAb3QtM.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D2tk6x-x.js";import"./useTimeout-CjFhj00D.js";import"./useControlled-BsGi7h6u.js";import"./useEventCallback-CCbompB-.js";import"./getReactElementRef-DhAmtzfE.js";import"./Grow-CPMU4Gxv.js";import"./utils-BY4JAHKj.js";import"./TransitionGroupContext-DdCBOnAD.js";import"./index-BMvGbyKB.js";import"./index-BOY60yfB.js";import"./Popper-C5STi-k-.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CSHLtsMQ.js";import"./useSlotProps-RR2uP_3d.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-D4a9ddNd.js";import"./Button-D5lq0aSm.js";import"./ButtonBase-DT2_oOoC.js";import"./CircularProgress-DU1PGsgU.js";import"./DialogActions-R_j3_Eq1.js";import"./DialogActions-DKJ_qvoS.js";import"./DialogContent-BkshIcDe.js";import"./DialogContent-D98PPRnQ.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-DdNpWc5h.js";import"./DialogContext-BDY4yFBp.js";import"./Dialog-BYU5oZXM.js";import"./Paper-BiDxZ156.js";import"./Backdrop-XPtT8SSm.js";import"./Modal-ZvXrb2Ac.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";const et={title:"Components/Dialogs/Dialog",component:e,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:i=>{const[a,r]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>r(!0),children:"open"}),t.jsx(e,{...i,open:a,onClose:()=>r(!1)})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
