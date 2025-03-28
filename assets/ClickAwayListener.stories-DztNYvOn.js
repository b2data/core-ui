import{j as e}from"./jsx-runtime-DZlKWc7q.js";import{r as c}from"./index-3dRrDZpt.js";import{C as i}from"./ClickAwayListener-wjAwEVuX.js";import"./ClickAwayListener-B29vTZhw.js";import"./useForkRef-Dg5HCZjH.js";import"./getReactElementRef-40wuMu9m.js";import"./useEventCallback-rxG9GCI1.js";import"./useEnhancedEffect-BJLNeg-6.js";import"./ownerDocument-DW-IO8s5.js";const j={title:"Components/Click Away Listener",component:i,tags:["autodocs"]},t={render:p=>{const[a,n]=c.useState(!1);return e.jsx(i,{...p,onClickAway:()=>n(!1),children:e.jsxs("div",{children:[e.jsx("button",{onClick:()=>n(!0),children:"Open"}),a&&e.jsx("div",{children:"opned"})]})})}};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: props => {
    const [open, setOpen] = useState(false);
    return <ClickAwayListener {...props} onClickAway={() => setOpen(false)}>
        <div>
          <button onClick={() => setOpen(true)}>Open</button>
          {open && <div>opned</div>}
        </div>
      </ClickAwayListener>;
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const v=["Base"];export{t as Base,v as __namedExportsOrder,j as default};
