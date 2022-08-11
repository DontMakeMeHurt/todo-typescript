import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonProps} from '../components/ButtonAdd';

export default {
  title: 'UI/MyButton/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Add Todo',
};
Default.storyName = 'This is main Button';