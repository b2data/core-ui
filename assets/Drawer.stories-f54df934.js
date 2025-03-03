import{j as r}from"./jsx-runtime-4ca860c5.js";import{r as a}from"./index-61bf1805.js";import{D as i}from"./Drawer-80ab2cd4.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-316778f4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./index-05c64dab.js";import"./useTheme-b859b38f.js";import"./defaultTheme-fea1ec9a.js";import"./useThemeProps-8ddb2dd0.js";import"./styled-9b74321f.js";import"./generateUtilityClasses-5ea778c4.js";import"./Modal-35ee554a.js";import"./Backdrop-2c48098d.js";import"./utils-f86e1de4.js";import"./inheritsLoose-5494d9cc.js";import"./index-2801d3c9.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-7dac0002.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-90a9c904.js";import"./debounce-517eeb3c.js";const L={title:"Components/Drawer",component:i,tags:["autodocs"]},t={render:s=>{const[m,o]=a.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>o(!0),children:"Open"}),r.jsx(i,{open:m,onClose:()=>o(!1),...s,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};var e,p,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: props => {
    const [open, setOpen] = useState(false);
    return <div>
        <button onClick={() => setOpen(true)}>Open</button>
        <Drawer open={open} onClose={() => setOpen(false)} {...props}>
          <div style={{
          padding: 16
        }}>Drawer content</div>
        </Drawer>
      </div>;
  }
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const M=["Base"];export{t as Base,M as __namedExportsOrder,L as default};
//# sourceMappingURL=Drawer.stories-f54df934.js.map
