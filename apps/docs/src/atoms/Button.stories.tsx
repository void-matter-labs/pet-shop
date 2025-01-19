import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@pets/ui';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Click me',
  },
};

export const FullWidth: Story = {
  args: {
    color: 'primary',
    children: 'Click me',
    fullWidth: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Secondary: Story = {
  args: {
    color: 'transparent',
    children: 'Click me',
  },
};

