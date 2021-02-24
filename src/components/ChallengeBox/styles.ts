import styled from 'styled-components';

export const Container = styled.div`
height:100%;

background: var(--white);
border-radius:5px;
box-shadow:0 0 60px rgba(0, 0, 0, 0.05);
padding:1.5rem 2rem;

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

text-align:center;

`;

export const ChallengeNotActive = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
max-width:70%;


strong{
  font-size:1.5rem;
  font-weight:500;
  line-height:1.4;
}

p{
  text-align:left;
  line-height:1.5;

}

img{
  margin-right:1rem;
  max-width:10%;
}
`;


export const Row = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;

margin-top:3rem;

`;

export const ChallengeActive = styled.div`
  height:100%;

  display:flex;
  flex-direction:column;
`;

export const Header = styled.div`
  color: var(--blue);
  font-weight:600;
  font-size:1.25rem;
  padding:0 2rem 1.5rem;
  border-bottom:1px solid var(--gray-line);
`;

export const Main = styled.main`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

strong{
  font-size:2rem;
  font-weight:600;
  color: var(--title);
  margin:1.5rem 0 1rem;
}

p{
  line-height:1.5
}
`;

export const Footer = styled.footer`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap: 1rem;

button{
  height:3rem;

  display:flex;
  align-items:center;
  justify-content:center;

  border:0;
  border-radius:5px;

  color: var(--white);

  font-size:1rem;
  font-weight:600;

  transition: filter 0.2s
}

button:hover{
  filter: brightness(0.9);
}

button:first-child{
  background: var(--red);
}

button:last-child{
  background: var(--green);
}

`;