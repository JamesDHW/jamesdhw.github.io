import { NextPage } from 'next'
import React from 'react'
import { SiteLayout } from '../../SiteLayout/SiteLayout.component'
import { Technologies } from './components/Technologies/Technologies.component'
import { PageTitle } from './IndexPage.style'
import { PAGE_TITLES } from './constants'

export const IndexPage: NextPage = () => {
  const pageTitle = PAGE_TITLES[Math.floor(Math.random() * PAGE_TITLES.length)]
  return (
    <SiteLayout>
      <PageTitle>{pageTitle} 👋</PageTitle>
      <Technologies />
    </SiteLayout>
  )
}
