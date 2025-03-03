import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as a}from"./index-61bf1805.js";import{C as s}from"./Collapse-236decd5.js";import"./_commonjsHelpers-de833af9.js";import"./Collapse-d6c9c7fe.js";import"./createTheme-316778f4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./index-05c64dab.js";import"./styled-9b74321f.js";import"./defaultTheme-fea1ec9a.js";import"./useThemeProps-8ddb2dd0.js";import"./utils-f86e1de4.js";import"./inheritsLoose-5494d9cc.js";import"./index-2801d3c9.js";import"./TransitionGroupContext-adcba781.js";import"./useTheme-b859b38f.js";import"./generateUtilityClasses-5ea778c4.js";import"./useForkRef-80a5c2b4.js";const T={title:"Components/Collapse",component:s,tags:["autodocs"]},t={render:i=>{const[e,m]=a.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>m(!e),children:"Toggle"}),o.jsx(s,{in:e,...i,children:o.jsx("div",{children:"I'm collapsible"})})]})}};var r,n,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
//# sourceMappingURL=Collapse.stories-af6ba986.js.map
