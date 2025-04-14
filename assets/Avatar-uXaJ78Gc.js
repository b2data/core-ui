import{A}from"./theme-DdiFNERY.js";import{s as c,c as k}from"./styled-BJ0TTCEB.js";import{r as v}from"./index-DQLiH3RP.js";import{g as C,c as M}from"./index-PKGOc6w3.js";import{m as R}from"./memoTheme-BuPib-dq.js";import{c as E}from"./createSvgIcon-BtpK0we9.js";import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{g as N}from"./generateUtilityClasses-KoSbOHxf.js";import{u as j}from"./useSlot-BXYsnuZK.js";import{u as z}from"./DefaultPropsProvider-CbX9bpU7.js";const U=E(m.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));function _(e){return C("MuiAvatar",e)}const te=N("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]),D=e=>{const{classes:t,variant:a,colorDefault:r}=e;return k({root:["root",a,r&&"colorDefault"],img:["img"],fallback:["fallback"]},_,t)},F=c("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})(R(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.grey[400],...e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})}}}]}))),L=c("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),H=c(U,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function O({crossOrigin:e,referrerPolicy:t,src:a,srcSet:r}){const[i,o]=v.useState(!1);return v.useEffect(()=>{if(!a&&!r)return;o(!1);let n=!0;const s=new Image;return s.onload=()=>{n&&o("loaded")},s.onerror=()=>{n&&o("error")},s.crossOrigin=e,s.referrerPolicy=t,s.src=a,r&&(s.srcset=r),()=>{n=!1}},[e,t,a,r]),i}const B=v.forwardRef(function(t,a){const r=z({props:t,name:"MuiAvatar"}),{alt:i,children:o,className:n,component:s="div",slots:T={},slotProps:d={},imgProps:h,sizes:P,src:p,srcSet:f,variant:x="circular",...q}=r;let u=null;const l={...r,component:s,variant:x},I=O({...h,...typeof d.img=="function"?d.img(l):d.img,src:p,srcSet:f}),y=p||f,b=y&&I!=="error";l.colorDefault=!b,delete l.ownerState;const g=D(l),[w,V]=j("img",{className:g.img,elementType:L,externalForwardedProps:{slots:T,slotProps:{img:{...h,...d.img}}},additionalProps:{alt:i,src:p,srcSet:f,sizes:P},ownerState:l});return b?u=m.jsx(w,{...V}):o||o===0?u=o:y&&i?u=i[0]:u=m.jsx(H,{ownerState:l,className:g.fallback}),m.jsx(F,{as:s,className:M(g.root,n),ref:a,...q,ownerState:l,children:u})}),S=c(B)(({size:e="medium"})=>({width:A[e],height:A[e],fontSize:e==="small"?18:24}));try{S.displayName="Avatar",S.__docgenInfo={description:"",displayName:"Avatar",props:{alt:{defaultValue:null,description:"Used in combination with `src` or `srcSet` to\nprovide an alt attribute for the rendered `img` element.\nUsed in combination with `src` to provide an alt attribute for the rendered img element.",name:"alt",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Used to render icon or text elements inside the Avatar if `src` is not set.\nThis can be an element, or just a string.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<AvatarClasses> & Partial<ClassNameMap<never>>)"}},imgProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.\nIt can be used to listen for the loading error event.\n@deprecated Use `slotProps.img` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"imgProps",required:!1,type:{name:"(ImgHTMLAttributes<HTMLImageElement> & { sx?: SxProps<Theme>; })"}},sizes:{defaultValue:null,description:"The `sizes` attribute for the `img` element.",name:"sizes",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"The `src` attribute for the `img` element.",name:"src",required:!1,type:{name:"string"}},srcSet:{defaultValue:null,description:"The `srcSet` attribute for the `img` element.\nUse this attribute for responsive image display.",name:"srcSet",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:`'circular'
circular`},description:"The shape of the avatar.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"circular"'},{value:'"rounded"'}]}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<AvatarSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ img?: SlotProps<ElementType<ImgHTMLAttributes<HTMLImageElement>, keyof IntrinsicElements>, {}, AvatarOwnProps>; }"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},size:{defaultValue:{value:"medium"},description:"The size of the avatar.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}export{S as A,B as a,te as b};
