import{_ as X}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import{_ as ee}from"./createTheme-f7fbaf76.js";import{r as a,R as W}from"./index-61bf1805.js";import{c as C}from"./clsx-63d16a80.js";import{s as te,g as Ie,c as _e}from"./styled-3543814b.js";import{u as me}from"./useThemeProps-8e2a0e37.js";import{j as F}from"./jsx-runtime-4ca860c5.js";import{g as be}from"./generateUtilityClasses-802c53db.js";import{k as ne}from"./emotion-react.browser.esm-13bdab44.js";import{_ as Ue}from"./assertThisInitialized-081f9914.js";import{_ as ze}from"./inheritsLoose-c82a83d4.js";import{T as ue}from"./TransitionGroupContext-adcba781.js";import{u as ce}from"./useForkRef-80a5c2b4.js";import{u as Oe}from"./useIsFocusVisible-9ca792e3.js";import{u as H}from"./useEventCallback-1165b6b6.js";function oe(e,r){var s=function(t){return r&&a.isValidElement(t)?r(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=s(n)}),l}function Ke(e,r){e=e||{},r=r||{};function s(d){return d in r?r[d]:e[d]}var l=Object.create(null),n=[];for(var t in e)t in r?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in r){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=s(p)}c[u]=s(u)}for(o=0;o<n.length;o++)c[n[o]]=s(n[o]);return c}function w(e,r,s){return s[r]!=null?s[r]:e.props[r]}function Xe(e,r){return oe(e.children,function(s){return a.cloneElement(s,{onExited:r.bind(null,s),in:!0,appear:w(s,"appear",e),enter:w(s,"enter",e),exit:w(s,"exit",e)})})}function Ye(e,r,s){var l=oe(e.children),n=Ke(r,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in r,u=t in l,p=r[t],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:!0,exit:w(o,"exit",e),enter:w(o,"enter",e)}):!u&&c&&!d?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:p.props.in,exit:w(o,"exit",e),enter:w(o,"enter",e)}))}}),n}var Ae=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},We={component:"div",childFactory:function(r){return r}},ie=function(e){ze(r,e);function r(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Ue(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var s=r.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Xe(n,c):Ye(n,o,c),firstRender:!1}},s.handleExited=function(n,t){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=X({},c.children);return delete u[n.key],{children:u}}))},s.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=Ae(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?W.createElement(ue.Provider,{value:u},p):W.createElement(ue.Provider,{value:u},W.createElement(t,c,p))},r}(W.Component);ie.propTypes={};ie.defaultProps=We;const He=ie;function Ge(e){const{className:r,classes:s,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=C(r,s.ripple,s.rippleVisible,l&&s.ripplePulsate),E={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=C(s.child,d&&s.childLeaving,l&&s.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),F.jsx("span",{className:b,style:E,children:F.jsx("span",{className:h})})}const qe=be("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=qe,Je=["center","classes","className"];let G=e=>e,pe,fe,de,he;const Z=550,Qe=80,Ze=ne(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),et=ne(fe||(fe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),tt=ne(de||(de=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),nt=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ot=te(Ge,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,Ze,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,et,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,tt,({theme:e})=>e.transitions.easing.easeInOut),it=a.forwardRef(function(r,s){const l=me({props:r,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=ee(l,Je),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),E=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{E.current&&clearTimeout(E.current)},[]);const _=a.useCallback(f=>{const{pulsate:M,rippleX:T,rippleY:k,rippleSize:I,cb:z}=f;p(x=>[...x,F.jsx(ot,{classes:{ripple:C(t.ripple,m.ripple),rippleVisible:C(t.rippleVisible,m.rippleVisible),ripplePulsate:C(t.ripplePulsate,m.ripplePulsate),child:C(t.child,m.child),childLeaving:C(t.childLeaving,m.childLeaving),childPulsate:C(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:T,rippleY:k,rippleSize:I},d.current)]),d.current+=1,g.current=z},[t]),N=a.useCallback((f={},M={},T=()=>{})=>{const{pulsate:k=!1,center:I=n||M.pulsate,fakeElement:z=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const x=z?null:R.current,P=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,S,D;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)V=Math.round(P.width/2),S=Math.round(P.height/2);else{const{clientX:L,clientY:v}=f.touches&&f.touches.length>0?f.touches[0]:f;V=Math.round(L-P.left),S=Math.round(v-P.top)}if(I)D=Math.sqrt((2*P.width**2+P.height**2)/3),D%2===0&&(D+=1);else{const L=Math.max(Math.abs((x?x.clientWidth:0)-V),V)*2+2,v=Math.max(Math.abs((x?x.clientHeight:0)-S),S)*2+2;D=Math.sqrt(L**2+v**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{_({pulsate:k,rippleX:V,rippleY:S,rippleSize:D,cb:T})},E.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},Qe)):_({pulsate:k,rippleX:V,rippleY:S,rippleSize:D,cb:T})},[n,_]),U=a.useCallback(()=>{N({},{pulsate:!0})},[N]),j=a.useCallback((f,M)=>{if(clearTimeout(E.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,E.current=setTimeout(()=>{j(f,M)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=M},[]);return a.useImperativeHandle(s,()=>({pulsate:U,start:N,stop:j}),[U,N,j]),F.jsx(nt,X({className:C(m.root,t.root,o),ref:R},c,{children:F.jsx(He,{component:null,exit:!0,children:u})}))}),rt=it;function st(e){return Ie("MuiButtonBase",e)}const at=be("MuiButtonBase",["root","disabled","focusVisible"]),lt=at,ut=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ct=e=>{const{disabled:r,focusVisible:s,focusVisibleClassName:l,classes:n}=e,o=_e({root:["root",r&&"disabled",s&&"focusVisible"]},st,n);return s&&l&&(o.root+=` ${l}`),o},pt=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${lt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ft=a.forwardRef(function(r,s){const l=me({props:r,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:E="a",onBlur:h,onClick:R,onContextMenu:_,onDragLeave:N,onFocus:U,onFocusVisible:j,onKeyDown:f,onKeyUp:M,onMouseDown:T,onMouseLeave:k,onMouseUp:I,onTouchEnd:z,onTouchMove:x,onTouchStart:P,tabIndex:V=0,TouchRippleProps:S,touchRippleRef:D,type:L}=l,v=ee(l,ut),O=a.useRef(null),y=a.useRef(null),ge=ce(y,D),{isFocusVisibleRef:re,onFocus:Re,onBlur:Me,ref:Te}=Oe(),[$,Y]=a.useState(!1);p&&$&&Y(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),O.current.focus()}}),[]);const[q,xe]=a.useState(!1);a.useEffect(()=>{xe(!0)},[]);const ye=q&&!d&&!p;a.useEffect(()=>{$&&b&&!d&&q&&y.current.pulsate()},[d,b,$,q]);function B(i,ae,je=g){return H(le=>(ae&&ae(le),!je&&y.current&&y.current[i](le),!0))}const Ce=B("start",T),Ee=B("stop",_),Ve=B("stop",N),ve=B("stop",I),Be=B("stop",i=>{$&&i.preventDefault(),k&&k(i)}),Pe=B("start",P),Se=B("stop",z),De=B("stop",x),ke=B("stop",i=>{Me(i),re.current===!1&&Y(!1),h&&h(i)},!1),Le=H(i=>{O.current||(O.current=i.currentTarget),Re(i),re.current===!0&&(Y(!0),j&&j(i)),U&&U(i)}),J=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},Q=a.useRef(!1),$e=H(i=>{b&&!Q.current&&$&&y.current&&i.key===" "&&(Q.current=!0,y.current.stop(i,()=>{y.current.start(i)})),i.target===i.currentTarget&&J()&&i.key===" "&&i.preventDefault(),f&&f(i),i.target===i.currentTarget&&J()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),we=H(i=>{b&&i.key===" "&&y.current&&$&&!i.defaultPrevented&&(Q.current=!1,y.current.stop(i,()=>{y.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&J()&&i.key===" "&&!i.defaultPrevented&&R(i)});let A=u;A==="button"&&(v.href||v.to)&&(A=E);const K={};A==="button"?(K.type=L===void 0?"button":L,K.disabled=p):(!v.href&&!v.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=ce(s,Te,O),se=X({},l,{centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:V,focusVisible:$}),Ne=ct(se);return F.jsxs(pt,X({as:A,className:C(Ne.root,c),ownerState:se,onBlur:ke,onClick:R,onContextMenu:Ee,onFocus:Le,onKeyDown:$e,onKeyUp:we,onMouseDown:Ce,onMouseLeave:Be,onMouseUp:ve,onDragLeave:Ve,onTouchEnd:Se,onTouchMove:De,onTouchStart:Pe,ref:Fe,tabIndex:p?-1:V,type:L},K,v,{children:[o,ye?F.jsx(rt,X({ref:ge,center:t},S)):null]}))}),St=ft;export{St as B,He as T};
//# sourceMappingURL=ButtonBase-031fb489.js.map
