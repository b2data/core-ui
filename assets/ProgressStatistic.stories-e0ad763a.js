import{j as s}from"./jsx-runtime-4ca860c5.js";import{B as n}from"./Box-db9d02d2.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./createTheme-f7fbaf76.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./clsx-63d16a80.js";import"./extendSxProp-69c75e3e.js";const a=({data:o,...m})=>{const l=o.reduce((r,e)=>r+e.value,0);return s.jsx(n,{display:"flex",borderRadius:2,overflow:"hidden",height:8,...m,children:o.map(({color:r,value:e})=>s.jsx(n,{sx:{backgroundColor:r,width:`${e/l*100}%`}},r+e))})};try{a.displayName="ProgressStatistic",a.__docgenInfo={description:"",displayName:"ProgressStatistic",props:{data:{defaultValue:null,description:"Statistic data.\n`ProgressStatisticEntryType = { color: string; value: number }`",name:"data",required:!0,type:{name:"ProgressStatisticEntryType[]"}},sx:{defaultValue:null,description:"SX properties for component",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}const v={title:"Components/Progress/Progress Statistic",component:a,tags:["autodocs"]},t={args:{data:[{color:"primary.main",value:200},{color:"error.main",value:400},{color:"success.main",value:100}]}};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data: [{
      color: "primary.main",
      value: 200
    }, {
      color: "error.main",
      value: 400
    }, {
      color: "success.main",
      value: 100
    }]
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const P=["Base"];export{t as Base,P as __namedExportsOrder,v as default};
//# sourceMappingURL=ProgressStatistic.stories-e0ad763a.js.map
