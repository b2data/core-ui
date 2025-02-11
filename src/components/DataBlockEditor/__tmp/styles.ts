//       sx={({ typography, palette }) => ({
  //         width: 1,
  //         minHeight: "inherit",
  //         lineHeight: 1.5,
  //         bgcolor: "background.paper",
  //         p: 1.5,
  //         display: "inline",
  //         " .formatting": {
  //           display: "none",
  //           whiteSpace: "break-spaces",
  //           textDecoration: "inherit",
  //         },

  //         "&:focus-within .formatting": {
  //           display: editable ? "inline-block" : "none",
  //         },

  //         "&[contentEditable=true]:empty::before": {
  //           position: "absolute",
  //           content: "attr(data-placeholder)",
  //           color: "text.disabled",
  //         },

  //         "&[contentEditable=true]:empty::after": {
  //           content: `"\feff"`,
  //         },
  //         "& ul, & ol": { m: 0, paddingLeft: "20px", listStyle: "none" },
  //         "& .inline-code, & .inline-variable": {
  //           borderRadius: "4px",
  //           fontSize: "0.85rem",
  //           padding: "0.1em",
  //           bgcolor: "grey.100",
  //           color: "grey.600",
  //         },
  //         "& .inline-strikethrough .formatting": { textDecoration: "none" },
  //         "& .inline-highlight": { bgcolor: "rgba( 255, 208, 0 , 0.4)" },
  //         "& .inline-bold": { fontWeight: "bold" },
  //         "& .inline-italic": { fontStyle: "italic" },
  //         "& .inline-underline .formatting": {
  //           fontFamily: "monospace",
  //           textDecoration: "none",
  //         },
  //         "& .block-code": {
  //           borderLeft: "4px solid",
  //           borderColor: "primary.main",
  //           bgcolor: "grey.100",
  //           overflowX: "auto",
  //           p: 4,
  //           position: "relative",
  //           "&:after": {
  //             content: "attr(data-lang)",
  //             position: "absolute",
  //             right: 6,
  //             top: 6,
  //             zIndex: 1,
  //             padding: "4px 8px",
  //             borderRadius: "4px",
  //             fontSize: "0.85rem",
  //             color: "text.disabled",
  //           },
  //           "& pre": { p: 0, m: 0 },
  //           "& pre > .content": { display: "block" },
  //         },
  //         "&:focus-within .block-code:after": editable
  //           ? { content: "none" }
  //           : {},
  //         "& .block-hr": {
  //           "& hr": {
  //             m: "10px 0",
  //             borderColor: "grey.500",
  //             borderStyle: "solid",
  //           },
  //           "& .formatting": {
  //             position: "relative",
  //             "&:after": {
  //               position: "absolute",
  //               content: `" "`,
  //               left: 20,
  //               top: 13,
  //               height: "1px",
  //               right: 0,
  //               bgcolor: "grey.500",
  //             },
  //           },
  //         },
  //         "&:focus-within .block-hr": {
  //           "& hr": { display: "none" },
  //           "& .formatting": { display: "block" },
  //         },
  //         "& .block-text": {
  //           ...typography.body1,
  //           lineHeight: "inherit",
  //           m: 0,
  //         },
  //         "& .block-h1": { ...typography.h1, lineHeight: "inherit", m: 0 },
  //         "& .block-h2": { ...typography.h2, lineHeight: "inherit", m: 0 },
  //         "& .block-h3": { ...typography.h3, lineHeight: "inherit", m: 0 },
  //         "& .block-h4": { ...typography.h4, lineHeight: "inherit", m: 0 },
  //         "& .block-h5": { ...typography.h5, lineHeight: "inherit", m: 0 },
  //         "& .block-h6": { ...typography.h6, lineHeight: "inherit", m: 0 },

  //         "& .block-list-item": {
  //           position: "relative",
  //           "& .block-text": { display: "inline" },
  //           "& .inline-checkbox": { fontFamily: "system-ui" },
  //           "& > .formatting-bullet": {
  //             position: "relative",
  //             display: "inline-flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           },
  //           "&  .inline-checkbox .content": {
  //             width: "1em",
  //             height: "1em",
  //             verticalAlign: "sub",
  //           },
  //           "& .inline-checkbox .content-checked": {
  //             fill: palette.primary.main,
  //           },
  //         },
  //         "&:not(:focus-within) .block-list-item": {
  //           "& > .formatting-bullet:after": {
  //             position: "absolute",
  //             content: '"\u200B"',
  //             pointerEvents: "none",
  //             bgcolor: "currentColor",
  //             borderRadius: "50%",
  //             width: "0.2em",
  //             height: "0.2em",
  //             left: 0,
  //           },
  //         },
  //         "&:focus-within .block-list-item": {
  //           "& .inline-checkbox .content": { display: "none" },
  //         },
  //         "& .inline-link": {
  //           color: "inherit",
  //           textDecoration: "none",
  //           wordBreak: "break-all",
  //         },
  //         "&:focus-within .inline-link": {
  //           "& .formatting": { display: "inline" },
  //         },
  //         "& .inline-mention": {
  //           display: "inline-flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           whiteSpace: "nowrap",
  //           cursor: "unset",
  //           textDecoration: "none",
  //           verticalAlign: "middle",
  //           "&:not([data-id=''])[data-avatar='']": {},
  //           "&:not([data-avatar='']):before": {
  //             content: "' '",
  //             display: "inline-block",
  //             width: 18,
  //             height: 18,
  //             backgroundImage: "var(--avatar-url)",
  //             backgroundColor: palette.grey[200],
  //             backgroundRepeat: "no-repeat",
  //             backgroundPosition: "center",
  //             backgroundSize: "cover",
  //             borderRadius: "50%",
  //             ml: "2px",
  //           },
  //         },
  //         "&:not(:focus-within) .inline-mention": {
  //           "& .content": {
  //             overflow: "hidden",
  //             textOverflow: "ellipsis",
  //             whiteSpace: "nowrap",
  //           },
  //           "&:not([data-avatar='']) .content": { pl: 1 },
  //         },
  //         "& .inline-reference": {
  //           color: "inherit",
  //           textDecoration: "none",
  //           wordBreak: "break-all",
  //         },
  //         "&:focus-within .inline-reference": {
  //           "& .formatting": { display: "inline" },
  //         },
  //       })}