import{r as s,j as o}from"./iframe-dGl_HByf.js";import{B as m}from"./Button-Jum2O74j.js";import{C as p}from"./ConfirmationDialog-ChFwvyr-.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Cp8AsEdU.js";import"./Typography-BppJ7_xn.js";import"./Typography-Sg1bVaOt.js";import"./memoTheme-DeSZoXTc.js";import"./styled-DEb0WdcM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-C2yYe7UP.js";import"./useSlot-DPBoBtB1.js";import"./mergeSlotProps-CUseLFIB.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DeiEiVA6.js";import"./useTimeout-DyPqkLsY.js";import"./useControlled-Dujgv5li.js";import"./useEventCallback-DVyd9a6S.js";import"./getReactElementRef-CdfDsxS2.js";import"./Grow-bNX9iux7.js";import"./utils-BHBThrgb.js";import"./TransitionGroupContext-lAmp_jRe.js";import"./index-Do_FCfqT.js";import"./index-Bb6oq-ie.js";import"./Popper-DK9ACVT7.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CdUdjvXQ.js";import"./useSlotProps-BufwTs60.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-DMuHgZiq.js";import"./Button-aRtvHn3v.js";import"./ButtonBase-Ds4MNNTk.js";import"./CircularProgress-Dh15xvl4.js";import"./TextField-DVUdS8TY.js";import"./TextField-BG2iMZJy.js";import"./useFormControl-DZ1f00XB.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-P2iiVZzS.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-DNRWK6ma.js";import"./Menu-CjiomJjs.js";import"./Popover-csEo90Cc.js";import"./mergeSlotProps-DOVOqMMH.js";import"./Modal-BztwVA-W.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-1xyMPW7d.js";import"./Paper-DgjNs4o9.js";import"./MenuList-BthqCJhV.js";import"./ListContext-BYyRDEoC.js";import"./createSvgIcon-Ds2La02R.js";import"./isMuiElement-DL-iAmeM.js";import"./Dialog-D1AfL0k4.js";import"./DialogActions-Cf7O7n4J.js";import"./DialogActions-w8Eau8Rv.js";import"./DialogContent-DUqxOr9c.js";import"./DialogContent-0Bl2xvbX.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-DYCXbJRF.js";import"./DialogContext-DS-18K2V.js";import"./Dialog-BVOmcZYt.js";import"./IconButton-Kqe2SnCu.js";import"./IconButton-CGfFYOpO.js";const jo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
