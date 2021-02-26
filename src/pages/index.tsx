import ExperienceBar from '../components/ExperienceBar'
import CompletedChallenges from '../components/CompletedChallenges'
import ChallengeBox from '../components/ChallengeBox'
import SEO from '../components/SEO';
import { Profile } from '../components/Profile'
import Countdown from '../components/Countdown'
import { CountdownProvider } from '../contexts/CountdownContext'
import {Container, Section, ItemContainer} from '../styles/pages/Index'

import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';

export default function Home() {
  return (
    <ChallengesProvider>

      <Container>
        <SEO title="Início | MoveIt" isIndex />
        <ExperienceBar/>

        <CountdownProvider>
          <Section>
            <ItemContainer>
              <Profile/>
              <CompletedChallenges/>
              <Countdown/>
            </ItemContainer>

            <ItemContainer>
              <ChallengeBox/>
            </ItemContainer>
          </Section>
        </CountdownProvider>

      </Container>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props: {
      level,
      currentExperience,
      challengesCompleted
    }
  }
}