"use client";
import { useState, FormEvent, useEffect, useRef } from "react";

type Message = { role: "system" | "user" | "ai"; text: string };

// --- UPGRADE 1: The Typing Animation Logic ---
const Typewriter = ({ text, delay = 15 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default function Home() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // --- THE BASELINE: The correct greeting that Vercel needs ---
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", text: "Initializing Dev OS..." },
    { role: "system", text: "Core modules loaded." },
    { role: "ai", text: "Hello. I am the AI assistant for Geeth Wickramasinghe's portfolio. What would you like to know about his skills or experience?" }
  ]);

  // --- UPGRADE 2: The Auto-Scroll Logic ---
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); 

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "system", text: "Error: Connection lost." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]/85 shadow-[0_0_30px_color-mix(in_srgb,var(--accent)_25%,transparent)] backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_color-mix(in_srgb,var(--accent)_35%,transparent)]">
        
        <div className="flex items-center gap-2 border-b border-[color:var(--border)] bg-[color:var(--surface-elevated)] px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="ml-4 font-mono text-sm text-[color:var(--muted)]">guest@dev-os:~</span>
        </div>

        <div className="flex h-[400px] flex-col justify-end p-6 font-mono text-sm">
          {/* --- UPGRADE 3: Applying the styling to the chat box --- */}
          <div className="mb-4 space-y-3 overflow-y-auto max-h-[300px] scrollbar-hide pr-2">
            {messages.map((msg, i) => (
              <div key={i} className={
                msg.role === "system" ? "text-[color:var(--status-system)]" :
                msg.role === "user" ? "text-[color:var(--status-user)]" : "text-[color:var(--status-ai)]"
              }>
                <span className="mr-2 opacity-70">[{msg.role.toUpperCase()}]:</span>
                {/* The user's text appears instantly, the AI/System text types out */}
                {msg.role === "user" ? msg.text : <Typewriter text={msg.text} />}
              </div>
            ))}
            {isLoading && <div className="text-[color:var(--status-system)] animate-pulse">[SYSTEM]: Processing...</div>}
            
            {/* The invisible anchor that pulls the scrollbar down */}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-3 border-t border-[color:var(--border)] pt-4">
            <span className="text-[color:var(--accent)] font-bold">➜</span>
            <span className="text-[color:var(--accent-2)] font-bold">~</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-transparent text-[color:var(--foreground)] placeholder-[color:var(--muted)]/80 outline-none focus:ring-0"
              placeholder="Type your command and press Enter..."
              autoComplete="off"
              disabled={isLoading}
            />
          </form>
        </div>
      </div>
    </main>
  );
}