import{j as e,r as h,R as le}from"./iframe-G5ZpE7QO.js";import{c as $}from"./createSvgIcon-By4qT70r.js";import{R as B,u as X}from"./index-oxrpQFvm.js";import{B as A}from"./Box-D4a9ddNd.js";import{S as V}from"./Stack-C1N7zyIV.js";import{T as R}from"./Typography-C-S4zNgT.js";import"./EventManager-U-2oWolE.js";import{B as Q}from"./Button-D5lq0aSm.js";import{C as Z}from"./CircularProgress-DU1PGsgU.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-yIZRShux.js";import"./styled-B19C_ToH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useEventCallback-CCbompB-.js";import"./index-B92T7WXw.js";import"./useThemeProps-Bc0sqqow.js";import"./useThemeProps-DvF4oltY.js";import"./getThemeProps-C1xKM45S.js";import"./useForkRef-D2tk6x-x.js";import"./useSlotProps-RR2uP_3d.js";import"./mergeSlotProps-DtAb3QtM.js";import"./isHostComponent-DVu5iVWx.js";import"./Collapse-CDNkoXbu.js";import"./useTheme-B138dJGz.js";import"./utils-BY4JAHKj.js";import"./TransitionGroupContext-DdCBOnAD.js";import"./index-BMvGbyKB.js";import"./index-BOY60yfB.js";import"./useSlot-Dnn0ZK68.js";import"./useTimeout-CjFhj00D.js";import"./Checkbox-tiRQtYCD.js";import"./SwitchBase-CnMAq2UZ.js";import"./useFormControl-eaohbf9W.js";import"./useControlled-BsGi7h6u.js";import"./ButtonBase-DT2_oOoC.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-IEfrjphi.js";import"./MoreVert-BX0l76Uf.js";import"./IconButton-DNO3hmXz.js";import"./IconButton-DZB3-HSc.js";import"./Menu-nhBa3qcb.js";import"./Menu-D1NUX130.js";import"./Popover-Zy7MGOxg.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-CPMU4Gxv.js";import"./getReactElementRef-DhAmtzfE.js";import"./Modal-ZvXrb2Ac.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-CSHLtsMQ.js";import"./Backdrop-XPtT8SSm.js";import"./Paper-BiDxZ156.js";import"./MenuList-C1j_LIKx.js";import"./ListContext-C9b8DO9_.js";import"./MenuItem-CQ7Cxxl9.js";import"./MenuItem-eDVnLRQ4.js";import"./listItemTextClasses-CiRxluPw.js";import"./styled-IcFJrwRS.js";const J=$(e.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"})),K=$(e.jsx("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"})),de=(s,n)=>{const[r,a]=h.useState(()=>{if(typeof window>"u")return n;try{const t=window.localStorage.getItem(s);return t&&t!=="undefined"?['"',"[","{"].includes(t[0])?JSON.parse(t):t:n}catch(t){return console.error(t),n}});return[r,t=>{try{const d=t instanceof Function?t(r):t;a(d),typeof window<"u"&&window.localStorage.setItem(s,JSON.stringify(d))}catch(d){console.error(d)}}]};function ee({fetchItems:s,getChildrenCount:n,getItemId:r,rootItem:a,getAdditionalParentIds:i,debounceDelay:t=50,prefill:d,onRequestStart:p,onRequestEnd:f,onRequestError:C,debugLog:l}){const T=l||((...o)=>{}),c=new Map,y=new Set,j={get:o=>c.get(o??null),set:(o,S)=>{const g=o??null;S.length>0?(c.set(g,S),y.delete(g)):(y.add(g),c.delete(g))},has:o=>c.has(o??null),delete:o=>{const S=o??null;c.delete(S),y.delete(S)},clear:()=>{c.clear(),y.clear()}};d&&Object.entries(d).forEach(([o,S])=>{j.set(o==="null"?null:o,S)});const x=new Map;let D=new Set,L=null;const z=async()=>{if(D.size===0)return;const o=Array.from(D);T("[FlatSearchDataSource] queue",o),D=new Set;const S=new Set(o);i&&o.forEach(u=>{i(u).forEach(I=>{S.add(I)})});const g=Array.from(S).filter(u=>!c.has(u)&&!y.has(u));if(T("[FlatSearchDataSource] idsToFetch:",g),g.length===0){o.forEach(u=>{const I=c.get(u)??[],m=x.get(u);m&&(m.resolve(I),x.delete(u))});return}try{p?.(g);const u=await s(g),I=u instanceof Map?u:new Map(Object.entries(u).map(([m,b])=>[m==="null"?null:m,b]));T("[FlatSearchDataSource] result:",I.size),f?.(g,I),g.forEach(m=>{const b=I.get(m)??[];b.length>0?c.set(m,b):y.add(m)}),o.forEach(m=>{let b;g.includes(m)?b=I.get(m)??[]:b=c.get(m)??[];const E=x.get(m);E&&(E.resolve(b),x.delete(m))})}catch(u){C?.(Array.from(o),u),o.forEach(I=>{const m=x.get(I);m&&(m.reject(u),x.delete(I))})}},w=o=>{if(c.has(o)){const m=c.get(o);return Promise.resolve(m)}if(y.has(o))return Promise.resolve([]);const S=x.get(o);if(S)return S.promise;let g,u;const I=new Promise((m,b)=>{g=m,u=b});return x.set(o,{promise:I,resolve:g,reject:u}),D.add(o),L&&clearTimeout(L),L=setTimeout(()=>{z()},t),I};return{getChildrenCount:n,getTreeItems:async o=>o==null||o==="root"?await w(null):await w(o),cache:j,refresh:o=>{o===void 0?j.clear():j.delete(o)},debug:T}}function ce(s){const{fetchItems:n,transformItem:r,getChildrenCount:a,getItemId:i,rootItem:t,restoreStateKey:d,filterExpandedItems:p,getAdditionalParentIds:f,debounceDelay:C,onRequestStart:l,onRequestEnd:T,onRequestError:c}=s,[y,j]=de(d||"richTreeView:expanded",[]),x=h.useMemo(()=>p?y.filter(p):y,[y,p]),[D,L]=h.useState([t]),[z,w]=h.useState(!0),[o,S]=h.useState(!1),g=h.useRef(!1),u=h.useRef(""),I=h.useRef(!1),m=h.useCallback(async q=>{const F=await n(q);if(!r)return F;const v=new Map;return F.forEach((k,P)=>{v.set(P,k.map(M=>r(M,P)))}),v},[n,r]),b=h.useMemo(()=>ee({fetchItems:m,getChildrenCount:a,getItemId:i,rootItem:t,getAdditionalParentIds:f,debounceDelay:C,onRequestStart:l,onRequestEnd:T,onRequestError:c}),[m,a,i,t,f,C,l,T,c]),E=h.useMemo(()=>JSON.stringify([...x].sort()),[x]);h.useEffect(()=>{const q=E!==u.current;if(g.current&&!q||I.current)return;(async()=>{I.current=!0,w(!0);try{let v=[];const k=b.cache.get(null);k&&k.length>0?v=k:v=(await m([null])).get(null)||[],v.length>0&&b.cache.set(null,v);const P={...t,childrenCount:a(t)||v.length};if(x.length===0){L([P]),w(!1),S(!0),g.current=!0,u.current=E,I.current=!1;return}const M=[null,...x.filter(O=>O!==i(t))],N=await m(M);N.forEach((O,se)=>{b.cache.set(se,O)});const ae=N.get(null)||v,ie=[{...P,children:ae}];L(ie),S(!0),g.current=!0,u.current=E}catch(v){console.error("Failed to load initial tree data",v),L([t]),S(!0),g.current=!0}finally{I.current=!1,w(!1)}})()},[E,t,i,a,m,b,x]);const oe=h.useCallback((q,F)=>{const v=JSON.stringify([...x].sort()),k=JSON.stringify([...F].sort());v!==k&&j(p?P=>[...P.filter(N=>!p(N)),...F]:F)},[x,j,p]);return{items:D,dataSource:b,expandedItems:x,onExpandedItemsChange:oe,loading:z,useLazyLoading:o}}const Tt={title:"Components/RichTreeView",component:B,tags:["autodocs"]},me=[{id:"product",label:"Product",type:"folder",children:[{id:"product-roadmap",label:"Roadmap",type:"file"},{id:"product-specs",label:"Specifications",type:"file"}]},{id:"engineering",label:"Engineering",type:"folder",children:[{id:"engineering-frontend",label:"Frontend",type:"folder",children:[{id:"frontend-components",label:"Components",type:"file"},{id:"frontend-utils",label:"Utils",type:"file"}]},{id:"engineering-backend",label:"Backend",type:"folder",children:[{id:"backend-api",label:"API",type:"file"},{id:"backend-db",label:"Database",type:"file"}]}]},{id:"design",label:"Design",type:"folder",children:[{id:"design-system",label:"Design System",type:"file"},{id:"design-tokens",label:"Tokens",type:"file"}]}],U={args:{},render:()=>e.jsx(A,{sx:{height:500,width:500},children:e.jsxs(V,{spacing:2,children:[e.jsx(R,{variant:"body2",sx:{mb:2},children:"Base Tree View (without lazy loading)"}),e.jsx(R,{variant:"caption",color:"text.secondary",children:"Simple tree with static data. All items are loaded immediately, no dataSource is used."}),e.jsx(B,{items:me,defaultExpandedItems:["product","engineering"],getItemId:s=>s.id,getItemLabel:s=>s.label,getItemChildren:s=>s.children,getItemIcon:s=>s.type==="folder"?K:J})]})})},pe=[{id:"roadmap",label:"Product Roadmap",type:"folder",children:[{id:"roadmap-q1",label:"Q1 Priorities",type:"file"},{id:"roadmap-q2",label:"Q2 Priorities",type:"file"}]},{id:"design",label:"Design",type:"folder",children:[{id:"design-system",label:"Design System v2",type:"folder"},{id:"tokens",label:"Tokens",type:"file"}]},{id:"archive",label:"Archive",type:"folder",children:[{id:"archive-2023",label:"2023",type:"file"}]}],te=(s,n)=>{if(n.parentId===null){const i=[...s],[t]=i.splice(n.index,1);return{removed:t??null,nodes:i}}let r=null;const a=s.map(i=>{if(r)return i;if(i.id===n.parentId){const t=i.children?[...i.children]:[],[d]=t.splice(n.index,1);return r=d??null,{...i,children:t}}if(i.children){const t=te(i.children,n);if(t.removed)return r=t.removed,{...i,children:t.nodes}}return i});return{removed:r,nodes:a}},ne=(s,n,r)=>{if(n.parentId===null){const t=[...s];return t.splice(n.index,0,r),{nodes:t,inserted:!0}}let a=!1;return{nodes:s.map(t=>{if(a)return t;if(t.id===n.parentId){const d=t.children?[...t.children]:[];return d.splice(n.index,0,r),a=!0,{...t,children:d}}if(t.children){const d=ne(t.children,n,r);if(d.inserted)return a=!0,{...t,children:d.nodes}}return t}),inserted:a}},H={args:{},render:()=>{const[s,n]=h.useState(pe),r=h.useCallback(({itemId:a,oldPosition:i,newPosition:t})=>{n(d=>{const{removed:p,nodes:f}=te(d,i);if(!p)return d;const{nodes:C}=ne(f,t,p);return C})},[]);return e.jsx(A,{sx:{height:500,width:500},children:e.jsxs(V,{spacing:2,children:[e.jsx(R,{variant:"body2",sx:{mb:2},children:"Drag & Drop with icons"}),e.jsx(R,{variant:"caption",color:"text.secondary",children:"Drag and drop items to change their position in the tree. Use built-in DnD UI through `itemsReordering`."}),e.jsx(B,{items:s,itemsReordering:!0,onItemPositionChange:r,getItemId:a=>a.id,getItemLabel:a=>a.label,getItemChildren:a=>a.children,getItemIcon:a=>a.type==="folder"?K:J})]})})}},ue=[{id:"folder-1",name:"Folder 1",parentId:null,childrenCount:3,type:"folder"},{id:"folder-2",name:"Folder 2",parentId:null,childrenCount:2,type:"folder"},{id:"folder-3",name:"Folder 3",parentId:null,childrenCount:0,type:"folder"},{id:"folder-1-1",name:"Folder 1.1",parentId:"folder-1",childrenCount:2,type:"folder"},{id:"folder-1-2",name:"Folder 1.2",parentId:"folder-1",childrenCount:0,type:"folder"},{id:"file-1-3",name:"File 1.3",parentId:"folder-1",childrenCount:0,type:"file"},{id:"folder-1-1-1",name:"Folder 1.1.1",parentId:"folder-1-1",childrenCount:0,type:"folder"},{id:"file-1-1-2",name:"File 1.1.2",parentId:"folder-1-1",childrenCount:0,type:"file"},{id:"folder-2-1",name:"Folder 2.1",parentId:"folder-2",childrenCount:0,type:"folder"},{id:"file-2-2",name:"File 2.2",parentId:"folder-2",childrenCount:0,type:"file"}],re=s=>new Promise(n=>setTimeout(n,s)),Y=async s=>{await re(300);const n=new Map;return s.forEach(r=>{const a=ue.filter(i=>(i.parentId??null)===(r==="root"?null:r));n.set(r==="root"?null:r,a)}),n};function he(s,n=null){const r=new Map,a=new Map;s.forEach(d=>{a.set(d.id,d);const p=d.parentId??n;r.has(p)||r.set(p,[]),r.get(p).push(d)});const i=new Set,t=d=>(r.get(d)||[]).map(f=>{if(i.has(f.id))return console.warn(`Cycle detected for item ${f.id}`),{...f,children:[]};i.add(f.id);const C={...f,children:t(f.id)};return i.delete(f.id),C});return t(n)}const G=["root","folder-1","folder-1-1","folder-2"],_={args:{},render:()=>{const[s,n]=h.useState([]),[r,a]=h.useState(!0),[i,t]=h.useState(!1),[d,p]=h.useState(G),f=X(),C=h.useMemo(()=>({id:"root",name:"Root",parentId:null,childrenCount:3,type:"folder"}),[]),l=h.useMemo(()=>ee({fetchItems:Y,getChildrenCount:c=>c.childrenCount??0,getItemId:c=>c.id,rootItem:C}),[C]);le.useEffect(()=>{(async()=>{a(!0);try{const y=G.filter(w=>w!=="root"),j=await Y([null,...y]);new Set([null,...y]).forEach(w=>{j.has(w)||j.set(w,[])}),j.forEach((w,o)=>{l.cache.set(o,w)});const D=[];j.forEach(w=>D.push(...w));const L=he(D,null),z=[{...C,children:L}];n(z),t(!0)}catch(y){console.error("Failed to load data",y)}finally{a(!1)}})()},[C,l]);const T=c=>{l.refresh(c),f.current&&"updateItemChildren"in f.current&&f.current.updateItemChildren(c)};return e.jsx(A,{sx:{height:500,width:500},children:e.jsxs(V,{spacing:2,children:[e.jsx(R,{variant:"body2",sx:{mb:2},children:"Lazy Load with state restoration"}),e.jsxs(R,{variant:"caption",color:"text.secondary",children:["1. Load initial state with /search/flat and build tree.",e.jsx("br",{}),"2. Prefill cache adapter through createFlatSearchDataSource, so lazy-loading can see the data.",e.jsx("br",{}),"3. All new expansions go through dataSource and server."]}),e.jsx(Q,{variant:"outlined",size:"small",onClick:()=>T("folder-1"),children:"Refresh folder-1 (clear cache and reload)"}),r?e.jsxs(A,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:300,gap:2},children:[e.jsx(Z,{}),e.jsx(R,{children:"Loading tree..."})]}):s.length>0?e.jsx(B,{apiRef:f,items:s,dataSource:i?l:void 0,expandedItems:d,onExpandedItemsChange:(c,y)=>{p(y)},getItemId:c=>c.id,getItemLabel:c=>c.name,getItemIcon:c=>c.type==="folder"?K:J}):e.jsx(R,{children:"No data"})]})})}},fe=[{id:"simplified-folder-1",name:"Documents",parentId:null,childrenCount:3,type:"folder"},{id:"simplified-folder-2",name:"Projects",parentId:null,childrenCount:2,type:"folder"},{id:"simplified-folder-3",name:"Archive",parentId:null,childrenCount:0,type:"folder"},{id:"simplified-folder-1-1",name:"Reports",parentId:"simplified-folder-1",childrenCount:2,type:"folder"},{id:"simplified-folder-1-2",name:"Notes",parentId:"simplified-folder-1",childrenCount:0,type:"folder"},{id:"simplified-file-1-3",name:"readme.txt",parentId:"simplified-folder-1",childrenCount:0,type:"file"},{id:"simplified-folder-1-1-1",name:"2024",parentId:"simplified-folder-1-1",childrenCount:0,type:"folder"},{id:"simplified-file-1-1-2",name:"summary.pdf",parentId:"simplified-folder-1-1",childrenCount:0,type:"file"},{id:"simplified-folder-2-1",name:"Web App",parentId:"simplified-folder-2",childrenCount:0,type:"folder"},{id:"simplified-file-2-2",name:"plan.md",parentId:"simplified-folder-2",childrenCount:0,type:"file"}],ge=async s=>{await re(400);const n=new Map;return s.forEach(r=>{const a=fe.filter(i=>(i.parentId??null)===(r==="root"?null:r));n.set(r==="root"?null:r,a)}),n},W={args:{},render:()=>{const s=h.useMemo(()=>({id:"root",name:"Root",parentId:null,childrenCount:3,type:"folder"}),[]),{items:n,dataSource:r,expandedItems:a,onExpandedItemsChange:i,loading:t,useLazyLoading:d}=ce({fetchItems:ge,transformItem:l=>({id:l.id,name:l.name,parentId:l.parentId,childrenCount:l.childrenCount,type:l.type}),getChildrenCount:l=>l.childrenCount??0,getItemId:l=>l.id,rootItem:s,restoreStateKey:"richTreeView:simplified:expanded",onRequestStart:l=>{console.log("[Simplified] Request started for:",l)},onRequestEnd:(l,T)=>{console.log("[Simplified] Request completed for:",l),console.log("[Simplified] Received items:",T)},onRequestError:(l,T)=>{console.error("[Simplified] Request failed for:",l,T)}}),p=X(),f=l=>{r.refresh(l),p.current&&"updateItemChildren"in p.current&&p.current.updateItemChildren(l)},C=()=>{localStorage.removeItem("richTreeView:simplified:expanded"),window.location.reload()};return e.jsx(A,{sx:{height:600,width:600},children:e.jsxs(V,{spacing:2,children:[e.jsx(R,{variant:"body2",sx:{mb:2},children:"Simplified with useFlatSearchTreeView Hook"}),e.jsxs(R,{variant:"caption",color:"text.secondary",children:["This story demonstrates the simplified usage with"," ",e.jsx("code",{children:"useFlatSearchTreeView"})," hook. All the complex logic for state restoration, initial data loading, and lazy loading is handled automatically by the hook.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"Features:"}),e.jsx("br",{}),"• Automatic state restoration from localStorage",e.jsx("br",{}),"• Automatic initial data loading for expanded items",e.jsx("br",{}),"• Automatic cache prefilling for lazy loading",e.jsx("br",{}),"• Simple API - just pass fetchItems and config",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"Try:"}),e.jsx("br",{}),"• Expand/collapse items - state is saved automatically",e.jsx("br",{}),"• Refresh the page - state is restored automatically",e.jsx("br",{}),'• Click "Refresh Documents" to clear cache and reload',e.jsx("br",{}),'• Click "Clear State" to reset localStorage']}),e.jsxs(V,{direction:"row",spacing:2,children:[e.jsx(Q,{variant:"outlined",size:"small",onClick:()=>f("simplified-folder-1"),children:"Refresh Documents"}),e.jsx(Q,{variant:"outlined",size:"small",color:"error",onClick:C,children:"Clear State"})]}),t?e.jsxs(A,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:400,gap:2},children:[e.jsx(Z,{}),e.jsx(R,{children:"Loading tree and restoring state..."}),e.jsx(R,{variant:"caption",color:"text.secondary",children:"Simulating API request delay (400ms)"})]}):n.length>0?e.jsx(B,{apiRef:p,items:n,dataSource:d?r:void 0,expandedItems:a,onExpandedItemsChange:i,getItemId:l=>l.id,getItemLabel:l=>l.name,getItemIcon:l=>l.type==="folder"?K:J}):e.jsx(R,{children:"No data"}),e.jsx(A,{sx:{mt:2,p:2,bgcolor:"background.default",borderRadius:1},children:e.jsxs(R,{variant:"caption",component:"div",children:[e.jsx("strong",{children:"Current State:"}),e.jsx("br",{}),"Loading: ",t?"Yes":"No",e.jsx("br",{}),"Lazy Loading: ",d?"Enabled":"Disabled",e.jsx("br",{}),"Expanded Items:"," ",a.length>0?a.join(", "):"None",e.jsx("br",{}),"Items Count: ",n.length]})})]})})}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <Box sx={{
      height: 500,
      width: 500
    }}>
        <Stack spacing={2}>
          <Typography variant="body2" sx={{
          mb: 2
        }}>
            Base Tree View (without lazy loading)
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Simple tree with static data. All items are loaded immediately, no
            dataSource is used.
          </Typography>
          <RichTreeView items={baseItems} defaultExpandedItems={["product", "engineering"]} getItemId={item => item.id} getItemLabel={item => item.label} getItemChildren={item => item.children} getItemIcon={item => item.type === "folder" ? FolderIcon : DescriptionIcon} />
        </Stack>
      </Box>;
  }
}`,...U.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [items, setItems] = useState<DragItem[]>(initialDragItems);
    const handleItemPositionChange = useCallback(({
      itemId: _itemId,
      oldPosition,
      newPosition
    }: {
      itemId: TreeViewItemId;
      oldPosition: TreeViewItemReorderPosition;
      newPosition: TreeViewItemReorderPosition;
    }) => {
      setItems(prev => {
        const {
          removed,
          nodes
        } = removeItemAtPosition(prev, oldPosition);
        if (!removed) {
          return prev;
        }
        const {
          nodes: inserted
        } = insertItemAtPosition(nodes, newPosition, removed);
        return inserted;
      });
    }, []);
    return <Box sx={{
      height: 500,
      width: 500
    }}>
        <Stack spacing={2}>
          <Typography variant="body2" sx={{
          mb: 2
        }}>
            Drag & Drop with icons
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Drag and drop items to change their position in the tree. Use
            built-in DnD UI through \`itemsReordering\`.
          </Typography>
          <RichTreeView items={items} itemsReordering onItemPositionChange={handleItemPositionChange} getItemId={item => item.id} getItemLabel={item => item.label} getItemChildren={item => item.children} getItemIcon={item => item.type === "folder" ? FolderIcon : DescriptionIcon} />
        </Stack>
      </Box>;
  }
}`,...H.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [treeItems, setTreeItems] = useState<FlatSearchItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [useLazyLoading, setUseLazyLoading] = useState(false);
    // Simulate restored state from localStorage
    const [expandedItems, setExpandedItems] = useState<TreeViewItemId[]>(initialExpandedItems);
    const apiRef = useTreeViewApiRef();

    // Create root node
    const rootItem: FlatSearchItem = useMemo(() => ({
      id: "root",
      name: "Root",
      parentId: null,
      childrenCount: 3,
      type: "folder"
    }), []);

    // Create data source for lazy loading (used after initial load)
    const dataSource = useMemo(() => createFlatSearchDataSource<FlatSearchItem>({
      fetchItems: mockFlatSearchAPI,
      getChildrenCount: item => item.childrenCount ?? 0,
      getItemId: item => item.id,
      rootItem
    }), [rootItem]);

    // Load initial data on mount
    React.useEffect(() => {
      const loadInitialData = async () => {
        setLoading(true);
        try {
          // Fetch all data we need at once for initial state restoration
          // Get all parentIds that need to be loaded (root + all expanded items)
          const expandedIds = initialExpandedItems.filter(id => id !== "root");
          const allData = await mockFlatSearchAPI([null, ...expandedIds]);

          // Ensure every requested parentId exists in the map
          const parents = new Set<TreeViewItemId | null>([null, ...expandedIds]);
          parents.forEach(parentId => {
            if (!allData.has(parentId)) {
              allData.set(parentId, []);
            }
          });

          // Prefill the dataSource cache so the lazy loading plugin can reuse it
          allData.forEach((items, parentId) => {
            dataSource.cache.set(parentId, items);
          });

          // Combine all items into flat array for initial tree render
          const flatItems: FlatSearchItem[] = [];
          allData.forEach(items => flatItems.push(...items));

          // Build tree structure from flat data
          const rootChildrenTree = buildTreeFromFlatData(flatItems, null);
          const tree = [{
            ...rootItem,
            children: rootChildrenTree
          }];
          setTreeItems(tree);

          // After tree is built, enable lazy loading for future expansions
          setUseLazyLoading(true);
        } catch (error) {
          console.error("Failed to load data", error);
        } finally {
          setLoading(false);
        }
      };
      void loadInitialData();
    }, [rootItem, dataSource]); // Only run once on mount for initial state restoration

    const handleRefresh = (parentId: TreeViewItemId) => {
      // Clear the cache for this parent
      dataSource.refresh(parentId);
      // Force reload children using the API
      if (apiRef.current && "updateItemChildren" in apiRef.current) {
        (apiRef.current as any).updateItemChildren(parentId);
      }
    };
    return <Box sx={{
      height: 500,
      width: 500
    }}>
        <Stack spacing={2}>
          <Typography variant="body2" sx={{
          mb: 2
        }}>
            Lazy Load with state restoration
          </Typography>
          <Typography variant="caption" color="text.secondary">
            1. Load initial state with /search/flat and build tree.
            <br />
            2. Prefill cache adapter through createFlatSearchDataSource, so
            lazy-loading can see the data.
            <br />
            3. All new expansions go through dataSource and server.
          </Typography>
          <Button variant="outlined" size="small" onClick={() => handleRefresh("folder-1")}>
            Refresh folder-1 (clear cache and reload)
          </Button>
          {loading ? <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 300,
          gap: 2
        }}>
              <CircularProgress />
              <Typography>Loading tree...</Typography>
            </Box> : treeItems.length > 0 ? <RichTreeView apiRef={apiRef} items={treeItems} dataSource={useLazyLoading ? dataSource : undefined} expandedItems={expandedItems} onExpandedItemsChange={(_, newItems) => {
          setExpandedItems(newItems as TreeViewItemId[]);
        }} getItemId={item => item.id} getItemLabel={item => item.name} getItemIcon={item => {
          return item.type === "folder" ? FolderIcon : DescriptionIcon;
        }} /> : <Typography>No data</Typography>}
        </Stack>
      </Box>;
  }
}`,..._.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    // Create root item
    const rootItem: SimplifiedFlatSearchItem = useMemo(() => ({
      id: "root",
      name: "Root",
      parentId: null,
      childrenCount: 3,
      type: "folder"
    }), []);

    // Use the hook - all complex logic is handled automatically!
    const {
      items,
      dataSource,
      expandedItems,
      onExpandedItemsChange,
      loading,
      useLazyLoading
    } = useFlatSearchTreeView({
      // Raw fetch function - just pass your API call
      fetchItems: simplifiedMockFlatSearchAPI,
      // Transform raw item to tree item (optional, but useful for type safety)
      transformItem: rawItem => ({
        id: rawItem.id,
        name: rawItem.name,
        parentId: rawItem.parentId,
        childrenCount: rawItem.childrenCount,
        type: rawItem.type
      }),
      // Extract children count
      getChildrenCount: item => item.childrenCount ?? 0,
      // Extract item ID
      getItemId: item => item.id,
      // Root item
      rootItem,
      // Automatic state restoration from localStorage
      restoreStateKey: "richTreeView:simplified:expanded",
      // Optional: Callbacks for observability
      onRequestStart: parentIds => {
        console.log("[Simplified] Request started for:", parentIds);
      },
      onRequestEnd: (parentIds, result) => {
        console.log("[Simplified] Request completed for:", parentIds);
        console.log("[Simplified] Received items:", result);
      },
      onRequestError: (parentIds, error) => {
        console.error("[Simplified] Request failed for:", parentIds, error);
      }
    });
    const apiRef = useTreeViewApiRef();
    const handleRefresh = (parentId: TreeViewItemId) => {
      // Clear the cache for this parent
      dataSource.refresh(parentId);
      // Force reload children using the API
      if (apiRef.current && "updateItemChildren" in apiRef.current) {
        (apiRef.current as any).updateItemChildren(parentId);
      }
    };
    const handleClearState = () => {
      // Clear localStorage to reset state
      localStorage.removeItem("richTreeView:simplified:expanded");
      window.location.reload();
    };
    return <Box sx={{
      height: 600,
      width: 600
    }}>
        <Stack spacing={2}>
          <Typography variant="body2" sx={{
          mb: 2
        }}>
            Simplified with useFlatSearchTreeView Hook
          </Typography>
          <Typography variant="caption" color="text.secondary">
            This story demonstrates the simplified usage with{" "}
            <code>useFlatSearchTreeView</code> hook. All the complex logic for
            state restoration, initial data loading, and lazy loading is handled
            automatically by the hook.
            <br />
            <br />
            <strong>Features:</strong>
            <br />• Automatic state restoration from localStorage
            <br />• Automatic initial data loading for expanded items
            <br />• Automatic cache prefilling for lazy loading
            <br />• Simple API - just pass fetchItems and config
            <br />
            <br />
            <strong>Try:</strong>
            <br />• Expand/collapse items - state is saved automatically
            <br />• Refresh the page - state is restored automatically
            <br />• Click "Refresh Documents" to clear cache and reload
            <br />• Click "Clear State" to reset localStorage
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" size="small" onClick={() => handleRefresh("simplified-folder-1")}>
              Refresh Documents
            </Button>
            <Button variant="outlined" size="small" color="error" onClick={handleClearState}>
              Clear State
            </Button>
          </Stack>
          {loading ? <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 400,
          gap: 2
        }}>
              <CircularProgress />
              <Typography>Loading tree and restoring state...</Typography>
              <Typography variant="caption" color="text.secondary">
                Simulating API request delay (400ms)
              </Typography>
            </Box> : items.length > 0 ? <RichTreeView apiRef={apiRef} items={items} dataSource={useLazyLoading ? dataSource : undefined} expandedItems={expandedItems} onExpandedItemsChange={onExpandedItemsChange} getItemId={item => item.id} getItemLabel={item => item.name} getItemIcon={item => {
          return item.type === "folder" ? FolderIcon : DescriptionIcon;
        }} /> : <Typography>No data</Typography>}
          <Box sx={{
          mt: 2,
          p: 2,
          bgcolor: "background.default",
          borderRadius: 1
        }}>
            <Typography variant="caption" component="div">
              <strong>Current State:</strong>
              <br />
              Loading: {loading ? "Yes" : "No"}
              <br />
              Lazy Loading: {useLazyLoading ? "Enabled" : "Disabled"}
              <br />
              Expanded Items:{" "}
              {expandedItems.length > 0 ? expandedItems.join(", ") : "None"}
              <br />
              Items Count: {items.length}
            </Typography>
          </Box>
        </Stack>
      </Box>;
  }
}`,...W.parameters?.docs?.source}}};const jt=["Base","DragAndDrop","LazyLoadWithStateRestoration","SimplifiedWithHook"];export{U as Base,H as DragAndDrop,_ as LazyLoadWithStateRestoration,W as SimplifiedWithHook,jt as __namedExportsOrder,Tt as default};
