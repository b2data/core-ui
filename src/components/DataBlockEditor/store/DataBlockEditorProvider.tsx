import {
  createContext,
  Dispatch,
  forwardRef,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useReducer,
} from "react";

import { useDeepEqualMemo } from "../../../hooks";
import {
  DataBlockEditorApi,
  DataBlockEditorProps,
  DataBlockEditorState,
} from "../models";

import {
  DataBlockEditorActions,
  DataBlockEditorPrivateAction,
} from "./actions";
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
    currentUser,
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
    { ...initialState, onChange, getFilesUrl },
  );

  useEffect(() => {
    if (i18n) {
      dispatch({
        action: DataBlockEditorPrivateAction.SetTranslations,
        data: { i18n },
      });
    }
  }, [i18n]);

  useEffect(() => {
    if (tools && Object.keys(tools).length) {
      dispatch({
        action: DataBlockEditorPrivateAction.SetTools,
        data: { tools },
      });
    }
  }, [useDeepEqualMemo(tools)]);

  useEffect(() => {
    if (typeof editable !== "undefined") {
      dispatch({
        action: DataBlockEditorPrivateAction.SetEditable,
        data: { editable },
      });
    }
  }, [editable]);

  useEffect(() => {
    if (typeof showPrefix !== "undefined") {
      dispatch({
        action: DataBlockEditorPrivateAction.SetShowPrefix,
        data: { showPrefix },
      });
    }
  }, [showPrefix]);

  useEffect(() => {
    if (typeof showVariants !== "undefined") {
      dispatch({
        action: DataBlockEditorPrivateAction.SetShowVariants,
        data: { showVariants },
      });
    }
  }, [showVariants]);

  useEffect(() => {
    if (typeof showNavigation !== "undefined") {
      dispatch({
        action: DataBlockEditorPrivateAction.SetShowNavigation,
        data: { showNavigation },
      });
    }
  }, [showNavigation]);

  useEffect(() => {
    if (typeof showIndentOffset !== "undefined") {
      dispatch({
        action: DataBlockEditorPrivateAction.SetShowIndentOffset,
        data: { showIndentOffset },
      });
    }
  }, [showIndentOffset]);

  useEffect(() => {
    if (typeof canChangeVariants !== "undefined") {
      dispatch({
        action: DataBlockEditorPrivateAction.SetCanChangeVariants,
        data: { canChangeVariants },
      });
    }
  }, [canChangeVariants]);

  useEffect(() => {
    if (currentUser) {
      dispatch({
        action: DataBlockEditorPrivateAction.SetCurrentUser,
        data: { currentUser },
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(blocks)) {
      dispatch({
        action: DataBlockEditorPrivateAction.SetBlocks,
        data: { blocks },
      });
    }
  }, [blocks]);

  useEffect(() => {
    if (keymap) {
      dispatch({
        action: DataBlockEditorPrivateAction.SetKeymap,
        data: { keymap },
      });
    }
  }, [useDeepEqualMemo(keymap)]);

  useEffect(() => {
    if (mdProps) {
      dispatch({
        action: DataBlockEditorPrivateAction.SetMdProps,
        data: { mdProps },
      });
    }
  }, [
    mdProps?.i18n,
    useDeepEqualMemo(mdProps?.decorations),
    useDeepEqualMemo(mdProps?.parsers),
  ]);

  useEffect(
    () => () =>
      dispatch({ action: DataBlockEditorPrivateAction.Clear, data: {} }),
    [],
  );

  useImperativeHandle(
    ref,
    () => ({
      setFocused(index, focusedEnd) {
        dispatch({
          action: DataBlockEditorPrivateAction.SetFocused,
          data: { index, focusedEnd },
        });
      },
      updateData(data) {
        dispatch({
          action: DataBlockEditorPrivateAction.MergeUpdates,
          data,
        });
      },
      getState() {
        return { ...state };
      },
    }),
    [dispatch, state],
  );

  return (
    <DataBlockEditorContext.Provider value={{ state, dispatch }}>
      {children}
    </DataBlockEditorContext.Provider>
  );
});

export { DataBlockEditorContext, DataBlockEditorProvider };
