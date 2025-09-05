import{r as D,j as w}from"./iframe-BCz_NIWA.js";import{A as b,c as x}from"./Autocomplete-DWuhr3bT.js";import"./preload-helper-D9Z9MdNV.js";import"./createSvgIcon-BG24uHfj.js";import"./memoTheme-HkdJwuAH.js";import"./styled-DMcz7HpS.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CtRC1-wR.js";import"./Typography-mHJ8S4Er.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-YJeW4bcl.js";import"./ListSubheader-XNvQE1hR.js";import"./MenuList-CE-VIX8a.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-CSZsaPHq.js";import"./ListContext-q7ES6MQn.js";import"./IconButton-D16fh3x5.js";import"./IconButton-B1FIuSG_.js";import"./ButtonBase-BsXO2UWG.js";import"./useTimeout-B3_rYZv9.js";import"./TransitionGroupContext-BDhOcy0u.js";import"./useEventCallback-2E7ndIeg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-yuAzg5x6.js";import"./ListItemAvatar-B8opxVb1.js";import"./ListItemText-BaKgfmQl.js";import"./Tooltip-D_6do7UI.js";import"./useTheme-EP6WGabO.js";import"./useSlot-DjJyu2W-.js";import"./mergeSlotProps-Efm9CLsr.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-BEnROTAs.js";import"./getReactElementRef-CoeUOVJ1.js";import"./Grow-BGs0lST7.js";import"./utils-CALKgiFZ.js";import"./index-Ar8B3F6Q.js";import"./index-DV66Sa4q.js";import"./Popper-d0Kmc_Sr.js";import"./Portal-MdsF2Uh7.js";import"./useSlotProps-BzCPMEQC.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItemButton-BrtcVaRa.js";import"./listItemButtonClasses-CXNhffuE.js";import"./MenuItem-J05MlJdS.js";import"./Menu-CRITN5Vp.js";import"./Menu-mSYKJZCO.js";import"./Popover-DDIrH8pa.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-qWtR93Ew.js";import"./Modal-C2ob3-em.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-GJXCx2Bz.js";import"./Paper-CpAtm7fY.js";import"./MenuItem-sn7NBZ18.js";import"./Box-BDHmJulq.js";import"./ListItem-CzuteAf-.js";import"./isMuiElement-zPLPz0R8.js";import"./Paper-8NT9Is7i.js";import"./TextField-3FTJWlto.js";import"./TextField-BOysAub6.js";import"./useFormControl-AYxFlkOV.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DOYvhF4Z.js";import"./FormHelperText-SWQ4DRU9.js";import"./CircularProgress-yWBTjwXA.js";import"./Close-Jqxj8xTO.js";import"./Chip-B0Ai60XH.js";const t=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Re={title:"Components/Inputs/Autocomplete",component:b,tags:["autodocs"]},i={args:{label:"Single",options:t}},p={args:{label:"Single",options:t,inputProps:{variant:"outlined",startAdornment:"D"}}},a={args:{label:"Multiple",multiple:!0,options:t}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:o=>`Group ${o.group}`,options:t}},u={args:{label:"Options Disabled",getOptionDisabled:o=>["1","4"].includes(o.id),options:t}},m={args:{label:"Disabled",disabled:!0,options:t}},d={args:{label:"Free solo",freeSolo:!0,options:t},render:o=>{const f=x(),[O,c]=D.useState(null);return w.jsx(b,{...o,value:O,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=f(e,r),{inputValue:n}=r,S=e.some(V=>n===V.label);return n!==""&&!S&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Single",
    options
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Single",
    options,
    inputProps: {
      variant: "outlined",
      startAdornment: "D"
    }
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Multiple",
    multiple: true,
    options
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Loading",
    loading: true,
    options: []
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Grouped",
    groupBy: opt => \`Group \${opt.group}\`,
    options
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Options Disabled",
    getOptionDisabled: opt => ["1", "4"].includes(opt.id),
    options
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    disabled: true,
    options
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Free solo",
    freeSolo: true,
    options
  },
  render: props => {
    const filter = createFilterOptions<FreeSoloOption>();
    const [value, setValue] = useState<FreeSoloOption | null>(null);
    return <Autocomplete {...props} value={value} onChange={(_, newValue) => {
      if (typeof newValue === "string") {
        setValue({
          label: newValue,
          id: "new"
        });
      } else if (newValue && newValue.inputValue) {
        // Create a new value from the user input
        setValue({
          label: newValue.inputValue,
          id: "new"
        });
      } else {
        setValue(newValue);
      }
    }} getOptionLabel={option => {
      if (typeof option === "string") {
        return option;
      }
      if (option.inputValue) {
        return option.inputValue || "";
      }
      return option.label;
    }} filterOptions={(options, params) => {
      const filtered = filter(options, params);
      const {
        inputValue
      } = params;
      // Suggest the creation of a new value
      const isExisting = options.some(option => inputValue === option.label);
      if (inputValue !== "" && !isExisting) {
        filtered.push({
          inputValue,
          label: \`Add "\${inputValue}"\`,
          id: "new"
        });
      }
      return filtered;
    }} />;
  }
}`,...d.parameters?.docs?.source}}};const ke=["Base","Outlined","Multiple","Loading","Grouped","OptionDisabled","Disabled","FreeSolo"];export{i as Base,m as Disabled,d as FreeSolo,l as Grouped,s as Loading,a as Multiple,u as OptionDisabled,p as Outlined,ke as __namedExportsOrder,Re as default};
