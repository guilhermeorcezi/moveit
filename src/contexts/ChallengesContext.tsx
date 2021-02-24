import {useState, useCallback, ReactNode, createContext} from 'react';
import challenges from '../../challenges.json'

interface Challenge{
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData{
  level:number;
  currentExperience:number;
  challengesCompleted:number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

interface ChallengesProviderProps{
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level+1) * 4, 2);

  const levelUp = useCallback(() => {
    setLevel(level+1);
  },[]);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  },[]);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  },[]);

  return(
    <ChallengesContext.Provider
    value={{
      level,
      levelUp,
      currentExperience,
      experienceToNextLevel,
      challengesCompleted,
      startNewChallenge,
      activeChallenge,
      resetChallenge
      }}>
      {children}
    </ChallengesContext.Provider>
  )

}