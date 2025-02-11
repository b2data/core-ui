import { EditorView } from "@codemirror/view";

import { MarkdownPluginI18n } from "../model";

export const getAutocompleteTheme = (i18n?: MarkdownPluginI18n) =>
  EditorView.baseTheme({
    ".cm-tooltip": {
      backgroundColor: "rgb(255, 255, 255)",
      transition: "boxShadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      borderRadius: "4px",
      border: "1px solid rgba(0, 0, 0, 0.12)",
      outline: "0px",
    },

    ".cm-tooltip.cm-tooltip-autocomplete": {
      "& > ul": {
        fontFamily: "inherit",
        padding: "4px 0px",
        maxHeight: "300px",

        "& > li": {
          padding: "6px 10px",
          userSelect: "none",
          verticalAlign: "middle",
          color: "inherit",
          fontSize: "12px",
          lineHeight: "1.2",
          display: "flex",
          alignItems: "center",
          minHeight: "36px",

          "&[aria-selected]": {
            background: "rgba(0, 0, 0, 0.12)",
            color: "inherit",
          },
        },

        "& > completion-section": {
          fontWeight: "500",
          fontSize: "14px",
          padding: "0 10px",
          border: "0",
          opacity: 1,
          minHeight: "36px",
          lineHeight: "36px",
        },
      },

      "& + .cm-tooltip-loading": {
        border: 0,
      },
    },

    ".cm-snippetField": {
      display: "none",
    },

    ".cm-completionMatchedText": {
      backgroundColor: "rgba( 255, 208, 0 , 0.4)",
      textDecoration: "none",
    },

    ".cm-completionDetail": {
      marginLeft: 0,
      fontStyle: "normal",
      fontSize: "10px",
    },

    ".cm-completionIcon": {
      display: "none",
    },

    ".cm-completionInfo": {
      display: "none",
    },

    ".cm-tooltip.cm-tooltip-loading": {
      color: "#2684FF",
      transform: "translate(1px, 60px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "150px",
      height: "40px",

      "& svg": {
        width: "30px",
        height: "30px",

        "& circle": {
          stroke: "currentColor",
          strokeDasharray: "80px, 200px",
          strokeDashoffset: 0,
          animation: "circularProgress 1.4s ease-in-out infinite",
        },
      },
    },

    ".cm-tooltip.cm-tooltip-autocomplete-slash": {
      "& > ul > li": {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "4px",
      },
    },

    ".cm-tooltip.cm-tooltip-autocomplete-reference": {
      "&::after": {
        content: `"${i18n?.referenceHint || "Syntax: Document Name # version # paragraph"}"`,
        whiteSpace: "pre",
        fontSize: "10px",
        color: "rgba(0, 0, 0, 0.54)",
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
        padding: "4px 10px",
        display: "flex",
      },
    },

    ".cm-tooltip.cm-tooltip-autocomplete-mention": {
      "& > ul > li": {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "2px",
      },
    },
  });
