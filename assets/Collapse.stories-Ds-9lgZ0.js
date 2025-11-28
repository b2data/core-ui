import{r as s,j as o}from"./iframe-D-Af2_6K.js";import{C as r}from"./Collapse-CCMMYas9.js";import"./preload-helper-PPVm8Dsz.js";import"./Collapse-xrg1aIpb.js";import"./useTheme-D-CM3Y4q.js";import"./styled-D-PotgPw.js";import"./memoTheme-CHvOgVXV.js";import"./utils-CxvPnv--.js";import"./TransitionGroupContext-3wQKUh9s.js";import"./index-Dk52qgRX.js";import"./index-BbjCSB6D.js";import"./useSlot-28DLoccJ.js";import"./mergeSlotProps-BHlnBqKQ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C3l1oI6e.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-B-ndypME.js";const S={title:"Components/Collapse",component:r,tags:["autodocs"]},t={render:n=>{const[e,p]=s.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>p(!e),children:"Toggle"}),o.jsx(r,{in:e,...n,children:o.jsx("div",{children:"I'm collapsible"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
