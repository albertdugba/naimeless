import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Chip } from './chip'

export default {
  title: 'Components/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Chat',
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Main',
}
