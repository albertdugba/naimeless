import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Avatar } from './avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  avatarColor: 'red',
}
