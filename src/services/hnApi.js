import axios from "axios";

export const baseUrl = " https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}topstories.json?print=pretty`;
export const storyUrl = `${baseUrl}item/`;


//important specific stories
export const getStory=async(storyId=38023694)=>{

    const result=await axios.get(`${storyUrl + storyId}.json`).then(({data})=> data)
    return result;
}



//important all stories
export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);

  return result;
};
