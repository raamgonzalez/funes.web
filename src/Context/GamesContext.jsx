import { createContext } from 'react';
import { data } from '../data/data';

export const GamesContext = createContext('');

const GamesContextProvider = ({ children }) =>{

    const { games } = data;

    return(
        <GamesContext.Provider value={{
            games
            }}>
            {children}
        </GamesContext.Provider>
    )
}

export default GamesContextProvider;

