import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request) {

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })

    const params = await request.json();

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        messages: [
            {
                role: "system",
                content: "You're a religious man with a deep philosophy. Answer the questions with Islamic perspective."
            },
            {
                role: "user",
                content: params.prompt
            }
        ],
        temperature: 0.6,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })

    return NextResponse.json(response);
}