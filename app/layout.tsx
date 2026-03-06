import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Geeth Wickramasinghe | Software Engineer",
  description: "Portfolio of Geeth Wickramasinghe, a Software Engineering student specializing in full-stack web development, React, and Next.js. Actively seeking internship opportunities.",
  keywords: ["Geeth Wickramasinghe", "Software Engineer", "Web Developer", "React", "Next.js", "Java", "Spring Boot", "Portfolio"],
  openGraph: {
    title: "Geeth Wickramasinghe | Software Engineer",
    description: "Interactive terminal portfolio powered by custom AI.",
    url: "https://geeth-dev.vercel.app",
    siteName: "Geeth Wickramasinghe Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-gray-200 selection:bg-blue-500/30 relative min-h-screen`}>
        
        {/* UPGRADE 1: The Modern Grid Background */}
        <div className="absolute inset-0 z-[-1] h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* UPGRADE 2: Sticky Glassmorphism Navbar */}
        <nav className="sticky top-0 z-50 flex items-center justify-between p-6 max-w-5xl mx-auto backdrop-blur-md border-b border-gray-800/50 bg-[#0a0a0a]/70">
          <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Dev OS
          </div>
          <div className="flex items-center space-x-6">
            <a href="/" className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors">Home</a>
            <a href="/projects" className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
            <a href="/experience" className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors">Experience</a>
            
            {/* UPGRADE 3: The Glowing Resume Button */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="ml-4 px-5 py-2 text-sm font-bold text-gray-900 bg-blue-500 rounded-lg hover:bg-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </nav>
        
        {children} 
      </body>
    </html>
  );
}