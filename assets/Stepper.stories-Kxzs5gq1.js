import{r as c,j as s}from"./iframe-BCz_NIWA.js";import{a as i,S as m}from"./Stepper-d2a-H4zt.js";import"./preload-helper-D9Z9MdNV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./styled-DMcz7HpS.js";import"./isMuiElement-zPLPz0R8.js";import"./memoTheme-HkdJwuAH.js";import"./useSlot-DjJyu2W-.js";import"./mergeSlotProps-Efm9CLsr.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CSZsaPHq.js";import"./createSvgIcon-BG24uHfj.js";import"./ButtonBase-BsXO2UWG.js";import"./useTimeout-B3_rYZv9.js";import"./TransitionGroupContext-BDhOcy0u.js";import"./useEventCallback-2E7ndIeg.js";import"./isFocusVisible-B8k4qzLc.js";import"./Collapse-FPmHCE5B.js";import"./useTheme-EP6WGabO.js";import"./utils-CALKgiFZ.js";import"./index-Ar8B3F6Q.js";import"./index-DV66Sa4q.js";const w={title:"Components/Stepper/Stepper",component:i,tags:["autodocs"]},t={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,children:o.map((e,a)=>s.jsx(m,{asButton:!0,onClick:()=>n(a),label:e},e))})}},r={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,orientation:"vertical",children:o.map((e,a)=>s.jsx(m,{onClick:()=>n(a),label:e,children:e},e))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
