import{j as o}from"./jsx-runtime-DZlKWc7q.js";import{r as d}from"./index-3dRrDZpt.js";import{P as i}from"./Popover-qAlD8rg3.js";import"./Popover-DZ6r3iRc.js";import"./identifier-DOope7UP.js";import"./generateUtilityClass-CXPxvQOg.js";import"./styled-Mw1EHJJT.js";import"./defaultTheme-DgpnsjHP.js";import"./generateUtilityClasses-CkJG6r2x.js";import"./DefaultPropsProvider-BUlghEOV.js";import"./Grow-BK3n8APd.js";import"./useTheme-DVj2CI2E.js";import"./useTheme-C1aVjhx_.js";import"./utils-CiCX3onH.js";import"./TransitionGroupContext-CTqiJmAL.js";import"./index-BAcUCDwH.js";import"./index-BVoldrdP.js";import"./useTimeout-Caar1w0_.js";import"./useForkRef-Dg5HCZjH.js";import"./getReactElementRef-40wuMu9m.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./useSlotProps-xExk7eqi.js";import"./mergeSlotProps-D0R3fJWy.js";import"./isHostComponent-DVu5iVWx.js";import"./Modal-CUw12K15.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useEventCallback-rxG9GCI1.js";import"./useEnhancedEffect-BJLNeg-6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-79c61KSa.js";import"./Backdrop-Bb5spx6G.js";import"./Paper-Dib-hOey.js";const U={title:"Components/Popover",component:i,tags:["autodocs"]},t={render:s=>{const[r,e]=d.useState(null),l=c=>{e(c.currentTarget)},a=()=>{e(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:l,children:"Toggle Popover"}),o.jsx(i,{...s,id:"demo",open:!!r,anchorEl:r,onClose:a,children:"The content of the Popover."})]})}};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const V=["Base"];export{t as Base,V as __namedExportsOrder,U as default};
