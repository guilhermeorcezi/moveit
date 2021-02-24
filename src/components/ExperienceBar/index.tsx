import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Content, ProgressBar, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
  const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Content>
      <span>0 xp</span>
      <div className="progress-div">
      <ProgressBar level={percentToNextLevel}/>
      <CurrentExperience level={percentToNextLevel}>{currentExperience} xp</CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Content>
  )
}

export default ExperienceBar;