import { useRef, useState } from "react";
import TextBox from "./TextBox";

export default function ParentBox() {
  const inputRef = useRef(null);
  const [displayedValue, setDisplayedValue] = useState("");

  const handleShowValue = () => {
    if (inputRef.current) {
      setDisplayedValue(inputRef.current.value);
    }
  };

  return (
    <div>
      <TextBox ref={inputRef} />
      <button onClick={handleShowValue}>Show Value</button>
      <p>Current value: {displayedValue}</p>
    </div>
  );
}