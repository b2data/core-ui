import{r as a,j as o}from"./iframe-BjsjcTCH.js";import{M as n}from"./MenuItem-CP34sf5D.js";import{B as l}from"./Button-fupQ1Nhc.js";import{M as m}from"./Menu-BTFUtlxw.js";import"./preload-helper-D9Z9MdNV.js";import"./MenuItem-Ds4qH_mg.js";import"./styled-B_VYI8z9.js";import"./memoTheme-BkiB6XT-.js";import"./ListContext-Y-dn3Bui.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useForkRef-CFOv3ZhY.js";import"./ButtonBase-CkJtUOr4.js";import"./useTimeout-CGfVXgdi.js";import"./TransitionGroupContext-DktGN6vV.js";import"./useEventCallback-Cx1VukeI.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-CiRxluPw.js";import"./Box-DHB9hgUt.js";import"./Tooltip-CySb7oCo.js";import"./Typography-CsaR6tVH.js";import"./Typography-B8xzsPaS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-Bdxx-ZzA.js";import"./useSlot-_7UiI0BH.js";import"./mergeSlotProps-Bba1iLBA.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-U77RKmuN.js";import"./getReactElementRef-BzEn9AjC.js";import"./Grow-B45jD6oF.js";import"./utils-C829QIR_.js";import"./index-B6TwdEj4.js";import"./index-SVAzG-T_.js";import"./Popper-BVnajaSs.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-_D9UOzoy.js";import"./useSlotProps-B8t0lEUz.js";import"./Button-brVShAc1.js";import"./CircularProgress-D0bWzO0z.js";import"./Menu-w4TTDU8h.js";import"./Popover-DdIWv69b.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Dw6Vk27m.js";import"./Modal-BlMYs-AT.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B0Qd6KlM.js";import"./Paper-CztJE2D3.js";import"./MenuList-Du58ZBpe.js";const po={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},t={render:p=>{const[e,i]=a.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(l,{variant:"contained",onClick:s=>i(s.currentTarget),children:"Open Menu"}),o.jsxs(m,{anchorEl:e,open:!!e,onClose:r,...p,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClose = () => setAnchorEl(null);
    return <div>
        <Button variant="contained" onClick={e => setAnchorEl(e.currentTarget)}>
          Open Menu
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} {...props}>
          <MenuItem onClick={handleClose}>Telegram</MenuItem>
          <MenuItem onClick={handleClose}>Whatsapp</MenuItem>
          <MenuItem>Mail</MenuItem>
        </Menu>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const so=["Base"];export{t as Base,so as __namedExportsOrder,po as default};
