import{r as s,j as o}from"./iframe-G5ZpE7QO.js";import{B as m}from"./Button-wD0cBa7m.js";import{C as p}from"./ConfirmationDialog-2iONg067.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-B3e3t0d-.js";import"./Typography-BgxAaF2H.js";import"./Typography-C-S4zNgT.js";import"./memoTheme-yIZRShux.js";import"./styled-B19C_ToH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-B138dJGz.js";import"./useSlot-Dnn0ZK68.js";import"./mergeSlotProps-DtAb3QtM.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D2tk6x-x.js";import"./useTimeout-CjFhj00D.js";import"./useControlled-BsGi7h6u.js";import"./useEventCallback-CCbompB-.js";import"./getReactElementRef-DhAmtzfE.js";import"./Grow-CPMU4Gxv.js";import"./utils-BY4JAHKj.js";import"./TransitionGroupContext-DdCBOnAD.js";import"./index-BMvGbyKB.js";import"./index-BOY60yfB.js";import"./Popper-C5STi-k-.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CSHLtsMQ.js";import"./useSlotProps-RR2uP_3d.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-D4a9ddNd.js";import"./Button-D5lq0aSm.js";import"./ButtonBase-DT2_oOoC.js";import"./CircularProgress-DU1PGsgU.js";import"./TextField-B_Z8lSdc.js";import"./TextField-C7u9RTv9.js";import"./useFormControl-eaohbf9W.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CvS70kmk.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-C_RzdKqk.js";import"./Menu-D1NUX130.js";import"./Popover-Zy7MGOxg.js";import"./mergeSlotProps-IEfrjphi.js";import"./Modal-ZvXrb2Ac.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-XPtT8SSm.js";import"./Paper-BiDxZ156.js";import"./MenuList-C1j_LIKx.js";import"./ListContext-C9b8DO9_.js";import"./createSvgIcon-By4qT70r.js";import"./isMuiElement-BDcnwjsu.js";import"./Dialog-iz4Ay1dx.js";import"./DialogActions-R_j3_Eq1.js";import"./DialogActions-DKJ_qvoS.js";import"./DialogContent-BkshIcDe.js";import"./DialogContent-D98PPRnQ.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-DdNpWc5h.js";import"./DialogContext-BDY4yFBp.js";import"./Dialog-BYU5oZXM.js";import"./IconButton-DNO3hmXz.js";import"./IconButton-DZB3-HSc.js";const jo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const ko=["Base","WithInput"];export{r as Base,e as WithInput,ko as __namedExportsOrder,jo as default};
