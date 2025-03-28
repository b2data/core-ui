import{j as J}from"./jsx-runtime-DZlKWc7q.js";import{r as K}from"./index-3dRrDZpt.js";import{A as R}from"./Autocomplete-v4OV_RSo.js";import{c as N}from"./Autocomplete-BRfPrCC0.js";import"./identifier-DOope7UP.js";import"./ListItem-D03pNH3x.js";import"./ListSubheader-Lessfh4y.js";import"./ListSubheader-CNxJzXPu.js";import"./generateUtilityClass-CXPxvQOg.js";import"./styled-Mw1EHJJT.js";import"./defaultTheme-DgpnsjHP.js";import"./generateUtilityClasses-CkJG6r2x.js";import"./DefaultPropsProvider-BUlghEOV.js";import"./MenuList-D-LNiX5l.js";import"./useEnhancedEffect-BJLNeg-6.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-Dg5HCZjH.js";import"./ListContext-CJ4YrkIs.js";import"./createSvgIcon-CNApDc7Z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./debounce-Be36O1Ab.js";import"./isMuiElement-BZL4V-eo.js";import"./ownerWindow-HkKU3E4x.js";import"./useId-C0_knTX8.js";import"./useControlled-DPuDlC9C.js";import"./useEventCallback-rxG9GCI1.js";import"./useIsFocusVisible-kKmNRUXV.js";import"./useTimeout-Caar1w0_.js";import"./IconButton-BQNU5rqW.js";import"./IconButton-CPPCIBnV.js";import"./ButtonBase-DG2qOmNJ.js";import"./TransitionGroupContext-CTqiJmAL.js";import"./ListItemAvatar-UtnYPlBz.js";import"./ListItemText-C-jaYfuD.js";import"./Tooltip-DrmuoGi_.js";import"./Typography-ZPrNiE7K.js";import"./Typography-I7qryP9c.js";import"./Tooltip-DmSOYA_u.js";import"./index-xeTtEoR5.js";import"./Grow-BK3n8APd.js";import"./useTheme-DVj2CI2E.js";import"./useTheme-C1aVjhx_.js";import"./utils-CiCX3onH.js";import"./index-BAcUCDwH.js";import"./index-BVoldrdP.js";import"./getReactElementRef-40wuMu9m.js";import"./mergeSlotProps-D0R3fJWy.js";import"./isHostComponent-DVu5iVWx.js";import"./Popper-B8D57J5A.js";import"./Portal-79c61KSa.js";import"./useSlotProps-xExk7eqi.js";import"./ListItemText-DmIq0ON5.js";import"./listItemTextClasses-CQaHVKTz.js";import"./ListItemButton-DRQabMkQ.js";import"./listItemButtonClasses-CtYtAQd6.js";import"./ListItemIcon-B2uqka0T.js";import"./MenuItem-B9hap1ET.js";import"./dividerClasses-BVnYb8lf.js";import"./Menu-B0_cjZbI.js";import"./Menu-D3OPfHli.js";import"./Popover-DZ6r3iRc.js";import"./Modal-CUw12K15.js";import"./Backdrop-Bb5spx6G.js";import"./Paper-Dib-hOey.js";import"./MenuItem-Dz47LlzX.js";import"./Box-B4yDLkDm.js";import"./ListItem-DRsH0oYQ.js";import"./Paper-Do2NqOO9.js";import"./TextField-BesppdhO.js";import"./TextField-BZH8Wt7w.js";import"./useFormControl-Dk_vwUyJ.js";import"./InputBase-CBNHzBXe.js";import"./GlobalStyles-8r8qBg7C.js";import"./FormHelperText-D7qwk-9G.js";import"./CircularProgress-8qwDZB6B.js";import"./CircularProgress-DCuTWsso.js";import"./Close-Cg2sl21Q.js";import"./Chip-7PUjd6FA.js";const o=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],Sr={title:"Components/Inputs/Autocomplete",component:R,tags:["autodocs"]},i={args:{label:"Single",options:o}},p={args:{label:"Single",options:o,inputProps:{variant:"outlined",InputProps:{startAdornment:"D"}}}},a={args:{label:"Multiple",multiple:!0,options:o}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:t=>`Group ${t.group}`,options:o}},m={args:{label:"Options Disabled",getOptionDisabled:t=>["1","4"].includes(t.id),options:o}},u={args:{label:"Disabled",disabled:!0,options:o}},d={args:{label:"Free solo",freeSolo:!0,options:o},render:t=>{const k=N(),[q,c]=K.useState(null);return J.jsx(R,{...t,value:q,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=k(e,r),{inputValue:n}=r,z=e.some(H=>n===H.label);return n!==""&&!z&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};var b,f,O;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const Vr=["Base","Outlined","Multiple","Loading","Grouped","OptionDisabled","Disabled","FreeSolo"];export{i as Base,u as Disabled,d as FreeSolo,l as Grouped,s as Loading,a as Multiple,m as OptionDisabled,p as Outlined,Vr as __namedExportsOrder,Sr as default};
