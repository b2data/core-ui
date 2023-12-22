import{j as a}from"./jsx-runtime-4ca860c5.js";import{P as m}from"./Preview-607a0968.js";import{b as la,M as pa,A as r,a as t}from"./Avatar-2c497c53.js";import{A as z}from"./theme-a9c8f6a3.js";import{_ as va}from"./createTheme-f7fbaf76.js";import{_ as p}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import{r as A}from"./index-61bf1805.js";import"./react-is.production.min-a192e302.js";import{c as C}from"./clsx-63d16a80.js";import{g as ua,s as V,c as ma}from"./styled-3543814b.js";import{u as da}from"./useThemeProps-8e2a0e37.js";import{g as Aa}from"./generateUtilityClasses-802c53db.js";import"./createSvgIcon-77a259fa.js";import"./_commonjsHelpers-de833af9.js";function xa(e){return ua("MuiAvatarGroup",e)}const fa=Aa("MuiAvatarGroup",["root","avatar"]),ha=fa,ja=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],E={small:-16,medium:null},ga=e=>{const{classes:i}=e;return ma({root:["root"],avatar:["avatar"]},xa,i)},Ga=V("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(e,i)=>p({[`& .${ha.avatar}`]:i.avatar},i.root)})(({theme:e})=>({[`& .${la.root}`]:{border:`2px solid ${(e.vars||e).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"})),Pa=V(pa,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(e,i)=>i.avatar})(({theme:e})=>({border:`2px solid ${(e.vars||e).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}})),ya=A.forwardRef(function(i,q){var _;const P=da({props:i,name:"MuiAvatarGroup"}),{children:ea,className:sa,component:L="div",componentsProps:ta={},max:y=5,slotProps:na={},spacing:v="medium",total:oa,variant:w="circular"}=P,ia=va(P,ja);let c=y<2?2:y;const S=p({},P,{max:y,spacing:v,component:L,variant:w}),b=ga(S),T=A.Children.toArray(ea).filter(l=>A.isValidElement(l)),d=oa||T.length;d===c&&(c+=1),c=Math.min(d+1,c);const M=Math.min(T.length,c-1),N=Math.max(d-c,d-M,0),R=v&&E[v]!==void 0?E[v]:-v,u=(_=na.additionalAvatar)!=null?_:ta.additionalAvatar;return a.jsxs(Ga,p({as:L,ownerState:S,className:C(b.root,sa),ref:q},ia,{children:[N?a.jsxs(Pa,p({ownerState:S,variant:w},u,{className:C(b.avatar,u==null?void 0:u.className),style:p({marginLeft:R},u==null?void 0:u.style),children:["+",N]})):null,T.slice(0,M).reverse().map((l,ca)=>A.cloneElement(l,{className:C(l.props.className,b.avatar),style:p({marginLeft:ca===M-1?void 0:R},l.props.style),variant:l.props.variant||w}))]}))}),wa=ya,n=""+new URL("2-3e3bd4af.jpg",import.meta.url).href,o=""+new URL("3-e9bce31f.jpg",import.meta.url).href,s=V(wa)(({size:e="medium"})=>({"& .MuiAvatar-root":{width:z[e],height:z[e],fontSize:e==="small"?"1rem":"1.4rem"}}));try{s.displayName="AvatarGroup",s.__docgenInfo={description:"",displayName:"AvatarGroup",props:{children:{defaultValue:null,description:"The avatars to stack.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AvatarGroupClasses>"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<any>"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n\nThis prop is an alias for the `slotProps` prop.\nIt's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.",name:"componentsProps",required:!1,type:{name:"{ additionalAvatar?: ({ alt?: string; children?: ReactNode; classes?: Partial<AvatarClasses>; imgProps?: (ImgHTMLAttributes<HTMLImageElement> & { ...; }) | undefined; ... 4 more ...; variant?: OverridableStringUnion<...> | undefined; } & CommonProps & Omit<...> & AvatarGroupComponentsPropsOve..."}},max:{defaultValue:{value:"5"},description:"Max avatars to show before +x.",name:"max",required:!1,type:{name:"number"}},slotProps:{defaultValue:{value:"{}"},description:`The extra props for the slot components.
You can override the existing props or add new ones.

This prop is an alias for the \`componentsProps\` prop, which will be deprecated in the future.`,name:"slotProps",required:!1,type:{name:"{ additionalAvatar?: ({ alt?: string; children?: ReactNode; classes?: Partial<AvatarClasses>; imgProps?: (ImgHTMLAttributes<HTMLImageElement> & { ...; }) | undefined; ... 4 more ...; variant?: OverridableStringUnion<...> | undefined; } & CommonProps & Omit<...> & AvatarGroupComponentsPropsOve..."}},spacing:{defaultValue:{value:`'medium'
medium`},description:"Spacing between avatars.",name:"spacing",required:!1,type:{name:'number | "small" | "medium"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},total:{defaultValue:{value:"children.length"},description:"The total number of avatars. Used for calculating the number of extra avatars.",name:"total",required:!1,type:{name:"number"}},variant:{defaultValue:{value:`'circular'
circular`},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"rounded"'},{value:'"circular"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},size:{defaultValue:{value:"medium"},description:"The size of the avatar.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}const Ia={title:"Components/Avatar/Avatar Group",component:s,tags:["autodocs"]},x={render:e=>a.jsxs(s,{...e,children:[a.jsx(r,{src:t}),a.jsx(r,{src:n}),a.jsx(r,{src:o})]})},f={render:e=>a.jsxs(m,{children:[a.jsxs(s,{...e,size:"small",max:2,children:[a.jsx(r,{src:t}),a.jsx(r,{src:n}),a.jsx(r,{src:o})]}),a.jsxs(s,{...e,size:"medium",max:2,children:[a.jsx(r,{src:t}),a.jsx(r,{src:n}),a.jsx(r,{src:o})]}),a.jsxs(s,{...e,size:"large",max:2,children:[a.jsx(r,{src:t}),a.jsx(r,{src:n}),a.jsx(r,{src:o})]})]})},h={render:e=>a.jsxs(m,{children:[a.jsxs(s,{...e,max:2,children:[a.jsx(r,{src:t}),a.jsx(r,{src:n}),a.jsx(r,{src:o})]}),a.jsxs(s,{...e,max:10,children:[a.jsx(r,{src:t}),a.jsx(r,{src:n}),a.jsx(r,{src:o})]})]})},j={render:e=>a.jsxs(m,{children:[a.jsxs(s,{...e,total:2,children:[a.jsx(r,{src:t}),a.jsx(r,{src:n}),a.jsx(r,{src:o})]}),a.jsxs(s,{...e,total:10,children:[a.jsx(r,{src:t}),a.jsx(r,{src:n}),a.jsx(r,{src:o})]})]})},g={render:e=>a.jsxs(m,{children:[a.jsxs(s,{...e,spacing:"small",children:[a.jsx(r,{src:t}),a.jsx(r,{src:n}),a.jsx(r,{src:o})]}),a.jsxs(s,{...e,spacing:"medium",children:[a.jsx(r,{src:t}),a.jsx(r,{src:n}),a.jsx(r,{src:o})]})]})},G={render:e=>a.jsxs(m,{children:[a.jsxs(s,{...e,variant:"circular",children:[a.jsx(r,{src:t}),a.jsx(r,{src:n}),a.jsx(r,{src:o})]}),a.jsxs(s,{...e,variant:"rounded",children:[a.jsx(r,{src:t}),a.jsx(r,{src:n}),a.jsx(r,{src:o})]}),a.jsxs(s,{...e,variant:"square",children:[a.jsx(r,{src:t}),a.jsx(r,{src:n}),a.jsx(r,{src:o})]})]})};var U,I,O;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: props => <AvatarGroup {...props}>
      <Avatar src={Avatar1} />
      <Avatar src={Avatar2} />
      <Avatar src={Avatar3} />
    </AvatarGroup>
}`,...(O=(I=x.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var $,H,k;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: props => <Preview>
      <AvatarGroup {...props} size="small" max={2}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} size="medium" max={2}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} size="large" max={2}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
    </Preview>
}`,...(k=(H=f.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var B,Y,D;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <Preview>
      <AvatarGroup {...props} max={2}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} max={10}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
    </Preview>
}`,...(D=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:D.source}}};var W,Z,F;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <Preview>
      <AvatarGroup {...props} total={2}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} total={10}>
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
    </Preview>
}`,...(F=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:F.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: props => <Preview>
      <AvatarGroup {...props} spacing="small">
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} spacing="medium">
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
    </Preview>
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,aa,ra;G.parameters={...G.parameters,docs:{...(X=G.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: props => <Preview>
      <AvatarGroup {...props} variant="circular">
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} variant="rounded">
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
      <AvatarGroup {...props} variant="square">
        <Avatar src={Avatar1} />
        <Avatar src={Avatar2} />
        <Avatar src={Avatar3} />
      </AvatarGroup>
    </Preview>
}`,...(ra=(aa=G.parameters)==null?void 0:aa.docs)==null?void 0:ra.source}}};const Oa=["Base","Sizes","Max","Total","Spacing","Variants"];export{x as Base,h as Max,f as Sizes,g as Spacing,j as Total,G as Variants,Oa as __namedExportsOrder,Ia as default};
//# sourceMappingURL=AvatarGroup.stories-1a48e20d.js.map
