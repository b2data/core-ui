import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as d}from"./index-61bf1805.js";import{B as f}from"./Button-eef0f5e5.js";import{C as p}from"./ConfirmationDialog-47cfb3e1.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-316778f4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./generateUtilityClasses-5ea778c4.js";import"./styled-9b74321f.js";import"./index-05c64dab.js";import"./defaultTheme-fea1ec9a.js";import"./Button-7cf627bc.js";import"./useThemeProps-8ddb2dd0.js";import"./ButtonBase-12de1a8d.js";import"./emotion-react.browser.esm-a2267d4c.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./CircularProgress-e82ffd5a.js";import"./TextField-3d3f8298.js";import"./TextField-c2247ace.js";import"./useFormControl-18a13278.js";import"./Typography-b72c3552.js";import"./extendSxProp-4079792f.js";import"./InputBase-c3ba5efe.js";import"./index-2801d3c9.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./isHostComponent-73d6e646.js";import"./GlobalStyles-459eeb3e.js";import"./isMuiElement-6a90d2d1.js";import"./react-is.production.min-a192e302.js";import"./Menu-e1a4cefc.js";import"./useTheme-b859b38f.js";import"./Popover-7044e2a9.js";import"./Modal-35ee554a.js";import"./Backdrop-2c48098d.js";import"./utils-f86e1de4.js";import"./getScrollbarSize-ac846fe6.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-7dac0002.js";import"./Portal-c6ffb70f.js";import"./Paper-90a9c904.js";import"./Grow-afbbb00d.js";import"./MenuList-1c32f46a.js";import"./ListContext-58194ff9.js";import"./useControlled-1b61d410.js";import"./createSvgIcon-a3973d83.js";import"./FormHelperText-e20eaad5.js";import"./Dialog-bed09327.js";import"./DialogActions-a4bad2d4.js";import"./DialogActions-ca7da920.js";import"./DialogContent-d2720010.js";import"./DialogContent-c4c7f8da.js";import"./dialogTitleClasses-54a6956a.js";import"./DialogTitle-e67784fe.js";import"./DialogContext-b168eed1.js";import"./Dialog-3383dda6.js";import"./IconButton-17a133b4.js";import"./IconButton-43c73dac.js";const Io={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};var m,s,a;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const Po=["Base","WithInput"];export{r as Base,e as WithInput,Po as __namedExportsOrder,Io as default};
//# sourceMappingURL=ConfirmationDialog.stories-235d6ec1.js.map
