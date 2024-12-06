import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as d}from"./index-61bf1805.js";import{P as s}from"./Popover-bcec61c9.js";import"./_commonjsHelpers-de833af9.js";import"./Popover-923cd157.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./createTheme-bf72f819.js";import"./index-aa4d0353.js";import"./styled-8f47f2e2.js";import"./useThemeProps-3a07dd36.js";import"./generateUtilityClasses-d818091b.js";import"./Modal-2139a970.js";import"./Backdrop-c75f29d0.js";import"./useTheme-b9b9347b.js";import"./utils-6f56962a.js";import"./inheritsLoose-5494d9cc.js";import"./index-2801d3c9.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-8c90c05b.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-bb0aa125.js";import"./debounce-517eeb3c.js";import"./Grow-5b576062.js";const N={title:"Components/Popover",component:s,tags:["autodocs"]},t={render:i=>{const[e,r]=d.useState(null),l=c=>{r(c.currentTarget)},a=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:l,children:"Toggle Popover"}),o.jsx(s,{...i,id:"demo",open:!!e,anchorEl:e,onClose:a,children:"The content of the Popover."})]})}};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=Popover.stories-0c735568.js.map
