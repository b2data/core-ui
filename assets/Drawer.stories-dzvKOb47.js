import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-DQLiH3RP.js";import{D as i}from"./Drawer-CVuoOaek.js";import"./generateUtilityClass-Crd22lsZ.js";import"./createTheme-CpmnfvGf.js";import"./index-DgnjHyRg.js";import"./styled-DnAalvCx.js";import"./DefaultPropsProvider-D7SvoM6x.js";import"./useTheme-B1gvnf2G.js";import"./useTheme-BB2j23dw.js";import"./memoTheme-6CX_wYOL.js";import"./generateUtilityClasses-C4v8O9Po.js";import"./useSlot-CWOIDwz3.js";import"./resolveComponentProps-DgnXLWZd.js";import"./useForkRef-8i08ZgmQ.js";import"./mergeSlotProps-Dso7hb34.js";import"./utils-D-OqLXMy.js";import"./TransitionGroupContext-BSJTrji_.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./getReactElementRef-DW0MqppP.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-BnKDmmi5.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-Drq2SckL.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DIoQGYRy.js";import"./Backdrop-rM1Sqkg2.js";import"./Paper-B39jOWew.js";const M={title:"Components/Drawer",component:i,tags:["autodocs"]},t={render:s=>{const[m,o]=a.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>o(!0),children:"Open"}),r.jsx(i,{open:m,onClose:()=>o(!1),...s,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};var e,p,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
