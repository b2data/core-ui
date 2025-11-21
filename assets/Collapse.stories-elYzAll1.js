import{r as s,j as o}from"./iframe-G5ZpE7QO.js";import{C as r}from"./Collapse-D3LIRFzH.js";import"./preload-helper-PPVm8Dsz.js";import"./Collapse-CDNkoXbu.js";import"./useTheme-B138dJGz.js";import"./styled-B19C_ToH.js";import"./memoTheme-yIZRShux.js";import"./utils-BY4JAHKj.js";import"./TransitionGroupContext-DdCBOnAD.js";import"./index-BMvGbyKB.js";import"./index-BOY60yfB.js";import"./useSlot-Dnn0ZK68.js";import"./mergeSlotProps-DtAb3QtM.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D2tk6x-x.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-CjFhj00D.js";const S={title:"Components/Collapse",component:r,tags:["autodocs"]},t={render:n=>{const[e,p]=s.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>p(!e),children:"Toggle"}),o.jsx(r,{in:e,...n,children:o.jsx("div",{children:"I'm collapsible"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
