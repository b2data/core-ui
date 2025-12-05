import{r as i,j as e}from"./iframe-iBJb36Pk.js";import{C as r}from"./ClickAwayListener-BF2FdzpC.js";import"./preload-helper-PPVm8Dsz.js";import"./ClickAwayListener-C7uurnCX.js";import"./useForkRef-9UDatCif.js";import"./getReactElementRef-d_M2sW3V.js";import"./useEventCallback-D_a16_zg.js";import"./ownerDocument-DW-IO8s5.js";const x={title:"Components/Click Away Listener",component:r,tags:["autodocs"]},t={render:s=>{const[o,n]=i.useState(!1);return e.jsx(r,{...s,onClickAway:()=>n(!1),children:e.jsxs("div",{children:[e.jsx("button",{onClick:()=>n(!0),children:"Open"}),o&&e.jsx("div",{children:"opned"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [open, setOpen] = useState(false);
    return <ClickAwayListener {...props} onClickAway={() => setOpen(false)}>
        <div>
          <button onClick={() => setOpen(true)}>Open</button>
          {open && <div>opned</div>}
        </div>
      </ClickAwayListener>;
  }
}`,...t.parameters?.docs?.source}}};const k=["Base"];export{t as Base,k as __namedExportsOrder,x as default};
