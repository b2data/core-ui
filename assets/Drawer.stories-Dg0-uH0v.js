import{r as s,j as r}from"./iframe-BCz_NIWA.js";import{D as o}from"./Drawer-Cjdc5SD3.js";import"./preload-helper-D9Z9MdNV.js";import"./styled-DMcz7HpS.js";import"./useTheme-EP6WGabO.js";import"./memoTheme-HkdJwuAH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-DjJyu2W-.js";import"./mergeSlotProps-Efm9CLsr.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CSZsaPHq.js";import"./mergeSlotProps-qWtR93Ew.js";import"./utils-CALKgiFZ.js";import"./TransitionGroupContext-BDhOcy0u.js";import"./index-Ar8B3F6Q.js";import"./index-DV66Sa4q.js";import"./getReactElementRef-CoeUOVJ1.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-C2ob3-em.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-2E7ndIeg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-MdsF2Uh7.js";import"./Backdrop-GJXCx2Bz.js";import"./Paper-CpAtm7fY.js";const F={title:"Components/Drawer",component:o,tags:["autodocs"]},t={render:n=>{const[p,e]=s.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>e(!0),children:"Open"}),r.jsx(o,{open:p,onClose:()=>e(!1),...n,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
