import { useEffect, useState } from 'react';

function Home() {

    const [calcResult, setCalcResult] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/todos')
      .then(res => res.json())
      .then(data => {
        setCalcResult(data[0].Calculation);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setCalcResult('Error fetching data');
      });
  }, []);

    return (
        <>
            <h1>This is text from the home page</h1>  
            <p>Computer science is the study of computation, information, and automation.[1][2][3] Computer science spans theoretical disciplines (such as algorithms, theory of computation, and information theory) to applied disciplines (including the design and implementation of hardware and software).[4][5][6]</p>
            
            <h3>Here will spawn the db: {calcResult !== null ? calcResult : 'Loading...'}</h3>
        </>
    );
};

export default Home;