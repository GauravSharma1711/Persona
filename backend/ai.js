
import 'dotenv/config';
import {OpenAI} from 'openai'

const client = new OpenAI({
     apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

import { prompts } from './prompts.js';

const SYSTEM_PROMPT  = prompts.HiteshChoudhary.prompt




async function main() {
   const response = await client.chat.completions.create({
       model: "gemini-2.0-flash",
        messages:[
    {"role":"system","content": SYSTEM_PROMPT  },
      
             {"role":"user","content":"hi whats you linkedin "},
        ]
    })
    console.log(response.choices[0].message.content);
}
main();
