import{r as c,j as s}from"./iframe-D5_OA-ZK.js";import{a as i,S as m}from"./Stepper-BhFeL3T1.js";import"./preload-helper-D9Z9MdNV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./styled-Co26MWGr.js";import"./isMuiElement-IdtHM0vO.js";import"./memoTheme-D980zPRr.js";import"./useSlot-DWUuY1NV.js";import"./mergeSlotProps-C-NrcMNJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-XZbQ7842.js";import"./createSvgIcon-DM0aTCU4.js";import"./ButtonBase-BwGjSdxK.js";import"./useTimeout-CRsqOtag.js";import"./TransitionGroupContext-Dw2CfZNK.js";import"./useEventCallback-BhmZMpnQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./Collapse-PW1-76gJ.js";import"./useTheme-C52RKMww.js";import"./utils-1P7-SQlo.js";import"./index-CeesYFFv.js";import"./index-Bm5Jvdhx.js";const w={title:"Components/Stepper/Stepper",component:i,tags:["autodocs"]},t={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,children:o.map((e,a)=>s.jsx(m,{asButton:!0,onClick:()=>n(a),label:e},e))})}},r={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,orientation:"vertical",children:o.map((e,a)=>s.jsx(m,{onClick:()=>n(a),label:e,children:e},e))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState(0);
    const steps = ["First step", "Second step", "Last step"];
    return <Stepper activeStep={step} nonLinear>
        {steps.map((label, index) => <Step key={label} asButton onClick={() => setStep(index)} label={label} />)}
      </Stepper>;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [step, setStep] = useState(0);
    const steps = ["First step", "Second step", "Last step"];
    return <Stepper activeStep={step} nonLinear orientation="vertical">
        {steps.map((label, index) => <Step key={label} onClick={() => setStep(index)} label={label}>
            {label}
          </Step>)}
      </Stepper>;
  }
}`,...r.parameters?.docs?.source}}};const z=["Base","Vertical"];export{t as Base,r as Vertical,z as __namedExportsOrder,w as default};
