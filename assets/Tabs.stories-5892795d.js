import{j as e}from"./jsx-runtime-4ca860c5.js";import{R as I,r as S}from"./index-61bf1805.js";import{d as u}from"./Favorite-a3932429.js";import{T as l}from"./Tab-c3808822.js";import{T as q}from"./Tabs-f0f5a7e5.js";import"./_commonjsHelpers-de833af9.js";import"./createSvgIcon-be1c860b.js";import"./createSvgIcon-77a259fa.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./createTheme-f7fbaf76.js";import"./clsx-63d16a80.js";import"./useThemeProps-8e2a0e37.js";import"./styled-3543814b.js";import"./generateUtilityClasses-802c53db.js";import"./useForkRef-80a5c2b4.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./isMuiElement-6a90d2d1.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./useControlled-1b61d410.js";import"./useEventCallback-1165b6b6.js";import"./useIsFocusVisible-9ca792e3.js";import"./Tab-91d1d35b.js";import"./ButtonBase-031fb489.js";import"./emotion-react.browser.esm-13bdab44.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";import"./react-is.production.min-a192e302.js";import"./useTheme-b04d84f2.js";import"./useSlotProps-00f30b1b.js";import"./isHostComponent-73d6e646.js";import"./KeyboardArrowRight-340c9364.js";const n=I.forwardRef((a,r)=>e.jsx(q,{ref:r,...a}));try{n.displayName="Tabs",n.__docgenInfo={description:"",displayName:"Tabs",props:{orientation:{defaultValue:{value:"horizontal"},description:"The component orientation (layout flow direction).",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},variant:{defaultValue:{value:"standard"},description:"Determines additional display behavior of the tabs:\n\n- `scrollable` will invoke scrolling properties and allow for horizontally\nscrolling (or swiping) of the tab bar.\n-`fullWidth` will make the tabs grow to use all the available space,\nwhich should be used for small views, like on mobile.\n- `standard` will render the default state.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"fullWidth"'},{value:'"scrollable"'}]}},"aria-label":{defaultValue:null,description:"The label for the Tabs as a string.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"An id or list of ids separated by a space that label the Tabs.",name:"aria-labelledby",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:`Callback fired when the value changes.
@param event The event source of the callback. **Warning**: This is a generic event not a change event.
@param value We default to the index of the child (number)`,name:"onChange",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>, value: any) => void)"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},value:{defaultValue:null,description:"The value of the currently selected `Tab`.\nIf you don't want any selected `Tab`, you can set this prop to `false`.",name:"value",required:!1,type:{name:"any"}},allowScrollButtonsMobile:{defaultValue:{value:"false"},description:"If `true`, the scroll buttons aren't forced hidden on mobile.\nBy default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.",name:"allowScrollButtonsMobile",required:!1,type:{name:"boolean"}},centered:{defaultValue:{value:"false"},description:"If `true`, the tabs are centered.\nThis prop is intended for large views.",name:"centered",required:!1,type:{name:"boolean"}},scrollButtons:{defaultValue:{value:"'auto'"},description:"Determine behavior of scroll buttons when tabs are set to scroll:\n\n- `auto` will only present them when not all the items are visible.\n- `true` will always present them.\n- `false` will never present them.\n\nBy default the scroll buttons are hidden on mobile.\nThis behavior can be disabled with `allowScrollButtonsMobile`.",name:"scrollButtons",required:!1,type:{name:'boolean | "auto"'}}}}}catch{}const pe={title:"Components/Tabs/Tabs",component:n,tags:["autodocs"]},t=[e.jsx(l,{label:"Item One"}),e.jsx(l,{label:"Item Two"}),e.jsx(l,{label:"Item Three",disabled:!0})],s={args:{children:t,value:1}},i={args:{children:t},render:a=>{const[r,j]=S.useState(0),o=(_,V)=>j(V);return e.jsxs("div",{children:[e.jsx(n,{value:r,onChange:o,variant:"standard",...a}),e.jsx(n,{value:r,onChange:o,variant:"standard",centered:!0,...a}),e.jsx(n,{value:r,onChange:o,variant:"fullWidth",...a}),e.jsx(n,{value:r,onChange:o,variant:"scrollable",...a,children:t.concat(t).concat(t).concat(t)})]})}},d={args:{children:t.concat(t),orientation:"vertical",variant:"scrollable",value:1},render:a=>e.jsxs("div",{style:{height:200,display:"flex"},children:[e.jsx(n,{...a}),e.jsx("div",{style:{flex:1},children:"Content"})]})},c={args:{value:1},render:a=>e.jsxs(n,{...a,children:[e.jsx(l,{label:"Item One",icon:e.jsx(u,{})}),e.jsx(l,{label:"Item Two",iconPosition:"end",icon:e.jsx(u,{})}),e.jsx(l,{label:"Item Three",disabled:!0})]})};var p,m,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: content,
    value: 1
  }
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var v,b,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: content
  },
  render: props => {
    const [value, setValue] = useState(0);
    const handleChange = (e: React.SyntheticEvent, v: number) => setValue(v);
    return <div>
        <Tabs value={value} onChange={handleChange} variant="standard" {...props} />
        <Tabs value={value} onChange={handleChange} variant="standard" centered {...props} />
        <Tabs value={value} onChange={handleChange} variant="fullWidth" {...props} />
        <Tabs value={value} onChange={handleChange} variant="scrollable" {...props} children={content.concat(content).concat(content).concat(content)} />
      </div>;
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,y,T;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: content.concat(content),
    orientation: "vertical",
    variant: "scrollable",
    value: 1
  },
  render: props => {
    return <div style={{
      height: 200,
      display: "flex"
    }}>
        <Tabs {...props} />
        <div style={{
        flex: 1
      }}>Content</div>
      </div>;
  }
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,w,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 1
  },
  render: props => <Tabs {...props}>
      <Tab label="Item One" icon={<FavoriteIcon />} />
      <Tab label="Item Two" iconPosition="end" icon={<FavoriteIcon />} />
      <Tab label="Item Three" disabled />
    </Tabs>
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const me=["Base","Variants","Vertical","WithIcon"];export{s as Base,i as Variants,d as Vertical,c as WithIcon,me as __namedExportsOrder,pe as default};
//# sourceMappingURL=Tabs.stories-5892795d.js.map
