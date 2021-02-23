import ExperienceBar from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import {Container, Section, ItemContainer} from '../styles/pages/Index'

export default function Home() {
  return (
    <Container>
    <ExperienceBar/>

    <Section>
      <ItemContainer>
        <Profile/>
      </ItemContainer>

      <ItemContainer></ItemContainer>
    </Section>
    </Container>
  )
}
