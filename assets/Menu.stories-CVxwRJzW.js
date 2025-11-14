import{r as a,j as o}from"./iframe-dGl_HByf.js";import{M as n}from"./MenuItem-bwHH7Rl8.js";import{B as l}from"./Button-Jum2O74j.js";import{M as m}from"./Menu-DCZ6MhJk.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuItem-RFrbmmnc.js";import"./styled-DEb0WdcM.js";import"./memoTheme-DeSZoXTc.js";import"./ListContext-BYyRDEoC.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useForkRef-DeiEiVA6.js";import"./ButtonBase-Ds4MNNTk.js";import"./useTimeout-DyPqkLsY.js";import"./TransitionGroupContext-lAmp_jRe.js";import"./useEventCallback-DVyd9a6S.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-CiRxluPw.js";import"./Box-DMuHgZiq.js";import"./Tooltip-Cp8AsEdU.js";import"./Typography-BppJ7_xn.js";import"./Typography-Sg1bVaOt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-C2yYe7UP.js";import"./useSlot-DPBoBtB1.js";import"./mergeSlotProps-CUseLFIB.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-Dujgv5li.js";import"./getReactElementRef-CdfDsxS2.js";import"./Grow-bNX9iux7.js";import"./utils-BHBThrgb.js";import"./index-Do_FCfqT.js";import"./index-Bb6oq-ie.js";import"./Popper-DK9ACVT7.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CdUdjvXQ.js";import"./useSlotProps-BufwTs60.js";import"./Button-aRtvHn3v.js";import"./CircularProgress-Dh15xvl4.js";import"./Menu-CjiomJjs.js";import"./Popover-csEo90Cc.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-DOVOqMMH.js";import"./Modal-BztwVA-W.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-1xyMPW7d.js";import"./Paper-DgjNs4o9.js";import"./MenuList-BthqCJhV.js";const po={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},t={render:p=>{const[e,i]=a.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(l,{variant:"contained",onClick:s=>i(s.currentTarget),children:"Open Menu"}),o.jsxs(m,{anchorEl:e,open:!!e,onClose:r,...p,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
