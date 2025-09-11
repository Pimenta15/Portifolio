import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Database, Brain, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Python', level: 90, icon: '🐍', description: 'IA, PLN, Análise de Dados' },
    { name: 'Java', level: 85, icon: '☕', description: 'Base acadêmica sólida' },
    { name: 'Frameworks', level: 70, icon: '🍃', description: 'Aplicações Backend, Frontend e FullStack' },
    { name: 'PLN', level: 90, icon: '🧠', description: 'Processamento de Linguagem Natural' },
    { name: 'Git', level: 85, icon: '📚', description: 'Versionamento e colaboração' },
    { name: 'Machine Learning', level: 80, icon: '🤖', description: 'Modelos preditivos e análise' }
  ];


  const experiences = [
    {
      title: 'Pesquisador PIBIC',
      company: 'Unicap',
      period: '2023 - Presente',
      description: 'Pesquisa em Inteligência Artificial aplicada a dados clínicos e Processamento de Linguagem Natural.',
      achievements: [
        'Implementação de modelos de PLN para análise de dados médicos',
        'Desenvolvimento de algoritmos de classificação automática',
        'Publicação de artigos em conferências acadêmicas'
      ]
    },
    {
      title: 'Membro Ativo',
      company: 'GPRT - Grupo de Pesquisa em Redes e Telecomunicações | CIN-UFPE',
      period: '2024 - Presente',
      description: 'Grupo de pesquisa focado em redes, inteligência artificial e visão computacional.',
      achievements: [
        'Aplicação de inteligência artificial e modelos de linguagem (LLMs)',
        'Desenvolvimento em visão computacional',
        'Leitura crítica e análise de artigos científicos',
        'Organização e gerenciamento de tarefas acadêmicas',
        'Trabalho colaborativo em projetos de pesquisa'
      ]
    },
    {
      title: 'Líder de Tecnologia',
      company: 'Rede Inova - Projeto de Extensão',
      period: '2023',
      description: 'Projeto de extensão universitária em tecnologia, comunicação e criatividade.',
      achievements: [
        'Liderança da equipe de tecnologia',
        'Prototipação de modelos 3D',
        'Impressão 3D',
        'Colaboração e trabalho em equipe'
      ]
    },
    {
      title: 'Organizador',
      company: '9th IEEE LA Conference on Computational Intelligence (LACCI)',
      period: '2023',
      description: 'Conferência internacional de Inteligência Computacional.',
      achievements: [
        'Papel ativo na organização do evento',
        'Colaboração com professores e equipe',
        'Atividades de suporte em inglês'
      ]
    },
    {
      title: 'Finalista - Startup in School',
      company: 'Google Brasil',
      period: '2019',
      description: 'Programa de empreendedorismo e inovação do Google Brasil.',
      achievements: [
        'Treinamento em desenvolvimento e empreendedorismo',
        'Desenvolvimento de aplicativo com App Inventor',
        'Destaque Regional na competição nacional'
      ]
    }
  ];
  

  const timeline = [
    {
      year: '2025',
      title: 'Renovação do PIBIC',
      type: 'achievement',
      description: 'Renovação do projeto PIBIC para continuidade das pesquisas em IA aplicada a dados clínicos e PLN.'
    },
    {
      year: '2025',
      title: 'Atuação no GPRT - CIN/UFPE',
      type: 'achievement',
      description: 'Pesquisa em redes de computadores, LLMs, visão computacional e organização de projetos acadêmicos.'
    },
    {
      year: '2024',
      title: 'Ingresso no GPRT',
      type: 'achievement',
      description: 'Grupo de Pesquisa em Redes e Telecomunicações do CIN-UFPE.'
    },
    {
      year: '2024',
      title: 'Certificação Salesforce Platform Developer',
      type: 'cert',
      description: 'Certificação oficial Salesforce em desenvolvimento na plataforma.'
    },
    {
      year: '2024',
      title: 'Início do PIBIC',
      type: 'achievement',
      description: 'Projeto de pesquisa em IA aplicada a dados clínicos e PLN.'
    },
    {
      year: '2023',
      title: 'Líder de Tecnologia - Rede Inova',
      type: 'achievement',
      description: 'Projeto de extensão em comunicação e criatividade com foco em prototipagem e impressão 3D.'
    },
    {
      year: '2023',
      title: 'Participação no 9th IEEE LACCI',
      type: 'achievement',
      description: 'Atuação na organização da conferência internacional de Inteligência Computacional.'
    },
    {
      year: '2021',
      title: 'Início da Graduação',
      type: 'education',
      description: 'Ciência da Computação - Unicap.'
    },
    {
      year: '2019',
      title: 'Startup in School - Google Brasil',
      type: 'achievement',
      description: 'Finalista no programa de empreendedorismo e inovação, com destaque regional no desenvolvimento de app.'
    }
  ];
  

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-emerald-400">JP</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'timeline', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? 'text-emerald-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item === 'timeline' ? 'Trajetória' : item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {['home', 'about', 'skills', 'projects', 'experience', 'timeline', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  {item === 'timeline' ? 'Trajetória' : item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              João Pedro Pimenta
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Transformando dados em inteligência com IA e Backend
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Estudante de Ciência da Computação especializado em Inteligência Artificial, 
              Processamento de Linguagem Natural e desenvolvimento Backend.
            </p>
          </div>
          
          {/* 🔗 Links com ícones */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/Pimenta15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/joao-pedro-pimenta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:jpmp150404@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-emerald-400" />
          </button>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-emerald-400">Principais Habilidades</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">{skill.description}</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-emerald-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-emerald-400">Experiência</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-emerald-400">{exp.title}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{exp.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-200">Principais conquistas:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-emerald-400">Trajetória</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-400"></div>
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center mb-8">
                <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center text-black font-bold mr-8">
                  {item.type === 'cert' && <Award size={24} />}
                  {item.type === 'course' && <Code size={24} />}
                  {item.type === 'achievement' && <Brain size={24} />}
                  {item.type === 'education' && <Database size={24} />}
                </div>
                <div className="bg-gray-800 p-6 rounded-lg flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="text-emerald-400 font-semibold">{item.year}</span>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-emerald-400">Contato</h2>
          <p className="text-xl text-gray-300 mb-12">
            Interessado em colaborar ou saber mais sobre meus projetos?
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="https://github.com/Pimenta15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition-colors group"
            >
              <Github size={48} className="mx-auto mb-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">Confira meus repositórios</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/joao-pedro-pimenta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition-colors group"
            >
              <Linkedin size={48} className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Vamos nos conectar</p>
            </a>
            
            <a 
              href="mailto:jpmp150404@gmail.com"
              className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition-colors group"
            >
              <Mail size={48} className="mx-auto mb-4 text-red-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">E-mail</h3>
              <p className="text-gray-400">jpmp150404@gmail.com</p>
            </a>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 João Pedro Pimenta. Desenvolvido com React & TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;