import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Cell, CellProps } from "./Cell";

export default {
  title: "Grid/Cell",
  components: Cell,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<CellProps> = (args) => <Cell {...args} />;

export const CellClosed = Template.bind({});
CellClosed.args = {
  children: 10,
};

export const CellEmpty = Template.bind({});
CellEmpty.args = {
  children: 0,
};

export const CellWithBomb = Template.bind({});
CellWithBomb.args = {
  children: 9,
};

export const CellWithFlag = Template.bind({});
CellWithFlag.args = {
  children: 11,
};

export const CellWithWeakFlag = Template.bind({});
CellWithWeakFlag.args = {
  children: 12,
};

export const CellWith1 = Template.bind({});
CellWith1.args = {
  children: 1,
};
export const CellWith2 = Template.bind({});
CellWith2.args = {
  children: 2,
};

export const CellWith3 = Template.bind({});
CellWith3.args = {
  children: 3,
};

export const CellWith5 = Template.bind({});
CellWith5.args = {
  children: 5,
};
export const CellWith6 = Template.bind({});
CellWith6.args = {
  children: 6,
};

