import{r as s,j as o}from"./iframe-dGl_HByf.js";import{C as r}from"./Collapse-BBYx4lq6.js";import"./preload-helper-PPVm8Dsz.js";import"./Collapse-uKAD8RxS.js";import"./useTheme-C2yYe7UP.js";import"./styled-DEb0WdcM.js";import"./memoTheme-DeSZoXTc.js";import"./utils-BHBThrgb.js";import"./TransitionGroupContext-lAmp_jRe.js";import"./index-Do_FCfqT.js";import"./index-Bb6oq-ie.js";import"./useSlot-DPBoBtB1.js";import"./mergeSlotProps-CUseLFIB.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DeiEiVA6.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-DyPqkLsY.js";const S={title:"Components/Collapse",component:r,tags:["autodocs"]},t={render:n=>{const[e,p]=s.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>p(!e),children:"Toggle"}),o.jsx(r,{in:e,...n,children:o.jsx("div",{children:"I'm collapsible"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
