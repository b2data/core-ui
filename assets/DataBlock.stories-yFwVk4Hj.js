import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DQLiH3RP.js";import{D as u,u as n}from"./DataBlock-DvGTIpdk.js";import"./index-CUZ_grhp.js";import"./index-BmVkRRHb.js";import"./identifier-DtIXL9n7.js";import"./theme-DdiFNERY.js";import"./useTheme-CIxVfZhu.js";import"./Box-gWX7U2_5.js";import"./generateUtilityClasses-KoSbOHxf.js";import"./index-PKGOc6w3.js";import"./extendSxProp-CeBvtLOD.js";const C={title:"Components/Data Block/Data Block",component:u,tags:["autodocs"]},t={args:{editable:!0,placeholderText:"Enter markdown here ...",content:`==Участники==
@Туров Николай|0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
[[Устав Кооператива#2#2.1|da9ff288-9c79-412e-997c-b2e06c2a0d2d#da9ff288-9c79-412e-997c-b2e06c2a0d23#da9ff288-9c79-412e-997c-b2e06c2a0d25]]

\`\`\`js
const a = 10;
const b = 20;
\`\`\`

### Вопрос: Что сделано в модуле @Документы?

Сделал понятие блок, который имеет тип.
***
Есть конвертер из Markdown в HTML и обратно.

### Вопрос: Какие задачи решает редактор?

- создание документы из блоков
    - текст
        - [x] заголовок - имеет отдельный тип, т.к. по нему строиться структура документа, если нажимаешь Enter - создается новый блок.
        - [ ] не нумерованный список ( - )
- создание блоков
`,customKeymap:[],onTrackChanges:e=>console.info(e),mdProps:{onSearchMentions:async({query:e=""})=>new Promise(d=>{setTimeout(()=>{d([{name:"Group 1",id:n()},{name:"Group 2",id:n()},{name:"User 1",detailId:n(),detailLabel:"Space 1",id:"0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"},{name:"User 2",detailId:n(),detailLabel:"Space 1",id:"-1:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"}].filter(l=>e?l.name.indexOf(e)>-1:!0))},1e3)}),onSearchReference:async({query:e="",docId:d,versionId:l})=>new Promise(o=>{setTimeout(l?()=>{o([{label:"1",displayLabel:"Paragraph 1",id:n()},{label:"1.1",id:n()},{label:"1.1.1",id:n()},{label:"1.2",id:n()},{label:"1.3",id:n()},{label:"2",displayLabel:"Paragraph 2",id:n()},{label:"2.1",id:n()},{label:"2.2",id:n()}].filter(a=>e?a.label.indexOf(e)>-1:!0))}:d?()=>{o([{label:"1",displayLabel:"Version 1",id:n()},{label:"2",displayLabel:"Version 2",id:n()}].filter(a=>e?a.label.indexOf(e)>-1:!0))}:()=>{o([{label:"doc1",id:n()},{label:"doc2",id:n()},{label:"doc3",id:n()}].filter(a=>e?a.label.indexOf(e)>-1:!0))},1e3)})},onPaste:console.log},render:e=>{const[d,l]=f.useState(e.content),o=a=>{var r;l(a),(r=e.onTrackChanges)==null||r.call(e,a)};return b.jsx(u,{...e,content:d,onTrackChanges:o})}};var i,c,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    editable: true,
    placeholderText: "Enter markdown here ...",
    content: \`==Участники==
@Туров Николай|0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
[[Устав Кооператива#2#2.1|da9ff288-9c79-412e-997c-b2e06c2a0d2d#da9ff288-9c79-412e-997c-b2e06c2a0d23#da9ff288-9c79-412e-997c-b2e06c2a0d25]]

\\\`\\\`\\\`js
const a = 10;
const b = 20;
\\\`\\\`\\\`

### Вопрос: Что сделано в модуле @Документы?

Сделал понятие блок, который имеет тип.
***
Есть конвертер из Markdown в HTML и обратно.

### Вопрос: Какие задачи решает редактор?

- создание документы из блоков
    - текст
        - [x] заголовок - имеет отдельный тип, т.к. по нему строиться структура документа, если нажимаешь Enter - создается новый блок.
        - [ ] не нумерованный список ( - )
- создание блоков
\`,
    customKeymap: [],
    onTrackChanges: content => console.info(content),
    mdProps: {
      onSearchMentions: async ({
        query = ""
      }) => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve([{
              name: \`Group 1\`,
              id: uuid()
            }, {
              name: \`Group 2\`,
              id: uuid()
            }, {
              name: \`User 1\`,
              detailId: uuid(),
              detailLabel: "Space 1",
              id: "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
            }, {
              name: \`User 2\`,
              detailId: uuid(),
              detailLabel: "Space 1",
              id: "-1:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
            }].filter(o => !query ? true : o.name.indexOf(query) > -1));
          }, 1000);
        });
      },
      onSearchReference: async ({
        query = "",
        docId,
        versionId
      }) => {
        return new Promise(resolve => {
          if (versionId) {
            setTimeout(() => {
              resolve([{
                label: \`1\`,
                displayLabel: "Paragraph 1",
                id: uuid()
              }, {
                label: \`1.1\`,
                id: uuid()
              }, {
                label: \`1.1.1\`,
                id: uuid()
              }, {
                label: \`1.2\`,
                id: uuid()
              }, {
                label: \`1.3\`,
                id: uuid()
              }, {
                label: \`2\`,
                displayLabel: "Paragraph 2",
                id: uuid()
              }, {
                label: \`2.1\`,
                id: uuid()
              }, {
                label: \`2.2\`,
                id: uuid()
              }].filter(o => !query ? true : o.label.indexOf(query) > -1));
            }, 1000);
          } else if (docId) {
            setTimeout(() => {
              resolve([{
                label: \`1\`,
                displayLabel: "Version 1",
                id: uuid()
              }, {
                label: \`2\`,
                displayLabel: "Version 2",
                id: uuid()
              }].filter(o => !query ? true : o.label.indexOf(query) > -1));
            }, 1000);
          } else {
            setTimeout(() => {
              resolve([{
                label: \`doc1\`,
                id: uuid()
              }, {
                label: \`doc2\`,
                id: uuid()
              }, {
                label: \`doc3\`,
                id: uuid()
              }].filter(o => !query ? true : o.label.indexOf(query) > -1));
            }, 1000);
          }
        });
      }
    },
    onPaste: console.log
  },
  render: props => {
    const [val, setVal] = useState(props.content);
    const handleChange = (v: string) => {
      setVal(v);
      props.onTrackChanges?.(v);
    };
    return <DataBlock {...props} content={val} onTrackChanges={handleChange} />;
  }
}`,...(s=(c=t.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const O=["Base"];export{t as Base,O as __namedExportsOrder,C as default};
