import{r as s,j as o}from"./iframe-DYeT7bW8.js";import{C as r}from"./Collapse-B14DtMoq.js";import"./preload-helper-PPVm8Dsz.js";import"./Collapse-DGsusd8e.js";import"./useTheme-BsUAYdxI.js";import"./styled-GE-e2l_1.js";import"./memoTheme-B_iRBWsH.js";import"./utils-CcCfpxc5.js";import"./TransitionGroupContext-FZWsME-w.js";import"./index-C_pUq534.js";import"./index-C5_6TYhN.js";import"./useSlot-BOZP11gd.js";import"./mergeSlotProps-Cb7kcP9N.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CHATcp2n.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-gGYJwrGn.js";const S={title:"Components/Collapse",component:r,tags:["autodocs"]},t={render:n=>{const[e,p]=s.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>p(!e),children:"Toggle"}),o.jsx(r,{in:e,...n,children:o.jsx("div",{children:"I'm collapsible"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [open, setOpen] = useState(false);
    return <div>
        I'm fixed part of content
        <button onClick={() => setOpen(!open)}>Toggle</button>
        <Collapse in={open} {...props}>
          <div>I'm collapsible</div>
        </Collapse>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const k=["Base"];export{t as Base,k as __namedExportsOrder,S as default};
