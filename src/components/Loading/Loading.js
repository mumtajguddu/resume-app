import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="book-loader">
        <div className="book">
          <div className="cover"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="cover back"></div>
        </div>
      </div>
      <p>Opening Portfolio Book...</p>
    </div>
  );
};

export default Loading;
