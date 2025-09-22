import{r as t,j as e}from"./iframe-BjsjcTCH.js";import{P as o}from"./Popper-B-wSHak9.js";import"./preload-helper-D9Z9MdNV.js";import"./Popper-BVnajaSs.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-_D9UOzoy.js";import"./index-B6TwdEj4.js";import"./index-SVAzG-T_.js";import"./useForkRef-CFOv3ZhY.js";import"./getReactElementRef-BzEn9AjC.js";import"./useSlotProps-B8t0lEUz.js";import"./mergeSlotProps-Bba1iLBA.js";import"./isHostComponent-DVu5iVWx.js";import"./styled-B_VYI8z9.js";const S={title:"Components/Popper",component:o,tags:["autodocs"]},n={render:r=>{const[p,s]=t.useState(!1),[a,i]=t.useState(null),c=d=>{i(d.currentTarget),s(l=>!l)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{"aria-describedby":"demo",type:"button",onClick:c,children:"Toggle Popper"}),e.jsx(o,{...r,id:"demo",open:p,anchorEl:a,children:e.jsx("div",{style:{border:"1px solid red",background:"white",padding:8},children:"The content of the Popper."})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const A=["Base"];export{n as Base,A as __namedExportsOrder,S as default};
