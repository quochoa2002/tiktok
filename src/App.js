import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(prev => prev + 1);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>

      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
