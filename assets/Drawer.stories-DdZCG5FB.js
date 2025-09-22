import{r as s,j as r}from"./iframe-BjsjcTCH.js";import{D as o}from"./Drawer-D5JPBFtS.js";import"./preload-helper-D9Z9MdNV.js";import"./styled-B_VYI8z9.js";import"./useTheme-Bdxx-ZzA.js";import"./memoTheme-BkiB6XT-.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-_7UiI0BH.js";import"./mergeSlotProps-Bba1iLBA.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CFOv3ZhY.js";import"./mergeSlotProps-Dw6Vk27m.js";import"./utils-C829QIR_.js";import"./TransitionGroupContext-DktGN6vV.js";import"./index-B6TwdEj4.js";import"./index-SVAzG-T_.js";import"./getReactElementRef-BzEn9AjC.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-BlMYs-AT.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-Cx1VukeI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-_D9UOzoy.js";import"./Backdrop-B0Qd6KlM.js";import"./Paper-CztJE2D3.js";const F={title:"Components/Drawer",component:o,tags:["autodocs"]},t={render:n=>{const[p,e]=s.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>e(!0),children:"Open"}),r.jsx(o,{open:p,onClose:()=>e(!1),...n,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
