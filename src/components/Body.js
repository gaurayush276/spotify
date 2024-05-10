import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import MainContainer from './maincontainer'
import { Outlet } from 'react-router-dom'


const Body = () => {
   return (
     <div className='w-full overflow-hidden relative   '>
    <div className=' w-[98%] h-[85%]  bg-zinc-900 rounded-xl m-3  overflow-auto no-scrollbar'>
      <Header/>
      <Outlet/>
    
    </div>
     </div>
      
    
  )
}

export default Body
