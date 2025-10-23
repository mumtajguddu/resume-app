import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  currentSpread: 0,
  isTurning: false,
  totalSpreads: 3, // 3 spreads = 6 pages
  isBookOpen: false
};

function appReducer(state, action) {
  switch (action.type) {
    case 'NEXT_SPREAD':
      if (state.currentSpread < state.totalSpreads - 1 && !state.isTurning) {
        return { ...state, currentSpread: state.currentSpread + 1, isTurning: true };
      }
      return state;
    case 'PREV_SPREAD':
      if (state.currentSpread > 0 && !state.isTurning) {
        return { ...state, currentSpread: state.currentSpread - 1, isTurning: true };
      }
      return state;
    case 'SET_SPREAD':
      if (!state.isTurning && action.payload >= 0 && action.payload < state.totalSpreads) {
        return { ...state, currentSpread: action.payload, isTurning: true };
      }
      return state;
    case 'END_TURN':
      return { ...state, isTurning: false };
    case 'OPEN_BOOK':
      return { ...state, isBookOpen: true };
    case 'CLOSE_BOOK':
      return { ...state, isBookOpen: false, currentSpread: 0 };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
