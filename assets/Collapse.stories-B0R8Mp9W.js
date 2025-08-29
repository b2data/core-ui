import{r as p,j as o}from"./iframe-CPQWTtPx.js";import{C as r}from"./Collapse-DpuzYHSu.js";import"./preload-helper-D9Z9MdNV.js";import"./Collapse-BqjCly_d.js";import"./useTheme-T4B27w73.js";import"./styled-CVYEzxfA.js";import"./memoTheme-BaYEZ6jo.js";import"./utils-ETLqDsx7.js";import"./TransitionGroupContext-Cfd4JEJX.js";import"./index-ClHgv_2Q.js";import"./index-DdDY9x1M.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-DTjciWwP.js";import"./useForkRef-BakhbzqY.js";const I={title:"Components/Collapse",component:r,tags:["autodocs"]},e={render:n=>{const[t,s]=p.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>s(!t),children:"Toggle"}),o.jsx(r,{in:t,...n,children:o.jsx("div",{children:"I'm collapsible"})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
