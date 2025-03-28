import{j as e}from"./jsx-runtime-DZlKWc7q.js";import{r as t}from"./index-3dRrDZpt.js";import{P as s}from"./Popper-CozjFd0s.js";import"./Popper-B8D57J5A.js";import"./identifier-DOope7UP.js";import"./styled-Mw1EHJJT.js";import"./generateUtilityClass-CXPxvQOg.js";import"./defaultTheme-DgpnsjHP.js";import"./generateUtilityClasses-CkJG6r2x.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-79c61KSa.js";import"./index-BAcUCDwH.js";import"./index-BVoldrdP.js";import"./useForkRef-Dg5HCZjH.js";import"./getReactElementRef-40wuMu9m.js";import"./useEnhancedEffect-BJLNeg-6.js";import"./useSlotProps-xExk7eqi.js";import"./mergeSlotProps-D0R3fJWy.js";import"./isHostComponent-DVu5iVWx.js";import"./DefaultPropsProvider-BUlghEOV.js";const R={title:"Components/Popper",component:s,tags:["autodocs"]},o={render:i=>{const[a,c]=t.useState(!1),[d,m]=t.useState(null),l=u=>{m(u.currentTarget),c(h=>!h)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{"aria-describedby":"demo",type:"button",onClick:l,children:"Toggle Popper"}),e.jsx(s,{...i,id:"demo",open:a,anchorEl:d,children:e.jsx("div",{style:{border:"1px solid red",background:"white",padding:8},children:"The content of the Popper."})})]})}};var r,n,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: props => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen(previousOpen => !previousOpen);
    };
    return <>
        <button aria-describedby="demo" type="button" onClick={handleClick}>
          Toggle Popper
        </button>
        <Popper {...props} id="demo" open={open} anchorEl={anchorEl}>
          <div style={{
          border: "1px solid red",
          background: "white",
          padding: 8
        }}>
            The content of the Popper.
          </div>
        </Popper>
      </>;
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const _=["Base"];export{o as Base,_ as __namedExportsOrder,R as default};
