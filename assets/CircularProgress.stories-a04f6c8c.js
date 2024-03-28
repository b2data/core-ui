import{j as r}from"./jsx-runtime-4ca860c5.js";import{r as p}from"./index-61bf1805.js";import{P as i}from"./Preview-607a0968.js";import{T as S}from"./Typography-c971607a.js";import{C as s}from"./CircularProgress-51dabb5e.js";import"./_commonjsHelpers-de833af9.js";import"./Typography-55c28fbd.js";import"./createTheme-dbf13da2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./clsx-5c20934d.js";import"./styled-fa5f10e1.js";import"./useThemeProps-af14b15e.js";import"./generateUtilityClasses-2a7b4d5e.js";import"./extendSxProp-5fc992c6.js";import"./Box-d56a769d.js";import"./CircularProgress-6310d3c8.js";import"./emotion-react.browser.esm-9b27619f.js";const L={title:"Components/Progress/Circular Progress",component:s,tags:["autodocs"]},a={},o={render:e=>r.jsxs(i,{children:[r.jsx(s,{...e,size:24}),r.jsx(s,{...e,size:32}),r.jsx(s,{...e,size:32,thickness:1}),r.jsx(s,{...e,size:40}),r.jsx(s,{...e,size:40,thickness:10})]})},t={render:e=>r.jsxs(i,{children:[r.jsx(s,{...e,color:"inherit"}),r.jsx(s,{...e,color:"primary"}),r.jsx(s,{...e,color:"secondary"}),r.jsx(s,{...e,color:"error"}),r.jsx(s,{...e,color:"info"}),r.jsx(s,{...e,color:"success"}),r.jsx(s,{...e,color:"warning"})]})},n={render:e=>{const[c,z]=p.useState(0);return p.useEffect(()=>{const w=setInterval(()=>{z(l=>l>=100?0:l+10)},800);return()=>{clearInterval(w)}},[]),r.jsxs(i,{children:[r.jsx(s,{...e,variant:"determinate",value:0}),r.jsx(s,{...e,variant:"determinate",value:25}),r.jsx(s,{...e,variant:"determinate",value:50,label:50}),r.jsx(s,{...e,variant:"determinate",value:75,label:"75%"}),r.jsx(s,{...e,variant:"determinate",value:100}),r.jsx(s,{...e,variant:"determinate",value:c,label:r.jsx(S,{color:"primary.main",variant:"caption",children:c})})]})}};var m,u,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,v,P;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <Preview>
      <CircularProgress {...props} size={24} />
      <CircularProgress {...props} size={32} />
      <CircularProgress {...props} size={32} thickness={1} />
      <CircularProgress {...props} size={40} />
      <CircularProgress {...props} size={40} thickness={10} />
    </Preview>
}`,...(P=(v=o.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var x,j,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const M=["Base","Sizes","Colors","Determinate"];export{a as Base,t as Colors,n as Determinate,o as Sizes,M as __namedExportsOrder,L as default};
//# sourceMappingURL=CircularProgress.stories-a04f6c8c.js.map
