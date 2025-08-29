import{r as l,j as o}from"./iframe-CPQWTtPx.js";import{P as n}from"./Popover-CwKBNv1J.js";import"./preload-helper-D9Z9MdNV.js";import"./Popover-DFYn66xo.js";import"./isHostComponent-DVu5iVWx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-A_Glp2nr.js";import"./mergeSlotProps-CC7Q4nyl.js";import"./useForkRef-BakhbzqY.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-XH1gVCTx.js";import"./useTheme-T4B27w73.js";import"./utils-ETLqDsx7.js";import"./TransitionGroupContext-Cfd4JEJX.js";import"./index-ClHgv_2Q.js";import"./index-DdDY9x1M.js";import"./useTimeout-DTjciWwP.js";import"./getReactElementRef-zlErzI_n.js";import"./mergeSlotProps-B0p2lkCa.js";import"./styled-CVYEzxfA.js";import"./Modal-B6dHYExC.js";import"./memoTheme-BaYEZ6jo.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-Cj11N6aI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Eo5Y0Fep.js";import"./Backdrop-BpFn6bBk.js";import"./Paper-B8p_ssOJ.js";const G={title:"Components/Popover",component:n,tags:["autodocs"]},e={render:p=>{const[t,r]=l.useState(null),s=m=>{r(m.currentTarget)},i=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:s,children:"Toggle Popover"}),o.jsx(n,{...p,id:"demo",open:!!t,anchorEl:t,onClose:i,children:"The content of the Popover."})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
