// Button.stories.ts | Button.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import {SimpleButton, SimpleButtonProps} from '../../components/SimpleButton';
import TestContextProvider, {TestContext} from "../../contexts/TestContext";

export default {
    component: SimpleButton,
    title: 'Components/SimpleButton',
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
const Template: Story<SimpleButtonProps> = (args) => <SimpleButton {...args}/>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const WithTestContext = Template.bind({});

Primary.args = {
    primary: true,
    children: 'Primary Button',
};

Secondary.args = {
    primary: false,
    children: 'Secondary Button',
};

WithTestContext.args = {
    primary: true,
    children: 'Primary Button',
}
WithTestContext.decorators = [
    (Story) => (
        <TestContextProvider>
            <Story />
        </TestContextProvider>
    ),
]
