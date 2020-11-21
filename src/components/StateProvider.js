import React, { useReducer, useContext } from 'react'
import { createContext } from 'react'

export const StateContext=createContext()
export default function StateProvider({initialState,reducer,children}) {
    return (
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue=()=>useContext(StateContext)