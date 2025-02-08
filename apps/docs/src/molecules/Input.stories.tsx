import type { Meta, StoryObj } from '@storybook/react';
import { InputProps, Input, MailSVG } from '@pets/ui';

const meta: Meta<InputProps> = {
  title: 'Molecule/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<InputProps>;

export const Primary: Story = {
  args: {
    label: 'This is a label',
    forId: 'label1',
    leftIcon: <MailSVG />,
    rightIcon: <MailSVG />,
    placeholder: 'This is a placeholder'
  },
  render: ( args ) => (
    <div className='max-w-[350px]'>
        <Input  { ...args }/>
    </div>
  )
};