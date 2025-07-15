import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-DQLiH3RP.js";import{B as l}from"./Button-n5a3fz95.js";import{D as a}from"./Dialog-B7f0u178.js";import"./Tooltip-DekNaFIj.js";import"./Typography-6RvDKJOJ.js";import"./Typography-Dwm8olcE.js";import"./generateUtilityClass-Crd22lsZ.js";import"./createTheme-CpmnfvGf.js";import"./index-BklahHT9.js";import"./extendSxProp-CldLvC6h.js";import"./DefaultPropsProvider-D7SvoM6x.js";import"./useTheme-BB2j23dw.js";import"./emotion-react.browser.esm-_xrAgkY8.js";import"./memoTheme-6CX_wYOL.js";import"./styled-DnAalvCx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-C4v8O9Po.js";import"./index-DgnjHyRg.js";import"./useTheme-B1gvnf2G.js";import"./useSlot-CWOIDwz3.js";import"./resolveComponentProps-DgnXLWZd.js";import"./useForkRef-8i08ZgmQ.js";import"./useTimeout-fSo4lzeS.js";import"./useControlled-Dua98H8U.js";import"./useId-CCVJt5QL.js";import"./useEventCallback-Drq2SckL.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./getReactElementRef-DW0MqppP.js";import"./Grow-MdOxVC7Q.js";import"./utils-D-OqLXMy.js";import"./TransitionGroupContext-BSJTrji_.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./Popper-CFZyeSRC.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DIoQGYRy.js";import"./useSlotProps-D4framZf.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-BUsa_nNj.js";import"./Button-DL9xouUq.js";import"./ButtonBase-5iSMQWv2.js";import"./CircularProgress-DGh0pnDC.js";import"./DialogActions-CXpbMYqo.js";import"./DialogActions-BEJqaHA0.js";import"./DialogContent-Cn2ZJGeA.js";import"./DialogContent-gmz0T1zP.js";import"./dialogTitleClasses-DF_mnKxg.js";import"./DialogTitle-D9eInWaW.js";import"./DialogContext-DJRAh6Dz.js";import"./Dialog-D9KXK6ez.js";import"./Paper-B39jOWew.js";import"./Backdrop-rM1Sqkg2.js";import"./Modal-BnKDmmi5.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";const ft={title:"Components/Dialogs/Dialog",component:a,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:m=>{const[s,r]=n.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(l,{onClick:()=>r(!0),children:"open"}),t.jsx(a,{...m,open:s,onClose:()=>r(!1)})]})}};var i,e,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(e=o.parameters)==null?void 0:e.docs)==null?void 0:p.source}}};const gt=["Base"];export{o as Base,gt as __namedExportsOrder,ft as default};
