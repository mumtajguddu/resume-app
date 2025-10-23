import React from 'react';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  const { experience } = resumeData;

  return (
    <div style={{ padding: '10px' }}>
      <h2>Professional Experience</h2>
      
      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '30px',
          top: '0',
          bottom: '0',
          width: '3px',
          backgroundColor: '#8B4513',
          borderRadius: '2px'
        }}></div>

        {experience.map((exp, index) => (
          <div key={exp.id} style={{
            position: 'relative',
            marginBottom: '40px',
            marginLeft: '70px',
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid rgba(139, 69, 19, 0.1)'
          }}>
            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '-53px',
              top: '40px',
              width: '20px',
              height: '20px',
              backgroundColor: '#8B4513',
              borderRadius: '50%',
              border: '4px solid white',
              boxShadow: '0 0 0 3px #8B4513'
            }}></div>

            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '15px',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              <div>
                <h3 style={{
                  color: '#8B4513',
                  marginBottom: '5px',
                  fontSize: '1.4em',
                  fontWeight: '700'
                }}>
                  {exp.position}
                </h3>
                <p style={{
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '5px',
                  fontSize: '1.1em'
                }}>
                  {exp.company}
                </p>
                <p style={{
                  color: '#666',
                  fontStyle: 'italic',
                  marginBottom: '0'
                }}>
                  {exp.location}
                </p>
              </div>
              <div style={{
                backgroundColor: 'rgba(139, 69, 19, 0.1)',
                color: '#8B4513',
                padding: '8px 16px',
                borderRadius: '20px',
                fontWeight: '600',
                fontSize: '0.9em',
                border: '1px solid rgba(139, 69, 19, 0.2)'
              }}>
                {exp.period}
              </div>
            </div>

            {/* Key Achievements */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{
                color: '#8B4513',
                marginBottom: '15px',
                fontSize: '1.1em',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>🎯</span>
                Key Achievements
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} style={{
                    marginBottom: '12px',
                    paddingLeft: '25px',
                    position: 'relative',
                    lineHeight: '1.6',
                    color: '#444'
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: '0',
                      top: '6px',
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#A0522D',
                      borderRadius: '50%'
                    }}></div>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 style={{
                color: '#8B4513',
                marginBottom: '12px',
                fontSize: '1.1em',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>🛠️</span>
                Technologies Used
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} style={{
                    backgroundColor: 'rgba(139, 69, 19, 0.1)',
                    color: '#8B4513',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '0.85em',
                    fontWeight: '500',
                    border: '1px solid rgba(139, 69, 19, 0.2)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;