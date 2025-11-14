import{r as s,j as r}from"./iframe-dGl_HByf.js";import{D as o}from"./Drawer-bqgrGbzi.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-DEb0WdcM.js";import"./useTheme-C2yYe7UP.js";import"./memoTheme-DeSZoXTc.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-DPBoBtB1.js";import"./mergeSlotProps-CUseLFIB.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DeiEiVA6.js";import"./mergeSlotProps-DOVOqMMH.js";import"./utils-BHBThrgb.js";import"./TransitionGroupContext-lAmp_jRe.js";import"./index-Do_FCfqT.js";import"./index-Bb6oq-ie.js";import"./getReactElementRef-CdfDsxS2.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-BztwVA-W.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-DVyd9a6S.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CdUdjvXQ.js";import"./Backdrop-1xyMPW7d.js";import"./Paper-DgjNs4o9.js";const F={title:"Components/Drawer",component:o,tags:["autodocs"]},t={render:n=>{const[p,e]=s.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>e(!0),children:"Open"}),r.jsx(o,{open:p,onClose:()=>e(!1),...n,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
