import{j as n}from"./jsx-runtime-4ca860c5.js";import{r as o}from"./index-61bf1805.js";import{P as l}from"./Portal-166f01e7.js";import"./_commonjsHelpers-de833af9.js";import"./Portal-c6ffb70f.js";import"./index-2801d3c9.js";import"./useForkRef-80a5c2b4.js";import"./useEnhancedEffect-e1879ff8.js";const b={title:"Components/Portal",component:l,tags:["autodocs"]},r={render:d=>{const[e,c]=o.useState(!1),t=o.useRef(null);return n.jsxs("div",{children:[n.jsx("button",{type:"button",onClick:()=>c(!e),children:e?"Unmount children":"Mount children"}),n.jsxs("div",{style:{padding:8,margin:8,border:"1px solid"},children:["It looks like I will render here.",e?n.jsx(l,{...d,container:t.current,children:n.jsx("span",{children:"But I actually render here!"})}):null]}),n.jsx("div",{style:{padding:8,margin:8,border:"1px solid"},ref:t})]})}};var s,i,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const j=["Base"];export{r as Base,j as __namedExportsOrder,b as default};
//# sourceMappingURL=Portal.stories-7b383ea6.js.map
