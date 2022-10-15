import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Hello Button and very long text',
  round: true,
  variant: 'ghost',
  size: 'small',
}
