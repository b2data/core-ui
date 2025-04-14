import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DQLiH3RP.js";import{M as n}from"./MenuItem-BsqY7r_5.js";import{B as d}from"./Button-_czteQ9K.js";import{M as a}from"./Menu-CygbjCUE.js";import"./MenuItem-x3JkEPSs.js";import"./index-PKGOc6w3.js";import"./identifier-DtIXL9n7.js";import"./styled-BJ0TTCEB.js";import"./DefaultPropsProvider-CbX9bpU7.js";import"./memoTheme-BuPib-dq.js";import"./ListContext-RlEJDmc_.js";import"./generateUtilityClasses-KoSbOHxf.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./useForkRef-8i08ZgmQ.js";import"./ButtonBase-BOqIy2IP.js";import"./useTimeout-fSo4lzeS.js";import"./TransitionGroupContext-BSJTrji_.js";import"./emotion-react.browser.esm-cvNfxSC7.js";import"./useEventCallback-Drq2SckL.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-DRvX8tje.js";import"./dividerClasses-Bsr-Ji4c.js";import"./Box-gWX7U2_5.js";import"./useTheme-CIxVfZhu.js";import"./extendSxProp-CeBvtLOD.js";import"./Button-Bv80YAyb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-CCVJt5QL.js";import"./CircularProgress-Bdan-uB-.js";import"./Menu-BO4bTZTG.js";import"./index-DgnjHyRg.js";import"./useSlot-BXYsnuZK.js";import"./resolveComponentProps-Bi1IQseL.js";import"./useSlotProps-CWRXRlhi.js";import"./Popover-D_dhIdqU.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-4JKDUPo6.js";import"./useTheme-DNsyaSfM.js";import"./utils-D-OqLXMy.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./getReactElementRef-DW0MqppP.js";import"./mergeSlotProps-DjPLcKkk.js";import"./Modal-DHBtNlyn.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DIoQGYRy.js";import"./Backdrop-aj6OLuW3.js";import"./Paper-1rqY9H9j.js";import"./MenuList-xibqgwYT.js";const Mo={title:"Components/Menu/Menu",component:a,tags:["autodocs"]},t={render:l=>{const[e,i]=u.useState(null),r=()=>i(null);return o.jsxs("div",{children:[o.jsx(d,{variant:"contained",onClick:c=>i(c.currentTarget),children:"Open Menu"}),o.jsxs(a,{anchorEl:e,open:!!e,onClose:r,...l,children:[o.jsx(n,{onClick:r,children:"Telegram"}),o.jsx(n,{onClick:r,children:"Whatsapp"}),o.jsx(n,{children:"Mail"})]})]})}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClose = () => setAnchorEl(null);
    return <div>
        <Button variant="contained" onClick={e => setAnchorEl(e.currentTarget)}>
          Open Menu
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} {...props}>
          <MenuItem onClick={handleClose}>Telegram</MenuItem>
          <MenuItem onClick={handleClose}>Whatsapp</MenuItem>
          <MenuItem>Mail</MenuItem>
        </Menu>
      </div>;
  }
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const Co=["Base"];export{t as Base,Co as __namedExportsOrder,Mo as default};
