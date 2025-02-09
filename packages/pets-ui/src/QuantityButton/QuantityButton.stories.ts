import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import QuantityButton from '.';

const meta = {
  title: 'Example/QuantityButton',
  component: QuantityButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onIncrease: fn(),
    onDecrease: fn(),
  },
} satisfies Meta<typeof QuantityButton>;

export default meta;
type Story = StoryObj<typeof meta>;


export const IncreaseCurrentValue: Story = {
  args: {
    currentValue: 5,
    delta: 2,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByText('+');

    await userEvent.click(button);

    expect(args.onIncrease).toHaveBeenCalledWith(7, expect.anything());
  }
};

export const DecreaseCurrentValue: Story = {
  args: {
    currentValue: 5,
    delta: 2,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByText('-');

    await userEvent.click(button);

    expect(args.onDecrease).toHaveBeenCalledWith(3, expect.anything());
  }
};