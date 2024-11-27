import{j as t}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{B as l}from"./Button-1bce3acf.js";import{D as s}from"./Dialog-a2c6fe38.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-afe70497.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./generateUtilityClasses-8f2c365e.js";import"./styled-938ba038.js";import"./index-b47fffdc.js";import"./useThemeProps-bf98364a.js";import"./Button-109bab0c.js";import"./ButtonBase-d6010b8e.js";import"./emotion-react.browser.esm-42739ee1.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./CircularProgress-5fce7acd.js";import"./DialogActions-12c6abbe.js";import"./DialogActions-7a8baa7d.js";import"./DialogContent-6418d6c7.js";import"./DialogContent-b824a4a6.js";import"./dialogTitleClasses-605e5615.js";import"./DialogTitle-2f30fffd.js";import"./DialogContext-b168eed1.js";import"./Typography-697659b2.js";import"./extendSxProp-50a8832f.js";import"./Dialog-edc48e4b.js";import"./useTheme-9d477022.js";import"./Backdrop-7a9c79a0.js";import"./utils-eb1a1c61.js";import"./index-2801d3c9.js";import"./Modal-557ea229.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-761aac92.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-b8e9baec.js";const it={title:"Components/Dialogs/Dialog",component:s,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:n=>{const[p,r]=m.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(l,{onClick:()=>r(!0),children:"open"}),t.jsx(s,{...n,open:p,onClose:()=>r(!1)})]})}};var e,i,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const at=["Base"];export{o as Base,at as __namedExportsOrder,it as default};
//# sourceMappingURL=Dialog.stories-ab545ae4.js.map
