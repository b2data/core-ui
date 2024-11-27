import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{C as p}from"./Collapse-34e85f72.js";import"./_commonjsHelpers-de833af9.js";import"./Collapse-ac3ed2c6.js";import"./createTheme-afe70497.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./index-b47fffdc.js";import"./styled-938ba038.js";import"./useThemeProps-bf98364a.js";import"./utils-eb1a1c61.js";import"./inheritsLoose-5494d9cc.js";import"./index-2801d3c9.js";import"./TransitionGroupContext-adcba781.js";import"./useTheme-9d477022.js";import"./generateUtilityClasses-8f2c365e.js";import"./useForkRef-80a5c2b4.js";const B={title:"Components/Collapse",component:p,tags:["autodocs"]},e={render:i=>{const[t,a]=m.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>a(!t),children:"Toggle"}),o.jsx(p,{in:t,...i,children:o.jsx("div",{children:"I'm collapsible"})})]})}};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const T=["Base"];export{e as Base,T as __namedExportsOrder,B as default};
//# sourceMappingURL=Collapse.stories-060fa7ff.js.map
