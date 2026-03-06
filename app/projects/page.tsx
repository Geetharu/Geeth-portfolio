export default function Projects() {
  const projects = [
    { title: "Project Alpha", tech: "Next.js, Tailwind", desc: "A high-performance e-commerce dashboard." },
    { title: "Project Beta", tech: "React, Node.js", desc: "Real-time chat application with WebSockets." },
    { title: "Project Gamma", tech: "TypeScript, API", desc: "Weather data aggregator and visualizer." },
    { title: "Project Delta", tech: "Next.js, AI", desc: "AI-powered resume analyzer." }
  ];

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-start p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-400 mb-10 border-b border-gray-800 pb-4 w-full text-center">Active Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-700 bg-gray-900/50 p-6 rounded-lg hover:border-blue-500 transition-colors cursor-pointer group">
            <h2 className="text-2xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">{project.title}</h2>
            <p className="text-sm text-green-400 font-mono mt-2 mb-4">{project.tech}</p>
            <p className="text-gray-400">{project.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}