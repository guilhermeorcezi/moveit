import styled from 'styled-components';

export const Container = styled.header`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display:flex;
  flex-direction:column;
`;

export const Content = styled.div`
  display:flex;
  align-items:center;

span{
  font-size:1rem;
}

div{
  flex:1;
  height:4px;
  border-radius:4px;
  background: var(--gray-line);
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
transform:translateX(-50%);
`;