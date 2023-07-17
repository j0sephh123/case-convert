import { useCallback, useMemo } from "react";
import { SetValue } from "../types";
import * as transformers from "../transformers/transformers";

export default function useGetControls(setValue: SetValue) {
  const handleTransformToUpperCase = useCallback(() => {
    setValue((prevValue) => transformers.toUpperCase(prevValue));
  }, [setValue]);

  const handleTransformToLowerCase = useCallback(() => {
    setValue((prevValue) => transformers.toLowerCase(prevValue));
  }, [setValue]);

  const controls = useMemo(
    () => [
      {
        label: "UPPER CASE",
        onClick: handleTransformToUpperCase,
      },
      {
        onClick: handleTransformToLowerCase,
        label: "lower case",
      },
    ],
    [handleTransformToLowerCase, handleTransformToUpperCase]
  );

  return controls;
}
