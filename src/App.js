import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(['youTube', 'facebook', 'yalo']);

  const handleIncrease = () => {
      setCounter([...counter, 'tiktok'])
  }

  return (
    <div className="App">
      <h1>{JSON.stringify(counter)}</h1>

      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
