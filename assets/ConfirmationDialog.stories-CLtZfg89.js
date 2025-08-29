import{r as s,j as o}from"./iframe-CPQWTtPx.js";import{B as m}from"./Button-CJzhJCxW.js";import{C as p}from"./ConfirmationDialog-DS8lUjOf.js";import"./preload-helper-D9Z9MdNV.js";import"./Tooltip-nBpdw_N9.js";import"./Typography-fNUyy1zz.js";import"./Typography-I-dH0nT8.js";import"./memoTheme-BaYEZ6jo.js";import"./styled-CVYEzxfA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-T4B27w73.js";import"./useSlot-A_Glp2nr.js";import"./mergeSlotProps-CC7Q4nyl.js";import"./useForkRef-BakhbzqY.js";import"./useTimeout-DTjciWwP.js";import"./useControlled-P7ZiawrM.js";import"./useEventCallback-Cj11N6aI.js";import"./getReactElementRef-zlErzI_n.js";import"./Grow-XH1gVCTx.js";import"./utils-ETLqDsx7.js";import"./TransitionGroupContext-Cfd4JEJX.js";import"./index-ClHgv_2Q.js";import"./index-DdDY9x1M.js";import"./Popper-CsOJDGQx.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Eo5Y0Fep.js";import"./useSlotProps-BIkjHaxR.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-BeujDT_a.js";import"./Button-C712vq8Q.js";import"./ButtonBase-EDIMIaVv.js";import"./CircularProgress-32V-54TS.js";import"./TextField-_0YL0ybt.js";import"./TextField-CPvpm3Gd.js";import"./useFormControl-CcJMHY6d.js";import"./InputBase-BFRKWLmq.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-CCAOiCXN.js";import"./Menu-DYyvmYRs.js";import"./Popover-DFYn66xo.js";import"./mergeSlotProps-B0p2lkCa.js";import"./Modal-B6dHYExC.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BpFn6bBk.js";import"./Paper-B8p_ssOJ.js";import"./MenuList-Bl2p_wQH.js";import"./ListContext-BIvlDR40.js";import"./createSvgIcon-CTccOsUD.js";import"./isMuiElement-DNzBAE5e.js";import"./Dialog-Chl7TXGT.js";import"./DialogActions-VAV_zyxu.js";import"./DialogActions--neY6Xd2.js";import"./DialogContent-IqCtII7S.js";import"./DialogContent-eDovG1mN.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-BTWxtiqX.js";import"./DialogContext-CpMbjAtS.js";import"./Dialog-J2AhnkaK.js";import"./IconButton-BBXjrXJT.js";import"./IconButton-C5_XbxX9.js";const Oo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
