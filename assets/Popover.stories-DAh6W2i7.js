import{r as l,j as o}from"./iframe-dGl_HByf.js";import{P as n}from"./Popover-BHBWmgp0.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-csEo90Cc.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-DPBoBtB1.js";import"./mergeSlotProps-CUseLFIB.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DeiEiVA6.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-bNX9iux7.js";import"./useTheme-C2yYe7UP.js";import"./utils-BHBThrgb.js";import"./TransitionGroupContext-lAmp_jRe.js";import"./index-Do_FCfqT.js";import"./index-Bb6oq-ie.js";import"./useTimeout-DyPqkLsY.js";import"./getReactElementRef-CdfDsxS2.js";import"./mergeSlotProps-DOVOqMMH.js";import"./styled-DEb0WdcM.js";import"./Modal-BztwVA-W.js";import"./memoTheme-DeSZoXTc.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-DVyd9a6S.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CdUdjvXQ.js";import"./Backdrop-1xyMPW7d.js";import"./Paper-DgjNs4o9.js";const G={title:"Components/Popover",component:n,tags:["autodocs"]},e={render:p=>{const[t,r]=l.useState(null),s=m=>{r(m.currentTarget)},i=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:s,children:"Toggle Popover"}),o.jsx(n,{...p,id:"demo",open:!!t,anchorEl:t,onClose:i,children:"The content of the Popover."})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
