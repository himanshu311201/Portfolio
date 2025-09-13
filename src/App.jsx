import React, { useState, useEffect } from 'react';
import resume from './assets/Resume_Himanshu_Mishra.pdf';
import prof_photo from './assets/Himanshu_Profile.jpeg';
import { Mail, Phone, Github, ExternalLink, Download, Code, Database, Server, Briefcase, GraduationCap, Award, ChevronDown } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    programming: ['Python', 'JavaScript', 'Java', 'C++', 'SQL'],
    webTech: ['React.js', 'Django', 'Spring Boot', 'Redux'],
    tools: ['GitLab', 'CI/CD', 'Docker', 'Redis', 'AWS EC2', 'Linux', 'SSIS', 'SSRS'],
    libraries: ['pandas', 'numpy', 'reportlab']
  };

  const projects = [
    {
      title: 'Invoice Generator',
      tech: 'Django, React, AWS EC2',
      description: 'Developed an Invoice Generator project to learn deployment of Django-React project over Amazon EC2 server. Generated Invoice reports using Python\'s reportlab library.',
      link: 'http://3.111.52.120/'
    },
    {
      title: 'Stocker',
      tech: 'Django, Web Scraping, NSE API, LSTM',
      description: 'Designed and developed a real-time mock stock market web application with an integrated LSTM model for stock trend predictions, improving user decision-making through actionable insights.',
      github: 'https://github.com/himanshu311201/Stock_Trainer'
    },
    {
      title: 'Prabandh',
      tech: 'Django, REST API, JavaScript',
      description: 'Engineered a web application to facilitate peer-to-peer product rentals, creating a platform that increased seller revenue by providing them incentive of 5-15% over the price of product.',
      github: 'https://github.com/himanshu311201/Prabandh'
    },
    {
      title: 'C2C Auction System',
      tech: 'Java, JDBC, MySQL, Java Swing',
      description: 'Developed an online auction system to help users maximize product value based on real-time demand. Integrated JDBC and MySQL, and made UI Screen using Java Swing.',
      github: 'https://github.com/himanshu311201/Bidding-Desktop-App'
    }
  ];

  // Custom LinkedIn and Instagram icons as SVG components
  const LinkedInIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const InstagramIcon = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              HM
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-6 text-center z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden">
                <img 
                  src="/api/placeholder/128/128" 
                  alt="Himanshu Mishra" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold" style={{display: 'none'}}>
                  HM
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Himanshu Mishra
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300">
            Software Developer | Full Stack Engineer
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+919022176521" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Phone size={20} />
              +91 9022176521
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=himanshu312017@gmail.com" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Mail size={20} />
              himanshu312017@gmail.com
            </a>
            <a href="https://github.com/himanshu311201" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Github size={20} />
              GitHub
            </a>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://www.linkedin.com/in/himanshu-mishra-25629a209/" className="bg-slate-800/50 hover:bg-blue-600/20 p-3 rounded-full border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <LinkedInIcon size={24} className="text-blue-400 group-hover:text-blue-300" />
            </a>
            <a href="https://www.instagram.com/himanshu_311201/" className="bg-slate-800/50 hover:bg-pink-600/20 p-3 rounded-full border border-slate-700 hover:border-pink-500/50 transition-all duration-300 group">
              <InstagramIcon size={24} className="text-pink-400 group-hover:text-pink-300" />
            </a>
            <a href="https://github.com/himanshu311201" className="bg-slate-800/50 hover:bg-purple-600/20 p-3 rounded-full border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
              <Github size={24} className="text-purple-400 group-hover:text-purple-300" />
            </a>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-blue-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  I'm a passionate Software Developer with expertise in full-stack development, currently working at ISS-Stoxx. 
                  I specialize in Python, React.js, and building scalable solutions that drive business value.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  With a strong background in data engineering, ETL processes, and modern web technologies, 
                  I enjoy solving complex problems and creating efficient, user-friendly applications.
                </p>
                <div className="flex gap-4 mb-8">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
                    <Download size={20} />
                    <a
                      href={resume}
                      download="Himanshu_Mishra_Resume.pdf"   
                    >
                        Download Resume
                    </a>
                  </button>
                </div>
                
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href="https://www.linkedin.com/in/himanshu-mishra-25629a209/" className="bg-slate-700/50 hover:bg-blue-600/20 p-3 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-all duration-300 group">
                    <LinkedInIcon size={20} className="text-blue-400 group-hover:text-blue-300" />
                  </a>
                  <a href="https://www.instagram.com/himanshu_311201/" className="bg-slate-700/50 hover:bg-pink-600/20 p-3 rounded-lg border border-slate-600 hover:border-pink-500/50 transition-all duration-300 group">
                    <InstagramIcon size={20} className="text-pink-400 group-hover:text-pink-300" />
                  </a>
                  <a href="https://github.com/himanshu311201" className="bg-slate-700/50 hover:bg-purple-600/20 p-3 rounded-lg border border-slate-600 hover:border-purple-500/50 transition-all duration-300 group">
                    <Github size={20} className="text-purple-400 group-hover:text-purple-300" />
                  </a>
                </div>
              </div>
              
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative group">
                  <div className="w-80 h-80 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-1 hover:scale-105 transition-all duration-300">
                    <div className="w-full h-full rounded-2xl bg-slate-800 overflow-hidden">
                      <img 
                        src={prof_photo}
                        alt="Himanshu Mishra - Professional Photo" 
                        className="w-full h-full object-cover rounded-2xl"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex flex-col items-center justify-center text-center p-8" style={{display: 'none'}}>
                        <div className="text-6xl font-bold text-blue-400 mb-4">HM</div>
                        <p className="text-slate-300">Professional Photo</p>
                        <p className="text-slate-400 text-sm mt-2">Upload your image here</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">7+</div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">4+</div>
                <div className="text-slate-300">Programming Languages</div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                <div className="text-slate-300">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Software Developer (Analyst)</h3>
                  <p className="text-blue-400 font-semibold mb-2">ISS-Stoxx</p>
                  <p className="text-slate-400 mb-4">July 2023 - Present</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Python', 'SQL', 'React JS', 'Java'].map((tech) => (
                      <span key={tech} className="bg-slate-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-slate-300">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  <p>Developed and implemented a UI driven PDF report generation framework using Python and SQL, automating real-time reporting reducing 80% efforts of the business</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <p>Created and optimized datapoint driven dynamic SQL queries to enhance complex data retrieval for business reports, reducing query execution time by 25%</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                  <p>Designed and deployed an ETL pipeline in Python ORM, streamlining data processing and automating the complete process more than 50%</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                  <p>Built and dockerized Python microservices for ETL processes, ensuring scalable and efficient data integration with CI/CD pipeline using GitLab runner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-blue-400 text-sm mb-4">{project.tech}</p>
                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex gap-4">
                  {project.link && (
                    <a href={project.link} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-blue-400" size={24} />
                <h3 className="text-xl font-bold">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill) => (
                  <span key={skill} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-3 py-2 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <Server className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold">Web Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.webTech.map((skill) => (
                  <span key={skill} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 px-3 py-2 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-green-400" size={24} />
                <h3 className="text-xl font-bold">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 px-3 py-2 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-pink-400" size={24} />
                <h3 className="text-xl font-bold">Libraries</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.libraries.map((skill) => (
                  <span key={skill} className="bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/30 px-3 py-2 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Engineering in Information Technology</h3>
                  <p className="text-blue-400 font-semibold mb-2">Vivekanand Education Society's Institute of Technology, Mumbai</p>
                  <p className="text-slate-400 mb-4">2019 - 2023 | CGPA: 8.94</p>
                  <p className="text-slate-300">
                    Technical Courses: Data Structures and Algorithms, Operating Systems, Database Management Systems, 
                    Object Oriented Programming, Computer Networks
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600">
              <h3 className="text-xl font-bold text-white mb-6">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-slate-600/50 rounded-lg">
                  <Award className="text-yellow-400" size={20} />
                  <span className="text-slate-300">AWS: The Ultimate Guide to Cloud Computing [IaaS] - Udemy</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-600/50 rounded-lg">
                  <Award className="text-yellow-400" size={20} />
                  <span className="text-slate-300">Quantitative Finance with Python - Udemy</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-600/50 rounded-lg">
                  <Award className="text-yellow-400" size={20} />
                  <span className="text-slate-300">HTML, CSS and JavaScript for web developers - Coursera</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-600/50 rounded-lg">
                  <Award className="text-yellow-400" size={20} />
                  <span className="text-slate-300">Complete JavaScript, jQuery and React Bootcamp - Udemy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-slate-300 mb-12">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
              Feel free to reach out!
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=himanshu312017@gmail.com"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-3 text-lg font-semibold"
              >
                <Mail size={24} />
                Send Email
              </a>
              <a 
                href="tel:+919022176521"
                className="border border-blue-500 hover:bg-blue-500/10 px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-3 text-lg font-semibold"
              >
                <Phone size={24} />
                Call Me
              </a>
            </div>
            
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://www.linkedin.com/in/himanshu-mishra-25629a209/" className="bg-slate-800/50 hover:bg-blue-600/20 p-4 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                <LinkedInIcon size={28} className="text-blue-400 group-hover:text-blue-300" />
              </a>
              <a href="https://www.instagram.com/himanshu_311201/" className="bg-slate-800/50 hover:bg-pink-600/20 p-4 rounded-lg border border-slate-700 hover:border-pink-500/50 transition-all duration-300 group">
                <InstagramIcon size={28} className="text-pink-400 group-hover:text-pink-300" />
              </a>
              <a href="https://github.com/himanshu311201" className="bg-slate-800/50 hover:bg-purple-600/20 p-4 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
                <Github size={28} className="text-purple-400 group-hover:text-purple-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Himanshu Mishra. Crafted with React and passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;