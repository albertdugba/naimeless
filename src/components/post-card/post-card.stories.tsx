import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PostCard } from './post-card'

export default {
  title: 'Components/Card',
  component: PostCard,
} as ComponentMeta<typeof PostCard>

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
)

export const Default = Template.bind({})
