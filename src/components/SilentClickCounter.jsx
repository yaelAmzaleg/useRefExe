import React from 'react'
import { useRef,useState } from 'react';
export default function SilentClickCounter() {
 const clickCountRef = useRef(0);
  const [displayedClicks, setDisplayedClicks] = useState(null);
  const handleClickMe = () => {
    clickCountRef.current += 1;
  };

  const handleShowTotal = () => {
    setDisplayedClicks(clickCountRef.current);
  };

  return (
    <div>
      <button onClick={handleClickMe}>Click Me</button>
      <button onClick={handleShowTotal}>Show Total Clicks</button>

      {displayedClicks !== null && (
        <p>Total clicks: {displayedClicks}</p>
      )}
    </div>
  );
}
