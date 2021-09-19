import React, { FC } from 'react'
import { ContentContainer, Header, SiteContainer } from './SiteLayout.style'
import { SideBar } from './components/SideBar/SideBar.component'
import { Footer } from './components/Footer/Footer.component'
import { Navbar } from './components/Navbar/Navbar.component'

export const SiteLayout: FC = ({ children }) => {
  return (
    <SiteContainer className="bp3-dark">
      <Header />
      <ContentContainer>
        <Navbar />
        {children}
        <SideBar />
      </ContentContainer>
      {/* <Footer /> */}
    </SiteContainer>
  )
}
