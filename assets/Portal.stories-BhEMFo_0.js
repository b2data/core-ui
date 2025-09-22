import{r as o,j as n}from"./iframe-BjsjcTCH.js";import{P as s}from"./Portal-DaBRkYns.js";import"./preload-helper-D9Z9MdNV.js";import"./Portal-_D9UOzoy.js";import"./index-B6TwdEj4.js";import"./index-SVAzG-T_.js";import"./useForkRef-CFOv3ZhY.js";import"./getReactElementRef-BzEn9AjC.js";const g={title:"Components/Portal",component:s,tags:["autodocs"]},e={render:i=>{const[r,a]=o.useState(!1),t=o.useRef(null);return n.jsxs("div",{children:[n.jsx("button",{type:"button",onClick:()=>a(!r),children:r?"Unmount children":"Mount children"}),n.jsxs("div",{style:{padding:8,margin:8,border:"1px solid"},children:["It looks like I will render here.",r?n.jsx(s,{...i,container:t.current,children:n.jsx("span",{children:"But I actually render here!"})}):null]}),n.jsx("div",{style:{padding:8,margin:8,border:"1px solid"},ref:t})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [show, setShow] = useState(false);
    const container = useRef(null);
    return <div>
        <button type="button" onClick={() => setShow(!show)}>
          {show ? "Unmount children" : "Mount children"}
        </button>
        <div style={{
        padding: 8,
        margin: 8,
        border: "1px solid"
      }}>
          It looks like I will render here.
          {show ? <Portal {...props} container={container.current}>
              <span>But I actually render here!</span>
            </Portal> : null}
        </div>
        <div style={{
        padding: 8,
        margin: 8,
        border: "1px solid"
      }} ref={container} />
      </div>;
  }
}`,...e.parameters?.docs?.source}}};const w=["Base"];export{e as Base,w as __namedExportsOrder,g as default};
