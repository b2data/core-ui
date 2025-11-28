import{r as l,j as o}from"./iframe-D-Af2_6K.js";import{P as n}from"./Popover-PtYL4_N8.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-CjtiXRpe.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-28DLoccJ.js";import"./mergeSlotProps-BHlnBqKQ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C3l1oI6e.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BuULe6aV.js";import"./useTheme-D-CM3Y4q.js";import"./utils-CxvPnv--.js";import"./TransitionGroupContext-3wQKUh9s.js";import"./index-Dk52qgRX.js";import"./index-BbjCSB6D.js";import"./useTimeout-B-ndypME.js";import"./getReactElementRef-BOSlgcp8.js";import"./mergeSlotProps-Bpu1VWGp.js";import"./styled-D-PotgPw.js";import"./Modal-CGOe6njC.js";import"./memoTheme-CHvOgVXV.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-CEyUjzcH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BJ9m9xgd.js";import"./Backdrop-Dk-FzEf7.js";import"./Paper-DZK6a8PO.js";const G={title:"Components/Popover",component:n,tags:["autodocs"]},e={render:p=>{const[t,r]=l.useState(null),s=m=>{r(m.currentTarget)},i=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:s,children:"Toggle Popover"}),o.jsx(n,{...p,id:"demo",open:!!t,anchorEl:t,onClose:i,children:"The content of the Popover."})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return <>
        <button aria-describedby="demo" type="button" onClick={handleClick}>
          Toggle Popover
        </button>
        <Popover {...props} id="demo" open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose}>
          The content of the Popover.
        </Popover>
      </>;
  }
}`,...e.parameters?.docs?.source}}};const I=["Base"];export{e as Base,I as __namedExportsOrder,G as default};
