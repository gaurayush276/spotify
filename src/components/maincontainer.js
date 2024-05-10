import { useEffect, useState } from "react";
import Card from "./Card";

const MainContainer = ()=>{

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
    getData() ;
},[]) ;

const getData = async()=>{
    const response = await fetch(url, options);
	const result = await response.json();
    setdata(result.contents.items) ; 

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