import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  Button, { ButtonProps } from '.';

const meta: Meta<ButtonProps> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    border: {
      control: 'select',
      options: ['default', 'full', 'none'],
    },
    fullWidth: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Click me',
  },
};

export const Tertiary: Story = {
  args: {
    color: 'tertiary',
    children: 'Click me',
    border: 'none',
  },
};
