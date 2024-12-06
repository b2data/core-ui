import{j as i}from"./jsx-runtime-4ca860c5.js";import{r as u}from"./index-61bf1805.js";import{M as a}from"./MarkdownField-201471a9.js";import"./_commonjsHelpers-de833af9.js";import"./MarkdownContent-2e2792db.js";import"./Box-fefa9705.js";import"./createTheme-bf72f819.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./index-aa4d0353.js";import"./extendSxProp-1c98bbe3.js";import"./FormHelperText-4506dc41.js";import"./FormHelperText-5862b80c.js";import"./useFormControl-18a13278.js";import"./styled-8f47f2e2.js";import"./useThemeProps-3a07dd36.js";import"./generateUtilityClasses-d818091b.js";const w={title:"Components/Inputs/Markdown Field",component:a,tags:["autodocs"]},r={args:{label:"Base",placeholder:"Placeholder",plain:!0,required:!0,readOnly:!0},render:s=>{const[l,p]=u.useState("");return i.jsx(a,{value:l,onBlur:e=>{console.log(e.target.innerHTML),console.log(e.currentTarget.innerHTML),p(e.currentTarget.innerHTML)},...s})}};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Base",
    placeholder: "Placeholder",
    plain: true,
    required: true,
    // error: true,
    // disabled: true,
    readOnly: true
  },
  render: props => {
    const [val, setVal] = useState("");
    return <MarkdownField value={val} onBlur={e => {
      console.log(e.target.innerHTML);
      console.log(e.currentTarget.innerHTML);
      setVal(e.currentTarget.innerHTML);
    }} {...props} />;
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const E=["Base"];export{r as Base,E as __namedExportsOrder,w as default};
//# sourceMappingURL=MarkdownField.stories-ef71b2ce.js.map
