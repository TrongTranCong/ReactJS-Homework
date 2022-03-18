// side effect:
// 1. Update DOM
// - F8 title
// 2.Call API
// 3.Listen DOM events
// - Scroll
// - Resize

// Events: Add/Remove event listener
// Observer pattern: Subcribe/Unscribe
// Closure:
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// === toan tu so sanh
// Mounted && Unmounted
import React from "react";
import { useState, useEffect } from "react";

export default function Content() {
  const tabs = ["posts", "comments", "albums"];
  const [show, setShow] = useState();
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("comments");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  // console.log(show)
  // 1.useEffect(callback)
  // Gọi callback mỗi khi re-render
  // 2.useEffect(callback,[])
  // Gọi callback chỉ chạy 1 lần duy nhất
  // 3.useEffect(callback,[deps])
  // Gọi callback mỗi khi deps thay đổi
  // ------------------------------
  // 1. Callback luôn được gọi sau khi component mounted
  // 2. Clean up luôn được gọi trước khi component unmounted
  // 3. Cleanip luôn được gọi trước khi callback được gọi
  useEffect(() => {
    // console.log("Mounted");
    // Khi type thay đổi thì callback nó sẽ thay đổi và nhận cái type mới vào
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [type]);
  // Khi có 1 chức năng khác thì nên tạo riêng useEffect
  useEffect(() => {
    const handleScrollY = () => {
      if (window.scrollY > 150) {
        //Show button backToTop
        setShowBackToTop(true);
      } else {
        // Hidden button backToTop
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScrollY);
    // console.log("addEventListener");
    //Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScrollY);
      // console.log("removeEventListener");
    };
  }, []);

  useEffect(() => {
    const handleResizeX = () => {
      setWidth(window.innerWidth);
    };
    const handleResizeY = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResizeX);
    window.addEventListener("resize", handleResizeY);
    //Cleanup function
    return () => {
      window.removeEventListener("scroll", handleResizeX);
      window.console.log("removeEventListener");
    };
  }, []);

  return (
    <div>
      {/* <h1>{show && "Danke Bayern Muchen!"}</h1> */}
      {show && <h1>{width}</h1>}
      {show && <h1>{height}</h1>}
      {show && (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      )}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
      {show && (
        <div>
          {tabs.map((tab) => (
            <button
              key={tab}
              style={
                type === tab ? { color: "#fff", backgroundColor: "#000" } : {}
              }
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {show && (
        <ul>
          {posts.map((post) => {
            return <li key={posts.id}>{post.title || post.name}</li>;
          })}
        </ul>
      )}
      {showBackToTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Back To Top
        </button>
      )}
    </div>
  );
}
