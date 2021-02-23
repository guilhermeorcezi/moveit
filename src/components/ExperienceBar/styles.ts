import styled from 'styled-components';

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

export const ProgressBar = styled.div`
height:4px;
border-radius:4px;
background: var(--green);
width:50%;
`;

export const CurrentExperience = styled.span`
left:50%;
position:absolute;
top:12px;
transform:translateX(-50%);
`;