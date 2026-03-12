

const App = () => {
  function handleScroll(elem) {
    if (elem.deltaY > 0) {
      console.log("upward scrolling",elem.deltaY);
    } else{
      console.log("downward scrolling",elem.deltaY);
    }
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