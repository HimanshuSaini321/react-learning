import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter]=useState(15)
  //let counter = 5;

  const addValue = () => {
    if (counter >= 20) {
      counter = 20
    } else {
      counter = counter + 1;
      setCounter(counter)
    }
  }


  const removeValue = () => {
    if (counter <= 0) {
      counter = 0;
    } else {
      counter = counter - 1;
      setCounter(counter);
    }
  }
  

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
