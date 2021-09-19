import React, { FC } from 'react'
import { AvatarBlob } from './Avatar.style'

interface Props {
  size?: number
}

export const Avatar: FC<Props> = () => {
  return <AvatarBlob src="/images/avatar/James.png"></AvatarBlob>
}
