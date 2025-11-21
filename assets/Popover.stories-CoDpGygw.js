import{r as l,j as o}from"./iframe-G5ZpE7QO.js";import{P as n}from"./Popover-G2UNVV3M.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-Zy7MGOxg.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-Dnn0ZK68.js";import"./mergeSlotProps-DtAb3QtM.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D2tk6x-x.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CPMU4Gxv.js";import"./useTheme-B138dJGz.js";import"./utils-BY4JAHKj.js";import"./TransitionGroupContext-DdCBOnAD.js";import"./index-BMvGbyKB.js";import"./index-BOY60yfB.js";import"./useTimeout-CjFhj00D.js";import"./getReactElementRef-DhAmtzfE.js";import"./mergeSlotProps-IEfrjphi.js";import"./styled-B19C_ToH.js";import"./Modal-ZvXrb2Ac.js";import"./memoTheme-yIZRShux.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-CCbompB-.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CSHLtsMQ.js";import"./Backdrop-XPtT8SSm.js";import"./Paper-BiDxZ156.js";const G={title:"Components/Popover",component:n,tags:["autodocs"]},e={render:p=>{const[t,r]=l.useState(null),s=m=>{r(m.currentTarget)},i=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:s,children:"Toggle Popover"}),o.jsx(n,{...p,id:"demo",open:!!t,anchorEl:t,onClose:i,children:"The content of the Popover."})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
