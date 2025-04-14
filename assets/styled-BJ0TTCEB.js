import{d as D}from"./DefaultPropsProvider-CbX9bpU7.js";import{c as M,s as g,i as B,T as K}from"./identifier-DtIXL9n7.js";import{i as N,a as $,s as q}from"./index-PKGOc6w3.js";function ie(e,n,t=void 0){const r={};for(const i in e){const u=e[i];let s="",o=!0;for(let p=0;p<u.length;p+=1){const f=u[p];f&&(s+=(o===!0?"":" ")+n(f),o=!1,t&&t[f]&&(s+=" "+t[f]))}r[i]=s}return r}function G(e){const{variants:n,...t}=e,r={variants:n,style:N(t),isProcessed:!0};return r.style===t||n&&n.forEach(i=>{typeof i.style!="function"&&(i.style=N(i.style))}),r}const J=M();function F(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}function Q(e){return e?(n,t)=>t[e]:null}function U(e,n,t){e.theme=Y(e.theme)?t:e.theme[n]||e.theme}function x(e,n){const t=typeof n=="function"?n(e):n;if(Array.isArray(t))return t.flatMap(r=>x(e,r));if(Array.isArray(t==null?void 0:t.variants)){let r;if(t.isProcessed)r=t.style;else{const{variants:i,...u}=t;r=u}return V(e,t.variants,[r])}return t!=null&&t.isProcessed?t.style:t}function V(e,n,t=[]){var i;let r;e:for(let u=0;u<n.length;u+=1){const s=n[u];if(typeof s.props=="function"){if(r??(r={...e,...e.ownerState,ownerState:e.ownerState}),!s.props(r))continue}else for(const o in s.props)if(e[o]!==s.props[o]&&((i=e.ownerState)==null?void 0:i[o])!==s.props[o])continue e;typeof s.style=="function"?(r??(r={...e,...e.ownerState,ownerState:e.ownerState}),t.push(s.style(r))):t.push(s.style)}return t}function W(e={}){const{themeId:n,defaultTheme:t=J,rootShouldForwardProp:r=F,slotShouldForwardProp:i=F}=e;function u(o){U(o,n,t)}return(o,p={})=>{$(o,a=>a.filter(l=>l!==g));const{name:f,slot:h,skipVariantsResolver:b,skipSx:E,overridesResolver:O=Q(ee(h)),...j}=p,H=b!==void 0?b:h&&h!=="Root"&&h!=="root"||!1,I=E||!1;let P=F;h==="Root"||h==="root"?P=r:h?P=i:Z(o)&&(P=void 0);const A=q(o,{shouldForwardProp:P,label:X(),...j}),L=a=>{if(typeof a=="function"&&a.__emotion_real!==a)return function(S){return x(S,a)};if(B(a)){const l=G(a);return l.variants?function(d){return x(d,l)}:l.style}return a},R=(...a)=>{const l=[],S=a.map(L),d=[];if(l.push(u),f&&O&&d.push(function(m){var v,k;const c=(k=(v=m.theme.components)==null?void 0:v[f])==null?void 0:k.styleOverrides;if(!c)return null;const w={};for(const C in c)w[C]=x(m,c[C]);return O(m,w)}),f&&!H&&d.push(function(m){var w,v;const y=m.theme,c=(v=(w=y==null?void 0:y.components)==null?void 0:w[f])==null?void 0:v.variants;return c?V(m,c):null}),I||d.push(g),Array.isArray(S[0])){const T=S.shift(),m=new Array(l.length).fill(""),y=new Array(d.length).fill("");let c;c=[...m,...T,...y],c.raw=[...m,...T.raw,...y],l.unshift(c)}const z=[...l,...S,...d],_=A(...z);return o.muiName&&(_.muiName=o.muiName),_};return A.withConfig&&(R.withConfig=A.withConfig),R}}function X(e,n){return void 0}function Y(e){for(const n in e)return!1;return!0}function Z(e){return typeof e=="string"&&e.charCodeAt(0)>96}function ee(e){return e&&e.charAt(0).toLowerCase()+e.slice(1)}function te(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ne=e=>te(e)&&e!=="classes",ae=W({themeId:K,defaultTheme:D,rootShouldForwardProp:ne});export{W as a,te as b,ie as c,F as d,G as p,ne as r,ae as s};
