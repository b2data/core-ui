import{j as e}from"./jsx-runtime-4ca860c5.js";import{P as l}from"./Preview-607a0968.js";import{B as c}from"./Button-978b87d0.js";import{A as r}from"./Alert-b8fc63e4.js";import{B as C}from"./Box-fefa9705.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-bf72f819.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./generateUtilityClasses-d818091b.js";import"./styled-8f47f2e2.js";import"./index-aa4d0353.js";import"./useThemeProps-3a07dd36.js";import"./Button-9e16b906.js";import"./ButtonBase-12b39b19.js";import"./emotion-react.browser.esm-20161b7f.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./CircularProgress-bc81b3ed.js";import"./createSvgIcon-c16984bf.js";import"./Close-8a493683.js";import"./Paper-bb0aa125.js";import"./IconButton-523ac44e.js";import"./Typography-e48c7697.js";import"./extendSxProp-1c98bbe3.js";const ne={title:"Components/Alert/Alert",component:r,tags:["autodocs"]},n={args:{title:"Title",children:"content"}},i={args:{title:"Title",children:"content",variant:"outlined"}},o={args:{title:"Title",children:"content",sx:{width:400}},render:t=>e.jsxs(l,{children:[e.jsxs(l,{style:{flexDirection:"column",alignItems:"start"},children:[e.jsx(r,{...t}),e.jsx(r,{...t,severity:"success"}),e.jsx(r,{...t,severity:"error"}),e.jsx(r,{...t,severity:"warning"}),e.jsx(r,{...t,severity:"info"})]}),e.jsxs(l,{style:{flexDirection:"column",alignItems:"start"},children:[e.jsx(r,{...t,variant:"outlined"}),e.jsx(r,{...t,severity:"success",variant:"outlined"}),e.jsx(r,{...t,severity:"error",variant:"outlined"}),e.jsx(r,{...t,severity:"warning",variant:"outlined"}),e.jsx(r,{...t,severity:"info",variant:"outlined"})]})]})},s={args:{title:"Title",children:"content"},argTypes:{onClose:{action:"onClose"}}},a={args:{title:"Title",children:"content",actions:e.jsxs(C,{children:[e.jsx(c,{color:"default",size:"small",children:"Cancel"}),e.jsx(c,{color:"primary",size:"small",children:"Confirm"})]})}};var m,p,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: "Title",
    children: "content"
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,v,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Title",
    children: "content",
    variant: "outlined"
  }
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var g,y,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Title",
    children: "content",
    sx: {
      width: 400
    }
  },
  render: props => <Preview>
      <Preview style={{
      flexDirection: "column",
      alignItems: "start"
    }}>
        <Alert {...props} />
        <Alert {...props} severity="success" />
        <Alert {...props} severity="error" />
        <Alert {...props} severity="warning" />
        <Alert {...props} severity="info" />
      </Preview>
      <Preview style={{
      flexDirection: "column",
      alignItems: "start"
    }}>
        <Alert {...props} variant="outlined" />
        <Alert {...props} severity="success" variant="outlined" />
        <Alert {...props} severity="error" variant="outlined" />
        <Alert {...props} severity="warning" variant="outlined" />
        <Alert {...props} severity="info" variant="outlined" />
      </Preview>
    </Preview>
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,j,A;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: "Title",
    children: "content"
  },
  argTypes: {
    onClose: {
      action: "onClose"
    }
  }
}`,...(A=(j=s.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var w,B,T;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: "Title",
    children: "content",
    actions: <Box>
        <Button color="default" size="small">
          Cancel
        </Button>
        <Button color="primary" size="small">
          Confirm
        </Button>
      </Box>
  }
}`,...(T=(B=a.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const ie=["Base","Outlined","Variants","Close","Action"];export{a as Action,n as Base,s as Close,i as Outlined,o as Variants,ie as __namedExportsOrder,ne as default};
//# sourceMappingURL=Alert.stories-d046ccc2.js.map