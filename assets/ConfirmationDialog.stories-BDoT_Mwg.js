import{r as s,j as o}from"./iframe-iBJb36Pk.js";import{B as m}from"./Button-D_bDPD4l.js";import{C as p}from"./ConfirmationDialog-DTkRgEA5.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CNPkqRzJ.js";import"./Typography-CwPe-AN3.js";import"./Typography-D-S9EM20.js";import"./memoTheme-DtgnkE7u.js";import"./styled-TlQKRrkf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-Dp0Qizzj.js";import"./useSlot-Srv2vCGA.js";import"./mergeSlotProps-TIAJWBPs.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-9UDatCif.js";import"./useTimeout-eQduHELe.js";import"./useControlled-DVqxZonj.js";import"./useEventCallback-D_a16_zg.js";import"./getReactElementRef-d_M2sW3V.js";import"./Grow-CnfwRGsT.js";import"./utils-BEY0T_cS.js";import"./TransitionGroupContext-hbf9GoVf.js";import"./index-Bg8xFF6E.js";import"./index-y5eWNptS.js";import"./Popper-CQgPFu_U.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CqWY6jV5.js";import"./useSlotProps-D7iYbLCp.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-CKOjLhGr.js";import"./Button-DtTKKbMK.js";import"./ButtonBase-Ci5asRaC.js";import"./CircularProgress-CkpWt93v.js";import"./TextField-BseuydFW.js";import"./TextField-B1i1CVy8.js";import"./useFormControl-B-l_EfP-.js";import"./InputBase-R-R3B2zh.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-Cq3UHSKT.js";import"./Menu-XJFD5k2Q.js";import"./Popover-nuHtHeEw.js";import"./mergeSlotProps-BUQD6Sej.js";import"./Modal-DKLF1oCm.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-AMo_6TPw.js";import"./Paper-1zfGM82n.js";import"./MenuList-CwYFvy4V.js";import"./ListContext-li8P5Mx-.js";import"./createSvgIcon-CHvlCNJv.js";import"./isMuiElement-Bc8aMRVg.js";import"./Dialog-B7Z_Tp8_.js";import"./DialogActions-MOesEqLu.js";import"./DialogActions-CsA3rROl.js";import"./DialogContent-to1J_6Hx.js";import"./DialogContent-BGp-34Ls.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-_VyFG4r3.js";import"./DialogContext-CIbjE67J.js";import"./Dialog-rUljOwZs.js";import"./IconButton-cvDBXlii.js";import"./IconButton-C85qD8F1.js";const Oo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
