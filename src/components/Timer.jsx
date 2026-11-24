import React, { useRef, useState } from 'react'

export default function Timer() {
const [second,setSeconds]=useState(0)
const intervalId=useRef(null)
const SumClick=useRef(0)
function handleStart()
{
    if (intervalId.current !== null) return;
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    intervalId.current=id;
}
function handleStop()
{
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
      intervalId.current=null; 
    }
}
  return (
    <div>
      <label>Seconds:{second}</label>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}
