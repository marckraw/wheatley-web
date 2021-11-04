import React from 'react'

import { Meta, Story } from '@storybook/react';

import TestContextProvider from "../../contexts/TestContext";
import {Accordion, AccordionProps} from "../../components/Collapsible/Accordion";

export default {
    component: Accordion,
    title: 'Components/Accordion',
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
const Template: Story<AccordionProps> = (args) => <Accordion {...args}>
    <div>some elements</div>
</Accordion>;

export const Primary = Template.bind({});
export const WithTestContext = Template.bind({});

Primary.args = {
    headerNotExpanded: <h3>Show stuff</h3>,
    headerExpanded: <h3>Hide stuff</h3>
};

WithTestContext.args = {
    ...Primary.args
}
WithTestContext.decorators = [
    (Story) => (
        <TestContextProvider>
            <Story />
        </TestContextProvider>
    ),
]
