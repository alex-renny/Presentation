// App.jsx
import { useState, useEffect, useCallback } from 'react';
import './App.css';

const slides = [
  {
    id: 1,
    title: 'Internship Report Presentation',
    subtitle: 'React Development Internship',
    content: (
      <div className="title-slide">
        <div className="react-logo-animated">
          <div className="react-atom">
            <div className="nucleus"></div>
            <div className="electron-orbit e1">
              <div className="electron"></div>
            </div>
            <div className="electron-orbit e2">
              <div className="electron"></div>
            </div>
            <div className="electron-orbit e3">
              <div className="electron"></div>
            </div>
          </div>
        </div>
        <div className="presenter-info">
          <h3>Submitted By: <span className="highlight">Alex Renny</span></h3>
          <p>Course: Bachelor of Science in Cyber Forensics</p>
          <div className="duration-badge">
            <span className="badge-icon">📅</span>
            <span>06 April 2026 – 07 May 2026</span>
          </div>
          <p>Organization: <span className="highlight">Techwingsys, Kochi</span></p>
          <p className="academic-year">Academic Year: 2025–2026</p>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0d0d2b 100%)',
    particles: true
  },
  {
    id: 2,
    title: 'About the Organization',
    subtitle: 'Techwingsys',
    content: (
      <div className="content-slide org-slide">
        <div className="org-header">
          <div className="org-icon">🏢</div>
          <p className="org-description">
            Techwingsys is a leading IT training and placement institute located in Kochi, Kerala. 
            The organization focuses on providing industry-oriented technical training and helping 
            students become job-ready professionals.
          </p>
        </div>
        <div className="org-details-grid">
          <div className="detail-card">
            <span className="card-icon">📅</span>
            <p>Established in 2017</p>
          </div>
          <div className="detail-card">
            <span className="card-icon">🏗️</span>
            <p>Division of Techglitz Global Pvt Ltd</p>
          </div>
        </div>
        <div className="technologies-section">
          <h3>Technologies Offered</h3>
          <div className="tech-bubbles">
            {['Full Stack Development', 'React Development', 'Python Programming', 'MERN Stack', 'PHP Development', 'Web Technologies'].map(tech => (
              <span key={tech} className="tech-bubble">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)'
  },
  {
    id: 3,
    title: 'Internship Overview',
    subtitle: 'Key Details',
    content: (
      <div className="content-slide overview-slide">
        <div className="overview-grid">
          {[
            { icon: '🏢', label: 'Organization', value: 'Techwingsys, Kochi' },
            { icon: '💻', label: 'Domain', value: 'React Development' },
            { icon: '⏱️', label: 'Duration', value: '1 Month' },
            { icon: '📅', label: 'Start Date', value: '06 April 2026' },
            { icon: '📅', label: 'End Date', value: '07 May 2026' },
            { icon: '👥', label: 'Students', value: '13 Participants' },
            { icon: '🔧', label: 'Mode', value: 'Practical Training' }
          ].map((item, index) => (
            <div key={index} className="overview-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="overview-icon">{item.icon}</span>
              <p className="overview-label">{item.label}</p>
              <p className="overview-value">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="overview-summary">
          Focused on React fundamentals, JavaScript concepts, React Hooks, component development, 
          API integration, and deployment of a complete web application.
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'
  },
  {
    id: 4,
    title: 'Objectives of the Internship',
    subtitle: 'Goals & Learning Targets',
    content: (
      <div className="content-slide objectives-slide">
        <div className="objectives-list">
          {[
            'Understand fundamentals of React Development',
            'Gain practical experience in JavaScript programming',
            'Learn modern web application development',
            'Understand React components and JSX',
            'Learn React Hooks (useState and useEffect)',
            'Integrate APIs and manage application data',
            'Build a complete E-Commerce Web Application',
            'Deploy and host a React project online',
            'Improve problem-solving and debugging skills'
          ].map((obj, index) => (
            <div key={index} className="objective-item" style={{ animationDelay: `${index * 0.15}s` }}>
              <span className="objective-check">✓</span>
              <p>{obj}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
  },
  {
    id: 5,
    title: 'Technologies and Tools Used',
    subtitle: 'Development Stack',
    content: (
      <div className="content-slide tech-stack-slide">
        <div className="tech-categories">
          <div className="tech-category">
            <h3>🎨 Frontend Technologies</h3>
            <div className="tech-items">
              {['React JS', 'JavaScript', 'JSX'].map(tech => (
                <span key={tech} className="tech-item frontend">{tech}</span>
              ))}
            </div>
          </div>
          <div className="tech-category">
            <h3>🔌 APIs & Data</h3>
            <div className="tech-items">
              <span className="tech-item api">Fake API</span>
            </div>
          </div>
          <div className="tech-category">
            <h3>🛠️ Development Tools</h3>
            <div className="tech-items">
              {['VS Code', 'Git', 'GitHub'].map(tech => (
                <span key={tech} className="tech-item tools">{tech}</span>
              ))}
            </div>
          </div>
          <div className="tech-category">
            <h3>🚀 Deployment</h3>
            <div className="tech-items">
              <span className="tech-item deploy">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0d0d2b 100%)'
  },
  {
    id: 6,
    title: 'React Concepts Learned',
    subtitle: 'Core React Knowledge',
    content: (
      <div className="content-slide concepts-slide">
        <div className="concepts-grid">
          {/* <div className="concept-card">
            <h3>🧩 React Components</h3>
            <p>Reusable blocks used to build user interfaces</p>
            <div className="concept-visual">
              <div className="component-box parent">
                <div className="component-box child"></div>
                <div className="component-box child"></div>
              </div>
            </div>
          </div> */}
          <div className="concept-card">
            <h3>📝 JSX</h3>
            <p>Write HTML-like code inside JavaScript</p>
            <div className="code-snippet">
              <code>{'<div className="app">Hello World</div>'}</code>
            </div>
          </div>
          <div className="concept-card">
            <h3>🪝 useState Hook</h3>
            <p>Manage and update component data dynamically</p>
            <div className="hook-demo">
              <div className="state-badge">state</div>
              <div className="update-arrow">→</div>
              <div className="state-badge updated">updated</div>
            </div>
          </div>
          <div className="concept-card">
            <h3>⚡ useEffect Hook</h3>
            <p>Perform side effects, API calls, and data updates</p>
            <div className="effect-animation">
              <span>🔄</span>
              <span>📡</span>
              <span>✅</span>
            </div>
          </div>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)'
  },
  {
    id: 7,
    title: 'Daily Tasks and Activities',
    subtitle: 'Initial Training Tasks',
    content: (
      <div className="content-slide tasks-slide">
        <div className="timeline">
          {[
            { date: '09 April', task: 'Arithmetic, Relational & Logical Operator Tasks' },
            { date: '11 April', task: 'JavaScript program to iterate arrays (odd/even numbers)' },
            { date: '13 April', task: 'Calculator program using JavaScript' },
            { date: '16 April', task: 'Calculator project using DOM manipulation' },
            { date: '17 April', task: 'React Installation and Environment Setup' },
            { date: '18 April', task: 'JSX component for odd/even numbers display' }
          ].map((item, index) => (
            <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">{item.task}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'
  },
  {
    id: 8,
    title: 'Advanced React Development Tasks',
    subtitle: 'Project Development Phase',
    content: (
      <div className="content-slide advanced-tasks-slide">
        <div className="tasks-grid">
          {[
            { date: '22 April', task: 'Displayed data using Fake APIs', icon: '📡' },
            { date: '28 April', task: 'Admin functionality to manage all users', icon: '👑' },
            { date: '30 April', task: 'User Cart Page using React JSX', icon: '🛒' },
            { date: '01 May', task: 'Display products by specific users', icon: '📦' },
            { date: '05 May', task: 'AdminOrder.jsx & UserOrder.jsx with full functionality', icon: '📋' },
            { date: '06 May', task: 'Project Hosting and Deployment', icon: '🚀' }
          ].map((item, index) => (
            <div key={index} className="task-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="task-card-icon">{item.icon}</div>
              <div className="task-card-date">{item.date}</div>
              <div className="task-card-content">{item.task}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
  },
  {
    id: 9,
    title: 'E-Commerce Web Application',
    subtitle: 'Major Project Developed',
    content: (
      <div className="content-slide project-slide">
        <div className="project-showcase">
          <div className="project-icon-display">🛍️</div>
          <h3>E-Commerce Web Application</h3>
          <div className="features-grid">
            {[
              'User Registration & Login',
              'Product Listing',
              'Product Management',
              'User-specific Product Display',
              'Shopping Cart Functionality',
              'Order Management',
              'Admin Dashboard',
              'User Dashboard',
              'API Integration',
              'Responsive UI'
            ].map((feature, index) => (
              <div key={index} className="feature-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="feature-star">⭐</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0d0d2b 100%)'
  },
  {
    id: 10,
    title: 'Challenges Faced & Solutions',
    subtitle: 'Problem Solving Journey',
    content: (
      <div className="content-slide challenges-slide">
        <div className="challenges-list">
          {[
            { challenge: 'Understanding React Component Structure', solution: 'Practiced creating reusable components and studied React architecture' },
            { challenge: 'Managing State in React', solution: 'Learned and implemented useState Hook for handling dynamic data' },
            { challenge: 'Fetching API Data', solution: 'Used useEffect Hook and Fake APIs to retrieve and display data' },
            { challenge: 'Debugging Errors', solution: 'Used browser developer tools and console debugging techniques' },
            { challenge: 'Project Deployment', solution: 'Learned project hosting and deployed using Vercel' }
          ].map((item, index) => (
            <div key={index} className="challenge-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="challenge-problem">
                <span className="challenge-icon">⚠️</span>
                <p>{item.challenge}</p>
              </div>
              <div className="challenge-solution">
                <span className="solution-icon">💡</span>
                <p>{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)'
  },
  {
    id: 11,
    title: 'Learning Outcomes',
    subtitle: 'Knowledge & Skills Gained',
    content: (
      <div className="content-slide outcomes-slide">
        <div className="outcomes-grid">
          {[
            'React JS Development', 'Component-Based Architecture',
            'JSX Syntax', 'State Management (useState)',
            'Side Effects (useEffect)', 'API Integration',
            'Frontend Development', 'Git & GitHub Version Control',
            'Project Deployment', 'Problem Solving',
            'Team Collaboration', 'Software Development Workflow'
          ].map((outcome, index) => (
            <div key={index} className="outcome-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="outcome-badge">🎯</span>
              <p>{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'
  },
  {
    id: 12,
    title: 'Benefits of the Internship',
    subtitle: 'Professional Growth',
    content: (
      <div className="content-slide benefits-slide">
        <div className="benefits-flow">
          {[
            'Improved programming skills',
            'Real-world project experience',
            'Industry-standard development practices',
            'Better debugging and testing abilities',
            'Enhanced problem-solving skills',
            // 'Understanding of SDLC',
            'Confidence in building React applications',
            'Learned project deployment and hosting',
            'Prepared for web development career'
          ].map((benefit, index) => (
            <div key={index} className="benefit-item" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="benefit-number">{index + 1}</div>
              <div className="benefit-content">
                <p>{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
  },
  {
    id: 13,
    title: 'Conclusion',
    subtitle: 'Internship Summary',
    content: (
      <div className="content-slide conclusion-slide">
        <div className="conclusion-content">
          <div className="conclusion-icon">🎓</div>
          <p className="conclusion-text">
            The one-month React Internship at <span className="highlight">Techwingsys</span> was a valuable 
            learning experience that provided practical exposure to modern web development technologies.
          </p>
          <div className="conclusion-highlights">
            <p>✓ React fundamentals & JavaScript concepts</p>
            <p>✓ React Hooks, API integration</p>
            <p>✓ Project development & deployment</p>
            <p>✓ E-Commerce Web Application development</p>
          </div>
          <p className="conclusion-closing">
            This internship helped bridge the gap between academic learning and real-world software 
            development, making me better prepared for future opportunities in the IT industry.
          </p>
        </div>
      </div>
    ),
    bgGradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0d0d2b 100%)'
  },
  // In the slides array, replace the last slide (id: 14) with this:

{
  id: 14,
  content: (
    <div className="content-slide thankyou-slide">
      <div className="thankyou-content">
        <div className="thankyou-header">
          <div className="thankyou-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="38" stroke="#61dafb" strokeWidth="2" strokeDasharray="6 4" opacity="0.6">
                <animateTransform attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="20s" repeatCount="indefinite" />
              </circle>
              <circle cx="40" cy="40" r="28" stroke="#61dafb" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4">
                <animateTransform attributeName="transform" type="rotate" from="360 40 40" to="0 40 40" dur="15s" repeatCount="indefinite" />
              </circle>
              <path d="M32 40L38 46L48 36" stroke="#61dafb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <animate attributeName="stroke-dasharray" from="0 100" to="100 0" dur="1.5s" fill="freeze" />
              </path>
            </svg>
          </div>
          <h2 className="thankyou-title">Thank You</h2>
          <div className="thankyou-divider"></div>
        </div>
        
        <div className="presenter-card">
          <div className="presenter-avatar">
            <span>AR</span>
          </div>
          <div className="presenter-details">
            <h2>Alex Renny</h2>
            <p className="presenter-role">React Development Intern</p>
            <p className="organization-name">Techwingsys, Kochi</p>
          </div>
        </div>

        {/* Website Button */}
        <div className="website-button-container">
          <a 
            href="https://ecom-u76h.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="website-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>Project</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="external-icon">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

        <div className="qa-section">
          <div className="qa-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span>Questions & Answers</span>
          </div>
        </div>
      </div>
    </div>
  ),
  bgGradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0d0d2b 100%)'
}
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const goToSlide = useCallback((index) => {
    if (index === currentSlide || isTransitioning || index < 0 || index >= slides.length) return;
    setDirection(index > currentSlide ? 'next' : 'prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  }, [currentSlide, isTransitioning]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [nextSlide, prevSlide]);

  const slide = slides[currentSlide];

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`
    }
  }));

  return (
    <div 
      className="app" 
      style={{ background: slide.bgGradient }}
    >
      {/* Background Particles */}
      <div className="particles-container">
        {particles.map(particle => (
          <div key={particle.id} className="particle" style={particle.style}></div>
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Mouse Glow Effect */}
      <div 
        className="mouse-glow"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150
        }}
      ></div>

      {/* Navigation
      <div className="navigation">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className="nav-btn prev-btn"
        >
          <span className="nav-arrow">←</span>
          <span>Previous</span>
        </button>
        <div className="slide-counter">
          <span className="counter-current">{currentSlide + 1}</span>
          <span className="counter-separator">/</span>
          <span className="counter-total">{slides.length}</span>
        </div>
        <button 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          className="nav-btn next-btn"
        >
          <span>Next</span>
          <span className="nav-arrow">→</span>
        </button>
      </div> */}

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div 
          className="progress-bar"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

      {/* Slide Content */}
      <div className={`slide-container ${isTransitioning ? (direction === 'next' ? 'slide-out-left' : 'slide-out-right') : 'slide-in'}`}>
        <div className="slide-header">
          <h1 className="slide-title">{slide.title}</h1>
          {slide.subtitle && <p className="slide-subtitle">{slide.subtitle}</p>}
          <div className="title-underline"></div>
        </div>
        <div className="slide-content">
          {slide.content}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="dots-navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            style={{
              boxShadow: index === currentSlide ? '0 0 15px rgba(97, 218, 251, 0.8)' : 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;