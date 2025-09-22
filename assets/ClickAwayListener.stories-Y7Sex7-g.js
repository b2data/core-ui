import{r as i,j as e}from"./iframe-BjsjcTCH.js";import{C as r}from"./ClickAwayListener-BJMLKnrp.js";import"./preload-helper-D9Z9MdNV.js";import"./ClickAwayListener-Gbp8DirE.js";import"./useForkRef-CFOv3ZhY.js";import"./getReactElementRef-BzEn9AjC.js";import"./useEventCallback-Cx1VukeI.js";import"./ownerDocument-DW-IO8s5.js";const x={title:"Components/Click Away Listener",component:r,tags:["autodocs"]},t={render:s=>{const[o,n]=i.useState(!1);return e.jsx(r,{...s,onClickAway:()=>n(!1),children:e.jsxs("div",{children:[e.jsx("button",{onClick:()=>n(!0),children:"Open"}),o&&e.jsx("div",{children:"opned"})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
