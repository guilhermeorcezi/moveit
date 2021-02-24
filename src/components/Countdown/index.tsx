import { useState, useCallback, useEffect, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext'
import SEO from '../SEO';
import {
  Container,
  TimeGroup,
  TimeSeparator,
  CountdownButton,
  } from './styles';

let countdownTimeout: NodeJS.Timeout;

export default function Countdown(){
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  },[]);

  useEffect(() => {
    if(isActive && time > 0){
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0){
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time])

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