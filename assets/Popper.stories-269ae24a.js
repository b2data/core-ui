import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as t}from"./index-61bf1805.js";import{P as s}from"./Popper-49c44190.js";import"./_commonjsHelpers-de833af9.js";import"./Popper-df618c11.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./createTheme-316778f4.js";import"./styled-9b74321f.js";import"./index-05c64dab.js";import"./defaultTheme-fea1ec9a.js";import"./generateUtilityClasses-5ea778c4.js";import"./ClassNameConfigurator-4826bb42.js";import"./ownerDocument-613eb639.js";import"./Portal-c6ffb70f.js";import"./index-2801d3c9.js";import"./useForkRef-80a5c2b4.js";import"./useEnhancedEffect-e1879ff8.js";import"./useSlotProps-7dac0002.js";import"./isHostComponent-73d6e646.js";import"./useThemeProps-8ddb2dd0.js";const R={title:"Components/Popper",component:s,tags:["autodocs"]},o={render:i=>{const[a,c]=t.useState(!1),[d,m]=t.useState(null),l=u=>{m(u.currentTarget),c(h=>!h)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{"aria-describedby":"demo",type:"button",onClick:l,children:"Toggle Popper"}),e.jsx(s,{...i,id:"demo",open:a,anchorEl:d,children:e.jsx("div",{style:{border:"1px solid red",background:"white",padding:8},children:"The content of the Popper."})})]})}};var r,n,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const _=["Base"];export{o as Base,_ as __namedExportsOrder,R as default};
//# sourceMappingURL=Popper.stories-269ae24a.js.map
