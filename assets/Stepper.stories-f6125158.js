import{j as s}from"./jsx-runtime-4ca860c5.js";import{r as x}from"./index-61bf1805.js";import{S as i,a as L}from"./Stepper-0b6a8a74.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-afe70497.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./index-b47fffdc.js";import"./useThemeProps-bf98364a.js";import"./styled-938ba038.js";import"./generateUtilityClasses-8f2c365e.js";import"./ButtonBase-d6010b8e.js";import"./emotion-react.browser.esm-42739ee1.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-c78074a7.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./isMuiElement-6a90d2d1.js";import"./createSvgIcon-b1b29720.js";import"./Collapse-ac3ed2c6.js";import"./utils-eb1a1c61.js";import"./index-2801d3c9.js";import"./useTheme-9d477022.js";const K={title:"Components/Stepper/Stepper",component:i,tags:["autodocs"]},e={render:()=>{const[p,o]=x.useState(0),n=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,children:n.map((t,a)=>s.jsx(L,{asButton:!0,onClick:()=>o(a),label:t},t))})}},r={render:()=>{const[p,o]=x.useState(0),n=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,orientation:"vertical",children:n.map((t,a)=>s.jsx(L,{onClick:()=>o(a),label:t,children:t},t))})}};var c,m,S;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState(0);
    const steps = ["First step", "Second step", "Last step"];
    return <Stepper activeStep={step} nonLinear>
        {steps.map((label, index) => <Step key={label} asButton onClick={() => setStep(index)} label={label} />)}
      </Stepper>;
  }
}`,...(S=(m=e.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState(0);
    const steps = ["First step", "Second step", "Last step"];
    return <Stepper activeStep={step} nonLinear orientation="vertical">
        {steps.map((label, index) => <Step key={label} onClick={() => setStep(index)} label={label}>{label}</Step>)}
      </Stepper>;
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const M=["Base","Vertical"];export{e as Base,r as Vertical,M as __namedExportsOrder,K as default};
//# sourceMappingURL=Stepper.stories-f6125158.js.map
