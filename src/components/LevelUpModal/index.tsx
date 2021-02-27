import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import {Container, Header, Overlay} from './styles';

export default function LevelUpModal(){
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return(
    <Overlay>

      <Container>
        <Header>{level}</Header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </Container>
    </Overlay>
  )
}