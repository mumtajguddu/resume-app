import React from 'react';
import { resumeData } from '../data/resumeData';

const Skills = () => {
  const { skills } = resumeData;

  return (
    <div style={{ padding: '10px' }}>
      <h2>Skills & Expertise</h2>
      
      {/* Technical Skills */}
      <div style={{
        marginBottom: '35px',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
      }}>
        <h3 style={{
          color: '#8B4513',
          marginBottom: '25px',
          fontSize: '1.5em',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          borderBottom: '2px solid #A0522D',
          paddingBottom: '10px'
        }}>
          <span style={{ fontSize: '1.3em' }}>💻</span>
          Technical Proficiency
        </h3>
        
        <div style={{
          display: 'grid',
          gap: '20px'
        }}>
          {skills.technical.map((skill, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px'
              }}>
                <span style={{
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '1.05em'
                }}>
                  {skill.name}
                </span>
                <span style={{
                  color: '#8B4513',
                  fontWeight: '700',
                  fontSize: '0.95em',
                  backgroundColor: 'rgba(139, 69, 19, 0.1)',
                  padding: '4px 10px',
                  borderRadius: '12px'
                }}>
                  {skill.level}%
                </span>
              </div>
              <div style={{
                height: '10px',
                background: 'linear-gradient(90deg, #f0f0f0, #e0e0e0)',
                borderRadius: '5px',
                overflow: 'hidden',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <div 
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #8B4513, #A0522D)',
                    borderRadius: '5px',
                    width: `${skill.level}%`,
                    transition: 'width 1.5s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    animation: 'shine 2s infinite'
                  }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Skills */}
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
      }}>
        <h3 style={{
          color: '#8B4513',
          marginBottom: '25px',
          fontSize: '1.5em',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          borderBottom: '2px solid #A0522D',
          paddingBottom: '10px'
        }}>
          <span style={{ fontSize: '1.3em' }}>🚀</span>
          Professional Competencies
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px'
        }}>
          {skills.professional.map((skill, index) => (
            <div key={index} style={{
              padding: '20px',
              backgroundColor: 'rgba(139, 69, 19, 0.05)',
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid rgba(139, 69, 19, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 8px 25px rgba(139, 69, 19, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
            >
              <div style={{
                fontSize: '2em',
                marginBottom: '10px'
              }}>
                {index % 4 === 0 ? '👑' : index % 4 === 1 ? '🎯' : index % 4 === 2 ? '💡' : '🌟'}
              </div>
              <span style={{
                fontWeight: '600',
                color: '#8B4513',
                fontSize: '1em'
              }}>
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Skills;