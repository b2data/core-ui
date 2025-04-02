import{j as J}from"./jsx-runtime-D_zvdyIk.js";import{r as K}from"./index-DQLiH3RP.js";import{A as R}from"./Autocomplete-B4OUaFPL.js";import{c as N}from"./Autocomplete-D-ZOoj6S.js";import"./createSvgIcon-BtpK0we9.js";import"./index-PKGOc6w3.js";import"./identifier-DtIXL9n7.js";import"./memoTheme-BuPib-dq.js";import"./styled-BJ0TTCEB.js";import"./DefaultPropsProvider-CbX9bpU7.js";import"./generateUtilityClasses-KoSbOHxf.js";import"./Typography-DwWKbx3K.js";import"./Typography-B3F8RKoS.js";import"./index-B4ybzDYI.js";import"./extendSxProp-CeBvtLOD.js";import"./useTheme-CIxVfZhu.js";import"./emotion-react.browser.esm-cvNfxSC7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-Cqlnk-Mn.js";import"./ListSubheader-KtbqH_fd.js";import"./ListSubheader-DvJOaJSj.js";import"./MenuList-xibqgwYT.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-8i08ZgmQ.js";import"./ListContext-RlEJDmc_.js";import"./IconButton-oZUWDUUv.js";import"./IconButton-BHpVciwy.js";import"./useId-CCVJt5QL.js";import"./ButtonBase-BOqIy2IP.js";import"./useTimeout-fSo4lzeS.js";import"./TransitionGroupContext-BSJTrji_.js";import"./useEventCallback-Drq2SckL.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bdan-uB-.js";import"./ListItemAvatar-DkoNvbHS.js";import"./ListItemText-B6ZQWRL4.js";import"./Tooltip-80pWQ0pn.js";import"./Tooltip-tefvHEjD.js";import"./index-DgnjHyRg.js";import"./useTheme-DNsyaSfM.js";import"./useSlot-BXYsnuZK.js";import"./resolveComponentProps-Bi1IQseL.js";import"./useControlled-Dua98H8U.js";import"./getReactElementRef-DW0MqppP.js";import"./Grow-4JKDUPo6.js";import"./utils-D-OqLXMy.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./Popper-BQjGEA96.js";import"./Portal-DIoQGYRy.js";import"./useSlotProps-CWRXRlhi.js";import"./ListItemText-BljW6y1y.js";import"./listItemTextClasses-DRvX8tje.js";import"./ListItemButton-CUqNZRE2.js";import"./listItemButtonClasses-CSApTCrt.js";import"./ListItemIcon-DP9_SS_X.js";import"./MenuItem-x3JkEPSs.js";import"./dividerClasses-Bsr-Ji4c.js";import"./Menu-bZp-9CUP.js";import"./Menu-BO4bTZTG.js";import"./Popover-D_dhIdqU.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-DjPLcKkk.js";import"./Modal-DHBtNlyn.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-aj6OLuW3.js";import"./Paper-1rqY9H9j.js";import"./MenuItem-BsqY7r_5.js";import"./Box-gWX7U2_5.js";import"./ListItem-KbR-kAqL.js";import"./isMuiElement-F0FdrIHp.js";import"./Paper-Dh8VJw1x.js";import"./TextField-DRli72KP.js";import"./TextField-tDd7_mbr.js";import"./useFormControl-CFlSGleh.js";import"./InputBase-9cmZG5jd.js";import"./FormHelperText-5ymCQBNH.js";import"./CircularProgress-BGCiE9L6.js";import"./Close-BU3UQVid.js";import"./Chip-DLfQ3cvJ.js";const o=[{id:"1",group:1,label:"Option 1"},{id:"2",group:1,label:"Option 2"},{id:"3",group:1,label:"Option 3"},{id:"4",group:2,label:"Option 4"},{id:"5",group:2,label:"Option 5"},{id:"6",group:2,label:"Option 6"}],vr={title:"Components/Inputs/Autocomplete",component:R,tags:["autodocs"]},i={args:{label:"Single",options:o}},p={args:{label:"Single",options:o,inputProps:{variant:"outlined",startAdornment:"D"}}},a={args:{label:"Multiple",multiple:!0,options:o}},s={args:{label:"Loading",loading:!0,options:[]}},l={args:{label:"Grouped",groupBy:t=>`Group ${t.group}`,options:o}},m={args:{label:"Options Disabled",getOptionDisabled:t=>["1","4"].includes(t.id),options:o}},u={args:{label:"Disabled",disabled:!0,options:o}},d={args:{label:"Free solo",freeSolo:!0,options:o},render:t=>{const k=N(),[q,c]=K.useState(null);return J.jsx(R,{...t,value:q,onChange:(e,r)=>{typeof r=="string"?c({label:r,id:"new"}):r&&r.inputValue?c({label:r.inputValue,id:"new"}):c(r)},getOptionLabel:e=>typeof e=="string"?e:e.inputValue?e.inputValue||"":e.label,filterOptions:(e,r)=>{const g=k(e,r),{inputValue:n}=r,z=e.some(H=>n===H.label);return n!==""&&!z&&g.push({inputValue:n,label:`Add "${n}"`,id:"new"}),g}})}};var b,f,O;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(P=d.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const Ar=["Base","Outlined","Multiple","Loading","Grouped","OptionDisabled","Disabled","FreeSolo"];export{i as Base,u as Disabled,d as FreeSolo,l as Grouped,s as Loading,a as Multiple,m as OptionDisabled,p as Outlined,Ar as __namedExportsOrder,vr as default};
