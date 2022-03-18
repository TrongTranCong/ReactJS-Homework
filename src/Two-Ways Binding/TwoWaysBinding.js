import React from "react";
import { useState } from "react";
function TwoWaysBinding() {
  // const gifts = ["CPI i9", "RAM 32GB RGB", "RGB Keyboard"];

  // const [awards, setAwards] = useState("Chưa có phần thưởng");

  // const handleGetGifts = () => {
  //   const index = Math.floor(Math.random() * gifts.length);
  //   setAwards(gifts[index]);
  // };
  const[name,setName]=useState('');
  console.log(name)
  return (
    <div style={{ padding: 32 }}>
      {/* <h1>{awards}</h1>
      <button onClick={handleGetGifts}>Lấy phần thưởng</button> */}
      <input value={name} type="text" onChange={(e) => { setName(e.target.value) }}/>
      <button onClick={() => { setName('Trần Công Thịnh') }}>Change</button>
    </div>
  );
}
export default TwoWaysBinding;
