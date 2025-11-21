import{r as s,j as r}from"./iframe-G5ZpE7QO.js";import{D as o}from"./Drawer-CQdpphFk.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-B19C_ToH.js";import"./useTheme-B138dJGz.js";import"./memoTheme-yIZRShux.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-Dnn0ZK68.js";import"./mergeSlotProps-DtAb3QtM.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D2tk6x-x.js";import"./mergeSlotProps-IEfrjphi.js";import"./utils-BY4JAHKj.js";import"./TransitionGroupContext-DdCBOnAD.js";import"./index-BMvGbyKB.js";import"./index-BOY60yfB.js";import"./getReactElementRef-DhAmtzfE.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-ZvXrb2Ac.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-CCbompB-.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CSHLtsMQ.js";import"./Backdrop-XPtT8SSm.js";import"./Paper-BiDxZ156.js";const F={title:"Components/Drawer",component:o,tags:["autodocs"]},t={render:n=>{const[p,e]=s.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>e(!0),children:"Open"}),r.jsx(o,{open:p,onClose:()=>e(!1),...n,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
