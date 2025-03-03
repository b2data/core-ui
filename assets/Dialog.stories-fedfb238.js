import{j as t}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{B as l}from"./Button-eef0f5e5.js";import{D as s}from"./Dialog-bed09327.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-316778f4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./generateUtilityClasses-5ea778c4.js";import"./styled-9b74321f.js";import"./index-05c64dab.js";import"./defaultTheme-fea1ec9a.js";import"./Button-7cf627bc.js";import"./useThemeProps-8ddb2dd0.js";import"./ButtonBase-12de1a8d.js";import"./emotion-react.browser.esm-a2267d4c.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./CircularProgress-e82ffd5a.js";import"./DialogActions-a4bad2d4.js";import"./DialogActions-ca7da920.js";import"./DialogContent-d2720010.js";import"./DialogContent-c4c7f8da.js";import"./dialogTitleClasses-54a6956a.js";import"./DialogTitle-e67784fe.js";import"./DialogContext-b168eed1.js";import"./Typography-b72c3552.js";import"./extendSxProp-4079792f.js";import"./Dialog-3383dda6.js";import"./useTheme-b859b38f.js";import"./Backdrop-2c48098d.js";import"./utils-f86e1de4.js";import"./index-2801d3c9.js";import"./Modal-35ee554a.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-7dac0002.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-90a9c904.js";const at={title:"Components/Dialogs/Dialog",component:s,tags:["autodocs"]},o={args:{title:"Base Dialog",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",actions:[{label:"Cancel",variant:"outlined",color:"default"},{label:"Submit",variant:"contained",color:"primary"}]},render:n=>{const[p,r]=m.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(l,{onClick:()=>r(!0),children:"open"}),t.jsx(s,{...n,open:p,onClose:()=>r(!1)})]})}};var e,i,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const st=["Base"];export{o as Base,st as __namedExportsOrder,at as default};
//# sourceMappingURL=Dialog.stories-fedfb238.js.map
