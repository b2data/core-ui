import{j as r}from"./jsx-runtime-DZlKWc7q.js";import{r as a}from"./index-3dRrDZpt.js";import{D as i}from"./Drawer-DzmQenZV.js";import"./identifier-DOope7UP.js";import"./generateUtilityClass-CXPxvQOg.js";import"./index-xeTtEoR5.js";import"./useTheme-DVj2CI2E.js";import"./defaultTheme-DgpnsjHP.js";import"./useTheme-C1aVjhx_.js";import"./styled-Mw1EHJJT.js";import"./generateUtilityClasses-CkJG6r2x.js";import"./DefaultPropsProvider-BUlghEOV.js";import"./utils-CiCX3onH.js";import"./TransitionGroupContext-CTqiJmAL.js";import"./index-BAcUCDwH.js";import"./index-BVoldrdP.js";import"./useForkRef-Dg5HCZjH.js";import"./getReactElementRef-40wuMu9m.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Paper-Dib-hOey.js";import"./Modal-CUw12K15.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useEventCallback-rxG9GCI1.js";import"./useEnhancedEffect-BJLNeg-6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-D0R3fJWy.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-xExk7eqi.js";import"./Portal-79c61KSa.js";import"./Backdrop-Bb5spx6G.js";const M={title:"Components/Drawer",component:i,tags:["autodocs"]},t={render:s=>{const[m,o]=a.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>o(!0),children:"Open"}),r.jsx(i,{open:m,onClose:()=>o(!1),...s,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};var e,p,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const N=["Base"];export{t as Base,N as __namedExportsOrder,M as default};
