import { Tag, tags } from "@lezer/highlight";

export const highlightTag = Tag.define("highlight", tags.emphasis);

export const strikethroughTag = Tag.define("strikethrough", tags.strikethrough);

export const strongTag = Tag.define("strong", tags.strong);

export const italicTag = Tag.define("italic", tags.emphasis);

export const inlineCodeTag = Tag.define("inlineCode", tags.emphasis);

export const variableTag = Tag.define("variable", tags.emphasis);

export const underlineTag = Tag.define("underline", tags.emphasis);

export const codeblockTag = Tag.define("codeblock", tags.monospace);

export const Punctuation =
  // eslint-disable-next-line
  /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;
