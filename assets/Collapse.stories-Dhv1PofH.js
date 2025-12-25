import{r as s,j as o}from"./iframe-Bt0NHjzt.js";import{C as r}from"./Collapse-DgsoXwjW.js";import"./preload-helper-PPVm8Dsz.js";import"./Collapse-DZY430ZD.js";import"./useTheme-CJIytwIy.js";import"./styled-BEaRT_Fa.js";import"./memoTheme-BgU4zM9I.js";import"./utils-ByOi0em4.js";import"./TransitionGroupContext-B0SjSjGE.js";import"./index-Ypw_AV9V.js";import"./index-gtplWchC.js";import"./useSlot-B6QK4qS-.js";import"./mergeSlotProps-CTGzhqDY.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-hJSLhPXd.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-KoRalZn8.js";const S={title:"Components/Collapse",component:r,tags:["autodocs"]},t={render:n=>{const[e,p]=s.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>p(!e),children:"Toggle"}),o.jsx(r,{in:e,...n,children:o.jsx("div",{children:"I'm collapsible"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
