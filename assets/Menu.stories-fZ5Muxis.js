import{r as a,j as o}from"./iframe-DYeT7bW8.js";import{M as n}from"./MenuItem-JvBY0hO5.js";import{B as l}from"./Button-BWjkKVfk.js";import{M as m}from"./Menu-jTL02Q_4.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuItem-bSLfzV8v.js";import"./styled-GE-e2l_1.js";import"./memoTheme-B_iRBWsH.js";import"./ListContext-BXO0NCTv.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useForkRef-CHATcp2n.js";import"./ButtonBase-DXCvwUzG.js";import"./useTimeout-gGYJwrGn.js";import"./TransitionGroupContext-FZWsME-w.js";import"./useEventCallback-B4Rt0DiH.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-CiRxluPw.js";import"./Box-BcGbqvGx.js";import"./Tooltip-BDootB18.js";import"./Typography-DWqDGW5V.js";import"./Typography-DvpPHrRU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-BsUAYdxI.js";import"./useSlot-BOZP11gd.js";import"./mergeSlotProps-Cb7kcP9N.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-DU3pSEC3.js";import"./getReactElementRef-BS6Q2MpD.js";import"./Grow-CosTjjLJ.js";import"./utils-CcCfpxc5.js";import"./index-C_pUq534.js";import"./index-C5_6TYhN.js";import"./Popper-Dzr4Ug40.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Dnx2_fQM.js";import"./useSlotProps-DFlplrzR.js";import"./Button-CW7JM5aj.js";import"./CircularProgress-DbcXGxbX.js";import"./Menu-D-0-J1It.js";import"./Popover-CYiEWl9Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-r0Y4YYvP.js";import"./Modal-DS7lPg7H.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CENkHO8A.js";import"./Paper-RhJ94JB6.js";import"./MenuList-DfMwXBkk.js";const po={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},t={render:p=>{const[e,i]=a.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(l,{variant:"contained",onClick:s=>i(s.currentTarget),children:"Open Menu"}),o.jsxs(m,{anchorEl:e,open:!!e,onClose:r,...p,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
