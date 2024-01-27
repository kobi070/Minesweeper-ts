import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Legend, LegendProps } from "./Legend";


export default {
    title: "Top/Legend",
    component: Legend,
    tags: ['autodocs']
} as Meta

const Template : StoryFn<LegendProps> = (args) => <Legend {...args} />;

export const GameLegend = Template.bind({});
GameLegend.args = {
    feature: 'Flags',
    firstAction: 'Ctrl',
    secondAction: 'Click',
};
