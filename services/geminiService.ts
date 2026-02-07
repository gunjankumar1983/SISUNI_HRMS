import { GoogleGenAI, Type } from "@google/genai";


const apiKey = import.meta.env.VITE_GEMINI_API_KEY;


if (!apiKey) {
  throw new Error(
    "VITE_GEMINI_API_KEY is missing. Please set it in .env.local or Vercel environment variables."
  );
}


const ai = new GoogleGenAI({ apiKey });


export async function getHRInsights(employees: any[]) {
  const prompt = `
As an AI HR Consultant, analyze the following employee data and provide high-level organizational insights.
Format your response as a structured JSON object with categories like "culture", "diversity", "retention", and "recommendations".

Data: ${JSON.stringify(employees)}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            culture: { type: Type.STRING },
            diversity: { type: Type.STRING },
            retention: { type: Type.STRING },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return null;
  }
}

/**
 * Chat with HR bot
 */
export async function chatWithHRBot(message: string, context: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
You are an HR Assistant for NexusHR.
User message: "${message}"
Context: "${context}"
Be professional and helpful.
`,
      config: {
        systemInstruction:
          "You are an expert HR Bot specialized in company policies, employee engagement, and administrative tasks."
      }
    });

    return response.text ?? "";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
}
