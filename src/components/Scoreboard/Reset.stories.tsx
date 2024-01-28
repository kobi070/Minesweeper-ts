import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Reset, ResetProps } from "./Reset";

export default{
    title: "Scoreboard/Reset",
    component: Reset,
    tags: ["autodocs"]
} as Meta;

const Template : StoryFn<ResetProps> = (args) => <Reset {...args}/>;

export const ScoreboardResetButton = Template.bind({});

