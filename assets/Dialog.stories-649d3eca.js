import{j as t}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{B as l}from"./Button-978b87d0.js";import{D as s}from"./Dialog-18a1b06f.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-bf72f819.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./generateUtilityClasses-d818091b.js";import"./styled-8f47f2e2.js";import"./index-aa4d0353.js";import"./useThemeProps-3a07dd36.js";import"./Button-9e16b906.js";import"./ButtonBase-12b39b19.js";import"./emotion-react.browser.esm-20161b7f.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./CircularProgress-bc81b3ed.js";import"./DialogActions-bbdba032.js";import"./DialogActions-34e1807e.js";import"./DialogContent-ebe29396.js";import"./DialogContent-0150aae3.js";import"./dialogTitleClasses-e204a535.js";import"./DialogTitle-b8cdcec4.js";import"./DialogContext-b168eed1.js";import"./Typography-e48c7697.js";import"./extendSxProp-1c98bbe3.js";import"./Dialog-c040b9de.js";import"./useTheme-b9b9347b.js";import"./Backdrop-c75f29d0.js";import"./utils-6f56962a.js";import"./index-2801d3c9.js";import"./Modal-2139a970.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-8c90c05b.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-bb0aa125.js";const it={title:"Components/Dialogs/Dialog",component:s,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:n=>{const[p,r]=m.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(l,{onClick:()=>r(!0),children:"open"}),t.jsx(s,{...n,open:p,onClose:()=>r(!1)})]})}};var e,i,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
//# sourceMappingURL=Dialog.stories-649d3eca.js.map
