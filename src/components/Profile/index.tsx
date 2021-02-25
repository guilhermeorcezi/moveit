import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { Container, Avatar } from './styles'

export function Profile(){
  const { level } = useContext(ChallengesContext)


  return(
  <Container>
    <Avatar src="https://github.com/guilhermeorcezi.png" alt="Guilherme Orcezi"/>
    <div>
      <strong>Guilherme Orcezi</strong>
      <p>
        <img src="icons/level.svg" alt="Level"/>
        Level {level}
      </p>
    </div>
  </Container>
  )
}