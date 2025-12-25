import{j as r,r as a}from"./iframe-Bt0NHjzt.js";import{T as g}from"./Typography-D0JS2iMU.js";import{L as s}from"./LinearProgress-DroHHLmw.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography-C-487Qlx.js";import"./memoTheme-BgU4zM9I.js";import"./styled-BEaRT_Fa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Box-CDPnqyyJ.js";import"./LinearProgress-D7kdmpWb.js";const I={title:"Components/Progress/Linear Progress",component:s,tags:["autodocs"]},f={},p={args:{wrapSx:{mt:4}},render:e=>r.jsxs("div",{children:[r.jsx(s,{...e,color:"inherit"}),r.jsx(s,{...e,color:"primary"}),r.jsx(s,{...e,color:"secondary"}),r.jsx(s,{...e,color:"error"}),r.jsx(s,{...e,color:"info"}),r.jsx(s,{...e,color:"success"}),r.jsx(s,{...e,color:"warning"})]})},u={args:{wrapSx:{mt:4},variant:"buffer"},render:e=>{const[n,o]=a.useState(0),[i,t]=a.useState(10),m=a.useRef(()=>{});return a.useEffect(()=>{m.current=()=>{if(n>100)o(0),t(10);else{const c=Math.random()*10,d=Math.random()*10;o(n+c),t(n+c+d)}}}),a.useEffect(()=>{const c=setInterval(()=>{m.current()},500);return()=>{clearInterval(c)}},[]),r.jsxs("div",{children:[r.jsx(s,{...e,variant:"buffer",value:n,valueBuffer:i}),r.jsx(s,{...e,variant:"buffer",value:n,label:`${Math.round(n)}%`,valueBuffer:i})]})}},l={args:{wrapSx:{mt:4},variant:"determinate"},render:e=>{const[n,o]=a.useState(0);return a.useEffect(()=>{const i=setInterval(()=>{o(t=>t>=100?0:t+10)},800);return()=>{clearInterval(i)}},[]),r.jsxs("div",{children:[r.jsx(s,{...e,variant:"determinate",value:50,label:50}),r.jsx(s,{...e,variant:"determinate",value:75,label:"75%"}),r.jsx(s,{...e,variant:"determinate",value:n,label:r.jsx(g,{color:"primary.main",variant:"body2",sx:{minWidth:35},children:n})})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const R=["Base","Colors","Buffer","Determinate"];export{f as Base,u as Buffer,p as Colors,l as Determinate,R as __namedExportsOrder,I as default};
