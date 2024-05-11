import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SongList from "./SongList";
import { GoPlusCircle } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";

const Playlist = () => {
    const [data , setdata ] = useState([]) ; 
    const [searchParams] = useSearchParams() ; 
   
    const searchid = searchParams.get('p') ; 


  const url ="https://spotify-scraper.p.rapidapi.com/v1/playlist/contents?playlistId=" + searchid  ; 
   ;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "01eeee00d6msh0df5a4ff5de1c5dp18ce80jsnd9e3fa6bf2d7",
      "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com",
    },
  };

  const getData = async () => {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.contents.items);
    setdata(result.contents.items) ; 
  };

  useEffect(()=>{
   getData () ; 
  } , [])

 
  return (
    <div className=" w-[98%] h-[85%]  bg-zinc-900 rounded-xl m-3  overflow-auto no-scrollbar"> 
    <div className=" h-56 bg-sky-500 bg-gradient-to-b "> 
    </div>
    <div className=" flex  justify-between p-3 items-center bg-gradient-to-b from-sky-500  ">
 <div className=" flex gap-2 items-center h-16"> 

 <FaPlay className=" w-14 h-14 p-3 rounded-full bg-green-500 hover:w-16 hover:h-16 cursor-pointer text-black" />
      <GoPlusCircle className=" w-8 h-8"/>
<BsThreeDots className=" w-8 h-8"/>
 </div>
 <div className=" flex gap-2"> <span> List </span>  <CiCircleList   className=" w-6 h-6"/> </div>
     
      
       </div>
      {
            data.map(items =>(
              <SongList info = {items}/>
            ))
        }
        
    </div>
  );
};

export default Playlist;
