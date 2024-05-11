import React from 'react'

const SongList = ({info}) => {
  return (
    <div className=' flex  justify-between p-3 items-center'>
       <div className='flex gap-2'> 
        <img src = {info.album.cover[1].url } className=' w-7 h-7 rounded-full '/>
        <ul>
            <li> {info.name} </li>
        </ul>
       </div>

       <div>{info.artists[0].name} </div>
       <div>{info.durationText} </div>

    </div>
  )
}

export default SongList
