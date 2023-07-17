import { useState } from "react";
import { SetValue } from "./types";
import Textarea from "./components/Textarea/Textarea";

import Copy from "./components/Copy/Copy";
import useGetControls from "./hooks/useGetControls";

const copyText = (value: string) => {
  navigator.clipboard.writeText(value);
};

export default function App() {
  const [value, dispatchSetValue] = useState("");
  const setValue: SetValue = (newValue) => dispatchSetValue(newValue);
  const controls = useGetControls(setValue);

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
