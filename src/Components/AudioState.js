import react, {useState, createContext} from'react';

export const AudioState = createContext();

export const AudioProvider = ({children}) => {

  // Stores Active player id.
  const [activePlayer, setActivePlayer] = useState('');

  return(
    <AudioState.Provider value={[activePlayer, setActivePlayer]}>
      {children}
    </AudioState.Provider>
  );
}
