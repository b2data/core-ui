import{r as s,j as t}from"./iframe-BjsjcTCH.js";import{B as n}from"./Button-fupQ1Nhc.js";import{D as e}from"./Dialog-o0bHGwIv.js";import"./preload-helper-D9Z9MdNV.js";import"./Tooltip-CySb7oCo.js";import"./Typography-CsaR6tVH.js";import"./Typography-B8xzsPaS.js";import"./memoTheme-BkiB6XT-.js";import"./styled-B_VYI8z9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-Bdxx-ZzA.js";import"./useSlot-_7UiI0BH.js";import"./mergeSlotProps-Bba1iLBA.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CFOv3ZhY.js";import"./useTimeout-CGfVXgdi.js";import"./useControlled-U77RKmuN.js";import"./useEventCallback-Cx1VukeI.js";import"./getReactElementRef-BzEn9AjC.js";import"./Grow-B45jD6oF.js";import"./utils-C829QIR_.js";import"./TransitionGroupContext-DktGN6vV.js";import"./index-B6TwdEj4.js";import"./index-SVAzG-T_.js";import"./Popper-BVnajaSs.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-_D9UOzoy.js";import"./useSlotProps-B8t0lEUz.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-DHB9hgUt.js";import"./Button-brVShAc1.js";import"./ButtonBase-CkJtUOr4.js";import"./CircularProgress-D0bWzO0z.js";import"./DialogActions-B9nDXdS0.js";import"./DialogActions-ChreXdJJ.js";import"./DialogContent-C68lD9Cy.js";import"./DialogContent-BQa8PvFR.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-DeJpkof4.js";import"./DialogContext-7Fzgb-zY.js";import"./Dialog-0HkUIWtj.js";import"./Paper-CztJE2D3.js";import"./Backdrop-B0Qd6KlM.js";import"./Modal-BlMYs-AT.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";const et={title:"Components/Dialogs/Dialog",component:e,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:i=>{const[a,r]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{onClick:()=>r(!0),children:"open"}),t.jsx(e,{...i,open:a,onClose:()=>r(!1)})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
