import React from 'react';

import { Container, Content, ProgressBar, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
  return (
    <Container>
    <Content>
      <span>0 xp</span>
      <div>
      <ProgressBar/>
      <CurrentExperience>300xp</CurrentExperience>
      </div>
      <span>600 xp</span>
    </Content>
    </Container>
  )
}

export default ExperienceBar;