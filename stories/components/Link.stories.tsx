// Button.stories.ts | Button.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import {Link, LinkProps} from '../../components/Link';

export default {
    component: Link,
    title: 'Components/Link',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<LinkProps> = (args) => <Link {...args}/>;
export const Primary = Template.bind({});

Primary.args = {
    href: "https://www.google.pl",
    children: 'Basic link',
};
