import{r as s,j as t}from"./iframe-Bt0NHjzt.js";import{B as n}from"./Button-BOIAoTHC.js";import{D as e}from"./Dialog-CGx-l4Jz.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-C2Ih7DGb.js";import"./Typography-D0JS2iMU.js";import"./Typography-C-487Qlx.js";import"./memoTheme-BgU4zM9I.js";import"./styled-BEaRT_Fa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-CJIytwIy.js";import"./useSlot-B6QK4qS-.js";import"./mergeSlotProps-CTGzhqDY.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-hJSLhPXd.js";import"./useTimeout-KoRalZn8.js";import"./useControlled-CipIMeEA.js";import"./useEventCallback-DRFCyGqk.js";import"./getReactElementRef-CjonG1mU.js";import"./Grow-B4ACijKG.js";import"./utils-ByOi0em4.js";import"./TransitionGroupContext-B0SjSjGE.js";import"./index-Ypw_AV9V.js";import"./index-gtplWchC.js";import"./Popper-CWeedMjN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DwdRdUOR.js";import"./useSlotProps-BJcXo2-m.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-CDPnqyyJ.js";import"./Button-C5akElcv.js";import"./ButtonBase-CyUYjTfn.js";import"./CircularProgress-CmZKsxNW.js";import"./DialogActions-BjQjV8F6.js";import"./DialogActions-CTDUCIQQ.js";import"./DialogContent-C5W1g4e5.js";import"./DialogContent-DkieYbwR.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-Cw9FmisA.js";import"./DialogContext-CGwQnJxu.js";import"./Dialog-C2ZVi1oX.js";import"./Paper-DKuqXmbM.js";import"./Backdrop-D0NTvvjC.js";import"./Modal-DoKZQW4X.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";const et={title:"Components/Dialogs/Dialog",component:e,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:i=>{const[a,r]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>r(!0),children:"open"}),t.jsx(e,{...i,open:a,onClose:()=>r(!1)})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
