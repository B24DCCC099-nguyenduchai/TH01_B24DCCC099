import React, { useState } from "react";

function Post({ text }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <p>{text}</p>
      <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
      <button onClick={() => setDislikes(dislikes + 1)}>👎 {dislikes}</button>
    </div>
  );
}

function Bai4() {
  return (
    <div>
      <h2>Bài 4: Like/Dislike Post</h2>
      <Post text="Học ReactJS có khó không?" />
      <Post text="Props và State là gì?" />
      <Post text="Lập trình web có vui không?" />
    </div>
  );
}

export default Bai4;
