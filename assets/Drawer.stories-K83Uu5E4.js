import{r as s,j as r}from"./iframe-D5_OA-ZK.js";import{D as o}from"./Drawer-BzM2kuOC.js";import"./preload-helper-D9Z9MdNV.js";import"./styled-Co26MWGr.js";import"./useTheme-C52RKMww.js";import"./memoTheme-D980zPRr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-DWUuY1NV.js";import"./mergeSlotProps-C-NrcMNJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-XZbQ7842.js";import"./mergeSlotProps-D_ebDX1k.js";import"./utils-1P7-SQlo.js";import"./TransitionGroupContext-Dw2CfZNK.js";import"./index-CeesYFFv.js";import"./index-Bm5Jvdhx.js";import"./getReactElementRef-MPxDcdTs.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-DQZfc3mo.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-BhmZMpnQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-B3BM28AW.js";import"./Backdrop-CdMV7kIU.js";import"./Paper-D7li1_zG.js";const F={title:"Components/Drawer",component:o,tags:["autodocs"]},t={render:n=>{const[p,e]=s.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>e(!0),children:"Open"}),r.jsx(o,{open:p,onClose:()=>e(!1),...n,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
