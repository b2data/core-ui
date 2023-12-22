import{a as x,_ as y}from"./createTheme-f7fbaf76.js";import{_ as n}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import{r as R}from"./index-61bf1805.js";import{c as _}from"./clsx-63d16a80.js";import{g as S,s as $,c as U}from"./styled-3543814b.js";import{u as M}from"./useThemeProps-8e2a0e37.js";import{g as j}from"./generateUtilityClasses-802c53db.js";import{j as A}from"./jsx-runtime-4ca860c5.js";import{k as b,c as u}from"./emotion-react.browser.esm-13bdab44.js";function X(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function N(t){return parseFloat(t)}function B(t){return S("MuiSkeleton",t)}j("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const E=["animation","className","component","height","style","variant","width"];let s=t=>t,p,m,f,g;const F=t=>{const{classes:a,variant:e,animation:o,hasChildren:i,width:l,height:r}=t;return U({root:["root",e,o,i&&"withChildren",i&&!l&&"fitContent",i&&!r&&"heightAuto"]},B,a)},K=b(p||(p=s`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),P=b(m||(m=s`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),T=$("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=X(t.shape.borderRadius)||"px",o=N(t.shape.borderRadius);return n({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:x(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${e}/${Math.round(o/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&u(f||(f=s`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),K),({ownerState:t,theme:a})=>t.animation==="wave"&&u(g||(g=s`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),P,(a.vars||a).palette.action.hover)),W=R.forwardRef(function(a,e){const o=M({props:a,name:"MuiSkeleton"}),{animation:i="pulse",className:l,component:r="span",height:h,style:v,variant:k="text",width:C}=o,d=y(o,E),c=n({},o,{animation:i,component:r,variant:k,hasChildren:!!d.children}),w=F(c);return A.jsx(T,n({as:r,ref:e,className:_(w.root,l),ownerState:c},d,{style:n({width:C,height:h},v)}))}),J=W;export{J as S};
//# sourceMappingURL=Skeleton-4538896d.js.map
