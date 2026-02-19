import{r as c,j as s}from"./iframe-CXZ_NyuK.js";import{a as i,S as m}from"./Stepper-DT_GsXjI.js";import"./preload-helper-PPVm8Dsz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./styled-BvUIjKhn.js";import"./isMuiElement-CUSA2aUE.js";import"./memoTheme-DTk_V_hg.js";import"./useSlot-ML2559-c.js";import"./mergeSlotProps-MFdmIzEm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CG8Sv1UH.js";import"./createSvgIcon-CwIJRQJW.js";import"./ButtonBase-C7cht_mo.js";import"./useTimeout-ZSFSp5cI.js";import"./TransitionGroupContext-CxxqYawP.js";import"./useEventCallback-EozOT64W.js";import"./isFocusVisible-B8k4qzLc.js";import"./Collapse-k_ogPl5m.js";import"./useTheme-DWoggi07.js";import"./utils-DFraDq1z.js";import"./index-BvG9M3NN.js";import"./index-By5H4shY.js";const w={title:"Components/Stepper/Stepper",component:i,tags:["autodocs"]},t={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,children:o.map((e,a)=>s.jsx(m,{asButton:!0,onClick:()=>n(a),label:e},e))})}},r={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,orientation:"vertical",children:o.map((e,a)=>s.jsx(m,{onClick:()=>n(a),label:e,children:e},e))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
