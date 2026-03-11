import React from 'react'
import RightCardContaint from './RightCardContaint'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-65 rounded-3xl overflow-hidden relative'>
        <img className='h-full w-full object-cover rounded-3xl' src={props.img} alt="image not found" />
        <RightCardContaint id={props.id} tag={props.tag} colour={props.colour} intro={props.intro} />
    </div>
  )
}

export default RightCard