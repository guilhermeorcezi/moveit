import {Container, TimeGroup, TimeSeparator} from './styles';

export default function Countdown(){
  return(
    <Container>
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
  )
}