import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DQLiH3RP.js";import{P as l}from"./Portal-CBPKENUc.js";import"./Portal-DIoQGYRy.js";import"./index-B8qOg7Wt.js";import"./index-CJPVTaBz.js";import"./useForkRef-8i08ZgmQ.js";import"./getReactElementRef-DW0MqppP.js";import"./useEnhancedEffect-BJoEgHYV.js";const j={title:"Components/Portal",component:l,tags:["autodocs"]},r={render:d=>{const[e,c]=o.useState(!1),t=o.useRef(null);return n.jsxs("div",{children:[n.jsx("button",{type:"button",onClick:()=>c(!e),children:e?"Unmount children":"Mount children"}),n.jsxs("div",{style:{padding:8,margin:8,border:"1px solid"},children:["It looks like I will render here.",e?n.jsx(l,{...d,container:t.current,children:n.jsx("span",{children:"But I actually render here!"})}):null]}),n.jsx("div",{style:{padding:8,margin:8,border:"1px solid"},ref:t})]})}};var s,i,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const v=["Base"];export{r as Base,v as __namedExportsOrder,j as default};
