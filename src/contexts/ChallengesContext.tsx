import{
useState,
useCallback,
ReactNode,
createContext,
useEffect
} from 'react';
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
  completeChallenge: () => void;
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

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const levelUp = useCallback(() => {
    setLevel(level+1);
  },[]);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

     if(Notification.permission === 'granted'){
       new Notification('Novo desafio!',{
         body: `Valendo ${challenge.amount}xp!`
       })
     }
  },[]);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  },[]);

  const completeChallenge = useCallback(() => {
    if (!activeChallenge){
      return;
    }

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);


  },[activeChallenge, currentExperience]);

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
      resetChallenge,
      completeChallenge,
      }}>
      {children}
    </ChallengesContext.Provider>
  )

}