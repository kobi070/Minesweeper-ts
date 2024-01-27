import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Level, LevelProps } from "./Level";

export default {
    title: "Scoreboard/Level",
    component: Level,
    tags: ['autodocs']
} as Meta;

const Template : StoryFn<LevelProps> = (args) => <Level {...args} />;

export const ScoreboardLevel = Template.bind({});

ScoreboardLevel.args = {
    children: [
        "Begginer",
        "Advance",
        "Expert",
    ]
}