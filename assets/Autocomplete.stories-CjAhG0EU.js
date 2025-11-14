import{r as D,j as w}from"./iframe-dGl_HByf.js";import{A as b,c as x}from"./Autocomplete-D9-3DT4o.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-Ds2La02R.js";import"./memoTheme-DeSZoXTc.js";import"./styled-DEb0WdcM.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-BppJ7_xn.js";import"./Typography-Sg1bVaOt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-Cy7VPwpY.js";import"./ListSubheader-C-xiwIY-.js";import"./MenuList-BthqCJhV.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-DeiEiVA6.js";import"./ListContext-BYyRDEoC.js";import"./IconButton-Kqe2SnCu.js";import"./IconButton-CGfFYOpO.js";import"./ButtonBase-Ds4MNNTk.js";import"./useTimeout-DyPqkLsY.js";import"./TransitionGroupContext-lAmp_jRe.js";import"./useEventCallback-DVyd9a6S.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dh15xvl4.js";import"./ListItemAvatar-B1tq9fNB.js";import"./ListItemText-CksiFaAh.js";import"./Tooltip-Cp8AsEdU.js";import"./useTheme-C2yYe7UP.js";import"./useSlot-DPBoBtB1.js";import"./mergeSlotProps-CUseLFIB.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-Dujgv5li.js";import"./getReactElementRef-CdfDsxS2.js";import"./Grow-bNX9iux7.js";import"./utils-BHBThrgb.js";import"./index-Do_FCfqT.js";import"./index-Bb6oq-ie.js";import"./Popper-DK9ACVT7.js";import"./Portal-CdUdjvXQ.js";import"./useSlotProps-BufwTs60.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItemButton-C6f7n22t.js";import"./listItemButtonClasses-CXNhffuE.js";import"./MenuItem-RFrbmmnc.js";import"./Menu-DCZ6MhJk.js";import"./Menu-CjiomJjs.js";import"./Popover-csEo90Cc.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-DOVOqMMH.js";import"./Modal-BztwVA-W.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-1xyMPW7d.js";import"./Paper-DgjNs4o9.js";import"./MenuItem-bwHH7Rl8.js";import"./Box-DMuHgZiq.js";import"./ListItem-BpXsuWSZ.js";import"./isMuiElement-DL-iAmeM.js";import"./Paper-D3GuQAwY.js";import"./TextField-DVUdS8TY.js";import"./TextField-BG2iMZJy.js";import"./useFormControl-DZ1f00XB.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-P2iiVZzS.js";import"./FormHelperText-DNRWK6ma.js";import"./CircularProgress-CkePx3Ad.js";import"./Close-C1h7l7lA.js";import"./Chip-BMOVYSrS.js";const t=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Re={title:"Components/Inputs/Autocomplete",component:b,tags:["autodocs"]},i={args:{label:"Single",options:t}},p={args:{label:"Single",options:t,inputProps:{variant:"outlined",startAdornment:"D"}}},a={args:{label:"Multiple",multiple:!0,options:t}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:o=>`Group ${o.group}`,options:t}},u={args:{label:"Options Disabled",getOptionDisabled:o=>["1","4"].includes(o.id),options:t}},m={args:{label:"Disabled",disabled:!0,options:t}},d={args:{label:"Free solo",freeSolo:!0,options:t},render:o=>{const f=x(),[O,c]=D.useState(null);return w.jsx(b,{...o,value:O,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=f(e,r),{inputValue:n}=r,S=e.some(V=>n===V.label);return n!==""&&!S&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
