import{r as s,j as r}from"./iframe-CPQWTtPx.js";import{D as o}from"./Drawer-Dh81Ct02.js";import"./preload-helper-D9Z9MdNV.js";import"./styled-CVYEzxfA.js";import"./useTheme-T4B27w73.js";import"./memoTheme-BaYEZ6jo.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-A_Glp2nr.js";import"./mergeSlotProps-CC7Q4nyl.js";import"./useForkRef-BakhbzqY.js";import"./mergeSlotProps-B0p2lkCa.js";import"./utils-ETLqDsx7.js";import"./TransitionGroupContext-Cfd4JEJX.js";import"./index-ClHgv_2Q.js";import"./index-DdDY9x1M.js";import"./getReactElementRef-zlErzI_n.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-B6dHYExC.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-Cj11N6aI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Eo5Y0Fep.js";import"./Backdrop-BpFn6bBk.js";import"./Paper-B8p_ssOJ.js";const A={title:"Components/Drawer",component:o,tags:["autodocs"]},t={render:n=>{const[p,e]=s.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>e(!0),children:"Open"}),r.jsx(o,{open:p,onClose:()=>e(!1),...n,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const F=["Base"];export{t as Base,F as __namedExportsOrder,A as default};
