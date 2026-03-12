

const App = () => {
  function handleScroll(elem) {
    console.log(elem.deltaY)
  }
   
  return (
    <div onWheel={handleScroll} className="nono">
     <div className="page1"></div>
     <div className="page2"></div>
     <div className="page3"></div>
    </div>
  )
}

export default App