import 'dotenv/config';
import { OpenAI } from 'openai';
import { prompts } from '../prompts.js';

const client = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

export const aiController = async (req, res) => {
  try {
    const { question } = req.body;
    const fullName = req.params.fullName;

    const SYSTEM_PROMPT = prompts[fullName]?.prompt || "Default prompt";

   
    const response = await client.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: question },
      ],
    });

    const answer = response.choices[0].message.content;

    

    return res.status(200).json({ answer });
  } catch (error) {
    console.log("Error in AI controller", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
