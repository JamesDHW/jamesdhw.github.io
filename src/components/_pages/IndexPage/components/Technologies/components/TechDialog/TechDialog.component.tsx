import { Dialog, Intent } from '@blueprintjs/core'
import React, { FC } from 'react'
import { RatingBar } from '../RatingBar/RatingBar.component'
import {
  DialogLogoContainer,
  DialogContentContainer,
  TooltipContainer
} from './TechDialog.style'

interface Props {
  name: string
  alt: string
  src: string
  subText?: string
  skillLevel: number
  iLikeThis: number
  onClose: () => void
  isOpen: boolean
}

export const TechDialog: FC<Props> = ({
  name,
  alt,
  src,
  subText,
  skillLevel,
  iLikeThis,
  onClose,
  isOpen
}) => {
  return (
    <Dialog
      className="bp3-dark"
      isOpen={isOpen}
      onClose={onClose}
      title={name}
      icon="info-sign">
      <TooltipContainer>
        <DialogLogoContainer intent={Intent.PRIMARY} icon={null}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/technologies/${src}`}
            height={90}
            width={90}
            alt={alt}
          />
        </DialogLogoContainer>

        <DialogContentContainer>
          {subText !== undefined && subText}
        </DialogContentContainer>

        <DialogContentContainer>
          I am good at this:
          <RatingBar
            icon="star"
            iconEmpty="star-empty"
            rating={skillLevel}
            intent={Intent.WARNING}
          />
        </DialogContentContainer>

        <DialogContentContainer>
          I think this is cool:
          <RatingBar
            icon="thumbs-up"
            rating={iLikeThis}
            intent={Intent.SUCCESS}
          />
        </DialogContentContainer>
      </TooltipContainer>
    </Dialog>
  )
}
