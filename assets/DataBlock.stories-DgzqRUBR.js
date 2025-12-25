import{r as i,j as c}from"./iframe-Bt0NHjzt.js";import{D as t,u as e}from"./DataBlock-Br7-LhAK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D722bcqC.js";import"./Box-CDPnqyyJ.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";const g={title:"Components/Data Block/Data Block",component:t,tags:["autodocs"]},r={args:{editable:!0,placeholderText:"Enter markdown here ...",content:`
# Заголовок первого уровня
## Заголовок второго уровня ##
### Заголовок третьего уровня
#### Заголовок четвёртого уровня #
##### Заголовок пятого уровня ############
###### Заголовок шестого уровня

==Участники==
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
`,customKeymap:[],onTrackChanges:n=>console.info(n),mdProps:{onSearchMentions:async({query:n=""})=>new Promise(d=>{setTimeout(()=>{d([{name:"Group 1",id:e()},{name:"Group 2",id:e()},{name:"User 1",detailId:e(),detailLabel:"Space 1",id:"0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"},{name:"User 2",detailId:e(),detailLabel:"Space 1",id:"-1:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"}].filter(l=>n?l.name.indexOf(n)>-1:!0))},1e3)}),onSearchReference:async({query:n="",docId:d,versionId:l})=>new Promise(o=>{setTimeout(l?()=>{o([{label:"1",displayLabel:"Paragraph 1",id:e()},{label:"1.1",id:e()},{label:"1.1.1",id:e()},{label:"1.2",id:e()},{label:"1.3",id:e()},{label:"2",displayLabel:"Paragraph 2",id:e()},{label:"2.1",id:e()},{label:"2.2",id:e()}].filter(a=>n?a.label.indexOf(n)>-1:!0))}:d?()=>{o([{label:"1",displayLabel:"Version 1",id:e()},{label:"2",displayLabel:"Version 2",id:e()}].filter(a=>n?a.label.indexOf(n)>-1:!0))}:()=>{o([{label:"doc1",id:e()},{label:"doc2",id:e()},{label:"doc3",id:e()}].filter(a=>n?a.label.indexOf(n)>-1:!0))},1e3)})},onPaste:console.log},render:n=>{const[d,l]=i.useState(n.content),o=a=>{l(a),n.onTrackChanges?.(a)};return c.jsx(t,{...n,content:d,onTrackChanges:o})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    editable: true,
    placeholderText: "Enter markdown here ...",
    content: \`
# Заголовок первого уровня
## Заголовок второго уровня ##
### Заголовок третьего уровня
#### Заголовок четвёртого уровня #
##### Заголовок пятого уровня ############
###### Заголовок шестого уровня

==Участники==
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
}`,...r.parameters?.docs?.source}}};const x=["Base"];export{r as Base,x as __namedExportsOrder,g as default};
