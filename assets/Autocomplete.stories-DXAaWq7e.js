import{r as D,j as w}from"./iframe-D-Af2_6K.js";import{A as b,c as x}from"./Autocomplete-DbXF-e_p.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-BJIzGPGW.js";import"./memoTheme-CHvOgVXV.js";import"./styled-D-PotgPw.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-npX08WR7.js";import"./Typography-cSaQWaZJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-BGYgLuQU.js";import"./ListSubheader-D0KPWP2L.js";import"./MenuList-DoC3ciae.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-C3l1oI6e.js";import"./ListContext-E6wSDjnG.js";import"./IconButton-eF68eDqk.js";import"./IconButton-BHlTne6f.js";import"./ButtonBase-aYwaoYlD.js";import"./useTimeout-B-ndypME.js";import"./TransitionGroupContext-3wQKUh9s.js";import"./useEventCallback-CEyUjzcH.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dugx1P0N.js";import"./ListItemAvatar-DYHRV2_S.js";import"./ListItemText-BoLFeNcf.js";import"./Tooltip-CNLnoWQA.js";import"./useTheme-D-CM3Y4q.js";import"./useSlot-28DLoccJ.js";import"./mergeSlotProps-BHlnBqKQ.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-CSP_Q5Lx.js";import"./getReactElementRef-BOSlgcp8.js";import"./Grow-BuULe6aV.js";import"./utils-CxvPnv--.js";import"./index-Dk52qgRX.js";import"./index-BbjCSB6D.js";import"./Popper-C_2e4J25.js";import"./Portal-BJ9m9xgd.js";import"./useSlotProps-eyW4z1lC.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItemButton-DsYfxD4e.js";import"./listItemButtonClasses-CXNhffuE.js";import"./MenuItem-CI8c5r1i.js";import"./Menu-CRQFI9NK.js";import"./Menu-lUTsR38I.js";import"./Popover-CjtiXRpe.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Bpu1VWGp.js";import"./Modal-CGOe6njC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Dk-FzEf7.js";import"./Paper-DZK6a8PO.js";import"./MenuItem-Ctwi430B.js";import"./Box-PDltDmnM.js";import"./ListItem-ClyilSsr.js";import"./isMuiElement-81kDcdTn.js";import"./Paper-DOWt-WSo.js";import"./TextField-Bf0CvxJP.js";import"./TextField-DXqzD0Vj.js";import"./useFormControl-DKTUB5iQ.js";import"./InputBase-DEcSlmhN.js";import"./FormHelperText-CtEA3E_T.js";import"./CircularProgress-pZ253tfY.js";import"./Close-DgQD_WKx.js";import"./Chip-BZpIMuG7.js";const t=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Ie={title:"Components/Inputs/Autocomplete",component:b,tags:["autodocs"]},i={args:{label:"Single",options:t}},p={args:{label:"Single",options:t,inputProps:{variant:"outlined",startAdornment:"D"}}},a={args:{label:"Multiple",multiple:!0,options:t}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:o=>`Group ${o.group}`,options:t}},u={args:{label:"Options Disabled",getOptionDisabled:o=>["1","4"].includes(o.id),options:t}},m={args:{label:"Disabled",disabled:!0,options:t}},d={args:{label:"Free solo",freeSolo:!0,options:t},render:o=>{const f=x(),[O,c]=D.useState(null);return w.jsx(b,{...o,value:O,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=f(e,r),{inputValue:n}=r,S=e.some(V=>n===V.label);return n!==""&&!S&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
