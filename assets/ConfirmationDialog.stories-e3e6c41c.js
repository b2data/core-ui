import{j as e}from"./jsx-runtime-4ca860c5.js";import{R as V,r}from"./index-61bf1805.js";import{B as k}from"./Button-2c9b320b.js";import{T as f}from"./TextField-613d6cd9.js";import{D as z}from"./Dialog-18770179.js";import{I as q}from"./IconButton-dfaa3c35.js";import{c as B}from"./createSvgIcon-77a259fa.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-f7fbaf76.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./generateUtilityClasses-802c53db.js";import"./styled-3543814b.js";import"./clsx-63d16a80.js";import"./useThemeProps-8e2a0e37.js";import"./Button-3b1980ee.js";import"./ButtonBase-031fb489.js";import"./emotion-react.browser.esm-13bdab44.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-adcba781.js";import"./useForkRef-80a5c2b4.js";import"./useIsFocusVisible-9ca792e3.js";import"./useEventCallback-1165b6b6.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./CircularProgress-29f9ddb9.js";import"./TextField-87f63495.js";import"./useFormControl-0fc72469.js";import"./Typography-65ef5db8.js";import"./extendSxProp-69c75e3e.js";import"./InputBase-cb1ff889.js";import"./formControlState-a1fb9590.js";import"./index-2801d3c9.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./isHostComponent-73d6e646.js";import"./GlobalStyles-36f5d6b7.js";import"./isMuiElement-6a90d2d1.js";import"./react-is.production.min-a192e302.js";import"./Menu-e2de8e38.js";import"./useTheme-b04d84f2.js";import"./Popover-b634892d.js";import"./Modal-7c84a4aa.js";import"./Backdrop-b5fe5510.js";import"./utils-32a282cb.js";import"./getScrollbarSize-ac846fe6.js";import"./ClassNameConfigurator-4826bb42.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-00f30b1b.js";import"./Portal-c6ffb70f.js";import"./Paper-c4298f7a.js";import"./Grow-11d653f1.js";import"./MenuList-e6483060.js";import"./ListContext-58194ff9.js";import"./useControlled-1b61d410.js";import"./FormHelperText-c5044139.js";import"./DialogActions-00ff0dd4.js";import"./DialogActions-5b58ba0f.js";import"./DialogContent-9cf19324.js";import"./DialogContent-aa41376b.js";import"./dialogTitleClasses-6027551b.js";import"./DialogTitle-453f8a08.js";import"./DialogContext-b168eed1.js";import"./Dialog-118bc398.js";import"./IconButton-2a342a8d.js";const O=B(e.jsx("path",{d:"M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z"}),"CopyAll"),i=V.forwardRef(({acceptBtn:o,declineBtn:n,confirmProps:t,onClose:m,content:T,children:w,open:d,...D},j)=>{const[c,u]=r.useState(""),s=r.useRef(null);r.useEffect(()=>{u("")},[d]);const S=()=>{navigator.clipboard?navigator.clipboard.writeText((t==null?void 0:t.value)||""):s.current&&(s.current.select(),document.execCommand("copy"))};return e.jsxs(z,{ref:j,open:d,onClose:m,...D,actions:[...n?[{variant:"outlined",color:"default",...n,children:n.label||n.children,onClick:m}]:[],...o?[{variant:"contained",color:"primary",...o,children:o.label||o.children,disabled:t&&c!==t.value}]:[]],children:[T||w,t&&e.jsxs(e.Fragment,{children:[e.jsx(f,{readOnly:!0,variant:"outlined",margin:"normal",value:t.value,inputRef:s,endAdornment:e.jsx(q,{size:"small",onClick:S,children:e.jsx(O,{})}),sx:{mt:4}}),e.jsx(f,{variant:"outlined",placeholder:t.placeholder,helperText:t.helperText,onChange:p=>u(p.target.value),inputProps:{onKeyDown:p=>{var h;p.code==="Enter"&&((h=o==null?void 0:o.onClick)==null||h.call(o,null))}},value:c,autoComplete:"off",autoFocus:!0})]})]})});try{i.displayName="ConfirmationDialog",i.__docgenInfo={description:"",displayName:"ConfirmationDialog",props:{title:{defaultValue:null,description:"Title of the Dialog, will be wrapped by `DialogTitle`",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"Use `content` or `children` to privide dialog content",name:"content",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},acceptBtn:{defaultValue:null,description:"Accept button props inherit `ButtonProps`.<br>\nThe properties `disabled` will be overriden.\nSpecify text content by `label` property.",name:"acceptBtn",required:!0,type:{name:"ButtonProps & { label: string; }"}},declineBtn:{defaultValue:null,description:"Accept button props inherit `ButtonProps`.<br>\nThe property `onClick` will be overriden by `onClose`.\nSpecify text content by `label` property.",name:"declineBtn",required:!0,type:{name:"ButtonProps & { label: string; }"}},confirmProps:{defaultValue:null,description:"Include confirmation TextField for checking some text before submition.<br>\n`value` - The text that should be entered for submition.<br>\n`helperText` - Helper text message under text field.<br>\n`placeholder` - The placeholder for `name` textfield",name:"confirmProps",required:!1,type:{name:"{ value: string; helperText?: string; placeholder?: string; } | undefined"}},children:{defaultValue:null,description:"Dialog children, will be wrapped by `DialogContent`. Use `disablePadding` to remove padding.",name:"children",required:!1,type:{name:"ReactNode"}},maxWidth:{defaultValue:{value:"tablet"},description:"Determine the max-width of the dialog.\nThe dialog width grows with the size of the screen.\nSet to `false` to disable `maxWidth`.\nVariants: `desktop`, `tablet`, `mobile`.",name:"maxWidth",required:!1,type:{name:"false | Breakpoint"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\n@param event The event source of the callback.\n@param reason Can be: `"escapeKeyDown"`, `"backdropClick"`.',name:"onClose",required:!1,type:{name:'((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)'}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}}}}}catch{}const Je={title:"Components/Dialogs/Confirmation Dialog",component:i,tags:["autodocs"]},l={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Внимание! После удаления все данные будут удалены"},render:o=>{const[n,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(k,{onClick:()=>t(!0),children:"open"}),e.jsx(i,{...o,open:n,onClose:()=>t(!1)})]})}},a={args:{title:"Удалить данные",acceptBtn:{label:"Удалить",color:"error",loading:!1,onClick:()=>console.info("subbmitted")},declineBtn:{label:"Отмена"},content:"Вы действительно хотите удалить данные? Для подтверждения удаления введите:",confirmProps:{value:"Николай Туров",placeholder:"Ведите имя",helperText:"Для подтверждения вставьте название в это поле"}},render:o=>{const[n,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(k,{onClick:()=>t(!0),children:"open"}),e.jsx(i,{...o,open:n,onClose:()=>t(!1)})]})}};var b,g,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "Удалить данные",
    acceptBtn: {
      label: "Удалить",
      color: "error",
      loading: false,
      onClick: () => console.info("subbmitted")
    },
    declineBtn: {
      label: "Отмена"
    },
    content: "Внимание! После удаления все данные будут удалены"
  },
  render: props => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>open</Button>
        <ConfirmationDialog {...props} open={open} onClose={() => setOpen(false)} />
      </>;
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,y,C;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: "Удалить данные",
    acceptBtn: {
      label: "Удалить",
      color: "error",
      loading: false,
      onClick: () => console.info("subbmitted")
    },
    declineBtn: {
      label: "Отмена"
    },
    content: "Вы действительно хотите удалить данные? Для подтверждения удаления введите:",
    confirmProps: {
      value: "Николай Туров",
      placeholder: "Ведите имя",
      helperText: "Для подтверждения вставьте название в это поле"
    }
  },
  render: props => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>open</Button>
        <ConfirmationDialog {...props} open={open} onClose={() => setOpen(false)} />
      </>;
  }
}`,...(C=(y=a.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const Pe=["Base","WithInput"];export{l as Base,a as WithInput,Pe as __namedExportsOrder,Je as default};
//# sourceMappingURL=ConfirmationDialog.stories-e3e6c41c.js.map
