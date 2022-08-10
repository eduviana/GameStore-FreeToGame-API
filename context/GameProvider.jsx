import { useState } from 'react'
import { GameContext } from './GameContext'

export const GameProvider = ({ children }) => {
  
    


   return (
        <GameContext.Provider value={{
            
        }}>
            { children }
        </GameContext.Provider>
   )
}


