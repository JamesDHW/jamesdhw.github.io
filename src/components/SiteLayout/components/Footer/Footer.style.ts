import styled from 'styled-components'
import { Span } from '../../SiteLayout.style'

export const FooterBackground = styled(Span)`
  position: relative;
  background-image: url('/images/layout/footer.svg');
`

export const FooterForeground = styled(Span)`
  position: absolute;
  bottom: 0;
  z-index: 5;
  color: red;
  background-image: url('/images/layout/footer-foreground.svg');
`
export const FooterContainer = styled.div``
