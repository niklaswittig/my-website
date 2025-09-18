import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';
import RocheLogo from './assets/Roche_logo.png';
import ChargepointLogo from './assets/Chargepoint_logo.png';
import BrightdropLogo from './assets/Brightdrop_logo.png';
import ZumeraLogo from './assets/Zumera_logo.png';

function App() {
  const [showMore, setShowMore] = useState(false);
  const [welcomeStage, setWelcomeStage] = useState('initial'); // initial, visible, expand, complete, fade
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Check if this is the first visit to the homepage in this session
    const hasSeenAnimation = sessionStorage.getItem('hasSeenWelcomeAnimation') === 'true';

    if (hasSeenAnimation) {
      // Skip animation - show content immediately
      setWelcomeStage('fade');
      setContentVisible(true);
      return;
    }

    // Run normal animation sequence for first visit
    const timeouts = [];
    
    // Initial pause
    timeouts.push(setTimeout(() => {
      setWelcomeStage('visible');
    }, 600));
    
    // Expand and glow phase
    timeouts.push(setTimeout(() => {
      setWelcomeStage('expand');
    }, 1500));
    
    // Complete phase
    timeouts.push(setTimeout(() => {
      setWelcomeStage('complete');
    }, 2800));
    
    // Exit animation
    timeouts.push(setTimeout(() => {
      setWelcomeStage('fade');
    }, 3400));
    
    // Show main content and mark animation as seen
    timeouts.push(setTimeout(() => {
      setContentVisible(true);
      sessionStorage.setItem('hasSeenWelcomeAnimation', 'true');
    }, 4200));

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  return (
    <>
      {/* Welcome Screen */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#faf9f7',
        zIndex: 1000,
        opacity: welcomeStage === 'fade' ? 0 : 1,
        visibility: welcomeStage === 'fade' ? 'hidden' : 'visible',
        transition: 'opacity 0.8s ease-out, visibility 0.8s ease-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        
        {/* NW Logo Animation */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          
          {/* Main NW Letters */}
          <div style={{
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: '5rem',
            fontWeight: 'bold',
            lineHeight: '111%',
            color: '#2d3748',
            letterSpacing: '-0.05em',
            opacity: welcomeStage === 'initial' ? 0 : 1,
            transform: welcomeStage === 'initial' ? 'translateY(30px) scale(0.8)' :
                      welcomeStage === 'visible' ? 'translateY(0) scale(1)' :
                      welcomeStage === 'expand' ? 'translateY(0) scale(1.05)' :
                      welcomeStage === 'complete' ? 'translateY(0) scale(1)' :
                      'translateY(-10px) scale(0.95)',
            transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            textShadow: welcomeStage === 'expand' ? '0 0 30px rgba(45, 55, 72, 0.15)' : 'none',
            position: 'relative',
            zIndex: 2
          }}>
            NW
          </div>

          {/* Geometric Elements - Precisely aligned with N letter */}
          
          {/* Horizontal line from top of N */}
          <div style={{
            position: 'absolute',
            width: welcomeStage === 'expand' ? '100vw' : '0px',
            height: '1px',
            backgroundColor: '#9ca3af',
            top: '0.8rem', // Aligned with top of N
            left: '0.2rem', // Starts from left edge of N
            opacity: welcomeStage === 'visible' || welcomeStage === 'expand' ? 0.25 : 0,
            transition: 'all 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transitionDelay: '0.39s',
            transformOrigin: 'left center'
          }} />
          
          {/* Vertical line from left edge of N */}
          <div style={{
            position: 'absolute',
            width: '1px',
            height: welcomeStage === 'expand' ? '200vh' : '0px',
            backgroundColor: '#9ca3af',
            left: '0.2rem', // Aligned with left edge of N
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: welcomeStage === 'visible' || welcomeStage === 'expand' ? 0.25 : 0,
            transition: 'all 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transitionDelay: '0.6s',
            transformOrigin: 'center center'
          }} />
          
          {/* Diagonal line following N's diagonal stroke */}
          <div style={{
            position: 'absolute',
            width: welcomeStage === 'expand' ? '200vw' : '0px',
            height: '1px',
            backgroundColor: '#9ca3af',
            transform: 'rotate(60deg)', // Matches N diagonal angle
            transformOrigin: 'left center',
            left: '0.85rem', // Starts from left edge of N
            top: '1.8rem', // Bottom of N
            opacity: welcomeStage === 'visible' || welcomeStage === 'expand' ? 0.25 : 0,
            transition: 'all 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transitionDelay: '0.9s'
          }} />

          {/* Corner accents - architectural elements */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner, index) => (
            <div key={corner} style={{
              position: 'absolute',
              width: '12px',
              height: '12px',
              border: '1px solid #d1d5db',
              borderRadius: '1px',
              opacity: welcomeStage === 'expand' ? 0.3 : 0,
              transform: corner.includes('top') ? 'translateY(-50px)' : 'translateY(50px)',
              left: corner.includes('left') ? '-60px' : '60px',
              transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: `${1.2 + (index * 0.1)}s`
            }} />
          ))}

          {/* Subtle dot grid pattern */}
          {Array(5).fill(null).map((_, index) => {
            const positions = [
              { x: -40, y: 0 },
              { x: 40, y: 0 },
              { x: 0, y: -25 },
              { x: 0, y: 25 },
              { x: 0, y: 0 }
            ];
            const pos = positions[index];
            return (
              <div key={`dot-${index}`} style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                backgroundColor: '#e5e7eb',
                borderRadius: '50%',
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                opacity: welcomeStage === 'visible' ? 0.2 : 0,
                transform: `scale(${welcomeStage === 'expand' ? 1.2 : 1})`,
                transition: 'all 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: `${0.8 + (index * 0.05)}s`
              }} />
            );
          })}

        </div>
      </div>

      {/* Main Content */}
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#faf9f7',
        backgroundImage: `
          radial-gradient(circle at 25px 50px, #f0f0f0 1px, transparent 1px),
          radial-gradient(circle at 75px 25px, #f0f0f0 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        opacity: contentVisible ? 1 : 0,
        transition: 'opacity 0.8s ease-out'
      }}>
        <div style={{
          maxWidth: '650px',
          margin: '0 auto',
          padding: '0 2rem 4rem 2rem',
          paddingTop: '8rem'
        }}>
          {/* Name and Social Links */}
          <section style={{
            marginBottom: '4rem',
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 0.8s ease-out 200ms'
          }}>
            <h1 style={{
              fontSize: '2.2rem',
              fontWeight: 'bold',
              lineHeight: '111%',
              color: '#1f2937',
              marginBottom: '1.5rem',
              fontFamily: 'Helvetica, Arial, sans-serif',
              letterSpacing: '-0.01em'
            }}>
              Niklas Wittig
            </h1>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <a 
                href="https://www.linkedin.com/in/niklaswittig/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#6b7280',
                  padding: '0.4rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#9ca3af';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                }}
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="mailto:niklasrvw@icloud.com"
                style={{
                  color: '#6b7280',
                  padding: '0.4rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#9ca3af';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                }}
              >
                <Mail size={16} />
              </a>
            </div>
          </section>

          {/* Introduction */}
          <section style={{
            marginBottom: '3rem'
          }}>
            <div style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.8s ease-out 400ms'
            }}>
              <p style={{
                fontSize: '1rem',
                color: '#374151',
                lineHeight: '1.7',
                fontWeight: '400',
                marginBottom: '1.5rem',
                fontFamily: 'Helvetica, Arial, sans-serif'
              }}>
                I'm a 22-year-old California native, currently calling Berlin home. I've been thinking a lot about the most innovative businesses that have come to fruition due to modern AI, how businesses are being revolutionized, and where I fit in this vast ocean of opportunity.
              </p>
            </div>
            
            <div style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.8s ease-out 600ms'
            }}>
              <p style={{
                fontSize: '1rem',
                color: '#374151',
                lineHeight: '1.7',
                fontWeight: '400',
                marginBottom: '1.5rem',
                fontFamily: 'Helvetica, Arial, sans-serif'
              }}>
                In my free time, you'll find me chasing the sun with EDM blasting, taking spirited drives on roads that beg for it, and meticulously optimizing my investment portfolio.
              </p>
            </div>

            {!showMore && (
              <div style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? 'translateY(0)' : 'translateY(15px)',
                transition: 'all 0.8s ease-out 800ms'
              }}>
                <button 
                  onClick={() => setShowMore(true)}
                  style={{
                    padding: '0.5rem 1.2rem',
                    fontSize: '0.85rem',
                    color: '#6b7280',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: '400',
                    transition: 'all 0.2s ease',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    letterSpacing: '0.01em'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.borderColor = '#9ca3af';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                    e.target.style.borderColor = '#e5e7eb';
                  }}
                >
                  More about me
                </button>
              </div>
            )}

            <div style={{
              overflow: 'hidden',
              transition: 'all 0.6s ease-out',
              maxHeight: showMore ? '2000px' : '0px',
              opacity: showMore ? 1 : 0
            }}>
              <div style={{
                paddingTop: showMore ? '2rem' : '0',
                borderTop: showMore ? '1px solid #e5e7eb' : 'none',
                marginTop: showMore ? '2rem' : '0'
              }}>
                <p style={{
                  fontSize: '1rem',
                  color: '#374151',
                  lineHeight: '1.7',
                  fontWeight: '400',
                  marginBottom: '1.5rem',
                  fontFamily: 'Helvetica, Arial, sans-serif'
                }}>
                  My previous job had me spending more time with LLMs than with humans. Going forward, I'm looking for slightly more human interaction and a mentor who can teach me how to pursue all measures of life success to the fullest extent each and every day.
                </p>

                <p style={{
                  fontSize: '1rem',
                  color: '#374151',
                  lineHeight: '1.7',
                  fontWeight: '400',
                  marginBottom: '1.5rem',
                  fontFamily: 'Helvetica, Arial, sans-serif'
                }}>
                  My work experience includes time at{' '}
                  <a 
                    href="https://www.roche.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#6b7280',
                      textDecoration: 'underline',
                      textDecorationColor: '#d1d5db',
                      textUnderlineOffset: '2px',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#374151';
                      e.target.style.textDecorationColor = '#9ca3af';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6b7280';
                      e.target.style.textDecorationColor = '#d1d5db';
                    }}
                  >
                    Roche
                    <img 
                      src={RocheLogo} 
                      alt="" 
                      style={{ 
                        height: '1rem', 
                        width: 'auto', 
                        marginLeft: '0.3rem',
                        opacity: 0.7
                      }} 
                    />
                  </a>,{' '}
                  <a 
                    href="https://www.chargepoint.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#6b7280',
                      textDecoration: 'underline',
                      textDecorationColor: '#d1d5db',
                      textUnderlineOffset: '2px',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#374151';
                      e.target.style.textDecorationColor = '#9ca3af';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6b7280';
                      e.target.style.textDecorationColor = '#d1d5db';
                    }}
                  >
                    Chargepoint
                    <img 
                      src={ChargepointLogo} 
                      alt="" 
                      style={{ 
                        height: '1rem', 
                        width: 'auto', 
                        marginLeft: '0.3rem',
                        opacity: 0.7
                      }} 
                    />
                  </a>,{' '}
                  <a 
                    href="https://www.brightdrop.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#6b7280',
                      textDecoration: 'underline',
                      textDecorationColor: '#d1d5db',
                      textUnderlineOffset: '2px',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#374151';
                      e.target.style.textDecorationColor = '#9ca3af';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6b7280';
                      e.target.style.textDecorationColor = '#d1d5db';
                    }}
                  >
                    Brightdrop
                    <img 
                      src={BrightdropLogo} 
                      alt="" 
                      style={{ 
                        height: '1rem', 
                        width: 'auto', 
                        marginLeft: '0.3rem',
                        opacity: 0.7
                      }} 
                    />
                  </a>, 
                  and most recently{' '}
                  <a 
                    href="https://www.zumera.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#6b7280',
                      textDecoration: 'underline',
                      textDecorationColor: '#d1d5db',
                      textUnderlineOffset: '2px',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#374151';
                      e.target.style.textDecorationColor = '#9ca3af';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6b7280';
                      e.target.style.textDecorationColor = '#d1d5db';
                    }}
                  >
                    Zumera
                    <img 
                      src={ZumeraLogo} 
                      alt="" 
                      style={{ 
                        height: '1rem', 
                        width: 'auto', 
                        marginLeft: '0.3rem',
                        opacity: 0.7
                      }} 
                    />
                  </a>,{' '}
                  an M&A boutique which unfortunately underwent substantial downsizing due to financial challenges. I used the time after under noncompete to take the GMAT and hone my cooking skills.
                </p>

                <p style={{
                  fontSize: '1rem',
                  color: '#374151',
                  lineHeight: '1.7',
                  fontWeight: '400',
                  marginBottom: '1.5rem',
                  fontFamily: 'Helvetica, Arial, sans-serif'
                }}>
                  While I look for the right next step, I am also leveraging data and AI to build the ultimate toolsuite for investment professionals; this project is still in stealth, with MVP development underway in partnership with small and midcap firms.  
                </p>

                <p style={{
                  fontSize: '1rem',
                  color: '#374151',
                  lineHeight: '1.7',
                  fontWeight: '400',
                  marginBottom: '1.5rem',
                  fontFamily: 'Helvetica, Arial, sans-serif'
                }}>
                  I recently graduated with a Bachelor's in Business Management from{' '}
                  <a 
                    href="https://www.whu.edu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#6b7280',
                      textDecoration: 'underline',
                      textDecorationColor: '#d1d5db',
                      textUnderlineOffset: '2px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#374151';
                      e.target.style.textDecorationColor = '#9ca3af';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6b7280';
                      e.target.style.textDecorationColor = '#d1d5db';
                    }}
                  >
                    WHU
                  </a>. During my time there, I helped organize several{' '}
                  <a 
                    href="https://www.tedxwhu.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#6b7280',
                      textDecoration: 'underline',
                      textDecorationColor: '#d1d5db',
                      textUnderlineOffset: '2px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#374151';
                      e.target.style.textDecorationColor = '#9ca3af';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6b7280';
                      e.target.style.textDecorationColor = '#d1d5db';
                    }}
                  >
                    TED conferences
                  </a>{' '}
                  alongside my fellow students, built up a{' '}
                  <a 
                    href="https://www.youtube.com/playlist?list=PLhb2VaU2PcA4Ywb9PXenPcitLWl05ba0p" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#6b7280',
                      textDecoration: 'underline',
                      textDecorationColor: '#d1d5db',
                      textUnderlineOffset: '2px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#374151';
                      e.target.style.textDecorationColor = '#9ca3af';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6b7280';
                      e.target.style.textDecorationColor = '#d1d5db';
                    }}
                  >
                    video podcast series
                  </a>{' '}
                  aimed at guiding young professionals through interviews with remarkable people, and embraced independence while living thousands of miles from home. I wrote my thesis on the Federal Reserve's impact on the development of tech in Silicon Valley.
                </p>

                <p style={{
                  fontSize: '1rem',
                  color: '#374151',
                  lineHeight: '1.7',
                  fontWeight: '400',
                  fontFamily: 'Helvetica, Arial, sans-serif'
                }}>
                  I try to visit home a few times a year, because family is important. I love meeting new people, so if you're ever around the San Francisco Bay Area, please reach out - you'll find me off of Sand Hill Road. If you're ever in Berlin, look me up in 10781.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Navigation */}
          <section style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 0.8s ease-out 1000ms'
          }}>
            <div style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid #e5e7eb'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <Link 
                  to="/tools"
                  style={{
                    color: '#6b7280',
                    textDecoration: 'underline',
                    textDecorationColor: '#d1d5db',
                    textUnderlineOffset: '2px',
                    fontSize: '1rem',
                    fontWeight: '400',
                    transition: 'all 0.2s ease',
                    fontFamily: 'Helvetica, Arial, sans-serif'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#374151';
                    e.target.style.textDecorationColor = '#9ca3af';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#6b7280';
                    e.target.style.textDecorationColor = '#d1d5db';
                  }}
                >
                  Tools
                </Link>
                
                <Link 
                  to="/beliefs"
                  style={{
                    color: '#6b7280',
                    textDecoration: 'underline',
                    textDecorationColor: '#d1d5db',
                    textUnderlineOffset: '2px',
                    fontSize: '1rem',
                    fontWeight: '400',
                    transition: 'all 0.2s ease',
                    fontFamily: 'Helvetica, Arial, sans-serif'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#374151';
                    e.target.style.textDecorationColor = '#9ca3af';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#6b7280';
                    e.target.style.textDecorationColor = '#d1d5db';
                  }}
                >
                  Beliefs
                </Link>
                
                <Link 
                  to="/digital-artifacts"
                  style={{
                    color: '#6b7280',
                    textDecoration: 'underline',
                    textDecorationColor: '#d1d5db',
                    textUnderlineOffset: '2px',
                    fontSize: '1rem',
                    fontWeight: '400',
                    transition: 'all 0.2s ease',
                    fontFamily: 'Helvetica, Arial, sans-serif'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#374151';
                    e.target.style.textDecorationColor = '#9ca3af';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#6b7280';
                    e.target.style.textDecorationColor = '#d1d5db';
                  }}
                >
                  eArtifacts
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
