
import Section_01 from './components/Section_01/Section_01'
import Section_02 from './components/Section_02/Section_02'

const App = () => {
  const users = [ 
  {
    img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    intro:"lorem150 ipsum dolor sit amet consectetur adipisicing elit. Sapiente quisquam labore sequi officia quos iste!",
    tag:" Satisfied",
    colour:"purple"
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    intro:" lorem150 ipsum dolor sit amet consectetur adipisicing elit. Sapiente quisquam labore sequi officia quos iste!",
    tag:"Underserved",
    colour:"blue"
  },
  {
    img:"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
    intro:"lorem150 ipsum dolor sit amet consectetur adipisicing elit. Sapiente quisquam labore sequi officia quos iste!",
    tag:"Underbanked",
    colour:"brown"
  },
  {
    img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
    intro:"lorem150 ipsum dolor sit amet consectetur adipisicing elit. Sapiente quisquam labore sequi officia quos iste!",
    tag:"Understation",
    colour:"green"
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
    intro:"lorem150 ipsum dolor sit amet consectetur adipisicing elit. Sapiente quisquam labore sequi officia quos iste!",
    tag:"Productive",
    colour:"royalblue"
  }
]
  return (
    <div>
    <Section_01 users={users}/>  
    <Section_02/>
    </div>
  )
}

export default App