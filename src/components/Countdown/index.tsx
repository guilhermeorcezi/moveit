import SEO from '../SEO';
import {Container, TimeGroup, TimeSeparator, CountdownButton} from './styles';

export default function Countdown(){
  return(
    <>
    <Container>
      <SEO title="Início | MoveIt" isIndex />
      <TimeGroup>
        <span>2</span>
        <span>5</span>
      </TimeGroup>

      <TimeSeparator>:</TimeSeparator>

      <TimeGroup>
        <span>0</span>
        <span>0</span>
      </TimeGroup>
    </Container>

    <CountdownButton type="button">Iniciar um ciclo</CountdownButton>
    </>
  )
}