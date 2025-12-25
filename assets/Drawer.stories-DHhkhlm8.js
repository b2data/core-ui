import{r as s,j as r}from"./iframe-Bt0NHjzt.js";import{D as o}from"./Drawer-CQw0KUL-.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-BEaRT_Fa.js";import"./useTheme-CJIytwIy.js";import"./memoTheme-BgU4zM9I.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-B6QK4qS-.js";import"./mergeSlotProps-CTGzhqDY.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-hJSLhPXd.js";import"./mergeSlotProps-CoXSsvkz.js";import"./utils-ByOi0em4.js";import"./TransitionGroupContext-B0SjSjGE.js";import"./index-Ypw_AV9V.js";import"./index-gtplWchC.js";import"./getReactElementRef-CjonG1mU.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-DoKZQW4X.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-DRFCyGqk.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DwdRdUOR.js";import"./Backdrop-D0NTvvjC.js";import"./Paper-DKuqXmbM.js";const F={title:"Components/Drawer",component:o,tags:["autodocs"]},t={render:n=>{const[p,e]=s.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>e(!0),children:"Open"}),r.jsx(o,{open:p,onClose:()=>e(!1),...n,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const G=["Base"];export{t as Base,G as __namedExportsOrder,F as default};
