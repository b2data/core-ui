import{r as s,j as o}from"./iframe-BCz_NIWA.js";import{B as m}from"./Button-B8zZKuMl.js";import{C as p}from"./ConfirmationDialog-3ikeybMG.js";import"./preload-helper-D9Z9MdNV.js";import"./Tooltip-D_6do7UI.js";import"./Typography-CtRC1-wR.js";import"./Typography-mHJ8S4Er.js";import"./memoTheme-HkdJwuAH.js";import"./styled-DMcz7HpS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-EP6WGabO.js";import"./useSlot-DjJyu2W-.js";import"./mergeSlotProps-Efm9CLsr.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CSZsaPHq.js";import"./useTimeout-B3_rYZv9.js";import"./useControlled-BEnROTAs.js";import"./useEventCallback-2E7ndIeg.js";import"./getReactElementRef-CoeUOVJ1.js";import"./Grow-BGs0lST7.js";import"./utils-CALKgiFZ.js";import"./TransitionGroupContext-BDhOcy0u.js";import"./index-Ar8B3F6Q.js";import"./index-DV66Sa4q.js";import"./Popper-d0Kmc_Sr.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-MdsF2Uh7.js";import"./useSlotProps-BzCPMEQC.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-BDHmJulq.js";import"./Button-DLwj2Kz7.js";import"./ButtonBase-BsXO2UWG.js";import"./CircularProgress-yuAzg5x6.js";import"./TextField-3FTJWlto.js";import"./TextField-BOysAub6.js";import"./useFormControl-AYxFlkOV.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DOYvhF4Z.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-SWQ4DRU9.js";import"./Menu-mSYKJZCO.js";import"./Popover-DDIrH8pa.js";import"./mergeSlotProps-qWtR93Ew.js";import"./Modal-C2ob3-em.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-GJXCx2Bz.js";import"./Paper-CpAtm7fY.js";import"./MenuList-CE-VIX8a.js";import"./ListContext-q7ES6MQn.js";import"./createSvgIcon-BG24uHfj.js";import"./isMuiElement-zPLPz0R8.js";import"./Dialog-DT075BbN.js";import"./DialogActions-CEqbbziR.js";import"./DialogActions-3kT7nFrY.js";import"./DialogContent-BeXaueEk.js";import"./DialogContent-NaT3Bjex.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-Byz-sffw.js";import"./DialogContext-Dsjjv0n0.js";import"./Dialog-DpPMKiWQ.js";import"./IconButton-D16fh3x5.js";import"./IconButton-B1FIuSG_.js";const jo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
