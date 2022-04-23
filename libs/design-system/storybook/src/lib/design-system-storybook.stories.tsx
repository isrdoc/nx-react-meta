import { Story, Meta } from '@storybook/react';
import {
  DesignSystemStorybook,
  DesignSystemStorybookProps,
} from './design-system-storybook';

export default {
  component: DesignSystemStorybook,
  title: 'DesignSystemStorybook',
} as Meta;

const Template: Story<DesignSystemStorybookProps> = (args) => (
  <DesignSystemStorybook {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
