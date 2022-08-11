import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../components/Input';



export default {
    title: 'UI/MyInput/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => {
    const [localValue, setValue] = useState<string>('');
    const [inputValue, setInputValue] = useState<string>('');
    const onChange = (inputValue: string) => {
        setInputValue(inputValue);
    }
    return (
        <Input
            value={localValue}
            onChange={onChange}
            placeholder="placeholder"
            disabled={false}
        />
    )
}

export const Default = Template.bind({});