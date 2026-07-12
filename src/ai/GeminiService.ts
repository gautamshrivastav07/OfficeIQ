import Config from 'react-native-config';

const API_KEY = Config.GEMINI_API_KEY || "";
const AI_MODEL = "gemini-3.5-flash";

export const askGemini = async (prompt: string) => {
  console.log("User Prompt:", JSON.stringify(prompt));

  if (!API_KEY) {
    throw new Error("GEMINI_API_KEY is not set. Add it to your .env file.");
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${AI_MODEL}:generateContent?key=${API_KEY}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ]
    })

  }
  );

  const json = await response.json();
  console.log("Gemini API Response:", JSON.stringify(json));

  return json.candidates[0].content.parts[0].text;
}

export default { askGemini };