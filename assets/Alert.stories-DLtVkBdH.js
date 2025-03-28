import{j as e}from"./jsx-runtime-DZlKWc7q.js";import{P as l}from"./Preview-BTHgH5bF.js";import{B as c}from"./Button-BrGUlhU_.js";import{A as r}from"./Alert-wmlARfYO.js";import{B as C}from"./Box-B4yDLkDm.js";import"./index-3dRrDZpt.js";import"./identifier-DOope7UP.js";import"./generateUtilityClasses-CkJG6r2x.js";import"./generateUtilityClass-CXPxvQOg.js";import"./Button-DnAuDp1s.js";import"./styled-Mw1EHJJT.js";import"./defaultTheme-DgpnsjHP.js";import"./DefaultPropsProvider-BUlghEOV.js";import"./ButtonBase-DG2qOmNJ.js";import"./useTimeout-Caar1w0_.js";import"./TransitionGroupContext-CTqiJmAL.js";import"./useForkRef-Dg5HCZjH.js";import"./useIsFocusVisible-kKmNRUXV.js";import"./useEventCallback-rxG9GCI1.js";import"./useEnhancedEffect-BJLNeg-6.js";import"./useId-C0_knTX8.js";import"./CircularProgress-DCuTWsso.js";import"./useSlot-BV7QuqwZ.js";import"./mergeSlotProps-D0R3fJWy.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CNApDc7Z.js";import"./Close-Cg2sl21Q.js";import"./IconButton-CPPCIBnV.js";import"./Paper-Dib-hOey.js";import"./Typography-I7qryP9c.js";import"./useTheme-C1aVjhx_.js";const ne={title:"Components/Alert/Alert",component:r,tags:["autodocs"]},n={args:{title:"Title",children:"content"}},i={args:{title:"Title",children:"content",variant:"outlined"}},o={args:{title:"Title",children:"content",sx:{width:400}},render:t=>e.jsxs(l,{children:[e.jsxs(l,{style:{flexDirection:"column",alignItems:"start"},children:[e.jsx(r,{...t}),e.jsx(r,{...t,severity:"success"}),e.jsx(r,{...t,severity:"error"}),e.jsx(r,{...t,severity:"warning"}),e.jsx(r,{...t,severity:"info"})]}),e.jsxs(l,{style:{flexDirection:"column",alignItems:"start"},children:[e.jsx(r,{...t,variant:"outlined"}),e.jsx(r,{...t,severity:"success",variant:"outlined"}),e.jsx(r,{...t,severity:"error",variant:"outlined"}),e.jsx(r,{...t,severity:"warning",variant:"outlined"}),e.jsx(r,{...t,severity:"info",variant:"outlined"})]})]})},s={args:{title:"Title",children:"content"},argTypes:{onClose:{action:"onClose"}}},a={args:{title:"Title",children:"content",actions:e.jsxs(C,{children:[e.jsx(c,{color:"default",size:"small",children:"Cancel"}),e.jsx(c,{color:"primary",size:"small",children:"Confirm"})]})}};var m,p,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
