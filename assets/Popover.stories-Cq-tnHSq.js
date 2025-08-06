import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DQLiH3RP.js";import{P as i}from"./Popover-dt_Bxpkh.js";import"./Popover-CvDRWH94.js";import"./generateUtilityClass-Crd22lsZ.js";import"./createTheme-CpmnfvGf.js";import"./isHostComponent-DVu5iVWx.js";import"./generateUtilityClasses-C4v8O9Po.js";import"./useSlot-CWOIDwz3.js";import"./resolveComponentProps-DgnXLWZd.js";import"./useForkRef-8i08ZgmQ.js";import"./DefaultPropsProvider-D7SvoM6x.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-MdOxVC7Q.js";import"./useTheme-B1gvnf2G.js";import"./useTheme-BB2j23dw.js";import"./utils-D-OqLXMy.js";import"./TransitionGroupContext-BSJTrji_.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./useTimeout-fSo4lzeS.js";import"./getReactElementRef-DW0MqppP.js";import"./mergeSlotProps-Dso7hb34.js";import"./styled-DnAalvCx.js";import"./Modal-BnKDmmi5.js";import"./memoTheme-6CX_wYOL.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-Drq2SckL.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DIoQGYRy.js";import"./Backdrop-rM1Sqkg2.js";import"./Paper-B39jOWew.js";const V={title:"Components/Popover",component:i,tags:["autodocs"]},t={render:s=>{const[r,e]=d.useState(null),l=c=>{e(c.currentTarget)},a=()=>{e(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:l,children:"Toggle Popover"}),o.jsx(i,{...s,id:"demo",open:!!r,anchorEl:r,onClose:a,children:"The content of the Popover."})]})}};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
