import './App.css';
import { useState } from 'react';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const handleName = e => setName(e.target.value);
  const handleEmail = e => setEmail(e.target.value)
  const handlSubit = () => {
    console.log({
      name,
      email
    })
  }

  return(
    <div style={{ padding: 50 }}>
      <input
        value={ name }
        onChange={handleName}
      /> <br/>
      <input
        value={email}
        onChange={handleEmail}
      />

      <button onClick={handlSubit}>submit</button>
    </div>
  )
}

export default App;
