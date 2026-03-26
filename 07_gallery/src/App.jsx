import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

const [userData, setUserData] = useState([])

  const getData = async () => {
   const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=30")
   setUserData(response.data)
  }
  useEffect( function() {
    getData()
  }, [])

  let printuserData = <h2 className='text-gray-500 font-bold'>No data available</h2>

  if(userData.length > 0){
     printuserData = userData.map(function(elem,idx){
      return <a href={elem.url} target='_blank'>
         <div>
           <div className='h-40 w-45 object-cover rounded-xl overflow-hidden ' >
            <img className='h-full w-full'  src={elem.download_url} alt="img"  />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </div>
      </a>  
    });
  }
  return (
    <div className='bg-black min-h-screen text-white '>
     
      <div className='flex flex-wrap gap-5 py-5 px-5 '>
        {printuserData}
      </div>
    </div>
  )
}

export default App