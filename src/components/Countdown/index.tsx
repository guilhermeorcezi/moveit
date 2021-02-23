import { useState, useCallback, useEffect } from 'react';
import SEO from '../SEO';
import {Container, TimeGroup, TimeSeparator, CountdownButton} from './styles';

export default function Countdown(){
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

  const startCountdown = useCallback(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    if(active && time > 0){
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
  }, [active, time])

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

    <CountdownButton type="button" onClick={startCountdown}>Iniciar um ciclo</CountdownButton>
    </>
  )
}