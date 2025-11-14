import{r as s,j as t}from"./iframe-dGl_HByf.js";import{B as n}from"./Button-Jum2O74j.js";import{D as e}from"./Dialog-D1AfL0k4.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Cp8AsEdU.js";import"./Typography-BppJ7_xn.js";import"./Typography-Sg1bVaOt.js";import"./memoTheme-DeSZoXTc.js";import"./styled-DEb0WdcM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-C2yYe7UP.js";import"./useSlot-DPBoBtB1.js";import"./mergeSlotProps-CUseLFIB.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DeiEiVA6.js";import"./useTimeout-DyPqkLsY.js";import"./useControlled-Dujgv5li.js";import"./useEventCallback-DVyd9a6S.js";import"./getReactElementRef-CdfDsxS2.js";import"./Grow-bNX9iux7.js";import"./utils-BHBThrgb.js";import"./TransitionGroupContext-lAmp_jRe.js";import"./index-Do_FCfqT.js";import"./index-Bb6oq-ie.js";import"./Popper-DK9ACVT7.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CdUdjvXQ.js";import"./useSlotProps-BufwTs60.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-DMuHgZiq.js";import"./Button-aRtvHn3v.js";import"./ButtonBase-Ds4MNNTk.js";import"./CircularProgress-Dh15xvl4.js";import"./DialogActions-Cf7O7n4J.js";import"./DialogActions-w8Eau8Rv.js";import"./DialogContent-DUqxOr9c.js";import"./DialogContent-0Bl2xvbX.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-DYCXbJRF.js";import"./DialogContext-DS-18K2V.js";import"./Dialog-BVOmcZYt.js";import"./Paper-DgjNs4o9.js";import"./Backdrop-1xyMPW7d.js";import"./Modal-BztwVA-W.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";const et={title:"Components/Dialogs/Dialog",component:e,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:i=>{const[a,r]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>r(!0),children:"open"}),t.jsx(e,{...i,open:a,onClose:()=>r(!1)})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
