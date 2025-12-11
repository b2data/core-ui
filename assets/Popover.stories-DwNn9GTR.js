import{r as l,j as o}from"./iframe-DYeT7bW8.js";import{P as n}from"./Popover-Dq9cdAFD.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-CYiEWl9Q.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-BOZP11gd.js";import"./mergeSlotProps-Cb7kcP9N.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CHATcp2n.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CosTjjLJ.js";import"./useTheme-BsUAYdxI.js";import"./utils-CcCfpxc5.js";import"./TransitionGroupContext-FZWsME-w.js";import"./index-C_pUq534.js";import"./index-C5_6TYhN.js";import"./useTimeout-gGYJwrGn.js";import"./getReactElementRef-BS6Q2MpD.js";import"./mergeSlotProps-r0Y4YYvP.js";import"./styled-GE-e2l_1.js";import"./Modal-DS7lPg7H.js";import"./memoTheme-B_iRBWsH.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-B4Rt0DiH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Dnx2_fQM.js";import"./Backdrop-CENkHO8A.js";import"./Paper-RhJ94JB6.js";const G={title:"Components/Popover",component:n,tags:["autodocs"]},e={render:p=>{const[t,r]=l.useState(null),s=m=>{r(m.currentTarget)},i=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:s,children:"Toggle Popover"}),o.jsx(n,{...p,id:"demo",open:!!t,anchorEl:t,onClose:i,children:"The content of the Popover."})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
