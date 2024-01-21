import React, {
  createContext,
  Dispatch,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useReducer,
} from "react";

import {
  DataBlockEditorProps,
  DataBlockEditorRef,
  DataBlockEditorState,
} from "../model";

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
  DataBlockEditorRef,
  React.PropsWithChildren<DataBlockEditorProps>
>((props, ref) => {
  const {
    children,
    editable,
    showPrefix,
    showVariants,
    canChangeVariants,
    currentUserId,
    types,
    i18n,
    blocks,
    prefixes,
    onChange,
  } = props;

  const [state, dispatch] = useReducer<DataBlockEditorStateReducer>(
    dataBlockEditorStateReducer,
    { ...initialState, onChange },
  );

  useEffect(() => {
    if (i18n) {
      dispatch({ action: DataBlockEditorAction.SetTranslations, i18n });
    }
  }, [i18n]);

  useEffect(() => {
    if (Array.isArray(types)) {
      dispatch({ action: DataBlockEditorAction.SetTypes, types });
    }
  }, [types]);

  useEffect(() => {
    if (typeof editable !== "undefined") {
      dispatch({ action: DataBlockEditorAction.SetEditable, editable });
    }
  }, [editable]);

  useEffect(() => {
    if (typeof showPrefix !== "undefined") {
      dispatch({ action: DataBlockEditorAction.SetShowPrefix, showPrefix });
    }
  }, [showPrefix]);

  useEffect(() => {
    if (typeof showVariants !== "undefined") {
      dispatch({ action: DataBlockEditorAction.SetShowVariants, showVariants });
    }
  }, [showVariants]);

  useEffect(() => {
    if (typeof canChangeVariants !== "undefined") {
      dispatch({
        action: DataBlockEditorAction.SetCanChangeVariants,
        canChangeVariants,
      });
    }
  }, [canChangeVariants]);

  useEffect(() => {
    if (currentUserId) {
      dispatch({
        action: DataBlockEditorAction.SetCurrentUserId,
        currentUserId,
      });
    }
  }, [currentUserId]);

  useEffect(() => {
    if (Array.isArray(blocks)) {
      dispatch({ action: DataBlockEditorAction.SetBlocks, blocks });
    }
  }, [blocks]);

  useEffect(() => {
    if (prefixes) {
      dispatch({ action: DataBlockEditorAction.SetPrefixis, prefixes });
    }
  }, [prefixes]);

  useEffect(() => () => dispatch({ action: DataBlockEditorAction.Clear }), []);

  useImperativeHandle(
    ref,
    () => ({
      setFocused(index?: number) {
        dispatch({
          action: DataBlockEditorAction.SetFocused,
          index,
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
