import{r as D,j as w}from"./iframe-D5_OA-ZK.js";import{A as b,c as x}from"./Autocomplete-a6yN0Iwp.js";import"./preload-helper-D9Z9MdNV.js";import"./createSvgIcon-DM0aTCU4.js";import"./memoTheme-D980zPRr.js";import"./styled-Co26MWGr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-EV-5Otsk.js";import"./Typography-DMv6PTFK.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-C8RmFI79.js";import"./ListSubheader-CPLOXqgj.js";import"./MenuList-BoRrU6AY.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-XZbQ7842.js";import"./ListContext-D_zSJb4J.js";import"./IconButton-D9pQbjjR.js";import"./IconButton-CFL_Ckq2.js";import"./ButtonBase-BwGjSdxK.js";import"./useTimeout-CRsqOtag.js";import"./TransitionGroupContext-Dw2CfZNK.js";import"./useEventCallback-BhmZMpnQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CgEl-gX-.js";import"./ListItemAvatar-BzL4ZEcj.js";import"./ListItemText-DLDZl6IN.js";import"./Tooltip-_61fROz3.js";import"./useTheme-C52RKMww.js";import"./useSlot-DWUuY1NV.js";import"./mergeSlotProps-C-NrcMNJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-CU8XY2YV.js";import"./getReactElementRef-MPxDcdTs.js";import"./Grow-KtGsVPMq.js";import"./utils-1P7-SQlo.js";import"./index-CeesYFFv.js";import"./index-Bm5Jvdhx.js";import"./Popper-BhOanR8U.js";import"./Portal-B3BM28AW.js";import"./useSlotProps-CpeE0ta1.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItemButton-3XGM43Ni.js";import"./listItemButtonClasses-CXNhffuE.js";import"./MenuItem-FrjcPS8n.js";import"./Menu-DZi7EsR3.js";import"./Menu-DoWry3HC.js";import"./Popover-BwEvYiR6.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-D_ebDX1k.js";import"./Modal-DQZfc3mo.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CdMV7kIU.js";import"./Paper-D7li1_zG.js";import"./MenuItem-BZHECmxU.js";import"./Box-DVOVWupQ.js";import"./ListItem-Eun6w256.js";import"./isMuiElement-IdtHM0vO.js";import"./Paper-d6D2rxxx.js";import"./TextField-BM7fAoP-.js";import"./TextField-Bgt9yeTv.js";import"./useFormControl-CyYX7x3B.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DO7lV2Ht.js";import"./FormHelperText-Cw1MR6XU.js";import"./CircularProgress-vKcBmKl7.js";import"./Close-Duj_8pfz.js";import"./Chip-C1z8xsNv.js";const t=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Re={title:"Components/Inputs/Autocomplete",component:b,tags:["autodocs"]},i={args:{label:"Single",options:t}},p={args:{label:"Single",options:t,inputProps:{variant:"outlined",startAdornment:"D"}}},a={args:{label:"Multiple",multiple:!0,options:t}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:o=>`Group ${o.group}`,options:t}},u={args:{label:"Options Disabled",getOptionDisabled:o=>["1","4"].includes(o.id),options:t}},m={args:{label:"Disabled",disabled:!0,options:t}},d={args:{label:"Free solo",freeSolo:!0,options:t},render:o=>{const f=x(),[O,c]=D.useState(null);return w.jsx(b,{...o,value:O,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=f(e,r),{inputValue:n}=r,S=e.some(V=>n===V.label);return n!==""&&!S&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
