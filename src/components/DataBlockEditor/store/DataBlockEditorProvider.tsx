import {
  createContext,
  Dispatch,
  forwardRef,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useReducer,
} from "react";

import { useDeepEqualMemo } from "src/hooks";

import {
  DataBlockEditorApi,
  DataBlockEditorProps,
  DataBlockEditorState,
} from "../models";

import { DataBlockEditorAction, DataBlockEditorActions } from "./actions";
import {
  DataBlockEditorStateReducer,
  dataBlockEditorStateReducer,
  initialState,
} from "./reducer";

const DataBlockEditorContext = createContext<{
  state: DataBlockEditorState;
  dispatch: Dispatch<DataBlockEditorActions>;
}>({ state: initialState, dispatch: () => null });

const DataBlockEditorProvider = forwardRef<
  DataBlockEditorApi,
  PropsWithChildren<{ props: DataBlockEditorProps }>
>(({ children, props }, ref) => {
  const {
    editable,
    showPrefix,
    showVariants,
    showNavigation,
    showIndentOffset,
    canChangeVariants,
    currentUserId,
    getFilesUrl,
    i18n,
    blocks,
    tools,
    keymap,
    mdProps,
    onChange,
  } = props;

  const [state, dispatch] = useReducer<DataBlockEditorStateReducer>(
    dataBlockEditorStateReducer,
    { ...initialState, onChange },
  );

  useEffect(() => {
    if (i18n) {
      dispatch({
        action: DataBlockEditorAction.SetTranslations,
        data: { i18n },
      });
    }
  }, [useDeepEqualMemo(i18n)]);

  useEffect(() => {
    if (tools && Object.keys(tools).length) {
      dispatch({
        action: DataBlockEditorAction.SetTools,
        data: { tools },
      });
    }
  }, [tools]);

  useEffect(() => {
    if (typeof editable !== "undefined") {
      dispatch({
        action: DataBlockEditorAction.SetEditable,
        data: { editable },
      });
    }
  }, [editable]);

  useEffect(() => {
    if (typeof showPrefix !== "undefined") {
      dispatch({
        action: DataBlockEditorAction.SetShowPrefix,
        data: { showPrefix },
      });
    }
  }, [showPrefix]);

  useEffect(() => {
    if (typeof showVariants !== "undefined") {
      dispatch({
        action: DataBlockEditorAction.SetShowVariants,
        data: { showVariants },
      });
    }
  }, [showVariants]);

  useEffect(() => {
    if (typeof showNavigation !== "undefined") {
      dispatch({
        action: DataBlockEditorAction.SetShowNavigation,
        data: { showNavigation },
      });
    }
  }, [showNavigation]);

  useEffect(() => {
    if (typeof showIndentOffset !== "undefined") {
      dispatch({
        action: DataBlockEditorAction.SetShowIndentOffset,
        data: { showIndentOffset },
      });
    }
  }, [showIndentOffset]);

  useEffect(() => {
    if (typeof canChangeVariants !== "undefined") {
      dispatch({
        action: DataBlockEditorAction.SetCanChangeVariants,
        data: { canChangeVariants },
      });
    }
  }, [canChangeVariants]);

  useEffect(() => {
    if (currentUserId) {
      dispatch({
        action: DataBlockEditorAction.SetCurrentUserId,
        data: { currentUserId },
      });
    }
  }, [currentUserId]);

  useEffect(() => {
    if (Array.isArray(blocks)) {
      dispatch({
        action: DataBlockEditorAction.SetBlocks,
        data: { blocks },
      });
    }
  }, [useDeepEqualMemo(blocks)]);

  useEffect(() => {
    if (typeof getFilesUrl !== "undefined") {
      dispatch({
        action: DataBlockEditorAction.SetGetFilesUrl,
        data: { getFilesUrl },
      });
    }
  }, [getFilesUrl]);

  useEffect(() => {
    if (keymap) {
      dispatch({
        action: DataBlockEditorAction.SetKeymap,
        data: { keymap },
      });
    }
  }, [useDeepEqualMemo(keymap)]);

  useEffect(() => {
    if (mdProps) {
      dispatch({
        action: DataBlockEditorAction.SetMdProps,
        data: { mdProps },
      });
    }
  }, [useDeepEqualMemo(mdProps)]);

  useEffect(
    () => () => dispatch({ action: DataBlockEditorAction.Clear, data: {} }),
    [],
  );

  useImperativeHandle(
    ref,
    () => ({
      setFocused(index, focusedEnd) {
        dispatch({
          action: DataBlockEditorAction.SetFocused,
          data: { index, focusedEnd },
        });
      },
      updateData(data) {
        dispatch({
          action: DataBlockEditorAction.MergeUpdates,
          data,
        });
      },
      getState() {
        return state;
      },
    }),
    [dispatch],
  );

  return (
    <DataBlockEditorContext.Provider value={{ state, dispatch }}>
      {children}
    </DataBlockEditorContext.Provider>
  );
});

export { DataBlockEditorContext, DataBlockEditorProvider };
