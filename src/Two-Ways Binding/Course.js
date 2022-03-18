import React, { useState } from "react";

export default function Course() {
  const course = [
    { id: 1, name: "HTML,CSS" },
    { id: 2, name: "Javascript" },
    { id: 3, name: "ReactJS" },
  ];
  //   const [checked, setChecked] = useState(2);
  //Khi thực hiện checkbox từng ô thì nó phải lưu dưới dạng danh sách tức là lưu vào mảng,  nên
  const [checked, setChecked] = useState([]);

//   console.log(checked);

  const handleSubmit = () => {
    //Call API
    console.log({
      ids: checked,
    });
  };
  //Khi thực hiện check để lưu vào mảng thì phải lấy được id
  const handleCheck = (id) => {
    //Sử dụng toán tử spread để lưu giá trị cũ và thêm vào được giá trị mới
    // setChecked((prev) => [...prev, id]);//=> nó chỉ cho check 1 lần để bỏ chọn check thì ko dược vì vậy
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  return (
    <div>
      <h1>Using radio checked</h1>
      {course.map((item, index) => (
        <div key={index}>
          <input
            // type="radio"
            type="checkbox"
            checked={checked.includes(item.id)}
            // Khi thực hiện check
            // checked={checked===item.id}
            // onChange={() => {
            //   setChecked(item.id);
            // }}
            onChange={() => handleCheck(item.id)}
          />
          {item.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
