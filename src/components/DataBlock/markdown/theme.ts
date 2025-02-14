import { EditorView } from "@codemirror/view";

export const markdownTheme = EditorView.theme(
  {
    "&": {
      fontSize: "1rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      letterSpacing: "-0.015em",
      lineHeight: 1.5,
    },

    "&.cm-focused": {
      outline: "#2684FF auto 1px",
    },

    ".cm-activeLine": {
      backgroundColor: "transparent",
    },

    ".cm-scroller": {
      fontFamily: "inherit",
      lineHeight: "inherit",
      overflow: "hidden",
    },

    ".cm-content": {
      caretColor: "currentColor",
      minHeight: "unset",
      padding: 0,
      lineHeight: "inherit",
      whiteSpace: "break-spaces",
      wordBreak: "break-word",
      overflowWrap: "anywhere",
      flexShrink: 1,
    },

    ".cm-heading-1": {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "1.802rem",
      margin: 0,
    },

    ".cm-heading-2": {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "1.602rem",
      margin: 0,
    },

    ".cm-heading-3": {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1.424rem",
      margin: 0,
    },

    ".cm-heading-4": {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1.266rem",
      margin: 0,
    },

    ".cm-heading-5": {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1.125rem",
      margin: 0,
    },

    ".cm-heading-6": {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "1rem",
      margin: 0,
    },

    ".cm-italic": {
      fontStyle: "italic",
    },

    ".cm-strong": {
      fontWeight: 500,
    },

    ".cm-monospace": {
      fontFamily: "monospace",
      borderRadius: "4px",
      fontSize: "0.85rem",
      padding: "0.1em",
      backgroundColor: "#f5f5f5",
      color: "#616161",
    },

    ".cm-strikethrough": {
      textDecoration: "line-through",
    },

    ".cm-underline": {
      textDecoration: "underline",
    },

    ".cm-highlight": {
      backgroundColor: "rgba( 255, 208, 0 , 0.4)",
    },

    ".cm-bracket": {},

    ".cm-link": {},

    ".cm-separator": {},

    ".cm-formatting": {
      display: "none",
    },

    ".cm-codeblock": {
      position: "relative",
      fontFamily: "monospace",
      backgroundColor: "#f5f5f5",
      color: "#616161",
      // paddingLeft: "20px",
      padding: "0 8px",
      margin: "0 2px",
      fontSize: "0.85rem",

      "&.cm-codeblock-start": {
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
        marginTop: "2px",
      },

      "&.cm-codeblock-end": {
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
        marginBottom: "2px",
      },
    },

    ".cm-codeblock-lang": {
      position: "absolute",
      right: "6px",
      top: "6px",
      zIndex: 1,
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "12px",
      color: "#616161",
      cursor: "default",

      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.075)",
      },
    },

    ".cm-list-bullet": {
      color: "#616161",
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",

      "& *": {
        display: "none",
      },

      "&::after": {
        position: "absolute",
        content: '"\u200B"',
        pointerEvents: "none",
        backgroundColor: "currentColor",
        borderRadius: "50%",
        width: "0.3em",
        height: "0.3em",
        left: 0,
      },
    },

    ".cm-list-task": {
      fontFamily: "monospace",

      "& svg": {
        width: "1em",
        height: "1em",
        verticalAlign: "sub",
      },

      "&.cm-list-task-completed": {
        fill: "#2684FF",
      },
    },

    ".cm-hr": {
      position: "relative",
      overflow: "hidden",
      textIndent: "-9999px",

      "&::after": {
        position: "absolute",
        content: "' '",
        top: "12px",
        left: "10px",
        right: "10px",
        background: "#9e9e9e",
        height: "1px",
      },
    },
    "&.cm-focused .cm-hr.cm-activeLine": {
      opacity: 1,
      textIndent: "0px",

      "&::after": {
        left: "25%",
      },
    },

    ".cm-blockquote": {
      paddingLeft: "12px",
      borderLeft: "2px solid #2684FF",
      margin: "0 2px",
    },

    ".cm-blockquote-indent": {
      textIndent: "-12px",
    },

    "& .cm-blockquote-mark": {
      color: "#9e9e9e",
    },

    ".cm-reference-invalid": {
      color: "#DE350B",
    },
  },
  {
    dark: false,
  },
);
