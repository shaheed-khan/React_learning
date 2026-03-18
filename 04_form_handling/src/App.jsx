
const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted',e.target[0].value)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' /> <br />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}



export default App