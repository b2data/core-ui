import { marked } from "marked";

// https://www.npmjs.com/package/marked-base-url

const highlightRegExp = /==[^\s=](?:[^=]*=?[^=]*)[^\s=]==|==[^\s=].*$/;
const underlineRegExp = /<(u|s)>([^<]+)<\/(u|s)>/;
const variableRegExp = /{[^}]+}/;
const mentionRegExp = /@[^@]+@/;
const referenceRegExp = /\[\[[^\]]+\]\]/;

marked.use({
  async: false,
  breaks: true,
  gfm: true,
  renderer: {
    space() {
      return "";
    },
    code({ text, lang }) {
      return `<div class="block block-code highlight-${lang}" data-lang="${lang}"><pre><span class="formatting formatting-start">\`\`\`${lang}</span><span class="content">${text || "\n"}</span><span class="formatting formatting-end">\`\`\`</span></pre></div>\n`;
    },
    blockquote({ tokens }) {
      const body = this.parser.parseInline(tokens);
      return "&gt;&nbsp;" + body;

      return `<blockquote>\n${body}</blockquote>\n`;
    },
    html({ text }) {
      if (text === "<br>\n\n" || text === "<br>\n" || text === "<br>") {
        return `<p class="block block-text"><br></p>\n`;
      }
      return text;
    },
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const hash = "#".repeat(depth);

      return `<h${depth} class="block block-h${depth}"><span class="formatting">${hash} </span><span class="content">${text}</span></h${depth}>\n`;
    },
    hr({ raw }) {
      return `<div class="block block-hr"><hr><span class="formatting">${raw}</span></div>\n`;
    },
    list({ start, items }) {
      if (items.length === 1 && items[0].raw === "-") {
        return "-";
      }

      let body = "";
      let isRootNode = false;

      for (let j = 0; j < items.length; j++) {
        const item = items[j];
        if (start) {
          item.tokens.push({ type: "list_item_prefix", raw: `${start + j}. ` });
        }

        if (!item.tokens.find((t) => t.type === "list_item_depth")) {
          isRootNode = true;
        }

        body += this.listitem(item);
      }

      return `<ul class="block block-list${isRootNode ? " block-list-root" : ""}">${body}</ul>\n`;
    },
    listitem({ task, checked, text, tokens }) {
      if (!text) {
        return "";
      }

      let itemBody = "";

      const textToken = tokens.findIndex((t) => t.type === "text");
      const prefix = tokens.find((t) => t.type === "list_item_prefix")?.raw;

      if (prefix && tokens[textToken]?.type === "text") {
        tokens[textToken].text = prefix + tokens[textToken].text;
        if (tokens[textToken].tokens?.[0]?.type === "text") {
          tokens[textToken].tokens[0].text =
            prefix + tokens[textToken].tokens[0].text;
        }
      }

      const depth = Number(
        tokens.find((t) => t.type === "list_item_depth")?.raw || "0",
      );

      tokens.forEach((t) => {
        if (t.type === "list") {
          t.items.forEach((item: any) => {
            item.tokens.push({ type: "list_item_depth", raw: `${depth + 1}` });
          });
        }
      });

      if (task) {
        const checkbox = this.checkbox({ checked: !!checked });
        itemBody += checkbox + " ";
      }

      itemBody += this.parser.parse(tokens);

      return `<li class="block block-list-item"><span class="formatting-bullet">-&nbsp;</span>${itemBody}</li>\n`;
    },
    checkbox({ checked }) {
      return `<span class="inline-checkbox"><span class="formatting">${checked ? `[x]` : `[&ensp;]`}</span><svg class="content${checked ? " content-checked" : ""}" focusable="false" viewBox="0 0 24 24"><path d="${checked ? "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" : "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}"></path></svg></span>`;
    },
    paragraph({ tokens,raw }) {
      return `<p class="block block-text">${this.parser.parseInline(tokens)}</p>\n`;
    },
    table() {
      return "";
    },
    tablerow() {
      return "";
    },
    tablecell() {
      return "";
    },
    /**
     * span level renderer
     */
    strong({ tokens }) {
      return `<strong class="inline-bold"><span class="formatting">**</span><span class="content">${this.parser.parseInline(tokens)}</span><span class="formatting">**</span></strong>`;
    },
    em({ tokens }) {
      return `<em class="inline-italic"><span class="formatting">_</span><span class="content">${this.parser.parseInline(tokens)}</span><span class="formatting">_</span></em>`;
    },
    codespan({ text }) {
      return `<code class="inline-code"><span class="formatting">\`</span><span class="content">${text}</span><span class="formatting">\`</span></code>`;
    },
    br() {
      return "\n";
    },
    del({ tokens }) {
      return `<del class="inline-strikethrough"><span class="formatting">~~</span><span class="content">${this.parser.parseInline(tokens)}</span><span class="formatting">~~</span></del>`;
    },
    link({ href = "", title = "", tokens }) {
      return `<a class="inline-link" href="${href}" title="${title}"><span class="formatting">[</span><span class="content">${this.parser.parseInline(tokens)}</span><span class="formatting formatting-end">](${href}${title ? ` "${title}"` : ""})</span></a>`;
    },
    image() {
      return "";
    },
    text({ text }) {
      return text;
    },
  },
  extensions: [
    {
      name: "list_item_prefix",
      level: "inline",
      renderer() {
        return "";
      },
    },
    {
      name: "list_item_depth",
      level: "inline",
      renderer() {
        return "";
      },
    },
    {
      name: "mark",
      level: "inline",
      start(src) {
        return src.indexOf("==");
      },
      tokenizer(src) {
        const match = highlightRegExp.exec(src);

        if (
          match?.[0] &&
          (src.substring(0, 2) === "==" || src.substring(0, 3) === "==")
        ) {
          return {
            type: "mark",
            raw: match[0],
            text: match[0].replace(/^==|==$/g, ""),
            tokens: this.lexer.inlineTokens(match[0].replace(/^==|==$/g, "")),
          };
        }

        return undefined;
      },
      renderer(token) {
        const content = token.tokens
          ? this.parser.parseInline(token.tokens)
          : token.text;
        return `<mark class="inline-highlight"><span class="formatting">==</span>${content}${token.raw.endsWith("=") ? `<span class="formatting">==</span>` : ""}</mark>`;
      },
    },
    {
      name: "underline",
      level: "inline",
      start(src) {
        return src.indexOf("<u>");
      },
      tokenizer(src) {
        const match = underlineRegExp.exec(src);

        if (
          match?.[0] &&
          (src.substring(0, 3) === "<u>" || src.substring(0, 4) === " <u>")
        ) {
          return {
            type: "underline",
            raw: match[0],
            text: match[0].replace(/^<u>|<\/u>$/g, ""),
            tokens: this.lexer.inlineTokens(
              match[0].replace(/^<u>|<\/u>$/g, ""),
            ),
          };
        }
        return undefined;
      },
      renderer(token) {
        const content = token.tokens
          ? this.parser.parseInline(token.tokens)
          : token.text;
        return `<u class="inline-underline"><span class="formatting">&lt;u&gt;</span><span class="content">${content}</span><span class="formatting">&lt;/u&gt;</span></u>`;
      },
    },
    {
      name: "variable",
      level: "inline",
      start(src) {
        return src.indexOf("{");
      },
      tokenizer(src) {
        const match = variableRegExp.exec(src);

        if (
          match?.[0] &&
          (src.substring(0, 1) === "{" || src.substring(0, 2) === " {")
        ) {
          return {
            type: "variable",
            raw: match[0],
            text: match[0].replace(/^{|\}$/g, ""),
            tokens: this.lexer.inlineTokens(match[0].replace(/^{|\}$/g, "")),
          };
        }
        return undefined;
      },
      renderer(token) {
        return `<span class="inline-variable">{${token.text}}</span>`;
      },
    },
    {
      name: "mention",
      level: "inline",
      start(src) {
        return src.indexOf("@");
      },
      tokenizer(src) {
        const match = mentionRegExp.exec(src);

        if (
          match?.[0] &&
          (src.substring(0, 1) === "@" || src.substring(0, 2) === " @")
        ) {
          const text = match[0].replace(/@/g, "");
          return {
            type: "mention",
            raw: match[0],
            text: text.split("|")[0],
            id: text.split("|")[1],
            avatar: text.split("|")[2],
          };
        }
        return undefined;
      },
      renderer({ id = "", avatar = "", text }) {
        return `<span class="inline-mention" data-id="${id}" data-avatar="${avatar}" style="--avatar-url: url('${avatar}')"><span class="formatting">@</span><span class="content">${text}</span><span class="formatting">@</span></span>`;
      },
    },
    {
      name: "reference",
      level: "inline",
      start(src) {
        return src.indexOf("[[");
      },
      tokenizer(src) {
        const match = referenceRegExp.exec(src);

        if (
          match?.[0] &&
          (src.substring(0, 2) === "[[" || src.substring(0, 3) === "[[")
        ) {
          const text = match[0].replace(/^\[\[|\]\]$/g, "");
          const [label, ids] = text.split("|");

          const [name, version, block] = label.split("_");
          const [id, versionId, blockId] = (ids || "").split("_");

          return {
            type: "reference",
            raw: match[0],
            text: text.split("|")[0],
            name,
            version,
            block,
            id,
            versionId,
            blockId,
          };
        }

        return undefined;
      },
      renderer({
        text,
        name,
        version = "",
        block = "",
        id = "",
        versionId = "",
        blockId = "",
      }) {
        return `<a class="inline-reference" data-id="${id}" data-name="${name}" data-version-id="${versionId}" data-version="${version}" data-block-id="${blockId}" data-block="${block}"><span class="formatting">[[</span><span class="content">${text}</span><span class="formatting">]]</span></a>`;
      },
    },
  ],
});

// marked.use({
//   walkTokens(token) {
//     if (token.type !== "blockquote") return;

//     const matchedVariant = resolvedVariants.find(({ type }) =>
//       new RegExp(createSyntaxPattern(type)).test(token.text),
//     );

//     if (matchedVariant) {
//       const {
//         type: variantType,
//         icon,
//         title = ucfirst(variantType),
//         titleClassName = `${className}-title`,
//       } = matchedVariant;
//       const typeRegexp = new RegExp(createSyntaxPattern(variantType));

//       Object.assign(token, {
//         type: "alert",
//         meta: {
//           className,
//           variant: variantType,
//           icon,
//           title,
//           titleClassName,
//         },
//       });

//       const firstLine = token.tokens?.[0] as Tokens.Paragraph;
//       const firstLineText = firstLine.raw?.replace(typeRegexp, "");

//       if (firstLineText) {
//         const patternToken = firstLine.tokens[0] as Tokens.Text;

//         Object.assign(patternToken, {
//           raw: patternToken.raw.replace(typeRegexp, ""),
//           text: patternToken.text.replace(typeRegexp, ""),
//         });

//         if (firstLine.tokens[1]?.type === "br") {
//           firstLine.tokens.splice(1, 1);
//         }
//       } else {
//         token.tokens?.shift();
//       }
//     }
//   },
//   extensions: [
//     {
//       name: "alert",
//       level: "block",
//       renderer({ meta, tokens = [] }) {
//         let tmpl = `<div class="${meta.className} ${meta.className}-${meta.variant}">\n`;
//         tmpl += `<p class="${meta.titleClassName}">`;
//         tmpl += meta.icon;
//         tmpl += meta.title;
//         tmpl += "</p>\n";
//         tmpl += this.parser.parse(tokens);
//         tmpl += "</div>\n";

//         return tmpl;
//       },
//     },
//   ],
// });

export const formatHtml = (md: string) => {
  return marked.parse(md) as string;
};
