import{j as C}from"./jsx-runtime-D_zvdyIk.js";import{c as F,s as M}from"./styled-BJ0TTCEB.js";import{r as m}from"./index-DQLiH3RP.js";import{c as O,g as G}from"./index-PKGOc6w3.js";import{s as N}from"./styled-C6AlwzIl.js";import{e as U}from"./extendSxProp-CeBvtLOD.js";import{u as $}from"./useThemeProps-wdcenrqF.js";import{k as v,r as u,m as A,n as _,o as I,c as L,p as h}from"./identifier-DtIXL9n7.js";import{u as q}from"./DefaultPropsProvider-CbX9bpU7.js";import"./useTheme-CIxVfZhu.js";const z=L(),H=N("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function J(e){return $({props:e,name:"MuiStack",defaultTheme:z})}function K(e,o){const n=m.Children.toArray(e).filter(Boolean);return n.reduce((a,c,r)=>(a.push(c),r<n.length-1&&a.push(m.cloneElement(o,{key:`separator-${r}`})),a),[])}const Q=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],W=({ownerState:e,theme:o})=>{let n={display:"flex",flexDirection:"column",...v({theme:o},u({values:e.direction,breakpoints:o.breakpoints.values}),a=>({flexDirection:a}))};if(e.spacing){const a=A(o),c=Object.keys(o.breakpoints.values).reduce((s,t)=>((typeof e.spacing=="object"&&e.spacing[t]!=null||typeof e.direction=="object"&&e.direction[t]!=null)&&(s[t]=!0),s),{}),r=u({values:e.direction,base:c}),d=u({values:e.spacing,base:c});typeof r=="object"&&Object.keys(r).forEach((s,t,l)=>{if(!r[s]){const p=t>0?r[l[t-1]]:"column";r[s]=p}}),n=_(n,v({theme:o},d,(s,t)=>e.useFlexGap?{gap:h(a,s)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Q(t?r[t]:e.direction)}`]:h(a,s)}}))}return n=I(o.breakpoints,n),n};function X(e={}){const{createStyledComponent:o=H,useThemeProps:n=J,componentName:a="MuiStack"}=e,c=()=>F({root:["root"]},s=>G(a,s),{}),r=o(W);return m.forwardRef(function(s,t){const l=n(s),y=U(l),{component:p="div",direction:R="column",spacing:V=0,divider:g,children:k,className:B,useFlexGap:T=!1,...b}=y,D={direction:R,spacing:V,useFlexGap:T},E=c();return C.jsx(r,{as:p,ownerState:D,ref:t,className:O(E.root,B),...b,children:g?K(k,g):k})})}const P=X({createStyledComponent:M("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>q({props:e,name:"MuiStack"})}),ce={title:"Components/Stack",component:P,tags:["autodocs"]},i={render:e=>C.jsx(P,{...e})};var x,S,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <Stack {...props} />
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const ie=["Base"];export{i as Base,ie as __namedExportsOrder,ce as default};
