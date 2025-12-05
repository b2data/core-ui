import{r as s,j as r}from"./iframe-iBJb36Pk.js";import{D as o}from"./Drawer-BZyJSVaR.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-TlQKRrkf.js";import"./useTheme-Dp0Qizzj.js";import"./memoTheme-DtgnkE7u.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlot-Srv2vCGA.js";import"./mergeSlotProps-TIAJWBPs.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-9UDatCif.js";import"./mergeSlotProps-BUQD6Sej.js";import"./utils-BEY0T_cS.js";import"./TransitionGroupContext-hbf9GoVf.js";import"./index-Bg8xFF6E.js";import"./index-y5eWNptS.js";import"./getReactElementRef-d_M2sW3V.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-DKLF1oCm.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-D_a16_zg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CqWY6jV5.js";import"./Backdrop-AMo_6TPw.js";import"./Paper-1zfGM82n.js";const F={title:"Components/Drawer",component:o,tags:["autodocs"]},t={render:n=>{const[p,e]=s.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>e(!0),children:"Open"}),r.jsx(o,{open:p,onClose:()=>e(!1),...n,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
