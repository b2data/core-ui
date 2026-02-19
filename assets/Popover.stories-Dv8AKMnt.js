import{r as l,j as o}from"./iframe-CXZ_NyuK.js";import{P as n}from"./Popover-DVtCLpg0.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-CadfQ21_.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-ML2559-c.js";import"./mergeSlotProps-MFdmIzEm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CG8Sv1UH.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BNrzv2mz.js";import"./useTheme-DWoggi07.js";import"./utils-DFraDq1z.js";import"./TransitionGroupContext-CxxqYawP.js";import"./index-BvG9M3NN.js";import"./index-By5H4shY.js";import"./useTimeout-ZSFSp5cI.js";import"./getReactElementRef-DWRjfN76.js";import"./mergeSlotProps-Cw1N6ud7.js";import"./styled-BvUIjKhn.js";import"./Modal-CuHv0e9C.js";import"./memoTheme-DTk_V_hg.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-EozOT64W.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BKU-ZVzg.js";import"./Backdrop-EFsSiZOY.js";import"./Paper-DWrtNxDa.js";const G={title:"Components/Popover",component:n,tags:["autodocs"]},e={render:p=>{const[t,r]=l.useState(null),s=m=>{r(m.currentTarget)},i=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:s,children:"Toggle Popover"}),o.jsx(n,{...p,id:"demo",open:!!t,anchorEl:t,onClose:i,children:"The content of the Popover."})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
