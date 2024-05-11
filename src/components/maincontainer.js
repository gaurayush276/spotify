import { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addmusic } from "../utils/musicSlice";


// in pushed all the top data in redux app store so that ther is no need to call the api again and again 

const MainContainer = ()=>{
    const dispatch = useDispatch() ;
    const toptracks = useSelector( store => store.musicContainer.toptracks)  ; 
    

    const [data , setdata] = useState([]) ; 
    const url = 'https://spotify-scraper.p.rapidapi.com/v1/home/section?sectionId=0JQ5DAuChZYPe9iDhh2mJz';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '01eeee00d6msh0df5a4ff5de1c5dp18ce80jsnd9e3fa6bf2d7',
		'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
	}
};

useEffect(()=>{
    // getData() ;
    if (!toptracks)
    topTracksData() ; 
else
return ; 
},[]) ;

const getData = async()=>{
    const response = await fetch(url, options);
	const result = await response.json();
    setdata(result.contents.items) ; 

}


// top tracks 
const urlTop = 'https://spotify-scraper.p.rapidapi.com/v1/chart/tracks/top';
const optionsTop = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '01eeee00d6msh0df5a4ff5de1c5dp18ce80jsnd9e3fa6bf2d7',
		'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
	}
};

 const topTracksData = async()=>{
    const response = await fetch(url, options);
	const result = await response.json();
    console.log("called");
    dispatch( addmusic(result.contents.items ))  ; 
 }
	
 
    return (
       <div className=" relative top-20 flex  overflow-x-scroll no-scrollbar ">
        <div className="flex "> 
        {
            data.map(items =>(
                <Card key={items.id} info={items} />
            ))
        }

        </div>
        
        
       </div>
    )
}

export default MainContainer ; 