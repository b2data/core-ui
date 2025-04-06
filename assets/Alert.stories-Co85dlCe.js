import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as l}from"./Preview-CyYdMjgA.js";import{B as c}from"./Button-CAWKV85a.js";import{A as r}from"./Alert-Cwu6GIuA.js";import{B as C}from"./Box-gWX7U2_5.js";import"./index-DQLiH3RP.js";import"./Button-Bv80YAyb.js";import"./index-PKGOc6w3.js";import"./identifier-DtIXL9n7.js";import"./styled-BJ0TTCEB.js";import"./DefaultPropsProvider-CbX9bpU7.js";import"./memoTheme-BuPib-dq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-KoSbOHxf.js";import"./useId-CCVJt5QL.js";import"./ButtonBase-BOqIy2IP.js";import"./useTimeout-fSo4lzeS.js";import"./TransitionGroupContext-BSJTrji_.js";import"./emotion-react.browser.esm-cvNfxSC7.js";import"./useForkRef-8i08ZgmQ.js";import"./useEventCallback-Drq2SckL.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bdan-uB-.js";import"./useSlot-BXYsnuZK.js";import"./resolveComponentProps-Bi1IQseL.js";import"./createSvgIcon-BtpK0we9.js";import"./Close-BU3UQVid.js";import"./IconButton-BHpVciwy.js";import"./Paper-1rqY9H9j.js";import"./useTheme-DNsyaSfM.js";import"./useTheme-CIxVfZhu.js";import"./Typography-B3F8RKoS.js";import"./index-B4ybzDYI.js";import"./extendSxProp-CeBvtLOD.js";const ae={title:"Components/Alert/Alert",component:r,tags:["autodocs"]},n={args:{title:"Title",children:"content"}},i={args:{title:"Title",children:"content",variant:"outlined"}},o={args:{title:"Title",children:"content",sx:{width:400}},render:t=>e.jsxs(l,{children:[e.jsxs(l,{style:{flexDirection:"column",alignItems:"start"},children:[e.jsx(r,{...t}),e.jsx(r,{...t,severity:"success"}),e.jsx(r,{...t,severity:"error"}),e.jsx(r,{...t,severity:"warning"}),e.jsx(r,{...t,severity:"info"})]}),e.jsxs(l,{style:{flexDirection:"column",alignItems:"start"},children:[e.jsx(r,{...t,variant:"outlined"}),e.jsx(r,{...t,severity:"success",variant:"outlined"}),e.jsx(r,{...t,severity:"error",variant:"outlined"}),e.jsx(r,{...t,severity:"warning",variant:"outlined"}),e.jsx(r,{...t,severity:"info",variant:"outlined"})]})]})},s={args:{title:"Title",children:"content"},argTypes:{onClose:{action:"onClose"}}},a={args:{title:"Title",children:"content",actions:e.jsxs(C,{children:[e.jsx(c,{color:"default",size:"small",children:"Cancel"}),e.jsx(c,{color:"primary",size:"small",children:"Confirm"})]})}};var m,p,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(T=(B=a.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const le=["Base","Outlined","Variants","Close","Action"];export{a as Action,n as Base,s as Close,i as Outlined,o as Variants,le as __namedExportsOrder,ae as default};
