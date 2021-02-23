import React from 'react';

import { Content, ProgressBar, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
  return (
    <Content>
      <span>0 xp</span>
      <div className="progress-div">
      <ProgressBar/>
      <CurrentExperience>300xp</CurrentExperience>
      </div>
      <span>600 xp</span>
    </Content>
  )
}

export default ExperienceBar;