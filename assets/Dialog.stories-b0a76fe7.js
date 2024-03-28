import{j as t}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{B as l}from"./Button-c61d662a.js";import{D as s}from"./Dialog-40627297.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-dbf13da2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./generateUtilityClasses-2a7b4d5e.js";import"./styled-fa5f10e1.js";import"./clsx-5c20934d.js";import"./useThemeProps-af14b15e.js";import"./Button-79c74423.js";import"./ButtonBase-e3e89d5f.js";import"./emotion-react.browser.esm-9b27619f.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./CircularProgress-6310d3c8.js";import"./DialogActions-9346a5b9.js";import"./DialogActions-5acfd247.js";import"./DialogContent-3cb1a13b.js";import"./DialogContent-1a6db13d.js";import"./dialogTitleClasses-e1d17864.js";import"./DialogTitle-c855dc43.js";import"./DialogContext-b168eed1.js";import"./Typography-55c28fbd.js";import"./extendSxProp-5fc992c6.js";import"./Dialog-2411e2fd.js";import"./useTheme-2cc7c047.js";import"./Backdrop-4cbb43ae.js";import"./utils-5b75737a.js";import"./index-2801d3c9.js";import"./Modal-552b375e.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-4a5f3c0e.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-08c921af.js";const it={title:"Components/Dialogs/Dialog",component:s,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:n=>{const[p,r]=m.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(l,{onClick:()=>r(!0),children:"open"}),t.jsx(s,{...n,open:p,onClose:()=>r(!1)})]})}};var e,i,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
//# sourceMappingURL=Dialog.stories-b0a76fe7.js.map
