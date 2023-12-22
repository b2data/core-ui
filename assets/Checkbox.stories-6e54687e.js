import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as V}from"./index-61bf1805.js";import{d as $}from"./Favorite-a3932429.js";import{r as A,i as G}from"./createSvgIcon-be1c860b.js";import{P as h}from"./Preview-607a0968.js";import{F as c}from"./FormControlLabel-495f6a22.js";import{C as o}from"./Checkbox-7e56b896.js";import"./_commonjsHelpers-de833af9.js";import"./createSvgIcon-77a259fa.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./createTheme-f7fbaf76.js";import"./clsx-63d16a80.js";import"./useThemeProps-8e2a0e37.js";import"./styled-3543814b.js";import"./generateUtilityClasses-802c53db.js";import"./useForkRef-80a5c2b4.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./isMuiElement-6a90d2d1.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./useControlled-1b61d410.js";import"./useEventCallback-1165b6b6.js";import"./useIsFocusVisible-9ca792e3.js";import"./FormControlLabel-d0385aba.js";import"./formControlState-a1fb9590.js";import"./useFormControl-0fc72469.js";import"./Typography-65ef5db8.js";import"./extendSxProp-69c75e3e.js";import"./Stack-06558513.js";import"./Checkbox-1ff57be7.js";import"./SwitchBase-a74a0507.js";import"./ButtonBase-031fb489.js";import"./emotion-react.browser.esm-13bdab44.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";var C={},J=G;Object.defineProperty(C,"__esModule",{value:!0});var M=C.default=void 0,K=J(A()),N=e,Q=(0,K.default)((0,N.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");M=C.default=Q;const qe={title:"Components/Inputs/Checkbox",component:o,tags:["autodocs"]},a={argTypes:{onChange:{action:"onChange"}},render:r=>e.jsx(o,{...r})},s={render:r=>e.jsxs(h,{children:[e.jsx(o,{...r,defaultChecked:!0}),e.jsx(o,{...r}),e.jsx(o,{...r,disabled:!0}),e.jsx(o,{...r,disabled:!0,checked:!0})]})},d={render:r=>e.jsxs(h,{children:[e.jsx(c,{label:"Label",control:e.jsx(o,{...r})}),e.jsx(c,{label:"Required",required:!0,control:e.jsx(o,{...r})}),e.jsx(c,{label:"Disabled",disabled:!0,control:e.jsx(o,{...r})})]})},l={render:r=>e.jsxs(h,{children:[e.jsx(o,{...r,size:"small"}),e.jsx(o,{...r,size:"medium"})]})},i={args:{icon:e.jsx(M,{}),checkedIcon:e.jsx($,{}),color:"error"}},p={args:{checked:!0},render:r=>e.jsxs(h,{children:[e.jsx(o,{...r,color:"primary"}),e.jsx(o,{...r,color:"secondary"}),e.jsx(o,{...r,color:"default"}),e.jsx(o,{...r,color:"success"}),e.jsx(o,{...r,color:"error"}),e.jsx(o,{...r,color:"info"}),e.jsx(o,{...r,color:"warning"})]})},m={render:r=>{const[n,u]=V.useState([!0,!1]),T=t=>{u([t.target.checked,t.target.checked])},H=t=>{u([t.target.checked,n[1]])},O=t=>{u([n[0],t.target.checked])};return e.jsxs("div",{children:[e.jsx(c,{label:"Parent",control:e.jsx(o,{...r,checked:n[0]&&n[1],indeterminate:n[0]!==n[1],onChange:T})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginLeft:16},children:[e.jsx(c,{label:"Child 1",control:e.jsx(o,{...r,checked:n[0],onChange:H})}),e.jsx(c,{label:"Child 2",control:e.jsx(o,{...r,checked:n[1],onChange:O})})]})]})}};var x,k,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  argTypes: {
    onChange: {
      action: "onChange"
    }
  },
  render: props => <Checkbox {...props} />
}`,...(b=(k=a.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var g,j,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <Preview>
      <Checkbox {...props} defaultChecked />
      <Checkbox {...props} />
      <Checkbox {...props} disabled />
      <Checkbox {...props} disabled checked />
    </Preview>
}`,...(v=(j=s.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var f,L,I;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <Preview>
      <FormControlLabel label="Label" control={<Checkbox {...props} />} />
      <FormControlLabel label="Required" required control={<Checkbox {...props} />} />
      <FormControlLabel label="Disabled" disabled control={<Checkbox {...props} />} />
    </Preview>
}`,...(I=(L=d.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var P,S,F;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <Preview>
      <Checkbox {...props} size="small" />
      <Checkbox {...props} size="medium" />
    </Preview>
}`,...(F=(S=l.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var w,y,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    icon: <FavoriteBorderIcon />,
    checkedIcon: <FavoriteIcon />,
    color: "error"
  }
}`,...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var _,R,z;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    checked: true
  },
  render: props => <Preview>
      <Checkbox {...props} color="primary" />
      <Checkbox {...props} color="secondary" />
      <Checkbox {...props} color="default" />
      <Checkbox {...props} color="success" />
      <Checkbox {...props} color="error" />
      <Checkbox {...props} color="info" />
      <Checkbox {...props} color="warning" />
    </Preview>
}`,...(z=(R=p.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var q,D,B;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => {
    const [checked, setChecked] = useState([true, false]);
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };
    return <div>
        <FormControlLabel label="Parent" control={<Checkbox {...props} checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />} />
        <div style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: 16
      }}>
          <FormControlLabel label="Child 1" control={<Checkbox {...props} checked={checked[0]} onChange={handleChange2} />} />
          <FormControlLabel label="Child 2" control={<Checkbox {...props} checked={checked[1]} onChange={handleChange3} />} />
        </div>
      </div>;
  }
}`,...(B=(D=m.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const De=["Base","Variants","Labels","Sizes","Icons","Colors","Indeterminate"];export{a as Base,p as Colors,i as Icons,m as Indeterminate,d as Labels,l as Sizes,s as Variants,De as __namedExportsOrder,qe as default};
//# sourceMappingURL=Checkbox.stories-6e54687e.js.map
