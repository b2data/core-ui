import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as d}from"./index-61bf1805.js";import{B as f}from"./Button-c61d662a.js";import{C as p}from"./ConfirmationDialog-5733a362.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-dbf13da2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./generateUtilityClasses-2a7b4d5e.js";import"./styled-fa5f10e1.js";import"./clsx-5c20934d.js";import"./useThemeProps-af14b15e.js";import"./Button-79c74423.js";import"./ButtonBase-e3e89d5f.js";import"./emotion-react.browser.esm-9b27619f.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./CircularProgress-6310d3c8.js";import"./TextField-bd5195e7.js";import"./TextField-045de448.js";import"./useFormControl-18a13278.js";import"./Typography-55c28fbd.js";import"./extendSxProp-5fc992c6.js";import"./InputBase-87cb84a6.js";import"./index-2801d3c9.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./isHostComponent-73d6e646.js";import"./GlobalStyles-d958c0e2.js";import"./isMuiElement-6a90d2d1.js";import"./react-is.production.min-a192e302.js";import"./Menu-2b7e8a24.js";import"./useTheme-2cc7c047.js";import"./Popover-9235690e.js";import"./Modal-552b375e.js";import"./Backdrop-4cbb43ae.js";import"./utils-5b75737a.js";import"./getScrollbarSize-ac846fe6.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-4a5f3c0e.js";import"./Portal-c6ffb70f.js";import"./Paper-08c921af.js";import"./Grow-8a34c90c.js";import"./MenuList-a0a2fbf1.js";import"./ListContext-58194ff9.js";import"./useControlled-1b61d410.js";import"./createSvgIcon-2385d4df.js";import"./FormHelperText-0362965d.js";import"./Dialog-40627297.js";import"./DialogActions-9346a5b9.js";import"./DialogActions-5acfd247.js";import"./DialogContent-3cb1a13b.js";import"./DialogContent-1a6db13d.js";import"./dialogTitleClasses-e1d17864.js";import"./DialogTitle-c855dc43.js";import"./DialogContext-b168eed1.js";import"./Dialog-2411e2fd.js";import"./IconButton-fd6498d4.js";import"./IconButton-5d7db8b7.js";const Fo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};var m,s,a;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
//# sourceMappingURL=ConfirmationDialog.stories-ca35eb01.js.map
