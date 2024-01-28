import React, { FC } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Scoreboard, ScoreboardProps } from "./Scoreboard";

export default {
  title: "Scoreboard/Scoreboard",
  component: Scoreboard,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<ScoreboardProps> = (args) => <Scoreboard {...args} />;

export const ScoreboardStory = Template.bind({});

ScoreboardStory.args = {
  timer: "010",
  levels: ["begginer", "advanced", "expert"],
  mines: "0",
};
