import { useState, useCallback, useEffect } from 'react';
import SEO from '../SEO';
import {
  Container,
  TimeGroup,
  TimeSeparator,
  CountdownButton,
  } from './styles';

export default function Countdown(){
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  useEffect(() => {
    if(isActive && time > 0){
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)
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

    {isActive ? (
      <CountdownButton
      type="button"
      onClick={startCountdown}
      isActive={isActive}
      >
        Abandonar ciclo
      </CountdownButton>
    ) : (
      <CountdownButton
      type="button"
      onClick={startCountdown}>
        Adicionar um ciclo
      </CountdownButton>
    )}
    </>
  )
}