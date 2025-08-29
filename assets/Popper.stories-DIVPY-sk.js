import{r as t,j as e}from"./iframe-CPQWTtPx.js";import{P as o}from"./Popper-dtNrE5ci.js";import"./preload-helper-D9Z9MdNV.js";import"./Popper-CsOJDGQx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Eo5Y0Fep.js";import"./index-ClHgv_2Q.js";import"./index-DdDY9x1M.js";import"./useForkRef-BakhbzqY.js";import"./getReactElementRef-zlErzI_n.js";import"./useSlotProps-BIkjHaxR.js";import"./mergeSlotProps-CC7Q4nyl.js";import"./styled-CVYEzxfA.js";const O={title:"Components/Popper",component:o,tags:["autodocs"]},n={render:r=>{const[p,s]=t.useState(!1),[a,i]=t.useState(null),c=d=>{i(d.currentTarget),s(l=>!l)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{"aria-describedby":"demo",type:"button",onClick:c,children:"Toggle Popper"}),e.jsx(o,{...r,id:"demo",open:p,anchorEl:a,children:e.jsx("div",{style:{border:"1px solid red",background:"white",padding:8},children:"The content of the Popper."})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const S=["Base"];export{n as Base,S as __namedExportsOrder,O as default};
