import{r as c,j as s}from"./iframe-Bt0NHjzt.js";import{a as i,S as m}from"./Stepper-CA2mOnJd.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./styled-BEaRT_Fa.js";import"./isMuiElement-mcr7aDks.js";import"./memoTheme-BgU4zM9I.js";import"./useSlot-B6QK4qS-.js";import"./mergeSlotProps-CTGzhqDY.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-hJSLhPXd.js";import"./createSvgIcon-BmHbKF__.js";import"./ButtonBase-CyUYjTfn.js";import"./useTimeout-KoRalZn8.js";import"./TransitionGroupContext-B0SjSjGE.js";import"./useEventCallback-DRFCyGqk.js";import"./isFocusVisible-B8k4qzLc.js";import"./Collapse-DZY430ZD.js";import"./useTheme-CJIytwIy.js";import"./utils-ByOi0em4.js";import"./index-Ypw_AV9V.js";import"./index-gtplWchC.js";const w={title:"Components/Stepper/Stepper",component:i,tags:["autodocs"]},t={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,children:o.map((e,a)=>s.jsx(m,{asButton:!0,onClick:()=>n(a),label:e},e))})}},r={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,orientation:"vertical",children:o.map((e,a)=>s.jsx(m,{onClick:()=>n(a),label:e,children:e},e))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
