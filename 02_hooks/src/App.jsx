
import { useState } from 'react'
const App = () => {
  const [num, setNum] = useState([10,20,30,40])
  const handleClick = () => {
    const newNum =[num]
    newNum.push(50)
    setNum(newNum)    
  }
  return (
    <div>
      <h1> THE Value of num is: {num}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App