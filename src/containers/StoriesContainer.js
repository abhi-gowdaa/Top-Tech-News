import React, { useState, useEffect } from "react";
import { getStoryIds,getStory } from "../services/hnApi";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStory().then((data) => data && setStoryIds(data));
  }, []);

  return (
    <div>
      <ul>{JSON.stringify(storyIds)}</ul>
    </div>
  );
};
