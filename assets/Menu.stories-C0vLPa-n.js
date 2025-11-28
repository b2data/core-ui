import{r as a,j as o}from"./iframe-D-Af2_6K.js";import{M as n}from"./MenuItem-Ctwi430B.js";import{B as l}from"./Button-60EEW6vU.js";import{M as m}from"./Menu-CRQFI9NK.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuItem-CI8c5r1i.js";import"./styled-D-PotgPw.js";import"./memoTheme-CHvOgVXV.js";import"./ListContext-E6wSDjnG.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useForkRef-C3l1oI6e.js";import"./ButtonBase-aYwaoYlD.js";import"./useTimeout-B-ndypME.js";import"./TransitionGroupContext-3wQKUh9s.js";import"./useEventCallback-CEyUjzcH.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-CiRxluPw.js";import"./Box-PDltDmnM.js";import"./Tooltip-CNLnoWQA.js";import"./Typography-npX08WR7.js";import"./Typography-cSaQWaZJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-D-CM3Y4q.js";import"./useSlot-28DLoccJ.js";import"./mergeSlotProps-BHlnBqKQ.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-CSP_Q5Lx.js";import"./getReactElementRef-BOSlgcp8.js";import"./Grow-BuULe6aV.js";import"./utils-CxvPnv--.js";import"./index-Dk52qgRX.js";import"./index-BbjCSB6D.js";import"./Popper-C_2e4J25.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-BJ9m9xgd.js";import"./useSlotProps-eyW4z1lC.js";import"./Button-Dy582WYd.js";import"./CircularProgress-Dugx1P0N.js";import"./Menu-lUTsR38I.js";import"./Popover-CjtiXRpe.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Bpu1VWGp.js";import"./Modal-CGOe6njC.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Dk-FzEf7.js";import"./Paper-DZK6a8PO.js";import"./MenuList-DoC3ciae.js";const po={title:"Components/Menu/Menu",component:m,tags:["autodocs"]},t={render:p=>{const[e,i]=a.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(l,{variant:"contained",onClick:s=>i(s.currentTarget),children:"Open Menu"}),o.jsxs(m,{anchorEl:e,open:!!e,onClose:r,...p,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
