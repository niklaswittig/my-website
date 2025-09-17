import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Tools() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filterMode, setFilterMode] = useState('category'); // 'category' or 'proficiency'
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toolsData = [
    // AI & Generative Tools
    { id: 1, name: "ChatGPT", proficiency: 9, category: "AI & Generative Tools", url: "https://chat.openai.com", emoji: "🧠" },
    { id: 2, name: "Claude", proficiency: 9, category: "AI & Generative Tools", url: "https://claude.ai", emoji: "🧠" },
    { id: 3, name: "Midjourney", proficiency: 8, category: "AI & Generative Tools", url: "https://midjourney.com", emoji: "🧠" },
    { id: 4, name: "Firecrawl", proficiency: 8, category: "AI & Generative Tools", url: "https://firecrawl.dev", emoji: "🧠" },
    { id: 5, name: "Deepgram", proficiency: 8, category: "AI & Generative Tools", url: "https://deepgram.com", emoji: "🧠" },
    { id: 6, name: "SORA", proficiency: 4, category: "AI & Generative Tools", url: "https://openai.com/sora", emoji: "🧠" },
    { id: 7, name: "Runwayml", proficiency: 4, category: "AI & Generative Tools", url: "https://runwayml.com", emoji: "🧠" },

    // Lead Generation & Sales Automation
    { id: 8, name: "AirOps", proficiency: 9, category: "Lead Generation & Sales Automation", url: "https://airops.com", emoji: "💼" },
    { id: 9, name: "Hunter.io", proficiency: 9, category: "Lead Generation & Sales Automation", url: "https://hunter.io", emoji: "💼" },
    { id: 10, name: "Ocean.io", proficiency: 9, category: "Lead Generation & Sales Automation", url: "https://ocean.io", emoji: "💼" },
    { id: 11, name: "Apollo", proficiency: 8, category: "Lead Generation & Sales Automation", url: "https://apollo.io", emoji: "💼" },
    { id: 12, name: "Clay", proficiency: 8, category: "Lead Generation & Sales Automation", url: "https://clay.com", emoji: "💼" },
    { id: 13, name: "Rocketreach", proficiency: 8, category: "Lead Generation & Sales Automation", url: "https://rocketreach.co", emoji: "💼" },
    { id: 14, name: "MillionVerifier", proficiency: 8, category: "Lead Generation & Sales Automation", url: "https://millionverifier.com", emoji: "💼" },
    { id: 15, name: "Instantly.ai", proficiency: 8, category: "Lead Generation & Sales Automation", url: "https://instantly.ai", emoji: "💼" },
    { id: 16, name: "Phantombuster", proficiency: 8, category: "Lead Generation & Sales Automation", url: "https://phantombuster.com", emoji: "💼" },
    { id: 17, name: "Scrubby.io", proficiency: 7, category: "Lead Generation & Sales Automation", url: "https://scrubby.io", emoji: "💼" },
    { id: 18, name: "reachinbox", proficiency: 6, category: "Lead Generation & Sales Automation", url: "https://reachinbox.ai", emoji: "💼" },

    // Automation & Developer Tools
    { id: 19, name: "v0.dev", proficiency: 7, category: "Automation & Developer Tools", url: "https://v0.dev", emoji: "🔧" },
    { id: 20, name: "bolt.new", proficiency: 7, category: "Automation & Developer Tools", url: "https://bolt.new", emoji: "🔧" },
    { id: 21, name: "Supabase", proficiency: 7, category: "Automation & Developer Tools", url: "https://supabase.com", emoji: "🔧" },
    { id: 22, name: "dbeaver", proficiency: 7, category: "Automation & Developer Tools", url: "https://dbeaver.io", emoji: "🔧" },
    { id: 23, name: "Google Admin", proficiency: 6, category: "Automation & Developer Tools", url: "https://admin.google.com", emoji: "🔧" },
    { id: 24, name: "Fillout", proficiency: 8, category: "Automation & Developer Tools", url: "https://fillout.com", emoji: "🔧" },
    { id: 25, name: "n8n", proficiency: 5, category: "Automation & Developer Tools", url: "https://n8n.io", emoji: "🔧" },
    { id: 26, name: "Netlify", proficiency: 4, category: "Automation & Developer Tools", url: "https://netlify.com", emoji: "🔧" },

    // CRM, Marketing, and Analytics
    { id: 27, name: "Asana", proficiency: 8, category: "CRM, Marketing, and Analytics", url: "https://asana.com", emoji: "📊" },
    { id: 28, name: "Salesforce", proficiency: 7, category: "CRM, Marketing, and Analytics", url: "https://salesforce.com", emoji: "📊" },
    { id: 29, name: "Attio", proficiency: 7, category: "CRM, Marketing, and Analytics", url: "https://attio.com", emoji: "📊" },
    { id: 30, name: "Figma", proficiency: 7, category: "CRM, Marketing, and Analytics", url: "https://figma.com", emoji: "📊" },
    { id: 31, name: "Canva", proficiency: 6, category: "CRM, Marketing, and Analytics", url: "https://canva.com", emoji: "📊" },

    // Market Intelligence & Finance Tools
    { id: 33, name: "CapitalIQ", proficiency: 8, category: "Market Intelligence & Finance Tools", url: "https://capitaliq.spglobal.com", emoji: "📈" },
    { id: 34, name: "CB Insights", proficiency: 8, category: "Market Intelligence & Finance Tools", url: "https://cbinsights.com", emoji: "📈" },
    { id: 35, name: "Crunchbase", proficiency: 7, category: "Market Intelligence & Finance Tools", url: "https://crunchbase.com", emoji: "📈" },
    { id: 36, name: "Mergermarket", proficiency: 7, category: "Market Intelligence & Finance Tools", url: "https://mergermarket.com", emoji: "📈" },
    { id: 37, name: "Ionanalytics", proficiency: 4, category: "Market Intelligence & Finance Tools", url: "https://ionanalytics.com", emoji: "📈" },

    // Productivity & Office Tools
    { id: 38, name: "Outlook", proficiency: 9, category: "Productivity & Office Tools", url: "https://outlook.com", emoji: "🗂️" },
    { id: 39, name: "Teams", proficiency: 9, category: "Productivity & Office Tools", url: "https://teams.microsoft.com", emoji: "🗂️" },
    { id: 40, name: "OneDrive", proficiency: 9, category: "Productivity & Office Tools", url: "https://onedrive.com", emoji: "🗂️" },
    { id: 41, name: "Google Docs", proficiency: 9, category: "Productivity & Office Tools", url: "https://docs.google.com", emoji: "🗂️" },
    { id: 42, name: "Google Sheets", proficiency: 9, category: "Productivity & Office Tools", url: "https://sheets.google.com", emoji: "🗂️" },
    { id: 43, name: "Google Drive", proficiency: 9, category: "Productivity & Office Tools", url: "https://drive.google.com", emoji: "🗂️" },
    { id: 44, name: "Excel", proficiency: 7, category: "Productivity & Office Tools", url: "https://microsoft.com/excel", emoji: "🗂️" },
    { id: 45, name: "PowerPoint", proficiency: 6, category: "Productivity & Office Tools", url: "https://microsoft.com/powerpoint", emoji: "🗂️" },

    // Diagramming & Visual Structuring
    { id: 46, name: "Figma", proficiency: 7, category: "Diagramming & Visual Structuring", url: "https://figma.com", emoji: "📈" },
    { id: 47, name: "Canva", proficiency: 6, category: "Diagramming & Visual Structuring", url: "https://canva.com", emoji: "📈" },
    { id: 48, name: "Mermaidchart.com", proficiency: 6, category: "Diagramming & Visual Structuring", url: "https://mermaidchart.com", emoji: "📈" },
    { id: 49, name: "Gamma.app", proficiency: 5, category: "Diagramming & Visual Structuring", url: "https://gamma.app", emoji: "📈" },
  ];

  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [filterMode]);

  const getProgressColor = (proficiency) => {
    if (proficiency >= 8) return '#10b981'; // green
    if (proficiency >= 6) return '#3b82f6'; // blue
    return '#6b7280'; // grey
  };

  const getProgressColorLight = (proficiency) => {
    if (proficiency >= 8) return '#f0fdf4'; // very light green
    if (proficiency >= 6) return '#f0f9ff'; // very light blue
    return '#f9fafb'; // very light grey
  };

  const getFilteredTools = () => {
    if (filterMode === 'proficiency') {
      return [...toolsData].sort((a, b) => {
        if (b.proficiency === a.proficiency) {
          return a.name.localeCompare(b.name);
        }
        return b.proficiency - a.proficiency;
      });
    }

    // Group by category and sort within groups
    const categories = [
      "AI & Generative Tools",
      "Lead Generation & Sales Automation", 
      "Automation & Developer Tools",
      "CRM, Marketing, and Analytics",
      "Market Intelligence & Finance Tools",
      "Productivity & Office Tools",
      "Diagramming & Visual Structuring"
    ];

    const grouped = {};
    categories.forEach(category => {
      grouped[category] = toolsData
        .filter(tool => tool.category === category)
        .sort((a, b) => {
          if (b.proficiency === a.proficiency) {
            return a.name.localeCompare(b.name);
          }
          return b.proficiency - a.proficiency;
        });
    });

    return grouped;
  };

  const renderToolItem = (tool, index) => (
    <div 
      key={tool.id}
      style={{ 
        marginBottom: '1.5rem',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
        transition: `all 0.8s ease-out ${200 + (index * 50)}ms`
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'baseline',
        marginBottom: '0.5rem'
      }}>
        <div>
          <h3 style={{ 
            fontSize: '1rem', 
            fontWeight: '400', 
            color: '#374151',
            margin: '0 0 0.25rem 0',
            fontFamily: 'Helvetica, Arial, sans-serif',
            lineHeight: '111%'
          }}>
            <a 
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'underline',
                textDecorationColor: '#d1d5db',
                textUnderlineOffset: '2px',
                color: '#6b7280',
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
              {tool.name}
            </a>
          </h3>
          {filterMode === 'proficiency' && (
            <p style={{ 
              fontSize: '0.875rem', 
              color: '#9ca3af',
              margin: '0',
              fontFamily: 'Helvetica, Arial, sans-serif',
              lineHeight: '111%'
            }}>
              {tool.category}
            </p>
          )}
        </div>
        <span style={{ 
          fontSize: '0.75rem', 
          fontWeight: '400', 
          color: '#9ca3af',
          fontFamily: 'Helvetica, Arial, sans-serif',
          lineHeight: '111%'
        }}>
          {tool.proficiency}/10
        </span>
      </div>

      <div style={{ position: 'relative' }}>
        <div 
          style={{
            width: '100%',
            height: '2px',
            backgroundColor: getProgressColorLight(tool.proficiency),
            overflow: 'hidden'
          }}
        >
          <div 
            style={{
              height: '100%',
              backgroundColor: getProgressColor(tool.proficiency),
              width: isLoaded ? `${tool.proficiency * 10}%` : '0%',
              transition: 'width 1.2s ease-out',
              transitionDelay: `${400 + (index * 50)}ms`
            }}
          />
        </div>
      </div>
    </div>
  );

  const filteredTools = getFilteredTools();

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
        {/* Minimal Header */}
        <div style={{
          marginBottom: '3rem',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
          transition: 'all 0.8s ease-out'
        }}>
          {/* Simple Row */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '0.75rem'
          }}>
            {/* Back Link */}
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
              onMouseEnter={(e) => {
                e.target.style.color = '#6b7280';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#9ca3af';
              }}
            >
              ← Back
            </Link>

            {/* Filter Button */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#9ca3af',
                  fontSize: '0.875rem',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#6b7280';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#9ca3af';
                }}
              >
                Filter: {filterMode === 'category' ? 'Category' : 'Proficiency'} ↓
              </button>

              {dropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '2px',
                  zIndex: 10,
                  marginTop: '0.25rem',
                  minWidth: '120px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <button
                    onClick={() => {
                      setFilterMode('category');
                      setDropdownOpen(false);
                    }}
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      backgroundColor: filterMode === 'category' ? '#f9fafb' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (filterMode !== 'category') {
                        e.target.style.backgroundColor = '#f9fafb';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (filterMode !== 'category') {
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Category
                  </button>
                  <button
                    onClick={() => {
                      setFilterMode('proficiency');
                      setDropdownOpen(false);
                    }}
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      backgroundColor: filterMode === 'proficiency' ? '#f9fafb' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (filterMode !== 'proficiency') {
                        e.target.style.backgroundColor = '#f9fafb';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (filterMode !== 'proficiency') {
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    Proficiency
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#1f2937',
            margin: '0 0 0.5rem 0',
            fontFamily: 'Helvetica, Arial, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            Tools & Technologies
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '0.9rem',
            color: '#6b7280',
            margin: '0',
            fontFamily: 'Helvetica, Arial, sans-serif',
            lineHeight: '1.5'
          }}>
            Software and platforms I work with, rated by proficiency and experience.
          </p>
        </div>

        {/* Tools List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {filterMode === 'category' ? (
            // Category View
            Object.entries(filteredTools).map(([category, tools], categoryIndex) => (
              tools.length > 0 && (
                <div 
                  key={category}
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
                    transition: `all 0.8s ease-out ${200 + (categoryIndex * 100)}ms`
                  }}
                >
                  <div style={{ 
                    marginBottom: '2.5rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    <h2 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#1f2937',
                      margin: 0,
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      lineHeight: '111%',
                      letterSpacing: '-0.01em'
                    }}>
                      {category}
                    </h2>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.5rem' 
                  }}>
                    {tools.map((tool, index) => renderToolItem(tool, categoryIndex * 10 + index))}
                  </div>
                </div>
              )
            ))
          ) : (
            // Proficiency View
            <div>
              {filteredTools.map((tool, index) => renderToolItem(tool, index))}
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid #e5e7eb',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
          transition: 'all 0.8s ease-out 1000ms'
        }}>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#9ca3af', 
            fontWeight: '400',
            fontStyle: 'italic',
            fontFamily: 'Helvetica, Arial, sans-serif',
            lineHeight: '1.7'
          }}>
            Proficiency ratings reflect practical experience and comfort level with each tool.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tools;