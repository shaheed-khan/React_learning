import React from 'react'
import { useState } from 'react'
const App = () => {
  const [num, setNum] = useState(0)
  const handleClick = () => {
    setNum(num + 1)
  }
  return (
    <div>
      <h1> THE Value of num is{num}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App