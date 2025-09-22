import React, { useState } from "react";

function Bai5() {
  const questions = [
    {
      q: "ReactJS dung de lam gi?",
      options: ["Mobile App", "Web UI", "He dieu hanh", "Co so du lieu"],
      answer: "Web UI",
    },
    {
      q: "Props trong React la gi?",
      options: ["Trang thai", "Thuoc tinh truyen vao", "API", "CSS"],
      answer: "Thuoc tinh truyen vao",
    },
    {
      q: "State dung de?",
      options: [
        "Quan ly du lieu thay doi",
        "Dinh nghia component",
        "Ket noi backend",
        "Trang tri giao dien",
      ],
      answer: "Quan ly du lieu thay doi",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const checkAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
      alert("Dung");
    } else {
      alert("Sai");
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div>
      <h2>Bai 5: Quiz App</h2>
      {finished ? (
        <h3>Ban tra loi dung {score}/{questions.length} cau</h3>
      ) : (
        <div>
          <p><b>Cau {current + 1}:</b> {questions[current].q}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            {questions[current].options.map((opt, i) => (
              <button key={i} onClick={() => checkAnswer(opt)}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Bai5;
