export default function Experience() {
    const experiences = [
      { role: "Frontend Developer Intern", company: "TechNova Solutions", date: "2023 - Present", desc: "Built responsive UIs using React, Next.js, and Tailwind CSS. Improved page load times by 15%." },
      { role: "Freelance Web Developer", company: "Self-Employed", date: "2022 - 2023", desc: "Designed and developed custom landing pages for local businesses with a focus on SEO and performance." },
      { role: "Computer Science Student", company: "University of Technology", date: "2020 - 2024", desc: "Specializing in software engineering. Relevant coursework: Data Structures, Web Development, Algorithms." }
    ];
  
    return (
      <main className="flex min-h-[80vh] flex-col items-center justify-start p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-400 mb-10 border-b border-gray-800 pb-4 w-full text-center">Experience & Education</h1>
        
        <div className="w-full relative border-l border-gray-700 ml-3 md:ml-0">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6 group">
              {/* Timeline Dot */}
              <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-500 rounded-full -left-1.5 ring-4 ring-gray-900 group-hover:bg-green-400 transition-colors"></span>
              
              <h3 className="mb-1 text-xl font-bold text-gray-100">{exp.role}</h3>
              <div className="text-sm font-mono text-blue-400 mb-2">
                {exp.company} <span className="text-gray-500">|</span> <span className="text-gray-400">{exp.date}</span>
              </div>
              <p className="text-gray-400 text-base">{exp.desc}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }