import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-DQLiH3RP.js";import{B as l}from"./Button-_czteQ9K.js";import{D as s}from"./Dialog-BCUAGSwz.js";import"./Button-Bv80YAyb.js";import"./index-PKGOc6w3.js";import"./identifier-DtIXL9n7.js";import"./styled-BJ0TTCEB.js";import"./DefaultPropsProvider-CbX9bpU7.js";import"./memoTheme-BuPib-dq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-KoSbOHxf.js";import"./useId-CCVJt5QL.js";import"./ButtonBase-BOqIy2IP.js";import"./useTimeout-fSo4lzeS.js";import"./TransitionGroupContext-BSJTrji_.js";import"./emotion-react.browser.esm-cvNfxSC7.js";import"./useForkRef-8i08ZgmQ.js";import"./useEventCallback-Drq2SckL.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bdan-uB-.js";import"./DialogActions-NBhz1hob.js";import"./DialogActions-BJcZvHV_.js";import"./DialogContent-WeYol7yC.js";import"./DialogContent-all4eWcL.js";import"./dialogTitleClasses-Btvry50u.js";import"./DialogTitle-XjgWp8Fy.js";import"./DialogContext-DJRAh6Dz.js";import"./Typography-B3F8RKoS.js";import"./index-B4ybzDYI.js";import"./extendSxProp-CeBvtLOD.js";import"./useTheme-CIxVfZhu.js";import"./Dialog-BU5UQY2f.js";import"./useTheme-DNsyaSfM.js";import"./useSlot-BXYsnuZK.js";import"./resolveComponentProps-Bi1IQseL.js";import"./Paper-1rqY9H9j.js";import"./Backdrop-aj6OLuW3.js";import"./utils-D-OqLXMy.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./getReactElementRef-DW0MqppP.js";import"./Modal-DHBtNlyn.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DIoQGYRy.js";const st={title:"Components/Dialogs/Dialog",component:s,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:n=>{const[p,r]=m.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(l,{onClick:()=>r(!0),children:"open"}),t.jsx(s,{...n,open:p,onClose:()=>r(!1)})]})}};var e,i,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
