import { clone, equals } from "ramda";
import { useRef } from "react";

export const useDeepEqualMemo = <T>(
  value: T,
  equalityCheck: (value: T, prev: T | undefined) => boolean = equals,
) => {
  const valueRef = useRef<T>(undefined);

  if (!equalityCheck(value, valueRef.current)) {
    valueRef.current = clone(value);
  }

  return valueRef.current;
};
