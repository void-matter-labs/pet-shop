import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioProps, Radio } from '@pets/ui';

const meta: Meta<RadioProps> = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<RadioProps>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

const RadioTemplate = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="flex gap-2">
        <Radio
          size="medium"
          value="option1"
          checked={selected === 'option1'}
          onChange={handleChange}
        />
        Option 1
      </label>
      <label className="flex gap-2">
        <Radio
          size="medium"
          value="option2"
          checked={selected === 'option2'}
          onChange={handleChange}
        />
        Option 2
      </label>
      <label className="flex gap-2">
        <Radio
          size="medium"
          value="option3"
          checked={selected === 'option3'}
          onChange={handleChange}
        />
        Option 3
      </label>
    </div>
  );
};

export const RadioGroup: Story = {
  render: () => <RadioTemplate />,
};