import React ,{useState,useEffect} from "react"
import { getStoryIds } from "./services/hnApi" 

export const StoriesContainer=()=>{

    const [storyIds,setStoryIds]=useState([])


    useEffect(()=>{
getStoryIds().then(data=> data && setStoryIds(data));

    },[])

return(
<div> 
  
<ul>
    {JSON.stringify(storyIds)}</ul>
    </div>

);

}
 