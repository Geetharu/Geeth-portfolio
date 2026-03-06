export default function Experience() {
  const experiences = [
    { 
      type: "Work",
      role: "Freelance Software Developer", 
      company: "Self-Employed", 
      date: "2024 - Present", 
      desc: "Architecting and developing custom full-stack web applications for clients. Utilizing Next.js and Tailwind for responsive frontends, and Spring Boot for secure, scalable backends." 
    },
    { 
      type: "Education",
      role: "BSc in Software Engineering (Expected)", 
      company: "University Name", // TODO: Update with your actual university
      date: "2022 - 2026", 
      desc: "Focusing on core computer science principles, data structures, algorithms, and advanced web development. Actively building a portfolio of modern web applications." 
    },
    { 
      type: "Project",
      role: "Open Source Contributor & Learner", 
      company: "Dev OS Platform", 
      date: "2023 - 2024", 
      desc: "Deep-dived into the React ecosystem and modern JavaScript/TypeScript. Mastered state management, API integrations, and UI/UX design principles." 
    }
  ];

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-start p-10 max-w-4xl mx-auto relative z-10">
      <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-16 border-b border-gray-800/50 pb-6 w-full text-center">
        Experience & Education
      </h1>
      
      {/* The Timeline Container */}
      <div className="w-full relative border-l-2 border-gray-800/80 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 ml-8 md:ml-10 relative group">
            
            {/* The Glowing Timeline Dot */}
            <span className="absolute flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full -left-[43px] md:-left-[51px] ring-4 ring-[#0a0a0a] group-hover:bg-emerald-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.8)] transition-all duration-300"></span>
            
            {/* The Glassmorphism Card */}
            <div className="border border-gray-700/50 bg-[#0a0a0a]/80 backdrop-blur-md p-8 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                
                {/* Badge for Type (Work/Education) */}
                <span className="w-fit px-3 py-1 text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  {exp.type}
                </span>
              </div>

              <div className="text-sm font-mono text-blue-400 mb-4 flex items-center gap-2">
                <span className="font-semibold">{exp.company}</span> 
                <span className="text-gray-600">|</span> 
                <span className="text-gray-400">{exp.date}</span>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                {exp.desc}
              </p>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}