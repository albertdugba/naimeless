import { PostCard } from '../elements/Card'
import { getLayout } from '../layout'
import Gravatar from 'react-gravatar'
import * as Icons from '../../../public/icons'

export const Feed = () => {
  return (
    <>
      {new Array(10).fill(
        <div className="mt-3">
          <PostCard>
            <div className="flex gap-3 w-full">
              <Gravatar
                email="hello@support.com"
                className="w-[35px] h-[35px] rounded-full"
              />

              <div className="w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-gray-400">anon</span>
                    <span className="text-[12px] text-gray-400">4hrs ago</span>
                  </div>
                </div>

                <div className="py-1 text-[11px]">
                  <p>
                    Chale what dey go on ?? Chale what dey go on ?? Chale what
                    dey
                  </p>
                </div>

                {/* actions */}
                <div className="flex gap-8 mt-[6px] items-center">
                  <div className="flex gap-2 items-center cursor-pointer">
                    <Icons.Comment />
                    <span className="text-[9px]">Comments</span>
                  </div>
                  <div className="flex gap-2 items-center cursor-pointer">
                    <Icons.Share />
                    <span className="text-[9px]">Share</span>
                  </div>
                  <Icons.MoreHori />
                </div>
              </div>
              <div className="flex flex-col items-center justify-between h-full">
                <button>
                  <Icons.ChevronUp />
                </button>
                <span className="flex items-end">0</span>
                <button>
                  <Icons.ChevronDown />
                </button>
              </div>
            </div>
          </PostCard>
        </div>
      )}
    </>
  )
}

Feed.getLayout = getLayout
