import{r as s,j as o}from"./iframe-Bt0NHjzt.js";import{B as m}from"./Button-BOIAoTHC.js";import{C as p}from"./ConfirmationDialog-naTDkXPm.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-C2Ih7DGb.js";import"./Typography-D0JS2iMU.js";import"./Typography-C-487Qlx.js";import"./memoTheme-BgU4zM9I.js";import"./styled-BEaRT_Fa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-CJIytwIy.js";import"./useSlot-B6QK4qS-.js";import"./mergeSlotProps-CTGzhqDY.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-hJSLhPXd.js";import"./useTimeout-KoRalZn8.js";import"./useControlled-CipIMeEA.js";import"./useEventCallback-DRFCyGqk.js";import"./getReactElementRef-CjonG1mU.js";import"./Grow-B4ACijKG.js";import"./utils-ByOi0em4.js";import"./TransitionGroupContext-B0SjSjGE.js";import"./index-Ypw_AV9V.js";import"./index-gtplWchC.js";import"./Popper-CWeedMjN.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DwdRdUOR.js";import"./useSlotProps-BJcXo2-m.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-CDPnqyyJ.js";import"./Button-C5akElcv.js";import"./ButtonBase-CyUYjTfn.js";import"./CircularProgress-CmZKsxNW.js";import"./TextField-lt9rifhp.js";import"./TextField-XlNCdd5p.js";import"./useFormControl-CrJJaZ8v.js";import"./InputBase-Bv7eM5nS.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-UcvY9Cmh.js";import"./Menu-sG-3ifRZ.js";import"./Popover-B6iscEM3.js";import"./mergeSlotProps-CoXSsvkz.js";import"./Modal-DoKZQW4X.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-D0NTvvjC.js";import"./Paper-DKuqXmbM.js";import"./MenuList-Bt7l0Gye.js";import"./ListContext-CbahI33F.js";import"./createSvgIcon-BmHbKF__.js";import"./isMuiElement-mcr7aDks.js";import"./Dialog-CGx-l4Jz.js";import"./DialogActions-BjQjV8F6.js";import"./DialogActions-CTDUCIQQ.js";import"./DialogContent-C5W1g4e5.js";import"./DialogContent-DkieYbwR.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-Cw9FmisA.js";import"./DialogContext-CGwQnJxu.js";import"./Dialog-C2ZVi1oX.js";import"./IconButton-D5Gh2CxO.js";import"./IconButton-CNheUIxq.js";const Oo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
