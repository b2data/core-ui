import{r as D,j as w}from"./iframe-BjsjcTCH.js";import{A as b,c as x}from"./Autocomplete-CRCASpz2.js";import"./preload-helper-D9Z9MdNV.js";import"./createSvgIcon-BWDMKnaQ.js";import"./memoTheme-BkiB6XT-.js";import"./styled-B_VYI8z9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Typography-CsaR6tVH.js";import"./Typography-B8xzsPaS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-yudmKKA9.js";import"./ListSubheader-CCQRp570.js";import"./MenuList-Du58ZBpe.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-CFOv3ZhY.js";import"./ListContext-Y-dn3Bui.js";import"./IconButton-5vGrSHtF.js";import"./IconButton-CzfJHRHW.js";import"./ButtonBase-CkJtUOr4.js";import"./useTimeout-CGfVXgdi.js";import"./TransitionGroupContext-DktGN6vV.js";import"./useEventCallback-Cx1VukeI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D0bWzO0z.js";import"./ListItemAvatar-NlkvTGwY.js";import"./ListItemText-Df__InLT.js";import"./Tooltip-CySb7oCo.js";import"./useTheme-Bdxx-ZzA.js";import"./useSlot-_7UiI0BH.js";import"./mergeSlotProps-Bba1iLBA.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-U77RKmuN.js";import"./getReactElementRef-BzEn9AjC.js";import"./Grow-B45jD6oF.js";import"./utils-C829QIR_.js";import"./index-B6TwdEj4.js";import"./index-SVAzG-T_.js";import"./Popper-BVnajaSs.js";import"./Portal-_D9UOzoy.js";import"./useSlotProps-B8t0lEUz.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItemButton-4ofyjYO-.js";import"./listItemButtonClasses-CXNhffuE.js";import"./MenuItem-Ds4qH_mg.js";import"./Menu-BTFUtlxw.js";import"./Menu-w4TTDU8h.js";import"./Popover-DdIWv69b.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Dw6Vk27m.js";import"./Modal-BlMYs-AT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B0Qd6KlM.js";import"./Paper-CztJE2D3.js";import"./MenuItem-CP34sf5D.js";import"./Box-DHB9hgUt.js";import"./ListItem-n8qqApYV.js";import"./isMuiElement-DqggRh2f.js";import"./Paper-DAY6tLhN.js";import"./TextField-DXJ3l7BH.js";import"./TextField-B0qT-cvg.js";import"./useFormControl-DV89jgTs.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CPiPdEi_.js";import"./FormHelperText-DpvVwx05.js";import"./CircularProgress-C0zgGV6I.js";import"./Close-DvCmWYxP.js";import"./Chip-Dh_o-OzT.js";const t=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Re={title:"Components/Inputs/Autocomplete",component:b,tags:["autodocs"]},i={args:{label:"Single",options:t}},p={args:{label:"Single",options:t,inputProps:{variant:"outlined",startAdornment:"D"}}},a={args:{label:"Multiple",multiple:!0,options:t}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:o=>`Group ${o.group}`,options:t}},u={args:{label:"Options Disabled",getOptionDisabled:o=>["1","4"].includes(o.id),options:t}},m={args:{label:"Disabled",disabled:!0,options:t}},d={args:{label:"Free solo",freeSolo:!0,options:t},render:o=>{const f=x(),[O,c]=D.useState(null);return w.jsx(b,{...o,value:O,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=f(e,r),{inputValue:n}=r,S=e.some(V=>n===V.label);return n!==""&&!S&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
