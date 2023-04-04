import { TodoItem } from "./TodoItem";

import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof TodoItem> = {
  title: "TodoItem",
  component: TodoItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    id: 1,
    text: "Learning Rxjs",
    isDone: false,
  },
};