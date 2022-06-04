import styled from 'styled-components'
import { ComposeInput } from '../MessageBox'
import { getLayout } from '../layout'
import { UserAvatar } from '../elements/Avatar'
import * as Icon from '../../../public/icons/index'

export const MainContent = () => {
  return (
    <div className="h-full bg-gray-100">
      <div className="border-b">
        <div className="p-6">
          <ComposeInput />
        </div>
      </div>
      <div className="p-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
          <CardContainer key={card} className="bg-white p-6 my-4">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <UserAvatar />
                <div className="flex items-center gap-2">
                  <span className="text-[14px]">Anon1</span>
                  <span className="text-[12px] text-gray-500">5hrs ago</span>
                </div>
              </div>
              <div>
                <Icon.MoreHori />
              </div>
            </div>
            <p className="text-gray-500 text-[0.9rem] mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam maxime quod nam?
            </p>
          </CardContainer>
        ))}
      </div>
    </div>
  )
}

MainContent.getLayout = getLayout

const CardContainer = styled.div`
  border-radius: 8px;
  background: -webkit-linear-gradient(to left, #fadbf5, #e0c9f3);
  background: linear-gradient(to left, #fbf1f9, #f8f6fa);
`
