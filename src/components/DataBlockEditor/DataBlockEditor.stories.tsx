import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useRef, useState } from "react";
import { Element as MdElement } from "@lezer/markdown";
import { Decoration, WidgetType } from "@codemirror/view";

import { uuid } from "../../hooks";
import { HeadingIcon, TextIcon } from "../../icons";
import { ListItem } from "../ListItem";
import { Popper } from "../Popper";
import { parseInlineMention, processMentionDecoration } from "../DataBlock";

import { DataBlockEditor } from "./DataBlockEditor";
import {
  DataBlockEditorApi,
  DataBlockEditorProps,
  DataBlockEditorPublicAction,
  SendDataBlockEditorUpdates,
} from "./models";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<DataBlockEditorProps> = {
  title: "Components/Data Block/Data Block Editor",
  component: DataBlockEditor,
  tags: ["autodocs"],
};

export default meta;

const createdByData = { id: "user1", firstName: "Demo ", lastName: "user" };

const def = Array.from(new Array(10)).map(() => ({
  id: uuid(),
  type: "text",
  offset: 0,
  variants: [
    {
      id: uuid(),
      data: { text: "Hello, World!" },
      isCurrent: true,
      votes: [],
      createdBy: "user1",
      createdByData: { id: "user1", firstName: "John" },
    },
    {
      id: uuid(),
      data: { text: "Hello, World!" },
      isCurrent: false,
      votes: [],
      createdBy: "user2",
      createdByData: { id: "user2", firstName: "Maria" },
    },
  ],
}));

export const Base: StoryObj<DataBlockEditorProps> = {
  args: {
    editable: true,
    currentUser: { id: "user2", firstName: "Maria" },
    tools: {},
    blocks: [
      {
        id: "1",
        type: "text",
        offset: 0,
        variants: [
          {
            id: "11",
            data: {
              text: "> [!sign]\n> 1. @User 1#Space 1|0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef#a41b8b6c-c75f-4ee3-9c19-1d41dc157f96\n> 2. @User 2#Space 1|-1:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef#12979c75-d5b9-4759-9060-b7a41dc76ea8",
            },
            isCurrent: true,
            votes: [],
            createdBy: "user1",
            createdByData: { id: "user1", firstName: "John 1" },
          },
          {
            id: "12",
            data: { text: "Hello, World!" },
            isCurrent: false,
            votes: [],
            createdBy: "user2",
            createdByData: { id: "user2", firstName: "Maria" },
          },
        ],
      },
      {
        id: "2",
        type: "header",
        offset: 0,
        variants: [
          {
            id: "22",
            data: { text: "```js \nconst a = 1;\n```" },
            isCurrent: true,
            votes: [],
            createdBy: "user1",
            createdByData: { id: "user1", firstName: "John" },
          },
        ],
      },
      {
        id: "3",
        type: "text",
        offset: 0,
        variants: [
          {
            id: "22",
            data: {
              text:
                '[Duck Duck Go](https://duckduckgo.com "The best search engine for privacy") Strange idea! @nice|shot|good@. Really?\n\n' +
                "@nice|123|https://market.b2p.space/api/files/8646013d-5a03-4a9a-a0eb-da774adc0b95@\n\n@nice|123|@\n\n@nice@ test me\n\n" +
                "[[Правила кооператива_v2_п.2.1|123_345_566]]",
            },
            isCurrent: true,
            votes: [],
            createdBy: "user1",
            createdByData: { id: "user3", firstName: "John" },
          },
        ],
      },
      {
        id: "4",
        type: "heading",
        offset: 0,
        variants: [
          {
            id: "22",
            data: {
              text: "## Heading 2",
              level: 2,
            },
            isCurrent: true,
            votes: [],
            createdBy: "user3",
            createdByData: { id: "user3", firstName: "John" },
          },
        ],
      },
      {
        id: "5",
        type: "text",
        offset: 0,
        variants: [
          {
            id: "22",
            data: {
              text: "Monday **10**. ==Nice shot and the **shot** is good!== How are you? Nice ==day",
            },
            isCurrent: true,
            votes: [],
            createdBy: "user1",
            createdByData: { id: "user3", firstName: "John" },
          },
        ],
      },
      ...def,
    ],
  },
  render: (props) => {
    const ref = useRef<DataBlockEditorApi>(null);
    const [headEl, setHeadEl] = useState<HTMLElement | null>(null);

    const handleChange = ({ action, data }: SendDataBlockEditorUpdates) => {
      setTimeout(() => {
        switch (action) {
          case DataBlockEditorPublicAction.AddBlock:
            ref.current?.updateData({
              action,
              data: {
                index: data.index,
                block: {
                  ...data.block,
                  createdByData,
                  variants: data.variant
                    ? [{ ...data.variant, createdByData, votes: [] }]
                    : [],
                },
              },
            });
            break;
          case DataBlockEditorPublicAction.EditBlock:
            ref.current?.updateData({
              action,
              data: {
                block: {
                  ...data.block,
                  createdByData,
                  variants: data.variant
                    ? [{ ...data.variant, createdByData, votes: [] }]
                    : [],
                },
                variant: { ...data.variant, createdByData, votes: [] },
              },
            });
            break;
          case DataBlockEditorPublicAction.DeleteBlock:
            ref.current?.updateData({
              action,
              data: {
                blockId: data.blockId,
              },
            });
            break;
          case DataBlockEditorPublicAction.MoveBlock:
            ref.current?.updateData({
              action,
              data: {
                blockId: data.blockId,
                targetIndex: data.targetIndex,
              },
            });
            break;
          case DataBlockEditorPublicAction.AddVariant:
            ref.current?.updateData({
              action,
              data: {
                blockId: data.blockId,
                variant: { ...data.variant, createdByData, votes: [] },
              },
            });
            break;
          case DataBlockEditorPublicAction.EditVariant:
            ref.current?.updateData({
              action,
              data: {
                blockId: data.blockId,
                variant: { ...data.variant, createdByData, votes: [] },
              },
            });
            break;
          case DataBlockEditorPublicAction.DeleteVariant:
            ref.current?.updateData({
              action,
              data: {
                blockId: data.blockId,
                variantId: data.variantId,
              },
            });
            break;
        }
      }, 1000);
    };

    return (
      <div
        style={{
          background: "#f9f9f9",
          margin: "-40px -30px",
          padding: "40px 30px",
          height: 500,
          overflowY: "auto",
        }}
      >
        <DndProvider backend={HTML5Backend}>
          <DataBlockEditor
            {...props}
            ref={ref}
            onChange={handleChange}
            tools={{
              text: {
                title: "Text",
                icon: TextIcon,
                shortcut: ["CMD"],
              },
              heading: {
                title: "Header",
                defaultValue: "# ",
                icon: HeadingIcon,
                renderMenu: ({ variant }) => (
                  <>
                    <ListItem
                      asButton
                      icon={<HeadingIcon />}
                      onClick={(e) => setHeadEl(e.currentTarget)}
                      text={
                        <>Header {variant.data.text.split(" ")[0].length}</>
                      }
                    />
                    <Popper open={Boolean(headEl)} anchorEl={headEl}>
                      TODO SELECT HEADER LEVEL
                    </Popper>
                  </>
                ),
              },
              sign: {
                title: "Signature",
                icon: HeadingIcon,
                defaultValue: "> [!sign]\n> 1. ",
                renderMenu: () => <>TODO</>,
              },
            }}
            mdProps={{
              onSearchMentions: async ({ query = "" }) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(
                      [
                        {
                          name: `User 1`,
                          detailId: uuid(),
                          detailLabel: "Space 1",
                          id: "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
                        },
                        {
                          name: `User 2`,
                          detailId: uuid(),
                          detailLabel: "Space 1",
                          id: "-1:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
                        },
                      ].filter((o) =>
                        !query ? true : o.name.indexOf(query) > -1,
                      ),
                    );
                  }, 1000);
                });
              },
              onSearchReference: async ({ query = "" }) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(
                      [
                        {
                          label: `Doc 1`,
                          id: uuid(),
                        },
                        {
                          label: `Doc 2`,
                          id: uuid(),
                        },
                      ].filter((o) =>
                        !query ? true : o.label.indexOf(query) > -1,
                      ),
                    );
                  }, 1000);
                });
              },
              decorations: [
                (node, append, cursorPos, view) => {
                  if (node.name === "Signature") {
                    const { state, hasFocus } = view;

                    const isActive =
                      node &&
                      cursorPos.from >= node.from &&
                      cursorPos.to <= node.to &&
                      !state.readOnly &&
                      hasFocus;

                    const cursor = node.node.cursor();

                    if (cursor.firstChild()) {
                      append(
                        Decoration.line({
                          class: `cm-blockquote${isActive ? " cm-blockquote-indent" : ""}`,
                        }).range(cursor.from),
                      );

                      if (!isActive) {
                        append(
                          Decoration.replace({
                            widget: new (class extends WidgetType {
                              toDOM() {
                                const span = document.createElement("span");
                                span.textContent = "🖊 Подписанты";
                                span.style.fontSize = "1.2rem";
                                return span;
                              }
                            })(),
                          }).range(cursor.from, cursor.to),
                        );
                      } else {
                        append(
                          Decoration.mark({
                            class: `cm-blockquote-mark${!isActive ? " cm-formatting" : ""}`,
                          }).range(cursor.from, cursor.from + 2),
                        );
                      }

                      cursor.nextSibling();

                      do {
                        if (cursor.name === "SignatureLine") {
                          append(
                            Decoration.line({
                              class: `cm-blockquote${isActive ? " cm-blockquote-indent" : ""}`,
                            }).range(cursor.from),
                          );

                          append(
                            Decoration.mark({
                              class: `cm-blockquote-mark${!isActive ? " cm-formatting" : ""}`,
                            }).range(cursor.from, cursor.from + 2),
                          );

                          const mention = cursor.node.cursor();

                          if (mention.firstChild()) {
                            processMentionDecoration(
                              mention.node,
                              append,
                              cursorPos,
                              view,
                            );
                          }
                        }

                        // process each immediate child of the CodeBlock node
                      } while (cursor.nextSibling());
                    }

                    return false;
                  }
                },
              ],
              parsers: [
                {
                  defineNodes: [
                    {
                      name: "Signature",
                    },
                    {
                      name: "SignatureLine",
                    },
                  ],
                  parseBlock: [
                    {
                      name: "Signature",
                      endLeaf(_, line) {
                        return line.text
                          .slice(line.pos)
                          .trim()
                          .startsWith("> ");
                      },
                      parse: (cx, line) => {
                        if (!line.text.startsWith("> [!sign]")) {
                          return false;
                        }

                        const children: MdElement[] = [];

                        children.push(
                          cx.elt(
                            "SignatureLine",
                            cx.lineStart,
                            cx.lineStart + line.text.length,
                          ),
                        );

                        let nextLine = cx.peekLine();

                        while (cx.nextLine()) {
                          if (!nextLine.startsWith("> ")) {
                            cx.nextLine();
                            break;
                          }

                          const userData =
                            nextLine.indexOf("@") > -1
                              ? parseInlineMention(
                                  cx.elt.bind(cx),
                                  nextLine.indexOf("@") + 1,
                                  nextLine,
                                  cx.lineStart,
                                )
                              : null;

                          const child = userData
                            ? [
                                cx.elt(
                                  "MentionData",
                                  userData[0].from,
                                  userData[userData.length - 1].to,
                                  userData,
                                ),
                              ]
                            : undefined;

                          children.push(
                            cx.elt(
                              "SignatureLine",
                              cx.lineStart,
                              cx.lineStart + nextLine.length,
                              child,
                            ),
                          );

                          nextLine = cx.peekLine();
                        }

                        cx.addElement(
                          cx.elt(
                            "Signature",
                            children[0]?.from,
                            children[children.length - 1].to,
                            children,
                          ),
                        );

                        return false;
                      },
                      before: "Blockquote",
                    },
                  ],
                },
              ],
            }}
          />
        </DndProvider>
      </div>
    );
  },
};
