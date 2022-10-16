import { TabLink } from '@/Tab/TabLink'

export const ProfileLinks = () => {
  return (
    <div className="flex  items-center gap-10 text-gray-500">
      <TabLink href="/my-profile/overview">
        <a className="text-gray-500">Overview</a>
      </TabLink>
      <TabLink href="/my-profile/posts">
        <a className="text-gray-500">Posts</a>
      </TabLink>
      <TabLink href="/my-profile/saved">
        <a className="text-gray-500">Saved</a>
      </TabLink>
      <TabLink href="/my-profile/comments">
        <a className="text-gray-500">Comments</a>
      </TabLink>
    </div>
  )
}
