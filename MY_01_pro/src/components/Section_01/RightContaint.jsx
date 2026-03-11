import RightCard from "./RightCard"

const RightContaint = (props) => {
  return (
    <div id="right" className=' h-full w-3/4 overflow-x-auto p-5 flex flex-nowrap gap-10'>
       {props.users.map(function(elem,idx){
        return <RightCard  id={idx} img={elem.img} tag={elem.tag} colour={elem.colour} intro={elem.intro} key={idx}/>
       })
      }
    </div>
  )
}

export default RightContaint 