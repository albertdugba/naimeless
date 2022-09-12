import { Avatar } from './Avatar'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components',
  Component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const AvatarRed = Template.bind({})
export const AvatarTeal = Template.bind({})
export const AvatarGray = Template.bind({})
export const AvatarPink = Template.bind({})

AvatarRed.args = {
  avatarColor: 'red',
}

AvatarTeal.args = {
  avatarColor: 'teal',
}
AvatarGray.args = {
  avatarColor: 'gray',
}
AvatarPink.args = {
  avatarColor: 'deeppink',
}
