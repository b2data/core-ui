import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-DQLiH3RP.js";import{C as s}from"./Collapse-BzF6pdYQ.js";import"./Collapse-Cmora6bo.js";import"./index-PKGOc6w3.js";import"./identifier-DtIXL9n7.js";import"./useTheme-DNsyaSfM.js";import"./DefaultPropsProvider-CbX9bpU7.js";import"./useTheme-CIxVfZhu.js";import"./styled-BJ0TTCEB.js";import"./memoTheme-BuPib-dq.js";import"./utils-D-OqLXMy.js";import"./TransitionGroupContext-BSJTrji_.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./generateUtilityClasses-KoSbOHxf.js";import"./useTimeout-fSo4lzeS.js";import"./useForkRef-8i08ZgmQ.js";const T={title:"Components/Collapse",component:s,tags:["autodocs"]},t={render:i=>{const[e,m]=a.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>m(!e),children:"Toggle"}),o.jsx(s,{in:e,...i,children:o.jsx("div",{children:"I'm collapsible"})})]})}};var r,n,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
