import React, { useLayoutEffect, useState } from "react";

export default function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  console.log('effect')

  const handleRun = () => {
    setCount(count + 1);
    console.log('handleRun')
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
      {console.log('render')}
    </div>
  );
}
