import { useState } from 'react';
import './App.css'

function App() {
  const [cont, setCont] = useState<number>(0);

  return (
    <>
      <h1> cont: {cont}</h1>
      <button onClick={() => setCont((prev) => prev + 1)}> Increase </button>
    </>
  )
}

export default App
