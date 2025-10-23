import { useCallback, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export const useBookNavigation = () => {
  const { state, dispatch } = useApp();

  const nextSpread = useCallback(() => {
    dispatch({ type: 'NEXT_SPREAD' });
  }, [dispatch]);

  const prevSpread = useCallback(() => {
    dispatch({ type: 'PREV_SPREAD' });
  }, [dispatch]);

  const goToSpread = useCallback((spreadIndex) => {
    dispatch({ type: 'SET_SPREAD', payload: spreadIndex });
  }, [dispatch]);

  const endTurn = useCallback(() => {
    dispatch({ type: 'END_TURN' });
  }, [dispatch]);

  const openBook = useCallback(() => {
    dispatch({ type: 'OPEN_BOOK' });
  }, [dispatch]);

  const closeBook = useCallback(() => {
    dispatch({ type: 'CLOSE_BOOK' });
  }, [dispatch]);

  // Remove the keyboard event listener that was causing issues
  // or fix it with proper dependencies
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (state.isTurning) return;
      
      switch(e.key) {
        case 'Escape':
          e.preventDefault();
          closeBook();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.isTurning, closeBook]);

  return {
    currentSpread: state.currentSpread,
    isTurning: state.isTurning,
    totalSpreads: state.totalSpreads,
    isBookOpen: state.isBookOpen,
    nextSpread,
    prevSpread,
    goToSpread,
    endTurn,
    openBook,
    closeBook
  };
};