// services/aiService.ts

import { askGemini } from "./GeminiService";

export async function getAIResponse(userQuery: string) {
  try {
    const response = await askGemini(userQuery);
    console.log("Gemini API Response:", JSON.stringify(response));
    return response;
  } catch (error) {
    console.log(error);
    return "Something went wrong.";
  }
}
