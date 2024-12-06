import{j as J}from"./jsx-runtime-4ca860c5.js";import{r as K}from"./index-61bf1805.js";import{A as R}from"./Autocomplete-b4902550.js";import{c as N}from"./Autocomplete-d40c8ba9.js";import"./_commonjsHelpers-de833af9.js";import"./ListItem-98eea3c7.js";import"./ListSubheader-5174f26f.js";import"./ListSubheader-469c8f17.js";import"./createTheme-bf72f819.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./index-aa4d0353.js";import"./styled-8f47f2e2.js";import"./useThemeProps-3a07dd36.js";import"./generateUtilityClasses-d818091b.js";import"./MenuList-229da60e.js";import"./react-is.production.min-a192e302.js";import"./useEnhancedEffect-e1879ff8.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./useForkRef-80a5c2b4.js";import"./ListContext-58194ff9.js";import"./createSvgIcon-c16984bf.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./isMuiElement-6a90d2d1.js";import"./ownerWindow-03d1c82d.js";import"./useId-65eea1c4.js";import"./useControlled-1b61d410.js";import"./useEventCallback-1165b6b6.js";import"./useIsFocusVisible-c78074a7.js";import"./IconButton-db0848b9.js";import"./IconButton-523ac44e.js";import"./ButtonBase-12b39b19.js";import"./emotion-react.browser.esm-20161b7f.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./ListItemAvatar-a1f9070a.js";import"./ListItemText-cdf70ae4.js";import"./Tooltip-4e1f44c9.js";import"./Typography-e33c2480.js";import"./Typography-e48c7697.js";import"./extendSxProp-1c98bbe3.js";import"./Tooltip-52ec8f6f.js";import"./useTheme-b9b9347b.js";import"./Popper-35dcfc86.js";import"./ClassNameConfigurator-4826bb42.js";import"./Portal-c6ffb70f.js";import"./index-2801d3c9.js";import"./useSlotProps-8c90c05b.js";import"./isHostComponent-73d6e646.js";import"./Grow-5b576062.js";import"./utils-6f56962a.js";import"./ListItemText-7dad3551.js";import"./listItemTextClasses-45e954d4.js";import"./ListItemButton-0d3f2d04.js";import"./listItemButtonClasses-02fa8195.js";import"./ListItemIcon-dc109a9f.js";import"./MenuItem-f58899fb.js";import"./dividerClasses-e3157b11.js";import"./Menu-5c70bafc.js";import"./Menu-c3f24bc4.js";import"./Popover-923cd157.js";import"./Modal-2139a970.js";import"./Backdrop-c75f29d0.js";import"./Paper-bb0aa125.js";import"./MenuItem-07b73303.js";import"./Box-fefa9705.js";import"./ListItem-34edb641.js";import"./Paper-c97830f9.js";import"./TextField-91fa0dc9.js";import"./TextField-407c5547.js";import"./useFormControl-18a13278.js";import"./InputBase-c1f7c530.js";import"./GlobalStyles-0c0a78cd.js";import"./FormHelperText-5862b80c.js";import"./CircularProgress-7ec78922.js";import"./CircularProgress-bc81b3ed.js";import"./Close-8a493683.js";import"./Chip-5e1f1b8c.js";const o=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Vr={title:"Components/Inputs/Autocomplete",component:R,tags:["autodocs"]},n={args:{label:"Single",options:o}},p={args:{label:"Single",options:o,inputProps:{variant:"outlined"}}},a={args:{label:"Multiple",multiple:!0,options:o}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:t=>`Group ${t.group}`,options:o}},m={args:{label:"Options Disabled",getOptionDisabled:t=>["1","4"].includes(t.id),options:o}},u={args:{label:"Disabled",disabled:!0,options:o}},d={args:{label:"Free solo",freeSolo:!0,options:o},render:t=>{const k=N(),[q,c]=K.useState(null);return J.jsx(R,{...t,value:q,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=k(e,r),{inputValue:i}=r,z=e.some(H=>i===H.label);return i!==""&&!z&&g.push({inputValue:i,label:`Add "${i}"`,id:"new"}),g}})}};var b,f,O;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Single",
    options
  }
}`,...(O=(f=n.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var S,V,w;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Single",
    options,
    inputProps: {
      variant: "outlined"
    }
  }
}`,...(w=(V=p.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var D,x,v;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Multiple",
    multiple: true,
    options
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var F,h,y;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "Loading",
    loading: true,
    options: []
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var A,E,G;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Grouped",
    groupBy: opt => \`Group \${opt.group}\`,
    options
  }
}`,...(G=(E=l.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var L,B,C;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Options Disabled",
    getOptionDisabled: opt => ["1", "4"].includes(opt.id),
    options
  }
}`,...(C=(B=m.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var M,_,$;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    disabled: true,
    options
  }
}`,...($=(_=u.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var j,P,I;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(P=d.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const wr=["Base","Outlined","Multiple","Loading","Grouped","OptionDisabled","Disabled","FreeSolo"];export{n as Base,u as Disabled,d as FreeSolo,l as Grouped,s as Loading,a as Multiple,m as OptionDisabled,p as Outlined,wr as __namedExportsOrder,Vr as default};
//# sourceMappingURL=Autocomplete.stories-2ff95683.js.map
