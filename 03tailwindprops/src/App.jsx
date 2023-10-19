import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Hitesh", 
    age : 21
  }
  let newArr = [1, 2, 3]
  
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-lg mb-4'>Hello</h1>
      <Card username="chaiaurcode"/>
      <Card username="hitesh" />
    </>  
  )
}
export default App
