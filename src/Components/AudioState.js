import react, {useState, createContext} from'react';

export const AudioState = createContext();

export const AudioProvider = ({children}) => {

  // Bool variable used to change the play and pause button on toggle
  const [isPlaying, setIsPlaying] = useState(false);

  // Stores Active player id.
  const [activePlayer, setActivePlayer] = useState('');
  console.log(activePlayer);

  return(
    <AudioState.Provider value={{value1:[isPlaying, setIsPlaying], value2:[activePlayer, setActivePlayer]}}>
      {children}
    </AudioState.Provider>
  );
}
