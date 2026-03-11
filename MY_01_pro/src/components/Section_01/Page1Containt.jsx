import React from 'react'
import LeftContaint from './LeftContaint'
import RightContaint from './RightContaint'

const Page1Containt = (props) => {
  return (
    <div className='h-[90vh] py-10 px-17 flex items-center gap-10'>
        <LeftContaint/>
        <RightContaint users={props.users}/>
      
    </div>
  )
}

export default Page1Containt