import{j as m}from"./identifier-DtIXL9n7.js";import{r as u}from"./index-DQLiH3RP.js";import{j as l}from"./jsx-runtime-D_zvdyIk.js";function i(e,r){const o={...r};for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)){const t=s;if(t==="components"||t==="slots")o[t]={...e[t],...o[t]};else if(t==="componentsProps"||t==="slotProps"){const n=e[t],c=r[t];if(!c)o[t]=n||{};else if(!n)o[t]=c;else{o[t]={...c};for(const f in n)if(Object.prototype.hasOwnProperty.call(n,f)){const p=f;o[t][p]=i(n[p],c[p])}}}else o[t]===void 0&&(o[t]=e[t])}return o}const a=u.createContext(void 0);function j({value:e,children:r}){return l.jsx(a.Provider,{value:e,children:r})}function P(e){const{theme:r,name:o,props:s}=e;if(!r||!r.components||!r.components[o])return s;const t=r.components[o];return t.defaultProps?i(t.defaultProps,s):!t.styleOverrides&&!t.variants?i(t,s):s}function x({props:e,name:r}){const o=u.useContext(a);return P({props:e,name:r,theme:{components:o}})}const v=m();function O(e){return x(e)}export{j as D,v as d,i as r,O as u};
