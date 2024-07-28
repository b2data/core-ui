import{j as J}from"./jsx-runtime-4ca860c5.js";import{r as K}from"./index-61bf1805.js";import{A as R}from"./Autocomplete-c737759f.js";import{c as N}from"./Autocomplete-f79246f9.js";import"./_commonjsHelpers-de833af9.js";import"./ListItem-d9a538e7.js";import"./ListSubheader-4728c76a.js";import"./ListSubheader-7a766f3e.js";import"./createTheme-afe70497.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import"./index-b47fffdc.js";import"./styled-938ba038.js";import"./useThemeProps-bf98364a.js";import"./generateUtilityClasses-8f2c365e.js";import"./MenuList-8c082415.js";import"./react-is.production.min-a192e302.js";import"./useEnhancedEffect-e1879ff8.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./useForkRef-80a5c2b4.js";import"./ListContext-58194ff9.js";import"./createSvgIcon-b1b29720.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./isMuiElement-6a90d2d1.js";import"./ownerWindow-03d1c82d.js";import"./useId-65eea1c4.js";import"./useControlled-1b61d410.js";import"./useEventCallback-1165b6b6.js";import"./useIsFocusVisible-c78074a7.js";import"./IconButton-a9a827e6.js";import"./IconButton-efdfda35.js";import"./ButtonBase-d6010b8e.js";import"./emotion-react.browser.esm-42739ee1.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-5494d9cc.js";import"./TransitionGroupContext-adcba781.js";import"./ListItemAvatar-b931f374.js";import"./ListItemText-540834ac.js";import"./Tooltip-d60f8430.js";import"./Typography-41c7484f.js";import"./Typography-697659b2.js";import"./extendSxProp-50a8832f.js";import"./Tooltip-bf35a352.js";import"./useTheme-9d477022.js";import"./Popper-0ab55555.js";import"./ClassNameConfigurator-4826bb42.js";import"./Portal-c6ffb70f.js";import"./index-2801d3c9.js";import"./useSlotProps-761aac92.js";import"./isHostComponent-73d6e646.js";import"./Grow-b56d2d19.js";import"./utils-eb1a1c61.js";import"./ListItemText-277d441f.js";import"./listItemTextClasses-cc36566e.js";import"./ListItemButton-7532334a.js";import"./listItemButtonClasses-b1bda301.js";import"./ListItemIcon-a3c080bc.js";import"./MenuItem-26379da8.js";import"./dividerClasses-fa2bd388.js";import"./Menu-b27274bd.js";import"./Menu-a7e34ff0.js";import"./Popover-55fbf5b0.js";import"./Modal-557ea229.js";import"./Backdrop-7a9c79a0.js";import"./Paper-b8e9baec.js";import"./MenuItem-8ccd3716.js";import"./Box-cf9644a4.js";import"./ListItem-2f66c2d3.js";import"./Paper-4433b929.js";import"./TextField-f94f9fa8.js";import"./TextField-4c6e2e68.js";import"./useFormControl-18a13278.js";import"./InputBase-53f23eb4.js";import"./GlobalStyles-4b09581d.js";import"./FormHelperText-625d077c.js";import"./CircularProgress-9b8dd323.js";import"./CircularProgress-5fce7acd.js";import"./Close-d4a4d0e2.js";import"./Chip-f01bf30a.js";const o=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Vr={title:"Components/Inputs/Autocomplete",component:R,tags:["autodocs"]},n={args:{label:"Single",options:o}},p={args:{label:"Single",options:o,inputProps:{variant:"outlined"}}},a={args:{label:"Multiple",multiple:!0,options:o}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:t=>`Group ${t.group}`,options:o}},m={args:{label:"Options Disabled",getOptionDisabled:t=>["1","4"].includes(t.id),options:o}},u={args:{label:"Disabled",disabled:!0,options:o}},d={args:{label:"Free solo",freeSolo:!0,options:o},render:t=>{const k=N(),[q,c]=K.useState(null);return J.jsx(R,{...t,value:q,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=k(e,r),{inputValue:i}=r,z=e.some(H=>i===H.label);return i!==""&&!z&&g.push({inputValue:i,label:`Add "${i}"`,id:"new"}),g}})}};var b,f,O;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
//# sourceMappingURL=Autocomplete.stories-d229d6d2.js.map
