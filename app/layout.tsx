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
  keywords: ["Geeth Wickramasinghe", "Software Engineer", "Web Developer", "React", "Next.js", "Portfolio", "Internship"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}>
        <nav className="flex items-center justify-between p-6 max-w-5xl mx-auto">
          <div className="text-xl font-bold text-blue-400">Dev OS</div>
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="/experience" className="hover:text-blue-400 transition-colors">Experience</a>
          </div>
        </nav>
        
        {/* This is where your page.tsx gets injected */}
        {children} 
      </body>
    </html>
  );
}