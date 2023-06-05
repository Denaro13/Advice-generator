import { useEffect, useState } from "react";
import "./App.css";
const url = "https://api.adviceslip.com/advice";

function App() {
  const [advices, setAdvices] = useState({});

  const fetchAdvice = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      const data = result.slip;
      setAdvices(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <main>
      <article className="advice">
        <h4>advice #{advices.id}</h4>
        <p>
          <q>{advices.advice}</q>
        </p>
        <div className="divider">
          <img
            src="./images/pattern-divider-desktop.svg"
            alt="divider"
            className="img"
          />
        </div>
        <button className="btn" onClick={fetchAdvice}>
          <img src="./images/icon-dice.svg" alt="icon" />
        </button>
      </article>
    </main>
  );
}

export default App;
