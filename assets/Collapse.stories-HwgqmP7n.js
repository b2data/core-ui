import{r as s,j as o}from"./iframe-iBJb36Pk.js";import{C as r}from"./Collapse-B2n33ErZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Collapse-DNbp89Oh.js";import"./useTheme-Dp0Qizzj.js";import"./styled-TlQKRrkf.js";import"./memoTheme-DtgnkE7u.js";import"./utils-BEY0T_cS.js";import"./TransitionGroupContext-hbf9GoVf.js";import"./index-Bg8xFF6E.js";import"./index-y5eWNptS.js";import"./useSlot-Srv2vCGA.js";import"./mergeSlotProps-TIAJWBPs.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-9UDatCif.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-eQduHELe.js";const S={title:"Components/Collapse",component:r,tags:["autodocs"]},t={render:n=>{const[e,p]=s.useState(!1);return o.jsxs("div",{children:["I'm fixed part of content",o.jsx("button",{onClick:()=>p(!e),children:"Toggle"}),o.jsx(r,{in:e,...n,children:o.jsx("div",{children:"I'm collapsible"})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [open, setOpen] = useState(false);
    return <div>
        I'm fixed part of content
        <button onClick={() => setOpen(!open)}>Toggle</button>
        <Collapse in={open} {...props}>
          <div>I'm collapsible</div>
        </Collapse>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const k=["Base"];export{t as Base,k as __namedExportsOrder,S as default};
