import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import mylogo from './assets/mylogo.png'
import MainVideo from './assets/Main.mp4'
import portrait from './assets/portrait.png'
import Work from './components/Work';
import './App.css'

const TimelineItem = ({ year, title, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative pl-6 pb-12 border-l-2 border-gray-300"
    >
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 top-0 border-2 border-white"></div>
      <h3 className="text-md font-semibold text-gray-900">{year} — {title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </motion.div>
  );
};

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 72 // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="App">
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="nav-content">
            <motion.div 
              className="nav-brand"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={mylogo} alt="Logo" className="nav-logo" />
            </motion.div>
            
            <motion.div 
              className="nav-menu"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button className="nav-button" onClick={() => scrollToSection('about')}>About Me</button>
              <button className="nav-button">Work</button>
              <button className="nav-button">Resume</button>
              <button className="nav-button">Contact</button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <main>
          <div className="main-container">
            <div className="main-grid">
              
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8 }}
                className="text-content fade-in-up"
              >
                <h1 className="main-title">
                  <span className="name-highlight">ROBIN</span> GONZALES
                </h1>
                <p className="main-subtitle">
                  Crafting bold visual stories with purpose and precision.
                </p>
              </motion.div>

              {/* Right Side - Video */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="video-container fade-in-right"
              >
                <div className="video-wrapper">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src={MainVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </section>
      
      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <div className="about-layout">
              {/* Left Side - Profile Picture */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="about-image-container"
              >
                <div className="about-image-wrapper">
                  <img src={portrait} alt="Portrait of Robin Gonzales" className="about-portrait" />
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="about-text-container"
              >
                <div className="about-text-container">
                  {/* Introduction */}
                  <div className="about-intro">
                    <h3 className="about-name">Hello there! <span className="highlight">I'm Robin Gonzales</span></h3>
                    <p className="about-role">Professional Multimedia Designer from the Philippines.<br></br>
                      Aiming to bring ideas to life through storytelling and thoughtful design.</p>
                  </div>

                  {/* Timeline of Experience */}
                  <div className="about-timeline">
                    <h4 className="section-heading">Experience</h4>
                    <div className="timeline">
                      {[
                        {
                          year: "2020-2022",
                          title: "Freelance - Motion Graphic Artist",
                          description: "Created engaging motion graphics for Corporate Videos, Explainer Videos, Youtube Videos, and Advertisements.",
                        },
                        {
                          year: "2022-PRESENT",
                          title: "Freelance - Storyboard Artist/Art Director",
                          description: "Led visual development and storytelling across multimedia projects. Drawn detailed storyboards, directed visual style, and aligned creative vision with client goals.",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="timeline-item"
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className="timeline-dot" />
                          <div className="timeline-content">
                            <h5>{item.year}</h5>
                            <strong>{item.title}</strong>
                            <p>{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="about-skills">
                    <h4 className="section-heading">Skills</h4>
                    <ul className="skills-list">
                      <li><strong>Digital Art:</strong> Storyboard, Illustration, Concept Design</li>
                      <li><strong>Animation:</strong> 2D Animation, 3D Animation, Frame by Frame</li>
                      <li><strong>Visual Design:</strong> Web Design, UI/UX, Logo Design</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Work />

    </div>
  )
}

export default App
