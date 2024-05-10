import React from 'react'
 import { CiPlay1 } from "react-icons/ci";
import { Link } from 'react-router-dom';





const Card = ({info}) => {

   
 
   return (
    <div className=' relative'>
   <Link to={'/playlist?p=' + info.id}>  <img className=' w-40 h-40 rounded-xl' src= { info.images[0][0].url} />  </Link>
         <h1 className=' font-semibold m-2 text-sm w-40  '> {info.name}</h1>
     <div className='bg-green-400 rounded-full flex items-center justify-center w-10 h-10 absolute top-[52%] right-[10%] font-bold '><CiPlay1 /> </div>
     </div>
  )
}

export default Card
