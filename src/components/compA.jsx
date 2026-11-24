import React, { useRef,useState } from 'react'

export default function CompA() {
const inputRef = useRef(null);

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
      />
      <button onClick={handleClear}>Clear Input</button>
    </div>
  );
}
