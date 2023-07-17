import { useState } from "react";
import { SetValue } from "./types";
import Textarea from "./components/Textarea/Textarea";
import Copy from "./components/Copy/Copy";
import * as transformers from "./transformers/transformers";

enum BUTTON_LABELS {
  UPPER_CASE = "UPPER CASE",
  LOWER_CASE = "lower case",
  SNAKE_CASE = "snake_case",
  PASCAL_CASE = "PascalCase",
  CAMEL_CASE = "camelCase",
}

const transformFuncs = {
  [BUTTON_LABELS.UPPER_CASE]: transformers.toUpperCase,
  [BUTTON_LABELS.LOWER_CASE]: transformers.toLowerCase,
  [BUTTON_LABELS.SNAKE_CASE]: transformers.toSnakeCase,
  [BUTTON_LABELS.PASCAL_CASE]: transformers.toPascalCase,
  [BUTTON_LABELS.CAMEL_CASE]: transformers.toCamelCase,
};

const controls = Object.entries(transformFuncs).map(
  ([label, transformFunc]) => ({
    label,
    onClick: (value: string, callback: SetValue) => {
      callback(transformFunc(value));
    },
  })
);

const copyText = (value: string) => {
  navigator.clipboard.writeText(value);
};

export default function App() {
  const [value, dispatchSetValue] = useState("");
  const setValue: SetValue = (newValue) => dispatchSetValue(newValue);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-extrabold">Case Converter</h1>
      <div className="flex mt-10 justify-center relative">
        <Copy onClick={() => copyText(value)} />
        <Textarea value={value} onChange={setValue} />
      </div>
      <div className="flex justify-between mt-3 ml-4 mr-4">
        <div className="join gap-3">
          {controls.map(({ label, onClick }) => (
            <button
              key={label}
              onClick={() => onClick(value, setValue)}
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
