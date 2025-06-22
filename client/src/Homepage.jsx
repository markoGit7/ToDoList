import { useEffect, useState } from 'react';
import axios from "axios";

function Home() {

    const [inp, setInp] = useState('');
    const [items, setItems] = useState([]);

    const handleSubmit = async (e) => {// This Function sends data from the client/ to server/
        e.preventDefault();

        const response = await fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: inp}),
        });

        const result = await response.json();
        console.log(result);

        refreshData();
        setInp('');
    };



    const refreshData = async () => {// this Function brings the data from the server/ to the client/ 
        const response = await fetch('http://localhost:3000/db');
        const data = await response.json();
        setItems(data.title); // updates the UI without reloading the page
    };


    useEffect(() => {
    fetch('http://localhost:3000/db') // talk to your Express server
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
      .catch(err => {
        console.error('Fetch error:', err);
      });
  }, []);



    return (
        <>
            <h1>To Do List App</h1>

            <form onSubmit={handleSubmit}>
              <input type='text' value={inp} placeholder='Enter Text' onChange={(e) => setInp(e.target.value)}/>

              <button type='submit'>Submit</button>
            </form>

            <ul>
                {items.map((item, index) => (
                <li>{item.id}: {item.fullName}, {item.age}, {item.education},    POSITION: {item.roll}</li>
                ))}
            </ul>
        </>
    );
};

export default Home;