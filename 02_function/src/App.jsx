

const App = () => {
  function btnclick(){
    console.log("button clicked")
  }
  function mousehover(){
    console.log("Mouse hovered")
  }
  return (
    <div>
      <button onClick={btnclick}>CLICK HEAR</button> <br />
      <button onMouseEnter={mousehover}>hover your mouse</button>
    </div>
  )
}

export default App