import React from 'react';
import { resumeData } from '../data/resumeData';

const Projects = () => {
  const { projects } = resumeData;

  return (
    <div style={{ padding: '10px' }}>
      <h2>Featured Projects</h2>
      
      <div style={{
        display: 'grid',
        gap: '30px',
        marginTop: '25px'
      }}>
        {projects.map((project) => (
          <div key={project.id} className="project-card" style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 6px 25px rgba(0,0,0,0.08)',
            borderLeft: '6px solid #8B4513',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Project Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  color: '#8B4513',
                  marginBottom: '8px',
                  fontSize: '1.6em',
                  fontWeight: '700'
                }}>
                  {project.name}
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '1.1em',
                  lineHeight: '1.5',
                  marginBottom: '15px'
                }}>
                  {project.description}
                </p>
                <div style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(139, 69, 19, 0.1)',
                  color: '#8B4513',
                  padding: '6px 15px',
                  borderRadius: '20px',
                  fontSize: '0.9em',
                  fontWeight: '600',
                  border: '1px solid rgba(139, 69, 19, 0.2)'
                }}>
                  {project.role}
                </div>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                padding: '15px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 215, 0, 0.3)'
              }}>
                <h4 style={{
                  color: '#8B4513',
                  marginBottom: '8px',
                  fontSize: '1em'
                }}>
                  Impact
                </h4>
                <p style={{
                  color: '#666',
                  fontSize: '0.9em',
                  margin: 0,
                  fontStyle: 'italic'
                }}>
                  {project.impact}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div style={{ marginBottom: '25px' }}>
              <h4 style={{
                color: '#8B4513',
                marginBottom: '12px',
                fontSize: '1.2em',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>🛠️</span>
                Technologies & Tools
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                {project.technologies.map((tech, index) => (
                  <span key={index} style={{
                    backgroundColor: 'rgba(139, 69, 19, 0.1)',
                    color: '#8B4513',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9em',
                    fontWeight: '600',
                    border: '1px solid rgba(139, 69, 19, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#8B4513';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(139, 69, 19, 0.1)';
                    e.target.style.color = '#8B4513';
                    e.target.style.transform = 'scale(1)';
                  }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 style={{
                color: '#8B4513',
                marginBottom: '15px',
                fontSize: '1.2em',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>✨</span>
                Key Features
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '12px'
              }}>
                {project.features.map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px',
                    backgroundColor: 'rgba(139, 69, 19, 0.03)',
                    borderRadius: '8px',
                    border: '1px solid rgba(139, 69, 19, 0.1)'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#A0522D',
                      borderRadius: '50%',
                      flexShrink: 0
                    }}></div>
                    <span style={{
                      color: '#555',
                      fontSize: '0.95em',
                      lineHeight: '1.4'
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Background decoration */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '120px',
              height: '120px',
              backgroundColor: 'rgba(139, 69, 19, 0.03)',
              borderRadius: '50%',
              zIndex: 0
            }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;