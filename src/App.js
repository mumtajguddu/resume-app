import React from 'react';
import { AppProvider } from './context/AppContext';
import Book from './components/Book/Book';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './styles/Global.css';
import './styles/App.css';

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <div className="app-container">
          <Book />
        </div>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
