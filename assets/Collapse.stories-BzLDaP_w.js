import{r as p,j as o}from"./iframe-BCz_NIWA.js";import{C as r}from"./Collapse-lpN8Ubxp.js";import"./preload-helper-D9Z9MdNV.js";import"./Collapse-FPmHCE5B.js";import"./useTheme-EP6WGabO.js";import"./styled-DMcz7HpS.js";import"./memoTheme-HkdJwuAH.js";import"./utils-CALKgiFZ.js";import"./TransitionGroupContext-BDhOcy0u.js";import"./index-Ar8B3F6Q.js";import"./index-DV66Sa4q.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-B3_rYZv9.js";import"./useForkRef-CSZsaPHq.js";const I={title:"Components/Collapse",component:r,tags:["autodocs"]},e={render:n=>{const[t,s]=p.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>s(!t),children:"Toggle"}),o.jsx(r,{in:t,...n,children:o.jsx("div",{children:"I'm collapsible"})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
