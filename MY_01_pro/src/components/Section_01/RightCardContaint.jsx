import React from 'react'

const RightCardContaint = (props) => {
  return (
     <div className=' absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
            <h2 className='bg-white flex items-center justify-center h-9 w-9 rounded-full font-semibold text-xl'>{props.id+1}</h2>
            <div >
                <p className='text-lg leading-normal text-white mb-14'>{props.intro}</p>
                <div className='flex justify-between '>
                    <button className={`text-white font-medium py-1 px-4 rounded-full`} style={{ backgroundColor: props.colour }}>
                        {props.tag}
                    </button>
                    <button className='bg-blue-600 text-white font-medium py-1 px-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContaint