import{j as J}from"./jsx-runtime-D_zvdyIk.js";import{r as K}from"./index-DQLiH3RP.js";import{A as R,c as N}from"./Autocomplete-zIBnTsap.js";import"./createSvgIcon-CO4HlTK9.js";import"./generateUtilityClass-Crd22lsZ.js";import"./createTheme-CpmnfvGf.js";import"./memoTheme-6CX_wYOL.js";import"./styled-DnAalvCx.js";import"./DefaultPropsProvider-D7SvoM6x.js";import"./generateUtilityClasses-C4v8O9Po.js";import"./Typography-6RvDKJOJ.js";import"./Typography-Dwm8olcE.js";import"./index-BklahHT9.js";import"./extendSxProp-CldLvC6h.js";import"./useTheme-BB2j23dw.js";import"./emotion-react.browser.esm-_xrAgkY8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-B0KT51wa.js";import"./ListSubheader-frs62NMr.js";import"./MenuList-BPJ61TbX.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-8i08ZgmQ.js";import"./ListContext-RlEJDmc_.js";import"./IconButton-BoWoVwqc.js";import"./IconButton-OYb-j5n3.js";import"./useId-CCVJt5QL.js";import"./ButtonBase-5iSMQWv2.js";import"./useTimeout-fSo4lzeS.js";import"./TransitionGroupContext-BSJTrji_.js";import"./useEventCallback-Drq2SckL.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DGh0pnDC.js";import"./ListItemAvatar-BXPpQltQ.js";import"./ListItemText-DkzyvVjb.js";import"./Tooltip-DekNaFIj.js";import"./index-DgnjHyRg.js";import"./useTheme-B1gvnf2G.js";import"./useSlot-CWOIDwz3.js";import"./resolveComponentProps-DgnXLWZd.js";import"./useControlled-Dua98H8U.js";import"./getReactElementRef-DW0MqppP.js";import"./Grow-MdOxVC7Q.js";import"./utils-D-OqLXMy.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./Popper-CFZyeSRC.js";import"./Portal-DIoQGYRy.js";import"./useSlotProps-D4framZf.js";import"./listItemTextClasses-Bo5uZj11.js";import"./ListItemButton-BoLyvlBY.js";import"./listItemButtonClasses-UXmFVBkX.js";import"./MenuItem-ZAqpjX9M.js";import"./Menu-CkEemIgh.js";import"./Menu-vbRP1Lwk.js";import"./Popover-CvDRWH94.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Dso7hb34.js";import"./Modal-BnKDmmi5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-rM1Sqkg2.js";import"./Paper-B39jOWew.js";import"./MenuItem-Dsdmt1Gn.js";import"./Box-BUsa_nNj.js";import"./ListItem-CXWDqThp.js";import"./isMuiElement-F0FdrIHp.js";import"./Paper-BS0KIDwp.js";import"./TextField-CmfF5ZsN.js";import"./InputAdornment-CZJ618Za.js";import"./useFormControl-CFlSGleh.js";import"./InputBase-TgBY0iwI.js";import"./FormHelperText-Cc-WpUQs.js";import"./CircularProgress-DYKO_uGX.js";import"./Close-BWA2OZZ4.js";import"./Chip-BEpZlKze.js";const o=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Or={title:"Components/Inputs/Autocomplete",component:R,tags:["autodocs"]},i={args:{label:"Single",options:o}},p={args:{label:"Single",options:o,inputProps:{variant:"outlined",startAdornment:"D"}}},a={args:{label:"Multiple",multiple:!0,options:o}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:t=>`Group ${t.group}`,options:o}},m={args:{label:"Options Disabled",getOptionDisabled:t=>["1","4"].includes(t.id),options:o}},u={args:{label:"Disabled",disabled:!0,options:o}},d={args:{label:"Free solo",freeSolo:!0,options:o},render:t=>{const k=N(),[q,c]=K.useState(null);return J.jsx(R,{...t,value:q,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=k(e,r),{inputValue:n}=r,z=e.some(H=>n===H.label);return n!==""&&!z&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};var b,f,O;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      startAdornment: "D"
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
}`,...(I=(P=d.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const Sr=["Base","Outlined","Multiple","Loading","Grouped","OptionDisabled","Disabled","FreeSolo"];export{i as Base,u as Disabled,d as FreeSolo,l as Grouped,s as Loading,a as Multiple,m as OptionDisabled,p as Outlined,Sr as __namedExportsOrder,Or as default};
