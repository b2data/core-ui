import{j as p}from"./jsx-runtime-4ca860c5.js";import{r as i}from"./index-61bf1805.js";import{M as a}from"./MarkdownField-b8d23a25.js";import"./_commonjsHelpers-de833af9.js";import"./Box-cf9644a4.js";import"./createTheme-afe70497.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./index-b47fffdc.js";import"./extendSxProp-50a8832f.js";const L={title:"Components/Inputs/Markdown Field",component:a,tags:["autodocs"]},e={args:{label:"Base",placeholder:"Placeholder",plain:!0,required:!0,readOnly:!0},render:s=>{const[l,u]=i.useState("");return p.jsx(a,{value:l,onBlur:r=>{console.log(r.target.innerHTML),console.log(r.currentTarget.innerHTML),u(r.currentTarget.innerHTML)},...s})}};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const v=["Base"];export{e as Base,v as __namedExportsOrder,L as default};
//# sourceMappingURL=MarkdownField.stories-99625475.js.map
