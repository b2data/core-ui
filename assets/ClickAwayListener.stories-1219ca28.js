import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as c}from"./index-61bf1805.js";import{C as i}from"./ClickAwayListener-1313ea63.js";import"./_commonjsHelpers-de833af9.js";import"./ClickAwayListener-a8bf2d4d.js";import"./useForkRef-80a5c2b4.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./ownerDocument-613eb639.js";const j={title:"Components/Click Away Listener",component:i,tags:["autodocs"]},t={render:p=>{const[a,n]=c.useState(!1);return e.jsx(i,{...p,onClickAway:()=>n(!1),children:e.jsxs("div",{children:[e.jsx("button",{onClick:()=>n(!0),children:"Open"}),a&&e.jsx("div",{children:"opned"})]})})}};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
//# sourceMappingURL=ClickAwayListener.stories-1219ca28.js.map
