import{r as D,j as w}from"./iframe-CXZ_NyuK.js";import{A as b,c as x}from"./Autocomplete-CsdLIM7G.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-CwIJRQJW.js";import"./memoTheme-DTk_V_hg.js";import"./styled-BvUIjKhn.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DNXmMN63.js";import"./Typography-eBWB5IMU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-CTUOb7uc.js";import"./ListSubheader-muwUmU60.js";import"./MenuList-DB-HnPRY.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-CG8Sv1UH.js";import"./ListContext-C8lwboQi.js";import"./IconButton-Bjku2Iu_.js";import"./IconButton-DBCDmklt.js";import"./ButtonBase-C7cht_mo.js";import"./useTimeout-ZSFSp5cI.js";import"./TransitionGroupContext-CxxqYawP.js";import"./useEventCallback-EozOT64W.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C5n-wVtT.js";import"./ListItemAvatar-CFTeS7-j.js";import"./ListItemText-DoKgZHmX.js";import"./Tooltip-DDnKXK4R.js";import"./useTheme-DWoggi07.js";import"./useSlot-ML2559-c.js";import"./mergeSlotProps-MFdmIzEm.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-HlXZK1Hp.js";import"./getReactElementRef-DWRjfN76.js";import"./Grow-BNrzv2mz.js";import"./utils-DFraDq1z.js";import"./index-BvG9M3NN.js";import"./index-By5H4shY.js";import"./Popper-329D8CB1.js";import"./Portal-BKU-ZVzg.js";import"./useSlotProps-lLW0FBW-.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItemButton-BiS9BEJ5.js";import"./listItemButtonClasses-CXNhffuE.js";import"./MenuItem-DYtArEDb.js";import"./Menu-MVcH3Vwo.js";import"./Menu-C6_HQ9Cz.js";import"./Popover-CadfQ21_.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Cw1N6ud7.js";import"./Modal-CuHv0e9C.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-EFsSiZOY.js";import"./Paper-DWrtNxDa.js";import"./MenuItem-CcrQ1wJC.js";import"./Box-BEeFVL2s.js";import"./ListItem-DZs0nZI1.js";import"./isMuiElement-CUSA2aUE.js";import"./Paper-d4EF3EHt.js";import"./TextField-D1C0ODzn.js";import"./TextField-Dvut5_Ww.js";import"./useFormControl-DG3vJQE-.js";import"./InputBase-j-qFhmyF.js";import"./FormHelperText-8zE6iEsR.js";import"./CircularProgress-DxJCyMvT.js";import"./Close-DcYJIMHu.js";import"./Chip-zJsV7PSP.js";const t=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Ie={title:"Components/Inputs/Autocomplete",component:b,tags:["autodocs"]},i={args:{label:"Single",options:t}},p={args:{label:"Single",options:t,inputProps:{variant:"outlined",startAdornment:"D"}}},a={args:{label:"Multiple",multiple:!0,options:t}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:o=>`Group ${o.group}`,options:t}},u={args:{label:"Options Disabled",getOptionDisabled:o=>["1","4"].includes(o.id),options:t}},m={args:{label:"Disabled",disabled:!0,options:t}},d={args:{label:"Free solo",freeSolo:!0,options:t},render:o=>{const f=x(),[O,c]=D.useState(null);return w.jsx(b,{...o,value:O,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=f(e,r),{inputValue:n}=r,S=e.some(V=>n===V.label);return n!==""&&!S&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
