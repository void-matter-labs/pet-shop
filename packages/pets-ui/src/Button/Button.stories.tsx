import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';
import  Button, { ButtonProps } from '.';
import { ElementType, memo, useCallback, useState } from 'react';

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
    variantColor: 'primary',
    children: "Primary",
  },
  play({ canvasElement }){
    const canvas = within(canvasElement);

    const maybeButton = canvas.getByText("Primary")

    expect(maybeButton instanceof HTMLButtonElement).toBeTruthy()
  }
};

export const AsChild: Story = {
  args: {
    variantColor: 'primary',
    children: <a role="button" href="somehref" data-something="something" >Hello</a>,
    asChild: true,
  },
  play({ canvasElement }){
    const canvas = within(canvasElement)

    const button = canvas.getByRole('button')

    expect(button instanceof HTMLAnchorElement).toBeTruthy()
    expect(button).toHaveAttribute('href', "somehref")
  }
};

export const WithHrefProp: Story = {
  args: {
    children: 'Anchor',
    //@ts-expect-error
    href: "somefakehref"
  },
  play({ canvasElement }){
    const canvas = within(canvasElement)

    const button = canvas.getByText("Anchor")

    expect(button instanceof HTMLAnchorElement).toBeTruthy()
  }
}

export const WithAsProp: Story = {
  args: {
    children: "Hello",
    //@ts-expect-error
    as: "a" as ElementType
  },
  play({ canvasElement }){
    const canvas = within(canvasElement)

    const button = canvas.getByText('Hello')

    expect(button instanceof HTMLAnchorElement).toBeTruthy()
  }
};

const MemoizedButton =  memo(Button)

export const Secondary: Story = {
  args: {
    variantColor: 'secondary',
    children: 'Click me',
  },
  render(args){
    const [count, setCount] = useState(0)

    const onClick = useCallback(()=>{
      setCount(prev => prev+1)
    }, [])

    return <div>
        <span>{count}</span>
        <MemoizedButton {...args} onClick={onClick} />
      </div>
  }
};

export const Tertiary: Story = {
  args: {
    variantColor: 'tertiary',
    children: 'Click me',
    border: 'none',
  },
};
