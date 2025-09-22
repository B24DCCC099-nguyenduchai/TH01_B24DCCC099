import React, { useState } from "react";

function Bai1() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Bài 1: To-do List</h2>
      <input
        type="text"
        value={input}
        placeholder="Nhập công việc"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Thêm</button>

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task} <button onClick={() => removeTask(i)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bai1;
