import styled from 'styled-components';

interface ButtonProps{
  isActive?: boolean;
}

export const Container = styled.div`
display:flex;
align-items:center;
font-family:Rajdhani;
font-weight:600;
color: var(--title);
`;

export const TimeGroup = styled.div`
flex:1;

display:flex;
align-items:center;
justify-content:space-evenly;

background:var(--white);
box-shadow:0 0 60px rgba(0, 0, 0, 0.05);
border-radius:5px;
font-size:8.5rem;
text-align:center;

span{
  flex:1;

  &:first-child{
    border-right: 1px solid #f0f1f3;
  }

  &:last-child{
    border-left: 1px solid #f0f1f3;
  }
}

`;

export const TimeSeparator = styled.span`
font-size:6.25rem;
margin:0 0.5rem;
`;

export const CountdownButton = styled.button<ButtonProps>`
width:100%;
height:5rem;

margin-top:2rem;

display:flex;
align-items:center;
justify-content:center;
border:0;


background: ${props => props.isActive ? `var(--white)` : `var(--blue)`};
color: ${props => props.isActive ? `var(--title)` : `var(--white)`};

font-size:1.2rem;
font-weight:600;

transition: background-color 0.2s;

&:hover{
  background: ${props => props.isActive ? `var(--red)` : `var(--blue-dark)`};
  color: ${props => props.isActive && `var(--white)`};
}
`