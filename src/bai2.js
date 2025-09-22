import React, { useState } from "react";

function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        marginTop: "10px",
        border: "1px solid black",
        backgroundColor: color,
      }}
    ></div>
  );
}

function Bai2() {
  const [color, setColor] = useState("white");

  return (
    <div>
      <h2>Bài 2: Color Picker</h2>
      <button onClick={() => setColor("red")}>Đỏ</button>
      <button onClick={() => setColor("blue")}>Xanh</button>
      <button onClick={() => setColor("yellow")}>Vàng</button>
      <ColorBox color={color} />
    </div>
  );
}

export default Bai2;
