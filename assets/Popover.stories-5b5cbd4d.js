import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as d}from"./index-61bf1805.js";import{P as i}from"./Popover-9ccb0ae6.js";import"./_commonjsHelpers-de833af9.js";import"./Popover-7044e2a9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./createTheme-316778f4.js";import"./index-05c64dab.js";import"./styled-9b74321f.js";import"./defaultTheme-fea1ec9a.js";import"./useThemeProps-8ddb2dd0.js";import"./generateUtilityClasses-5ea778c4.js";import"./Modal-35ee554a.js";import"./Backdrop-2c48098d.js";import"./useTheme-b859b38f.js";import"./utils-f86e1de4.js";import"./inheritsLoose-5494d9cc.js";import"./index-2801d3c9.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./ClassNameConfigurator-4826bb42.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-7dac0002.js";import"./isHostComponent-73d6e646.js";import"./Portal-c6ffb70f.js";import"./Paper-90a9c904.js";import"./debounce-517eeb3c.js";import"./Grow-afbbb00d.js";const Q={title:"Components/Popover",component:i,tags:["autodocs"]},t={render:s=>{const[e,r]=d.useState(null),l=c=>{r(c.currentTarget)},a=()=>{r(null)};return o.jsxs(o.Fragment,{children:[o.jsx("button",{"aria-describedby":"demo",type:"button",onClick:l,children:"Toggle Popover"}),o.jsx(i,{...s,id:"demo",open:!!e,anchorEl:e,onClose:a,children:"The content of the Popover."})]})}};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const U=["Base"];export{t as Base,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Popover.stories-5b5cbd4d.js.map
