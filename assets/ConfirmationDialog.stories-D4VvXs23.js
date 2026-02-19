import{r as s,j as o}from"./iframe-CXZ_NyuK.js";import{B as m}from"./Button-DLTGKrGg.js";import{C as p}from"./ConfirmationDialog-DPp9jMjO.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-DDnKXK4R.js";import"./Typography-DNXmMN63.js";import"./Typography-eBWB5IMU.js";import"./memoTheme-DTk_V_hg.js";import"./styled-BvUIjKhn.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-DWoggi07.js";import"./useSlot-ML2559-c.js";import"./mergeSlotProps-MFdmIzEm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CG8Sv1UH.js";import"./useTimeout-ZSFSp5cI.js";import"./useControlled-HlXZK1Hp.js";import"./useEventCallback-EozOT64W.js";import"./getReactElementRef-DWRjfN76.js";import"./Grow-BNrzv2mz.js";import"./utils-DFraDq1z.js";import"./TransitionGroupContext-CxxqYawP.js";import"./index-BvG9M3NN.js";import"./index-By5H4shY.js";import"./Popper-329D8CB1.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-BKU-ZVzg.js";import"./useSlotProps-lLW0FBW-.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-BEeFVL2s.js";import"./Button-Cd7qYsOu.js";import"./ButtonBase-C7cht_mo.js";import"./CircularProgress-C5n-wVtT.js";import"./TextField-D1C0ODzn.js";import"./TextField-Dvut5_Ww.js";import"./useFormControl-DG3vJQE-.js";import"./InputBase-j-qFhmyF.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-8zE6iEsR.js";import"./Menu-C6_HQ9Cz.js";import"./Popover-CadfQ21_.js";import"./mergeSlotProps-Cw1N6ud7.js";import"./Modal-CuHv0e9C.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-EFsSiZOY.js";import"./Paper-DWrtNxDa.js";import"./MenuList-DB-HnPRY.js";import"./ListContext-C8lwboQi.js";import"./createSvgIcon-CwIJRQJW.js";import"./isMuiElement-CUSA2aUE.js";import"./Dialog-DgEZY7Sb.js";import"./DialogActions-CCEDMIbq.js";import"./DialogActions-Chhh3DWD.js";import"./DialogContent-9UYA0Bsa.js";import"./DialogContent-CYoKnpud.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-YEG0T-xg.js";import"./DialogContext-BrehRoKC.js";import"./Dialog-CEh_NiOt.js";import"./IconButton-Bjku2Iu_.js";import"./IconButton-DBCDmklt.js";const Oo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
