import{j as e}from"./jsx-runtime-4ca860c5.js";import{R as p,r as l}from"./index-61bf1805.js";import{M as u}from"./Portal-c6ffb70f.js";import"./_commonjsHelpers-de833af9.js";import"./index-2801d3c9.js";import"./useForkRef-80a5c2b4.js";import"./useEnhancedEffect-e1879ff8.js";const o=p.forwardRef((t,n)=>e.jsx(u,{ref:n,...t}));try{o.displayName="Portal",o.__docgenInfo={description:"",displayName:"Portal",props:{children:{defaultValue:null,description:"The children to render into the `container`.",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"An HTML element or function that returns one.\nThe `container` will have the portal children appended to it.\n\nBy default, it uses the body of the top-level document object,\nso it's simply `document.body` most of the time.",name:"container",required:!1,type:{name:"Element | (() => Element | null) | null"}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}}}}}catch{}const g={title:"Components/Portal",component:o,tags:["autodocs"]},r={render:t=>{const[n,c]=l.useState(!1),a=l.useRef(null);return e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>c(!n),children:n?"Unmount children":"Mount children"}),e.jsxs("div",{style:{padding:8,margin:8,border:"1px solid"},children:["It looks like I will render here.",n?e.jsx(o,{...t,container:a.current,children:e.jsx("span",{children:"But I actually render here!"})}):null]}),e.jsx("div",{style:{padding:8,margin:8,border:"1px solid"},ref:a})]})}};var s,i,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const v=["Base"];export{r as Base,v as __namedExportsOrder,g as default};
//# sourceMappingURL=Portal.stories-938b3b34.js.map
