import{r as c,j as s}from"./iframe-BjsjcTCH.js";import{a as i,S as m}from"./Stepper-55UMw04m.js";import"./preload-helper-D9Z9MdNV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./styled-B_VYI8z9.js";import"./isMuiElement-DqggRh2f.js";import"./memoTheme-BkiB6XT-.js";import"./useSlot-_7UiI0BH.js";import"./mergeSlotProps-Bba1iLBA.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CFOv3ZhY.js";import"./createSvgIcon-BWDMKnaQ.js";import"./ButtonBase-CkJtUOr4.js";import"./useTimeout-CGfVXgdi.js";import"./TransitionGroupContext-DktGN6vV.js";import"./useEventCallback-Cx1VukeI.js";import"./isFocusVisible-B8k4qzLc.js";import"./Collapse-DoHhn7Rv.js";import"./useTheme-Bdxx-ZzA.js";import"./utils-C829QIR_.js";import"./index-B6TwdEj4.js";import"./index-SVAzG-T_.js";const w={title:"Components/Stepper/Stepper",component:i,tags:["autodocs"]},t={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,children:o.map((e,a)=>s.jsx(m,{asButton:!0,onClick:()=>n(a),label:e},e))})}},r={render:()=>{const[p,n]=c.useState(0),o=["First step","Second step","Last step"];return s.jsx(i,{activeStep:p,nonLinear:!0,orientation:"vertical",children:o.map((e,a)=>s.jsx(m,{onClick:()=>n(a),label:e,children:e},e))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
