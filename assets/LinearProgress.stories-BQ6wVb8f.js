import{j as r}from"./jsx-runtime-DZlKWc7q.js";import{r as a}from"./index-3dRrDZpt.js";import{T as w}from"./Typography-ZPrNiE7K.js";import{L as s}from"./LinearProgress-DgfPO4V1.js";import"./Typography-I7qryP9c.js";import"./identifier-DOope7UP.js";import"./generateUtilityClass-CXPxvQOg.js";import"./styled-Mw1EHJJT.js";import"./defaultTheme-DgpnsjHP.js";import"./generateUtilityClasses-CkJG6r2x.js";import"./DefaultPropsProvider-BUlghEOV.js";import"./Box-B4yDLkDm.js";import"./useTheme-C1aVjhx_.js";import"./index-xeTtEoR5.js";const F={title:"Components/Progress/Linear Progress",component:s,tags:["autodocs"]},p={},f={args:{wrapSx:{mt:4}},render:e=>r.jsxs("div",{children:[r.jsx(s,{...e,color:"inherit"}),r.jsx(s,{...e,color:"primary"}),r.jsx(s,{...e,color:"secondary"}),r.jsx(s,{...e,color:"error"}),r.jsx(s,{...e,color:"info"}),r.jsx(s,{...e,color:"success"}),r.jsx(s,{...e,color:"warning"})]})},u={args:{wrapSx:{mt:4},variant:"buffer"},render:e=>{const[n,t]=a.useState(0),[i,o]=a.useState(10),l=a.useRef(()=>{});return a.useEffect(()=>{l.current=()=>{if(n>100)t(0),o(10);else{const c=Math.random()*10,E=Math.random()*10;t(n+c),o(n+c+E)}}}),a.useEffect(()=>{const c=setInterval(()=>{l.current()},500);return()=>{clearInterval(c)}},[]),r.jsxs("div",{children:[r.jsx(s,{...e,variant:"buffer",value:n,valueBuffer:i}),r.jsx(s,{...e,variant:"buffer",value:n,label:`${Math.round(n)}%`,valueBuffer:i})]})}},m={args:{wrapSx:{mt:4},variant:"determinate"},render:e=>{const[n,t]=a.useState(0);return a.useEffect(()=>{const i=setInterval(()=>{t(o=>o>=100?0:o+10)},800);return()=>{clearInterval(i)}},[]),r.jsxs("div",{children:[r.jsx(s,{...e,variant:"determinate",value:50,label:50}),r.jsx(s,{...e,variant:"determinate",value:75,label:"75%"}),r.jsx(s,{...e,variant:"determinate",value:n,label:r.jsx(w,{color:"primary.main",variant:"body2",sx:{minWidth:35},children:n})})]})}};var d,g,v;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(v=(g=p.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,P,b;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    wrapSx: {
      mt: 4
    }
  },
  render: props => <div>
      <LinearProgress {...props} color="inherit" />
      <LinearProgress {...props} color="primary" />
      <LinearProgress {...props} color="secondary" />
      <LinearProgress {...props} color="error" />
      <LinearProgress {...props} color="info" />
      <LinearProgress {...props} color="success" />
      <LinearProgress {...props} color="warning" />
    </div>
}`,...(b=(P=f.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var j,h,S;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    wrapSx: {
      mt: 4
    },
    variant: "buffer"
  },
  render: props => {
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);
    const progressRef = useRef(() => {});
    useEffect(() => {
      progressRef.current = () => {
        if (progress > 100) {
          setProgress(0);
          setBuffer(10);
        } else {
          const diff = Math.random() * 10;
          const diff2 = Math.random() * 10;
          setProgress(progress + diff);
          setBuffer(progress + diff + diff2);
        }
      };
    });
    useEffect(() => {
      const timer = setInterval(() => {
        progressRef.current();
      }, 500);
      return () => {
        clearInterval(timer);
      };
    }, []);
    return <div>
        <LinearProgress {...props} variant="buffer" value={progress} valueBuffer={buffer} />
        <LinearProgress {...props} variant="buffer" value={progress} label={\`\${Math.round(progress)}%\`} valueBuffer={buffer} />
      </div>;
  }
}`,...(S=(h=u.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var L,y,B;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    wrapSx: {
      mt: 4
    },
    variant: "determinate"
  },
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
    return <div>
        <LinearProgress {...props} variant="determinate" value={50} label={50} />
        <LinearProgress {...props} variant="determinate" value={75} label="75%" />
        <LinearProgress {...props} variant="determinate" value={progress} label={<Typography color="primary.main" variant="body2" sx={{
        minWidth: 35
      }}>
              {progress}
            </Typography>} />
      </div>;
  }
}`,...(B=(y=m.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const G=["Base","Colors","Buffer","Determinate"];export{p as Base,u as Buffer,f as Colors,m as Determinate,G as __namedExportsOrder,F as default};
