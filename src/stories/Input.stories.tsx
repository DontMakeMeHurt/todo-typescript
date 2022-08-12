import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../components/Input';



export default {
    title: 'UI/MyInput/Input',
    component: Input,
    onChange: { action: 'changed'}
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => {
    const [value, setValue] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <Input
            value={value}
            onChange={onChange}
            placeholder="placeholder"
            disabled={false}
        />
    )
}

export const Default = Template.bind({});

Default.args = {

}