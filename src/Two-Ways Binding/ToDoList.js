import React from "react";
import { useState } from "react";
export default function ToDoList() {
  const [job, setJob] = useState("");
//   console.log(job);
  const [jobs, setJobs] = useState(() => {
    // Hàm tối ưu  tránh render lại lần 2 ảnh hưởng đến hiệu suất
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    console.log(storageJobs);
    return storageJobs;
  });

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return newJobs;
    });
    setJob("");
  };

  return (
    <div style={{ padding: 32 }}>
      <input
        value={job}
        type="text"
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}
