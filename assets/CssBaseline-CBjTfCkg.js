import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-DQLiH3RP.js";import{g as y}from"./index-B4ybzDYI.js";import{u as g}from"./DefaultPropsProvider-CbX9bpU7.js";const d=typeof y({})=="function",C=(e,o)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...o&&!e.vars&&{colorScheme:e.palette.mode}}),x=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),b=(e,o=!1)=>{var t,l;const s={};o&&e.colorSchemes&&typeof e.getColorSchemeSelector=="function"&&Object.entries(e.colorSchemes).forEach(([c,m])=>{var u,f;const p=e.getColorSchemeSelector(c);p.startsWith("@")?s[p]={":root":{colorScheme:(u=m.palette)==null?void 0:u.mode}}:s[p.replace(/\s*&/,"")]={colorScheme:(f=m.palette)==null?void 0:f.mode}});let r={html:C(e,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...x(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...s};const a=(l=(t=e.components)==null?void 0:t.MuiCssBaseline)==null?void 0:l.styleOverrides;return a&&(r=[r,a]),r},i="mui-ecs",v=e=>{const o=b(e,!1),s=Array.isArray(o)?o[0]:o;return!e.vars&&s&&(s.html[`:root:has(${i})`]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([r,a])=>{var l,c;const t=e.getColorSchemeSelector(r);t.startsWith("@")?s[t]={[`:root:not(:has(.${i}))`]:{colorScheme:(l=a.palette)==null?void 0:l.mode}}:s[t.replace(/\s*&/,"")]={[`&:not(:has(.${i}))`]:{colorScheme:(c=a.palette)==null?void 0:c.mode}}}),o},k=y(d?({theme:e,enableColorScheme:o})=>b(e,o):({theme:e})=>v(e));function j(e){const o=g({props:e,name:"MuiCssBaseline"}),{children:s,enableColorScheme:r=!1}=o;return n.jsxs(h.Fragment,{children:[d&&n.jsx(k,{enableColorScheme:r}),!d&&!r&&n.jsx("span",{className:i,style:{display:"none"}}),s]})}const S=e=>n.jsx(j,{...e});try{S.displayName="CssBaseline",S.__docgenInfo={description:"",displayName:"CssBaseline",props:{children:{defaultValue:null,description:"You can wrap a node.",name:"children",required:!1,type:{name:"ReactNode"}},enableColorScheme:{defaultValue:{value:"false"},description:"Enable `color-scheme` CSS property to use `theme.palette.mode`.\nFor more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme\nFor browser support, check out https://caniuse.com/?search=color-scheme",name:"enableColorScheme",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ClassNameMap<never>>"}}}}}catch{}export{S as C};
