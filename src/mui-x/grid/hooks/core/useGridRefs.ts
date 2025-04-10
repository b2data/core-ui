import * as React from "react";
import { RefObject } from "@mui/x-internals/types";
import type { GridPrivateApiCommon } from "../../models/api/gridApiCommon";

export const useGridRefs = <PrivateApi extends GridPrivateApiCommon>(
  apiRef: RefObject<PrivateApi>,
) => {
  const rootElementRef = React.useRef<HTMLDivElement>(null);
  const mainElementRef = React.useRef<HTMLDivElement>(null);
  const virtualScrollerRef = React.useRef<HTMLDivElement>(null);
  const virtualScrollbarVerticalRef = React.useRef<HTMLDivElement>(null);
  const virtualScrollbarHorizontalRef = React.useRef<HTMLDivElement>(null);
  const columnHeadersContainerRef = React.useRef<HTMLDivElement>(null);

  apiRef.current.register("public", {
    rootElementRef,
  });

  apiRef.current.register("private", {
    mainElementRef,
    virtualScrollerRef,
    virtualScrollbarVerticalRef,
    virtualScrollbarHorizontalRef,
    columnHeadersContainerRef,
  });
};
