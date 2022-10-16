import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
}

export const RoundedButton = Template.bind({})
RoundedButton.args = {
  round: true,
  children: 'Rounded Button',
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  size: 'small',
  children: 'Small Button',
}

export const VerySmallButton = Template.bind({})
VerySmallButton.args = {
  size: 'xs',
  children: 'Very Small Button',

}
