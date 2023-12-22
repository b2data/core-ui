import{j as e}from"./jsx-runtime-4ca860c5.js";import{P as l}from"./Preview-607a0968.js";import{F as c}from"./FormControlLabel-495f6a22.js";import{R as k}from"./index-61bf1805.js";import{M as T}from"./Switch-45deebc1.js";import"./FormControlLabel-d0385aba.js";import"./createTheme-f7fbaf76.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./clsx-63d16a80.js";import"./styled-3543814b.js";import"./useThemeProps-8e2a0e37.js";import"./generateUtilityClasses-802c53db.js";import"./formControlState-a1fb9590.js";import"./useFormControl-0fc72469.js";import"./Typography-65ef5db8.js";import"./extendSxProp-69c75e3e.js";import"./Stack-06558513.js";import"./_commonjsHelpers-de833af9.js";import"./SwitchBase-a74a0507.js";import"./ButtonBase-031fb489.js";import"./emotion-react.browser.esm-13bdab44.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-9ca792e3.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./useControlled-1b61d410.js";const t=k.forwardRef((r,C)=>e.jsx(T,{ref:C,...r}));try{t.displayName="Switch",t.__docgenInfo={description:"",displayName:"Switch",props:{color:{defaultValue:{value:"primary"},description:"The color of the component.",name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},size:{defaultValue:{value:"small"},description:"The size of the component. `small` is equivalent to the dense Switch styling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},defaultChecked:{defaultValue:null,description:"The default checked state. Use when the component is not controlled.",name:"defaultChecked",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, checked: boolean) => void)"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},disabled:{defaultValue:null,description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},required:{defaultValue:{value:"false"},description:"If `true`, the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`The value of the component. The DOM API casts this to a string.
The browser uses "on" as the default value.`,name:"value",required:!1,type:{name:"unknown"}},icon:{defaultValue:null,description:"The icon to display when the component is unchecked.",name:"icon",required:!1,type:{name:"ReactNode"}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}}}}}catch{}const oe={title:"Components/Inputs/Switch",component:t,tags:["autodocs"]},o={argTypes:{onChange:{action:"onChange"}},render:r=>e.jsx(t,{...r})},a={render:r=>e.jsxs(l,{children:[e.jsx(t,{...r,defaultChecked:!0}),e.jsx(t,{...r}),e.jsx(t,{...r,disabled:!0}),e.jsx(t,{...r,disabled:!0,checked:!0})]})},n={render:r=>e.jsxs(l,{children:[e.jsx(c,{label:"Label",control:e.jsx(t,{...r})}),e.jsx(c,{label:"Required",required:!0,control:e.jsx(t,{...r})}),e.jsx(c,{label:"Disabled",disabled:!0,control:e.jsx(t,{...r})})]})},s={render:r=>e.jsxs(l,{children:[e.jsx(t,{...r,size:"small"}),e.jsx(t,{...r,size:"medium"})]})},i={args:{checked:!0},render:r=>e.jsxs(l,{children:[e.jsx(t,{...r,color:"primary"}),e.jsx(t,{...r,color:"secondary"}),e.jsx(t,{...r,color:"success"}),e.jsx(t,{...r,color:"error"}),e.jsx(t,{...r,color:"info"}),e.jsx(t,{...r,color:"warning"})]})};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: {
    onChange: {
      action: "onChange"
    }
  },
  render: props => <Switch {...props} />
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,h,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => <Preview>
      <Switch {...props} defaultChecked />
      <Switch {...props} />
      <Switch {...props} disabled />
      <Switch {...props} disabled checked />
    </Preview>
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var w,b,v;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <Preview>
      <FormControlLabel label="Label" control={<Switch {...props} />} />
      <FormControlLabel label="Required" required control={<Switch {...props} />} />
      <FormControlLabel label="Disabled" disabled control={<Switch {...props} />} />
    </Preview>
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,g,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <Preview>
      <Switch {...props} size="small" />
      <Switch {...props} size="medium" />
    </Preview>
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var x,j,q;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const ae=["Base","Variants","Labels","Sizes","Colors"];export{o as Base,i as Colors,n as Labels,s as Sizes,a as Variants,ae as __namedExportsOrder,oe as default};
//# sourceMappingURL=Switch.stories-2cf7abfa.js.map
