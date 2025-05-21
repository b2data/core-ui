import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DQLiH3RP.js";import{P as i}from"./Preview-CyYdMjgA.js";import{T as S}from"./Typography-DwWKbx3K.js";import{C as s}from"./CircularProgress-Dcd58R3t.js";import"./Typography-B3F8RKoS.js";import"./index-PKGOc6w3.js";import"./identifier-DtIXL9n7.js";import"./index-B4ybzDYI.js";import"./extendSxProp-CeBvtLOD.js";import"./DefaultPropsProvider-CbX9bpU7.js";import"./useTheme-CIxVfZhu.js";import"./emotion-react.browser.esm-cvNfxSC7.js";import"./memoTheme-BuPib-dq.js";import"./styled-BJ0TTCEB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-KoSbOHxf.js";import"./Box-gWX7U2_5.js";import"./CircularProgress-Bdan-uB-.js";const N={title:"Components/Progress/Circular Progress",component:s,tags:["autodocs"]},o={},a={render:e=>r.jsxs(i,{children:[r.jsx(s,{...e,size:24}),r.jsx(s,{...e,size:32}),r.jsx(s,{...e,size:32,thickness:1}),r.jsx(s,{...e,size:40}),r.jsx(s,{...e,size:40,thickness:10})]})},t={render:e=>r.jsxs(i,{children:[r.jsx(s,{...e,color:"inherit"}),r.jsx(s,{...e,color:"primary"}),r.jsx(s,{...e,color:"secondary"}),r.jsx(s,{...e,color:"error"}),r.jsx(s,{...e,color:"info"}),r.jsx(s,{...e,color:"success"}),r.jsx(s,{...e,color:"warning"})]})},n={render:e=>{const[c,z]=p.useState(0);return p.useEffect(()=>{const w=setInterval(()=>{z(l=>l>=100?0:l+10)},800);return()=>{clearInterval(w)}},[]),r.jsxs(i,{children:[r.jsx(s,{...e,variant:"determinate",value:0}),r.jsx(s,{...e,variant:"determinate",value:25}),r.jsx(s,{...e,variant:"determinate",value:50,label:50}),r.jsx(s,{...e,variant:"determinate",value:75,label:"75%"}),r.jsx(s,{...e,variant:"determinate",value:100}),r.jsx(s,{...e,variant:"determinate",value:c,label:r.jsx(S,{color:"primary.main",variant:"caption",children:c})})]})}};var m,u,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,v,P;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <Preview>
      <CircularProgress {...props} size={24} />
      <CircularProgress {...props} size={32} />
      <CircularProgress {...props} size={32} thickness={1} />
      <CircularProgress {...props} size={40} />
      <CircularProgress {...props} size={40} thickness={10} />
    </Preview>
}`,...(P=(v=a.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var x,j,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <Preview>
      <CircularProgress {...props} color="inherit" />
      <CircularProgress {...props} color="primary" />
      <CircularProgress {...props} color="secondary" />
      <CircularProgress {...props} color="error" />
      <CircularProgress {...props} color="info" />
      <CircularProgress {...props} color="success" />
      <CircularProgress {...props} color="warning" />
    </Preview>
}`,...(C=(j=t.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var h,f,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Q=["Base","Sizes","Colors","Determinate"];export{o as Base,t as Colors,n as Determinate,a as Sizes,Q as __namedExportsOrder,N as default};
