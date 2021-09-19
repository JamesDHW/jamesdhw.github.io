import { Intent, InputGroup, H2 } from '@blueprintjs/core'
import { Tooltip2 } from '@blueprintjs/popover2'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { TECHNOLOGIES } from '../../constants'
import { RatingBar } from './components/RatingBar/RatingBar.component'
import {
  StyledCallout,
  BadgeContainer,
  ImageContainer,
  TechContainer,
  Header,
  TooltipContainer,
  SearchContainer,
  TechName,
  ShuffleButton
} from './Technologies.style'
import { shuffle } from 'lodash'
import { TechDialog } from './components/TechDialog/TechDialog.component'

export const Technologies: FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTech, setSelectedTech] = useState(-1)
  const [displayedTechnologies, setDisplayedTechnologies] =
    useState(TECHNOLOGIES)

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value)

  const shuffleTechnologies = () =>
    setDisplayedTechnologies(shuffle(TECHNOLOGIES))

  useEffect(shuffleTechnologies, [])
  return (
    <StyledCallout intent={Intent.PRIMARY} icon={null}>
      <Header>
        <H2>Tech on my radar:</H2>
        <SearchContainer>
          <InputGroup
            fill
            large
            leftIcon="search"
            type="search"
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Search for more"
          />
          <ShuffleButton onClick={shuffleTechnologies} icon="refresh" />
        </SearchContainer>
      </Header>
      <TechContainer>
        {displayedTechnologies
          .filter(({ name }) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .slice(0, 12)
          .map(({ name, alt, src, skillLevel, iLikeThis, subText }, key) => (
            <>
              <TechDialog
                name={name}
                alt={alt}
                src={src}
                subText={subText}
                skillLevel={skillLevel}
                iLikeThis={iLikeThis}
                isOpen={selectedTech === key}
                onClose={() => setSelectedTech(-1)}
              />
              <Tooltip2
                key={key}
                content={
                  <TooltipContainer>
                    <RatingBar
                      icon="star"
                      iconEmpty="star-empty"
                      rating={skillLevel}
                      intent={Intent.WARNING}
                    />
                    <RatingBar
                      icon="thumbs-up"
                      rating={iLikeThis}
                      intent={Intent.SUCCESS}
                    />
                  </TooltipContainer>
                }
                placement="bottom"
                inheritDarkTheme
                intent="primary">
                <BadgeContainer onClick={() => setSelectedTech(key)}>
                  <ImageContainer offset={key}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/technologies/${src}`}
                      height={90}
                      width={90}
                      alt={alt}
                    />
                  </ImageContainer>
                  <TechName>{name}</TechName>
                </BadgeContainer>
              </Tooltip2>
            </>
          ))}
      </TechContainer>
    </StyledCallout>
  )
}
