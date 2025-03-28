import{j as o}from"./jsx-runtime-DZlKWc7q.js";import{r as a}from"./index-3dRrDZpt.js";import{C as s}from"./Collapse-bsQCgibR.js";import"./Collapse-DZcn9G6i.js";import"./identifier-DOope7UP.js";import"./generateUtilityClass-CXPxvQOg.js";import"./styled-Mw1EHJJT.js";import"./defaultTheme-DgpnsjHP.js";import"./utils-CiCX3onH.js";import"./TransitionGroupContext-CTqiJmAL.js";import"./index-BAcUCDwH.js";import"./index-BVoldrdP.js";import"./useTheme-DVj2CI2E.js";import"./useTheme-C1aVjhx_.js";import"./generateUtilityClasses-CkJG6r2x.js";import"./DefaultPropsProvider-BUlghEOV.js";import"./useTimeout-Caar1w0_.js";import"./useForkRef-Dg5HCZjH.js";const T={title:"Components/Collapse",component:s,tags:["autodocs"]},t={render:i=>{const[e,m]=a.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>m(!e),children:"Toggle"}),o.jsx(s,{in:e,...i,children:o.jsx("div",{children:"I'm collapsible"})})]})}};var r,n,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const _=["Base"];export{t as Base,_ as __namedExportsOrder,T as default};
