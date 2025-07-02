import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DQLiH3RP.js";import{P as p}from"./Preview-DRZaxZuf.js";import{T as S}from"./Typography-DOtYsc8a.js";import{C as o}from"./CircularProgress-COTJZyda.js";import"./DatePicker-DDAe_g90.js";import"./generateUtilityClass-Crd22lsZ.js";import"./createTheme-CpmnfvGf.js";import"./KeyboardArrowRight-Bk1Wt5ck.js";import"./memoTheme-6CX_wYOL.js";import"./styled-DnAalvCx.js";import"./DefaultPropsProvider-D7SvoM6x.js";import"./MenuItem-ZAqpjX9M.js";import"./ListContext-RlEJDmc_.js";import"./generateUtilityClasses-C4v8O9Po.js";import"./useEnhancedEffect-BJoEgHYV.js";import"./useForkRef-8i08ZgmQ.js";import"./ButtonBase-5iSMQWv2.js";import"./useTimeout-fSo4lzeS.js";import"./TransitionGroupContext-BSJTrji_.js";import"./emotion-react.browser.esm-_xrAgkY8.js";import"./useEventCallback-Drq2SckL.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-Bo5uZj11.js";import"./createSvgIcon-CO4HlTK9.js";import"./useThemeProps-Di6yDU3k.js";import"./getThemeProps--PVqB0Nq.js";import"./useTheme-BB2j23dw.js";import"./index-DgnjHyRg.js";import"./useSlotProps-D4framZf.js";import"./resolveComponentProps-DgnXLWZd.js";import"./Typography-Dwm8olcE.js";import"./index-BklahHT9.js";import"./extendSxProp-CldLvC6h.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./IconButton-OYb-j5n3.js";import"./useId-CCVJt5QL.js";import"./CircularProgress-DGh0pnDC.js";import"./useControlled-Dua98H8U.js";import"./MenuList-BPJ61TbX.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useFormControl-CFlSGleh.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CZJ618Za.js";import"./useSlot-CWOIDwz3.js";import"./InputBase-TgBY0iwI.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-Cc-WpUQs.js";import"./Menu-vbRP1Lwk.js";import"./Popover-CvDRWH94.js";import"./Grow-MdOxVC7Q.js";import"./useTheme-B1gvnf2G.js";import"./utils-D-OqLXMy.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./getReactElementRef-DW0MqppP.js";import"./mergeSlotProps-Dso7hb34.js";import"./Modal-BnKDmmi5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DIoQGYRy.js";import"./Backdrop-rM1Sqkg2.js";import"./Paper-B39jOWew.js";import"./isMuiElement-F0FdrIHp.js";import"./Skeleton-CiZPa09o.js";import"./Popper-CFZyeSRC.js";import"./Button-DL9xouUq.js";import"./DialogActions-BEJqaHA0.js";import"./ListItem-CXWDqThp.js";import"./listItemButtonClasses-UXmFVBkX.js";import"./Chip-BEpZlKze.js";import"./Dialog-D9KXK6ez.js";import"./DialogContext-DJRAh6Dz.js";import"./DialogContent-gmz0T1zP.js";import"./dialogTitleClasses-DF_mnKxg.js";import"./Tab-DIlL_UQR.js";import"./FormHelperText-6GB2F1Tp.js";import"./Box-BUsa_nNj.js";const Zr={title:"Components/Progress/Circular Progress",component:o,tags:["autodocs"]},t={},s={render:e=>r.jsxs(p,{children:[r.jsx(o,{...e,size:24}),r.jsx(o,{...e,size:32}),r.jsx(o,{...e,size:32,thickness:1}),r.jsx(o,{...e,size:40}),r.jsx(o,{...e,size:40,thickness:10})]})},i={render:e=>r.jsxs(p,{children:[r.jsx(o,{...e,color:"inherit"}),r.jsx(o,{...e,color:"primary"}),r.jsx(o,{...e,color:"secondary"}),r.jsx(o,{...e,color:"error"}),r.jsx(o,{...e,color:"info"}),r.jsx(o,{...e,color:"success"}),r.jsx(o,{...e,color:"warning"})]})},a={render:e=>{const[m,z]=c.useState(0);return c.useEffect(()=>{const w=setInterval(()=>{z(n=>n>=100?0:n+10)},800);return()=>{clearInterval(w)}},[]),r.jsxs(p,{children:[r.jsx(o,{...e,variant:"determinate",value:0}),r.jsx(o,{...e,variant:"determinate",value:25}),r.jsx(o,{...e,variant:"determinate",value:50,label:50}),r.jsx(o,{...e,variant:"determinate",value:75,label:"75%"}),r.jsx(o,{...e,variant:"determinate",value:100}),r.jsx(o,{...e,variant:"determinate",value:m,label:r.jsx(S,{color:"primary.main",variant:"caption",children:m})})]})}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,v,P;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <Preview>
      <CircularProgress {...props} size={24} />
      <CircularProgress {...props} size={32} />
      <CircularProgress {...props} size={32} thickness={1} />
      <CircularProgress {...props} size={40} />
      <CircularProgress {...props} size={40} thickness={10} />
    </Preview>
}`,...(P=(v=s.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var x,j,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <Preview>
      <CircularProgress {...props} color="inherit" />
      <CircularProgress {...props} color="primary" />
      <CircularProgress {...props} color="secondary" />
      <CircularProgress {...props} color="error" />
      <CircularProgress {...props} color="info" />
      <CircularProgress {...props} color="success" />
      <CircularProgress {...props} color="warning" />
    </Preview>
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var h,f,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prevProgress => prevProgress >= 100 ? 0 : prevProgress + 10);
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);
    return <Preview>
        <CircularProgress {...props} variant="determinate" value={0} />
        <CircularProgress {...props} variant="determinate" value={25} />
        <CircularProgress {...props} variant="determinate" value={50} label={50} />
        <CircularProgress {...props} variant="determinate" value={75} label="75%" />
        <CircularProgress {...props} variant="determinate" value={100} />
        <CircularProgress {...props} variant="determinate" value={progress} label={<Typography color="primary.main" variant="caption">
              {progress}
            </Typography>} />
      </Preview>;
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const $r=["Base","Sizes","Colors","Determinate"];export{t as Base,i as Colors,a as Determinate,s as Sizes,$r as __namedExportsOrder,Zr as default};
