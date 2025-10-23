import React from 'react';
import { useBookNavigation } from '../../hooks/useBookNavigation';
import './Navigation.css';

const Navigation = () => {
  const { closeBook } = useBookNavigation();

  return (
    <div className="navigation">
      <div className="nav-buttons">
        <button 
          onClick={closeBook}
          className="nav-btn close-btn"
          aria-label="Close book"
        >
          Close Book
        </button>
      </div>

      <div className="keyboard-hints">
        <div className="keyboard-hint">
          <kbd className="kbd">Click & Drag</kbd>
          <span>Turn Pages</span>
        </div>
        <div className="keyboard-hint">
          <kbd className="kbd">Swipe</kbd>
          <span>Mobile Navigation</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;