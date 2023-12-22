import{j as e}from"./jsx-runtime-4ca860c5.js";import{P as h}from"./Preview-607a0968.js";import{C as g}from"./Chip-15d22d40.js";import{R as y}from"./index-61bf1805.js";import{D as I}from"./Divider-748fd79f.js";import"./Chip-18d7f493.js";import"./createTheme-f7fbaf76.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./clsx-63d16a80.js";import"./createSvgIcon-77a259fa.js";import"./useThemeProps-8e2a0e37.js";import"./styled-3543814b.js";import"./generateUtilityClasses-802c53db.js";import"./useForkRef-80a5c2b4.js";import"./ButtonBase-031fb489.js";import"./emotion-react.browser.esm-13bdab44.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";import"./useIsFocusVisible-9ca792e3.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./_commonjsHelpers-de833af9.js";import"./dividerClasses-b9040cf2.js";const n=y.forwardRef((i,f)=>e.jsx(I,{ref:f,...i}));try{n.displayName="Divider",n.__docgenInfo={description:"",displayName:"Divider",props:{orientation:{defaultValue:{value:"horizontal"},description:"The component orientation.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},textAlign:{defaultValue:{value:"center"},description:"The text alignment.",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"center"'}]}},variant:{defaultValue:{value:"fullWidth"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inset"'},{value:'"fullWidth"'},{value:'"middle"'}]}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},absolute:{defaultValue:{value:"false"},description:"Absolutely position the element.",name:"absolute",required:!1,type:{name:"boolean"}},flexItem:{defaultValue:{value:"false"},description:"If `true`, a vertical divider will have the correct height when used in flex container.\n(By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)",name:"flexItem",required:!1,type:{name:"boolean"}},light:{defaultValue:{value:"false"},description:"If `true`, the divider will have a lighter color.",name:"light",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Components/Divider",component:n,tags:["autodocs"]},t=`
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Phasellus id dignissim justo. Nulla ut facilisis ligula. 
  Interdum et malesuada fames ac ante ipsum primis in faucibus. 
  Sed malesuada lobortis pretium.
`,r={},a={args:{sx:{my:2}},render:i=>e.jsxs("div",{children:[t,e.jsx(n,{...i,children:"CENTER"}),t,e.jsx(n,{...i,textAlign:"left",children:"LEFT"}),t,e.jsx(n,{...i,textAlign:"right",children:"RIGHT"}),t,e.jsx(n,{...i,children:e.jsx(g,{label:"CHIP"})}),t]})},l={render:i=>e.jsxs(h,{style:{flexDirection:"column",alignItems:"start"},children:[e.jsxs("div",{style:{display:"flex",gap:"16px",border:"1px solid",alignItems:"center"},children:[e.jsx("div",{children:t}),e.jsx(n,{...i,flexItem:!0,orientation:"vertical",variant:"fullWidth"}),e.jsx("div",{children:t})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",border:"1px solid",alignItems:"center"},children:[e.jsx("div",{children:t}),e.jsx(n,{...i,flexItem:!0,orientation:"vertical",variant:"inset"}),e.jsx("div",{children:t})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",border:"1px solid",alignItems:"center"},children:[e.jsx("div",{children:t}),e.jsx(n,{...i,flexItem:!0,orientation:"vertical",variant:"middle"}),e.jsx("div",{children:t})]})]})};var s,o,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var p,m,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sx: {
      my: 2
    }
  },
  render: props => <div>
      {content}
      <Divider {...props}>CENTER</Divider>
      {content}
      <Divider {...props} textAlign="left">
        LEFT
      </Divider>
      {content}
      <Divider {...props} textAlign="right">
        RIGHT
      </Divider>
      {content}
      <Divider {...props}>
        <Chip label="CHIP" />
      </Divider>
      {content}
    </div>
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var v,u,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <Preview style={{
    flexDirection: "column",
    alignItems: "start"
  }}>
      <div style={{
      display: "flex",
      gap: "16px",
      border: "1px solid",
      alignItems: "center"
    }}>
        <div>{content}</div>
        <Divider {...props} flexItem orientation="vertical" variant="fullWidth" />
        <div>{content}</div>
      </div>
      <div style={{
      display: "flex",
      gap: "16px",
      border: "1px solid",
      alignItems: "center"
    }}>
        <div>{content}</div>
        <Divider {...props} flexItem orientation="vertical" variant="inset" />
        <div>{content}</div>
      </div>
      <div style={{
      display: "flex",
      gap: "16px",
      border: "1px solid",
      alignItems: "center"
    }}>
        <div>{content}</div>
        <Divider {...props} flexItem orientation="vertical" variant="middle" />
        <div>{content}</div>
      </div>
    </Preview>
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const J=["Base","Aligns","Variants"];export{a as Aligns,r as Base,l as Variants,J as __namedExportsOrder,k as default};
//# sourceMappingURL=Divider.stories-406142f7.js.map
