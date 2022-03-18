import React from "react";
import { useState, useEffect } from "react";
export default function TimerFunction() {
  const [countdown, setCountdown] = useState(180);
  const [countup, setCountup] = useState(180);
  const [count, setCount] = useState(1);
  //   useEffect(() => {
  //       //De tranh memory leak thi
  //     const timerId = setInterval(() => {
  //         setCountdown(prev=>prev-1)
  //         setCountup(prev=>prev+1)
  //         console.log('Mounted or re-render...')
  //     }, 1000);

  //     return ()=> clearInterval(timerId)
  //   },[]);
  useEffect(() => {
    console.log(`Mounted or re-render lần ${count}`);

    //Cleanup funcs
    return ()=>{
        console.log(`Cleanup lần ${count}`)
    }
  }, [count]);

  return (
    <div>
      {/* <h1>Countdown:{countdown}</h1>
      <h1>Countup:{countup}</h1> */}
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Click me!</button>
    </div>
  );
}
