import { FC } from 'react'
import {
  FooterBackground,
  FooterContainer,
  FooterForeground
} from './Footer.style'

export const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterBackground />
      <FooterForeground />
    </FooterContainer>
  )
}
