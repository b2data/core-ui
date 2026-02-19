import{r as s,j as r}from"./iframe-CXZ_NyuK.js";import{D as o}from"./Drawer-3l3HR4LY.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-BvUIjKhn.js";import"./useTheme-DWoggi07.js";import"./memoTheme-DTk_V_hg.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-ML2559-c.js";import"./mergeSlotProps-MFdmIzEm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CG8Sv1UH.js";import"./mergeSlotProps-Cw1N6ud7.js";import"./utils-DFraDq1z.js";import"./TransitionGroupContext-CxxqYawP.js";import"./index-BvG9M3NN.js";import"./index-By5H4shY.js";import"./getReactElementRef-DWRjfN76.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-CuHv0e9C.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-EozOT64W.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BKU-ZVzg.js";import"./Backdrop-EFsSiZOY.js";import"./Paper-DWrtNxDa.js";const F={title:"Components/Drawer",component:o,tags:["autodocs"]},t={render:n=>{const[p,e]=s.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>e(!0),children:"Open"}),r.jsx(o,{open:p,onClose:()=>e(!1),...n,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
