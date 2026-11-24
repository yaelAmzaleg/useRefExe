import React, { useRef, useState } from 'react'

export default function CounterHistory() {
    const [count,setCount]=useState(0)
    const prevCountRef = useRef(count);
  const prevCount = prevCountRef.current;
  prevCountRef.current = count-1;
  return (
    <div>
      <p>
        Current: {count} (Previous: {prevCount})
      </p>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  )
}
