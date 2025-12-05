import{r as D,j as w}from"./iframe-iBJb36Pk.js";import{A as b,c as x}from"./Autocomplete-CEuWG1us.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-CHvlCNJv.js";import"./memoTheme-DtgnkE7u.js";import"./styled-TlQKRrkf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CwPe-AN3.js";import"./Typography-D-S9EM20.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-BNGC0W6H.js";import"./ListSubheader-CZS3IKUt.js";import"./MenuList-CwYFvy4V.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-9UDatCif.js";import"./ListContext-li8P5Mx-.js";import"./IconButton-cvDBXlii.js";import"./IconButton-C85qD8F1.js";import"./ButtonBase-Ci5asRaC.js";import"./useTimeout-eQduHELe.js";import"./TransitionGroupContext-hbf9GoVf.js";import"./useEventCallback-D_a16_zg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CkpWt93v.js";import"./ListItemAvatar-DtGDRLJ4.js";import"./ListItemText-D63nuFcz.js";import"./Tooltip-CNPkqRzJ.js";import"./useTheme-Dp0Qizzj.js";import"./useSlot-Srv2vCGA.js";import"./mergeSlotProps-TIAJWBPs.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-DVqxZonj.js";import"./getReactElementRef-d_M2sW3V.js";import"./Grow-CnfwRGsT.js";import"./utils-BEY0T_cS.js";import"./index-Bg8xFF6E.js";import"./index-y5eWNptS.js";import"./Popper-CQgPFu_U.js";import"./Portal-CqWY6jV5.js";import"./useSlotProps-D7iYbLCp.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItemButton-BBvIWOlv.js";import"./listItemButtonClasses-CXNhffuE.js";import"./MenuItem-CLmW3zm9.js";import"./Menu-Gjr8C3Rz.js";import"./Menu-XJFD5k2Q.js";import"./Popover-nuHtHeEw.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BUQD6Sej.js";import"./Modal-DKLF1oCm.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-AMo_6TPw.js";import"./Paper-1zfGM82n.js";import"./MenuItem-D8UmCVla.js";import"./Box-CKOjLhGr.js";import"./ListItem-Cwgw9ogq.js";import"./isMuiElement-Bc8aMRVg.js";import"./Paper-VeejdYbO.js";import"./TextField-BseuydFW.js";import"./TextField-B1i1CVy8.js";import"./useFormControl-B-l_EfP-.js";import"./InputBase-R-R3B2zh.js";import"./FormHelperText-Cq3UHSKT.js";import"./CircularProgress-CEkzApkP.js";import"./Close-Cj0MIdOA.js";import"./Chip-DHo31M1Z.js";const t=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Ie={title:"Components/Inputs/Autocomplete",component:b,tags:["autodocs"]},i={args:{label:"Single",options:t}},p={args:{label:"Single",options:t,inputProps:{variant:"outlined",startAdornment:"D"}}},a={args:{label:"Multiple",multiple:!0,options:t}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:o=>`Group ${o.group}`,options:t}},u={args:{label:"Options Disabled",getOptionDisabled:o=>["1","4"].includes(o.id),options:t}},m={args:{label:"Disabled",disabled:!0,options:t}},d={args:{label:"Free solo",freeSolo:!0,options:t},render:o=>{const f=x(),[O,c]=D.useState(null);return w.jsx(b,{...o,value:O,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=f(e,r),{inputValue:n}=r,S=e.some(V=>n===V.label);return n!==""&&!S&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
