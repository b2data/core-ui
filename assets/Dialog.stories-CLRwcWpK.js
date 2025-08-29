import{r as s,j as t}from"./iframe-CPQWTtPx.js";import{B as n}from"./Button-CJzhJCxW.js";import{D as e}from"./Dialog-Chl7TXGT.js";import"./preload-helper-D9Z9MdNV.js";import"./Tooltip-nBpdw_N9.js";import"./Typography-fNUyy1zz.js";import"./Typography-I-dH0nT8.js";import"./memoTheme-BaYEZ6jo.js";import"./styled-CVYEzxfA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-T4B27w73.js";import"./useSlot-A_Glp2nr.js";import"./mergeSlotProps-CC7Q4nyl.js";import"./useForkRef-BakhbzqY.js";import"./useTimeout-DTjciWwP.js";import"./useControlled-P7ZiawrM.js";import"./useEventCallback-Cj11N6aI.js";import"./getReactElementRef-zlErzI_n.js";import"./Grow-XH1gVCTx.js";import"./utils-ETLqDsx7.js";import"./TransitionGroupContext-Cfd4JEJX.js";import"./index-ClHgv_2Q.js";import"./index-DdDY9x1M.js";import"./Popper-CsOJDGQx.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Eo5Y0Fep.js";import"./useSlotProps-BIkjHaxR.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-BeujDT_a.js";import"./Button-C712vq8Q.js";import"./ButtonBase-EDIMIaVv.js";import"./CircularProgress-32V-54TS.js";import"./DialogActions-VAV_zyxu.js";import"./DialogActions--neY6Xd2.js";import"./DialogContent-IqCtII7S.js";import"./DialogContent-eDovG1mN.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-BTWxtiqX.js";import"./DialogContext-CpMbjAtS.js";import"./Dialog-J2AhnkaK.js";import"./Paper-B8p_ssOJ.js";import"./Backdrop-BpFn6bBk.js";import"./Modal-B6dHYExC.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";const rt={title:"Components/Dialogs/Dialog",component:e,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:i=>{const[a,r]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>r(!0),children:"open"}),t.jsx(e,{...i,open:a,onClose:()=>r(!1)})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const et=["Base"];export{o as Base,et as __namedExportsOrder,rt as default};
