import{j as r,r as c}from"./iframe-G5ZpE7QO.js";import{P as p}from"./Preview-CBDnM22H.js";import{T as d}from"./Typography-BgxAaF2H.js";import{C as o}from"./CircularProgress-BpWdppDe.js";import"./preload-helper-PPVm8Dsz.js";import"./DatePicker-iKxVZMP8.js";import"./index-B92T7WXw.js";import"./useThemeProps-Bc0sqqow.js";import"./useThemeProps-DvF4oltY.js";import"./getThemeProps-C1xKM45S.js";import"./createSvgIcon-By4qT70r.js";import"./memoTheme-yIZRShux.js";import"./styled-B19C_ToH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useSlotProps-RR2uP_3d.js";import"./mergeSlotProps-DtAb3QtM.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D2tk6x-x.js";import"./Typography-C-S4zNgT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./IconButton-DZB3-HSc.js";import"./ButtonBase-DT2_oOoC.js";import"./useTimeout-CjFhj00D.js";import"./TransitionGroupContext-DdCBOnAD.js";import"./useEventCallback-CCbompB-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DU1PGsgU.js";import"./useControlled-BsGi7h6u.js";import"./MenuItem-eDVnLRQ4.js";import"./ListContext-C9b8DO9_.js";import"./listItemTextClasses-CiRxluPw.js";import"./MenuList-C1j_LIKx.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useFormControl-eaohbf9W.js";import"./visuallyHidden-Dan1xhjv.js";import"./KeyboardArrowRight-KE-SqfiB.js";import"./TextField-C7u9RTv9.js";import"./useSlot-Dnn0ZK68.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CvS70kmk.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-C_RzdKqk.js";import"./Menu-D1NUX130.js";import"./Popover-Zy7MGOxg.js";import"./Grow-CPMU4Gxv.js";import"./useTheme-B138dJGz.js";import"./utils-BY4JAHKj.js";import"./index-BMvGbyKB.js";import"./index-BOY60yfB.js";import"./getReactElementRef-DhAmtzfE.js";import"./mergeSlotProps-IEfrjphi.js";import"./Modal-ZvXrb2Ac.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CSHLtsMQ.js";import"./Backdrop-XPtT8SSm.js";import"./Paper-BiDxZ156.js";import"./isMuiElement-BDcnwjsu.js";import"./Skeleton-CBi1Gks-.js";import"./Popper-C5STi-k-.js";import"./Button-D5lq0aSm.js";import"./DialogActions-DKJ_qvoS.js";import"./ListItem-ge3qRtyz.js";import"./listItemButtonClasses-CXNhffuE.js";import"./Chip-CQdLv_Ho.js";import"./Dialog-BYU5oZXM.js";import"./DialogContext-BDY4yFBp.js";import"./DialogContent-D98PPRnQ.js";import"./dialogTitleClasses-Df1yqyCK.js";import"./Tab-DBpwmSd_.js";import"./FormHelperText-CTkIGaCP.js";import"./Box-D4a9ddNd.js";const Or={title:"Components/Progress/Circular Progress",component:o,tags:["autodocs"]},s={},t={render:e=>r.jsxs(p,{children:[r.jsx(o,{...e,size:24}),r.jsx(o,{...e,size:32}),r.jsx(o,{...e,size:32,thickness:1}),r.jsx(o,{...e,size:40}),r.jsx(o,{...e,size:40,thickness:10})]})},i={render:e=>r.jsxs(p,{children:[r.jsx(o,{...e,color:"inherit"}),r.jsx(o,{...e,color:"primary"}),r.jsx(o,{...e,color:"secondary"}),r.jsx(o,{...e,color:"error"}),r.jsx(o,{...e,color:"info"}),r.jsx(o,{...e,color:"success"}),r.jsx(o,{...e,color:"warning"})]})},a={render:e=>{const[n,l]=c.useState(0);return c.useEffect(()=>{const u=setInterval(()=>{l(m=>m>=100?0:m+10)},800);return()=>{clearInterval(u)}},[]),r.jsxs(p,{children:[r.jsx(o,{...e,variant:"determinate",value:0}),r.jsx(o,{...e,variant:"determinate",value:25}),r.jsx(o,{...e,variant:"determinate",value:50,label:50}),r.jsx(o,{...e,variant:"determinate",value:75,label:"75%"}),r.jsx(o,{...e,variant:"determinate",value:100}),r.jsx(o,{...e,variant:"determinate",value:n,label:r.jsx(d,{color:"primary.main",variant:"caption",children:n})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <Preview>
      <CircularProgress {...props} size={24} />
      <CircularProgress {...props} size={32} />
      <CircularProgress {...props} size={32} thickness={1} />
      <CircularProgress {...props} size={40} />
      <CircularProgress {...props} size={40} thickness={10} />
    </Preview>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Preview>
      <CircularProgress {...props} color="inherit" />
      <CircularProgress {...props} color="primary" />
      <CircularProgress {...props} color="secondary" />
      <CircularProgress {...props} color="error" />
      <CircularProgress {...props} color="info" />
      <CircularProgress {...props} color="success" />
      <CircularProgress {...props} color="warning" />
    </Preview>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Rr=["Base","Sizes","Colors","Determinate"];export{s as Base,i as Colors,a as Determinate,t as Sizes,Rr as __namedExportsOrder,Or as default};
