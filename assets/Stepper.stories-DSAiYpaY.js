import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-DQLiH3RP.js";import{a as i,S as L}from"./Stepper-DM8_gpUk.js";import"./index-PKGOc6w3.js";import"./identifier-DtIXL9n7.js";import"./generateUtilityClasses-KoSbOHxf.js";import"./DefaultPropsProvider-CbX9bpU7.js";import"./styled-BJ0TTCEB.js";import"./isMuiElement-F0FdrIHp.js";import"./memoTheme-BuPib-dq.js";import"./useSlot-BXYsnuZK.js";import"./resolveComponentProps-Bi1IQseL.js";import"./useForkRef-8i08ZgmQ.js";import"./createSvgIcon-BtpK0we9.js";import"./ButtonBase-BOqIy2IP.js";import"./useTimeout-fSo4lzeS.js";import"./TransitionGroupContext-BSJTrji_.js";import"./emotion-react.browser.esm-cvNfxSC7.js";import"./useEventCallback-Drq2SckL.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./isFocusVisible-B8k4qzLc.js";import"./Collapse-Cmora6bo.js";import"./useTheme-DNsyaSfM.js";import"./useTheme-CIxVfZhu.js";import"./utils-D-OqLXMy.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";const N={title:"Components/Stepper/Stepper",component:i,tags:["autodocs"]},e={render:()=>{const[p,o]=x.useState(0),n=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,children:n.map((t,a)=>s.jsx(L,{asButton:!0,onClick:()=>o(a),label:t},t))})}},r={render:()=>{const[p,o]=x.useState(0),n=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,orientation:"vertical",children:n.map((t,a)=>s.jsx(L,{onClick:()=>o(a),label:t,children:t},t))})}};var m,c,S;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState(0);
    const steps = ["First step", "Second step", "Last step"];
    return <Stepper activeStep={step} nonLinear>
        {steps.map((label, index) => <Step key={label} asButton onClick={() => setStep(index)} label={label} />)}
      </Stepper>;
  }
}`,...(S=(c=e.parameters)==null?void 0:c.docs)==null?void 0:S.source}}};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState(0);
    const steps = ["First step", "Second step", "Last step"];
    return <Stepper activeStep={step} nonLinear orientation="vertical">
        {steps.map((label, index) => <Step key={label} onClick={() => setStep(index)} label={label}>
            {label}
          </Step>)}
      </Stepper>;
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const P=["Base","Vertical"];export{e as Base,r as Vertical,P as __namedExportsOrder,N as default};
