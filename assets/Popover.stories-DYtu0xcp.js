import{r as l,j as o}from"./iframe-Bt0NHjzt.js";import{P as n}from"./Popover-DQjXG3Cp.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-B6iscEM3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-B6QK4qS-.js";import"./mergeSlotProps-CTGzhqDY.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-hJSLhPXd.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-B4ACijKG.js";import"./useTheme-CJIytwIy.js";import"./utils-ByOi0em4.js";import"./TransitionGroupContext-B0SjSjGE.js";import"./index-Ypw_AV9V.js";import"./index-gtplWchC.js";import"./useTimeout-KoRalZn8.js";import"./getReactElementRef-CjonG1mU.js";import"./mergeSlotProps-CoXSsvkz.js";import"./styled-BEaRT_Fa.js";import"./Modal-DoKZQW4X.js";import"./memoTheme-BgU4zM9I.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-DRFCyGqk.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DwdRdUOR.js";import"./Backdrop-D0NTvvjC.js";import"./Paper-DKuqXmbM.js";const G={title:"Components/Popover",component:n,tags:["autodocs"]},e={render:p=>{const[t,r]=l.useState(null),s=m=>{r(m.currentTarget)},i=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:s,children:"Toggle Popover"}),o.jsx(n,{...p,id:"demo",open:!!t,anchorEl:t,onClose:i,children:"The content of the Popover."})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
