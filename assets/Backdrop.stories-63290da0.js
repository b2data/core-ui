import{j as e}from"./jsx-runtime-4ca860c5.js";import{C as s}from"./CircularProgress-0a906566.js";import{M as v}from"./Backdrop-b5fe5510.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./Box-db9d02d2.js";import"./createTheme-f7fbaf76.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./clsx-63d16a80.js";import"./extendSxProp-69c75e3e.js";import"./CircularProgress-29f9ddb9.js";import"./useThemeProps-8e2a0e37.js";import"./styled-3543814b.js";import"./generateUtilityClasses-802c53db.js";import"./emotion-react.browser.esm-13bdab44.js";import"./Typography-65ef5db8.js";import"./useTheme-b04d84f2.js";import"./utils-32a282cb.js";import"./inheritsLoose-c82a83d4.js";import"./index-2801d3c9.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";const o=r=>e.jsx(v,{...r});try{o.displayName="Backdrop",o.__docgenInfo={description:"",displayName:"Backdrop",props:{variant:{defaultValue:{value:"light"},description:"Variant of backdrop",name:"variant",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},invisible:{defaultValue:{value:"false"},description:"If `true`, the backdrop is invisible.\nIt can be used when rendering a popover or a custom select component.",name:"invisible",required:!1,type:{name:"boolean"}}}}}catch{}const R={title:"Components/Backdrop",component:o,tags:["autodocs"]},n={args:{children:e.jsx(s,{})},render:r=>e.jsx("div",{style:{height:300},children:e.jsx(o,{...r,open:r.open})})},a={args:{variant:"light",children:e.jsx(s,{color:"inherit"})},render:r=>e.jsx("div",{style:{height:200},children:e.jsx(o,{...r,open:!0})})},t={args:{variant:"dark",children:e.jsx(s,{color:"inherit"})},render:r=>e.jsx("div",{style:{height:200},children:e.jsx(o,{...r,open:!0})})};var i,p,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <CircularProgress />
  },
  render: props => <div style={{
    height: 300
  }}>
      <Backdrop {...props} open={props.open} />
    </div>
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "light",
    children: <CircularProgress color="inherit" />
  },
  render: props => <div style={{
    height: 200
  }}>
      <Backdrop {...props} open />
    </div>
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "dark",
    children: <CircularProgress color="inherit" />
  },
  render: props => <div style={{
    height: 200
  }}>
      <Backdrop {...props} open />
    </div>
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const z=["Base","Light","Dark"];export{n as Base,t as Dark,a as Light,z as __namedExportsOrder,R as default};
//# sourceMappingURL=Backdrop.stories-63290da0.js.map
