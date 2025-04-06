import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-DQLiH3RP.js";import{P as s}from"./Popper-CI4xGAPQ.js";import"./Popper-BQjGEA96.js";import"./index-DgnjHyRg.js";import"./index-PKGOc6w3.js";import"./identifier-DtIXL9n7.js";import"./generateUtilityClasses-KoSbOHxf.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DIoQGYRy.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./useForkRef-8i08ZgmQ.js";import"./getReactElementRef-DW0MqppP.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./useSlotProps-CWRXRlhi.js";import"./resolveComponentProps-Bi1IQseL.js";import"./styled-BJ0TTCEB.js";import"./DefaultPropsProvider-CbX9bpU7.js";const L={title:"Components/Popper",component:s,tags:["autodocs"]},o={render:i=>{const[a,c]=t.useState(!1),[d,l]=t.useState(null),m=u=>{l(u.currentTarget),c(h=>!h)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{"aria-describedby":"demo",type:"button",onClick:m,children:"Toggle Popper"}),e.jsx(s,{...i,id:"demo",open:a,anchorEl:d,children:e.jsx("div",{style:{border:"1px solid red",background:"white",padding:8},children:"The content of the Popper."})})]})}};var n,r,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(r=o.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const R=["Base"];export{o as Base,R as __namedExportsOrder,L as default};
