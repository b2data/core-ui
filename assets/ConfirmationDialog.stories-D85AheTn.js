import{r as s,j as o}from"./iframe-D-Af2_6K.js";import{B as m}from"./Button-60EEW6vU.js";import{C as p}from"./ConfirmationDialog-DstL7vKi.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CNLnoWQA.js";import"./Typography-npX08WR7.js";import"./Typography-cSaQWaZJ.js";import"./memoTheme-CHvOgVXV.js";import"./styled-D-PotgPw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-D-CM3Y4q.js";import"./useSlot-28DLoccJ.js";import"./mergeSlotProps-BHlnBqKQ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C3l1oI6e.js";import"./useTimeout-B-ndypME.js";import"./useControlled-CSP_Q5Lx.js";import"./useEventCallback-CEyUjzcH.js";import"./getReactElementRef-BOSlgcp8.js";import"./Grow-BuULe6aV.js";import"./utils-CxvPnv--.js";import"./TransitionGroupContext-3wQKUh9s.js";import"./index-Dk52qgRX.js";import"./index-BbjCSB6D.js";import"./Popper-C_2e4J25.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-BJ9m9xgd.js";import"./useSlotProps-eyW4z1lC.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-PDltDmnM.js";import"./Button-Dy582WYd.js";import"./ButtonBase-aYwaoYlD.js";import"./CircularProgress-Dugx1P0N.js";import"./TextField-Bf0CvxJP.js";import"./TextField-DXqzD0Vj.js";import"./useFormControl-DKTUB5iQ.js";import"./InputBase-DEcSlmhN.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-CtEA3E_T.js";import"./Menu-lUTsR38I.js";import"./Popover-CjtiXRpe.js";import"./mergeSlotProps-Bpu1VWGp.js";import"./Modal-CGOe6njC.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Dk-FzEf7.js";import"./Paper-DZK6a8PO.js";import"./MenuList-DoC3ciae.js";import"./ListContext-E6wSDjnG.js";import"./createSvgIcon-BJIzGPGW.js";import"./isMuiElement-81kDcdTn.js";import"./Dialog-BpQ_dcfH.js";import"./DialogActions-DH6l1p2W.js";import"./DialogActions-CAObwdUf.js";import"./DialogContent-FwxDKc1h.js";import"./DialogContent-0iExJNpB.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-Cs66bANg.js";import"./DialogContext-DdktUyHr.js";import"./Dialog-BM9eh2Sb.js";import"./IconButton-eF68eDqk.js";import"./IconButton-BHlTne6f.js";const Oo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const jo=["Base","WithInput"];export{r as Base,e as WithInput,jo as __namedExportsOrder,Oo as default};
