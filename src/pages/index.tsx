import ExperienceBar from '../components/ExperienceBar'
import CompletedChallenges from '../components/CompletedChallenges'
import { Profile } from '../components/Profile'
import {Container, Section, ItemContainer} from '../styles/pages/Index'

export default function Home() {
  return (
    <Container>
    <ExperienceBar/>

    <Section>
      <ItemContainer>
        <Profile/>
        <CompletedChallenges/>
      </ItemContainer>

      <ItemContainer></ItemContainer>
    </Section>
    </Container>
  )
}
