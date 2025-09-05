import{r as i,j as e}from"./iframe-BCz_NIWA.js";import{C as r}from"./ClickAwayListener-CtEY4coN.js";import"./preload-helper-D9Z9MdNV.js";import"./ClickAwayListener-Bnb97jWI.js";import"./useForkRef-CSZsaPHq.js";import"./getReactElementRef-CoeUOVJ1.js";import"./useEventCallback-2E7ndIeg.js";import"./ownerDocument-DW-IO8s5.js";const x={title:"Components/Click Away Listener",component:r,tags:["autodocs"]},t={render:s=>{const[o,n]=i.useState(!1);return e.jsx(r,{...s,onClickAway:()=>n(!1),children:e.jsxs("div",{children:[e.jsx("button",{onClick:()=>n(!0),children:"Open"}),o&&e.jsx("div",{children:"opned"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
