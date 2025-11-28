import{r as s,j as t}from"./iframe-D-Af2_6K.js";import{B as n}from"./Button-60EEW6vU.js";import{D as e}from"./Dialog-BpQ_dcfH.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CNLnoWQA.js";import"./Typography-npX08WR7.js";import"./Typography-cSaQWaZJ.js";import"./memoTheme-CHvOgVXV.js";import"./styled-D-PotgPw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-D-CM3Y4q.js";import"./useSlot-28DLoccJ.js";import"./mergeSlotProps-BHlnBqKQ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C3l1oI6e.js";import"./useTimeout-B-ndypME.js";import"./useControlled-CSP_Q5Lx.js";import"./useEventCallback-CEyUjzcH.js";import"./getReactElementRef-BOSlgcp8.js";import"./Grow-BuULe6aV.js";import"./utils-CxvPnv--.js";import"./TransitionGroupContext-3wQKUh9s.js";import"./index-Dk52qgRX.js";import"./index-BbjCSB6D.js";import"./Popper-C_2e4J25.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-BJ9m9xgd.js";import"./useSlotProps-eyW4z1lC.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-PDltDmnM.js";import"./Button-Dy582WYd.js";import"./ButtonBase-aYwaoYlD.js";import"./CircularProgress-Dugx1P0N.js";import"./DialogActions-DH6l1p2W.js";import"./DialogActions-CAObwdUf.js";import"./DialogContent-FwxDKc1h.js";import"./DialogContent-0iExJNpB.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-Cs66bANg.js";import"./DialogContext-DdktUyHr.js";import"./Dialog-BM9eh2Sb.js";import"./Paper-DZK6a8PO.js";import"./Backdrop-Dk-FzEf7.js";import"./Modal-CGOe6njC.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";const et={title:"Components/Dialogs/Dialog",component:e,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:i=>{const[a,r]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>r(!0),children:"open"}),t.jsx(e,{...i,open:a,onClose:()=>r(!1)})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
