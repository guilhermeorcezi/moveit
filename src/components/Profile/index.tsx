import { Container, Avatar } from './styles'

export function Profile(){
  return(
  <Container>
    <Avatar src="https://github.com/guilhermeorcezi.png" alt="Guilherme Orcezi"/>
    <div>
      <strong>Guilherme Orcezi</strong>
      <p>
        <img src="icons/level.svg" alt="Level"/>
        Level 1
      </p>
    </div>
  </Container>
  )
}