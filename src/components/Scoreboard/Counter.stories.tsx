import { StoryFn, Meta } from "@storybook/react";
import { Counter, CounterProps } from "./Counter";
import React from "react";

export default {
    title: "Scoreboard/Couter",
    component: Counter,
    tags: ['autodocs']
} as Meta

const Template : StoryFn<CounterProps> = (args) => <Counter {...args} />;

export const ScoreboardCounter = Template.bind({});

ScoreboardCounter.args = {
    children: '10',
}