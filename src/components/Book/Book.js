import React, { useEffect, useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useBookNavigation } from '../../hooks/useBookNavigation';
import Page from './Page';
import Navigation from '../Navigation/Navigation';
import './Book.css';

const Book = () => {
  const { isBookOpen, openBook } = useBookNavigation();
  const [isInitialized, setIsInitialized] = useState(false);
  const flipBook = useRef(null);

  // Initialize book open only once
  useEffect(() => {
    if (!isInitialized) {
      const timer = setTimeout(() => {
        openBook();
        setIsInitialized(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isInitialized, openBook]);

  // Set the flip book to show two pages (spread view) after it loads
  useEffect(() => {
    if (isBookOpen && flipBook.current) {
      // Wait for the flip book to initialize then show two pages
      const timer = setTimeout(() => {
        if (flipBook.current && flipBook.current.pageFlip) {
          // Start at page 2 to show pages 2 and 3 as a spread
          flipBook.current.pageFlip().flip(2);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isBookOpen]);

  const handleBookClick = () => {
    if (!isBookOpen) {
      openBook();
    }
  };

  const pages = [0, 1, 2, 3, 4, 5].map(num => (
    <div key={num} className="page-content-wrapper">
      <Page pageNumber={num} />
    </div>
  ));

  if (!isBookOpen) {
    return (
      <div className="book-closed-container">
        <div className="book-closed" onClick={handleBookClick}>
          <div className="book-cover-front">
            <div className="cover-title">
              <h1>My Portfolio</h1>
              <p>Interactive Resume</p>
              <div className="click-instruction">Click to Open</div>
            </div>
          </div>
          <div className="book-spine-closed">
            <div className="spine-title">Portfolio</div>
          </div>
          <div className="book-cover-back"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="book-open-container">
      <div className="flip-book-container">
        <HTMLFlipBook
          width={550}
          height={700}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="flip-book"
          ref={flipBook}
          startPage={2} // Start at page 2 to show pages 2-3 as spread
          drawShadow={true}
          usePortrait={false} // Force landscape mode for spread view
        >
          {/* Cover Page (Page 0) */}
          <div className="page-cover">
            <div className="cover-content">
              <h1>My Portfolio</h1>
              <p>Interactive Resume Book</p>
              <div className="page-number">Cover</div>
            </div>
          </div>

          {/* Inside Cover (Page 1) */}
          <div className="page-content-wrapper inside-cover">
            <div className="page-content">
              <h2>Welcome</h2>
              <p>Flip through the pages to explore my professional journey, skills, and projects.</p>
              <div className="page-number">1</div>
            </div>
          </div>

          {/* Content Pages */}
          {pages}

          {/* Back Cover (Page 8) */}
          <div className="page-cover back-cover">
            <div className="cover-content">
              <h2>Thank You</h2>
              <p>For viewing my portfolio</p>
              <div className="page-number">Back Cover</div>
            </div>
          </div>
        </HTMLFlipBook>
      </div>
      <Navigation />
    </div>
  );
};

export default Book;