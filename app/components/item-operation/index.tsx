'use client'
import type { FC } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { useBoolean } from 'ahooks'
import PenIcon from '../icons/PenIcon'
import s from './style.module.css'
import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '@/app/components/base/portal-to-follow-elem'
import PinIcon from '../icons/Pin'
import DeleteIcon from '../icons/Delete'

export type IItemOperationProps = {
  className?: string
  isItemHovering?: boolean
  isPinned: boolean
  isShowRenameConversation?: boolean
  onRenameConversation?: () => void
  isShowDelete: boolean
  togglePin: () => void
  onDelete: () => void
}

const ItemOperation: FC<IItemOperationProps> = ({
  className,
  isItemHovering,
  isPinned,
  togglePin,
  isShowRenameConversation,
  onRenameConversation,
  isShowDelete,
  onDelete,
}) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const [isHovering, { setTrue: setIsHovering, setFalse: setNotHovering }] = useBoolean(false)
  useEffect(() => {
    if (!isItemHovering && !isHovering)
      setOpen(false)
  }, [isItemHovering, isHovering])
  return (
    <PortalToFollowElem
      open={open}
      onOpenChange={setOpen}
      placement='bottom-end'
      offset={4}
    >
      <PortalToFollowElemTrigger
        onClick={() => setOpen(v => !v)}
      >
        <div className={cn('h-6 w-6 rounded-md border-none py-1', (isItemHovering || open) && `${s.open} !shadow-none`)}>
          {isItemHovering && <PenIcon className='h6 w-6' />}
        </div>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent
        className="z-50"
      >
        <div
          ref={ref}
          className={'min-w-[120px] p-1 bg-white rounded-lg border border--gray-200 shadow-lg'}
          onMouseEnter={setIsHovering}
          onMouseLeave={setNotHovering}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          {/* <div className={cn(s.actionItem, 'hover:bg-gray-50 group')} onClick={togglePin}>
            <PinIcon className='shrink-0 w-4 h-4 text-gray-500' />
            <span className={s.actionName}>{isPinned ? t('app.chat.action.unpin') : t('app.chat.action.pin')}</span>
          </div> */}
          {isShowRenameConversation && (
            <div className={cn(s.actionItem, 'hover:bg-gray-50 group')} onClick={onRenameConversation}>
              <PenIcon className='shrink-0 w-4 h-4 text-gray-500' />
              <span className={s.actionName}>{t('app.chat.action.rename')}</span>
            </div>
          )}
          {isShowDelete && (
            <div className={cn(s.actionItem, s.deleteActionItem, 'hover:bg-gray-50 group')} onClick={onDelete} >
              <DeleteIcon className={cn(s.deleteActionItemChild, 'shrink-0 w-4 h-4 stroke-current text-gray-500 stroke-2')} />
              <span className={cn(s.actionName, s.deleteActionItemChild)}>{t('app.chat.action.delete')}</span>
            </div>
          )}
        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  )
}
export default React.memo(ItemOperation)
