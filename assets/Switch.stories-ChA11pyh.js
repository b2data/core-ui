import{j as r}from"./jsx-runtime-DZlKWc7q.js";import{P as c}from"./Preview-BTHgH5bF.js";import{F as p}from"./FormControlLabel-ZdBP_nyj.js";import{S as o}from"./Switch-zZDUJrJH.js";import"./index-3dRrDZpt.js";import"./FormControlLabel-D_WDd-WW.js";import"./identifier-DOope7UP.js";import"./generateUtilityClass-CXPxvQOg.js";import"./styled-Mw1EHJJT.js";import"./defaultTheme-DgpnsjHP.js";import"./useFormControl-Dk_vwUyJ.js";import"./generateUtilityClasses-CkJG6r2x.js";import"./useControlled-DPuDlC9C.js";import"./ButtonBase-DG2qOmNJ.js";import"./DefaultPropsProvider-BUlghEOV.js";import"./useTimeout-Caar1w0_.js";import"./TransitionGroupContext-CTqiJmAL.js";import"./useForkRef-Dg5HCZjH.js";import"./useIsFocusVisible-kKmNRUXV.js";import"./useEventCallback-rxG9GCI1.js";import"./useEnhancedEffect-BJLNeg-6.js";import"./Typography-I7qryP9c.js";import"./Stack-BMBLIk7m.js";import"./useThemeProps-CaCgmJK7.js";import"./useTheme-C1aVjhx_.js";import"./Switch-DnG4KC8c.js";const Y={title:"Components/Inputs/Switch",component:o,tags:["autodocs"]},s={argTypes:{onChange:{action:"onChange"}},render:e=>r.jsx(o,{...e})},t={render:e=>r.jsxs(c,{children:[r.jsx(o,{...e,defaultChecked:!0}),r.jsx(o,{...e}),r.jsx(o,{...e,disabled:!0}),r.jsx(o,{...e,disabled:!0,checked:!0})]})},a={render:e=>r.jsxs(c,{children:[r.jsx(p,{label:"Label",control:r.jsx(o,{...e})}),r.jsx(p,{label:"Required",required:!0,control:r.jsx(o,{...e})}),r.jsx(p,{label:"Disabled",disabled:!0,control:r.jsx(o,{...e})})]})},n={render:e=>r.jsxs(c,{children:[r.jsx(o,{...e,size:"small"}),r.jsx(o,{...e,size:"medium"})]})},i={args:{checked:!0},render:e=>r.jsxs(c,{children:[r.jsx(o,{...e,color:"primary"}),r.jsx(o,{...e,color:"secondary"}),r.jsx(o,{...e,color:"success"}),r.jsx(o,{...e,color:"error"}),r.jsx(o,{...e,color:"info"}),r.jsx(o,{...e,color:"warning"})]})};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {
    onChange: {
      action: "onChange"
    }
  },
  render: props => <Switch {...props} />
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,h,w;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Preview>
      <Switch {...props} defaultChecked />
      <Switch {...props} />
      <Switch {...props} disabled />
      <Switch {...props} disabled checked />
    </Preview>
}`,...(w=(h=t.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var x,S,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <Preview>
      <FormControlLabel label="Label" control={<Switch {...props} />} />
      <FormControlLabel label="Required" required control={<Switch {...props} />} />
      <FormControlLabel label="Disabled" disabled control={<Switch {...props} />} />
    </Preview>
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,g,C;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Preview>
      <Switch {...props} size="small" />
      <Switch {...props} size="medium" />
    </Preview>
}`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var P,f,v;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    checked: true
  },
  render: props => <Preview>
      <Switch {...props} color="primary" />
      <Switch {...props} color="secondary" />
      <Switch {...props} color="success" />
      <Switch {...props} color="error" />
      <Switch {...props} color="info" />
      <Switch {...props} color="warning" />
    </Preview>
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Z=["Base","Variants","Labels","Sizes","Colors"];export{s as Base,i as Colors,a as Labels,n as Sizes,t as Variants,Z as __namedExportsOrder,Y as default};
