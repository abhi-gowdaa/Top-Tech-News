import axios from 'axios';

export const baseUrl=' https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl=`${baseUrl}topstories.json?print=pretty`;
export const storyUrl=`${baseUrl}item/`;


//important
export const getStoryIds=async ()=>{

const result=await axios.get(newStoriesUrl).then(({ data  }) => data)

return result;

}


// export const story=getStoryIds().map(data=>(
//     <li>
//        {data}
//     </li>
// ))