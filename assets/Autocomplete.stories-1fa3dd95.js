import{j as J}from"./jsx-runtime-4ca860c5.js";import{r as K}from"./index-61bf1805.js";import{A as R}from"./Autocomplete-066d63cb.js";import{c as N}from"./Autocomplete-5dd60adf.js";import"./_commonjsHelpers-de833af9.js";import"./ListItem-3d9218c0.js";import"./ListSubheader-9c668031.js";import"./ListSubheader-8acf323b.js";import"./createTheme-316778f4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./index-05c64dab.js";import"./styled-9b74321f.js";import"./defaultTheme-fea1ec9a.js";import"./useThemeProps-8ddb2dd0.js";import"./generateUtilityClasses-5ea778c4.js";import"./MenuList-1c32f46a.js";import"./react-is.production.min-a192e302.js";import"./useEnhancedEffect-e1879ff8.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./useForkRef-80a5c2b4.js";import"./ListContext-58194ff9.js";import"./createSvgIcon-a3973d83.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./isMuiElement-6a90d2d1.js";import"./ownerWindow-03d1c82d.js";import"./useId-65eea1c4.js";import"./useControlled-1b61d410.js";import"./useEventCallback-1165b6b6.js";import"./useIsFocusVisible-c78074a7.js";import"./IconButton-17a133b4.js";import"./IconButton-43c73dac.js";import"./ButtonBase-12de1a8d.js";import"./emotion-react.browser.esm-a2267d4c.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./ListItemAvatar-98767a5f.js";import"./ListItemText-19e3c996.js";import"./Tooltip-661c7647.js";import"./Typography-76cd908a.js";import"./Typography-b72c3552.js";import"./extendSxProp-4079792f.js";import"./Tooltip-a71ad1c0.js";import"./useTheme-b859b38f.js";import"./Popper-df618c11.js";import"./ClassNameConfigurator-4826bb42.js";import"./Portal-c6ffb70f.js";import"./index-2801d3c9.js";import"./useSlotProps-7dac0002.js";import"./isHostComponent-73d6e646.js";import"./Grow-afbbb00d.js";import"./utils-f86e1de4.js";import"./ListItemText-d95c8bec.js";import"./listItemTextClasses-c4a05c48.js";import"./ListItemButton-68d1ae88.js";import"./listItemButtonClasses-17ce6c0b.js";import"./ListItemIcon-afb36b85.js";import"./MenuItem-5ac73feb.js";import"./dividerClasses-6ea87943.js";import"./Menu-ef4536d4.js";import"./Menu-e1a4cefc.js";import"./Popover-7044e2a9.js";import"./Modal-35ee554a.js";import"./Backdrop-2c48098d.js";import"./Paper-90a9c904.js";import"./MenuItem-08c72fa1.js";import"./Box-58f77dc6.js";import"./ListItem-0ec8d897.js";import"./Paper-2795c7c4.js";import"./TextField-3d3f8298.js";import"./TextField-c2247ace.js";import"./useFormControl-18a13278.js";import"./InputBase-c3ba5efe.js";import"./GlobalStyles-459eeb3e.js";import"./FormHelperText-e20eaad5.js";import"./CircularProgress-112b34bb.js";import"./CircularProgress-e82ffd5a.js";import"./Close-90d3995d.js";import"./Chip-39006ddb.js";const o=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Dr={title:"Components/Inputs/Autocomplete",component:R,tags:["autodocs"]},i={args:{label:"Single",options:o}},p={args:{label:"Single",options:o,inputProps:{variant:"outlined",InputProps:{startAdornment:"D"}}}},a={args:{label:"Multiple",multiple:!0,options:o}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:t=>`Group ${t.group}`,options:o}},m={args:{label:"Options Disabled",getOptionDisabled:t=>["1","4"].includes(t.id),options:o}},u={args:{label:"Disabled",disabled:!0,options:o}},d={args:{label:"Free solo",freeSolo:!0,options:o},render:t=>{const k=N(),[q,c]=K.useState(null);return J.jsx(R,{...t,value:q,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=k(e,r),{inputValue:n}=r,z=e.some(H=>n===H.label);return n!==""&&!z&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};var b,f,O;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Single",
    options
  }
}`,...(O=(f=i.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var S,V,D;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Single",
    options,
    inputProps: {
      variant: "outlined",
      InputProps: {
        startAdornment: "D"
      }
    }
  }
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var w,x,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Multiple",
    multiple: true,
    options
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var A,F,h;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Loading",
    loading: true,
    options: []
  }
}`,...(h=(F=s.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var y,E,G;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(B=m.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var M,P,_;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    disabled: true,
    options
  }
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var $,j,I;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const wr=["Base","Outlined","Multiple","Loading","Grouped","OptionDisabled","Disabled","FreeSolo"];export{i as Base,u as Disabled,d as FreeSolo,l as Grouped,s as Loading,a as Multiple,m as OptionDisabled,p as Outlined,wr as __namedExportsOrder,Dr as default};
//# sourceMappingURL=Autocomplete.stories-1fa3dd95.js.map
