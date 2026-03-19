import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import rateLimit from "@/lib/rate-limit"; 

// 1. Initialize the Rate Limiter (Allow 5 requests per minute per IP)
const limiter = rateLimit({
  interval: 60 * 1000, 
  uniqueTokenPerInterval: 500,
});

// Initialize the Gemini API securely
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function POST(req: Request) {
  try {
    // 2. Extract IP and Check Rate Limit
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    
    try {
      await limiter.check(5, ip); 
    } catch {
      return NextResponse.json(
        { reply: "[SYSTEM ERROR]: Rate limit exceeded. CPU cooling required. Please wait 60s." }, 
        { status: 429 }
      );
    }

    const { message } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ reply: "[SYSTEM ERROR]: API Key missing." }, { status: 500 });
    }

    // 3. Define the AI model and its "Personality"
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: `You are the AI assistant embedded in the 'Dev OS' portfolio of Geeth Wickramasinghe, a Software Engineering student. 
      When asked about the developer, 'core skills', 'experience', or 'projects', you are answering ON BEHALF of Geeth Wickramasinghe. 
      If asked who built you or whose portfolio this is, state proudly that it belongs to Geeth Wickramasinghe.
      Geeth's core skills are: React, Next.js, TypeScript, Spring Boot, Node.js, and Tailwind CSS. 
      Geeth has built 4 main projects. 
      Keep answers concise, professional, and confident. Do not break character.`
    });

    // 4. Send the user's message to Gemini
    const result = await model.generateContent(message);
    const text = result.response.text();

    return NextResponse.json({ reply: text });

  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json(
      { reply: "[SYSTEM MALFUNCTION]: Kernel panic. Please reboot (refresh) or try again." }, 
      { status: 500 }
    );
  }
}