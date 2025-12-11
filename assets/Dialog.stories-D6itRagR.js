import{r as s,j as t}from"./iframe-DYeT7bW8.js";import{B as n}from"./Button-BWjkKVfk.js";import{D as e}from"./Dialog-NN8wHB1B.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BDootB18.js";import"./Typography-DWqDGW5V.js";import"./Typography-DvpPHrRU.js";import"./memoTheme-B_iRBWsH.js";import"./styled-GE-e2l_1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-BsUAYdxI.js";import"./useSlot-BOZP11gd.js";import"./mergeSlotProps-Cb7kcP9N.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CHATcp2n.js";import"./useTimeout-gGYJwrGn.js";import"./useControlled-DU3pSEC3.js";import"./useEventCallback-B4Rt0DiH.js";import"./getReactElementRef-BS6Q2MpD.js";import"./Grow-CosTjjLJ.js";import"./utils-CcCfpxc5.js";import"./TransitionGroupContext-FZWsME-w.js";import"./index-C_pUq534.js";import"./index-C5_6TYhN.js";import"./Popper-Dzr4Ug40.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Dnx2_fQM.js";import"./useSlotProps-DFlplrzR.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-BcGbqvGx.js";import"./Button-CW7JM5aj.js";import"./ButtonBase-DXCvwUzG.js";import"./CircularProgress-DbcXGxbX.js";import"./DialogActions-doCvasIf.js";import"./DialogActions-Q4N8J3aq.js";import"./DialogContent-Cez9vi-E.js";import"./DialogContent-BC2fbwme.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-DbVmc5Nv.js";import"./DialogContext-DTw3qnlM.js";import"./Dialog-FS91SPG6.js";import"./Paper-RhJ94JB6.js";import"./Backdrop-CENkHO8A.js";import"./Modal-DS7lPg7H.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";const et={title:"Components/Dialogs/Dialog",component:e,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:i=>{const[a,r]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>r(!0),children:"open"}),t.jsx(e,{...i,open:a,onClose:()=>r(!1)})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
