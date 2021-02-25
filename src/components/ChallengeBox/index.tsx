import { useContext, useCallback } from 'react';
import {ChallengesContext} from '../../contexts/ChallengesContext'
import { CountdownContext } from '../../contexts/CountdownContext';

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
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengesSucceeded = useCallback(() => {
    completeChallenge();
    resetCountdown();
  }, [completeChallenge]);

  const handleChallengesFailed = useCallback(() => {
    resetChallenge();
    resetCountdown();
  }, []);

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
          <button type="button" onClick={handleChallengesFailed}>Falhei</button>

          <button type="button" onClick={handleChallengesSucceeded}>Completei</button>
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