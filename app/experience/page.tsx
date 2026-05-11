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
      <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] mb-16 border-b border-[color:var(--border)] pb-6 w-full text-center">
        Experience & Education
      </h1>
      
      {/* The Timeline Container */}
      <div className="w-full relative border-l-2 border-[color:var(--border)] ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 ml-8 md:ml-10 relative group">
            
            {/* The Glowing Timeline Dot */}
            <span className="absolute flex items-center justify-center w-5 h-5 bg-[color:var(--accent)] rounded-full -left-[43px] md:-left-[51px] ring-4 ring-[color:var(--background)] group-hover:bg-[color:var(--accent-2)] group-hover:shadow-[0_0_15px_color-mix(in_srgb,var(--accent-2)_60%,transparent)] transition-all duration-300"></span>
            
            {/* The Glassmorphism Card */}
            <div className="border border-[color:var(--border)] bg-[color:var(--surface)]/90 backdrop-blur-md p-8 rounded-2xl hover:border-[color:var(--accent)]/60 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--accent)_18%,transparent)] transition-all duration-500">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-[color:var(--foreground)] group-hover:text-[color:var(--accent)] transition-colors">
                  {exp.role}
                </h3>
                
                {/* Badge for Type (Work/Education) */}
                <span className="w-fit px-3 py-1 text-xs font-mono font-medium text-[color:var(--accent-2)] bg-[color:var(--accent-2)]/10 border border-[color:var(--accent-2)]/25 rounded-full">
                  {exp.type}
                </span>
              </div>

              <div className="text-sm font-mono text-[color:var(--accent)] mb-4 flex items-center gap-2">
                <span className="font-semibold">{exp.company}</span> 
                <span className="text-[color:var(--muted)]">|</span> 
                <span className="text-[color:var(--muted)]">{exp.date}</span>
              </div>
              
              <p className="text-[color:var(--muted)] leading-relaxed">
                {exp.desc}
              </p>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}