import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '.'

export default {
  title: 'elements/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
}

export const SuccessButton = Template.bind({})
SuccessButton.args = {
  children: 'Success Button',
  variant: 'success',
}
