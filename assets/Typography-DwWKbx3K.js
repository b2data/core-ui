import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{g as V,R as S}from"./index-DQLiH3RP.js";import{T as W}from"./Typography-B3F8RKoS.js";var A={exports:{}},N=A.exports,T;function P(){return T||(T=1,function(s,p){(function(n,i){s.exports=i()})(N,()=>{return n={705:a=>{a.exports=function(e,r){const t=[];return r.length===0?t.push({text:e,highlight:!1}):r[0][0]>0&&t.push({text:e.slice(0,r[0][0]),highlight:!1}),r.forEach((f,h)=>{const c=f[0],l=f[1];t.push({text:e.slice(c,l),highlight:!0}),h===r.length-1?l<e.length&&t.push({text:e.slice(l,e.length),highlight:!1}):l<r[h+1][0]&&t.push({text:e.slice(l,r[h+1][0]),highlight:!1})}),t}}},i={},function a(e){var r=i[e];if(r!==void 0)return r.exports;var t=i[e]={exports:{}};return n[e](t,t.exports,a),t.exports}(705);var n,i})}(A)),A.exports}var _=P();const X=V(_);var b={exports:{}},Y=b.exports,R;function $(){return R||(R=1,function(s,p){(function(n,i){s.exports=i()})(Y,()=>{return n={772:(a,e,r)=>{const t=r(826).remove,f=/[.*+?^${}()|[\]\\]/g,h=/[a-z0-9_]/i,c=/\s+/;a.exports=function(l,U,d){var E,w;w={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},E=(E=d)||{},Object.keys(E).forEach(o=>{w[o]=!!E[o]}),d=w;const O=Array.from(l).map(o=>t(o));let m=O.join("");return(U=t(U)).trim().split(c).filter(o=>o.length>0).reduce((o,g)=>{const x=g.length,C=!d.insideWords&&h.test(g[0])?"\\b":"",j=new RegExp(C+g.replace(f,"\\$&"),"i");let v,u;if(v=j.exec(m),d.requireMatchAll&&v===null)return m="",[];for(;v;){u=v.index;const M=x-O.slice(u,u+x).join("").length,q=u-O.slice(0,u).join("").length,I=[u+q,u+x+q+M];if(I[0]!==I[1]&&o.push(I),m=m.slice(0,u)+new Array(x+1).join(" ")+m.slice(u+x),!d.findAllOccurrences)break;v=j.exec(m)}return o},[]).sort((o,g)=>o[0]-g[0])}},826:a=>{var e={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},r=Object.keys(e).join("|"),t=new RegExp(r,"g"),f=new RegExp(r,""),h=function(c){return c.replace(t,function(l){return e[l]})};a.exports=h,a.exports.has=function(c){return!!c.match(f)},a.exports.remove=h}},i={},function a(e){var r=i[e];if(r!==void 0)return r.exports;var t=i[e]={exports:{}};return n[e](t,t.exports,a),t.exports}(772);var n,i})}(b)),b.exports}var B=$();const z=V(B),G=(s,p)=>{if(!p)return s;const n=z(s,p,{insideWords:!0}),i=X(s,n);return y.jsx(y.Fragment,{children:i.map((a,e)=>a.highlight?y.jsx("mark",{children:a.text},e):y.jsx("span",{children:a.text},e))})},k=S.forwardRef(({highlight:s,children:p,wrapLines:n,...i},a)=>y.jsx(W,{ref:a,...i,sx:{...i.sx,...n&&n>0?{display:"-webkit-box",WebkitLineClamp:`${n}`,WebkitBoxOrient:"vertical",whiteSpace:"normal"}:{}},children:typeof p=="string"?G(p,s):p}));try{k.displayName="Typography",k.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:{value:"body1"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"caption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"inherit"'},{value:'"subtitle1"'},{value:'"subtitle2"'},{value:'"body1"'},{value:'"body2"'},{value:'"overline"'}]}},align:{defaultValue:{value:"inherit"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"inherit"'},{value:'"left"'},{value:'"right"'},{value:'"justify"'}]}},wrapLines:{defaultValue:null,description:"Number of lines after that `...` is shown",name:"wrapLines",required:!1,type:{name:"number"}},highlight:{defaultValue:null,description:"If set, the text will be shown with `highlights` using `mark` tag if `children` is a sting.",name:"highlight",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},gutterBottom:{defaultValue:{value:"false"},description:"If `true`, the text will have a bottom margin.",name:"gutterBottom",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:{value:"false"},description:`If \`true\`, the text will not wrap, but instead will truncate with a text overflow ellipsis.

Note that text overflow can only happen with block or inline-block level elements
(the element needs to have a width in order to overflow).`,name:"noWrap",required:!1,type:{name:"boolean"}},paragraph:{defaultValue:{value:"false"},description:"If `true`, the element will be a paragraph element.\n@deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"paragraph",required:!1,type:{name:"boolean"}}}}}catch{}export{k as T,z as m,X as p};
