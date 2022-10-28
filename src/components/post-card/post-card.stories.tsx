import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PostCard } from './post-card'
import POST from 'mocks/post.json'

export default {
  title: 'Components/PostCard',
  component: PostCard,
  args: {
    post: POST[0],
  },
} as unknown as ComponentMeta<typeof PostCard>

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
)

export const Default = Template.bind({})
Default.args = {}
