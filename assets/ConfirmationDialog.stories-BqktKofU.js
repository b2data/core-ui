import{r as s,j as o}from"./iframe-D5_OA-ZK.js";import{B as m}from"./Button-bNLVIVwm.js";import{C as p}from"./ConfirmationDialog-Cj4PEoBc.js";import"./preload-helper-D9Z9MdNV.js";import"./Tooltip-_61fROz3.js";import"./Typography-EV-5Otsk.js";import"./Typography-DMv6PTFK.js";import"./memoTheme-D980zPRr.js";import"./styled-Co26MWGr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-C52RKMww.js";import"./useSlot-DWUuY1NV.js";import"./mergeSlotProps-C-NrcMNJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-XZbQ7842.js";import"./useTimeout-CRsqOtag.js";import"./useControlled-CU8XY2YV.js";import"./useEventCallback-BhmZMpnQ.js";import"./getReactElementRef-MPxDcdTs.js";import"./Grow-KtGsVPMq.js";import"./utils-1P7-SQlo.js";import"./TransitionGroupContext-Dw2CfZNK.js";import"./index-CeesYFFv.js";import"./index-Bm5Jvdhx.js";import"./Popper-BhOanR8U.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-B3BM28AW.js";import"./useSlotProps-CpeE0ta1.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-DVOVWupQ.js";import"./Button-B-P-vucM.js";import"./ButtonBase-BwGjSdxK.js";import"./CircularProgress-CgEl-gX-.js";import"./TextField-BM7fAoP-.js";import"./TextField-Bgt9yeTv.js";import"./useFormControl-CyYX7x3B.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DO7lV2Ht.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-Cw1MR6XU.js";import"./Menu-DoWry3HC.js";import"./Popover-BwEvYiR6.js";import"./mergeSlotProps-D_ebDX1k.js";import"./Modal-DQZfc3mo.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CdMV7kIU.js";import"./Paper-D7li1_zG.js";import"./MenuList-BoRrU6AY.js";import"./ListContext-D_zSJb4J.js";import"./createSvgIcon-DM0aTCU4.js";import"./isMuiElement-IdtHM0vO.js";import"./Dialog-OYTeyjWS.js";import"./DialogActions-C32nohjd.js";import"./DialogActions-UNFJqslI.js";import"./DialogContent--Rwrus2V.js";import"./DialogContent-ERPNibI4.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-DxDYKaQg.js";import"./DialogContext-_mVMXEBA.js";import"./Dialog-C4FICOJm.js";import"./IconButton-D9pQbjjR.js";import"./IconButton-CFL_Ckq2.js";const jo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
