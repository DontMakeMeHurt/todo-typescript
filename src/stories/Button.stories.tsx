import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button} from '../components/ButtonAdd';

export default {
  title: 'UI/MyButton/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {type: 'checkbox'}
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Add Todo',
};
Default.storyName = 'This is main Button';