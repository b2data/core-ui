import{j as s}from"./jsx-runtime-4ca860c5.js";import{a as l,S as e}from"./SnackbarMessage-3ea2fda9.js";const n=({children:a,maxSnack:o=5,anchorOrigin:r={horizontal:"left",vertical:"bottom"},autoHideDuration:t=1e4,dense:i})=>s.jsx(l,{maxSnack:o,anchorOrigin:r,autoHideDuration:t,dense:i,Components:{default:e,error:e,warning:e,success:e,info:e},children:a});try{n.displayName="SnackbarProvider",n.__docgenInfo={description:"",displayName:"SnackbarProvider",props:{children:{defaultValue:null,description:`Most of the time this is your App. every component from this point onward
will be able to show snackbars.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},dense:{defaultValue:{value:"false"},description:"Denser margins for snackbars. Recommended to be used on mobile devices.",name:"dense",required:!1,type:{name:"boolean"}},anchorOrigin:{defaultValue:{value:'{ horizontal: "left", vertical: "bottom" }'},description:"The anchor of the `Snackbar`.",name:"anchorOrigin",required:!1,type:{name:"SnackbarOrigin"}},autoHideDuration:{defaultValue:{value:"10000"},description:"The number of milliseconds to wait before automatically calling the\n`onClose` function. By default snackbars get closed after 5000 milliseconds.\nSet autoHideDuration to 'null' if you don't want snackbars to automatically close.\nAlternatively pass `persist: true` in the options parameter of enqueueSnackbar.",name:"autoHideDuration",required:!1,type:{name:"number | null"}},maxSnack:{defaultValue:{value:"5"},description:"Maximum snackbars that can be stacked on top of one another.",name:"maxSnack",required:!1,type:{name:"number"}}}}}catch{}export{n as S};
//# sourceMappingURL=SnackbarProvider-7830be67.js.map