import{r as c,j as s}from"./iframe-CPQWTtPx.js";import{a as i,S as m}from"./Stepper-CihteK1d.js";import"./preload-helper-D9Z9MdNV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./styled-CVYEzxfA.js";import"./isMuiElement-DNzBAE5e.js";import"./memoTheme-BaYEZ6jo.js";import"./useSlot-A_Glp2nr.js";import"./mergeSlotProps-CC7Q4nyl.js";import"./useForkRef-BakhbzqY.js";import"./createSvgIcon-CTccOsUD.js";import"./ButtonBase-EDIMIaVv.js";import"./useTimeout-DTjciWwP.js";import"./TransitionGroupContext-Cfd4JEJX.js";import"./useEventCallback-Cj11N6aI.js";import"./isFocusVisible-B8k4qzLc.js";import"./Collapse-BqjCly_d.js";import"./useTheme-T4B27w73.js";import"./utils-ETLqDsx7.js";import"./index-ClHgv_2Q.js";import"./index-DdDY9x1M.js";const q={title:"Components/Stepper/Stepper",component:i,tags:["autodocs"]},t={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,children:o.map((e,a)=>s.jsx(m,{asButton:!0,onClick:()=>n(a),label:e},e))})}},r={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,orientation:"vertical",children:o.map((e,a)=>s.jsx(m,{onClick:()=>n(a),label:e,children:e},e))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const w=["Base","Vertical"];export{t as Base,r as Vertical,w as __namedExportsOrder,q as default};
