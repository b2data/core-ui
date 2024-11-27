import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as d}from"./index-61bf1805.js";import{B as f}from"./Button-1bce3acf.js";import{C as p}from"./ConfirmationDialog-6e4fb7ce.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-afe70497.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./generateUtilityClasses-8f2c365e.js";import"./styled-938ba038.js";import"./index-b47fffdc.js";import"./useThemeProps-bf98364a.js";import"./Button-109bab0c.js";import"./ButtonBase-d6010b8e.js";import"./emotion-react.browser.esm-42739ee1.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./CircularProgress-5fce7acd.js";import"./TextField-00bf6462.js";import"./TextField-4c6e2e68.js";import"./useFormControl-18a13278.js";import"./Typography-697659b2.js";import"./extendSxProp-50a8832f.js";import"./InputBase-53f23eb4.js";import"./index-2801d3c9.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./isHostComponent-73d6e646.js";import"./GlobalStyles-4b09581d.js";import"./isMuiElement-6a90d2d1.js";import"./react-is.production.min-a192e302.js";import"./Menu-a7e34ff0.js";import"./useTheme-9d477022.js";import"./Popover-55fbf5b0.js";import"./Modal-557ea229.js";import"./Backdrop-7a9c79a0.js";import"./utils-eb1a1c61.js";import"./getScrollbarSize-ac846fe6.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-761aac92.js";import"./Portal-c6ffb70f.js";import"./Paper-b8e9baec.js";import"./Grow-b56d2d19.js";import"./MenuList-8c082415.js";import"./ListContext-58194ff9.js";import"./useControlled-1b61d410.js";import"./createSvgIcon-b1b29720.js";import"./FormHelperText-625d077c.js";import"./Dialog-a2c6fe38.js";import"./DialogActions-12c6abbe.js";import"./DialogActions-7a8baa7d.js";import"./DialogContent-6418d6c7.js";import"./DialogContent-b824a4a6.js";import"./dialogTitleClasses-605e5615.js";import"./DialogTitle-2f30fffd.js";import"./DialogContext-b168eed1.js";import"./Dialog-edc48e4b.js";import"./IconButton-a9a827e6.js";import"./IconButton-efdfda35.js";const Fo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};var m,s,a;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
//# sourceMappingURL=ConfirmationDialog.stories-02ad2d85.js.map
