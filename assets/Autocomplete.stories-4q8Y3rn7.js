import{r as D,j as w}from"./iframe-DYeT7bW8.js";import{A as b,c as x}from"./Autocomplete-By09c_k4.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-DBrONcpz.js";import"./memoTheme-B_iRBWsH.js";import"./styled-GE-e2l_1.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-DWqDGW5V.js";import"./Typography-DvpPHrRU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-CIAJ00WH.js";import"./ListSubheader-B_fVnxXX.js";import"./MenuList-DfMwXBkk.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-CHATcp2n.js";import"./ListContext-BXO0NCTv.js";import"./IconButton-BgZAZHJQ.js";import"./IconButton-DJ5mPgeI.js";import"./ButtonBase-DXCvwUzG.js";import"./useTimeout-gGYJwrGn.js";import"./TransitionGroupContext-FZWsME-w.js";import"./useEventCallback-B4Rt0DiH.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DbcXGxbX.js";import"./ListItemAvatar-D7tPSVs3.js";import"./ListItemText-CmixW5G0.js";import"./Tooltip-BDootB18.js";import"./useTheme-BsUAYdxI.js";import"./useSlot-BOZP11gd.js";import"./mergeSlotProps-Cb7kcP9N.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-DU3pSEC3.js";import"./getReactElementRef-BS6Q2MpD.js";import"./Grow-CosTjjLJ.js";import"./utils-CcCfpxc5.js";import"./index-C_pUq534.js";import"./index-C5_6TYhN.js";import"./Popper-Dzr4Ug40.js";import"./Portal-Dnx2_fQM.js";import"./useSlotProps-DFlplrzR.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItemButton-DrDoTuCF.js";import"./listItemButtonClasses-CXNhffuE.js";import"./MenuItem-bSLfzV8v.js";import"./Menu-jTL02Q_4.js";import"./Menu-D-0-J1It.js";import"./Popover-CYiEWl9Q.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-r0Y4YYvP.js";import"./Modal-DS7lPg7H.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CENkHO8A.js";import"./Paper-RhJ94JB6.js";import"./MenuItem-JvBY0hO5.js";import"./Box-BcGbqvGx.js";import"./ListItem-D9q1TJaG.js";import"./isMuiElement-ppr9mHAz.js";import"./Paper-UXDBC33H.js";import"./TextField-C1-zLkC9.js";import"./TextField-CqIpnBvE.js";import"./useFormControl-NnoCKCTX.js";import"./InputBase-CbOcAyXF.js";import"./FormHelperText-DlRFF2j3.js";import"./CircularProgress-ChLmoL5R.js";import"./Close-BFW1ujVB.js";import"./Chip-yDNAcvdy.js";const t=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Ie={title:"Components/Inputs/Autocomplete",component:b,tags:["autodocs"]},i={args:{label:"Single",options:t}},p={args:{label:"Single",options:t,inputProps:{variant:"outlined",startAdornment:"D"}}},a={args:{label:"Multiple",multiple:!0,options:t}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:o=>`Group ${o.group}`,options:t}},u={args:{label:"Options Disabled",getOptionDisabled:o=>["1","4"].includes(o.id),options:t}},m={args:{label:"Disabled",disabled:!0,options:t}},d={args:{label:"Free solo",freeSolo:!0,options:t},render:o=>{const f=x(),[O,c]=D.useState(null);return w.jsx(b,{...o,value:O,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=f(e,r),{inputValue:n}=r,S=e.some(V=>n===V.label);return n!==""&&!S&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
