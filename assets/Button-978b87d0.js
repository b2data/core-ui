import{j as l}from"./jsx-runtime-4ca860c5.js";import{r as x,R as B}from"./index-61bf1805.js";import{c as u,_ as C}from"./createTheme-bf72f819.js";import{_ as r}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaccc129.js";import{g as q}from"./generateUtilityClasses-d818091b.js";import{g as E,s as y,c as R}from"./styled-8f47f2e2.js";import{M as $}from"./Button-9e16b906.js";import{u as V}from"./useThemeProps-3a07dd36.js";import{u as _}from"./useId-65eea1c4.js";import{C as T}from"./CircularProgress-bc81b3ed.js";function z(o){return E("MuiLoadingButton",o)}const M=q("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),e=M,j=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],k=o=>{const{loading:n,loadingPosition:a,classes:t}=o,s={root:["root",n&&"loading"],startIcon:[n&&`startIconLoading${u(a)}`],endIcon:[n&&`endIconLoading${u(a)}`],loadingIndicator:["loadingIndicator",n&&`loadingIndicator${u(a)}`]},d=R(s,z,t);return r({},t,d)},W=o=>o!=="ownerState"&&o!=="theme"&&o!=="sx"&&o!=="as"&&o!=="classes",N=y($,{shouldForwardProp:o=>W(o)||o==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(o,n)=>[n.root,n.startIconLoadingStart&&{[`& .${e.startIconLoadingStart}`]:n.startIconLoadingStart},n.endIconLoadingEnd&&{[`& .${e.endIconLoadingEnd}`]:n.endIconLoadingEnd}]})(({ownerState:o,theme:n})=>r({[`& .${e.startIconLoadingStart}, & .${e.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0}},o.loadingPosition==="center"&&{transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),[`&.${e.loading}`]:{color:"transparent"}},o.loadingPosition==="start"&&o.fullWidth&&{[`& .${e.startIconLoadingStart}, & .${e.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginRight:-8}},o.loadingPosition==="end"&&o.fullWidth&&{[`& .${e.startIconLoadingStart}, & .${e.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginLeft:-8}})),U=y("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(o,n)=>{const{ownerState:a}=o;return[n.loadingIndicator,n[`loadingIndicator${u(a.loadingPosition)}`]]}})(({theme:o,ownerState:n})=>r({position:"absolute",visibility:"visible",display:"flex"},n.loadingPosition==="start"&&(n.variant==="outlined"||n.variant==="contained")&&{left:n.size==="small"?10:14},n.loadingPosition==="start"&&n.variant==="text"&&{left:6},n.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(o.vars||o).palette.action.disabled},n.loadingPosition==="end"&&(n.variant==="outlined"||n.variant==="contained")&&{right:n.size==="small"?10:14},n.loadingPosition==="end"&&n.variant==="text"&&{right:6},n.loadingPosition==="start"&&n.fullWidth&&{position:"relative",left:-10},n.loadingPosition==="end"&&n.fullWidth&&{position:"relative",right:-10})),w=x.forwardRef(function(n,a){const t=V({props:n,name:"MuiLoadingButton"}),{children:s,disabled:d=!1,id:L,loading:c=!1,loadingIndicator:g,loadingPosition:b="center",variant:f="text"}=t,P=C(t,j),p=_(L),m=g??l.jsx(T,{"aria-labelledby":p,color:"inherit",size:16}),i=r({},t,{disabled:d,loading:c,loadingIndicator:m,loadingPosition:b,variant:f}),h=k(i),v=c?l.jsx(U,{className:h.loadingIndicator,ownerState:i,children:m}):null;return l.jsxs(N,r({disabled:d||c,id:p,ref:a},P,{variant:f,classes:h,ownerState:i,children:[i.loadingPosition==="end"?s:v,i.loadingPosition==="end"?v:s]}))}),F=w,I=B.forwardRef((o,n)=>l.jsx(F,{ref:n,...o}));try{I.displayName="Button",I.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:{value:"primary"},description:"The color of the component.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"default"'}]}},size:{defaultValue:{value:"medium"},description:"The size of the component. `small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"contained"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"outlined"'},{value:'"contained"'}]}},loading:{defaultValue:{value:"false"},description:"If `true`, the loading indicator is shown.",name:"loading",required:!1,type:{name:"boolean"}},loadingPosition:{defaultValue:{value:"center"},description:"The loading indicator can be positioned on the start, end, or the center of the button.",name:"loadingPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},loadingIndicator:{defaultValue:{value:'<CircularProgress color="inherit" size={16} />'},description:'Element placed before the children if the button is in loading state.\nThe node should contain an element with `role="progressbar"` with an accessible name.\nBy default we render a `CircularProgress` that is labelled by the button itself.',name:"loadingIndicator",required:!1,type:{name:"ReactNode"}}}}}catch{}export{I as B};
//# sourceMappingURL=Button-978b87d0.js.map