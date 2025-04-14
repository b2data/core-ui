import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DQLiH3RP.js";import{B as f}from"./Button-_czteQ9K.js";import{C as p}from"./ConfirmationDialog-Cnl-LOwf.js";import"./Button-Bv80YAyb.js";import"./index-PKGOc6w3.js";import"./identifier-DtIXL9n7.js";import"./styled-BJ0TTCEB.js";import"./DefaultPropsProvider-CbX9bpU7.js";import"./memoTheme-BuPib-dq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-KoSbOHxf.js";import"./useId-CCVJt5QL.js";import"./ButtonBase-BOqIy2IP.js";import"./useTimeout-fSo4lzeS.js";import"./TransitionGroupContext-BSJTrji_.js";import"./emotion-react.browser.esm-cvNfxSC7.js";import"./useForkRef-8i08ZgmQ.js";import"./useEventCallback-Drq2SckL.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bdan-uB-.js";import"./TextField-DP5xxDA-.js";import"./TextField-tDd7_mbr.js";import"./useFormControl-CFlSGleh.js";import"./Typography-B3F8RKoS.js";import"./index-B4ybzDYI.js";import"./extendSxProp-CeBvtLOD.js";import"./useTheme-CIxVfZhu.js";import"./useSlot-BXYsnuZK.js";import"./resolveComponentProps-Bi1IQseL.js";import"./InputBase-9cmZG5jd.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-5ymCQBNH.js";import"./Menu-BO4bTZTG.js";import"./index-DgnjHyRg.js";import"./useSlotProps-CWRXRlhi.js";import"./Popover-D_dhIdqU.js";import"./Grow-4JKDUPo6.js";import"./useTheme-DNsyaSfM.js";import"./utils-D-OqLXMy.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./getReactElementRef-DW0MqppP.js";import"./mergeSlotProps-DjPLcKkk.js";import"./Modal-DHBtNlyn.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DIoQGYRy.js";import"./Backdrop-aj6OLuW3.js";import"./Paper-1rqY9H9j.js";import"./MenuList-xibqgwYT.js";import"./ListContext-RlEJDmc_.js";import"./useControlled-Dua98H8U.js";import"./createSvgIcon-BtpK0we9.js";import"./isMuiElement-F0FdrIHp.js";import"./Dialog-BCUAGSwz.js";import"./DialogActions-NBhz1hob.js";import"./DialogActions-BJcZvHV_.js";import"./DialogContent-WeYol7yC.js";import"./DialogContent-all4eWcL.js";import"./dialogTitleClasses-Btvry50u.js";import"./DialogTitle-XjgWp8Fy.js";import"./DialogContext-DJRAh6Dz.js";import"./Dialog-BU5UQY2f.js";import"./IconButton-B6ueTWb-.js";import"./IconButton-BHpVciwy.js";const Wo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};var m,s,a;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
