import{j as s}from"./jsx-runtime-DZlKWc7q.js";import{r as x}from"./index-3dRrDZpt.js";import{a as i,S as L}from"./Stepper-B7mPpDEl.js";import"./identifier-DOope7UP.js";import"./generateUtilityClass-CXPxvQOg.js";import"./styled-Mw1EHJJT.js";import"./defaultTheme-DgpnsjHP.js";import"./generateUtilityClasses-CkJG6r2x.js";import"./DefaultPropsProvider-BUlghEOV.js";import"./isMuiElement-BZL4V-eo.js";import"./createSvgIcon-CNApDc7Z.js";import"./ButtonBase-DG2qOmNJ.js";import"./useTimeout-Caar1w0_.js";import"./TransitionGroupContext-CTqiJmAL.js";import"./useForkRef-Dg5HCZjH.js";import"./useIsFocusVisible-kKmNRUXV.js";import"./useEventCallback-rxG9GCI1.js";import"./useEnhancedEffect-BJLNeg-6.js";import"./Collapse-DZcn9G6i.js";import"./utils-CiCX3onH.js";import"./index-BAcUCDwH.js";import"./index-BVoldrdP.js";import"./useTheme-DVj2CI2E.js";import"./useTheme-C1aVjhx_.js";const J={title:"Components/Stepper/Stepper",component:i,tags:["autodocs"]},t={render:()=>{const[p,o]=x.useState(0),n=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,children:n.map((e,a)=>s.jsx(L,{asButton:!0,onClick:()=>o(a),label:e},e))})}},r={render:()=>{const[p,o]=x.useState(0),n=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,orientation:"vertical",children:n.map((e,a)=>s.jsx(L,{onClick:()=>o(a),label:e,children:e},e))})}};var c,m,S;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState(0);
    const steps = ["First step", "Second step", "Last step"];
    return <Stepper activeStep={step} nonLinear>
        {steps.map((label, index) => <Step key={label} asButton onClick={() => setStep(index)} label={label} />)}
      </Stepper>;
  }
}`,...(S=(m=t.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState(0);
    const steps = ["First step", "Second step", "Last step"];
    return <Stepper activeStep={step} nonLinear orientation="vertical">
        {steps.map((label, index) => <Step key={label} onClick={() => setStep(index)} label={label}>
            {label}
          </Step>)}
      </Stepper>;
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const K=["Base","Vertical"];export{t as Base,r as Vertical,K as __namedExportsOrder,J as default};
