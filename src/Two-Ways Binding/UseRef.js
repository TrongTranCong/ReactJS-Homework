import React, { useState, useRef, useEffect } from "react";
// useRef lưu các giá trị qua một tham chiếu bên ngoài function component

//
export default function UseRef() {
  const [count, setCount] = useState(60);

  const timerId = useRef();
  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  const handleStart = () => {
    timerId.current = setInterval(() => {
      //Khi setInterval nó sẽ tạo ra id và timerId.current lưu giá trị id đưa ra ngoài hàm func component
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    console.log("start", timerId.current);
  };
  const handleStop = () => {
    // clearInterval nó sẽ nhận id bên ngoài hàm đó
    clearInterval(timerId.current);
    console.log("stop", timerId.current);
  };
  console.log(count, prevCount.current);
  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      {console.log("render")}
    </div>
  );
}
