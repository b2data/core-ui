import{r as p,j as o}from"./iframe-BjsjcTCH.js";import{C as r}from"./Collapse-CUP8s1T5.js";import"./preload-helper-D9Z9MdNV.js";import"./Collapse-DoHhn7Rv.js";import"./useTheme-Bdxx-ZzA.js";import"./styled-B_VYI8z9.js";import"./memoTheme-BkiB6XT-.js";import"./utils-C829QIR_.js";import"./TransitionGroupContext-DktGN6vV.js";import"./index-B6TwdEj4.js";import"./index-SVAzG-T_.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-CGfVXgdi.js";import"./useForkRef-CFOv3ZhY.js";const I={title:"Components/Collapse",component:r,tags:["autodocs"]},e={render:n=>{const[t,s]=p.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>s(!t),children:"Toggle"}),o.jsx(r,{in:t,...n,children:o.jsx("div",{children:"I'm collapsible"})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const O=["Base"];export{e as Base,O as __namedExportsOrder,I as default};
