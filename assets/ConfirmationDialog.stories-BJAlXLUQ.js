import{j as o}from"./jsx-runtime-DZlKWc7q.js";import{r as d}from"./index-3dRrDZpt.js";import{B as f}from"./Button-BrGUlhU_.js";import{C as p}from"./ConfirmationDialog-C4zBi8Qu.js";import"./identifier-DOope7UP.js";import"./generateUtilityClasses-CkJG6r2x.js";import"./generateUtilityClass-CXPxvQOg.js";import"./Button-DnAuDp1s.js";import"./styled-Mw1EHJJT.js";import"./defaultTheme-DgpnsjHP.js";import"./DefaultPropsProvider-BUlghEOV.js";import"./ButtonBase-DG2qOmNJ.js";import"./useTimeout-Caar1w0_.js";import"./TransitionGroupContext-CTqiJmAL.js";import"./useForkRef-Dg5HCZjH.js";import"./useIsFocusVisible-kKmNRUXV.js";import"./useEventCallback-rxG9GCI1.js";import"./useEnhancedEffect-BJLNeg-6.js";import"./useId-C0_knTX8.js";import"./CircularProgress-DCuTWsso.js";import"./TextField-BesppdhO.js";import"./TextField-BZH8Wt7w.js";import"./useFormControl-Dk_vwUyJ.js";import"./Typography-I7qryP9c.js";import"./InputBase-CBNHzBXe.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./GlobalStyles-8r8qBg7C.js";import"./useTheme-C1aVjhx_.js";import"./Menu-D3OPfHli.js";import"./index-xeTtEoR5.js";import"./useSlotProps-xExk7eqi.js";import"./mergeSlotProps-D0R3fJWy.js";import"./Popover-DZ6r3iRc.js";import"./Grow-BK3n8APd.js";import"./useTheme-DVj2CI2E.js";import"./utils-CiCX3onH.js";import"./index-BAcUCDwH.js";import"./index-BVoldrdP.js";import"./getReactElementRef-40wuMu9m.js";import"./Modal-CUw12K15.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-79c61KSa.js";import"./Backdrop-Bb5spx6G.js";import"./Paper-Dib-hOey.js";import"./MenuList-D-LNiX5l.js";import"./ListContext-CJ4YrkIs.js";import"./useControlled-DPuDlC9C.js";import"./createSvgIcon-CNApDc7Z.js";import"./FormHelperText-D7qwk-9G.js";import"./isMuiElement-BZL4V-eo.js";import"./Dialog-DtzAV38T.js";import"./DialogActions-D5JUo7Pl.js";import"./DialogActions-D5CWx72o.js";import"./DialogContent-BIPcdvDQ.js";import"./DialogContent-B7S9mqw2.js";import"./dialogTitleClasses-Cxm8busp.js";import"./DialogTitle-OQIoRiv3.js";import"./DialogContext-CnhQn11x.js";import"./Dialog-ClDV3mtb.js";import"./IconButton-BQNU5rqW.js";import"./IconButton-CPPCIBnV.js";const vo={title:"Components/Dialogs/Confirmation Dialog",component:p,tags:["autodocs"]},r={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}},e={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:n=>{const[i,t]=d.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(f,{onClick:()=>t(!0),children:"open"}),o.jsx(p,{...n,open:i,onClose:()=>t(!1)})]})}};var s,m,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(m=r.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var l,c,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const Fo=["Base","WithInput"];export{r as Base,e as WithInput,Fo as __namedExportsOrder,vo as default};
