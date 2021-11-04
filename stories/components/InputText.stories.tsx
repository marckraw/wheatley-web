// Button.stories.ts | Button.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import {FormInputText, InputTextProps} from '../../components/Forms/FormInputText'
import TestContextProvider from "../../contexts/TestContext";

export default {
    component: FormInputText,
    title: 'Components/Forms/InputText',
    parameters: {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ],
        },
    }
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<InputTextProps> = (args) => <FormInputText {...args}/>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const WithTestContext = Template.bind({});

Primary.args = {
    name: 'seomthing',
};

Secondary.args = {
    name: 'something2',
};

WithTestContext.args = {
    name: 'something with context',
}
WithTestContext.decorators = [
    (Story) => (
        <TestContextProvider>
            <Story />
        </TestContextProvider>
    ),
]
