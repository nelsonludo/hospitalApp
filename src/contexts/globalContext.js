import React, { useContext, useReducer } from 'react';
// import axios from 'axios';
import reducer from '../reducers/globalReducer';
// import { API_LINK } from '../utils/constants.js';
import {} from '../utils/actions';

const initialState = {
  user: {},
  loading: false,
};

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext, GlobalProvider };
