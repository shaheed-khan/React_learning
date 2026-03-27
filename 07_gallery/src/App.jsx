import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'

const App = () => {

const [userData, setUserData] = useState([])

const [index, setindex] = useState(1)

  const getData = async () => {
   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
   setUserData(response.data)
  }
  useEffect( function() {
    getData()
  }, [index])

  let printuserData = <h2 className='text-gray-500 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading.....</h2>

  if(userData.length > 0){
     printuserData = userData.map(function(elem,idx){
      return <div  key={idx}> 
      <Card  elem={elem} /> 
      </div> 
    });
  }
  if(userData.length > 0){

  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white  '>
      <div className='flex min-h-[80%] flex-wrap gap-5 p-2 '>
        {printuserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4   '>
        <button 
         onClick={()=>{
          if(index > 1){
             setindex(index-1)
              setUserData([])
          }
        }}
         className='bg-green-200 text-xl font-bold cursor-pointer active:scale-95 text-black rounded py-2 px-4'>
          prev
        </button>
        <h2 className='font-medium text-2xl text-blue-300'>Page {index}</h2>
        <button
        onClick={()=>{
          setUserData([])
          setindex(index+1)
        }
        }
         className='bg-green-200 text-xl font-bold cursor-pointer active:scale-95 text-black rounded py-2 px-4'>
          next
        </button>
      </div>
    </div>
  )
}

export default App