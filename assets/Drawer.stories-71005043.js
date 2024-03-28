import{j as r}from"./jsx-runtime-4ca860c5.js";import{r as a}from"./index-61bf1805.js";import{D as i}from"./Drawer-a3426c69.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-dbf13da2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./clsx-5c20934d.js";import"./useTheme-2cc7c047.js";import"./useThemeProps-af14b15e.js";import"./styled-fa5f10e1.js";import"./generateUtilityClasses-2a7b4d5e.js";import"./Modal-552b375e.js";import"./Backdrop-4cbb43ae.js";import"./utils-5b75737a.js";import"./inheritsLoose-c82a83d4.js";import"./index-2801d3c9.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-4a5f3c0e.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-08c921af.js";import"./debounce-517eeb3c.js";const K={title:"Components/Drawer",component:i,tags:["autodocs"]},t={render:s=>{const[m,o]=a.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>o(!0),children:"Open"}),r.jsx(i,{open:m,onClose:()=>o(!1),...s,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};var e,p,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const L=["Base"];export{t as Base,L as __namedExportsOrder,K as default};
//# sourceMappingURL=Drawer.stories-71005043.js.map
