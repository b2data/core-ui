import{r as t,j as e}from"./iframe-D-Af2_6K.js";import{P as o}from"./Popper-DCNfSL9g.js";import"./preload-helper-PPVm8Dsz.js";import"./Popper-C_2e4J25.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-BJ9m9xgd.js";import"./index-Dk52qgRX.js";import"./index-BbjCSB6D.js";import"./useForkRef-C3l1oI6e.js";import"./getReactElementRef-BOSlgcp8.js";import"./useSlotProps-eyW4z1lC.js";import"./mergeSlotProps-BHlnBqKQ.js";import"./isHostComponent-DVu5iVWx.js";import"./styled-D-PotgPw.js";const S={title:"Components/Popper",component:o,tags:["autodocs"]},n={render:r=>{const[p,s]=t.useState(!1),[a,i]=t.useState(null),c=d=>{i(d.currentTarget),s(l=>!l)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{"aria-describedby":"demo",type:"button",onClick:c,children:"Toggle Popper"}),e.jsx(o,{...r,id:"demo",open:p,anchorEl:a,children:e.jsx("div",{style:{border:"1px solid red",background:"white",padding:8},children:"The content of the Popper."})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
