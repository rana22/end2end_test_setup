import { OpenAI } from 'openai';
// import dotenv from 'dotenv';
// 
// dotenv.config();

export function extractCodeObjects(markdown) {
  const codeObjects = [];
  const regex = /```(\w*)\n([\s\S]*?)```/g;
  let match;

  while ((match = regex.exec(markdown)) !== null) {
    const language = match[1].trim(); // e.g., js, javascript, py
    const code = match[2].trim();
    codeObjects.push({
      project: language || "",
      code,
    });
  }

  return codeObjects;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // must be set in .env
});

/**
 * Generates test code from a prompt using OpenAI
 * @param prompt - prompt describing what test code to generate
 * @returns Jest test code as a string
 */
export async function generateTestCode(prompt) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o', // or 'gpt-3.5-turbo'
    messages: [
      {
        role: 'system',
        content: 'You are a developer who generates e2e unit tests for React forms based on page input or interactive or static element',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.2,
  });

  const content = completion.choices[0].message.content ?? '';
  return content;
}
