

const App = () => {
  function btnclick(){
    console.log("button clicked")
  }
  function mousehover(){
    console.log("Mouse hovered")
  }
  return (
    <div className="nono">
      <input onChange={
        function(elem){
          console.log("Value changed:", elem.target.value)
        }
      } type="text" placeholder="Enter your name"/>
      <button onClick={btnclick}>CLICK HERE</button> <br />
    </div>
  )
}

export default App