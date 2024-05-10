import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

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
    console.log(result.contents.items[0]);
    setdata(result.contents.items[0]) ; 
  };

//   useEffect(()=>{
//    getData () ; 
//   } , [])

 
  return (
    <div className=" w-[98%] h-[85%]  bg-zinc-900 rounded-xl m-3  overflow-auto no-scrollbar">
       
    </div>
  );
};

export default Playlist;
