import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DigitalArtifacts() {
  const [isLoading, setIsLoading] = useState(true);
  const [titleText, setTitleText] = useState('');
  const [showCaret, setShowCaret] = useState(true);
  const [titleComplete, setTitleComplete] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [typingIndex, setTypingIndex] = useState(-1);
  const navigate = useNavigate();

  const fullTitle = 'DIGITAL ARTIFACTS ARCHIVE';

  const artifactsData = [
    {
      id: 1,
      year: 2007,
      title: 'Cars (Disney Movie)',
      url: 'https://en.wikipedia.org/wiki/Cars_(film)',
      size: '9.7MB',
      type: 'VIDEO'
    },
    {
      id: 2,
      year: 2014,
      title: "Bryan Stevenson's TED Talk on Injustice",
      url: 'https://www.youtube.com/watch?v=c2tOp7OxyQ8',
      size: '1.9MB',
      type: 'VIDEO'
    },
    {
      id: 3,
      year: 2017,
      title: "Apple's iPhone X Keynote",
      url: 'https://www.youtube.com/watch?v=P_JY6tl4KyY',
      size: '7.4MB',
      type: 'VIDEO'
    },
    {
      id: 4,
      year: 2018,
      title: "Steve Jobs' Stanford Commencement Speech",
      url: 'https://news.stanford.edu/stories/2005/06/youve-got-find-love-jobs-says',
      size: '2.4MB',
      type: 'VIDEO'
    },
    {
      id: 5,
      year: 2018,
      title: '"What I Learned Building the iPod" by Tony Fadell',
      url: 'https://www.buildc.com/the-book',
      size: '2.9MB',
      type: 'BOOK'
    },
    {
      id: 6,
      year: 2019,
      title: "Jeff Bezos' 1997 Amazon Shareholder Letter",
      url: 'https://media.corporate-ir.net/media_files/irol/97/97664/reports/Shareholderletter97.pdf',
      size: '4.2MB',
      type: 'DOC'
    },
    {
      id: 7,
      year: 2020,
      title: "Chamath Palihapitiya's Stanford Talk",
      url: 'https://www.youtube.com/watch?v=PMotykw0SIk',
      size: '1.7MB',
      type: 'VIDEO'
    },
    {
      id: 8,
      year: 2020,
      title: "Churchill's Iron Curtain Speech (1946)",
      url: 'https://www.nationalarchives.gov.uk/education/resources/cold-war-on-file/iron-curtain-speech/',
      size: '8.9MB',
      type: 'TEXT'
    },
    {
      id: 9,
      year: 2022,
      title: 'HBS Heidi Roizen Case',
      url: 'https://www.hbs.edu/faculty/Pages/item.aspx?num=26880',
      size: '7.4MB',
      type: 'DOC'
    },
    {
      id: 10,
      year: 2023,
      title: 'Lewis Hamilton Podcast',
      url: 'https://www.youtube.com/watch?v=AyiWKXTd9aY&t=4097s',
      size: '5.3MB',
      type: 'VIDEO'
    },
    {
      id: 11,
      year: 2025,
      title: "Sam Altman's Tweet on Saying Thank You to AI",
      url: 'https://x.com/sama/status/1912646035979239430',
      size: '1.4MB',
      type: 'TEXT'
    }
  ];

  // Initialize and control the loading sequence
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      startTypewriter();
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  // Progressive typing effect for items
  useEffect(() => {
    if (timelineVisible && typingIndex < artifactsData.length - 1) {
      const timer = setTimeout(() => {
        setTypingIndex(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [timelineVisible, typingIndex, artifactsData.length]);

  // Typewriter effect
  const startTypewriter = () => {
    let currentIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (currentIndex < fullTitle.length) {
        setTitleText(fullTitle.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
        setTitleComplete(true);
        setTimeout(() => {
          setTimelineVisible(true);
        }, 800);
      }
    }, 80);
  };

  // Blinking caret effect
  useEffect(() => {
    const caretInterval = setInterval(() => {
      setShowCaret(prev => !prev);
    }, 530);

    return () => clearInterval(caretInterval);
  }, []);

  const handleExit = (e) => {
    e.preventDefault();
    setIsExiting(true);
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  // Loading screen
  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Courier New", Courier, monospace',
        color: '#00ff41',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 65, 0.03) 2px,
            rgba(0, 255, 65, 0.03) 4px
          )`,
          animation: 'scanlines 2s linear infinite'
        }} />
        
        <div style={{
          fontSize: '1.2rem',
          textAlign: 'center',
          animation: 'glitch 0.3s infinite linear alternate-reverse'
        }}>
          INITIALIZING ARCHIVE...
        </div>
        
        <div style={{
          fontSize: '0.9rem',
          marginTop: '1rem',
          opacity: 0.7,
          animation: 'fade 2s ease-in-out infinite alternate'
        }}>
          LOADING DIGITAL ARTIFACTS
        </div>

        <style jsx>{`
          @keyframes scanlines {
            0% { transform: translateY(0); }
            100% { transform: translateY(100px); }
          }
          
          @keyframes glitch {
            0% { 
              text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                           0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
            }
            15% { 
              text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                           0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
            }
            16% { text-shadow: none; }
            49% { text-shadow: none; }
            50% { 
              text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                           0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
            }
            99% { 
              text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                           0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
            }
            100% { text-shadow: none; }
          }
          
          @keyframes fade {
            0% { opacity: 0.4; }
            100% { opacity: 0.8; }
          }
        `}</style>
      </div>
    );
  }

  // Exit screen
  if (isExiting) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Courier New", Courier, monospace',
        color: '#00ff41'
      }}>
        <div style={{
          fontSize: '1.2rem',
          textAlign: 'center',
          animation: 'fadeOut 1.5s ease-out'
        }}>
          TERMINATING SESSION...
        </div>
        
        <div style={{
          fontSize: '0.9rem',
          marginTop: '1rem',
          opacity: 0.7
        }}>
          GOODBYE
        </div>

        <style jsx>{`
          @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  // Main archive page
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0d1117',
      color: '#00ff41',
      fontFamily: '"Courier New", Courier, monospace',
      position: 'relative',
      padding: '2rem'
    }}>
      {/* Scanlines overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0, 255, 65, 0.02) 2px,
          rgba(0, 255, 65, 0.02) 4px
        )`,
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div 
            onClick={handleExit}
            style={{
              fontSize: '0.9rem',
              color: '#00ff41',
              fontFamily: '"Courier New", Courier, monospace',
              marginBottom: '2rem',
              display: 'inline-block',
              cursor: 'pointer',
              padding: '0.5rem',
              border: '1px solid #00ff41',
              backgroundColor: 'transparent',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#00ff41';
              e.target.style.color = '#0d1117';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#00ff41';
            }}
          >
            [EXIT]
          </div>
          
          <div>
            <div style={{
              fontSize: '0.8rem',
              color: '#7d8590',
              marginBottom: '0.5rem'
            }}>
              user@archive:~$ cat README.txt
            </div>
            
            <div style={{
              fontSize: '0.85rem',
              color: '#e6e6e6',
              marginBottom: '1.5rem',
              lineHeight: '1.6',
              opacity: titleComplete ? 1 : 0,
              transition: 'opacity 0.5s ease 0.3s'
            }}>
              DIGITAL ARTIFACTS COLLECTION - Personal Discovery Archive
              <br />
              ========================================================
              <br /><br />
              This archive catalogs digital content that shaped my thinking
              <br />
              across different stages of life. Each entry represents a moment
              <br />
              of discovery - when I first encountered these ideas, speeches,
              <br />
              and stories that left lasting impressions.
              <br /><br />
              DISCOVERED = Year of personal discovery (not creation date)
              <br />
              TYPE = Content format classification
              <br />
              IMPACT = Estimated impact/significance measure
              <br /><br />
              These artifacts trace my intellectual evolution from age 4 to 22.
            </div>
            
            <div style={{
              fontSize: '0.8rem',
              color: '#7d8590',
              marginBottom: '0.5rem'
            }}>
              user@archive:~$ ls -la /digital-artifacts/
            </div>
            
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: 'normal',
              color: '#00ff41',
              marginBottom: '1rem',
              fontFamily: '"Courier New", Courier, monospace',
              letterSpacing: '0.1em'
            }}>
              {titleText}
              {showCaret && !titleComplete && (
                <span style={{ 
                  animation: 'blink 1s infinite',
                  color: '#00ff41'
                }}>_</span>
              )}
            </h1>
            
            <div style={{
              fontSize: '0.8rem',
              color: '#7d8590',
              opacity: titleComplete ? 1 : 0,
              transition: 'opacity 0.5s ease 0.3s'
            }}>
              total {artifactsData.length} artifacts found | chronological by discovery date
            </div>
          </div>
        </div>

        {/* Terminal content */}
        <div style={{
          opacity: titleComplete ? 1 : 0,
          transition: 'opacity 0.6s ease 0.5s'
        }}>
          {/* Header row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60px 100px 120px 80px 1fr',
            gap: '1rem',
            padding: '0.5rem 0',
            borderBottom: '1px solid #30363d',
            fontSize: '0.8rem',
            color: '#7d8590',
            marginBottom: '1rem'
          }}>
            <div>ID</div>
            <div>DISCOVERED</div>
            <div>TYPE</div>
            <div>IMPACT</div>
            <div>ARTIFACT</div>
          </div>

          {/* Artifact list */}
          {artifactsData.map((artifact, index) => {
            const isVisible = timelineVisible && index <= typingIndex;
            
            return (
              <div
                key={artifact.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 100px 120px 80px 1fr',
                  gap: '1rem',
                  padding: '0.5rem 0',
                  fontSize: '0.85rem',
                  borderBottom: '1px solid #21262d',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'all 0.4s ease',
                  transitionDelay: `${index * 50}ms`
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#161b22';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ color: '#7d8590' }}>
                  {String(artifact.id).padStart(3, '0')}
                </div>
                
                <div style={{ color: '#ffa657' }}>
                  {artifact.year}
                </div>
                
                <div style={{ color: '#79c0ff' }}>
                  {artifact.type}
                </div>
                
                <div style={{ color: '#7d8590' }}>
                  {artifact.size}
                </div>
                
                <div>
                  <a
                    href={artifact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#00ff41',
                      textDecoration: 'none',
                      fontFamily: '"Courier New", Courier, monospace',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.textDecoration = 'underline';
                      e.target.style.textShadow = '0 0 5px #00ff41';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.textDecoration = 'none';
                      e.target.style.textShadow = 'none';
                    }}
                  >
                    {artifact.title}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '3rem',
          fontSize: '0.8rem',
          color: '#7d8590',
          opacity: timelineVisible ? 1 : 0,
          transition: 'opacity 0.5s ease 2s'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            user@archive:~$ echo "Archive purpose: Personal intellectual archaeology"
          </div>
          <div style={{ color: '#e6e6e6', marginBottom: '1rem' }}>
            Archive purpose: Personal intellectual archaeology
          </div>
          
          <div>
            user@archive:~$ find /digital-artifacts/ -type f | wc -l
          </div>
          <div style={{ marginTop: '0.25rem' }}>
            {artifactsData.length}
          </div>
          <div style={{ marginTop: '1rem' }}>
            Collection spans: 2007-2025 (ages 4-22) | Last accessed: January 2025
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default DigitalArtifacts;