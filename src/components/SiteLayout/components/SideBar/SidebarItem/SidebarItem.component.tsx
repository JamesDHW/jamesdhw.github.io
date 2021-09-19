import { IconName, Intent } from '@blueprintjs/core'
import { useRouter } from 'next/router'
import React, { FC, ReactElement } from 'react'
import {
  SidebarItemContainer,
  SidebarItemLogo,
  SidebarItemText
} from './SidebarItem.style'

interface Props {
  text: string | ReactElement
  icon?: IconName
  src?: string
  link?: string
}

export const SidebarItem: FC<Props> = ({ icon = null, src, text, link }) => {
  const router = useRouter()
  const onClick = { ...(link && { onClick: () => router.push(link) }) }

  return (
    <SidebarItemContainer
      {...onClick}
      intent={Intent.PRIMARY}
      icon={icon as IconName}>
      {src && <SidebarItemLogo src={src} />}
      <SidebarItemText icon={icon !== null}>{text}</SidebarItemText>
    </SidebarItemContainer>
  )
}
