export default function Projects() {
  const projects = [
    { 
      title: "Dev OS Portfolio", 
      tech: ["Next.js", "React", "Tailwind", "AI"], 
      desc: "An interactive, terminal-themed developer portfolio featuring a custom AI assistant powered by the Gemini API.",
      link: "https://github.com/Geetharu/Geeth-portfolio" 
    },
    { 
      title: "Spring Boot API Service", 
      tech: ["Java", "Spring Boot", "REST API", "MySQL"], 
      desc: "A robust backend system handling user authentication, data processing, and secure endpoint management." 
    },
    { 
      title: "Automation & Transcription Tool", 
      tech: ["Python", "Macros", "Automation"], 
      desc: "Automated workflow scripts designed to process and format transcription data, significantly reducing manual entry time." 
    },
    { 
      title: "AI Portrait Generator", 
      tech: ["React", "Node.js", "AI Integration"], 
      desc: "A web application that allows users to generate custom portraits in various artistic styles using generative AI models." 
    }
  ];

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-start p-10 max-w-6xl mx-auto relative z-10">
      <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-12 border-b border-gray-800/50 pb-6 w-full text-center">
        Featured Projects
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col justify-between border border-gray-700/50 bg-[#0a0a0a]/80 backdrop-blur-md p-8 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500 group">
            
            {/* Top Section: Title & Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors mb-4">
                {project.title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                {project.desc}
              </p>
            </div>
            
            {/* Bottom Section: Tech Stack & Link */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                  View Source Code <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              ) : (
                <span className="inline-flex items-center text-sm font-bold text-gray-600 cursor-not-allowed">
                  Private Repository <span className="ml-2">🔒</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}