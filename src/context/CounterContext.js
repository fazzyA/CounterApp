import { createContext, useReducer } from "react";
import React from 'react'
import { CounterReducer } from "./CounterReducer";

export const MyContext = createContext()


export const CounterContext = ({children}) => {
    // const [initialState, setinitialState] = useState({
    //     count: 0,
    // })
    const [state, dispatch] = useReducer(CounterReducer, {count: 0})
  return (
    <MyContext.Provider value={{state, dispatch}}>{children}</MyContext.Provider>
  )
}

// export Count

