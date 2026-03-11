
import Navbar from './Navbar'
import Page1Containt from './page1Containt'

const Section_01 = (props) => {
  return (
    <div className='h-screen w-full bg-gray-200'>
      <Navbar/>
      <Page1Containt users={props.users}/>
    </div>
  )
}

export default Section_01