import{r as s,j as r}from"./iframe-D-Af2_6K.js";import{D as o}from"./Drawer-BJHOe-PN.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-D-PotgPw.js";import"./useTheme-D-CM3Y4q.js";import"./memoTheme-CHvOgVXV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-28DLoccJ.js";import"./mergeSlotProps-BHlnBqKQ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C3l1oI6e.js";import"./mergeSlotProps-Bpu1VWGp.js";import"./utils-CxvPnv--.js";import"./TransitionGroupContext-3wQKUh9s.js";import"./index-Dk52qgRX.js";import"./index-BbjCSB6D.js";import"./getReactElementRef-BOSlgcp8.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-CGOe6njC.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-CEyUjzcH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BJ9m9xgd.js";import"./Backdrop-Dk-FzEf7.js";import"./Paper-DZK6a8PO.js";const F={title:"Components/Drawer",component:o,tags:["autodocs"]},t={render:n=>{const[p,e]=s.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>e(!0),children:"Open"}),r.jsx(o,{open:p,onClose:()=>e(!1),...n,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
