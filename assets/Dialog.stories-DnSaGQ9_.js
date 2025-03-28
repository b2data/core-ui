import{j as t}from"./jsx-runtime-DZlKWc7q.js";import{r as m}from"./index-3dRrDZpt.js";import{B as l}from"./Button-BrGUlhU_.js";import{D as s}from"./Dialog-DtzAV38T.js";import"./identifier-DOope7UP.js";import"./generateUtilityClasses-CkJG6r2x.js";import"./generateUtilityClass-CXPxvQOg.js";import"./Button-DnAuDp1s.js";import"./styled-Mw1EHJJT.js";import"./defaultTheme-DgpnsjHP.js";import"./DefaultPropsProvider-BUlghEOV.js";import"./ButtonBase-DG2qOmNJ.js";import"./useTimeout-Caar1w0_.js";import"./TransitionGroupContext-CTqiJmAL.js";import"./useForkRef-Dg5HCZjH.js";import"./useIsFocusVisible-kKmNRUXV.js";import"./useEventCallback-rxG9GCI1.js";import"./useEnhancedEffect-BJLNeg-6.js";import"./useId-C0_knTX8.js";import"./CircularProgress-DCuTWsso.js";import"./DialogActions-D5JUo7Pl.js";import"./DialogActions-D5CWx72o.js";import"./DialogContent-BIPcdvDQ.js";import"./DialogContent-B7S9mqw2.js";import"./dialogTitleClasses-Cxm8busp.js";import"./DialogTitle-OQIoRiv3.js";import"./DialogContext-CnhQn11x.js";import"./Typography-I7qryP9c.js";import"./Dialog-ClDV3mtb.js";import"./useTheme-DVj2CI2E.js";import"./useTheme-C1aVjhx_.js";import"./Paper-Dib-hOey.js";import"./Backdrop-Bb5spx6G.js";import"./utils-CiCX3onH.js";import"./index-BAcUCDwH.js";import"./index-BVoldrdP.js";import"./getReactElementRef-40wuMu9m.js";import"./Modal-CUw12K15.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-D0R3fJWy.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-xExk7eqi.js";import"./Portal-79c61KSa.js";const et={title:"Components/Dialogs/Dialog",component:s,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:n=>{const[p,r]=m.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(l,{onClick:()=>r(!0),children:"open"}),t.jsx(s,{...n,open:p,onClose:()=>r(!1)})]})}};var e,i,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const it=["Base"];export{o as Base,it as __namedExportsOrder,et as default};
