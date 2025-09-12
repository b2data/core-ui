import{r as p,j as o}from"./iframe-D5_OA-ZK.js";import{C as r}from"./Collapse-B1aIRmCn.js";import"./preload-helper-D9Z9MdNV.js";import"./Collapse-PW1-76gJ.js";import"./useTheme-C52RKMww.js";import"./styled-Co26MWGr.js";import"./memoTheme-D980zPRr.js";import"./utils-1P7-SQlo.js";import"./TransitionGroupContext-Dw2CfZNK.js";import"./index-CeesYFFv.js";import"./index-Bm5Jvdhx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-CRsqOtag.js";import"./useForkRef-XZbQ7842.js";const I={title:"Components/Collapse",component:r,tags:["autodocs"]},e={render:n=>{const[t,s]=p.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>s(!t),children:"Toggle"}),o.jsx(r,{in:t,...n,children:o.jsx("div",{children:"I'm collapsible"})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
