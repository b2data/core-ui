import{j as h}from"./jsx-runtime-4ca860c5.js";import{r as v,R as U}from"./index-61bf1805.js";import{m as W,u as j}from"./MarkdownContent-2e2792db.js";import{F as K}from"./FormHelperText-4506dc41.js";import{B as g}from"./Box-fefa9705.js";function X(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}return e}function N(e,t){return Array(t+1).join(e)}function z(e){return e.replace(/^\n*/,"")}function G(e){for(var t=e.length;t>0&&e[t-1]===`
`;)t--;return e.substring(0,t)}var Y=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function A(e){return C(e,Y)}var L=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function B(e){return C(e,L)}function Q(e){return H(e,L)}var O=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function J(e){return C(e,O)}function Z(e){return H(e,O)}function C(e,t){return t.indexOf(e.nodeName)>=0}function H(e,t){return e.getElementsByTagName&&t.some(function(r){return e.getElementsByTagName(r).length})}var u={};u.paragraph={filter:"p",replacement:function(e){return`

`+e+`

`}};u.lineBreak={filter:"br",replacement:function(e,t,r){return r.br+`
`}};u.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,t,r){var n=Number(t.nodeName.charAt(1));if(r.headingStyle==="setext"&&n<3){var i=N(n===1?"=":"-",e.length);return`

`+e+`
`+i+`

`}else return`

`+N("#",n)+" "+e+`

`}};u.blockquote={filter:"blockquote",replacement:function(e){return e=e.replace(/^\n+|\n+$/g,""),e=e.replace(/^/gm,"> "),`

`+e+`

`}};u.list={filter:["ul","ol"],replacement:function(e,t){var r=t.parentNode;return r.nodeName==="LI"&&r.lastElementChild===t?`
`+e:`

`+e+`

`}};u.listItem={filter:"li",replacement:function(e,t,r){e=e.replace(/^\n+/,"").replace(/\n+$/,`
`).replace(/\n/gm,`
    `);var n=r.bulletListMarker+"   ",i=t.parentNode;if(i.nodeName==="OL"){var a=i.getAttribute("start"),l=Array.prototype.indexOf.call(i.children,t);n=(a?Number(a)+l:l+1)+".  "}return n+e+(t.nextSibling&&!/\n$/.test(e)?`
`:"")}};u.indentedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="indented"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,r){return`

    `+t.firstChild.textContent.replace(/\n/g,`
    `)+`

`}};u.fencedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="fenced"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,r){for(var n=t.firstChild.getAttribute("class")||"",i=(n.match(/language-(\S+)/)||[null,""])[1],a=t.firstChild.textContent,l=r.fence.charAt(0),s=3,o=new RegExp("^"+l+"{3,}","gm"),c;c=o.exec(a);)c[0].length>=s&&(s=c[0].length+1);var p=N(l,s);return`

`+p+i+`
`+a.replace(/\n$/,"")+`
`+p+`

`}};u.horizontalRule={filter:"hr",replacement:function(e,t,r){return`

`+r.hr+`

`}};u.inlineLink={filter:function(e,t){return t.linkStyle==="inlined"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t){var r=t.getAttribute("href");r&&(r=r.replace(/([()])/g,"\\$1"));var n=b(t.getAttribute("title"));return n&&(n=' "'+n.replace(/"/g,'\\"')+'"'),"["+e+"]("+r+n+")"}};u.referenceLink={filter:function(e,t){return t.linkStyle==="referenced"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t,r){var n=t.getAttribute("href"),i=b(t.getAttribute("title"));i&&(i=' "'+i+'"');var a,l;switch(r.linkReferenceStyle){case"collapsed":a="["+e+"][]",l="["+e+"]: "+n+i;break;case"shortcut":a="["+e+"]",l="["+e+"]: "+n+i;break;default:var s=this.references.length+1;a="["+e+"]["+s+"]",l="["+s+"]: "+n+i}return this.references.push(l),a},references:[],append:function(e){var t="";return this.references.length&&(t=`

`+this.references.join(`
`)+`

`,this.references=[]),t}};u.emphasis={filter:["em","i"],replacement:function(e,t,r){return e.trim()?r.emDelimiter+e+r.emDelimiter:""}};u.strong={filter:["strong","b"],replacement:function(e,t,r){return e.trim()?r.strongDelimiter+e+r.strongDelimiter:""}};u.code={filter:function(e){var t=e.previousSibling||e.nextSibling,r=e.parentNode.nodeName==="PRE"&&!t;return e.nodeName==="CODE"&&!r},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var t=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",r="`",n=e.match(/`+/gm)||[];n.indexOf(r)!==-1;)r=r+"`";return r+t+e+t+r}};u.image={filter:"img",replacement:function(e,t){var r=b(t.getAttribute("alt")),n=t.getAttribute("src")||"",i=b(t.getAttribute("title")),a=i?' "'+i+'"':"";return n?"!["+r+"]("+n+a+")":""}};function b(e){return e?e.replace(/(\n+\s*)+/g,`
`):""}function P(e){this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[];for(var t in e.rules)this.array.push(e.rules[t])}P.prototype={add:function(e,t){this.array.unshift(t)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){if(e.isBlank)return this.blankRule;var t;return(t=E(this.array,e,this.options))||(t=E(this._keep,e,this.options))||(t=E(this._remove,e,this.options))?t:this.defaultRule},forEach:function(e){for(var t=0;t<this.array.length;t++)e(this.array[t],t)}};function E(e,t,r){for(var n=0;n<e.length;n++){var i=e[n];if(ee(i,t,r))return i}}function ee(e,t,r){var n=e.filter;if(typeof n=="string"){if(n===t.nodeName.toLowerCase())return!0}else if(Array.isArray(n)){if(n.indexOf(t.nodeName.toLowerCase())>-1)return!0}else if(typeof n=="function"){if(n.call(e,t,r))return!0}else throw new TypeError("`filter` needs to be a string, array, or function")}function te(e){var t=e.element,r=e.isBlock,n=e.isVoid,i=e.isPre||function(m){return m.nodeName==="PRE"};if(!(!t.firstChild||i(t))){for(var a=null,l=!1,s=null,o=S(s,t,i);o!==t;){if(o.nodeType===3||o.nodeType===4){var c=o.data.replace(/[ \r\n\t]+/g," ");if((!a||/ $/.test(a.data))&&!l&&c[0]===" "&&(c=c.substr(1)),!c){o=k(o);continue}o.data=c,a=o}else if(o.nodeType===1)r(o)||o.nodeName==="BR"?(a&&(a.data=a.data.replace(/ $/,"")),a=null,l=!1):n(o)||i(o)?(a=null,l=!0):a&&(l=!1);else{o=k(o);continue}var p=S(s,o,i);s=o,o=p}a&&(a.data=a.data.replace(/ $/,""),a.data||k(a))}}function k(e){var t=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),t}function S(e,t,r){return e&&e.parentNode===t||r(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}var R=typeof window<"u"?window:{};function re(){var e=R.DOMParser,t=!1;try{new e().parseFromString("","text/html")&&(t=!0)}catch{}return t}function ne(){var e=function(){};return ie()?e.prototype.parseFromString=function(t){var r=new window.ActiveXObject("htmlfile");return r.designMode="on",r.open(),r.write(t),r.close(),r}:e.prototype.parseFromString=function(t){var r=document.implementation.createHTMLDocument("");return r.open(),r.write(t),r.close(),r},e}function ie(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch{R.ActiveXObject&&(e=!0)}return e}var ae=re()?R.DOMParser:ne();function le(e,t){var r;if(typeof e=="string"){var n=oe().parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html");r=n.getElementById("turndown-root")}else r=e.cloneNode(!0);return te({element:r,isBlock:A,isVoid:B,isPre:t.preformattedCode?se:null}),r}var x;function oe(){return x=x||new ae,x}function se(e){return e.nodeName==="PRE"||e.nodeName==="CODE"}function ue(e,t){return e.isBlock=A(e),e.isCode=e.nodeName==="CODE"||e.parentNode.isCode,e.isBlank=fe(e),e.flankingWhitespace=ce(e,t),e}function fe(e){return!B(e)&&!J(e)&&/^\s*$/i.test(e.textContent)&&!Q(e)&&!Z(e)}function ce(e,t){if(e.isBlock||t.preformattedCode&&e.isCode)return{leading:"",trailing:""};var r=de(e.textContent);return r.leadingAscii&&D("left",e,t)&&(r.leading=r.leadingNonAscii),r.trailingAscii&&D("right",e,t)&&(r.trailing=r.trailingNonAscii),{leading:r.leading,trailing:r.trailing}}function de(e){var t=e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);return{leading:t[1],leadingAscii:t[2],leadingNonAscii:t[3],trailing:t[4],trailingNonAscii:t[5],trailingAscii:t[6]}}function D(e,t,r){var n,i,a;return e==="left"?(n=t.previousSibling,i=/ $/):(n=t.nextSibling,i=/^ /),n&&(n.nodeType===3?a=i.test(n.nodeValue):r.preformattedCode&&n.nodeName==="CODE"?a=!1:n.nodeType===1&&!A(n)&&(a=i.test(n.textContent))),a}var pe=Array.prototype.reduce,me=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function T(e){if(!(this instanceof T))return new T(e);var t={rules:u,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(r,n){return n.isBlock?`

`:""},keepReplacement:function(r,n){return n.isBlock?`

`+n.outerHTML+`

`:n.outerHTML},defaultReplacement:function(r,n){return n.isBlock?`

`+r+`

`:r}};this.options=X({},t,e),this.rules=new P(this.options)}T.prototype={turndown:function(e){if(!ve(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(e==="")return"";var t=I.call(this,new le(e,this.options));return he.call(this,t)},use:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.use(e[t]);else if(typeof e=="function")e(this);else throw new TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(e,t){return this.rules.add(e,t),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return me.reduce(function(t,r){return t.replace(r[0],r[1])},e)}};function I(e){var t=this;return pe.call(e.childNodes,function(r,n){n=new ue(n,t.options);var i="";return n.nodeType===3?i=n.isCode?n.nodeValue:t.escape(n.nodeValue):n.nodeType===1&&(i=ge.call(t,n)),F(r,i)},"")}function he(e){var t=this;return this.rules.forEach(function(r){typeof r.append=="function"&&(e=F(e,r.append(t.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function ge(e){var t=this.rules.forNode(e),r=I.call(this,e),n=e.flankingWhitespace;return(n.leading||n.trailing)&&(r=r.trim()),n.leading+t.replacement(r,e,this.options)+n.trailing}function F(e,t){var r=G(e),n=z(t),i=Math.max(e.length-r.length,t.length-n.length),a=`

`.substring(0,i);return r+a+n}function ve(e){return e!=null&&(typeof e=="string"||e.nodeType&&(e.nodeType===1||e.nodeType===9||e.nodeType===11))}const V=new T({headingStyle:"atx",hr:"* * *",br:`
`,bulletListMarker:"-",codeBlockStyle:"indented",emDelimiter:"_",fence:"```",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full"}),ye=e=>{e.preventDefault();const t=e.clipboardData.getData("text/plain"),r=window.getSelection();r!=null&&r.rangeCount&&(r.deleteFromDocument(),r.getRangeAt(0).insertNode(document.createTextNode(t)),r.collapseToEnd())},be=e=>{e.preventDefault();const t=V.turndown(e.clipboardData.getData("text/html")),r=window.getSelection();r!=null&&r.rangeCount&&(r.deleteFromDocument(),r.getRangeAt(0).insertNode(document.createTextNode(t)),r.collapseToEnd())},Te=({readOnly:e,disabled:t,placeholder:r,plain:n,value:i,onBlur:a,onFocus:l,onPaste:s})=>{const o=v.useRef(),[c,p]=v.useState(!1),[m,w]=v.useState(0);return{state:m,ref:o,isFocused:c,contentEditable:!t&&!e,"data-placeholder":r,onFocus:f=>{t||(p(!1),!e&&(f.target.innerHTML=i||V.turndown(f.target.innerHTML),p(!0),l==null||l(f)))},onBlur:f=>{t||(p(!1),!e&&(f.target.innerHTML==="<br>"?f.target.innerHTML="":f.target.innerHTML=f.target.innerHTML.replace(/<br>/,`
`),w(y=>y+1),a==null||a(f)))},onPaste:f=>{t||(n?ye(f):be(f),s==null||s(f))}}},M=U.forwardRef(({label:e,readOnly:t,disabled:r,error:n,placeholder:i,required:a,value:l,margin:s="none",minRows:o=1,helperText:c,sx:p,...m},w)=>{const{state:f,isFocused:y,ref:q,..._}=Te({value:l,readOnly:t,disabled:r,placeholder:i,...m}),$=v.useMemo(()=>l&&W.parse((l==null?void 0:l.toString())||""),[l]);return h.jsxs(g,{ref:w,sx:{display:"inline-flex",flexDirection:"column",position:"relative",width:1,padding:0,margin:s==="normal"?"8px 0 16px":0,border:0,verticalAlign:"top"},children:[h.jsxs(g,{component:"label",sx:d=>({...d.typography.body1,color:"#6B778C",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",position:"absolute",left:0,top:0,mt:-2,transform:"translate(0, 17px) scale(1)",transition:"color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",...y||l||i?{transform:"translate(0, -1.5px) scale(0.75)"}:{},...y?{color:d.palette.primary.main}:{},...r?{color:d.palette.text.disabled}:{},...n?{color:d.palette.error.main}:{}}),children:[e,a&&h.jsx(g,{component:"span",color:"error.main",children:" *"})]}),h.jsx(g,{sx:d=>({...d.typography.body1,position:"relative",minHeight:36+(o-1)*20,width:1,"&:before":{left:0,right:0,bottom:0,content:'"\\00a0"',position:"absolute",borderBottom:`1px solid ${n?d.palette.error.main:d.palette.divider}`,pointerEvents:"none",...r?{borderBottomStyle:"dotted"}:{"&:hover:before":{borderWidth:2}}},"&:after":{borderBottom:`2px solid ${n?d.palette.error.main:d.palette.primary.main}`,left:0,right:0,bottom:0,content:'"\\00a0"',position:"absolute",transform:"scaleX(0)",transition:"transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",pointerEvents:"none",...r?{display:"none"}:{}},"&:focus-within:after":{transform:"scaleX(1) translateX(0)"},...j(d)}),children:v.createElement(g,{component:"span",ref:q,..._,key:f,sx:d=>({width:"100%",wordBreak:"break-all",display:"block",outline:"none",lineHeight:1.1,minHeight:36,padding:"8px 0",whiteSpace:"pre-line","&:empty:before":{content:"attr(data-placeholder)",color:d.palette.text.disabled},...p}),dangerouslySetInnerHTML:{__html:$??""}})}),c&&h.jsx(K,{error:n,children:c})]})});try{M.displayName="MarkdownField",M.__docgenInfo={description:"",displayName:"MarkdownField",props:{label:{defaultValue:null,description:"The label of the field",name:"label",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"If `true`, the value will be shown as HTML",name:"readOnly",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"If `true`, the component is HTMLElement.",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Placeholder to be shown on empty field",name:"placeholder",required:!1,type:{name:"string"}},plain:{defaultValue:null,description:"If `true`, the component will ignore HTML styles `onPaste`",name:"plain",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"If `true`, the Component element is required.",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Show error state",name:"error",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"The helper text content.",name:"helperText",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"The Markdown value to be shown",name:"value",required:!1,type:{name:"string"}},margin:{defaultValue:{value:"none"},description:"Defined margin offset",name:"margin",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'}]}},minRows:{defaultValue:{value:"1"},description:"Defines minimum height of the field",name:"minRows",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"Callback fired when the Component is blurred. It returns Markdown.",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLElement, Element>) => void)"}},onFocus:{defaultValue:null,description:"Callback fired when the value is changed.",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLElement, Element>) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<HTMLElement>) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((event: KeyboardEvent<HTMLElement>) => void)"}},onPaste:{defaultValue:null,description:"Callback fired when the Component is pasted.",name:"onPaste",required:!1,type:{name:"((event: ClipboardEvent<HTMLElement>) => void)"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps"}}}}}catch{}export{M};
//# sourceMappingURL=MarkdownField-201471a9.js.map