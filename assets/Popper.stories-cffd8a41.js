import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as t}from"./index-61bf1805.js";import{P as s}from"./Popper-4bc4f093.js";import"./_commonjsHelpers-de833af9.js";import"./Popper-0ab55555.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./createTheme-afe70497.js";import"./styled-938ba038.js";import"./index-b47fffdc.js";import"./useThemeProps-bf98364a.js";import"./generateUtilityClasses-8f2c365e.js";import"./ClassNameConfigurator-4826bb42.js";import"./ownerDocument-613eb639.js";import"./Portal-c6ffb70f.js";import"./index-2801d3c9.js";import"./useForkRef-80a5c2b4.js";import"./useEnhancedEffect-e1879ff8.js";import"./useSlotProps-761aac92.js";import"./isHostComponent-73d6e646.js";const L={title:"Components/Popper",component:s,tags:["autodocs"]},o={render:i=>{const[a,c]=t.useState(!1),[d,l]=t.useState(null),m=u=>{l(u.currentTarget),c(h=>!h)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{"aria-describedby":"demo",type:"button",onClick:m,children:"Toggle Popper"}),e.jsx(s,{...i,id:"demo",open:a,anchorEl:d,children:e.jsx("div",{style:{border:"1px solid red",background:"white",padding:8},children:"The content of the Popper."})})]})}};var n,r,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen(previousOpen => !previousOpen);
    };
    return <>
        <button aria-describedby="demo" type="button" onClick={handleClick}>
          Toggle Popper
        </button>
        <Popper {...props} id="demo" open={open} anchorEl={anchorEl}>
          <div style={{
          border: "1px solid red",
          background: "white",
          padding: 8
        }}>
            The content of the Popper.
          </div>
        </Popper>
      </>;
  }
}`,...(p=(r=o.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const R=["Base"];export{o as Base,R as __namedExportsOrder,L as default};
//# sourceMappingURL=Popper.stories-cffd8a41.js.map
