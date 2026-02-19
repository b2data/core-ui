import{r as s,j as o}from"./iframe-CXZ_NyuK.js";import{C as r}from"./Collapse-DFjEOwEu.js";import"./preload-helper-PPVm8Dsz.js";import"./Collapse-k_ogPl5m.js";import"./useTheme-DWoggi07.js";import"./styled-BvUIjKhn.js";import"./memoTheme-DTk_V_hg.js";import"./utils-DFraDq1z.js";import"./TransitionGroupContext-CxxqYawP.js";import"./index-BvG9M3NN.js";import"./index-By5H4shY.js";import"./useSlot-ML2559-c.js";import"./mergeSlotProps-MFdmIzEm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CG8Sv1UH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-ZSFSp5cI.js";const S={title:"Components/Collapse",component:r,tags:["autodocs"]},t={render:n=>{const[e,p]=s.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>p(!e),children:"Toggle"}),o.jsx(r,{in:e,...n,children:o.jsx("div",{children:"I'm collapsible"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
