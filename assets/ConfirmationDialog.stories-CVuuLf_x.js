import{r as s,j as o}from"./iframe-DYeT7bW8.js";import{B as m}from"./Button-BWjkKVfk.js";import{C as p}from"./ConfirmationDialog-DNeWjXWF.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BDootB18.js";import"./Typography-DWqDGW5V.js";import"./Typography-DvpPHrRU.js";import"./memoTheme-B_iRBWsH.js";import"./styled-GE-e2l_1.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-BsUAYdxI.js";import"./useSlot-BOZP11gd.js";import"./mergeSlotProps-Cb7kcP9N.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CHATcp2n.js";import"./useTimeout-gGYJwrGn.js";import"./useControlled-DU3pSEC3.js";import"./useEventCallback-B4Rt0DiH.js";import"./getReactElementRef-BS6Q2MpD.js";import"./Grow-CosTjjLJ.js";import"./utils-CcCfpxc5.js";import"./TransitionGroupContext-FZWsME-w.js";import"./index-C_pUq534.js";import"./index-C5_6TYhN.js";import"./Popper-Dzr4Ug40.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Dnx2_fQM.js";import"./useSlotProps-DFlplrzR.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-BcGbqvGx.js";import"./Button-CW7JM5aj.js";import"./ButtonBase-DXCvwUzG.js";import"./CircularProgress-DbcXGxbX.js";import"./TextField-C1-zLkC9.js";import"./TextField-CqIpnBvE.js";import"./useFormControl-NnoCKCTX.js";import"./InputBase-CbOcAyXF.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-DlRFF2j3.js";import"./Menu-D-0-J1It.js";import"./Popover-CYiEWl9Q.js";import"./mergeSlotProps-r0Y4YYvP.js";import"./Modal-DS7lPg7H.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CENkHO8A.js";import"./Paper-RhJ94JB6.js";import"./MenuList-DfMwXBkk.js";import"./ListContext-BXO0NCTv.js";import"./createSvgIcon-DBrONcpz.js";import"./isMuiElement-ppr9mHAz.js";import"./Dialog-NN8wHB1B.js";import"./DialogActions-doCvasIf.js";import"./DialogActions-Q4N8J3aq.js";import"./DialogContent-Cez9vi-E.js";import"./DialogContent-BC2fbwme.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-DbVmc5Nv.js";import"./DialogContext-DTw3qnlM.js";import"./Dialog-FS91SPG6.js";import"./IconButton-BgZAZHJQ.js";import"./IconButton-DJ5mPgeI.js";const Oo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
