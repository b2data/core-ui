import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-DQLiH3RP.js";import{D as i}from"./Drawer-CYjQBlUt.js";import"./index-PKGOc6w3.js";import"./identifier-DtIXL9n7.js";import"./index-DgnjHyRg.js";import"./styled-BJ0TTCEB.js";import"./DefaultPropsProvider-CbX9bpU7.js";import"./useTheme-DNsyaSfM.js";import"./useTheme-CIxVfZhu.js";import"./memoTheme-BuPib-dq.js";import"./generateUtilityClasses-KoSbOHxf.js";import"./useSlot-BXYsnuZK.js";import"./resolveComponentProps-Bi1IQseL.js";import"./useForkRef-8i08ZgmQ.js";import"./mergeSlotProps-DjPLcKkk.js";import"./utils-D-OqLXMy.js";import"./TransitionGroupContext-BSJTrji_.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./getReactElementRef-DW0MqppP.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-DHBtNlyn.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-Drq2SckL.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DIoQGYRy.js";import"./Backdrop-aj6OLuW3.js";import"./Paper-1rqY9H9j.js";const M={title:"Components/Drawer",component:i,tags:["autodocs"]},t={render:s=>{const[m,o]=a.useState(!1);return r.jsxs("div",{children:[r.jsx("button",{onClick:()=>o(!0),children:"Open"}),r.jsx(i,{open:m,onClose:()=>o(!1),...s,children:r.jsx("div",{style:{padding:16},children:"Drawer content"})})]})}};var e,p,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
