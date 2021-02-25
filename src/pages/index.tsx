import ExperienceBar from '../components/ExperienceBar'
import CompletedChallenges from '../components/CompletedChallenges'
import ChallengeBox from '../components/ChallengeBox'
import { Profile } from '../components/Profile'
import {Container, Section, ItemContainer} from '../styles/pages/Index'
import Countdown from '../components/Countdown'
import { CountdownProvider } from '../contexts/CountdownContext'

export default function Home() {
  return (
    <Container>
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
  )
}
