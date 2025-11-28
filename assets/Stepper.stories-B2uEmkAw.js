import{r as c,j as s}from"./iframe-D-Af2_6K.js";import{a as i,S as m}from"./Stepper-BrGGmYSz.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./styled-D-PotgPw.js";import"./isMuiElement-81kDcdTn.js";import"./memoTheme-CHvOgVXV.js";import"./useSlot-28DLoccJ.js";import"./mergeSlotProps-BHlnBqKQ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C3l1oI6e.js";import"./createSvgIcon-BJIzGPGW.js";import"./ButtonBase-aYwaoYlD.js";import"./useTimeout-B-ndypME.js";import"./TransitionGroupContext-3wQKUh9s.js";import"./useEventCallback-CEyUjzcH.js";import"./isFocusVisible-B8k4qzLc.js";import"./Collapse-xrg1aIpb.js";import"./useTheme-D-CM3Y4q.js";import"./utils-CxvPnv--.js";import"./index-Dk52qgRX.js";import"./index-BbjCSB6D.js";const w={title:"Components/Stepper/Stepper",component:i,tags:["autodocs"]},t={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,children:o.map((e,a)=>s.jsx(m,{asButton:!0,onClick:()=>n(a),label:e},e))})}},r={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,orientation:"vertical",children:o.map((e,a)=>s.jsx(m,{onClick:()=>n(a),label:e,children:e},e))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
