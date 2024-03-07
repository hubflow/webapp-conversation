'use client'
import type { FC } from 'react'
import React, { useRef } from 'react'
import cn from 'classnames'
import { ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisSolidIcon } from '@heroicons/react/24/solid'
import {
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline'
import { useHover } from 'ahooks'
import { ConversationItem } from '@/types/app'
import ItemOperation from '../../item-operation'
import MessageIcon from '../../icons/MessageIcon'


export type IItemProps = {
  onClick: (id: string) => void
  item: ConversationItem
  isCurrent: boolean
  isPinned: boolean
  togglePin: (id: string) => void
  onDelete: (id: string) => void
  onRenameConversation: (item: ConversationItem) => void
}

const Item: FC<IItemProps> = ({
  isCurrent,
  item,
  onClick,
  isPinned,
  togglePin,
  onDelete,
  onRenameConversation,
}) => {
  const ItemIcon = MessageIcon
  const ref = useRef(null)
  const isHovering = useHover(ref)

  return (
    <div
      ref={ref}
      onClick={() => onClick(item.id)}
      key={item.id}
      className={cn(
        isCurrent
          ? 'bg-[#414C6F] text-[#ECECF1]'
          : 'text-[#ECECF1] hover:bg-[#414C6F] hover:text-[#ECECF1]',
        'group flex items-center justify-between rounded-md px-4 py-4 text-[13.5px] font-medium cursor-pointer min-h-9 h-9',
      )}
    >
      <div className='flex items-center w-0 grow'>
        <ItemIcon
          className={cn(
            'mr-2 h-4 w-4 flex-shrink-0',
          )}
          aria-hidden="true"
        />
        <span className="truncate hover:truncate-off inline-block" title={item.name}>{item.name}</span>
      </div>

      {item.id !== '-1' && (
        <div className='shrink-0 h-6' onClick={e => e.stopPropagation()}>
          <ItemOperation
            isPinned={isPinned}
            isItemHovering={isHovering}
            togglePin={() => togglePin(item.id)}
            isShowDelete
            isShowRenameConversation
            onRenameConversation={() => onRenameConversation(item)}
            onDelete={() => onDelete(item.id)}
          />
        </div>
      )}
    </div>
  )
}
export default React.memo(Item)
