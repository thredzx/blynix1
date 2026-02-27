import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getStudyAbroadAdvice(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: "You are an expert Study Abroad Consultant for GlobalPath. Provide helpful, encouraging, and accurate advice about universities, visas, and living abroad. Keep responses concise and formatted in Markdown.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
}
