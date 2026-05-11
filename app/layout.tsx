import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ThemeToggle from "./components/theme-toggle";

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
    <html lang="en" data-theme="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[color:var(--background)] text-[color:var(--foreground)] selection:bg-[color:var(--accent)]/30 flex flex-col min-h-screen relative overflow-x-hidden`}>
        
        {/* The Modern Grid Background */}
        <div className="bg-grid absolute inset-0 z-[-1] h-full w-full"></div>
        
        {/* Sticky Glassmorphism Navbar - Mobile Optimized */}
        <nav className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-6 max-w-5xl mx-auto w-full backdrop-blur-md border-b border-[color:var(--border)] bg-[color:var(--background)]/80">
          <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] hover:opacity-80 transition-opacity whitespace-nowrap">
            Dev OS
          </Link>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link href="/projects" className="text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors">Projects</Link>
            <Link href="/experience" className="text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors">Experience</Link>
            <ThemeToggle />
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="ml-1 md:ml-2 px-4 py-1.5 md:px-5 md:py-2 text-sm font-bold text-white bg-[color:var(--accent)] rounded-lg hover:brightness-110 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--accent)_45%,transparent)] transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </nav>
        
        {/* Main Page Content */}
        <div className="flex-grow">
          {children} 
        </div>

        {/* The Contact Footer */}
        <footer className="border-t border-[color:var(--border)] bg-[color:var(--background)]/90 backdrop-blur-sm py-8 mt-auto z-40 relative">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[color:var(--muted)] text-sm w-full text-center md:text-left">© {new Date().getFullYear()} Geeth Wickramasinghe. All rights reserved.</p>
            
            <div className="flex items-center justify-center space-x-6 w-full md:w-auto">
              
              {/* The original, native mailto link that works perfectly on mobile */}
              <a 
                href="mailto:geeth.stack@gmail.com" 
                className="text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors text-sm font-medium"
              >
                Email
              </a>
              
              <a href="https://linkedin.com/in/geeth-wickramasinghe" target="_blank" rel="noopener noreferrer" className="text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors text-sm font-medium">LinkedIn</a>
              <a href="https://github.com/Geetharu" target="_blank" rel="noopener noreferrer" className="text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors text-sm font-medium">GitHub</a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}