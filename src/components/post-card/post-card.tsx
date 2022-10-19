import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { formatDistance } from 'date-fns'

import { Dropdown } from '@/Dropdown/Dropdown'
import { CardProps } from './post-card.interface'
import { Card } from '@/context/card'
import { AddComment, CommentList } from '@/features/comments/components'
import * as Icons from '@/icons/index'
import {
  CardContent,
  CardFooterActionsContainer,
  CardHeaderContainer,
} from './post-card.styled'
import { Chip } from '@/ui/chip'

export const PostCard: FC<CardProps> = ({
  post,
  toggleCard,
  setToggleCard,
}) => {
  // console.log('channel', post.channelName)
  return (
    <Card toggleCard={toggleCard} setToggleCard={setToggleCard}>
      <div className="w-full">
        <div className="w-full flex gap-8 justify-between">
          <div className="flex flex-col w-full">
            <Card.Header>
              <CardHeaderContainer>
                <div className="flex items-center gap-2">
                  <div className="p-0">
                    <Chip label={post.channelName} />
                  </div>
                  <span className="text-[12px] text-gray-400 inline-block whitespace-nowrap">
                    {formatDistance(new Date(post.createdAt), new Date(), {
                      addSuffix: true,
                    })}
                  </span>
                </div>

                <Dropdown
                  title={<Icons.MoreHori />}
                  options={[
                    {
                      label: 'Profile',
                      value: 'Profile',
                      icon: <Icons.People />,
                    },
                  ]}
                />
              </CardHeaderContainer>
            </Card.Header>
            <Card.Body>
              <CardContent>
                <p className="mb-1 text-lg">{post.message}</p>
              </CardContent>
            </Card.Body>

            {/* actions */}
            <Card.Actions>
              <CardFooterActionsContainer>
                <div className="flex items-center gap-[7px] justify-between h-full bg-gray-100 rounded-full px-2 py-1">
                  <button
                    aria-label="up arrow"
                    className="flex gap-[3px] items-center"
                  >
                    <Icons.ArrowUp />
                  </button>
                  <span className="text-[13px] text-gray-500">12</span>
                  <button>
                    <Icons.ArrowDown />
                  </button>
                </div>
                <div className="p-0">
                  <button
                    data-testid="commentHandle"
                    onClick={() => setToggleCard(true)}
                    className="flex items-center gap-1 cursor-pointer hover:bg-gray-200 py-[6px] px-[5px]  rounded-[4px] transition-all"
                  >
                    <Icons.Comment />
                    <span className="text-[13px] text-gray-500">
                      {post?.comments?.length} Comments
                    </span>
                  </button>
                </div>
                <div className="cursor-pointer hover:bg-gray-200 py-[6px] px-[5px]  rounded-[4px] transition-all">
                  <Icons.Share />
                </div>
              </CardFooterActionsContainer>
            </Card.Actions>

            {/* comments section */}
            <AnimatePresence initial={false}>
              {toggleCard ? (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.04, 0.62, 0.23, 0.98],
                  }}
                  className="flex flex-col ite h-full justify-center w-full"
                >
                  <span className="w-full border-b my-4"></span>
                  <AddComment postId={post.id} />
                  <CommentList commnents={post.comments} />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Card>
  )
}
