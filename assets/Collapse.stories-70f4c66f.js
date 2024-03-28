import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{C as p}from"./Collapse-6e6ded7c.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-dbf13da2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./clsx-5c20934d.js";import"./styled-fa5f10e1.js";import"./useThemeProps-af14b15e.js";import"./utils-5b75737a.js";import"./inheritsLoose-c82a83d4.js";import"./index-2801d3c9.js";import"./TransitionGroupContext-adcba781.js";import"./useTheme-2cc7c047.js";import"./generateUtilityClasses-2a7b4d5e.js";import"./useForkRef-80a5c2b4.js";const k={title:"Components/Collapse",component:p,tags:["autodocs"]},e={render:i=>{const[t,a]=m.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>a(!t),children:"Toggle"}),o.jsx(p,{in:t,...i,children:o.jsx("div",{children:"I'm collapsible"})})]})}};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const B=["Base"];export{e as Base,B as __namedExportsOrder,k as default};
//# sourceMappingURL=Collapse.stories-70f4c66f.js.map
