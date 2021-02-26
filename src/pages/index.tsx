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

interface HomeProps{
  level:number;
  currentExperience:number;
  challengesCompleted:number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}>

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
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}