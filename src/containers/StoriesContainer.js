import React, { useState, useEffect } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "./Story";
import {GlobalStyle,StoriesContainerWrapper} from '../styles/StoriesContainerStyles'




export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    // getStory(20970623).then(data=> console.log(data))
  }, []);

  return (
    <>
    <GlobalStyle/>
    <StoriesContainerWrapper data-testid="stories-container">
      <h1>Hacker News Stories</h1>
      {storyIds.map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
      </StoriesContainerWrapper>
    </>
  );
};
