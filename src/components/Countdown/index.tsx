import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import SEO from '../SEO';
import {
  Container,
  TimeGroup,
  TimeSeparator,
  CountdownButton,
  } from './styles';



export default function Countdown(){
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext)


  const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');



  return(
    <>
    <Container>
      <SEO title="Início | MoveIt" isIndex />
      <TimeGroup>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </TimeGroup>

      <TimeSeparator>:</TimeSeparator>

      <TimeGroup>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </TimeGroup>
    </Container>

    {hasFinished ? (
       <CountdownButton
       disabled
       >
         Ciclo encerrado
       </CountdownButton>
    ) : (
      <>
        {isActive ? (
          <CountdownButton
          type="button"
          onClick={resetCountdown}
          isActive={isActive}
          >
            Abandonar ciclo
          </CountdownButton>
        ) : (
          <CountdownButton
          type="button"
          onClick={startCountdown}>
            Iniciar um ciclo
          </CountdownButton>
        )}
      </>
    )}
    </>
  )
}