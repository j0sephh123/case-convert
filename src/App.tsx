import { useMemo, useState, useCallback } from "react";
import { SetValue } from "./types";
import Textarea from "./components/Textarea/Textarea";
import * as transformers from "./transformers/transformers";

export default function App() {
  const [value, dispatchSetValue] = useState("");
  const setValue: SetValue = (newValue) => dispatchSetValue(newValue);

  const handleTransformToUpperCase = useCallback(() => {
    setValue((prevValue) => transformers.toUpperCase(prevValue));
  }, []);

  const handleTransformToLowerCase = useCallback(() => {
    setValue((prevValue) => transformers.toLowerCase(prevValue));
  }, []);

  const transformersList = useMemo(
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

  return (
    <div className="p-8">
      <h1 className="text-3xl font-extrabold">Case Converter</h1>
      <div className="flex mt-10 justify-center">
        <Textarea value={value} onChange={setValue} />
      </div>
      <div className="flex justify-between mt-3 ml-4 mr-4">
        <div className="join gap-3">
          {transformersList.map(({ label, onClick }) => (
            <button
              key={label}
              onClick={onClick}
              className="btn btn-neutral normal-case"
            >
              {label}
            </button>
          ))}
        </div>
        <button onClick={() => setValue("")} className="btn">
          Reset
        </button>
      </div>
    </div>
  );
}
