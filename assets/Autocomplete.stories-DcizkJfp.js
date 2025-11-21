import{r as D,j as w}from"./iframe-G5ZpE7QO.js";import{A as b,c as x}from"./Autocomplete-B37HmSjW.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-By4qT70r.js";import"./memoTheme-yIZRShux.js";import"./styled-B19C_ToH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BgxAaF2H.js";import"./Typography-C-S4zNgT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-DSM0X5tE.js";import"./ListSubheader-5TobsnqF.js";import"./MenuList-C1j_LIKx.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-D2tk6x-x.js";import"./ListContext-C9b8DO9_.js";import"./MoreVert-BX0l76Uf.js";import"./IconButton-DNO3hmXz.js";import"./IconButton-DZB3-HSc.js";import"./ButtonBase-DT2_oOoC.js";import"./useTimeout-CjFhj00D.js";import"./TransitionGroupContext-DdCBOnAD.js";import"./useEventCallback-CCbompB-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DU1PGsgU.js";import"./ListItemAvatar-c1VUgPtI.js";import"./ListItemText-FovgLWMD.js";import"./Tooltip-B3e3t0d-.js";import"./useTheme-B138dJGz.js";import"./useSlot-Dnn0ZK68.js";import"./mergeSlotProps-DtAb3QtM.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-BsGi7h6u.js";import"./getReactElementRef-DhAmtzfE.js";import"./Grow-CPMU4Gxv.js";import"./utils-BY4JAHKj.js";import"./index-BMvGbyKB.js";import"./index-BOY60yfB.js";import"./Popper-C5STi-k-.js";import"./Portal-CSHLtsMQ.js";import"./useSlotProps-RR2uP_3d.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItemButton-BWcmRlxH.js";import"./listItemButtonClasses-CXNhffuE.js";import"./MenuItem-eDVnLRQ4.js";import"./Menu-nhBa3qcb.js";import"./Menu-D1NUX130.js";import"./Popover-Zy7MGOxg.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-IEfrjphi.js";import"./Modal-ZvXrb2Ac.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-XPtT8SSm.js";import"./Paper-BiDxZ156.js";import"./MenuItem-CQ7Cxxl9.js";import"./Box-D4a9ddNd.js";import"./ListItem-ge3qRtyz.js";import"./isMuiElement-BDcnwjsu.js";import"./Paper-DpgC5c58.js";import"./TextField-B_Z8lSdc.js";import"./TextField-C7u9RTv9.js";import"./useFormControl-eaohbf9W.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CvS70kmk.js";import"./FormHelperText-C_RzdKqk.js";import"./CircularProgress-BpWdppDe.js";import"./Close-BhBYOC7d.js";import"./Chip-CQdLv_Ho.js";const t=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],ke={title:"Components/Inputs/Autocomplete",component:b,tags:["autodocs"]},i={args:{label:"Single",options:t}},p={args:{label:"Single",options:t,inputProps:{variant:"outlined",startAdornment:"D"}}},a={args:{label:"Multiple",multiple:!0,options:t}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:o=>`Group ${o.group}`,options:t}},u={args:{label:"Options Disabled",getOptionDisabled:o=>["1","4"].includes(o.id),options:t}},m={args:{label:"Disabled",disabled:!0,options:t}},d={args:{label:"Free solo",freeSolo:!0,options:t},render:o=>{const f=x(),[O,c]=D.useState(null);return w.jsx(b,{...o,value:O,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=f(e,r),{inputValue:n}=r,S=e.some(V=>n===V.label);return n!==""&&!S&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const qe=["Base","Outlined","Multiple","Loading","Grouped","OptionDisabled","Disabled","FreeSolo"];export{i as Base,m as Disabled,d as FreeSolo,l as Grouped,s as Loading,a as Multiple,u as OptionDisabled,p as Outlined,qe as __namedExportsOrder,ke as default};
