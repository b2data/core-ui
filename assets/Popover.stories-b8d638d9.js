import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as d}from"./index-61bf1805.js";import{P as s}from"./Popover-8f2699c9.js";import"./_commonjsHelpers-de833af9.js";import"./Popover-9235690e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./createTheme-dbf13da2.js";import"./clsx-5c20934d.js";import"./styled-fa5f10e1.js";import"./useThemeProps-af14b15e.js";import"./generateUtilityClasses-2a7b4d5e.js";import"./Modal-552b375e.js";import"./Backdrop-4cbb43ae.js";import"./useTheme-2cc7c047.js";import"./utils-5b75737a.js";import"./inheritsLoose-c82a83d4.js";import"./index-2801d3c9.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-4a5f3c0e.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-08c921af.js";import"./debounce-517eeb3c.js";import"./Grow-8a34c90c.js";const N={title:"Components/Popover",component:s,tags:["autodocs"]},t={render:i=>{const[e,r]=d.useState(null),l=c=>{r(c.currentTarget)},a=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:l,children:"Toggle Popover"}),o.jsx(s,{...i,id:"demo",open:!!e,anchorEl:e,onClose:a,children:"The content of the Popover."})]})}};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return <>
        <button aria-describedby="demo" type="button" onClick={handleClick}>
          Toggle Popover
        </button>
        <Popover {...props} id="demo" open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose}>
          The content of the Popover.
        </Popover>
      </>;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Q=["Base"];export{t as Base,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=Popover.stories-b8d638d9.js.map
