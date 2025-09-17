import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Beliefs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const beliefs = [
    "The daily goal is simple: maximize energy through sleep, movement, and strategic caffeination.",
    "History shouts the victor's truth, speaks the past's reality, and whispers the eventuality of our future.",
    "Your mind always wants to make you right. Speak your truth, and watch as your mind works nonstop to turn it into reality.",
    "The most important asset you own is your attention.",
    "Who you are is the sum of your surroundings. Travel expands the equation.",
    "Dopamine is the modern world's most valuable currency. Learn to spend it wisely, or be enslaved by its debt.",
    "Value creation in all facets mirrors the compounding of the market. Small daily deposits mean so much more in the long term than occasional windfalls.",
    "Although counterintuitive, blue is the color of intensity and focus, while red is the color of calm and rest.",
    "True love is the unconditional benefit of the doubt you give someone.",
    "Our world seems to be racing to nowhere. Speed does not equal progress. Slowing down is the only way to catch up."
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#faf9f7',
      backgroundImage: `
        radial-gradient(circle at 25px 50px, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle at 75px 25px, #f0f0f0 1px, transparent 1px)
      `,
      backgroundSize: '100px 100px',
      fontFamily: 'Helvetica, Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '650px',
        margin: '0 auto',
        padding: '0 2rem 4rem 2rem',
        paddingTop: '6rem'
      }}>
        
        {/* Header */}
        <div style={{
          marginBottom: '4rem',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
          transition: 'all 0.8s ease-out'
        }}>
          <div style={{ marginBottom: '0.75rem' }}>
            <Link 
              to="/" 
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '400',
                fontFamily: 'Helvetica, Arial, sans-serif',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#6b7280'}
              onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
            >
              ← Back
            </Link>
          </div>

          <div style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            lineHeight: '1.6',
            maxWidth: '600px',
            textAlign: 'center',
            margin: '0 auto'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#6b7280',
              margin: '0 0 0.3rem 0',
              fontStyle: 'italic'
            }}>
              I know that Socrates is right,
            </p>
            <p style={{
              fontSize: '1rem',
              color: '#6b7280',
              margin: '0 0 1rem 0',
              fontStyle: 'italic'
            }}>
              but therefore I don't know that Socrates is right.
            </p>
            
            <p style={{
              fontSize: '1.1rem',
              color: '#374151',
              margin: '0 0 0.3rem 0',
              fontWeight: '500'
            }}>
              I know for certain that I don't know,
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: '#374151',
              margin: '0 0 1rem 0',
              fontWeight: '500'
            }}>
              but I know that I want to know.
            </p>
            
            <p style={{
              fontSize: '1.1rem',
              color: '#1f2937',
              margin: '0.5rem 0 0.3rem 0',
              fontWeight: '500',
              textAlign: 'center'
            }}>
              Given that I don't know, I only believe.
            </p>
            
            <p style={{
              fontSize: '1.3rem',
              color: '#1f2937',
              margin: '1.5rem 0 0 0',
              letterSpacing: '0.02em',
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              Here is what I believe...
            </p>
          </div>
        </div>

        {/* Statement Cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {beliefs.map((belief, index) => (
            <div 
              key={index}
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${150 + (index * 80)}ms`,
                position: 'relative',
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Statement Block */}
              <div style={{
                backgroundColor: hoveredCard === index ? '#1f2937' : 'rgba(255, 255, 255, 0.7)',
                border: '1px solid #e5e7eb',
                borderRadius: '0px',
                padding: '2rem 2rem 2rem 4rem',
                position: 'relative',
                backdropFilter: 'blur(5px)',
                boxShadow: hoveredCard === index 
                  ? '0 8px 25px rgba(31, 41, 55, 0.15)' 
                  : '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}>
                {/* Large Number */}
                <div style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '2rem',
                  color: hoveredCard === index ? 'rgba(255,255,255,0.2)' : '#f3f4f6',
                  fontWeight: 'bold',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  lineHeight: '1',
                  transition: 'color 0.3s ease'
                }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Belief Text */}
                <p style={{
                  fontSize: '1rem',
                  color: hoveredCard === index ? '#ffffff' : '#374151',
                  lineHeight: '1.7',
                  fontWeight: '400',
                  margin: '0',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  transition: 'color 0.3s ease'
                }}>
                  {belief}
                </p>

                {/* Right Edge Highlight */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '3px',
                  height: '100%',
                  backgroundColor: hoveredCard === index ? '#ffffff' : 'transparent',
                  transition: 'background-color 0.3s ease'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Beliefs;