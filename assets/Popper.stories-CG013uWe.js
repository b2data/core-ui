import{r as t,j as e}from"./iframe-G5ZpE7QO.js";import{P as o}from"./Popper-CpQYC7Ww.js";import"./preload-helper-PPVm8Dsz.js";import"./Popper-C5STi-k-.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CSHLtsMQ.js";import"./index-BMvGbyKB.js";import"./index-BOY60yfB.js";import"./useForkRef-D2tk6x-x.js";import"./getReactElementRef-DhAmtzfE.js";import"./useSlotProps-RR2uP_3d.js";import"./mergeSlotProps-DtAb3QtM.js";import"./isHostComponent-DVu5iVWx.js";import"./styled-B19C_ToH.js";const S={title:"Components/Popper",component:o,tags:["autodocs"]},n={render:r=>{const[p,s]=t.useState(!1),[a,i]=t.useState(null),c=d=>{i(d.currentTarget),s(l=>!l)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{"aria-describedby":"demo",type:"button",onClick:c,children:"Toggle Popper"}),e.jsx(o,{...r,id:"demo",open:p,anchorEl:a,children:e.jsx("div",{style:{border:"1px solid red",background:"white",padding:8},children:"The content of the Popper."})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
