import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextField } from '.'

export default {
  title: 'elements/Input',
  component: TextField,
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Full Name',
  variant: 'default',
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Full Name',
  variant: 'outlined',
}

export const ValidationError = Template.bind({})
ValidationError.args = {
  label: 'Full Name',
  validationError: true,
}
