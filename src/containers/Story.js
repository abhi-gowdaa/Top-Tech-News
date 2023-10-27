import React, { useEffect, useState } from "react";
import { getStory } from "../services/hnApi";
import {
  StoryWapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement,
} from "../styles/StoryStyles";

//storyId is a props
export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWapper data-testid="story">
      <StoryTitle>
        <a href={story.url} rel="noreferrer" target="_blank">
          {story.title}
        </a>
      </StoryTitle>

      <StoryMeta>
        <span  data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
        </span>

        <span  data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement>
          {story.time}
        </span>
      </StoryMeta>
    </StoryWapper>
  ) : null;
};
