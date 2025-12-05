import{r as l,j as o}from"./iframe-iBJb36Pk.js";import{P as n}from"./Popover-CC9POpos.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-nuHtHeEw.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-Srv2vCGA.js";import"./mergeSlotProps-TIAJWBPs.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-9UDatCif.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CnfwRGsT.js";import"./useTheme-Dp0Qizzj.js";import"./utils-BEY0T_cS.js";import"./TransitionGroupContext-hbf9GoVf.js";import"./index-Bg8xFF6E.js";import"./index-y5eWNptS.js";import"./useTimeout-eQduHELe.js";import"./getReactElementRef-d_M2sW3V.js";import"./mergeSlotProps-BUQD6Sej.js";import"./styled-TlQKRrkf.js";import"./Modal-DKLF1oCm.js";import"./memoTheme-DtgnkE7u.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-D_a16_zg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CqWY6jV5.js";import"./Backdrop-AMo_6TPw.js";import"./Paper-1zfGM82n.js";const G={title:"Components/Popover",component:n,tags:["autodocs"]},e={render:p=>{const[t,r]=l.useState(null),s=m=>{r(m.currentTarget)},i=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:s,children:"Toggle Popover"}),o.jsx(n,{...p,id:"demo",open:!!t,anchorEl:t,onClose:i,children:"The content of the Popover."})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
