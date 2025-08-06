import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DQLiH3RP.js";import{C as i}from"./ClickAwayListener-D3t8ydbh.js";import"./ClickAwayListener-Dk3Dq9Ot.js";import"./useForkRef-8i08ZgmQ.js";import"./getReactElementRef-DW0MqppP.js";import"./useEventCallback-Drq2SckL.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./ownerDocument-DW-IO8s5.js";const j={title:"Components/Click Away Listener",component:i,tags:["autodocs"]},t={render:p=>{const[a,n]=c.useState(!1);return e.jsx(i,{...p,onClickAway:()=>n(!1),children:e.jsxs("div",{children:[e.jsx("button",{onClick:()=>n(!0),children:"Open"}),a&&e.jsx("div",{children:"opned"})]})})}};var r,o,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
