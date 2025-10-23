import React from 'react';
import { resumeData } from '../data/resumeData';

const Testimonials = () => {
  const { testimonials } = resumeData;

  return (
    <div style={{ padding: '10px' }}>
      <h2>Professional Testimonials</h2>
      
      <div style={{
        display: 'grid',
        gap: '25px',
        marginTop: '25px'
      }}>
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} style={{
            backgroundColor: 'white',
            padding: '35px',
            borderRadius: '15px',
            boxShadow: '0 6px 25px rgba(0,0,0,0.08)',
            border: '1px solid rgba(139, 69, 19, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Quote mark */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '25px',
              fontSize: '4em',
              color: 'rgba(139, 69, 19, 0.1)',
              fontFamily: 'Georgia, serif',
              lineHeight: 1
            }}>
              "
            </div>

            {/* Testimonial content */}
            <p style={{
              fontStyle: 'italic',
              lineHeight: '1.8',
              fontSize: '1.1em',
              color: '#444',
              marginBottom: '25px',
              position: 'relative',
              zIndex: 1
            }}>
              "{testimonial.text}"
            </p>

            {/* Author info */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              paddingTop: '20px',
              borderTop: '2px solid rgba(139, 69, 19, 0.1)'
            }}>
              <div style={{
                fontSize: '3em'
              }}>
                {testimonial.avatar}
              </div>
              <div>
                <h4 style={{
                  margin: '0 0 5px 0',
                  color: '#8B4513',
                  fontSize: '1.2em',
                  fontWeight: '700'
                }}>
                  {testimonial.name}
                </h4>
                <p style={{
                  margin: '0',
                  color: '#666',
                  fontSize: '1em',
                  fontStyle: 'italic'
                }}>
                  {testimonial.position}
                </p>
              </div>
            </div>

            {/* Background pattern */}
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-30px',
              width: '150px',
              height: '150px',
              backgroundColor: 'rgba(139, 69, 19, 0.03)',
              borderRadius: '50%'
            }}></div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div style={{
        marginTop: '40px',
        textAlign: 'center',
        padding: '30px',
        backgroundColor: 'rgba(139, 69, 19, 0.05)',
        borderRadius: '12px',
        border: '1px solid rgba(139, 69, 19, 0.1)'
      }}>
        <h3 style={{
          color: '#8B4513',
          marginBottom: '15px',
          fontSize: '1.4em'
        }}>
          Ready to Bring Value to Your Team
        </h3>
        <p style={{
          color: '#666',
          fontSize: '1.1em',
          lineHeight: '1.6',
          marginBottom: '0'
        }}>
          I'm excited about the opportunity to contribute to innovative projects and drive meaningful results. 
          Let's discuss how my skills and experience can benefit your organization.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;