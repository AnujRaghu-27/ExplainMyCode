import { GoogleGenAI } from "@google/genai";

const AI = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export default AI;