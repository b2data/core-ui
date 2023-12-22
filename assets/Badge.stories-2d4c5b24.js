import{j as r}from"./jsx-runtime-4ca860c5.js";import{r as _,i as y}from"./createSvgIcon-be1c860b.js";import{P as c}from"./Preview-607a0968.js";import{B as o}from"./Badge-9609ee63.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./createSvgIcon-77a259fa.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./createTheme-f7fbaf76.js";import"./clsx-63d16a80.js";import"./useThemeProps-8e2a0e37.js";import"./styled-3543814b.js";import"./generateUtilityClasses-802c53db.js";import"./useForkRef-80a5c2b4.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./isMuiElement-6a90d2d1.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEnhancedEffect-e1879ff8.js";import"./useId-65eea1c4.js";import"./useControlled-1b61d410.js";import"./useEventCallback-1165b6b6.js";import"./useIsFocusVisible-9ca792e3.js";import"./Badge-dbfe1c08.js";import"./usePreviousProps-f2413a0b.js";import"./useSlotProps-00f30b1b.js";import"./isHostComponent-73d6e646.js";var p={},I=y;Object.defineProperty(p,"__esModule",{value:!0});var a=p.default=void 0,S=I(_()),V=r,z=(0,S.default)((0,V.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail");a=p.default=z;const sr={title:"Components/Badge",component:o,tags:["autodocs"]},n={args:{badgeContent:4},render:e=>r.jsx(o,{...e,children:r.jsx(a,{})})},t={args:{badgeContent:4,children:r.jsx(a,{})},render:e=>r.jsxs(c,{children:[r.jsx(o,{...e,color:"primary"}),r.jsx(o,{...e,color:"secondary"}),r.jsx(o,{...e,color:"error"}),r.jsx(o,{...e,color:"success"}),r.jsx(o,{...e,color:"warning"}),r.jsx(o,{...e,color:"info"}),r.jsx(o,{...e,color:"default"})]})},s={args:{children:r.jsx(a,{})},render:e=>r.jsxs(c,{children:[r.jsx(o,{...e,badgeContent:99}),r.jsx(o,{...e,badgeContent:100}),r.jsx(o,{...e,badgeContent:1e3,max:999})]})},i={args:{children:r.jsx(a,{})},render:e=>r.jsxs(c,{children:[r.jsx(o,{...e,variant:"dot",invisible:!1}),r.jsx(o,{...e,variant:"dot",invisible:!0}),r.jsx(o,{...e,showZero:!1,badgeContent:0}),r.jsx(o,{...e,showZero:!0,badgeContent:0})]})},d={args:{children:r.jsx(a,{})},render:e=>r.jsxs(c,{children:[r.jsx(o,{...e,variant:"standard",badgeContent:4}),r.jsx(o,{...e,variant:"dot"}),r.jsx(o,{...e,variant:"liveDot",anchorOrigin:{vertical:"bottom",horizontal:"right"}})]})};var l,m,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    badgeContent: 4
  },
  render: props => <Badge {...props}>
      <MailIcon />
    </Badge>
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,v,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    badgeContent: 4,
    children: <MailIcon />
  },
  render: props => <Preview>
      <Badge {...props} color="primary" />
      <Badge {...props} color="secondary" />
      <Badge {...props} color="error" />
      <Badge {...props} color="success" />
      <Badge {...props} color="warning" />
      <Badge {...props} color="info" />
      <Badge {...props} color="default" />
    </Preview>
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,b,h;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <MailIcon />
  },
  render: props => <Preview>
      <Badge {...props} badgeContent={99} />
      <Badge {...props} badgeContent={100} />
      <Badge {...props} badgeContent={1000} max={999} />
    </Preview>
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var B,f,C;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <MailIcon />
  },
  render: props => <Preview>
      <Badge {...props} variant="dot" invisible={false} />
      <Badge {...props} variant="dot" invisible={true} />
      <Badge {...props} showZero={false} badgeContent={0} />
      <Badge {...props} showZero={true} badgeContent={0} />
    </Preview>
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var w,M,P;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: <MailIcon />
  },
  render: props => <Preview>
      <Badge {...props} variant="standard" badgeContent={4} />
      <Badge {...props} variant="dot" />
      <Badge {...props} variant="liveDot" anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }} />
    </Preview>
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const ir=["Base","Colors","Max","Visibility","Variants"];export{n as Base,t as Colors,s as Max,d as Variants,i as Visibility,ir as __namedExportsOrder,sr as default};
//# sourceMappingURL=Badge.stories-2d4c5b24.js.map
