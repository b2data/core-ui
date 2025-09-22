import{r as s,j as o}from"./iframe-BjsjcTCH.js";import{B as m}from"./Button-fupQ1Nhc.js";import{C as p}from"./ConfirmationDialog-fILA6v6S.js";import"./preload-helper-D9Z9MdNV.js";import"./Tooltip-CySb7oCo.js";import"./Typography-CsaR6tVH.js";import"./Typography-B8xzsPaS.js";import"./memoTheme-BkiB6XT-.js";import"./styled-B_VYI8z9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-Bdxx-ZzA.js";import"./useSlot-_7UiI0BH.js";import"./mergeSlotProps-Bba1iLBA.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CFOv3ZhY.js";import"./useTimeout-CGfVXgdi.js";import"./useControlled-U77RKmuN.js";import"./useEventCallback-Cx1VukeI.js";import"./getReactElementRef-BzEn9AjC.js";import"./Grow-B45jD6oF.js";import"./utils-C829QIR_.js";import"./TransitionGroupContext-DktGN6vV.js";import"./index-B6TwdEj4.js";import"./index-SVAzG-T_.js";import"./Popper-BVnajaSs.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-_D9UOzoy.js";import"./useSlotProps-B8t0lEUz.js";import"./isFocusVisible-B8k4qzLc.js";import"./Box-DHB9hgUt.js";import"./Button-brVShAc1.js";import"./ButtonBase-CkJtUOr4.js";import"./CircularProgress-D0bWzO0z.js";import"./TextField-DXJ3l7BH.js";import"./TextField-B0qT-cvg.js";import"./useFormControl-DV89jgTs.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CPiPdEi_.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-DpvVwx05.js";import"./Menu-w4TTDU8h.js";import"./Popover-DdIWv69b.js";import"./mergeSlotProps-Dw6Vk27m.js";import"./Modal-BlMYs-AT.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B0Qd6KlM.js";import"./Paper-CztJE2D3.js";import"./MenuList-Du58ZBpe.js";import"./ListContext-Y-dn3Bui.js";import"./createSvgIcon-BWDMKnaQ.js";import"./isMuiElement-DqggRh2f.js";import"./Dialog-o0bHGwIv.js";import"./DialogActions-B9nDXdS0.js";import"./DialogActions-ChreXdJJ.js";import"./DialogContent-C68lD9Cy.js";import"./DialogContent-BQa8PvFR.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./DialogTitle-DeJpkof4.js";import"./DialogContext-7Fzgb-zY.js";import"./Dialog-0HkUIWtj.js";import"./IconButton-5vGrSHtF.js";import"./IconButton-CzfJHRHW.js";const jo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
