import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DQLiH3RP.js";import{P as i}from"./Popover-DDBUcx2T.js";import"./Popover-D_dhIdqU.js";import"./index-PKGOc6w3.js";import"./identifier-DtIXL9n7.js";import"./isHostComponent-DVu5iVWx.js";import"./generateUtilityClasses-KoSbOHxf.js";import"./useSlot-BXYsnuZK.js";import"./resolveComponentProps-Bi1IQseL.js";import"./useForkRef-8i08ZgmQ.js";import"./DefaultPropsProvider-CbX9bpU7.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-4JKDUPo6.js";import"./useTheme-DNsyaSfM.js";import"./useTheme-CIxVfZhu.js";import"./utils-D-OqLXMy.js";import"./TransitionGroupContext-BSJTrji_.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./useTimeout-fSo4lzeS.js";import"./getReactElementRef-DW0MqppP.js";import"./mergeSlotProps-DjPLcKkk.js";import"./styled-BJ0TTCEB.js";import"./Modal-DHBtNlyn.js";import"./memoTheme-BuPib-dq.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-Drq2SckL.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DIoQGYRy.js";import"./Backdrop-aj6OLuW3.js";import"./Paper-1rqY9H9j.js";const V={title:"Components/Popover",component:i,tags:["autodocs"]},t={render:s=>{const[r,e]=d.useState(null),l=c=>{e(c.currentTarget)},a=()=>{e(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:l,children:"Toggle Popover"}),o.jsx(i,{...s,id:"demo",open:!!r,anchorEl:r,onClose:a,children:"The content of the Popover."})]})}};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const W=["Base"];export{t as Base,W as __namedExportsOrder,V as default};
