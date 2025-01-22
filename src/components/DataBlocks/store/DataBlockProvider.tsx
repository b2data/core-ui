import React, {
  createContext,
  Dispatch,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useReducer,
} from "react";

import {
  DataBlockProps,
  DataBlockRef,
  DataBlockState,
} from "../model";

import { DataBlockAction, DataBlockActions } from "./actions";
import {
  DataBlockStateReducer,
  dataBlockEditorStateReducer,
  initialState,
} from "./reducer";

const DataBlockContext = createContext<{
  state: DataBlockState;
  dispatch: Dispatch<DataBlockActions>;
}>({ state: initialState, dispatch: () => null });

const DataBlockProvider = forwardRef<
  DataBlockRef,
  React.PropsWithChildren<DataBlockProps>
>((props, ref) => {
  const {
    children,
    editable,
    showPrefix,
    showVariants,
    canChangeVariants,
    currentUserId,
    getFilesUrl,
    types,
    i18n,
    blocks,
    prefixes,
    onChange,
  } = props;

  const [state, dispatch] = useReducer<DataBlockStateReducer>(
    dataBlockEditorStateReducer,
    { ...initialState, onChange },
  );

  useEffect(() => {
    if (i18n) {
      dispatch({ action: DataBlockAction.SetTranslations, i18n });
    }
  }, [i18n]);

  useEffect(() => {
    if (Array.isArray(types)) {
      dispatch({ action: DataBlockAction.SetTypes, types });
    }
  }, [types]);

  useEffect(() => {
    if (typeof editable !== "undefined") {
      dispatch({ action: DataBlockAction.SetEditable, editable });
    }
  }, [editable]);

  useEffect(() => {
    if (typeof showPrefix !== "undefined") {
      dispatch({ action: DataBlockAction.SetShowPrefix, showPrefix });
    }
  }, [showPrefix]);

  useEffect(() => {
    if (typeof showVariants !== "undefined") {
      dispatch({ action: DataBlockAction.SetShowVariants, showVariants });
    }
  }, [showVariants]);

  useEffect(() => {
    if (typeof canChangeVariants !== "undefined") {
      dispatch({
        action: DataBlockAction.SetCanChangeVariants,
        canChangeVariants,
      });
    }
  }, [canChangeVariants]);

  useEffect(() => {
    if (currentUserId) {
      dispatch({
        action: DataBlockAction.SetCurrentUserId,
        currentUserId,
      });
    }
  }, [currentUserId]);

  useEffect(() => {
    if (Array.isArray(blocks)) {
      dispatch({ action: DataBlockAction.SetBlocks, blocks });
    }
  }, [blocks]);

  useEffect(() => {
    if (typeof getFilesUrl !== "undefined") {
      dispatch({ action: DataBlockAction.SetGetFilesUrl, getFilesUrl });
    }
  }, [getFilesUrl]);

  useEffect(() => {
    if (prefixes) {
      dispatch({ action: DataBlockAction.SetPrefixes, prefixes });
    }
  }, [prefixes]);

  useEffect(() => () => dispatch({ action: DataBlockAction.Clear }), []);

  useImperativeHandle(
    ref,
    () => ({
      setFocused(index?: number) {
        dispatch({
          action: DataBlockAction.SetFocused,
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
    <DataBlockContext.Provider value={{ state, dispatch }}>
      {children}
    </DataBlockContext.Provider>
  );
});

export { DataBlockContext, DataBlockProvider };
