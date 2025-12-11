import{r as s,j as r}from"./iframe-DYeT7bW8.js";import{D as o}from"./Drawer-FOmtswyq.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-GE-e2l_1.js";import"./useTheme-BsUAYdxI.js";import"./memoTheme-B_iRBWsH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-BOZP11gd.js";import"./mergeSlotProps-Cb7kcP9N.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CHATcp2n.js";import"./mergeSlotProps-r0Y4YYvP.js";import"./utils-CcCfpxc5.js";import"./TransitionGroupContext-FZWsME-w.js";import"./index-C_pUq534.js";import"./index-C5_6TYhN.js";import"./getReactElementRef-BS6Q2MpD.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-DS7lPg7H.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-B4Rt0DiH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Dnx2_fQM.js";import"./Backdrop-CENkHO8A.js";import"./Paper-RhJ94JB6.js";const F={title:"Components/Drawer",component:o,tags:["autodocs"]},t={render:n=>{const[p,e]=s.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>e(!0),children:"Open"}),r.jsx(o,{open:p,onClose:()=>e(!1),...n,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
