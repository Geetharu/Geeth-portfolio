import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize the Gemini API securely using the hidden environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Define the AI model and its "Personality"
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: `You are the AI assistant embedded in the 'Dev OS' portfolio of Geeth Wickramasinghe, a Software Engineering student. 
      When asked about the developer, 'core skills', 'experience', or 'projects', you are answering ON BEHALF of Geeth Wickramasinghe. 
      If asked who built you or whose portfolio this is, state proudly that it belongs to Geeth Wickramasinghe.
      Geeth's core skills are: React, Next.js, TypeScript, Spring Boot, Node.js, and Tailwind CSS. 
      Geeth has built 4 main projects. 
      Keep answers concise, professional, and confident. Do not break character.`
    });

    // Send the user's message to Gemini
    const result = await model.generateContent(message);
    const text = result.response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json({ error: "System malfunction. Try again." }, { status: 500 });
  }
}