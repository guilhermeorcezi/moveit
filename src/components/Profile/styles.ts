import styled from 'styled-components';

export const Container = styled.div`
display:flex;
align-items:center;

div{
  margin-left:1.5rem;

  strong{
    font-size:1.5rem;
    font-weight:600;
    color: var(--title);

  }

  p{
    font-size:1rem;
    margin-top:0.5rem;

    img{
      font-size: 1rem;
      margin-right: 0.5rem;
    }
  }
}
`;

export const Avatar = styled.img`
 width:5.5rem;
  height:5.5rem;
  border-radius:50%;
`;