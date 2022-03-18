import React from "react";
import { useState, useEffect } from "react";

export default function FakeApp() {
  const lessons = [
    { id: 1, name: "ReactJS là gì? Tại sao nên học ReactJS?" },
    { id: 2, name: "SPA/MPA là gì" },
    { id: 3, name: "Arrow function" },
  ];
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log({ detail });
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);
  return (
    <div>
      <ul>
        {lessons.map((lesson, index) => (
          <li
            key={index}
            style={{ color: lessonId === lesson.id ? "red" : "#333" }}
            onClick={() => {
              setLessonId(lesson.id);
            }}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
