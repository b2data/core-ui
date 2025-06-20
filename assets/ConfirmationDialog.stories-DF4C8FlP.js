import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DQLiH3RP.js";import{B as f}from"./Button-Q4rHrK9_.js";import{C as p}from"./ConfirmationDialog-CnQKn96V.js";import"./Button-DL9xouUq.js";import"./generateUtilityClass-Crd22lsZ.js";import"./createTheme-CpmnfvGf.js";import"./styled-DnAalvCx.js";import"./DefaultPropsProvider-D7SvoM6x.js";import"./memoTheme-6CX_wYOL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-C4v8O9Po.js";import"./useId-CCVJt5QL.js";import"./ButtonBase-5iSMQWv2.js";import"./useTimeout-fSo4lzeS.js";import"./TransitionGroupContext-BSJTrji_.js";import"./emotion-react.browser.esm-_xrAgkY8.js";import"./useForkRef-8i08ZgmQ.js";import"./useEventCallback-Drq2SckL.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DGh0pnDC.js";import"./TextField-BgOwu5Xk.js";import"./InputAdornment-CZJ618Za.js";import"./useSlot-CWOIDwz3.js";import"./resolveComponentProps-DgnXLWZd.js";import"./useFormControl-CFlSGleh.js";import"./InputBase-TgBY0iwI.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BklahHT9.js";import"./extendSxProp-CldLvC6h.js";import"./useTheme-BB2j23dw.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-Cc-WpUQs.js";import"./Menu-vbRP1Lwk.js";import"./index-DgnjHyRg.js";import"./useSlotProps-D4framZf.js";import"./Popover-CvDRWH94.js";import"./Grow-MdOxVC7Q.js";import"./useTheme-B1gvnf2G.js";import"./utils-D-OqLXMy.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./getReactElementRef-DW0MqppP.js";import"./mergeSlotProps-Dso7hb34.js";import"./Modal-BnKDmmi5.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DIoQGYRy.js";import"./Backdrop-rM1Sqkg2.js";import"./Paper-B39jOWew.js";import"./MenuList-BPJ61TbX.js";import"./ListContext-RlEJDmc_.js";import"./useControlled-Dua98H8U.js";import"./createSvgIcon-CO4HlTK9.js";import"./isMuiElement-F0FdrIHp.js";import"./Typography-Dwm8olcE.js";import"./Dialog-Cu86EeWa.js";import"./DialogActions-EyTnhawT.js";import"./DialogActions-BEJqaHA0.js";import"./DialogContent-Cn2ZJGeA.js";import"./DialogContent-gmz0T1zP.js";import"./dialogTitleClasses-DF_mnKxg.js";import"./DialogTitle-D9eInWaW.js";import"./DialogContext-DJRAh6Dz.js";import"./Dialog-D9KXK6ez.js";import"./IconButton-BK19sU96.js";import"./IconButton-OYb-j5n3.js";const Wo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};var m,s,a;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const _o=["Base","WithInput"];export{r as Base,e as WithInput,_o as __namedExportsOrder,Wo as default};
