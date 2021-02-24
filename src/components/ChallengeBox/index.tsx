
import {
  Container,
  ChallengeNotActive,
  Row,
  ChallengeActive,
  Header,
  Main,
  Footer,
} from './styles'

export default function ChallengeBox(){
  const hasActiveChallenge = true;

  return (
    <Container>
      {hasActiveChallenge ? (
      <ChallengeActive>
        <Header>Ganhe 400xp</Header>

        <Main>
          <img src="/icons/body.svg" alt="Challenge"/>
          <strong>Novo desafio</strong>
          <p>Levante e faça uma caminhada de 3 minutos</p>
        </Main>

        <Footer>
          <button>Falhei</button>

          <button>Completei</button>
        </Footer>

      </ChallengeActive> ) : (

        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>

        <Row>
          <img src="icons/level-up.svg" alt="Level up"/>
          <p>
            Avance de nível completando os desafios.
          </p>
        </Row>
        </ChallengeNotActive>
      )}

    </Container>
  )
}