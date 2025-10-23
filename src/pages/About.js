import React from 'react';
import { resumeData } from '../data/resumeData';

const About = () => {
  const { personalInfo, education, certifications } = resumeData;

  return (
    <div style={{ padding: '10px' }}>
      <h2>Professional Profile</h2>
      
      {/* Hero Section */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '35px',
        marginBottom: '35px',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
      }}>
        {/* Profile Photo */}
        <div style={{ flexShrink: 0, textAlign: 'center' }}>
          <div style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #8B4513, #A0522D)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFD700',
            fontSize: '4.5em',
            marginBottom: '15px',
            border: '5px solid #8B4513',
            boxShadow: '0 6px 25px rgba(139, 69, 19, 0.3)'
          }}>
            {personalInfo.avatar}
          </div>
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            marginTop: '15px'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#8B4513'
            }}></div>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#A0522D'
            }}></div>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#FFD700'
            }}></div>
          </div>
        </div>

        {/* Personal Info */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h1 style={{
            color: '#8B4513',
            marginBottom: '8px',
            fontSize: '2.4em',
            fontWeight: '700',
            background: 'linear-gradient(45deg, #8B4513, #A0522D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {personalInfo.name}
          </h1>
          <h2 style={{
            color: '#666',
            marginBottom: '25px',
            fontSize: '1.4em',
            fontWeight: '400',
            fontStyle: 'italic'
          }}>
            {personalInfo.title}
          </h2>
          
          {/* Contact Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '15px',
            marginBottom: '25px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ 
                fontWeight: '600',
                color: '#8B4513',
                minWidth: '80px'
              }}>📧 Email:</span>
              <span style={{ color: '#555' }}>{personalInfo.email}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ 
                fontWeight: '600',
                color: '#8B4513',
                minWidth: '80px'
              }}>📱 Phone:</span>
              <span style={{ color: '#555' }}>{personalInfo.phone}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ 
                fontWeight: '600',
                color: '#8B4513',
                minWidth: '80px'
              }}>📍 Location:</span>
              <span style={{ color: '#555' }}>{personalInfo.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ 
                fontWeight: '600',
                color: '#8B4513',
                minWidth: '80px'
              }}>🔗 Portfolio:</span>
              <span style={{ color: '#555' }}>{personalInfo.portfolio}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div style={{
        marginBottom: '35px',
        padding: '30px',
        backgroundColor: 'rgba(139, 69, 19, 0.03)',
        borderRadius: '12px',
        borderLeft: '6px solid #8B4513',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '150px',
          height: '150px',
          backgroundColor: 'rgba(139, 69, 19, 0.05)',
          borderRadius: '50%'
        }}></div>
        <h3 style={{ 
          color: '#8B4513', 
          marginBottom: '20px',
          fontSize: '1.5em',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ fontSize: '1.2em' }}>🎯</span>
          Executive Summary
        </h3>
        <p style={{ 
          lineHeight: '1.8',
          fontSize: '1.1em',
          margin: 0,
          color: '#444'
        }}>
          {personalInfo.summary}
        </p>
      </div>

      {/* Education & Certifications */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '25px',
        marginBottom: '25px'
      }}>
        {/* Education */}
        <div>
          <h3 style={{ 
            color: '#8B4513', 
            marginBottom: '20px',
            fontSize: '1.4em',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '1.2em' }}>🎓</span>
            Education
          </h3>
          {education.map(edu => (
            <div key={edu.id} style={{
              marginBottom: '20px',
              padding: '20px',
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0 3px 15px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #A0522D',
              position: 'relative'
            }}>
              <h4 style={{ 
                color: '#8B4513', 
                marginBottom: '8px',
                fontSize: '1.1em'
              }}>
                {edu.degree}
              </h4>
              <p style={{ 
                fontWeight: '600', 
                marginBottom: '5px',
                color: '#555'
              }}>
                {edu.school}
              </p>
              <p style={{ 
                color: '#777', 
                marginBottom: '10px',
                fontSize: '0.9em'
              }}>
                {edu.period} | {edu.location}
              </p>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px',
                marginBottom: '12px'
              }}>
                <strong style={{ color: '#8B4513', fontSize: '0.9em' }}>GPA:</strong>
                <span style={{
                  backgroundColor: '#8B4513',
                  color: 'white',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '0.85em'
                }}>
                  {edu.gpa}
                </span>
              </div>
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {edu.achievements.map((achievement, index) => (
                    <span 
                      key={index}
                      style={{
                        display: 'inline-block',
                        background: 'linear-gradient(45deg, #8B4513, #A0522D)',
                        color: 'white',
                        padding: '4px 10px',
                        borderRadius: '15px',
                        fontSize: '0.8em',
                        fontWeight: '500'
                      }}
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 style={{ 
            color: '#8B4513', 
            marginBottom: '20px',
            fontSize: '1.4em',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '1.2em' }}>🏆</span>
            Certifications
          </h3>
          {certifications.map((cert, index) => (
            <div key={index} style={{
              marginBottom: '15px',
              padding: '18px',
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0 3px 15px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #FFD700',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(139, 69, 19, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8B4513',
                fontWeight: 'bold',
                fontSize: '0.9em'
              }}>
                {cert.year}
              </div>
              <div>
                <h4 style={{ 
                  color: '#8B4513', 
                  marginBottom: '4px',
                  fontSize: '1em'
                }}>
                  {cert.name}
                </h4>
                <p style={{ 
                  color: '#666', 
                  fontSize: '0.9em',
                  margin: 0
                }}>
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;