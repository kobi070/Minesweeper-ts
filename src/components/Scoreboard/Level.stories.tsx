// import { StoryFn, Meta } from "@storybook/react";
// import { Counter, CounterProps } from "./Counter";
// import React from "react";

// export default {
//     title: "Scoreboard/Couter",
//     component: Counter,
//     tags: ['autodocs']
// } as Meta

// const Template : StoryFn<CounterProps> = (args) => <Counter {...args} />;

// export const ScoreboardCounter = Template.bind({});

// ScoreboardCounter.args = {
//     children: '10',
// }


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

