/*here we are setting up the data layer so that we can push info into it so that it is avalilable to all the components without us manually]
passing the props to each and every comp*/
/*we need to track the basket*/

// by react context ..we basically create global variables
// that can be passed around in React app. instead of passing
// props from grandparents to parents;

import React, { createContext, useContext, useReducer } from "react";

// this is the data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

// this is how we use it inside a component :)
