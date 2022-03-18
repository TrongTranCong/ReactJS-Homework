// import BaiTapChonXeAdvanced from "./BaiTapChonXe/BaiTapChonXeAdvanced";
// import CarFeaturesArr from './BaiTapChonXe/CarFeaturesArr';
// import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
// import CarLists from './BaiTapChonXe/CarLists';

// import Content from "./Two-Ways Binding/Content";
// import TimerFunction from "./Two-Ways Binding/TimerFunction";
// import PreviewAvatar from "./Two-Ways Binding/PreviewAvatar";
import { useState } from "react";
import UseRef from "./Two-Ways Binding/UseRef";
// import FakeApp from "./Two-Ways Binding/FakeApp";
// import UseLayoutEffect from "./Two-Ways Binding/UseLayoutEffect";

// import { useState } from "react";
// import Course from "./Two-Ways Binding/Course";
// import ToDoList from "./Two-Ways Binding/ToDoList";
// import TwoWaysBinding from "./Two-Ways Binding/TwoWaysBinding";

// const orders = [100, 200, 300];

function App() {
  const [show,setShow]=useState()
//   // const total=orders.reduce((total,curr) => { return total+curr })
//   // console.log(total)
//   const [counter, setCounter] = useState(() => {
//     const total = orders.reduce((total, curr) => {
//       return total + curr;
//     });
//     console.log(total);
//     return total;
//   });

  // if (counter === -1 || counter > 10) {
  //   setCounter(0);
  // }
  // const handleIncrease = () => {
  //   setCounter(counter + 1);
  // };

  // const handleDecrease = () => {
  //   setCounter(counter - 1);
  // };

  // const [user, setUser] = useState({
  //   name: "Trần Công Trọng",
  //   age: 36,
  //   location: "Đà Nẵng,VN",
  // });
  // const handleGetInfo = () => {
  //   setUser({
  //     ...user,
  //     hobby: "Swimming pool",
  //   });
  // };
  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => { setShow(!show) }}>Toggle</button>
      {/* <h1>{counter}</h1>
      <button className="btn btn-primary mx-3" onClick={handleIncrease}>
        Increase
      </button>
      <button className="btn btn-warning" onClick={handleDecrease}>
        Decrease
      </button>
      <h1>{JSON.stringify(user)}</h1>
      <button onClick={handleGetInfo}>GetInfo</button> */}

      {/* <BaiTapChonXe/> */}
      {/* <CarLists/> */}
      {/* <BaiTapChonXeAdvanced/> */}
      {/* <CarFeaturesArr/> */}
      {/* <TwoWaysBinding/> */}
      {/* <Course/> */}
      {/* <ToDoList/> */}
      {/* <Content/> */}
      {/* {show&&<TimerFunction/>} */}
      {/* {show&&<PreviewAvatar/>} */}
      {/* {show && <FakeApp/>} */}
      {/* {show && <UseLayoutEffect/>} */}
      {show && <UseRef/>}
    </div>
  );
}

export default App;
