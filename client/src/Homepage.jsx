import { useEffect, useState } from 'react';
import axios from "axios";

function Home() {

    const [text, setText] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    try {
      const response = await fetch("http://localhost:3000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }), // send { text: "input value" }
      });

      const data = await response.json();
      console.log("Response from server:", data);

      setText(""); // clear input
    } catch (err) {
      console.error("Error sending data:", err);
    }
  };


   

    return (
        <>
            <h1>To Do List App</h1>

            <form onSubmit={handleSubmit}>
              <input type='text' placeholder='Enter Text' onChange={(e) => setText(e.target.value)}/>

              <button type='submit'>Submit</button>
            </form>
        </>
    );
};

export default Home;