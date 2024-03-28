import{j as J}from"./jsx-runtime-4ca860c5.js";import{r as K}from"./index-61bf1805.js";import{A as R}from"./Autocomplete-12a6dac2.js";import{c as N}from"./Autocomplete-879197d5.js";import"./_commonjsHelpers-de833af9.js";import"./ListItem-d22efbde.js";import"./ListSubheader-ab254452.js";import"./ListSubheader-b440dd69.js";import"./createTheme-dbf13da2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./clsx-5c20934d.js";import"./styled-fa5f10e1.js";import"./useThemeProps-af14b15e.js";import"./generateUtilityClasses-2a7b4d5e.js";import"./MenuList-a0a2fbf1.js";import"./react-is.production.min-a192e302.js";import"./useEnhancedEffect-e1879ff8.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerDocument-613eb639.js";import"./useForkRef-80a5c2b4.js";import"./ListContext-58194ff9.js";import"./createSvgIcon-2385d4df.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./isMuiElement-6a90d2d1.js";import"./ownerWindow-03d1c82d.js";import"./useId-65eea1c4.js";import"./useControlled-1b61d410.js";import"./useEventCallback-1165b6b6.js";import"./useIsFocusVisible-c78074a7.js";import"./IconButton-fd6498d4.js";import"./IconButton-5d7db8b7.js";import"./ButtonBase-e3e89d5f.js";import"./emotion-react.browser.esm-9b27619f.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";import"./ListItemAvatar-3cc0cb83.js";import"./ListItemText-5ad31ce6.js";import"./Tooltip-f17d077a.js";import"./Typography-c971607a.js";import"./Typography-55c28fbd.js";import"./extendSxProp-5fc992c6.js";import"./Tooltip-50a7fbaa.js";import"./useTheme-2cc7c047.js";import"./Popper-05ad5af3.js";import"./ClassNameConfigurator-4826bb42.js";import"./Portal-c6ffb70f.js";import"./index-2801d3c9.js";import"./useSlotProps-4a5f3c0e.js";import"./isHostComponent-73d6e646.js";import"./Grow-8a34c90c.js";import"./utils-5b75737a.js";import"./ListItemText-52d2ebed.js";import"./listItemTextClasses-670f5f39.js";import"./ListItemButton-25a1643b.js";import"./listItemButtonClasses-acec16ee.js";import"./ListItemIcon-c7d49234.js";import"./MenuItem-ac2de4ef.js";import"./dividerClasses-91d759d3.js";import"./Menu-7a2907a3.js";import"./Menu-2b7e8a24.js";import"./Popover-9235690e.js";import"./Modal-552b375e.js";import"./Backdrop-4cbb43ae.js";import"./Paper-08c921af.js";import"./MenuItem-48cb39a6.js";import"./Box-d56a769d.js";import"./ListItem-0a946dff.js";import"./Paper-b77f5a6e.js";import"./TextField-bd5195e7.js";import"./TextField-045de448.js";import"./useFormControl-18a13278.js";import"./InputBase-87cb84a6.js";import"./GlobalStyles-d958c0e2.js";import"./FormHelperText-0362965d.js";import"./CircularProgress-51dabb5e.js";import"./CircularProgress-6310d3c8.js";import"./Close-aec15d64.js";import"./Chip-6c083e39.js";const o=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Vr={title:"Components/Inputs/Autocomplete",component:R,tags:["autodocs"]},n={args:{label:"Single",options:o}},p={args:{label:"Single",options:o,inputProps:{variant:"outlined"}}},a={args:{label:"Multiple",multiple:!0,options:o}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:t=>`Group ${t.group}`,options:o}},m={args:{label:"Options Disabled",getOptionDisabled:t=>["1","4"].includes(t.id),options:o}},u={args:{label:"Disabled",disabled:!0,options:o}},d={args:{label:"Free solo",freeSolo:!0,options:o},render:t=>{const k=N(),[q,c]=K.useState(null);return J.jsx(R,{...t,value:q,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=k(e,r),{inputValue:i}=r,z=e.some(H=>i===H.label);return i!==""&&!z&&g.push({inputValue:i,label:`Add "${i}"`,id:"new"}),g}})}};var b,f,O;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
//# sourceMappingURL=Autocomplete.stories-4a995346.js.map
