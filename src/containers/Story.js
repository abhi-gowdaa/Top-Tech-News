import React,{useEffect, useState} from "react";
import { getStory } from "../services/hnApi";


//storyId is a props
export const Story=({ storyId })=>{
 const [story,setStory]=useState({});
  

 useEffect(() => {

    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);
    

return story && story.url ? (
    <>
    <a href={story.url} rel='noreferrer' target="_blank">
    <p>{story.title}</p>
    </a>
    By: <p>{story.by}</p>
    Posted:<p>{story.tiime}</p>

    </>
):null;

}