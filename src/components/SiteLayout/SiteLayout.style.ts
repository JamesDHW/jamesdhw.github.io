import styled from 'styled-components'

export const SiteContainer = styled.div`
  max-width: 100vw !important;
  overflow: hidden !important;
`

export const ContentContainer = styled.div`
  max-width: calc(100vw - 250px);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 5%;
  padding-top: 150px;
  padding-bottom: 0px;
  margin-left: 250px;
  @media only screen and (max-width: 600px) {
    max-width: 100vw;
    margin-left: 0px;
    padding: 50px 2%;
    padding-top: 100px;
  }
  @media only screen and (max-width: 700px) and (min-width: 420px) {
    max-width: 100vw;
    margin-left: 0px;
    padding: 50px 10%;
    padding-top: 100px;
  }
`

export const Span = styled.div`
  aspect-ratio: 900/100;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 600px) {
    aspect-ratio: 150/50;
  }
`

export const Header = styled(Span)`
  width: 100%;
  background-image: url('/images/layout/header.svg');
  position: absolute;
  top: 0;
  z-index: 1;
`
