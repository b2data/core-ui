import{r as l,j as o}from"./iframe-BCz_NIWA.js";import{P as n}from"./Popover-B6OZVBY2.js";import"./preload-helper-D9Z9MdNV.js";import"./Popover-DDIrH8pa.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-DjJyu2W-.js";import"./mergeSlotProps-Efm9CLsr.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CSZsaPHq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-BGs0lST7.js";import"./useTheme-EP6WGabO.js";import"./utils-CALKgiFZ.js";import"./TransitionGroupContext-BDhOcy0u.js";import"./index-Ar8B3F6Q.js";import"./index-DV66Sa4q.js";import"./useTimeout-B3_rYZv9.js";import"./getReactElementRef-CoeUOVJ1.js";import"./mergeSlotProps-qWtR93Ew.js";import"./styled-DMcz7HpS.js";import"./Modal-C2ob3-em.js";import"./memoTheme-HkdJwuAH.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-2E7ndIeg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-MdsF2Uh7.js";import"./Backdrop-GJXCx2Bz.js";import"./Paper-CpAtm7fY.js";const G={title:"Components/Popover",component:n,tags:["autodocs"]},e={render:p=>{const[t,r]=l.useState(null),s=m=>{r(m.currentTarget)},i=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:s,children:"Toggle Popover"}),o.jsx(n,{...p,id:"demo",open:!!t,anchorEl:t,onClose:i,children:"The content of the Popover."})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
