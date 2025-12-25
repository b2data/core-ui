import{r as D,j as w}from"./iframe-Bt0NHjzt.js";import{A as b,c as x}from"./Autocomplete-DfOloYj6.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-BmHbKF__.js";import"./memoTheme-BgU4zM9I.js";import"./styled-BEaRT_Fa.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-D0JS2iMU.js";import"./Typography-C-487Qlx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-D_IbDIhi.js";import"./ListSubheader-BU1wollj.js";import"./MenuList-Bt7l0Gye.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-hJSLhPXd.js";import"./ListContext-CbahI33F.js";import"./IconButton-D5Gh2CxO.js";import"./IconButton-CNheUIxq.js";import"./ButtonBase-CyUYjTfn.js";import"./useTimeout-KoRalZn8.js";import"./TransitionGroupContext-B0SjSjGE.js";import"./useEventCallback-DRFCyGqk.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CmZKsxNW.js";import"./ListItemAvatar-TDjQNRAM.js";import"./ListItemText-B-C50eDN.js";import"./Tooltip-C2Ih7DGb.js";import"./useTheme-CJIytwIy.js";import"./useSlot-B6QK4qS-.js";import"./mergeSlotProps-CTGzhqDY.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-CipIMeEA.js";import"./getReactElementRef-CjonG1mU.js";import"./Grow-B4ACijKG.js";import"./utils-ByOi0em4.js";import"./index-Ypw_AV9V.js";import"./index-gtplWchC.js";import"./Popper-CWeedMjN.js";import"./Portal-DwdRdUOR.js";import"./useSlotProps-BJcXo2-m.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItemButton-DhLBmSRW.js";import"./listItemButtonClasses-CXNhffuE.js";import"./MenuItem-CjbaUP4J.js";import"./Menu-DxqQmRlO.js";import"./Menu-sG-3ifRZ.js";import"./Popover-B6iscEM3.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-CoXSsvkz.js";import"./Modal-DoKZQW4X.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-D0NTvvjC.js";import"./Paper-DKuqXmbM.js";import"./MenuItem-CgK0E1tI.js";import"./Box-CDPnqyyJ.js";import"./ListItem-CQncx4D-.js";import"./isMuiElement-mcr7aDks.js";import"./Paper-BA0ib2RZ.js";import"./TextField-lt9rifhp.js";import"./TextField-XlNCdd5p.js";import"./useFormControl-CrJJaZ8v.js";import"./InputBase-Bv7eM5nS.js";import"./FormHelperText-UcvY9Cmh.js";import"./CircularProgress-Ca20BDYH.js";import"./Close-BzuDRxKm.js";import"./Chip-B4MlGWYj.js";const t=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Ie={title:"Components/Inputs/Autocomplete",component:b,tags:["autodocs"]},i={args:{label:"Single",options:t}},p={args:{label:"Single",options:t,inputProps:{variant:"outlined",startAdornment:"D"}}},a={args:{label:"Multiple",multiple:!0,options:t}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:o=>`Group ${o.group}`,options:t}},u={args:{label:"Options Disabled",getOptionDisabled:o=>["1","4"].includes(o.id),options:t}},m={args:{label:"Disabled",disabled:!0,options:t}},d={args:{label:"Free solo",freeSolo:!0,options:t},render:o=>{const f=x(),[O,c]=D.useState(null);return w.jsx(b,{...o,value:O,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=f(e,r),{inputValue:n}=r,S=e.some(V=>n===V.label);return n!==""&&!S&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
