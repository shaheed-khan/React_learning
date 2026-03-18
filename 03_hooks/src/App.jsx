
import { useState } from 'react'
const App = () => {
  const [num, setNum] = useState({user:"sarthak", age: 20})
  const handleClick = () => {
    setNum(prev=>({...prev, age: prev.age + 1}))    
  }
  return (
    <div>
      <h1> Name: {num.user} <br /> Age: {num.age}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}



export default App