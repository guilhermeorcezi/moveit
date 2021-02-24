import {useState, useCallback, ReactNode} from 'react';
import { createContext } from 'react';


interface ChallengesContextData{
  level:number;
  currentExperience:number;
  challengesCompleted:number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps{
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const levelUp = useCallback(() => {
    setLevel(level+1);
  },[]);

  const startNewChallenge = useCallback(() => {

  },[]);

  return(
    <ChallengesContext.Provider
    value={{
      level,
      levelUp,
      currentExperience,
      challengesCompleted,
      startNewChallenge
      }}>
      {children}
    </ChallengesContext.Provider>
  )

}