import React from 'react';
import About from '../../pages/About';
import Skills from '../../pages/Skills';
import Experience from '../../pages/Experience';
import Projects from '../../pages/Projects';
import Testimonials from '../../pages/Testimonials';
import Contact from '../../pages/Contact';

const Page = ({ pageNumber }) => {
  const renderPageContent = () => {
    switch(pageNumber) {
      case 0:
        return <About />;
      case 1:
        return <Skills />;
      case 2:
        return <Experience />;
      case 3:
        return <Projects />;
      case 4:
        return <Testimonials />;
      case 5:
        return <Contact />;
      default:
        return <div>Page {pageNumber + 1}</div>;
    }
  };

  return (
    <div className="page-content">
      {renderPageContent()}
    </div>
  );
};

export default Page;