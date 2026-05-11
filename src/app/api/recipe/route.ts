// this api route receives the ingredient list and cooking method from the frontend form. it constructs a prompt and calls the gemini-2.5-flash model, returning a text stream directly to the client for real-time rendering.

import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(req: Request) {
  try {
    // parse the incoming json payload
    const { ingredients, method } = await req.json();

    // define the strict output constraints
    const systemPrompt = `You are a professional chef. 
    The user has the following ingredients: ${ingredients}. 
    They want to cook using this method: ${method}. 
    Write a concise recipe using ONLY these core ingredients (plus standard pantry staples like oil, salt, water, and pepper). 
    You MUST format your response strictly in Markdown.
    Include a Title starting with '# '.
    Include an ingredients list using '-'.
    Include numbered steps for instructions. 
    Do not include any conversational filler like 'Here is your recipe'.`;

    // initialize the text stream with the current 2.5 model
    const result = await streamText({
      model: google('gemini-2.5-flash'),
      prompt: systemPrompt,
    });

// pipe the data stream protocol back to the ui with the New Method
return result.toUIMessageStreamResponse();
    
  } catch (error) {
    // log the error and return a 500 status code
    console.error("error generating recipe:", error);
    return new Response("failed to generate recipe", { status: 500 });
  }
}