import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as d}from"./index-61bf1805.js";import{B as f}from"./Button-978b87d0.js";import{C as p}from"./ConfirmationDialog-9b3cd291.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-bf72f819.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./generateUtilityClasses-d818091b.js";import"./styled-8f47f2e2.js";import"./index-aa4d0353.js";import"./useThemeProps-3a07dd36.js";import"./Button-9e16b906.js";import"./ButtonBase-12b39b19.js";import"./emotion-react.browser.esm-20161b7f.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./CircularProgress-bc81b3ed.js";import"./TextField-91fa0dc9.js";import"./TextField-407c5547.js";import"./useFormControl-18a13278.js";import"./Typography-e48c7697.js";import"./extendSxProp-1c98bbe3.js";import"./InputBase-c1f7c530.js";import"./index-2801d3c9.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./isHostComponent-73d6e646.js";import"./GlobalStyles-0c0a78cd.js";import"./isMuiElement-6a90d2d1.js";import"./react-is.production.min-a192e302.js";import"./Menu-c3f24bc4.js";import"./useTheme-b9b9347b.js";import"./Popover-923cd157.js";import"./Modal-2139a970.js";import"./Backdrop-c75f29d0.js";import"./utils-6f56962a.js";import"./getScrollbarSize-ac846fe6.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-8c90c05b.js";import"./Portal-c6ffb70f.js";import"./Paper-bb0aa125.js";import"./Grow-5b576062.js";import"./MenuList-229da60e.js";import"./ListContext-58194ff9.js";import"./useControlled-1b61d410.js";import"./createSvgIcon-c16984bf.js";import"./FormHelperText-5862b80c.js";import"./Dialog-18a1b06f.js";import"./DialogActions-bbdba032.js";import"./DialogActions-34e1807e.js";import"./DialogContent-ebe29396.js";import"./DialogContent-0150aae3.js";import"./dialogTitleClasses-e204a535.js";import"./DialogTitle-b8cdcec4.js";import"./DialogContext-b168eed1.js";import"./Dialog-c040b9de.js";import"./IconButton-db0848b9.js";import"./IconButton-523ac44e.js";const Fo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};var m,s,a;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: "Удалить данные",
    acceptBtn: {
      label: "Удалить",
      color: "error",
      loading: false,
      onClick: () => console.info("subbmitted")
    },
    declineBtn: {
      label: "Отмена"
    },
    content: "Внимание! После удаления все данные будут удалены"
  },
  render: props => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>open</Button>
        <ConfirmationDialog {...props} open={open} onClose={() => setOpen(false)} />
      </>;
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var l,c,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "Удалить данные",
    acceptBtn: {
      label: "Удалить",
      color: "error",
      loading: false,
      onClick: () => console.info("subbmitted")
    },
    declineBtn: {
      label: "Отмена"
    },
    content: "Вы действительно хотите удалить данные? Для подтверждения удаления введите:",
    confirmProps: {
      value: "Николай Туров",
      placeholder: "Ведите имя",
      helperText: "Для подтверждения вставьте название в это поле"
    }
  },
  render: props => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>open</Button>
        <ConfirmationDialog {...props} open={open} onClose={() => setOpen(false)} />
      </>;
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const Io=["Base","WithInput"];export{r as Base,e as WithInput,Io as __namedExportsOrder,Fo as default};
//# sourceMappingURL=ConfirmationDialog.stories-18279a3a.js.map
