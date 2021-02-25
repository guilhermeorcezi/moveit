import {useContext} from 'react';
import {ChallengesContext} from '../../contexts/ChallengesContext'

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
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);

  return (
    <Container>
      {activeChallenge ? (
      <ChallengeActive>
        <Header>Ganhe {activeChallenge.amount} xp</Header>

        <Main>
          <img src={`icons/${activeChallenge.type}.svg`} alt="Challenge"/>
          <strong>Novo desafio</strong>
          <p>{activeChallenge.description}</p>
        </Main>

        <Footer>
          <button type="button" onClick={resetChallenge}>Falhei</button>

          <button type="button" onClick={completeChallenge}>Completei</button>
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