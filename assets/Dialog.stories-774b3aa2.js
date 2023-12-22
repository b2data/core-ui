import{j as t}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{B as l}from"./Button-2c9b320b.js";import{D as s}from"./Dialog-18770179.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-f7fbaf76.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./generateUtilityClasses-802c53db.js";import"./styled-3543814b.js";import"./clsx-63d16a80.js";import"./useThemeProps-8e2a0e37.js";import"./Button-3b1980ee.js";import"./ButtonBase-031fb489.js";import"./emotion-react.browser.esm-13bdab44.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-9ca792e3.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./CircularProgress-29f9ddb9.js";import"./DialogActions-00ff0dd4.js";import"./DialogActions-5b58ba0f.js";import"./DialogContent-9cf19324.js";import"./DialogContent-aa41376b.js";import"./dialogTitleClasses-6027551b.js";import"./DialogTitle-453f8a08.js";import"./DialogContext-b168eed1.js";import"./Typography-65ef5db8.js";import"./extendSxProp-69c75e3e.js";import"./Dialog-118bc398.js";import"./useTheme-b04d84f2.js";import"./Backdrop-b5fe5510.js";import"./utils-32a282cb.js";import"./index-2801d3c9.js";import"./Modal-7c84a4aa.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-00f30b1b.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-c4298f7a.js";const it={title:"Components/Dialogs/Dialog",component:s,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:n=>{const[p,r]=m.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(l,{onClick:()=>r(!0),children:"open"}),t.jsx(s,{...n,open:p,onClose:()=>r(!1)})]})}};var e,i,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
//# sourceMappingURL=Dialog.stories-774b3aa2.js.map
