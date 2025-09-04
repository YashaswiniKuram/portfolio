import { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  Menu, 
  X,
  MapPin,
  Calendar,
  Award,
  Code,
  User,
} from 'lucide-react';

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean | null, message: string}>({success: null, message: ''});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xgejvqdv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Contact Form Submission from Portfolio',
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later or email me directly at kuramyashaswini@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    { category: 'Programming Languages', items: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 85 },
      { name: 'Java', level: 85 },
      { name: 'C Programming', level: 75 },
    ]},
    { category: 'Frontend Development', items: [
      { name: 'HTML5&CSS3', level: 95 },
      { name: 'React.js', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'AngularJS', level: 75 },
    ]},
    { category: 'Backend & Cloud', items: [
      { name: 'Firebase', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Azure', level: 75 },
    ]}
  ];

  const projects = [
    {
      title: 'VitaCoin - E-Learning Gamification Platform',
      period: 'Jul 2025',
      description: 'Educational gamification platform built with Next.js, Firebase, and TypeScript that increases learner engagement through digital quizzes and coin rewards. Features real-time leaderboards, badge collection system, and SendGrid email integration.',
      technologies: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS', 'SendGrid'],
      category: 'Web Development',
      highlights: ['Real-time leaderboards', 'Badge collection system', 'Email notifications', 'Google Sign-in integration'],
      githubLink: 'https://github.com/YashaswiniKuram/VitaCoin'
    },
    {
      title: 'Rehab Wings - Deep Learning Rehabilitation Game',
      period: 'Jun 2025 - Present',
      description: 'AI-powered rehabilitation system using fist gesture detection for nerve damage recovery. Integrates IoT-based EMG and Gyroscope sensors to detect Hemiparesis and track motor function recovery progress.',
      technologies: ['Python', 'Deep Learning', 'IoT', 'EMG Sensors', 'Gyroscope', 'Computer Vision'],
      category: 'AI/ML',
      highlights: ['Fist gesture detection', 'IoT sensor integration', 'Hemiparesis detection', '20-minute daily limit'],
      githubLink: 'https://github.com/YashaswiniKuram/Rehab-game'
    },
    {
      title: 'Brain Detox - Digital Wellness Android App',
      period: 'May 2025 - Jul 2025',
      description: 'Sophisticated Android app for digital habit management with app time limits, real-time monitoring, smart blocking, and math challenge barriers for accessing blocked apps.',
      technologies: ['Android', 'Java', 'Kotlin', 'SQLite', 'Background Services'],
      category: 'Mobile Development',
      highlights: ['Real-time app monitoring', 'Smart blocking system', 'Math challenge barriers', 'Usage statistics'],
      githubLink: 'https://github.com/YashaswiniKuram/Brain-Detox'
    },
    {
      title: 'Tasty Trails - Home Made Fresh food',
      period: 'Jan 2025 - Mar 2025',
      description: 'A platform connecting home chefs with food enthusiasts, offering fresh, homemade meals. Features include meal discovery, chef profiles, and direct ordering of home-cooked food.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Payment Gateway Integration'],
      category: 'Food Tech',
      highlights: [
        'Home chef registration and verification',
        'Menu customization and meal scheduling',
        'Real-time order tracking',
        'Rating and review system',
      ],
      githubLink: 'https://github.com/YashaswiniKuram/Tasty-trails'
    },
    {
      title: 'Emotion Recognition using Deep Learning',
      period: 'Sep 2025',
      description: 'A deep learning model that detects and classifies human emotions from facial expressions in real-time. Built with TensorFlow and OpenCV, it can recognize multiple emotional states with high accuracy.',
      technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Python', 'Deep Learning'],
      category: 'AI/ML',
      highlights: [
        'Real-time emotion detection from webcam feed',
        'Multiple emotion classification (happy, sad, angry, etc.)',
        'High accuracy deep learning model',
        'Real-time face detection and analysis',
        'Interactive visualization of emotion metrics'
      ],
      githubLink: 'https://github.com/YashaswiniKuram/Emotion-Recognition'
    },
    {
      title: 'RAG System - Document Q&A Assistant',
      period: 'Aug 2025',
      description: 'Retrieval-Augmented Generation system that processes PDF, DOC, DOCX, and TXT files to deliver precise answers. Achieves 90%+ retrieval accuracy and reduces manual search time by 80%.',
      technologies: ['Python', 'Flask', 'LangChain', 'ChromaDB', 'Google Gemini AI', 'HTML', 'CSS', 'JavaScript'],
      category: 'AI/ML',
      highlights: ['90%+ retrieval accuracy', '80% time reduction', '16MB file support', 'Multi-format support'],
      githubLink: 'https://github.com/YashaswiniKuram/Retrieval-Augmented-Generation-using-LangChain'
    },
    {
      title: 'Web Guru - AI Web Knowledge Extractor',
      period: 'Oct 2024',
      description: 'AI assistant that summarizes website content and answers queries using fine-tuned BERT model and Gemini API. Reduces content reading time by 70% with 90%+ Q&A accuracy.',
      technologies: ['Python', 'Flask', 'BERT', 'Gemini API', 'Web Scraping', 'Cursor'],
      category: 'AI/ML',
      highlights: ['70% time reduction', '90%+ Q&A accuracy', 'Fine-tuned BERT', 'Web scraping pipeline'],
      githubLink: 'https://github.com/YashaswiniKuram/WebGuru'
    },
    {
      title: 'Interview-Ace - AI Mock Interview Assistant',
      period: 'Aug 2025',
      description: 'AI-powered mock interview coach with voice-based practice, instant feedback, and GitHub integration for code review automation. Provides personalized interview sessions and performance analytics.',
      technologies: ['Firebase', 'OAuth', 'LangChain', 'Genkit', 'Google Gemini API'],
      category: 'AI/ML',
      highlights: ['Voice-based practice', 'GitHub integration', 'Performance analytics', 'Adaptive questions'],
      githubLink: 'https://github.com/YashaswiniKuram/Interview-Ace'
    },
    {
      title: 'Tic Tac Toe - Java GUI Game',
      period: 'Jun 2025',
      description: 'Java-based GUI Tic Tac Toe game with AI and 2-Player modes, featuring MySQL integration to track players, statistics, and match history with custom Swing-based interface.',
      technologies: ['Java', 'MySQL', 'Swing', 'GUI Development'],
      category: 'Desktop Development',
      highlights: ['AI opponent', '2-Player mode', 'Match history tracking', 'Custom Swing UI'],
      githubLink: 'https://github.com/YashaswiniKuram/tic-tac-toe'
    },
    {
      title: 'YouTube Transcript Summarizer',
      period: 'Aug 2024 - Oct 2024',
      description: 'AI framework for real-time YouTube video transcript extraction and summarization using Google Gemini. Published in IEEE journal, enabling faster content consumption with high accuracy.',
      technologies: ['Python', 'Google Gemini', 'Natural Language Processing', 'YouTube API'],
      category: 'AI/ML',
      highlights: ['IEEE publication', 'Real-time processing', 'High accuracy', 'Context-aware summaries'],
      githubLink: 'https://github.com/YashaswiniKuram/AI-Powered-Vedio-Summarization'
    },
  ];

  const categories = ['All', 'Web Development', 'AI/ML', 'Mobile Development', 'Desktop Development'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                Yashaswini Kuram
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('about')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</button>
                <button onClick={() => scrollToSection('experience')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</button>
                <button onClick={() => scrollToSection('education')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</button>
              </div>

              <div className="flex items-center space-x-4">
                
                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-4">
                  <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</button>
                  <button onClick={() => scrollToSection('skills')} className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</button>
                  <button onClick={() => scrollToSection('projects')} className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</button>
                  <button onClick={() => scrollToSection('experience')} className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</button>
                  <button onClick={() => scrollToSection('education')} className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</button>
                  <button onClick={() => scrollToSection('contact')} className="text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                  {/* Profile Image */}
                  <div className="mb-8 md:mb-0 md:mr-12 w-48 h-64 md:w-64 md:h-full rounded-lg overflow-hidden border-4 border-blue-500 shadow-xl">
                    <img 
                      src="profile.jpg" 
                      alt="Yashaswini Kuram" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left ml-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                      Yashaswini Kuram
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-4 mb-2">
                      B.Tech Computer Science & Engineering Student (2026)
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
                      Full-Stack Developer & AI/ML Enthusiast | Python Developer | Java Developer
                    </p>
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 dark:text-gray-300 mb-8">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 mr-2" />
                        <span>kuramyashaswini@gmail.com</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 mr-2" />
                        <span>+91 7207293303</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                      <button 
                        onClick={() => scrollToSection('projects')}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center"
                      >
                        <Code className="w-5 h-5 mr-2" />
                        View Projects
                      </button>
                      <a 
                        href="Kuram Yashaswini Resume.pdf" 
                        download="Yashaswini_Kuram_Resume.pdf"
                        className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white rounded-lg font-semibold transition-colors flex items-center"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Resume
                      </a>
                    </div>
                    <div className="flex ml-32 space-x-4 pt-6">
                      <a title="Github" href="https://github.com/YashaswiniKuram" target="_blank" rel="noopener noreferrer" 
                         className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                        <Github className="w-6 h-6" />
                      </a>
                      <a title="Linkedin" href="https://www.linkedin.com/in/yashaswini-kuram-54a300312/" target="_blank" rel="noopener noreferrer"
                         className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Full-Stack Developer & Python Developer</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    I'm a passionate Computer Science & Engineering student with expertise in full-stack development and AI/ML integration. 
                    Currently pursuing my B.Tech degree with an impressive 8.57 CGPA, I combine academic excellence with practical 
                    experience in building innovative solutions.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  My journey spans from building AI-powered assistants to creating interactive platforms that solve real-world challenges. I thrive at the intersection of artificial intelligence, web development, and problem-solving. From reducing manual search time by 80% to developing gamified applications, I focus on innovation with impact. I bring expertise in Python, Java, and modern AI frameworks to craft scalable solutions. Beyond technology, I’ve led student organizations and built inclusive, vibrant tech communities. I am driven by a vision to use technology as a tool for growth, accessibility, and meaningful change.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">11+</div>
                    <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">8.57</div>
                    <div className="text-gray-600 dark:text-gray-300">Academic CGPA</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
                    <div className="text-gray-600 dark:text-gray-300">Leadership Roles</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                    <div className="text-gray-600 dark:text-gray-300">Hackactons Participation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillCategory, categoryIndex) => (
                <div key={categoryIndex} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{skillCategory.category}</h3>
                  <div className="space-y-4">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Showcasing innovative solutions across web development, AI/ML, mobile apps, and desktop applications
              </p>
            </div>

            {/* Project Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    activeFilter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Highlights:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors flex items-center justify-center"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Leadership</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Leadership Experience */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
                  <User className="w-6 h-6 mr-3 text-blue-600" />
                  Leadership Positions
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Vice President</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">IEEE Women in Engineering - KARE</p>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        July 2024 - Present
                      </div>
                    </div>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                        Spearheading initiatives to promote diversity, inclusion, and leadership opportunities for women in engineering and technology fields.
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                        Coordinating events, workshops, and networking sessions that empower women in STEM and increase IEEE WIE visibility.
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                        Leading a team of committee members to ensure effective planning, execution, and outreach of chapter activities.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Promotional Activity Lead</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">IEEE Computer Society - KARE</p>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        July 2024 - Present
                      </div>
                    </div>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                        Led promotional strategies and digital outreach for IEEE Computer Society events, increasing student participation and visibility on campus.
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                        Successfully planned and executed large-scale technical events including hackathons, project expos, and coding competitions, attracting 100+ participants.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications & Education */}
        <section id="education" className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Education */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center justify-center">
                <Award className="w-6 h-6 mr-3 text-blue-600" />
                Education
              </h3>
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">B.Tech Computer Science & Engineering</h4>
                  <p className="text-blue-600 dark:text-blue-400 mt-1">Kalasalingam Academy of Research and Education</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">2022-2026 | <strong className="text-blue-600 dark:text-blue-400">CGPA: 8.57</strong></p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Class XII</h4>
                  <p className="text-blue-600 dark:text-blue-400 mt-1">Sri Chaitanya Junior College</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">2020-2022 | <strong className="text-blue-600 dark:text-blue-400">802/1000 Marks</strong></p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Class X</h4>
                  <p className="text-blue-600 dark:text-blue-400 mt-1">Sri Chaitanya Techno School</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">2019-2020 | <strong className="text-blue-600 dark:text-blue-400">600/600 Marks</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Let's discuss opportunities, collaborations, or just connect over technology and innovation
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-4" />
                    <span className="text-gray-600 dark:text-gray-300">kuramyashaswini@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-4" />
                    <span className="text-gray-600 dark:text-gray-300">+91 7207293303</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-4" />
                    <span className="text-gray-600 dark:text-gray-300">Andhra Pradesh, India</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a title="Github" href="https://github.com/YashaswiniKuram" target="_blank" rel="noopener noreferrer"
                       className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white rounded-lg transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a title="Linkedin" href="https://www.linkedin.com/in/yashaswini-kuram-54a300312/" target="_blank" rel="noopener noreferrer"
                       className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white rounded-lg transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  {submitStatus.message && (
                    <div className={`p-3 rounded-lg text-sm ${submitStatus.success ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Yashaswini Kuram</h3>
              <p className="text-gray-400 mb-6">Full-Stack Developer & AI/ML Enthusiast</p>
              <div className="flex justify-center space-x-6 mb-8">
                <a title="Github" href="https://github.com/YashaswiniKuram" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a title="Linkedin" href="https://www.linkedin.com/in/yashaswini-kuram-54a300312/" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a title="Email" href="mailto:kuramyashaswini@gmail.com"
                   className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-400 text-sm">
                  © 2025 Yashaswini Kuram. All rights reserved. Built with React & Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
