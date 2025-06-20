import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-DQLiH3RP.js";import{B as l}from"./Button-Q4rHrK9_.js";import{D as s}from"./Dialog-Cu86EeWa.js";import"./Button-DL9xouUq.js";import"./generateUtilityClass-Crd22lsZ.js";import"./createTheme-CpmnfvGf.js";import"./styled-DnAalvCx.js";import"./DefaultPropsProvider-D7SvoM6x.js";import"./memoTheme-6CX_wYOL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-C4v8O9Po.js";import"./useId-CCVJt5QL.js";import"./ButtonBase-5iSMQWv2.js";import"./useTimeout-fSo4lzeS.js";import"./TransitionGroupContext-BSJTrji_.js";import"./emotion-react.browser.esm-_xrAgkY8.js";import"./useForkRef-8i08ZgmQ.js";import"./useEventCallback-Drq2SckL.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DGh0pnDC.js";import"./DialogActions-EyTnhawT.js";import"./DialogActions-BEJqaHA0.js";import"./DialogContent-Cn2ZJGeA.js";import"./DialogContent-gmz0T1zP.js";import"./dialogTitleClasses-DF_mnKxg.js";import"./DialogTitle-D9eInWaW.js";import"./DialogContext-DJRAh6Dz.js";import"./Typography-Dwm8olcE.js";import"./index-BklahHT9.js";import"./extendSxProp-CldLvC6h.js";import"./useTheme-BB2j23dw.js";import"./Dialog-D9KXK6ez.js";import"./useTheme-B1gvnf2G.js";import"./useSlot-CWOIDwz3.js";import"./resolveComponentProps-DgnXLWZd.js";import"./Paper-B39jOWew.js";import"./Backdrop-rM1Sqkg2.js";import"./utils-D-OqLXMy.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./getReactElementRef-DW0MqppP.js";import"./Modal-BnKDmmi5.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DIoQGYRy.js";const st={title:"Components/Dialogs/Dialog",component:s,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:n=>{const[p,r]=m.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(l,{onClick:()=>r(!0),children:"open"}),t.jsx(s,{...n,open:p,onClose:()=>r(!1)})]})}};var e,i,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const nt=["Base"];export{o as Base,nt as __namedExportsOrder,st as default};
