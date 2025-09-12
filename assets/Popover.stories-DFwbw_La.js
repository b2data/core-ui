import{r as l,j as o}from"./iframe-D5_OA-ZK.js";import{P as n}from"./Popover-D6KVdok7.js";import"./preload-helper-D9Z9MdNV.js";import"./Popover-BwEvYiR6.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-DWUuY1NV.js";import"./mergeSlotProps-C-NrcMNJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-XZbQ7842.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-KtGsVPMq.js";import"./useTheme-C52RKMww.js";import"./utils-1P7-SQlo.js";import"./TransitionGroupContext-Dw2CfZNK.js";import"./index-CeesYFFv.js";import"./index-Bm5Jvdhx.js";import"./useTimeout-CRsqOtag.js";import"./getReactElementRef-MPxDcdTs.js";import"./mergeSlotProps-D_ebDX1k.js";import"./styled-Co26MWGr.js";import"./Modal-DQZfc3mo.js";import"./memoTheme-D980zPRr.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-BhmZMpnQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-B3BM28AW.js";import"./Backdrop-CdMV7kIU.js";import"./Paper-D7li1_zG.js";const G={title:"Components/Popover",component:n,tags:["autodocs"]},e={render:p=>{const[t,r]=l.useState(null),s=m=>{r(m.currentTarget)},i=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:s,children:"Toggle Popover"}),o.jsx(n,{...p,id:"demo",open:!!t,anchorEl:t,onClose:i,children:"The content of the Popover."})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
