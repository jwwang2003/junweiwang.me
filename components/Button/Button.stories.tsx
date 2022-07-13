import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './'

export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  isPrimary: false,
  isBlock: false,
  size: 'md',
  type: "primary",
  children: <p>Button</p>,
  onClick: (ev) => {console.log(ev)}
};