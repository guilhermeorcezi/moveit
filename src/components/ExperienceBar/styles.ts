import styled from 'styled-components';

interface CurrentExperienceProps{
  level: number;
}
interface ProgressBarProps{
  level: number;
}

export const Content = styled.div`
  display:flex;
  align-items:center;

span{
  font-size:1rem;
}

.progress-div{
  background: var(--gray-line);
  flex:1;
  height:4px;
  border-radius:4px;
  margin: 0 1.5rem;
  position: relative;
}
`;

export const ProgressBar = styled.div<ProgressBarProps>`
height:4px;
border-radius:4px;
background: var(--green);
width:${props => `${props.level}%`};
`;

export const CurrentExperience = styled.span<CurrentExperienceProps>`
left:${props => `${props.level}%`};
position:absolute;
top:12px;
transform:translateX(-50%);
`;