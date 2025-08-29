import{r as D,j as w}from"./iframe-CPQWTtPx.js";import{A as b,c as x}from"./Autocomplete-GIhOci5W.js";import"./preload-helper-D9Z9MdNV.js";import"./createSvgIcon-CTccOsUD.js";import"./memoTheme-BaYEZ6jo.js";import"./styled-CVYEzxfA.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-fNUyy1zz.js";import"./Typography-I-dH0nT8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-C73aV3tH.js";import"./ListSubheader-0TbXh5SI.js";import"./MenuList-Bl2p_wQH.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-BakhbzqY.js";import"./ListContext-BIvlDR40.js";import"./IconButton-BBXjrXJT.js";import"./IconButton-C5_XbxX9.js";import"./ButtonBase-EDIMIaVv.js";import"./useTimeout-DTjciWwP.js";import"./TransitionGroupContext-Cfd4JEJX.js";import"./useEventCallback-Cj11N6aI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-32V-54TS.js";import"./ListItemAvatar-Du8rVfm1.js";import"./ListItemText-iQIub5hf.js";import"./Tooltip-nBpdw_N9.js";import"./useTheme-T4B27w73.js";import"./useSlot-A_Glp2nr.js";import"./mergeSlotProps-CC7Q4nyl.js";import"./useControlled-P7ZiawrM.js";import"./getReactElementRef-zlErzI_n.js";import"./Grow-XH1gVCTx.js";import"./utils-ETLqDsx7.js";import"./index-ClHgv_2Q.js";import"./index-DdDY9x1M.js";import"./Popper-CsOJDGQx.js";import"./Portal-Eo5Y0Fep.js";import"./useSlotProps-BIkjHaxR.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItemButton-Chg0o59b.js";import"./listItemButtonClasses-CXNhffuE.js";import"./MenuItem-vV9Uou4g.js";import"./Menu-Cc0xrcxE.js";import"./Menu-DYyvmYRs.js";import"./Popover-DFYn66xo.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-B0p2lkCa.js";import"./Modal-B6dHYExC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BpFn6bBk.js";import"./Paper-B8p_ssOJ.js";import"./MenuItem-CgiJH3lX.js";import"./Box-BeujDT_a.js";import"./ListItem-t9sXsFO9.js";import"./isMuiElement-DNzBAE5e.js";import"./Paper-Bq5TJLrQ.js";import"./TextField-_0YL0ybt.js";import"./TextField-CPvpm3Gd.js";import"./useFormControl-CcJMHY6d.js";import"./InputBase-BFRKWLmq.js";import"./FormHelperText-CCAOiCXN.js";import"./CircularProgress-swN6FFfa.js";import"./Close-DQMbQ9NP.js";import"./Chip-3HUzNGZI.js";const t=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Ie={title:"Components/Inputs/Autocomplete",component:b,tags:["autodocs"]},i={args:{label:"Single",options:t}},p={args:{label:"Single",options:t,inputProps:{variant:"outlined",startAdornment:"D"}}},a={args:{label:"Multiple",multiple:!0,options:t}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:o=>`Group ${o.group}`,options:t}},u={args:{label:"Options Disabled",getOptionDisabled:o=>["1","4"].includes(o.id),options:t}},m={args:{label:"Disabled",disabled:!0,options:t}},d={args:{label:"Free solo",freeSolo:!0,options:t},render:o=>{const f=x(),[O,c]=D.useState(null);return w.jsx(b,{...o,value:O,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=f(e,r),{inputValue:n}=r,S=e.some(V=>n===V.label);return n!==""&&!S&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Re=["Base","Outlined","Multiple","Loading","Grouped","OptionDisabled","Disabled","FreeSolo"];export{i as Base,m as Disabled,d as FreeSolo,l as Grouped,s as Loading,a as Multiple,u as OptionDisabled,p as Outlined,Re as __namedExportsOrder,Ie as default};
