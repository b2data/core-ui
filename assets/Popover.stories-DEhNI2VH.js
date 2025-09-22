import{r as l,j as o}from"./iframe-BjsjcTCH.js";import{P as n}from"./Popover-CUTJyg0j.js";import"./preload-helper-D9Z9MdNV.js";import"./Popover-DdIWv69b.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-_7UiI0BH.js";import"./mergeSlotProps-Bba1iLBA.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CFOv3ZhY.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-B45jD6oF.js";import"./useTheme-Bdxx-ZzA.js";import"./utils-C829QIR_.js";import"./TransitionGroupContext-DktGN6vV.js";import"./index-B6TwdEj4.js";import"./index-SVAzG-T_.js";import"./useTimeout-CGfVXgdi.js";import"./getReactElementRef-BzEn9AjC.js";import"./mergeSlotProps-Dw6Vk27m.js";import"./styled-B_VYI8z9.js";import"./Modal-BlMYs-AT.js";import"./memoTheme-BkiB6XT-.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-Cx1VukeI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-_D9UOzoy.js";import"./Backdrop-B0Qd6KlM.js";import"./Paper-CztJE2D3.js";const G={title:"Components/Popover",component:n,tags:["autodocs"]},e={render:p=>{const[t,r]=l.useState(null),s=m=>{r(m.currentTarget)},i=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:s,children:"Toggle Popover"}),o.jsx(n,{...p,id:"demo",open:!!t,anchorEl:t,onClose:i,children:"The content of the Popover."})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
